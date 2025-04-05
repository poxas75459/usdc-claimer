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
    "TnRteMnBt2Yp4BLrVFqtFVwsKaTGd113Yg6Z2onvHk9DYWWHxVz9hd9tbuqjv4SJRohrbWjAA62AePyjFs191mA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32Pjvz4BZDzMxjjRfYp1XiRT7Mzrr46BXAksACdhcpMY1wBSDsnzQLKLNxK776t7668xLysyw28bH57bJKR4hAGn",
  "key1": "45qyu5DAqpuu5mxE8xhh3EDj4unoXz4Qit9sYB1KT8rhRDkm4ZDYk3SNkRDids9yaKwBSXN11SVvSyMDahJCiHsp",
  "key2": "5p76j5q5vrmLzGQbcibnQYjpnUZD1GAZd4T4yfMYiiaeJ89doYEtov43SpCUkn89SydWkXDZuuUVz7dMgRWE5Kvr",
  "key3": "5ELCfKsXkRhKtErQfAUJH9jLWj2Xgvjdj8sGboBM7D59LdiK3UKEuwFruCNF9jz99qFFbXAeMAvHJVWxFTEfWEjN",
  "key4": "PPUNrQUwsVve1kQnZRxeT8mVnkCMKQ15ryJPh4ova9SQJjfMdWHpkZGJYphmgHTYr4syqFU38nj1xsxmpEPNWbS",
  "key5": "3iq8rZabqgGCtwc1s9g3pYLy177T2kJmJ4cRN7hQVMRUdenq4ARcdeV2HtpWDa6Cz69EShv1nT9o4gLkKraaPyiV",
  "key6": "3q7ucczBiJXtMB4TW9pi9mNyXpZkvk3xZK9sZNpEDXwLmfaT1HENk9iKeDE5vx1UxCjd9jiNa4QmxRXMrRts76rM",
  "key7": "2zynVQJbAZqGkPjeq6zdXMkWszthV7qqTLDgxSpXwuMRYBZ7d9Nf87JEHaVnVPvvdwgSn5dUrtX3vg9LF1oEXseQ",
  "key8": "4KMJaT1hvuAMtJGLUcEWpiKxuFsm8AyUMS6ddLhWEr3XPZ5CDmhF4XRNnmYTamxqkb3LFZzc4bKbKikjXziVjCeB",
  "key9": "37z8RKy3tQRbX5LRcuKD3jchMjhJsGbupAuscVhoQZERRKJRoVWHnXKLe2G28eg7V7ZyS8NmKaAGvA4yBiZvCCuQ",
  "key10": "KgG29ezNHYbxmhhMQSrWbTeXzgxjyVxB4Yo9uXh9yyUYRedwS8u9soExMWzivSDZfvgzwbRTijbrPgPVnoSzDho",
  "key11": "2Y8U1vFF6KAz5H8FjijnMUMS4yjuhXttJac9e5oSMifXdNLNLEzH3BKnH9gYBX673kFH4ZQAozV4pNYFdpAN9oj2",
  "key12": "4u9acP5wfwzcc9o9Kxba6PMUQo2DNLVEfN9QMxgicBnVY5kHRU4DS4A5gQmDervRUHEsYAQwPq23MzoMVQGfzMXv",
  "key13": "5DLg416CFUJx7P28ajU8RbSoiCcVWcuqW1VGakMK84bpkuE4qHpEEbdMRvfz3eENeApWiVCtYvWeajVqsm3BgnrQ",
  "key14": "5xKfb1xpeoXPQ3wbU7PHi11rDZtnzCdfiLypfXEpM3XXT1gG7yWb3cAj1bFXMLQ4HHGD5E8nX9hzq1KwGBT6wP2L",
  "key15": "48tbT5s9orj3h9fNNG4P1WV8qZEq36aZLQbFzuFxfeGk31y5CiJnzhUhGGF6GhBT2W37gSTBNtzwoavznCpNEbv3",
  "key16": "21r3jTQmnj61YFzbQSQApwG96p4bzeyHLBcspEUKHVhWnFzSzQQsobiD1dYJg34nmuWcNrPQknRoSjkQjVUfTtGN",
  "key17": "jNcTj2C8JE2Vf6VBWBNnwsJGuN1LQB5setFJPqP5nMaAArARVebYd1XEs6rx8sqsmXcGuCR8sgDDcURkdyWZ8av",
  "key18": "3VfvPKpGEJanLeK72mtYNJSLSFqKxEHAwooeEqXd7WUtXFALMneCEWCSJ6f7yRksJrxwfaCzUMgbMB1P8CUF9AK4",
  "key19": "28b3kL9nRdjoBhHpaTjuUojBTsbM38uZ4VKCHGWgb3bsRTiyjqPnttZQ9sXDmUiN96cRwQU5zRMAV26n2xUzvVPn",
  "key20": "2Uyo3sNqVK4f5LTSL8NJnyRqf5xaQbnGGtdKmh4QNexujxG9v4Qhivgyoxpi7jW13vCUBhdvyLN37xqfDkXqx4xp",
  "key21": "2Ad32fr28P3vvRam6o7HJuABquwyyXT34A4PhPsw7YbiPm6jDtFXUnk1JNf2v3QrQkpZJS8cWtELYWj3MQQ5NzNy",
  "key22": "4VqcSnpFXk4EjzvUvLj1nVBrX2266cC5NAG6oJVhfoqpTB2FJvsB2sUWp4Q1t6EMzX25aMwzKjushms2xdrL8ho8",
  "key23": "28Zx11oZKd4SKR8dGsF97awVRQVsQakxBzCvCYk3qUYn95Z3uQLy7qnHKxph35sfpgKixiMQEoU9Bw84tWU9B9A9",
  "key24": "4a5ZXwmSmeWgMs6a616aXeVTXRa2xcynpLDJUEZ8Mjcu7iL3FXtQN81EaFmC1q2h1mZg34XBCmg6TgViF6uDi4cW",
  "key25": "WHrCpsLTuqcr8Gm1Y5mouDhK3dgB6nPbfm24TTF7Dsa3so6c3cwYSeDWiU3hgjcVuRknxoXfpCKfsNpMLNLCoKa",
  "key26": "4DDSEC2qucnJWNqYiHZA27cigWPzxkRcHgE7d831MxYVp3zhNVuXTotQU6AawX3opfFgMBeRUajtQmQBjoogWQ7e",
  "key27": "2vAmhUZB5QXT9NgAMA9P5HezEx2BZXcr1kun3xzDD977wM6tdhJEPCju7zWsJP2x8n1YL3jLSYauiAxjdwAE6UMU",
  "key28": "wKGwsEr7nKEgXGqPs8Vh1GDNdVVoFWC91Qvyd13ZzVyyxdGoRHjYJET4P7Tj4hCQv9JbNRqrsSusp1yQk75DX41",
  "key29": "2HiUtDmfCymnKmrfHruqzkg1rJ6Qja6gsaRctzdMzGsPGeSUYE9SH1868b68T23NynUCDV4biWEkn2TS4wXrXKj3",
  "key30": "5dipDSNzRRzHHdWHeK6UUDMTtBekpgJ1dQPierAUNfr8fGxpdaAXo4fRVBQcKSo2rpMP6f8kyAVuS2qwxjkwksLK",
  "key31": "2qogyZc5xZQryfczzYMq7eix8hLrRNqMC5uCsqKUsuYzVMqyvBGJmEPUHyE22rQsxPXPYFHMfs8SqDgWe8kU8ajd",
  "key32": "d66bmqUudeK51S8rvTWKQoBEa11xezYcrB4vH4GGdWFBSqMFSbvLhJ5LZswh6WjhhQXrvjDGxpU53fHZcnpAUkj",
  "key33": "25RpS5EYpW4PdiEaUioGQ8yk431oiJKxvpEggxUe7tdVEtFtz2qFJPPUF5kCUrbGGZ5iS8gttssPAe8PcwoNzMjf",
  "key34": "4Q7NH5Uc8qZmX2hZmjf5UZvo2rCXZGoz4WLcHbV83rFzKPYwrWpu9tWMRjX1c8zwEZeYdpGcW9oX1v6a3y6EnKfJ",
  "key35": "5UkkKqVWFTzTkcsPxU84U2ax3KjeAF8RKBLEu7S7yA5rUiRUaZkEBkxUCoGGZRqBERvog5pUustrF2xopNzsfjgH",
  "key36": "33MGYh8XnSWrvKPRA14pxscUNERhFqiLwrCgjXmH4fG6KiNUNZ4NQHhngfG9eGgNZnMbzLgNmmUiqrSmFPsh1aqf",
  "key37": "5dEwzCtJ78a1Ybr8oMyBbeG7ibUZAkPj9yKvHa3ST7Po12aQQ8VGvLrArtGF7aPGEM8EBTrxJK7EjjJ6uLhRu3ru",
  "key38": "3GVXVQ5Au3jNn9EzKLz5N1Xq8jUeV6ivF9EvXydQ1gSBC2nEtSKvK6wZCJus7jBLT1zC38bZtzdB3uxWGYLjJryp",
  "key39": "5PGhYcXmNVkjFkMV7PtRHYDhdNis6KP2WYQ6k6APXcbSQLSC9SDCsbajcUj9dNLhY7LZW2Y2z2XZP5MFqryWKcbc",
  "key40": "2GFUpEZeJG9C5awkbJZ9ewAySvbaJBvWMuqFKsmyzCoLmphvwgMjurSm9KaWuu6MfrvqZxupj8mPPHPhkmQhWZwT",
  "key41": "5KM4yHz3y6C8FgUdQbyx9m3kzCaD4RpYxymFyQwF7EDMM57PR4YpFAbZR2FQPLYWqZ77BJDxhTexiPyDPBRKpZfh",
  "key42": "ypUEdvsxUK1cXcbprXzBZZjsB2osBXteTnLX5J2Y9gZYbES46HDdboHHYm8H6RURP8vEjbyYbNAcKMgcyfub5wa",
  "key43": "3UkHam9ak9qoemQ7ogaawnpkNuxFuYaj5DCsMnNivHfGHp5aqYja3KeDCDnAGMSYKRAiyYPXS8dVMNW96LbBvqLG",
  "key44": "3P1qcMFhzDDSaHcANG5PcrcPj6C8jMxUb9PJ5i9Ls5YsygNw9MYMsTsVo4mCxXh5MHiFB252xGbQC15FMhWd1PFA",
  "key45": "4rPT3XWWuEZs1WtJgt14A9Bj1nBbAHZBri7womgEbWa1uhpGhrgoXMSZBv4N1xAhXjmWru21J2geNHKZwC1uDkjB"
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
