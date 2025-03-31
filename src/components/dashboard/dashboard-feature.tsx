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
    "3oREcTKEGSMM6t1tHJGFtgeS3LGkVaAD6h2EmTUCGEwDpk7JYiT6LzJzAAk8qGBkXvNAH9Nrdi3YHMrS1xoRbCZT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jaSGcznYdeTfpWMnWXfiugTSQaAh1yfDtMDma37xzApXkgXiAUedKkoKxKJJXs5riKMMYtTTBfZbKW9nv2uX8Fq",
  "key1": "64RDVMVF39Suhzi49o2NYNobsBiD4smDhr5LBhfZMgLvV2t7hFpHsTL5kRY6BBFjTZzPh6xFQskT6YfU6T8a8aVm",
  "key2": "62pDJww2rYJx1H2CFvEB6UGUznmaEkpptbJ8MzqoAZ8yD7r3actoYJok7yWtUjyLMieT89pF9cbT2eWuT45YoYRt",
  "key3": "4ZbdPgCWYS6r7PWo6Fc7tGXk87FsyCtCy2kcthuDadPpLFsMRe2X9ZHedCYryGuaNVLrUix2yWt8zTJafMgbVigA",
  "key4": "2kYTxGy9ZZy3QaaAiwripuUUwss4E75jbg6GqpujyYzAaamnQeDBhvQed6pnZN1jhPSVQnbnB8UocTNjESCnQDXb",
  "key5": "4mFSVuEARxnKLsWg9vS1CpAGoh9pxLoZ2dU1sSkSCQ5pB8c3E4i5narKH84gxAQmLj5iwX37hj45iiP7uXHWEgs8",
  "key6": "eg2CuojshdJXFsQWi8W3dQN78EaPHE4hL1gAMxQ5L97x6uKkPkzFjYBaoNPvjAPtLAJ7zvMikw265rDrfV4UXLr",
  "key7": "23Sfg3ZCoDReYVDd6pWnaC79QkcFXcmAEXoQAGCP1vk1eR3dJqZudn1xezfAVh587pk8f2ZP4JcgdhQbztEQ9Bya",
  "key8": "61R8nPhYKBR3142D3wxG4Aaj78FhwpeCZSokjw6Eth2CLLB8S2Sq9yGphmFhk3TXgNqe3KPzHFLuPEgamG6NnHDn",
  "key9": "xi83k16S6NGUTARqSKpWej9PppUGQGH7ELmfeq2RUAA6yLTVb9jkVtXzn38esB7yEEz4FEnsQo86ZYkoP9G6cs6",
  "key10": "2yYoAeBzesMcutnpqDfpAk4Hx4xdXk5ybgvMZdqzu8zyHaoa7V3Vh5dqmuQCin3Rmy65eyfpRjFyHQZrFwj7tSjS",
  "key11": "36V4ku4zPrU4Ldr2QnnC6txM2y9TzNGNFpAjrZsoAk7FZHduZgJ31JWQV8k2EvwsgJ144PnfeQnEUB6WRxJ1KYz5",
  "key12": "5FnFzRcvsLyfJXPKC4QV2VNh2FLc4N89EUQkjoUeEoEHcYbwUEkXCHASq5142PpdhQD3xoTgAkNx8E8TEFnobP6q",
  "key13": "az5sJ9gqt9nfsQPG2cGve6D6m41Y99pp5tQE9bXk9WHkXCAYcJp4K1AZJBYb8JiX5cxXKKbFvQTvugJjcpYEqyi",
  "key14": "jGcd4jEaRh8zsi9TatzsrMJPQWhpGQDNzmZMx2mhRZ7iMkWyCjXT6WQVXmFBLMhCWysKWNE68ceGeaioeo91xWU",
  "key15": "SnB2r3kyL62tfwpiGmG2EMAfg6rZXAf14AAy5WJHWMsagD7CwVVV9FJhRseSMtSnKVk5bDviRS9v1PpAf62X53V",
  "key16": "34dDyKtnmG36D2TJKweVPfDKGwnGLvmfpNK32MJRToXNCD3wcTx2vUroG3EsKyaSxuJkMsYZSFypJjFUmegW9pBC",
  "key17": "3ka2jPFFVvjpo2s3pEJXWXmPw1z7CAjEZqaDchuXmZf5VfY1437SdSzvQ9j5or3SSgMydc5Y1AUkFN9mKF7TYZsN",
  "key18": "yPsM2aXHqFrZV4urqZhSG3yxVqBshAQXhgJkd3dn17wLNNbkmrf97x2ZUrbv685nSP4H7BNqCXUP4BeeB5rwTiT",
  "key19": "3k2qtJMsBQwQWEetWymo43iSwWrcDm9BxupUQhTPfSniG6Brz2tLvris4nDVa5koDoFqQYA4Dcnghrcm4gRStWk4",
  "key20": "xtkdU9TozqNqwath3amweNPWRes8ybkxyKAwd2qU5SXiMwvFyy2EuqxrysqsW7cpT6AS2VAtXDwHNU2woxRZ22f",
  "key21": "6n9KTH11comCztcTHRLosaV7P8XytS8cZ7Wpt5mBHeQLs9bXED6ZeGvbJNqSiTYbAmayRdQWbKUCAeHcU5n9toL",
  "key22": "3Ft6mj19MLBQEkVsntjXz8MxtKMNQ9FhWqVxD1GAB37x4yu2Bcg6NbKWjdG4Hcvc5boSWZJePzK5yGLBnsp2uT8J",
  "key23": "2c8kF7N1MRuNjLbpeJfAZ8BTq5qiD1oVDdPX9ZkZXseMBQafdfmKGkHnq7YuSZPPsniYYwp6jLMnTKhXYc3YZMYQ",
  "key24": "2xhqnBqzUWaHEuJm4JaPqU584Z1VdAA2hMNAsqmNvDMveJsiRku3P2x1qFWVQPeDvMDMSK3yqCM2K8HrviWXtun3",
  "key25": "3piDd1p4eQs51a6JE1HiEBUfgYdHyX6pzeDRaTikp5YU8rLxqeggxfNvkKmvA97aZfdYsHXp23uzWthboF7e7JU9",
  "key26": "3yBKpGabmCaAqAB6gUqK3Ky6JeEDJeW755nbQCASxRJDZe8GjU9WFhrD2nWugMre7qHZDdXUQC3mqx6qFDLDPsr",
  "key27": "5zjMwaMBTaqAKBFoqAPLFUnGBMNw3eVc3HJrVERXpVjBVrJGRXUsAhkkY3XBMeJYfqkDpMHnrwNA6beBYmTFbgE2",
  "key28": "4Ck6NjZTbPsyu5kidY4xR4uBSzAy1z8Vsnz2RF51pEJE4gdbj6AhjximNeaahg6E5XhuAFMiXmRNLwV9wqpA6cBX",
  "key29": "4J4zmdBvsnZEAg4CdbGt6ST6pc4gehhHtRzfRCumhmi5c8qm1Tfe4X3mJUkaxQTw5NfTPwsC7tzJttaAQtZGYHzX",
  "key30": "5jLmqXWNMpkj54wCejbEBYzJjevPs1xuWB71DqzByvMqtroCgUssBw8G5K2juFEBAL8pPNjkjEYQ748Bx9dXyNRe",
  "key31": "2DfkNWrQCUTmr7dTcGndn6e3iTFcvhVMsgBcWZmrorzpXLcnoSqcVovtyHSecMdEdHrT6JSfkckjBh3baiSDM4Y9",
  "key32": "5imb8c8XFjChP63tJ4Mtt8e1QErYXUiad6r3vEzHyjTCdvtxu3HaD56He9PhfcajWCNKhuXtkiYuEiSYh7v6XF5r",
  "key33": "3Bjw49v668mPUDs6711KoKyQyuFdcCPQg6fFvX96QdyLNCHcde5qLm54TEmmknrQhTmW99h5B4tf1g9ykX3RpbSh",
  "key34": "4A2t72U32EzUXqeKKVKJ7mm2xNxy49iazAqTjpETwumQTZfr2CQTwrGw6T7SsQMD6Jo5DiQyQA8Eg45FiFQM8WyQ",
  "key35": "KtJjXwP3Js52BAC58LuTWwdTpMPp217iXcHs96dx2wVzssocw3XHXh1998DVRJw54QbmpneL1LoM3SVFTQp26Lz",
  "key36": "A8fSePKnNtqGrdw61hgmnN74tgDgWrJumr3HeGC9F7wF2MNdEYr5kFcZycdsAsa53SmQN9KAwGvJnossbVMzRnF",
  "key37": "hYcy2ZnkSFoZ6ufFLgywKT13SR3DXYnCRoR6yUky5AfSeyzNL5ExpSJhiC9CaHttuXXcoaEgjo8bEuXG9Hzgr9k",
  "key38": "5vtq9zXd3PcaUvrdYcu8MwLTb9uoBJiogd22du6SsxvDWUe21WG9z5UpUSUYwTPxNA4J7qgn9oworzSSwWLSjyNk",
  "key39": "3ZeeRWpFQS51fAdpA5HSomUpNi5Q12yPuzEEmLCeo7y6xfHNSspPPjouAkxpXpLZEDr7b4Rn8HnEF7vDcFXu9eJJ",
  "key40": "xNWN6nGtgtyCgB9wEBnpKRNbrfgDU81c7vN4g3K2Qn1UnzME1HWfYCbkzGoNkzUwMv4wNJy9dwFQGiwiCS59KD9",
  "key41": "61SuFetHyK1dFn6u3tXNJeeNEbYXvxwSENG66Wg3ngCSHcxLE8sEBsq6AgZMk8w47RDaNdy6ckNz2b1a3EyDwfA6",
  "key42": "N8ST5553Yagu5QewBYNJ46fHhLUPxko78iGB44sSiUCVmUikxexXJ8xkzBj8w96NEwW64vToB5U1K44wSq9M7xF",
  "key43": "2FBz2Z4LcegXFbHDimcSmFD6ugRn5Ej8GdozgzSZEDgDHZGdaNtaMq5sVVzwZgTHmLJ7UcYjPaVxfw55ZynKBHyZ"
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
