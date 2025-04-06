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
    "61dAonhYTqojjZF6uE7UnJr3SBtAsWqpeeyxhnANHyRqnajWaF8YyeBzrYgoKjSneZoMg53C8fRe9J5Z81w5jLYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fx7BAqwQQwwWSn5aJFgMd2a67Qq3EFkqu1GkWDBwA81DpCdZHt8zWiPs7t9r4ZtdJijHzFjeanp3huECgqsekMf",
  "key1": "49cuNnnWQ1xyyR4G6tg4rGjsgwzQbvX5fK1gYehvAUrmxpe2HgUvbh7Qes9dMxYXvk2ksb4hG64Dfv7oadGXcyF9",
  "key2": "iX4KTFyoS8JS2s7tdFUbMZfSujp38o9DNT3m8Xd85t8JgmHMhVXpeeHxBw8LwangkLi7LM9UivsTqRSf8He1TGP",
  "key3": "2mjj6aib39NEpMmSW1YUwGgA4HhBa6jSAR4ib62gJLsurrEAMc5obNP6217MouoVhNBEbndgZibEZbDKRZXHARim",
  "key4": "647i73wnGX92dYbM3nV6eTcjgDdsFdyZYdNMCCEk2R4Pr3AP6FbSYxvJrgTCn4bxTPRU17iDGhwmMiiisaYabmiC",
  "key5": "4U9eYoFUyWAwEzSissag2QtrRck9YikRqa3nh5eQLhwwaqWyeLpwKDJwZxbes8k5kgkkcYEU6yLipcWWfhJxL1CE",
  "key6": "61qgMSzfiuwaZfM7CacndPCp3yQ5JGxWrvC3sRtQmWJ5YFR3ti1FyfKzpUZVeuJG6u1NH6qdj3LmDVkWCrsWmPzZ",
  "key7": "53hGTQwa9vCJJaeDrd7a8PQvRdJboJb6ReQV7VYn6aZC41rZJE1FDFePoHxXkQ8jthye19AnW8FNrUvLvZNSEMUV",
  "key8": "3eVaXACfWsPB6vUjmkptQXMoo9wZjuxCE3btTaQNpqgkqZW266SUWurB7FdEHsN95wynN41yez6o5RHkztUxo7C7",
  "key9": "C2ifDMZxUiRdkHZzuzmgMpkvt5B1mT9PSSm7ZgZkob2oqTDT9az2pyCbh478YW4BBSEqahEXN4es4X8kwpUgDcq",
  "key10": "3VJtezaUA3h34ZKk23vGzhvMJqSgQ9CcNtYDtZsNYjSrsma2nmDFsUWJJtuDThDcPuA54gez2g4QMNtfYr6DkRrw",
  "key11": "3fuZ6FVww1rtxe2E9Lq32yr2y5KRnTf5x31zxjDTPXt2L69Cdgga7BasMGv4TRKE9jdikNngULkpMzVjRYSRUU6u",
  "key12": "3bJp26ruUWpytP6me2ojwW4zhXSS4QNmryRFTMkQvnoRddS7VMoKXZj5MUWvENtXkFk1d7c4xwq333x1gu3uGPZB",
  "key13": "qZyzL3YFjSXTv1ayDZmswZCHkHZXENDM22MHL6ttyJccS9n1z7shqBjAbJtBJXK7vpBU6LLgDX9UpQQryVuwC52",
  "key14": "kEH6roE43hQxzAjAgJ4NswdG2Ri5jQnZ4148vhxCuDR4TeMQGsuv2wq9TopauyV3UNxQ22vy3iT1DC86xQmEtKe",
  "key15": "QZmMchGHsy8fQBYsT684qYT5kDW4hgTTTd62xb5XZaJiFQxbvnvPdy93pBigyQqBzUqAeAGjPt8db4w5evCwuo4",
  "key16": "66PnZGUw4XbbAAfRDnMuRvtNCuHesCXXVHtsN74ofdPTFWvAfFswqFsM6nvgg6aH3o9hQ2SMyj8RfyPzULRdCVH4",
  "key17": "294y3sr9WYWm9UiLYJanoKHZjwERXTQuhgf1U4iUbPpiDbX9BJqwnnuqgUEFwz75tf3vWmvUoXw3uo7KMKaMmzv1",
  "key18": "2HCgg4b6T4XPJdXRxYaRep3F8s925nj6f84qG2wHZq82HPxX9tuEHyKVgKdih9Zna9m7RjfWVVFeJT1eyVEjVWJi",
  "key19": "2u5VWsccYV7bCD4C5W1ebvscepLZmD6AbonN5ErsmBgWwTvsvw3VbG7pJFjCEdYTeXucqaySYaYgZGXZCJuGK1Cd",
  "key20": "5wbwueyYvf32DREGwMFweVrLQqFDuKTBMY8Z7xA61J3vHse86wBHYhsx9vwxNet5bc3Xn1ABQCja88g4tGrdMEPY",
  "key21": "nP3UYziLmtTLy8Lr3X5KWJvWXekzPBNaHxAxzUg6oY8v3Voq7t2TYYWqQWUWHzCSNTKQb1eFcBeVm2KHJBywYqE",
  "key22": "3qX1zipjFS61923wxSdumSjU9JCGTKB5FLqtyN1fpvg3qQnoqhUESWwek4mjzg81iKERAeJWTPLXijkEQfSzy2Eg",
  "key23": "Gw4JgLtZc9s2F1wnsgKPz5SpBetpHeLxYxGYK8ynWVbg2ZMG6HFQSad5T9DM8EnvUdTiEyw8nYTwtwKGTRJagug",
  "key24": "5NenP7soHY69yACsnQb9MhtePgXeuUNFoWzGjWd2cacifiXfDwM1WEumt2Ynb5tU4W5utQrHBNU3zT5TfQ6EYVTu",
  "key25": "5fFyhDw5fCZdVXKVdQta8eDJHdiauHqgjLa4X8FFHC46yEbtrjkp19rpL2Wes4FHDi5zJxoGeJXkgKDX8s68EbT6",
  "key26": "4oMM2ZgAnpfHecfY5deDK2QmxFHDKwrSBKMxs1H7xRP9oMi3dwPPaeYBbuus5LJRNMYxcg4BBB8z6MQp5NgHubqA",
  "key27": "41ahWp7iBcrNE44VVz6kgFK78BAGj5bwvjZnAgv4nPZvRJZqR9a8iHuyDQ59v8QNyf8P53toUNK5S5q8V3dn58pS",
  "key28": "2YcFSWS13a5YwKVnLPtPjMhck4N9ZzmWogZQJPRGfwk5n17sfrP43zpTYPuq4sZsSbNq4nQb2Xe2erULWkHGjy1n",
  "key29": "BTjSXxD4WubwfTNP21foNVokysGzJaPJDZ6guXuHSQ9vBJ8udRyyt5dsARTyB7Geti5QoGWdCPLtF9akEKaq3Wa",
  "key30": "4P4yCx3UscKhFpGD98CeVz7iHsonpmMHpp1XDxgfkzz3y3HbSrbyehtuhhQavUnn1DtYAMgBJ2boYJCu8GLkG9CL",
  "key31": "5x3M8BJSp2o4BPyUbeB6Y2kfnhmbL17QjYbT2ETU3a6yFaKA15SL5DWxQggvksMYwvvGvnHrM9Z44zhw94VSggqN",
  "key32": "3P5EKNJWpDFiZyLkLDeUAriV9qkT2yBMkFgZM2d3HnbYzopUqh4kiUPUA9GNktGWcFhCYbVgpWxGDTgTRGbZDeUd",
  "key33": "2H2grwDKniE8AfPDbxGuvakEc3TnBAsaDjgNaNQjKRiaoEeovC6kknPDWAVyVG4yip5jFgq8LpazH7X6krd1L3Mh",
  "key34": "21cARB91aHpMSDTsXgMx6VDh9bLoJuJAYqJRSFSC2QhzqL5k2jyAGWWY5mT5cYgvc7aibA3n2poXTSnHjSZFG7pa",
  "key35": "3d9WDU2agGCMmYMsNQv7eoXvhDqRzTjmHmy8cpBmKuXgnih24zQEUGKhG1R3GUbqRt9e9bs8UkBRa7tW6ZFa5qTr",
  "key36": "Dx4ZHLY9Tz4H5beyRiJ6e8BpXGzxySMzhtdbX3Dd91vKeCDcc9gxTeUmL1eFC2axH8QrAfpKa78xeguVNPdeUYt",
  "key37": "6254qcBhN1CCbE71ZP5VH2HbWVmqVaeNX9MzoXkkhrEABy67i4Qu3pG2E9NLFEE1ww43YHK85WfsAPpvKuQUdL3n",
  "key38": "3SL8w5TsEv7aNTWcJME9654TCEwqxiavbhs85Z4EBrY9wt2hX3veVi5ioMZhAzboigYH3QLeEN3XiD46Xf4cqZzD"
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
