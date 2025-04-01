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
    "2shCkAegi8WobSN3E1PWeEFxCbmZzNB7tk3sRo9FwpzQApwaMCpgBWBVVYYUiFp226hYn7P211P7Z2iR4k2wcWPC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Adq3vGAFDyVCTTHrk9yDRGSAppsPc8gyxLn2jF2LWgUpaoZ6EE3D6aUoeDFLksyr6D8MfhaFTskunkDRs4GAZ8k",
  "key1": "38xdFW7YjPVfPb8jwQWnsBSR8gqFXctwfhgaL9tvLDCAew7KNR3STdQxCDXWTsRnoJUpzja1RFd6BZZCqDE4Pzp2",
  "key2": "2tDjwdPs4AkoQEbZ7sdTkvE6SGjh361a1q8ZddeeF7BWAx3jbKydnDbp66AUuxEUYvg7B8WtBovE9k3Y5G8t2cLD",
  "key3": "2tDFisVcEqmAS9cjtJDRbm7ujuaTMeQG8dYicx1BPcFAg3eLgLjm6wu7sLungupzxJ5VSqpDb1zGgA7498cpataj",
  "key4": "27QWPrzwXT8fUkWeFu1WtEDX9DmjCPGpt5k7MR1kyQGorfz4V8kn6oSwNBaCkQZoL7Crfcj8uAT8zCvS8KtCYEuF",
  "key5": "bvkLQbwKMJujyreKGnZYnK8SQSS3YedFCuT3vFbaKhHYH1aH4fDCh4Mb3f1GyjZWekMPx4AaA3UkrQ2XUf7bJSM",
  "key6": "2Z4gHmrSjRDucNA2phv6kF28RwKuEKEryPHny3kVt8jThARLvhxP9rGvTzmr12heuhMQ9MUT7EzuYLDhAd3KF48P",
  "key7": "5i2vek4hiS9GXYG8m4rZ9ujJpZVQmSbeXek1w1zJEPLgkBbW5eBAh7itoyQLEkDQqxtUJN2aKr5pe2pvRyzPSdmQ",
  "key8": "5f1ywx3hF4cECofZU9jaG4p3DK5grojviweHW6x4mhYDZkn6UKqLKeLiWog7NG1Y6DUyXDDmKRTktU7Dde7tZLWF",
  "key9": "qCnEqVjZrxMHi1eQMTTFQKD7d1mGp1dc2SpgSBe8RQt3YaoP1wFM3p7twXVR5En3emNRDJkRDs8EGWJHCeQFCvp",
  "key10": "4m2ai1uYqGV4aeSKbtznMVmEUTVn4psduRTvQArSiyHmoJ4w7upkFLzqCz4htoLoEKCPM64RmZYJdTXq4xWuWLYN",
  "key11": "2fVyvGYuqJv3zs1NBHZuinf7hrjtdURvKZjN5vSLp98WduVyRSH1FjekEWeoTYdW5FkPYWSo1wm3p1ijadkPqAH5",
  "key12": "5Rs7kZHEPahkzA7f5e4pDLiBJXnUqyZ77VQaogo7UhZcXnBZKcA9NTefSgVH6iPo29nMyQo7ENqqeuGrCCvS44XX",
  "key13": "4DrY9GRnbaQhVakPzX46yWFqx2ShuUQcqSKy872gVR5oiMLuiXuT6c1kYpZ6sYYg8kHx55vped1d4FZTFuSpjeT4",
  "key14": "53EDkZzVoZNSuQVV9pxFUeLWD1sZguEvBqLYs8G4EUoKFoWjLXeHom5VpDqU42u6XRofkvVkJPBxZsc5JGeERXeA",
  "key15": "5qUeJJpeErD3dujk4FTm4MXUf6nVakBkYJ5qh6UBjYMuzNXQz9kDjf2xRArfbKnutTUkxrCMEZHMAL8kLBvCqtyC",
  "key16": "2QyfP8Nv7CviqiNabgw9rkPh9PTEBZ1912Xfss9jnt2LFmgD6Da47Srp3otkmgBAbM4suE97xXufv2PHj6sQobEE",
  "key17": "4XJi2okBMsjZ6U8xyRbWDzLmmW9XVyTvCPogoKJWmjdHjyMUUXPnstn8ShXfsm2vwcUxcaHDqxB3Uc7RVNaBPAGu",
  "key18": "52aPaJyN91zS5AxHGYVBkxaNLurPQUnsdVcshdMVEZbhLNBJL22iSRhKPo3HiHePaCgQ7uXiGZqMvtnbkdLEPiry",
  "key19": "3AHA8HRTTqadQDUUbLi5jMuNeQdC9iASJAJhvHJeFnGWnswY57cXhAZbfgrXS7VjcrBnJ8MGZ3TfafpLxS3q6q3e",
  "key20": "5bqHLTQFXXWdNg6tK8NRkqBxtk5eYUJvhMyhTDgVRoswiGPkFVnQhMciBNRjRGaK29Yphftmtmp5A43dW9EjBPyQ",
  "key21": "5oxLnQB4SrUr7JjAZ1gsYnV9Nhvhoq4HaQdmkjYgS1N93bhNhBVC7J5BRiMkSNV6ho6hwjh4239U15msUg4Sbtyh",
  "key22": "3w9PSka2t2bPvQ49cd1qQMkRKhMm34NxjsH945CCTVzzdaDtLgKFcQ7a6QKbcrpjh1KH2iXvXdJr1rLfhtKXZFfP",
  "key23": "2wc83Ch7m3HLnhGKxYkrWQz5b3bnAtUf9LfmhP35etUEQMwr9VbNuuizanFzi5Ui5oesATDh4s16wpsTjKdTSFGz",
  "key24": "4ivrX2VUd2pBw1rSLyCaTJb98uB9GCXb3eLAjM9pNBmXYxQdE9tsEKbHyxSDPJVYPsh7eKP3GB85Dcas8oeBKL8K",
  "key25": "2TiAY6ASdWcXeyre1YcFNVAhbtuxwAoovd5peDHWaCyo6epbrchnWEFPMGo49rkKiaNsnxCn6EvBTbtZs4wT1QVP",
  "key26": "5xi7tzU8EsXy5PyeARS7owy34VDGmNgdjHQFEvzkcSApeZ3RTeD4sU1mMQh5k2N4jyJmpbzj46eVjmEz8FjtaX5m",
  "key27": "5oq4uUPngk9mqBonXsXfdp4ALyvfNFy1rBKYcHJzjFKPjZGoBmbZYF9iEBR2Wg8jR2i8GjCWmQAtj5XD96MZMmyC",
  "key28": "2vkzrNco8m1hfw45tnSvtcmvD6kjwccFJBZ4JEQKGQ8Bx8MrsDWkpRd2uDmu2G4ttjnRF9Ea13VkmENyz3WDwBci",
  "key29": "ZW4Q6uApcRZtKEFm5j4XWmj6rq3UB8dTn6uGfqcSB8CGmNyJ8xzxfbzHM3FEXow4XL9VxLLgh1HFpgYsp3MQ7Mj",
  "key30": "3XapR3MkYaPvYdgqTZrdiE8PbursTYJxxZJHFBPCVXELk6C1cTs4oAtAe1QH51rzM3y8kj1mvgsgMgXa4KHG8FsS"
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
