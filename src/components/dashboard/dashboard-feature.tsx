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
    "pZhnLfcLarYymwnX9JP8fZshRiZyx2jYd8QZGkE3tNabLJcqfKjcpgpNKNsVTdQ1YxisZR2QS4M5VYW8KpKUBe5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cmGwvFiSKUb2fAc65fpGo9BJBGY86yfTYFjwQajUvezXas2rnuSL43o4U7MWK9b5B1JfGERXPPkRmZPTEHfKDs9",
  "key1": "3KtiAcdronEiigjc3RUSdgjbbJjonsL6NCESsPDL9unN5uNaS2gzwNQYNskiq6XmqsT6F1JRxcFqHB1hKwB7zrTj",
  "key2": "3ti6LY28kLoj2WMDkAfvopENswZTSpi3bG7NNjZZhAiVY93vZUXnhXTSfRHHSmEjVcdJ9xjW9iD5fSxQ46XZShRt",
  "key3": "5Mop75sCvCv1EixDx1hibhbMXBvq6Q7UT2A6Y4DtXDVKxh6CYrFdxigbNHQJuKT52EEUaBrwoKh3Ezuz2Nj419J7",
  "key4": "4Wg2L82dsAw2LESvP4CDzp7bKMHfYLBq88XdBdTAcsu5435wA8b2zxdfaPuohao3Z16vfFtDp6EiP21345tAqnUB",
  "key5": "2KK8jTKuEmRadXkf9tWKyHSojKwRpB6WXrFZNU84SpDj7VYVti53SCRuztzdiu9gjLvfkbC89KvG17xXDaaWAVgv",
  "key6": "haTzm6Jk7vesVVhaGHwZSeV24XKH1rxugUW5gFdZEuJxML7r927iRuHmHhSLLCAjHYFHtcKQ7PjoGwGzZ2r7Jhj",
  "key7": "4uz69px7nP3KfVZPC5yuAeujUqFNXnCX3LJU7GBuDyacNyh25T1yVEo2dvVsyA7kgb7fe9YdjJPk6fYx2cAtBjs6",
  "key8": "5c1WMLsx34MYdrRqkkrQj3oquKNRXx7ETdT52ZuDd3bx2KYMKdwe5d15GA2Pc65sqxNwzjvAGxibj6zACR4K57Qu",
  "key9": "38mgZz4p4Ua9Azc1Q2YidGMBj6TtBUeDuBRrwkq3uH7jcLj8eQMbgMfVSebHJ4QEgj4Mt5Aqk3d6AaW53b5LTM3u",
  "key10": "48AMY6jykZ6VWPw3oDoQHvj5o7ywX2pJa631PTK2qWboax6hUvcGGL1c6MCYAcmHLkTCp95yXE6wzG3ueWBm5xvJ",
  "key11": "2jSLGZxL3NLodHnagxCyVprFU6zf3VER5h56d4ZRGEY9fkwKJJbgRvacNbU3Ed4KfjNQPXgUQfKBjx6MipXAqYgG",
  "key12": "3rpcmvimwmSbu2qCCwLENeJB8V5X6Aq3yp9yBGfSuqghPy6tP8UYKUHXhGASowmqyHSbAX3DCcNUZpanq8F3ddJJ",
  "key13": "3wQskW8JFmQxZR5Mirspqk7cj8Fuw9FGXhXpVGTAuKM8uUwgvh82AUGsijg6TPe4a3B198Y4CUMdDwsk1KH3hS5F",
  "key14": "4KVLYhnVZdKuyY94BfJLYMBu1J3sYsbhUVdWHB8R2fFUqXPJ2bsq9jEUa1edBGi2cHzj9VYWgb1SizwYrmd1a1p5",
  "key15": "3xjeHBiXjKoKJicZNw6mbKjjyEcURz6wcUc6is8GAbn6NCju25ADupuGDq4Bo6GQ7giTSbpbUACfy9U78jwAoBT9",
  "key16": "486hnELo1ZT9j7FvBiJWEpnraUrYXVKoU88Z7bMF63TzYdwXub7ZPtjFR19ZoJhpxQaBDVcjJgkWu4W9oj6UECNs",
  "key17": "3oWuLYDRUznPTaB1uYkwiRrQZbsBCrde8BZSRcWZKRTF5WQoasXWDBSp4LpRMoJjeqX3PoyaYBgqd34Uao7ZuCDy",
  "key18": "2Y3TTN3shoaWbkJPDzNWN4ATTufj22hZQmJCrxxeeoeDZWxubJKycDCLkEK3pcyZMngNVsRywNVpeCxu2yUorPWP",
  "key19": "4EEoTKvrKjD9GfVewXkpBKfGxPoRhvqecYQWLNugtLNxkMdU86USdUwarsSd6sgL1Y7uWopasXDU4zr5gatZo1Sn",
  "key20": "TKwev4sk8scWnPyzuucs45L4qFd56jonoBpxG4giebaWtQdJ5LQV8iAtZEQZRuqeKMTv3UEwfZd5cBMFbL1Qdht",
  "key21": "3AdXYda2wskGdPs7tVj9VQKzCQMhYbbxioqGDvaBtyzj1p5zhuWhPQZQAKeH37BU3uCPK2DrfYtBKGr8UQ9BLscR",
  "key22": "3Q645JyMNurYGGan3yPczR9qpp96tcp5cJRtGZMxtFCNaDXpfZzmnzJjpXQkeq99bSd5FsmDhRmoVLhvps92JNy8",
  "key23": "Jh665Hxen6Y1RVzBtYYxi8z4coV9zx3wj8oBbvZMMSHQ14zS9drVbGaVn7MQcusUgX8VgmPsVtQToJVg4K77fZS",
  "key24": "342ApYi78Dox5XPJWBYsZK9PkWadpmAie2Ue3tk2DdTfBJcsxmi3t168bkFgTEfygUZiD6Pfrb199vu974RLx9i1",
  "key25": "4MzDPiQz589M5pJYCeWYG5PVZf1yYw6Lhc1KEx6v8rnQeakBF8zrciuu7gXoXQ4Npnaux1koipFnZBSuv4daqFUr",
  "key26": "5uiiRJSLgR6r2bUjkDWwNa3y4Tcb2t44mGGWM5ZtBaVnuwaeD841bQVMfXNgCSYjChMCJML91f3Tvcp7RsDo8yuq",
  "key27": "5BV2FASAXSx9iwKYiAvAzRdUuXJE1WQH3q2PYSnefjJt7j9qS2L3H795dyvAmcEp2n2r9p4hdrDRhzS8H8GV6y2c",
  "key28": "5uq5FBy2wzU9sjmj1J1cFhA1eF5DUdDQHVjpEHcWiXDsw3obMVcEqgH41gn7HDWmaiReVwNivimdK6PUDj2YyaSg",
  "key29": "2WFpKMdR4Pdym9iJkSKY6qzfycicF175hsv9jkpd23Qavb8vUMZP8CMM9F9mnwjfivHZGzKQsCeKq1LpxMCRBR4E",
  "key30": "22GDr74iY7QmQFFHWFzqeDUNiLhXahpcbjF56Zcs8zErdaocSpbMUde9QB9YoysKBq6dPD7fagKMixFNo2hvX8cH",
  "key31": "5826LrUvAzqTsBEiAguqc4AozWMEgizbEc6AMGkupZxTLRzUK5quunVdPCQK94QEQrbm6eEFYGDBoKJ1eSZ7dLAZ",
  "key32": "3K8TZHRQHUyjSE44QdoZEzDryte6RHWmpmiTt2QpzT2GJm2svW9kC93WUk5vAGYDpgigkFu3EErceWWMpqQDzy2W",
  "key33": "5Bkd2doGNSRkw4YJ4H3gChnj3m9R4zuo9Dq51afqJtaRpubzQAGdcAPbsqid2P82ebz1Lz6x4wCV3uUj35VrdvRx",
  "key34": "2BJYyzTotAzZ2xtyySTpidwTCdc7fnWbaBeNqqrak4BWbibWmdKSPofQAyqY2ZkrTgVxXsNqws1eMPUUPS1QqQ3u",
  "key35": "65PaJfZQ8PKFti6zS2Yvf7baw4NwaX3jf93AsvCymHz6jCWHGVmdL25V6ZwQhSXUkesizjbD8LQGeUr2xQAvy273",
  "key36": "ZKYtMhRttq1tuUyeE9T3PA6wkpieEoZQCn6M2vCWhCph99sqvNjWLzKJxMdPgEUQXq3vht6JeWXsom5fFG9StbG",
  "key37": "4ZGDjda42ngYpC2NomZwT447Z3NK74ss62awKz9Yc3KqcMagzuGaomKu38DW3p948SzYuyYDZhJWED9rQB3NvbwT",
  "key38": "2ra7QPT9phFXgSwbTaaShSA5hKoC8rhLm4Lk7p9F7AxdU49v6PFCGSCz1DZ6bgRaBC4i1rxkqbaM1uqRcVtMfEf3",
  "key39": "rPmH7JJtFMrgQiX2fuAw8uLHZ927ZcQ9R3YBTBJir4BGeLkboxyNbKuHVwYXGFkoA64QSXBaiYauweocra8LRvf",
  "key40": "5c8yBGjyyY2fFERtvMCD5489xDBJyfjUneZ8sp2RR27hUwbu5NYMw2mB2jME8mU3U7j53768cwxGWFkg6SsiWfNX",
  "key41": "3CwxbbsQTWwTgbiZyRtJzqAzmvQK2cThFb8qceWbXAwnLWQ5Jg9Fx885X21tjSwttz6H62Wjf6qn3Qbi3H1Ppb18",
  "key42": "2Rum5BrxCAi4SX4C17uJgjJC3g8f2M3UGnfJq83ssvYHrkng6ixK3Gv2KzdgGCYHS5Tq4hsusGZfCm4Yi65YG2TH",
  "key43": "bUCZohHEhhj2EdbntWksLz65vCt7Gf3LV9EGn3hKKYBauactAvqkpPV8XhMCHWPCpooLSiy2WN4CmREkYTUyd7t",
  "key44": "sPsn5UAKRLumSuCGegNf2QyRACCPYGKhcR8daqbLyxZSu68pxua1dgVWZCNECxZ3dYxiMRMWnmdp9B7GPLdpu7J",
  "key45": "4Ge2zs43cF3GPFooRxHponBwAY5KJxM6DsDCi9smHEkAg2okf9sxRwZjvxKBVgiojPtn7ixWuR2naboNn7eQp4vq"
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
