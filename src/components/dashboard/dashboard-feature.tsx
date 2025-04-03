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
    "5bSUkCBG6qw9G19XcUu8x3vjUKd2zQ1JpPZJVi5S3ayds3j9m518QHkrgn1vtmsEGQVWmGy58sin3WmrgTB4sNqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZZH1nfy2tJFWVMt1Kuw4MsACwLVaBPVoiET12oCpJfWeyGMmseyU1WPWCpGYGtSNRrYXYGEdXJnzqCzCRKJApke",
  "key1": "57kaApzbjUNgMKicGBGpywUHJmQxEMbUtkLjwZwAS95TnuoG6bUsakv36QYvid93bkSHZFPEKDEN9VFZM5r5vC1W",
  "key2": "5DqvuxVcZvsQibMcUhvEKrJZfvXr4SKkrqSUSoYqkdsQ5tk6eAVNjKndKo8CWyG5jqEhdHgsfUnUQPJvjpRMzgxB",
  "key3": "54DRVSZnWfTzwRE8Ji7K3zfrUdajrjewM4DHkuDbgDuH6GGLVugngNyqLYSdehJt5s7vQnL6BzMHFAjD12uHYFU9",
  "key4": "5r7aEQVDQ3n5yPjM3TMY18cpdTeNWYMV2AsKRJn65F4Ro5WdTctCkvQ3bKJ6Rp1cjrbU4s4HGFfvcTX5xvng93qt",
  "key5": "GoHYtd3BVt7AnQGQAqg6NGGLni1TS7kjJWk3uWBPDamDheG52JgehQyUfks1puKNEakWyGXmBhk7RwmBi1bspLP",
  "key6": "3hkJCLytQe56TbgayqohMQTi6gDsjoEoJ3NVPDdgZZNqBnww6XRXYTjpNgXeevSisYJ4za19SAuBk6otZWQ5hKKe",
  "key7": "3VZgUzzAKTS5hDtVafd5Jh7v6dsmf8QFj8LstrQG7AVeDSerdhV9WgDRQt39bvWYZDcfHk4f3LeMNRmkKHDpqMNS",
  "key8": "4pNzffW1qCEYG4AQLp95Q6dFCRAGgJjaptku79TcVYYqYoQjCZqmX4HeM35Zo5HaB6BAzSHjVGZ9nNmci96EAMmu",
  "key9": "3dnPrRFdCKSJnayVqExsgekz5DnfzjTSVSEpuRW7ghA9L9DknA1VbE42MBMqVAype8kspSgvVbnoR1ewmgsEEBWH",
  "key10": "2mUB7YwaxGQp1k4krCJMpZM5UdVvfWuQV1oByJ3YUrCJnFXrKDh7ityGKRxKH6rY9LUqHk3cRYPZAkzDaBwk2mnd",
  "key11": "5rTCb4CHtv6k9hvaEVXSjCSWt1qpzQnABRMep9QmrL7mn9FPZnbbCTmtpkXuNPuQU83rsvrPZiaDL7QpvDEGfm3t",
  "key12": "3kAE1GCVXBTMu54vpMQMGhwGcmoazz6HQXkTUuuR2Pp5FritF3gaTCkRF47eCmprXvEKccGfVXuJd7V9qmh7vEr9",
  "key13": "yZPiNmCVZwYdHFoExQseQyuPRnbkxAszFLYHw4AEhjxLartPEhJ2HeV3YnXXmQtZwnCEPozdZjCxWQi25MqSWW5",
  "key14": "5qYygUKR5X7xSJpSdYZLBxwjH8uPvYvgWLRL2nX6LPrvBuTwcGR6n8fZ6JAh8J3nFa1MpLxSfeL1RP5j953rvK2X",
  "key15": "2dmHpUCDih8DqTvhrR1b1hbj6HW15zxc3U33Kg6UPaeVb7SAa3wCMSuT6RGY3mqK8aWCjaUJ2jha5nZuoiqkHLNJ",
  "key16": "47aATMFjnvZEanjqXTA4GT9GnpFDf1cPuk1DBGC8ZYxFf3AiM2gyiYfj6vwUswYG6vdfjfnteWQoo3q4ovc6c1BH",
  "key17": "4JDoCTpW6BwMzdh2UTQwujh2pZEDHWVCXruA8L8GWm7jmaLg293aVZc2Po75tpm5gW7yEzw71d7eBVg7izDULuXH",
  "key18": "3ENdRMSo5BjeGTHM9KrY2DMs9Rcg5bf1DyCGfmtikPpwMcCJRcdG3LqnmSc8v8WUQGAnXnUL1ySpkVp5toZuaehx",
  "key19": "4ps8j8UpTycrd8yAFJH3knFTcUuJCYn42YSETGqEDx5JRtRyWKQJTRJQSzF1yXyo8XZ63EujJFMc5efxLe6bnEq4",
  "key20": "3Ja4b4rBwPcKjx4KNx9MNH63kGN3SM3UNdwZH6uTFsT7K47WmTW6VPFXh8xJdeAxAy3SExK5Yhu6BYvKXLquGZir",
  "key21": "5Z1acQz5EDUzxv2aVbU1UnHDLwqLUrKfoz3AHwNo9DcWuADh6z3J1FYhFmCfdQnuBiJPycXThncXHvCqs5JdNYX1",
  "key22": "3u91gE1kBXcDjvsM5rYwTAuiLoT5mVLh6979cCwuKQAwCDvj9kcAZNVVvBAt1bLqm6TLBuPcZMZK2uVtH3iEUnUA",
  "key23": "2nBjfEwac1BN5tE5df4vev8rDWPeHFcvGFWYQFwQzpy7GA373EvbHCzgbsANVBcTg8vmtz6VFJ9xsochvsr7QJYB",
  "key24": "5LA8YY2834gazfVtZ6HWUboDy5M1xYNk7cedS2NTGfnzKuwjU42LxCVysLHRSkmuyjJft5xcjNsSnY7gJi3BdXUL",
  "key25": "2uNfZzSHZMmM6ENRqujZVw5RKk6DgDt1mzCfNXVXncU5i3motVVrSwpJjwsxDkqRRYP6WDv1489izjAiP8s2RaSB",
  "key26": "4zGFz9DpMEJiNHGb5UCQfbioJZKuGX6ncKYzCPCgZiSqAn7uGTHKk7Dge5x7gNUUEV8SQbbUeM9fAf23V8FJ8b52",
  "key27": "4jHTTo1tMtf5QWtEtzfkhmABXn5U1tZHQV1VHotjHxDuiDEv3Y2qgKYrdSBRPUeKMoHQmdovFNkPTQLYs8YjLRcN",
  "key28": "6WJfTs236GrPfVmDUBceMWbGSHTVqWJV1RBYBRuMCR7KekMeMvuGxhxMwVgb6ZzL8BxbDLZAd6s3YXqkTLbo8Xt",
  "key29": "3ro3ZSLNVjm17P6fFBA64wspikw1MA85EGZvzeLYq7yVtNZomir2EFcRKKyxn4cKJmo4j69tL7N8sqkc31TG1jBn",
  "key30": "5LSQZu7QrG7zjQ12NQ7kgYA1ngwBUDv5bWCcC2xWSpJV5kjik3A1tbJxoVvtCCYrpHG6nVsEbkmku6djDcRWP4Fv",
  "key31": "5TYoJ81cyjrPKjRR3kLhfWfkYXmA8UivGkPV9ExtAyyHEejM3zegrVuwSDT7zGm5SraSGcq3FnfdLPYq67AiRWzB",
  "key32": "4qeEyMssW24YkMdK2T4GvQ6RQywf65TgN9ZwbvucBvWKS2bd6spnW83C5fETdbpqfMsL8XcPaBHXTofTzgAJ1aGK",
  "key33": "5gUcPr9SfHsFwAeFiJQkUdZmNiNxeFRThVCKfDbWLXd5y8XCxEMZn3HcCvMDAdfzeemkH5Spx2YZETgwkWPGEdkn",
  "key34": "3cRE1rTtx9aYEpv7tV2eNJ8bkHAksr3QMA24sXZpsvJ85SpYfEzD5q2rNEZ8kBXzuV5nKGQjdVtYZ8piL3SB8dUC",
  "key35": "4qyqHp9BwRkCgj1w2Ukcs6Qj5FuP3Hevj8RJZZqd4u6LyBm5rtzz3xEx5FaHxCQPCpzn8WhUt5Hg6jbpbRqP1rV7",
  "key36": "iGzL7bonKXBSrbU1uDH3scp4uDJjeF1BWDsVjuGzEzZj3wC1QFayQtfAqC9kiGriPGzneSQ3pG253QqXETfj78k"
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
