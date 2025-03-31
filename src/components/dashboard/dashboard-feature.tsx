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
    "hUab2D8tHjmXjoqPqQTwvrz52B4BsHEn7hVJk8xb3BsxEfptXbVoa1nJCP1q9M3KXEfnaVS5okDuQ4i5zbREgrv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3M6z7aDfej8Hw9GSxWEt1L3aWmQrCYWgeSLQUJe2GSe4N5dyTcHKLMgPMBvhgYL5GnFZyQEWanvWCFsSHozedxRn",
  "key1": "4AMqjXGEkaFj4pWPdvE7k7UxQb3ncjkxmRkCAcJepaYRBWrjj2NN7S7whRAc2GsHwR56gTMibK8TWmRuBu3XsR93",
  "key2": "4GMNGUDAPp5Gib7XxuaqbwUBQ51QVZvDL77vocbLQ8Fqgnz9p9PiL2yvN2Dw6rxHuHnKsGadccg3RU3eBaY65WAT",
  "key3": "2XujGp72BhHZSqbLcjsZZjfZZUXnhAmu7PR58PGR8KtgGZwaxfbEfNz9YcA5SgbsRMKMpgrfA9A21sGo1ZQMemGZ",
  "key4": "3SdiNfqdsBRbnN5CN4Ln1o2NbPtjGT2DHCLTq3TJKnhqEpzSGezo582QrbxRprB4Fp9ufsPoNtRz9oSKysGT8oQy",
  "key5": "rtKFAviE8qUVtvJ2eSmG6mS3ma4aZ6sYRZjPYyGqjTMJaaeQFi9Wr4hkz2seNSU8Hrv3wqY5cKR52jTBGzUJz7R",
  "key6": "BKrPjCnrhyrYYLZkXELxjUFHAC8MPTNXNCQigbJHCKQDdFwiqpXKHsgfd6DdgeQPEcZWV2DfsW4BrPpipR8ghwS",
  "key7": "BfBX8JeGAGKLMpRcZUrdKsRb9oeJau93AZ6EVF2BSfQxX1FxZrNG6KWiCpyzM85kQQz7Dn1rMP4zRP3cDDnFZ1B",
  "key8": "3796Z3HiXU49ho4siqHt4XEfrCjWCVTdjAFLaVEhoZQAirA8D3BV8otx47y8MiFhqTMSer8wHtn4ZwUyYLa5tSH5",
  "key9": "3NtBqU2zgXzsLNfVTa2N9k3r6nyxzdbGwCZS9hVsnh6zhH9jQjyj5MiHwnYkUZw3AhjpHsYBjwKPb8z869BTxQFB",
  "key10": "4MEb3gf8eAwxXaaYboUNy33rh8SCY6tQe3Ln9nHqactNtZuVKoxurKmQ2RKZ5v3ksrwf55gfGRsKGT1NZQYThEpf",
  "key11": "swhGAZm7PvB8XgAZQWbEnF3dTx56tALcndhA1ZUeSV9rmrF9Vt4LpMxn5SLqR1V8Dd8wKkika53vnqWwbRwq6cb",
  "key12": "23HvzYaoiYN2P42Ly88DYRnAQ2aa2M3fRaZDDNHQTKsGYABTfzFgQMeRChTNAq6hua3hbMMg17hPiG2AmSzkUQMg",
  "key13": "yQAYT8Sa4epmqK1DB4bNg7CgynCUwaW9YQ8yj2pp9qK2DvdhLAMzSNyLdYK9xeG3AM4CshcLa26NswYXqGH15s2",
  "key14": "5yEAqZJJC6k5LzUygMrtJWQzzTP5X6fu3dgpPEGSvv7ptCLZBdM48otLjnGWF9PrB1vvYK2Yr5w6VKL6M2whdNRr",
  "key15": "kLMQJmwgKUMMVadXfhdY8BE5h1nCnrarzsfbXKpbp5jG3Lrpp92qN6oLmjF1s5saFiMMKfAWCEPBJVmxPnP2JLe",
  "key16": "4d4zTr6KiLkPGxXmvj7C3aYFQ9qcH1appEoJ5vgHRK3xD7nPJNsnxWcieSjQMrwXTyMaM84u7JikFFncixFdrao5",
  "key17": "2n7QSrzpNUPgESpT7SsVhfVLbgzqw7A5C5zmg6WyP6yGUwA5cKY2JhxvaWzXBuHtW4rLfzWDieU9eg9rvsojuu7h",
  "key18": "Yc6LUkQU2XNt97CPvNFKU1puJS51rQALCZ4cqmVH8h6o8qDGtXpam7HcYCH2jdF4Xof3M316G2MdnBGTd6JJemh",
  "key19": "4SUov69bNE9yFsJDgU95XRGnrd4Mnk4jpfEbLqTJsD59v4DmLonsZHRoucd2AeW54AGXczEMxsbZgh5X7LXpLH2m",
  "key20": "4xCYTBCJWKnqoBhoXqLt9zSY6BqraLXyESsWecsnnkFtBGfu6xsn8Pu9DUydzTTpiQXqMuA9tqMPZtEPeK8yRux8",
  "key21": "4Lqcfc3PcY1c5iU5V2ESkApLk8AsPE3jJvTDpfGFKVxw68pbqfUmtwPajwhLMEdQYT9qRUNQ82UkTT96A4ySYxRo",
  "key22": "n5x3SmvbjMxT5jzCk1nesjWZ4PwChG8TKqR3q4LewkpUjPxUHcRtWNGX3ZgGPgEabSqPaniy1KkLh77qjnjeWsX",
  "key23": "4u8DoA25Jhc51PAYvy6qT6mpyEJwT2TMCm7RoBEaHnrCwLNjDGUaiM3h8ViNgX7jPEf4JXxdfZ2YmbqpKDNdRwGn",
  "key24": "3s9sBFV1iiS5aZnBBAGrVacMM1cQVYCzD8QRnSpyXahAonP9j9qaavN6ET1tDZJ7qMJtuPhLRGFCq8foBSmmYdcd",
  "key25": "bKRMn6wh9stekmCjG3SAp6eVqbYzUdUZYHuR61oidyWTqr7sVy5nFuN4yNwaUvwL6cDaPgxv5V21ayqfthhhyuu",
  "key26": "2Bx3NRAfZ7Vkjsu4iosKJRzSLCyiUmjypZjfbxGuhZC2pVmZh17Thxo9tF8TfzT7iVr62LzKCscamVAnw1oUfaL7",
  "key27": "5X12jaQsbgYWXM4R11QDgSMGBTEYk5QyykmMWenEm9mG3H52doj22mhTvoLQxqSgiZJq54kvaikaEh5U8o6yNLsp",
  "key28": "3rJNYdzTNL3HeNMuMtB1ngYS6EXekDKTSBCTvvWPrN8JGEbk8Mnvoqqz7Etkk2xDWiXySvcAyUmXb51p5PMYZ9qe",
  "key29": "rYjzF4cY9nWu8RHnzum9ki5P5ukL1MC3L3ESHBUob8zX13hGAu78dtRD3nWSsJt1Zgw9hVeMDtxt6hF4t1Bcx9S",
  "key30": "4aPNGm2HBfgqHPi2NtPk3QDE72dTGvVLndah6MTJDXwqy6SYtmmtojAZHftKGwnSUGnVdeG9ktoV56EBQMejVkxD",
  "key31": "32XJnjUm5P8DvX9Ztkhxg7p3oWxJ5ZvWe6Rq64PacyDXiA6pt9JbN67wt3CGK6mrCrKG7DQXmxWCsK9XZVPVMRqR",
  "key32": "pwtJB3qff2XNVMHts8WgfLhTCemcK1Yc6Jn2aJs3WNphJacTG4dxuYKTK8XffUcUvsKQDNTb6A349Ec8uJAoQQ5",
  "key33": "2JJiykRGqUy27mykprLcbra4mqukDi2ciukjiMprBAbojzy74BbWnV7ncNZG6skFmLmRmtKztPkR8nsxGxocJn2Y",
  "key34": "AfznJiqmzyrDwrAziwqC33y6e3z6rqmzxpEnxSEgfdg3avjkq84Uz38RXVbsa6KMJLHaHfUhpPKBqqea3emJcwq",
  "key35": "nbXksFxTuNeAUViSMZah9AW1U77fELSrE7dQppq9TAyLRewmvtzL94a9M6dhv4N1wZ2AjZiPYMJubRAN5Y8N5mU",
  "key36": "5zY9RcdeTtaiT8vMrE3yG2hffhAUJamhbkuwqbAiLqrzEESdrTVhj6eymvz4enDYTih9TrxFdFDur53dmtMPdypa",
  "key37": "2njgNPspeb699Dsqvz4jDCuXqAbS4hYf89WQnLB7e8uaJ4PBimN9tNXEqZBgKBUcHjvX4oJFUJkn7G3vGhBnnyVs",
  "key38": "jHnwePRgLXC2Hr3JtgwsWoN275wW5md75Le3mXeuGCsnD4DCFM6fFgDJi8eQm54pZqiTgYnUhRe2aQ8cs3mv3QF",
  "key39": "23mt9cn7ai4q2z13zth1sBL7rDFvW3zNRdaSncUtSHmKHHYVLa81Lbaj5GSdjDTUMeHDMVrkb7NbQsHFDkn12jPL",
  "key40": "4xVNuUQeSZdZH6FwBLJ3hdqpZeaLE5mq5pHzeKyKjeFpP1DxEQwHu2WXtXv22C5o5WzAY9Vc16dLYJe7tyc1Wi1q",
  "key41": "2b5bgnAXTFeNZc8h5rqSywcZ4dykPzQQ5fzLEtgCVVQE7KgRYLLswjaPWjHVXo8VYzGHg3h5k88ofkKR3jnApEAt",
  "key42": "dZVHJLwB9gBAgNG9vEgaYsoBFhUKiXTHKd52ndCpFoTGiE1V1Zb5H1p63heQbPAGujc3crEc8kPXTMSNfr1fBA9",
  "key43": "2aPpsoLpnnEqCWVkQ1ovGsrPLaxunNijaGUQ6h3VrJLPDXiRedRiJG5DsVt6xqoKn3yognZqRMXnjZpx8d3V8g7Y",
  "key44": "3ktNRF4PKPuwq7G5arWmFs5KPgewHzmFkGmYHZMeLmwUrmhDYWtaurK4DiXMTjpTXKyJ8Czgmwn1EGED9ixAKb8X",
  "key45": "3o3pEJ6Gd1qqFpaKkcULeRNzXASp43ZH3eUMQFZNEwDMS2Zkyh7taXP7fvdpd6YEbcx41Jh7NB77Uw39Kjy2g8CS",
  "key46": "4EoH62E8eCwgaDBJkSdYmcX4XNBSMKUg8kXFHqoz1z9Ts1r8mQVs5Wv983zp55GTcnf18RWuzs79a8u2rYXg239K",
  "key47": "2zNvtoZkfNaRSpSoU5Y13N2wedAtaqmNUAjqJSwGFEDJhhgGmnXdc2XU1vxWFr3BEMPNqDMvrnmHG84TFq1HvC3j",
  "key48": "5vqW9eppaCMDzeuJDMJVVrjn9NvWwC8sNBptiJj5nNeLGrEvacuN4MnQ1YsVLWqKLE1UgjGsEpei6RejeyfgNtrM"
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
