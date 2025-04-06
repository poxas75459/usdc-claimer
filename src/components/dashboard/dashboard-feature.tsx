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
    "3ZWf4YhqGCtczUHJ83k4WXsxfgMQTDtuXTreezcWBWw2jFy3witn6g1xbedXenxE2GfkmTdkH7FATfc6yCTjRUun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58Bx6Q2zZKsKG6UKGDMiXYAodfiKDYn4HbcyYMZY1fKeBM14yZbeQ7hcBZgQnczGy3FttG7RYLKGbawEtUNWhWzc",
  "key1": "55qVNGEqDkTmSRzcFbNXmR7gNSysu6Fq8emueBTb5NDHLo8LXnRcsPGphjtdg3qQ9MZmbrMGfzPRFvejdEXdmRMv",
  "key2": "3dEcsPq1pABkCPKdT3AtaecigpSWd5XtAkvKoCuwaDFthW19sssYVbT5R6KZTw5KiNGU9USwEmBGT6ucxUfJGY5M",
  "key3": "4unUAYL5ykZTCmmkWBKMSGSb5zoLxruDJgVG3xFtSN4PMVQM5ajsbpcVqYmkwfY134a5QrxT3vHNsUksTXF6a2SB",
  "key4": "3eHar2GLb6aaa2YyUhty8oRRkSX6DEbx1sg7VD28BZjhRav2eXESphojHE6oxbtoeBaCd6xGjTGVgfoeziJvfU6R",
  "key5": "2884wPbQvdCJhP7R2BKYRSWpx5A31zWrfVuqLXdmiQTDGjCbfouXZoLyhDUQR7ESn4hARSd8PFPrTJ3VbzNgbwkS",
  "key6": "2NR3b3whNznii9NgXMiddgejUGZjnscq4dEN3CcVirP6g1bt9VWDJS5LGUAjZiA3ttSszEueSfKyKSBxpM7gA8Z3",
  "key7": "57VuzDmggs1ciQr269VcbUA9JTnEmXpfVN2tYiWtyfeLAKTiu9feV3AZ7Wy4eUgipJ1DA61GVFKhZ789LpeexAfz",
  "key8": "tb9N1jERr1FSRJr9S1XKaY9wp7bMbDK9gpoVRqgkUJD3F5SohMgzU9wH8dNwfCh8nPKsBYBPyHGh5AjfdtQ5Fab",
  "key9": "5U4QFHNzBvwKJxi19fV7SZRSy7fGXESZJxjrAeHnJmvGiAe4QDcUcS76mpaetwKsZjFeyqLe6xXs4ecAVgLLyNY",
  "key10": "5pXzk1mphvUJfHr3xTQwT76tDCMgRQR1jSv8bi8mvRvk3civj1o1nJ1XzTM5axUJkq4kW5gfBy4hMgLyLYezLj7j",
  "key11": "4tugFZYcq1hCWcnkSSqG9a1269wa6Y8dzN4MGSzT2n6a73TK1bNp45CFhb6LmxyMZKQH8uGQ69Rag2xQFe8Dygyq",
  "key12": "qo4SAeiq7ugwv6oY7o4wuKmBqu4g7sica8ThkDfPQxosySF1x4J2i7S1vaKLRyfYvaFz9vWkxCVsmLhDts8nr1r",
  "key13": "kCKPPVBJbjxzq8XxouCZ3dgqNGqhPeoRbv567B8AAEYSupT1gAZYmiCmHPoF4PvBi5KH38osCvoqjp685oeL3se",
  "key14": "4K8YpQQotWAmzr1CJUsqRxW385AUfyTU1vnwQ1ezWnHaYLpdJHozwEw2C9EsZZECXPJwfRkM9iN9Hu9jJ2iMcgWA",
  "key15": "5tfkQ5bU56Le7XJ3YkQ1wWSVk7bXnojRgSKtRWC1754tCZNEQvzWcriLqBqsnD5RLRfPuko5CD4SamS8nZ6WhTR1",
  "key16": "3ULc3iZwavYRJE1798App3a6uVGyRCY8EPodFh9U1Use6jEw13JLqR3b2yxtcHo3Pc2ax2YoGVJW2MzEBS8J4GFJ",
  "key17": "2Wfb2zfzdEqpNFpF355YTeUQ15t8BBFXV1gMbVg51dmEPcYE2rZkegnF21VDTaT1T1hTV58j1BqaLQNo9FdiyPiW",
  "key18": "5G412TbTgZxy5mxQFTsH324SP9CACrCPpNP8qy8c9PAij5A35Su2Bjbt3eudby2FuQ8Vy7FExkjw9SGWB3yFutfd",
  "key19": "4DxxaUkUPk8iVpd2aXQc6GLn254SiaLyu8HgLZMwCPyvCrSm19W86Ndg3bMKdff62Ky6mXSRDGf1y6np7xpBcbVV",
  "key20": "4CoTeeQQFc3hZcmRx7D1r35ofQ3XtWLLvAcewsRw8YFUeo4QFTYu9W4hvxpMuYwsMHaZMZVXKgZPVaJ8BV992y87",
  "key21": "4669VVhUWBUv9efYQ3uqvSiH5cH32qt6NFWRRLDzxp4WdJMhM41rpnd7MTxkxXsYK9wsQaBujbqvUTjfQCYHWA8F",
  "key22": "3dLKYurGUgeKr74BgMdFkC1k6TcC8fmjqpzSXuLM6ffZkWcdR5yGdKv9durBRkvfJvCjaj6CUKxqqDb76mbjAK3K",
  "key23": "zr1tDRUoscWpswCXgMJy9ApteDc6qj4EE15CgBy3X3MUkkAw86B1N8GC2K6mWqngNvjaaFJBmaBgyoYb7v1Bn4M",
  "key24": "2WzT7NJxX5bWXEPj4TAaUo3c6wjSf45h9qow7Z3WVdJ5ozuvxczsRHT2nSj2ZQEfhEvTNp6fo2eG7brX3zKiU2R8",
  "key25": "25xCFRQ1q9GpF4XS9bF4T1GtJXfPxX2fi8Z1YCTs2xSPoDsKTTZN3Hs4d12M49okHdeRVUXyX141DvjWHtPsHz25",
  "key26": "ySsvgz7B91wQG6FD9NLoWgEPztZzPGbvdUY6QANT6a7QXiam1gE59hqtDUoXr26igwjFTzPRPE8VNQLbKCvZpuR",
  "key27": "4Lf7jjHncwwwznjyrtaV2ZxNYdqUwyGm9MgzQEk8BCB6jz47Tywcw9oW6MKahmm94WbaRQ91feGqhbYdtjcZcWCS",
  "key28": "4t4arsMzUsq1iQx3pbdouMkAYoKV7p1tjpaBYD54fTwzqgsZE22VaP5ZEWo6srrcYePTJYZcE49gRKeYGnLSTaeJ",
  "key29": "39eCVfqVghDRChdyeNCUhzomfRYXYqb8HcxrLPbpHRELtUYFJMGXUEUajiZF91CqrC4jrpMHZchy1tCunxYKRcJ1",
  "key30": "5rN5JpV9gm48VNngtE2LRB5oDFcbtZ2vp87PmecsETjwn4nf5HHo866NhxEAuWNAv3xkgBjXFuPF9d6rWj9c8tSc",
  "key31": "3j4aaaqZsAWfaBEw2kTBE5S4ccuJ5fm2o5oypKYngQjgoBYjmMoKSo5Lwff59kztpoftF9ABgXhy5HhVssfEsFwg",
  "key32": "57ARjwhvbuoieq78YJWNRBp3DiGB1asNtg8H3uTrc6LWtTckoiz61kar3D8kSMxXCtbuxFwyS69NUAy9a8QZT5Kg",
  "key33": "4MEkyzJnfYHApEcxZXWG6CR7Eix9pw1uyFtux6x7eMvNBMNDDS2tcR8hvwSQMpg4S3sDN8KcWUiFBnRD7GrX3mnw"
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
