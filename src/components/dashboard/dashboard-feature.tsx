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
    "2guP6Rzd2wHdgKngVw4dCxc7ceUQBtMBw6y4qqmsV4ai5vajGxUFVmptQfTP47kLDsmFAndgMeiLaKKPXnCqXmCo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kpNFa5VsUUVRVGwvDZjYcXyCYvwhGWQUVbq8CRL6z3CLeceJYbfxqNKgYhanVfeAxJ9ZceXADM7CQUHzuHQo8Aa",
  "key1": "G36Dd3tRFZ64uTNSfnarDNqUhZcu4HtKzk6LArCMBDX8sukja9VFH8hk8Bahc6jjg8k1qWrwaJRyfvsqBugSfRZ",
  "key2": "5dCr8wcKvVy5B4NqKDieUrKCher1hKVZwmtga83kLsKPcmR3adjwykVKqycYu5DanickG8TqkWqE71bE1gfY5tck",
  "key3": "uLKXPUz8ddQnY53ogPKAGrGro57DJiNbkewL4NnHhDX1xsLt71iqLz9Uxm5z6USXHw5iShg1HM2KWLr26T2AeEH",
  "key4": "2u5Q47u5wqGYBaGCBdkU84j8dokysd5ETyQjef9SyoRiP2NBxfkkhzyXhoBusDjo9V1G65kbHeHUtAL3HsjU5aq7",
  "key5": "3XgBjpaksD4FRmqjPT9akGQ9BdazGbCwA9RgNQFejmbhZZT8sS4eWE3Bg5TJ39HzEy1tci7qmPJ6CU6LQaBoExny",
  "key6": "GnjbgFU565Gf1JpoA2QgK8qz47A24wyQpM8QDPj51YKzHhnkQz58JidA7hjMknQiYnMqpUDhjDaG2pghV9QLZff",
  "key7": "3kQBzqK7SjpZNFA8jnhXkFaXt4sLeCiBo1sACguyXYDt5URRQYJvHUDGo2akY7RMtamgjAzuRvdWBGYJu3kY3VBz",
  "key8": "42mkitQscyQudzKCycWSgUWTxpSPk9CTFZXBGw3fHEnNACdLN17rdLnCLSBdPN9a4rboN2hcGTfdduyXshVj4iCe",
  "key9": "4vP333vxdLpe63ZYnk2Xt1BHQPS2kk9vnjdaxhz5MUxuAeggSP5GqMMvduMqYWjNDayCvUPh1VKhwnjyFZ9SuBzM",
  "key10": "64cteN8qKTBRDDE3srjZEGBUWpndeZUddc8Ze5TeWdZjWZbTCWvX73mjv7a5Zi8E7P6YmjUq8ZPfggJbtxLePLV6",
  "key11": "3QNQ3gYc1MzyDPG9ej9h1sqX2LBsS4sHpfFzVKUU2SitMtTevzH3n7j4nfpEVCsHsTHw8NGckwDGbUaBDTBXu5GB",
  "key12": "33Kr986FYzJELLj1r7721edpQmywYWvtm5kyzyf27VGj72gZxpJXR5EY28FtLYhLTqayqzjochxym3jrHipwVN9Q",
  "key13": "5dKAbK6sg3MinJQymZoQqT5RL8Uy1Dmzx4jecan3G7vZodKT61BmuWz9f2NXA5DdvreWvrnGDMA3rZDA5fR5wBJ6",
  "key14": "4TYWBMosrTRhbfQ4CnRG9s29srpaSX8FX19FGTeN24n6UJnL8ptx9GQrQaHNsjSi3MshQJ86bsCwMCqGiq3AdLBq",
  "key15": "5gVi3Y9NyRrVhPweLS3VTAnyWEZD8dbmWGFJbRozXCLg2V2M4Ny8SPkfT91PYPPmBsuYdiufsrkMtrmftvGBFUCq",
  "key16": "3dUjJw2rBQKj3SDxC9rWyJHxWCJ2Y7j9hiwGCbmeQgpr5Mcuq5RtqjsAfesRuVAF5pJeaKUXgvmMEXtedpvV3K78",
  "key17": "3RCcUUFe5kXU7h2ArezBkjTv57qbbpt2XknLAyJvpZ2qbVyZzD18Pnm3qZTatxwQ7QhHKnqHfLHXjkoVpCot5HkR",
  "key18": "qTX2kvAfH7uYJfuHmajSmqbNwUk24x9Evy3oD9zWxqMCDYiyQShZh9Vp4w97cCMeSBA7pKmw3NF854AmPuc8Kwt",
  "key19": "wFrb2F5gm3wdzakq8Facfjv1TXw49YRv48frCghXsfFK68BUgqamy6Wx43EVFqk2arxwLWAywtR53HwbZKCDtiZ",
  "key20": "4oFmYyeh9hqnHeVvyDRLbPa4eanA3XH7AzVA8nmgZQ6h7ovesJZGHKxrQm9nPn8aeT9xGUntoeP6AWUzZ1WgNoYB",
  "key21": "4aHzxwStNgp2LnLpxtJESLTS7vbKYZkxk8oh9bV3Viyyjks4dUTg2p9dDhmH1dh6f5vQj8Kh4zLevRmNkVH9DGva",
  "key22": "58iw8eXcH2toj84rEfBHbehrEH7kSKqSy4eY1WAueDqBmRxZVnUomQUmy7y9xkCG6L6N7kdzj1rXeRYSf3GqRcDt",
  "key23": "3mMNx4h1YMu8p7wE2MHZNT3Zttf9jp33DUqSsCqPUPStCD9CoHvKurAxFhx4W1bhv7BRXSWQDXA8bC6kce3K4mPC",
  "key24": "5Gri5ytS2Harf8yhumw7cBkT66pPsXQaAiesKJWM4TuAUeeFL3TjRafntbjBpkKcXnTa14u1RBtqLedWpdjEoC15",
  "key25": "5HNb5yjyRiREcPQkybR3YWmnbiiawyzz59HdAFh4LLuWndJHY2uwK36mZAmnz2mEG6viiSi7wmu2WWyarPg95jVP",
  "key26": "2AeTn6dudLzpQ5ukwiTGfHn9kdvYHuNuTTqVZYLgCDZ9UhKLbBvZh6HLhQsrQrztDFQ5y1u9vKUEnnkuKcZJukrk",
  "key27": "2H35ocSsPcBLvNJwacbQ7S28GbMZcXH3zV91N7ZwebK7YiodBGepLzzzw7DhSZ4ZjdibnmddnsK1ffVYkWuUmT9R",
  "key28": "3P5xwcNhtup2g9BmrsvAJKuHavwmfsfgsX5fCm2mCgwWkuBsiPvdNYwbhY16PhDQfUyvu8BzYoyv9utPMBt4RPW4",
  "key29": "2ioo6qNtkUMMa23J3KAkbivhSBe4UzVDNin9hrDdvvUhjZFEMjhtVhdnHqjMkf4JThDS2H1CzakRchWdJVajFFbB",
  "key30": "2iU22fuNNbvD7SV6YTbNSv6k5KqSNaaaT1XtRjnFHpxH7kxfwbCsjzRsqpjnej4nwPUL1owjdMkVbrCwXo4ECx5L",
  "key31": "5HgsygUfFNRKcv2Y4Bjs43Wt8bUvZge4WJevHeHN66Rnt8jgiMLuRQteoATZq57j6V3b6HTgUmjJTH4yVCuPLRm6",
  "key32": "47P7CUfMpZyjFsiHnNb1NhmLCvk9GVuyDjx2MTp7U8wTTzTG9Zu7WGTPz5JoKRhevwZKWLpau8tWZd8E6VBTCvf3",
  "key33": "UYsnNydquaQBLdgB8xxNsKwDbLNb8djs4tDCYXonFrQyrByoxviaKkDe9ne6ULdK8iejud7PJxecfrDSzAuYCwL",
  "key34": "WEhXBKCMzA1y8LfcfyYMeYngZ2U5wrWew98oXSDZur5egXdoQdHf9AW7TduBk4oXXVPk7nBoXpT7btoGr17du5v",
  "key35": "2HTtFkDDVHpFvPd2H292asAqQxv5X4U11iZe1KwjVZPY3qa6BE6f3SAeN4T5Ko1ExmLU8wzibGdCAd7D2N55JRMj",
  "key36": "2A55BhMkbSosgpKZfM5imVwr7tTVAMEfSfRhVyXL8RBQqf94NMFs8GPJVLT9FqpKNSdeZsJFvY5Rmrec45mAUBBM",
  "key37": "3ZRLSv7XvKtenzm3jsmLybtxLy6B1ryRZJbkdDhrLxTjhFkuhEdYWNFKBbQBjd1mLZN1CdCsjVfSD38giTwbkoV4",
  "key38": "3A77jSpGBxzsDgmE6SSh41W81G6FPs6X589LYmwohpohxLKMg97yFfrC97SrWEZsiJHH3ipfcVd9nQ47UNZAAvey",
  "key39": "2ZV1L9RixGU5ofNyzxkfoP3E7EDAbwsLuuQ57mKJD2pF59baM4f4D3EUbA95izT8L83TCyJY8KHvjwUXFkJfJdwK",
  "key40": "5thYDXkj3ypJQJympBGNvuD6rj29ZePvUE3YTh1rq2XHJk6EZWxdDH615kGPKSy9YgdEJ2jAJ3gvWRiqVEUrBoZo",
  "key41": "5cZR22m5iHM2QntacESCdDwBALNoozvNUBv2c131FqMjtFV7MR2E7au4CxHT4ohjHX2s8fWZetU9v3y8B7SvVUvb"
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
