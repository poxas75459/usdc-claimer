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
    "2up4eQ7iDX8d1NtFMHEeZ4TDGDe2WNJBnexXfDEYYdJyBmJ6CEvqwmNai3q1CgA4eL1zTkM2obRP8wHTmrAxuKeM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RSMihRpezFiopNr984Lob2Wh9vxwUrJptnhNjPJHmVeCgNQmA3ttyvyFSsZW8SgtgQsEPEDw52x9tbTqXXj3q1x",
  "key1": "QqHodn6B633Jq1T9JAehhvefZV4qWemvmw541P7kvKAfCysaHZGxzQdREY2X9N6rSVpHQ3Jpk2G9R7dX48LJdTJ",
  "key2": "4QcrtdJhkBg8vppH4JNp5W9tkUZBuUvkHPJGt56fGayfBB8bYaPYavuFwQ1tQmRKciL4fH1nwEqCwuWE3qfnLm3",
  "key3": "AF3iKHzoi26jc1G21WxueMKJT8TEVL7dkvueXknpenXw1Un4Z185VXhdN7FcLd2p5M1fmrcxjvszJjQ6b7obdCS",
  "key4": "5S5qBJjB6PGxSBinaZzEBrSHgk9d9hpvfxa8WBv85msUKWy6qdA4hYRtNKbYvxvLvTUT8giM6hhLsPgv7HH32HY4",
  "key5": "2N7mdvfDofB7NpFXWD8vM2FLpuAvWz1DNGpJ7ZqmTzcGSWXo2FJZM1tc4NnuxoTbCsSeA2wHH76iMaqBcSyFG3uG",
  "key6": "3N1nZVwGed8Ev4vKkgmX46Hh6Ynni3guFCpDYuKg5qzqVbBJeWBH4x7E33nd44GAHRmjeFW8eXqJzX8iwGH1Um8h",
  "key7": "5b7cUCEymNHc1goYa9uCrAyiWtmyUbCuRMt58tVLgTA19V1mBZk7E6u4KVUCMCUYb7WDB9EhmjmoJvrzTQf3LrzP",
  "key8": "5J5Hhxkqz5u61hqwMy17NyRWwi5VZdRH3wCuwTjsdNxFEfDVwC5WsHJfyewvfRr1KXxm4oxLL6WrhcMbTcdVFQVH",
  "key9": "5qjx9WffQGfDQyZNAugsH9zTDP9u3V25aYQ6QK2LUpcwMmz3vaxAJAG9UU63uvJYKht7Wbb1PfAxwttwGW2UGqu1",
  "key10": "4GBjux1b8eygjvt3VEMb4b5z9Lm8Cp4HEry6CuxzZcqnVu3ZFbgAMGJrghJ4jkv6dnsL2XDFnEmQahcyep43D9jc",
  "key11": "4mdmggpEsHSS4S1phXAF89mERbjDyJKgCxHk2VDztEr3aViDXtm6pMc9Ju4p2iE1CeSMr1rjMhKpuuwYssLbvKKz",
  "key12": "5Z2pUQLahRsyfFMnZqoobwgLMfb2uWQ8CXgmaEEd9qtuYSzTCBNhHScZcH2fjjECi1TceZwWvkRHoZsJovrgyfMs",
  "key13": "2ttN2P4o2KaAqUYP3rXAqBx9R1wzUw36p7VZwJv8CF9USFdYNN3Z1962PovcmBEimMJnndzon4yFYRsXrpsh7c6v",
  "key14": "5aXhD1F7NbnBiz8pHJA8YEUHErqTgmgCTCc4ysSeBqPRNdnGMHPc2A5VKLy88WTg5RzZWbvZEJSzdK9netQ5We87",
  "key15": "4zexh3mujhHro91DjmVGPmJrc8Yq81BWByjhpwrhu86m6ZCWYibfEKQMA5KhYQWbAz7qwigpb3Vr6V9mMBgRXfdF",
  "key16": "582SCfEBUBfhtXy6Av9HREUfu1YyLMo5gdBLj5T2jhqWmJjVCnmPB4dBAKvXeXcTBWLbdKX5XfnXfLSFDsVGBuRr",
  "key17": "3xk8Y2XCsPDGccBUDH9HEQV7kHMN4WJCWwN7uk6L6V1qtWqqd1gKVrPKwBZCj8mBwviz7uzLZzJen91AH4am8mhn",
  "key18": "2eZXW2Ru6DDnwoD9qF2mqtbCoFMfUA2JgtynMuNBK2vXLGNy2QHHGgzFrEodtipH9E2grEyxK7T4cpbMhbQ8ByZe",
  "key19": "4nuMknPr6B5h2XoM3nrAdcEy5vYHKRekehgKwbLjjZzHRL1b1RZtdVnEwN156RJFKZPZ2AWhGTedepnq3rZebP5d",
  "key20": "5WK65DpKLqKsp2jmyBhS6jWQfae2oiypNfhybrKLJGuVh52RSnwSUKJT54mJ9E6hE6NjUzfxK3hm4mn4nETbsXK9",
  "key21": "3baqwUCd5DBUNwJX6xxqhVCdCU5sKuoznCQsFURPjH8zMYdxYBUXztAweMzfGpAcB1CHmCaAH6VDsEeCoawgCX3A",
  "key22": "NHEmRXkT7hvn9AYoFF2PbMJHPFyas2mFU2qCifuWcptjx3if1v6FRroQsE8kb9YMe5f3SMXBYSEpAarCzyJWg5i",
  "key23": "2QarqyGmTSujAPX5KS39xNvgtFVcZoCCozocVwy2kT5SXebXossPxve8FUEFwDEpc7jP1bXdFB7EBjcK5ovrKvup",
  "key24": "egyZCip8vggDyPt6H1t8m3UMyhAxG8dAATf7JmuMdRJRyWxY9USzjoMs3bUBZQQhSyf3v4vhLVtft65AWSRfCa2",
  "key25": "49XNhbUyg7BCnx5v33x4hiTzPd7fAB1bsNcxJJ4PhdAnLv9hxAeYddifUCQ839ViL4SwKBXrR4oLWTY73CLTw5vF",
  "key26": "5vnzKHfKdwiWHs63yG7fVpTQMaKgPXZoK8mjz55ZzefnvDhBwc8JG9s6WLyRmoANfKhz1q6JmTR9nbP2DJko5WpP",
  "key27": "4AzUyYvvN8kNdyL8jAHvLgXBNEttxctHdsEFKaFrdacw836MBHbtffCyfHMJyo6wH9K4cZR985Wbq5f1AKJLLbGK",
  "key28": "xcNLa9wtJ5wUXojF9mvzotK8naPa57iy9UAR3HQ9hFPkWAZComHTdA4gHqq3zEZfG7osd186MmVmARCd2yc8xXC",
  "key29": "631hZMMgs5EwY7pwquXi5kC3anCTzv7yTB8M4TveJsmLpqvXtykTpJk6HKXQiHEacFFcJbovMnagNyHDwGmqsKmr",
  "key30": "64akAy48P4eR4RM3qsmY5deEvUD3kVdN6F5HPetenq2XWURcXgg5PUZSMkbhotZNwSDhAFMqwo9zbL9G1GaJHoKY"
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
