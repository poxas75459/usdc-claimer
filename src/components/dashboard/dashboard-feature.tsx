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
    "4B8UPmTnjGVKSN2S8P1CMZg8SyMBpuAi9kw6xNpRvPteZmk6JKLYV9Z3WHZzM1tgnQ9RspvVfkSTLbpCRqYK9We"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hC5tEiTrFzejea5eMUE6vEhYSHob6bETTugP6fZyWWPYGogSCWU5WmqnKo6utJWaPkmQJUpkJwEe1oUuDq5ygbD",
  "key1": "5eMMuYzrctkC2vQdiCy1Upm8VpCbBnspY7SZZEGNeN1K4S2fJH7TqfAEjCJ2kXNGkza46f9AMuoznuWasZnsLzDG",
  "key2": "4qfHr65tZg13oK576YVD4zreDenfPxGTYR1Y84TNEaBeuE69mmF4N3j9P5ZGoLyARiNyxqmVx8f63ba8ea1epzyD",
  "key3": "5CP17JaPeK6h7tQqpucgGicf8M2DJxVkmKp4jdsC19ZGtH1vqZTG1qyh8b8vPpBk7ArHNGfV4Trhp4h5QyXfrvkK",
  "key4": "3dqjYjzmdoGji24eJ8rtLUdEYCi1HBTrGWECmbACRrHaXqpTNGcwrqrWSfg7nFbzAwVVFDMBThXKiC1nRgzcbEA1",
  "key5": "5L6Mc17oE7V4Yqo4Jt6hqotkyATpYud6gZas6SzQGAhzrjE7yedGvSKAEK5oiCc3kjufWEsEyjLEf5ZRNK4whhPJ",
  "key6": "2VbFCeD2jXL8jLjskWzX9j6eEtDDgH51hBYugy7SxGQxdPGsD9WQHkUdCT7jncif8K8dhTVYLAxMxCtetJ6GRxx6",
  "key7": "3Bb83Wfa7EQ5smAS6EjqCLSTtEWpdLtPrfs2iLHd9k2cSZkjXTsC7nPmYyiQPZL5ZsxQVenHZf9VBUAkp2TintxF",
  "key8": "5XnTKmYqdt4Xk8LXpokuqV9QxebQZD4VGqTqoebFMyzeQDaQkYNcBbj4PzGVtBHK1QYTDoGPgMrgLV279GvGK7qq",
  "key9": "4N79tmXWM1F3yhdbpUHu9veyM19uvVkLtAtQsfUnDgpMowCGndhca7sKK3DBe72364XazT2Ewfz3Ztq4JQLqzyJt",
  "key10": "3xDABVyEVF8EohT5NgJrj6SxFoyC4V1MfubwQSQQ7qbqwhPUKa8mVJqPLJzQrAcuuJuganrfqovWky7dQe2eYLn6",
  "key11": "25ZkHacAzy4sKnUgbLTyuyLRERp9WW6NpaHQX75L6b6KpAbR6Uc2KF1i3WGedXyoAp4dSsMbgibSGyVmQVsdo3X6",
  "key12": "4S7SCL3yFsMT2NssiFfAJyifoJ1VyP594eDPnas3ZR317tzEKyqzHzvDdf8NUJVs1fNZjVw9YJ5vcA4v19LUtU4z",
  "key13": "4kDTsWuzY9hCxKTESPspXSPvjLGqjdbUZRUanFuGSivGm4PiuSKxHGtVgBgW9r7yuXn9jmwCceweZAcCjpeMzcSn",
  "key14": "2rgovvit2VKpe2A4X8wARmy51Zgmkz9igL1xiNAFbrC26VYro1MJQWhRB1fSjwnxoaQENXX46QimgZkFmu1eVVyE",
  "key15": "4Yng1qELWkpq7WphxLBbc39C9kRWnJKSGayvbdJFKUKDqiT2BRBBanpQMbYpartpu99zak5sN649EMYecRPcPapg",
  "key16": "41McBPpzb5PcPjX6o2kw1PgEriBotaLgGtj9Q4qc9TZ4XX2evoKvHnN74PcXo8ehrLVKj3TmAKatwK8bT5keoKrp",
  "key17": "3M61KW7serbHt5VyLHnqdU2x61LS9myshswqXeyHXjTJuUuUDwLF5oETrVb3NZwoZhWRzUKd5vmoRw38cJWFa6P8",
  "key18": "5oy2PvzMTCjqgFtpHcLJPKbt4GZz9RRepo3wT4U3NEuvLcYN2QQ1GyTu9nFpgBjXyqpxPqdeBGAkGY6VqYU3xJo4",
  "key19": "5xiYposV8FNhTUQJpaqjhPrC9TR8MqwNCRrFBsz3vWCVqC7BUm7oCA2CW5awT8D3HbtYRiPdUh3HCjGF2AagWYNo",
  "key20": "5K9HntTfyyDz2LH9sGF3AggY58ag8Q6TdPjQBhD8kcXGU8y9E8cxzDgi5QdRDHNsxRgQv796Z2fd3VNbFVqm8LvT",
  "key21": "55ph8Di5b4JefHheMJ6zy1mKCGpCh885drDCZxxpzfmgZakQQ97rF2J7P8eNMDHZxFkzKdtXph31A1V4wfLbjw8z",
  "key22": "5Xq2YTriczQpwFhuWaV11M1pVKJ3XaXKR2a67KFB1UL9GNJJB82BvciKgWh66gKgWqRKhAXEbgxYJhkHk9zrMobC",
  "key23": "4Gto7j9auwn1pbqH3wKLA8aWSG3RcXisav2Huc3cbVbSMk5ZGdXWUasjAXQk6gT8rm1Une1YUmpHLkKoXSa2Rrox",
  "key24": "2cXHNHPPxCnmsgWbCEgUhqukFUSoJsdxorJXgk1yA7TTw1heS27sBB9FJGQUG9MguT2sMQ9GrbWPFNV8mW7YeY6M",
  "key25": "5NvKefxcXtnD98gBXxsmYcKmv24Qu6XSaPDZcn9eNfwVBrBLdgUGBHbuGzcDL2YtBsjB9RFULqbuytidsWApe27M",
  "key26": "4n3gHcCwko6HEBUbLQDxy25zoJVCWXyADPE5bYQc8Hs34rNdhcZn8XLLBErC65Lo9zaysTZjQrrcStjCi8MnL6mb",
  "key27": "5SLHx7HXV1r17cVJPL8uY8sSMniCvepFGP1zGTHguee5gUhPcnQavA5HwvcJDPYASRreA4atV3XukWwemBmbdBdk",
  "key28": "3mnTz9nLCYpgsX7Mt2pKAbrnSxjRJQw89iqfQcVNdCj4jbceqJk2kfjctt5uND3mH9p7rknUuPnVJki9N6ubjEoV",
  "key29": "5Fa7XHW8cJD1XCZWVsgvPhbkJTKu6JmPuajfDKw9C24EuP6ppXAD7tKztkTwoRsZdUbNFccS8ZXavP7gyykt5FMY",
  "key30": "4pyNVUa7omEYoHCUiXm2Zcu8YeJKhSNw4mavCBNnLsxuaszMWcU6WX2rwQ7JArB3wXVaMoMfhSjsZX6PSMzcjWD7",
  "key31": "1AaTdpgP7aW9eyU2BUQj3mpKwPu6Yt1E2RNR79BK3nqaQho1aXnLBpeNS9yhXShgGhEqsFHLSFUqMqjVvakxE4d",
  "key32": "4uNNN6AB4ddgtows2AymosgtZu58fSRAsftatXnYKyYdSqoVrJ7pN2gBpE86iaUzcd7VsMU71fh7ugv8EHmKA4X3",
  "key33": "DnwWYQFr81WEAjKuL7pPFHLUTN4ozk53xYnxRXX3UiajLrMvU4SMCdNXqghnWL7iowE3Qs4P9B13kYTwU5eZsZK",
  "key34": "5itBPbdQFN12aYQWBBqtosvZckAKhW7eUso1zKNNHrVsoJ9UbaKjAHc5SkeSftokrHK8WVhvu134hFmzYbvziaAd",
  "key35": "3vB7eGuieiCqrVscJ276FSbrcZw19HgomZoUGFsqQ2P2ybXLyzgJ4Pwfj5q5i7UMBug2SLKS57kYznQyLgHxYwBY",
  "key36": "3AEUXuKoHvgLvLyzxkXDPaWkS2DwujNvJoZexyW3P5LKMFNqxDrGBMjfuRv2AyV23kAR2TF4S6ruowaRSBLyvsJA",
  "key37": "2RqzavE1qHY4FW7gA3HKocdZ7PQNZSjKQvhMXs2WkCLgJv7eZnbvo1qaLfEZqnfszY94z6pMBHZzMHJdJxMoaZ4j"
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
