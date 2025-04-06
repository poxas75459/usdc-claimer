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
    "4wu8P3KQPiw8SeuvTMYd9K7td3k4hnnp7vyKKbAR4LrMHFHCFmTzcjUSqMHZ68QSdm12kAeqPi3yaL7XH45X2hQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kbroE6k8bvZBNbMuvaYMWTuh9GmKsLZxDKPBPcDFRS5bKzHPhqNm2izM6kW9KAVfNuz7gKj8KN6UG5P7KM71VeT",
  "key1": "FJdbeoZh4Wr84vz3kwrYVmVEnA3ptHoUFk1m6MkLPFQHJGLGjaFsEDSoYrHbLtxw7x2Z8nNoVzYJTJE86ws6utg",
  "key2": "38Ki74pkgYW429ZjeJdYWrq6Xo4gGkdg3C4stAecXTMqByJDy1JMVTkk9y3Fb9WvgQFAQR8iv4pH1qHhQKXcDUvG",
  "key3": "2aRECm8sWEKqfpoixGqPvmXaVjf9cNtCCU7nsULvkfkNdSd68HwRhXJmuS5kbwoa256KLYnijCpodYdEvYouQfUq",
  "key4": "3f8pfgSQ31kezzaHCpNYUtWJ8mrvgFnbbFTCeWd6udkq99xFU1tQem8TLdM49u5quv92dsTDrV1yaG29K9v1fW48",
  "key5": "4aTiVEwrXgvxdrQRfkzrVJW3YXGkk3qRY1rXpgvkmUkFx4p15dsCddKjupESu18rN7ihRqQmYyt2hcL3EoL4mSnn",
  "key6": "2aMR69VTABwerziXWxWG5bx9mqiqXJQuc4LmuKvYhxqZer7s1Hea1MGWDApMWAXkJTXdosGG3apgY4jz3N2zdjbQ",
  "key7": "2eRJokHgicqPP2eQGXrdAeuxz7oE66ZAst58fQNFwSJifRDLVwjiMDpfq1Jr2hThy3oY7zQNBW8xKbLAkXXwCL88",
  "key8": "55irqd3jodxS7wSeHPXbWy4gVqfSzKee81AFzQ5etQGb1SxxA44ZA5KdCHhXuSgYg5SppmMcmcrcm6TqgcM3Lpq6",
  "key9": "5AetLLQtPm4jWGweKK8hdV1jiAMVrM6cgTyd4ts4v5S4fiUE86TBopyEF5QVbFKyqwiWtpRuJCqUgnn9QyFv9jpp",
  "key10": "4K5AW7oMdWLefPKuGA8i2auWY5kGqKNEgwmVeoQSmYEC2mMMEcFyjeK5v2wEZtRRJnz2eLTTtcSmpuPU4YrHDeC",
  "key11": "5cCmMtcoQEqmM1b5s5LzgA3wiSPSKXLpBitAA4DqjrLEvhKpC2uGttZ6Z12bJkHwrGJBUuEF7QMMEL7j31ZZU6bp",
  "key12": "29huera9D46wzKZoVeLTiyhJfr1NdxegcbKfKyqkXdcBwNAhXtdTKHq77p49SxcLxP3xhBwQczQuChf5CtYTftq6",
  "key13": "4nSvEq3x9oxSiYibxjcRFscRWXgsRBXGQ7TCwHDuAb4Pa9z8p8MnGgngWiMpo31i3p2YtCuTqvyjmjZwYUWT1brx",
  "key14": "5UMNZHjVsBbSiJEX992zg9fnRyjHLcg8B2THLyXbymg7jmEqjNnHYKsZcsXhn7CbmXAD4EM3ujyBso6sBsgMcAxE",
  "key15": "53uCHrsCqVubFgYCdRFptErWeY4CPhPdWHFRhv3hJJ3QSizA57gg9PRK8BHDbjdienUaQjyXTzX7ThWEJCpFsJjZ",
  "key16": "hMkoHDFgHEPh422FJTeitDZip2EafnHCjka7GUSuqoya57xHFXmQSukkf3JxbPg3bEHTNJHLTGqmR7Pj4LP5qe5",
  "key17": "4oFEHjFMLx7A2JanV9LipYdqWRcMRT9jXciEv2cU3W8SFKSMugSk2nVJmHVCmKbQQdukiRMrA1MBhByKVJMxZL9T",
  "key18": "5sHoP5vySTsB6GEQY535VmtXsiQpmpWgpM94rgjx9kwPfDkUu4sNuxv72J7mKYKZTJTzsC7ZPSoXAKvHrDkggATo",
  "key19": "6PXqtxTH9J4gLwZ8i9o3QygjGpJCcwQcbHh5s6K7kgh3xcoXJUWe68FstATXVXCTS7ZphbqpJXnxVTgiRTxWsKZ",
  "key20": "47VHd1JGfy6eNAqxz39vMggthZpb8SqnZa3Yb4AcvDCLEJ6PMc8X8EhBDRCbJ6bH2wWyCMdi39xFisSPMELJvJwS",
  "key21": "3ikYKUuJp4WLPMfb1NhyD6JWjRTGMnk9BCBFUwmrrL5vfD4vGXRwfNgQz2SZYFCzvKQJYttu9VvAiUjSjweKWV3v",
  "key22": "4V92NkPH6Etyba2YHLLSLeQWGXhK78QfgzWAM4qt2zXmyQjrskjjES4jwAU18DQg6rRg35ZFHPKfBGFeP2pp2tT2",
  "key23": "wfXrR9juV4tiWaTvLVUeubgJDRo12uPzaagm2ZegAgwwUhP2pnyRtFh38SEzekEmkPW45AP56sCHEHpkYtz8psE",
  "key24": "3uwNrKcmvNJQbkecTRXBPY3q9u6fYNxLzZo5SXpU9MojCku6vezP4mTe6VTixEWqrtSb8LvkDFRESELRu48o4Lef",
  "key25": "3kXqVjutGUrJytSuDvCu6qEWpcyJ1xq37GmfAJEdEUEk5PtDRcewULxocWpak6KaNVJtqFWTBftfenfnpai24cpF",
  "key26": "51FjzGz1uHvk83sCmbEU7EPt3SkWwuzmSzo8NSvr5GuSxfi3e4gQMt4v6s3krofJuSZrvyo8iCSD3jABXjZPRcxz",
  "key27": "4gUhd9dFteF6jJ8eZqhNyMk1Vws7kcy7dr5RFewLoLFGupqoY6TkzP8kTDd3Qjhbnns2dEjt2DAM3yCbJh5xBorY",
  "key28": "2dtYTajoy1FAiFiBskmAviNRvUh54dBFHuJnpiDDyCrsYNxT8jWaR37esEFwtUaoVUcZ1Q9pfuYU2a3WGKz9qLaj",
  "key29": "55og8fWfETZEhMCwFjMo8HKcgLxjwQ9s723F4M85MjmgnpYuEvWiDK8FQETZmNCnmMM5SUpMbUSXqiqvFqUSCuWE",
  "key30": "mp5UQSXND6R95Xwvc1ESmCzB3c1KmeyjjnkKy77cm9qBQUqVnRP7ox8XXoHcz4Vcrm1ee853hHCFokksgm9fLao",
  "key31": "4wJKzVLakEDEJHLWPsonURUezdm1QbPsHH61AKqA1Au5uZAnDvsA6wMDRwEPAzzC5DrRtrkYTXtYVKjjdNkGhfSk",
  "key32": "So91Vc4VPhs9XC4bPrGYfU1GkTVu16pStPmVVzvmujE1kHcbem7gbHGT4oMjcJ16XJppMXEQ5xF9X2Wf3uQ87EX",
  "key33": "23TGJnsRZdaPUMgJauS3QubRDdwvzSiUBCUKJCf35M8KCSsGEpdfoBquSznorYY6izjzX1YGNJmqU5G9th9JKNJs",
  "key34": "sc88QwekkDo4Qhk3D6hxWsQ9Ubm7gamovwQkNzRLMpba2eLfbAAkkZGQYKwiYGy16nkzypcmZzTA6ZVTaj1Tbdz",
  "key35": "z8VKnjgf6p88qLEGa1aEFKXbFoiMEqJZz1uauAfGR4SaXveBrm5yCrjkiBc3pBEvGztFYgtJWbrpFUhjmmdPPyC",
  "key36": "2698xRhb11R48G1o9Yie77VTkDt4XHGNm3UeiJSn73ETzspGQ7g1w6JCaSb94HzjFK23hMBQ68zTEHRsDAkav3eX",
  "key37": "3o8oU2JPV8XYQtpJDjbFao4hjTkJsVsJLQhFg9F7PKKAMabiMoHZUGv6icfuDfnScXkmhB4mzS3a6a42he6X216v",
  "key38": "3zXwxsQs7p5ummxAskzYp4SVqeJmEXNMnSYde4z6oCETXVex6FCsruPa73UhKjumHwpw3FDNJFsL4dT4kafZdM9m",
  "key39": "41R2Y8nMBfxnZ6h5bswc1Dk51qPu6y2rELXR8TwddUXUFZpArmcHSRbC86kST3LvJBFgbFBtRHFgT7cbhpKPcwfV",
  "key40": "ntQ5LzhREMJPqPTrPKsFAkaxuv12DWAPKRBbrNcWnpKW1Hzh1MywWSdn2645VJCfHX6pBAvoKjZN1viV9HQjJ7i",
  "key41": "5UmgY2biHZ1au9zi6aHPQmYz3QKHffjPtPaFVVcXzy9PkvtBBF8ZLtQbbC6kQzfWLqGkifF4VYFSwMMjCWUCiLnN",
  "key42": "WeEEhJpjeAK9tykjHD2oXG7wzCwvDb2HZAYJhxgVEyUXFmj8wgNS1WwwRSJ9cGZgiovTwWhU5yCZ8nkabcq86hH"
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
