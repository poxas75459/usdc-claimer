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
    "4XHeX5SHJGz7aYhW4cQ8ViRBS9d4LdKmfJ3HC4vkdZa1Jh7ZZSuynknb3ry8hXFGHYvWcRw3khj1tDxz82rwhgdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BBCJcYSe5ieqjgBKaxqx6S6iEmzoXxXh1DA65ZweSZiRGDVDVnGbHyaADfw76WFFFz41LFiMDhDs9Ur9e72FgoS",
  "key1": "5V7E5Cuct1ch8kWKH5oPShxJHoqAbDnYbA7JL6b4RcFNGFLAsENY3MaDrph7d7U38LJwHSBDj89pLyejUPGBuMYd",
  "key2": "2SUD5jkq62vmEf91AM7DKK4ouiefwaWSAmsBPLo9ejKMnEVQ9w6YK8mvqKaQRfXqtHjbzLhmwwQy4is7CFAmMDpx",
  "key3": "2Kbjp79QAcB1SzY2qh3w8mPd38yJdZnf6bUKq3o6tTYfhjrun6RiQXjxzq2pSX2rQy2u5hSs3wkvGuSby3iYmbaR",
  "key4": "4DhnMWsAGci6yTngNzbh4xLqXffEb3iY5YssnHyhfpbc1hZyksPznEVmqVoPEE2yec48qRSHEzPpt6uaHCvSaX5D",
  "key5": "5VBpE9oj3a52xSL5aR85MXWKE9caFc7vDfYNK5AoWQ2cEXWRt7fqsDpFsP6sAFU8zH2mPp3rGEPb8hxnqDehPbZH",
  "key6": "2hF9w1kzQug3Y5akskhrmWLsUDYvzL6zUcLREnaYTcPTuJwCXaiUtUJj39UYC8MvidznTZ1kFPLJPCzw2t1XWvvi",
  "key7": "3jjNiGmU5pwTfXyzYQifp9uWd8jYfHzhN4Vr2QjJ1UKYwQ2zdyhRjkQJEhdkc3REHzn8YMGYRozo3BrcRUjXKuJx",
  "key8": "2tecnYbe4xmnNa2fBtrBFJEg6SqshXGJcCvygiq65dpigt3cH315RxL748n1GPPEyYEpqX86JEEmwFbm6cuucLaJ",
  "key9": "2yk2uVtRPREaD3CEocYov6U1EdHXuvyyUahRgLgZf6FyQ36CgW6GnDyCtaj5DDELLEJUUd1iUGWHeJjvuAHZ1Yxj",
  "key10": "xGsgLoip8nyJa12L7Kx6GHQD4enzTG7n5RfpsCf57zoH7qz3TPBxMhTYhhVgHGXp6XyQjdcm2eKo8VJfpmcQjR8",
  "key11": "3vM44y7UtXATydZWzfXFM7sdyvwdwiyD7y164oYKZF3dpFn3MehhoaD9SZYLjJRw24aHDLSoPEAToV5ZhPTRfKh5",
  "key12": "4cQf442MXC8h2t8b4Bh9JxRiUZtxM28BHhdyNBBMYJ8pKeJn75EPMgP1gZT3ZYbz8sNVazCHkK2GVdMn8jzBGidP",
  "key13": "2NzWZBAon2HkNGZYPJMKRoCrpwkPPUeRxrSYtTo7dCDdGtLz644t8qxoHJ4L3ptJKCK9iiV3YaPbzH2kz7WVPVNy",
  "key14": "5JWFxyiegaLJ1t2MqFX58AJgMpi1vxYVjTR92boDteD9jVufFs1oSEcueWDniUiXp2TeYuJeVnL4wpZ5tFf2Q1Tt",
  "key15": "5c7n75theB3a9G3hQk9vCPHt7CRY3m6oLrDUEmEu7finQvSZHXvYctah6bv4W8a4NamMETCXLbJotUKA7eR9ceCL",
  "key16": "5z5VtoUsz5UWvjrCUz2PLhHPbBNDAn8nmcFgRF7Y86VqG7n1q8jaCEFfbP2yxmjAGvPT35ZNi1Lm6ifn7NTVDGH1",
  "key17": "5nLcbzY1JnouaCkAjDCP8VmY45tQv5FGokJfju4YZZG7Eu8Ytmxegg9nHi8cppufHjhr7LVSs7BkxSxrAv8e9hbe",
  "key18": "49BwvV99u9dRyEv6V4hHjzBwgQtAKxsFAt2fiK9jzJqff2JswZ292KF4mMDvqkran1MypU9XszXEuwnG3A2nav5w",
  "key19": "3KAeLx7hGhqDwtsHgLmKkidE4CNsRqV6f7xjMQt4jw2EoXAaaVjeSphCxThpvzbPkxGGVNZUzTM9cN9VqHjfTgCb",
  "key20": "5rLTfTobd8CcMdLknTLKCWyxXfkUhvkRHzxiTVSnebApN2xwqeDUYdFBPJPwU86vgBw9HmX5k7WdYwCQ5d5bhAJ7",
  "key21": "3ktXUc7RfAz4TTxHFAbhc1PVSdLdospPdhtHV6NkrAijTHzjM3e24tK3VZrYSteep4uD5pGZdffpBYrXB7Gz6Ays",
  "key22": "3RwzArNRyEycgGSD24CD9K1CeUXRRxbAp2TGyMGnhqXYhpFP1VCa1vPVY4ea1nAyF872TdynVf7mRsaZigr2fEip",
  "key23": "4yyiUKfN11umnqaCBhLTohdQvc8vairiCqF2FKZYMZivBuv3NYbmzQqavdyrSV8JJ81uj6Hrqh7JQ8heVk7dCXUj",
  "key24": "3mT5mhEhhwrZdQwgj7cTbxrbFbtMXd5ypm5JsxnPLZeCHh7UAM19seT9uKQEZGTxqgt3b478fb7F9HdHpGXypjiF",
  "key25": "3QTBAUL4ZHPN612KTvUz3GbvB4qLfY4Y3f9YsUwNByep9nCWSRRphkRAzVYkM4ySq9uxrFpzLLtBXSeNYi5BjKGY",
  "key26": "5ea3EXYDfkBbzyVdjXy9pPqJCXuprub4zBBV3UidZkPofneoCp38zCaFf5AB5DSQgLrR8jdxvidbZvqq1RSMX1om",
  "key27": "2u6AyQMKm4gFwZtvDmaWzfJMStwwpBD2Uv4H5cGLMkP6LXu8TFCqdVy2MWC3A1uwoXi9Di3LJetuvHTUtrQm6X9f",
  "key28": "3LSrDMK7Diu5gcxgdpU4JLpCeJuJ8Ypm5a2fqv8p8uwic69A9pwssZnpr7Pvg2a1KAgm6g3hu2rKcwg4SpdRahfs"
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
