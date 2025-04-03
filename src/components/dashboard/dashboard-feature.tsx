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
    "HbipdTagKwmseh9BYNkTeU9mqomWYRDhmEDJg3yuHGo5fAbBty5LpAhGBG4HvYT918i81LBbxUgsd2gzUiCaxC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3C9jSyjakdKBh4HTveTFNP3QAcJbbpVuq8tun6DoV8o13TtSLy7xTSTVXW7f6JkyQdqaWmgrzqzQdLVZgbiRdwJ6",
  "key1": "5Ns12AQ7hNv2DossYQtSiEubhM82pgZfuu7EG2XQRvahFahjiqCFED9WDdnQVYrSmphzJTYa5BXre56jF1gVGZRP",
  "key2": "4r2tzd7429UVUKvJRP6VeNiR2RJqDMGpj9xg8v78vhL4Kp8mEP1aGvrp2Zz9GuBNwZvggGrcH16wQrE7TzUpNsNr",
  "key3": "5PzmjVHPVZ9VKJDzvVqhCh18evLRHobWtoDCNxR4LMFB68F68oyh9Zksva8QjSxpgUvo5dwfogQGAmSv4RKJQ3Cq",
  "key4": "54iie3FPn9JrJxScyyGvF76FksvpKbQ6hjmrJ7NmnSfZVo9hH63HLu3yfcAoRVjV41fuK8Gy5EbmUYYxsKx8QSik",
  "key5": "5S3oHvaNKgjYvCc8NQ2NusRPKTGWebed9xfmf3fyRxRVXP2xoHpZitAxmuqAPmYzCcXGF6xC2FWnAYfHGTkLNsLL",
  "key6": "pjNTLi2qfxF97Kcv7EFJLKjyUdYehFh1ir5MTSur6fNznMLQf52ieC1XJkQ65hfNTQeukcqFdJ8Yb17bp7uxeiz",
  "key7": "5V66GP6TVM3s43cm54XsDURkMYJLKU766uooQycgpRi3hJhgyhkNnSC1kcNscjLHkNxqJKLY9VNLeebVPE2buFWi",
  "key8": "4A2CJBSbfhHvXM5Ln53JjhiW68qtTSdZHQWWAoydtugdMzZsnNVw49DKcSY7jsxCiuYvtHF8futfh9meYsDpHrwb",
  "key9": "22fk5EjoDitAAFqRTSed3JsAN1ynLRAmZ94rbEnKMVkPkucJqnrx7pjsBYFPxW5yGg1t5WEgurdAoHjPB6BxWubH",
  "key10": "46pJh7fbEP32B4NMKcPmwKA9UkFrzUqDoqJAeRCcYbWKUqMsQg5vqJ2dig6Se9QGHjzjmjDRV3MP1zMhpTS2nPNB",
  "key11": "reTWyc8zQXwBJbLVs3QLorYAz3cUDpU4p3s3FbrftxhbZ43sa9JXS6C3wQcsfJtfNkyA1dGtybiMCouJoER8EPv",
  "key12": "5c4rm3Lf4kTYuFmgRK4bMbyy7SvWEmjkcTeCKaGaPzr5if5G69yn6cTpmoiMAfrTRrWkFVaTC3qfDEVVVRitTTLK",
  "key13": "2RCe2tD4XNku3TCQAhN9kZMiS6AVGozFYmdzVoGnpbgY1j7S2uH4oFRY3EVDrrYxJS2WyC8X6Qga7VbD2kqzRgEv",
  "key14": "3Vurnq7P163Hkzg71jv2X1wVB5jCJCgYEw3X7TezY3mVao7ehCFjkEuETuYSEn3s7cz5cU3SmU2xWSZvxa4Y2Yo5",
  "key15": "3RJN5ckcQQyUtFpRJyDQCyFNEVp8ddmgaAM7rT67aQTboViBniyRNuSygKnCABA3EZB4K1ndjTFdyL2jGCHio4Az",
  "key16": "3QSoWrMtHuPeUUQh5h5xTeogUBBh7n8aXiQn89k7ES6HFzSF9JMPVAQZ67tCkEuWZB2BGmuef1F4Eu7F7XHK2Mfw",
  "key17": "5jusb6F3JvEei99YG16dLHMPrciW5q4Jz3aZz7mx5ewmFZhGrzcxju56UiWeZzqCSNXREVWBZ96QsLhwpe45n2c3",
  "key18": "22gk5tJhEt7RdwYctgMAHiw1XYYm3cB8Fbr8uP11H5Es44SXnXBNhsfhgJ87oh8tF4hdSQsmW71Wnn4tqPFU3oLk",
  "key19": "5QSrEQ4guNZedKg3KV2JXMBUHAzwyys1LGxBBzL9ZEpzXX1x5Te6c1ktfB8zaY7Th2F2c2tb5j399TBgpghTRTD5",
  "key20": "naAZZdyYzwAjCujazoYCrhss1DVuPnipJFmBhch7GbR7mTv3xNJLGufTCU2X1q9Hom53zBKY1ZsZqZ9aqNZkWmM",
  "key21": "45LChJTgCP9tn8oGj353gjt6mgyTT5DjuApAR49qVQu5zTrVCg5wsXr9SWQRMkTurhHBstQBsSYisRhhtN4uSU9n",
  "key22": "58uevy2LDG7peKunEc6XiagYF6d81zVobJss3zoG8rzCs5UH1xrqtLNnw9EhvfC6Fu7ZCNaKXpcKDXS1JwombjpQ",
  "key23": "5XwcZdEPvijAkDhN26uSWBkUH5pKMiRanLCJ1RYreNbhZidfDfRUEdWB37h9JnG5zzduVHJ8btvA9LiEjr6f1dxa",
  "key24": "5qHyoeHMHLuQbuszZuEPcgEHKHSqjDhCUQVxqabogpxwk49yrGHngkWfTfxRSNwAimzz5kDH6QGQ6FJUa1hHSmL",
  "key25": "4MFi3TdjB6MGwBkoZELyZREZrzLVxNw6g6nAM1KWKKVZyVVnimRidfQwVvVQpidwxGFKkGRySK7xVd9dthHqfwXL",
  "key26": "hp4saQ1Aucmo7XEqQxmQjDEhP1fBfgpvFzGfZdf3uP6XTJWnZxYPY76N2oYKMBVKa6HrAsjCuVw7iVdauG1vc9f",
  "key27": "7eAyoxdD6P7UG4cvCAd2cRE8rCgyPkzJ9TVeNj39zP2VHHeFacoo2UUCmfUG4zLydtaDfWm8EQa1RgoFgJu3xRy",
  "key28": "4Ea9t9oxrcV3HAE8ScZGBuZgrCxbJXqcAAuEakph8kcDzWRwZrVYo6mASyWF8jiGKMhDk848t6jedC1jnBetU7bT",
  "key29": "3nqLtkwY136KaophZS4mP6UfSrgu66dnBAbi6daSY9yH7BhzSYQsEUAuCEVA4qyVCvx7VdhQyeF9Kcjuec7U3rMD",
  "key30": "jQLaXnGEeXGF85sCQhBKG3KL6E7rP3BvXVwNvEZ6t2Kx9n5D1nrAjsYWmNRQhi1eLN4gz4B3fT9FMkfVCwNnmxk",
  "key31": "24ak7JAPEXL1A3rLwMdeegnAjoxwc3pvvDcc4RHxeSnHfEFVGK99Ta4maCFoidjXHE2aKqMHGeyrkz2EGRY81HKy",
  "key32": "44PuSwTpNiUgsiajdcsX5NeaXwkjKCjvfFHZ6Wwb8w8LDVWaCJ4CkwgduQh5V1WYdmTFZof4G3otyDXcFcgurCHi",
  "key33": "Vy5ssB6dgKgUErkEBTdZ1nXAmLxzYT3nGDhAyrpYKLG6tow7aK85T46chBsrde3ieN7bvF8LkwrgC7fL3JM2u76",
  "key34": "3vUPTvZ9CeEdk3EoqYPQKT36ux1NvbSTFJ6cJrKsGoNtLBaE3pk6ibXN6XNqKt4roQqikuYAtoxKjTKxRHfYW1gf",
  "key35": "62rq1voug9PXF4zoRBJuSunsX7guJSqfAZhsBmJhQuyidTCPmu4TEWjkJ1NULsCUdVX3KfEqxfiwgEdkGedZxeJ5",
  "key36": "3jCqKsNQjJhMcAQQLPCYupqE1Z1K9o7axN3LuQmvuX9rgAq5C2hQhCfPoRjPpKHY3M9mdW4RiUf37AhkBDRjfKTu",
  "key37": "65BEMsZY11EoKRJTNYLnDpUPdo1hLQqZsQGj4ng9wnfXyQ9BR9ptLZeRGJ1ocTwZTvZFCQ3RaH3XVdw1QiJUNZZF"
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
