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
    "TFiq8eFhGAs8P3VghW89ruB5LoNCgLZs7rcycF1uZem7UcobmX3NjB1Ggm9AJspPPhzY5nZC9xdaRzfue6c6taf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y2CVp5Dew6xiiwRj1TtsnAHivJhKxKJCiq2Wr3pfzR3JaLgJLJtQTeUF23fc4G5HP7X4hA9s4Uk5A5w4SaWgTtE",
  "key1": "VPRNLafUVVSf3jJzUts6Mw5xSxDr9EVpv7FYcQqCBcZ6vfTTD1pw8RPkuCwE2xgc8Bsewrcp3L5qLcqwLeKsynt",
  "key2": "54gcX8HWR6BBjP54S3avNw1tKALyc3VKxvPffJUMU4HLV4wAzHFAnsL8MGWcyhXECfgtRsRajfigkGEgtuUoVxHB",
  "key3": "4v4sTwZwZtrAN3Q1enxvds3XdGfAPb5or1Dkj4wka77wFaT3CcXTXKCjiaC3Yy284mLraBJdJj1PBGCZkQb3vqqw",
  "key4": "5kX4wXjdP72QhZ2Gp8912suiEyDDyZRFHJnXN4p4cMz6Xc5Jf3kNRpkJ7D5128mfB4gt4DmWi87BomSYVpEkdRqx",
  "key5": "4XC6YqT5be7S7jh9DnCVfVGKnceXi7am3Jcp9KqfRmkaLvsVjyg6hYJzZkzJJkT7cAZ1LH9N4qpfTCMfaVcoPooD",
  "key6": "4SSTx6suHF29sKzxj9BJzanYh1dty1hkdirQEiuKVEW1Be4dvBwAwGskydsCc7Fv1uPL4duqXGuSUwUf2wQe9Sgs",
  "key7": "BDpNtHXydrjh6qhxeVo5QHVqeLNtHtpAhd78Khiwx7EMxPvmLebzSWNAz5rMvvrzJZMeYyoFAw22KfxmEbfpD5C",
  "key8": "3dhYczirsMF57bipSi8emQaKykVXpXrnQNtAV6VqyhHeByifZzzHBXcxnspYdAk9YbQZnkmruHrfi8Ya531xr755",
  "key9": "oyy2VX6FnquJj2BJVzDKdVoixETegvyoSo2TT8xxsFnuPfSDwiBCB3siJAN3Wn2PY4wj7yL94cacX6NWUjmFgws",
  "key10": "kLG95nPZBoBZL5AwkhsDqQrjvqZvQrpAwRmcK6fcEfo6D116KQHLcZLRdgom55tvm56wKJUct8aPAvPqecahDsT",
  "key11": "33bGHizTW9utumsgpmJGBfpLo7m2yX2bDNGC4xG2bbfg88K8C2P5Y9CtpPcro94PaiNHkmmid6GdUAiAkHpSZCai",
  "key12": "UHG33iXCGYeHYCUCvLiorNFJZ3aecqVb5UkdXvpmd6wTJphfDnWBymvBRUGaZwXNj7o3ht4AGwb5q3CDZCQRbzi",
  "key13": "gtX26eUtqLvc4v2A7KtRrcLddfe95vproHZuDaJTmDjsLEQtVJB2Cd5eMBbszFA5H4w5B4MNZYYVj6iMRowsnD2",
  "key14": "fiV21tTeRxZJzLV4KYbeArJkjkuzm2QNGR9Fr27yEjFvtLgiLjp9oEC2vP4GsnSunGEJDHDxTDkHKycBBkT9uKr",
  "key15": "3Kt9iURGnhvp57ENTMv9z3aPfb9kpYnL17rMfccu3tc78KhvXebCKJsQ4nX3cEq2zHxG8ZknNeUuK7YPJpqd1Vow",
  "key16": "feo4zVEXwtsAaHr571kXLWDdmN9p6V6X3KML5Yn13fXvMhy1DQ756g14F2NsQrn3FgzhyX9Qff6EN6ZQ9hTjLV1",
  "key17": "27pzyqyKZTbkRF8LuB9LuiB7SMbhPMjZc6EyEWsmXxVKv71crF5WUP5Xv8NakFXLbWHRZK2nwH6VoXQTzFnAtyKK",
  "key18": "3BUwDhxrHi671cdRHofxGXg2tdwgcnpnQbDjEBc7m4chjujd2z8tpdrTaA1zeTD8zSqV5ExVWpyXPSNTifwA4sYt",
  "key19": "23UdmFAmQEXe4effuaYW1GdJ6S2Dy5BX8z3jjpQBkdiKBDFdq28Td6BjhxpNWt4wkR1cpkKAVrG6UQirXFpQKFYP",
  "key20": "2JyzJGMsCXHHqZ22279NqqMsxDbg8MrTh96xhDYHLag94Xp5C6eN4mP7wVG3dKLU2uV8aUxJeExmvfbMoG8dzCqR",
  "key21": "2AULcN7Kag9P8kujc5k8mRAtbX4bo4RAgn5vRwyXTqYgmLdHmMsWR13tJN5SHHVCVxHFQyyskRAzooTC8HnLfJjv",
  "key22": "DXW6siUVvG6iA2hwwjr1BNZDExfefVhoknrs72mBHViEfBnK65mdn9LXcXhfC2JYA32SKZ1LbKmFXhKBwiYrBuX",
  "key23": "5SjMLzwJUfEcrD4mzvQ72w39xaQztQGcV3pEE4yZGzyarVowazBc8Pj9n6TnUnCCdHiAMRgwAHatWUyjy7ZrqmHp",
  "key24": "3E9MguF4x7F1K2DihZ3PhnNG6Dzg2GzE4nvqLizhe2XuydWUGfKohM1CJ6oQYnSHsxSsLyGJT77uva6jj9ovUWYW",
  "key25": "LzKiXZPVQHQQe7mN1XyPQYEZ3Hg6jpKk3jzY7zQZSPPkZy7eBP7ZBbEddZ9UQ26NqA4uqvbfp7aNJsvbh5R7Fkz",
  "key26": "4eDKas2cG2WP8uwGtSLAkKUy3Y3zE3Z3hxr6irRFcVmjWX1CPA9xcwCxpsNjTBTe2ZHeY1qyLcH5GCAsXxbfJbSf",
  "key27": "65WMb8qu8T2S7A4x7EpvJoVx2eesCYUyampQJmxMbompk2pzir71LuEhioHyFFZe8sQRXr4dCLsX77sAY4EfFfDo",
  "key28": "3eeV27PEYZAGk1npo31oF8L1pJqJyt3X55XHVky7RnSPfNMBFvuuBAi9x5nX12Mxi7npot4zsZRyvCYUtv5VQoGk",
  "key29": "5mK9TN9GPogHkxKVgNqwWEdCJ1SB2HPr5MwKtFsnbjiZ9FRyM7Dnfz4xsZyqevQGqg6pWcMqWt4ejNbkkqYwNdmp",
  "key30": "uQtG6JfgYF9B29vvmuq8qQsBCRarZ5FKHzrNX2BRuQ36xn6p1q2GEQYjJTW4xUEbgTFkDY3M3zKvaMP8CjBwrXE",
  "key31": "2Q7Q3PghSywTEFJAeyY88V5Sqt6yDwLC7m2AJAqfdQ1mFzgkBfaquHjtdfyLcQgDkQzV21oQy16T7sq8ViDXp4nB",
  "key32": "2QjRA13NnVQSroF3DcqSFEKyHqeMqRgQ8QhyLdinfZRyzkmnki1TVDaZ9SfVNrZ6oyR4gi9tAGkuTD3hfq1THTE8",
  "key33": "4mEL7APuAyNo6RiL1BGfuTazAV7S7X2ByNUbRdb7YiHnUcDryuS8Jzevxo6gERo8w3pkD1bYoEnCmxVMdBBG2C4C",
  "key34": "127tHDVwtsLqHv43KbZGv6HLfMZR86J4YF4cEhHB7bxysMQTXKDjM3NHquY3Y245wg65D4XGDAFXi9vaQKbjwCrX",
  "key35": "5bHJ2YS9AiP2YtnP4LLNJbEj5qQs2s1H3JVVbSjr2msZPYuRCVC4PQoRuyJgSs9MGTfNg3hLVFa895yN4ZjmTEFF",
  "key36": "5KzJuF2rZdP6osuWKYg7LCKBKkyX5H9fCXyL9AK8kF7f1vMKwGr2jYnmXQYjsLqxJ5cD255QAxqH4JrfZyFfenDr",
  "key37": "2aE7VEKMFyHpZLVnCrLi3qK4rTLDZkw3NDwcJLnoWajEypJ4uGYAWKqg5HrRFT8NVfTX13MQXbZDeh3AhTt2bja2",
  "key38": "3xK7cJvgXDN5X4ToULBgRypP4aB5PvYQqTe4G2wUW5Xfk3AJUos7iXru9kmV52s7p29RKKovyaV4mdwBeJbtgw8Z"
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
