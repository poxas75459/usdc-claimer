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
    "4qMJGvcDDGRiXW1jKyd7KH9PzpNp4p6NAwu3kYFgk3jXXH4VNMNujVoxPr4xMbT9WXqtGiYCVzs294PnPVJ66RCv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mpW4VaVWTDDBU3vZwTewsNEabSNYhghoceBTHSuYTLBdu2DS2zYq1AwCs9ig4aGZuGd6TTu981icq6T7KiNQ6u6",
  "key1": "2D9nkmKaNRAGDbcGCyCagfh1QkacWB6QQ2MqdG881DfoSxKeK6H3s5v9kCaroWhm3UT4sLJXe1YhBtCJwxbx31V7",
  "key2": "3b3fNHHWrddNzfgnMrkVF7dDiFqW92nn8LDNv35eJCjT29r3TomycE1gT1x3kLYpGvDyZgSRo7CH42Ykr19AgdKd",
  "key3": "24sHX5dGadXLrAJyVsCEzXr7CoyULp6DwmqzujELTKW2a62AdfifALbxEvDRUA1FxRcRYdSjexXkA3PoCPnBaxiJ",
  "key4": "4qWTrB87DGHMA5A1HJBMS7eDcdM6S1uX77z4BPG9QFahcYekYvEa4AM39ashDHPdN2iyAMHWYwbSW7KVnctknF3d",
  "key5": "4mQJYNqRAPEMQ2z3QXLoCQS9JWMqG9q4KHup8efnfRjwxWmKDz3EZEtzkzP1zQbPYcEcfERRcmDyqHMM6GPKcQ31",
  "key6": "54aRVRUjaSzReWXAx896MkeL1x8XnjvakP6L6NNTfn8yY239nRZRsuiFDmf2LAEfEWujJaaYPEmtxVnaRRzseed3",
  "key7": "3GGi8ekctzvuHQUpoc1b754Zg2yVBDynMZ9mvpiJ1uex3TM5D53zu3J7WvpZRqCSExkWUVTDhMTeFvp3w8MkLsdd",
  "key8": "36kY2ds6ibiZGCnMiCgZwH6y5YUcii1TeEjWoH3FaghJH5fB6ZwJKKjptKyrZq5QT9Edy14uSddZntC6tzcoHBEQ",
  "key9": "4sK1V3nEiHE7LHCedoLDx2Xxof7fsQEYioKdWe4Xr3xa99p6aFc8NSeWrm3hNsJ9LHkVheg6HwZ2N9iyxBYGpn6R",
  "key10": "5ag75jCDveSDz3NsWe8M588WZWpAAhm9sGfgiU38FxaGXK6kthTBeVuyo4Zgqqok6UV1mkmLNwtwNcQA8zRekaTo",
  "key11": "3eChznDVqZStRqKEriNdDmob8T4E8q6vqqcHVfGXNcrszYBAsUhFzraDWAMMVb77iB5VtHyahUY5CV9i46h93f3Q",
  "key12": "S1QLhZA5Y4xNVjbqZJemgpzjQzXUo1Jx4PrC5JGfgDAVDz6QG3nduWajMmS3wCpK7aX6PYcYDyMHmxcjYmCVCvo",
  "key13": "3CsjP6B4XWKXJagcUX4zVoKSDgxZev1Y2CtkqxM2GVNnLTwUi2rPVzeb1s8XU4YzjsyRkMSfSpLhrow5mZrjoEU8",
  "key14": "5ppjcAnoTY656qyJzXNUcom4ncQ11BX9fX5WXqXtxugKf8iAiq7sk1atTzhj6U9uXgwfjQCPTCXsCzsaXrViWdwC",
  "key15": "49VNioAmPRyDHXLgEyxZBvRTorvUPxWFXCg8HXTPqsFMxBHS1CjbXwKF7ap6LQyvymmY1iPkq1cXRnTorbQrmdnZ",
  "key16": "2u7TFpAetbbPqgghjrLgWQ2N2F46kg6aC9yvToN6tzb1E8ADJMhViqyXj5enFnGFmdzzCyYSRCxjfU1U8draLDiF",
  "key17": "4wjmTh1a1FVu8Y2bMMM8jZ7a1DX5jgtE53QS7vhvyVr91YMpwvMh8fmBgRyzRnzzgmvRjx8ZrALv4j5NfCy5g2XV",
  "key18": "VQMWvhfV8i9fuHcvdbjihUQxxj9hGiSyfWWKN8mKwzRijTT4rKFDbqsMYcKGNawAYhv9sddprFM3kLjSKFg9XwN",
  "key19": "2XKerrg9Dcu8ELwdZqCA5mgjszhYWZhh4ZPxLQmG3ms8tbCtKziEccoAMojm1q6reiFfLGpiwLBKsvTe8ejT5P1u",
  "key20": "4yYxgg8BQJUtUWdxUzzguBFf9iL5B5967XgG6eSDtYQqjktQbWSTL7TmUXhQjfB28xh7cCycjxDYzpnGKcvbGqzF",
  "key21": "4nkcmgCXwRep6S5oDhRaaRwwzno5eavTVdC8BonQ7fjWwNVJ795CJYaejG6Ga822raqQqFmSSX4E3JNQA3BGJaJ2",
  "key22": "3u4Q3qfL8g5GTevqTLDNJ99Ek2SqQYHSitwJQKVau13noaRqxDwUKSmN6juM1Yth6mtDpar7a23hahLWXgabFemi",
  "key23": "4WCAPC6u6G9uS36Ymh29t9HdvR99eri44hCoXgbhFzAzur7qmP5GiJfzqYTuBtd21gQhVVHnUNSj9ZC6Zfnmsgb5",
  "key24": "5ecDRQojEeRHbMLDUYS9AGeXNzZ7EZKqoYU7q62o7qmRtaALyRuSngaNm42zHtF3ao7fG55e3Kasc32h6eXdeLkS",
  "key25": "3YTNr64kkhnPnNshf8odYL3SyN2AHLdZJZjTwws9esnpMjJk74jV7tTRm5UfaeSZJwyzVVTd3xpY7XV8c9kAQQiN",
  "key26": "4p3Xjyk4JEhfKuSAD49Zj8J6rvqMnTjdEvbxCiMPXTjdLsN8io7bLcDFaxe5Ldaj4Neqeuou1k8JmUUySPNTpPmV",
  "key27": "3ETURhnffp9NgSj1WovjhXmSygo8Ydt3SQc2BBnyPcuNxxN9MnapNekpbsQQeRyd1Au6y86VdpgjS6ALptF5QPLe",
  "key28": "2VhCsH22tG8tGkdRh3X7tcyD53iBWbgHqsWQyHbayhiYHMratXB2D5AwNgwr2Q7rBpcAwSz6ja6B3JB3eHXNZ8gK",
  "key29": "3nCmD5zsMfMiiTU2Cjfa5PPhJzARXMKEPNv7aGnPVNHrqPR5EMVXeAY27xNpMACau9yTrsvdnFcNRVAYZG8boKDg",
  "key30": "3npzJFVvuYC3RAPHSuAQDj3JcNypwn25minWEvmy3fr7jvS4DGMhW5gebUR6WYgAXGwLsF5Cv6PmouspgK1dbwYu",
  "key31": "42rjZDUBSosFcpFfpo7FYEkNBuFekyXG5M4uW7WLzVjktuxPv1AuxVknDSzd7T3conqX627NbY2B1F8zSJyRe65M",
  "key32": "3beU2k3z9vpwtUWsjwrXE8MT6LEzTvW9N6pPpJXkYPfrBfc5xhrU25B6HJRfhCAwodxXXxwK2S5r5Dnt8h6QjYRj",
  "key33": "2SGGPUa49V1P3SUCFxZ7gxXPUGAehdVqj1iv8kq1BjDattb3uvsrvsmgdb3ohz6VodXZ4Hstu3v4YSUS5oz7Yqdz",
  "key34": "vmFRv9RcVMK67niNkDrSmpxBurzCeBpok8M3nqJe2wMXjVfbFAxfkQ7kDsMBucbkqz1xXxATy8AZ2JB6NcDQFPH",
  "key35": "5vuJfhkAzZFEgT71xB1otTKFMfGwjn5ZoBLDsVRWtdMBYXm1AxBwoBueAnhwkqfQwRas6yth7UGMGGBowSHhcXEh",
  "key36": "2MhdUnea1wgSttvLBwRVzZnj8amEnjMzpbWwK8v9yxeoxjhEVeMtEQxoAwpg5Ezw1dLtRMsdzUC7rNve1tzeWjmY",
  "key37": "6ZURypY4h6YhuUzgduCeKJxd5RC2morQNDUaWM1YUuvicEeqg8ZgY4a4R3Gn2VRp1hHNtTRVXYo7jkTUQbEaq1J",
  "key38": "4EG1kCN4RgYSbj4xcMniRY4F7XEpE8PUm9k79Ydv4h6hdswKfTRjUQiAC7sxighnzYHoRxxXa4wtFQpyVvRcrgUe",
  "key39": "4eMQ3vscFwqTNLFpAU8dnhekPtzE2Ahd76grq19fBNfKoyFUx94YEvdhRZxUvcReLNbGfEmqAbbddCC2NWK6zDob",
  "key40": "4ECwHQvMqDwHQasDkwJKXzrtfKHnYcGuGSxVf3wZRQe5YAsLXfneXokjMq5cpDhYGU42dVaA5aC6kERsJxNvZsRS",
  "key41": "59JUwJYgoos53DLpTS96cVit3g3yG6m714iGfGmWT2Y3N7ZgAtyGT6THi33SvMaM9x2gRfePngqUu3R3eso2xZtv",
  "key42": "2SSTr8Er1RzyVeoDnJLPcorhXVqQZBoVhQSZiETVAkmsPoJr4vostERF8rpdEzsTU9tC4KA9HAxKmzQd2gBZXhxD",
  "key43": "2mzG2Vacxw6abPs4gwUmK1Sceucg1AECNAWLpRjJDDRZV9ywtmP9ewsqws5BmJrbpYHh1a2zvTi9Y6SUZMeWwPno"
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
