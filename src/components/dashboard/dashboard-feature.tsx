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
    "3a3kqsyNDJ78TNYbL9eFNWz2ALX4W4tWKYkGMHnZZJNSxxRAy2jfJ3KDVYg4VXtKgBxcXFmyepaCjWJ5brQTqZWn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q7LybKNubkZ34MJnGSWtphRNdm54XpmgobEoipCmWJuDhXJspnnuBJ8C9G4BbVMzEKZStMBZaa9QyjhUFtVGhTc",
  "key1": "svEnRSC8Mjmc4zPFx2TAB5FLMUiqAyz3itRuwNB8RpNERE9Y1hugJDVa7kvvHpRyDLJr1VygzwvbUYKNfw3PAHj",
  "key2": "2XZkMcwCpGGEe5vWUhoQ238zZD8Z2Pjy2z7YVi6D2exC36fYa8mPsxSnNK8zF6krzyqKBQgoqtKgUQWnX5FGFCaz",
  "key3": "jdufzDkpeRyEQEAH1bKEZNByGJUGr9s1fPj8HTEwPnvFbpZ2wkhn5MXz8Nrc5NCe8P1JYHMW8BUwXQHUizzs6SX",
  "key4": "5iS1qoeJxPgMCLYkSH949oLswni3rLPUKzmXfg7i98j5TbHxw8CGw1B5K2vHKBsy9K2n4YpawKR3ePyTX2DtqNHs",
  "key5": "22VHVgLVc3twKzBM5NyUSG2dQH1jdrmUqeZhogKYNiYRUU67bkpm1qfURNM3A3kgYpyQEMVWmvQDuVJ1BsbWTdgZ",
  "key6": "3azHS7ASS9WPx2hidRyqjgcM11JhDtPQtGrvJJKyMVFK1gYGUaUesmWKVaBMZbG6mqyBdwzSyUha316zVmREFjah",
  "key7": "7GLFTeATS8UBgj8bf2jwBWPQDtMWXvZwNAMXUT2FTm5qKMZqETQtuka7jE5XEwRJHN878h318oPueBL4m596diS",
  "key8": "2tLLhWgsyFUSuqYgWPERtFBVyxCqBBMB8vmM6gC7m3UyS2891GpWSp9AHLYMp57ZPs85owHSmwyz5jR2JUHpqEsb",
  "key9": "3foDE1uGUjNxv9w6EhztVgadj3jdb9yrT22Bz6pFi26JDHvTPDfJawkcCr3QZUJRpGbivCWKksmsVVge9rBjTdFV",
  "key10": "KtFc9cRSXQnUVR5xB6EenHTpqxRC8Rn5E1NNaqDJH2A8jnA51CyoqTYESNtCEjsE8C6aT2rp4wwpg3UNU5DbT8H",
  "key11": "3bkCtW6S8w4RpWigAM6KFxsZ865t94S4LayPx4LcrxjMzjH7uDxqijHqse6WLGPrGdrp71H2F3jYwZScmGumJc3p",
  "key12": "3MACDTM5m7nrotEyc5dcSa6B3akdWBhgW7zPrgqSM9xEa9ip9p2kJ1DP4cfLfcWYR2w7UsUtJcRL7YM8NHHBdvGk",
  "key13": "5tJzJyaSQLAQzYGc8vLf6NiXjs9m1c7GdKhUnKExW9aW1r4a3dU7jCAiW6ZmMGZSRqXM689DrcMnXeVeafoWHp2M",
  "key14": "3D6qLSa1nMzMM4AFukyjMMdgL3feLJmPzncBy4n8Xr6ja2TLu9W8bshHdk4u9JU2EgKuX7ZrNAZ8cq7v86KBHRAt",
  "key15": "DAWDa9sV33j3zFArd6cjEmwJMdTSkibz5KBydtM6H1tECGnvJPNfNHWWz4ZbMDkLDQG8NEDjgqAgs4rCP7KSX3G",
  "key16": "5PmUcdMvQuvLcNfqReQfxLq2VJXfHj2kKDbSBmvwyuHdTK6eWjPZzBtT7t6dim7xa9mJzASBwN78PFx24TGdCkwv",
  "key17": "2bKJRVbmfzWkEVmgw9qMfdg2Vu9DZiLLMTm48Kw2JwTs7M2gaFHuVhmjH9NrkrXPi4rvvjR3SCnDNShoSVqaFx8i",
  "key18": "51JcUVh8KLwUh4qSVJByNsFf5mc1EXpQ1JETQE7UySe2LGyoCG6E7AUyxtaf4Z3QuPFKfcJqktvNmtRJ6ymoaRiD",
  "key19": "5qY9i4DptDqg9HDnN5YqxZX8kjiYZ6dcUhoEuYzq3HLhxzWp8jmCXnGPoHvQgSdSQHR8FyNsEQSg7n5A3ck8jvXk",
  "key20": "4PibYEwgkbB8b8spDFK4ueJd5qTzPVZ1oDtBGQDTaqS27ib1wLRZEmPhy34eDHASa46qKxL2mskjU4fCvgaqx5GY",
  "key21": "5oF1ABvgB9X1NiCubLzXcWY5wqtzVXnxmzJd6iqzefN4MzDA7FikFhgnVDzY7PYFVchzCueaqHPtsQsrFBdYewgf",
  "key22": "2gzBZ9YJmnovVz34xVUVtU2Jx8T4cvL2XGfMZdYHBvnDR2xjh2FN3CxrDzJBpoPgaFfXz5G1brZWJTLHzanF4BbX",
  "key23": "XeJ6vukks2EPEmgwEbBVC4nV9Eje1zaHAxjrse7oCszsihe6mP58cCgcF6gaeLgpoLuDmiHPRFAafx3vYUHAwFu",
  "key24": "5qFw48WZLBXNBkjh1CZG39kn28mL9ahTRTiEZT2tBKYvTrNkmdA9ABdtkCXDoZEWfrVDgy3inYFFL9KBzeCAzqTE",
  "key25": "28S6oVtgtg7dTWYWoxeEwk3i35Z1tFfKUQHaycm4viUbE1ZGa9531Co6gjybGqtTknchgHUZ2NhNj4LUvXW1hDWs"
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
