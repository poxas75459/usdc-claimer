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
    "2GespzdaFwWaadtuJnqwmCGYrin8sw3CGxiLV6zQVbwjzFxsWqtVMxmVvK7CiP8f9Jr6SD4hMxzrXiXiqaQudwXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zsheuLZb5txCW8nNDx97q6nLV9U5AuyJZy8afg2sr2kP3uU6HSK6UUY352mgvCd7wohAXKVqDygTP3gBRVWdQLd",
  "key1": "4fq7x6b2ctd94sKXNXBjrVQFyfg7M69grwYnvzG28L1n8yZBL9jxy9yDsaj1oFXkErAPVoYxaMg2GaE6YCnP3sS4",
  "key2": "JDUvVXvUKnqSmDoQY2w4aHYCLvDAyPGFkJsMt2KL2NFom3LWiH1W6bv37qczj4qN5MUe6EQZhMRnxwLWzotM499",
  "key3": "3xK4CSooaVN1TJafBNouCgdxkWpRSgvkBa3Yjke7X9mvXwqeA3TfkJJvdCPzkz5ezctEW1MyLzmBYHAXFZtJQhS3",
  "key4": "5P71xXdGRpH9XqdfL9W5ffhwrGkdYKjgjKPdBNthnVLb9GhMTU57VEhuUqgiLHDowq3uus5BMtSKVAV9zKSKZL9n",
  "key5": "63pcPXqznp89fHnVcmAtHLpFwTDjgsSBjzdPMUJ52XeFxmURXB7hhbSDZ2qSE5ZhBMamYS1EN5kMN2tvjx5wYSUf",
  "key6": "3TTHVe6Fj89Y5ZQhXC2sAbwF5rrXx2cj6i4QU9oT2bDLbrVzBtrH2zjSUA3iJVYPkTZA4HqGQJD5jL1QMySrJMAq",
  "key7": "3aTU7YH585zC7msAFxsnSaGfMNxmDjHdoG2TkCRjTbwkT6oiVtcCL7xeD2VfcLFjt8zijvNNf7AJUzmWdZm8hewu",
  "key8": "4aDdiyX9HmQQSEcCBSHPf26k6YYyBziDjV7AtQ41XwAGCygyGvVLVJahLzV6JdCnDXcXCdZ9rpcTPsnBEVWXcZ3S",
  "key9": "4X5ftRJZqvLFiTAob2dQZtU5xjc9ThEazkqxaBkquJ2P5n86ri1ynucXpUaQUzgfBzkS3vRdd5WyskCts6sXueEN",
  "key10": "5JQqZY3BksbZZQRSaWhVxCXWYvMh83mCAYF5CxrK8pQW336zatN2tqEv4uMdKKGB9kxDGYP1geid6YkaPjMjMbBB",
  "key11": "548E3bWRBJzE7sYTDrhzjP9k3MfFURpFT8YuNdA9mFGi7C9sfc7KUahEYW4MuR4iCREPjsxQLw6CLpc2iEv3cxPF",
  "key12": "5UKiy9NojH4Yzfup8oXV5y6WpQ4SinaeUVEqD76APCxE4pRnkS6a4iRA8qf1trXhFc3qmTv3Yr5R7Tob121Xi2tE",
  "key13": "32ZpFawr8hJTYNrieo928JSZLmDN5PJTUG5PMg5AnSkk6bQ7YLsp5tymCSrrrbXT4Lq1LtXX1wpFjKtjUBapzhax",
  "key14": "3WWJKgJxAtsw35rgaNizVkx38da2ThFvhzyeuHh7iBcAPjx2May521b3SUEf3wB8bgjSZHTs1yBJHpv5487LmUtt",
  "key15": "2ucaB8YB8wsx22rDh2jeH7Gh8sSmgYhVTNAnUdJ3SQMJxE8yq9Sb88X1AdEWCaTdaLe97tZ1cqoeVRBzbjNembN2",
  "key16": "oVwVNGqWGBUJ4JHsBkvLiKUKg746WGXpwWVzjHECMT3NnHJSnStHnvvcPGsVCAbxsEjJ9USTamdrkjyhjyBKQat",
  "key17": "5Nwuh3N6kMqm9PS8it15DVr5kzwS7eJbd12oDXAsK3PK5P4QLae1VzqHURbAgKStvMubmysSZcJFsbcGwMmVxBsj",
  "key18": "2MyAh9VXXceaa17Z1Qn7wKb7axs8WLVCKFqp58vY177ht5ivv564F4X6szCZ2Vo2WVJFvLSDKyfmkMoZMAzo4jng",
  "key19": "3fcvSfqKtYJt9vJ9eKkr2KyHNSarkvNSAr3chiEhE5x1wUbJD8F2ga3FFHCubreUcAmPZd34mGTwnsN5UnN3cfU",
  "key20": "44nzy2tMzR42PZuExfohGpqmsUKXXBVG5GPj6pd25w35QBEnq87AATP2RQFPLe8t4hrfLFpHgsR3DBW7dWH8uhfd",
  "key21": "3zUoURU9oCracfwvG7kiufkYFGaT7yUhHY56TiN2hYPcbhgegLGPBr9yVxttc2RueEvgqDoTqX5X7R6QmoJaqJuj",
  "key22": "3V7CdiSuXbZMT1yupMF8gxvjw2LrWA517jemkYZFuZGP8Fo8bGVdL8NCFp14VkuDUuqDHv5F2PHazbVg67D8LQT5",
  "key23": "4Y2j7B6goF1qRQuNiqzhV8gcvQh7ybnGAHb7vebTTq4C3gC5fWnna28J52WXpbDn2JhPu9gnzyTwCo3HFm7ciGTc",
  "key24": "4Dj9xxLHroDpADX4SSmCLRvW8FPFCkz6yg2yYAy39vk1B7BUTmAgNA4duwwWPJre3Hf5GZkT9tPmXGjwLyqeuASB",
  "key25": "3TDVDrbwjsymmXzxBqWnUmmcvjzuhy6JHLk8kz7rgWkdxTz2jY1y3dJXAsV1i967T83UwvGPk2dZKeh7LHpuBrLi",
  "key26": "Jd7W84HBF1cZS5mSWGG9HVnTr1AmZokFyb5VnMsqFL6js1H4mLJZmp3YG3zpKw6mXH5EcmwZaHzPQFmwUPHm4F7",
  "key27": "3B77oEQSPYLcYPcFMiqgt9rdsiQWRem1KdM3aJg4SBL9MfxezwMyk6hiCfr5jdkzYLVrCFtuKEVwmKM8FDE8yQQN",
  "key28": "2Ja4RcruDGAJi6PHJaxykSbM8aFSXjoDYV3TN9kdt9r28diKPmxgdyeiMr87ZMAUKt55Tg9dH8L5SNw43PvERujF"
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
