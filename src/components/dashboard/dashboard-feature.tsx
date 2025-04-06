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
    "aAVNHY27e6ar4jPmuNdNvA34waiYXcA5zGtdaZ5D7XawcBVp1ESRTeMu3RB4o2VH461vyBssNh6v2t3VceQft7H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bZ6dZHeXW7kKS822RXSSo62HtVZg4JmKFJuQ8Vdx7nv4XucUBhZKbqKmsCJXFwcTuR7LPmg7TLtU7auybPNapU3",
  "key1": "r3TwndofNYiKzxh4mzDdM1CCKHqiC2GGFNGBT8ww4UR8ZjVVmVfayC6tRRiUQqWij7M3VXxiUNeJeeo8numsFgb",
  "key2": "2UjRBWhazJ6CvQa42ksEbZNrY6FKzgEqAzdhXNAp4hMtU5kH5fg4j8eshEBGWzwAk7ZbPRDSnEDFrjeMJb4iP8DR",
  "key3": "4oLW7GzNKoZXkDhTvNvCEevDU46SdZZE7zXr6MYGo55vM2FmctidAEb5BQ2FBjYCmRBDWgo2D4bjMXBCYsMAmQcA",
  "key4": "2Wud1jDV2LS2fJGPT8YDDExufDEGoFMZK1u7B5m8dZtwrx9wCd1ZeqfZ8aj8k3TCMe4aicD6LKMKyBAaXR5P8WxT",
  "key5": "nNq6HSPvYrcsyCRvikmrtCgdpDBVJbMuDW2xpj2TbjVXmQgpKxoMzxeYgFsFPxa3N5Tqatz2H63sT7QFg6spPL3",
  "key6": "2bVkCRqdcncmjETGzYQEa12avCVuCxEmG5pTZEst1fLVYP2ppFhrm58fEqsweWcBWxUd2yX11aoAnbhAq1Vj9GtR",
  "key7": "5pNKmMSr9sAoPwcHaZU9BpK3XPshqPevexhLXsLJuLeMZSTN8o82MRguXKR98zApuMMekbTPRUzQFzbyzsawQbiD",
  "key8": "3M763St5t17h6BoYQ7RYiFdHtgriFMxXiTdAaRLhNNSBxcCF16sQi6j6x2Z2oUAd57p9PK66VD7kuhnimE33UeBd",
  "key9": "3GWU64QKtoqLpFjqFWEMawZEggzS4weYYKUbQLk9aWLnVHD9hRf7Zhnh3GWjMuTL4yGs8gyoDy1vbP8jYhyoZaHH",
  "key10": "5pDnsCd9XDQymf53gJxT1mrWUaukz7M8k4VccxoiB3DPZWx1niKPhqMHMD94pAYuEB52DQwYwQpRsJ4Dd7Dv24k6",
  "key11": "Cq1kKrDohJD6iyEy7GkaSL2NsdV3cMrZ1as47WrGdakcDC1dZTPwa7bBSJdenmxUZKFTWppp4YT6MVkTkZ6tfop",
  "key12": "4myU4hKaznvprZzk5qMMJGYUqcXo4YWcUFQxMNrMxfs7zhm6aUw1peRDf4gxHWcqT9T6WZGCsNcwVn65Pz4DFpgy",
  "key13": "3Zwr1xTQJXMk1P4CG28WGqT7rbBiWsnyM8yZzf3CdSoprCdUBJWdZvAcvfcWnSuFB2paeV6EhL3VKDB2uGemE5iC",
  "key14": "51WHqSUG76Rh776jn9vkT7w5Z3f7A44XXEnS2Fc1P1rTi7UmAZeS1kjNaxZWeMp7Df3t6enKo9FupCp8aagRTJHn",
  "key15": "3uQKTdTYVJBHjVpxXZDWttHTcpZxvne6BDsrd5LvFkZW69QvfmKcJgCL13wJwzgmc12NTUSKqHezrNWKrj5fQwjJ",
  "key16": "5ewiZqHinS63PY6PAGDo2p1LqzjAGAHJUVjXPtWuYQPkVgdVZSXUVNfsRHYvRNBt4DhSEYqaq9Msr5maNf72katS",
  "key17": "52S3UhGrKzL9vLWebdwsqWQ26tZTdsVU9Z2wY29ZLwJBjpVGzWHHWz5mKXRpQghMWUiPCmsNzDoAWPWuhF29aPYk",
  "key18": "3KwePcS3sZ7Zm5XmBgVUC6VbRF8C8UuTrQBzDDT5Wangdb1aDBXnKY5WBhKLFfpkE8MF2c8pq1UuBxuuVLBWY1vJ",
  "key19": "2VpVJXqKAeUeUpv1fX3efGWTk12DMxEKTpd6J3W7daiHAL1ZxiYGDtfm6wKqgXqHEdVM2Yu5k5sy5tSFuMn9qq1N",
  "key20": "51rMcksEoBdj4dwFAetQSiNdrZpjV7vNxEDjwRnrC12YMr9ngA8qxRzfB4sDKCmqVetwfMmueCkHwZdkZF2rG9YN",
  "key21": "22shXAskdzLHzb3Uc6dBDd89LJpj6RgngRapAUezj89ijaf2VBWoFYvhwMxitU5w8Y2hnPVE8YnpEpTR8U5djxiu",
  "key22": "nnBgyTyXGxNfQi7jFM8pRsWzgGss93UPrhihDM9hHfLrq4vwnibbHEL5m1255AW2QRM5C3TS2edJUQBK9eRTGWL",
  "key23": "5ozXFTKbcSHrZhRWmdpo9ea7HtjSStqMZX1JTvh4sJqL2r5TN7d2Dn8kw1LkGfGrT15QTv28SDRk1iwdj9E9h3Y5",
  "key24": "3CoFrquTRdvio68WNjSMosW7cDNXYP8dWUtSCwhCc9ymFbFbFprkWACWPnsJR571DeXhm3QAgErPcYcTuJjKmUn7",
  "key25": "54exN3Jhc8et3Zp4DoEazibLKmfpSkhbohKxzizbEkqFC13aEh3UUPRue31RFD2hwvriZd5JkxWDzrmTsr9nHq6j",
  "key26": "66CEGYQd3v24PvnPtkgdgyCHCfQhLFqZi2VMfXBuNtBufM5MpaUwMDU828vq6Ly62G4DZwM4Ta5R5uL6MiqheDJM",
  "key27": "4Su3YmzSJw12nsjs6CQKad5YgpzcaU3pPLK48fdY62kajvhiZpKGj6BZD3JUbHZQmRVqp82jKBKpm3y4UAR8jzJA",
  "key28": "2kDDvrh27XfjUC5ZAGt8JzM7n8MXzqx1paTot8azGeKTeWdwTcCBYLiNEGEMV2n2KGfiHTbtSpbfto31zumrRNGx",
  "key29": "4TMYTKjKaJp2QHYMFuWZ7PiZFc5aZVT8BDR7XpyFUt5RuPPM5sdH5MKhBg6Ki3ihrR571xMcW7scmjSk8CG6XK1y",
  "key30": "4QaeZWvkCmb6podTQw8ViMhwyZi4DYchStmZgmURuexJZwH1miLzHMtVtRNybpHx2R6QCqYmGZJTrA7gLHyaS1bd",
  "key31": "4CnM3oJ1z31Egqn6HNsy3374cndbR7ShJ4CuypE93jakgnj9EugNM4hxgHmQtTxADfbs6UeJGkPy8McWis2Lpept",
  "key32": "5YX2CFfYdZc9NwZ4r3pjeihNKNKXTsfshTvybEYmB1QanPvRzcWYx5nkpvpt7iTxB4HGFLwCYjbTwpJp7RFaC4Po",
  "key33": "58vmRr6CcbznsJND1wfeyFBjqmPAbv9SEapcPThsZAFGNacmSqHncBcxMFX9QqoCbmAtNvSxSj9ov2L6RRJWDVmD",
  "key34": "61caoLRff9G2K61TcDKqT5HbRfAn3yLBPqxW1f33MHteB8WtLZTBZtt5ExrTqZzBKCyA2Zqi7xibwoEwXtNThATH",
  "key35": "53BuwTvz4kMPrH14CVvbpUENy5w8KWVBpxxBzttxuoJMA1wDVkfWwmYVfZRDxxtwxT9VkUF1L7vQp5gN9FebB74q",
  "key36": "KiqKXdkJsMf8Dvy5YwzG5UkiaPYJPcave1YnB3XEetuppC2xZse9JPmMePhGbwBcvmHiqdn8qTKKbvnSRpYUYVP",
  "key37": "4M9JQADeVqRSThXrQcJARLdXGT7ezQfPrpTkcyEom8uQsopPcPYGfnyVTJqX7edHBVCoxPBYVyk4u8B1gJjMsWhA",
  "key38": "3ozWTjmWf4qtMP9MmsqpW3xXhLnJB3WvUnpRRQ1GQYcJUdm3Yn2FZuPyX3B7dDDk5m3ijX911aTK57XoBtqkGV6b",
  "key39": "45Dq4SGXpEtmbLPeuVVYDDYVFbPXjEKEtdAyEnHfX2JPJyXx4DFemes9KVr7JQMkPYmmgQ8nL74XvGLZbV9VdRyb",
  "key40": "4jjChYeeXEewawNkVopZfiprbttJNPHuWy7TaPVRDSk1FTABhWTV2ZMbzYTBmMxFgxpPSqFvVzgDyF9uaDgYnJFJ",
  "key41": "4ij84MBJzv7a23hJnZXRm4hqQZFQYKtZiuwDCJ4cmog6wD3yb9Vb7x375qrymkqfirVdNJQk5p4xsgqCzJCL2T9z",
  "key42": "5sZcLGAnXTCTh6DALL5Mf37qnSodDmZzTxZ9TEuS7mgF7GYmAbspFMNL18eFHTCGTbbtKLgxhekz8YWPpYWpFMpo",
  "key43": "5cFo2GWM4BvUoX2yoaDW7kf83vAtwZcHU4JzEQLKhs2jyTtm43gc19ZTvNgUFi9QvusFYsNgC2XeNFQzj6xmteER",
  "key44": "58vx3utwuUr9rQgXxWaffzWvrdWXak6MiAxQuo3w7NgnJEQfgDZ2N7ujB7TSdEmByyeFfa5oagLf9X3Frj3zzr35",
  "key45": "Cr4StjjYYscdTZTfTH3nKBfdzvSwEMsK46CueFv9HLxrzpkHVsFrEC9THEG25yt83iPtjEnqvBHakVQoKDxobt7"
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
