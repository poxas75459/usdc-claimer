/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5nB2z5Y8MvAx4YrjzWC58MKbhc6Zioi2vWC4KBdkydLgrgXruB5NRNfwxdhg2VZe7e3hQ4UUoCXzQjC3ijb8vjGv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33eNWJNKrkH8zLN5nexzjPysSfVqokW85a4AspApBEXsYYTz4udzdakdbaBe61pmUU3ctgXvN5VJfQAT1zvbhgKZ",
  "key1": "2JgpXrWiydi7iPAN7PAPtQh5e4re1rTgkGaXHUBmFmZ4abKpX9vXaEpw3pi3RY8owQZ3jiiZkyd61tk8GqVchzpC",
  "key2": "ZGZceRGLNnLCbt6m8wFRKLosrNgGfeMVJNquPWNPRDV3GZaQmsRHNZSoYq71tWzsY3RfoBXnr7jjdEqc3FNyn56",
  "key3": "58BUz18JgMC8FffptSic5M2fTe6asMTKP6wVNrLroDTVvNS4yu2x5iXRTw9kJkjY6ir9Dk1WpyPr1KBer9ye4Uy8",
  "key4": "tsLbVBhqqQihTnrpKB3PiGs8ULrT6qB4b9nDNV2AgVjgzL2VXvwYksZYSJXnxHLmiQ7ZxHnBua1A4r2gyGPj8y8",
  "key5": "446P8pDEWpapUAukXmw6Qo2cbRGyqGSVTGeDim1QRULtT1xVEtLQ16gXksJ9tQPX4ETbz5uWWjZY3Lzcabqm1g8j",
  "key6": "4eEyJWKNv738fQR5HXwAPq5PK5LSPVRD6C5EFy41ba1sCBVJH4E4WtJyevoJjw4WnHikEZVW6x5wDZakvDWU3w6Q",
  "key7": "St7hmKsTV8ShhdsJL88EWkYpBqEE16c5WnUiad2gqHvy7xfgXBfkzwf5CgbM8dBtHkuUfXLpUASsTn6azLv3XZt",
  "key8": "5qAaaKMi4dEZVXsnaWBmChecQUTJ8RBHZgHWq9ftLeKogTDsKzN6avv8bLbdUB1EaNmpnSRfsBFzcsmxWww35h1B",
  "key9": "5hKn3myCyndaQDQdcintH3PAnGu6UqTBwfCfQrGFewwSt3iDV5AYroBUB468BCTqtn87GoEx8HBdoDeJL8xjpgR",
  "key10": "2nMQyDQxqLVQwriQqQMzYoiG4E9YJH93u11s9HoMvEmktqJe7m7DYACKYwNbe1M5J2m5iQSf3XgLkmjGh1AF4k7A",
  "key11": "3p5t72caXB6DVNzgQtziv8LzZWF5ipxTCVqQLp9pHke4GMpiJuvCU9oR2WbeeULTQ1FPdfzS9d39GrGzLotsuhdb",
  "key12": "65rMbQ9AKNHP37YU5u7YSy9rxxjvYGmMad1yFv4hnjhNXGHT2BTWtMYPSJKf11N589wzF1vbTvPat8qXSr2y3VRd",
  "key13": "4SDgzRZQc99hJGsm1mAHVTuP89XJhmCYAQfeJfZ8hgaaURShhxAfeYGAqQEdPFj7TfB8CcDg3WqFkisnoQCAajFw",
  "key14": "3ScxqEFhawo2o6dn8EUbJnTNwKeLD6NNZHtAHayA5JrEyucQMYn5CQWsDf3a6ze19XsrfRwW58s29Dq3vMV7G24V",
  "key15": "8nuiz3KyVBBVp4GpuHKrm83r5pAMQ6gdt8gg7Uknn8HZrPLd33svShGKoEQChqEGyJELwLyZNp5Y2cV2hr2vZ5M",
  "key16": "5r36BpDoe4wC79q5xL9JuA6oYWHkBLTkroxrHiw6fpgdpsCfekGSQUXcyP5dKWAxcQUU1tPTjFbcsZ4kcusoW4de",
  "key17": "4QujCnNNfvQb1zSxy3uD6EkNs95HgFM4vSNnJuQeWWgNrfmH2MeBybLoBnQBwEJnSZJBQrDi4sZJWwrthav2GC2z",
  "key18": "4MedEuSKBDfLtATxySZw6QbA9tLCdTDejKhpPf1zCSJFGu9NYbE7u3qc255YvfvMVRX5dcRATX31QWWSHW2fNmtM",
  "key19": "kDKdwV89WEGPq5hcDtTn11VSbf6CuvUSuSzYbqLuMBmcfb46Q2tw4vwUcRHGPkYLyQCYEfpMnbwVAEpU8YkYu4m",
  "key20": "4roESW55RaeZv8auSmexaBhib4NwBS3TKJ1MzChr821pDkmYvfFHRmkazLHQKNuuQ6c5j445sd9dbkoNkikVAeoL",
  "key21": "3PDQCXb2F7e8wLdRSELipZBh14oiBXmiDJVk5x6TQEwEWVkJa77QfZV5QXD6LKEXRPuy3UcVcpB7NUWYF28UCdwT",
  "key22": "3QZHkSJH5GjyLLHLRg1UQPGQ9p8NKxzUnK6hxsDaC9VbbyiJau6mwcCfA3woiYiNqPDNAuQYTtLm4qwZAosP7Ekt",
  "key23": "3d1QpWX11PiqoRYM4oRhHgMuEUv4Mz6wMsgaF4BtC3EvxcF84aLPf9scujJ6Qf283jE1f1yyPjnWMqpiGmjuFsox",
  "key24": "2BGEFFKViatrjyAyJU6kZXMwdsZZ9mTscm2mTLCNkHa1CNq7gcfUwRC24rKzWXwf6cPHBLGZBvpnbbKkZgPwB1Dh",
  "key25": "3mHs1Qrb59DWiSU59JG3WmwE5hXatCDVzZHLdQzqw3MVpCWRN1wQ8rLq47QLMhr6tBcRBniPQqVzYqWgi3RB3Ro4",
  "key26": "3PZLtukrPnxEaCMZT6nHhmCbQvHkVgYvpz6xe71kW6HrmJiio7r4XqKWZE4dzw5k7uXhQ95EpipBcUpzuS7REacG",
  "key27": "VPzGC1Dvyz1Xu3mZA7bph31Ri6waGpopUxomXRR9CtwDFCjcBUs2MAWLkafVV87FKeqPy4qAmzafMHptYSiVpUs",
  "key28": "5vsPfWdcmCJihBjB1GQS5YvM9VgT6h33GxxGXGfn9sa9DJTSqBgT4JkeFmxoyRPZdvXwMcWn4grRSaFgabPSmW1M",
  "key29": "3fMxbjRKU9rtx8rxEXJFrNLQ8rP2ExnvCdnyc1Dep4X2qidtWC75U4rCGE6iHgkMgss52xUxYh9JdiXJrzewZ6rT",
  "key30": "2P2WAMA3nYi4Ubm4hegFHfL79ANND6gptuR5UwgkKgW9nkPtYAVrFTg1mgYZFxqNTfoudmyaxcQBb7pzXr3ccXr",
  "key31": "2Fs8w2qUywoo4ATHRPU7s4qVuwx3JEpDQqrg9Fyw7o3A7sz6PietK6vMUL7Mu6BVbW6GbD4DzBqoCEcEgYM4sxtL",
  "key32": "29zAh6px48r86nGZBQSop6QdX2dd2imKMpERbKhhZuPYUQ4pqHPuRf9XLsBEi7C4S8QeCSNscdMkizDpk97VVcv9",
  "key33": "5gsEAHG2rqZ4EcysquaM5VPTgZi9PAbcvAQ69cu3YGG5H6da2giiuSwhKtYtAJxQBazahPwftPT2h82cz26rb5p5",
  "key34": "3z14RGGxnKwnNJTRq16GoG7RzfKxsKJhRf8WhRN3CfmKH7kop8DAipU2tRPko3Tx6FCuVb8hySu6adVabXah4pUj",
  "key35": "3CabNra2tBZgEx4K1ZRTPL88CVmGVpbAk4DZdwPGkgzNBxvxWABZc2y5Rs8x8i2o79dZHkCLKgBsxjPDGMr2BNWe"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
