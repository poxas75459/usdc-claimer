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
    "48mv1KEXR15BECJurN36nF9Quv6oGhApwBrzHJtXcRqRBu9WuVudQxxpNnyoobyU8JYJvkezjo8RagwKbSXoJ9eJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WVyYfNTnxsEbLoAixj1Mc4QCiXvSNAgBRNPLB8rsEtNdeVAmS3fVYZd1aQKU8VRgv7ogLMWHyFRCqcsg76zCZZE",
  "key1": "4Gqm5iuArsEtaeFPLp8bfphYpLi16KjS3hqpiipXopNbz5mRNaWbqa363TvDKafHtKeTg3pBt6rGMCmGXYwoED5F",
  "key2": "1Tb5gnVonKkc2CnbtuvkKFEr771Rzb3aJMMrooBo3WcKsErNpbT9DhFVvatJSdJroDauKoa4WvU8X91wZ2Xr1qu",
  "key3": "4x6mamkymEUEmDNLmZgquDKLd3mmKeqCCYnC4P3k5EW4GxHVEZmfBTTw2GG1YttTHGoYkTNVWZja3KudQNqUQcJq",
  "key4": "2Gk2ckD3VEM2w98BL5a2p93yrHKxS6vB917h4Tta12GZ8Q4eLMjunMWZuXKQZLJDw9cHKf6adjC7m5xjVkAChS7q",
  "key5": "2xUSYCQ71a1z3gYibPfCR5W9aA2mqkttFn43VJLSaunjDKRxsTt9Evbpvny7nfgTKnxa2PBErskY3eZeDc2Lw9PR",
  "key6": "5JPvu8vpQvBqaizTE9QaKSBMzmQCyer5FiRP2zg7b9ifhtM48CNyaebX47vRkdFzTbQrUzeSkGqhDWLn9TdhEHrd",
  "key7": "3okLVxwYvpo96MjxUWV2zafmp5HxJoaDALrTF9wBdRVNoZsMiTFsnssrnTbYAZTfBoTCnqtm4EJLRcVSnpqfKfrE",
  "key8": "4xXoLnNDzBw57aZ9f9HLtUiUZF1QSHrcJpLRJ33WSBb5kDHz7vuXrbHgeDkurBSRJTxawo7W7ZXRxBpUDVxe9TUx",
  "key9": "2bQuX7vQsdqP5SoTWhsrb5kVjmC9Vo9v7m8ZzeefVdtd2svj9r7Ys7tBCfigM22HZZef7o8nWMMdxjRxHNy2Q6Ew",
  "key10": "5HQZZ5Nkyyazq9LKnTHKu1DbT5i64SghawVGTMDSPG3bd3zfmmMgisQDRBAqbVvoPEizasfJ2gcMXyq7sYBBfqq6",
  "key11": "5cRZHXqMJJVirsVSEXcsrFpdvjSLocJYm9aHt9cXLFHUeXvY7ThLwdB9E5xFw2zKEqSJZ97oPLLUU6qiogbtjHC7",
  "key12": "378S1W1Kx3uCAvLcL8ZyES94RbLLH5jq7uYXusG5QG4WystdQhZ2dyfD24LmNT7NVSgRf4ft9fLZEHKVnvWVEEdJ",
  "key13": "HCKznWp6pkEaGHibDf4E4trBH4ATyyumvLomwaqzYnqyXrR7tThTa6tXFvYGjMvi1sd9v9KCBUMLqsubw2zn1xR",
  "key14": "zKwQV4QaqZz7M4Mfxj7s5qssUYBq5dWhpERUq4GFFTM9whnKgrQSPkoxBuBSYtcipiqZApyFusvk49w5Savsjq6",
  "key15": "4RX1bRTnaMYTKyS1RBdSErTFyW3jyHAEgxiUoQjWGM8mZQ29qQx7FXiZNCxpouCUvEDy52ifE3Xo2Tju5ZbHrY41",
  "key16": "qfL37g83TN5Ek8u4iUgSS3VcZfRgX2wUtGzDGaASTMGdpMpQy6mDewJzaAGviKqmkQfMEifMJHS59aHZujReGKU",
  "key17": "49X7JRZZu5yUyyjqhqCnYDEk1k7iuvynC555PuWtmdyzr5NuZKWzscxxNF25djrq7phYbuMADzMRkd77beKmGj15",
  "key18": "41L4QQoxGaTQ3bZCZmV8weHGxDcPvByFmpKJcYTvVkE175UgdE74cDgkp7YGdXA9ARCYC7Dvrs88xquECVLkMrJB",
  "key19": "5GBwLHuuzB9AQ7SPGY2SkXNZQGnSJJzHNNvDKNeDPM93VHe1gmwpN7DdDdwdZYH5HHsN3jFV34yC8hVTo9Ws2EeL",
  "key20": "2Y478cGZEcyHB55QKSUH9R6SMjgZh8uyTMJVQaFD8EKHVfULmHkFrmD9uSsSSUkivcVBm8kKPY92yJpbFmX6Qss7",
  "key21": "2BhQfR2ecfEZGTYYpCQ9xJ3frMDBp5FqzE3P8oekpQgut6A4em1QLNZnWs3pYeD1tZkcpQbeRevRMaVYMvLpBWtv",
  "key22": "3JQ7de2JRLNqTN8UMSV4co4oyNDB4DRGGeVYytiTQN69z8oxx53YzLaYMUnksupyAeMviMXXBKknxF7KC2YQcGP4",
  "key23": "rwmUS5qsKwR7y1kbwmCPSeAUGWFQxuFkowvMoXB3eXVpMSj4jZG3W1iySGy5KpVwVPzqtMeyyPHLo9zmh8up9LE",
  "key24": "45RFiTseQMfK71uEw4GN25dNfjCcJmsr74AhzFvNb4PVqPifhNR8i3xdu2oYgVjoTMD6LPFkm13z4ocXDs4atyXm",
  "key25": "3o7AooSectUH792rUUrwjTATBgPJEc9kNhJpkkDhARmqCfykUNkC8MYSLqfpBn8iijWNWU3jva7n61aXyFUS1ndg",
  "key26": "3K4w5Tc52WcvbXiWqRjckL6fuRAqJaqjbT8cB19KiEHwqjfutiHcZDiUaDCvrvsu2iXGPpgcXVKK4AWnosvMokMB",
  "key27": "4Z1YnABEVnS4U9MQh9ZCeUEBkuw9xfHsCjK85FpyUBA3HjdmQ5b3LxMtTxUBn7q6NAha5ZNRr9CbZqC571ZSS6Bg",
  "key28": "45W5unom7uhwdCv1PaH9517miTV5TSPBkAvfwp9GtvBVFGmzBzkugLvm5aHtwyzp68HAFu6xTfWyuobcXmuBhixx",
  "key29": "67mWQbU1vEP7bKoepe4LbJ2fUqp7eJVGuSP7Hbbv1oyEDej6WU4scwZpV8yevaVWvA7W3FLyXZdawSLbfAoiCda4",
  "key30": "4YQwjS3WYPDoTKvqCZj46Kvsyyn1p3jZstFXo4KnrZwSSNar1Am6Wgayuymsjgv8oUf8reWZsjtPxybNfNKaSNEk",
  "key31": "4LHLkp7w1RGVMwL6Do93bbC7YVaHd8tmssAaMCaeD3DjGJWbdBtUNsJKepipUx8aNizu1zEcHhZZBcHsbYaFeSxj",
  "key32": "4fRF9RCX9izXtS18H2k33GzVHAethXmqXezcbWriorYtJGicpLuCqN815mPBGi9J5HkjPeFiXP6QyxjLQoZbQFPu",
  "key33": "5JmABQh7q8u8Y4Zib8M9ckPpcKSfhrZjWdaFETo9pzKynJLcmrNnmygemkAxqmKDSFEj2TR5XCQsgyZCwTCeuX82",
  "key34": "3TvXU3C7CmzsAZnTfZEo3gFZKv9jJU4Gi3vQBCZh3rhmFU55N7kYCJuupobSMSsyjsUVjrqDwd8Jd1tZZ7im3KgZ",
  "key35": "3pCbQiNYQJbYBxnAgvTbp8gCPFDw5djRaAQ4XEwZAJo9vKxT1etsNLdBgfjnXDbC5fupANgMmTyx1UZXYq29DMNq",
  "key36": "25WNiV7o5vatDB1juxZqVw6XB3tWN3yPSQKZgdhk9UUYEQDrWTptMSvQybBFpBHFYBYrzgapJPpJd9wjYbTEdVKS",
  "key37": "3nMZkzYLjL2Hf1qdC5JtTC7MHijrdzrvVicaBSLwqC9vVCuCktUzN4DRLX1So9reVYE98Jezgzx2AinFfjTexgih",
  "key38": "2F2mThZXN8vej4RNCewVXaxNXvkjTnFZGNwyCk7ev2q1zh1PMbUhGHG4fY2SjdS5oHDq2JnZRvvzYjMxGRBjcgc6",
  "key39": "55mPc55cQZ1msw7K4cPjkRkNQPesX2Xiucq5UFqtdFNSv9xpiRpgAbSAz7A4DR4KutnY8KsVSPSJeCZyaXANLAro",
  "key40": "5f7h73nBoboQ28ZBiVeG3Uv6ZXhxYbG1Rsjsnxep7LfXKY56Bo8jSUmRahDk18iZHfAEV4Z5FE1GJH71ZjiK6U7B",
  "key41": "3ivFsCEdqrH5QdenR5WmwrknyNCTk3USzzdPs4fi9L2fmBrADHc8kpdDBdnnHgnRv1gLBThFjzqNhpL3ehHkt985",
  "key42": "4dZcEQV5AgRi67M6xp8yycTx7hVfXeSART1tXTypq9YJMx9vpAQvRwFsVt4PdMiQ25HBhjAuHaQxRi91J4aHSP8r",
  "key43": "2nZ26Bbon7n6uxUeNhqyeDZY1VRs8kuoFfQDJBzNxXWqYKiajjmyKenjRx1NPDnPDLrCySM13zPUa6uSFAouCJFd",
  "key44": "5wd5ewHrv9VbaXukEUEx3ob2zcVyLYzWkwtKne5Quz8ea2fhhA6ryzT1m9toakAbB2ASXePXXvqoznB53UVLpzpB"
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
