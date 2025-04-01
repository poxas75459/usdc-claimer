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
    "4ywaAR5JeJXET16vqnb5AaPru3S3z6o3rdZaTfHhQXjxQvjvJQf1qUwTMEYodgmVtq14ua8xQT7YwBRcWN1f8CEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34ZCP1XLE43aSvuM11hXRJK7nU1MrsZJ5k6eQhBoaPDn9y8TbE91EzokuXZ25U3aYLFVk9j7kFQwQmYwUuS8DpZi",
  "key1": "5JJALc2UDrgrrAD9gTzVeoZbRQqHrQusKywYQ8NaVMnbEbiVhxrUZn8ngFjuvr638kb5DHRALWvEXWKJvH9sQBeG",
  "key2": "4yn6RRSx1RqA2gxHXoTGhY3yYExgbLjAHdNG5KUC4jCZErXyRRWMghtHjbkijjp2Fvu5pz1hcoSSP18bEJgJ137C",
  "key3": "46KFpQ7ppHppNMLrXoDm8UvthhneFsXRyRwF6DKHGhdRFuckKFQ4weRHUAYnskS1jSRT4FFFWKu3Gsy9FVsmimnF",
  "key4": "5j7cF5G7Y2vV7CXEGWv8Vz9yzchuqKTMT1QC5qWrigEZBVX12AzfdQJNJuwU5Q6HvnoTYaVfVVWK7ZUabjkyS4F",
  "key5": "3TsuoADFtvfqwHSXxeoptMy8SofeYbmrgHMDVgSvZTvH62prZSF1qNjv1AVoiqXxVs8T3HkGHPTWpXK8dAeyqbsX",
  "key6": "5vD4aURFqRqUca8evHkyjXp9iyHpJCNCVY4xVyXUo1BV5ofxRBrfhc44tq3Lzh8Vd4Yu8hFYsMKVMFtDM9YSeYWp",
  "key7": "aXffg7K2YvmQzeEytWccEfW4qZDuWiWYm1b5i1aZ9qguASMUdmDKxzd6FUrMK6JWWDD6ePxdvCJpn2d8L9KZ7TZ",
  "key8": "3bPwyXnbakjba3GMxceLk1gquqgx99FJM7NAKGNENmhQojn3CFCS1uBwGZUVwne5kV3V4niXhpExwzbBwWLHtN7F",
  "key9": "5oKTfgvCALtSK7DbWfH8xWFjYs2okKRo8nTnkta3zevLdJLKM6uhEMUYQdzjhq7WZePQTPYc86y3exzA5uzokhnA",
  "key10": "4nACsvowQ5Jva4bDeLHmRD6H8vNepTztsQUDUmATiUC1jr1644UzDJfHxd6R8BXyqyHPQE4KHYhMkYi559PqC2gy",
  "key11": "5LRSPXtdYt6wjntTGn6K9tFVprxRZ4Ukon7MAFzyTUxMTUfV7xPFbrM3C8LvyC9KViA6KTYQWJd9YFjTMs5Gxe3q",
  "key12": "mqYvffEzuAaEnUmQoSSxu57azfGQT35jisvUSwgSXA7qmh6Eto7DYmf2jqQiu7NGQTrCNQ7dAod514LG9Mvj85C",
  "key13": "2kjTTLVofL6cc9PCqhzoCGfE3mrJhq1H33BAxkg5jm1r71y8XnfYYpb6WpXJSuusvhaSHjABJD4j3qWcavM3B7D5",
  "key14": "4TUuyLVQC1FoC8M7shtx4FMSDbB8cW3i5EvfZtdZq4p9iCSmXqysK2Xhq1MhQinrqBkzvw3bdyuY4koHzK1yDV7S",
  "key15": "k8G1NDfYFvgKwjY4Zivux6uvR9veHRSzbVgByasLBE82v62webjUCcqDkj3cCAZGZsBJQjDF584b3uvuFXfpSxX",
  "key16": "2CvcWKEitsfCcN2HoHxfPJzb3dpbrrSPzVZe2gQdnwFerjJwthv4cCrMB7zT3Qqr41yp12RavwDxMngVQSUzqQQ5",
  "key17": "26t39GoZxJE1MibVZCGUY73UW1kv8MFyJ1QxBv6Xsf4nJGVHVNkh1xY14fB2sgpCZgNRUN7eC6rHSbGzc5YS5Pae",
  "key18": "4egGGJFtB4Kw6jH64SsNEoWzg1inZzEkYCLLadtCvRMvM9xv96ZxzSz2VnodSgymHnb9K7gLptTv4WxbxGWnu5tg",
  "key19": "kWR3KsUe6hbFx5a1qwJcvYjezqq3cqcJp93ozqD5VG6qYeMD9QSPE1cN1Zo6soPUMKhErV7jSQZoF13qd5jQpYZ",
  "key20": "3ae6Xkhrw5uGue1ajqfsRV9pUopRE45ZxE9gXz2AmxN8oqo4A9RCaP3mSpzimcrZvbaKc5dmJH5iMVY96UsCwn6a",
  "key21": "5DGqk1rcRCqvKxY18WazhiM66KrxUoGcA9RFeZjXSVsdMf3XDephPQ9RwFwcem4MtqY94MBbwGqhxzKxPMje3s4D",
  "key22": "3eoYBR7XxVriQkroTpks6g6dQDxoW2EHNUbT6boPTi7uVGs7pQddUwpE8He8KuRP1kbBdAW6LxKhWd4oeieXkNTx",
  "key23": "2xbpt3deDPpt7Ls6f7jrjHqu6y1FPrjpTmUTVtRq6oPe9JqxTaJMKZA6eZiPAweGRAf4thT4d1xxy9bEqPMMm1jg",
  "key24": "58e4dz21FiPdbqdGEjDKcwBb86R259PE3iy6yptfLCSSDvp5dbdE38T1z8WSajXX5BqTPreNpBWqCLtzGEx4GtCN",
  "key25": "5i32qW2MbgPMJ5vcbKN2gTDEw3Na6QQaPC6CUtZnLuE4R4qZyeBa2Lm7kh3Hg9uRtJj1BxGTTZFwa4Xo8F2g4YbF",
  "key26": "vYxiVPNwzD6xF1dfRcpGimx5noJHPS1d6EGDA4mqGFunLQprFxRcQ2aAv3Q6eVdozwdWKXwD3hWfmJ84ft91cxR",
  "key27": "2mheDqd8ytgdunhnD1jrehyj6ssKauhAas6JjMekKZvsUD5zo9scsJPEz9RUf5DGcQNJQ8KddnQCANmitpYGgFWX",
  "key28": "5ZYtEzkbqAbSSbVsrg1RxxgJiS4m3PjB1rEqVDyBnusYt3Uiz1sATxkorQzYVqMLzoJ7o7BvBvBdzpdMMndsvoWn"
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
