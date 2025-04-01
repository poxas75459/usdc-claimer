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
    "334RYoQXNXfo4R8aYq9cfo3ZNqM9VHFvSrjY2Pd9JmQVizC8EP7KgNfjcxggSWP2jfYf8MtjaJBic6YCrbpemP3R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SpGqwKx9tENDhKMyZZJbhMibLkp6H9tT35h5jTK7ZgVpbWVFU4CSQEhcondsU41CTbLdZxrN7ZZiS41eejwM5xK",
  "key1": "T357CSLgGoznaL1qS59L6jZnvu5XYoA4T3LodYHV11jKRNaEvxteK9jbSqVj5X3CqCR5cgt8r5uXzpq7ARj4vfs",
  "key2": "3mdPAEn8ffBsV2QVqPnDvXvihke9by15CZEuuKZiPGS95777R9tidoHJeeoFunUBtAPuuAFXjzGQ7ivmfNVR9QKQ",
  "key3": "2hyR2qVN2magHrrKHvpyBD8arFrv5pGWnnE49ScSwhwVxNn5835ok9yWf9uwtqGjFTcjWddfPN6NEmktfX6J4Hw6",
  "key4": "4yEZe6ucbKT5p2rWcKpjBG9yzKFZr3R8eeKmcXvfmHiSQcdKbxKztsZkp8rwkef4JA48MXzyZtdbWkb8pXCw5k4o",
  "key5": "3Eun5zPXdY3GFDLxi5djseHWZ2Li3KiVka6qcsHvytMyiygsChEcA63pKQDmTD1WMFSjwVwNyapGiBomYGau8jV4",
  "key6": "3MVyPJGrBUxyjjNZJXbt2THrUFCS4Hf5aYZg8pjTssrFLSWFkLkPb4FpxEgdPim165Gif48JGqvCrKTvTUNymnZE",
  "key7": "2d3b3Y4gH7rsA7PvXxuMqQtkBj9eYreFVuVRAxgJCUwTRxn23xymsCYnXQuK7CDadvr5p4N3oxvY9hDnvfzRXs4h",
  "key8": "3C6HYxqqzns5ZDjfwXEHPoUHe6p11yCq3GHS1qQaWzoEEHfeqWmEvfUM3ckL8XCtvHJBANJNskUVDwpncjGGKoTT",
  "key9": "GvBMSqpbShptcyL2tabEqzDzgUiXHv4Yt6o1ynyoaUv6aQJ9fYcHR845RQbAVPq64SSjA43QWvacbbRoUG4adeK",
  "key10": "3w438rb4oeoVU4bSyvYEKaCsNpqs9md7CXwxcxSe7xTq8VRPdPwfCdYV3DZAcvpiui3wyQZf6DwfRukMD6FS49b8",
  "key11": "4iW4vUEDxye3pZyLoWspKNLmscmCg7ZpCPxdjSmXoH4gFHMtTA5ryzkCCmgB8drspiRoPpnNAo8hv754YbvJ3fi2",
  "key12": "5Xb18HhpELBDe7KJRgYUEyqDxvfH7xRamam6jUcaCbXn4b6b9nf4tVdNz1N6vGix399qDTDNW13qwQTzqst1t9HQ",
  "key13": "3jDjQ6HitGJPA6zimk4d89ddF3qwCoVDrjy42stc45VhkHrxh9Pc3Mcsgz1mvfifbMCspasfaSRoA6bdRqTRp3YD",
  "key14": "23ux7V2azCPka3UFo9MsDV24ozof4DNo2wrvPGTEYMUXzkqUpJzX14Grix5R5tWBF7RcaLzWt5tjgYa3JsZe9kgZ",
  "key15": "HnxgB4iQnq1Sdie7jWNeSxx4rp8BWtRyRxUmTW7iBxVRtKJ8EbURHDxYWGJ4XyoxP3axgudF4JosHQyGXvqJVJC",
  "key16": "2NAKCnkR6vts2Vzyn3KuDUqTBcxetQkX7RSz4HYrYZ2iX4F44UxdYAFX8TEqvGx5orurw1D7e6nc9JKWQVBrG3Tj",
  "key17": "2fSW4y9AV2k8Q2rW9j75UK4xEnEhx6mPKMqKZLS6R4dyCnpLwtdJGTKbSpU9TSSjBtjL95nW1yhvckKsuARaCDPo",
  "key18": "2b54UbH1bsPm6o8xeXGPJpEN3rSzsZeeWY6WWPeJzhSB5KzPf9pRuBUhd1UQnNWhm34ZW3dQeohZ3pZNAPs9eFx7",
  "key19": "he182SpSEmmKqWhhm1DE5kCSiGw7AqHL6WwbtCVzK1n23jiJHZUSCEyGfWVvpaAt7qmoGTkhKBY7itiqth91YeS",
  "key20": "GtBsLnVEx7HNPcX8zpPeEa8ZC3KL24qDCoWyoiKGdgA2y7CLxTpf9Nv1C46o829dXYe4AcBHeC5zZ1jQQVxP8MK",
  "key21": "2vCEhHWahzNYi99iejMQLmPqtL8bbJVrxYz1LaqVsCVGQPBqLwVHuwDWhRLf6B6BwNvyxEdTBGk5KjqsFYHc7jA2",
  "key22": "3LSsCjJ94w48skzz74eAe4fjSri6nTCgZTWmsJ76HbJcVpTcQNwfBU3k3znEncaEJAc7nk9Qb8eBwfJXwxMCo2WK",
  "key23": "zdpUzp2fhHB45MgCVDADqVYy325BrMb4h2P6A9h1YPeLnXvmhPvNdAJfpXA7xJgDghiJ7cMoqnnSP7HhuKJ9ds1",
  "key24": "o97aQpYED4io7H8Vah5ktENRVs183YTAxoeTEPY23mdJoRuthz1bQhuZ2zz7dKqyjDAQ3qm3JgTHTnd69B1Mzc2",
  "key25": "2zLwmrY34ueYr2x1zbZd43KtGMdcQ2WnyGjqZYXmqtZ9oXwRTg5p33Sj1rGabeiMyqZHD3B7StSes8687WjoZiFN",
  "key26": "UnEK2U9BR6ZNcUD1at5WdjhMRxpZrtm3x748KLv6AUDGLeeHYi3f5psLuDys2vSyU9PPWAxqvZpHnnXneav8gn6",
  "key27": "4G7dytFxCFeD74bq3AxuYorbQ2XYDJLz2cMapPtSQQzt8n5zoDHGvvcmuQsPf3D9uXU4jWJy2Ki4fdL6BYDj2x8K",
  "key28": "33PifMyJZ1dgmF8Q2JbHpi9Ls4eFvqcxs5j5YMRzu5MMPeFrZFZ4B4gmaTjdiQ1fYETinNogpCtXJTGuXZfqUUJ1",
  "key29": "3PwGkhF4Srq4Cwfg6KK4zLnVR9PAdGKKUMqMggchccux2Asb11cg4biaNG6XCLbXPeyjdzNGdf3yZ8nivny3jqzR",
  "key30": "611zaP9iseZkZ2wWnv78BvjMqEy92TSY1Lzz6Pj8wr8wDNgWSpWfgoqydNFeyW28mxbFHnCbrWGfuYMUVmEaNgwa",
  "key31": "5CH4jTyAGYhb4rN7mjRHdsJHasUQRwkG4U4KuCBCRZAav43GiJjCJxvyeqzw9AhdwfiK3u5cngukA2ieJK8mQQy4",
  "key32": "5E6BbrP2UgsioGjpAifUggUm3jyYDHsNUwsVEovKx73KAWLL4FhW4W8pBNVrsggwbfuYrK2kLf9Yj3k662ktucWz",
  "key33": "5FrZMT7bKoHYtdtRPHR6Fz5wCfdCgeMcinxaATVAvnc6wZZN1axrg3iNdtvc7bUzAhgQ56AVnq79yaoDB2BQQqh4",
  "key34": "2xxjA51GQoisA7NZLQGMq4gY2JsWUDjSdfJatjb1UG9BhCUA9hbAPCvbVcWoosh8Pv55LrKPYGptQ4j2pJztk8Pn",
  "key35": "3YrkAjGRDaSoUtoFAWfunj52XNU7qTywaUknhpkfB2QN11dgjkAVuR8JExYJUbCDQH2534rToP2QEzyzm22aNLRD",
  "key36": "5rSRSTLjkgAocVguyZvmjdD1G2HrWF366XTQMKhz9nQN2Ltk8LTm6VLo1gHVmgusAsDhuyj8ePN65sscGod7r3tY",
  "key37": "vQSUYnanUxxE5AFZf8DiZXpTaLsBPQan9hkHrcNK3bhD4LxUJNXnsxU8GMH5hjs8mEPhSS19wn4XH2r5LYfDQ1d",
  "key38": "47Tdvfrh3D6BLPH2ZDYxAKWzoYUh7oJ9vdFGDBPiXMmvTLwkKS27wtkjmkAdQfg3teGDQixkwX6hTvJUNVkpDhmb",
  "key39": "3nN1LMRMb3gPuEv83BLExTKuLgjpSs6d6anbkTvwBt2y5eYJjwJJ1JeWk5bvx7UzEMXBjttat9tNZTVoaYfLRR7o",
  "key40": "RMQWbY52oeKhi3yFx5AxHYvdbpXxJzaxUR8JHvb33qJWZrmFDseKxkQ1h3SC3zSBNvmPTmWSq8nDyrpyBD4T6XW",
  "key41": "5dMS2Ae3HxwL7ogDJEunXCgsKbQxDooWbGJ2YPQtYkkNGPJmHTUknC6iDWwCCkpaALXu5FDo19WjksfL1BLiTJry",
  "key42": "2BZctyphZksgpCh9PMZMHCxx7rVMbCUwQ1Kdiapk2QD5xMuh1W1XT1qYwbSfDj5ak4VyvcuCKkaDPp2Na6K8tSaZ",
  "key43": "3QgSHV3NfCVZPgcrjJs2LspSj1eVPw43Trg5JyqGMGoj6tz6KGCEE9hU4gDP8sdiGTg1XeWbYMaYUUF443a4DJaQ",
  "key44": "3zPtQCQoBzKAkb9tJeUaCSBpam1e57bvcCGT9AHD2EEtKJrdWFU86gTTGDgTWVnFWrMxH6YWZSha2rKiNRqFeePZ",
  "key45": "2GkZPTeeErzBK77jFnq7dh51Uerik8gw5GCqEesLbe4wMJPR8Ce35hkAykXEVEyWgErzL1QmY7WDdB4CLJ4ZyvNQ",
  "key46": "4e22QYgA2E4CLvrZGReNYTq6u8LhkeF8CYpU71enaG5TpNSYomzovqk8LR9pE5gg24LoW9KLdQCZLE52jezMET9S"
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
