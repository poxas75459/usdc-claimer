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
    "5P1GYAMGRkavXtSRbY9XhejgJ2ZMumKXdZU41FyDPa7KuTryJQUKfBMyoYkxGaRA7BTB8Z2AsHGC9VZpLm2a7aRm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36DwvzW1SMfHosHnbv5iGbUnHizwh3PCqsmvNKNz4VZfzixz1aH8S73ydG8up2XYnV4gtEKyQgtSUP7KygrLuVRn",
  "key1": "aJPsNrUehvFcEXZRvqgC1n54vqo4dtEhSi7MC5MLxnemfdPUaPD3aYBwfTgaLjWfwwLWEU7D81tLckjEfNFNg8g",
  "key2": "exfYPCPPUvCHFtpYmeTSpnze1vT4Xi6fnedUwBQV6huE5mVZsLq37CvfPJH86rvbY45ZFgPV6rdrwKt1Uvwshfa",
  "key3": "26JJBFjQFmQPLDC5kvUaEXbGW5wYbBTUyDdD1kEgDaRzf1KeFGy4qh59Na6QbLoMMcUCQsx5NKaxknb4eydxbuVF",
  "key4": "3EyjYWQtnhaHqfJVFvtvDe34mGpdA3wD8WPrcT7N8gweGJP8fFChEfP5DmYXUeoP3HeiwoyEpNe8dFPXXydVWHkL",
  "key5": "4JEs5MvPFXALMaUnf5w4zidsBeKZcYh7PZKHCgAtRXMG9ohy5Lvy3WXKPAhAuZnPavKxC5MVLpozNHJJedX3sY64",
  "key6": "foeMbBbbwxycDAzABvkBKo2twrT1gTUVE7M8DRZnsPyPoXMXJhMYFbVcK6U2zRsXUnVFnBzypZjbfMHf3Rc1d54",
  "key7": "46MQPJJ31bJmGLAh8Vx8k3pCzfWG9MGiaoMCzatTSM1ZNaB7iBjfmCiHaVo6Yz41udzNBjP2hUXue7jtfutMT27e",
  "key8": "63kSvgjVSuyP1vVukRMjghMVrYLkjE96oujycP8Q9NWMHJdyrztTaaA5madzrvsJSdkYTNGVCApL1ZN7d4KXpDdJ",
  "key9": "3Fu5u4apMpjQF7XWLgua8oviSt9wi2hy2NmK7wSWLp9N5toie9bMiU4XV7AhEgXyTpB9BRn7mVSda9Q1bSdqCrCM",
  "key10": "2NVwhpTKyJiAUicSsQzBdTNWwQBkZEEtjVPxFJugGZ5jkD1yB4uZ5T8mBrXDXvfxT3ds48ZCaRkHQMwUeH1kVduR",
  "key11": "2apF3cWcTptbDbqX9Z7Du1EGvgFaRzNvPM3x6SHJXd1KpunkrBqsPF9cpDyMRFXg6Ftq5xR1PAbAfDGX9HtQ5igK",
  "key12": "3qQV9yfwep7t2xYpHuBaFxRN7AQ93oJgGaaVyTZyjpyYypeFxAdzfakFtN7afK2L8o3eyq99sp2BnD8PHoLjjfi4",
  "key13": "4Fi72ZEqvKBgk69A4Q6Y4AT7mVqH2Fk9wd5qj4eASD62m7RFsJy4u4dGrGQHnVo4f4GqnY61HZrYxk2NQ8mjfsH1",
  "key14": "9H6BiryadT1cmEWyy7eZcREP6fufzMKoh7B7r3KnpHNxfap8bvUS8zCuZwVyjaRGGsKFvZxpj9ioifyoHoJAZiy",
  "key15": "5GkSff9ddN4s2xHWgLgLYo2iYqJFzSeXnhSL7PMCBx8N3WjjbdKGoboSJjGpX87oRNNh3G4nbHmKtnPqT9uKL8i9",
  "key16": "3RxvNgb2juH3mVmFRsRVxKsLoao1mBFb2K1VWsoALqM7UX1PaSvU3RB5W5gp4PogwcU3kWHGhPTU5mv7yfq6EtEG",
  "key17": "CDV76gM9dDo31gMk8CN4ciFxFkGJxSzTqpeBjTUGpTXTGfTtkhSQEF4i1tVsAKKbYSqygMAhm28YHpu31F5YSK5",
  "key18": "64oQxs5b9NeJmqnYqZ8ZTNYnvXjozum82hyBF6gu7QUYx5v7rtDLUN7k33ERAZDZuBKmteiCK9wPqXsywTZDnm1a",
  "key19": "5nak4eQFLcCuEhxGcSJ4NY1YMEE4kneSsgZLF6ku5ovcdkHdv3inUm5SCaqexE2FUcAQNj3tXSMXMUaqjoaaFqNp",
  "key20": "5H1nV9hz4HfvSnVP2ifLXTmCon1T5rNmsiXELiccKDvkZqnUxua3hnvFUyvTSE9xyT9wwGMKz7CiQz7iEaps2rCv",
  "key21": "5paeVPWG1Epyrz57dcjNzuA2fozbNJpJ1iTVweTbuS7tksNCWHjuUWcPKnX7KBiofRb5dy8ruymupygaHzS8Ho7C",
  "key22": "21X7Lkh5qAHuRAFsgLW9hZbe6vmpZ3GK5Q29LsS7r8fLD9prsBM4GRE4vXRESHptdHwmY6sK5Fx5JyJMku3Xgsg4",
  "key23": "2Ki65SzzYcy9YQsYmvKKC3v1bp7DzxgwXmjuTLNzRZSi93qG5M78X4xunWLQGaJrp5tP8mKTDpud8XvhVWFccJAd",
  "key24": "EPXK2Hr9hcG4GAx7aYj1VvuBi9zjUxiVpjFQCEBfUQJ1n3vKA5LgMiPV56cqQ9bVhiqCTHwJmjGQaHFUbRpYaZZ",
  "key25": "2i24wrYhNZwd4CbShjHhyCrXztYRrmGhk4mRKvokas5WSg7k9J9RD27LLk8nkuV1DUkE3Sfeg3jsk4G5vDq5wtqS",
  "key26": "3RJJMJPjQXpUKadK18ceoxbCjysSYWSsgBrv9qfRL3fnu15kFLUMfBVP6kaYxM7ZktXfLY3Vqxxiu2fheomhYdKq",
  "key27": "3abCrY7KUNPKY65cBhAHUGX3Q8ZGkDmegVw3FnSVZinJsK8xiRshcwg23aS36ZpuAg1JU5QsJVTZtjbJ6nR2w6us",
  "key28": "487xCmCc5QvcyQnmaF3eKXqo99VxGCbR8EKr8p1FSgabVCLasymrtqGNnfZQ2i2TcX8Mh9oii9wcuWfkEeTPzrNV",
  "key29": "vAjHtWG7qxxBANd5S5EG5xNzHLbxWAUTqDQF8H2hMb8L1e8F2qL9ZUJ4b8i42fQeaV8DRpc33e6hTxebXPno33d",
  "key30": "3EVjpzrq9vVvSHzEBGCeeojqyAyTtg3Ns4dbuyXEsgCRsKtaewMykkE9YwyBpSQsmF7MYxLJd1B6AVLybySo7ui8",
  "key31": "49nSkMJEHFZC8eCdSRXQSY6PzAJ5RmvHB55ZQSZxnFdyoZ1YMR2omzCKeFAmtSTZhNg3VsaEwPMe8AiLZQnLpsDc",
  "key32": "iaotQLgXtHALMKu5C7egWiqXkzPViXP3co2qWHqnGq1i7yQrX4pQCMC1uze5YDNRLLYVNGT52W3M7XkbRize6KL",
  "key33": "65uPpJG4oN9nYuT23s9F8mCAAKV5vidkemSbnWmAAj11UppvyEea2m7fen5hhCupFpiyoCgWgNivDLtUcrzKF49q",
  "key34": "2ws3FKThDjwsDcoWx1jxZbKsHrtL2KNkK2hYs1BLy3xA4ot6xSJc5xnwijhXzqePqsFyVUbyHyrZAothTSaiKWVW",
  "key35": "pZPuUV9f9tcFy86vdbDfkdE33WVRJkJvX5z9dGHeH3KdPLuZDEqdPyektxXvN9DtiUQ4jfhXTJKgizb1nhK3dGv",
  "key36": "43TdDEtpFGKoTbxLbgfD842ErSbCfwdmjBpgeTF8y6bfqvv6geEQxS2msGrNufe33w7ccsTrTnskbUcoGyvbS5GL",
  "key37": "4LKr6cNsnTfJnBYs8LkW7PJj1K648YzB9QfG3pqq9JUtGxqCL2tQJGci1tjfoZYNqE8YErwaCmxSgcNbNfzC5HFw",
  "key38": "2tmrPYnKY2CND5eC2HMmW2JXqeZiyMM9RpGreTAVrQ3mHoBZWnqQTzHVe8YGmxVGtiisA8wxpQNzXeRWNSWNjiUV",
  "key39": "4cr3WsquP493cQWokmSZZpBKG3GCQjgRcusKa314Phv2vMEGY62DoU9kUdVvNMkm74CJigkoaPhFYpAZv6mkj6cN",
  "key40": "4WHjh3w4ZNTYK3HQ7E6oVzDSK1HcvxZcZjgeJGpqbokZxXBgd7Mno1fyTXc9gFAuMLgGuGqKFNpJ9DLonzgcrbd9",
  "key41": "4yVcs2bGSYU2fMha1YciHXMN8V4DPHt794kwCvpsyyxJv6iqxCdbLG8pYtpaBtUCr4Cqt1wTedpCSz5sx1TioXnW",
  "key42": "Msdguse7nokW9LUNWsoxCi2vAHwvAGFYXLXJrNYoUWkSP77yMtgdbWKxEfqGNxE3hyGtWmCjPiL2P9Vz52tr1HC",
  "key43": "61EUZF8N9r3aEww5DzVzRMmkCBUsXqopZHXNYuMdcYCr2BTcy9ZubvnWg1qBh8VQhca6CTu2qQdcEKsQaT514Nnb",
  "key44": "5iwj6GCXBb53rVt68BMVjyoph5JDJiDYtZKoeE44eonVxexD6MT1d55Y89L8rvPgUPjw9V5sxi9ZFM8edjTy7nsN",
  "key45": "4BHzkQgrm9Pv7KcsaRbGQufduWnrRbDGoQLb6T2ePkvoQVyeMGkMgk9kFm1HCTPRPnGno6ApACffB32RNbu4GJ2f",
  "key46": "3acR2n84nW2np2FDBFVgYqNXwU1F5eLG9xaBsqCfCwNikPjsTbR3i6rVpGtCT5YjcGrZcvQBfDYwU8rRhxLNWqCN"
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
