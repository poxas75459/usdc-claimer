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
    "2QrkkA8Z5sZVpKk6gdW6fgx4rBXjZ8dN5wLNvudUxXxkDg6pzR7uTx1M8Q7DdYFWTGvvPJQxPio7KVXRt6FhuM9Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dVXeWnWiVPyquzpnnXFRB9LvMspWog2Ah9DBoNt12z1Bx4Z1NvvoDyutcHFjF7Rf69a1jZJBrWvNC3uSuVnbHLE",
  "key1": "3WqKdjdKb44HzWbUCX72EgreQaJDJarbJcHNd8KBNKf4N8mH8sKgEiodN5XJGxQS4HTb1mpe3Ay6H1Mb4rQ7gqnQ",
  "key2": "35CcbPkd18uTjZXjZiEcyuPMPrtNGrzcrZYy75kUDQD5BTGcaPjK1J5xBPdvNKzv7fn1RgNBsM8zLiTvGCUiCcDy",
  "key3": "5BmVa7kf2gMvbxkHBcsmNmya13HX7vn6aMQrDmihkvtEaB7S55KmidhBtHnororz5h65DfvXcFVGAEme5ATXXX3W",
  "key4": "3NN71FfV7VWwJntbGwA638q2GBFtPvUq8JkWnib3FWFcQzkZyAHLmb3noY7DacVjE6WqYQmYn4QR4kmHY7rNpMLi",
  "key5": "43ndnLRQ9pgrEYx39da6q59EhuCY2a82x1iyxMWWfF44fDdAoamWVYG51XsB1PiowoyDjZWvgEAYtFj6NaukDTxe",
  "key6": "4xDsVvuxLYDtSwdfGaZycdkCnByR6srydKiiah3nZQxUMB36CqsUbrPWsa67YjDWeuXGBkfeJruXQ3iu97wRSLRf",
  "key7": "5tbXjyfPCHfBeCHUBHWYXjgxFSbAuf7YsACYFdy9968Fd5HMq1WkZAQKp8rZbbPvD1b1rizZEkNpxMKUBE8nK6VP",
  "key8": "3uDkKfGiStpWYGXQpuSD9J94hmm4yHFWtyeMEEe2sh2hMSHbi5nzzmbQ8nFcjQJe1baaNPGykTdh7oEGcxS98cjA",
  "key9": "4Ki1ooKqrBo2yFAApKTDwdBQa9TGBdob3EmX92DY5mxzis95o9cL9nMxFUAYSrL5QXiEX81Ji8WqZyhgjqnshhPf",
  "key10": "Xei2ML2cFzMFa6mYueqwFzx4JxsS7qC4Tpo297ejmiWL6ZnTaJiPSqVFxARb7aajbNuQG21zd2pfao4BXzuNsTD",
  "key11": "29TTme8STjouE1Q7vsLWRCRFXnbuQaj7Go5Jv6VpkJkfqdftjyN1pD2xnNWjPeoZrBhMo8R4Seh9WdTLnAJQYNMu",
  "key12": "524LcvzwR5cnN9gseFxfqqfxtwZ9NNY5Nk1wuzNzz5QrgwbBwnWeVLnsoDWxkP66uHGEuvXugANTvoakYiogcpso",
  "key13": "2uCsATkREfQatEW6dvTWzgHVj23R345YAJX7kY8AKkzfs7uSvtW5qaBj9BQsUbf7snyT8mKDL1ddBQErh4sveNer",
  "key14": "72hU7Z57dU2TVRixLKLCoUd1pYzjDmFLyAFkSTA2wkS5yEfUKoZ3au9cr7LKCce71XEf9bkbzKz8tuWcN4qVNFh",
  "key15": "4Mw5XbPhEweBtEYWhyGgxt19zdjpkto7pkv8qHSkKNHDtSprikvt8fSWQwJ1Xm5gj6gUpbVMDmHmpHCiwBoUG67e",
  "key16": "wDRVTeJaxJT7jJRoK2eomS6KUsotXnDtydHqfNeqNfm3E3Xwxp6gakzhDnw8EUigJxckv2qDmjxzrw2uaiUMxxw",
  "key17": "4N9tTvU4ar9KRnUsHV88eB8nqoqLfzjzDwoQ1ZHgANtj6LoSJFD1rDTi7KzT8hrmYCs9xnCPv7N8soyq5UAd4iBs",
  "key18": "5ApKzAxi7kd8jFMnEDWhAvyENzkNpyQLPVKcBk4GdmqME7bCBwjkVTyQ2wPrMhUDQAU2ge4JCLdxfovtxcnWfCx2",
  "key19": "4MD14ZcPaSE6yP3sNnWviefRhNwYRkecpRaUC62FYayVPSDgyZ7Qtq4zJpKvCyixpx8iSv93VqKTYT17U7FDUQ6W",
  "key20": "5rda7Gx7q2ZuwKuRAmfQhhw4XpCttcgyrhdoyoU49q6dbaLrRpsvxgMGJNE8CAKotuexNpX5fU7nWRwM5bmk9XUW",
  "key21": "3NtV1Gzwo3EQesN3z6hFNZdnG82QHau6NLRYtwYWWqJQfMVwbSZJDa8Tasa2MoN8cmCKvSHJGmZEt4GNWjHFcYnY",
  "key22": "3MK5XDn6BLTUvh3XEUrbnW81GgjGjxnUW2LPsR7L1EqUDervVujcNtz1nsz4geEwQyjgAtM3Tp6YTQJWyipWfbcB",
  "key23": "3rnxRTeci3esXeANjNUctRNwxFsvm3hfLzKM5LEBG6cddrKJaXc4yxEKuF6KbcijTc4TPqL1762G5BmnrCSVCJ47",
  "key24": "26ox4upzcrjm5YmTNF8DZoCPrrJhnBEY3ycq1p2Wq26ef1DC4WRxkikZgArkaTxyPy54J8Y5tPHHTgmaRxZvbJYF",
  "key25": "4eBSBJYhVJz6UeNwbxQTh8BLAKEUrafD4tn2Ma3NdyBcb1icf9PDn3pesHKTVMsRxAG39iYTp3fSzLKVbtMKbgL1",
  "key26": "EUTMpBFSsF9bFDupHKyFymFits9gNPX8LcFGQvnFW2FgeurEDf16PsXVRiw1uqx7WMNWbAsyNSuERDVQaoTVtZP",
  "key27": "2pJRuUCnCnaTGcNpbfQaoondLvUgM1jNatztEoYXjh1Qpi6X3H5rp4dHEf5XqHViBoHdxxTteweJb3rpb7RHxpBy",
  "key28": "3QrP6Qr1GA7VrXS5wuyvKiZRHha3tx2BNVeRnohaE7ovdTYnSk9a76jqN731m7mevh1r9bkoAhjwzmKeF9ry1QsQ",
  "key29": "4wn7AUW9GRcuf3FjSArSLKsWWorP6Hw28Je8oKF2hvvyxEDVdhnAw9e3T6v3d6nwVeqSqwjJEg5bHFQn57bd8rS1",
  "key30": "5wmUr4bGeNmBKam7koqMapwALD7LxyfVLKyY9cWU7yrgCFZyU9nYvApPbsCpB83h4Uxzxf34CX4RCjpegonkTuoy",
  "key31": "44swDWc1Es8wDUsEecapHfiwHhzbFkc1zhesFZoN7tRmajCiiJKiPBCQP65tJgN8DwFeLqbZubTnXWxjxW5vdspR",
  "key32": "25PPZRndqs9rATVBckNYGvqRVNwUshCja73E8j6E3Uoj365gex8QRL6qhfGU19eQF6UQPZKEQmdPgBtdb99qdexo",
  "key33": "5FKyRi6a6fds5JwCEHeBGAXhTRhMhQWGp5zAUScQQpwzkDArguX6pFbAKT98CPSabqXvUZ63jihdfUGMBeGKyMUA",
  "key34": "zoy3Ya6hGSYWYuqWG5Go1VbNhHsgbAF6a6scDDToajz8ueMXUTXqjvSqg1VxyY5HD5E2eByuNZFDV5X2uxUCVUh",
  "key35": "3wJ29HVAvft75YCNC2d9bK3SenXtskePzDtKCJeRAw3Fit3v9JrYvV3sfptTcBy9MUBbw3p37DCizSAjJitrCp1M",
  "key36": "aNigUbvC9LDP4WTfnk2WpSwuWPAKgbcCkUCHSiFkhyt1SdLzhBcwofmyhwethJu8htJWwn5vsaNBEFBEjzGzAvr",
  "key37": "BtgWdaWXvtoZ8Cpk494zf3cmNt9zDJH2T5KnkAF7eUkE7ovqBEWXictZ7zUHYgQKUjwvKiEVgRY6sqSKdBGpQhb",
  "key38": "5USbjCnqZF2Rckf7hhZPyD9fRadUzqJxG69DpNrKCQwnRyFph3guGxvGwsWJcoiqeFkduKxVMJ9nJMtabF1u9vuc",
  "key39": "3KmCt9BicKCwTdAvktjmZ5ZAfT7ZHDraGLjeJyDPMv5GvqMXnghPPzvLAmigrgothBzEJeJ7isPUvdT22ARFrnpX",
  "key40": "ZKxhUTCzaWKpk3v9Yd4P2RYA362zZvvq9KosgkxeYgPUABfrX8YF1pGRBk9vxWRNWg6bVosh6n8gHRJD2WaJPhr",
  "key41": "4bEgU4nurukrSbxsUqL9HPJAUhm8JBvzz9GcVXMdPStKR83rD4sCVFiep5KXkMtUBfkmGDTpyZmDvQRRe616ftg",
  "key42": "3og88Tf41x3wgUnF5BvoXFHkNeNCwPhpbdNn4Ss3CNAGKURaSFfP22eA5Fb3HehdWYMoh7WSmWMfxta2x6xfN8KN"
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
