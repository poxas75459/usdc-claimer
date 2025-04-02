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
    "chivynqhXK6EJVzVwqUwjFNY6t43aDCTTYtupU8MmMt7yoU6UN2GrEvFeN8szoWvJgsq6hjypWbAtEEu64AjDUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5y78TskskmpAzGXHQdhGkrPLE4jjtBkG5snoigA3YFVveE6gcFqt2CJU12nKdpBdAoLsQiodeq8jK2tgvTDAARJM",
  "key1": "5Lx9jroDiTpfNeCHFnpuFkiisXbk4tq4d9xtPPkphEzXagcUu6WYLzVzu1ma1UDaBgcwAJ4teFf8xuSANQ1eGuzL",
  "key2": "s2eG53CRMZcnZ1Vg5xjB1QNhwcTtY4Tc6RjDqSSXvPDz4zGp2pdfZPgvWBQ3wdfhUDQ64rkE3CEts91Ypi3uxdS",
  "key3": "5d7XuQDowMr8e3Wpy42cMsaJUUZxGzdLwHXfam4bjPriD5XooAWYZYQ7sXjbiKEYeB3eG5Uw4LRz7eeMjTHjZyBq",
  "key4": "3V4wvhPM94ZPaPSPGVfL2SUYa1KJzVmZmbKtdzFLUGQQPt6uAz2RYw9XexsJh1aCccBE8rRvqjkN4acYgQzhmciW",
  "key5": "3eXeW3pw5F7GujtrUwieLYQs5BihYooCqKTzvwmcbcQv9wN5xPGHwX5m3AsqzV34gzXCu3rnSLxwp5A1QTXcAEVk",
  "key6": "27pbb9h2cBi3zDv1iL6QC7XSh4kNShksDotScGpbweuvpxTSrafNBRkTHr6Q1TGQDduRrfotEvBTpgmuywKtN7rN",
  "key7": "4Pka3s5HVjnEtmoU9e66HZ8DemLavbDHoizp884XjzQEYNAF7PFoRfYhvhLT43GJvhWQ56vbzmxCFh8Rht6Zypnn",
  "key8": "38CqaGNaB6Y5SKn7cmEQ6Hxab8Fkxff2osSqD86ZjDzvvWH1vSNAJAUxEEZGu5KHiaxx4vaFg26ZVofMBEqyykRa",
  "key9": "54qTai8ahoLues2zMQhqqLkmR2tX4AvJFC6aeK3awh764Ca8uHwJ66KqWnYTBEToaLtPMyJtiCpjxNTgVH7aURSU",
  "key10": "77F69JFqgXHw8jn3wbwZUA1GK7PfDHGnPhKieSfuphtxBUzVm2g6LpdmQhGH9Mp1ZyrSsCmFjLwfYAdJmbp8Chu",
  "key11": "3oGbPno2BH3W3M3kHNnuH3YQFTdcA75LtLrJW4d55eVE8YWnfE7Apdn8VjrDFucmR8uCCsdzSiPqJXr3kyGiYJqd",
  "key12": "27Lqh2CdqQmtGNgokypnr5ifNGEJajzH8EEzvvn5jZ1EbkBWoAeSyDEppGSR3SeP1W1SjAWLED7XZGV76rfpCkpc",
  "key13": "5eb7WJvGnKcJ7CM4QKThb61Ft485TzDSJHU6e2jeAiAXBGVVpg6UbyxN7g8aVzwY7E99St35oAPPmvNGzU1u462K",
  "key14": "FsWrE7othNYZxXKmsCuywYGiqfAVm1Trtw3HZceWJWKqDLJR6yt5tgh6NE9UUoUdxgmUGCRk3j5MMNiuB3kN2wN",
  "key15": "CUqGqtrQX2czwrK2KPAsW3tQJnrXVAn5mn6DWDAihrdzF7LsqiQTemXLtc9GpizKDA9ZcquGhqwi9PMYnFydpd2",
  "key16": "4zBXyBRLSvuQDQjhXS6wFtATNFVpXp7Xj79KMt66gE1C62bSUC1jupVrke8dsoxVLGFLv3vfhqaFcgwqzXQSBgTu",
  "key17": "2Nwb2ZZFTkKHvPTSEZZ23q1Upw5ZEin6antLt2vMeqtS6BE7rh3ydkmtxx2L377nK56jpesan6rDogCJaveqvnaG",
  "key18": "5VttfAR8ZJYdPUsSnMhU36m4JS6Tk5tYpauV4cFZX3gZZjfRs6wTu9cDidukMJGfZsxJLU1gvLRQWNWmUdBktRTo",
  "key19": "33apMRVGHSKVHevZockzvwNNxMFiKLZDUXiN1nbfX2Aakjad19KVfTxfiW8PHTbDUvGkfC9QTmi4ptKEiCdygXT1",
  "key20": "4FzxTmvuM8GLzGCoR8LKF6Lt2rXYpGhyBhqdtNXyjLz3n2nWhLE5ndJz5yNSxHPYDn27tWtbW7ByPFCKgapzFd2E",
  "key21": "7Q58YFFvHV61PFoM2NmiSH8mroKrzJ4GCjfCgipuux5q6U5FzcLHuQn7FW8xwogmEwb81JWK1qwkAa1ka1ZUPcR",
  "key22": "5PSkfRtaFVsHrbYNbgMtJjRySWWTLzesZi1gco5ucH7yLStK3oQkrY1wVbB3gFY4QsYiVeirXAJyyK9TGX2vruBb",
  "key23": "37ucMLnFsRueBDQ2Ed6UDYz2AjoLJ2xD9V1CpZ4NBrsrpQgnMSzzQNuwkBWVV3o1FNQTyoR7qAe1tvP8CLY5d2vp",
  "key24": "2aHyRvCxNDy81MhAtALzW1TanpC7iUdAX6N8xizfe3H4iuS113DuWhGkmYfSzq64QHKqJhLnpvWzM9bndcxaWDpY",
  "key25": "5uLPCVmbnYj85DDFvZhfnMpUM17r62zbgtBwdAmAhFqDQPsYpZQxonnLKEyNW53cCjMcZ7aCJNoNZrq22Bczdrx9",
  "key26": "3piQyQ9pBGQWsVTvbBHsPNBicV27ZoqNzkt6odGj331DXEBSxEbQYbFut5H7V1EWDurfKEo67kyQa5ifEc4UqyZG",
  "key27": "2ybyeDtYKCrwq2fnLU6qebJiaCqtq8eweEHm7GLhYGSeii37kiV4fcMEdYCyDb34VD7tWp6gRLxSbBSiZArzXYhr",
  "key28": "X5FR9TMFoFBuRzinrHaoRSLJsZY1KrtTpSDv183YunKNLg1joDDAQPUQohLKgRSLRsGtdMPpvJJcMsV8dk8knq3",
  "key29": "3H9yHqGbuowanMaZHiTgogDZLkaA1TTLULpEESKezgu7zSFnQMr2oYrK7tAjLtX5TNpeh5JvtSp1VUWAsdn6naY5",
  "key30": "bEfNpALc2GZrF9Xkk8PMk6tefzK7Am57PRU8xHGvES1hauz5QPshH6Dnaw3oUjqMyAwKD2QwR8ko2PCpSyM2JG3",
  "key31": "4xDRBoSzhtKVfCQJyHCo4dMFzyCMiQdTHzrFXJ3ihdZddh7XhRm2YM4vhZkYyqhWKfB5P41cFSgbPyUUsgPYmFFa",
  "key32": "5DA3g7DSL7uAzewvLn1Ag4jPpfXmxDiv7pKnSkjWaxHKJrvu3b6WSGiRKNXzXA8Ke4Gj43evyXX4Z21z6wNVs6wK",
  "key33": "2jThkQVFnbTmyeZmE1jyVgqRRw7qK8hDhi7x9zjYE255KPztWFpfyhT8mMSEft6z8BFRtkB7m2A725kAAtqEvyR9",
  "key34": "5TW1C3WtUdtrzx3KZLq3Vkb8917vi9DpmnvGWaAchycYrXuvNGo4AaHjLagkGNZ5hDDXx7BN8g548ZKhduQkH27o",
  "key35": "TWuW7jnWG8eNQDh5kCXvBi4bHCV9PKYkzTnJRiQLmBN9Y7dr2XpDCXXLmeUETv5AA6RA5H4qpL3kCx3BwBHGqNf",
  "key36": "Pf86jDUQQGu3z4WS1zUmxukVvCfnYAzQM9t6t4mJwJEXfrfZ1kYXQQxY5V6UNsPnGJY3F1MADttrXFRxegToLJZ",
  "key37": "3yyArpmmNBsGhRJLeWNxVGrbQtQmPhy4kNwboyWJPqKaCRFacgt5ZcRfx6z8dp47FmYv8mjsGDVhTJDZ63zHBaJR",
  "key38": "2FxfXq67o7NgXyBCjRHQx5pUr5iXbHHPJSkahHpdLVfpL569LRj3BC9PnpzhSrq1ECT53mLjPfQ91rVRuSygtNYo",
  "key39": "319Trt5dk9wFBSFbzCSND5Zir3AFP2dTyyzBPUdo15WbyUdcecyt5iKqvSmmZWNXmm8gF8fVjaRho7CtnF3hcD1x",
  "key40": "4zpVL5CkgXGnqrgoyzNGKLMHY2tjtMTAADtbApFb8xvrpWpohikC2E8yUwtAwJEa7cc3yxWnoX2cBSfu9veuzNQv",
  "key41": "2DWjY5oQz17tgBJ9JcAs9PYQEeNC2FLMyh55kBYSkLsPHWGLbHjNYaKLgC3SxFWPdqUiSrCo6aSZn2TMH19gGPCQ"
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
