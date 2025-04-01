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
    "3jvi8cggiaz3zjY1rbbtXAPgNz3AuvpSWpGNEpgVD9rGYsz5dinJzVUsofwjVJJirCNs9cjGKkkZmqPKU6Km6CA2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31fZe5KRJBtWfuwpc6LCbiHUboVL16UXDE4FoNJvmQeFUytJhrFNV8MuiSjHVBkZ7Me6a8sEnxmvFTP7X5LoJdFL",
  "key1": "4mWZCJ1xZzo6fZD2iHFDJ66p66NMyQsW6r3gp2Zed4VVyDtRDiBhdKvAA9U4C36rZqTUq4yx6xyHXQgwfbDPjrwh",
  "key2": "7SfmwhG5Lojd3aczxKpEUCxtVkidP7vSxf9LHv8zoMyLRUz6TRFtUT6K9z9DmBe7sKzNsBd9Gdzk4GpkR5gNrLx",
  "key3": "3xcRGFXGjbx6sAkJjSJxwxJyD3oGph47hVntTCJ7mXBH2M3XbAEJ2CQnrVCpRC3g471863mq5swe3JtU3Aiamqh4",
  "key4": "2arCjSHUGtgLCt653kLi9eZKyJZjhVvQFRGzU8mzMcUhNfPHq7Jni5miqd1JDrxZoGGS8oyGwwX6ahg8LVkVMU3x",
  "key5": "2Frmpo1CswuVKY57NXKgLyG6NYfybV57Xev8iyAgnPtpefRpvcadAC49dpVeGHvcoMoYTyvtVU4n4J55nzapa7gF",
  "key6": "4HmanE51auQ63Kd4z5Bj6UxkWhTMtfFGuQb9S5iKdGBnVBQhrtTm95FhGqn75wo8eDyxKgAvFyaWmedfQQdTzZAq",
  "key7": "3zUnmvmpukyt6igiwnW1CLwG6Fjhb1zNGgvPpmLxFyMDUBAiSSKo8TNAHmJNbX8KzMPpEirfRDGvuXgxWBmuZwVh",
  "key8": "2yWmR2RLwsorYCh17L7VmR5WADoeeYDJCsfS8mRuQMjHUM1w7rfUWYZXKy3U6jokPnHYxz4eswZvzXLybetEWeR7",
  "key9": "4Ri6jVFFZQUtNT7NMp2LotC2Upx2tV6U4j2HxmjG16vrDvTBRnxnwR28PCboPTDqZBTbgCZrR5aENCKH7FdcVYUA",
  "key10": "4ehvQGVZzv6ybZxUn5TQxZz5eGw7Xd5Qd9swfeptdEMzbpwevNFnpSCTbDSsV1njoxHRAJy8FSgcQnMTDnJajYnF",
  "key11": "64Rbn9EcZtTDYaBHJR2ScVdVbD1oKm97RxJ5rPoVc6U46yAvZTPZvS5JmXV7fQyWUBqYvMwqCbnjb8ndQEuTTvur",
  "key12": "2C1asCoypSTe3Pw8frrnFg982moHckjMBMnD97u7KAN662NxnxCBMVR1eBnaZBD9ceUP12JvSpMGBgk87hEfnMtJ",
  "key13": "34YLQ6mEaScsYK4M8BYCJiec6MHa3eNpdhf1KTruV9Z8Bgw2kiHAyxJ7ceoTqJJ3MF2nyRJyw57TrjWRGBWSUB29",
  "key14": "3BaeNow39NWYgZsDYmeBbVSskrgnEwM7pNct2iMBZkPbkLgaEjQPESxKRtTMjQWNgodiKytiCbRkSzwiDrhf7ocs",
  "key15": "5CM3xjq8G5sdcYCLWZyojwRaQ6V1JRyEt2wGGqFEb6Q1wqm7TFGEA1Smi2xshM8RgMzvgivkafL5DPf7CBytbLuz",
  "key16": "4Ydwa2QLaT86WXLXrXXtAVuFA8yWLh1wSDPaxYMkb5Z8G4uLA9WJa3q2hYx9jtXEgURgLuHorMLoxDYs8Rz3XXwD",
  "key17": "299rKe9qQ5hRSpPphEuhsX7EsfkA516h5JtDc7EQUEyyti3j5jqVLTHGyeeDmqQ4WyyR4P1JtMq5NjRtCMSCSdck",
  "key18": "3pierLRc4h6ouGf17Azz8taC7VzCr4FoUCpN4N9p5eG2abryzTC5ccq9hAYJyqppH5L3j4TTkk9ER4fwHVJecik9",
  "key19": "32v8231sKFd7U4CFCbHscHfbXZHwJpdkWjf8KkWUVhP5GfpYDoGk2Va3XeNzsd7RRhWwcJb49zWsEF9MXeQx1Vrt",
  "key20": "aqKdBfE7ot1jWGbxiRWjQAw7CH1uY43XJU8shLVEZhdNwm6sqKJEJLAu5UtqwA87gM4VWtvETApKgGvhhBwXHrW",
  "key21": "4bQfJydtBofUpLKsbVis1LRf2tFAs2TD5775oYp7JyKUL31QZAqYU7GzgPYdJK5DF1LpyojG7rMRfzJdm3FdfDVf",
  "key22": "xriswpdSF924Z2rCKjgqibbWpmwQM5Qi8RKhvok9uZEzENaDaa9PougE5tTg1tnczusgSoXfFZ9o1gSWXurCAj3",
  "key23": "5ftY5sRLhDSL3XirjJFMvDh6ySDdy8QVih21iLVwFY4asrdRStxCQ1CV6R5eMQppuGCA4roZeqBMh7gLfWnhkgDk",
  "key24": "3feAxjxs6k6hyqY4xgRCvC8Cqp6xqYoqQ9pmwidsXW6uZFJD8eqdD94Nv9pUvG7hdBjkRmCUYivSg49f1MpMLrbX",
  "key25": "2DcMJVCXgWq2gNb8Ejvpoi7np1L76zzG6FwTu5k3XvBGUQpL8qoEj1SdXm9EdBDRYpXNFnpftBo3aywSkh6ATGAD",
  "key26": "MkzVUxaLoMY9wc2dw8wvMuj3e6s5BBgoj5cqmParQx18bUqGAW446epAivsVgagySBrztPQB1FR6kAKXKr5pByV",
  "key27": "sdY4BuyaGSdBsKzDDGUpaDUj1AUcEVnh1UQm9ENcdvpBibwL3GXJo16PsrysMREN1c2asnj85PWDMwjbhCGxRVz",
  "key28": "3mCEc1VXEkeHohtAbfTKS8DTKP9Vs6R8fM1CSuzap4svffLtEWSV3Ces3RcndYZr3y1Mrzy7dhcGMKWjELX4BcF8",
  "key29": "47WL7DW8CcmFGnanAjzNCwb7nbxnB1YgBLxtz75EdAPZrBP5kTcrDcVVxc52JYKkGbY5RKBGMvgpAk4ry8wuFMGY",
  "key30": "4Vv7ZHcQ4ufxnuuThnfJ3dQJqZvsnteZneDXgxxJEjdR7bn2y8TUiaSq52MNvEqix7NpijbYjic87JWmrTqmCwsP",
  "key31": "4Q6Ejuuc9HufPtJmzMt3U6MmJsAJrmcddD4y9QkBj6FHCPaexVoE8j1wjPVWwMP7XAHWrBqMvuNV9toDYWwV8Z1F",
  "key32": "5ksvQjZppK79UguEs7dKw6Xv2L9z4LgpQfUC9LBdQiok7MciihXkmCuw3BJfz7SM59sBUaLoDCveeqqpc96ZZfyA",
  "key33": "o8ByqQNHkCEHiCvBpdAfcEi1NxsppVBBxcwpRGAJsXtX9wNLfCTAcVnuZ3XmveAt1VokKp8tnLzmQsC7Ea3xG5h",
  "key34": "sN5233AoJfSLWm7ySEWutWTrPTfNKv1TvbXrRhUAjwdgE4Ezk5XbkB3Zc1y8qxzzKSdzz4XFjVPKwVDQzNTLEsC",
  "key35": "2i4kzfpt9Xq2Ye3SGASLwmCE9utp1vE9qnRsBmVjCKW17sZDqXYsDiSmVBgovcxGf3yKH4d8v1sQXe66joz1Rq4x",
  "key36": "2nidjvMpr79aM1e1d2z3QiBVqFCKGd9TSVT6HysPPUKYbfxt8GDoSMVbkf69x2mLUg1JvvKzoJebZuJUx3feHdTb",
  "key37": "62MWDtkPwWCjEqtff1ANnjk9GkDR9QbmqFew59J1z1UXPNSfUUhDvDp8dMR8S2iFE4mtduJkvYuCGfVnCJ9CDqK",
  "key38": "4cCvvZcNyTiSEGhM9e1GnNvBnAerCDBbqs2nd4mL95W46HFMc6or8GK3bSWRprkmePFLnJuhGovWkgT2JZ91epwS",
  "key39": "5Evp3Ekh4yfDDFt4zny8dXWusni2ykV4KHGjy6hrRFdfieVBs79NaQcnY3BM3pB36y8nTysZdfhXPRsgbupVzjFh"
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
