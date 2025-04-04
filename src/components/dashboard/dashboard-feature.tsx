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
    "4nj11oM8Z9jUmPRR8TzH6djM3YCLAQPQjpwtT8TkWUesTktUKKmnU7pCSVkaYTozMbF8wirJqdGjkezXHLxb2dJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xCTnZQd59G8VqE1AQYwPzXAK38CGGuvBYSzxv6P7m3ahg8ZrnMAFaEKGkUcgPfXtF5xrU8RgbB5DShWqJSkbPVX",
  "key1": "JY4WH9z8pQ7kwuKn5mAKChzcqnFdDXSXrmJgMVdn2HYR3AKLHx9zZkWAx56i9Yi1TLAnq6ZcC6pPDfHydJcmvTP",
  "key2": "2rY6ouhoxbAqcFa91aeUZQhHt6W2bSqMBKpBsAimASo1GnB1gJfPSwLcjeSFg6GWnoa7Y8sp1yFVhtKxabJWjRcx",
  "key3": "4QPCPMikLj4q7eyp6ixJb2ccRfYxbYvVfUhZwJy252J7Ra87LpuviN2jiHry6PKx7kwcQeE7JR326Qs4TDJREu3v",
  "key4": "4Vqd1E5BMG6U2QwGeX2efxikbUN7NyrLLMc4LN4msdRJqMT2nzUFS9h6z42kgtXDMLUghjsM5PQpCWpkKSBegZqp",
  "key5": "31pxeULnnCf5RkRjwr487pY8fbyGPHt9meHdTh8pN3DDUfvV7XGAcNPzE26Qpn2pEKHJEcH9uN7uEmPj8DGN13HA",
  "key6": "ouapKXCjdKvhEQo6YHBy1X5dbbDWN9nS7WnhEW2wh4qQqAx67tgWiw42HpGjZ8feWznGWiY8WurpkRJompjUiFv",
  "key7": "tE3HtdQEPyZ6caMjPfGbQV4qnpRXQbQrE3etbDTnkx9voSv9e1CCzZGtBMKHeA9spknx3zY8PXv7guFGZk4vNZ5",
  "key8": "X3VNW1PBXh9u2V6xA7to7atJQxw3amaqo4ZS4LCQsgznVYdXo5vnrJJJFFzKoxJsZAbU5SH6jcu2UpjHzYbr6oJ",
  "key9": "4m6mJEJbN4nGR8uJuWwYWXZrncxLqr76uiSnpsMDshq8pWCTmiW4gigVg9BDfoL5ve3QTDMrRwzwDm2hkG8FvrpV",
  "key10": "KACAoAiGRjdANqr7JoeF2oag7mExGXE6bnjTdFmawEZxjRCNzcvvCYU3bjcyEYXuJcxojb5SmAbU6ZWZJenAvX2",
  "key11": "4izMmmU9osiK8ZD5dujn7nt7f9rF8DA3DLAn3PfRRpNSEM2Z6DLhdNvnGhMbf5RcQUEizFQmZhwW9fAdZoxdZ1Ri",
  "key12": "syrjCiyrTNmh4R7qgwM5X5RFvBDoq8SF9ogyHFzYvNhuvvLV1nDWtpiuF8KbYeGh9xMQa9EqBoSNvnnwHVaGPib",
  "key13": "2RSM6fq6dxwxzCbLVUYN4nrYKAuYY6YBXGShGDq4hwyvE4STQcpjXpSHRtgi39M8UnnZ2QzbQJAppqnV7rqthxbu",
  "key14": "68qRsoL5y24pZ2eQEi4Cv6XBghUR2VPjsf2VFNp5LJ8XaFa9YCTXqj3vGhWwKXdKy253eJT4cHYBdAohfCFFM69",
  "key15": "5xpaVzXoPe1ejN79gaHkB4noJ1bN7ru3QeFYLk1GkXQLRvJcuXaX6WicTwo9K9M334y37WV7RhbmP1ZdVCf8zGeY",
  "key16": "4betpowwP7vByjc1xhErguQ1rSFptz4UBEhjX4qEuc9AULevxnrUuEPN928W6cWTDRDRJ8NqMJ126L76yx7BC2eR",
  "key17": "5oLm1rNAqYtCCdmoDQp2amwWGoMVSd5cbb15ud6Zym3ZWStEF9sw6LN2NAdS6ZL8z64pYgwTD4CWgzvYGgxA4UxR",
  "key18": "Ys4Nr7ZoF3j8MuNaRRpWkZQCPowGiffanmqhu8WkdkRHDioPJfiUe5hG5uM8e78c6HB8Wrt2L9xpW1m3s17Rr9e",
  "key19": "5bPyc5P91UpvE8mqQVi3tPjEnHnrWq4npS7S44d7AxGzrubmpRia6CCYH5hp8nrXZVaDpFPSMSRtAGWXkBBBsY9o",
  "key20": "2Zbcm3radWKRgv6QF1Y2HsLjNX9SnCGZaEbs3GTDUkD7tZjxBbBe1ZPy6xhz5yKRduVVCMeGefZWeiwDtdxfNdiE",
  "key21": "5sgbHQtzcWJ3UkRtLNq7jAjrDuxGAAeJHJ5DUurSAaaC3Vmg3V1sf5r66DkCXYTx34h7QtQ8wusP9W2ccnKwjBS2",
  "key22": "42RnLQtNEmPp3izgyysvwwGhcX22hDYAX8tEGkrvdJj2qkFMs3gM9pjT5ySYzowPPxnsaajNTxX8pdwBAmRQHFJK",
  "key23": "5SrV97E6doRFpAKE8iRd7cXZbeABL1zfUx7mtWcaRWznSXd8Dmgz6oqEyhQEeRwnSgSsNjZR5Lzk3p69miGwJU7b",
  "key24": "3Es237BYfTSsMbUnkdBgJeqPBebNXNp6FDZaw7wGREwEpD1hTP4dqvqGXAWrvqzaNUxngWaossrbWc5abt4Drz5f",
  "key25": "4BSnpe1pkgFSWPhiuyPMQaf2yXBB5rTNKJwyG1CUCURGfWpj3vc6ZCjr86HcoDGXKkDXwU1BjGbs8VedjDWoGGUF",
  "key26": "1X83spZkN3SSop4uCFxL6sxVjhLkbZqNmzjXJDUeVKG6ubNEiHdB9wdUArPd6EVvqxK5H6CUaLEcbtpxZ2yYczQ",
  "key27": "3DTxYJ88JjJW1FuQtzY44EB3t9gHhEKJwFYcftABygxVnR3AxFjR8ASW6AFoPsJWoidF4pnZafeoi8RJQVVgQGL6",
  "key28": "2R2yhjPPyFFqvoCEjM7B9QXBPgB4irf96Bzv4FtGtU8ZmWAeuxL3T41hSjbjGB6JBHHFwTr6ZJHq3wXyFyGHRLrs",
  "key29": "3WgkZqDeTWzdpkosZQwMjQqm7jwdgUnLJ7HQY2nKCuBbSMaH1RLWEMWvRKLo5TCptBdHWsWTNJcmBd4nKZ7j8kSc",
  "key30": "456BbF9GDzKEvRpUbQJL6RKKf1S91R7oYGgpdbkCysYVqBYHSdAb1XL95yBokaQMZiuFNqKX5jmDosuayC18pxH6",
  "key31": "31c8MWvJPytsFvxTU8aZ1QV1kxFrcZwsr4xYYqzj2HYw2UPFnYbakeXp1R2fhAGY9D9DRBVkt5mfSozJ9NeDX2bZ",
  "key32": "5bGkL3mehKkGGJgpca45Wui8GP64hQ3Y6VsLhhR1VxNrJsUwkcHK2puTxpQgLb7fdyRBcwtZ3iymFLGh1XBTpYkL",
  "key33": "6tqhT2eUckwrGZm1ueNyEb417tRSUKFEvNhSofJBkGKDhXxnj7iMzyRcXxFdVE3FmNoGHShCBeSSgbc4ybFzj9N",
  "key34": "3f98D5J3kB7gQWQ78nHENRLWd899mkLHzugHr2WJShZw7JFdzcDCD12XLVDTANZsZt2LRiaJTWzrkZ7nTiRTKX1P",
  "key35": "2BxnsEWUZ9cXLmzYiytoxEkHUF7nKjUnMva4nQV4EsU3NJ7g8hjev8y2BZcKFRXXRnCRep81c1ZDWD5q8hsRKpXF"
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
