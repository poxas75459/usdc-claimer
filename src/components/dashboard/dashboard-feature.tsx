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
    "3yPo1xqF98JKpaRieUH5UdaE6p6UseFEextsZAqTTj5ocnxLKjART7yEadxC1Vk9jo4VWwKXpoLKEXxvvmzg3d4Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GcqP2yzcJgpS6mBm16cJ8xRibF6nuKHXyT74v5aSaYSrdQtpfufhPJM9sQtjFudV4MGm6MKAgHYoxm7zZrmA6cQ",
  "key1": "2YXF739CxSK3Eegh7iu5b2e7t7zRVTYMa9n8wCKZtqkw7URwjwfNjg85F1PThtevTQAjKjSyaBeS4gHUdbPSv5Xo",
  "key2": "2AjGuRjt8BTpXJvM9qc34tEVu84Vg2MgGhksuow8Qwi7KVxLypuWAehbTc9N3zHjqkhLVtLiqYXtaeaRiKRwcPix",
  "key3": "2xCnY2r75t6bCcH6Z4ENcLK7osCw9z7UMvXGbBdnMv2CWNX6h1Ra4bDJY22ackCjriSNfSuenhf2AjH8ZaNFBuYj",
  "key4": "Ei6TL5xo78NppokTFo9CVbzYBxZqJkA6r59eGsPrsaArZWW41hmF4UnZMWZJWzzjEHGmJJscPE5CWw88uCh9QXv",
  "key5": "25zfaEvLyE4UX7v5PTJtCSjCdYwZdwRcRhMrCPNfdKvtWaovLPbmxFRrufyiUDbC58SSx8bCsUy4fM4vJBya3osA",
  "key6": "JsVmyG5XGSTM33tcpchooCqzxSNdpE3xkigMyWhY4VYjcUN4ftCwsuT9F2ur27fXQT36wRjw6WHXKG9L5jcfgde",
  "key7": "3fjnqvShL2X54BsYsEhzJKue6TqQbY7b7jLj1E1ASR1hZsGvjwfZavfaNxs3jcCThYJatzTY566pyGfLatQUW1SR",
  "key8": "25wSXPzjLUutga8sTTHeJdpt7xU55YgE5ACCG9dKJ9usfyH5kyB4VNL6SgFhGQFpJ5XMuoK8VvTm22kSdk5p8WNi",
  "key9": "boUbbzviEsCXJ4UB51mxqjAVKr5QkxGhNaFyBuQuLq8xksPQdrxdLaaB5u9mDhmsG6JvC9dT2kWRxWVV6yypvb8",
  "key10": "yv8Y3ZT1STcxY3DPQYgBc3mSaaTd16XEexh4aMwu58Fcr5x1P2N3ghDSvriCGswP5B6Vi7VLvk6ruTM9mDv2S2f",
  "key11": "5iFiLxGjmXR9iAsiHnNwsuaNyUXsKcEo85wycNt64iorzmopFw4iiLbV2gtnnUZJ1sFSou1JcKjD5W4y21fxNrVo",
  "key12": "3ehtawm5wNiEbYCqQoLD452acPD9qDgTxLXjyhjQ3Ee6LbeSyYAB3WfG88ZGx1t4TeriBM1ns77uSGhmDdVUpsj5",
  "key13": "5hHTg11kMcWW5xojMEZRBWoHUtuacBrpaJ4Eu7GRE3j64XanVGGXh4YSemryJHh7cqTCtqnWmoGMk5SmjMLhHFkB",
  "key14": "5zBDi3AegfYDs9UZoHGiF7w1o4CoSw3uEGMm4pysrywfjMFtGBiA5i692bcrMkCRLDFFeKJkWTMTKAwNSx2YPv9",
  "key15": "2BtuXyBRDrQNEoW2QjAA27JwYFM9bAmiVAC1KSTzxGyK8awmPRgY77rrKEWkkmRUcVzQZTxV5km7z2rW3aaNidQ5",
  "key16": "327kqmAJjsCPsNYFRSmzLKMyCYqTgg2XT5fAsBk7NTNMKhnkoFwFgEKJeEvwP8a1GUywyJftjnZssJczRaPBAHaG",
  "key17": "4qhqXxNVaWhNrRHfyoRDSDTwcJFbTi88r7JSWMSG8VmUwNYQssppKYtUEgYmbsEm91hh1hwGZBwa3QuRDypFNSLP",
  "key18": "5mmrKttuJuze33kAkpXcPL21vTvYkGJSMGSHR3LKDDvz91yooqgSvyoGuv3DtC9a5w6rurRtWSBNyU33rAbQUm1",
  "key19": "4Txpfk2QPCtj6ErpUYgSQCxhmRCMZ4r1DG4m5wnhyKRFHQps5dgdWdamDp1mQaqoqjc78CA6YpSknSnb4EGAiy5q",
  "key20": "26CBKDBiaSR3jKYTtqJvtPmrPRtwWPwuV7ZkmHoLAgCRVWmCRu3BQKzYipHsUtQqxVxhXzRTWXNa5pxkLZf5kb4C",
  "key21": "2cWirfb9aSLJ45zoVHEiVD7EYUTrYEEpziPNAFw7CdFcv7deWprVRKu7Shy9kPLVRSQ4F6TNL2cDLR9vV1yCsfzu",
  "key22": "2NyLApMShcxA4GcJXMZowpYGFm59kAj1hwvqjmEmsiui8wsbd5VDo4BgAY7hbYYCPQ1xUBiJbu4fqmYaaAvMSZ76",
  "key23": "5sGAeW1Eujy42FpAa7dYP1tZoHwZHfrsbBVfBeTmiySJPHMbNbGxaijSc2SRHf5W2dfapXvT4LdvTW33S9XHhfya",
  "key24": "2vM1PWGTeFvCd8zRhjR1DEEH6nDJk4AvkqR9R7WPbLwQiQuiSvhErUoH5oAqauD8F8AZJFj5ZzLNH7pzdCCyA8Zt",
  "key25": "47BcmQJqiGabHrgLn7RynJQAYcah7vMbPTDoS3KWGuLo86FMptxwztQmbcC2sYwDqLAokMY6J3xZD7ESjvauTe6t",
  "key26": "2VCT3iaownve4zcMQHVGCDdwtBowydDMBZUgMLnj98VmnemFmRgAoWTuxZ3rz73gL9L24xsNY3EjBqiXPj856z1A",
  "key27": "5RMGdPw8Fy8GCfXE94owpasZqbsqR7LZMRcEXQTwr2EX8yuys5uSffH8WxZcynpdQNEcXivfqAn9AtuseUp5t6U4",
  "key28": "2DFAzYDWjCwYZbSeCF2wTXy8yDrMgWqmGZWN5w1S3T7W8faiMkuFKCRQ2BcBDBa9QRT5kwujaRw5SFCr8kYMRu4T",
  "key29": "mCRHR7V7yhkTXJnWMG3vivyGTAGgpDyTWgm4FW62WCoRiueBbuehbg64voaqJcV7NnLDD6KtGyCa16Sjmh8Bz4F",
  "key30": "2GURf2VmWvzn2xTCAjoqg5ykNYEF4sZ2iivHk2Dux8tKufNotAmHSdYvcBrL7PGVhMvC8cAZis62tZ4KfgPSP9Gj",
  "key31": "3SDD8PM5XjD4uMSfNwiqsns5H66DsUct1i3R4DLZKNmgoLY1bezisKjindP9LLj5mYktrvGwFCWMgNe9fDeunpZo",
  "key32": "PBPK6w3htCEt7jCK6LpQPVaqgBhcLmYea6u1TwDZtZXUV15a4dwcVEhuUYKQjJPcTyBjaKiqFjVaVeaWj2u5QeZ",
  "key33": "Yd8g89w1q9JeCd5JqwnpymXwmrZhQbFNqx6ticCePbxG3LvgkDvzdviLK4DcLevbt832XyqPAzuxSFErtyE4bW4",
  "key34": "2qdu1H7EJnpnmKW7k9W8JBp8k9duCKPAc2AHZdY6A1x8krGkkMtyx672SXmL1YP2swZgWhtMQBnLbuCJV4Xs5qCS",
  "key35": "4jY1XvGDdfQbSMyh9AnKJmqYAX3YUEmezx55cziZyy9R5U36bQXiwE6AN3X4YuFnagMkKAhmxLVSvrd7BrWbBPd5",
  "key36": "4b7ixqZrErXFQaD869X5NwC5JEYF4GzTqfVg5s27b5Yj3T9Y1Be4MhTBkHLNicvsctuiEAfSFMc1esj4jCV2a8mS",
  "key37": "22Ky7ysUp9mJqs5PXUswEHsTvgr5NTHYRo3sY52DqhbXB8Ni92WvueH2icdpugbeReS3Xd8vwHrd2SxinWm5jfgg",
  "key38": "3bSkkUAPPc2drXbG6zNBnRAzeeJJG9RiT6juLaZmKSbQFG222QWcU6WRMuo5EGNsbSnRfwzA652QoJsbk3mNNevE"
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
