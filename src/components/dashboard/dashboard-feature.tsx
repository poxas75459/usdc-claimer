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
    "578jYj2Qdw9pejFNiyTRMcBdbeLzTkbkWP4iuBd4BSv1r65ZbG4461czsLrSzByXSHG8XMJs3yNtofjPE2jvWVQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XuAdSy8w4egvsoNgULJxoiH3eC34rFpjRyrWtjBvnGWcNJkFr16KT9NTkikNofJ2PcQ7qQvsy3efmoXvW7Fktn3",
  "key1": "3CfqjaGwpDnaJwY1hFA9Gy3A43Z2CiRaDhNDAzb2iPYFkhEpGfbRJCjmaw3o8Xhktswgxp2Sv3q1BZSXFD6e8pLJ",
  "key2": "2zQRxv4VtqrubPvJLxC2L75JV5FFb9gGyAhmbC3p9cHS5Wus7vLdnkHyno5crVkhht7Bi4kS8VUeSCWzFyfG7BFA",
  "key3": "42A7X2nZXVhMx9HbF2x98jTj5uqbmk2UqkXYUDKgCSvoLjBNV4oxGvJg29LUMLWa3jYW8BVQWPzzppCBhSr4Qfbh",
  "key4": "5nZos5W6dtz9f58ks8Ejiz7o2Ktx3bMAAVQSTJvGkkqejQmoCRh7kaWPsJuJ8oqQVrwMjeoKk2rj722m6MF3GwH3",
  "key5": "3aqcv5WN3WQ59m1zVRBU7QU2BYnBwT6e4ePuLpJmzTsQMDsPwWPeQ3DoNE9FYywWuKg65cfK7t2os14VtJaxUwty",
  "key6": "2kPF5jaawAiTu3LUz5fUeMhn97sbGngwUiNYvQ1Z6VpivTQM8rWiNrMuv3tCtCQ1U1cRu8tt31iq5SYXUZLe3gkg",
  "key7": "ejSEqUh1AWHjfwNEsd7oHmEREKrm2sM5LAQP6nkQJE1EjM3FZ9zZHRGyqbjVvdn36UL1fKMswrW17uEgaMR79Jb",
  "key8": "2oNzmrUmqSse74EzCfcLQpAKw25U12iX7QriSk9qTxAqSCsBf97qbLHGjMYEVnhjNCK2ykKVMMkrH6KY4uLGcMCz",
  "key9": "k5kc8ESoViBVLGkgGSf6xX9ZBrwuiT7kKkpDLjnbyLUTxCyeWSyAXLeRPXS4AiQLfU8C3eVLApK1JEyL5w8YRVp",
  "key10": "65Zjt48B7JY7Z8xKzduk6bfXF3T6Y7VbUzYrRJU7X625g1J9gwbAU41CiszXc31E5frWQrjZmPtfqdMpggjDixuX",
  "key11": "27GL97XwFzPH79Epj1reuxSjLfRmwKX6YzbDxFPU2mwzE3XPmAZJBRA8qfDU9PttFPTSQiL4xdBp4DA2B5uFF4EX",
  "key12": "BsQXkgfXgCEar7Uqm2HV8X3AR7jjnN1X5XZVwTBvL6hk9kFdXBSPGvcz7oBoiM9e3Mw4UumiXoxHaBYKZ9a6vYp",
  "key13": "2vZ7zyn3p5vwr5KwuvRhBmhCXEvFiBPSMrLPx8GZcuMjnBpg5X5zbvvjwBZES28RC5J6SqDDCwFRCky3aUWx8RVr",
  "key14": "GFao8ATJn3mFjxu9Cvm7VhpwqymoVB9UUvZaRihpc2mYXc6e68ubpiXkqBRvRTvn8HKqVkFGVowk3Kkn4GT96t9",
  "key15": "92b94FqAke2b3bm1gQCe3W1nRo5jBc74MRKvG82t89htqxw6m64aaiTnQy6mxYkFZiu63UQqPPfqsTCrhxR6ytf",
  "key16": "6LcYzXCMiqNLeYTGzajsGrCaxKbvq6VAA27y1NB9zJ2kezqZbJZTcuKsVkpemcr8h8pWii3YrqFr7WCyezvTPS4",
  "key17": "64FauptxuH7gog4v8YCrH5NDsebEgHSb4ENnTAxpgpDYUKVQDHikTffqHaAP8jDgRWsbm5NHWStSkGQsQ1utFNJV",
  "key18": "DbhamAnY2A3YuGEnYMKdqkJjGq2mbWVe44SybiFJutaeStbii5Xv6rnhquTYfhpyPrR7UwHQdWJyQszNKbo7TiQ",
  "key19": "67mMyUVpAtecxr6RJJeqnSaRpHkzm87S5f2i1tLwLtibpJeFgG5aTJBxmF4JexgaVpN7WsAefQ8u63TdyL8qs3wW",
  "key20": "puqV8gba9UXqSsWJ7TG993NZ4in7aphhR3z6vwVkfNeJuk9RiZW3yuBPFGfSeFmb8iL52rg5tswLP5VQbk99JMK",
  "key21": "4V5gtKQYNvYg4UcNvLRfnAxifkGVPSZD5eyG8xE7BFZovQsjYoF35ufe3ZgsQqnrEb45RBzkUuvd7DZaT6kqRTTB",
  "key22": "53Gq3qPuRUYFX3zcxg4yfKCqpMA4GbVsjXEqszafNrrmtcpsWzsoq5FSwsVUUM4yMSSTLCrKhAqgZWTLTRqWQD5n",
  "key23": "3fnwDm9BXvhFdbf9HbYwmh9otDDjpmK2pLYXa6XTTN6DhnpnDPbtJzkVw1pJzfHh4AvmwqjbNCy29X3EqYp4jDeH",
  "key24": "2rkkm6fRSNccgeDFLwjV9kac8ET3DRz6cGQcY1nbu7jfHUu6YBuxZ5YNA5qQiqJLud5tMxWAvkWP6JNRxqDZAozi",
  "key25": "5qtonxdoct3CcGzcq5b8Ae6seaVTN3Lyu97U3Eh5rGYaNPeXmLwCW1bqhnDDDe5Fo5zLa52eW91DP6NYqLtXVH4Y",
  "key26": "2p9vZiDHa3BTTcn9oCZcFBzBvA7DgKncAELrQxHsRpEjW5HfBkhNgeByP1erqaKqvDko7Vs91yFjGAZBgp2MJXL9",
  "key27": "5b5253UtJGeRKhF2ZCanhS3kN3iW3tb8ZmhKEjwiiuboRTAuGBfa6B5CepjD4w2WAkGGCZ2Lvt8mv6pU26D84S6C"
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
