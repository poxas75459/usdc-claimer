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
    "KUT5PTJxAuLoNzVjtQTnTLWbBBdHVew5BSwdtNnJxuL8CXyakaJ3pJnsYv1GVahQbEPXKzvL2Vz9YSK3iXqV5Sj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iF8UdxxMRMcsFQYGQBs5YXHbL9U17GLwi5QJ488wSwoWmMuPjzhK25keKSrf3SYam4qKSNM8mKjMe3oVMW7nJcr",
  "key1": "4PzqQRxU8bGAQSkVesbAuiZUF48Di3G5bLUivvQ466tCk8zy9TAYiJD4ficp491W9p2uDYYQM232E3AS1G9VpY15",
  "key2": "5CcXpUmMsKoK2BFho1HaXqhcGTGQGK2eWzBRCTPBLePsSqidNLVz4SifagHCUY8fvuFMYzHYxvATsFcptcBG3p7K",
  "key3": "49vsMG3o1KaFgsEKh4FwVSckhz2hHsoDqKsysVzMH2eH1P8dGxf6zPy1WaxB1GcVhp57jSK6fZDtorcmdEMiCRR7",
  "key4": "2vvyKxWhvhSootGoAAxMiJThCYaeadyQWdSFGR9PaftuK4gRoxDMrZ1S1asqtjWsgL5RntcUad6XpQBxPTqE2FXq",
  "key5": "LsjhEnN2ajp8V7ffyb31kuDg5kwUfzFnqXQdeyFFfiyvpeDV7GkTR8qGUjck8Zh65EN4mTsddfxNEwDWUa9oAhY",
  "key6": "5zUfpFvnoKyXUoCt3v2DdyPuJ9ADTC66NzSd4RmtBPQwLen22QYk9idFgZjgrhdtPk1LMwUtJ7ZwpijG1rjFCcfS",
  "key7": "3rFqppjXhiNXzNGTB1qcicifT7hei4gjdMFmYJHLDJCSD9zpXpoogKnXDzAGh9v9gsraWcqEJvBYCkm1DBoA36W",
  "key8": "2EEYUpaJvahQ5Wuiv2ZyQUN8A1TajjYjY7Q6jfhkXkPcT8mBVk66BYUazGECi7hVTvByEqzSYdt96r8j8LHhdJm",
  "key9": "2mSbBeRD2Teb8c4jCCExidBdkU3snrAG3zdwFPKnymnNtV3CUgMe5rY4rK6reTGugS9LYebbtYqLR6qyBfMyvwGu",
  "key10": "jxCD37arU5ZsP5Upw6Gvha2BziVfkWMaXyDW91aRGxqKrtUyPAbLdnkTvUeSjuzcxxK1Nfv8diLXd1wpKVjuFF3",
  "key11": "2s5puVPNEXWkJGrsDZYdQpGT9V9wyDnPmUypEzDR2TToj5vzHDmdE6mVuGCREYx8rDGNTzEU1GH3YNiNKJ9rG2RL",
  "key12": "5JNebR5zWA6pgj3V2ecGyWZWZscrtu3vQu8DwuqdKRmjZzGD43TEmQi6DTw4yDXnFg1h1rKPq2pU4dTmxE5NXEo7",
  "key13": "3VhtohvhYcjeVSWXjSq6CDYHL1mDVv7vkMRRWC3JkKsrGgb3DdxaEtN2fwrBdBmsemenfWZ4A5TMTB2xTVYbxHSk",
  "key14": "4P5bR5iDKduWE1bZMKyFNcaPiNz6LfFcLxHWp7aARnp93GCKdJr83FchwTmRBLg77jAGNcFs2NhcG7wm6fU6NjRS",
  "key15": "4Mr9VeKyoCLGu91WpdU7n174kKNrAdDXGVMQWXpVFf19VA1hZstaYspcD7puGegkS3DbBLVnzwkNqW3ciKG3meSW",
  "key16": "59gN5UZr2gKZMYyViEzbCM2DvkLAhKx14dkmL7iEEw8GAauWTjAFGbp6A1YYoWDB72VBKhgk8BUoafyyhte24CV9",
  "key17": "59kU4RuaTRy3BDMvcTEYb92Y3ZV6QGPpg49PEURicjqAToBWDLJGLyJRjyRpprEWdodGFNabLCH1GZjzCm9m46cb",
  "key18": "4FdXZw4U6LtT9SFbLW9NGN6pLuevMAsvzEN21DuD7cAd1UqUz35uAKSqDL1B8S8oqjzn4WULkw5dAcUThUNxzdS2",
  "key19": "51koy62mfnqw4WgVVLf8o6KdZxN984NhNTgBeGWnU8kstF3dhNfd25XknRpZawZHbuH4AwqnJpnPPThxmKrhMZix",
  "key20": "4nFHvGE5QaMaPD75YiP6z6HiwSQ1b2G5gcWbySoRnAkn4E9KnHzt6Udk2HFiwx4kzwiHRLiFAM8F9r5DpDozZmUR",
  "key21": "2DJp8icMEBikgUbHLwxnu8zVJTDYeB4spkLfjAHVNNTSrUmkcKfxQB2acwcuUyQ8xmc4UDkVP5G48MfGbw8BtV7q",
  "key22": "2XyyGg9GptAcwwJ1D5A9uGtYGvCrHQDXXVRL2mBUcpHQCeavz5kdmDfBa2t5bdjLfJDmgKYVuRkUT1cNUohBDdMQ",
  "key23": "3sgt8meHG5xoLecz8z24VCzCwSr33c8LJpr1tihhiU7H1MtZvwG9tnHSzV7PpvnZ5h7rTU7FXzhqUVnEgXurqMNS",
  "key24": "RvDKqXprR61z6Tdf2usNQ3dSuBbdaFQwAvPdCamqn4Qt2wrRUuKPfMLA2Ge8ncJAuEWBaABntioDgJiDXVmFy1n",
  "key25": "5m12BQ4Vs7KZmdatWRsKkimsihgdAovF8dBg2K4BVabfv6M6sQMTLSkRVcGMdpqnaxpvVozPaGCtCbFpxpqQLGcr",
  "key26": "5g1WsbG6UcLgbtERqeTNt5RmsnwCWTDVLfMDyxq95JLADK43obN5fKExa5SCwqmrzRTLmNwJhZweJYBBevYx77aA",
  "key27": "2ATANiauEJGAUUoDuBkf8TsMeudexctRpSoino24z5ZA25voPz63cEnvxeUFC7pra1zCnqyjya9EDBGfUP2UHA5f",
  "key28": "2sUMmQDXLhRY3F1Y6VDnDjYYYEaq4ajxZafT5cLRVSavUafVjp7HnS5jGkqSf8q3KRFudap18z6cqu4wDiFCxZhB",
  "key29": "4PQbDBsbV92wrPbtC9eoKQxm382z6aB9SSarkqBQRLUFeNuRxWoEVUtm5adb6EuUEsdcYwxxp3fwFDkYXUdcLC13"
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
