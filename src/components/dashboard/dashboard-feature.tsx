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
    "5xE9MvWVJGH3fit77pDNo6xnk6WoVPtPJ1JzxHiudT2jtaJwEqRUqgjW6CAofi79dqwW2UuHGWXbJRqKTrLDHWpd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Bu9r6qv1gSionBAmwrX2fwToxis4bgxqfVLWRKZ51GJoP9sURCk84auM8geCzvCXGkhxq2q36XQe8cM2C6VRZSr",
  "key1": "5eYj7t1eftaKCjnKNLowRb3jAsWBkKcNeYauYLmmr8SPES8fc7AWNY8ST2xVr1WrTaxuabMQySvyTPMQqTZu1EkD",
  "key2": "4jyMwP5a2NBgJRUXVTXQya69N385E9B1a9MauHky8iYdZzeErQCkcvBe8EGa8w93G635uz57CMhkUN5bga4pnpjd",
  "key3": "2Krr5PiPJJ5CfobJzjxYctuMUuggmhqgMMPFdCvDJqpGonwW2syy7DDXq7tUH2NjLWdmUXp561C6sB2FG6JPJ4xP",
  "key4": "5HTfKw9hZQtrPWVofs2zznC6eT7DpKw4tVQFECG7ndkoVNG3m38FzaeF1H3m53i6HjE6Uz4UvH1bwKbbNHajhR2H",
  "key5": "5PFMGJDkbXEsXvEeSKqtofnhqHMJR1RNk1zanmGAHaEGMUMiFzuj4uspyKrgEZAf994SDatMkTx6EaSzeZHm8ZhR",
  "key6": "5qLboQRnWqvGqW1HtKXQCgDT3nodFdPgXa8e6DCnn4mzqSGSVDEVBvwXeSAArHqYCewA2prhHb6sgoXNdPpGkJgB",
  "key7": "2qsu5SAesDRdJsX8FH24yJQZ1uEyRrrET9NHNWmMi9WwgGY9SjwDAekymozDcquKvfntuZETZCbbpnYNevXk63yh",
  "key8": "2RarkXknNqwLNWVAgs95YYYtHTR3QdX4PsppXjWvZrMitjuokcrqMcUNGC3cGbymrPwu84GapvXmtNEUY4ovWfhA",
  "key9": "4Eyv4VjbNimLuAxPU8TVaFDik9ruXxmsBHwA2fCptb3ctbVuPnZPetWwzNwcEqA9tD3ysaqPkmCESbkSbKgFr1c8",
  "key10": "3nzrfPhDPZB6w8cPiMiZx7B2YrzerQcqBbnF87aUdA4vLG6feZFRpURPev78Hr7jC4rPZtD4Skew44zRJVwcDGAy",
  "key11": "2Bx25ZCHp5VZQYEtN5kWagxiRRTkpTyKbv5FQGcPobiKtNcDq18vqaQfDiCCyBJ4c1HM6hRrux5LaroZqoi2GWJa",
  "key12": "4c8yAXSejQjpJjDFGWLNmninsiUHsP9qT6StnNtEh3vxbuSgtQ1kzoBrpdZqMCFEKuXVndCNzTMNV3nF4n5bgjeQ",
  "key13": "HLQKMjMw9cWTUi1eLNTfnmCNRQYjRbEcwp7TfJditW8uqcEbTBvvZnEwpxKop5moFT2pfnfCpqpYRLLW2BtZgdm",
  "key14": "3Exp4XPi2HPdHmSjZonfnAmuJmcURo7EDtMGJb8vM958xnA4uu3K95iBM3HTxcG9gcukQ7o7gqzsTuKC6ifuP8j7",
  "key15": "mTmSnvqBADktU4Uj6zzzczATCUru3X8XaV1seX1m59hBJ7HeR2SoXzcvUiEEEsZnQLgF7JjRETwhgLvHkyjd4zi",
  "key16": "5ecMbhAUe3sYmn376ND2GjaKr1oty7uBsD1LxDvmxfnaztah7boxkf9JZDDJ6u3ysjfp3YcBqZBCXT7TJHoz1ZEK",
  "key17": "413ztVY7ntzX8cAjJYi5zp4B7WmLCgUFpHVahjLGeJNSWKt11Dqm32Y3AQzxrzBvGng8voRsBsuPg3kfvw4Q4im8",
  "key18": "R1KE7VfRACL5AbijWxqCqB9KQpuQDMfJc9f71srADuMzCjP85Yv6xYmVe7DuZzNLuqkovU8UFe2wNv4kvvh37Su",
  "key19": "3p9bN3BxxV3UY5RzBJPZbad6r5PMRxNUHxQXJMmchbSdNTrXuJKLrcNmcvh1CXUCmauK6aXJBJ8dDGNKZ7EQxETD",
  "key20": "4nnMi4dARF6kzxbDS1FRHa1USf28foUpA1PFn5RS1c6FmLqby9zmBWg9G4hraZueSovjXzWXjaETV8ZwTMqjHpfp",
  "key21": "42QWMH9RcyVSXDXhay7nAyQRWDSEXDm6uvCS9eC1ecnk58MG64UVuG5FbAAypqyqNpLT5U2JLLGYh4aVzipSwiwE",
  "key22": "5ZZivoU8VH7Fw5aaPhmz6yDAxfn7bAQBHtaLw9o2wfsL43sFUbnRYzwhzcxkntF7rxb58D6vDfrYJoD5x2k2LQwB",
  "key23": "3vpbe27KvuY2AZCyYP13nKQX7AUYY8SZBjp6JPF7h1jRyeFzkBaJKWtX6vX4MP52frLMB3mEApnE4m5zcsSCmtey",
  "key24": "3TzsGD6skbEzohrGYVu9Z4T5Gc2PJDDtNautidesX2JtR11qrLxi3bZ6aSsjhq3kSmN7H2h3dKCZ1JX7Hp9aB9ij"
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
