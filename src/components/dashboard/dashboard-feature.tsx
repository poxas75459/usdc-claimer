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
    "fXBG78kbMxc5EvfadAodFHocm4r622ChLJuwBDFAEL2UNRveWURHACw2c6TD9Ho4ZVMx6nQBXqysmimRxox8DJu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sLaqmaYXbsFE5YfKYFCgLtpQDkB6YsErsXYWQPo6xjGbVmULCFd4NM9SU18aK9jZidF9vmiQD5kftFG7dckYAEZ",
  "key1": "4evDKPRu59TUHguqzJTtEVjbvSD4U7na2DDTad82xiGNQ7QcAswEpvDmgoGXNoqUnaK39U3T1hD1LpvZkLSZpw2Z",
  "key2": "3Bk4wFWzDwxQK7oJWKTiLz75kLNZ2GsgHw1L5rmeo3Ln29G8EXYfNzzgbKEugiDrauzBoMXfP4mA6myoS7B6PYWn",
  "key3": "5BZRu2pay1Ur1KFkDHnYZgrB7bYVEk1owDwibjpbruXHRWFTVWnor4tfP6QQqrqcBvvtNsSARohZqiLcCrDMaPr5",
  "key4": "3g2goTwRxLzcCpJXuHfgRoQXBuMYiUkoFN64gYo8ATKYaPRqL6TLQPqPN5JB7VyfyybENLeraEYD6afcE9mkry9W",
  "key5": "2x9HgWLLkqAissagVj6YVaR44Dwr3d2qfYe3CK6D26y73DSZLzmTQMf5AHmQTjpezQBUuMX5auDDxkWafn1q15GY",
  "key6": "4Y1LM2qYQFbn2DoJmHk8WYdt5xdMVMRjNwpHGgwid2xSSgPkaKCE62stRUwuk8ofTbGZgJnJeBE7zWLreVhzxpN3",
  "key7": "2Wn92PqLnFb95DY35r4Vy2AbeBS34JfKEFSdMv6m2ZWTN76Hf35HsSSKb1ke8QxQxUd2sSPcjBgrD7cX7UE22zTo",
  "key8": "5mMWFsz2MK4QnZTUUApCPCkg3t72mHsTpMKduM9g1QoHSSPeKM1WuADRghhW3sC8awcPrN38DcBeoiMteftmseYF",
  "key9": "63idu3cXbsjY76vJFnUQxeYC4EVjceS3aeF7Wr6WRem2KmZxD8kkwYq25Ant2fmeYcAMsf7iRdSCFXyQibdzQFXY",
  "key10": "55jiHAvPnvcCkmNmo6vPBprZFtJf3Y51RVdYUGRUYZSmMDxLzSXRYnbsrYKU3Z2Jq4DahLYzxgpaF61nZamspX7j",
  "key11": "5fNWaLuYozkAzaARwZx7Qgm4CTFfz1mSYbQ1NiCwVzMYAGu7uPrnkS9d3FUxsbNmvqFNVe4WVAejUBAu1azWWFc7",
  "key12": "3zHbxFrRZeDb3Zy2Gh2K3DwDxRd5Uk6gR1Dj6TBAvSkJGP4BGv7t4E2cRJUGyGYPTMfbnkPfBo4doEPv7wjbLYgg",
  "key13": "4Gaya9cBCzAxC3ZmCFgLSCj946hSFL6s2Bzwm1ceCJy3mdUYn4UyNSNpQVkCgjExPWK8QPywiZe7ifvZQwuVN7C7",
  "key14": "5M5srVo4dWM83sBJWQ81YeTYxmvfMveVYTPvahuGMX3Lb2HNUeXdfL7xN6Gqk54LhBUBybQeC9YsQ6R4A2yffYAv",
  "key15": "4UqDCuSnjNEgtn42HmhDBK9GT74vUfFDcrtbUowGTJCLUnozV6Man1JC1xHcBRdtVcqDVDppm5Kf2pAjWZhx95ue",
  "key16": "5cDe365y7SSBbHcFs4NSjJuznqbAVwKi2NCFTh6gQoU9qrsrMy1TyRDNft5ZiUWVfcf38JK1WJRdRxhCA4DPMjCQ",
  "key17": "5CkggsLLyZE4BEYppg2PTwYMveCV5WVyBm2okakR4RjKs3t3JuNBToaC7DvqVkSdH6NLFkVSKsvFEXJpbRG3dzZi",
  "key18": "4RqMsTp7K26dzFAWLfd6uqaeWA6LfGy9WLyCmrY8uFEF7RspoDdc6jMpxaGKDPNMDbyA5FPZbNqqYP9qNXJ6pCFo",
  "key19": "7aeaJuLMvG8deTiDuvUyD7hiFJ2hGf2AQ8DMR3ZxLAgTtjuC9RkfXZJ8ZixrLyPLiVyuzVaZkpgMqJpz8nUswro",
  "key20": "AzXSWquAs8k4zaDVHpiZmSZny9C2jXh4psxuSRk5hJ6DgxdFsYaVm8Qd3rUDbTCWjztGJCqDtdEbPKknTMm6bxk",
  "key21": "3AvRNr9xz4pVAUaW4EazbMdLVCQ6p1TfSfowBd2bajjRYXS12AD7KULMjZfPctuEsXXdReMC4KuHavAyw35aRqrN",
  "key22": "3EvJV16tKHsF2njgvBWzfKnXDWbfeiKmxuYigxFw8V5DzMKd5yDKHnDnTAjrkU1zVRDw9GUQRVEcXHsV4UsoSj3n",
  "key23": "5SumBCiXuVqDyEvN4iTJ4RVnFzSboTgSrq5Mie5VBTsXSnXAmFTQwZGZ5dLPbFgYgKTFBT3NyYnUFv2RLDTHJBsf",
  "key24": "4QmTA92L1o4gVPuR1ciRdNDtXwDDD8zYXxJy46FTEnx5MQK97MRHaeYHgupW9WG9yEsv9MRpB3uokAbGsKkZEbD1",
  "key25": "4oXnMshPgR8YanrT8J1HL1m5KcVehhKuUBuXYtPtqh59CGCf1a48q7HuntmhCsbGQHmnWtioYPxrWNqGqyTQFTWV",
  "key26": "HtTRsVcM11HUkcaJvDd3VFkRwGwjWiL6ei5HqaZBJdvnBy2aS32VxdBJm6yLejLsP14PkEuWjLPBuAw3AKaGkdm",
  "key27": "5XhZrXcwgPwDqgtLueVLifuB3HYjb9hpcgTMJkjYaRXjKMGpNotSsdoQKxsXxzqW49BhcG2ZfiCDgrMv2ZVZkCny",
  "key28": "3UDGUmfvxs1v6HbrjTxWejKCaPK2hVqGEuYYXRkGo3XMmTYyheUK6cwbmhoVeMJREkgEdoufmQg2NgwSVUP19j5H",
  "key29": "4FJUhCU7T2hEJLPYCwR6T9eNt1RP53RgFjJBqdRG6DJLD7jDWNnox5CfKrE5LH58BBwTNnPf8nMURVtb36NmY8NZ",
  "key30": "44zJ4pKZfiQacbZ7QBynLBjtV2JwC3ZxXxko7P6itSuJYU8ZUjryRpwXd6Ku3cKqvQ6AmJi7hZdXKzrPx7DrBs44",
  "key31": "2DeyXr8Uo9cbmrRM3kZXxPUggv6WzeaypkYpQmKesdASBjKgpCJDgGtk4MsSpMjbCAPPvAN1KTYtEzu8uacxvajW",
  "key32": "2s9tmKfKuxxqXasrntV6fTJxtVUWZ7tL5ufdsR4iGdJfzC35QuUiFEC5xm3Xy2uN8hvArv9GGrHJYSpL2uYMqY2U",
  "key33": "3uWuhts9N4DhFZ9YHckrsfA8wzVhmwxbjD8qzyX8nNiKrtrELyZ7hDAyD38zDionps2nDRXiwqMWYQTCJ5UKZ8od",
  "key34": "45A5boik33jgvy9HEnNr7nyMG3cN1UP5cz19mPZhADWuUbdX25h6Zv4EZsuym8Q1h4ZxHDWYqh5kWF42QHYQw73L",
  "key35": "5ztrPw6sYP9u3w4yzupBHgc9Q9UVbhvwQUiLTL9Bpf3BpcmdLcUNTb8snRWUDa9q4rrnmpCoiPcuRkBDaYUDyLhQ",
  "key36": "5W2KQn6N1d9VM23Ym3K5wCiV7FHm191PDd6a1GT9kXqvjuiJXtgUQcBwJ8Aqb3VgiV9xrkD3trL5am14JUDYBDeU"
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
