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
    "36rc4NMpXFfkeRfgZDMKRoAQyC76PwJ7QUMcQstFyhr949sSM1XFwkXYRHLjV1R2HYvysutRvY1nbdBj63RyJShx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ULcK6L5KR6Ena71giPqqkE5kBFGXDpd8EJYirHHt7ZmP2YbSz2x2WtSuxobCr1ix7cQLESTnRbkj4Bfc1fmCV8v",
  "key1": "3VtxncMx4JLG6hfaqJEnYfdnPMVh6MBWECvFirceiBxeZcqLbsJYy8bSJB6hd2FYT5eWbaGRBE44bz4JaBtY2zC8",
  "key2": "r1hW8RDJu2FVcFrTPEDthW3XdsnME5geAwaFA714wL1c3ZFkBPHiZ2Jmy8gfJ1VP3TzwhssBYYubRfK1aV3oSGi",
  "key3": "2CScsWYEKZ7Kb5U2bjQ7giV8v33kRYCPuceWHh4kFttmp53Pw13uQQN4Pn7zEZe3LEUcDnhBC7mHG1qKRC8cdqDh",
  "key4": "4m1ctgy57L2LFbXmH8fjyvwGSufPcwqMNce9ZXhqNuYFtxrgqzLkA5AaLnAnMB8gF9csdVffwdbfPJH2XzcGAcQ5",
  "key5": "3bcn1jQUNQ38MbimL6gyLHHCmghfj2hSqrJhEaLpqmAofyUXp4VXd3QY1SGv1RJU34jLQtHffCPAVWHiyhy8vrLh",
  "key6": "2PvrK7rSLxd46n6NeDbdzzPoWWXSfDdkpjKNjxDKeN3Sm3RSptXUGJdFf4WVpBNA7DJXya2Yrk9Y8GDoEsyWry2Z",
  "key7": "eEPFs6bRxreVAxctijDZkVg9Zx46Yh8DYVBQDQqjJwMz29LLaBHkfBr7TvUNrHgBzoPgRbcyC5GjckzCpk8qPLb",
  "key8": "5gJzsqFsHW8qVkuWrM2D5keWphescpWzqVCj4FJhFrxQZVNzTiZM1md7ksrYY2GW1UzqWx6xNQUWMcNMNYZ9QtLJ",
  "key9": "5V6Akta2uL193z24MfipiRnsffWG228QJwHuCiZtKMdfRLS4ZP5yv2Cu8bEEoVu1BJ7MPRGoMfed4gg8GUDAcjTB",
  "key10": "4q1HU4DDTQDtr2T4X11pZjgk2bdrKh3GRXYaQqhZuTiDfjq21AAxvC5hvJKfYotNhezBiX3JZccLxnp1gZc96KjL",
  "key11": "eWt2Ex4vMXC6V3T85mGu3ig79k4TTX3nG5NQJXJvvh2ZJgu95oCrRa9Lak5q8FwziZigYkn4uKgABdVRD6WLEd8",
  "key12": "aYEWWGNUTzmFd4zFjyKfLpfmWfqnBCo35DZgz5ZgwxUxLncDh5Pssokb2ZDLaUvMmGd7LPkwLAieYyuKeTuPQtA",
  "key13": "onnGThAwtogVDLhEKm2TMoWCjiKELJyoE1gizqUDNG25iAWPVohpXoJKk3caJx9nMaq5ZFagzYVPS1zo6yN6Qah",
  "key14": "5TzBWtZhQSYyZZcgRH75VsbReBTtRFS2HNHbVdZZ1yyRyERWqnvHbnudPKPaQXrLmtKgPPoABS6eRcRKJT3ANdHB",
  "key15": "5yazLBNzGuBFgb9rnps6KoC6158voRqhijtt1PxVC5cCve3fafSoizaxMCug2r8kjnSnHJgLUMvyPvWp6LFTizYy",
  "key16": "44ypG9auWFTZohakNspw6YVF3tueBo2ChpDN5T34gJL3dnsH7QkYc5AcvVrH9F813aTKF37xCMcdsrYVJDoBbDoQ",
  "key17": "m9LDyunrj5DqJZNMDXfoY9c5PJa3yyEsQUruz7xhTxx3qx1k2CBskC2ufZo9xjqxCcvdzciHD3CXocMQ4rbTZSJ",
  "key18": "2CGRxMMf9zQDrKHFmnTsVxjL8rWj2wSbTDbiPn6uYJgAuJzdcqbV1HNwZS644hVFSyNBBoAP6QPBZs8YRAG83qk8",
  "key19": "5pcs7bPGZ6CL8vMg8vpRBXfnGcedMKoWGb2tfwRZH9Tww8hC81BtyfWrgjb7AeHbakdYsPVZBd5j2ZkMH5trHMWM",
  "key20": "5TCjgUpbL4HnbzJMWy7WnHSEtsVLY4EVzBxk7aQUg1EnUHg56gVwe8an3NoA3EV1QMYitMrXHDjLxBkFcVTUPkn5",
  "key21": "2kyrBgWVKReZxNoqVhk3xY483D7Sa7KENiNmeztGmhun8vqyQVSodazu9uK83bNiiHJ5xc7Vt1MCHoSTRozTuqr7",
  "key22": "4pvEmrH5s6caSpGKQ669Sm2fc4fRS8AC6dJJMtnCSGjUxRyCJ54TuE4srM4dHb8o9gCvVmkox4zVjjjaiKyxwfx6",
  "key23": "2TsuqM1NZbZTRn3XmiumM7bbqdEW6z4VTSB1qTUiC2ABRdMYjHcycjNXvUKewes58r49b9zop9HkqsMkAXcFHzxe",
  "key24": "57FFby791BVkwM5bpPUgfNFzQmP6NijHL3E9wR9mtsRhp6K7sHmGUtN8JxDcN4gpzxhaferZK3352agz11bLxc5A",
  "key25": "667CWEZrMGzmZo5XHfRXXYG9ThSKmjiAYgG5mLyc8uWzknHZSDxn6HFzHbtAQmnAiq2PDWsn67nawAKMkxwW8FKC",
  "key26": "BPHrn5FiLQLcP1bw232vZZTvrsMuHAJw5jWEoiZrsNN2FqvmHYfFgVnbzPjvTQVZs62hYvSDxyixGL2yogxzAJM",
  "key27": "4BszcqzuFuu1waA8CSBZFtsvWQE2isxQQnxu8JXn69vx71EByEdwfbyRDUjADyAHzpY6FuBztR9mF7BnbePdmP2X",
  "key28": "3G3sxJRFC9qZcLWPnLBa6QHs7haVemNgeyERoLtwDVFRqKXBydvvXiHNw2mCwtScXyqQ7tWWVEnhm2AbtSrX9rpt",
  "key29": "5h1qkNjLFXnagCnBeaCQfFTsYkhSfdEJ7W66gzECio39T9X7f1q7gnYBc2noGz4wbEECc4qT12CbVGKDpTtmvHu9",
  "key30": "22VZQuB4ysArEk97Lseyf1jkUeKkHuJmfDC8Pk2v1hC2iEMLNFv6ymmCAJtgepG51GByFAGZZoakeqz2ufi4VPnX",
  "key31": "4zgkp9ZcPP8kB7oBqmocKoY3K2YoDhXAuPQrs9aKc7x8n3h8v4Vkza66A3UBNwFmH3V6jhpo8nrsC6j24Brgt3zr",
  "key32": "5dyWQpgHxgeCQSjZtmiM568QdXAJFSEp8s2CTxAPQ5PKD5PsJZcVCJTm2y2xgfJBZrhZedyHEnjxKoJavrMo4AWY",
  "key33": "5DFwZc4tT7AFug2A4zB4NUqBw3ADGC4EyHj9zQUFGytm6NS3boxYdfeRx6WBDeJcDhCe3CJ1QZC3bwfJ7Y4ACT9K",
  "key34": "28yx1Uu3q8qD5z5zAwEWWDb2TUAhwYjV5UZ7B1eLttpXiioHdXz4mV5iJ8jy3FcVKNS3buvxADsTciGkAneCVtim",
  "key35": "S3Nh217pKnTqt4pb5t8ietSeFrqLVrWUxUq3A1DTB4hqCr3sv3TvX7ecF1k4zYesFjnTmFSMhQ13NBygDohiuUY",
  "key36": "4gqG7uDQYXFXsknphB3HPs5DWnv58SFzKic48pCGyynJYdvmhaPcyXXBUDrdJiUNEo4fZmf81t3NLHhEyL4XwPSb",
  "key37": "VbV5ET1kq6MZ1kAZ8zVerzvUTb12r5tACvmLwvBeSLmVVwPgR3eB3duqRzvqToTYw4P8Jrqn54n9daXVHorZuMD",
  "key38": "56V7ekLfBV4TomZdP554w2MQjgVkUA3wX2EpsZAFCJTA1kUH1XTV6Zin5xx1JrdMdtPy2aomnypcYSatAQkhEo9W"
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
