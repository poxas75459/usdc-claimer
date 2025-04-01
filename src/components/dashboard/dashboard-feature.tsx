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
    "5qqeTtd7eHQbx3oYk4m5Fd8H6ZeALNz4jGgGbZq2isqvk6pyg3dK41TH2kDaN9AcZyuRH9xczXiWEQzECCRGKVKA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nyj3ys6ZsMrxHg2BRWRkko5TTtYBitf9DgK6fbageN6wSe12FfmztZKW451uG2qJojiaz9eXPniKVzSVu6aNbmy",
  "key1": "3MT1taEyZ7ood22Ke2AdjibZDkERuvet6XkaZo7kGqnjhT3MgFqAGX2rBQjP64gFMYH1eijhKMNhXTxmKyUETCVA",
  "key2": "5nkrWngNwrykCaxsuME6Bt7QHKCzSxR19ZUWrvyAB4ceCqEkcKnhvjfDXHUKmaq9LE7f8z5AsnoY84yh338NbweL",
  "key3": "2G1JqgGMN7SMzMJ4ygpDnntELRv2eP77d5SNAtyjcuAUZYKxzRHWqsdZBePPAKnQfHHrqdEMek8uGHMe2yWMTn1z",
  "key4": "2kR1Yj36TxXZidkS9a1qtrYhEPwkqpDs5KSg5CPjphU75eZ8BH6uz539xdQf9ZpaqQECFwVoTcGkHNvozwS8emWy",
  "key5": "XMUk4128qSMD7mmL2UATGqypjye9u6Nzip5tdGAWNNBYcMQgRtDi78GLgQPcTU9LR4P3eSP9TshBkSpFn4RmC1U",
  "key6": "5PZU2A1Y7SF2yPaQrKhgYa4efJDTeqzHi3nTzKcU3mvT8gxoS6v45bEA5ChUkALHoby1DiBeWij8GKmjUCERN6b8",
  "key7": "37ajTgsMqxgkFTsk7t6ShXF4fSzov9zzT2kBwQqYgDtTQ6c9U1xzCP9uaamBGmLuefYt7BNFrpQDnxeNycZXSmBS",
  "key8": "4ppUuMRTVT6FPifV84PHo2HmMuy5DXUbj4AyeYUPkd3xJzooi7e9BywCcN6Z8jnJknTEUsmFPjoted2RRJohfKDP",
  "key9": "5xeUFiknvztczLxCxWebY8V3Y81AYDbG8mVTHn82zizdJV9Mwus9ZztVurpmTkAocUgr8tS7U61FaMA8SBozwwhE",
  "key10": "5axEEP2KvAmxmfWLWQTQjLknYiEGR3orBuyDCoh9uV3myi4d5So5djUzLWdAcFFng9CVhVKmbsmpYrAQBCzTmnKo",
  "key11": "SmFGf2dVUoPatGn58KVP9p58Wffb8AUp3QSRyMYDiCx3pA111QosTmhi3ByLWR1uzfiRmgnmrr7nDtr4RP6xp2R",
  "key12": "VjD2CB7homn4iL6Gvpk62t5BbxxEymcgArrvsfLmJqyoPcPFd3AFdm8doq1nRTxCuLaPvA3HjF3ttt2yZnnkhJr",
  "key13": "txHBSuUEKTdBtK9bB4PFpNf374GpzEoZH4zEQN9XAye6Xr6oxe8iW4qch9d66M2Ju4oTTvngSkPCtsfh8tCsFVx",
  "key14": "2EzrjyKpGJb4kMF9ceDHi7AoQNFM7nQP7gyxSbBVVVpJrJi7tPTVC9f2xCrmXwg7kQBY34wGECYg4oPReKGgc1oy",
  "key15": "4jhbUdCY9ioHmneEfkDXBY9RGChwZH1y5XBFPHNXdrdPp7uXQM5KvdTJsBeHptTvUoD1Qsdd74nYnwjmWLi23B2N",
  "key16": "3HWNm64yDRd9Y8pbvfqbUQ2LBw5uZkTZ3NieFYGPUsN1YjwwiUpE2umMmNp2DeEMpt9RZf5PnH8ebqwBGw8Rp2Zf",
  "key17": "24AmZU7mQaVV52xgMZYN7RKYp5yKrPqnWNJ29ptufNKktNRHGWEErQ3binmATnzFLZ1hqxzLCcKGxCxYEXSEQ5t7",
  "key18": "5mALdTawoSHrXNieTmU5ziCLiD7nZT1v5eCZZpWufkqASeP4QfHMQxeYwHzBWyPTcenkBgZaCTpiT5GH3XrhA4B",
  "key19": "3KUwxhxVqfXU8maA2HvAxegm9YwfzUecMCZrQ4kmuU7TAAduDL9pm54X779Cpy3TnkYCRKqsaKuBFXxxo6MP2VCi",
  "key20": "2Y7YsSMKycsNSk2Thuv6R3KxesfSnfuGtra8UpLCz2ijQ4TiNzTqWwnrbu3d7eWy55VM8ZMZxGcuDDjVqHNrxc5p",
  "key21": "3wz2WHUPWsdne5wK3v7qmyKsVhmm4CiPxoeE5xuQTkb6rxUUopZQXeFyDC38Kokdq12CvAgXKeeuEhZXEs1UnQPo",
  "key22": "aLdGLcHZ9Q8VXCbMqbwm8ZwKDJM66TUGTHdBM6AAG4UajhHJRVs8VnV7nLTAXVZ8ix6eDbxiU9zeXcz6wB1ar8Z",
  "key23": "2UinAvHxPsfrmoCk5JvS3RKx8Rrm1MJoigjXgdCztYNk5zBuyLcTFYBvB8q5CajvECfCDpiGWEVyPNG5F5zk1MwP",
  "key24": "42zGZmUfA6DuprqiHdupyDXW5SaBjYvX1kgZJs1AnjPqcFXYYD2cY3w27tTKpYUQSiSXKwH93PRzj411J52xabxJ",
  "key25": "4V9xTUYEa9jXWhuDw2P9cmmZQx1j1x2BqZrnDbwXXhHFJxUv8hhsmnkTormLMQD4sRvpWkkLfpJR27BTc2Ge3wxi",
  "key26": "2sS8ZXd8M9CdWebRWnkZTzWpejSvy4Pt5yb7m6tNBP4xDewFZJ23pu9aDbT2pzVfXSJYTJs4mjvEzKSpR3hfzyWj",
  "key27": "3Tco9QgjGsyb32L1szUoDTdx416akq76chHNunJMt9bb8q5JNFRZDNc5QXc3SGz1LxpQkK9W25nMv76h3o1zLQsd",
  "key28": "zYKrcy1bS5htS4kbadPmgRWKDr9yd6qELzATEmzQLb6Ne3J68myVW9aVqRnXpaLvEhSCyREinWnht47gkFsJbkU",
  "key29": "64RbtFSPhUs8V8KsJD6YguWXwRcbg8usA1sj4r7EJsEQWBfKjRKGyJfTftswV5EUKvf5Ur2H3y7qDEiwd4w7X7yr",
  "key30": "54tgJ5vwSaHuFgPGQhcoXkubAjKuuef2AfF7aJREJUNRzcgZoxTAsP9viVWCwbNzRj1AvvSvfPrWWLBTRqz7AZrk",
  "key31": "3sHF7h6ZtyYBkbbiqQTd3uxPpXWKxjxW5SeTq8z8WsYDjppRZKx3t5EmBYTrwf3AT9LSUbrN6rE27Wu9TTJ4UhhN"
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
