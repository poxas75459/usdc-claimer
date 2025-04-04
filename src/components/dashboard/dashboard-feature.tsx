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
    "2rRDuCh2fLQc1Hesa9dAk214wMP9VaDyW7eWWENJir1vR3LrRPtqC6XM4TzxKih3jS6wCRVxx79Egx8v3xXxd4HP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24yF5tzze4oJCbiyxyEbY5k9v7WKHuKaRrxcyovJNdKouEcfEZW1wTP6VtF7wh1JkjWbJ2NHtRGviT8SVgiNBV4r",
  "key1": "565k4E7hPvWohht7HUvKLMML913f3Ff3ucjPJDiMRLbRS7qz8sFLWvnAytaXwSbPWwwaB1nKPTQrS77CoUSco8xm",
  "key2": "48bokgakJ75Me3E2qKy3bphbGeMdaaf2JQV2r9qUtAJcgJ1rTSpRrR7gdLPWuLnBPanv3it1yjBT862tqghgiw62",
  "key3": "ruYiLeHwdJPGmUqC9UYgK9PFg2j4rthg3ZumStRkLJCdLA4cnmXmj8zsny2zfddwYUdRRtRfpff7jpTh2MyWJLY",
  "key4": "2Nq1WAxTL2dZku1WvSYRYFVFJXmRw1VCqqkE7edeMseZVgDvtjb5A8dA5wzhFENYXAQ3F3hjejH2ohXN22SztdcN",
  "key5": "3pqTFseFEm83i8Y4v9Sg5ZGSeNXwnbmKPkgLhD1gfut8M9nwv894BhnjFrcyPxoE41n3PonVBZy8nExVnAg8WvH9",
  "key6": "4L8jkchsKPy3fjz4bmJQsGqvzzgyR1icB6p1FyU7iAu57ytjebjvRpVdLgNurNs54w9nD9qfPraz3mtFf68UuFLD",
  "key7": "4rvcEv4Fx9Vo5ZkPJoKgNW1fjzxyDNKdxahhQEj9ktiDK3X7G1FPt5oTLHkz2Zkqw92GDyXHhmhWjNouZnGAf1JD",
  "key8": "RoJUC57iQenyURtXvGJdZqfmErNiqich3pcX8ejgxGzSP35xm1W7iRDUNr4GG7Tpde1F4jaNHXPM9AVtFR54LQL",
  "key9": "5iAQVqtLuVkY4uCJwVK8FaXPTDrcjbxF5TJJaoYbS57w6mU4WJqMJm1Yq2P4mDZo6jVCTaZPE6pwNpQwhwcjbaYp",
  "key10": "GZt1XvmiNFA4JBiEqTdJAgGALJAs2YVLBW35DJppgCQcSjGeNcjCnKtVtPNLtvnSTPk7i5yec5ZeKv2pddhK1jX",
  "key11": "3nKQquuQpV5xzzeb5h77P9jYWsNw1UB8fYMxjYy4KPQqLZj3E2Gsr93SxBChnFtcznDxoGpWvdEe8dKZHS57Xy7f",
  "key12": "22GzsdMQKEervrPT4bY8YEkyoL2aTdYT9qoaxD5Ej8ppMMXCPsr1abMa22oFDip3hv8upe94Dqopc42ttHTeb31x",
  "key13": "3PoxabHUr4BjEDz4mtSacYsPRTATJLhHxoB1Ug56BfSZdEapGZRx9siiUnrR17j5J45GXmc7RAMbttMt1xogvVVL",
  "key14": "3tEWs7dteB5ZVrv4Up6xyVC55q38Va44cHHbJEJzch7ac4fhtF3QZeTEQZTCVVpqSHp5upx65QSo2qpADV49jH7e",
  "key15": "Qu449GjL8fgVECViyseyixq7SU2qEiyvXa4xKoYKBttU4ML3qDD9nkeQh4RM8k5gbtMX2EZKXcCGMJM9mbk15wM",
  "key16": "Apnajd7aJe4eWtpGeCBPZR3xeAdorLc7Q8dGzis91FWvUHsapur5F72wdG2MuxQXo7xbDB51a9ctHasGYGn7pR1",
  "key17": "6UVCxsE8N3os3TGKdfCg1q7BmaiJa9k2UZqdSYogPkAReGHExwmhvnRqCEAAEhRHUaymEYNZA4ZpAhDnTG5NC57",
  "key18": "2T7LfTjncoNySsh5wgDy82wdNET3WQ9F8TvYYHns2PyPPKy8WqMH9THhDhzHUY2rGfAQhufP5Qx59uPAcrs8Xybi",
  "key19": "51iKcUcC1jVWS7qCe71UcivM3AfAVU1ThNg8qKCk2U5aRXB4QfU3rHnZHNmrQeeK7AXDQAJbXFp7sEZZMVh64HE2",
  "key20": "2ZnE5Co37mCLQNqPux9wNmrGkpXw9rX9UBesNvDxP76Tar4QTxscDgvJ5193u7FmqVh3bYBwaq3c2xSkeCgYFt4V",
  "key21": "54GLAaTahfmTkzKeELYQUnrx3U1MMG4XLA8sEaYsuFfs5tGz5A2YSsV5m8kCw6sxArYifeWWpzTKdirXEviYRHtG",
  "key22": "2KSHWKJY2A5aQK81UDD75GPTnvGrVEVnmqneEAebJuE9DwvjVVb9RpRkczCWXgEuk54aVTudWqqabx5j5KvCCnhi",
  "key23": "5jBrG93TAn91Wbyg1UmDqyGFru2YYDdbrGsUHepRkeMXS6o5Uk96PGkah3hBV558M47W2PvMqJmMkc22MuayK274",
  "key24": "59LkSViiZDH5g2Gu77hbznP8fAyCoQ4iikA9fnwa9FvS8oQgk84WCFhPTae3jyoodnMSBzqDbdscXw1QtJChcy8z",
  "key25": "4Fvb3SnctJUW3MFv9AsbFC6Nb2qUxqYnXYz1hvzwbQKJqvyuQGJaDErTDr2jJFsMFQLMqeHBJSQvW1LjMY8sSHiR",
  "key26": "5FVaWknHhTduVGNegsVsrcWG4LEvNoTsmgJUHbJM6PX9wXW3F6ZfnhByLPMqvRXJ2PXSfADednt95itQeFfXJaQ",
  "key27": "5UQhzuZhyet3Au353EnWPp8H1nT8YgUCcmsbeWbSJb2No5dq7kt3kMJYxBznBhmwVLkkAa7GAGcArhcPKtgGbEUA",
  "key28": "ucJsuFze8scamWWvb1rcMcScL2A3VhDb5i4xGkARZDeuMgHqrsg8QHrg6fiMGy1s4CofRcW8SRexArLvUTs3tPz",
  "key29": "RVnZhbytcHzFVfkhNrDjTE12p4qf1DprerSXHbRAwgUvJYfRShHDpP2tQgvdmM3FmR4VQePKKFopfckAuD8HVph",
  "key30": "2EZywkvBUwrMmzP2coSUnw5b4GfbDWwR4u2RK2yUYmHPmmtWgF8hrabtLM2eg3jyMYw8LmvLQ6xVBXFzURgDuWhq",
  "key31": "3z5kQmwDsnjECq1UNxge6E6cDE7Fu1P5L84q4Xt8rqYzWguJFLo7Wbkqg6hzoZxNKhv9wZPX955zr6os2Y4iooMY",
  "key32": "21jxLR3JfjnggWiNCAYYoQDv6baiTVp888ZPYZDSFVqGvxC6j9pBGEbuTxZZAPkZa1GCvZn8oxjWAT7JAyUsHCt4",
  "key33": "4YgsvRwiQSpTMisVB1mySjKKU44gTt2YUtUmAoXuTA575626C6XC86vt7ackpNJ1VDwPYUUDy9APS4qw8xSKWDBY",
  "key34": "5fksRQFC9PjJt8RS9f6JSGA1Y52VFtG2xJi7LfrLiXe65Uz3Loc5RN2VGZ8WRDVsSgaJGsREWtKav4a3QhmV2h6y",
  "key35": "54BQSuQ73WqJ7ECgKiv9RYVch71PFjnfJHUcKTUNkWsAiXgzr4MsB7Y25LGHpM5zUn7Q5Vuwkh33d5iXe9Zx8ied"
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
