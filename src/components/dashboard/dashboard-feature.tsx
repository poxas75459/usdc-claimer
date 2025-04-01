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
    "483ntUgp2udAxeNk7UfweTq9HcJKi2KtJ65ZXu3xzcEFBv4CSW15ZLSqKctT3DawzPZy7TL5thaLwBaEs6SaRZ6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PWnrNrwe1t7Vi2nbuoBHpRr5qxDUxifmjm7YtmKJhPaKbRHyUDnDtoDRrXHCcddVicSVjYdkpNDp13rMCxwkh3H",
  "key1": "NGtJAurUyE5AgBVfGPRXoEg4yQw7karqjABFi6ApxkvnUidZbdzEwydenLUQYAJQRm52b88tsYGMwpdCKyGFJgT",
  "key2": "4jSj8LLDJhtjFYvxb8D8sZpjNybtgv8Vo8ExvVxVazem72fPxdKF1QbTFJtLjorszGiUxQkDGjmhzVZL7iKcmupv",
  "key3": "35mpcyxXoPZicaKGf3WFWbLKZxHMFaD5eKhhtsEhycDAo9ncW6FdjyFDWs5RNvmqoy5ParMNjw7GCXKsfYdKVibW",
  "key4": "2XkRckv6k3ZMoWdxcaxjf3CogwMdK94CcYdsKQx2g2VXPVHKV4QjLHC8c9w9BPyR5JhS3iQzevZyQ1pjdAfz5k4o",
  "key5": "f26tHSN1kcUnV9u5oiPFpuuyey2ZzZfMGQttsVUtBGLh5pVZCKei5ai4QMUiyz2gFgtz6gQTYEtu2wkAgjcK3BN",
  "key6": "4zvHMQj8D3fLdT5RizTwWZW8QWNze76JPD3mfheDM3STQWdDgF7i1rsAQstgCqqsTXkfQuBjzQeBKX5ShsEDDK9Y",
  "key7": "PRsWWiVhfYjNVwudJjHgv3DbmAUwNZ4cjrUSx5JhVkQdbjqspzCicdqNHEajnx4VpLFayw7o1eJ2qRJjmRPtvLL",
  "key8": "4eHxR5dZE7K4PbuhR8jEMsXgVbqDzbj91n9j8nZXZFTwu5jnwXLtzvCsUqN1ZKGjSbsyUtiNFTDpztfT2ipyECdS",
  "key9": "P2cRBRzSXniGrfmf8n5HbG3MCdebnbZuGNTieq6ip6Dc6FXiKPVjYza5tDU5kdhPSFsQiUsHqNJgg2UMhgEhno5",
  "key10": "2tdonRK9J9rA2nkfEha6w5ghKMt2KnVs9HSsumuiyAqgtnuZmcW1Ko3wvwEAhKp39yxSa9qcTd2Z4BtZpK2CxPiV",
  "key11": "5cQRrsDyuYcxRFWHzzq4R8Hc7xNvwsBkrP9GRec7JfgnDE4Vde9UAxfybiGphiagixCB2BjvxuqawasRMzLj5coE",
  "key12": "61ZW6pVUMC13Ck4dSHZnDTh5Z9ByzKH3AGMVKLCbRfCxMCjZLUv1YoJLFCxKbKryngtAdeNKwXxrjEAGrQQYR2C5",
  "key13": "43Xc7nWkz11Pi1ctkW4BFEDHgdFicxFf6oq3iFMCeNs7Mjmmd1AQpJwvj39xzxBpK6MEJ6wzsr6CkzS7QcnEd9DH",
  "key14": "3sGpS82h28JdQGarVY7mdoGqnvyCGQ3M3nhXEircx2S8pnjLVDb4UHF8HqrfJhTn6vW54yrTDUDMioFdY5a6uEAQ",
  "key15": "4ESmqS9EB8mnnprWbZvdfppkWQ3Aq8Q5qVCxh2ThnoyLC5MH4bwkxzJjMQTLacfE3KkJU5bNKnUx2GscMye1Zw5N",
  "key16": "42mQFgLLXeWbJmoEZGot9JGG4MZo5kcWX9yyqhX6NEzRiL5hNFWuV8EhYmeisp96nYun7tKSrKqPZ4Thnkb559GM",
  "key17": "4wYgzd3XRDNL14rNYWiPmzdMKLxunaJeEbsLaD4kbEYLV8vxvuAyw9zjTHJnuhHr6NBuiVzDW8J8yeBh8tj5SFaJ",
  "key18": "5H96QppV9AeJdeDXKE3kgtzusX2acUh96K5n65J2Rsz6kofb93rkQeaXBc8qwBkiEg7XA5Tfx38GPvATUxwbcQcT",
  "key19": "3oyQPVRLwrcA4U1KbMXgLPzYTMYXkJ2auvsoPu2KV6EDSLCKUmJbTQKFHYKnWXRSXP9h5MkfnRUk7FrMAPQDYqP",
  "key20": "2JZZ1y38BzXJvkwuwshdpXDboiJREMgjJvTYEN4Xd2Nu2P6vFqJDABJXfZFYDSZRg1NHHfDxVKzsG8RfrpyXw6uY",
  "key21": "2dLEixw4yghmhq3wUsTZoNvAdtnEibtrXRZunhyfzvvXZ3kZN34zDdBKx6RvAteaqbmPLzcG4UG9NxL3P8Z3h9J5",
  "key22": "5JodiJ1b7DyUsmDhzq4fEFJkKhzYBbwg1k89TLnb9BDromWRjVdMYxEyrZArB2dPR7phWNyJc4tWVZNmUvqUmWUB",
  "key23": "3WxMqmsb2xsXb9zw8gaasF72GreCGomXoYmWLShUuw1NnbLkHDAQHN4iLSDHSgbSq5ST4P3m47QSUQGKrpGCNXxV",
  "key24": "4H76dkZxuvSnki7vyFDAQjJJVkvYaNUbksC4Ycucc9eVfxwL8mDcEqaMcTMMWZo5i9qjAmaWbWmFZWT3rUNhPaFQ",
  "key25": "2TBq39Uf1xkG5th2LnE7UVfR1z9qcDiDgpozMzPEpjwctWCy2x4WNk37bQChq5ed1iw1RLqK43LRXxznerq1pRyn",
  "key26": "nv4pYKxPb69sdFcfTMoPUUTJjospMSbCQKEyEM8yZAAt3syY4UwqkhjUaky8Tj6k6CsoUNAFNTekhiut4XJpCFr",
  "key27": "4bze8zcScY2dTrCyxs9Zv6uENPhVYUYGVdgEK1K5RWHm7ch4CqyRyGo3cy5Hsps5MoY3k8xcfx39M9WpXMxW3Twq",
  "key28": "SGxRqv47a3PXDCjjpGrVwnyYxz4oriUcvHR9YpJeftaS1HKtNdJ6K8pwDiE5S7yByYS2aXBF3XwKKhfCMx6VDQv",
  "key29": "5Pwak3RPKES8JzP2BSJUAi1eeHjAWYGDd9pjdwVrzff4wNKY4kuD19kwmRdzdRqJABX9DA8e5tpNMacytajNyTwE",
  "key30": "zrGj196S24nGkd86H4ipLUuBjiKmnnKcsnupnsyyewqYeKx9rqQoQ5Gg8m7UNMj5C7ngfEmKdBUdH19Jxz7bhGc",
  "key31": "5Di1zis6sTQQVGBkxLyGfroCmjXftPkQ3xUwLigCbDtssEJxL1AjFBXvFjR3EEwD3ZwxVPE3s8VPsjYcY8US9MGf",
  "key32": "37FPGHRN9XCb2Q5yRD6sN3d61ugi9yYaPTeDKXD9E4rmqFw55dD1ScTZUNkjPq8BgGGb9NgLCk6BtEHrUNqn4QR1",
  "key33": "2AueH8eBaLsggfYrZ85FwjLBZoZgRmr9yPsj4daL8wEbcUhCibYVzkXqGbaE72di6ZxMQTz4iHbtAxkPhz86mSH6",
  "key34": "Q8PqqLhL8sZPSj1jSBBLBkGT65pVh7ac6jURCsdaUjetdh216qZpSaVwEu9WqpQTPgiMzGDEqgrTDis9CLBYLhY",
  "key35": "4RYiPJkjhiFx5AYpSwiUtkXm6Ks9ZW311iRVvazicMR9ku5dFro5mcx1qErSQ4gjFCgTWiw3A95TtqNMT1TMQrKg",
  "key36": "5pZecEUzfqhkxjTazaX8JWGKz1AFSzuWCfRKqtMcf3pBgF78yfXQAtzhUKaUSM8oLtZU9YAWryM88HbnF83ogWCd",
  "key37": "66zcvqkRKEcoiZdY4dfF1CGLjm5tBjai2EnygbMYaknZ3qpXFSSupi3sRRAUVokTY52i1ACCzJs24QrRf6LmX65h",
  "key38": "3d7QNUXS1fKL1Sd31T7oHj8S4ViAYQah3egho9tXUfEKTJnHF4eK67LeYy5wL9xAqUgisGP8TrkmQ2wMx8KgfnMZ",
  "key39": "2byouMrDowq89He19uAGP76HRNom5CrmLRZRDFjmr4Ko4KS7Zo4MBR7pWxgJ8FGzWQWDyjgtbw7GN1CGyET97oHR",
  "key40": "5KTpqWnt8pjgktYrKUokhMFcc4yLD5Ci2Tji9MMWVpH7aENhQn8UNazFuGAcCP88wXRUqGV1xj3pXWxX7WNyUxzg",
  "key41": "kFYtN9fPNtLmuhntVgSyWxavVBREXMFZXb1W824ERrKWcwTqpsBqPKrbTWzA6914J9yxN2r2wmJkGj9LWKArcts",
  "key42": "hrSgAKVWYStSsEvEgBqRtiNZxTJ14F2JJYdRCkLdsSDX4XV1zg3ANtC7K9JgtsKbAYdBTbNf24dkewmkDyQTe6w",
  "key43": "3yAU4AAAgHzpCUdQQFw8mrczc58qLyKkkF9SWuH9oFuteitqkawQK1P8VCSuNwbzQR1i7zdUw3K68DZQKntk2Fid",
  "key44": "41SaHbgiEKbw8s7YpPXMzSmRMqKRzFqR2wyXUy7knTyERaWE7SejpgwHfpkYB35Hw5dsaXbh582ien7aQGZwthd1",
  "key45": "4WPhWD2dS6S6VGt3fbzrk798Yn5ZtPzxd4gSa6xj8Eog2pmbmWa3TNGAoUUJgp5F89btVEXquG2U6BA6WbFy9dDr",
  "key46": "2rC6iyaNbhU6MefxdoyDdN37VgFJYyBbNRPoHCgiDhdTFVGPM5F314R1H6sJAora8n36MzA35NrsmTHsRbjRqcxf",
  "key47": "5QYWL49YyhZbXw9BniQZ6v1g8ywCX43ywPXriKeFfNopLakpzGNh5ZMMjVeRxAL8cCxuoVGXZDYYdqZ8sAau5QBp",
  "key48": "5T3gRbRR6hUiw9X79VL5P9sYr6zczmKokZ3n8q4uGbGrd6bq1VMZ1PFNKKo4A33WV985oxuShyV7AGAG1UsAc7JK",
  "key49": "3So3VRRU8JndSP6UwgGxGheSVrgopNMci8tU4u2kuSAHJbsUnC7uAf1GTh9WGrk6pDM9w3J9Mzkfb4hcEvCzShpc"
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
