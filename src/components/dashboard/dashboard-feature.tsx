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
    "4LqRskNrkpqjGaD9HRA3bp8d6Xjw9v8HL1ZwcXksbahMgYvSZ1vfhLGBBtpKo1acjm7RsTr4sJ8TsvEXxLbLXpHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J45kW1beGuV6opfu9oGXHAjV1cwKQmpsG4s2GPXenMYTG9EM9Wztt2maFjgpt6Tjh4eoWnPrz7vdAa2L3TUnebq",
  "key1": "3mtShUUXFy3Qqo1HHbe8YZkehyNxpPXJ3tYfVbkxfRSVJEcem7Rgt8HeMtUNe7Z6JNzdRjCKoLnXjzrCDraSevyJ",
  "key2": "5ewGM93f74i4yvdP41QqcS74yKMYWQ2WH7Yzxh1zte1jH2CSyqV3uGhevC5Cm3anWVj9RFRwZkZfz1DtkrkqFhrS",
  "key3": "4VwqkwzkAhH62JR4Km3k3S7McP8TmMK2sJSxWg3fJSdMvKcruXPACXEZjRyaJJQtpXYseieGGn3tewh5TKk46yj1",
  "key4": "53z6rP1fu7Zqd4AiWcqWUMHvtkQTrAcgdaxWsDenjeBnwAospe8KZAoZynPA1gi9C9uY3YzFEyEbrJXvJbZct8fZ",
  "key5": "23HwibwhdkEzV2dTUNj3JvjQxuDVbTptMJyF2VkV3vXpH8rYQ9mbKW6uNo28bn8WzYAFqfK3Yfxwu26WNpLCSXF3",
  "key6": "23AKqDNBKfsUM2EzRLA1muVyhxqiohQx6QNoikc3R3aCcpKUnEcMXyoRhJ3V5tp35Uzw2wJHT7q5Z7A6Xun76JkX",
  "key7": "2NCd8XULL9DbMkkC5mbXaEnvp69B2TgbTJuz4q3YD7u3yVMDn9EbzAoRB5KK8gS7wQnRaDeuuCZH4X7D5xAQFpZz",
  "key8": "3x3NW2jaMyS8SSdpN9QVkjwcDTfRGVR5ioGZ4MNxoBEtzTHZBbgk3EpUR2G2KkYeKZS2Lhi6kaSNiZ4CeJR9voD6",
  "key9": "5NevRwppEjZ6zyqvzAuQh5nJQGqRF6xsC2SqjYgabac6LwdC3WY37MiAUhxXZBfWiKiMe4Pta66XFmdPbVTA6saw",
  "key10": "61f3UfTkj3YoftdxK4M5a53P6rvnVYFyX6zxFkdGQwWPH836hq4U9FyRpaZkkXyzJDUUNpp27L4aThcryDEC2P3t",
  "key11": "5sLfdK7AXGUW4dUUU6GjEakEoQfVakcquBpkQX1KWcG7huDnZvryNoEEjrbdTyYBiFNaTV7Bwq3Y4JqvJCUmXuAb",
  "key12": "5X1WvEaesZwHBTicomz2ccYU2XJiSN1uLy1dpWdqSzPnETcP37XWTPWUiYXEzdt5JzNiSRfq9f6xS6xH99Ue1je4",
  "key13": "2CpwxBR53j2kuhpoZqvJg6LoZzik4WGQF2nj3dYmBpReonoVeptrt65uyWv3Dg8uiTyZpvFovzJy4EDw4d6pfer2",
  "key14": "4j7FGgee3QohkVGR1gvYDeCncu5exUoUUVLd8etyLJi6X8T59R5WKcGN5SaQyvfRU8Y9Tn8xEPP9ofKETLUPBoV1",
  "key15": "T1tGr7cwQUFuMCEVSeAA7YvKwTBNiQiZACS531L4Fkpu733KzrQHYqF1S7NHMdsfbckmubiaQoekNp65PXM6THK",
  "key16": "2H49M91pxUGURCVW7Y2krfPgpXpdXqg398RATLLQ2c6nELYxiqs1pDhF6VheGw8NdBD2U1nUee1ky8oiSqZRb96G",
  "key17": "2K2AZKu2WVw7yu3KCv1RGEjf5JPR3BoTKz65ujqZgNmYVzZJcHJYSB8bEsfVpfsRVcem8vMuBjnzRR51spdGpFs4",
  "key18": "4thR94Qkv4DvVMAuTnRNoUHkTKASxhs7JxNAevB4FCLYHmRLvG8bGXoQidLsirdHrKNSX2wrfPkjBERNuzRsp4uK",
  "key19": "R4iQfQUPEvbJeSfmZbpb6quBQJJ8itpNmMv3hqt5GGNriZ4XYVGc7N7sUd72bcPjaVTiAUgSFDfiBdmuXH8L3Lj",
  "key20": "3ZZFKuDMbKibPsGmNhdVh9Mvf6TdiAAL2hye17HaBHnjqTxUDS5WDLpkGrBFX2N6MWQEMCrc1WPHW9hN2J2VUTa2",
  "key21": "5rKzftUF7eaUtHAFtokgbr9Z7oh2tFt25mXCRbEFcHCj1ShADM3nWsEt81xgUHPhyyuWENW5smKA7u7xdFCHpHyW",
  "key22": "K1C4ko6gYCUBCcwqCQJwhYhAyceuYoAQMBFae6Zj5uufvPwjBiytBFm3cpyymPnzbfvsXgkuthopxdU2d4A9A56",
  "key23": "41K31MxG1pVD98SRGnd2sUscA5z2DLfLcKqak4jnSQcUtJ6kZLzwBq9jgDVJ8t736bQfX5ABWJjxjzk7pPtRanuc",
  "key24": "XzP5v1vPMm5LgB643v9FpDUi6n97MQ5aDQP42syCEvxgmv6xATNdCmGToVpc8ERV5ipjRHsyj8567L9SMts7phc",
  "key25": "4J9cUW8GuVYZPkf3A2kZEju8Aq643YtkrQ9ZzhTpufJ1BvfQwpKby9ZBhpPPXWbf4m45L1r4CG9JLzBsM1M52CEu",
  "key26": "3fj6bQvdcTsLjDkdu1GZULipTLWmBRjKk43zxpeB8guvMoawt4twBY7cndfUZht16n4eXYLPemu8ZYqsGSx3vvUU",
  "key27": "5n8P88GN6EULXNgMhjWSusGVekUoMX6P7yuRDCJmXUjaTEswcxyecxZrukDVVfbJ5PpTjajPCWnqp8NH4o8gA2kd",
  "key28": "AJDWeqFa4VmDENjnAupJt2BUZv4kgKaVLVtXeaGQJRCN4NwPt2TrFbEabPrF7ZwRpfdxgjVXW3QKsZNdRpuW9Qx",
  "key29": "jhbA1k4c6u3eJK2VMLiWEdQNgkNfU2pvxY4C39v3ncxg69D3aaXZbTQ8fapnApcba7kaiiCutiPK4Rc4KhFGtep",
  "key30": "2RDxKhk9pQPkCcSioJLPxEpzXGxk2iKgsnkxrRk87UrAq8pTbs1PndaDsUPAVSzDEeFxuTaK5YWEFgUXfYYxdym5",
  "key31": "3EkJGfs3h6iFzijaV6FXCrJi3SSVF4QP51LiHQp9Jopq2DoRiusLGexAT5GDM3dJHE644hRtcm2vf9GZ7cYmvnEd",
  "key32": "5adyXNgr5sWXw46A4u7qBcS6V3MJ4uBw61QMcJ69iLibe9ZHYMPQMTufTbDwm2wxNqBux8sWm4aZCUi48KKF6zda",
  "key33": "QxQjuWf8V7tFjiNoX8XD2xJhC2pSHgVVAR3aSjRgXWUWuPwmhu2F5GtWjkXB4BiutAbKXcZPfwTvjZpcEzWA1Tk",
  "key34": "2ir8tg3YRUb5bA7v3GfJd2bvMNo2RZNuWSeVn7bp3EiNpzAb9nweG6gJhecthrjFwA4McKf1Sx8Zgp8oPRp1xEi9",
  "key35": "3PHzoD1mKUva1F2UAwrTCJDzNmXUKSqeprEXwbnTQfZzukjF1JL1NJhX4jq893Dh7EuHqXiDd7i3KUETiwbh4WeV",
  "key36": "2rwSJc2yjNdgowsr4Djv7KM7RAgWbuEnz3xsWinv8zgyjkZ3U5XoeU7s3HNixpkxLhmxoJbRyLEFyJoz7GDp7sqy",
  "key37": "3XdVDCMHJtUV6VzwNbo3KzC4KPHVahzUiDBwwR4SwNSPU8U23VvXKGMZtz6i4b4G3VvfuWmse64FyeP4z4yBgw6V",
  "key38": "8kdDQGAhiesnC8ufr1x13na4TFzbSzpdBiT1eRYHV9KJWuRvocpUPm8Gr5UrAPt8T91SmDZLu2qjCfNgGm4RkYg",
  "key39": "3skgAcWPNpNkM2sWR5fBAU1R3waXQs1uCXG8DdKYGs87qHKr1t33AD1MZAinLnr2ZCxjbVBgnFr1C6op3hojjJzJ",
  "key40": "5gRTrqBJYguqcbyRqwGq74Xs4GViTNW4DSVS8j55YG8jKyaVqcvi7A8sAcZbLaejhsfkUKBAYLoKZqtmE3CxznXm"
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
