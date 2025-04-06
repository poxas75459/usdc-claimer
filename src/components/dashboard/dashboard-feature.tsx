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
    "4eRbmFR6eSekBfHNvXEGhxpAgGoQVwBk75z4WHz9XU4KPbWBpR357gHVrLeSVxXiEvJ2uz9zNGkKgX3ig49apZWP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GgPi4bbSDcKnrtzo4E65Cx1G7UYsmps7hMEnWtnm2Yf7U8WyzLvKgfwXvH5C1GscB58LZyoj9HJJFR236WAjGB1",
  "key1": "4xMcFCFAQMujdeLdLdkSksFUcJzMoEcN3v2us3XJq7Bxx2hGiYfZ84E8xfLSUTC6qdNHQbJjL18sPSwjQvPWLDGw",
  "key2": "2FLLWwDB51j6mdQU6xP3MWnXgFoa6ZbtuU4WnyGevvBGAqSPPQzfj28345BJbvM94CjNQMtCp8HWR672pK234Sc",
  "key3": "38rddEwX8tB9fQqwcs2cJLx2S4Xk8j9mS3ZyefvTJxA7jNv6fde2wDoaHXZqKELfi3nDPkiFmp6onQmqMVnT77ML",
  "key4": "YbFkbRE3LwzHDdv7BvQcoZWZA15Fv4VpgXwZSe2Wxjkmc5YqDQBs4GsMJMv4EVNENWHx9dEbQUBVFYrUhLStc27",
  "key5": "51FkCPtRrgNVoC6XcVsZTtcWmLUosRNXozDRjqxziweUXTzvufkHJF4SGKVa22j7yefwoiocoN2RuESLKhrYXMrw",
  "key6": "QkYL5QGpvEfQs6UN9A6G17vhPGDju73cYH3AaM8FdLsLcsqErhdi16TFfkik3xR9Hi881zMqn934an3Pdgapt3b",
  "key7": "5RzNum9ie1uuKemt9suUQkEQWeNCeNJ5uvzcGL27yuqvHqtvKZQ8DezdYFASzzW26X4yU5RGLfAVygbfLayWAiUn",
  "key8": "vC3nQk7C5apDvv6APouABfYvvjj91RVxJbusvbbioyxEDoGsg385cs8DZ2cLqZ826LUw6G4qsqZPQYZYQcNdjnB",
  "key9": "2EFaxdQEnsUWdpJVpTvzWQLg1mzo95BwnhszFvzVtYy4mgmymNYSLXV5en9qmmYua9SHVySxvSVwFNk8TXwJ9nHJ",
  "key10": "3Np5HmLPxLmmekwyDrcVUNG9jV6L1zxMzUw6FRyZgeHkZNK3CanyjpFA5PJP6UBAG8wDsqZvWBYQLrpvTAt74zj4",
  "key11": "47bPdWuGZUc26CJtX6HPnLaPeXuddM4MQzVxi9eGBQYCbMD4MktEbx7o6A2XmMmuo1DNooaq2RmxWmuXdshrfH8Y",
  "key12": "44PhJgHG9fRAFZzs9BzSs8raVgGtuoxxB6KR7HhzYStsQJorU849bVxiD4zeSQh9DsQPVg7MjaqnzV5bJgcy89ip",
  "key13": "5KRw5ERyXetj4QpK6o6tsYZKvNineea6SevVcQpo19h4iUXexK1yFRGDLESdbx5Lsoy1kfuYruXwJJd59gxD9c4u",
  "key14": "5P3nq3kH7cVxCQErCm3Qk1XqKYnMfKX9zxdqr4Tpw1LmSwt8bcW1Yv26fPikmGKwYy8PwsDpmyJGsJzzT9u6uuqf",
  "key15": "2kLRLz2MMedVnfbJ7HYM6bHut58BSRtxzsDoA3spz55sb6CNU84oeybkA2VZxKT5JAs63PqqWmqx9vStJycYU9qu",
  "key16": "a36rK9CerR4BF7wfkS34BDDGTaygD3jBzMkmuPGJpU6RrFMyvv7E69n7MvYo3oTTdcgRzNoHa6fPoSTRg9KtmmR",
  "key17": "4W5f7ysDRxeRJqAfHATgLEkR5uMxcHPPvp19aDJDXd4mCtFNrQjkg8vmwZMNjbxKM29R1TLrs8wvVprJXo5SHcRc",
  "key18": "58Ltu9ueYPvXzxFgj8WYHD9xHjGdo5xgZ4muRPtq9LNhzbeSjGy9ewuzFFuHTzTNTopfEE685YpHX8gTGZvSnmhe",
  "key19": "3Kb5vYERReAipipSzYoSnje9KpT7STX5228wJWyMymvnN5L3FacAY7c9AvtcZb1FgAAoA8qw8NJBHwrTBFp1wR3S",
  "key20": "3LaKhZ3xJkwrdxXjZ1K6jRysUJDUqXoVsE4Qxxq5sJ7rLUBwJgC13HToSCjd3wmfRqnehaNrcaYPkAuA4KB2F8QD",
  "key21": "64xxcUvrfw9yApHXZ5mWnWFSHWfYH9VmyAxWyX3fWs7BKAXvSpzmBZY46w8GtZXUt5TAQNKsLauUyt4sv9CihVmv",
  "key22": "3hPqFEZ2DDLWgvEFvyRy8xJN4PdKoY1rrmggXwwjaReDbnDBD9pMv5uCzh3LB4DPQjfUE2fFjhLANJxyagr41c8y",
  "key23": "3VsvN75jCL6PjTkGHF5b1K2rtiDK8oZ2X2kcQ6Dprtat58yDLPJijB4gotRSn6xmmMcsp7W7Mtu4iBeHpfNCCgU",
  "key24": "5mpDyGXFiM5tJGyudAtxPQRYRV24XdCyedJgyjCRNhvoptFz58ZnMpraYELsUYebU1qChYGmmnz5gTiTjkUyBw19",
  "key25": "5busHBDrchPNJWXuCdQS293NRXEhY4BN8mJ8vCrpbk9DCf5Gi8pZAkao5bzSN5NTaLmD2iMcLyRXWUJ6hcnhysiH",
  "key26": "SU9go3HruNtcMWfwQgQQYVt6mq1ZrjFahihd9KwnEVumb5LtF5B7Zn2NXQNbeaDpzdSb96RxBy4TGFHbeje8RjN",
  "key27": "66pRXniKehKeM9XpZKTd8WdDL5SQifNWhR8D9u5dQD9XqmN2MtDdLpqSqnnoVRZt2p4ycDHNKZYhZe16LwkxyjMq",
  "key28": "4izJTpLF5cuhAYkVrQkcuFAbv9LWJjpPzFUe8u7qwrBTB7893usggSfTA3vT16muZhit9fqRKM8KrsRGou8j11sn",
  "key29": "4nftoosTmbNwnUgDEbVo9FY9SJ3NrFdAYriwXAinX9XNLRCe8uPxJDS4jopSxqqL9BNEfUUwHB6bQXPkFgKpxwUt",
  "key30": "5kzNbeQiJWEihWnqXnw2n8zd6h4CwWDejTyKF4iStJJhKvYYDZY3SVjmoVzYcZ8LnvFZjtfVE7Kcug6kqg91myRS",
  "key31": "bSs1PyT84eok3ePNJRhkx4m21d84TLToC25U4yDSXjMewVGb5vBidvFNvpiArAoF18oSXKCQhcVWZWcpJmVrsmB",
  "key32": "3Up7aoDQ72jfLKv9gaoaw43PJcFLfUWBwRRhZgrcauwx3eZUqgtXrdNjGcoELDpcz2fQb9Liu3Gu5iuqUKbzXiAY",
  "key33": "2STBH3BywQQW8JApMp8d4Nefu5wHWe2EQWZPAaXwdCzKV1crWbB4Nfc2LhvKsNG6RGT6J5TEP5zFbi1QQHQMBUmn",
  "key34": "5FdDBx3RY3b1s8dQ8ML95WRXtn35uEWWvU257zU2QQFqqo9ggfydMeeazXM9VCS2UgkPWpBRDJgoppRsqbmujCWb",
  "key35": "45eMz2oSEaPb7VfAAhWafRsAPzG3F41z7VSjwoAVwLSNcXaFeJuosmf5pACFikwXryqY6tyc6EGmA2AGwJCCV3aa",
  "key36": "f4FPL3UPkFEGVhe9zCkVi9FKSvLPXcZB3BuwzrKrB48ReDZrsSR2M4oQRYhFH45WJGCUn5hNmUFyRY5eGM4T4PP",
  "key37": "4a4aG6x25hayEYk4Tqg4dTwSDBP4CBnYzwT4XXvG7K9xZTZjUXKuWCYwqjwvx1epx96zYYfbMuWvFnosh97xkLky",
  "key38": "KBwyHih2JnFh18tuAzr8QYzmSTUWdm6vzwxKcHm1XemBBvZiEFyQQLpnqcbgB9CStj3NYqdcegqH6H323T5kQKf",
  "key39": "toB7LShBe5CzDdcRCwwznf2Ku99aEs9qGdkBHuRW94zKLZ6Tc5qPcyGEamZau62dRyZ41WsUFE1TuCQx8Gr96Vy",
  "key40": "2fqXrNa37vMmbFgKPY8HsAEs5TkF9E1M3iWGjjU4FtGMmQT3YNBAmNmewRq78uMeis6AYFreUwSUoR3m3m4g8KbH",
  "key41": "2dds46vBSjW1a892Djt3AVuAXqq77MDqF4tsQVgzs7aGGkbhEuZatAjiJGZ42XTvCTs6fCgHimick1cWrnFJhzGh"
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
