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
    "63dNgeYzqD2yhGTvmWuiMsvmhLh8matLzC7og1CuzXXQwVuUnvoHcscUv7pRviuV2ZhgjbSaQbMEzGhQE5kmqHyJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nXtXyagdGF5r2LDkD8MQaHxdidKXZTDcss1qH5zxCYLKX5EdabMnx5FDDwcZJVo7m5r49rzvCmArsMXToL8kGRz",
  "key1": "3smBNnNz5PHXZT8hTfwjLKDNaxH3vwUziUBxkFnWN5qUBbUUeYcgPqrvWsCi4qr8JuddWzXjrzAgoR1hn74ZRUZi",
  "key2": "5KKWvfTAfHwH4ZLU5Y27jQoWpTivHM3xXjpy38idBftkPTwkYE5n9z9ZYokN29wSj5LZjQx9z3JJo8PotmyPNMrJ",
  "key3": "2u9VfrePLsnVueVT8ep6Fjd24X6JrP6sTC3bMkfrKFZQVx17GgCEarVhd6GcyWgUZEwQYVGhuh7bsJwUFSnhEuPj",
  "key4": "4ba9JCURrHf4ixkRU3gPBJthFPwzCRJPFNWNdhE5HRSxTFptFr9XRN1xaVBSDsJxNcqpWCeW1WFYE4wSHXhs7VXs",
  "key5": "2jWbkYLLoP6LVp4SzvJ7C8ikxkyCQDiJW1pi9EVzNB7ekMjWSbpcXF1xFhMvpwZAqhzJ9AHEuEDev1pjXu5AzFfd",
  "key6": "25NdUAmv49coaVSLtJVt15GRba6gRB3gYQjKaDE6m9UF6TGjSysvbkbnn27ENdtJ7AKWUSPBmKrbwKGBBwZAPeQb",
  "key7": "2dH57XBjP6RpkgfLTMsfqcNRYiEYHFagwJoypLCYzwuenTneZArmSGBe9APKxkXyWj5WZ4pMgjxuyUHZSpXhKQyY",
  "key8": "CTSAmPpKTid2eXpNtswK3UtX89oqcubKKkguEDaJRb6DJAW8Yi7TeuUJNpNqJWYxNFVNtAvhrj563AArmhScNT4",
  "key9": "3Z3qQCHcWgwpwwKYGEvWFstEAZ2uQPaKtVTw8y8hMzoNm5CooVQLPmzhzoVvMswZMjhqHep7rPXUb6WkmY7oVPv9",
  "key10": "5d6vvK6PoEKQZrP7AejchbGVmDuxpwugHw5tHrDJyCd1AtbCePPALbHnFmZ4rUgwkUb8brp4ttHMJBCoL1stY3dx",
  "key11": "5DSRaFBv9FFdjGYRKixBvWmQ8H4xWbCWfEDWsW7K7Co3P7ZFpD24kcd7SrATyDndbgzyhEGbmMjkxrbpiXHGFLjN",
  "key12": "2Kgmt26mHZrwmPVxXT6CHofqA7pqza5uXmJH5SBnSq8SApteYbbBBCq8zGReLqJVYtwB6RQjREBC5dKtkbQgqiJp",
  "key13": "5MQYf9HzQYQhrCFuA9vRWw9prYUa8yEbhgMUVNmth74XmtFDEqV8ufSJ7XDGoMA6pEEo7wmF54rB9AznARy8NNMK",
  "key14": "2PkMebdaVxSvW4axWcMT5BVCqSSRg41pAYTR9dmzcgtwYNX3LRz4ujyJuR7RXjxPteo6yxMNNYGgYsCUd7Eumipj",
  "key15": "5ddgHRMU2G9oq3A3WW6Mxb57HmwhhjpaResBynhA8CAFFiWp9Ax5Cf5HJYqguauWcbhCTjbvMjkHo9q1PtjQb78X",
  "key16": "4Zi4QjFJ26WxpaVFV1EnKKLSiSTFfG4MgiPwZ3g1CwKuu4GSsMexQ6c7ySMcC5BKb5UexpGxAhCg5Bap4BZAGVV5",
  "key17": "2M1odR5m7zS9aEiBrBHYnQV7hVcXYHuRQR1wxpKBS8HSjSvZdMhpDQcVogWXELksXLg98cT6ynXzzS6hKgNTH654",
  "key18": "ZTj46aKWjQBUcp4FmpYnTN8JK1ze1tv55UjwnqMjEhQgSN5sHVgfvixtTenHCU64i9kWgES8p1XvwG7MduVEmHF",
  "key19": "MiyXqhuesR3toD8qKYYffWNwLM17qEw4HggqUk8iXFefHrL6S9PKBGK3ajegZNWp1gquHjXQugTYKSqWTQExAtQ",
  "key20": "23DXyjK5uddemxe9DPQzznmbfBRJJnQx1Qa8fcaiBGQPdsxFch6nQ9KMX3pLqQXn1moHh22EvE9PnpMJBoY4U889",
  "key21": "217NuwpG8hePvcxp5PEX3mdMfVHHNsNgLQt6ZW5oLr1QFmdTYEpbYkKomib1VmqsKtnbmj6Y4MRUpaDHXX7uFphw",
  "key22": "4stxMgQNxcq99W4fa3jMyjA3xG99rCW98xYUbxR6fp3CbHNxyZnoXCtkVB9BFc6Wf5zJyzFS2svpdwqudq9w5RWM",
  "key23": "4SySx7wjEQyVyCmoD6AkEfnSH8PLaxfTjaiPpksywHbZE6z4osSYGFgpDYcQPFFRHsvqHhDmjYM1cB7j4fsoheE8",
  "key24": "5FBfjbzNeTe7Y22wDVmmwoioWaDVYgxkGD1DhEHWa1akLdkEbCT9iQJX71nqj69E16qPJFa2J1ok3QR1hDG46h5U",
  "key25": "32bvBVEVmyxSQ1S1sMHPkjsFLQLFtxkCbumuKkcbwEQquuMG8bR8EzHfbRwqw8XwToWqQYGvRrbUpEyf9gBwmV6d",
  "key26": "5rqQmAohCJNYUiRbX3p4YNkvxsub5gWAt5x7t7bKE3y4kEtCVgtftB5pDc2v1xhX8y6cGbHTpUzTgD6yRfX6JupV",
  "key27": "2Tm42qPCEZXvtDYA5JTTf6HHht2aHkj8R4cSDehxzkYik3UGi2RcUChRk5xVhWKJqruESyFDiBPD4XGu8TJgyjYX",
  "key28": "4M2BCUQf8rbzkCsAF81E8SjvPbUvgCMJg71cPJawjgG1pRri2aMuZ2c4L2i37x1bcW4zHAyKqZNqdwY8ZNYxN6Ae"
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
