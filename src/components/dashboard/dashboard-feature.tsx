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
    "bzK4RhDffdtyhNKuChZczkccUsfZHqivC7qPbqKfo4F7h3HziGmmFDLtmLtgeVNLxYurm1CT1qaKULuMWRQnGGg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UVHV9c9mMVhiTwzGPgWQvG5kXExTbUeMzfP3YJZ4kKSucXDf3szEzCu1m8bz1QKuygqXe9xhxZ2KhhVFp83toAb",
  "key1": "3KQhCN4GeKmFaBqobxXZt94THSBoP8DhkrnnMNSiMXKm2n56d3vCNs5XkKU9ARt399FNW3BH8W52HtYntJcQcDdj",
  "key2": "3ViuYgVBG5tC6DwxQ2roJc7j6FtCYTHmiRY2dk98CNvajc12KrKvW7SPrYpFSGdaL9D9DLe6yGkPHyb79CWKHywC",
  "key3": "ckGykyTun6v7r8DUGdLuVkyv1JH4nqhRKFEHw8vTaCaMVo8sQZMdimttbCFtfTgkzFnQdMTeCQYBF6pmLcfC32k",
  "key4": "3f26i62j4YkfL53edavrZse3EPjz6M8yQWg69hcC5nqoJBugjX48E4j7DYkgk8qSFeThdRD7tjMPeYBBRVfGTnZH",
  "key5": "5wk9fAqnrZ9Mz1N5v1iZDf7BYdTFy7D8xp51vNwG2NeNY8A5ykBVAkj1H3vwzwnzY1XM6JZCexKGW7TadKZ7SxVD",
  "key6": "4XR3JBuAKAZn6Q36dJSZqMuurxw4R36d5vip3ZRcd2KHKVhAQLPr62ZYLCWCK9G5XiS4c6LekgrZ4pG79JRSHpxp",
  "key7": "49QBhUTs7dtrMp4xhTrfBYHXqzLU7tb8w1PfMduQmxRoMcy4kxHk3Een55zB2JFVGHPoJLoSiVJsWnf6RrzX53tN",
  "key8": "3Znayh6iquEGVQEGoWG5EzojF6ySJ4V21ARCcbNFNar7o6NARG22S4jVnriqgu3F7tkVMVwqoMdxR3bqTTzaqQdy",
  "key9": "ExfvcMMkLAjUyiEWE79Z5geDuhd7mA6DdQF7b1htHtxNQoz9nGu51VXcpnqgHiz698E6T5HbXBqiNeDXgsqK7h4",
  "key10": "5HFWDf3yUsrYd4GRX4PwsPGCZtBL5NAYJq6SkPYEyyZGTmYZNdfkdssuA9uX5QbFTojUDX9yDbBJE7rumLWuPrpG",
  "key11": "5PuUkA8hRD8xwhzwvhPEQAnFP5KGpE7vbW36XhGHgbbznXX2s81sTNUd1y17b5VH847bjNytyYVKNd2tmALaqJmN",
  "key12": "3JJfXu4VdVTo4eeWQqk4ofQQJvMACGBQUVLB2cTjdwdGnctfDwk4iFMSTfFWLv1QtfCiNtjEjSLT73ja2oC1HCkt",
  "key13": "2PRAxuhUnCeHCSH7LHT772WYZokSu7CeUZxm9jpdpZxGbzQpiz72YaMXCjMj11wV8VjbLv4R6wmEEbYYjHQwJ3tD",
  "key14": "5K4U9h2nSoVWFn5zBmV7j7NW6AADXjbxog8BSavqesYPxFbvvVn4MaTom22MD2But6pzssFGgMz1jY8uZpuEN8Rh",
  "key15": "x3ajM2Z84yVgcdSNVY3AsbTqCsxv3x98cSiTCcfmjz4cFQLRhkeCPpr3Xr1K3qUQvPcNN2HAsv9oUaz5BY78xxS",
  "key16": "GDuTuvkuR5cQN9e143e3uksehmukzHfPGkMSu1DpeeJKnZB6ttvL135ne1aPZnfjrcRYPnb9srVAY1fLa7GEooM",
  "key17": "48wSr5ND9abxkckeKVaiFtasxQ6AmZ9kAvP4car2R5BvjFCURidaYu4NbVeByZn4sNJ7gUGkcBP5783oSmMy8FUt",
  "key18": "5HvaaMfbWBwepsgYeBtyWGogxu1bzfBdwXmA5Dbo3oiGXkLV2C7XMi9xJDNvCqio4xFNK2N4JQc7LavpdpyZsTb9",
  "key19": "2qg1tEHiXrK5YU5uLkFi7RUQmQx93iHrydb3xJMYMmGUfckQeq3sEBvUtrSGUgjGNgjwvxdymWVyRWw2eUYZT5kL",
  "key20": "4thjn3E1Y6ptPMP9R47EX1BXftUrecvvyneWMACkLqWWZKQTRzWAfoy82bWSovypf3ctdw2snqpX6ntbaHp77Yym",
  "key21": "4gXUZP15jS5198nMZhKxYE21Cg7ajPkE7kcwpNtGfr8EdUbhfrMrg16pNnWvLFZHCeXQ1GYNWYJLHq7hAtpz31u4",
  "key22": "5HfgbayPDeteXsFerK5Wd25B76xC4ZcqdDnxBZghdWHqNdSrqfSNAVHoZyHrLQB8bqgM4CXUKr54tPF3F8QDxdmT",
  "key23": "3JhmfNALwNk2AE1oKGkMCWQqzHZLQknmZ75CHRqQTmVvvBnphtU1CurwQv3wBodfzXNgt6Foscwb4HadB2bdZnaP",
  "key24": "zMy126fzFj8Ax7W52yHdJXw1nnCpoZNhy8TumiciMMbn9B5KAiW5wiWZtKaARnwaMWANLVSVaCQ86d9ZTEDe8sS",
  "key25": "y8hUf42MNE1gjR5ABSfHvUTDm4eB6vWvt6EGprEywMSStLoePpeppmPvLazQTgzYYzJ2nVn2dCQZCvvtMLLfop3",
  "key26": "59cr8CVr1BSwEY3W5nJyANQytyfPQuTLJsNS9FDEkmPSJwXtYa45Eha18HvtbFbwMk3Wi6px2b6C1aPTmk29iUDD"
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
