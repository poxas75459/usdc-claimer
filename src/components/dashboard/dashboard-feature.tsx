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
    "2dnCvXrG6CqHz6d5pkAAHrEed8hzB8KMcXzES1Sg5XfG4iFjV4rq7o3y2wG4heyM6heG6zRpcn1yR1RG7eSD7RTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61ZTUSaeyZbkp41PEjHpJiqjYnY8yDM7zaonzWK6A56Kf1usG4APgKLHL3Uv5iEtLf3HgEntRRaXczBw5VrMFDa9",
  "key1": "57hZLiTuYjUqUF8iiRCNdU46MqPpFxSeYupMEkobnTrf926NMa2Fj6GFY6aD2jYJjBtrthxMKTk16TfJocNMqV2j",
  "key2": "ZPENhWhCLxbUNCLPUxcUgBPYUUmJ23PUjXjq8sTiK46i2wk1E5u7cXSKjgZn8amQnq9LAR5e5ZMHEh27K6vtgAo",
  "key3": "4ZMYjFaiz9t3gbxh9gcmR8KnTmPMH4yvV68Y8z1WGUbgqmnpUTQYkjYLqXtSGPrt5udQsHc26sHmQyeNrJ8g5NwS",
  "key4": "62BDDYijYnrYqQQbPjsovqEjQjG62CoSpJfDWerykfw4P42aYwP1LTWaKqNiFPrAV54r1V5rbnSs8nyXkAWjF41e",
  "key5": "3hSE7HCkxEhnyku95Hcug6AVUS82ogpBeFD853nbw4jRVdmY3vup9w7kKGoRgkBTsMKkPhfm3fj7xH2enZKMZmj1",
  "key6": "2Na56563UsZ31EnrZpe4E1dtofeJmZuABcurtMNz5XMbjVUmPx9zov8nUwsv8Aq6phDGZ5VbgAdrW7gaCJicxU3b",
  "key7": "2jk9Ezpw3igr48wRmUAdBa1fYoQRAmdSzf9eSmcEWCyxKYDokSnefyT53VkzcZdLTYWDCjUrrVFtCKrGGhPUEGe6",
  "key8": "48LqHreKigTTDb7XvKZ2SnijXqDMkDAWSFC1QALDBZb4DjMDDecMNGe44Az2Uu4D3K6URcTBKLFPVFv4etoSS6VB",
  "key9": "34hP2F1Lhd7nLpWmgizNZi5bnYdUp5yH7sCfwDzC7D5e64sduYSnwndAJfo2Kyez3h3yGP8gp3KRCQdhNqy9fdkB",
  "key10": "3t8B4TwM8L5EGkEa9Bu81YMgYkVnhNLgBzUn5YAA67vrHCJ3tUg2hbDxXGQmeyJR7s9djjUpsvQNmYuD1Z4MZcxg",
  "key11": "4ytqi83R8HA6rmEaYSYf4wHhV4vVfhUftZHnHmMvmher3oPkUEjd5U6jcdSCh6HvN8G3kSdJaB9vBNH2PFePmgVS",
  "key12": "5igvLAS68Y66jmwfnri8eheqh3Tda8PStzi4udoJXqh5T4ySdKvE7KBLZYqRGb9eR3fH8gBY2kSmtccJYjxkt5ci",
  "key13": "5w1ZVyxiKzQvinw8mRSFrTm9KWQTAPJw21bb4hqF1x45wnVrh3dLsbTr9kXJMrGav1Yb6jJGva21aDSWk7q1LZfs",
  "key14": "iEh2c5wKnyL8XTdhYLW5YR8QnDDEGWJtkCdJnnwXuFeeyZqcsEjZA7yfVRkz3HQh8AomPjWrYfSkiYGnbwbt3j4",
  "key15": "2uAMgCYTtTimhwQ2QPQb3rvCCNaMQ51PgsoFgsAeiW3Uf8543PFcERzEMMFE7Sv3SjRU2FUP4ivr7jLeiqGjTm1f",
  "key16": "2NkQSN7tZ1REiCHTC4qGC4apLWRtCF14WX4db1quozpUa3iKDuC2bxKo2yKjpgCW31M67RhrWRv2efWXbL8k1CSt",
  "key17": "5ccx394wNcwi8DXEVZEk1mfSytbGX7B9HSkbRBziVo12LPzNmwSMpPQ4M5vg49cEeQrYxb3FrGMWjgrPRRznuKFm",
  "key18": "59bYRhThJf1j1iq7cCj9X1sCYSVBz4wq5ESs3f4FUozQR6icHU4BZ4RkzjsvKwFXYtCHugDgkvDtGXsjHPjYJr1C",
  "key19": "5CUA1a7r9vG3t7vnRMDum1tgxv8Df1Vrs5gUyw7mQvvB3L2TRGZ8v8ryfGeS8YFCBv98sWhVh4rvQydPf5cg38BM",
  "key20": "5rTwvpei8fmk4UhmARm42dAUX7YtoKHg9i4v7LBC71xxf3TpoEn2M6nmR3FhRSsEfGLLmDZ2EqbSvw1pugV3YDro",
  "key21": "5hXFq2zvM7CgTsUwqpnu66EVTo7ZCm1phxvBpAtFbP84Q19A7CXm8XZ1EWfsKVh333dLggZUQDZMLisENf7WhuaV",
  "key22": "62DHoeXXV8LT73SdWuNeACFXKheABNADNQwQ43QyFetbBsPQGyKzY1eWoJ6bcxRBqbnGc5teoenpKumBga7rUnWS",
  "key23": "4bomQNXWvov921Y3mkitwf1d55jWuRzY9rQzE7jKwHkS1dJwfYaHooTDPxH9BogUufppeqhJqwJ1EUXsSvdfsyiS",
  "key24": "5akVNRF7GiL7pijxYfxYfuH8yWghExdMebfcWeLP6TkXgFJmP9jkHZYN4atcyEFgp6rv2nZh79undmUHRK7H9Twi",
  "key25": "37HuydXApgKNtEJC9EECMGVvXwDfxeobQHwHfCsh1245kF9gJdqsNcGs2h2UZapERn5UzcvMLSBFc2QLkMPZ31sb",
  "key26": "5a5ottJDxTciokoASTkh4qJAu3ggoXm6mKwL2oME4P1UL64ATUHytcdYiF2GZaL16FdkUL6sshNHzWRrwJLZ4h3y",
  "key27": "3UkR8nje4prTr26RPMgmsez8ESJvzwvMA1FH3mbFd3wqNefTRZNy7g5K7mc4FyRGXY5jK3nfiFd9gxyL3jo6K2SY",
  "key28": "5xkTC3Gsz53pgNND85AzY1gwKZgqfPzDyb6TfZQTTJqgiMV6odQXyMf9kRYeVbaFdAkgejsV6Nqq3hpNhyFMQxkq",
  "key29": "2zgasCShfd9hpzPYNjmPQP7xodMe1WGaSoCjC7WXN7bfbUBGfg84EafSZSFptswgYfcBo84HHo3nfYUwrguyN23U",
  "key30": "3V1FWnai8Ytc1hwvzDgt9E13KRKsgrLeYjmNy77X65UoPmqMy9eEzP4nMFNSHhrKwdwSzLdmkTxiidAAwgbNjEg9",
  "key31": "4g8vVbECM9XYjM79xVRGedz4gdaQfhyk2fhgJuvwu2XjBv3XwzwFP1NKqUBeuLsmXghUezQRSeKxKABFsL5mWxtB",
  "key32": "3M1cZxdCL1YUk5QwJeeXRjSKTKP8ZZEaDM5T2NmEmGbohChjmFPGMe2fUQ61eMWo8UqWTQ1qJXcT8HZRcd697bDo",
  "key33": "3hRNkkXhC4Wcsr3b7rvuR8ZGLEnrkV9fMDne3SoWTg5TBxMG8S4NhgTNWx67wkjPjAjA58kYrsBKnvD3tkcG8t7u",
  "key34": "3ZnwyjeVKrZFLhmM26gdqMqYeogXTs7zwbSisSJQ1EBe5dnXUCaxdGXB41B3LahgvxTq8hzS1v6uGMWRUBgCP8yt"
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
