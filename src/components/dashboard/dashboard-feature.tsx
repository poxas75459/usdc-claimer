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
    "5sHWQD5oKQgMvDwTuscCu9Wpc1nMbSGgjY1F3zA2gKQ8yv8AGqmeaLDcULfdgju6oPGN3jqA5KSNp4JSk4pYm9Gb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aqWN12uvwLJAwweqXUyKU1LavRtVsVGEoiBXdesr6heFLcptiGp7Xi2iXf9wStNYmiTqnaFafNVE8wEF69CvcVf",
  "key1": "5WiG9azoVGmJ8qqoUk6r9GDYbiGvucj8987RKPMTH2Uw37tNaYwe7iuPraRVcBvBbzHe9XdQ5ruWZZQouuic8Cqg",
  "key2": "4drKSRxSgAA5Ptt4aXc35tpLcVG6UHQS57vUZ3wdZ5ct6LojfDJ4JoKwAe4xzoTgaCPYhU4NpRfG8gEykLkvC7su",
  "key3": "R1FrqNqKTN6XS72P4Xcgf4TeA1drXUs3DTMEqsT2WgPuKrGvpHBUE7ueRj22tbidmc4hFTinSnsyyPLifQdtmHW",
  "key4": "5X8c7uCrjAUvCbM9LQw1aD4eke6JiaQYYJHGQgZ5UHkA9sWs2JdbByUMKjVs6GeyDXHdwmqohF6JTFv5yNcegMbL",
  "key5": "3Zr7rzrvGkmhcSmcNFuJXPaf27Mj3BSMiARpgsJKBQ2ZzxaYngPbgwdKakv4iw3VsvLhVDZaa253peZPqegE7u6f",
  "key6": "4o3E44CPKUSeYnoazCDKxATB6vTSHfzhAX74YbYzCZQUi8BLx4epdG2BpjoF5LGrUpRxxqkg6fD7EeCnUF3WEM9G",
  "key7": "5s2fMrFCM3JKLfzEjjywidUSXQHeErpMbeaUBotbabwWy6EA6V9KQPVTB4fKZiy2D1nMbvmLU1GdNVf5AYm2vGE7",
  "key8": "4SXESiVhS9LyjjKDFj2oxE7ZG1R5cJKvg18pPT1RKzv3uWWg43QSQGWh5FeUq7s1Xzo9HJHkCSkaCoNzU5kYzXyj",
  "key9": "oJCepqEboNxJyvd57oKaCDXH1xPKdB6kMMAMCZTThu2QHMSCfmMFo4ecR8DpHSDK5QRgnVZzWGU8qorygcQFvkZ",
  "key10": "5josxwFKyXa27WJ2DvCKriTthx9AfdSCPoftSguXKZQeo22BWe4FEoTtK4sDPDX8Gve3XnuUoUBwB5aJa12VhCjz",
  "key11": "455HVxrkSChq3tBybiBEv5v8EUx7G35XtD3QojpXZ9PH2zCihhyKub5Qsv3x6xLpPYBhzZWGi2Xuk5x1xzCuB3iJ",
  "key12": "38EuXvwyEyZQfBj7yZCNrLQVn2DGE5erSDoBYcZYGyL6aFmrRkDiVRwFaW2x7D1T3y3M8NApKHY4WXsY1GVUUL5W",
  "key13": "328svHDCcedquuoko6ACbDZTh4qMKBXJVwt2JdgZibsuF41D73wSySVxhejoAPLvnNLRnofospuKgD5oePtkjVU6",
  "key14": "5HUzYaS77DVDLrk9JnzJB97bXuEyW9krgTsZb8eq3D89YzDFb3A6sL9PmvSB1DchjpVTFzZL4u5DV3U5iFxJraXu",
  "key15": "3wgmuowGpQfyxcEDcuCkzcKTfLmfbUGTUWbyZwiit25Zksh1ZcvXBhdqp4ir4kEDuZAcKZxXk2aRhjquRdq8QyCJ",
  "key16": "3rBfCH9Eqi2xKVjWzvfqCQGm6Ji7kaPm6YWVxNChVdhmgd9CVhNUTiYRHtqgLVknYan8bWMTYvTbJTHRvHPeYdzJ",
  "key17": "5euPmvA78u5niT9zsmm9TLNJWA4sofERESLcPDVw9cKmTHzmT45MRmpWFWvpv1ooLsJqfimCdMFRARTYEAoxttUh",
  "key18": "4Pyhn864uYRQgfUwhCgFp3eF3pq3s2RsAxuoK4p32nrEdhAfaxcF8TWRhBap7zQQ543mSwcaTX2R3Xp8f7NxC42m",
  "key19": "5yf71Tw5RjagWfvveJegNbBWDHntG7dr3anMMbvfQZNTmYZDiTw3vcPEUM45zWw71eUvZQDjEXtpL5SCWeccD3wi",
  "key20": "4Y6JTNkkkjqKzZ7Tvo5SHFPmSxYjhsP5ky1XLXprFSr47fLtZugH5fYecea1n88gVfqZk54SUgk63tEXwFL1HFRF",
  "key21": "2vf9J6YD1yULbdaK4LmapKXVxsZtwsgudQeVxrXAMf4vNmbqhhS2pg9bE8n2QpQAQ7GXgeEGVWPVnN5NViA5dbAD",
  "key22": "2SScbYHomGRjzN3ybvJUowvdcBMZgMCkZcq2kZf3RXJjkHuh4bJ2i8BogVCT42FcUufJ1Bp27NYRqQobNGh7ZZvX",
  "key23": "2cR8CRMrwmhNufGVMahn1Q2mS2eAGaM417eid7uiWMcYgupBnUourVds5amAzHiuoF7g2EZBuf3yfLDWMmxFU5y",
  "key24": "oCPQwyRy3hMUzJSwRdYNcQGj6A4Cx5wc66awwzfSav2fHB77CtQrYYPb8E1oe1UjYqpJkyo4DiQjAxxh9M5CC8M",
  "key25": "4AH6Kgwvbq5XRCremqG8WW4mbVaEKiwQFWfdiszF29hdtAuZKPMtkvWC6rzZpYdZEaoRtv5KSPEYJwAcuEM552D4",
  "key26": "3W9ZwSWaPXScjjivk9trC62ZGcde4Ud3rtcUeekrh8SsG8XbbaMjHQZEiMcCWT6q6ek1qi3rtFhZnVcmC6HK3jzP",
  "key27": "2wuBFgknwNritbLEAc3zEpUCn2sufLzSXosp3fxKzp5eYwgsxvykGjk5WTMFBpYR6u9teq7RaT5NMgiBaLGQ8Byu",
  "key28": "5xEot52vMBTBLMUUswapAqRCMsjpqnWFN9ci8f1c3k6tJvY33HMMqgp4t6y5c7Yooi1ofYB4Q71UP7sKLSYyceF7",
  "key29": "2HDVPB7uB1tnhiCbhy5EvZ6uvY6jTBmNFMwuMpGwhcjbRLnjBNNdVApoF1R3JLsPUvdqk6ZsGHAGRTQfa9s1UhQR",
  "key30": "2CBjRB5kqiufSm5MnUAnEzNi854xPT5JpqcMWNFD3pZTa8yMLS98AtqQxWsovHXaLt6sNUq4U43nJzSYjEYpCxgm",
  "key31": "4gVH2NrLQLU9gKCqdkpHmpEvZ7Aybpo5gDweHnFpjMwHDkZT75CBTVqLKmLzGddSFbcP1cnRSajGuF4RuweRrTto",
  "key32": "8u6YSGa3BjuzCSdj4fbkoGqyftBmwUD8HjJg24bEgK5Ri91AHxez2bmWvWmtMFF5j9ByBGYeWzLZyDFBjZn9rqH",
  "key33": "4FyFBYtXiwTQe8ZebC6KxPD1QUwuBGN8Lf92CHjDTk36vgKqW97WPG3eCKBZNrFUs1RxH3SAA5StftSr7rFyfu7h",
  "key34": "4E24SGRZiGE89PAFW9JoSuB3EaoqMxJ4oPfmF9TBSGGzhmhocqgoK5iebDWR8qWDWjsySuTmA7JyMmGZfEGkaMSY",
  "key35": "4ty7YT86W9FWCUvhgwrDD4966scyFshda4ccHAGhsFkFkKndJCZ7BsMvH4MbpePQX9qYo11Va9F5i9mPiUAMMnNU",
  "key36": "2bXaFd7HPUNRgBPvMuTnao5EkwRi6mZXAjubGFoJ4c4iHU6PCFtdrSyXvEGMM5YFTM781t3dkczt7GPyZmAhaYtY",
  "key37": "5MWTwx5t6aBP7XcADRDqAqXd4J5wE1TNauWZMYbcBT35tgMWLDvzhnmVD7hmc3ef2HpokM6ueAukQtAvTqvR9omo"
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
