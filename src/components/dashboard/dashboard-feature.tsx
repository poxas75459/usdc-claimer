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
    "5SaZ55rkpfvBaCv1RafJoRXqWK3hzEyXd6hZHmGMyxwhohMvRt7vZT6gpJnssP3Nj4s2dcsP4FGR6zBm3fjrx17N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2grxXXZkDH6C6RAUHheTRJxvEYcdo7axZJ2h1J4jyEUv4mPJSXaQEKXtcE9dj9CZSwY2zb2dibBEoAr1ZGxTDeiS",
  "key1": "wZJkEBiotj7TJ5gMKF3oR7BhzfM7yszPcoGaa5X1aoBaDxHL8JkyWJpJRBJrR3X7drAZsfpyuaC3XbVjKgmLghp",
  "key2": "5tZ1kYLHwfnRtwmsurocCGG8YitvcZKCb1RVHcEXex1EwRZiZb3twLUe7rsVWZccnFN4tDzrigtNbozNW7A6bfSD",
  "key3": "3XPQCNX8sjX4Jfp5eSrDTqEniaoLKw6VHWDdiaQqCAyKYuNdvMHJCSKQgCw56GBXcdiRsQAh9pn6emsy2h9HWVkZ",
  "key4": "3iPA2BcWB3hQuWvcfTAE7n1vrJKRnbkT6uQW4M4dsZdnvM6Udj6tg4RzTsSAk8ekuErkL4pZyZB3jSbLPfbixJFv",
  "key5": "4dqp4A11WEjmCk8ifsZEnRKhZrx2euAc8EsZQZzgav5Ex1bTXPNjr1WJyVAtd9PtKgBjEtqDxriMfsKE2EBVZJyY",
  "key6": "2bTmRNhVNUi1Zsp4qxWSiySNUEaVZCXjrR3yrXSN8yk2vcDcv8oNVBvmtWorDcc5SdhKnUxc8oFcE6zt2WgA7W6s",
  "key7": "3upvamFDCJRg1PqFEaXYyME82vPMG4uq5iNz7ZGsnSp3ixGNGkhX6zNT5KkiuETVn3xkVP6vLd3uShzkexWxXv52",
  "key8": "WVPNDKKFncZBdm3YcqdCQzUbZx5tD3Ne4JDC7P9hpRb5evuzQheH1HKRRrtDZGwXQWhJY48xVoARkKG5CxfCLhi",
  "key9": "8R6uqyAt9w5JNxaZJtDXVDK5mUxaTwHCJr1irve7gbPooFJmRgtWor28RFaYrgFkNfznuXuYKLeNkGqdkncwXDk",
  "key10": "3kCL4RsdPhhjnMajCT4CSnRSBN6t1oVoa3HR1AqHmPRwQRBFhdkTU3NWWZGJh7XAgC6WcGGFvtoanmJi4nactmbK",
  "key11": "3Z7QwnVw98ggR2EvmH4DYwwH5GoeCYa3db6aXE7BUKDXiaXU3zpJ4PUzoD4bX6QxC9bZ6h6BHiq7JBrGnFgnk4sb",
  "key12": "28sGPWqa2kUFQCCPbsXGdE5c7M3qU3KfWJnx1GNuS3X45tQARRuJntuTRcYLFZFuAoKpPiSL7KFtJdkiaomdq7fw",
  "key13": "4ruiZbFHnmkWzZiNjcE2etWPxMDfWovRSxyjCY7G1uKBLNLcboPhgo4fZ4VqnX9kZ3bcYPwPVCaMD9sMw8ovEXut",
  "key14": "3EoF4E5ms9kuTjANYSg7NfoWVj75rawDajAjjx6HzagSFULyAz1GeSQ9VCi7Pb9gqfoyZEzhRtDAFRXDPmqf5Xoj",
  "key15": "2eLkgFSRyNLPJrxiEiSywqp74RRZf4tKYyQFWZ2zY4JWnxZPVTiyQ8wK75gJrsZ7xm3NtTsoX7aAUiV2DMr7i5jM",
  "key16": "3ygYRDf7Ymm86wnS82BQC9chhT4D9XmugZtRkmsnMDeTGxJ1zMetUGe6EqzqRg3AEEmRC31ZC4DBzFSARBAkXZJc",
  "key17": "2iYX8LUMWRqGF8aq2E9knHZZgf684UQWmYKh9suzbaJjBdmeTu9fXrfBqZf4YCRoyJoSR5hAps2Ex3aXVD3M3KQ4",
  "key18": "oe9HF3iPTqGqRedqtwmJvEcdAwourFkYAC3pKBpCUjVcjLjutj23uHQafV1UkCGa68AkT6Q98abqQgcSM1cK1vy",
  "key19": "2RfC9M8Q1v88UFP3Um93QmTxvzng4EQEZNwKE6F4hx4SazaSkAE2qceDUR36GQFR3gaWppKmsefUVzk8GYxvnJFy",
  "key20": "3Bv42tUa8wG1kxrRJHkLC31YngwoZNowea986WUfz257m11JtsvNuQfaSzw78x5vqSDskDGwWsHhZrQVtHwL7GWj",
  "key21": "3EF7MT2DaTN8cCLC1V9SB2TdocMjRJQxUHEfJupkCw9yTBQYi4JRocP9KZUENbdxzyS2PfijXZ6BaBoW9RfmjCp9",
  "key22": "43UMGmVrsFFuSG8ddiAUxKx9TYgmiG7PdYCvueannapxQbyALFjdiXjUXjjtcEuohJ3FJEpQyNtHuyuAjpR1GX8Q",
  "key23": "2xtdvpaacF51deTcFr7th3HZspdnPrex9jG78KyD6NNUhJho7nGumUBkDGzU7DqCC5s5BfU46CiLHqit1HhAcwgE",
  "key24": "34LpEAQWz2pHGyuwsknRQwKAu4Knp4qE3X6HfvUTdNKXgJw2WjwAeYPG6Wqi7W7wVGeJoxH9xwfWmEgdYJZUP5Vw",
  "key25": "5Usf39dcJ66VDyLcWkRbaZR4vsRHZuzyyqdtcm5XyWzQKVjeMmZAnzp6h57kZ66CREVK9C5JvZWH6WRof6KBEtTd",
  "key26": "2bpi58Ed8JTDsxGnomTzirgk14EVrPLxjWQCxmx34PN2cqv1HxDxZeku6gZEvYcUjikTCfujimaphFA4KSyqoL3m",
  "key27": "3gJiAG8urKNUUqjTgtRvuLChdmxRgBbA2vQo9vWYPYDV9ZRfRAfhazbXmuTWi3WWawxSsjBb6DmA18iMJd9WDjwn",
  "key28": "3wGuFvyBctvRH9DQs2xkBa539ZkscNC39SNrrVnfwf9ettMVYE3X8PNhak6XuhY2kc2cPhtFiFSYue5sbSyiSS3d",
  "key29": "F7U25N1toyjs3U15T6TSNL2nqmN4RnUMkUfVUmHif3e4uYgkEJUnsY1ehwPmucqNN7ftHmwZLdmXpLrGKUMSvUi",
  "key30": "2Ln4Ri7Rv14u8Qp7QCA8bX1PSCTbri9CHw2g5s49kAMb7NQJNVWUeGX6UkFE1667mWrdwATHgomtWwGe1z6AdPuN",
  "key31": "5fuiTBzGA5Tih9cDKWLRFvvuYkJQAQsvxUZxSaYFbSm2AraL62rMN94V6EpbfaexnZEhunXpE2NdKZAATnohn3M7",
  "key32": "5RURr99LQCNCUDdisV3updwkQZjByifHQ8PiLQaadY6mVxBsJWJboeqmou9vQHzWGe4CuF6tiiZcehLtBBNsaym2",
  "key33": "4F1L9eGJZ7jMxaVHfiSaADtVqVVMvL1e9HKPQH9wEGYdRJGhSyQZi5RYGQUaDf3FwJc48qHb3JM5HTZ5vJS5D1nQ",
  "key34": "5CKSmqNymLgcbUTkyKPpdKXZhWFUhmP7FMdRT3SNKu3V6DNvW785bVK931tJ7Dg8ziHXDwAKyJVi3bZ8hJqid71P",
  "key35": "3fh9iWTYwqxyfwBDR5GGTVF3sFcNQFCopAfgCeEGxkfM31XFihYiDD9gxCXoStjyPN3D7kFY2sRdyoa4wYxZEhkX",
  "key36": "45KnhgLGWyyQVj1asa5Gi6MWs3LC7KZdx56RU54BQHLCGHGkPCdBKH6SE93afJnz8xywAL1hcJbCDUPfk8cSKMxh",
  "key37": "4mnYuzVAhmeAMvkxPmojWYTx31j5TWU3BmhBEXgXKBzncB7wyATCvaiqskTeHowTSGyvML228BJrq2nKioVMonqw",
  "key38": "597jQrgT9t9yapB5uQZAFuLYR1pDG8njDJYcmZkYhgg3B1DY1oEXAUoce2uQX1XhEijut6z3KmsMymmoiKZY2Qa9",
  "key39": "2anxege3NxbMtg4ba13gdAPTnNhGm9GktcecJMNqYhihT34jNd8fv1b7KLxAchhkZ6TT6HTpyA7MK8hhCjv6qkS8",
  "key40": "5AzRyQRnEYxP4rs759A1QgheP6KL7uWwHEJuX7g7cEqjq7mxAACk5vyQHxXJpYhXGPv96przDn7oAEQFrmA8oVXu",
  "key41": "2af5pTgHmJxhtKWKtbECjqZVvCqKHe4gXAfpGYhPP3iv5rUHp2QD78i7HMqiYYnTbyZGuu6hgQ15c5sczmuNUmbF",
  "key42": "4sR9eWBq7AkpEDGfbBJAutJPctk3RNzvEHsbYskeRai7ccRvYMN1nvWk5vHRe1mmN6yPqRk8ox4KzcBRB8yMUooo",
  "key43": "3n2E6tG7uBPiQ9KJZhbeDRjYdBudF8Sn9nskuhauDJCZaJYHWZanAzZLf5ktSXxCCqogjaQRHh9RCLQiXCnL9ZnM",
  "key44": "3741PiamUNSqyCyJ5K695yisnDLsqycfKMiXKJyaC4hTVjdXptXhAd17xy5cScZYUfBj2WSRG2GNVMvoom8GPdvK",
  "key45": "Dk654Lw8Fr85326EnCQmFut6rLgWCk1utfK9a86t7GGY4xhikdS5D7p1TMnq6Hxm8DtTDAd2CR5TGZ4s1aDtFXM",
  "key46": "3ugvQRraYjwdAZ3JQkJXG8WoKTfERGAEEJmRt4ZEXvqUbQLsnbgvyNeJywAhdhgN9To5T7KV5J9acykZuXuBhXpP",
  "key47": "bjw3uD5bU1Jow3pDjmiymEQyQ7bhMebL15nkmR8JMmSKeF5s9uthTDz8632iUiuJg7TsLjSViJ14Crhr3fVAet7",
  "key48": "4JSt7ytrUWWG6SNfVcL1Rry87Mx1tNSeczZxuGA5adqM5Q3REdLbfRDQxPdKhNyVqq57c62NuSs3n98Jr2nyb4qU",
  "key49": "2wYieVi3dKVhjRBEsPeRKbvYDvpUwysu4iDx8xKsmrTyNBj9p5vFq2ENR1HfSLQm1cqHcKjyBK7pgQaCaDUuiRcF"
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
