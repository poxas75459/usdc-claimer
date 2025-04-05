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
    "2HmawpRNhHuMBsqBNQzZT9cuc1zVrwoWg7izZ5PNmdRdU93FYDUkdBixnTWaGuTE6onJv7ZwYSgnmUpT7cWeBVCM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ESfEjwVJjaYcyYPbKqYsvN4oB3mpL9D2DyzZvskPu8TjEt2Sm2g5bcnsWaCS7dwPZAYQdH2fncgpdR1kCrNt4hs",
  "key1": "2sQ4jUQmrJ73HxLqTCHeP3gC1fnzndX4JzZop3RyTrFGJrxvZeLFjPx4S4dFQt9MJJnYisJ7eFYUqs3DPip36Grs",
  "key2": "5iBfXftbguvFR6QADmMNdysnRnECewvZ3pbyjq2HiduitnRmX9gTAtqhb1f53fu5K9r9E3Wb48iN8prD5xcNT4sX",
  "key3": "5RPJFYgUhedmesEBNKpbsTeDvrAyjH58EGaCw6khA6SZJ5wf754U7KESY7iRLQBLk76n8yi9FcnMCqVGvWPfjBri",
  "key4": "Heqjt3QnbDHeqXb7qyztdkGTgSVLqmXDMHSLyQvU1a4ozGsFgoLfmg2SeCQDX5Q1WP5McoEGKhEeCzoLf8sL9rA",
  "key5": "3b2VpVdxhAwmzKEqaom8zoQiTw2sdSnHFjutu5zmydw4H8PyC3hDcAtGwMgwAnrTzR3eR49xTbJoAFhMNZyJEKhs",
  "key6": "5TaZJLWkpEpVKkxNpjHBG2Bw5pWEGhLwrCBKmfAeD2Z9AaAWaUajpheandY8kt19VKdwZLUKBeudNeAdUv7Gub9F",
  "key7": "5uE9Dq9KY6YHK7u1KALu4dMndcgZDXqmMqf6hdHgeG5zdNduyywDrcnufpfe9iHDSsFsBBr15BqvFupMukPEPn2L",
  "key8": "5jfkJooKQuaV4ZLPstsRKaUdyP2pJVfN3cPfNbM7y4aUVqD3kSxczxtKcCKS7HkK7PbGFQpX72WgFwT1XqceuvV4",
  "key9": "3YVtQKjQri8h6NftZZDPqWcAurm58BLDLQA1fXAQacMrzRvHmWMEjYbe2g6JX81WJdpbmknSgqUvawWWvwp6emyP",
  "key10": "5pd1EHwPH2aALP44kJG3Up4BRYZMEzawz6qRBgdJjFhv2c2v6nGSS8QcBgNMzQ7638f5JBjKfk6kLNZV6PuupQHh",
  "key11": "46TKiveVfuqrqWCRmnW95gNkcvBmeYoTfoYGHt1JtaREhFv5aXkRCmipPEFwbx7E8ZoH5uAzFgMyw3ux6AmUNadZ",
  "key12": "5y46JbNbrdNLGfbjakcFUaYNUP3bJj7YpDtyzKvtzimZ1zN19Frmp95TAMUMtLnz7LMDzayUPSWoU8JpaHfGWFgW",
  "key13": "5EMvVMeKL3csTkDyNPApwKd4QezdzNx7Vtp1AtpUadrNw87ZWds5VeoxSGyn4ez422J68SMtxLuaQvpV9SvE8NCd",
  "key14": "25goWAcJ1W1EBEAQYuGp5RMQD8tsENmvpp8A3WydsKi6rdQpR8nKqZ7VqiMRM2nuojoFzZyN4qFishmWGHifP8Ve",
  "key15": "jyS4UiZkt7m4Hcn9XS2dSBugGFwBSfAb1XAe7RuqUL7KeTywh7LZvmTixbqwC9QpLmgNtfTnu7feQm1AmxHZbgY",
  "key16": "4FiSEnPdqxxBdqeDjVwsV9bK89MmXEiuCFTDVeWCHB5tLAGTy9YQv1Mw8uAVAWgSWDH1wMWcpViFTH2sNRpFBMUU",
  "key17": "2bEZanpLc5aLgTw5rijEFG2vrGBLUpuXoVh9ZzYNijh5mU1hb6cH9qxhTEaNK8uBbsV5cT7ypKDpizWyAZa9Lhqh",
  "key18": "5piRvP7k1HDdBVMSv9hiorfCJHr2mL8KWdApuYr2CcW6jU4qgy1HVdAqNGafqaKGL5HsrahQ5u2qW876XGE2HrmH",
  "key19": "2sNw5Fy2j91zN3Z7CUTtpKzUfZrH5sjbCryS1Vzr4zh8ghJ4mt3raGKGvoJjkneCXPN8YcstzBXDzAHKH6ptZsCd",
  "key20": "5AqjLqAsfnQfjFjhcG1UtN1bBxHaB9dhZ3uNuxaScc4ojP34mBSMoSYWbQfQnnRCjt5ih542c8WXpPDWB7wMmFMT",
  "key21": "2jjjaMrVYDeDKUsW6QvuFbS2Br9CAJ3K3L3CaP1PoDcabaVWcBBYweikfB9nJqzEjDawVFFozVidwpUMocatLNGA",
  "key22": "44urhMvjm3dWmpR3NPwHV3114zM7AQcfM6EGYTGeavGbDGcnSBMwsvdPAKWiEwEHSDVNBymSvJR9nVLzDek1bKjg",
  "key23": "4ixxxVCDKVLTN3C4MwpHBfLjApZHiXsuo1pzTjLLLnUvyoe76v3WqfRNdDdfGzQPKYL5VHNHrFqxR9jjwje6K6Th",
  "key24": "5r1o4HHZeFoEtx9wnaMeyTYLzdxbV5ZrK1UpCtqPqTF3TjjmeX7bUToYHP3znLB5VABfqiHYgtr7BDbnGrs6B77i",
  "key25": "3sgggh1hNBSGpNkHNTCyn5W3RjrbNumGuTuudVtknStoWzWpL5CUmc9M8MEWTPNjpxsFrWBh2ZWBMWnTkHo6GSqQ",
  "key26": "2LzqoZnjXqqK5dnoMouxsiChKHzAx3tW1NZ2SnyK3i3ShxfqDMMfCmvsDSYwueA8GHpkYbVVJbEJCrdsM3J3vGNS",
  "key27": "2mw8T8KhtoNmxbhW8vr7FYPpVoZQnE7EmB1uDCC9PpmMsn4PGeQ9knc3VFUCEWswscAaGEWYNXVexvfGgjkrij7U",
  "key28": "5yZkCb76ZMHCBEVfvpiCP7tEd7ZrCTwQHHN4bRjECoa3iLUwzu2qxXaNFebuGcSvFo2tUuPK4YTSyX7wXkZy4yR3",
  "key29": "55hPy8goHkMCr5LXnZ18JK2nFYYwEvASjRfc8Jxk16NTJi8axjPNdfPEHLJ29kgBJ6kjNaKrzMKdbwQLuNRCUVM5",
  "key30": "2DmXLFXyH8n5oU7N7UHTuYzCpPfCZeRrh17UhWPCMa9zPhFsYAYDboPgZx8qbrkV9RhkY4FidZZDnYCgP1GGftLR"
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
