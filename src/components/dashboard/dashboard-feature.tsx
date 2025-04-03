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
    "4xhFDxFw2QtYN3W7Js79riMFaKDxcvQfR4ciyBiW6ajCdC6DSxPtRsc8NcgE6Hd7NZnhUu4okjdnhpSdU2LbrFia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5C4iW5bavtJgY8tspF2RsF22STzWoxNMpFq5PGms1rrwKqvgBAYXT3vbjEQxqUevc2Dnjn2sErmLuTaA4gnUq4ak",
  "key1": "2bGLBrXwQTyMpmD5Xv2Wf3HjBBPJS9Kq8zi7ZfVsKipazf9nYJqd8HGNiDM5tSsAt6UMeVzRVJgW4VDBdq7fC3Hm",
  "key2": "4yX4nvKUNNDrEqbL1atDQMdiZbfSQFwpvAy2KUw2uiqVJP6HrvjQWqP43qdQt33yXqMr7k2wkYEBgZfZLkfUMnkb",
  "key3": "dzFLwx6MfioFuGxXUr2VHDY1HzGshP8SBLBu9Hr6pASRkEeCP9PcDbg9vmRceX9mxPFP8pYDsbCovFbpo5gnR8d",
  "key4": "3cxM8QYetYMBt6iK8s6WwxZ6Q2f2DatPVrm66vBYSPxnxWvASG7QawHvDYa5S8VmZLzTAS3QR1xB8KuoivFtpZAJ",
  "key5": "Wrz8snv8wi6df11dDp44rqr2xPcaQwmFJgMQKLmZECkyPfj4Krx3pJh1NgoyveugDyUREvN7hsBsmocKsMig7mJ",
  "key6": "29qcA5MnkCkFCd1yJLmQAV9tZX6YeEZoCiTC3cCGQCkMTuBcxpephAZNbmfj3ipTtQaUaFK5Utf8MwCy7iTnPRAt",
  "key7": "3RBo7Ac33sxsp4K5mmFCxMXXJ3cAvUpZy9UzXpYJUcMiF7stcew1MkrvqL4uodwRMXqKYQRDqgFSuAH2XdZXKvjf",
  "key8": "5HNvzQnoKTLMbivAigjPG6yeb62u1vmDyErbS2PwssroK9gCquuMGrukMFZ7HbDtJBphrKes7kB8BctcMu7o1KJ4",
  "key9": "4d4FwMy4eA4CvrzgeGoQE6tv4Qotmz2o1cMscuPP7LxRsEZRvGdAtfeZUfCi93NSBgaTXex2c5ahkooti5g2j3yX",
  "key10": "o4yG4RZvaKS5ja5B6it58VWdSJujZQgs21AB2T932zmFMDrJAfSyU198FVbZBdLHxXAuzK28CcRBK7bGNZ3aV5E",
  "key11": "2rep3bQurnBYcU7F9umxUdsRxrw4HpMXxjZhDbSURFbkeavBrLRzwpYXFn26aoVSsq7VjV6tbcTfKuaQ3hQT42bd",
  "key12": "2dxKCyvBqKYKCvwLL68QPB4MF5Qj26o5x8tiKRduHdFdU6kEjEfiHjuGWH5YxAg8G2ibW1w42u3iJCekE85jURA8",
  "key13": "ScSKfD4Zf7qQwK1zNpv6BQMHE13hsiSGVxQMFR9wmq3wYhmnyi2u3d8yza5KE2ttRHR8AYSnqsViMPTjCN6UrD9",
  "key14": "5siC1LJcskTJ5BzfpQV3buCZFUA3Ys4ucq8X4xGkNYTfQkYkeX6y9Fr3Kifdq11cW6RzhRD1uckqxnM4V6vdoBck",
  "key15": "63W7NFznQ6xrWuW4dJ1WjTXRf3x7RQAdmxehDt2HU1trDTM248PtYktsMxgMGWQs6WaabcFCSPmTP3KUNXF9RdQW",
  "key16": "4ZsBvzrtaaTTvqJam1hcMdKvTXPmppcBD4ijnqV1iT3yPJUmsS1Fx49VttXK2BF9gK4jFdBTy6SbFFxRdsj1Hnc3",
  "key17": "XFJiGfCEP61LyAZfULZ362Hv2Pk3SgWFDSdpgrmPFDkhbMd1m3dS3n5sJDoNUgCWY4FWVhougFjetz7jmuyWsLh",
  "key18": "63HvahvdjP7JN4RzSBeU6nHaYtxDrVGQoyP4uxTzQ62A7pJkPWQvhDBwNHXMBLZ2qzEAFscxVPiYjGkfYMmnH35U",
  "key19": "vDLDTAyRKDFDZfYAG8qrDzvMfzQehHfPsQrvd37ghVhhiRVBm6aRUYNKv5ZCkGBKFnMT4kCQd79QUKYF85BRjis",
  "key20": "2tA238Wi8nRQD4tFPFCLvpuxy1gFBuEoNTo352qZkt2yjoJZzGnLc5idAYLDZ8jNLjhGAfzE5VWNpBNHuKFcT8xF",
  "key21": "UBwKehak1fZcksKs8sD5vsNorKQrEELth9AjVY6YbMSw2jUkruEYnKFQ4WmMEtyLGxEnH35n4JKZDvsqHQMPZja",
  "key22": "KvKXA98zCiR623PUgJtQ8NxqrmjTJGiAJH1S6DXcQqXHA2Jj8pRimHbF8UtyFfJxkWZcJckZWVoPZxjrUAZu3bN",
  "key23": "8aimKAg3S6TGRVpHTDKMqXJtqC4UzEWTVqDknQT9K8P1T4JkeZinvWhA8QXeiJuZ3JeuvNrCJHabGQyKXaFeiHc",
  "key24": "3pEmNwW2HjDKiqbGrqRxG6cJWFgpEgVm4J9aUDksyiLrnesccoo7rLYY2rUKuXhmLaAKH3RWDBuwoeRvJYzxzyaC",
  "key25": "cX46WnniRQ9k2sTMVAjmNCR4PxmEdCtvuqSg64NnDvCUSUDRLtR142AjXpXfYh998M7wH1SvG4g2S62STfJWJXz",
  "key26": "ghhmi89FgN9NNYYdHiStCzU5NqMsg1oM55nQS7J813ZEyZHkuFsF7JjR3czQwW9PUEVGc9dLymE6gpc7KLVRzGA",
  "key27": "2LgWMfwYiwBh3jniLDeB5NiVBbRh7PpD9poM6egoa3UdL3g3RuewffhMHdjXjm3mvu2hQky4Eypvr4D1knCTvfhs",
  "key28": "2iNUCV55GKKf7wic9kJ6qg9C8eUP7f2auR4qEy3nXraKa1Kj8LQ9Syo212NBQ8sLWnxGKrE8osnnSgcNhdJqh41U",
  "key29": "neWgpCKdZznJqJ4DK56jCR3kRmV6uv4rxKGxi16TxLAxAmu7v4GDGfj22w5eRFviuGwwCr8s3RJJfaxc83X5hUP",
  "key30": "28uraT8bphHBwzFfua1GNDjVGnnhp9cqH2N9PpPKfMcKjjf7zqV55z54kZ8B9LbSA3DTnFpZnwmM7LccRRybdkq4",
  "key31": "DvtuPkwCGEpz7jNxPUqihCwWpHK7vTHvgTnYCqagDLNthvfVjZiw3VGeyFe4fX9vncvvfMsFET4A1xLv3wwgM55",
  "key32": "4JtUTXWi7FTsvBhwSNEGjrD2PHyWxJQrPfYqCh7HxFmxe1LW7EdE7ytrrf8qYqM32qcSUXw3fdiWtSHaG4kJN667"
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
