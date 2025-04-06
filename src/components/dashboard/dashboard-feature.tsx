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
    "44TgMf7wGu6jEPQ44ybQTfSGd97ph8QqdqZ1GfmFcaiftHvjM5Fm3c7qWSs1hihZdEPkGRB3JdcPkapcpbPuyRHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DmFFuRjuw3Hg1iGAP27W7dZDtXgtFddTdnrsJpV5V4kLkcsqe7Hnk1yctJorAqEsW7z1oiWSavzQ9HZh2nt1bmc",
  "key1": "4qcEPJLsgtUmH8QUpLgXh324Y63AsaCMg4mE5g4aqE8H8gjbw55qcGto5mjJ2MzraWB4Czr9xY7CFVjwR9yDrtC7",
  "key2": "2b17uB6zLXjM541dd5sr377gjyJYGtcKoufhWCXb1FabLkVBY216Y8oCTL5eh9iU4qyPV4sc6DLH5NxuVdgxpSkX",
  "key3": "5UhXC5t5NhXi7dEQaVwqvRUqpMue4mkT7aLoeePGz2roiDD8ANnvQUq8wn9YmprLkGhKpCj8gtfs3ePeX4ukqanD",
  "key4": "2tqu74XtmrPXqNeMttSMqFxDMGxqFKujzXsP4i4gXFz9NYmEooZGeuqSfq9eB3dN7YPyqCupgjNLbBhQec3GacrQ",
  "key5": "5ScHsuALb6g57NZW5FnFsRsNLLaZEfw8Au2Ur9G3fhf7KMsvPyd7buNq19G8xE28V98P4MDuA4MYhk72UufxyedH",
  "key6": "3EzBay53NxvmZeGvNNn6VvKagbiTEuBM9YW8GmLigDmGUL9N9RtXxTd52vE1gVP5ArtMgzhNptg3LZE7QqAZ6BXa",
  "key7": "3fqiTUxFm6qG659xrK5CV9ogh5vkCxMFKcJA9VC8ykyJJS76noM2EWpjB3rS2WfGAnGAgwUpny6MnWTbNkwU9n8Z",
  "key8": "5KCU6jfg1144gSF2nN1Pi1zXUxvyxCSUYjr5TwAFJXsd5zjaosDsWUU7PEqbhAThrWXHoNSywpkGFL9CvZMKq6kq",
  "key9": "Xy2YAEapE4M4AroaapSoTZzynT8xgPP1jV7qzKkA8NFVRhhEkij4fpwuaXU9dCJQUFdCWp8RxiFiAyWio1BiBcr",
  "key10": "3XzWwWE2oqajWRi1nnvfXX8TfpZqj5uhH3871FEaD93BT3F4FY7R2AuPYdY6eHgqbDW8Aor3KUiKFp1n6nWWxy4Y",
  "key11": "25gtnbxevBQgPrYLE3kpuGiizTxdDvGaJSfEzDJNd2RYvktj8WByyEGikaVpFxDt6cUNYnJFM29g91scWRaGm5se",
  "key12": "3p1HtpAKC15Lq1xZRoSuy6oiG3umLxABQs7pP1UJWtYZJfjdjvxdQhCPGHUaYYzLMyFnzusK6DWDYQQu4AmyLsWa",
  "key13": "3emBvPy48hC84iZh8Mq38hKenB3qqdcyupQf3v6HLYpKjis9TZPDXTy1cnYqUW7jpZnWszfjUwJZHZE4iyeSYv4y",
  "key14": "4vZqUpvTbvFdVCkT8UH2aEZ1SFH2sicRgZx1ejQ32oZPZPBX1MwbSCexnTuG3C4xpjoq5BV7btJfqB1vLvmQ1mLL",
  "key15": "4tQVEyjDxzn1Wi6tLMo1H7Et94fKRxPkGWKFB1XML3nMCoycxu7BcouWNJiNp4CTmhkTBZwxCBjugZBjPcBXmrTP",
  "key16": "46iuSgYMKsPhD6iLyfsU7s3DCLTniinPQvswt9rGKmRv888SHXSgxwPLn98JBmYYt9HSch36vRxGzfMUbt3GCEDV",
  "key17": "2MU49p59sh9gdUcyAbYUtCjpoJ8FcqjrpdnRUivdac6ExXkTDCJpgEefTA9ckAwvTmWzcSG18KsNQ8oC6yWBPMR7",
  "key18": "3gPX8BxzWNV5aAuLCtmjDPZhmEwGLJRZQfRg4DQAw48xUWgjpq7tj1hzv8wHThWsEbC8ujaXzqK64ft6w3boJeHV",
  "key19": "2jByUAN41kD4QN4Bf7yG8ifjzHNGbnK8ZCZ6Hsc7azy5MwsrVMHFscYsTP2tdcxAgWWNFqgCmw2n1bFBgdUjHqdM",
  "key20": "248tuhr9pLb9J7T8e5XFZcN2nbJgUt6e2zSeftbA6mPSwPM3ZZbWNBu9ns2VQb7rnaWTz2Nd1NYFpJSH5TCPMzQh",
  "key21": "2MpDTrxUWHCom2hZtkCfBQYhRTDLvEaMGCLXmLaTmBbe1eZbik2PuBpUQucLxYFAn4EzjUZx49ZNsxEfKP4tEEAa",
  "key22": "3yrRkfQWvLJNQauaebk15YF5PdoCuydeqM6NxTdFkor3DpxQksw5Zy78ERGZ5pp5bVM3aByHtMT28g8QRHxtVBt6",
  "key23": "2oxeBC5Kgr4EbzmGwST4Vb7GdhmGBCPY59GcAKsHWpB4Qf5MfT7LZUNCU1QzxXQtaXUKmA2a4oXV2GPPrPTHcSFh",
  "key24": "4rvPtuMu7yuy7vnEQkQeBGTMkNihvSFSXGKUhdxbooBKBC6nsKgbq48DJ1qeQtmCLBGHgRoGmgbAgpAv3fzPe3p5",
  "key25": "rskCGtftZVjNxiGdCKHfJdD8M6QmWYTFrWdAveZFSkRejM7PNbho98mcG3Hcu9rSgm6hnBLtL5FYPoYUMhz7AwF",
  "key26": "56yEGVj4A4aNiau21eQrxhJj1JuDzCqipcyAm23ste3E3CLYYidNuCWy5Zy5pF5noz9Y3ggeVoXZ4BbhbhpcXkaD",
  "key27": "62fkhGGV558AaSXsRajZ18U1AaCEUjsbGUW2UVKnstpNq8zeNjjPDVdhPgg9So3BZYwSnm6YhVPoLpvTS83DdEj5",
  "key28": "3D1MrwnDAfPZG1G6LhTobbzakVC7xN8KRL4S1p9Sa32eq2eNeRed9pyhmdEQrZVERFgVjqvGa7UFiQojGrQ6JPuh",
  "key29": "4QhcbU2DMdmkEaCyXvJLowrnYcobXapX3gH9N4RrFr8CJy31yYcMSFLwcNUQMMMGGe9fbBgHiAvDayiiJAUNoKih",
  "key30": "5qTZuUoo6CUKi38yaBbFyj6EYMHW9Mq5PuqryRdZ2Pi74KUD5SZSsNwshJuPGbhtqKndcfHQsGnTVMkGZb9ygpCm",
  "key31": "43V7hxCa3DpFGbb2bD57xeQdPtFRNkktgraZLAoSGUQ7VP9tbfRDekYJ9t114XMRUnr5CdQNYXkaeKE9TDQF9SiH",
  "key32": "YfuEgbxuLZvC7qWZxT8dLSPadQU2Pdd5Ju4HofMmPVj4mC8HSe6BMtcK3HEDYZFGxFAr3qMvo6EziNYkJYu7tPN",
  "key33": "2hJ54BEVk2SYm9FFfYZJZ5HFasWHSfWr8rcXK497hErw6Ym1Df1ekr81ECnJBQBobEdwnFkdfCGWKyccUPQPGCXx",
  "key34": "4HcxywCA4GHgTUxMouo6F5jra19qFKzSPZt3P4gWLKFLRW8Tzfz1pThDvQJcHUwjn3ovFgP3TVNpnxwdfXebzYLC",
  "key35": "5H9aJe46v84hPnPdVq7htqQmKw3DEaefDazpRs1mfaQtvpVMYRijDHqo5mwpjM2RbawZmp6EwXKy6K2PjhJWN7c6",
  "key36": "45LQc5q9KKBgqZ1LoShD34DA5fLu8K5gLEuYNgv1i1z65HV8BQ2sH7kWA9VCqyghD4HkAeK8iQJySTspS7WgtBYz",
  "key37": "3CCHBSSWthx1aNRMUEnvwGFBKWMXukev3zBrKwyoJLv8XjrrvkTqA6PxTTHrvrvuFeSncTmcBzydqHPDRXxhFYHB",
  "key38": "4BYTB6crVpXTYeatKbzzYPTtoCzRZqvRsS4Z765gH2Rvqm9qkgkWaKcZyLkxH8p5rFrEuwG5qJjNJcv7p6R7UZvT",
  "key39": "218YgNYk9rtbWwUvM4XwvvXwyo1SbYARZ2WPneGgrMH6d1aQHQWztYFSnWKJzhojMKKgoMgJX6rTjR8szKXd18oM",
  "key40": "3RcnfznYuhw6pFAn4sLQwZSA5aMDyHzWQP6bVtF82oY2odUmyszQarWTTDhacWssLRcyjrbM5kiKrNjm8q7e8Tvb",
  "key41": "3y91WQUS68AdDQosSVy7ewWNEpc5EzXJ2yQ3FBHojcjjkw2z5mDnpBRv7yTwKGdziM3NaKKX9U85LW7crxMPvd3g",
  "key42": "5fjqCwx7KoYJEBAVPT7vPdYAkWgmWFzbBkmtTSFjvX1bp1aYsWrjLhuy2SoF87xigXe9YvejbqGLJtkGaW3vWi3X",
  "key43": "4KZLUdhx1x8fVRKexf8Qia3yYkyg7VxKbWfxhJ8Pdaxj2rGN9QpyrpFBaeRAmHqjfh4JqkX9jXQjX8zVFxFj9ACe",
  "key44": "4qjNvhWD9uZEfbMAaWKvQYHop2MeAKgAGL2dcm69woSi5xe9dAZKKn8A9dCWFFPPCqNqUv5WFf3SggDb7UqyXntE",
  "key45": "3kxzujTjc7uBybX1nzzidP8nxgpvGvxmzDy4RhBY2H3ZyrnBSRYU692iUWc2zLE9TKzNg2pSVMZ5XZs8ezNcoufa"
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
