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
    "36bert1J46AFDAeAB2QQysyVjHKs7QeSuTZ8qXwBQxv72TaYPT3Mz9ie5dqds38MpAQmQa68FVksbyjbb9cJBcU1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ddbwHSDjVMuHGrXSpdNzVtxeE8GhJCVfo41AxBDajnrkneZELnc4TVWQAxY1Xi6RcgXBD7cWE8wkZybH4fbx1",
  "key1": "2dgcS4zXmeELEs364cfpHYahRAoqUNiAMrM2FSKzkYhVx9RYZNSpoC7RKRmrBsyhmTkhJSVhxbmfbbiec2aB7WLc",
  "key2": "3Z9N7su4ALvJREaNfveKS8yuLaTXqc1dLz8fveTSQbhUaMQnoyB7CjPc2iLHMnj5aZBuuFZuWBZGT8ZXsDnHVAW1",
  "key3": "3oFk4ht4MDHsk6NzjjyKyX2MV9Hb2TSk8DYGEdeDSE77TbeMQcQp1bFVoZRY2xLAynfscWJJDS77KuArP7ZsZgAv",
  "key4": "4GjvVBKfgJ3ks9KKxXq6QTNbhBk4rzTbruEPD6ykbcGNYzCAeLD5LDHchPkqdQTTQTXqguU74UnCs1kbMtHu4dRQ",
  "key5": "2PQHGDgspisTRtAEWkpVHptbp2v9ftFWpBda9jv4pNhM4XNua7MyhFAGh2a7orPqfDH8LQY9Js6Yh5VzGUBF8Enj",
  "key6": "33dtbhaRcVQGt9LFUJigzfqzZ6v8A5mv3ZgbbzqzTUQDSrQ1nTQQrL6npCkWaFzxZrsjkWZQnc1uAB1KgaLpSbfj",
  "key7": "GottiJR4KuM2JSpcuVKvYsH3sLKAaH7mzGLxJxta67bYQsrLfw8p1uYT6QmeCC3tp2hHq558zZ3znyJRAvKTSAD",
  "key8": "3zSvqwtSPPrkQW8zcTX85kGAG3dmxN2LvH2iqdNqjpMjhAYK3XGD3L5fEDe8A2o5T5hGGysYnDEVLGXWXhisk9tX",
  "key9": "4SDjitSBAV5AcCprJPB1udxzA9nJrC7Xg29JuDHtLGdcfkXcwj1d23xVRjzhVe83CtTk4AB6jsQPhUzi6tgwEzWC",
  "key10": "piNUELP8iG8aQ5zcbUSgDQR99rzz85szkoMMyyHpJCvW5wPug36TBHa3hX5sFbR92zQbAY6FXuZ7DFW1jqmgH4h",
  "key11": "2fFa23QcEKEN7oi6ap6VjpZbWefp6NNV7N3rhEL1f1wxNnDnKWpQYFbrxjHb7uvS4MAqtLjBfZSHbtsZRqFUQTq3",
  "key12": "2wwDAzRcSeHqe1ztgXFwvYZsVdYG8HNJqNg3KswPp9gEzY7r7L5vawGFQcEKYPooSxQkA5xkE5wCutLxCjaxPoxy",
  "key13": "5q5ib2HLruZpp4utQ327SkHZyDgjcJTKDmDxQwzGcVhKAv2DdsekKvhr1KuXneMMTTd3kaE25Xd3efmQc2x1DgBX",
  "key14": "55EmfQrQR5ZXFUDFcDY1QbpomajmKk4gLGgijMvxK8YVwSFqivspjY97Gqo7G25sLBZ7ocvZ8on6SYt13UwJHzkb",
  "key15": "42f5HHfecdh4ym5QUCvtKBQjY86byUUGsDBFmqDnpL7BxipGT3njsNc4VvQ5ybqquKr8fWa8kKYw3fbXwdXjSRTS",
  "key16": "34gzoGV5yi8RJp7pyREuus5njAPPbd1mz82QFGKKe8QYS7uNVGzYAgbuCforqn1bXef4LQcZuLRS27yowfh6E9nS",
  "key17": "2KLZmh7APQvKoDEw5RmTxw1XwUPHEvL8hBL5fjy8y9bVF8sLSzaYW3p2b4kaLSiZiHn9Cd6XhC3TuUJkxFebxXmu",
  "key18": "K7V2nGs32zPcTVT3VzezNrZEnzGXVLPghhwefSMfZVNSq55b5suzcsfbKnNLbkAD95TLaS6JCDXEy6WVreAHkxX",
  "key19": "62BCDCL8FwcNTWgqP1tMRAWQqG2LeKUbiFfdfLXNaLHiQCykQ9vnubQN7Z1PGSTmJJZa5p8FUYZJ9Z4Q9W7fkZ3k",
  "key20": "3AfuZq7bJ7CifFToEFAf1zbJY4YJdVV2d7Q86CVShwvTUBxYMG7mGJ14d91ZBSAf2TfQdTyEoMZhAk6VAtbBjTuj",
  "key21": "aiFG8EtZRqf8ATy1EPt1QGr9f5XfvtgCmTiHzG9QSbmC3bp5yTND3ycmWvWGXBAUJ16iKBPEjpwJyD85Ns8L3f8",
  "key22": "2neuC7VjE3iHhRtJKhxtiSbNVUy1HzmZziazUr8EHyZZu5x6dZRSZrvfGbR9izbCkzjewfMUfUwimJy9t5UssnWz",
  "key23": "598mFUUiGhP1xYwgkfEMvmgN8WByZiTSzfbhCPwaWEoPHUPWrFKULHdJFpmoB4Sci5jTFGwmFYmRL64Kt2PxgFst",
  "key24": "5XLFiRQjeTdDXfW4DgKW6i81EMbgwALfJLeV8F5o4DjSSy4bBCornnC4SAjtwu6tyzVD8rhxkJQ44hioxf3rUt9C",
  "key25": "22Yp5B4iqppWMbG2ySbdVqcjTpCEHVAhkejvpKVcbuQmTWqvYTArLacxC6A6cPv66e4T2ptz9RcMw7uVJXmeAG55",
  "key26": "3tvAV9eMkW9pEPAFuym6EXcUezGzfrXMXL4GLgE8GXFv8xA1BdKg81tt187kQDptifQEF4PmAKnJ8dXyzb6LQ4Fk",
  "key27": "58na85FWdiRPkbhN6ynaMRkjBU4AnA9jQj81qS8FF2Hur36aZZpaxLdLMQtXA6kc1vsvsSVQjpHANffEDmoKSWYT",
  "key28": "4uDgbbk79cuREgT6vfWYvs3j4f3TKs9Au39AXH8cBKR8n3kck4f9NtedBnLuDi9s9tY3mj4ZFV9hxXacAD4yYRTH",
  "key29": "5ZtnLo7oqM5f8oLL7Uxbex6AoVHwqJvsfYcSFCvVaDrPwRWpkf8Gfrhd3mZYhPKwWms5Xsrqan9ZwzzxJjpE3qNw",
  "key30": "y2pTB7M5at6P3wcVZDRmxXWeiT7H5gTnkBwqL7jTLmsKDMNozk4w4N4RNKmJ5ueX6pTgygHNKhdGfnM7npLuLrK",
  "key31": "4gkF2TLVX5a8P7r5x6aUSLfVf2r59UtYASR8gngkaKVweK81a28QkGwNzALXxcuB2HCo9QWmSVD4nJJyj2judAJR",
  "key32": "5RBzStawDsGJWLF9bYGWuWAXPqdvMZV6P4S4cAiRa4SoEBSiaQhDJvjZeYb6URMwdNtmKu5zQw6NHfFrWdeLKKDE",
  "key33": "4xWc92iigTpTRQuuVYYywtUiAcCaYVoXi5N5cub1HZjFkDaadD5JUVwQchnEJdGn7dPzKQQMkZ627zU92ovSCRvp",
  "key34": "DtJNCusoRNfqSH1hFtAFpVbY5uEaYcsLd32i7R9qYrWXqKqVb75idbNh9Q4ud9RbH8U3LZ8XHQKuJX6XnqqwEt4",
  "key35": "3uCwtaKKTtuDmo4mEG6bNdvXT63HjBneMAGt7zyrhifDq7h1pdoMMgFUff2Mz8vDeusKHxq4FdNL1kcQ62YSBo3R",
  "key36": "Xo7AGoZsz3FhiscBYDKtPouvxJmbLbejqBrh1E9eAp7QsuBV4er8rqE6KssFvDB82fNnxqtXSgqreokQkVyFuND",
  "key37": "2oidYk6Fens7bBPgB6AyCJhAAKndzg9vUahqvzFvHeZT88nSQq3C6jueFbZTiGcFgR2Tu7rb45Jh63DnX19ctPKB",
  "key38": "3UxY8rzcVVN8uuaoKT4kgBrWu3ToEEqawMKwB3W1c1DekK4bDHYLBPWvX9eLKj7xrKUnD1ihbm1y8igQfgqQLCdF",
  "key39": "H46mU1b6exaCWmygbBQ6CjrRtKzVpQsQRjQkCk6Uhwdpaaa7Tiy76ku6fffcVot7XPYDwCxiwEbeMrrXmXaE69K",
  "key40": "4Hkcg6PLLrXNqGscVQFZ9djQfDNvBPSk1ccour3tEAfFinGJMmDxJ39JjWVwYPDimALXM8fNzg2UBjQ2aDEZ2UEH",
  "key41": "29Ey7TyubPFVVe9fFBBjsNwUUrt1gsVkNAAn2mJRK2qMMF3jxrMA1HMGKKDRWmkboy1otfrfBCpNj6BRQ9ipM1Sj",
  "key42": "4VjtuuGysXiKyVvWzw8NzTLEcPTjnn3HZRdvApgnhe3LjSzHvfhpBecpcjW5ZZmRpF1D7CwV8HDeVQkidoGgYN7h"
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
