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
    "Q9nXhREPGbi9B4LDE8red6TWtKZxqabsgjbeF3BJpEcK3QM83HkopGJL8pQiF6D4tmMown53iH8FYW1CF3asU9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MNkVczTcD3R9i9u1EL77xn3dC2DYvpjQD9qwUxnTZpqsfumhvEY5YvgeNFPdZnLL3BeKSxLPjbtZkdti1JKGdBY",
  "key1": "4SGXho2nFidJW4reMctGrUxQycQVJzbECkyYQ8PkyNZuw1REEUwGMQPpa94DsedvX3tu9Mv195HxnjWw8xKbrEp",
  "key2": "5RjBEELBhoMykWVs5GdYesB5CS1d3SQfW5aP95nLbxFNJEZ2Q2YvzSGTr9b8Qnk1b8zNAKVxFYKKWkwVEgFm8kDU",
  "key3": "GsUEcZ2AWBJf84BxsaPuvBDSfMqMHAJD3unMnKxXY1LBK5ZCPi9uRqYHgfg171TmKQU7zWX8WtRS7BMWErVcxb8",
  "key4": "5j7dJjwgoBf69nKYy4gLkuUXYNo5xn8z6Y6x2Le2Cq933sr6JgZzpLYtBUqn8GRQq8UKbKTBedsDqLA967gqbatk",
  "key5": "28rfCm6NE18sg7zxDSbKMEPqZqUuqSfAod6MJzYpnWj6Dpqu23QV5zR5TTAExxanaWspNtKuw1bQ3YXuK1H5w4s9",
  "key6": "5r1T55cuaUmajsrdGbCCck58KNtgf5yPTd6bHiPV7JE4PWe6MqGQzLgsp568wdbxm3Qd5U3mmibmqPhwVzBq5kwA",
  "key7": "3jdvT4yVLUs9J3H6RCd8ZH9uPHkRZVmjpsgQpfKvfmPp4E9GkqyVDhZGtdRVW9y5aX2iwQiQiayjZPGrhCQSejZM",
  "key8": "37mjnnkA6Lc7rVzTMJrCarqoo47sYXptDNqNqpNXPMeBPS1WmJTZK34L32nikUoXsDeVPGeJT9obUo6XF5XaTsf1",
  "key9": "DR3a9WsXtoJQaJwuWJDX1P5jouEhymc21eAXX5sP38KriD3STG8gWmMzJHU9MJTSUrcw2JLY5RH5raTVDDeo6gF",
  "key10": "JHyNTpVsJHNDR4bbVZbVHtVuV9xbSehmqJWMysqApuJJntdLBTxZ11MsQGJpD2QSugJpVnHygT53UaVmSJzRTyi",
  "key11": "2pSM3JQVmjQTit4vuPxKCJKWMrmUwqcsdYJ8Dv1EAH8ZJE6CDGJKMPXZSDoP7Uapgdn4XAVwa9BsD6HowWbAdGHk",
  "key12": "378VxMCDTFvFBSTH8nTjeTS6puVKW56mbzN9BYGtYEES3TytuNmGiwrYB2d69b4gWFVaHrmMUZ34bYQ4Cxbjwpda",
  "key13": "3PzjaKXts6N8ASF6zu3zWvaawWkCMaxZJJcPy4Arqq9UnJAsv6RgQ7VPAa8pTLBoA17wDtvuUH1mhFD7iWUzK2si",
  "key14": "b7YV2ai1MC3WLHVM5rJfnQCH3q6aSdgDpvAj5Ht5yWjE2MBJVTc71rY3jrLvhGqy6PvavUmu6ot5L73VeHXCNkL",
  "key15": "5ogWBCsaFPypF8YAHc55RhJnxXRFrwofXq1VxC73fgfvCtyVb3xs2SicWzvuiLnNjykTDoSfNQkJaknJdUfnfwHw",
  "key16": "c7JV2xok2UzUQPn6UoWsCLMwPtucXNQLojSx5jLhc1WiHHoPtuM1AaAWvo11z6PuYUanBv6ncjGotKiARbuq8pw",
  "key17": "FGdf1sx8ZNZXQuWepGbVz3mCJw1YgAPmQhXM5hFdjD1oja2M1naiHufyoBVwDdtan3rL78brPTTvXQUKjb3Tooh",
  "key18": "5UhnRmeWMHWj8EkhUySdaqNCXsXS7bicoWs9LdtAhUQM8Unmeee1L5tNPmKSN1qeGnirJrvXq1TpGrGTM6h3Md7w",
  "key19": "2qT6qNhxT6rxhhfSm845duu6gDsEMLxDEwbArNZ3cMu1MrvrsRyLJo77razuZX3LiAtbEdgcEgoWoiwHadgMM9Gf",
  "key20": "2ZKpKR1JPuddeMVV8S2nESpHTe9EET55LeE3hzocsamykGnJjYZGBYBNk1FfTF2voVWSUqmLZM7nNCB8kaVDJNBe",
  "key21": "4wEGLjyCu5Sw1oDJJiQxmWWNUpBUKojUL5kXfzc8MeudSH4NYJ8CMpzoFouLbUw1studsojFyCM2pSjjmhCzbw77",
  "key22": "4FGHgMk1n23t4esoeoWSX53LXkp22iSdQgkM2g6KY7dm9zUjpu9utEouL4yGGABJggqwtn3o5XfXpLReFqsNjYTZ",
  "key23": "66ACCWfQCQVtJ3PA31j3T73pcVMhuGA5VxQhjcWwku4e7RLYPEwuP3KJLD9QnKgp2mvnqpg3hWPRyMtdVsNDLzaj",
  "key24": "Eg92N7yFfwQommgVNqt4UVe8dJwkVaCxVSxvbobmvzPQujTBotE8HFXywNGwPx3dgSW6auJ5WHFMBAKRAJUn9wt",
  "key25": "3LDzJvhsuE9e3Mt12tNFFaNdXCoUArzihFkHg8YHi3eDntPKT6jNDxtZADgshWnw7ZyQU3rHzbuMhToBrzgtgAFd",
  "key26": "4H5yCcBTfTd165FCYZtpV7FC7191ikoMuyXpxxZLnBtpkegBNr21G8yb3nPNJ69eDB2z44ohzY5vVpgf8bMseedg",
  "key27": "4gCZuqPjyyapm9TZVM7iyg3aSbvERs6TNBPrpsC3hJtA2AGQLAaZyETH4HPAAh2NFMiTjzJzCB2ZYRsK3JmHaK8Z",
  "key28": "sMJSQqtwKBsTGJDYGjU6ap8eRcakune3nh6UgpQ7tdW1h2yHZ5DZVgRfTXAD7XGUw5FAFxDAmgRM2DA6tZEYCbo",
  "key29": "3gxgKFgrwtepXyrdvxDo2W3FyxcyvSNF8feMSQManAwSpAQcmN9q3hYyA5itVUs51JUqzPSohEU8RXn5CKxCR3Gm",
  "key30": "5xLXLwiwTxGQPHVwbykoWE5TgootCPXJu36698crcreEZ5uS1RSLYuhVFuGnS2XY9WYyQqR3M5e9peS1djGCaqFt",
  "key31": "3c6mKiVrqjSvZJjkcdnwetsKicBEJLaPjUedzyzkyBUs1RD7nocmBQkpEgyxiyjZ4fZBrcZAvg9xzUM74fi38pX1",
  "key32": "4ySzq1aJCSwoWwprh88bJJNfQw1pc3wZghRSXUcKr1ycD5VQNCCY15nDhbSngBMB2TuLqYXxkty6thWo9ZuHvgje"
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
