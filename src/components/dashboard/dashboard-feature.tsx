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
    "2CamCMW1ahm8tG2M72HHNkV2ayoLEhjR61xbCaknAe4u5Jtagpfay2qqr75gdyWVF8icsQmzdCajdJgut8Yty5S6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g6ET2cCcz2dx1EdFvCC4QZNdC32rQZRvVYjxK4s1QBSacBUQ7ibaXuJN4VUrWxUYgbeNAGQxdxz4jqf8zt3dzJR",
  "key1": "288HA5CwTRvFYoh7hptz7dGwoo4yP1JB7K8gs1852KB57XACjC1Ua2cV23gNsMApP7Pws1BJ5HMcPnSt6z1QcoRi",
  "key2": "5pQv6vMX2qH8AXAmwdYhhZADCzLq1ZqpNcizfeXRmEq95CHyAQn8Ck9EJpzA93SC8UxVt6LEk9PsUaLsuwgbR1rX",
  "key3": "375sSTDxie7fmMLQy7camvDKECNDw3u8uUtUEFz1XbPADKUxEPSi188LXpAW1SXY2n5S6YLGhhTW9x187NDTnMjb",
  "key4": "DSAeuhdFhGYpU1kvqAogdcFeL1hsY2Qt234FF1bfoHKDE1m2LmrEnYCTGze8TfgQtTXV3XQBTNiUfzjGwb3ztUP",
  "key5": "5z3Yn4JzkrHiAwJJ961hD3Y1LxW94CTAyEVbFgRJqHG2EsTPAwBgvF4YPZyraMChRSKzzXkrEETPfE8cQjV5ygKK",
  "key6": "4v5DZKWzL3XNKK85dToWzKLKswripj62JJHCvkBjgcod9jg8nf1H1bScGG3obMV1aMR1KAJVAxbPXkLsj5GTuRHC",
  "key7": "2Kewf1zs7fTzMyYsqKf3SmDbTXgPSEXC1yzNMVs8vqcGWVaFsB5SZuwj5CcYo2yWYfy19Wk3t2UnikyTiHBA1sPj",
  "key8": "222ffaLPydCpJA8QoKRgtY1hxWFZFEJZNs2GLvT6ngXQeU62rfEuwAKnzWf82278BSmyCVJYHpWsHfURarZ2XBiq",
  "key9": "5Fqrymi2d8iepoaYAToTJDroQ4EJ9VaXWRpyxDQH8mjJ4zJ811tSHq8F3d85mQ6QFSTZZAX8qAJrYDqwYeBVayQv",
  "key10": "2n7VStdv7MxR2GyW5F8igiuEYpx78CKns34XuPCH6jsqEc5ki6VzdTyadTJ1WQnSJVSQjvX3X8wU8nY7NCpGz8RY",
  "key11": "1hTAyyJTy2wftvbTVsDiVvrnwqrSzB92NBtWsJz4favG3zn38ZxuCAMtL5o8TZradvrRrF96po9fucg1cY4bRqZ",
  "key12": "rfd4HFr9Zzappaq1ULsXtDytE3BrJ1m2dPa8ugkDeN8kPQyoynnDUbfZrfS4fqAWvxfLFroPmwdwizwVfdikSre",
  "key13": "4db7DfoJEvyiVnAyCiuvmr9xrrUi8fTxGAScRZdsjEajLnbLM8W1qgdBkDE1Vt3DfJfGYFwb4imDS2LCtw78yDEB",
  "key14": "3RecXZDjHemYVPh65GF1Mw5QYFn8WhGQQ6Nz58hTQ8kYSVB8NfwFaqaZ42UbxzX3C48kHUbvnEaYDHCJFJAAL6do",
  "key15": "23MMhGzreEjk5beXn47ZDfD4LmuBuUT9tUn7tgv6TDJByJNKSk9jr21TT6njbrxmwyv6msKjBzawhfn1VWdFuxSx",
  "key16": "354VJ8W2ZvbNBpWWFDXQ9B1YKdLSCijSiespdvbaV8ASXUxinu473CyWEvSpAhYo3sPSkiHz43DGrz3NtgULB3Kk",
  "key17": "3iRnkucsCAFbF6FXNpapEhmAz8e7UH7Jrzzmuq3HUDFrtuVWLQYw43AtnF68qLzghhU9zMYe7V62PxdDejaJYZ2c",
  "key18": "3U57SkiwxiE8hSg8tQpwx8FsVaZJBz9hU8WwS9g3dLD1K2HESEA37YTBwwXpGH5TbSYkVUobPMTRH8j1nigbj9Ns",
  "key19": "2U8B1itnNyZdLGXQEHVKDMQSteGQAjuQEAVFgXfmiEjE7xX2pQTrVYTxXmSoKTk2QWv39wAry3ucUw3fRudfMa77",
  "key20": "FHqs8on6r5pw4tkPF2kiEUxSxkRpV4BTbfw7CtCDDZkCc3df3BV6aoFFyLzfaF2bbbUFr8tNzFGkGgRY3U2Uq3m",
  "key21": "2cmSScC5Q1J7r8kprMC399Uw7LzoXcRouEbqrhH6p3UfFcYzHkuSrF787DebsJ53WfcwKpPcY8wguitYvxbznR8W",
  "key22": "3d7eL6oEmPCpL31d5WrABFH9HsMKmtxydhr7Twxc45oaC97kRss7yKAFDxVgrY9jEpvCE7xF92BSTbfejVF7yfsH",
  "key23": "4SPuhjhLsALTPtAGUuCuwR4Kx44MYw8Qy48pk86yVCaEJacBP18Jb39TVfPM7AaUFZsSXhY5Ak35dmrTcfimGxso",
  "key24": "3PxtSkkqy8d3S5vy9RhHAC6Hv4JwYXoiPZ4ep1HXTzUmpYNYx7s9wZVgVUVCCWHxYGEorPPMmqLt22eksVtxTZbQ",
  "key25": "3moTVK2ugitHNC9yrNnTfhKGTq2eMXHXHpewdNh3R1mUiyB5yzPfQ8EWV4VqSLdFpd5QGX3RtGQJUVUhw54TwYy",
  "key26": "4KTuZS2Tsyab1fT6pyjdkb91i96SpuZst1E37omTSjnZYiLU7a31eQQxhdoJEQH9DXXLGRMELMhNiF1X2VHuxttB",
  "key27": "4pds86MUPALC2NFDfr9teuEVazQBnYVsY8ZzLfEtTkCZhviVABBw5yKUiF2m7CPDqGv1YVw8nCdrHT5vPD9gPEK"
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
