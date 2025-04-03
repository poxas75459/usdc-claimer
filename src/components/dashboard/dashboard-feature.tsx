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
    "9jUbzrDmiJ8ACRqcyeyoSWoSr6Rbruc7tWMQkbP9x8FmnvVb8xJ1fJtFbu1MJ3aic6ESEnn8SykyJTxuSob7FtL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c8uQqwMiGgKpF4ANEiRsXPWaDc1142XXo296AhDEbxvcAr9HUB63zqqi78aBsuHWhLyjggBPFdcXQEwayEGQ4mx",
  "key1": "kts89FKfGtMxGg6qVv2LcQfdsuVqocVKjEPgjZeW6KTo8vi9nNwDHsTMzTVbgfL5jCRmuid2hj1iD9Hw1yn9nkn",
  "key2": "4bbrA7wriGsxpyTbNe4FjaCneWNK4jidkbwYYhAAbC3HnSyT4UZHRxDpx2PAtLTfiDMykenjsZKHJ2bG4QnNhJqo",
  "key3": "678wH7DWcYV7b2vD8x2Sw2hrYR3GdcQVUSsbKHcKpXgzrwGpsPtaCqRqwwhQSHUzsDExs8p1gjBxYhti2CRjw4Ak",
  "key4": "2osPyKSYkGL5o8oPgRQYCZ9f97cSwmE1Nb7cECq1HoA9q14AXt7VX37ez3P72PMErVpc6Y2GKbJgZR1Jtf26eaic",
  "key5": "vnLEjH7r4jzjFeLkBxJ5YZEAJWzgMYbTB1EBV8RSMTAZwG9H2o1FBxhkrvtzhQNRDQ5TZ98nB2NMVvJrobZ4qsT",
  "key6": "3icWNHzxwqL8PkxUx7G4hnoffdkuqNyqDY6HPK8YKKABRD9HZiykUECr4TTkoe2b3YiweQWAyMVmu3CoonpwmGvB",
  "key7": "35umEXEJgMhthuY34TbUP3GgyomKJUGjaMEUhSGKUBfeTrqh2UBU464FXVKjqfDrUWsec3YoLdt2Po4boB4J2YNJ",
  "key8": "LaP32SBQ396HCzFi8qce1tHHtezJgHzxkjuLUyG5t9CAtrHEXByumNp8YbQWYQukp2o3GQh9PPXiyQiJJsZkH7x",
  "key9": "2XJLi2DWKQ6BPQsXQqh6EYuxCxEm4avXPzUk8kRoqngWUTFShXzkafXtg15qdDsYwEZThSfZUdXmFf3jQaKe44cM",
  "key10": "2iGHui2A8m93w9RCaq19xt3PozM9YU5yeqBTyCDL9R6Gy9e5f9RLxWA17hs2FxuCX55r3ze3Uf1qyRioP9vkuBXJ",
  "key11": "4TcpZ1itiYMAPHpd9fGDztXQwLkseCm6oLhxsxtyF7vAbgT3Cj8KB8bQmNxWBtaY1xD7Tjx1RzVFjMer1FFdwcVU",
  "key12": "3Kib5oZW1FMMgVq311GJvfTWRaHUABxZXR761JgTpz62ftXeb1G9RvEMH8B4mnxSdj7ckTNAtTtpE6sHfVMAKGk2",
  "key13": "4cgzvJq6MVpp73TQiFKhFFG9T8Xp2pAHsfoMsxnKagzZYwtLpd86CMxHsAo9Nb5rBoAtBGGEhk2kt4tUz9Pxcv23",
  "key14": "QT9UUL2P27Hh5YxHnwMZLiKEY4jLjHrT8bcK2vBayWtmeayXs4XKVFFnxLu4QoXv1UnrN4hzbwej26vHRWt2Cd2",
  "key15": "2BBPr5V4bQWKcQ4pBBrQ1q34wjQkCqYoV5ELBaRFeWJgS288CnpoAfYA27ksm7GMqh2mboLRnegRch3HyFMepJWg",
  "key16": "5H5QRWt2JAUqFk6vafJsqtYr7Lfs1x8KDWkYhUr4TyLcSYgh8yp1Whv5tg4sD42dhRq4wmk2VBzjzsVyKZ23TQSe",
  "key17": "2QGZ7sNk9QbfGHzTvqHdX1x7m8MHTr6PwtGAmoaWS8983duYX1remNbeay6AGJdBy6zY3rRAnjEqz4wqJGtTaHNF",
  "key18": "4QW4UuKfiKrg1ttGXuKr3Amd8Do337S1msPvgogicyh96PuLaXigDDaqgi64EsaVKzYxrbbqEwwJf4UApe4iVmAm",
  "key19": "2nU7nMpB3GS9rEgHhdTGqoUYQ8w3pYevu9y7P3HX1PdCwdFBFfp4KdsEvEUE8rAgWkjuDx1ZEwBpLGaHrTh1ii5X",
  "key20": "okGtQbMDHtLvtJV6bRftdnXYFvnfZNHN6mbwdMLSbXR8d2ZMQ6LBAFYokLTTrVYwJ84BVYFbxtDH3VTgNuVseA5",
  "key21": "4Uq8MygXLmcnNfjPYuebw2VE5da6Ld8V1w3H4segtdQQegur7M2mKN9vYqJVczVna73YG7KgZumWh3bwdtwKUqM6",
  "key22": "5VfCQY1srGrotJW3pCATbsDxbDEtMhr9xrHCx6j195K6A1Y4zuv5Nyn7pzeBoPTBCzFABEEvMid8EMspPqN9HvX6",
  "key23": "CTMxT4tgnb9RQ3QxjpxzmaT1RR8nu5Az1WRrwqgirRPVszCZtxGGU95oaeYwRZTeV5KL2Sdv2s8HmM9h32bYVX3",
  "key24": "8kEcsV7cyotQTsgzjdCTwpK7nBYYRYoBqrJ9N3XFc5XiPgWSRcatfqPmauvwKZ1bHiDUh3D6FpvsKU2ycMAXHcA",
  "key25": "exiap6iNpYkRWq6DYK6EuJpsJFnZSCHUwDdqzDkCfEXLUDTcRp3qAEi5CSm983K26F4ELeqg531qUwcDeCaaLrk",
  "key26": "wsMyLDqzj7wq8AuTnyZHMdUqpA8mfiXJsJk9fEsFcDETqPXt7zcTfaj5kqAL32pSJPEsCSAkCitdeZWBcRffJyB",
  "key27": "3qFc1D7tdETguEHZX8cEnAA9pKyK6XLEyuMPoT9HZjvuKkfN23ZpYLwwFsSRPPSxAatKxykq4hpaysZxXKwigxMK"
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
