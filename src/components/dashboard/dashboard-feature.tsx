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
    "2eiebPeBdcDHBCgFLRViuu76XSW2pYfCurhNkUFyK4zzjoZMpLZfmsE7etmbeo8RpBiXsM87Td3HWxwwy53RSkNn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52Es28H8tWhHPQG2X2vVpadu4vi8FWQqHDCqQcAouxyWanDxb3Qzzd7Hv7hSE2asMrzp5mqajL63wpJrASirUEUx",
  "key1": "3mngm9pKvB8QTjYdsF87uLZkUS5qHyqAzdEfzq3gWYx7BVQzubCJ3tjc3AnBZzbAUkP6dEysqNBRT8adbQszDA4R",
  "key2": "3tVksfXQXkEwNV4xbPQU8Q1DDo8kBnPnQGJX9Ji5ETgQtjvdDSjkr9einTmgBqLpN2YQMPsUCuUCUiabXuZwA2o3",
  "key3": "5bkzmwE6anHQLEomxvBgTaoMV2qqZ76a14JBCYxqBMQrdTY7TimbjFaG9SbdR3r1Ko2WD4EuekWYzM79nWjBEFyH",
  "key4": "5nc2S2TxNAafr8x8Zm2aaP94ZzkDwUw7XniZbParKNV8ugnDgiNFfRwdvvdgRbKEPnsoQ2vbLAHuW6Y8eo8VLpe",
  "key5": "5qocyNofdoNWz97fk2qCWimgsazsnonvBCLaVXYEbQVL1xQhyx2a1vmaMED8Gs3T3txVMCRRWDMt8bik1vVGY5Rn",
  "key6": "2pByNf7DpJAj81JwTguZWPQisD5nQAHskVArGkgJbb8tpSVvKboxR53asE5E5dsRzzDN8ZuQsKjqELozLD3ca1M",
  "key7": "5FmjTA3AnPsgNqNMSZGdj2DSk67j2TYMxaoPj26WxSq3Ps62vRvDotACsenDe5Qca3qzfsP6CoDpm7dgpTfiDFyr",
  "key8": "4nbTezJNzrU9RRhWRQFaF1ejSBXRsu7g2YgMzpSjSpKBhtnsZjkhgWLoUjz4n3Aq2N9sfzy1DvhvaxyGjY5nkW8",
  "key9": "eoMZjv7X6cTZY3eXXCtECKBCv7qxQYdSHDo5ogW9grJDJKPJ5jXATNS7p6oWYbzgctWLXTFMTRVVLko9LYREu8v",
  "key10": "5JXxvmu5NMv5chY9vjrdWjdsUaGdn6TxHgHEqqtXua4ZwgQSXbzJ1e31Q2477AtdAJSaQWNG6mWDoiVA7M8AovVH",
  "key11": "4FM47CPHwFtJUQg7gUvkAV8VccoUWKdKeyXqHurF3dqiCUXktrN4GGTpG8aVGsuNKCZ7jZwKVvMJuZEmzQrN7WmQ",
  "key12": "4iVRGMrMNZegBvqQUBVqpU5WhwLZCQMJAoNs9riFgHrSQcNRde71NeKm3MZMxWH5vaSysR5ZtLwx5X6sasmrV689",
  "key13": "5oqRskHRdnVKvew9JXxEYz2aK1NFCuNfnK9JmtJ5Zx5NxvLWdzmc7XULcpyyLPdMditvnA2p1ZFxiq2D4DsGyM57",
  "key14": "2xKvZyPhD9HGJJP782SFpLPXdPydgm5At5EGLPhPdmDR9opm19VTP9YK5RSy96pmLYJgELyFvqzJ9Tn4SPvo6LuB",
  "key15": "4gt7H1VHUS74JKLd3UTTHJr6qufVXsnyDuP7aqbnspBSWxYcPnJBCeS6pKfL1hE5HcefZxzs6bhXcAXJrHA51kxE",
  "key16": "VsbEVWwMge2vxY6FJU4sxFL9mpHEscQwMkMRcVovqrqitmUBZe5XYdJU6BXNGUXUeU9ucb6hBndCf7ixsJGJWrt",
  "key17": "4BE51TTnzi1gEGReNbnAUoNvVDr5MghJzZK3V2F5VmyZTf9ajfBHt4KSBLxuqZ3ZABQgTeGZDjJ4wgB1PNshJK5D",
  "key18": "3RZTERPq4DxAq18y6cXy16kKafJRD5r4zNj4hCsnY8biatnqMVGGUhbxfza9egNMwPJ5LtaY8YJSZgLWKKUSLKZy",
  "key19": "2goczScZKyFndZGc7tTMqEdjzDtzpEFHvMHA7NkV8qphgjTbfUGbSb948mJGPczw1vn25JrdzBnDkajbpKWPh79C",
  "key20": "5VSCJensRrYFXm4BDE6Y43uFiqxqWmBicoHU97AQ3PVWUzDKXPx1HrKpsXrRiV22WRfQmQMxELmvYz3atwCB7Tyz",
  "key21": "5CLUXGGzodRMCgQtd9VXVh9Zo4REVaVLxaBPkXNUoq3uML2TKGLG5Z7kr64n2oQVZZDLtsks85zSAPwJN6MMWjZk",
  "key22": "Bk6XzZ9rfA4EuB43Uzq4w3ZVqjiawpHeqbJCTT4QVaFRxKdn1bXdEqjMqBWkWKyAE6XBiHiebExTHqSfuZnxoj3",
  "key23": "2yrKRHXCKfpZYivFEfPWtrMJX8QmbaH6ASnbz5MdUb56qu8GrNWuFgYuHgfHekZvxo1xTxKVbUT3hWqzJQxHk3X4",
  "key24": "54ftaCmP2VPSVzYGt3szZQ1S6xyxifGztda8CAB5Sub271XU5DxgoypA1yKCDdnLJeMbtwS7aKz7yyeTxv9rZ9sj",
  "key25": "5GxjsBH4sd8iDgxnXqFoVpms3TBoAKPVKAjYhqEJc1EuKDcR1wbzifnQoC2PeYsVD7PPGqedNK4eGWNA44aVxEue",
  "key26": "9kVCSjGdeSewZi5qo9eUy6xJCP8iFbNfbY6w19rBKtKP1ioPtsicwRN9pRjvF7tM1ex81HhJWy6LyTD8AbCM168",
  "key27": "27mcx4CyMT2kTFyNfPisL4Cio9A1hEEFEnD9zDdmdrmRwTqvdjdqpefg6aHBYPBF7sHpzYDwjiGFeR9PVHnv78Kx",
  "key28": "2TH5257wJS16BYtD3TYdJvBHuLJJsm5NuWXYY9cLZgHrfZV7AQsqYQRZDLTyeBhzBZck4t1LLFvk3rdMVwyvqez2",
  "key29": "5pamQMP88z4yM2skiksK1VRon5yMtHZJfqnWpwnqVf3XcZsNHhC5qBLf2S3xwZ5RB1KeXQfLZ3C9ZG7M6MBzn99s",
  "key30": "28hhHsRP7ZEkdrVCDnei3YYWxoKh99mojtwTnUwhJWDK7Fw7d3R1kspfLPwmMHL4uN5RmECApREYSSwno1LPocF6",
  "key31": "2gc1Tkj1kV85ZFnoZGVVE2zks1dT82P5Zig4SRpbZg9cDF8PL3VZjDmeQC6WthnLst85RrPFFHkqjWBJYFQRhnZR",
  "key32": "3GDC37SQc3D42HC4ShzQLx88PrASyjjV9JsySV9r3VQS4BuNjhBV8tANUToyBws6UBAyuyqUXB9qvoaH1D5afbTn",
  "key33": "2nRkL7ccjKBWqSJa5GEm2y9hh7JqyEgumw5vgAapLpxMAFiAVSAJjBLwBrgCyWUz27v8sUu4xAUsZkgTWvp1naJ3",
  "key34": "yKxQRNo4SWs17AWvxJ4MHcE5nZE1JH9qtui5SaE5wxXDwebeTG79GcmBrtymf4sfSwtPFQnKVUhCsqF5okrudDQ",
  "key35": "2hVcyoJtZKUkG8RW8KzL5Ct86F38mrkcL5CbapCdLJcUrCX96YqVbUAnkP9b2rqNc9qGJ2fyQpkkPDDEyoUW1yaa",
  "key36": "5MoUTjBm2PhFmCs7kJJLxbivQa4Bs7FK99BUq8HGxqicKycFxCZSGJQY3SRWUF7T4AW8h7gcQtoBFxc1nbPEXPxG",
  "key37": "5nLA99hWJweDVK6hHUZXGngQjauqZAsBEx4hW45M6NmKmEGB1m3opTwMY6R4HmoztckLLc2mba2XXGAFuVt9Yy5c",
  "key38": "3AVYLvEGienDEuRmrcSnUK4d4kZSm6yq5iKCtsUcKZ5SWreXZ2Kkg3r18Jv9Cj1eUnCEZc47pxZz5S97jphn3msQ",
  "key39": "25K1QTRyE4Duqwsw5MTjYPWu6qCZXCETY8x6bQTXrJDBerCBbynqvJD974emwQGV519FAqiVuAbTUHXQvUeYmJPK",
  "key40": "4EyWruwJE92sZKCoy7o9AKoteEiVDC93V5abiwaixuZLGUWtKdurGcf5sypZ2kwfVe1K5BHU19thGCQEZv7BKjzG",
  "key41": "43j4nY82VGs6VzgbJTGiZPL1LKE1HUBddTzeMk6jN2TcQ9xaGk8DDhmAiN3njPDvZZoQH2AfSYgU2Vq5rTajBR4y",
  "key42": "5SHKUk2VXraM7m4ueCogbYs5VhcWVLtPhZpAJVGHBEr5AXgBFX8zCcMt6KR5dXN6bp132QWykxsTGf1cu8ihtBPK",
  "key43": "XBEUtuf8NoLFuEpmgd4AXgTShjygZGm4XHvyr1FPccaLF5r9HYhrwhP4uPCqJaqqWcBSUZJrnv2NNDjXVpSaw77",
  "key44": "ZmJ3oUhLdYAqD2pcdGjbR7uorUwomJpqGFRxSi4oHXAyGPBcdT4VM88ScRL124VoUNNpBG8JYBX6gyXd7NjoV44"
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
