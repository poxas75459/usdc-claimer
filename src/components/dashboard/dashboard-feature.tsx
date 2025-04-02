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
    "4445EVWCMMG7rtCcfBtSErm5tpiyAjYbr5wEMvsHfj6ztejxBXtwP3PnyTaKmiixR9kNURAXLtDUhNNzUezKtsqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FaV3KPRB3ZXT91mx51Ywqc7iuYXy7WLUT8NjCpVtLLAjBUr96xkhSfKAWQJSrukBajU1naprVvaS7kvRG1n7Un3",
  "key1": "56TNYfuRtpYsHHtP9ACJJfFVsmz6ySmZ8A7tFuiFwZQPkktrJ4jpE7x773L7bFNwK7GwwoKwTi5qvBuUT16P4pCq",
  "key2": "3nRwqTPutk4Y4SnJLK8P983dVuCBuuEzVC67N4knkRe6Jj6SGaqAxj9toXh4TvGUGckeDvgQAnF8gh1BTqWRyeNa",
  "key3": "2NLXtRNAXc6rAHRb3XvVmXWHjUPzfenAW4ry6XSJsunpurQ5WodvPBHViNGet86anvddT86UcTRHmQYh4DNeutir",
  "key4": "36UavdtkL1JRMPn8ZDQgNjd8w8TWvbHTddey3vArMr9yh8MTHNSFeBNmFbQvhqjw4naxWYiQQTR4KBrF7xeABrL8",
  "key5": "4KS2zTh6BTFtQrXtdVAvRQMaoXSehoDDKmJ1wqBs8HnDgpJ2eEQxwWiGws1LgzH2HaatZAf3peDUH9DxPTicpGPX",
  "key6": "5yafpw6XWbtWGEnnm38ysDfZibd2px69G3PxPHYwLFw96y5fWwwN84X5StznvESF7xLqAQ6wxnKY5Yuiqys6pgFG",
  "key7": "5UmB7cCw9cnMpih9G495F6JAsiLQJNcU5V1ZSgnnMpKri7x13WhTw6FBnxnzFSun7F1wT5YaEzMwxG56LEGDRRcR",
  "key8": "2hZuntehpB6kKrSuHetH7inFD13CfRfKdn9ZZH2hDP28KwDoVZcKmXqawmTLL3Bwx43hhVrXibh8jKLBiibJyST4",
  "key9": "5ctXF5wxXkUCrpYDLtArnKbLiGQK77fs8XdeiV4qhwsZz6VeU8gUdEU9jHzy8oZtpracPJ3ruGK1JPD6jfe5xT4F",
  "key10": "2oPBm3XqTbs3NXL9YU57a5KPV1qM2U1KSDwcWwxQTPcaYktLEh7hmCPBbCE93Ni5fEbgXtiRLwjku39DEM3oQjt",
  "key11": "FC7sameMy1c3poXTuxnBAk32jR4eKmZQV3x7CycNuckjyJ1J7TVtgvYZ8jjVzp9pbBjcF7rGtzvktJVDBvGbj5Z",
  "key12": "5wG3CxGhLzWqMG5zop6Qu98exaZei6MrVfP7RW2fGMvGTLguV5iMgFDMN7fpM6jeHMTmtEcVFg77LKQSA2uwRDSz",
  "key13": "2aWJvHSYWQzruJLRTg5F1EZKyNhwEBEFy6uPShNoFgoeS4VwFkGPqATH2TU7kRnKdCU5eRfkxku6NZUJY5Fdfe8m",
  "key14": "5AexGxt7QSWysdBUavYgqWcCnQpNQfkfvNChVdq55KQLEzPjBCGWiMsJr5JRVM6BRupMHDSqq1EY1dGzzqfD64GX",
  "key15": "2sxGVpyvTmgWDE2d7eb8kmQXMisKURDXue5H5RmzYzaeWx8Baw11ihpZBf6phtK474DQ7x2AotTkLeHj7t2bRedB",
  "key16": "5qGz2gYqNo1zjmkJQUSrms6Z2ve29XgbKiMCqAJ43gbUFN8b8JWdHCmEkjogupi81jFdUTtPvyUwPfgTARN51Gaa",
  "key17": "3ERYfL1WWGqN3PkntFVsNHvBH4p9ynMMKudSoPzt3o53MxF3h3dCo7yeSENqoN6qgXQzFSKnGhDAXrockzDc6ZNt",
  "key18": "obTTFZPabTbUVp9SXD7v46VsNp6BrWR36vXaDobUozcwn6Gea6mP4u6dWhRtE8XhsyTjt4qGDi7mCeBZxpi8bno",
  "key19": "4cqEmGbC6e9w3pzAaUtkQtoPYnCwWcCpfRaUnhPte17FAXnXgrAJ97FvssCGy4T4AtY7ZNMKzSozX4s71DNSvYam",
  "key20": "5pzoCdyymVDuJk52U5zNAJENqddnz3raER2QGkAUzPq2GFrdnrXEbJyiottxAxgzgsqRFvWq2vs1dWyZJQJpkJH4",
  "key21": "3yY6NvAiSwDxB5XHUTSbnxpKzX1jMS9HrLEvufu1oSU4vCckBo8kzahmvaVT9nsxyiftSnsxw5QtDowrt8N7rGhn",
  "key22": "3a3ckP2uXtswxD1CEpCWN5bfhAkwcPeDuWj6NjH5XLkhi4xb2K44dDYHm4T1enhW6uXAox7zEjEguYmEUnMzXrzz",
  "key23": "4pnEncAoqjCnPisdFaa7NHX2YnjHgNzKSLXsz3zsVWVUfKeh6NhxaLukTahoDukKmRqpZeYnerRmDozsTYh8cAUU",
  "key24": "5a9vq9D4ZxyR8nt4AFskxoxpqjYEUgcq8H4YGhvU2LMPCZ5oAwc38wxsMykhXnDG7rQWZFkGzshnfgM6nU7jzqXa",
  "key25": "2dRoQSyPTDC1LdCMCpf7YQBJ5eqRgR3Hj4wy4vu3AAK2dUdXNmLN3eRsVGjYk4VPLWAQCyEpNVXXb6QaGUn6oeZs",
  "key26": "4opBAT8mWbniEmhkCN1VEHvaszXk6RnnroNMf1iBjvQXPQ7Te7zBEfJ4b6hPAjiU7yMum4E9FzdAXMXeJkDLVBB4",
  "key27": "343R5qGh1FDwpkf4985GBWBE5wLRupwPVYqq6AyA4TD4dypTf4s9xF3j4GFZyyEzmLL6BGXFu2K9T8hd5tE9RDzf",
  "key28": "5LphVX5xFvF1jRXuDenYPZrVkX7wdT3EW2EVsNMMUffQy9GrYM7qiLfmQHuNSwaapKjgErW3Vr1zr5pQSMf4QnHU",
  "key29": "26cQNsKAxQZtAM16A89ZnXeiNK3WgXnfX2DUvVpycSkFGvxgD2jksU3ivvWpUFFjuKW7H4KUb6c1XrvjSvq8evbR",
  "key30": "2sNi8Ut4JkH6RZe3NQ9Ktsb4b8YmdQGhUAeZcZz5fA4Q1wYVPs2mR68Vw2cRQfjEJPZAndqDaia131GcQYPeX6r",
  "key31": "45rFrQY7aGshL5UE7XBMvb6Jt5FfsxUTSD5S7eqjvQ3BaJoNYeRLxzkTsivUwhpYD5NTY6b8FdMHRqJEqL2yHZtC",
  "key32": "dboj4Y27pbgAL5CoLQAnbVGwiepeAprpjxyUFj7Hft69QoX6uXfG8pJJ8tqZrUkMKKkwR7eipUSCgm7VgXqMVyR",
  "key33": "44Y3fdcTFiUFwqLAorKyPtoEsXdV6EqCM23nu18EKa1aEWkqjFWmnZnp7NFUkLDWHnDenZQ8ZpqH2ukWE9wHBHe5",
  "key34": "4h3DpTqgySjdsZtHPzVSK8twvKLTCsQhTY8YjKBbPPvxo6BofwsLnJk3tkkw7m3d86DBPT1wQ8jpTHJJq9eSTkkW",
  "key35": "3pDg1ufANxvC2Pzq2sGr2B6aVeZwSkrt61N1Z9VHGBpgeF2d4Zxv1E1PKZNz95BCDmM4JVAuZzg9SWWXLPfhfz73",
  "key36": "yDuMRbERTZfpDjnNvkCzUGyrjzFJvm4rE6LfgHv69XAz19tU7CWBQ79sYWsqhyypJ2J8mf41eZS1FkNaoYLoaZR",
  "key37": "5frAscUcistVHgUWkdTSsxgeGkpWVKX8jGsrS7U9666B9EgqJaYx91bGfGNkRoa4QutR8ihz66xsRX2jty3msRqW",
  "key38": "adfcdjvi5gQT8M8tzGpZkitfRAooBqoqD5zLowRgv51qCBWy1P26qmGmjjGGvJMJ8HeDUrDsVZJrTPwjtw1H2Zq",
  "key39": "43r8HrCwLXK9F2AC9GpXSw4ogXbXjr4wJ6zcUbnyvB9qicrAJTHPGctuCpB3qKfi9y3kS2htFBvMmGb8LTWjC4JC",
  "key40": "5bMSJs15ifvFnZvi5b3EZV5U9hT27LcfgaUBe2oRx3xyDpJ9aQkdp2BioebtY71BfcgWw5cdmd1WZ3AbTyHp8uRo",
  "key41": "2onPhS2MqyE21KT5ER2H49t2biCwdYHP26ZTg8Jt4zAfracmMxUbe5JMDti6vBE1JWvVCQwoQrfWTCUXZKZu73xY"
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
