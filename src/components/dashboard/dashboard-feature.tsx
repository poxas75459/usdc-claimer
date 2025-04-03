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
    "rW8mgm6UoFD7cw95pGFv4xgdmF3Xgo7V3mppcHD6ZcQAYn9GgQwxU3qNjw2UaCFBA2Yx7n5DHkARc97Xz6LjFgA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xgTAwg3tyvvYngVvQpcAAGghMK5nT8hNy4H7MNb9YdJW3M2m8nBf9SmoZEAWkWr4o4ypKEzBjbRYF4zJaopBQpx",
  "key1": "4n3gjzg3UbvEeWBYAZMF4e9g2qCUHGZQELX4f6apKrwAmhobYxv4qHbqmLJJ8U3jLYCsbbyiy4FDpP6NvR1WW5d8",
  "key2": "2yaDeMezaM4zAbdsTuakxfLtp3cPE6oty5mMw1spn2TkHjcdSL8WJfNPFwoKkVbpzQjpTkoEa8jHAEEzKkTuzdEr",
  "key3": "5YKhAwopVqBG915C71hebcusiyt67nVRhoR2BbDUAkstVcCdD246iaGVUnbxTv76mEVUm6GCCewQFfnm8rbWANW6",
  "key4": "3Jg1QjARSNnL2MCuCXvPhrwZC28B3BqeqiZAoDE6zQdoJaFqQYyYMEnyAwC6xqRrNWefQ6hGVx8dFn2hMWTmfQV1",
  "key5": "ThqAYQMXb4ncmevZEtZ3RSfJ4TezJ8w53Ri6Z4jnMbCUENgYiQdoJBJRS6JN1kGh4mUdh1etZgZGrSsAFDkyn61",
  "key6": "pAXodCLLZNA27sefNSc5BgPZzk4Z8rjnDw1MDozqgnqd4ZozGw7D5rj5h1JUuJCT1YMLjUYv5pvqChax5Qqnonz",
  "key7": "5h3gCefaHfwHQKG3Jgs5GCQvLNQkGCEaVWkpHeeTPabbpnkr8CQifDTqfUCJDfaUGN5wJKtonXrVcqg72aSCLeZC",
  "key8": "33g1JgjVSi9KPK3GWw2B9VV78oR6LxR95YhkKTyUUMQMMXPfK3jpxCCRdhccs5buo7CGC2NdCH979dVrcACCyFzA",
  "key9": "2nPEDMKNPb3zjAMR1G4oum5noKQurjvASPSobEs4jPugmveWB85GUpWTk2JR5Hu4eZJcxbJgKmf4hLZqZEQu4KUs",
  "key10": "3qaqB74Rt7eJMDdjff1ND32GNz28V57BdRKJf6AeGzbWLJ3NMaRiCKmAyG3AqdLaVs2kpWRHnnncGnrWTgrRrdzH",
  "key11": "2cuTk5ER2FJKEbMcphfxbdTefyzqq24iFYTn8cSkpJuQ8ZZMSVfKpcAqwTpFnAWeFVqNphWuL9D2EX2a2f1yraqt",
  "key12": "4BQ1sA8KPzmUwWwserRCBy7x5qoZ8JLWh6VrFkprPggScoRkvWxCUcXpTzMQNys6PVMpNc5rBKqCPEDTErEJTsAX",
  "key13": "5Hq3c6TGEnRbjstugKkawbdJzhWxppPTmthbhGevda91iufqdEourXmTVBwzCQcZiFafbxa6HYL5fiWQcC93X2Tn",
  "key14": "4LDsxMZYr7E33vimBNWmyxHNJRYvrghPuuYp7UWB1fu63sr6jiRRxu7c2oMJqJykmE6mseafGfiTMjRykAiPZ6vQ",
  "key15": "3TBMwZAvvEoJBR5g8TSBCoPwiJqcKtuGE6H13Fq5NRPNNzVQVAwMLBU7VW4D2oMnbfA1gXjqZQaKytQrx19BHLMH",
  "key16": "5XXrWopkjgJzwtC4N4JDaPu6PXnAphJHFzadQ1HGWL474Mnc3Gh2b2nZhfcHNBX5rVSwndHtscNJpfu6RvX9VSuK",
  "key17": "4iABzmTkHKHZNsdENDR8EscKwTihcT6iBvFKSovytnVJ2v191bU3WBuNDbNALVNAR9y8yG3EDQ7VC3fyJ623DPxd",
  "key18": "3QCiVkM5QcARLxXG2dvaaf5AnFYmzXZY8KJRrU5b6gB7PYQwZgT9HX7b8g2zQEBULnynezGJQCrT6jiTYEpMkfmx",
  "key19": "2gjZyVU4zUjGyHQbwZTXCAjTEQPqm9s9gMixKZDejwfXi7fsEtcSwytLbcc1bdZ9hySJ4eJrymoxdZ4JvNAD6Qgt",
  "key20": "2KnQ3chk6cKcRrJdBWReV9RZ4eo98tRY3tLdk9d8Afa64xZVGMpM54hUETW6dNmwJ8aNKYcmAdbKgq4qAHdWLEyq",
  "key21": "2cBM4Rxit98bDZ9ARHA7AcAJTVHEKYA7GbYTQLnUavssXFLgM2iTRSz2Jqx7yKKA1EwhU35XeFB9mPXnAVhLr9RU",
  "key22": "24oh3qJrnm6MqSkPQdXvqzFkp5MTwALTjMVADtWJyTZFpUvmRDNL5WZvg2fVZVTVc5Q7w6D3rZcVHEwU5zePCvM5",
  "key23": "64JQJ9Yz3ovGaTaGt9KBbsCBLC5T87RCcE6JBLKV2usQPHfsyF8gxD2cJdeYvFw8SskJLsSQ1XTD7drJiZ1cQ5FN",
  "key24": "3Wm6WZPs6HVR7BgTxauejQBJPG3uPE7sDDk5PL1Tcd3EP2dLqqPuknUFCNwW9GLfxgZeF5ATkaAg59xYwMQbyJBz",
  "key25": "5wiQBJ72y8eZNm1TaB8w5Yu2Kahf1wNjcjPp44PwQ1fKPjNnoRSWzFUzFcAvPfFdKA1BpfnVC1dQwbur3Rdb3j3T",
  "key26": "3qAZM8UvKvmsZR6BQNfYE3rc7xFfDZoKQjSBAJwHZZKiwdEhYsj3jN7HoaQJocCqHAxDfdjYzH5pNGwiVmn7vqR4",
  "key27": "3bn3zmqN4uGvJKw8kUNaZck1u6qvxdLJXuTEWrZJAEXTg5XZnGgiESGPp8PnUtVXuLFaCvK4XZjCoqfKvVWYxj84",
  "key28": "NjKWHLCLS2TbB6MQ9wS1KpFxbnhBFQsQ1cp1vvTm5bQa9FXWSnR8wEQs2WYc1J1JnVzBjAFX6R8oPj1xgEw1SFi",
  "key29": "3mi4hosaUwWZA7QzJr4jJLfJSAysu2Ls5SxZqnR5R5iiHtXdyhyyDjqLHnNKXxzz7z3YUrBu9WWfKLnWAd7RYkzT",
  "key30": "2QyBGLvmkeSTcZYpkpgkU5ivBzws4yPh2U6AvWa5HQAdc4EJHXjFSX1hCrcyAujZCAxU7qfWThL6QYYDuRbAwjJf",
  "key31": "33BjpDRZjKht5TGTAgRFE1VBe5ESyUMGYq5uVebkn21b6qe6hBZze31ymSegnz1L3i7yFZTFMtBKsZQTkpq5yKsp",
  "key32": "4naVNdKRt3d7VRqaPJJtM21X6xQCwFNFW3MTbz12kXYZJjFZXjKDMcWwrRQ5cFz1BBYASnrgU47VRzS5zxUYRxMU",
  "key33": "5JsHcvuzvc69xPFWsJZvvyDJ5KCwHiop1jSMhQi8cQSHz2nQjqW5BDBfUGYPhRgBgPhq8YtDsXHS4W6TLPoreA8Y",
  "key34": "3MPM2oPkroBGSSujgNyUKZtdMqv8EX79bxDuhFwsqtp4xUrU6QKx8CMdR3N9sfwTcyUMu7Kr1hVp3JYX2gqZXsCW",
  "key35": "4ybWmAhjE6daax1LNWsibwsMicDTRVd97eU5f5edKPKwkuQcuqEzBkEK6fDyqL4VNouKcC8C7wbj8V6g89qeuvEz",
  "key36": "4FFQpfGXY8rAVa7LMhFSsqbCySBxCG2khWfz36fRabJ6b3F68d9f5ZnmYj3TVggXm9YmzZGAtTd95L8zkzXApcVQ",
  "key37": "41KDw5oUbVyttkoTAPJ9cDD21tETGtx4Ajg2VJh2YKshevdfyHWqMAZqwcJfYokfbEFDFaiK7vvL3A5aKHaz86gG"
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
