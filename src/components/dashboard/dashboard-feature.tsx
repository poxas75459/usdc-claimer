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
    "4PRoqVNFgnhnGBi5wpydapND6UyHHXycS5opUEs3YkQCvP3WD5xmKk58WFTDt1JLhapXRVZup4p4YiTfqEFHKyjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BhMxsUTrwmjQTSKW22EFGiX7zHbtV5Rpv1HpURojNtHySxcvqrxPqY7VKPzqvFC74ym4t8GxuMx9siWP5WxGGSo",
  "key1": "2xRYw1ER1yUAXK7HNgJPXtvoQNYpe8ZNt8dMds1R2k59TDR9LUjVxrfz691q8b8CwSzKqFPfAYVXuHjYmnNU1B3D",
  "key2": "2ThpJD6iXrc1PFHuG7bt8qFNaWM1tRrX49htemyEJ7UNELCv5Ud1FVZ3xRjPjiL8QiPUDVyL95wFVtJD6VYN1kD1",
  "key3": "S9RN6RetwqT4DaRxp7jvQ1BQSV2KhTckHGs1NA64f5jqCb1HVwT8eXX2QNT33NPQ9cXEz59AaFfPu49tZNUgt89",
  "key4": "4f9ip6M9DHLEUGGB5q1eiLgBRcjKqtWq6rzD1YjLLKJsktuuQgGhXGcfqF7c5CpGDguETxejW5UUURHu7EEKjBQm",
  "key5": "ykUeXdjZmVy96PoL68zA6a9H7LNapgifWzAgfk5kGQCXgVbCFLAztMR3myR1awaP6rg6apefiPkchzsrK7KqYst",
  "key6": "4ZE9fWjcZqtnopCC4qotRinMnvr2RAeveYuq46bYwGywbRKEPBHsEQwCAfAzkk12R2bLbcgDa5tjEUanyUmdZCGG",
  "key7": "5X6m2KQEex2HbhTrHmtEakiHD92LBcssuY62fXFRbgn6hijpGMRPSjrkcBSTESPxGkVqvqFyrz2ko7KubEcENdVP",
  "key8": "5rRsZCQx9uSAww52KjKFwwRRJJDFBbhakcAn5NCkm8P2QzSfWuq4a8cr75FCc7wcZksSW77tEiNJd9XrwiZJzLJP",
  "key9": "5iwJGJ1R5vsxT5KeAuFUt8eU2ZirvJLUbTyQUAY4AGJc6Y9wzpvTAbb5vrpbE7aNjJo1XyoeHtkaP84AWRXrgwuv",
  "key10": "5MJ1bDbK64qgoL56DngKEPj7gKT64AWbPrSUCwP4dNSMXs6nVFG5eKoRxK8F2w1rmX88Bp684Kw6sHsskzFgTbnf",
  "key11": "3VR5zGfhF5FAYaWLAVDpv6ZTCLB9wnZdQ8CztQZtEsRKzDJ5RbnFvrC9CW3GsLxrRTmtqbbUMG9496ZXnaveyUpo",
  "key12": "43hnKRA4yXaqManZ6tU8S4uZ8VkF4mYvAiCjCLVWB5JLcNcFQrCdot4hasyc5EUstYWE5Lh8QQzwkCQZ9bb4f6B7",
  "key13": "2reGPt5NGuPzSTKiXzEiHZsRXhKPwR3bwnWTpLWxsvmLsBARvuwSi5dTmfC1jkxdrUUNyvcY3kUHgJsqeacw6cCQ",
  "key14": "2EHBEguJjsi4dnQkUzMpVvSo4aQvHBFmxd2Gsdeiv55v6eVGo4r5Kt3S8rggE6CT8gEzVD8EsXGZo6CRgBrSe1Mx",
  "key15": "2wWQYdAEoCau9xNjht8TFc2YLuLHmhRZcz5ccPaWLZjaSq8QX8Z9cjHBbqD3tUWDW27nkQxqAQyGhhy72kNw8p3A",
  "key16": "2qUo1xA6kLwYXmhiGTMAAnGqrW73239fdF5Re5i1Ac94fsfLv7rpm18pmjC2t89Ur3NmkxQME3yNDRo4i4GkLDhr",
  "key17": "4W4XZpHVWGAv2d9W49pjE6r4KZ5kPN474xgpWB4oUDbTMUZgySQQF5NyBE3v4FN9P9515tniZt7DLmjB7WLb2fYq",
  "key18": "mk3NNCxBzpx7RA8fvbqytbRciPLZeJP9b4Wzuie8XvSbhVBeKDdvr29gPHkNJMe1rzv53mzPxYD2m9TjyZkhaVQ",
  "key19": "3brBfw4PyMowKyQJiVD4GkjHD6U7zo1yz2fcXX2xSmadnbiSNWkxhFibBmeduvjazqCYwCVQC55S1dpmFYjCVz1N",
  "key20": "kUNKFa4bebcqHA1V46CCVxVwpxFbjEuZCtZh92oRMvfxaR1WchC3dZ9BsXQCJDWF7Qm771cRp4venqgee1pkuTG",
  "key21": "2ZopqpsTBcfCyDrKnzDsBkAdgQddUGqUWuBQqWatQ9Zvoj1yJcz2bMKarpShGDV71DCbvrwu4M6rB63tQVq2d4s",
  "key22": "3nzwXG2JdRddiJCC35iY2bYwujecizMDVuyAh693ghM7S1FxLWSVFzL3SRsBhSSXNyBLAXYo6tkipumqTPw8czPW",
  "key23": "3swc5bguVgtwfE1iufrSoqMshVjT1FpBMW5MFy5dB6dqzPXoFcyTYfKHRaDW6otWXud6R5xHt7fnQym6AC9NReXk",
  "key24": "2qx18beMmWYQ9tcPTpN2cfXGQzbt7p5krJqogME3nLHxa1k6rUKuneN896rbbC68WFKTEQmQXE6cuKtixSGrnQ8V",
  "key25": "2MCeZWPccEn7N8m9AXFH9g5YWRhHtdABMTpEfunNBCvjJg9C2WZETjnR1GDwrccgrHSB3NT1xGci3m41QTWAQPTd",
  "key26": "4SdjP3sn8ojpE6LZvvKvR1p6EL1HavR8fLxHcoN5677P4NqEJdm1HhPHurWvnVxMYEgVESg9uvtBE1WR1BQLhZFb",
  "key27": "59oVtYCccEoAv1e969mGbrt5YyEnv3HkoDgpfYMo3Sxqdx6eayQ9LaubdPCpe6QQq3YWddZy1UTf5zEar587Aaw5",
  "key28": "4WH2k3ujHnh3ScxmErEnjn5EMsQWxJWh1hnZvNZNjUJkTWJRkpvUFxWor8zrdbMXKeEKQVsu4gXtvnA28CNuS7S1",
  "key29": "2qDiocpS439Sn1Cc2XCyey5HR3Sx2LkUvoky4jM7C8pRwiHgmQLRkrD9C7hNg7mMuxYd2c3tJBpFURK2Y53pj1MQ",
  "key30": "3pTj1vmgd4St1ats5azEe8mEfCycZnShADmN9yipJgaAVcC6VEojowgD4deSCePQJaLMAThk3MP9QwBhPnSoa6rY",
  "key31": "5czkoxNSzmAbX1epPQCm6hyM4SkWCJrRPTrGwAkcvGbqccpSuAcG3L2obFs9Muh8ERC6EgRW9bFUyrvj8BGQKcEG",
  "key32": "53WDcQQZp97LKpezdSX7WpFoF6eUhLzLW5N7aSernLpLP6sqmBdF5JBC8BXzy23Mmsri8d1vouaQopQ1oDC2YE6g",
  "key33": "5vNcXdHxAKi8UomjHVS9imtcrRMhM9igSv2KuMYkqgibuBS3f7nohYR2FTDMcmSrJkBWzQiHUmsvSppSAwW8TLS1",
  "key34": "4NaLBknhKz6EvUXAQqD57zm4QKPfUTFeNQPE4wpNADoFrxxHLqigmv12uADdaGgoW9P7MZ2pM4E1RNo6xndVAtf8",
  "key35": "3oDFhFLSu99cL82pvYcWWpBhxL7CGQWCiLzT9MixE9MH3YKmzsoDF1oiANFTyqYJ9ismf5XWPgcEVHu9FrmD2BMa",
  "key36": "5N6GtALWysvU9aWmABhy6yVMokaewumWbTHPcZregiymBn6yM1Dk8pNNnfBwnfED1JBURN6CK8XtkwbXUMdyHPF8",
  "key37": "5V6tk18aHDXEybC9Dow6pL3D3Y2ygPyzijQ1MhSVHVayZbrjoEMUL9xzJQLSB97rVKvMiuFhx8fLurFTDi9xTZnS",
  "key38": "2eHaETs3DtFkjB8HGRxegkaZKd6sLeFqKfYaWQemR7WbqdLGeLBJgbtM7DBBoKJnBGY5N9rioRDvQp2KtCfBdqgD",
  "key39": "281wiefQshxRsPLWE4rHEHGkEbQ2yhKcvEYg6a4rhbntFsWSB2LkaM2U3HwbvmFBfJc14P868wAYQPy6PFvmgyWY",
  "key40": "3ramoTMrWJziFkvfFhM1iXSoUDE2fDwg7Dzx89PKuX1xkT6Fxnikw3yUaZDWLcnaynCG4pmZ4AQdgpzwFuQbX4UV"
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
