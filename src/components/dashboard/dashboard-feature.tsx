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
    "65hDNvzys3jtovzxRiVmHVTNn95UFY7ab3i1rUit4gEqVAJbkhrhMahui4wK1fMCNVLDmrDsjQ7t1LSv1EpsYcT5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zHRnps4hoidxnhGcEjfVTVPVVQayrrDeDuktFKBhHN4H24pj6T1ZhudD2jNcAsysXBsc42keUWXUuJpSodsnDna",
  "key1": "3zwUU2QPGt5F7hDj5qFL1EjBWaEvhM6xQDPQgzJxVUMdX6h574HTTk7DCKLX4KYHajAhGohJKqY4THNjvAHY3A1W",
  "key2": "2X7oHnvg5nNJJfujTGnCXDMkAHKweksYBxLAq9uzZshsZPf2w8Q1W9HpG67AS53GQ84eKyj34t6ReRUecesDtfpM",
  "key3": "cPWnedEdkZf7fVMe67seBijcQ5pwHEXns1my3FfntcdRprNRDuzmQ3RSeR9tXVpJRybZ3zGXMEq4MrHHkLhHF4p",
  "key4": "4wVPiKSwzqg6WTNNHEXRUgFxYAeNVCai76uA6Jivg8UgiFW5Pq6Q2Qd5ctipVCLwSVciVs5sR4i2M78NSHVNZNn4",
  "key5": "51V7MSfE8iwZ9s6oN572RkQjbR1MAdqdjR26Dycf8ndCQXVXcUfKaEx7wNwGchJQ5ffNktNKcsS5JWJ6AcQSUCbD",
  "key6": "3Fbu8onQcG42Q6C7LGgEXAvr2sTBSW18DamYJvkhbRj5hjseECew8DEuybkefsU4TPnYZ4w1Z3KzhgveYfmDyaap",
  "key7": "5kEdSRzkkxr9nYUfXcmUtJiMimJAVciWfBSNubxrbkCHhgbHvDZEvQT9ttNR8HNFarXzU1dgjecJcXm189Pzx8FW",
  "key8": "7mRebruLykJDfjUFfUNEJ89omASpNgotuG4tDgWfgUJCQEox99j1rcxEDJGAUGAD1g9XidkqUmUtBtkzRdjwLTi",
  "key9": "nnAtpseurCurxSNhi9oxFGsppbpgDaVXU6NMZKuXUALwwBmcLPiB17PiWCw1PvwLDkAweKNbkRYpDRYU91JdxVh",
  "key10": "4qEUBjYfJ3dDjDZLzzqeLJELyi3wC6TvzLpByRCSfZyrrDLGrwKN9on7udNcHbWZNAoKppu5aWrrgEKjzwL5tKes",
  "key11": "WCMgQhY4bxcq1pbmCyA6TymWojQ1wmq2yZm35dw8qksFNrxB3AojFw9mtNw3sCpsHE73tfzTHZQ4MdZuG6R5YXb",
  "key12": "5beEuxKY9op6pbK4MC6XtX1oRCd6gd4jzE1LRnYbufkuzCTqnNRpFu8Xneb2EZJhmZzJ1PsgUpwXR7eLaUnF7hHu",
  "key13": "2qnK8VAKhrGLCSYopgkkBFdJHbLiUnsFSyFwD64KrC9fLYAfNJZgfCTVLEvTChtNMAp7HU7SDcncjHwofroio2e7",
  "key14": "23f3uBiWZUDCzov12sBG3PbXrQ9ZZeSKwyh8VKBtXMJoD64BHWJVWo25XZvN7FwxKp1NEjdXJ64uKSnFEpGNyekU",
  "key15": "2pUZTakLbTygMwpgUujWMKpreph7mDEjFYALnfdrTQGjzGmX4TH2qy1pp91MJfj7gYLrkgJBWw4KdcHBNTMwj2sd",
  "key16": "3d97BXnGfZ5ZMUZc9DVnea1PswsWzpvLRtusXnpP4AEqbHWNHQyVkMPWhQRDzKU9htFjZ7FqGkjTWnxfy9CWpxNh",
  "key17": "3eL1JkpPXF3LJVmW9T7LSNp9pwbSqFxj1XZmXg9kaiNFPCwApsDbioFcAG6YeGAbGyoNrqwuACT1jqJrPbZ6wgq",
  "key18": "5hWmHx6rEy7DuzqYqYsPtrTJsZ2pqYKSzgxJNQM8X7eAajcJjXYZCyKFcZWFNxVTrNkbByDD3mqamrfvTfe23vMK",
  "key19": "2AceyZqDQwoxqon2SssnaARZZje378GMhVcsSAc8q6nR6AeajVY1fPWYcEwtk8BywukqsfYUv4qwiaaQADPSagev",
  "key20": "3nEdhJs2n5bGFyENiMhPeu9CvD9DvrySC9NEhCn6nG6r9ht6LJMoNBPDUERtYPLXED5wXCYM71sDTbof86LHPjtc",
  "key21": "3Zg2vTrH1pZTguuiDkcMhZGzAYyznVQgAdHjPvVTMjVLDuezCpbKAxeWtbFoPY1xmAHVhTzRww4C6uskVRCcarGV",
  "key22": "5MtJuUCLQ48kZUjAn5jn5rCUERZguRY4yQ6x8x6budr9eNpiYBwgV4J8gZQ8tdDykieQj9iUCsnzxhHUdbm3bcuK",
  "key23": "493UXU6ze3n7emB4BeX8JVnbb3qbhp4j6L4t7CU1kFnVrd19HixzHNCcVaoHZjoU82ihdXvsQBHdNqtW8YdK2GhM",
  "key24": "57vLC2hbQCAY4AqC3CTjikduRspPVqvJWggZroPxuy4kUKdv1vKqutfX5P1TfXrrQ3oUojHU74zypx5gxeUpLy2r",
  "key25": "4TnTAgiVf7qzfYWVitYZxDDtb7CyDhHorKGZC5otxvLozomx1m4R22dveQwHrjdAfwXHCy7sL9Wfoq8kSRRJMxhi",
  "key26": "5TvjDRytCTGqxVSnXo6DaXurk9TMygqYgr8Z5DE1bj5BqL5FovwzBobVYbDpybsGnNugkqX22KzZxroCotcPoqyD",
  "key27": "5VUugf3d9Udz436DRtsDpjRKhNfAYVxgyujRK7vtcC7cYbGueDfDwbZEeichtuA1YGhds8mTU4idBQ1dLRxAEEwk",
  "key28": "3ZDodDjmv41uvsX3MkgVjztQjjZT884ZwzZy7i6SxUZdyDdkQFCCKSzM6q8cqvEzdkgepyuyK7vZZRTpQAp5wHcK",
  "key29": "5q9S7ggZmqFAPisRzNEywZAz1Lj4h2ivAK2cEuLdmBzDGdnpB9i4JejuVBpDgSncpsJxVq8XBmMP3JZaKPnTounv",
  "key30": "23NYsatHzLeXH4cbUUN6Cb9pw61dLvho4CkmDm27PfdtZNyB3uXzMXenttNqK9tdhwpBS7KcWHLi1jS8TSVWjwwn",
  "key31": "XGvCzu34mkkBUbBexMufrGtUnbdpxM6dyLcrMj6uBfBp3bx5zedpoPXPZb8zFqFy6GRUtQxynM3xjthnpGxRovW",
  "key32": "4pKJwhXwydSnQCKyhF1462Ugzb6u6LzKbG5CoucTzvSSGp3iaVPzyHsqn4dZTfZD3fGZ9L6qJwEY1TTSfy1QajSz",
  "key33": "4bXCfFjTeXanb1gFaJyS6jXTo8mDo1rrLMQYxAxnP4MKVd6MtUqGaCcuGvfjoaYRFtyGKYjw8Nc1YpGCKruUmxVb",
  "key34": "2ycv5Hkip16jkGSR5Nt7oGQuVooYhgYstGPhVx9sRiSSsiztz7UB5hrb1LkoDVzJQ18tb4pEdyjE7zBavDsPsnA",
  "key35": "5HqXG41uT451v7tnDuKiAxbiAWcUy9fGZy4n8HrXc1N4xkenqn33p8575caM5cs3NgRwS7WZsYQpZDkY465szQVx",
  "key36": "4ftH7Y4CC1AjS47muTa32hKNh321Kpi7xv83UmhxPKf9Ev9AV9znuuzy4h4pGBZHK3DS31VT6JhRsyQniRhcoayJ",
  "key37": "5R4t2EzhujNAfH9mNGdufwfdXd6NSLzvwhBguWFQnVcyxwCRZjQJqrWCpWd2xXQLZWXUmW4tdc7oEFZSNBXoJKEK",
  "key38": "5w3yUm5aGxLHaNLXTLYVMypLYwmrfthVZ1noL3nSZo3TR5yAAYJFvmZSFkzWmif6L1FV5neYR43xvoen46Kohp7t",
  "key39": "amaRWK8h2cSeuZqEsTfKKi1bTLQkEykR3LA1LWTiz5AufyxbqWvuxeUJYLXQVnQWA9LipcGqJiS8Ym7iCatuDwG",
  "key40": "2jKnHoCVJN4qh1VSNJpLP9HRVDTKcP8BpTCfsA8zbmLm1cT7dp5zf61y4JLHaeqnshAG5UYWHB7vuxrYDtTPkiaz"
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
