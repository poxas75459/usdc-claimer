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
    "3QEzuLNyTaKjpehANAnZHaSUQf4BQS12ZVtLZDtqaosKkNTkQto3xrAUdhLPfi7YEKTm8UdTvVST2P4oFMgYXY9Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63W1DKwgyvgYswGWtPn75FSm834eVzjokcKGu7Etd68FoeVfAy1ddAewqNmQoGCtZzj4zw4b4jvAw6C2YWXeZUkZ",
  "key1": "65Sm65yURYgUraE3psESFaR3QhWCUGUParnMtNFuNxh76Nzo3SugWF485UWd8TBiN1tSdQDeU6hbj5GaMCf9TzcB",
  "key2": "4Mm16PaYHxv7pv3qNK9viQULJ7RBsijmQTKdRHEeEzs91hc6v4ma2NLaTM5LhM5DS1bXMV43gwY1aKy7qfGP1NwC",
  "key3": "2XNrqyG2dgrMajiLoveYhs9XKcMRrxatK1QUjTjHSz7eatDYW5F3R8vQ1XRvd7iZ9ANEkgvzMHZFxUjR42UGwqCU",
  "key4": "mZHtQuBoJVXpr6JnHJch1JZWyRo1KbybmpGSJ7c521ad15rWSbrVRWVaerrJcGYokbaxFR6NcB8qVFiNrM3TB8c",
  "key5": "VLwd9ZDAAdNzd9ojvrHEsjXspJAGD42Ajux57sK1SX42PrEfyog8FhBAMVDfp18TfyAio7B16dmX3hDGLkLu2z9",
  "key6": "bcimymv1hEADzRb4nP633vpFrgxKaC73CZEVRTDZor129CFUjxr15mNdgBDLnyGxEz6L5kQHuiTTPu4ZgRvuuUo",
  "key7": "tFbYs5pVyBz97t8UYCri6hBg9d4pmEDoK4GH989ZmoVSWNAXbWyAHpzfnhJ2fkQpKudZAxqqsvLQyAz6uzFpECW",
  "key8": "5UZiSLHL7kcrsnj8TqR2KFEjvu7iEFRFEaBnvhSxP6NHKCMd76ryL3Bqu6U2oZLu5kaej21EqTVK758J8ndXUdkd",
  "key9": "2XPjphvEfTqSmqPsv3YMSTFVvtFBuxNh7gQnXS9F4KXZGi3XMBoYnDbWAsfwjdh7wyifdx5VpZtDdorCHF9twfvM",
  "key10": "Re4VFtUSg5MhcqnegzaajapxuFyJ1CdhKeXqwEFTMd3BcL6wf8So4gAXJTeJ2GJEv5QoFoNrL3NxzFdGnngwWHY",
  "key11": "64V18bD586Eu56pHijXfzguxw27cup5qcA7Y5u4BAfpX1UQPkfQUHvFoomAgCL4uqMKLZXJzqTw541GAeXeQmxW9",
  "key12": "5hvfP6vaAbFSXWuHvNGunYY8veqDei14fQvWfWFsv1dTx2Xaz8g7SFmjBJD1wcg9qaWffAGyLxmsDtNuPUayUPhQ",
  "key13": "4YVexdUV5q1jfmNLDZ5QYetS6iAbuthZ3aHhviNq61YrZekgFJwXuCdH56JnDkTFXMKX68wfQyBZrAVp4iV8oRia",
  "key14": "63XgXNQLvRAAzwLWxsRidhppc1TKEYJAQb8CmbJu2VWTdvPB95VHdUrk6cJ4uZmuKAJTHfCKmnjcKyPgyn2itecT",
  "key15": "4L8j2W4buwdjVfFyEpFSrEp6vf4eyBQDqGHHo9cSgrTJaWTmRGUrEFX76Vx9XSENdryDgGHiNM9R9cA7ZquxEY8y",
  "key16": "4k7R3Jqqumb9cgyCfGsA1mJRU8hrBwdpa6Qu1YSULmGJdmx7mYH5P3rA5Rbk9MM5tDMLoEMK2mvGE5Egt4x8fxdR",
  "key17": "4swqXDEu11BBwZqBmvNkLz9SeXP6XQtZQ9A7eYCnjcPZX2bP9W7a3tnePAo5YCdpEHKXBPoHdRBgbuGa5tZdsfvX",
  "key18": "3EUTLB9UKTHXaT6TD7eHHYSLQMdAHjaaiN1agY45GQugZBFMZK3apUMnnJEHcsqK3wu46G62kvYQwsKft1WX9EUg",
  "key19": "5qssWwhwUqYVoztPNz8WkdJhPLHD1ejW9ZSRvs94ZeVFwix2sarTvevxZCoTYL17Y2MJbvFyjZx3gEW5aQ1E4YVT",
  "key20": "4ncUu3VZYqpanJefS73GgUL5PR12sJo9CQvxt5VAqE3FVBaaWqpJmtsKY7ZyDTr8d8qzNvbrAi9WEKKPd7dCZCjS",
  "key21": "5QJ3e2wpLs7vSfpsigTj7St3auDGnDUK6eyHejmKc8McQgCgYu7bhqWqdFezc3jDobHFpiYZU9R9SXyP8jpUkzSY",
  "key22": "2miPSWQTWroevJRrtsmCPWBafFUQNUDqdWTxBfDfFXYAZFrccnsdNfwA97ZfbNwTgt3PcrdaFxTvpmFM5C2xJ1gZ",
  "key23": "4MVcdrk4S7xK6YohmAEgBHbRCiRHVkZeCQJjYnndddMZ9MSNXuwkbMKdXwBLM4RsVKbzBQb2gVeqDbzwJaGoDsSJ",
  "key24": "4Hje6tZooZu14rExdSeSwt58EbSM8KBoGg4pZ7M466oNiftvsZbccBLQ165jDRnAnaHnPxnHyfbmEnXLx3xbm4TT",
  "key25": "5WgYh1QtNroq1trJQVA6jBrzy8iy3hcmcUVT7E1PkyvfsCkcbJHYNef5DkLir2DQreDW4T1JAxgqwzTLBFFuMxH3",
  "key26": "4HstuRW7UxqVD7MRyPai2FmbRoAkMEd9g4qQ4FHSNnHafGwTGJgVptenN8bfNFCkWdJ4DkZEs7T3k2RsTNSiHoXV",
  "key27": "3Tx4VBJDiAkyyivvzAzBFZv7CQNkycUBTRe5ZNYgipxqVziz6sWEE3L6bdquJZfhUfpTJUYpJhE3j3MpVJvVGJmn",
  "key28": "3AG5gD7DHwuikwVDnMzmct6rtg7kQKXema9f86Kr8T9Pv629D5WKfWoEFYBHxiKnPw5de5HUe7Q3nrTzpx1YVUzg",
  "key29": "38rbaauh7Pf39DKYqHgE3b5R6yNCr7W2oYYViGhfwg77anvnnEX99L6G8GCGH6MNwraguBeN1uAnPVK3Zan5WCbj",
  "key30": "4gsfwzwK5J772QAf6rXzS5opsR88Guyu1CJTMTgBYgbsNeJ7XRveScb4DD9RJtY8jYXVcF1qu3ScdRD9oTtenMBR",
  "key31": "2ucp9eysJ5xm8w9qwwBBEJ5vN3FAj9tASmQCgHoBzGRLWKttV3itEa6Ea2nx1wd8qFvChCtjgp67BDL5ceoW5XFM",
  "key32": "5sJct5sGK9EYZKgAaJ7xRVtTNgBkZMCYE88YDeWAAYVBtn1NUbRYukXYCrVho1WiLmQErTFQGR4qaECdPZ4fmTaD",
  "key33": "2xEijzUjBY5mui2LrciwjB38AqkCXqafcV9B8qgbvx2Gvicd7Kcdy8ZRQLKQDhGtCdxyD45r6YkWuwucJuA4mrSX",
  "key34": "59xk58cqvSfbTxnYzU9XAiPQGNPN89MGeAwroMSb8JNrYCSpu9dYSBh1qyRT63xyubEFnYdFygMpz3fJJJTeN8Xk",
  "key35": "3RteDT855sLgJ8ESWnUkv57UM6yNtZDpNyt2NN191boYLvLxUNFqNhgSFWRb1QSLXHHSzVLQNzS4kuB66G5sxjYX",
  "key36": "4jZcnWh5XjWkKQay22561vYf69rc18kczUD6EzKw3WuaPDDWf75GdotWYHrMBjGUGC3Gp4RRzow4GtBbhiqyUiCY",
  "key37": "4QT5AhVQP2Mb1Cgc2F658FJtH8FKYjozS2v94uBhkKcnM5ZVQGK3RbeFaTxLpQkeoR4rzDYdA31WxRgvxrqiLW3i",
  "key38": "2BaQ2uzMpxs2pHMsQAqpcLpjZuh6BRoVSKZWy6TspumM9n6ThSdRysoNKKjog9ZbCvjLa7X4ZGqKy4WofDWg6s2d",
  "key39": "3ungyVJQhGXoFRfrzSyTZ8AqZj2zT7JHv3DQY2cguqxXjY6WkRekn7BA3VS42noCQPXdYhf5XWifmuLEdYqwoqya",
  "key40": "5TYq9gRPUhyhKQdN33a3QFax7pi2221uTEWsSSakhv5i4TZPEm9QYVNJ9fKFBG3rbqZT5hSMZSgNoxs5ckcYzRsY",
  "key41": "27cDRKywpdmrNwPHt2TZsSbopgh5ovYhVSkVnNv7i82FwU3gyzNiNA5G2WXrzG9C2GZVrHuCzD4Veyaq8ZGomSMn",
  "key42": "2kACJAoLbXdTBjfhU7U4E7e4gNv88ocjtA5uYeQbPHuj7dAy4kADJbxQ3NEdApRcqBNSaSZcoerMeNWxtqLfVKUt",
  "key43": "4GgP1TrDudjxS1fbhfX4DLtWjV1ViUPBPP2Yxw1Jdpa87K6XMBRqUjLEZSdr5H8ALAhgEABkUA4MAXqRW7rsXP8y"
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
