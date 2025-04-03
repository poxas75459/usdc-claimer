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
    "5hZB2b1C6ThebAzPQDVVLh1gMSMVshzxdS7fTaWTw1MGcvX8CzzznuL2MiPCBCBcK7BK8jTc3anK1caoYABrdXsd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qUsZJ7wAHKMuiBXBFvJYVAEw6nN1hFvtgVjt6HU49rwmfQFmzND2DkL2ZdtoFrq18JBeu1VJpS7xjQe1gSGXYwr",
  "key1": "5AizpMP8HzCLDyVoWPgmFsFpgTvuWMc7V66iioR6bEHbLzX8vTbtJnXcNjnzWEACxHXBXiD8XB6Eic2EhFKfL6Ws",
  "key2": "3QzRwZKwDUenjZH3iDbhkmgs5WSLfemzRBFoN1p3PPJTaorCqtshH67XZshZmEu1LLX9GkNaWefyr6RLHneTan21",
  "key3": "5ZZxtGirgVuXdQ58ixNWH1KNDSECmqndo4pzRjRtRpuwKRBXwRidDxADgU29qVfgEhRb4GPpxuy4ECvff4DTARdt",
  "key4": "2Tci8H6opNCBham1rvH1zodaqQR8bZUcq69DjwmsBCwUyFS3wmdUoT4KUWHreDDmQYJFRj6VadKkRDaAvvQXYxhx",
  "key5": "26d95JVudczSmgSBv6zpgj7ohwXkRcxU4yXypXA87FaNNadWBvzQTtswMNL1DEzWf4PoAiFGNHfU7hCUhTuo4nqX",
  "key6": "4UbTuaJ11LZKBBX4q9iDWwHRyAUqJ4efjrDHLg33N9mjvNeaW7AFdvAKQdEoAJL94gT12ig8ZGmBLfiBd8z1gvRB",
  "key7": "5vVeFrMXyBPEJaKAvso2YdCAfiJ2S9eMjJn5WjfDCnaL53s1Ecg1wBQ8bojNNxErn9ApPbem4Bvg3hosEQ5UBN8C",
  "key8": "5XBjsT9uGWW1yuki4Ej6GGBzt8CLd4wH26kYmLZLQgKZjTWjUPENRJrjmRdRgzSo9QJMJ4cZ1QCfjYoVs2JGT1dE",
  "key9": "5c3CKZRWQW3SUViYj1D8KANBZwLou5iWkTEYaijbzkndXfv388uUzNNiHpc4g9AaHLCQmhTC8XXsZJ3C9YEZB7up",
  "key10": "4VGaXRM3BTZbNK9HFNnW9ypUxpQWp78ertJkQ72uFGEPDaBpqc75YE6c38dBJdpyhfncJn6sGyFdk2Z14q5UecoZ",
  "key11": "4SbLy2rsw1FC1GEmsTu8EVQxumMj1zYEYpL2UJD5WvWmnM6yXcAo17kB1v4bwTouEAeQjtoLU9B8J4riyaPuy2C4",
  "key12": "3XW8ve9CBhrjCZtDji91PNYNEtzsuvq7zmrEr1dgRfzGjARr7M3mJ1xUy76pmWgfM3hCyLsHzUBxPdbVcehn8N56",
  "key13": "3Hff47S8fjreaPxP2DYFuMBmkeYmgjtbkfhYM3LDfjffNziYhJTHikzfDrQMwJ1M5XRPBS3F2kjV3T2vxkq3dqf8",
  "key14": "NnWaWmeCY6oQ5Wozg9uZY6AA7k5mhxxePSHRQuh37DB5FEnRwLEwafDqeDF8NsJUvXDtHLVn8wjUwAyP1VAnKwS",
  "key15": "35Ydvi5DKBpwnYFE7KSPbYK6zjJ92CnDxiwy8gFVN8X9sG8qZhAzhiUFaC11ft4E8aJmRpUeBhyQ5xkByvXMN2Un",
  "key16": "5VmHHGwoJaiLN1KaaNhR7wDaMixsr5Xj5reDjHpLTw2v2yFU7SczTgDzXaVGpJLDmSnLX4g1BavH7JnzSPcAnxU7",
  "key17": "jw68k4i1U53V2jshbVfWUVgdtyrQNV1qGBFnpwy5sif1sMV6gMqgJ2cR55JFjYj16tAjBwxMYSuvAVarPEBRAoM",
  "key18": "2ijtDJb5sYmHSZ9qCcCRnrKCBTpsL3i2SUKEvyyNU4SjFsdoxMraCuXPyQhJYM6qw1sE2qaSdHYWUxxihvuasuer",
  "key19": "3gtVsuJYttvhysMSr9Lh5BJh5fWhB9sj3ej7mm46xmUh8ouVgFHGxjn2dQB6dZE4FfQgZxKgUDPCYDfsHKRjHkFM",
  "key20": "4CL2mNTiRPybQTqckRMBA3iKf6TWy2itGzCa3MuWymTxLVsTcKMkvRexNLGMDxkaVjfLyDprVDNPgw65vKgNzr9j",
  "key21": "JaguHrGY76iyYRKSdvXuZPNEnXHRp4a4zphApAMGk1Dc8pVpWsFR4qAG3TBtJWCEWGwb5oN5MvCQe99qnVRgk3j",
  "key22": "BCsi8DdpCUg42MQFSyPWxomxyGJzsoZSQaG3KfdRCmfWZbfgwmriypCUwzWC96SKkTSeGRXk1K1ZaZL7iuFJPWY",
  "key23": "4cPaq48Jd1F8eHe3t4YsKD3afdfw4bzU86sRrWUvGHsSSR1juYbsv2Whds9TvHonqzyn83y6gS4yKeLK4G2UqmKd",
  "key24": "53Y8To1KSv5ZQrXCG7GibtV1tQ6uE4f762hVGpZXH6jsPb3GT4fENL92Y3LY1WW6oDFJjGgp4fNP4eebqm8fQxLh",
  "key25": "3LpgTorUtrYdSCrnxdv6egwRpE6FL3cuQHo1mbuepHZ9m6Pkx6RUpQn1kUYdDFctxMJRDM2BBoUd4DjYJmxf4X6z",
  "key26": "52ju2v9p7i5PxEqjSDRT1uFgwnBuLEFQGsUviMFhWeGRXLcWcPHqqFEHTer1uphttcNRJztmxuzQLj23fdrv3qTL",
  "key27": "4Fp2NKwNPDMr4hijnh75UBdkQ27KhwFnCUsnHrtZXUF6uExe1PRknirZCLpGwBUE9eC9oEEFUtz1LF9MjLpNiKYB",
  "key28": "2hmMaW2WbrEs9sGEaXXHePXqXdtqTw6uEMCinaoueDWHJpw9ZuDPs2wREF82m2rnA4j813qrjxZ6Hjbz11VstZhF",
  "key29": "pFT6jMWL5jun8gmAdTT8QT6eP4o45CHr7ovD9cP33xZz3Hu8MfagLzi8yzn3fBGqZiofQMbXQKT6biHjnsBAPAH",
  "key30": "4mh1hp1kWbD8tSsJj6CT28Vs27sCj6wU8vgAk3ivkenCPJpQa4avC7BNbsb54rEDrxqMBBdd3kgGKQpePttdXRGe",
  "key31": "25TNroYzcqndhjb6dqiQDp5NV2uHsJRPxsTd5KpziG9hfhF1RmZ4MJAAfWigFSyW6jugFjCN7RMdDbDWu8wZyfjT",
  "key32": "4jebt6ryEriphXLRUwMRHZfAmvJnPM2iYHbL5r1PTQsMN9KfzasDqTQCyoegX3WsHzCR8nvdeXYywvbPfokvci2v",
  "key33": "4KYvj4vj2y2nYnvy23zeMNsTWLrZwzhMcChBPJemA9WDJ5RuUXxvnyYQMfzgY6VGaJCxPxV1V7XajombHdnvdmws",
  "key34": "2L9EZQQ7BXDKN41chmb455FjK15upXtEHtwd31QTjP4uqpubCBKvfSkMBcRdcQR7XUfFGyvYHQZk7inzsTRat1yo",
  "key35": "3cxSwfmVR5ZuCLegJL2YMHvH7WcJVRzn8B5RkVfcJoJsbgWqHd1jHfRHtPDSNLZRaQhTs26znSRccjfW2nfmcc5G",
  "key36": "ZSzsrd3PKBvAY2x4vD3kmVdora6gAr32vphnMc3kNiNxwcNx52wab2y1HnjtLNvvULM3dfMxUrcMSGKkSqw9pxT",
  "key37": "3KrgpUiCgVvTzAw65DeMrNnnedsgDaQ9k8izoPyp9KhPhyYQomn9V5mTWRorKbNT6ZrSFRdP5XMFV6ZPKBMb4jmF",
  "key38": "49BFXKWbAyaFAtXDSNXc6cceW8cK67j4XGoZvazPB9vXcMBs1A1HJK3Gg7Vqy1cNZtkqJcj5c6DvFwNTkhHSF8LG",
  "key39": "5xssN396Ca7QBa82XkVjKcKZ3yZ5qkQNMkPKN577TnNt1CSfyZzxGv5UqbUiG8ECJVEq25z6pKKKqpPvAdWBhSpd",
  "key40": "29bBKehfJuuHaZUwcH4avAxKtQLWNXh9yr74Y12kGoMoErtN6vwjfKFBSmpTG5Vz5r4vyonHNbUkox1sAVKfbPU4",
  "key41": "2MfNcc13bNjJv7RB7Cg5LbCufqJD3YnEGeuvL3NbFEH9UWntnZ8X1sutaQfPcL3wUNWCYMpdWYzYgPxpTSRvaygW",
  "key42": "5Log5SMY7FaSEqzWNaJQCEHm1YRYGGayinmCcqDkWHdzH4TYz27SNkA8mGAFYaPxjaMGjzRPR8UEb5GDmjYsjqF6",
  "key43": "3aNL65fxswE6E5ifQsKP2BLGaxRRiYXTtDCCoXx8iDpsoVTGgmaNwATwZ2ZWXFhkzpLA9ozWL4j4hjxPAujJ5AYm"
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
