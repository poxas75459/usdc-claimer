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
    "5e7RksDyyLPWNuaRPzqE9kv4whLjjBpWuPanAdPR9FfY4Sd7TcwMRqjTvTm8ouKtmASSjc75kf4G2B35atrtCXiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WxZ44VPX4kwTXvHFQxMmdwaRXX3C2surtAQFLx1SGVsbnt9q25YeZ5yR8oYp9f1ey9o1Xa63U5PjKgWASpKob8",
  "key1": "vK8kvYCuxwEz1bF82RDKvvn2jstfCAnfG59aWpg4uGmdq5xA8sC3n59iL1WnmqJcZGtL1FNy8db9STawESmX3f1",
  "key2": "2abWE1JgdEFupkuP3GY69E7UQNuPTaFbCnWJ9dkRaZbZRuekhZqmvrfQfK5SqmWQAMfgbEC89pGUsSFJPJkKFSqb",
  "key3": "3KxbiDgZzHzY1KiaZu43F7c1dmDw9EkbMAcfdiEFGKbWc5bZUjyiT87STp6Y826Hs8zUiSAnQLx5x3FN5GUoD7wG",
  "key4": "3XVy9sDcPbHxtbz8v66eZFVmb1AW9eQSgDv1K29hxeULuZWDSRUj6X5HDB74ijkSwXs9fZXau59ycFNJsq9TUydJ",
  "key5": "q7TDyEbTNwyPBXeMekNbfNQzjwukxRkp9uFU6M9NEyod9mTaHQRH21suF8J5zNEBRzPu8DKXqK6wm3b5Ya1X38v",
  "key6": "5b4tBuUT6LCiKEPAsHL5WJbLWZRM4vfznoTc3SmrpPUsh35hqpkHbPV6KYJBhX3RAutX682VLYy24pywRZY3a9fX",
  "key7": "ouH8z4MyN6Qzk1KFRfDStGJEBRSt3YbWa22HoZpXmCSfbkfdPnWSYEELJW8SbceHddpgyWSDgSisSbhLQXvA5HF",
  "key8": "5zvmYtY5pZpXY8F7gwJeC1Wv5bPfhjsFjCQvJbbu3WYCZgAamx5SjFZ4MnMp4jZWD5uPzGiWqixAeGsJX8BgK3RL",
  "key9": "3X55oUH9iBSshf7hUommhiSJgp2XNztoMiTc1bhgBoc9rZ5QNthcvdoSwj2ii7KgjRZdbLNhShck6W1PgjcPTqnY",
  "key10": "3ffPkGsNgqUBu7JPV6JL1xgpDrc2xZHWvMq7p1gaYo64jKZBST8hebfL4C68H1EcPeUDXYsvQ93QfExvefzYPSKN",
  "key11": "3oJgCS71AScH4D2E9vsZbbuqQszD7AZSdqUsk9nsvFf7keuDEkxFNVpvuVbPXN4a3c9JJkiaP5LPznmL332B7YFd",
  "key12": "29W3UNiKEzycV4RA5uth2tNpqUEqUGmU6zzEeNigaJL6BYxiFAzHQLmAqfcExLVwPhuiBYeMqcrBWuG19cQn9nxL",
  "key13": "57PeYZg7LbB2FQ9oouR7wiv4SmvWppojcCDnaBhU7mXHqEMaxA55n4UgUCPw2R9SwxiEk8R55CPG1rUQLBgdSTDi",
  "key14": "4CMwfyWoFq59EiBGJEywFFMzyoG3ygRenphBsrwaY8QFuj7NdHYiQ9UmmNS6LijqfJAjpcWZ7b7P4CaQEaN2QqNM",
  "key15": "mK6pZt217uYP46kwLEfA8xSJRuN168mAPbRccqgLvjNW19EdbUHXYLe1dP9TXcNPN6qgwTWMqAGFKkPVLY42o7P",
  "key16": "5EZQ9TJk6fXksZK3SRpLwnqVmHVckige5zS7EytxQRjDDLoGGU75TBGQCuWQhNGLqmYjTXqdZFWVBdMMhVVx7A7X",
  "key17": "634nc2BtRkf89qR9HLrpTpETNL5ji4ANYLAFEcw3PDTpkWVuag6Y61x4CnHdUVQi15Jc9EzStAXWiYDCZdgY5afV",
  "key18": "5wX1pXAJCdGbGnQDuzFzxE5b43GvgCcJej6NBqr2X44hWPXXym58StjPwtieUqXnfCDpfP3KsRL21cmZwEFdhCLy",
  "key19": "416kZGJDPWvNjXbWrCUyq5azCdDGmfB8W9uYSAgz4MHaKa1bkVP8qBsRaK3VvtC7uPc1S6w1HE7YrHqJCr8cGszv",
  "key20": "KAujNmfrJ6eWb7J8fmVFn28Jqb2aGtrjmqYkUeWcDNqyq8VQMsX2xTRvSXRdW9WTqvp2RDy6YnH8bgoCdS4ct5h",
  "key21": "ujFXGfqtqzo5gicpqhXJAX2pvvevh14B3U2k8UoaGc9a1AQRdcN2YazVnrxnXDJdsqZHGRKRjn3fmChmwqqoL1D",
  "key22": "58cfyTCLrpKWTM3rgGMFZF2AefLZU8tyxha8yeEp7bKfEjLUigB9SQ7YFLgaK7EaViR7YBiWVDW52Cmpy4PGTrZA",
  "key23": "3kFgaMbRf9r8UyGcUitpr63VnJFkU1s1XCV3Ae99MpvuFnkoQdzo7nGdkED5fPTfh4WEzqujorTXesUKXCCCavFF",
  "key24": "2Yp4jRnNPbELucwq8YLiWQNmVEsvJqaqmFkXjhp7CcGzBTy3rjoV2Ze2f1rrzHG4TZBUGjDs166Xt6HTSmvU1SYC",
  "key25": "xXySxSM9rtC6VWoknNPxzoZTquPSSA95dmmx7NgsNxVcfp4YXngMrNtP9GxeC1MoCPQtjUZqxqz3c2BLPtFeUHK",
  "key26": "5J9hZrc5xcDHRK65TRHiM33oCanwdLkUHpN6GSGvh5PcDFGymJd7rC6vUpk3s3DDLae2ojToKcxKvDU2uQp13XGV",
  "key27": "2XuCPV4jkYAMfQ6Cjro7zeSocU29Pzw28iiSLT5HVVVoHNtjsQtxGYghDFzsDZCs8fLbsxTUJGJXhZDEH29YEPPG",
  "key28": "3z8HbRRKxeHGHybXy8wetovyTuBHgADVTxEVwsr7JKtF6znmLno7gVuYZTPy5XvYpS5uwCvvJgeVB7DXDq8Y7bJJ",
  "key29": "3goAhfxe2QhE7D4pcMckqeKyCJWF2j9RDH2hGtvpoxrcySh3oKNVSL28y1yATLEX82jjc45JAtYtiuSCKqhGyzd2",
  "key30": "2BmHAPnmYtmtvhcpRxY9hvnvW6TrWi8ae4JgPRVLxUbg4AYpN2Fd9ipEAPaso5tn8pMZUVHvfJtPpQhA5JLxMNQc",
  "key31": "4DQn9snLPo1X9hhzrMFddf53KmbN8EPdBbd6fRK1JvAxVS55yubqiKWctMiAeauywdKf6ZTW76FafcXb9pCgtt7Q",
  "key32": "5eiLQxBNsGmZkbSNdUhZpJu6gdbdvQmaqxbnPrzhcBVXZvEfo82eiEnGKhVasL19kXDYhwnWpEY8t5ewQqaruKPw",
  "key33": "E528oMEGenYm5EHQioDKw4ELbmd8uaDHk3m8KxcVxzxSXoFjivF2QuvXBSwrUvwLe2jWqoNDyScTsyibRm7eiYC",
  "key34": "GiGfEBezJ7xjjuMiJPZz1xRRcDS8jAgh5TEHovy5Laezz5XMoBxAD3wXPgccio9LpPRQkVuPN3GcvV3SKsz2Mdi",
  "key35": "5LCPd7BHzLrtngsJyEkjcKRXGFky5q56MzrTRJVc25mWa1TXBHEWBG8VJGEBUPRhwh59CEobuiaqgBLR8g3xP6WR",
  "key36": "2wtiKEPguqZgmFVCnyMbbvpLeD1RogZLeHtLrdh5yZmWpuxRkQQhnwJGSxo34C4VtHumPPgkcab9KfvBNSx41j9e",
  "key37": "2VFci6MASxTm5tioWntSu2sMzpPnPaeetQEKHNz1qQWWj9fxND7yPx5crNkZfeA4eBSMTSSvimmsRTx7t9y33HRa",
  "key38": "2zQ6jcJMzrjZLiXa262dpPfi232btoW4PoN35kbA5iAQJ6MDRgR7xkG48UzEhf7dC7YKscqwTmeanuKdAR6EeSXU",
  "key39": "524vYwUDrTtCd6s14Y2CpavJ1Yb14J5usbnPyXkseM6wwWi2m8AirGf5TdBDz7DiuUxJbwVPQYQx11V3p3AEWDAf",
  "key40": "4YdVJohPQGJx8ZShEy6FpRktHPWovWXncR32zfK2PjdqDaw2LrBLZh8sUpMciHGgdUEu1V4NyU95sZS7prmWhthA",
  "key41": "EhPsneGdwa8u8T9kwfDfWxpLNsmvMUCy4jktkorHXCr376hQXMM8hyvC7mVRqRN7HR63RYy2pL9WHCy5jZNoQrz",
  "key42": "4YixXcCLXTXaGF9UcS2qzzvyJZSgN1RgUZC1nH9SxvFSJ8QnJgAcYgGEd3MEyax2gzkCKbb2Mz7cSWrBsRxx7dke",
  "key43": "wcNmCsubXfU5xaaLTHWNojX8Gu65ZZr6xBuhwxSYzemgh4EM4zFbQJ5dsHJHkB4ryQQ5QwDP5hXwomXjugsQ4Ed"
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
