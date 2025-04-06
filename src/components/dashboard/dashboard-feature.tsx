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
    "5zUhGqXeRmx71apbRUj7R9bC6cBzxf6u8dqXLh2cUyDmAaF745mj3VtqTQt3ZGxpPyXjz4Rveun2pwNsDChZx3e6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ee77YWJuzJJNmX2urCXYbUp2vRcTMLtzLFCu8xjxwVBZtnVVQ5HhuD1sqVwQJcBiZRGtKwyLGfNLLJViXiz8Ne3",
  "key1": "5mNaijZvNoHnd1teWKuMUF6aoTXa9EWfrDMFAEHkAJFiSKSjzC1PzZ7mAZ3v2rP3XrLBbdqyp2xGQyQSpQbzi8q8",
  "key2": "2kTqU1A4moKf7KNRYECjBa8ZMq4LvtgKvJXRk6SQoTCtiw87piUQXz1dTNjbg3TpXK4tiDkmZGxrpRjJM3G7Kstc",
  "key3": "5qw4aRRVE7Ayrnqa8AFgU4fALp4mbXkQAi2zw6LeS2aHdyjBP3HLBcMcyrCY2YkyT3h4jSUEmNbvopNEMSod9LQ3",
  "key4": "ZJkZ1rqonqriqwuesbboecnqSxH7qUC5J68Vz1xquiexTUes78e34oV9scyqezHa4T5CdBRNu5My6MJNnWq5mtH",
  "key5": "Y8wPAuSXTPzkWzk64TzNyBd7CXXezjPqaot74y3qxzpNE2YxzDFQb6NZgr6f13qG4Aqmam6EW2TBbTyibER5zsv",
  "key6": "3g1uGFtBwD7fzpt9Uwam4aupMnUuRkkj1RThv83WBiuV5wgZkST1zTF6hUcseJVLJkGWLNnFmjUeAw366KRiEkZj",
  "key7": "2aCErNfgMqyibXtvZCUSFfzhTevUyveZMt4zSpf7yz1PdZ8xdoDnWz3ra5ZX4E2Z3Jndc8CKAiRYXV1wwQdRuvrb",
  "key8": "3UaT4BQYksUNEwy3wjTRAVp7U424fJAV2h7YxytbhHFLuqdTAY4QM7qWdGirCWm4JC4cNNSnPQde6BjPuBemxWQr",
  "key9": "4Ga9ZqeRvfGYJxATbZC3pKHJW2GZEabhWeehxUBJs58TumCwzd6BGVAu7Kep2FwU2HH63J2zhkuoz5W3JZfczvHq",
  "key10": "3L6Q2zc7qsZAKmMK2TfZxhUhD6Yq9GXoAYmVJkXUTRw6ckSsR4rbvxWzXzE3LgmHRguG7GcdWoBhCtWNnyWZrJZq",
  "key11": "4PM4NeL9A19WgKEBz6JPvDTB1K4f9oojCGBLYSH3YDxMDX4eHAnbkJ2sMoE3o4UQLFD7oWdtxomWEePcmKfTdrLD",
  "key12": "5H7emWgJchFkTToF7CukYgWuYBM7o8DafKui66dgubDC1ZASwN4wqiLCbQdagU6sSQr8X6C7rf16dEpu98Q4e8b7",
  "key13": "3VMxqGqHq9m9DmpR24H3PRVGtvNsxs7BxWiB3Age29hq2gKzd17uJjyuht5cJhheAuu1VSb7ELUeicBHkmPFQh5D",
  "key14": "2VWe5ShsR4bxUwkDVZ2N1q2JUfk3KwCYcWchxAWNqKXzZVkBi5f34FQmzS6qpQd3g7FXKNjqEKptFvkQmgRkuoKi",
  "key15": "5PCNqH1HGqci1pKko67BahckhEnKSVtvj4QNPrtZGVJh5Sttgg9UB9QdNrWUqUBXEtYzyc7XuoeyurLcT5q4B9Uf",
  "key16": "2yUjixZdsK8EEgVQDHUvCuij1eZie9ELVd7vZdYNdxkZdoiRH5M2M9jo7v4DEdHN6qqrKTeoMZdqkcxqSiYdiah5",
  "key17": "kJbDxr3sMZhqGYob26uaqLHFUzV1kPA4rEnEixfMo8wVQ6EAxKUAv3mzF1qwVNYqoeTfgNrkJD8nATxuH6UC1iv",
  "key18": "3qN8NKpKTGYPZd2mUxMZHb8vTKU4164wtVvApHh4ceHgRXtJQ98M5XuXKezJhXKHKVL5T4VRbEiC1GnHv3y1AdF7",
  "key19": "3X3v6FBwummi1TVovwLfiUFWA6qtzWZb1iv4DXW9cYGTcfGB4Z5ToxxrgqLpD76veqCtqh3c9KYDp34DwJowbTzv",
  "key20": "HD4R5dPdPzHn41rMnXE9K9ZpJwZRKPkch575zabuA3FDyEpxd11HCp7y5oHAGU8V9nnDoa2MxGfZqvegoDagjie",
  "key21": "5A9VFeLStBwKzrYPE1MXgYmrr9PkccqnDBKsnTpoT66VEKqfhSuQNzDHcWuVqZWGYuzxtTW3KqA2ERjnheJcBpdf",
  "key22": "3dUhU31cwQYAHFY6rwbiWfthrhB4VbMD1thNiZB6hBsJi5dPZBKG5VHtGLRRamqQYwnAqTiVf15EiSr8gqDrSRfJ",
  "key23": "3LP1FVzFWdA7NNtkujczj6n6db5H9FdqREbrZcPK2m2Dy8RwnsLByL9uMeg52u5Bh3NoK29R1MGfa8pWo7HxNJ43",
  "key24": "4DaeNoKgXFw2sTHbqB4WyT2qKLiDcNTf1AFveZXY6EShLRpAHeBUuFYpCWXxDmrscsuh4vkaRhsZiKjdu7CacMTk",
  "key25": "5qCnAy4141UCjiBnCNPAXf955HisRWUzm4jcNafRHFx9WnzPxBaRxPZTPjf5YiHzozbafqe14NooLzxtrCuTaX5C",
  "key26": "eKN2hwhrNNVQL3gvjc6q31ugrSJoR5XiR7nUjnpx2gbjMZ7Fh3hZyA2jJCkNZnUxRxeqxHavnUCMYy1n8udH6QQ",
  "key27": "2g6ZTGxDBHfZkfPzbmCLHjGTiThn8Bspkb1QVnCT3LbD3MyuUegNCDnEgJNzEFuYizrtDYb7GPgC7dP4VG6dL7G5",
  "key28": "3xqpksUKj5ezJZMphAdT4C7G247PiCWwsksTBKgvo73iFypYMc5VKvrJGnJoVtX7RrzREABdyaURmCPJwk8PNwd",
  "key29": "2jP7ALSpg5UtyfBG96QmSQgyv83LSV3SyU3iyvQcKEPAFdP2kPfGGumoXc2p9hLgrsRJq3qqK7M1tZcWNgoWorbK",
  "key30": "4UyAxFSbACEU9CWaYJh58RcNJR52rQBk2mapLzvYX3p1LRFGrKDdYPHRd3pi3kSLNL4ctxcnUmFfWss5Mj7SRGU7"
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
