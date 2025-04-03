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
    "xRnVZaMgRuWTQwy3i7sdgzrBRHc4dxg1aaVFfxHsfRyFQd9mFXDYZ5p2XwPxTnKf3u6j7f7RV3QWcRX2wwFQq53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Q3BHd6bu42jUNEYaEk6kuqk9iw8m9SVbZCtzkZZuSKojWQ1ZT16TLgJVaoaHfGK3C36oGYUKnBmKZ2TP4AwmZbA",
  "key1": "224B7ZZsTQ71G2unFZFMAQCswcZmgHwqZwAg1U4rvocy4dyvgR9Uzk9P5jnKo3FhNNLCBkma6uEoWqggYY8ggAqn",
  "key2": "2vjFkpqC69NmpeWB28gEEAYzQwL6VPM3XuTwiPWLZngu3WCRQJmjRAWy86mhp8XrL79hRRWNQvTFqWxLH5TWnZ7y",
  "key3": "2jGV5k21yJmYecictDDHrutfcwUL5G6RPSVTz1bnN1mZrKGXDarkfVtafuKhFQFC7nWZpauu8ZWy8muekNEiNsGZ",
  "key4": "2MMZbHGLAtNcLahkU1w8cKPtbVdFRhecUBSsnyh6h3MDPWoV31WqefpwjE18UqYbUG1Nsrhm8bgEZzuLQH9XrHhx",
  "key5": "4u9UQ2K3S3aLyYqQDpGEfnE4jtY6hxMRxg8fUAwdyKuwGYosoBACauUPVTkDh6riripgpP2tanSGGtESisuo21VY",
  "key6": "4ujnjk1ahRZHWxXGJCnkDuyF2s2pNRFqRNuPD8gAMwyASuNRXvQTdau2VsvzTyBy8Sk2hJEtc9nNq5CLXH3u2QUm",
  "key7": "2FFXH8s8Ht1CvFP19DgFuvParA9njLRy4FQbJHQi8izuDBPHvLdoef7dE2vAFySjaNb2CQWZYvuv3eohgTsZ2wcA",
  "key8": "3DJWad9sfCiDdAy3MCG4cH7j88gxeQaZLn6TRoBEuqpysofWGg2ku1X3xKNsWkHsCupBhSLbPKATGSo2MAtxeKFe",
  "key9": "5UGpKx8vXmpsEV6eJrPYvavjddyYZm2wWDpoCAMYsEkqm8wF2knZigAh1LzMBg5JSP5matBpWpyGqkyxULUEz8ni",
  "key10": "4DhZkqexLWCUgLkjRkAq3pMnDRm8dHETR5ZbFobbnjK8pDSUpovdSGYVVCy6AdmQoSU3Bfuw5V3osampGBkX6oQG",
  "key11": "X27u6fiA15oWuYVFeUBnJ5gg5DiLBSwEdWXhvgQsuQZkFxvK7288wtMLPe55knDFpCJYD2WUcnMVdv37jZdaNrZ",
  "key12": "Ptn3eCvJ5boNFefQPUN7xynGMgdMfNrjHohXHGZdQZhVGq5rPKzfGBpSePP2ZtePGHEpDkY4Bkb5csu6dwUNtvg",
  "key13": "3URhwA3GVK9DEvfYjEpSxrSofnc3upeUyiePUhzz6YHNTandKPe78ZpXQb7orcdB2HBqDZVecQirdwiydM2D1KA9",
  "key14": "2tYXUf5p7P1nszUdtMsbtMn3RrEsnWRCjLD6s3smkwJXMTqsbZvf7autZasE7xWhcTBHkTr2vhwRU7hBZxkrEtX9",
  "key15": "3VSQ96LfFtRZNm8x3AenHoNoeC9NJQ6HvM9dBtnCQocEUMWixeVwn86GY85vkRAE57H5TtjmEbaYoXQzKbJCDuUr",
  "key16": "yRqni9vZBsP2NLq8C9Mp2QbsLQHpBGMyc2raqPXo4g4wTBz7N36pAFcKae7tpF4osZ2VHkRZT3Yhbe1W9seoEM3",
  "key17": "2tyRgkyyxEaDXVhcLiyp8rKVTqyeaLqZCkCWUF2xfFGCFHBW84iLrgBn5SKfyfpGqn8HT4RFhD5SYF32PqHjp6An",
  "key18": "51icEFrcHb7V2XXrkwSAz65cJGSHTVoi2rQtEJWJ6KJFy1pMSgKoZrt3uKVVVy9qEPpnfzJyfPLRhvvSZxePqLiV",
  "key19": "5pW66qKxzgbcCtAVGdTVU7YKiya2zAorHoWWmdBnTEReoBhryvzV2Y68KyFfihQzALfrhGKG6s7qcmdmbSU1M5Wz",
  "key20": "kSNTCbGtqfBQ6g4YG3TPNaubdB46xhRPUtjZpa8apX7DiVMECvPsVMsUWtpb5BXXNCneSvxF9hLWtAU1Sz5dhNg",
  "key21": "YbKY25pgkbG2rXEzSxfqJWn8x8d8W6P5NDvU9fcqXmU97LS9p6tzd16wjEqetk9yBFnNSMa2Y7Vc2jciSm17Gy6",
  "key22": "23tmqmZUMLpjRHppS6mnbaX3CvVxtaoK9ugK4hv6TJnz5oLQja1Q9sGEYbWT36AokHD2PAsxRu5xHAuhtmSmLEyg",
  "key23": "qtKgC6L31gihsgLkYRmXnnnbZXmraecddMzdSQts5ZwhVa76XNeoXfcFYZKKzSfXG45RMn6C5adFWLx3LjQ7pmC",
  "key24": "44tUZ71kds8AqVD1RWfkpxNQSZbp3qsgtyXef8AehfDyGp2d5dvmJDu7KcKFjjiDdF2UwekWNavFeEUDwUVdFrdd",
  "key25": "29XcnA4uG9vQ6xyBBFgX4M8fNGuP1MKRGQ9VHnf3oPfUxtUL7fCmKW51dqaUMgWsp5DBABMgHm7oRRgkRsydtHX9",
  "key26": "4yhbZyiL3ZMGhsghQzNcTT673wyNXYp9j2rFQcZpbuEhz7NpHRhshoCRnMJKADvijzJ2piPpyeHStBWHVmt35Sey",
  "key27": "5hZhWh3sxXBWABnfPpTFzKpmZo6sgUzMia4U57uk9jW2AEtmoHoYVJ8bXgS7BjtHc7poUMEry9K26nzYN2wrHPVD",
  "key28": "2t2SSsNUWrcDp9FXqhiv3j4uCqomkYtUenU6XqXZRWaDiToQTxfNaGcMUSCFCEiitFZDcoM6WF48P7qGhoCznaCK",
  "key29": "3XKbCVsb75ThZb82edYzoCdnbssCXMuFNdhWD7NCXBuT5rcya7VCzZbvWqdT46M77wTAm2i9KJN6Km4W699beGQh",
  "key30": "4zYNUDpdHpvwv1cmkKdBxMFoKbCG9i3wCE4EcsW293twJytjM2kEHThpjtp8BH96LzPzzuJYhiZHEZtdvh3CfPvp",
  "key31": "26mA7dZXWm9nfdUrNx5jUvkUaZkrgrm8iXGPMJzDPy194SFQ6sbBRNX9z524itqkC9vzMVZLW343zdHS17w9pQ3F",
  "key32": "4ttLQ3XwKKiX2UWY9BuX4M2RSgbkbdgb5dzGr7ZW1HRgy9d7ZrV56YxebKtVsvpr5HF7PG9N4FTgU8WxJgVQUtuv",
  "key33": "33KqHiifvyskTquG4NhejCSBT9GuorXRfJ8pPVV8TLRERTQqZ18iHHB7dQrVHTWje5Kcu4cdvKKw5tJoxemAGkqk",
  "key34": "2HRw5WU3DABNM33fKMNfSmDQEkiyY3DmURxWbiUSN8Y8JU5KWDU4ydYVUuXZ5xXNXvJHPei1aYNxf2kKgyDWePyx",
  "key35": "2k5QLHAanxa5Qdtc9GAoVoQgpG8Wg19oneGuKDkiRG5Jz2H5UzKEyRBiMUaR4oiSGuNo1WXautCwivSAxymvebuo",
  "key36": "5DJRmr5qhnBbo2wWosHf8m8BmnZjENTbRsmictQT5scWsAaXcBX5BvaPpa3hDBuqVERaBWq2WjcfwfhrfYPykjMs",
  "key37": "ABeYDgtTa4PQw9RAM9YJTGSgGD3K3DBsSyMBNoEcUQXkAYkcnqx58Y2X5KU3guugRRk4QVh9ViqnbwKm2HgTMEq",
  "key38": "619PiVKSvht8J3w945Xx8pG2gwDjsu9pj4xYWezt7nb7biKvnPw2N7ykfz9X1N5E9X8x5uYayMDTUx2aYxWUvCRY",
  "key39": "467LpHM3zte9KQXqqyzrzVrFWEbNNMYNZGzb1DrEE8evju5YvvdFCsRPboVb287MrGrY7pi87SFu8W5MhxRCWaCz",
  "key40": "3VFFiB1UP4TucmzwCWkmKPc6nUfqX5m2GDZPs9Xs4KDH4KLSYJVpydgUcqD4Wf8EYvgMK2t1FpX9pnMMVcGVvcDB"
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
