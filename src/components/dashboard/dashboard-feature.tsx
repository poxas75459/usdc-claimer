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
    "3NNfiqeg5azCWoSNLerLpYdr28MMF8DtrWggDqwPvrgwDueKtvdm4pLLnZrgxgWnYPLcJrdECExRraVDu58SMoRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rNTEooYLM6DoMycgmsEii7YCgSSLUYw5AUG5xLH65AZH2Lab14dsDhw4WXrtvfFnZGUBMeqcv41DsrHsRnW3W3j",
  "key1": "TjCYNdTSxE2hxvKFzpxCEcAy66mr2RPcn7b9ywVYyUfENkGbDKtDBCNWQwZGeEkQfkX8fjKnAjMJYUoqFo2ojmq",
  "key2": "2YrHgnGYJybmtR6PAJL4LRxyyxABBaebaYP2HxumTYu5VCThp2xLKWDLBCNtjdJZyM7JLeWDA7Dw29Lk5xXSfozr",
  "key3": "ZkiehUCAnFrLJ2gBmRfoivgzoftu2nR7SqDXZTvqUdf4xdwjWTRTzSH3ZxAH4sYDCYypZJUZNkex4K3JLtoazqe",
  "key4": "59r5fHTTZgs1YjSmHebFUZt3yyZDWceuuuFttEyEMo6uf3SvXQrdMeqPT3EPyAhTWKznrpw7epDfy3b5JX81gFzL",
  "key5": "3bxCJFWqJ3xmBrJCYvda2qVrMECnYGAWsBvCnJtBL2BRhgi9LHvhPRw6LyCBLuavEa1w9zBSeaCiYXtQAXTqzSKa",
  "key6": "4iVRtX7zhzMXBCx87M6HzcokBLPYC7s82HJEUXBnopL9Q5BscreMZKubSXXseDxojaN3JdtGC32bWwY2n5UrbiyQ",
  "key7": "4X2KfK3iVjX1tGEY7jZVTKZpGhHa6kZVZU53twy626VX91RT1zL145N19WLFK4yHHEfP2vvwXrCNSdSeqawSaoAT",
  "key8": "5JHy84wGD62Zi7hyQMC87MEm2BagFbah5TpH5Y33VfMMKngS1yR1sgFgveUwTdv9URSNbb4ArNYe4ibPyiUWETsX",
  "key9": "3wdWCfpgkjZB7KWNH4N9nYs52d5uvRdZRVdc2EQFdnC6eHcChtyN8pz8k739n6T5MfkSi5PnXPMTy1w5SDExJbT4",
  "key10": "2rPcNwVpU1hjxMQgWtHFGhw4LWXxthAENRaaCwECXcy6uLgujHznqWc7rLaJB777UTv5yeAqGWBv6q2LoKRDEUkb",
  "key11": "5LCho3EeFRQP6GSJoCr78w7oPiESsAWySHSzeL3vQyf74pMPxHsLpt4ytmP5pjNK5Hh5aVT5wL9EtgHiHwm9gbnQ",
  "key12": "YmpNay93gRTAi2BuXcCFKi6UDhSihDjCc82RKU2iEECmQq9XGPf7Dm3K48RT241QZcjRc6a33VkEXSgnDe4szmD",
  "key13": "4RxRVCcYyQBUpta6veNXoU6p5PVrKsw7hedjou9vJPUtM2Po9Ho88U2of4RzKSPf53gRPExr4jW1fhRnSiftJLFL",
  "key14": "33WcjsqcgLMX8syovQMp1EzNptenuBA3thoBj6tvq2dxDBKCboqE5J1CH9yVMp96Xc33XXvEtNNpZHUw7RqnEjs2",
  "key15": "4CFcmE8WZDFjtqNnqsf8GZtVV9ipXxvhDtGjfi1VATj1JYftAqp7AX3BG3kgG1DqsZDZKVVu5ARe9rMWyYHc4ezc",
  "key16": "3mpuLtYHmjEwBuVMcGEspZUmLxzCHJiK2VTwgCVaAihZEb74i3PDHsUkzQcsNFM26xUyozBcbUebzLMecBf25hgF",
  "key17": "2FKk6attqgpaYo1q3K6CDdeGTopzu6qMCWyBhzMt5hreoV7iFbY9rueEjndhs3x1NCHCDQZgujVAuRdqy9PYhy1i",
  "key18": "3ENjaY1mCWu2MjwLZoqtzGqpXpEqbKqCJoniK9FKZSzebgQL4jLA19XPpehpC2yrxdBSTMZB7pT3CdWY7tq7AmGt",
  "key19": "5kg6huT2PfuqxfDARqwQHLzr2UN3xCHFP13Ku6L64KtsSYPi54wezrEGhVgrVPpUMhk2auw4pEnJrTB4FXh8sK8m",
  "key20": "4qzYmttkNrDC62PXrYxbBYNeSYZH71122XPdVW1SW76to3Yrf79i5Q3visM8BV7i3UmiAh8AJvANcXxX2k2Tv9Hd",
  "key21": "2PUHUzqsAK787T2PqNFbBZTG1UvZcjhgMDbUhi2vv9Xace9w2q9fCY9zNx72c3pW7H3TPoxw9BMY1taJ1Pc6rNXd",
  "key22": "3v9pzxLEedwa5n3tXuhcLw2qdz2gkxgzbApWabyPyafH4kvRCXBuyd4rTXG3s8hPyqhJQLHtH1AjFhq6gxUqD7cZ",
  "key23": "2gW9bZ5H8S4WbwZiTTbd5jeMkUrbBLmjMM2WMdxWZHgNzs71csDouosYJYPdhh1Ya1bm8pzZ2myfg6D5a5p9a2pK",
  "key24": "31JRtkxTjntAurywGpsJEvJ4VkY8en7i6RHdD9iwofm8ACni1tKU5AiZQw3d7qThtorKyiQfnqpay8DXcVJCStEE",
  "key25": "3mnnxGPVcwtEkfQUHvwAhMc5jRwsXJJnXJctZzvbWParxH3MY5ERyjbwJXKzkapHRxAxmnyxq72dBHf2FqCgbjFr",
  "key26": "47zL68uJwLTT4qqV86cT9qrFGoFeXf8zRjgfauH53ttxh1QNuAWBLJs6iDKTPEnVNuAr4YQPRKXx2FRpdHYMhj85",
  "key27": "57dByFTojm2ffR6WU6odgwYkepemoVRCYDPnkYcGuYiZSLiT6jYZXBQ4Ene7Su9xBT3aeV37G26k22MyRay2MiB2",
  "key28": "5ELdPXveu5WMwe2YbzZzDDqXs29zHa6juJhLmoG4i9PVjvUFHYiwp5M1od87V2LNhPf8YNFyUxz5Xdsj7wUBDx29",
  "key29": "2PYEjKmQCqrS4Pc2ADWMMSPq1LeAsqttMC378g8zzhmQ4eoshcLjbH4dqTiaTLFBS6fLu67E96VhEvh6So9wLikm",
  "key30": "qVCLkkxdeZSyDyzXcvA1Wdo7muGr26HsNVrN7VLWDQSFpb5b2NvH49VxigNrZP9kPGaq453P7gJga3tm2uCX4dv",
  "key31": "3DtVw4GRafpQhofsqXZ8EGX66TynG5dFkreSU788mFjTG9e2eKENu1Nx7FFPL1DVsQkpLqV1LT1qvwUCvGJmTbcC"
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
