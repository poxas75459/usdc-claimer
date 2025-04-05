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
    "D8NQTDRit6N9mEps7G5jJ4jbmS8azxQmaaWBqzDvkAbSCA8xWpoJcukxpVxnWu7MBKipnmXJhcfbvioY4ULrG3k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hmZ7qd4468Q92zjYWyL2Yj1wxrD1NtSUG739pzEmMYx4gP6LyaH1D3KebjMZ4K3vJxbMUjhyvBKvJTFiPweYM4t",
  "key1": "5JHca9a5jf6gJvMs27inQGz4mKouinjkiPHjNvYLi3Hcngspb62i5Q3aqavyN2tAAvVuRVQYgyG3BvwPoBSr6ckc",
  "key2": "2W9NrYMfdH1WxuPnmj65Xxw87ChCr5XmBrw8A1sFPMp2rtVFiy84nxQeh2n1bUJdT9rtgHFj9GtAWrbCB4CDpzMA",
  "key3": "5fs71gXoGYRKAVCAUsznpvV62prZrdEKzwnqHkoMmCouoiEaUVZTvMfBvUYdyXawaUNkdAcFotLj5jqvY1Uuu55e",
  "key4": "5kz7UC5VM2WLsm65deETCNCHYtbRju6bwWixscz9pg4Yaq53ZEY1FCaXeNy8uyK446MrCQ6ZhcSDATUDM3jZbn6M",
  "key5": "SS6TaSHmzpY2yqkRt8wt6HzzrbP1WnNw422mgFHNapAAmGR1hZgPuQuLhF3TDxeAPuUdJFM6n9TCLXj1b87EyJf",
  "key6": "2XrDgs7FH1kU6jScoTsTRs8wdyBrhNJu384UeEtxgoGufspGHYwmcMNYua8i6fMpkcxDVMJjurKr5mmyqqmeWeMf",
  "key7": "5JadFcgQjpdZMsjYuiBYem8kmTjpXPTvx4WFQrpahEf5dQxgj8ZSa3yUpw8cYgZsKu7qZcs171K6Z84KRbdDzWiR",
  "key8": "3d9KfYC1WnFynArk4Av17F4z79L65FSqcf3yKeZm8cLr9QasTBAeqrmCggrdbyR6XJiPDwvgJF97jYJDVqNtdGxE",
  "key9": "5vNwSMjFg7Ycdn1s1JStNREd9xASicGWzHmziYscjY1KfpXthqxse2EnLJXz1AnjCo5PKaxJpz1kHA8vgeZiYBQZ",
  "key10": "5Hdx6ZQAsUHcXZGFXMenuJEidTaYv9wSRfR9prHENhu1mmZLMqxcjkY2CtDGBeiFk67KvGLjpRv2FdZ5g31cStF2",
  "key11": "3pbbrJ146XbjQcEtQiVTfpW4gFkqcP36BSP6NzFERnBWeRqdWBrBZfXYCMYuMJ97pnFjNccBKiEmt6F2mpVwPjHC",
  "key12": "2ZLd1e9h1wtWH1yH6icFbcdpqXoddvqNc3MLwKK5PGqMLjDNtVQScGyFvS6DKULreNnTHpmHK4qww6tp1tMKpwhU",
  "key13": "4cgZ2Tb45cXh3Fuxo3mdeyZhhsfPn2vkBwbbVYDsyMgH3yLcQwkefB5VCBe5tf43w8XLh4t6RqnMwHgY3Yt7rLWB",
  "key14": "38HPy2TKQu3Bw1GjuzzeHt7hKy8rqTjugdMJyAv6QFhby1Ap6h3AwCGoqiUrUA5nfxCazAGQJDeKAfLr1PDM7TG",
  "key15": "3sb5Q9GWQf5VArx5Ht9xPvC7AGEE8T5qBAWQGNp5uXjzpjrqed5nmVSF5V5LYkvHxnGzcy88DpMhnEHLraNEppTY",
  "key16": "2TnmGKSLHm8pq4wnZ6LWfbbCqp3xzXppAKRjL8u9PWFk4HQRnzGNBEp6WvMW7VKDvrQ6bZSF23U4rRBL2aqJ4wzE",
  "key17": "311agxfJUHzzdAio98Bdkt4Cjzg3vUQ6CAB5zvU3CLViVxKXHatYdmX3V7d4ZBTExUAUW7uqtCrwkpLPHrF54Vkw",
  "key18": "3uKikuxz4F45p5jvkgm4gKpVfRA9YzxD4mja6UvBkDFCetXY43D4nJ4ShB9BdGkKh4QPJxD8X1PiiXb1A2QevUwG",
  "key19": "gS7cUJiVoNAzGaxdqNxjwvrAwjveunCDDj156m7UcDTcrAywR5TTAAqh861cJ9rcJsjjP4u3eLy752j5SDKSjMm",
  "key20": "cJPwFURjCK5ekmEd6hiB62mRF3wxFptvnSsgJWJ49RMnLak3yVqjQqKVTQWutR91EctsTYDN2h5LqEHQ5QNGwUA",
  "key21": "aThc1xMxm59sQaXLgUXvrLudSEiP1m7EpPWjqEuu79WSW4Z3qDFnMTppzdLj6GqQkmiw9Kjbc6Ley1BeKB5LFLv",
  "key22": "3WoDKPveXt9KDxPQr5FRUWLzNaRbDGg1eC71oSWCsNfuAN2oFVidgE3uVhugLA3r1NkEeMedcRCjWoZ5coH9DsAu",
  "key23": "5L9owzQNWdJtwqvQ2om3ybhtVoKSUCkJjYcKz4ZPMd433WBe6Kechxa6iTsPmHK6p9WQf2mNCLfE3xDEBJ3qWawS",
  "key24": "5oMSDCkYi3ucoKJPceREGp1ms3dkw7y19yopGcTjEoRZDVvMLsHnJC9J9ECoKJ8DdMGn5KGKKebLicCW4zEU9tmJ",
  "key25": "2R6dCUwcLjEYuLb7cxAamsRdqyDUbwfQgKApoiNnnSaVo3rpAzzLZ9jxRqMtT541HvRKFozdcTedDnZ2zZn5U5oG",
  "key26": "2vu58zxDG7MTzobsSsqV6Ra8noFunNYbWvq1cBDZJCeWxAuUC4VwGKGDt6wWEqaDeivM8WDiWi4Za2c8By5EZCNW",
  "key27": "Mdt71dbfA7dBmoixUfxgH93B7xDUswDLQyLH2A8zJohZGwe4VNX7uzdjD8hsa7VJ6yPkMcyJjfB7wXYQJzoNafQ",
  "key28": "3FAVnPTh3qAChmATG5CSnjYVpuT4u4cj3zH9bbjqNnCjaCY9Gc4McL1W3DQ994pSRUa39NU5fsALLphUaYm6aVUy",
  "key29": "2auEpHznVagSvzhmH2hPkfMyBwLQ1qKpgygX3KDT8HPursMdjKRmygSef7Vf5wwh3uofaQLLqqok5kMRppF1UNis",
  "key30": "2U44YxsA72P9w4FfSKF2HWeFm7PTX9iCcJJ8W7r2Q29gpp23UuCSEg1FZR6QAmme261V2gL2PBLpm3GcN1thRJsz",
  "key31": "Ycd5uU7ivV7L4YAhQbbzWiwPkk1WuY7NNDJnieuFDJRWdYFuSXWBKnr3dfnCRWW6HeWr9YyG2uT6yxNQMcYL3zf",
  "key32": "58ciP2E5RSGgjVRgAiAh67s29Ec9SoCmPtERebP67T5F5LoC5UeM9E4dAKCrJoPEaPvHKFCZDvvQqCud85ebCNpS"
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
