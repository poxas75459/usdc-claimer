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
    "3ZoMf9DmpvsPuZqjQizZqEEHJEHTw1CDkbn7FwYxGcufnsrzEu5KEuLVsFH86BZ1tQrgNM1Zdp2Kot8ecQZrConF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25seMsh4bGBk3wu84e1RibdEq4taWnzaoPvCeEKXwdMQUAihrJZqxMAxdUYJLo6srqZeMRtgaSeAxWt1d95QrWiG",
  "key1": "2kKGjoTNjEhUnFd32y93xq2cVgYXePibX5UGZ5RmogJzAQPbQCrGRLtdvHokaKywXdDVhfvev8ZgoqQSuxdTcdXT",
  "key2": "qrfeU1HpkMxVFBUVkY4N5G4aMyt2MStsxF8cPmmSSqVdfH7cyZqSUGhuPcgjgTQodd72ZiE889xkpYCMkoCVG65",
  "key3": "3UMUDgTCx68fVEpETWH4nzNqAaPgEDXSRQgv7zke6SZpFZj9VQ3HP1vAF6kn9cwSYxWRSU5FSojiXiqAA2sT2dJc",
  "key4": "3RAu7MZfYzs6cfGACAAyXE3t4DguTct7zQjSCHGSehM4wEpmfK8K4WpLsm9XAXQUa1fTXURqAfVyxWrgjxCfPx2Q",
  "key5": "2kBhH6nqcCgdmeArjpiouxpfP9EUZirQuLDHaG3HKaaReL6wKMXo8AaXdJhCe6fRv3LJYyDuefL5p1ohqXPca4wo",
  "key6": "37CGz6bW82BWuWKukhsdXprFqP9RBuBYQmSVkY3DHDGsXnWZFhViCCokpDa8KKdejj8SLs2yBGLXbTQpkaHGX2ST",
  "key7": "2X8Y1aLT6CQQMR9mE7qyvREa7zm9etDsJdri22Kjtdd8EnckUf5BLF6djtujpDKXUnx6nnQssc6akLP3kZUzwnUB",
  "key8": "4YmNbg1NnynBiiCGxRqfnAkEuFNQXpPmSTPjL8cQQcujM99ry4RwBYofDUeqZ2MF8E1Z5PVzA6BxKhL2p7cRvt1w",
  "key9": "tmGZbm32sM35AzSr6qyuDoSmygwB67DWQkbvM92wCJjH6i76hJMa8tt64Pk7ZVVtVz5ZEtmRufMxwYHmiqGCfbn",
  "key10": "3MGhocTv3ZSCFndYFNS3Py9BhiZmS9pXVUi55Fezxc4JJLKS89bcuRN1hsvXn77fPbAka2gBzYx8NKxSSGDMAgkb",
  "key11": "4TXzFYuhnZduvWNZLxszL9bWEqKTGBcjViqHkDV3q52n1q31pyamjbpivH866eC8e8PNt7znMeqB1bCY6bn6zj4F",
  "key12": "4XRS5xJoECY8VuXnq6bhAgwWWTCoxhmQ1HGPj1FotXQ62Ud9P6kiMyJfhA3X9qy4kJZAdkJq4zW5qsveMBkqfKx5",
  "key13": "Ytdaf5EP3CW1HmoQyq9twLYF9ANbX6pZXMvpN3svJKE8tiPVaTc81pcf5dDxEGcER2mFYfwcemm8DaA9HPdnT5M",
  "key14": "3yRCtuAEg5ZViSJvVDdPtzoCFSvFnGm7fQMPggdbXyvDmGEp52UaJqSna57iRX3XnrYJerJGQGbzt7niGTprEg36",
  "key15": "4YnarYjYR6xGewqAeGczb9NPERTEAH2vo8pe8MfVNvjhG6Gkj4UpipNB6h88RtR3QhQqpJjL5AmNeemmUmJjoVrq",
  "key16": "3roT8iNywLoaykZiTWM3TA8RYP1ByoyvAtYqNLPmNkNYPuvNjJVpMW4Vi7mBBTzJDAgvfTQJzSNj6oyDE2L8FYYz",
  "key17": "dyNA48TnmVP13tpZWggRwqjdbsMKTUPU3NEXvzoh5kdrL4k6VZ5EHyhbYc4kfqhZ5NUFWYMiJ49TkTRfWDRJ7hR",
  "key18": "LmYNjgeVEp6noyH34Pufg53zfbUhLmZ9wER4GK7WXWxsoHCiDLZViQa29N8Js3NW42LfHpCiRw2zNaxKijrd9F5",
  "key19": "3MoaK4mTr39FETsERBCDfnDnbhG6X74tTGZqNjP4YwWVzf5yvowobwsb7n88dpCpu1fkLmeRGWwBTKYKvNK24tFY",
  "key20": "3MyLpyCttxf8ajFVMBkwFvuqwJxoWiURTcUMEmr6dENQ9MkCLKZxUqnz4T4biW31bq6pGEG5wgx7YAVK7omYCbhb",
  "key21": "4hYDKuoXCbVgwK4j3jmgQVogb3G3dSrgb2unu1Dg1MiGyLXGtqF24MCuHBfyx16BjPC9ytRmuuZQjU8YBQx35F8E",
  "key22": "5AUsv2zG9Tir2D5raJLRwhzSGZeasdKQ7dcXxakdmHiJ42gkGTRAtvQy1FHruyVGuKvScFR7G7yRtHQwFafMJkgH",
  "key23": "aixSW1hbL5sqZjG6WQSX6MP3Y7a4xGB9K1AvC6pn1meVwHeMMfeunf2y2FV4AL1iwjBbPD79dqPYbT3zrsYrAVo",
  "key24": "2CEc8BYjRqvd9MQeEXifMm2pkWh1Qm3nBgFCoMVFMYADJPmhCpPyqcCu8QdWhSmWmS58T4V3ssNKtQoquDDhnCta",
  "key25": "2q3amVsrKbjtZKEeiSfoQVwFCDMmLUukQqWukGdYcaUXaKkLJQuk1QZ1CXmA973PUPbnnFctw1BqAcxcrQqHU2TK",
  "key26": "3rqQ63dETT6YzSCX2NvvbFjYCgRQUfzPR48KZiGsLowBTc3DoWEGNkgu3UtBks8rcvELr9Cr8KEaUSwmYbia4o6T"
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
