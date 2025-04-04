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
    "3S1susu5ZEKPXzdtLw91DDQL1PkUxHNbKxvuSSGTHxfrcszm4dy5DecU3vuoEmRasMzbigy5tUccU13Groc91NUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZpyTZrxakxiBvtLwEQK1iZY4E9KXkLqLZEPuAMrMjyuYzLSwPvsvGMMHsC2xk6emMvfurgBgWZzwDMsmLAnUjUY",
  "key1": "k5FSQtrehRZMCcm7ve4pWnRgjWM9ddjhugwMH4GXnJc45h685KqQ31JVJYSdE5K2FeRBMpMYgHkE5sTkmho98RQ",
  "key2": "PAMSN1T9QtTqQtp7yHtTnzdhtJ3MRg7WUWX7oNPwZCBeKxh6Nw1k4Pf3rAo2j9xcu6HDuogW6o2stscMPAnN1EB",
  "key3": "4Qon59JXRGtjoxokVW7EgN1fMZfGJzhc9Webko9V6wNoNyiZfHknFxxtsfnoAxyMLWRjCr659E9ruJN3gpAUCHTM",
  "key4": "2B9mn9DkETJwbhr7zPUWUFWn1Nay1CAbxUYwVXVFLEfrXF2c4UypSCvC9t76SBpE1fiBWh6UwB1iYaDr3MsbJUWj",
  "key5": "EXoF2FXxNmw5X77y8pcg7iPUZjnZrA3sCr8pXaobiMFQvMjJiZ2mC7x3JZyLwiDbBLGHeYs7u3fer6UE2vDcBec",
  "key6": "5U5hn9GHwMvs2uLYoCSn6c4qVscGdRgWkWNMW5yW4PYzcHQhxnHRJ6FNYuGrJHYYfmbwrixVMu4Z6Jo9fkoYYXL",
  "key7": "2K1XxZ9XL4sTyxGXfzJuzq1K73SBNQtzdmCGj5GEddXc6sKgEjJzco5757MMEABtDbAYacCrNd1UVadE5vZnDvQj",
  "key8": "3RKkRsUAXC9vKkpGsDEjqn3t8ikLREvAbHYaGsW9pRfP7mfbFYTtLwNk9u5TxF2S3dnXhLReSxdTfEfasCYi5XvS",
  "key9": "i6zH88qqs1LifR2kYaur4prn5gKS4DjD74UDktiwTFVUwGpLfDveXRjBPkzHAoPMisJgCHoWtAr13cGDagFqaSC",
  "key10": "5fSgV2TT3wXLHAypaqhS3akL9w4HFaBEswwU86QvERM7c9h3VyvSRqjvSA9dspHFCLGbkvBGYAwkp4tDfNCc8wjy",
  "key11": "3rqGgF2PbB32UaT61ZaG46LQAc3KfoDwwhiW4dMbLu4GoP1SdAGNsHz6tK1FtcLU5J42JMMtVt14Vf2fKH3zhXfe",
  "key12": "24auzNS6JnTyp8SkjHSuRcCc6udPJocURQ7cCYxuiaG1YjnFDaxX5E6XjKjG7UZsD8hcswfQeudpn5MWnEzajF1n",
  "key13": "2DVM4NKW6mP4BgXgiByeN5qbYeXQ87jnNZKKAXzYghZq4BZmpW3LJF5KGqAgd4pXqgx7JvemFqUpKvHpcsB9FQUu",
  "key14": "CuX1uDA7zWVKqt3z53Mpb4QVGtRCGdUspoqTAkjwGRW76gYfcMsJTthpw3AfmaXDXN7oktxLN49wpp1TtuQcocC",
  "key15": "4AGwFmkV7q2yof3HvG2H6bxMnsrTiKfRMDuDcnVFdhxspqMkQwsMH4hDF4AyfCjpHuWTYbS2Z9BTBKyEqiXE1GKD",
  "key16": "46YYhEJqgDdJEh13SpcBdQminhfbaSXvkchoLBCpg99hqxnfQBPBFxdmjQEsgpfY47LNfG81T9QhhL7wYTWU8dMF",
  "key17": "4qQSK4mVWVUXf9M4E3LZvDWP4vtXf3ziAX35fM1DQYn5KaNLwZE41Ysvownsoes8jH73JbVZtMYjqa5cbkkqW55P",
  "key18": "51jxVS8T3S7ZJa817YEtTCpzjWQxJg1rdGzSHrrkdChT8ksseG3JSJNs7gdubZ2Vxkhkm67KfuDsvBowRveibv8G",
  "key19": "LEnfGVx31Abottg8mmzAUpp67Skcg7HzsUcqjcnwuAcSh6qZLaomtDWfWfFBLPjevVX6KRuawZguqEGX7hACKD2",
  "key20": "2dZ7dd8hTSFdLhuEAbujRZV4iDRMXRVxSbkJCbunK3QUU6aeaSh1JL1NLSz4Hd2onto9JsCMZF43fxnX6kgVENCd",
  "key21": "RgFfLQR4BPPkKT2669jtCHzUJ8J3owCDMqMZx3wxc5KM9UgvT2oApkeABb3L1B2UJKykVnD9k1o8KEbg66HpF7L",
  "key22": "nwgmpNE5ZHcAJJJE3c6861Z1jwv6BbAmdv1Up3bokkSFM5HUcJjWwW1j6APFuwAffVAnjmKubJ2kqMpM1Pbstyb",
  "key23": "2una8WS9jxBmgYcV9dVRCDGAHAGZvcDeypEaLaMfogW1gUttpnfQj9y8LLJprM8twJBqMCFcby9Aa5K7QBp95sp6",
  "key24": "2QoSNrc91NVd4TbW56BzurcALKuzjhwVcwJfTr5jb6JZR8z7x4pTsyBjG7ZQxvY7V8iSoJBNtoGY7WPiA7CmFMQY",
  "key25": "BBeGN65T6QGmLrZfJkXeQEsge2zv47GGzWDfrCR1q5ZfiUbgMJcstDdYj9r3Jvf2ZmycmAM1BHVi8prUdhMT5Ci",
  "key26": "n9GBS6Wza2oCVBofjG7kvKgYRzwyxbgn77ppe6zkG9CHmy5rRexVo3i8B5isX23xUHFDnNRybfNQWhUXRnKLPBV",
  "key27": "5sNczVBHjdPx1sC6YvP9Xo4haTxBZggXmDZY5bSPQor7ZPLCooDk8725JRtqhGUJsE7zrvPtSXVim2A8ytq7R7MR",
  "key28": "BdTrD4QWK4URZYH59Q92suQginXCmnHDzYDuHzRvwXbHa4mBmYFhuhFEwuUo3ApjAwhPX4KreXATyA8Crvu6RrQ",
  "key29": "2vv53sme3pxnhWDQNUEhf75d2aCYnEngoUSXrHg91tFVBwJxFH6br9bQUoZN4nodGqWWP8HL3edqYXrw1Qb9FMhY",
  "key30": "35vt1224GByXxWE5P4pMWQo49WX17hLfujTE9eGrVVEHtWJG2mhb1K1xH7RLnH8f3MNFS9xY8M4ZP3GfE359T2XX",
  "key31": "4Qfwg5g4dyozYdAznKUTuZ3yFtZdSc8UhA64yw9wMuPFZgfHGgP1gHfWaCjZhzZrpE67pULzfx2WQsH5QxGAR9Q3",
  "key32": "5cR4tg8RZzuRnBGGKr27QeHieGWEizrFnbkqNJuWAdcrNtoydWQzy8hC8MTu3RLhMGZC4DCQMJZcesQFkppguauf",
  "key33": "3siwWhqZ8A3UrJKFXhxGHj5m2bMSNeuxXMZ37GKBwScPaWTwR1uJPBrHEbFmR9AerBZsQ3XmcpZsaEtfvtuncDif",
  "key34": "HUxjgD7WovBGDt1khAYhom6buFPux8irQQoCeuELoVkLBsMApSmu7sdFGDvTz3iQhbbFTqZJJZCJWmATEzkS6Yo",
  "key35": "3MKT8sTfKPUUASdcB5FC1NhAJ2NjG4MdKQLhxvHpVv18DDAWYkF2FywipUD7TbsreD6uR6TiCLeD9CGN4jCRvWX1",
  "key36": "3GXnVQce5SHwVo39M6Fu8g9Qh1dixC9TrzcBnv7ukhCxXoRizFAupqBVNpPkduK77mGTPb6zXaV46rGrnB5eBWzh",
  "key37": "P5F1vYJMVKf1m3GDs1NdFmDJcgQNys8Z62EMCz1AQ6Q57p3YogqGLw3jR7f3rWM2dr6fwvio6JSo2ra4UwFzCzE",
  "key38": "3sr3CvXJvhRvMmDeV6yLiGTP8JwSxFmmPaVQvCXhvqPA5RZ323k8TALj8xxVnWZhNjWqo3ycpd6BijqSSYrRSLDg",
  "key39": "5dcB25rPCsBhjGBW2MQxB6LLodU9zCCTqXKSsiQmJSMuQ77i9MD6KniR37Suo6x2V1dvkxzVE2cTpKx4VCkufih",
  "key40": "5dTNsDHsWc4gY6EDuUuwgVzPfs8ty7qLmn4ZQoEM22hijdmpMy6CkeWdPiy3sp1n8oE1rV25yoXKAPj9NBBdFzjN",
  "key41": "6h3CcCVj3ivz9EW29u6T26ondYVGPUfMShxLVLDhw3nm9A2x9E9pERZU2XfitJpLwkDBFwUBGrEnubrYVDokaNu"
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
