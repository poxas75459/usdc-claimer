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
    "3onGghtAyZWfgRgHCaP9ufQmBARWuUFAiW8bY6uiCnvuVx5A56bpZcdj6JyRPz82suy5RRPcKoY3pUE6nToFzCV1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4v3FB5vhDVPiU9nxARsieRp9E4mH1SApPzPT5fmzZvgx9JgCDDcpy414LUHyoKUK6rvns33j3NfajxJUcbHuzFwB",
  "key1": "35ByCGn312sqiSddkpHHybF6DavRSGyfm5w2pePiP43RohHR4bCa7e7rXZnSLQadFoy6PN7UrBgmYUstRnhh2mj1",
  "key2": "2ErULTP2xPxp3wr9NPTVh2WRkTE6gjH67K16LR4YMp3EavD6xLxxTuxfvMf2hb66C6gHFoKqM7ifpxe1Rb78MSgw",
  "key3": "52C6kmxrz6sJuKJUKBkBZDUwDUi3AyjgUPZVwXUczG67yf4zVQLCqYhEVRbS4RdgCm8c37QHBzXxnkvMAaanfBoj",
  "key4": "1jG1JATvLibWLseJQMDJEhLwExq3bGx2QHvEgJNrFcccgx3K5cr3yxKVQJgbkYEo6TGFkmCP4z6jxBaK129endt",
  "key5": "33DyiTKHmhdi6faiWwP2yHj8Z2RqnNFWpih3BiuqMGjQ6ySWyeEQNACfnkMzAAqHcwCZ9aazH1o2etMPd7qhr6oa",
  "key6": "3L4F1GQiWP5LCQ91BH3wj6p1rTUsWggMZBcxwCwqHJhXpzej6zGWEu971wqgd2GqjcqnSFSKHRGqcwxp38k2LurS",
  "key7": "67C7gBQhEv9gX8DVfFgc592Zd3s7as2dc8WfmQc3Y3tCanry7ZCkqJUbXBVM3b1fqVUEdxb5fhovVUN67ieuX1Jm",
  "key8": "3o1YuWfT6Pd53bdixDuMnU7oELi3nvdSxbsGMwHEWNczoz4ejwwWL3TyJQd2cgRumm8uirGn3Cjs67Gfd28Au58n",
  "key9": "3rVUjUydoUjDTkmC6jP7EWA84YNGo9ucDUL3ngLm6sioZ2b2MJT21o2M2XJPLKVmg8NsDrXycKQtp9oSYzRmJv8y",
  "key10": "4AQFnKvth3sAnS7qmgokG8Rg8dfNBS4QNRPFhNTDoLbL5swsPGN32ci71Hy22QMHphj7rf2cqU3qUj3ANSTNTiCc",
  "key11": "3fnvYXH1KRD2Fot3H3mC5ciYNu7LNAJrEDaBCHgynQLKKakzRdfETeNEYdj9hvgMkM3Q9uyw3Vq7WcFk4BwkVzqJ",
  "key12": "3pdsvqwasNnZQVSyr3cbof5Tgmcp9VLWFvS7HM3x3rKF2yeEb9MrrMtx5ZZS8oBoU3nYqbFNCTJjfV5EVjy33Tst",
  "key13": "3kBjX1ncZ6SHFCQPqSqA1Ze7B6FtxWHG5Xb7EehzDurzqNwndfKGi6ZZJ5UWubJcKJbL1Ye7Vjg9ctiheXaAbQ9f",
  "key14": "3ggVByZxs92j1fisjjVkCUaUZVhJeT4LjaRqdLkVzssWqmzCat33RDSyNsJEqcZh3wG8Vm6Lj7eUHkKKAvCUsWm1",
  "key15": "rGYQjZcdz8Vx6P3ZkDAyVaGKziwdKMm53mRSHTbL5UHp8GrT2H5XHcwLzA6u5dnNCuhkNwmHZrxvw4wZF8qqZh2",
  "key16": "34pHxhiTztDJ7yDhdn8tRSdBaS8wKwb15GyjWaXcCHcFW3LE6Gsrs9ZFV8ase6u7R1qAC8nSpeFZs3t83LFBrRTc",
  "key17": "5gYfgy1eCVN1m8rt1tqZXTvwdvBuGuvbTG8HDKD5BbzQZSQG59gzkoDk13BpGfRkHbdVnf3vF3vyhe6kSmnmntFS",
  "key18": "24F4vKGgGxMJfQNhdW9LcMv4p3QQXofUxde9N1Ps3YKG3wC21Y7sDAmnrdHJEh1y5TGKTosiqVgJTm46NgmzHP9c",
  "key19": "3yGc8Ffa6VKxxtoLRtjQKEs3jLfnMvzMwVvv3jjxGyD6LVJ3MqK5jjanBdm4DpfRM5tS2LJtdJDAhtz2TaduYZVe",
  "key20": "4L3whBDgr7uXqCS9rAL6bFowvsLnpy5QcEnxg6grLHah3LupPatj8K6uk5jwUAhE1pbuZoBMjZ5qXxBvyFfKdksC",
  "key21": "i8ainGqtWu7GpdwdeNr9pEpzawxTGQj8WgB8ZzJHp3MiiFxwccJFjn5H1zPQ8UWu8vezdChyHvdqXieeBLyjG9U",
  "key22": "2UHeTARuBsQcNMkCpb1kw7d3YAxEczKWxgqvuCUwRNoQEz19Wh7QvGTazC8LiV33pXF7dysKopGndFEoAaRFbbn5",
  "key23": "3FA2eVQteoG9qH6CapkediuptX23WamHhh7T6Eop1fNwcZScBH6AeCAXvhgHxQS2JceAsuSXPtkYYKUhimTrQ6nu",
  "key24": "4ZfKHttXkG7Psfh4LQLrqi9h2wyW3cvCNnoRbKerP4wDdda9G4cE61JB1gqEJhAN2xisacuh5e8mMcPSpntJVLjd",
  "key25": "nFjtvnoHdNurXDA4HUMs9ecbkJ6xoYLJxC5WnThtrSr916J4yLTWHwS8gwZtrTfdikCfk88YsrU9RYR8EaHLw3f",
  "key26": "5mKVfZNfhGhDjZDwWd1jjeRTYRm2rwzDT5GrJ7CqgQpieSxnNMttD6u2tw9s5GAVjmBWZQW4ZBrovCuoHHiEhhLF",
  "key27": "611TkhkkAmERCMtPA1LSu5k74HEtxhUKsxofJ1SHUYJL5d586smnxWuoYp3ZXpgL72fQbYq3SzHat9QHkzReeWVb",
  "key28": "52WG6SzqvsQYKYVY7RzuuzFbbzpmHByXvxbpZRb1zPd8RGRWxGkyPTnC29bt18ApLLP9xehChKK4jgYyWuncdHaa",
  "key29": "2FJMqEWzwGeYLGEZu6NU2svyZmYiwtx4MY6w1ny67sbnhWdJekT8sVbK937Ne3DibAef65X3JFEUiju6nh7EuCWQ",
  "key30": "55EgE2ZxCyScQUyn1zQUiikyEvaBx3ACJEM2TndYWmfauEDwhmimGGJQ7mr5fkz3pxi7e7NbnM6tG1pEa7JKZWB7",
  "key31": "5gVhjbyavHQRkuWCQKXRQBLcQEg7xye47RTUNpsBVecSnizjdgb9KgVcxJ2rKtJrccRwBP6KSNHJZ6xYwW8CcJ7z",
  "key32": "4iAfroR5pKZ12jRbJi2Nw9b1Po71FWFgfEoLynPXCk82PsY3rmM5EBPM3t562tZww662ZMXh3rjbRxkihquns4r9",
  "key33": "51oAeGod13XnULij9CChmyGcNKy4Dx8gxy43eARrS5eJvSmpinboMwj8G28ZpXeomfi9gLaVBCbnWE57SWGGyjVz",
  "key34": "4KW3xutskrKjQdHoaD1eeL3KiE5ouHrpvpm1KEE3yt64WW2YQe8gvGcjRSWTVYVDyHdQHviH34wqMXk4QoEHLKtC",
  "key35": "2J9yeKmqoyzK8xz24hreLm2f7AEZjhEa3S4MWjHRb8w6jP8iiSFgXMChC4QskzNeLnduNNXmuNDonxqE2QMH8Frk",
  "key36": "28GiKganrUetSbJgevf8nTznSMA2ZKzJBXzGJjQgrRfk1tZvJFvm5XKcYMUfCRuc99Mvbghvz1SM4WhUj96sS6bU",
  "key37": "2EbarJuGTVCoDm1eyCHuehwspfCtKhonhxk3w1UTBBa29nBfA6Dr3Dq74UMTsj697AyPcS3SqqvhamnLn3jpxhds",
  "key38": "5haiVKUDVM9NvR9SzZLy5ruLbPhBBDEg8RWhSJKekUR13ZgkBhQdFy8tRRBAViYUxbyXKU2AAeesPNrx7yXzeraT",
  "key39": "2EVHkGYoWfZa9h9NLwN3SCpFtgQUe8fJCF9yr29XY2eWgVYBKTv7TFukz1xRduGvTws29VwSecT71Z5CPWw2bRxH"
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
