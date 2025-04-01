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
    "2enb9a7AFWMqB7NjdTSXm4une7eYde2zxZ51ARHwZfA5N1LPYeFMzQ2mb5VngVakEs1sUp9Kaj856AP4EEQxtq81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tFWUMLEk1ZTF7NQJFaAzivRB6Q2FivvXf3V6AHnyeqoLJJZQhrZcK1RQ2nKKMnwLN9Z26yEQyMoazTCrRbNSByb",
  "key1": "4rHwjnenHkr4QoZULebe6AbvhkhThXFQbnLcKjoq1bAogUQxESPNm1KrTnXk8sjUjPiZNs4kVVQTSCZXxmYqqViX",
  "key2": "3KoTF1kQsSB6JPQnFFsrV8NRqtVcuAcKHdd4cxrb2mHDvmnYnmrHszR1VFK7b2pwFQHaxqZf5PMNX17tuRJtuXD8",
  "key3": "3GDtzNV9tT9Gk52BKeZM2n3EWv9vYH6UEGMe4TNkGr1VTUMmkWF6LmJMsDUesM8iokqiV7mMiZs1SZsedyidenGr",
  "key4": "2AwnChJqbGYVUJR11kNGWkVncJpEunJHBAZHeyGjHKdDa9di66WW9gXjP6Fxo2mEoQrtKsphd8GTVuiUK4cjoXr9",
  "key5": "5Aya9CjHm7sr7vbwkDx4K3X9grS5Sq1BRssncv4iKyF6d2epTqb5gHbpCKPTUc62jt6V7iYdUzfAUg9f1v64WX3",
  "key6": "3tc9ZHS4eAS55yKujkgcgMbDaiQSpb7mnB4sE2PvpV9FSoKQ4hTGFJ3sc51QLG3BotWGRc6kv9LuDXtpqF8VFGwi",
  "key7": "2dnpiAnJgdqv8qpf4eQtJEYvwK6FDNeSydBi5DE41nv7Ma3Cri5LqpivsvT1QCXVbbmEv4s8ySdwYceVAL1ivwN9",
  "key8": "2Cw5v7WvjPvDeCtJRc1sBrDvGPCkD4ZjHVd2GzLMyyvH2yzmpk8XQ7ic93owQCZAFpTnb5B2pVGtkcuJyJ5XHMD3",
  "key9": "55JDAmQ84Q9ttYVhXJpZyN3NERFMgv4fYHXkqwU17renoLZsMhJ8f579ZByWdUxB9juaoyta36njWRgTYaghEo96",
  "key10": "3wEgwM4Tqu83LTSPEo8WaYiD2QivYtEQRY6wiuYZJVqJDuELqcuvSUAPm8KEVxP7eqJDNcvDbeAi5YPv7BDdNdii",
  "key11": "2YCPTwm9NAup56F1DSUM71DQtbTB4Geszi3edswZ2bZE7sXF8FpoYx8a1bNB3ekVZJrr3FFg2cXHNFKzwuz32BMj",
  "key12": "3Rfcj7rKqUbVB8stDZEHtNJ6P19rWo5wirVh582imFYpMPcwpHR3X1KNwTds5BuMyQtgbUVmWt2twLUpMpVacH7F",
  "key13": "4p3nfb8CFPnhcGJjQCy8XHwQvrB9MNZusoLj5Qyz8Gakpr4DFhdRYrgRBZYToB8HQHT16vpJ1S3z9UqyrPqfQuHA",
  "key14": "46NiekQ9qnsj4xcNt8VdFbSWPKyRuCCNoaDH4CFXcLQfyFBY7ixXqSbMCemrjfYMffcCcY7aZGSShcZ7aaEvKnFy",
  "key15": "3VK8HppwV2efrg1CZ1us8oquKRYfyrCC7DMHEZ8XmcjekkrD7FEMHaKwbjuARsjvEtbMogjtLb8wBa9z4KMhspHr",
  "key16": "55gCNBFs9ARnkiShexthNGjQkPTaiKMvRbVAmn9hWwRzRp9djdVfpPxMZ3LJ9TZjn1ByDK12GPZkBNark2FuSRV5",
  "key17": "3xTdq92oUp7xBaYmeu35ddkn1FGseHY9rMAkVv8ujS1YdikdZm3ZTmKktGV5UzXka8NMT4pQJ2g5KiExcXL6jobY",
  "key18": "4VYoFNUwi2v6oaFoCaipP9gBZg9XXQt5iibbF2tH2n5wruKMexxEFoXdA4Lrqczdc8Y7j5xqsfVMhiNEGN1YeYy",
  "key19": "hhHBFqXd2bnEJLARzqWU9nBMf5g7LwGewQJva9xAqmwmqoZ2MiqzvKr5QQZRnUvYHhLEPQjY6heZaftGvNiUJQM",
  "key20": "4fj42TKs4FefXZGg9xtBnzUMB63Miq223iyWjVfsERV12mehzLaPREDfGBUAiyYrGmo6t1TtH5zE94xLqGN7d2Yu",
  "key21": "2g5qJ6hYbF8s8hKhggmDiHYVMhsNNZguGXGBD9ChZiYQaQxxm7XgeCuF8weaB5M8FxebQjWtuxq26XEeFYsfJfUs",
  "key22": "3fsMJ3gUA1pUVwxvaP7uDDijN6cnWu15rQmoAagjDoUewSoy9FRQ1ESTnJsMfwabLjGgthmN8bMyTAMKVh65p9dC",
  "key23": "3BKHRz1XySkzNBQeDfK3wYT4xVRCZp5fJDYZ93625xkf9yX49HVHpid9ftfMkhQBNTmhZLe8ZR9RRCEQNGgNQM5W",
  "key24": "31jq46uSjWgqFQy7haUBYAMApFXnoL8WwjL54Mckkxzs9hwJB9cZpnEpm1ZhtmrruLFJfJSoGxAP3D2w9LNGFFKS",
  "key25": "2TrfgGDVa4Xw3Fr8kncckDytDdQKqbjTmLWms4KjLNApcc1JX3CCAso1VVehxyFABp4RbZkq5rMJEcxDLgpum9ba",
  "key26": "3EsiCQvmgGeGUgsPx3v6kfFRkS6SQtNjrz9hhZviHGKE1mC6rK8wZ9faptxhvtk1HeL8jTz5f2na8TAMDdV8xUwH",
  "key27": "5L1L7q1B6yrM3s3Nhq7irvemv1BuLWzqr9a3HEu9MJuPgL3Zg14qdijgYpduxZtdzKNkT1BYWGsxS2Euu64iaVGZ",
  "key28": "4BKuq4p1pCbsNwizQwi86RB8iMTmscA7YZb5pFRkMf4YqxsMk2kagTPHS5daEAZbgKeUWC9UWVZpFT7BnfszY6qA",
  "key29": "4S2qLBvHJFCNNwcF7f25nDRAxu2sJdhBHxP6vc2oa8KKmbKhTTzFcWUt1uLgv7ohzLw8aZNsRrf6JrTGeTS4Dq2j",
  "key30": "3HRDsnneCCYjAwHFgSWw6jUUj8YZDMchCyPUZrZ71EFuxfY5yvHgtkkJSXyLKW1aTQVacU3zoKoH71oewdjicPjv",
  "key31": "4xk9KpaMDC6JVevx3dy8StCEJxgEBxhiyiVB8wgSQ1LSJvZRpsUwCVJP5ohm7FLXWhQ41AoaoSEdLL5nyo9CY3Q1"
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
