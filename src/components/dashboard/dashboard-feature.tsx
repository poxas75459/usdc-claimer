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
    "2yWBrZNiMn5qonMaYccTM56iWKJ27asLQz1MXXMcQ9WCCv5GKU812g6KNHDUDmeptJbjDkujrqVz1ZFTrEMrNPm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63dcsrupwDULEoQNL5RwPKt39AmXgHd9yQQoLussCf42yfK1LKVbWVTAinEVmLnzn9qwwxMrPqoLjJUYQxcbCDkY",
  "key1": "2SjDdQD2BLFRkzPDNPFD7kyr4QpFotsSKEE7nzUcs7dkox1Cg3HcU6cYCSz48So7BimqZCGNXDx1Ch1458MTwCcH",
  "key2": "pxRWHsBqabDoM4gJmNMZFR53u5a2VX3WnK8cwS75T3xnKans7k3tTLB5J4iMtzf8TwUWSJkiSCpLE36E3QNTB1y",
  "key3": "2b5VLhRAvTR2wMZieqgDKV3UF9mYaazqdQpNw8fUnc7NERTQcZBEKT3mV2ruGNF9xRT7hijzgzg3UTeks6gpPZ8L",
  "key4": "4gyAQgazCWuk7rVS5b34P8EN8cWH6JnL7NmQMJeu6xbwpqUdCwciYjyPAjJgdoxAJCgiaSm1scogi6bYg8Uz9DsX",
  "key5": "3xkFdfzc2SnZNSYrKT6wKANhirG1am8DiSBqmCyMNiZDCcBumy57v3nj11TpQ353c1FHLP5LUHFR6zfQjG1vS4my",
  "key6": "3WQ1nUhZ4kuUJGn2iAVsVSe3PNJXNPXKHtpStynB3Tr4aRiy3QcSfmxCAMLKrjFUJnV9GERXpcauPKKcyLpcqHnG",
  "key7": "3KbnkAR4DCXfCGpUqLX3sKgwvFSaNCrALHqDfLD6pBgKattZQkytxE83VEwMPYBZ83YHxW3RCZKub657j6qme9Pe",
  "key8": "5cAMLKUaNwZyLsvcTxoCvaQpt78Lw5HWyfX2HNvooNCFc2evjr9NnMqCfrnaqPCePhCFeyvB8P3gams4Ffq4AnvL",
  "key9": "xdFh6ykBdiNKoG3ddwyK2zETXV7AMj1r6RpkwDBDVfE6ugHTtVbybHti9wE2xxNQ71acJpDkW9AhkyQM9wjydKG",
  "key10": "2oo1Y1d6X9Ru7DecpJe9KHSxTTZURwzK5YrPjDFndNGGp9epLh3DvPnXYiTKtHBQWZRziCaHoCTrfbNZSWw4sbrZ",
  "key11": "3eHbBaGgKMxj8KekGzSdBMxwTaufytXu6JnRGD847zNAHEGPpdPkMW3KR1kGz9PHEfyg9zkmmKGufi7WM5NZ9Z7b",
  "key12": "3zpCQdodGf81rxJEy8nL3rEa8Qxz7SeHBJKss1yctKFPPaL2vcde4u872DSMxc6DEky5JGPtFqG4uwr2MT7zPWmd",
  "key13": "3EZbrpdU96uRbzHTb44YGmPq6wE78kn5DEi45H3sEFxbM58Dwo8xx96D3Afnmv9Ag6MYrDG5pyBJttDsYmzs5tRG",
  "key14": "4tnFh6BPcTRYAQDu5bnUYpvzsxApLpg2a98SpyUCjwwnetRRSCPVkTy1EXj4BJ3uik6KQgM9HfL3NHWNkaUZDZaY",
  "key15": "3DhPpKUWjGYXYNQqi2C6s7ReP5EwCyUBhVnkJcnFFqrT1KUMsX2VQ3LopRv1DNuYosDVEuNiFCEtf7HMk54kdQaJ",
  "key16": "2cENs6Hfm2DRLGiDZ8MKX262B4vToJWntbGAWZk6wNjp18ESGvS3EMgqwdK8GSJfAKPcNvRuSZrWqL75DvRR3MYm",
  "key17": "2zYPqBE8eD17L9WUuwaPDQKT8w5iCCw7YKcG3ckxdny6gJwCmE3NX4V5LxD6v8efuaAbKVRhA6oaJiFGhFpvFrsP",
  "key18": "5tahoFLvMxygZGJbp49oqTpviuNb67q7AQatdjci1XHv9vkXxnmahFQJ4v6cEJZSeCBFfeZ2xN4DKPx85tNfq2SB",
  "key19": "3fAPcvXqqdkSAzERUNkxN3sEZcSTjjNX3x6FD9baWRogFUcpg8nU9YsHyafsBJjFATbK5AYXgsi3DZpGiUbQaSyH",
  "key20": "2czhY994xH9MuL7UZJHvFVuZbbPj4KhNFMWKbhNy9CnBRGqLSFWoRFvrfQJPsM4d7VvJCwUdtmuRUrVoKLR4tExm",
  "key21": "F6zmHBWBou6YxGuuoqwp6KLi7uaBwQrtSQGYtmsgdeRjVBkdJC3shaJZWdEWrRvv2Fg6Bn3FjJtZwwb64TrFBzE",
  "key22": "4kgnC8ySiG26PPSDJctjoSR4XbCrgVqaSX44XFcFrHK7ByHCSvB7XK7LwZW5dmWVss8vD4qniZGMDcXLCcPyVwM",
  "key23": "39GBDLCUTLET25WK5Ds55srAvNsM55hRUWmFfwrmV53XdTKAGPiHVrKAhDsuzYpWsk7Ndw4xer3EhaUPEZGVEjgA",
  "key24": "4G7HwT5bmTx5uh49PTQJcRN8QsCHnuqVThUkeQjjfKkkHUDgxGHQxEhGUehUY6eMBeULSxYY3QVesHz3n3w1ju2L",
  "key25": "A4WAiBQu6EHKoBbcRrPWhsLVMHYXbx9GeHvyHz6U2pf31YuzMgRPyZPQ3oQaoRU91Y17RZpzR3BzV5Tdx9e4uzf",
  "key26": "2N7HMjg3uceecRgoLbYidyFnnHjNXe8NMLFCvFeWZRCTZdphCib4SV8BNcFDg8sNY5WfDEAjsqMUEmRUqGerZWaC",
  "key27": "2if3puisqaYbk8EfYqwNz373RuxidREAFPYB9Q8d6t5y5nb5qau1go4XqS4oAKgjf7LftoRhGtojTQzB4ESBDULv",
  "key28": "2jSxMsoJcgKRtqjeGuddoJxdLDNVcBf8upWjXHFZPiyU7LBNRDiPVZQqUW5fwiTheQ89XaWuuNEQFYbjNyQy9rPw",
  "key29": "4tA14K9jHvcukxfRBfpNstmRpfzJt8GPJFBQ9GdHusCYjHgBifGCbkoG6u4viuwVQSuvku4Vza6EFBhnGDdW1iCf",
  "key30": "3jQvZqwyxDhgwRmKFrEPp5VnvWrRuBG5kTvabE99qTtjasfLivFRNi2nuR1UtjLabrmwRRtX7UgDNuJ8x86MC5x7",
  "key31": "5MPWqv68XiwrnVU4HAAGevwBWpkNNf7KMb76anaCB1vFRnMMGAbeMgsDgZqHLfbR5VGp1ShMFL1MPsrXpV1v1PGE",
  "key32": "3Qpddav3muE7JzthjGVN3UEW7U1NRu6nDD5EpUPLNJXm17is2N21e3VdK7KXit61UBFmCb4qzQaMve4VTYduBwSP",
  "key33": "kkUy4JF4S62HsaTaCmSKFoF7owi23h3ueFWwtCWQ6kQMBejJb1VP2oJb1ipLrimECR4JtmG53C5V2wjzzFCJSKQ",
  "key34": "4bcHcPWri89ZBb1n4oFYeuHi5f7CEwFmZwJCKWSw8pYuf4P99P45WFXpwnZJ4wqQWJFz9i5SWaAbDWi7BGJm1iuB",
  "key35": "2kwYpYoqa7MTAkp47CYiKxkQzN8T6nMDcfFLXMTqskPpGAdFwTfScFJqe7QLq5uSR5GRR7EABVgXT6bJYZ4oWnN6",
  "key36": "42SfQQnGcXXts49ZCz669e4trhborFQ9tWvnPunfwhW3v9vowuFtr5NyGtmNTUhZeSbmwWN6YDRZyVNe53BWeNM1",
  "key37": "5h9PxSKWJLm6u33NeVN5idq8z9ScGjaJeDsUYvjcxbGBkSS5wCiq2u1Zigm7mZ3ajCXmxB7vjLohFiPjFidAywn",
  "key38": "obk3qccDkbSZTjt1zfjhmYMaZ3SVsqj2tEjvCHr4zM2EYiEHiMj7Ewqh1ggfDpWd9tGHQRR8SLtJDCXJtmzqxHW",
  "key39": "2kGtZjwjH3T2n7zxAQbMSq9j3MQyNW2u63Hfv8ymEzkZDKxCgtiCo7pbWaXy1DYwRrtwDDvtd4bbx7HnfG2XaAtS",
  "key40": "4f8NFqo7vodeqZ7MFoZfst92vAHpWaVeckAsJLMQxJvJPvbS63jgoWXWALTTGf4eTSKnvA93zMrLrWSu2Et6XZ3D",
  "key41": "5BARP6K96k4R8uWv8chkhkURL8PNp55gC3inV6u1o6YEVk2miSmsymbDW5E8otKNy1cR6ncByuc5i5gnuEK5X77N"
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
