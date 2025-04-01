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
    "MgdL13yBPxtxz1kU6T27MjXxz6brAFsnqZmQaByhvwwLR5NvshS9FoKsc5mxHWCV5bcoCqxgcALYSyAQPFMmKAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NPz9ZNDbuXfrvmCX7iEb1xnuDhAJAU1b3iUvWgWYZyMYJuRiqPjstvbBQszZVbzuYcBN7ddw73SJrkcnCay6vtS",
  "key1": "3qt16CzeSSyq7FRg7uDnN3GHJoWdDbncmD49he9hCZgBe6q2h8hfamEUYdg4U5uTr2QzE6U3ruFyX6d29K4HKVej",
  "key2": "5EzhXg7dFCTjz6L9boFGx2QvdqZ3Fu16vbXiM8UUevU75Yj1ZV3zVau5G7g1HKUedwNLXBwn7kKr4EognVgZTiwE",
  "key3": "32LN5hNHdU7C3fpp2RdpnJDYpxJmMqp8zYeZuZzPyMTJ5HUAL9z66YKYVJc2yQ35Fj2iZs5git651XKwuuY8PfKG",
  "key4": "f9G6LDjTc8zG4F7mvxGBK4iDS59LMhTn6teFHEmvyQPegGUK4gmNL5kq6sxUmcCpmCQuPbx28R17SZiryfaX8LY",
  "key5": "4j8w9KWfZMKk1PU4pFecS1mz87vFUBGRtnqM4JwufZ5SzkW4CGTfboCxEiXVFMdujRk8fWHTZ4zXNNfZ3ELuySHU",
  "key6": "3nmqApmwLxm2syhqBWviYb75ZZzxDXgwsCxKzvowF51quFw3btiY8Hjmgk3W26G9kzTYznUU3FLAEFFBsj8ybxRf",
  "key7": "4xNtYyUX1d6Bp4WRbXwhEEFe98vPqqsHG11iBgyK6UtqA1TS4VJvAimKTK3eKSw7ZWXVdAtSV9n5GmPpGwcbL66P",
  "key8": "3yG1WxcAfQGGwCEwgzgcDnWw8n5qb3V2YNtas9Xa6WfzW34SsEqV55FXfdWTRbvDvvVPpnv9ZGVQaC9fVPmSqpJq",
  "key9": "4ENnuZbLXRR2kN7jPxv3fyTKSZHAshM9jvLi67Hv84RKMgz3yhvaAa6M4dJzMJaFrD4r3K7scKwPhH1ybQ26XAHi",
  "key10": "4nnbjsNFH3KJhDpZXp2NcZedppXRwGo14C7oYqj1GtavqChaxVF46P12rcwVR1sqBzGGmrtC5Y4sRKALRCDLJWqu",
  "key11": "2NBXJUfYzqufZDwnMCveKGbwcGTVDghbGEafwiwDiEyQSML3Q2C7z3AUxX1hVKzK6RGTUFGTvqxP2TkBJq3sEETo",
  "key12": "pvt2WQSQPPyBM9rmaWhfbnD4B6WbZZGtDckPGFyDgxivy9wCVddXWoKwryw45rR9nm6GhQwRniVUEVCdo3YhiQX",
  "key13": "4x5sjuw2zbyUQydZmXjX1FbuZAH8zy2mTsgaZNWAgWfgfAqsDfXxinfHkgJmwAbXLU8Y5DjEVfYAfbHdHnB4rgq7",
  "key14": "5YwHoeY6ejW6cbnB9Te6miKgRXgbMmeEZFeCmWPp4jrNxUQKBpnt5E3VUL2fgZeTJYHSKT3kGPAM25F6LnFtbmk7",
  "key15": "45dAb8yHhTzVoSazRdLJ9KCnC5qVAyXqH87qyuwwE7YivAaYC49fKWPmEAKitg3MbeFX8kB5xQ4Spfn6Z1uBTgYb",
  "key16": "2skprjcMbFcCtBgMxtjxY7Ww6Nop22HYJ57Bh2eB1no2YtV1mso7HgnpSjZV2QvX6cYkNUFNWNiKvpW54d9pmo2o",
  "key17": "5svpSwaPXLu7TH5DAgUpUTURAnC6qKaMy9mfpkB7MezfCrFysZw1ze8yrGG1QQZ3kTeCgyMTHkPab8EKUH7jqwb8",
  "key18": "2fY5CoREedkpjD4k2a2rQne1w2fkAXPXPnWd677dQuLdgDj8FySvcHz9yMa7GhCaXWZ6cVxwFKm4kAXPGe4yA9NL",
  "key19": "5vGPZbqnC2TvxSdTEppKK16ALJBTydNcQa6qK6cQv9HV7C6bDDiXAbV2uJAqqTA4CL1eFEDWDAL8wKSTKj2uCggx",
  "key20": "5qdWXeTfmJTYfdJ7oKt2MgiWqjGzhpZaom7UU9bdhGxkW9RoPE5z9AoH1mPqUqzrziSPcAVVTovE8xHtHd3nrxmp",
  "key21": "2eenpzGtff3r4KaQgVUHU4bLH6YiVgfA45wtWbrjBYrk49aMvXoQhWHyD2m81v35LcgSyvQBX48S5JUvj2eraCqh",
  "key22": "5FZu1A1M22sJMEEZmqrfojqGjPXohsgLXXqpNVWugZ4nSAWKE4mhz7MiTBzD6BrwG2az7Zmda9P2XEcpwVB4Z6NL",
  "key23": "5vjF7etPrfbn43pJX3dwH7L3DdBjFkvs4UqKZ1CZEtsDGstb7yPviJsZxuEJ28HRCU8M7MrMB6wsk9J8Md3YsXAH",
  "key24": "4acNYKsCc7SsfHzS7NKJSXpscDXfhSkU1HNzxvJBySKWkoTNcBhWnUNv4EBYJkDrAzr3pFWk4QD3CBkG7gaViWa7",
  "key25": "4AidsJEQ92nrYMUiZkbLDnkk2WTSjkjLhmVnNo2HBp3KpF6Voe3hHRQAhPE3nMkV7KQsgxKieDsCvUgpxRnU8SiW",
  "key26": "3wGsGVEwjyibzMe66ZGUhiJEV3NF1JmZxQWTLXbL65N8NGz6ycUPAsgCfw2gDq6zzJSMQDE2KnYDQSX7pNQX7CF3",
  "key27": "JCrJY22HhRvMJHcKz3CSue2sBEBy1KtyhDEkFTf1BTuSijd1dPL9ZdehfU4JC79Zc7v8nqYzaufRWwj7HMYACNq",
  "key28": "1WuBrUrmxNEz2PbSWETRsvMkqPcfT9n9zfAu8QRmK5bhqikwKFWB6Xcncyvdjo3EFvEEZafCD2ZoindWiTMtcuw",
  "key29": "3KhdDXoJdWS6bz2G6XjXsD6QfbHCP3CaGcYqFunZp9fYmiYuAkojXwo6yiyuka3TrWDu2g14AWprWBcY7nefmzQJ",
  "key30": "aJcDYU7LjTVgcNuwr5bCvQBYy5dmzAxgxg5RASGkd9EicdZpg2Adh5vCXc5GpwX28BdiR5pzGGPGsqm29LgmDYE",
  "key31": "2RZr2AnWW1mDSNMmjtCvEank7LJRVRbJBgDYnpbiU8fpTdXcW2W3t7yE9FZXZg3enBShdb2z8WYhDox1SN5XFyMS",
  "key32": "2Z44waXiyY5CX9wgePifozGGUAei3kJcVQq8fdAUWY5w8QHDYjZSjfRFE6hRW5GN4zrnzciscEhB34eAJemnp7vq",
  "key33": "AKDhMJZst96VevxtP7QSj5eQr4uJkPFFQcAvWU2PviMTr6JDVyLP3LZKCSTGn7HnB4GqLXhpPdgSXs84BGsBAJM",
  "key34": "2QpvLcHowKa6YF9h7TRydVrsjDS5AVNuh7rgr1vFz6uKbYnzLkQMLVQ8txbzCbKbzLeB6z4oR69voPje63zQWRBs",
  "key35": "WftxuiHdgzcPh7N1dP7UQEyQAxNUqCs9zXvtPnDJqEDyn3eNWhDh4ymDbmoRpRg2jdDWdTapxta5JsRKRjoPNQW",
  "key36": "2v6pdyefdKCNmjpm9RK2HmDJFAjMNgiy2BKgnDUe1Twg9agGHaAmVsWZ6MRMa4Ln4tWp6M38mtrzcQttxdKDkcsC",
  "key37": "46TDwRFn4HbfpthRwCDRgKRcUZTSw6tTvwri5C8y3yMyTksuNY34WagcQDp921iVT22NHi1ZDQeQzy5hwut6aWGJ"
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
