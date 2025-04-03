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
    "nmbouYFZVT4pwPLMaNEjmAKFqKdiKSuxSoZfqXyjgxvdBjAegGZWx139fUf7sSJFoHjbQWrVQUDCLxzVMW6usfR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fNqdqrRXSNpWUcLwjtWmCGsFE7qcmJibNVUUGBoYZywCTcnphBcpHLJDCNNYNaJWkfeBd5tvEpLTmFENJRC1xgZ",
  "key1": "2CrzH9nzFCzAJ3cPwXZMiBZwgFjbpFUeKP3MbzT9qa3f7jkbM8oR2JQEBx6qpj8Gh5YcEuWwrVoZDq4L8JTKqTgW",
  "key2": "3fZnXXK1RG4xaGGNUgf2FNrfa12LS5YHPkpLHxuxjC8WQvbfxprCTwcRry993wPefjzYa6YZFB4CGgUofDjXPxcw",
  "key3": "2HdPqw4JLFJA33RiYJcDZsBphyvMTAkVmJyjpi2QbkBWiCNkYVnsPS6pw8TTdXXoiCCspWJobefA7VzhLrCeFqAq",
  "key4": "3ffqeZX1pkKhhanfJnfZr2f6RCH7u9kaSwePQNmWnRHttmDtF3ZbVj1MpTteP2orzVrFSBiNMsqNZaG245mKHSzM",
  "key5": "3e4yn5f9VQxYvYFSjAj9VYXNkWvepZk2VLxFrKQQHTUiGJTFJvJLiJcYLGqFtJKpTxxJDRwNbPEuUwjTLxB567Yx",
  "key6": "2iWsaKDqU4bwxUfJhyowExiAfL51URxHgS1HnayLp2L51oVL13SUasxcePN5RmSkvTXYvwehrVeUPPctJytgAteH",
  "key7": "5s2n5S7V9kSYF2vPPcLRzg1UNJZPqhQRRBUUVYrcHCJns5KUymotTum5zLvaPJT6wv2PD7V2aarzd5ueRRdgg4GM",
  "key8": "xoBeLD4SvXvHtdFjVTiHAwcVwKT7kvQKMzGNFzkaWhTFsA1PjQ4HhNZBPLJVYiBn8Xvhisr8Wp9Ftog6CvmDeRv",
  "key9": "5NxiDrNtZh479GyUvZ6cevmp5VJAcjvuRttZQimcN9nYUKcs1kSRWmFhYZvb65p8K926RHbeuGCuEFo8pv7v8Uku",
  "key10": "VA4vaCDcx1JgKWgqBHsRuHm83DEga2Ec4dwPAJyrX2uvvaSQBsVr2r9YPGF5rc196W5ypiyvs6tRaffmukVM9TL",
  "key11": "7MUXKyb42AQSbs5pEPx9CwAS8nPGEZdgMHcm1wdnqcfdC64xnUNGcu7xui45NJThh6oHgET5ZUfwmgv2nUcgvEC",
  "key12": "3eQRjNBXqUMEM26fxpghe85CeSBu32dMKP7NC1tJAqwXA43zM7SXi4T7T7zCboXZHcsPVW2L8dHurEWqF6sBzy2L",
  "key13": "415vQAthoPhGdKGYFwgJGdyVgeg9RVAWJ1kn4zub8yanGXUXq2b7TtaPegdakz1PcbTQWLx1Vzf6agF1TB542tYY",
  "key14": "2nBu4daEiAL8ohVpit35DNzVhgAF9keP621qic5bXdooi27EvjFsjDj9xYeDeAkkGkLp6d8rRRasaDzBFU7nS3Hr",
  "key15": "3vQHTeu4D45uEU5ic5ZeYzDzieENG8B6BQfKoiykNvYLb3c33kXEHQ3fBYtWhQxeNSfzyggUyt9VjzPd2tAYknVW",
  "key16": "56TTcKkzWredPrJvjkWM55u1TACgoDdJ7vBewWbdUWYQnfiwgPxnV9jxMvLUjRNeNKnxCHsXvxEaMTQxug5ShYNF",
  "key17": "4nyt5XKbcq7ofwrkHKWKLWbCZ72UtiMsMyuyctE67JpSg6HKRWdBB9U56kGQqjYSTLBeo7tZqVFT1QorY1K3d9do",
  "key18": "5mnH2BeTRAU8c8nrXcV4mw7VohGKsGpVJShsuz8PhbPjbkFa4pyThJYgtEK4ESf6zHrvC5wZgYoq73tX35rwPWL3",
  "key19": "264iB9Cx8QkoLjD6BFiKwkyBuRSWjPZTWsm6UCe6KtV6Td4Bf3ptqETjP3ziuPHxVHZtLsHKepG63aDJdcrtbyE7",
  "key20": "3EWd6KP2FEb7C3EvuiUPmSXR6seDupi99vWYqtmdC3Lg3K6R8FTA2XexQC112TAZaFh6EfieecpE6rkcwyoBKDyJ",
  "key21": "2DRjcFUgqnHDhgk4nZ947SV9yFZieBg4RxikGeYeBoYXGV3qW5EB5P7VUtVT2RG48v59tn9CMjCHPjdEQe7ESKNQ",
  "key22": "4VBCu4DySEAAzoE7YkQwn8AqGcdM9uXp6qJNGm4VQFgQxzUGBgmqKCwwCiTyW83Q81tGwN7KNKfbjvoscCaj5hRy",
  "key23": "5CcnWZTGJL2CrBhE3BcZZAnw9pvvNnJvSGQ3cXedPQYWUBGukXBuWSGvQ2rWTu7xBgWKoYqC82TuxS1u3FbPSGBz",
  "key24": "2zaLndDWhgQoHNrUFZG4xPTZNfvmxPn3hSvpVVsyTsmoMfyRyg69uFt7cQPwvwhCuxGVEphk4jYD1mR8P8j6k2HG",
  "key25": "4xXcMLGxq3C4X24XwGy4m6fEt3CaAdoCsnQGX71GgeYHSE5TRYtQUmFpvc9U9E9jtofqUbF6DEm79FUWE4HNNE7V",
  "key26": "8dbuum7gW6oyGitSohGt4SdL5EruadPZ625yJsVR5dV7qCuidcaXDpc7stUFVNHdGZDaEEEkk4pSFtyqYibYBAJ",
  "key27": "2TUaqBEBPpDAAmLXF9zCN6TFsBKx6ngur3GEbhHvYN8TjgGcx6NKWiuHrFUDRCWSyLMNy1ndnrxPQJcAASztqKsx",
  "key28": "zw25GKZq4LWd7ZU1HMkfKxzUGaN12xzux7dR668kyx4YWiVYNXqPXiQv36A3wNo414gBx4A2iqRncuVmBM6J9UR",
  "key29": "3bjfpYyVe28Af6JcRnqFhsHR6rQ9zeN28SQs5LWfbjh8KNgUmjnJTCt6WhUfK54bHmPNhEeenNuZ1NHnJ5m2wQoE",
  "key30": "2PeSYY1D8W33z5JZPQRm7tJVcMyw595FPnqUibZoVfnhxpUKMypjAKYSaVGBjsK7WzKWinvYpt6Y9ZWovCJaXS7x",
  "key31": "5j1FXHSZmZTq3wR7kyCBSqiM2R6CFPmSHYgbEgVAaog4ygR6PdXVP1sb5Nqob8xBjNe7NP97LReKgQ69iKWWpVc9",
  "key32": "21RBMQJqrTu5Do9ZHTb7QaYV9wLopXx9GQvvf7wEA3Ty1EzhfCEpLPeXc2TgsJx9KdaUa3c9VgPX1zhi2EyZd79v",
  "key33": "UpgxJxnZCTErSwsYkyioi6hQFL4GpNd2ELwBWoR9aEqjXub8xyaXzFLcbLXhtNVC75iCWzLrgjwH39VMGaQvYrE",
  "key34": "mWDzKLUrMm9YcLwDDBJQGqUibWJR32ssZarxxhKsgyRDR6CErj1Mi24uzNoK9YoEQTWwmzAvesUFQGCjp1w49oD",
  "key35": "4cHYcrkKxfBQindjvRcdroMq8mvpLpsjDDjLLM3pdX5yi4LgaGZ4qU3FQqn5ZqqXQULb9f8hxRmp8soSmFBu19s9"
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
