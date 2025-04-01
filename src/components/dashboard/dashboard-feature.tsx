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
    "hUhVKxzedA9ycdoiT3ZHwRTMBhY2L4kdi9kUeLmGcfVEmnRPK129szbp4QCXERkZSaiKsQdtGiBUhFDg4TMAYEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39f4vv4tuVKKa57ezcvgJVcQfHMXzeK6u4bUmk6ToJiVhDjuVyUhKj2yJHAE6AUd1WtGWC1QmxG6d9ybNj4HUfwy",
  "key1": "4m64yrkfk1sqgrYUdAg75VWGSR7rRqe7PKgMKQVDVdqZAvUgdMvhRmaejebUAVUruzu7EvtU8Aj1SbgkGb5QnWyR",
  "key2": "5LtECRhhaFEQUMpghpaHuFwYDLe1UgfRvQW71J1bBjP8LmMNkKsW7FWAxFCdMwmvVzqCGYCWcNvEDvZvuUFVoGjP",
  "key3": "4uySWaDLDMS58HCd1YLzjKFCEzgiT6Jy7fSpYv7DQ9H2kF2mYtcszdLyHLNSfFp8eaZj3YxR1QH41YE3c6Wda8eU",
  "key4": "33o2zhRDzSJFWvvfwt7ZH49ENksuF8ZMCytM1EWQoUBntGhRewQc5jp1htZ8GUwnt3oqXgEXQUaGMU9urmL362BJ",
  "key5": "3NpqeAeudMyHoVrR9faJ8jYzFmsZMoCHjGchgxd3m3tfiDAigfeubWvBrEQrAYtnVfMGA23iWEYNrLbzpcd7goSa",
  "key6": "4VPVN1X3UQwWQrnPaQEDtw5GFUJkzVvTDGckCP3g8zjeHqKZCwbXvLzKNcLq5g8XzuMjatQDMEkcWHgSFpCrcQyG",
  "key7": "fJPcjVLgy5RxrbfrNN6ye4BiRTSuTzBG3ugRqp5WorsHR3ADe9M7qvG9pmSpizf19EmvpYGT8vPo2HtdhChdvbM",
  "key8": "3i6HoCY9WyRT3hY7S9WmSvbiiqeDgQEeqrugCL7ubHpzigbv6KTTRduYaxWqo9dzKNMN5QfDyd4GcQCJq4EMhXPZ",
  "key9": "4oxF4qqyWVa1TJmPky6hyVwHEhErmZGDntKA4mpuZWSWfvpkrig9PrizAHsMqgvRBcottJfVQbX2rU7aBzbfyRem",
  "key10": "4Lked6eFEc51TQhZxRRUDPQXD6NWXeMpNL8vV4xrM4KxRn8ceEvADSg4FdRgqXJieqzdqRJk1stoH4UMQWNgAUHS",
  "key11": "38LKUQZ56ZLvpLHWkpQT5dX1vdTUW49BJxdiadw2W54VDJDVCTJ1d23VxGnjojCxmH4idKSRomYvJvjX77reaJpu",
  "key12": "2uKvdEjgS1uKhs5LFWyZRuA5fioY5eqSaYaYAvm9P3jHLbnEd6FyR4KW5RqtCATT8RWuHvxMmdUSxn3pWsZNGuK7",
  "key13": "3VXWKimeno1A4XTPkmTN3dGKPJtHaXpX9scWSganbAvD8Z45MofAsrPvwa9cTvNgzQyir266eyiMKtZvHDsNChAd",
  "key14": "3nQUsaRWtMmX7xCNSeGAiR9X9jHAn5oaT9jYnENfTJ2mpWh7uvCVaxJPx9Vdghh2o2GvhWeGsyeQaq7gbqwGyeKu",
  "key15": "23DiokKNZEsjNe43xNqbVj2RyNZY3MaCgKunFENwgVRpbRQC2qQEAptsU7GsiYqgPa5ggMV1crPgXiR4vdFoBMy4",
  "key16": "3wjPJVFxbf7nejdeefgrbsGeWDnVNSujgVwKZrKugG5Cff5UpSubWy2B4CXEssKzW1DJ2nkDjtzS3oNGu4yVdypw",
  "key17": "4F2J6ZJSsn9Pywx4NDdnY5wCQUh18u8hZVcmXKZGXAvgjtfCrHqdYZaMUcuEgnn9L4qmzUKjC7vqGxCjS7LZe9xi",
  "key18": "3cneYJenUYvhnjW1txrEgieoHsn1izZwEUxKK5gn7qsQznaKUcDw68UugKVuzBzoQkpo7zkv2CSfKHQJt6zaPxVg",
  "key19": "U2MbF6t2WSJwaqcGxdbmQwkS8PQt5DYxy4A2zAtwcEDdMU85oXT3wiJSrMpjDdggZngGd8hmbwN6LZfxNYV3KC7",
  "key20": "6t775kGgVnsxh8CN8rYZsjQh96wSeCWpdhbheA5iDPSdQc8MvbVkr7G6gu3ndEXn8WeV4gFtfXdXo2Zf9TGTkuC",
  "key21": "4jFP3j6rWm7S1nhLPu2Ricw6jxh9XgpGn7E5MqTCpS737WuJM4No5DucVXJnambqUmZfWoG361ZeMKyW8ZdANkh9",
  "key22": "22bqYCcnJVQk7KfdqCGe1c1s1gJeZaXZr8ovSHxCeJ2KLACVV6oLEQW3F1exNQMUXbbXoHTQgiK9e2RqJw27drdN",
  "key23": "37jDR87SAfNAXbMFtirZT6wGohbpZbuiPzEdR9JAM62xXA5shEaVMpQoBCMLpbQhYuPXBcf424YoePUq9zJrEpbP",
  "key24": "TC5oCuZDSzf5ErKFHacjtjdUSYmXVndmFftcst1ZvBXczC5V9hsFoVw37u2GSJcCxV536NSoeVM2b5DtLPbN9sZ",
  "key25": "5PLPNpn4eCW3ya8uQAeWius9TJbbCQNGu55HzWX6N8zNTbr3Ys2WACWYmXbch8hgEy2AWZiyhUy6UB9bAHh3kQ4z",
  "key26": "4GkFJqhwjJE2gXBR2unH4SinS2PsyA7r2ELNLjKqYvDoT4Hypqnmwb5E4gXxQmNfu3j5oij8XUXnCSwRXiRj6RDJ",
  "key27": "Kp8xjpXTAy9RFcR2q11DMgHS7ovwMM6NQySbRCY6EcSTrnjizsmQcLi3ZPoRaa2oD8vGexCJABRxHez6pAQGDJL",
  "key28": "2j3nEjfxJpWHMY17FdA5G3tGNaWq9PE64MQAh84gqdapzoXhNPxSqfa1RyEr9CwCmdWshusgazsnGpEpCmKmpPd1",
  "key29": "9gk7hyB8a54GCrXCkdRndDFAz51b9hhgmRDoSdVNJuYwVpRZDHkzsKndSsy5ztwpAVjUKScNVadfTZyQyPwNJcE",
  "key30": "3GbTCKKikAKjBQAbTKytDxst5FXMimzKHtuZzhfmwTJL8gM9T7gD4hMZ2AZbaN7hbnDc4wNBTkZdPCMH4agbvGAq",
  "key31": "5HxzXGV7gsk8kMReTDy3PLLiS9DgPiSP1XVR3MBv8af8XLzT1nHs7wuwYtwBFcD2TFy4XkoU9HnqjXY8FcpwaJt4",
  "key32": "4zzK2rkYx6FKw8bTm4yqYMfNytDN8HWAsY7EiMagzNcANGNDZesCaP8Yr3L7vrGrfpP5f3DbpDeoKepWuEKLRKHm",
  "key33": "42x7cSjL3pqZPXQDm29RZTmg9yQ4BZMuTsByWoeQBiPuKMup7mGbvaFuxkBd3ZGpGJ4xpSZk4EAXtp5WSQ6JrDgC",
  "key34": "4PN3G6cgMv2SXmAtcovMQ5HbaCLzVpbazP6JtmbaiGyozZq2QWPSA9eAEquwT1EE2vvPaPP9bHp2qVcczUUUwFex",
  "key35": "4VuBhH8g25oc62kT3Dt5hevjSPWoBjTtBhheH8Ver1v8aTGQ8fcFAjSJ1CPAyPcGSr5M8K45PzvtdmYNhesKayF1",
  "key36": "2DqL7dGDSaZrgKY5YunEdWhkk1MRtqYLJtURuvtRKWC84Bq6CKzuFGDjG3114jEfDt5agPxWsMSvR7zYYCRdFnUN",
  "key37": "3Xi39RqbH7kw5qXxuUam3AMNcyhXfayRqvnKyu2PV36trxMB5VipAV1hQFMxRUnrPqCgK2PnKBA8WcuAtPB6s49n"
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
