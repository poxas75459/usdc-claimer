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
    "3STYq6o5UfGJnhacgVDomvc1tEG3h3fwuvJaQt5kybrWDEGfLqozr6PhCAKPdoZ4TdX9kcErWvqpX2B7FeFTa9WV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y7vFQ1huZyNHsmUxeRsMQGegjBvVKMiHfgCDS5AcVXVqqmp7qaGNfRZoGtXVKJYw6aBazU81QRPjKCMVZL7BmmR",
  "key1": "31SzA2fVR7N8LKgHA9yXVXFrt1pKabvZmo5mb9czEWXtf8xvUryEybz5YycyLZ2mfrzxwpPmo4xzaKZ4po6B71fQ",
  "key2": "2YKmy2AGxtDoL8zHetVaY8kdeGiqgsemwqydFhsG6FG1R8Y1ZD5MQGq1FuKLLJToGi84cuFCN6tR2bJw5oKq7H3c",
  "key3": "49q1PQ4zxeG25jgQhqeqNKBeFfjawcJJ17rvADEmgobbzGWkfNmFY6qciWcsruCgA1X3RFT4HZW74GSpRD7v8fk2",
  "key4": "3UW8cthrEMCcifT3LknmtTbqWeH1v4b8YdSnbqHhxZSoZqRHK5NpTe2KSxaPJnGY5AwDZgeD96PLvy5iWVCC5Cm6",
  "key5": "31hE3Tte6afZH4gNaCd5zfHSna9gMh8LEN4txUQCeeAn4dmbNXLfWHb9ij18c1Qabdb2qfbJ5s2Xo1MNcA2hfYnJ",
  "key6": "67oX8UvhCrQ7tjLB8bqoTLvk5W3zLXKTNdj46Gxnod99uLWabPPaQ8NcCwSwYWQBKro8xjD7fLcvj9M7gjW5158n",
  "key7": "3S8Ysj27y3jeUSHVycNvLjKQGTCxjrqBiokKa95zb7LBZvTCnJB3ntwFC9h9UDWznBroPx7pNjMeA4DVqyPvNZs9",
  "key8": "5sEmUofPi3WQkgjM9yioJqh9zFnpbXXoZtULQ3Vdgnt8ve63s3yHrvCit6ri5XWVBM6toeXXLR3jwWQAcnBZfYZW",
  "key9": "4tYU4FZFJb4TSAxkKAukckkYkAQ8snSvhzdDjbRcTStbzDBCz1q6unz9RskYyfHg38ZKFAha8dwLikJC9t6EwTWu",
  "key10": "31gBv5J6wiYq7tiyXZDUYYqYtQSwivj96iUEBBENV1J4ei6W3qeoyBnK1SVsZpFiKCkaNJDhUt4e4g6SG9wPNSoU",
  "key11": "64VbzboAYhGWbVefDE7WLVjVwJvbfKLArY2zmE3BQs37rVz85DJexBt3Yy7qSdXZNfp2qs1PtZJUzsTX26rkow4Y",
  "key12": "4b84LQcKXX3Q4n1sxSpY1abWvXhoZTv9ecaVuzxJG3Gpi4SWSa5zM1VEYSBg4gyudE9gVaALM2wLHghTGvzu1zss",
  "key13": "5ghu3w4Q2FNnp5Zzm4ipUzkuhsCbDKVatoqrQqyZc5628YQ19gEi1Qg6LMiQdN4qEYcNAxiLwCAUBL5ea4oA8YoD",
  "key14": "2YV9j9cjbBcXGyvFL99XP72tadBp459Ezh6JFkJGao4rwxTqXbvVRLLMWLep1CQhHFHwwQhmG5pBESv6xxgDKixE",
  "key15": "9xF3HVcq6atfqbpsFacj83oUws1UQxB6VwQZPtv9oyEH6kQY3KPg3yU3q6iyMXQkxzHhBfSDSg28qHKkSy4urFE",
  "key16": "5d5pqQQg3MWU6PNdQhVQyMa5yWkfzh3zZZe6V9tY8gStpMm7oFvMdCGe9KicjJucWuxkNtU5Htb5DXCgfpdk2NhP",
  "key17": "5EPXFrhV7vXbtkm2M5E5vhsq1kpx8Pr7FjW2X8mHGpEhfvqgnBPiaty3HQye6fXVNjTjBeRmBBCzyWBRk31ysX84",
  "key18": "3a5cSk6Qd6XiT64csm12QuNxRGuN2AApy71MjZxrNi3tcnKw3kDmH5D66hpsKXZkRUckJAr75N85jbgvqMsQcbTb",
  "key19": "61bGj7xJzF1AA7WJMSAYkzYps79mQU1uH5ic53uE4wB3p1MdXZxXFtmeZZyh7BydP7CZWcnDgLfKfxjMrc5wpctF",
  "key20": "a66j4W62jKf82ZZcmjxHTjfQeSLvT3R2cfh7X1bGtdzRGmBWSgfqJkua4G1zUkYovJczy3gD6GP4yG7CAmFd2NC",
  "key21": "ssU64jUpeh37sKhnqauryzwPf5QiMHSEP863w8vyzPtp1NuUKDb76htG3EMXsRoSTRDx6Vf7rChFDoWbJgvqo6x",
  "key22": "25odps8MzMFh885juYeyx7WbpZmBHTg7ZEpVQaoNyYBfUd3e3JXiRyZLZ3j25z62HTxpssud8Kj17ojq4pTZEVof",
  "key23": "2JpWVc6zT8zadP4RJAXEPGa2dz3TBLWPAxLdMbCrfdAikmhzX3AQkTJRNCvX5zZvUQW6cMGfJyYCD8C1s6mDiT6S",
  "key24": "46nd4yHjvZ6T8UTAY1PmwLHtqf2bYuwpBneuCMC7zyxuAuWRhP6a3twwSVwgh1pcrEo2VnukAS5kipx4TaYUi73w",
  "key25": "3VnjAUZsn9dwtZRpPoYXgYy76SKpHEqSfT5pCSSVGvUCJaaVwFbEqQbwueqzKzCyhBEQuZVwKjJv5itFZQLZXuw6",
  "key26": "4rbK9TYJ1MWjqbmaM2XpFovcufAj2dBTGTaZjcWLiwiqq8DSNb2aw45DBhPFPn8uMkKXhGneewE1cruLcvVAVfgM",
  "key27": "5aSVcgzWRVKCbsoJQUvsdpWa6FHTB8xJuLP8UrbmSP14u1zos26Wk63r5SsKS9Lr18H86KwC7sYumULTip818HBU",
  "key28": "2fFJXqfX2okNkSpaogotgz96WaxVGufxagn9Lwo4LRsx297gkjYqRobTYRnVcvfjomWvbjhbA7B1ycKVJGsh7ofw",
  "key29": "5XRkFoAHAhBgisN7oe9axJWa9UiYjRsaJ7jD5LMDkpaT26Ujyv6XbhUZeCmiEoavbhVF8kixSytBKADDCWxLXX1z",
  "key30": "3t71ZCfw2JUPwn5FnPiPn6q1pExeyrhLaDz9aUcjFsPYe2e7FJEC7AQd8RhtPVv2iwaTYUDZ2fMX2LW5AsJ5Det7",
  "key31": "5stqxVnzLgLxF8UyUbd1UrEVDccvAYAahhGmh2tNzYUuqF7V6NciBSUQizCTj3Nsm3hUVU6SaFLXAJWRDVANfDzp",
  "key32": "3h2QjxaGpLTH6ePXKEtpqaEPWPncPDhzmn8dKfd2XjWeU2iB4ZxmmsKFGSceYfkbg1sRTNQGSk9GWKoZn7evKaXL",
  "key33": "4g6WM5u5JVoASsfmK7mmCattZBPRxvnqVeJRYeA7vtifWRrtNc9pCAq9uRA3DXemWcdJMGLiin3z9WbYkT2CDKgz"
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
