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
    "6SmqgtTt8t9GPiZjwfAt9S6aqhQr1yDao4Phs4QZ2LFZHhQc2obikA2YiSVxubSL7y6QZGJDd7FGiDaZ3JxUF7C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tCnZXBuPxz3kHXa88tkzWi5WHT7TqHBVgYbGqbYectsYuqph3gQ3TLGGzofnLWqyej4ZC1ewmKFjzWAoKVGCh2F",
  "key1": "5ELV7Qdm6FSTDcJe3sQ1fKmC8CSdZsx336fSt6NXYKUfWFMX94fPzaH2vY13s9EDrbdXiR6Sxxn4YRNdE52fixng",
  "key2": "639z8zc8zZGEkN2j5ZfWp6aSHvpve7QkBRWCkNAXGNDaVV3PH45V6GrLBqPYsPuaq16fFKaF7qnu36SaGmF2wgMC",
  "key3": "2Ufw93fdGJgzH4Ziy16ovsjRrGnt7vZNAyPTpdABotiFvb6MjynkHBNKot57qmJPWsMpCQKu8M4rPE2KhtryGoEU",
  "key4": "3rboFjJvEbQDfk26mVQHSgGcjpUTsvVsnkCo2q9xNaqyt3wXyT3izDKBESArYFj3uqEH8vzL37tZwXTZGxQCEoBV",
  "key5": "5jXNdK6xx9xa5ojPFN27iNnBMHhjdE7y667wRjWdGD7sVvMijpfoFHsaa6cPtri8qncwibk9KPinkAa35NSMDikn",
  "key6": "4xFsozZv6JVKofzTeTRYYZvKREZTxpBLP1FFFnL6qz5qtBjvD6WvbasdRRD4KAbRq3oXqeq1TNS7RFLNjdKaCoru",
  "key7": "26dGEsCyUz47ZsGsbZYZkbRrJZUN3RajXeNqU267C7C6NKLDWtFc4Pgx6qzwu9peCRKnt4jZRgvn6BkPvN1bsuKQ",
  "key8": "5esrZgaWZ46ihXcfUhLwDGjE2U2uh9SuC3KqdoubD5R9KkhdnhM8ANcBixnJTAyrgaqZ4oP5BrtaiS8LPR8DkDy1",
  "key9": "4xLvgERYfGVyKsaq8nZhWYvD75dLj7XyDgAq4ZamrmmaiaU5sgpb5dc22tfaJvxY8PMmWWFsfyDnhvw3Pxn6VwUN",
  "key10": "3wPvksTr3Uij8k3PwB4y7Y51XC5KL7EDNWTaJL3v7SqSUY3jspRgrw74GqT5zE11rMZu6CmH9R9mSLbkpKRW3ECM",
  "key11": "4oBVwCFpKyHmyAKbqdKUvgs3niyphgQNxfTnwBeCn78eBGp9xMGa4nbGv9XoSMyoArMJ39GRGBsvdVHnfeWYfW7o",
  "key12": "5FaWo5H14YT6NrBd15Wq1GKh7siTfhkrWDVwpZh9mr8YbMai7GjiRZNw8Ffm6AEeqCc4n7megrpQbjcLyJewSZkK",
  "key13": "3hErLeuBwsH7f4oMGd45NG5FhnqFRRtXB3XzY36JXWPFasBTzt3A6TMCoHAucV3CfdrX8q1khcmGwq7xhwZCvUGK",
  "key14": "4NSvVfmj8e5mWC4ZMFUHoE3c5qtbBW1Z757yHayDpHg3oYjcqvX7s5xuvereshNZhNmcykP9aCDyPpAD3QFZ8YHg",
  "key15": "YTMAMYHG5Bv1CGfFuKHwuJEqxjfVA84R4ReU4RiLm8zkHDtC3Ad3PkAE21g4RVvzLA1K2wHTzrsUXVKc7GH7dWE",
  "key16": "scvqWgxUJLu6EGupN6BJWbwyGcjZUHHWdDFnhgH7mk8g7yXMu1qg2p7juUVh6GYmyXUMVoh7UX3Kc9DeLKxNCq8",
  "key17": "4KqY2APawGdnmQQhjGqWoXi1njxSai7LZiPe2NE4ra5z13z9tYMeyeBd7tXVVyhbL99oMkxYtYCKNnnJTq44KTSM",
  "key18": "4YaJeEZxsH5j1FGQv47gi7jfySQAFdY5zbX96Mt7R4qnbzcNFquKacyWL23N1XPDkrVBtkeKieXnyuqx7HLFK4WM",
  "key19": "52DRwyRHRQCf3mahJpH4oy81cZUNBNgyvafAfsAJz7Vx3LwUoV6jVr2VkZCiAJX4mJNYnT6swYi7n746CbvKhLiP",
  "key20": "4DVeCGhG3kfiJbvk5MTRuMWU41GEJuFe6ThMEnvtrCeRAP1FDNdqHe9azf2Pqb7hV9XtFALMZK4AjBMYeVWqbBzy",
  "key21": "5iUYrokoHR9RMFf2e9Tjxg6MXwWtJr79oBtGPVYVa7hehoaQNfDbaWUxPiQAbL23JaNfGD9DfptCMzWgXpZ4Qaih",
  "key22": "619AzXCaEBJcpEvv6FDFahPqcRsbwCcftNKpHn1XbMM3qBza3DfqWzRc71AXPBf1H679YLNRUA3ShY51HmsEVXKc",
  "key23": "3qrTLM3MamHqzyVUxtt43s87WmHdUzZRDp7WSo3tAcRpD7iGBPAXEyRpuXfULM3BGHBD2KCCPUUEmkTeNutmRUMw",
  "key24": "3ec7sDZFZnLwiYJoUDBfpc4mdHoornWEVLN52H8UjUBz4mrC67kJv27oh73YbLyGsRVE7Er4XALP3J3rdaAK3QfV",
  "key25": "37XpVSpWMDRWJxukDE5UxJiXnKjvjPJBVwpNswXzY2WQkJAcsTgi4LggoLr13RvGYRhXZXeNU3CZHJBdmJHejsLv",
  "key26": "2JQ9zcqYoUxdtcH3ZP5yYAShxQhCWkDkpTe3DS2nwvzGqnbK91ws1ZsUi9EqtXvJHv54wGiLzSFPgB8anLVUxWu2",
  "key27": "vrsxqRwJBmpnCyBAd2bJg7duAekkKEhoLLEMueTJKfSxXj7nazK6eisHwUyjZsrfcG4r7THxD8TtkfhmMDnAf6X",
  "key28": "K4sGrSh18xpZo4ABqqBK8QCHpnUoM7SesBy3926otWauqj4UZQDjmnxcJqh8ron52Jxqra9xxYBeRvMsg2dDJtD",
  "key29": "2CQFE9wD1CHXsDrpHRpsf9P8nK2mhajJAzsYk53aDPEPw18vFNe8jFYnCM265B7ozog7rNAaHoDefrwWtQUas3Sr",
  "key30": "4m7ktyfVygWNnhRKHiD5aLkwC3hZoXHaWfepNJHYNa6cvAkjJgJDiucQJMjmN7ZDwwhpc2sxVEp6wv8KkMqJHs8d",
  "key31": "W7NRtqksdjyywXuNUX2jfV7HarppLssPD3DwTd8XzrEpubX6LNPCawcg67PM1iDdTRjVda7Uj8C417oVetoceqs",
  "key32": "3c39NBxutFEuFE9FttLSLMUn9vQwE89QUJGFkVHd6xo6JwESarq12KtUbnSHSPpzdQPFTHiLEqPMatWpBkQgm867",
  "key33": "5ed9bHirHoCS7GP1791DBbtnQYzvbH9hX9Rx89waM8HD9XLGRSrHmKW3h2vmJ2vKK5cgfgW46qmhJqTddk1hJDrR",
  "key34": "3P7GxqNky6mRn3bUYkv1GGf2zF84WXBuUVCE8fkLjaqXjVjGNMkX2GHYuTsp3a4uuDLgYmKCXyCHSWF6PR2ABM3o",
  "key35": "2vzdep6uuDNBCL9pfXU3ExRqjQwHYCZrUE1NTiT2R8pcD5RLQiYF4LqSZj7769uwY6E2YktmioFMKHAKokM7WkF7",
  "key36": "2UqDshGJ8CkFnK8tR4KbSjbsxv3vuRgKPSgUEtLC6TunM9951pr6GJBUCqYCqTwEDJNDDNYRAbQnR1PHkpN1NtXD",
  "key37": "4vVzGFUZPrLytvuF9VKERG352ojDshoYx5vmfqiy6kd1MkryjjYK6ZW2Cm8Ge6mKxuf1UbnBrQzRrcZLQM42AGN6",
  "key38": "5ALrSntDfSLqPe7c6RAnUQhgY32RqarJBRb86KUCbrazfXSYnfJrg7rD7mLURjvqBsRvSZ9iE5tTjneWHzEt1xbD",
  "key39": "2swCbvy6Zsm9m99CDh9D7k5Qv6VugtHSEXQU6WTqWVkDuPro9BpSUxGGGnGmumNvCWDLgURW2dpGQWshE5WGtnYP",
  "key40": "3L6HbCbEd5pAPPivFLFFRP39mS8TTiaJ3AB98c3CBGnCh6ij9g593BfZHHuaDeNwcMqS2pSbfCkjDvqDs8EkR5Bb",
  "key41": "2HmW1qRMHh5AmLEjkQ39TxHDxwbjsYBZQ9mraPiSRBUFiiNqU6xoaKxTKksVEQvtBiX9iwryCfxRnatscyGMCv4R"
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
