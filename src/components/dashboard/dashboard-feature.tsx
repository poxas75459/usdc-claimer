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
    "5NMBYJ3E5nQwqifxqtsQdc2yHAoEV3B3FqCitzBaHJNSqsgCHAeui1pJ1RNBKA22YwB1vaSgiutTnF3s6pzpP5p5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jCKinMEdrzK3AjR47Qqkh4M6DSh4axwBkfYe4Eim9FY2n7z3xx3efRPLjo1HLBAKspqjFe9AKWH2kNuXHvVAPWq",
  "key1": "7nqjg4J4K6D5JNM14pe9TVpTqNjwmNkMe5U2k12gKX9Z9HKYZhovuXTh5K9954ZV73uATGqUkXWyj9irHZMNp1B",
  "key2": "1y7pmRhScAdnMdUTkXefpPj1zsUatE5ex7qJWiQRGjiHq9dUxkJsxZG2q7PiK5zUAmspVoDFxqXeu9MvzFV9CJ6",
  "key3": "JeYgzat1nGfz3wuoFF5wKRkzK8ch4dVv2tk4Wy5RhKeyBxu9UTEbjpArFxFNrjHjtfPhMD5xJckWKsdUU6Cr9bv",
  "key4": "5vQDLQGjSTXb2muwTsHZBTxKJY6gax9xHeuVy68Fbbj7uBozhxrs2Yf8pyKCPdbV51ws81K9y2meWV55jsca2MFW",
  "key5": "4u9d4LBmzua9EheXiJqh9WYKxxXWZPkAnjGsGqRRCKcXq1Xi7B2RnxCqt3EHVPKos212ncgZRR435PZDHryqEvd5",
  "key6": "2tNSG3pj7V95QwD7XmRUZbPbPBkifZ9sPDZrrg1xkjmh5HLevg1sZT9D6AZ29CfWKJMJz7Yt12zbzSGYUCJ2fMek",
  "key7": "4QFP5zabpVjaYdf6yifhtPiWGcSpGMojesKZQJFCLooqueZ6C36Zu5MJS8EAieVEzo4XSnNTm7BnBvetgq6LJotR",
  "key8": "NWw9gzkzbZotXfseDqpdKCAmF2W4vBhcmmKDU8ir38nCUfVZMk7aDVKzZCgCSSoRSTfPBNv2o3gLkGAb1XXV5PX",
  "key9": "5Vq8QxmNtxkp5Jojd4bboLvXjCfitAg3px1vTsMZ98pbrHSQPTa9buTkeeQPutXhhNKPdQsF7QmfePtyLjK2VYZz",
  "key10": "zcLxCYXcPUENZw9r2YG1MR3xbU95eCPKVQsbprEy6rx9ixYw4kLjE8gAh4focwGmG7KsFw6aAryGnskwA7mqmJG",
  "key11": "5kruktkc3WJ2Ni4RaQEdNJxYSX8spF74CzXMMrXqjiAJk252mDNj6CMdpMFcnNMoJ3pgPUuN3taLEfuFvtdrmrFw",
  "key12": "h1KXskRpPbwsxdJ7spSQRUt4NHwVcFPxR7acN8KKYhSos11o9o2jXoL8MPWci2T1BWkUrbWhaqPfxQcsEKyWyDz",
  "key13": "2ovNUdE5pPoZEA3abUUXpQRjoLhAPTCXGwsvedt8jCRJ4gvKeNhb6tJjU7jD5FaoPzsCxVJH2UoFt12atZip7epP",
  "key14": "4V6ua4afbrHFHv1pXCfGSYZjLBGWGcDMV8AD3bYDCYycir3fbEX7jQCgmzJkeggPVJV9aviAiKv762xMdJXSt74V",
  "key15": "3TF537z7ueGuR1TAYdxZobSXACaRXUyYKK3wHzCChkFAACAbqgwHDNqM3TtHRKM1ccwKTfL1atSUV4qBvAgfuz6g",
  "key16": "3AiWZYxKgZTpYrvqYPzmGVzjBup3XCtFdHE6tNkUMqFrdQTaeAj8TET5uHg7PVoa7BPvM2Zmsk1QLz7WPP6qrnhv",
  "key17": "64AoqjCjbY2pqCnLLkNwHSW9hjFzTZedyo1kxtC8BgmdZFGfHABckdsoQG9zSR6ibDTRwLmGtRjHXkYz5RyQm5r9",
  "key18": "4mKtDvcQkTRhtj3hrwTBJ9S2cgm7KnLpeD3H2Hbs5RpQotNKX6zq7iPCyh8MxTaCtCB55cZ6MKuW8paLdhPBZ6RY",
  "key19": "5PJKQAjRCMJAFfheZEGsSaKz2LydUbV4nHmWP1UxnLtRqknnEnernt1x6bzxeTiPszjRjSCrgBdN6tVhgWvxDydp",
  "key20": "5eTr8P1tZkXuxVR5BHrZvTybukeMbh4RBqUGCg3T7dZEc2FYmyev6CszT1k84dZL8MB5nDtpPBw8tHRQVx1UGvyX",
  "key21": "QEi7UihBwQ5ZN7BkDEMwQfkuPaia78BJDBgjL59aL8cx2FfTofuAkm4Q43GV8ZFDHkLv2eJaCcq6o8VKjE3Umrn",
  "key22": "5tMfVwiPZVrQ323dEaincpUgirdUpcSx8FX2hfLhj8o7YW8cs2nmLVdkTkXqopwKdgitQTCLbPvuFJJxAaE8yUDM",
  "key23": "4L2YGVwAutRxakziD2kkLY2HtpYMDxUZtLsU4uULdUY1yazyX9zStQcRVmYzFYKfy4sfEckHiVkHhiZEc96i4WFm",
  "key24": "5zvDWSVAgxHfwt9cMeN8GsDVZv9KivZxuRdrWZG8gVr9oTTQEX26NvdSbiBF4ARL4thRRyLrYj5BTMbaGUCKmzNm",
  "key25": "tbDaukidpbVzDLrmfcDVihBFF2wbijr3ZMiH936fUgszFafMFyTrD8nBefac9s8imyyiKfAQB81v9Z5Ew2BuQnT",
  "key26": "5jKvNunME8yj78V3ArBo8JGeRXjwrWyiSLbqKCYYTSZocskeFQAhhqy7SGiotjjni1eQSM7M4UwbTpeoquz5iQCp",
  "key27": "5Q5benHBcNSCR6pRW8fk2YUo9ZSbn6fk32oqy1AMihRpDqfQBKEi6U5nrgQXCujysH41yB8PCZRniLxmyRY7uRb8",
  "key28": "5KZA2rNpHGohsC5NbuwioVj4VXH6tBrRgVvmt3htTsc872Bfd4C2uDY1rMmY64KzuRfdsHoQLA2fhc7ePHzfgGxy",
  "key29": "cuTNq47oSUWpJqzvH9q9BK2HBR4DiA2LRXmChL1TKUNeEM4ExveeMn59p23eSNcrkpYCEYx27PTiaap413kbvb7",
  "key30": "5KCunFxhjppsnt39JvLdJWTae6hn2i53dVb5Y3Jybupw1XwPKp3nEuhwLo9Btd5DcjWzxnneg8FBAJuGarspoayu"
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
