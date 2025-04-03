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
    "5CQVbYqBTSb6av2knr1eTPyaxMRUofckVysjzc3iyjxHRgHnvZAToQuEL52fX3bifZ1h9cof3toV6fDATxS6KKia"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7X5W9zMc13XmRNBQXo8sGYu1RdoUTegMvcb9LnG8rQyCBBkuf6f657bTPGoS3uK9SqWeTSeKdVjzTzLFSqiStmn",
  "key1": "5KrHkW8ikU3vGrtzsPJRTJGcQ1Y8agytRUgHcR6FZx8qzFr3ZBrxiPXufqJJuHbTFLPmAbCUwmKgDN2WLWPEBwAM",
  "key2": "3HV9yR2imu7FLdM3UoX9hZmS3c7jsZ5ybY4M1dp3jHsPCitFFqtbewsNrUcENAtBX4cXiNDn4JgGiwrbUFbmst7r",
  "key3": "41hNi5kCKF74f17Qe361PAdQFjC3DoG7BrFXQdZKr7f5D3S6sERJTiKLw5NiFxWyiqvfsSyTKors3JdTVhM96ad8",
  "key4": "uJVG6rigrHV1Ph4d2tLY9rDyL5RnnHgSQn4hACugjHEbKPoLyA1dgy3uVvordr4QhnkwoWA1bw8nGMbf5PknKH8",
  "key5": "5TY7NTJMfND3Ctz8TyvgoEWNTtNLeEuELrQHxep1SUPvQEmU3DVemYv8jVeTqxd9iNXWWsDXJYAQmefip5qehmCz",
  "key6": "vNjg7YYAbuYajXxRSqmca9CmCY1KSh2iXjgKR8PHqtr1ffiWrQpJNGi4CkJDBvw15r7Csi2HywjbFZzH3SLrUnQ",
  "key7": "5epNE9v3kv6qbzqSarjx6hJsGFV9F64YuL4P4RYbHWbCP8SmjPfo4tRZU93G6bd473yM6dsvS29BRVPrGfTJXy2p",
  "key8": "2WZPyF9A11GAXadqkAhrZFQD1qMgA17uFDE7X6QwQtcnkj7r5kGZYSMSS1FbeJmDgfhMMTnaQTWfWNcyhTs3oNUJ",
  "key9": "3hCYKZcya67AKnDwrVN4CTFViX11GRDYw6E3dG8HiGwTsYxmYaY9vxdeh6uXRepmUex2gLoxhHwnzbJQuTrrz2DC",
  "key10": "3GgnFdY8b4DtVBVqHZsTsXucWgeEqzhjpHPnnt3oYedT9wvdeXFyCCActhzok1wPYE8KqY8q1nzscN5pu4AhBvMt",
  "key11": "8oLCHgi2YrdNQzv7dUCMNYQq1ybTm5RNaJp59w75HDHpeCmhadiFuBUyhwCWFz6qPpS2JBb2Ba1NNEusV14Zr4k",
  "key12": "54axdMSEspispgyVYkWqUzX5CfuxDEpxUCmoNzWGheZTh7Qm7gaMtGFDEk9L38fBJjaqVKz8NBDFtfCNuTYo2MeG",
  "key13": "2tigKHxJsjSupgjHZiZwJjbL7Egb67y3WjAzc4Ga7SvCFso9cUZu8L2FxyqjKzbRL3s7EjdbERUcouHgFp9iyaQS",
  "key14": "2hbmi9GesZAfz81yeqL3CB6NMmmpw8WpuEEF9fPURb2C4csy9hKnVwE3PTRaomtQTU6QagQeD1LP6o2M3xniaLF1",
  "key15": "2WtPbddM67y5XA25ErCLoQaTJPwF9tX3HUkZWscTgZrC4CgjTBh4gG5dsjf9LmhyFFYdfW1SgYrPz3UubTJz2ARX",
  "key16": "3knxM55iDGXZ1fkaUAjZnVHUDUfVLwg6tASeLwbLrnQtHTMq7StdgkUxzNuRiZGfaeMaMNNu8Woc6cZBnXbpP5gq",
  "key17": "2BkGeimePcYy9KwvFdNKeCr5z1ntp86yrZ6unBWZyebjUNwX46M9eaeroD8CgRQcNorHC8447tCh1qpUbF6CPZAW",
  "key18": "2HBq5TLsK5NzRrRCzmFPk2ncg3mi1zBxsKccAYXT6asUmR6SW19w4G6NGta8NKJAQ6p7HYuNnd6z2KNx9EcQbS5k",
  "key19": "nkctZvQeQYLB5c5gqNU7zxvDhnopofg3ASFy2LsYaAGcpdJEtT1GDE4gmefn9vQuS6MmBncJXkiomrNUJ4RtQuG",
  "key20": "5PpaCgTBwH2jQ7xjJXXTrwz84Pe2KvGgKVNdagHgs7mMmCYSi8R4yCYh6kxMwG3kqGNa3hF4QnSAq99GB9UMYhdC",
  "key21": "3qNpmwdXnyEgW3hP7LKVPuEr2SbomfAqd1XByafsvYwyCjMS7ZHmWpowPQaGfWR2nsoCjSLVocd3oMeHsprewrtx",
  "key22": "5Mo5AQoXugvPWnEh3bJDJx2gj3d8Y9BgyZK71bc4XacK9nLDymV5LzzY8oN146xT7RaopLMAGZyQRJsna3ot9mCD",
  "key23": "2r7P5MHLc3iUTawWTJTBDwEeEdyXoxvYBq3oTtm5a8i3fdk8BaweM3CJEhiVaNmA1bwHsjxxWzZvPfttFoq1vM6D",
  "key24": "4xYatRUY5qEqqgTzbRUzUPNBEnk3W1VZW9mUPhpZy3xu7rWSsCebfMQXeAQ4m6FJzt9o7XYi9J6H4JwkhhyCDrer",
  "key25": "5ZCBKhvUHaR1Fsgc7k1MQKxaDJJ7M6D8edAbj6RHn8HqrGBJqbZ58FkNXFYM4es9DAiz1eemvYT4M5uHvm3eyM19",
  "key26": "2xH7Qpa9jdu9t6KYPSy94aZXoq2maDzQyxDG6B3xhN1ojMFTMWbtLqWfqsj53FWo5aC1G8hYj8ZVFtHrdFVxpYUG",
  "key27": "39FGT9gJqXQjELiknbX7i5u646Xn1jk6Y7wwmMS5LpgUJb28YNTipAHMpArGhWLAqa926zDJvmtthAhwLeiHFo4s",
  "key28": "57wLbUrZG36Hfg1C74NcJKo9sFYQ8H5eXyGFFbfqEVZdQ9vggEqWvkZhDkBZJDmRYMZya2wMZ43aArWkfg357Njk",
  "key29": "3tFWaFLf5Sj5DHHhCeigyVsmz4iwY9GdaA8dWLQyhpQg5PKssuQN69PqW8hZxGGd8ajDnewg8kXa6pxnUn1Ugstv",
  "key30": "2y8UG1r4yqv5F6U9faQ2AVBTrjqUkVqhyTTxVd6kh4j8zGGhBV4TAQoyHaDqwAbZM4BVNGnxymTtbjFYaoYZ3GQs",
  "key31": "3EtPjHV4B9edJDQqHvQXBiJTNZdDPjzxz4oSkaHPShoJgcBCL3SPzpB9m28Aib66yzQu7SNhTmBmRS722P7P4H6c",
  "key32": "STtxUd3L3Nv87wrcTZaxSsBpiPvyH24qd2GeoCc49m8iHkTjMJrjgAL7jKv75x4QshcSKF7us8qoAWfhtvcQMvd",
  "key33": "4pyQCCKy96tb4LEzuvMvwZYCtEJigCpzsTDcrVixggjtZpjJUwyR1r51HxRcCs69RbWWY2y8RzyEGWkV5JbM47BT",
  "key34": "3bBhxKRZA463rhnvQM42pFuXNy3s2xgDWt5MyAD853xxMcMnqCcey9cYQZ9WUkNjLWSB7F6EsZo93DhQneSSZ6zP",
  "key35": "tanVb2MVEVhQ7cYgzen6Q8ogJbZinLTunG3bPUXZ9ysysaaKq5vovDdM8rMR4gznzQ6FNRak3AmWVfizSmbFWwf",
  "key36": "26PPL4WmwH6xcKmbtb86xKdqX5nFU5xXKVzb8vLGw55i2VY1jd6sugfXaWFc1GSbPxZH1o3coiSa6oGb6L1qgmJP",
  "key37": "1DiresKWwZWoZVu5KF4wAbLYCKKijASitKdcuqCZcNJd5h9xC7ugob6SLD9JZg6TLaNjPUNR1fHRetnUPwVeUpf",
  "key38": "3EVXYGP9nfqfRokxt5MEkuRSx3oDo3yCgSdyRhztiGi5iHdXqsWSyfHjwDxBQDug6Gc9sQtQ7mUgB7hKjBhMQBxE",
  "key39": "BdxJ2xxxUd9Yzu2XAm6mhBSAJMsAZZU1jpePWZFzRmQkFQcpePvzJ74PBjmAiyugZcwfQ1AidicPzHdYgDeBVrH"
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
