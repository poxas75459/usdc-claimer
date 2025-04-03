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
    "5jnfWMzJra2i1oNpsTnGRDPjDKBsHLF9At3RzAmz6hYWkbaRKxHKNEyRQ3unjteBV4YZZZmpuGzo5n3rQ2u8UuSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z9rqzupjxYa2jcme7CcR5wPh3dao7HaxGqQhptxnS5Xn2nTfPPndSaNcTpY1Q1qrZrxQNtTbxd2rdNpvQue97H1",
  "key1": "Ayyvx3BoPuZArgfQhUYqFxJKQ4Hdc9FMxrnQnEgxtiutpRfcntb6z2yfh1TN8GzenHDbuPbgLkJR9Yb1MiosHpt",
  "key2": "5dbDAHp2meVvUMg34bSVz4exrakBpnoEFmBoqiH4UvsRxkNZFmaHAePcMHGVwbLZdALGx1mx2c9VZdDYCkYf7eFK",
  "key3": "2ij8b38BgJEvqDNHowY1zyNs6UuBxthEkq8eHiom9aZUAEc5n38VYt9X57CUa82iEY45M6wrovU9cEgWNhWvKFR7",
  "key4": "3RRce3M72PwaaZB7aSVyrqqa593SXvptanfnv2f998TvXJ4BkwBQxbcftSLFJJN5PtAc3HKfr1cE7cq2pSTenyps",
  "key5": "4JqRJftcLBc28kpSnvMzck4pvyV1HwHF6Ru3r8j93GymH6k9Uv9B1tQ9EUQSQmr7W8BK5AyQbCGJt3nSxJGWJs3r",
  "key6": "2qehLsAg1DjEJKkUp4K13XQDDB4mspYPPqcyW3XGaE1dyH3iyzzbmKLAHxg4rn3jyR3KxizWAKcRbtbh8UexexkX",
  "key7": "ahGnYemyCTQeWQp7jdTiNzUGjstzBCG7WTfjM3YCwjzQVko5mGm6AxKZxjJJmeqGti6qCY4zBG49UhLdwNHpYii",
  "key8": "YQpZUUXnchQCXCHefLbxCp7nKcXU2vGiRPGJuLKU7t9FFa2MUybc1DVBCVZG6YUrYjRE8wL38xH3cSNpLuZFh5C",
  "key9": "4Fqs8vAL4HDAF2kLiJok6XCqgANZhtA7xdJrYwAg1oyKugHszfse3KqNkKqeFMiqCgGQRcehLy6H1XfTcXna85eq",
  "key10": "kNMMv378XtHUTwDpGjxWwFkuGDfTv9KDsS2C8B8GLG2XdmHDRqfwsAamXqaoEWssk72vZ3nXvrDahQiEzBZsQ4b",
  "key11": "4oNVaEnXvXdUt7vLHM35zMADbuuGX5pcySygLDTYKwBKXQJAka87PfdJikQbqRYCGS6mr1ENyEEDEParZjFqUHQn",
  "key12": "45va7UXvcsRDx1LgnG6qS5qcY6SvvXsM2YKgtWkbnBoDs9GdkxLnds5nCd6XMfgYmcBgNuoijr1EyTk5ys5U5cim",
  "key13": "5Nq6kmPiKWb4k6BcMAfYzPJCXQZiKehK7Qpm29R4dJgKH1peV99XzvgJHF6VMRFtUznafy9vGc1zreS8sCsWMLi3",
  "key14": "4mKEKp7E9xXnsmpZeFKuaRCqQuXf6q2KiPMPELXgbJGGJEcoTveAvhsdhjySyCVxm9Snxqf911bZvznU4cB2nYMF",
  "key15": "ravGpqprQnCpvsPNTUBKdVbdLDRGjkmGipNa1mEPL4uwHkJn5vgRwiepHJnF6JUk5mXHbXtzog4eFujUU56K6Md",
  "key16": "jX5wQMSBcLFTFQYVXrdEtmfnvL5Ec5sNwaPQwK7VdYzsR5GhUGnvx5fCtm5FaKVcxzWdvQHUHkEBu3nj2aPJPYG",
  "key17": "4u4r6pYgP4TrPhXPLz83qKtEELBBuBfCKHnpJeqKWGqyZxyNeBajKGWoZckfCXyWUay7MfjojNNNk8iWvgLmx7A5",
  "key18": "287SgdhweMBAKXkAhfEo9kphy3Uuonkvvx7abWEwgZSH9jMLzVJ41uTEiGzAj6Y1qaV88r2cyKuuCEvUTTvM6Gim",
  "key19": "4sKzWutT1ZnkkT85Zbb3h1RhHx1k5kjJL3FFJD6ooRvny83JYPa8z79a3pEhTRmHoMceJGLPd4gZvBCrriAU8uvQ",
  "key20": "5hbfay5FgS3NgzakyfucvPfhfnLtLZsgsFXm1iJKUkiZ2Wi9LMDrRFuVmGFswggoGec9b2fZkpR5Sa6sHhn73ZHW",
  "key21": "5fePZnYbAh3LJweSHkj12RfbKUrfJNzrgyBnb6EpntYXSjXsTXr2k9pvzjqGS5MNjJ4ydDGxKta5SSoAWwucCkFt",
  "key22": "TVjMGJjFGZWZczTjqaxs9w6mdw4mhRTndsGBovjx9Dgpkewiq2BadvFLFgxokFEfyiRrMKcEeiU5r7xuERCGxf7",
  "key23": "3nJnrKMmNw9yx95LobqmBtvPhuJ82KRhW35zUrnF36uFssnbwFkQrWApHJQThSJWRDxiV8jsCgiyRq1WBaD9ufrB",
  "key24": "3nisXv43SBAFMoi1nEv7NtE6qMrnrR39kUKHwQjNBAbN8GC4mQaS3LNcZrpKJQD4BpzmmWKjf4oWRADJYob5nuPT",
  "key25": "gqZZMxtwjv9nhTLydVcEDsn9Kxx34txibUJRvKyrcVtmyg3WHvMo5PimaxUMGhry6gSeCeWMjnAjo3b1v2aMqDG",
  "key26": "59NCFHWgdFjMdXA7fN9qCtxBqKKdrKwEFSPXCiUYXnwCwJ5ZLKQNu4yxTej27chMp5fnhGoFLkmagFXrkC3GJBRk",
  "key27": "22KiMA5GXNfVu8ouwJCraeHRMNznhBqskfqQXYQ34jsjEwoA1cXnjDZvqG4x1Vmwx4nDWFGd4HLXJ3obexGGyUYA",
  "key28": "59zhiVhfYyeCwPQxUGBCEsVrHw2vmygUtxTawsgaAsenJKfRF5ZETVuE6aC4Avh1t77cvSQhu6Esz6y1tvQr2bCL",
  "key29": "2zyk2EwHU32P7XTbuyvpXZhXtycy3Wz9C4m3AYbCqMwafNkBf3sd4Vu7wmDcFtWEG1cKHZynaWuoeFYbfMbXMvwz",
  "key30": "5ek54RYgqyhKoLJ2LyTckRsbDk8y1TqvAsvtbiTBMkdsWRvs7N4ouYRxgbiJUTxd9Kcxrh9yg5WSonEjHUKN6JDA",
  "key31": "5sndU1g3ssSx6W98T71GiEQyejBbSCwrGbk8JsANDKdhfGko18wQWNmjANBJr5KDndqDgRGaojrT8tczBveKKjNZ",
  "key32": "5ex6x6HQ6sK5z7trS9HnEFuFfBMKySMe6eZEEyiRZz8rHNAJhFiyTVNBH8K9t4vP3zvYmt8Jty8xQ5RjSvCYxBL9",
  "key33": "Y1G5ez92n9YDczX9LVs6om2tjksBEgaXV7ymzidD8xgtwajD5YTHtFSGBL96t6um5gnhxQtQhQ4AbKUKJTjP9go",
  "key34": "4wnnCmmBJBGhQe29CRFBrZV9B6RsLkuhbqxL1saEKMXFhTBrG5MeU9eR7AwDezr4F4ubarkbf6SLssL6NptKYzCH",
  "key35": "5dbTTEsbhGwWmqJjhgCWiz7GKtW6FvHLtG8CN5aa9urQxjFVhBHUnRiqZySfkbMEZwPnu1Cedptiew7hNY7hz9is",
  "key36": "5UUw1c1RUSLhQK4vZYkFC2Zy2mX4ZEXDC7JqFym81QFiHN481BwHrsRhEVeuMWm66GAa7W9NCsk6EpFCS4u7NXS",
  "key37": "35zJEbhXcGY7Rqx1YHT9xGigCHz1u3ENp7z3BxKyNGzQtjf5eTANM6dWwyAvErqWLcoZWzUGAeXEqiuKegq6yZPw",
  "key38": "2UcmN3FK8MKSEQbDuEhbrLppsn4qCgrneJx1kYJ8b986xz6cedgxN8wXckjx3q1agsJq36gQ6iss3oPLunmGkmCN",
  "key39": "58KtoJbUCUswYwWCKHgQMvd6d6qjDXZEmgUgCgWARPMebv12P5GEoDVnUSxYa7uc6KkHeyRQwL3qepJB16WNvkET",
  "key40": "5GxpiHSJhne68ULXD2nJb8DWDXhK8ozDmf3QEj9NVjKDuFMUFoXTqyzjzBTKDQgjVpH3EXF9Z893a7EkdqKMQm9V"
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
