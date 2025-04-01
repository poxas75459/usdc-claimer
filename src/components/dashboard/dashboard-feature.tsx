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
    "35mJc8NYdJa3GXKHcR4hvA1kieV3czQmwjcGy8dkWpS9j6Y2iQRergEWENNizctgkoMcXhefrzBJHfUJ7SndMZ3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RNgKa9Q2zTzRytTSvkNuL8TqWFTP4fMDGA3iaeuKCzcRe5W3m9iMmZXMEKVerh7H2taBuSbDEhhtwuwo2xcNKGU",
  "key1": "2czYs8upJjRQz3Jw2DMNMwm4MAmo5arXP5i1xm1YmcG523XRYUgDvwbEzDP2tZxpanEMDacrhA25E1NCikW2VaVZ",
  "key2": "YsttdoLA5w3qkUNsxbJHZTbuvEroLbDinAckkLDbp4WyfSWRGxmvWmFr9hHHuLtHE2swxxsAGk5ySTiabWm7sy7",
  "key3": "3G9qFaiypFhpmHpTJUDUz4YjpBW9VPaAbD9UhkvEXpUW6DqVnEtLewC6KGkibBTefsy77no5zUCrZx3ZdgX6Wxrg",
  "key4": "ArwjnQSEQEbq52gebiRrWR27hr2r9pfb7iy1tA7pM6x56d5rn7BoVMV71vGqSQp9c6HHiDczL1TVood7RMXtyr2",
  "key5": "5YuyMXFYhEpW2kgg3bwkQtEDC6HnqiU1EHDEogDVgdhP3bmGEpgbZE5BAyHBosmoiHFaWtGYtWtTYhRXU2ZTdQnN",
  "key6": "4BhTYKggQ8PiRTHfybEEyJYMF4ZDJUmNx5cYu78iaKavHMa6No7dj8o4Xr7WpQUMMgsW9Ms6tKjsYH5ZHZSnWM2y",
  "key7": "5QbCSSs2d9bAe4jFrkieZDE95ofWSxZbeFuGViKq7N59tkVZqdGJnuRSz35xSFabzw3fEg34TZ5Ea2c5TUU5N8w8",
  "key8": "2vXeB9AMQ3XUUy5kMudCPMFiCg146cpdBhprK4ugVZBCZ6idRouHeRV2vWV1dRJNVoFSw4Lr7AVr5o5W8MFt84qL",
  "key9": "5AVUBcL6PxXBQKU2PFUSaeCSHBLGTb7jC2UnBHeH5KFCEAmp9tBm4FgPfaDNP2Mno4sPavSdaPMkyrNtgQz47moR",
  "key10": "4mgjdVKUAWDhi58hb8pSoBPByLuKKLLH6fPdTQ1dyVFbiMA65nt8L8yBda55Np2JU6SuTa2AN4byvgCkDZmhhSa1",
  "key11": "2fi9s25ojpzUyFJ6HEcWwLpWgV7SuaWDQKhm4cTryrtPrejBHQirDAwDNQidpAVVHQ11yBTYTQcjnMDFB68XjuXs",
  "key12": "3azNxZugcyuznMdNTWziarfS9K36Cue5REEzNKYJ4zTCyApwMw9xe1thwr569sxG5TSsLQ3CKmQZjrumNUWchRy8",
  "key13": "28HYYjJV9aAffmsQLJ9SJAzgdzG9W9jWXopCb3C1Bh9xmidopucuFqGKyYfrRp5kzuc3rpqpQggsRTeJvxADM2Xx",
  "key14": "Suoz3xW67HQehNaEu7W2RWPS1oNRD3MpASjvhV1UC5YiMzxhyacEDhSEa3VFQG4bSomrSGjQTqRMWkicWwPRVht",
  "key15": "NiaXNXqmsLdxo1Supw1p7GYvFkAfoDDPzfaVc9M3BSbAJBEosPR5Mvqm79B5tmtJEVtuPu2s9coEPX32ZWoEFDS",
  "key16": "1Jo3RPnagkahF9RYK75b2AMsaKTz2VaiXH5youxJWDY4MdWrWgCA1HmGKkCiPsdDnacX2W7fFPprDg58CkVQLAL",
  "key17": "3jVKoyYjn5Due15Ti4CQYuRsYYZ7PC9nSQvJRQ8RLFJcczPjwdGJb3QC8nGh2r8nWbLv5GeGpYkSA2yxF8f28Esx",
  "key18": "3ZRUyCa5oMEqKn3rn3hhuUtP4Hbzs3vdYRLW6vnHd1n9nAWwBKyLp3q3q7kyCFtrbjjcS5vqkVKiqA38VAjy2euS",
  "key19": "5Te1WEL83No9kFW8HuGFgrZ6Qf3vEH92gYFf1kVeH7fuSk2quHntJC8BP7EAgeH4KbM88UbWMNs5vqQmNEfn96wA",
  "key20": "4ZNPkpXZziauwnJhY98DQK8BvZ95wXfDcBP2FkvfKwLmUWyp7NZksmMUYdH9mMArHxYbrG57Wo4ZepTDkUDF3e2Z",
  "key21": "31rag2mkz3JqBASJ9EgNsKQk3227PskivdV8da2GEAEMsM7hqL5thuDy9feX3MsuatXsw1wMrD5dirHsFZRh8pY",
  "key22": "RVaGFJphmDwJ7mEUhzfZmafurCbJvKEfZ6y2wPW8mwcJUJB43HMcXz66nLpT9gcUCCwCnXyZzSfcsuTCsjJQj5u",
  "key23": "5xeexACG1T1Mgt9jacwVNw7w6sa4Ze8KUPzSiM9pyeMvB15tnQBn7QpvPqPS56sxVxrpni4K5eR2bumBNjPEYkSk",
  "key24": "5YP8GGhLh7z3K7wQWEj4acCZ4AUPJWNLKKsKquMKPQWvzrC1eJbk8piEZHHWArV5s5ZA6vy3fbGogKHW2N3M3P63",
  "key25": "43PgVYdp83zmnXuBbrFSamz6HZ8BzJC1FhBNAL5yGLaukWtpzXsD7GuMEXCgGcQCT9exszoUoHH4EeE3zihPKrMe",
  "key26": "5kq9rqHDSrJgrJDRzJXt9zR7jnt1oEZtWFeNpRF5EzRUyyQ4dYLTCeeY6mcbwXSVjpywzDuCWAkfdwFzboSuQ3Vt",
  "key27": "4GAwiDvDDzJF9qmdkb2vtsKHtu5N6CyhJJAnF7i3z22Sgh9FLXVxzwmJQbQTMkBh7NvksZzHWr77znJBBMPnpaYe",
  "key28": "2GzouNBstVqaNRJL4Si6o8SndHokDBJ7GxHK9yd7UiLAuJY4E77gP2i6WQb2sp4FxLGZqtSDDi4WJh51dpuCXoFK",
  "key29": "PpBFYQTcHRPodHNg2PsFF59qSg9YFUr2xTBFYmVSCisENktWVW9t1RuUAZGGaEFtRDogGpU51StwtYm9BF6uQAV",
  "key30": "5JX3Rintx7E2CJENoW3pJfeBcPEiyjhUHHQMBgxz8izBzR9EJD2v7br7AkRXT9HvbmMF8tM1yN7EekVKF67vHtzG",
  "key31": "Smxn76ALDFipTKFhggwhNoL16LDMtdfCrXMR6o8U3ukEiPkoi6sQP4qpPrJL3fa7yDoH7Bg7AKvndo7HMz8wqVX",
  "key32": "5MoJMjAMHLrbEADxFwJXXSGC7Qwg8ewdP4p5bTdi6b8UDUrEwvgG5zNepLeUvGBuHsgaGkf9rU8vednwPiHNdAs1",
  "key33": "GnMmTehfnjdChTiReoPomCJfUeUCJAqvxue7wAQq5am7X6GgTiEmKQrf8UdjJkrD22SSnk9SBwTy2tR4A57t6EH",
  "key34": "oJCTswXkxmXSbUiS5Tjjgz6BjwMXVCsNfxk5q5vkgxLmQmy8HTWq8jfBvRombjwyyhbP4TPjT4xpK3GRnZGHZDg",
  "key35": "FbFj2L5qthgD4cYcAnZQBABL562agJiuh7dQZ1TVo8dg8euo6wcXaiTcheUUiBQASqicam1Refpbu29gcuKsi3H",
  "key36": "3ijVKAB4zAfk1RxL5gqMgvbVBVCypSvC5xNnoYZtQJfSUwR5EYnge9RyXKnyuUowHFVFQMfqKqw9ATkCBkLS8nkc",
  "key37": "53gx4j846Nfe7heji8zqchdy2yp4NGcgFPRhJxrgZJxnKPjojnQsG2VynMQuDC2AfEDEEdWvH1mrGQbGSiSR7fEb",
  "key38": "4M9RSQGoRzggz7KjiHVR8mW6rFHjSJVPcdyZ8wgChw191hPVuqPQrquRyhGF9DMwQb1erDKHbrjefZfXqAASTgVg",
  "key39": "JESzRSZM1kx6Smk44VG3gJQV53jf6HZr4X9uvsZUKCGXvBD8seWfsBkDztWmATd2kCZKmS5TziNqCR9hZyBxeSp",
  "key40": "3XZvKf8Z2KGPYrgvVvr4AZNZduHSt3ZMsn8Qm3kSxUXCnE3qiNmtGiHbCseoARMr7YEj6yEC1LsvhadzwbqkrKd3",
  "key41": "4YgWSvmAL8CV8H7pAadaKPbkdTdKcmCvicTxT8t8C3fmYTDTMQ4vcRFykfY7qZS2JHf6GqL9DG4gukRHZo3V9smn",
  "key42": "23dgPP8ck85yTBoGJsU1eZVQg6B6DpkyN2Pb2xkeGSQ13jACqxwuXx44apke7B48QZ7BipqTo586oaao7aM74pkn",
  "key43": "532B24m4xifM9RqSp8hGV23THRvN3psgnKQTTfAJwB7fBvfUsCiT7ChQhwMqxgwUBhjnKrnqPAaHXGoD6EBgHNBM",
  "key44": "5iZVEd8hxWW3oNkG6snLrgK8k1GPt6RkUV2ehet7HSFPSwnzycN8cq2fGMyQfCYHZPLhnsauWvYA9G1bWFc5QcQE",
  "key45": "o3nyWCWVg7UojvR1tEgZgE4HJa8vpvMQJhn9tyR9RjSnSLJEzKPLiot9qRZR6Kr8UzcFGnbvwJceWzcTCpSdZGh",
  "key46": "3dcYhG9ZwtyxkBiahfzvcoEeRw3ojhQJZaJPg9PNhMFd1TLakvRyUc4BjTMWDzUJHkeWcT99UPE6Gxd9jWtJRaFn",
  "key47": "2PuHcGGkw6n4ocMUUBEJvEBork72QF75hRWBHk4cc9Vkn6rf5HjfvcMU4wR8b4t4YWu7V7zUzUg6BDTcNAXrNmsQ"
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
