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
    "5WFkKTSVsbViwQnZpp6NopxQUEcim2X2Zq1yPY3CqJYhyDYAMbk6kccNBKsgrygiLHNc3Y2Z5gf7qtkxZ8tR7DXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZFTPFwdS2jph6YcmqgZaqNv2SaCkWQKLShVVe8qFMsK1xAvFZDy5H1P7tV9uoBfS9MM8bee1dcjYBG6x4UkKYki",
  "key1": "56RxePZTtSvyJZ2DXnrE2eTZ9NQCWuyKU6zHA4PW4d13wsxSMkK4QE9361HTEwTfiAG9ok4uGPQ2g6hLm7kNuc57",
  "key2": "2hGP6V5FDumw3UvEGC8c8SUjN4EM9wV1nZSLdXXMzSxVSuK87oY5TXDxBwYz2iwezv3UXVhymbNRQjPVT9Yq8xk8",
  "key3": "3ZAeJMED6ah8LZhkxrmUwkBMF74KPrgsQySTc4aEmoVwYyWsPHdryN9MVdhWEi1w7omuDbrm3fyK38TJkPDABdju",
  "key4": "2nw7DMk2CGCENNxGrBgxFSqKXhCfR14krwPcywz7duyRnEXUDZaVb6E1be8QNga9UNqT45Fq8c5anRjcF6qwnJGw",
  "key5": "2j26dmCGthSB1Upt3V3YkDwohtsDvzjAuZm7gPswxdRAs7Wy9jUUod4n5Vkkn5xMEptduKw3ACoXHo7tK35hHpVo",
  "key6": "418sUkuNo5N1Einfvwt4DHz5hLbvvxPYWbSQe67ctPdrfG2SsdLt8FVxdAGEmaDfwSsz4p3NqRkkwc8uMDBRFm3m",
  "key7": "4mNqtujcESPdcutFP4HmR7WtyKxwVyT8kE2RHTCBUnqkid5mAwomzpjNEisd8887xjsLQsN1e9jtc8TxV6Bky91N",
  "key8": "378115j3yiWK5k5cWoG7QjAqjRjsGJbsz1VzCHEX9wWhn1eRLFJ68o6VENWFgG5Me95tBFW3EPes2rZVFKmyLshS",
  "key9": "2B2kpD9hXSKKzov9635w8poxzKcYvnRCqRJZTubxwwPm6trD3iLTicjwrwGXZTZBHWfWsBzCXKMVHWsnStW8qohA",
  "key10": "tAXsfjUBJiWZQL8Xu8FxkSgocinkqEcQZwB3ddxcGnfQktwGUSCtJzeASjnS9cNJeHdeYdUt9dpozDuTLmWZoqJ",
  "key11": "5d9U1G5PmE2VDTntgc1y46kdkTzSJrp2SCD57kwXoMd9TXfzqPt8pgZJgKyVVGASczsceMnFshuExrGnD6S2cEUy",
  "key12": "2yqcG7zCQUSdXPK7dHSuzjM2yX5MgM6DkKzyFGd8L85ZY9w4DijJTNxE2x4iYg1sJXSfCRG6tdhqNLEs7f7WAh6n",
  "key13": "5SGxMHetf7AqXrWgnUUiPsS6K5FxHv39tYHkQpwhy1jSij27wiQyYRdis26gQtKUeuEaGM9nTw7ksADAZxW5J2rV",
  "key14": "5Mip159WDCA9fWPE5ZY7zfHqmjTx7eg2Vyk4Jd66JZpwKyZorS8TBTNeccHcgx8cr4V14fDAdmEyjzzhBARAFsZV",
  "key15": "2z85Hxm6jCeKeUUC2TGGP8AdkEAowKrK7qzgUmzCypbZfo7SeNTt7JzEzPAYqqEKzt6fKjb2CH1bndmajbS1HgwM",
  "key16": "3MiLd3caF8Xwzast8gk6jTrppGaXXcabk9Jh6vJ2tV6BJVbfExBJezxZpPqUDJT3M3DL8jdRS5sFmPcWmD42sP6Z",
  "key17": "3RT7pcJtDFQnXrDJHScauaf7bUsXE9s2ZTKUCd5EbecEfBM9EJnUy5skADNVNL98pKKZqktx8McYNKZVT2V6ACKj",
  "key18": "bxZcPT6iMQCa7KajzeNWDibGPkYLsBXwXTML5rGR33JwVoCREAGiNRc7czFVsi4VQCcgBS78LMFuxyu9WNoHAq5",
  "key19": "62daAgaqxazhnBtU3jrkPjyibmi7ZUyswUkyaNsU7H4eXApWsaa6zXLZnmJtchmHacDAyAhqW2oGxeRbsy3Y9jbq",
  "key20": "jwoohbczudhMbWPXJ5Zr5avmrpD3kEXXnAhKzLmxWsHHguyVPsKLYGMGFuTS2H8un1hVM9F1SPdUsx7p5ySFrVS",
  "key21": "5inuMdXpZ2h4sckBHVucQKdhjLCtBubtTxR7zuEX25wyFEZsWcYS6wygMddBA3sqsQp2bw2zZeGzNLsN3XZcHQNU",
  "key22": "32mykBHBupRRG3VqQDHcQd8g5mcaUV9tGLirS8UYj6nS2c3RNJ2HS3WD3VEWANYhkcRvjJTiaNVRBwhAth1CweXn",
  "key23": "2uvQ8UxX9NoURCkPMk8QYMonDx227PbJ4La4xYYLeiw7dS3jifKv2ozdsPHXtvuG8JyUNYpuBcitiAGpLmu86t2Y",
  "key24": "gQ5asqKnjkFrw8wbLH94hU4mBQA9ZUZNDZBvETByoS1TqV39mQgCeB7ws27ufazPUEtvKrCCG8sG2XpViiGBneu",
  "key25": "eT5fijWffAzjX7dhvtN6iCMaZSif4i9Ha15NmwqrGFqoR8wDuipCZZwUQEmNH3r1qHD89cG5LZAu2uCnVE9rCT1",
  "key26": "2vnZKYExcAJu1VdszRDAWFJCngaqaPEr4vk3XBj6Uxsc5ExgdNpRPQKnFTQhi2AMBeRkdqudzeodFjAb622Podzf",
  "key27": "57v4RQktXmjVspJ8UddxtKKVC685UTSvtK45hPSjYNWNmK3cHB1fRrGmzcvyQGSESYkSBw6W2DkJgQ5cpT1LV6Cd",
  "key28": "25sKDnjPQTdbcBnFc6SzDBCpL3gUUMK4nnmjUk1CErniivVaV4fcJTaPTreBDf1KUkurg5FJ18q3tkPjB6qmDPmb",
  "key29": "4RFY7fCvSjLu7Xk1ANNDojFQEVr4bPSda1FkaUNspRVYsKUH6r77K9MDmVvuwvSoHVPuBkAv61bdLPp2rAeFLTmZ",
  "key30": "2xe4JbdHbpUTMysPqVw2RyGVNpBWueF1iAAxVa1Sf8s5h2yP6qzD3qonZjb42Lg8CxuAjfeeH5jdXjWeASGNwbsM",
  "key31": "2VAX1AExgCsG11UB4Z4NXDJAJCt5SHxRyLYPGo9VFbnkvp8PU1uwu7XwWYztgiCSumJcz7EVAnHqTpobnkzhByGW",
  "key32": "3zqHiktpV4udi1hYGHm3vr2TU6RbFbrR7TfE6Nb1hPmtfqvvAGpAex54RXeW6Tx7mmaLoefABZHVfAj3iQMR57S1",
  "key33": "3hjof3yLjxHmhayz9Z55CYqVusoH2vtrbuvvx9SbnATv8W72znNL5U1deJXJJEhtzJ3x8fVoVTAAYb9MviptwmcE",
  "key34": "3BheNSq5Furmvcvyz5JU4wmamWGAnz838WqWwQ5nYCoYHSowB6iHVAjhzhKPZ8dL9eqVcQYXhzMPFrAekEi8Br3n",
  "key35": "5NM42g7fe1oNDBHo5hPmzEPsgEcrgNEYV2WN3s13oKkjcbZxM1YeBAvZ3iPUm34CyW5ZNNZQM3bUgRbucRPsCUSx",
  "key36": "2LGnN44DTMusCTSMfDWuddsZDnQ12gp9SyCoXSZwsNbr6b27obhFT4KMcwkH5NR8Pt1AhXYsQYz7UmcLbnZtk7j2",
  "key37": "z755dgW4ChTnGbqVWMrgNxW6qgxaavUuqHqhaGrD9o5U34zi4PwBymHybV2htQtsQpjPXcx2cPVbxXhT7Ys2xCc",
  "key38": "4Ut6cjZRTUSBfirVxd5FEEmTCvpGAao5hGAfzEstUtct1AWDG3TNMWZVRK4Kjane8JrYy82jLhPPcyzVTZCPZBjP",
  "key39": "4xRskHd6E4mh2mQwfw5v2d6Wm4eCaawxXtKoGLejjmoFptxkZtmDkAn6QrvgMzPkdZfrhvLC4sMX29iSVXK1AeTL",
  "key40": "3DUWiQBSX8h6kM7DzTN6KGimrgmXvEtRegMBt58byyxfUBKUz33Fa1cFvgb61si4yWUZLWtRjfk4Wn1i129MCcoJ",
  "key41": "2Uh3E4CMELZRPJYp5cN1uJgvwyx1dkVnmTwKLGs66YhNGdybyjgXCngxxjUWUndyRu8h8TLwFTie9xPvEfco94Uc",
  "key42": "4JKbj1MFdMqHnZG2szkpfXsUMmoCpevuANaaAE2sQ5sGHfYiBcNvH7Q7TwcmEWgrWZYzdc8u4oobWVV1woum7KH8",
  "key43": "oU2FQNVhH7dPYuFGrvxXDURC4CcHQANWp7vstGvpvrTh4kjYWu1U1XUcrvLFTkntbUmxqjoALjLUq4YzPSNKBeM",
  "key44": "nn3iYHKtZZi1dcXMpq8Qej3nzNdv3rmXaRPyPKVTNPp8M5hYHxZUQvtiED7WffBMPoTBmresuXJdhY3vZSw65RS"
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
