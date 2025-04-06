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
    "4xytA2Xfvs1a3aHnvmbEZNAQEP8iuwtd7oFAErKey9ka9rpCD6AK58equ6eXK1Lx66JGgvNcnt6CB231QcXESWEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vhvrY8c9zZrvewyzPn3V7yBP5qjmepYpsWtGsA94wiPhUqSni1MZkuHz1w46G7RXkGHhVfiK7J9JTjAPxQ9T5Uj",
  "key1": "biSFkZgRtF6s7mSHFpLC5z3h3si7c883wDVJuuESJr4dHXdCcCevwHXJWisHrmwBPhT3ZeNCz5GGgiLFgcQG48E",
  "key2": "4b8nxLQofn9n4Y6BtBXc1hyHqhxsFgpT2eeERvP6DvpsM1ukNEDXWuZJD2ktdLkCUn3dTmknNFJ77uNboztqt8zs",
  "key3": "3edPbbHuYyeQAfPTrRcY7c3cbhR4uUTYyM7B4YJX1nbgpaHT5XdBQK1SMftVqume2kzchY7z8ainASMTRgTZpktz",
  "key4": "2pT6dQcA1ZZZzdmkmndeT2oUwAKvSLMpjiJSKXfSya4ymjCuuJX7XMwYHnXXWjXodafPGatvegNeFWVDAtVzgiqk",
  "key5": "3vEwiLcNUGNGUU3JxuBQZ2KjyPaYfLyM7fS7abwG21d4Yo8sMVo378mCiaeCzZpeAPhKSd3ze4vzeRQfsVdYgPUo",
  "key6": "4STt4TFeuLdeRGWWgkEneRmue2eGGTKtdnqNYN9LLUVpsLYeceyRjx3yYaNahRdJ82p5wRfodbEnHTYkSuuCfbN6",
  "key7": "2N8cDz4a4yAyFRbBScLphQWGDKmBQv8e7TZ79QMY8trVMUo6xpoXh7c599oH7uDGGeQnTuyfNKjRybQon22CskCY",
  "key8": "47CCSdzpxn12BAKH33jhky2cVom9977B2ytDzm7b2x16jQZcPQs2mFW3QMBrHXKe8558F3DVFDAH5CY1MBgHuSmk",
  "key9": "2sZSQDt569VLcGSwHYv45nvJtxvnt1hE1ss8w6xhoAeLRVwr84RYq2EfmQaicoawFvp3FR29sZZyiDJ899WSxbAH",
  "key10": "km2WupammxF4MZYjTeLU8K5LXMu2a2ZkcPECcqn83j8sfBt5DtRtAz2MHSGsC1FLSRit9CbvmAVX38rziJAaYue",
  "key11": "4MACrFwzEg2PACyRbQsguUUHVFrjDxDZAfTXyenJcfB4sVXWCgEvx3kF18z7RymP5UaGYKKRxmTUEgERruQ8LWkr",
  "key12": "2PmdXkAY46qX3Y2ar7ULmYADWK3tqMVy7gQU8DUV3RRuc3gLd2DzfeZhcZRWxJ3jaZJH4tjk3BNRNWfvRjMjpgC",
  "key13": "35R9oeJxJJ4o1dBzc9P66XrgonEYzCMpGRzwwVpZwGDftgJzqfZYNSnbSuvPZ4mKV6ogUhMM9WWGNAh75YiGAT12",
  "key14": "2r93Sbu42Km6u6Yd9Tqd8oXsES3CMooQc3YFVKgqorH2nyzf5eaQCmETomYQZ41GmEXP4rJweUSVWGEsBHoj5shN",
  "key15": "VKZNBHiQLn93jq8uSB4guaupkrx9g1fPkHUEbbAYuvkGRa7ZKNNfvG2RuEP1vUWqYdBFAx4X1kKdNUp3bp7xgKx",
  "key16": "5yL24JVUrd355rZRwiwFVMm3chFy94Wxf7hnRWG4o4zGpkWU2uGPH4ppd9EJG9EhjC7AHWK2MPDxDZGL8dj84kN9",
  "key17": "3jDP2UvLC1ALdvZFT3KcxnMKAVSp8vddxmKqtnFwLikT8TJJihj29nqxvVxFU42SDXFjpXd2Wjc14TwNEHGPZXR8",
  "key18": "4PjLAkMGNGbdzSHZzHxXApqysEF5TuGzys2rV8z8xLMdCbQecCvvWjnpmDvaegZHZYitvx1FBi9cDUq6Qb4QzcC9",
  "key19": "4DggdenD3baBLMedcDNb8RyoeYqGJNNnWh5ufEWaa9yHmrNniPfRe721mGBYaH66npttigRZZ3n4fwaRK9bBkoX2",
  "key20": "5Gaf1iW9jTRgxs2iJk4eW2EFNiRwHkfjXSiV4qHr2BkFJwUhNg5ba9pT9cYGvsuHWgmzf6wYWhjkW2fhPxwdkN9U",
  "key21": "3stdc4Tb6VKUttsYd6PeqK8oCzFXBfpXmfAC2ruKe8CmB4LYKJB1sKTSvxPDKqwf2RjZFjsVZFYZk6cvvJ4HPrp7",
  "key22": "61jNd2C6xLriFesqSnMxTeVupZiRGhC6au2RoBMhJKBbYgU9oTbiR1Uoctn76rAt9vJwSHkZo7UioMXAsD4u1rMz",
  "key23": "2sTSDZPH2BbgVm9pkE4aFheoeMwEC9kxoWVcr3wB2km61WEeJfwjEkTfkiiSK9a2MP8MU6QAu7LgofcYpXHHjUbi",
  "key24": "kp8HR2p6rMkH2NC3yyJFM5sGzuF9CKqFYTDg7Cb9rdnJgteFWULuRbRXcPF6nv4jjKcq2oU6wR3VLTD6kwpZoNi",
  "key25": "55Xp7wJgtEMn8KpojgmfZuXr8VSvLvvvk5or4Zcnj5BofzaqDAdX4xvc6Cg5taKFrXXaGEXCQ3h141M8q86i8xmv",
  "key26": "4qwBfMHTtp5ghzAkxCayH3yx8wUePwkixmd1mypDZRysMSFKW9garhf9iQEXvvGcWEDBznWt1B99boWCvbFm44L8",
  "key27": "2aFmSRXqP1ha2W2i8nvmDyUG4CHBuxT367eyAHpkLjQfF1STrmcaU9jrPC67AYPEYGe34RfYc9a5Xv2o4aGSc9sU",
  "key28": "2frYYu7ascMHNZnctWuBeRzazFm2geghcPE8axtyEun9ytZcYDKyeP43PWbRwsHfw5o5Wjnw56SB8cKGWhMdvfwr",
  "key29": "2D78ZyLXqbRv2x1brYUGnRo6QQhveryDsXNx2DiqsXbVL5DyXyAeRcaUF4HFE2WRrFU6fmvQ4YDm1vPiSawYEKgx",
  "key30": "4iqNh4m6DtzweeuvT87FQnTM5eGPqGmEtcgkg6dMqL7BraRCQmYk31bKJsiyy1fVUgYBX5cquAHoz6h3KATu7N1A",
  "key31": "3LTXiqGKMVEq98ikq2wckWV5DVWETCQck3MUj7csKzQPahCAXpGWKocJ8wyAi7Qxu15ksu3sJPfnU62UyZEnNJSk",
  "key32": "36KS5eRhEnCUXhJK7GpcdukMjjqwDEsVqv8nJjRoP99QNvfffP4pJyjTJfzrReZmcNN7UMhRaU6AUumzNM3kaJ3E",
  "key33": "7hmHyYTosPShSZm5exPMCo2vZLR1dKrrHoCBXrJTfe56vMQX35FkmnUfVra9pGmXpGYvVVbGUkcxYMuWcP6XMgb",
  "key34": "5Fm4zMvYJRcfdMk2Rd5B6X2WA7BcPpMe7LJczhKYC6KxTaRHkFZo985NDcpG2RTsnExcTANAewfEZVuVu4QaLBEM",
  "key35": "NiViQA8LQnre1SWEBMhRbhF8bNB86utv5DC3QaaLFAbCVmCqxw2ivnPpEhKdQYYNdoakZdevaLtydhfcJVGmK1p",
  "key36": "4HuUVZRZPkFcZEg3fWPVdAsyvJdn6ATM3tKockLVEuaPx1AA2uHfw8F3jrWK4zFLgvXy74g16XsrAkGQVZ5y9MCf",
  "key37": "5YcqAPWqkfeYm4sJDjDjpmMsdRJDmDHB5TQRDmcruQV8ZYPKDPcd3rhpQVgFBWfMevGXah7dLnstVK3gd8Vh62UB",
  "key38": "5ekEVJUfP5Tc8tSScFBD1U1ReQK7YFEVvMUNCwV9wHN9CBJEYNEvgRvoKiePpAMxmrRKPzWgZzucLcEuAcWmGMFx"
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
