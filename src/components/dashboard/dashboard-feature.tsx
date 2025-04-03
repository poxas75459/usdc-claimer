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
    "4wLgpiZsZNx1rVxNMNHbMs94cWBCWdV9TicBNo14Q27nrMijQycFKmQC2DJMuxEsHVFdj8ae9k1kp7twKeLXK2kZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ur9zLkCAmGMXo2ho1NqWUxLSjDkwRCf4d7ztEzh1JnKfhgP7xRRMTEesnX7bckU5ydASFL45qjB4s5mGdRojHw9",
  "key1": "46t43VsQeAeh3uRTzaspHQ9tYhdL4uypQjfnnkGZcCngY6BA11xNH44unLrNwjVGRBwAfvQobEZQK3EuiK1ymTn3",
  "key2": "2cVn2mtbtMZzARyaBuQdGmytgdTnx5sQMo9PRhQStjvAWh15k9Xc5w8Z3SotqUidwUw4d6MabWdG7uDWRSicT8EA",
  "key3": "4qW3ByyhwWmMUqdb5Qz8N77u1RzRsMUgepxrMQuVAb8gQYo1gezorEKEAqACPPuhgenDQPPYk5mcYEcJFvvtTWr7",
  "key4": "4LtQDoZoSodgyHEfUuMgHHrgzTstWTbvTPtRA9Kc6n3K1CZP7u54ex6EN7PL4R8Csrh1sLtTZXLZCAG9xwiAhTJD",
  "key5": "4dLyASofL4CrhiRY1YMUkMww3FeAyGpi5ru5uARYjXMTdJu8fuM8Q1rqJmh1pd2X7KN6LJTxgBstDQrHg3SHeMk1",
  "key6": "5nQGwS62i1MrX4FtD284gVyY5UxvgmT3pzSNHMNbSmpoV1SAN2ZbkRCzBmAPWH3ndS7EBuryJTHEPUF61QHgKXP2",
  "key7": "94unEQWZ8sBYVTqqPG2kNABHpCBgiSfWeEtwAiLJxBtUha5XePwTqmQYkrGwv57m81tn3fmbf9cqf23qh4i2Ng4",
  "key8": "3pCDNVjy2XULuGJTkrrSW6444hGSELiuv2CnD4HR9kvuLETB66R9KrRSC3srjNpKE71ppH4SGGtLLNWSMYKthc9w",
  "key9": "3LvGA85ji2JWruTQt6YHVHXyiax6Apy7JQ9ZHPGnXamC6tryr15dHtSKmZhqK3GV1B9hkXPp33ZBrHJVsYeeHaTM",
  "key10": "2iumctSra1rNPuN1KUbjyTt3QqKBAkvRPyzXAeYkyGuZv6Xsr1jNkm8TaGFZUbBxuHLfF34NNJt1SxfzgM4QfdQt",
  "key11": "2CLr128wDPhPGNyuUEZHt2ptKB29g688HQ1jvQ8bHH96VcZeS8tpQQkQFH9zjAto7BZULiMVTtJokgZS6WZiyNZ4",
  "key12": "3oCRATc2tQqSi8Y4qkcAnyknsnQCBF8YL8JNLXPERMGXsbsjkpnzHSeFkd38ahyJDSkmdbZzj6m1TvVuJBCs2z64",
  "key13": "kUnJAQeSLsw6YwPeKDUHiE93fafPDQNUnq83ZYHPYc113KMUBeWGFhBTLD3WA5PyEABBYJ9vNShmPmSo12Ein3m",
  "key14": "3dNSQrVoJubU1AmwscxoHF99jqFEv3rtUc4eJ5B9oEQ9tuJWzBEcvLYxWtUM818Fp1vkdLHRNUy4aBBkgtPZ5ocC",
  "key15": "5QVi922aBwwM6B2tkXoNeujUbXhXJLq4wWfpF3gnH1ihwNfk6GpNQcN1ZHbXyc33k97vDWeimLDVSABzLau8ZVFZ",
  "key16": "4BemF57AwZbV61tRZmQPpAmqyJDnFzKed4XHq7kB2AbdqJSexfxwVnnWYcSiSwEn7FhXqq2xMYsUazpTpqu6r9ud",
  "key17": "5YTNBY5GgeAYuiQsUFCskAfLijASngPHvGom3vnQunbfuyd9v8w6HGzV7idhSVsvrtFP4PCTHhRf2Uo8zYjvDcoF",
  "key18": "2AVvzeTQqsZy9tUtHPseRXoihw8wPrAxhgsvo3tjqjNMtfQS415cxK2LLYmA1yTbAU7pybryB89NH7ppbqZ7KTe3",
  "key19": "TMrqTEdXUqtRR95LF286VLkhNUE3GQD3ha8v8GvBZMMznKVFQ58VnH8ViGcew7n79d3apEiksSvkK56ETqd59LV",
  "key20": "4hy9NNrA8VMvbsKPd7sKYbJRXdME7ZeWv2wP71deii71xVdW3LbQxCrgYfzaoJh6AyYzMMBmV2cfPpxSeKxBEAnQ",
  "key21": "3x9VWKsPpdQ85piY1PM1kqHQg67MQEEJunAjTQ9wNJf6FXWWjikwpKX8aqQgpKC4RU1xtYfimdCckHjQX1JczmjY",
  "key22": "5ZiwstKNzYNNc6pHs5hBG1fPwygn5PFdJjRYRQNVA6bRZKVemS18Nfn4E1pywA6SHooEFXhsQTfWWkifXUP9qN2m",
  "key23": "5c7rTLVXeDgJUdE38nvksiHyq6mHSwKczzcHxXUiD6ypXCwvLcC4A4cki13XMmZiUzjMDhzdDrdpCGoKthoX7Rk2",
  "key24": "3Hx6ptXWNXsj7z33BiDSrsxd5pvU84N14A3B7BiDnGFSNiFoooUPzuLzd4UWYbGSD9Cku4zHZodLaapeMCheXbMD",
  "key25": "52Yk6pzZbvuNS6YznqCDE9HyKYNaGhCrxsqL9vS5Spd5UvSp2KGYpzHpGxfwwypyAuuAVUuwhorbvqvZ27Pn3Jxz",
  "key26": "purBjApw9dsLYxdaykFhbGHjerGKGXWwFQYvkfvhyWxo9F9dsk6iDJfFPdoEXbExJb5g5ByhFu2AApP1JJrEeCB",
  "key27": "4Vrhm8VzsNKLxbeyBUyJuj2kfi6Gm3zWi6pc34MC9V1sL3wx9V8AjqaDw9NCVv8NKvUXs14rp7RzLv8frbM2MNyg",
  "key28": "4NqKD95yjc4a6ZVXjYoXDv6GftN6FbJaqmgWgUrxNsmketQYGYCWd13s716jnVd6Cj6ff55vFF8AhvgZrhjEAsAp",
  "key29": "3vQEEe2SGWE4dvEurjwCSTcS45Fi9Y1pLNjbTxPcVfJTPfE8Humk611tT26CJtDdj6zJK7NnU7EVayAp2hFaD2Cd",
  "key30": "63D5JCWX7BqAFfKXVQTP1jJ2QiJWRdRQ5uYffJL6G8JpHD94n8aTqnqUtUdCSmoqejgyWur6wvCbgGW3wr6vFGU4",
  "key31": "4vVweqSKFJSQoukM6SLHWkzGLuVZznYDxC4FMkQiqm4JJEiA6RnXM6Wy5kNbKdWdAy7KoVtzaWZCFqXXKvpq5Ybz",
  "key32": "351dWc8Es2mXVByrzSCTULEDJFmwzsXYxhYiQnDtYXmycbj55KJPexPdsCgHkE2nRqdr6jdp8Hjs4NDKkR8KTbse",
  "key33": "eVs5TAvW4iM2xqnAKK7NXnjZU1gbPuZFNK1KXP5Bj1uLcNFbSCCyr8VFA8Mbv43YTYTWoMhZ2PHm2EbSnWYqV8t",
  "key34": "cqGvdhrqK2Xf1e2udzrUcbZfFUwXoVdPTWYjqgSidkN1JYrnNZenH2rcqqapH6LVwmxjkmqyBe1KkEq9nd7zbsX",
  "key35": "2E2zdieeQS1PNQi5vWJ2teKY8tHu1EfCUj1aJUkMEVkiaq1737mx84si3xrhoBUrYsXx8qVpLEt2kzcHezwcZxEs",
  "key36": "pNMS5Mt6PXTQfac1cJUxG87r7DDWZxu2BWzh8PSGNPBNWLxpyzjzbQxDAtdsqPAa4SdG8uDEtHKXyknof4HijDZ",
  "key37": "5CgcFdMkS4JZ2Q91qxbwmSPgsEUkFcYcMXXwwr33knPU9Ym8TANg4pX9q4WsMzLG9EsPKwRyYZ8H7NxBJfnWcwdi",
  "key38": "4NYL18gGTue5wEvzutbmZZdLy3Fmjm44fhjyu9464J3tA52P3TywE3STqT7ByAhbXT5xCswtGeUqUZxX6MJztggV",
  "key39": "4rzfuYLAYhGQKRyurkGnyRsCgnBgorFam646Prj5ZdEshkRURsh7Ce8G9buHoQtTX1t55CTun4uHXfvoPmnp12oD",
  "key40": "2FEPmEBh6SfHPhjjwiQJNXHAtZoEPmGQ9RZReNcoCE3pXnnwuZZSPprNcsvoyNPQ4kBiCpwP49E2TzLQytuwnDrL",
  "key41": "2AKUSi7pkox1xMCkCq9ZviMN4W8VThvrkCDakxZygGZCKXTftBhAFNgdvy5gxZCcGu2JiFzqFr5zoUa7J3XkkEu3",
  "key42": "2pLUehZsuVDDisSfw2HnpRpmJ8xFQwPuisWWKZ4jE5JRsqixZV2aYAVT7wGaT1LVLDW7WeUAEZ8QKjwLZV6TBGsC",
  "key43": "5J42EaJGxtuMaNGgUtQdV4LmvpaY9UwXxWm71SRiTEFFSaZAkwL11izv1VUgGV64nCzCUTKdYuB4QDFvdjLD9Zj"
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
