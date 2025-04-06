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
    "3DVGPHwWan7Bp5BYBHo1WmdV6jNiyqRg7yWSzBx6gDAsruZK5guGxMcYDRawaJuvhgrPoGvkE8FeK17bTa1K9Vvn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WK7SmEP69TN5PLKfR6U8PniD3SkjVzhssCDGqL9HfP8rSycUvv19msePyByK4wa6QFyZmevVGrDS5a8dv7J7uJm",
  "key1": "2Zr12t9otuBzghNDqsr1CvVB38wsZARqkqkMihtkQ79xf3jCBHZTxWtHctTLZw3YMnKWL9hXiVxHcC8CfsTgK7Eo",
  "key2": "VtVrX1hzV8B3Wp9SRagAHP1ceBCMh9faYhWZDEcCkyQsmBb7ubM4uN5DC9mvarT4SkbRGxXbskHQkXhZ6ZrCzPd",
  "key3": "3WLYnZJEyDhvwxNfv2kFZ7pZKVyqq6vV8sUDnwQbSvc3mbMKPMqUazKEYJTAdLmc9aa66CbHbAHuaTFdahBB1S7P",
  "key4": "2oAHMgrDuA4UGharXDtH2mRjsw6edWkQyfyoH8wnnoBZNpBZa6fVpFQbHJsABdc6agCB7mVGS1gtwbtsW8GG7dTJ",
  "key5": "5oen3NBjwgVUmBV4PBPF5JHRAqpUbaYuMoLiqS17GVYcZAkFfGGZwjPN4RiurrEWCH33weZBQTRULdY8jWVhYttF",
  "key6": "4dxNvsPPC6KZL2NV34m9ANnkbx6PSrtNYWAeq71atv4xfCcd1T5PMghe79vsUfw3E9oWGG6484PeNgv7XKna5G63",
  "key7": "5rY5uKzeagYRVQW8hX74UA4r1pd6qEc1ToTYFgpBfhusryGxKmT8wgdRXW1moYPbP9D81ozmEUVxpFF7rSy8C5yt",
  "key8": "2tUherhPKF18ZFDxWFJGYA3xTL8eicHitc86jYTic7NC51SGW9oSpLohDMonsXdeCBia19hm5LPrj5jr6djnG45c",
  "key9": "2wGyyQvRWLseA2Pv66TFGBhmKtdJnmF6so2FkAsuPsoSKh73E7m3LeKp3irWsFyQNDCxXyZ4LmTf4EqeRevJY92w",
  "key10": "5GQeyJCJuayVdLHVDuA8jntfG42kanzNXrwbuK4nN75NrijAE2XCujM3MvSziXPehhuiWnNJBaCepginWu1DFVY9",
  "key11": "438kaGTm1UfJMYcdPnfk9EePi1GymUw5Tok4rR45RoXRL1fbEQ5n7FqtVGbsEmQNPVhVTbo8FPEXwZiNqcLY6Ck7",
  "key12": "u4Co7X9BiUEW4bxf5QAd5yDKZt7jYo41tnyeLS9dBbgYd74WatrMzKNPFCWW8gwSPtSSNC6pGQ6hF1tythwn8w8",
  "key13": "4CzaSxLeCkiKkKCqMZpSEWFLMwPkj16qK369dy4f6vtZvjLsTSiMX8VNstoyHHnU98GeqojoHm4A8P5rck5J1JH5",
  "key14": "2i8e7gSS4JUr2Mg9tKXw1nQE9SCAUEg5uDJFwnqXKxyXGmWt48mBTpAKtasnqEZZmDhf2h3Uv6JA1VdoNHHNYioq",
  "key15": "35kzxDEmhCV2e7RGYi6YXeTDP6pKxJeU9aQzk41skhJa4gQZKTL7trsH5VVWRTuYSNYwDCqf3BXRE6Qzgwf7pgnd",
  "key16": "5J3v8cvRptwA1GcVRsmR6Zh2n1vpA1c1g5mcQLTFqh9ydqabSo5cA1YmEX1BCiSjYGcQc785SvVCmyi2bdRyVUCE",
  "key17": "5Zq4aiu3xRhFdPs2QbqtSyoGqhvnKRNhpc3EhPK1BvjbyFEmUHZpoaYSP3RiFptPVpZCQJWQzc6dCrx8QouBYFCZ",
  "key18": "4SpZzx7ixmgnhfuGDqZSho7Wtx14fHtWibwwCwKXjJViTVbDTFJNZVLM3ou5PnQXq1XD3AKhsm7APktpu9Kvf7s2",
  "key19": "27DHmLQCndfXABcZZNCBgZETsCEbrNzkbZ6HFLiEo9jv32XTuNEvkGHy9qcQUdQiveY9uH73tWtBrQXJj3GZpJU6",
  "key20": "yChRhe1pvAig1wH13EHWb6GF8qmMS23z9v5jsbBxJ1H1vFF5UBAiJzMARPH936fFxKhLpzmbuiXM1HnYmdHYHpd",
  "key21": "HyFLM9qfWKyb7pZaVd5QYnj7Fj58XDmTxLD9CscrTjCbQEDZUeejELztfE9rkWcEAP4ndSpmSfRyevtjADLLTfi",
  "key22": "5nv6bdAPb9kg6AN86SS2qcMAzGj7TMkXqNGFEawiFxRQWReCAtYoGd5SARzhtq35jRqZut8x4bfTAMSS3g7BJKq9",
  "key23": "2fPAxpJ6f3We1NAb2RXd9pEdZ4qyU5dFtMEHh3VU1BVdmCedFrAQcf3FY3n46VhxjhhrutfGiioZdyiP5ZcpP6nf",
  "key24": "5ncG4x8GMsB4k119eNjphLvuisP2vzCGqfXJkjcoT8fbyYL3we8FjfXV52VGGqECMsC2Neh7bauJPkdR2Rs5JSxe",
  "key25": "5558D1JgQF4f1gfcbWK41dj61ZdkUKT3LANAUxaHo15TY2pgMu8x5PjeYHPuMGY2NkPUP58VKddDgvAN4oHyHBFT",
  "key26": "CWKGLetzX5V2K4ts9PWSzaWmxAyqMV1cses2bhiQfajLyPnR9RAwqBGxEYfgNgsRHh7NtWnCkLc6Xve9xpQQN1y",
  "key27": "27xgnzZ7jnmKpwYPxZZeoYHRXPbJsJnLCBkgGCKJ9awDK5yWL7xEM56ZQzZPEKpcmTnahHDMppmNFhSwXSib8QdR",
  "key28": "2BdukGPb6WKe5aeMZGUBLHgxyuWzo3b71r2pbA9jCuJCSNR8cEXc7M7wcp6jB1aEtUaJe131cZJizGJ8P9cEexMH",
  "key29": "2SmGVtSjaqUmErcRs1nqhtXcz2SLEjYZHrAwx7sMnxnB3NsjNfnuv3hvvU6uYDTViPmvLog19evdJHpTL1pX6vJA",
  "key30": "28McuXQm2LgpqFCcDWbjzgY8s4njSFh7vqXjDjBgyhKZPf9sEpM2r67Bk4oDMeAxKyxwAJZ7z7WYZ4wGKXKcqqzj",
  "key31": "5MsXwF2mTREuikF9GTHCBn9bJydAdbr6LmmTniG7xeY7npJWXkRZ9J65tzXcevRqaHnzvzXEJ3bNLcBKBmbJwFyw",
  "key32": "5YzMb7KvMorgzqgsCQC9bCkWzTjbfVWCCeXnfMNG8svewBfxTNDj7rSNKHJUEw9Edz3JMfEk5nxVwHQxqz7akANx",
  "key33": "3TVWFG6S4ijNCHUxA5KH9fC5vwZVtFggwKfXkjgCrq18jNR8C8Qro8T4rYU7qnDeSPqUwBJ5WMVQxg8Bqo5wEG1t",
  "key34": "3wHG1vYRiKqeLegLBnTWG4LV4GWghM6ZByrqMtydnKh5DvmXbiHtHjZenQ3Fa59hVowrfjAYMF59dSxaTKPjnueG",
  "key35": "4f4QwqSLbkPxB8igHueG3mANE2gSn9kyTmpBbA9GeddTyrRGZRodWyuDpf5WAMrjVi7rLoJkyv9vRiiZDnyLbjZA",
  "key36": "tGnA9Sz9NMDHv5h4D2QrznJ2MhZ1Xi9GVAsEPSwGZtgRRrqpqhLRb2XBiKWFvLFX668ScdCgxfEhTCSr7JcaEAL",
  "key37": "FLZwVRjueJWKnfZXbH9A5HNRK6z5J1CgwdqjgDkm6sJUJM1w9Y6yGwaoz36XFnp4wB4Xnqa2pqg2XgySyphgeqB",
  "key38": "3xCig8rvNRucUcBSG7t1HwQqCUydJKrRCqUYtvzRWcHsa17cg674KFJzLyaoXygNQoseejozqi3TuRfKJySAjr1n",
  "key39": "GoQfM9QzybegmoYSBwJo8TmgidVtm4ksyhABFikcmGLEsvF9nY64yrpTnKPFBduX8UspvNyQpCzHWifJC5Xbdgh",
  "key40": "4mBz5E29Qdd5ML3ytfoPgg8Qxsau8a9i7abY1NNaci68dQ8BGtPkMJGths6AmyAs8BdvsZ889QgHR3Nw3eT8Ygjf",
  "key41": "2AY3QxqEyfAWmjHUjunG9gyq3YMbWnwuNosaB6qPnZnS45MntFUK8mQXFzqueDh2uMtMa7GbkfSqjr7ztASf516V",
  "key42": "82A1xnWECYPZST4rBkEk69MDsydbs6TJcfQJEmTgGm986fF4ttrBN9d2AZd7mF1MPUfgrotqXNz1did6K7WRSfs",
  "key43": "5xBDF2SLZHiLp6zSejXDh8UjVpo92TuKE2MHLSrMEUHZKocRcDp821GCuqicbxEdMgPL1b3ESa71qv6PkLQ8ia1E",
  "key44": "2K6LS1rJUriMESWdgCWT36feYwxRBXxCTpXQ9zprNp3kdUsnrtzEhjeFDFm97Z46GjHk2aZjBkQpF6fWsWdW23AL",
  "key45": "3bkPQwrfsq4XyKJokNhgmPZjsvTDdxHcBm2PvvL9rGUjVoAuTj2c4cRR2tHGu1yDwoTo9eojaZ5kv35CpV44iukB",
  "key46": "3GzQmfJRojUT2TJ71UNxMrfTVhXAwKeE974ergNzRiL6X442277hLoo26c37ebKmiBi6ASBFoz5Bbif463gmtBqF",
  "key47": "4NKTKUwZUKCuZqiXGC55pLRXnqoUvrvZ5HJzZYZGXUdZ7o18FkhfWXZGeSCzUDBvMuks6AbsFKX3vQF1P5kYPuFR",
  "key48": "574yYTsjHq8fZv5R5mXW7m1QdmPcHmvCiWJG7ApAk5r8JAUoTywDz44WTnsAh9SpRh75sQhAoGcHhYR6cfakGMpz"
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
