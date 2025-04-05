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
    "5Nj2vDUjTf1ZDqJfkftCnxXH7tJ78ELcQwCVSq62VUpUCooHYy6n9XERNHdEw1tQeXhx1zShVCfCr9HEc2nxNkmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sqcLi1CAbcKbbCbABWhRzCRfikKUQeefBLAGjjZUFNR5ZNWZBj3BYpmUbXLwwQgNYHjSL12Sg3x93WGFbXG8Vzr",
  "key1": "4FdxTBXsxMNicF3xvFp1ZpyBGRD1mgjBnBb7qapviVJhXdV6J4HvZuuj8wNy8MJzB1c6A16azMgkVpHFB7fVbM7n",
  "key2": "3WKB9TcbF2E1seFidnsJJBqBX4t6kYKRmVRzA9vNRgWLgxdnvRszkWHF34qs8pr1jk89PdTxoFT5pA972cHfd4t8",
  "key3": "2er343QcBnuJhSu1PUwy4z6U6QTtnHKwU9mXfWe7DVQob3h7Gy9zF6v1TBDrN9gnPdVuqnjEQ8vqBXWV1rj6uTKa",
  "key4": "4c4Bfb8FZoD2YV1NWWrQaKERqUvTqMkves9pQK84i2hgVsomhcmwebatqS8avvAmF6wDU1fqVnF5wyMDPHEhb3Mj",
  "key5": "54ow2t5V73N6Rsbrnt9nvgyU6bJFfA2BL5AJCR2RAdN964XihLGKr29xsC6FpsnyQRSZ64jmfQbqhDK1AWvQZ5EB",
  "key6": "4SAYsGSKPgAitBytbHRebU8VawvjdEA5t56dD6qGujfaTPUhMrLPA5gD5DRkxAK2WkTA1AxbpfJ9KfphUiRFdKXq",
  "key7": "FzVYfJAjrAG4uLm2me3coa3s9rv2gedSdqGtejaGjv6J7ApQaFrhDyQiCZiqdRw1TMzR1sf1HEqKQVuW8kQA893",
  "key8": "2LKJSekiPjUuK2phuyuiBiSowkBYGSgyX5JtN8FZuJNixkhZ7M8vToAeKTsKxvCZ8wffUJK6V3aU84ttyWcPSJA3",
  "key9": "3T18ZoDCxoW4cQBdiLHM55m491DArgEZwy2PFAPv2RdQNJPKr77RV7jdhSXJtMrGuy24LaSsFfFZkSu5k2dQVKEV",
  "key10": "4zyRjvqJEcd8F6c5JShjLkBYB3jJ1vJguJHk8RrcRvryHqadFZwnBvLAGGwwUTKy5NQmBUqa1WPP9WFQ1wax93pv",
  "key11": "3MtNxQBEQYTg1agqwtQVbZXEgBVkKWkR8m9h5LAJG4Ki2ghM1FAZMHt414tRAwUQGdYmhGiDmjyrCbSf5oFuGdDV",
  "key12": "3RgSreuyeeVEmuS8AF5dWDUPYxhejBpGGo8CuboYoAvaaAjgsdL5PZAD4aPnzZY3Z88J4673XDiwEGZwWCCu4NFa",
  "key13": "au43CCHbiCyfz2Wnme9kovzd85eZ8DxuTzaFQg8BSfsMgJQGWcPJUEfpRydnVRKaYQ7HebMntE5CdkgeBPiSdk3",
  "key14": "26zvCgFVJsV17G8BVUPWhESh8B5cGSHwP75XRgv7ma4HZJpe2NubwSzGJsxrUVgAWgM3U7r9gWGdKH9rZh3YciYf",
  "key15": "3K8oCSJNZy8yrufjbN7T1DmW4VmVEzManPgETJmPjKAqgWXS7KFaip9HAM4f2HpUVJNWHZp7pbyxJmNaU8MxM28z",
  "key16": "4aBDdBxsvJ3JyqUVM6vasP5k9LWG45K7vW6cuKreB29uBqrKWVwX7GFGXBJfvvZpsmqGBmnkKvqTLZ3mivivAwRj",
  "key17": "vN7vsnU5KeEsfJqugxpkouQ2hiZqRTX7Ga3qzG64S2p6AmxDp2MUPZuVqZpgFFQXtTeptz4SR2YK7H9sfc9RUab",
  "key18": "GUtRneNiU5KSpwMCrvZKR1GA8dKgGJPewZx8N1QJfUkGd41BNZPHZLaPZ8LCakKeDsBheYVDfDbc9RsoGSvTKCQ",
  "key19": "4XQk5JiMoLLDmVVb84B7RvceE9PQcVpdS3ha18vXrNebzQj3mHTFGSrVHorJXTsqxq1eSBAuh7ZzxRdqXVsL7dsC",
  "key20": "4gQwitZo8ASYciz92caJ4uHDVUz6jAbaMDC9US42vBakwg1fAr7ixWnt2qpGcbX8rgacoGKFbvMYXRDDsBytGNm6",
  "key21": "5J4uKtiSzx5HUHzfqyf9oLtU61YEqLEA6U62uWm4AmoEVsQU5VT2v63UCsdQz4PRnASEcdoEMbb5Ve9u4223n6TG",
  "key22": "5VQiXzWnw78ePLRL5R9do567838w3UVeNVMJkDXcxX2QFvsVVgb1P3VDQVMzEud2EpprZyxY1NRQdd8eD49L8wRm",
  "key23": "32Hp6iSZ3hzM7cHcjSx3bCxbtSWiAbM5J7YDwHpxPqgCp5UqY1Xvi4dE3MR14cucou1XKwUYbZq6FVJH2iVBPMPe",
  "key24": "DujryiFdA3Pb5LjEuYom7HVFmUoEuda1pBNc8nL7hxaEdtC76daN7y5VYwF5gt5363w2mccxjNPJXc4CkPirLcA",
  "key25": "4jXDPHjtZnEZ3dPiNqBvk9KyoUjdqW5xcp1AGNZysz4zXxgXRQqqzGFbS9j7a4hkdC2DiZA6xTXrirEEzWRmHQqm",
  "key26": "66AY6gRsUkw6ESgQNYNk6UjHnWvir9AvNQv8FMxCLBzNaJ1eKE8anMgiYHQ9huwdRbUia6gHyd4V6bQoHZ28DHec",
  "key27": "vCtrB3wZm6QsAYmrXmF1ioxu3oohEw1Hm9KxnABhuQTHfmF5CcvEyFHwYz9CnMYok8GA2zBZa8S7yZG6Y9oGnqd",
  "key28": "53XZnwg3yXAMW3fnoJBUzG3pNoWb9Cqy9uunAbX4896chz9A9xrpew8ThmjsJMcNJdhtsnPTdB9S7wg697ySPx9o",
  "key29": "payD694tPdC7uPMu8F6EHB6uHZJtoqf1UynQ1c5RnLNgFuZbvNEbUpYHTLBYYpSiuXpbTYrHDKLT4VoNmuVQT55",
  "key30": "2Q6ZBPzeyzoLVbj31jjkAFmGceRAH927jXh8PpXws1nNYWWaqAik33F5YmMPk2ZVeAVX4kLqV1LkFnnu9J3hMJsp",
  "key31": "2QweCzgkShZ7ZcqhcQ4fFUg2xV8zeRMUzVa4HSNwnxkgyK5EWPyXQPEbY9szddBAmHb6UqTvZrLPUQn63noPjRdy",
  "key32": "48C55XUy3UyWEHqwv4D1iz3vk8j3nLrtfJmNrmwXLjwkqGsSsR4bJHBybc77tcxj7N3QFP2dvjj9SeLp8k2bFPTm",
  "key33": "5jBwRspUGnMcNNCo6riNS9iznzNEhr6fcPjs9cDWZqSoYQXvPnZNiQAeyiBBhzXGUF4PA9qFmF3zBFFhARcwzfaU",
  "key34": "PBGznJtXaUcusXRRg3gU5ixXLkhLkT2vxQkG2DA45dWJnyquu3QPwLHHR1eYhCxc41ovri6z72aNcbJ8WrLE5ZL",
  "key35": "3Soi35sVFHTr19eLmrZSythrUs7jk6hjx5Aqsmccv5mmV5RPNE6CRoDz9spwTGEHU3878beo9bnUy68jYR8f8sb5",
  "key36": "54kfjxiyxEhYn8aaeiqRsLXLRnwo8V1LU4rdHgn4oFX4eEnY826uqNfBxKeibrsgsSXSvVYJkHAh9Lhwor3ingbh",
  "key37": "t6Y56md36zqcDaYcbyZTMyGWL1MuG51b3o4Y3T7tcwyhZNMNCzwzbiD9eUz6xV11vVYyYDhCzh3LugyZqiAnoKg",
  "key38": "4sHV6Q8NkKPBDvcb1Jd3oZHscvmzyRo8tZimWqb4qZp7rxauoFQSpXfSBBRyrDE3LvBve5kqrK3hDjo8rU5Jz8Ly",
  "key39": "3UVb5fD49kcX5rhmsgAZGuMNViGSXjnk8d5xXbq3sfQLgXXmr6QAPk4e7S3ErjvxLZcKPGbVpH2VVoz1RReVEXvn",
  "key40": "2W4kerdeL6bePg88ieEHrk6kNbcGa7rZKZ8haAFAFv4fMpcX1G2swFwcz8XwUotYfLCNZUGm1P5Z9syvTLmTZAgg",
  "key41": "31e6YYDE9Y4odGLL8J84uwavQQVLMzMd4E1KjuLer4A7XejgpyUfJZin8admW1rTZnfiLcAozoadG6LjaM1sfYEi",
  "key42": "4W6wjxDFUmYGALtGCRsEVjZRepnow8z2Ac4UNWe6EbcTdHRQSAXSBmQmaLTtkqdMNR2WT7TZupXKxCw2DAB3cubB",
  "key43": "618991kvdFtAkguJPm3kdKbE2EXmK8Z1FnR7esX7SNFRiyCP1DEBqVzJ91M88F61VkjA3GzJ5DbfEgmcDR5F72TJ"
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
