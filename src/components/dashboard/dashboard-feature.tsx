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
    "MDT5ma9UDzKowf9wssNJanWGz5jxKGMeani6EHWGGWHFoNY6PWqd8MK5MauwrvmW7a1mRJw5VXsae5KFBdj1a2w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DBQ88D7rSq7kMoH6vskQyye2JNNqfPtuENuswxeKnAJsndvvzAEXWUtiBhj7KYhYDJh7EVdXJ9nqZhGtthydSK3",
  "key1": "4WcwocEoRZs7QxLRqGnCx2EisCaU7CfM1vLx3zkCv7boFMfAmwCf6fGC9MWLpJ8ApEniTDdy1LQyMsESXM9SgBAD",
  "key2": "2XARZreaJr1aMvFNtKaEiPYfPm6ADPunb5zrpgN4Qd9BKb6gxkC2xxcDYwino3gpzdt5tTF21S2n3Nim2qhZ3xVW",
  "key3": "2EQ1qZ1undfrNBRwDfVzYsRdnma75VUGRr5FpaJnMPeRowmcDDxvDvyong7iZDQ6UhDhWe8DjbioW5KdZjNBA8U8",
  "key4": "367cJzGQAgfGrLWdTQq9hpvAEqvswn4M8YR2qmWkNbaA55ParWwWSvT5Hh2xCTtHqXW9dspmjuQz7bkNzKHdU3FP",
  "key5": "67FjVSyqa17ejDkFoTMDk96ZySkH2jkUW1Au76G2Ynsf1j3kfkjL3XHJ2DkwYXCnMg69bjLEi3PX6ksBERrYFPVn",
  "key6": "3koKzMJsCqFrX3carZwojqtrarqUyMZXpSvNffhLr1MzQVeLumZkaZAHBv2rVAkCCPjRYpQtPv9MYernfWW6Eggw",
  "key7": "5oEZxHXG4R8ngJ14cXfCGUJN7YEt72DQXM41egGjXSAnwnFwWFfVGFXfnkQauf4VHXB9BSXPd8Q8MwZ6enJs7KAm",
  "key8": "A8baqsYTa9bfMoUBA23gYJAWWRmGu87P1qHWwNxv2RMPBKF8cCQksFGyeMMm8WM5mAHxmQtLHbXfaJGzg6uWnE4",
  "key9": "5viw5RXxQQtQyVmk3YQ158L6NCLoeULBDfdCqE5C533Y7wV3M7fX19YXj51CQcd4SFUWzFyu9G4LuJSYsWaT7j3o",
  "key10": "3tQGErKR7kd5UuyYSxcbcxzdBS9VmvZCBHXBsQiHb4RFU8VUaKCRPGyAFUuVvySWtjjofF3t5EUJDvAgy16WP52z",
  "key11": "43r1cRBi3vzUyttWq5XwjFERfCxc2hiqcx6sEci5Tpd7F6Qp2WqHnFrHGSBADGciiBdPovFjx5rmUd8fkUVGL2Ps",
  "key12": "4GqeW3phHopQxEMcQMEGbm1PsHF9ivnS4zyhc7co116N1fu3XwBMtBx6jKtpA6nbuAp1tYEqrDiNp6MFvMtXgaoW",
  "key13": "4XvtEMYSKmxZ1kBv5sWeYv3ue7LiQJXXE2oxaw7aKkpwinaA67dhYZrHxzuo8hDwSVwaCXB9RNXn6Z1tKs9es4EN",
  "key14": "66MhJdGRZifkDb77efwJtHcdYfkGx5FkXqZR7KGnyMyyAQAZnzcsLUyF5oy1L7kmkvNHiUdPr8di9uyApF5n9Wb2",
  "key15": "4wLjpr3iMs5TZFBzKxpWue6mFusNcNeN1YxKdD6bUuJcrZ3Sahcxk7qU8q2d12mzjqSMjRDpk7C5Q4TZKaaJ8xg9",
  "key16": "3wevxmHRigW42nxPUtnyGR8cgt6RoZ4P6rbgw4zzs9n15Xzs7VLRvx4545cYRLnW3twykkGRW3rwQDJAuFBzMTuc",
  "key17": "33LnKXK5wtiy8XJLzLKAwq4NYACfpc6qjBpqK6NPTJZJXAs6hUYqyN6da1hArzLwiLNVVG6ZemW1J3foZwJdoMZB",
  "key18": "2TbpeGJ3yUm5Pn6EpEwM6tnBPkJZNPt2id5hvyPtk41ZbgyYDjbKYaMPfDNBrkCh6wHkEAY3rvqVfZoWcY8z9Whv",
  "key19": "MX4hwnZ8yd7w7syGLDXQcirFHd2uCWwruUSzBvq5dqfA895Em9M5i9PbPxna5UoyTCLs613uAR38SdSiC3K7kyi",
  "key20": "9RmH9GDzMLxCCfDLtJftdeJzGodey4aZoG6KkrznKSy9bejChh1DgN6XZr21wQSsAczLnQMbZHisA9ro6KNcSjn",
  "key21": "4dS1PtGRUH74HAnMCuCsxCeeQVAczpg3vrQkjyPG8Q6VTsn4tRTRfycEKLX3hwvBF3jFKNADAwrTt3xPLQe7akKY",
  "key22": "421XutPwmVLBosFKR7UsbWM9rczDA1uTFM3dqQ1JZo761UDM5tuc4GhYgdgV7fVdfdv4o3DDcWzwYfaVw1aPYyvN",
  "key23": "4xFwpacjnzMLNUYWvAVZtori2yb3UY6uHRmMtwhYWUDb4SRVA1PQK1XGiRU49tLyZqY84V8YPJexHuqCmFfMARCh",
  "key24": "4ss187ApCiEQff6b1J2yQMjc6AFbHZbteKjfniKVZBZ2aFAGGsqsWXri8pcrNSq93bJivYKjVXRQj3ygpCJfLXU2",
  "key25": "5SQLTS68AY25Y469gCmdmALi96vtoXkwurvCWN14j8FTuWDhLZFVQBHEsZDx115z5cyrVNQL8qwagZYmCQCdvhuj",
  "key26": "EemAUdEpxBCe6c5idPUP7nZJ3SMXPRNyaxJHVURosFYJ9JdRqwEKB1fKGgncJakMt4EwuPecqnM9d5EPaNvTddx"
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
