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
    "RshN1kcbsqi1PbNWu2Rp946VgmNzzPNcfqaGDm6n6QFJeEhP7N2ktvvLGc9r5QhAR1HLgamu74di1nan8ZZSX6w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QYbKVSmYRtKL3d3u1CcAagAXu8msoetC8E2UEpnJRUuTkgom5LSdpEg7mtRKZBEz5XGBc6wCczYQtsbLFFfVh6c",
  "key1": "kcPhBmHTrV8hi5AChQJTRgNLBc6wXBT87pFA42hrYrtt3D1JYqzUpMfhvq6xV69R41Pz6ntijkrDbshKbf8ywD3",
  "key2": "3Bt9oURHDfntccNofaZrsVM4Hd4reomCjVFzWaoWkhQg8nai6YnEJ1BXptzGLPcFL7R6dG9fvBuamYQgXTTgqSko",
  "key3": "NMDMJuM78Q5dUjX8mR88XGnHRGUPV4YRADiu1AUG6ZH5qb7rAZSKwRquY9ZLGTg9u18nH6U3haTpRPW6vM2hPWi",
  "key4": "21JbqwTiiiNRnmDbRyUBKYwcR1BReHALFUeswcfnDFrKyH2BWMJKpxzFv5JcGPphhuEXQWHrHR16uhVVCU2ZUHnC",
  "key5": "htMS9xAs1YMVMNGabhshVCkpk7SW7PKTqnCqtuaRcf2JEkmPro5hZQSF8wJ1RHzg1QPhFht1nT2MsXZdCc46XAC",
  "key6": "61V3hS2L8WCq2JUbJrMyr6GbVCkkopJXrRiovXuKM4Cb9cvYa9X9ejViq76LyQjY8wbm9CQJgdizmEnFKKYzjX4s",
  "key7": "2RvWUxgTJQCJ1B25SeqHr57C4ak7A9oNc7YwvhHBWKwLZKrcAFzNf7nZ8BcGV3SfFqKcDt5221TBKTkBm7UdgN4g",
  "key8": "eHBLLftkG5CpsyRFXjH6eSWxJJwGWRU3uQfCRTM2wiMpviZEibTJtiTSJ6HVMhNW4WDJCMuCFGtJH3nMb27FbV2",
  "key9": "4Mfnqp5mUDGCX5JVimBHp3uoTWJBVbguSys3EzWDBmF3gQEgig7byDUXqWjVGdeHT57yp4vktE8r2AHsFDywpN7w",
  "key10": "B7E569ihXAixe7SC6xwsZTCZ1jN4qtY2PtsEVvM9hdvMyx3JZcEitsAv1gPpfMTPTUBLUQCHCEQtMhxJN7aZHCh",
  "key11": "3hDioannLMPQAgBHaYWHvACMAwxkwuwSHdjRtXovuhKhjQjFTX3bgeNUA3HamuRyuou1A6cbgxvrWP4HWkK4bQNU",
  "key12": "2LAtZUKbhYaUvXhFGE4tziU6nNTcs6rTiouNF4HJMRV1xTsKGg9EYaUyH9h9ywJ8YZCbtUFC3tr5dx3Hazkgagnn",
  "key13": "5cFX4ywZe22uWwXAfq8aKV8A8Dx1ARBrdYReZSQe1Cc76njMgnbtP8tXZkgvQRJRw7AQGExhf9s4KRnE23weRQdC",
  "key14": "4dGcf3hewxneP922EeNrqyAfBApwhD68Ld22xdGfUyvy7PMTLtz835SFPg3S3bTC7Eir51oxnRtj65nU2Pj6GwGw",
  "key15": "5zr2wyJcUYq1yt4XJP151XjWqhhqo5tHbkTExv5UH9RqVKZtkCFabtL49HtoWAMm1GfNmrAwnDSe5kFFPTTDYLr2",
  "key16": "3xc8kcMtnsPZ56QWpuxDtt9uFB35VkJggE9sAe2GZ7vrM5CPytfYiKNdetbEHL3NrPiZsk2MJt1xbkEsikmVzcoW",
  "key17": "58puCLujGm51kuqcE9PhiuDSemXbFb9mHhDgJYWyCGGpvjLmEuPCT4oW1NkMdSxwJxAFLHEuxUucAFBxygWYnCYb",
  "key18": "5KYgsb2mWZxEXPLHngdaJ9hhnpz9yBnTThgHtGYzixTQcohXBvoenuJk9gxbJQcukTZuLkYq29JJNJzuHYP5P33r",
  "key19": "2KmjaRJvdk9jNNogZNvZmMthxSo57Y61FaZf5AqayqZyHimgF4GeDGioVoR74uLiGuPWVtXZHHZLaV1PDZCBHtSH",
  "key20": "2psHzPaoWdADUrwTqJdpzUe5uY4AR6sbXgEasFisTC1rjPUg98pCaTR3T84F8bFYEPTnawf2QEMgoXQYsuRwF9H5",
  "key21": "AjgN2qGA6ku1aFSNquTVZVRCMYKGgBZETUBWhPZTaPgX6gPX9DxWfTMZHyy54Y65Ar3hucZ3F7sZuy2qTpKNKtR",
  "key22": "2qVnBaFfxx4wMF14BQjdg6q35zm2EB5X9jD5HF7DSTkeuQ2GRDiaVF8X1hnkuVuuAmu8FtGoay78ZPUZ6NV3xM7d",
  "key23": "55ahG5iUeKFiPZaSSDPpWssTt4tbUMtCrkVqMYqcvvaeJnewWbjcXv9dRJmn2HwPVMdV7dc68nMg3ku1d8GUe4Mj",
  "key24": "5EXfRXtitJEyawEG7qkV9uLN27evFSc7gmqUPCQfSJJGr4LuqotqBoPtEZiPmQyMd8hpMG3X3zkLCxMzitK12GL2",
  "key25": "41LQGqM251SVcRGj8XZyuwe1XGEBY3zTgtMdNwCPDc2dF9ahHFBzss7Wi4CYmD7XVB2vvVB6qtdHn5nTj6pdEJ9y",
  "key26": "524xnMv7YCB1ZTXGgAcNW6bEPENcpVdhWAYchsZ7FY3zc27Z4bm9PhRuzQhAqm6FUVWwQfri5dryW3P88abUfJvd",
  "key27": "5HbsNxKY3LqEmvKMMUvgQcwZGB4eaXcqReyQjrQV2kC19PiNHKpMdQJ6Bps4KVC9KzDgjCVjEyGFcFEQo2EQDtDa",
  "key28": "2BjoDCePm58cJ8mGQUyV8wjLj4dsAmkLQGXs2HpwtSKfHYRBBtMrm4ixg7GgXu63j4wTgpbNBck4sFEU8p5mWY12",
  "key29": "3nXacGJYB12pCZqtf5RSYcEG3Kr3YkX28W27EpeXSyQ4XnJBrS1CwsiP6PsU8WrHmHDf3VUi5dbk7hNhzrsHgNJ",
  "key30": "4X7TdMJu7dg2Pi8HqCa4ouvPhA86fgPqhxZ8ArDy2wvRzHuGYDVjKED2Qa2sFAfMvNX1cpKfxhrHtZyYfdCpb8V8",
  "key31": "3sm6xbHoM6ByGTus74gU3kAEnuKkTon9gFy1AQMiAYq8mDaJAWSULVjpuLGTceXaYNzozS7oLmRgy6qp7sdJn932",
  "key32": "2XZuAEotKx5eqsMdsGLd3bXcdwdeHU4EL4EEhSiPqHNngfuBD87wtjdcJr16sqcSvfBupLnA5NR9PjnMDbLue4XW",
  "key33": "3XaAqMTmZafR4vW1m2jVQzaX9NUs8d5iufv1B4kpjWuo8wBCc1V5PGGze8ntnxYFBMxZ4RBEYgvSVwqsxqw4eLxG",
  "key34": "UQ5Wn2Jy8S3NGnHqnbdn2tEL4bRTtHApJST6bo159vjebcHGbU5pi2eMPDh5ds135hnc86jQSeN8S4cdwHVuwVg",
  "key35": "kz3RwCmS85JzS6i13QEcRUuYKHpnhKJGcEiFHxbNDV6pVtpGtsH3JocfPNfCSe5rR8YASVjQaRFcVhTcLFi5ymp"
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
