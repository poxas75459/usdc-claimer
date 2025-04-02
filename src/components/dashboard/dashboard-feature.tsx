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
    "uskSZTFfVVBUJugjLCW2pHULuyLwqTCAiVGa4Y2Xi9MNzFrNKXGn1vCrjDkEBqDj9KEELka65sTmwmKXcAhQdK3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zHk3JQgi8oXPXWQh7ZEcspkRAVaPyLaisRYxLMkQ9N8Tfo4JbqWTfbQkbskLpuNEZbPhfMVxVitfKNTGn6cox4R",
  "key1": "4JzmdrcN3shvesM53ksuYzUNjFZd4fh3xuyDPXVzQqWnc6899VUaXPtQME5d3vkGsan8m1UgjM2hgD4bKQdfp93T",
  "key2": "37PsG2NCWdLsyYBxPZjQ2wragRsEQ1yg2fwuBUR4uKQvF9D22J8fCtLyevPALzAsxqCKvE7ySGYfGSePWhuAw7Ke",
  "key3": "8obZZjsFFfM5nH2KxUtXJdWE3FD9QyfWjRcLZfjcMn1ATHJ8daXptWVd5bKHH1s6MjYweJBfeVU9HSWbUBi4iQn",
  "key4": "5EuGnWdLYJ2EoF36kj52du5v7JqD9uEjjxFfXPPtvushsGVsVEYX8noW2uBUydKaA3U4ye3xmcyqXVEAsWfK9rf2",
  "key5": "NwjqRYeQDuVeFyzBh56y9bYH9Mm8LQjUiVrJnLGWtwieXyFYPcob3HXdWKD2LVnn3528VNk1gdQcMvEPD6zKbBQ",
  "key6": "wbGBLuHRAsKNrGkx97YixUWXSLdCwNkU3sYfSAJ3AMENkGb3aQumUqzjQa84X1gzPRoYXC7RHogffTxY6wasrkS",
  "key7": "ANoLQdq2DtLXVkdFDnumNTFnUv3qn8RZetzQ1nGvbzg2hqkQDBKRBAjTeNuJHSkfczhXVHdcdQPqBGBttiQQJQa",
  "key8": "3kad4Z7Ts55StjG9b5fv4us8Je77ZNSF4J1ze4QLPtNkFSuyy325cibApYvzb7tig9rx9wSyqXCA4VLJWXTuD5PE",
  "key9": "65x1cU6u7wHHCNdLr98ar6EzH9MFfY2YGnxmKwpW3TiDC8Gcy7BCciAmAnYdeYxsnoTaVuh4fsb2Gh5XZ9ahBZcr",
  "key10": "55j2NQdXZ6gkJmYMrwkYTTXny6UVWZmkcmS6ApRa1mLzCKFADngu9xnWaRML1DD3Ff5s8b73qj2d2r9qHdkUJaHK",
  "key11": "63YDbQRq8GDuwyUSRShRsEokUnfZTetrTtecvkscbFJeCCijWCj88RB31m3ta1M3T7dVq3ACsib8YeaFT2sLcJos",
  "key12": "4r6htDvXXPjAtLSwjjYacC4xmmHxqKFEc3xuDRiw1m4QhD59wfUSUiwDBgwR8WgT6hTigz5xLzaH8TWycFaWDSb",
  "key13": "5uD9tXLVc1pMB6Z2nK2ECfcBhGwFVAXiXxLfiFfDQX4F7rToLoU1sykfvrXAxm8QJV6FdPe4nY1icYKRs6yHWqUu",
  "key14": "2bBFYdhKxfro1YcLak6STgumzL1rk1MofkYHk83CDiVk2TVAWqC9NYV5h5PiU8xGEtbpfmWhYaBgR9XgQHv4yd2W",
  "key15": "3wSSmH3YiCNpyNWze5mZrjnEhxcRyHNoyqaN1t8cJjYop5CXPthPnC1AXLfDMNYpnsp2YFrLY4Mrq4rLQiA3Q2fD",
  "key16": "5QzSG446s9bL6DCSdEuCRT2S5EZg3Too1RwWyDQxxQQ714vSMDX7nUyvsf6tgeyS9wxk5hZ73uNQMEvFQJbjfimr",
  "key17": "5ig7X28MXXcAMT9guxzq56Z1cKLbJTEShdtjupwzxvHHRkdQ7o4T6MonsvXCJMXwpLqyUMqEibyhePxsCysvmmwD",
  "key18": "3vgJzY7q3Ds51Ewp2DC9VrLVhd6HJauBnq9m5EsRv4TMUkYKigvbXmwJWkZBFfjtmhv8vvxj79ekhAM3zuW5Ge4s",
  "key19": "2FCRYgnFMvsPkqmsWxdR6mBsYpX3QdAWz7ZzTqBhUGffYfRwUd1cS4djyV2f5712Nzib2QGBRSoV28iUjQCnJ8TL",
  "key20": "4ctow64J41L1nwGi6ieghADbhsTPzvdqC6AW4GoybFZUPHgnF3m3rAtvuZQYdCefXivdE6HzVq9MdXjFswZuSgF1",
  "key21": "5JcVyqwNgACpmkSYhk3nZZvnwg5BTwLtsojLbMMLYj2m7czPaQk1ykDR6G6kaFmq3PenGcu8Ly8N9hHdpWdgpZR",
  "key22": "2NwMRXVxFhxDQQ5ZnwYgP83Ejbm3sZPufVw6ZrtKFc3VCjRv6gwXwXwrFXgqKmw9RAQkb9LChuw7tA3CzBcJNUpD",
  "key23": "5zVbyWqWHnmLNxtgiMSmZMUQhMXNFE5hFg5LE3t3CgVBSs4NydDMzKQqcMx4u5BJF8iXehnYfzwK2WxSFd93NWbh",
  "key24": "eo2DBigTURqurgL9GS7N2jX3wNGvqVcP7JHD2ZDtCaxJfATDcQMrff4oyroxE5aqFnu5D8wTh7GkXJZApmvoWBK",
  "key25": "3REYr3btqgvi5isGxyZMptj8T6nNss3kXsC7HyVVGa6dopHCpMuDaeHg2zfZeq4fJYuABNfiiu6CeBZpfGzPccMb",
  "key26": "4H7aw3jGKCUoDNe8VgwmcRU6yC43i7D6Tui5idvQy27MQeZCdvATiPKWpQjMF5QXuKPDubtiEor3tfrQtLGSC3xd",
  "key27": "4L1D6psZPX9fg4hXTdfktWNudjaeQD4NyCWonpPaBbvjCqSAZgk3h1z1k6ogFqHEADai7zT99CUmxWjqSVoeqzE2",
  "key28": "2hopdfoZ6UeESiA8mwcKQj8Xky5Rtd84ZKwNyTEcWUbt3cvpuWK5fnRMcwL1d8rHoH7vVmfG6TMjNKwtdMj8afRN",
  "key29": "3R3u7NvN7UJa1Gsex7n2r4TRxRwyFhVA7fFv7b5cWM3xKXKAU9aRHHntFmD6z8yT5cZNWyCpWGvj45AEYeWQkzPr",
  "key30": "5X7YByotj8XiwqkMxkeqMdU1FChPyrCGuoPCcxBf1VLyv963S1WxKfJtV4XHuahqGz7ibNkXxPWJGxDNQRdNYGwV",
  "key31": "2TfYe6b69afCBmYKaDPsKNVMhKQTL2vPXJLtKPrEzZouqV5mqzxMWSDYgJx3RRPQ1MMApQYFS3FjKPi3Y8BNyW8H",
  "key32": "4TKq6rQzpe37zV46EKjhk7Rf1MpKmjqnpcN2j64oUAr4ERRtEUEeWin79KewoYiL3t58N5Zp8h1xsepKtUsqD77p",
  "key33": "ukTMKicP5STobxnsXMNmQqbzvqqz8zG9ex7hMixkABGEDC2cnq3ygKA4cD7M5vRCfSd3zja27xHZCAPyjd8AYn4",
  "key34": "2BykVBjXuBq9NS7ud3gNcRJmQGYyTuRTCi3NAL3ap2MCHFuUq8sCDBA6hnfRwkPDFTzuo3EFq9aEUSN1tpzxeJMv",
  "key35": "3EJmxGqL69fQW8mzzU766wYV8rSCL1N9daXB1MVGHpWdV3aefTJ7ZjqKTPe3CVqyMFUq9rQgqjSJ5sJGWDZxeZpE",
  "key36": "32Rnb1QMwF5admbBbNbyqm1ZJvj3FHJ1X4wHenNBBqeoZ84pWUKSqBZhi4gPZhjLuCDpDT1hrUzUkNMTadjxLCnb",
  "key37": "1usM1qiXydtq2Jg7R4sd9xx4fDZsYw14zayKJVw7mzU9u9idicrkHSQj1rpjioysT1JELTxasyFxPY46mi2dxWH",
  "key38": "2B98CgLHH7QN3HkJjxvVTf58oRqvaUaCG1Fe1zktZudysmRt4jiVKrk4WxNpDfBw1bHkeeNcHqJmWzV9k4ZJN6AZ",
  "key39": "2VNpHpcFe2ujcuN6479Wf8AQGJpFbi9aWxfLHCb8bpRa2vkToXkPrdH1APw3dJwcy2DJ7goArVFs7PFr8tDemQD3",
  "key40": "xEacpSJtPmC762gWT3rLACTtiu4XxSmUFiRoEiR93zn4ChBGtMfaX7XDgqe71W6wF9Wf9CzbPDPEtTLm12kZftf",
  "key41": "3e5jbFqENK2YDXTQtcmQa8WUMrrEMUZ6nWbY6aM9KEn5GYpiLPJeY9EjzPZGt9giLy5cjqbBB4PEsZMA7sKgj453",
  "key42": "5hnq2HABfMV9o48TbyCBrGqQCfve2B7CU62npaDtPEsXKXjkWts84EBqiv7ShKTax4Pk3Lry3jEpKo6zd4iJREju",
  "key43": "ppbRWuc8NbnuJQ1kyjgbzmfoiSqkrZSwpXk9F7YG6XNtsUC7B3md5jfZZwLppEPiBc78GNCjPDjojFqHytpAK4L"
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
