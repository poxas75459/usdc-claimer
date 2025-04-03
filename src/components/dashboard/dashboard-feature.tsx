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
    "3CkDHxU1kwKJCJEuK11mTdEt5sRD1ksGbXLbptXqXaHi4ymCK6SZY8kfcwy43fqHBvpiwY1RpyQ56FVzgxDAAwJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3emcj7n7jPgn1r2PUPJvWboemkinviHCs4YbjQzkg3ga5V9r8tafzCCwKTEKqw7RmugTuTSAfLSqdZtpKMRCn8d7",
  "key1": "34KU1iVP5ra68GH6yaiggFjA7vmuzvwDd4i8GQivnGPQoSYVbZMJBinSTTZDqDe9hcxuLL3vyCA5cybz4Yw8oKCX",
  "key2": "2dEfVymNHDAVJASkxqWeSVZCiSzGAWKmCuhfasuSTYVgbzYGq6f6eS2DMttQaSpThu4eo3j5yDCyyroSzsCZpxT1",
  "key3": "dWVzUz9CcmniMU8crwbgXqHvqvRZtHaw5qyzhreiU7TBkHhvHrdKTjZMLZAd38542CjzWL4CEyZASoq4XZVzpu6",
  "key4": "3vPy7ZVCbvHTFMCHBErwoJfsTdtWqv2MSTYFhFiQTmgyANkV1W8y2ss3zwgAKQB8Kh6GtS1tx5gUWyhKNQB6VeqA",
  "key5": "2q6L8vgDWqKPfWZnuRc8KGc4vC2xgo7WNBA4LR5ryJJy7F1uzgE8bHFk8EHch6FUEctWoWFWfm3uJkwDMJQ9HtTq",
  "key6": "3JZmCNnCYdFfX5y7wtW4VFfsSkgWfdSeReXscPiWoHPLTr61jnxPZnw6QPdtvVwKyVpLa389Q97V43dvSX4TytRM",
  "key7": "3BgxMSvHno1qveF3qwroToKAEEvX27BLucsecAeemnJL7nGS91ajQuAMCKJogS1SjuphiGaYAgKmM83eZeNBsqSM",
  "key8": "5nDbxon3tJsnUFH6aRa2yFTPdkiWhq8XvGaCnuPFXChEdf7VKuYdMjHzuRhwPZ9P7dHgyZNbB1opvLx3aVz7prPS",
  "key9": "5VLhiYd3CENnLdKqVVWrWUvZ8LFSiUNJtE66xNcetNP8o2Utbp7B95g2UG1HeJyKKKgBUssdWwr28f3YveoHYDYg",
  "key10": "4FA3bHiWPZsmv7nbRW2MJFLKjxfrdv6rqJQESEvq2LeWMY8bx4pUWZqctuj9LRFT8d2NZagTFbXxjkHibTk1mctb",
  "key11": "3o9ajho8shs3jzsizauzfGA5CXYabMAYdRH996KHwFCVeRupaxmMLs5BieE8J9CfLkEdwf9fGwRFTxZyUr3zecMk",
  "key12": "2kupqcZUNeT21o93zqggfbo6v3D5JsgicfkBozUfMqbzSu98BiMAZV6YNqyu3gMzxsaEXP2rnYxLfJKy1JTnnLQt",
  "key13": "5M5ygSDduKkMDkE7hwDAHWzDrJBtDNpjeEpEoddQL5LPkqRtX9ELDggMVbKtAYyz7gNweQvis2Ny4Pb63LxCH55v",
  "key14": "4HwXnDdDdtkFHQQTzyKAZxqjTFULF13ZVFJiXFfdWXdfWAgL5S85EvLGmmaERwV4kbbFJ8CAv2PTwgXckfcURaMm",
  "key15": "5b5Jwx8GsYvktP9djEzQ3eF9NZ8phpyzSgTFE91bi2SdcBiXP69fjMdaLjCMafNTAvzfsRCGka1Yie6gLHMGkUMt",
  "key16": "5jJnVa8DBcN6yMVADiY7iR3MKkD71XSSjfsdDGZxdSesySLzJAVMW4fPZfGk44nY6WGFb61wBqXf45SidL7JmVkU",
  "key17": "4AfTPGcmFdSW9mGsMhcAcxfBZ8WAGupgjwRpzgjPYrKDDYezpKUwSNVw5oY2pVbQFTpRgRzEVaZUBsQyr3tYrGFr",
  "key18": "29yhu6aXTjqHSbEjeVnE4N2PChAhfTyEaqz682Pjnsx34P1uMhxuAKrtRKFmupDd9E7D4rEd5eejZ5FU3qXHMYBj",
  "key19": "4fcLSU5RRbGxieWP7PFaTPznnzJ6b6edefVPdrfFvkBoZ4CMSkzQ6nWoJsL3HvzRhfieKZ2EL1ah9PLf5D2pAByW",
  "key20": "2FDeibcixjzi5jsgKum2fhvzewQZncUHmYjHk8ZwEq3moq5Zz1QkfHvUmPZU9MANbFNkCqnoQTX2mRB38paiApiB",
  "key21": "31wzffkN2XVEnkWSEJgs5aboa6b3XhxsfHP5ZL5GK2pkz4pKac29XPY2kFX5waN7L11r4JXLrHpJxpRA9RdBZLFw",
  "key22": "3KuZgaqcWJrShnvPt4tBw5mfYXiZR93bGqUaSHzfnAZSQthjxBwWvMScyGiyrRAR1UugmsttYLepLcpLc24Ykp5",
  "key23": "2ZWFrJBfwxirFWe1Sc7ZWEhVu4f5HmbERUmnRkYn4apB2bPKQ57rrXrHHqvqJwWTRde7o8FG8z3RCVdjsb7YnJHS",
  "key24": "3rxEjkJtKshwZJ3m6xwzmLukYjSuHT974pv6p7ge1rHSZQvKugr93i8UxWKeDPutAckYdXURni2aooZpuueYKcVT",
  "key25": "bkDL55GaV5BsN6dpuJJwSAgSFiKMngZqrMKvw7hXZPkbXbZMeHsdEUVtwoTcPU4ixyg9mPKdihAYbn4Tdffvxz2",
  "key26": "5grJ2djYzo7FRLE9N6hJCAw5WYKSM6Lw8sPv4xsPkNmxiXdJbDqqyu5Kfwg4UPSo6N6X38ZmFNuhz3175JPcNLhZ",
  "key27": "5R15r1pW9vFixXEwg4kNSgoxNvRpRmqBWDBb3qkh1tiqwf83YnvsskXwtYP91WFb7f3oeKT5jmbaFhtENrTHEonR",
  "key28": "5D7HSTN16FdzTst9i3dfRba5uS6PtiT8eUdqfXiiRPRxGEJPqt5kU6WLZEp2oD98hyfmPa25JfbwU7qGEdhSvhHG",
  "key29": "2so6webgWE4sM6bHTQnJpnY9xqYstAhs8y6bmNSA3ZofWDTzxRQeMy27De1JzXjwRn4wmx2oNT8cKqkxvMDY8hQX",
  "key30": "4L2NAvUhYN29ZUPW9yvr7YdYFpBNdtA7gQK38a4yywHvYBVhWrjDKkRYmcTLwZrT64uoB71Xvu9iJ74TxJuWmqCk",
  "key31": "4LsSiT5mK71mPfvuBKmSLhsVs2yfjqi25MLWTtgzXyFNKXDJ3QvnqkZZoJDCLz1sr2Dwy4WQZbB2WCeqhLvxQBD8",
  "key32": "4k5jKDpxABrJ7tFbmQHLTudyDLGr2gKrpYJYvgmj1nHmy9dkk6LVtsX5FjbTcmBHqsJGfNGLPChBKYKjPS5UBFUp",
  "key33": "ek9sZpHbTbfidKqHcb5c5Z2RHcsidm9ojkpRHWBhepDtpkDnKtRcykyQiD3YtZwnmeCNTvfA4x3xvApJHHSj4Ht",
  "key34": "srPYzhhKYo4EpUo759EXXqaLtz1LqsuEc2TyZGrtBkyVwkbdwDBzthAokm2LgEGnNFX4XumyPSaMzMRWnJxiKU1",
  "key35": "5ETLd7WRYWnDkBLXoGdVWZhtCn6J3pXfpC3Yq1aLRA4uvqbQ51cXxpRm2GjMUvypzYDxvw65BLdfyyk6kDfVsHQp"
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
