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
    "gknRffDuVKfZnL4E1ZvUT2orgeSNK7BCarLf8brwswhzshUBJWMkZxGR213dCFrbEdR4VuJWpZKLRfbQ76mVjJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f9kqRTBYwZD6cVRkn4AkXL6FQDKhfzzvxVFBaUyjYejZn7EeMCzV9HdkbaCzs1JUKNV2hDCyZYp1tg8AmyAxWN4",
  "key1": "53TxzUaGFXMXzqcGzehQq8dRS7XmWgraWDyf7oTtVRd71sjaoC9mpNUah9e4ctFZ5jB3Zc6DPhBMfFJ8dXb3zc1b",
  "key2": "3uViUSAT43xZNuswu2c6jc3EF8hHb85ujNHAZEqnw3pMbBxeRxwYsviZkSri4cCnbnbhCa415QggnSNo3TD8hMzS",
  "key3": "4bCVXskkgfKuvrGHcymcdWD6JtESmjsUsZhcjpHdEwipmJvwu6yACeucW4EDvKGqLdsLMCkVqLkzoSkQjD6S1k5f",
  "key4": "2m39cdLxzVYA47ANrzMCfQpLqNAduMCkpK5oabdobdEqzhLpRhi23oRGhvjjZDLqeMA49gqyh1t362KQ2FhatjJe",
  "key5": "4Dfuzne6vVGVFLbKNw1wbEXVZVSJGeNh2aGWeJPLCS6VvK45btf239ZgBHBUU35UxMkmf8dT5zPAegSZFBt6BXz1",
  "key6": "4uN41s9o9YE51cqzYKLCRZcdErTkhxDEy9fScypAKR4rvkMRgVZfdJLaCLxfRsKLZgQSFNfLJPzuSdoXUonX3Pw1",
  "key7": "4B2VXMnXYrp6AUjbWnaje1Si9XQGEtmWjehdv8ECwJmYu7CnoAb9EzAxcKJsfbDsRXsq1JJnvw1dTQg5U7o3CLE8",
  "key8": "rRHc6HZdj1c7hPS57SCVWmxRtkdgbF3VabZnWiwK5n4NmnnAAbhRBFFyFgQBUYPkjUsyUQ8pQp4MPDuXsebjbzY",
  "key9": "4rma1hxNhN3d3RWTYHki5xPAGzTi8LpodHej3Kd6b9sHW2pr9sB2wi6FVdUhuz7nk9MwKoUm122s1GDLg2c5r9V1",
  "key10": "ieoUSQ7jc4VEpAEaZXsfQe6aP4WMBEu2vGJidHyJ8SGCb5gc2J2s9fpqG3NvGiwDprtbNDkA3Ln8szDRBw7znF5",
  "key11": "2y4YmVj7Eqgkkeqrmm3J2Dj2WRgb2Fa4XUVMjoydwfNYwgb4g4NRTZKxcC1fstYGHioZZTNNHYZeTX8LbgpipMF6",
  "key12": "3nvKCxDrWuFU9hQhjo3Q2Jt7MJrxxxLqimvNQdEuQdQNNjYa3ofCKesVLGA9oEW2aMTQTCVPuuQqKnFfX52qP7Tr",
  "key13": "34ds5G45jUcEJuzrzaEyaYMehfAU2uPaa7xyNtPuQ5K2BWMGih6YPV61WbQvFcNi3sgFGQwUmSKVS26c8QvzEABq",
  "key14": "5sqMyYcDCFUJfwfyGsMJ8AGRGQMKKuK7ZuvN8j6Zmw3SNLz8REnJGdS8mK9gHLZjPSpYnptGVHR4MWckc962ggw3",
  "key15": "2se9Eee6WMUddXEug9ma3MWFNAQPBXBXmyyiBDkRvDK9ht4PEppEqDLBDWheNCVZ8ngMXhsULcU2SahDwLXj81Ez",
  "key16": "4bMBoiLnNRqMWL3GkVJccSZ4t3AhJGCctCNzwvcqeGF4vGzq5PgnMgWuG3otCfVtxVxMkQkDKFY6og5a4JQV1icf",
  "key17": "uLgkaNCghxDWJHoVaujHHfnvnfhks2LRCCL9kZAQg8QujZC89H56EWZp7d1sJDSE9MnSFjX5LhQc7g5UV3LV6ZG",
  "key18": "4JDy9i4ZdQcj9ox1oS1yuQSn6eFkHyGbrAEBaZVusB6FpLzNNXw4bghKn9BBNteTFqZBTvJT2tXUdENnFaosCrNt",
  "key19": "44Hzxq88bK7QNCczbzVtJbHiRV3iGL4jNMC35K3pUTpWBoESvCKp9CYCi7KkpfbUazUGTnX85GJ3EoLjAR4s5SAV",
  "key20": "5XqpLzHCxiby7FPTNUc8xupuNXSq1X5ftC3TEjoqtt4YJP44oPstTrUkQA9H91bj7EtyrbseN8vSmnzZpb3j2jr",
  "key21": "3aP4y85PSbwEK8vFdEhdeziieDCY18TS3yMAM4zRHgBWD5eSrEt9cTuRmh1Ani1QeXH4WpGKQEHDpppRon4WPkjV",
  "key22": "51efVVLfEN2sYb4P8cxUdQakHSwB6BW3xYTC2kzLFPUc74T6qTBYpb3TNn3iCmtWb4WZ2szFeXYTwMSMhTyPryBp",
  "key23": "JLoWZctv4xXiKCswZmzVfbcTkPrQxrTCR6vNPEPwkrLgfpqaf3ELu45XUG4Uz3J9Woeses4vfR5acmY4uX5KqAq",
  "key24": "3yzFSDLjuf5smQoZN32nUFpTcLsw6YanNpYNwWMUtwVURTwTTpX5bhqs2PnhbYCBwFskPGcZqxPGTUAdajQaPEYq",
  "key25": "3D94TcSSKvv9zSc651iCxTp2N8S2VNS58W4VBnAjnoeKbYhQvUULnH4mXmESecWQgxyh91dXKJMcG43kYDUYqzzv",
  "key26": "4qFV1YYhR84TBqGqqhLLHhFmUr2V27qZMG5UwZEAEVyztjvYC7LqPhBoF6XU6BsAoiKujnNNYBtfXqz7YPBFadbc"
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
