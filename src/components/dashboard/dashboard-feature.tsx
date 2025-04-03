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
    "2D1bNRVvon5kYjeh4K5ipUKVEHfSvbSxTpuTFDn38Z2oqDS7mUp9b22nACPNAZbgE12hGXRXynCCnZpPmxA2VXi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AagLCqSS2NU68kVBtPLXikGU2hF5uSxn2onKm9THEs3WfivXS749FbbbYQGmrjq3HtQnhQudRrLWEZcTtP2TWDZ",
  "key1": "5ji3YwofaiYwfNvPkGyLYsfhNoSaNVLC7FwzPgpa5v5BagZn9NrFchpCuTM2SGQDRWBd1hFRTpr4autZgyWkgZnK",
  "key2": "2EAg22cAsouTUpkyQBfJdVpKLTdx9zJJ8hVcXsSjGQFVw3XBzXvFySjamxCL2fbDEr7mhhDw7K1G4AaHPZ1X9kMg",
  "key3": "zLkPDogHu4y9VcFSUpUUGNqr5woHdrgyeLxqoaswRGX3jrhq9dia122HsU1aB1strboG35TJw3swwrQ1A1ZqcLB",
  "key4": "47ajNjco3naBXAZmEHH2UP3Pk4Et2XpviP3F84VR2isouhVW1iMK6tuTHtdinT1G3S18TJ99qKuvFKAUKX1SDYU6",
  "key5": "3DzFydQqPqJ91qVnEJfz77QSQDBG8K4JRZB1kyHvKk2C2C4SpW58bBeyDHm8h4Hc75fqSy3TTqVhUkE1TDJircM7",
  "key6": "2f3K2axZSXmJQgkFy8bfz2A6rWPG9mLkYLLv3UUad4dPtcoMAXZfGsnNPSjVhHrNqJx4EQEbeWcoNW49Z1NBzeGM",
  "key7": "4kjATRm2qyytnhw4LTUeQ6u8eg8Eua7iqbLeezGqfDkk3p4kNsBf6zSLzbXVdKbC8csnNV8d4jtPUuTY65YzqeDK",
  "key8": "2ssUnXEuxzjrqpUZXGWpMgaEB1pWCoix7HzMBdwNzqakphDai5wm7zU2wi15WPcR9Cq6GHQZfFSLCto7LQKbuWxL",
  "key9": "55Vq1vfwxFntAj5hnTtMzj5WvJjYNRDuPkDxe6t2uifjrYM9ifA1PkJD5gEnSMx4xXYVrFMa33vyevtRto9K1mL",
  "key10": "yScTxVrSY4yY9mpPUr7kvhtCQMsD3TpTLpjKWwf6MgdSRUdQXqhqKyLLsxuuYnegBVKoFxdwbqZSo55Yo98KWBM",
  "key11": "2pmKkSxiSdoJoCmEC19hgjkyBfRa9X8RSqFt635fpwMxpu1j6CJ8EHcRgnG9zdSLLpBGk1f3sY9oxsEfWycGZng8",
  "key12": "Jtr7dd9Fpfprw9auCNN5yK9ZFLmqwnbv74iXCWKcshDTURKicGuYWq1NDgnEP7xhBXdtzkH8rBCGZw6sQJism5X",
  "key13": "2aNpsGCqmhLEArQZ3ydNHcGMWn2fEQdSJCT9wgVQg6dJG6im6GffXLAB1r87kpGoPXdEjWQ9bPSGmMCY3Pamncqo",
  "key14": "4rNrchqGJ4PVSftPrUPzkxVxU2egYikWn8miHp8t1yM8KqJAGmLkihxdrV1yVfhQFZBog13yTDbu8HeJ2f9GGueG",
  "key15": "5QbSYKaXUhgPyPzCWHFJJzhy8u7Z79bezQ7iWv8amGZmivNZCLmaeLrePchyzdtJA6L1EBx357wWXFiYLJn8S6HG",
  "key16": "WoCiUmiTEts5sLztmz9V78h7cTmEjg7ditRjrfgcrACkqWzLUKHPKgyL7wcLqGDC9trAUF2hjngjLGBp8AAPeQF",
  "key17": "5GVC4KhpwFsRKEUMWrSb2iEAtAU9tGkmHeEo3tgyGHYaVwZPGFGv3RJX2uJ1jYuf8AEf1KdFPg9Xoscs6jTnsMTL",
  "key18": "4ow6RLu5mpNsEPzQMdhDtc8qodrbvXEHHrRQ448MMnEg3aCdE8mnuGp2tGhjVhLkK16wAEEuZsbjkGqYMjDjwrdC",
  "key19": "2DmMKftP9PnML4V438EVWYzukSRqDJwo2HKJ9DjxzjgmEWtgtoGxCpt4fbxRdktLXUAq43xjuc6JPpcjEwHqS1bk",
  "key20": "G9z6t5TBqpguXEWxUUy6FbsS4EQWK3spn7XMBKWsJFrZ4EPBfimTwL3TUEZH12AMo2YUgVHdP9aBzTKyVBovxCA",
  "key21": "28NShkFEm9Bp3pepCEmnGKQNRLPiskvGpnKz3uM5DSutJoXBHqC4yaFEZrSkn5h6AxpYLxcvC6SrEoFfXnPa5erE",
  "key22": "22wb2x3o5YTNFbx1wAEmeWpaJSdr1TG1b4jkhEYHLvNzmK2AzvbE1XhzkRnsFYWSPMPLZdXkQ3dAgxZ556NwfimH",
  "key23": "626PpZMLLU614KjMJ4zHRTEWEHbd7wKLGno13AYWbiyfygSQNpJpoG85QhDCtoxVtJDQjhzKBzjSuE7z8yA19nXo",
  "key24": "2KE6joVwRW4Q7rbxwCZ2EEiLwCSJqgLmDRtyuJxMWMPf31TEug1QTS4HAwenD6gGnfA9rpfKTQJvMVDwRm3WxBkE",
  "key25": "3VRxeAAezgQF22aJTUaJm1G1K1XEEpy1LJi22A1Geq8bamE1cjEHbtX2fW8MZRa5HvEoSQKfviSLdZd8vdynLJSA",
  "key26": "5Xnwgs3qqyykaKRZiieW3HuecYxRuWBZkHW2MadnbPLm83uGjjEjLjS8L3PBEzcU2TEkxDzWjqrXTWs81A5cBezV",
  "key27": "3PBsZrCEoLJaiDNU172g2afVChmeecunLhChDudQ9kayCjPpp3enL9N75HG3sH4tt4WYazKXFkZdG66SXmLnqwtH",
  "key28": "hn38ui3R9rmZsgaxTMQg2nDAaZD4miWa9tiPVKpuF5HMVfhjTdZ58T3poynVLmvgz1518i2J345vxhMs8CUreBt",
  "key29": "5CLrwUm8BKKFbVsyM1Gf67yNmYpr3NtMDzc8TtY11BVmpEGoGJ6UmmPKattrnTaPMXnBvX31vHRNmQujPZebW6JK",
  "key30": "3GEfXq639rfnDu9vVBwVz1zAGdX18RrKWiipV8YSeB99PG7sGew8nZNUNXXXr8o5yxdKMQ7UmsTnwZNobxgTWgqX",
  "key31": "2rdGUVWL1E2f1c8J3JeLpV8UUQmLxqgXDoQZJDoNx6Brr7gsQD5LKjmkBizNQUBtxaBfX3X3JuULGWbF2dcknPw",
  "key32": "2R9EVM2jnMTkKQHZsUK5Xn5yLzYgRxM3yw1XtzUdQ2oYKTPe8XkvUegJAoccurY5Tue33ao8Lkh1s6tzRLmx7j1z"
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
