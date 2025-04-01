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
    "3aDSnfJQg3WygGgeqot8M88aFxTHHw3wEeL1Pe1ranFyGvDFyKm47qjpxjmrdszkAtjSzPzXo1ocFHjGAFQYRzEo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "124jvu9jQwpTaSj7ddG3imwKtUm6hRg9L2aTnhhnKxm2h1zCk5zJwtwVyRVXhx8ZBq4Zp3EQAJDtZd9rHX39hXtJ",
  "key1": "229KdK4YnCaMUfwkqaE1ZhRRa6d6jhVKV3msY1prxa8SjcPtVyV4it3ashtEot4nFFa6NetTUkdaJZL8su3chCcV",
  "key2": "67AAKztXm76pBxiDhoffBBqNcqRbEYLKscdjRy7hVQh65CJBThAQwUgYqEYyNwKCV5kxbUxMV5rSn1gC3YcAhQNH",
  "key3": "4DqWh5bHYqaCWxifzsFWnPSCM9wm7YUngqkh6ef6MXiW53Z5ySVxGVvML94XfKh6XQefDg7nsNbZN6EcdhAZE4nP",
  "key4": "5ABNnuYqmmb5cUAipCuYY8tSEefdaCzLBzfuPoS8Lp9DyaLNmJbuaVDfXb6DAJkNmVbXwC6rn5PX5C9QzaXMnaa3",
  "key5": "5o5av66X5vroeBNRLdaSfb47NLDrvupG4nUB4TYGDvQVVgNVstx7qY42o24gn2SHYTnJYCHZe6B5kvSssDWxqmT1",
  "key6": "3Tt24PAchZMjyKEeMEuTn6sPbiJnc8K7JSjSn1Hk2jPxtZsrF7kQTth7Gsp7eMtow1s6ckbce7CY8pua4fQ3gS63",
  "key7": "p3yxu7r8ZRNwyjzG82aMJH4DKHFhKXK1Jn8aHR8ugiVPaKqujXJT143c2hRZ5uf8ku9sLYcCXJt5ycJ4gTuvKCr",
  "key8": "2kwggf3ioCZ2XYLZvgiqH4wugeQ1CfV1J8Ae1mTEQfuJebxYpBiTmHaVrgJN2v3cMyZzSsX5Ls1CuswW4B1854Yf",
  "key9": "34QEvZcQrSbdW2KPFkC1GPNSXwPPQ3V4KEhPfaELRoEK8WHWruXdNAXSiYnqBrp6mGB19ss6nLN7JVKGMTiMzm5S",
  "key10": "36MNQHXiuU9RhBSt8CD2QE3DjFj1kapCWVzH6KXS9QH1kXp32TLMmvPn7bRffhyKfrBxJvLZeGbBAvRxkHH7L6Wn",
  "key11": "2AqM7pVPTwnuVAMF51XvxhREdTcpyt9YAAw5qQpVGLNZut1rTrUiBbcsHHjXoEEkN3HynJq87ZUk2kCc4M21YMvd",
  "key12": "5Gr834GgWFNckCZReW6BKw57meaAaXtwwYUGrzcgvkjHdkiomed764CV7u2Puu9ocfatHtyPm6WTRdK9BDr9RqgA",
  "key13": "4yes3Hf3UWdtbt64QSLqjt6yFWS3MrwcYSqKR4BmdM3WrryqGxKbAFqgb66tf4vAqmWykRYqTbXeEUuPCxninHFt",
  "key14": "2iZJjM4J94CiGKPU8HYqdtaCpw5nuLE4TKR6GVHFanSF5nT7VkysHUyb3n48xcaBrZPsDWKWRh3yRwdZyTUWL2oK",
  "key15": "4STh37SpX2x598U6fbxbnsSyk63tt4XL4krhSBUJPF7rtBHoXAxPc3vGCm3zaxpnSWidFubdt3774eHobsUbxMVN",
  "key16": "ZHNGTde8eCd3hdZE3uDPUN6SayMEQvyVPxu7ZviqPaf3KCd7rjA86NHLQBfpK4yGJvQBfmSt2BDzR45npoLB8j8",
  "key17": "suafXGGFpAJr8ixgaF8hqE1oqfUkwZJqV4jH2cUAEbdj7UFiDNQ85n591b1XZWGB8BeA8UNi6dYggRSVPjS7G3N",
  "key18": "23KucUqbYNpZig6zYQTKnWJnADjsMyz89sKuqF6G7v5MAwxHFFrSYtS7SaDdYkm94xXRtWxTeGRpiRM8QVQGtPg1",
  "key19": "2UqWsJmMggPBHKBWLaGcW4T8V4KN1KqcnvABn9F6aJDVfiNNWdkauzUK3sPX7kRn2FNui5VkoSVxcqTjbEHPEtHD",
  "key20": "Y5dQJ5tKM2jgjEAqRkYyE8AwTdJKFDo57QPpu8rdYMR41ZBxMYnGQ3Avz7GH3eiUpiBYZxhnKApcAqFRHFMCBiC",
  "key21": "48UWdf1KdiBK1irVqzuiFQ5qjUjkVbWTsHCzpYxoiSEMPKssqnLqn5bpK1YFL9DtxFz7LEPC23AtYN8iaer9tgaX",
  "key22": "XHQeuaE8jBYLHa8MrN2HVbrFVNpaL8Q5m7gLNBDNAy4KwP1EsVQjiPHwwHc9PvFYYemrkHMUCLUoErjim3ZDRpA",
  "key23": "5CMZcw6srXQ2oL9PxCLivvFXFmzkxdmJWxod4DMM94T3xNASW8Wpw8V4Uj31toHWPYD7Q4JVSyLvqzQFtaxv7jdG",
  "key24": "2gFzUwx6LUBcsYEQRQYJZXRjkUyV9piTKEjfqd51rczCc8s1jXA9ERGi9cyCf649ipSHMUzQ9uoF9YqpZkGwTceZ",
  "key25": "2Csw4A8ivkrRuZufY5PLijNmMQUhCKPuXg7recVdkbydDYVkNEoXhMA8AYHRj4NVUre5WQWdzEEeSqZgs4VXo6nh",
  "key26": "6gdNvuYoDRzYMhUodLbPUqGy5RVan7kpT1JAUh3WwxiXQqn2gPE22pDwWqGL1Cv4gEx7gq9Wxw9emkGFtiSs1Zv",
  "key27": "4NWVm24gRsFxLxA6xFrrQZWLLviWykhsEzTZt4pcpQD9HqLRUTUjkqzC8b49G5ZQW1HpjJqkm1n8yKfSuK9iVyhe",
  "key28": "2EkFSWomgTPPSCbttoRSZ4jCihGe1o6Bv4wM5WDBVetQfFZ5nJBeq2oGpVyq9hfo1xarQ2zwPMtaqMDAhdjW4eKJ",
  "key29": "37seK9fRdDDBHkzFYHjsXfnWCRroNjvCjKmARZ4CcRi5PJFk4P219mwxkQGJCgaFNWSDEzD7Utbf7LcGuTuBStK1",
  "key30": "5SBphQSRghUZZrG5hvBDc9PQwLTfjqYTF6niTK5c5Aa69sCUtN6ryPZWKq332HAoYQn5jrZPgoLqETT1LZ4VVbWt",
  "key31": "2QyUjDd1m7axJ2fQwoDMfmFZ713s6vkK4kqpQbxquQ6fFFUf3YiTd1usEiNzRztNTt28pcXVc1N51j6jf3h1UypP",
  "key32": "4DeEW9JwfAGBos4ECywL3NK7YDwTBrPPJa1tvtD6N3iTS1okorjjWpbr46fwJSusv4bEuHAjB3yw3yRpV8szvuQh",
  "key33": "GcwbiaX3Xb3RzUwSF8q4X8WSRoPoyeFv2Py13h8QAHGbZeZU9E7dwc82gRWed9f1YSW7aqpeU5BQSoFY7kCb5Br",
  "key34": "4K6s7HSwsZuk33FYXS92qHsL5kpsfF9JshqTAaM4U28CbTnkbniwtS9kko4WdyS2bS4VHvPqPoCJR581zdDwGw9n",
  "key35": "5uWpzDnsjPE68zTQp3QPu4ZwHK6xrP6NrxF4SDkgtxY9U7PskW7Co8cEKofRuR8w49YhqmiLwEJ4oU4KT21Jfmia",
  "key36": "3hzCv5rmuA7Neix1ZDqdSJrtTBdh4hQwDi2aCgo3KYCPbkUGSpbvCnZkSEL1ytKifC1RAp6pUA9LTFv4P9M8qkxW",
  "key37": "4Z8ehN3hsQSqtHWAKe3nuvK7wxpDQv384BPXRUG7mb3XcJhSmxtgbHtMhUdbp3jMoZsQRju3ZCMKfwD5NoscP47D",
  "key38": "RYutokh9CYvVmHABbb4uznZzFWfKPKwkYzm8ePY1ccmRcqUm7sTzuEyPACvRuVb22GZbDMp7tAdY4qeCNz9KJVv",
  "key39": "3Sk5FWpHhmbaQnfLXGYd3uJgbPN9TqzoUMtN6H5LwFPAoASzXskmyzHaiZf7BQ3wfoNMEt5cxzUu3iBYG7DQc9i5",
  "key40": "4f7KvaJkq1hvBSJPSkQVUrAM2RjJB8aPF9EsaroqgCUbuv96CL9d5i9sVFLJFJaQc4GX9eR9y84s1H7KZ4PtCmRe",
  "key41": "Mjopmf7CGHijL8vBiNp72r99Bojmah9ZMhw5jjNnazyHVLvaYcEie62RYctnQYPq5Hv9mkPRwKtAdHWeyzZsptx",
  "key42": "5sgy3RECocnDDmK1bKwVZFVd8HXJQcGtnCN9XP3nz7D1utcpBgr1CrEa1dAEyS42vuUjtWR7HkjbwZ5KEJmfstTH",
  "key43": "2GSKvtLH5CUTNb1Uqq1Q1pbJnzzBLFYHuFQvEfPD9nNm2Srm45Ft1vGLJGzmkaUdDfG3bVx1f7JYNk8n9VRmRYpC",
  "key44": "2cYwbvSFxUf9t1xrwf89WbPB6ffFuf6x548pDwUrcXSJiZS7gJiXy25YkMx9NdoMziN3ZZmKgbnJU8o1go78ekxv",
  "key45": "3gDeStKs5HZavi12CKiQscKwE1Qx895Q1UrVxE2pT9u2yfX6VBr8mMkLCPZQdj2za8kPHXBvmrPbWh2Mr3P89QNv",
  "key46": "4HozyoNzJGcTjw83Wi1y9Pc3K7dnP7733TLQBvKsruwE45HR7F38vRY4wtxDN39eAn49SfWXtghGqR1wg7iMJKQB",
  "key47": "53gYFfTTPbU2bheawUpSDUAzvED6XWJt8WwZoBwEcFaFriq72X4oUV9pgt17QJSw1o7dS693xgHpnMhvEZ2NfYqr",
  "key48": "54ue286pQwb7eXn4gDhwKfiqDHn19wim8GxqieY22Fbgyq2puoUqXFR7cBAztUaiMnFV3vsV1nF7Vaf6hdjC6GX",
  "key49": "2QvNzuGYFtVco2nArYyGS2TV1md7dTd3Du7fRKNM33WYUTzJqXoiU99f9FwPqQG27ir36e7MJPjosHnfmmd92TA6"
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
