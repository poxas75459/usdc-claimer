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
    "XxiUoLEMAEEP9WG9atwTzguE5WaTVpBNc6HH9E7xELZYg98kLJ3u5uSvUNzzsdsXF3fEYF5ppHZrQQ4D3n1itjs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V57zY8kGxyySgcY9HC1faDH69tWJ21JWbkGqC1uH3qW8JUj2Me6A49RKZkYdUuy4tHiVdvgiGpD7z4S2up58UX2",
  "key1": "4EYaPVm7pumTFtcqey731aHsQEsBomug8aMsLGesMZCpu3Rd2i3uRErbrZV2t7xhPtX8uzM8qJkhWqcfQ1bYx6XN",
  "key2": "3i5BaCwXdYnSkhtE559p31UPmvginisJ4PHsuufizs66D4zS17yLzoDMDmtxqUSnnqQWFLmhig57STBfJVx8ZWdb",
  "key3": "5JaGr4Ss4gXt6Q6TKa4TpnaQuTXNjangpFGN2cy82E1vocGC8qm9Vr1weEUxZGJeaHsdqqsgtRHSqikPxyFhHmHR",
  "key4": "2sGkhVRwqurBvV5CAs7mbtvbBdmN5TauFihYe1yQST9opy2VZMdsKPFYyZaLGWQ7kng2pj8y6vsbUh3wXEPAehjy",
  "key5": "5NdgimKCLP51op8ZkUjFGabjghhi8ETK3fnw1MdcUw3nepwECXXGnhMar77E5ycyPRpXp6rR82nUtZLXVuqhEvD1",
  "key6": "5DggEPi9ETW4ZdDUQ25ASvpG6PAGWBrk7HAeQ736MQtnnckdeeDAf34hqCG7PU7NHRXvwdaZc35o6sNVhEh4uMqB",
  "key7": "3HDNj7S6SDYfuLJMxjYfNQZMTwRbZK6wtJYF1YFHqBnwiNnAGk13G5pU15kQCEtEKBoYgA3XC2rMyU1X5Lox6A5b",
  "key8": "2WQAQjg8AaPrNFwDTqrA8K4hUdtB4ncFQXNs9JEMXASZa8waREf7bMh51uNmigoQj3nfNsDBpH36UpjopLEvHyyB",
  "key9": "61H45KMdnHsJctPoNBfVZAjhMvwu2d9NGp2PCjCBoYs2zyoMu7G3YNVNSGEcip971w6cjjdMfQMoRut9s4hqeKKV",
  "key10": "8qArwrMEYsLJHmQXhb8mD3rJyybBaMo8Xiqz18YtwgQL4Gf7LjTvz9mnvtSe2Tw1n3kx7gJDyqbXFcvaCBvD2ym",
  "key11": "2EoCn4KTMmgWysTwzbC9Avr9bTr6JyaS5Lyk3UzMNTfowXbboqCkbjvR1kAyfGMwxmWHaFQk34wmJXPTEEccdkSs",
  "key12": "5cH3437Rciu5GJsAJ6ihrbY6yUJ1nVLezeXvkrUPyYQqJxc1qrAx47HsJkn2zoiZFVJn5iCQMy7ibNZvdBSoh32G",
  "key13": "4u15v8PZwDicQYsa4FiTn5UzZxPGwTqPmcNFVVBNoazTNeBxJezyFusUB2kNVTHbdSzhNQwdqLf9ZrNDGoCjL2Bn",
  "key14": "3mdpCECAvbM1d1XNgdvkJmn34fwzMCHrhiBhEYNTuqszwomHy6HvBQUY98KLWbb8uXFh73XbqwxKX94tfgBZ6zBz",
  "key15": "3tAgRrdwFyR2tBcQWtoTFzYz5L9kiRtsc8t71X2K6X4YhJxuQQsamWG7j9mEMsmo1CnDWm7GTabjWyh2wmY9kwM3",
  "key16": "5PiCc6BEnwvSzkBjZZ5wpA6aFhRBHPABWTd9XKQ9zv5UeqbLgB5PCQNPBUY6cFkrZoicKmLyYxjunMgg1QkJi9MM",
  "key17": "2n1yzkZG8yRvfApuXr4M12qEbFee69odN2YzWaw3AAfYZDw7dQPequReBi9zeELHBRjNdt1GSz7xC2yQiGsKvG6c",
  "key18": "365qjqhyJdUr95wSsVR7JL9ZhRQ6VmpdSt13SZJYDNpzqTpH3MX1jytbRkDxi2svjnCAcViHTm5TwrKymPBXGw7k",
  "key19": "31rFW8L3jhfc88hvAeQsBudX162PgYKTJnB8edsTLzsH6z3jP7Q8hTuKudCipfgGWM3dNbCpN2u4dbPCacBPKcHc",
  "key20": "3FZNneYxuaC4LLiu9zfbrLjkpLbijPNMgLviNkNXevB98MAKTtKMAiRNVNKNTb3m3RXbqqUbrWmrwNYKVh8YLVkb",
  "key21": "2y136AUf69Npfy6g55q7CS86Y93jdmU9VBeCJCagdZuo8iU85z9By895J2ewSA8xrusqJ6XSVY34BwUBRy4ezV3M",
  "key22": "4QsCvPGDMxHmt8DTHbT9kBNALkPDDeR29Tm7fRVaPKeWApe7K48XfnhWUwVtPntLummgE39jwqFiCYgakgoZ65u4",
  "key23": "4tJ7FcTeDjXLHf2Bqx68vhuxsGoTCFdAWkGrin7zaxZPN19T3QLCLFnRCjbH6KqaZLtfwAc2h7iFdnvvKnJAVXzn",
  "key24": "HvT5aTQUSS8EreT3NyMcQpfpj6W3KpbQEsjJirRUrACi9yj6PBbhLPXPYkwkhgS7Qnaua4FPsZ2sbga76gfXMqR",
  "key25": "2BEghSBwG6QHKZ6xHyLS4yP1ogyBw5VxaECjS6DMsTHuVPBenu7KRcMsFLEK3wjAkjRPV8prk5YJpAzS6kRVF7ZR",
  "key26": "GXsB9nfgwwwmonaxRz6p1Bz7HdA38dUzD5Bmqm2YKh7Bxitqa9UGp9TqGZNQhYtLFQXxUoqpMYGQ2Facqzu7pY4",
  "key27": "4Z88MtUvVeSEs4GJa4qRYgACkFxsRFCmhSJRjJJL7UQurQPQs7ckSKambtnLj1me23THYfX4eYKbDtWFxutTwThv",
  "key28": "2CMwp3HvcP4UrGJA9farDfszYMpQSgVuwxetPAk7xWvETaEF8sjt9kxRHGgDaVh57MbKD9Dpq8DLwCLpaUCsaWAe",
  "key29": "529TFz46GS7HwNb9WSgJNg2iPWEnZagyrpAFSsQmxoxPm4yXzsMW42ST52mvSe8mMXiSHQF3Pb796mbNuAj3HcAG",
  "key30": "64ZUnsgXqezikmBSQGwNTTCTjsW4CCF9dcdKvJYJMZpD9fFbGb8RQAzQ1aHaiguBWSMpi7UXZ2ohYUjGh2tJaEgP",
  "key31": "yw3cX8d5GdDP93GSGBskSrMk3cQN52BCibRhsm5n7nSaqD9P3Tud2QjcpGnvrjyqUkaUcmjsP9WPS43A1rFBoQ9",
  "key32": "3hHXC9oHg95dMorAqbfrY6DQkANFvMiaNHiG5n69wLxfq7T4BG2UBMZKLE7moJZCw3jy34P8JEZ6LqVxzJnYMAWh",
  "key33": "3VHA74r78gDfJhrE6tUTyK3XHx2A5QuRVPFA7Va5NTSQd7LmhJeGea2RFcUmMtYotDWnB7zJuvBKwtMSPaXjAch9",
  "key34": "5c9YLjzh3pH9mvVv6t96gZ5xi7N5pvcBnBRpNEEB9fhPg6c4VEkBqyQMVAFx42F15UnRn5EzZXp3ngimeUjZRRJa"
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
