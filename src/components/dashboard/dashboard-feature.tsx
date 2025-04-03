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
    "5e7y3Ba8bt17UPhFWoupBwkRTmYQkkoLMQP6FkbKXqorRWUgg1C7kmEDmjRNoQWsxtgtpUwfZF9DFSmidjE2F5QB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53bu9tt79BrdXNe6hfehFaDmTv3QoKdAGFfggkfdH9FCpSdDxrJjVV3kJjQPFHc6bkNVPqqit7SQeqce3TqtfvHz",
  "key1": "4Ucd2xyrpHfBMbrj55JS2mhWrGt2sBSkLDS63mHzh4Arg4zFTHE7HT4pYs84mUsYMsLZLZw12UFWn5CGbMT9G1uG",
  "key2": "5JUBYqFiopv4dKeFy8QmYD6N81wG58tLLrQMQKuDss8mXG1JGEDHZNPXCpcfPBsvFJTaSkyHeBcepNk9P2ZoqKQV",
  "key3": "5pQY2Ek4Wn6pbGR8H67rke2TgQAeRQVfuxm1vmp1ceAMpj5E7onbVEEdi5E6o3RsiQLk6PWwxSkkxSwrvGB9PK6U",
  "key4": "3iE63npnbFJnqPqTXoMBxVqaob3Dsq6ZyKDZkL9LEYt59QwH4L2yQbiHetT5jAmh66dSgaUqGBwq5gTnxoYDKEKk",
  "key5": "4qESXQxMHDTtZGmPD923vWYJu6ieTo56LSNzivCCwSwtgD9JEsDixkKU1Ht35uhBL1uWCTVFxnZ3isbTim37uyZY",
  "key6": "4kCoUnybRXGU8Thf5xHt4iJ4WZx2d8gMz33zft6WTY1zPZ3B2ZvAJytPyTPhjFy58nK3hBEM3GtG67zQHgt1aLcM",
  "key7": "qPVZSLQ14rfxN7GPr2o6k8qggr15poCjDKcYSioueeWMmBJW5WHWKPHsTDn18Drhjg6BxF4wFUwHF43ivEvUC78",
  "key8": "2t9bPPNByJtdc9ryQ63S8qticxQJQJp9uf4q4ozrDuwsyfnejjDhDKPo1w9VUyGmFYymAHnVVCZ1eySo8UM7TDc",
  "key9": "2enmVuzkt9Wji7Xg8ewTwdPLbcX4K8FnYAZD6bJmNxy5W9qtqeVVezjJCXXY1Rwj1kpt1b5oBhv9dMnAX26q6FbQ",
  "key10": "HuLbdPndidTgHuCEFawJWYJSdzt86BkEB6F9wyaSDniBAcMkp2n17bH54h5WycbE6QCu5jPh2ehSXM8WFwE8So8",
  "key11": "4PJWaGgEij2FRPTp4yvKNKvsr2QHKCsGMLBN54pi72FYbHBNvdyoNvjVC6D8sayTTiWdsSv36gaHJ688AVU2CtXx",
  "key12": "3oLyHZuzELmmzeoL9H6ubSvJvtqvnHP8jyNiSpnzjRtnaBe1mE4y5Fh9Zuxbn2SUX4rby4SsKgbFR2zgCMg758QS",
  "key13": "3cpzDQ4hmJGWG9EEXBBR6tmuQTHmeaw2S3VBU45zmDebyEFQ7TQMGM8SQzPpcjRzcK7PhBRDi75Q684qyTZeKoYs",
  "key14": "4xjDyn5hHUihUruyKJB4QUMP1MGg5QzeUgNTGTVTK7Eprp5tZ7n9SETEirVnrRTeFLpRMY6QafsnGgjTtaMi7rje",
  "key15": "G1CxH4aMPoz1ZgKtFtfp2pAR3jCkdd3bLqcgCXj4rMaKeTBMmxhAdScYXjEk4dMPnq6zPzZweSueNkZwr1pjA9E",
  "key16": "5LxSsW9VYymkJBQaGEbSD8L9Ln4Lo2PAARZtLes5yRWPEkzXUrNWkgn5FJYWPuR1N6nS1aBVmmyVV9RnZcxvA6eU",
  "key17": "3WBiMGk8Kofbp9rbwpb5MUYjisiq5k63aqPfjhiTtV1HqJYuJHK42YZN45rdsCs5L2jbBaj3pXm3PNkdLhgQ2Tdm",
  "key18": "5RbBBcrRvZvzivGC8G6UWiCuPKLmx6C3BNDaviGot6tqsT9PQGjcM8KCbmWExiJszWCGDiCi5gqPXRu7GVfABpHx",
  "key19": "4C4yyZQK5ADxLsVTUABzFBAJwqGG7iBoBLhwJgDza4T4Ks1ixcxCmLfeR2hzarUwnNrtzQremUg9U7vJF3p6Md9s",
  "key20": "2xD21YBTPYMNqhgPHf52JCZEmtgr19RKMedVM2CDEERQ7uR7cMNd2YsdPBZTG6JqaFkCzTkynAnTAr9dpLLJ7VdB",
  "key21": "5kymu9qD8xbaG1HuLSbnA8U4fPUnp3Nb9rVXfXFwZgtPxFY6xs5aqN61zyvTuqTaznDe91U9Nrqt3QcgCEAvv39m",
  "key22": "21JJcdHLqEr5SJCMqJzFGwMHARqJ7FLP1EBM6ggtPqNRTPSYSs4D6WsHYWGamsfJj4sw2wshPpDKE5oyVt7ef9xG",
  "key23": "62PzNoKZ4BTXWFG2UmpvV9sQbo9Hg1oRfmTFC4jTXf2NLLocmJw7p1jNb5ynv5NMKvUGEMGJniGK44eic5syxvfc",
  "key24": "5bcXirLcFqjfbRjsDXUCMb1TqfeGbsVcrnBTwFw8uWCXej16NG9tUbW4NJ9P3zUvsGZWFq2eL5AAxA9CKpAcuAkW",
  "key25": "27FJ5R1ALBhurJ5YSyft6umRvmV4bTV8jVcWM4GZdSUePCRbCfsDENZ93gLeyfXMsaKXoUJ5xbXH7b1fVncLoQcr",
  "key26": "2kNdmryveHuBHnTRiLPQberqk6vXzbV2xnHLo5rwpnozVZm3tcAZ6Mm5PSCpkjeEN74qpV6pRWzAjmMMmECqPiND",
  "key27": "29nELS8Ei6CjDJ9m4FCDX3vzmsQGmYVQeYBot6SLsmVcteczbBqGCQA3mbws7tfBNz3uk4qMWdxXyCDWx8tgWgck",
  "key28": "2EAoBnY21mYKD87LNAd5LDASMypxnpBPZEPybwu7uZ8pDMdLv2GiBnR88dGUsuxEVakatztQUqEsXdZ2WjvU5KF3",
  "key29": "2NVjWfwWJ3EbbWzLuLjUP2YR8TL7wMF2hraCwEgr1V9XYuLETjrt9gfm3BHx3X5GKDrx1Dqvs8whQaUWLY9e1F1L",
  "key30": "5H4KUKYw3CQEnrgL9J3EzwnHjd5EU9koqaBGaFbv9m24eAUn4hFmm8aRBqb9cUC2xKVggM2fKn6GzhXncJz8Egwb",
  "key31": "5CHJjeH1CEgnQ832s43vW3hdLvBnhCvComykwYrRCyGHn59N1Rk71DejyTXGLVSJ5RzWXUTnowBepfTHenmjL5VS",
  "key32": "5Bm5j4Ahboc9vrFrQjBfsUprEfBiSrP3PhzE63tHzfQAUuf3q9vD6WHFzRQ9kdBuZSVhN5vq8gEivCfHe5FbZ6PP",
  "key33": "3izSEvosKdg7cghA76EWxJ8MYHFe48DSGQgfUyH4G1Axt1HUyfQGS6Kh1WJrtsHdKhKUMqwtJoXwejqQy2VyNjr3",
  "key34": "g468Qx1hkmuzXRyrJyAoQSbnqEuvyRU3hEYSh5YM1pnK55qqEbk1oEdJN6WPDbNDAp3cWgSZUWxW3nGAyfgAHr4",
  "key35": "3ARk4jzbXMMm2SYueUnnwYoFB4n9Pckued7ainsFgfkyZmvQbVHWDGjfdL2YyDEZ1JSf3VxeuycVxRejZ4MqpcQY",
  "key36": "4f1rd6EJFJMfb3LX6CiztpsGNj5kQSEJ2FePpGSbetej49sqMAmE3BPaycT6zfp2bkwsXK4xXBBgCrpRQND71ifL"
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
