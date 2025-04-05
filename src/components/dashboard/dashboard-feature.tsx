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
    "2RCszdU5Ftxs9WtKnSgib66ZuMeH8bfG9DKw9zoLkJubn5wwUPPZWhBdAYS27hDN7Fh1tFTvv8acM8qV6LHDpxx1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jBeFoTAh5D5m1hLEJLXCT8KkwtKMk57MQWJz8tsVqosK2gcAYZAqqurtJaKh7rP3L382Hki5iTpdqsj8GQhoyWr",
  "key1": "5qr2Ca96YDb4YgBdpbHJSWwpY33pXYokvJzeScojPvvUtVB4L8PbY1VXesHAfEjyZ9Q23o8hgNdkuqJRXmg12XsW",
  "key2": "UiGUfDZTTweszxmkFfujmN5znRARZyEFy2X8UEXVh67jG8z3mv8wTmUVsKp9a6fMWkQqeJ5jtaNo6BeWr4VrZF8",
  "key3": "2HNUYgvWexpimev9iGKdFGcT1LYzzfJSqcLXrhKtVpozzWzfdq1A7n6WcmMkfzGJgp7MzKG7V9K7i56rikcs2Z4C",
  "key4": "4NkLmH18d3oUGy8QYy1oePPdiBdwCtWzVXhLhNxsjG65V1o915myvq4WYhX1wTBr1Fgst25KHteoexDPakcBueMu",
  "key5": "46Q5uKoKkJ96oJNWoNPZ2VaGRzjjTmrjaGS6YRwmWygkHE4sDbeWjfX4X4ktCLWDPtztBn4rW2z3tRSerwTLHmAp",
  "key6": "5bQn1bJh1RazQiJeJYrKmyWbCEZQ4hCGquzQvvFRDDkfGY6M3LGdV7cqCUhsLRwGxqE6GWcGoVJhDbpMwNzYwMhp",
  "key7": "25MPk6VhGAx6ocMHNX5uNhgPMYcSifitV9bQpfdrqr2XyfcVdrLYaibuXzNo3gByDVvm4SW7dzGDwU6NMvxdZfvG",
  "key8": "2MQQWBTndxu6UyhToL8RgsYcqGxAHbDVz12x89qGAz9BnB6Yh7A9m47ELjyhcAx5vPFAcHxvxAppRqKv5dvbayZb",
  "key9": "3av42QJVEzGHvpXeBi8iwH6Xrtf1fZHk1q2PxxeZChaWYR41C411TNSMyZQLBYMAeUmf9n7sWopfy5vTZb2h2ssm",
  "key10": "4gSaBqoLnsZi48LQiCaet6ovuezBUr75cKq7ViEmf5xAC1nKg4trLRhkcL5BkkQrVcBjTGcmGJzY7cxNMKEsS82w",
  "key11": "2YLh9wiHbFu9YdPn1UpnRLsPwpnKGvoREfi8Cf8zZxZJpzFpDALSh3654KyVJfzeeVQMmop3LwTkG1P9ZXXUGpE4",
  "key12": "2Cri8nSVC22sz6PQfE28zSG2MfmaZu6n3w5KVf2HQN2EPCftGC7B1E87RzAuMno7oeFRc7s7SphSSHR8seckQLoo",
  "key13": "4CnxfRdgfSCu9RVSPGEsS2KGwNeDfHKeC8NPdkNNGXsjzM5T6u4nPf28KmZbFUhMSQ4MNQGsmN4AH65kRQrgDoPB",
  "key14": "4SgnjLQhZzcPcn4Ekfjc4bGChfznQuER78HJjqc8DTgdNgtRwyMcfB7khYNFyPCUsz5smHT8is4f57YaAL56zb4r",
  "key15": "3Gi55hbMm6mif4uBEnxNPdLomKcUC8WJAgToRRBacSNu58AEEUTt2UD7yBYFdR82zJCZ9ssHAzNJrwYvarAjRA3K",
  "key16": "4XD7m2pZ1Q4XYNLkNyCJQfEzsEg1ZT839LFHckFg71v2zQFFEM4TqwDct9NZ8144ZmnU247A9QydEN6pXirtmUgR",
  "key17": "5vFQURGPVUGn65nhQNzfHrDrVse4KSo684kdEPUE3cwB6s4tSSC8tBwUMMjyD6fNzTbDAbHLNDNADS2KqLBitJio",
  "key18": "2uQb9WgvMANqYyomjx2xmMBf3hpBqVQr1kMJC4t7gGW82tNgkuNcQT6wSYJPtZcG2HqLgggDsQ9pEroM9sT2DPbU",
  "key19": "4rsYDaVdwkNQch5VAtJLNCHBRV5JQ3GCrJBjSKvM2ctsB98qyiCy9Gyt7aB9WRRbEb4yuWVWQrRPSQUWkPdjv2CT",
  "key20": "MBJFmXQLk7wY9E9LmTdpbJbHkF3Z9EgdML5vi9hfL3tBJu48cQfkczBHDmgy8KjhKuqUygDUzFzU5PixLzs8aZd",
  "key21": "5rHKS85X2Wk598SWbjraYpKqFuiDMmpUcsANk3fZ9qcH8EEyvUk8svw3523XBbVUD65a2KvRFcvJJE9mLDXRRfeX",
  "key22": "54y2QdHXuMjo38FvQ3VB1fd8jQ7u2373PG9yAjm4GGrCNXebcwK1Asw2M538GT5Vwq8gMX1vaFJ12bfrQ4wvJdXm",
  "key23": "3hX8uNcRFEWEZ3HFFWDJqLKzw4Yk8rNcv38mSbfRVshBpkpS2qnfkPKBmYdUHnuae5wiimcqA5pZ6fAcxKik7ut1",
  "key24": "3euSdPVRAZ2YPYRzJH7TAxP12gCAwktnWymyrKKaQP9RP5XwVDjxGDGTAyRRYh3SkXvAWhv4aGzcuuPPcLwEXkSC",
  "key25": "23xjWuUjABJy91wic3byhLsD784NPas3B9wH3UizTT3u13wnt1R2og2YCpSzxE2BZC18rrz3JD4oSe2DVNa1aaZQ",
  "key26": "3YyhSfxgDYibE8Zy7gqSCnpWbvwqWHm5BUJmZNhpEs6WSLQMjwKrGw7NwTK2cPxPfSNXEACUdhutn3f1v1dcFXbF",
  "key27": "5tmxv7ojmb5rTfh8uyagCusrxjAArVchvJ5pumKZu5fN8pMbkBQvvAt4c1576pibKCmDQyvejgu3MzPqWN6tBuHe",
  "key28": "4TnAV1PdnefhA6kRyAKj3tNrCnZeK9n9t4rx3tNkrd2AJi8UWcshbRG5LB9TUsodW31FSLTTJJQwvgefEMMnYpJ1",
  "key29": "q1cQAqUX4LFjFzJYxkEK7K23LfdXjLSxgeXWqxnroqpiPzQQis3FNL7cuRncqBJt1oeXRbd38T52yt2qMQYxLfQ",
  "key30": "2N4LY3TLa8qVjbSjrHgUsNLmiChKQ1ZFAoZi2WN1X5WyWogtogPBdGMKQmymcRcWExcX5Pwg2NWWJJp5oZmVuFZ4",
  "key31": "4CdjR8d3St19jV8jbhqZsFx4d7JQ6JoZ8czKp4mxdRUas3RrUb8TZEZtTTBFnEkZKkudbxyjBZAXMm6kuQK8W5KX",
  "key32": "48fU6teB9cU9mtoZE7cyKqEz1tFRo8f2nM782xjB4r5jpgenTiMxTbj8E3TFKw3mzzeRwp4cgZrX9FGemaXAsvTN",
  "key33": "2R7S5hru3pUuf4EVhar4He4eQrcyh6jUvSBkr3Hyzr3gj6Et9cMsaNeaSC3DStR7AiRSu9ysJV2R2TZeWQRTxhdw",
  "key34": "MMaWCPPgFLR1QFG3JqA8RLhNwkeogx38vSkARZ4UF6XT7AeazdxPp7iQsSvnQFkoL9a9hP6DzUvdZGT4WFXT4ZE"
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
