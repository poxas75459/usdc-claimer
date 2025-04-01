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
    "3UUp7bZcUgpSFJK7rHFdvy1dAHC9jGwBEe21Ax6KVHY1ADoqR8sEAJdBpwbRRasi7834Xq8cL9tVPXiyeFRUgrwj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qm2mfR4rV37Giz3hZBy4mqpGCkX9P1SJBYRen9dcgBmdXqgTYAtNNtt63taCRfWY8viNkZM5La2w5HLGUZpqjKy",
  "key1": "ZgpMxHmELhqU4okRfypu3qEXq27Yi2ws75ZwPgWQ3PR6vgGT7osVb5nXXnySprKPs9wF74GeMxC6u1MzoYpYtCK",
  "key2": "2EyiXj4nVGm5yCnyfbpd55RvFEVhDLqHyWaCs4zXQ5eCHXAtKY7ysNFbmcEfSrNZ89fbb4DbGGkB68fxQ3ydAZfE",
  "key3": "N3q9YvBhaq93EifcjsE9eBnGw3QtLf8qQj2SVMrnDefwLG4LNA2ottuBFktceXmuYz6Jzg4SXEsACedypdEH6uq",
  "key4": "pHnVtvhc5fodb1cpFggCYQ8TTm8usToUtctXyVxH92iUv9biTf644CwKrNUKBQN3kMiGgoxdoQKQp5ywawB2mYN",
  "key5": "52zkNyBxV2ZKvvV4txk9NrZR3Up1SUyy6qPqsFsRBwpCt8yaZLqLp1xeg8zCo1txWP2K8HKgDy8QxCF6TRoue5CY",
  "key6": "2p41tjYSz4Ci1z1qrZUHeyS6uLkXdLUaQuixJboWWWxvUoEnmP5MPgyZfVQZywLJ8xztVK7W5R9f4ut4vS2v5Jz8",
  "key7": "QKBhB7ciqa2p943rXpaBfB6VsLs5Uzg3sb8tesce4gmSorp4haLTT8ovoQnNAzVPLJPSdBRBbnRWsQb3JDT87PN",
  "key8": "fPh67jH3GFmVkmLWLob7CNefEmHnB6cwm8iwtyeNpQxqHxerTmxC3KiDbELeLSXjVMemzTtZcLWhSDKAnrT5d7U",
  "key9": "uRBcAg3yHgj12VT1JqbPNudxryBuuYbQyUit4NXzR73v9PKk5pv9nnMpchXnjNssSKSn5j5P6x3eXNRhDunVjm9",
  "key10": "5hYQMenWhukxrEiTxe9BCRocBMfWcfFipKA9NPFasznxPHruWMEMbT58i5xyRdf7aKqfcKUHQRHZZ2hp1UcdbiYw",
  "key11": "4LCNfT8gZ9DQ9rj4kDwJKokaaAqgafdx3bZKM11Y8Jhuzdtf7MpK4WVNkY6Gnemb5zKC7U2N3994CzKJaxhBj2fP",
  "key12": "2na2hVLJipUML9fAfZXu24j7XG92iPqHbfZ6ESvRjV7XNmtopQ5bYBHzDSytgm4TXTw5KCMhF9hnErbgkc6sbUbt",
  "key13": "4MrnDz1aYrkPRmmrjXcDh8cA3XapjcPENyhY7umgch4JCUnVe7RZNwViWapwVTAQMAwNyaGZmJnbbY4G6jgAgpFo",
  "key14": "2rbH1WyL6e3ALm8258pS3xS5P8PyX8QTBQ75345QyX1p7vmw1hwXCuftXSqhFuccuUtoTYC4phgRHvR9ZCJjXkRW",
  "key15": "3hiY8P4cRx9z41z6zs6HaZ36u9omvDMjwHyBaehmbH4L8M6yi7x2pQxySDWmUwMe1pfWGkn8PEshBm7PxijVAsuU",
  "key16": "4qZfYLzLDam9ZTaJgvTdZ9c7DwK3UqiSgHXhRi2d9CSKQdAELado6c7WWMWsroMc5auSVgaJa5NKwGUBh1XWouBk",
  "key17": "2iuNCDwgPbVB3eHyivDKjPwBtxdCZCDyLjtEyxZeRMvnhAmP67yG1LmLxPHhD2PWWf5jtHUtyyUJUZo98ERizKGV",
  "key18": "63rrAQMuH7oPBRjbQUm5eMSKwTBbBwxEHDhgUYwzW2nsvKPNJWvER663CXdUAPc7TCyb4zs9LVMviRmNn2E6zn42",
  "key19": "4hEEUs3FP3yXJqrBbx3TWFwAvbEDWWUh1HmP2WVVswcSPp5Pqj3hW2ZC9osyTEVZXCv6pnJRD88Ye1QA7G3KsT3F",
  "key20": "3MXtRWkC5Sa12M6DGYJ8D3o49iypXFKzXKGYzWdJXWSFck8ArhGp6frEmvpkHSSwiG9bEjZnr93Mh5HGwrsC374A",
  "key21": "9R23RHm4McSu3ockCBPSU2t8GZMz9q4zrZSMt9wUpEHQbkpG3rfAKkPLA6HenNDGVjwzxv187RkReBHoy5w3K5p",
  "key22": "4MeNK68tp5qXWnHsutckBzFoV1bgVqXHnkKGrwkGbVoqVXXX3vF6kC5gCFjD1xBPXvMmD3GFdKXB86jYkmtx8oZp",
  "key23": "q6zuSNsH8EBPnwoLXZWd2jih1zwsW2NGtNo7j9G9JMujnjtA8bvbvfmBoEKv7sTJjLo8QBdvE2a4SEkkHqE9pXS",
  "key24": "5vCPDDQF19oSDg2ibV4xkBik1HRwBfisGKz8shtCRK53oKqjxAC91eywXvH7EyckWep4ibsm2N6b3KHWkuXWk6iq",
  "key25": "5KcnKG7pKAWJL71GqXPGYV2LV5dncZmU4NT4qgWc5VcHeZc7dXsHBhf4NULmiRCVFWYFqaXxuY9kCSJQK7FLXevr",
  "key26": "3X4dvZj1rSwQzmPNxQp23SbdaiCFnVzyv8qUkPDZh7NCuMuo6qEWvBLda8vRKgzCfwKbGwzJ9wQQv9U6EJgaa3gF",
  "key27": "2itL4RsNhHMYiUKbMDJ1wtajc2kYmymQXsnP2CXvxJzTMcDjD4eG9U82DVhUx9PAQD2Mt4ERjjfFTMBWz9gc2GnZ",
  "key28": "3GzLg24Ft1YQPZaukcKdDXy1FcukHXQkTK8BEV5tkVrmoAmdXtssR2FAtqbhghwXGEJVCxPvpebUJWp4aALcQWLx",
  "key29": "5dVDaCLtRcChdYa4cKMzxC7M5LoznYKqakdCAGFJS4sXtHEvcjfT25goVTTbMsCuoWRuLmdWqrjDkKXnnkzPxppG",
  "key30": "4hzUAtmMpX4nZfMpzYzH6A1AAc2ieodkudtykPNsdtnCibiKG9VTWi7oPeYoBMmz5JqwXBXptWnVQcUFKrHgwGGp",
  "key31": "3pawMmbvcikCKQyEyfAg6o3j529nJcKrimwBwZN6Rfkvbz9Ta64QvR4nUv3JfvC7mKnWZ4ndZwQAKVx3SpPaBWwp",
  "key32": "MrXdZEHoiPmtoH9WRLAgB6omD8dSPvfS6ZV3DAJqrDEg5eWwcZRoyNxBVGjzK3VstGdYiyXm1uYPqZ1P37WXTef",
  "key33": "4v8KdB855JaRGpPKAcHkGsNej6k8f8b19UMfj296heHCCCGo7TRRM8JYNBPNK9UwgfpRk9gb5YMzDNjV2DFkErbF",
  "key34": "4WowrC5Y3aGvcqvEgYrm7oxiw6QUe3BDEjHBFCurs3XZVcn1ZfAuozDJqnd3R87YgYkeFom67EfdkeoqLD6F5Tua",
  "key35": "3fybTLxW2iYacNHzbxyiAERk5SzbQiR9ovX9xqrhU7vZTvdCjAd5u6m45frBEfjrXVQnZ8Q62Vkqvp1crpmQ2DZv",
  "key36": "5hHGzadf2yzxTAeBXwWi7PC6rm3utEXBvBB7DbUooCLu7wF15qoYmXUkcgKWkdVhz2WP2Br487JaTmkMAJTyNcNj",
  "key37": "3A4KEmP1bDoc3oBnD2F678r2eWZtiUEAmd8QAvnaNzF8aPuB8kHbQo83ej6726f9FmRTW8nFkfvQowL1wf9yudR3",
  "key38": "5T13L5WAdkdWr29UkA2CRQ4eJZLnH4q5Gh9xVdZ7mizvGrd2muWcbe3BwFpwagxYFJ1NAb7KTQQUrTrH3NsEAZYs",
  "key39": "64GrPUbgWSmQ9SUso2GxeT4qZoUWhGjna4yQDDmyyTJm4P53DrZ21fAi5fAgLbqRU63LpMFMuuQ4JvjMSWSMjhpL",
  "key40": "3sk9AKg1NKKeExda9nZw3uuNxpydn3UnH4Ed3jowbBABGst44FPrA4Pr4n3SDuPR3T6GzcwcwCV1hbKx71KjgFjH",
  "key41": "3McwbAz1J7fnyA56y7Fm8TN5poCmyZNTXmUVxzQsSfcqXs3Z1VM56xeeQ96JKwk7D7msiJvv4sHRRDXNG5CD2BEj",
  "key42": "36SCVk8JUqYFqgpL96EiMAvpsS3usgP6WyDbFAckKnq49UAzCfLjq7BYEnKyDANVC38M9rRsvnzrUzTNpcvkwa3F",
  "key43": "UQ3iXsqFqnftmZi63CkXjUSRnbDH2VXDtrCapKwu5rtdAUKJXKyktQiMuqg75QKmqjJTsoX1bDUh9hjgucRnwXK",
  "key44": "UAWWYJAFGoDEtTUKECGNasRD7XZh2oCnTwVtwEHzvniiigCAhoM8vs1Jf3sb7WhsP8ZqAxKFR6qADdQCWAqMJMi",
  "key45": "4Br3E2dsPrUoq9HkvQRvBqeKfkbHkfW8t7VwSmN9uf8zgCwnaLcXnFJxqswhfxSagBpSMGsHanSiFZqzkKk7SV2P",
  "key46": "3E8nQ8JRh3hVHNrJUFzZdYPuT1hKzT4LLoTZtB1Bkxub3C5Jov7kGTKaSgjpUXEKKoi8x3eYmEo97NpcNCtLB8eX",
  "key47": "4ttnnsKYMzmicWgyybMUxbCaBnKXbezcLi9qHJZrKKBaGFwiCrJfgvq8jEuiUgJFmGzvRhg5N5dksW6oV8ouo8td",
  "key48": "2FgAfKRLz8Q7cyAKFxx89EuKWGbBg1o6y4GofbQZjamJAXsuMouE1PpF7dfFUZzK6pAyXvKjZT2Jh7tP4LH96Snr"
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
