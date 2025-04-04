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
    "3aHjjuyEbJGVYi6WUmvZpuNh2eoAxJubqH6Bka7hAmRNPwK34C7zMyMB9c4uzzqD18qeqQAEAALjvFegKc2EkAs8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4swJeQSBFVyGqstVrTm8cRMbQThSv1P2b43Y492fioLsDiCvCBrT868bSjCWYzu2zgkAYWWh6kACQckHH6Gjp3hS",
  "key1": "KDkQn4LeihLbXdm9ewuqqpbCXAqHEEBRY7zDhsVDoptPdhDPpsyBbjSUF4eKuaNcdrseoWsemdQ6rRw99j85LZB",
  "key2": "53K5dQVuwDCYaX3vHm4gyNXkiYhxs533sFmjyjk96P4ADPRji2zjvGFsUFz2ELEiS716HUei4rkKgjTKUct4Gpc3",
  "key3": "4z7DB5f6JKSsMRcFX2Yb6v9DEBSUp4eCjhRyEB3C7XNGBY4kJ3cnesBPCvhTCEmj6Si4yYiewh69o9XWhnfLeRwJ",
  "key4": "551w4Mdiedx3m71YQ446hGbpNPzmpb3Wr4oDa6dov1sgARn5bT8X6K2AR68P55PmJeAyUKKUBpnZP1euypq6dzWR",
  "key5": "3HZSiScJRHh8A2Htu4hNKPYq63qscP6arhG8MLaeufuUKPQQaq7jby8ui1tNg9hZ8YSxN3NJPXwib8mLxa28VAJK",
  "key6": "YGXF66rZeCKZrcXwP24EDw2vS5F4YS3znror7WcNhrVThEQTJuJhFnyxoN8PUz4ceAzDsK82x5z98PPHtV9iEzp",
  "key7": "2mGknqNFgHgWwNkkbUXHUAuNnDfTamkN1RVgt2GT3dAmQmnjBtDiZFbkFU8P1bEHB5WJgFiqCcXb4A3oR7t5gMm9",
  "key8": "2Z7T62fZj6CJ5K9owpgshEeBMCGqJwVKHV2Gugru2HnWDPQUng5DLF1YaQrfJh2JesGu9qyJ56VafTRqTEv6DUmU",
  "key9": "4kKPBjZADhyCZcVKKx88GqPFNFnsuipmvReYxVBkH7BRzEsUe5pw2v98gUhKQaFp1uPjpB7C6jLxspGJFnYiLeUA",
  "key10": "5xvEZMQTksbky1tFZtvSa33Q9i3mjX9m1szz3MhPnUUAkpNGkNWbndcF4cFaHLLs2adBWdHtukgu4HS96wGW5c7b",
  "key11": "4bZWnxTu9X5nAQQniYn76zUsb9NjkEdGYTdQ9qSCoTKWng3eLN6iap6PKwib6QXKpbfVmqJv73mb6sRRSvu7MuPQ",
  "key12": "5NFEDyGFziMRybk5Zfa8BsEEuVdJQfGBNMnBzo2WL3kTdfetYaAkKZ4s3KYbLXZwDjPyrVr7St3YCiMd4w9jpZM5",
  "key13": "5RpTepgb5AA88AGgHGstssiPrM5WAwybthFgAydHy195W4s7annbjvhmMrnBsCdTCUr8XeeoCvuTwDHQPzCANdnD",
  "key14": "3JXC2eC1XYbTPStDL7T9szhPW5q5ToZ9PpgWHAyszTHiBJf3FFzZzgHvShZA9gaJ9xmaZC4T9qv3UN3qpDCJGPmG",
  "key15": "5F48e3PkVqSMAtxuqBD9dmMMpzh8LG7zJm1hgXKZYxjS3x4tCZDJDUdHoRLCA4J2ZBV5euXrSXAm4nXE4kmrZPPw",
  "key16": "3AKoVYyTCd7DKiiGDHuuFp7HJY3iLr1SqRMf4jQaXeZmTEce2iYRX9PUc6WngKbKHhGwqPyP3VE7AnhspjpfRZfz",
  "key17": "5uVD932aKVSZSyk1DEvUippcvrf2tgc1kXk8mzE8oEQjLGseDEAJhmKjLQwvz66y6AuNjYmrxdBs9C8JG2xSYixD",
  "key18": "4swxhRZdzXjLgAqKtTTy1Bs714v5B4Nm3gM6XPPZ8dyhrZaLyj3VYM31kEbbHkXXNrQpNTSvFVJZi5g877ytQ8ZT",
  "key19": "2Mo5Bh8ouiEy7gFnpDZQkDTfyYNYoLuNw3gFijzqB5ZkX88r1nQXv6KSvZaYwK71um9r1aJFH1MrA8kdWNfN9eXp",
  "key20": "5Mj2J8MHiv2LojoKDqUJDRqHob41kVsSUtJHHkENSyCuoWSSTwkh26mopWj3A6zWxb42dnaJAKYuiuUj8ygaGKtY",
  "key21": "4bz63kj52L6Hj7EUmTSxbV5LvTkpvmUzJk3C8upE5HR6Tnj9M2Fcsvcvt1kM8SfHDre2f23jzxgwDGjnAYccRPE",
  "key22": "35XrFsNF1r1L4gcZr4udVTzLp2dd8dWrCfnCNKXp4qU4hRFDTQw9CCzzkRUi6ESCF337ohk9HNYTKm3RRcQJGHpc",
  "key23": "5otQuUSktvN82q2A1nLLSi2aWb8mU6hK1RWADBtfa4FrfSE9SP14nuUcgdBWxrxJfNDwZmaZm2gEe4gyViy3qp8A",
  "key24": "LitodaXyEJiSJXHq5u6Q4rqx7rLC5CFVLZjD9qwdz6JJWic8PnnCJRoLiP5HMzVCFtArgyGCVkEzSH4xf1zuumb",
  "key25": "5ptJxJDmxXaXQMeqAVMz8ykkRXToRZhbvJ21TztWd7csrGJf5xf8xGBxBXETH3jsygkRN4m5eKkTs9K4k4jhkwmo",
  "key26": "3R26QuWJbLzdNH3oFCf6NgDejDoXRKGVq1ewCxoRRUDcSihQWAXU3eG7nFQi7FqRjjraqLKeCXMxzr1ri1cuoFQt",
  "key27": "4ixdurq7GasVcMW1wJH3xcdwUfedmn51BJv4ZPLGRvypNirW1UK87eLrw8D6xNvgAbUzBQbN492FgoLUHFkVmoWf",
  "key28": "4tCXcfSwca1ieFX2oeTH9NG8ZrcMpuw4uuCrJ4tCX3t1grKqFXCCN4jaDXpvdEjSJwPSAjr5tWM2cckNU4CKCVdH",
  "key29": "2ozukg7e6jWfCG4LQckno8XmH6ZkaavcwSsiWZHHbx8UTjL8wAFU2khN7NUmKkDn1PBY871qQjsb9nzpKb9BmK6f"
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
