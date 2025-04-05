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
    "4DwiGq2G2c9W6p8vP8WfeiSmU9Yjn9xGjPtACyesvR3j9rqJdj1WheHc2rJMxow41yW8WM9S8d2ywKY3pAeh8rMH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XqjYHEHwhccxNgjbvuGbyFcKwwst4mctdtk5bGcQFSiPNoDuGRAfTubYmXspNooLGyFHMEtB9EugdWeisbyu9Xr",
  "key1": "3dXYuBQGDcTKt7j2aEL7aWJdS74CR92tETQvo1ELEJSHjD973ekgBQ4omsaxkbExtmFp9jwLRy5XzPuH5SS6AcsG",
  "key2": "3nbmnnYZVQ3B8LsRwY5z56sYhof7TMpYLLgeJxMNm5KpuMBeqdVfL6rmNdhSuuZKbshe1ZV3qWUfusVhNkoN8BUY",
  "key3": "48DNJThrNxAf9zxi5ayYxkXDAgTrrFnVbvgvomAKagvf1ffSdYMv5eoYsvyat1ZKHRFMyMtoESzYkV75ZH3pDAbE",
  "key4": "51kecMaJPdXzYYoRE1pwWY8eGcSXASjyqZzoP7TGSypraeiLm2NdAGN9BGwFJyJ7HrniT9bhDbRBaALE11sWheaV",
  "key5": "4Mg4Dg7qVrKvSoT6vc8UyhgkRBGbRpMH556GHzH6mdFRysKDX3XfABAr28sA7erCxdxAdAJ27SuQM8gPpdAeZNXG",
  "key6": "31Yc9YCjen22AfD6mBoY9jJP9nyZsN2myvGUgSGCYRKfd5hD8LsRnDnBH9FLqrj9bVmbCsTdk2vhFfqyeHYYQp4G",
  "key7": "c6Zh93AVDUP7kqufw2kHjU48GzoQosUMZq1Tjdvnwbfw2XpHKA1dBqVEW43N6EtdMBqza479johNVXr46h3x114",
  "key8": "s2gckoHaoKW7h8vbaUk9doPRqd2jcdRbf2srzAAC1JgMa8sC3EwJZN6T3yxhGkqFEk32AFNPWQskLG4eDWNniqg",
  "key9": "4Mn5E61bDuUGV9u6yRPjsJsqZaxg7JzCGWKH89DwdKBDZPzf23ADFcVidwJzHKSXtKz8XTSFDJxWbrmAJkdatSkL",
  "key10": "3RAvURvcKX9DX27VuNFiL8MVDWLVwTkcK5cJEztRotpWk4cwfxLTVn9ZtfGqks7eE4T33T63iikbGQjHxB1UpiN9",
  "key11": "3vk9sffPUzKiWedqheADNcaqkHrPpEHriiPZxMtbb3bDyaX5oLYD1HuQtRM3EqtSNgs4sQaWCccyVy3AS3ovbSRK",
  "key12": "64kCn3tVeWGzSZGERj3HFUjfcSm5p3sEn7CpaA6mbPhrNz3yXYfuvpfwLhJ7w8CigrfR5kjSgSGGUrnXkMwdwBVw",
  "key13": "5vySEydQDyo6CxtDiG9Atj2pMSykiZPQiDaHkRn8t7iKbwwEbFmAzmdkbys8tviZm9zMRVT17Lva4bmboVBBLNYP",
  "key14": "2oGwg1zuyZvtLieZxTFEc8b4MwPCHKih1fMihwp6R1wZTVH4uLGCwuWPXx4b6gUKtggp5AWpfgH3M85HcoKzWPtZ",
  "key15": "2SB4GyouRc2xoukGw5ypWWK8hGazsqmdzyoY7HJRmpvCCBwRsX2b4dyRzqZ5Z9EVBhAhQQ2TgR3RJtFRT7GVBH58",
  "key16": "UoFsnnS26XKswwey3PS6HjYTGXFJ2MXfw5ejayUPFrPzTHTjSEmdAqSetbwuLKmChdQCVoXspYkY8WL5bSKRSnp",
  "key17": "3YS4o8KHzV7rz124wfwpS7kbagLDKSHtDidq3t2vq6WLhk7xcVhvwyaFBJMV9tXxs3SPYuLBgCu2gGmxrihTc812",
  "key18": "2vJhQyggBG6r8SJCFRGQ48Zz1VhpGHwUaiQNAmD6sbpwoRgoDvZbFXxZ1U9RVU6r4UNaTPzU5NXZ4WAPN9kXa2E6",
  "key19": "bU74P4bTSPMdyM6avVFM3cJkGhn2F3mZcMWCHvUexRgNoGgQEYpucMSacVTJBskU6VDcQZv6FAEpbsYjQJxnQpL",
  "key20": "2LH8Z49Yd1bHvZXZEGWcchyNyTNaKCLPreTCFCftbhXwFrpzH5r5VP3gLDsVEnmqyiy3fF3eNrSBGm3gZEA5ENGD",
  "key21": "5JW4YGo7Ym6zMVaJyUeFGHJ2QvpK4UxncKo8EFZYXhzjHtYUdZiVuTsMfgLoRnANaffqZwyV9jdzaNJsjMUd6t1W",
  "key22": "3qAapui5BmskfQvVpSwe4MucWor9L6PKsTCbkhzfsodNFTmkqPvNC3RRbLhogrvZH8bome1LKxUMpYURQqBF9NPU",
  "key23": "FmuNJL5rM2NffmwUD4dMu5F8bWxdEHxHVSy1nkUb7yh1SHS6NYeUiPg8qWwCQvZAYAsdb3hKX4gMCRbtbKB1GXm",
  "key24": "3P9uf1RVi14F26gxUBehMruf46yXQfNiXfAmzDVdwjtJDu9odfepWTGaFhAJ8h1qSHdexvManBvMyautefBa4chw",
  "key25": "3LjVwWNfyxhmdhp1UgoTaUKJVkFkRebpRJQBGZRqVikjMVpoM28akT8idgf5nHr7b89UhnbUXCDKQgtDWcqqhmLf",
  "key26": "2UxaVKJFM3kQ1tBhD86K897T6zf3WiBAj2jc9NUKvWUoNkdabX3gB5HQZqZx9wF7HjXbex1hz6vSzX8EcCPmehbf",
  "key27": "64SEjKrw1GPMtAE9ajnZHqjTkbNB1fgx87paEAXSjc122HYiiYKtzq6i2khZVoK8Gu1VpJ3fLb4z1m65XrxpHqaK",
  "key28": "cbxekLngqxrEQKqHzFzRsthCTSNSdRNRdRHTGbCP9t6AJEpmooLXSHMyUffg6D1tzVLiigKbnHXGadhPu2eh2QF",
  "key29": "3uUhSm7LeJNHVrUJRtVwjtzrCxY8ST368MKkWeCCSv4eZEivSzWBE9cZi46ZMZj5fGFn6HPAW7V5Hr4DhCRqR9KX",
  "key30": "3fgUsdQNwmiaRxDQYwegCDusZ2ZNfWxSKN2GHkC6Svx7nsybETReLQCJXqxqi8WYHXqgtJYKQSMuvfL6eyxo8eRR",
  "key31": "2F1MTSVjQUFjh66tMnfZSDNmZiQmRWJ3rdKANduvsra4xbyuDQjCwWJ4YoEWu9tTSSQhTnuUPXAwR8pN5JywA7Gu",
  "key32": "2RdxpsA5KK89fMQayay2DQQn7UtQ5F1aqCg4d9KWgn77zENfWMjBL1tC48KhSd32rF3tAWiuSkQmBXxMnG5gvYw5",
  "key33": "s4F2C3yvBkxYw1GQ5LEugMAHGpHxJTRwFYUfBFSGUx68Np1PUr2eQqrmPd6uHHhGtF9axkc1MoJBaj4o9yNMpwX",
  "key34": "fg1LDUt7NXpzcsZzsak4Wy3epEuN7gpYBXQLqQaGPYvh5KtXfo1iZiCXXE1z9soHjJ1Xf3zNbrUkk69Sgo1RD3y",
  "key35": "HQJazH34sv9BesNbDQjaNGZjqKajBrDdTUzYUQi9tk32GvJ6MXCmZj44tDDxPDjDkKaQRirqshefMwMZ83fniX1",
  "key36": "2pqRzJLTQqiUphdCFcn94jQYNazoq3Eixa4m11v2SXwpUrMriEKQrrECPrAsU3mBmSD87vMfbZgUsd8dQLwiVeDL",
  "key37": "4ZzoHmkyr3vAYRnUFn3xKUENeMbxAGVgGMntJatM8DC9t28cRi1a9HeNPydPKTFaRgiZFkQBk8FMpsoue64tJ4wH"
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
