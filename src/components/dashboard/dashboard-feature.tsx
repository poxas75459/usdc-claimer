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
    "2NrKgKVjLfrEiEDRScrvN5HaK6mSRZAWH8eUvb96CHxkRTAirb6cQp1BDb14F9hWCKsq4ZFH911DMoWETsVAsyiA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gq1NWdFARHHQkbCp4DHsoNFkfV4uxSKRRmdcTGKUu2DGMVPFd39P5q6bxteb2ybnXmPpDXdWJ5iF67SbSWCA5oN",
  "key1": "2VpqMfi7XMZKsadBcS66AGhVwZnfRtXA28LFVXz15oNjtFsRv7atiPP7XXtYe8CdLAXStJ44geFQtzPwixAWKr4k",
  "key2": "5dotytHSy4T3bYnCQaGtizgqT7f6fAJdeHUe1abC9EsEnz5QwaNCpa6g4XPiymq8gueYUxh5vkzX8wENa6daZrgt",
  "key3": "scPqRDyXS6jBjPbJCn7a3fuxk1h7c9EggSDMtesYFtKUKe3pKSQnbX9hFNZnkVtcyrKbGNn33TrSq4fvdWcpRNj",
  "key4": "5iAoTWadw39xhdYQrohvyCvC8YoWzHipmWvKTaFhvzukoTRfnH6FMm1EBcYm25nUVJqMs3JQXh2YBD3STmkqHKoQ",
  "key5": "2VqCHuuUAamLQP6VFHYR7NauCPT1P4qrjVJWgzKvCHjzwpGcCHmM7w6ymKDYC9PPsvD4rAXuMau3kK34NMVV3vsH",
  "key6": "36CioD2Qs9c3n8aBwot9r9BuQPJbhGhrfMC13CUQ1pgyjbVGXxxCGt7pNE6XMc8Ai8y7tCJ8YbDrdB93w2EXab2g",
  "key7": "47kUBJxG4hu1d54oFvdNEeReH5QTMLKiRvVBrA9uzprxCXJY6iyUe3S4kuKeMMjKqsaKtwoNHyJbsbuDaaU2v1fw",
  "key8": "5L1SK6KLed2HhmiSQh1ci7bY2ZPyqsAefF3aehAChS9ALT9zrJ5NXTL1wwzTZssjEDpWnYvpx9hsXhCUWzbr23qK",
  "key9": "yNnocLiD12UqBNs8Txz7ZAipokMkMLPvT935CdeMBAjTXC4GJ1EdhYRFDMppiyhu8u6RR468CQwTkjVGgiMB67j",
  "key10": "4L9xiyFBqDz6TvDuKWfnXtmS9eFN4VDDPKKuLfEG3oXuGZ9UA1YtiSGnEVVF9KZB5variTKQAFdxGFMFLwZrVG5j",
  "key11": "2uy1ipWGXsjtdTXJqLiFeSAX9WEH3mxjwpYFVzwLAy6W9KjwFajUrh4Eg8VBiNE1qMYS7Urhp45AEbpnDAvtqWsU",
  "key12": "2WuQ8j5svHkdktTQuHZcbcXQtgb9PbZicK6Fwnmj9uTS1Ehoc7G4gZpuMyLXzJ7vZhpdAYnEARxBCWCM1axBgEeK",
  "key13": "3q4n2bc2rnaCyvN6RMkPU35pHhA4Jxv9GXQVzJ5qtAz4assvFnHokhi9MGGi4btFy3V3PNX3mu7VbXU9DTgkTDZh",
  "key14": "BaGXREcffmuSZUt2UoXmNnWR2CPfQhaEsKAUEJ6cm5fg7vNZvARpWeAVZUrAFdFFPZ3mCHLhDzXdWW7B5etmk2k",
  "key15": "eigscfBaHMRKKJwQ3hUsY1pBQ1TXfhoN85pCSRDqu3mf3Y7d98zS2GnhazgLeg5EMZkarK753JFSig4mjvuSXsC",
  "key16": "5128SNK1PfqvCCRPt5ornrbmUY9455CBEyKiJ5SyBgjtB1otzA7KE6sjofzqEHKdKeKFE6vDKu3oPmR8uEkRnYYX",
  "key17": "3SmjFkNsBxjpZ9J5tQjpwERsJXBczpvH979KGvyAh6uDPf8J4sJTE4vQUibDcSj9TtqQW3AnHMSj7Gjj6Wec2coT",
  "key18": "o5JUzMyECv3wdYnRFYDrmkuwjTAQNLLiEKrWTthi65ndeGiXnXimPcBtbrVzwYQ71KSMm46JLvwgmHXYZju5hNJ",
  "key19": "2rAeMQJwJpMybZUr4eKc1AVe5p4mWyY4eas8ZrkEtB5EaA8VCTVL14i6h8KzyDPopbzfWGhoYpFZ464Xw5QxyjqA",
  "key20": "32notSMLndQ8ST7bR5ogKdJmFqz1REx6jb4pV6r4K5Xj7E9NiT3zpSwPMEsFHVGc4tDwaHPAFhLc8jL1dXpEH7ux",
  "key21": "47Xj9HPZsEJMJWLR3RTB2zFN1NAEYBN6FSHYrqfnh8SXiUjjRZrkns3V4oLoRv3RiPGeQKWCiwWaF7vRW3Ms2bac",
  "key22": "s3zCm46P2eURnaVBnkmHwdNmk2ACHgQHtnJMGbtxBBDkiZEEDJKBpFzVHytHy59m67hcZwmAACxWSTyE1Y7ssq1",
  "key23": "49cN5vCJ33zYwK73WZB9irivvN9zAtWHjHXo9DkVvSTKo61gGyuwH8tJFYV6UeYCZg5U5x1Gj8KoZooqyDiSFDfB",
  "key24": "k97QnsvrYz35jcfj7AR5FXkYdXCyp2qjnTqeqNK4c5DfkCddXEaUhzdCQJQjX7DKtxZBvx5jSEwD3AyJDxkf9Fq",
  "key25": "sDZKpJ4KopZ6uNJDK93eTFaYyjsrTUwzPNMvVLmXevwgkcq74dhkX7D921JeB7kDo7uevrqQgANnJ8iDMpHwHFQ",
  "key26": "4TnbepRKmCYFEpTifbMgKJvj2MH49ryA2WYzqjYG2j5tNHav5YpRA1L19Z2d1dqvZLQaS78gujbHdT6BKtM5Mcwz",
  "key27": "648XCePLmupDp85kKGEwh2c2jPNEU8zK5vEm4bZM2hdLzMWKevify7X6eagvqa6rkNnWBybMd81MbXMKRxk7mr6k",
  "key28": "3BBzDZ4RcNLkM3mbYEY3436SmeYDCkeqWSRH4t71Ft4nbwq13mbSUnYxqqroQ9dEgEUU1GyYnBF7dFCpXRhzFgm4",
  "key29": "57Z6oxdLPW9ZxdK3Ynz6mBqAE4PHzwCSTCSAokSSTbi2Y1Tp8hhCF3Ms4YsAFmch9v2WQGmADZ4BW2F8BfJvJX67",
  "key30": "5CoGjniZgndknqUmXDV1z6veZbRPMRLxXr3aZBay5TFb4ex5ED7M7aD4AH75t2ietTREtu18ySMUiRgSzfyUTvDo",
  "key31": "cnhZ3CurgQrAzXhy2zcNci5eiefhR6QAMuUHibGi3ZjPH82Teu16E3vQqTqN3pJM91p3WyAUpnaiJQh37y4VxPx",
  "key32": "3s8cf4HmUo7eEHn2fKrB7yErnvf8CxESoyzbPqDt7HvF3jV6rGg7ocvKxyAy2TWvnj7iSmBLUCxoJafMetS2jkKF",
  "key33": "keg29ryi2ZWk1LPHmKepK7F3hM1XGAiqo5SqxPohtLFUiCymDWKyGmmgZKYCGHKgz6m63dCDesJ4W3nxkzR9zWR",
  "key34": "4Fhr9SJMtv2Uhh4GDuC6CXwX5qP59dNkamHKvoQfTtDoJ1ukLTPdo2n45CkeUSK9aC4AbrqvFvYY8vTu7QhghKyd",
  "key35": "2HTdNgTj1TePFGctZuZezdM2gX7pDN5Wr5gjYzsAWA5ZcHB59mWZCQ5xB8vWV8pLzK4TvBHAwG6zydpjt4gx5FNA",
  "key36": "2kDarjKz1bkfVDFUFcJTqPVke4hquvu9KcyN54GGyZ5mb4rNwWayLsGg95cyhGHGqyAUrDFkxoU8Sz7WpYk8JVi5"
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
