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
    "2aD7Kn1XBxagHHaALQ7qfUX9iftmSFH4fVJscPLsQLyCwGC9cJN8ohLUAnh6RiEx8dYLHtM3d7vcWjw2ZA8GeDKt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KE33DjFBkQDCUYJNoNWfKkzLUxdsmQL5bvfiq4vST3RJTDWPvZjaAbY5geNYr2EgvoHDKGoACwbrvoc3si1CevB",
  "key1": "4Mprdq9PkkBbBBxS8VXx6gRSofDWwYp9UBKXkRZ72xLtUSVhumKSeqH4zjoiTPkptJ3a3o3TcsAZsgkig7r3CTHK",
  "key2": "3bnAeQnuBnyG6DT11bGWqS5geuF5bn567qFeg31rLKELVyZvfwY6nmkHQw75YiZATTV5Eiun6gvHbbxfm6uTDZgm",
  "key3": "RZKLQj8J3NnBPZFB4vBj3vLVHRFxMjefa5yPdpbzdDcaboPiSDbsBX3usiKHkbXCEL2UCv24Ta35JgnYzDoBpg5",
  "key4": "9E4i39YXQctzaz54dw5TwvXTNYm5b98p5CwAuU5MJAP5cpd7VyynDN14ndeU2Urg96JSDbZvA3cCvcbsJz9ZvoA",
  "key5": "2ZEYjtxbX4CQ9hxJRkCYsQMGhTjyzmWNDCbs3RpuWym3a9oBE6LHyu1XTF243q2zV7co5ZJ9LMH4L6CLzdyToNn7",
  "key6": "4Fo3JrutvDRRKniYinSJydVHSMVQJyKAtLL5frzgFYLJh8MgHDspaaSPff5kCK4j82QuQeBUbgZSYTszbEDJ7gVP",
  "key7": "4YUq5qhc9rruXpYigADyhEpnvYVsy3KD2biXPgnQt8zqKu3SKdRvxjitZ5BDG7bSc9NAtToqVAgFJpvgsqM3XgcK",
  "key8": "2MutexVg9pVwCjXyDGmb7sr5KKTCtrk7jn4v4LCKkrhRXxxxsPAYqpMnA1uytKJh1hPCAbMchYSnXUTAbpSYt5jN",
  "key9": "5Hn29vz156QbCSUejASs7zkQgyWDe8de7Ppvsjca7UhskuFYyC1PXqnyhQtynNyPzJhuR9iLpmbCy2PFZZJ2NAVG",
  "key10": "Pct1pfj9ZVkJnzvYVhJ3s8FtLLRi6eFGVSKFuGC6RzZ4D4RV7HGN8JxeSxg9QtpKAgdgqDWTrdDeA9tpLbnuM36",
  "key11": "28cWhcZBzkAXix7dyM4y5gNSP1nb9Tg6Ya1yT4JdJvhF787fPXe522ztdJ4uezfBvm2qM56Aq4EbjvoXjh5fSRUY",
  "key12": "29kRtSwVfubTKPncsyVFvN8wDrgEL98WEdyDvKt3iRPc2VF6iULumHhjf9LxGj2rg782UWWRbcWcBi8nbkZN6ntk",
  "key13": "5phxmF6WvXuKAMbcfYP5yar4Hnssbr4JZLRyHaAE6cBJ3Zin6Uw45YWkyZBy9Auppgdu72bSf7xdPm9cM98Qap85",
  "key14": "4FQ7f1GB4adhQW4CSUwyHdW4dc2VkdrFfSg3qRaJKDNQMwnzSEnRKhJFaBFrrgpW3mjn2SPYubfJcCHLn9omYS2N",
  "key15": "2iJW4KhzcU4GCUGNA5PoNTXPbVeYkghbeLBa7F1EpZFr65BuL9VRoYwk5Hy7FNKkBGdXZ4hSp4NTB6GiTKpD6cZU",
  "key16": "4uhFuuvU7HxDJrDpsG6Z8HXPMULiGKZyqdtZe7KJyjAzgECjX1VUB2i71Pf6DEYaq3v5mNeqEeRHcRDwTokKHBsa",
  "key17": "nDdokYXUHkVdd9CXsdxVqCTKMEjqNp3W44D4izL6zdaftTiUYp1NZumNaJ3WSpewMVvQqV4xZpvPVjQCeEQCJZr",
  "key18": "42oaEwHPkiurZN7qD5ZMBeoFGXViJNi3iMoz4RHQmprNUwBQrcM8RUEzy61tX9xiwd3AtLbQcMZF83XwT84BgbBy",
  "key19": "3i9hGNRKnhxiBMRQ1nbCe8fQMRQpuofg1Pwsmw3SEW43xJbt8d4FBPakWmk4oj8jzdsCgdD4FmpQLMNpaWUhTozk",
  "key20": "xdCSg2ofzQuPDkLrwEWJdtoghMDyHKw1qSeCT1Y3BpVL2GDm1Mcxs4dwQPpZewdmVLVp2k29GFQYoK5A9i42hJx",
  "key21": "HLDEDzkmwMFCMDqiaT6dXVaoDeVkjUEpurG6EqaS534NzpRpu4k45pXz3tGMd3n6Yh7yZL5ZVpLgd1cJShE5d6k",
  "key22": "2KLEYre2SedBZ5MBp7p1dBfxqbKaXRf2qFEcwuxLuquPP7AGwyhGCnWWrA1Zw5zPQAp3sfTY5RNauvWTW72k5yrE",
  "key23": "XnKPAdqiqGap9UmRb9MYmCQEJz5vdpYJywfUgL1Pfi9vkR29eBcVXSdUo56rxq5QTpduuxNp4SAvbfx2sydoz5P",
  "key24": "r7YriAEy4nHRf9GQzT3azuUdb74qrUuvx1HHzMzNWRmEghDL6dEeu2JNcuoVbH5UpbVWUev31FXH2jusQya3b1J"
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
