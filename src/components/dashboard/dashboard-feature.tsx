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
    "5DdaQ2LTAvaAoVUY3JJrooWTJDZ84ajUgZDUiXp1W2N9997Rnb6pXKf4p6jokUZ6xgL7tYSn5qGmRQq8nEpKr8bT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3njFJg8XFxzsF9YZd451Vp4LUVsisUqY72WLgzUwsJCBeLXNgkGFneakzR27owxewyUZmsGQWpMb2FMQC9LHiLQf",
  "key1": "3S9m1ustUuEKehshJEsFSNWmthCXvURyrpwzBFyJTo6K2nLaWidioahKdqG3hbWsXup6aCTQU942dbaYg1o2zrbW",
  "key2": "4mojmKeT9x1sKde3iwLQeUrMeHYthmGVLtiitUezcM7RiTe4icRv9wbNeou5mrsLr9St3juMSPoqFuciwqfzWCBQ",
  "key3": "3qtJ2BNbRqAvqaShq4gKiHuCwaBNvFDs91WhBVPqepuvu9Gd4Q5hWR6zDgmW2hV9tVHAkYqTo2firjGa4XN49Jyk",
  "key4": "4aFAyVWJaxuq6akGGcAcmwfHJWd3X5ShEpoacA7pkdUH8tepx7fY58f7ddUwgLQvpDhfuouijsaH9db9cBZap2p3",
  "key5": "MWfUvNSK3CwmUKQVUfUhuxxzUivXFkHMsWoX53G398jEDgcEfH6h5athBbttua61aFkcmKtasMHeSGZzr4iEBpw",
  "key6": "5qayG76kWTTwFciMNshFqJBUJyrr5216SzJE1pJJdLr4taR19FsP2R917wmMoKMTMnzwnFd3qNxFm2nfkf5y9h1q",
  "key7": "h27tryD16BV83SzYdfu8xsAcFAm58zmtcuhQT8fVn1PJ1HJc9FQ2gTxwnh783EUbYe8MKjfq7Dpx9D2egehxccu",
  "key8": "2vpxg91GvcKe88biVqrdRoUrkWoUF5zLs81d9z98NNQ2F8JECHcyJcg2KkY7sHnqb12yFsCmX9WCWCyRvr8VdZSe",
  "key9": "4kE54pBTqLAaSX1qt93XmLEcZrUDkP3w91EnTGMgsQntGnZU6vnP6jfYux7tzSKLbAXWQn9LT7bca37oCSFRfcEe",
  "key10": "48YyHwk7J7HsCJPz1V2SoAFci6Th15p5W1wQi9MdwxZjDJq8RKWZvosh3i7d8i2XjobLVdFyDpuAS2uXnxr7Kc3d",
  "key11": "2pvrf2ByhCjDV36YGujUieGBFhWWcPNnCWXoiPs7dFpVo5azM7a2oSpTAmU6JV5hcUhq1ecBsSnMxEZzMoGGHYVd",
  "key12": "67TUy7c5RqVScf86qzEjojFys4PsBjw6jVUkW6R685SFFxzL23efLshYaXJLPFhn8Uco8fHHoLrbWXMvpk7hW9Pq",
  "key13": "CjF2YoZazf4bxZFq8MowQKknbzxczyebv4BoqhrkjwSNCUtsrRCSwn8qHSabHKZPyt56McKA9nURSoRKzE2Rtgr",
  "key14": "wmjErntte5qCKKLzCxtB2k5cuScNm75geYuQq2QhfD21jHHT96Q1aVwFJoE1gKBuqsddBqUWjxzCdahX6qHNjUN",
  "key15": "5QCV8TaJjm4cyxMXXxCTh7TCCuX1L82em8S87u7uSfsGoz6SWvAKBT2Lt7AVNj9HeV4vP4xwMHLbrd8WRFdFxwCV",
  "key16": "5ALodjxN5XsYBf48cGf7L5fzLiwEQ5zG6UgnfvtaLD5machNoCzoDAjtwZ1BEUNt12dfrJr8aDDbpJCu7Ev3V4Kd",
  "key17": "2yixSqcsz8v2wmJ1MA3vZjGsBbNVZ79jqjkUUeZ4qA8tCeTUKSAZJtJ3JFTDRtobHH4Y2KfLnrMrKNm32swo4S1M",
  "key18": "2bf6iStSjy9g75r6Jo7wxzDcqNBhDiK6kPnGjmMoENx9AxYnXDXC4vGbuEx91HWTL5jU6tki6ofnSnWio1rDuwzX",
  "key19": "3aa4tAC1G9kuqiEo17oXkTh57YXBQHXcj3eg6PP8wPABM4t8ggE8UeGCVNHRiHPqmMi1Z3KxrRURGwzJVbwCtL6Z",
  "key20": "3GWZFqTbAd7gGmXpM7HtavreDaBHBekTLmA5tU4D8hzQQ2USDqJubLFXEFDgY8zuTLE54YzhNRjMVMiN1eq7DWuc",
  "key21": "2VjaJpMXV7TDxu4efM6CsiMycTrP4PeAbQvv8CDPev5rFi8PRWupz5MdZuiTTvmdc8qnesxiuWZM69RmqfeC8253",
  "key22": "5hVNHpNMMgzmYopHzi5HFvj41XLaueYSSnzAMbNhX4NVr6UDTesGJDpbQhqWpGgkZXRUBzPQTQ2gHE5S9VdXfFi7",
  "key23": "29eVY3ezwy5vFP2A7M5SmrR81z4KA2xnGnUU8EY29ttJvtGpps1ymriMAeXoAKWAnw5qzq6WYa7XSkX1fSpYmjMm",
  "key24": "28V6B8wsRygda8jcb7Lz3L8ubQeoAdbEEopJ5SCEGBUajG2dzg67pMF2s6y4dwC2rvkS8ib5dJKN2Jra5TGrdvRE",
  "key25": "XedJmvh9EQLzZC4Udgfg7HAQgdutqutGha5iW7fkgZ42c5zR8o5vuCkP2z6WYoKzK8TRSgBuDbmg8Ds5vYZcsge",
  "key26": "4PVSkrNifXYYnRHS7f2aUqaZKehsT8b6FDvoJJpZvT7n9dfCC5CUBEZo4rovMUcbHxDAJ67BAvrjvd7TmcByJGy9",
  "key27": "2uzqtXTLG9mTqWFzdApFKp1Mt3dX3enauJQLQHCa1R6aL9wcbVQCxC65KBByVCkFVKujMUy1ssPjyQTde2hjSW5P",
  "key28": "5BsLy94SHYfxxLn9dpEnddciGf8dfPAQbQks9ZHrTLpHe5gqFiyMoaLcHRyWGJv38zdttVhbbKWqwwDMnWACS3NS",
  "key29": "HtSKLERKVfx2pVSauxpGE4tYejqpGS9p6nD9SMWFVA2UX23bZsKKc4eJm3nUuUTAHscZYxETe7S8MhieAzZhL6H",
  "key30": "Mv2MRH7irXsWDNMxBTzA6RzJTdQm6HawhGAHGnTWcjBr9KgiPeZgACwuSDcDMVaFrsEawXyXy8VezW8CooYp6o1",
  "key31": "XLqMLwX4YZAV2KSTCjQu3FcegcxHv3aYt4gVsxoSWZtnDXQfi9MdHZPRdzRJMY2UVEJJJdgzywEsRFjc6bKsGfA",
  "key32": "2gRhcFTwq28B56Xvhc2SSQ3pGh6kDddSMGtRj5LQsCjJVKw6pQkzyjR9QCd3dnzB93RZRZ1hLRfQ94fyRfKzwdZU",
  "key33": "4pPNaLMKBwb643KDgSXyzCmf5n1gi3qy8m64qzD6WrYi2XXE4C1m5qTeUwdxu4HJUBBUah8wTn6L8cdKf9V2vSUs",
  "key34": "2GyH8JGMyTw1rHhAHkJVJf8EoADiLvfpCevL3dqrTmjqmKFhMnLb6t9PUTnkMXukwittqvgeHZABwyipcpDrFffF",
  "key35": "5tfrmVne7Lu64cNgRR4fVP7yVF3kiQS8h92s1zjR1PRf68Jyg1r5XJVMBCnM4bv98ipzmuHqbkmZWMyodYJiXDFP",
  "key36": "5vYn1mtrRh5bhzn2bm5s9P1V31JxGsD9ycPLtbPDAq9oHh3rSeojeTPZyWzwrvBta8u1kqco7uKr823PFHRTncRq",
  "key37": "3w1yX9uctzsKKucr3CKCLyfyzVjFAabF7gSaZd9Q85crgML7gTdXN9YADEmvbBVTEnCZxWyJ2tCKC3dcaUxK42L2",
  "key38": "3TBiKLBvjZAbD28XKqWMHgAHURJpmQKMM5LFoiYjh5T9WRw3EJYiehw6g6t4fYLBUx18NNp3y9cpCSR1TkLFXD6g",
  "key39": "229ijxVX3NLgr2kzE54s41KSbPpSsovTLavMi3r7ZuSvt7GcmKFNZXxGCpP58J9xTp1sD1TyUSwCNW9cEuo2Bt2f",
  "key40": "2BpVeRjUVbAVAnub7vnCm5hkwgimfDqPRi6draaFX2f92KVWNVawJFQMhh1KgotpUrpoEwirWhGsNGCiE4q4rGqD",
  "key41": "354t1eUHFrnYLVLeUnGVCBKyHEjFXjLoSqy4RPF9i6kqFcjnef4xpALxiVPBAhnR7jsVDu8rZBpEeMeeaeqjEVUA",
  "key42": "2HNTWpNd4kxKfMdh4HGR5uBsNz5sMaNadVEE6p2iNG1rdowGzadNF6f3UxHDKCSoWM3BCBR81r1bCBFL7P22ZrDK",
  "key43": "57GMGh98Rk2AGyw62ZYMcyCeo2Bk5mdZDctAmUZ52PGoikZsiXhY3jg264ux3tjojkkun8667gDAzPn8Yrf3ScLx"
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
