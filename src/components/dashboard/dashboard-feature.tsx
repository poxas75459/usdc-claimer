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
    "42HdBu68bNSG8aMh4H5uAJCn8Y1TjbhnHqr8mVt7yf3KVQgfGG3dJDyG5DUfLC8UmkE1JnMtXDm6HQE9wWMWYEGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KJ1SHdxiEcxMG2r6prk64B3WDMRsNiC6wPg9qUi6DYxXsNQPCF3SSvCjc7QftT3zFNyu6U3NDwiSprfvkHhywKp",
  "key1": "veAxZop6zJ1NyvYJjte8iUL1Gak7Aiv7ApFBgdfhhcpViFSLheKPHRc3rAdCRui5Pd5AZy6RkuHhQHKR7g1jGh1",
  "key2": "JPUfDRVaeNsuoXeNg2UmQwpjreV6xiQ7WtZFpxbNgKQY87WriKGktXrBvGeyAKfF2k1X8UEPyMjqk8Tw9VSiiv1",
  "key3": "YCMVKmnoVk1oVf2pmNB5oo5wiNF3nXoSeparNewfaSuNG1QAD7BUBC4X8WGjfqjkkGuRq324YZrMoBeKHHJ7aCL",
  "key4": "5FieToTbCVw7wsciMtDdSKf9cJH5rZMwVqtRpqGZhhE5x1f5nBxhwbXwJb4G6HGWbXnXd9NCAzDDbZwAf7PJR8pV",
  "key5": "3rGDTRcG57qd9KtywJfpoDY4NA7ErfCEyUouCF6CEDDrjEUyZknpLq4CkMsPEgB3L6v6tTp5LRDas9wXXmoEeBqk",
  "key6": "GAXYMjRH8kfe72cGqj5KRBvPUiX8QRDB9iri4aGLK3uu4Txr8M1Tt1fsQWQqAe45FJ5T3qbGqncmi7FFis1eyYE",
  "key7": "5ogMXVsGgGUpJkJ3C4Sxrfvw6WK4JhD4LPGqzx6U41Brb99q9fhorPNEwjzHKpeRPnWWf9t35HGjojV8Vt2oqgZL",
  "key8": "2MoB7P95f8Jez7hT3m3jj3g4Uj4CVXFdvXZ53jwK6EFpSs46XwkVZPRSFMQPoBaYXRujZLKA98sQshSUirZQ2q4e",
  "key9": "5vXtnNekJhGoSaufmKD56B1a6xuBjq1KYy96N4BL7UCBP1ALRvJx5iHWmEKbg4tm9tcm3johE4biFT2AEzC38vTY",
  "key10": "4sVT5zqovpUrztY5AUPiSfmV5J5covzLZrnfMMP2Vx2y2iijvbByeVDwgn1K2M4KoHMkFyyVHaiFAxhtULyAf1u3",
  "key11": "59uJ3k2KbwLvxhnjhLoLdA2A6Fakoe3tKvf5Z6CZxGu3uhdiUdKWL7Ejx1kcNNgLTJUbGGxgEF2U5sxzV2z9URZs",
  "key12": "5rkK3fMH5Bnh144uEn9tSfEPGUCVHoVZvrg9w4Zia8qih4HG1mex4z3dK1p1p55AsmAVJReibR9eHAVX6masPtZ8",
  "key13": "6419ReeH2BxZGjja19caoP4LvLS85UXwbKUKfgobxq9nq2fL8GCHH9m1HNZNtY75uRJbZvvAQij1M9GU43pDHuxM",
  "key14": "5C9X7hHzawSuGPvj4bFGXdVDEFhbRgPRjMauWiErSxmWuvnornbpHha9r682JantmKpqkJRtikd36iC7P4nb71gU",
  "key15": "5XEqyer3SeS2uTcK6PWVidE6VJPRmZggGdBDf5K7HnWS7haky1jUyLM6sSfj6gdwVhCEVBrjoo7pb1JzoSu6LqP6",
  "key16": "5xiXau3yrtTiz8LdmAkUGhoeN86TCM1CR9yKN7BkGzDyLhy65i5BaLmyTQS8XwxBK1CTZXeT7NFSyBoa1nTsVSDi",
  "key17": "4bZUedZEmBo9Ev3YZgj7guKcdzbuMopvzLK6iQaL7ZGP24DznBj7ZE8s3ZRdL6sNNdusQeuV8SjimdAgC3FvoyY7",
  "key18": "4DFFWgEGuWbkgCGS3VqwojDXz9ByPpWWireVfbWm4Yyo9yz1RNmVX7nbhnv1FsVPdpw4oqm1pMGWUcc3cPV5n8TD",
  "key19": "gWkCZN5jeVrhyzAJGL62Jvwg2xKxheP78RjCYrJ4QFdDLqv1ue3nEDrSeDUpSpjEZtapdQiL3cZZNduYsTeaS9e",
  "key20": "tsKYuxzF6bZcoE3TjmJFRaxmnN4EGijkMYk7Cx8pvcs9M2faJKHCxEULG45NDEsPjAGhxFyoqUu68NjiTacoqh6",
  "key21": "3QiHpY6WeshcM4wYHwjSv58J7Tjwm4bsQk4s3NuX5EJXztkAhRPEv26t17cJh67LHUgLmYen6d1whvsxjCSBzbY2",
  "key22": "5QewRqnV7AeAznNdMFSximaRxnA7hXWMfZtSDw3tz6SGsJKSPeLniNxhy9uNGwaHfWoXkUcxY31QajEb19fSVnzP",
  "key23": "2JMKbY3UzvgJ4KJhrxTSLv78L5hEuw6cJpSgHXh6dghaXNFKLFsBGLPeWqhcq1719FrxJ9SSz9Gfe7sUin5TFSA7",
  "key24": "5TYsdCUFRtoQHgaijL8te57efYY8ffqwwiLDCeaehANiSUocKQputCN6XqN13fUMkw6Wxn2jA7u5vHpVHdv7fJiK",
  "key25": "5SCK1LmAkCSJurpjA5rXTuAP8Npk9VYScy7i1tozt77JATEVTVbw6S8rnr6DA2f8HcxxoYz6jZnZMLmXGPsXffkw",
  "key26": "5kaW1fmZxqvhmAGbqfz7hMEfGZARFQhmxFRqjP337EYUPvESU76GzeCd3v7QUMYaQwLLCDf48kx5wUTWiE8TwGrD",
  "key27": "2ZL4KiHRQYZQCNTgRfEqr3C2ngd8yUqDv3C4ZqNn1uWF23j3qe4R8k4e5Lfww6nNUejGNCuSpurBhga2q3uWmnP4",
  "key28": "4m2pi4B3VR1MwJLLkEj4uQspWCioeBPE5sT2JN3RTDAepqQykKPK2GaoRgbUWGCEtaVQFPE7aS5pwEdSbcYTXB5e",
  "key29": "2EjvMfJSngVp4YBddWjA77kTanwX9vpJvaGLcekcsk4Bmn7CChxqdz8nHPjby4j2kEWuxZmDRZZeNSsYYjPG2BfC",
  "key30": "NAePyPtFCupzHXsz5QmQ4Pb6BzGJSd6tyY2mUJXuPKh9hZAHDriMs4SrwiBHzKQc1WR1n5XkbfKqwbKejkRMqye",
  "key31": "2AJUygxKZvHRaYgJ2ZPGHgTsGx9JoxGCg1q1gLPxjFYNc9upJ29i4GNtzB7GzqBtwYmLhmF6cNx1YSdu2nVoXYag",
  "key32": "M9XT7cJaZALDb8NBqvZduE3DmDScAPNsRm2sfWS6gPXdR7uUEmuSxA45kEcC1iDRfAyRDbwFuqE4GepZ17kDPGe",
  "key33": "D5aWieSHdMs6BXeHuDxcJNT7vM9qhawqbM6DvSyNbmAXNDpQuxbMUfZ5oN88CfUBMXS7fZHaKRjg5DQSixPJQi6",
  "key34": "2CCN1fkBkTNUWJxQkxS5dwCy8i1FA824wGSRuwj4vUgvxU4iVKXcBuJ5KZGAmhEhkWyzZCoHJWgw9ujo4T8dyfed",
  "key35": "ZvRRz4pNKPNc9BG712ePeXEQqTXY1nTqLoo4PaiEBVtHyWsCn5iWVStyeGqPmFrCCkvY9TGRKqVT1vdYHFrP43T",
  "key36": "4hftByKzXRxKFY4iQhVdCcsD9XerZsR1FWNGQB1iGGm1k7fiVBnfEKWH83kJbLAKMs9eJvBZf3szgQthDw3A6CGD",
  "key37": "59ybXuT7qVwyQXgMBatmdcxsykJG7LkzakRyE9swDHLKYCQ9hidEGu91Y7dkHbw9bkjjoTsgLhT8tU8UZWEgRp7B",
  "key38": "5mdV9HNoo4eiP96VKiQYk82bfpMty4iFsy5YPBHtccBXMYUjAJLrVE5D7FHNgGCwWMhscoHDFdhBPrd9hfmTYue6",
  "key39": "4sJv3jMRhKiAfzsrysGcsFm8cF3EQbLLnA2v4mjEc4ZjMvLZE2rH2riShWsvUPw7ZQprKyx8knSkY6wnhmVcbnHH",
  "key40": "5HKLPRyW6FmcZMZjv5ZFRK12MTQfWg9DHEG1Enpfoj3WfrXL31vWP9m1cus7R3Xu1E6bVjyYLw2s1Eg29szSTDPG",
  "key41": "5bqwkyLBctoETUJGM8Xvn3geaTb8ULWANkc7gcRvXFzauwihRCES7vsTNr9APf7TiNZ6xWVKEwyvewQhfNbFpLCY",
  "key42": "3purrDNRCP9oSXZo5WFNqe6ux1JGqN2zf8whr3PLeGo2Ss4xD1n9dYcbspMZmZakSMvGmPZi6s1HwBmY1MRN5XXn",
  "key43": "27TXiz9hamLRBMBZxaW8zicGTxskRB8TjxeQwfof93NgjC9xCnEoYZhiunzf55ZYjkco6E7KNKEUtobf51WtZajH",
  "key44": "4wPZEzPVaR3e9fQeyoHStg5Xsye2yGR1gb6GesX2L9gKA2mF2RzPPuyUwo5VskQAo1byGMZTbp3hZV9c8Pndzp5J"
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
