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
    "2juPGp1uwA6hD9RhiuV8eSftrXqJqBkiwrg998YLYDvtSzHUfwQEpLPpmUEoEDPQatxWp3sfQWCYq7ZyVYk8eCa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sn5MksK7ALKUNbQeLZ87kpRUVwJXvFqzj69M68pmnozrcpVbKYceX9KTvAfjbGBZrptNU62GVnZkUAQJ4LCcHEp",
  "key1": "5mZkX4nBaiNbaCc611wB9XNiwiYLx97V6VL3h3kRkMDYeNCE7pkQoiz6HYbheFQwcmZN3N5BEsYWrUUEL3UPYwNZ",
  "key2": "5Dmx6mqk4K8N7FzQTe6iMPNgCWJrg8CviWbSyZTSv426JZngtGQvNoXiXQnsU1mihAHrcaa7c6NHWsNRH4To42Zg",
  "key3": "2XbEnPUhepGnqwy6oiaJuJGBZaFjtrVUMoU87zv8L4nnEboQYvnPcsqLsYQ8jjs15fmmaDhDvwTu52cwUs1n833F",
  "key4": "5XDCZ7F9w1fTqqBYGE9NBu42d915pdRiMwuiHZoXEyCef51UXL7KF5H9bSp5H2aFDBvkBrKR7U73LVs9zazUtwz7",
  "key5": "SFZwE9RV6yzTREkKnAEADQ3zwN86ihNj54hPDmJ9FeNFA4wUH1bbReh7rWvYGKBGL23zE7LXmEnnYjm4dcV472s",
  "key6": "vJgHVCwiBqaLdREHGYxCU49xNG7559FMzhDY6gYqAwYCvhbXD4tk6DgWkSqXZ1Zap7ktr6hKrr37KPZfEiYeLS9",
  "key7": "tv2PSFpMP9Vu8BaJF69CTaC5n79v4VLEjTQNNgPtbq1o7yk8ZnokNc9gFVoXC3zaM1P3MJduem9T7q3ggTCserG",
  "key8": "4hKfK6C4XXP3UmKkV5XxGHjfb5VyXwmdxgPqkroZDLuCFmG2AD7mzhoDJTJNyH9hr1s6YE22eBTC9Fkcmn5Ci2LB",
  "key9": "2mctRatVQ1Cprqd9ZS5DPmkehRWcPz7R6MQu7ramyHUUZR42nufKnRgkURDuaVdozrstrAoLJ9bMcYEaM8whQQca",
  "key10": "5y2CFwYqbVGYSjcXEhuNDK7xU7pC7kf64hyX79UnsxD9AU6vejfg97NNYxXrr1LNZimw8DREFxEQ2yJnjCYEdrV4",
  "key11": "4xPWjJJ8M4zaSH7WeqH76Dj2xms3FsmbZdtVPQ1LWxtd4M8FEYaYhX5o2UKWBGNRtNqWtkgM5HSLreT2VrtgNKL1",
  "key12": "3xrGiKiVzEJ3c7RQyi8zCS4LykWFjLnhXXSvrHnP2vJHU6B7Qtkp8WRV8zoUTT8gwf9ro48DmuxKEBYCYzmL7C6R",
  "key13": "5AYmPu4VKLtxpSYZL4rCW3oHFNB8wNAHfRrHCsdbTt5JtKvzv53Y6x4N6yTwq9czGHSDKMCDSEz12bFaop8TFHKm",
  "key14": "9hAq38XfrNX2kcXJRDhv27Xk6wuAonETHvVxvNi1YgSU15uq8vSxNqgwX9etxq5ruP2AYA8WdqaAPXJ2zLb7wkS",
  "key15": "5HCA5steWwNpwFRMEW56c6aYwg5Q2PwBgxt6gBkdWZcS9THfKXqnasJxzEhjuFPnsZchorqmgjaCAK55SJZ7KLnk",
  "key16": "pKNw7TVMo9PfGLx2k5MmAkGJtJdDZkMvGVoB2Fwrbtikq891C2hcugi9d9qRo5b4cRrov2GkePesbz4M8wsiqEN",
  "key17": "3bQnk7qCWejnZuPFt6r1pRmF2FGPvyXjZwTunoGdA2Nku5wPPJbqhgvhiSdpadjLc4bTQ4VMuZXH7DonwssBJcj5",
  "key18": "3uhxcgSN66saGxjsT8ipNvxB2kiWig4bM4GsHfVF3ikr4nq1gcNFmPJJNeq8CBLmtQAQ3ET7htMytSR196yQou3H",
  "key19": "3yoMvMiuV15kGym88MBsypYgF7egdopBRmaeP3oaWpdieQ947MWguE8gTBkzakLuw9VhYR2q9GkuSg8Z2qDfyPwa",
  "key20": "2bnGvz6AUoJu9FFo2ugsF5mLbBairPAmEAi2daF7vsBbjtExhyKCbKpzqEnKfX7STtsBd74Vpakovwr92x5TpgcN",
  "key21": "3J8MJBYg3c4t5r72kGpG55zg6V3d9FAcRegcZ2QuNb4cpRmnXRXD5NWvF2eFCvcQVUXh7hVwH8uUxuR4CyYtwzYk",
  "key22": "5dz6x4SZG83V84jLtfhkJgFVbHW2fwPnrkUg77MYqaDPooBmub8PqYgtiRtskEx8NBbFV84dZf7phkP5uLuz3VXn",
  "key23": "2PB7o7iBGxufr9YtsTHfogVRfdJ5Fw39WHqQHySdESUQggJ9rLTJMQ92QqDiQFJNk1EHEMXfcFNmXuFyKuNzTNEX",
  "key24": "KWMLs5jTVE9bMFFNhjnZuV818roSiSjP4jrDWFM8HWSECExhadPL25LE3iPtVLmb2RqDHHVH3ri569PHmPRXTCJ",
  "key25": "2XnxS97UakHn9Wio4mph3oJR9WL27YzSAEE4aygAzBzpppiteQM5F9ALAXVyDNvdkQGGNpu9aqzFnh4CjYXraykP"
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
