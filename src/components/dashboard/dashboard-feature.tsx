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
    "5oLUHFXc4M3E7XfNRDtQqfVZ1eaXBu8h3UrPcHkArQnMxWGU4mAHMufQr2M78nC2uqbXtFFFKmsGkFTU2GvnaTvW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HKdeTG5uHaCt2fixXfjzaJ4ekeio1b5wV2XKHk7vBg4PHjvKqrNxwpr3zqjsBPZiVQukqX7HVXxewv82B1fdzN9",
  "key1": "3PAaD1nqLFMNLS62t2CAexJ6WTxzXGUfETiWvbiuDS35nSTq4tYfmYMQU1UKP1GJEfDSPVkF4ftpUQTwvtn6KcZD",
  "key2": "42TW31QhJmQ21mmBxioE2V6TJpcjr621azLfYpiRrkKR4eZ8g3JoCdNW4WiHYm8rZFGNciZoknQTBTNfiZx26SCK",
  "key3": "3c75zRYUz2HiDMJJ28q1JwEL9R7YvMqtcrB6YxvBqjWuvAMHx57Djs9LohNcLhnQaQ8jkekH4JzHvAy7FjZL6UJY",
  "key4": "4rmMWzRR88RUcw4Ps24Jm4nAA3Fne84f4L6pfubCLtAHXv2CNzgW4NmchUV7X9rwJryJJgjSzcADevtBt7EtABx9",
  "key5": "5t3XwyM2vHkSdX4LimfvdRQHjH6NozqFiptr9APxG6GQySkZ1cDLAfHMUCCUKbeuptpVsfmqAcP1GrQdhjNW9M74",
  "key6": "3rzNNrWYZ5fnczZrLZPsCgExyBP15H9sFfhA8YiqPbo2J2Ghg3bkk6Rv7F6VgJxGJPktVxCZopY9phdcnqv2Xcp1",
  "key7": "3DQviZUBqQq1HofujSt9s8SXqojjM4GKgHzkrtsn7P3DCspz6D7nFMEyEjAPWtF3udRQyG4t5PkhhZpJqh6reqAn",
  "key8": "4VmfcWZurPjSvMBA1Td9yNv8F1L4A5DVcU1k5qyyV2ekFdChowsYHcTj25vKH6U7e4Jow6is4mnUSmL9Em4HQpXp",
  "key9": "pdp9hvZQ5HePV3eev6EjYFKWW8rvKuyA9XJVyRBB2an1jEjBQABBMZ8KZa2Qbyiq7j66nGBN3YJAsZoitLTbfxg",
  "key10": "p4XethSo9RQ8asoLDxa3rSTRmTGobjv7gdED5ZUgcNm4JAh1iFULC8etvRyzaTebv5eUYVS8gkh3PUbYBjgEqfA",
  "key11": "2ffkw5rZajK39zo8VLmdh6eWkJ2R1hig3ocz4tFy7ooDXRqEgm85qweRPJJkX39Rfwch617hVF1VZ5YwJjuFLpgU",
  "key12": "29EoYjdBhYvqKQFaDayUYkmVfvdSGGgcNuV9iSL8Q3b5BFzZqYEF9jnvQ49yVGdugFDneggCsidynUUtzecDFZ3T",
  "key13": "5aHcEv1yZxoePfEqJhpz6Z1EVnUkosD5DzEwiXc1Gev1TpKM4z7V6SJH78jDvnxMny99HrUrudGCTcnLDpTWgbjw",
  "key14": "4sHk77qvtLWxhUQYytSwEUbNGjUxgg6QWsp4dL2ZE3W3DhFcmHpwSGLoSdjrZKzbhDUEo9MWXfnkdLEip6FqwdFU",
  "key15": "3LqQJr5UTxycFUy3AoJ1ZeKZLJCC98wzezujGF9SDrx3aftegeip67DWSWTKKVnuWNbSoyxezLktPW6pa77bv6RL",
  "key16": "5HUw61HpqjQWRoKnuSpEAzusWaihXrLXDoxEpZVTZ9hm1Jcc2QcToPJ3t53awmYXw21Ks9M8PJeugq95wNWFEtq7",
  "key17": "cxJ2hs1NyJ1jPX3K1zcUFQi9hzkgpGKRvBRNcpKQP1U95v8GPada4vG7ySyLpuMFiLu84y6WjYD6xDgHGbdYGqo",
  "key18": "5tj3da8NPHjrMWja1KZdSHhEjWzMQhJrWgGUggbum8zxKnWpX3pTmQWw9wKUmFmyFqSy3iQ87w1u2kwXQ1JQDoPC",
  "key19": "5b2WKFnV2r7XfmEMouFhSrGk2THKt6BtGrtXfDQBZhVs3r5y2Qpidc1t9Z9XgpjFXKYrAGdhC5c28ip27kwwfXcd",
  "key20": "2jHPzxcJw9kxSMB3evs81x7csrHvYA5TJgudJbBhn5tLvP2s23XyghTbHazkteKHPj7T9oXpzGasexsCB64zj4g1",
  "key21": "q321kr4P8AUynyEvZJN6dvcoBb39rFxTzMxqDNx1CSSTobRt2C5axM1crNNu6Qd1QMLWtRadoh6Fpuo2czDJYb4",
  "key22": "QPGbvAkViDXpq8Qz5T2LdPAcjJVyh2TDsgcmQrLmA77Uom3bKo2bqN1DQUF4Zhq5s4bM5L3jXKjBzjrJ16U8ZQv",
  "key23": "2biyGeSjsBJEQgiSQM7qRbLa4GYLxfd4yemCYSFjF75Yqy89BVq4HqgnJLCa21Yx8Ta47AgjKwE6Zqd8V9YcdYzK",
  "key24": "MfstKKLYd1u5QHqy5FHXsAHUKLGHpQuUngh17c8BJcmr5UzVyFh6tsvWPC77StKPmiN2JYYtcxVyLfdM4iSAPKQ",
  "key25": "56CYbonWRQ1Wr3VLh4yACZoiaVbxfhYaMFySpLVgMx4m8NyB2fy196ZxLJHvmVk5xwmxdv5q582GHCbLUCWPBXFv",
  "key26": "5fmHEN1BEQoZmk89WJ1jrz68W9wqWEtGkNZ5Yt4ni3UiKr4qLENNkL29RW2nab2mjKd4aM9FGaUYHuYKno2mpQRH",
  "key27": "4Ewk3ZidKuVFhCXrXZ2CXXK5fFbUwhotPohTSvwJ8rA6F1d5aZjZxUaPkJEVKjFWSK59hasnCv1KrTj8tcvKRk6L",
  "key28": "4dHB93W9v5xXxHoKNdZ5ivJDjNxZWVrmeY2LHcvUUbkXw4n5M7bLYehK875zdsJLcEfEFE1jfi2dWnnhsxn3aVJW",
  "key29": "3BXSEsmSS4vTaioZPcwNBfeZZv8amFqJ8bZsU2J2x1BXHZ4vVWs3vZQMbPxFTkVEAT9fyX7QKsmJj78LxLtHnFdp",
  "key30": "4Pk9zdXxaQJfYLkiCqxJYpeqXoD6QyXGBdAAPmqnENYbA9SwhCPhHfwWEvqukS9Xdq15EGeaSSYWsVQ2LaWTyNmp"
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
