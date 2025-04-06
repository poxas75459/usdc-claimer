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
    "2u724e4Froq8gpLUDH6eP1smaeKYgSLbd36KwwnKnpm4R6D1uAr39CtczZZvcR5Ab8H2RLYkhWMj8EBt24ZDsxMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GPorNo1sfBz34ipX1pysVzTsWtCGu9iVSboc45MNeR54QVGWprai2mNSoeYcLb9aN7RsvXm68XoScFDYURi8pmx",
  "key1": "wB8fG1Y7ZgM29sbKfEj8emXaPiHUSuUfatbinhv9rNEshpD1Swu74MuWX7qQ7RTxJGNgmhnCtfKJDL1V4zZfhwZ",
  "key2": "3Xh6c72k1BDAgNJtAx5TTCzC9kCmr3PPFn3ri6SjcAyDHs6poBNrXkeMgpZkSg4ZzzFCczRg6MSDMDj6dwc9DaHh",
  "key3": "C3yoj4p6y9U2CXS3xf5Dvjk78N5LqDM2WWXm9dde5MjJobghmvtgE24bkHMh5nM4AoMBDfHy3UFNRwn4pi8HQt3",
  "key4": "4fwj3vJmX3jrB3r7aXuHFWzhuFv8oscXkubMeVzTsKsjp6wH4VeQmt2onHzLywnhgZ4Yj1JMjy3hzpz4cuMbE4Hv",
  "key5": "4FNQLayinaGaoaWV6Y2qMXq5q6C1UCfB3yRQ9uxNpTu8favMiAoh7ycUwf5tnkM4qaxrhCwMkCxL86jeszNZ2sBf",
  "key6": "4ZP8noJfyyUamn9BHFWZqReKy9f4gzHgWY4fSPBT3GsE1uTgUqwJJYB5qF3wRwoFjYZcd8hdwazzLu4Hevsy81sy",
  "key7": "529zyFb5GaNTXjVUHzirfZdbKHDun6MkAWpKizLxszWtfCfcqGUy6KgEeM3jaffePnFGnHdu9MaWZuBMa7X6DcbQ",
  "key8": "53kG5yTjBA8RDoLssyuojd4YjdZ5DgdkM9XwGZvykoMpYAVcD53HfgDnqtjUCTaZ5USySs5Hy1bhrh6zXDHnz8UJ",
  "key9": "DVY79iJTcSkxiJwAmBYZB9vQrXrqJHBt9j4AZgJAi25nSfGjn5Qvr4n3ZA2WVTtGJ1DttK55e9fE1gZZwTdc7ga",
  "key10": "5K68WVfegLrWYSbKV8wEF7HhP6TPv7Rq3ofhRYrREmaVSeXR9krnbqq3EPDBfC6gjQN6Xm5eX77R6KVVUw3ETLko",
  "key11": "5Zx8mrxcytCGjrf6JH15Rc43xf7zKFbrKijD9L27CLBtdmv1GS1r9o5RSnrWLNLER73ybkxyNo3D3WQGskxi77eu",
  "key12": "5YCqXLyLuSXAyUqMYPHCz2gHUQJnLSSfJZPfERjP3iq53wYEMWBRwi7DcF4u86mQSGMj4U4dnPaKifet52sYdbba",
  "key13": "2pH47c1hCioGyzKpLjJgc38sd8mnADyhjhBFQyWyPWT87bQASBRjqrvC3mJ71N7ZopRmJbaVWjAsxrAdiBHPH9ZG",
  "key14": "2mpDcr1hKnPDwLZbn5pmC6f1q4Hki1Mu8cEyUDT3pWdobwCbPeAzNVF4q7sxxS76aqZZ854cLxatKnfCe5JRkmdW",
  "key15": "GXLjEU8dkDQ3aNZLhumgsEcY4SknHKfnpVjU1fiAgWgFS5vdyqoSunTcAMEdVGbtVoJgQhxnUpqXTQA6sgTC9Zu",
  "key16": "4qoYhd6paYBuZrjkb1oEf5rnxhrmciTWbBaDoynofsy569fN1Ndvf9oHKKJsDx7F67MjKKTZPjzg3AzGAKBEiEbV",
  "key17": "5mUExzFo9brTu8Bw597RueUDJY7mZCU7HELoqDLBppai1eYqwPoZLDhC93m9EzjiuTivRsqCBxwQwB8sn1nG5713",
  "key18": "5bhm6xuRXBAfx6cnL9Pj6tKAU8j7z7jnUmbokY4bipHza39h7jSkbhJ6qVDxe9DCsveC1GNJtaSURYxnasbwVVub",
  "key19": "4N5LmPosjqTAUsHscmZsFSqz6nWKXYQCrJCVetuFsqcSv5PqN27tpXTyPxXec53rMKJdEESbjuc7HdkkKfbPNWxj",
  "key20": "4upGWfvHokq8QLbmE65iLdBdSsNZi2xeWjUwcnNRNp4Pcbz4XbtWUMh8y3x2zAz3hFCFrZFiPnVDDMrqCkrYrfRk",
  "key21": "5pRw54arzxGBk3nn8ivdPf7fWTWtotSA26YEbhseHiG6zUQV5UgNW9Rr1BP4y7VRjF3KP64yYGSWKDeRGDhSFSjJ",
  "key22": "4G23MRRbGj4oX6QvWr8oL7Dbt7TV8bGkTeqoRfNho3HfMzNYUxSwuz37XU4cFtv3siwsbhe6x9JvuJyLi6LMD3qH",
  "key23": "42BFEz1wVMQR3R576Fxf1ndgFvXBMpftAECsuYsmU9G6s65t9AM2tq4D17UEHwW2hdhsJgYGR9gq4iTRDKjKDEic",
  "key24": "3EJbCkCdRm7XMBXEf6AhL4ZeA5FSPp7KxaJ5xBj3t3HqWfZbfVHp9tNLURsJpuM4vRoZm2Dsxh8BdhzvABDtsMp9",
  "key25": "2pPqLc1VgJWQWKdU2XA3HTeRvDmNkkqKGNVuufEvfsi6rseMV61sDfno2QeQ9TuD9MGuwAoCtyzQbwRZj1S37rC5",
  "key26": "2dGebDh29exdryPZBv8jR1Lhw8HtpFgs2JB5YChHnTMp5epX9YRNJECoqRQwJ4ACyWUqzax6zKsWWkp2pxPnGtgf",
  "key27": "4wbyADf3i7M9vZkggeshpe8s9LRqiEAhFWg4PUztidzZMK5Ts7GQwWtDd2RxPue5nwSLpGQGtYvT28ePeiUYU14S",
  "key28": "5dhjeNA8ny6LEG6FZ9zPZhFTqgxyjwZEEXfdsirBZDC59dM5YQSzPhGGEJncoSD5eX6nR1FgU2DWsScC3ob2BzU1",
  "key29": "5sa4JTQeFoAb9HHBZkQFQHxQYHwyzVptmgwyZrYEPgzrhpuH4oMWWXt7Y2sDwrHqRUSppFUDGCCWtnBR2DzB4Zzb",
  "key30": "31xgWRgKzy237WHLtZZV3qfSHuDV6zH6uMagXmdfzDwRiueQ1tQP11tFH3fn6iVkbMvyZFLapLve63k9GFy4Tq5U",
  "key31": "2581ojENAZXe5tm7qKWvMy6QjACJyhR354x3h4QPmMwem8tPdaxcvKA8KBssyda5P6MfwNUYeX79NxFMvQZLEuQK"
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
