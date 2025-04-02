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
    "2eNzC2b7MrJiJwrUKAXnzXJs87TFf73oUvntiBmLx9W4mq28bPoat8A3oqLfPZTD2o4FvumKqdY1BXNDUqZjK53f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27abfnAPHzifjMtWWBuYiDxLvBYuZjG9UxBtgjYxriX4rDLh9h2bPNFgAj1HpvkwEBzQ6Fb2yurryF3X8gboxc2Y",
  "key1": "GmVVQUZpRdttJ3HaM8HUz5c8D5W82tAYqyFTZxzPFa1no5y3ngT31dtVR1tt7r9xwnQkjE5Z4gDXgZ62kXCDzpQ",
  "key2": "4mhqABAfwWSVorScxshyCPFA4KK8joeHeDnAcFHenCN7vj7dqphTqkwby1UzZRZWGdkzxd2pjME3JNgDdnXx5KCN",
  "key3": "5rUASedTCAoHGmeBCYNAepsnJ29zV8XYCs9kHpnNjZ8raoMihN5KaC8jD5RiKGzX1S9qoin3wRQcqi5PtrZ5am6b",
  "key4": "22gE2fk4Z9WSJEmRqKYXvdYFpPaimJEVyoL1xwT1F7jN6vYvgbLg5wxWDJ5jNaKfN3TuikpnTaKH1psd3BSNpUgn",
  "key5": "22uVUh8m2uaqmdn5AZxtuqT5LCNCWmyPJmuf9BuDpVYfsGPbW2m9jGGSZgx7D2hKKQ92ML3fBKYQ9dVk8tMmmSr8",
  "key6": "TbxdGbrb6SU5pnp9MzKfPhEZJ9Uw6f596NjQVsf54UrrdL89gcZGbuQ4GdiCmhexUwymPvCvqj5B35R5nYh639H",
  "key7": "4GLz9uHDu2ovSaDuKka4Smn6LqUU8F6g5Lv5hedwwekYXbDu5M1SBvXAsK5kxGny9ousHG2KPFVdiB6Xs6hSjdwd",
  "key8": "sD81KvjF9BEoEtUD9v7eBpwgUW4aLmN27tmWchGY3qQBKGuAE73bgeRsHHF1HG4FeLWJw6G4YmSYFMpX57eTyu4",
  "key9": "4kffzsD8d1dC6vhWg6GGPitkmP8NTX3d7BUL7kTNMVw7pXh2VTM25GNXTUZUuyeH6ZXczSL3SyxNeZR5pTmL66Lv",
  "key10": "3ooXun1BRRsKR2rxST7VHzyzPK2H1Gyx3BmdP7zBrfqMBKLqSPfMrZcZ3jSQDzG7jLpNUS38TmqiQVggJsH3jgVR",
  "key11": "bQvGsJPekggF4WkBG6ztoemZJDZtcvpTziQaHU9vxktRy2c9UuFFdHxsBTUVEVoGCmWPNHLqZnLHF89ZJphgiC4",
  "key12": "3cFLEAUMPFdthW9EeVg8uLrFAvmxQsRbecceHbwwTDNnakejc9wDTQ6YXZ5i4JSvMMdRZ5haexiUXrUEhNCo9rEb",
  "key13": "2KVJ5NK8LixNKGau2YFt6Rmg9rb61dKoZBzhYUzMnudzQLkVEh6rNvFyRKQMFRpLrCdpKsrVYuirK3zUFqUdczoQ",
  "key14": "3tHZ8uLCbc8DE4PFe683GpVk6vBm3QYSY7Pv7qCi61FLzcCi9WseudfE6dXFsXjjBCs9Y8rWUzr7njRs3Ue4gyWC",
  "key15": "3dFkKMmwbpk32ph9JNVBzhp9iP99gktzdZ8fWLjsgWvpb4YV5GtWqPzK9PDTzAQz2y8jLBNLbg827AY1rmAxHd6b",
  "key16": "4GAztinziNnMZJDTDvAeGhQNpxbRG7sfNaeh7tYzpsopw2qTjSxwctxo3kej3Lxze7VBMfiKrfq4pHHmjASX9ZHX",
  "key17": "3qd86tvSjvZAmitMJRyx6dKheNnzJ1hY6oM2hce74J8xCFZxXEXn7r9T4Y7gFgLpsJHWoE3w4Hm4MGKyqFfiPKzo",
  "key18": "Su3nLrvhUsCJpVsJG1rDhksWGvA8cREkHnwXgTsHJE9taNropB3ui1RsXD4t68wAXotD4s94pZ9EZjPCg5D1XGX",
  "key19": "NMK9ky4ngBENhD7BSRt7UEcPf3SF3TNdAAEMfjUTEaZiszUQvCVcG3SsQcunkdjaUvjsXfQjp9DwLNRj4j17Por",
  "key20": "3vYMTEasPr1Ai6FdGy4tVyh7gaGpEvuiWVParDjCKqRpEvyZ1WxRvZdegWKSHr3zXjjawvB4C5Y68qvNYon5TaLX",
  "key21": "61FiJWPaB2MT6MeuASsEo8hWQFFr4kWehjB53puiLtGeN2uWDWhRvNnkqfCJ883jSyeHbq2etXxsaetWdxswRXNA",
  "key22": "29qLkNQaXhqWjbmKgAmfFTD8j1tPasEzbvfrNNjb99aK5gPa6aZrmgL6Ec3nrd22q6zjxWNJZDpCQWM6P8ZDRuZc",
  "key23": "5xrJTWYQNUfwbwBXQgiDcDCiti7d4MuKsNQWKiawY1iZid5tUp6MVZfZMveyCYSGqzP7RWaQ7f3eaQfJR7G6LKf9",
  "key24": "ghgcmf7htexjgX7563hnpesqNs1T9tgqhHXqFdLRqJUCKP8wQwxueZk4w9U12JhYRATyQRv7LXURDFXLbr7W1p1",
  "key25": "4b4KQqikVFz38NJrSkBavL1FDeD7qPuuWLc7dbQ174jaceeEXpqXNhXzLHg66A2tV13JiNawoTKoKarL8BG6cQuz",
  "key26": "67MB8wCmy6otaJcy6eL6KAv9aAm3CnvnUiS8NTH298DDeTdZR88VTNpVCfcxThKDSGPW4vvQoqu1xGxX6Js74MQo",
  "key27": "4wDX4Po1zczmjzkVva6V1QArreuHryiXRKsuahc3zm9hZxNdaNBfTZhdgmwj8rWa3ZR7wD92HsvYZm96yD1w8UEX",
  "key28": "4RYcGNQtdtmRiE5U6yYjtiYca13NT76ENi4Cv5aahafbnDgDwjzxW8ya7ip8jvGWfnsgtVseMDRDLtzMizKLw9cW",
  "key29": "3uRXz9wd2eJw4HHhD8YVvmxkYaFEHfje1X7D8uvdKExWnF1JfFfM1ESSXyW55otjFKyQkcnMkZqohaajtdjTVBg",
  "key30": "63xzud2vqa5yfGZmMd8TAn5uyNorSmBZrVzsK4eNvXD6EB5YDiNr3ut7v8mHwyKETpKmJNeUpTNA9GZGde2pnPNK",
  "key31": "4EfjFyicu71RfpvDbmQL6axtJ4bYrRbntD6KBEG7wtMNs1iNxy3WzXg3sjCt3fKf8bxjmwU2stzku2c8dwMKi1Nb",
  "key32": "2cPzNmZ8jAUPrhDMJNbLE6nxeL28uKPE8fFZvPqpADRsrmL4Zd99p68UzQbTVM5hqGSwYgibgtoYvWbTdSoDfWpp",
  "key33": "qYgtJoRkUNGxqScuyvcRP5K6zGcc57dXc8g1McJfiixJW6rRAUXwbr9nBaiDHYxf3QUr53MaHLHqrEYth6U1iNJ",
  "key34": "CDdvhKZ2ZZoRqcpqZFxc2gg1eP9qKRhLuSumVBwt5AHL2UwLRCUZDWAnQnMGjNd27rHPBqyxHsMg64TKWBCP3ow",
  "key35": "5Y3CFhHoRE11ZBDwuCyWTuGDEc4fLBiJf7kfC9HzNjoyLFfAwjknL9QvShEHfdFJ2cy2fk2kUey7dzHvSoP14r8y",
  "key36": "2yVVqdom6WJ4bZwuJxNNoZNEguRQpGr4U1ksADtDZLbngms22KRj1rPp8wwLt8YNT5ZzUtf53i68HS4v3Ka5tQRo",
  "key37": "6MM3peyTdVRqHHCupC7QQ3skoggVVU3gcEEH4moK8ZbVp2nzczk4Xa4HtoDv8mFvC5GsiM5aSQnbsFtTgNnx5FW",
  "key38": "3fM9ThGmpruoGUUKPMe8LqQpSmuGD6moAY7JFQykrDksrdayh85UTfPRe2QLAJNRTueQDvA11GAaL5oyhAsvLMFA",
  "key39": "ptbJqeoDduyeUare7d27Z2PCqG2ht3BaL14CNn6t2FBjtaty6xYvQqMJjjYtvLpSs4bpKZUoFaPcY9MDc91puiU",
  "key40": "2yNRxhKDoEKADL7Yex8ou2GVR9bn3BPzD62CbhNxhgsKGMHb53WgByvkUN6ANPeVZTDf39Q84jAVHoXHmbd2w9mL",
  "key41": "3cLY4dfsUnPaiWamghuCw2z5zDBKkrdNyTsCg6n1et86jkVXMmDktKdDAUUsDC6xEP8BaD4S9gLhCWh372AdrGNB",
  "key42": "4fmkUnko1bzzNbn8q3XWVGLj93T2q44WXcp5MzHQA8yFyzvEVTb22eposGKfbJooyYAN8WbvL6yjH49qW4urV1eA",
  "key43": "3Q6Fq1KPpqZdiVAXHjFUhRJnAzFLjZ71ttJqUbjMRXhDUAKN1aCUPUhg56Rvfbobzr5ZRP2QGfzPQr9njMfPMqkZ",
  "key44": "4W2uwLDJ5ihb1H7nRH1Dn1LaWfXCsNWocAzs3UkYYDFxmqDmnbhhAZfhKGaGcFCEHnqm7AKhTr21KdDBtU2S3UgX"
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
