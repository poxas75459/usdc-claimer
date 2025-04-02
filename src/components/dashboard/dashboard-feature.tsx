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
    "CRQLUjyiovL1DzQXpdti9MBRmBrQQA6SdbzEb2HpETV6NNgRjHGanLcFWy7cFH5zd3mirSxM69HCrTjG9ZL64CZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FgsejWoaWdmRoXWJVp1AnUhxcfxSSeXumDBb7ooDkUefUCjs2gwxnnaFPZk5GUAvQJqQK2zUSdtmAzaaAK3b78q",
  "key1": "3cvXHCYSdF9b7inCy8agttojWKMzLGJSaUGTv8u6w13GZLNoR9LH8nsTbDY4869M5572gmbYSNYPittM4YQQQ8nL",
  "key2": "JXptcyvxzSc9HNTs7rXMycY2vL6BrgqtmTrfXztby6c67uvn8fEmPKetqjaeNXsqSLJ3vzDZaXKL5NBx2ZRxPNP",
  "key3": "3TYBQEBdab5VTYokb7xJGXVHiKdKKYKHv7jp8kbEaMwuGvFi1FDGUavbU4bsGmoaWvTW3ww2NHovQzQgcaZAyw3b",
  "key4": "3pEVXDMbDj38hMuZJ8GiKVvs59Ux1cdhsGvSjwUEqAa7f3BGqkTcoJw1UPY4S6WzVonaEqVGik4dK4QAqgGYXWhB",
  "key5": "61rBGhLh2Ugr8L4AzLRYEWYNckBaRktTwipfnrPCjhXhx2aSatM5MjUD3EBtwmbSUah836qenPLvTJ1JaBXAAG4s",
  "key6": "LBmpVoJj3h8TSGRTt9iYpK4c5vcbzjsRWhmR4GFnn169p15SrDGZrtpYBUYP3p3CMVL8Yexom9WSxAKzNhsCYZe",
  "key7": "3hFdPwLKXGC8DSkT9ueWXmLJEKtvzAex7wcqNuW43z5HebAvf8q66jxi9AegnHa98rYm6v2Uj67ziYbv25t7efMQ",
  "key8": "3qwzPWUjsbCM22ZccPgGcZPNowTRS1F72BF2amAmTrim7vbKkq819EenJXm8PjTAgQrZjsB49DJwyTpFRzWjB24x",
  "key9": "25Lc2YUpWx8ENMEek7E4xRzGxAzGuS9ymowamT72hNaQG5jnATfzeNab5WFuzv9gFbpycQQN92QFQuYyAQoneQAD",
  "key10": "5uzCQJ1F3aBys2YQUGJy6pwGsrK8267afooRre5CA5tPSpdQPAryaMdhdRJR3MJsagr2NVcDPQZ7yW5YrkmNKxPw",
  "key11": "463LbhoCwUExfVRqBWFnMMPEnnxLJ6V8uyntoaY7fHxvFP5N5BF71q8BwqYso8LqevqRzGjRKZCvfqKyLGhzii62",
  "key12": "48HZTim8ULmXbCGCGPqDZjo5GvjtDey35Kv5KpETmv6Gnad2DjmsNvYJMAMJrgpp3iPrAAsmkSv3WZmYZfvFeQdg",
  "key13": "62asMFzDrvvpfXSv68hHKAMW2SP7o9rHJy3m9AFerQnKPZhaiRmQrZv7nrBKPz4BiwwyCffK4P7NdFZF9xLBeugk",
  "key14": "RcAN1LVyFkbXWXJ3dyFDL1KQZP1RFytXvnb1P5QUFYYBT9q1LFvHsNN8EDjWFd8915WxJgYdkNxfSqhMCxhZGty",
  "key15": "2QWVoqCxx51Z1N7eyVftbuwqM5MaDCV2nfM5E1t4bLBueySpvgg1thjQt3e6AoA8JnfhnGc2rP8fjQ1TTJSKsVv9",
  "key16": "3Ge3QVWtM3yp3YCCxurjFckhqaR54jR2DXwXw8XLbFn1UmGEAquavS5sXEuH3S69M2QgzBWTxsr8XuLFQGvcpsp",
  "key17": "5Pbi6SHgDe4vZtCNU5srCRuWgSvGeDtGch3a6yRiySCWHJxTFQdk9uiRV6BU2smVbwg5G8zJHo9C73PJJFjr5L4h",
  "key18": "tNqhNEAPFHxFoMK9tsviU15muh4wwMY6zTdhU8niezVoumVUu9Ea2ZSWqM7MiX3A5U5QU8yd695hDiJhZ5efZF9",
  "key19": "4vzWciGJSSio9YFyM4iZRedmsKvBwArBmWAoJh7QiBP6o9gg6mTzprDkko5w5XCdXosnS7qjiUcqc7TK33X5r5tG",
  "key20": "4Q73XUaD3Udsk29jFcRZsrzAjNQBL4UBXo5T5SXrxHiUMUFDYMit6GaZKMonhgB1mjyCzqY9SWwmWTxzvpUYHTCy",
  "key21": "3qh46FqP6sJo1iyfqNuAciiiZL72eiGPUpGw9692RnzR1DrAYSDgGawhYQTJcVVypbd6276VQ3m9CUq4AGuBrChP",
  "key22": "4XuXWtXT65jaaBzQXhkxiVzD6u4qxcYP7yVDWbwhPnNmuhygxP9RGX1xCHFuzW7qfcYPBXE5hA7HDDXUgdfz7LgU",
  "key23": "G8RdePBQHN1Y8KiMn2R1PCSjKZzKLW8VZUAGuozN5qMqee9y2fPGFnUietzoL8E7VqyiDjae7GjLg6ChZaXPExa",
  "key24": "DsnYfmwYKZ5xo5AjA11mfdfm1UqCtMfjo5KgQGCJUkkJMBir3n8sDxG9Z8RpD3gUKxorhb5XYn3E6fKKjqvs7bT",
  "key25": "tZrd15nky3GrEo6oFKKf1bBeR6fHfWrM2XbRH6AMXCcrqFDGGPY6yQLRW67fmiUDNRaYHCNGEDfQpNzYqBaYaNw",
  "key26": "4Lf8yfVn9g9vMD9ADUMXKuep2PP4FBwZBPVZe71wE4ZUcfk1c4q7QeqhQJ2L1ewLoHvjMZ9FzgPeGGSo4nuVJTYa",
  "key27": "5aXVv14tMyq44VzMVQe7Tr4pE5EGrhxn5bvWKZm8YWsWtuLA4dp4gzQrrMsMQm8ntu5JQGGEq2MG5BHSPXn1bkRY",
  "key28": "2T16NarJJMivnp7YafisdF7G1BjKws9gLhpAbYBCuAWT1zYq4rnuuaZK8fcHbo2WkWCik743JXmMPjnsta6eHQkh",
  "key29": "YQgunmDA2YsyQ6wsHmBcqXTuv81sLQgnjRKbXHso6azgT4uCKzvVX8m2URtcEmRxqFMm85B947H8Zxwksetv7eo",
  "key30": "dubyMTFT4kpmc3qxpJVYZcgXYpXUprwZwMkerX6TKzrS2zmGsQX128xP9cyhwe6zVCFY6UWNwT51kzEF21r2NY1",
  "key31": "3eoDM9DYBVwH5ZCNZRDyRJ26cfoF2N2hmUXPMXiv3RGqcXa5zRixm96btE1ziDZN8q3TirDmngZ64ie96Rcpzpq9",
  "key32": "4SVKim5bdpvXcrXGbTnu8UdvEJX2Vfq15uVq6W35p15jm8gDSokfjhugRNtpVuwz4kDudUEZiBtQf5B9PGJydKd4",
  "key33": "2YkJiUiX4ikLJBShGCBDhvNfwbjVmSQSckQuvG5uwVasjexaMpCKNaKfxMCkyVquFp51tVUYfufqHFwYhuDhXVbS",
  "key34": "3nJqGLWRFh7T4uSZiCX3Y7EWcBZTZ7nSfzxXePQS8fDCotiPNECkzmh6z4HXeWvuSHtZgJTa4ziq6it2nhSRjd4C",
  "key35": "5aiSg9KV5o7kgSYkCS5Nh2nRpVxDnQxy5pBGJauwquxuR5VFmELHUVf355f3woXSebhMq14pWB1m3rJsnUFRa1At",
  "key36": "6BEWQGH9fQ4aSEsbp1NMg4WyW2spYMtiYbGEveSWa73sux46aDo178Yo7KUJEeZHGsCRkR7aNptex5g6ofKfF7g",
  "key37": "4gzHgZBFuJZZWqWkoHKQmSx7KkTfs8naHS4nqXqgTrq9Zzpd6q6eHdbaNuzxJ9HD7hesB1J74oLhcHGr1MzLuadn",
  "key38": "5DSF5wbaTzhGyNAzu9NFjubpFg1pN1a1LWzJgLnGL9Wq9MEzJ6Tr6zVujzYPQ9BJfv3e7jsk4Yt1oRAmi5r8eAAg",
  "key39": "3n4iUnQRY7Badz78jzhQUNyHjBt5bzqG8eWGRba8uAHXkBKfUUSWvCbmVWLsaSruZTRLAti3mH4p1U3XbUTeoad9",
  "key40": "N18BVjSxGpUBNNWzTZ8jsiJTK7CCpkCj6SZr3z1MUHSFuzqTyJNbcPurJgVRdchtoe3LuRdp2QkqJ3htjrp43ND",
  "key41": "36DKET5H1AwQa8CopExE6ntr2YyVKEqZyJ6J5sHxogWQJZrqh2HikYWrWNN5z2UChEBzCQR8f5pUdE7hPsZawMEa",
  "key42": "4ihJ1iuSjJYqBkEcvpshr2Uw4Gk1D6ryGCebVwQeA4ZrSHq49sEzz8yrMXMsCZKxSRNBNDGXmuNKTRtQoi9bvNjt",
  "key43": "3CCR1fLn8HeQSWDzLvwxmLkKdJ8EZZRagfMpRRoRXSDCLTRTah5FuQ6qqqVPUzDDJUev562TM8HcAQJQZcojtAJh",
  "key44": "4Gf1gk1rDxK5s37oa8KuNcWsTS9pdHtPgwxrQAQXpVXamZAaNwMyYr12PhgqgdfbfNXQTEQYiAwTDyoXaE6mUdDc",
  "key45": "4BheoHhDrdtzhx2iwg4uA5T6SeM9mKZDr2bgEr1QZ6huSTcSQaMo56PKnX4U72Tg6wfZMdgcTZgWQxc9Atrtfdg9",
  "key46": "3dyjq3BBoQyJgnQq344KmUzgWav5eQsEQSAhFUB7Gv2HUqTbNBBZ1ji3VnighwYabnk8Yc1BsSyy3Ni5bwrRGiar"
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
