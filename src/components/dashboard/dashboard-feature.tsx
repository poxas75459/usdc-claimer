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
    "4Lgyc52YBRBKBMvafb9T7BwkUTaqoeZojfopk7kuGs5A926YrKXctBUzf7HT1yzTeoc5esMFsuDHzeCBTJSoBr3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KiYHAxb8SuFmK5CTXZWdy36u4QPiX1iHK2SqNZu4UuxcjGVd1Cs4N7H2fQ1GjudMhrv3GpVrV9J6h1dA5XcNYG4",
  "key1": "2MzX6c2VW1F12CADRYj4nLGXf7sBzavi97s926J4ieGXMsNhYyFKe1Q5iAUAA5LwfCHKa5KbyWo3EvnJd4ADD3WP",
  "key2": "2HDSAoz85TS9ZvhQhxix3k9Lpn91q78xFZgr69P6eWpzMUfMZCiedjBQKJB3wGyMYJAxUw1faL5Ze5bd5NLmzyY6",
  "key3": "2YwdiRQMrhfXf5yhQ2kD9EcNBfTpAJWBy1WDpB7NEQHRTTcCWhSLGC3KPaRDKGV225WbJnfBd5kPjuLCPfqvUq6P",
  "key4": "tX64Z6SmiVi7hpPjqGes5g5gDEZ4tDS5qVqUHsJgqG7GevJhuY17Nc49E7mfQMBZMQ5NBnSiyPor9NpU6aMZdjd",
  "key5": "QPznH2PxDGnrCGnRpFmmm5rbWV2ftgWLFeJ8oR7mC9GdtswQiBc5zjgHZ9SLjrnG7TTV73BpCpKQCvgoFpveaTE",
  "key6": "2xd9rFu9FttWAWyquw1jHGHGo3Z5WN35Ns98mM6q5jdptWnMWmFw8sFkjid52nJSmeMxrXSzBp3Ep37D1b5M76Zg",
  "key7": "2ifA9Grg6NfQS5sD2Xn7Vgde7f69Cw4NUtBpxBJkTiBJjd4T2M25sgRtzwm7LpMo9ThiGYHDz76bHjsB7wPzGYYx",
  "key8": "dc8Wv6wp1Tt5eN9RgYFYCzLtD92U42wvUtXcyY74cXZvDnLBgAfRJitJvGmgr29LW4E8B7DzB5zb7iT1uQjvVsq",
  "key9": "66C1XaHkLNGRjLCDQ6D1kmBw9UCHkZh7fWkaJHCjEv5qA9WYuCc8VBTqF6qyLWoQ9Upkhvx1KnSggP59MVpKZmUy",
  "key10": "4upTFatL8FWa9g2e9276SmF19ThW51jYzjx16GEFHTLzkPUhkBnSti58KcUC4VW3oGgakUDeTwuNUWFq5249VWRq",
  "key11": "4NAhfvgMg6W8p7javWfzUj6smcd76JG1un2QjMGtD3kYZFhqHAubssyqannKw4m4grXzCYMKvCaEngwiWiGg7ULy",
  "key12": "5qf9TGJEmR2xwXdkHCNMpm4JEkz58V4bbqFMaK1pX1XkZGGwusVunTyQU2ZEiQQN67X4jXXzP3VfnyonHs7qDVoP",
  "key13": "MnRX5UosdeA4pEBiDuJPpqnqACmV7VeHgN92HEDPg97uqy6c3pzPDJftGPQVYrscHuyEK3GkZjTE5GM4eE6dXLJ",
  "key14": "2pzmyZAAawSGfftzr3x3Nb6W5hjsuAk6s5V1eW6ui4XYQK5FPJd3HewxWxECPxwd9AgyAJsT7436ryh19LVpYZNC",
  "key15": "5YyNAAKsZGSogjnPmdzypjzgG29tb2bZ3yWJ5AuSPyUAy2Htur8L5K6YZRQ6CGp64XdE1nt8QcAwptHxy1PstL8J",
  "key16": "5wJz5KNjns8E4TzsJimMtJnZRyWXZy4BS4NWT2gPj66Qmg7HssDYovVr9CyzFx5dSuBsPVyKkkg3h4hnVRwAtLsi",
  "key17": "4yzty4pw4dR8hk6n9DpGnQXX7PScVeC2ayb5cZAnvHKRA1CS6hpiWdMdb4byPxQfscUKsTMUXNwAur9GGPLxiVwB",
  "key18": "4JbT7RQWPCCL5Xw7C9CVoFbrQXtuTaeGSNKZ8mAi6LBzucgvSxaohyPTZgaZoi7bzqPDa5tMzDDfrRmaxpzXtLwj",
  "key19": "3u58Q47CivNJ1pLztLMNTvL7F2xJvXxFKPLk8sxN8QVHqxfqC5wtYY9ggaj4w7oWW6wGuHnzsBHsKWLEFuoK6ybY",
  "key20": "afZZvzLPKjpRvQg9PqWnaTW6KbgZ9mBynKeRUKhevZQtf6Gxy69TPbtUgzvvwqjcwkAEtS8GK7T1f7B2DCGp55G",
  "key21": "4eFTutXjJWD5DvRDSSZ11xhF8aAkPZ8YP3jwtypyzy9hDBqABc4sH35L5pXWvekMjF2dCunXcFb2G9KuYDPvNcjN",
  "key22": "4492FKDeBPU8sZQ5ZP5gnHarWq6RWmKWg1NCFMrSeXLgzM8km1SQ4LQPBYCp5YJfBGQYLjxb5jzMscy78fbS78jS",
  "key23": "2iNGnSjNz3ghoHYeJYLEeTsnX7SL3WuGDerLmVZeVTC9KGY5eqjYBFUbrS3JTSmv1ZmKB37th7DV7KSDzoxnQUfx",
  "key24": "2Liif2zDKMJo4YbpbHTNRHoeTG7sEsekvKheefMhXXzLnu9DP3xDzEgmrnN7EG3r6eCnaKHPH32RAsATcifssTwF",
  "key25": "5431zReyLpKRvvPfazHxgaTiTxxN8uRMqCwN3iBhzvxWf1yTJV9tHF9MWisBjikkA3VQvwNR4QdA7rcv1ZCzNJco",
  "key26": "4hm6kRqqw7Rr1ZApkJr96wCppf2fH5pa53HgiJ2WpREDJvNAAxcyziN85yvMhj1ybovk6Bba4npsULcBRW21k67P",
  "key27": "3ccQJYPE9bmE7HLGWe2ujDkeX2iyedkAh8aD6RTcUiSBJ8DDJkkXFFAbZki4KKTy2dpHMei8fJfVSrPtErWX8a1",
  "key28": "59KnrVrNbb54rJnXky6tRioThgJEjbPxAcnhy6MErDtBBAgG34d3fd9EXFQWA52L5Ze5cCVXUQk5BBLVRRG3xS2q",
  "key29": "JNeW9CsPPCnYNp24mWkpZS5erGuaQitG99CtJ8r5kxEVANFZ4a7rHLxXbNV6PCp4rFF2TpqMbDnzsuE3qwiuQTg",
  "key30": "5NmYQ5ifbsCY6U4eVdHg6epsZjTsKno4bDhLhb7m1wVn8mzSnGVWCL7ciyieqESKZkknnat45YEAJvW9rEhzUHkW",
  "key31": "Y69tqDq2M3JAjZrUVeVVmEY9eYPmeLQ2c6CyHLqYHNqwZnqfKWDmbUsRNSPEU9GWGUfTxq1ryQT7Rp6VMxtPSGc",
  "key32": "hQBX5q2eFHcto5PdJMi3JuvLY37dt9LEDdciqrMyHtin77gfa9g22v1bYT3nqyHMfZUxFLkRdbdMonJ82CaCapJ",
  "key33": "2WBFAcMxYW7THdGHJmbHswWtwFjNA6u17W1F4JNtvCk8qRFDoc1S1SyexbSqoGXQsiN3ioxiknGsDZyWpodg2hvX",
  "key34": "4VXnLxUThy9ogrgd9GuPoQBk7fpdDCaBWpbmSu2GTe2PNAg89Wbs3v8joeuw25qyHW89aymaMUHMXtnRmoijzRhn",
  "key35": "2d2yhopDHz5h6QEsmGddDBc7hGm6Ct8RZuGSVWnToSgULL2tpSwSkz9Uoe4ArtUBrZgVzfDnVZe4mHUsiuvs8zy6",
  "key36": "GrSDJW9qaVrg5uqq6HKbrcLfp29VNmCjsYvjGGP6VbKdSdk1Qh3ezf8EC8nyw37o1YYtGKWfj1wkj7Cxk6nBhKB",
  "key37": "4WFyrRty8PdgRyD6yxLKfDkUdsXJiifABPgvuLSzJ2ckEnjkubA7UhYqi16CsG4pjL7W5u322HaA2j1QPehWyiRM",
  "key38": "5McgU8kpqoJtVr7HgFWZ9C9U6xTQwKY66szDxi2PmiWr5j551ssCVQdrThb43mpwqByMpxgVPf8CVF5RQv68imyU"
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
