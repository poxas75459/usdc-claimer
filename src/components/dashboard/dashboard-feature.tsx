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
    "ACkH17xHUaNCatjUamdCpZUjdZ7P5kKc6MebGDpwiNDQqpV8WZBG7E3nUwpEGnAWAXLrCAB8QzZi6Uw6w6fmVNL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2urtfx3Fa5e1Diq5NaZQS7ZYbodGgWwfNs9sQwrHwu8dVNBhviTBuZYShjxfV8CaKk8CN3sPNTYYSDDQhPzFVcwJ",
  "key1": "4MkdPsbPBpjhv5U4S7BcZ49BvbwWM8iKP2cySq42KM6xpKiJvr8UmZwzTXEbkkg3orSTdwN9J4kvpv5CZnZ2bkR3",
  "key2": "2vTF1BjzYsHA4S4XCAUowvT9JdQz5VXPnLXwsQbE9yJMocZK2F2vabpLRLxREco679mVcNG6x14h2UdqH36cXeWM",
  "key3": "ANryFbNJ3FXrksBhkDN98tXSN6cQtNPEAdkhtT6uFhEpqXydYnF7mcMFUQsj3K3b4mqA2ZvJfjsV5unsYa57vK9",
  "key4": "3yasduUJYJMtEE4izdjEkLYLSvs5AMiSjbi6QaxWiU3P1L8BREdjhoBGarrtrfycrqnA57gsguz4SGC9swmX5kt7",
  "key5": "3C6dDxB1ZMDq4bzsDC3X7pu9FFXKKqkrJdmGZ99687XoHCXWCVG377i3b6JBsMkVhoKHDKHj3tkNbRLb1jkjxZ1N",
  "key6": "3L1yGuLvt1cykdbvVRm1gAqcmYSd7srqY6mLupTsEZApXggG1dzs6RBkH8AbN4eeFATLGfCYYDuYzYMgfHuRzcwE",
  "key7": "4dqYcQYq9k7q2MBDvfJrKjub9bPijvNBzjrdYZN8r8RopBEvkPQrXaEezLDfo8fLFDxT9kYHfhdT4j2zw7oHphab",
  "key8": "g1kcmrgiBhTiStEWFkGJLWLbSYiYtP6UH3mFUupYw6aQtc2MQGyQywv1PeVbUree1rsKKpizN6Gv7sDaPqfXAsB",
  "key9": "3ujDoTF4L37q9YUQT42SkdYtJNjpV1ebTe5MEkB6uzM9vL27b5iyyjg9zQYPzh551xymCq6MR2Ufqm74E6mMm9Lu",
  "key10": "25n4uu9cAuP4wRKf45Ykqf756RUrpK7XD7jGfCr2GgjEhrVNKDskxyifTTTDqv4nPFySuCJLXgitWeoyn5NVTZm2",
  "key11": "3rH4h23629eMTYLuiay94WkaCRD8NrzdegGF2wmBDZAQNYZ7AsGS1UobdgdjXCgNd8yUoLqgzi7Jd7GxtPv9d7vM",
  "key12": "4TkhAXzFa7wMyVFRMQSNUaW5XM5qfjXkAtF9EvvgTmBjfUXJFtku3ewuJHZmyKgrTUUkHZUbhk6LRP9w1jxap8q2",
  "key13": "2Y1GyRfwye7w327oKQ1jah9fBAfrSG7PXw7HBxyMCD4Mm36Djf3sT8k2Z7p2oz9MHAifMjRy8mjASe435opyUNNw",
  "key14": "38XhRw1AS4TeeDomLRT5zqo6pidhwQFSYxaDfzdSpMN883ieF6FFpXehVawjhUSakkMNYhKHDtgtbtpUCkXzyjUB",
  "key15": "3Che5XTU7r3N3hZuiN3zf8QkFUf89gNcaudt5tytZ592YZjHuakAKsGAbuKQoWYuR35H94SWr9mkjKunzKqGeywc",
  "key16": "42PGFGxkxZ8ehNnaSvibmxf9Lft3bT3Xw7xgkJqhpskkCZ8vLSkxuX86BtACksB8ZZcCSfkNMqCSaM6Wzyp5tmL1",
  "key17": "5zKTq3KzacXcWdDuEmPsxGx63gzMqootAvWzx9q5vLoWghr8bjTbcUjMnhVVf8pJwpVej74vRGySAXeqBFa78XPW",
  "key18": "5eFxJs1nqVYJxu87aaRqxJhWp4Qh3NJiR2wvQpRH9nEDF64RZoueLWHPryrHW8ytRCbWXQ93hP498P1xvAtwRX8V",
  "key19": "3Vux4CpzhtDtxZ6dMvBBXMvojXLmX45McdjaPXFmm45TokB1QnGBwmUjkdgCyQx8hWDbUzmXMxMa6LN3KyBqnfNL",
  "key20": "461rdyQjhg5Q5V2ZiwokRj6W9Dy9JywLasXtXrvK114LbJ11pKJ7vjr5dxX7MxY5uvJjVXN51xuVjNUK1avxMqY3",
  "key21": "5ysUfbdBj33mrnDkUW6p45rw8kdsgDWAL7aTAwuhyG1qUwsU4JW4sXbQfzpCFCSUvmnD9Qra7Sg8xX14Uw6F1owp",
  "key22": "5SwvbhMWZgH27hosHtcrsbPPvj3ty5EfdozUBZZX5oqddtNQRad8mxp7LnnVZXZL4p9JE84ySGZZJjjHyvkWCEUm",
  "key23": "ooCPFZfu7DGU6tSfVmCecmd6DmFrKRAtmXtMD5V7Aw96p7nHQa5h19ajF2VLgkG8PAb6mGwLqDh7ve4fsPmmD2e",
  "key24": "PAooGicEMsKvSQ2qUbMTkqXnZAmSc7SJsxYfnqZGSMrV4Vo9JTLwKt2KGeBP6FwCHvjhGxHLLpt6v9vnnFcdBWm",
  "key25": "2CQAm5DQqrqcxgfwEChyU6ivdT8zRKx44Q6A3MkCNMqxWRR3UFoA3okPricVL58MrkHSZdAET5aNvWxbMDMV44Tj",
  "key26": "3uwyQWqRvwEPoFpcDCZ7vgdm86dhKwNeK3BrZZQToYmPCsCW9oyBrLHgQ6swxkoYz7mufxgJHiPmKxAXeQK2HamZ",
  "key27": "5CXkq7V9ewapY6NUYJyNj4KiGvJVQgwabd74ve44NdcPtKeMu5w5zZmwnapVRyBuJAuapTdmixKsiK24mhG478WG",
  "key28": "4cg4yrCV2ZD1YCXpeDVUfBjxGNdbo9GV2sSJpMgTTLYkB6xFxKUmYXFFxHfSYDwJfAcyHNfmYiBjt6aojsaLS8WW",
  "key29": "5FPK2kmCwnnps8FFDJaQPKAonyHKiPFk6U8vwas8vp3Ht8Z9fSBYMFMHSwNRF32cxBvDf1h842HBAFpoS2P86mLG",
  "key30": "59Um9tnrxHM6UFndtbUxhLqExLfxnAsEjuVfiEtsNqxVu74ctQrGR7vF26VZ34XWAc7E9iVrcz2kUBZUeqeNJAom"
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
