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
    "YyLNxJcvmtpiWbUyoKR486G8CwJp59gytrmNvZh7xVN9vHKhKuKuXW2beXwQ3ZW3dLmwzLmYsNA8iRSm8GJAgkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62zZ636WonkDm1CWybyYuMqLiRxNe8ZWaDfUgqkL2ZWJiVYL79AZ9XL1WUndJe11yScZQeey2QRp68fxyi1svzcq",
  "key1": "3GBsiJ3jhMCF8AWvY3926GPJgqgKTm2ZKkFxL93PABed9oSEDR89mNVpwtQgkjFcZedycwgsnPouAMA2hjojGtjB",
  "key2": "5CsULWhm4BerqsH4FXKJ13WfadbUfLB3ASJkGvZ8NpXxiqZF91H48eZJMH9fm3XQPCDPuNUMsZJxBCr9xVQxWr4w",
  "key3": "2KRuAQLMAv8DxKUayLV8Zc6Mvwmtu6K1uxQn49yEfJ1T1ctKG2ZJ4gfAq8Don5NvbmStgvXu5voYypW9RgHyuu4y",
  "key4": "4KJpqiBzinS6P7YfWoJpNwyVJuwtvu84C4ng5m5KsdtsDw3qqX8eZLYna4rV7e9GdATBrwgKTCBjPQvUm3n9eYj7",
  "key5": "3Hwhk6tC8cVenyMJzJgyVXNZ5MEG7f96Lg2PHt7yyEPi3emgB7sDHZvLTx4p9ikkGq2igQHEKqH41JTqyP8PZWv5",
  "key6": "4vc5TopK6uhQdY6f8BTJ8EGUin3HMLM7qe8QGD84rTW8VZj6dfZatGiLA12xtjXaum1jRHW8xmd8v3MpAEG3CBep",
  "key7": "3V6EYdAAjCamCvZ82MmtnKvADPvxoC6uZzmJXJfEDnUrXPpHZiPvgbrGuNNz37XQK3PAbzsgrYRLzqS8p6rdv4jD",
  "key8": "2BABdaCSZjxcHRWSy5qG3C82fyfJL32RfrgEVgqY7yoV3XW69YD6nz4H4NMhTG462venvY2BQeirjdcft8aUKtNJ",
  "key9": "3Xaso3xvKpUdE2B5wZhkJpZ1J2nhrY6mfJrZjuHnqzJNabDeBKeyq696vf74gakjL71Jeh6xh7LFs3sMS4Xtka1t",
  "key10": "2qeLUhjtE9TLSW7BkeEfoRyFAazyza73HJrN6td7xD4Hhuxnwjofz9krJohvPSjw31cCtTsYgb9ncwE5hQDFCNyp",
  "key11": "4FLhjWDNSctJ4RtStiYkTYUumDGBbq4KgEDk9Vj5dehvRubZvsdB7Uvn8TDWwVve1gTLkvhVCvnrJY76RJ1Kfqqm",
  "key12": "2q8jHFDTW5ApyQH7FfaiCvkp833dNvW2Ytjka8WZfBCkP5sZJsC7jUZ7S2pAgPzuKrvniACENthNuvn3cH6QprVH",
  "key13": "3PN799xMfLpjB8YtwsQvjhzdk1yxRKmMvpFEg3j27Uiya2Nu3mFW3B3bGs3wfGLZJE2DRE6kxotriMibQmVSPxdR",
  "key14": "61b8xa6518xm221pX8DuCXbZh7z2xvVYA5neH1Jdmv5GPHp6XpQmsASdW9x5kMAbz9zCegmrYwZdX2qn29XEcuRs",
  "key15": "564EvQzbmYRfLBaCsqmqCJmzvAPdQhKTRvVtKjg3p6ziBdi4AFwz1VKXbibUz7gZeuiMu7eKTJhpxP5PyRBWnjf8",
  "key16": "Cro2cz2zLAh5S8zbhpBfejDCkPnjAKHSSso3aXrrvn12n1vzUZbBzUtGyb4tp6JBKDA6TGFx72bSak9SfZXUw83",
  "key17": "3Ph7iF5f5wyUN5DLubkQfxv9s2HVXPZ1k7Uj3y969DRkPNeJaQa1yuHCQUbwsq5yE8YBsyVn6pdF2YKzVzWzXuex",
  "key18": "5fsU38dcQCboex5FqVipGF2i78bX72D2HSmBtjnYbrCN6QdF67peU2SgmifBh82GjnsVuMD1XK1x3q8MWfZCvjxF",
  "key19": "3BUQcGsHXScM9nMJ6PeYKvUuL8S2sUkhFtZtdpb8pnJsjPxQ5w1kL2p5tm87dkzAnp2B2VP96Jcx6q2twcLJMKvW",
  "key20": "65d1jXznDbBDhjEqG5R1bbNzUSQsctNx1wmoocRLWoSxX7poSySZVsgZzad5WDyV5jLEKUduKdgfz1G1XzX614oe",
  "key21": "3zjBxG46UoUyaKfyw8zBBFj85wqNQwhuxqBB7Ghjj2niaG444KWjof9YyTEMRbtJQSznKwivJhmGZ58JkqNc9aT",
  "key22": "TMBx7XkuActorn5tR3SaUrv3ZafG5skjxJEJj7TM3ddpCRinAfyyCmKTHo39vpvSmhdNeZfGNsUvJjLNWFRozTa",
  "key23": "vs32WHJio51awJNwgttBLoAZvj1omPgbBonbHD7pc66LJKemXmVkoFL9wphU4Tn46ZvejiBc8B81Zs5wbQiYkux",
  "key24": "ozs5t9kjpbyccM7ce29NGAdSgGzygzAbWNXvQP4zFBi9uunu46AajZVQoUm2vHSB4hTYbwSnzbbpk1Lrerc5Za8",
  "key25": "5auiceb7uLi1wP82ugiZYNQ44kKYtzsTeu3mbTHtxo8bxv9hCjCSTjpkNYYiuFfC3xQ9iexwRpYbQvNdo3A6LGgZ",
  "key26": "2XfSem7RGi2fwQGYfZZp5fYThH1QvaoqhBwstz7aUnYEJpZKS5E3vJcJ2QqZXsApc9ZQQYojxbR8AsMPhjujj27J",
  "key27": "3nx8YxarBQCD1pYqVLXRVogCjU2w3tnfemJ1dJPpoMfE9uuW9HpfQWTaxoK876Xc84cU1YcLWBUGhr8AWVURthJd",
  "key28": "1eRwcj8nE62wFY6K5uQ7BtgUh5aMoKF9G1PkJpMzv5E9YikfEb4f3KyZ77rfB3hGLhAppkL5VucidSteoKVP8QM",
  "key29": "3d1YDrQ8Tzw1HN86BmArkywoemou2uka1zAN6tJUzitCeFpNV1uduKQfyCMMEDq5fWo82VFQGmrcyMa3KpqJnf7a",
  "key30": "3WbePhnMAK7GMhvAr41KsrLvxY7pTsedP1AvhAYKsbeoHEVMg8NA3ymox1KAh8LaG9DZpTkBfsQP6LiqyhCaENcA",
  "key31": "5oGvufKSov9N5ft7spL9zKrFYSxJCs43EwTUatHy4aBFCekm9S71rm6QUzLJpe7EeR8ZMZMnY63u6WHwcCFvqeQt",
  "key32": "3AQ5hUpdr4u3R6S6ngKCgTvfgUfHwsFF9mvbCAoBY4J8Hi5BM754LLmjTG5HHGHLfNySeqs632G1poArhtK4AosS",
  "key33": "4ArkWNiJFJB94wAfrWTM6cqvroJGr8Wz8DYSNnvNG7Dr3vamq9EVuCKYmxpkcxp9qYuNSYSQXuLVjhQjhEGURTsi"
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
