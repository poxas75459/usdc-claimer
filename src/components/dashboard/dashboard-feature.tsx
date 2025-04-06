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
    "2fayFzyjpASvxaKBpDU6u41RnQBGkWWwkv3H9cXXapKxGk5VskLaD4A9YWZrhCdg8H9RL1he1sLM94e6wEbd3RXS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TPTJihKXGQKw7NVt6Z3KBizq5xCgCymhhw45AahkRr3xqQer167gvs3RFbznRpAY377CbApn57jormfQjWpdn9k",
  "key1": "3ifWdqpKBeLPXAaGG8dijhGZjbz8Lv3AudvMQr6etBCFMjXvfuM2PfZhuPFT1qmXhx9qYazqP4iDs9aEn6Mobb6J",
  "key2": "2HTLsSGkUVpfpznZwLtCFSkpaHminsEGELS94kgLKmyYErr4r8M62C59v9WAb6EaGktQiGqHmBXU7eoKkZMG8LpS",
  "key3": "5gJna8EtsYkRYcjtvwofAkSscKjroFRpMrYnQS9sNKv1iA4KuxgxkTvmZRgaFjdARAiVda1MKXppMDcnRnxRaALJ",
  "key4": "2DRFnb3UhZKSb2fKhdgm2KFDbKK9QqZjGtobKMVcLZZkfYdSKP7pgmDc7862HqndK9SaqqYeyTd2puMJvkumXKVn",
  "key5": "2YZD3FKpaLRVwZ6Q5ePyfeHYkNEontK1Dtorji18R6BTvaiiuSyeR2vu1txKetoEzMGuiXkw4ef7Q1MPjsmGg3pd",
  "key6": "2FePDbtHuZXGoz5DtgcZRJmkeVykdjCFixcQ3QZ1pnTB5VPZQbvS2tDrgRw9z1uqeCtLymnVJa5fLFmjq8ZMzs3v",
  "key7": "5FNK4um3hKAY3J6ALR5ovWtbcwMV5TweEdrW756UxQDVotc3VDD6oERomBKsDSgG9AC5YFetzgb1HMx6avvjr6mY",
  "key8": "5DE32Rv2aS12UTXXCkdxdQbTMH1ct85u9h8b8PGEh68uJW7ahvfL81DB84pzdHa7Xh7xsDGWy5yViFjN8DpLpo43",
  "key9": "2Qipi5qtTDLV1dtzYeuxiAnycnyCX7uKgcxfyZMjZVQLJ3M6KuoH1tswzuFRVEhQZvbG7DrvGpUMtNvPAzg7FnJL",
  "key10": "KN9trssKhsLo5u2yXq1uTj1Y8Jxt7CLN6BKT3jvS27Rj9ws66ymTZ4orS6wqJb35EyaP9hfLFguiczAEijnF3bH",
  "key11": "3QYmnLYkMqTrva6AzQ7G6wyhKSiPR3HffhAVoUJK9LGYDpfnUocugABAnFRvhPDxkeiELgNEsnLdPajNLTeABbFS",
  "key12": "muyHy2dKWtxEX87mxm39wx3i5oYShTRrhLEVsVqLTR4xFDGkTrSSoZ7XVUQ7tV1RqWFVBdH1166jjsQ6ABPH2DN",
  "key13": "uPotBqhjJve5ECPooRYn2p6fyhCJf3EXxRuHSawSpa9RuhA9pY2fKxfQTq12dXABpehprwtjpvojQgZH8M9cVgk",
  "key14": "4NWAp7KtPsdTL1R3ex9gtfwn1Q45QYjJoQ415afX9RjgK1dKD1sSSCLLfCBa6FS7Xa6yWZNhkdkxZzQoN4KDTYL7",
  "key15": "4D8St7Aj3wAaEzxc8dtSMD1sDuR8zFfT9oS4616SkvnaGYpwqnCzw5MqLmkCTC7B3JZgzPr5tgWXbZbr2ax7PeEK",
  "key16": "5vPQiBZfTwjhebLyx4Qca5P72g6nuErngaEfqGbPM4Qi2AG5oPxoHrj3y521etpjFcMHmFLWpG5ZAF2taseu58Py",
  "key17": "3qYeuD5iS8VevqQJ8jwTmzotmw9NXR8YaWcV9zP9HfbG6Ex81uyiBYxgdVkzeBHZZTtNQW41sjgBkM46xmTMv8MS",
  "key18": "3m11j4h15pUak4Dc5aQBTuKYpbvejpM9jTdnEwm7YPGD5MhE5p5AqkvZ5shGxB3VsXgKcL6gjoJ7VJCX6XQnfBfU",
  "key19": "5bcYdTDxSV5kGsfxRfF5GmaTJZQ79d1VtbGPvtJBGwEpWPDZvpJ5fY6ZtXZe2bdmGhvpmCPtF3Bb2wB8GE1y1rgJ",
  "key20": "5Xoixz4WPDE68ifaHSFCNHLCcJqo7tjEMJpnvPuGCA3rs2bbCi7pmnGB8hwNTi2yLf6tiULKDZF6xKuPCTBCif5J",
  "key21": "32ZMSVYDu8hL85NM74o6kGJxKpGNudoPZbhqqMdxC2Z9VY19uZMg9AZxqHYGDiHzxKPA29km8AcxsYmNZTt3Be39",
  "key22": "2G1MswhiShL2EYRuGte55sWqJPBhwpmNyrSjVqaxEx4xG8r4A1XwQKSKfAdqDycfNSpZzZxV2VutSPqtQUiy4Tky",
  "key23": "48McwMi8MbpMQzsaQ78jDWzTA9oLcXupyGfED811SD7ANFB2D7poVLioPxcH6jQvS5CFwgSi3kA7K6XN1egT93NH",
  "key24": "653UGC6pUVtED1D1xnr5KQiBJ8LJeyPzJFVYBmWfkqoftvotHxCoEcjvLZjQacKHT57rxAfuMbi1ryBvWYey6LpT",
  "key25": "4KLDyHX6roxfP1GULXz3LZTEzcEnUxuNC87XTU8aXvCXuEowNDXaYzXVdmmApWzU2hBXje198awgaKBchZ9u1nXt",
  "key26": "4etQ32ytyFbzWYaxG8dbDaHxMD9y58PKZrzbLdGAn74iVLBLNtp4t5FtF4b5R1TVVh87UucjRi8Nc9FFfDtw6Wyt",
  "key27": "2mjernXG9YtaHgR62KuKsskeHUvVm6M2CF8Sx866uUxUj1LjJmicPehLJiv8Su9duGnUAm294Fx2te4qpxgCK8nG",
  "key28": "fWMojxaxuNzWbCiTLe7rGpkbsYM6oWWxVCqNWjhD6YU7piTvD9nXmeLRp4NaL4eBzfemjWcNJS34W2p13k3ireT",
  "key29": "5J2rPWkARN6PkpqyuDMJcXt5jgaAcbD5EnFiCrnU7kxdbLPVc7b3hfb3qt6aFmLgPcZVuUCFYzPgj9BPYhBy4Z2z",
  "key30": "5n4ptfbw3b2c6HgLh6pjaxDFqNbdd6ZqnHLBQ1vJpR18XQNhfvr3qEapgyBKkvrsHF5yiSjAHT62sVf3vfHY4QbL",
  "key31": "3BRy3Yt9H9savTK1Xwj6kfecRTSXwsRpYtm1gDmidkRioH9mamDBtXfQH8L89Bu8izeY3xcfFbm2dqnA5pNA9xr2",
  "key32": "22JYCQYk7cfJQZZYBAzMY2hbLMisu6LQVRRdLPbdaBzugTo9UAxh2uR74iAFctMPCJ4iGJtFjuU5bBBB8Sh5b8Fh",
  "key33": "S3TtrLPn9AP2hNjUyXwNjTE747JFJG81k9rBhY45LpudJNUWomY41EizWVQfvQP1ffsK9dfUR4TmPuco8jz4ZET",
  "key34": "ChuQzT258ArhjNVg1K4dnibuqubwajjb92EWwRYUNstfiH34vvT5WRmo3jTpDzMPbb9Y9zZrMphs35Vk21Kziqh",
  "key35": "2Ancc53qB5VJbZtpD3jodwfNxuC3jCwDCCYW3ov4LpASUMWxYskHAVaPSZgSJUHGM7wLoyLNf2nzU7vB64y8RDXz",
  "key36": "2C7Wvk1TRxexnys2prJmZrFCZZfpu8BvmM1Ty7FZiJnTHJJ26FvJwueqAzXr1vtZyXYgFSesc867SeYKnDKK6TVV",
  "key37": "4exgcxWvzCjzTKigkWfm4V6hWtF68ie2etRcoJDSkzGmZQV1BEY94SojevLV2oz1crpUkY1FMAXWW8t84gvJ5uGr",
  "key38": "6WdM4u5NFhTNqFd1UMPKtkYqgw1sRDED4H5cH5gm398ap3YehxC3x8dKSS3WmnmmeNyrrxhr9sJHq6krZLp1myR",
  "key39": "4bPXwAMa7iMm2UQwRtsxn7ZR9NQPLwTENT4nqp4dsbErmTFmX4dpRnH18teJVtFg9YZnMVh3mTsH6MShfV8xHvvj",
  "key40": "2jekHZqf9WDfNDYuYVkGz6FK7iAuborowt96e2TBAyL6epjbLhRmnZ52fSUQYvUM4A23Umqc47uSEYkSCKcwD5rg",
  "key41": "4QTwrfGchxSLGPc6fes8SXtX21G7QynPi4WtTzHZTgzotFYYjfNEgG3Ghq22VUNLwMJMByBZZE2bDQjPcE1ojmVh",
  "key42": "3iMEqs1ysQ8oizRwc5pY8i4pfkWWoLsvBQZ3RCutmvoBEpFsofuZMjFVtACQkRsGqEg9tw6TEd4BEBAYv716eJUv",
  "key43": "8uMSU5SFVVSmArQrgrXwR4Hq7G2gfPzCdPoQymSNEFs4DWHmoCW483fBHnhbdDdZ29iXEDFNHvwqydXuFqfofbg",
  "key44": "2h6MqBQY7rAm3QwLiainCqxi9drnEDMzyMqFxPcDnxFj1Xpn1eBiVwLmoN2zvfRwQ4vWpvr9xoihH7v5kc2ymuD8",
  "key45": "3Tdn1WPtEBupfQ2brdDC5UhoR9pXNjNm3bA3qGid9mYwhrz532G13NCsKe1mzZ92JCE63w6SZ6xKAAMRLAZ1umrb",
  "key46": "4zASuJuqZt4WC2PKzGzyY2JKej6ymZ6sh8icWyGwV89jNYSeJqogt7hit2HuX5TDPmFo4LnCQPaMVWo4AGaxsxm6",
  "key47": "3bGDrrodmKYC33GJ85kW3xAWM67VH2SMx2zCfj4sQmj7rJdmstzLqpco6bEg5AW6zp2Ar3gZ7D7246VXi49s9zcS"
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
