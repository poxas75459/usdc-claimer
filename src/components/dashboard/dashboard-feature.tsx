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
    "5fUGt1dyhBurqnYEx2oR6DXEFhCtrXfXk3V72UGxevn1DUmSPrMwocq2Yo5E9Sj19n4vg8f5oPiwQa2hM8KuHmqB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oVZ6uA1zaH2PdcWnwtaHEmC43fv7eUoPd49w9cQAXj9DGP7JPRjXDi5vQVXNv9XCYp32iJMs7sN5Vw1zhVBFdTL",
  "key1": "ET2wX76nUqjWcRay1cmuAeaadZAB39vNuydApu23qdWVLts66N9UozGxb9jrCd6Axf64YJAfF64KwaX29nNRxNX",
  "key2": "5FVqvJsnjbqz99WsiUkt2vu7Ta3XA6noHKhbWuGKkD3NSnAxWLU9aQhvMRAAFcA29Yaf6AJu61qMfj4LQbpn7MYS",
  "key3": "2AQ8fUuHaTz573CzStTtwjDrFeGvHJJoYyqArpFEefvXs63ZAXX7C25BSzj3smLV4MifigKhTeayTKkV8BCPwGG6",
  "key4": "3CFSkkDvfzVAZEwC3CEyhnr9mz7YmK8Y8ui97G6NRABa51wmPBWqx2KAYifN3A64ftQR9NM6BMdZk1cvsWeUP4VT",
  "key5": "2u9LNi12pCJ29zfHVQP5JxFtDby3K4qft1Q9wmVTWku7FUqx1f5ycMLWFR9B78yr4Fo2E2wMZoWbvqyEReMcWV6X",
  "key6": "61qbkayhjxqDS2J4qnNqQggqAKMFkK6sY6MUL6mN8VPUTHUT8mhbBGbiA2A2F2hsBH4ZATWt6DWJaYB59FbATWTx",
  "key7": "4bQMwYmsMnRzry6KqAeHnV2svzDtWzi1rpC9uqCvZA1v8MWZtattnfKYt5TdWLfUGzhnaAZUY1PDsZ4aLbU2Ct41",
  "key8": "2nVZ48PrpWqd5JA8EMLMas8M3rQDUXP1dkMtEN8M5hy9REMnoJvJGY39vTjW5qX2muEAsvDqprFkw22Jas9sqcuu",
  "key9": "3vsHQsWPRH34kPrZ7SCEHeHfmddsgNMnPt1wQPrNHDRPsFFzdB9sKD6rosm6Q2pu9mReopBX8Na8ij4aHbNvxBSw",
  "key10": "FTdPWunu7KL1n6KJCwAPgaDQJF4rbT9XyCb2Cdqvpf7LyTqi9eGnnpEMowe42RYf45ewtqLHEcw9ZTVbHxkDxf1",
  "key11": "5NvpTMJM8w7ywyuJu4gAT3WM5DhFYPdBPnYwCjSMzFsg5JLchbjZECqESVGFFJ5371KjTTAvpGdu1LBkSnTmcFNw",
  "key12": "5zjs7m2Lc1s3o5hmfu9gmUyF7XAQ5dURiU8jbSKCACjk6JHe38dkAyDowVQcJQS4SzXD9BQSTzwqaj8rBhTXEZYt",
  "key13": "4dnnDp5m6uuA8ycC1YeK6SHd6BeAR9nXLC2e55WJd1s8ZfhmK7ELJip9YvrjM9Bbh7ppxPmahwsSFnH5CcfKZdaw",
  "key14": "3DBX8LNJDSpo5FiyLzAGyiZMzAx1ecxMQ8nKbw2ZYHYLv3knN8WHJqsXHsZgSGMrytecD2KDyfZ1KVHhz3FrbZz7",
  "key15": "2Cd4k3UcmWq84ZwbNepdodFjdbvJMLQSJPUYEuJRTfUnzy8bGAarcxvRNehN43P5xYPhTr42d6SVNa7auxXfnWHT",
  "key16": "48nGxHtB9nvecnqTMSsyDXw1Hdt8YGe4o7n737SRfEohZvuYhg3Jn6zm1q1x7R9PNEun2L33VUH39CJZppTHDnF6",
  "key17": "4z5nt31pUbuJpA8r6tUjTSv46gKBJ5XeRZUAbydCyTqb282Sjt4HgqXhFWWANBTdizFdzvt8BSv7ZRhx8XofTJR8",
  "key18": "2NGeDNamHgWTvS2rUEFvcDV8DVt4x8h3K2QnxBDaahnTvWCdLvoxDzWbaBLqCfbarWVamskXEtvSukPg1NfbMAnG",
  "key19": "3TtAhb2eTLhd5GGnR8SEDCVxRbnR1d1JGVcHbLwdM3sNSn77cN3bt4pbJwsDmJauaABHvRDZrSatM32sortWJ22H",
  "key20": "4sQ7kQ2zzLJRiTm1DqshXphrPgaYttEVsf7mRwvHacGK4asgJGzKYUD8jemrHkgDNGvAonNyChs5RCQyKxH84wtB",
  "key21": "3UteXzhAjxPfZpDqBf4y7dqCUTjPtCi2YdYr5NmtLnMCnCDiXaUk2wJNibYpAv7cMjf9QU4Z4zv8CJxYUwn6Ea17",
  "key22": "4wdKUZ6opkvpK58SdGHBCrDqKvtwDpz8dazZPiAeifPBkJERGqZdRcdZ6VuJ3DV3HZN2V7TP3X4JrncrZioki5oW",
  "key23": "3MmT4L3YfmwDDPD4WgENxa1Drq6ixYguNsZ4YtSpG2An27GDoPFCFD4za8rxSe2y67UcWpvrhrsG6WBGbqUMupKx",
  "key24": "29RHPs7EVCf7q213UMComkiiFGk3ZAeUXjceThK6cWdhn6Ze76zvdM3RBc7Gpem78BPtRpGg1ZBSMDVtpqow68Mh",
  "key25": "poXZATvLHYnJb6rMnCnNKHPhqHnmA2PPxTN3PnkMgmaYC4CjtX4FHwVBD9ymszUxqAEMdJCghbZB5rbEmGeuTdC",
  "key26": "Jg1RkDuYsaFxS1E1MC8u7L6mvupNhCQMm96WAAH5pt7TSuY8dLEr85dAnXVayYQocviERgomopcKburr7NikBMz",
  "key27": "666ntYW3GYnWj4DhSCWAujtvD8h7E2NdWX3MbKHcFdjEjt4caSFLW1nuoy7UVhZrwH89RGNFBWh6wp44vFknAn1H",
  "key28": "2VDRD1VznLzbXeV6g98sHLDYQCqPVK6M3H3EhVqRfKTy8entpjw1jdvwkLpB3TL1h6qfk4EHprPYF6TwuFdDt8jM",
  "key29": "ERpkp4sYxyhj7pxcX9MEwT84WsmmpdwLsW3CsirQvKhnFxH3ozSVMre6vCirikyFnW2CbqwCDSxA1YPZcv9kG4d",
  "key30": "qAa5525UfqEutGepKEQYK2mwRawv3SJRi79J8r1pPmydxtGqXN1f9Be1LPBXAGx8sVGrUWK1dCTVFZjT3vWA2NQ",
  "key31": "4yN5sRNgQnrvw5T3vX4LvNawJujg2QgtLHcAciYbn5AgXpN39P3xUBHB3GkTejW7WCgztLg9FHrcJ16H7LmaKFU3",
  "key32": "62rkYfpLYcfTDpTt7tnLr5jYD8N69d8pfWkpZTN8ueBWcjK7tTz6EUBU7wFFBCfFBoHpbfxLFzfSNU3tc7qQYB98",
  "key33": "618Wf3Agro4eQDkVJE4rxam2QyJUuhrdCybWh4ZAFmW3tb7HnbaoFGhVeoAfBELeECQSfRDDtrMhth3KoQgVZuyb",
  "key34": "468LbfQENnLH45ripF47uJNiTuSYMjSR5iJDkyhCQa3ujaztosGoRGii9TqkynfFctK9wE1o4TvUrzMYKzBKNRmP",
  "key35": "4aBCc3MHwhV2tc8gWWqQEv4MH7qkTBiEprKY6CwHbunXzjBzoZZnid71C1vvocPgsaiembtXQkokU4xQxZwHmWTQ",
  "key36": "3s8Rc4YaGBZPyWLrXDixGqxjNG4nUvYNCSmaMUdqibhtJMRkg4yGjm6PdH84YYjjexaXnxqTYv7jxAVYEjyqj5UM",
  "key37": "4kQA73JEqzphD7TH4icFq2Fzc17cCB8dPxECWM2qRkhxm4Zf7LHsBi2m9jEooYoYVH5dX2WMeh1kaWtYSN3Prhiv",
  "key38": "4kdnUHodmWDGuyCF2fqsGj86RmeunjxRK8yod2bwwvVKsKn2Ytz13yDhX8m1NG1y8u6HPDJh8SCNnyDRzgCY8m9o"
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
