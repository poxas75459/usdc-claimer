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
    "4CMNxSNrStkmWoa9y21VgRQeWmS12auY5bvnaedoyhodpaFwPjKdLBokT9tCRxkczEAS7YQp887cLfMFPdyDs8W9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xgxXLeaaEyifYYPx7fGfNqarz27JeThUt8PNyBCUXPaiXYb6NCZUdNCqYqr22tiAvZRkQ7F7u8mriCSRSMQmvTu",
  "key1": "WFrrkWZ3uDeAX2aUWZpwxxM3nx9diJx9pMKufqFEhGFXmU2bDscYGFttkJbCswEZWto6J315NzLCHKTETLkcewN",
  "key2": "3sbD9fg2WhHe6btj1EYWsDYsN6UZpXq2uFRaMVtiiKhUQPDyGXs5dw3e26pxMbj6PWW7CUN5FUsnnaRKRkuywFyV",
  "key3": "9JSqkjsmhopnXQXhafaRJfCwf8utTzhomUrNbfQDnFMaaRgi4H5qGAgVRYsa7mAYbRWeA3wQcrQJArNV1eh2Yz6",
  "key4": "yo1JMsJqSNuMXRpKaZ2Qv1xD3R5GzKaUG5nWz5UFAxYjuyZZoWhwuNg1iyZ5SntUZpYx5xYfHS4P9pR4Qqvjjse",
  "key5": "2g18jmPKF6edvMgduLN1oGVJfDPHJ9W13gaN46u8jLUiLHws6veNVcTaMbta7UEZbYn1BZDfdWXCzrEVXYSNcYQd",
  "key6": "hA2DahiYduiV2U5TeEFfqKRDYGXynHB7ifkX9jtrUgDsvso2S2qGBwx8BLmrheMdkzmJujrYfo735UkcTiiwsAd",
  "key7": "5a4yK3hGYCsYzA2mBr99k3RLNGhNpaQZHa45ft5Dzc14WhLfaUgQ8CndvEb1mn9k4bv7sAqiJWw2Y2NLyeKKfQdM",
  "key8": "2rwoXhNczLZbnWKz681dUs4KE7UZuSS4ETj4Dea2VoPYpnZhpVS5QSNuK7vnz151meWfj4hewfoJg1ntWs65w58C",
  "key9": "4fhi9wEXkf9HsQiPxxyCfyRi5VGcFmJRnmCTcY9kNs9v2eqSjbDoeVpNXUik8BkpHUQDHQJyuVKoiBQNzQdVZ3AF",
  "key10": "4efUsa3y3ewYJ7gCdtk6gopHa8EW7G6J75ddc7gFzohfNRAdSnR5vag34rM45GemuPLnZurGfMP2fsG8YdPiHDt4",
  "key11": "5zQEYWLYuX7wAcqnTJuVz1ByhRoboMgTVLfXHNocX7ZVcLjjT9cXzeJPLqa5KXhBBuvgbojzxm4M3UmUcbHVRxeG",
  "key12": "3ecbY6TMBQ3jtuZuytXnyyAGnvSi3Px7WufufpbmCCVGQG7GUyPm7WbbTqvh7i7chTP3ZirymRcygy7KErJXbyXx",
  "key13": "2tK6PJWJXyQ9irEsnqgFnReb31CskJo7E4tfc5z8nGhWeCJPNxoZDiStby9Bd4qtp8XCt1kaEpFL4Y92K3buFF2Y",
  "key14": "3THStaWuSM4ajkSLpqWh1sLKNYrhDDryMwS91zK4wEE1ztu4kGMXrKP3tdjK2X1q9sisJDYovK1nji8n4EHRBDtW",
  "key15": "26pwChEnMMS4LRdZtPPe3A7FNAkCE2sD2X8F3yUtQmnJMwdZRpaqo1YRYqqcaAbHY1nBeu6vgcLcMx9U1PJpR15v",
  "key16": "5xZb8obgp8VFqnf6HpwbzPHqRFZceryF8dudkjfY2vShe8uj7i1ncymPTqQxxdqwbBzDGhNs1eMGpsYHrPTFm2J8",
  "key17": "HpAm3BLFEmdQ93tNQXT51vWbcoD1rdA7r2CVZWnQtESXDrzqqHGR7s9qRb7i8dAChs19w6XSoec98MY47CaNmAx",
  "key18": "3vf1prnZsGJe2RTGejMsoo9TUwevoNx136gWxvuHqtKDHmPn6ptHrRXZd8rvThHraP9RjAypi5nnY2Dg5zN1Ermn",
  "key19": "3Z6GYHTcGZHgEQ84cZCe92sRyoDPrhLEwVgK9iTkt8mGzfKTXt7C9WFBVeJM1Mb6dcaDJ4CfzEdg6qWn2B9f5ybQ",
  "key20": "4fUQUitU6u5543PLu4YoqgPvkQc1kbf6qJ5Cym2m7ybqdwnTXfXHgy5WfWrVUFrqWtmWxsayecRY7ndcRk4rHh5d",
  "key21": "497NBQB1UtgjfW4pzBHe5QpvcXWWuKsSNLkNMj7VmJV4Aqotmjz4dVXcufTsiZoocEuj3i23U3WHRu9jPnoAfZ6c",
  "key22": "3Cojp5g4cUh6oXccjMGEgNRAoev1TuLmjBWcSQGydu8MMUREnnpeVFbQ3ykwxVRc9B2RNh6Diuis9G5sb6NSrFMk",
  "key23": "2z5EE9YozrX6X2CGzKkFGJyUJRh6QnHgXy8MCbnQ131mDsYVgQ69LByMyYKGCifc2nnGVcdyKe8JCUgB4m7VEy1V",
  "key24": "49qHjTtUkqPKeYyogTsVJE2mJYWpeVg8tUMokQXYczbyxMQSagV8py9sAM4UChErbzNo81dBCfk95YDwwxAWdNJo",
  "key25": "AQikAmwGdNLofkJo5gePaee8C7DJaUJdFxy52goVBvHXBMVPR7L9mzofce6fMnyZuR21E6w1s8hqUeNyhR9U5Mb",
  "key26": "7oF6ULvLnRaw15H65XaosMrfdC1v41rdFDvMMkK2xbBYpKbn9UrD6cQpSHdJptYe6o8bbn48YBd5RrS8etLgkXQ",
  "key27": "4epb7SyTjmxtqbg3AuiF8Z7pJzQZWCBuo7EGcgoAHYGxvqx9h831ncNdahp5duJ814pGkFXWLb3ZczoHfVDJ1xFK",
  "key28": "4EKtpLu8umioorBghBtpQxDcNqUz6h75GXRbSURghbZjTX3DPXNdZCaY5r1qCoogEvQcK2JLhdr4TjuTYXpXT2A1",
  "key29": "5pzvmBHDyJeKgWxAJmtWnCJp5CtT1kx9yxhfGRjgDMaFgve8YLFYRN1HgMmMfxaRsXrRBx9ZxDRk1xPGda6b2Lum",
  "key30": "2QTQ5Xguntsmo98WTMSmAxy9VWQgfstGyaQaC2SgBW9ECrhvVdGNWJqp91Wu2z3VJVR35W61tp7ZeaD4t1rs4oyW",
  "key31": "3VvbpMoLngHqh1mbo1NWwNjjXVMdcxLp1DF3gPcJ3KovTTqkQzde8Dp3SUZgNjM57pRmDAUSjf8yEGF1Qc8GKJCk",
  "key32": "6ivpi6pvZSapmFNMPSd5MkuFF9qkb6WsCS7g4p1ya18h3ZfZdk6PyJ7ZyyGyu5SHQRuXRHBtwQMEqpzqGg6QZqs",
  "key33": "4NjuZrBJKvPHGHANW1a8DZEiZp2A6gC2J1t7ugxpe8UZ6D2m4rmiAqQLkatR7dVmnJn4HEEK5cVHfKfkJxn72829",
  "key34": "4oJXoWAoGVBstYdjAhg85FucWjRovsaXQD27NPzg38z7vKX2FoQrxHB4wac2zdqpg1qqcBttLNFAY9rWfaWzWPGF",
  "key35": "2KcMuSeARVkFLrazMUc9Z9WZVMvZ9QxhwtqSXA4h1aemj6qT3G9KQmVS7bgcWfebQZi8cEFS32kRiroT5DPW7zuA",
  "key36": "99pddeYMSgXYb35h7WxeeovtQqxYEpqfeWUCd8jG9NpMTzcwQkuRHg7vDbhgrxvst1qP1hWuL6t3hTeWCL7UNHc",
  "key37": "4qZh5ga8ttVhmrkSjbLmQM1pp649tc3nax4M9puQoVNEJ9MxJaWqz6ZogH228FqKPaT8fnb8yQefooKHhVXa6nRu",
  "key38": "4xgnpS76wrfWfxD6hQBir3U23gZHSsg7pz6VgTUUGkPuB4M3wjFqnUCd5u2BmEHTqDTGMLWV4yDKcemXq4jRvKqt",
  "key39": "63eKkbBrWEYkPhfNWVoGU9kR9inaYKLXHUapcPEvQr4HvCV1KHxZjrXPX91DFYHRyfMZG9C1iNNGyun3AnZY1Fky",
  "key40": "2SyHPaaV3DQMHVJ7uqwnttTUAbLYNBDwhdyJiyESn9U1TPHp79me6KM1H2UVyUsfsdvNwAu5rPpQ7kVJcDrz1Y22"
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
