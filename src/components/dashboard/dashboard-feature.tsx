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
    "vJkrHq6KppvisENVZymjbpXJ2qcJcvGXN2J8FaEtuCJk5GanWq15i3JZnsivpmBBz7sjKHXWdGoZkppS5PK7xru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xJ8KNMYUTMT6rdrqFWm5pjLQWs9eMET89VC7wxkx4rk76KpFqNGtUH61gmpHtLXYm7fFUZb1Rqmk3M5gSWVcYeA",
  "key1": "5FCBS6W7JGKgBfERnYWuoqCPkqDBYTyp1ArpzEZZemGJEDMxAJL5bPePHrcYhptWxBGBB3bmcmf15gs6WVTCnYGh",
  "key2": "4hpiQQSq7MTguK1eSivTtL7y5EXxcNn8YVP5rZF5MjynEqTG3K8edRE78SXH6mxjquhRez8gm5VLgBg32YAbFTgi",
  "key3": "2ycdNek48fAbJwmp6Z6jBYwC5CKcj4jFQNPoA2ku393nfcCXEaqKfFsCedpdVDdEHrsFgba4DQLa7J1ZShjkZCQb",
  "key4": "5TBiyQdERPJxP58q43y4iZgArHwWZt73EhhiM3c75rpQnTiVzU7XAHGyZsFcyRa2UJupqEumwoVUWh2p6t633u8b",
  "key5": "3hYPWXBX9PT94qQcQ7jhmJ9EBFTVbbdfqt6VqAqNvb315A7pSDBJgkmKQh3ucqMJdhmNsQ8AWu13C9zq6nkjZTr3",
  "key6": "R9UFRJLosqD1NdZDdwDj1ix2tpeXMvMHrhRKtx3tyM2pyyxdziH6byJ67BnTTUqtm8w2Mx4YEjQKL9tVGbumyYB",
  "key7": "66H9tL1D96gmQbzBsib3k7hqkEcdVKwJ7x5yz7b9LKUfJrL4q3uTT44eRi4DgQg7LHVv4u2AABfJLrxaREyCfpUd",
  "key8": "6B2aoTdafJd7ztUQ3hk2N3LUWDujrqzCLQzVfbRN3dTgHnyZXyxQ3god6kKASsTWtmEKhitJsoocdprs2ofreLT",
  "key9": "2h3fcKE38XajTP3z2ty1fRAZrGAeuo6QaDkeyZhRzD4i36XViwFHHXaVTFC5foFg1L1fTR4rvoP4yjoGj4osUp7a",
  "key10": "64ot4CiaW24V3HjgsBEF7xtPMTUWNYE76ZRp7uzfgzVxcSNGC7uDrNssfN9VVcG335fkngf9ewbYTpFKQDtyyjdC",
  "key11": "wgdTPCq7o7XVvGWEHhSHDoq9HUTQQwQNba5xVHBfV3yY7Cd1rAuS4A8kdvhJoGc4vYSpvQEcxp3m6CZx3L4bGDu",
  "key12": "CRDMi2jKJVrpV5voCCZWH3QJozYRQSfRoWpcDptq6tHWN44UeYpAUkteTgQsADdNqesqZKbDoLDrwBApRHCxAjp",
  "key13": "2Uwuw7v9TDNzDwgycwN2H5t6kNKSSTZokcwR13eLmhVTnduYUDj9ZUcWqYhqsNWFMe7pqM26L2gBeygjVueT5h8b",
  "key14": "5euPZvMphQ9Qav3rXheBAps4RtR1zNFmMpxzxVxUJnBt86x3cKyaCmKh6K1ewAdzjT6CTs7UeNzVqg1CxThrx3ap",
  "key15": "3yUSq8NeCHhyGev8YBJ3q4G49w2TWeyp7Ybz6KGdL1aGbCYkXEEkXjrrCKL1Zybi6AFGKargwseLMZ2Cd2r7msqa",
  "key16": "4bw1t1FyJtKuaDmAZie9DxV7BFsNhEutJDXztmz9VsARFi4gWMLXUgPfWLpGjKpseUZ4z1PRduaPtFcGLsvXGmaT",
  "key17": "5g5gQdTLRs9ce1SpicQeC8Jiq88JUuEKsQ97KmQeZ92W7v5VQvs7sy6jKgAhTZRktBUSi26FiRQEP6LxS6EowD4s",
  "key18": "jvnG4CzTz9uPbVp5V33kNAmVcRpbR91SFPNBN5s4UbQE92UfHzHCFXmbbA8H3TqVH6YA7mVmYnm1c66QQmk7h3r",
  "key19": "3VLESV4XFrUf37t3qVau2fi4x859wQtqHKz4XbEPdCYTMCNHdxwejmV1xLrjCVAiZvLVndjmYTv5whksbNNFWWHX",
  "key20": "3b4EqH9ydsxSur8MhABmbnMjT4A5vR57GBpah7xThUciVSDGv23MH2CSjw11fps3ZmTMZ9k14oAhFNfLFqh2mppb",
  "key21": "5ragwTPW4LSyT75Ep1zHqYVUVSJvgXth8dnssGrXPn4n1isao4LXDEedKCHw1cNc6SKkPFLWPvh4s24hw56GH1fm",
  "key22": "pg5vVKNTEL1MFzLBhgESALdzi3MkatQD57XtgXHaEb8swbkXoVWisSiF6koxSNe8gE3XR6pec3ZMpZ9oZcVjjr1",
  "key23": "KE2BbncaKT38yeuxzh4FwxrtY3Et6qsaHNXYhW6LZM6wqxxCvmjPMxGpk2v7Z6EYSHnnqtrKRhjPumVPLbX94KX",
  "key24": "5z2nDbX2fxxeVK7BrmrvsTTGJRAPc7DeKRcAto2caxtBXu3Zz7LqGqNGMjzXt3FVNB3rqc3CNnMwBKCb5GiNpCbB",
  "key25": "5qwNWfzLxTBDfuacgCGUaLW8o3L27GTc39DCrAJ7wffNpFBTWsfvnUuihf7YmqkJEmFVYMerRHQkqX4XWhG1bvq",
  "key26": "3DDX6k4nj2raBz5wymSJ6sJaiPCYtrVHg56Qp7C4vgiSH5eGuP8MVBTcWkVNNxUsGF2SdDfzdNnDjLCihtSx5txN",
  "key27": "4dNTxbQYh4LPfmAjt78bchAwW4L6hc1zZigHraFpMRTjoJiHLsybTMXPzCBsTKpoKFpbcEooaGUDb5tZEazMbBDd",
  "key28": "2g47kr2hiLXAJrPB7D8bUFEMmLHfzs9gSUePSa5DWSEfpxoFMfUCSoA91gVgaQ6vm7rMSU14EVHBEmw7mrEoqV88",
  "key29": "2LmfzPERmRsdFwTRsKZN1HSAoagDxT4MTG52qefhSJurxkr5JcMVRpn8AbtAQDjithNq7FoJ9xG1oL7aSPTqXZoi",
  "key30": "2TpAYcWSEU5i4qy1uAEaCkk7A4fuXscdFZKZ9yiKfDLSy4M5wV5w46DqEnXEMCJ9xsTC3jaNyCPhoMGaVxCoEZoB",
  "key31": "qYFM5zwCNwkNGgGdWxNkHYnVFHMBy5gh22ier5zinxYoYzgzXdxHJAQhadpX5orm8FywpXLJ8TG4TCvNVHMKUQG",
  "key32": "5oLTPeiBMWWwtzXhwVfxSiezY3GA5QmFAnTockjxJsBHAX6S7h1NkeXsNx9nxt76f9YXLciXmdG2prmdtRngo8be",
  "key33": "59PzftvUwpykKCq8D7VtPKkxnvdQdLT7pySDRH2pcNVyFnAEakzUfR4P1SQedEn3MAF9FhnF7c6cANU5kz9BbyrZ",
  "key34": "wdurzrWMbU75NVcHQPn5TtbFrhu4fnE2dMnrEC3dNSvaXzHQSEL2uGbwuK59cseYbw4fVnH7RW5fY8LR7j8kRgU",
  "key35": "3CPrxRpz5gHPJMXXgPyk1W3ixD5PFxEj3rRNkspoMPzq3y7ZtYCp6MaaU7ZfxbgducYHuBhjTtavg7GmURUA3Qod",
  "key36": "3qkiiTXQf45V6STY9WQnj7CU452o7xri6McgaL67CDs1xRcZoTrBGRCpuvfaGJSEhPU3N75fqgSwAm6yaeVPgxjJ",
  "key37": "3iMTxKWNKVcp6bF6JoKdqsZqoxRfbz9UowdWMUetUHnCQhfPvvN7QLUu6iPyeqzCxsCnzJDqVLKWdH3MWiVMbp1i"
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
