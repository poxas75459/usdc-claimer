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
    "isC4CaMH1WeuvtNi8KjXteKEdapMW9XG7TG7Up5dKEdhVcneVkFky3KcAhyRPfWG4oWNdGmkbD47Bcs8dts5PH3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ASmxUpovFvGYdE5dvhY8437cwbYCx34ESb8Ds6uDgB4ecsher3VkhtbwHtsXpoJgQCJvVeWRaxAP9ZJ9ZVqw5RJ",
  "key1": "3qohQb8RJtog9UjrQKQp2EEjAoAvsFMD647AE4ve2MeiZjstfzmzi6AeHfV7TPTdoUu96PDZSFPD3KbShWmH4B83",
  "key2": "4qdqJaPAYbSaHF95nGnAdLAp5VHYyPxhSBqQABuxWhhvofNowccVwgXu2HxxRGUXTmcd8Nkvxgsg4suYCLZmwYQi",
  "key3": "5ZNtGFNEzjUNZuUJLQtLG5w276rAKKFN81sGuKtQzfCmQwjZpNyPSMKcBn6RrcRWF28vHCdopQxZgUXX6YnWeqFu",
  "key4": "4KLeeQyZ3qopVCVwHSu4vpMCbps5twTwGixijvkHniBRX2gUPuTFExKV4PMcstXEPMt1FFUQTbVcu3YPdF52vT1",
  "key5": "3TKfpS9bftdFys85MsVeXRnC1q98gUABV3YBD2Tasxd3Are3LQULuEUyUbZ8GvX62Po8zvvDvgsgGgueVJG1grGA",
  "key6": "Hdnbv88BWgJ8jPqMu1aXfMQuPsQTie2iMdS3sqUK4eeLf3wag5m27NHxx72ScYHa3oJgRSGURf3UWKEuYu9D4N3",
  "key7": "5cv5exqhn5o2N2zzmMGVTb2mhW6RqKk6fg9AhRmKzcXMSCb1jzXAqXtGxwj5oEwdDEcdb5f2F8TGAKut2N2xVqB",
  "key8": "2XypsZWHYLR24e3tgnSd7jj7DqeZaBNYeUdPo8z2FhiG5CPDr36Zd6TBRM7NEoSn6XBtc4bKBUhHNt8Ghj8D1FeP",
  "key9": "46Gd5UQm9LZYRMr64GofhGUwGcZK3M6xEyoVLDgwF6G16TCEogAHwefq38dUSWjCmRE9c2qNrN29JWpKiiveWY1p",
  "key10": "5cHySVhFAbP1hSXTck6h9Ea2vjG9yzUSZ2F6tZtJr3JBUojk3keuXqyGsJaHXkampTtgjzwaZAF23sSq47JGEdR1",
  "key11": "2VPDtcbvZ4HiYgTsGZnCXryttx9gQ9X1iaSgr8KjXACEqCK7WvLhmQSC8N4E5eWGSkdwWGUXAggzye7vX4khayjA",
  "key12": "3KnfXRnFwGz4GiW9pgLe5K2yAU4hWG45X7xXRfwpFye4kBoVzzvyXZMMnvsVpY27K12WzFN8nwvUVYkgUc4FVhA2",
  "key13": "4Qhm9NAoxYG4ZUKRABjVY18UVJEP4iwrTQLzocDoSgAknNqcqUf8hntxDpAvm2xxVnaN1caeTmkiJuLicaqBYChK",
  "key14": "2hH8dpeZcjjLHmoTGyLeQ47eKsZeqkev6QNEjNw652k4c9cQ1xUeSZ2j4pVSrPC9UJn7PaoqfsQLUv43saZSGqSs",
  "key15": "3RcTBxLmZ3hK7mXi4WZoKyCiUUYfttQCARLxKvCGjDASj5otG4J8nYP3cwKWgucvGUFs8qg3AWuqf8TJvJPNvjoj",
  "key16": "5wDvqk92woczkNjAKxb2BNfPGGjM5t5rf9R6zXYwEkHtx3v5Huuy48Lzsak7zR9Yx5W3pV6HED6MDgpgF2vzvcj3",
  "key17": "4TCkL1m8efz8o8Ydpvzsu7sxjcz3ahQK71AtSLgSVwsE23xkGTpuwV9EJ7o56M9nnqPHzKVXy259hsSafs3NJkig",
  "key18": "nsUFSfFZb2htDsy6vWWPu8PZGygZhm2AYVvwBFhW4HSXeobB9fJ9nXX4AQVLEq22QQMED7UU8VFaQmb2anfNZcy",
  "key19": "3BaWMZvsvJCqKhnFxdmusSDvVFF5iGpN4VvxaMfy98PaLJGEPV7F7H4873Hiizs8jKm6JWzGignM2DNcdyxe9YBa",
  "key20": "36Y9D7ELbCAjg8dmsi5RQsed2FNAS1dp7PB4Mc7Z9y4ZEx9ZLWeEZWpn23ffru6pwQZPhKyr2pLzhGptqHPixeBB",
  "key21": "2LeVP6bDon9PweaBssyjijPsstpmCnUVthHSWHAhtPeJz62tp8CPBzGpdjfM2fd4Gpim4oUS2oGwBfGWVv9HWVMc",
  "key22": "5mH9H6xftEr1zBcRfXCensQSZPHAStPCfi8qpp8mKS1Dk5JJzv8iFWMjjxz6uaKyLyPvZq625r3evCpQTot7PUiV",
  "key23": "5vRJdR5gTV9oBhd3GizA6jtqSAzxe9uwSaJyY4V1cyTNWXgDhtvzoVkcVd7f386scXrQxamZHn8r5ie2iaezXdSm",
  "key24": "gAZPtW2yHvcwkw31ofP7vurNygf4gq75qMBRXz4HDPQExgKUj1DdMWgaHN4uKvQPJfdtfuTxkhqs8DMCiefaaHu",
  "key25": "2BGLe4i2iJtwy3K9nFFWcU6uJ1hvbXt37huNcdLaNSKwbxfgJxsSp5Z6GYYiLz2AKq9f6FqNac4VGpSUoXLqWVnM",
  "key26": "RKmtzMEdjsybN5jz5yhjrByeYWAPKHZY4wj6aFuCoiWs2XS2wJDAzzpZGR5PPqH1GgdRJT3CcKHEeBwJhTetEZj",
  "key27": "3PzGWZGshEojJ6D3TfbwHRswJC8jDM4Bh6KqdasQ22udRSMyvNPAxgXFPCp75TH6phUt5aMXymbJKPkxSVGaWVXy",
  "key28": "3q4P6SHmLJstJjzR81Sf449ABPaeAQFvZMR5dG9FmHNftmvRaAdBiVqv5LisC9bk54uhGyZHpSySMNRYfuzv5DCb",
  "key29": "5TS78RcAchgYJMgWFa9vF3pNhyLNTLTUKgCFguNXvV9Xu3wvbGXxHwHYBLAWVC6yQ6TFjxiq7mTJKB9kkfCTb5XX"
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
