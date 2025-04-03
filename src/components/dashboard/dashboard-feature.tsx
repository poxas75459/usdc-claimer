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
    "CK14UmfgknnuwKjRbcEPYNazfaa6o7CQgcCtwj3zgi7eeQ95bQ2vJ48ohKLoMmdXtphswM81DUhonVjYroaT1pm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58x5rv4jsKy5oZoEPKZDUgWyRo1WAscoPCTixPG4Jc2Bb8bqgLN7aB21bjG8toY44tw8UMdX7MY7PLVHwSjNAR2d",
  "key1": "3QddqDRWMTkLxncBvZJg2zYoR2qQp2YSzFVAUpKb9Pc6LTRro33D6GizANAysDNFGvc6cjd9xUEbQrLKXdGCVmTL",
  "key2": "3HJcNh6BDy2VYfWoVcnzUEs7jubJYx7NYuEwnaP5nYNkQfyNmEH1FDFTesicto1Mviemhcr3Garhiud6LJ5jcHsu",
  "key3": "NH4zaLYEfzfFFzV5DFZDx1vnAVj5DnL3HuXy6qpMz2KcRAQFyYUuqz4ivrieZc6By6t9xMX5MJApKam5Xd8EybP",
  "key4": "2uB7kWDuwiX6JB3NDVzFymepapTVtwR2ND77Xxj7hD6xyVBwyG2ciCiDs3gKLjKnbAwyaDwyzXRN1v7iSkW9LF4e",
  "key5": "3PHB5KNCcYvEfPfK11rzc9gzyTBKdUa9iLbUYHfN6Zki6mC9KF2HFt8NK74sSg7BTUDXr9XATtmv9NTNRs1U3Wkt",
  "key6": "5EDSKbSUGZZa6oqDJUpYdEo6xsN3ZgN12Vx2cuznjrmUek5nSZTyGbYhLfjFY5V5cDbAnUYf3LGjTWoo5A1gQFYU",
  "key7": "2ciwFrACsbm3TEokwDbiiQMrNd94xupqV8GNtxqcXpGGb2TBmHnD5fXVaxiztUdZSFgaBPbW3GD1CWVsRRyC23Ka",
  "key8": "5hJP5RS9H3EXQWNZUnnm8LLzzXnauGTKCpyDkBGvFWsZWvvuj1biiKtBs1khW1tYv1LEyVQa1ctVYAJj82SiDa3o",
  "key9": "5sVt9Sp8LWwLnKPwiaBpMK4yZ1vjTVbCArwzGcaNKiBDndWmLrJNbvgsNhQ5hBtV9JLhNfgnwRd1ndWzr3rSwpBS",
  "key10": "4mcWTBQXbKwf9yaJJkQTAGKNG8xWnkj3xWtF5oV9yzdjFko3yXqpo7KCUAYqoLdVWnC8QogVESJfLG2Nvqv8T3dC",
  "key11": "45V7GpiA3nG7kKXcCt2nHmdBfEcCrhhf2ob15HpwU3QFmBwnVLExXnoeqQ6BmV7vmzYGZNqhpUhCuCyKrdjPJyD1",
  "key12": "tZgNLemn1KRWGkoS59tkXHnJ5cw4iQFAK5KP7qzfTEKv7SXJKJVrLSjqvRQE79uAUaz8ZzGyQYUkyVLVfN2YAp3",
  "key13": "qEPc8LfURkVw6Lb9N4nmVnTXajhNvfPgkcJnKqRodAbHcawRwvt7jM6RwBkRyQL3Yeva111bmPBEqM8e2ag9JwR",
  "key14": "354srNepbotJeJD5fkM1JYeEjvJU4thGDWezqPiAdvxz6K66C4BuED2gmMwzuVY59X4w1fS2p3Wm7WvxgjxyrYGm",
  "key15": "5bc6gCUVLzJph1kedcDr9xzgdeyPPow4ij2jJ5uu9YEufabCp7JusR1fNTV6z1jjN3nY1D8HwkpAZSqL5x4zYCxz",
  "key16": "4zX4Xsao4BJZiXbfPrpNAR2erkC5LSSDzNj9yy1UhN8G1TyT546cpz5xRHxtwzNXHqa2fenTxcP9BKi3uYU4F3cx",
  "key17": "4C6v9f5rSr5Afgbsd7B7aZPqDddxR3K5xCXMbCQ2K9V1hC6TxQK3oLsdZXL54H18Z5Jaunda3GSFmfcEd2xTQY9j",
  "key18": "4DuN1U9gJ4UKW7KmbdrMrgtsCV5fSWyUimNqktmvfY6mP8qGH2kjsrjuRjwQiJPMtRqE2K7GezkjhRtPoLaMeoQw",
  "key19": "5PiBv53ivf7ZKKbFcX1uu5F3GtY54MHYbn2SuqvVQrnT44Z2zshT28YrwhNEVS4XjKHhX2Lx3yqCCDc7CxnqZsjx",
  "key20": "3kjrcAZVjMXsyYiDQgJDY3rXgci3qBEqWBuxsZoNnmbkRbKsKiVwo14fbaZy6Lz9PdLGjBLB3eePmYrXPpazscrA",
  "key21": "34c6mgbmvZHdV1EhUVBhHpXYe5jwG12JbpRFsLxafeVtest9ByvQWZNHG3CaeD9j8RJEsnkre35Yhhy7fUQ7vqz9",
  "key22": "2KmxVGwFS6c8ArpfVt4xMe4vvVeR7Proh4jnNPE29T3R5WvqH9hFXzFWLkhWiW4PUCfq3g6i9zHUHvhManzKPFY5",
  "key23": "4xCniEffCY842husXze4PcrSMLdW3nwTkLDnD8jTqBDNsWebXoLf4Zd1UtHvSBMVBNcM5mWqhhqmLHsNZKtSkDHR",
  "key24": "5XAYy2VP3GPqJwTEnnZq9sxAf8yzkVYcE5htYLMPoGgQMNp71vpGq5rPwVfr8BwdqN5NiUfLsmodTEyeyGe2PY9x",
  "key25": "4YDDMCEm55LuBhKeBw21zdKaB4RRwxhd3ePr2jCJmJZ8G1KH1PwE3TmBEQ6FDKh8qzKrrgYEmaxd2LThq3zbkZXg",
  "key26": "3iLF47tNo6eLbf8q92Nu5m63fURanrq51hvnUqEhquovW9MjJQLUjLPN8WZoEKpMGk5NyJWDdSX656ChFJYn4Mbr",
  "key27": "3BumSfYKbBMFBpyT6LTWVkRb1czNi88AKBLc7y7BWu6AEUognGGqjXSB7JtDymHyi2HWPRVgpHcbtpv2vZ8QZ9sB",
  "key28": "4HsUS8VPBHau8YK9AAGx72VqHNUoTnb8pJFdQSUFWB6u1h9cQWWrsCz5cmvWw3GnB9aWTLDy5gez5zk3ZqGSzge2",
  "key29": "2GnKHxhYB6SPTqqmNY3uKa5K6aWL1MmetqwS9jeJL8MffvF4FgSNYMs8PhPHh1vKvrRXrw4N6Dfq71o76hU4ygvY",
  "key30": "WqD1jeEaCMmzMg5MjmPVtirEGX8AivsrTRQK2ueAu4MfJhqpm4tcefFja29ZgN63cjeQ7W7kwQyCXb2VjSPEgF6",
  "key31": "2RSFStJktNuhEw7WswrH7swW1UzDuZaT5PkbE83rLLHRbRypnzfea2Jhx4aLv8sSj97jEvMprvriufuscvcj1Fuc",
  "key32": "4SmqbQS9QzCr49VsgKowewokMPRafLN9arHWPmGSd4dRe8rx4Zqsxq7eYxz2kTzAa6uHXxSGTGnLx2fXoQRVy87n",
  "key33": "5PubdNjUdMxWyyzh4VLqufbWmtub946WihXQmnYAcTu7S7rmcHDruusc6SHYZnPtUMY2TtP1WjAPk7MMx4ffrEJM",
  "key34": "yJw1Dsj8yfNqAvcSHmXbtpEKoeBRDN7PvDkygk5UqiAmaUSvCKwh4chNGosFu5gz6QWMHFnCqi6EuFqEGYjtSpw"
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
