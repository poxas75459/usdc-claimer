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
    "5N43woBT9NwXp6gbykgsrU9oaMSYSYEACCmGzqeEXGLqVRo9DmMi8ojLThS4vov8VSrsPCnc2kiAT5jM6yvML64i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bMPfmPTjktADV6GD2PkxduoejPkszj6TmTpvrWekn4Maa8nzhJfUDbSRohBuv4bvCP5MKnrr9Eeyi4jc9syu84U",
  "key1": "64MqisnQQSvTjGt8yN8zqkCqR8oDmoLStgXrdgFsnkSCMjHNzzvRMo3q1geWmCCTqno8GjEEtbHguhMLhhQMfZM3",
  "key2": "5VX8SHZ2pibkLLVchnkDCkM5j5W8AK6TShAxKZ6DR7v73VBoAcaxvrQxrxmfvsAmS7HBW5TY7s1BSVJbv1qJT68q",
  "key3": "3Grd7SNsSMD2q1nng5247ENJqrFp9Y5hYRTAEhEWk3XTXNg5YJLmChw1JFW6CfExwtgCeJ6ynTWN2JhTznzZNXmd",
  "key4": "37Vu9n6eDnhvbDdwm4pSznxA3eA3w4XZDFHGo3KtBpBbL3SRwEi9eja9juz5qL8at6YdrTAE63Ez8X2zEhUrtwas",
  "key5": "4ZU5da5tDix3ZEu3dmqFHFr9XeQVN1LThJrhrgSQRwkRqLcwXNkiYDUMpsNT2fWqRG418h7qMkFeZn7Cd12WBW7d",
  "key6": "38mvMB79VhJtSHpoUXe54vR85dK7kFgAfrJpi3DAqX561nSobGEnwNKZkUcYMAN2xUsSse6ez2gTJhVtGLHPCJ5Z",
  "key7": "37RLJ9QzQ21g4kRNCnwde8iVo7QE3Wi85CuTpMAtmXYqezf2YUMyXQRqEoj3G6pNmctPHFQCq18mnRKS78q4vfMQ",
  "key8": "4vLBkuVkQQCVGTPGjz48Agf5FPKvRMMDF9VJV5oWWVczkxBA64eivWh6fKSThqoLRTrD3ZxfFVDDxFZxq3cR73gz",
  "key9": "4doB5qh9KtS94cpMcHYiQT8QA7Zas7fRkQJBKmZGoUW5fU6fVEM7zUQ5vibnVyQ7XCh1ZaxCCdR4hjNJat6iZVxE",
  "key10": "4S7VQs96Hhm6GV6FDQds3sizYBLwBUMhAj8YeaquCtpbCWbpNRDejo81wG5diWgVnPjvM1qUHad8iNpot11JFWhy",
  "key11": "62jJNPtvYkASZ3SRMNPU5JzNQKLiqGhzLgmYnZm4WKkgp3yKwj8e9y2CfmmeovPQSgBcLhSjNMXbmQu3LswVkakW",
  "key12": "54VyVTipZB2mn2VsEggoGMgqXjc2gHH9nKUDFakjWuFYefjuBwGAKb9V1feJQcTJQGtZPSvoH2HcsTj69NyA5wpH",
  "key13": "3xWtsB8cKwhAetTNWMDcv7TAikf84HbcYXsGudpSPbSjw4wyvMuQRMkgp7xLxmu3iX8Thyh5HJ9ZERrXwd1H799u",
  "key14": "3r1CbKmS4CUv6cgHZSM8NVa3GaTSZfP1rTeGE5TfCSVeNUZmr2vPjNFR2pFBKQoQzHcpa7ehFoEjv5MLm8TawoZn",
  "key15": "M4Pzv7f3JttosWUmvfBmChtXQNhAv9C5789hWnDzVL85yuL8ifwddXYEf6uorSYqWRC9YfX5qJoiFWbjesQ7QMt",
  "key16": "2VJVmVpkQAgv1NUqmVGUY6fmNudM3Sg2Rvii7K657icowjo1sEnztmADBHpUp5Xijw3MQyCQDPd2xrVE6msfef7y",
  "key17": "2F14Rm6Ga1fX6qgoRmxoLgeVAGz85wZHBQJ5dQZwvL25Jwx6m6guxTPUUqJPkCtnC7HFYCgo7fXtxStZSYjYRkAW",
  "key18": "2ZcZd3LyhtX4aVdgWRVJoxXTBJkTDe3ySoKJ2Z2uTNmnVDBpbc9rDMr7hY3RuXy77ahADt8FYJDd3xksY5eLboFk",
  "key19": "4THi4Wqg978oFcreDANUGwKVfgiazZQefQc8H4zQEPXTt7euoFBhsVRUz8z8APdhYeoXgeAVTzbqWMxGD62wiHsB",
  "key20": "zHZbP8hRtN3BctgbyJe3ii3aKA5QwuaPCWAYSg8fKmPgrdnmngkQXCj3r7jvT5XoL8H9bX18Fi4n5pgLTFmHm4U",
  "key21": "3XmjhkhQtHWW2vj2BV3UuxzXKsRF7eUTgxHbjiuypmawrDndW2d8RjBrFv3XtLeKjR3h15eZPLUg5nw5wS7qeYZt",
  "key22": "SzDptPFg5RcMrSLNkjWco8b4vQRKRBubUkw6oVJZJQnLqi6GyhMpfZ9QpqR5jCHiJAhhZ2kGDgApZ19ZenmU3Un",
  "key23": "5fhvjxRRj7iNPzogbNHRYajGhiQB61Kia8MVNAwR6rb8f4QXdYDYTiHcrJshXQuqJup8THAKvXsqttsG8Qk6G2WN",
  "key24": "3SfSKou1a1fe4YVp4TsehTyXePyXNoUzp4759JDfcBUa6BWPFTP73hW8omkRaYrpC31BXyu1kgz5zPPgJGp3e9Jn",
  "key25": "zuABp8EZYt8EzCUhsRFb3eHz9BA2C64ytDBS6RQzCGPheowHLgDGsResXVq3o389FVfJBmdQEnks2s72HKjZhuu",
  "key26": "3ejCsSjEzTUcDxJQqNhjRFA16ZxaFmapDsL6QU9825nPXowtDUkWiZG6VJXGE6PVj9oWEzpfkkW8DWdQP5s4c8u3",
  "key27": "21969jsEo2fJpG3JAui3jzzhpjG1VPVFvo7wbdtvi9Zk2UHLp2Mszu3fFqwqSQmjBHqvhDB1u17rtnK4z7uiEdkD",
  "key28": "2i3t91moo18FFiDEK2zNwhPzLMTLFc7awDJkbgbSFPrHH1RzH2etttWagWkeGR2vcCkeX9R1mUQVsTxPtWhUTkU1",
  "key29": "iYPpp7SzKNbMgqA9EHWYjjxaGucM7dLpMqMTucYUKwTuRWKzj3fc5Md7xJK5CdxWfJRezPV1uSCYpUeczGKmt4f",
  "key30": "5R4f4XeG3jptj9CdLhuq7n4Tq5P4Ef4iym8973vRdB5aA7xiZzX4GFV11iHuYZhoyM1JqskcniRyhwYkE53aTwP8",
  "key31": "55gRK6WwGLrhyxavGT85RPV11VsCjKKgCm4CZqR94apvWs2JgXdtsBgQNAX85yLURvCSK9THLpeJyMB8skgKEVzq",
  "key32": "2E8TLnNE4CfP3ijgx9c5VTCN6UAQeFKoShqzpykbh4ZpEwoGBf8NvqA4KfmYrcQDvE23ihdCbxSRfwFFW3562De5",
  "key33": "3XfgnjBnfRSwfPFZ1gp2uXSJZ434arcadzu37wLRTfkmWy9Ggxp9EmK6BXhcqpgiwjP6TNYYuhs6QJzRNFFskBSp",
  "key34": "3D3BsunVwgPquSwz2ZEyYjGvmKkxAXRZ8q723pYDvsYSEACU673eNiEMw94DCFQCAbNga6WJuhHEunznkxRYMWfU",
  "key35": "2nPHoCaDj7h2Ep1UvuVetpAaPx8NJNsq7cZi7d9JDTE9XB69GKzGBBmGTPRM9k5XeaC52wxjt6LNmrVhUq232ZBZ",
  "key36": "2U79Fp1y9A2EWvZkz5gbJFYFh3U2XMoFkBqj65neWGzzrVKbAdZTG3iCaCKChCKNsVNKedrScapquQDYPrGvX46u",
  "key37": "qJYykW2x8Z4JQdeaeECRzuXkf9aWmQF1q3DFCo1oERZu963qzcosjK3cRJgQrEGxj27K1Yo8gjqv8D5o8eo66jZ"
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
