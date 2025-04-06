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
    "zXuso7kTyWBStmZvtsUYtHQF11N7kywDCMZYqvWyQxKpjThfUijmwzStwTb7AFvvA4u18CHamfXgmVA1gdYx1Xs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hyUk2PueGSxbsW1fSKHGZVrpGEYyBAmq4W9XHvMS5ps6UMevbSocwgaQLGHeNXQRXTTLnHJAK6k25uJDisrhe9g",
  "key1": "21BZqDvvM8m3Cpje5gh4WKWthXNY9eJRMazZqwysZPEVsi8ojLtytSbtYzQNjXQEw3AwBTNtrNbBWqR5cNktDfJb",
  "key2": "2evLWV9f9a65uHkLwFTzTGFAmHqsyD1DXYRGkWZotfBb4VpNif4qQ98McbsE6WARU5DjrZUfr7yP9C9RzEMUfxTp",
  "key3": "TNwCnQZwnhwCdQFAtNNX7wtBjdaVKUysNo7yWFPNZrmhjFKREQJRzq4YoTBqBrZhbVQLT4CrNPX36dPMXq4ZSvL",
  "key4": "65GJxvRVnEr9dHGQrmNEtCmpTj6XEvi26zwK8RHBaPUR6TVYGquh1Qhx5unGUtoXCg3LJ2mNs7yexJa1DxPs9wUX",
  "key5": "5Rmg2oQo1jLPEHar3nrW8QWgFQzw1Akc5AyKxwpJ9NXQnxtsRUnVaEYKeLMczfAV3zug8pkFQfpRCV8ayyGorh5R",
  "key6": "qTKYXZH9AhoMiQSVnqNZXauKf71Xi7Sd2VMDggdRWzGMjTeK53VgemgF5c8oX2h96qCDeMb7gLxAvW2te5Q29uH",
  "key7": "4t7vEX62aXb6G9Wss1eudwW1Dfga3FiuXFC47CxfheoCAjBTQfRDZLK57H5ryTtzUkvqxCvwhYxKSTa1fNsBzjQx",
  "key8": "2A8qR9FkLAvvktj8kzgP1MY8DBrUTZ3UfQUC1dN9SDH3tePn6aDq8XL9tHWLKBnfYHLrhfzTTWd3xRfGNCKG44Eh",
  "key9": "4jBHx8fbuTCUsBuaB7GeLy7QzNtDgEDGR7TbBEEe4K6ZC8UgJPFFGjABP6CwWfXAiPLMfmWaVTUDf4EnzYqg2Fdq",
  "key10": "4t82MY6Ja5syemRRo7wJF8MEXienjte8rNK4uP8MLBNrLiPHicN646jGbTdo2rKKnQhLN6WUy9QUhii1FeQCcaAF",
  "key11": "49TcAU7SdUXsZWHBCYWoDMy8RUu6gA9FProTQuJXn5KLmM7Z14aM5pyDwvEgwkZudnvLw9LNew2ABjQe6YWeu6cZ",
  "key12": "4egEUUSd1uv1ryCtsSGdDVPn5LQ4NQn5MNvUVEfyymoqmZSraaBBc7QY8ZAE8Vk622AdrkWEiiYtjEBQuQFcR2ou",
  "key13": "3hGMiuY17FUQVABQZjRYri9bDHC97Uw34SZuBESivwsFb6j5okM7t6Q5LTMFXLaZ4ALQmhnMzNgJbqWMLSefK5je",
  "key14": "2NKegfZsY8dpE1cQqwCcGhr6LnAdttS5LS9Z3gdqZJ7jPdZqFHtrDAZWJKtdUGam9mWkL9BjbTXjumSGE29sGYWe",
  "key15": "5Sj2zUHLNsZf9ernpQQrvKyaAuptANxj6bCDQgCRHGo6yBVxL8t4Jvf3jLTr9y6jjA78SBoL96a9i671xdHRwYE3",
  "key16": "5aa8J4hKQZD1Hwb8GnDxFN1zcnHCpuQ98PUi7bXk1pMEE6rNYQb6Shu58RHxqupuXxasaDL8S1tj1brYiGTyz14R",
  "key17": "3mqmH4WaiMyBzZwnVtxKwHmsS9sxVrAt9dgNoHcSdcFP4KbYfWeZkwhFgcQFBBZg3C1Lx9EnbXVkRgEGdKe6Tf6J",
  "key18": "5QeD5WHysHWy6Jw4eah46271yqr6qGWYDkYmVhRTyvXFzYR6HztPgYHYezP561QBAQRVsSoKdd7bVsh7eTmkWCQ2",
  "key19": "5ZPBARmosY8gpKbeYgwN2uZP5rPhKWYyMw9nkcucUPZLPLGAy4ERxd9h1oQStqAYvwHCzdD15EbHR3KdyoPGmwg5",
  "key20": "4EuCidNokA8vRpvumpKQtozBi5WyZmRvQidnSdoDz4mD6WiQRTx3W6bAQvTSktNfrJXSqDYrUsh3YC9K5diG4VKv",
  "key21": "38pDRoiHmkE2AJfo4oFMnXauVtZb9zVqjDgXcAxzWgaCcY62jkPwPiZS3dtku2AEY9qzbHCSzHqPp5ETvwoak2pN",
  "key22": "CqBLuVQjAGqoChT4Ls5LmfaezJZ53w7kA46RdTnUQ2DqJMBGNUqbT6JDvNwNfRjqijQntPsrbSdind695sEyzGe",
  "key23": "5ocXfz32EfjSXhPADe1Rw5WqTTXBFmTanC3Pu8hSReHM52EurpyDg2BFAhS5C7D4r8xaS8RKTBd1HYdt48C2g7Ro",
  "key24": "3neUksc5weuKGR6C3dhLKbmjJdymHCWYRKCeev2GViuGdQStDN5VTRzfkBFmvj8hW1qkejQQ3Unm5EZSogBTiebb",
  "key25": "2LfpzRAazJhhPwHqCiTJ3ipvLZdX2MKkuxC3WM7XGoGjoSKJAzXVNXJMVufaxbbgJXAfcge5mp7ijntycZCB58Q8",
  "key26": "5NA7zHastWJaVNR3kySVPgMkM1S3oLsk9otHzfTEE6We1fGtdoCPBhPm25a3iocr4j1rr8nnGSpHmeeenNxQerfy",
  "key27": "HSr4nywe2LsMzVTqGcJnDbtKF6QbZGVV81aXiuuHYSEv4Ay2dxQ2qF5smbBFP8zoK7tueCJviEcVVYM5h7yBDmW",
  "key28": "53swr7qTJzQR1mdgNHdYC6TMyp2zNgJ6yX93VABdCfH5w4b4FmoBZDdcmN6yehxekdiZeN1HVVJW1rgFudteUnv6",
  "key29": "2dzmp9h6URArxKqqo1zBZfE9b1MvYdmFcAmBF2PoLcR9RHXxpn33WUywrikNTKCkHP3AqETQgYoupjCZpQKcXLqd",
  "key30": "33pF3Cra9ALjUGXUZgrJ3sxSD6ALP18kieTF9wVU1SQRsqEBH6ZbDhwM7KLcZCZTk8Ujjj3e5m1Q2jZGEKwcp8JT",
  "key31": "5S3f6STNV4KEEwA3y6aD4xA3Mqp7ZifxCTvhtyMRCXQtRK1ekU6feB6dK6kFmeuYk9zEq58m76Ufnn8JRRH9cHF1",
  "key32": "4HYvgffTaSyM8r6b8ovD7WoKFvK3scqLWz1sKGrjrri1XxfBPGrkBuwfiC1DdVgMfEyF9tM4rhCRaWe4BqyZajuQ",
  "key33": "3vq1Sbk2oAp6NAcrvGrAGs9AvvauPZt9Fkcz1TTywF7gC2knRpHGvbRGNmyqNh2dkrW1yAGhTjM9T8nd6tJsnrEX",
  "key34": "2GRo363FzrWGoC5TRvvPjVFicqTraR6Fy2M9zxR1DbQ26gXdRLzfoLLHhDi1hRf3Lhk5YzGKTQNc8b5mcAneeLyA",
  "key35": "5e6xuk6E3LsdaSVcJjJuEYqJqfn6Mxs8PzCi56JhK4qAKppunz4vvMuFyJSMu44ih1Jtva78e8eiVNuxcQgr6sGi",
  "key36": "29Rbb7SCgCVioynkGmywnWLQVZuSV6EnTAyE4D9uMurAHyjPyaB7UX2JTW1iN8knGQu4Riivg9SRQ5XNfJoCSJBq"
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
