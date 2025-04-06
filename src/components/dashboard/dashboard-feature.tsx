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
    "333GHiDjYTbQPhuR1BepqpcxWxDhkGdDiB5ZmjoWKXmubjHRNsnEDcVH3vzJvTChf3pfCkG9kd8u8vjEz7sYnBto"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zHB6ameJ97f3x5hzeRmPr7v6PjkRThhtpiwB9h11mKkpWLjKBnXCEryoFM9MsbJNT7iQp4Fcfak9L9dQsuUsev3",
  "key1": "4NbrhdRsAYYwnPfMhHsMQgdMqcA59zuFXAEXjimDGN3ciFti22TCs5yiesokRxnXKthoYm2yYBpRrFJJ1Le61EzS",
  "key2": "zozRpZ6DfY8tFvDFzZ8SjGf714iRK8zfQ9yJ2YaYijgbkn3exCEvcyUFS8gRyjFHDhfxPv8EWZw5oWyJ3PYFsi1",
  "key3": "34s85vw8w3SWpEh6PRqc6FHPrPZxhvHYow5Xi92vnheLoFTvP827BHXDmT92ArkqL9GQejFYMpD5tUmmrfL2YUtf",
  "key4": "4ZsQknHLY1yLjvp1eAvUBCrGaZqs6FebUw6N11rKjYLQotWmFP4f5vp8RW1j8TWmSMdjtpvjZoxcaQb8ijWat64h",
  "key5": "zLxNuy7LRcYcMXmjwXzDa8DTPXETaHmzyqsibatJ4iw3P2ChUTxEH9X8oiDfPXsZw64QX2qigWSCQKPDc2hLZ4D",
  "key6": "hphfXDtBbcKSWJMMfAEWaDh8MoeT6wBx6tSop8CLYz52qsfyhA19ihTrDQP8Ah2PTMuuoMaMaC93gdJybybQvrU",
  "key7": "2b7Wqt3QTzBpWx9ZxmPvSvM1c9zBdfjB2UD2fD6mseiAW2WKkMRHHPx353qtEn6eLXnM6PJHAMS7TeCodjGuG1zL",
  "key8": "2Zg7fxXmxABczDVYzMk2YC4yJwJpWQxWYmcDVnJHvvM4p6oHCb5nwEMDxRkuSeCrMXwAL8TrXKTPkTGSSxQC1Hzv",
  "key9": "3w5zCH94fWjXz4XN9azuJbeuiLAN3BU3Qj7Qyi7cKm2iGnFRyt2X4qzwf1fuvqVjWimTcynDENYB1cZ55arQSUYD",
  "key10": "44Tu7EU81dt3Asee1ySA7XzRsVx7BAjzWfu2AdLAiLWW6Fd6EZRGZqmYrknqmJWnhDUJH5y8T8hJSPp5qFMi5RJn",
  "key11": "3fXUb8v4TVF3d27UDnTBMdbdkkEJSk7sKph3itsDVxhGKVfgZLYCCNdnXy5D8SkxyyECmukNFZGfHu3R4nFJwjyx",
  "key12": "3cj3UG56bDi3MC7c4BmQeDqkb5pSTTm9JPRGy5uDT284nU4uUsnNE6xd4aDknAHodmJqgNkojSGinqfeKnimbnES",
  "key13": "42y7TuNYs7xBjiNVmtT7oa9vYjMzkeskKmh2z1Cj4XKxnuiaqM5nUN2SKS7xvAEhhCtu2Z6VBgaWRHBxckUsxPxH",
  "key14": "3JKuw3DVvCXxX7bePUd46dYC8ACnxPAzkjjJuDvrNzimibBST5UYSRsdJvj8Vhr4gUtTr61n8179znKeBH7wdoe8",
  "key15": "5rJRvsv9JKPGQKnxk7N7a8uDj4XyuEAjsR2bBRmHYXYkCzRcPcfXm7mgRbdGWHDZASWARepeGGa1czDoMY4odVA6",
  "key16": "33BqYAyjxtoZDqeyphWgL9pStnHaTH2BaPH2aZZGPLBHHJs7Ms2sa37CWsKXzyyo6shZ5afpgr7YQrLmGKW5ETa",
  "key17": "5wh8KA4K7wpVPa6NCmBBdwWZScWBbDSKJFPFfjkQURRLUTRbcXRjBH8zewP9fSr3KKq7C9ZKPN4uxmxMASWoMFai",
  "key18": "2ViCsSs2YHq3k2oiZAYjpY4XsVXMgzD4iBFfUC3n3iwyVtDwQV8tQPGGPt83tGncsrN49XKMU7ftmPtwQq5qybWu",
  "key19": "4EqEqhdH5EqpaS7nJqHELBGByb5Ey6pxvNd8f84He2t2RxWLArsmuQuB8ohStk8DWjLQpme7WVJnC1ggKkS8ZgL6",
  "key20": "YAuQ3dKfU4XwLovmsZfpN26bSotmTiZ36iVQfN73fr9Yj9iuFSNGzS3qGMu7MeYAPXDzGJcQBbegUSGyEAmcTwf",
  "key21": "3x6EMksjMC9rXCxFHswFkrtrd6xb6sRpZhufJbQoUm4E3ZARkS7mUoNzUSEh22f9VPm3yXmFKtSCFMPiz8u92om2",
  "key22": "fGSYBxnGjjRrXiDVxyJZqwnYLntB7giuo8kLfNUhzuKMGQNzkiD4yLokyM2osKWVH4uiXnXUBzFUNpVYP8niT7y",
  "key23": "4qmms8caWJL9urW7iF8sVA224ZaajcqRj1oRGycH8a9neamVfcpUZMBmjETTMUWw7VUkXthxes1SB2Yo1X5rCvX7",
  "key24": "akasbYtSy9VRXACUfFP4bJiigJwLtUxeivqpNcvrW1dv6Soyyrk4EmcJFFChHokccDpMMVqeFVJnQUDGSSmYBfC",
  "key25": "3KHC3LcPoPxzvVR6fsxoobLmmm3Vd18KqV9jhoxw9F49t9ijsmacg9sZmLrCHjoEWYVYhVWFygreRgpMWkB99p8t",
  "key26": "5CrX5exBxaV4Q1hhuKGostBRr2yVXkKidLjQm5H9nxr4qQPHi9wfbxZ6ZsqP24JZXTHQQrwPjykSXJP8HbKmxyvM",
  "key27": "2M8YiiMiHxXFXXR3V8gyBxM67WVCzXhh6zztM3SEYg9Bb7s6VKEXYTivDWFN32YsS5tFGxN4X2f8UsaKUCEU4oAY",
  "key28": "5fzXZeaRky6HmRnppqXyWakLjGicc6n1jV78AfRYTPeBRxYboDNFjBqXVqd9N3ivk1p7wXzp9s6dYNsYuJ1Ut4R2",
  "key29": "2YTPocLAbKGQZUDMwMeo7rwmsw6aJcgghjQvkpuFbVcQsXFzMcD86gLnf31fLhSSAqLR1qmGev8NfzhWYjwseyrB",
  "key30": "47yKLxxZjsaz9VjGAtG8b7HM22QB6L9gckoazLUqvtDGq88o9Kt3GSfLw8icC365wPYWhKczp3AXUM1P4gVvUHAa",
  "key31": "5UU43HS6KN32QMZ9RrtN7k4bfUuHA69z2jQ5dC4ybTbRivN4YJP57j89G6pfVN2oXuzvFms8CeZeWw9YZmbm6YTi",
  "key32": "5QqzNh4Pdtdvdg4BfSYxVGu3SyAtrfNfMUMsP31ZpKzFyEG4wLyJ4XQgzWDQSGAwf6qK6U382cPgXcZdiJPvPKwE",
  "key33": "256rWehRTacLQanwbYyuaWwVwJ357ngZAy71XLXfcLgQcJEq8h3AcXwpAKfoBVYczjgaGhyPpnBJ9EDUFQyUuc8q",
  "key34": "2CRW7kTSMTDoTicqin6UCXf1NDpRZqPn6VKBeT964c3TqYQQZ9esMpg22JR5NrSEsVoJyxZSEgfMpPtrrgTaHFNp",
  "key35": "2G3N6hwLhk4cR8gtAJBYQZWjs7iBiBDthjXii4apnvwzRWnASyzY5fafLruQSk5hooz8o6Lf3HzdLQweZbtzsEmC",
  "key36": "35oujZofCNPmiB7j1Wd8ViCQSpTTnHyfwkFbvDF2eT9PLpQ7219gvLGZmB1KaZpyfDfmebZqT6zoVZvkMLZRwBLX",
  "key37": "5hy39cnDj4n2CiThbrHwiVZFS5TKpPRiDWPw9Ed3E7vRV7JW9UwzuLJFdLGAeiBCeCAJrfjp6DH5X54zbhbsFnh5",
  "key38": "4Dw97bzQsBBWN8rh57TD4YtwetHYArXqC5hEtmwgkb771w25fKgCdbqaSXqBRnN4jydymsWgfpTTzWHQrnfKEut6",
  "key39": "27N5tFvzrTQAr3XU7PiyD3VzmmzWYofgLZW7Ch1ZZgzCmSAN3Ln2LAPzRWB1HdXFxnMUEnhwBkeW8fvqk2sUjcJc",
  "key40": "3NZWETTuHYgX394fY8RJa3GdxD3ZZSMCvjVQMwEhmsEq9F6ZYssUVqwe3h5NwGzpYPoMjJtB6ipHEHakaTvLq6dG",
  "key41": "38k13Vf8fGDJ1H2p4HffubfeKXFxhQWWtJUaKLzgdda3tUugtsNXMiDfYhpXoqi41ruG9Bb7oRjcqZJwprzN1qTe",
  "key42": "2ETU8B2T9nQ3WUpQktsPFpb3iJxbxmQS8vCcMJZ42N8U2Xp79oaU52DA53tzoNAa9ZzHhPEx34hwPEZynhtsQof9",
  "key43": "SFUwnp3VYkiRoJcxf2YpdB1cvedzToYrt3oLGWHaB2mc4cjZZf6wB1ULPdXJCWe1KEN9EVZN2EiJBQUNVDBmWBC",
  "key44": "3JR195Zkzd7oWFkbJ5Vx6KoYe3qVRfH52tf9VB9YxnWV27egkBeox7Us53i5RAjs3XvyRzeu3C1a63EsmtqFZQxE"
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
