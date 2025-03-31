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
    "3igbbEc5rbuPxB4hN6n3Zt7NLq1mcw7eEhSMWj1ymJCQpRJFdi1zDeSCjH9FW7akqweVZKyqDynoNj7oVDwALRSL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sXTUQf2BTJWju5VoQBNtpDW5xLMARtCBJmmNBoKrjxuorqao4pN3ztMMJBUzY3CFLo8AJQE2t3nagFtwRoraL5D",
  "key1": "4KRpNgLpvbEQrQ42VLAQ2XQ6gD5BqVjKq6RKXu99KF67fWcgzaE34dYdDBGGZ4nL1aWbKto1UVQm6bFBbCbd3bPH",
  "key2": "5Zn8Gtivyhb4PXNxaEEggtvBiLWUHZQKBp9srTNP1BxHkNhX3B112ftpzTUSE9bQC79yeQhLofU7uEx1ktuzBst3",
  "key3": "21vfaBDcTk6VShL9uxK1sTqoaAsex4QWw3VuXaWQgSXkQnPaxwBXSr8D3zjwsh8HrutWYfS1u9ACnSrvTB4EeaUn",
  "key4": "39YLpyeaU2Yx1aUHXvpQEiA74VWQCZLB1X3RoWhffpB3nNQYDTYNnrCcVSpjYEvUqbzYyswd6pwbEuG78XfKekca",
  "key5": "2sX1ftJPSy5azSKsszeiR5RiDoKAFXFvpYxLokgJQNxjeAfZmKWYrRh74jMpFsUh5ZM7wmk4woL5EZ46vxEMohRn",
  "key6": "sq9Gms9Nt3DyTRBCRHHB9FjgEXU1VgcVTt6LDvTVH46REZscVeXqiQVd9qYBfMUtkmJvujUykwbKhbSDLtg5PYC",
  "key7": "4bKGn8XGLSt3LH39UFPkL4fLZQg8PY1Mi8r6GLqMvDMwJtRADwQkY8uy3WcykfHjrhVKgGkswkPB23F6dHmnFnmN",
  "key8": "5Jsmr1kFKbq6EEfhWoUnbp8sTNcqZw31FeZNffFvVuxi2WXfPAo2YfpaDpXuWr6kEdd8qeq1SUPgnfKfUnMx2eoe",
  "key9": "5zeuSBVYXC6Ard5BgoHNwKUwY7mQLiPsgaHcRwV1YKQLfbcziDTJKpt88D93PEWPTtCX74fi52C4RcftHr98mFNZ",
  "key10": "36GQdidmXGjgJqbJGoh5PAmc1f34svBiFoC8jdkxjbp3WRRqhH4gomwV66JxABKUndQz9GWM9efyLTLcnfQi1V3Z",
  "key11": "3My3cEDt3D2Q8A6WX2haoNMB611X7qu5fJN2s6dJCp9dt5Sz7JRtoYtVuzQDnKA8ZqVVAqQ2oA7CaZAWdj55v7fD",
  "key12": "4DRHoHpXzVrrJLckiGtmDpAa5Du76sfqw2MEb98B4mdRXYZDYHV4JtmX9RTtnodJsvDwQYwyrtjE2vHHoscD77CD",
  "key13": "dYfjB6WCWw6RN7y4NZ2TeE8RuY2L7MBsYhAqVr6vFisb8pH8FZqx7mEWzbgE8Eee5kvNth8KtiPXNiRd2Gwq4bb",
  "key14": "4asK6xqx1TrnqUiowEV5zgY8HPu4L2xfEgeF6c1gwpt6KNkSLBFaq2DzzhSLSLuuhp2JuZXRMfHeEr9jxJ7CigrX",
  "key15": "4Fm6LuRpxDDMP49AjJfSyLoXqW45uTBzBXEnyx5iZeW4UA8VAqcDxGMobAW2kLfCQdkAN1woepJNSHu5CG13E3tn",
  "key16": "42HmzDMuDQcAvr8QaXjsksfMnh2ZCp74iwsTVY2DUp16zhzUCSRZTMLiAjCskz5VcUAhjrPaEVKDcz2iPAqf99rA",
  "key17": "4ZA8a4EZpbjvBG25Lgj3BgJ5wc1xMYG8D7EHijArP5U1s1fGkX5dkqd5a6XV8fonjthDyfPYPr76YpQHkiYrgtQb",
  "key18": "41RwwJLLfuWerDRtTrE7GR6vY9jw6JoNBvqjhqLWL1j2anWiXHbzXKsS2MVp8y8ahEb3PhzQc6LPnQDqV6c4Kpex",
  "key19": "3YFD1KgnPA8uqjpkCrpEqZnShwkMEDJhPdFfT79nKiJcW1rxuiwCLGKU7ut7pevgo233TbpG3qv15jAEN39tKxKR",
  "key20": "4kEJAfDxxrXoBXQikMreJ8fM5wZo5Tms9qCVaVSTDUFCrjGvyTXXWgiyxtN4C45SUgWDpSGV8ZfTgFJXT5n8qZMj",
  "key21": "t2QGihS9B9N9QdDCWd8ohXHqm48RPp984kvDm8SpUsWdvp41qoXwMt8SwzA8MmBwi35JapjAtzQupkJLtEFaNPD",
  "key22": "2281F5funuv9pdBsSqmPTM4di4qx3vFxP9ZtDtXhPeC9diVH5ikniFviBdEztYVf31WC629K1jBBPHeJtBaW91SM",
  "key23": "64zJrU5jit89KhgUSCiSXvBo1ibtYag7MC2htPmeYJ3An41Db7YgKMMvxfh8gB5ZpUSGpAtCXFmams2TNzkiVKHG",
  "key24": "4aafYS8LpkDfNn8ooxDYsNGWBJcWCgxeFsXpbUGsYtstdTFRzkwQaqgwNJXDWtguxxu6mGNJm3Lkg1RuCgnauxRT",
  "key25": "5jbbGYQ5XvV7MBybX5zSomEnW3h8UdjLvFzrViYcBb3XN7K7EFRKhLbWtxHNMn24hz3bRPHrD4Hu6Jah7XzQ614s",
  "key26": "4AMK8pmFycG2EnM3hKe7D9svVyr9zkuPJw3hsfxGavCnRskAn9zgmxZL7NH41snMm5cBgZShUSLdFFtU3oYrXYyV",
  "key27": "3Wh9JRwEs29EkzyttSZL2CSAyAHsAXJVLoTHcqEMcuGjY6a6d3RqzvqNRtRNfKtfECgBCB93USjqCB24cyBKVCpY",
  "key28": "3Vrqo3VGnKHNxa4gKGnyXyuXawCkTUzZ7YZbHjL7u8kYVWqFUHq86Uub8A4cyb6SqtcnUyUK7joEVPjBbfuk6CaS",
  "key29": "3rpoFeZfkpUt9tqa2PiPJ1KgkBuB3jcSssXcMEdoQiWM5fNYLYX49VYZyyasC3SNcphs5d5aNinZhsghHycGD6GH",
  "key30": "66L4Js1zBqeqyCM4EBH7gatQDGfYoCHDgwWoRL6eVE9JHqF7weQo18shpdLAXHkfAVa75XJz5e46XU53nB5JynJ",
  "key31": "49nVd5iZ2xKntPkbx1hDAHnKKDPBMn4JdZ9QUdLiw6YynjwKyzdBfbtA8qtt3UJKnWLgtij2HbtQaLDZ5LjaNspS",
  "key32": "4vd1aqRkyzf2c6dLMW883aqRMpKcPN4ZBiCiWtETF3XuNsH4rVspqpr7hbHiipm3GAF4mS28R1VkbqM7Uigrf6ZD",
  "key33": "2zVtwRk9rqS6krdTAhx5q1E7HGKk6cWwC2DJvbSvcTLKsrqDVtwtY2kug7ZGAcmPFCAVTUqnqhE6FU1noZN8bVxS",
  "key34": "4xqYD6gU1L93ar2YDpPw9Uw2af2zGfLBDixjUJefcmgiyb5ZzfVfAPc5GVK7JKXdezepuWqnC2mTyDq2aRZNmYCN",
  "key35": "5pAXE9jAKnne9dGM1z8Q9Z9Yj4zUUdy9ctFXDBPLZi8uxvwgQTC8VuTjRrbGG9FhpYMquSFGCoznuoz2K3ySxWyi",
  "key36": "3zpmR1So8TQ7bvnYxs5hftAbQfmMWyzVJk9VQk781HBqymW4mbYZkDh5ju6FqpivxYVBWe5taB7vCue6LuUWo8k8",
  "key37": "Chy3xmSLUggJqEDmBnGVQXHLE2KHM71CChs9wP7BQqT55VZwTyDTmeRJZ1NQmCdmdeqxrMeiNaNN8rrxMr5R1eT",
  "key38": "4TWbsSHrRaaYqAGeT9QjrGkcv1SxJmYmKnvdUSE62pFNmM6xWX7qDsN94DkgjZKWphDErqsLadKfMgAtZVLEakmo",
  "key39": "4Xivi9bPiR42wU9H4ZmDYJawQv28yamg2xd1ehHG6ftk17YkxQYV4KmHRzuteW5XcQJqKUqN3bUBGzjaEuU6vyQc",
  "key40": "M6gpQtFP2hjpK8oEE5kbv4jXbLEkt48muhWUshA7bVDdifDNLps297pPru9xoAPwNtHF4jPxHAwdAt3krM6dnBx",
  "key41": "5rkAAT3XNNUPm3JUEUoCDRiFZDq2u3DWcSsS3S4y13Xewgu8LJiZszSuccaRAjNTKn719wen38uhUJVHAgqgoFb",
  "key42": "4WUrJkAswRxH8dLhGojLd9wUkfyrCR6DvQLFzFgKmQqp4qqtkPhxkFpSUU1XJDdg28rHGybhAiUZcvNRF83FSEHZ",
  "key43": "33NyPBdZ7DvWbVndwCZy2ypagpNoAQxMTVZJbdhHWpniieZaAAP15CbgR9HZghxd1JcoJsa7BRNkfiiJCJecetdk",
  "key44": "3FyTzize7L9ZNz7MBeaDRorfTsQHtouc4idiWhGvsDNwo1QPNZdtr2mEHrA9zF7dxVr9GfGZ8BUzcJy6b8KZJa1F",
  "key45": "2qphnv6B13jFSVGZzKnQctRz3nxZYjwQ1mdLBcFCh9RGu8pyrf5Bpu7PDrpYqWHtVpXefsaKgL63zryVMPFHLV4Q",
  "key46": "281FgLWnQDnGscvFKEdxvXYgmdoUKchkFwnxSm3H2T5Zyi3DU66ZYGS6ZgRUUt9ZBuJoTbACWiFk555xAxK3aMkm"
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
