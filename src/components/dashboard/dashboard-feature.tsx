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
    "3DLgPeYsLRHyA8wyVy6zgymqwgitTbk593dRsYgcvdVEpHgW8FS5iyfoKyVEZxqz1bBiw6a8pv2cim7T5RmiGYiC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f3swJjQcEAK3yDhCRD7eXv5koaud5Hj7GkLrV97ksgMeBFVDJa8mtTpJ66Js5bTBbKT9BF72WGhVPQFa7AovoNg",
  "key1": "5LdMhSecojd9XrZSHjXNZV3MdfGs6jUkv3bZ3CjU65SnxTbs2xHhYogfAZyq32H6HhEoksGpHXrrWBp2rmHfNjP6",
  "key2": "5AdVSsvqBzRwBpJxC9maxr3zWVkDKA5iS9Lvd5RZ5uTgGiu3TsZXQtRXBY4xrRHPDuo5bgJVDcMkawP2fyujb44C",
  "key3": "5LU6VQi2izdvK5wpwMcJNPzrg9P24uavQ5zvYYsdyHmxBwfsD5X4DgESnkjRvUGPiLzDigBGb8uNb8CTW9LnMYG4",
  "key4": "3XuPqnCkkRmJSLCdwxKJtTSSDbwRBNYxinSb2AsQ4y1ZSk8wtDPFERiRz7aJX72qYdgd6ErWRxFxaR8KaFWUGiiw",
  "key5": "2K8XM3U983WjPMuH9aR5iv9hP2x3i2RJ4zsExfqXJYU6tdJuhYnYA2s6za8BqCkTseVNC6Ueg9ps7rdhgbzHHesr",
  "key6": "wodJxpBgqQ9dNu4KosP8MiyLPpvxV7vRY1XsAZuBue8LSuoeaUbnsHUyZPuDvk6jEYNGBbUogevdMvd9GuUeiRc",
  "key7": "5wJ6PrChW4hETMSh1XagTcroftdkxZcehAQRr45FieYK6AF3eJVqR6C9R1vj2UvL7KhNWLDwLHJvqTTyotBaBrG6",
  "key8": "2tUU9hV9KVpze7RY4FzPZ2KzEL5SCXMJXBzsJHZBUDf9sr9v5Xq3N73ciTDGQnksJJmmoVVDQPv5xMECit3YYJk5",
  "key9": "5sqsvrjb5HVTkFGz9QEv3jCjfRdRsH1zCZNmNkAbpiM1peKM633gRrDMUULqFpWbWCtcofV5yM9KGoq6QTPnNAFV",
  "key10": "4WdnhEn3qaiJM7JAyc4asxDfZj5bPy4mk5uDES3oCTJEKVR7ZR96xY4qxk4jADkx77EyGsWzt6U9sMLLAC7X9kmy",
  "key11": "5vsYNKhQDER8FmotVskyanPDgvgsG81MFeupe93YjaJQR2xm84iAsBQKcy3Hd736G9NbG6ES8UeVE9HVisJJgUq2",
  "key12": "nrLDjN8aDoXH9vkrAFDhBz63GYTj36JcDBbZt7zNxP77p7P4sp1w3r93836MHuCp9UgmdyBAGdTDzApeAfjAvZ9",
  "key13": "4Nhv2i37RdsminhXpSf1JnVXaVpzq3sg5bmZxjKAZx2Q4s5YiPYqQLRv8PtDqRLTHRVDNmrh1Ybdz86VRtCaPDqL",
  "key14": "5rVfmnmZRa3JGQEvXvUqXo7HfrcEj53t1gb77Q2apTdqMmdTgADXm6cqv6imwYncvzBnh8FhDRZGFxDnZgu6pMNH",
  "key15": "5FrLoxwuUA2bLWxcisCfCAggoxVXBiF6QqRJnRKhAASCiGmsJ3Atz1w98Tf1NSHJsxACwskfkTDb2Feant9ZV9v4",
  "key16": "5URCnkiXYiZKDPHkBiUVqutWDZejpF3BfDbJW2q33XWA6WKaSkcdCUTZpYRA7VmdPaevTD5neY7jGF9GDH2Vc4jY",
  "key17": "31nNkTB4hn6R973xNDBckBVPcvKfZDxALdX1ttMb7tSY4G9pD9oWmrEq5xk42DtNnuG4sqnpZKgXABk4rEfShbwU",
  "key18": "61ZjdXTrEgqtTCAd6uZFQLgH1Y9v1EW63S5iT8pEXtvvQ4TicxYz2ddYztnBvC8ABPia12bSFgX4CWSQ7bc4P8Z7",
  "key19": "5w5pciBHMvUpAUthLiQ6Wd4s328sDwRRoje9zBVKqSvzpDLFkiqRiU9gvenpp3HDRHRJa93toKGNHCSCJqSsEeV3",
  "key20": "5i5m6jNkUULGYm1NxduPw4JCYdCm6zXXJxrWKsqvef1FVtE3LMuYPpCrsYRvYRmYNYDrXZpDtguP3qHVVECehu2o",
  "key21": "2oKzwsLX3BHSkxpnv74nKCNPt3JJRJp8nvB1aGudRjcrtG38XA2XwWenCazoHP96mAC48Eoj8TQBPTBLrbsYmbhu",
  "key22": "3Agd5Bn59wwtwwoQ4rrANLg1QFqCaQeb6PTtV144L6B2MqniUcTFV6p9Lst964QWWKumYbuFpJrBvBV3DupQExEf",
  "key23": "KKg3nUYys8iYjZybefvN8VJP6CrHYquUtkHygXWm6E44b7HKQPdQGPi31fsyjxAiLDvTb8tpfcdBd31wYZWrP6E",
  "key24": "33ESB9JvT3ZZxe5hkTtMCWP7vQRSk7T5Sg3PZWxDmhDsnTaXRkpVCTvdWF6kaoop4WxbZgyrZaP6Pa3rGeaTkQ7y"
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
