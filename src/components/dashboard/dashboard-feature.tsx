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
    "5E77amz8gMCMa4VSkaRUPp1fqpY8CuBA3nvPj4oxp9euPXXE5TNB26K6G3SuMAHcfoVW3YjdLMS1m7Z2nLE345PJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wJX7aGALHbUumrZhXfAY3a4LcTHuDhwVkCB7zurTAynqeQMh3La9hxAZFWf5do93sL3n6a1yTJFywCR2Yx2L7ZT",
  "key1": "2w5DzPxiiinL32MfxNFhEoE5gXW2VnjUwTq96b1FBaeVqHSN2Rg2CBvC9WrJF5Nf943ZrB4k9WCBWzdhe4TttTrz",
  "key2": "5DjzTYkJrenaxfQYr3KvVFzmDrDZPMrUoarSUMm8ji4nvK1zkNeMqMxrJxsGvrrpwD31qm4r1Ma951rZ1tURfdMx",
  "key3": "xgZQJvqbBFu7LdhqoJEvHKFD2VMJJs13Nq1vuaHmY2cEBaKjCMBnFpPSjEtZcFGGUeVmDi5rhffRiJ72CSSEnaC",
  "key4": "3Ms573JjHUAnPQqwkbCFNnbox4wBfYTCe1cToPaGpc5mx4AL1U4S3caL468rkqeuPoq8rH4QPQSBMAoKhW793HpT",
  "key5": "GpZtvXs3wLzVs9uUN9JtqBH3Fu7j9qj8zK1z5zCyo8yffEwkHUfR4TuVmz5wJR2a55hszpoxJ76MRwrwSEsNPVE",
  "key6": "4apqMDtuR5arS3BK1W7zApVoDpHuYuQyqm9fABrpWY9TrJ6MTE98RDVTNfwTJ8SbXfGyNZw1KY1nxKiKDjAe3MJH",
  "key7": "2sWtbbmAATcugMcPBtuAftT6zJsce85hKYjiphosRFn7tH5VSce9S7q9iRi1AVbMA9TFZPHpbT7ea9JtNtvU8K48",
  "key8": "5YDQXd3A2gBMKffAT8rWAbe2mVorpP1cM3AAxMsipbipxT2LnDkza9ButFfe9Pm5mRc9yhYHbHWJzfomK31tBC4Y",
  "key9": "2FSPvg9zcSkN8oo8UfxEnVAUHjuqX1xaLLVJaukqerNcRuSKjujRJR8niTY8bvAYW6G8RaR6HN48mp5FTyEWHR6b",
  "key10": "5i7EGHQitZBKU7ym7gPsyC9Zx2HrFeNXzgvPW1i3iARwt4vv1d2Cm6CM1zRgncqeudSjQj3MgECtx551rmPj9oMk",
  "key11": "5rf8M6jBozCXVGig1UNBCmcwbtNtKY26RuDQqvuJNZe5fm13kNRo1BPkvGoHcnyuRfAMWXvR3QcoXVAgPrEbM3Gx",
  "key12": "5Aq75UCNm1Mp5cZFWwMbkonM7MGURAKewNuctVYWV7uZCB6ELTCedjv9a3KMbQo9NyuG6V8LBGrdKYq19Nd5o3jJ",
  "key13": "YHe67xuioZVYPyPTVq93jWCPYekJe4Lvjivn6VQqTrQcGvDQxMYdY1rYom7QaVJcHctDHf1jQ1KBdXCA83U4qk1",
  "key14": "4toNQ6CLV4fMEDPmji7m3XaQtYgu4KU9cMYAkLgDcEQSMRnPanntHdLAKBPbuamLzxTjd6t9byJec9zWHokW4dv8",
  "key15": "2e3zvCQzGYqE8WRa9RsojEwkCPhuHRLPgmkgKqy8hABoThcTQcxDbTaSBCDPYfJS3B2mGv3Wy2QqEB174C8VD98n",
  "key16": "5AfqHFEZW88iR4J4cpWJvQdUpEM8ANAuUxVMCF8iGa9mJKvVnoaHZkmxsU4Kpg4QdSfsyh9kENpqD8gQT7EQHJfj",
  "key17": "29XsVpsFtUFc9KTbzYUmBctgHnWdFEuu34HWDgRyJZLmQViKs91M3D16SfztNLhRYXpsnYXno7fYdMGFSsJcBL2A",
  "key18": "48FDhVhNJZorRnKAyxXgJHQHem7XhLEaeKvYGDXhWveVJiHyzGHT1AskpsAuqjry2QX5H3keY5Czjh6HqPhpKrwK",
  "key19": "EpzijVXi3THqSN7Rd1dRSPgWV2QPAFf6T6D3qfbzZeeAJm2sPGpJu4mKM4BCJcP1zmYzxcVQgWNhP7dDoa5PKsD",
  "key20": "29oiZV4erKQUQPNV9Xe5mwVGDtoRs1ZcvxJrYTycWMTMffNB4uJqRyohF3cMyyKUa9H5ihMBsAXc3LUCaPy57YSV",
  "key21": "3Nh3WTbJ8Rp6nWWvGXgahqzsAofgPBNnBsTSZzS48Bw3xep1ZVi1HDkjVnVtoamLE7vJW1uygEE9qdeS353MGkJN",
  "key22": "XU4SHdmaDQcHMun1MWx1FwCrAxZMTTExRjtQjgwDmU8mkCkCMQXCDH8vBMfwmJcNbWnDLZCMpCuzUCC9SXm1jpG",
  "key23": "4aGJCtC3apgb3daMQLrDwvLgipZqaQUSgCxNpzHzcwCq1u9gca4qDVfM1CRMCZQ7hCQTZXvq3gbgJ2bQSwfrgeMt",
  "key24": "dcrUMje7QrgdrVQrkwZY2gWnwwisn3ufzikgWC1M2U6uKWAMoxwGmTPJYsPhjm7Q95J61jHkWab6PAVg26Nih6w",
  "key25": "2YZg3ayfu6pztRWEq36pKUPjYbD48LWY8JPb3kBUNXmWeCYs6PRWXwjukxMAM16WGrWbrmoSjyVngrNrHmCWwzha",
  "key26": "3XVLTrab7KRMrxE2yEcxDU2vPe5h1F7PMyVU1A5hZTW3MxMKXtDv7wxHGWTtMnNcm1KF25TfNWUGxCzGiGic7Z56",
  "key27": "5A6jni6yyuoSZTSHoVFk72n3LW7rxy6dVD8UFqNfButyCDJPaJ3s3S79ia6cRdtcxeAVLJUjP9jwZYR2DSNpzQ9u",
  "key28": "33THzDszPjcwJvG1JEBCBkCNyzEPGJCJcL3oVpfxqSJKUJXYwFV4UtFWSf3mXHzsby7J3m1g5xJYsFC6BzdzzLqE",
  "key29": "39LkhBCku5kvnVYWE3rLaQ2FRjSdwd2zZeQkhHvcgiuZaa2rcth3cVHcobZKTGUGjLw2LDfUSQdYxjuTSBXS6wcA",
  "key30": "3RV3caPcHYsZN5ecK9i2UdcyXMbttD5Sm55RPMq9cWADEVHxJrM5sHNtdQUktU3LTtYwex7e9sYwcvYXquS5Dvq1",
  "key31": "5UE2CLYRuyLddUmkTRVkRJsPM9JzV21hcSRPNLaBPHqxveWMQ3GbxhcNJxbeP7dXMu1B6a4g85NCaKn3LGN8zQEf",
  "key32": "5L9ZuCPmqDGNULZrkoPmKaTEo1zfpZ98XUxFgDvP4jBm6eg2pgEUsMdfuZUCJhwNCCAkX8EpB13hDmaLyAn1JgT1",
  "key33": "3YtSwocVU2zKn5V1XVRWc4spaus4JJXxe9po5F3fAqv6kfavYZDYEU5igMC5eUh8NymwkC8FnKei1XMtDcihb44t",
  "key34": "5ZeYgYo8btTQtJMWVZx1h9Aqwv72PPKqCnak9MBj5wRcG6SKbp8Rhao8MmA4m4vkvkxTg5upkVfeFwETKSWDv36T",
  "key35": "65hYFb9xh7zfywJmapGBjkogTc3ahyZdBcRsAAqzaKfaA9RAcktjTDi5uUdxgRWFwpyUrAjse6JcLqbBiUALA7qD",
  "key36": "rXEFeX8WsRG8rQkcKExVKp7bLGYBrpjGtPa1x8DsqcerGyRvecjxui2YBMmsm1ne3NvjyYLLYN4kHrrPWA1dFC8",
  "key37": "4kzbF5owawxiDpwyT5hGF4q483fHCYYYRyXLMhU9utnfk6wKJdpXBcxhhCqViCqVXTEaHrKJcPcCHqDmYES3Lc1Q",
  "key38": "3gEBEebJyPsek4bz5ZY5tp5zJsPfdtLWnF2tuMLMeCzcfmv6xm8xLpN1Ggqh7StGn4JZkXkwPLLJ2Za1JEmm8Ea8",
  "key39": "1qwYWRG8QKYoDrvESqCPE5EAthgRRUGWFQjZdx7CWX3PAz9BeQvpHGYomZSZPSKDMa5KgVUK8goLACNKyKyqtnB",
  "key40": "3G1MN4A8JauonEfAwwFKVPofDQLbEJJUhFNhgY8Za7YNErPN8wdiY2Ytion6izmYuLYrUhBFVa4iFYYH6DZRTjTr",
  "key41": "4SegY5Ym7zuMS81jEQezzWfnXkQFC23iQF6T2FW4pmropgGDonvpH5f5VN4tXoWyYw6SoNjSFZRSdguWawD3NkMU",
  "key42": "4bAeQUqEx2oYZnEFkx6HGCsdX5Wh7wjUcanbnKNSkv5pqL48N34HwB7u7gWom8XsZtq6PLcPgCndAS5AciyPVsWE",
  "key43": "3KpXEcj4cKaPesMGrG5JdzCJBChWD8g16LTrKvCYTdWDjao41atKR7Zz75N8YFZxpX7aqH7a35Q6wUaqjtx6zSU3",
  "key44": "5TkenuZxbA5YZDesdM6FHnwk2ZgVDLZXwT6riy17uCRqtP2pPpKUy9ps2P4Bc1fj3FMp9fX5fq6r5srKRaxswTQ2",
  "key45": "nsm5CE8RohjFHJkYxretWbUT97SAvZddUNyMkijiPLXTh82xpvDJE4CLhQQdYw2Nof7axgNNQMFgzDUZiCcavCw",
  "key46": "T2BCMzUD8rLcPqxam7sRz2PnhiYSi2GRz3ec3H2JNDcRk8VxsgmvyqD5oTjvk1g712UNtUZx46DSfSVzgpDJNNJ",
  "key47": "54mLjQdCfzmpcUB9zcKxHEvqE9AkhgHjBHXmBZ7LoAyUpUnUGhshV7e1hZg9yVVKiVE3uJWrSk37ympyjUrMNLNL"
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
