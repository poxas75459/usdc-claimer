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
    "3JiBG9uLeAAmzp1GrC5zqNwoZAsfZq2WsJwtJjYvKoD2ebi6uP8Ec2iSmMmBEMNnUUi4BwsUiwwUiDQNrwVz2jvV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "381QG2ofutsGKWKEEs3hMzJ51ne9RWYxHN7bxRLzKozb6L5qpH4oCHqDbRvg4grdZETFhfeC2CJ5GjRLwZFNWJ96",
  "key1": "3vvDrWaRT2Mf7F7eWZGi7BHrsGh8vrxyFjNWoyce7BVdXn68D3XrRUqr7adX1gpA2Z54RvbhVZLV65XfSzannyNo",
  "key2": "2oDDtzVTWDxL7cvFzL9ivutJAzi8sxyonbvzrTGcyPgR4Mpug1YvWHUU4bnefLbKmYT14L1Zt2x79heUGKjNjGjB",
  "key3": "u9SbSWXGxqxVZear4M1bisduPYNsQYstdEVe8z5iq7Ah3QRhdyeTiM926RDoYR1Eaq3JP3YB7wSfHnJg8DnNquZ",
  "key4": "2bFJJpfeSe3nGauDbXJjaupSQCNh5QYung7sh5xCn2zKDqP822CU7WEWnubvDX54yxFFrybeooAKe7VZy2rC6fpk",
  "key5": "WQSWeWGA99HAZKd64tSPC2hUiEU9Ni4v7rhfPTmssAuB9cYNHAUpAmbJrS1faModWHt9dzuCVGiMXTmmCVxLMY3",
  "key6": "3gpvmRGmQDnsjFjXCWCjDGRfKFhuJY6xNQEQ7ejF51fMRmhjPqGKTchYDtxdP8j4bjzjdAY2Eg3ExqKf7fD39G7s",
  "key7": "3CQeaCnBAtVSRSFZUHxUQBj4TnsmYovVL5CXnuSSGeNhgtxwS2AAMhpPV4mFqKX7j8fdFeyUapCNHsmnx2QUvjmg",
  "key8": "5RzYtNUKJbkeFkS8bvnyKvrtpQiogk4CwZX6cHXTrN5r67qC7JXWQpgbn93iC6xkKULCrzHqiBkDKk8XkXGBPm2k",
  "key9": "4qSSEGc3pvuKNktqkiTraCQTneXLU8qLydY12jCx9NUmUcErjEJnkVfE9vzQ5r8D6JFCMPZCm41HrkTZmdkovFiD",
  "key10": "53dFg7B2TskqeLukA1RjdGumdsLEYcoiCtVJYXXz2Vwx7U6tVQ3ifnVn6Tq3R4X2ELEi63vc4EwEPZL6S7YYAcZb",
  "key11": "5Wp9qow7bVrWkRCMJjf1pEQc8LzYZxXt9ZT5CWxUuJxTByaGdTZju9LAfqnm9oc7miJpgJQnM8uqdj9TgVAwTVqS",
  "key12": "AycCaC8jcEfxLrqHeoaYEcs1bDD4YKeYnZq2JVNeiUbpqwNq6LGAQM62dJbbztsJCPvvxqvgJhHqGdzKWNgZWfE",
  "key13": "4exBVfx9jHpQ3QqzHfwNJQZ5NJyRE17JCYCHYiPm5w9LdKna6aeGcwZfRDkTSWidgKq2ZFcDNvDZhhXuteZ8iGWP",
  "key14": "jPv2RLPT6Esc5wvAnfhFHYxsDPmd3mCYU6aSVkGzfWXvBb36eXYGisPxaHamqKVsyBtz3TN585RqpYTq1y9yKsM",
  "key15": "5vvLCnRvoMHoAxSbzPUf7vE5S2gPM2CAtaKb75gdg33WN9FqTKoukuzC336ZPD2ZvkU2VLnTX5et3enHXz6Kk4GY",
  "key16": "2EW3n5eGSp98BeaNoABkuY4QKL49XToiTjwzGrBdkxLvNayU85wBUVoJN62mW7ZWzstWhcYFXYT4Yxf8ScbiK2iB",
  "key17": "24qe34BMYF6Szx2oHp9xPi5Ufg42L5ZDKh18wKPRfJ3oPghQVuY8jLRCeUPWeojsK3qikyx7JFMzZzJveFxLCeGL",
  "key18": "HSSL4qEKPTQJ5sb8u5N2je4uAsY22R3Ja9PWT2ZCaWjjzA5pnVDFXw85KMLWLhGQe4Rcnq12LbsVqp951BdFh2g",
  "key19": "4LgWiNmmV1arGTNCL8JEwp1RuqXL1HttQU3BNh3thTgErDMGV8KwwboEs5SQtCZCT1xLuzX6AxSvhWYcWXsLCKmW",
  "key20": "5VnjXyQkn6B7SNBM7mmJESFjdE1QU8a5ecMnSSWXrr354Jr42mFFWRYbFAnn3fSnfGibPXrpe5Mso6jQpERzqnuL",
  "key21": "278jseqEpjQhmuRo2yajdNWzMBPgB8pgqiDxrswzB6BAafDvo6CT59TPdA4K5LhEkDF4wizCLbR9eWQAAEFYTn8Y",
  "key22": "2prWFaopf7NVXxAH386R2D8pAi68Wbe6Yi9Ue85ULhguBEPk3iQRjpgNEPdaM5U6i44W6DohQfiNjMMfkL4cEeyY",
  "key23": "4cD4rQw2sdMqjvde442TkukYJPuboa13vD5u6un4eMh59XDMjiu367KbdppMRDF7ebZDbvB2XRQTVJityrKQ8z5G",
  "key24": "3MKT2GMukct4tCV4x4PJmhZkVqcpJAzJkHmFvh9BkmUHES1vE8ZNyj6B9GTdiKoxMoVpRA2DxqtRkp9HFyioHSw3",
  "key25": "3DTksLgTY6wJxP5ddctsmY2LTQtich1MjjsJ9QR7ZrmSATeZrWHcQMaxyNSMpPjSxGy6KrpMrcR9gxKE9BGmTxSr",
  "key26": "ujYccT8RWN768WxYejeD3sRhPMkni27heaE1iyY41ihuseN51kEgG7R8TJBDqvNYEeDEtuCqzbWU28kBHWSJXEV",
  "key27": "zNnkdzQTud3JaHA7a5u8mKAMBnFN9z2SXgNt6mN3car43wK8UEBZi9WcvzryTeHX4KpwLfsHWnXswwncdoNLVyE",
  "key28": "4viAjW9bFPrXq6E3u6ARN7NLdEApSAQq7PP6McRtLFBSYtKs6B1YtjqgBKo2kCJEtGwhg17ECRN7NCQnMt8CVZBu",
  "key29": "4zCMYxr8XG7M6qorhNB2zDkYoYMy9CFRfxBpU68Mnw2W8urJGRJ9xYAieagY6UKSSkbBDiFctkEnmg4LeukYLEjd",
  "key30": "2bhZWsa963AMisAVZSMjJTMaPuzCUXdxZuJt7PykLGRqPF4YoK1ePcHt2cd9vKR2q7kLLX6mZVp4jYZ7Q1b1DFzy",
  "key31": "5y4UzxXt5N4reT171fqwcnAUShMquiP1vjW7vvNY4Zt97MwHVLmz6WKzFQkShttyWN6P21xZoQV7gFy4HU8MBApE",
  "key32": "3xqKnf9HXje1s4JzHM1uDWD9ed5BQmys1D9JWLpAzGXJCkggs2iQGHfzKfsG5zJNPveD1s7zmmcatngJR2hednUY",
  "key33": "5aJgDT6K2XvtqRodoPza8R7PZEUa5ZFqcY34MnJYMosj3efeprvyaDSQpLBGDkqSZF5fD87izF7njyWaH2P9xPB1",
  "key34": "dwz5vNqfECJirkEJWhonu6aMRj1DxvxdL9cJeqNZbDFF4gn16Cr4rwKv5bPaQWXczJdkpM5Wh9nSV3uQgY6MQJa",
  "key35": "5f479ZJ61qoJKFvsS8nqvX8z2GFKqdUu5Fku4PHxQVagCe3zBvoHdeus7ea45yzs69CryatFqKerX9UuQUMuSNkc",
  "key36": "5XRJQFSLk9HrYrgWHR4JwzCjQHfEwyWTtKVdyy1khNtEr3DrvbcBwss7fWoYEViXJd2vrBNKFP4WYqvb2PNsSyod",
  "key37": "2Y3U5ZjJ76bnweaU1wMYdGobKeno75Nd5C3NsX5w5X7Q97FfHxeQE3uqPnHmucUzyvix6DYMCQ8AiJSfoHStrgEp",
  "key38": "5YyKWTS8RhxKTaZNkjTaqBMDcnLx51ZfGjZRK1A1WePmJ1kzrU447vT9HQnPZzS273y7DFrgj9YAYaksRG6fB4hK",
  "key39": "3DFJxJFHEb7Y82fESJ6EgDbv9NhMx7KcuRUft8yRCuxeddJ7nEgjKaPDds5c6VdW6vtSC7GANjzDoxKLFuNc4MXF",
  "key40": "3AhxqdvZ6TNqPRFJLwRR5rXVwVxC7i7TTwmyrJWa3JHP55AjAMmUYeBdVH51RnqCgHAeFesqAafR6WDC45L5jFyM",
  "key41": "5orVhNLJPNdQ3D25EpYWbvaR7CG4VasKumZWDmoutYxjqsUryvfq5XEApJv2PnrcKGhugm6qh58uaSX1fjQgAKAC",
  "key42": "4NQqqwNE7suZ4nTi24smdV44yufjKuHtZbdBzfg4X6p7SnoKvs2UbneyWaQ8tTodAuEcQ9aFdrnkXjvos6caJ45X",
  "key43": "4DbeA1T9SqBF989v46z4cwznFPNS2ZwPEAxH6Nq86wQd6bCjF756CRMEkTDjvWjAB6nk7M1fEvvQWfVp5fuDWXAx",
  "key44": "TPnRoLQoTukkPhD3AAurXqL1iKk6zQnDhcu6Yd8PgKFCdM4JhVujtzN7RjsJfH47NVsXGdnFEg2KiKcj51Mc7LT",
  "key45": "31vJLKjYLhEhYPUefbEE3NkTqG7MWs7veGpHqMrvZcae3tN8mrV7ALWPmvqto1dipwMR1UATWH9fHzjxtaA6q343"
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
