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
    "2a3SM7fpeQdiMKwvnb143PwUPX7iKzha1BtksGzTk7et1qtboWzqqDYoRfYPDyV9Envz3okZ8zH9tV5QgiU5kM4u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Zy1115Z7EUyFKg8PAvjsVnqsDFrkHeyQdkPCFWELedTHnWcWi2P4kj6kLNHMS63JqX1E51ajrwY6cfZyKweavaH",
  "key1": "2LYyMTcui6nAmdn3qgfQUvrK5JMCkJELR7uynRmpCcbzqPkwF9HU64kSYNcyn1Kg9buhFUMcgm75W95ZnVYWNP5z",
  "key2": "3iKCKv7eW3UzsDQmdSFDg8cPW75iYsbvAYwnJsLEQV8MXU22MDhbAQv6DEZ9FWC3NQJVGRc3pnYjop4Z4mHbnf6",
  "key3": "3kUP6agXKVL3uLnxHPNhaatKPbogPNjUMdc3Vcr6TENLFp27BTvw6DTbHg9614Gt25FvMKgg4fY1XmKDuVEcFDon",
  "key4": "3JNrgsEYVrPstrdx3Ujg48puh4GF3HfHcTzeRQrZzxxHx8A6VtnjvsBnkavwPLVCCSTH6mCPC1JfR6C9T8Pmf2Ak",
  "key5": "4ZBRWP5DNCeRCHFihJpV5yRrDdb4ceMFoZosPetcN7QQK2h1xftga2QTy5HM3mzSKR1d8AjnEpCWDusR2dbhetVq",
  "key6": "5qeToMo87RTj5gZ8GmuSjoKixpaFGycqe6VcCPFoETp3PLjdAgcsWmmhTaALp3beJqdN3bGp9YpP5FKsMSVDJcTf",
  "key7": "5K3YoW7TuynUga8gUUmHvQfzdvbv58kT5XG5hzvBbepEWytckrfwDAJ83i3GH7qgpgtcXm9RX9pj62tsZJdc4Axf",
  "key8": "NvaGABYyUSKrhHfiqgS5tQYQ7VtDVmmXexLJVGH9iwW3FDZFxSE2wWnCEp57XC9VncpMofR4pr3X6KFYLLYEzhD",
  "key9": "5TWdfyTas5M2iYVfNGBLxZZ6M7opEVrRocrm8y6b5grAAHarGxmEuzVtCDpK9sSUApDJFQnckuiTuVPpiP1sWzvo",
  "key10": "3k6hkwtc5cYTEMJsvWUj6goc8EeBvKWe82A7M8aiwXgAiF7Q8RyFkaB4UbykUkL8Pna5izRn3K9Mgk21EoUFhSeq",
  "key11": "WAriUfrPeXrRBJarNstuykXgQekKFFXNo6dK352pc1pSBEqUQVocjZs4szDca2eBWGSj9MPzNTns7C7j6ozXABv",
  "key12": "k2bmcJbaYfkNQXxewKBBPPLnMpbtCPSjZ6HGGRHtXaMoFB9Gy25YEZZuAjUqDeh9krKT51tqBXPte9LCpCyEDQk",
  "key13": "2vhybJXAnFioATxtVGZVgh3AbWKdoii6Yp9a8EmfnED2d4qS4nGgX4D4kEm8zSdxL5hNqMRYSK1GvjXzCX6sHXMY",
  "key14": "3kKsP5wmM2ZHL253Qe1Udmtd3i6aY4itqZrZjnzPESuPQtKidhjWm5qX8H2UTYr7qHToRPgnad7DUv9WSCwpW8GV",
  "key15": "5JnC3dvpsTkS8rzuU6NXpF7dZ7FFGXGUqYf1hxJB1SjNFi6gwSQ4FDHFAqKTk1K5MbjbfzAvaXufZAJCsZKP5xpK",
  "key16": "3tFZ8RSd8soynSrwG1WSx379PCnUjYM9RWURfGEHR2tu2ZURaghwb5npwALU3Y6oRU2xLT3DEUDuvAQnhnk1Gzo3",
  "key17": "3TJrw9TNho9NqJVcvCZqFiK76PLymkTedvfK1cTZNf6B3y9wTEJyetcJAvDxPqdmf73i81owjUyPMhT9rJzStiNq",
  "key18": "4f66vbMoe2McHbyDtTL1Kq6QTqUVt6AXkjLJj2mcX6yQJHiVkGbGPxs4AHNSUpRNJ5b3jzCmAJ877uwpWSrzQzFy",
  "key19": "5UVk3QporSkJAT4fjNCAWDQXWs91oT3BYHzbnTkF2Lp7QxPWYWgissf4fX53V23rMBbrUhRCUcxhArU4oiu6wnSk",
  "key20": "3KYq7EDndYVaSC4GtGEsEYfYX4JFXdVgQgiGAAMD4T4SfM1FtfmAsFikPaLDe3C6ongFZ2DHPBCGYMYzdY6zJj8a",
  "key21": "2eS8b3tUFVemFiHpyxQTctBGzQ5HyGwdWuYMAY7XiP3oxjvDvLnmSgEQPRu1pmwfiGfh52jqoAnvYbq3g3vJAASZ",
  "key22": "5GJY3akSFWMwvesD7qxCzwA4V3jK8EoBfukKBtNnpZGt1rtdDbRsaLbHzHeAQyRBQ5bgqKEQsaRuzbm7HEkLCLfW",
  "key23": "4TvYzHaXYXgKTH1M7ZgAVxrcUB3zPsBS8vAR6fvvwnPtoCGU71D18imRQNEJFUxnYkfivAZdoY8SqcbbhKKne34m",
  "key24": "4GnxakHyVe1ichZs4Rvz3iTQnpriMDXj4wXKujLTQzHfJNLakzgugVWe77itLnP8r2LNf7tUHwBewA9FeNTQMnam",
  "key25": "A1wKwT8YENY4SutNCZQebvhSmPoynRKusuZFKJVEd8hzXgVDhH7syC2SzrHw7nsAfZTYPoq6Mp9LhoWLsp4LShv",
  "key26": "2h1DvX5jowk3aUj14FHRLmG6bHuqM2mb9wBQpR1X8xmV5XYLoW3Hk3u3oDDXQzRhwYFYXg8YGByHKSKGdEv7zVYP",
  "key27": "gTEzquT5bBKnw5ZYiZhCkF2GRCaywPpqVrjL3qc5Dg1SKzZ9q4t2qJzS7homTBept1Gw8PbA9jMsKMYrqYjqrru",
  "key28": "5kwaJp8caeTXFbeknv2aotRRRLLbQAWAUT8Bynec5izxESC14gZtM3ZgaCkG49Z71iZcMTCzQXXc72UNsyzPYtqa",
  "key29": "496ar5EvXXBMm1uJQPkhBfJEY5EfDWorei5FDiPE5ETUvBahNLTgtnnFbZY3mKe31o7ryQ76nhdhPLHsWWbeXSYx",
  "key30": "2QehUPyAc3ZDoFZnCUs1JfvXcEvHi94kUQH3mm8tVgLzqVeXZ6AYzvFPzhnNc9pyaeXqGhnUSJgdquYD4UiLqjv3",
  "key31": "4E6DBRmtvKTruCMVEeHq3HXHwzdpGFrufHDG3SSjtkwWDgYyAr7u7SHditKqvFVAueMhePP74VotnUb24KN9qzSo",
  "key32": "YzVa8PQBDdtGLfjhcc6p4FzqsWoN3oeFohkFSrCbWWFw2E9dm77N6QYnwvbJMkFxPvQZc6SKVYFizu3dkDyzefB",
  "key33": "25ASnu9zgBZwTJaqpXdR1oibMayeVhQuW6DLooXJ1Y1K3K68TpL7bTSrZBLaPtThJJMVu4DSXwhg8w9VtPYUTiWW",
  "key34": "65PapTjMEe6BKZyzMsC12YZpXF6fsrDoRjABYt8a8BTcL9Mh5uhx9NeQBSnuQqshEmycnvHcTZiZcJyWUGojGCw5",
  "key35": "32tPUu15rSL9gfT1VnsH8E1GfQzDhrij3NCZFFe5WmR3WNNdCKS5cbFCCoHkHCZuQCGURou7GLLBMMNxBHqTPpML",
  "key36": "4inrUirFT4LMsQF6cN3dfhCfFtf5wHzYvD81bfG4XsExBeRLuijamzrYwZe7bBqjnkebjr5CwxZ79Dkcb3hqTxwB",
  "key37": "3WQvTtWnrqNzwJEsYYJwCf9PGDZkWwy47PpdfLFXtyWhaxdk4MJMHoRTC4evcWch1krUcuLF1PZSUeXBXYTvTaLV",
  "key38": "2bjT7CHLhdmUD71dc8d3DaE6GGP54e178BehYR3RenmH3nbgKVHFodvH4Gzpb4n7QdaoLyRyjHEb8P8k2fLDTEDQ",
  "key39": "3LfwNmbe1eAQ9mLuPvGJvHBigPK9JQxo4sDDdQNJLuwphHZPadNNd61JPD8ECFY8wxm52n3rWB4GwjyD7Zb4EiM4"
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
