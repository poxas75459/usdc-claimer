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
    "5gRKYRAGEwBZWMBjHmB4TurnabVf8yNa5gBDYqW8WpmNLP3rujsnAD39EGjwVDkcsz35GmDfDNGr18ZUVT5tSDDu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24VajcHu7MZnXEyJ7EKbF1dtEeVawN9iZZ5ovQMrjPxSY5gLKnD6DkDHHSouFWztusvNQpCwMpXZ3rAMYzD5Wz4Q",
  "key1": "zadsCjNz5wyehBWv9AAqLxB9f3ixPtwAjQijehubVX8ZKWjAoHkthANcFJ7zX1rHTDrhdktsGwPqD9vjXKXm72n",
  "key2": "ADBkF8S6LD6acdoXEzMiEmEQzVymXSX6P1LBRj2TYWXPPDFy2Nw8QRRVck85H7mN6P6RUJSPZLonH5D1bSet3z6",
  "key3": "5eK2WWNx4fgwGDqjjEURyR4zStHkzs9sbvDLfRV1LhigtnW6X6aonb8eGEvKcrpE4n9j9SMW4RXsAWfPDkDQGMHn",
  "key4": "4XEKqx29sXjbHC9Zq5385pq4dFDvv4wPU8vWjjhA6ucYny3PNJwhHag3JukmcKXg3pNyNFVPnsDXJUhRMzmUn7oa",
  "key5": "L2WwFgzmGQPpEo9NqGW2g5vqUH71PjvYEqqAxLbgYXjn5mx7wuYuJ9GWaiVjYNubfUU6juGAQtoMdBihJwaqYww",
  "key6": "3dHiakDnxc7vEoBNipec62fBMjUfo6fbxxDdw1DigQgU3xTz3p4u5mmLmAwTYisVhbceYYQNtndXRWpopFtUYLZv",
  "key7": "4VjwYGj16YWU9Hei2NT7knKX3shVRrZBSemLbjfiUsTYhqXfxJRbsUWUyx6S7PMpWvcP6n6MaoC1a8KBfrSvKbLd",
  "key8": "nGLp8U6Gi4PF5KCy4p3JPGdpbcPWjphe2drT6iHNeXUGNmdjoMoejrJp9vjeJan1N4TGwqTem3Z3Jp1rKPfLeqF",
  "key9": "4FC3JgAkvMgEAu3J43UkVtnaEkH2G4kF3qwSYv8YxpyVxTx69DymqoqbDRfVkzrErtJJJCpzpFPhfUDVAmJfjVNc",
  "key10": "5aUUBn2zYsJiXp5cekCN4qfD3t4enmSCsrDdYW9BBQX8CaHGFwg5aZd2zhoyWbcoo4jKwA4UNn82BHij1e3HDJDm",
  "key11": "4YnELHR7emN53GZVvC6K4kyAUuUvWVg8r3sWF5DaS8W5bAxsHc4pq6YeQ6pffnSxsXrEsqnSo4LhqJG2UAzGAue2",
  "key12": "RVBVyRzHJm4Z9RzgnpfUwvLHLGkbxnYJBQBe4QtgGUkjYb9E8dmoVcJtB3kEiee8rJSWPZvHein4NrVLyF7D6R5",
  "key13": "5Ap9bnnwQTACt6TUrWkfGiiBna9BMEE1wth4Z4tfk33pEZ172FBhFQ8n9znSYfgnaPJccsQxHfcacrwqs1v5Kd5s",
  "key14": "128nJeWrYiPFhhJwzdVrfHs4f8tTMjEBz63R5979E8AtDDe28UKid4fE9XhV4TgwsW39iUVcJhsfNjk1FcU43u5M",
  "key15": "4Mv4pnRhMq4iPcdcZzzoq9vwawtrFhV4QmKuATMELiKmrccCCUo1WBnar1ahcmXufaMV5vofWmcjjyrn73DWjGPG",
  "key16": "xVB6MwLNKbknZNDx5qABFMfp6R623nbaEhHjNMbBLdsQc9MjgYrvc9979tFQM1qX6LQsUprp5qHbiUoL6cBbTPs",
  "key17": "2v4sfgyx9FvX94Zgg8fwfXc9oYrp8jU6g5f2e8XcbMXNodKamn7bySQkA9ZVbPuSa76xRawhr6JmMZ5doSap57kS",
  "key18": "5FsDo4Q5AnB7Y1j7whhrW1vDXronQipu1n8X8xYSBArywobRiwvZGe23UqnWuNnABr6KZRWxZ9eRvCHnk6DjjsQg",
  "key19": "5UzgSCbnXoiZWbWXgcntuQFVzBxYSgfgAhqN9KTJ9HDTSYxerEv3vT3Gu7Cnz2EFjXf6Pif8PATcgDeyTZuFfs9h",
  "key20": "5HhCZpB77S8o5nfcYfXmurLNyB33GLfHEq6jjabmiWowaRXkqfhTKwVjQ7WLo8eiCGuQWNcMqNLfuTgDDdRwmvFW",
  "key21": "4ASJ5hae3dQE8yiASz5YWFsQBKmoyn6b4itc9sdsznBxeWZ2adn2EJLkJDbUa2bs1LzbEC5BjDH3WPU9kd5VUNDD",
  "key22": "2ARimcPBmWDrpXdxtXrtkHauRqZ9EV5fxtCeM3S1yd1XP7nWzaDLDp1iq5QkdN2XhnwDkXLevRDtVDHwgrjr4XFU",
  "key23": "5BcUJcR8xRMmsusa7pChR3disUrXeGWLgn6j5WNVgUUVG3QfErPx4cXh7SjknzAwTFncQwSkdfuHtXN3kJrCQQDf",
  "key24": "2nAyWmyQDowWM6HRiCK9TvjbUJ5yEkSSDdPDjxHDJ2ZbSmd4pd2njP8KvrdE8XfRJUvkGjNLGKJxn29wsLMhUmRz",
  "key25": "4sLjdVZWPZGFvW457Fk3nQQmoH9jmjbDMqmat9GDuFFa2A8HPnGUdDQA7hL4uBBBg8a3BvX8MiLCADpsDik3ELhd",
  "key26": "LoDfwtFLPdVxvbjR488WCYovk6FbL3kTj5z28auSR9jzF8qQjk9dL1C37iM5uoSkrRN9nZE94xWGuMsvoJtqsCX",
  "key27": "35voeo2vB7YRggvWShNHSoDvjfx8GKq6Kf9DLajt3Mk2DFKn9tcXgrxsViuQrWhp15vfiHk5JezqvtoyDNMngzTv",
  "key28": "3Tg5bq39rVNiY38VdApGBEn5kHxDTMXbb4rch1crao2RZYm76qx3b7neio77rPzCshj24UVCep8BbccfbX7BBqmU",
  "key29": "3abSsJqHYydDB2qMUmgjnX7dd8sSLny4WkVHTaNnxGTgvVTqktC2sPaWgyDqNRssvxkYLzQL5R8hG8vpkZP6izbJ"
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
