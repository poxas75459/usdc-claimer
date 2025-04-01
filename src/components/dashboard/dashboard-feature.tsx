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
    "aV5naWKDwijZnE47oQGK7eJhyXquVSSff71CST67dgenhgS8de3dXgvHn1oVeR4zYtMEsB52EGBYsLbiYcf5HxK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62aweKLWc79c31sADeQ3yZZzLbmsjm32HTgxZTz7k9T7td6h4JRkbSLLj8TjakcjCo9Zih2EaxftEsGg2gYKTYRH",
  "key1": "fopQvJSWsKSLmvKpS8anKFr4KibGgbpaynFSUg2sW6mqazRseU7p6yzk6wKvaNXTHAZ5qRtjBmKiLM9NknQYBLX",
  "key2": "3JAWNJZVc1TBMr1dWKiEyyFwg7UzAD7mNWfePM3kHrcRDhQCEAFBxWRZmMJLMBocaSpMsqjwqpt6VoeYL2AM3RQ6",
  "key3": "5A2S5TKYkG4uHFBN3EhxgA4QoDprxMPXvt6tBmUBXTNdGuSG4mrLupT61CyC2sp97YdUcpYnpGHjuiLncbuFYv81",
  "key4": "2zq2R9jHeEyGSYbXQF8uqeGudufPQSuXZpnDLLv14svseTXCkpzKjoEwQnSKEuWGh2EuevzWYeZGyeFeK6ECNqFR",
  "key5": "MhSyLgzYvjdNHsfWXAxwZno5YYnAo4bSSkJ7BixHEnD1CEe3V4PxUHv2RW36UpTpueELq95aotnSi6ktJ3myZ2J",
  "key6": "PRujs5BqjQqr8FoTDx4F8vEsYRDgdSZyvwcHDV2WhBNxhNsHRcVj8nEXpBZ2wXAwdepVipDKk3HzQpor2mcQ1yP",
  "key7": "4zQbFTJfrkCn1VNKrBtZpCgzFwVmpGJEkU4irCRLYFN8aQh4J9cNJYp3beRCQwggz1bqot52NG8v1TpAUf85tN3g",
  "key8": "2bm5M6FiB6sgvYEjwYFCpD351pXNp87izKDBLZNuK3bisEQVA8BqJPi9d9Rv4kQtVwKqHpXVVd5fS3UCJeN4swv",
  "key9": "2MnbWM7LmaN2njg2Hq1iaZUzxgCVM3Emn4GrqivN3HX4hmyGcbMmUZYxrsvH4PJcBxfyMLkSiLBs9gfLXf8MbUpm",
  "key10": "ZmCzgL1KddwmAkt7VaxZ3Zx4Vge5EajQL4JyT5Sq3NBccAWysL8vafCW2pormQ9dUskhG7Eg76b2Z7535tA2oB5",
  "key11": "AYp76MTAQoYpiZLcYy2dPcSMniaMF6iteZSxcyu5qRBLMQAUkbBUcETMC9DTKHfWcpucj7HPDpxTqyxUmMXJ1dw",
  "key12": "3d2iychQh39FYKkAH3UD5nc5hJDW8T9znVczqJYwtegcweMET8CGhJBNNRhrUeZddwenqTYsWWDGaXkc9QGMMKj3",
  "key13": "66KmGCpPKLBXs3eDCdhgnyiNBrNFdtsUhibKv4YGWR4q1xyFu5Xiq2Ejf1xsZFXWrCi9wtBpidngzZrzPyB6rm2S",
  "key14": "4V9TPz9JuZCLR7abuew8dCzqRZreTtGAHTkU3AQ4r8vLBca2pLipHimTa8sWEzoZsCbcmDTb4Houdb9GfoMUqXV1",
  "key15": "5YXX2Khy9KrkzbgxZ76sxQJqTaVqeBaAvUKa9seT3wZcMazegDcCxWT7D9TxLDbb3A2rAZcTaVHNmaWUBmG6FXMN",
  "key16": "5X6KmiG3XHCjfk9JPcuQoN3bStfrhW6WQAo6hCjQc12auZm5j264ZPSg1Fqs6Zo2DQPLCBqDK96k7YmeEGPy3ZWp",
  "key17": "5mf8LczdsGdRJVy1NKgC74wSxwQjjfWNxiHABjkyQdULsAPTzhBssK7nMLnL1oUMRJmo6P9kwuBwgHFvavy4s4yx",
  "key18": "3QFjWhQGBRCcnHKmxU9z8nqkq6aWVRWoCR2Lx9odrx2dGkzjKGAMYUYgLgLr3ugxRTM2Y3ihMp8cRZBaj8GxDKB4",
  "key19": "5QKHL4UukBGViExWv4twFjCrXguemnB6sjSRdnra3DQzWTw6Rfn7HT4Lu2ViRJxTWdW8FiLTGYLUyGiYtNbtvgfx",
  "key20": "4ZDWjey4oB2763yXNwpmLx7mfCV2m9VoYBmwL5nzzxVaNW2Rdj1p8f8K4wNXffTxbCrWrw4KapwQVJS556Xv9SWY",
  "key21": "3JaTTfhnKWt9LuLcZXVZ7P7vmG89tyPwFWWkGZA1gJywBqqdKWdxuHpiiidWQNmGtMNREtxurnSnGo4pWPe8joQq",
  "key22": "w8zDwXVBW9nG3wf4JGx1QZNvLbHH17Fy2T8tbc5KufDMT5mnEZzEumygz8qWeHdY9WuJmfeTcYTz7nEjuaagRTs",
  "key23": "51q1P2d8YpYMpAJnURmgmJwjAqvDRR3HvMAyzyd9nrsSFhFyWqAxaXpdyUMfcPzPkpg4S7s5wmh3id9QhF4DCYeP",
  "key24": "4bj1vRGagVr9Pt7Vy7xuERy7SkYHg3jXE7VLtawpmFr8kk3NH9SDZ54gaXM3GpmcYRrQm7ccVSBHMxfqjVPHDSdp",
  "key25": "2VPaweQfDqJTrf32sohbEXWvjCi7Kd8HZhAFuSaAZ3WnGxgS35TVRvV2sRvcahRiGULUBdmqEesydMoLfLy6TSVq",
  "key26": "47bEekeDxVy8tnCHT6xAE88PhLZwTpcBAviieJUjXmQKNZKifb3XKdqt2jqcqE2p64pSZcUTGQWic6nsC7Pn1fcf",
  "key27": "4DLvGDN3yjAqGNaBkrRWyQqVem9ATgeYU5p2rVXvrnFyrxyxCK2oVDf6q57tTQfWvfMzG7TBtgNisfXP4LMLxZX2",
  "key28": "3Z7QtPHyZgAG9PxLyDZvZ2KU28nM1Hy6fWg9UxUXsgSqENDeicaemx31EHYFbw3Wa6nRvT5nxB5tfvRApxq8R1rb",
  "key29": "3juKh625DjVixr43zMdjDm5YhSwK3LV77uHPVsLgmcZ16KfPUtvNqwBoGDL7qk57bWsyT7LucfUSRFwfbCWXusuk",
  "key30": "4t8J3i5ezK4uzAfemHHWujqjDHrnWkLLc6AfmGxp3bkEM4cDPrbxMQWwxErES7WXFDfedP5NGw6frbpUXHccyJ91",
  "key31": "3eH1dgr3vcJuvLCnEMrXNPUfSS5yKuU6KrM3wBX5ZnHfhvQbsQYbzBnU8VUN2yoMWPrWrPj4hCjb4bDBybsrTKYc",
  "key32": "4VKHCW3jF8NLWf3VXDEznSHQndH13RAWR7Uy1ZSE8X1VBRtq3gWKg3dgh5rdrUs1k72uMb9Byumrani8NT8gCgYn",
  "key33": "ktLHNm5YNcrYqsYJ7qrv6vncaaQLT5HTet9Z82mr63M2CHQA6XdTaicLdEN3n7eon6c2gqeNjDrLggNw7Fn7nTD",
  "key34": "2BJWfnMGMdTVaEJvYBtdv252ZQuk1KAj9zYKoJkAvJKjkyhCMLV71xe5yEfmeNLJPQqGNq3kxx1XjtW6rC6rCh6F",
  "key35": "3eKDsJGpfbnoscLnMSS87MwqVqGMqQQhCBrX9P6ptdzxGud11FNNViLSkT8upuv61uWr6PzJ3Qcna3sQgrzAj4Ab"
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
