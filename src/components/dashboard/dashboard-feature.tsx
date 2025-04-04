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
    "5dk4uTrNbwgDjGvYsyzMWbKiGwAK2MxuLoHJDaDLDufjvf1WPU2qjCihLnioenG8ZN3EEsYKnLRCq1iyhy2hjyvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SdAtTxqH6pgXj7VYM6hk7A5kWmazfybhd6eNUv4eE2i58xkviJisrFar6jpmh6D9J8tp3BMFAtgEEG2Se62zYtz",
  "key1": "49FMCwEidzE5nBVBu3dSTsPiFvD9uPMgQoER8mjnEeBejmmYLxu9jJQoptrRA5HVQHJDSBxgfdNYE4kSeGjnDqKq",
  "key2": "5i5ri9iAPXjFpE2YyaaMLGatXtPzpG5vUQGBsLe2psyjUmtDPeQe7rqG1txe3V6jguuqDCJ3JYTsZiJAyNhiGNNy",
  "key3": "3UmEuRM2m51CTqDyAcuursjUTHqZD15zwLZJo9cXMuxD4KP5U5cyuWpAS1tcHfpZDggkcKVSnUshuk2nBS7SSBZX",
  "key4": "2mX4BE5N6ZgUVuggWpSETWBLRxdD3nYSV5krXtQUFEwHUnWxA1kmpRxwdJ1PoRYAUqeRtSkeouM3BFVaYfKuqYS6",
  "key5": "2BdtyHB9FikuT1LSow6QpeA53nyNhnkRDgvaRd5Csn4UFksCTcu7CAkR2YfgchEBuX4hX7zE1UqtyPPni8RVRcVQ",
  "key6": "5EGVMXx1McXcbYUDjnE6pmWAWX2w8Dp6bQKNz4TSemSesFAjehuNuJG2cixpeFs1GuhmQbf1vQigZGFESgrso3at",
  "key7": "5WB5CecKGKaSE3uyKsWcxDn4xNwnEKns9ALX95a4pZ91vpfhpRB7fEYhSPULnDdGzSxNL6748NBd2ZmmCCkbTRor",
  "key8": "QBcYcW4DGADS6VwLKN5jaGHju8pETrG9KKZBNSYRnigpjZJpyDgsAZJ7tZsJeg3aWFeqmZzbAdMWhSLCPQSDbp2",
  "key9": "3qJNvNdG4qTF1tZfFnmVMwSVVtMRJQrUYU4jUUBjkmYJAojBbH7kZxax7pUQn5XxPUqFF5b5MKm8vKp1CFhKDqn3",
  "key10": "2Dgs9eYcm7Zttp7KUSSG2PFW317M279hxniK7Bx1o9ZqkGuTXz54Dm154Dcv9aWPBFYHMiVrM17uzrN2p6KZBLer",
  "key11": "616jQENUNFjRFPFXbe2sGEzf6xLUPF9SLXpk7qnQQLDaYQ8VdUvmcvNVDEYFaqarGaSVFtS9FTtfvs7EBwrfSGmS",
  "key12": "gmUWJSrPtG61osasYzmdP3yJUaKm49NC1Zm7SNgjEVdXwetgDNWH8mEsfPfVX8UGC9SRMFyNebBM9sEiVzWdWqh",
  "key13": "4b1kAdDtmxBRsDouCSuq5baj66VoKunEYTzTbMrC9NHJ4mHUF5S4CNAynyegHVzNHUPpxMdPT2fjQXaT27Nn285b",
  "key14": "4pviUj6jUXgaiFiMekNNNTCrjbJe4q6FyL3NcASsmxbGPiFNh9ADvqruB6EseR6E1HYbNbEJVfPqKFFWbNZW1JXV",
  "key15": "LJTL55b3qiGiTZDRBRJmnpgorUg3ZyTVzwrxcTipbwwLd8HsRS4n9S4YHeTCLgtbKbo2BLZdJCdc48dtHS22GP8",
  "key16": "32QxbxfsxLfwfh8L67ingLFarDjDF2vaN4BYBD3akgBQS54J7QbuKsdTgHt2UjxPdNVeXn5HT5CcwXm6JaryKP9T",
  "key17": "3NvAupSGtFVb8m9TEJtbbamVjp89Y5idynCqRpe7csjDeNWdUDrGPSU2rG5kJq2y9Rx7M4a1rXZBFh3Ci5p4o8AH",
  "key18": "5mMty7pdb8mhtJTDCyPzRPhqVAvkuf5U13Ln4KKbXTb9zkm9JCf6PHYBVMEx8CgVvnjd3NW4CNUausBg7ZxWc9eL",
  "key19": "5VfH8zXVWhRQEuYhc8eBWDZ727whXSVhvbyoZ27fVDEaN1jhJoiAfjsDKBrtMdBY3NDgGSUE3488UyXgmWjUCzWR",
  "key20": "3PbtTETGmhEcphJ7CykmemdVh4qiqWV8fWcx4EBAhAfPBToiw5AuaEKmHzCHXtt4baZuyhKWxYkJ3GDYjeVZ1ihF",
  "key21": "ZZNcVK9533zbyXtppCrw7S5Tb8TLYJV2BKjGMGmEaynY8htEyragdax7FZbXKWXwPjgLkHfD5uiXV6NT43ceqKk",
  "key22": "2faN4kCWn1fyb9Z9VPENe8xMmzkM3JhKdhAWfn46ozpaMh5craKM15P8w3MRHk6HnuhKLXsbPT1EstLHiwZQxye7",
  "key23": "iBDUixfpdt526bkiuusHWCFe9YR5wFMuugoCnukTYmxffPH8phwXEH3bQttF5xoBiJdWbRefhMp1M2DCqtyaTLK",
  "key24": "4dbA32c6oi4KqfHzT2nSqdXqHcqyAQ3n9iMuWnXYXcXNY3xWbgaRmxGUZYgwFXX4jQAJZcHxi9RicTAGyocpN9RD",
  "key25": "3t4c4cbtA7DAqeMHmb87vKArv5Dme9aPx1MKmQrKRLhq4yLYU8Fuup5tKacigANEeJUwCYuwBmTZfJVNBDWYd2uX",
  "key26": "2LDXRZ7U2WqML2VwviLKYAuLmzMdsBYeYCQbfahDibJzSQh3YafHTani3vFpuaVvpCyzhEoNTLJ7wtNi8rZJzGng",
  "key27": "2tFfrwXUsun3gwjhZf3udomZyNM2ESG9cLkcVno1au97EyPwsUzd5enYqrXSPmLskCnde4768Gp6vJYHQXpz4uj9",
  "key28": "WMKK74bbGAsSXWv31NSo512iJcRwkHyJhGigFiVQiEKyhS1ppvXcfmV5TJbKemyVsoFF6dUFZF8PtLUHFYpnoMJ",
  "key29": "hk7a9bruD1qjmwt5LL3wExdHRDn6J888gVL4tevNfAzo9SLf6cQrjkyrTcUDnKZE5duBmruX5skjjCxAEVgB5eW",
  "key30": "5t5c3MhmNZ51pcLbGTCE2DRDfpAndEJtULfxvPmADbZSjGKySxdR5x9GenHaCc77NNRz8zSksxbfaz9RVdxm9KJn",
  "key31": "4GkVQWWbzpSpYgLtCuKxNktbiXx3HbuFCYBrNhG3mTYWWbQ6WJBd9cMQky59RQxdYTN7BKJjpVrqKbR1sd6J9sfX",
  "key32": "2MML9nS5dyNBYSjL5asGvdXsLWwDbMxQBUkunSuiZAtyrAijG7MPdqKW2tEfEhppJLaHFY7a3k3MWqiHWgZAx5hd",
  "key33": "5buhkrRkT4n5srqiYBbKRwj1eoW2sYoXPvFUhzb7DZB7J2ZYYwgGKZQMgd8RbW3yY62whazteQK4g6SdTbbVqHkx",
  "key34": "59d9FVn7WnBfrAxpP9GxndudjHrjpfebwjc173nWLzvgbVAGADX5VKmDpKvYxM1xA6j9bYYe4EevK72DXnwUHLCx",
  "key35": "29UwM5QtczKwx5mcDNz5kb8WxryqC66yZRVDS8rctEmpvLy64a4bm6DwrSFL1aY3Zg5gVNZJngyFG2QdvDmNMAWR",
  "key36": "3ksWGnwFXyt8z34vUxtNUMK7b3AyhqWPZg5DC3ik3rzg6AqY1GN283hZKrwgUdvBqRUw1VXZtEj5SNzZEEU5mHCQ",
  "key37": "4QhFED65ZTSJRU4Jhk5qE2QHMdoSRMuiC3XrHqLEandnwfSTjyWB19XY1VjCLB1z7RNi6ZoYRGyRCdQqKfmUQ27L",
  "key38": "n4fRVdg8EXUiSDQg6ctmAxyYCQMrB9wveNapHxghFYfR8VdUSJx6i7yGUHurVuetsh3ycZrp4GdAbBXauP35FrR",
  "key39": "xSy75eU7WeqpmnJyxqN7sKceqKjRkP8GMv1rWfV6jsPHncXjbCJjStfAht5kGyk4wxYWqfMR35EPq5JRGPn6sRJ",
  "key40": "5bp8L44Sx8BswPvvqoG1BEHnQUwab5KD4rKGJuLLWXSE1eJsPZdE5PCNYxUw6rYYsK1oSq8TRLwWLnSPbajVXXVq",
  "key41": "enzcwxHRT6baaE2QnT4ibrTQeh1ZNp7aumbPtdx9a9y8qQ7itUb1qVgHvV6H9iic9Ng9muyZpPB6qi7wFWZcmZC",
  "key42": "WQWXJvCNxg2npYp8gVz4hLQEqjJSxxV2yMNPz4NCQgD9nuSXkPxjybocCe5TAxbhYq72jUoSUmBWqoUw5bTLT4H",
  "key43": "5uiPeJmoJdNBGuvr3wURgLwB3HbEtJQP2NrQPfTAGzHp2uVUoNDsv5BSuiPGKsCrLdB2zgXm6u91tKZumTGUMqAP",
  "key44": "2wvAd7oRfz1Ly6dxvdRyRPW97Ws6qtjZa3eTs489XxF74MB4xqDykC5ndHWao4K6dxsp9S5AbASuZNuA5qkQdXEn",
  "key45": "3F8Auj9cCwfUfD1V7UtDwrzju2rauwLYdWQsQHjjxXr2uBapSNRizmXsS3yKsj7kXEH82WVyVESuqA8WPztqZB6g",
  "key46": "3atwuSivhghLVHHKm59MvcVhnNXgZL8tQoPh45pSCrpAqGXeHu86CDHaVMzkycpYVqicBFrrw4DWmawtsFbd1ZCJ",
  "key47": "2fouAxjUCQrMVrPjh81Jrv5TjKPxocUCUFhEvrz1bMzYtDbn2QEpjkbjjWTK3TCHEMtQPqRyuFytKUab1xuSabv3",
  "key48": "5wt6RE2xevEAC2MMi3jqB9KPmGcPhzvQLZQftNrKsr77uYMaWUWgFHNML8kLRMPLGTctZjxUrPipbggwvoo5i9Bj",
  "key49": "2JNFpL2CjN4gcjyqhyZU6njkzfnhYr84GyaGjtKg2Yxjqb2n4UVRcT2Wn75CKAhw7aEzWv4TLmMQmpVUxwgLs6pp"
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
