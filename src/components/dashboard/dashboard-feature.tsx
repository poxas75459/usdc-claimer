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
    "3c6eLoxpj9nLsuH6tca5jE2yZTS5DLpts3fucqLWh6gBEhEvZmwUadBPU75L2gLJWHD8ok65avwwCyVEGj6nWVoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dPtzeNZ3w1Nhgnasx2mc8YG6av6Lk8ukbBhYLRU72s822Z9LNGnAyy5kogtgX7FTPnytHDa1vicTg55aixgrtXw",
  "key1": "5bUUfKGoZbB7YgXfxcAhncZACDegkgwLhbfT9tZsCrwUQysRTAL1Pg6TCJUD7gKHrB8KqTjqGdrJBJPo7oQSXizK",
  "key2": "38bfN5DhMvKLu9KADhc4sSmYzsA6EMKcfjHyVVjXsRXFZcEUCZrfg9uuDWoP1in55dEWmr7tKCwvFJUr3WuFombJ",
  "key3": "226FxMrv9RD865oJnwP25uQvJJzgsHLTxYZTp89g2i934YiJLdqyjYCMoNf627czNGQyPnR28TVEfveubXNkSwLy",
  "key4": "5AhA29FqqALNrcq5vQaWmJ514bJBxEKDuy9jD3tZw8YbvUttwDybpCQNeGixdP8usxjrrTkcoMWHKAhFZHqNwmfA",
  "key5": "3CUszsMUhxhRrb1Veyq315RsGDqwW146v8QQHSwe88hTzRe7mmy5rrSBJYm2NaBjY3TfGfajU3hChRi6ZAjJeoeY",
  "key6": "22VGhPYG9fbBF5DuuFKwx3LUZnnAoKpvkcJdwemuFWfBWVQtZn4etGKnG5vL46oJSrgFwvExwsZU6Y652fH8sZ4S",
  "key7": "2k7yMxVraWnT8WKgb8taUjrBhdyYPy7sbSfkoYTMDW4yEe7ET5DVQnjHEfhTwJKvWu4zLx6DxjqSqsTqet8XpJ3H",
  "key8": "38LDebekd6pBcMYoGWmfANwBjZWbsssT27ZGp2xapcTcQGYf66S9DtussjLEXPgTWBeqPemgWWFHRrTtmzo736QA",
  "key9": "2mF7na3yfTdNNW2XgAGJBRHgR6XgSnnVKQ5e8rYKsrL4wxrVY9rMw4MtGzRDaBCYc7aVy2o6Q4BvmgtZi4EYvgxg",
  "key10": "2FxdqAG9hXbwGeEsjubE4c2aiNcQyLN3UFmUanHkSbQwzCWjDGJPDKxZsHdGbLjSNHiD4Z7ahcWNZNrynSpbvMwn",
  "key11": "2KEtmpVGyu9kBfhmfyfuAeswKmxqWQbpaZJPFsEQEdQWkoqZHn2VoU5fnHkr13RLq8RuEfsdWCcRAmPpCGUHJowa",
  "key12": "4vFic146BJevbdfbkhpddwkEomQn2k485c5UUhnM7HKSzfJLxJx9HVqUKHQsUefdeCQ5FkidBQv8vpZm8qbGWPfr",
  "key13": "49dwpQYcJXTJsPcnFCkiQ82W5s5XwcKBrPBkLpySQH9nA7tsfgtnfvJAjn35gKYutRH54SL25jDQaER7xaHtwsvQ",
  "key14": "2BqtUZhqQ6hGhirvSCaSZsDwEhXJ3YhUkuESFzwv5ExSFLVFRC54DA3CiMczoC51CP3SPKTyaa1BHEHLXE1SC2Me",
  "key15": "JgZd2DR4XbZq6fRwVBTukvG2PCi9LhxNPW17mCkSRbuCfjMC7B4X5wLjgD1NVS2o5TbodniUSmVDzkzqw3X3sKN",
  "key16": "2muMhCCGoiBWbxXBV2EXSh7AbZ8qH82s3VuTQgFFsGPjW3b9dM66WjPidCMcSn7BnFgMyCncKFgKo68PUGGkj2Jt",
  "key17": "2BC7TCMMu6msZb2MmAbWPoF3UT4X4nVkPKzQgTztCaKiKd9jNEyY4Bw8LEZGYLdKnQwB97UZrvN7ofaqmduyNNTa",
  "key18": "3dwbcyqrnJ4AqXfWiZmwSU8FuseLGd5nQ5tDnoa7UgT48E7Tj8p6r7pwuWHqnSh5K1HGffDBAjrzSzJ4RtUhN7Dz",
  "key19": "GntKbbGJapRGJNPaAbGnXQYRfrkqU6zv8gyD37ozDkqLKGnkM4M6QVsDzcj2yNQ1SHGi79mHG2hd81LdVFjX1eB",
  "key20": "5jCodTqNm7WYa1ioYguzgDngnMt9kaFXCKB9mmVHAvU8U9Rv5QCU8nvdVceU7CaV214LKZ9kSZ73TAXAZpC8YSfC",
  "key21": "5zqp7kag5ef1pxkM1EHDyrdWNfgFiYqZpokNdgiEAzPKArEFuCzTwaa4bdc5NCeASdEWMVTEz4Zh3KfQtWGa8oE8",
  "key22": "47892pmPnZNQVroBLTF61ADj5xEfmzgqt1cweQd5xdZe7aJSP1tNGyccHWLuRDVZufSH8H4MjMtmbRCTqFGdqMmS",
  "key23": "3p7yrSb8kewQ59dDbDq647BsaGJ1KfEPKdoFfRScfKPmq2H66cWyrYG2jUrEChGXuWD651WH8QrkERyAkfceTuYh",
  "key24": "48bLe9G5LVwTbZqDqKRDgX1hPjyj13qCJPX6t7QsYnYrmEr6iqmm8W3ti53xBwUQfY3yCrg7UgorkSjDjPYi35gQ",
  "key25": "67UCTCreUqEiKBufd9QcPZK7avGsCkVSao9ZNwWrhCgquVKcmcNdoiAZLpTK3nBhh9vmKz1xGb7AvyFaD9DH3RwE",
  "key26": "RX8wntX8P5U812VGof897Zb3NUEJMNtMKpRKYNesuiCnrqpsUPMqnKQT29EKYZHvC1xCdDwJT3U3Bvkm5XNBBtn",
  "key27": "64YfwQueuJgaRqGTK9LyPPoqGiMEjQEerMxomw5zD64Etyourqjv8GgYs8NYqDfh2cnG2rfrE2GwnEjyN79t1cdD",
  "key28": "4GckMoSfhar9nYVK2p22PTY4G3d6ZKa5VyaKdR1AMwWzqX3L9v47DPkAKsouHRHFk4Mp19Qc13aN6R6nMtk86EsT",
  "key29": "PTnd8AKHGdcSR7bCgcfyzw92Ma68SR4zsEWkyxcEstqyfdBXroYQJCdBrSjar88aVBTaCMTYbDJsxxVc4qKWKQu",
  "key30": "3q5W2ar14yvpNN2sdPVpKg1n66e1TnvErLjEFhSi1o9Bmp4WyBsgrwHnQro3wFRo9hzU3jpCp3sqSZmLcHqZxM7v"
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
