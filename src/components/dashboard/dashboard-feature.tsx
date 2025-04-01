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
    "4DuVMdVoerenuZpvLbeJ88Gpgugd1iwZg1tUnne2QeBek4v4AcMy9hLik1ZqN8f9BPd3gJaLYNFepN9sPW6mzSPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3adicwQBhrLff12dvnwL8r3psoy1QFqA8ky6KXkTg2LfTb6BQkj36JUdM2XGZBSfubFjmcYVbgKjG1nZ4Y1owNkZ",
  "key1": "5Y4yZiLCfCfusNKXQdswvf4QoRM9RjcXp2Wh1j3Mp8vQKThFp5mnbse5Xxec4XJoAAGzgCmZqXb7hPuxB6MjDHt2",
  "key2": "4CDRBLTME63Us5cLiyqC712G7yo36b2TnB3yTYpH3dtKymJTdbeZwKvrkRuo92c3kojNPec13BF5gR1FNJsdDnJ5",
  "key3": "3zZjnGnNsy89ahX8WTAP1wDuSkNg8CVKKty5YXCySa8XyX4JjdjtCKXBXG6eAbbfz58MVsiEJvkFRbZBJgA9SWLV",
  "key4": "5NPZb8HDxz4HVK1p8NFbhCNeJZaTxxX4syw9qsNHtbugSnbi6sA4SEVN13psadpGqeMhyMwjpdpedZsvphsmncoD",
  "key5": "43F2ZraToaid8KoZ8ZR9UvGkzYv1eQNw3qTnRQQndwv4K9X5DitwKRU6EChH3sp747nawHPkhRudru1ATz5MgdNE",
  "key6": "3ieUKwDKwJoNVNJ5GcsMvbger7vexYTJPrW37cMpUDRA5p1S1Q9RCzURQQG1ndVubGBGjNSiXFWZpa5Va5q5zGRQ",
  "key7": "FUk8yVsytUCRGoy3t9HXkbqCSPiikv6oExRAzWJCRehzybmj5SPtwPDsoMLk5gUKTAjx5aXQGFLmyAYtxL39hz6",
  "key8": "2zJYGPahAXn5TNsmmGL6VQ9TKtPeyVDErJVbhfaKBuyrx7MqNMtv7LC3U1sT3gVZQVJKR2v5tAS3QFby9pWpkoaY",
  "key9": "3N7oHiKqeGhHq1DDFSf9LLq2yVxSnbBJeUypqaXNnLTXyfFJ8C1F4bgBLCAdiT251Z8BKYtZeuy4YRWmJXU4W2Ye",
  "key10": "5AsmnkdawvPkMncf1cCm7AaSfCYn7pejejn6eV4rRM1o8dUYxpaXWetybHU82ajL3YqWsn9bokhyYNTQM5KmRqnr",
  "key11": "5okmJY7DjskHCtinV5LJTKyyNC5ahBWvmA3fFhox1D28qgYftVWqzR9XU18gsU8UFKGSdp7VbLv7ZWa7W9LPwZJm",
  "key12": "RnonYr6Bz4rEKXMVzub2ojP3nEaqqjKY3MRKJgf2bTPkddHbvnKCsB59g34RHU2yRpkwtEs2NGnghGAsdwYs2m3",
  "key13": "4ib4QCheRwXdqEyqYpVFbPo74t1C2yEHjebKDZJBEQU6ZNddANgTXrN4b9XoRhg9q8Kn6TWiDR6vSaY6Jurs9ZHu",
  "key14": "4Fm5WqarsmJk2VAURvWPx5PzQRbXRhC5RxFqnHD9hm19Bmu27Yrnf8pjZJzLwmnM5TdXUwoFMneoBkbvTVAYwzkc",
  "key15": "59tUpB2PXFoZF8QfBPiH3hDfoyj5aM8L2qM6vb7pbYUhk2hq16iZEoPrv4th67rkApcMKBkTADSFz4CTQXdCvFdS",
  "key16": "5aYuzaKdSUoWgBQkjKbfDptC2unmhpDDgoJr3ABqFNvtwopVuwp3tA7uV2M1weL43WdSoRF3JBB6QsbCjFHqGgS9",
  "key17": "5kAAzCqJdQgpuAqCPBqPu4sLLhFqVJsY1dnbR6CVX5YWDf6dtaArcZDk4XfbrjMgr86zL9GWHBw9s3ngXjuVMLes",
  "key18": "5rwuv3VpvtsjDsyXifhsHqM6WL8rhnUuFbx6GUqsDK6x8U73bEx89yrQYouKcoAFFfCcDZu8f7nRGXD1CA9kGGK6",
  "key19": "YoHFaqQyjiVUtFsFNxKVgJj9DS7fuvnre6ra4tR2V77zJo41fiRuhB1gtZnwXo5hVaEZe9G5XaXYxYrnpYhuzYM",
  "key20": "5UvZGRw7ByytMmweFW86RyKZUX37mGtynYHwZgedWjC864i5RtRnd2wFJLnSWJNtc9Go5t4bm7JQZjWQeyheMRU9",
  "key21": "4JDdxqrSkWuvtxvsbbcCiYyGuXKrhvVB2HpeGUBvdxcPC4KSSjjubbQ7y3oFxYMSRrHEnJRd6dybByeGW53xRMiX",
  "key22": "5fA9XEWyjFXqmZB6b3XFEzVREtKjyivCAvHiXTWY9MhvhsEZEGe57TXrKdMm7iDnPHpbTcAQHip2LgoehMeER3po",
  "key23": "4AFAfvjNT28RpTfzarcxZQwaTvZCxRe7dE3T9Ax2eAnCxiWrhtifxMeocMjHUiqAmvMekSQ6RDWyGwzKkVEZzm2a",
  "key24": "61rdSrjvmbb75UZCohFTC6aJxZ5tBijtAUDCZJEopT4CdtKAcD7XviQV5w6wxoRekiZww9Nhv64GtWcrEAAJsttX",
  "key25": "3AXtttunRWY5swYoS6pSDJxvMWzVFJ4Z9xHBTANxz6gJ4X9zSdoRL8Za2HyEkkoKudXfyvAf7uPakmi9msVPhTMz",
  "key26": "5L3NpKabQQrU4T1psy2rSed7QgreiJ8CvHp6W97zNnKSZyGdPGvR7vNPMFjU6dZip2FvEenb2z6XVySxjqYKLvET",
  "key27": "3pzvEBiHtj999pZHzFpE4MTVJj3wcmGCf1yQvhPGrohtwwiraFTayZeedJTmJYG5fUp27SaP8PGJ6YwmHKYSimMw",
  "key28": "3eNDPsNAqKARTXECX4udh5j2AWaNgGTZBDdk3tFNfUqyTGcrWVe5nFG5uytZ1SrqtokXocYs6dBeXwRVZu5uUfYc"
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
