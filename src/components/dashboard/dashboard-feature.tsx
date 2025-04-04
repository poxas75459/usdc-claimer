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
    "59LaGFXmxH8jyfoqbf7RGo9YSGCKCCDvSypUTuJTEeLrjHSJQAZrVPAAP3ZuUz35jm79qpMwx8vXo4JSHzK8ReqN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YTkf14FBftuAYRGS9sa3rDcGvcUhga3g95noTpy4NAifGLgFEuAy6ixNTo53i2xDLZqQRfL8qEGh7Srhpw6k65z",
  "key1": "3odhY8PNXHmLgU7EGzxTBX3usQ6DNf13mcLDbMuk8seJHi8zTQozh7fkLG4KRsBfazc1DroK83sHvqCQYcW94k3m",
  "key2": "4WjeiPbq8jtoAg9u1cuDSh8kPL4yoTMv3LrHaMePE24Qpx2RbKjzWYv6gqRqoncCxGtd3Xr9dckrsqBU7Y9gGTSy",
  "key3": "4a2Vuz1drimMze7ggP9w2ARWU2wJprm73HhRCABwdJs6QNn8Db5L7runp69kusyYUzjT9Z5VBPxNAUcqhzSMiuij",
  "key4": "3rrnxNw2beemdZcdjV3H8i99b6J3C5aReP4sj5uh1tdDTf2xuS17jZkebi3PNVZqxNqVCLqf7nGHoPKRrfzqdLsZ",
  "key5": "346oBjsyCNFgB421hcszPL4Jj6eZwmadPp7A1eTHSvK699YaJmwa2ii76drKSNNuYQgDPCz22BtVyTi5MD9MF7Ya",
  "key6": "4epmpEE4kjMxJzrvmL2eTi67VWo21mVTXsnJNC3K4dzevPfLFoJRuMyAgVGBBkYMQRKfrSowwFzKp6BpHSAa7ifk",
  "key7": "4xQbADKCCmHJ1i7DrN8UcnmUMvKYhStbfKV5prBk59D3ToF1QjzAjK7PuiYbe8idqTiJWtwtzimcHw5aRadrXKsF",
  "key8": "4Sprdz3WZUXuCCBjVVpy11NRKCDE749Uyo9VNpJkV2XDGRQmwDQECFsPxh9QjpHThARoeKVMS2ZVAyRPA6F7XkxT",
  "key9": "pttgzfQJbAvLb4cM6dvqMcspLh6t2GA3VRpKB2DUMJjd3PEUv1BBGmHvuY6wGQ1kqCx86pYvouc6ksVSPkZrdW7",
  "key10": "2CTCGkAzdyR9yuDJaqHbrdjy2VQEGfcWWnBbtp13ztSq9F1n9mhnThSAHuV4Z4jAbS2ZMsk3h8X2kVcph2bH2cMe",
  "key11": "rk7roiFznQNBrndUEAWHf3MNrivSt1EjTPV8C7goRhKgEq7jw1ikqwNLym7Jm78xxgF8rVVBNDrAGnms7WPnwgo",
  "key12": "3P1onjVyXXN6FhdripcNDyWjngpMhPJVpKnhJcN6womtfHxhGkSgAJ11o6v64v8Lp8WDd4sJz7XT5YWbXhU8wYb2",
  "key13": "4ZoXkoEj1SazUe6FfzvBdB6BCLMfoTbaJL34Tcrg2NQan96QpYZrmLdbDA3v627bejZn3zFzfFVd5cLHfGibjRAd",
  "key14": "2c78L75QxmdrE698JnuUvKSKwL8oAWAjPez7pVZzk11L1KVhVKqViQhr69ZD8K3DWXhNRbp1syxXVWppZcUotVjo",
  "key15": "4yY3L5HLL7aphLZBpkVWAPqxdPswDsWYH8fKaK3jBWnUqTMdZ83yzu4Sh6VjbQYaU8dGgDnkBAzaJ2HgNWihngQ7",
  "key16": "4BYQUHFygvwRYkGjFoveRcD7FQ8MXFquXUcE87DuxqFCEkLgNdqNJfErwPwRyMR5r2XJ5tXmpjAV1wnQyAMpw4h3",
  "key17": "v6iWNs8po5niaArKKaZhnMFdjA9Q7DwBw3goJ7oJQsH4nhfMnfQZz7ea5skPQE7rkpCC5grXTtW5tdsz9nSx6vT",
  "key18": "61L2Rt5KzDQDyn8JgWvmHKer4LpRAGmAhShPWShUNQDUWVnXQn5LNhS78ugyXp5gZqVuvhHc1R3eJBzhvwZ91jx7",
  "key19": "EU92QicKxuGDVNPzHD8ah6YwrpbxkELv3XbJhKGuZiUE1L7f7LDbtEezmXaz4TE1xor5sLat68ubNHEcNip8iHc",
  "key20": "5qxPy75rgjgG2nGWJHdAnPWeNN3furBrsqTpfVjD1Vk5Gr6TXTUPAFZkwdrDW7hv293jCsnLerYY4Ao5avh7HXo6",
  "key21": "5rpmNpeG5NGbJnQeghnYofsWudoKuAJJJsbXnRANNupQukUgqAr28e8fVeAAZbSSP4JYoXK2E2WbGCDBTzoFUbfm",
  "key22": "4cECpuYAUTK7gAV3oPbPq7AeRYtDYk4T79hpvoKBuYmkmHEowAfNiJNTutiuVSPwgWqcg2q8voDVHG42xsJFFrLD",
  "key23": "2kTiXYAYLBs4Ch4myar71MfaRyi9eY6RpyoLdRK6YjHwJtxH8kANiXUGkojzcLCxK8FawDVNuwQvjEHkrkjH4Y1v",
  "key24": "2AqHpFNVqLkDjD59zrrTNMgf525DXuL979HujM6migdiJ5762Dv9xKVcRnY23Hk14x6Lw557XBHSv7R1efqX1nAH",
  "key25": "3wFDqcymmnmeAfg9XzJHqWBcUdmEJf29BpKnqFnRD8Y7VM39b2DHgSAky2QC1NAFnULDHGTVSoxeJBXLub4Fauiz",
  "key26": "5br6LszmjoyJ7BEWhNCnY7FL8R4BjyBq2CrYur1tNueHXMjsctzRdt2NZCvfdPSS2qSnckw3NgaVHL1mJH79vwA3",
  "key27": "38w9uwZyUaWZc4yyko14VSigpHdz2Zyh28aFsZoDGr451jcTgR78xysCcAhXjXtypFi8zrsz564AFcyUZiKnx1KH",
  "key28": "3xmBtXwwscY42ZU7kKSJGVmNs8ig9eB7YLYJhDgf9u3e9tEkEhG3PZsg8BVYcrTpm5VJB7M9YrrrhWFhHDPgLkCS",
  "key29": "5zRP2pg33H7qssAhKQEZ5QsmupkXo2N23y7ukC5sunwnyYapLe6999jHi4aZ7xsyq93j3y5GTwP8vDV4cyJLkAtF",
  "key30": "3SemSDeUubQzcj98jhn33H3U64nGFe4cVFQddqvh4aEKfN9EEcVUVyc3ue5sVbELAQbF4gZpnUHwvyx8qfj7Zzo6",
  "key31": "3tux2MPixtcy8rNcFuiqFRj1E4H1vst88SiKTkYxM2n4smFef3RPffEQd8nkHKC5hdW8LieNe8461oZPFejYv1So",
  "key32": "4A9sKnCBN4yy93eFLQBhC3UbCYqEiUszh7244sU8XxLQdv6jMXDTwYU9FJxHFmA8YXSmvc5fatTxJHyJXMP7L32d"
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
