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
    "2Q4smfQhy8nN4N7iCaiJ6fmc1rRqfNtFNAY4hjS8665nNyg9v15oatSAFKWiM8Guxi6NLtJrmba7DMWUT9GbgJ2C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iqKGhga5FFDxYhayvVjGsp34y5c3mDZQpR9zCawZBw6SbEBbp3Q4vBUS51As8EyzsyCkpZHXjzejNukmepnEca2",
  "key1": "doD4AFTVdys6EdJCUxYXxPLUmaArT45D1oWYBXu9cy4bQ9jWPeJAFC4X14J4iNvinnRqo22fz9YmMCs4GD9YbqW",
  "key2": "qaoaL1p9Ps9mtfrzM8P1BBJ3xSHJ4EuHdHmCxh8aJp3DSkXduRCSe88MCcSgCNaERqYK2kyqzieww1QU9rzXwNg",
  "key3": "3KWJfXYngJrUQZntvqbVvMaqLCduwxQH7YjgXCRJewWRidewEu24ktGhRjosQhhGVQ5w7zXAqSULw7BU6wmCEo7m",
  "key4": "5brkRRHjCeyYs8mTzzAEcqNQ3bS1mmzBu7uZNfyscamHfoGGp9n7XQkL3BrXLZiaYs351FcdCKqqpatiJUujLZu5",
  "key5": "3KJBeSkX9YYuh7P2UmjcSYpBfXVEZ1WiQaSyDLew6fi6BKHzqvLQdkAv7Bptf2HHZaWdiGfUxZoXNE9X8HymQLXu",
  "key6": "3QhA9fmAuEv6AdZoHWhCB9MqfhFSxQgyjGpRpaG5tos1idH1kuSAEhArRU8LVSB5ZXAui9AX9DjLW2y1qBMB21Xm",
  "key7": "4Pqv8B5cw4b1nb5kysPcqeSVufJcLuqZUzH3wyHTuFnYKJEpJsDocUP6PGrZKBA9D39DeChNpMd8ovZ7cjgQQnda",
  "key8": "88PDD9DBfNXEYGGwXJiF9APVUZLJBPoLyeED4pqbyjAUspEAC3h5tVYAb3H8XT5k8yyQPjMze1KVs8YayscwJ4b",
  "key9": "28hriaqZnjrU23SMsatd17ekhSVSiR7Rhefr4sGuSB399NGGeJCqpJPse32A7Por9ywmKue9RJexVm6kdHQLJi6r",
  "key10": "59GQabrZEh6av8GV9QfVoeU6zs5GJ1A9nWHXUx7447Ro4J6LZp8JhacSQ5x5j4Ur43Vft1B4WPQVHir5umTyj1bs",
  "key11": "2FFJjakH3JGfVKfKaQVZTGJsE2RKM5gYmyYCRiVs3QjSzRBEULrMx8CQHPcofBySPDZNxxxYCt5tdseKQ3YdvUB9",
  "key12": "91zPDyBRjhvxKBwPSb7y6v1DvwLJiuYEp7C2YTbipsKsGx9FSiPgfA9fcSpkVWbm34sRtw219BK91enR8sjGy6C",
  "key13": "SrRCuqqTWcPsS9pD2eoppSMMqm3g3ygGVL4ZUL4qo1Bj94WV1i3XTp6nxVeAL446FQuCrmG9QsMqSbeiTvHPvdt",
  "key14": "2SMnHVztWPGYFLJf55awH3f9p1YsgjDMi5dHevZvnJZdUpq7m3xtfZ4HaUprfoyZqsHaHLgQWWZFRXwDeHMhiLGE",
  "key15": "4DHZqNWoGjN8yDBVQ4YoztHBwRcFMpXaXjYncHc2thmesc6LwbSHX5thGgMptQ6pZMohDR7GGvvCXERWisgHS5ry",
  "key16": "4q6pjw1erZcbHd5EgxL1XqfwZKBBZa4jEXkNYHsH6SVxwSPV4kAazLpkwdgtgSEkNgfgSq25TGSFWHDV74oruAzP",
  "key17": "3wya8HXoaFwN2wsD2pWZtvJJ7y1f8KeEw3RSExxTcjFz1WyUKEw831PhjXdkLbD75R5aY9AsLETnd33pjyMcNBmS",
  "key18": "2KPrcF5aRzeHXSyPoYDjQa4st8T1AwNYAoMP5YiQGkajkdjxNWYXsuknGybMCDgAyFgi2m29mS5PJpGVaDxBKr8T",
  "key19": "oJzMnP4szSuBm8GP3NgmWqF3fJKavek8ARTKrNUdm5G9quKqRVqJ4pgQ9YRAMRRwKyd9NKredxadNdvpKkFt692",
  "key20": "4SFaU2wZXaBJQeoNcD2LeSg8FfdPHNt6Pfzr5GPpJtBHHNi1jvjFoE39Mw6WzV9XUmT96zJEUDXNVSnUEVAubmU3",
  "key21": "5gqiZDLohhogxwXoGDtKNF772ZiasGTpVQivhtyw6WTtrMP8DhGbJ5w5yLH3q4YS8QyppGeo9AW3LcBQ8RBVnQQU",
  "key22": "4684DpkDkB8U5pixW6SX8GWHnFqAuRmhnJ3n62TFaG4MtwJrdWs7esERFYN4BYB2KoCTkike5gdJqw44jkq9xM6S",
  "key23": "4HtEy9j85tpRA2a4i2EheGd46vtfuFwETMa8HvZRWxnvJEYdRs2z8u7i5Sb6XhpXrWdqjHSJgzNP59N91fE28GLW",
  "key24": "65aHc5hzEmWdoArc7sQWMtFFGUfMzThHTjmVZChD6KSH9RGjJbKh5hxmk9xUitz7H5adVq8jchuQNgbxkJrjp5uZ",
  "key25": "2hBP8MQfLA5usZZ4s2A9V79CZxXG5k4BLZFMEJZMMZT5MFLNH326sPvwWz6xCqEc1GU3mXhNfTrXGDDBZSbqzDkT",
  "key26": "5STj4qX3h9BsLYTQUjza726EjSpJ34bTJids8TSKUbGe74sKWfrbY8Zxhan76GDiH2ew1yZqb8FBTKpACV3WsCUt",
  "key27": "3VVn9qrBnKfEaxEGekUHZZmBbghTteWKEHqn4qzDREAJdiBu7jTHjQu7Bo1ymDWsuTkPVvutkfmDfeumRhLQSDhz"
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
