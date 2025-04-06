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
    "3JrVdMQ86csYJwve7SULWdUspgnZmvBUwv1V327ArnbUEVzASDVxaQVicaipCFqdDANmwbg3Zz29ZsQ2AUT8DaD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5B3tMypYM212DFxLc6aEXW5mvwmG9Wk5hsL3vEBvsnRnCYcvcVxTAp4S39ZAYmQxtMN1uMFLLFMEtuV3pobr1oRZ",
  "key1": "4ZBnMVVSyfvMq9rTxByCp1V2pSauMigs1zv3x4ZSsXEamU4SHBB3zamUJQkxcuduWuepfYn2vmYe6hpdpQb3rCqj",
  "key2": "5jxGsooioBRGN1qUWBCJismrX2MyNw5Z79NwB92cW44oygHHCT1XbUvT8yTznPywanvukMovGaD2YVA6HSCekR8c",
  "key3": "2YKEPCCSyHqFFgp576QY3974EzNKAboEac3hYj7FSKBuk1VNPYU6KEGw2xR7PYx2Ka5CJJjd4fj9md1Anv6Qv7WC",
  "key4": "5YkRF4JZCReEvfNzg5ZJPWXAiM2dZ6JRF8kJ524wnoJxWgHkivrhXq5qmZayqSsDLyrD7UsEDsSeGvrUnCVt4Pzy",
  "key5": "4fN13rmePYcu7KdX1s1tooTBd3Fk1PKjMZuKENKtjyRS9KHcx4Qm3ZCaVmSHyGTRm4pSjxpqF91HXuw45YnbuYHq",
  "key6": "2zVFnFWmFsDPG8V6r2U5drEb7UmzSDQtwFYQCnSeVwcQuPVqALWX6BReqSyskEwEjaUNSrSf3MwuSb6cEiffZBoy",
  "key7": "4quoBj2EXFbm99zCDxUNUpWYCU16ocrDYR9oqucnQJwNGLT1gSqB5iMKMrdMP4Gh1REfbZkJmGhABghsvzHNspTi",
  "key8": "61zCRy3qQ5mw2PWZ9aqMRKZJiBdr9rB3pon827nuCx8ddkph6NDNd2W3LrcQa8Dmku3rRnQeuT4SsLwtQTmuWsyV",
  "key9": "txihoZEW8CttxeK1pbS559hR4gBEhNogE9AAvAGwSRwX1CfiNRsxfsTA4fHxpurSRv3mNojB3zNS5gmLGxjcBMa",
  "key10": "29t1Z2itLKBGM3pqeekGy93VauGxWN1gThqgyhmvwUroFWNNnQrZZs7Z9ZzDwWxJLSYLpfSihAHsP1HJZf5Er8uv",
  "key11": "55D8R5N2JYkaEa6an6pvf7ansNzoSQNPkgxfdi8ZPYr1wFstQ1xF6G2c7JvUhJFr5uHQM3Z5zdyFCUZrxXqQf4wy",
  "key12": "5iGMdoNJsYErLBLveLKtKsxuoAFkJhfZK7b3DavHvvNTamCLFJMvtfb2bJxSZtMGsGiX3wTRvh2b3pnan6Pyotc2",
  "key13": "5nQCaYJFeaDTGCUBMZUgW1F5mHazQ9fwT3gzDLpjb4riRJDnyL1sERw3FWmE7GJETu1hshB5iG4yFtM5Us3RKg7T",
  "key14": "vYxSXCVzbgJqicB842t3oopBTeyX1Kgi4dk2YwvEK2WSiK6ajwmue7j584C5hguePTRdi7fCt7yXgMZLT7b7RhV",
  "key15": "pt9vfDCWwWgHnW8Nm2BVtJBWcPQaHyVjaU9UPrAPSEX5m48PHA8cK6onVQD3d28BDPkGHjregWzDSziJw4zzAgJ",
  "key16": "5ayhXEqioD5v2CoEc7fmg2y1DTzFiQu5S4V5qKZunWY5bbzah453n3GZqQynuW6FHUhPbQvUFDiwUADQHCwxLkfA",
  "key17": "5onMKQ762bhPfvSC3sesUmh8ykEHQCtyBjr68T5F4s6wTqoZ7xkBiPazz7FSMfEeGBeTCwLfqpX2Ao6nofNKGFB9",
  "key18": "3wiGR8yi7rG1oiHai4jdepofezDEkcwossBS22ThBhBZF63k6H3WCuGz8DM2RwPr4jWfAbhRqNrBY6LM1HBBpEFb",
  "key19": "5AmsrZ1UQiK2SVDHX2Asrhhq9ZVnzqq25bz9eRwytbkFixFywvuBMLo98LapdRGqFeRoQK6AVLg8BpgxLoQCD3oT",
  "key20": "4FG68dT5JXvnShQkEQ2eE9YJ626nbm9dQ8dKMA7iDzrcp5FzJAyJfdg8gp3p3SmxdVHhPYfd2bj38jVkczEzWbjd",
  "key21": "3iAUq5Jnu8nDLe8GsxbHStU68bLCp35wsU8cAhFSxnJE5r2KqfkpfdBK7wVeztu7n17feHxGZk8CTKJ5DbUe6YvU",
  "key22": "62e295nKf1czLaY6aSB2n6Fy58uajLWqdrGHs4tBxRa8epFX7eEPJiZgpkV97XQ5anyNkNTjkS9dZvHH1RymLbmm",
  "key23": "2eBYR8jmjjUy1vyYtLJMA8c6wJWDxyY3fJzQrvVQqkMdDYB85bRKPx1DW6qAGxbBvhWHxf2dg7ai8xV5qhEavPf7",
  "key24": "VyYmkE53M4mZ54VLkK2LtfcabwzYXJ98knihwCtRXJFA7xjbY1QJp7gvq7e7xeiqA6E8uNsWja5XxAMuVDStgk9",
  "key25": "3LJctWBJfyz4kRGK4mMH83SYChChf9Jmuf3KF2GVRLzdLGA7T67xJAzLUZpHNUZ7QbAV48krLtke9hugZgPe1zFo",
  "key26": "2bBBTygvaxXB57BH6p7KeoRmJm7sF8oSqUZ3uWEMugyqudpodgfQfi8iezKfTRsDAzaUyv4g8ykvfNH8uFecJxfR",
  "key27": "45g6ihi6RRGTWveKiJixNSGQGK96tXhfu8ybkhz1UnFgXY9LNPhvwtWfuXj4kkekgx5rf17uYhWvPep7ABvkbgqw",
  "key28": "5MYWKrNkfEaqPmLKEeeAhJ9e2uLJeY6VaBuPmy7VzxHV6SQeA89L9Wa84VFZd99AtaD9dz7SFjY4ZHM92nYAKVgY",
  "key29": "2qNZcrRhgVAcE2ZHiWdiNzRYmwUSb8uuWVKh9qzLXDtZchkhqpdkHJ5isQjXyrXrZ9FcPjw7xCpAgAopSRNk3Tkz",
  "key30": "5oRo6wSb4ZJbGjvrc14rXbXTEJAKC4FSqKthtqVUD8qmouQKpciecDTZieTDvCXyUUb8YNHVzfHbRCNLyzqcawfy",
  "key31": "5KRpfqaXVkkqHKvisGJyY4VU88PVNAgvqxSxYd7VDMEDM9AZeDvdXctUdL21RR2wmhkH59C9oq4GfgFjeWDu7d83",
  "key32": "2RSX9BPYtj8Hkj2rka8dmjVem8HMW1bY95KWfoKx2XMCUVdTuSHaHiXsjjQBdm3SooudgbygZsQKCx8NZPU8NVBK",
  "key33": "4w8SUDTkvRkQaMGwAba9NNSMPVppSWmvJuE38zUqYaEkvxa76wu3Bo5EGDCU7W5sTh9vw9g29tV8SCL6VPEvkSkm",
  "key34": "2FJcy9UyQ3Q1r8i8cWtRDqqcvZdRcrJXZgwdWLzMhP4Ttwb2YDtsPm1s1ec6j2k1rCGMvgQEP4RgipiYG4BrKA7B",
  "key35": "28gL5Q4NkRqKGRJiwtN2bsSByKzBnXrgvLgXEhY3AHojxpAkssnSVBhWoVQM5euN1HogUqBpeVn5TEzVZvDeVD9w",
  "key36": "4t22pZyuCSi2MJu881gYWX4BSyTZYdnVFUqKsBYBG1u46NTGpTAZc9jfiPuJWGR4PetUuEf5BLQguZZqi7xrpNS3",
  "key37": "5Jm7tEWbvwc7dERZSDCVboDcsvgBAmK9MoHhqzUuyYnYNPsEJmnvNxrvaRSoZpwHSUeUvYC5EvkpTxsmr185UB3i"
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
