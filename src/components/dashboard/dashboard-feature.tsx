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
    "SveJ87u9bHo1iLam18TdqzjAYQYoLAW7pp8YMKBdB7wxqmFyHNEehjXYBiJqWksHSPcZG52FMUNK1RT9BbKdwhT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wwy9JjNZHEF8PPadx6zMHE9PhAseTGRvHBBnnhFzbTWihk96sxmeNHKHVN4zrpRyvwQhY5WJJ8hDEQiHntRobkx",
  "key1": "4STQTUf88AG8NkwT1F1KLxz9uaEjZZZUzHZtnu6z1aWgd8QgXJFxSBKfKBKt6Tv4qVyXCCAQLukT5XocMvibfwUd",
  "key2": "4XjxcXAR6Da3asgpPR6auxwNz4ArPLd6jis3pjkEksd4SukxLBHU28UqSEFghRtb3qn2RgYfLcnYQfuc5Qbvaqw",
  "key3": "bsRxYaC6z6pzzbsuewUDdCf1AxRuGcEYuM7ZwbHxqTKooxeic2QUoWui9fpe6YjbmjjLfV75zJumVz2ccRYpg8Z",
  "key4": "cUDVPYUL9xeeiNjrRYCNoPd1NS8N2fAZYUdAqNDRzBdi7nngaQK14iXZEyr3zvvz2B6bEfnvzhZjnk4ySU6JbvH",
  "key5": "31AybQUg9odrjRnenPAMv6hJDMVn6qsd2QZ1bfzZY5ZEv1DnzrT5UzZ4ZZGzdsvenfnWR1HMhjKsGJgcLAs1aEdJ",
  "key6": "SGU9JN1KFfnFoV8hsWmpB9RfptXUSrzFupigGCWAUEtituYAUayA1KP1LnQV4Qff5zujt3N8EGE2qLkoSkSNU4z",
  "key7": "3pZ5y56xdXicXAHG538bA5kz5m3FjDNEAUsLtMTrMjmnjBTUfinMg2fH1N6hz1MAwVWq31HPzQQQWdym6Kk1RzpB",
  "key8": "5FR63wZ5PY3qN3F467Xea8d1JYiiqFuosi4T8oFCVTuDes9EujijiHXU2B5ZttLF2L1TyjEnqDJyqsGca7uYmJnv",
  "key9": "3gZWyx54aZbrbMM592XRV95T39cWh5UgLhEsaYrVLsnpvP9YR4r3Y33mQB4FRE97nvV5QYVGofRqxTMSK9tuz6x4",
  "key10": "3m74ZXGqKPpVewBonWMHyTP8BWzy9PAJZLy5McgaVTpJ9c2YH8C97K8GCfRUigGxb8DcnG7zbNDkM4W4Cu8T9GKV",
  "key11": "4n4vfbD76yVtNhZXeU8jQdHzL55JrUHSqMbJH4CErBWHrYCcm8TdDKC9FDV9DaG9P19dAMV7E7xHSEy3xkLpu6fZ",
  "key12": "2KCb2SnTSwccCAkbk8XCfhMN3uD9sXrWY8RNEwxVtyg4jr6XGHLgQeBX3SDHLU3oCbM4s91KPfWsx15U413iJGKv",
  "key13": "3sgxdnYCCX8dacCy3ikv7GE9kfqL2ZhahMPeTxPvZwkLp6eJ5WE59i4NzYE9SqeyxcWMF1uEvZEuBfeKosb6MEeL",
  "key14": "5mdhbCLMfHvJGiViCkae8B2kG5rS9bgMYutbFQ8WvwSCovXVPgSQcWKKvhYJHf7nXj58qAGZAkqjfkyrwxbrEwu5",
  "key15": "4kFU7bxEzZqKLdRTg1jNekyQ6zZkA8p9ynud89iGdtf5TNQYjLESoLecxKrgRi8wzFbkEH7KLrcKvE6YurRQ3sky",
  "key16": "4ExonuJJhBB4WFU5DunDFC5pM2cvFmV8nXrqXJuVWFpEBCRzJa7uZEnbfRDTENtCeMc9fMRAxL5JBqwhBnxH5yXA",
  "key17": "5TsYWCbP26s4JSpqJ7CPgm7r2fUFR3NMSpQ3PcsirxqdccMLB8mNpkTsqQrboKe1van7vZo5RwtRiduqwhJ86dfi",
  "key18": "2bnC2eEhc36ymmjxPeBMVjdYC3uuJ6pbXaoGmzLyhXGCZebn2cbMJbJ9vTqnZvjC6ooWnRHGkhZ5YNN1YGMNJ5KS",
  "key19": "3djkyqucWiULQwQxcfaYRcDyRc5y5UjFZEuFMUXb3GBUd3HRwSFShwU7GZcdeaXKBVyUAZ6GP6ahZ9xKW2PkacdZ",
  "key20": "34wLihUTEuBCxmoFc6hrpbHqZ3Z3sUQKtF6e4J1f6eGSycpd2ybt6Gi1jxFNsGrhYDGMmMsSyGWwF9FqneAFUXQM",
  "key21": "3fGMZ3dw38rTe9mdWmkW2a7zDpeaEH63pvQdjnKUfCrj3TmxFfkDLeWGeCNNMeWAqSVUCyoHhTnFBPMhHzLxRKC7",
  "key22": "3XhH8wk4aMunUAQ7E6MPYBzcwNfLgNLjqph1sgtB9hugErkjfjVWNZJ86jDPjNgcbLR628fwSjuQqAJPoxdWsJL",
  "key23": "2acpzuC3BAHSw72fw7d3wDYRDop3B94HdsCd5DfZtsNkFivMntx9AcKqGhFG3cnfLKhQqQbSuADB5r1gDtNcmwSz",
  "key24": "4qs4UdS7MYSZRKzBn7mnJkVnAWqmWCqychDqzDhqGXLiMybT7zZ8WgqQaazWAd9FwJNUcgXERUxPQfiip6QfxNct",
  "key25": "2DwpbpHLQH82qBRSLuDrTkqvfkp4RkPN6ApfpGunZsGK8EAtuJEJnUw2yuSNG9w5CpMhc51xgAAcrM9ztS6VJsUk",
  "key26": "3J1jQxLrEeW7t7RTXjcRKz2ZvL9Q1xUwq5nYtxVSjehdj32PJ9SkNcbQaANxHDfZWEakFZ6oXT2Mp4oZyRNStF9k",
  "key27": "5hWzyDjG1mmp5jqcNfFNAhgYHaskQ6x82BQqswe8kcN8YctH7a8QsdzRVBcTr7wVvtG12PzyxYDdMPKuMninEvFf",
  "key28": "2K7B99vpXqdwEUEUBbroiKXF32BN3HQyHWx1BxHBX6feqZkcA7vseCJXYND7yhDVXSqgnBvJqDSxaa1zUBvGq2VW",
  "key29": "3RbH7h6CBczQM34bJ5Bn45dYZjXynJvmrvrfEo2ERnTESYvfWBHyXXXfNg6ZitbcmKGHgwoXaJrhfyu5oi3JVViV",
  "key30": "5X1KBXax6zJVUpDA3jT8jnDK2caiVw3AJGPSG94ZFPteiAPZJgcfD2RNXtYahs2jWeHkRndXXvyYmEFnaDynVpiD",
  "key31": "4pq2D1wXFyXZ7NzwvuSkzhc7rAkXDzkhJEnmLhwNy9Z5qrT5VryQGsH5SC13wMYSgT3CRWUHULVNU11pfHc6Wugr",
  "key32": "2SeMswPeaQs9G753iFUG79akpNtt8gbwcRpPiWWumA5xzKFidBTKpGFatKZz7jypuoVaBj5ZZZdN2SwH8tNSxBji",
  "key33": "4j8vPvsQQ1anWB1XtRcVN6zBXXpZ6djf6U7pnt2h32LG2jJzxMJfFrryei5rC1Y7rYCapXuKf4LEuckPMLwajB94",
  "key34": "53vnJnbUtZRao3eaiS8Y7MJQZEn1ZnoDyv2W9cAam6HKJd1eFuhvCtw3gnGDf5Fm9FUXHHoUVBv9mRhweufsxzZD",
  "key35": "4zMtdA2d7zuf6u29gyFASiM7iDEhFgQcTTZeoUUY4rq1NAwBwacKYpM7cQWDyAFTvjd5cd14tDBTKDQMbzNdpZFK",
  "key36": "58XHZGAufxfTuhqpGjg9WbDGnN4m1fugW7RwisgUSPnPHh31BHgEqu1x4o1b6jfzosSf99MLW5dZH9q44ZFHUzDT",
  "key37": "5cfdMNhPXJwwvbT2NBLn5x4q5bBTZp5Jupi7E8vYBS5eatLPJRDvwFxUrbxbighj2Sw5LnsvK2BjFWMb9CGXNega",
  "key38": "3SxXgDBauCqbZ4qgsbXKwW9vhj2RH1z2TcThFnEdLGAvmGQFPu3T1pYWbwZitjfhjZv7eTv7v9eTMYZX7JofxkJj",
  "key39": "4JrboZxYuWdZ9SJTDVjv4qHVafQJAGfoAmNS6xmjJTRJwpiewnu256FKkPT98PuXSPaJ8YB3G1w4Uh29WBzSRVr7",
  "key40": "6FD6kYyEpmsbVgLySDV66i3MLUyYECnebkSXfdXXkPtS1VTnjWR5wtDGBLjxfUTDVipzYe2QwcH8R8hEVskz4Tw",
  "key41": "2L7DUq4u5g6uzsT9akmvvAeU8QvmoqSe815hVZAKT8D3UDUEZvDuD88MPvxmVAGyQW5iC7JkU7NYC1tvPits9ZYU",
  "key42": "3kPmB7h6T51c6WNGvKTtFgxApmMiZHBQvY3vK5R7k6Gs7kj81bqD1ySdE5ER26M2hLYigikSa6dVSi2Hi6Unecwi",
  "key43": "4Bj1D5uGS4ZmJavR5cRKzxyzMJRkmFM4Jb6Sx6GSAwz9fZEfBwWfAi2ua6H6yN5YZZ7JEoABfDUBKL9bkiPis9xL",
  "key44": "f5SaK8QdGwNFVYKoGGf3XZWQoX6DLQ4vVC5Cv3iR8YfEe4a3duXcUoqY4BmtBdsLaAszjmBstKWKxrwxaPFhtwB",
  "key45": "hSjNH23T4XvfyA7ESoj5h1j9cKyE7VWEgbBMgp7YH3maQ99fmSrY6m6LMP7nMXhtSr335RMJNwZTQwTUwfePsyX"
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
