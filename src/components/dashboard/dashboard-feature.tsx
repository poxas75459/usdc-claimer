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
    "EPDnHLz3123aqyaGFqXHaEwvNepN5vQxBUBwogSoJ2WHqJm2Q7zqomCvU5ADJEW5rCwpa1BEVkmw4DXdzf1oCKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uLy1LPpUpMxSTAH5YR877ozkMGcL5chrBbyEcqFd1ufg3bzAbPjLjT61Loez72HD93u94syCF6QAbawwuGkRn43",
  "key1": "2tu3F4SRTgUFbfSFnpyC84vnCs4x5duYLD7oheeNKeHZLbDoHugRMZhcqkVFpkB4g4LkUcWb1BiURiejFn1QhPkU",
  "key2": "5yPCsr9C3SLrmX4qUoqViCQtVBytbQ2B3PgpqveVkro2qgFezLREeoJgD1AoLcYzjgVLdyqFdLmVvQzdki3wF9eT",
  "key3": "5kQsEQCtbo1cVtnWAteEDXd9kwu44VWDAjtSUHBrRiuj9yQhUtVy2srEvAfi9n8zT7GDmKSinswjgkmjxZjpSt7f",
  "key4": "2QNSoCYGTm2tFkXzqjWmcy46cnG5tAq4urK1m1E1Rtbzu2wtBzcUDa4UKg7FdCuyjctLKJk5aPmtWKzXrsTEmece",
  "key5": "2zYww4Lfbk2yh4hwcJEhXiMo6xRReMbs4Kgkq5jZYehsw7u5G58dgu4ZmqtvVuMxm5k3x8qCgPNtw5Aj3gt6Ltj6",
  "key6": "4QqVWy8Q2dS4GryAsz33AjyaV8gD4vGRQs7cMpbwXB8ZWXvJ2KgNyNzzrcUSzGQvgffmfuedBqeEhvX18ciEibnc",
  "key7": "4Bg9fzQGdmMbXqBz4k1ebbtPTKZUqThGXGpPEhNByJAxQvAcF5wmPL9RwUCsfK1L4yuFjdGvisiL4fXrv5kC1fTd",
  "key8": "4QX9oni25TUHpTeHvpp5mbxBdvPUMiTHGew3ViFq8STceFbiV69dY4YZs8sbWxyKykWdiRyMNQbHNaZB1NnqkF9o",
  "key9": "3fCduwHXU6yfdxkHipwwhtryoCYCrwmzNJMZjtUxc5NJehTrseFvnfdVFboQeZVJzCVU5tKcX4XBGJfVh9diciAZ",
  "key10": "5ccpit4YgsARxCV1FZuHGLb9NY86rHbsFQkudM773sLYaDBR3Csi5EXRFGbb3ic1jrAnZrEL7ZPc3XfPvc3dC7z3",
  "key11": "4sCXw2emWPs2t6LCBrfcxNoDhQ8XwM6fqgRsdz9jhwosKGKG1XuyCBjVaCFwYtypZxLF4LTbPe5Sdm2yK7K1zkPq",
  "key12": "UVZLqqE8jTbcuxnH3jAttp33RrTXahs97vuFcTmNY5UdfxKsZsvRBxQZFBZAuGjt4REpxgtPT2cXKZUrfd7jQ9i",
  "key13": "3qvejzjjYXc3C5gVL7NuRupjDxuUchZST8UWmZyE1QrDnN1QXejEueHk9GoAAkewWrbJ9npXyCWqhA5xNwe8Ybgi",
  "key14": "678SDCLq6ArmWgT6NpfWFW6HerMczpLrJdRojL593Tva3NDAdF8h9dapz2ZvfhM3YycqpFkjPTSLBjXW2wJNE5yb",
  "key15": "67Y6MHjYa9RdBLUj6QsxT5YivUWxbAwMfDmG51joMnymb9KTk4E4k7GQDuoNEmdeSuAAp5AhchCH7PJZrySA6MCV",
  "key16": "5FydmGfqieq5sSyT2sazr7P9R1UVo6roqsivTuX7LTpBAZJLBsN2Lh2bSHu13uKzeKWCtX4FujMPXJCzf7pE4Dbm",
  "key17": "2KbnWYnPRRxHKmpDuZhj3ViFX7XZXypRDPtXa4n9zToAwQgaFKBWQgr2dfJ4UYGf4WjReMDGmVceCQCF4f3URBxV",
  "key18": "5NY5M5kw5mab4WaVhE2EPYpDY3wRwe2LhDacDv4xa4toupbWEoYkUzsBRBRFUGDrqSES1oUCkPGXZS4f4NMD6zQd",
  "key19": "2bdUAXmas54krcRiJXpZKP5KQzj34hxKBntREgaQ2zme3GYfGUL3XEC45zmhmJoiKi3ru4EjCLrjHChHvfjCJmo9",
  "key20": "4yP6yRq63YDodKrMYe5qH2FPpfSKq9oDrgDKgkDxMHtB2pT5EApxhBrq6gacqEVYhv5VWfx9ke8RT7f2Q6nCD8UW",
  "key21": "gTqTcBqLMQtoaTfR4f8PwfysWsAxfmV1kXZ1PiF6yXRducLPsu3iPMKiwSaoQeoC1Qyzugfy43EfCx3YoVesZ4d",
  "key22": "2kh7CQMjnH7zFAehtdbbs9qu4AKqKFonNC4kdYGVKdmJ3pfr2DWtKGVfKF4ZWjvtPEVmpuoCphN111EQoeaLA5ZM",
  "key23": "H4F58X24NWhDrCLgfkcjRd5tyG7nXApgWryF4xwSAgEDuLeW1F2cXRUDLGDYFJEBd9Jwm8JeFu2SWQrkSJyzYtD",
  "key24": "3AxUDe22opNctryj9gkaxZLrdX61MpHTEn4WSzMcvQpjtktbMvsu8AaQSJGuwKfg1ukgZr7JbmUu86Am2muxbmYQ",
  "key25": "2rx48WVgn3yF7ZUmUw5ntRWcPd1JjALWtTvFc4jwJT9jRKe32697pMeNEGW8HAGDCEETtGMi97qkfqFPMym1mfDv",
  "key26": "3JZKftuugcGdfqmu38xk1mLKChkbuHnAWZYamE8cC4nqMkaYcxutFrhN5WbdJVq4WVPd2Cz1tW2JQjXSADTUpF9P",
  "key27": "3LoxdHGECcaqWcXNDZ5u3fYvXgfVy9NAjA7TBW6y2aU5YY31e677WzaqhyeEuDCu8YcWL9sNsUzytnt7ic4pigfv",
  "key28": "4KhH7umAMAdtH6dUeUsyYtRD4MKbAKv5SSnAaGgMxZzQ6EVszHcfhn5fyUNku4QV4WvyQ4DE7FCpv1hGGVhDXX2z",
  "key29": "43tBStiyhaVuM4Z1WsqB3s73c75GEee9fxLLqLjFcbuwN75PrEZzZKFdCyW7CCbApT2pAWqvvxPqtWAZKpo4AbjD",
  "key30": "2zjNwYTDEkRhdmeRR34S7CiHDhxsv2JSaMQMdduA55eqLhrk2twDxW82DftpEoz3u3GLj6sEnvkYakMZ7kqrvXdh",
  "key31": "4jbVvRb8gTUgipoqsAMRSQfwZUNnWDG9UpCNH1gYAJ2u9eWV9mqh6GJogaufSbA8vWw3EZd8rpsiGA4P4g62vBXZ",
  "key32": "2aRkxhBCeHTFHHMXLBZNox8pPY54J6XnUptqTSenffjmUzGmGdPgv6izByohA1cUaWtktmnmjjS9bwjTpYtuwA7h",
  "key33": "D1NeyfXjuRyp4NMfa99Hnzi79xf92mLH4oPiDwVg4zNtEmB9QYUdz33g5cWo7puXsJ5SgoB5dFj24doQmDj5CwD",
  "key34": "3UCvFs6NHoxM4jUFsvaHx5mqm4dqXkCBLYuzfarDdApxqRjjmFWfjCqqUZFXY3gndaYpWMRDZgpnwzEmkADotAzR",
  "key35": "2ZVS9J9QxehANRXowzaszfySxCEz7M8xiRLA6wn7G9MJwpc2LEH8aPffPATBThkWxKPifamwJU7uhVBVXjtF7g9e",
  "key36": "44vVjh5cRQ8vzvUqaQY3LDmEnnF2WLEE6cikaGrMdjQvFHJnqvUjFtdjJtSZcwxq18LnM1D9Uw3rnSJyYxmaGdQ1",
  "key37": "3w371ZPc5GsDfn8jGaVte5Df7iKc6GFQjTg5VuWLACmcbU4DsE4vMsJbPHYjyB5Ea4jYByz9ju8PbzKk2Xf6FBfW",
  "key38": "5d8RfAttxee2vUSyWUMiR9h2bkE4oC6PdoDZYUjzWKSHH3XnV2UnqK9ACDiKmAr3iKHoASoS5ctLRqgj2Gd6kJku",
  "key39": "5aSaL6fHFjSZkJuRKhvFxCU5RkMyv4piXcCcCH31RQ1p4sptedPVy9SSpcbCPP6WrKiaJC5kFebLfyaj6g3s8puP",
  "key40": "LoXWS9GFDnChDDpRMo2EB7LutiBsmxTnZbLTkyHgvMHxpcamufTScEwaLVgU6ea7ZfbwuWG8RTiQLysEUog6E1k",
  "key41": "5hZypCbeqBTVthfNVFgGXrssoud88RNbxaKQzAbWZ4ZY6Pe1KefmNKjzu8k41c9VJUPf4D6ANZg5kn33z1vjoa5Z",
  "key42": "UNQ9HNPSxPJzSEtcJZ5Fi3RqiKKG2MkmDYGbXhjBqDzpmtBFUgsd7e5MisJUtPM9pgGPz5zQ1E5HYj6ZXevMhZE",
  "key43": "4XHuhvKdHmdF7WvbDkFr5JAfYRt8rz8G5Fi97o3bK883giYW2KEXB9tYLbpPVGuXP6e9Ta22ANrt9MX7eHbJj1kx",
  "key44": "5TpnpYfoCWWcBCvA7v8FkFMDVnVutYfXHvMXfRLjmn165rApLWvAomNDR7Xrn8k7jBKJBdZY3Lyj94cBYis33WHe",
  "key45": "7c8F7sdWSEGvJSR3tX9f9MyomJNiJ49H3v6BLnUkJcrMTuP3reri4dym59wMKGh5QFJMj5X1gctpjYbHLV75p1R",
  "key46": "25C41BGud5a4xkVxno2d6V5Qdp8jepWEHMD5ENaHyXLryT18FdfNq3nFHVpS15z8zLT5ZSErCoeDGAenVbpgEypL"
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
