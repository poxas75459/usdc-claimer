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
    "5vPEyz3dRQmbF6AekogSffD2ZaR8aCyELhy3VhLbGVdpSpqx5pEi4xNZL1xnrmQbYXo9RvfGmKCALxcfnQtph1Am"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "567iBemdWkAPXgYAvBH7HRP6rMnSM1ZBWZGz7bugawN4MGVvoP6yS3jVoTjcTehHvLDnZwHMuqvRoik3sqwcrn45",
  "key1": "2Sk4KBu9uN3LYkS21v347Aw1DJomQYWkgS1SCCPnVSMSRTMTE4vTwmZgaHgSCLH4WfGXAgzZ3sjfFhiDhFpQW4g6",
  "key2": "2tQZioh3osx59L1AYSMKDno5r4r5yNVzqutTZ4956i2zg1WFE82eq5x8CFwpB4eZHiWddYYf7h955UxqzPF2TDYj",
  "key3": "3eFeqxVbzsaxSdnubPnYvytAz2LsESj6ZXKiHrvHDgUqfehL7f68f5sac5AJEaUJZXs7UgneeZEz1wWDEafEfZ8F",
  "key4": "5gtoJMcwJsHMS7VYNxD5kguCQF2b4xYVvkuZdShUntVNwDdwC1RmDuCQuRrqRhj4gd6u9XG6d8Rfx9RF5QTeg5DP",
  "key5": "3jwUhfjq8M6btsuZqV4o77p4ogUDJGU5SdbzWsNx932uqZip15SuvtP7uWyPp6JscxDqeYRZyGCjtsh2HXuD5qEh",
  "key6": "3RPYSsUzrzPu39qfJHBSAFeLtfNv3hgfMfzqg5ga5AR7mDNXUW6edXyfrV8DY6ocRouXh3V2MLew6Za5uHdd2Bxw",
  "key7": "59ZdhUfN3CgruhK7VseaDgC8f5EJDUF3bThnPJf4TYY6yWWd6xbe9geA8cu6Xcqd2Pft3bCNJZ6nU1RZEaQiNRx2",
  "key8": "44Mtawv6XGY9jC8Rs4VhwvS98aZtGP9R9QCW35VvbcpGKJt5ibHtKPKCZ6nn93roaLfhVzEw2yJmtBmEvCgm5Ccm",
  "key9": "5QzHpNaXXGWikzkqkjzw89Sj2GVUDUNVHYEzWYf5XNpnqbdtAVUL9511n1qec96jRMfoEjZuRCWMCsGohPkRKmKh",
  "key10": "3sKadrpM7MvHnsujVvVDKMPt5YU6WQh21bFwFtFaGkXujZTL1za67VV9pehhsNr7R4bfG81Virb2ARiknJMw7pRd",
  "key11": "5EYB1o4cbGCUQ2mVuvLWPZdjyxZBxMTCc9sZLfvceYL8cmhvkm8AmGT7Ajn3AHmfhQkRgG2dRxREbGD2yx3BdkzJ",
  "key12": "4Hhk25VKixabdKz7ENyVJe49uzJ9egnkVh5RCir5NDJMVTDxdHBWkhANvKhKiCJdj9yC4B88zFKwxACpQfuk5jRR",
  "key13": "3Mry5PC6DWNxM7B9j7TjjofSyWUKxzVF3Gy8vBi4iA2wXfzn4JLSk5YRFAA7Kb4GtGDKUHBBFgzN2E4nDnLkVp2b",
  "key14": "4VLZ2aiLoPng3x9n8v2BPp1peFbeapbPNuhorhkMYEkBzqpLUYYd3xPDpdgr4eArVBa9VJnmqFctn9gR9VmnX398",
  "key15": "42v9dWMuFcFzs3BzAi7S3vMwiNPJwbzd7AFCmzbqF61ZMwsouVwGVBAUvRBX6npCCRgDJRtdaBu1Jv2BGZf3Vaag",
  "key16": "biCtGKydLTAtp5tC5pFDBpWyJJAErzbRsMje3q1dE7DmcV6fGAnXe4SkYqPAFjQvPcu2ARcgVKDixXPoX64A8D5",
  "key17": "2VnvBoLuchQkJ4SxtpksH8TWiWtoVPrATwwzCCaYhyqj8KCHvajzbpSxbij9rxB7eSSLWR8eqp1FL4PL1RXprV6p",
  "key18": "59JdscwNo2mmohjkdmDbGbCmWyE6GzbBz5D75eFfaTYCaicmXkbD9ZWqx2TsvdjhUHK3mda36CBWye86vxMV7V16",
  "key19": "29csWLpMZ5XYTmMqp7QNRfrYXnJqdT7rsfM2N1MxB7iTT51Tpa2RGcKVArWM6cxF8Ej4twDcF8NbzeiVfLJGrXju",
  "key20": "5NSpL2Y5F5ZYCYVb7vFuiGtmKYmkNVzrkBFtbX9jYRhGZqw5qgRb9AUZ4WgjGxZUvf6wYo5Av49kfU8iBPc4J3Lo",
  "key21": "2YGwrp1QrNocj6chX5QFcq16VmUBYiAarw6MU6wRRAmGHgAgHuL217P6FExHp76V2oQyhctZaDpUF82gpmruXpa3",
  "key22": "4uRttC5yY9LGezeLKLd4dHXTrTS39e9NtAWyVYQhukNi2eMVacYu3KjPvcfp8y3bkFxqBiSxX1WSn6WwiUTntgJg",
  "key23": "4ocbBJtE6Zqn2KUHHLieuawuAo1yiQCgKxtCr2JnTU1NykLcLybaoHgY6rCWBLuztFcFtaFcUcSAw6N4QHqz4GAP",
  "key24": "26nPEGqibBF5C9nL8UVn9v7tRQGHt4XeycX7HiZg2geeqFTmhYZSkbiVn3p5d6WDXdyYxC8Y9BATx4UPTAMjykzV",
  "key25": "4pmqwGqAi9c8qmN4aKsU7S3URqePB1TKSSFBbeHMa4mwp41rh2kBMJzorAPyaDEcjmqQ7Hr3hkFNKUwaSAuZZHW",
  "key26": "43rUniG2yje8g3mHGAdu3M17dXNDMT3d6mdahqp5ZbJJGx7yRjmCQAfRNZCyBRnWCDnmTTa8FK6ZBYWX1U1V337a",
  "key27": "3HC1n2YCgZrvZ12Lmts4gucraDfNNimXjzaPC1FXYoxHWeoVJzyC4cWDN5eNrYc8Kc3wfQDFE7Kea9GEAimu2PHw",
  "key28": "qvTaPKEpkkBzCRqcBvyXTfnzJPPnc9JSBEASHjZHfnGXQf7qwiZh9tzvAG5ftydiYvh31m35NJXvZjMkb2v7qfu",
  "key29": "4oLo46oENnCnQ4bYQomt38a5V37XAPncEdcHKdgmNftzEzJbD6zq9MK7mf8zW9gSyKVxW2suztdLjnHJVggyiDV5",
  "key30": "3XMnc4JwfXtSUFKxUS17XL44gPCDDUAJFAUs7fyK1RcDhAAgMH4JJoUJWdCXttJtfLyABD4oBvcHLnkmGWYoD1To",
  "key31": "eUUwUVJxioHJ164ai1NugZshgv5NtJDwAnmbSoz74WZXqM2LXAYgHutxzbC1bRrnyTzouyb1eGMCraoRJFAPyCp",
  "key32": "yucoUr2fg2z7A3ehYHGWdppGV2rN9MXTQgp4CkRrEg84WtP67sGiU5v1RTqasfJZuptBb6dt9z2uSdAptaM6yes",
  "key33": "5tLEd8nAjk5VngtjmGusnfRs9WLRHbfrzLxakBL6UyL1zuHRozs3EiX2mjFAjc8VYeHrXAhkSxL2KsyycDx5dmq2",
  "key34": "4vUin5q2DcoH74W5ZYY4vLzFptfWUwE8ufjJsLvr5z4bMn4NGaaFhaALAigAMwHkhZtgpQUUTwRJSts4CYgRQjyp",
  "key35": "5U5APHvHMPb8xEcWpYZxcCA98KxCkUdtnn8PmULp71A3vX9g4Gr8xQa8gh6B5TYNgtd4TLor8uauEYPoC86LqMQ5",
  "key36": "3HUcbULZd2CCbudxQCFChoaxcuFdS7e1ssTGYqCegCmYa7Kgt593fiEJXDVPo5iKG4sMSHXDnYp9R9aximY9dfkM",
  "key37": "sH7VHpU7adQLTaNLJMeW2VGTCRC6neKU2isCzTjzEp5Wo51H2wXAMqgUtFDn9qQXexYPZy8LJUiSu4T8T9Duwf2",
  "key38": "3a4uWkun1arEBhgzyh7j5Wvh9K5PW36AXfXuKLtzkhsNXRNFi4U5u4mAwfx8WP5VKfgsj6osMpdVFDEZLnKpbf39",
  "key39": "5pBPpFK6ypBAik9pSEnJEuR3MoVan9hucFXtyu1CSwRSnhPzwea7EjikwoyP7hDstQHCULTqABRmnZusEyuq3bau",
  "key40": "4oHbL5vDsr3fHEkcviaqmg92i7KDsdz4PUZUEx2MeSjuCnWtr13pkZfZJjp2AmjYZYZmuqMzzUV5VvtQkTSbv3cP",
  "key41": "3EhEVF4Vm31GpUQspQFoEdC1MARau6AFxmf1iGUfwnDb1LTLtLRqDq5UJaCQFEbW4yfQwC29JdYxJjGXqoMQagLn",
  "key42": "2DsyPkpXWj4nUYWcFqxaiRkAMBg9JEciimuKU6vGsnRHUz1RVv6FMBBeyi6owi1rLwKXuXrzN8V8i7R2j3mdAhuA",
  "key43": "36t8pq5f35L1Vs4mvZ6WWhGgMCVH5Q8WTNr5dHi4QXQpQ6mdvGajRcrAfFkX3a6gYC8APQiDp4YzvuSGEtNggvpc",
  "key44": "4tZwTupn7t1rDHa8deT6279bXTCJ59jHs3A6B95qHvMYinmiUB2Qye6RR6dz8sPTLxsq77LpsQ6u963HaUEsUGdv",
  "key45": "JnbovwvGtkuh8zGJNBvDxAFqeumMWvDtipG8wXApGMbdMumTNYapt8rNdttb2WgiA8rLt3GumW8hyTmiWo1XPFa",
  "key46": "39PEqAiPACkACp4goF2uHiJcuj7aeakLW3Vvs3C86D2uVJrhWcgbMESmKVUD4udL1joMNaSkiQLFbMxhpjtqTYXf",
  "key47": "3eMFK2tKQAqi6ahUVXbL1FmJiASM8GXA95cdJq3dj1ugYfnQj235PiLi2QfphcEbQeQgNoxn8hsTWm11dhqDRbjT",
  "key48": "3P5BNjgGzS8YudHeKNWUNSzvBZmit33naPEkYHZDTfZ99HRQGcusDQqfhV4uFNVnh5LmQfqpjhUxBa4W1DU8P5oV",
  "key49": "3WwK8DNpoiZC1sxQ49PhhytGFZcGW4BQddSBKhMaYWZhkgphYsJ3W11ha9adfNjFB4KFMeXfSRmQ2LtDPtydSnJe"
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
