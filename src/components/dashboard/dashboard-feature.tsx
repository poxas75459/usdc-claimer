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
    "54vDFHY9ySVmcBCGKx5C6LaEdvkaMgkG7Zw1cPRUZb25ooud8PideDqQdd7BX1jjZR2WY1dfzhDBYfZ5ErBCf57s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b4R7Wetwwn5EJNFGt6gUwRBQk5q4QTKHByvg3kjG3fKQ1yiftjL46w5KRbudXxyryJdcMisWWsQePSa4u3cuFBn",
  "key1": "T8JKC7mH8zHs34yuPb5KBGDeuHwCbhqK6zm19MtWzVSNxugmiSn888FxpkZwWZsn3VtBqCdKkfNWyujJWVuUXF6",
  "key2": "5ibAJWAzBBDt9T5DXfk9fsf4N7S72bNMbLWyDaRFVZUdBtV32bYTgBXtikrJ4FrjUxRQty7DswMxzRm1yHgnCX8q",
  "key3": "befLuCAhyMqTw2B9ghFj29aLSUUy4DsRMU5tRPa4B7pKhaJQpjFwg43ZGubnLRHbESaR5vyMnUEA5id61WR86Rt",
  "key4": "3DrMwF5RKvD2nSdZxdXmhHDB1BqtxHTqvY1PRa9kiZQNATupG5AKqYczU6558VWERdJ7fBqt2qHecv1bvQfsnoMd",
  "key5": "5KSNoydUq681ZdC4dN9GLtra8PKNd9DX6h9oroCsKy87QRUAaExQRiKDphj4av4B67Jps2rF8RznGCvhUPmzuwcN",
  "key6": "LHHjmBk3zJ93iDSsY7KpgMKgCZYMfWqhEGVnh6Ymh5vR2UZSU6Auv2z5om5tQMJv4Cb22DnHJ3VXt2u5QVupT5f",
  "key7": "61NhwRRFeZsdpmDuqESZs7dhSN5qZz1dRL5Yk4GRXgx4D9arTgD18dyvLUSRXTq6WFNJqSg7ewhUYcdvGe5VNRvA",
  "key8": "GBk7zUhzjCmjWXxMe7msm2Wq8JEqYRxXjGdXMiE4nrx7c8zUnJkcFDXs9mcBHAZby2PNXRzNrUi1X3cyLmPVB39",
  "key9": "35k97LDQXEhv6rJyALpfcZqdvnX9sQEVKSPJsr1b6bomSHmFwHMJfUGQofEPdGXmLa4taxt8pDY5F2YvoxHKJkz2",
  "key10": "3yE4zxxFDLQSxMgMnkjoHV7AoiakKJDtrnQaDB5tsZputQ1QXYjkZgqf7FKGXKbCXXqWagFPkVFeijWJoyRopQw",
  "key11": "5SLyYwBFHrTSQpBQtYchTVC7PJ2FphBFT3FBAto8J6itjum2pRs6iwbhijNM8jrsYpfJESepXME6AC9G95cp8Hc2",
  "key12": "sUjxrkq2JfGxvwnkVxgRKCpQBFXb7iMn2bQ3eT5exbssCFQr7RSSp25SrummJY3zDkub8ATaoEMrZKjM6zRJD3H",
  "key13": "rhy2NZKNPZSx4wn2KuaQBdkBWkEBgqLd5tMmKK9cFNzbsq9YoxJM2PD5bbg4oETGah5dMMGwu7bMBQ9DqVAeTsj",
  "key14": "4ybjoZH83py6N9YFrfngywwEpbkEoASz5FHegGAWDTJJTggyJnr9NnBihRxsL1quuPcqnNuYYdyDJTGE6P3uGSap",
  "key15": "2dne2PmjY3K1e5bC91ahhtZW2Q45q8eLTqaGTAiNSzzULRvvZVWiXQvzpT9nKB3jwNHtczCvQzHwC4s7j7uJJjzo",
  "key16": "4StBVbi87ZjinErMcoBsaEHqMuMLtp4gVE55K2m44bbpjV63GbtE7Y1DSSGPu2qJyVHPaW4FC9JtsDovQrz1hdzM",
  "key17": "44SiKqcoosEkn2AGLDiSoFsd6yJxfHCycQ77i1QRvRL9oJ6QYbAx4BeazgtfYDNeJCNve2w6redkPzD8TmaZUMo7",
  "key18": "54sTC61msABpVzvJXaNutSu7jxSVftEeYV9ddrMEkxeDZDRAKMpRDaqjBthwoAtS6vStwFqZFoDkxqUsWtwhfRLC",
  "key19": "ivmq9bGu9dPYejw2YsRiX1mFen2RNLtXPz7qsxYrcE7xwu7hjuYnwrvmiSVr7eryziAAmBCppiMzd21n2VdC5zH",
  "key20": "4MFPqFeewneqycUt1QcmiAMu2H89i7NTAGaG4vvm266QXAxZUwpkXKMuETV6fqw5Aexb35zBwTPu7P4hond816iQ",
  "key21": "5R5cfUWa7GWvxpqqCoFRy58WkFaWUZA1a3VLNygd1MDKrw53WJ2QtDXsG5CF9fc5eEiMsm1dQ3GvbBpP7RZho2bh",
  "key22": "3JjxAMUJCug8jhZS6Simysw6XD7mqubdFckTZEavLVKbNCkzaCWRMpPpR2YeSiFFNb2vimeNeura8GHhLVY6zpdC",
  "key23": "Lyqw7quiRxczFpGee64Aa9jQoMkSZ9SCtcEszpur9drB2yWjEifRvW19cmNiomjYKHzGf5sn9i21HBAbmpayQLV",
  "key24": "3N1Km6SxxHHmnDpR2iqiHDzYYNipcmK8j7HDXg5ayab6XXnQiXyMi4TL9v43aydGjGEVNNvaa3BkzW3MmLTEJGLD",
  "key25": "59HnbGzu75vjWffq8fyC2S6vjhJWSiDjkHcTeegCUKKPJWmTU2NMeigpXecapZDSC1WYJs73pyJNmArhnkMCRTeh",
  "key26": "3wr3smSRV4oPgoqJB4Xo6f1Ksv1TsndLMxia26vQz1cWytGwZ3YwSXM18uJabUaaamUruBoHsMqg4LTttx5E6zqf",
  "key27": "3HJJqwpgVfVvsDRQA46TGjGbLmSnTTQfq11zT4UnVnAkXv1ofgYRCTWC2kGvAefLUzzYVxMdejAbPFj4jhAsCqam",
  "key28": "48z3SihQoGUzr2RkLXpAEQihsfKS1thqWHk1yGBtF9FJUnSNhpKe6E6XShWRWHTqLPs5NGyzYp6YcWdPv1jrHKYR",
  "key29": "121hjqkKKRw6eo5UDV2jCVvqpTjAAdjBEnipcNFc4DqytjYrLUZ6t6FBbNJ2rRd977YTF9zcW8AG891iXaKMXyyy",
  "key30": "wyGxBAzVfx5Kz2u2gt25kRtoq7aqhYQ6W1J2VKJUmazGWF9Ddhz8grnjUkXvsc9itnJ4k8LzPUoLJ5oVPwoC7UM",
  "key31": "3rj3ocS749aN9DzL8JW85GsUyCr7emsjkw7UE8STgPNFGgL6fYJbTfKjSwPxD2tA3Zn9yspeaEzkwdKP3EKmmbPo",
  "key32": "m9SqzwRJgWRWmK84h8RrDkgCaqxGmWLSos1Pf84NRfyuhitAeajoJKLYiKcJzNmVFUaJBsUz8aBgF6Dg12Cjzv7",
  "key33": "62actqbV9Q1u2RZ8uqDD9bEhqLhUCsmFxjjMX6TTqVFVVAKGhSJJuB8xQt3CNy8fAwbH4JSausb4YGdNMxFqEDtK",
  "key34": "4CHkd9VZVyB4j7hAna9F5Jbm253md53EgFKf92GdVA8kd9XvWdMMN7Kn3hXjHHnozXYHCyTV5ZY85sj19KM5xurf",
  "key35": "4AgjwUQzmMrWqrBMmxWTi8xPwhqqR64cbbTaj19M9TZUndscFWq8YfRQk5Pc9hQoYRSh8HoZZ6uGBNfZX64jjqSf",
  "key36": "zCSBkueqcK4ViKF31YjJSXNFnuLDdyGpCSxuFFhbnNwzqr6CVfJoAeHTaE8ZQdMawUhNPsjVs5QbnLTMJZM8cEW",
  "key37": "2CTvKLUy5ZSmr89bjcK29LHL4z8uihbt6FuxjjeQMv2ytyXa9g66NFPeW5wfCsxJKvbXZTdr3U4uW9XWWuLHEGLo",
  "key38": "45A57xCfsyDyfnnk521jUH3rxRXiWWKK5VhvX4dq8sjgtX5nK1CWEZZBDbFqJwsJycoykUVuDGLPtiFB1WBjw8dj",
  "key39": "3JiUgm3KBKSohcbq9DXjfmpo7pL13j84W1kgH2ZjmfvmwtWzHmWkZnpJRn6Gmjy5xxxKLHyEM4KQzUvwzVBUoguw"
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
