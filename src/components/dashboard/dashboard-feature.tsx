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
    "48dksKFGSBa4NqfmupJT7hxyoUVoA6hzQpbuFv6nfE6Pmm6MYJs5Z46ixaBVbir1q5bTrRjmK8JN8tsqmgSVQM6t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ARTtwxVQyWaDUcCa9zJqmyz6we8GzqMW3SAkZcxTacTUnJi9XFsXscYpCvxQCrnKuwnfUaAa7RXRJsyn2SYY8vc",
  "key1": "2KAL8brvCnw7Nh1qAttXK6AzPnDL9fDts62wv7GfLMiQdgkbQByiwL1o5uoEs4vpMysd9EhL1BRd7FeDXNpPS2SZ",
  "key2": "4mBZvBiBa8FzSZTQTzsKnNzEgEgaaWCvuHCTrStMRAX9CJFQRN78Q45RWBesb1kxbnZFLtgQ7dEBz6rjme5NvhrU",
  "key3": "3nWcV6ECZRFdAoVZr9dhoe3qxKRpYmngFqctJGNYYyDvViUzsXTbbcnNANLurkYN46VavyWFBWFtDikuhCF26LVi",
  "key4": "GvMFHauQ1trpwq8owJndj8pBYv3Ujy2YS5sbKpK2LnNwdghsDmDW5E4KMvmskp7DcCiNYpPgRBEy3q7kd2KFF2a",
  "key5": "2bpAW8fVcUXyxAChy97F1Y4E7iCsYRHpD2ozu1s2aohLAthwXz7o19ymWuaKH42qkS2RyP1fZLtoGigNe4MiXKd7",
  "key6": "3Njhh5914CDvVqAatPvNk29DrPxFu1hX52YCGoozMFxcFAMzDa5ic4BZYYNPzRZFntHLqM3zLoC1umgF7FGXqTVZ",
  "key7": "5t8pDFYqidiwr4Pc1fhFHj8uYwh5mwtcFSarA4593UK8C3X9j1bGZxt2M2CkNzy4vm94yorNKej7hFc7bsToUAw4",
  "key8": "38LCY77iZDixfmyxNuyURbLcDETyqoWXjZGSuXUpiurcvwLbYWdktJUiMurMWox6X6xwHjS1NdtznVTu4D4J21S8",
  "key9": "5uAm1R4eKvEzkg1hMp6NViZwVxwhtUzGdq8s9Qj6Ra4XtB2rLATU1fH2DpcAhngUUxJMTbZySnkU3863A57pr9qc",
  "key10": "2GscrVoy6wnBUcaq6ctjpJunDfN3VQcyuAQR8pQGsgzY3qdggzchqe9dB5LciwWV51Vng44ptNUnaqW4mPTGWUTC",
  "key11": "3QCC1kJ46efZhdLV5fNWmYvFRzHWgmhn2RfNvBiyiyhP1QHQcGNtzQ6iWTSxsxm8zi3mThfSfBPZvYrTuq7re6Cy",
  "key12": "3NxeFaBWFk33uK5NvPtgX77CEzTUjWNzZVU9dCvmtnTAsRzfpg6RY2oNahfvpTQt57WxxDJGkH4xFkSiPuErHbbR",
  "key13": "4s9LdQR3QXesisG8PpDaXo5AaCoVFYTVgz6dV6Fv2Sz2zK26pZ7pFHJBfHsy5Q7ZShhpMaNQVrDd52VyTcySJ9kR",
  "key14": "2WUYdYZ19JfYbfZ2rqmuiEW1CD7TEWHCaLE1knVLJFB2WQo22n8HP7Qe5zTnLgMff1UT3adi1o7DPY8jPBLkDNNd",
  "key15": "34LKXn3C2t1Not2NBsfX3vHxcs8WdaVLAUE3YWUhsb4feyVj7P3CzMngaNtUJjpX6m6b7b2PwUMxiaT1VbcukhVk",
  "key16": "51f7hDWsuh7S2iYzgFHVzrhtuRYfLiS3Zkoh1VotU45orcviW2xEqEd35BGwP7Av7SEijwEHvjcMcK53GK4JgVvK",
  "key17": "648CBQDEesMZC7DkYvJvsup79cb1z8AfPDtkrZhiQoRjYaVQDqHffdct2wVbUoR35Wy5eAFcxg8WFVKF6pfFfDRu",
  "key18": "PQq6qxzzWPqUuDFy3MUTCke1UJUny9jK8U6bZ42AHqfNVcm4ShvK1sL9oUjdSovGPu2U96ZQCQhzZn6VRM22Evf",
  "key19": "WWm89Seeb47vpSETnf9ftXac1zBKxfcWyKr2Aj9fE3tWDRLxaCTU8XPVCe7bxbB4CNdsnR1DTcrmc6GMsWJ4a2V",
  "key20": "5ePdZd3JNdcoD9VT9UqQ8BCWoYGZdW1fc52AWJpUrobJnMAyM3r2t2Czwan7Ah1uLtyqd1XZbAns5GzpKkDZTRme",
  "key21": "5kThCnnoLVFGCALgqVMiFBN43QyyLrAis1XDuQvLWQ2tg4ZEe3khGAPyhmWKPufWnK4wjqdsqt95GYhWyxufFxaE",
  "key22": "3ZsHEZ1RfArXAwZh8fyzTraoMr5A3zoJRfUAgiRxy53q5HJtRxjUJcY7CvNVepvGEenueZZfC8TkjcJrsi8jWqxT",
  "key23": "3CpTpneV3aNGbHc55ydqLuEJJYQ3jAon4DkUnCYgxt7ccT6LUetY6QiBMwbFAyRDG5MHKVb6ydg3KeP82cvP8Qcv",
  "key24": "5La9Nmr8eoq7o424rrrNyhRVU97fkFMK1ef7UQr291kKrM8bmxnMqxB2L36aP6H2FdXdqhq8J8j4Fb4t2BeJ8ZcF",
  "key25": "36QPnJHoBUJB34wLHcGaFhP7JDyHitAjHcUUkoE2YJNwYrERLiT8rouUHfGEgn4LPV78N31uA6QXRhPKg2pNVuWV",
  "key26": "4tAyVcsWBALYLCJ2Z3Jo6gXNDiTyxxxPjK1G1ehdMZkDRp3FwfBSSAtfu5gZ8LKaR4ELCxXQgMHDuUdAK46TYsZ",
  "key27": "5VSKtW1L8RuoQP44H3iqQbeizX1pb97Zvhekp43jvSTeC4JHYKLZRArdvGZMDggGbp1P6PLqvf9EbkZfwP1ev3ss",
  "key28": "4RBtycopGcgQwdoFvTxvkZxwmgpcfmKxABWXRgsi51wQK2NEKj4VS8zuAnEiU2x5KmyD89ydua3ag2Hg9X5RFKz1",
  "key29": "27muEkSk8GhaLXyhk6xWK2wY7Q1j4CL1BuipiFJd5WZay2m3ee6BrsiaxqBQDZjuupthstXkFMwz9ckTgEdPP9XF",
  "key30": "5cSTS6mRNa8H3cE4UDQrARRGHiBS8a7qwoWGKfChsqceiUa8QSyibJFGoEAR9KHBcMTwHRKNwWuLSLxPEZoX5QM3",
  "key31": "4JDdGeQ9zN93XQ8TrYZVFf1SZ31C5rmEa1PhWD1Ve84GzRggfCRqsRuVwiDFqZZi33ffzh74iwLhFMh28Aai184U",
  "key32": "48a23ifYa7B99RR1kGF9TFJKKbttcTT6GHrxbPnWSE2jdRU4jDq8CnRUXUhdECjvA2aEm4nuduRVwUyRDxZjmfUQ",
  "key33": "3ud5JYo9aGDdjLP2ZnH4TT3z82WxDxUc48WRvGcrNfaj3xWYrvWRG1s7Vv2EmcqvCSht78UUHTcZt8tNEwzAP4rW",
  "key34": "uP7mMQxmJQmrYtDbw8s4PHkmZWtfG9jHxijjhUkte8AtMFDWkK42R5DPD2UqcKnSWWWKbCvneT96ninym7vYgbY",
  "key35": "3u8BiTt11XMznCupgBPqjVQztvfitA3LTo35WfYvzo4qM6387cQHtiKHhuHDNHsPTm19ea3772QnnuyqztWMgQgn",
  "key36": "YxqrxEwxHCHStVQtrPiZodGZBF34hHbffnzk2MpSD3mNm2VctzSQUaXAH4djvV5VMkrvCjAcVXkTW9ApVw2eL4b",
  "key37": "4uHDaprrNte14QcP64e6AemYwrLUuXJvie6HjGaCMN7DGuoyZBTGzkr8AVwy5jnUj3zhtJkMcuKF6KynucNZnSQ1",
  "key38": "5VRqaTCvj4kZuLXotqDMZm2ZmM3srKM4esbpECNGqiVDRqEpAsLeS9CkZQzG3YpECSTTiMNzRXihHDrFSxFpcz3k",
  "key39": "noWGLoNN8EouKXbtgkwwacy61gc6WwTyvddz8Yujc3fE7KuynotdMWktGuZ3jQg2zGN6gVubaGU6EYA2tmy6h7o",
  "key40": "cyqjAqDdHu5BKt9otrYgNUwyR6kmgcWiDgAVMbUT3WffMapwMEXE9qFJ2m1GQQozkSHZCADN5aFxnY8YH9d1HEW",
  "key41": "tt71MZZd5TBK7brKgN3vVGNnvk8S9aBMpABdjr6cMZD4pKVU8WeEXwuAh2dv5uhNCp2pSQwpkG6mR573eAcGdzg",
  "key42": "4mkdyqWuhnZ5YfZBiVWv4tuQAzrBNjG5uWNfzWFbjboynM21B1x4wtbnSUMjQrbVZMRhTU8MiwqV8YpnA3zv4f58",
  "key43": "47mqFFL32468cLe6nGwzri2t4QXtzpvBu9u2AkDQ5Hi3h65fdAGJd49iY8ERXGNg3WaM5xmJsjdJyZoaiBz8MMRK",
  "key44": "5hwS6nJWwM6EuDbwEobd3XyF2SWMnD2uW2tURnLQGhrw3KdJBqftveoxM4CJiXTyysxwB1H55YSPhEkisCNL3sas",
  "key45": "3bJKn9A3q9dTVSZKzqG73gwL7Smx58yx4i5QaaVVD1RFAJEdj13gJTYwMzfED7gihrYddJXRcFLWQKML9SpzmWN8",
  "key46": "55n7uEYjAE2cCGEg8bznWttJn6XYnWyPoUFxFRPM4az9fUtbXEbMhyGkV1zesMVVbgLqXF4htbjeiRq3fq4NtHAr",
  "key47": "31BCHBp5hF9wyzdhrMTSrXgEsSx7Rq2NEcBZzQhXC7SoM3dcrmMQHPYWh2LqgtuuCFg3f5Zx8e2tD68VVrTUfVdA"
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
