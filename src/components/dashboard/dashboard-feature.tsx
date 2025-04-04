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
    "3DK44ac7fFRGKEPX48M85CPJeQvuAbkCST2h22vbNkcN4aCCSw3ak7UE6zgm1RQQfStqTf7UGqjhEJw4wGXFPUDv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "585CHhxuTAB8upcMdFoxQa1xyVVTFXk5z8w4x7585FizLoCQUnsyj1zCto7EBYGcvFGimMGL1EypG25u8KDbrnxw",
  "key1": "qfJhKEVqy6yrLtgCiDRDY8bzD2GqucDCN7Wzhqwx2fExhMgtBiGTkT9BzXR6vMMHd53rZ3bYRfizavXbKHcaupb",
  "key2": "2o9d2ejtsApdhbMi4zUrkiBFkDVx4fCxTMYzJEzbZZwNFV4HQngxzExBjwdtJGWDQhNfjQmmVRxiuusUex1ifN8T",
  "key3": "2b9mPMZaq5jE6rV5EGJUCrhwbSDFb95mf3xawBhfKa846CQrUqkZCTrWadHGZzC2g8ZhEdEnAxWvgNDkodJHMLvX",
  "key4": "3wd81cx5TuzkXtWHUV62T1n5NqkxufW1oXqow9YpwQ7PgxM1XSiusPVVdfTKdQBf3Hu4ZSyrvyPD5YZUEYooVBwY",
  "key5": "5XZ7PBQk4eaVjTHXLxE9JgbZqCpJkrbZty6M42S8u2k45BNB68kQpNtGsEynDePuctPzTPwpLkDuJNZmfn4x5SVv",
  "key6": "sBrJu7XwcUVs8FpNEnc6geLBMnRuV7UGhDC8a5XeLWzmjLQ6MZjbPQKaCjg2bwrG71YLm1vpQPkiFE21xaDGGW7",
  "key7": "2jgd9prjBWzP2rc5SMPv8nwzFqFivWVCec2DSyWuCtvaUjjsojAdaBf6QMYWDGwifzuCMJtWzjHy7AyebWw4tZwC",
  "key8": "4b9FVUmakki6ak5wmEDkoiUbGNtnWGMAu9QvyJCwA7jmhZ6AXbAfhwxhkdUBo3ztnGAQDobNCXYvpyex32PZ1i6y",
  "key9": "2ie4NVySCByUMR3mAGyrFtZWbgsXiP5b54cKVkRgYqhV9LVQ9Mhv8Gs9ybvaBXshZYQtAKoNsBBfM55eYwcMrtjR",
  "key10": "3uWr5y3Xzd6FtHcKUX4YnURa8JznEAk3aaR12Jfquro5W6MSZCTwzVL3VNwH8cgDDBvsp3UoVnRtaAc4tEy95ShH",
  "key11": "36ircFQuGxSEEUz4UiNAVHvTA7hYUPZbUQX9CujxJ7XeuQUKzJfzDcRjAwGsu4PZLYpfxRW4ftx1kAdiNJqTLTMZ",
  "key12": "36dHgRAMd8FLgsWntpDAPpDiZAGExfnBxaQ9cKTqhEusYYBe58FGtFH8mSxdoZkDuybG5RRiUrgRAA9r3HuivEXZ",
  "key13": "5CdNFjbgLBTHRJ6LHN66EGvPqvUgz7ijxUpD1pgVozEz3FFJwAKaZwF17vsgujhoXjmyMdoDU491kp1dvVXHhX6H",
  "key14": "3RAoRM3xM1Y5uuiFH46DBS8akirLY68tspTikK8WPh2wzQHr4msHiwDyzbUeVXvppJtaagPRCPEYat8uqZiWtoon",
  "key15": "2tTqBuxQWutU6d8dY2HFoyZkwvApTaG5yjgz6Qu7rKG9m4XJtf8RxUSJEbirh7W2DXjVCfAGKYpWa3crpFDfwqs9",
  "key16": "3tfExbDco9ANFCKzsbcPTtZ766yTVthxkKV94ZJDn3mJdN1Php268QShwEk67thjnZxVjYMbEaugGDkF47d1Q7pu",
  "key17": "3nvYLNJKtEzq9kCnW93qMccd3moupXQNL9mDj6Zurv6a8vXzYbtfY7HcRMwAs6zBCmU5k8bxDrGGbJxH5Y6xzEpQ",
  "key18": "5cdBMhPyKQRgRBpsyPfagkq3iYWwi6z77aayYM347rCdaATv7YFqjzkuW1vfwSG3XkjiDsweuwXp9oLpswGgVF4z",
  "key19": "cynsnbJbVQcdiCPDYTdxosRzP12Uz9HavCxXZwFs7zNtie6Eg7AJiWNGfYDwRYs4zxJdkkmjxJkvLG64ZHHTWP3",
  "key20": "3sJbhUAADk6sPBoht6jXuYxGWyBZfitgPmFRPiqz5kfQQesgZMA9MZ7ofifvWX7N3fBCDCwf8v3V2a3cDFTfLo9L",
  "key21": "5LbemgEDhgV79hF3sR2HKzFW4hr11JaJDozqLK15EL44MG3aU47XM1ytFk1TxFSmGAqPbFFnQ5tKeBZT3Y112qHm",
  "key22": "4WctabPSx9GxuGAWV21wxoidj7QF7XDjBQPQfubc4ma4Ecnob2kEY7X8aqz581qanGkqn8FvGQR13z3VGdKVBVBH",
  "key23": "hACoA9NiXkbtWkStKRAoT8497Go2wZGbN2DxbZWp8F9jhH9ohvaQepGtUEmPMnetw16CSmk85AtDVfVaQnjTjdf",
  "key24": "133JAtXLjfStxV27rMmuhETmFuppPBVkCpKv71uCGdubKHWCZjrKMqocPpdVo5CsMVSfgjoZxKLX95JCL1C4Rsb",
  "key25": "3cLfTJRX5AqYRBG4Y4dZamcnsT4wnTCwwbM9aQWfhZqhDxTkbARX8W61CGzBqWE7eGbnwWP2g6cXB9ELdhgAFy9P",
  "key26": "8DtBL1XvbS3hiRgyvjMg9oWDnRoCQRG8r3iJN7U77y5UP44pGQ618aBzmedqv2rUsMyeJb2sK8i37sFhMMW6PFx",
  "key27": "PpeU88eT9wi7vYD8B1SEdhYgK9Z7vsY8ZYMJv855rWyHhyjtd5dy6KxyraZXoG17dkHvNexxGPjpAGPVpgYAaPN",
  "key28": "25XPQmNkxuMsFwSfxPWubB2ciCbTbJPUjfQmm4ZFPQSUeuM5dPxZasyZ1mrNfDvrwVmTprGWpisqJqR5tMhAV3wm",
  "key29": "5xFRQffSvihajGk7mVRxZLV5u8VXouFeAmCdobYBLpuZxM7xCU3EGXsKTKVqWKLQeD5u8Pt2uihLsbC8UDkfWqfs",
  "key30": "2uwZrGhjhSvEFqsiBoQ9MUM9LnQYLW4b48C1RbhyHkzLcHuU6us8j5TXh9rzrsmjKZCqcopzLDZ4emrsJUWyV41E",
  "key31": "4kxdQ5SqoJzKczATUdUENqcZDaBg8wFxd9QPSHxykU5UiTiP2sQbcfvMQWKgSFD8dqWH8D8yFqbs1P7krcjNqbir",
  "key32": "3pCNtP41FT9Pu3zyAgtD74poQJUR4mVDoFo99ZtaLYAAquPxUwKWB6ChSsKgcBeUd4aYcekrNhJmU7ogM5k74evm",
  "key33": "3datVPB78mwFWsUP1e6VAQhsqRVBvM4DCmV4tmaSn3FbLbYJSFbgfsXMcLi3CeiwXDtsYpjPKmmVV2FjQL9V3cXM",
  "key34": "4AHejqvqNYUMaMa1H2V5kWg83mCoe44wR5sQ55mxf9GYTLvv4dVjDuYgr258mdBAR3w6bYLpMpicRGibj1VoEjnA",
  "key35": "33ShsUzMF13p28juR6DhiARWpTdA6LXD4npE4ABqDjeivBPAYAJN83sZbFwpFWmcVD3Ad1mwTYBixjwNfSzqkyrw",
  "key36": "42zzSBuMzYvbKpFfRe5GF7CkLmz1P2brnZgpuH2diMhW7L8uXy1LQMi16mfsgsckGT9Y86SDyRmYBhLfYcCMTnxD",
  "key37": "2J934jApLXT8Xik2bp6XzmckSUYwdB5BJnBywLMqFA8DQk18pBZr7FthzL8xRZBcgzgzUR6E7FLwb9ubfXbeZkCX",
  "key38": "5PbSiuyrQeLJGxh8saRLRH4UD1rNS1KZwfFC3BM8kgY4n1xNsCCpF7tw7Pv9j3EJgKVcNsbwiQiW8Ud7nRA5qJBv",
  "key39": "5CHDRoTws1yPaTcNVn7rh3BqWGBRpPDNwPYKQ41hqbFVW2aASkjrB4wwgpkgPZSubahN7nQwoJdgqwVtdpEusLyp",
  "key40": "2fPnRH3eCCC46T9C5PJ5vYEjj39pr8KATRmsGqv12ZKap2tHuN943yiu2DudDrSWJc2ew7CLNzCaYKMwQ3hTK9w1",
  "key41": "5uVTgHs941hLJgbXTgP6rfUVzxNj8qv59tTmehaxE972zHgcWwTWP1QAVpNHh5PDjbMvSkfra1tAC1aVQTTMsGyM",
  "key42": "4tVTQP9L77kbrCNDdisYpHAsiyZytctRb4zpxLbAQbLW9a1X2QgbW8egKVjDt3anqNfmA6F8tWj37WhbJrXTmm1g",
  "key43": "eTgbj4w8jf6dsmjhydM94dXpohbH98262dYFrJWLU3FjQgqAhD7UnUdqJFTfnT7iATjYxaNeJEbScoEm8kbrkBz",
  "key44": "2PpzpSeYTKTLWsKrU9mKDkcM6p4C3f36frZWqAvsoXXnRMKMenni938Xsdd2CGNNAUBpdAprcMbKRnudG739BdeH",
  "key45": "5ACFiYLA6ghnmg2rr4oBkvT1e5PNY9mDmCPA8YUb3jV6iRUGxgHZdZxaGLD4rNDvUMeHYzRftwiUZJnp825kfPTV"
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
