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
    "2J3j4r3fb7DAaTYojMHnMw9HsyLqUffBhEpW6C5AyVEZDMUp8vws5y7z6e484pzbEWdoW8MtvdrvhGwePmQF47hk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pQQCqNumC3XmGQ3QFij8zbuw1KqUy5bNiRLDQDUTtHUjXvc7YYBtTZtxcNiidHiSUGPgt7oMDrdbVBQvKLsqMtS",
  "key1": "oVwezfBJDXgNe94iozwsCVA3fSWega4ups2LzUiGkoYi5Y6p6Teyocr6WGuA1P2uFbijGpDfFRLeMXDwy7sCymC",
  "key2": "4yS51UrJhbBZNU6jaux7SCEvyaZPTKHBtcNRWaJcwkfkbs5KP1zxYv25xG5G1erDUYbNSBg8cpAXnskfq4pPbjQe",
  "key3": "eSrjcgHPts944HsvpQx7wbXjVn9vUWrX87RbUY5HEZQadtJj9qnzHrqs6NkEb9A2ECV8LQAHcjpZWtcfBTBAHWz",
  "key4": "3ZAyjC8YVf6p5zAXSEwXmcKpEoJhbS7yp3UoZ7RsvxDQeViDrENUpfLNqpyxy2v3hD6wrFkjRvtE8Q62SZLFp5BM",
  "key5": "zeAmNRC5jVHaoJJjtuyiyLqydi1MUrUWvBAqb4JN6EPkfhFsXApNpbTu36itXztBPR1eRxmHCw1wyY4H5tZbwTB",
  "key6": "3RkidNUdrzzqyTk835owQ1miABaB8XnUFSmAYQNv1MMRNTtxK6PoBRWn4Ln8z7AwQcwyQboTk2TEB7eTERriU7gT",
  "key7": "5e4djPYSBpGwPx3zPd7FtiqEoSMi9DTKrJdLVuUQgm9fLbYQXNmszM91rhcTPwkLeka6i5a2WPZhTzE5yQ7K7nS2",
  "key8": "5BVfic1RJMFiWCBBJecR6LgMPHFB26PnyQxTTkr1cgkFq3hkRuG5iHwG9LMV5bfeN7brXMj2CSVVtxEtE8wMAEAa",
  "key9": "5DLfdteVWHY7ig74ti44QohGpPcsrWqVFwiRnWzSao9YfyX94J2DM95JYaBL9HdqnejWWxZ8TJi15zDKyyqsLbFe",
  "key10": "3Q1axzdLJJHyMmxjtceejR1S2e74WcUcrBEJrqVbbqXGJYKBQ84xf9UNEyptxryCLK5xkRjvCQB1r5RzPtFQSN2Q",
  "key11": "2VuF7EN95JABrF9cRzkoeYHHCuStHitWCqRumbQVrrZTsF7ffbkKwL8YS3EznizoBTXd2ptU7peaM2622hKnWdaB",
  "key12": "4MTjLuY3xKhhg44gn5rhkErxRuNbJJqobnkkvnB73TJhKvLB2ajiuUUZYcPMpa6YJEWrLH8kyLsDDXU1E1HZdL2p",
  "key13": "m5P3JRdDT9GdsCJHtmjKGMY8631uvmBLBAVjHrbtFX5DbsavyN3pD7AhskscyAcKsbJSEP3zunpN3tYMWP6iHdc",
  "key14": "43onu6gTN8uEDajnMt1ENPwKwYBZpkyyL8oJkXo2ozfv5sJ2eJnCmg8CZrVQcZVXCYhyxD3CgcSy2TTr3UreL3ez",
  "key15": "5TTNZJGDLGC6CrhPeu61fXt3AdQBx1LZfqWtfWEH5T9DmStfzXQXVnTxaUdgP7nspSCRfKviA9RRzPuQEHkLZJR9",
  "key16": "33CEqn6rtcsb7T7DYbuW55MWjkn4zWDsCzcDxLiYuvS1qXTLYthfDxXciQ595dm4tRJ8yjp7kijEUPq7CBZcjULs",
  "key17": "2N22VtKsHoDkB8hKEVdQo13o9FVpDr45R2AZA7GfjMThQJPwbU38CGDw7z2Vhbj6tovUFzT8jQiMce2s5F9MR92q",
  "key18": "WfzVwbgJiRjawHEQdePpthaFWg61yp7ZSnD8qoN6hZnQeDvoAfYHeiyGa11bZ4YhH5XLZTQrtdrkXQDrqskDk1V",
  "key19": "wazRgGADZov2k7uefBxTKg4XxCbVHp9tzZQSnxf8mNppygBgAHx5bCXZEekavmv2FgU3SDvNzUQUBQdnwJCGea7",
  "key20": "yxTojLwv4awT9mUUkEtxyGzbYt6s17qpUdmBXq85JJLqhdcNyAG11m2haqYnF9nA5wHnt2yeD9xgDVxJRjsgVS8",
  "key21": "23BFuLYQsWBu1HjDYUhQh2VFucjqCR17fb1AF2caWxScyVpZx6VsxSmqyLZRj2jb5RBQjT6gUwND3o9qAzw6gw5m",
  "key22": "4eXVuhemfGRkkF7XzxR44XaKkWPvoDR17ewovDvMeTw6YCKsWAUFmmrFJZRCJ8XhcEz43Yk7gGMnbRGY7RTNj2fK",
  "key23": "3kQA4YpnYkc6EzvzJ9GTq5jdRjeMZMWPqJUn2wQHAw7JeCKPztm3Sb9VpXoUrWLaVpKQq9tGsfk5mWUpFT3uPzfG",
  "key24": "2jyk7QtP8DtA8EtAYfrvwvGxPQgyP6E8EMQW91F7qE7WKDYps6Fo7YKeYU7pvQavNLJWzyXpfnWTcXgc2MfJ1Upm",
  "key25": "ksonrHDZRnMPDCTNPu5x2A8ig53hgREJYUCGgRbAuJRWtbz4QYKLm9s9T8oZE13ofDeC6y8NAd4wzovkMTujtox"
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
