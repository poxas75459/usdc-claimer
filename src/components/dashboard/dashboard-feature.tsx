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
    "6Fz2GLixm9Vjw69PMakjKcXKcKQNbb6n8oiknCC7fCWC8EtF9rHTA59g9gDcuw8TQFYENvV5Yjy5iBb993RkvHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EmkzBmjbHVvr8ipbBgFRM2Mi2JsekHpH87XGep65sNCKY6L74RZtd3hYTLTuUoKLcPaQEXm1ZrjgbYHHKLzF9B3",
  "key1": "43AyfCc4ZtTBj9hD5ypVHJCYF8rHAxHDvJaryiccNdgm95V7MsYaVCJ5mHWW2pwnrG25RWwwuTrjJK9vFBcWyUA9",
  "key2": "2YWVHwoEqfWn5zFZUGVKha589AT55dwpGwPanr7Jv8oqVTcDNqUbpiY86amd4Vymh9Psy6tMQHmYdzGjHLotSdE7",
  "key3": "4dXUTUMtdpbj79f7sGJFYrArYzfLgxdeZearhRPehTZWcMNS3geVUvZiwMQgpGRDbUKjuWgQcXxBXyFAD7g5tnuJ",
  "key4": "5cdZ1xf8EpnRYTH6CgqBrpzFgpgNjfnJKg7JuR8Kq4hXCYXuuDyMMmqYBtCZy6iT4PSKtifds6h6btgDyx7qwaS5",
  "key5": "Bn1qDPy833EiSY4PeGFTuBNdGYm9MUvKgB6LjonA9S3Nov63zDUaS61c8VButXHZi8p1gwgKNUwKqDfe3LnDGse",
  "key6": "2YkHcUAisKyuqTpitRMFdXTqp31b5sBQT1YuraGNW1dpG6a1SNGvxMn2vEnUbtB9qiVFUjVER25zCVU41zYYkxEe",
  "key7": "42agk872ghmeg6o3yHp92zLRfqtRMZ8D1JAmzg2ZQ3rA8xGRN2REpKEVALei49Lw4JV2MMGzUSTpbwdPUk8qMP5U",
  "key8": "4mzPWxzFc8zxz3rEWNkMDgQFuMfBjvMQrfzQcUo3aRbHFvCfi5xsBUtPpHaqi6ZZTQNCC2V8YeoJvphQZ4x7bQUN",
  "key9": "5LQUSfGpWk8NK4savwp1gXeqFMR7GBLnSejUbRaasFEYcVTcZdnSQ7iCVRvxCFLcokjRfbS9zzRn2A9MYkkDdByW",
  "key10": "3qE7fR6LEWh4LsdP8tcVrZqijwrYXjKe2S75T1jaAyYDRwNcMRYKauB8PmEqFYRbTEGVZ2xFJVhUDcstoYsKkZLi",
  "key11": "XS435oovWCnC3mfaioiXMuf3Jw3TCW6dYj3CdGdc5jvyihvRg99WRMDynnTxdMEapmp3RLUGCfKzx7ukRd4g26g",
  "key12": "TpdtyguiXcdeRLoEQS7D5vcLS1UNAC1jibny4BBtvHaoKNK7Qe2NYXgFpkxRV1ymwV7zA5vpkkGbwVFJ5ZtydqA",
  "key13": "4Bhp4kfCwvJodVoUvAXTXsR9BtRavqsoxWeWM5dHLYtMeA9mDKxYmbxJ6yHZp9Mi83G7W6R4sbq3E7G9E8Lv2ARZ",
  "key14": "565oj8xM7EiPQAVq74RrV1nCynz5KEpqTET1e8bYkPBM5pYV9k8xwZw91Sucm2XMCwhVTWcUzXbmdsrwSAK64kbG",
  "key15": "3buUdUrBMCJMitiQEWiHchbahC86gd4BDVuyphyTgJdZJLU8xo7sxs6t4173A23kpKPVZ5o1BmiLD8vHE7SiZ5bT",
  "key16": "wWU7wYCnqwaPRx1wBjxt2qHbGSb4dZTaSKqGQsMGaRXupWRwQYz3mTzVMVcda2RdPgJkozMRfTfZYQqEKRpEGp1",
  "key17": "5aqN5FYu8j6rRz58ThotBPpWLqLb6xrdVRosoX1bMSjtvkuTqDXbv39J21ACGGdrrTNeZtkiJc7Lb2jgGVPWwb7g",
  "key18": "7eixGnq5PhTVEvGNNj3acZcfusFqLTdZ5JA48fHZBa4zLM4ugGjB3SkeqfTXCDhQQvSsCL26DAVFyZWsq8J8Bzx",
  "key19": "3u8ViMvZhrtYA1NFYrNvvDb5ZMFkQeCZryxoL1hzTbPCShyFnyWX1tnZVV7zS9ezp3D6C9pnqJuJufFM3LgrEgAJ",
  "key20": "2CrpPYamC9uKuJuTw8jDH4A9aEwXscCtrZtAZM6KfMpVCscerHtkq1sGHXGBBvFCE217KTLAxbH5sQyFzbHAYRo1",
  "key21": "2mqZStMp5oenDP1pFDDxtcyvirVQ5cFVRQADtzGyfhWJH34tJ7AyFpYmqAxbSjbqgfrc7pRAPvGfAXaNYsununsh",
  "key22": "33j6fAw6hPBPHLdzxyfL8VWsZfTvNkgsTKgxwFo5hzgTb6sv3cTza9pYQtsX7yLj26UnDbRiDsnjTqduuMqRiPMV",
  "key23": "5sudXDAeZr7GCLutMWoP11RuSko15oouKdFtYYHmW6KnU314nozXVsweXpzg4BucG6bQ3txKtMiyuQjv7puki7gf",
  "key24": "TuhxDeup5SHKktYp2heQS1Eb246erw78JzX2U34JNdLVmvG4cskdf7zCXoqRnKiUf88MXwnhYdT3F7nhHyXSNp6",
  "key25": "31wY9KkPJgdJNMpZDfQeCkhucQ2DM5YqoLTCCouF8Dy2Ucr5HXXpEUSokzAKsct4jZFU6ssayNX1iyZKpKdTzkos",
  "key26": "2qmLkWV8MusPuMYxDc27qcbwp7Y5mYqRMBsfupyNP6u6Y375D6bzaxEQ2Vso4wPbTBY49SrMZNZMefGK6Zrvxh31",
  "key27": "2DtPF74iEsARgmRnm27K5uP8mvfA6my1c3UDYBY1WpnFkCEm2rLUwvxsVBvxurSG3zeWxsqMVViWgK1BBzRFtPbg",
  "key28": "9AwnfcvA1EBwCj3pdotSE5Cpb8LFf1EGH6cJgE7PKuc79krbzTtrhcagX6FKsdPmZVwzMZR7xJFfgsY1UXLoRjA",
  "key29": "4ab6nkyttCXBiy5WonU5gxJMxnJFvndNRRtZHqphgwc6dKeN4v3YdzTQJAtfnAoY6fs8JUicyAu6vQ4XtCZ9B6NQ",
  "key30": "4tgXn1fRrnKzX6svJRtADfkHNwEjHkFFzAkr3bU8i2JCkSH1DL6LQNTzsAcYCv5G24SoyKi5MSG6ScafFdxVF4ir",
  "key31": "2wafVvsRS6iR51PcrZ52gz7iikHPrA6ByHnod6kjDMpDquzgRViPD5sZjwJT8Uca3ofkGpVn13ti6xq7iAx9pir",
  "key32": "4y8pYhLnX96HRad17MuLupWG8jCFmZw8E1spYMw2EQQsJR96LhQ34eLbNNFAZpVSNdx1jhFH76wwUdVDSTXYqu4u",
  "key33": "VTG2F6ZASK2ZqeMkniqMuZpfbepc51owUcRWrefEtFicHcEEJcZSLowLVC2AAK77rB6vYbT8hNGuXnSynZJB6K7",
  "key34": "5iMXX2pg3fkKSXPBdHoSZdRhPd8EoL6ana6pZS552Rc9Mx3YcqpE7aK6CNYEzdJEZrsgL3FqzYVg1UXcPu1gNVkh",
  "key35": "37Xpbay22GHf9CeGXM5vSmc4wNyKTtVM3W73k4ZDFuUjrDxmGRX6DfZmZnXtwLccigeLo3qYnjHuHReqzZ4rYUj2",
  "key36": "4CsMHoDpyJdkTg37GLpLuuZmyLLRDSoS5h2CgECb1FZKo3ynG2yLhD9p9Lp8ryALWCPhUQA6QUF3q1j1MBB6QgXz",
  "key37": "oEoU5sdPp2tJdYr5fJ7TYYMwNxKvQc7xvzVbydnP6NAW8TxCRu5hEophqYTsrqX8d9tQMUxJX8NnL7iVRWmRhF5",
  "key38": "4WVxc5y39aA1eXwhoMcAqoxMAZ2UP2n2zSnJ9v4oPS1Jeiw2fZtbvLG65tSQjpVMKYYm8x8bxHxFyaMnYnjdeCb5",
  "key39": "2vQ3y7bKGtRDr6fuAU4FTh4WEAyCgLKw4oFd8VaCdpJMLfSAC7FTvcskmJzFCWq75rTU8qckJDwxJF288BPsunv2",
  "key40": "2wqo4H2vAR8oNniSSrvmM4wzchamWJjNsRY3xYZEMC7s2kjES6Z2FcnrqxN42H84bYBP3xMxwbmngAsLzaZfpEmM",
  "key41": "2Qj8ezE2FBGGegaCznrKqYd1nf5GPkx6HfcqpT5dBW12QLL93gMZEhwKn4j9pjpaFJA9Tuu9RZjq1Dk7Ka42S3xJ",
  "key42": "3gXgjTtu1SwohQKQXkc1apKz53cokZ4iP3Yimn6SuM8TgTQkThSoZyLeCSL43Kh5D88CSLKE5J4m8LF6Puu9Mu8H",
  "key43": "3ztQNjQVHbTpRQoyp6iiHrDNigHpdjymN2iiaTKDpknJprkbiysZmjW4MiHFfh3pKVo5r6XxJMS9Fwqkz2n8RLG6"
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
