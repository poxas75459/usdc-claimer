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
    "4A5HyVupD5Y4xA6t73CB4vGizmKcj8RN1eKMYJrG6qNUeEdUzzfobmR5T5gh5Nx1N38ny3R4KnCjEX1dm8brBM7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5emsBoguSgMkmCY1Gy9JFBN3pQFES7sBscRXfuM1xfYVFnj9oTok3GKpXh2Uc245nL6EfWdWX7P8Stg9UXhqim1S",
  "key1": "4ZveUWEbunCTLBmnPhcX9LAfv9uyG3CkCCsygUCyBHnTfW2h5vqvMJgGKeKMMgjKoMn1AjBrBan9FicxSdzZYptF",
  "key2": "55gwtapLAdegBuzy1V5GZo5bakZ9G9PwiPQiwUyzwPgzZJvxhFF4KXEVkJchiYGqha9QpLQiLRzmD4nidjsPUfJX",
  "key3": "2XPyyVB7u3toceNjyNoQAS1uSvydNNZsYs6SpBzKPePvg6q2e9cJLbpvju62KyEHKRwQ3cF2vToXMjZDxdwnhRY1",
  "key4": "2R84xjtLk3fSaSpfETx5dAq5zmGDYEKVVdSXyhvJ4Bvyw27BUJ3s6wUcyCMMWDz2xq8UFrvvewBBNStBhNw22d71",
  "key5": "44pKYFn5ssUAmVu4va18S3vXWDioPdsmYsuNMC77eDX83PwdBW4jiLua3MvTiLSYVmWngYJdPq4qvi79pMZEiytX",
  "key6": "3cGZnmVWX3MvAATe2w3oVswtHS5fWa9qNYpLFtdyBsVN6drNhTJB4FjPefZCaydEor8yUPihNYPWrTvP3zsi7bBz",
  "key7": "2ErEpUbxWW7HdrDQbCovqXfUAyJwsY6tdgh6ypLRA3MPwaajQs5xizvH1zkzhZRQAVndcEw1kMSMJ7q9ucff1uqm",
  "key8": "2NzfLFwk2jFnSi4sL1H4hKivsWFsS8nUDMMnbK79yW9kjqzTVrpjusYudbnzr64YtxbPru8MDUiW2TkRCud2VfbF",
  "key9": "3jYBsV8b397RV1Kfi55NV7b2VZwBoKb1T6J17w2EPmVEvB4chFGYZSRrQBuqAZX6nR7ACBy1Q5bWUAscpRk55ZHL",
  "key10": "D3iH983qvjMQgK8aHpXQVoU8UDnQnK5nHzFrjeuwjy6qEajavwkBHKvCVEa985E4keKxPg8odms4hsy8ZFxCQCh",
  "key11": "53BoaSAh1e8FV1FLXHD4EncWXh8pXTa6BPfyJtQgKvyjqjf6WbDPih5DTefMEuuK6TxjZckaVQBPd3JTjrEVoKkq",
  "key12": "9mv824w5sefJaAtes8PVTjYcMzSqx9hewcY3zLcd7SbqXtGBM5u7R3PgjQdaeUhnnosNShrZLsA2DtT8H9GbXGa",
  "key13": "3W5DMepvv5Z9bTEr14T6qV8XBfGXNbhuaxoYzdJig4JLHJdTvZr4NQpZMZP3oFbApkJDQWEgFg8RywKBe6sR3Hqp",
  "key14": "5joKKkGkzzwrc8QaB6VM2vfVU23Zodae8dwvPuFTQ24pyXgHJwDSq1fdCQQRcrQQW8WzEUR81rqBFgHVXRzJg2hh",
  "key15": "55WnwALhu4h8epaQ9wbvNgNAKS5WcAqXohvb94xYFQgfVsTU3NEpfVFnmsRcNra5skaEhcfPhn5CYqdpgWN3Dd6Z",
  "key16": "43vZdAsoySvyqto1YEoZvzm1qaiA66Es2q1EtuazHxyV5DDc8MC2Eye1ytpgP76sZpg19dYZpssxbXtrzmpeQdc2",
  "key17": "3bNqSfrM4gYtj2ZKnKFFK1Pyh3kWWqGu7tUGP8pGehBMocpY65JLyBzR47a4bVJjFWgjrQz3x5YWkAuto6Ut2agQ",
  "key18": "45mHyC4MrvBN3homD7yALBeVFyMPj1weaTxSkhSY3xsusetH4PRt46oqDmykHwzVnsNx111b8oWE1t9cN9DGnSM3",
  "key19": "57doub4M4qvE3LE2CX2uf2JetzYNzvSS6uRCzgje9FEvEurmpq9Z1Pr6rAuDdbstJkppVCejNDL7SgpunZGunybQ",
  "key20": "25G8uaw7Ypuquv3zbx58EixWuNX84fQnUjdHaKh2rwYiNpS4kRxjgp48fAyhqzsx1AbiTkmsuxv8txBhzCain9zj",
  "key21": "2XLvsUEsDKviQxDPZh8oA8ARdcLDrWWYVB5KRnuZrofqnNW1jsZ2e2yLLcEg8P2NjLFJ5wJvGLyM3dbHAsvUMfH3",
  "key22": "3CRDs7c4qwf3t815ziHeDpaqqyR6Gw6xRw46ENiosXNczVsvRnXadv96DC2T5RXP82eeLaLhcQ6dMbwJnL3UEFoT",
  "key23": "1GX8ZpATcyzDnxyLnbHzksQbSKo9FV4DnzHwL1nxvn2mx8wgUQ3888QphK5YSg5zJpj8RtjGGBT7Q5VRuzCTo8L",
  "key24": "3Zesatg1XKjGb5F8PdynExau8muJM6479u1SstF64SWL4C96MBHqRH28VMsqdKskxxgxBqf8Dip1oWj4EAAsUTrn",
  "key25": "246KwANVzTDjZTVHWi55C8SM1k4gku4m8TCuGH6mQNfeHioMkovNihze822rS2RihBKYMyHvJCu67BqLDjtoN7p1",
  "key26": "3v2H9F7WwPrXBMeK1M7R3Ntw6f8rF3ht3c8A48GVMcJA9YktpBe1nxznLJbuRu8TFRq2wQy1rBSTM6yKnKLomFCk",
  "key27": "2gRCKUspwSsFcLHM8FjvhKkswcJAm43YK2imKLFcWvCXFTMVZxGV86ZWEGf6WgduTRCKbsX5pkjbU5ZM9kFmknYp",
  "key28": "5pvEhBS5457hjFTa11GCdDEq4wvFNkQGmoBNe9k4vY6MLGo8UucFi8iJugN9JKcZQmzFiQmAhy9tayGuCWfG8fgL",
  "key29": "2Dm2dXhfjJMTRtz74vbyr8bZLrLScpEcGXmaRhrjJtSjh69bt38FSvfCcDV4PtFoxLHCwhn3QZ7ZJBCo3qmcfyGv",
  "key30": "FiCLntLFGMJtdskbrZMHSxJX6mcvpHNTAZkXv6YFU8whJSrEpGuwuoRrwd9MxdKXHcQ26SKjpUd679zxQyC9UVx",
  "key31": "2tUQaeapjh8iiXkHxfHomAb8ftx5Yng5SmaC2MG5vdsSpopZQytyydum6FnxguccSuikRkd74uNKNgE2MDPg6n6s",
  "key32": "4HMdTH9vL1DudFcMhfZQJyZeTqWuRkWpwbfm7rsBsMjfUU1S1woXoAyuR6XefYdk3RCy2xx8Dbpp5wjqYZMFc3nb",
  "key33": "66KJzwF6BDqGDezbRuhqCsj4qRDhy3KCXfZiZrEz6qbEcnTRqjfFQM1cRd6Z9CkZVd5VcDX8kpsUQdvxN4TDoGDQ",
  "key34": "4DhpPcVdcGz523LUPgRwrrUYU2heLtmJ3MEno3XohbZ2XpiDV3ZS4GcBhBnD2Tk7WbHrhkzuC2NcAy2E1ebgnCUn",
  "key35": "2FSoH86yAo2pServtfd7ZSPRdidgEyqC3eu8kZDsj8J8e2WDNPeDzgVfX19SMBgY86SPqAXJPT6SVNYUmaFbHCxH",
  "key36": "5Vvsrn84F694ra2REZVzX6DW2ngf3UNQ4nrxfgfa4UjMhayr1hZh7W7Qz23SmQmyEn9vtm4ZriTcfKbbqWJo15Yf",
  "key37": "5fEYs3oh5LvyHZBXZTmTad2EuqFZfh1WzLLF9jeS5Arc4i9N9gxfU9LBUWuDffYQbpPNZTRaU86xbrUx1cfcTU6J",
  "key38": "47ff3etUyo6xn6XqPE5ZTcARsFqgb6fPyozcDEFpRZki3cuM3Gha9x3hBR36RPiScFVdziBMpxTnXEZ6x283Lw2U",
  "key39": "4mxdmWGHy6FFgjgR3JnCSgU8ejSanRJQggE7XmmrKgMCQdT81uhWTV94dAcFALLHuXseuzWB2XX6JNrYwZfdfFvh",
  "key40": "2UYyEK9xDpXqXLdaHSjgeLk9Qu5q4LNs3b7P8qy1ikmSA1ydBws7RcPdR2rCX7fdDm1Zi8RenZHZpsFnAhMzyEZ6",
  "key41": "3w9zr7sF9k1FFiSbSzxazv5sZ1mxt2yqDhPpXzdLFSiZycGw1jZZ2BQxnB48yB3vH76zEHCNibHGNN1WMQ9p9NoJ",
  "key42": "4Pi7CTWswccfuUwzkyUVtyUkFiPNLPxpxtGu68QdcydTvaQqjckF72WzUrQeU4nZCYHER7RAShjpV93Dh6SUfnbU",
  "key43": "xN4vSBX7W7wGaSCUmC2wAnDNt6p5haXhotwragJohtXUkBW2ymMZLmvbC3LSX7JkMMbMY2HTQYxPbjTgBV4NBJF",
  "key44": "5jdMdCK2mg2q4vsYMKQLGsuyfDtArrG8MQ3ADMykzEbdWSg3sBqqDhXQHNDxSAe5waGiQPi6cvS5DtF9dyyoxx2b"
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
