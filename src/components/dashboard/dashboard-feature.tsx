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
    "3q2Lg7kcaiDSJv6mp4gTm8jyTdcPxWVDr6P8oyVnUXw6BRDVojyhnwpaYsyrriVVrghamex4BMyUJNzW2Tfg3SS2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61eRbLLGywpKHhm7YmBpLdLcmAHJoYh3W1zazEaLrAupwLrkagfFjaty6FkKQBaFg7KNh8FWQa95BfhTLDKgWvDp",
  "key1": "4CgjhxWFWd3Q9reVg8KCMvVgpJR1vV3oZaQQzXviSCqjtfZLAUcbs9r2PmwacpiF85CRtjVbW65JJ9dm3UwN842S",
  "key2": "53R7BB8Cqu7T3AXyexTTbww6YuRR7VXuwKQX2QTmFUvwCLTGdzG8o8gwuT8zktKigfjYQmvfF4dd39Cnpwtwy5Kf",
  "key3": "4WxnCL8bahMxGj8FrkfzPwLEB78pKUwiEoaVFakdFWpNJq79KKpYNZvfdyg7Kfa9sYAfjQupvMHwNJqvyWt6Qwek",
  "key4": "5sTCtV6guJSCcMBG8ktVJmLReeEWUpki99rfELNwWHhFZLPbfBkywaVDkLt2vEHgcfbnjwvCit6fUgjE2rdLhbhk",
  "key5": "3ke4yxGCpp2EZRRDHVejAu3o8LoiaCjpVpgqho2w4AJ9GFuTRESN4fQwjsbgbY3AKDgaEocN5fHpVwtgFDo8agCt",
  "key6": "4j6hJZrdCmQMpwauX9weG2qGhE7z36yuDT55Xbuy4XEj4A2zRgAvAhr6dmrHrQU5Ee9p8hyMVefrGkcL41BsFgWA",
  "key7": "3jGifDC2XVbBvTMCjrEHhVUMddNMGFmmviAumyNf7UN5qoX6BztHw5DkJZfhhUXnQQgTtJu4Z6gk946ZvjxNAdHA",
  "key8": "oiEfTPRT4c9m1b3ajm77A7KJu63mZxjUcaK9xYXPUimZ8XYKWw9tLveGb73B7QW3feEADp4wPVKWgsguV6AnHqv",
  "key9": "2vNeJEV3gJ2maR3swwz6YS5UYUQPX6ZxqHeqaX9813L2E1yGqod1jXX7FEcwLGBajSHf1HTg5ncoKCogVe4f53zn",
  "key10": "5pN7z47j3qzNmhHXHhrxsZz3qd3gMxmSDETvoWzKGk1Tjy2sZi4EH6EjtLKUuFwzwUZ9H4YqeC9AwUrPUApaYN22",
  "key11": "3m3G9tXdSJuLUHA5M73dk4kL9eYmhqfNv6woUfW5ZC8ny5hfp7zgL7pNco1i42pb7WUKFYpqdd3je9J3CyYznbX1",
  "key12": "3s7v4Hma4UvUvDFgrBD9ibCqTe7wCBRDLV5FbHod5TVCFaGgXzDCWS69rwQLDkpnD51rLjciK3b32yjYgfVW7H9e",
  "key13": "PvQABpBPUH6iurjpo9RaoLyFLnuecwAxp7i4WGnMhv2JqD73HvCwhNSECfZ1htHgdkU8mupqQbFk3JeUXvwZsNJ",
  "key14": "DE7x772KqwqqXg9nyHXcNCNQzWbshwwvSZpfvdSQxLYrHQgXyWRnzZ4eNybGQTP59CdXnc1yEC5GH7xWeyAfYDN",
  "key15": "35mUKwAW2ATfdRQxzHc5MG8md9FwFi8bJtw6gMzoZqxNepgL5DoreL3HzMKx8RfoGQAoKR8ZusQbZ1thbhtTp1RW",
  "key16": "5NUbsAxz8RLpYtf492eZvDPsdhoVnNfbxAhDFaBoLrxsb71VNitAsFnCmX41nBhb8AhpsTMod17NqnJwHTgHbrW6",
  "key17": "z7ofuBGuSzVXWxF5T1iex7mnv276NZDUgh4q7TcRPSMZh3qfgq2jhQ8dQaQNTHmK6FNkFKxCivuEfhERsM1TxiF",
  "key18": "55sBhJ7gdftmWN8EsCe1wVpGD1H4VuRXWW4WWqCvnQLvsmUpkwS4oDLMYSRpn9XKH4A4jAvCLZLezSmvyffyAGZG",
  "key19": "4EhqRAZMdHXGfDT7JJKYNswrMFxLGQ5Hpa1Kh8EimDZbByYKa2QAWEceJjHrrmKa5uPQXc4r9LmUY1UryMjS8Zob",
  "key20": "56kgrAZwQuaH4ahEw54VD7ng81iemWj5bhYapJSPymLv5dpJCBnDxu1qKrKbrqybDfMmm8ba61t1t6W3vifvDQ2g",
  "key21": "4XPL7f7uC467jN24uunVHzNTMAQRrBJDzwFW3x3UpPcM3YFB7NPeJ5teuCmR8vA2sDL26Hedh8wifFVSGLtj78PS",
  "key22": "5JJo37bt6i8DySyDXxJe8Tn6ZdD8xhxxm7rEqsyDFRzoUf2B7tospcG142vQX1XUu2ngDsoQTAGAnpEY5bVRBSBt",
  "key23": "2P3SZy7KdRz4Hw7DdJpXKzsasKLA14UQYb5icfqEoSHDLJeZ2ZW9XJKTEvJVDJpXBZNhAnKf9s5q1ya2oiR5EZXJ",
  "key24": "3HzW82ekF5kA8QwZjjAUhcQwevgy28FcgyPgCdKw7pePUaXLfg39mLx3jqy9uB185p28rB4keboQig4kPAGAEVu8",
  "key25": "64RnnRNKC8UFs2Qk2yGLpxHsSV9UGr5bFwBKiYJd4LwsbqUB7WQW3YLni5Eies51Gb2Gm2Sxj4QwvRW9zuvy7F9c",
  "key26": "3ACFwEKwRnznWTifvxekuuo5tTwmW4FgppEkRhdQK7mQDsX4xfiSTnwxWovufa1pRasWEGyKMgzLHeSxupFGFhHg",
  "key27": "219HyvVu7wbMUT3vQSpkaiui83Au5w7A1bPHCzgC1XNyV2YsEYs7QHowJXPzVNyrXBWEomA3QNYNFw9uJwoFdUag",
  "key28": "yJefoJyxCfAKixWchUm6Xy1XzJymQR5BYFcAUuTWnqN1brMMGSEwWmUkWWL5AGwXtJ3n7wPY8joTvvFjeQVzpA8",
  "key29": "3uaA2rkVcSvmKgLCxwFruDYiUXBAHG2esL7urhwgznWAX5GdbTirFbA5rxRQXyS3HLKYW4bUAAzMDrvxybZCcPy2",
  "key30": "3QVUWxLQYAm156d8r3LvnJHmp5F4w6jt7raCY688pgZvB7okSFggW283fK4k5uQx3pfbXVEFr67xCGpSydU2d7n5",
  "key31": "4gK1mnauoZXrpGr5cT7hpmAjt6KafPTL7Z8DQ476EyeRHZ5RsTqcWt1xEVHt1d72HHcZSPcdTcA4DMGqmtLk6ied",
  "key32": "3nMK8WZsE5ZLCgFp6cutPiGnxBko8JXMdAQ5dE299XBz6WqBC5aS1fgEcZ5P3NQzTdwhp839pdweb8V8VcTE6gTc",
  "key33": "2j5KTgMwKoo2NFGsUJyvGh6sheEBWYpj9yTQAXG3MSzVpSu9PjXndQA7mAJtCtgsNMKdN6aF4z5CW3rkwRCK1MRs",
  "key34": "buziRRZXfwxjXpvwJusQcFA2f4FD3S2rwEcXP2Bcrav6hCVUnJ1zS1EyD2jutfXyoWisQh7s69KZCHw4uKvTJt2",
  "key35": "f6PvCAjxyqdW5hW2D2q7YLc6heKXgHEThiBNc6enoZnGbrbiBPNWexnvvLDJoJzySkrUvJzQNq4nenkWSLGNmuf",
  "key36": "2RAqgLofFU11vSNT2ZmP7s2iv9x6U3bzgFwhhBrhbgjzPdgweTWmQr8UG9N5etKHXJKi8JzT9hGuNi2XU1EmkQXU",
  "key37": "3bQskrxTWuZTZyDZNVZ6MR5GPrEaSebVbaZZmxpPag361nkWqZRNmPYoovAnimd8WhwoRhybUq8ww29gZdKgHF2X"
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
