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
    "3qUZ8T7fRJEk1jp1hHr3H6zD8GemVQ4dZpYBmKoeauGUmsnpb3JNJa3cNdxH9tzHyyZwtEnudcjfrBzc5SYnBQMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xFYqaHjrYxKKcCfFcRY2fqtyJf51nA68YHf2B6SCVNa16jqEZGbrxkzouGvNknFVnA4ohK3rxjp2eLi1tL9v4wF",
  "key1": "5eRqmsWzRYYAqLZ7cb6DQHhDp2sMrEdj9vpvWwXiKF87aJfeKWPYAViSxBcdAYfsuXV1B8PJ1VH3foQZiTiofNq",
  "key2": "3Q8bCAnm2HxPmCw56QoVMyL3EJ9KbUpuS9Zfqn84thWw6XpzKowfysVMT7HXBwHfppFXrXCqHGsqige41cwRJEGD",
  "key3": "5P4Lz32CM1xPZcaA9XKRrogsb5mB7Z39iNsDHCtTVDpYa8V7PYrzucWNkeujMbBsWjyaoUX8duG8ZtbP4xtETHUy",
  "key4": "4ZmwgTUnVRm8FUq7GUnLnYhN5LvSTQa4m2xaN3n3fZbBMn1G8dJgD2nid92y2WguQnib3aCLYXCWtSZpVKcZg1yV",
  "key5": "5F8GRrs74S9gdfvAQSHKf5TUiDuNDGXtUnbzBG2ToXqcLLuEBWzvN3EVrkbw3zv6in2yDrYLvjZxp5EeLo2JZD4k",
  "key6": "3N1MppbHQwpdeLxBiw6XfCbgwCmmcp3u6mtkPKH8MqPHcdvBcgurauzVUm3C3hzXSnsbD5KSvgmX8Dh2BV1n4S8p",
  "key7": "3JYFetKDfyTuH18kVtaRnYDsEr4rdrSDszmjJkpSjDzpuCbtSefybzPunYgsXhnb4iEDiym8WkDjYKEfBxvBdurk",
  "key8": "3KU6gYdraG5NjmofqfLPZcw1sjtwLB46TaRHdKQREt4f4CoRRu9betcRmnmJEZquUMyK6czrtbERBufdivegGu36",
  "key9": "5sfSVkBbqYHDL6NBDWGDsdwrzfkvHPY2DPVVcz8nYy5CpVZAdTaKC21Na1LFew6c9RBKeFV2c3jKcqEPd7RkZ45D",
  "key10": "2bVnMFWuUjPzx8VTvoPXfUMoDCMww2rukYAQQV5EGVovzeFjPHSrjPuawbqMobygQT51joAtJvkBqUYVghbeiuS9",
  "key11": "4LKBGtsDLsZrUrrWGhFT9FwftSd5qWzKGVoUNDDyvkzVDrkUR87LyBep832CKc7aVQzFwxepua1xKPYfJq7Nx1je",
  "key12": "2zfiqkLHjjHVHvAZ8rnCEyao5b4nAVY3rzfCCXZjJVZDTh41oCjsfaSbFDys4gFyQ8thrL5gbx1zxGcJBv8ma1Nv",
  "key13": "2ucdRoLrVcXNkK9MDSWj5SYTAbFs6gM6Q9sbJVNpRMcgeRcHtjoMv3E6c3D5VSvY3oz9UUdC4txT5NopeesbfFEd",
  "key14": "RPCUAW38x4z55FeKCYaxCQLqzkbHroGcNPszK4gfHD3SqEJC4xdt6Wa4TW4rHoUS3NocY8pXT57BG3jwVtxXSdS",
  "key15": "2Emn9DM7vq5U1uWQ65hPTLV17MCxZjy7sQUxzV7buuq6MoALVmCotpe3yzsbJke1dDa1jwEw11kLnAPuvhpB8JKs",
  "key16": "3J3DshCdqZzrs3uGSVJSzjgXc6KgAmQMf7ZoPVB48Cgd5USxsw3e58N4wb5eVpHT4SfwRu7ScquETNbJT7eoozjJ",
  "key17": "vmi4uSzPe4jZwxS6dFNzx52sv7KpcvfspJYbzLaeHrvrrpC534QaDqGUbG5cEks1o9X1tMHc9gBd3hUk6qoSNoa",
  "key18": "4EgiexW77hjYW56qWy2V5AAyEYiHKijRhSJsoL9E1yyMu46ZitxNcFxL65on3bFzsHPpsEuUJDT9m7nPyMwHJtyi",
  "key19": "4jvHSoh4X3Fr5zSw1HtGDcEhHDZERyYznTAEjDTExmYG3u5xHC4L736hSfQghAnP87bRJ4Hg3TzHSyboKkzFft5F",
  "key20": "34xRLCRxA6EbX5oZi31ZVZF8sCebZicf5cGvRcLUKcdFMTzEvuuKX9RAvhy28fzVDwBhwxywUV18vp5vZ8Z5dU4p",
  "key21": "5yfaNHiEwzg8FUVHqNKVVX3Ek2PdHQxvZe5Rdd196XhVwwijzo4euZwmztDXg7XJa4aWBqDqeGn2xw2Qj1nQUtY1",
  "key22": "5RbjWBQ7FWeptV8ddp8fjE6bjXfcbSMhMrbXK51k2rZni7747z45ukE2QuzNoQp7CXs1ppCjibuE59KxysNrU7F",
  "key23": "5jUQQujtNzMJDZmnbkMC4JMRLXVdagLw7aSU4ELadX7xdyi72LvYyvf9XcGh7R9camQmfdefNyR7sMko4RB1c8Mh",
  "key24": "3xYvDqyz4L6iWbGWcZXdgAuGv5YQYBZmctaYHjcZqyEYsKM9zGddrNFHgo3sNPA6Ceb3Q3MGBWqp6nQrdEHj6TUk",
  "key25": "4wXwZbbBvWh3YdUcGovHFonEbgKuMrZ6ehRRYKaxZoAQ9miZuY7GVwW4nN8W9nxjCFj53pZwGKCUDpiGehJem2Kt",
  "key26": "3vkmDbUKW1DLNAnGSURorz3fu5QQ7XNXVuqiUNiyzpuQD9jofiKmeo3dDTXuaEEP2NpsxBjMooesPEV6UBRowY9v",
  "key27": "2ZuXBykbhKZRL9ognk9qrYoR9JzGwSByrHyMmZ2AmW6rgqCfNZv685xCnMbSZ9vS289Q2PPZ6YKNb7NiyYoKRoHH",
  "key28": "5REP1BFAtb4vbSRRq8tqnKrXCoWbWBfqczYFgncr9Z7ogGYwuyVkxkrJpGFLZbspaEkUSoBG4BYk17yTS45fueW3",
  "key29": "23V2bFTgVMqCFiBY2d6XfY1PUU5kJ8FpDN9XHUwcSNpCJYUFSykLFt6mpLP6c9DSkSpsE2QSWtvLhbXoRhRwuqqp",
  "key30": "4aahbLFHvW68dcEWxtJAZLLGhEtHjJBHXc49e7LwPCKeqyJMpZbaXQgNPT5pWErPBkKMkKHCrsf7DJ2yYuL1h8LY",
  "key31": "5FYWYM6bBCCfWzWD9BKmAjWgkUACW7UeGczMj69KCpTZLrGZx87sYk38x5ofHLWVDW6d4iv511zSMZizZb9mMQTE",
  "key32": "2sLT9cLJ7oHT4epgeWYHBd8gGha3adMEfSiEnZXbt36GQUCZHZsC6cTWiCAfZpBfz73ku9jX8NtsCL8pyhEiqUnb",
  "key33": "4xNvt555DLPqAgwHHKJKPrfj2nyAMhK8k4W3tEqJQzFXXbxm1Lcgs3JanAuXGMH1HyV2Ea2dBQzmew5ExFy1jrTV",
  "key34": "453GkHN3kDfQLMc4jgBxXrRNCUVM6ms43BgUYWbQVariZW8eCk7TfyMFUfe6rozHRdg27NEfJ4FbNLC4L3F7MMx4",
  "key35": "4rWT98nC8qBD9bGXCk8safrTT2E9BQjKfk5UZLSqYoksjzwK6Yf4obyTUSNiEM6QjWeRUCmJ3XyhHY3JZEH8paCL",
  "key36": "4AEfWLnZUpzHkzTwCQFSPNaQKZ7dFuDgaNHDbdhFwZtVRQLiXy4CMaXz1EHFmHZo52rZ6wUR1eivwR7YqrFBFFwW",
  "key37": "2ko8pcaV5LNTR5Uqd5WcxdUsUiiqwS8DTf4XCLWm7aEpNJ2yW7kz7eZ8tnaj9DxGxjqw1QnRXas8KdHNcUxC5uvr",
  "key38": "4MuiTaJzsvED7AEMawzYyuHZgWFjYBrL3TztSCQV5A1MHdUA2nRkR2hLzXKkH9hSjWtc5bXD8g1ZgKFFC1zxT4eJ",
  "key39": "4ydtKxT2k3U7hiqUiFejz98X25sRsCtfJppSdh25Dk1d9PdjBPdpKLmeHTNF5uNyiF4xEX5iQfDP4oUKUf4dJcsW",
  "key40": "BeCbnJbz3crnt3UCh8uXcLXL9ctKUX2o65d3WSop9Tq5RKGtJnBKxKTqVw4y3DewFvAZjoQVwmn636svcibRXea",
  "key41": "3v7Z3eVzaKMBvBkhikSpimkZceifY122ncre11qDEzCZmPdhUZBjShzE5gjZ6Fbvh66zHKx6pUBpF4wGmj8XSQX9",
  "key42": "3NKQ6XMq13WvwvkWTvGCrTuxm1Dd5SJmWvWzz6xC8mfhJJjri7U1UvYkLAd59TV3iFHheky2AFQusrzkT6AJC751"
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
