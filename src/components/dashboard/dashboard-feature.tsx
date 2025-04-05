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
    "5tC5cFfxDzCtKLwLMq63mBMc54GAWGf5w8uPK48XD4UDS1Z76Q3MFKZZg9YjFjU1ixzcJnSizs4uDHThSprSD8tD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qgw5nzeKj5qRTVNCMAHmaHYVgfgTmu4zBuErx7cTJVEapanERfnhaoJ2kDbRMrJ3ieKX833xjSF7Uc6LAjpVW7k",
  "key1": "2eWBhVpdwcS88abwDuGH97iVXCDJjRPBaftDwSmna3GJjLm7EVFmszH3MrHiRrPBM1ezG4dQfLwYPaUQZrZpZYiW",
  "key2": "5i93C2UAYagKpaqBBES8BRA2ky2dKsjVAfY7PXmVrSKaji6zDdmGsjjBeE4taGEJqfcRcuZTaRCHFdZo8xZVQUg1",
  "key3": "2YMpb3QzuvTdk4L2Xzcs8YYrSQf3BXnFaWUXoczAF7Sf5ycZHaGuS3id9YfX8fC1AXi28cvBF16JGk5ZnSCVoRLS",
  "key4": "2s5VCdDXbSa4UXTdQesQgrTvq7kmW8hZza9sMQPcHd7Uxp6NhydktaH79hCekySWwQEXYvTFVBEmMGgXZ5ak62K4",
  "key5": "4kbeh5y41KTQV29cWCLBp4srmMK9Kq5qRHHztnpxXDHkVeFD9gfQtuRgVNnDRpNhJjZ6DXRLD8yNbikTWTPzmUiH",
  "key6": "4DBthv8yfkCsmCdgj52FUk8HMbbTcmPnF4ZsGtKHECswoE72paATYZU5xE8w59tvAsR1NgNbfBhprPg8x1fK7cPL",
  "key7": "2B64RshXLKdCtKk7nYmbqhMZjdBuygetr93xrLRxc2Ckqhor6pK1Z9Vn9YcMhtPPS5Jn3u6cppa72tJ29tHLUhwC",
  "key8": "opHTiN6DUQWnNDpbbhc4eXtLjyUQg1PeCZPT6QbAoHRf9JML2VgoaBvVVD67EFiDH2d9ejb99XGBrRBBtuCSFS5",
  "key9": "3uzHbnxvoZ2uR8VVTbGJWHNKZKwNGdHLPhc3GZ7niAaAsPSTscfvigVGZ1VroxKZyAWSGYFvUedVUEAw5B3ntD3B",
  "key10": "28yvZte2ac6ZpWLb4KF3Ag6TuDHgqsGM2HjRNRB1VW4u2wvStJmSTQmPcrXKR2nFdTCACNjdYwYCBnxabz9CC179",
  "key11": "31Lekv5XuQS2adBPW3SQfUrhRMugYtBuUKqu39uhLoUWdbJky7MwUZ6MXrszNXv3Jgozv6qiVqfRSq9AKVA3BYB4",
  "key12": "2ZCc5eXaY97Gj8xF7mBrmXH4ZLoHmLFsKr6EcPJVmZ155iCW4sjxCT3HzSQaEtzfDhoPaRYuiBGRxWD7jmrYgmhn",
  "key13": "3koPfaRSgd8dsoos3vixA3Tws27okFpNspqFZcGzLLaGJ7zbK47eja8Zc9oLhXpa5zqGke24rUteKtPU6EQW5Bwc",
  "key14": "5tt4QkTec61GUe736NsdWgiQFF4cZPWYvzmdX2V6ktcjrzWorKfS493GpBnpqhWd8nMo6jFpUTZo3r9PvouPEUkK",
  "key15": "3UpqH5cgHeFUYefix51yYkEuevX2XxHSQdc5uJHhDsfaBE7FsEZ9zB9RKrzDWoqxt1Mrg1gD6AyGiqW4937ynf4w",
  "key16": "44nDAhwhAbi7kJ2CMSHjX53inJQJR4EDA87AzvSWRUPq1YTxfTMkoD5B46E473cWvxRtnj6e1VVDndQvS8XHQLWd",
  "key17": "23Hov5qf5djWMevxtfvQtfocaR9pUvdxn7T8xWdk2hccMTXzVJgumRA9UVzSbhsi8UEyU8mBC8nugzHByRmrozFT",
  "key18": "3FYeQHUryVV86Kkj5gGzF1Tn7YWBPnjs55yvT7TovRrqRQS9ek1foFfP2Nq4z2iUzu1cVVo697ABXwk5zV6sMgSv",
  "key19": "34M9RpM8t7DLv6XMWkSpbD6bD6pohFd9ZMJfMPWrUDPh6q1aVd8FdbQE3SgDVcnvytwd8QXEu2rhJf2tSbj8ij8q",
  "key20": "2ozzNqBAzetagzDtdCg5o6XnKkVCcD5bTcQWNVJhEzetpAG27ga7b4y7ES61aZ6aAnYkTunWFWkThC9sWYywKHbq",
  "key21": "49vAUc5BfpSE9PVPvYVqAbxJ16efkNfapcxiVqWpwUAGigqTyrHCJTwQ3dD5uAA8hFNrdSHN2FLkoWNHtavEiXkJ",
  "key22": "5zPNxAsihgEcAa28ZFRYk32kndn5Dqqz7T1f797CHW782hVnfygHJs23msePNURwbhcrMP9Jnk8AQExEVXthZdrC",
  "key23": "67VdgHRt1f7ZeGiUSgr5QBB3MBkYdUYatCZMb5nuX2QrFSKR6AyRag9Pu4kM11KnTsPQQRrgfJXQGdy2xVF3jP3u",
  "key24": "3yDUjLYkL4btcvQXX4K8SrppCmowCAmciy745E5FQLV7Yt3HTR6sBcdyUMsm5YBxXdier7bqNHLQw4dTrvfoGU72",
  "key25": "SCahw6yvhFDhb8W8wF3hrzfkBdMmq7rLKTSkVj5GSQWuQ4M93aZgZdbj9bjUfE5CReRSyvXt1EJ8zQ1iCJ9wthC",
  "key26": "2zusiZNajNDj7Dg6BkDsoS43ocUGpn3asXY3SjY6qTfow53PSDt5kMu5x24jQFpAsXUWvgswczQUMFBbfRTNZRYU",
  "key27": "3Nsk9bT56LQjQ2BhV8SmxnLPFg5fnQbjKd7mo3gnnCMw2bVtpr8fAFr1wsKXdfry4TfZAZZQr1zmGyRKCXTHZe6T",
  "key28": "2p618ohW4ZDd9bArLKF5D1Do6Jo7XnhHD9WQMYo4ijECK5TNVAEjMKiefaPnQYWx4VY39LzNWTRc2SPqtdTx2XrT",
  "key29": "3SS6CeW6jTBakuLpRQCrX98qqiFAHoNc2848aHPx9gtXRByj4Jfou3jw1axQDCsdcmquKujBFZEyFbZ8aQuCD9t",
  "key30": "53xxpi3WR6BnvZpaLFiLN5MFnhzS7vbT2wGqSAz3jSMJArQujJaR23RzPu5yroZX9mUrwagdGdF2VjgE2iKpTGQH",
  "key31": "3SK32Lb1fHeChDVfPqkPQ3xP6iVeFZJMRzeVnhSaVhzU9DzZhuAAGEGsm4psnwM3ivmMMdPtKpKiUorzbGwAp4WB",
  "key32": "3JwD4XzCLEEeo5479GGnPj7Qjx92roqqASDFMc7JJzLcbzerNQSndwFwRDmRuTyh6DisPCMMWcg4YYiVTMP4sQNB",
  "key33": "2SqS8jUZb8GHMo4AcMfe3UTPCHxTK4JWMqVPPAYdrrdxQUE8w4fXVWDWBsVD2xw6wbtH4Hg75vr8QmYSMmwDpR8e",
  "key34": "4BEr3xNfHNkMqoBSJVEoCBEwoTudrG5R2ANrSqk9eM9G5yQGiyqhcsAXCZvLFscZy3doJkZn4oHSAE1YjzMQDmia",
  "key35": "2tuzwVU7oT5aiXsA2LtW4SvAM9cX3Wrg12iHy9rXJpd6gxNmGGALFhQ2ZMxwazjdPvz4f4uLSaoqxS8VwVLmBUD8",
  "key36": "4QZRTDz8rpHtpEgy35BCngiSaQQyqAaEwkyWvBTiTvpCaMDpvuSTjF5n4ENEzovm7hfZay8hvb4RPucLKaTNEvUC",
  "key37": "5WBpR47p1V5WZvnRx4rvAAZqfdv9V5fju83ShSS6zXCqv3nfHkXkpdJTEkSmdsbxSccABdQESrfzEedxTpXbbDK1",
  "key38": "HW4Dz43ZBAutwKa1eqPtvfwc6AJdLKEn2TS579MoxkQG5vYEpmH5RsxW7AR4Zscdm6D2wW742wQ9hAiqkniiMwZ",
  "key39": "wdEgvaXkVCWmTR1Q9nXYx8mpkFGgz2CxRADTdeHLpea8cCfrmxR4rRfdELoKcsxVJQ5MbwVAKb76CpFhRZniD7C",
  "key40": "BvVECoBHE94cwrL9WrnVsuCdnRYasX6kPLQKui8aakzTtsC8a3NXaiNg21iToq7V1ZRw4c4Jzcr7use6cfpmXPj",
  "key41": "3P62keemKZsfR4ux1RgJ3t2YuqtE3FJa7kHMDxFg1UeCzG4vtrbzuo4aV8KcuVKT72PjG6VMm3joi9wdwNnNZDMd",
  "key42": "yvZgaFtVxuK1DCK3ukJR3c4koyXgErY4jyT8kXB3ZdJxBycUTzyenUHVJSsbXARTQtEJNs9jmDSYX2UB7r5K9mw",
  "key43": "2G1m8nwT7JUzLR4RWzPBWJopmsjcSrdJ35ZJdeeWrsR6SwXdqwiPUAzSkqwhz5P3BsGKCqjSb6mnN6ZmPzLLKejN",
  "key44": "41hPTwXDtGkUbMo51bFfFUAXiLPrxSFi69jSTnYAY9WLXCdWbV5ZNPBR1Ehi6e635GWyAUqcCP8tMtx7c3w6kKAM",
  "key45": "3PgYJbwC6oDdb4WmsnRa6eLvReycESUikdxptPhHnw3xfRE99YNPYshkeWGZpq7mVV1NGr1nk73H9cTbTcvMGPBa",
  "key46": "2VYQ3qJHAKdLGaLoVfrS5hs7dMrDcuvucXUEF6YRfYvN1WDfBjMxdWqLXdJUYMM8cFyQAAs8q4gUP57Y8xxuzNif",
  "key47": "CuQNA8oJTxrejgkXknagg1dWLg7BPQBgDaZa9izgTudLRojKXZgLzoLmquYxZzxPGJcDLBN9EdF2oLJoD6a6NWA"
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
