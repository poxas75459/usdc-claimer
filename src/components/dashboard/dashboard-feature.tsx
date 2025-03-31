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
    "2q1GAk6ZoZBSQkJ1GuW7h8KyV4mN2sJaTZizRJdCLP7MvTebVsunknjRHFNsTT8nwoV87iQ5dUgq7FbP9rXwHKyV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HR2quuYVLskRXqyqAokSxZUwmeV9rcG2YXdcSsDvZUwCs4B3jfgyXr7GXYZYwK99pXXZQLNo6d7gvwwDDobTS5L",
  "key1": "5XssqtCFeW4NEoa52moXqWKWvvp5t27CnTu8CnsGdTxwc17ebBxqsCQFxDFECP2phVYqmykMpLvHRryLp2Ki2wwj",
  "key2": "3fFfJj7ySGHDmxAgkZJ7ugfMeF3mAVL8m7Uar6mqBfNUtMuG6miJrmLYZe8YfHKQXPaNoPERPy6ErGWWAyfrz6Qu",
  "key3": "4tv18BX5XvGSZf1nsopTG6HcH7jBTeu6uVnPMx49ey2mv8KjHP54tRvBERiUakc1Rgv5WqMiESUJSBq7ZbZXNDkC",
  "key4": "2cQfQDSv24hFwXTVF7YduBimapQ4v3Se9LvMdXWvLDjMfvX431iCdqj1w7J3YsztaRs9izvKm4a2rS2D5ZMfkrkE",
  "key5": "3EfekpXFMCEZ3PZfNLFNnUXoBETGU3q8qZQo7BGX9TDcCt7438MboRJMEwKM3DBS7smmnyuwSHH4EXx5S9zGsXkT",
  "key6": "48yq1qNAvtQkLEVD5EMEkyB5zLaG47bWeBqSq6suJmwrDwvGAru5KVuCxbmVKKC43xmTZeKmW6AHJ2Z6nkyWH3ic",
  "key7": "4y9XwVDnchArh2PT8RE6JmeBvuzXx9GQV7V1RUbQbxDGJnShUYCLrYjXxq4cjSLX5oGzZv28ws45FBdWkpAR7uvJ",
  "key8": "4U8FqwFWU9FYh42JtwfmEgXVkr3GGpzpTrMDrHzHmq53eX3kHiiVweUM8ZiqcvWHcV8iGbfnM4AeEoEPCABUmSpz",
  "key9": "2KtpzhB8xU18nacnMqKQTrJchg4AjjNwcDhgKTA63aJmugTqvP6mBsq3FNehbZCwuH1PVJLh4L5xHZowHFc2wq71",
  "key10": "3GFRXunXCSMeYVJjy9qEyPubaTdA7vB4k2NrwfqQ39euTXVCjnJC5jeCs5sS36DLb5rj1KzdwWnprxorNQHBHyYX",
  "key11": "3gBN9R9vsUvB2mQGCswPDjHWrhF99XrKZR9pj1tLSukaA5fAt9CQzuMrkopXWytTz9d5qNL5UPhtMKruMZAt1d5c",
  "key12": "5g2JEK4x65xS6vAcUfyVuD55JQWw5vbLxofEjXtdnjvjy5Hphqvttey95UinixwsYAyERrDMK4qMRdpSds2DG2SR",
  "key13": "5txAacDQvCQ8Mxhv7NJHnVR4ZkfbhungugtqLyqiBCK7hjL4bB4TK4ST1Htrjcski1jLq8VwM4wREBk2iAjSuCmj",
  "key14": "3T9DQNaGY2mJJfTmnEFy73QTXsK4FrP9wJU9WjCQWPHZ8VLjVTWGsNVUCkq1WRhDfnheBubVBMFsMBBpUFcKkVPw",
  "key15": "3u4PeurzAVn8mxY44reudtWUj2czMUHM5nwtYFvzKrB5pq9pn4q3MqFPHu4FXYipE27eRpYCGZcCzS6hYiooU1Mx",
  "key16": "4KhvKe2j9jXkheBkkMnUxRVQpWHu4V8FaE2NvTtV7ArJgkMvtJQu9eNsXnzt4ssWTXmUKij6jew43uqrUByWPVUC",
  "key17": "5zXar6a5EPgaDRxbPFefWNh7EGu3NcvgcJYutqL9JnVjYVWipzn1qyD9ysiPwsbwd6EvyZfwUBKuLB2tL7pT7eAB",
  "key18": "AxFR9nKUbq4MYkHpNdKhPwRaVvPG8tdG1zk8f43DzLEXRTnPPkN9GUQkF6JaV7tQt8o3hPRDTEvTrFH6rXytq4a",
  "key19": "3PZUCvqk8wsZZXTy1Y8iP9wTih93NZhrd7iVpFZrBb8DUW3FpCbcVnEfZa2ywxEfcynmWVTkRKnBsGL2WNHFXw66",
  "key20": "31KFQpZMP6JDnS7uDEuvMwmFuq4FMohjbeAZoULob1wqTqH6HpHrx9xPaqVAk6KJ3R9LGqynvXWwj9bXzdXbuKcR",
  "key21": "2QLH3rArZ8Zbtu55NzbSqQiLCKtrXZcitvSw4rLyi4L3zRTp8UriqprQ21ZxcwJ8W13tRpbtAhfvV5xiXWPSJrwq",
  "key22": "2UU6SHJZhRo3x375Z3hCJjMzfg9juhae1dAtnJRZfZDWakcKm4HQKmkRNmYGur6P4HR6yBRZAaGjX1qFKC38GCDf",
  "key23": "4639Y7ZAQGWAEhV6hpvmcrMzYsEXvVActZihJFcYpKTWScsSCYwjaVLrHP3vPGaoewhahTagw2z1KQAWuG4fViTG",
  "key24": "4XST4WQ3nvJyb2uBaChYNeGgVkV2EjZncXDkSRG1dAyRcjSnGW7YxQ2ayzpM65g2asJiGaW2qkddn2eX9KEsQMtR",
  "key25": "5Jvq9LWvMaktpaqVWMWKmvXCmc9FzGWFjHx5WQFLK8tEgcS5yvYZsV2nQK4Ls3QtXQ9ZjDHxxwA2jPEsNtFmHzxa",
  "key26": "362zun8yoof1rxze375rtfiwhze3ZWj83qxMdDGdxadQMwfFqBs4BGNLDd9DFEHQFhSkaPM5X3T7XkC5d2ufCj1b",
  "key27": "2tXiBN1sgopg4dASFtzRwZmHGV7AC61BLZLqh4ABTkhtWzPfJiab8AnKoBMj9WTd3r5GmBiw2hra8JWrRa1KLpaQ"
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
