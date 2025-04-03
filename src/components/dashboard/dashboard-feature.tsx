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
    "4KMgQ2R5rcQBfTyXVmD7u7xjZbEwuzJwAMS5bwRj7mg2va5ZqqBxfGyJ1rL5vqG38cerBrK8RtfhUnXh9r2L2bz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "L2LT7k2ibE6Np8uuff8SG7Awjhj68PvvwW6QK1oRviGzJRbYnWhYFVgfbhCxRgNYX1EHLke4tfRA1RT3FiUEVfH",
  "key1": "PZok1jNV2CpfeUuoTXXw3cCT8d2XCbh83VZZAsv1HyxaDXdW6vQ37vdPMx3UQartXffzxcYN4hfg5g4YjAVSNtg",
  "key2": "4cEmfHVqgMBaJx76SQaUJHm9y5b9vwHgotyEr9BgCMZRDSQESWJTJzaFcmetpTAwWuTq4oZtjqtRdZBok6RuRjgV",
  "key3": "xJbF9QCr2AGEpUTqVb3CwCAZsTKbf8ry6NqEmxUJ2b7gGWrvwRjLc772Tsg3w25Wuak7Nr1Ly8URCZauHNFnMZx",
  "key4": "49tCXJzSw2C2oJwbpUuJRFnFsX1vToupbMLbHV37JBdm1fexXRdt6G3NMNMFYs2Pfjn3VW8hfCkKpqSoim1p4mJY",
  "key5": "2RjZHWaHCyAzLt72UMrngUyaguyruEsEf98fVghcMhcxbYdKz8WxGtwpTqLTN3LN2Kg7CptzX8qFpSLwWuMt3htp",
  "key6": "2ourxBFzqH3PbFh4HaztPNJ51MuMCPZNL7iXR5NgKUWXxyiy9RrHPMWnBpYZUUdpJkxfupJt9tUxh9mSLx51DU6y",
  "key7": "5qJqmpz5R1mcUnsaC45SegKKsZbTBX4h126V4tUxmdKwnf6Z448fmS7NnhKpFJpAncNmjLZpdtQnMHPRJRBHwZud",
  "key8": "4W4g9NhbN7MMA3bpymEzDcKx1PYs3iPYh6EToBriuT2aBfL3Ajqfhn5xb63N5331fnhMFh6tWqEcD2x6zZXjsvfp",
  "key9": "ZAE5hiBDwJNvZ18dVddwhLHvzqc6oM4sMbF1UJdrc8deZYr3J4qa7xAZUHADCQL1Ci2TRgaGwS398LgxVyAeqtY",
  "key10": "3CQp7T5qvCWayNCxDQzvdgyH4B9nqJ6kR1LjPUq3q5F4W9GWScgHMYR6tGjcoWzseRsmQYEiEneNfxSaChMmeU6k",
  "key11": "2h81GqjFoXkHgFVWC1q4dzXs3uxLi1F48THMjR5hMcVUugSxeBRWn46WhyioMJ6bjMjeYkSHn69ohvmGJphYpWz1",
  "key12": "4rrrZNPYWN2pTupUwrNMpVr8QZGyuPiWeBA16bzqNP4DHknLsk6LiuZUJsTMVeEgnaXp1sZ4ZcCz1QUaGDAAfTje",
  "key13": "5Bikq82k5rbBjwmbKbno7y8N7HmrMyk3p9MUqgf1ompSSxWazfw9AhDtykaRGdm56StsG5fqNnS4xLZzndfgosjz",
  "key14": "3e2ZVfjczaqtVnPxJRohq9AYu8Nphbr2ncMi5q2FXY2hPngbNyBQFiawrc6qyEbxLFbpL3dMcMjaYuWCJVcp59Ps",
  "key15": "9R2QJ47y9hn8jHDvSFMncMj77i4yz3kASaiKdxPpEA8H6eUJmE35cNT19c39nKe7W1EYkmqdAzEnkjP9zgiMLFG",
  "key16": "4V95ie7v5XSzZsKXbSRbc5FA8BZgzU2C8mxtcpQYcaKciVn8jGAUehQ9RnPxBS6gfx4fNNt9K5u58bhsCwU2qwf3",
  "key17": "2iyYPC1gGWsFw7wrJehMLC6Y7DwN6VTCpre9MZFsctVp1ktDCAUQttoXRmmf3s63dF7sWKJ3pnVBqbMEXXhc5yoQ",
  "key18": "5i9fhYULepcWUxsmeAaD74nwNJEzsnVPgSQoHo1u6bmtEZTCUU9zHGe56dk9wmyrggQ8XRkKQ1dEFr6vdv4vcsnQ",
  "key19": "p1ad91i8ya5GMFXRGNU6xCtpocxNCxfSXiVwX2ZrttU49nEF5rvYKr7DQB6k9DJTayHRwgMQSmdweK7EsQzp6dF",
  "key20": "2NaZvqT9axfGaRbPnjTcP3KJwvcMSStHsohh8XUa2gqcvMcnGKS8HzVATUJAUNTic7HbJAeucBbuaazGkXuW22eV",
  "key21": "5k4BeMuQyvq1tVzPBBzZ4gTryycmnREH6Q3AXrjVsHLdYYyCViUtoXvDPkYSGGdB3mbWQyD4oCkp8FubGFKFLuaW",
  "key22": "4QZhrtqGcBijre7tksiVgg5GBYPsBiPgHKo7Ghox3JaoNcbnC5YngJqvk6qTRSRkrXQmEWbkeuEcpDLRfWS74qoT",
  "key23": "2TUjEdANBEDGbipei99KBEcCW6sVswPgSm8BDRRBzfxMY8tSZYJnyhzTFwW99xiVfKrNuSeFQMG9R5J4oDBWZYiB",
  "key24": "5gGtQz9zvaTTwz9aCPc9SZQpFSCsjuhDNSSj2anDcU9QUYWudNMqkxj6ySe6aUERXsj8EvMzUTWsZkqCVrWj6AfK",
  "key25": "4PhEJbUHvbX9wKFuedVKz6QRaMjToRyKgzcC6xZS7sUyg5nWLwqc4uhRm2hgDB2mQKHcGgD2PygGAhmGUTesopqW",
  "key26": "5TRaDEmdYgszgbH22PwUbpXKMCvMooo1xrRmjNQaLVBrTB9wSTudkUBFepcYPUC5JP6wgMM39YxxzBwsURv8Me14",
  "key27": "245jdNLPomx5Hg1ssymrPLsvkhX3cEgAdz6QhfN5cqaTj8bSXJACjLxWTXUgfFMp7ojFh2aLtYQ5E57pzqAjgKAD",
  "key28": "4GGeUEHjDpL5sEtVhxmzAbBqDDqToNAMzNYwN2kf6CsrGwSqAWp9izE56fJY83jKWpuqYnPJ9SwETcYJE2NyLBWh",
  "key29": "27EfQPAUQjM5g8y1BN3atiUNQPnLyHfwwg4GYCwZSrWDCTeiyVjsDuXB5gjYR4FtLDNaNgSosaZDWH1abgyCRK2Z",
  "key30": "47jbJC9xvhzTJGqH7w65Gaua8nGdJS1HETW4Lz6dHmQQ9UWeZPiEfU2bKpie3wd7eUoxZRhQYz8HCptLh2a9L7dz",
  "key31": "5MgUwzCnT6yqVyd7JYxD8tSg68BSJ2rZBKZ9pbuZwZxAzJXr2ckc7cu26JRUNVUonhCW5RJu8MBLmm6L43RchgoV",
  "key32": "2dp4ZqxRopzAHWwWqkTVzbiztBxwUDu57TmaAFPEygtoqRCwfE4NK6ShTdYypxgprHKspyZ5xbcU8dTfscC6i2qW",
  "key33": "4Laa8QBa1JsJ592wf1zCfubfCZNNHbq5tPoQnoxgMgznFg27TpkB7xYres4smA2BSXLgA7vj14cs4pzr2QRtqF6Z",
  "key34": "3ZAGHc6GN6hYboEJMFrKokpS2RQd3vgjKQxJdegX8q6SbJNxhD4wyjKQc6nkbXGn6pWEf5yVQpQRCJykkgEeU1TG",
  "key35": "VNMHw5mxzfU2NpakFYMVVBrCiKbu63g6k6XrvXat3M98BvsR3wTz47micJB2jUcNvLmnv6kJmKAQbeQxf5Gwh1D",
  "key36": "3NLiStCDNMeyNPqLajj7MxoNsG9EASRHsaxM1AUtNb7dZF8azxD53isS97DtUUSTSQwVGGpMmM8vnnGtX8GA5FBv",
  "key37": "WH9NeSRbZS9k5aH4gJE293GWzHUx21jHbt5btSrqo5u4844fkeKsY5CgCVMD3UHHTSiq6VuXZYXLSbKcF6YtehN",
  "key38": "2UejJFAQkh5ZWHJy7oy5TZbx74tWPFq8UtYdPTfmpLTej7mfZDZRA5yMEKDtNTy7YmdCiPnN7Tn669KVKBYD2cbW",
  "key39": "4ZPSgyTUgCTuyXwQdv2ttxqLXV3coBQm8apDacw6wjnTKoJ28dPHm6CUGeRRYGtwRd3fwjexjwKuBRWhX26b9731",
  "key40": "5NzLGTtw9aZHaNf9iDtovuMB8eKdT1CSZSB44gJWq1Sy3vcorJPQ4ypgt3jt4s6JVUvhgpUf1apJRUJpoU7cEGu",
  "key41": "5RYS3tT95c47DvyGtzdHmgaxjz47tv7BcfQJRjrdUMXv1m3ZEYuNXSo2ooRwb99uYfR22j45gRQKKAcprLZFx3S8",
  "key42": "57M1VyTfDKhcSnUdrvmydPMj5wcx9Xiv7sh6RWwbPiEx1TMPy8U8dJc1gRyGFyEAcWgDJgMUjGLJVrdBXfoxjiUw",
  "key43": "4UYAod6GmzBMzQsEMFMpkAYmEF7o6hfpNuHGwrtKZWX41uTUL8FGRbijNztxsC1V1hYjySTDf5SxVqVxhRXJCsoD",
  "key44": "6Ys7P2vhYByYsKmspQBuyeHtk1NPpTs32Byx5BJeYnNWihGZt6byYBNsVAXSo4ahrDFkrmqpJg6ERxUNvZfYCUp"
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
