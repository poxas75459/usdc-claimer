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
    "Kaxzc5KK3p9ZSZAWuY41n9MXKbxfRBbvu9P9wqu29GjFdC9TpPfuuYHp8YWBhntCaXBkpGsYsT38Ve3TJbGBipg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n11sKH4Gr8jSojh3eAuWHkrRAuAAPpwGxmvXSVfsayzob7sLrNyGX43KZgrk2WygkUnTSBhGZ94vczZgA4rMk6u",
  "key1": "44TT43NxNUjQJjZUP8HFg4wAEKjMxBcRdQdDhqycuTfDVWKU68MErWXUmirj53wYsjDEpiwqc2VEzWt2r3Y9xrFz",
  "key2": "355KuabMZy89y5f5BazM7e98BqnE2VeihH28nbx246iai6r4uP75pDZdf83ZqioB939t34KUxdEYNxWAcyip6v2w",
  "key3": "46q9CQTZtUJ7ZpGuvHprYFh6StRPocKwYiYL4Z4LiVBRiQBnSsEfzJsY2VfLbbGghGeyDxQqRZaTosQ59mqo9Xh7",
  "key4": "55EkWNv2h99ZQ2x8QALA8q3w91qtZKJmp5HCjrzNGVtAAXCsWqGmS2jNN7g9qhrN9MRvJNnTg7oPHaPFwaCrv9Vx",
  "key5": "5YLsiihwgo1A3aQegTMvYptskeJ1ZABfaWma521VPX2cV7NXpE1Kda8ud4EtgeyjL2gptHMFAuTxs9N9ZM9HUDwP",
  "key6": "3UiM9AYRiaNo78uftZk63mFht5bDCygbLQHEdFMqBP3KiRtMFsRQiSHNDXe6hydP5qdXR3Bjzz9n8Rs6g6qAMKWC",
  "key7": "2kVsdBhLYC6KdwrQueKAVWwWUrUbrNBdFVcSE5e8dmS9xX6Rs8zaKNaskdP4KW1PQGBx5jucf79RL5tpbVJGgy36",
  "key8": "5D6djD4VzGh7wVcckkEjaXrrij5KrXysPNAaChqH3rWo8WauSQ7uge6yyE66BhDxZC2Wd6ahxBGvmy8fMSyhy1nY",
  "key9": "4w6ZiUhaPGoFWoRz1HYPsqaVBezrBRiZqS3HP6jX71Ft9WvLycNfUH8YkRLvVqYjdj8pbdbuJWrUqvc9XnEynijC",
  "key10": "5xbj2Ug6M2DKFMTTpd7uwhdxyALFxHXmULheQKqbDYcXSibBms6xYTnV8kBZ8H5tgeGHaJHiqtakDJ8Gi1QJKMou",
  "key11": "2QCpgAsVNJRP9vnGZLYVLgVPcvSD7vZFRAXcahh5irACfnqRi9NvL15LMbwEcUCMqsGuvAfFQu6A8zGUChSMfahS",
  "key12": "3oM4fqdRfddU9zBMxLdznqD8MbE9LpsnMZXdy2DYuD2w66R3tAR9EWQyo89pw5v1SZMaKkRgjfGGQPThZT7rS3V6",
  "key13": "38GZpiPLDj9ixBKcQhBPv93B2tgroVfNZBNouTeaj5qjLDjMXCH84QrZRMJui7id1qKEJKxST42YwBLmijvh6dTJ",
  "key14": "4HsqzmRUdikSJvKiEXVWWjs4C9XKxeTi2Tf9G9Rs6ntGCrtmzsJW39EzvhLyUdQrHSL6E31YmNNb2ezjF9esQTa5",
  "key15": "2MXWo6GH1BCGcZbaVDGYcVSbWLMRLKTBw7io1BzquwC7wEAXp1KyHxxHw5p1mu94xubCxK3aieSoBdp6F3ctxTBQ",
  "key16": "5kTgecJorPyvJTX1nNSExV7YKa9GVRqsVxRgKYmo6HUJ4ojQeH6b5YR1MLFTVbqsig2FvCgikau5x8Xv4yCmQJFb",
  "key17": "4SF94YMquneJtRdK32PM3ZKrYt8n7LBbLhLwhWDQVL3nFECJGhPpaP5SZYyXPPq6JWrkFGJP4hGdbsuZj6s6MguJ",
  "key18": "5kMw1jNEdwo6y8VVGVADZVAPSL1MSU7tvq3SqVXUdQSogof1snXS6UfzhLHSxPYvLrGNKxFy5Xy6dGA6SD7wp7A",
  "key19": "5rUyTzusetZP9NkN1Mh3zn7tHLPjkEb23fNJzw82CDZ3y2hTAErYtGQagiyVZGiQ9Vxb1Dogzp3CPSZ6YMHu9RrS",
  "key20": "4CTWpJmGQNu7y4H379WW9XoAZDXQxZsyhJ1AhJKAsRt1JhdLG6jvhMzsLfi5t8EVTHZscQWp6z5GZDA1zSDAXeum",
  "key21": "4GKuSNsSdH7K9EbzaoLrf8543Nwto2gF3xmfctD9mtnYfzsV4R6T3h9zKKkxrrQrCyZuZgP2pracUMRDnGAQYkmV",
  "key22": "5VSMH2SWGU5sFxP6hj8Tv7QjjsGDyJj1FHhwKuqm8bM68MrRseUtsZC5FN8rrSRFDGwLodcCFNTGQFmPptTuWCyC",
  "key23": "5ujpTZAhigmBseecwz6RgwQuskfuHZGsjn1XKW4RwzoAU3YxTWjnRgBG9N5yqLRq6pMPRyH6M7M2QvrG19wg8SzR",
  "key24": "4UoFkCajCH5yZt4rkkNHe5KucZufjnCHc4KAggSKBd6wuMe3LTEkiywNVWimdAHeJ2U6RMik5a85a2ZLennya5UT",
  "key25": "1ruhxBFRKZjosP8fnWeWCt12ejGcEsmFM2TrtMtXDkAg9UyFCqfNMRrU1FNLax7vmQBdQk1sQ2tdzXu44U24htz",
  "key26": "621FnAkyEgmoSgDXUPydJ5yGoXK71FDj8xYqav9kYq8Z9dAQ7Gw6XET5qwA9bL8FtWQZgJM9j2EpBh2b4tg2gzhT"
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
