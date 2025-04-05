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
    "WSYzsWewRYSyYEN5Yv1kJECeYTQp4dmfG6H64T84KukJXnypBuPNXN4stTWrH2HuyYxsULF9z8fWENrW9EpLS8J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bqfiJAqeR5HcYmUdGodXiTk6omTNyhkf6G2vNjYnzwmcmQrnf66VHLhtP2qsQYykNW1Fd8zdKkDUYffEpezJm4K",
  "key1": "3WVWspwvb9KR6BvwGQvwnCB7fpRCYtNnSzH1dSRg17Trdd6zoagHj6X2bTaJSUYCSux5u4wLRm2m34t2acL7eXcm",
  "key2": "UdD8TL3JetwiNVUHrR8poJFA848ZKeJQiw4wVPgrqZqHdtQvJb1PxafPgqtKs45tGDU1wLKWHJ3SgYeAnyHUxAr",
  "key3": "256Wmgw9pXnkn69BRzFvGFi1Gk8uaRDQXxensS8S5RY6A8MLMpZvqKa3QRUh3khqcTAHxHZDQJWiDimyRjdYKLmP",
  "key4": "5pTi4auYrpoy1MxVqLRGF5BUAt2k41GGX4owfUdyicaxrcVo9Qc4uXyWGWWHbA7VGS6BkEveqcZnCQEVqn5qiYeF",
  "key5": "4sLBc9Qu2QxqEwjUchoBYFxzVs6z4zYWNrespiZBbYqb3gABS5Jpsu6nVY6ypkmgnKNgnthZVRPrGriRxKuHhRAt",
  "key6": "3Ne3m4fMqCS6QiFRgXAuEPj4BcpLyFZskSfTzLbbkicEmDvAPDFyUqqusVtkifNP4Bz8Xq5m34zr8LNx17FA6KdQ",
  "key7": "5bKsq7ebswFgon9NWoKjVC8g4vhY5VNtjXpsR2di6JH6UPkzH5RdtrWq4JdTCCyFAkgCAe1zxtpB2Z8dYEHzjKNc",
  "key8": "4iZQ3anky7mLgHxrhiMwJFtiDMGw42eTQnrT6oPZoyG2yDB7nWHhNMUXCdxFyTFk7tBrBAsQfB1rioyJt3Dm98wM",
  "key9": "4ahFc7u9iyDmGAZQDx99nUS9JxyA7dJTS67EBesB2sSZ4J2ZqnTPhA64JfTbmDEMXfdxLwDqYNodspgie8X7QCZK",
  "key10": "5Vk9n6DSRteAnXPyxJP2MkAnRRJTsk7D8kUD7Aghj6ndxUGpNw2kiH1RrWkgyW1VbZ9pfaCvmnVVkLSGuq31RAA7",
  "key11": "2524o5FmpckNwU6urqwngZwZonvMY5KisPBofy9FZdkUvivsvSe314cHS3Pv3KddPiH3rG3ZP1bkA8wjwWNQ3gdZ",
  "key12": "e6E4uujxfBjVv5Zqxi8xMonPuKGRc3AAPF3mXmrusakiFZwof5fpJT5PspeDRRjN3Vnaoojv6AfBiDRHmmKV916",
  "key13": "3xs2uG4MnjfQPC8SiNTh6CKu9yQoheq5trGnqzHNzWhaG8NiJv5mejdSPSyHhz9xGktdr3tk1mSmgiNh6fFk9ZPi",
  "key14": "543A374fo5qh6cxjCLCtH5Qijzi13BWrHFMwFaNLs2YLAkaCnJFPD7txi64DrB88Ax4trxBA6McVa9LUXPM6iDZV",
  "key15": "5BDCRDdezbSqCE849RXfw6onyuj16oSutKTf5sDS6WUXPufXPc5ejTztEFcfr2BJ2ea2jsm9e47v4nZUNaWKtu8p",
  "key16": "3Mf2pScFCubu6M5BVRjLpjV5idjSJNPMCoqJUeSpuXkVFGY7iRXDaYS1d9MJ7otVj2PD8a124tctepsgy8bYEHgS",
  "key17": "2viQ32w4VrXQuDdcyNRw1jiiaaVK3LFT6qdxsga2uDEWaXuAE9eGuc9jZNyYMriTM7WRCe7VQkuwZ66duPUWQ4CM",
  "key18": "2umkkaRLvV6pdx97oExPcYcwRijQQH5ic2KGz68SwewhEumK9LU8bu4Hb8G9Dn12cxdEpZgPwkWJsqfABohsMNfV",
  "key19": "32hKdkEuf32atXWZyPmAgGWwUgTTLQ5kpyr9m2827rwjTJ45YdCPH4MA7F1XrZUXh1FjgBH6JteiVtWDZLALnQ5",
  "key20": "3Ao1CWFVEKLkwxbqsemuhYF5UtjB6HJSqS195LaX8hYfjDb2N21RFv8KRQp5p2LWSDJ1mkABJJwxf7PbV2RLfr71",
  "key21": "4dWMYHWuJRQHo44kpJQsoyZAJuKPokZeCXEvaPP7uj8HRNGsgMssB7KgUUcrB8mUsDGXxR1m5U5E9m3ZcjrSJQ1M",
  "key22": "2MVmobSGTnVHNewNLYX1BUXo65uPPEVbb6N44oXv1F6ex1SWZrxqAsBYF4vXsj9Fm6SJX1FdP7MbjagomgWsHFdg",
  "key23": "FsuBiR52Us2MEbCM1emfFzNYeKqgWcuM7XARb7wNrnAiiuBNpuqqhWrbfWKy3bLhKFMRJKEpXkHLvXYtRqVSc6b",
  "key24": "4jLfjDE4HYwS7cdnP9CW5CTLj9USMtcRfFDBq6SinZUKu2BEU895zyoudogkiskymHhUUUgrfvi9LL3m3TVZHozq",
  "key25": "4xrqmv6C9hneBFGzKHCdsG4fRW3K98MNKXEGN3sxDHwAAVPC24Eo9R91qWcLxbw1xh3LdEiJbCYATJbuJKChS7J8",
  "key26": "4wG5SzLTMKYc2tkZ9doWjTqsKFRZwWgWdYDiEJf6jEjyUAbzwQrLwULUQDrwKNPkkPmfYYCqm2Z6jgLkonFMSK6D",
  "key27": "4dZnaDVgvXuZr4udbnN4x7ZtM9iXVnXuN71BFZC3BV1pLzDFebTSLaXzkwwyVEvEdqLak256fHi1UvxBqJ8gaNb5",
  "key28": "3dfvK5RLAZfqZ5DNenqEFvkde4AFbhW4cqVXss2JoGwgtFHThE7m1c35Zp83mt4dKfNtxYeqBKHvxTuQj1xKHcWC",
  "key29": "5a8P49FgwKtpowNpkSVBYyVmrWvvmaeh9e2w7iwXKKf84UC6i5djqDHzvXK9sy5JJNhdhN25WS89NVnRNoUAXGoD",
  "key30": "342nLsymKuyy7FPqKXvbH3Tpuhm9iPkDJ2w7qydxKPe87KwgMFXaK6qH5164Z7mzKPBG4R9G2719aV7rPuSqyJgW",
  "key31": "2bovpZziUZCzs2mWK7C6fCoDXHTk8NUFyBHhyGc1Uu4sxkPkMQpUw1TbDsknfJC9qDXmM8JD8Ss5o5ehqdCSeoEF",
  "key32": "4uxHntDwQ1YbdL1mmcUoHjFsywsTkB8FVy2vTHoQHi98eMehZTjb2b6Ds2GvkUHgif1h7hNNwLYpKjBroYJGGBv7",
  "key33": "3xhptYdAM2XxYFTmRbEfTuVqsE2wzeHKRjvtx9FYHQzrDbgR8Yu7BVDZWZhA75dRWLe8PkAinfSWS96ibCZAtjSd",
  "key34": "2BMLFSSZCsDEtc8aRPXbV69aKkuQaVSpPX7VuaLGUjHSTLTfo7gsTPxryajWSBDMRX8jGCaKM77jJF4rpaHnyLq3",
  "key35": "4hZoyTroPC6g58UGV9Q5NDU69JN6jmQhNzTtt7XBwWDYpSs8zeR6DHroM6D8eK6HppUrpTQr8Vr7Sevw58JbUhJs",
  "key36": "2uTTk6wFaETGy8YPaYSmHPfgzLGsBzJb69U1LoGM1n7Sk92z1YEKuh8PaZHdkQZwRuZ8VELSxj3eoe2eKttKwfkD",
  "key37": "32pJsvB8iU2SnVrkAZ9KyivqUy6QTo2Tp7bwWjxyUmHumCkCapM6PpGqqvMReoe6586L4gNkGZQut7UwxdSFi7bx",
  "key38": "34GrFRq23TF3GD1sCw5S857XFgo45qKWN8kNiTnYtHabo3BhC1pF5KKWweQBWBdeKgSVV2XvgusfNWXg88esjhty"
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
