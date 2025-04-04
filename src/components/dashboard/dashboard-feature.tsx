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
    "56QsE7keAgvTAqSodkeQe5mHvkY4ACR8VzB1J8QZT7rys1GfnvVkgsSu2uzLN5BqQy7RVq836szXNVR9qUPL7HxR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tfrktj6mFgbrfrADqsHqkccskZGJD9U5gvfJQaGSkbvRbHwbgVdGZPo8VbXJpnzM366r5um6EqmrvXmynEyRJYC",
  "key1": "4fzhLLixJs2qKqyfUV7xNMrPPbCiH9wrCykZ1BwTZyMZ3qaJH3ow6s5zRiP6XMb7k1PLfDurrbMXf3REVPSHmPiZ",
  "key2": "5cibqtZa5DEw5ctt1hyR2xMgcYtn4KsztuGKqrrbdfivAboN6vnJzBv7JxGoRdTt1qacgDij5ukpkWwgQTjDxP9x",
  "key3": "23WJtR1kKZnJidoffN7JaMED23cHQEiw2A79sfTgX9f7f4HvCn4sgcKKTZNp8ffL7QqM9rroeb4NVdjftU98JPMS",
  "key4": "3wUzzsPxYobyeAPKqrHBwBJVEah3kZjzK2LDL4WoHT9LcqYYUFs8UdQMYWo1Kc3XV2SAsfu7UkaSimMD6N5ogFJy",
  "key5": "3NhZcvfbVgytVQXFaGCvbetHU62yNWecVhbyub3MRpMBfwLLZjgV2kXuomEQwHWi4MPvMZnstGKB7hqH4t5Et68A",
  "key6": "4StohyyEafgkJ5VXGFDqd2ct5AhGc6aGDhrpydndJvmswLEiRM4n9CPZcm45JBYkRJMc21pFeyoUt6TdxWuZapRY",
  "key7": "29c4dzBPThFnZgAatYuGJn5auRSzwNJh2tbDx5fumAAD9Scfh5qo9XJMpmptAFcbXa9rsiRNVGKwioekFY4qX43W",
  "key8": "dTotXGgJ6WDhcWGjn9BSz7vShxdybu74STaopxAQTDoBwC4Ax6F53yu8m432hLRnK9Jo9N6i5jgFW975UUbVeAf",
  "key9": "3tYxDQLWNdhGAVGo5GWkYbYsWYNX4UxvEDQ5oH8JnPFpJWVpBYth4HEpkQ5n1z8w1jnm3qdRo5MduoM7N8Ln4GuU",
  "key10": "5LmNZVyVwdbkPQE6ssPYWFxzu8Dj22wn4kZ39Z28USuzhSKnJcGwqjsvc6EiWgr6gQfoHuFyYXNffFVXStRJZCX",
  "key11": "5MdpzxTEGKuWGZWCJiCppzCFXprDedYGMtjrxpayGwarDx22sWPy8j8Q4YCgCtmgz8VHVAAsGNiLzn59oNsaQ9ni",
  "key12": "2QhmAuztoJUiu84zg5dR3FCFJrnj29HtNhLGVJZvxeYf8eS4VvayT2QU1YnPSpY8hzWHKP6Jec1j3hiS8Y7JbMJS",
  "key13": "2CEWqGvCw6RfZmJdajtNTrewauax5qC7aD8dVU7mfMdDQjyMQoCf92GL27YHtUCEaQyKZyzEi4DQqGSWUpfamY2r",
  "key14": "5pYN54zQ2tZY5md1U8kKSzAKkhvxmU3Rqf6iHCqaxoshNVXzL36cHzPMH5mrmH3337wGmXaypgEkq3KhTgwwfuhb",
  "key15": "3MKxeG2oHVMVgXtQq84pWa16yjShfuBU1HZQxvEEt1aASoHty7EVDUwsCrqtHgik4vgxiTc1sXb3e1y64hoLDV2h",
  "key16": "2igSQDNSpPnMDrpAZ7VCb7tN34SFuVwm2AHkbrXdWk4Zz2mbKswBrnNhQHazFDA8eB3zPwsijRc9wXi5KG9HiLnG",
  "key17": "tCBTWQz8HsCVg4RPUc1g5feN2WwLnQXnWHaHt6nS91djpzx4qvTaCyXqcCH8DZACNeWDpkvQZE7sNWCHXUi4vYK",
  "key18": "27EFCyjTgY9ov9EfSmhkmX5fsjBiBt5dpd4Au4A6mQzuj2a8eBH6HmjhCh86B3tZCEWxUkTsD34rKvnMprQ87Jgj",
  "key19": "h3634YHZYzHKnvFTyY7o4CrW2wb2MyNzXCcofpTQ54EtTkWFwb5z6hPVmuczPfotqt6Fa32rpSSmnDpQ8PxfsVQ",
  "key20": "5mtf6BDsSwLbWiqDPKdwjbig3dykMnssaQZnwNUs4dQgxD63bzMkCzaTAUEdhkspaAkPrpkALpZ2TqGDqXzYGVZj",
  "key21": "327EE5oRGRente1Ne2ptKWYQV44TYzXa4MTftEEk5Lu8jP2hQ72AGEYbuGC3iXBVya55ZhRYncw4AnjDkbTVrMwy",
  "key22": "Wh3L5AvDZyDTzsaj4nU81LNoQP4BsCfuSVZUzAgspqFZWmuKCHopqMUTEvb7HNu81Xr9MdtckNad8DcJk8ZCLgB",
  "key23": "2hPEoCHoAGJj9njEsEu2XqQqhdQCoVMwZtnWCe6yHMV7ox6v7sn9jczQjnoSe8bShiSq3WutKFvNsvL6ZHxw1upt",
  "key24": "39d3SN341JuHunH88zdPp38ATgkh4kpV2bQ729ovdjGD89hJ3nqqKnehZyfiDRseYUaP8Awe3Gs59Nh53QhPqzEh",
  "key25": "3rkpVebF28y5zXgydeENqdaLC42JT7nNomVt7whnUGhj7EWKW5MczpndW1uuEjGcMH2ZJKhQ5eB3QrxcxHBDCuLq",
  "key26": "ntMK2DQnXnTMApbNE5Fh55mckEby82UF7VqnDvsUZia22JLemAkqj1UvcyobtaabV35UxXWiyKtyzgWDrJeXFgz",
  "key27": "4AwNR9rdmTvgsrfD59RoxcoNjGnxQbJUmEMkJmnMXDFUCmgT4dbZ3h5Ur7ekEXSiJKsnY5eMfaxtdKmzWuHdZ2w2",
  "key28": "2Fd3kDghGWzccvzgXZvL1vsjpBXBQkdbLUcrftMvtPKGdW4goomTaVydcBD2Vf2EdytJD3D3W9TDwtPGVAq12zqp",
  "key29": "2vqAYNgtG1dh3JDtnDiFNz5fMQvbE3mgK7edEAmKNavhKjgC7UJnWBzVVjfAtW4H5sUePedcyzqG4f9PQcpFGGHA",
  "key30": "Gv3zr1YcCcKmuPDSio89j21XvT1Q6SNjsBSG4xxHsKKGEBvFdFwbmADD2oHGMoL48Fyjf5B4MJmDNjC8uS3BVtz",
  "key31": "3a2CYubNjpbtRL9XRR3E6UAwFZcdGqr8kMREehRTc2EtNSEYnjFrfNdrCj2kbyBFXpvB93gEXJyquUKFJUfjvopg",
  "key32": "2rprTrJfM2DX8eDJDhbAHA6EfggRNzX5EF6hJtL1rSfUxY2mACde1hMSw4LPRT29L7NgrBvxVdCJKeifxmBrPZ7N",
  "key33": "3ZDdxLnxjKUbNwBM6Y6T8QGivW6Vab1hgHZNBh2wqLPVG7zVyYZaKxeHVSXr6dhw7ZawFSaAJ4pFpLtcS2GSJGsG",
  "key34": "4qeQCDANLvcYTDvrWjAfgmx25C4UUJbZqDWkpS5pTpPMDytiqaUFtBuw93pARqe19FsiTi4YzQxLPUXMggXdxB2s",
  "key35": "4CccW9Q1FN5DinxkSzspyy822WJruDusKC8bvgU9jPEJiJ9s24DVf1iGjogfN8rB5mAjjkC3QCQdk3bXAGeLoDFX",
  "key36": "2pB5BfTidtVSz6qteCjEiYExXfFqQQdXpXsBz2hCdAGAnJCVwu52DH9B7FxqjtUWXko4KNKLyhYRqS75HxzBv7Jr",
  "key37": "34SFzrs5R7DHcxdkeYVQ9vnFDwZNpgnUxtiMdaJyNTNiepLXfqrj7cdKast1tDG1vkkJTxbD7WVSH4oEtb2q768v",
  "key38": "3uaZJvBSfGriU1d9iiiw1hXXidD4EYN6ncGBQ8ndtuk85AJAWd3xLKfBkhJcBrMyopjMimNCHwEZs2xFcbp62n8Q",
  "key39": "3Uv1mwoudcsfvYhgYedxaokJ2UzhCZ1yyYs3poJTRv3BfsZUennPbAPdWjs7sThvtbKcW9bDGcKhjnZBKERyLMyJ",
  "key40": "5oDQ2A1GTF8Pe2bQM7FjC8zkyZFBZNnJB2TL2NwTAbWnHdPaYxEkwPjTx53KUvYe3yYiAYJYrAi4pc7Dk7HC6BCN",
  "key41": "4vfLDz2dFGnNitZGRp3MwtfcbcDVgTYL54rV5aFcRhBWEq5Smhe9kbYy8neBvpz6PyZTeaCTcbJXVmJrAQ6XssXC",
  "key42": "3MJWp2r63XFBmz7FvxUkgTdbLceGB1rZPbjrBDNSuaonechgSRjhLDs5WU13kvcqRFtf13KBW6Dj1JZBvwQ22kiW",
  "key43": "3nzfsVhGDH6FtZkPQeWWJQ2EVXNkWtDkUmnp7p24PWANTUeFosQXDZdaQ7ACAZZnA6qqvSfZvpxdei7dBWP13CHU",
  "key44": "uWZk5g5NrZdvzq9RfVudq1kXPuVFNepp8bKw4QJh5dzQrRRtW1uk49vRah9CZzKiYP8T71H6oQ9TrjeEsGv3nvu"
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
