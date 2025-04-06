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
    "2CdixH58xfuSxwMgmiZCzSaYX3vrAMCLHAeu6negEbHiihnRgh1p5kkLG47ojPtNu2n8356wHuKpbEDntGJbNrQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MztwRgGak3saUHreMTzGLD5YnFB1LX67QeSaf5pfvdxfvwawBS4NiyJNKRrHJzbnGUYf6M3CmKWMGXyXFCihGgS",
  "key1": "4p8aHeuS7xDKvFizaHt7TAe3hjsEArMt7vWfvuL845uMxvygFgbKNEmp1XCihU3ebZ56eGEFGm84TRmMZJAPACf3",
  "key2": "ddCm3SRpkAWd4UrHUagSj83CNvpVfCqJMkXb3KKvWTzGMsjKL4zya5FKxCd6CXWhG9Rmu7dXXm6YvfZNuFydKEL",
  "key3": "5rL5BVkoEzbWqUzJ1BZjLL9gNcteEQ7qt2BtbBZwF4RCkZCTKJAxSxAGh7cB6tL6EVnv77Wan6bA8Kv2tT9FyWpX",
  "key4": "5ighwQeas3jMmjggaW7vL7G4Kq7ymiVr4f51cuVrKnRGrGcW7cZ6weEhAYTRMdsZKUam8WbuuAk4dTDzYJGtEghb",
  "key5": "5dqMGvZLpGUf8bozdZ6mjRTfvRW3R5QJweaDK5QUisBdpy5VmTNL9PX7yA9FXdPHV5DgxbZqVPnULd5ziaCoXb2e",
  "key6": "5QuJA2riwmp42m3FtCkLftW6Pe5VtHhGHNqDpTMQxKx3c2LJNiKnGxZ9xFp7GYjMGLBRXmMAKHmk5DYXxiBvjJWL",
  "key7": "5HLGF6pesM9bCComcLg7PayfzN83k6nHyacYaTaE1BGUwHP4zzz127wnAJSpfG1jaPKLi1drMVUyKuxvpCZmnjB5",
  "key8": "5K1CQ3tNJjW58rUQ2La1R3Yt7vX7iPmWq6NQXCEAhAhiumm9J9BFrhrvd3U9SZjoYQiLWsN3xjii2zHvFUN85qB2",
  "key9": "4ML6d9o9xAqMEB2ygsH5uRGidP3nCAbNuwjYBg99DeJZTKsdyndEec1sLe7sDuthG9q6sHocLgat2kZG8Cmyt3qK",
  "key10": "4LkSiXZzoizV9c5iAW1HYjHCjBH2CKPQjiiBFeLFm8gMi3VqJpxtGaECzuajybuPRbBahqWq8XdHFkcVzRNUU2Uf",
  "key11": "43p2C4758tQi4Un9KeU9sz6F5DdYo9HRWpShmW15qj8MUJcvSCCuQskfwwfFBdibKbjdNcV6FnwXk3i1qyJjLQjz",
  "key12": "2GdHJseMa9GfkJorpqdvfwUs6iFytwfsQFksEz3scxiS9zJvggCuPYr7HXzCi6ian8outAbGjsg6cue7cxq2NZye",
  "key13": "5bswcpWhHfWov1jiahVSoFj3YwhewRJP7PopbNJCDYbLeu4iZsCYisesXUtUjWZc22NYdXMx4VVUwuB9uhJGCrii",
  "key14": "sBsGQFVugsojBW89oddBbm5cvPCEzajHNQoqW6YH7tDGgJFzhKKqpViSoGauYQF16d6mRWZqhN5BCXTU7XTzJog",
  "key15": "4cbAo8AD9V2T65fdBUJYbf8THJTyBFb4UD6o39jLukpfeKykVedhjH5efpr3CXN9c2XttpuEJvvgtEeDs1HxKDw9",
  "key16": "4Fb1Tmt9hAhyBbJLUsQB3tfCyQW1T2tjrt8GuTPb1GffL96CGiXLnArgFJVEPsXLMRscGz17MxzvrLRFUV2Wx5BR",
  "key17": "3AdvEbc12mbwrXPp9xv4Sg6hj9274HLeQN1pNmsnEryWW3v3dgzPzXMbamGWaTBu3NtAgTBQ8d6vhXgacmcwAjMw",
  "key18": "2XB2WkxmFNCoA5dGo8DvzS4WJP2GCG1m7CGDGpWkjAM3sgVhMKS58hQxbQ9Jx5iygsdqwShLjNnVa7J6j7CrXZYD",
  "key19": "FG18RTo21Qjbd9qsDihpnuCRTbVMfFQVRLWjzGU6bx8H8pJdXZpY6m2E3sBu3wbzDXcLMCxDntZUVj85uNfFZ4o",
  "key20": "zLgJHeZmMwsUVxuAre1vCqd688W2jjRERYGSwzJzrZemWwWdrXxDZB2nyxhh4Q2qPk7K6PNfBuKK21avkwJoXGf",
  "key21": "5UvvvTYjHnZ3YYYPtvnnjoriix7dvKGfQMzmZCXJqxRPxaMBakBi3xmTSQeZbbduNZk5e94faUwsuTAjcuy8m75Q",
  "key22": "26UnqX4svvDF5nxdUrf9xVeWZK2eyscYVbTMSdZ9SVF1dVaKSUKFMEg5Jt8Y6J3KGQxrPZpnBjX511aUcJwDSU2U",
  "key23": "44wyBA8ZqtqcEiuEpYhpEffduiuAA7wLxMXiHUBAP1NZnGSW6HY8xLkh46KDTbfT14rYARDxqauPyzdjhK8rqDVC",
  "key24": "5ZapRivGRjiczwpGUfP9kF4arEPM1AdsKaPhUBzgYqXUU31KnKbLF5qXDKDsEvyNTeQBtB9WQpKSLQ4Qben5GisS",
  "key25": "5KmttMtTj4vEvAaTLrcTGx1Hw68rif8SRQVxwSWJBVjUtLYRb8n2DGh2FEee8ik8U6gcx2VPsZsy3vNcs1iqu395",
  "key26": "5tFtFfBb1VQaZadtMMrwKsJA2CNEsn1znm43mCFvQbzZLGFToHMR6X5jtU7SwemQnHpGD4rxVjauUpsuznEGtFmf",
  "key27": "jRupAFWGAk5z23KXrUBeAiw8ozA6Dwem95kGfgKh5hyK7mW7fPJmXRu3tSJSRdJTD3hkfjJZ3NVTXVgvXkKiphX",
  "key28": "3JXEAZBgVGvNDNkrWAt3idGTjgxXKdbfgBK31gMGw2noxBQvfbZgRZMXW4B9gGQj3QdofHepFF92YupJcgFs3dv8"
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
