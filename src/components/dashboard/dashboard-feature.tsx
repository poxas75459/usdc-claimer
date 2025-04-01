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
    "4YuCpsL7LPaDmhRNBFm81G615SqbPpdCqGBV6jMQX1aiwJYGbnESpyYGpMbGd18Hk1meSv1Qh6rv7gFtq1tc3J5A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Znw9wEKSnUCyXFFeTR9m69CiSsewE4ZvdfwhiFky4h72DuCq81KjorzJwdeehMnxcfpxoWXmYHHoQxaai8huf1",
  "key1": "3YyW8xCMD9jPXG4wqNHKoPi26Dcx7UeCcTotopFVd2MuufxxcF1aYoDasj8fNMgwaoYTcVvsEuAHUDzRSqpYhX2R",
  "key2": "3t9TGiWtdLfkqMokQDtBh9orZMhUTN5SoPYmr6LQtS1Fn4r3CAfUv6dtUVRsfV5jP3A3nyvGn5cTPytgACyibky8",
  "key3": "2MvSyywhtXy424EtSBLm5M6PP6VJWFW6dXm5WoFpA1ZFKWXB7Fmn8treSg1SmfQMb1tWrcma1tYuN2ZsMhpgNyEX",
  "key4": "4mvKmtYiiJUqmNYDgDmDXMRnfhjALWSVMHpS1qJGKdGDFYxWp7ZB48mDkPegTxdYAZzp1hGXnWjM4CdF9SUmGVR4",
  "key5": "4Mu3QtSYfdtSe51h58vGMfhkKdpqjRrGm9N72Ybd1GFHJXmbMdsjcquegewNKaVZpP7C9Yr6454hRz2pzcPv9f2z",
  "key6": "XrT4meUG3sm4LiwSQoG2hoFatD4bhK7matNbwA7DU8d5tF2BELHge76j6Qgvp7cKiE8JTwEsV9s5meFcETqJF1v",
  "key7": "5efL2feFBoN9N6urmJLL4DwEdjLPvbVm8cUT8kJVGCLJYU8akscAyRJrJA193TJ8KjTP7z9BHPzvLgDsHP56zf99",
  "key8": "hjJcKvu7XZoVBGAsJeNkTQE5qPbFWJMtQQamDurdhVWS46HqFdCtvKokK4BZTN5bycPH3BgLYMcSL8EzZVX1hUs",
  "key9": "5rzJCNeGy8UoGyXHTgwRkDNwCVswrnD3vqJn6PseesAgaNPNj8aTy9vQyUS27JGFw1RSaZHyHx2u6Yvmmmbd9KRY",
  "key10": "5a6sTYpFJdCiMFm9Guo5iuUVdE9XM36HSWFy9aksZHyigqAU69yhKvK31Jqb6T8u8mrTnhMFwf5x3Y6UnEHp5ujF",
  "key11": "2UrzTE6vAUYzJar3UB3Vnhrisg1qCigYeHtV1PHfk9kCYDwMWEfKpWAK72YQ2CNTVzRvcB8KBM3bBVKDH6nWQgtD",
  "key12": "4dYjzd42ewVTgbjzsyoZeV7sw1XyQxV4ZCzAy1jfgpxuUM29Tj8ptU8asY5qSBQKSr2sC7BTpfXxzH24mgU6iHVX",
  "key13": "4iY6g5qAtDL8te2T6htcaheL3K6egm71eGUQGCvjJY9fffhRzG6PGTfakiR9U3oYZc5iqgdypLDTakn6R6XXtdcy",
  "key14": "PUvWhpCYGtXvcRZAhQK8woMiYp7yVkEfdmtWe23jQkBtva2oWKZZJcG6PHgNDMw3c6osLsnWF9x8KZjZqY3SFCL",
  "key15": "5xSBWFM31cW3kcw7FhHyrjnf7pxmhoLiPCF4TJykVi9zRaSvyTGNJ7zSxFEZyS1VNqebVFGso3StuQtQK51Hdxhi",
  "key16": "5ARVzMWGKC4KS7vBNfPMs1Pspa2bDp1deHKhT1KBWTQe3mZqkRNDedY4XMmZfcUKgpVxFsurCh5smVqLBXCRtquK",
  "key17": "THM415NZb8Tiyf8CK75BNaZ6hL3MYTmKDod1pirhVYiZKTPqUxiWEpRHpuee3UbZArbRQBb3VQHFuUbxz59W1HC",
  "key18": "54zfEcVPStqxTuwfuGXgfP3471ugzp3m3bPVguLkMfaWsigDJSGePz6mBxqcQx3EGSaqaEj9ywz4r4T1KogS6gYM",
  "key19": "4HNeH1cpgtGAD9zCcn7keiC9Wp7JtjJBLsJTaAxHWBFi8GRuqunVecC7XMJv3df7mdWpTWvUhfmc9XKPUfKF1nmB",
  "key20": "2DBMDxsL4JAP9PGezztUmWB79XgpfitZSX3qAeBzrYRp5ZkaZYz3cGqWbxfDAwF64BqtWFhREZoNfBj9pwwyFHfN",
  "key21": "2G4bMToUBSPWPSBCX9FMC1VdP52Yuv3E2nmSzjz3tZgW2DdvRJH45jUvnowbAiK2y3CwdDc9GcjdDfyaRTbaEv8m",
  "key22": "YdsJr93u7D9nDQ5ntSREwDsTKUZ6vZhEf7qs2WBwrR5mRjJ8BtzCmfsvKUyp8cVuA7s233HbPHXZwxaZbA9j6gH",
  "key23": "2SZV9u3gzfYijpEARBTy8XiPakJb27GxpQ6vKRKQPHT75LCPYQUk8EAzT1aDcrcyi2uVUyfzufgFg9MGzCugaagG",
  "key24": "5QabLdMrwQDvXz4JAkCSxmfzcVWnrxKFULuSQatn32tdSJP4rRA5GDJ4ByPUxq3CPdn4DwrQaYMFBcqYzttVfasg",
  "key25": "5bQNo9huQqmuBmo1xzWSLzXyTWQ1deyBWNCeAeBNkixAwjJpSvWcQ2TiMqCuWzMnfWJHYqaMyvSqekt4RCoC9eEX",
  "key26": "2MLUyfax5tJ9zoJ6L6yreZFhvrhswspTnXRFP98XLTC24EieRt5HHeTmwhJuBdaJw7eJWE1sGeMX5TR4zmPBkZwp",
  "key27": "4yF5SBeVsBDCQCDHGYuGgjknHCBBU3PuAXjYaZ7vJvTg8iUb4RHjRBj5itYVX8qsFtRrRFg3Z5Y2N3MqT67mbKzp",
  "key28": "3bHxK1GYb3RGZLyFSebm5Qszo6wqnFtz3RC78ZHoUZCo6wX8d25rYa1isjy4rDtEMqrcVgjWNfFLG8YKVa6HZJKC",
  "key29": "55BJd4BLdT1efqEUvYyYvq9A9ip87sk1KudoxuZQ5hchkADs1s23Qpq5BZayD3xAhqEhCYqmKP4yFHAMVmEBkKrm",
  "key30": "2DDLEE4SbHGDKTktDsgqYoWScoA9VUuVyFVSddHu49S9LmsaJXSchR7UXLrbFBqh5gfhVL1dYCsreM35SKn2UuPZ",
  "key31": "2Dzb9eiHAuNzJGPjgx25LmrcVcPSGURQxTQR9HVyrNVVxbM7tgncB48J8z6Qx53maJVHHiTBwPhX9D1dxr2vJSH3",
  "key32": "5AUffBTbTAEnWtVauiWZgj68kERvrhSxbANYdpA9UvHiJHheSSQ2ksLRq17CKtazUmQLxcuQqrpDiNHRXmzVsMSR",
  "key33": "31NmRpBKKSPtATkEo5Rm17tTCYTD6qnzU7tDKDEvuPEeDEbPDDSALLLFEuqsBPe7PG9pXpxctZm24p4GqdvzMiSN",
  "key34": "34ZLcG7KYQGSh75qaP74m1rpTqsppGwpTjDRp8rNfmmGApvcGUhzkM96QtW5dadLZ9RQHKtf3UUBtahG1P5FppkU"
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
