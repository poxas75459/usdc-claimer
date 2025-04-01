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
    "5b5FbVjVhNNxXaEQL3PcU8oP6VF7ehHW7aVhJHeyf3jo1WiDuqpcGNip2yYwFJoFVTGfipMViGUqvUmtZzsKcXGW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JQqs9xvtDUFA5wucEGpxet1JcLYqiZVPrswX5vbTZrqnBydZVd3ofhNYcsbczwopbBysxfjnkBvj2rztJDTq7ew",
  "key1": "btrMvy9V9UBcH7Wyoeg3iXiwhYvFg9TU6CafbxXQwdRrZ3PmkGbhPgCJA28p231gjWCzG3jmzsSPSJuBd4KSami",
  "key2": "4jf5zmKN32q7NGtZyn7hRE8Ev497d1xSafqs6pNFHtVhRRJfdM7NCBHy7XFgk1og7aZgAbtpSF4AEGq2NunFYfLS",
  "key3": "44YLdiEzn5v3zYZ7ZuRMNdzN6LqZkFt1WeEAESVpqhMQ2rDcwPJYfGkzjW11Sbt4ay5Tn9VxrHRJGdDbybpzbtZG",
  "key4": "3NDxpJ7J5nm5Nc7W2PAXGCPSLFV4V3ydj7ZJbymjUzdhHnz3hXUQv6nq4DeZvWxJo3HaUiCbwf9S6aYwLVCUaT51",
  "key5": "3zGcjATrStG2sSEwyryQEtJdDvgTeAGDfhcs28455rurds48jYokVoEpYhXBtvAHWAD5ueeEJf52zXUN2jnUykNP",
  "key6": "2vvdQTnUh82uQbECYt18GnySQXE646Uo1zron3dAbyXDyAi7ubxQnoVRGUgDspSceQmbncyFEPA4sFnBRiwqxE8u",
  "key7": "4PjeLew4LYZHFPpcW3zbUpJpHGpH5dNo7c3rLeDKz48iofRx3rrxG94Mzw89qXvZDfgs2M7cAu8ympyXnmE4215e",
  "key8": "FdWfuXgfgqVSuxPuAz61r9PK5W1BAV8AJQYLmA5azgC2pYc6cSGxN33i7e8jARdNz5ZoKbv5czNtmNduuZNR9jH",
  "key9": "67kF8sL3kj5s5dXcxPZQxyZjkPrZkbhdWFADLjCuxVqjLoDg39FEEwCnSAJ2g6jfTWkaqhTZqUcYePHd1FiKV5az",
  "key10": "3UtMj9BCumo4KHR9SxsEuCF312de5Yh4cNtHmKR8nZD9CfDThXsoB7ZmSEWeL5vgnTjEscSEJjfxNJMDkbDcZcj1",
  "key11": "5tg9w438AyPPZ7JsZbeHjGA8Y5DM8PPo2fcggDAGhQuTVd2mSxwnigB67ssf51CdH3Dsv9APuKjqrmr2o84nVHPe",
  "key12": "2BkdMRTiMjENHB63nMFgAp56n7Bi6PYMFgeYnM9bjzr4BuRykQy2bdQTZEuTuNgARBBMEqMchMvFJXEgP8nWKmNZ",
  "key13": "5sjjSL4qVSTj9PcGYpWEANptUq7HEzwyKdNZQcrENtW5sAH77RmcAHsKpVFhrKYKQtgd14etaAHajA2jdwnw3otE",
  "key14": "28FFULsAz2GP8Pp8n7EEtyU6S9sV9r8yfvAnTyyfRzDGhGTGoqqwsP1W2KZgQ59Cyq5E6SpW7aKbWkwdDLpiFrZh",
  "key15": "3WZ2EKmreewuqYZFsCe3ErWzSSZfZF1CzTdnKbz1uSysQHy5BLxVFxsxSicph4ydwkJhNihAKV5bKXJsemhQaLqM",
  "key16": "48Xs9zemCAUTMjKwfC7vsZwCDXXE46Ph8XHKxXSjXHQ6fZzy5FcHnRZDwkmf7KL6rys155kCJyUjxxoPMSuFpiGi",
  "key17": "5rdR6S39kPaTKmRED5ihtZi3DkrXACzKhnvbsag7RJ8F1BSmrwxZPmwrkCUSpQ84jtafuRrhzq5DT3kVv9TQsQiW",
  "key18": "W54aULSqgfWgMAKbpTWzkatodH1LstdocnmB42qXugDsLebKRvnwbEbqPHUapTuRQZFRpaYT69EbCfPUxbGgTcd",
  "key19": "BMkAsSe82Ccb7UUdumqnuPWe7vg8oUXUTZ8G9FiwFxwMw3Bgc6zLxVnzKuaL7z9KNgk9eQRFU1t2KqbcjQp2euz",
  "key20": "3A4kaDsS92ZPR4jRinDr9ZX5LJkBmH47Qnp1UvqAz6BvuZKrh1DWsiWQmDwxpjr6mmBzP5ZRYzGpoWWeosieN2Ji",
  "key21": "7QYWt1nt4VV8NpPjHEsLm72jzJfv4aksej4uUMHKUemCiLzUobCdW7sLwAz5rLb33pbW9oVaAwvuVS8bZMw2qiB",
  "key22": "3saSxDWqavypMoggNBvLmS7UetuC9AyZn3kRagcfL8aGArddTXBjXZoQVWeDeexyA9NsJuxUERAQyqhCnNgD6drx",
  "key23": "3QLyMxwf2ysYQoan7qNHSi2RqCgER8y8Npq4STTF4kPnX7p8PS28GX93qFX6wd8gAZ2k1GC5U2p1z2SVtiozXGpW",
  "key24": "5sQCYgFunyVLLhhW5Ak4fBnc7cZJPaRhwRXQGhqG9wCdrsqbEzrJRaAuVCarfqGe56zsUWe2RipWMufy7KaM3KZF",
  "key25": "5Sum4cRFziKzE6PyPtk6cgTCjKq25jp9SsVeNz3gAEU1soNaydpTvVMmKViqg17UphBjjkekRczKyDuGr37hsoPj",
  "key26": "5UccGd82jb6fZ6WSy6oLFisc7zDffU1pBc6KKDKyuBhEZCS2MegieXcAxSPAS2eyVV424PNjZZocpnifeVZR6ZGz",
  "key27": "2FhwakmZpxVLs8FNdDp8S7Sg7M2kUeYLoi43p138koGZSiXdqSgM7z9BkHrsN5qh7PFVux7a7sFyxC6i9tHJVhQD",
  "key28": "f5Z7MLuSw8K6DZ6Hmj1p8RPiwGYY6vLZhkPqhtDHB1Z3mC76Kw69uUJvRGDGqZmWkG2XytaS7K12BQxp9k1ZM1N",
  "key29": "BZVf9nRQcd2M6B7EdJeD6MheRqkPUPYhxhgn9n18jQUfoGCxMTkD74qnBkZdLDhjCHVggi4UQSUUbGoxVTxrqGK",
  "key30": "3uXu2F9HbgpAbNaxSuHmMJjPj71KGgZTJnTmhtm1W9zT33dga5Z2rSYgefKeGMU5zyUNGhAs6QqHd7SsPjFU34DU",
  "key31": "4tghYuZG22up5eVgQY1arNMqLgXvV7rfFbGbypdg8iu8uD2bFHZo3NWiWkLE9aK7yeX3KnH3EeannoxMgKyBFs6W",
  "key32": "J4ELCDDyNdVa9vKaQdfFLLDPrAq8dSVYWqGi3nSCY5qJWwNq2VQiJcsKa2ZvtexP69pcnasa83C7sEUHC99Td1o",
  "key33": "5oBoPPzWrs3FmuGsFF1bVDCJLBbx2i3VW5Se8BNKamT78KJkZUUX48y9Znr8r1UJsDwGpSsbxvjgaqR5NoKkPT66",
  "key34": "2pAz8oPUVZEDdcyndnGHkUTqbnjrUTzYofevLVrcn8Av6h2NkUumhxrigznPZxdYzWko2HZa3g2t1WBKebM2hENN",
  "key35": "GPZZu1rhfxZvRN8PTyVMKhqLY8wTvakxwhfBNCdAqerhSfModZCdqtipDYGawpkgwhrav4yA8wH8KfsTJYrU9Rk",
  "key36": "4rhwNhAwgbBBSiHTBVVMWzLhtrQHw2uPrQfFjPwEyLfjw3ihxEJcR3RHdpmzXQvah41iEVGx4WSVK4rP3aKzDxkX"
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
