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
    "3iQ4CF1MShUN3PMB8gNd8kc9ZAxY4A5u36FMr9ErRy14dpHeN3fELxN96PvMdLHkF887JY9Mdi1ostEYvsSZYKK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1rfR3ZdF5fKM9WjrCqFbbUueK9auBRLypK3aXEh2ZR52YnW5RHNdaL17Vo2Ru2Hf5sbZWCdprPRGT28m9Tn5Dd9",
  "key1": "3fhSx2QTrDDDi2EcX3Rb6G5zUKwANss9MgShVwXzWY7xWM6BnNdBS5cxRvpAawEuwWNMURBUbLy7Rck53GxdyiRM",
  "key2": "5NMceHm1oxWHhYfD3toFz9FXHH1iiUGnbJ6dUGKv4nFZUxJqwK2qyd1GpS8Ahrv4SuSdyPZcSSB4P4QUDsZf33U2",
  "key3": "8ZsSvfi9LxPADhWpsfCCivntgmbqRobQs5QSQ3b4y5hwUoZwk5325G6J2MVE2Z9vSEAXCBnqhC3w4i6KefTMUdG",
  "key4": "5cqmDZGQ3Ra95dCPgvUxHxpPKghzQ5WgeV2MCctyoychfrhkAsXsbzoi1KYKPvvgRT6Uy89RsN7NJhxt8zFvx7Zi",
  "key5": "3jhbcPSUn3kkUmchfmdqMmFtkc6fJ1S3tFQv8B6WySthV1CiYh8cZkGxpEFBUEokbdecyhPnGG8z9pVoVKiMfeB9",
  "key6": "RRyE637DdYMm2MAgnMZvtkwsrXq7kMAYmgj9D9128mzJBqUkVN2cq2rqeyWjZSpNcrSWpxLAt2MTMgq9h981uaB",
  "key7": "e2PJcMAJU9aGsWybj95uqK3kHiUF4pSaS3L4f4iKJokQdr9czs4rx7UkYAyNTEUwbd6AVopjLRfUsAzXvuPZHLv",
  "key8": "3FYbvGsv6FvTL47x8QpqmQWP92vFqhBEcd47pcPpswVSiGF5k4ju5E56GgKmxdfcLwdKC21dZ9AVKxKiZkk8Ymkb",
  "key9": "4QyYGpr3otsBVLsJgPUGUJojkU1QSZwmkY581PE5KxCUGVtcXgY5Dd4ndkjpP5AXV5oC1dainHP9f88Ndr6XtQCA",
  "key10": "hCtKKVCWSXbjRvC3kXq6v72A8hiA3P6bfJp269PJrit8MwiwG6rnEbFKYeHXBGR5de8PdYSP3wCsYAVA1Lr2Cke",
  "key11": "52m5X2VQePxw3AFCYgPzcMiXHu1Di8BbynjdxLfkEVQRoXYFQ9UwKXGQmwabJx5vWjfn5k26tLt7cKwUbzEHPtgS",
  "key12": "2Z1aVDjia6DKs3CP3CbAAVxvFekois7BTJpfUxBHCYVGUxiHfsaXbdLWFuyrNtXrrmHVeZaiEZexeFbMudYi17hH",
  "key13": "kLtg1zy5zqQFyJdryoMLmg6qLF7a8dTmJZxAmjkDK2UxreXcMgBiBEjqZbQn6DotRsMTkQ5ApL5yVn61Lb27gYP",
  "key14": "3ke8LDW5FC42GrMfFogtcPayM5o6iqieCiozZUqS6DXrdmRcTHBzx5FaRcS6QsapTmwee5ReqxfnfEyy4rDyfCjV",
  "key15": "5EknhgnGJnNrhbHhyU6C2phhVJQ7q8bT15gtQkCLVs1uGojGHR8KP51WJLNZSi6PUC4WdiRqfHf2EdxedPrFGig4",
  "key16": "4y5Wya7kcv6ATfPXS8kkhspJqeDUwob8X93fECDEvLBzpue8mppUnLuLjXPuppT66FZyku1wutWxHYnnc11goKD4",
  "key17": "64mdyomFwPcYDAmfcYKsHR7Rrf2SPdnuALxCA9CMzkehFAZuJjCs6QiHdZob8vcGRrQGRyqKMjVQMAtHzSxD2Bmt",
  "key18": "Jgw6kX5CEo99xLxHyLmWshV5HHjJT3f6SmKPBGgz2XeGsEqFtPM849aYX4sQei7hAEhpiiUL3kbM1cyUHyYxK2g",
  "key19": "5tARd4uui2JHxvPcGra1hUc839kUukV2gZG5LGEzwonfBVxSJ7hPY3BbTrt9y4L5DurAL8xMPeX7MMfLiRKaV4np",
  "key20": "5X92UrdxYmngTznVtjCxqhYR9kCeY7aKT6fJisgBMDzDzscogL7BFUhqDvEP3EZv9ipMNQioHCUgh3g25Yv4wmsf",
  "key21": "122hYeAYH4CWG8iPxakaEcBq6FdexNwgEHQPa1iirfFE9ZDBX7RZHENzeyXyJnV4Ub5FT2cRY8E2xsLLZsict9zH",
  "key22": "4QVBZgbLNWNsNssvp975n3o6okNimL9bPezKcYkwFSRcnqed45WBMC8rK2fnxHG3Me6CacM3cNkCtHtrso5qKk5Q",
  "key23": "96sirhxHmJBRCB2ue3hFbgkPxPSpxP4qGgFg2e9v4oSs3jd9yXfCbNQgSxKSAkgniXB9hesMeqU9CXcpChk3937",
  "key24": "VsZy6Re5seBc7jB5iJMbni9Bigf7og6yNXJv3W2m1UZTGNPn6pXK9RWypF3soFDR4gopo3bj7qfHMDqCAxmScMw",
  "key25": "5gAw2bqwyMFDxA1VrfG7YoCqnBfhEbCHv7jDrbirGP2SGVbiHZUAQYPeoZWUE7wSG2aeBVUxnkrVZoyBLknpvB78",
  "key26": "5VEGk3CsZDcoXE9cwTnG6HTrEd7UnqUrnUjqGdpzrtbEvrJjA2ax9CFCweNNtpjqzh3KtGuxLk8J9PXRWEbTccTX",
  "key27": "3rtXAahHn92QwVmr9sSim479BzumycDQTQszWR9nDfmM5eBMozb1Xg2ry2hNvc3wySjet6hoqRkQHamVpmPBYGja",
  "key28": "3tR4NJr8copzXbudYMsgYLe9oGfW2GnugESoKzQ77iz5zgNawTKwYA7JN8jbcAs48HFff1oe7anrjkZXFduDbcRt",
  "key29": "4j8eGg7TRNg8SycUrVxzgUbSTJUk9oiGjGqfrFDYa6Y6J382fUuMtFq67r6R3sRr6kqQUkiWAEb9HTE27EQvwsdh",
  "key30": "2vVEBLiFacomcncQgVCiSdETouLDCTjMQx8wLZrKXhFaUnyQx5JcQfnBGQRZSMCcTc58DjYptoWsWANr6WUGaEU8",
  "key31": "wXuPg1gnr19Frbsbw8ZhPU2LEyBWHjR24DCX2pbdFim2VPrgqMJ9GBzv194pHpZt9jNtLgS36gJFF3orhqYG3Jk",
  "key32": "374bSjtdECaTXpQjQ85t1heiQY9Fk2su4agdRuBhag5aeQt4GfrmuFJRNaTqtpqAeyRwcFmaxirU4TFyaAe7VzD5",
  "key33": "41wU64ybtSsbSFZ3fgVmBbf4LLR4UWTHbqBZXHkybiEZGPN8TxSqzTGpdd4BHkbypm6CRxQSmZniRrz8iudSxQGW",
  "key34": "3haSM2ag1sNz8FYWtqETmRQQogvftMAJzVyC34Nyjr1gDezRAFFPR5B58XgpvaxqknShB32uPiitmgiJ65PCYaEC",
  "key35": "32K3QhZi9TJkNiW4hQzLSmE4j6meQSnsxNpTpK4vsMFFGC5oEqvBBVAkALne1aMUpsUuKXvibJjxiPooJ7JviTtf",
  "key36": "4Ds5D2gSn3cTizUX9zVMCVdpV53aAdV8HPr1tioCahq2dJUHdJS2DCkmGKW5xKuwMEByppP9g8iw4M7MiApXxPQt",
  "key37": "4usFEfKEoyJ1bEbDmUF6rk41BRBmwH9RftS1Cm8eEQRbtG9fq9a5JhsCrwUhTkwdfoH4RBApmaM9xCRGTXPPmuGv",
  "key38": "5E4jVrSbfcdA5BPKUJpd4i9BGb4ug4xn6nYNMbummqcVEYykC3MhKx24KdGBQzwdyRCMAtHhrjSaLht2yUTZZ59T",
  "key39": "4f5iJruiMz6BmLLuDuL48xYyEbZewdARp82txpFajJePKnt5GHH7KLvqgasfA55iCxHoMURZAqVph6kNhCvMTZRu",
  "key40": "44qW4u2mLiuBWQgbAySyPbD2Mx4yQTzcsNWUnjjMVbLG9ZCyj8aGxKqmkNi5sDP5hjv6o4zKVn8DRSmi4P7xpWqC",
  "key41": "2X6tLywuuobUPKuDScgFp5ZY2VqswBaWCUYhJq1qaZFAz8wZ4w9wjNkMjSpqUFCZyMvcXVSiWbowG7aP44a43AaN",
  "key42": "5gU1kSb7Uv2y3jsNy8ProVP8gVWszBnKysKApEcQjsZXDCb56edbzQF2yovdNE2epE32Mzzni1zcGSa8YXW4SG9r",
  "key43": "2sBii8smrwbodeuJPcfRYEf57xhNqv3sz3y3qiLFkjigxLpZqrGhmmaQwNikL2mRYBLiGhCny4VN1giBPvLptQ8p"
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
