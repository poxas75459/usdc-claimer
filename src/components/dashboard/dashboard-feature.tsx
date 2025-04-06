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
    "eNJGcMizsxBLteukKZzVpukoJemoecURmzkApJgPaP3FaoWQcgHbYvjLKoxXBRt34QNfWPnL9LWZuvziPX1j5cT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Nj4TLxRTx4AD74Ej2tyML7cvwMPibXVtVJxFonu89uPaZa8TeoYQLenUYjD59Y2HZGYZGbPhbYYAzF6V8NtMJVF",
  "key1": "4akLf4TkYhkCWuLwkTiyB2ZE46xnr1LzGFUmmrLfmXPnKJMBzD29ewFgDN83cEdH8P3CHAJbL71ka57iKmbPRUWL",
  "key2": "63t8j9fsGgzHs5XGhBPsdzC7ikDyp7feWnQ4zJWjJtxFawSLj6twyb8ydVcH9S98b7JYKs4mkquUozSoTrMu9Uuu",
  "key3": "4yf6tydPAFZzm9iU9QrErqMa9WF5AkepM1DkwekvuMZ7HRwRdu7xoEqUczmGSoZeojZKhbkFdEcHcv5CrLedZqaS",
  "key4": "2iR6ipUp35df1Fd389iFE4frYoPsdffgHGdqQQ3eceWj9k2A4AWPNNrpzp3NEHWmwMGGrJVynVEQn3scmjChUUac",
  "key5": "5fVXBzNCHt3FmzAtSS22FHat2qc2cJxEVhE6XwEyD5Ldk4tNxDM6mKaYYm4RNt1WMoL2nTynQj2ERzmYnG7JL8Fz",
  "key6": "3hcEWcWSv6Gmwq3ZoyKaLGvZ1oKXkxgTN9yyaPT6NsvaiaEAE23r9pnxtXqq8uK6gTLXwXjUPhGXuHK4zTvnk5e6",
  "key7": "vU69gLWJuhuNaQbmo5RBuitCZCNkpgbSTX7xk7VRyJjFfdQ1vFht9LeiXpcZoZkN89vmFe2fMNxdoCzcBdvECaN",
  "key8": "66DtsCF64JbfZToCgpV4j81nJFdR5yixkVTKGTaLJYJmbTgirfWAxqLrXrXGbYDL9JrbagEACazrwDPti8cC2LWd",
  "key9": "5JDxBBFRdck2g9r1Cyn2B6GX1YWa4W4fG7eEdgZQuwDpNC2QGLDniF3e6zZpAPE1VWEMD6e9bLfwDVcpHJrLXZt5",
  "key10": "4TshJ9K8CZHf8Sep3SMVeWLMBJZQZ2F8euBorpk9Uu7fFsju12xMk6M7cx96r3cq5oytGWECN46jqvzcr8qmsbFZ",
  "key11": "26XLBVQmEwZkEac2xhycj9TfEuyipusdnwEoUMXkSyB5sYceVWGramMnwW5NvbGA52ReWDL4ijafqLJoLdCqJ7Nf",
  "key12": "5kmFApPJ3wujsNh1U9KWob4nEdv9pgEXmpVDf2L389oMfF8qWPL7Ccjk1PoC2XxhzPaNHsFEh9hDL4fQT61NTzBy",
  "key13": "5XsfxezsB4oLcteGcAWCCchEh2wVTLoH6n8nx4JaBcsJUhKHKqjhpTeg5DroS23QBFEMW9NgnkUsfCEPJUqfNnSb",
  "key14": "3tMmdmtpJnpEwQeXQEzzpdomx3a4qptxKqVnFxv1r9UjsQR4uymRJYxoG3YRqGXaramPkicYQkXcD4y3eu6MxFCr",
  "key15": "2bcNtDNsTkG1fxUU6hfnzo6wfdAJZjjWt94gK4LDvNoiEMQvKiwCdcUd6fiYCkvDrq9C8zEvi6EM5zRZjdwSAnXy",
  "key16": "49DQVJMZ8CnkzrTaUtxbR4zyyLjLVdDBdEQBFBzELNVXAiGcUYjgXK4Uex6NNxzEXzsonKA9Rb7Zkm15HeZP7Qgd",
  "key17": "3cD4zE2KTjP9bn8VQLSFtMsp2TVjqYHxcbnTHXkQxmhHUATKXi737voA7xmZqkFNKNHm4uT48o6ZkDugu1oFYBBc",
  "key18": "4jzQWrKqyHHyac1viKJRLbD4mizzhHeXeunWcBzWgYbNo9PMo5H1dupG1fPjXaBpBhm6aCgX5aNeLhEC91Jzyusr",
  "key19": "ie5QNj45yJWyT9J1GxC7pPVfM34ai6vPxRzLy3DYN3cck6fgiAeoRJRpaVMbPEEpf3d5Vwxvw5b3FFkywfXgCiV",
  "key20": "5YJYfLnMfz6GzgRVPgzuTuuH3Y3tC1jMk666xjg1m78hdbii9Dz6SQKpuZLR3YED47DzE2upqWWX6WE6ddVcG7qc",
  "key21": "5FnhYkTZ4FrrMq1jRmV1tkQuWQFZtJhP2wDP9AeT2UCBmwiQZVpGvueEm97zVg6szMnLHvRej69H2TTrbqiVLMLy",
  "key22": "4fjyiRN3okctiPkP39fH7xdwjT6EU4QX54W4oz7YVNor6m32atMqgvZoHryuYwg5sxTP8UNQvFgZQc87ZafyKohJ",
  "key23": "4Mpb37AkwZCCiWutwwsHdoV1MK6tKetRYyP8xgfiDirTqeEcjzwYiUNYSnUJRcUpxPfRedia8icwFusm5AAwdqPQ",
  "key24": "mhU1rtyEH4EZbgrFg5KfC37UhcwSi4ZuZbsqfYE8oe31yKvTpXAshYk2GKyqYUMP5rA7xcEuj6erYp7H3GoqMBh",
  "key25": "2JhqRNVS8T6fbtjBMBdv3bnV3ch9GX1RYBRbLNMpj9aejEmaCYxzB9p92Er6Z4HHXtNahYjrbsWftKpz2arhfYHC",
  "key26": "2jPnUtWSWwUhtH4fyhHbyjwuAXE6RKLA5BrVLmPGN3PaUerp4CiZdGWy2whu8odmHrfs7NGcDzfer5cW6x66WjWB",
  "key27": "2qpoLk283sVJ4PzSAWmA8RzQnM794Sn9PYFerLQHCMN8UicPE7RR2s6jVE73Z7upkcJWVX5aKqnuDXyVzJX3ChQH",
  "key28": "2jFHqmm9Ugm6doJL4iZmttoGPng6F2tEN7aJVcdB9mLGd3W16jfhHRB7gHPQ9fYnJcA43eSnvBWNQDS3Aeu9S2iR",
  "key29": "4sCUABPjiP2C6Gu97rqAUvWBYzFb9vkaecQ2qdfNoqHXT2LdKNu4Tm5aMYzK95wQyWwN6rawBmGyqTREwV3BakcK",
  "key30": "3rStLX8JLEtC2wdngcp33JatUr4UBF2wVNZaaYvdfSvnwNRPnG2qDF4RptBsjfSfU6s2BUYBJDET6FPa6P8zAaRF",
  "key31": "3PqNfVSdo24pTiwUKKLuLtRJb3dSownCuAAHyjFotcw9fAaMXikLNNbwmFSZwAzK3RYDwVZU3FD2kgtRJ9e2qKNV",
  "key32": "n7dMZX4rWmKKreGWtzVP6LzdAyB7wZnSYKHJMq7Wekz5pRCXgwKa9tbg6DkixXWzG7G8V78776haNtqe18QQckA",
  "key33": "4w9djLKD6DD47XnwdNMSGReUCHAXZu3ci3z7hLmmNSgZvuCv64m8uYB8HDTdRGaq2D7JdhK3V5ybJrY5xjx4VzG",
  "key34": "3Ln39khYFUdWfqeNuHGh4roQbS7pAZCgD5j3fa65ur5AqGzrLGR2YS8m9CmE5QBw9XF6ZgAExckq14Bf53AdkZjS",
  "key35": "5if3iuEyCEfP74AHLkGwJdXGzKrrb3dRteGUGQPUbZQCJfgtezyeBsKajDeASGFDN5sqmd4x7SDcRmXNsE9um54r",
  "key36": "4Fqs3Rn4ncdzcsA1T2UhAqx5fiFbdfTf3CRLTK6AbT8jozkCvGz7x76Qr9fw7DnJjxQriNv7Tze4qgWX1aGN1etR"
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
