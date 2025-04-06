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
    "3eqjY1EDToXGduMtXiqTZY6Dos8EiT2Yw42ZsM6CEuidtZZ45Snyurg5d37WruExiaRsHi7WqHK3AA8zBi7H6dRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2V54hNNpLWtRi7fJkRuhiyb3x8wa6fiF1h8yaBmShPSe8DRDyuzsTPxZLngTYNbaNeAdrGUmybzRd7XKTAYoyPtY",
  "key1": "2R4564aLFkaVkoNPmaiXFxPK5cfjbUVTiAVu9ZoUGwbq68BA3nV32p4qSbR2wPktXtYzpEXYkrm9o6hThAy3zPGe",
  "key2": "4SoxZxW4VaGcZFDuvjZndaX9UKhBraxdAqwTgkpgrYhrbYNUxXY56RJxywSbZpiDSW5m7dVjQYu38kzBurVQ63jr",
  "key3": "4vbmKqsY56dpWFrBMSyKQpguNGdLDzmS2WJjtunr7DZYhDFTznSqi2GU2rF21dLQAGBqiEApeqi5YUt71ccriKAE",
  "key4": "2MVDRweRHPSMKmnrUevQ2BTun4zHNFDoEWaqzZJkHK9pctgvhMBQaJcz2zJDRRcSH9JyJDhaM6yCabnvCzM5Jdgr",
  "key5": "5eAQpM9SbaytxDBcwWQQRSZSBPii5vzpavNk6TmxCETGefahx9modYETufLTL59sEmG773xHpffkXU5GDMAbr2J8",
  "key6": "2gXNh88b9tFf19uAczmdKe54uCfLLThqsSDdHPM3kPFj44qahX69FvzDfaBc5AqQXMFYH62UDi5Vqc4h2vSio4K9",
  "key7": "27i6Spapkw2VN8sWuxDEiDU3oH7AciR1L3cSvb3tgprzypaCVu12S3oEwmzhaop1NQeqJRYxGMk79zpyJKdFUnBH",
  "key8": "2tc2jLLf3i6EsiPUbtQZtwETVdK7CgJYgxbtAipzrK9sRuXeg5ANg9EsevQpGk77zYZCJbAJS1hLu8hybTajaiLA",
  "key9": "264oKRKAMAdRLSocsacLXeyaaamw5xzQmHUXHvHmCTy6sskKNqkzA3tJj9sFYHCJVy7qHYGshV8bd1VgZ4ES8SR6",
  "key10": "4JsvWCsxmvb56m4zutGvi86nhq2eHNSH82hi2CNMcXNLvhBxDr2EfU8qLr8bYcBM7ukVTJqS5FYGUhbUQhntp6yt",
  "key11": "2Vr2FqNdyCUt4u3QFZYwf2HhUJsNmqbpaoGbjjb72SRd6uB4jF3Kb4NLdHXav6f35rBF8Bj8EBTVeTxmgmfQhazs",
  "key12": "knyAfDpFJU64wRa9YbWECqb3A2eiV1VEwCaWCG3GD5W5XeFqk3eb1UnzFhQQMNBgBZWvxEESp7bsM6oRDxuXX56",
  "key13": "2AnBKSThui3qVY4KbRsPwf5dxr3tnvsXbW5iabsMRWhhuQRVbyuN3jt8gePDgSkZLH1ndJzaB7FhUHnHENCQzLfB",
  "key14": "3hj6uEPsWYREoVMoGEEomfKNbFwitUbJ51QuEGqL4jwGvko6HiaQyVtBiP2S7Xpr9z2agCYv5aXjjfo3UqDwfbeD",
  "key15": "2gJQwekG5onqVnpwU4LeiB4EpJjcMyV9Pf2ntLZx8z4eSGcRvimQ3swRddoN4g221guPmjiAQqBeBEX14takbAsg",
  "key16": "5dPJLc8d9DTKVh4xxpscMum49oH1WnoJ3gqfniUfJhcDtMcRjQ261fJCQdqWzz8kUXZbvUTR9hQm8Lmq6awdrYRh",
  "key17": "3jHxRzDyXC59UBKeMWTRxBcnfAGiAtxLG9HB5Fgw29ATrcok247WjTe3CppFy7zHpxia3nnzKqqDPWyLnjES84Lk",
  "key18": "3ayoKSzaZM8TApR8uACAxUT1nQg8m1oFkzUbN8mcsnUh8TCASXMAdgwfZcseXSWZkYLRM1P91kDix9aGry7jLauD",
  "key19": "4SMDJGAkGPzBrpz5wKZgd3Sbkbdt3WNmNBJDSMzt5PeB5z64JRuHAmKMZSsP84crAQvKDU6JVNQh5h2XHTFSJBuB",
  "key20": "5BsP3tVxgT7stqPtUhVCuQKUE9BCEqU4HoqnoNr81dPfAfyd2h4SKGMFRkddhqwt72tnr4HjtvdTbTN6ZiDiMXgW",
  "key21": "2oC1EypfYFMMzBYiCq7mrKitBNAQB74Dp6ibnWd5HaoVmMf6FBKLvLQ6m4D8r9wPgZucfbtkbdAHcCbgpDNePUnj",
  "key22": "J5oeGmndUb923uVA214aBw1VTV9hcyAEiigWP6XUqSJpBBTvyLTxMbM9xB5MAW3GRh61oCi6MAfT5Jtpi6Mm9WF",
  "key23": "ttSJHzijHyeEcvCPazVdLFRvjcEKr7amUw3wfauky6Bhwf9up4gCPZyYiBsMnY79tGqZngimfASk5EDz4dMrRQA",
  "key24": "3oxM8hFbfX9rsy5zvHP1ed11N3DYL8ij1rD917btxFTRzX7n7GvwN7UkbBpHCmiY5Nkc5KLqDSqHXDGcYzLppAqT",
  "key25": "2iJzXJ58vU6CUiH1LaPGVMoiWf5vWGHtwHyQVZJvhhBN8Hdr47PMPeJpTMuRxiYjodsPMqfZKcyefHFpyfGRB8ru",
  "key26": "4DD3NsZJxhrSvUgv91aZoc67UNQUR7LEZamaByXc1jyD8u4D1kYTUvHKsJEraFBqYx8SBiKXuGXnDGYJZcRw5q8n",
  "key27": "4Su1qsLdiM5zVkD8x7xA3kvqx1geD4scFnKoWGRzCgfagsGjMFS9Eh5WgXysYpj3H9uYRR2ZVVc1HDQzeWpLD2kY",
  "key28": "5Tit8LtVGVAdAue7MqVGGuUqLmHopFm6CzNkjUVU56mrFwJavrEMXhKa9WT7xgdofHJuEt5nNiVZBtkzJidgoprG",
  "key29": "4BKgDE4FTce7MJmCJ3JjoJtNKXrvA4W17pJthFN4yQgtv75a3FGd2dCurrokHK8GadWdYBgJtC9SvSGtmQU8pb2q",
  "key30": "5smxSruN7ej95FhA1ERgCe92AhHrSvhD49wWcQ8woUDk6A11iyuk8VFuumS3PBKX66XEcFaLnixQUj9cNyLMnTmT",
  "key31": "5goTcWQouUKKLYzBeL1z8RTFCbnGMEsWtoHQe2Pn1mdjHmk7y1xa5NEfBAVRe5yZPMdiqxpYViH9hy6RiDGHXCKU",
  "key32": "2UVLhARE3SNkGH9AYuktEBuUGdm27RaXisuREA4tqKimAhBA2ReseRfMtpw6oCxmbGbTAHABCuhq1272EeVJ1pH9",
  "key33": "4Z2PvcSP5dCZyXzeCw1qDJrALNua8AErLipWq9x8w6EeXMZ9rGUcMwfiNoErZWwgSYMW8yBenQivXHpCzLUjTQrH",
  "key34": "3T88T4s84fnFaXX6GaufHX7WL36gqHXPFnw9Neart8gNfpbkYz1Zxq1GWc29849E3ghVsNRTi1ofv3M1MA3XDX4E",
  "key35": "3CEdbGVXeWxxdzvwVni2rJU22cnAEN9nL6H1C1mU4DqaPA7iU5bnabBULratQdTnZJyx84w6c3UUdJa3NgZTY4vr",
  "key36": "SXyeGxG4jE2ENJmTi3dR5nKknAU3qzYCnCZcY4uucpgh1F9xewDNDMzox7KQsn85TU1jwwnUgEmAK49DzstcRBV",
  "key37": "3TFyXp7iJnfWgubfnLThYzcQ5PytguT4AXmLdoktTBuSM3nNMDnUh3qG2T2XiPxbHm6Wfenf63WTutKnMVfRyCg1",
  "key38": "KkJ3FGW1pEvUuWHAjLuVTBtDfNDr5XKCJ4Yo4xkrHjf6P2nTvR28C2R9sHcNNzc9zQy1ndDauxGq2t1X11HdQWL",
  "key39": "44NbFtkK9DyKBV9oQCaSUa59PKRXgbv8kwCGdBj4KfqCiqGThDTC2hh1SZchWrwRBAL67rCxsx3HjmaiTnALreuK",
  "key40": "5yHDuucoCb1JMTyShPa7PxJEdkj4pbLMVFke2S1spmAwPffCWPKtCuAXtvF3FAZr7ZwRE38MM1nSCBE44FvnsSiB",
  "key41": "4P8rhhWW8rmGD9ETmquyqZocjrdzSMtsSQ5xMf4Z4ffZ13eXpKZPttyjud39766JTrBLchZA1LL9HKg79Z4Smqcy",
  "key42": "4HGBJ73sudA6DB89NKdgSzWzosnMka9Aa3veGzv7WWMiPqGZwby7TpsDJsRtM6hpNhy3iLpbLczqorZ2W98PVJvw",
  "key43": "46iDqhiTDZNDJ7JvmM4Ldpv2ieTSUenwRzZyDtzZrRjBxVc1H4JWBmK6FzXpVVMfMUosskKcUDkGNFp4XBHxLCtH",
  "key44": "AAYQzpdMpWbw33e6eM5tFtUA35yL9ZNxnMnEYDMg5U1b1wbfXFAurhJLrh8Qxhh9G6RJqrb3WZcuwgzUGZzDabQ",
  "key45": "3Ht7vr7zifT4noLfErQRaL6KVQcojTRgw6XGuEBbDXFdkdDBXuTfQuxKmvQWCBdkVQbTi1eY2E8xQbpi9G5Zw1P8"
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
