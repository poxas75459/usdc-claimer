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
    "4c9Cghsm19codMddsxbhcpyFzYsS5VJW4yC8tBFLLxb7iaRiA8mvA66MWFtt8KWViTpveCeEdG3hbev26BhKx5xL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cn5bAvCKgGBvJ9PCJ9H8AdrAuh54HTFqB7jAx54E671zoUKtWoKnBqEtXQYCzcRA4kcTJNwWT1i4G99okZFbHxJ",
  "key1": "5UK54ovxyhu7YPaFW5PgZAPF96JnkTYiyt2uZKSH7zps4kRrmuSRNx6NbghSTqA5beGqUsKn5kXUBd7qjLn9GTfY",
  "key2": "4dmuX35Y5QMjLCvfQHxzSPi87rrU3RFd3ew4U15Z8bCdMjZR2aPf2hTBzyF1LBvNx8FYVx3WFgRYCs9xMdTRQSac",
  "key3": "46bGBjMmUzFadRg4LYyitJWjqReMUQnZ3e6EKAUoHKwMs7bddGy1tZtMayb55i3jebGQKiHksduPGHwHAbMxXDqq",
  "key4": "nM7DPqfne8NUxwt4G4qj1wefMsjTxYMa3877ZoZVXKRJ2Ka3NDisjN29qdZhsg7FRqxsr9TzSCqHkwT1w49HLpA",
  "key5": "fsKpcXrBxGBKgverVvce58DHp881mLxSJpDkcvXnF3ppzXunTDeoPSLWtoXgPkoWduP6mhyL4NPKqvE6FGyg5BW",
  "key6": "2zTy5pQynnRidTKoT2wTPvsgNXfRhnxCiPTC9yHjRrErzVRRyYDNXMEoWgCc1Qp3v68XRLDf3N6nkqwsPgVuYg6F",
  "key7": "2BduwkAjARa73L2yptZ4iNS1q6VTSKbLSwJTY4PAACppVPByPAQdznpeywXqSrja2PERKwMrk5cCvTqQT6fcuzU4",
  "key8": "3kjnYbbWsWStX7JJpmAyUe6jo4waAd6o182mXR5TyaJMFEBzW5XxNnf7x37AadC86Ejqz4w59uvJcLqg8SAsc8HL",
  "key9": "64gFJ8XGpJ26pxcTe2s8PPVcj5V17BjHSDNz36vQx2JXhi1zkcnWL5hAqPvaLoPnNPULXDAkLttsto6dQ6gLvZUj",
  "key10": "5wtE3Eq91sgBn5rCW4n9125S3mMGQPjVK9Su3JJcTGj9CYT7hpC5hukaxkg61G4gSY3Qj4RNxYHM8tr1tsj8aJjP",
  "key11": "5VkHPhpgeSwdRJq3gN1iAPaEjfGHBznaXhhVr4KvQQGwFAmqFtuQGXgjdfsyqhEPHbPSHHbjb6LonzeWfGAvwsG5",
  "key12": "3GkW2ghRrFv2Jo6W7EjZD3uotpcFLLmJwL8ke9xr2C7vmziWSUKFDR6RCgBxNX3LZFUBWFbuMzyL9zGAwBYS1M3T",
  "key13": "3C9hKivne5vf3iGaLyxYUBD8Zjag8nK6uYLAQv4GZu2tg9oSUyGSJKfk2b9QN1MDFVPTbsFFVP1gksKmPNhVftu6",
  "key14": "57zNVYYjecwe6Qc5nuTTrxA9sMbZ76hL1PFEGKqUgYSfdNmcPaJkT8yvFFxxWrcrC5TbsuffVmqe4bRBHVD1vDuj",
  "key15": "3TvRW3NXSA2c8keWcF7opPLtvwKeWGarPULcnwzzArZUfbkTb22NFS6HDTVL5AwJRzrczZa2gVCLeTk1hRLo77jU",
  "key16": "2fDpmbG6AqxjjNtRDvNkbTa9Y3XHcB7WyKWuVosXJ5s6JefP37D9vuYN9Z8Evz6s1XJGBc7du5K2dAuhVTFRg8kJ",
  "key17": "5pzW6CWc5eahMdWBZLHtKQhCnteasq88KnYbTrk23EtEakZwT4VBtstwKGTdZXA1seGEp9Z2VNJADKhdF4KHpQK2",
  "key18": "52Wd819hJoCBGLkgjXAwSVQV9rKD7BAmGDdvsnvbpupDw2YKguUVcpC4trpqnEhVwY2VZwKewVz7C6PAXuDje6Hk",
  "key19": "2A43SiLRb9GpWjZVTdSgbBCVZgKLkNmXSLWwrazTSAshetPU3az39mGgsuNU1X34DLEA7HLotLdrvSZfsxiqhCK9",
  "key20": "21tJhuhKkJyzc22juqSyDvHPZm9Uu69WZRsra2vsANYKWH4LFnZZRoEQFLvkScnfa4gy2hUhHNzcRtftkT6t1L1D",
  "key21": "3syoFyXqjeZ22msq1sxkbQ2QiDq9t8UMxnCVZfigoPoiVxEsMYk7oRFK9SFreK6D5rTFhFDqpGGfQrvh1ySvhmZi",
  "key22": "4keUjn7XonfJYWVymqPcCLeN92tTQ5qmvCg6Hzo2BPhyDfu3hznAsx5NcG2UDfehtzwXPV4aYJz3s3CxQVrxPrZ9",
  "key23": "1QehWcViDsasPRC58GH1xMVW4Pi28CzXH5C9fX51cA4jkW5ss6X25PyT38WNFL81oUHPHiSxV3bVa8tKYZqSKKe",
  "key24": "4A3Yu4ximmhkEfAqPxtjU4qqEwaUtTCqfeAdFobKmpVta3DxdyA6iuwykfxth2B8SfyN1Gnyv91Ei2a3VqTxZJ16",
  "key25": "5HsVuFW3X6TQrZdpqXNeLrwaYiWte5Mg5BYBtC49wQManKuZM8Bnzm9kbNQ7GMbV7ZaaJPEtZbjkZMroiVUt95qN",
  "key26": "5yMkcZHrtkUVjPKZHHrSJFah1fffkuzfqfauVGQpbPjmvCvxpz8nCAsSVFDxEFxAgF4DMuuQxLs1vUJK7cEXRt2b",
  "key27": "e7X4qX8FMddj814VPJcyGiurgEB7ZYkpe2mS5dXUJNoEAwhngVsX4i1CNw6gC1P57LhvwmEhWrJckWzL3AcXxvr",
  "key28": "58mQKCThXcqs4CSzUFohfiQz8Y9DbnPRb5mdxEnhaSFSBnLCinWLyP5ThrypEvzjuCnfwekHbQUDnVb1hzMqDivS",
  "key29": "twC1hSmuc8A7tuvNKWoNWweGRTm6H1WoZwfnqocHYA25GD7kGvqEQY4rmYeyd4QmTJFPd8tjjFmCHnyaE4JDe6L",
  "key30": "5Kp6Ws3cyCcAg6ATcLL3aGZDPQEwGfSDM82w5cctSs89NzMyeTMsWs1sAhcirTFqucX2bjNngBs7KgKANS2vieWL",
  "key31": "5k5u1JHmpTvLPAokFPPdRNUHXcttJoyhVdLu9uKn16EKQMhdYfG8c1ZLJKaxV3Jy2h9wHo2HUwPiA7k7ns4uQTB9",
  "key32": "tEP5obbn3QsAEYq97jNUq5V6LVUg7Hgq1S1BmrEV3WpEiyRVyHuNWPid74KY3zeiwC4V9eYzKW4GsbugGzdCF8C",
  "key33": "4Y63jQ7FSLeWPtSpfK2Wky54oaZAyVYFW45MJCbhSt7jbSEWh543XPgdEUthAbp57aYdLFCxTeiyWu94DVAUSpke",
  "key34": "3Ec2XRn61DHUxvWz1qoNg36ZHq2uZVkGsVpHnBMzjKiwQA496e3Wc2QPSwnRKgzMjz3EFbkSKjQqFr8CQJ2EgtZN",
  "key35": "3ezUuR3P8kVbTsTfARK8ALhRVzeV6nfA9ejMMguPCukS2dCjopuNLoEeF5N8LP7c6HWs5WjWfutkpRrKtM4AxUXV",
  "key36": "t2iRJAYxLm1jzCEuCo8pazCYSDKY97VFts5gENDf3spTBJEdbM2ZdMfUn2jJKN2Tj6N9qjW93GNdUZ2zNQWD5Tj",
  "key37": "65wUFYhjCtPKS6Xy7RNtNAT8Y4LkbW6pYk5pcZA4UAeqHPfyYj4oR2nTNk2UcDLNv3isCiEeGDXFS4ZLsRFXqZHC",
  "key38": "4CccuB9EbhVhqKUL6kYfo7SvwnmKVgu6ucnbq96KXvm2GQdaX4PfmFL8tKFJcqRiB5ztH57QUaEGNnUBCuAYiApQ",
  "key39": "5bGEHdzbScqVQCHC51YG5UWtN5GExmvRB2bwrQkckaBQYh4zeYTms75bbXu3svHn3GvDCsY7R7K4jVZCQUGTXbgT",
  "key40": "1PTg8WQDCsANTm1pEKKPeGh63aSsVfAUnM7yaaAimCFvh7DxpCXnxafNN4RN3FKp7ncPZPrgu2KfgRCWtjSPJv6",
  "key41": "VXAzwiKVWtJzRazHvygBUNrL6Bbr4YayCVw9ySc6ofXupqo2vdgEcqMhbCLmUPi7b4AxQFu5JrMUbSwHy5YTbU5",
  "key42": "jPjRxeFkUfBfLDPBEZkWcKRNMZFc1mQnwcg88nPadJycbpi3j8ofvq9JWn2qExpMSdJNckwZ5q6ktsxj3SRpNGc",
  "key43": "34v92D1fURbtbzECLbUW4bvK9PzJ1S2r3qY97DtWNaAwEFMm8p1ye86jrJcwYM7fTWLgnL7dWfX6cnt5pVVTqcps",
  "key44": "21PUqfuTWq62sGfg2kjDtpDvpkTxF77gLb3MZXiNNApuZjfYXPz7LMKQmGdrSWCGXS82PHowwkiy5JACduAgfsFq",
  "key45": "3BRbymBNCUA1joVkjSvxZAQdVQQAAapdCvGBJaK4ixhmh1KFAcsNyUQWgL9fkbkKukjJv7FkPjJjyZtngdHW9KMc",
  "key46": "4cYTjUkZTfPAxLGLgj2zcB5Ujr6strreaup9Wx8A3VbJYDuHG6T2PNuw8WQQ3NQWXTJeZDVpsMZYWvYAQSxuTPJQ",
  "key47": "2va5LTWYGBKTvEcuM8P58mJT1Tq6M3KcuDi2fnUuZYBQRJjRXNcKHi2pZPuUqPKx9g9JBpLz6iPkciDqmxMkBkSV"
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
