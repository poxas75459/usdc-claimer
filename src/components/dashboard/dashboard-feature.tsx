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
    "29yHK6TyZiDudY9m5C6xU8GCGTxHAGEgBf2fBmQWiAQb5CatCbcNFAY9XTEHdmp9LsqhAzndC7UE9iHTPW8qpx7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49ksyqSomzSTqTx92EwQN9WfgnStJ2NAJS5RnfmuA1qAABq6vQXpVxKPX6wdUGgA4hLQFvXs6HN7QBi745hyqNH6",
  "key1": "4y73CnXK8PUk8gt4hN1YVgX2CAWvGaBxxyzzQcd854wrEZktsGx1AKKRuPiPzZzLrDHZzLbxHYV3BcktVm585pfV",
  "key2": "PvSb5MRLgMxHbNhm4UeXqBnpPVWUjhf7uAhQejgZ2a4SXLdMTBkZZS8rsJJzcSPy6mPcYhU8pMR5jXVSCS73RmX",
  "key3": "n5tP94LavP7x8L4w1sv6je6RrjPkUhseS7hARkQpSBL9HHfVEBxVeEmjE5QuiQG72jfy2AnXMVPyDZrxBNw8RDw",
  "key4": "3CxuMKuJbz3xzqJYioyh2V54Mn7FagRpcqnmGSFtuVAtTJEh9BDCsZmW17dZhiHpGtziJhf5H2bxK71LXdrki9vw",
  "key5": "5eYrrwrVFToVZ2d5XC1CRYzA1EQ8V8M4sUzurGcqkmV3evMH98UyF3otkkY2mZ5DNvs5xKGMp5aQFwaPu5PMLnmR",
  "key6": "4JQKqbVXUmj6Y84ZVisbTz3vUXbP16tbiKeHs3xK7f4Bq3n2efVkebJcWUDaXW552TyhXL6MRuQ8ACwkr87F5eFN",
  "key7": "46b64kDf6HMpDQ4EoZLV55Y6guHr9Pqu1sT2vKtvw7yhMJ8nbhXgSheidiZzBj6vha6Voa3aUVGehpH7NmwTLwPR",
  "key8": "9F4JskqzbAQvs5QUVCdHHxMxkdspZG6RTc1ErUyisRUHGbGPTqrybsLhJvxDrNE6vQ5pun14SHhvh66HxaMf8UX",
  "key9": "Eg6H59yinV7AVuhyUAEo6AxqALMf1PiBSwex5gVUzUuJwoyXzj93m8J9Xce3wnafry681TDFGYth6SY7csfBZZ6",
  "key10": "sznMgjAngqgM2au7gaJEvDwgqGu8E3gYwrjLhpMCvcWogd8USVACQgbdFaJ2oQs7CfC9fEN4n8abxcgz458YJhc",
  "key11": "4Tija7SirPoPzdbvzDzVvoFKWdEAoKpsnRfPfjVDZNrHheb8Kh5pi3WykVR6QPzvSJSXU9TAbENoz7ze4YuZxYXZ",
  "key12": "3HvmQPyBL58rYik8ZCnNdd7vJfAa8wHFg8TLnwjobzDAybPy56oUL2wQQoz1MNtKkbsLio9g7TBH896W1rrCMQvE",
  "key13": "58xkzifGeN3L3hQBjc48uZZxXZGWFXjRWPzLdfE37LJihVB3UMysqPhAu5iXn1rT9FZccTWM2WdL5jfohYKF8ayd",
  "key14": "4o3YgpQHVQnN3833i3muhf2ZK2GX2f3eVGTgkcD2pG8P5y1XgHiWD95Znz2wb2k6mZJ5j6ex77248L1AGPnhvWLR",
  "key15": "K1R9c6r1PjJtHQ7Sj4QzJkaxy1hCwBvXppBrUjWPMTULgKy71U1rBkK2nvmLtodwHnJ5a9A5nvxxdfsUVPqhMpc",
  "key16": "3ic39a6yWEJ7yykENAEkirTfchjVYetTTyeMT1GX4MJj587MzTwL5a3rdQYvsCpdFd9ccHHkSDcUKK6aNTxVTLEj",
  "key17": "2ymkWtUxKyPbMe1wunWVdGW7x5a5b4CcS13GFrcV5yUcrDBKq2uBKtYrFxYnYDo199m9769niYw88NQ8AAoazYpe",
  "key18": "395NiiMiGfjDAgfsmc1iHsjK7c5edmfjA6Z9ZJHa8D2po1Yd7XPZ3L4Uqerp6HziVrhbGQavShbXK6oeGA2CFnG7",
  "key19": "x3eCz63otUTwjf81bhdscs5VcQmx7ASXiA2AFhjnKA8pAxKHWiaW9zgKqqQNPQ6oAjLEK9KB2vA9hd8n9q9LVSz",
  "key20": "5xtJfebRe1hRsEUjpZ3zjfS542N9qaAdURt3HrHozPC371Rd4qqhqEzkTDdKhndVjdBTjbhQ2w6zu6J5yxe1ukgJ",
  "key21": "33yufrTx82WxJK1suZYS9fwtvoz2eG6iDqe9MNRkPPeCSBd7aA9fJoh31B8xg1VY2sx91QLN5VWVDy1dU8Zy99HS",
  "key22": "3SYzj9n7zpdhVZH4cTLDdjkKL4oxd9YiCFfRqinDtJimwGD7CDdWFLh74U4DiqJtVWhkam6p4Yoddm4xzoYAsbpt",
  "key23": "64EnmgrzQfm4W7uYP4367bzpUvNoCzjtE66JnHBuqkZLHQwsghpD9DEX5F9LkdUvsCfygu6tS4bYysM2efPgPJiN",
  "key24": "3xtdszpMiVcudUTQoY9AJkKkXut3qP5o6zPVKyv1Z3SkbZ1yReiEnc363nSEWUAnriF8wPsMruF6EXuRdCkABJWo",
  "key25": "dm5pWvNXyG4CTkHxeAQoYoah9B7qNYP3zY3fcXn3qPvKpVeEKHaZA9EjFrZe2FXBAAD2ZzD6AZ9zTi7FSUtu1dc",
  "key26": "5gWQcufvu6XoSzUFVrfXBdajx1EkhwpKbxRZxifDdrmn8CAumpNLVThmM5phHgtUBqqWP5GZWHcuWHdDor1eJepF",
  "key27": "2eYbBp4XnmViaZ77nGVa8A2KqNBAoDhRfSbV9UavqbvMx1hMUH6PLjCfeBfVhqzXaaYLJsN3PeuLEMY4fDoua5T7",
  "key28": "4ceczk1bKN97BjoUewxGqgczbvDxZiBNLNgyJ5WpPQgPWZez8EM17yKXSGJNAS86aim62fVYAUyciUvWurHnuRUV",
  "key29": "4cakCNLPmNWUgJS5u4tqgtSe6TCipQWfSHDeLdAmfycUPNzA1noZ5eq7q4iHPsgXgy5vubFG6RnVrzuA78vqYmtG",
  "key30": "32mcMipSQe5uP239WWnTgAEHNq1XWatUMsr48mDniNpwfTifrtmhS5vG9rX3Y1H4Tw1ren8hcu4A9SKHfFA42RrK",
  "key31": "3Gb2htAiNGYkWp4bAmdLaRTha2EM95Krmz5ptUAzwifmdc6WaJJAUD9dZJQWxYqyNJo7w44wmYHKtk3YMsCTtoq1",
  "key32": "36Vxe74UeY8Au3K7uoHtGt7butGiQSgGKW79CAhphKwHTL3YtuQ4NFnXmGrWVvq74LbkV3ik6CBWG4ExfHa5fQQo",
  "key33": "46zbG8hXrYjfSx9aMX3ozVbkEvab5MzsNqTjjN7W9zSrUNfWGfvnzeQ56EbtHayg3TFs98f7uHEaPQ24EeVYi6eS",
  "key34": "3GcyzXxrR3Npqw5hL4KqiMjUfMQtnyoSETtTxNda9pY99Pyvq61nCqC1WZ8QXskE43jttLaZxYVaEj22TDL7BjkJ",
  "key35": "355SaS42eug5crGmEqCk8xBskbN7Jipbpd6MkJeTkUtKfzKhyg1LKSK73FwUD2qyV1ymeJzkJR2NPzHFcwAM8ALa",
  "key36": "4q43MjT4MLfgZJMUTDrxBAT5LuTaVksdpah6fjxwpdjfA1wZTGJuqC6okNe1fHpLQ1KFsxWXPW5VTayDswvMMCB1",
  "key37": "3pUGT1YQmg8E2axiAwfPRPFiqJrbYWp2QLuyha9CRWcky9sVqhXCKdX23xef1ktsgdXVUo86ypFy1PyWkFWqKBZd",
  "key38": "5w77pj5NKmZPHikEvw1D3V8mBfxAwKuhC2Ai7zv7AWWQkd2NYm2fMidb5wY5ycBBvbs34hACZvq6mPybJhtEKHQn",
  "key39": "5t2aRTaTJLHs6DsDk4LCsCFdAX3PYRwy6wCUEqKvkxHJPxt6kofJFvZxiqUrPoJNh7euSUTp463VGgkrVYnR6TKA",
  "key40": "fzcvj7mwTR2g1JB7cCdTqxCYBZV18TwQqceo4vVNJtC6b8TJ1NphtxPsZuPjSk5qcpJMgRTXVVLX32SQgyi7a8W",
  "key41": "3CwKHPc4jQLoP3TFmueVo3Fi8NrjbCf77SzKexxZELn7YcmgdCMksbx7aV5XjfC2mQuhpudoPqovkJ14fNV5rvvF",
  "key42": "5aPNzMWrgjERdTdEyo869XgBoUyNnskXNfx8KkS7FP6kv1J5SDQB47xd9HTTrovqEw6E6tg9cxCvGHXvxykKvpvE"
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
