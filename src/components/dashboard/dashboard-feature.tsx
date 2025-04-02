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
    "47xScnYBP6CuAsqrxbSoR3aBhHiZsPLstPZbnp3cgTdaBn4ubu4zgrFsepRXHu6EQ1U8JiiTNoSJyZT7XVPa97nH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61jjNAu5pMpj7P6uEkiU2YESbA2utkEjrhxwJAjavesMhsfyDDhwima4euzWnfmPhzJ7Dc7w9Q4q632rFR6QG13x",
  "key1": "53tDDwxYjDYyP7WZsy4ocMt9v9PyMt3ywDmzdwpJmT29xwYqZXLAR2jYxUhE5iVHAGGZP7C99NiY8PcnCcUN3XnX",
  "key2": "4rvyCJoRweoeuUfGHSFMGqH8CPPVrTcvQEBwNMC9DmebHyRSpehFA1jsAqM5k6tRyKHMgf5qLNqTDqY4bTetvQ2u",
  "key3": "3qtW6RQPSX6TRrNUHfAMKTAGxAKUKXW3HttFH37YfUFHx5mR9UcmGgqHDsEKCZZoiXvKZp7nLowhb1UC9k1iFsc4",
  "key4": "2EtxkpXkZSPwBu3n7kFzHbMcjpj7crJ8vpdiUDKPTPixd5sZgZQysDWjQ3NrETYNkbMJmDE11w4gdKbrf1AW7YJg",
  "key5": "5XqpaKsGFgQYbZxHthKxuSZxZrc2fKCQkhMzaKa3zBB7vPAZRkVqai6p7EyH3fEBXBP1a3RDJh5YrnzNCwX9MFif",
  "key6": "3PRfeYiwjpgNKyZVNn4bTmaesBPZGBtTFug7a7SRZ2hmRHfqzHHeg8BrxbNYVmdfF5rZhCqrJLjNw49ibkf1NXwm",
  "key7": "3xvB2KZ1PGf9SPkaefmvn6eZ9PYB9jrCjgwwMGppHgXHpMN4Z9pgSPt6ZnCzB2QMJ5cS3VoDJvqbV1gs6Vs8L6N4",
  "key8": "2f93bY3vAebp5wdxRu2XhJUSeiKKA9jzffxaxSK336PBe9hvptFuzeyFwgfNdMZWRNKym3wirRfgDUbuHx8BU5kd",
  "key9": "43cUsCUA6cA767jk993uFnd1BDAep7BC5whiQYiy2QdY98fB779PjHsLhewJA5ErZB4accXhnwEdC7o8mFF2rj72",
  "key10": "5vpUqzMbUX2LZHTtkcGFjf1Q2akuGJPkXfDaki9eKCzfJ6nboKyMvHfhRLoYheyGBnry6zypXJuzPWmwcLLQANB9",
  "key11": "65MXpQKprszcdhzPFA4g7VeWDoq3tvNjMW1ak96A5z16gV6VB2aJLb6XYufo5egJ3u3q993SAzsPuYp16oFT8Zka",
  "key12": "F1sTKyvG3AUwuSVZVq5WDPrejXPnWPeYoun87GnscBuDc1dJZyEKukJE9bAmkJPnjEDgF6JaLR7zqhc1WNC377k",
  "key13": "4memGB5obLvFxRJSgx3Q9kG3cyT1U7p3R4E2aCy2xqyfU1WH2dPUjrdU7qrur13SxNTPTGK2VHfvqwK1EGcJkK4p",
  "key14": "5RzC4wdvyusayztMRzNXfMV7pD3wcRGcCVzMeTZvamdW82BN9zNYvGZJzd3nsbFKn3rJR7HNnFH4pL3r1nHJYXqR",
  "key15": "38UqpgfD5dzx71wrMmbFJvkj8w9unvbMaUqnDjZQpdJ7kiBCdHyNoR7f9pMk8oi2vAqH6DQPpZmFvXMKca29BMXZ",
  "key16": "5jmypEdz8hNpPz5utoUcx3L1arFNef5owRR5RCWubL75tDDq5zoRsnNCFnKsWopRihkw1op9DeEr2RDCTAknUSRE",
  "key17": "3FcRhkTzVu6acnqATo1KKHFPGsTkvEr17ayyY6pZS3TMLLyzVVpWnLdJyW6MVMQVpLBB1q3JT9tJEW6RFfU9Sx1p",
  "key18": "ZJYVznCmqUicrq4CKAw6om7gN5CRdfU26Ug9pQce7S6jsm5BrtuznBLbLnMWpJ1A5p7MtdT633FrvsZBCeCxMTD",
  "key19": "57ENcFMzx7Sfqm539pFUmUba7pXRfmY2GyU4eqtN7geYo71FceX6fzKptetCzj4N9fwoHTE1agjF9QXME7ZTcJ1R",
  "key20": "3hJ15GnRaMWk3ty2Gq27ZYfrP6jUfb9Kgp6NmGWjshL4bxAATzyVpXUPvfhusv6i33S4WDiiJ8TAC5t2fsumXq8j",
  "key21": "2qy2Fh2cVMEYZzj3mu79gryi7aGYSmfwrqezwc9HiT4bSb3BDME2Nfjz7UZfyEDV89uF9SMDzECtevhD6rMqYts6",
  "key22": "58JNQJLdtEjKPhThngefCpvLLV2oSQrdn9KJRnQkYovxaG1QggGBqeM9cqLFcG3XL7gJRdjJusGkWwTaMVkfyhYR",
  "key23": "4sPATBQReJkyLvC85prsX8hiobGuFn7EDZway3XsTphCpkPBqtmohFFpvphjwpF5VnLPgedKTmJKdLSTnJeTBdz9",
  "key24": "7JbzQnHWDCjRes5qRnXjU3UzqTi6gJ2KwmH2DDtEtc5m5Kzu3tdQYhAT977KF94mB8V8QF87wVMPuekPE9FHGq3",
  "key25": "E5c5gFvw8szuvwM6G5EqX1h5qyupV8gw2MDyEQvdBKnk3j9EJbBkMwUtAXsKSE2vJ3Z8vHVboFaVBQrQrSw5X4G",
  "key26": "5nDe3VGAowicAWkeg6mxnw71AUUFabCfYGxL7jfg7318SwnyS6R26HLegG42qaJmaeTpsrCG2udCvhBAXTUQwF95",
  "key27": "GNuit8kSNiEAT94in1x5UFCcwc1YpgLsNs8YP3RfRVjQm6hrpxA7bNKoGHiVbDDuXmsFh84uUvoBUgWGWFZhpMj",
  "key28": "aVP2YZa7CFLxPvwRe5ZodKZ6h5nvYjCzzL5BmyhjoUWkMjxRaoqCh9d8sx4gwRfsYhSSXWAJGew1p11shurLC3e",
  "key29": "2fxAwaS2iTVu7HjBqu8WPFXxpZVDpKney6rjNTexhymYw6xX9wrGUpn24qtejNQ81f9HtkycswtuBo8VrCCgDd9a",
  "key30": "2rMagDSqUwDTJzcpJep3LxBqBdmUfeYSdRhYqVY8b8gTqXkJDgRwiKdaaQ76cZnRFMzvv8kLke93foNKt5nkWwem",
  "key31": "37M5bnxvLbTHh8KAFMmsiFXthyEYf2r8vQbtuLyRjdArfkqgZeKhFvRrYiykEPD18FAmb3j8JvF21Da6HecSBqD4",
  "key32": "2VqbStE1rDNEJoujEXSwXxFpsqvTSUndawebFgFFx6cFzKaH2FNWHF3JJRKjzEmBwQBU3G9oDVfYPhDPTJvPM2Mz"
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
