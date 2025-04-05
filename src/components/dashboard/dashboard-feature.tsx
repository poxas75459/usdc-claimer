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
    "GYJh8Eok92JRc292rgnYce9UPRoUvroPtno1VrsFBSJcGeJmtEw7ajYYhBYymKJ5UF8uXQRC3mu4YZsZZyCHQNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zHTKf8n4VradWRNG1P1eXAiW8yu8a4s3bbU9D5cUoU6agyXpM6RRgxjHLcd1s2rab2TKUrPu35qfC46jwVVqPPp",
  "key1": "2rH8oLWi4df5f3WANhW5gdp8YyByJ38kxy1ewUW48HJkcsfhRxdtWYvxsUAG7F1erg5rdQnVkQJ3Etasr3oYEUkM",
  "key2": "5X6EaUHtyysf9QkKYb1bahk1L2ruGNN4RiK7cqvwZeoUX7LxuUx4kWrB34MFrVK2T4DZAWfxeTZ28RWcFkCAUV6Y",
  "key3": "2REqzbVL1xqGsEa4BbDoJfnEe1e2ncLrf8jQd3C3QuRQWruw2Bg7fbFkqRDfrvtBirDHGp7AcKzrh2v6Tf6T6AHW",
  "key4": "5zy1C3y1PSSeBg1ocd2UZhRxTgYfR95wWLdE5amZ84hDhcxwUAVudDWf1yLHWupwsfyijdLwqtJWqc4m8X6oBzM1",
  "key5": "5W9VVcziUboUxahpqCVTFHUkUQ86Ncmx9LJhKdYQ9vcaQkhC5nq7TTZknNmdkAutYq8rLbnpncYAAWrpL5kyLKfD",
  "key6": "24wX9AUht3Kkv1HgqCN5cMbjDNc68u9kcm77tYdnYXth3E63cQSmSg1qXHxMTFKJu6mq1riNvXjubfnaiTcoNwUu",
  "key7": "42DEQQeMD1589ejruwmGJV3wyqsZFV9n14wfYSoGk2Wieb3MW5i6EoUA1GZ9UXj5JDbuRUzWrP7QhLHQpRwAAKsr",
  "key8": "3UW1gAZoXtmE7xrUWaMCFCriV3aA852bcGp2v3T765MUYgGnDiKacYmrfFZFFNfmRwvyymR5Mq8NoPV184DJrDPv",
  "key9": "52PYFmUeJQmnGhqzFUb2pvN98JXAHsJByQUemHZ8vf48EJQTXRoLgMkYpdkyBXFfBvmJVineZ9Z3cMQrkeFZMCvq",
  "key10": "2KbvSdma1ik5fVsKYR3gUsqS2JsTvhuZBTVaqGMAhBa8bdkjDznyN2ZcoWiSD5DH1pwU7BCzmnCj8FpbgCPTmoqY",
  "key11": "2zgNL9bPZgu93re97uADz9yboy1bhte3sr2chUyFk72ycVJre2CcnyfHMPwLpcAYjsiGXsM6eeVeJpsB8xt6Gvu9",
  "key12": "65DFoETKFKLFTWN5YNJtLjvPrrc5enY7zKHngHCasx35g1KTahaZZqv5V898ekfR1W5ks92zhAJZDgxJswSYDU8Z",
  "key13": "27tZwhWyoWQb5RGK8rzmQVijB2iFb3p5X5Qx73Caokch4RSXEkXWF3ZZYeHKqo15ALufipF6X3p1pfDJ5dDQC9Rz",
  "key14": "64HPcFP69bwToLKE6nkjMbvMjyXAvBYc4uDaDFwSM5adz2Wpb8bZhwHgTBQoXow5a83tTnptkd6jaUaa9G5PZJME",
  "key15": "47uDP1EaGRLwcSndLAv9Ut3DoTgiRAWQQXbAi2YBY7S9YTvP5E5NgmB4Xxp2pRfrLWG27pHMeFofPjQXiosiaULn",
  "key16": "yEDM9buuPvnVwrrbvSFSrAEowgYxUGbFByo5UdZV7hbrTnfaV71A4Gg9rdKg7njnepPBP2Cxr3GmQgoiHYQVyjY",
  "key17": "2Qfg2x22dsfzXKPUfTgwTWdztREYxYTvRmpeTykZtsxvXeGUnMzTs1s7SbeAdLDPHCiv7s3W2xeNythWA1BRTT1S",
  "key18": "5t5i758yBm7sBniy82KWYeKEeHcifxFsJp39NqNB7VdL592WHX2FWv84zeKbD9PURERVkeRcgWbP9jc7xiMpUYg1",
  "key19": "2V7UHGEv53zyVsznNLSkPx5J1avkdTi21RYdXpP41Y5vA8p2pMdou83BWP8qdbbLcWwaVvS4C1GWyChoWq3Bwz1o",
  "key20": "3nf3eFi6WkxC3LESndoU2iWrEkUr3WZ8fbFfdZ2pf7KBVy6fk5C9wWvCxR6VWFtQqbo4sJEmMLRWxaeSaNh7o2TX",
  "key21": "4VjpezXtkFwyUr7vBZ1AgypPF6R3SGrgdkPxkGWJfAJnQRFoJBTdwxPGzL7svAFbU7nJL8SiBGBYgZ16zaRQDfH",
  "key22": "4f8rSqJk9ZqLkbQcNbPbt4cef9MFxxeYLXPV85rTqRKW2Sa4EknUWVm4z2mYZYQL98m8nf1iPWbjcXNJASzbHqV7",
  "key23": "p7CKE89NTq2xrDjuyTnVKwKcN23QqT9eTCsikQx9ZmxCDyEGa8oZEcFiXRNfbYxGh7ZbebJJ3JvQQQ25Li9uHw9",
  "key24": "5EEQB2dB6tLWpjeHrvdwDTUA8kPcGdjQqDe9FgN8aG9YwpjMZefqPyAXT86Zy59fCb9aHaSq3F3t1A7TSUQwiMSs",
  "key25": "2qsNdDMK9B6vSKqZ7w1m7KyZJa29sZL93uQJ8FBvhkmRZqZNH5wruvuw2Ukbwkd9HziJ3GmxhS4EEknPhPCXTorM",
  "key26": "4eqTUmfCv9MLyv8cQJJ1Kxd3eMzK1kUC6GDDqTeQeVdZYpJbVKdWbx6XxCdXX3F75AKcJLnGwUNM3bA6frZeHQjp",
  "key27": "5b3dfVP75LFHFnSuBpu4FeDX85Fhm7sBEdp8zW1yySPYALB7pytqBSZeKAvHExp99kj71hFQiA66ZoRiDYSKQz57",
  "key28": "2DfuTX5THpP7x9Djy2iFjLe26noVqPaVv31967mW9vNm4tVcU99Ee7NuwxiEVksBnBGgP1LRdQcHh5tsybkeePA3"
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
