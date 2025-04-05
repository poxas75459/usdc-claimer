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
    "65Fu7Q7ssW2QCtXX8jUH6bsqvuqhX8MKXF9Fj2E57xgfQQnCqzBpT21RAum4cndZKZkPrv6nxExbxbsHbqMXXXhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Tiuo312BUajn2Y7dCGjjo8UPsJEwBkytddhc7HRKWoQv7UnjmtZMPXQbgwuSUD5bMQaDX81SK2W6ABhemNnQbRR",
  "key1": "2yMQBq1sBiX485EqYWAbPV2K3w88z8tyUUXT1craYd1dtYzrZLWzF3PumZbj8wLFZsMuQEWRUY1QFdg5PTiQ8rL7",
  "key2": "2GWoJMneBfKBcV32yJipFujis3RBGZSxKBRyewp7wWm49ebcE7WSSnLuyijg4inMsUc91D8afhuWWNT9mKw1ce5L",
  "key3": "4PEnzaeZK5yskGDHXCh7Bc59pyCTQEnnXEJ1t5CTnvhzcZmD17sUiG1B8xbtD5yKkx846T4ZSeZWJxS3pt1wKetN",
  "key4": "5qwXLMBAGqTBu3oKTDbL6QNjaDDRWA6xcnsQqhtfqVh8rYSZ712z89Yn63VBUutpHyjradEYFbFc9oxp8NkjkHEJ",
  "key5": "5Xm8XnZb9uqJyrHjuBBFixez9ia7KLyn8AYnC71sMtxdZ4hXhMJ2DjZdGB2985hwQjYbxDpJenHB2KeHyvkyrfY5",
  "key6": "3D2fs8aLgFGrgqM1RnwzKFwLx5XK4aeCobchwEBkxAbsBJ5UZe8z5pKd5KxJKucHbBcoJ1TpDktdDumTcGsXeBic",
  "key7": "36aBrpXikEcAALjuERSgGoN12i7gjxGJz5johhvdDhMpSAhia4cZhuhSMXcpgdRkToomyztBLUc3JDgWgGxAaxhM",
  "key8": "64k9zLqSNURfUKjEcJtGVkAHfvML8Thndbbejw1c2aUkCCNMjHsBAU1vkYbiBwWYTUcBLRyTbaBc1QcoZm6hYqS7",
  "key9": "22nBbHs3zLgEDx4knfGRJXz1kyft29GxsqBEuJbeDTMRhusnd36B73LWQmiFsk3BoqQowuTP7gaCwgkG81Tzqo2s",
  "key10": "4nMHP9ZKt4pFC59cXFWHhdzEmXVZCMKKB6ASMVvVjbG54TNv3gUbtyStrRmnjcK8PaQfAzoRQauCAdGjkXa4W2Lw",
  "key11": "38mH3NEErgyis991AnEeZnqRYrvKdSSy3tkZZqXF5NDH5oaAdvV6QVyXiqNQpqMoXmfmG8ou4PcX2BMh2ADEbeEY",
  "key12": "bZpqNwnjNs8fQcU29h7ErvYWJv2V5gu4NkHdqXKbWbtuzWqZnAwoZ75wExhz2aH3WgkK3Uaw3CWjmNXNp8icKQ6",
  "key13": "41qzqe9wMYBvqzMmGCyHnboQnDG2CcpNTfBZs36unu275QyxvwciJWAHzybMk3bATLTTniJCi429agyAikiePkhY",
  "key14": "2uZ8JS3fScLULeFcE12gTjcVsrHqUdGS9JSW27EkqZyEVPHv89SrLi5FkueGW1YLee18b8DzgyBGyjPuH7Z3QLey",
  "key15": "wRmbDTDT6aRgZixdd2w2s7Ydbiam4rZ6SAemBDB2z5nWEN2FLQyHg7x5vzwGAZfYH5p9SsJ89LHNkR7fYsXz9DN",
  "key16": "2EdvMYMSZbhZzF4hCRv3QPoR7urK317VXUaVa8VgBSf2PFjYooF9DkrZdoQgbMYnm83WEH4PkNApZF59CAyy2cqV",
  "key17": "2Aae7XeNHaFqwRpkthct4NyfYELTgb2uKsPMS4inRb5pL59awkx1nqtaW914Srx3EQ7enVRV4FUs8y7btBPbhTWD",
  "key18": "hZXB3f6RrD9NcTGskhx3PceRb6zGm1H42vdQEnMa7YVzmaPXrzfzuKbXrL1uALEd4iFZvEc1GfuP9pJ7somRFmZ",
  "key19": "576LWvqzF3P2aKg9DaxyC6DQgn3nc4EyHMGX7NLd1ywvqmyLbvzBYfqe1n7wVWB4KRm5ooxtiZoSwKAzYkfprHPE",
  "key20": "5BXG37DTJjHuC9RAfgg4cfTQ8UwV9An4JvaykjzAEX8GTYeRPfiNX3WSh4mnuDxpfCLgN1ACg7ExVrNwgt6pRYhT",
  "key21": "34pjonWhYw4YJuisPzr9dBGC3dZedtZXPAMbB2bBMgr4ZKZ1i32oTwWH34ctXfaCPcnrjqRJHn5xXmfobQc146ad",
  "key22": "325k6qC12uKDwUeKwkGDvY5goHTCVV9hbZf77yndkZVF36tg9Zsx7uaQvfmggsyMZtmSr9yN2qZUnDui7QL8Tt4M",
  "key23": "2Ls5XR68FVrL6PCJNVk1ni3NU2sqKqR7cJVWdXJNFsgrtpYEd2ihaJ4iYWF63UFXitqgkJCPQ9MSBrcSAcHx3aef",
  "key24": "4KUgx5G6nJwqT6xvcvyNZT7wjGPQFYYTEv88zMsfdpcgZSFRHY8eA9z2XYMYtSZP5bm917ujVmNJZGJ1oYsbEQyM",
  "key25": "29WLvYE6beYXzkyGm88hLw5wscGZDkuB9Pn4rY99GpAH9dAzfS46R8iX4yn97qFHtZX3wS26MoLqYrF8QnKthJXu",
  "key26": "47XuQYvRSy7mxXo8srhBARgCiWiGohYWzkX2mt3UY26sBdUmyqapf1FPT2QigbqSyq29ZWttVSVZTbakW4SFyYV5",
  "key27": "5qSxpjEGNP26ojARstJnjCfmxv71ZQHEo4ahZHAs9Y8qZKJVy4Coq7Mer9pPCoWGTHz34BX3KNUxGXXL3Gc7uDPQ"
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
