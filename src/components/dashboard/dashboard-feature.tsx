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
    "5SocsTNM8mTY6iNGmN9c3Q5a7C2FpHQXYwtZoWUuPdya8zy5WYLFKq9u25Y1Q1D6PrFdKjryBjWroZMQUFsF4JQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4C1F2tppjs8S9ZzGUjRpfKjc8imndqeD3JXQzwm1H5ciHu7P8Fb9yHnKVGZV9SyQkpKsw2p1hx2LyKcdi8UFWxuW",
  "key1": "Xd4veF4RUnpVBn7s4mJJoa4Kac4UaMtGeFP7P7bebqSRYM61CmVi5Rv9wL1AQN6tWAqwapP4mhydtKtpzC4UQ1J",
  "key2": "3uvFARNcJSf9TD3QkhjjND86YB1nPCZoGmqJDUDDtUymBu6YQinAnfDJ5QA5S1JBJsL35owD3TDf6iXYpBywZEfr",
  "key3": "2DG7sB1dRzSrGYFNihHm2EVxKJPhHXkwqDWH6sbqgV1dHyY5qqhYXFqKMAaBjkHzb6WaVdwZ9Z3zaoCqhJ7uoEJq",
  "key4": "2C1uUn1HPCW214BdhkR93DEXtPNQKwQ6o1bYw9rYoyvm2DHHiwTWUnawj3Pd8kABveMWPZBxVffCgqpJiXzTFU9j",
  "key5": "4qdPiVLgE8vzeYhqdfUcQdTuxtu8VDpVkyh4yYusn6X4SYz8Hrj4C3LxJmT8nUHusZBmiUU5X184mcjyHTzrzYbU",
  "key6": "48bmKFoC6mgfS9qhCwiVLgrB3ZVfJWAqdmAP5Q2Q6sHckWZoKeEB4NvAZDfYuedz9vL7PSWQenPwW8rzyetnN95z",
  "key7": "56XWKDaaF5HJPViZcVvA5JaebxGZWAYoNTuG59umsPx1hnohcUeejPGiNC8m1NX4SHQ2w3hULBEVEyYvQQnycF1B",
  "key8": "4jgyaT15TWvQMZenQgRJLuxKiAgDbPfScqJN6ByMFCMhMeHbGxVQfvYzi1GGKo9UzKSkXyzc399mRjuJRQJwyQ7V",
  "key9": "3mTLNvCmY42ytkXWoU67Cnes3rDrxQJUJTDYFUirwKcbm5CZQ93kunK3APZ8MM9YGw7c7VuQVvMbki7ADj9hjyVx",
  "key10": "3B5qErefTtpQmsYWRAduCNKLzNQ8UjdK64p824NQAfLgJGx2gy4iHVEoWLFq1r5JhLYA5e2968yTPVa5jeTHyBWz",
  "key11": "5GgX67tV5LpmBqTAnrp4wijkAHsT2wCeaCTsfVM7GmjJx7QHaJ6i3skNwaTN772T19HUNYsHMChmMqQ6bksrdZiP",
  "key12": "4NDJAHrynNqiCd747oviBDxaW7W3DPDc6UeoZM6jTTDM429bAgZs8yq89go8qysQjZKZnmiJY5ANjsPbWTbyQh4C",
  "key13": "2ezBJ9uYw1Gy42U74iagHuph8wESFFE8QRF4LNdGHqujFaHJGwZ52asytMEUqSBgrTE4Qvgy5W4ihoLF6bvKvmME",
  "key14": "qp1eTyyxctfdB2E5J9J4Zv3HgASKoprzzNsAJKUxdTJpCXx9nbxRUSDjH16h5GGuzkCCsUupJy1qvrKoPwveb6P",
  "key15": "FGw1meGGmmWWoscMjXHbcQSrnabuRfrQPFe66S7oTUT7AGg6ojcG3kM6WKcdtFBJdjALifU2kdykHemvv9vgZR9",
  "key16": "4NtcWnPbzH8jhztF8K2Tt5CqoU6k218iGPRfbfydmK8UQGc85KzF87TnwHYRZENXmLYZgc2C6rNq9VyBzX9kweqV",
  "key17": "2845PsNNWDffCZHCg5pcZfCqfYWGuGFtqitWzQbfuhus6A38yAoq1b9f2dTzSe6ukqwqcshn3LDXDJgcaJAqsHyM",
  "key18": "3ugyT62rimhQb5dsadhsPVSt7D7y6yTcsTY97LM6hefu2bfJfhf2Y4CQzRWmsXajTbcRf4q5jBprC3KwExaG89g4",
  "key19": "Whm9TVR9NRWWZd9zbtfa1ptUTtTav6G8wBS45VeKzU8kNNQF32hNmtoMf6vYMbqYWX2k7YfZq3nW8nVVToVVMYL",
  "key20": "4tNfb1PkPQUwD7kLJ9k4tAtRL5ST2EgM1Zv3dxjTDgTjVUvj6hJDigR8ymgffirdpeCe9bmKBze56z8c8eVVaWpH",
  "key21": "2hzJauMkFHVbzytxbb8GbENMaUDxGMEs2aZc6vMkMT5gKhwufig9nLJQAjgBF4shryKfeUjFkhphJa97ekrmLBvJ",
  "key22": "44EyKn4gB8naJ6GeLGtAB48YSYXddR1RiqNMX8oD7oNVv5yu9zECnePrRHfsMbdYHvayJvKefMDeSMbg6tmNexiZ",
  "key23": "3eAW9oLtWuPeqn819jwK8wZkVMoaFide49GQzjYf3iEQ5sNrY2Vmf6cCoYRoCHCQkL7CaTt9Jb39hEkrAb29FEvh",
  "key24": "2iBsFTEdv9yjdGtaCdB86SLbwi6wTJopmXH7Pdc3HK3C8LgotNjkbC1dq9FB3A84d5iZHByoP9THSH58E2v1iVrt",
  "key25": "2D2BBikp96VbwFbKbKRfm3NHeVu1D7M4x5t1pAwztAxD3AFkfErJw3rTZgCdTwPfLmsbL5oir44j7pnxhw4a9EX8",
  "key26": "3f3r3yT5LWYxst8bc5Y8nKHYtnF1AKDNG2bTcokSDAccvPcu5EYjySVYj7ENQTzhJNz9uTBHE7jwvWSJ7b8qsXJ8",
  "key27": "3MsuHfQwxa3Fc6yFbjGYVbbaAv332Px6dRzbzqG3pGm7TjM6zJddctthfivPs8M5dhNVWRHtc8cu29L4iPD6Sivz",
  "key28": "54pEVtJqp19eUZxkNTEDgNjgGv3Y6ui67N5bEcGQmf5gaHYccG4z5gP5nfNyZYrBtM8BK9GZp1Dm3Q7uhyaJrFdw",
  "key29": "2bZJRAVybiyiRjyD4B2b5NGyv7LNE3HzDkswKNVXcMZBnwnYx7NXKbCsAwGSREFUyK9Kq1iyydmkQKLHwGh8fAXM",
  "key30": "7y69NnR8mLQmUTJAfrrmf6LfuQ3ex55m5eGv6RDR54D6Z4RSSuD5KErwc8Nxv6yvjxTj6U3eGTRmPNMamPxxcrM",
  "key31": "3pkkWk4dUJCXjMcNmCiAKusazvJvGCXHiVKPwFqPT5V6TeFC8gbYL7k8Bd6izGsQHisceFsfUcEgAPnPhmVGK3cH"
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
