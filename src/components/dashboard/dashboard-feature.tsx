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
    "3tcvgXjiiT7KwGgasv6SUKnkGPKHQnHZoyJ2TrPqLmytm7tZcEyChziipujTrnn38dzEsGJ9gyBrfeBciEJB3t8X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4St7okt5Rmw9JGEGvyYWycqYsDCHCRFy18aqRzXWJA5Gx9JtdAW94hrFRN416jak5x1Nc3RAq95db4RUXXD8NKjQ",
  "key1": "63vV4dj3cQzNikVTsyyBSrSLdYb6V13yrU8DosvmSbSMLE98ZG1bxscEhC7dCWYB8wBbt2MTSnDpcXi1jD6h87kA",
  "key2": "3C7Xtv195J9FBkpG7bQXVbntVmonAH3AEg2RoVffggwmY3d98LFDi6VdPHfiwps21yvuWJPheguGr2tkr6JmWcwH",
  "key3": "2VHUTmX36kj5uCR5Bzc4etxEkJP8FNPPvKibvVSmhLb17U5FcfwDA7vk2rn3D48cq25CvNvtfTTrLdoJogmcByhg",
  "key4": "4MpQRWxqG48wRemJZahmTXqrcUyX3UtjCnFp1EUD5BYt31gxWcTE9LNtDwphuAxBQpzQnbTRDVNUMUvruTF1PH5b",
  "key5": "5ZdMdyagCgRvt1bPETntQ26ZzsVnziU834juYhStWXmT4RbUkk6jFi2UgUr9BMMdePjUAwxy4jgFmDS1FLYLwZqx",
  "key6": "3wKRSH319K4zCwLqzm6hCv1j77GkAF9GBz7LUp78eSLBs7MvFtEVBk6WGKzfgFHSFVQTLnR3C9U5rkhTnpVkwWyo",
  "key7": "2C1ZBo6JwBCxt3CqQjq5tjy4SkVUUb3RLpKaXer2ecVPbpwsGiSnfXxBBtdxEuRGasJ8oWnMVnDqPovxSuz3XLaR",
  "key8": "5SETCYL1paQjYKmqujvzQgxZXHbVdCmF3wpRv5jt88bn3LitnEjLrcz1zzpAcMttXPNP5UGEFXeXdz3GtRR2XgXY",
  "key9": "DiwngGvQ1mxgojaP9HMDSoPfiosQ4wvpiL41H5f9HwSQhRGtfNaY7rYXXarfjaBbVspmDfmGyzTRsbR5MecHCp8",
  "key10": "iKUMp5L25bbqdVbw6FmKfKgPiXdTrPkJTd5fV49D5X3bH1YRgMes7eWRJyzt2ZK6GdcJeX6wKQXbG1PXypA3b8o",
  "key11": "4kGcAPaRYasJ6BjqiMNTJsvjFu48dM1YGaTNiJG68irs3mnJZ48ZEHFvf4gJzfy5pk11WsGqyaHNsHLMA632FKSo",
  "key12": "2RXbpyghGZz7f8tNwrJFnyPpks2wHFujokkxvufUUrYdmrVpYqJcDQYwQBH4oVCL9x6cww9zUmmUQWPHVHfA43cK",
  "key13": "DuGYEWUzsLPziSKNraFJLrHi3scb5YYVk69uEQcWZH2UHpoxrj4dmMu5e9K6TLCad9Lh2eopUMaWApTpwVEXPYD",
  "key14": "4n3ugribP5wzy34A3KWki5SXPVc7hSEXjvACWib9EoeUbJoptaLwgXB4YC19zBJfpkEFQbPT59bXC3CXtcHQQzay",
  "key15": "ubBnri1GUiUxaz3aJauM4zudR4zNqc9jJx796zeaD4weyRCCjBET2MBoMYDCsCgZp1D6R7yPEVjBzyw6Zggbhjb",
  "key16": "2jXYqTQnXX1sqmh3hYPPouoycMJj6eHnJdppujV49w69PjgN5Ae8uqi6AKsezVmvucEwsBbmrJYYAvtMZ1dYtPCt",
  "key17": "gYTfCfWr4cYdNvC49jevGh2cE4qcjsZHiWP7W96r4rzUygktpQY9ym2QQPxR2d3g5uqAo6u8SHPoP3abGi7eYWX",
  "key18": "592CuHMGBV8DKKLsi5p3hwYufeqHgEk8MeCEtc3c538Z71SG4eoXqTviXEZZvus9DfJ7UYWxX8aX46GXjjPYPugP",
  "key19": "QUdiAy5QisGxnpTnodmZa3FnhJQDT6WxUpdsfGptLPiCN9UhwXjeZhDCQecG98VjKPMN5Jj6TSfXHPZBSzND6Ns",
  "key20": "2qXRF9jegwzYRL4TstUbGUrwbhXe7YjnFjcjNoYCDkB6nkMUxiX6xuyVptpxu4PicZcrFtYVuwigEn3tJ5NNufaX",
  "key21": "2eKDFgxhKiPoRbYJgmdHHydTZKifj1aHhrvELq7iWauvWSYiTU8wcdu2RGMEduT97mBihFY3nSNq92fXSrsng41V",
  "key22": "jhgDJHv4cz1sWaZ3TqQ5HHQKRsaXyFyXivAZ5NphTSkWosZ78QEmnBWGmD3Qf9FUiUEEXVT42QkWp9dZAy62wzH",
  "key23": "QpH7uVFsXbQDxApN3BYfmf2XUPSwpd2RsD2YEx63uktBWuLAH2DPs42JdQE7zW1RsvRUsaCsfKNbmKCzBr1S6iu",
  "key24": "9Cmg7sYVXwyyNN5UScKKEtYYNqpDqoCkfjHzvuDp9Y2pYA8HMzAGSfVExAGgcQDBD2wryF2vDYuV3y653wjSFns",
  "key25": "ciR9E3CgvdDV53BXpx8yN8DPBJFWZS6ngFRc75zzgo29unQagha1428MuFzx39y35xPPawRTcVWgLZ7UJzL5Bss",
  "key26": "2ewibYZJDs4EwAXLXLWpEfxXnhwGGgULH8hv2fezaqdJBc1iXSzao6euc9uHWyqxi9CqtdG6AixRB5rC7udJPS8j",
  "key27": "5JXc723GzAF4QyiiKAgu51sDhuSCbfhF2SWwELaLHmesktbGSXeMeFUcEEuvqYxJbqKRZJQMB9Gyo1EhLycYeQXm",
  "key28": "2SHqEtnHpbqPvQMjZTaNfcVq7ahc6PpMQMXW4MFauwG5LGXzRr4UGwJkECaYFVoohuW6Hu28brUmhsPCZKcy5H5c",
  "key29": "4z6x11bDqGvH8LETNiuXY9mEtrAXuKKHY8hiDiwvpVRMLpXRqy1B1L8L3zTRhhbJiCsTpXbDZ6CT2z4c3Uw19Zva",
  "key30": "MBpTjFNwCoMViqPsUJH7hGSw5odjrL4upGYKquvGTUmhDJhMQuyUzsVpmTYpSerhtxz6Z9Bcfm33jLvCwNWXk4t",
  "key31": "5ADogmXQ2LFfDWkEzgpXsgT9cDMsnToTNRFMVEs6UgCpEREYr1VGKT9rtxNEzbonuPB1bNZs8LrUvXB7zWswxYCc",
  "key32": "42EEautv8GkziThHMiY4spSxVrFHBAsM8DfaNKDRrKFEwfGjKzcx8n2EQ5nJp5iTrK1WaHdtQLtUzf2DjfcR3gxV",
  "key33": "4jb58Mtmsqm3eSihZi6QS1HurfJr77nGcho3kcN3xMD57stLigTtVpEQZUviLPeguhvp8F2xafLSBFHaKxQTwGTP",
  "key34": "M6NH3GmfRmVJceA5Yp8Sq2r3zFSrynWaDtAdDxG9mdvsj58S5wwpzMbPYVuL4WnUzmgEGTak4gMUKtHhrMc5G1S",
  "key35": "4uPgEXipHowhgD6M4sgcA95ZhaA146NPxEZGzV5yZk49Bfmzypg8BsedYhwXLCTEiuUEVYQBpEb5yv27vaEe4Bup",
  "key36": "D6Fe6aiXz2QoSRqJQsHzDREKK4YJVpEiVPz5vHBYVE48rmQPrFkQkrwBCRX9Qob3sxnrikr4SJQ3VhjWWTo4fcx",
  "key37": "4LR34YV91DcVdy4CXqfYLrc8DQ96t1rnEt4cr3a73a1o1v1yL84X7FeUWrCiDeAovsnu8AT6hCUrr2i7iUWhHppd",
  "key38": "JvWSV3AkK2vYveHYPPnshCuPvoJ9Ygx1nuMTKP8jMhNKMwBUa3Ex5szEbrKu6XXcCQuR6wUr9UpJq87gWsnuLES",
  "key39": "5hMLSx1KMUQ1GxbwsZGUeEH2a58EZxyXnfNjyDope6298mZdp6xFot6x631iVNzQW1zpkixLkS2Jv55FgKSjddWu",
  "key40": "qBCV1vorYdgBK6FWhJUmHrSbNgmE7Fn8oniRnwg84wJCkMxFfU3iFtoG4Ey7aVqfhYqyvNnFGasT48i5qmM56dB",
  "key41": "4HHmKoGbzYY4WdQ4fMRrCxC9Jsgx3B22WJ8mu696JcSLZffe3S7UbtTzn27mcoZ4Qu9Ca92oj4xKu4Ho39EELhrd",
  "key42": "5z3mZmsFdBynfF11fji8qMR99eJoXFb9fq58vz8Z3as4ktgBUFToXAiDnxn1irLvxX1kMmG2Ss6wW1K4hJHBfumd",
  "key43": "3qkS6gBrnFNUqnX8tkiNcEyLJ6e8VPcTFB8VybpUaz8htjbmhKQ3AT9XTZEYabSTFXA79cuGng4DQrtZjsogaM7M",
  "key44": "2vv86dzF8NNs6QxatKfbpztgfMUNkam5H5UZeYKU3fDiG2ohmFx5sZYsd49XeMbh6dG94QgSJGNJH1NmBL8uWzDS",
  "key45": "8X7fvmLokZ5zrgpohjQMD3aC3mkvC4uU79DX4ubEDJzKyAZugkKjv7HMBbUTbbJnq6LMr9bK9HPhTWyVWn2s19i",
  "key46": "4NG5iwG77qBSZ71m71idmnCy1w1BGoJiEdy8cCnfeZVggFmyLSzrxfUJoZsKD8Zh2HXnJEtBFkqrEAHcd8wz1NGb"
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
