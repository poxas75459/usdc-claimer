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
    "49zNSx7sVbFxoYwVsEg2KUxxGxHH9jmNsmkQHURjoNnJA3khKoGqH7SH1S7hatLQe9Ra17KCWZcsJE44xjkM2o9o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jGhyj4iQw9p46EyZbPMzQeTpgjibyKyjfJTaXA9P74gkArSA8EXisdsejV6tBXfftDwAyLQg24VPsZdu94Enj7K",
  "key1": "4DAQvyaG3jmJzuc773u9nKbcTZnhhgQDhTaL8LoqFb6ji5xs8qMP6Wh4Mo58trDwdEJs1XjCDgvgkMo5FniYgcfz",
  "key2": "nMn3EZZHzaokCUtotzGyJ1eMFj1aNhg9dDzZ6pZox3hVRjjCuyBp7Ynx2x5qT7puYTB54WH13eixx8HAHXt6voz",
  "key3": "44151414DZAKcQLRGou6EcKYhxmFETYReKDV7GW5qMJSnBGThH3V9i3QwaLizjwNMdrfLYXaWCmTL6LrJgLbCCzj",
  "key4": "4Hr6oDe7D1rgqAjv3yGhUybe1FvXMGv2UDveWw8QpQzuGEmDAshafPo6JwWfeo9gBPVDqdiB1ft2FmY7oe1sSW4W",
  "key5": "4eeQNCwW8yvbXPcWsMB9iC7NYveFaPWn4cqCuqhbdAb3ZLebSmWQQin6C136wXXaGv9DeLhPxLMykViBtpTYNLjP",
  "key6": "4s3wsce4WhLcdwVwQS591dDhCHTyswt7ct6A51CC6o2QVK9X4sBmK2u9Uw7ugjNivqr28LGQ57egRkAC38X3xzAr",
  "key7": "61Qchs5PLBzsGxarTJyuXphJFF6YbNqWLFLobQAVfyyube3ogG58suoT4nkrmMvyJsWoQwt8ZJxXE4iXNJ3vWbhG",
  "key8": "4LESbKd1DJ8dnJHmkyjgnGn9WibVc76Nwb4HLVFqXENDNMtjHdGrkGNKLViuKaTWPLhApCv9SnRw32wRNuT3uWi9",
  "key9": "5ExuV2CCaA3g33xMwQSKL4QBvthUjrFc7nqZC87eJkSzsW4wp7iu3mxKotSZigQgLYKW3iMDCmp6cxjAVajSn9hC",
  "key10": "58wxth2UwADKWo6Y76iYBoigCH2QwGKYzD4S8AwGLX5kM4oLHBxk81VbbK1KMasXxmWdFpyTDPZyGYRscXf6faWL",
  "key11": "3Qp9pzohpevaTPMKY9BvjYmud7Zfr3qwRt2s5eZbtSW2GnvJDi2VTkDcVZ5NoXBNDmaYNSGBrtP5fpMGdVLwCHcN",
  "key12": "5PTVEeq9NatpdQtnpWTGeFPkjdVUdGhbwz9cntHkCiE2RGL3WVZVastPLbMuHSWLkskrXaAqihKd8Gh1Z5UWd3Uw",
  "key13": "2cWWmCVeFBY6g6Kin9VF4oz7NMnmwfQRqtQkzesmLXXJHy1U5FhK4ZxNq5mUn15ir3n8iyGE9jU2knWj9AL3UGdP",
  "key14": "3QRua5juWAD9YE4nkC5weX6SSLUR5KcTJcixX9VQ3c8YSbFVwZxXrr9u4dhvW5h7HzMX9kSpDMqw338CpMixkBuN",
  "key15": "XWTRBQqAmZWh2VQCeFZBKzK8fXHiXqi1tAHfPYkyJdyLHi7VAUNkHxnv37zAoCvrdRHJhSG6k5BMei7xwdYrEuo",
  "key16": "5kmmEsFSY6PpBnohhX2zHCMteaY6RcTtzJLmwbzc9nqD41qKrFwYimd3MA2QHCtEFfZhZdrEzrNBjhAR5D7kESYM",
  "key17": "iEMuSnc14tjtcwxeDV56qhgmh9Z6MMWaPix1fvSQ4SQYuR6WPbyodztnTnoLmQXnrBAGHUnTWXa4oZfxcVALY4f",
  "key18": "2j8kb3LUUoEvMTr2j4512e9xJkG3zBD7WXj8EwE73KpY2dQQnxTWQugVx3QJKi8BzQk6KEM2ZXq8nj8qKJfKnkWA",
  "key19": "3Z9ykvwcxud2EhXSLqSiScWyCqodsfeQwWXS2fdNKWEYSEPXidppN9RWy4zVrKF3uZ2y2gQJdhfS4ZZANff7TuwW",
  "key20": "2g59BEEuW9xsmGFB77goRRfMLV8HSLRwEmwHYpVn42XTKSVaM12AsbXGWJJuchfHjJDyCRtsh547ucnsEcGygEXe",
  "key21": "ZmPctynApHkzJWVJrQ7uRYFjtzWcTmnF8o8JMcENYrs5WykZbmYw5Vw21L6d6SoyheehDZrR6uRgRN3CNdZWtiA",
  "key22": "41EJSiCUsb83Jj9xGo3irDM2od1bgGKeAxbtj6S2XcxkjqAgGsLNS1Pg2qvxSVqcjszArsSrvCrnso9CEKRwckbT",
  "key23": "yxyYtoB9jTnEXMKjLTZwdS9GEXtCNi8NPpXBo6xGen4TMZ8LyaWYsb5giCLqBaQ3uDUW3kJiZgBMh7wtXabRvRp",
  "key24": "3DQCvgb3HZ7pZ3PCswt74Unj5XoSgyphMG1kcAoQdHvsffEZerjFCBvmtdaTmBFA8v4D8G42kL3aExUT9Eb1KQ7q",
  "key25": "4yo2i11hbULHuZFdpk7jSWw9opdqXqMbdiuVzSchUG9et6QQWuA8ngTPrHoYWDxGcax6wBEiV5LwD8ihraB6cqB3",
  "key26": "3h5unob6hbssx5rK1pciPnAZDdaxi6QzgPY4eoriP1zFr6JpXzHqtJjYZ3GhFzsHgzPyM8rKtevGtm91kWeYoyHw",
  "key27": "59E3JKjbe4SeaFHz7tkPvoY99Ghnpmii6FwZ9S2j7kwu6jTm5jWrr5A3VF6Uft6AQaH8EWAoQC8sjZFjWt8VieVg",
  "key28": "2hHed96gi9vMfNfTVZe3pXy3xKKL9eJ8X1oanJZetgfZBPWPVr8vmJfGmhj1ERP7fzxrjxgWRWb9DJfkGknEYNw4",
  "key29": "2TAUV2zshTbzAHK4xPBmp92XhQP6CnLsRfYKsWxPpaUJiMXDbjH8u2L4h3uLMpQ9yLMtZmdbkDFjKQVwabnkoviw",
  "key30": "PAEL5s97WpHjtG5STnwNfcsSfjy5qfXTxg9n9NMmjfxoBkZ5uY1tVYqjBesrx7vwP5X6mBoQF12gWGL1dKf7vJb",
  "key31": "BE4wpQ9wBkvT6iqiksfF9SrJtosE5bbY8Av2D8w9zg3wH2WRZSBgT1NXu1w3WpHXFtKDtFE7Ki5e9Nq4PCFVMHu",
  "key32": "4eQ9LpdTSgndFhsZsmHgbCs4dodSDTaUiVCe68wykXkzNedxwdyR2gMCHoKAvKmtsbcbJo7yLaY6AK5EzFDbD83x",
  "key33": "485s42RQLWYjAVD6ocNDpU3gLB6byvpR2Vth8fCHsN4yTSb8NjWRbd3S3iL3SukuymVj7QbMyUMbDsyGXCQ8U9E7",
  "key34": "33xrGDiSkYT7cF1X1ShpgPu4WiaiKKJbZ4hzCRQThprhcWto59FPF5zpxXxXdPAnBcM14Eakszucin9TVSHV6TMc",
  "key35": "3fRPZL7PYCA2gueb62P7qY626CfEh8B7kSXU97HZqi6esS7ubWEchnEKPZPA7CtTJoxgxW8CGf5F2B51o26voGVm",
  "key36": "2qoqLLkFvBo7e3EDTkCnByqiho5bpT6wjHQiqVpYEdDcCm3Ri2KDtdt6YHBsRStZ1R2Lowh77Kay76HVQGWJD6Gu",
  "key37": "41C4MkvrWMiK8PddrsqGb8JFmGKp24ieZhULeCzh3Lgb3BbuoSstk9a28mx2W8T18fBEDtgKvi8b7Aoiamw2Wh6w",
  "key38": "46g97VuLVyfgePSWGMZx9rnN3BMPr9s1BuZwSVt83qQ5JpyVV2PyrE3tkWtxyzqVDQPEGd2R7831cqmN76B7tf1J",
  "key39": "5efyBjGKh4bwqvxdkbSurCKj65db7YPG6uwjh2VoGxVFcjwyUd1dxA6NBnAXnvEpH8Cyqz5mCGc3b6EQqs3CA4C9",
  "key40": "4oZ8WDHsZh3zW7o3vMZBPVxzfvpL6U1m1qZ5NTmamqrYE789ttrVLdUYbecKig9ShWHVvJrgZKcYWC7n25X7kURr",
  "key41": "2v8TxDfedkouUNVxuQxkntHjL4NMbCEy1u6cdSKisNo1d1LBdPcgfessQPjxtisd2gXCHSK8chPFFDxGZQBxyvks",
  "key42": "3eT2hHVqAMGhXvuPtUYwLzmuK2zWPrh6vDGUh92ZMpVMcW4NSJmNoZX8k4noG7YY3S2qAuDpHw1P8HJQjB3VCnMU",
  "key43": "2rDY7TBassaDTAYDKevFJyfZfcbjSZ1jayXMfa2rCRJ4MKz5NTLQmcqqy5WV8Kd2UtNP742d2sxEAuBX3Ci8UvL6",
  "key44": "ipZEXSKdUqzrusMM7wuejYWVEQW614LMi754kb11DzHpXP1K8MyKu4SuBeB8oSU1ox1K4PTvWHKD1JBHjbEU7k3"
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
