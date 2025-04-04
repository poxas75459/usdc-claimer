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
    "2cruNoXjuyRp7zqKjRMZ2pb5kWxWh53oit6AYf4ZUaZUkXZF3KjREccJAsrjxFzT8UGxMfwXrSEQJqx6ZEeW6kXL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2b6URahyhjxPbK9tq3pw9DxDHteux5WebAkdUGiDNXs4tbkK7a3S46SVPHEnjqUH5n1bpMBDqVsKhiVPbWuFPspE",
  "key1": "4ZhaGvjLM5qVU5AYdBqx4JRofGCYVmmZwh6BimmQxXZLgF44MGG2NVgVid4xx2eqsSHVBwSo1GnePKVEq7Kad9Hi",
  "key2": "3P6GqvMtsV1WrYEjK1uryvuJum4KU8YXoQETey8yjzXtwT1TpGj4qt2hfhiTQFLvZbbnjBF82oLMXZUxdR64wLsY",
  "key3": "4odARutW9XGsUYoYNqmFLb9stG8aerdDff6xLtL729TDVQ3DidgP3MF7UdHNg4MYzVioWUq4icnh8NPEn1g8KwW6",
  "key4": "27B55MbCkftVBPJasjMK2wBFGJwABLrrqQ7ES5PdhUhpdpjS8ATNustNUpdX1uve7ZPn94faDosbyLsKdDm1xWVy",
  "key5": "5J2c7uZRDweAafhKr6ky4ZJzS5Dy3yA7eDQwRixz3tHKAMZ3eJWVrvth51Hm8PB7aefuvayozoq5s2rMy3KPgEYr",
  "key6": "5fqMKFgTzva44MHprsQVAmYWQktmGfE75MVca7N182N9Jz9rRAqRAeC1icuZ7wgkJAKAK6coemb4KoLfP5Cjw2Dr",
  "key7": "3WtPpRWBNpLbZzj38oVBJaz9FMLGERZ9xjHN1PyHfEjBtLcm5hpx93NztPYe971eT4s4KG8d5mdco2axfE8MFdLL",
  "key8": "5qKh8Mew6h2yEUKwih7yzZ4ByL4yPbJXDTrvXw9kUyTGzpg6N318gqh4x1T5ibs2SsFtAVYU5qQjSrUqbA3xfx8K",
  "key9": "58RWogu8RZ2y3dLGtk3kpwcGVGHHzG3bgkxBcAoCusT2ZxaHemaCbcgAajET6dENgi25M2vJLejrzYqnY1cJx3yK",
  "key10": "4Q9QJY8W8Puktn4hS1RCkgm5vEKXVHnFh2GB1WwjJzVRT6se2pkFJk4rqQ6dya3yjbhE3SZJmMu4VRiH5ZbCjJC9",
  "key11": "5NEzKtdDiJQ9AcvCcTLvyzqH6UdAJXW43yoEZUkCMFEsp6gazPnS8r9q5kqCEXjvowtnqUA39h3KmZerLPKGDHur",
  "key12": "5hcHphfHn4nipMdHpNgZH8djDjhuB7AoQWvZWwi9DQ58AokE2KozSZY7g2sj4Aq6oQor17qzVPUVBab6nQtY5hLG",
  "key13": "4pRjVsVi8vmkvyFT3HbbTSNhdytDUYK4st1j8SpcnvX4uPSNYLUn6mXtqGcD2iohuNJak5kTHNXwCZ3ScEfKB912",
  "key14": "3WWd8kaZp4uMuum51h3nvTXaq64qD5L5ERBGWmMu6dUU4NHvdyK1pL51U8TzF8ig5QJDg63aNAod1Jrdod4n9UvT",
  "key15": "2zBPDZ6uNy9a8BKJM8hQeBcUrHah7PQ4UcuUBmt7PXHwUc3xw3RRsUkMW2xPBKkckKQePAUmxBLm6n3VyubGss1F",
  "key16": "5L63wgR9xbnHNqPY4JHHF5c3SXSAczNorbESw9Uib75P22gdiap8Ybo9Z5AnPFSeKwjf67NjyKhfdawXyCPC8tJ8",
  "key17": "3Hio92PV7onJjVEPsGaQ3QFdieFg5T88kd8cZZgYz9yLijKGT8n7HkbydLpiFPUYnK2v43cfo41P4nmHVotrW2yx",
  "key18": "2GwtUUPmtnABpJGiiPAroAXtBJFcngXdmaVf95ehviM3W53Q8iK3bcjR7iyc4b4dhcRFR8zdJoASpsFgJGe1HBvv",
  "key19": "5rfcj2YMg4R8iLBeeJ3BAf2MXBFxYsKHRn1pQAFX6LpusKmD8Ukz2XTyiFrTmhgLtPft9cDxs6aDyy4Sdw6m3trj",
  "key20": "5N3hZcbHxkXAX3WasoFFFoMoAwUxtkHKyKCDXD5QrGvHT3QFeaGuW3MVtwKx7bxN18tZS121GxsydFb8dFGtMKMf",
  "key21": "5iK2Rh5Yvmw8epPpXfHh8vcvAz3zu2jBXFgNvKvbLGaPemvfMn3tfLh4ymujhepsDhs54T94VMoc88tadxs52EXB",
  "key22": "kKd5GUk3YnsoQogQZ4261ovggMgSNaRQowq1ZMC87CxUpU3BoTd1nsCsMq7YUagTsZpJpdqr57xKZcXmrhCNSyh",
  "key23": "2HfPxYu9cmcjg1vLy6erWsibjLNnu3JuaV4fsgzA3U7BYQR4j34GFRNyR6HwMLtnwhVrb9ZLdizr1p4BMpkMfy4e",
  "key24": "5sb6EtBzNS1ob26Tv1Ucxpgcw2McUMHmcrzS6hKsi51xebCtWmES49fmcQRNuvB4GDYPiGp6AvEzkguGi6q6na1m",
  "key25": "2PndfUGnvRH6wuUTQfCxsG9Hk6Eu4DFZEDKtsGtoYmS6WoYZ7q2LV8Gsm4VJspKwbPi6rp8P69Fu5yoxLk1TF3Yq",
  "key26": "2JA9zyFZ78SJgxp7Hvn1KccxZJ12mtAWS19AjA3xJgEEBz7BvMENfBpAVsAPDxwvBVynK6pEz4WavXupdVFPSTYs",
  "key27": "3eE4SaJEBbw3UURrG95JGzka1zA58FP5cYVyyyWjx1nY2n65RHwn9tAdb48Ed9gciCWcUZLQN6Qbg46m2tsjNUyf",
  "key28": "jr8CuDUGH1UXFHhLYWw8QpZkQoNnTa9Y7zunYFdbbVxECQa2HVN2erAKJnU9pcKRnPqmnfyZbU1GJSdaEZFHhgA",
  "key29": "3pP4W5nxS6WHA8bKJYpSydQsLUDN2ZbtNucZcuYxnURW3Z3aW7TaihLYo1RWNrQ8Jeo97C2qF8FyRhQzbgg86443",
  "key30": "4wtw2rZ2SG6RSHPNDjsjU6gU7ktmQn4duHg9h3NtEsJ2Fa5kmXH1Xm9HkheuE9uCfUQuazqyApmpyRKQQt4mVch8"
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
