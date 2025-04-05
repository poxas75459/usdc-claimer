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
    "2ctXhAVxFQQrVSfzw65yAhxDfXYAYDFMM6j6tcJxhh6W7JwCbYZjN58gbJS73cQ44D4mGbtLQSwdbcRAR7hTATzY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M3JbmnnnybW21swyHtCTT5DJFw37qKW4s5CR93h1mB1vZunjhxZa8t1yJRP7yXGGnR5tuua5WqbAdHo9X7X6n9U",
  "key1": "59Vmudok5J8GhMUdsfQkDNGzeEZCb3BEZd2MNqkKpnveQL3EgHyeH4BcoCHD2AFGYjG9dwh9ukfQh2DRivAa323s",
  "key2": "1UW4hL1cN2DXkQq764BMyCDFuRfUvbihgM5VLt9PU974hHHzdsod8NW2K6Eyi4UhVnWsSpHavCqitSYqEmAg3SL",
  "key3": "56Ta5ASbj2mk2nEft4dqek1aHVark5wZGWTD6DWVDvdEQCxrSfafnFB9yJsGhvSbAmXnB1SMtQz9gnyodAryHSh8",
  "key4": "64wSHwsCY9eL8M3vRjZDDmTjQZqvPm9f1dHz3BMkpCYKGkJ1oPUV431xKrFaQT3Co65hdN4Te97488vyvQZPTPRF",
  "key5": "vWtKZT7rgcaJ9SVyvBQGNLwbo2pSAhaSpjaunTXVeQHQi1tQwC6XPYJQtpH6GwGxzzAhmT1UYCVNCVNLw6mNFdZ",
  "key6": "2fsasb6cj2pzY3Pecbqw9iAQssdy6ZaQshabFJ7kgm8EfcB7mUAvnLHNYx5kVtbCDpKuPQWg1LQQFw2KdjxkaJnf",
  "key7": "3kkba7eWFiEuQtsR2ZtsM8t8ryp4EKrGsqk8RtN3Tt2dpcDu26CNHebVahmdQHXoricT4sicwszqf1LEhw9PSQRU",
  "key8": "3XerX1iJNafZBvYDAoCDHFwy664dSBidsfLRoHwU7TpCFA7iYkyxMZmCZzEbuYSnWr4eVmypR82p34TFt7JKyna5",
  "key9": "3pSpY751YzKUt4FhdDc1dhq6nYdVekxSzh98uAhJSVQFsP1Qm1EmuBKpmtGpM3bRBYQrCXJ7uxeekZUg2wvFjQkJ",
  "key10": "5kRLrWwJk8pkGEyQfMBgzn3ASmLbyhrfwpcT4NRuWNQzvjGCh1j95zxiLyP1AaUTPpiAQQRGZY4ppLVGh6Msv2Lj",
  "key11": "4zhDcF3ok9d7gayqFHfJdvm6gSRmMGeh2jLqvyhj1LtHYx7PKtk8cz33wL5D2tNAs9RTpqUve8jowL729RFzvkAR",
  "key12": "58jtdEUjVBDVLB9akiEGaasjm2tpbPuwJ4mxoyHf7Yu6AfUjK5sAt9F8dQKNTbpvuLUqeXT5KE5vS4AnJFtxVjQt",
  "key13": "4gEowa42SEGW9yS7n1deUUwGNPEHn9ZUwAhDcdRw7e3TfqEmoB3JvkmmgDpXBKRaNFZRUcqHjFZBx94FQhFxXK1n",
  "key14": "37ShiN7wtj7MjM6MwQswmQ3RVUXHNxYB4XJKMd7sn4WHs2CTtsrcSrq22cCStbq3w8UnYTATKF9PKweLza24H5pr",
  "key15": "2r6JCzv1eELX3aioDfwAX8e94srngQ9SFwPAd1PzjcjVj9MeuUWbbKtiU8HPrVRPbVAZ7B1yfpuLkd4U6qxrEcG7",
  "key16": "6Nk6abZxrpvMVMG7vjkA75a8CdvSSx2Kt7GCbraUPyFhrvPGXCfZ6fTf2svHgxcnbGh2g1qphcaQamQdDdtLMwg",
  "key17": "2tAahVEBFTyQuWwQJDi9mkxR48n62scTxCVD5BCfDxujuR3YHpK2LQrQtyLiDUMjFNVxuGYSJgSmuAh2kLMCDYKi",
  "key18": "2NKUJ73FaM4uMHnsMLe1DtWuHsKviD16XRDaf5rrJrG6ENFWFiEEN2W7kTxzX8SPptgsa5KK9ugbhEL17wMycxXo",
  "key19": "4pvTezkuFDD5aUSgzrNKxerXsWeoCneYpcR3XdNGnrqXJzTzf41934ye5hjb2KEbq2gPvvBf6KQbNHome6XQtoWD",
  "key20": "tjSkhy7qjAC2zCjtDxnhodLMwGjs96HP2KhQrGm99jHrLMpZ6jCdpFjbTAtWmGJaWwRuebLbMwYUgVCX8inzbXA",
  "key21": "4Ef17AyWdpPNhyUQbsC6RKJp89vUXyJvmVK9cHzSQotBbK9KYnvrENUXrWcbQ8ZheBhgVL1sZFuS1UGAdTXfEEp5",
  "key22": "aBkrT7GJbRa1wsKfd1vDmjvhCThd1uk5Trrm4c9GhR9ZL4gG5XmCPpkMs14jMbnRUYtN6Cw1XZ1k7pY4T5WRFT8",
  "key23": "2BNN2xyo8eLFtkHqNDXAD1FJKtMH5U6sKSr9D8RNJF5DPhN3okjPTtNW2SyXSMsrHEkBeHBVgCCfBeGshWFrzTE2",
  "key24": "5QrEJDJ5HF93mvS1hFZX5CVzCudWHShfM6GFPx2SvTXtR6zHBQEftaYYouwLQDjxteaHUoEv8BM5GMo4J1KNpvXp",
  "key25": "2QU1KAymTq1B68kXf3GbmoAq199nUPGPqHXbhNbQcG1Fs3NKmXzrv3CDwFzMuRwo3HzXYXXFVN6pxwZaGZ6wXwmR",
  "key26": "2b4EXSnnEL9ZwcHeZywCmCYcn4jnEUo7rpaVqM4UE4QcmEPXS4RnYQze9cs9tK3sv239HkNGPLZvJswFwsL9RwVs",
  "key27": "4DM8nfr2EaU3McXLHb546WBTDTAPSHrSwR4phgTeAAXFs5jcMt4Cpc9M7AyQ9qXCLceAHSGpeyCNEBGRqDwVuM2u",
  "key28": "2Z7Dj9Adw5MJGyT7tvm3v3s3qE43zzEYgbUvQh6xxz9FaWtoxpVVo52kApcYHobibUAQ5wGVTD1cmepsQuGX3doH",
  "key29": "52eE85XFXaDk5qAeqJr8qba3mbx7tmxxgZrwDXTt1M4vmtttoCdjRXReAS3f5sVaXYYCtQoH8571k692AAqqtrs3",
  "key30": "sajKfMbzjCmeHrEJ1DPtz7H8XbmrZi65oDKRpxqp1rNiXNspELs7qidNdLxr7HNSKPChn7oS73EiJFxRH578vem",
  "key31": "5iuDVP4ZBybhxZfPyWxUi5zkdk8AFsiKqtjseZ6jJSQcXvcZF2qATB8rpg8P78z9nx4ZuwFGNiu1gB5BHhRt7YDs",
  "key32": "4WSQgfKJ9YXTjJZLpfUuBA5ZB7rBxkjjVtta8cwBhLaKSSqpurYh9wV6EFShuZZ8pTXniSGXkZyAyT1A5HkKGXXH",
  "key33": "hp6yruBX9LzZmS82HRZufshVNvQ3Bko9DfM8ULr1gHMt5LSPLdNz9ntpZbYUUS3eZ8wnjTN9WKXWGGFuCWzDrgx",
  "key34": "2m7WkLhVv1G5a4tk4iTgaR9Tufkv5BqC5ZwqMbZxaqiGaHctg2GyaY5TbhaMNCdoqasyxuQWPwD5NwgsktesK4Ws",
  "key35": "4yLmJczbWb1AMpNLy5FyJtNTsXjvZfuoj92hFg7UvBTuoVPNWSdxxbKPfnp1CNyJti5bxzVCf9YaUGgBCza8fXxi",
  "key36": "3FV3Ht32B2PfCpX6Kyukw6GBFBkYJ8QxnQ4s9Fy7xHEXn2N6uWzjUjp6JqQsk7nP4PrVdnZoHWic4B2Kookrefiw",
  "key37": "2dTmsNE2LuhFffwZCRy98kCaa7BGb7b45NRC18LiHTj7A67TPAwCtRp2RKJwqFKXg33aRwkEkLqQzLKcHcCy1GUR",
  "key38": "2J51iP7kNuLNY4GXZ5S3dPHRZKszkmG49gnhfEwtyv4kqieq6rfPqw5b6RvvScyBBZ6XSxeG1ztJe1GS45BsLYNk",
  "key39": "41g1C87TLRipUHhQ69Q7x8Eng2XrfVChYpsiQCjUWZG5wfMwe315ZTZVRvgrcU6XsKuYtaet7UAgmv4NG3VJsQZ5",
  "key40": "32uKRukKV6gTLxX5YmsW7i4i89dAU2pQTq1GqsQdTHfKvTzwHL6DaVjMVJ2Fe6FveZ5SrbJWPwc3uyek1Anxyg1e",
  "key41": "U8SDK2GCoQmqJ9DH1tx84WMAPZTQEwPYnmfkMq7o3YSHoBhuPvARagA73m2aSGDMUUFJEZG7ozPL7YTh7zc8J1u",
  "key42": "SYVzYqGdbzchgz8sWsyreqxsFQhrRG3JaAZ4YCBYm3GTEofVVijZc1PopugUV5FaRjpejDU7JAz8sAzKgaZ8KYg",
  "key43": "DBuTbYnF7q3PU2Qw5qDFAPs3cRPH76yvzBDZpckhT9eMwhePjMkjwxLJa3jBxDLV4c7evbFke156tNFGYCEBSUn",
  "key44": "6twt1jn6TkrVh5xhTQ78mEMNHBQiU8arPD3pDKck9ogoCgjchgM223x9urd2Ho8NpoZiEcGbGYiWRh4koWqULpW",
  "key45": "5m9dMXwWAC9QLyspN6BtycwkEiE88CEHka5Jzm6qNqCkx2BhG17QpWM46znwaCoVwtspy5vrLgEV6Wydree5EfqB",
  "key46": "5JkytM18dka5P9jxiNkgDyUmvEJEz1rcfA9JzWfgxctoVmXgPCwFQnLCCDz73mwidV2ohn9eBNSc98WpAGEMPE3J",
  "key47": "5eD95aAuLq5T2fpEtrD28qpYFtPX3hZcnA1LeVgb8m5jotYQVjEfKNt49Qt2byvxjWU8957Lsb66acoz5rHGDkeR",
  "key48": "3FM95A3HsC3AxbgcSxAM48taWPsQVh3jkyJwtWZL5jc9h5osQGMBLPBKDgTLBMwK67vsJkRDuYfiin18EPNuwFKb",
  "key49": "pJzGGUhqpUswYaidpfA3NNrPs44sRdc8BpjHXsnibDwZXtTuNeXhy9ygW8aNo4CMK6hKzc3ftoHre1tZt8B91nA"
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
