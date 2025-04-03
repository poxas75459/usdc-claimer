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
    "51r4hXqjh2Sy2DS9pm92nyL5Nk4SEs54NciwCqBcytfofTsC4ifGnqWdd1NWpg9A1Tun2WmibHaH7tUtJ8VN8Mcx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gLxsvz51mRRGcgcdDAdnkquCCiFqQTkdA8g1oqJcTHiUBHodvaV3c3LDxQuTt31VHLLBqBMYcKNQsjAmqncHTnG",
  "key1": "2daWjraNo4scRrs4v4efdFKr2FuJa51tV98jLaZwC7gBPsg6ygayt1UfGV7UMiK1FUyKRHwhCo6a9H331wcRtFJL",
  "key2": "3BAFwjCw8TJBC53mzbvHxr4VvHQxW1ALQH5WGehpunnE6Pkz7CFC8Wmqh35PSUmGvSuYVPEvqYkKr2qYFEhERBUj",
  "key3": "xK8kZAxyWJb8Qf1KktwZ9WZGAmXrjBvyZ635feS9hxuW78hiMaReGor88XzgdkjqKPqs31tXMpDG8PiVSTcyEfq",
  "key4": "26aomf5K3N6dDXZDe9srJWqutEaZ2ydWqfhMmmFXFiL7kBuGZ2jDc1U9PcunduqydnD3pbPGxFdFGTmLyUS2S9zW",
  "key5": "44bhcFBcU4SXMQJv6bQTdPRDH3jPAu4KQiE2TBe9hehvXJ7TNw13dbeEKLbnM5mMgNWVuNSmqvYHrVvpgLaXJUsZ",
  "key6": "5F7hZZuE7YZHQxYwTBtLLrpF41UicxZGvtH39juPkAZtRTS91LD6vRTzG9cx8ERAxopxW2eEEoeWw7v9GERsusNH",
  "key7": "qwXoDP6LkjTUzViwNsKqwfAprXefYfKpuANnf4uxpj5oZjR64rjbCBZrtRruum1D7nREGSAxcoFqQczPojx8mZN",
  "key8": "56YpwamjLrMAsUaDjTizp11BZFxNHR2eHQT1qefwrUZ6xktLhioa2oSpeK6cNoDmveau7xdqwCK4pgJZcksCs7ay",
  "key9": "3fEBMTRRKQkszq7ToEEvBniDtsVhYPyN7m3U2LhNECMuXdL9yi6LdSSD8CDXPNSGyG6Nk9w6Lt3ukJY56aXv1SBg",
  "key10": "grELeByktQLR3Z73jhv19k272AJtmh9pE3FT5yKrvCDuYwZaD3HtxDbnZY3ZQnCHLBNsuaZvDMEeh6YdKFuH8da",
  "key11": "3KdQPRpVLjNyV4isg97pVZEy5HRCtYMbYEgErNi8PcDMbFtqT7JQm4rQtEkAB9xHm3DtHGi3h9qYXcqixRm2DoQk",
  "key12": "44vSwT63Dgf25M9fT9qZv6qTCzdrUB74D5ApyEMYVqFWdv3ogD32iN3DLt2nho1E5DeNAG5C6VJbCyFojxrJuHNn",
  "key13": "4YuFUX61zHYk84y8YCyKSwtVQ7qCGsS1os9cVj82kiRpyVSWTyShTiYYohY8b3tXYUUbep4z8bLjrPgLCshaVMkh",
  "key14": "3cS213FvHtAVRGegnEgpqLyfzFzunPbzae8HPoMTuySUZuVaErKsCzFhPMxyxGcT33da3FxcoaMNr4bZzWSrKXtz",
  "key15": "2iVrmTtqwBmHSfTcAuaYbuVozkzWVKmxpnNNSqCxUhTW6gSjziqhbWxAcbRkCptMWSEuaE55UqWJZpKkZDeQdscL",
  "key16": "2GAhvrrqdKWiH4vkcgLgWqaAYNmM8NpxULXmG26ZyQKKwaaZLmaj3ZzzA5G9tymvdaFNjp1zE4o3BDLPuZqL5izR",
  "key17": "3FbHQyjCkc9xRTEvvn1xP3YUnYiCf1iuTcPKHKLUz3Qgn9UhyMDHWbNeXKBJxnLzSugu8C7mjaNozDMtMxGpez4d",
  "key18": "4i2mJtiB1jok9nWF42GbpdBgDroSYCsj7SZ57ZEYtGAf2hD1PLW92STNM7nzSmCy9MJjdcHZtDpUMKSCBviQANKV",
  "key19": "2sj3fbfwK4QwqYHu6xUWAbbeipDhz7Uqijbc7nf4Ws27wtB9m3ZUicNtSKxQBa2gXdFYpEcNYs2XEEHhWhP774HC",
  "key20": "3Nz17GWRcm8BwdB3qk3qN7Au1zAmBqHVqxr7q3ZKxbkXoDAPWqtXNrtUN78n1ZudSfiVpEW6kNKDn6kggibF71Fw",
  "key21": "21D3kb3U2L2UTRPPN4enNhzMjLuSXY5ocVYayM5jfE84zDY1PwYzPAMtJJvZGwuzLaRZeStNe56UD1tdYUT8GdZQ",
  "key22": "tbN3NUrsNzd9o387R5Z1kHGKcFJ1KpSApyZH3kGqiMMYoF29k5JioDSpQXXLXernWGvxj26iCcQN2Qav5EFH66B",
  "key23": "qDkHRssNmjpEmF1QvAf5qUEHjfxgLP7bQRKWBDSZPQGrarGKoJsSLtuL4HV9vekPJeKSyFQ7DZtFm5dxNiRNtdH",
  "key24": "36usLLqsikthnzvX8jeijEhihPddnaQJUuR1CLQjwKo4DEEKJD13DkaJ8QeLidLAwkQi18UjSBUr85WvcdKg7UbY",
  "key25": "3xXKig7BS2AwihUMCyXEK8w4Bt11oAzq7LEcn7JggNLppaZN7KFMqEiYpHrezRikFrLu4tnG8HpsiyvzopDokgp7",
  "key26": "2Bcwk6Hqo6XyB4US3pYVepMyzheZcFE1ZDmBNGGuznuq4uNQuJRv1sxtJPS8S5Tzths71YZWbLGiFZzgoZX9Rr9d",
  "key27": "HM2fsFNXVmuXQadknK9sTdYAY9n84v3PviXL9sWXaqksN8NBzAp5sVtmXMRCkYvGDwGkNzEBYhTkmVhi358hh83",
  "key28": "WyroGX91D11scMG65CEpGsjdvnLQksxDmNCwQUhRJ7Jm29NxPov996gUTEtvaNVKqfCE1pP1pwtSjYfqLDXaRQi",
  "key29": "3vPofGKTnanNuWMbMHitKxYiBGcAcd3QpUsgR9VGnjr37EDUzSoZArTkxxEnnbpkr79CUvmfSdDD8jqvUX4WkZVF",
  "key30": "5erPuKnmqcNfzj18taupbP3RyP1osYY9EdF14iuBNhLuFu5Df91wt3HpYWU8QT8EhuiweNrjPGixWuLT1x2ZMk3j",
  "key31": "Uu8GrvHrWqstHq4eKyMDGjE12pQc4dyy6cvJRevLiNSpmqbLaduFyNYXw7nBuJ2PhkqQ8rb71dG8EjzUVDZ6iPt",
  "key32": "5MLHv6mtibpAkuXj31xEEUrzgHnBPBoJcp5qruXEzx1DqvLbWsN31HPggtmihYd6f5ZbZrXUAbBkKcuLm8wjH1Bu",
  "key33": "24sDhEk7e9xt2ZQ2wBwpF6jqMW5Qu9kKVXVggW3d8TMkaD8tAMw5iByi3sAEp981gEqNGD1G1p1uRW8qL2wxA8N5",
  "key34": "3642AToxA7JkvsQMBbs2jtg6AqbYh3GoyRoihy96Z6UwVmTkghTUb7keCYppPwgwz9uysXLDrwp9avEGVd3SfDjA",
  "key35": "66aJmNy8WG1w1DRpJ2VWTcvGvbMBFA2jeEGmG3V8W1FJvSydeiMRfLZJWvU1xmFQZmWWHfnsZKbdb9H6QtaQSj3w",
  "key36": "3X1yG9NHB7d1zxXFzYoCN6VifHiYYaNjP8LaZXQtSwhwuwskQHKiMcDTuGxbezbBSjJGmHx5Avd99TXexqigRbGg",
  "key37": "2DmbddcWfanA6Mv2vwgA8XRu7vppegXBki6qbnbSUUZdWsQ4dWavjRDGhXJ6FQqWtAcU2k8jXo5bnk1ERR6x6N8G",
  "key38": "2jV8SiZuboTSKFkRpN82gUyxhT7m5HChes2hxY5SdkQyxpEWfHx9ALVFHdamcDPXHZJSEJXS47R7QVJ4mTWsJfKf",
  "key39": "3fg3SRhvHtiYMkjKHRcAKaBNkaXVhVrV98dwuYToz6NEehn6PZny6AfLt7ApHJ4PJ74tfeR8Lz5cZuSYGeF4hDg9"
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
