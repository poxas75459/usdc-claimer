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
    "FRNpcHKsJuXTYXQLZwby1jUwyF2tX6fSweErA6i9RYaCdikaN86bmGH2pa7bmegVgErJiyacjRuwTzpiD7XuYH5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T8zDqJ5CLQ26fqMnNnaYNRWpmNFR4b68BAFPdnk6B2sEanHGrzyoyhguhaigcrRkJX2i4tSLNFpJVW4JVjcozXG",
  "key1": "5b6aKtWvyg4w2ee8CrSLLQSZnpmGQj5LCBFADAkm5mXMZ2MJ9KThnwryLzk2i2L2ii5fmYQ85gCbNwBJejJ8KPtE",
  "key2": "2Xi29ziVwchHxYbS3rgypZCP47emEhD21w9WNdbhmydbCFwEeLgxKiPzfmY1edfuijYxCjHMjvZhD6ia59q2Yjiy",
  "key3": "2vgftRgo4mAWkH2PhXkHfAPmCUShQEGvgi8mV7oMNHvQai3WXPDj5g6JCHWLYVDxzkzFqXvsBwyW1pGXaR2dGvSS",
  "key4": "4Mpdi8npc64pFRxbJmxsvdxKYxF27pm4TaRWb59yiKhgRBocS4dS8dYgwfiiUfkAqBYbxZKjWyWSw6SerCCEjaGw",
  "key5": "5BCbfh8Pw4YSUg4nSLrSRq9t8LvG8cGBZWnk8Ydjq7gPrrf4vApbY3WDEbS1ekzj2RakbrSyE4Zt5QQfy83NNUw3",
  "key6": "zW65E6m9YhdiJT4xKzcJtiM3GYSokYGSQpEKtcZxE29SBzjo3ggsmm844fEjDit8bXaeSEYxqAVw277ADviXqK8",
  "key7": "3RPd7PYiynC1gMPc5rFg8nj9v97yo28uwgAmbiLnnJnRSp8ung6Kr8idoB5nvitJz3X82x1sEVZuQU26jmxrdQ2F",
  "key8": "4xdc2UvmBYtea7pdCBoa5xgWfyGqnK2Za4FEJaQmfLDedgqsRKR2a9e7hH3GYugpocs1NiMBPwu7LvzyPqwRkJYt",
  "key9": "5r2JyQZ3vuJtynZyT5Uyz12kMhqW765orakCUnbtBPHE6BWk6msSMeckLJJ3czHnhmuPjpHSFtynBjYMZySZM82Q",
  "key10": "cB9AwnPEb2n9kezTFYpdoGQkhU5gzDsHphVKmosBPLLmLueB56Pi6GEftg3DQeByTRKDUMYRcEmQYG7mRisGZZG",
  "key11": "WTMqYF6vyK2kiNU3bWgG1XX2eHLAKVQh3wEspMuT7fD9BBjbqBoVtkBU4GAZqxQ553fz1qFmyHzAktc6DuExyzg",
  "key12": "3AmBEG7v9TZej8NHqEXbR1mu31aZhSTD1LpNB5qiHAMheBVsbroVCG5uYeoDX1ZyM3qnjZFFE1CvW5QLXhVZ7ysD",
  "key13": "28Jtug4mk3pCVvpKUPtDGSxUcxn2aFENXVpKttubyh4bR8AickuYxonZiqZJKywpz5ujZ1riZRcYkEgyVvKbmtpV",
  "key14": "3qdniP5nTLLGvTiQWg73RA9e11nGUSwBpxZG4iqfNHHPjHDUPi5fABQR93Hcdr7ZdvsfvDb9gQ9xsD3AQMh6geBG",
  "key15": "5wmeJQYnWTkAYzVFqdC5N5aspyxqpcbNRh2pQcASoUqzYihKUuRffbvXqS4o2jVqq4RotH94nZqLkvKyQ4tc9Ex",
  "key16": "4ckG1QTAL1p5pr9a4Qa5tzr9w8KpZY27aLN8x9CQsSGjHFaCMjjHsb3Kg5oYWVxYv6VXv413C9t4NyveWbxfWCjk",
  "key17": "5ZgyLNFsY5XfBbysfM2YUb8Vg6GkumR97gBzTm4mtADyWPNVeMx4fpamikRLiTdmGaxPXThph9rjtGqLMdfm97kf",
  "key18": "3nR8s566K3AVRct3as33NbLnXuQfPQ6jQvQ7uKKNP1vse7y7XFVSjfkkjVR81Tovb94ZNoPqvz93SVDTMjxmjYKt",
  "key19": "4cGrmE6osXuXqz9upLWBf9iMXDXgSTBWbpySh2AEpepjTyUdvAJYrrwus9ji7jPDfEvT4ikKwAuvpzFoajzsnxui",
  "key20": "5z7iwqyLtZ9zAT1pxfBp8iV4tNeTPmLXBEDmM4sMYBaonBtz68qJhjpeUJkJhKrXk16Uh9FJBjRiJuTdcawdjD89",
  "key21": "2Xx8JM2PbkLLf16BuPfaPFNCTzQV3BozrrUaen3yX7xszp7BVuZHPieySQbJRaukU7sn7BG3smhBujpJzEz4PKqc",
  "key22": "5Rn11cH6ZqQ6GZ8cEXaBfUW9qczt23c36jDhMLzEyg5ZQ46y7fiCrDUDGm589B76ng67LvjYsQ9u5xurMQQUougL",
  "key23": "4ZYX1dyS187Ur3VR8e1H5NqHYKP6svtwbukxTPCfv7BLSd2WSEvy2XSBG1BfTFyKf2Lcx1s9CAtTjJgtCih4iQF4",
  "key24": "C82wpP49qhvFvMJpcwLufqy5VYxUnhKeeRgwWFapU5HSRhP4C1pk1NE8PmvqAdF5RLvuZiZDB5mTdi3FB4rxfA3",
  "key25": "2c5KAcHHe46FmUKtnCMvjTHVyy5FEtb3oqvMzgdf1APxQ6wej63KAb2LGBr6qnV7GYc68pD8UhbPGqDXEycvQWJy",
  "key26": "465jCRoQC6gMbzkgUD1MJUjHXaRGA7WoPoLyZxMehWpYGeC2tVVCs3LEGigrJergaXgdTJoDLtcbuCeUqk3SPW73",
  "key27": "3sqe9wx2nLwbfHbshK1FQbpnkmcLra3brhUQ6Rk858FwXz3SXr1U3QaGKQ5LD5QnDjyJESKMSerknn4g6N6gvtpF",
  "key28": "51X7YL6e36PffouhxyXZ8SzfqRCYtWzZcYJ3sSCLSTHCGC6x29hXTB52RJx6y84KE7h1vST6g6gRGC7UvUxFzubx",
  "key29": "3Wwx8AKHStZyWeJt9m384LmCZLE3RWbA5NEXA3RrFdXRnzKg437B1eejahyYQt6NHv76X8trManLjuSEqA8XWokb",
  "key30": "Ao6wLdyawRzQ2QtGcv8btQZZpbTWzpVAKBYd6GupsvZT9prYsQUtQEJUzfdYUguha6HDCZ1K7kVVfbWNdu2yrjd",
  "key31": "DPvtRssWJuMRW7URKcpLPenwypMJjR6HmjPJugQ4L8QkLGvhi75Epm19igLKQ5SkV8uLzu6T61Bn8SdjXqC3heC",
  "key32": "2MUtGxuAjEHtWUrPF7Dam4fPpaKQBpCRtbUthtmWS2NWfii8dDogTNV3rA3itLMiucz5MGe3W8SRzs2ZRnH1UtP",
  "key33": "2HxLx9Y6DQkLuD3GE31qL44TnPydCp2xUGvUn8atys4WUXNSCpYpbAFSxNigUM5mSsJ8sUuFvFnFsYN5Uixf3shg",
  "key34": "3REsHH19GzsrvriVowmCt5iFSz4wLZkkUtXQo2sdEoe4UWGFKeBig3kVieYCswmwobYstt94kNqHWtoJvWsgQtV8",
  "key35": "4g3P8p3gWRaiUd62Mp7BX36fZRG4VghBCGTFJMDV8GpHjmTpdvtP3wh18K6uoavhKs2fSJCetKxHeK7UeTeERK4w",
  "key36": "2x2wB1jGvkeZeScVuHsdpYWBkEU5jbPYU1i7ewCBQoXfk95C99ahC8KWcsj7KoF8H4jzs5F1JkLqTCnnk69BobD6",
  "key37": "4KYn378b8BCRgdnnjpVG4LkU7uwdEn2aBu3Q1xaz7KarujUJm6geoW83aFtqgnC5RQyNvUVapdef5E5c9DCokwfU",
  "key38": "5zHMSv3anpDCUgNoLvhmWFy4T9k4vnUsGaDnbVVDwRBaMTVo2TPCbfADt2LUTXiAinVq7nNKALnJtPti2TaNUGQR",
  "key39": "3G2959qpyDAWNrD5aAeikGvoqMZjF5JTnmu2nog71Wj9yeGg3WG7bTLJwvhdkjhcDGP79yidSbKuKsML8SP1Lsyr",
  "key40": "UujSQj5mb1D2xD7feRQJW6qZvwmNr6ep8iscjpzynmTHukXsennjZcnQ5aRb7rvAe49sPJWe3ppL5uf5Nehf5vZ",
  "key41": "2ndxYKc5mqfdy1D54hrf4wB4N3B4KTgQvYRNiHczijjhXWeT4axRNiPDCcrX2CLzPKVt2jW2P5R7uKJHTN22PuKd",
  "key42": "YPtzdfX2qoJq8TZAas4xWy3aSjPdS5SMSNJiYoFkdxq7ao6Dr7u4tQHZbYjwqVnovDTNfhwZAvrc44HWyMnuzQt",
  "key43": "28gUB3VqtN6HiZJKfXRzCHsJkHbTwizLNpjcLkPYb3AA9PRJ4iddRyPAvChcX9sxdZzS9f82cjXRhGs8oaSX9d8o",
  "key44": "5ZaeLJKNcK1xwiF7S8cr8GfFh9Vt6s9Au7xYSi93kSpTVebQdPpeRPD8CQpSDoB3jj63TPf38QXAknYSHZJP4L21",
  "key45": "HsepWQn4wzhBktwU3ir3VqHiouhKWqnwtxRQrNfyWiFDWqW5LKpKdc868wvmgie21CKui3ZnVXThsDJL32DrcDh"
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
