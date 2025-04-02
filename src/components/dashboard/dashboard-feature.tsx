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
    "hcY9QNUXr3e42DE67jzh8hiAS2rvGiKU1hDKhE7DtX5QE5e3pGXrCBGafwXfPo1MRD7oCZtaWqvYTmwNsjXDw3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Dqdt4SMzZy3MsTXpBvf4BZZnt7UwsjGSh1mn35W17fXq7uJaPNYKLzU2o84e7MKW8xMG8b3FcGNYX4yvKbLcL7g",
  "key1": "48K5FgnNv4bx5u7ztJUZUPTVaQvFSfAXYkEgBLFcxxCef7YSa2XDcYnadA8VqJ4ECPThkr2yQD4yoEK2XQMNz4Qu",
  "key2": "5t9HuhynHyZytARErCu49u69myzBuRG1wSSvqpnMhNczdBep1e82KEQx9UaJhM5NPAK4Uuav2AP3WmhKPuebzaij",
  "key3": "3NZvfKc3QmWJgyv2tvihFMW4UvtQn512kcCK3sRMuUZiK1HG7W7TX2RAtRBy7eC5G7NUV6J9DMJnGsxNxqjqHDBY",
  "key4": "5fUKexX8sYM9wKVNthwaaEzfBjCsRbYkduyd68byv2iVT2uHR1Lq2nKeLVZaTTLpCeTok9XRR21Lg9V9JLJs8afA",
  "key5": "5FoPEHAL4vPESRQFFGLGWvAPEGCcxAHcX1dNb5xthoBnBk7vcZvGxV5wgvKMufDMYj2w1BQQJsPujpTqkyAzMnNq",
  "key6": "477wVeNdSRi9cjQfNA1TxHADANekkeVXuYprRKBPxraAD4dUMzr4iGjhc9XwsyyNNboW1D2maPjLLqcWf4HQdS6k",
  "key7": "izdrcTXQXfTNCkPZkRhou2mDiFN5rmXfBnNC6X1safVAyB7MUcHkPeZy1faSGt12CnSRtfD1nFgNeMCj1EYezeH",
  "key8": "4fHJZyqNkFrcrGr9XHJEPnoXQXLFY8KQw9GrUtGijg17oKq8WdEKx9K1PwL8u3AeM44yyv7zmsdBptycWHoC5BiL",
  "key9": "3mscWUBXezJwwDpZH2X2fUCQWkCjkFRDHRur5dbsxnYfATcY1RDpgdNEumHf9TbxWV481gqaRE59CGNd1g5zRxsk",
  "key10": "6691zhBBg2fDmuTy2Rfo1LU4yoCmEoFia6VnEdPnxHNu3bbb3myBym1z5AF15Mh31qKMAMjg3xzjkcrzN6hdkTjM",
  "key11": "3zbk3aoX1yFrnNv8eKNHnZnkEdFFHxDey8xe8Ayjj1tnbs9NjCPjK4aa85kKpgkxDiwLpHseXvjtQfwGXNzbYZqf",
  "key12": "5tiZDdkBa7wtBhje7EKPTu5jG2YaBMQmCMZegdJK4S3WvnG5PfTft5CFQrXTb5Nx9xZTkQcvbWDSbtp3TUFtJTHe",
  "key13": "4D8WP9kNu5REbxjNJ65QCFXM8Vi2v7NYMLKUBKYE8WVrZEe98qQ2moQt5zGwUSs7Xrm2jwuwKVTUZDptYWMvgoh6",
  "key14": "4hXkGzoy5MkH7GJeQmTcSB34fGKJo6nYtNHkB9YffuJRMmM3p13n7HdSJg4gjSkt8X1dfV5f2bZGibpm2AS1TZhM",
  "key15": "5dTssejMdtnWdsNTyugJSQqGwZkfymn63uwKku2G8bunT8frz6w5uWE215mDnMFEENNYWErYEQimA8hrSjBxKK8N",
  "key16": "4Ew8qik2zyMyzBzTUJCMKpwKjnwPaNsMjdiPc47SX3zaXNJruWfvZVUHQUknseP3VpsQTc615q6DX4VcudHisZnv",
  "key17": "3YVBmC3pXZ25AZB2EUZj2Xus9Ghm38JhR2DL9eqJWAioBWSLoesTJTLd5gC3Sa43Xg3ttRKJ8hVccsB4tVixDqmA",
  "key18": "29VQo5JP8xWfoNJTMx1RsgG7kydeN8DGTcz1HkCWvVkoGwD9nApxAUtX4VN1ey2gwA7ELbiqeNJhj6WJ1kXX4wYw",
  "key19": "3C7wHjgUs5ZtaVygpiQTrj2vGV6tRksL1uGBznF1dr285hWMF7nsqEGj6ffvSMQquCqqFfeUS7xbVuZBN4f9NGQ4",
  "key20": "2cjpGHHt7JRM25TduJXgdj9USiA3RgY88djPwk7JfvimvygEQKBgHcmuNjtsdh3aN6naToRTpKTzRk2tJctUVRaN",
  "key21": "61eUXouMadYpvh4VJzdhZFoXscshugv6wN1FB37HSpTKfisXoosXC5ciS6aFuP6KX2A4m1LigJYMN3fgU3T7Yryb",
  "key22": "A2Y5RJrhXwPR4Dnnys983G2dFrr5fxPkFj5QpnPb9mV15ejAZkWGisbH1sRLxj563ad18PM35rAMdpi5mU1Muqu",
  "key23": "4dgaHZBL76eSyB59CvJQai4kZut7F1ZFSvFsaGqg3Qso812ReTQDb4bL8vWkFPGWA94mxWdjSvmBf1TPgbu8Wv8P",
  "key24": "3y7BxJ1rUo1bd31WAdsoKBeLvPop2VXp68bTQJHdd5AEA77ftW5jbvpQ8ZvvSz5Pd4hEn87xSjS65ySvx8fffBVB",
  "key25": "4mY6j1KknXiZHverkTsdcYxVdaLcd3GZ2p77qVvBn7E5QsJaMdxGWDMHDfMxU8oFQAGMpsocZCxzwBreRkf61S1C",
  "key26": "3HuuTRa5rjscsUNrg5YRYny4jMR9E5ZF6L6sDy5t4PnQsmuZrPNc2wbX9Muh2Nk4zVT54erPxxxBPV4Cpjc1zCcS",
  "key27": "23ToTpDEYhTdjX6psqQs3WiBJ9N6kwckCUnoSMyw8Gc8MkqGznndDRakW2bxtrTY9JpHHUSJEZ4bsZkcDeTmBYVQ",
  "key28": "63hKwMWPqYkYVEF8SrkPx6jgkBcPaLSk99LjXzd8KKHBNeTggMKTNA7XcEcQdjcMY5oMntuRSPoKcVHCMUhvALqA",
  "key29": "3nYKmDo1kqtkmGQvNc3wcheT3qY9fwmQzo1Ri3T4aP6HUAZqdVy5grdmPn9WkagvARhq68eXaoWkaRtmNoaVTvmK",
  "key30": "628aJFosJtfkp39KuQpeYZTwyxKxbuMgdb197nWfnXr85mFQbMTq8ETZfKc6ZxZ9ANNcSn7wcJRsQqniiWxSWWd2",
  "key31": "57GNc71m3GmAAg5mnSxwpzqSYegHUZXDRJERtwF87C3cEv2ifruU4wU1HwBUbU1ymeX2ATJNMjfo426q84z3JCyA",
  "key32": "5GwkiwfmKAXwAx9jvbXUC6HsMPCyrvGvzNNj3AMm5P9DD6BA78RuTAQ3Wn4rGTzLWduid24BJWBk6A4gLz1sk1fw",
  "key33": "4yt8iEXNwiDPfacfUQfpvNy14eLj1JrVU9AepDFw5zpm6rWTwvc73hUxpviW5xPno4yxu6ChzRh5LwSg3YKrzomG",
  "key34": "28yGHRA4gPWowqVM9hgt6VYCckAAVpdU1rGUKeJDHsa5dK2xQVzJFruApEtFvuV8UsGKN2ucEBZLbuUY4Y2ZA8tR",
  "key35": "2pGR9yfqUYLRmgqV5KJzj8mKcVvCJztDqdwZV5CRSmYHzS6V1a5srnfMNyLnSXa2za9Jw5bC5QXFG4S5TxdvmozZ",
  "key36": "36AM1KqVrKNiNcibq63n6TU3ySTshbbGjyGW6T6hSTbrU4AtjMzUgC5ddNB2He33jW4z8xuG5bwccstTm5uUDQmS",
  "key37": "5MFYJtGqekZ5cLt8SkLDdgDvVN3gF8eseKNqGkyZcjMYVRSikwMU8ns68ZUB1cwY2rXtVxAHfDnou9v4Na5UHXpA",
  "key38": "3MuViFYx4uvFhBJRBLZk8LfHp5o4hpiVnNGcHpnh1F2mgUkqV1jkuHnVXch6tLjNVXHwnekxs52HF8m3p5rWiSpB",
  "key39": "5i1C1eKQghQw6jp8ZZSU7E6acLrWTsudjUvT7GsDSsLdSAqGPvm4De8fir9bmSQ97RS7AZanMwz8AxhpLBzyaM7Q",
  "key40": "Bynz6raMKYsXJydTzLWwo3KL64BmCGggiLSZ67GKZtQiLXNnGBhJJJ7URng25XTNeboE2sGohLKHffoQ947RpuX",
  "key41": "2M1zY2X9wA9GgTsRR2gd8oEdo7q6284TNrFnA44B8M4betjfjnhihUYWcKFqtLYGR18XLny6Xzg3qFwATwv9jWp2",
  "key42": "LSRrwapu1WN9UpWv5kPF4XuqHyDKVettrrcGFuPjsEJrHzHtks3QxPVyAZb9fPJWJbMJ4dx8HoFwUBc2ACzbYJ4",
  "key43": "3EvS7y3joMk2JHqvowBrUdXnSYZci6YNd2zaadtkRX5wtWS3LTtJn8ADYXZ2RugZbhGBFLcWbqTh7T2t4GUbNRqh",
  "key44": "5vtp75HDQ7BCoARF42uTV562L8Xd32NWJQLPcmUaryR8q5mLLc5W9x5Sxyj4sW1m7TQ7tceXrtDcqTCqtKbCvU74",
  "key45": "37VZmPPh72vYuRitpUTjDhNU6w1xiSNmy3iyJ11nE95YKjQKYSXZaQ3mVHbQsMkmcFg4JyMzD8Bbw4emrwameHnY",
  "key46": "2uFL4BG1yeCJVsvECHrMRsuYrAZWFmCm1YRiQwvNnG4SiAaErtPbkMVNtisxym5aHdV33et6mvBdaPBGq8zVw45i",
  "key47": "2yURDdnYQwvUEGY2jYnbzByGcWy1J87GBdDYfvFXtmKcRYww9XuGnK9rrb2JQzn6yxp7KWp7XLAdPWJZzjYM92At",
  "key48": "4Rnj9ff9aEamS9Peh6FM1Mpv3u9uZywhCAYUX3BFH3ePU4LavUYBj5bA62sSEDUBEZTjGqHBgSQzLwWb8wUbkqgg"
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
