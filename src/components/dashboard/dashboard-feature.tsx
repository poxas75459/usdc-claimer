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
    "4QyUnWNcCZdegeta5Ni3Y8Fap31X3VDVFk7MpsAN5AMBojkVKfGqaESmxCzMdaPJVN9B3oiYxpTaztfr9KrSKLg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mJA2wktSERpfr5R49wudwc5tb8eqzVicnfryvW7WwnHSruiYdRrpAhF9druAv17uAH6v3LrLaCxf3kWmYL22Mt3",
  "key1": "4BenjsdNsMGsNHbe8yTAk9u5iKf79y6nqg78VKZuFBmBKudBuiR8HkZiJBbzDE4BgSYiuwEAQPkihGp8J8i6EJDU",
  "key2": "5scVt6eEtP9V6pUWgBvvtWxm2t3rHh63NhTh4kWHb8cFrQ1sKDLY6ucG4DCkZe2mPBcFxayNW6z14u47gbtzgci9",
  "key3": "2o5kFCWheZ3NQDsxbbsSWnfU9KCtrWeT2KrnAGeXLPcJoBhYf8bi7dXtCkRjRYbWAMN4dHWcSQmKWZ1iKsFiPum5",
  "key4": "4hfSBDQE8KEP6XGLGTR2RUpprXCfYn1zuAxkTJra4JPqGsHwgLQjVtEwDMi8JUKMv5eiCW5DjsjeeXQ6nUZ7VJwC",
  "key5": "5fAqn1x5J75iRyZt4vcPCEZatsNJWe6yEHn7TPE9GXRQNeZPZ5ZUt2HoGNdpriUWTJbfYTgYcctiG5V2g4JSE5gc",
  "key6": "4KUzMEXZA9UarimBSNirUm8QcZZNoNb8kHq8e7RCuX8CbbEmt4SNWhB8sJb3WajA1DoiZbX83pPVeza1RDyV658u",
  "key7": "2xccxuYF1UhBBqb2s6tgkZq6p7JLEj75auwccFPoNrqMfGuzXruAqPPNiBUb4dJopo4ggPskS2JRZ8ddXxUdtRqh",
  "key8": "2pv3ocQmTahM9TYZCQGFU5bLgSybnAY8xYMMUPLHCYJdBixN7MefrKoyxG87AhQyAgZERk4D845andpQafVE8Ren",
  "key9": "2vJSYenybcBdA1YjPdbWZCiXnifqRgekebMz9GvDCskUSG1aqbEBbXWzpmAjmqHiG6w1DPhAxsBMHtgHwRPRxgLz",
  "key10": "5WHKWFZcT3xaQ4MiSAZeV8X5LXphSBHrf5UQwCfzuJCHWwADjeJyDS4AqpyWWdNSgjb8pFZ6cCgX7af8MQH5JkS8",
  "key11": "5Po8LkiLjMWbgdqLdPJNX1jwYnHTRQuMQ65nKFGZuHqdZLhtzvao3vahTnCXeTPfUeULZhW2mFMMNcSauiGTPFsu",
  "key12": "5v5SZxSr8jiyjAJc4oJKNSFCzzyC7sqESucQiZK5rDj2umDmKFK6vyFDnT867bWqs6iGpSQRGHb6ZxdJyYDqw1NN",
  "key13": "LpGoMgDwJdP5D644PN8hbmmtqiFMo2xRBHUcF1UPt6hAJfmvXVv74tDBzmxriaq2PQavjjGg5JFxwinTKpWgQN2",
  "key14": "kPxCh4UmDrWUQjKnZJtAyh33fnUYPkrTZTj8hoh2gxhMPVJiExoMQVAQ1coKEszBVoFZtsK7qCR6TwPqdbPjZVi",
  "key15": "4zBLg5EZScvq31Y5RzNdQafEjanhxy9jDEcuVRuRMPNxdWbKiqDPnC4SuE2LjB1uM3K9HzBdHofhYDmjJwY7rVHt",
  "key16": "32CSr1FscEKLyr5Mhz98m152hfgGSgvSMAgHPhFpMHkyHDbEKLqnPfoVjPLzDrbMfJFm739PJQfi9EDu6RsmH5JV",
  "key17": "4QMpNnneA6DSnAoUySVJ8uDuWWVXrEcb9c2P6QaHT1tkwNomHVgNJyNtgnLPsD676NMiEdTKxLYUqvXTHhhffn9P",
  "key18": "5A4GhTbfyUCY7Q6XtwDQKrqKQMk4nMexFDk8C4aZfmFUFnpuJLX8m2n5dV9BpXcp4hfxD3PnNM3CHxmUVrJ6AyF8",
  "key19": "3tzVj2ep34xXnGgnvQ8GNG9iuCdVE1nne84TWyKTasa8Vy9dSEsvbHMxLVYtMg57jSk6dqFsiFh9Q2UAH8FWkzpd",
  "key20": "5jejEJE9UF4agyhN4WxHYn6TXKr2TA6gnLgRGtrJrQgo9KT8FxpveDbr4XpoVXF1AGgmatr5qREv1kg2RR7Va3Fu",
  "key21": "2ycbsjjQuHpMne4p2GFaSYQ8DeXQPnPye1pHgCR211zL6VSomAnVcVoA1rac2aMXUTKhW95tXiGK4v9oFByDeKsg",
  "key22": "4PJww6fHx8ESKf2XqMmNj8bBZk898kWwLse1Rf8pJ6F8VkSTbW7uEzEuzW6ZsA8Df5t4uU5G7vMeYnS8h4x9V2dT",
  "key23": "2J8cE5MKgnz2dtQLvCG5qVNnTWXCjYF5ExKYpCQHsAmkNj258rJdbz1MZPzch4bPjeoC5FhwcD373fp4DVqgYzG2",
  "key24": "XQvZsZewnXtYpE835w9BHmwQME7rVbP4QutpgGUsEyHMaHTho88r2FThwuNnfeMagdN97ay51YrL3R4cDJWS15a",
  "key25": "39CVAdEZ7n5CgT4Ua8KffxiXyTPFbVpFCMkvXThtmmnbh92vRdVvSDXACAf5oMx57GfCR8kB54kprwzWAoeVws8i",
  "key26": "2cueC3pLhe8TugbW3Lg7WFejXqzLexT9WE3sMw1iTmvdPigiqJD63VQ9VyYE6HBUAoGZWyvVxD3wqp6QLm2SGCxL",
  "key27": "UKwrixra5vvgnkg1WYLbZv1GLM1rRMwvi7FXDwLxK9GUT7BrGQjwPnC8JtL9o9jV4YEApdApUwmzWHHFT9uaeaj",
  "key28": "5YQUqE873Aou6yPCBXydrpJVYLSgezEMbpTVWaBnwJu2QZXHdzhonkG5CcnYWaEWjBG5cuYcTPdibdpsFnTPX4J8",
  "key29": "3scGKjGdvpSHqPzLE4KztuQ3TcvDccZmovP97mR1MAN4KmTz4xxTvZ6hjWXMe4o6zoGALQNGQhXrrsAoTMF3Weke",
  "key30": "2Gmcje9G1i3Fm7sSzKCgPw5rw6SqtJrnmdjMBkb8UUaiarGRpGDyrLLZwAbK1EatQwGw5zeQLES6H3xnbUZGwPvV",
  "key31": "4kgPiwfTjHMy31KbQX5omXBnDRrrSX25rKHM8ypdpiYZXPJhku4Mjg9nH26Wy7KzzZpjiiGoEwKo5h8JhHFekJTQ",
  "key32": "5JD4vz8s7ywfdjbP6yFGL7oDbLjAfcc3FUPk73NK2kHjDHmiZpX7SMwqqkdRWchUEseg84ss1Cvizz6Xf7AjH8j9",
  "key33": "29p2Z7Rdqq49xg56tDHjQVZ1QZfNWavv2EYk7nTxtyUBKHAE7dGvmp4T1oaUpGjkFcqsw9iemJEw9JCK8ve3Ztuk",
  "key34": "5UwUT5mfKchb8fYirkSKTxJJGZ64ffbXq6UxSZahzv2Zujp64Ung5oCmWvq1HteJ4iLTMQ7NxHhopKKe4h6bbboR",
  "key35": "44XQYd2RTzCAH6Es4eEQEqhF8kqpQ4ghJUtfQ4qRzcvenZ62AdCrx9RT1JMnhHmFGVj4Da4JXWuT8rdbddZPwESq",
  "key36": "irSa4xCCSAzuQjb7schmCTychJ4t4cfhtLCxPkwWvukCXDGP8Uk3S1WKQytRxRNRrfFb1vjVLcPf7yzuVy1htJ4",
  "key37": "4pT3eGBN6NcVTfjvvaY6g4Fuaoaa4DcJtthJFKJfJxn1qGzvHViGHdcD1B7bhgL5V1CfsVVgYqVVYHBdnvpDVKBQ",
  "key38": "2NCVwcnFUbgimu8mXtDtDqirY3TCCJsJk2gLeGNQQDRxRvPzDbcmT83Cddh2kT4Zoemw7Ge7i3t3SJCxeq54q9Qy",
  "key39": "2zfDz5maLx8vZyCjv2NYFEQfi2tLDa8iUdDwaE4jbUXNvnusxhrA7AZ6XpQ1kZsvRbFaVkJjsdoV47RSGRXrx1is",
  "key40": "2UXXQ3DAeS9HSx7D7QutWHKwkqoxxzR2CXFEyDxJi2B88xvgFnLyp6uJmyn1MZW9DZq91TBx6JEBKB35JhXRHSDG",
  "key41": "5bVXoYtYN8wydvsFtTaVMc7T4tAhX3Mpaf6W5Zvaf37sMXywhVRfhyq1spEpRDNa6ggg2sK6aMCuEu5MFKq124hc",
  "key42": "4BRQX68D48V7rFdpukGiSGc3hD8qFN9auJDTxfA1PftDxuqELfr78HYyUyXTwWAbkvEWD9BYQZdiNU5YQm41Qcbc",
  "key43": "MXz5YSpCumGA5B7csCjVZGik9R8nYa9XLZUT6jF7z5KJpYpCy8LqiqJZ1QMcapmSRkRfRgyT5H2AQYu6bqpL5U2",
  "key44": "4NtUMcRAY9mXrNwP5aRc6diKnwio8dZC3PmP1bTR6qpcWbAxC4CsNy1P4MFw6xyNytVidWZ37wmNpQVP4ZZc7D6G",
  "key45": "3NkyYbcwAwwNZAhKwVsJxizHR75aXybFmehbFtKwQ2idPLqQ8SATatUWCc5KAwkUg5DS6RmZnqaNxABAFKkPLfje",
  "key46": "44cpD7tLiJWTh5DAJVUVqbZQ5rBi7kCoygSfNWvSRUMKXD4j74RubYD26drpZi2ufzK5X3NK3wuQoFVcX2mpukFM"
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
