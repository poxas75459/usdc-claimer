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
    "DFswXx5K4MxuiEJd4JRbDj7MJfmKxBtG2r7cu2zYcCD1ARXNnZSqk7jBWu3Yp3gkMNWapWtiKYwjfUSRv2TJhVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sdsHw3JZEzLxPwS1hZVTb9ddZmYBUnY2AMjzkdv98shkeayJvfTAe1no9tHpZYx9xG4WK9iyAkKd1xP8oE7zWu2",
  "key1": "4Y3srSWM3UsmUHBj7FC8U4J78tX8zKDStgAP11QSdcR6vxFm22Y5Vxpkhe6Li1kXwACUREJd3EGcwjFgf2K4zsSc",
  "key2": "52ry7BKAEEFbAtXAT3xEW97R2k7beMk2p6KwTMiwn7q3PbdAGfaiDbvWuo7GFicS113mEFbdmdHykGhNGsDEVrk7",
  "key3": "4Qew3vuxP5f7XY7Ro8RMVxmhWBB7hfJPn8JtbsVTPcXaaM4y6zwDyTgKoDmeDd9W28EWKuendbp3xYNU7S62LNZA",
  "key4": "3m9E7myadj1LH7yUnkpUTeCkqPzhHUo1MvJaC5v52WLNhUzTFtJWU5FNRw1NxkvhjFs9aicaV7mSZcgsinD4M8PB",
  "key5": "5DAHojhsEjVyuWjQE5JRHFKQmSh7bhHPZfwBjNgMkvzLPh5GDoNv2cBvHazwrZxKfZXpwYWuGGMtGx42UJniPVVR",
  "key6": "wgHJcDgNtGCZ5Hos9wkdegHBdTtryTBsALfAxavHMG2K4MzfLr66Up65jGE5wMrocYUJfyogfVNNS4LzhCFm4jr",
  "key7": "3i6bsD1LcCgE4j5azBFbhdL9mz4EGqKCMWPVnt7pt7uj7mNDwCwhE1kYpfovWqhc2JzEeLm5JLy6HfXZGTc5QoVP",
  "key8": "2baMRRMt7iUgACBKuZGh7wy2ZvZKy23UbRFiEZ4hSTqnAqitZ9aiHdJ9uo7PCda4kDacUTPNRFVPUm4BUMqezfQ5",
  "key9": "3bEw4bRp8ZCy9XGJXQJHARKgwN9u8ozF2uM7tTX3vE4dgiJszQMTuHQT8DxsxAM1wd5Q6yycuxj9zezCyT8Zzg1i",
  "key10": "2TVkMT2zzaW51mCXEsWREnzaRS4Vr8C91N7iMf9M6TwDw79nyNJgXe9Z6kskZAfv4wpmiezz7KC2H63U91u8VwuH",
  "key11": "5gH9zY2rqz7pf85pECTj6syBw7gCnuW1fLnmbVnrs6ngnjeVYgBzGzQQaVQPAkiEsAynBgiQHmNy8qLKyhCvH6Vy",
  "key12": "5Hr8z99RgVrZ7nShdw2of6FoTwMboqFk2j2UnuCpsMkkLm5iLLmLX6t8xNJmPR52g1HaadKTrD9dZSRUA3TB3YpT",
  "key13": "54yN7AG23mc2eetipS3BezVBtT3bT18bBd1Z6PPqaAwwE7xoRTSaaU3X2WaaZfcXZbV5kV3d1dWyJdtQhSxTASHS",
  "key14": "3WQD2MmSfC8348zDZ4UYUDWas6nuaBrokyLayyTT75fMrNhZtoevYwZts2yVgH4pzjihw7sH4zgGirs76nL7PKmC",
  "key15": "2sR5yCfx5e2NKsHHLpsyLkM8g1uqYifwggN21Fho9Z69k4VXio4nZwLeSS6qaA2v4FgM6JnCu6gXuNTm2wAK15Kv",
  "key16": "2LXgi7u4BuSyay6yQm2YGQkJ9N2dunHJ9w9UQcmp5fGdhi1GTCEPRR4zW9GApTtuUoDEMY51uWPxE9FUzdaqYHks",
  "key17": "5fFhPdbk62NLN56scy71cGFNigJ8KUZYS8sa48aVgTA5eoe4TFEFLFTkEFDnd8f93LfUCcYttJusewmHzaM88hDE",
  "key18": "2b1rz7cQgwxnwuDfL9c2scT1nqYxKcd4MbP1z6LJ1SVR9Vhzn46MoDZ6QbXaAfqHMcbHdCKfdJspBABs6APpK2um",
  "key19": "2CNivYrpqFCn6d74bUmDERYQPPW9UhWcD3UU6rhGsGedL1muZrZznDntiayziyxugkh2dATb6Dgx1RPfrQDPkNEQ",
  "key20": "5WA8Swa7ckp4Yz1xnWpsqHwo1V32pr9iSvRZKF4hhsS3FxPbUUyjrLjbZezjztUB7xgxL7e3DHGNuzWzs9pZjEq4",
  "key21": "4HkFYCNnJyk4d1oBYt7mG5Bre9DXXhzn9HX1RCrsikGJT4UKgYL6TigXqUiqah9TDH8NLdcAJwaVZv6Ji4JU3pU",
  "key22": "38FbromfgKUxhzcqzQnc4q7oj2u94qo7rcrpR8GeqazEe1DmPNXmPEsFVfDSA5KTUDUhoGnhCA3F6h9CK8Qh1cqU",
  "key23": "59y85rYk4PNMkyXcpz3Q43mkrnRKr4yvskg6YHn9ndsMuNuxxxW4jQtvEtJBJocZPYaU1aHC3fqQZhVdEES1PLd5",
  "key24": "4XHCp9wBQYUTvXE5ZY55c8Hc3vDw6GxfM7P2xgZW5Q2NhwAjKXk6C4XXGxr2kgTXWy8yY3XtNG9tRJ9hgGgLcDEh",
  "key25": "2c1EzK8aomdfteJoRVi5TgVjEd7NUyQGXedw8VrdLJpf2UTSW2gcXFvZdKbRJC1uRTz9nQBe9CPoNDoGy1TjusBZ",
  "key26": "2MxQuj5esHx6Jo9J9YxvSDskEVfJzGoR6U1kZ3tdmJuNHh5G2GCLQo2DZnVeC9mb79W1MFUMccZKbsoY63gLo5yq",
  "key27": "5rraxd3N5bG61LvmW42VQK2YLTeniyawLUhuBuShN5qqY1f6ngAZ2p1HGqx1y4enjdo2YRfiJS8JHUsGHPi9UH1r",
  "key28": "XELAi3XvexEVY53CNico5J8pcefXXFgYi4L9Wef8SxT83ewoxxzT9rrr7wsrZLsmVtfimfbgq6QEq8oktMvPkNA",
  "key29": "FiXvXquAPSjE9doVzSo95D6DhtEQWh8WeoZtFDVxLwToM9s2i6Xq5uZAnbBZ5D2pNbhbojibU2D7sHX1Ef4TfKg",
  "key30": "5ksFqviXiTzqaNsVMzQbR82swAKtJk8E44Syu9YT4TeGWStvZcXS1QwRjAoUd5aZZobiqa2gjNxQvA6KHBQeQ3S8",
  "key31": "vB9JZNcNHx3inkMZMwWmz5H18QigjyFe447k7f2WEM4MXzsmg9Wx2RtbuM7qoMbQowT2BbUjHr54cGh1gkP45Ly",
  "key32": "2VCDqoX4znXFbHjxqEfDikqU9uCnPyUcHdzET2oy3AaNgbnGfkAetqUyA9dP6Wnr5QLWjT3iBi952hfhJX87bbPq"
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
