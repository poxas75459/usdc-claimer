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
    "3Liqk1HcKmYPhiXVq7HNsRKAdTfo21srq3QSb6XGDDFWJm6Z1u5PUGCieowF4hiUmVM93kjanuwshyN6VYfjWtwH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NrTC4s7zGQ2HmQm2vHNMZAwdhsF7MY3c6VxSPekUmv2jcEkpDu5GFoJRsnAAFhtU92S28d6jaMrcRBQieMWEfZb",
  "key1": "5q7HViarRPxhj6YtNvi8XaYozV4bDgiXTko2sBQauXzcuBqeR7rJ958UckK46KJKcMScjM72Ueqc8TNgeVrdSfLG",
  "key2": "5vryJq7EYBWp1WQYruhiB5chBCk1oZfPZrFfMcTDYCyvH99ygTzkfhGKL6WEGU6RDPijwTYgFekYGv25hquQLJi7",
  "key3": "2wZxU39icWmLvgvP5H2BXmtGraPeGaBRFtYq1QRsyC1dxp43LByKXrZjXhn8uNpMEyHemkrQRoyAmZcASe9j8qu2",
  "key4": "6eBCZ9PYD5oowLJBe5Qz7ewHjjhsXqPGxn3ETmTVVcM8w4YrgVvWsfEZ6hE1z2cuqGXBHRc3Tq35Z5zprFAAghs",
  "key5": "2bA7t9YzrWQGCgGhnFkNVSVakj38BS3SDqjSdXrtoRWd5aUi84unfxJraXGhTGVq9Ux8GGp4na8mXjrcSKY5rrKM",
  "key6": "3C8qJgJCmtEmcandWHQJENRiDcdTL11ggLi4niKYvHbJV5tH1Gm892xwqAJ7U1HGHuq3mHeH4xiQk4ccNgswzqSu",
  "key7": "3jeZe3Vm2X2DgBFqZyr8NE3FxAsSoygwBksydmNbxjDWAAcE815BT4idRRMz55uYiRrjYmuSCG3ZSWAT1PtoSvcW",
  "key8": "4DKwVUFZcZLDvUAf8WyxGe6gq24FrRJ8drBWCCsxxocPYAa1Apyn6eQLW3FNHwjm97aUj2CKv4eto3LPq7M9WkgN",
  "key9": "37KZfKCWy3YpWEdBqgD5gCqAuCz2yBUBRkQTS7grFJ4JH23MxVVTYjiDoahBHNHK6JdzNay6o6TW14Y26zYVWc3p",
  "key10": "2QNfdfNLmZzXphYpS6pwTPrM3koyvANYeCjyMDP1rUZRX4fU6hZVkzH7aryojKrRG871bonhFgQuCQdgZoc9a5Bm",
  "key11": "2madoNXYJNdV1UY26PtMSU2Mme1nEVKof7YZArR1hmWELLK7BDyi2tWFMcQcHipy8SV3SRRmWX4SQcmAv2jRBmxQ",
  "key12": "5KK4GjqgFKvcp9dPMvKGJesWNDnfSFvrMYf6oczp4qRXGTGCMoSUUgCQ85XT6nUNswU9tsMiYP2SsgybewjLC63a",
  "key13": "2BxGmbCqYdGgPMt5LfpPHRcHac9HcoGx2Qs1cncq1rqDEkxKRJf7C6AEMGhTMr5kkp6127pRW3hghbDgeh95zTbQ",
  "key14": "3x4tjBpEgTJ3bpqesSJcFDErcJeMi1NQwT3ZvMrZ47qLK1qLpNDbDL8c1b9n5tQojUKK9VVLL4RjoLrVd7mFejqK",
  "key15": "5He9zwk34sbXFXBN5o1NivSV4wPUFvtsixxpMVGTXA9hVhkEBKCzDEsZBQ1b8kboLJn3En1YtwEcnpZEkMVoZ12k",
  "key16": "pEEjUSmgUfwcMuZMX5tM3S6ktMtnhvmsZNb9cnkvhVjEPxZnWNSD7YVNPNMszYzgidjdC6ey4aacaQUze8amCCx",
  "key17": "3gmk8SNTwe8LMhR6anr1xNR5RkgBaV2N8tjgnTSzqNiGYMfoK2YQ2SuDTt3VeQ5AvjdmqonAYaa5svBTsE21556F",
  "key18": "5k8YJK9VaY8K6hr6Qxh1bZqSQFAfHhL4n3APqqb75jUiiSXHeKHfzEir2s9zZVgoAnkLSLBmPgYqVjYU8wUHrxKb",
  "key19": "3YTf7WCacnP3oi2vViMQ9UeCCYv5DgW4Gh1hiUyJgParzWTXAFjZ3YGXo3aAVd6aUoTVJXBGBcscRgtNbBjvy8pg",
  "key20": "FkxFn8jbyuKduw3WsyTWcWzKr2rxZQjFoJaYqu5Y64mQ2anD1wFRKxVV8bbE1BVRUCQEnLbGMmGWmLgPzqfJb7D",
  "key21": "MdQqf9eDCmKFbYo9treakZuZhGekyPKpiEUeDDgZc2GU6FMEdz3WN7QtSjfigQ7byNkKxCdyaDUSXRoLnke5xBh",
  "key22": "5UVijBDFG6G7XELq6Rwe98SNX95P2G7t5V19W2EaNgTxDGHbMWmWBaxBPhtg92HP3tQGGjuc5ZTcgE8yNZrWtAjM",
  "key23": "2CiLFpyV3cUWnj4gbny9o7xbWUt5hxBCVgFHX1v3HTx6gNCkgPBDDzWumuTtNsLMsN7nkjLysNnHLUhTxUBdGpWK",
  "key24": "4dFnR7J77x1LjDdLefxNcSpeGkQpyTBsnCq8h7tnMRMZaQWpNCsjnA7nU1W4yAHCKG1bH2c586vbsRXEwLrr4RaH",
  "key25": "4dtVNKRbmZQd94F8gTevqYbSknq9hKbsBCUjQYYkhSmjkR3NTbAHuhcWENfFC6J1yWxoFLDLji6pbxaTYRqwxBPR",
  "key26": "33Wz2GaqLgb11LGEcWTF2YvEMACLyAkRBhkgzbZnmEGxEGg8ac4eMAikLaRzYYY7Lwo98WTTG9w8hQA6PJZdYdEK",
  "key27": "4gMPPH8cqrjuLb35Q4jEVpLF4xv597C8qLG6WDM3NSLtgngexnRujYscnYZmENzb8Mqhq2SDMXrYa6Hw2bicFQ6f",
  "key28": "4oidbkbuUxCddfuEZ9vs3fvBntwCEC2d641ayxH3zrZRyei9FnS17bXZeUSNzm81FNLqzh8MtTCo3nAhMSfShNnv",
  "key29": "3DQgqcV3qS9rRtvrEx1Uqe9HA6PxPZ1swCpGr12hagVdPSxc3xXr5Y6vkBdqACF8bmS6cV1xAbLAk2GSXbirKFLs",
  "key30": "2vA1sKbXFtNXpFbeK5664WmQQh2GApK2ziyfSPhiVYb4iSJx57RbL8E7ZeRkCXyS7yRvgJbXqJeV4BfjxU1Psjxk",
  "key31": "5vwrfv8HqVgpKagvfDWdU5PM4nchk95jsgbMYUtkwZzLeffM2zv6iKk9KqzVn3MYa24BHvvM5eGCov1jDqQxR9LE",
  "key32": "35H5u2iGeVgkaBhNpAkBfAEA2AJUrWx7aPVQSMDWw7g3LKbPVJv7qGoXrqwgQKRBurz9rcNC62E1ferPq2RYHbny",
  "key33": "gtW1sG3BCbz2z82hwazXkwxTdbVkFA9GzTv7wdWrXrC2rzxR9JaTXFDB3UHS7drBUSUquvMvmQnjjNr78cENENy",
  "key34": "5vwmtuS3wcCwMCUUj2Qd2WzkifbDM4pEY8GT7EmVUqjdnD3ywCeQ975ByWDzr5ntUVUu5b5wvrApw8wdwbz5sTqM"
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
