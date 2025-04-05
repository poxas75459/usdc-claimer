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
    "4Gz6LLs9acLKw3Tdni4Cjm6yM5hs6xKhE97LTCSLdSeAELVHL28jvgoRcmziEmCjLjcjsxoEXhe3DXXsf8EKnpu4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rGtsKH163FgoUEKDzDhEhvSN4NWorMfs3tWR2bMc2qpsPJc8qupFaXEuJMzbfGEmKSD7Ye4En899heiQDLGpjUZ",
  "key1": "4opscxXTFkeQUtkXFK2x9rSVffayAZrBKB9abhYBB1tMm42P2eiCCJMmyp7kd45HTUgHvuFe8S8sFAf3Fd2Y7G73",
  "key2": "5Ez9qym68s86HJPVAY3mLRnrPaZDXjXRg2cYDswNGw6WKhpBVZWx64hbgbreji1ddSGALB4CUxUSAmAMe4CDobNx",
  "key3": "3HiPygBciY622jQBeKsUY9DWT17taTtk8q1uVs3HK9LtJcRTmS53BNhrqbZmssN4gTDXPkJukw4GfhnVbs9Kjp7r",
  "key4": "2sKkbWv1YnmLqZDcr7UZ2PEShFpbqUMZP1hQZ5diVpAKSj29UziDSAYUtKPQPzU414CuVx26Rdx1ryhV9mpnzHCS",
  "key5": "3UKpJqPviPqA6G1T1LsggGkcNsYLcjF49YKPkiSkAJ4E5NjwTvWgGpo99QW3q1ekfyeTh4kcMu86nfR5yhvFB2yK",
  "key6": "4QQwfguvBC39S2QLaiq5tAacbFUryaqCSkRGrSLYjRkQH5EuSc1uTwttyNPCRxJHXYZ7QXqxFnLtDEfcioEVZPWV",
  "key7": "5FBabDtQhfdFv9dpPVXfsJShaWHkNNoGLmbNgfAaU9H25ZKvAWQDyG52c8GBPXcgWeGh7NHJGesYTQ3cT7pbxn2",
  "key8": "351v66xhzJRMB6KnAZ9B34gq9NhKpR9wE8qgdoPyEhcchAMmvQqZXfxN8kbcEDZqLVYbbcTVt9pnpCbtuXaLv2to",
  "key9": "3e4tCtLjW7eQSZZZNmwyXPDYr8PUEaafUDS5EyNjubGRUpWmV6EMJH4KqVHEV1NmKcXMQyc2BNnSTvFWRvEQ3XDR",
  "key10": "2WCpFVbdzFoeYv71U6ucDBG9V1WpvuU2Z76yjH8skuaWtBuycsi6gS5SR7F36SuycC5yKQyBuBQSSuxiK21TLNqp",
  "key11": "4WwkKGUboVY1cMar8BPt8REoweZM1zTfiqzVrswZHfMAaUm4XUMGDeFCnZSLsW7nGS1LjHwTdzssnBhpqWPLa8Gt",
  "key12": "2KsKGbed4p6sJnRma2rCZcwj9k54KZEpuGqeKWaPEwD5poB3KX7jzMmPTTvW8SH5g1ow82C5Gz4yja75ExBVioMb",
  "key13": "5Gr9aeWGR45cq1ptXoAAyzvk3dGw72PaNPtosb3Z1kxmcL4kEeURmFjKAM7vNrScZpVsk4tZGqZBC3knxcgsX7sn",
  "key14": "31TKWSZtgKTMotj9s8o7Ndmz5L8jv7sqkypPbKU93dW1kUxvWtd3o4ztJKZLjpTvrVhmJSpGk4VcQw2nzpyzyXs5",
  "key15": "4xHumC7vXezonpNTWMzEknYpCVxjbNzYsba58HfEMJNkpy5QmFHHcd9HSiwVCfVLTSURo3SgtnvwdsR27Rk7uLqj",
  "key16": "3nDKH1UbmW5phyUnvBps5tpJBWMXhEBnHp3r9vAafbVnN6CVhgGHcxNKCZGHPiDKUPRXEsFsuBRWCW5aeQj6JLwm",
  "key17": "3k4iCGMdZ2BARc1BF3TSTQqHQVXGsTyoUzLr1UopqpX879DBenyL3Sz4FJ3Pfi6jgdSuXurntsu5fq5seft6MDDZ",
  "key18": "tE7JEStYUFucWXC5E9tFymGmX4x3Y7QtXPjjJKs1yxu82X7sxDXRee23KnHZNh5co8RfMacDtzptAGJphjxRQZf",
  "key19": "3Vc2NHFFFx39DQBPnizTDi3LhDye7XKfT6ZphSkRnXBD1ZxKxZFd15iVHyvctRKcwfBbQ5Wj9bbryriVBkMGtjY9",
  "key20": "2FwkLujbBaWFodCJm372NYo3Ruf1NM7yj8AhjqjDEErxbH7CfTNJzXZEJWMRNjGfPREXV9JVXiJ99fzjGmeyyhC3",
  "key21": "DUYaspjwj1DWvEz25nL2BpR4NCHbjVX4DytSQHtPY9ezZttr3axq3oxUzTEnyZpviLb5B6UQ5oVZT7Pxcp9iJdf",
  "key22": "5i9coiUm79smiqPgEbKgarzfPon2gRAfpqAz2HS6MmifHgzW5xia1ErUAKWC9thJaTwLkXwvB9LtkYNiTeTm8wbQ",
  "key23": "5KHZaPE8rR5xhdA83aASG2Ycujkv18iPGxqjADoUk5La6KZBna6A2tEAEASmuyVV5ojxY5CCQXEfqK3U4kB7XkCf",
  "key24": "3NGoaBFr89FBVDrUMZv5fdNue1PjVZ8wrFrBwr23j1mazfbdEKAtbWkGLMtmsumWWKisZHRFFNDuYKpxrRyaZWWP",
  "key25": "56LoTZwh96gMU7V86JvBbqfj1emRYYcG4kUwycSDZe4dNweAWQ8AAERSMJjN7XsPHw6h24kzPBRmCfgcm2W2BkaR",
  "key26": "bXdJ8pY5sRZ5dNaWpoqR1Gtah7ousauZBmHQwAFfdD3M2RXnNS1GrU8q1gSippJinVyffHoUYCHnxttPLrwTaGo",
  "key27": "678jixQj6MFx8FUqYXRbcyGuNvSWqJNxYqvLQeyYmL37C1tMRV3dxBQiYNQbowD6v9geg34XNygpWH9XmaDHXMYf",
  "key28": "31unLesz8MzJNp8zJXrBDHFy1QU2bf8uakMX46HtLVyv6X5htpHFoUKFASjcxWZuPwgC4hVjmMGHpsUWMJycMVhg",
  "key29": "5ZEeRdYNAHr1bQ67xcvQEvEu7XzvKaCoGB8ZvAgkJdyu36BHXa8YmmnbDsqXTvJ4tKhnJvH5u4fiyb9nw1RpRFKc",
  "key30": "4z99fwJRVTm4AwuNCehPGu1yWaV8fsmVJZLcQXDeRSvJ8vVpgpHGKboiY2uJisfnAanmuMQkvptgS6roLfDJNwty",
  "key31": "3bq3J4Eexm9isE81BMoRTxHvNQEUYXonvSoKQYokbf8bMU9qZTXbH2PqQaNspUz9jvfUXE5fN5XAwsQHzcPYqox7",
  "key32": "3jYsxGk76BnGyQ8Zc24GYgPkpZBg46mxG39nLHpRwdzbPQHXiFEf8uJwHP5sA6Vr1WJDBVWXRru29d1hhFkV2c1M",
  "key33": "5iHXWKt4vvrgwwqfmGdTFKnK7Ctove8D3uWijo7P1z6JqY76G5yTDpcCPuvwe9C3GQUcMcZ7snBG7c8rGuVXmY2M"
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
