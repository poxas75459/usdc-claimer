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
    "4WLWvfjyGDzXyvrCqqjE9WNG8r1fSTqaS2KNiJ7Myfr9h5tgrKDW1tKCRvdMLfNm84XbBmBGCXXEAh8BaYWmG2Ek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CKimvGmkxrzsF8qMS2Aitk9TAVm6QBQySPzd48PWYjMuD9dwWKBJEsebR27rXUMKgarn6y2HqmaZznUResTHVdi",
  "key1": "5ACddm5zVp4ftYbJqQXjF3xdGHkYnPUVQYgWTDeAEQdabwxvXHRuppqicPxt6zjksi1M1G6xiVPpXZAEKUFDwUCr",
  "key2": "V7TmsPsqRzRxofhS5vDt9APYuY6uCaCBQNZahu7NjTKnfZHf5C3PkixU8viSsz3dJNzTncQuifnC8jmz9sc6zVM",
  "key3": "4rKi1XGitH5iBwDm6wGxD49yxrfZsVX157TaYt8eECqXjmEDzuzFKNekdErorsNNcJLBw7e4UZNbnBVLyTrtGukb",
  "key4": "DoyJrcQcvGzRUzsE7bp8KinXtTqaJN6JcvTJDGe4K6UEcwLNwjwWPbBM54RjZo1Mwsb9mKPGkhPB1BwR9GykubR",
  "key5": "zCeE6mLDk2hh6bfjr3uvuJN5fg5pX3rQE9SX28vcfbgBCYNwCah9DYp2x7GrrEATtSK1LEAiJrgZZZnUPetiNcm",
  "key6": "364XrsCZwJKVUw5UdM2Fuu9W9ShMiFnF4zrn1qGijvYHtENWgaMS27MtH5xsD8BVsUSvnZcT4rKGMPzRD6QrPtip",
  "key7": "53MTJ1tyi7Y8F5CQmeHwSjqBgc8gY4QjrESyqYiqo4HHgtyXgffbgXstPQ2r294pKnAMJTGkLLQcaxkBurhF8uDf",
  "key8": "2tP7ANWY7KKdv5BYukzTtxmCfBgrdcUCjwpgrakepYzucKiCJdyXK1uVaCS8KkzsfFWptpuTFA2DXRZKwE6smxX6",
  "key9": "3AjYwRqJLpEdcdbt8DZ7cjygTCF4WnDBiPt2K37MHupnzmfAcxAsMeY5ZxpJcBrTP1VoRQdhuKwAbZYGNzgVHfXh",
  "key10": "2KpZsCcpTvEx1LqCnu6YmrmpLAWKEs5kLMXLBQvqSdLSpKJoHtbnENyE59FMegMqgNh9p4cP61fz2LruJFVMmVCw",
  "key11": "4sqg5Rpwc9wm2orzgHES4UCPgU1UH1dHZ8Ytt49efsX4PYriNAGrnBcQP3X9iopkRn6CUTTF4gvwRxw4psRVRhuk",
  "key12": "5CBYCGTEXbFZtwJyCvMpjdbJXcrjfL67LLSMUEM3s89cPwNHkV9ugqkR1gS7uMFccXDm36BN3i4CxbjtqmDQ2opC",
  "key13": "64jkPo5GKQ9defP91fw8yHDT5gRAJ87SnfGGL3CwZiyMcQDnwGXkr9nuxHhBkDywtev7ba5eL8AN8v53zvhQiMBU",
  "key14": "vvhmmfFDqQvHPqz5ToHrzPoRZoP1NDgGgHRPbrmRxAdrZk8RU2LSEXZQvs9CEBJzH9BXiEj8oQFCT63uT9Bm1B5",
  "key15": "vGq5nMb6PpDaR3PYZg5sVF51HEYcryEVoQTSSKyezFuNvKt9pWtsZdqJwmWhQVCqcKBGt9qfWs4oupr9z1vEqZH",
  "key16": "3n4hz6cxAgmhjRppZMiq5TysLDQ5X8tLDc99FeCfbDm6ALocTH52f4SNs5d9obBqJ2yoALeQyLw7iFvyYKxYKSg3",
  "key17": "4fa22HWbKn8EuaqDC8QWb23qRanAXkQEfNb9rnkNtKkCAay87YTYk7DzCkoAd2MXyYNpSsiezMrCaGdXq3bEoHXx",
  "key18": "UpCHtEm8YdN1VrU6nmc87x27juJxhNufPgSRJT5hnYsZo3Rs6GNcoLmP2fYE7ScBHUvrs6PNA9nYCpKnZAUyuS3",
  "key19": "9nP4Jeh7H3oE7xinUKvdsUAiLp5LjzSVCeBW6Cdag6ZhkX9Y2CE38wwPW4W2mvEgt8MnHUU5BsCjSVnLi42gyB5",
  "key20": "4g37TGZfnAwU99hMxN4RxLtK6TQvktZD5gWdiHujZbsJsr8QUvfouxTBvkESMT8zdqWGELYBkgNXnoohXaeb5cQZ",
  "key21": "xChXArP87U74jRWSDYLdENxg8A9s7KHpBC3KhWGXUEbd5vrg4v7FiJec3iihB9w75cY37VUUkkAXeqqEmoihrvs",
  "key22": "2RbdTgdL11ogNJ1SQBL6GwYLwTTziTsZSvJ9qA9HxEjqcKYsYvWhdPp98g6M2gworSpveGSWus9rPJTgevpNn1yr",
  "key23": "pf2AUFzN6A4gqDvCBM6vM8rweViFfDvscvm229dFfPkmLad1aCcVSUyhUJGRY6G9wbcb1CNFDQKG6TTvoqHPDzc",
  "key24": "D8b1WFeqZaXVFQgPRxQK4LpEJpUC8Mw7L29RheYotXy6dz5J75Jg7UnGoJEEUAJQWRtaVFQ6Tg5QeW72Jxa7s6i",
  "key25": "2viiKALrW5vUYBmhjqT6gZUF2krq7WcW9XSgLsQBUChoyMbKZKu5dHudD2UHUwvG5ChveURkKJWkrmJMKNp2Gata",
  "key26": "jHgjWrkwXYsCjT9a6KCG56Ex4NE8CxxnUgh85MFjtbVLGViiXhBS3NUKVawsRtwqTiQkUEqLnvEjcTZBrFzYSaJ"
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
