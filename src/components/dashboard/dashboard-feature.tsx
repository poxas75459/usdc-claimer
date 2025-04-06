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
    "2vB1sChYoVq8oUmGArXNHL8U39zS8SobhLSZMh16GzStm3iCys4GFFTxHZrhkFETg5vtaqxs6xtr1Ys9mVdFjo1a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4siLjxCHSqdCwZijgtLyizjnhj4TRSZVPDEU4MtHrG4QGnmixk4FZuXJE4YbFZHV8sc229hPMuUWHvMkbR8VJ7Wk",
  "key1": "3ocmFquigvYEuwzmuKpAcQtMs2xLZBb6Lu7Z25KiQcn1d1tgYe1MnLS9v4ChRVJNejzzPj1WXLWf7MwAB9cVWGzm",
  "key2": "3L3qypZ21cC2NsqhFzf6xPAku7VK6SDPe7urwLb7JH9UZCTfTV9vT6cbzDtjvWbKmJScxgYyaniLm5j4JZ7mkU2n",
  "key3": "4redAee9HLygBd6RSzUCASy3gyDYd8RE1Wn15EBoANf1v9WxN8Wx4aEhzyZNVXNZmmxhEqAZAA1KaSoD5mF2cpKR",
  "key4": "4TnszbRqV3rbxeEM3mfGhdnsHRCaSsTCC5F89oMEfyoQPQJ8NzZTUdXxeFaDvwyJZDutVhsknhZFuiy6MvdNW57",
  "key5": "65inpRH41BfVqUan6hW9hdR3ffyRg89rnYrvTPYzcV9jMQYuJhsUVLyehCSPKHgvYjW8gESmB7RFYHTdComaCZSY",
  "key6": "2AwNqnz6ifKRooQmPZnmNKzZ8NnC3GtRokb6XADLAiNEncNECJZt6eAP5JjCfwy6Y2Zm8YGmM8FXGkSCSAz64sY4",
  "key7": "2Xd8njbs1CX1dvCBzs46PE3515CRJhvdqGBjM2EBswRQVQ2m8kAW9DeaU6KCMtTPdvLv2ujL1RP2KmUVnEQ5wEYr",
  "key8": "NCjLfHMyPrnAm7jhE7TVoed7wyzKTbjxNWs6tNNPA4qE17K5TTR18pbrpGf9BxXTriyDfyceLQuZ2jvXnYF7iBF",
  "key9": "5fcPsSg7UxpnjLoomEdiWJnZD8rjpzbytkkZGF64AsaXzdrAE2X5TtcHH6UZPdqMvM9SK1N7KNEDXPFUteaMwJ2L",
  "key10": "3pmshJH4fRcWkzSn6FxBhp7nPkxSZUWdPmwT7wLc2ARrHBq64LivEt89RCKTB4c5VVx7HA5gycRBu8jDvqFaGnEH",
  "key11": "3NuGENv715FqKyafyJkeErWxNhVLEok14ps2iHPP1dWxdi4K1ZCKkUP9rmMDxprxw9vntK4SngCHZrX61dnKkhfK",
  "key12": "2xbtjtKy5J8Ur3Jmhrb5DmTP4vASjybeac9qFuDLFTYD8x4ZjL9pGUNQG3jgs6xNBdmv8jWoDkpPqmnPiSM4DoaD",
  "key13": "5Q3yv4VyLKMTCPZZUSv3fbsHXRxksCotFfgAgEog7m7z9APYsJiEmEwsWff4uHsCd9Y8dUMVbUAvitsFoTz5NbqM",
  "key14": "5TuJvrHHseeKmRL6xE3xHVM5k8T2ipC8e1xBAeCvrPykht7BL5LSZasLKr8RwWeskYYHVMM69JwP5HNMtnQD6zNn",
  "key15": "4mCWCJ8LcdUDXXb7YLgtTMFPCBoNPfzrsCtZj6Ff91mHeP4gJbzSfMJ7YgRAiBMcRgVdhXbMwaAkMDNwGMjQeDUa",
  "key16": "5nD5sfPRxuN652zHzGgGnE6MXeer7ENeFeDp7DdUfAD8YkZk6G4fwnVq4ckin45ZyP1Zx3Y1SnSfY9TkKFMpEb1L",
  "key17": "2KFUni3JkPfWjjicxuL8tMQTLEBJLxpK1g8UWeZv2m4ANgNCKQpZMA8hcwAzhUscfm9q6v5CKaHHJFHAi2MNHbsJ",
  "key18": "2hAVHeMBnDsbZfgS9ouzafynoeCaMxCFoE3VQUKgqgnqQonYn6Nu49RHpTVHyWQySkdMwjeAqo2grLpp4r91hFUY",
  "key19": "BY396GifpJ87mKah19mi5gBUoa5eGhFXroJo25eG9CGVXbf7yNWPsbW2UYnwTTWMkcU7UkevwQx7yfsQ79eGEd1",
  "key20": "BEwUNEZtdKUuCxcUXpPwHhJd4LmFg3cyy656zzS53cGp1dFr5PT1tPpB6hDn9hHkmZndULv4VwqW4y1tMiuai2X",
  "key21": "4qe6ZN2DovkuLBb9k2D4Mqmo22VMjafJVbQyWwPMXmqhhLpGcNSJ8HDahSKAGA8hxmBEguKgHUxwMXekWvxJJPj2",
  "key22": "4Ad7U3SejPr1mxbATiEwgw1XPiAGY2RcW2PakdtLoec6e7mwJzXXLsE31gFpsKqgJq4MvdyEHKnGaTYeRoUmwkYa",
  "key23": "2oURkfDLktnXd56MZefpYRZTsEmaXiDBpck2BN5FqsGtXccfeyGrthUBsaxHdnbopyJ3WnjGivTm5ZbQXhTUDDEe",
  "key24": "3NHUx1SYdKDdYota35R4by32SisPAyfR6eHsU9RRrnZ2X5tjeRhwu2CMqiu5xYXyNAyFLdNizoKbpEgsu3VauyKx",
  "key25": "4MJUJ8LGMLm7rvMwgixqu2oiGzKBnWLBSnrYdh9Xo2EzQfNo75aicBd6CbLMFrDyn8x7ZEoZP81vFoxWV3z969az",
  "key26": "4L5SRBeanXcqY1BvncNphB9BWwmdd8xsjfT4Qxs9ME4A6YLehh4FUxaRgmnUfQs94K6hgtSMsDws334znYhu3TTY",
  "key27": "3yobn9FQDTMJh8kWKHU7fkC6UMPe9NyqisLRa6oHvuo1gqRr4VzhjmBxUPXPhJuURVWDJXDyHjUoyV2bA3TzHzpo",
  "key28": "3Uo9KbPHr9Y26V3GwpzGurJDeMtdVtZBP16dbR3GsKMQbFmGtLCirrLLPc3NeqVALyrH4rWXjiGgTSdE5wEfTMkV",
  "key29": "5fmebH3GBmjGy2XLWsuq87jw7bGEXuLcs972oxmPW7M6fk4yfUER2mRki9PAvd8Tax8FyCFUvK3H8S5nhVzf9c1i",
  "key30": "3PaSeimwMdY1a6aTXZ4hRUbw7HboLHZ4tqadXf24pCZkTNKXS8XWNi5vVLY1vXeSktE7AH67KcrpHbuy5B1vhyaL",
  "key31": "pHcc5JNcLWxxqDrVhEPFivVno7aCcdWuW1n4vGGMym9uRuGCFYDb9wkbbD2rM4J5AMzZV3gzLyy9bY2Mjkf4zzm",
  "key32": "37ZcNCfRVnNPAzxQAT5bc7AUA1xjd2ERDhzayEaoSmjuuTbca9n6eFRtpFw5erin3yWF5JRQJ1ciANhRT3FvusjE",
  "key33": "36KQKj2vzrT9Dv5kKqxJZahTJWAYZJicSMxnj4UA4TzwNt3hWEZDdffS7eQNcCeZxHyMaf8qrdEzRH7E5tPFpW38",
  "key34": "5LsajW8TDkmKxRyPYxDoubPcqC3o7cTMzhJpZNPdTuzXWiXc8uDvJC6q3SHFFfiSv6dJ49QTao92NKU8SkzyFz6R",
  "key35": "3mRTPjENvehVVQd68vYypT6cpTn3UMudBoHReX83sUwRASJYLTLSG5DjAzuXkEQ5yXTb6N8pjgEMiUJMzcckdqqq",
  "key36": "3VGZnFTqWMnACGmDvYkEFCv8BHTdRjpkmBDif5oe5q9Xju8GxsFyNrMbdxfS9utjMc5QLraTxdTGiZC2EwpT5ZfV",
  "key37": "5bYf63TkgoaF5Rg2R2AZVZrCxEK47vTF1uTcgX1AVBrj2rZV4aM7pkiEPQ7NjxjVUw7Ay559niqcjzpMUfigmx81",
  "key38": "5j9zrkqUzoNDkwKxMZXgXVNQF27LVjCPC828Ak36qPjFwxfc3z7gKujXwDw3cHzM1uqg79Ha9MT6X6Y8XQkWqyAp",
  "key39": "6254paU2juknfqzPkPFGtuDBzHGzRmqs4MaHtE9vjvGjRcgMuwamTdpojQRsuSdpCXc1sAremTixYK1U8EmQGVKA",
  "key40": "3WqK17xN5ZRcXKUDY883T1vgPXyWXhikJoTsg9skyG3yDkt3nA8SDFCpXoPqnMCoBxsveVjU8JE1VzXPygXBwret",
  "key41": "3saZ2LRKGEBbCMBovasre1bfCnoi5fMFG6bA4WJEmaxiJGhZUbjDFFSef8XNZS3wVpUypQZTpzPzYkM6ANDPTu76",
  "key42": "8g5z9qVUywK7YHWs9rjTPZ5qfpbNBcq1PAPGzeWPctj4xi63goJbjYKP53k9PfW1Wh5s4it5xAkmrf6YhKX1mGN",
  "key43": "5s42L9GuKh1A7BTRfViHnm3mRHJnkoksTxsWGEr284wA9Q6BxacFikdqXw3Yx2uTqDTGA4hj1pCQwCzHz5U4go5B",
  "key44": "5pbvZq9hdZX6pcYQavg4vczVCAbxcBakT9rT34FUAxsQgWUfenruQnvPsNQtL67Q8q46QKLREFQZnTpibMyVRQG8",
  "key45": "5xdFsEkjQwQJFjPTwgmdktKdgacVhB6qqSQCxppBb5fSPb2a7c3nvCjrjrPmHGju1KVHt2abQ94mwTkb34kVUXia",
  "key46": "gg4hJun4Bh76Rut5WeGdkJdP48TxQT5BtL2NuZxRDw7BrGD1zgkFwQEnn29s31Zqjp6qDd3TjbuRP3kieYDLKZe",
  "key47": "9SMRwsBCfit5svdPoXjue7XgJ4Fgutye5w5Q2pSp26bCKCmPbRFbLemayG693QwsAFgsB574bxMX22cyMvELDiG"
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
