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
    "4xymMyBr9qRwi278R4dWw2g8WJrSRR4WQSfSGevhaciRqHMLxAT5mcYjkpM7J3BYEs15851G5VuA2YDZb4MtkTAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JQfWkUt7YjxtQxZdib1U94NHR4SaqSRD9ccyJ8xz7FLZRAZ8zp22uQctd7CzwHozqMr2yYD7aUmfArJi1VGZdUc",
  "key1": "3dNzzcoKv5GFDYhFQXNZmMn81gr943C8AaVFo8NtcsvPPBDS3P371iKPmEPu4tzH1m7auMfMunnoPL4WDa1apNki",
  "key2": "2VHD86xwebTYNTHThFdNNrDMno3t3pM5zShrsExDLkpwMMLuYM6s12tEW2LvM5b8e9hdhx3xjSAmeCUZsiaJd84",
  "key3": "B4s3tXSrcgxFZ3uGsnTcfAwcuMoSX1kYEaULQPE6fH7w3zu9Y2nPE7EN7FGo1kqwtazrKtGBXUr39VYtBb2DE91",
  "key4": "mWvbetPqhXHRdWUMSG5h3NduPktCs8ymcMvhvvsACnwzRKqei2amut6aEvFtmQ7Qt5yv3EzYcTeBEbaMUkC9Les",
  "key5": "4sBCetUhWUAbhz1PAzrTvReCzCNDNmsPzH7HEdXVkrb4giQHGoP88mxtevXPP1UpdFP8bASVbPEQQMkenoA2tbXp",
  "key6": "3mogGr6tmhq1BFQaE8LHtXSaN3cxnKsH1JLYbcvXVnBGL6uDcUwNEF7KAnE3h6Htk6FEuYQm6vabcTtkwZQpthVp",
  "key7": "4X6VpZbjiEaaSKar9pYYCozya4wSyquhmzWE256i42d3TZi4XmDjgm5NpqhMxctdzbHrdR5NZ9PfXjtC1sui3qry",
  "key8": "2bBYLTeScxFbzpS4fvcQoXFSZRHXMZG5BATdibPKjyXFGWMTQmJLYFvzDLVV6XR4y4mmVuqT8aziBoK7Hjt6EZmp",
  "key9": "34yBZSSTsBPVnrqHdqZ6ssLK3xE1tMEFRA6Hj4yBoLnXY7a4rKHhqNRaZ2M6YNm6wQWGGaRfjYrSoscEqh1pai79",
  "key10": "4xPQ9zpMZcku2DzFdaiEFkAd87MPKYy1tuDgBDuGmCuLCnwvGXwhh2XTtHjdHoToMXkSUrwpKdXpkGjcBidyrUjf",
  "key11": "3q5y8UQiWLqkJQb4V85MQEiSD7BkEJK94ytm9LLo1QTYcLmBYnaD3BaTRdhJxoMppMjhgJVqsXcXYvWVP5K4qVCp",
  "key12": "5HDJ4SaUVK8J6xtrVyrZWtFsmNi8PDWAshT63spGWhm7HU4LP1nrRir29PzM2WBx2sBCheQnHjkg97cagbPLLzfX",
  "key13": "EgMRPd4p33HboutiuykT7QQpdGdtKEzvDGnBAoF5GwLZpJ8zBVqnm6YV2SrRkennVbCQhPMqXqNbssYwuUoLAXq",
  "key14": "5wopM8U6KhrsLwwGuAQWZSSLd7iCjrv1XwQAU4fmrpAMBc7LJm6F1a6TaQCb9jgG3qqrzaonxSaDxReSevZ3hfrM",
  "key15": "4NT5MCJPKqK7Uz92XMaZwQebfgDEeaKuwcm4oH3TDRMntDEWz7aoQW59qDwXEqxAnkJJ3oSYp7c6HnBjN1MuqmKr",
  "key16": "2M7GpmAR1sEoK1waHNhYW45fCBR4TxK9wL2NPuRiq6cxELRTUS8S9qgXZcb4iRj6BqDCjwjQQc7B5fSVeyCdBCUZ",
  "key17": "62LuJMrw2psCessZpvdZSKS2Gvfc8kM2FomfwB8mnUuuBgJMwpSmQCSiAvafFUzPpU2W5MvWQaeKo28PifCFxeUy",
  "key18": "4GY2D6Z7MBTent6YW69bdHFQ8QqNPuh2ZdpidQP3A3JdurCbFj1D16wH4cDUssP9syoAzLFHSwp8z8eR2wGLdmGp",
  "key19": "65tCfVer3MUM8fjzw9T975zhDGbqPoFrXZ7gg5eFzPzsdLL2vvCZ4GssUB8PHzH7Tr9j37z8wEiXXoXFRZEQ6Pn9",
  "key20": "4ZU5Mv9ovHRDgc58gYLFPDZvEcx2JzHgzLQbUcCARtrKf2Z28ETzDX4AbfLaFNuMdDWX1m2ndVXHQGKuZojBCy42",
  "key21": "EA7Xb6kmcz4PFsJAhTjB9AQBDmnfz6fYpnyBACkJucfwgagu66BpYwRu8KW5A94ZUvj15DZ55tGvXVbzEgDGBzP",
  "key22": "JvtkWgtYoZb9qABJ2L68VY17VXE9hKbBUkQxgH5Ut56zpvHFbd9E78gSGuUZ5LtEFEHtZruh6nYBPhamcp64b3f",
  "key23": "5HxqZNjGANsLSUBfoE1QxKJkfzZ3RLXMug9jQHbJHLj5GYrHqkU2X6G7M831DfroAvSQVyFSTXqAFo86iKQti912",
  "key24": "2g6d98yAf4KE1xrd6GP59azfqJk4E9T9vdK9dT2iS3BeXRD6D4F7MQPwt4WDHEYVRm6nBsSi2xEf4uGYvi6RKPBA",
  "key25": "3uFyfP4ikjLFNU82ggz3Ubzs9bQELC9uJ5WReWXK1eUBWKf3x4NjnprH5xv2RFgXecixT4N1HuyqAz72ATQAhpCt",
  "key26": "3B9ZqufqZEbK4Y2rzEgj3awUqZ8Y4i6fbRuGpTcC3USK6qw6ZdhWK4y6d7WSrDN5hJZdhisMMtiXo4dfaM2rqeGR",
  "key27": "52QFLYc6JbHCZwPvP7u7P7czGwL8vovotjgzrH12y7LkEP5Tx384VdX6P8u4YPkE6zc2FiTs7rVUXZ2KqdTFYmBc",
  "key28": "3SG7S773uE2RDnxkAaWnUetYF48wK2RGg9s98t3mUo6VrSXsBZzkuViVVKpU6dDbGepEygjx2MrG6sXpRbTnEcYD",
  "key29": "4SoBsuRZkuQafP4vqaxEprMvgbRpi9Tp3UxVK84qp5v89jhTbFnheiCLDyHbsr9CiCifinFQ1gtVqULjGFT9D7PM",
  "key30": "b55QyCi7jRSE72ZKEJzUeRBXKsCZ7x8cTkVMaTBJ8HrWCrUxgHfHC5vs7ncZqPfAzAB93fWzi4sHPkhwPUzUR8p",
  "key31": "fEm33bp1XeMWVBRKHUAikaZg5udQmN6VuJXiSEAw915Hrni8Gqiq1j9eBo3hpmJxt99C6o8whSh46sgEPKYUjcH",
  "key32": "2oPDHkokYyUaJAZ6qKyy4NVtjMxJXxKAmfNMkEw3cxV1WUocHASFjhSuFCjWuxgU4ohH6eM1VZr9uATU2Nzry63b",
  "key33": "DtNd1iN9pkNAYnQ8cWmbC1gBgiVfyZTF3WPypdwPSJWpn6qXrrB1aPHVvMoHTgqRPPq9dmx4UxZrvw6aeMnXcAr",
  "key34": "3e7WMTFT7JiaPLbfEEU3ZrKo9ue2Uc4nvFJ6TDtG4iLqykhKsGWFef4WUTSD4w1dzXeYbjHHHDgt8CZaDRWZJLTC",
  "key35": "2ETK87S2acgqwChnUidMvXCXM5bW28KArfRsr51XsQcpdPsFcYb8ngHZ3wwyzTpoNy6cfRb5oA1DoJwm3UmgNowo",
  "key36": "K8A4vqfepTY8dfaqAucJ7bBdZ8ZWm6UFAH4RtEWeKKPQzq8y66F6hUoRbKkwgvw5LFPAiYD8S2WSA9vEsUZdQUp",
  "key37": "5YuE1NvfUide5JUbgpHyxeV79EQWTa9RWkJae4T2zfErym88DK2JrahM9bKvQuoSp7x5gekNhhZC5hr77M9JMyut",
  "key38": "3hLCVMPGConG7PFuRNFocAjSq9CAXPu9AQ2iNVbR2D7bxyZtzA3iT24fXwwoDuipwnAMw2eRtxxyCDZ23bR8PxPM",
  "key39": "3j7pgseMZxgVr5pB9jURtksEbszHpoRiEav8KCZYntfA2JiXXpneV5GuFRCKvxBCvKspy9jp8Xcem83DQfqmEGuL",
  "key40": "T6pdJR1ZUxPRWbuqnjuwQUnHMraEL6tdAY8WUyxoJHzBDN8NHKFwnH1oaqKBEcL6EWZtZ74Z4NWK5kW4KBiXsTV",
  "key41": "5JktrwrE57eQGw3jSQr7tUow4uBT5XCmdwtCdHqFhJRPLaMFjLEC8vQT98wbAFfEt3xdL4Tm7YsYv35Zx31dkLGz",
  "key42": "3agAr8jbrZ8ea756q9UPfR5uHqxkWZJ6JwWd46JLUnMWdkDr5AVfoXyxdpSNjAsTypNeRBMVYVRqu65NmQ9p6kq4",
  "key43": "521cwms1BMKca7nSZsLGWZvGhg4pSoa9FiVPFMbU5M8qNw4cF1uYUXxqGvqjsR5vKZd3TxPvTFT5ib5uMdRLKgi8",
  "key44": "4Gah94DPvX9bMgBgGJYL2KVMFXMg9ywV7TCabwHc6PDaVKWAVtNtG4WWKjQmUHDcZEtxzNEf4s3vbtUb9Koi411q",
  "key45": "PpVrtnzYegSLNkqQ5VnDLVPmUuPcrAs4P9mfLU1eowptanzi4RHA5TZWUTXfXEfzbjgmEiXbHgeykb9FGnvh6KZ",
  "key46": "5rxy94paFvWXjSDBUSiP4wjnara6bN2BwW7iZur1eFaHTFFvqZHY7FZU18FNeEqmADbLjM1FE8couLTSJb76zTJH",
  "key47": "3ugLasQ2amoo4orkJ7f9riehkRmsNqZTKMkzQzRjLhsumvTbm9yYMFZ9TSGyYrXrsHFgLJYTtuefjgp7YyxsRXuJ"
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
