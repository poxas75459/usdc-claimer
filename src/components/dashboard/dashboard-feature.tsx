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
    "3WuwYUiLuHEsG5tXQP1GWUe3wjhLAyWdRRX3je5B9G5fBkx5Fpz3ZYpfuehxeEUAwRT4g421DeGv7RK88DtgCq8k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48nwez3r6cE9kzRHKTucsxjEiVwrpNL8vS6R7mXDssN3aCQTCDn9p6DBtsQypZbWjoGiWWKoFbFVXEj545taM6yT",
  "key1": "2treQUnnkKahsNfp7TPbuAE4CyXo1wkTD4VaNxYZi4fUfUUxb8EaZJB6KZ1a5S4C3tPtqwAByQZkNctBfKUahVn2",
  "key2": "4xRbSajzjohSwMSCxXVe5CDQMEoNfSk6oisuJFaTSXEJHWURRcdLStV9eAQNQavuj3LApapLGT1KmKrnNUACY7Mb",
  "key3": "3bFugVAu6TrHTn1pUHbYfvQKuPhFZCBUvVkosUjT6xKvMDLUNqphbcD5shPotdFw14rUSYk8utL1kAxKkSXT4qLQ",
  "key4": "k8SrxgvaNsJmvQCQi5ht7zhHkYXp9PfMC37vfBKErtn8Myd3yPhV3YcKXYGm87v2qjoR8VMD58Z9QgZYjQZKNUh",
  "key5": "42JKEd2sLtoVGoVsVUyM9RPJKvK9rbcGGbU3DDXqjgQGQ2U7aZHsSG3UDagcoBAHh8XcbDg8JjMYG2pVNWpa4FgS",
  "key6": "5oPqV6v1r3bDTKdK5wJZwn2uMpWYobvmeyjewJevvrnE96xWtLqAWTuUSQ1KKjjrxcsmmsfNmgVm5foRcQfx4H3y",
  "key7": "2RHxsWWH8f7MGRydVAZJRDuCWodwKRp2Amg4HYstc5ar1XV6XbY3PjHnphDtCNsaTXZGArVkNotGX5uaU6DuC7Wd",
  "key8": "4JXTvMV7c14xt8S2qvBi5Rvb1QEkxajQVntUxtRQCg4RisTmV68a1S4oXokMYAr41a4stWEnz1KbTNeH2mqEiN1z",
  "key9": "65hrHvijAFjn91g4TWBaYt94nL8N7VcV1RFWEEm97bxZWQmJAKeaJD4GUZDhTEo2Qa3GymoQWWbDnCffKMsNydim",
  "key10": "51BQXcaDnuyCQXV2DXnQkDjN2tUg4tBiBi3eMFyk4x73z4StRTh8zguQBjzoSBgdMvVHRHFF79WP861CfYmAyX6d",
  "key11": "5kGfG1deiHNEWtFNjXjufQs1fHx4e4w9hnKqmZSoMgCBtjtk9pB9wFpLkJxqAcHRxjoN5zLXTsYckjKUxjo7oTGD",
  "key12": "3UEaCoFH8KfDW9TbjWLLpm5ZUKf5cFGCv1oGEVkneUZGfrq8SnKCXphkmqskMc4XS1rM93V2FKXuDqCmfdWwStbF",
  "key13": "4RV4vCeSAjiuKpvsGRnNdFwAaDu7dRVnt53t7fRKhEuWjZBZzvAs8KayMFAF4em1FMNf1HiuLANsqqzUJQmN2mMV",
  "key14": "iVJEcvRHZnmPbUMRS8Zr5AYsCLcCS1yNmkw3ZXn7smNQfQWvZSRBVHe1jP1m1qyTeL147JRv3FNfe2T9oZ84skX",
  "key15": "3nyMxvpo2uMaj2Focyo7GV7MEqCzUJM9RyHETmNZmHMxw1cLHSTN2eD8zWLWqtuPA4Vf49YZWRXNPHojmHDA5YVE",
  "key16": "364T1pinFXADU3npQZiU1uAcSM5kpL9Hsgsm2Sk4Y9pBGciPq8hGXyctEMyNTDpAgWkTGdZAvSQYWiBBKuAmwMMb",
  "key17": "ovFbj71H6V5q6TLALeHxqqRbdye6PypoG5aYkThTTdkH1C2Foz4v4vxHRLVGDZVjbQKsaBCH8sCvh9rXkwtMNhb",
  "key18": "thGGWyx7SM44cNTfx1CTi9ycZYcD3MrSyV9oRsxoMSjNhCJ2TkoNZ74YaRNNAN3s93wvM18dGQ4xXJ39ohUW6Bx",
  "key19": "3XNe7n1H7Rg6CDdR27Pz8ACmFa11Yq1azdfyf95hJit8CCLmMMN29B4MJhHg4bBjWM4FMnFWRonYnWkTY1LME1ee",
  "key20": "2M6PvHRaKJn3mwtBQmXx9BBYY2jLCBRYvxR8mZRzfK3A43U5QJVYt1NSfHrGCgWNxPAgSLwqpUPzAyQekEhdxVAU",
  "key21": "39ngU7nyng7sCN3hzB3XBcNvTRzJGuUjfyUchuEiWNd4mjd6Q5kcP4WXyeJkfPfeKvFNXrrbrvMbdwnbMYzxC6BQ",
  "key22": "5Np6CENPhLLs1rQYZcVNLvcbi7aHAecTv46LkxHdzbhWQJAGPQ5QXhZSjdt7nsFwX9bHnxYcBcbke4BQU9wmH7vB",
  "key23": "5VwbDjWoimCQ53HiL9Rf34qDghi63LWiNP6gQjFxverDxF1LpMn5k8v2k7c3QXAj82DPpkQxnUoYFL3jvhKXX9Jm",
  "key24": "3RWjBQH8r18njfAkdN3F9reWWp62ayMXyZ4bszoqnr6PVTwji6kbgnTSbijxsK7NwB8Yp866TPZX2DHSAjEy42Yr",
  "key25": "4wypDLXk8eGSpDZdHThDGcQcwgHqqsTuyNXZqthEiPRAJCDyqAqhrH4MTGs3LhUBhKSsWoV68KAEnjnai4rrrYTD",
  "key26": "37aDLpRZ5LLCPcRiDseYZqagbX5tpG4Mi2zByGgEsgMU5uj6Gu7S3eTxd83xRrAdZw34UKy1Lpv64AVXstyV3jc6",
  "key27": "wfsmyQ7K6kf6KH6pzwySyF1HZ7pDB1yDkF6rj2AUnMdqX4DiW754BcYamtgFaRhGrGCrExYVRPyCghRp8UzP6eM",
  "key28": "426PsxHLWSwppARgwJwgLckf1x5bbnPBasLDLtJk7XfzdfVprA8Xn4h3qqSsKFCFW5mBsTmsSiBdmGrjpXYXmgdw",
  "key29": "wWEhrR2HiHmoyNq4jcUmAh3kaXqMD88TxwcvUV8X7EhPNsNdC2r5n1YQ27yp29FCdH3Gvz9FpVt97ftmezNhfJ3",
  "key30": "529AgnjRxhqdbzcBiQPEirdX7z7pNLH3FNuYT57wCR6FJDpcLczgw4Av3tDs52VcrQnNHAd5Q44vWppU8cTWqDUe",
  "key31": "3XsZRwUZdFRyzx685Mpv5wdQTmLJTRBZZw6dYCzbLJK25NBLLdJQRUZSqeQMLYou7uu8jvfsZqn69k9CXjMmaKWY",
  "key32": "4k21QR52gWoXsq9q66P5x1WgsS2pJ7tCgJe2QrrthQgwRNBXzdn9f4nnahUiFACFMvddjDcvV1b3uRUupPCLrs9D",
  "key33": "5FwnNYDHyQT6jTCmK9m9ATPDEjD1jbTJJwXUqAwtmCGH99vukdFC4s8rLg5VSwGMaHLfzrVad9nAPdVK5TDVXZnb",
  "key34": "5988cjHKE4GkYLVSfmUMagmxQF5NE8NAW6RxTfiyaUPRBwFmP4wepTbSac69aeWJKwUuQ8orkvHFeueZ6RQbHSAo",
  "key35": "5mKiMuquRiifarFb74XVmbaQD3QygPwk1GDAZn8Bmr7eEX2TETmGKPngLMkSUpWHYeoGbFPuMxhmmJ7zkTxYRQw1",
  "key36": "3PPfRZztiSBmEyWGuWmejbsGzaKMudHVu4eXiAddDc4YAvDPWWFh5nZ3XNNE8Nxxk5S6YZo9h7JmxUCs8NbDp6HZ",
  "key37": "m6JDv31WkHABUVe6iEekFRbCxEKswTco6tRxuvFJSb3Zuf9EomEuFzpmidbfXjF7z5rRJXZrAaAnJJ9PA5Y7Tks",
  "key38": "3aA3goVsj9BPdwofqmEA1w6oysrLu8VybqMaLyrm2pWWTV22WcMdZVNpYqJULrmX1SxsmVh6GiFCTBJXGS7RkUHK",
  "key39": "4jWMFJTszr5FiaHmtPyhCcA9neQvcY6oiriUke9qjLNKHiz6hBiqiJHj7w5Rq7j9oRvcCtEvSRGQMQhkTabqvTbR",
  "key40": "2Cnk85BUBY7iUAiMnNjL5QmSYNAx9tHj15oqgYamgvaKh21tq75VkWVzZWx4DsHPxsbEMSPUD6KpHhjD3TAu55g5",
  "key41": "5yeiqeAivhDnUp1hW2o9aGfEouc3fQD378PVsxquHfihYLadoMjt8v92dHnwHCL7PYkEtzVtRoEaXNi86MUqLoZc",
  "key42": "5B3g8XJsSJD49C8RXbiUc6WjuB6wKe5a9vQbZAx9yx4dbBidjr5uaE2rgFuzqryDNDbLJqh1hCWNBgGDxB16Aa6L",
  "key43": "4gT2AKZPcYBtBYmcJ5aXQuDPWPYR1srfDpbKDywymyNW3QuxAyBEsdyd9ZZHkx8Y4w689doysbR8355DUDki7Z2r",
  "key44": "4A3ikCCxWW6xyeJR6ysrqB1VqN9cStbjqn9Mz2P4vdsC3aDgFXoaLNTiXvAjWE4mbr1RfENGcutf6AQYK6vS6Sah",
  "key45": "5N5T74jcyoFnhNCtUWUL4c1Bi7969qYPUnaYFfLBJDfgodsGBzC8CDej4NYXm9tPz6whJDteG5WzLWPEG4vmLV6v",
  "key46": "4oiD7E5HQJiXcDTyojPP4KBhDvnLMvAySC6N3ZQUCHzpSUGrcSST2hKYf8yGRmh1iChnXjswGr8jqh5pbvM1S9K"
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
