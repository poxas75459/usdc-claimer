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
    "2pYhTKkm65F4UP64p8ndM4z53kybn7PPJCoaevTxZ9KbV5VdXHsQDmKqtAmLExsYjsJaJZmJWe3L6KTVFJ2vDneD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P7FM1bUoFfkLpyFmtqkzxxhBcGFr9Au5pNbEwTbekUuL7uoZYRRh8sqhRuDKEgKFgqAPJtV5kWXqR4vMzMb9NSQ",
  "key1": "9YAhEn5dajUJ5mRtvXDaE2553kfQN2Ry37hbZQYvRWbUTwuZGvwXLpLhvj3ph8Rzi37VRDvwrKqqNnXy18VF5zM",
  "key2": "4Cw9n7DhD8WJvwJkLSQJmW84UzqD7K2SvbPa87eHQM3uXXSsrvjxM8QJ8zUr9dHbYJmnvFPzzSpWJm3FCgRYJc78",
  "key3": "2AJs9STb79fG2gWehCoE1r48HyzKiUb4PoLeY5yTGHN2mxqoapyYuBBXE7MmVC7DESztzmb4RGcRZYPgxidrgeZF",
  "key4": "35c2eSmxCNz4M9yGQjTAa6siQCd7xaJSYsJQyut9gpHE6ED4vHfJTJcoDH5PF5EPRuTeG7xGXgfRfSUkyfaDif97",
  "key5": "8ZXBoLRafntAoDzZx5egvezcgkF3qiLRTuUmT75Gu4fczFZJ6d9mnjocbnZQexNsnwxU7dhLP6YH61eaewPkUPk",
  "key6": "5RSrL7G4c3UCp1pEtPLMPQUar6H646J6PgVjGUqTuc1Bq5c8nJG2XKALN7BtXRvcdmhyFZYUaob1eaftUMWrM2Vv",
  "key7": "4ghUap1gRAcPeSTPDmwqFhFzYhq71HeiAfmh5Md9dGo2zowpEKoiGQKnvPCw8kzDF94Sun7B34ghV2dgaYBZk2dd",
  "key8": "5FRU8sP7br9t7JFNoWCrgC2kvCbfuNYMjwGG2DCh6oKXfJNwqGv3wH7GCDrzf3onYyBhYk6th8qCM2Rd7TxUTwXB",
  "key9": "y45PmGRiuHi4e84xGLwHFf5jnZ8YMGhY55yvu6nzhaCp3qNhBmD7ykWRr1Tosvp7qAxKWzYaM8d56bkC5vts8TM",
  "key10": "5RgkqN84i6ZyC7frhAPPTLgqNJw72BTMJtWHPzPWUy9WMN199mWWsrr9Fjm6msF5Cijek8BY5W3fkXuZEoouMyQY",
  "key11": "4tx7BJf7qFbbAJNTDGtauasGwnFdAAzRrYNsSsv3YsP29HxTt3VUVQSxRwwkAaYfGTMFUVbVGEtuACmbexepqcsC",
  "key12": "A6vhHqPCPHhLV8aK2s9J7mwW91Wwr78ead4W8TFWPWf47WwR47MGXUEfxAuxJeVvGQQQx2iVw2vNCnzpSQge3GE",
  "key13": "5zszwTFaVDSvEPW6CFDKHiyRq8r2SPnmtDXeaHZx6E97qCmJf4Tnm3o7j4e4dXnXqEi5mnyiXkJ5SXecFJzUrJSo",
  "key14": "5ek8bFgcPzuVdkqj7R2Tbpvu6RTZe3keEpNx5WnURNqVpftvkLeCZXPdmYgKvDEeMMbcdBvXEaUuJw4nMLHbXQyC",
  "key15": "3qxXZDtkkpny3zqjEYkkSpx2vgmvTpxYskhj2kG17mWwd2bCbTwUnetMiL7VVF6NBy5KhfTEZUGwn3D1TF3PxTD6",
  "key16": "BhuMoNK4YtYqyvHCBoqPxnHymGZx4jPaxCQwsDaKv4z1bMtU9j65yVekhzsGRM2AqvPD1i3qSbxC2H1MTHDfcr7",
  "key17": "4d6EKSb6heXsPdr7Z6CJTVaGTCxFV8b5vFZ3Ji5SBURJzF45p7GkHCsb1mu2iLckjzeqTvyMiQANdtqPeYE3z1wy",
  "key18": "3k4JQJh34ri14JKfsjM35s8bMk8rCrJrW4EF29aC3XCL34qysxLFLbzKQeWEoWrYx5XwdzQc3UkDvEUb5pEMtpLW",
  "key19": "2RmVgghWuQmQ8P8wtqkxfqv5ySXCfiTKnnqoPdfqw17SsTpZ1cVkYJc7s5K2AQt8uo59Eb6FF4eYNU7vmUKXN4kb",
  "key20": "BxaYxWmJ8ePwmiuZwdooJBozm1c6onx7Twg1z5gnkgGyTXhCWzCjEU5Cg8hMbfnbKBRETyGu62VzwjQtEQMNsXT",
  "key21": "2MJQ2FyVELcosY4W9zVF5LyGkpTYayn8q9QzV5gy2XdZ9xv7KbNn36HmtmA237TLU6rBG2LQbAud3v1cEfT9UyXY",
  "key22": "57DZ4cQqiabBzFo9EbNBRJZgnfpTM7FEPVemH6YDN3QDwPbHTmiqMiTmtGrXhVa5UStGBoeTxRdT1X2Ki8uReym4",
  "key23": "EoRD5e8jYGHMx6wb37s8m8GtCifziJouxqjkkHzTayZ671cCvkFeJLijbmi87VDBCYp9U6yu4wktvS26QW1Xjci",
  "key24": "58maGQ4Z4cH3iYYqSRH9WixRHgzWGBpcNxZcuYoNFvNGwLHXmh1azvAoaES94qwVW6yGZnmqJmLgE1CAJqvZVebK",
  "key25": "JEseZE1Cn3i28gZcyMzspvRu1GHEbnZJY1WNHBrNTkjwVKu5XhuXvzDoTWSYw9oYwuzoTnaHxRTJcKoex2PxQdu",
  "key26": "4Fu7KrNeAUAZh3qGCj21emKEM1gZd52Xby1MWirNe51aB1hAnBB79kwAQhmowRqWTAR8c4oAE73jmMjeDSicmpB9",
  "key27": "4udrKPpqx5hiVVoAsDfnwZps57g7HpMd6vLZkBt2j439dSaodQ3x59Kb1WEazenARS4GAmNpFxedDwHCzigMrfQ6",
  "key28": "4Uwcdnmoyup9vTHaiz1mpbeU5McjQD2cJZGTYYWcZKZq4eM1C9GZeZbB14MHHceuaFSFv42mVp4oC5fHBji4PrNc",
  "key29": "3QQL3b4y5mjMeL8VRxGGrJefr4VJxbZXEu5RGLoZiAaEyjDV2a6rgjmJeJoBvjZWte4hmAKWv9RkHqipuAwgrTZ1",
  "key30": "qHpPdpqTAjbbJL6nZuXLgckmbZb3n8uEvcwAQwiADqpYzqztQFzGuUgjbbri9LfGRhMLooe6QhFS9o5xEmCU26Q",
  "key31": "2sPjEpiMt6eMjgvEw9bWo2d1XU9oAiXyg4C7mC1UzLNJa7Ez2FfuH8mC7yNqjQE6KgfZFWovWaSvzr2XgCrtKmtj",
  "key32": "4HhujDGZ8rCzqqXFhhJReLQQPLtraFu3wD5urbTTz6Un7WqyEdU2Xtm51ohfiDqMLfHNJg4ZVn1mYt43vrTZzcvG",
  "key33": "5KMUtonAR9r25SL7ZsnrTXoQxtPqyAcVVUkUtZwjwsJfmboD5YSLTJv6ZTinQ2jpnN4AcsxRzDiiPKeKdQepip7U",
  "key34": "JLX1oFP38m8Pco6SSX7WyJz4YfHMUW4Y9fa9sYBEjE8Lc2bsh1jnLPDyzm4q3EWCDFzF3n2U1DgXjJzJLftbDM1",
  "key35": "4dKG9M6HyzmQDTUA6xf6gByqdbfenxcTiAJy3bq3WzFpH4yUb6BDABFXo9mtpqQtnG1B4dsDysTxcK6NbMctQWQ5",
  "key36": "KYbdF1StPwGcBFCggSsM7nsJ9DJskpLpP3FEfM2pRKUukvgCNJjp1a6mfAnxJioq6mQUz2KdjbEmytop86h9evd",
  "key37": "3VV2iBscAhkQy3EwfZSfXLeL85bbFSF3x2RjbDkxs5QefkoDyxzqMe5448ojRK5gYjxwtvnGa4PMfWfbRBUZ1zoY",
  "key38": "1hsFD92cK6DzAZ8YiNxPMnXwKiGm97r43G6YixVfFXscgoac4ukJJ4dPgGMK48qWbtPBHT8fskdW5xEFMsrYMeU",
  "key39": "3B8WKoBmP4d5FA6D3uTEFxDatWJA4fmnVtjA6sYd1KE5rttbfPvYiPoTdQPg3s12gEBcXxe9s2Gwd2tfw9Dna1pA",
  "key40": "5VsvfT95xTpEHAVYFd6DRMLM9jfhR3NCumH2SvwNQN87773sPeLrMUEsVJEWNgHMpsL1DKhquL9UT4SmbdwuJFE2",
  "key41": "2cKWgHXusmJkDd7PaSkpHrhUqV8wyMcaiqQdjch9nH43xgM5sPRzo4T7ffpVGdiifjUJn9Y7kwgvjYBjtpW4TE3p",
  "key42": "5ATgAL4TFLpCUaEvnMryhQUWMjU4v8Tm6M3oEiR9929kdC2kcQVEqUAEE2faS3FVFxXANUx532C9csuwqKuQjad6"
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
