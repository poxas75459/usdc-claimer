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
    "4VSBRYBt7RU9McZ6efsbM6i8cjfXebrXGsADKVJJFeRRkQKQCTmnvnWGMEJFZ2ff1Nxr3uq1ryy4o4a7tDieeMkd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sRzaaQ5LHNGB9Zs81u4SCx4Fik4LFiw5fyfS6jwDQQXmUJeAVbDutKhkqHdSXuGH5QzzKszA9DuskbyirmUXRWo",
  "key1": "2EF1dz4G3jTMhqfvfV61jgsV1VG6HJaqBrKz6Q5eC7ykyteVcqd5S6kv1MX3Uvb83xyYVnUDSi9QTheL1ASVKs6p",
  "key2": "9ENfswpUPkETRwuUiDUpmvVF9G3GULAh89tyaLc35TSNyknVN6HLWT7W1jWot2EMrG8v6BHjCT8wzY1Kmm3sjom",
  "key3": "4A1oEU9YJJY1yVDwUmbqTqgn1Ze4jhpdmUNx1hSbqataVnEdtxboQbkPj5ZgBWS4d1rqV3Lv7oHYfw1QhGSq7CWF",
  "key4": "2sWEkpUr9J5APB5rnGj48btnsTwEERiv8b72NomTZ9YLLw38pGFdAxY2ivLkyP5D3zYpBwUHDZXvr4ms7WH9EBd5",
  "key5": "3jYxjSLaVyQZTQ2bspNSivftJc4ZWiwgmbKZ1yfmH8v2sVzSMxwCwjdj4rx5wq6V9qNtZe3ffcUoEiYQtPbv4TZ3",
  "key6": "MLW7145m79A9m5P2GzgYkUC4PGgEEpGJCmJ9np9fCD1X84nJjBizo7ZcBQGkmC1ZS6JVou5fsUaviGgK1tsbTHE",
  "key7": "4NriKKSeMkrmNJFjdYvrBwA5qKhyW9oCopcjkWS3YeRHPmhvb1kqzRchVL1A5SVke9HooFbrPQKi9KRjxwFiF7Pr",
  "key8": "t2wFB1q718vzMefqBejd4W1H4ousRgpFYovrVS7oMCWA5JKkFjDSCQjyuBM9SJ9nThmbw3AG33nNzsy6aZmMnBY",
  "key9": "2BnYcqgB1UqUaEhKbhUs5avT1BNgyh7ubfkZ61HqgjtnBCcgqpUeTr4zEP3kBXWbEitJ9Eq4tnpS7FFzZA84nthf",
  "key10": "3t4YrJcz58pJbNnzD3aVx3Sworyxt6wXvDmaR4T4tgQS2kP6iNvUsHAg4CrTFyzu8BixPQbEh4ZHEzbduqPH1b6X",
  "key11": "2KdqR6BjLC9mFJVdQZTmgtRo3KyUMYg5ngR1Cxa3kHygHGvRLSmkwiPiqTNM24xidgkykxiUx9YUVNZaiGReSWva",
  "key12": "5tNfQTkRuqUzBZ46orc71iU1ARH3T6fWt15gXzv25SeZnZgC5GPSYhgGZqBsWBEZY7zAUabuGc8oqwTNVzR8PqB2",
  "key13": "3XSQbCJ6ufoMPdpuSMwXhNVqFtA3xeNvu13wZXADU1tMt1ETP9YgVfqpG6we67TFrz8vB8s8WeuBKwPVJo2i3Yo9",
  "key14": "vLohVvVkscJED67RGTPztNzu3Cy1pYeiy6A9RRK1AQGNBmLRCrqkksKGNumJMLVawQmMxGEntFFPjZYdaCRiGjj",
  "key15": "2E2rN3bTM9W8rKX7drR2U8TMZ3mL7Y8AG19cxQmLzmk3cB6jRoeXhYUqnXAsKtc3XW9ms8ccJWityqmeWqpkVJgp",
  "key16": "4u67A7GV9wWee91uEoFZgZ6yhgfHMsZLxbdK3XUEWzogZRgwpXfkNYYAWYeL9ZeCd9PZBWn4oZgJqSityb82kNJe",
  "key17": "5hz9vKsWYhY7RNnk21UszSFFzFCw3TJCByuZorH5qVZ8PrexzuyaBxmR8Bc46rvQ12o1TEGzwehVJXJ3WK3Du21p",
  "key18": "2uwKcBd7Gv4msMmAY9PUfNG8L53qX3stpXzJQdnYJwHLpRMe7xpnzQztBeotgrwHZ3r98Sonz5dicmzUp6udhdZd",
  "key19": "3CaBphcm81Sa7KREyTV48y7fcdJy3pkkaNvQZk7e6RQn3KajYYpEw6P78HuQmwWkJd6fFMbwhucSnvxrE7YYMjym",
  "key20": "3weeEzYCw3ZQUjJPSccvFzMUR4JGQM97Le8yJYTXz8QJSJTRDEW2oJfshnypGBPya5WzvWU9qf8UNdnXWBfpHxii",
  "key21": "5mtXxoWgKvKajUes3omM8ti3HCpuy48zRdqxDDG9qCqy1oghwZSMJS2nmgTr5kgKXjpMHCVrzdfKRFJeBgvkzzri",
  "key22": "2tENYWBPwbzV2CTPGZpj2nK7BMoCE8X5jpnGzCHxqGNntZKxV3KFTRHJAtRMsBSv427VwLsYn5EzUM4gyuNp5ufe",
  "key23": "3hsqcY4zEjsJbfiRHBZW2MssaaVcZwXK34GMi8z1BrwuPtjRy2ppXLJMDu2rmESqmUwH7Ru5vmDXTjL2cN1N9Lqw",
  "key24": "2uUBgA5iAJ1QAviN5HdHrqK29EjcgA9MyPmc2FxhAPufue1zNyfqW5kR7tjd4h1do9WDMGdVM1WsRh9WtSDp5HaF",
  "key25": "2izu4U8DSpTuXwLhbXFLrcAdbM7wdYTv7EDqa9ihBK9tBSKJLrUk82aDGwtqQkTmFytbdqKvd6FEUjZAYg8qnokP",
  "key26": "3ux9MdtZk4iQFVni8aRcyFVeBacvUKsXkuifQyHsSY3VQkvN9FjdwVdaHjyt3vCfSS9nxnHJ94ehYXcJQomzuTBx",
  "key27": "63EcSCmGFKF11rXggpb6Xyapo1FdZAPfWmNUt29uWHvnwLmGweHbcMwbWDkVfQXKB3BG6EWto6KKPf8LMaFWVQaC",
  "key28": "2FUuHJJzpMvxVCzSUs53NQn37hMcejkHiSxoGutWDvuWP88B5dM8CKKH3ughf8R9E5eCXGc3Ej4uPcqVySw5UQKZ",
  "key29": "5UBdYPuk4UdU2FDKQcN6LcWVSYdoV3duNRNM9BoxEZGSAaHeB3bLvR61tUfhMuXXcWwoRKvJzYaPsMmp36EnBdW9",
  "key30": "F4wqqf3sk5Eu6Day8QniXK1bnL7Zj3XSNh241onynm7A9AAJHnMDNiAhtY87hwFFzAkow7YHoKJXrjDYzbuVUUe",
  "key31": "4dCi2t2g8GMnnY8Su658Waya4SpsX9GdDi1PKPhB61SL4v57iYSpMVxLoCCFoBdbDzNaHyTR18iupvt8Rfhtxtfq",
  "key32": "4NqxVcEX9hAK3CqUhur9HLfCqpAqoTKPvEWuMCw72it8tNiUUxUU4dkffr5oFrPkXhNQqmqVmDCobtRmYyWbkn12",
  "key33": "49QbiiNoJgVN5Ne8kut7jMZ6Ae6CMEGjrvGWtSsvikUQ1VWAjcLKnNrA3gzPmtZi1StGtxPnyg24SSsTA37ttdrZ",
  "key34": "4kKRAhoagEyu8vf2mHyQ5Fo8yDuaF1HAH6rv5mNjch4AcXrPXr1vzAjQN3oXMKigJQgXQpcYFX1upwKDoqRWSxwJ",
  "key35": "4qm4WGcSBNgFY7fKUbHzZtzeerSq59FAM3mCcgxKG3ELV5dLBLcigzXCyF9vSPp1diDYTkSR65TFucWAWMze1SjS",
  "key36": "5mW8KqHiJtBkfwXfw3cQi6zoBNCDvaaETphVFYFygHfp6otjQYdJhTrXKNtpqyf8DTGmtbn52rkdBCdYC7EBnfMC",
  "key37": "5RyhW59KRyoJViZmb7aA8ANi6p5dD8zuViF1NYPbenncEBo7tiQuAm6pzhmhzj47rNG1RzWSAQsNSkvQiFBiuFnT",
  "key38": "5RcUBaJ72NvHQG5TznXwXwr1ULWRbTzCVZrqhtLF1rhpmXGG2diWnjtKRzaAhaVbLrFhawWzAF5eikzv79CFMcUL"
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
