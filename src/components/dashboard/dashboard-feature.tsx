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
    "5BtFBodzYu2ksNjXcmb4e6eKTQjQ43F7JwSAcXJCsT8nCRg1gzJwBPRgN7UD2ZEt4XNcMpEGx8M1Y9k1FPkGLr8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64uji5z5rjd74ypfckKYFwnQdgvpNtt4yoy5mx1c8iFe2HPZwiawA4UQ74TSkVJjaQEEMqpLtDR7PjANSSSaV4Cq",
  "key1": "5W4oqjDBgmKTsH7eb46qGu4RGzU6zLL9SEeH2QBRwjsRwpARfhmuS1u8S4TUfJkkrCKXhNPD1tAhJWm8ARPiBVeR",
  "key2": "4nxxKbYKrU7xjc25sRt2S54YutRU5uxHN3Fn9znT2vcQsmdQCbEMXG3aSJ4DM3Xqu1QNpX7Y2ReqGTiQiijxN9D5",
  "key3": "pq6MbbfgcxSPtH3GJHxffjKmhrdnihAUBGEmy3uXWemuE6PdfMLLBh4Fw5MhptmvrcEMpkrCt72kVWbxuE4GMYU",
  "key4": "yGZ6vkN9VmZqUu16amZBNixTNojZCSk5s2H5CoY1eCkUMSh15QfTcDDSS1LWtDro13YonfMtTkAsutxQZkzWBGG",
  "key5": "g2czEbKVMWfJv7zqTH9pE5Vq3GWu2u8Uwf4YCUpBaKAyjeZGPm3Mb2aoTnY9nXFRqkFF56skVkrRRfVbbRC8pBF",
  "key6": "4G4Jcw3wistR1ECAoovP2wbuFz8rEf5DbvJ1T5wNCBc9r3oTnUbyn4tua23rQpQYEiNe3gwBp6eyQuLT5nG4yDf9",
  "key7": "3wXvs87ieR2J4KfBM8FUtBhQVY4szbPskyxP7rd4dmH4By9DmEPxVBanfrvheoQu3pFUAVnzcWZUghM53q8fr8tU",
  "key8": "61Juotb6WqLzwxnAFu3rSvsMRjKV52gAiFuwQMSf4i88rH6Qf2xcXRfxKAUohMXE69V7PLEz8bvWNtmqwoETEvBV",
  "key9": "2mcjJBnbVRnaeLhwy1JcoHCgHqg6vxh3HeBkftzo1RHdSqKhiaCvFMF5PKKXHUyAuvaxxuRkve8oeGvbXhSe23kv",
  "key10": "cS9cUTq9xwfVpbc7qC6z2X5b8RjMtcaYaeaAo4v8pL2PHxffCHSrQV6yZvyfgC3Gz8GXWM3kwVyLTspEPkEDqtc",
  "key11": "3gHQ5tVnjZ5MJkBXCrAL4iXcc43983f6sRXCgqRVF8GfUFNdEJLNHB1ZPWKwe9SZ5L2qrFRaXQdGUGGPh7QQxjTi",
  "key12": "5a2jZUP3nNX7GgYpauaUoFnBtt1ftgyLppDhQyDM6yYwtLWbmYfhv3PAWu3XzuoLsjvN239tqWjhrWqBi9zU3vU2",
  "key13": "5jN9vLZCqAha9QJQZsZeEVqoJsiADVnkxQwRhHk6NvHqWWksdC38a9itzbSkv5iknoVgEJtewLw1tmQrVPMdPyV9",
  "key14": "35u5xyiRDz1gdKTa3y49b1sQG8YccRXCTfRTb96nhHkCFrVRuhWJXVhKe1irUXUbA2XCZsTcbMyMA7efS9Lko88z",
  "key15": "5rrNoeYYdW3jeDUBea9nLj8vrbS7YyDkEpFU4EAW2Ghf4q6ZBpng3eiF4NwES4cVyMCywKvckAB9DpZdjqgczgG7",
  "key16": "YdMfWV4dP3uFgh77xQPYYmDKb8GxTHZdygqw3LfYwwbfgHrr2L8z4P3ocj5XESi27VM1jJug362Hp54WFpU489Y",
  "key17": "5wbEmByYrjMuNx5WA5Jz1Dk7vLqwuFHPrFcYCTk8ARLTUEM3uqGJZudVC2NUKVmWhmBiqcLTLvZBhbJBvEuURLiV",
  "key18": "5p2ayyjyBXQLvCBBBNNWRhCvY3WELh2PQAA7HcCtGwZgwuyRzzFJcj8RWdrvgEUUN8fDyogyCrJT7dYDHrDTmRSd",
  "key19": "4WJFaDWd7idegjDfwXD5fmJGSwyTBBmg8FaedLLRtbHRy8a3uKoWdVwZcon2n59T5EtJibuTpRJSMVPJiygzjJmK",
  "key20": "wsDhpbw2SpkRZuLv4HuDRBQCNwhdB2W2Hw6fFVhdBCG7frssce1zh7tXfLTpptJWXTfvkpS1oo3Y81ANLZeNptn",
  "key21": "2zsPJGqEcuc7ev4qixJD2AQQ1Hpow2NzyrmgmvSyFHyaSvJ7haTUfRyj9cpqfxBKnZgpvWdobN2MRKEhfua6SHXt",
  "key22": "2RivbKygx4MJG2NbDwJRU1eJ3Nk3iC4nBRTRPgx9CuHrqcumzuyj1Km1zGemMsF4R7TNJaTqZac8biKNVmGDEJqX",
  "key23": "4PNK9YX49PBzFz82Hw8bhVch3Vcga9WZkhCLUgTADu8hzGE36ew29d4Za7aJy2JeoGdVwjAa89DLGGPsUCL5fAay",
  "key24": "5bEyrgoqaA7RECJkPgFbZ55G5LqQfAGZNa8kmKMDYouz3hYY8WTm11DtbLWomTPxAjtDb2uS2p1SeBCFvvA8Qx4x",
  "key25": "42rdnSZ3YdDLApGihEQTWHQZEi9dokFqkbiVAfgeaM3PjUyqvtaChouSSTMPphMxtsrt5YU1NvUajAAharsowHBG",
  "key26": "23Jxwzq3r1oACc2WMCknZBf8EMJGqmH4hVsQ3CzNUFKo9iUFZKAwBaTAHpgnKTEuTi9ehCNawq4YBcujtxzAKHAm",
  "key27": "y4FNhH1KAaS8KAEpbPES6NPDY3mMu34diy1euais8afxc4fFoURv7S3v7ZXs54HzJAqTrQmhV6q4ck2u43z4pwm",
  "key28": "hf2oqxRRaqp9vEaSa87oemvFNn4EqUQ3qUwV2ERzenw324Tj95VsuVJXTxd4osRLbZhYB3cKZCxwCWqDDw4v3FZ",
  "key29": "5rmPWYKYuGS1jN7q2FphbgzxCRZSvekeF8XxeHGVJYEQtCBHf7Ux4mv9HCu1fx212HDCLZPGdXKL2NeVPfvWxNub",
  "key30": "jfqubnu4tP3qdatucoAGbKktwczsmXdaR4aqrbeNLTPz2mChbxA8gaa7oiT2YTNUBjCZ7J86fKriFn5bVGo4ENS",
  "key31": "63dBSUSkEWzBYRZotwhTyMdJp192NvJmoL885NjCQSnyZys5wirHtLxb9QvYDqZ4ZYCpd5hSGMucNnrtuPfbLhuR",
  "key32": "4uKVfdBzorSnpx9w4b8JCTXCZYCB2HyNQnNzcTwDWda4JknK1SxvHVcoKKAdd1sECxBo69i1rLV5SW7xHZfxMZJx",
  "key33": "HeeTBPHkXXaF37JX5MhXCuKDpXMfMw8jpQGYuFNC8Nha5FtRf2E9DqKXRFubwGHKbgLoz4BYsyEEtBg3LEgcsPN",
  "key34": "4B4efNQNgUzBWUUfxEyVWgmuZC6JpRhGY4JyEkZVweM9Qteg1MRfxmMwy7MJTdVfVzq4N2dAX2z4Z5uA2Bc9gAKH"
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
