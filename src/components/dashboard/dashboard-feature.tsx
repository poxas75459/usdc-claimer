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
    "5tCeTbghvTbzLUHaxD6xRvUDX1zck9rJY8whrSM2bPwuM1deCf3UkHmz6x8VJaGCLpKW351gNMpagnbYwme7Rg6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wncn4fsqRE5GuchbxSMW9GkLnBR8xVZPn6izXE4ET3oZBuf5LJC38QJM8poSEcRqWzyrAd3Sbod74f5wy3edChh",
  "key1": "5QHoUwNX8bVkdpSZ7kg38sCX42VAeK2p9PAQmQvKpBc8oC9DubXiD54i5SC1qtCCQhmh1xyxsbfCabJ8otDrkQf4",
  "key2": "3qtRQs6Ty5KZVgNvWqjT9ajDYJX6Womc2SM2pxYtGei6oJBW1Je7hkBVpwicwKjGz4yXQka21Rv9VJMSnLfaHMca",
  "key3": "2ryfsLTERxFTR3Y3K4DuKAhPsmnUYpERatqeaqMbbjx9HgjxS4eG1iv9Z25cPqZZAtVwcMUQmVKRDct1mvWGUPbw",
  "key4": "5YLGpBXiFN5yxjsP8512FUDrF2tiEKF52vCoaxjZBMSxSaNVTkTgULkHcch2yXBu4rTujJLcCVWSHaAWCVBvA3Ke",
  "key5": "32qxGytgH6aycmnZJAQA4cZMg8US7fsq6u8Nk4WQjTxPbaaDVhVnQ7CL4RQgyDvCxUG62x7xh1iv63iWCf6QeobV",
  "key6": "5TXYK4bUkoeaRgBLMfd9erWoovyPf59iHngLR5yGfnoJM8KW1SXZJSjtqBXw7QS512PpTkh427EUePkgpmVgnGkk",
  "key7": "3vBKbYYV5UMk1J4MQSnAer674LkTFSyXYP7GeKBN971751J7gFHwoZXgkt9SG4CQJHq2kKCTMaA7DqsXU72w1CNd",
  "key8": "3fKiHbWTPMH2FteLVy31zpZauodGxweeZgbKPAm8ZnNFVwco1K5GTouNvykE5iZWnfCWPfCp8zoqscvoyxjFsUc9",
  "key9": "ULV8mBLe3qVAWsQoG154ey7AFQ2c5Wyho8pFhqfBUXr9BuQmN6g4vCrAMdE6UMvVHs5W6P75hUWVR9f1nZC9fGJ",
  "key10": "Hpcd1NxtvoMSKhhzdtumpHZpjLSsv7q8XY4SqnzEVkk17Wq4fNanWPcWT9JD32Hhw3VRL275jjdUt6BQt8J1Kfp",
  "key11": "4EBVSmMRBmKwK6whsJv9EB1S89C3BsWeZ3jTCgqtXnCeFoVLKkxJJ5MKb2QV1grzsEE8JrBQpiuKKyXhXBc37iQR",
  "key12": "2q2PP5d8B9GTzvuAEFLxu9txEC8oxPqi6v1NMPXvrx37Ms7p3UnyJnTbDFBSUtMjtpYokT6N2u5ddV3hwtChfjx3",
  "key13": "4MkcnGoGta1CcfbE1tu17n4KxReuDc6LFvMuj6PFzxEEbqy2wRGRooU71GBS48CdEc5A5Z7hWaHgyHPwdy1WWFE7",
  "key14": "5QAkn1aLiSUpHENSwKwKggS9B8ynjdx3nYCangrfe3nAq6q6NPEu51g1es7LSHMTb42ZwfVk6o7UbxDkA3cuvny4",
  "key15": "3MwhdxevNC1ax39LyC586UxTKsFYK4gtLmLT5ZE1tA28kgJRXD5u5MfdBnb19XbWGf9T2mVNxSNqZpNg3j4Piahg",
  "key16": "5jLSpDCNpxHrhvJZr7JCd38GubHzn4ajGHVpSLPFZqJj4wPmk6A2YUGgEXGLmpVnbY7pvmA1yykYSvHDAToavifZ",
  "key17": "3GnhTk9hqQA7VXQEx8EHJAn5tAZpbzsKqKABKnuMdk6U8KP3q1tJvBrFtrGXdutqXq9p91TDndJtkJkmKXPaxH6b",
  "key18": "4ioerNcze9xQn1m8i7dmPw4G2hocCn83fVnmbXueLDZeJuJ35vSpWHaEpSqY9AoVSe93fs5J3SLXKDGKmsgLMnWQ",
  "key19": "5yHwTPJ6TkD69ZKuRGjUyiopy4tyaNZKAvbyKNwwivfSyjj8FTevtZGNKVptnxX4Ap2MenrSHX5ptAvGaiZ1uw83",
  "key20": "3pamGG9z38osbmX9KpQ8JmtQnAuyzefUxqdfbd88yZ7Jp3YetwfXvoFX3EGNt3HMGxmHLR59eTC4xtB7191vE5Ec",
  "key21": "5W5QzkQgPZSF9deVQM7VFVpFhdh1qkCqF3Aq8pfgCTjsj5qnD3hKeoGZ5yJ2VTjHHPPRoiAsTD6jkBSwjeVGCD6m",
  "key22": "3XUkXaW2Zn6gz7WvSUcCkGeUy4wDRXijrpXRuNvzEiQBGCVBxf1VkTTTjmExmmtug6W86MMLQGxzDKB6BTfDnZ8Q",
  "key23": "4DS5sKXRqEw3zrQ8y9wECHDD2DwHS3pQVX9Vy1JNEyo82jzPP6CHxFdjUPS2mW4ugTNbGXaBk9LWtA8q91saavpT",
  "key24": "fcEDUhVfvF9wVhbgKshCKpTWSVNdZ8jNmaUDzVJvNSSSLYYUZtLGQv4NT42jWEcSqrdB8Bb6pjZq1SuHW7JSdMK",
  "key25": "3QJ5iU5CGyoPu3GkrgQRWN19fbYFeCjDmmvzqgF2g5wAZsdqZs7kJ9pGVnFuFWC4q4QU1p5dKAvzpkGy6QN1V7Nm",
  "key26": "3e4ePeL2ZEKTuXvGduCYpncomkRdcpHp8BjVD7M6KHfgga3apN6G6dzyoo68eLKxiRb8Qbgs5zUJaJ6DSNGxTFTo",
  "key27": "3RDG2ydmQiGZYRpaJ4ecBojXAuxJC96W2uCwUrCXZw8tTjFFNag8AsMMMNSMwFfJnnxL8AabJsDUg1dou8Dhg2tm",
  "key28": "3suGhPS7rsJpk2bEaT4h1ieJ2YB2NAEM51Zr7U8puY9ZCXUioYiaSJKUHxLYrWsZZttW3UqEnuj3qXXNNc9gymvE",
  "key29": "3hyNjj3Y76P4eu2hE4UfeDHWWzgFPKcFdWqk6y5D6htpPwwr5dMyJaY5BLSwddtHzW6Ki5rbm9DKVbJ2i4JUTd1h",
  "key30": "2EhhKy9Z7zkuqMPBrSUUb2CLj7189ZT9n96Ps2BDr9hndYobGp6F6HA1GtNeuQ2QyjtY4pmJDCMNpRy6tVmfLCy4",
  "key31": "5CoSGVqpmqxfKRmCNAnaG2QQb8XUxUbJoNbusquQ8XsBsaF966GKSxrzkgecQv47iACYZ5Tiw8gTtdH4BxZMNjYM",
  "key32": "5hznZFxxo96yXvKgJpPJAyroY8DQcbTM3KGuJkq9CgkZYhFzzs3RjmKFEDUQLP1XhjWE3B5SwsJXVEWzqU24Ts6p",
  "key33": "zhajMif41kz6nJL7i988immnSJzxzUvdiBThFptPDrQ3EUG9Wvd4x2XKg2sXh4v9wFRpufFCNnUJbdudBLaYcqs",
  "key34": "3pwS2sFuRVe9r2kVVY5JNbFYE4JF3oeTvtNtq1V479wMqNb8pXgjWrtUrLa21tnryuhHZVEwYay2Ks4Yp5RyNKFY",
  "key35": "QCVJg4MSTZcZN6VGiAKgubWK3hGJsGLivpLdB53SNeh13WeM1JmRXGHGVWqZji9BY4rYihY2QrpRnYbhKrFbs4C",
  "key36": "5dCSwU7NYvEdGYwXVvihnAcLJidZvXHfK1px3CPgUP7W9eTThvHWVd8eKK6cnosM16oT5nvFQ4jNiZJU8goazcnA",
  "key37": "4TAUrWMHocVSzUoQJZcZjnwrVzBziL5SW2hgg4HPRLpfoXkpJTP9WuUUUEctu6jw1VdsDZav1BusKrCJpZyQJFAz",
  "key38": "24t7QZiG9LugfnRzU4Cwrt6cZG36ZkLRntzJc7HiDYpCYuWwnhNa1RBDSPLzz8uLNwqLvGRVQQJNRWTCLUh3DuWi"
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
