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
    "36EUWGyEP4TPVDqZPnNcDafCirLyqwJecQkzQkyWYqsKjMmHL5vK3mjPEJagi5Ly47fev81LdT4u2zgwj3E9RN3F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HLL2EiZsrGrYrW7rzYCeKQ9rAWk2HSWPY876thTvwGzwhyf32MK3VvcMybTn9LWsN6HD8PkyUWJmSxS189tgpd4",
  "key1": "55NMaKwZL7HRKVYZSXEZJjtVrAMUA5mg4KkGjCuU8Khkr1GWDhFyUmpBF8YCFE4294YYAfhrbKAGtWNaNgcyKhWH",
  "key2": "2HuhKKUHqee1rtL4e3L5XWh1MHveftUU5hzUda4NngACF3bB6AYk3WiTmGMZkXSKjGn5poq2YvxqiQKphQUFyzpj",
  "key3": "43R4Z59dm5Cbn88Fitp3S3pLXBqkia9y2dDUVmJU6WhyLQruCUHrtVQqnzQMxxsacWZmZofh2wnUjmdLnKbakVjr",
  "key4": "2Tuu5JB5SLaaUrAp23Fyp3f5SCd6sinYB2Abqg4wbVT1gtpxKPUdbzWQCyTj849GRLYR4EP6G8NtBRcVuQ18MfRf",
  "key5": "2QzusgibYkwqdEnMhxCLfk8mVCwZUvCvQZmxCKJC2vjJdvDJy8ykDjZLkKhrc5Z2vegR7acjDPJctGEVc7nCTZjJ",
  "key6": "otRHr2Ungm56QmbVqm8YpnjFhp934GMoKXaiZ7A8yFuLSVwq8H2qb9PKKweZkPcUFsYdUgRsCBhu8bdteKF5eef",
  "key7": "3XTbJG21tXNt5hkgWfFHRmm1A8ntKbk31GpZ53hsfZiVhN5e6zKFvmjYfMGJogQ2AhrGDBGsAFYZXPMhtGScNfGR",
  "key8": "5tkYB8jmdPdZ8DBQFaoD1xngPiG5bwq6sJ7UYXXe3mAvTBSYPxwcC42CTd7raxw7PQXMhsRkSuwTEmsAoYJYwtFr",
  "key9": "5gGjsxJZqHFHE4JrkqNwtm5QqCo7LNkUjSiSw4xkbUwLrfZDS4Mk9C7DbzSv1hSZoYkfacemqzymn75YRc76Pc6t",
  "key10": "4HHtsww7cBf7ggJnnz8sQ54Mgy4UaT5Pr3s3M6DsRVnEXhihxLB4UrUGZGsbDVFyFJkcYKUyTy95m5o3c6nXpWPL",
  "key11": "2fBvJqZv8QoVu6wXzzEUZraNmS5Ajs2eZPB5PVLPFtjFQoaVR3obeoiVo7T2XGf6qGR34FpQQf58DEytvLmsFm8U",
  "key12": "4n4uMuXLMQRZPHzMRuUCfv9veQwiHWp8LTsih6s2fKJUydvS7CaefRWiVDX9AhspDqQdAiTALFckyfJzLWk2WVNu",
  "key13": "2LpT9QDK9j2JTrTdD5wpjuHXnP2KLvBJ4yz2Dbxh89aoNDq8kzG41tWLRt751qPZa9cQeS9Q13Rq22YGubkKfAmq",
  "key14": "46LRbeMzRi5g34pYrQq6UfUQRrRtSg7MiiRD3vNGeDH7fhqkgQmqJDXcqKniT7KBEdipiPCLfLg2rNi5dTq5dLwL",
  "key15": "3L4KrnY7eZzahWVJ3LzNRKNH7wdZJ9pA1MQvGU35U89hQRj8VHsBzzuh6sznbbDsgnVpaLd7jbt54cK529YZEq4p",
  "key16": "2CXfWCi4cPksfBvqFusCkqxxnkz3LDaRrLETxgcNfiTErrqgY57NQBqGXDGFSCn3YSqvKKXBmT9g7vjRa1Rf4GPo",
  "key17": "2BHkguYKtx6yUewSAr6xTz8fo3n3D1iZRN5SK2U9bzV9NYPd77JepqEp1UsRyFgoszG5gf1TtWYBKs5jkJFkJ4ov",
  "key18": "5esE8WfCwwijvZnfDK1WP4JDPE5pW8wbVuKJX5hesnVGDFMEN6mjwDjQ4o7Hq1s2ysp16ySbk9LFaRcaGkBQgtiR",
  "key19": "hFBEjubzsyD5xPAyVZKJgthykWhLzTjtDqn64whT1LSmVVtJVxPyVNh9ouBjcWZyM3GWwtANUGbuyMddSdVq6v8",
  "key20": "66yWCncHE7bhuAxzo2NoQyuWobrftTLd9Eeem8aiH7cV6X5ghup9Ek6HmP8PBQbubPYTY8iuc761tDqXUZteAisu",
  "key21": "5tw1zm6TAU1mWpnZVhqfUduUnftUDo3PxwAp9bxYgFXynEiJuLSMGA3Z7nnpLbaeLmAmHwSqa34CKrBWBRdfNcAN",
  "key22": "nAntxZmhGox1UxTQadmENwzYesJxukSyXULE14tYXm5EdKYRYmimzHpSyQtrNgV7x9BVEFn2WkpZx9S2zFCPf2m",
  "key23": "3EL75Rnte1Rkxyx1Vdk4WK1AuQVnsqsyZxQuUQWvzAC9U5NnZJERJR8uxp9cwjh8rduHqFDNsWSygeLRFfVUHhpD",
  "key24": "5FQxquf4fMKFfiquDLmk55WPHnHwwHwDbCSR7iUYaM9YW7Q9iTBbnqSq8W78hx89eShcCH2VgMPYh4ahXLm271RV",
  "key25": "4duq4gpGAuCwBxrkz8rZyYpV8DVbdsZ8zDoytB3YVrdN7XdCfi3hzNMxTdtkY6KWieVCKmU6NgtPgTRvWd5pa7Fn",
  "key26": "5xJP2Aj5DR6rgrUHkKVgtQAZLctNSFJ5Ey7QuM11YHmo8yqnEpGXq8neNj1b8q88mXcG5ryLNKbyDern7HaGUMG6",
  "key27": "KsixS2dNBQ6mLPyqBdFcAXYR67dUYz9ec9KHGH2BZoN2hJUbetpiomDubLY1QmZr6FkdRovgAcyrVoXYhBQqWgk",
  "key28": "2CpkoK34zgzT1BKp3TdU3mL3uyGLm1jeRd6Z1gyreEmELjxUDp4HGngcR2YSJoPY51Di3WdZphSCjRJd313vNkrn",
  "key29": "5NWdTfe7oCogEpXfnVwzq3TWmDgVZpGvW1XLqPpfe7oZwf4Q6x3R3fJjciEXVdGfii1DDyckHU4JBy1oMn8xWyZQ",
  "key30": "5vkCpcxuZuFFPsGFfNsz1me2zHUhHGY17vC8F2jueF2GbariAdFdRUFj9bmY37gGBMjaMHJwgBJ6N4SNdHzdTLcw",
  "key31": "48kS9iv9MsoUCHdwnB4x46ycJoNHswFSgYNcUPoVxhoncXqJ5qVVWzZBvwE2oh7gUG3nHf78xmS3RA4RgJGs3GMB",
  "key32": "5jhncscKgtTJvKccp27j5Cz9wn1qZHZHFxzEAsq3yKzbbmZp1dgs9DeLFkKbtkSTLEc6DBhBgTyFZdBXBNasoCr5",
  "key33": "mv5vfYNgKYjkKFghfJucpY7McBxhoor7zzYzfgEkmKfAbqG2LD9MG5jATKmRaxt57EyFaBYvXMqpWHbeB2xVtEe",
  "key34": "5Z6zqkPKwDNAvXAYfrcqXuM7rA6LadC11jTh2MYQQDAdZVuRgUvuaiLMXt8EvndSQKaZmj5JY969WE11HoVs8AYQ",
  "key35": "qS4Aix3PawbS4cXGhHzKMAW73GE6MDzTW4QTTpP4WRcK3UGANVShAtuaV5hyvKN7nd7btUbuNvZAqw8ULbw2uHp",
  "key36": "3Q18BUZ85n3hpiHMKUQ3miyoXB8SWXX9NZzsQuarw9bM1g8UxPUxuzUmPT42JaJzHu9HKojAt51sybVAr5GV3WH5",
  "key37": "4auKfJzoZ1KpP1vAqp8VaaE7ZZbn3tzRfQTZ7TRUfMEyjMxYVi4ARojsnAw4gXkKWJi3pfLvuuE5B4xwiZKcE3G3",
  "key38": "C157EzkoZRjgfzhjv8nRvtrHkPDbsbCPuUSSHmuyAUKSpgxdP2MfoW4QEfeHn9WVhX7GWaxfFMgHFb32orpyaJa",
  "key39": "GChzHcyx8NGJWNEFGoW6TVnWwijE77MVNttw6J5ovCyBUp1t86kqXfkpjhik7nrqVmbvGBMkDG9kigtxrDnnU7K",
  "key40": "5jQnXNeAc2gMF44BPSNRPRJKsPHejr4qeDqHXUWZk2MWk86oGrpRR8tV1TwQ8LzvQ73zAujndco5rU8x2Vdi6tCP",
  "key41": "3Lvz55pJK5KpRvANUq4se6VSa2bUbqe6fXAqAfuY6UJWtgMMgysGQ5RFRYe2VszQCSFz9gbUdxwGeEHf6ctcj92K",
  "key42": "2WZWW2FnHL5yuTdNHyJNpfjN9EWweDHvnGPmFMKH5d5x4u8Eb2wn2293zKjBb3fnHb5DsBQUos3pAZuxsi9crGM2",
  "key43": "3pKTe3FMqfcvQ3nPWpBoGz3iy8K8752XZS4JTbpmWCQawnqS3zaovsgceWm5p7KoReviUbKCMnJT6tngajk3AGcn",
  "key44": "2vEygzcSoAhQ5QFyVQLvK6YQqViRyrexwZhVZSzp515BDqXGBHR5MQthMj4vNxnKxoA1VUxpuXVg7sMDBzsY99Ha",
  "key45": "2EdfYa9xi4DzLi8aEn8gngsRqgUgFj3HcsD8VYbCpXDoXFCU3pMCmVe65gcv164oeKcSFU6e95NehhkB8fsq3jKE",
  "key46": "61dAu1DbNKMA9QBgvHpNLWkYpuP8K6VzszBnLmXziWu1CpXKvLG8xfBhoLhMvp3pqQimomkVnaYakbH9mNhVBNC5",
  "key47": "4sT1rhs7KsiMZKm5UTBakxqnwSZHkC966EVMZtef3okXY5dXHr7Lv95NKNcoKTw7MRJmx7ahXfoM2C1dj6k4sfJ8",
  "key48": "4MvK6joLz6FVwKgxrGbcth4mcbcYUbNJnLzzCCjA3Va8zq9MCCwHvbCdHMTSb4Xs1yFayrYhsL3eLrDQxUkfnCkA",
  "key49": "2Jt3e3uihPn64Qie4SXFfkSCzXv1PjHgRytgJ72buuGiRgK8X54jLLsxNSsgbTfF9hknTACUdWnzuZKuYeVNQY89"
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
