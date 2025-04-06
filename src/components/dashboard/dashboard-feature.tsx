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
    "2VStb2HmHsHzuMojKHerFPsw91KJDmpVhWxEKBatYrY1SHwhiPQpyEmJaK4i5dvHsVaNaZDAK5Le5Zhzysqqcw4v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "15hFZbZd2Wd4Wg6GZ6Z2VkipATQVUkLgiSjFe51y5w2b9gkUpXyEKPLeirqgboi1mfBU9Dve3pnUubRBuQSnACX",
  "key1": "3pPoCqctWagWYWEFWYimwtwVmpPnZpwPAmLtFuBnm2wb1mXjqBrrnzFRcZWekBQ5gny8jNBwkPPqBCoVAqh6kBe5",
  "key2": "5iA1fM8rrxGpscrrRbLwzin7vSjLdGRKWLjReFfPA3DZYSQ55tLttMmiCLeqSxRU26C4gjPeRZ8GDjiZKfMNcru3",
  "key3": "47Mp7k77daRv8erL3fVyz6SiBBQSXokwQeqQtJVMLqWKVhB6ujz7xHAww2pEdv82MY2pyxyKyeWgVQEuD5onevGb",
  "key4": "5GnhYB7UVy9ooinyrhh5CQbq3dcMmRAY9j61CLLNt9bMLgRwRa3CKnDLy97T2Wc5kj7sz59bTe1nxBoVAAyciAyc",
  "key5": "2k8is1RhDqB2PzRnUkepBJsCKDxYiEiHg2RLZLE3K1iJkYcSaykKMDEHXje1eHFrpcgZRWYEG9A4fBoMuKtoJQSC",
  "key6": "3kFq7qk7zFWENvwpdZgz3QuE7hW4vn9iLb4PdHiFMsEwywpobstQBd9BZgdRvSWGLYc4oPDkDYKXDiCMkW6yCG7L",
  "key7": "5ZmUQgiFKtPePyRZeU62rtPx7dzxSWo3AYEKnthk2ZUvKcpZ5xHfdFgKPxPHVh8oQP2amGF9wwbH7ZAacfBmybSY",
  "key8": "6RTJKszT5D74rVKpsQTj2rYNvDSs6NWVSVhKJLvTvDaoaxDtaDABS1FG9gg5oa3aMihjsATHxe9ZVnPpTj8XXnn",
  "key9": "6a7KcKaVW84iMTPg8YkKKs4UGRhJusLfePqdkXdvAGcsq3SzvCM822BAh1wrTaaVRyCrXbtXv488fkgCPvGTEf1",
  "key10": "5g6ezFZJZuJzSNNbeeN8gD59qCat6SARP7yr6pDiSVJ5aZkSCM2Gv3RBDd7gLQGk3wgFUZyszK76kQbphkEHD6bQ",
  "key11": "sNoUsNzpgX8eg8w9Dv4z85jR1wtEuQjU9b3jfKz5zmTsZghz8Lt95cDgZ3d9msrfsw46EdRdbZ3b49NcAtGjeTF",
  "key12": "2CpabLYeAdKg9PuNuPRUaez5Hq19LMWEBxb34cCUNJZXNV9C8FbpUUnp4xwTjAjR6SdjwHHixwbDoK5wbwQ8A4xr",
  "key13": "5JwynnK8TtD8wd3TdDPSQCRUZbVFVAJFKbbRVtMQook7Hh1iPNszwmajqMBjf42ngZuHSFRqzQfuXpHzUe5qAURP",
  "key14": "4KdUqtHUhwGToAtxcrA8kzosU1UV2m8aVPLDmh6q1rNj5tCbMm85binJeYqGM1aHNsLf84dYeCg71geY25N1CH2B",
  "key15": "2VPLve8bcET5hRKX7nPj4bnahCUrpD45pvCt14fZUZFYxLo9ixgZ982KAC2z9c86zZ5kXV5id53R3uLTcQundrgz",
  "key16": "4DMbbDWRPWsmhYJvHb9Xd2nTQDUk9W4PGYvYVe72bgrJiZAJCW8ZJm9azxx2emxeZd5idsua1kKAqBg69w88jz8i",
  "key17": "3BKUauveoXJH2bBAfnaWd78kVYbhSeX4enDUxDMwbbh4YR7oG5YytEyT6hHFQ6DKa67rT499QvRrCyDBQBXLQRf",
  "key18": "2ZZ4Q5sHdcvogabnmc54TwUGosPDJf3Yb4kBrQsDhQpZzeY6Vuh7JsHkBez3LqErFMC9C4q8Rm1ZFQ4fhsQmyz88",
  "key19": "4HuSZ5Gg5rhaAFdeRPAY9PeCbCyBwVftrM21wBTievczGKJsrS1mfRieHCUskXhATWrrM2nFvjdL9c6ZF2VtGwDo",
  "key20": "QCvh35zovv75xU7x4kCnruFwmCpctdWyqj3jBamJGWiMujZt4YMqM6XXkVakaEoxwCdCKDmTgvEcbyaPqyW2zGt",
  "key21": "3zDco2z3z8rwHPTrhDaFRstmJcsvqyrWoC4g2VkD5vXRUM2qys6LATLq48HDHfRgXQatUc15L8dLsmJ3Xx2bEzHy",
  "key22": "3tY6mQBjZfPN1deVpGfUMcRrBnBvrWfSs223PPkqqFvbqjUpg41v2catbE2Ki3FTEzksTCHPdVR2aGDq7iJraNUu",
  "key23": "5U5YBJheB3NHh4YfToZeEMvK4DCp2MFfonbJ8KM7mECd11ZJfv36Q1rJid9nVRdRyiTgbQmCf3Voi6iQezDXaSLt",
  "key24": "4cFiLQETL2EZx6NDk34XvwiHRxFuZodUTvhHW8so4wXocEw9DKs5tEpqddTNmyLbRfFzWsTaWnj4zu5Dd5AX8qXD",
  "key25": "5dxjBsYZLJ2rJU3wExWBTN9EjgvJPmUavodKAp1A6p5GRpY1sJGRGk1kGv2GoipUkiLA4qhR7b41upw5vyg7tPb",
  "key26": "4nEpJu2BR6MBVWjGwxRMsdvabFYnBvxtN4JVzPurD7DHigZhfGtvVxavQhL61vtbQL5jGcDHdHGJRVLj9yLLNF5B",
  "key27": "3hrvADigVWLg3RfAYAXJq3wRhgppHh2eEikWuu3zE8SFKn6WqKvtbFfz7T24BhXmvfVVhxnN1o1rGeQvKpLgTp5J",
  "key28": "4z54hQF76aBgHzEAZyP4GJnEtfFA7fghBtDfbSM2TsgFsVKuSGjtc6t2ZJEH1hoZNaL3CqhPVDF85avLpiaTvWc8",
  "key29": "558NYcXv16iutcdNTipGXAcvfLGhfUmyDnyTfE2o4q3VZQ2sZTKCeXUvBzuX6DDi4WSjsfAbPA5YYAS5ZBELJx9r",
  "key30": "58TATB1wRHDoU797yvoqRHjnvPVbR6taHMujT63oBRKkuecdiYq9D9ACN8Ruh54ouBT7ADhryWC8q41hoomHRKpu",
  "key31": "5v5dsFV8FTUC4DXJCk5P9nixZbf2D7ZfbiwuUNcRCyHf73LRtW1hHXi87JWSpLSmvbXMQHbEUBoeJoBH9BhPpTaS",
  "key32": "4upXaYe2UtMcFgVf1TkgMDJwFbnCXnrwm1ADodG2oLtZZ9coNXbYsZB3MEWarie1JK46jtzVa8t6WxXzpJDdgeH2",
  "key33": "2zeKm3sqNCKbHbZX5NAhe3S86XDAjUW3PtHfiiNiLWoVXnNk35AEKWackXuW6aVjgLAaTXvuQ5aM3ifwc4iZEhHo",
  "key34": "5oU34ecrcK6roDWtS54axd7or1uv3rvUg95qV1mMpXXQSeXw6JKYcmY7SoppVZFYgThbc4rJxiexu7f2KfCPkvh2",
  "key35": "2zj3Vxe7fcmb6z7CaAswab4S3quxwPatp5kpeuqpuF42egBAinH2JnEsMhNzAMWDyTcqhdDceP9gfL9uYNJ7HmwD",
  "key36": "3b7o7NyxcgqeoQqkci1obGn82bjHKSQF5iPBG8hskcj2LhB9ZdyXc6YVk6vzvdrhUVi7y6BCnEtrQfVj6bZ6gfTx",
  "key37": "4tbTV6U8pXjW4fdvS4GYbe2vcnFPU6Xsdyb6PC6Xn6NJVTLjCJ4BN34g3mctyUY4wESEhvQEr8CVWgEmETKkocDN",
  "key38": "AzkwueGddGkGiv5cRZskEwtB5Hu11xPrYUgVgiBY2oN72j5AMoWDPP13ELB3HPAV1i3FEMXodfkHsMYYu37z4h4",
  "key39": "3UqMr77Gt43bA7NdkeGJ2QPPydqhVPNf4LJw5FqCxbv28LvZaTuMXZL8KyteNPAXNT2eq4LvNXbhmTm6pnbpTPpX",
  "key40": "5JcMYoDQZGRTEc7W4An1RRAbLKu17i4mheHWrxPApZayEebgUg29rnkFpJ9Mtc9m53XdXsoGPWFb5XbEWQSk8jn6",
  "key41": "3s58BSUg6iKxK3ByHH88p2vQvTUoZTwVRhdu3tXmVU9LxCzTqymNDFYSwPEytNhcS5AP4HiktL1spLhJpy71C8mX",
  "key42": "4vqjQpZt5gLZ6RLRApubkrjJpR3eAQpW6fSdnsgEzhnSfNNoN19PQLdATjrq5FFk1QxsaTwYKXxFKwXV9niDywQC",
  "key43": "3w9GQuCPoUXp7q5WQFNS9Mq9Yi5GfK1YFsu54Cxz6MrEKdybuRxpWXrFVjfoKkj5pq8q97TVZbBNGRwh4yeEkMst",
  "key44": "dgtek7MBTkuCoBEYsWcWzNkZt5cFtdg6px4BMAdLEitVfNVYBjZrf5LpobsS83mmuXnQT7nnEnaVGCkzFz7SZG9",
  "key45": "4Jn2YhKEygJjt3whM2mAuRLuzgFnqLHEupKq4VzB8yjEtwqxaCtpL5Jb3cqnrgiWSP9U469nk6u64rVqqBqKr9od",
  "key46": "55gJHc9UvRjNssEitD7oiP4NbQW28NVxdKLkbJtf3yPxG4qF9n7hovJvRBAK6Q9audHzf1rScxQVnTHcaSKx7GoS",
  "key47": "5P6oErpdg5NMxFzLME7UK9VUX23oSuJtGt5zwVsHYvWqJMv5bYLN4uMDjfM1TqMMGCD8i47wQVtBikVkjCYWpktc",
  "key48": "4jbAisyrrD6fGESkiVeF5DUzhBjAunAoz3eLvVsgawNQNfV2sNG4TTy4Gau1VYvJEfu2yqGJfa18q6weM8wzWssd"
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
