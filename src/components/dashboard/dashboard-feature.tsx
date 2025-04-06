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
    "5WTSPYfEwxmviUXFraG61uJCKiZ2GP3GaSPguMsKmw7nrqVMqYK3J9cZPvBCz4gQLT6YqN4WEMX6Kum5wMr32PET"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21xFcz2bWRiT2gSJs51b1FMCpPJpz1zTzvaBsNKide2EuytwitKDqpzWCrarKgKHkNp9EbXjCFUWEtyZiBxxgHxd",
  "key1": "5mpjRF6K6X9jg5Gbi6v5cMwtvYEnwdUyBBx86vE7fo2B4k8QW6of4B52vSCBVmbioJegDeVHu5d6ysUX9wm9VRPF",
  "key2": "9ZWLpNhHMkFY7trMJePQaLZWuoFcgSs2jRXtRZn1x8xrxiwPDXShELi5wEa6hZvLeTpmwYExthM2t3hiMiBmJ8x",
  "key3": "4EsuCV9VfqUdtsvggyCxeAL6JptYtKRJvNse9W5nSEPTriZqLyB4Eb1JuCH1PNAKFFW6uz71ZRF3nC9vuSrDGNKE",
  "key4": "4yNrt1YKQPEJZEdV9c5qmA1UbCQynmroA9V2LWa4G9XvCePfyfQFCvbMRmkb6koncMrRKQaWn1WeAberiFHwEcEb",
  "key5": "67DPFL2tuvBDLZVpWEbp4C9MzPfKafbw9ayQGXDc92g3YGvvjVBamBBcojo6jBSrXm2eyjTb33sTFuv4PUzbpuAg",
  "key6": "2RYNhFCB2sh5ovigfieo39MxhYgEhoSicGLZaokxszs7UQVWGPWFCMnd729TkB8ZXrxV11YD8JUAUvaSXpiwNJD2",
  "key7": "JMVLabrezutPb3tDNoRbKAwqmLyoigADUvYWCLrhXBBVAUdDSThLuXwRZJiJWn8aEHfjs4sLwTDfD9yoFDz9FeV",
  "key8": "4FuLZTpbH8NEiDy4bXStkP8H52X16wF9GYawSASKHUSj1HDq74aqqjPnixTYAVNAFBCqwFoj3jEy75QoFiCqgNw5",
  "key9": "LCdsz6b6ygpoASPLx97uWmwi2sGgZVPBB9pgZ6kzxxu6TSEEPvfY7GKSDcKSyPnRkpQuP9Nis3ms3hrG6TDdvzr",
  "key10": "5miA5fQt6hfeKiRMXc7bqjydYqaFyuubW5uxgfBtGTFbSG1sVL3mU1KovnqwaCqqtVFuDxfvMYToWMtfGEk9rvxa",
  "key11": "3hfVP2RP9sAKWdCPqh2MQi1KkKTPapxhAJrYCQkYS9zRQuq8Tva8jcvU4GM6xkkuGwiY6Ff8nhYAuw8cWL1Up279",
  "key12": "42dhFjL6K7cGZGpp1E4FyWog3v3cGfs1QWqzYWgXgBUTbHcp6ZzM3sNheupCbNYVA8dsdtXrWiZj4UFntAoZgeJQ",
  "key13": "3T3TbQYusL4CjhfDVtBsGyJwCtMGXKcFvwJdDaWUyrJXpWiyTU3cAm3t44EGJNBG89dfWVkCyedsPY9ark7Swz1a",
  "key14": "4P3XGaCZ2gCvYs9xuD53iegsBnvGGLakzNfmhwRMyCsLNAp4MBaEns7f5HrL1bYQ2AWiLiN23S9VkrgfGmxv4jP7",
  "key15": "4i2Gn3ct1bm6ydXiCSyziW6usgdeyNGjc1KUk1RxiqteMLmUgPqGNHc6AGAgBfJxx414Ph4fkAUhWBgrXmD4BFNK",
  "key16": "mq6G8ptanAGutnf2ReUebDUabx5gzdVjhFUANXz1B8fpipkYftQ38CdCuw2YDKDb3M9jk87eryaxCWEhs7CSWyv",
  "key17": "4p9xWkTx57zCRRkAq6iqMijXAhunMF2kNtbUnYZULTk8i68Ketxc31TK4xrbRTFG3vmmaFCZJAdzuPpvTgp9Ucyo",
  "key18": "FhFTaoQkvsHARddUv9QbhnKkN6os18gVjy6KdKCQSVMJHzbdB3Vz5rcjYiv1CfqWbxnvy6K3T8UNJpfEnzzA8yV",
  "key19": "3Kmotvuk2qKZvWYvSrmw2iJqJGdVX3yNzBGMoExSxguD8JHt97MTnFh1niuxABUN7EUhMfPxZeAcoNfAVnrtmZTq",
  "key20": "4MK4aCTHGE1gmUJ9jAuTukfBvf2eQUMUzk3FUVWCPySHXsdDqwtYL1JygJ6AGdqrnbiqkZysJFSX946qCNRoXXtX",
  "key21": "2TCWNwSF6FJJMpQ9j5LMKdGzFVkR2YyGpXqnN7YszkhnH8DcNbantrNUKVwz5M8Ce8cR9zKJvLzLTvWkV1hBR6jJ",
  "key22": "CqBkgbnhim5ywmGKxt6dCoKVTDJtUXTXNX6CynhzfBGRBguXa9KSdsG5Niwk8YweM4Wq2ScaUQAYorST97C1NBV",
  "key23": "wn47TF5iVWjBwWnjh1tYpfdkaJEu3guRyerS4JbqDGcn3xwhAceWANB8Faogfx5VZTUJsWx1SMtbUXopejqpyHn",
  "key24": "36pyRqsRWoVqCbdU6Q2GsAmFvEb8iHHwHQiNvwCmU46wCPWm6hgT2ngimQGr4FczF2ZNppsE3X4TGJm4L9dHhHLD",
  "key25": "62HX6VBSYMpoeb3CCoynvR3Q3tW9o6b1ZWQyDRMcFvSS8nhA9o3Y4c9Yx6T3jw39SUwAmnUxmQSFAfbT2i3uKnM9"
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
