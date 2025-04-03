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
    "2sZjV4cTmk4XqViycA6F2tYS2do5Y65pZXPxV2LzBewo3ghfqWJiaJSQ5B8DsRS1W2dHVXLrxmAiY3inWYK5Qm9T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sGnqW6p6NDwnfoec5rcPP6ucePsXTNhhiF3YSzd62HUkaueJuudyZHmJKx5A7dE4SsyY9m7iLiABQQ8LV4H98AE",
  "key1": "2U16wW37SAoTF9CmSb7Hpt84FkJTHX6yTK8Y5jvKxkQqinB44y18XBGcWvrMsRF9EpeLVeDomKJzkJeWoPqL9tEK",
  "key2": "F915Q2TRRCse7xhs1p1w6TJkhHFN9FJmWcGTGv8onErdKkiyn2jmowUe8CPjoTXAd7AQXYysVJX2J8PbmCiHVPa",
  "key3": "4RKQ9qwW3BxLgKWyQfvgGk732NbEVaWQRmYJxR7A4jCymcJ9SrXXjNTyk49XZ5hXZ4NhYf2Y6fZWCBixmoG6b2T6",
  "key4": "ZQH7NS5qjdP2h3A5AbYwchcuAma84MpxNbpDtf7QiWtKx9g8tbHqLbYrtBrwiBoPjdDQMQsK3mPbSvvxTFoMwxz",
  "key5": "2o8SDkJTcnMvpJU3TRj9X6nhUpBQvfeRaNKrTFHidPbo3VwdraqPuEXDb3ZYCM6v8mjoZBcjvezpVJPobbfgkr3m",
  "key6": "4xNfFiYYjMbdWbMu35xNamsPnKuFv71K5DyED5MiZT35GVqKYWVRc513bV4xHn6cd8zJJpgKv5WC9ccMVA49vAFV",
  "key7": "wX8hbZnXf3xmeY8agq6uq3KSPSCbsKYNSPHyTHx9AevxeQUK9HjkBUnRQ5DnnAhD7dkq2eUq3fkKKh8EE5aVHEq",
  "key8": "t1Crpo8KQVwSRpphNWWbi3epP1jR74sQr8Y7tCzhkBvMsp3y7wAT8Kn5jED3SmxMDDeNvGksHb1FavoL57t5zXe",
  "key9": "64Bzu5XgakX44h6EetMZ6YH6TE4vkSDnLscXvTdqfCsq71mh45xkNDDRZE3kpLADDSVfm7K2QU7mdmGmb2yxR6g4",
  "key10": "5fuNzMUR7eyFTzvNpnfU2cLGHQQ6Em3GsoSDabdPxiDZ46ZkyiuLz3sYuffec2ZHbxto68eFYZcA2XvjsFTLMnBL",
  "key11": "5YxVL8TuYLREtfjnSwpJaLLCGH9y59nTYEZNY4ZaNdjzQWvV3Q2M3Q9jiggvwJnXhSgZ7DuWdaFVWRvA2TkNW4PT",
  "key12": "3uifGgdoKsh3RwyrRA5n9oFGbLCz3LKJmwrtFcPGttHa3bmyncZ9bzmBdSpjNYXwGAJ7R65PyzZCVRS8vNZsGXqc",
  "key13": "5fN9jBi2my2soPKwY8CUXDSR8HfrW4AxEAuCujQ4byQxB8Thdf2oucJar2fGvDzpK8Hne9e7BiZb2uwz5XvkYqyf",
  "key14": "2QRUbb4SRDski7481P1b4Jk7ne7vVbABF9BT42mnEg86UZfdcBbRcvPDmVukUPERwoQto6knajQgkw4c2stUQSHn",
  "key15": "4pYDDePspbgfs626pKJjo4NGZqtdesWXSpjJCRnaATQAXC5XGuvK59J6Qb73Nh2azEv3UQ8pXgfcuFnycwq2iuy5",
  "key16": "3NiNx7zzvb2MFcQc8XhPtkuFJ7jEWkCFhrEK1cp4XNkCh5UqyizD52BZMmvCM3VvZkawpycVGDCaawcRWAm686mN",
  "key17": "Y7YS1Bom7hJ2SbJJ9Dj3iFHBnHyinu2ZAJ3DBJospqVNJZAhKB7pVwC72GoYyiba4cjnwNyYigJGmLdaNz3pCzv",
  "key18": "54NSjuM7rrUgk9LoVZQ3rMYgJSs86LnEkr2NKJjTU1AeU4ioV9k2y1cbyDWyq5D3UuzvS5rd5NUidmrLWLitSKDd",
  "key19": "TXGgHCVHsYF2nogMjwJ8LqaTrBsXHP44GL24UeXWXphYhiaEK5wtPWZU3gQrLyspHMfvsN5hrTtjd4V3386pBRG",
  "key20": "FTvrSp62jk114Rukc5PNs3gfEEm6ehjbeWUnop9kuobmdKUmYipFFZxdVBRvaofvQRNyD3a3risqnEcanpfwVwW",
  "key21": "2Se87ry4yQxymK9CUu6zqYmkVYAcoug1qWtguch4B8JGrPyKnRFWP1NQAyYvF7vptxbQhp3oN2tLoSHKmYT8zGAL",
  "key22": "55SUmasVkbMGcbmB4akUAn4GqKsZc6QnbvpL73j2zwHrG7FWK8LaqNtEXDLzs19NFpx5fqbwuW29QkXQDe7984Vu",
  "key23": "4Rk78s7M9ns38RrWJvr5FEMA1B34nennWrR3FPLLN2u58PMUFsmRYqQJfydbQTrXAEeTRyDpMrtK3FgKt2hC9AcD",
  "key24": "3ayrmnUczigy9tGSBVi26LdDq74rtnfUxG9reM3GepHj4215DES4LyrCQNbKMsM6VsvWDSDW8XEfXAeBR7AoPsN4",
  "key25": "hokTCqnW8wgd4obmBYS5vuEfVTiEdVXNh3BT3cn99Ksw6JWPHYgPjDsUuLsUSvjvffwViU2VLKZ9aoaUs3MKhoZ",
  "key26": "5MxzAQAwmTJxk73DT5MoEumC9tr83PYA4ZsSA7uCMbwhx7WjSVi7wdyvwREBTAAY8ouHQmacXxvLQXt3So7HH9uJ",
  "key27": "59SZHWEzwcP1tQ7VzSZtjHhJBzqXS4XYHi6Hb6B9ZbYP8uWiUpMQHQzTcSnFJ2HnnSrQnjRNPCVE46vB1fXFrCgj",
  "key28": "5pDP68jRqqDWykqffiy9hQcZ1yp62dvawFbFwQNGD9er3xwkpLM5N5kcSXboQD6WC7qCgzR3tFJMwtzhjrz5DZmD",
  "key29": "6s23gu94kiqM1VtjRBiHJMq1pVZujkb2Wvc7NNhZW6XNh43Goc3LTyDVesQqj9ZakSqfGrgdmceBQing9wC5j2R",
  "key30": "3YBBPB2L4tHZc98o6zmTQeN9vLhY8VefgPLUA7W7LgGKXXss3hPeavTzGZorwAq1s8vfpGWmfnPJzdBVACC96CRL",
  "key31": "3djbXonYREt1eKRKkNLDSmDDWTja6QUASeVSTUVgnp1R3Xg9Qa3n9ddzNLZXeoLog8wDaSUSveNG9arBpjqrUfiR",
  "key32": "Rk4QycNxvjtJKjiRvUpabbpJj4h8ZZPgUjXsM3n398TojTfGJSyJgNq7JCNXMnXjE1RxjFojm1UwfyuRQYFfaiJ",
  "key33": "41zq3k3XoxqkSpiqkUhx5Ny3nCpaGLa2XSyBTVHz9sUWhwUvpq5X78m9VJvq7NW3ijPtsKFCvVkTf2KUyUpnnEpn",
  "key34": "uqqDqFZ5iD4biBktv48VDMyUeE9UEYckd6Kf9Vtg7ekE414gSMEVdvrhzA9XduVPmyZGxcHLCzCEQkHPpN4QKC5",
  "key35": "1mCaNZVb24eieuTZTmCgXEBrP2msai5JUezX9LT1HZxSnzbqkjnJViFoMcZy4NnU4vd3LPcj2sQesKUnCkiwBPX",
  "key36": "ygg8TFQyzwzfqe2UAncF8ZTmxSrCnt8if6SjfqvYyPNMgz6tZ6fz2S5LANWBgwX7MRhQjxU93M18WPLXpRMCunn",
  "key37": "2GbUaYctU5qbvZkkzoYkKyxoVzfAvr8LxyK3xbqXqGqoY5F7NmAySTGFGf4JoUAj6NHY1hSuFPcvwEitKVstvA6A",
  "key38": "2qsNU9NRHpf2qaHxYYxfeycQczLzRoqocn6EzStQjQjUJf9sh8va9zW3KGs6ibuQQt1aemxkCiFzuAX4xGvBjwPs",
  "key39": "4LqeVT9v2CFyhnp3WNm8SYbVKwkDZun8jnhRnTow394Nw4hfiNWVYJZCvNb1wNhzggWKa5pzzeuxNxLqd5bUghhi",
  "key40": "28pxdt2ramB2Q3x6nCEueYr9L8PTbVVLCNnr77r13Zaq1LxSVe4wefbank9j5t9MZeCbV4kdWVjy69JxhCkL5BV1",
  "key41": "c2RTELt18XdaJ1NhmHtufF8w6wjLbjhkdfSXwzXjoDJsvwXtnvr7t7L9xarLynYUmSAmAZ16RjexJmCzgitYJVp",
  "key42": "251GvPVcTg2ZV3DRXrtdYPK5pSjTx19A5jC7nkSLuvqGs3Un1KuL6ux6ehpZz1QbGtiVeb8UAfuFjTTHrtJ8NKvP"
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
