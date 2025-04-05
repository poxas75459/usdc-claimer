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
    "4BJbjtP9jUqDeV6XzW8yh4v9gLm116Rw8D3ppbr91yLaBN5yTx6inWksB3A7ZxuVpb2ET5GYALStditnxuyeULUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cCnrXX1F5rSefrVGEp8fSC8hWufjaf8T4EMRUXKjF5o7uBFN9vyUa6Y2WZCcHbWQjTy36FEVo3aeZVTiNF6MneK",
  "key1": "GUPe9mCMEW9eL2Y1XiLFUYDnpo1h69wgfpzXS73oq78NCxV5jATJ1G3ccnd73LyRudEZeycWpRqXTWjyRnX8GDw",
  "key2": "46xn8vrjzCzi9E8nY9mZjAtANNo4DHMx7FHqF3qMPV4gdNgE45EkLQLYKNrzkwTMHxoVXux2Mnnxj5KUWzGeeVT",
  "key3": "fCEh5z9fZwnRfpL4RUoCmEreqnEeAux9G2sFz1CPxZVnVBgjK381qWo4Dgjo1A7pYXnSACsKc1Fms27Mntyy3Sf",
  "key4": "5RE3RN8hDa4ktcNPfjWSRkpZFTxuLfw2Ma6QSjMEft7tJLJDA59bnAd9H9mLJZ3PAmR9AKfwBMvqKV77p7RRUq9V",
  "key5": "uArt1WDwVPQnR7nK6jCmphpT8BUt2csb148aYu9iXuToxk5VXg2K45xxRjHhVQAikU2zwuWvVjDxMdRSfgBvB8g",
  "key6": "43x9E1U6pTEb6PTqaRaZWQ1Ukgbf6W5dHVDKXyWrje9zj9c41AznCCQVHDqUohQw1LXmUe72dXSUD7m8wRhZwRKk",
  "key7": "5GpgwP3w4wjmQci5sW68fr4K8YDZLZjv24JrZx74bD5FUyatoTe7fk8pLypEzCaP4zmjXanJAFSqBWp3GdtDAnx4",
  "key8": "3jWkhRg3snbHPzqEpfEtmTQHcPHSfaSg2eiKmSvvBJ5uBuQ9c9C4aMQzbzBWBgDd8F5YiZj7BrNcScmcNnWCNWDq",
  "key9": "Y8sMMWp41psFVji7FRWY9r9ki4CkD4WzYV2uGhLN6m6FSP4mtT4CF2acDnzVW56gFkiZqCPUBdveQ8YfU3PPFQr",
  "key10": "5SR2HDrfQzHFnJcoPNuvn2VLKFXq6obxYM3bjsXwhtGcX3ikcC8LpzVH45LGwLKRJGUzQmRpGBtGUuEs2Lr64xDQ",
  "key11": "kK6ZsMNXtyeHsMbmWhbgH16RfHCq3hEwQYfExHaZqKjU9mqVJtCN8hnjNULbRaT5Ha9MPkcFuuZ7ncmqcn1Gecu",
  "key12": "2gDj6FnryFQ7anzaF53xWmujxdJTY5ggNh73tbDGYh5tFSHxK6GCLhttenBRejUTwuoXGF8nPy2PcmRuYoaGcTj5",
  "key13": "5pt4r6D6hCWCcEDSMrN2HE4NpsrUQhwfBYbojXrK2gp17HHL9sASxGSBit5RMQyGhEXwj9iasxFGSYMu3oePBcJu",
  "key14": "5AJUuHUn3XNwy2wL3m345zrQjcFr8Krh17mYkKDyfUZDog4DbtK7QBHtppJ56beyaAtfrB9Y6QG1ausviewbsriA",
  "key15": "jBfXupGU4X1kWR2YX8RdfdjeRuLNGAocGwAAxgZg6vm133k25g4Pco3i7UkMcN7UXurSYofvfvk7v1pRSLdj1JE",
  "key16": "29yW3sTgseELkeYCDLL5Coz58TVFzUcv1kQbLezJxPhJJyAxfXnr7YztyjTiVDifXx2LRDmez7NGAsjH6wPC2hw8",
  "key17": "3cMJWXxU493RGuAoQJ4JABm3MWENiLRJ3LbBdwSsCqXsMav5EHB3sT3ZdFoDxD3aPhjr8JsEHYFU4drURAgJztvY",
  "key18": "4DaUiJky3UXuBoCmNDjVsrpGC1CLiXeQ8d4n1i1FVpEgNTGNzPhduqR2998SM5VW7pWfKw7uCRdC8DkCynCfNp93",
  "key19": "3W4h1uGZvHGBfkRe6RX3X6KhSU3CZeYSimcNcdMr63ggFTp46TARgg4caUyvXRMH4AaEE6eVum6eKfSjPHih67iB",
  "key20": "31aGhUZGKANfsAH4WVumVeFewkYpxFCyvMR71E4Z779nYi91bmKhSaEdD7b6MFGXLfwYPTnbEBeCYoF3Z92kBgV2",
  "key21": "4Q56fZBsrNTprDvq98JgxGeKhJgEcBK1ftNcmuS79KQBz8yaMpH9QSiQfVrs2LrNE1E9qadFFnEttXWQ2Wxc12xH",
  "key22": "5VYYannNFL1LYHWjBswQKT7hpesGik5MMWqDCMVyRgaDcMGPDDPnPVigaizuu2QrQS4gXvcKRyFBGYcmBL5aQU27",
  "key23": "12874kW3DZywsy6zxKjvgC2yuNNEwFXs9UBFaV3tezgxrqaTXgw3D8rRzT5PPWAKN6oTm4iCGBirZFwpnCJUKcab",
  "key24": "PhDSoRWEYmrXbkf2h4EENmuW7AZKYUkTHoAhpRhYUfLjDLpojkQa91VxdL46omGKWdAgDJJzCBtdpRXstUGzQNq",
  "key25": "4J2FWx5rfmVh8cuWxQCNpvAQp8FFY9xf5oC9B68Szc52Q8siJAVyrskojYVD9en4yC7Z6jMemUoS9RQbMb1EjfUE",
  "key26": "4mEXHMvZPqgynJBDB2vSHqYJdHpDpEcnCcgKGKiW7udS56upxUmSE891f4hjdZqei76K3wAJ6jc2qMhLqwRXxetc"
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
