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
    "5cjFfVYFP8Rn33k7RrJs1Mcd7XyoG9c8Pt2i5wZJrHJ9VmzJP8ip5414SUnZjeEyMEDMxic1aJ6t6HRujHhFkNfc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45t2Sg4yj4tx8RPQ7897A8VXtBvP6ExkaZojvmsiYoGc3KddapwR59cD9QgFUfmRAJRTseYb5gnHHfiXk2CX21bu",
  "key1": "43hnXcsG1pA5hyWjB1CahJH63b1jverNEGXFt3PkoV5d4tbPnZWv47Z6ZLwF8n7kjxKUDEncis9BFG1o2yMKJAZU",
  "key2": "2uzszZX8NktEum2FjhgskRiZaomStT7ZA5NiJT6LTYzPQWD2dBNGKTEXJUNoY964HyMvsPi9DbPCh9RCsvXt3XKn",
  "key3": "23JLyHzYZTP6ot9LAss9ERwKei8DSvRmim4jHBmKDMeifo7djX4hKD7FjYWV8Vs5JeHFmdE5t7Kyk1uAW5FvENCx",
  "key4": "3R9s4NHzQ9bfTvy3VGY26rgjqBbA5vQgwTLXW8jxcV1dFhiEhUdsZysfpqgyso8ZuWepi9gBvVPcXybUcyZ1oAv7",
  "key5": "3eD9Ny8c5tdan4F5Q8cWkHmHCMJqNuxhxjiGm3e7fR35so91LxG1aaZwNDFdMATpmMCqAWy7LyqF96L2bsGgjHMA",
  "key6": "5SqHQe9u1DL66nNEGEfxiFnMM1EhyMR5YV87o9g2YZd18AK49FfkEJ4izxmVWE96A5xmSSSJysQHKN2opmmRxY2Y",
  "key7": "2oUjQycAPsYTXvV4JUicLgXtCr2JpZX9QXPPnxYZzmwrG6mRmvj1FGgzYvP6T4fz12Uf87EPP12YmZnQtrg1tWCY",
  "key8": "2NFUdYB5qAPSKxKUjZofyDD7MHYFcWYWY96HwH7s9Pe2MeHzkZb4sjtji1FKXLRVNpqaPFnhVsZdSfbdumerDkPx",
  "key9": "3rvcNWAP3rHJM4dnKnrfDig9ScqMw8RwUsb4g4uPiAhnJNMuSML7xWEZKu5kS2XxgKBEC6wsy4QRjh7fAHBeUpmF",
  "key10": "VvBbPLybUCCjXqNftnG6xURDg5pcDdVWuodiZ2hwqjLsmQYHmuwyuw9Ro2Ff186HhBER6rrjgFM94yxEmGHndKE",
  "key11": "44UTVpupn6C98KYh27CFWZk91ydrAgZ8npH8sBmHfcXzNZ9Cns6TyhcGHkxqi6D4vXJRhuTGH4DzwxS5Nmrn9USL",
  "key12": "5KC4fqr7s2dvE11seDyymbVFBG494N6KAmSaYwETWKFNaYFD2vs3TgXfPRhKyHHYC2DKUhhcjMnxEXU1DqvE6rRS",
  "key13": "4TtszvCBNEEnnZpfVGHtbtqLzV1QEFctUXJk3Hq5bo8B71gpPKtM6JqxDtJkmkhnKfdZuCEqdVfYiVi5iGfPbocn",
  "key14": "5awTYR8eAe9HNutpinDxQ9fdUWeAHC894i7QAQYs8xfwz7tX1RArkCuLDMm6wCGb1qBGkFCznseSL3yZKsN62PwN",
  "key15": "2ckPSz8YWZnsJRWsDSW4pEMZPFECu6miWJ2wuQMryfWpGpmv6wfGWs1BmjpLiavMSxizseuivHYuYeyZ7WNciCAQ",
  "key16": "4QSg57EHQsvPpuPN5WR1vEuS6GPZHnpGeynibenWrzWYwHQZAkUkB1Gbhhy6SMYxV4MydibEq9s8ebLfep4vcVYT",
  "key17": "5KyKvjpgBHKbC4v1kHdQhUF1uxofd3G8o8KXFWNoHDqomXdvPQLwsicsTuFdrnha8oQnDHpWKB1p4HDg62d2CPky",
  "key18": "5kim68TYuShJt2Yt4wF7eADk5JM4HyPY1ndeg6kp5YLFb6x7BWDQFesvpVfJD2itTGCQjLMEcZzquvhhNC5thzTb",
  "key19": "5hLiyVERgcuYgqb1B2yFH2tX8Gn1Ror95o2C79nanWZDobW8vsmqUcCiDrcSHJkxV26mpuKcsULQ6ziyUvdSEuRH",
  "key20": "39cPMuUhouRYvGp4hc4eV9SwKJjRq2nzc1yiBbtC7fSFPuuzfyUNUBDSxYszv2Re1niqFZwGvPgTY5nNqU4S1a9K",
  "key21": "2QsxHtR9KhncmxyMW388YBoLCfTvrjvgb4GcjVgs4nbGUmAqXdjg5busCyzT8Q2qkZr2nSd3fY7sYYWyn9VJpYDR",
  "key22": "x4Pe34aBELiFamSjn96GoZaJq6SWkF4w3Wek69TxFZ2r9jWKjC3uuXQ1Ez1XkAprm8NQevcHs82rsVfJFmcA6Py",
  "key23": "4mcvLNMBBE4hwpd9H8DhCeX1gm9VcLAMfmkvHUuBuP9JqvzHKutPfRPRyZEt93dEPtCR9RTv9686L5LqymUSkrfL",
  "key24": "5BzyRU9H9TjP5VTRRi64hTQ7ddXYey5LUZuWCkMDJx8NKvvmHY3twk2LmFKRUJVe4nQmJjBtSzBWvXmw9MQPWkDZ",
  "key25": "tCmdbBAHjCh3ArBuSPRQHZS5a8Dgfbcnb71ETpNqXLyEf3VS7PMBtfhsPFHe9ex3p9ts2EoQWy5ZQu7kFGsdjUa",
  "key26": "5LwuJFWm64QoueBSnAZcveei9TtSCgDDXWgP6vd3XoMukBDW1R6HmGK4ue9ZjSY1UPGfPtAxjL51m1d4qZYzdiLd",
  "key27": "4sUoGFf4H4u8zvTesoKN33dfcp1VNyCKJzV6m8SuSGaZr62dvzC4WVQnrFzeeZieD2uoAcsizwK7PPZ1hpPPe1CB",
  "key28": "54c4SqicZHo2VyWygd29dirCf3ARLwRgEeMk581sQ5BwSqAHitfsgLJwGEp6wPV5PegTP4cWUejVKCF8mYBRVvmp",
  "key29": "2SRFsHGrrmPs7yHCFtBUxDvXhYWJADDrbhX61yTxjMRyVGESJAGH7wCkyDFsvsD2Bkqb6Qm1eSc6i5fGRpAGBeyY",
  "key30": "ET5Gosa3YRpsAcMHey7QRova8dfXUuCh1BDT1PYKTVvUVWLEeTiwY7Zc9J1P1cmxX7U4QZEUWmn5X9LhTwW9AVc",
  "key31": "2fe8keeZjQKJE27vHoLjQ69WCxaL7p6QLyjHZM7efNUc93C4oqos4pDxpf56jaFbKZSQ7zViNk1HVa6bG8wdWrDp",
  "key32": "3xjDCBjktrqDMyzf4JDV25JDfAC3TKqpRxXmTgspD1a2J7RuhJyY2ibkQFCyqKA61UdVGdVUai6FUf9QM5iaazWH",
  "key33": "3Qcq6T8p2nDNjjX4ho6wFpcTEvtwE4rRffHJ3z7CeyoTCfVS18JnAq2tn3fBaK7oaoB3Q3LQNoubQMhWhX16Va2d",
  "key34": "3rwC3MkEBPXfyRn4qU99mfM3cLj87yCGca86QxT6WBbqLEMRwGd1FmruUKWRFtMtMKZekG8fwbAvHh3mVx85braA",
  "key35": "3KuJ3gnpY1GgUHgQkkzLN5qcwne4EvvZzxGXX281wBSSmpVP8Pj83gS3sqvEiszqQnRWBnUoLv3MsMhwRCDWs72N",
  "key36": "5WzBcz91vSpTtYhLVmfghnTWFHWpfipigDwXaHQPYHSp7RHxGUJEoqmpymX6yZQJV2ZRuFY2SodV6FeNPBRWhz2E",
  "key37": "4fAHBQqRZmmnesGQXHeBYpruGkSJ4ahFpZtVaB6DCyhY2HARiquNTrbmhLrpvPfPmJ9DKCzuGykQXrPH4dvsDgbU",
  "key38": "4AZLBiNT6BpdiiXonGJ6pQppdQQ82wtnqWKxjt9zG6aamzPseW5DDzUvReboBCWepsfyei8Y2DFbh9hgdKu5QKNn"
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
