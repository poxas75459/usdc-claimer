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
    "4U6PHHUL4B2XGXWCniPpgK7kq4ym3ZFQY9WVzW6skCDVUtuuKx4Nrth9Aqzi4iT2o9p7vxMcwY8FtWzx5HGNqGFf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xMJLrfGUMTHc8KLGnirFBvi5vAEWEqpR48NMmaihnrnhCd3FW5ELacb6L7ubVT9BA9dfh6j4VGevrbfkUuX7PTq",
  "key1": "2gofPjeAdJ8KJPGEZHfRHQqPjrTqKkxGv3GrqQfDCzBG9i8bW6hF9QvybB6htDKmgLMm7CT6cVnHW8yqFRFALQRZ",
  "key2": "2JMRcVYewJsWjTa7m1vCQTeERSjsDPREzh2EmyTogVjY4RSpnFudHVoMWwG9TcncMg6MyQgTvTUZCyPs5UXG56QS",
  "key3": "8Lup9JC2YYMfGMQzgPNseWhSuijXMz2U4nitqfB7xk7H7KEHhwFVpMv7zqQAao8RYhSLqhLViMq6xu6Vz619UcH",
  "key4": "5VEg87hQnxME4jBCz4ZCNFMrSezeufy4CkHTBr7kkhiH46VzJmLEW1dv582WmM9yZoBE7t42pv9EwT3vr44fbsUQ",
  "key5": "38YN5hKsbRMerJpQt22ozbGxAtmzWWfvAEVMqrmLQiJRPkFHK8JwKmGVRYdGStSd51NtCM5cmBZpmG6vcYk3cBxZ",
  "key6": "3bC2DdGE1fNQU4bBHyHWUDh6RC9GuAC7fi6WWdYFyCAwSqV5vqppoZGHAvhFbiKouu15fFeBABmeuGpvCAXFkiXm",
  "key7": "24rHbgA3yTJKu4Yhcp1cF2x7hRQxF4pA7WwCSBnxS36HqLvQtqhouoF8iX8tepaD9TvWdP41gQ2XmMgj3k87hLKg",
  "key8": "7joDoF2BongtfvtU7rFz2fE7qoQrQ2m7h2kyDsFSpWwd5fVnWiELoebtkjxK4A6ejApojDHizNWNwXEDpvcFhuW",
  "key9": "48c6SnYZC8czmSXPiCSUfa9KPtAWx1YN7rpdgcYCjWDDYUcJ5xQpEMnhhMyZ24qSm3XUnwQwSZBiogXfyQjeuy4Q",
  "key10": "4MVrkmU2kmE2qAk6x86fX9FohRR5bP7simkvNcDLcTaSedoxrodpxnkgATCr3dPryq7ZdBKck22vodcrAA91B1M",
  "key11": "H5R1xtZdnEhFyzX2urfZoEUq1g4MzXTz25H4epJF1NqsdnJsk17JQnvHc9Cp63rTux7iKrCKkEjssF2cx42JfrB",
  "key12": "bwZxcBuUeuvEdSJfUgf2T7BCFAWgzR1j17EkA8ywojsh7X3Xpny1Ci8FariuYPy5KJPkBRVW483dfe3tdinYWrD",
  "key13": "3agJN4QAxFGBSPrzf8ULQ8qV2ecsQebVhPwgVBmeXCFopEekGif2mjhJV72rQK5D9eZwPnxamayAvfZuSFJNy9qf",
  "key14": "575PxSyw1AiG65QfyXtjjpSerZ9ttZa3Y9Xt5EuwhoUAw4bH7ET5Bua9HWth6MtTFkV5d9GPs1YxDj3RCJMWszNW",
  "key15": "2zEK4SoT22qU36wbMv9TogqbaJj8jUCbXGJVHqEfqV64Uvopyk5sdGC5VWmGjv9xN7u445acGy1P89PgZnd8Gg5V",
  "key16": "5z3iHQkjpcy3TJj4yHVqEkYsxmY2rNVFL5R9pwKomx9spJoMkGLKLjU5dUT4wyRXDdStGSCYsaemBDRmJWgwG6mr",
  "key17": "4iC8J8WaBMYydhn2EEAjWFHkNMCyM6sA8Az9Jy4AepB2w7MPfP1HJcDwQQgMsb5cTSKBzGrmUg4RnDLdBXiiRjkG",
  "key18": "NnZ4bLtPRWs7acQZpSZsbSD1miAvoAsWVsTRzBzfHsC5qJi2oxF5w97WhyrLLBbpqvLtDpPRtTqaZ7gdmLMiA35",
  "key19": "tBpAXUcFiNYA9A8ACC6qzhCcU2gKZsNLeRumj4TGs5iHHFvEXJtH3hhDhiFhHxq4mivYfHcJCFqCEHDZDwr2vMp",
  "key20": "4tNP6d1zcUJx9RAxFrahhC6YfWnYDQEVt3kJ88Gfp57Ttru7xn3A66d9LuCAKUVekGMyfdWuLmd6Tjo29JPeJ26j",
  "key21": "2LoaxLvfVKPp3w9RkYPaH31Qe6MsoiRbioAaRRCQiswAr19WBxTHcWyjYBCgRuMavM7JDymG7eXgDD32auMyBoYC",
  "key22": "HSdRkq2tNc1XPWzYJ1tdzSuUpQ2HJ7C6m6AJaAazSDbJALmy4SP7XQjs3qAFtzQ3TADfPbP627EkSK6XKTGSC1W",
  "key23": "3kvS6dYpJEk4KRjb9LFJovMTGfgs79o66YL9qLg7UPEpgftMHgD4544ggzyF6m4hhjzrzZWkFKTjDMvzpUvHZ7m3",
  "key24": "2V49j2c1wBVc7CaAQhFPvRCMGChYbzWteoGFZMyzn7rNcLg7WJfd86aLWj2bHGCZkoSM6Ssv6kc5154Hd1rb29SU",
  "key25": "4Rqkeo8fuCUcjwUW3QdHFndUipQTenrq43MfB39vpPRcebNMkNaqPeaQuq5T4QvzJz8pVyJVxVevtuZwvdYVeHeH",
  "key26": "4yoVJsQi9EvwCqTQFdjFp3LCp84R4mKNoaSwff8hMqdcUjprPdPnd8v9YJ8dvUzqdndx8g9y62WqM6qsKjsUu8nX",
  "key27": "2F4MEqZ6FeSUWwHtPNZqSxYuyZ6zvMs13SxMboCujL12JVR4U9cutdXq81Ts4zzwdR9ED9NZ3fNxDntwwRkwZDye",
  "key28": "5SFvV7zCwgNuu6Aaioffre3XLTgVbGQTNiWyscKwT558U6swPRaViBmqWeemfkiANAhG2xR6H95dCCb2Q44oEx8k",
  "key29": "4ZDpBnym26A2EcU7oY5MhRXA1cgrAWeyKnpQzB3qWDD4Q4D5pNiqY4VQ4XXUA2vpfCjtMoJnS8RqsaFiqsrN23Cy",
  "key30": "3ai2SX12zHcyEQvmrMZkYsEZ2z5V4r8CT2TKNbyPM5ALWTKTAm3HYsHcVRJ4CW6JQVPZf4uB1ksKwiBRPSB99aWG",
  "key31": "27RWxWWFK8SCaDYqMunEBt5k3syTADpN2B8DifkvrPWLQVN841W9pQhzcjTJ873QoBPKooF1RmPofABfb3gnBZ5t",
  "key32": "N6ZvpsEinwHqc98QT3bM6PgYHJiiCw3kwukb5P4gtVLVyhLeXdxp268R6TggGexBowUtbN4Dk1NciPqo7YJMMi5",
  "key33": "5vhcDDXr6E7vH5deVBGkssrUY3svh8bxvCa1kcUKu1xjBrE9EV8rZKNdiVk8PTSfLqouFHLGeAnxFfLmGBEyK6bz",
  "key34": "3ZtREpkzi9g3FMD9urz3UtyqTbV3rLPYRjS3U1SdGf5kNkzyG7ZkdHXm2FULTKfSQbP6tEL67P1dKHaSFiwtAdTu",
  "key35": "2829rn4bPoBq3zf6bC2KPSkKa3E1Da5uqQTBA3CdkY7dmAZ2if1hatgUCemz1jrL9jLfMtd63PWZbV85iWWr3r1R",
  "key36": "VWSRkC3pAQYrF7Jig7ZAsKSthj9pftW3F7pdBuduU7iKsJnn9BKNaNbPyh7xTtQQ9kqBwNryHo1BTHBiMvMmzGY",
  "key37": "4rWW3PsfBhpgMu1hSG4GuG9FijFyP4Kx79BYiuGaiUUrR75e4AiUVc9jzgUqxBPNjXk9BKNWVUUiTw3yEbX9aE52",
  "key38": "54faDUkGDXtu4XVLQ6jRR2qkAMid1XUBTMWs9u9SqKxnqykMM6gLNyeLJKnevh54VRW2dcNNTRkcxxnUQ4b9UbEn",
  "key39": "2eKhpDx3RPuzZ6wqrEvYKhSTq9jADUowKBNvJsztDzXV5mbiPCtjv1jU2vUA2XXvNtJEcMVaXtZ3wyzGk3g2NQSh",
  "key40": "2fAFExCYYapX3gfjsPfvGU482LTKYwQGsa4sVNNA2Gik5aKz7yV2cHT65DmSp3w1bJJAJoKLMbq8v8GZAFb2M2gf"
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
