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
    "4fYa1E9TbyotuEqFRTcuw6vhS5YTrDK17JhmEdq1y6AC6NtomuofRwxZpmckDKtdxyTmsGMMzVya7kFNMJMnyw6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TEJyAvwBLpn3P89wUYY34fWtQSJPYr8Xv5AbgpUwjg35acVXxxTG8MNynMcigMiMFAoMhL9r4kihhX2cdZ4NqDL",
  "key1": "3GAsT9tr6mQoZ4k19SARgesmxLPZnTdiEQ5XPoSxmsXG6EEM4S7Vktmw16Zn7w551JrcH8XLBFTpBLGbTLM95Qrz",
  "key2": "4EfVzJPhRiyM5u16UNJzu58XHCkByQeFDNdH1fwqmVhXAzyJFSdirsmYWe1M7noqM9sm2TEzghr1g8zeBm5Unk1F",
  "key3": "5SpAeEpt2BoiWSmprAMHXhvTKaMeix78Gxnj5TcpCVWUCed1wqe1TsuZncP8iXwPBtetNY8QsunF6pn8rKpHuHNL",
  "key4": "5xfzBMhGFbR9FJwJWBkLSajVoyY5MGxF6RSqW9PYPVexTDZeL1jEozZsHxGfMZ9WUdh6dUeLgaWFcXu7cDT9qVP4",
  "key5": "45qZ9d7GpYpktZLfN9zG1Fw9qrk6qFaosEyE25cWn3G8eSGxVXtMhgzxcozLXqQkS9EiR5gw8hXSNqheyjVWWQAn",
  "key6": "htZwqHD87okMEReD3UetadNrEU4Rxwus2xDRxSMu9kGp7AAff6qftSyLHNSiWaHBfyFpjZwE11NnohcibPJpXur",
  "key7": "4tdSstg62x4CEqwtbvuxJs6mA4ZGYK7hr6Xs1AfeG4PXfDbzvTFUKE5oGqerzqbpejQywbRWF2kiVAqBrLLySF8n",
  "key8": "5a7zYpAiYPfgDsHP5gicL6FFvEbeU6pCE2c8zMrQwty3iFLQthetzm4wcAcHaG3zTXmcbfF817VentCRu1duACFy",
  "key9": "4jRccPxBpkvgweFtW71YksUAgJag7dJDr6DL5jxcbXDXfmtTGSBGY4T6ZCbHfMCXaCsUwi3AxeunM51TQcB2rQC1",
  "key10": "DYCQx95nddv6pYrY75FPC3XnLqJqxTHapBJgFzyR4qjTzjKatShNtGMUVH9ZHRq3Z7F7UbpgfSUgQSHySGzXodA",
  "key11": "3eDMNRqdmUqcxBujikLW62b9A9gziX48Cv7NFvevWo5gvBDkKVapJ1HNBdb26ogtTyw5f7dZEkJMGZyyiyxADyhA",
  "key12": "5vk1zfWHW31VQExLXpgx5GXevLK2aDAyuzbSEJm7uZzwX5kMoaK1Q2B8Wx5c5kmUUgjbisiAxL46Y9Q6SG6dXzHw",
  "key13": "hSXH3xb4146hzrFgiurHU6BJM5myHMH8N8He912Pyf18vUxiqeTK6v5rVy98uVrhW45MmaYW8R6jquiSNi4y7cz",
  "key14": "376oiv4WFQhm2jLs29jv2FhHukofx77q5pe5KzNLJ5TrQguNE6xkVZ6vx4ZT5h9vrKQ9FZHDD5V61M2MEUC7ByXe",
  "key15": "3B7wNWL76biEJ9MiWfdtsGgwi274Rx7U2wNiyyxpVuHBDo8ymiYV5htHHpKm46xA4H1RtqCgWda9HWsFr617fSFK",
  "key16": "59NYDrVsSgLik8SpjJt28NPwk5w8qTBMkv84Yu9ubz9i4QeBDe4BdMUbXEZMEXWqdQCqi2KyKedGNmHrggpLs7py",
  "key17": "2p2v8kcxJbhfzWpg61ckrNpTSGqavxLx6aNkJN1qGMYEip51hTGBbYxS5mwBfGsmRWkbyC3yhVWNM3VFT8mAgM3s",
  "key18": "2weAFprbcegpKPZgMUHL87FSv9bzTFZdmchrSLL3FSnsYmWVeraFtxJHbe7YyipVSVjK31MsWkci3cWYvjMWCPcy",
  "key19": "45eE3gokgSonEfHaDYcLxtdS6DVAh2wMtC427nboTpUKZmKpgnad2KJBCrX36di2yHgTBeopz95KDJPbwr5i2ESC",
  "key20": "3kyGwW6mH8zQYwkaQW9TERCy8q8AFWy3one8P83b1rwKiCwBxgb6Z5Yo8XK4KjicMqAyKo9WmdX6PAvAVMS7sFMt",
  "key21": "2xsUPt2tUJo7iBGcoFSnK1ctwtEEog8SqDptGQ7MfdLaWtaFUmhgHcXjUrhHqzKWsM3FqHN3ZqdiWiyc1ZHn15Yt",
  "key22": "4yRNd1KiokzvxYRyDwfnaNmWSsJGGcKeBCJm8iZCAqt7eGScDMTWQ5wCwSWz5RTmyN6EygVuWMFeVSy3kYq2hJp",
  "key23": "5z8w8GZmbp5T4P1fuDcLS6H8LS399ShrBHGpYscang9x3Dnh2gha2zga1JeASBrnFGPtXMgGDuiZjEeCaDADZF23",
  "key24": "5Wsx3yrMT2yJgeBbcMnmMnPmgHzFDdrwJKGupZULRQKNKrMxvzkuNjC2K8tkuWZe1Ug5VpWWSSy1t29Z7UrpUzUy",
  "key25": "CZjxTmxWNBi5xo5ZmHj4nXLUoJgLbSuuqHiDrgojpmy5K8kdtCBetSyPU98erfsyjYJrpX5ZZgGhYuhoeeEcie2",
  "key26": "5in3R95Q4MC5SyZQRpiD3vojyyssw7ZQKHsNoqvSBh96t2QMMSPAuULH4mCiPnqFKxTJqC1aixGGyTgULsar8gD",
  "key27": "2GBkYhXFZND4SeZjHvobcjTetqHXL66meaSFUAJ72AzqQB8hZiLzK3LjJXuSopMRF8uSW22rEWo9CzsmKRHdbUvD",
  "key28": "41ew4SpTcMakSe6xGsk7erq2HzCAuVZkAEL4pesExmvPFHhhMUNwFfKZLorzt9jtteqtgzt7gaLBPr9CGYJRsMMR",
  "key29": "2dWPTaYsogCCEqHwsLWesviDGpshpgDsP2ugFfqCugQAxZND19MPvKHboSByZQ4btR1MMafejdofeGFHEbj8cCuu",
  "key30": "HQCLUQ5bdUzuLkYUGckWvG8v71sDxosv2g3c3TXWKxTpwvmuQjhyGFDZ8K7QVwXQrnWyhPxUZTQUGrvZAdzH4w6",
  "key31": "4YKJLJt82uVAdsHM8kMgQ7NuVSnQne1ERjKriZxyDQn8Bn1HJ2v4S7iVUqrfq56XXirPsGb1E9yMnDstabR3B3wQ",
  "key32": "3QFkvnUX6NqffjRBWQT3UKYQEquRcRwSJ2JwTggKHG4GrcZzdMoJhKbLgzxV5dFX3m6wYzc6twyDM4HcBRKFquXA",
  "key33": "2jBd1z2Cu1GhRraPVeMneu8vxQBYt2sQb4PxTpxaY7m9H3vDafse4s1vGVwPzAhPRaRQwqHf7GY86Nty6zQTUSjV",
  "key34": "4XJdauhAPzGnc8EeDZf7eYNb42mbQ6G4AtYgeE54LAQ7GkKRyo129Zdoo4gggWcJdSq4wb7RGjroX1acUdyfrNiB",
  "key35": "5J2fszdrVu5CL1Nt1a3PVc5wNgCWtoPKqAWaVsbF2Z6VMasxoYL9hoMNFpcCPmWbjuivJmwkco1oyHnjDZCiCCde",
  "key36": "XhGfB6wKqGkge49qon1kFUVG3xKonHPLoRxshRdfKuVFwD7HDPifLWicK469aZp7PE9jQvsJDqVVSDbt3Jt9bGU",
  "key37": "Q6muUS5xAd6pbX2gvaMwaaDH3J84Pi1bZw9Sk4FSyt18KuVtiLn7gEyR875ya3v8n4JE8UnDXnP8ms4K8Fv4TxD",
  "key38": "5FizDzJb2LF3iuQdgDZntGFMeiHQ9D7LcgqpNXXBiu88YGutS3kTCBQVdpryF11Cd65Kzk422tSLui9dUbgYtzkS",
  "key39": "32uyc131Mvu4nz6NZCwMRzvqGrHggkuBwzyA1pAEnHXqfA9EhPEZoub3iRXHPxoBtJBKK6d96KWvEBd13H1eaQcJ",
  "key40": "4PxUqSyVY9r3ongzZ6GkV3AoBvHXQErMtRsJ1ozFGMDxy4d8BCnMQ2FFtateqPJd1rjT7c8sRnRiqmZQn7dSAzyX",
  "key41": "bi7kt4Cj91t8p25ybYcpGwm1S5EF69uYz1ebHq2rRkXbMKz8dq4ZtSEHLTSh7yqL3uWRuQ5xjioD8Lv54zvqBmJ",
  "key42": "5gSfVUKcQTfRhk9nBsDdNK8Ng6uWFGebMVBN3UudfSLsmYPKeJAA8obnZbbp6FDVK72m8MHkkyMq3NLvvGeaVozM",
  "key43": "4ygug89EQGHqv2dVRC7xyyRLLLFJSsNk3R6QqeUS9CDuDKqruuy1CPn9mqmwAHtCg3yMHm3PrPZbvU4AP3ynVP4k",
  "key44": "2oGXxBm6UoMj1yfCTUChVdE1h7APeqZyCpenWPLq59Vky3XoP9zZWntDzgkDzArSKqREvLiqgBd6C7svwykM5MTu",
  "key45": "5n7fPqjCz1zDh7DXqt2c3fvbydgVX73don7V87EjqRxuSw19ee9roM7BAYzEDLKVakXXxBhxZoDowbmYo69wAtq3",
  "key46": "2pALnJzbwxqHcjf4jLv5wqu5nLh5mYcgNcpjhQDnMoBBSNEm59WW4kNFHVoYbZ1skReH4bQ8MQhpYXcCowbN57mk",
  "key47": "4pQobgH9fLqrzue6LiJVU6qTu1HCnMVTFf3eF82jDVLsvVSUcQ3JFNnYGPL8rD2kg52a1ogVoLZJSqUdQM9rsQMJ",
  "key48": "M7ecoUs7vxnTDeccjBZzFKqASVmUk39SjmjE5ED62g9CvsbGDqrhD48LZFNCGESPMkkJqL1M7nXxBZki5BUVYug"
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
