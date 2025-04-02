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
    "5THZoX57kRrts4WAWM1bRw9zLokRtZrA3k5UBTZazno39BhEMUFuQdwXoKbyooERWaPKUTQbezjaWMaBTtgsaKD1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KtzBxD3iD3FKeJu6whTprKA6aDahbYaPjU5jyhprD9KJYKP6FwZfqcu6GeKg8DBnyzjX1gSnZaFBR9pkyBtzteB",
  "key1": "2f215jML7r5sCxKJ7C673gT32ioyVghXVmciGHcfuNTnonej2TLfqY3sDKQoDik5uZz5oBJv9sEpwsMLeZqjCW6v",
  "key2": "2ua9U8pnPEBjpKFAYLjHtSEJApfrYMprtYSGgp4FJQtWotJfBrudA134hyKh75gZG9kaGkfssc9k9eXNo2NdoBsN",
  "key3": "62FRZVxD1LGU1rU6BSYjJ2tE5Qdz68SaXtrisWTLrjF2LTs11Vi5TZ8FQJHniQrDiWAaDcxMWd5A3k4Z7jvrZ3kw",
  "key4": "3rzfuJ5QGNzU4quKNX7LfZp9MW8YLREKk8KhmXLqU7uVqWGiX2d554MzQ4fhdUd7y6b2dc8SR6DcUoRNzNsqfhMm",
  "key5": "2yUDjNLuh87aY1uDNQ32wwXJmnsS9jEURYgu4sAmUENN6uhyDGn2P55gYcQDNjBSGKE5zzXd5GBxTLqXd4r6Npdk",
  "key6": "2ZD7gPuoqPK4XsNASrEJHN2HEKG3HUN7fR4omAhhYnia9duNtEhMejjH28LMRcRxxR1rPAK2FgQbJyFn1KcTv3Yi",
  "key7": "5K1euHZAEuiQkxXuHS3MjH2Ye8GmVrQsXeQr6AFFgNDQrKDr4sUDZNjJCaGzgiuFkepK3QuqRakGM52L1V4H4nNA",
  "key8": "4CATB4UaU35v5o2nKLhEq5HwEcdK5j8c6Mp23xzByrvetRYSP8tWN3vZmi7wiRBCroDt9ieKJ98Vjm5Cec6KfYSN",
  "key9": "3GERDkviin44gPEhnWECJmfUecyQsR3eqUFkcmweCyzGqM9sFXqS1x1rHNTt4iy6yVMwnBSYEYqFwk5XSSgpwWSQ",
  "key10": "GspVJE9EKHCmVTg2ak3V7WGedBrgLmGJ75VmfEVvvWTD8Y3WFJaCq1K6bYz52dV2KLjdbxn3wD1w9HCWyzdxumz",
  "key11": "5TQ3AszXEPt7SyKBimLnhHQRN9XeWN56Dm8GthcBL2BK2CZmJWHudgmRNLfdrYkywRrrp4t5YTaNBzh4Qiz3UiJ3",
  "key12": "2y5hbRATav4dERF26EEfdSBjSXnhmqn7nCdc3XFfuFpdTyWhLPFnHvsx4QPRW8Jv85pWdztza51yqn7WJPaFf3G4",
  "key13": "5mqT73F5vQQfC61YMnETuPW67me8k2PMbM1iJuXu2EJq5JwtdtGiijeoJcKvHrHGbKHzvttNL6DcQhoZapCfmcqy",
  "key14": "2GqYJBqrvq6veP9VukR4as3fnMR9XCMeG6gSokagQUhLudQUiDCur6rQAEfJMHUT5aTcKNhSUUhNWM1Gu6iL2GpS",
  "key15": "WecEvTD3GjCuGpH77cavEpKAjcR6f9QFKXHCysTBg8mXmJJmunAmyGcg93RCGEKrfhGCvdkbwzKt6k5oFQpaVAa",
  "key16": "3Yu2qC1rvrNwpFQynFavXSQQ8bQ63Jy7hXP86K28szZ7TgDahdS3pkzFejeUmyKG63QMqkumxyh82SDWPyQzPaAW",
  "key17": "57JsQmwxYrZqj7bk61sDMaFygxKAoZMos1Le8aa474BCf6kfn2XygJMRJ9g5yftUPEBEqEXGCPg6FJREfNfHJtEw",
  "key18": "37DTDDE5VHMU8cgwARc569NVNgNAomzedL3Z5aFPChQR2s36qSC6jqizrx5QvBcvvb7TXoBrbYc4dNG9cM3AwWFU",
  "key19": "66ibiFxpWWyyWCtMXKv51Yg5eGGknvGknd8sNjiXfnm8k5xb2xtvFtighsz4Zse7yezXCoNtKucHWmTuZ53PGRJX",
  "key20": "2GSKB9oobPrTZc8wGS8o2bsxmJJHdbd1isvTTGaRvv956PmWfJLQoYj1toiGvV1YKiQrUboHCfLRCQZRQHV96CyT",
  "key21": "VbRe9DDKKGQFZ5fPnLChdDnivh93mfAqrcfNLq154cNUSN56daJyc5K6V1egNyZCiBFKkudzDmHcZ17eS9dzyL5",
  "key22": "3sWJVvMGz833aT9mUCH51BjgdL9xa4hwDCmPb5EiXJuubSUM4SRD3Xfg8XJJicPphuoTeybsDuhCyCxoerM2aADJ",
  "key23": "4ZSPfSb3ZFkypkKySpQTe5RQNG77ECXv1k5K26u7dYrGBiU7fGy3o8RsKAdHgz4vqxCdKWgha5FfKCpfMNw3fA7z",
  "key24": "W2p438FaMTTWtPtDVfA8RT3vHP5UEkNBMu1aqxLbH7fPcYoqVGW2yD1XwpfRt9ujUJDKxHBVadsLk9LLY2WxBQQ",
  "key25": "58AxSzvyGf9jHEEYZG7otfrFEaDBgJvgaq4f7WF7VhraZAGczbXgvynxTt9EGfYW2VuqBAYr15jiuUM2Y63Wt2on",
  "key26": "3fof8xH735kvixLTvd2FvBhMPtMEFKAao15bKAQDvhAZud7YqTdyaaSSdYLoWoCvD8uxDgvyrnFSWm6cY1Ay18ni",
  "key27": "2N7YycfwzcFNBU2WPe5tQH2uPCUyg7usGhmYYHbUFihXMcScRooBW7GAVuy8HvenMYFwRcJ9tVJMmLdy8wcCVjtT",
  "key28": "5ecByXxaYPgTjN6GnhvmCRUDoYFZ5vV5L8m6quUhjn1DLzKJ3xKmNtWfzrzjp7PXJgvFZnypk5xqruAbnjL5Vh7a",
  "key29": "2GSZQZmia8NkfqvcLoZCuHJAqnYh1SUmJTakZgBCEnmmbEvZB25nZCiXZc8UhFTypZ7Wqk9qiJicqoqWUWdkAozm",
  "key30": "5UP3YN3xVQyhvxN5yujxUtVD752Zx4puKojmxsipKLRJZEs9qbHXK9kxqrLSWx2SeigqJmkWAbAEr2ZQNpsuDMKw",
  "key31": "5QYFQdrn9XwnokvDyVBFeGTn9qkPA8mkZecyLW5EXRp6YPevUyFSo6VAF5JSt227QiA58n8eYKfkuVvA2jB3tKgh",
  "key32": "2jF6EzH6HKFXKM8KJrfhXTg8E4QKn62Av84t3DnVpe5UrYhn8icg5fZMf1sZ7MNR3zBCrPNJ3e7q1LNXN8vtK8qq",
  "key33": "TAhu9vv4L3CafWGWPc1C5ZPC85ohncQmURBuVznxWhq5h1xy1rqqjousyu77vkCrhpzLxAF4uTD7Gvz6q9MT3mM",
  "key34": "2XHoxdKUhnHB5CDVt3qWcHii9gKqJuP2riScbMLFHH5WmURCLJxzREsLaniS7Tbo1EmmkE6HDWqcoTq8XrEmobV4",
  "key35": "5qeScAueznQR8MoTqsvvsCsExHQksmTXukGUCTp8qGeUBx7kBsMTHp5M2s7vbgjsPxUoEQVkSPHP3S6M85MQ3SQF",
  "key36": "2buoKzxHhGXKjCPJGr6wTxHpgU3H8ed7hwYGhgGRLsnHezDF2Ews5Psgn5fdL66wRm5PjStj8Xay1v2EEvApX2Sz",
  "key37": "2kBPd4FQYz1YUuHZ76QYDuQyWFakhyE9NM5XHY4yEV7xYZf8Ht33izJSfv9fVzpXcjHr9ZvAVA8JurhsR9MZ8avS",
  "key38": "tRfxL1U2csc5LCmiEh6qEaYq4B9LhhYhDdecXucr2vKk9Qys59T3QfbBG1Zn9ohKA1bPhmRs2M6RSrjq26KSAwg",
  "key39": "5H5xJP8e3aToyLrYvnLB8JD496ua3WAtPc23aSup8QNP6JkfCNctRWmVUhFW3WLbQx99u3oo88kQ5APiXxTaTJzJ",
  "key40": "23XTf81qfLj6BNYCjGRjL8aY6Lpnw8LBNiHaPuK9LJDv5gdZRZYKvXK9iNXNFQcisDic8i1FvDmicw3xjHSNZ4ot",
  "key41": "279YMn92dmNV2h87jU2uCapiBXYhtjJ5MXuwMVFTnAwsabYVRUTiTL2K4wM9KwoqVSCrFgjb79UC114eW4Ynkgn7",
  "key42": "yziBsxo3UPrUW6yHMMrXjfotYXhejA5H9fckgQ4acpoSmFJwxSxXJbFbeBcWhD2iH9kU2fexCDXVt5QjeNMjai5",
  "key43": "3HN8H2jFcJcSVzcvTvUTCUX6f6s68aDBopERr5226oeQitJrn37cu1eekEsYz9C9NdLgBx3YzztpGTWwMd1PmYpE",
  "key44": "3nQM6PBN3K8MnAfiFXAtUShGgSA8mCKdaEyZ1c1MKcm6faAE1cVHG3c4EyaHcCXG85iCZGTnNKh35PkZhMmTTTCH",
  "key45": "3XCwBWCkNMQyPbstxZTjcgZUwBwSiaUVq2hiRhoa9qxP5VTwxFtVEgfZJUjtsqrEyFw9xFLppG2SJf8Rnr858qZD",
  "key46": "3rBMTynzkXznp8gmALn5jmgvkiNx8LSG1AqGKuUK4oadsQstYpyXYWBDRBvUBM5vTdYgfGcGjaMSCaY7kXjKPzhY",
  "key47": "42sPisRscHB6x2t1cUHvxRu1GFh8aSgUUrQNKNZm6WjjMv5BPRpXSMDK8YtGVhn63BsDQW2VEvRrch9NPtCwU3b5"
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
