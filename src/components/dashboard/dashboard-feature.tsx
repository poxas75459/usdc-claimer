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
    "2JgAyQLdUd2am4yJ9WVJYfamZxERe4GsqFwkRSRga1Z9SbonvxezdgPYNnUNh83R37S2drCtESMjKAtTsjvr6Vsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wDKnTYvyXpRcSLsRdLb15zaqMqL1tx3SqY9WxGiFhe3e7Eg4UedHj8FQUGtAdFLFPbF64X9dtveQqyetCUvqj1X",
  "key1": "5QADQYv6gzCJmPUTmRNauT1mSgBinYyCj9Zu89xA9zNz4ykbnxAcmZh6SU2PfoGrx1W6xeHUdxcsoWF1SQsAghg",
  "key2": "ypX5k5vNKwPfyzgNsnhW5Z6JUJHXVN6aDWerSdySr8aubTu24j8z61Y7VrRj5WVKYJVzRshHD9yULdwba2FvWMB",
  "key3": "5QZ8RsunzH2mx6CiW2JRsi8RsGgLGxHvhprh9rX4MeCJQcC3SjjuPcVZ7E9YXDcibS8NMjsYy7CaPoJa4trikcbo",
  "key4": "21hMQMkkZ1c5kWk3wuTgvEEfaCzykfj115RAurKA2rDtw4bQVS5w6MP35K5Z8QXfE1Ez63nNaN5XyMB6k2ivqdi5",
  "key5": "BdQXMiW5HRYoYTaPQK1am1iX7dBYMaU4qb9BfD1KyjGpwyzJGbeN39pCY4bNjQnXYK6P65ZJgRjgRE1WUWecc4B",
  "key6": "34FH3L6NUdsasjwAXEngNw7GiNjSdyuZJUcPEewp4kRj3dwNQ59DPpynij8FvQkSgJxoxjbBvUPUNrsPtH7UhpZY",
  "key7": "3mE3ySTTV1Rkzqb9MJqZvhZqo9ENnrjaZoob4opFvMmYHvLC4kUzC97r19Scxid3rDKWfBE76nNgneAkboPv636J",
  "key8": "PGd5dVdW9azux2pLdea4Eymd8RZ6wvG1oYQFg435iTi5Gu5QNgMfkbGjAgWdjy1Btv5mhqNrMZhxYkTLMocdG5K",
  "key9": "45ZFDLX6MZbxFov5NVYaeJwSPb3xMNr773u6xgkMA946MVCu6pX9JKS4253Gyarnzd5At4134v4wTqLcQRBH5oUm",
  "key10": "4ZHoDbjhKF5jgy9YANccJUMqkb4k69PGeYU9KMnjUbJak45FPbRXmtuD2EnGC46Aboe7Hq34eVFu2gUuro4WwVe",
  "key11": "4pFFz8kPvMq6A7ByhFgqjTHYhCg3yR2xf72KqGmo7BEW3PWMTFzA6Ndey3KYov6xg686RzxnVKZHcdpmcDC2Y3H4",
  "key12": "3n7ywwBfxtqZCQrKe5dYUZGt4sQrNQ15v3wmoZGt5if5FAHCwhe16z1ubmJVw2368pKwzow4UMnrUPhCjw8kGBBk",
  "key13": "3DuWDf49nMbB86MfacgM1ZzEeXWRenbpz6QSRmLjrDvyKjpT9t3S9peinbzUpz3KQ1Hm1sWvLpiK5Ao3a1wzYzPw",
  "key14": "3awmJ8fdnca8Q18iu8RDYACWuSJA3GM5vBqdHBLq3WxFZiNN62W3fg9EhJaxAyyH3RaZvjqB2Y4sSuaLKqPFbyfk",
  "key15": "4KxhK62R86XeuaFTgKPeN5BjN65RQ3Ww4pyEpNfLMB2ds6Hfe2qPi1iQmMgkPs3g7TzqS8wyKGHa2PkkxTSrcgRB",
  "key16": "3D1sjS39QJtpg4ACBjYhs5eJ3Lt3dAaPMb3nUWdAs6ZHzxpzkHppBVRjovxr8dX7CDDcsR3nkEsgrPiJhrehMTJK",
  "key17": "3sZqPXWaSJjVRP199JHS4Xdjw4kDtKPcJbzSRp8rw5sqyJ5D545f7f2drt377cPDTxSWuLoQA2CyeSQJGctkmVpc",
  "key18": "5NkKT4hQh3L4JoFAP36NW7BS974uyT4wRYugcMefbAKU6DmvY8JA2SUohmCwUXe8pPzuTBXh2Vjv45PFHCuGTGUn",
  "key19": "2gkfrQHYTWy1SmknBX7a74VMdmUEHQknbgxTKsi51efkMqqLyerTLbWxi1vbffmRUUD4TbAaZRDc7njwToPB2E14",
  "key20": "46gyizBgWyTdXNho5Gq9z1153NRQVPUg42jpTgorA268YdEisC6ivzHoTRJmXSXB1fztdaH6Hx7HDipRaqXr1mj4",
  "key21": "5XotX1MzWzQBxwcPe5qBSv3mBvniyi4pXqd3JAFSzijCXL4UvVycG3AfWtuBik3X3PuNbgdiw8vpJDEm36yToDt7",
  "key22": "2Ev6HMycgS9JM9wTddmuSNHLjukqJJ28H6vdS9QKzgLsgyDrPVbCunByBtgypmXZ4DrUsmdeV1S6fzmYMxCcPQ6f",
  "key23": "5F6JDEWJLHYLjCaZgsz1bPUyT2hZsUNi8k94AZaHZMLaLyoYBMjhJGpceMA1AgYYZi76Ccyhnb8hx3TXXBp67o4M",
  "key24": "4T2v59NhZNuBnrH5A6uEZ1mkSJJgawvSHoAmkGJdKJ5nisetoNS1BQRKJ8YeoeRF28vozXWqZg4ph6bU6BCdUa9V",
  "key25": "q8Ten8QaX5VbZSTeuKT6XsahUTuc943N9MkV4Fb2NNgojZFTCnbzxwqhXKR5HwQ4L2sR9hyHWv964CgG8qcbby6",
  "key26": "4wsLDHPbgpy1xscRkjTL6wcgZYM3VrRH4rpAGxDhj3ZrymtbGcjrj9iEGkRcMNVwKhBZV2yuKKGwqmnoos9cNeeW",
  "key27": "5yhzjdezSryVV2vEgxdrmwjfKN5YiZBYaabPcWBwbecTkMwwxn5mY1WQk5HQCpgo1AHgkead3N2GAPho1MvgHuFw",
  "key28": "5jgTFotE6SLLm7FA3fY8Jdgoa6YKQJtAKL61w54kmtZKWfrgx5WAZ4VxiChqRnFow4gewxf4CU1FDgKukWtbzgQn",
  "key29": "34VdQALJ8MjaK3HyXYKftd2SfLFHBredpb2wYpFin4qVAVUi3EdRmR4H6EczuBtBxrkDk2ApC2AP7QLTx1PKL2oc",
  "key30": "8YdFvgHfLKVMyYMrdrUr3MHWQ4UJYJnh4ChwpGyCadxteKXfW1hVqYGuf2VADRmfHs6Vt8hXB3j6He5jZZzHeZH",
  "key31": "5VeWUpzguj7hZ3jX19YP9d8z89XDojmeRxV2MRYAe4hxrfhi6iKJBkXNVghZEDL3wv6H2uRJoZu8yoLz2iH6Y4FQ",
  "key32": "4EPoux8hHmw4g4YCwhPZVNHWvobSc1kNkkEZuAVceza2B83cyeAzrPEh4F626pEDBFZeEuX3xqbUybznY1ZpQNAd",
  "key33": "2ZsdB2b6hUN5FqpSm2vrkPiXw3dxRC9eHnFhbRxSAcjua13CEhUFVUFLEZmc4HBP9WA7RhPAhXQfaeeSHrjjMmRa",
  "key34": "2vMDSi22wuEcytqdFrPGo4Ao3Do28GrmvSPFm7MAhBHUZgdpNjDPpYwarLKjsvWWKvMbnowhYM9mCam9Vv7QTwYF",
  "key35": "3EkYFViTJpmnosrARvPRtyiFWv3MQZnfpAhjZg6jTHYXrubw3zHmoQysPBycx7XyqqqA2V2DetUiX6G8pp65Tuio",
  "key36": "4FKSnm7qeMPkw2AwFsnEcv16AXyuAfzk55b2NrhjDZh5gZBPFQCDT87j5GyJFHUzTnV5zNERmYbn7ERQcXS1mWp4",
  "key37": "5DvTMynoK6hTgiSKjMWgqabyiJdkUBSUXZQ5NcXtuieBkzeYXTdEzdGMV1zDGW1Vd7NV7YeBpwebXmeDvFthvhG5",
  "key38": "2GSSpJb87T7vK92Vpx7bpYMA4nzbF2AiFYHiKAh2YFH3XV2j8R7U1eaykanKHkWyuKki27EJ7Zw2E1SsJ8Wp2dGH",
  "key39": "53ZHYSnhum8Kb8uPd3C2bQ5FH2enCJCDit5BnzGW3cAC6jgC1qEZKSNLqVa9uW6ks9d7JidWjT5G34qnr3hf9ngg",
  "key40": "4EAY1nEu7yazuwfGDy377kTZfnZQ27LNDhFURiD2gUkjEAQGZsBpLfruah4MwoG6prddooGYvHvw3tnL7ETQq5nN",
  "key41": "4EoWNKuQ2YVRvGTb8nnjqn3koc7ZBg4gPqZpbf156UjSYknHKZd8iA7HisfBn4WeG6YendhAC3En7s8dM9qtsX2K",
  "key42": "2TQJ4yPUyPiArEM278kSRStxE2rURyHzmaVv5dtsMH42qzrT9dFS4UE13SGqrUEqEhdf9K2e8kJane6AX9H8LuPN",
  "key43": "4gxiTjKi4RShHnCEwp9LpbEMPWvhBXwExe3AY5Vd42o6zzMYWdHJR5p1YuAXH9tu9UpuYHXUgbzaSaQ5EDcMGJLy",
  "key44": "56TxEXtnd2roH2iZgU5GZbVgv2MhXNqk8h53AxNvKVgaPLaLdrNnbpV8NRRpzcxUgR13agQCiTQ2t8xiNLZevzfC",
  "key45": "5Jhf4tF4ngczJMNWo3BpGMRs5kXEaiwjH5AV6KHvnUsR1AFb4wTNKFb1F4Jr1Vq2ya6mSMXWBdP2cLod2meJ3xUb",
  "key46": "3wsNuaj2XFN4S3V21163p8vk3Putd3s6tNjbqsJhTyigwvNy4rzK4BL6RDEhJw1n4c383B3fFa3i5kBkTq1zF5kt"
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
