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
    "4vw2BbudG4vCd5aZkofWPU3DnE2TvK2yrsYADc68EVLV4H86epN9Sn7UkjQDbC1oinB8h6gt8UESB9X6g11EFBw3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iQV76ho4SQB2J5dKyMQ2LNNyG6Vvp4M2VxtSDMh7AzYHiFeKS5xGMEVoTTwt5DRoxdArDttEHFitzHp5jVTdmb1",
  "key1": "67Ez9PmGeQi9RLtR5hr43LSVtJVYV9T32t6FAQThWudzEZ9PTHBRybhs5xR6Jy6owBHrSnBomkrqWiierRop9CHY",
  "key2": "2oNTxVUa6293c5Uhkx3x5VCgHeuxYZfZmE2YkxY2iLUfAz8QAsWk8VFwB63VR2R8naTa73MiYJqQivchsdeDzF1y",
  "key3": "2HBYcBPryhowsHr3Kr7KmzJEnmhpHCVZpN69grXfFHbFhMY1mhr6brggrZqVzDvUo2uoM8VfXTAQqYfpsqabwDL4",
  "key4": "63srH1iWgPfwbAw9bSqU2wLxUpeGJq1u3XjNQtG9Kvhzo4Zgz7X4ZmhXggqY312z7D5NRvWXyzh6UMDMUWobzwEa",
  "key5": "ToWeSxD7VH2C5pHxTvyQy5RvfvAb76XKWTPqBRXX5WhkpPGk8uxWYVhRUUUNJkuTqmzq99LT1p9cvj2oyQYBkz7",
  "key6": "4DiBfV2MfTVZnKaVyzi99nDUpvgB2dKdxZa1LBLQpKejFQzrR7fRATxaoSkBnaEboaagzavoi4zRuaQnwhc9GtHS",
  "key7": "4RUs1ZH1h779zmSXTEYQfSVJJRjd82F5aRw3ESu98FYkngccEa31t23hUtvx5aAA3qVjyZBDEAaQaGN6hj7sk3YX",
  "key8": "3NHizmnsErDSunnznYa1KG1xFFz8HF8o2K9z723pS8zu7rSzArmu8ZFMoE14aEpWeDRc9JepbQ6vYFRJT9rsbu9g",
  "key9": "39goAF4GKGDhFAH38jyjrzSFYPEib6bVZcP16EwNDhtp5xycGD6MXvWj2Uwmm56AtLFWQEtimZfrM7pntnfrQJF2",
  "key10": "3dj9HDX2KTLoAjFMjKVwAjfgUhfByohTs6ddzSZhUR3PA6emTbsDPGCjsPQTKKUEV1aPD8hF3v8Gz69F7VRj9b6T",
  "key11": "2DkKtxJowSL3f7LPNekti6H4usbrTbBsm5qZgBAgGW3qWCbSaZ1e3Nnjv9onxgE2pMFyzVdx6VC1xvncADcY1Urb",
  "key12": "3ZMYrFrc1ifEweyHcBh1hUNDwgUT367MCjPfsB9oHNWQRs9o3nVvVFd1j2uTZ2G5qtP3ppTcDJuBXEWVdzd6xgZr",
  "key13": "4Xnm5xhz3xqvNnznALs1sb6QABraGLgQNdL9R6p3A13Kbjhj81JyoXuTK9WhbSU8wpvs4hXjzxy3iuup9jZVrfzZ",
  "key14": "Gm9xUbvtDF6m4ekJnakh4xw6xTzAxpjXMF2APC85vNyihar3mM1zyNrR699w2u735CX4KGXUogFrE3u9omhP7Mn",
  "key15": "3NPLLkcCMx8QWMWumf8VSKXPNfGXbRuXnt8Zv2UwDLDFFnCN6cyS8wiQK91nYTbLpnpJCcLzDoK6H9vcbM6fpD24",
  "key16": "3rovW9bZ36RmwoW3mFYcBj2N3bTFL6ipfsxHXQBYjUP5H1JK847yqqKLzbNFc8kYXETLtC17r8DwNtYCy7VpYL16",
  "key17": "UkzExHNwdhxmjrT9fE5tMwtj8Eud1YCUH6Yhg9vY58ymrQu2uwBhbFozfgxRxod2GEfA7LsMAE8zM4GR5xFt6Nh",
  "key18": "5UjvX4d4H8g93CyHkjYSvZSDxjTP9qNokqzioeRD5FWtGYJA3dEjRW6urvQRy8HFw34HpbpSxtNoejDtMPPuVvwy",
  "key19": "B6p2gSt7wmQhhi8aqGTd2jJr3vy1uRaQMJNZKHVnZkz36BNaymJ5tPq3EYtYaDfBdYzPjJFCudPJTzogu7DQ4Qe",
  "key20": "3bu8szMikaE4pxSWB1T6H2eTNmJsdLF26WruhXC4wyN1itJnTVmryuKkCNJpZcrJHZ7oWZjsLkumbVY2ZZM72Zwv",
  "key21": "22YiQTzkgyUCYWZqSZ8teL6ABain8fwSZzxknDDBPJowgJnFhmZCc9Ad47RnyDsWtiAEJpuVzDfhK18KHpBmkmUu",
  "key22": "31R9TWPR7qKr53PyFahBdFKDxEWsFY6fVguuYLZDutf1AgiRttVuusmXnXhk4oMUTFWfs5sTAjiR7UVapEDL9PDr",
  "key23": "2Ri2UAdpiYoVfvqXWDbkWXdhd8CXYQ4pK7NWTuYnfWoUBnXqu4wnG9LV4rSmNo1QkExaMmcXkXnf6tZTyxYiAzhm",
  "key24": "4UVj6fS2aB42PHajbjEhCgEUaj7CkX4ie6r6qNfwL16MwUTMn5TuKMsBrqnkftbfs1g67E9KNviQHVZq4pVG6RjJ",
  "key25": "CWhAjXhMycDeKPRowpJpMCE5eioVoGzuAX5pp9332uZdGL7pV4ZPvTiyLcDmQKDbPti2zsJ87AmCmbsdamgcLBT",
  "key26": "mRn98m7qbBu7zuz96vJSY98UX7YBEqmZcxQyWxPdX4muiyys7S7ie7QXY23Uo9UyZM9HU5t77WtvrDnopginigG",
  "key27": "D2kfVuktTrRkLYGr1vV18ErQoFLGc9yakNnx9qwDRkKTD47tQxqQ4s1t7FSxoan31MXsUnxjMZSM3v7zjVHa7uR",
  "key28": "QcPuJK51KKe49u2rjSeMEwY9AHpG82d3GZVjqfqj6qybW33bar2SqRhhNeKi3YS9vcvPEAZiaV9ingDhekJmRfd",
  "key29": "3i5wdUX7hz4WYogpZ9E6ZT5z7McL4G2J6UhiMgMZrKGcfu78kbgj5cgUeumA4xYz3KkaWYNBN9d44LDEerc7p879",
  "key30": "pAXpJySQ8Tv8FnYT1wvCrE2YW9eAuE5PxZkR548dA9g1mKp9yhvyacjitdUGtuGr2yDpVziR71bZUavu1ScvbES",
  "key31": "4LqGv7n9nCh5B3jrTKWhsqHyf69jPnZNLtuPx1ZBRu3ZNhzwwXbz84wgiMezQRGa79pTcUGCixmJ2GGjjHx3fVxU",
  "key32": "2VQfkLKLCSn3GNuHuvJP8k7GF7XipFMrQuhLbv1Vf51nfmyWQo54ydtRHHKTbj69KCWUmAeqbvhRq3BXHLEVSCDT",
  "key33": "2cVsWEMW2or2HtReKAt3NVmvHF9TUVVxfRVYYuHKzkSGjBfuNMvTd2SBmxNakW7TJe3cFcA7bvf1sHu6kacYtdPf",
  "key34": "4tsfKpNsMAxKXehoWYXZK67AXxDJG4M6kHyB8Z6MT36X1p3SsHm2pZ4SXxsDpDbwiraHEepZiBpJRCsCK3xyLnHn"
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
