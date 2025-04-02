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
    "5MarEP1tMum4MPWkCuYUTJRoo5BzEjNwVZnnuhNTCLTwrVYb3qFcBBwavAa5VeJi3pmbEHvpJ6T1aTqY8Vw5x3gk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XxMarcyndoVPykF1Gzvwxgu8JRN46YY8RvY1S65X9uDGUhPNDS9oJXy5RanxQhVZreQA9JQ4PRK4xk8xhTxT1NR",
  "key1": "2gWWbHCArH1e2haBaftx1JydTmnP4YJbrWS5UtFNkPf6nLuXyiPwFYTiSLVZsxhyFzGMFZ6qrV33nTHe2YY2o5w6",
  "key2": "3wHQyBW4CWcFEuvV5cNkbVN6f3n6VBRXBPEC6z7LGf5DGfNRU6cfoRfwUkLKa7QiLmRqrXUdjCe7sdbEogM92JK7",
  "key3": "5T1GfnTiLJaroteW1gz7V8LDFWZ9YWfQxm55DeRdCLRESSY2ukDNGsEU3tRoXQKNMmQ4vRZKvrPoc7UDrAnKuV3s",
  "key4": "37uZmx1LsmEkcVTzqkyNcGXTnAQwmaYTVG1bhxKMGkEo22TEvpNfB4VGPGG2qGQDGPwMrfRWYjtKYGeoBE2aXqZw",
  "key5": "3C6VPquUbifraXFspsuVYQhF4yaHARhJu9AbDWtAiMgvPAWkReGPxsH27H7EF7HkCJgQorcUaZ5xg8cCp7KWcfUs",
  "key6": "5jryFByLV2PsozFW6z49EAMGZgqCjG4ByXmRvrzQLGYc2ev1T6pMWK7qCxZSfJK2qjjgVbzE76Rc9Y2D3QMfBaeQ",
  "key7": "47tTggZTf9tfja997LhDzZ5ioCzHXdT4zHAaknas3h3Eh2ywzQxiGCzEbY7kaoe1BVsTk5NJUgBJGxMVZTq3P9KQ",
  "key8": "3NuDgciGd4v6L2t4oyKZXxF6fvHQADaM37k5ZA6ikPc7F3D4j7H8wi7vQSHn7YYPo5aPLYgVKQexjdM9XMuRhjQ",
  "key9": "2StDXkmpYpvJgruTv3y4gPCRXoSzT4F4KLw5UGrjLuXkDZ6Y9JqKUa573PGEFH4tzq5PTHqhguZ13uonCc9JXcXu",
  "key10": "5DZNKMfQfF26YQuKCtv8pksJ5YEZtX2xNydeFgZj7PaooQ74KukFQjjUKsuBrMeD3YGD3H8wb1922rDdsYm21pfk",
  "key11": "42T2ZfEP4a9S2xbE3Fb1hbhqq8UnzvEQKupAwsHHG1oGWoFnFSY9Pk24prujuQ6nZh1FxbwqtXqD1tPwS2WtAwcW",
  "key12": "F9Z29azHjSWCaMmhrAziQ5VprhRNrHMjLLbUHy3zdmxLxMuSXfuc1FUwuVphnxXNTE4JTM2Ng83siSTzPicemXS",
  "key13": "3tfUTV3uKrsSnFifyXSRXLh8dS1hgSbM6gGcpd65882VU5q1mvGui1u6buhLHD7rsyYqtL5kBTAmEFAEokHVSLxC",
  "key14": "zHxt9FWMHA9A41S5Vj483vFVrWxDMT5RikUCufiQszSYPD94Pj7a2PqqzvSrnvpKyf1Lt3t9z5XYuQBj1UatzPr",
  "key15": "3z3s9LZ4wE4hZ9hAFJkumYvaZ2Sd5DEnPDbWkhfNiCFu5A1bwCt6PKyogv2wvqHCJcRemWwn9TACSNZX9mdi9Bo8",
  "key16": "5XqehTEiWi9qcKFAHhWy6S646UBnTnpUBJusFW9RakrkRDgtFYDeP5huecZWxyb39izE47y1nWTNQ3v1YfS1D1pb",
  "key17": "3LSAbwrgXFrf7CYmxzmcf4hCEdLoEsMeKwcCoqS4gponA8dLbgSYUVjRbaxabKBHxrqNkj6TKGkroBoR8EL2EAz1",
  "key18": "2gJNCCSUgSWXpYL3Xfp7bUJLWJgvLyB7tFsfX572x45T9R9iRykVYSXXueFFoaZqSn6kqQQXBSn4YdKWV3egLnC4",
  "key19": "qBovq8KHyWwYPMwMeJ1ArvZtGKpo9o2vQ8DLmvqkB78CBhe2iCtSYsEFg2i84PBedZCAf3v6fXp1SXMN48CdjRo",
  "key20": "eka8AqHQTHahTdnmrSZwME9CqEEn9yt6oZCqaSgcuBQuhhTeiUHZeXHpY7bQBXsXpF9xLpUaKwMcxuWq8kH9VMz",
  "key21": "5keoeJWHeWk5wSJQrdos7rBM7SNQiGoqy35dL2yZRUUWBXwk2zXinFvCrh1peFvdXYvEv77M29Xp4D5L8tqWmtTH",
  "key22": "4Ryh5APw3jeKt835Rn5FeFGgqkoaLQZsAivGSjqdnpU9i979uU2dHWJkmPFw2yr2o8qbjL1FJJb1c5wSaL2Wu2LY",
  "key23": "5HHXkbuAY8mfKdbeyvi9RGmmGv9BmMyKSDdtC7mbYdLTimCMuDuzP7fji9fHNm2h2GZwmxVHtMbCxLuDG5Ukj8Cw",
  "key24": "4bnHMgT9nGftMhFbZwbEnEbpZmSEwjDiNciuB6k9ieNYobxCYHkkXSGr7QB9kv6x9pDuN9Djntctwtc78uQNJAQj"
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
