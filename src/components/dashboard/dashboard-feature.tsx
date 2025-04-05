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
    "4K2y82WbPBjxFuZQVHofZ4zAZozB8gNBx1n61mTAnFW7rLJcKvDoQzdWFtV9skAr51C6NYKfHZfFnSS1KYnq9zqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LJiACyr9RyfskpyWSJY9PpaiVLB5eG727GXLyxiVcr3ia8aT8irKH44iPQqRQgzzZ51QAKkyr19Q8AM8Y81nXME",
  "key1": "3pqWH4eevWUnhfkhJbQizvRNYzJ4PzTvAB2kbM7pRPe4JejPNMDztKNRhFjfrNP29rFJjQykXP4BLX3BY4snLoDh",
  "key2": "ogA7pMXJVUbwMTkZbwHK6yVQbNppVFxvNA6N7XCpXW6uXHysFKC7nCKjzgTrJcZ59QM277DWTb4cb5XsCwxBDYc",
  "key3": "5VA2VbDpSK6jq5M1LTHtiJLr43t7JtxPY3ximzDHqYRyhmhxQfFptzfoDnbKQtUaWZbET2ytHsfSAk1z5nkSTN8w",
  "key4": "4aViTVxBd7Wv6brmFFd6h1jHp4MjiBj7A1abkLoRVMiZXQzVnbs81W9Jt3EmrushxauQMyveUa6iyCV8Ez1eC75f",
  "key5": "qx5vqn2kYVEPgsWkFWyhUA3kcrwrXye9bh7MzReBxFSeJFiquDVLvCG2W6hL2T4Ln1H9rK7U5dLZm876arxDMwj",
  "key6": "2tCrXAxdv8YkLnw16EppUBoicob7FrJKc5y22TVa2Z6sRyPxuTsbcimfKr6gPxY1udiJVDyVGJCYVi3B2weLgp5B",
  "key7": "QCsmK5Vs12y6gKhn4KDbTzuzmjnC6osDbBxLPE7dQDgGfCWfVHrhpVzi1hUqKmbYwHM6MGCxmyHjRSQtV5dQfse",
  "key8": "Ay1RGPmLLCWp5Gu86EETqYouj42SN9AoaarYCZyg49dun9jDoprUwB6CWio8vuJ6VjDL1MriUWjsoFCdJHUz7tq",
  "key9": "EkKveg9ZpC4WiHF1fXQYvFcQ5q7WzwGiNiGG3rF3F8uoyTpwX6HfnfE45ZSU6Ns8NgfHrxtQLaJx4ZPe5rbGKGm",
  "key10": "2RzG8xoi7q4hNsERMs7pGHcjTLSqGSzk8wVbsRNyvfzgKN9ncoC78VTmM6Lwezth3xkTEBkRyLcBTvdfAssdzojv",
  "key11": "4suvfB3uEiavaYvSdaAda4SVYfuGXpdRthftR1YaFEgoeF5vAKcPRuN5Qn8akQqh2XU1GyN6d2F2VV4gC7CLexgv",
  "key12": "5gP4C6PCDATkhzUtLRqeMmQJmrRHhb5YghRJFjuNT383Me1mkVGHkqVB5svEwGMeqspLwGVhhPV64ePcL8mScoeY",
  "key13": "3BLdKBAQigX5qKPLHE4fSHCxsKjozvryHJhgDctNgy2JTbehh5bnXn6aStxErVxJPoKnKm7f19wyihtFqvnb9apv",
  "key14": "2Ch4kFdqrPU9xprZC5FAXtU3geKRYUwar3fVP5XNNtQwJWCYpPkLmv2X1aC9rRe92Q8TMHa9cmbZGWHZNNtpQtz1",
  "key15": "3jBKaobnL6fTDgcENDhPse8QwV9AoTtiuDR5DCrQg1hThwUCqNuzGmV6YwAv1Xoto47mB9Hozr7xoLMnJisMYSU2",
  "key16": "4kJ6AG5vg6z1etz7XZWmTntUDnaMZp3Pn3hDDf9RoaaVd4WWUhfZqkxfwjsFRUhnB1p1MwMCrQtKNgmguFjqtASP",
  "key17": "3uCJb3P3yTXtF94VBQmWkMHhXTSRwnb2JFTLbnSzSqJuHqUtSqguTnHvmpbcMZ3HhY9kMmN8ooAsHooazMp4sAj1",
  "key18": "2Tb9VU6wd2CQsvinyf8SPytZGVxjuXAt6zhxsNuSZ7tDKNxQFtbXt4Agk7ho7GbQvbz2WkFRML1jYGSRzuc2GehG",
  "key19": "222vGAo4QYmfJvPBCLJJkCUmGXRABNFJGaGdKLq2dpDCs2xJFb632Jvnd7PD9GWQ3j9pX5DsG3HwC52peyPzmhF8",
  "key20": "4WZiRSz9C6YnwWoADPr7Cgr7zJ43KsT1J2ByxoQhmzT2mJPBTs3s3xCWUyusgUy7fsXw3PKoBk3d3YYqBi8Q6G8U",
  "key21": "3ADbbGhWX5Wv3VDvRZ39gFZvMn36ahPUVHhX9LB1xLzMQH4RsnjKqEPnWBbs7BKu7AoiQpcaBD9CAgL2nf1duxDE",
  "key22": "4Kc6JcDk4XuaeQP3ouzmwux44keRBDwoYpqhXMzgCAxP8pJia2A8xiCMNFEsZVsznRpsoLYntprzzEujjSj8LD8w",
  "key23": "5Dec4nY6B7uuwMUePPC7LNjdmmAeeXvoXLkVroviv8zBmgjG3rCgaK7BFU1DvWP97XSdKuuQAdDXTX4arV4ZUaap",
  "key24": "2Z3omUJAHow7FQ7mwJCvWV4rtrsFkjTafVctmfa7TRJn6rP9KNaGPwu4eRPr1vWjU5p8VgsX95jveDJb9bDBZD1D",
  "key25": "4ZhmRpAV5fEvGFwekNtFdX8KjEDj1c5MkCBjs86fvAo9tRXQH8kEPKSP8Mz8a6gfqBh5kTmeSi4yMTzCbr9fmFQg",
  "key26": "H5152yz9apMhqGSFzFQoFuQmAu4BMoHEWs6PVs3yMvoiKHsL7xX8ugWY6eqoAf7Z2yKz6RDYYbTb1hWcQELCBje",
  "key27": "2NtWAQSs6QA12ctCbfww937JhCGiR9E7NQcp1tmjkBQT72n819v2fsDCCGMfELVoY8mWcbXfAkE5NQtx8v36966e",
  "key28": "4Sz5JpLqfxqWo6zKuUgLZ7NHifmoHyL5F8KMT5ZX8BN52H6KgvLjutcmW2V5r6J8c1VjWMMUVog4xkbpFEU5ZAzs"
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
