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
    "4FzZc7djA1dwFdFVCEstnY7A9DAtGtvUVErsqZsNpPD3Tk6W57zsGgKQre3hRqdZdJpZukcmxzCnAuYMCoURUK8p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WT2V1QkySNxR1mXF5AhxWoTw8z6TLi5wGiD3TT5CF79txudGq7mp9VZR83okpn9jiTdU3es1rbeVwJVdJkoT9dq",
  "key1": "An1QHe7ZTQ31xH486BebXK5FNTcPRzGWVQtnfnaad9mMdgPZfKx6DXQu9LTqQi3Jb6bv6Yc9HrkAjPBonBsBQ8y",
  "key2": "4JJZzdNB2jW23yN6JLfaNjXUBfxf7QyYU5yfZjjoSA1f3PdowcZyUFY2pfVmjEgqt1YWVWGqfNjfRQCFMT2T43gL",
  "key3": "u2LbjtRED2ATgAH1KNtGubuK4neigvzXxVqkh5W62qZfwL4UKFL8vfZNVXhXgwnRTC9qp8ZAcGfz4haN2VjFK8v",
  "key4": "4zae5x9JXGzvQrCkvrHm99PjDvpfgkFj871Wwj2P6WErLHxmtEuN5HHRazuFGLpCa1JkAuf3Zit8UDafBQ8tF46W",
  "key5": "5kHy4gmNz9WXQgyf6RxwpaCT5RmqL1FEuGB5UPm9g4owCCqG5k53JjAnf7r1xCtqxa4BjdVf1ewM8T1CuwRubS12",
  "key6": "3wFvvit3moWDGcPJXiuJLUF9qLhvctBrns4iMw6jcjRkLuF4pT172dKE5E4L5xP1YM1wZh5x11uBdVpgJFsfjB6Z",
  "key7": "59sR4hhm7E7719nSZRkxbBjMcPn8HDiVLAz4c6ccPVuRshDeg9ddrq7uTVzWu1V2HoTECWSt4zYz7dCNY2EEUhVe",
  "key8": "5CFSEihJvWwkYDPvA3x1uLdAX6f51vR17RiZef9h4y9xmih6N31yLTT54YNytNnXhmsLvzfnDLB5Ge5xbMHAxkZA",
  "key9": "2PaY9uSC6Za8HqagtR7FBrEy5iNUj4X5TjK76cNkwTNNcPjLTtToRj44KUFnxurxxqKoY9TrQskeKXHFdEW5z9EL",
  "key10": "5aSVw8ArwUanQLHWj1QcDnkzEoSWXcyCBEUfmv7GiJri6i9Vfk6ZEXJSDb1atPo8xeGki1iCdp92qJDufZ8cCvM3",
  "key11": "gER2fG9iXNYoCKe9VSCTWse4FCSEkk4n11CiEuVgxD6Fa9PfmvtGKfcPnotxf5tPn6zzEZUAEVancwjmNpLdryJ",
  "key12": "5Yj98uFesKdMhz1EBy36csEM9Xo2rPb7zR3cNVCo1EUmuLMKUZYrYmovssvU168oEAekWC2YjVGKZ9w6RYD8jG2Q",
  "key13": "4AeW62hrwDEUXeaCdNWw5amVYS4HJgPC2PP15AeCYF9eZTGwcwGkixiWqzCCTcrhWkiW23myJ6aHR7de7UdoHQLq",
  "key14": "5dNWTM4QXmD8i2bPZHGCepiZrmn6RFb9KiWcP4mHpX1bKvEodHRxB1H2or8qQaavhqsh9SK77tsVPDwrNaiwyxAq",
  "key15": "uuTP1LbzBNxyRNiwwjt34X5u9ivCexwqWkRmBYkU3iGFzrozerZaNcU1ZCEyn7vwTR352pGeL9MHWYheSQyy1dB",
  "key16": "YtTUE9a4pWZpwp1de3czr7skDZGRygekFbFbazfJLHxV7JhzjzzsuDo4ronofU1fj5oaE9roMVj7xv3NKauPtzE",
  "key17": "TCS2L6ajbKikyrnETS4tLS513JVvYP6iUmEG3iB6tXbEkEBWSkkSWDipbBJC22EoyqGbisokNEew6XXUWCH3UJt",
  "key18": "2HSTyXwAGU2hWeMJs5cViLqzo4k1sySA9yVABE25UZ8UedPHNCziGHvaT36GmQLXgEMnkQmXgqXuYjABRnbM5xZn",
  "key19": "4UCCq8HSPUGanMe2DsUyGns6F9tn4jQDCcXj1i9LAQmvAxuMmf4yn3JuLXKmiCVwXW2BHuQtnsmQPUhpcMzb4Pcm",
  "key20": "4iquuGydAY8TasbsghdkraVfa217L6yfCDM521mjPky8J2RPcHP6Rdc6Wao3qjYmRA1t6meyhhDdKZiAME8Ha3oA",
  "key21": "Fk6zq74XZbA1dL3Lu9VhQDRjP8yayhQL4MufKMqn5EjFzLadniLJCKnauuS49GpTjMBTQLDNT7rxtJbT1djrcaJ",
  "key22": "oHTyK7jhmM6umMserLJdFtEd9cKPtRZBfBNR9MFwVjbRo97fyQLLt8LXDUmkZRnd2f4dgSwuxMXvScsnsusVHW4",
  "key23": "3xg8SCqrv8Tiygq6yQjqy2sRswVsHQQ7Gtrtd6wsK5irjoGsAozd9WPg24fYvtS43e7NA4MrEEq1aKVH8BdA2iYB",
  "key24": "3hFPHyQZETGexiSaEuDyMAkfpse2cp3bAupH8fkpfr2bsfz1CesbdWGma7wdCiMsYRpN315vTYJd3LW2WmqASGZn",
  "key25": "67oBKXhUAbzzJTdrgvyKJKrM2DQk2Leg4REWnqcUBUedYy14FuDEf9ByarJnJvcAHsLFhadYjJ8qV6LDLBThQyvG",
  "key26": "64gMGtjb8rxmDE3t2StppBoPmydK46H1jqiLuPmAu3dXBqTC1aQu6jn2D6x9FLn7kLFhQNy6YrfLqqS4iTe3d23d",
  "key27": "2pQn1iPnd9KW2VjE6mewjY1wGtJMPPx47s2oTDnpjDUJghFikapw9uon846uDWmmXCDC6U17Fyt8uYS7mtYH5Jwc",
  "key28": "24RfoSWTbpYDcLb4DQinsfpnh2cMoJ3RsUANqS376tPX6sFpxJkGctEoe6Ut5sLV35arUFaKdUWVekSpQFcrCoBu",
  "key29": "4PMt9DYFPvEe3Zyfhe3Tv7Mm1uV2wbQ9dShvoCJeuGH3jAiVKbr5ofEzdLTE7TE4P7EmPmzeekaQHm8JWYDZSo9J",
  "key30": "5JfHb6gmQxuY8L8tD43HmnQ3is11XaG4RH4YZewxPeERo8goH2PxH4H58LZNVAkE72ZDhejTPnntCsvLDeaRwMSS",
  "key31": "29r2AuPRKYCHiVyGQX88XNDkpy8fhYHKUpxP1kqdfYezMMPwcXxjchBHZVv1hhprifYdt9fKotcVZYD5jjkmnRqp",
  "key32": "5vbLuF2bc868tM4LAdAFfSkNZ4EVpF5MRpv1Tn6eD2dHEtbiHyM2iUYbZuL5ibsmr1tqpsAjwhBXAkG9kU5HbeVW",
  "key33": "32CaZVVeJ3Xn73mJQBSsyW7PPPizxqZuHhjZkQZ27gWoMirvQD7gBdZguRTSrS7qHSZvUEXjLtrA1umGQxoFnJd6",
  "key34": "3BRydJR3g4A7zA5FPshWKKLNZx831VtZXBQmrgqSfstJuunF2rB8R29jtFmLbdJJt7tAZz3RtXnW5746GbJKD5Yr",
  "key35": "4CsCKVrYDvMF8mYg8GKJ2rykcuww4x1w3MGysSejGUaKQaEkVA4BNhSsHZBpvaZVyG2syKVgcFsVJ84EDqYGM9W2",
  "key36": "VF1hXhK7d2Nc2pXECXpayfT4GLxGpm94jkBqjxBhju3jMFdLZo7Eqzf379QaUXW6VxNThTxL5fPDQgvogEy6Cj1",
  "key37": "2mBvBB9EDXxZu8rV4LUwzuX6EAWhwJbDfNQCvZ6vfXMKFGYdFYDpkK5cwgnznahiHiuRkSexZWeAdQycMjzfjM4c",
  "key38": "QBb1vLt2FpQ6ZQPR7oG3977hVV5y4F9tEC4oewfepyKcpQh9sTmCq1tFiqxSpXoKnpxAcFerzJQYrjxXfMsEyHY",
  "key39": "3Nt4NAjMwzuGB3xT2qGbJy18uXTjxDWSkZcpVot9R4HgGFdKypzPfuSKYwx8PnoxmYNRu7F5ydtgGNowa2nyWf3U",
  "key40": "56wgps2AXWcpHocwCr6uFdunhLE3AhMCamyYvmjSZqeyU9bwxVSDv7wnyrSDRs7WgwAZM3e3NhFo2wzTTvNfLY7M",
  "key41": "3vUxbNwzYgLbrnnyL5214mu6C9TaK3UKbEAgpUFGgch6F5qAZRrJoK9D8oVq4jxz2gZkzjkXpALJAuewqjvjScaK",
  "key42": "4z3RWgyCShcH8iDH6oAfcT7STMVSNWGbEfZoSoqNNRPQhuhAXP1ikkD1HUQmTn2S4YQc5xP6REsfkKQcofdmLDDW"
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
