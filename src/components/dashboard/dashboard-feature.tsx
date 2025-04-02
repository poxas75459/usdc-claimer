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
    "3ocwNwMTWgcqFetiLyNfYxkLFKgNLnPUTKBZdHFYCp8tbYRroLUxKYp4jbwAJBW8dkQYYBXdNRZVwk2nEKvAPGsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PvvnoNfFRdte35KSGZoNepuSafhfppAqf7tQeYF6gs1TUF48tfsjg4xocYJTQrpwXeDKdFMnRAxPTQEJjS1sVcU",
  "key1": "5SYyzZyaheTm4H8KVVBmfvzRKPfYdJvsyyPPLQ5GPPGTpBj42rJmNe1yr35pMqpEN4kacAoAbV4hwmktxEbNQWtN",
  "key2": "4kNM6UVMwN5KXgd447yi7oxAaNKJh4C8b33ZPgM1K2fx5YMvjsZBH2brxuZJGGc5C5o15wNTEh1E88K6hJ8Tm7vv",
  "key3": "4cAT86WW46ANGM4kbr4K6JnGxTpZRtDoREQVNHYeD6WQiMtTEeTRThAytokMN9pbQYq1MNQYWJDyA3JCnZDzXkLM",
  "key4": "4RPc8V973Ec3ttGU4FqRPK8U9HBsGVwJ4fRJBJzqXV4SUWmDvmiTRzvEQWaEvzk8f6aYPVZ1ra3iSBCaQLHw2mB1",
  "key5": "5fbVbQFG5nvxkc2fnJTLfbpx2Y1T3UNrEyrnqL1V15egi33nbh5jbykH1Vsmp8uZ37GJZ1jYH64rvFvK7T9p5mYm",
  "key6": "4ahFgBN6WpSTFYanQspduFh3GKYmrs9Wxtb35NvyqQPkxpzrEkKgZVmrzJrCLkgd9vZg6i8yg7rBA7UahQQYADHB",
  "key7": "4QQqQiCSktZbH7xMLNNMrD3wU1bp7Q5YQRKg4yjVVhECvDMK22GFp5WHZKn9Bom77sJFhec7agGYi8344wvQ54yr",
  "key8": "4WLyHDeFagz4scKiMnX1mLFX3Hm8mHQjxsDyADDazUpg6Ezr1CXoCkoxmfXemtdvA7TfXzok2eRp7gX4KGPBmSk7",
  "key9": "2j7NYAKzthaeRfsg6fa4JoJB6QbBBmYaemztb9Lwqf9izLuBYpjsrEEKZeBWmQQM1C7zeJXPSvoeyThsWoZbT1kq",
  "key10": "4EqwRj1r9P96pYR7wZNYgasUPsxtavthrtf4KpGAF8kygnvEuty16yCWtsyUBcvnetRn1UYJ2feiW7y7Sz8AdPi1",
  "key11": "2uQoV6aQqM7tnKGYQLXKkmz3WhJqNr6FygkcNQTySf3LCRcomfxz4jiXbt6AySq1qzYxJm5ncmwdXsDAegs7RP9Y",
  "key12": "2CWKCkb3uniEt7vCNfCGZWVwwxfgt4D7QUuhMwC36GhZz8MZ6gcARMPAjpBq8CMAPJw3vEA2T9RXmxEXZbcJvzcL",
  "key13": "2Wzm2jhi2mBqLyG7TMvGMpGWySfbVt8N2QrBxNQu8A78M4dLFYzcnCQudeuPBqRBAQVRJC6gBKc7j9xdELMgYxQN",
  "key14": "3pDeH5oo6F7dAUYViDURihGZC7coWsiTXCcnMpqNnF6J287NeH9kHkMt2guRJME5kH4qy7gqbxsj9LEBSqQuuBYn",
  "key15": "316TQTQo4uLBt3sB1SpQDur861ykN2Ytc9Dcddo2Z5if1Kdx8Pj7EgdLn83t3WFhJgWpxXdkNLtoycW6uiMep8ky",
  "key16": "3jNiFRVhJ24GFq7z6qSrCUt9QDy3rML5i648KxTnUS1h4UfF1g7QD6uTeNg6b2bi4REmrCqaijzAfwXbKNP6BKbw",
  "key17": "2r3uDa7EmpYe4Puss4jv2ygXErjWpRKwjLEgfS3F2X7k82fwidyKUbz8pRXcxrgqGY2kqkJL3EFAqaPtnRZfimjE",
  "key18": "5vyLG76GYAcVr6AWxNx9d8VshruToCBwovHAXpXRaHLwFnDm1jdzGWy36Y8h86Y5uwFvXPBrNFA7pR9NBE2FS8GV",
  "key19": "2F81M6ikrdzMc5uTPJ7sPgDsACkP6xAp93bfFZwhJcNNs3eV4kJQZAHRTdsoNqaEN8NxXe2dNuJmcunYnYLBk6oP",
  "key20": "3vJGFEjEqUQfpkA1qcCsPSTGQJoUSwKstdZmCMPm8uMmuBY7xvVJaNN7mdb51YFz9DrnXCRR3rbVfvPvQx6m3rYn",
  "key21": "4K9mwaQAqBaQUaEUBsnyU9Utwa64QsfGHyfyWmgjXoT6KvF8CMMWEyTA4Yfn9FhFSVkwugSr8vcCSPne8bKT4kLE",
  "key22": "3szaRqUyoevbC3EMfPVw94XKbCJXer4euGKHZw3jpSFVSWM6hKybnsnjweUQSxx2UYcykMcQT9Jh9mVD6yrErqw4",
  "key23": "5VufT6HZUVLvkH32aRctamjT2s2pcTwo3X2i9CBK9dJkGCwg1rNfGQ1jsVk88SGknEnRbqv5JgKwd2dBzaFwVUQX",
  "key24": "2XQkEreWUcHnstDvRsBjaFmbBMWoUPjhgvUFoQG7a6wNpQTMGidaUcQTboEafpF1eh7PdiFh4BcKrppy6VWApEqf"
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
