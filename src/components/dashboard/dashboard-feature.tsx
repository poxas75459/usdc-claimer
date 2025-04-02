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
    "4cZwTxiFwdXXWEy4xNQCFRQXYxicD7E95ncU5mUfTzsefXzi1y55GiHMs2wR6NmVaeogq5TCZgk5u2nUQdnsUnVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vWqt2K2UGEUqXtyuGX486NhmiXMRGhFVdFG934qsViURCF2QtdgMYonZ2fRxaY8MNFdkYfa82TaCCs8yZyjPjaj",
  "key1": "4oLQupkQJFmPSD6bw8td6fHrov3ahZs85ySnbk3hm4HdgvcWuvsGvByggctyLVN8Dkabrnu9tePFpktJ2SuFHUFn",
  "key2": "4BfzgX6w6GLhDNg67UEZqgpoen8MpZ5bQupczQdxPM15nufkLM3iiEamDtxEjS21m3TCedR3MWfNfkLkMPvd8KaW",
  "key3": "2jHGXxUJGAduSbE3eqSm5tMg2Z7YoPxLLqi9uTwC7K6Ywz3vLPGFPydXFSjrEnU4JKULh3QZx3Qcmv2WdpnoeNPY",
  "key4": "4pfm4Qm4dhaBcjLPwHKC2czm7fTPhiPHT2n5R6ovWpBsu2q14TM1EPxYdmK65MQiQZWZiBRXkBYAef6KtVtAEcxD",
  "key5": "3YP5za8QrmG2Ltbt2THEqfBoZ5C61e6ervMtB88Q4kYvqJvkra5A6TWdCLB9EEEar8xVixnhvra8BcfkK8t9gtca",
  "key6": "5QzTY8mac1tmLMzoPPFNaSXEFruz7eeUeouCG9f6vtVru3eRQzFcTLVCdwcUL1VZP158gm6gNieL3f62FWmqbQbg",
  "key7": "3NHz2Z9XxCEoRkj5C1p85qPFhyw4uysqzjVkGBLCy5CPkmhA8iYHPNqkmha91KJiHZyn4zk5vwSZVbF5qcKG1ofJ",
  "key8": "NW3sKzWd7nGZJUXEDoH7CrdW68Wt2gWwCNaRGB4qdjTPsobcn7qDsMZn4o29HKk62gdMhvDma64xDySvEz8tote",
  "key9": "2cHjAzJyj147hosKZNULxV5aUjN1HXMoGu9j2dAokrMZDkhNTeZdtJ7yfcvqLm9kyrfDUvdhcNSH4sbqG8o8b1w2",
  "key10": "5FBv363m2zkoMRrdKDEPTMS4Zqxvdeueb71qNwrygz2eZeNYuYZuHZrRkHFrUjPYdVA2zz4Rt5XD2kMkaiDmTPAz",
  "key11": "UtcvLtM8pfoaBd8nCkVde18BXkSpR71srSazcrTuo3HQYs6mAX6nBxgSoPV8oRdJNRkWbJKeogsumEDKnKCLmXD",
  "key12": "52iEEZUUwkWRZ6PMyDALuvJsgAAe1FRtYphsYGrX9sed24GdpcqUSiU17DjEzAqnf9LYyApk7QTmrGcQ71qWNeXT",
  "key13": "3uH3AYURkDT6VbHqyMyQsnTYWAvgxWRqZSnhKMwNFioLQhioV1NVJh7vYAoJQUY7Xau1R2hirDLWaASh5tWbGCsi",
  "key14": "4T1gzvt4nTSZKPjDeUAXnGtDkFCrPR7D5gRx1jq4vnKKynemKwDrdqSFp9ZaZv5q61YqCwoS4ii46zUPFuDQKJDf",
  "key15": "4ShZRzoB5P4o14kBwGeuhEhXS2gXXD68PH8Zeuw2bQRg5yQVuGnMQev1T2pkw9oAwcmiKrvncEUYivzmhNASm9XC",
  "key16": "2DSn9hNzNmP1n98kQaPsv9vvY5kvL9i4uxpMrQCQPKLy4Mbqz3iBf9zJUd6JHMj95upiWxneHKmpFLNgkAd7G1cj",
  "key17": "A6caqPgTXhe9BcqXjQ3hTkyzSBMUBfo7nzUE957u8ggnZc2FTNjkmdnu9sYHjPBdBsew6a3FPGe6JKPNbs1342V",
  "key18": "4rQ2DLMHSAH9Z1qJRasS7KdwT1p5zEHFtXV6pvbZuHWW3MFTDEGuYTmPkqTYQJcahbiHMNpxoh4nS5mPVaUf7uHV",
  "key19": "5E6qpbtGyvqA1Xp4Wo3VEprU1hAd5RcdrFcCWvQ4meDUvLHHFK46VX2PgAhgdLz3yRRMvCMoZ7Uh3zWje6HvDHvr",
  "key20": "2yuyiFT3utvhXk8Vd721rEpX6MeTaxcYJpRPThdzNc7GTaPRarKeCauToS982ffixJrLfDdtLWFeQt1ewrVMnzKm",
  "key21": "2neso8ZpiZMkseEMn9dv92aUSpWjKiHaxxHKtwMo2kCBb9V5G5NViRLrSGBFSiSTjW16efgyhiQgEEoNFehBFdNp",
  "key22": "5j24RdTnzWUASZTPrfKf6MeJfdUjdtacSB5erGkzRuucFi6H1xwLHZcmsL3jR5gfoaKNZxFcuxKD9oEusrumnUu1",
  "key23": "2uCNxuwvNy3wc6cH8yR7pBepwihch5hsBXuqSg2oSTS4FkgjjPTD9Po2Qc4aRtJ9snPtaSu3HqM5bn4YJmjGnFRq",
  "key24": "4d1s97fLeXK2MybHHCP1w8ZhXJ596HQSSMHwVcfqKVmd4EGCWzBpHNgJR9PVm6A38ydqZJi2Y7985QtfTgjTu3sN"
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
