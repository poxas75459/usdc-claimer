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
    "5SEUR3kNXXc6Eqfn9Qeda5Fa38rAjY6Liz96M3ottczUWMTkCvtUngpakZk7bSBAiRQpJp1oVgs6yn2eNwRPYYww"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48wvfSQGazfsTtLNr8seLfE8NFzxQES2WvbCcnZq7rt2ayjQHAU15ZPrMURySAaXJZ8EMgxJKni6HFH7jrsUbMh1",
  "key1": "2MooXtupqkaWqsAdXcEdwB6CgZwA1EhRR9AnZSmwwzQt8rGHtLGUULsdELUeoJGWMsnFfrtxenux8NjGDPvb6Ly4",
  "key2": "2AUxwSnXj6MyJHs9dKETMZhisVG2jGCYavsgepdgfz4L35ntF365HhuhoVKTP3wVBg71ARK27Epc47GyEhsJ8rqC",
  "key3": "3oDuYvXXrFottW5z6WtkQLX6TvvCYPVTzdTaZUZ25DaYGvauwFcVxrdjjQRCk8ESA3UGRjNnL3EXsjyr9ihrUJuv",
  "key4": "3vxpwaVDrnfrPq4wdgPPFk9xZbT3Dx3SyeczxntHyA2ivfZb9bzXeT7U9ibGvgamfGrZsibmhcSjogsoev5NNsex",
  "key5": "5ob5VSCD6EgPCSi6u6nBEYiY5ZnjpEgWH8kLBq6Z6rdFUUtZTiMza2EzfQe6NyBSnigz8f4g3L35kJ5wv1L1Zjde",
  "key6": "5d1B6MqX8VWHZoPhkFm52igkjPCKHSWZPWtw62hKpxg9HyZemy6HhFSyWp9MBb7vtuQVaEQcCovf4FZoA28nwGrB",
  "key7": "3KUwQ3t7C1hz9vuEUMfwNngEdudTRRYzSbXZ96WBPq5Rnj9zsp2vtzaUSWhF4A6wFrv3shUSpWdik5LjJBnAYHFS",
  "key8": "2dQjVETpuiVuRNBVQo6kgMPvD9tJLXXeZyWPQr4DKxM9Ecba5sxv4qUveDMnyyZyntk2vjvnLHPPBgjSSBk3xtvW",
  "key9": "23atUVM6eHBpmBpi4rFEuHz26vdnCiWc44DHSVwbwijiXcFaBrzZQJKtmRcJoU8cBjtBevDMpeu81peV7Ntu2a6t",
  "key10": "26g3YpxwG8qbS7Qxa4dDiSv65BWmoSDnc5kD4RXsLEW68N3AgRdFXSGYttBKZ9CtsKahqTdbVhEWfp93n4fnjoiz",
  "key11": "4q5e1qW9QQVwA11ZV5SyxisQjoUUmtJzY1GdUGNUwg91zA9ZMBDB4HzxkjqNHTenYHkvYk8V6rdYSPm6V8Uzdhto",
  "key12": "5A4u4nUJbFEJpi9Nyzhe7yoHnuzWJcVvpD2jTHqchef4e9akF7LyzsYjwUtrci7hAiAtdV9ZnwYwtqKDCnKdUwvu",
  "key13": "5fC2gKRTZdsV7UmmddV7DST3T8vrbJKnDuF5BoXQot8NFk44vYRacJNs3P9zJZvxfFQhC97Q57Wh51hQ48h4kEx",
  "key14": "N4Kmrn8CbZWwS5VVvti7kxEH2Hhj9ZYRmHzJRG6cdZ3qPFMcWrpWZYx2CQmkwRW5QvRnWE7UVXsm37tKj1BHuLz",
  "key15": "61THX71Re2iggbrxY31WU9trMEaSuwsrywpddqPLbGQUgQL5eunDuLuZW8mkXyL2qBvf5dCrEM5V1W6E1qgr7h8d",
  "key16": "ujE9ptkcuzHgA1YAWxzJdPNb1RgZPT8ZCYtazvY3ZHP4mEeanTWW27KZyuWt56BwHoMC4GL3ph4AKWLLk6hW3L2",
  "key17": "4ipHUSmubmZFAU8fPYq9oZ5aYxvtuze3bD3EHAwFg6N7GdzuuW7WGXqZKXExb3Dm4XZckQ6LuSR3hwVtYNuSBKLa",
  "key18": "Q4PVha5ZknDfAJcaT5sadH74CHw1w1d5oDWqxPMtm8tFzz4gYN7siWjnNvm8Qq85R7ZkF7fcqxVLsqP32YwPkHz",
  "key19": "5kqWkafPgK5S2ghttUGF8JyGpuj7r6mi2kDgH68LNq1nQ5U3Qj8kvGRbGbA8HHK6T6Q9oeccC29fuDMoBRmvDJvJ",
  "key20": "4UgcZoAx5xPtwhr6YyJ47Z21Mqhr3xkWgW8CtWaGo6EKcqJ4dHGbqgxwH5UE2uBgAh3WumE1Y8XvJSWzRmXhwfMf",
  "key21": "5pxoAAA1c2Qg6yV3coE5QT8eGvkv94JRtNdQPkr4QAhtdU1bgXipMumrXf9zRzkyE4Yd2kMys7MXKdJ1Ns1TFodq",
  "key22": "28k1HUxunfbihcFxGHZ8nHsbctTqn9Nbqh7Fq5xxcpgsX6abrFiLzsNFY9GcRiyLMpcyymM9tHCn6F45Ajr189fs",
  "key23": "Sct5oChRP34oXV8z3WTxSB5Y65UcBmRDmX9d1nEbRs4WRsXFbby4EBKfhkKrj2DoDHFBaPMEJvV2iWLYeGGZSff",
  "key24": "5X2Pe9SHUupgms8wMaEURbFECo8YrSSB4oE5ToekNbKfcLhyYAQwdLHMGpGnx7UHinZNxUiydRH7SMwytkrLqrVu",
  "key25": "3i8puyNDT3RQs8hLmF3WZHDMAs8VvpzhysiHN8TTkWt3q3VyTzu9ZauKn2JhMX8audTCB17QQVNg8UrJjxMM8Vv8",
  "key26": "58npj9BZfwSf1zkca1rWS1LjwGdBDZnsUG9hNfTNPoTBjjGKGFwCc1mKXy4wU9FPnjiY3CiTZ7HKaGpECVsAWZ4E",
  "key27": "FJbZt7NEp7hRPojHV6yPZFVwJsxqzECU2LmUu852nydkitsWQvXmxEgBKnnZ3RmwwPdshn7obGiWLfzD6YLmqbK",
  "key28": "RCSkP1QHkYYn4tmaHMyp3Eub749GSEA5xeuqWdtKHKwB3ykwjwLw3zcQcsDstQuJqTdxH2sXBPmnFgQE7AwxUCS",
  "key29": "51X5YVDDwWLQW8bhV8MXhkuHc5ZDTpLcfqMfXs3hBJp6o4B9NDiPY4KuHgEG13NdZL4dG5J2a2XKD6AeKmGFCp6b",
  "key30": "4GPZxFASov2brwFvQHcqfKR5ypCBsbvvNiBbkQvjCKY8VBVtAfTiZnimMkwY7KPU6a2o2nU9iJkS3fLuQkk3H39t",
  "key31": "2JT17nVcud6Ajytwh4CPLUnooWBqUUcZgYxRpL8qVfgvE3TQzW1yoZM58k7QwH96Aowm1mnQnqDzcum57bQvGTps",
  "key32": "46f9rFAWHgv7oYyS4rqQmGh7LhFv1jgER6TSvsDsqyMGczsGekjeNAyJ37crv8LjvV4oVj1TdoaBdfjsRppgzSar"
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
