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
    "2hGmqtcNKcRrv6iX9piJYKNCiEkrRgFqVxqh1Mvv2SKwWFbSJAS6QeLzjEGdkoXeoy8yjZv6fL88EBF8EE6CjUw5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "482zhKhHkXhLfGJGxr2nJRgKgmxgnmBUgBvxtGrYC4DpfrKx7UNeBgF5FdzcZ2UGgmpe8EpHknrmmN1Fm4jZMBit",
  "key1": "5RnxFH3bvNfRUJrie1ZP3ZEg7jgHP9SgGu2ZduX5Uo9kGck1DHx5jApX774P97Ba7iQWWExGsaCrDanAFMt7wDsk",
  "key2": "sK1PV3a1jnLMhMqRb5Y5wDwk95nLLWEgUhqM7zH49kTwvYWsA9uNNSXopkbfvUpXVX1tyRkGSM8Zm9cT91d2ZXG",
  "key3": "5h7WSABR3K5EF2m22MnwtfhqgFXYzE7zVeJbfYSDB68tCNpEfR25QXy52fZstPCwyht1t1An84bfmMVoUtpn62Pd",
  "key4": "WtiUgU6Ag8dDx74fxZ1gb2nNqgUPuHij9BkP4fXAjRaoKWwEhcRcYLvHA4xSHpATfL4itKdsQwfPNMiFX9ptnkW",
  "key5": "3iXveaPF5Cg4WR1fBCsc1xFJPdAjrTdazMER87JKn7mHWdKz2YRjFnRoLzxdJqxwtA5xsGgfCtJhP5m5yAwfSH6R",
  "key6": "TZQT1y7sbRvCsWe5FKCg5yCEwAeKLRXv91gzU2xduuy35Rq8P1Y3wQmPcfipJaq1wwismNy1k3dgfrCHfyMD5ZL",
  "key7": "4zXdKyA8bbVsnU6qgrVasEbcs7tS6eFC6BVNkLXVmw4mTo1fnNfYF9kX1TziDcPmdaur8xwMjvfZF3bpwtxWPnwS",
  "key8": "3JM4SUcHgzJbBx9jVE4oWGVy7LQXQsn2GUnKJpGmKYEkuiW6QphafogwuEAZhPAZdV7Ayr1WgVhkcLuQJ689epPR",
  "key9": "3417wftp9wUEeFw6kNCHSeMUWrYpNJJNKqhjrtS1Lcq7Yeqmgh1eGXitZHPUh9fmNHqCxNNQZNq8xU4L4ELi91kv",
  "key10": "3oeDGW7XNNfuLt5anoXUf1MrtedXEnRVUVeprJvs8Bo1dUmA74beC6wtn75v88PnrtkajkpDJxpPiS8yf2Sjb4T7",
  "key11": "3TFxbWtpyoRSzdfXnzgkpCgXStKAYbAgPWx2je6jzqL8nCfxm7eYGt2DccbMhjsSmQKsU3Lg9eiFmxcCUQZY8cQT",
  "key12": "32gwv6NwveWUgmSbzZ4F6HqQZX1obnKGZvzoRMZvEyLiK7oytVEWKsPAJKf28aGrjPbdutnwLDrwdwbfTvWBs7bD",
  "key13": "2NYo7o7uNwr9pB7QmtTokNMAbuggZcdE3kdQj29pGMipN6vSzCy7tKyJ1ZazDuLqA8yjetwjbouLqvWhx7teFR15",
  "key14": "28vsJMp6tEx7sojNVsKkdwZhFQ6Y4Jzp7VSWgo6KR5k8chyTr3WcgxK3uBP8USSk9Mrgu5YMYdPpZg1BwXYWM18v",
  "key15": "5xqkGhDBfBrwQURSUHca1WkLRX8kC1V8eBEokm2YfhYbqPdQagXcQYWDQm7znwUnJKYVwgbEbTPP1GqJCTqTgQdG",
  "key16": "5KuctTizdK7JY2uKQs8TKeVVjzBcEp9kHz6UPVya54kqF6mAAVwZHhV9C1ZTSSoe2HzGQ3mbcoR4mxRY6NbPpmKN",
  "key17": "2anbRQpSvvSAP1HSoMNqxXpawtNA4JmQjhHHUTVX8aED4ZwNJadJR17YiUMwb7rtYCrwKZfSvMvuJ2FiU1WntnqG",
  "key18": "46Hx3XzMyLP27oHpT9AjkPNkt2MTQtjSCKP8d8s93LBqMMT2FrkUpJzdFrP9p6zQeXCkK4k654uidb1XDay2yLrW",
  "key19": "5MfgNQG3jCoBihAVzSUnHBRwq6gNjV3L3kEWEpdsPQpeo1rQvr4EhhdHaPSEi2Ze6QKV8MThcRHzti8coqbCWskx",
  "key20": "5WY1SHq2pZGFPyjPLeh85MXMK1Wsa4T58QFLoGUeiP9ZgWdh8miwfDxrVUnrcUUu8w8k7Qeb1BwAcWTDzyJnDZ8g",
  "key21": "4rARsHqqptK4mR9SKbKFkHbrchxKrCR7wwZ1F2K94wdkLVwEBe8XPBtiB1kPYTrDEpPKbdThCLY9xwUhS583wa1K",
  "key22": "w3cP4EY9LAoYEcxc5kPpyde4wB2Y81QYUEuHdJsAchYZUdF9wEsATziVoo6JTH7cJKSakrdEiHNfzYXvaWoRjiu",
  "key23": "2FcNCkp1kM8hp6mTghKLyiVzxztrTTrgdmpQ4YKPFiFCb7Q5ywsGfNUf8gpGf5woeRYTjVLKL3SwcCQPFpwJR7Sf",
  "key24": "5EHkT6CCpBzUSWXeJWeoRecVRLkGqWKJ5jNAJuXWQ1QSt295kgzVPrEmMsFwg6EEZGY4g5fHZxWBhD5Ct1uZLnVW",
  "key25": "eNAjpMKWrDy8dKD9a6saVFr4dpeC359s2odeKeXZYUWyVBif7REvXSGNJtnLsNZ43uyxhPwCCJJ1w5eEVRodkbV",
  "key26": "KJwHLTJLcijTWhHYvX9dXHu9VWDYrXmxQ5FoqfjC2NywYWVX4L2kHp71VPipx8LL1NBrVwReD26jeKtYYK5R317",
  "key27": "46XRm5VVLpWKLQsmSMLVRt42sfoQSnjdoXKavauRnxcnF4R4QDXGxy7JAgJspt2PuGHm9H3yUbcUr3mzwDyJPT3z",
  "key28": "NoMPGL2D2W9TSzgBdu4R99Eyf1TLWjR5ECGdtwEcBFxvpwgNY4FzRg6H64ruFqw2g2Tsm9PXsu57Y3n3m6cGRgc"
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
