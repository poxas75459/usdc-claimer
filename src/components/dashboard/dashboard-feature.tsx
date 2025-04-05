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
    "5ZwrKWcsFQZN3oTJFcKf3GvoqcXrBMohMuQ1Q34dY9hhgbtHEv9WFUVnbbcyszaQa5KX8Ci5jf5T5MgrfDiAoZYa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MMtQKoNV9YuTop3sUKnLQo6kkAwT67PfPSiNbjTXHZaSRp8fBvg79u6Cc7mVXCrkoH8DSG8U1xZBhbQQ8Wa2aMW",
  "key1": "39caYfRv9y7t1vbt8atywugwW9Vs1RmYV9WD3CugPS7T1KT5VEKnqtHMQ6FxZuVsdTmr21w7RZvzhUqJYwqUmzkg",
  "key2": "4BytjeX3QxxBH24JsyAy9Bef69KS3QjG1cKg5vRkPhrtVdxc7t5b4pSeKR9cmkKV1feMyPzRKzBe6SxdADpGiVAA",
  "key3": "5mGNKRwfbNF7c66eAVybcofAFYwGePzwWJk3BakR1MsSUptxdGJnjRSbeaJRdfNzxFyVEy6rn6r8NJdyaAAyNvMp",
  "key4": "51bv15hCLRcz7yyiW5gZJarNbWRdKBgQSsDXXvx9DopBvGjHjyM6mswszCVCNkJWMMkiSPdAknZbiSrRZXbpfoAU",
  "key5": "46KqJmLg3y7HVMe7je4HmnvXm3U78spFR6TDLPf8ysQ8z2m2xtQyZFxCwd8VSGQhUgRGn1DtD7wEAbz3WHPTJJba",
  "key6": "C78tUTA3gpCaMSBiqoLBx3r9Ckh5HHP76fTyzAnCBDkSzoVkToLtqS1gmkDGUGLTbKRYvXaoapVkvzDpEFNrAo2",
  "key7": "RhEjZgrzFLnHZ6LTgSf6GZsJHedHK3hDEZcikbNbXCNpz1HDLR65E2FiwB2UwupqDEGCCiDL4cXBQWnB21wqZpD",
  "key8": "4NLJ2puMg1xyVZBWaXxq9kCCL54368UGyAboip3j3m8BjGW3znjvqowHZDuxrvXv6FzPCuFXxfcALejZ8YBYv9pc",
  "key9": "5CyjNacwuhakLBUjtVbLXJs94HEkyM9Ua5Zu3kexc8d8wiCa9RAha67KttCT1R8Lnwhfh2yMDTw32CUMXSCxAXNV",
  "key10": "kKVKDeJ8chjekExoz4ZX7acESEXaPvCJet5iAyoDE2kRh3n61RZ3PQFo9UkKu2SzC5NDDESBnAP26uvxnYMfUVo",
  "key11": "53kz3zd7Frvix1NHsHoReG5s7nugv82NVWge8KRHA2PDq8oXaMLBdkmHhfgBg9XdTHgt56Tge6muYduuTCBn7akM",
  "key12": "2pVd31B62FMYLNxyNWYQ9YKerrhZML8xg2kVnDbH3KeNqkJwTUT8MFerfv3EfWfgnNwqHdkXCcLCWww8cWM9NxzB",
  "key13": "3KxBML6ZMoQR2o7k79HLvcATkSYagqYhqWNB3ng5qM4Wz4Y2GVKW82kF2HCxZZErHoXLKSaZEoWAvu1urrwLUx7C",
  "key14": "2CYoFhCGczxMT67YuSPKydiLNqr7uuvPRG3sm4UViDGvyoQyxVTK6Kxg8XDeyfqZG3Gm4HWfXK5FuAjKKT8RhFWp",
  "key15": "3eJuA4UXBUW4epGS7T8vzR4KcXby2qiVYgBRSiCJCedjyqPzZmhM5KJbAJsSaPpLsiEfeGsaWc2rCrqm4aoYHr3P",
  "key16": "5U7t1gfGx5ASLb1v4xr17TZXJwXhfjUzsdg12o366di6GTW2dknf1QE2QnF6rYhsqch6Lh7Wi9gY2KSNDFjQGbtt",
  "key17": "VcmPmigcrs6Ep6U8An5V8roqdbBWPQ8FiFmkttybXm31xsYNdMTtPUSD422G5VwuXCAVW3sS4PiiG5rHe1TW3Dv",
  "key18": "4WFVVUYX8eWMacrARVNHzKSisCmymfHtGACw1o5kGxxvi5BU4rGBejWBgsuwP2ZCHodU9tsf1SWx1eGtNTgf7fAc",
  "key19": "kQK1STjoM8sgcoP2Fg9t75zXz1wWHTsVRhRKuXjdAcCpaZs8zeZF2TuzCwGR8Ep5gowA7hYD1RadPL3SAc3Ht21",
  "key20": "2APdCT1JnF8dXJKUAnH7SQ67it58N4HxLpEAV2HfvuvkY6b4MceF5dsCSfDyqnTgM5hJCdRrCCGb1iexLrEb1x63",
  "key21": "59vyuRrtqddgBKpmDRXPJvK1jkmrwguyhj1S4YMPRF6RZRLhaUu5fCit66CnxXaLRtery2VWUJDJv5FeEuvpP4m",
  "key22": "3wdBCREMAYX47qawUYzWPCUZJS8EySyWFrGpDqPP9W9ZCS52vjA3uF29nkyuEKXkoaVfdQP4cG8gumbihx5GHdgL",
  "key23": "5jpMPPdTMMsRUjwLPgZT5DH9vjBA7ffwiC1hcgWX5R9jwRxNRvt2k4jDAQHbwUESGQb7u8mVJkahkaVMu24Xg5yo",
  "key24": "2xZCm81jZWkQxRiibUKyyYzA1PkayUVo32HerNEpr4xqaS4jaWXeKQssMxBHsAevQctTMXCu1smmYa5DA9qpmH4W",
  "key25": "35EgetrWAKcGSZzyymbQWfmMXvosNLrGTrPCPbeu292Ce1qP5a8o2VVzNQYYyFfoLduVG5iQmyshBLASes8dt9Gf",
  "key26": "2yJf4PYDXPYhyT3ck6TAoUduLZBEWPdYqKpNKZKcD7vR9jGveFxjciVsogBuLF61HUNF7mkgEkLPf33vHm9ETy18",
  "key27": "39ngXcZFfoH7sLRcrjxpGiGAPfuPV1tyidntUtYXHMkHo8h98YA5XihFNcKgorGcL6LDYCZjZ12oqs3LM8w2V6NM",
  "key28": "4hd4TAznZ9AQGewBBuotNbSyLJCB6Aqc1BjJGxEHRWk6hd7Lb1Aj3XMSBjGD4BmnC1ioAErUPZNLvZTveeypmywC",
  "key29": "59W1Hrwexa6hLz4HRSxmgcYu2AgXMbNYd4ZoGAD5YPKALF7hxfMM5C9oKWDeA4wcehjHpu8qqWHHKAbKtQQYF6Gg",
  "key30": "65ZraiqTGeQGgWXe3aNwbzfCFJuuPVPYVdZ2CVEXKoyywJXdbCXGVWnx92taPw63apmc63ck4t1sGrxzccvYSXX7",
  "key31": "2N64wK1Rvyrp4sUhFKSPm1gqGrvvn57tyiNHZyfnxkVSn1uuuM5UFx5jgZJvJ4tcsmvXVHNxyaEyLHMn77FgsNFq",
  "key32": "3SaWAek2YpdfFfid8yACykz1PUqw596EZEaFchjYgHP42DpgaDt9SXTguAMRpMYkviwzcikHextqYy4S4gLDBkSh",
  "key33": "48mPfc3MQ4b1B2qwprFPhMPyA96UhASG6hvwG3pzdwME6LeCitTjWVQtNQ4mnhibQ6iNLvDnKtB64WTXtvuC92S2",
  "key34": "2CkSc4uG56pAgWKMr9mwBoijbhLySqFrv6DEWDN7i3oufi2pH6c1jerg763HLK7v35nG3GYX1UDcr9wy7BZPgV1y",
  "key35": "4nD3RLgJshAvskUSDgVN38RAsTgHSiFn32XiR31TaTo3Nurf1Ahj9zjArATEcbCe47w4brYxvZWS3GiiftvgDrLS",
  "key36": "53dfUZpoacp3z7yUZC44ugBfxxMwzQ88HwLSTs6gGUnCVGVLgRDWsCCmNncPAakmhhvNCbwPnu4q9tsG154Hsq3G",
  "key37": "3eFhsd4oYsTQmhtFmSMsUwjPxFaFsBssTNtr4YYPMqvqX7YiHh7MZdLhuExXDPtCZTWxH5ptUJRDK9dZ5kAHkctr",
  "key38": "5J2PR6cJM2UcR2ZkwasEyTRC5je3H7BMPqyhRNRiLkCDLFhiGaPs2CZzpQWZHgaauoqFS2TQ5cEbkeT2BD8RMKox",
  "key39": "2WcxpyuBeLyJYWmZRnJFZnY2tBBswYT8QZ3PGUBjUBJPWBEgKh9RvGegCknA73rSnM2E2XJ9jauMMThKubozjt1E",
  "key40": "2e8AdGQaH62EKNRRi8Cat3q973eTAZdcEbQ5TA39AZUe6AkeBsYStFQuuQWYeixF7xiMcUL8uHNqFnKZJQBjN7NP",
  "key41": "NS62DF26geBPjHLBhv22KrXjvS3XRBR7KUQmUnNESUFuYuQiLfWXh6R5GAz7RGzG5kHqkmoEVvknqr3ZiqivQoU",
  "key42": "xdJLg73ncjT14QiEE9VPKzcVGpsjCRu66V5syoXVP8vK1mYV9pNzY9xotnnzPrs4DnBRXs5tLWGNSUYc24VDkWk",
  "key43": "5ao8wzv7VWdp5BwTiZmk8oK7UbWK7xU6VZtfhcMwUePexYtYDZzpHMofGKFRRT99QM3tN5amADgzEEpTF9wc1qWq"
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
