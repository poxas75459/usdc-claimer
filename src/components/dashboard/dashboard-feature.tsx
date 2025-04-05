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
    "5pFDmffbGDfMPQw8DzU6Q2G1w3PJsK1JnreSCepfMz67Y4JkKTwA1P3BLFKZYRgT4X2spa5Mic88rmfERos1tjAY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D6BXnSJEABTxu4coSDtNuF2xGgXp5HERZSaiinbvX93J3c2zN1vQGQU9XnU3VtGqymSjdnpkYf9wG8JLrqqnTjc",
  "key1": "4dQHR8QhwVwuuAMVnNcQMma9Qpcb44wQpK1LwW4dHUH39TZQva8nDookpMwYDCFWPtRBy7ycByoaKdCtjra1PNXj",
  "key2": "42c92aK333NqGbUniNJybVTZ2g9e3UgBPyPuGh6TMaFa19p1MqA911XMG6P58Et8Cdpabazuk94NyNTe1Mj1A2yD",
  "key3": "3uGvLWLdtJ2AYfXggjnsQCGu1meduDiPtuDP9HYPKJZiLpiziVMDeFNV6U71CeBRf6bxY9ekFoyMYEJAe2EfMn7X",
  "key4": "2JZo6cv1VLu81JYbaUd3iodKDLKKs39jPjFWYqEZe7KgWBePaujorit8ts6D7PsvriNy5NTDuPsAYvbVanUtiwEk",
  "key5": "2GjKkQPkahvrN32UzDDwhyP2ProoTS6MrMJ9esQxGijKd7dpbUZm9fyx2cAGbLzrzuWVLZbENfFaHu72SJWiFuSV",
  "key6": "55CA1txDGho12C8Hb6YNCLJUvauDbvMm8pnDPrWY8GkVoduwKFB5ydoe5Purvac85m1G6fC3UTJ5FbF6MWV8cotT",
  "key7": "VtATuBgMVh3G9o7wD84FtetpMAbYRt23peqmru6T6zseAqQbQrUSBaACeFQGWMF7cih8U7SxTXGysugMhecUqgE",
  "key8": "22BPB5kiAGLworMhVzpuLBexZFLiD2aF3XRLH7bTkRc18oZYSLic3NeLXyw4qWJUZRCCrGZNmXTn6h3NvghFanaz",
  "key9": "3DUUtiwKhyQrwptrXz6ar4E5vmervMdfze9L5a2dcLFah2TYzHjNnE9qgx1MMHMAWdgK2Cj6TPGT7kYNCoZVrKW4",
  "key10": "5hes4JuHsHnLqvMqGAqcLSg3F1wbdVyzqor6aVJWQxjkNZyNB6wQuJf63kFNB8R3uGn5GAVkZo3qmQ1G3k4jr9vE",
  "key11": "5jSB14pqKGrXD67c9JwKYUGu5p2XJdGxN8QYct2XDAQmeTTpnnapa4zG2vgpypoL8gNd4fW2XsvTLAAhJLhRsdqP",
  "key12": "5trxRTp5CPgS5xKz13UqpA7WpHvE5FQMqwdHhzkiKEtJXEkY5yaNGyMGNZy8xTpP6j7FnAvqLNSY17dU83u5J48L",
  "key13": "3rCGJ3NmFuAkRTErSYm76guR87h1UA2AEM3pkVuK6rUAAGwQEeYa9fSPrxSapigEu9ynvAvik66jzkzekj3PRPKE",
  "key14": "2DDkS5XqBF6GvkehptWvBMgdhZd222sFDjMNS9XNid697e1k1oqkF3ZyaqxcC3ApaBRVVpVx9arj7tJYFRCGKU4P",
  "key15": "4FnHwK7a3RmQkVYbmHYE4mCfXWEThgjqnBBYXYbuQourRFXSjxdWxMbSKed6ymHuaSC2WgBJQL36ZtYDUBy8EaWu",
  "key16": "2uaBoErFmCSkkZhGF47Uhy8rMDsY8WKapkXs8wjSuExscA13c2LM27p2eUDtDqEXYXz6abWJLq9SeVhzDv2q8CMN",
  "key17": "54tQRm7eUuhgE3t6XLyioBCvGTAQpypu7axHERSM3vMTVYXs2Vsq5qaXbjkuMo1iuw5U5oh7amfZ5yEk1eKyi72n",
  "key18": "5XyBxyNWoVvTk6gQu3GZQvGtN3Viaa8qBA31QEpe8YCQPWFg91DsDF9T4zYvawWDmxTSGrDiWcseyEGERJekfyHu",
  "key19": "5wetUh2KdJ8Soddj7ZuFaeAuRBsvhaboM7M7bifGXdERXHLryM7uxkX1AU9ZnZu1BM7BKG8VKfe5cXYtT2auf8mZ",
  "key20": "sACo6426B7rdK1F8NdUbyn7VTNYoxWQ6uXevkELeWbh1pTJtoGmY2RyRfhQomzXcY8uUr3rAtP9kofUsQENq8GY",
  "key21": "2DPHxg1bHCv7D1iDtLjMNyTa6nA4dCmNQ7ExWB9CeBTAntYrnMzbWfrPUmnHDhrXRugDzod87sFZb1P6B2e5NirN",
  "key22": "5hbZ2Yg33xLPRCmvgaEpQ557974fihF8pRQ99HLJ9vf8docztAuVowvQt28sPpkYuFjD7C61DEUjfXT4EfFgSM7R",
  "key23": "4eXHFtFJMPmixduz9QGFByYFAWxZSBnA9rP2F2FrZ4u1r8q1HgDMQGrsjM96akLc1HNKoLbueUbrBV9eaezsTkZx",
  "key24": "36LzPhJV81Z9GAKfL4kAFg9PbZEJp8W1xzJEeX7qXtinBpFGA6dW6rzt3RZzaZUgFL9iTtSDATcPmWDLCgzEkbEt",
  "key25": "2LuSfXZG8J8YVEHryrE1kUPfAmHDF1rQVeiBB8F8YyLJfNmDkC76ihGkHQnCEDfRq5vXmVYsL1geG8acf6KVdhXJ",
  "key26": "3o6JoPu9fudbBg3dHZDki6de7KhoA42ZpPXak4f1Mz3KYHbLmXUw28Jn8U2RWhdd4QeNPr6HTTKGx8QmdHmHBhbq",
  "key27": "4yQc1sy6Q9K7CD8zt1xEq8mLG7v4APWnE9Mo3XaxLB3WVbXDXBNSe7uiyPQNAnByXSTQuLurttekc45PqMTYUKx4",
  "key28": "5geXHe5Svk2mYDGP2xMyMKrKiASuUaZsDkKrwRQwuE2tbvfFq3Z7s6MocUuVySxPFabM6h4iWBBhVLRWScjZPzme",
  "key29": "45QdYP7MaF2S7bxpYV1mL2AsbmUMZzBCq1o36fFVUrSMrAxfRtaBSPjiHEu1hS5fhpnfAnyaAseid5HmzoDzdHyt",
  "key30": "4eCn5kjxn9PmA3ipPqSU6f2vfwSD8peGbv9WGk2txaQYGqf7QSKNvSrtCnLRgWNJYyZobgPS61oAE8vTg7h4HjHs",
  "key31": "4jeLWcCKS27jN96kE9m4MN9FNec3exbJhnRuzmNgEdBL8UUUgqtE4355KPk7dkNUcurWJeeRuEbNdquJtKmUVePd",
  "key32": "5TYRxeepN5z9KyfRKioZJVbZje1efPPWhBv9G421EfBLpG3sNBU1NTJwoW7TQMwfx8HT6wXM19G4rFeT9kv2Q95h",
  "key33": "3c1XLkfoFg7NVgduCFpwjyzFkMGFpKNHRF8zLFjWDnihVBqH46MvxiSG9nxGL8yu3HnmWVCJGkCjJ7nXvuQaU6bu",
  "key34": "2c1rKggNVwspoPRmmJcsYrz4BJ7wbsEz3quspU1VERQeHnZP2Aj8Tfj3sbr9enEUq9rnYcBdHRujEEQxFuarjHsd",
  "key35": "cFm8F6WqMBnPJyG8S2ezDgKGsL3c3hQw3r1oCsPJTPNkKzjhg3mCosE47Ki4P6bRaiPRDmRcb2Skew3JaRAtHDM",
  "key36": "2utShB7RhHsc1hsbtfEWwBQDzKxSnCte2Ta9Yoo549pNAbUPh1m84aaZePvG54E6yfzmg62YL51EJfJMUXVcgmqT"
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
