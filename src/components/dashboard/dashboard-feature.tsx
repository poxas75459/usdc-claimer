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
    "MMf3eLdeoAwY6uBZD919DKK5e8mZZKxS4Pg4HksT6BiRbBhMTmMBJD2g5dWVNYNXZ8AoDBYmKGkejYAQXiWydiF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dk7gLrjKb6wcjrmDNtqfMRvZzC5k1aApLUuFU1BLFGNksrNs2ft74Xh87QGs8J8yrkwk1tYcTajkN7aoMKo1uBN",
  "key1": "2RyBbpcvVpQbHbFRRMWNDveiyyPLnZcVWAVB5wnJypVp86F4ZNd4SgwaSQDMY32xWYbXLXfXDB8etgDoXKsNPAzq",
  "key2": "2H5fejhTFk2vtkiFbmZAn2V1SQWeeX5nhxnNAFnVgBoWBfs1VXTyJM9k9WpYCEM1j2pqsncE6joX7cVzZN6M5BpJ",
  "key3": "4rTrV5acKFDoDnY8eZzsMBRZwPBKvnFTW1dvq46S47PA3FSwhvJWUE9m64wiQvMhfysR3E5PZf6WzRbq1LvXxQhb",
  "key4": "3VU2QnT7duEBtbpwG3d8UpgjVT9TQG2nBJ9GDruruY3WNsFhwLtXa41ngAbCHfkhbxmgPzsrVCDqaEaLd9JdZkCe",
  "key5": "i8mmhvNj5HUQhtrX6n2n9Tj7T6VNkfU9h5qBUEdw7huHHqA4gHA6hM3gYmRn1WsGWaibxVqQUC9gSnXrEPt7BEx",
  "key6": "2vmCkRQmD2q6rusxYG1BjYYzycNVXXaj9QKWqjVbFEX8pMMzRMgbjVaoJc2GyaCmr7BmUapbzbDZ8NhNyn8vBFLj",
  "key7": "5kEDoLyRmXAZSGakDv1asbinJYa6RkbD9sXgJ27pEtMNYQSytftFGGbN6fpbpPdsESPeazbe1DSxKku88FCDqHjB",
  "key8": "EnsybNncWNodphuZ5Pv73pidNcHzL4NBeZADvKzCmbKudKY7PBE4N1xzoY6GWeepRa5VNY5oq484F2guhNmkYcc",
  "key9": "2QaxvXbzcMwf41gsfnhriGEheff9oewGoqvZXeNb5TpMoRcJT4KMK4FsMrxRLKQigeGE4xLVnCwJf6QXRytBMq3U",
  "key10": "4tmqiYG57YkDFNmh89nNRjjuXyY1hsfDM2ayxNeaEJ1XuGJ8r5SLYfQNXNg6by1nTVoA1cMibejdFi6d2r1MF5oz",
  "key11": "4WeUn1PXMqA5YcYtd6BmeaNSzpn9d4kGWe7y1TP8SogzMLna2oHLZga2enVcQw6e8h1SnDA61ZN7EAyANjnAMdUZ",
  "key12": "4KrDJ15417cvyR9v6cjixHrbEPEtiBRPJa3SrKbcR7xoa3AKdNSjFoopN6PPhzXMZs2uxFaYiGhi5Y9DPVDiEJbK",
  "key13": "59vtVGf8roR46eAWScpRf1hUCuetThSxf3iB6hv9hUFFEEMzLubdyfwgEvCbHxh2V2gyefhLewnQAo2duQim9F4Q",
  "key14": "27MqJ6Bxo9swfWzoKshafRLGE89tCp9pmQLtL5M5RRouFCksvpza4EWQibYoURCWGKhqWTpN3nMKYiwvqyRB9asf",
  "key15": "3ck2X6s79D8rAn9HPaJWR7kNdCDrsMuYz18PYfGRdhc7HSf29vCFwZUzhLjaFCq99EVnKgNhqtbBveqAbU14Ln82",
  "key16": "5vKnij2aALq2gWC8rGDqcW67NjcWM7XHK4NpCBKCpvbzHEuu7o7ebajq9RNV4hudzSKobELeZJhbkrs5teSUn7Ei",
  "key17": "43YXzb8KniyyD11HDno2a3em8TZfG9Y12C7rreW7rz8tsUbGsLw33jJAgxMm7qgxUP9EcRZ444YM7Mng5nk4x95b",
  "key18": "5a1fXS6hvVASjPvrUqPnauZrpiCpzYtsyzE4G5watLr1CBnq9Z6wwXZkfS99gpbRn2r2TXt2LVwQaURHwmKDdkve",
  "key19": "3Z5Zu1y9FwhriGRnWDgmahWuqkoVLoqGjrruHF9XMNDtAgsUJzHVY7iR2bAdLektgBPzKQCwRmhvQ7G9eEj7akSQ",
  "key20": "5F8HoGQXKXNmGLKuoq1ENi9x9gPfUFuEcvALgRNLYEazfrkw1HQC8WZyvPyKJCATm6DVTp8r4Db1C1zSkRQRLiFt",
  "key21": "c1FqpAo6CjZUKX3MrpgpYXR5KZYv7EUB1ZpziFQwRGxZ65eqc5ELVDJteLndGbd6pA6SwnTdtLZm4ndwpbFAnhQ",
  "key22": "5g2ejnidqwuuuB7MKJSij21jry9kGJvn89PbuYBFfpCkKxrNKq3sR4FZ2dueZ1QLTz5V1WagbV6xAHzZi1tWoc8M",
  "key23": "wfWoLVgTiYPvKc1dzp81AaLvEcn8WkQgBFhGAm3Uq5ofsJZyx4L9m5xUGGE7TDYUr7KxvMBxgksEHkFXfGJ94py",
  "key24": "2H2JuzVnJbM5Qgbb6gLvq5cetUMhJV7Cn57NtM41Qwn3qinr4Z9E4vXpxYg8VyCNkvitZqcGGx8RA4nWJLwwbTar",
  "key25": "oFZk3RwoCzkzUYdLXDPx4QBTJKLFGXyM9feFDQvbHH9m8pNoPuLSKLTXVVQgQecygjwXfKa7nS9WcYSLcJgjWwf",
  "key26": "5hn9XpZThqVVN6UheqxQcJFTjR3bmGnmdzar2H2YbXGbAj8kgyLmLxcctY9YfMkBpnD8CrJj2BUzGHtPMZDaWGNK",
  "key27": "YXMfNzM6MWA4rQ25nCv7vjbfw7nmVhawvCkQYsAiQycxqNKMZTXfbj6ztUTiCn3ZwGgqsH5rmkxekQ2PgtU4sA9",
  "key28": "wJqq72VTK22ts2vajPD5cJKyTx4FamkrTEWmjBbbiGXvfVMh6pYuy8477U9ymbYNN5f67YeVUxkKN4zAdagHSUs",
  "key29": "3WXKMjcNKKeunkQfh595hx2UL4JpGyEAbAhGMTq2fgjTAqVkFMunuGHMSWmh62FFTe9fiLQwGvR9HsPoYdUSAPHr",
  "key30": "31xxRGP1wEWnHFBTcHFVAvEEUDzgZR8Q4Zw6Hp2b9jtMY4psBsF7C8j2JA1G8MXuSq63Suhf9f2ku9MdRyvc68ZK",
  "key31": "41gQMxJRA4oEsSczmpda4JRKRGandUB5LF61wgviHMz1uxL7cojJ124ua6ZKqMCxjJYAEsWKMzVtW4MhzGfqPMtr",
  "key32": "4PRDJkNTJnKo5pVy374mtjHTxpAwPhwwZNkmBKwXbWKaZJvRrCdyusNiQhk8cwsqkrhgg5n2JmNpDXtSXnuZ9g6Y",
  "key33": "4AXUoBm8JXQjpvXcyprXQ4M9j6Ldwgftg5ncu7zSUEZ8wEdSXRB1ddpCEgn3oRwLFcRoob94vdgwmN4CKvL7usEf",
  "key34": "YBrbN9T1m5SyfZc8FGmiP7RZYdRDS3uco7bTXV4cGi7HbHeKHNoPXJN59QT4oLvCG9qx22d4erwfWvzPimwNnoj",
  "key35": "4z4BYTDPZKXs86yz4xzY1tSbfQknmDKXCoGspdM6pWFxduQK8FuFo3u4qTfVywxgc5QXkn8jM9hiTDkXXwk4K4u9",
  "key36": "WTdztG461p4fS1YjywbdDtP998fGKcHfsDCp2LjW6khvE2eGwDxaF9yd8ejyeUmuDKsVgFMB2bMEyapZKoT6TQc",
  "key37": "2LB3kH6XhpU93VTGwBpECLdMfiCHz5dHqY35FZXf9bFnATowMhvbD8aT9LjZQMg7TQCzP5NpaMEqBWw9wyLCdsFW"
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
