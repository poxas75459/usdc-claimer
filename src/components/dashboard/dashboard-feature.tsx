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
    "2wa4TcuQL92FpN9ttWVRJDUpPpLqgHB6dRHf4cEkJHbiBMP5wh4arbwYen9Y83qnPGw7hkgbEkG38j1GG5kZYc49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m7SUgHac4VviHpcZ7TTuYUeMQmrdDHvjwcMakenTqkdgXv3YQXyVq7o7JmbHAv4sJ7apib631WmDHxWDUUERMg5",
  "key1": "667a9ygfJ6UDM2P1Qk5a5YHuni3SB1kyR2mBJBK3NzrzJpVfmYT99h464moaXog9Z4TnkJ2P2LSKAuWHY4W2Xni4",
  "key2": "3ADitKffji2EbRWLSsukABJUhbWvdksUxWjKaNRXPoKJLUeqB5QBNWg1WqF1Zcvw3oAhdHhjkWJG2s5VDjRV2GXR",
  "key3": "66APzbH2jxcPBMsMsZeZ2EN9CepcuTYv8aZCLr3ENU4puCe7uwHkeSc94JRm8Ukxx6Zq5E8MkLsrWH9yYNvdWdc4",
  "key4": "DGrbXrrqRsS2HDfPyGApF6jZG93XBu47sUH3pdoFdu1JMoeBMzuJYHEKt5H5TSQDyStKZStvCZywVAgXoZavY9M",
  "key5": "3BE11D8iTpPMawdwNuiihLiUUkPC7qLCFmjYfTbTLGMniwFRao8eJGCPHWthPNbTbiSuA3JGmouvrWUnHwpaEqo4",
  "key6": "RNmiWoTZ14c7px87hyCjHGKXcAPoKLpxeuEF1KavzYkjoP5rzMfVzx5cYNaYPEMfjkNxQhQsAq6GSn99NZXJMdT",
  "key7": "46FJJyyk9rpDwWxUsJVsooEaafWzmL8D6ALCcrY2sA5fMr4fjcsDGuPAQzmhG3qhbWpPLAfCiQbXbVmnRsdFgLEE",
  "key8": "AjDtHGgVu5irZ7c8myagzvzzvBFbxxn9dUYeXeCciD7CQVFUZCHj5eHoxhZ3h1boTx45pafqPpQYg2jvLYNvhoe",
  "key9": "4AEPWCrWRrEwyrTKBXvA8oxnK6ChPi2tNnuoXdoyjDmiNYyCXAUZb6cMvjPyQB5Zz4WNWaz6GE4zE9CeBiGXXygF",
  "key10": "5RA5zwHcjLShVGoSEs8ukfyDwKCVWoWs7Y5mc27CUdF4zfdwdQiJiY5yPnkVY6vLUS6HwmsteSWxGkXgh62sboUN",
  "key11": "5jSESKZDaUpbEVXQGU1xJDqf94TcQHa7gZgSDyQFnZqb9bombHjoz4CXqhZKYDqNSqKAtHXGVUTCNHhUkCnkaq55",
  "key12": "5nYPm9BatViJoAsPnUxkaYabGEWRQYqvJkJgVmwN5VpXNCJZdriaTgiFMPSZcYpxqCW5fQmrRS69Loz1P3CbKhwA",
  "key13": "23Vq28AgJMFeRAEY3YSiSd4BEKQdwQzc9WUg8SYdqG3vZgdKiUmwzreQJ3RQKKyhfKyLihAf9Je4LhZ4Difm7J7g",
  "key14": "d3xuaQk3tMnfkAzzwkeXvVNJHiB89gGS8ASBHwAmT5yayihFPs9bVu4xDueee9sWFfnkHffSPo3ZRM83hq4hSz7",
  "key15": "3kZjCLw44B5fxDrJ9nyHbGxeUene4eZ3FTXoH2sqUSTjUZDtgfECyUqaqa1FALBocY1CKVN9g6WmmeXrUcJcT4zL",
  "key16": "3V1Y8u6Ye8rKo4XBz3A3yJddnvYidXVNhuUGroZ7qXicMnpGMT53QFGXmraSR1BXj7ZqKSJB5Zs2RxXLMTAPErzf",
  "key17": "3b7tZHbDrG4KfwEWxyZ5tt3XTsUCzhdZMoS9popp9DJ36hV5r7uHJ1WbKrbpyu7SNF8zhcqVNUzHfSxqSdt2gLod",
  "key18": "4DGupHpfwbnQpPwaCaCYu5v9uWpKbHqBsZGETDP4QdeykYKiEUPfXZbSMCSfWxkdbKyXWUkK7Y7vgnR8nmytX23x",
  "key19": "2pC5aFkDfJSr8V6jWMa343BsnErw57hBx86N3MfjTSTVA9FuX5U3DxH43vczxQ1WskDWveg5zv9oq1GuNPrdBEpB",
  "key20": "G682YHz9huymJEtrZzToNhZb163ZDKvXGPZbgAp9XkQxs8pkSqma6RemAmw7zs2mKA4Ewg8zH99EDnkivAi6hDH",
  "key21": "5GgL5C6kgPfWQ9AJc1vT8edzVcVTQiKZUcxxtMET6adsg3JbDieSKCkHGHgKF5cAqGqPaDj8oiwbwhtwLRYomPoy",
  "key22": "5HtyRZgC32Wi5iqYdRJw2TJnRXR4284uBTi67bEF8fPvvijEqfiNMAskYVCcWH6WfdFFfBkaHF8euxqU11zZYuvd",
  "key23": "h2hTf7zWjhhJRbt7m5aUavCdPmtEYz5wFSVBoXLGAQRpgFhB2B9GUH5oGQh8g29wxJSv5GKWQhJ3NajUiUMowF5",
  "key24": "4m46KnK7tQzfsQj9jLT94gmsyC3ecdbtgD4D7Z6NQJ8igRB9d6HB9biZ1sJsWcStmcPZZFfvUn3sRaMJkHtrMrg3"
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
