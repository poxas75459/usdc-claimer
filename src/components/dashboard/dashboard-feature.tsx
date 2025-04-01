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
    "Qwp8SKWt4k8ohg3oGL1acASoegJ2KDMAzatDnuYLeea2G7TMKcFj4YM5WyP7CsMDjCBneduExfE1Kk5aScqj3QP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MDdCx35ZEHsTDnXYGMukUPbXD58rF1Kj2x7gRcsT6MiXyaTojWXyS8yBCmbHXGhmyhPdg7dPN15NDB6XuhJ6ndz",
  "key1": "2NsqVTLLFeP46GLAiToCpDGsng8NJwvr9TCpR8ryxqXKrkTQGnG9ehoW4ibHiJiVkt8TjP5nX4dyYanrKwokoVQS",
  "key2": "2kcmpL1tuj6FTzUFxvqmqQ2qbqrMoWUopAtVKhw6Aa11PbjMdw8aXk8smzLj53kbFQYbAoHhdAnf11FeUdUREUrQ",
  "key3": "4vDnpqcbMnZ1PjUFGGVMoLpED9THE1FFXGVS1K9bAzWAR3oHwkgW4N7oFLB8wRCzghBwoib54VmRTrBRhP1hjHxW",
  "key4": "2MqWVAWJ1V6H1MAkQJoiJWVHMLFxwZXq69nMVR2s6NimPFHkx3gEftwSfbktphEMuZMtzGMpVrJwAdGqX3pdooMb",
  "key5": "5JrprxyvMKg59vZEAenhuCexodygSUzsXUVnzrCrveyCH8Jj8EH8Wt68623VH1dF9g6bSK8JzHzHkztJrPgbBPL4",
  "key6": "4RM4b28KBgBSws9SE6zAVZ7GWmpBohmvwAYc4wnQhQUmmciQrKjwfZDRjqG9n8e8Ak3SZMpLsdBv1vmSbJUoRiQm",
  "key7": "5ZEgwTvEd51FHTeCA5YtPCxkWCUsqKJrbHgxzTBZaHLw6Hu2o4Rtnx4Yyfpzh8iqBYPXZSGSHYcimpE5ZdcYx8jV",
  "key8": "2k9uZDLjQL1p5VYUwWgi5CTRxB9QK6RWqrMskiDJXbmptLrSqxexcn5JMBuCgREdYD2TkQX7nDz8dyf1xopHCzDb",
  "key9": "65gCizWxHAgK76W6sEGfrajdxj1RwB8HBZbtKsoAxvuwqNzrSSc9mJCT3Q1ccWgH2rMu6QsPZfZv8TenfkdciNcY",
  "key10": "64uT7xrMEYuH2ibBfSrvXUzXE6GZGK6yQviwCgLeBB5gBZzA8k7sdVydpMXnLLjUjnBjAbV8dDdLJZjJPJsFj5XS",
  "key11": "jvoQKAZi2kD5z5G3ttoCWrP5HuG6UudHXoRYWCf6ixnMgg3xxjQZ6vFrShqqUnVDXFmZTrs8o8mEMhE2mFkfpo8",
  "key12": "3gXML67EqtZbYnq7h4xUjJKTMo1AAQmgLXkSQQVPHeSs9vXXZ8zXtwroDt8fiDWRHwqQBVYfszE37uMoBuiF4iZp",
  "key13": "3xtpU9uxUrWmfSPfyZNLEMYSzXKs9NAsHREhBfBvUeJC3arLqkP68zcDpGxKH1WLJBisiEQj8oJV8brrizr95e2c",
  "key14": "agtjNUXM6kMUkqmdtrZQCLZTdMmghyNu6M8oUAYXvJGfPE3RpZZzzoNATyqqAW2kMStyKoing166un2zgiPj65H",
  "key15": "2nMYSJTD4mqYh9TxZguJXWMfrd9AHBTfr9sqhR67XixAsb7uQoCoyGNkGZSnBsEoufcPtnvrhB3Rj3hkbQYeSYZ",
  "key16": "4Fp1dcMRkixCbpgqkkxvc7XAZKw8P3jxJVJexF33UZNC9tBrNx3Z6vbUh62z2S2ZzdcZYmbxTuSuAGn7J6jjL6nX",
  "key17": "EEvpkfdL5oGXK1U7u81V93ayrg1v4gsd2mRrzYakKZc9JectxCRLCXPb1HvNLGb13MuKicb4FmvyUZ28Guwt9rt",
  "key18": "DgNu6d4Bf5hejSz4etjyFKpzNEzZK694AUffmz8Ko39GUiuq9NHriz7mJx7XpwzfWK56wvH8B9NFnDLG7eUWLYT",
  "key19": "5TmLZ83kL8meAo1HjdBgcuNWfQq3TBDwpcacgJPVKGNc9hzE3ztgqY2qNVGgeXghSeesH9s1PyyBXHMexZmaFnqg",
  "key20": "4JRnhsS3XjBUtHNXLwRBbeWnyst3uPjgYai173gCVehDMv5Vrr9dwkXyZ1ETaWidGeC8RMQZAFUwAEdVTDiZ8824",
  "key21": "2iRCBUDoJAcPGAzuEqwZ3R6hCBNyDBPdD1Li8hpEAZELMqgLREGmvYiZqpHjZPWJUXnhL7XK8dyzNFN9HXK5FKph",
  "key22": "3vRoDZhXo9gR1XLZSQpy5CAVofNCZtS2JwDaQajdASh24VAmvXvTgoNMwDKhqa8n9nBcfAX3J4rXkHcEA5YojrSg",
  "key23": "Gf163tCYMaa6p5kb98n5jV9zrWZBWx3EkJ9aVLGaWvg4tWvZyL4eVqGGSsBxTyMxA7N4xbywT3yTJz2ff84oLXC",
  "key24": "5TmR7jMmu7uYUW39wUUdAftmMrJcDvShJiFwZjnGwCexuw9xvrpp3RwaAHhwCx2hvYxFmsjZghKmVA6qJJMZMaev",
  "key25": "MD1rNhiyePGgE8mgCdeMm4HmLD4szkT1vdzpMSHACdWYNFZnx58DQSazFKVWzyCJRdXiNh54wcQSu8dTLtjeHny",
  "key26": "566Ttes6mtA8WH1JYFqcDw2rSgQwG82gcdVSgXfcaVjGBgBKZ4amwnt7qi5C9NSSjgxyvvUnCfh1PM7eQWH7T5R8",
  "key27": "bqKHpVk89877SgWsF7qRnAtFMu6TcHLJSYok4nTD5EYY3QdNZdSx27LbRuARf66vtXaTJqpMvcYF26r6ZJd2ax7",
  "key28": "32SConcP5qy6PP3NphnsEHBgask4bXcSt19CppGfJWGaiYUvJ3yNbAExR6JQ2vFxzq5xPFtXGFEEkDeRbhnZUXCe",
  "key29": "3P87zdV6QJ6kVVnRUihLg6yUZo52rsVj2GBoPKf2fsK1K4YLVTVqedq8pDEQ2L2okpECDKGmghLQEd4RbbWP2R5x",
  "key30": "5diBcRB9WAMXtSQeicsRJutW2kyQncnb7rubUmcKdyh7MkBfi4rX5cNCt8SfxoKUUtauvJ1obRffBUEKTuJaUGGB",
  "key31": "26PtxVtoq9uSMKeFRJ35CVvbDSxERBVeREejBAQSkLENe7RsxKpXDWsFFvy8LExEWDgGtDSjoL4ATeW94SBa2xEh",
  "key32": "67Xvw4mbUPaDKWbdB2TU5aJAiaYhgsqfHno7Us7NDDVeGocvP5iRxScFDhoRkScMzQRAanSTVSat665assArNS4S",
  "key33": "36BcqBoqdmF2bTbsYD4dp4RM9M3fpWho6ZeSgnsyi3oMxLGzuHNQvxWHgaA1pYK2HqfhPjXaCh5kf73rsLSdAjXu",
  "key34": "4cRHZCsa1J3RbRsg7djv7po7oCoeBAQ38WEgv6bZLLi3HqHaxRFeBV4A8rASaYhoVvcizW6ivqJSdEGiZTbsvHYr",
  "key35": "4K5J5xAt2ZcyAG4xZZYR9HG5ZVpUcmrFbNWdRSMEQ2ihu2amq5LoZ24g9GkwVq2cdg9aA1jqhBBWqKY6d28TJH9r",
  "key36": "4FwQe32hCk5zFCrd6nu9mnF7xRmSZUZGNHPjsJuur5SoZ46RYxQARB9ZdBULNwUQT1Kvdv3Bx4qXpMmTHvFDqTf6",
  "key37": "ANJisjXrkfc3jLJfHDiF1aF4q1TRfRH8iuHZtC9D8L6KpiU3uv3Xk2AbGAgThKjQhYQgDKYbhYkYqdgnq3RBNyW",
  "key38": "JBFb7L8yUFdN5k7HPj4cFX2fT7MUYFacV588H5v14ML6XfDCoE4n4pJwEeutH6h55XZqWYBR2PRpKFW1oyYv7TX",
  "key39": "2gvqfvyJs1Zc6XA8zhvAyyTeJDtmrzNTV1UMvDYLdYuB7YUrsUxfeo5gJdmdHiLCCw6GdWJnNjbRrxTQjjWSR61o",
  "key40": "4c9ogt9vCyMgeQ2dfin9Yu8Fts3xWWXR7mBcUzKm3EnyDGHmeDHackFsGfNHfug54V9pXLnAqD24UZqaEm3W2FsM",
  "key41": "4EtnEjddYiagjwCM1hLjJHhfze1LET7rrZBZcvF8fRh2JizP1ETXdG4SLy3qD6wUS2PCGfd53EG8TH6uiyVMXjCm",
  "key42": "u5qDUNwRFHN2DnF9CCHQmmvTyQCxxPar1xeGK5eyeFtU6zbZ1p9pGGRwkDcwBPcRyVpHczVQ53gb6vduykHGaMF"
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
