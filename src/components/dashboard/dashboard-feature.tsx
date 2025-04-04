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
    "2CLMfrJp6wiC6fEXKByRgCV5gFhyFWQgmxGvcJzjVStkdF2Ev7zPBeSAuvATgKtCqtsbezj7Ppma1tpHpwBKvd9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rKkRza4GxhJdrN1HfmP3CJUcbGkmauoL1VNHRN5QbFa8N8sFYYMRJednfQ8JGiRMiTx1nBGvGS6BXo6WUcmTgat",
  "key1": "375RnWLETafwaP5UZRwh26kT9znecxNCZWaLbgsqVJNmjhqZFZKpwvQwFaLodvVKtkejTPRLnMfyURHMKDToMS1R",
  "key2": "2EWZtGqKNrbtHgBwcyHTNScr6hUgMzDezyURqEHptMe8GZYCe8btQMZX9x7zEThuGdenDjkjRRcrdLTmkMWtV9RZ",
  "key3": "5ShjMw4rSJAVb8NEjTr8yWDV2tRmjjHGpWr5fqxXMyNxP2RvRnhViWfJZCwAsyNax4389QEymakk6aNF7et7n443",
  "key4": "4Qs8Ba25jXpQLkfBN3ZqqPRS2XWs7RuumhDPB13oeZsXr6rrHmJDJ6CeKrBaXx3zgV3bjtphKJ3W1XjmyFmpfz26",
  "key5": "5qzxJmZhU69QjY5J9zE9tBePThLVBbQJKp4CojFg9fjYC4a49V7awERHZ9xvMSN6jgAMTyqtH6WXVv66KaUVvPkS",
  "key6": "5YGdbV8wSCkEGs8RnAtwnwRBT1po1oH3ARJeijsXjpW1zr81eiMgDYz7VSDUm2oQtBkjDFDigpk7GbdNwy6aNU2U",
  "key7": "5pH42sr6H8nsareSJtJAj3dJz37ApKndC3m3yV8HbfbK33TGc3GgMdoYyVEEjyvc52ur7YzwcREDqbsDnCcbRCwg",
  "key8": "5zZxYp6TzdCtrxESzYY8ZzameA1wRCYMD5jFHc7kGikpwBAdXWbnACHJT9JeB7heXHwa1w4vKXwda91LAwGGfsnx",
  "key9": "6H6suzz1uCsHq4j5n2TvHUyBJm7RFRnEfDLPduS3CpY3k43btZJqn6uBposj2eD45vcJBLP8bbbAsP3JqfBZT6C",
  "key10": "FNdXEeJxCoZnbfCH33fetak8RahhQ4v8y77w25fH4dWPcgmWhTfYYABENJUex631M2xriy8NBQYaYsr4jBaFp4g",
  "key11": "36XhgEeDtcz5FSaAQTGR1i5vhi9iUALJ24RBmF3mVoDswp68ZHBvCfmesnNseGRMgp5Q8o1t2TQeZEZedpJJ7AX8",
  "key12": "2mCj6URWiDcvnsJFTkUNk7Yo7ioT7TdxoRJdZfZcPPbEHNaVatYoho5MxUiNn3vz79yAtFzGskVWtbiQd53KGUJf",
  "key13": "34t2EAvMVtSxY9ebVh3VuYG1T5U9Yv5KPw5fRgYChxoVmvAem5r8G849npRdekJcZGBSkiwhtQSc8vg5jikYK3a3",
  "key14": "2eyPyjWH5FTuym6oxdypa4Nz2Mc2MHmQ6exhnyMyDyJEc2yiHs4jUVACuuMCVXCercWDDEAAS7vzeNEWXkh6ADGt",
  "key15": "VhbtirgeqJejFrMN5kiF5cUr854uuU9dKh9Rdue5o6Hit7VHSc457WdW6cGYnkRwQhTwHtqNuqJbUjvHpm98cj2",
  "key16": "2LbTLzZ4Qk95n5k1DTyBvxuaXa6ETQw2gPoFFR6iutSGan4rwZgjQTaNcZN4EnGsfRCwVVDfeArcfzhSvKYRDQ4h",
  "key17": "55T8c6vpAZwzLRNQHAhEh4E4JtKUHbC6NwXwkJEzAcLzxVWKLcAGag5yqpib9RTACKPbuZaaWcwjnuSMjgjJWjdh",
  "key18": "5ospX6xmR6ZNLvdjBxAJBE1fp6tkXhFDWcb3tFs7pzLb2wDW7Es5FBv6bioGPTDQ4jpPA3YiXKFDohrk5fhV5z36",
  "key19": "3s3jxWioRkagovjriFJjtn1kf57rWUZjA32LppzM4nVAWo8ibNBapD3TufVjFQqLt1ajwHBeESjZTeU1tgJScyou",
  "key20": "3bJWx1mqRQnPmeyWWKKmKpKpsBfrvcV5ZhyzdDVbqxaoeMQg1BYGCht36LP7F58JyJsjNwxSrhugCHAPxnevrBg4",
  "key21": "5CDexAr6R7d9XbEfm6qBLq9WvVtuqrGDH8jRCHckjR7ajHDHKF3Pbts7vxq3DZFz5dJuRem9LKSgm89zeQJ4uwAN",
  "key22": "2u6H6ah37deU4JBiRzCVZYKVWcQeX1CerJ6pyFcrJNh7eH9RjprcJZrFt5We4BakModrb5B6Dg81bR6La6S4kJJR",
  "key23": "3YWAo5Cyu3A63K9Z7UFFHZNgoUbDTHXJR7MxnhsWzfy8rkQmsRZScrRgEm2ENfL5UGAxTs5C7ozuWQ9vtZj6qetQ",
  "key24": "38vdEzGrKAGYzjqwDwgUqKXMDUPfH2HcjNVPVQpht1XeM6oMphp1K4LLR2ThUAVXWZcJbVEYxU1xfLZUyXqkm1BY",
  "key25": "eEqrFf3zAqPAwao75qfbyLgc6T33toSKBUGWkRgqX1cnMBSFgkHXjd7FjLzkcrxDwNxd7xLGf6JJRDAzZyMcR58",
  "key26": "5D7jPL9YR1i2Vzdnsrd2t1iq4EPv2J3oWjSQTskm6dVf9ucSj2K9H7nhcU2pSJidLuQB993WiUYhYL6pJdhfd3GB",
  "key27": "4eobUd9sxeyLX1xcd1iXoypii9M3HUa8zXP76tV3eBCjrFHSVGxPVEDxcNaUaiRpr3Vn19CmkyWTEUn81MbPvCqR",
  "key28": "3Us9b3RHMfTUL9NS4AUyt1j1mcn28XDos1xQojvUaVEDf3szXmWc6xZmDPjA9zucfue7B5MsSNiUxR7zUF8a6TNi",
  "key29": "62HvFgw8396ENWBZXT9SLD2DQz6kYx3AWY3axcHHqR3VweAxsByKVYjpmd2xxqch5cHCgHKmGtpA5qr4mHFHBdo1",
  "key30": "GxfXRoT63bWBapCVbzMAS96QKFATL8LaNXTGKrA3Y9V9UkeKo3AcH2kSKeVAUfP4KucDAXKdHfs2HMckAhmNBCL",
  "key31": "4sdyb2AfWfLZTrzUfeAeMJ8RFZ32CCa1vX933hQaQx3AHzMMatTujfBSNBarZKUszsavCHwRgxUKogobMJFMhABF",
  "key32": "6m8fHKW2y3mMf7P2VFoz3XG2gLf3nqh1oXfosLBpYyJgAjstTSoZsXdni8BhueM1pY8yGqem8Lhm7yB5iTy5CPX",
  "key33": "3diPpQjubvWDtrerZvf41HYC63VfboymuKZcuVFHfFS78DTEp9aVkhVfn7A4gvUc9kmirrSqU93VR35fq5gJPyhq",
  "key34": "pFpdS9s7h2WLDriNktpZhd5zN3jkrLVU65jYeAXP9CE7MLDLr31h5GGndjmBhW1nf34Po2io78BCuun57hNEPka",
  "key35": "2zZA9mEVxPMb8ZBbWkrMEpJtJMLK13qJPLChnbVpiTCXG7LzyvfqCiV8uui8U6Btrr6DakbMnU5wMLNx4R64Uyyx"
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
