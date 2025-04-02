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
    "39A8dQHvoVGszyoGkdiXPTQCQSoKDb7UAprSZgXjix6MwnyD9SeYdLqBr6CqvVcasy29knj3PQiWEEmtfHgfPhJA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wtXENVj5CKNbEGEarLoKMdrLK2Vb2kZdNCjd3DP55ubkc4L6KxRnDwJrKGizAEp4gXKZ1ZUppJ1sBrya166fdy8",
  "key1": "4Y9iRvzWYDXCTfoPWUmkUGVTSvGJCqPBauKfBUYP17WXwfe7qR9CVD8ikTf8Le6gTjiuqpacRmEMRpiq8b9MebtA",
  "key2": "3sVq3unMsyKczxviBpPB2LiUYa8zcXa22WYMXm76ubPv6KGq65ZMwzrLc9oWiDAmMHU7wGKNiT61pntDL2wxeSb1",
  "key3": "5bHSscNm6KC5qJ7V5o2jxuraUQ2MJAb6knoqhUAnWekfACdtXuAdNgiQ8vGBSyQD9mi3SEEyXdoobtqSjALtpCuJ",
  "key4": "gXET4iCGQo9TPjiuoMrBYEjFrZBHgEyxU7Lcy9Ls148XDCJW5PomdDvvjCAAhpxRxb5kEK8mF9JVAMwpYmcWMFL",
  "key5": "2M1bF3L2PFveqVXN1gcGKCJBhJp2jpRdRecLpQdXV2hahkUyCViUyS9cUPwTBekcErnqyACBsDftptirA4VrQMjS",
  "key6": "4vz1yvLDb9cY3L2VZpwCLskDXoASCxfvTdHVKRCGgewsoA1c9wycVMhrL1jwVQjixsniB3fCb5PVU7v85MY7szuy",
  "key7": "4qN7119u6rEBqMtFFjMw9tPQReewem6oCyKG4UtkyUou3faLucJnk5uUX8FFeGyJ4Bi2gAQNz2TwnQeLZMfMsCzV",
  "key8": "LX2U3pXE7R9LDdYxzUtZoZozt7vfpJ3h4zkWRNGtpfk8Jih7cc4wJEmnAfpydfKTN62sVAmyzD9YoayR5VvSS1M",
  "key9": "44n7WyjyFSSQ9UW4J5couu3fGpqkjd94uU2e1xY9fxAQPH7YbdsrqzRrk3ztcpVTFFfuFkAB71LQLdMeT3ni2xM9",
  "key10": "7X8nATXt9m4xkPrakxW7gzAsyREWzDsfCtkpJBFsTxzzfuqzpp8zaiuf8oiU8SQcEoKTSrW8SzMjRdxzap8Cz3B",
  "key11": "2ydy4kxgPVBKCDLsS1WtEixtYiJsJWmwutXVfeQHARdo7Mv8LtEJ313WGK9TN9FYxiSc5bBXkp5nn6BUdgSP8F9F",
  "key12": "cUjiTpm2Gx1ns67uJu9jkeagD7AV6ykRBkZ2z6LYkFw2YodnyH6yaBi9FMurcCaHKX1cteT9HjHyWJtJK5QBUNW",
  "key13": "per8oVnM5g9SeiagNBRQhLKMAaWaPLuv13gKi2np9ei6AejntU1qpLBeqEQSLFSigxdc35jHpCH6JmqaBDzMwVR",
  "key14": "3AzTB9hRWEcQwYB8e65hGL9ucfPBWy8NuVCQUy9nh8Yc4mGQV7iXW1ANUDdqKFY76izVmMyCEFFQ2bc7uVfUPPG3",
  "key15": "UpvSMQLfuNZ8oNcsiXj6gLacpfYUknMW9XWcsQEkowchYXMsY7GC9jQz8PwiTqV1tjS4Pz6MWJJjTrtJ1pn1N8W",
  "key16": "5P5Kut3Qrr2iCUK33WzZABwAUs2E3bgpFLh8RbGeK9nKwL8N9DJcUThMywHepDSZvrgYr8pTNYMw56z1YfjrbVHf",
  "key17": "4z6s9w6ViUFATefxC8fcWtSER3DyxKgt9jndpupcwKvfsGXQvXj8CPXsrSvBRnwRBUyyMS1ECm44WbVxiFNC4EB",
  "key18": "LyekPG6jPnQ3F4WgDk1qSKVgcNvhe3oDAbHjci4nAxoRTsJgauizEHJ2CtSJeMxVviX7kL1fWFrESSevWmbVykc",
  "key19": "2oHiJZF6t2SpZy91LqnfLggQNd59Cwb45LbrpVJTk4dQ5NwtNzcB3cFZCwJEE99ZmSwUixkxawaHRPAPo6Vch2Dc",
  "key20": "1VK3n6kG2sQJy7Vw78yaAMifyqgNCNP1yn6CFP8eevGqBRU6GLpavw1bhZjPxZ9zeGyL8mj5tyL2YiCwJ9HjYxX",
  "key21": "2UR4TH7RmA3gkTEJuoXhkoFCS126iy1bRhBTbYB4aVQUs6qp7KrVANhgHyNYScWyimKT6CWG8HqqWwHfCNr6RwsK",
  "key22": "3im1dRdJzEAmvWqWefe98AkMN7qv8Wh2k9PQxvEUwAd9WfzpyhXYTuEYjsWfDrK2woPQCq76dDgHZLEayiP84s2L",
  "key23": "W86FS19FjAMHDT2b2NHaG4A5bMFkGUoaNkgA3ctLEJ6GPNxCPNiUfFJuc3NmCBQ3n9B7zHnMHqjKGvKBZts8ofD",
  "key24": "3FfznMzkP7hYMVeiSxW3MecB2Qyp1jv9y7VUBM4X7X8HgeDjY5Xu9d2Wmir5wbQPcDMNsuMjkHNY1VsE38YWKwGH",
  "key25": "wBUfxMNoMVtLrs79VpeJJBGtFcfVQA5T1kdLZgJ6owrZUY8xL8wXKjVLj6NSi7sUHiKTX5NSrJKScuXuTJBnHrD",
  "key26": "3KmY4NVsYWnTfmEYmHkQ5939FLtFQ8V3F83K9aej6giTsYpoFgmahii1AHdU9pAxJQNRBWqQqbaAx4ZF4TG8gZEL",
  "key27": "4dTJdFDZy3kivxnW22NpbxCSQYDbnur3wt3aVbtwABeh1m8jmcynzs8UB4ZycWHkU5QQgVd7dtnAaXw3P92cqdFi",
  "key28": "5rMuddUQrimECvRPG4SGEmeAA1X9Cvpj3bXcpVmdHZ4paQ6z4N6zBkEiXL9JbvLFqph1kzeS5v7nHZZ4jkMRNf1H",
  "key29": "gQHy1ZKhUi3EUX4QXhsciXsYSvqv7AGQsQHjzDSFPAuimYXGcKgwT5FP7vu4qzgH7dXURQzemLPih3sFvDyzNbW",
  "key30": "3WMDeiamQe6ZZ31RVWZK2mx8AViLi3yuBaVoWGH58aNVjcCwHSjgcbeVpzDv2CHS6SaYFZJnGfSn3LCBrVaWK7ru",
  "key31": "MoSq46YnYxoJQ4reRNrsPVY6AynYeNsPB4X9Hbz1eaVV94u7dsRVnYaeD4dDDB6TnUzn3py6W7XntSdkHkovq8K",
  "key32": "Xb44fvtRoXiYBSmKw11mJ7rKWaLaqJU3oFG2xQSF2H9VvNqBNYZXeuAocV3ef5EyR63vc3iEnXbF3McDLxbuWE1",
  "key33": "4YHPy8fgQaRAQvXMNnErnbxqSGgbgJkP9S7z786sBy2Ee1Gw1cHPy1145N41mYSXmGLXhxBM1b6HhDvpyB9k7Y5U",
  "key34": "2jvaK8MF4nr1MMeGSDHrZZKWEQFp76vpZX8uSgLfwRPA1rNsLbRq2RGnZt24pdXnCFCTUrBnhwd9EzoUJf9BAgdh",
  "key35": "5YBHGpUxudCrJ4vStCx73JxbcQbx6MFHP6N3YWwNqpYxhqdUff4kNLwMbuSwx6c7Yfez4eKUs3H9REjP5osxwoSU",
  "key36": "WDSJYPf6iUwb5Ju8EAnhARCTvY8mBxmLPte7Vm51532U743wonMgSsceeG1fs2hmg9NpRvVCMtK9Qu5Bd11W5Uf",
  "key37": "3JcJ2evetWXd8WSpm9LRqgTTRNxhXEi67H3nMwhL23X2E4c6MsqCgrJdBb9Ns2Z754WpmenE7axLtpmzU4LJtdH5",
  "key38": "3GtaxT9vE2DAmTKtFQ1fniCLfFTa4yaThkGfEag6YB1LBWW1WzrhdnAi2oee2ghQnr7mK8gv3scaHiMfttzQXnGJ",
  "key39": "4st8s28WiK6QnhfAUXDZ6reteHGzXzZA1DVFU62fWCuCmLNoYtWyNE3sUcPMPbW3vJgU3FftxJwRVoevagsMwC3H",
  "key40": "3wBU2emNGxF46QeMkw6bTXBaMhZ2HScxmeVUqrhuBjFQTcJsMi5aU97qhuMKcYQM4kTFjhwN7F86FcMnG89z8eGo",
  "key41": "2HKF1n88ZyQcUJG3D4WcDCwg7yMMHUW87QVbHocu5U2JAeLU5BdMAY5ycrhn4tSELWLaE49UXNKSmdYa38TnqAP7",
  "key42": "4cHnbMqnf8p3VeuHBoX271Uu8vqrTXt8kUu2DTq28qKZvExqrZitL1C8Mvg7eZ5c77WGKdKXZH54zY4bA3n9b2UZ",
  "key43": "2gsRvq9eg7u5uKuqm32ovojAWnXf8Wpm75v4y6UW3NJtrat7veK8nF9YQjgfLffGYHZcjmNXPSQbPZqaZBdJxo22",
  "key44": "63AhmtpMFU8mEsvNyVfDbcfnWVc8negpYo1MPqNNj5KtzSAqN1cuKFVGdYf7u7NNWLYK1DfULU2G8J14Q2DkwKhz",
  "key45": "3NsRTyQubZb3Vx2hVaRj8NWWAr8ebcEWCNNH54vWgWwWQfqeqvyXmKg4irxzYoEQtXbL82panr8M2V21ieBwpdkT",
  "key46": "2DRuMDxtv8WEpVwBPYHXj4ifqDr29971xwND4tV7nTBXoqzJeUDz87zX9q2ZqPCt45tE5PZXxfP9ntpBwZqXgjwD"
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
