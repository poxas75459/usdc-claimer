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
    "4F3rj3WPsZWQoqyFyfXYgW6PKCfHdtaSrh3be5gzwsNSXR21bA1ecwuShbCT3645i7ecy27ADZfKx8AVGCygUesZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W52qfdCuVfLJzNo8zrtJCt2bLCak29qbhPgAoFbY5xjyrfFY24mZaZpNC1dseTv9BcXQnwmoch52mex3njsaoUi",
  "key1": "4uvE3NdxoJHqsNBz51uPGKQ752JGFMou1wbmnsUskdSAxbz8A1DSrgW7hKJgZVY6ZVNPszHkeRoG9wZS7Pz3LTX5",
  "key2": "573LkH4uwZG6T4mQVSwTGoggTnAKVn6tnHyPfNnUYRuXWRdqhH5DXHvwNwA7pTyyb8fwUhciqvfw217TjKWu1cA9",
  "key3": "23Hta7uiJf4KSsNZn2Vz1mZQLxoyrJRs6z3HHebvrPvVNnQFUPsqNExAPNRu52pA4QYa4Ao9tgnQQsXdA7J179ao",
  "key4": "4EnffcXJn22GXufreW19bsPn625QQyGGAA6qyDWZxHhfUaXeyoSFNX7CoEY8VVE4UZNqMvnGvfYKYvme8kYuDeZs",
  "key5": "65hqhiHYkQDHw5HJLUnSoqvLuxcMEJfTbgjRHf8FJkEVRZqgvGuGs5wVfTsfEUmeCVsWwwMTFW7Bpb5K64P6bKUN",
  "key6": "5Xdsk92kAJKkHjxbhyRjSoDFtsGMxjRmttSfddqpAnsTFaK82ggUtq9EELZaM3mEztFfeB2WHuneCZ1aNK8oy1xk",
  "key7": "22JG5265HtHufckswTj1KXN6rwUuxiaLUMqZLm2R323JNxu9kSTd78FGtecSjWGP2bcQwTq64PtoZnitr6XrEAuY",
  "key8": "3ipZAeKjJcSwsV1MEd6WKfko9r3JSoYx5CVZqtF46YcATk8B4kNLJGLmTVVSqpNsfgZsuUuv5rmGxQHBgZYDgBCE",
  "key9": "25Ndqmg89PTUQyZExWE9XoAUGRWa8fbAGvm4NuWpjwJYeMLuEBkjrigS9PgT94aSxJQqHGENPZaZB6H1R1ayUYMu",
  "key10": "4QizauKufL3EnA39UsznjXH8PG7EhtJgmHeZBii4S2cjG3BkFrAXdmqVKRnBNRuneoMoP4nUfeWDwKKEGGi93ksW",
  "key11": "2TEDcHNwZk1xqpKTc1kXoR1zCrvU81Ln4xuZXJ4mfCRfpiMqkMhGwrRdjmPfGDh3cRWSWq1DkbB2pEcvrd3zvXGN",
  "key12": "2YZ3myEDUCX1uZDur7Kyj8LVNKEsZvHMigcjL3LjZS1q4dTo78iCRpjqrXJKFVCiB2Ca2j5tPjYbTFaHz6quQEW5",
  "key13": "2KKdkj9mQjwY16Wm7tAvA1UPfVn4be2gu5pYRDT8YF85Ckyw9zvkQp3E5xUithDb4kDzcg7xeP8XZWekLDRovTKY",
  "key14": "4hS55FMnLkNeKJUiHpsg5ndS4YpWdJqijeTyUSrcGfpDXdYiEBCG9YxXE4ifY6GTyNFiX58V8tuZhndD8yBCbmxj",
  "key15": "3h1npyJHnAhJqcNGNWXaEEMjFLbG6yHXLdvRXo63BGhstrkp4W1oBd9NHWS1nWSxc3QtFrjgRpsHDcEswDM9RR2d",
  "key16": "2Y5epczqFh4n8GcBo4P6FGopYQirborgeaE25q9mgRKzvF2JEJbR8E8DUM1VUW3FPSh7RN1vpNrvy7uJjTCPMAm6",
  "key17": "2JaR1JinXxfLCVaKyvUxUFhVyZL6fsxKLrv19xEFpuZWcg2yXryVPbPFHnsyhD6LmmCq5VRj4f2nJh2fkufsBGq7",
  "key18": "2z8Jv3XvV78kVg77iZUZz8L9dXEwtxLpZNd5JSswvQicnU2SWot3o11VMj7Qhh1cPJVJCKrY7PFizx88EbheQHEB",
  "key19": "mansZQbT618MJJVGtMcS73zddyuh8DwwskksPAskRwLAegM6D79wDciLN7ShpxU43VSYE5WBdc4p9rEqn2ZyVFS",
  "key20": "3gEubuzo2pWfZiGqkTmSZ7vngDTAaqs46sJEhJXUaXpFU9qJKz12CNLufovExyQy9p5Zh3st4hnmWGeohLKNaWWf",
  "key21": "4VS1ZNKVWs62pHuYDM2tBd4qbKmrTK9obzWebN6ZYx9mAa4ZcSLHDa2fzbdbxLM1onUEX7g6L9gEk59yrGjgTi38",
  "key22": "2kLceB46RSWSiPMm7UwvQ9So8K2WdLQMKd9Pem4zCdmXZvXGtRgk2T4oRxhxbaknWfBNmcd7AaR35VHWFtG9kN8m",
  "key23": "5gR3Zr6X1acQYuf3JoPe3GNbfEPRz4yqAeEXTjN27Lc9vWJTh5HBDNW6RGF6mTJsvG8NMctYhD7xjgYBvDBWPc4A",
  "key24": "3bSHnViYQzBieum2M2awZa1fB3rawPRtyVA4yukBCtY7BuZiV3YdnQiepXsL7jPQewp9kfkaYgDhxMXh8eFEbKA7",
  "key25": "5NGVfXbVnqYH2mPQJpkaTBAYdPYKJaRTKp4prdhxAuFydVR424ZXiSMN1QmcsBGRVHmF6LRcGWAqeH5A3NXCz4X6",
  "key26": "2yggG15jFCphZHRm83YZgvC5ztAhZdX91P6zm91QmNwVo7bxMdnYrtrPsScqpGDuZ44d6TbsAW5xACRutSQ96vfj",
  "key27": "52oPyFoqpknnGoYCyWrPx86t7u7GBe9GWhQj6eJVAiEKTPM6ZbdrCZSmUaTxAxNP2rkpAJhidq9ZrJUj4JmvBRAt",
  "key28": "3sp4Nczo9VkKJzib2zVKhW7xUZtW1jRozMy8nxM85R4zKkL21fv7jjE39H2Qm7YVN6FtCJdHsauaab7C7Mq1JSWR",
  "key29": "kXghcJiZXSF2hvdvpPaFTdcbbShHYiq15PYAvfeSzvjZJoSP6YMzqUgB7LyiVQ973j6dXv3teRJm66zAi5C71Yg",
  "key30": "58ngK8SczmdGGmFVgYuScELM1TBs6w6aKuy7nsUeomL5oe8PWHMQjVWhp23tjDYwbXqv7RZMhc9eDEQLEHfng5rX",
  "key31": "Wdk2ngJoJ58mRtqqDdRMmMx7AhSb9BZLZ8tQ6BUNc4vsDG29tRZWqAH7agXiqnK6Kaw8QCR4FPhtiPH8AFs2vXW"
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
