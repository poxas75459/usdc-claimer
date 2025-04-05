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
    "61j7etzbtK3kFRs3LevJqWN1JVqT277i323ZpeKB57xKQECR8JLGtvTWhcqwp98rtQNEQh2MZcF4No7tQskJAHJT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Zbe15Ev9H6oAvQjzMnRczXQ4otaXjSp7Hkbt4mkPNCm11ijMacJi7pecSVyuoA8UFd9tBwvxvSHtRY6QZsgjVVk",
  "key1": "4jHSSyfjn7cV9T1Bmi6XY8oJQiZddprAZQrM8n38sER12FwSkDWeh756kaYqpHwYX7K4k8H37mE8Dht3t6Jbwe1U",
  "key2": "3umjMhYu7YESWhUi23CyHmLiYZXWtGuA5HbA3X56Rrb3GBP4ctegovzv7F9kdtvZ9CGSW5RonRzZwoCcmXX1BN8P",
  "key3": "33snTgt44fVo1NLRWkXVqM9rYksCDz1pPi6VSidUhRKLkh7emTGkAYdVCHkU9xT8euRrkPnRUABcDte9h33Y332j",
  "key4": "4LphAk944LggbApJ5jwy32eEUsyDwjNT3CE7ZWL25m5nsytFtGuDncjPZnfuseFyB2cDXHDCN3mxScQD8u9HEhWz",
  "key5": "63cytLg8sUc1HMxRV7cHrVheynNAXyfWJb5Js3HFKv8nGHzEYwEGSY5j8HgujsgJ3QmGjkuQzL8RFp248fiDuy7M",
  "key6": "2JmoEjyyQVauEXK8DQShaPqpLxjPUooU2fV97ysXhDtDJfgshP22c6iS8gUM95f8f4v9C4jecZU1etpCjgRXaWot",
  "key7": "3xebxZMzE9K8G3dGwi4Mp9jKGTPbgP2BNBXqZxQZgcoUjAxGEPXGSetAwFkYBMzDfZ7H8xRGbZacYdRZntbpwPpi",
  "key8": "5ycmR7YBN48wum2W8mfN2rb8tCnrb6hkabdLcLgW2DYUvTjjVHXVfcgRYWQphdqRtnY3fTNsRUHzn2bH8Z5ToSLc",
  "key9": "46a6yVZk55nXo2LSU9F29V2jD9ahjX4wUC6fivccHdnC9CG7L4gAgKFGTKA1x9SCX6PGnz4YcsstkL54R4pb3GLA",
  "key10": "5Px5xcHJo6P6XdkF5sjziKzsWbmpc1Qzrc6VoekpectP3TfZYJEcDPqXYXUv1rV6Tx86jgexamEwKVdAFnnEqkgJ",
  "key11": "HsQMbR6FRMWtkVFoodmUXt4gD1ZmwEEsTbUwFLo6k8yyCqWRPjJhgMS3qKeR6PNiH7d8s95LveGzNkuy3bnorsk",
  "key12": "SU6bRwFv9D19kdgcp9DuQBBzyrPXVUEbRLNKb68TJKi5YcnxsDGE5mzKXjP9jKtRx5RatmgbU9czovMB1fbywp3",
  "key13": "2bwZmKH6CAdHBEJLMZmHbMawim6RRsWBH4UruGiEia44wkFeiVW7oUvfK5gpzeWvtELGnAnCiG2VM2tVeHgPYqjH",
  "key14": "31LJMgPKsfcLa6nnoGZXoMMZd1omgvByHWSiZZgM14g4zBj8JyvfiVSFXKZU7vRuPXxFvaMVwKhgnNFRCVjMZxur",
  "key15": "2qFncDgqFhsy7i2N1EeHnQBZio1huk7jxAdUDxVhenRKfqAoR1w6RXX1drQP7KL4qcHq9LHMCPoq7jrBwXQz9392",
  "key16": "3ebUFnZnYjQAPnwvYdLBbpMbRA63Tk657obLRE76tUXosyVYzzRotcwTX3chK91nmDx3mcSq1x8kLK6V8KrdQbvP",
  "key17": "3GVe2bEg2dNeA7smkLLn5dt71cXzUHjdutBVhSvQVPN5y3GL7SzFq5F5yh5tFhzGmXtxqmxEA1BH31etQeh99dQa",
  "key18": "4penCJgDK2RhKc2cgyeuWbNzQUUV2WkUKkcWwhs1DyGddksoe6K1XaGF1mNJ2KWk3KBvaYsb65jpoMrnbsiXrAz1",
  "key19": "5B5AHvvUTFRXzdfrCTLrcQKJCnJpiskXHyRh1H9kJhAY4q1JLddKppG4mgikPQXWA1nA7ZSiLjHNbvCECx2evx1y",
  "key20": "4XaEftjKv5ShcFX4CC18MQMkZBpJtFosCMHSgi3sqCgsNcJY8DQ7Uga72MYU2KJcwsjCEjaMF8hmB47wBbNvm6FP",
  "key21": "3zPp7n1axKAcJ8vVmJ8AVyfUEwXH2uXYccaGLgH9HWG2Yonyh5yHQp3JDV9T5ribjD49ApYsqRWx1TjFiuBG3zAj",
  "key22": "4fURXnHjnQ8NJfqeCwEJ7wMSRtuWDE4CvxdvQ2UsNG6rHtUgbggvAAYzGooKpkqywHxKxbokbvA1b9YZ1pv86U7R",
  "key23": "4tUiFSfF637xLaVJfmTvL8gBVGWKXMaA3kQLsjvw2mE4TWE7ygaohyqMn6d5ZUq6y5NQthHy982jvLWXVNxRm6qv",
  "key24": "5eTsTMiFx9fAQKdE9moPZM8FXg9RBQwqCcunjMejBm9xYPijaHFMyMGaq4C3QajPLpWkvL9PTKeGX6PAh7g3A4DU",
  "key25": "5aEpMd1WyagrHb95m2CyXLkzib3acUFZphMzsN7xxJ9bhEMxChBGEAsua1SabxZmU4HSbQpER6jZGyJwrJcVNq6X",
  "key26": "4shsqo1dt33Ki99jW5adt8rLHrPixtt1G7RoY4KR8ADE8gUNmaEusckDnFA9UgtQTdrU7Tj3b38gM9wK9mbZvhGd",
  "key27": "3fgymuNvWft8ASZinA4WfRkC9WGhWBmyDQE9R6mcbCipjrBNAfhcnBxqHj4b3dkocmpg2UpK9f9CoUveBcmdjXUR",
  "key28": "2nZdErtMTAs8TbvNmrCb7fVUHgndHpcuZJNw7xqytyT6VcmJAukVLqiSDNxnB2NUxXac6mwVSnchE7K2gPTcg1Ax",
  "key29": "4Nm3bxnUitTERJxWyBMMEUeEMbirfGRMKNPasJveDVyXh66kvjYJeUN7bZFW6oTKeaMYVa4z4qrgeyAiNgFZUXqc",
  "key30": "i955nQwvHaRLg9oFeSYEVZAb9FMFEBauCkmQzyC7MYfGdc5GRfuXXv8puuvZvxyqSv8iUWTdUb34vaXbuAJGmPY",
  "key31": "3ZY6UrzptaNSYPGziRMBHwH1xX7KA2moGmAJcuzykxJtXPH47g23zmoH22T2mCsr4amrX5djKGHhMR72aRfcnfes",
  "key32": "3g8vfW46c1f4dxtzFkgwcr6oNqjFZ85AN1aeUao3w2b3McERWderupr2vnLrufUJCBGYaYMKK4cQAry5Jyd7r4Xz",
  "key33": "3SPaegjxYrYUrvPuKD96Ju9VdH3ZH3XTE2Pnp351QeYfBmi2Fa9H3qoMVs1gPd7mx6EyF3SrMLnvPB3S5v2CdgjM",
  "key34": "2kaoJSdKprxn2xfEnCpeEbQQD8YTYCoy9bz6CDXReswbgA3gRaZNwfmPAv57vvUFHqDjamdavBFSvwHsnuKGvRDk"
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
