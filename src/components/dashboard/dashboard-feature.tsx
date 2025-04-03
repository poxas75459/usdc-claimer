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
    "2nBgCJHxy1LsuSZS8bZTbnuZkSMVzis6R4GjVwjoz8E8QxHPs28pge1Y6dFECqzQRpCFvHrfpo3yNUkPtRoTaU4M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vRAdRKRznB7yVwKeQiR135gFp2btFkmYrGunhsrjrPV8ioyJGtpoxkVapPvmFfZxrVaNGwH1HcaNN9mCWDot7Jh",
  "key1": "2r49LfexaUg2rRjddtbZqpp1dxih7LcfDggtm5jKgQkJPLi2Dwt3ifLpeDoAeE7QtiWDhKhLV1qfJXjoFEpitvbi",
  "key2": "sfqD6Vcxhi2VLtK7vczgsCEVETAwJUPEWVC534WQgEJut69bndJCZaRtEHxzC7JCqw6Y4g17RfdMdGwcfenG1bC",
  "key3": "49KgavyYbpVz5j6e5XCm8HGpVXG6dUwSBmNDW7m81YLNVyqJjce5Wz28HXFy1boSRJt9vxin2nbBRJcPHZTHSXY3",
  "key4": "rMpS9FoSvfni7iq44hyia3xfZbLjpgEJLwcDKZVoJp7zaVfyZ9zsxucZmornsfVbjUncd4b6u9FSrK1nBUrWcDY",
  "key5": "31xJDMqcAhpw5Dgn2XRtxdpWNHGzcad3YJtrPzoUCnyXmu6gw1k4RKJrZup1HrXWLcg4tSiWmqqToT9fr68pPkSN",
  "key6": "Xb2sCMiWVG2hss6sAVES5MNtu7daA4kKUNQ3BL6FbSc992QnvmdEC9VMYXipFfwPxjzHM9QY9s79n6pwe9yHSgn",
  "key7": "3f8anzCB4FX8gLkaBRAjFheEBZJjwTvCQQye8z69LzkwqgGudQYbxmbdmtSD1mhvSY89dAPo6rWE2hAKtcpoEFyp",
  "key8": "3nvbzsWScLFqz5cUn6DPhyyPKz2sPx5TQTcequgrbCjE6tvWfFsher446qmHDc23QT6QSSrmjxvehFAmyFthbkqv",
  "key9": "2UKykF3qqxA3wR4P3Kvr49DjyHQFgSNUcyEsDY5xgU7sRbtbRW47XgeBLia3KUC9HCW2yREJauDjF56rAVeFqyvN",
  "key10": "4joStakqJa3fxqfndcLtjW3T3FS4DTtQiRizRrRarmgEVTzabtxxnkjGydnmSSSF3cxB7wa89RzE2UXWVvcduPeT",
  "key11": "3uZbGZ2YDkbgno8SrYfxJBibY81q9urRGSwqv8wFTmQxT8GVcEAdDzH9JQ5ZdNaFdNS2RKL9VzQ8Bn4Jd7ZocMdp",
  "key12": "5NWe3iHawTN5mnkAzbwUHWSrtQPuouXTGY6GasDumRAVe3gHVYwgFdMWgRHY4ngFXP4oKM2CBmv2TrACmbiHYV17",
  "key13": "3nyz1k2UfpScA7aJNufmf7YUFGq5do6jfAhAqXGSoDFTxqLH1z9TquKZ8WQUpJYibPchSuaqk7qsybVKParQ7Gct",
  "key14": "2poukCJSMmMsgxhoH61tdEBuzqc4jW5rNECBEhhk7wyvFKE56tNsiLdyBEtqECGvYetjcUhu3Q627RsbgoQG7XiL",
  "key15": "4CTnErYqJQF8s3azEmPw4FbHGJEisGtWJKEJf11jtNp3vqNeRwZsWRrShRptUqF1ir5Co6KKWTexfLU1ZKokkNVa",
  "key16": "5U8gVLieRCtb5Hw8euND9F1H5iAicmEcoQCRjgWPMdtbc3xN3ZehLd3ZphuJjSHHTkwogP6nzjH3dnFktoRgL4hR",
  "key17": "4aa2wnpo6kei9HDLm4XZdD53hjj8rH28j9LuhkdSRxVQW53LXzL6LRygsYnhNiRxydLyLQUktB9vUAF582fp7uAA",
  "key18": "5aWtF9YMXoS7pFRSdTmS3cL9QNonLq7X5AXKr5NA8hKGMwZQ7qGRjHR5fFkxNX6eBzjT985d9hTPdsvki7CQqcrf",
  "key19": "5kAMmX6gzGJbVW5G92HBxzBGvkJqt1hzqfyyAC86DbNDBezSc2KCaxD5NvaoJkzzXBxRZCvU5cPii3pHE28N98W9",
  "key20": "2FxiLiBqUHnaEbCZK9tXHhuaMBfu92oHfNWEAMqMCmUjZq548ppJ8GGjNjNZCgz7Ym2KjZMnDE4YddNHQhT4mdr4",
  "key21": "26KufWWnPyVSnhEe6SXpaLc1Pj1FZnhxSuLShxcrMq6xoG7bJLqX9ibQNtK8xsNzt3R9TBGSy1sJuBK9fFmrZa44",
  "key22": "2aSbqM1noQk38oBHkDr8SYYZLnr31PU66fa9AvyLP91tiHbe3E5kLQFMgf1xH11cV249MBxoHN4tUKLkG2cZFRVw",
  "key23": "wWCqYooRjbMJW19kxoTy8eKFL6Uji7yeyPnYDYZgzrjyuyRKVvmtabyGgNpu1yB5dnSb4fSq9JdEJRCyRXRLs3M",
  "key24": "sD3rbXb3MMZvK3dj37CjmcHHXGcU9KC96boKbZyhavJffhcUCwsD7exa3aJmN3ycav3w3bZ4HjN8nRkxSu5MQYK",
  "key25": "3mrjGWEAHNwLxQQsg3Mbcy7F5XuN3pMPy16HnxNr7TcHTAar78CNprbW4fiSRFmXBXmVL1ZK1JGS3Sc5kPKnvUXY",
  "key26": "33k6fQ8S2KxWuTgjwvBygzVbJk1BKuEgiHnHVF8SS3YJ6Pf3JpHLPaG2DfZtExbbmY8R18xKcgHBitbMuAPAdgZu",
  "key27": "3VcXfbWdtu3t2VLFatE9RVJh85Th1aaDvQ6gy6YuDvzGsnECyLbYVguQLZ9ZcPmkhpafAQvSNZWagLDGxyqpLiNN",
  "key28": "F56DzeEtfG9pykJFdYJAznGovvj8rjtDBwDoqC6WzvT9abQg4qzkbcucai6cZAkzFQPeK5MbX6YDbqdYPa2r1JP",
  "key29": "26ZGQyuT9RBRap8qM9vqecNUMdifDEer7Da1FQ3iTdUzc3NmgQaEbdymg8KWSYoUMcSCGvSELVZtZnXHzZ7tzPD8",
  "key30": "2iALtyeDM1hwbY5UzFbhmgS5kLzaHkez1xjYHRyYCTtwrfTw4W1Zsf85b9fSYV81K24RefkniXSMZteVFMrcN1vP",
  "key31": "2JH9z5JZgTZXTFVH1rBQ3AFCYP5CRrMHSnZY3J1ULGmBJisgAZEBsFHLujjSrPqBx3xsLUTQC5jg3kZh8HptcnSc",
  "key32": "dM17xxiQXiWz9oksDxd2qyHnXjit85L7Sn2aJ7qN7TxjJ8u3J4GufS8cwXmSzkvNoguZVpSPVxRteXoQBXbjgSx",
  "key33": "5cW86x64FjwKhsheSHkSWg8dVreGDdZKpUa5MyFuErbGzxEej21RMsiSa7cRj8xv4eZEeBgyXmDGHZf48uHNEqXy",
  "key34": "3W4tdWNi2BnJE76kjaCJofiTDk1yYKdfYijYtrkbkGBXwrd9Ja21VRTuJSCFTjEhh23a1khNcqNW643LsH9Mj2GV",
  "key35": "2ED9ZPQ1a7cJQqfDP1kuGEGwUapz6q6i3vLmtJr9sFwZEgBcDwB8ZeY3iMeQCVcnnRsg3fKTxiWijopLKvdQVVhH",
  "key36": "5vMogW6mg13snnhvU1F3jXPmEhUfYppu6J8jSDnTESnto8dQzegNk1A6gH9QJdwenAAaUBrj5oiyRr4UxjrnpZFK",
  "key37": "2K6KntvuunBbL27K4oKNqqYvvZeCaLvE4HRzv38NfPSkiQoNZasLsdsD1HALdpQAop82KPPMuvhKoXKXMQAs6egM",
  "key38": "5Pypr1UijucoeZaBEj2Djqdi3G4LLLyHm4JwPXs6sTi1AzYvf8HR3QEMwCZwJSpog99AqEK4jjC7CwJpGNTaEL8Y",
  "key39": "5e4iVd8j4G4unaQ42S7iHzNVtH9mt98FuWVUtJ8fYaHgVz5ohJCEVhJMSdwLc7oGT8Bwy2agzfojsLW16wd3bYu"
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
