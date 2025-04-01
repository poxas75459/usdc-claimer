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
    "2MMfqdPTYZ6ooGPUzqyZS1z1sG8WQwUqqSS275fWQnPDFmUzfoY2S6BapX26KriHrmD6ZXngPFjyXUND88Z2i8vW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zc9ggZTgPH8cK4VdSfBADUwBu3BWCRhwGtreWtoHvvPDEdEQ2Vvv2qRq2vf5C8deg6P6yCJyBBtciip2D113VSq",
  "key1": "4tDcSsxVjjy86bkpj8h8mBTCmA2Zu56PxaUrMuWY2VkGXqMGRi2Y7LRjTjSido7YETTBwwVaAaZ83Fm9QoUUy2kN",
  "key2": "4g4VtZKpRVuq1U5iUL9ecfGZ87ThS25adtYfVvq7N2ZSn3BbubkkZ8NBuuHMMjSi2F2UdGhWQAQYL4tVVJFoa8ZK",
  "key3": "3RtR3nhxGyLZZEyLirWz5qXg8o9NpDvKj26kK1QsmwDjgSTTEpNMTSWa7GnRBE7WYcDx8vShTnLW3CYe7qH8Q1So",
  "key4": "9HrtAYqb7jmAGgC8CLUdfVpQUUQhjLT9kWwpuJhzgpKzmFaarrzW9ecbt1SPXvvrKrcRCPcRpg6ZfpHGFnQSWsp",
  "key5": "XNq2Aq431Zd3qyfC3hdhegm6f9DAPbs1wUda5BCXZ9uH9jFKUgo5c9mU25VSun77mz6ERRb5NUJS64iL6hLMBMh",
  "key6": "PeueTzX9EfXtRm21Y2bwzMywYLpCZ9nQt34whaRPTWQd3LmGZBqdYwaXfS5Lbc7RH48LUHvPvLDPMADYHLP8DpN",
  "key7": "2mWzzGZgPxMXvWgXsnWVLaLdJ87auQKaV3mucseNYtVckgzCR1ELw3X4WVVhqHrCnUVhXzhx5huRmqiPZUDVhbMm",
  "key8": "3t6tya71CBKZNJ3UFJnkQYp4cAz7iH6ofWkgqS8GEkJz7utcmjwZoJsB1Gcix6tnGs2dRFrFzDVpj58cCpAc48Ad",
  "key9": "4RNYGAKR5kZwjCYqUACt3rhi1kCWNxsuZHrH7wttRrnCx8w2Pnp9Y7GjwnRMJVu9uRhEjR8kUR4mJHGzVizrkdp6",
  "key10": "efowGSL4NNT1Vxe8CmPSpBL8NSfvko1BqXenkm3MymLzGbZViiSyq4AVVrD51sWxPfHex63Y4VoLB2hhJx3kfPr",
  "key11": "2m1Ka2hdV6kgnzYSUPWisP2Aa36dqaV6AwKVHMYRNFAnmayfubQo19SdseXnC1YRiSNr5jKSjZUadYW2Wo7HLdHK",
  "key12": "41ymsCqJ2Lykw8sxQ9xnTJcUbWMksf1r6oiP7MZDmuuEbrsqdedhSmxF5jotgU4a1nwG4RVPKgHiHB9e9P9Gp5td",
  "key13": "WpD4PienyZhpPer7JBEVoFfHExhXZstuSFzCdoB8EqcMgUuLdbRmUy2UqrxuvreNq5u23DzR4fSAoMfoeffQiCp",
  "key14": "4Gv3vjHohMDPSC8wMxyA9Pvo4mt3uGDEMLtZNZboJpD9epB8ifHRuqzYzQzouuyGnspWX6djiY9zfNP4TwNxZVhK",
  "key15": "uf9YFqdJ32D2oqAZEzUd1dRv5HVvJcR2uwSEQP3u3A4bwdc6sdXELQfciy7SiH97uQYYHtMe9zxAGZm6ur5XibH",
  "key16": "2AmG7ngkqD1ZZcGTWLD6ktrZuf54hknLxXhRCa5HrDmK6fn6pWHap3HwfQ6GzBWSC7fjpSKujiiLiYuKhi7RQCQA",
  "key17": "5r7J5v7iHCAfa3Bb51gdr7JpMzuc9XvitLkKQ9WB8yuqs1cZwuAWvrtTqYqJtdwUpifXHpAV19GfMsFq96yD9eqL",
  "key18": "4GE6pdVSHi5xVNkhCtg9xbwKbD5DkYPCf6kbcWXQ1WBzY1PiLjh9qQYFSKHgYpeyBVd9jmR5gxLsGS9itNjpfhXt",
  "key19": "LY8AKJPwQpcE9ss9HRTaryhfmUTuy4Q5JuveqkVxA7Lt6HKcu2KRfjRFiJcSd1CS3Di6afyG5dTfGZEXMYEjxPZ",
  "key20": "3zo3XPkpUuP9M3oxMnLfPTWetkenUWuoLvT8QbJWS6HUy2YNYoJF8KA1sUw8VcaSE8SueuzBjC6SS12nKwa72q9E",
  "key21": "4aqwDKys1G6DNZZinFiMm3WSJ8fkU2CdkYjEKR5T6KEkxcmauZGHjaEzjuLUtnNuamFsQUDzpnUPVbySyd9jgYop",
  "key22": "5Ne527t3JpNtyvxwXynxfRTdHtEsAAeUy4mnCyuRRhzJ16RwDaz184AiXtjauo2ZuKohWLjiDTNJgtcMYqnGV6WR",
  "key23": "5BYennxxdpyLkVhGzw8Lb2MCfbCULCg8wnH5u4GdLva9YrGq2DkMag88x8mmSkP2QWap1fX2fUbe7XiFhgwN9oJ8",
  "key24": "46rgH5MUuUgmGzUsPGxRCvFnkgpezLQcGyNQPTW51G8tWjaVnSYWGoqciWNohRKH3Z4wkzavALhjatWrkWhMtEm3",
  "key25": "657vuna8KgukNpU9Tzt4E3W9d9Wj4qSWzrxhCu8CZhMYFvZzPyc3dDcfvRRDN75NpXqxJePnu8wXsvCV4Bmf9QYL",
  "key26": "7wLE913a86PMYQtbkgijHdt3kRinMfvMzUcpEp8YzpCJCJ3mUxZxii8Dsxre6zvwPwbiRHsAVAsD3go9F3vfAfu",
  "key27": "5YxsqWevGxkvXy729NHfox9gsGbv2NR4phJ8KbuEurMqrmLL4FMNd3VfDEkJGN959kLPQMQM2rzY2bchNjqEsPKx",
  "key28": "2DsoNLruz39e3xhvybEXqKZTFBiibkmAd4ReHrYUAmcHKWzJwyUpbmWEkznb5p2btWrzqZntTe1giBwaJRjBstJD",
  "key29": "ZeQdUDrSf5m4ZQzNQ7NAsdddhPL7MyGyTiBTnAnLBdhkmurQMWgH31b8dWnyN6R3KsCttSbEfLUnHotzRur9LV6",
  "key30": "2WH3HFovCRgerfbcTFoksKuXvY7RksM4dvxuv1xZaV3JG99T5UQT37B711s7uXGouzjuQ1nnxgSaYDpMAvSYfQzr",
  "key31": "4JWVQJFcFn9x7p7KAzZjbRup8CsyisR9Bgysvnw8mjNt7i2vNss1J7mdyo9CG6zcJfTAX6n56MyJsTzoZ5q2kYrz",
  "key32": "2Gsj119Zcwk7LzFL7UQHW2HFwRE7tXVfTx4VCf1tDWeb9Xd87vmRyRrXD9ZSD5jKeCoTc8mfvYhWHCBGjv1JNCvF",
  "key33": "35WgASLYou8dR8EBCtZsMTxB6b7XHC8zg9QsQj837Cv724vYwCgcNzoZCX71oFRWYqd9pZB5DVZS9DSd6SiHhMfH",
  "key34": "42cEfmcQ8nceWvDrZhRqhbfyA4Aj85k5Hb8K9dETKxCgwP3KLroLWgDw4mRbq4arUNuBaHcpcutWraS7eYEbvo9Y",
  "key35": "4N2EChcS7mLN9a8d61jPsaPgDHcfuu9a94fVp9NmpCLyxYs13JTeRdnSDNcKNwWDVkhboKztjUmb2krgqoJcFLip",
  "key36": "4CMF9A88AkMJiUbk63A1rj5VCpxAXmQS7QU9fQ2MAa6WzTTyTyDEXDqHPAsCD3fktfojQLbzgfSwYhof66hWbmuv",
  "key37": "4q6n2zAuwZBAwaaAXbJue2Mj2AsMwdrpCqXqGAittn931rQXLzppcNQpZ221n7Du8TUJ1agrd9LMUAck1yyG3iJ9",
  "key38": "3hmz9ByKFufVE7pZ2CuabRCv2cp2DzzaNE6AqAiJyhKHGt5XEWP8bne4ThwKxcF2AsKLMsBi12JqQTs8ah6fth5L",
  "key39": "kvVXR9QSFLCztjUhYz2DcvGMmhBupxgtUidJwDA2ihJZxpSmdbVTwXXo5dVRpuSq7uAtXiDGrCmN81ced6pdAhd"
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
