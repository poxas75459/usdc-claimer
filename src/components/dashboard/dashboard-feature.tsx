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
    "pHRq7PwUcEAgvwxuX5HEKseqCuU6vXpe2CJp1jw1v7C3NFa4ohb8uVFaFyhhermJmvoawn1e27VEwyXt4mqPL6d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WGfYR2yoEsRDcZUXEy4gG91ft6SEmmdXnoxasULHFGehcaK1FvzkPjKXEQgoK4F18kMadRGtoEfutFs5qexSLsu",
  "key1": "GQ2rjZ893Wpmw28sE1sUSAGR3DAdeV2jP66NLQf1xCDBqnGuoMjtrJweb5AHR216DxnaTTYHHE6ZwVxqcPuz4F8",
  "key2": "2dG4vSBipMQuVWXRfKHLZSMQL7G8wRyVGaStwj45aLbeqWiHKTPRoUTkfRzh4PAsPLowuBU1ecj4b2FVbdkW55XP",
  "key3": "4HTyDAtg8fs6YwjT1HqFvoCkCR52pkKoJMvQUxuWGiqjtgv1PDpdrJs8PVHmJUCmv7RVHCxyiwQYc9jRESNXCTGh",
  "key4": "2YqSrqphnszShcgupu13FpkyvYGCDfFBHaZcXc1ou6jDvEK6fSEa1PWMy8GBTy9mg1LpjrTvkf3EbrJTG9Ex5pGw",
  "key5": "4JF2jene2Ug1jxgK4NfCSdcPpY7NCaS1qmeyK9mxRmJ9gxrThkbZgU4jST4vwFeJ8Qgx7dfknodo1J9BQp6fUxZn",
  "key6": "2rQwv3WDgJCdpPNJiHjRsgiYuJvR2QLhN2dh6LhgczTN1z4cx5GCd6nTtYs5ZCAkNiX4wtAqkevmc7zubrJ2iFPu",
  "key7": "Swf44a8K54TqVc51bnfjMLVbgf59DsQTdUVUP4Y93cqUevg7epmHTeESW7bBeEQjD7Wrr8pJNQKymHdKpYaqaBw",
  "key8": "2JZYqcS3zZzRVuk55SwdBPrYGDrov7P3UNawXLQLnxB2ZqLTynMNT7M4NPFkxa4Zcusj2tgQRqUdEh9JRdew8uxV",
  "key9": "3n6oYDs3KDXn72hPZz8WaVJAe6fNPQWAHFarPqpf5MEtquWhoZSkM39QZbeJsmQVcvuu8ogdiX6qKzwQu3LgnPMv",
  "key10": "59NqkQ8be7f8uZZt137R7K8ckFzoP7pnjjwM2v8165r6mLZK7tHcW2ibiSmFB7qPL7je5bpMPnxMRwVVrQjSkfbB",
  "key11": "2GnQs9RKNqc16cYrMT1efmmP7LdN1mkVY1qNdfuByux5uQETFfH3ahNbzt7rptii1DfJ8P7yKG9or4UHkC8pWcGK",
  "key12": "3Ywuts4TLGoX6om9TE5LAQer4SbwTpUDSkVc96CSgdYo22f8BZpMo6PHvpdCF3MBY7kG8GLinM6zaqSX8NmaWZzx",
  "key13": "51ejEBa44NgHJ4DRhvEqUKN9jLYjFrQSCeE7GoPC5BqaMoLPhBpE46RDVNpvVLUr2RYa8o8WqVFXeB7hoxywVbTq",
  "key14": "46rjGhuKJoyRazQVJK4NNNy3gYRWx3jCNUyfR4aUTC4vRRi7DpHvXNSe8AerHU86onk7g8dmrmiEbpk64Fib4Top",
  "key15": "3sAN6fsMT8qoQokQ5iuLHvacvSNByi8ZfgVoo23knztcioojMvqTd8RmZhYYbNiHh7SJfEsoUscoXK9PUCcRzAYG",
  "key16": "ox6vaxSp5vr9srLrMrfEiKRkzy8UHVUHixpdHP5q4JxkK2DbqfKt9yTqxHiGkdcfpAqmb5zmWAFcJuYweNKh3aD",
  "key17": "5fknHbEZEjMhRP6CU7MBHdYMviWiF12cjErZ1gR9mCZ7wrttwA64zahjWC7RE36BBZFBA4QzP5BjgP2dVoKxE5pL",
  "key18": "5PxxjtzhCmvqWb7yCBJVrihzXW1SnZDNakyntCmJTa9EweUR9QTSuz8qGYEYyTdDhPmNJssrkXcJxX37HM4gMjoK",
  "key19": "2wAGEd7b7TTfPA7knFZWzRkFftZAdRNBK4tSYGTVA4FfE9WRP2pEX2xFTexvBeYaPRfPgkUnoy4XHWxmqeZ5bWvt",
  "key20": "3vVd4aatWVbHEtXM7WuCVkbe4mRCJro3ya4PeFqjJiukCLLxNgvwvckYCQGgdhgWn8hAfSvUZuutWJqVTt38nAaN",
  "key21": "3NCJxaCazttNsVZgXRnN8J8sc2hG2Nd1f8E9UU9aSUCPgzTuz4C813DLh8Xg1mvQru7mGWjjz3B6QGfQvKi8GqX1",
  "key22": "4pYeVH7BTXLUnuXNY7E8RQKeq2jKs9BDNEqn4hPKUExTYjHwVTVamksmdQzDTQ12fEcBRNbKnr8CyUg76NVSJxoR",
  "key23": "2Ys9QTZhMb889smuzXZgwN8tdMGC8yL5ahYCbuFvVJrp8N4Z2UAbKKjqPuj63oGEQzrYrqPuKupY1F3cBhD2eVdT",
  "key24": "4RMXNj7j4p9ezeqG4Bb6oeF8qdPDgMrawDms5WEBCk5fn9QRnYM9pDTwFyyJogaGBrFo4xfWVLTFMAMJRHkpe1GC",
  "key25": "557oHibdL5oWCYZXGFHdYGR56f3jVdZh7KefqUzZB7ctec4cNjfqHmPAmyY2am2NanXRAgzFCXsGtB97hxLFmXtn",
  "key26": "61qBGoDZ75ThXUQSuNtZFZWX7jG9ejY2wMKa4zD4oVfDazbi9zGxYpyTZdofjCH2f1njjou2y1iRdWQQatttSnoj",
  "key27": "37YGAzGrASdGbLgaSLUYZFK4Z74AfkHjPGm699icfxhEprkaNyEvUG66kXCM9s8uBQqA8i3GC3GigvD5aX6B1rBP",
  "key28": "4zcbeVomaXtRYEtFNAmx6svtxL8BbSiQuCrPn1EAPHo1gaKGdfRXuTYowbNEZyVZwPdZGHhoG1y4qyX9EG3GkvTk",
  "key29": "3VMdNHp93iymMwu55TffZRUL5Q7zrkbhuVLE1CaEssBPHffcmzMaSUhRU6WXgN75Y7jMkyHjziVu556oSx9Z8oCN",
  "key30": "3vvfW344LZWzPL6gzDQZZgNf98PPj86cxR6dkqfKRMScGfZcJ3Zx4sq53J2bHAri3X38KEYq5ScY7NEdG3mYUnJD",
  "key31": "P41DgXkuf6c3G5ndzP2ZfAFGWLzWEEydidwtpSzUaTtwJhyj1jn1RLrQUXWgtcR7fbHucWQjUvjcSmCam1U5aKg",
  "key32": "4z5bU6SqpH5bD4Vc3bKQis3kPj3JxksMncbSyLJqzhnpViTwGvAEXE8VqhbjrMbjV2qotNe3MLJwWE9BpE4mZ18T",
  "key33": "5Pgad8JNvJx6NAWiarUDMmfXkFfUvW3K8ogpRsryZ8iyD2VuFsp1Whbk33YhG17sALdyxZBVpEM32hUQPzHXh5WC",
  "key34": "yyFTtzg9FYXyHJxggdawFWXFgWAs8rpey6NDTueTSGmvBmyyrxstHSdSw2R5JREd1n8APH2wboqkf41RaX5nGFy",
  "key35": "4ANJct27RuPgEf3K5nSDe1n8N1GUc9R9vyjTVuYcnEjF3wTM7XnD5UBdyFh4k1yrjuBDoCnFFTYMU5XsF9E8fvxT",
  "key36": "9zFyzxSPWDNZDtKQZLpR2WaqxNZTGb3HTBLjjYaLqrLUmuNyJXgyngR76W24QHcf4t4kEXDj3gnhDUJ6DaRPqZ9"
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
