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
    "5b4mc73yfbCEkS4dwGBPBErJ47qqG4aunBo1SvZM4tTwC4cnK6gk4LNvuFVpZrVo3scdmCkTnR1TKfZ38R2rBJ8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29kcJE5TyFQJzQa9YLLVdpKACeRP5mwgQJPAkuXn53PSXKTKfpGLJe6r9PWnyKzWudfFkTWqf29rM4RpP7ZngwZN",
  "key1": "28UMb18fG6BzALcBUW3bR87oyX4gzxRNZfCHpnoovSvdNAv2XknFqdg2tTahSrnqhH5GMZssAZLxoU6SvrmW9DuY",
  "key2": "2dfZG76UgCB1yK1qyJx3ZeK6qA93ysZrUpzpczmvuaUixhoLMvBaSxTe1DYxzowVWKeucs3kXxzM4u3tij4S1K8a",
  "key3": "4T16ygaiBRdmooMq1aw8oBhMnxBgF6krbiLth8fsYFETFMMYR14f3srYrPcHpKwzkxYAzynaYCpqJQ4omjq9QmTy",
  "key4": "3qxWWkaGP5qmc1MCMCzg7e1UurGYrnubVrpSgRDhtN5TPtbBEyYKue1YwPL8RWe7JheGqXNBXwcH2TN5P89RBrqS",
  "key5": "5RS2x795arbqyLTRGmaKCNPVWznLFnZQPgF7oXaR5Wne4JSWXNo9YWCa9jXm2BP6BcCPo1RuLeK2imYUoFKBDnLC",
  "key6": "KZHYUWr38fu6yHDfaeKeQLsw99brci4yJyXpWY4rrB5uKZHHNZuUft3ioApj7RXbYxegqTDkZrh3d4dptnvC9gy",
  "key7": "2UniMuy2Dzo9fvCFpSs6ozyUKQRp25TJbt9cy38uptAbyVpnR4MGVAzy3ZZw9XJkVxbfn4Pj9tYsA8YPUfZ6qVgK",
  "key8": "RVzSqVq4Pmve789Mr66tkNp8NiwT61d42JSBx12VQqCQbFv5FZvQtAnqPTi3wrdakfVEC4pQvxvCuPMAQVAzQNe",
  "key9": "4UbgY5VedgXNAPiSar1oA5JqoJxGvTN76aXrzd3efnFRfGkbYDtrUGK9vePozu6SBTuxbV36iY5Ydcs7D7Ybz7ck",
  "key10": "jGPEEq4L2x2RPuBw7QG9UJEHZk4YMwtqs3nKsEZmUikgSiATLb2f9atKhN1mx6GYrMJsM62jcbnasPixaregBWg",
  "key11": "2vBYeJoNRePPQ7Yaog6pTJYVzhjStSU2sfAQEKf3EfnysZs8sT24feDUAupPTAHrjKFEohfCWDjWRE6vWbpDx4rR",
  "key12": "3azjvPMd3y2e5Tes3Tg9KsaMnPjo1orTVqXzZWPPjBYAPBCPV4KMwgWgQfAmHuLgeznRoBTwo3nFbQp5GWPCHTsS",
  "key13": "5aisai6Jt1t7xRXKGja84uJ8euJwattbRLdprT42rndHzyU9qw8cqEeFsnHWYytbevk8ue8b17dbaVRGpkneDNbU",
  "key14": "4SbYnirVp9rJunAsDT1cuTeX6Wp7eaQxNGN24tH3uQgacX6dKF3B78goFQo8xWGjw6iHCRHBtQj6ZCS7ZhNsyFh6",
  "key15": "5arXYs9ShHWChRZ4Rx3p5jviJ9ezxijS1EnRS3d5gkdfPdoRVAwumbLWiRkrGEBAsNbR7M7wXYBxbASsuy2ZkqFC",
  "key16": "5LdAxgx4r7Zj9TvNAGqay95KEBRfRpzDiDHt4DJJM4ozeb3vwrUnvPgz1tQmU7R3WxkQmbbC6NKL6HjwdL1U4oRM",
  "key17": "2CMBorpg88RsdXoRqzj9uNkPaJpKLs3Ra8g9kgWnCC4r3xQDbf2XnM8XrtwDvN8R6qkUwTS5veDVKkUyKRsMBzTp",
  "key18": "436Rc4sd6hWaDLNMXyrR8uPqTBHwpbqqBCP1GktNqmS3KYLfyyutTNC4gCYAxLFWWdcWRyQiCJbWEFGeFhNxBUQa",
  "key19": "4DEvLEKApYE2tgTpq9fudvf9JqSLTbTXYbdd5r8Zsb8Ao5ff3mExASjUe1YywtEQNFur9azj5a99CWnTndcD7NF7",
  "key20": "4XgR75A2hnQBVMFmCFETFibcgaEU3iG7NQRiF7M139CKML2iVdRcJqLMU4F1Mv1xd5wEf4wQnrSEvSneP3z97dDf",
  "key21": "4agqQ4oghab2dmXZ7iEXHWDXtX6RRQvhrur52h1o6i7vzoN4ieqWsS8axi5Sys8LczBjBaiYtC1BfeJPMykAejg7",
  "key22": "5PCoUxkwW3HArMAEroHNgiwoNPS21GbJS6N5pL5doeNy8Erb5LFmN5JSfTjsRfKMds5oZ4EGK3CXNpqPBRhU5gmx",
  "key23": "3jkcyLTFYymcf9RgnXHYhPZF4DeJop2AzrWKSoH5LFq2CpDXMaC3GprXF1ANWksJ7Kp4CF9ZhKZaMYfwPbtvctzj",
  "key24": "3bcrcHDYQ6DETCsh3mLEfM8PgJwb5yCorPEqGfBDzghBWmgndfxpqZYKSHzXPswHbc6LDXAbeYsYbtQUkPPuY1GY",
  "key25": "4ZBNRhhYPEUNHCXSPd6KPnnxqWmuwBaGiv5SJxRQaadtvcX8FVXK5Bdv6VmV8zs3FGvksy4sZeszEpFNaGV42Qaf",
  "key26": "4BQ2M2JNnE55ABey39hPHD8J5bfoNYpQvTxLJFE2gvoPun4aViVdt3B3U7MUXv7gx46XLdEwTBTv2w1FvwmuFe7U",
  "key27": "4ycLrLobetXgafw15Zm1dW9HZ9av5RXtEh9zqznVkaHLFtUJzNvatp1DkdGQz324RoxmwouNUHg37cjTS1mxMQX8",
  "key28": "29dwMy8J1LpzoS7R4cfqt4iuDgtSGk9NKG7wU9n9kNEtX2xCnJ4uPbh5ihYBJHUizGbii1R2mGUr22s6GwcMtEtN",
  "key29": "3g6RW9VrsyRD75mPBWB6Ud6YsQiCZjTD2JFFbUCCf3gwfagg9BfXWWjpX6jQ2bJHT1AptrAe6DQQKMxdEc3FBNjW",
  "key30": "5eszgmA8zRYme6zthxJWiZyktp9ZkJN4ohoMKx169eGQSV1uheyLkaqdv23ESfo9qam4i6oAX8SyKuCEEGAtrhjJ",
  "key31": "5hzkKybRAZaVJGpz8a3cxNcmnmnKngiML6HjLHCV6yp3QRPVbrW2pjP3mZdELZZvMocvoXd7Zw2RyPKEZFUy2Cs",
  "key32": "5CJCS8yHMVEc9vPm3tAbSnAvi3hWMZZYfJ2LoAKBEPVEu2QN1d9aTVwRuK6H3dUu8siboJ23mWpw2W1aA4uMGRWZ",
  "key33": "ajtbkxUZyEQPKVq3QJNu655Yfdic9dCprP4qX3D314LtKw1y2HUcoByxiSkkReJ1MT6tabkXWbACwXRrw4XbrpL",
  "key34": "4EMqee6QArVsNePmeoaf6YtSotfnhpNhog3P3mS4hTYa6cdTPU3PcPQaGdDoXyxhu9hryimTV3JwBUBdCDoPDWmA",
  "key35": "5qX1Gpvnq6KdvP5SCm9K1ZxnvdEbT7CxyiTqMPnkq6kg3yycK5bXtrvfNccBBHTHKTVaxv1A2bwNTeTgRjY7yVnt",
  "key36": "27XSzpQxR1oRev675KNjgX3Rn1fymGqPLXF6h2g5BGLXEPpSyXYgGjoAoDaPr9fj3UwDLELAcxuqWrr3oERn7qRh",
  "key37": "5QouGZTx6wGsUXR7Q5vnqgE2FXnRuFJcNhn4zpUjh3YaTHJsgfw6BXBHYbhkcahPcEx83MivBY4hByCeZJpXTQRg",
  "key38": "cCqivDbJpb6T7VJP9QEPnhn7KmHUBMpi1EGwbArTgNDVPuK4Nw9mNfB5GT41S8ZJQThbYMs4g8n9FT72zrPtJpb"
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
