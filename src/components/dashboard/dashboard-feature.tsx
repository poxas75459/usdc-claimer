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
    "2V5SzLoQsjw771BfzxvoQTxXJvYTJUx4KmptnQ8ra5mjNtLtDh1TBr7pc7Jxiv9oXyi8wET5sUoErvsjS3E9XxGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54hGUKqukGnWTXEmgYmeWwBuDCCJpkSnB98DqcY4iLeZSYg8QagRvVVd8pSySYQ8aHtiHpy1ChFxRL6Jc2fYC5g4",
  "key1": "4U2GdzKcaU4CnqX3RJjodYP7CZLzxUoxzbucjFaNkrcVF5J31RGXr5Ad563h84NmiYmM7X4pDW1kfi668pN9nSms",
  "key2": "4YrPg4XQSHoUibadoxyvFKiPKRMzK4QToB6ddVZ3rrvoqNMzn9k3gBwY44S8ZsYApCG1ciL6fqaGr9uGKmnw2iB4",
  "key3": "2KBLnMyAqWB8yELKv3BZfwN47BCpjTM8hpTkm2qMwNc69L98pn6r88NsZWXxC7z6s2GhUH9pZQKvnCNTeyi64UWh",
  "key4": "zuuDvvHomedK1SUJdw39htKqT4uEquzbCusyqoQy8HaHw32QrB6npyC2K8CxjvQAT5u7DSTThBjth4ixWWbCQQJ",
  "key5": "5FKA3zkiCwYakTsmfchGLj4Uw7ay1q4wzstGYjk5wHkoDYmQXXyddNRVeiDhcLqN5Lg8osMiaXLCsYLTRcNukYgU",
  "key6": "2fDPBsT5a1DSXTf8U3UxNakxB49CePvAeEsiGW1BMV6mWzUsh1npAvjkTCsATQo26nFMTKhSy2UPPfy9VVrmehHK",
  "key7": "5YS9dzHYUjbkr2S4oPXvTNghQCyzwsKGZCNvCj57xSkBeb9Dtf1NXnY9c7YRtMJR3ty6tnRCDD5iR2ucBX6qV7AM",
  "key8": "2QW3Np2H9Y9f6zTP15mqf7LEEYNPxBxHTuwWxuxNtd5UTJ4SzEvdVC9afnMdxG25A9BCt2vvjZ9FFz1vxKCE8Sp4",
  "key9": "2tgFEwXuTixdWj3kf2tRWFVxsoJfvoUPLsWV3eNXHKZWe29LQhnFGhCCPXe7h1hp534X77HemBNUf4xKG2ek52hv",
  "key10": "h4M8MQHkcNGLQLLuvswYonqM9VSwxRBBwB46PqTazCjoMvJ8GhEjfhe1wN2Nhzmb2ZfG3nCkaZAHA73YhRr1KkL",
  "key11": "2K4Ts8vnBKgaxqL6ibwMstsGwxKUqVsfwx4oBYH4BxLCfKnA5yasnLXboiwisHCjAc3yXEFiAQVWsvBbBeWkeYRP",
  "key12": "3T4YgfPMuhaBfjr46MojBqB6D1pLzScbpY44GoQfA2BLUmrtCKvYxLWWrd8yuy5uHvm83C6yD1DYMuAzDjfSV4uf",
  "key13": "2hd6xDSP7dbxYVD8bmo12dMWHJGkkwzeDPGcvF6Jpv71tLEvG1cvihtgiETAxGm7e9nBDWWEnJmmmwHiTuLMMtNV",
  "key14": "H3CYWiosUKLDZCt3MBZ5AKdzk8J9uMhiXwdyncQBeQm65f13nDX9jocQLDNz3axadsghzRQeiUUH8TMec1CgYVR",
  "key15": "5mhYFpye9up2B9cL4rn22oN7khGXAezs6ZPw8QuJe7sSyEZScnd1D6yG91jyunf2STEYiSV4XMscdxMKvj7YyS9f",
  "key16": "5Ln7QMwBCwkkPDszrYdKt17BcSBt4ZqaRuSLLMfvD1NPNUNa9Ax3ET9V1CyAPNH2ZiBFGwSXrTbx3tnuEMddZVFK",
  "key17": "5TJVQFuV8aFLhAfBuNBX6gyaqLnm2TceYNvobomf6ngkVQ7k3L8jEmqgQDe6CmwQw1njRiKje3e5YkzJkXZV7TR2",
  "key18": "4cjt9pLCUBbvRnfDvv8zrZXAWwPK9iXFYMF5qiWPicsGddjzvJCu3buRxYCxP3tAPfyAGDXg79ktfsgD9AbeZM5X",
  "key19": "3aEcPwrS5a74kSgiRjTPVEdDyv2oUen9t66g5dZRtQ5VhF68rBTupVmSCyS2fycM7VoC2GXcMJJmExjoNt8zwqDF",
  "key20": "zEcMi68GoeiVwMs2C1dc4CfuwEQdoiU75jxtdrmhQr6cJLUyjF2kBRfXz4cUE4JVc882f7tGTPda2tD1z2Eu1JH",
  "key21": "57uVsAscTLkBb2yA4sQkkx55yJtXy5FiEXxi98mneFo4cYg82mcf6TgPLbRFapnYr7Zrva5qBQHk6W6xFZfQDpRB",
  "key22": "5KFS63BPNUzZLRPJxfpiU44cyKcdnjZ22wsJ3RXteXuLm8nVQCGYGcdBMsjqVkmyJbv8zUQPnkZGdR2GdRPwPdgg",
  "key23": "3oAXJwiGbF2vSiQqKKXmgHP2K6Tx1aCSnreLBzi8Yrair4D2tVV3CEkzdMJD8knzFFdVZSxBCUho3ToLGDroh5kP",
  "key24": "5C85m923pEniDYgQPd3fqUK6L7ihC3JdLG2FGjWEfw9KZz5nhbhGGrnHrkPdUjLbsuiwB2WCB5KxmLxvhGSHnUU7",
  "key25": "2TxEaNo5jyVejgpsYgzNb8JicDcsjhvrwF3193Bnqs2WQ5RWhMZCTfc6TgXTJ3fAB42UB7g14pHv1HyAh2u7YTyL",
  "key26": "465hH8LwDPV7nFQJZvuFUb5tbqn2d2XS7eE1Pfo4sgaGbQpsTVP6XLYpW9PYDWCpfGMEG4jJqqrDqPhV5XTpyH5J",
  "key27": "2FhxKhMN1WhSXFqYvZC8Qsr1LcGUjwushTXn3DDA7HJDUE83dq9kLr9MWP7tfHoKtx6Nu8K5atgfz2WouTfYzENP",
  "key28": "3mcaE2j3yHoD2cxALafTTRhjp4P1JxchiZ8i6anU2PF37iqoTdMTsh3pZvGJ27JcG66sbM2Sqe2ZBYEgLfE7RVcg",
  "key29": "3NNvTmpfWreLFAptTvUHVcbaFvqM6B7zRMy465osEpUw5T5hGNP5e1nh8PSdMTPpGRXgqAC9GL4ASuRnP755rTiL",
  "key30": "4Q6MJp17tyofRmEphpf3dMwm24QPmTeKjYuQhqQtMRkesXAXnrdXGvMfFtWyUpfey3JMQNx4cvYPB9ZjcKHzDzCB",
  "key31": "2HwvCTgWWToDUi72ZhdmkyU8Uw6yp4fY7kfwcLo1bWCq5KfRaFAB6S17188TkLtR5YUKztqeA713X2VYLWZXUwMa",
  "key32": "KWMcaVE876DaQRL3rMP6ncLdRGMSmQ7s64JPnmzGDiCmUjH3LoYVKawLBiBb7KYkZpmB6tqxGZLodo843hJq3tM",
  "key33": "5qPzhL4CQkfXni24Bu6DYTLM4trJSsGHShSYwfVJvpp5bZT7rxZFTPph79U7kca629MGiHHbZCHa34yHQqiC3ngf",
  "key34": "5AoghwEjVkdbywGUUeLMhkmA48kGP8eqyfhn33TsSnxre3z4npthxBbSojCePeZhGvyq1JBWvHRVy67kwmthW8ba",
  "key35": "67Gug2zyvscHiYTUZZGftohrNLJGwvfHktLke7kATv319F1Jst8idLmBUkX3Nz8efRvXkpPLGPGvGzRuYYvb6bqY",
  "key36": "3Pw3d4FnwCuA32touf18EmUbpYvxeB1fcmsBCjTGpn1Qx9vEskoCb1mPcS1S1AWT8XzECKByT4dqNM3Bc9sNsMj7"
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
