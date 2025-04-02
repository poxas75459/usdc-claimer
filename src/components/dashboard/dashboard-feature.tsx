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
    "314CdEvTbvepSZnDka7KyY4RX382ybxKSf3zmXztw5n4YyspUmbGMN7n5ZGqfXce7RoHtCq63Z8bhWx5fWpq4DwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DFw9udYvbce2t6UbmFEFjdJE3rVG13jz3oTMDvwDLtXdFvgSpFJkT95EfL2THx6Y4BtM7uvV5xiw44eHtTsmd6d",
  "key1": "5LTSTX4YWqHqkWVwsY56XaeMYQCgMTXYf9TFANQx3DfbT3cj9k9iiFqZtaVBhNcCaT5mygm1MTi8XaVxZDwzX2sx",
  "key2": "4UkaoSr5sus3iXznqysbXWzCe9KyVKkNVunx8QRvepgZA4sWU6iWf74XqPjGPZYnE9wD6Gr92i5HydCBAVmpJarn",
  "key3": "4wzmghXHbdp2Mon8MyZjvmmbaukRzLXw1eq6KYfw1j6rWWoXfgs1QGWhoopQc4az8uTEdL3N1ZWPhaKb4aXxq3ac",
  "key4": "4xjxCqb6P7d5TQYdswFjrkCBop8e6oBhLAd3xroTvsA7ovt4psJPcy6AxTp9R2fKegzTeqvKtjH9hMzmDmQppUP",
  "key5": "4CXwhGx5JcMA4KqVCBjmYn2VoPfaAGKyG6cgNr4JiazHEi3t48UdtbXcbyNh9TtNDULDsqgApduhqqkpNE8ihsuv",
  "key6": "3edq5hV1CUScCjx5jwqfSwt6TaX1KjUV6jpbPpi4cdepJ4Un9nHToeJsoND1iKwQ4PLmToNjYaCyDFJ9fkMx2ohN",
  "key7": "feb4W9SLZ8ZsDF1q28aDgRBvSgwSgD3kE5Lkv6M2RK7L754Xn8JdzwhXdUsxxTSKyVv6pi4U2cF67FcdgpBhmEp",
  "key8": "5L3BaRWZtVPub3VRH34FnCAe6CninG1P6RoHv9CcU6sBHUQvPbosY8wkE7osy9gtYX3RoYAT8MEyQGu1pkn7oV87",
  "key9": "B6CuCDqQBQ5kjsdRbWHQG98meYGrwAW2GRR4qhXVnfV6cwRX6fEPdedsJox4GZHjGkL26rh6cgKRaanHcBh99KT",
  "key10": "2XA7o41EAXL6XsppmcUJEMKzHiKmHDfq5hQSXnoxNPPH6y6K9WFvWJCmf5CDFzRPdJBL9iKk4MYypzSgNrcpayN1",
  "key11": "3do26fwVy1A2L8DYGyxwpNG78Xdht7YYPHQzjqAxFKQFccpz33wbmSQ8CnvL5qV4W2jHrugXJ5RbHgN1FGTRpLnh",
  "key12": "EyGFG8roNoFAdSPCuV37sQv62qWZrPcrzzWMPL1Gbs1EupNr2r4sV3HGHqorbhAktsd9whQSphTu2zbw7EP8gzJ",
  "key13": "2bJGJohCjjtATbAw7wxdsazKMUh9dS9PQkKasZjLbuDZApNUQ7mAwTHpoNww7yZCdHsKYWn3p8RtbxgevTbsujBY",
  "key14": "3RtX8Qfd4q97bzoudRBe7zkL8zhQ3TutVmCiBVW28enqwqLrU9D5hp88qYbs7RbeX5m6fKRy2KujeRtK1BMXv4cr",
  "key15": "4QRfxbcvfGMnH1Y87ZwuiWwNFXQZqfm5CvY1pPdwxwxbeJQpNmEGLXSZ9NsBd2cK2cfD1tHcPjTVvi4SRxnCQXHp",
  "key16": "3F1bRPg6xoGaeupRxst3d9pSkEwPYLMVYZ2kSns6TX9gL2EJWWM6tMqXzpyTtZtpMwjDVkSBAbgPWfibsXvrha9z",
  "key17": "3H8uFqivknZnRJgT1GatCDWrBFi9RUkcn29VAR8jWHfhW12diwVYDLEJHVh3TBKEWHLQVJx1hZdQUrscbXnPYia1",
  "key18": "4vHQtxQ2BfbGc779fj6XMUYt119SmDXLt7mTP6TLsSXFdT51SJdyAYMNK2ebefqsFrLhcnCx1myxPwH1h7Jdgma4",
  "key19": "nSgdqS5xJjQuYXn2Kqdzv7jND9VkjmhnyodJTV9NxiwUivWwy7AJ3qS3rsT3QbruRGPr32xjLRnqJMCrF81zvBk",
  "key20": "2XKiGXrhXxCn5GGH5K96Qd4Fz8TRZ1BhERcgAC2uMCq6zakeDfJU1vQ95WjwDQkQbHjEAPRU66cuBjisZhiSFCPZ",
  "key21": "3XzC3PLaaYWJcecLiHYXBcV6zhAD5RuNPd4FKVbzwoQkjwnqo4CjV91bsJ8PkbaJcVtsT5v2RqpCinD6BGrvTZSC",
  "key22": "2sbJDAUowde8sQu28JL7JUJtGsiDezqXJc7ELtAqArvXc3BoXqwe88pnBAtM9kgS4TJt9Qium5m68x4KJaHLBqQd",
  "key23": "324vmsBCpbtDxUBaqVT8PVYJy9ex6pLUhXRWM9oawZjnKDsmpZh5mPvN56Bz5HhRLs2Y2uYtj9kPHWwicsJdP6dS",
  "key24": "gzbBWyUnYcyk7qn8mmmDugkHFPZLT4L9XAii33mhyeG9yXwjUUU9tNcH2quhhhqk6LMpieoXv7B6NnQ9Viumged",
  "key25": "4zTbW4zsL7eNeE3d9ww6r8dnuL9ZrPJuwyAvCbR5B1YUaAp9ePgqT49jreKmMizqjKyMkboBGNsWT835cRySNSJ6",
  "key26": "3fJnyjfyqzFBdre7LkLhjyjJZ8UmhqECvDHuuyBv9SwJJiGzt2WjhXT6jXWQcPBvijsboSPdFyqHUvLXUdM87rpR",
  "key27": "rzuDieMKunybredGci1A2Jnyrk9RZ65ckFWkPTqvWBBXyU1tWs8rr7SWCYRiHBwvTFWTdsKuf8rLbcB8WFdeQaZ",
  "key28": "5wHU4p9HrSDTkcsAbeWC65jEtWPYZ8XCAzoAL3vEZL16bKRFGSQGEHgJRVWqfHAqWErEJUgCmzaRaMp7JZAy3hXA",
  "key29": "NQFzgG9AMxu3uyenMWJ7KQy7ZjhRMtA7GKvNkUmgBUHVf1fSjuVXH3MqAaY9TRFmZZQLTzDtJTuGkEgZx69Rki3",
  "key30": "TEWacj8LjcmbMLAY6NJ288REPteCwu7Uv6heSzEGY8U4isceP16Gxc94rSknAFMmFzQznXneHwiwL6xEV6iYZy6",
  "key31": "2exiuak9dkQ73GHnYHjknYC5WdJRqeLe1uUpwGod3vSGXZysw5k1Hj46N7P3DMKEkGVHyuLHBD5hz8akYXgNa7vJ",
  "key32": "35hFcF5KhBiykRSr9DeQK1P7WJtXNjEXn8sv8rjtt2cxZ8GUmALxYE9ftEHnaZt5zFcNvMpq7ga4d3zV784bcpWW",
  "key33": "ZftdPdK1SC1Z2pK4mazaFpoKREodviaAbBGnbocdQKg52UcHo8wZiJywC2heQv7HqKrNwoT55uX5fLXkjonC4uG",
  "key34": "5CMKsn728grt3ED2GHdyNofjGKy9xpykfmNCfpBt5kSW6622NQFDqFGAQodLU2of2s9Sa9pRTAycDaSJVVXrfFHP",
  "key35": "Bncd3So6QWpCE67f1GFKDTyqjN9Vfse6Fe4FyRLreF4vSdcuJW4ZVncR9u3v8YWJ8LxtWd1fUpGpban7mCwiwKZ",
  "key36": "5Y1DP6pHreSxiPi3kvRM3vBgbzLeRvACAE2HyWvuHoPqGXUG5MJaMGuWXwSZURuhrG5XK6ThjW1CqWsCvaqWhZKn",
  "key37": "5hFiA2RuVR7PrRTRotmRpk4eF6WqxCBD5MtqekjpDNWgH1sq2m1i4XK1TSSaHMgSGgkM7ACxFPXjoPCFQjtf3s5B",
  "key38": "S53eY7HoSzPfCygM1ZBTQ1wvfKoCQS3Hwbyws943GFHFeryxxjcVZcxQaJBiDJExvLy56344PciqPz2SxK2RzPz",
  "key39": "5xqYnH4dT2cS8vqzM6NswQX58w12Xq1ysDQRr7FgesqQ5CGxE9i6E6Usj1mJVKxVPyRTm2iAmkjBn59oZfwuHKWU"
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
