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
    "WEedQYcvL2GE1EfyGfX1Yd3LxVerUqnQcerzz8vASuSg2jhSDqcPvsVdLc3PS3zCpBbsfEEvknwGBEKXzPjyhAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a4HLJp5ACpZ955j8s1Pn5rtrdsFcaXoEkdyGczZWTMnjqzYqFF5D2SQCZaLxQUojXhrrTgahMQfqBNoQ1bTwu6h",
  "key1": "3GccA576EXGdxAF2iiuhejPLn4usH3zgYMroZZjpRSg4aidLtZgmdMDtqJXSDQSunERmg9CMRd4MkxCuXSS4PCYc",
  "key2": "62EzCCyGN8PK7EVkMuVaTpmQ8QoQ7pdf4wzdD4mqzPm2FP11TcuvFUcJrRQtHTqfbdJuZhR8zgyvmC7quKvepZ6Y",
  "key3": "5RXV7wmretvSqcwPncVZpvaSBCWCNh1oiG4VtMmKk3Bq5tcGdz4fXR4LqVCcUjtMSzpDivrHUjWUkqEhuqJLLLf",
  "key4": "4gg9DUfGsmqiLqZ4Ad2zqFfgCHFbGW73E5GFV7x2E8G3NSejhB8HnCL3xU8YypMwisDwSxDuwqRv72z6Fn1cvSsA",
  "key5": "484k8t56PqSC5P6hNj9ee1Ksu7uv2T2TpqKb5tLn4gLLGoyQokrse9Py8Jnc8iamRDeDbKPDupN4ihhNGyj8QDGb",
  "key6": "3kfh53abdsPxRnBqUNG6nJwQVVNgYwqKEGvyYhoCWUcQVE8Bb6wFfa9iVEt1jBEzpP1YP8KBTABDgy3ddGrcxMkG",
  "key7": "3ropokQEhh9bMET2p1bQ9QnAPZnMPhTWha1hd8Ve3b8R9wDhCbLvobJc2dXAapd3L8hLot9jAJWtFAWFgmYEXVx4",
  "key8": "4KCg661TxL1sJp4XeZhG7StC3TcSasBuz7PmxrLRKBf8CD58HZ97DqXCjwLPRJxcr84tZ1yyaujbq8Pm5gXnkuy1",
  "key9": "5goPHZ8Fo6DQjDgwNEqDQ9qRukk4gQ8hEjKmTmrZPTQ1CBgy5Q2bW1AVyYjeBcbKrhxC5vpGNfvjg892RBANeDFV",
  "key10": "32RxbWyqxHJkDEYd41gzSHmUyVHgooszJ6V3cQMrUCUWLgLyqvKD6wGu4APzatsLgSaXCcRASQQUL46ZvpfSnY4d",
  "key11": "4kY2AUxLgYBJ1RZYPni1Ed3A68UN8gZEjhXaCKbsnhRpYuCroZUxDzFPntbi5uJnas3p8s4RNdHWzteuKcDx4F6K",
  "key12": "4kWG5EHMieCPyaUkPYajnzSKy9qymzcNbCnWfZovwtntnZ9co2rFiCfYTnZLZq2rtwtt4qyeJnF4m6QaqYFe4CQB",
  "key13": "29wkgEFJjKTguBjAGtvyZbAvihVN5YbWXMQtNSiqEaEe8Sk6yqAczEnuqS2x9ruQzXiMSi8QAqgocTs5FmokpamH",
  "key14": "35pSMGeMxDLmRXGffXk9kcLj24A2pwdu2kkEERkKoJ2Dx1foESEz6sVviKRpoW1uMH22XrjWMb6e4doaupVJcZu5",
  "key15": "2d2Jj7ru78maurcpB2ZTSdwpTpTmpKra91wZNTuLbC987Z2qjYfNu71LksmZehgKvBdMcHBGNwsC5aJPPLDa4Qh7",
  "key16": "5vjSaK738LGUK3WXjKXUVwqEX9AnrcRotYTdmYWks7e2zhiNT3eYJjXLCL6hvbgDJD9RwJNJrZEs43ikbaebVRZz",
  "key17": "SgTrKZg6hKTFVbgDyqvcsbJyx4uV9pQSEYivS8cm7etTpsP3CzmtUsM5K9fuiKJabmqmbWUnmyhtsZbeYtaG413",
  "key18": "FZN2DLJhj6SKb7pqTYN8hb8pcXpEBXMvDNUgmfych7BeH9Z6f2hsCdtUNKGHxQbNDoh2tzYDGPYiu7z5F8ddhrC",
  "key19": "4rQ3xV5Sx3yZjR9ms22tQMb3fgdSQV5zBfVEUa5DcPCAmpCX3eGcqcFebxPJXozC8oJk9zkGLcZNkyFkpqcRP9yw",
  "key20": "FJZAQuuZ9jsScWJEGPsiKLEAy4bzvhxThX728FMqxmi95x6jdXjpp3FNPw1pwwjcu8CqqwbCZqVHshMnbxqghxj",
  "key21": "3tKt1mmk4PFnipQR3Jva5ofCCqASKmgJ8W3FvQKpBvCavT9xpHKJjW8d5qQiRctWdckajmN5q11RWHqdaCP8NkyA",
  "key22": "6k5SnvqnJGBeoWpyEDCRiBiHCkkqXPm1jDkpG9xEdoZz63s7BHmH6yn9GYu3iJ8QgYYyhjR2TTQDwNmZtCTveMK",
  "key23": "2GmJ6UauYif29Hnqye6jCat8TiJR2m6LA9pmmKqj8K3JvVnN8FC3Wz5wtLTwU334jfRTYu2VC312yGQTf51JN2Jk",
  "key24": "2prTJQyeLnnuJ6DKL4FVekgPurJBkcNkAHFbawhw7ZoQNLH8xjja2fCjEt4HpyZ2XBQVkxvLzu1uqZYri7J7NiHu",
  "key25": "2LfUs78VwKkxCuCz9K6ZtD46o2rxojFnxCUSLTBTLbKLZdJX8jM3CZQJiC75zNG3WTFqiv4EGjiR5N9qJut1T6K6",
  "key26": "5TFAkJyijxM3Kr39jR5qEudcb3fVTj79vf1Uj2p2iEXNrQyQFsFGhatQrJrvhcez9Xf1MnpESf7FnNESqY9ULJZW",
  "key27": "2S58pdtCdoKa1WPr3kRihWVBS9rQmuJqyNpnA9UwbbGysdLA2Bq1riAC2uRHAVmtYEXJyzcD2qPnUU6nYrVkykEC",
  "key28": "4g4hYuJnFfAjS7uvTGZwgZQs6gZWsGWofobVMsgbjRUD2thm57nKasPuFLm3xwVx4GcHhGUv9iduLJrekmL9emPY",
  "key29": "4BS1GfVDZNhNmu5U7XNciLi6wBt6YJJmUGY6KqTgdiNp6xkKK6QBfM5QKgzgK2TemhDgHb3iir4yFBK3vVtfwQ1M",
  "key30": "5kkTPRGhx8ytDoorKa6ssHuNYF4pPBgho5519dS9zQ8sUTUULR4VhjUAHTM3tkSRxRqcxpDcjMJK2uhi9GhH9aT3",
  "key31": "41vmvwVZUfRtiR68Ssg5xNESi8XfJH7qvx6i5oGwxXsTEN5YcLwrhxV85MzWhwqHdRyFzcKHdx6eecgTBauBjUgw",
  "key32": "5ZoMmaC19zuR1kvDd7VSaCK1PPJnCMqC4wkkXRBTGyhMB9mgFK577dhi1WNUxWcgA1jtkTmwp3My79chu3wmYbjw",
  "key33": "3pmpZjvHd31J4jzrJFup1oua89x2ySKv3FWzAUSXvTwyaP1zWk49wbFKnVcfzx4hkqXtZqwjiw8DZ6CSjN2jqvEy",
  "key34": "3xz1beGJe29qFqr6bG7hhR8EsKBtuvThbFPjVHRtXxbLMnD2BQjjAAQRvMRPnoqbBjHHvJwSKCxWkDvhxvYbjCCm",
  "key35": "5UkbHMm16YejLsen7v5v7eM5czhqGALQeha3SyKfGEobiGsmqUpF4WMZmjEWaK2pnzt8QwUQEkrmh32vrVtPxJ8V",
  "key36": "4vsJrcJighi9QQkQFPx6JFT5RBhCCv5DzPDG2teuQipRpndLgFVirguJC1JgKtQVbMm1X8RmPTUfASa3ejt2ZA7P",
  "key37": "4JBEg6ANBqiekSgA7oW3zWU6MnizNW7dErtnCwGMTUFczMami8ZqLd1GiDeZXaSjESomZzkN3U5pQL1PbTGV84gQ",
  "key38": "2hiARSkZpk6QvfnEQTwDcSengc7pR2dkG6ZR9Y1EDFeu7dqQZ4m5ftXsJBeQCeyE1gqhi3viPj2EXnXbuL1ocrQN",
  "key39": "REmGpUsNLiazE7QxMtQphhpGBc65NtGDr1oH3Xm4JKqXjJrKbCEGXt2N3g7ip9xKD1A3BiPGzLYnqCrE1uaJdcu",
  "key40": "549nLkSWNgZBNx9GWC9xJrd9SAY2gGNdnrpP9PH8S754zv9yuNij9UjYYGeiN5figmPa3Bp1vjzarh6ccxF2Svct",
  "key41": "5hqEExPxogUtBjRbBVxcp7Chp7SJbZExxznGpt5LrNDBWawNfjpdb3rnoF9rBLkbBkwk3ZdanQn4r6No54FVpUox",
  "key42": "2nXCqQQ5WFjLveLtwYsiYa6PoBoXvjsVJF8x8X6Hxm2LEAPGEoGX2BgELULoMsfTNYzuhj7gyRdGQr2hNuhJgy7v",
  "key43": "4GxnVfRLd4Tg7EMYRhED6mEfu2okqCZYyXNxGb4k3C9Wcjv3DhKzfms824ns6WubaFBt7YmuVHwGXrRMm6TpuNmg",
  "key44": "EpbNY66znjV7ybsz5Ze4dqGRL137NkvAyLiC7bkNuBuR5SvaGgTzGsu6YBqrJX4ozAXcFRYNLm5mRKoaBZdU3Su",
  "key45": "55fKFxMi2QU1UrezM8HYQLU5WVtZvjJTDVBDekoiJaLYbXxv7iWBc8hf4SWSZMdUWJRbMKuTQQcbXeJ87jiFBaxb",
  "key46": "wGP2NfotgELNibCgzHF2DTkJxqnZvSmW72CT7Uxfd2FQ7FALbNXsio9mEF5d1FtmmugUGujrTqAn2CQ57ZMyYTe",
  "key47": "4uxaA817NS2hjPEDpNhRBvkw6uxZFA7THMGpXpJVkSxA5gGr3PZCKAs98wKmCpggjv4QnwTeDG6QBNxUmTrbhewi",
  "key48": "5Z5HFAm9oPmQGjayJ6BrWnZoGFaiywjhLQTdAXYXVbTqtVWv8e64ruaT3e7BhVqedH15PGcrJcY4FAn89VvH5PWA",
  "key49": "XGw8bdhiPFpiobYKnYNx6BoDHAq5jdFoSZjm9fntx4oTAF2EWXYYz615xM87B3ZYkeJxoUWgUa7ZSV9agxhPJej"
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
