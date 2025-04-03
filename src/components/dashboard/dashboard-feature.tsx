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
    "4GLpsshMUzyBsosRgm2iMJ1tqDcsmwDEoQC5ZzPuSEyND7LquuFH4mJzhHomiBhuXhaC1qonToS5dYevXD2LHJw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Xzgpkmzy7ATpTXmVvRULAeYcpdkUEipwVffsXSFe2C2U7LkBKjDhgovfBHMdd96CGmcXMuKm8tRgwBHsVNobg9p",
  "key1": "3UeKDPgXGm4w2jTmtCtDHV3Kq551LvC81RfSRMwiSgMffMpEvZFoAGUoPraNtQk5KyhHq59L8fk3SZubnnhQ6A9W",
  "key2": "vaAStcAcFVmpR8GoBb3ewmQ3JaxwVxCNieRX5LPWuE8sz4MUeRj7JwqmZoND3aQpT7p5grJ9RYajSJ2NmigkFju",
  "key3": "4CbyiS9JPqSqJtUrNrV9uhqeyMFoEe6UNCZ5aGt7WnKvjdVgjb1M3TQZ2wMatTnVkQJR3i2V9Jx6vzS5sz4YGAfX",
  "key4": "5p83Ax8ajNfd1r6qiuNcaU56gso4rXdwrPmQcmz66NeHSyu6U9d5Z1q4eYaJBwBBVGHzosorpMurBiyrXAp56hDG",
  "key5": "4wnnwRm5BbfU4xUcXy7gwfNhf5MJxJnWAab8vi4WfBq7EDRPqpx94VS5poNcFFyXQNcT68fFaU1rsXpsRRf5P5pD",
  "key6": "3thg4kHMrpbtUUTKBrnw4fz7xNfhmGZrpgjEU8Q1r5Y1RFy4BvK5aGu8sfherVsVSXZAATwY3fttTCKHZ3BYUeyD",
  "key7": "4CW1vPYhYUZEaCbZGpY8v2gKBghKwFEY2M1iyuAqxU5qrgg7Jzp7xDtwtfgBa11LyLCiQyCPUw3n2mYuMyQxc4Mq",
  "key8": "5VWBwYzvCeVt2w3UsmNzS7u4qAx95SnPoRPZ5pVL1JsTuhTV7GvcB3VhzTPj5pyswso5T6KTBFFVXBZ6ZZqUynot",
  "key9": "2qEw1oHoLRGkAeogQEoBidrKNqB6MqUDLgbeXMSKnPWoVXN5zE2TXuS4y4KR2bHuUbtHip3ozAZL6g1ptFrgmrc8",
  "key10": "5vVKoWScFycXshRSzE3dXdfqwbtEdaDmeCoSqcip5PMaxBXSKWPUqJLAL9rnm68rCwekd3RgVeB75cxYYZUWybYs",
  "key11": "4d1kRWdmmsgqpZEKc4cNBYfDXWbLe3EksHCnPW18geLS1xNwM7wxwooVNgtDGPhtY7TD5gmGbgWeVMb5V5bfNUYU",
  "key12": "qSVHiAKnYyK8c2cDWiYL8oG5UKVU62Umdyp8tBwxfpUJ1QdqQavQxAeYYeEAvFctGPVkC7Lt5Cr8hf34jwR8PKq",
  "key13": "3B6WWZ7uTVDNkp7sCUP16Pa7DE6K6HiopfbR747RXYKJy8Lo5Q32j4XLi6eQfEKXwgm7aFKLu3x5yAq5EUAnuX9h",
  "key14": "p6hqqj4QBZFArt36nrSE81T4dt2epyhAP6PenRp3pwCgneGi2FZQHDR7bKiYrS18ssiQ8dphbgg7S9FfT5CGwLU",
  "key15": "3KGVas9C8wr6EQpXb2NJuAFV3GejttHoCGmiyXJcV3BS7hguNTdzvt9gUZWW1KuJ1uxx9Fcj3kgGL5jQkbMTDEwt",
  "key16": "4g5jNhNaHDss9S8s7FiUh8tqzyaJHbyYy7nwvmg9FMzPf5ojetNJGnpMzKMfWCGkcBA3raqrJMbDcvFkzmXRGVnR",
  "key17": "3HEH5CoSJNjA55iE8q7QY657A4VdCj5wy4e4RZFug3o4kjAiYNckTeQZF3m31QRyFTJeVNUEGcNWxwqYteKGvKZF",
  "key18": "3w2osLWZNVAWJzdncVVtsjUmnmjzriWoNAmGFgNqmu9orhKSppebzQFBX8xgXTMgzGRw4jsM2vRxpaMRpM93q355",
  "key19": "4VEquxdABhy17HxYhdWmyN6LFxKdm1J1bPXWhcaQHuuC5EEAqJ65qaJ1yHTzKwBEvjfCbCLYNhvbXdw5BJtCRwjg",
  "key20": "QteQrJWe8QiE4PxcyU1Hbd8u2VQ52gGMZ46HXMQ91kNVcegzo9TfVA3aRQt2AjaRWtaxYBtU3GKUysxqxzpJPYd",
  "key21": "5rGHyDa36SVF7n65KrqMqYbfJqAAAT4haimZHincgUSuAv7mMLUPaDy4t7jovHK9AXdZ79LhkbVSUvMxJVVvU77i",
  "key22": "21mwd3892dzDYLnU65rSmnoJ7gaXyWAva1Y4SVKBaNKDRF4Twkb3BNS5K8yJxgQ2bgmn5sJEZqxX9Q3zYUDh6K5N",
  "key23": "2ry1a5XhTEkQ8yJSv7q49PhkYsKmP7gTBPnoUtyT717QMDdBTBZheQWJBVbxSJLTuSWJas6nGyurosEQMZv5Zu7s",
  "key24": "iKyckxrv9TSTvUiFL4qXojbpJ62rvJ9WL4cujHNsTaHudaud7WMfhPbzS8qTkKHFEBLG7tNtsf6FoBw4Kw8oNSv",
  "key25": "4N1rLiPAYNDEina14MvGj4Ck15LrLqmhwhHKrvkeTNVYsMAEA6andnYegnrPJKtuUftQx6LPCGB7iksbk1kMPZwR",
  "key26": "5Ps6RMHLffjjVsi55SoYpuX2T3hS1CXRsSeDTZJV9Rha4xCA2XvGgLbVkhK8Xc9k391HA66LYy8TKuzNiZMwefhE",
  "key27": "46e2rpP4KmsgwvGJRuH1Ttpuatoq8NQhdwoRSAhmPvzmR9dNjhTUZa5snyqxLZd9DjmhZwepyLh7qAfhZoQubnNy",
  "key28": "5eax5DzCZq9t36Rh1UkdBeHskL1Sqbv1sJsjUFsZdEzVAavDffkHtaorqGaJJ16y8EweHb3b5ab6VfUZqi9u732i",
  "key29": "2kHJniUZNTCjjfJRc1rLpxYcruA7zwNwkGiNziZ59PHuwZp88n7MBp9oRMQw6r5ndgxUG7d43uRTbzMr7LzLtue8",
  "key30": "2oTjLoW6FWKYsUuwvtSgXTaTBiVRBRNZ2wBuvs7yZgWQyAN3rCGuyPt8GhStvWdkwf4e43T6eTMBgxEQgphyrPEv",
  "key31": "2otzRxu6Hsx2iUvd6iBT9AMuhQfthmsgKZwpE2D3pz3WumFzmhtCZpiFBtCDDVJkzgUQwsLZmQiQswu3XU5P78Xc",
  "key32": "u1ynkdHgj6vEWFsh746o9zVcjf5UKvNjtSzpDN7oG2ktSEQFL1N8wu3rPrs7bC1hg9PJUT5FKuQyNYvKgcnzpF4",
  "key33": "M4JNYexkZPAWfUSNsZrGRe5sUFtJ9HRVEExv21tBojcpCAC2PkbYvgHJgFHxdQgTWNGE9EcovTAkJfFeoZVvQto",
  "key34": "528BK3BLK5p8pjyYfC6zhdMQsWfu1B2tQHz5RvYQKhm6qDWHtaqqNAARb6qW5vzYjsUA1WBYS6G8uRCG3ygJ4Co5",
  "key35": "37CzcJGrVo6iybYLJeqC3uYH8QMVtJGfWUptfmZd7SkV166pK2GEcEPXqbmgibeESzqUEqKAGFPoM9jyBBnLcfRP",
  "key36": "5wc7KEpgWbc8Z8FHk16Fd43WPjXfA6BmsaaykJKSPrczYkzbeNscQSsuZAeabU1WH6NLWfdvRCaTEYGCjLbzR9Mu",
  "key37": "2E99ogAHBPAwnvSCnsJjEuasbFKVofvFKs5txRgirGMUatie5zFWzfEDfqMrSzzFoTND5fh4BfstZM7V3eWwq1Lf",
  "key38": "4mNufmWsbgadpc9pr66NY4NKbYFnkLHpXSE7bLrvHagwZRXMhXfTVw1R1dnEMn12v2WJmGo89FiZJMGGhPNVfgFj",
  "key39": "3W2fGj8CDGctMHPnX8KatKneFVX7EqnEkmWxtxtAMsyS7u4DcnGvqaj7jqU9xYpRGJY9teaXsKt1TUrt2RpchHNR",
  "key40": "4Triq3vp6GDaQMnu9LDZvDYA8sFp8EQm7hsWf5UUn7wm1YrnLFkbwjdjGvCJEyehSdEcdDqp13XJCUDHKUC5UgDx",
  "key41": "5cp1Rx9AMJ18wstzhyXERQM9RrHiLgrFCdkf9A6e2aXr48nJoqQNB3Suqi28jdVtkZ9aFNRrCvypaSs332PFfMfo"
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
