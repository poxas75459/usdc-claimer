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
    "5Bh6bZ22Y3GkHJVmaeQrCWayTPBxFgJz4wpy1GM4UKccPP2cMSE2a72ijrbChYtWe6yvcPwkUZQ6TEtWTJpxHXaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iHrvK3ZuPEVASksycxJszypSxRkyFHaAnN6tiE79XZSqRkHnGWPoXEsYWtg3CCCj6B1V5kojRwEjpnbKy2Epk2V",
  "key1": "tqQxxPtwRNekehpcZnU2g8yy2Wjwye2Bs4heoEXnVzXpGuam3MCu5YE8meGy9aLx7pVgFtEfKETqoBy8tcabim5",
  "key2": "4MozidLkGn3NfJa88SMDQT4omDVgqnmUVPVHwa3c2jSQ1bpisB5LTfvtLuE34Nka5H6A2VQo6qXjw56HkN1vCokc",
  "key3": "45uBYmd7AxnwL9Gkmd2ttFECayKQbtHR6NkFXKSiDfigmZQSfyh9M1BMnuaKR4Yyrkj6j5uNd5K8LzMh3gwrdLjL",
  "key4": "4zkP3gFwo8V965y5zzgRnBFVbFaRszXG4h2mwMzxbGxpSBhmGxFtTvWvsA5p3GdihqApUgy4hzwibAtPeHS9FksR",
  "key5": "2ou1Av1FPScJwmMCuhWuVUKpWyX4uGFDN1Ldq3XHFNjF7i7CcDPnDaUEZMkm15kwDeDAJStqa1Mhu5eU3q7djqfb",
  "key6": "3Xi4p52ddeWFnjtLfYDkVsw7Xo4qj8Hre5LhuuQyjbFshntfhGXY2ZUAZNuxYVjpEfZQnjrZwVqJATAKGPVKnsWQ",
  "key7": "5YzwNN3GhGDrKeLMbtfWgDxkJPQDP5ExCetoUVg5eWTcr812Fu93t2sYq62MK8ZBVwt1iAyP458jVtmskMJ567jD",
  "key8": "4ZsYC2g9riQp8BgPkk6cJE3CGNGjmp5K4SYDHFuf2k5AGVaodiQdX3o4AoFUw472oxSUb4QxkSoJSLnLpiN5NB91",
  "key9": "2pyyHRsRfnbvM7f7gZTydmygv32m6Ys1xMKK7PveyPk9Q8FEnP34roPXVcmN7wjyaXUcBhRjAcv83f8NdWEoJsAi",
  "key10": "23qd36D1s6khDK6JDa19dQNBri6ZFf9yBesJVNjkM19GJvADJjnSA6ZEEPZUvX678MQVVfV6viHgbV5DPkLoNWNy",
  "key11": "3gPGv5sKQBm7jTVyFQKiqgqr6MqCbyTHANko4Ad5o9FnHerUWRhsUskbwN55fKR7CTEemudGScUSWYxvut8jzXwp",
  "key12": "2WmcPFcDRpSNLLKdutpbuw4RBCpN8anguL5zry91rbG5kWQC3YN8nY166DUDEe2C6CkzjAzeUdQ8tGCTgWA1Nhj4",
  "key13": "iLJqTGqkpbNdavnvTkHybv45UFtgWg1aNjLr1vc6d4y3h6nfGQR6SDQrsqKt8ybfcPowP3oQ1NvSNeQYYX7q6am",
  "key14": "idHUN87W84sZVy4pVrbAWHfdKBPfptJY5LZFWct4ZZFzRKwAGULvvzk5iDRFa6rvRLVPAJQSbnFuyjZtRTe6g2r",
  "key15": "3TiZtXuW2QZp9d49Tg337dGK92BDi6hrHQ1iSLf9sB8ibRFLpRYmYRhxLLfjuhzanUNhYNrx1TkorafKLLmLyWSQ",
  "key16": "2aFkG8q7rCCW8nbRGBVQeAoEfsqD5p7SmjPtwCDmQVuqKwGuSXpVD8iUPbXAfkc1oeqH6DqhBBv9pEY6ENm6GSAG",
  "key17": "KwyJ8Up7Z6poRw1sjiZ6sbsVtEb3LPYcDPQXpHNBFtykKPpWZVU2bhnYA2YPeS7j5MGh4YQYVH8PTUVJwyFHdDS",
  "key18": "4qo2H9h3Tjj4fhujdm6qoYrb8RwMxazJkUKNYa3xdYSHVyNKqrytBDmoDAHRzUb3ZHbga6o871t2ERGLWjT7Ps32",
  "key19": "5cRQsHRCayFaTNMu4gfY9u1CpBDwbNcpdku9VocmqmryP5GYj9JGReBkgcYy6x8h3cB5xGPsx67JU17rBm5UtcZk",
  "key20": "2xAxNwt41E5evAhHu6RwCowXEinfFUSYK2sgW1V59Fdx2wBPfGtQVbjdGbwehLVaVPx7ZAr8YSv7HmTNeThoGJvG",
  "key21": "3Y6HNYCG3hJA7sPKjjn4yLBUrhuJN6Kt5ZADw8AYUQuL5VCxFd6mFVSXAKPehDQPVWfgUhwaQr6dE5GWAwvZuYu6",
  "key22": "62ajYsuRdKoV8cN1f3mtvvGUM9VgHf9iZuYjBaJzR85zwNJBezNhjv6R8NGd93YzszkQ275YXdpRYFJwagFaSCC7",
  "key23": "43kzGhG2B64xqhfdoc4JNfnfTStMmAB3QY7AaV7AHc3ZXHQ4VhsxFwBCeLACDbozCJE1xZNKPKTbPaBLonHjZv6W",
  "key24": "3A3fDcUjPX6Be63BRkgrZsVFoq13hNkFP6bxt5pEmycdA4n1B7VpoYnMpSAeJzNvmAzpMx2Gcm31ZBKpnCmicSZx",
  "key25": "4rKgErGWLpE1z4sJuq9Fd1D5ZGf1uTdW74CLm8j8bQ3HayVmSJNoTPRLWJBQaSDwJf2tCXaRBzKN9b3LqLekDE3j",
  "key26": "5vEiQKZXjiNS2D3Ms41jL2GRuQSoAjMjKHRhx4jg3jygJdmha14pgGjTuCyKvaaXL4BG4jvQN1b2SxuFBNM4LXEm",
  "key27": "48VWszFapRVMVFFeh3agrdgarEyr5H7rU4PEwBMHTucg3sszcLxZVqFHT2SqBRFpp2j5Gzv756Mkn5jaDVVYxTbF",
  "key28": "sA7CaATgAwVGBMHXsFGhEQikqBu1a8kiCxkG2xdaEb9hQfZxf8b1htixW6fifHgB6evftr2uRxMx5UboERJ4rpy",
  "key29": "64TjNL66RL4LGKvkRQSAGDX3RAYmYtkpxx9USA7EYgFfETAiAWeAMpaZQC338cSuBQ1K4eCnn63YFxQNJjfc7fkW",
  "key30": "2M93yuP1zDyF9rQLabASSP9cQ37vDKsRmDgYvwRWpmDK9eNKYvsmKUdtYcB6hY3wWAfCpVZZKyrquBqiy3drXwQh",
  "key31": "CDtt3EVzKr5q7MamXpA1kdaHiB2nSfe7E8ckBVtCRKYCXPE8Rcfqov3jcGQtuBEonceTrQeRBRANGFDdjsxh25E",
  "key32": "3gLGsNqngFyBejdGsSa9f2Wuuk95xGxKPX2DwRmJohHszkX5D4KwR8bT86jcCaz5dcbC3mDFrUw3KrKTpkVVS9RC",
  "key33": "4tKBiuV7qjpozp33dyZZnpPaXxff4xDsM8wKpHXfrM3fXr5CTtGGV8oMqakcYoigqSS614wXeWHeypNTXixnaWSf",
  "key34": "ojk79bPUEJ1ywN3r9RkfNtTXh3SKtFjwxERak4XysmtAGNUJoCPUkSrMUiHK8iHQ44hL8yvGTCaH4Qpzk3Per1g",
  "key35": "4nDKxUt9ecMg7iRVBcPYG3mjxRPJB5zCN2CM2KNsxMYHFWcd1Cfrc44oK2p4hiuaWfTfCQm5QM4JxBJcVtAVhsyQ",
  "key36": "4dq7XPAuyHCqzS3jSyAKRLVk2ZPtAhZsjRKvJbhc2m8fdDscDn2gn6LMdXAbpziXBaMNoUnqBUwjsLV4REnNoi5G",
  "key37": "48BsK2Bjkf7PJcpivkRiXxzL41HtZ8TM77CbG46CnQ6FBKjs3LTvze92qibzWQcmDiSqzoeci4gHziQPjhouBPGC"
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
