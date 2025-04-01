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
    "4Cry3roBQYU7g6fD3FZMhqsE9LMpLCVm4rNtYq8sdwsLuQAfmMqnnjzQTmV58aRHkUDRV4w58eMeg5qEcZYE2yLm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Wkmx25ximPLvedTe9LExzSHCAca8eoJAbNDzuuvB2eE3tCD7n9g2tTb9NdLmkoACix79KcsjviqH4FxaiGN3qK",
  "key1": "3HVzDoeWvnKjYqs7CiF41qaYS7cNAAzt1vXCaYCrvK6xaaBm8B6sXWQGYCPaBqFVEyvyLtijBbCWhWstpSZbE7nh",
  "key2": "ycfAJdKpMhiAoPNKXCemaKW28yHhGvtAFZGkZx8AghCJCBn55gjxUEh2AVAdJRxEeh6yeTh1HJL7dHrqkg3RgV3",
  "key3": "4YZevopbEDW2BjLkS3BA8K6bwHwDHj9pg4UKLb8AeV6nmPYvJxeidatGUYFJhyjuygdXa4JkV6BZjYp72VdRryJZ",
  "key4": "3Duic75JB17nzxUEZvphumdZ4zLYuYTh7avkAAebY3jLnPZxGKjLar83QRTWAps5EB8KycTQP3AqEt4mhQ7RMwkj",
  "key5": "5yhWjbVr4yJ77r6KHXBCBnyvapHKdTwfgFC4U6HqTw8xxKj3qsJUrBDKxeURMPDia7QwtEAWJWLp7pCnDvR3MfVp",
  "key6": "3TTPWqwbCrVyExNMquMFJ4hsaR5UqpWFSrxy17PMKKhokMFxNaFWLqzJbN7rNcKuBP5TmypotS5422DDQz9hEUtH",
  "key7": "4RLSLruYryjv7aJ2yc2txhEWu7dSxtLDM5gKWxQxJchJcM8VcUzhtEMJjhiKPLLpNNDmKgsNzD8sc7TrEuxrpXo6",
  "key8": "R8c7fGX9Bm6Lif6nTKLzLghGpxNj78VzuTkiiChw59ByWk7S2AeJVFyBp18nMA1VnVzgaLBBA3EZx4RoCAD5Kbf",
  "key9": "CYQLDYZjfc9ib5JoCAaXohURnMya7mHWsQQDDPT5q5uDyzAHo7KW5VVPi4mC8DpnVk9EvUPupBne1zVSRQkhcjF",
  "key10": "525oJvf2BtR5Ba7MLuwVV6fPaMy7F28SvCpDhDthCjwxSfDg6Ki2jhuvuA3F6X99mshctvSEahibtLrSNKPTePCT",
  "key11": "5ayYmhERLF7mDVTp8942XncTP2UeDHm1J35ihWoTzjoVbXXczu9UAowzrxd9h4Hbs3zujrDzASBFxGhWQSWRJ1ht",
  "key12": "jfmsqDsYrZjARM86wBaywnFRYhnYphMsZNrCJqLqM8SZ6YW9Afo1JnBYoHaxg1tLVhXjDB2uiUn54LZKAE86Syp",
  "key13": "2TtQY6MvhHXFnRnusoBBNxV2oTDpNosVm6wYRpumPohhgNXZJ9FhNct9HbMkSz7pispLB7UgjB7SCmSQic4VRxSv",
  "key14": "3icuyhH5Nt1kR6HDeDQ3fQAuqvQcm9dywZVN5ryRcL12FwaHkUXMW5trD33k6TuvcU3XfioawTcYU3GZfo64zKi",
  "key15": "3zoUeJrFnRm8VCwcTieKnkKMtAAw59DxU5kBnKRTVDms4tuDN6yasfkPKNieMDzrEmUiyw3hrEVn8NtL1tzcynwU",
  "key16": "4EDWi24PnQH7ZKi5gbiHD9xD66vujC8LB91Le6iQEsc3PwUqDqphRnG9K8TodFZqnFQANNpLhCTd96YD8jmTRBC8",
  "key17": "4BwoYXg9t8cXe3nK5g6k2EQF2XELCKCXi9AZ6oDaVMAym8ouvnC4u38kco23cxTsayUTJNRzvRaTMc2wD4eHdYpJ",
  "key18": "4KPVA8kKD1Bxg7y7BCoHTMEhZaAYvL2FdmmwDqmvtzbbZjJ9Bibr5eU2gh3soy8kihpeHLpegpXwmx3AdJooZhGg",
  "key19": "612CZFQpt6wLgsreZnRtnRy8RZihHMxiRuqk6WKzqfzKMMrBDDVLDxzL5AUcD3Zu9jDYAJyn46r7DkHMQo1TrAcE",
  "key20": "5K7SZ6WYvv9xhFdzec2mAqTnYx9fqvqeZjp8p32Dq4fedA1cMEsHaDwRKrknVCZWztG8FF6V4vQQKq2BiPKtGRAJ",
  "key21": "5N7CdayA7WUzYEvC4xbQWMpffEiAxSBsLep4Ki4q8YmUxGN8EUtZeNg3KKMyV1VqeqHH8ZrHhNLYD4iXEy2PM4Y5",
  "key22": "1YQ1nJWkWi2woGkUHSifq7JtZfkaEvJoWJv3UAkcqx4zj7FwYQGeNEQcr4iQY1PCjVpAfAAh3pSJ1ifW2p5os1",
  "key23": "2ByZ5ACCw6r9QJx89MLFdhxRn51sgGP7s1Pm2kcHr91dDCD7VApMEXjQcq6zoxKabNLvBMozNPQwwhMKX55vpmbf",
  "key24": "gFJDjT7EobdbiRXfQ9Z3X2Kjg8gecHFJeAz5Pc72rTiTLaLzxemKBhZ72s6g2c1Xrx5cTfwWwhC9rWdjVBFYzaX",
  "key25": "YaCSG8iQMdxyQCWGNDJJUqHKwfcXzwSUYF21zswCNmR1HxCn7B4zKhWqrJKuPk6v3nKLdRkhNCVxsKHLxDayefy",
  "key26": "5fGhAoKCUYtdGPHtz2axNbLAgyd8amzunz3xgk1XSvcMQ8araEoV975nhviCiCYTwb9yeii166bEHhM8oTR1HMTM",
  "key27": "Q5b7DzLQNUpA7BWGZz6JsXBtpR2F62iq59eVgkhPP3aXjWkWygRE6P9J4ouQh5qSVJFwrrW8Do1MQczudiarEtM",
  "key28": "3WQn8d1vmFh7tZ7qwyHWk8kv64MX9hA3MoqeQWTCgzWuq4GkZfVar3Jdgn4XxeJt3PfE4KkKcdMzR8kLAtMjVgAS",
  "key29": "3Cfx6MGmhkuYMjQWAjMtVmaLwrT1TbyUSNb8z13Rt3xw6jyTfwZ2UodkiZ1CNPjXksLm5XdXFbUpPdHiQkq9shAz",
  "key30": "2iCmDuSwkYuaLGUNeXWvAEE28RBrpepafKJVYdsnquojjQPWJS9cjkRQKNPheB6oCASCxhWkadm6hbeRdQZfuTYx",
  "key31": "x3YjrYS3PN84ym4v6wZN49G5GvUkZc4ZKo926X83UfwZ2dkNMw4x6sQXxc535LTvBz37D571nTgE6Luh12F6mN3",
  "key32": "5VhWRpS4XntnRb6jU8hFQ8K1QtZw5BJUpbZEu8LCaTYqNrgJgLatVmdWUZkjsrPtBHmRySxUzwvwvZUVzvf8xLMY",
  "key33": "3p9un1irmLsu5nrJNFzLsWq1NjoJ7HkzHXzhtHCHERVp1xP6nfwL2YEYvvRonQG95Bj6xbzPFc47bbCpKegFWfbT",
  "key34": "4TWqfQyzh1XJFyCLcBR98hFUcoC4hQmjBdSjm5y99mxuRah8e4hX9a9rLRpfvHitFkwBGNCn9kC4ut2CsMoPGS9G",
  "key35": "58JkVe12cr6XYUtqmfZXTPfLMdGYWV9Tq4eo8KNvrpD4g7fBkfFDwvsAcDfgJ1eqXGqjTN2ZthWKDTf2VtY9ihSC",
  "key36": "cvVEPCE5SgxttMFDJUHKvfzr9xYkMN2fqgH9w12Er6T6QRbrWZ5pcBKh8DLqcRv1WCGiMRQD1SRhV1ad6G2yyt8",
  "key37": "38ua4cFBarzXM22N9i76NV1TPmZvYGCrTaFXr3pBULoGgSiRWRML8Jx6kYpDDBEfMVzdN8r5SRjtKk3fwER5kXrm",
  "key38": "3r9dh3Z9FCDCr8LNo1QsjuhCP9LzQXRaVhz4s2QtoGpYeoVhpmgLs1G7t8nbGmXcqFyAZbY4UwGm7JASbZ6eGpYY",
  "key39": "3geG4hmy4geFpSwWcfYPecTfP3Jfbv2S589CQc5nyvdS4VLyXkXzQvutCLxMpHgktYbFdh9Ems1B2rheE2N24Nyo",
  "key40": "2A2PzvDiib7DSBDKW8KAcNX3NxDCegpXNBYJRrh4H6JZPoH97VZNxVkpyqTrJ2nPxqQQd2uHEnuHsYpLDnRRo8yA",
  "key41": "3mKjfEL57ApnLmKeQcknN7JYhcvQRL1z26tX4V8GiJhgdhdSfURrtptknoPW4REvnocfkyc5qgkRP5tEoVRsNWE5",
  "key42": "27LVSm2f9pn5ADqPH9h3RUwN4Hu63W8UgXHsAd12sxudKuJ3VgqEP7tGwkky2QusDeoTizoixu1Sa6F7TZGD1qfd",
  "key43": "2fmtgg49fLwGnArg8dXBjh5nBXtdveEWxjbhAqXTtp5HaU7PKwSGVotrFXbprdjeuLEKyC8Zfu19b4HUCLnnHDXw",
  "key44": "63o79GMrnAiMzqUV48G9UyimtiRA8zrv5FhnFgLWh9nmVKuTmAa5h5eUUdC9NDSYJQE5LGWUuE3DK4S4Ccm1Wyy5",
  "key45": "2ULoZSxmYkiskYsGQmYnJszQTe7RJPsn62UfzWHrgz3DGZ3zDCq6V1DKAMXM9RkAxTpcP6eDBKvhCP5YwYAkgVoq",
  "key46": "5x4sH7PZPpMPcR3ih8JQeiAuAcPTUyWRyTaHew4Xp6b6njoM31tYouuc8EdMjGCtvYfKhPwUUeV62XjKzFz5Boh8",
  "key47": "28CTWXeVRhBLt7w8H4MkmzTB3J9quBJYKDAPupBvmGw4zfV6EBVMfmX1CmtCyKd1S4ePPrUCMkQudoJqEc9gLGwV",
  "key48": "5xZdCrYDxCQgsG7GwLeVFaaaTYeeRGZ3moH7GYJgpnFg6FySgKcQBXqBXic9jpsYVMLtQR1gANzZTykZbQBAMQ2z"
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
