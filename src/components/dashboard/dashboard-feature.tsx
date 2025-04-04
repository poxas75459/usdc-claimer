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
    "Gfx9SRhv3JXFchWggxRkPVA6swfAvNXaqGfeQbEAsr8mpKeN83qmdMJGQkzZB4iuCRZifygR3XR8Az4Qr3SEjGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vgRiKiUMsVz4DNX24qsJwFFa4VUcVtE5iWGusQjY7nd6AmWg4goWzH3M1Zf2zVUBWFXbwZTaEeXztMYGBTVVoEq",
  "key1": "477WyHZVhUgcagK6KrNwsbXxZQ4Z88jM43kwSTVw6d7LXheNEGAUBbeqLLAVM9GmjiCJdMKaYfQBdwwfyCUJBfqh",
  "key2": "5eapv6BhszqV837CmzBBrTvpXoKSuWcd7X9n6YyR4ZaUevUaY3DZFjuyy1sr3dFaPZ3h5Yfdm7XgH82oUc6wkuzK",
  "key3": "3XFT227HYfrNpz1jfJaX2msSuVZ7fHf7uFURWkfeQbd1h5eHXTNuhdaFSjnghbNM9zmdM92w6K4HHF6j1rvp5KBa",
  "key4": "5uJTy8r5fdDx3ndY1sSFfy6USgV8mH1ftFNRhjNwjDGx6GU2DxUjHjVzUiSe9wBZ5BaJiMaNKriGjVCGftPyawNs",
  "key5": "3NrzYjqztWdRLYZdpYEavRnxW6bPaji61wgFWDRtPio68oQZMZLGLyeVorK3RprBYy7oKP2pq2yVvSUUQ57pebkS",
  "key6": "2skXsDGuEjVtoDszvhGVNjLpeVKnwTiB3ViofxRAfLqcDwuhm2aZdP4eTEEgfTNhwEUmEhXFgXDUYCxRvfHj6RLs",
  "key7": "5doM3bWehfUWzjzzVaXFp1RNR942sMxcDhiQkZQ5wQTX8SxzBqh3NUQegC8YbZkYkr2Ht3TSWmRJNzYb7NAPfJLB",
  "key8": "2ugYp1UGiCWVDDAYiMA2muDH8VhJhRhRjDVXXuNit3jkrXquQWH7ntC238b3nhX7Uvmd6v9fR3D72i6iESFybAnL",
  "key9": "4FtNAciUta7pXSEnLFDMg23rYFsKpt4J5fF7RnRvQ7BUzoiAmf4RH3pmgZH8evfwTp8sjLTAhU8onVBw8rk2sXD6",
  "key10": "fVMaBPcm5RrAuceQzYFghuz9UpNusuddF8qKe4muB85CaEx42jF5XFQ4Wice7ksbUgcFcGgoPNukM6SQycTrirN",
  "key11": "4p6nnDhB8A3R2FpLFHbUNMfB2JGWpvHxizJm3UfggbpRQwohb2YRqM6fqZ7b9AFSAfdsTdWmdSSK8gD6g2oqP7Ds",
  "key12": "4cnVsryeEAbURvqsfFGybtusMvLLCpd9VPBZpQdvjfpBPEmpsJvtQERreb4tPWZdq5qfRtmwDDgi7Q65gVeFZACm",
  "key13": "5haXe5DzqcuBJD6KsFhf4Yk7457kxbJN3wNfv7Muu24SQVut7PcMgoRYhkNGkwQcc3RrKjPd15TrsYHdkPwqa9Q1",
  "key14": "34hPEQwBPpUCRMVYmc7qaezrRzCV7R7WTU8BAvMk5Pkvx1UbE5eh7jvvkmjfPxMF4VYgpBXgcrvxoNp72KHsscKf",
  "key15": "58XsoFwzaD4WungwY1ooLwz7UqAJZYxsUDpeohKStcSv5SexxEqvSvGGzmZpQXTXHhvRxfBKPzz1fAWBZnKgGQks",
  "key16": "3G1WaiX1Bodv1DWNMzTWxiyDwS81wmWntiVNTttYcmZvWSpoDMrMpyvBo7m1HdjNyxKq2pqern9xrjgfBgmU9Br8",
  "key17": "LmL95LyaezZec9z5S6ZL3c7zSWGiM1BddoJAp1d1gAdpyBaq8J11f8B1RdfgHiEsRj6PfwZF9afCwg2KfRhFxVs",
  "key18": "2etgp482Fb68X1FwV7oph5J1JvdPBhLQm7wka7kvswnrJNpWcBxWC8A3tGRAysPYmr1buTH75u9RRazxGzZ7dMVM",
  "key19": "5x5EqLC2SAVkJgmyTqyeuJfHXhQptZdkpoewE15mMJBFYotfp2SEgKZSEYSBquaei7tLJpWwoYbKtZorjCQoZisb",
  "key20": "2CufoGTeG4Yyxy6JjN5pBHVvjC47Y6EBE8xL4SREbZbzfEoiA3o8ruHETbFQcZw1JW71f6CTjemFiGH1RFWyDbBM",
  "key21": "5dwEuPSqmN8aqDjCVu5mW1Q1D7DPa2aQpR7Bc4TWJiirkXCn25CmxaNugWkVdqsVzMhy8KCd2R9Mm7juwatYJM84",
  "key22": "3v73qXw99HAK4hYXyicoPNko6R6cwghozZdAyHPTbosbdKqWU4WXZSPJC9eNHXRNzyqLq4uji7raBFtesTopavV6",
  "key23": "4qSV1VUb5GDTbjfkmkJTAggczkQJSgD3RZuVhnK5gEisKhKAdbbqtxnU3izcwtkLdPEqhDGXmZNa1xQdZJDR5DxN",
  "key24": "6636KBsNLxKUUpADpcPdNfAKrLxho4qEAyNyC5HDoz6pEXVcBXX5SLpAWyRL76zoEc5HNjd9JHf4dvuzD9dBZ7aZ",
  "key25": "HoeVhpcGsjgSVS4qcrTe2ukMZYSUm2B2ZJmLQyxRDkpYfY9LAQWVrV6mNoWGJ9Vdgpag1GJuQ4tL7bi78YENWzr",
  "key26": "3Q5gsRW87vh7E3bUKug7rLaSJ9CaL2QNcGnxpGYng2c8UQpJ7pz1qkUdqH8QxRsy6V2FefRhhgNdymsR4wbn4vaR",
  "key27": "35dqXZhMdZXEGTYSTkujm5z6fHtZUT6hosFZ41G6Wij5oyKs63ESm3776TKXo4fF5YCWwm9Fpfd3n9aD6E2gFpXj",
  "key28": "4Ctiu9hWmTYrDThtafBciNjk4xVRN1qtexJE7ggriYy8UKMXyWcU9FunbH69zYaetyH1wHaRBV9qWxt8JqwaV9Z2",
  "key29": "5tDQAcW4d2ZAaYFYBUBT7BvLCXZbkabiKeUqVqkqC4cVi9MFvpFQatGiBgwG7kxLueo47ZmuSYXZv8Cr3rivLeRi",
  "key30": "5Uq6sE8FHKqH4wmyXiPpWmQL61YxNqSxD3HRQrCb7qWFAEL3Ys5iQzurNEsqr6YdgMJBxBaWGo3uuS29sQEiMMHg",
  "key31": "4bB7kjL2iYiAcnG2n93crGBDkN4KGReojJWFXjWWgVZgiMmjojBNWc2JFezaE2FDsANu42ed3n5Ujci3FJ9JQKmr",
  "key32": "66EPmn6U65zwmCBeLbxwAAWQhg5JeQV2qRJhEUaRQFky7pq6AnfTmi6qSGvKRuux95EQwodfhkSbZ3ms3uDy6tJ3"
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
