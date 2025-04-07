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
    "Aa6E8GGwYKRbixzqF4W4hHGddxC9UZH1GiUJS1HjFXv1rLwFQsEG4S7uLN8nUd847gpusZp6SoNU49k2Rdz4oFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ve6DiqdPqjnfTmVdkxYyppXMGL6HgB8XyMJ7rktHvFPi9sgmCkbqykQ3ZNXV9THYw3Lo5cbtZZDK5W52ym2E5af",
  "key1": "5DN9uh8R2hMM5PwdbXiB4PFrNSoCQZPuPQGpWD4VSMhBtxPg2Pww3wm5ruVSHb595grzDMQV5R7GPdwdT2tQGFGQ",
  "key2": "5G6Ex5jdXWqd7o47CMeYSePjgmaRrY1fmsoJD3Yow18AwhkeGrcgkxHMyJbHWF4iKxbjVJYyUVJDXSKqNi2gFRaf",
  "key3": "FcriVTbnc6rFo3WB7EfnRZiGT5GN5UdYt7g7fyRHg7GHvpmAWpviyvHKoeXhSQwFSv4hYqqxY5k3gpYRHRTBvha",
  "key4": "27sif5fmhwbKfdVewxTp5ftcAVCFRrGpTQKf83gAzbLDWdfRfztKi9HBimax54tzHhi3JVv6t26QeNhnefXZ2bGf",
  "key5": "5TXjNcrHYWmZCrVWF6kt5uvFgCcULErH9PWhBxYtaLM9xhAQQmWfZcGQna9SoZZdJhNUu5Gff4NoHhhoQFs6wR2D",
  "key6": "4ZDx76GZtxrf4Pj6qJaezBPFWugenM52hPCBNVnifjRUiD8TojDY2v8ZJzb6JBR9d9mJkNvCFkRp3yVFWB5QNr3n",
  "key7": "29fyh57KaaKoFtNGiUTxKq3D7utvwYbbScBwJigW6yN6WXX1qWvthXTKGPe4sy6npjrKsyvh6ChGGvebgwzZYwEY",
  "key8": "44bjhM9tHzKN2WT4CTwhYCyJfeqCzsfNBwffLPTJDqtCVsDFAeWe8e95BRmPn562zvLCRSNfPRZWK7h3nMzKLz6H",
  "key9": "r8xfPdjqt1AM8PGRMhoUXWkn2pfanMYGrPVyhPCZC8NqSKsp7hJnji1Dvx8u3ZCFVWNuHP6Tbv5CW5A6FmwGze1",
  "key10": "4JWSwHS4i1AD78uCosbPKWw8pQR7TRUA1VR7dq7bwi8HCdUnPQ4HxKgtJe6MVbrMsRcAt6RbJXj7QQV9NYg1dMbo",
  "key11": "2fvnfZVs1X6pkj8fnneeCBpm5Auj71JVyndVJYJqdjrNeHg5i22czU4uFTdXAHCbU9yzASeHUvCL79h8JHoUbP1k",
  "key12": "5Kfb8jjJH8HwCUgWyroNu8bHnm7NkibsgNTaV6kE4jJiLLfGAPGR8dWDsjCW5cgpeX9ECHJWPH5BWPbD8JRqSAr7",
  "key13": "4XpswhseaN8EHkXThzDju2FEzq2VW9VXs7dYXxgxGdQxTxwc937564LUKXqGYM5HTrfYQcfHVRbSEPosYL9G44vN",
  "key14": "fACEX2NbxHjqhnE96mpZ1HksKahaVSxMeLQZLbdDmF1rJsYgFq9MsmqcTyoyEiq8ZnTzoi9t47W2d6R2yS2xwnC",
  "key15": "2EMCXxmrTAvxB1UruNJ8Vjj74spyk9eyGXx3B2zGqcASiL1n9ReMLLa29hCHxKHn8uw7AHF7m3xMtPiGiwsxcts2",
  "key16": "5de6AMHUDREQzHD5YMuWiXs6bnSBQ2YXFAYUMTYuKH3qgpjf1JMNgNpXmKZTTXdoCXgCKcmUXToFaRs1NWiwj5Tn",
  "key17": "38qmbzCTBbBjdiv2YXUsuGxtYhQAVnnueE9BcrsRsUZdshRPtiXYCasDZrmDPpozkmHpJW4YJWYSUA3v9KSMhR3x",
  "key18": "2ipCJZ3Uh6CuGrp4Sr7PMwntSAQg2M5dhhkqUwdhEbnpyjkeM7XsDsVvDSGW7AEQ92STFiBsoDe5aLMnEovrqoeB",
  "key19": "4ab1jzFM7v8pTd3Q4dNbZRaHfmfVKRDMtEmPHvkEvTFhzwtZMC2KeGtkMxQBHcGLnt3mrEaT5qAG8zyR5b787gxE",
  "key20": "4nNw6fM4gASAFzyMD6DE4JwbaHQMZ3rfaWXCDXhkbCnubxSfPPzum7Y87LsRZhnTYota9HXpYjsRwSdSxhUmPSkW",
  "key21": "2uUU3XE1FhByCLYFfcpsN8bq9AxvvMEmGj6DU6aSfRjvtvhc2xEALjtebiqmNmTsQXHcGP5z5uH2UhfyXEFgruzR",
  "key22": "5bPrtt65a71Fg1kqU1CLA41or1NpbL745LZaWKEGUx6P65BJ5gxEbcQpJPZewNvJz27c3UfenzSAQs2q39koADxu",
  "key23": "4ZJsqDn1grHsHUCccx93QVoRMg1RBaBA3GbE3i4Jcn9gvv1PYVuUUU2yKFrzT7FdLPfEwjwRNSc1QeSDPHQxQadi",
  "key24": "nFV9TMpZmSsgtc9e632gwEczCcs6VFR7AYPUXvqsGms3YasRaGEzcbvQHUwgE2NEtSQAaadgRVC3q4HidRhvmBw",
  "key25": "43Bwvp252bF16vT3DD4R8uN2VBfmbnGwhzyHt1JSFesQtfofzBLP6geXB1d8MtQ5R2pnggTnqfKaSi1D1vscjEpf",
  "key26": "2vkSfRPq5AejrL34jDs2H9aEACJ6d1uZH73tquJTav6GmypdLLYdAyHQqas7SvEFGAvRWxMsr2UCymaWUYV9BeS1",
  "key27": "23yDKftqDxHiEL1SQAyvGUsuWBg5vWC5g98wA88rLmqN7ozj6srTvGStAz5E3cLGPMBNGKehdutXp6K4CpJDsavs",
  "key28": "Np14yBqrY6ySZYGUtdAYP5zNp38akLV66h2h4TE6s6cagta1uGPxfvUohiAbkvYzMwiQtWLCeXkzzqG1jvkUv8B",
  "key29": "55XwFuAs8d9itTiQ85HNu6Ub97f4o5hUhp5XQtVWNSy1Uh5bQnGGwg92mWUFgJuozvimLkBDmtNh55MGEqQtBNAs",
  "key30": "2jBQjwpEwLXQoxx6KmEtGWhhGGjgthGWLeCnhnXQNXi2YR4f5RSVRP1mMrVKxWDB2VRvXaKdbjkvrFZ8mYudrZQ9",
  "key31": "JdBeV3P3oZMLzHq1v8UVJ32YzX29r1B1F8X9up12RXKCfPG4tYs3orVGbGLTxz7tW1YRAQ7gE54ujHUJRuLeQCL",
  "key32": "2Pizs9CTYYTXC41tjq5RnNoFkjytnPmc6Gy7TBFFVWxhLeatrH91NnnouQdNtMyutcDyU32Z4fwMG8jGiGQXgDcS",
  "key33": "2P8LY2cforKZuP5QZ64NCRUznUYUjyEsQTJZC5F4z1gkc7aApzWFf14TyPYhrXr9tDgpzQE2pPdu4bAeiEW23jJy",
  "key34": "59s3cLn3KpkNMwubXUxfMXQFKTcNs9gdAvEspreQMJAz1bJEDuVpb7uiUpimrXi9PPSbg885EnKn4S4fZQiX63wW",
  "key35": "2YqyNZkb6hiVD3SRc2WuFwy6K9UiSgkcLBPPhfznRUkLQQe9awoKFhkibC8uKhzBfVEegfoRUgZgZpug2AYUWRR9",
  "key36": "2GeX2CiVfAAGJKWN39NA35HMFVdVu7CwEz76C2K5sVqxP2DnARhDvKkekYyrFjzScq4yQozaG7vVc5GDLkevHFxE",
  "key37": "5BnWPuxbW39RvLBW5mTgdt8PVXrECmG2v2auS1sYyeNoMaGCHtGZ1cMWwNGqnfLDue9WNoPRjiWCbRuY66LfSWf1",
  "key38": "4RHss3ZDCfpn19ajHKyi7tzBqoV3fNBMQfntWLFzfDLficN2Lo2gX64J8Ukz18M7PfUrHUorjjiGbREpNaA1FdGx"
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
