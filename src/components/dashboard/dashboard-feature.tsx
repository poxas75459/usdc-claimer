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
    "PHbSDJDeWZxREXvQ4zm9EKsRfRCswyAztSrXsaUWzKWZkDU9n3UW17tFN71PaBa5jbESgh1B9JH3YmP7TtsH9fD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KsGMeCjiF8MKgaE1GnVt72ThNHtHz1Cdh9ygtLCC6dWJU8btRvHFjSQ2RzFmVQcVVeDZAii9VuvXoVGhU6GWZ5u",
  "key1": "3DENCigzPnsdS7pBAqnhdBLc5wg9ost8upRBgDcKzkounk2H9cR2TfcXEUr43XbDc93oNQUHHQvwJVfPA55BdMES",
  "key2": "2N4XMJaFt5LyUiVJoV3iXWX7cLYjxPjLDjnkoqtJA6ezxNErcYLduJY6VzC1uvXQFe2VTcx44kGjhF9bRCG9vtYb",
  "key3": "2vxbxbzTcX8VRSPBgUkMje3nEFQySbSWVVVnEPPokAYnnVEuWQsuveAxSCWSDEkGogdv8gUArF4pQs7GtLnPxsHy",
  "key4": "4qcByMW8sS33C9hkmiSRBu5uEvx8dVjVTKrj9DUTcZAWvynVR822NJ3skmbGDLXvhjQn1L8yKzWazLftEGZRydzb",
  "key5": "ZdvzQ2ZbUaF5kHyjNksDdnqkwD5tSHxWcLA2nH4Ty6gKcvqcJg1REr8GegkDrKY5AriS4UnPtd6yTeZbu5zkx7z",
  "key6": "5wCm6XPhSCDnC3bSL1ae3Jn5nwo3zGjURr9TFPZtZQa4K6J7tQciE2jSoVnvV9fM4AMcVfaYrDLbERZqK94EsU6D",
  "key7": "5g88Mxhq6qyHqUMey5qgoBAiWWw3gnqz4S8dGZXHJb3XLeWP67q4baVYuSLJNx5fDpGSdm811zM7xH4jz34hX2pu",
  "key8": "3qx31qyN3yPDWFPqgY4bZWiANXeJkJL6A1jL6xwSmnvE4viayMwLH6SwvAGume8XCYVjyhn3kEBdChHXnpcLoNvc",
  "key9": "43SSykRxwxmnTk5UtxfGfsLmmTjL2T6pszL8waSHXSp2vfP81ac1gGpQr5V8kZnhkb55sPgrB1r1YXNsis37D8n1",
  "key10": "3WEPuwk63h7sUZmXLEb2yyTXYfuts2dJEuzySPfY8w5mAGVWwUhtJLGMR7DsBuKrjKLyagiU27H84WrbJMxmQdhx",
  "key11": "2pEi8YHXSEs8ys4bM1XcsQqRhstx9S47i2QpKKtCJdTwTx7zJaP5AQsifQV5FSuFytdWHibDQHc9eXbyFfpmjZc4",
  "key12": "4cc1atSFvZT7hN6vhPWXdroYuAeAJEoDJ6PNV1vVQ2UiLp1T9cVTHsDRZrdrA694K8EhbqLNRKUzRy6QeAWEeEVf",
  "key13": "4eqsd1YdmgH3LG9f5w8MMxj2Nw8HzeUSpG5e1GHAJEiiKcPvKTs5DWf6tfGEPqDtahgaEyZc32z5KpitruKPfTxi",
  "key14": "5Bnmrt2jKim8mkS9UuqsMVAUFYCBwm3FJfunazu56fC6propUaAW2ikBweGDjsJf2oqiZQrSMGWPpnzCdFKALGxB",
  "key15": "3iej26PfoPkYUomMYHUg2B2a3X3wf3Dq2EAyPDPJNfW8oWXin6SxynXJmieKFGVoP8TfHLEDpmGyXGdjGzrzdb7k",
  "key16": "58QSQrroteFT8XekFnj89RAM7d3RSPvUJiw97kFFLcqCoE5K7opEpACz9e1ViaZeKbAvYHcnCwi1ZyBuct8BcuB7",
  "key17": "5cDgBiqTF9cEnGxU6xdNBpjpEknTjra9zExi4wc5EsieVXqUDkWqLLNusFgvPqXiJuQr2pfSqDNULpBnb4xaafMx",
  "key18": "2foHDGcgQtnSsCkgJqSXifT54fmjx2sVfpLkH1A48cMB9bz7kZqS3jbfvY6JCwvCwkYqY3BWyypBa6pivkrRD4oH",
  "key19": "3q7gMSgtmLKjZgCKUjncBVEeoc59KygWnBeLXmAvofp2vwCVJSLxJc1bYxFAjdipon8PuHA8oLA1rdpQJfMZkvUN",
  "key20": "39r8U2wmXDWU4HFbGoyBKXJc51upJg2QwVa3dvYq7B6ystxghw5CMgkE5SShdm23GGrzUWeMTTxUiAKYez7QxEcX",
  "key21": "JUAoTDaEx8jKZizfhGNMf2hNRgJqj4Yc8YHNwgyYv6US6FvGLwkHvVJpbRc4QikTRR2A4uT4dbTmf9ygFgBNPyB",
  "key22": "5isQYtfACGuf5QAhy9KgJsgwvp3SGm6kSmQuHzLon45xsRf4uv1WZ2Q72JFEGWCeAUbZbYWmvD9je3rqRMzGHukV",
  "key23": "bwUR3YfxXWiYLsMqFNpgcuQ7vUgyF5LcdVHH9Te533UCWYK26dvxDGU7B9dCR9hYkkHHgALo3i8s6UkCEshnHg8",
  "key24": "5zKUPysmGfCMGuxN4f9TpwsiqakZhZzGV4yVTVqSzenchw6h4KLuadkLqe36hpvsnXh1vGy5fhq9PXb6xDNmwqQq",
  "key25": "4AkuJQ9MpQNTWSe8oPSiJn1hSsnYz5LQB14KALK5m3ZE997mvTbwzbCUYzWinGNMbaQHWqYsDkLxPWybrfLGcBBT",
  "key26": "5vDppstCL3L5vtETDVYYZNrtkqcXmzAQd5BtSJtXtv9GGHbuUGQqN4rp8PjkfJYo4QXuwbFmwTyp6h2itKGA5jrK",
  "key27": "2nJCfeXbfYvs3k2ZnjVoLwJtwmSdDcJwxe3TCcpgTUJdmRh3Ek8Mty1NgL8RRXhTNn91Q4a9G6xb8CqA3JZ184nV",
  "key28": "4wJCbbpQ3QwZRAxxLCpm5xCtnLtEvXGBxqHJ9ytrzyDFRxe8jDSUZfPBtqGjudJLFhN7nLGh7mvbk74RAgdcaSov",
  "key29": "4R6u7DCZ1rsdWjYSrjv1eiR9niwHDcndYtJSp4VHVWn3CbTpyhQbNAE7fzLQ1s5xcHfvWowVG3WcM93ziFegSmMY",
  "key30": "4pMQbhNHpKMz3CE9nDCMhWUZ4DoXZire26V92krJynd3wYTV5e2NApTm9SvpNxhZovMSJhio8wTNgbVqHvtNJRUG",
  "key31": "5shjiSXupjUWNGg7587DByuWH193zFg5NuUzwZ9VaRRgN6SGYr6eped67UQGtjP198svNSwmy3BT7CGMVK65x49r",
  "key32": "2rVMTimEMZ3tWbUr9EyHtxSZxk1DzDWG6cuZ5ePESGSwr4oUCzknHF8DGsSgeUsvkPoLUK9ue92By7MMqm96zt58",
  "key33": "4UoT4bzX67RvCNSz1KaGacZXELT1UrTbETKhEsdipLR7VTYFdNTj7pJWKwSJotnfW6BGLpqkihJKQKZjPwx94ddp",
  "key34": "5F7ZG2Q7bnT6CVkmms2oFfFNXpNevaWmPra7Nji5Vuz4KqHgkmNgHftUkRSt9gDSseuSwedsngXANeaywYJZJFCc",
  "key35": "49nyWLctKkcw4gxJQ25j9DZdXhw1peYhboSyaJiYRdH7fiAE4jVvi4jDXLve9RW1fGEt5PPrjB4aBLo9wnPyoKVE",
  "key36": "WNv3vAsSWbZEtaro9jcGk2woypaofC1Ln3X694NvqFHsbeXADmKYmGXwPhTfKY1zySrw7nDSVjvdEMRTL23LFe4",
  "key37": "4Zn7fEY84RTD7gA4ZJw8Ys4Lm3QcZm2e957b8APAisZXSbdeBFsfzxtBb3U8mHWVKEgzhAMJG6nHwKXxjgS9vCEw",
  "key38": "V9MbaiUTdoRfwu46CcJP5Cvy7KfcfrZ2dtRwrxSdAHxNAqKXhsLo1YFK8wVJ6QXXwsaNEEkUoLdS1N8DAQ52WJQ"
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
