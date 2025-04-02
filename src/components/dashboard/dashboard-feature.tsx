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
    "3Johd2tVZxNZXnAYNYdu76JQEcPUiMxr9DBdi5p3fJiRJvrVUt6j1uGGuDAsKni8Yekc1R23B31BhXdQzF93Fdv3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AkgnCzyGFgN2VpR7NRbyKm3XEG74t999sH8Zz61AfHwN62PRw8jXcP3ruM5cWetczUzgm3HiknDShwi4EqWEpNY",
  "key1": "2S6oHAnkca8Vb2N39eNmxdDQKF19ux9AtTBPkrs6dHRyATAvMZAhh8rYZCertzYrw3UhuWkvcw5UPiDSmHz5KsyD",
  "key2": "5ot3zC9WWrTDvDQFhUKBryFVpbjQsZEmz1rtAbMXqw1baVFm7Z8sSjazG2nVosQuQPFo88pmpoNr7bYGQfumnGnz",
  "key3": "3ykfLnvKkGw8GNok9UFj8iZ1E9HsbBa5JsdyMFUhjbk7DvxAuN2QE9AowkhAAcSz3NBi4XCaxUzPnAqhgneQKHnM",
  "key4": "35fZeg79bU1dNX4sUJJSk93hMQVWkn5B9gYoaNeJjM7S8L8gT3RSDkfnb2SqyF1BDCgx3fB1Z6qsA2JkkUhm2TBm",
  "key5": "2PnZERhb2W3y5mMUdFdQToH8fmeZ2unnoASCTdePFeoomNLV6UnvRDY3mv4feAABPPHT11PNhiDxCRsQXDeuwT3n",
  "key6": "4L4yFzXjMkW2pF28nDZ4ZhCEdrExm8vTXv6wS23H9Z3z8xxg8KwegtQT6P75Y8LnabFWNAv3CZCTP7aKNvAJsnVT",
  "key7": "27ckY37kDWAtA6sqVYL4qs29dFVJma7oZnuVdpbqG1MEnHxhshfLWqfYkuHkXKTJ8BJs4g9X7hiRQLu6QHG6xuNH",
  "key8": "5BCV14rae2Gk5NjrEDt8EnkVniGmreVzbSHTzMfWzgyFa34ML37VKHm4sGRYivh8u38Kd2H4LqRHD8TPH49XxDh",
  "key9": "3hakpATTccbqTAX9r1k3oJEGFCxYQ5JTC5hZk3WodMYVdSEMz47PGj5DhZ8hb7Xb4fg6wqNwKzqZuzjiwtNomMYz",
  "key10": "jwkecHd7hp4RqePaTyaj2L3Zv3DpYMj5YJmAwDeGp4WfQq7d9zqBA6c3coe1xKCXpdZxBtb8tW5rDrKKKsVzzwB",
  "key11": "4N4yd9n2Mm7ZhZTB99nUyHEumJ2FuKVjqd8zpmC1HQdCM3hkpXCegZgZCXtU5WrMv4PF8sWVUSncBpp1cmyHG4am",
  "key12": "3sh6aFLBE7ZEnUACjfg3wydjTU9tsupz2C4bW2Ne1kknyNdLHH1zPENyE5D1LUAeSnnpzARitDVh8aCjUwztvRaP",
  "key13": "53EKEjmamrKAwhsG5woy5Vb6rKKYYGarYjdeNvcyXvN95AJxg5RzK7bNUhLANE2EGTXsj4Yb3LioPjBvWTv9Y4N9",
  "key14": "4i8vkPmJ5VziRxWbcT2HG8QXj6WJcjz6THAi4MPfcgnFpq3kHoFZJRvrBJkWJpuujpawG4YogdMc6pkwcdzUxxMx",
  "key15": "aJcbM5Boz2ZhTn7jgTR5JTAVPcnc7tK9VtB7zppmq3GdejVGZCG7b7C9VzJVHjjoHhNC76hDKtYcP5diHC7k3xc",
  "key16": "4jHVgdiVwCYpWVLKcbMehM2rktGV5mtBjXDnziZciQ4Au1ftZtkDAZZm9nshHehJpib6YdjyrACCqXTWw9PhH2RT",
  "key17": "4tGTywBnuGP3kWzHQGQEMkg4yV3aNk4vNobUPUbZhfVRj2YeZMR9fKd7ycc8uJ3sJhgU3ApJvt73byyDo7CbqWhu",
  "key18": "5uFtsD2LUhpLpoe42nFVa9x7w3vGbuPqkSBCokLzPqMMEmGj92FqLPNLtHYUWPcxTVnwcaVxmTKJ579c9nhRKZ2V",
  "key19": "2ZNerPvLZWzcsEhVAUR1SZWQ3xpFuBBdDaSKadG77ZHk3wv5KgBzTv5eGLwLzEN6qrcK3LrH6o9J2ujZsp1ubFLv",
  "key20": "3XxKwatS3mjGeZ7i2Z1TDpeKCTNaAd3uXTwQRt4KHCebRvEwnDyiEbSU5Qr5XMTgbYEaohWKyvSMSbr5yvg83YJf",
  "key21": "35U6r7weNA6ZNQxWNirVKzBA78P6RHcpuMF48MXSYJxuKQhiTN2TYhToF8Rsh4Ae12ybrc8JQwg8KA8bLT5z7c1h",
  "key22": "64N23kP9qDUM6wxdja7KJLuzS2VhuK14k7SzWhQXFmKJ9m77DEh6WR7MgLZhDjZ6XZEjxhEEY8wqFcrhEpHeRf4L",
  "key23": "4Uwt2imTgwpAEg3EVnCYoxj8nmLejbZ2c89Hgr4jHHBYrXXpubhXV7dMYSJQrGnc841FaaUhUQLY7wjtLkBs6pHo",
  "key24": "3fpWLK8oidL9WJRLiF3SZQEeyCba8vHrEixBAA5sN4TQoEWe1LkqLmbkBP5Kd9zj7y74YZL79A2shqjHZKtdvoMQ",
  "key25": "3NspDE2C332fit1pGU3P6pWUeVKfqGqnSzQmQgtTb3h5Kc7YDcT9j7UUedEmurBHEHyfJpMeJZ38EfxkqW7YWZWK",
  "key26": "3cy9GSnRhF79uA9qtq3inNzn1FEQ4zhYimjpVc8FD5H7n4AwvUvuAjPTBvwEzz3ADa41UAvnX9NPiLzqKb7MXx8r",
  "key27": "6tTcbFDsPJJ2E2NphvajfvfJkoNS3Na5Uddq43QVxbkQiGATqnHGSTd7KjrSMZwcSnYyuqxe8W9xze2aigg7xKQ",
  "key28": "Tkj7LLfWtGEnqP8SCeJEVwBgN5muUqVhTpG77yUwqwqLXYiSVhDQnf2kNxQ9cZGvnpnFCqoBp2VqMCa8ReunUri",
  "key29": "3JuyqLN3cGjDyHG4pkseEhHjVEMqaazWHGsjsm8aNQmafyBjKaPHubdsEDVAq9xXdpBqXH2z4R1Yq3HmUTnazTXV",
  "key30": "5efrw7wB6b2h5L61FyYR1zQP32wgKXEP2zh621owJimnqCGTPGu7bgQ3aGi8kx3zwzR3nTVkfXgYNQb9Ua3aXejq",
  "key31": "55WLxCVkKNryNxn1N9gtpo1MYQmBo9BdRPyQEn3ZQdCpndr2ZzCu1PvHSzvRLRH9fzKEVkAFDJRz6tH5M8euwjxr",
  "key32": "W2ZoChqDYY8xM3w9PfuATsRWLWXzXUr6Jeik9W88z1NM1KKfb3ya1kxk8Mto3CC3Z4St3eckwMENVo7kqLRuEiP",
  "key33": "4QZ9VAXmKPUVozNTYfsHeQgVbukcf3g4emY1H4e15rkLep29RbPDiAE4q2X7JaACbs7qQ1ecs1M1fAYWjugCUV1w",
  "key34": "22bg6ziwwFZ13SzcCNNxwwnms4vQQ6hHTKu1yWAYPeEcGPhhvqosyjfwRhi9unjigr1ar6AbYeYY5GaesUhZWcq4",
  "key35": "2EKajBn1FrSDLkCLYTczNKT9YbgDj1i6np6MJLHChucVpQd8aYVY9PUxcAk5MjDZPLgxyHuDBYUbABJTGPHreU7U",
  "key36": "4GwdvDhCR1dDtx8mFzJd7jfZaUuMNWnaZmHTSai83iTwfFFb8kptPPw17aJZ4WX4jjtrbxZsh1vCGUuyPBVRTDhs",
  "key37": "2jtjSU9MF9ADx9oiwMzkBGqCGQqroVtdu9guxZ7auBt3Py6E1EXNDs892X1uRdP7UqUYvjZJsSGrEJKbwy8nigC8",
  "key38": "5PkdkRxeKM73z6FkVBjS2UCMZBBYcW4LEGdyHH34Wvbb2yQ4uzpdYW6dPdBFYCQnfbkzfUsGVRDQ2QuDKc2HApjT",
  "key39": "4GR431Xupkim4Ha1u8uYoSZ7JodctKonFZLnD4y3oUsRq1GXG5L44gxJU7yru2Eg7ntiPn2dchSCjLsJEqGYHEiT",
  "key40": "57Cnz7HzkTtP9MrzAd71Ca73aZ6RiAqFoJB2qnt6bkTgfRKj7DVXPKQMEtBakcsZTz6KZQZPp2KgmdboV5yTKXN",
  "key41": "27P22DsCGZmVzaAdzmKnmN1aXgBVstm6YnV6ZBTNFD7mhGL4GZtzkETtbmH1k3wWqLtCBH8VkyZeZFNWA3RpeBcy",
  "key42": "yTCVKKusgDEvUqMzLRcHeNzTQcqjTnjyRWwB5ga2GXdRdyiWN1ZRu54riUAJGyfADXm5PyzzRFA38M7pJJbccSR"
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
