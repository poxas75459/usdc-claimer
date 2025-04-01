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
    "5j7nXXsvVVa7QhDzdCKrAoirkiWVCDcB5BBTVYwtnPbC5yRZTaKGsypgZhAvcKHPwnZDRggSwseg5zwAxTgY6rJJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fVrhEADdXVf7Yin267cHTJVusAmNC5ivpqabJytKy5KmwUK19a23P3Ujw73FKfm6ZWytXvZXPVLUEdyacy6F4vB",
  "key1": "26DbL33xUMmyWv1qHjYfvRe811tXt2emkPEqEgWgGeSZ39YfWCLLaZtkm7Nvs19n3MWBdm31bPkVu65qqfvi8d1w",
  "key2": "2ZZZ7VHJ8yE59HjmAvrjikbdERN4SaNQhJ4Avbh6imEv3Kf5VZDbwSujVFxzZvMpKapSF2rwZHEnnopqoZBhk8tW",
  "key3": "5euHGNrHmyC22Fdddr7UW7m1Le5bxk4ccPYRhZd8FdFmdv4TU6TGSE5mEVF6VNZQB97JqH3RmxTbYPu5YKBGGPBz",
  "key4": "3hUiJqYF37jsEBDAXsnv2cx6Ft6P3ekNzkfEtzucavePSZ9acwbWpVk81nPwXaADUD9LWK7LhT1BXWzsdjmTLQit",
  "key5": "2iUWoGkiYsMY9Hs54epDobaouJ3ckHqaptqtmi8LJPapZFJ4yBux369bdhhtVc9L5SbLQUxz8VDkYS1eYHA1cRW3",
  "key6": "3Sbao6EvaZea9UTEwRCyBmX6K1gSbbQfrhPrhtLGiLFvQjVwTXQyj4wHc9KRHwAe5Jw7Zjwd79AvLQ9a8ZPnrTSe",
  "key7": "5tC83sEPvFaEE4vG4jkDWtfvEWX5Y1tG2YBh2JpAFHrjKM3U6VircXKZec2b8jtVYjm2UMqfaPnwDjaoc2bHrvfb",
  "key8": "4xT3wBzzfGH7iYqaBzxRJ3WUmCbdczWzqAmBbP6ZANHeUBSTPVhtxNzD4VSp3d43MDF6Jq6S7Eoz3s9bkehxMBt4",
  "key9": "5YfW8bq2mXs8Zo8aYV88PEBMDhVBpRTBduCMhnBsW2WxkFmw7yn9UgZshrh5kECkJaxHLZtSGDnK9WCT3GZKpsmb",
  "key10": "35aA5zsAEd9qqbdr7Uni5C55hJdZAA7DseN44YWUJi44Rcsgf1bkZEArBq4qqAhhww3bmQKgZN4YXa6hUwvN4G6r",
  "key11": "2SQx1rvA36B2UrZPoAjSvGxYvSbgSBHYhWdthgikRkPodvw5EEjsT2LdPBBrZPiq9Fh5C1uTVyJFqng2yR8ebXw7",
  "key12": "4iqHcNxbYYwoB7nqdkjbwUc5jozT5dapZ8trUvKythU2VvzASiERwbaJYA3xqPKzpda9myR3sFCVGr6nTnT4psNY",
  "key13": "DgpM3BiaQih1ofDbx9udsFvsrTeo2W2pVzPBB4ovBPW9vMR7PHmjp1X9hEqwrwm3WLGt9DJM3bU8282Vj3hAHih",
  "key14": "4oX6BPvUxdvMth5haRW2fdjDwyb5jyrgXLpVXX3Q6LdnvuQ89nXtyoQ6ooawZKFBmd3wcb8D2xSMgVrgxZf4xQXH",
  "key15": "5nPi1hS8yJxoTei9axNj2UXAALVG2ZgY96ZEKveb9yuwUhf4A4mJZxWuYjS78e9k7x7mBpMtnsLzxDwtfVrKRmnQ",
  "key16": "29zoVQLmhxd98kG1CFVDnzhzV9uAhBN9GuwMNpLiecTcgGPGni1qxnFoLBH2eHXUELhJxuPfq3qyPZNbM2bxuHoR",
  "key17": "3N8jjdDg938DHHVUGcEgwmgmyeLW5rH988VKrxfZfyCmNPnvnmfUqZHLHT2Lqb8Zhg89CBN9vE3e1dmFkex63etj",
  "key18": "4LJy35ahmtRQtZNuuTJ3mz63xZKyYxc9SKsqh6PhqgQXzhWuwhhSRXkstdvtkdPakGvZEykkWr1HRzJyYRbSGjMp",
  "key19": "27SoE9zVAwVyDkeX8ARzFganQMCtpHNzVkuhkZWHrCRrhEreHfGtwz9i27SmDdXSPLbdLt2XRzzjgPHM9zrV4pSN",
  "key20": "3HrPABQmizx8t5wBgKzxmjNLBom2uf59gc1Azh7b38bwAKJWgGDFEGG2uwM8w4XuMQSSccK6bsvFhYS4D7avDek2",
  "key21": "5iP1ETEqSj9187JhHXFdoPY9xbAhBr9uKtLEnkzCQMQawSkzXsbxrYpgqPLEx2qX8a6y3SadgwYYLaScZh5WWJXB",
  "key22": "GTiPwDWJRJNDE5UAkPsUqp3Na45DcKpkG4njDAhwAtQCDCqfBTXsAxWkz3rcLqgL21Mxdr5UMMa53cQXd9baBP4",
  "key23": "28pRoZBFjxCV8Pfin78XaYnSMFZgVbJ5QeEjcDtJKrSGggB3duqQJGRqPDDrjVJqv5xfU4DZh9cH9zGAERuNyDCL",
  "key24": "4bBKLp7Atvt8qGvEaqkKt2AaHbaDELt6yAsDZC31WTTkAqY4sBcmJoqV3utSkFLBkH1rmS6BrSkEbXMaGCgU3RNb",
  "key25": "23H7ZWAc6qAKgK254bqGviqguZ81gUk122UmDTZjtsuof4qieBQqMRcF2TZapiUpetKMXjf16yCHwCYxkSmutXkW",
  "key26": "5TfzSRPVGGx2s52MhZTvTVfMgrc6LDK6imGffMyqBVxUdr7hU6raJAV841nuJZqLRVZQjtcmMx85ziiqe4Tergft",
  "key27": "3RqQ1Fk3naYR7AXAP89d9GB1PvtmYe85ZfUxiVd1BzLuSX3poD5sUUsgsNTjnAoD8oKW1vH5t65TVMxrgbp8tP28",
  "key28": "vyGgbqDdXeriHrgVYxgqgY3rquwVfpWPYsa3hF9oWaSgvfaT3F5cGDpbwg8KMhweQq52v65RLeU2ChoznVV4EBm",
  "key29": "5LKCoTCj9r634fa8hLaVL4nSNPYCoqCDg5gr8Sveaijpwzb6SfSX78zGShUFJE5LhPDHLD6HbxvcUKw12v2BVH5N",
  "key30": "38cMb5tX8pfxb8QqK6SErATrrpvousGZAKGACHiRKxypqdAVRRiYzVV5v94nCr1aco2ga3FXbsXEHXTW5sJcnASe",
  "key31": "3YrDjZMPwJK3jCipdh2td4DtWk64giGyoRRaYkut7uKqx4bytsPWPxrP6JKuknYc3tWzCNmN7nYPeaDrZxFbdoVF",
  "key32": "3aYWacUh14LkevHtHFsEighwKYfRqLcvH4asr6GnMXZixfmWUB7RksEeGZGHViyXa29C3RobXoq32soKGH8FXzxq",
  "key33": "H8rWf5tiVspfHdDPUuZJot8krKMHPLVWDbp4o6f1m6gbwLryRMZEVkNYrW13413AsbNgfsUCxBkoF5C1u7uejVr",
  "key34": "5g7K27EJZe6KqeX4Av79y8iVsahKM5BBXwMVfhHoLRTfH1oyhRr8KQLD9NUTf2Y9xJ3upKviVkA3MqD4UQ9zK5AJ",
  "key35": "344M4DFagNA8G8VzL257Yf4Rgmq1YGKLNxx9fMmugwuXWCM7w7yiqfPWiQtHKusnJ5ys5pWWey3BLMnM9etUCN5f",
  "key36": "32P7gxNsGNyKx8m8zbB4gT1pSRYXvc9qR11WSwrECrRijxEUXR7K8PbFLybvgXjJcJ3XCbBNTKDKvC7inuTLjjEr",
  "key37": "qmvhWkBrjAQdasSCD9kmCbahKj9eChKojMPs6iCW44M8K37ayUv3kiA1QLtMF5ry8xxJGeUA1bbbRpvEXDV9YRc",
  "key38": "2RctJGgrXAMxkRQgNuvkDJ81fEEy6hx8HLU9rog9AhmFZK26FJwLZ92Fh57V55DuV1y6reXB2XKLMFDDP4DuFw5V",
  "key39": "cRyPDcLCfEyySKCf2mbboetRruV5BZD6KNgJ2H5jPrqDdWehwq7Rda5SVkjChTKBHN9ddBP9eH8wCYc4a3GESjR",
  "key40": "4M1J33Pv9JRyUGHo3dr1WXy1JhwLXQy5x6cWskN9J233iTosCbqp16azBSRMzQ5hQkaFdFAmTXZsN6x1qbKnHhzs",
  "key41": "4K2HWX6rKsa8DzeYQ2qctcMdVYWafvBN5SjdbfVBKEUVNybbrwFYenknvJtfvUFXpDEJSGJ5r6drKjLQSFB7ovfD",
  "key42": "4Smp8KToMf3seLRdxnubVEXpWDiBZ86L8sDve54YEqZ5R67fBjYCDZGaR8RF65TW8WXJfL1P6ngKub6T3pr4LtbU",
  "key43": "4AU2pjdzQrLZK6okb3kdg38hEMjH7mEJmbHyFj9qnkgtyWvXXT5AL827NhiZZAqj6AUG8ACkAmBnH4qQg217qBe9",
  "key44": "3r4LjwDc1MXuojiCczaiEiynYyq6wrSfSd55yZuwVCdY2DvctUWXJJpfM2fdh6Rxwnb1SD8yy3nDRBx7LHp1KgCs",
  "key45": "3dGJoBtAHxEcEbn33j4K9RyGiHnshicN7DprNi1AbZmx9AuHJ9KujeD1U12EQbC2qskhqoTwRR4ZtTdCNnWcc6B8",
  "key46": "25GmNudKwysVScNFRHWRR7yYrDEWT1UZHK3kHdu7We1MJMVGX5kmc5b6B9caTCHbXRWhp6HKYCiCnsBHz3hW9FnA"
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
