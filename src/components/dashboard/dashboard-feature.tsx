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
    "3a8yrbeJ1xga2LwJ2u7gF5HwBfL85voHdQVjDd5h5oXaTV8H7NuFNZ9DyeAUwSGer4C61wsFUNx9o2Av5EVykBcD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TaVkCCU8xU5rwv8w7ewFQCeNgUjHe3JMbEsKXcDv8RY93YJCTX6CEaDe4rUeRj5jpYeCXVN6tM2HMVzTf9dRxcF",
  "key1": "4z4PU24eCV6zpTiCVGawCbF1Ec4VSbsX8nGf4kRUdswgkungHNhrpJmRRMWqSPKYQ9dwGTYJB3R5jbfz2oPXM56S",
  "key2": "4KzZeySpYJN5WAKKoTsDFUh8NdNDzhgqm7iLJjDEMQm9RDnN9ovwBPBBMZ5Sxu2aE1ieNiojW34sfBt9FTqj1iQu",
  "key3": "GguQECM51mXDMygEkF57JtVMxyS97ynP9k3poJtQfbKCdUiwMrWzNWcrouagQejXGpZcSS7iVLjr8qyjAf5oxmm",
  "key4": "3ENNzgVKBD5Tv6efz85AT4ygs4JN4tvnhzDFxMtNQXJ4zLW6sikn33B4U5KrLXjZdqKvjDTPk8tRh1JCvvh3dfNt",
  "key5": "41YDUH5GGs25bCQSXGGGWPT6CjTnKqJHC1bAkabaKpPPsEsUp76LNuJmduFLtaY5oxrzSU5tSpKAv7runGhDLv6L",
  "key6": "4LEV4X9Npz3YepXXxSvjr8vcvix2hLCMRDPEvryPunYonhYP53AmEtHCJdreiwRdrDJupqvonGgzrdocoLhucovJ",
  "key7": "5jiCrAsug3YK7d6mRYo2VLCGbzSv5cefiZhFuXdRKsQ9NcXPHGvY6GF4xF3YxbADazfeQfCkVfy7NTYqSxmNoMXK",
  "key8": "33WCWiNhsoCg9U4usaZ1EJmmGH99kEPPCwEigDx53kixRtxs4zX4ZiEYkwGVSdZzFUeuw3SDqtCzudmQvTqArK92",
  "key9": "PwavENRKTJ7UNMW2vrPMYU3tbi7HUiuHS6QLGWppBAUYudmNVPQ45NXgvBgLbRGGCcxQtJjE51dE8gKfxXzPAFx",
  "key10": "TYXaRRFWH88gNT6gMtFBoczx85D9kyS9xw9ckWQkHyLczwyHCxr5hiXeXkTF2kXG7tMYvyhWCqQTbXPqUCUb9kf",
  "key11": "5niusAR1ePTesQawvFNBbsDwhKsek4r12utLjJ46hERfNwGc4Hq2N6q35Ae2ezw3Zc6BmcvJ5hie6eXUmrZ6kpW9",
  "key12": "4akFa7Hr9QRdiL5LDpgYq37HsNkaQeeC72BdJBe6Jxp2nRZxX97BJqQ6A18LPLLu3ud5niLyXZ7FYoKorjw5bwXE",
  "key13": "ZMSXqRQfmvKhs7MWatkDuPxPQkZ1qeGBF3HKGX4qLniK6PHcW2FuUoD1H2n194evBokdkhFDxBBhAEi1br597Qn",
  "key14": "3z9Sqd9YqutapAX6cKJ9okgsntgiAgtmiRvV5eeU9YGmnhtaFVtiDg64M1TnvoQ2ULAn44hRjg4X3UacZa9nUqrQ",
  "key15": "wDX1xGb3RPVLKBsUWRUUGZiMQDgrkpGdKj51fpinwZgUBQon3Sx87i2TQLizm8g6kAcabyLwXpzs4myd6GSPDRK",
  "key16": "4kUq84BYdtmQXS4wGyg93wYYUJfEEwu79hAFCPq7TDmsfeAPQdUcLGUPSoieLTv9FpQ3kXkG93s8YKM7n3SUgzU3",
  "key17": "4iajRheaywojykxTjyZNTzFexhue9B7QsTjmpCRWimG5WNDjJVWj9bQgkqsLQMBCN79scxYBeFguhjWM2ppwz5G1",
  "key18": "4isDALgh3YwgrzA6MRgSH5FWxgPLjmpvAJF1ZeVWzrcrNTr3fqaFp1sgCXDnYfdc9mXQE2p56HKJsFeniyvY2Mjp",
  "key19": "4DdL9E9SU3QVCt5hTgcUCpp165hUPAFymHQJDBN9NUEupgaQkKCTLjvtMFeBKNiuuMm57rR9RAJbxbTDJYFqLaoB",
  "key20": "BimEjvxRy8QJ1mvqk34g8oG7CKFbz5Z311C4fuBizxcga7R1pRbRvkKH51Pui95ZhMiXxsN2t9RtVdCzWAYwgjQ",
  "key21": "2EeJCL4f1zYoEzVV4tjM3G7fvBPEKszenUab4yf1qMDaxE7R9PjzcgGvnk2DEHbSyT9moUddSaNLsf2epUerN8U5",
  "key22": "sJm6DFWbUESqL7xfQCLBCL59CRo73ZKfGgcHiG33rmqNV7E114aumy9oKWAEdPKYJWEdVFjboZE9B6A6Wns9qeT",
  "key23": "3n74r4b5SZeWYxJzrwwqodr1tGSKzNhc7HG9U7YjtuyuMoWBvN8nQynXjFZEcBSqesdJpTDgMJ71czKnVsxALYXC",
  "key24": "4kK99VT5wXvc6cKhPs2Ab4wXe1w1GNasG3LL4HTk6BkBuodV7uyQogFaBfT93ZcooniqMY21J9bM3hBrdmBrnBav",
  "key25": "5yLPBdYY97JZMDfKC8zUaKXNTUmMrBfFE9EFmTqgRpzcg1MZCQPH9HubiGmpXF9dniN7BccnWTkDo24a449RubQV",
  "key26": "Wq95TM2Ad84T4TEMamRrUnCmrUAWtDhvPySFLdZaUSxCSBJbxigYENLqSpdntv8w3YYz8ocKpgityL8L7DdBzZQ",
  "key27": "5gEVVPYhhEC8PQaGYP9sZFc743LYNRxQuK4GgamjqLgg7pLDpLYC2K4AwttUWPUt7J69is5DSVpphNiU9gaQNbxZ"
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
