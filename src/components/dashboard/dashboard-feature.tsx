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
    "3HKRfjHuSr9unn9yjSrui9dJ6vdMrBSpg2nLZHzYVEWCEWbqheCnKW7eZE9k8ayEptajtD2yCuYS84z6tVcEheyG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iuLYPfkwsbwb4foirLh4zZ8cURuvyVcBGhE1mBugkcDQZGTd87Q2ifrNHd354DsYhBSA35fiV1nzZAFEpeP6oYL",
  "key1": "GcXcgLL9Hvi7WhvSKNrzSYUjzvVmZPkX8GbRRzUf827fJprV2nsbEytW1buxfuhyskKXxtriRB8SCgzHxK2VfJE",
  "key2": "5dks6km7sKZqbzGXGJ3tKaCx9wKrQQ3jQKrxFxq9wESmbPBpp5F1hBKWZaFF2BfTa3JitwridQZFDR6DjwkeLpcU",
  "key3": "5BkVczp9mNaXXRaLH4sRGWsBrxxPNKGzwouqr64UFQyerWEh8NyorJEaKmmwrhZLgkZyw3SRnxwPU785dRMXyRd",
  "key4": "NpGH9sYgcEQb3Ri7tnzkmLeyi8yBnwBrjrjr4ppCxG911BvidBYDMjeELcJMGXt5ZcVX8u14vyPsHkFQy7Et9i8",
  "key5": "4xtdirhNnPqTVtRXX9XE9MeBVzQR7vydM8Ug7DUqB2Viu3p1Uqa4mx6qcVt6uX6GRtzLtuk2SaC7gvr5GDaNy7nZ",
  "key6": "5cmeJyVyifw7n7FSM8XjSPJanq7ZH5BPQKDHcemDQTWcRaGsbAh6D9PeAYtd5dwrcaC6ueeSL49uqsyfPQzoyYHM",
  "key7": "3i3xeBrSrSb2ibbekfk3mUGgHhxC4k1e3RTDXGDJsz1cQqkRrGWcH2hM6SABYSQvWmPnEKS5SaAyfdwCPkkuLQCK",
  "key8": "5HMGPfEVyMPwyxMUrVoxHvENG4WwNEGGs1MPfZ5jBFS556ApzuyshJEpXCBpMmcEXWE78TFgG8xreccGatnqv7CH",
  "key9": "23egCU8a2RdJrhTUW1RJ6GnH6vqFwpLhhGWDS7KR1EgUzLQmzSC5uvN5PkSd4q9HRTB9QevYd3AjcuKiw7EV3NG2",
  "key10": "3RmUMDG9WVEvCT1wmDQaG1SjERbAcGBQZwwCdtBfcEGRunTPkhSx4ynxm5LF3Rrj5q9PUF9ACDxPChbrAeMbmP67",
  "key11": "2ZJXH7Niq5fcaJBvaj3kHsz9LAcUu4MHeNzVMK8oRsPQjPovarkGciCycbfzYDdW8XQy1u767r7cUhWokgHnMTMd",
  "key12": "4n7bbzwBK1hqmKDGcqN2yawrnnGKTCmnb61Ky8cJiHuhE9EBAYyADbMhBNWYS3VqRUYQX27MCDaBd7tstprnD3MT",
  "key13": "3vGMgWX8tJ5Wjiv7dxhH5mp1pEPPemnNfEeNnNcWvEVkgggMK7PwjLDvQGFmTR7EJpHHV3ErBoGqUPsLfsQNN6YW",
  "key14": "64LEPCyhBPnJpspFye8C4pKxneZnkxSRX7jgqPkkTkua4kgT3B2vAnejmWgXFGUbgGFXTe73kKKZqKiaGo6UJfRW",
  "key15": "2qXjGtsLo4EuF33etGRsMBsHt4gku4ppXZK83opzmpsSd4dw72VtkMHmCMaxvLs9UVMmfoc92gVG1rZYzMPi34TT",
  "key16": "62kKwfwSzvRRJsYYrXGz3jcMQd3S3pT9x5hLKGFvwh7EJJqEraSLmeLEMyNj8VuiyTQVqjt5SqSnj3bAGY37YUYw",
  "key17": "5pCo1RDCoq5EU53doa7y2SBWffxe2jKfnTfhBKqfLYykY8h2E1L43e2pwyubQh91CngDp2ZaGdEQ9StRRKsN5jyT",
  "key18": "3RWrthFgQ8hWjzHEnZz6gpDF7Jd9GwYaX2MHvn8GijxCEJGzVkw2kMmkjLH9j83hZUVRja2jdXgXrs91Rddbe9FA",
  "key19": "3L4g6T9UsguvdiAG9RKQQR7yPsWkdbDYujersrWoQDn3W78FCNmveogF5q1gJrAhpxeFmmX2rWkrKZSBBELwkWLH",
  "key20": "4x1DvGmsH9tsWuDM2XfHDGtrgg7xFNSFmZdSAGrEBmMBsgCf5TsfwZ2rEsX7C7i52d58Vym1BoXMe4r19dnMfREw",
  "key21": "3h354jQJrTtXqsiABaxJuysEvPFu5Hchp8Tk2c5ddBG7nR8kx5KXUxh5DAqtj1VmzJveXNxMaLjgWhchFjYyMyv8",
  "key22": "3X5h7ymyJCEdcAkyZmjdg9KMRzZSwmVYsQ5GAF88yKAa1wjYGcoQdMMQjAAY1AuCPnJF6nSkRG476ctMesrgsRds",
  "key23": "eXkp1SZjVfKY2DktpNF3NaKNWxWAhE1YQX1GhM3m7vtTPeqMHTJ9qgAYPVUhivptxjUGSWt8rzkpg6q7FKPS4NP",
  "key24": "5WDa4jRXLiYemP4iv2y4zjJcHzbMg14VX2eqLbeXEcDjjWjDqeoPs41mnHDepgBBCGpk5n7uqBLKTG8FKaFNi8jh",
  "key25": "4w4UdrQRMmjcyTXDkQgtjMas81uR71UAuAT4Hv49Wq3SDqJtSbnmNDwWg2xFgv7Zt633mfRz3cEGDqgNnDrYzqH6",
  "key26": "4FekDAa2LQnURCFgnbraneoyDTVmoJNgPpHNHAUanG7VCStfxpkAxZxMLtLCgqNFbAVemUfHVjHtuZbYKNhntfxT",
  "key27": "5veuGwYYnE9acTBogJRfC7Lo54j6mogtHUyvt9Buf7qisBU8vnCVWGbgsftRMVot2Mhv7KfXTVUQ8d9VvhKQhwYF",
  "key28": "3mZBHotKh2kd5vsU4FVtMJR7X1zVk5WGq8tkFi8Y88dNvQegB9DKmpVtKCCTq5LZXUmo2NA92WtpEjygqZn3s6wh",
  "key29": "4x4H5kfemkb8RFp68hpCrnnhUxxh4qZk6ZxuKrq7qExUJ5AetNgTdJFe3FnvNXo5LdcyFcJvkDcojgCisQXKsCLm",
  "key30": "4kiS5BM8XjMVUixzXaE4WL6wRwUB2boZX4y4tZmxbiydybahte3j6mfYFTUj8XtP5ipJWEf3m1152TpJ9WuRMqoN",
  "key31": "pw54W6xiYDdWuZKQ3Yd2aHvj2zwzkzFarUSfnLaJpkeVEYs3d7ocn3iB9bXorhFjDP53qyeWyCzdBmAc36wycP9",
  "key32": "3URkd9MyvaZR2sNgRAnLaNGG2ZJ54gMqWu4bcA2WkuqRvvZsaqTXjd5xgWw9S7Lo2kJM7Fm8FM8MPXk4b1xRFvm1",
  "key33": "24GMaFuUpRy9oY5CB1SuuqsUkVJ4yg3bK2UT3GksLaPbVmPpg7ANw45FhEhxxvk2XeUzdAq5BJr2YA8y7S55PzZr",
  "key34": "4oUyYfQAd8HG988ZUfmBY6g4GCiUsHZ1dNUMHBPhE3mdbazrCQmFBdbAZoP8HYVAvAzEJpoD1TenrZPU5Rarv48D",
  "key35": "TKURVJuHww3HQuJC5TdsGJLT18SUesuzBUHR9qHRFe6iet1iLBES7kKS61m4NAdx3VwjbJoktzFzc9gkBhjwNxE",
  "key36": "4miecKCckeiGSMECXVDvKBbrnYrA6BTmtyrJGe96h7u8jP6xmxs2V7AJu2rMGg798giq2ttyE4LqQMtEmAonmgUh",
  "key37": "3qhfj5KK3ZaHPjGn1g23uQTjzwr4zkQ4iTTy5uqxoTsRtcrd6tw59BmTF1wnwHGeEAs8nJvrHNihiFVzEhEUturx",
  "key38": "CbpCBnBk639AsM4eeDyngFbamcrjAvzgQ2sn95E6V3sFwd5CX9crcf49SP99uRBpnQP1tqh6W4upRkeswYepzrJ",
  "key39": "33vd42rAkTEaQbLFKnmvKq7Kxnyggsi7YZSHqizEgm3MFKbWviMQk2o8jFKcKs1FH3d7kTdogUbQdYoBnFqZPp33",
  "key40": "3pbKDshJ684N7PLNGypScVtYUyyZdxQTk9BcfPpddWmVVfZeeptEtynosDcfbPg9ub4ANxF1kXnsE6XazEvQqYFr",
  "key41": "4aA6ufy2di9VryY7rKhWk9p1GUdJ1Bas62hYhXDa75pFHJobxS9UGt3MgwTtnpwMwFk1mJCiBX8feibYZCHLEoQ6",
  "key42": "5s8mYciqbzmJDnNE8G36hnuAeaB2cxNyQEg5AXYBNeHssiojq8QKUqYPFS6kLFwLLf3ndBAUCEhHq1L7Qfjg6X8C"
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
