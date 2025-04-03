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
    "4LNoyGfzGmcTqCm4mKTxJ6nFocyp2vvj26wWhtjeqkFjExyYh25ZGir8vguEEAXKfaSwoTKZDc64ad3vU8c1yTH8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "djNqdVsTHZfLiuHYHbEfH16Lg7W6wdWrTLyiGGsxtHZsu2iNqkjLGK66WKHp6hnMzu9kWyPNZjCsBhHCy9iYJFU",
  "key1": "3hwM2R1Gn9CsRY8gurXcHbnrzrwuNgVL5UwyJDARYDiBjtYtL9YMgchuqxm23KHSULXRN8FGRecSDxEoeNg24Ra6",
  "key2": "dAdq3rNsozv3pn99jEGkT1q3ynrYfzkYeuZnmBSfV6Fa4bN537p2LhTanjWHZqZVLj9VWVx5tt1G22Bqds86Pqo",
  "key3": "43qryc8dT1Y2PXJuH7Z2vCce3puGTEnmrQa8yVmqQdbWgSxZMHvsdttrLhsuivbTHNiAkvNwVyadpa1nhXjnumDY",
  "key4": "SGwUHsFfMvBmM45c1VYRbMuuNLJ4zndB7vnq49NevoQRb5P3j7ZZjiUYnWqXKSGeWCsPpjUjyc9Hf7kEVcisi9y",
  "key5": "YA4aXD2RdD1cCcX5LwNRJ5cGpE2dsxuX6DRCkgvRKDABkGso2TVzGHpFHop1tF3LEQbS3uM1ovTJ1fJT8GRwvvF",
  "key6": "3PTKxKGBug9LV3ciG1TcimKhv2ryt68tho5SEzSjMnuw4Z5byWda7wqRpWkUpgwwCctFjvmJJHEa7MQarAMDmXxQ",
  "key7": "2gNZxrXEf89PvzU1P6cCG77pwgNbfA3o3ih7kNknmYwysxYSmKSYv6refdDBTo7j5mULFu9hevSfxZaZxM1WkWrk",
  "key8": "Xt9QFH4LYXfr9JUTZec2xoJxUKytT9m4Srq8CcXQnKtrY5KUYHxa7XD288Ax3ws4VptvDqSf7yf9w5MZkJSXvux",
  "key9": "5irC9Vnd7B6s739Bz45jxWt5XFiSSvLbMVG4yKqyPxM7Yre3VgxuEDxbmYhUmRHM2tQbdd4W3c8TD8LEeF59FTVN",
  "key10": "4auYgexWra54hPhy8yT375PgYAnTsbi6RYmoicBnoyshE6t66e5syiqGBAMpLTtziiggCF4WAPyDPzxswwag68LT",
  "key11": "5mvpGmE3DGNTps2DW4YXTVijBsvJcJofSPCqoXNUGwRd3NwDsVG1dGRK7ABu4ipy4WyU8cnBYA3WuAK4ZhWuBrGk",
  "key12": "3HsbzcLdXsTjUAKMwEvTxQycUzCFN3nFHcCQHK6z95bFKW84nxfp9tou62dmBnMcSF1sD66RKqHApCGv7iq6wwfh",
  "key13": "2M4UFMTBEnxNb2T5f8eU9BySBUobzfPoiYZYv4rzRASxeX5qjcv6RVyjB9nALKdMtQBUXrk93tpb2CRjVfBw6b5i",
  "key14": "xdmUZ6P1tixtwRHNfq1ybogMT33GDQM8Kjpe6qY4fczLnPmimWh7EyidiF3F4D3aKmF3nSa7x1XxwN1gBAN3Prn",
  "key15": "5VFE48us6EECtkmsQEtfK1mqMy8JSbp2BSDz35eSQxwEjApjRg6QB6QXD4qKzDxejdU63D1FCSSCBYYytgZ7PkSa",
  "key16": "rXbDhu1jp7DsXEswY3wnPg5vZDR7gkkvcdzQvNEkDaqDxCecL1pqfQu1dg32guqr2DoTY6LMPuCu1rPDuN1tgjh",
  "key17": "5Ppq3a5Kvrh6GuRfTFN3xUcimbXbyjGRB4xRAARp8rDTKCwuqVi8vNEnNnuPa4qsgGriQacUPTkS9apjLLqDoJZ2",
  "key18": "5tf383mHnmUyYRggKq7RFZBe2RSXEm8xtVQaLBjfrGKxx5s7qVydDdbdwGQSyaosqG86rZHHab2yXB2DUrxUXSa9",
  "key19": "2vKBrjLLehT9Yycn5HpivXHzY4WPn6JgBfWZadcGZfcZ44Ln6vhJNK6aEE5Z5aq8SCQCBNo6XtX9zJLmPvecvLBN",
  "key20": "2tyNtuvGNaN7ZZpWGu4V9FaNUNJ9n4dx3oa7nAHC7keFW8ECU1tSrnF9LGk7L2AR24BgLVymzbzKoptoDnuUjDHn",
  "key21": "5TusF51BYL1KCgKftVpHXsSVESt4pk1SQiRrzuTSN6NjzVYZyWNUAdDRCBZbKguUiS2iLncWCp33HWNZkwm7autS",
  "key22": "24fzGpaBJCQzKosjex1TEVgMiBopkVcvgC3WeSDFiy5n34Vw9BS6V88FyTqwEaTdHA2ynuD5DBMt1Hd6QhCnxeXn",
  "key23": "4P5ziiKVaUg5kA99b7A575S1fmG4w7KAHkt5ipojdUERQdHXCXNhALfGWHmtJxHpJoFE3hAhTC6ndxjTTWkbouGH",
  "key24": "5QjnfYVuG4uj4f51wbeAA5yYkvs6E5kxc18SiEVqbtuuJ8DV4XP6yzZzLaQByXsii9ndfvoKnheC5w3ZufqX1mtM",
  "key25": "2JBj8tDegnjrSyxyLNfodMrZAAc64rP2xujpfmDB93Xi1BnHa6eLxHTc6xyG3qWgony3QhvPk8RqpvsXWQ8vkeJe",
  "key26": "4oXKBH3tdSySnhJGZ3mD2aqPk9BF6DugrCyUpWkCF7YSMGWvKiA7aZFKXkRmrDRXSLLentSAqXpZo5TyWKZ6dXB9",
  "key27": "29XYFzLqoGaGHiuReohExuQdxcBU5VtMdYTUV3dtf3xSnJ2mzvAhLDEk4cipy3vJenp9LLPFfeuguULrQLqM8vqB",
  "key28": "4rBspK8jSCNGcCv8CmWFzmYjzsLeyRhv3e1Y7tQUNyHAsbTmtYkMs3ZAjYuQZZtZuiKJFqq4EZCfC1BpfteCcNsV",
  "key29": "5H68jFiJcFgNkiPjFWzkxNRG8FUsv3dEtQXAHH9iwG8qHK23wSea8kf6vuRrsQN8kMNrDX5wJAiqWGp3oyqWJp2C",
  "key30": "2MySpwG39vMLHeHfieP284pGSqN8vmzMmSQ6ZjwYxNpmTuhdzWDPaWZymoUojwyxJeaEQ8LxgSpfV6WDwLLiTU4L",
  "key31": "5fTGQrKu2qAvHjBsPkU2cSYGQQ4p3BChLjmMLkbL98CLJ6P3EvyU4pgELnoaD2B1sutyoKQTA8rEcSCXChvHG3YP",
  "key32": "5JF3SXBpTsjZ4Y5VwosyCYwqFarENe9GaeXsFvEm5dXZrSYtJ5TfJyLxh6295UFSPnygqeXAL9qgsvtZk7dvGhyi",
  "key33": "4Po5hT9jf2JR8omTSgPmG8KtJuC7WXX2fCTGWjR4iAC5XQwGwQeSgL2nRj37ufFRMj1segKXTxp5TW1MLUidbNSt",
  "key34": "2nvtpGnkk2krwZtxymDqCHop8WyLUoAYT1esRx3prkVkRJnTfC9uQ1bAXGENWZq7AgmSELCqMLD2msM3S1FTsL1G",
  "key35": "3M6fJaQ3N8urB8uBXWP6YNKfg27n6Z2Q86rkBR9AW4FudLfVPtGkwu91aQ5YXGjZm1Ah5WPiR3VcPTLCdMAWV7SM",
  "key36": "hG974WuZnmfL5z2qnj8G3okKT1RCaJNm2DY47imx1WBzns3EZNKNhkYqrcbZzubRHuZ7yJqvMNARZNHM3BQnF99",
  "key37": "2gByJ6e4mwfR4bGhv8GtrK1gVeaHmhgr2raC3mA7mbE1GLD6M93SiZFiSM2wMPGduYwaBC5fhPW5RoXyWHWVtm43",
  "key38": "4UatAZKWbEjEsbmYErCYy1BWK9Sz65wqLRixdjkXTSeFr9q5xVHNXAAzmwtr5FM2WAgwDHWkZYYprz4uvBxjcQoq",
  "key39": "ymUC1FeCHzSLvNZwMP9H11WouhbpuDP4WhguRkXhHhDDnggY8DFBw7UpidpRvRq3nv4dQ7UznT1kt8f53Pc7XFG",
  "key40": "3d8D2MedcgsUygNf5Cr2253CejCGK6o7nGgDRjckhcFRpCrRfFxVdyir5S7fQWSP5j3bQTHSqQh9pZ3Uurrnp4GL",
  "key41": "3RxYtuu8H85A6ZBx2K4Z9YpetKQGabEqtzm6LN4vBwRrMKV9cTxnthuEUGizTN9BZN98eKxR9UXbWvaax29QtkrE",
  "key42": "5zk5qmwih18ujhGr5aoyQzHXEBhHGton7BdLR7ECG7f6Uf597BaXV38noaQ8gwmntnevXumxzwqE1wkH5cLtdeoo",
  "key43": "2qixVZ1i3aLyXDYuCSuJtdFxcHo3pF9gFHdiSuG49SYxGc31a5BoFeDBUUcxQ3doXTLCbdrfiSTmkEmUAMd8ujLv"
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
