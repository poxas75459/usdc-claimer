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
    "64z5Kvkf85XVSJd1qs5kfPQ34jEgTqhUvokNBgQgDmbab86vexhWL3LWGZkWGg4dzE4edvokows25dE2P9KuzgyB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37UAjSYRmg5afnL6pgqAmFwoqinZUHubAMWzP6DEmCTytok3r34bsZ6xVM6JeffpfQA86T4k6dU5oDKJRkqDeXHx",
  "key1": "3arQL2ricBbWA7saFBnhx5coYekJwuN9WFjnHLQaccaKBRMiP55zDvDyG8ZJ7pP5mbw9cKyV9wCUX4SdURc9VARH",
  "key2": "4f69FTR3qV5LsinVWi7w3bBYq1nKoo4NhPpFdiPsDV1VrjU3qLiFYUaqib7y5qBSQzJsheGkynh8QzGmGEHm6cPs",
  "key3": "QVMqTznt8o5X2apLm7dvcTSXzooktAqLtrCPKVykKynfH9oPAYacUQYfTQs8pHyH8q9STc1nkWvfC8sXoj2Nayg",
  "key4": "3hTbbW1qZoNBU3ecrPDX91WZU9LabAxwMzcAbZaQAtxVt9MMf1SuMB6FQNAvZ2HtrNvnFVPmvXjYMVrgtr6riTAD",
  "key5": "2QDTDcbatMGh24b8mowh6kw4mLCUHmYrs8NEK6MV8Rau2xaVQGMkbhP77Gqagr9Np7zbAy3DMLvLp2zuQNuUun9v",
  "key6": "pvuNkZeHi9VRKcEW1jGWp7mx9NzhusQVrs36pi89vCfPLJPkcUocMb5Y7YLDuk53B4xSaLqQxFJ9WZ834y8H9GD",
  "key7": "aPyBr9k2UaeqWEnNPifdkkaA8HJRM9zppy1Y2sJQevAdwtFva9yD1vT2pU4G2yd9bYYs7UvgS4w4wxiHgyR9xio",
  "key8": "5xiXMpQtzXCgDnexwe3FB9vxGEyBKG1GHw2N83Ay8mKdEEsJNfcMd5fW2KK9BHznKNajJQQWm5wxW7EzP9XwRRTt",
  "key9": "5aqFb8vD1cNR7bM5AKgRrDn6q5qz4mLxvtvxfhgVcp8dUL5pEzJpepeKyi17pij6xEnMn611pjpbLgn5tSoChA2W",
  "key10": "tVEJMpZermq2rLrdT1cqtwsQV2fV8TC2AbzsBoKJLahLTNYkF8nGbGYhy1ZMYAiRUHYgrYvh7FCPwQu3TzoRy15",
  "key11": "3XoLZ6fjrCHRPYNJVfTPfTFLEkwDpzhvv1YkQX71xSZiZViztijfvRCcsC6X3LrjQ2DKuHGmhNnDwjF2GqiQRG36",
  "key12": "4RmT2NPQ8E2D3cLZy5Js2zdXaeWLtq2v5kbyUJQYv1NhhxT3nyCCMkm8BZdknNxks3wSQ6CVks2Z3EvJTcevn4iD",
  "key13": "5Ynfrentpyv7R8ixLZpiqyEJBwByugJo9oB8RbR5ofgCM59dKirNGCpp3UWbyiPXixR6hWAoDtyLWGBCZLipsrZE",
  "key14": "2i8AewSZHcKSqTmY9vhRgyjp5Jujy2ZkUrVmJNgrGvdXevKgCkVLNibDd49Qk2iRNWREQ7xpxybkK5fcSKofp3Qh",
  "key15": "26bDd35cfR5KAsQMNYsYHQQ9xA6KwNtA6aaXH5oqn6L6BiKdynGjkcuvMy6JMC3dDdDfBwG9ie5s8KFbUQ9ySekg",
  "key16": "o2zbV3dCEs5bVecWPtWgbDwfhtbtqsvfnu7ZPY7qLzkXABu1fyN4H33bVmfhyR7k6ujKyd3NrVxF9GAX6hqYo2G",
  "key17": "PfiRiJJuBhGHJ2rJev8hq97Sq9apuHGz2iySkrWTM3nAFwWsvYupDhysVvxY94YFaug7M9mQ5zVmzntbbbddtzd",
  "key18": "2ghANyRKsUYZDFeDcUQPf3v29pfHm7bGPUem1At6gEW7eq5psFSMqJ4km9St7mvym7hnDdMoLi53WRt7SwG65zU7",
  "key19": "5UxbQ5z4mtTxRsaenQAMphRGNr2fLbVXQdF7gjfGHodFQW2BDUMierg5tzguCsPRhZJRhqwiRstHvpSNnqSimNFy",
  "key20": "4KG7RjFzft3orwnNRswqYckZTxvaL842VTrPwuuvi2x52SHeoxmgGVhZ9RcBwaJnV34WNeQPiW2xukh9Qwo1VtoN",
  "key21": "Y2ao4Sxz1xujjZoJYZwEgHYWxtffgyfru5DEkfDeqyqPXwUknTrnRMr3jREJfGcRXZVMc1oVkJJs8KQ95TWREsH",
  "key22": "5uwMYSGYDNJzdSe2FGNMFvHj4GLQmopsJAdbXs7pDGXF65Pjn16CKtcMvqQRd9Jh7WgmZmDFeiBJK3iyH9C97MSh",
  "key23": "56z2QRhpYyBw38ifpJrXMXsdrRsqcM2yzf5mWptSdMg4CLPt8Sy28pDFnHUmgmGoq6iVRYyandn34a6YscNzdaKc",
  "key24": "4GTpNpsXxHSvZ3NUbuKuYHVAHicg7pFZqaqDiSC5dyr9Y3C6xMmzhb4ESxcDdszGTAL7gBJqFxhpUWwUsZyd9Qa5",
  "key25": "54TSq4mPLiFXZcq69o4tr2CnAgkosKVJxw8hLEvTdMjm6HQ78d8PM3Nk4UkbGpgScnQMPn9VUJcJnoPnmNHzt5U1",
  "key26": "4ToozfVmU1FcMYcG2Xdjz3rTzcbx1uuCETNjidZWrHjUZRdzDzpfvTbSoQx3fAurzi2NAsqD4cGUhy36TJrz6FRM",
  "key27": "5ZcgdXxkjEXXswGV1rqVrgjY3HpeeYdPgv2RB71jtXvmpsqp53vVYSTzQ3HKASyUnFsodoSFBZVweV9HbHQDUhJf",
  "key28": "4bfMGeZaabxxPSzsXHnzxX8n7ynFaEg2yVdNYNuWwFdLg3JWUZWvNSE87e5vpu3qS4WwByt3LBFFxHGZcmmjEsDV",
  "key29": "U3SMTAY1TUrASJrVBMQKgcsMbWKC4ocEKtg6rwfeTn6o34dC2zACTBULsXiYbBXzwn9P2eAVD8Yg3pqBr3HdktL",
  "key30": "4KQ1RGfH1s2pHtK1grWJg6MbrHH7Cf9ZLi8jvwwT3AAEXn1sWiDUrtKDXG4vxbzvKCnjDX8C4iSe5LSxmef67Yd3",
  "key31": "3r2Zpztt56s7mN6F7nKdq8cecM8JUnebAPsmaGapcruk5wzs3qexs5414rSVrqV6oxirjp7fUDXfaPdeXyih7pc6",
  "key32": "2uzVU2QuJM18jJJtGgkF5dWvHTteUEdNmxSMVQ588bf73V49QqrgRSQFSTLUrNwxBzpBLY7AqkzVGMpCwjQbr5xV",
  "key33": "3StWCJyMHbBg93EMfLt7XSmZguib4Xd6Rc7SG3cvcUheaW7RtPuX5heNBmpQg99eUvVR8cgif64wrhLdcqgqC9DD",
  "key34": "2KSfqSqPHyJCAUyYpj4K28LLPhoTSwLssxu15Bm4Nsi6HoZLEFC27QgahquADgvXeWvVEEtgJVxLpkVRzobRu9Q2",
  "key35": "3b7mCG15psGN5RvKzPciTdSTwR4KyM89AMyhgchFKs15rrVRZP46mLHkmarpWDRUtUkYm5qsYEiLy5WoL6K2Ewf8",
  "key36": "2rNAAtQaDozXrWvpx4EtEP4rfcktP1NSdwnnXQWAWetZQ5KFE9DTsDEoymb3zapEmbuaCQ36FdeWEB648BxJBLJT",
  "key37": "4XC4ksvHG8RMjm9PSZGtAKnje7cH2AwEJHfziT5E1sFwu7zNHGqt2DZCUGCCrjDCeZ5yQD2wZQdZgwYBnMav2ksy"
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
