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
    "5EuNaZwDpthXRXjw6HWYBypVVo4RaPHXyHQ7PsaZ8y7G67iZKeAitv1dSRWMpsDaPLXPWL3BXjUEvUAAcKM4py1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dXA7nGCN7a9P1LqdZ7LYSnASDr9U9gHepAz8SkmLBWGvJ2okiMAXhHV1KEAga3seKqHo3r57okcbJcYVeGQ8FcM",
  "key1": "66SWQ9iptXdxmWLzLLb5LX3ipcMGosKxVmi91Mi8H2PZaX4jy79JppmBgA52ZnaMPCsGJY6TYt3McamBAKh6QY2W",
  "key2": "5ZdLQ8kEVL8gwgm5o4esxGaAQPKKLNqRGL1eZCYGrVP4ssEqauozYdiU9nG5LU5YNpKFua8SeYRtcNwWGUxCK5nL",
  "key3": "3qXbVwJpp61XNdDfj8NFXNnKRKTsX9en5FAJACFbUJYJoCAwjEro3YPbWcc44ZG9DXC7KAZKBhD24ohJ2rZJF7Gp",
  "key4": "5mZrcNJue68fB7d1NU3V2VANwNHYrzYSXPvWeoi6GSk9kgY8pgpk32DDDm25w36ZEpt5askcm6DXxqPiZxQEasxh",
  "key5": "4VKqmtSr8ZRdwpdxz3gphXsbRgraozwZ5xioKBq8kNGWEQ5gSp2rP4J3Srnr2oJ4yeaB3vvmvndYjHsvvTUZ8Y6P",
  "key6": "4aK6AJ9esqwJjGtfXQQXn1rH3YKrJncSuzRxQENeKkkVYXKmjXgjCePPxiJiq4VULzFbEsB5wS1bVvetvKQ2F84x",
  "key7": "6wBysGDHEnFikdukUnMKNpFAnJiZDWUigQVzQagkKt9WnppDTjcvQBR9YA7rPYREAaJni9PxwqYLZXveSwEUTyi",
  "key8": "2Lt1HYYY3tkBKHq1bAoo69RVGpi4uSLcZcFRrQAVQ41oBAkaSRgYXFjzKBdevDq9cRjxmj2wSnNmboVQFiSsPcwa",
  "key9": "35GxKbLzYr97At2egCrjVWXpvpsk6QYxbRofiy1KC5aWwK683ms47wz9bMjuhJANFsNm6FBBF7caJojM3U1PXG4f",
  "key10": "WfNqaXntLZBhvngysSUY5vJZbN4iEoFTNqKqVohpt6xotj26ZnDZZmeb1HxmdirPrvnqgwqu2emNVNVEi5xXqgJ",
  "key11": "2Q3pVMnwS7s1kGwKg29bdVLPjrjHtC5mDthHgnMAJNi4nXb6KdDGQCU7rTJUvjJFwv5X3cm16bk5YZTZz76LrsGx",
  "key12": "3pdS7nYVbBH6BBGXCdfboGKeL3m35Y9rppGPsVfbGDqVbuqyKpunT4MtzfX4iYM3wi4858AwtgtuSsRbVYZGoBHK",
  "key13": "3bFqx8KfmRQZLcRSstvmA6dWHYStFLYDA16qxpiAUZTXuCUw1w94owGzqqrF5UGXejR7Boixb59iBbSWcKW4Bcq5",
  "key14": "2MbDokYsEyEj1qkfKoM4wneMP96C8LM7VGEepY2Fm6JQSqS2TFR954irGGbwaDtP1XFutzNqLuUrdjfM9ZqKaX36",
  "key15": "2azieVuXf8HgveGLW1WXC7rb2gcKGiURLUsVFfj3R3HzPsNR97kdqgfstz6khnXjR7nW2WVs6nNALGNUbPHXiz8n",
  "key16": "CqDiRUXsBAQKa8icG8Nh3njouhsnbgYzNZSHsPmjdZjRydKwRcpD6XmBynUgBjn8Zp6LfGMP1BxAE3G3Xgw2s28",
  "key17": "3bcNRBcac9oXXHRuSwr19WZ4zG1cXbSF2tLZzivcEd7BEdwiof8X4eHdTyAfiQjGejjYQ8ceEa4BwgGRViVfW5Xp",
  "key18": "3HbTp1wjm4ffgeDivwQfb3nvHKqMMrcBPqFQYGSezjcxTV4fDPknBX5tpaaNw4KBHBPKnLhtMKZcXCEk1weHUdj8",
  "key19": "4AmtgzXzmkKqf2UepT46odHWieKAY2MsooYhh2VsQ7vWJujrvV8cXueXVoJjc4dswF3dqR3fQPTkST5MqkCHACxA",
  "key20": "4M4Cx44s9tnLAQtoPKff4BrsEjUjnguBdUVx6iaWyqXipsf39DhNF43mJjVKnwfYt61djwVnHfgdD2wF4j1Jhxn7",
  "key21": "2FK1rgGtwfMwNyWBE16nBkYuNsteWwpVtypvR3rKAB47ze2cadDMwdPNUegamvtPFdwYdQPRv3s2YvNiFpmrUa6u",
  "key22": "2UvHdPQ417dm3HNvq6Ne7qwZy8ktUouZg7U7hvguLYh948MArkp7EZMMrS57rHgcWy6AhHsM5Xe4nJbCA7WEVZdA",
  "key23": "42LWE16ek3vNuqH7tRAsm9UdhSnHNxYW73vsvZXCU3uhdhVn2aB3dMnQQyy4NsH1P61PUihmvpzVLn7GftgM4XyU",
  "key24": "2TAgRUEnZhtXjEwgzm8UYbUSGiu5JhSjVT5h6rw5hRwhiFGnQbzxSEsMbRAuMHhUBFtnM2LPug9y2yytXiqCTaWt",
  "key25": "2QJfFzCvjfBYcEYDDk44Z2rurhmBaHnk3xAtUaePrRCxjcNpB9X3NSkwprE4npw4KAn2utmmJSyD44QBzFXUYNPE",
  "key26": "5UZVVsQdjcjmQ8VDoJ9b8V4ujrei8SagWkTN1u8it6UEfgW7dJ3mhg3W7rMtmLSXy3XxLYNYrXMZSxoV9VkU26Nd",
  "key27": "jo8kuJiLvBapAomY8DJTFJRK6icwEXcQ8eNdPysATNaFT5iDRm4ssxYCWtovm2XcG4E8NCcFxSvuu778QFM8UyJ",
  "key28": "UbdW27SXtx4jE4bgQ5XMRjPJGDDNdsZZjLKMKcV4VnXi2sUVn1eroHLxbT7bTAS1Gx2hALRT5j5YuHHyVRz9osn"
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
