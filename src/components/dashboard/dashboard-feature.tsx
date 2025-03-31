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
    "5UmBohJ2YnA3VRHEKdWFzLovUw48MMXLXrCzqAAUwap5aSSHCQmraaQc9sVzhKXXJnV5xXxnyRvQ5WmPca4efm17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KyupCmi3KP65LqzXnhkoy78jim4vAPYCH67dj5UcTaJL8zACsWrEfig5jRtTeMaPe2NiHQvjg8wTEP39ZngKHdp",
  "key1": "2ageS7dboCcJWHBEQAREHVqjcwS8GkmQDtJ3bghbZLekgw3FK21WLD8wRusFg5cBjPnn7wGodrsRoshoPN7TbhWm",
  "key2": "4MZ2kc5hjMEG35Xc6nmbEV3zzhKnQqMmfxaf3RnpH8XMjvDUtXWb7wuxmHh5kxY7JF5qE8xUeTYtgG1ZaSAwG6DQ",
  "key3": "47x1CEg1QGeZrfB1yCV4b6Fuxw3efbxXoePYppomgQyjTwc1GqoJdn4bzpH9mWVKLhsWcvkhKLbVsCqSfvE54uLJ",
  "key4": "napXbHWhNaa7HcG94usiKiF8nATgZPs3CRYFtXLhTqY7Q7gqJfy9ryofDPjvigpYcUnXX4afTwwm5vtnMNWpvRB",
  "key5": "51JGqt8d9v88FC9Mx1N1dRjpJVpNRvVTtUgWqRpJuWMbrckHKorV8PWjFYMAcondsmV8GLveTKfRLUNAgrp46BRm",
  "key6": "3cqwjWmw4sAdL5TW4sQzpYY2wSuw5b85Uan3gJtapJodqUQigJ9iiQkE5dEFfDBkRgaKdh98KRdWxh5EZPE4zhtH",
  "key7": "4EYedNK2RGMe8gktBjXfXNhcYjBfRruZGGUzEughfYJeMqYwX4qWppqkPC21EJaaa4szwPGTqmuD6GLzBRYwf46g",
  "key8": "5MqcpBYUr9XMRSPUhZXPjPEYLhZX77Cdj2pqKtoQErNwgecoP2RwxQBjUofh7s6YZH33A2ifZ7Zopsynifn9XBQC",
  "key9": "3Y9bSccFPgt2qFMkYGjM81f7mFJ1a8hsC9HzmxvCuUn8JdSzA4UR4n64Bx6K1y5FE4oRRZxnZdKrLgVRSsshXHyD",
  "key10": "2XqmSrrCqUdAYdWD2CcxkAeVLS6YuQs3Fo2p8VQJhJYrR9PSVgj68cNhacidLSHaCJBohCAG6TSQMdqGdKZmtdaE",
  "key11": "5V3HVAuzQvzvW4eo8K8DcvQpMpMb3Kj5agCErmSQitcEKqBkpLqiuuspVTMnkqA7zuDPkVH9juSDC3a4prJaKMpB",
  "key12": "58wEzWvAs2J7D1RX4qPU63abS4vc44Kd3hf4mF1upNYwMSxHab49VGC4FKLYYB1r3yHRGxAz7gGSBErUDqMUS5k9",
  "key13": "61g98ojXi5Ed1uGydZXQz2a5ib6HuHPCrVBEDKbhxWvavoFqG7j6o8v9sU9ko5PJGqN7XLarkcPgkVZkgDxdW5BT",
  "key14": "5S9sWdmj96iVLBo9qN4xhW94ch9wL96giiWv2d2jwrNuGJv1BENL6LY866HcMiY2zg22yiCNbEBZGWn3dMYKQTaQ",
  "key15": "2eNKZSHhKaVUxFGzugataZcMrYStr5fSxn2Fd151MNKsw7BR3ZGezU66j4b14Zfs7e4cKWguNvhWWDJ45YB23kwD",
  "key16": "2rsCga8HJCBHEdgxyMmeBR1XUuJVu1SmGE7oU5JPWsrQ2SQ7empu59ddFh6hx1BfxA7LXn8Uo1yDsT93yMicYMzt",
  "key17": "59ot4bjfhBwNPW7bwRux8jrBEfVBVB6XoQvnEyuEezzvBS2YV21K8DEBrjkkQ4URoQx3nbbvRjXfjh8RfC6jvFZR",
  "key18": "8rMJdfYo1acFKZYCMxf1GHFERmb1Nk6WWeg7mJRKBMJVpTDPvPmHtSzqSZjnGRc5YdJVsmtq9KBsvwNwu2yFrcg",
  "key19": "br6ygzG27NnxmUKtaBYwSA6syyC97JEzFz3Zi2H2aYVnELHvTn7TeR4a5yL1nEK1kpicFnEXcQf7g9FtVW3pwj9",
  "key20": "xZpWpuKA31JHeic3KQtTKnBfYo9q6C7rUTHiZbzkAxgVWE1TmPtPJ7uFwUmZ2nLFFd6jPJx9QTouamAVoc96brH",
  "key21": "i9CWUEYvWF9oyz6Z1oT6EmEXw39Wz1ThLWvzdZBTxqS3EzPM6gtqAB1tVyWesvLVNFgJVeTE8dnYnUrqBBpJJnr",
  "key22": "5ycUPvKckhu5LKeMCQE2APPykPHGnhKA4jXth3tss7V5MczJMA5PxQGYLBftyFPj4pFqu9dekP6sFmw8LcJKiYfj",
  "key23": "2uGSqKRCrkvRkG3uyWAHCHxwUn7dpBrSGgEVqKtAqL7CjvLnEH8aMdAFitTxnWQz4SY6v98mEyedm1djVZeU17Rm",
  "key24": "bLamQTWerQP6TSqHYXYn8bHBY1t7jgWea8UYzssz9nBABcV43CUmAXEHkV5RpsFGTJKSprBaxkxRyW4NaQR8m9c"
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
