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
    "468UJ8RpttufbKf5UVKuUETtzKMat6mS9UdMyLfJVteZ3QnqXZn5hksqMqH1Ek59nRbwW5G2FkemHN9o1VNY1Xr7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bnZUKK7jiXG5xZisVoq2KN56Bqn3yfmExKnyMtZiaGjzvGFoHSGpu14LmNFtck64dFfKPsuQe72XwoXJn3SjtL7",
  "key1": "5SDEFMkkAho63Lpv2pJyLvLREkyVvV9r3nF2MYUQWn4FqdK1HkUsVQiCtth52VC25hBpxzzZtRBmp81xcCdNsx1v",
  "key2": "2ri3SmAh42SZxQ771XWJ3imH2bBnD5jMA7PD4MGubEUUApCDSDABLoBi1PHi6Ffpba5QZ8sLjL8CQ9936S5xceFb",
  "key3": "45SHf1acqdeiw6sYxXYbi5LWQd6JzNDp5AqixHd8ayv47C2R5NC5h7U3ZkBxzCWAa9TGt81Jz9njU8gkgsLEV2cF",
  "key4": "4rDUFNpWtx9qcst9N7HmszWSdThWwcDy7k4pd7favwL5d6uxtoap6eqEAq7L6uYuwb4sFKBatB1745q9FT6YNHVN",
  "key5": "spX4xKEHrUnrhnrqoG9bYsGE8CqRy9kSRkjM43EUgHq82aVPkMRpqp9aG7KUA6HfPsoojkiUXNPDuH6d2jNTXdy",
  "key6": "5H4dVBDZPAZticGd4ha7dgkMHri1XqHjfG23hymcZJVMB9JgP6Ymfm7w6L86NHhEmCnoqPxBYA6NfFEBm9NqoM9",
  "key7": "tUKSZUeVefGSnDKAKHVYY85pgVwnnCaRdBQTcKxEmD2S9DTrEEzF1sGPs7jmi4pEWY6r4wBjEWCewR7RJAaodB4",
  "key8": "5auMnmTkCwojpSUwV7kpFesXWhsDN64HAt6RJ84rc7dZRGVTnKupTxdWfjY5XPvq7oLVyqpTdPoJQECsnxvRqXKW",
  "key9": "5VYQXHPf1zWBDB1JXdFH8dj76cMWsyvShLgs8yNAK1qber8hiFULV89toEk52V4QuJx3CqsW8qSbhn7Fw5c1xCEd",
  "key10": "4PUX9neS4Q65LDgLc1emaV3SputFk8guKpvRnb4UUaQPJn8FL5AnG69touGc5kmAQm5HVqGA7ArtYJLSi2EpeVvA",
  "key11": "4oMaHJWWvQzqvpGaDJU4jJwprVKkm31Vmo6DCCbkMJicsDkfUaaQJXgQ462nLVBQAHDGWDhZMgcHpMF5J3kvCZEo",
  "key12": "3aY6kn7JLs565B6m9DVLimGLrr2N6X6P8LYk9S7CodAEGLhrX953sbJtJqRfYJc9LhSLfm4ABfqH8BpbUQK7zXE2",
  "key13": "4vkwwbCECFk8zHLQLVPvEtEmmw22u724mN1wWk5TQHRyj74VAP47SCoUtGs3CsgDarABQWYNAzGi56f2GUQXSbdW",
  "key14": "2sh3SCArntV6aJg163V8mUcv7XgW6wKFXZh2CjzUSg1bbZeYy9tEjSGGDhYgdhEysgkaUaWH739TVkoMa56ajB61",
  "key15": "3bfX2aVyhad8PBSYC7s1PVWDvnDTnN5rfR3DZKHouC8qpZKXKeesHXezWZ9Qj7JpLyfZbKAPxVxBA7AMmAD9Rf7Z",
  "key16": "3wquVgaY4WoVfLRa1b9fkMvRpWTwUoZbpHjXKQDXfhXMbLguCVPY425QojpkM8rTLoEnNhaB2aWkEBiUcTnom3vY",
  "key17": "4ugtBKAe2hxR4PN8z9gtEmrEXRcRJkD9Poh37aQNdwpq1gzAKc4WdydQULXKNUnGW8aZydFJUhsa5Aa9ixeE3TcT",
  "key18": "54Moa79wxG8qcvcLAg91GGbA9j6jbKNaLpwiVYyC3WgF9vDgkd9ttwEEAEo3UN9sXXsjE4cwNL3FFu9iszL6Qu2X",
  "key19": "tmrVFVXSH5vrmvF1ev7V64F5QiXzqLRRZud9ekZrxC6EoeMb416pbeQQfzbBDbe8nVEqjxgNDiyqRNreVZxuhTH",
  "key20": "2RCS8iiuwEKq8qyS81F6ZmBAz8wSo2QitqNBvuXg7hXqBjyeHAo9dohxSXwXbfwsp5UjWoGRVJimfcvxtohJGc44",
  "key21": "4HmZ4wXVq5EFx8oHEHQKCen1i16HbvK8Fuw8cZCZDQdt87iccFLRCJRm1pA7EMmqENcakqxGZJJfLvRPXqdx9Jve",
  "key22": "44GH3938xPx6HatNTTqWEUP3u1rdtipDEcJFHQFEkJ81wd5nfMjBwASexYB1B2epwUA5RoNMd4qeMTFH3EDaLbKk",
  "key23": "ypxoYYVpMLsBsz5G37PdQfy8iBuAAGsFLUMdZSEL693qiU4iMHnqjUp8KD4iZEmbPQU6srwE1WmnzGUNey9QxiD",
  "key24": "3cb5Cc8j7V3L7fATtHou3ngiKAiEXDb2X2ffZLgCYiANTWZccXxaWbMbWMuY1xXy8U1VmeopGVHTqUViaFBPsFtM",
  "key25": "2ED5ozsyFMATjyKwhxkni8Tri3w2MBVfaNWuyFbvAEmhyjhZtb39wTC2T4ZNBWSLhAfebZXrJ73GXG3r95rPJmUr",
  "key26": "4Zq9Mne8L3y3Y1QoaF5QAx34ScAYTGjgnXRFQknW1eEBhGi9zcreLYKWCm74sxVq5qAKVJnMrhF2M6NnDGTL7BvS",
  "key27": "22pq41QEJtpwBstAQ3d5tKRsAy4ZeKiVMHjPFfdEgvmnqY1Vew44JX48srKCEKX5TzShsVbaZcEHh9P4iYFKmRVP",
  "key28": "2Dm3n75gcHp9xAfF2m9H57Xyq8aon2STEEryJMEgsGJYHfUV1GsfkXmZzAimsYMeiWWwHiAnzg45gqaUyVaKjaKT",
  "key29": "5Evf9uA8tD8oUFwvrkW7nWNSFiCGeBGc4T3qGQ8F3QmzHmJPQhfnZXUWcbLgMxDwQH46J3XiEW9E81JxcPvgu82E",
  "key30": "QrGSgK6MtLiQdEdp6FMxqWKJzzAFpLtW39qRiQ1aKL3fokB4HAtvcj4XbAaAKCGthde7hnvgNpWcUjpWBfUTzMW",
  "key31": "3jwtKJ45U1Kux1xM5KAT1DPJPBTrc4QX2dML2MdyBP8D2V91pG6z8WiawMzzyaAKppZgbv9WCHzfevUjHuVsKzsg",
  "key32": "21S5ErCP5eiKDJEZWPa49Vufi5cZKCkXy4otLxpAKSnZVEQdQ1f76H4uXn2iCC6cWoUj19FUpGA5mBhyfStpgh7K",
  "key33": "46htQRVaE2Z3hQedmH65iBaDJRynetEA91LGR8QmD7qx89ByqFM9L1qwWBSV8TMWezkfXYauUhKupbLPjTzQ3YWJ",
  "key34": "CP5BSez3R3fcfqzXe7hEpkR9taCxpnj7ZpDFt6ULN2hRUXWbg7hRfwVnCMB8cFj2QqSf7jnocSExMHoHh6x9kjg",
  "key35": "2vqUVuKauErHfziQMphJQMMoQGWnzZGXqg2R84QWVAza62cMK4SQeVwh8MDk9hbDhPR5iJhM473MaxQEZ92x5P6v",
  "key36": "4QzJhALT4bQFNuXREHwRpLzngMHm1HCb6ohNtMqoVUV7na5AENBYbY39xR13RPawjjDP15pAyAjip64vQMeXH6MH",
  "key37": "3YMZCt6DhbK6HMqGrxP1Xdfk4FRkjWnW5SeRFQHJRZwsQiV5KnkMX7QxPettn9wUM9dcEmb7DHKfzcfGGA4SEPYj",
  "key38": "2cqv6XAxJc6uK3FoFjE2vjqiMVL5bnyHY5SQDf3241Cf9dzZyga959zdAWPdFXMqXgTBE8K6EkCp16Fnxh2jXqvP",
  "key39": "5BQyY3kCB1dx5ksJRX8m44Dtweb5SFMsipePh9yn6VzR9NzzASX1NuVEdwJas2Rct3MvM65Fus79Ni7xLVbDFDGX",
  "key40": "3XGEUpxuLrqiiGTEUpLUWD9B7Z2iYWe5R1LiSzg8GWytHoamFaSaKwTJUAg8Bpb7ANjZmYew3npUkasujNZTGR7V",
  "key41": "Dt2GW46A4WbCzPZ8jGGQj2bRkTr5jNyQ1rK3eRv8dSFHQy9tNwQTTSJCyYaq2MSEuubM24FE1uVUQQp29RAeSPh",
  "key42": "3EKH15kBqcH6DdHiSUxXELfDodvwWL4qbpih1rYQBkQv45Yjq3qT7giY4Eso5LfhiXSnmV3dnmHqaQsQXEWNtyX5"
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
