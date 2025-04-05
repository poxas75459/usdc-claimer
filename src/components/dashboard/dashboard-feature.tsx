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
    "5KtYEd9iTuGNSxCMYFKkcWTPVGbqoSVjgp1iWLx8n6NcuMFFWgGYHKPhQVqqR5YpFCD5TCxtfCbg2vqfBAyAdtWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TRAyHYxmKz1ftwgRFCpuXcVvTTEkzCTV1fVMbFCyhuSmY7V76SNHWGT76eV4uuoxvJjxXnvMp58okPsAQkwqpMY",
  "key1": "39uTpoPq1Bc2uJGxxH7QHxxNWepypaTfueASTY2Uj5Nf2TFyyYyQae6PURqJ1N9k5K2THtmPU1yRRXJPD7N3aa9X",
  "key2": "dcc4Wb2EEr6QMFobz7RASbu3urj576FfZNHXVPxxo3cfa9ZVsBsxHXir6fHgcDdSbAwNPa9Xu35KjyiVc8JBLFp",
  "key3": "2DiasY9UTpALzA8fQ986MnED7tEqGBwkSfQmb1wKVWfoi42N4n8kwkQjbPwY9vX7rL3mXyqCQQDVpxEiDsfsjQvt",
  "key4": "2DKNs2sKigsHmsZHh65r4VYpGgBdr2oTbU4HsaGirQroLSCXwgW4DuMtz8K9dyvebD8WatgNjjbFXNKEraig46vL",
  "key5": "5qBWWVj3WkNbncPX98cPFGGFs6ju9nuHniTxhuezoouGXU3GUtkWgRiN5ApJ4Yde93AAeuqGZvmPwS43KjtczJ9b",
  "key6": "3N1gHKrbC4rkBVPUsRCtJGYpaByXA2FZN1ob3NtNMznhMhP8q4YQNNH4MEorWzREAx4oEYYa7bNKm2SPrsnFLTRf",
  "key7": "4TuNknexZ3emfan3q3TJ4uYighFy1mHZtxnZq7xY12qUAzHN6Ka8sTXiB3Q3LtauoWtY7P7VwQ3maYuYnaGk568",
  "key8": "31NRsX4K5kLbz5onHFsWU7Qv4TECcgassE9MP3Mizr6Jh4LB7YdVSA5b9JYe1TnDEopnahRzZwinZ3Ukx4WFwobw",
  "key9": "4jGXDuy8Fbdu6QDtQmRE1sKauCsGiGTJj56YdDckKu68ce6PJdcGvkAJF3Vv6AE1m7aWSTyT6rjhy6MrPSyqrkdn",
  "key10": "2vJgeH3ecNsoZ2HtA4GcmFkHEdq3ZbXK1PV4rMB49PphJnpZjVQyS9rN4MEV3KUm48hig4LQJ34L1uWF2A7vKtHo",
  "key11": "6zGc5hPTgnPnQBhjgmeQy4rmVx8oBXqDFZstakPj4oDJzYSavznWpnobvok18QLoniM3nZHHBaHPK5NqS9LPmPt",
  "key12": "43s8ukPWDDY4NQwXLWFv8hzw2uFCddkiaYbXr9pQ5QD3BWMjXrT8R8mKLhLBtm4xe4sZxr5HHBFE2SqBp7Kx2SS3",
  "key13": "21CzjLmkpTWqjZhtoKE1KW9v1SzN4ZkeGTkdF1eui1xn9jJa73GxczYUsBd4zQDmA1uBbSHS4x7eAxZSk4ERKRbt",
  "key14": "4uQ8QdQg4SnUWFS45GYSGhW1anzWjfhWzQCimNf3AYWGbpoVjw4TLYdMTNbGVFY3gau9T9Zi6bFaTx3szRYDCiJD",
  "key15": "hPBu6dmjpxkQYmGKwTgSf9ouwN5wZJx1Veh9XbJ45qM8zUynwGvW44EhvbEHx8zjmrLbbgSwCVxTtLeYDuFaMTY",
  "key16": "4fKM3SwQYBLYPvi4yrK9NNvuLtrphTVgszp6ZQXTcjPRY1ToUtVQE1ooqhHZPNVxxjmrNjpZs7GswNnUhHRAWyZq",
  "key17": "4BFz9LaLs7Ufmw1w3PF41S3vaeyg7g6py9Ch77TvD2yLK6m7uD5dPC6QAc4NBpdMg4tsYXXEvDehYngxVVqbia55",
  "key18": "5dDTuS6oHA2kDic91bqyeFfWMAGFZw2tfzkFAuP3t4rohhtp42LKxae9Yq9JMGfdA9wFoyBPg5Ln8gPNsvYG5duT",
  "key19": "wXUEjWzx1PAiTMRj5u59RP7iTkmGuTesjD2sffyTVAnRCnvUV2RtfzGeR1UxD5zxaewxBPVwcUmMBfxSfcd2dKP",
  "key20": "44mvr1ayWszbnn1U8yfe38WgtusLzWNu66QjHaVJCz7QcRDbsRvebAjdtS7YBNkFY2ch6V3mWCF7W9VPZMpqrviq",
  "key21": "bjqn1TmFXWwm1ns2ZT4aMdRxsZHgLGe4m85RjMNBDrj4rHeKiCYdp6RjC6diSxLHvBoNeno316wMyG2VteRCrsf",
  "key22": "5PFwJGuFpXgqc6ZvmBnVbBcAGS6Af1vqo6kW4N3k7YXAW87aLxD5mkw9XyC9ZjpYvzhZVVaHBL7zf6czoahNg17A",
  "key23": "35Lo1wF4CnRWwPYzuSPfqqNi9LZodRGPXn5RhKYgFQhpgiPFKCvpyVyYe74R4nn6pEibZeZLMCCyod6Kdmfqs8dY",
  "key24": "4cHPS9Hi2SZNdLoobyQpmuFDSJTakVFZbdxXg6z5ABgrwwuvuf9jgHMNm2kjHmha8FhZ2N4ojmVun8BvaYaff4E9",
  "key25": "4tpXk9vdxjtkbZpMZkCiH5uDfJqHt9SF9UNdWDSr1HSwaCptCYTUJV4JPyJmdVDJEBXwa1bKvfgHRq7JtYShNxSD",
  "key26": "38c4Vsh1M2DBV4ppiGn397mafgdWQKAVn8fasB1LvbofiqEuKSXMRzpL2EfgbF45FvL1BQEFSbBYEAJftQpyXZX5",
  "key27": "2a9REMudUjEA1hwfJ1WthxJoNcYxSXgS2w6DSnSnKXBfgqt4NTrqgaA5MjRHVruKLFdcdsU5aL3dHYdfEC4e9nNn"
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
