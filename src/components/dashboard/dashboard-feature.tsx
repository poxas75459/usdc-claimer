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
    "2wmhEAS9osY3KCemQNGwcuLbP49EoDFPzqncLs58iZKh6rCJbBHdkRav7mTPLGTYwQs3EEDN6VH55f557kLiQEuV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X18hJq9UxZ7uYo1zGUDE92JaX8zjVZD5zZmzqRb27ycT3fgsGmBn2fXsrSPSzrBFNS44jo1J8WicPRpeDP8yvxU",
  "key1": "2WfU5hW4fvKpcn2sSGm8SBQvk4zVRwSbxYzd6rDtoguESAt2o77szB4gRRMf8dJU4rZFURxf1cXqHLqkwPRj78sC",
  "key2": "2YKyRf3g3Rdx5UgpCaE6C212NouE64toJwuZu3NGzBaxgBHcH7wkfycWgVW2g7j1xkhibrkb9t7QDAuqXwv96zPJ",
  "key3": "qjoqk8xRcE5aawcekHBnBf6rv9zjgehmAF5qZApu53fFijHh274BtdZuxvCDEzFPurtNonVUfqB1ErzJYKCaLy5",
  "key4": "5EiBxZK2CKkpdcZxTWZjoa56MDNaPtNfr4x36tVLuhV72MjmBbFY8H7g2twjT2ohvbzqQwQeE6eCjhcrrctfwFWf",
  "key5": "zwHsWjSJvhMBg5kAXFyuwS6pTYbs7ko8dEnGZwjPTF4mD3rx9kzcAerMiK82h26EsRryZ6hwCJUHHj4YwTzBUby",
  "key6": "2dgyhnmBjq8xyPJ8irpbExznoSCTtyo9iurShmNMK9zdZq9Bhx3JennDvv4vQUQuhkCp7niMaaJG1F6FzAKTTqFD",
  "key7": "b7R1CzTiRYaQqdBy3z6aWtTXPiwXoK7sTZBXMtBiasHu65KzYf9SGNyJyaNrS9YMaxTpf2hrv2s8Asx8rUE4ug6",
  "key8": "3aYvBVDwUpkMhHZaC7qaLPEqNz15ZLZ7ebBYYVHnPBStGvuG1eY71CQ3F3sHdHPmMF8JLfV3TzaDyV6r1q3aFkSy",
  "key9": "kL9rejAn2tAzwg5mxho7H2c5ZPJsJPz9YGnX1YPqZkPbio7BvdVLREJjvUeM8Lw78Mnqiqve8fszrzzSrUoHoee",
  "key10": "4Gd3HP36BZ2wzABRuGF3vf5xMTAuyYDPMU2kTimZpptY2obL22UbjQRj2aGxZcg14pzvf3eu4AJZLtvYLgqivqv3",
  "key11": "5tBiPxYRhi4eHXaEZWw4AkkjqcnjHDT2YBC15NTDGCuZvStjosh6AwHvuT61KxbDE9Ry12wWGVcJWo2V97Wq2k9C",
  "key12": "fuSLCRG1bVdYC3iiaLaFcbWfRvHmnmk5HHUoW3bhwR4AYjMcmZch5j7xtgJxVbW8gzEtfS78vBthgS8V2qMZrZG",
  "key13": "596KfbbCeraK9dN448fxJxxvLYDsiLgThb2r8gbTDhd2DisMg6M1LUAvdEvScvAyS6XAxiyEW1HbcFBWCjcsXbv",
  "key14": "4rHhxJYbNYvUa7ZL7tohRtncB3HAwqETWyyHyxPPX6osec8c8NYeRNRhNPTAesA6u9bcix16zBRuoRUuknbcAi7u",
  "key15": "3x5sfgnQfUCKr75EQGvpyPfPbbyR1g789zZpbuoXm4eppXUcSCMUW6cUtVB2nAPh7KcHpcHmtKxXKHmwu2rBtYLj",
  "key16": "3Vt6Jo6BhFBoYM1KYZFGr2MZFoNMgSr7X3rT9pGbCs41ZccYE1PWvu23PVCoKpaNZf43bHmaBVvc7woRsXuNWCzp",
  "key17": "5QLyTBF7XwgHuFPjhXf5r67Y2prjRpSotoBd4w61LVvpfZjJW3E5UXCsuD4DbrzXLdQGwNGo9cXpKh3bvZ2FQ5Zt",
  "key18": "3jSUdz5CrLPmc26Lmsr3fY7Y56U5ne5iLUEBAV45cveJT2f7dZ8S65UAEUQoWJ6gTSFPS5565UR1EKbzE4P1wXiG",
  "key19": "5ih7MZ5FFdruVi4jXkLiMfYzP5trNKP649qCAcbz8GgacHmGDNfWY7TBr8Auy69kjRyUE7RqYASPJZji8i7LE3V5",
  "key20": "2bjt118G1mtw7BZhW9tBTJi5BpiiaM3gPLZHnvj9msqWnP6ZjgbdepUNCxeKu8fsGBJ1poKbDciKRe1dgQaSU4Vm",
  "key21": "3BotrxR5xLnu7ZQTCVsBooxkpt44XjFVqgX4uSgh4y5mAyaXSkuVVv4UQBAXrZehESB5QV5YmFpdosoPboBN9DXX",
  "key22": "45a5gjFFE1QGAqf3nHUggqM8vgnh31L4cMms3WSPbh4zCxYAjNgZDPFPFE415zksBeeJfWcpgBjBU6D7FULEatp2",
  "key23": "UrmBaTMUqc24XNENXDA1UyETVHJbzWkaBUbpJMRqR6P4ogsjBVN9jjhPJ12oHDoDmyxcWaCHQfeYkNWJkkHv3Pn",
  "key24": "2BUWmYJFS5G3x6gNi7F4tw8e3T9WH7uX2S13FqupaTYzmQK9ZrJjfp2BYPmrJibfYgRnckNseCwiq6cx5J3T162h",
  "key25": "2krJKPUZehd3TFwtYSFKfE5cyGkc3Niq4T3nmBiHBxjxSaW3XuBfAUq8SgLrzvSqfLfi42iFsQfNfdc8sUnmNsD2",
  "key26": "3ghWKaog5pLgvbkk1QTq4PsEKbywmzCKZgdskbYbSrXh9HtPwDo6ijYEkKEVM97UYBAAVEUu7AjcKUfwpMACF4R2",
  "key27": "2pFcpz7J5gX239QLAYGJhF6MXLKB8Bb52f4Y5A94mFdUWMX8GZNHxxBnwHxjzmM9puPA38sPcrW8Yjckx9JhQJML",
  "key28": "55CRR7C6un7Vyvfo2oFgqf76VpWym4Aehbj55rxsx2ZgVrFFs5sBQcpi3tgESGE1eD16FgjsSHsL6d3ScMD2HCyU",
  "key29": "4q98ikZGsqPFaZagq1mYobh94kxBCTLGf6hJEnzbRkXXf5mXYmDASTy2wPjaQiRKfPPQ3anXzWXMdQ63qbeoFajL"
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
