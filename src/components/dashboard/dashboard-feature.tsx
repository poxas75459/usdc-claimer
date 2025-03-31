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
    "46QPivHreXNV6xfdmU8aXmzeoWx7Y6tk1q3M2T4HVdi6scHW6S6E4ZZcc6G8BUuHJaS9GGLofSAZ5YMBVPxZsa1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45v1RecmZd351SBAP1DEmJ4AJyFq4qi1X6o6ufjWd1xUyawvJL5qMsaQcZuCrxsVpXKgkqjQ8YNemiQs2Lg4Eakt",
  "key1": "WBCMaawjY6ThvZigw8XwUoGm5bBz4C4uHSviz9a3XoBHB9PyoW49RePzi3MzHwvxCEpEgtivZZCUBPWqFdpPdS6",
  "key2": "3QRKJifJqiPRAJgfD7xhsTbEyNTXPBhXytUGM2ZQ3ag1KZtqBooi5Ph9eViTXatA6GakU9JYBhSw5HSjm4MYmqEL",
  "key3": "5r85mvTNfZ9tY7UUrKGYxgnf1XpUAMUZQb2t9NcbMWk7cFA8nn2MVNVuixQDZpvqWRdLSeNfS2q7CrMbmWiLTRWv",
  "key4": "4r9h9FSyeUdYZyZyPQDDEd456JKzWMeVTyqjQM4yMi3vi2KifCmQVf1BgkWAjAHFqYUeUp9uQ3jb4VcMtCqe92ii",
  "key5": "2GmnX8EJrQ4BCqrwu2FAzPanguZXzG5n6yiuU4MLSuHwQnvyiihCPvJRX5q1SuB88jDFQYmFKBSb2XyTzL5Z2ijf",
  "key6": "2YDKP3tqHGeho3or5SW5kLREoNDsnXKVH9nSM9KHm6PmbUJT1fq9NkjEuTWa2MZ33Lokx9jidyeco8Muha4LK7fc",
  "key7": "2Y5jVjHNN4jdwS2w4ww5TNJW33hpLZ1nHLwQ6j4qLpb9NPHVirPYMv8ASuEJF3Ep2Tp8jDxUQ1GFnhv3jNnYJV6y",
  "key8": "61j2Ci98VoJCUXA8yFDSaEvdtvEKnSQMzGYoQ2dj7RuJ2ELHB8phP3Rk5qxm5h8pDr6Zw2XhEQsBixG8dLzZac3X",
  "key9": "2akSfPph9fZVcz5pcZ916z7Jm2L5dUqPRokasBA4jtB9DFFdQ6Jo2xk9modhkMhueouHNtW83evgMZX1tdjdCR3W",
  "key10": "2Fz4vn4tbUvUFa6HLyodfzNNy1PrfiqMW6Kfn5SJz9pE1rUTNoCdxNd8C5Ga5pjRJnDQwT2LMWK1VG5uUtrqP6Ge",
  "key11": "NR9wF7pviXTfo1LS3x4UL48FobnzmnKhcPj2kuJRkbugjijpgFcx4W2tvRmnbTH5e3KSZNCNDMksqstBKx25e1k",
  "key12": "AtQAXjiVAtidVr17kkqZqTnvZw93e8hzmRTuqwKXs6HRPjHSFZvLAtViEuUvHLtG8Fn4UHb2StdTqXNwRCaXyaV",
  "key13": "5Ga7BDHbtDaFJMCDKEbbQURU2TB8yZNvifezLXKPY8F4nyJnVS5Ns2YHwJDCFvgDkxx57XSvMXpQLYT3gDSqfs1h",
  "key14": "DjqfAogT3nChh7oEn4AoqcAcDZspakYDrSi2yvLtB7TTgNZaWsXecukfs5SK3CcoqvdyUnpHJJ81Zkt6bZ1CFu6",
  "key15": "bquVA9FyUXxbG9QuurTYgaovkCTvndPohYWihSKo5eK8VVEWd7nyMfZnmYpk4E8D5nx7ECK1x79ab2otcLRqUKJ",
  "key16": "4zLjXBEybJvQkReScPeAmi3bJ5se4AVzjhHGXB1wEqmS1AwiTjFQA3FPa6aGCP3R82MiyQuXoqkyRQs2ak3LDwJk",
  "key17": "FWdbbBiJTz1JTGERabJFaYw2BerqTR3x9bJc5uhXhTGZU3pohV4AZVUnDqD8yJoWQ9rfZYJZykqeshmQysLfwbw",
  "key18": "44uJGiSR5Ea773LzUK76nkY5BJxhmJTMW4dNvPJZrJfjN2TUKrjUKeuJH3ngagapmNd2LG7DcPuMNAkMMokotbcY",
  "key19": "AZpUd9yKaQn3iF83FUQkeqogQfGi3CpEDMpGw8wqFXUkR2CTvZxb1VeK4CHFTJ6MUhdcfsWENqUkdf5Tc2bWCNJ",
  "key20": "2nMEDh2p9Tbzqua1ptB9xXx7bFngzMERVYtm743CeTU2NS2SshGU2wvgTNn7uDyh3b4b3mQq3R3LbDLQnoR9zNkU",
  "key21": "3u1A4J8Xzy1VQBgDk4zFQyq3SspapXFgqqCMtNop4TBDtCFAV8pLH7M7pt44et2Qy33Tqqqkbi9TbtowqoYBqHVc",
  "key22": "4mxYRzJhgEAVo7bJR5meNoerh7ANQbpENk36G3quEBu581yxdghn481uwGH7ufzUjWFdKkosLCk2Eo5FTovmkkzC",
  "key23": "4cLG2kDxpf98Nx8iaiaNgD6AmdkevDfGt1SUAFFJEpnML7pWcBGc5noYE5NroZj8YChxasHpNZHN93j5L8M1BDcX",
  "key24": "5V6foheY5QdHLdykN3MEs4FnmmGmfnDx8r9BUSHFwa3MERp7ANs58ARV3BUXdEWYJVZEFxjzPLRPeyPEgFi1djcZ",
  "key25": "5dov65TgqVQv3ZhphU9Gyp8ZWHzf2WvkQHw2gnVnLFRFbhbksb53hc6rH5j24CMeyawDzSVC9P8VP8UqBtL7fVed",
  "key26": "4RZmnjdmQDqMgzsm4yUFHm7hufTmYXHnGC6ewFhGsQbarWVvGSjrQanYiUMcAFjD4svLTXreFZz7bbi7aWAa3ZbP",
  "key27": "Ho8d93qLJRCM9p3bDC96kAhm8hAV4TonvH9NmALaKwsGNprMgG5XgMZNuzB4svLXnzT5x41e4mGASVPQLe5vt9D",
  "key28": "DpAnjFnqNDf3wmNfNXumS7GpA5bW4McPKxwwL4DbABf29L17aE6nQ84Wp6AWqWNSKjDtfFXGW2dBjBiMKRnBcSD",
  "key29": "5n5piYu8sYo4PQkWRuP8kuhUEnQGhHmyhHWdcaAkJRfoEUJNyRkVNfEAMEJVJAvRqYHmtx5yAFRuZQkZrTZShWP",
  "key30": "4jTkzbSUFfTSF6kfVe8AG3XLi4kvFqWBtneekBwcuyGRHu8PgvvgLWxzu4KxCofjvpcW9g1sZTe3jCx1aTBt1JrN",
  "key31": "2SwnnJZzvFhHvYr4Z3X5z5Tg68dS9UunaM831UKiGzoThgzzWspRwT6V9b9iVNorUgTaVAgAKdCCmxeinyTdfW6V",
  "key32": "KDPvFaSSsiYPqZ9jCwfTBsssdYrVMhz7ENmrrnCVFZ26nsMyiTPDLJWWfJxRcW9btF36m5BMFi8maoxk25PBcGV",
  "key33": "3X8SHbQVsch1u1BhaQ4VtX3zyqbQ8zWpPfJEgvtFe6KZk8cMNic45shh4KBYajSoVYPC5LDcqRmK7qBb2nkYDSEw",
  "key34": "3buoLW9ziTqefmr44mzaANkYfXR1pSkHpUUDtwRWdGigeV2WEp5LrDRDD7A1Ne8NGBWXAUuWa1QkxBwDSfasQxSS",
  "key35": "2YhmNhkACvPoysTeW1sQM62P2VazHF8gUAoU6963RVrkxd3kGKjReABiDqBXZ5JKqoTVJG6YwTzZJ7NEnhG18ehz",
  "key36": "4iMSpQunhEzY9J5MXxoEJ77N5a1o79wBMZNQN9HDEufzrqB9syPRYa4x9QWdGSG7yVqALDQ6L8kw7CLd4R27pi4q",
  "key37": "4G5YxYEN8UdiSLJpCsVCe6dcJsesfjhx4Q1RbwfZLTZ9Qx3d2DBCsswU7LRgMPZnXf3hibf7iqPxUYPinJjgAXnX",
  "key38": "JRh9YbyRM5TkXnX3hqZbS1j8a3X6dPtD69qCTuNMYBoXntXB65QkADNr15qDKHdpELwmTPpmU2koqeYmhHqfYg3",
  "key39": "4Lw435xurm9xqjVuVTECXxkTzrynkz7Xb6psytyx5KGFe1jb32jiREtKLe6DjPrsuBY84w1EGSabzmGCd2UtV1Va",
  "key40": "5nw9uPqHucd5KXFWbdQ9Rv7JkqhaHkGdcsyY6gM4ZQvmVfRZcqkJ6E7o2wGffoJ4x6ZDGfZuTHSKEfd3Yujw4TFJ",
  "key41": "gadsTtGLpzGCrWRXjsvH261Qjyii5M8tjEbRiCiyFZgJAbzL9W8zK6o3GYcJcW6r9JmyCt9njZjjYEeFm5gfw6w",
  "key42": "4K5EyozZ485wBZxKAVcNK971dESBp3JScdAb8z8P5pwP9W4uaEG3XXV3vsni35bknGWVK39U1moSvYCAb9fC1pNs",
  "key43": "4UJJ1Cf9GxLia8za7vTYrgLsevPxkGVaZDo7YfqXfZGuoRsDNNVQr3P312y3GbvWdYWohqNPFRRRXN3iVXPrQGf9",
  "key44": "4gk5EBdTSVHG4i83ogwd2J4azJMPNSieafSaUP3iwDCJv1sKKHifqovRbofG9ygnJMazSaa2vYsYLJpbGfEaA99P",
  "key45": "45a1KVWbDvo1RYjY1UjsHqMWvxQR9nHPfKcHpWASQavbhxu3cGR4CDUBLj1KSBURU2XPsjarYuDSFcHTKk8T7k8k",
  "key46": "2WxnWB2UFBTXiP6YUayNLxar3nySMKRQuDgrMZ2Rr1rBa6iAUm8V3JuYfPrfJMfdhQzCeHBMH52cxocrUwbpjRSj",
  "key47": "5L1U5rsnQ4HFa1kkSoExgsvjAHjeXGXEKrkfVZt48aT8K3n5w8Co4wCqmdE3t6WgQsXwdn6Tg3YyWx3eTDkBjybn"
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
