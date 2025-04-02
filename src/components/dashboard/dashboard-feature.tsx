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
    "sfmSMUjsbo5VuTXRJtUm1qs5bzFSXQxW4sbWYYrD2qmi7Jbb4gPkPuex8M15QYAhievuPFHhhmUokVJXzg4qu4y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zuhSS4SHycqJZQXN2xmSghPnKodA3sdsC1CwGtotbzxGcTQ2VqfVh37Dqcm17K1GhsmqMezEf7Xo8KQMDrLWyjJ",
  "key1": "4uTT6bZ4DW7ueNPbWBmagC3bjVqd8rQgiykv2u1h5TJfNGZv4XoHZ4e2t752UHYi76qr7VDy82Rezv6bWKyRPejD",
  "key2": "25KAK5M5RbCsQSUsGayTNAjAMmuGmowefKbvaE91musbuXivhxM6C4YLHy5h4BHaA6AFcbycdWBpaiBPFgFvvhhN",
  "key3": "cxsEiAE5QXaC4E7JvRTfcyJTP3J5TxQFggYFKWy55UQg4RD8T4SneTRFryrr2BZ9FZhEHXCEc6csvisvhknSBrq",
  "key4": "5UoVWCxKWt2GQ1WRdkfRJnxDGzJHHktsQSJzimDzXscDjBfm4WsWqDXns1AZeAG1Brj1qvNLVVg4852T6hxsv5Kx",
  "key5": "5STW1EivZ9kBgC6E6kzJBLVpXS6D3h1mLSDCWzcDQ1Y5vGSNVZQsmgvzd1qfb1ST2Xw5VYsQpiFMDd1kkysJczBT",
  "key6": "4jZY7WtuGMBWJHn69hfUUNzcXzt23K6JwjiNpqUDbnHGvRw4Bqxy6HWtdkbwyMhAcpizDvuCgsxAAxfBF4riByLE",
  "key7": "2LLsZ3kson9pAKn8Hf8WxRtaLVqt7h7CtEudJaxPbSC74nmKQzroA6F6Xz8vE9i5bmf8VsKfbc4Dsog5wqeaKwmD",
  "key8": "2wG26BNYHSGmrhpyTc3asPjSPYewivEh2t3oebZGhE4p6AwBouq815Ri2uiGyKFDCdUhd91LV9UKUUJ2nRGwnASR",
  "key9": "3furg9JgzBqDBDBYgsaJVgb6aVJVpZ2HhGfbNDPLC8Jx68CRLGYaBcYRuJfEDRpufunw44bcQV62HWqX1JN4iqKM",
  "key10": "aKRg5Hqv7MvDCFABoyEcZbMfE3NZkVaETYMc9YoJYx1SwqxAyzHZLUL8wbfb9xY7G1N7ETpNW4S9bXJY4dofPky",
  "key11": "2o4Q3Lv34pKc6ZGcqvNTmReZN8APfqXiyJ8r54X4yBtPZQ8KRvFBNx9qF63uRoLGWtgA38K3V8Nm3gsWiHG4sMq3",
  "key12": "4U92kCzMrUdcHtySJpHLQLLyPZiiJe1YwLTKK4PG1qBYPGFnBFyfmMdEZphj9pgwpqMSr2GXQ4np6z49e1CuXZrY",
  "key13": "3iXhhPy56ZNq1GNNsGiLdqiwnVRfLAt6ToaFZ6MAjWvfsqf6NTV81VnDPsRKm7svHVD2zrpKmtMPEJx2j8cSLnFJ",
  "key14": "4uZsqw3r5cgTWQJM3zhNYQ4JYT79J17xSzEbBRRXbJZwuZ9hGvc5HtZEGgTPUiq1km22axRwPtB8GkxrKYLy5iCb",
  "key15": "4DMAAmqtcWYcxv1CDL7Xaqf5UUcwR2EhudBZjfyQubZv5rLR6A2t2y7qwaj8pSvUE7YjUJi7Zh2rxQHSYyNSdJJH",
  "key16": "5jeUysKBsXyPUvo4RNy2rW1uAqGsxDWijyUq1sJXRXuA4nM5pxxp7cQCdmvieNzUhiMKMU4G9RU5iMXUdCo8ESfy",
  "key17": "678PcqHC8NWWixfgRa5h3ngGtq6AHyboJbkK1mCgGoMtH8rwVdXkznXdVfWkbrppngynzuZnfiBaj8VWTvZqvEHs",
  "key18": "viRiJTWUVpvrCV6w86fcnV5mrE1dUS9swnexEMdPLt3mf3Lhnwe14PAhEQXHuc3DFm6QTFCU3qVxvcseB7cLQuY",
  "key19": "4M1QTcXwmupaacERyFYYxVbDaRL9pUt4Y1di31Em2VFdYtuMWNV5vTtUZWeXzJWjphMTTDBCtnt9fmDnvgiquvoi",
  "key20": "34FNaU9kHnr6TdoXaKxzzWLPmkeowprgXbX71dp2aqEg2gsU5mjxt9FHbgtYtfrowSmSXuk8CqJPYc579c2Vdu5x",
  "key21": "5RC8LGkEnZzsCH2aL1oXh2RjpBzqu53UJaU8TtFJbe2MgXjbhYDQov4Wpkrih1WjRWUSfkicpkKmqsEeMTFB4HJE",
  "key22": "3fXQPM5qKrYwy4CWDGoLgXPaY7RfKy9X8q6qCc5SkKhm2aeiuw4oUwaEQq7zUveCMoohLMqoGZG7SefpZQKYornX",
  "key23": "3NmvdqV1XE99j1WHLFKmEN6PcPMkjVWpDBrwgg3wPTgYU1HgVH2UM2aSvfGzf6SZm2L58WCvj8RKPuNkY8GDoLTx",
  "key24": "5FxQBvNhecUugJYaAFTwzD9AHfEBuHdAjjrH2YM5joxHXhBkpRLxTXH27SzzhCAnzJSuBhvFbpd76NBt8dNvdWLd",
  "key25": "2aWwHdYW5jbiSRJuGc1tdrdKsxqzm3wZqV5NGggvpWpu2QWjtXRBAiHmTuLbQwjK3sEYyTckaFdDErA7ZkVP95sp",
  "key26": "U4xt4eCVCAvFCVt2NhCXHdGTY6J7g392ndXZBooR8waNkZfMoU9ZdjEMUx9WT6qQmyPhn6zuS4JbJubXBrDC48a",
  "key27": "5ZT8B9tEMNVDZ3cAYf9YHswG9GPHQ7eL72NfUmwfpPJ4HpZfWHxA3nd8JZBuNDit1XtRuw4UbR71jjKRo6KtEn8R",
  "key28": "2wZKCDuBKcycJodZxJKunEVjNqmkBHD1jzcGiQ4XGyLHUXof1VisQCnAjkaMjNrXFUZfjZxMqipyPDMJfmb5pPrK",
  "key29": "d4fP3jdeDaGGDAY6phf6r1ahz3Y7S17PuPWECmKM2gAvsZ3VBXt8jeVZ8UTGs6xdNMDtQv1B7fYPrL4MkQpZLBZ",
  "key30": "5b4YZ9KPHiuJKoXZsSfkJPfNU5n675znG87bt8AoP6VKamq6uFSVunhdvK3XbugQ8Zfsmjx1UKozBrD6ktPecqUt",
  "key31": "5qhSpjZbCHSJTZ3WwcaGmXx3TjSPoYDrnk9ciKYtj9p6yfBzM8GTAoTzLERuz3aTdUR435VpttAiHP8QoB3adrpE",
  "key32": "FZ5TixncX89oXjYJDahWLcazGKtVVaM9vTCjnbEjDSKRGfH59ZgCNAECXx1cbfm7XZYY7133qYLwj16u8vaogAY",
  "key33": "ty4jSPW94LQDjynaRsN3PTNnLQDsNGQBfd8FRpixvDfgyW4bDQmXcgXdQrV6DZCs7nSy6oRsGVcVaKpGhKf6fgU",
  "key34": "5TBjQwwouuGt2S2S6CAvGy8kXeTVan9RAfqrEiYo94Un5rz537UGXywLKtFcpqCBEaCDueso2GHjKqw3Jf8WasXw",
  "key35": "48CFS82Qtn16pyBQojZbRMX35F1NnWLpfHda617pPuFi39mbMoj6q7nHSfuSdsSLMwHjpDQUSPygEoRkj11x8Y29",
  "key36": "jfxZ3GMM6Ena1Am22ahrAud73xBbNRNQA8wY7hThkhWaZDHM66idMSbrhYH1pieY6a2XuZR6sLAKGBTzabdzqmK",
  "key37": "4esgH1ogJ7Laee6LrLrjVFvMaSKnzb7n7suXMAHD5ySqwZNmpf9F14f1R21BPNGTHbrqQhFUmMAHZb8jdcAo1ha6",
  "key38": "2pp5FDJLKTmBEaYnGHPz32oCAJQmR2o6bGC5Eu4hjTLsrtcoy5BG3DmZwjb3HzshS5wZ9nGG6yHDKB3Dt5BWq5au",
  "key39": "3SfGH3usQXYHccnNXUXt11eJWLTcJ1Aucnh9gPm7M1CHujyrnzZqh5LbquL1bNbwqyusTHsgEB9kxW2ZKx4bEdYe",
  "key40": "3CHgYsFNZt9BWDDNU9qhYs3HaA3dpMH63Jz5ALGHomCR8H8mKFFJ4MN9YaX6vKKKm2VceUYKjv12ZgRtR2ikfhix",
  "key41": "2dgAsJMrKTj65KTiiJepfdMHAD4XzAcmtTHB9AeqxWhxxH8FrmdnQmqpCvJmtu7MTeE66GKFQUsNH4uiBYrBmv8y",
  "key42": "2j4smHFe9Tc36U76mhHSQNWPM7kufvgkoGBEAdePYNyrrUoMJssUjsBfSDfiQscuxkEMFJTBoLuJeqD4cFofo9oH",
  "key43": "3TZo4NF3nPq6Q9LSre3gX1yeGesUYWSqxrvxiuAg1oMGPYV2oQWKGVYQ9EAZ7Ue5RfhNeNLDmjDqsXMWsJiJBk7v",
  "key44": "5KrkqUYB1d9sZkJzT2MMRRjzrm5qPeABPrvUzBLhNRtkdtXDWu5Zoa2VxqzrArhMhj8ZzY6PRaeayyQMLYRzHALB",
  "key45": "53o64fWzR5eVFn69XWXB8vrMBWfwihkPLfDmWgs4bxKWkY9vxP8DpKT1817c3u5gXKdUEj9Bb4ydQdHBv4EBG28G",
  "key46": "4jcPQMCkE7ryMBceAQpunkFDADWmBBZcfWvX6KQAMxK4eGxrNgSnh5bdFHbhrU8dEe7s3tB25qXxfVZXagZbstqX",
  "key47": "4LqXoczzQ3bbmmJ2FeM1ctiXoXzJS49PgsPmp9qrCV7j7tL3G7keW4DXi83aVzJqHmfHEtMGTWsy3PMHHAEVqtff"
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
