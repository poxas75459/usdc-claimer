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
    "55ViS1omEZbwbhu18gbV3tQVt8G6nGMnp3Bp87D4awyvELcPDuyW1X77CRVXBEchSgSTnQKeHZwoM9Zi5aZoz52T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DxSwSaX7JT7Vr5FoqfLDASxALsb4jVEaYxvNnYeLbgt6JFfRN87GTHgP1Hy1Bnxqnpr6aRnsF6MxTeWPbWdQvHG",
  "key1": "28efi7uE9qw6EvxQiiLgeY7ekvmCQHEaJPhoL9fYkTyoZqTV3K7oPvoUuxbjZAE6c26DBJ6ZfVUikJ3DtvRN6tHE",
  "key2": "2mRG5rA6VckBsHjSzVKnE78ceNVSWZwZx2mf85jrU5ALK9aEJxdF5DXrNNAzNkKZY2pjFCE7bTiGF298ieJp1FWi",
  "key3": "4is6EANQnMu9qWc4v6d8nre3FCz8rVKn2idVPAL85LrWAExJHz4BmXmRXvBGX2f3LtVACiotrTgT7UUzTGytzotE",
  "key4": "29EcMvhmFJ5Q5HYw8mEdi9KmD7hPsMZxSTAAYT9AxpGpcep4uWRXgqx6QoBBSJt4Xnzh2UHvcUNqDmijF34c4SZW",
  "key5": "4wB6tiXD6SaXh2GJYWqxVZUKsteNtR1s2fmk6GtUC2w3NN2L2sGHjrHr8126Sq8e7SfxMYX3GheEv4y4Nij8aMUt",
  "key6": "GvPwgeu1sJnQ8z8ZfpJBQr6ehVQySYuJqX64nYoqrU9uFddZkkFm2QqCXLXTffiFKnGv4YpfNQtfyNWN3yQyyuo",
  "key7": "3fjU8J1RcrbGCqVmHXeNpvuKN1U8jhEpmMtuHF17ZJ556De7jyxYAYF8EfsrTSPpzsL5xiUN8RS66vUGDmSHsgLT",
  "key8": "2tQqSuUrm3tiqe2qbtLezsvnadNQzwdnHM2MykG2A1xRTdpFEAfuSqDLtto5GqZNfdYEu28KnfGD4JFirxhkxCEP",
  "key9": "4bnQFCxRtAptEu7kp55qGC4Wcqb3dA4nFb8U3NqHhdVYfQtoy6MfFC136LmabQoW3hCkRC7Dd63bnT8YTaivwUFe",
  "key10": "2xhdc74ADGFo46tEw3biRV6ARc7ybDenz5gx2PGoUWVGkNqrN3mLuovvy8M4UHpJ29U6pm8pEVCRU2zxJxPJTyZh",
  "key11": "4aFrRFnyj1TvW9btZBewnHNDhmttK2uJ8WuKhh2d1oKnHKaQCgo5s4S3rvgJdS711vVo3Yb2P1gxsbwWLG91C4He",
  "key12": "39ybzEwJMzwHv9CEFdAXguMc3o3ihCBFVvJFckdXxkgK9AbBbt2BYKv3NRiTDUzvbh4Q6UCsnyEAWqVFyqo2rUF9",
  "key13": "suv2s9C1u2YZrC8XVdq8XPs7zYowHmjXNYHhdsopi3eohSryhBg2PvaduCZ2pie24vgSVoxbn1ufAmeUjvJKBgp",
  "key14": "4Z2JUzv93WtEdYTSsjvJgL2WsuJRrthMmDuPMZTLCTKngsCKvEgM1WmSSgm1NyFuy9PHbrNGkKQbCTwyrwtT6b4b",
  "key15": "4nhHDpPjyHHi2CW8SHh3BiMRaniang392qVHXuHU61TrQ4qexzAwyn9Gh2rLR91P9TEXwm22Uit8nGThYn2Gi2Df",
  "key16": "7aerw1NmDVHqxboKqa9Bt8fdapJvNdRzBMbSemiE8v78U5zeM5DQG88pENJFZTfu4w1GTU8joDyhiS31HSoR1jA",
  "key17": "3wFBpzyayUBBBf8NeGuSGvUYq7vKmk3Nh7dkpGMQreyXGNM6TEhvBTdN1dMDredevroL1cXTR7xLrkUAEjyqJfKU",
  "key18": "5fbeBdfc3pJyeyZGoC6yfamoDdD849aaWB5BNKkZACHmk59qzEYxnNNaxuS3ZPiBm2qDgs2GumaC9MEece1EBi81",
  "key19": "2Wp35coCdCYci4mhyU6wxsH1BCayQvYGQUuN46yQpF1P6GRZHHb5qnENnroh71CwRFNqR8TGFqVskbASNE6RPqRX",
  "key20": "2wLNBr18hyzU8C1T1iZScfPnKEfKM3Y8GABwwG2hLDySpxJJ3a9BdHnGDcfaCztJd2pMhHeofjaGEq7A8DiAY5L3",
  "key21": "5uJ2erMrj4iEWgAn4rgAKwhzrCFCMy9waSoW1Ydwa4a6bjrtM4U7qgbsurxj6yQwzdm8xDLbZxVYmr7yS5Bgs4VC",
  "key22": "5Jw9YBETPP9C8ThwTvSBBXfT5RSfDrqmJKdoW4Zek2EpZmRE1ECGwa7c9eDXsfeNVee7zeT5gdkY2AzPazMjd7da",
  "key23": "4Bdz1qwbcdnABw4pkshqG4JqCpgszt9qcL2XT1pvMK7Ux95jtwYDwrQ5GoKShNVHDgATpTyLYGEJWrkZmV9WqXwk",
  "key24": "28QY6zhSFdQSYdgbnmofHvmmprZPmVX3pcKgQuQ2oEP6piAMw1sRxhbdXcgS6X5YLWGJVzhmCXFpbKFhxjubnjnt",
  "key25": "4WZGGxT4HaZ7Akidzm7WHGC7AjNAvgf3ZFmft6QakTfTUFfb5HUfnu2Tpa6Zd1wmKd8BMrtQBJcHDGtxDhpjNBqM",
  "key26": "5LsykSM5dbYTJi7r5cZmK8zH2aLBLRMhoQo1Mmg21RCUyNjb7PgZng79Ccw8J8cEJkBn9aYJtzPn9pcW9dzQ2PcS",
  "key27": "2HqHnVqWJR6KPhSWzzQt6h6YBhMf37pmvGMDFfy2ZiEbrFtnHQskMjRmHUEXZU4fLJvBqvC3ngsPTDWeF627Pa9x",
  "key28": "37xfn9NjpXuH84Nvdk3fHTEgrkEdeWA7eVUupbirECKS7T8WSLwtpdrxbDFJxmzYmeD6Y5MhG884pEKsB2iwGi4P",
  "key29": "2oFs6sTCH8xGwrYjdxNhq2LKfPrHkzXKUAb4idHSLHWPM5zrPsiAv5pMTGUee28ZEe6jnpKKP2QQrbSxmMLqyy4b",
  "key30": "t3MxvjW68cxWmmr1izSBoMjrg4LcR6WsQjzfbPZGJ5yhWepUSsimnPzWraTwyjrCnLds1nDkwVdLTjRQeQ8eJM1",
  "key31": "wXh3WqpxkG4FgpuS9yuPXHnncheeuWQWruEfRRxZgtbGVc2Hip7JFdSgMphPMyYukrh9ZJb46bf7j6KGaZEZssX",
  "key32": "2gR4yZQVqkGEfh14F2cxEXw96gdjBAx2wJcdmYqrgaspE5pHVbGKSCJS9Pfvqt8DAdgQ9RrT96kuqvvqEjP5UwvX"
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
