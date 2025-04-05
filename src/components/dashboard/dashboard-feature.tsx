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
    "4LKpjeGfbw237MZ6uYwm4UGYMjRoeEuqLnmF8nVhxf2RjpevvCgpHQfKK8gk8XGgciuizfbud8jHsQmayTeEKoiG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NKEzVmQt5SeHi9AXvqHusLvXteTXtU5AjoH4ciByGnpahuaiXXFQkQRxwkyXgwQpgtRukjcDqJKkqnFCPeuadwU",
  "key1": "5H8Gb5k2kyS1snieSKeTdBDm37wjNJRFcQpUy2zHx464NasciC65neFusjMYTnbvvGUkKQBsLnifW8vVxpKhLsT3",
  "key2": "4XRWdiSTq4L7mfWtTaC1vrPhY6wQ4QoBWmtnxfmHp7wKJmiyzik3bGQLpKBidWZqEKyQcYqpEyKvqASshXLNuxEB",
  "key3": "4aEzn1U5yLLhRzdaudcJhpVJ5KoA5Vp1c5MN5sbR6uTV7Gf55RKNCrww1aHLyuH6eH7Zm1e6ZKkzw1qHQ6d2Mgte",
  "key4": "3BT1q79ScvXkRm8G892HE7f8vU4bBUxvVWXtUpkRuhnGVuVcrF5eY1ka2AAKVu29vUw7aECzJ38UvR2nNjzCDaiT",
  "key5": "GinmtadEyNxPb4Xrd9esfFHhkaqQkHeaAQZSjo8DPZJpDDSQNdjW95A3V9dEwvzsfMek9KsmDVHBZCbZYe2f7JV",
  "key6": "4tSoTkAHpiSn68HzCg2yU7YW6xr8w3YrhLhk2Vemor1vDwziPnE1fBBZUwkhyisVfKGyDcw3FKgoSjUSnPR53wM5",
  "key7": "uoD1nkG7syk6BJDWBDTDZ2VQZF14FWvUpgfmA8UavojgmLsNVX51Vs52dc8dDdKinsnJVdKUAgsrC2qxfPB3fMF",
  "key8": "3RYjnDHg2ZAy8niXL1DU9oehcStCuQ2Gm24sKkKajZ3sDHrAz31cDknnJDcqGFkYx8aNsAXgB8ANyGAHanqEuB2B",
  "key9": "5e9oTi2dnW8zMUhe4AsfBEVyMYFdENTvyKUBUtypoaxb91b6fJLGjAgw4idxUcqjdtgiYqdHFC5EWvMz22UVJNkS",
  "key10": "zPK42V8GxR8mKuFk5s3ThabnG8UMTW5R141RmYVmqxFmTEzQ2k8SLRe3C8GDBaebUdhXRaAA3RszJJ6QyLAj2oz",
  "key11": "3riKkEGLqDfFxL2FkAMK7p9xpESvKSYHsPbVDvi7xxof1R5b1B83e1Mdbd6x61QjZunCTHTpjQXVR9rUAt3DPPSz",
  "key12": "TNJgRhnvf5w1UuBy9xLaDDXm2ACh2Wf7tBxgzRGW9HnTRDqqspEiKVLfPKdyyi918VhHjYSf8dGC8LGvcMBLXoW",
  "key13": "bp5igFqXQmqu3tdfJeZ1sQY4CtRLkdyU78DivLhW42uZ5cnXhzDep3LgdqWZCrEvFtK2NJrqo6MXVr5vXhfViGD",
  "key14": "5jZoGXxbHHr4ErpcqGKbEYafeX4RW8WfWcXwWMJRWShDsCtnAbwmULg6z2n4oxBmSrf6jbKi5g4VC1ERu6U5ybtW",
  "key15": "4vULBpVX6CgH7yFMFwduwwXRTuPdRjoLzrtmKHCzZTihRAgUkaHmLYFAeMw4CJq3RMjraJNVFaMAMY6nAuE1xjCH",
  "key16": "49uMnVxwQ392iTHpJYed3cuis2N59MkGgaAe1DUShhx6okDtDaDKZPmDtLerBTcLaRhkmw82LyECC5zjF4kTate1",
  "key17": "4J4FMkkpZRThLsrZY4dVv6GcS422BZ7iEkNoJk9SYUVNYB8GAZsoy2L7tp3UdiiMtZ21VGSrtf7HAcUD7y7CtFmp",
  "key18": "3rvGSKVf2s5Ljs9cpdCLTqfAitKi8tjAPkTXRpZvnMvn8nLoonHATQSEKafkJvZj8ZhcWfCzpo4fUJ8zSDZTYBWN",
  "key19": "4bmR84ZoZwufo6Twkzriest3tQkZhLjWFSit2kFTz2h6Y14TKVEJjxwyPvkUdT2eC8dbRmpf3byEazurbxfuyvJ7",
  "key20": "2NkRCVjms6ddWWaTxRmCyGw2ugUrTutUL39j9TGyDs1NRoxdHpHV6m4fb7d1tj3FHygY63Y42xA9SAWa7WLbeZK7",
  "key21": "4LGJDb7XT6hYrTj5rDmmx5G7ehYeXzd14BsJZee9GyVjSYJ9FPhZ4UWN1gdAe8notBHYjiAY8JSzm2xhZcUWgUus",
  "key22": "3WBvejknkUuL1Nzs35gN7L8dLoxSDSSZDJfmFQYXRgaadiUMZMJPEnGd9PAryhA9vfH4mBxEQzEBLeR3mF3yq9Yh",
  "key23": "5BSpM3ZdRDjFLDc8cScu12GtVEfsHwt4WTS8tmAc6PsWayCC16e3XArT6qi5raHAVaKH6XMYVs37yL9LbKV7KnNE",
  "key24": "5QYEaRNYEMRfzFU4MVX6yz6xKuVZcBetyWgQgTk6kDB8Js7hGWotuiie3LiwNwPwqrkNtEYtj22AEuaQiXQFFa1M"
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
