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
    "5cECFTjVVnejj1krnXUVVobgpPKyH7x473Lst9GSAb3Sc1EKgx93CuXcreQxd8uMQ53DLCYXqdE3D6Vq1seURap9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9Jhg7TPVjXrSPWjXSyuMcgWQrxfa5k2fF1rNCYrk9fe48AEpP2DAdc2nnoitMB3JTirp4GsNkSQu7e42Nk4HXaN",
  "key1": "5RyQhMTCZFCcumLos77MXxdYbrjgJaKYDFDdZN6Cm9ZzGUSmCNignF2mqGiTyG7HeGTHpPhjmqpzQigSPhrCSrX",
  "key2": "2VCBDaqQyVh2Lxb8GpKdsp45LnMAESyZDPYZLEANZtKcb7U2xXKW8s48ho5XH28knSY5Yv2Qb4G8hQcNMjvTWZCM",
  "key3": "364MvoTxHGkBv1aUUogXAGDGnQm356ctEgqvmUeHuxixUuULLTXjDnUUA5gLLLuCKcYJS4e2nRTJ7WkqJraPZmMF",
  "key4": "43EAh2A3hB86GtDPMTFKLaLLdsvp6vvYyhC3Ukzgtg7j4LtemCDN9aKF896tGb8QP4tTRj4aZ7h4vBPEvDSDG1SA",
  "key5": "3MwkBpweHC1pWW2xSxLrFqvAp4K2YTS7fWti9R8uYWd1Sz6J42dW4VDFkdR2rZESpdiVdJw3V8k5CFAti85BcnyC",
  "key6": "5CUjJNbYEBeKkHXhjoixXAFpN6Z4AHV89NHZVecuVZpaixfbD5aYSQWhXNwwXZHv6Z2D3g9rmsYfnP3eejuesfqY",
  "key7": "5Sdagv64uoRijfeXQsaDdZEBaxqFtFspcC1RAey6eYtbz3cnfg65o3AGEVSsdK4S5P6MBZnGg7uhL1gHn1XGfXF6",
  "key8": "4s6g52MRfCaTewKNw3dZ9oDgh1VBiESVxjjaA22PKMRrujwpBxoayAf3ovM2DKAi4ihCrb2KXy4C7wFpRjt9KE5P",
  "key9": "48MNkqq8MpvzZY9WpS7TLYjcWpZknLYztJKQJirEPbcJR1JUgzTsE1D7LcGZBpcGGg3YbzC1oEzgqCiCLw9j6PPg",
  "key10": "4qQEUYMmDo8Zmuj7syZXDED618Rj4c37VLWebF8fVGCUF2BzttsDqTChRrXjRcfsUwYb5Ba5nm7tEXkzh3WqdEW9",
  "key11": "v1LvY1Ruh1kWghdHAj4mJprUKJEJc9Rn2QjEGXUEVSXagJ96k7Xq5dv1L1APXbfprn5r56Wu9jecHkwfq9Bqct3",
  "key12": "5TCjpGGhxX9wj3sR1yduSnbHMPJsezcagR74ns6NyTdZe898pd2LDSf67qRHCrYC49UpLJ3EuSJjxJwuyzhd1hTK",
  "key13": "3z7PGwCJx2sPJSAWZAsSb7kPrfC5zqV3rvNhZJKiyy2Pg4NDEXAuvNyHowFa2VYSg674ZfVb1EAdPtYa6vpu3iDr",
  "key14": "3T4WZMXkgRCLtbkwqzJxbuS19LXYAZGF7ceTMvwsocM5axbeWzcAUobK5jFb5CUoX9nieWW2VH5tmaHi3UVxUmvU",
  "key15": "2Z2WSRWuG7Q4YJpVZ6Nq6VLbUqPfcKRqDZhVBnRneTx4fZkkzHUcXE8kHUhPUSUndtRdVxfq3xQAeeuzqMZQzdkt",
  "key16": "vYygPE3WBuqkhjrNZbE5Ns4ssEoZmsoWLnVPe4FhxSte8p8Wo3EgpgXtGRwcgrTe5Lu2FioV4C5GzKSV8sFyKfa",
  "key17": "2CYtgGtz7b8EwdGHCVkd47BxZ8HG5GEkQi1s2h4WTWbf7wMaeL7LFVktcubePb61QeLegCb82XaqUFpAR41Nf53Y",
  "key18": "4o2YDxpq6gauu9zhPDAgLQ1w9Q314rCHxNg77h45rXfoyi3XP9fLrCJtyLSX3d3QoMxcsb1Y6BymiafhgXn4o3nu",
  "key19": "aMpV8u1Q4ykmi6CDTf6cVm8rWczUqnFhQWKTSAHXfc9zSWRYspBjUvVz6XfT8fsQnRD4K1FWTS8r2HB2DmDipQW",
  "key20": "pSEtUKYajt7ZTqEYCkTVvv1NhibDsfn6AN2Sb7EXuQAFdbRE48297n1MCoaELEPvz915MwQ7nHkU2oS4wAPM6YW",
  "key21": "3XkdLUz2RkFpeARmGXSygWvhY3oAFb4tZy56ttJmAcu9Rwn35iracpkPCfNTbApzbCNXHPMhFtm9sJee3bF2fvvY",
  "key22": "27Ew7d2apmGoAQoBaQN9U2xm6Bh8jpeRpv1qStNdSgTau5jR34ayvVvDA8ntcQ9m33Ma9dTM6gU6SJeHrcrysuwa",
  "key23": "4QyLYGVUPLb8jCRJu8dVpGeBP2RYVNy14VxJ8PiUgsC7orJoBgwwbd6uAk2cU8eEcgsCquxky8YTQ5iYSvuMLtBY",
  "key24": "2LhZSDndN8qNZ9x1qqXQcFQJvAstubbrMfXMGXqPEksHwx6vAXUhdMwPVjXGzcR7mob8UN5Cv5yvMwLk7ssc58PJ",
  "key25": "4LAYvypZiKYNgvPENWUrsQ8bUqb4sVGCau8fMXf8qbBNhKoigatgh8CDiLw825dcjUXt1ta7MNdNEwSdvfVL9LaT",
  "key26": "4dxn88iBKvybfewL58RbbxCrn3FbsZvzpyWa9RVFokf43o6Xy4TJ3SDiuH2zVQDGpUy9ec7EqkWxvXPhNit1nJQX",
  "key27": "62bqC3AG8TkDd4zpKDKnbHCfkx93SqV2xWxBvpLj48d2KSJMf6Z41jpHk7h8zNhKNkMcdDFR6tSt6vA1H3fYPe3P",
  "key28": "4P9jem5NsyZH84mr5YN45HpfpMVZas33Rwb3NzzBJ72wzXHk4miT7bue6WH4oT89q6iZdyisuqchnfQPUCdbe2h",
  "key29": "55LUePPsGbRxTBBmgJHFY6ECumswBVL3CgXNrnDb4eyqLwQyH4Sxy98pe6Ajuvnyq2F5CwhZQV5L1Bnb5X8mfqP8",
  "key30": "51Qa5UH8wGjK8knefqXSpGBM8nGpQAPCGVbTQhazgHnHz96esFoaKT8JpALRm65Pcm7NzNNe1a1ExYXTSvKgpyQS",
  "key31": "2Tgnb5c1xkkoxzLeQBTxCzBZFjaf2xaPt934ZqRc92YM2FRx6AQQHG5xfeWLMK9LpBHDkLsfMd4w7jQo3A2tgT1w",
  "key32": "2VsEuuyXX8LMcpDGGGPmTvgJHCQRRwsLt91skyBm7ApiXigFBfgF86MSySRjfabWEQxGQ1zfZR4y5RhHYpP7K6LH",
  "key33": "2BaPn5DuckWfQmBN3Lw1HbqNdJo65iYtAqMjRxHefGW1XDAo4GyNv88gTGGxQw9yQcFs2tK8X5PekV33Nj2myMe4",
  "key34": "WCjtXQdXb4SjECCgjC4YMXmTi3Lp66UWbqgVnW3BLxVWruGiqxH11RibvVrG1PVRmMJcXq8MVHgoeunHo7tYhi6",
  "key35": "4wfRqww5TRDNRa2g1gH92HnzdwuaRax4hpZ1N971EH3mh361xUQNXvznb5Y5DY8GUj6t7Z3AGfSHnAyqPmYS5k2P",
  "key36": "2hqHzmkj1CS3GHuTditc62JWjNdokrbFkwX5nnW9Dz7a8xRnWfuSVfygBVeDzDyyHt1Je2UgAMad3gVjn74qUGxz",
  "key37": "22Sumjp8558vzAtsqwe3RFBNX1nrtdzjviX3W3xaNUhYrAYgU7yb2n9w37kfNix4N5utKKK6L3Lg6tDQBDzv48WA"
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
