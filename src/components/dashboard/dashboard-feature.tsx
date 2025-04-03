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
    "2pQ5AhVqZLtT3BdAfoxJN71WZYBMetEXyANmFHHuNRVHfH13vyCBDJTvebsRUmNNkCnaN4gpUes24ZA6Fzf3ei8y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qwf3uPqnLVkBxRCTRiypbjh4CzvgWZYQLk2qrdmKSL1WQdaQ7geKWHVfPrw2NTZjtQWzDPv8JTUkBSBfic3aYoA",
  "key1": "2LAcLYHf32gErh92bEa3gNNqjcqQDGSvbHsKS6E26PMBsuMS5v64CTEVJDc8HpcBSih7JXcWReUyb7MzvEGbj6VB",
  "key2": "4EBBfRZ695aFboda9DSZujhyToAcVJVLe7PJKmP5x8sJ9AFw9GxQTXx5iRkkxTAwN5v2QgPVRRP9QGaneZdQvU98",
  "key3": "hadp96AS72qerEhZ8rgSijxrd2xFLRuGbP2zVNgAehzupRn3Qmveiohou1KSB6pSQsPk1G7R7zA2aCiVhetQwxL",
  "key4": "2kbRZaKnt6W51ge1fJVPHmMyKpWENQ8m7ZR46LSFuWHtLqd1aiFwxSyztUaARnnGoo3kgNCstuWvUbNAvqGnmPL",
  "key5": "H5kQqQtd4Ji6KQcXTdgMs3CkSs1kb6gD1JC1UFm9qK7nka1nVqDfAu8Kq8utexxb7GhmEEd1rnZEG5Ne3CwjH1m",
  "key6": "2g27LfxtbaTkr8iwWcbPwqaesUs11qPSxUHBZeztc4CEVN5sGko8eSUi8DtBPtFfRt8AjNRQcQmoN46emWQovmmW",
  "key7": "2TuULEkNaQ6DBH6JCh4Kt4ofn9tJk8qJynxB3HAb2UQZvFPZEwuW2TvTWav31P4zyBGsaVwmfL93j18BrdGBVWts",
  "key8": "6rFUvX7GYXwvteigdXeWKvEoFiU6GqCbjtS5gLQnig1N6qWLoseDztzgGT85zfWo9qKYtpurJGP5Sq5Pjg5acyt",
  "key9": "5NrxEGTBjDWjxFPxzAZFEBTLLLxTH5yyfnM75unoYwxXdwLTPJhAW9HPLU6CxR9oLuyzZgASz9hCsbRctVwuQUEd",
  "key10": "3CHzKf88RNYsXnpCpf4HZmr7yeAb8WMKinArQVd8RWkTLni3TeodD4gj78CTp4BoY5XrTXs1tKVT1QE3VCWRwsL6",
  "key11": "43p2D4NgRDMvheJT96R7Mai4owVr8TUitfkxz2WftRcRngzFmVLCvMyzoecWG2tuvTH2i3nHyi9rB2AC7uoCenzc",
  "key12": "2wh6TnU1EsBDVbrMkk3s9wco7H2aunujPizcc4UrYhusYM7Zu4wZUCJjzCqhVvg9CRbBHvHRwr8JtAiFS6V96HQd",
  "key13": "4E6ku5QX9FLcS5hw8RJUykKHe6QHnyFFv6PQ8P6zM5AWWg3xgMfTbmqpQEbkdtXn46tjaXLL91fzpan9nhVAu4Uu",
  "key14": "2xKbiQLM1N32xDwkmivSNw1zn9v4wepukjdvPNGJPX68VvLoqYhWw7MskypeZ8ScjqJmsz7HLMyxtWAzVut5gkcT",
  "key15": "5P1bLuxRSxYDP9gHm5FccWkY5JPMYCr4A6igfg7WGvnrMdtPtKmr1P1XA53tFoqbMbFMzRTzEf3SqLBwtAGfyx6X",
  "key16": "EVzxp4Hgkjzfo2tot6SLLKwSP5vNDEhCUTu7y3yFhGjztaREvjrJh9YUMDsN9x949YSSmxi5hqdavZ9qWyTxaKu",
  "key17": "2eU7z4xXy4wwsX58NZJZGhSLUTpWaEo7SnfCNV631nEDKdo3wSijNZxABNkLtjnEeG99TD1FViRMwzTT1P4pjPib",
  "key18": "9pyMxz3ZVEXneVMwd2BnSomZ95UAmfV9V3REBZQBonhptyyHMXQh9tfUqDJWEWM2FyTc4y7kdwuENHimofUqgi5",
  "key19": "3pG3bJoesBH6Zz8rbXo3d7a7miSS242hrLtumHfMoLo5VWWvqbqoaLaJKT3uUktZaiCj1MUEAFRi4aDXptjumQqA",
  "key20": "61dimw6swkzxecSZThw2EAir32JtEgYCsCigFCCDP4xuQdGWfuX3qjBgMDdDxTzK7Q8j5HzY185TKSuch4MxHE7u",
  "key21": "5ZsapavRsnBJAb5eu3DYSzCzTTSvqsXNaPtdYpTnY7CehpnT9HjKxKRjeRHXd71Lmd6wXE57MFawSaTGYeKAxZEe",
  "key22": "5Uo2pjH6H97ckm8SvKJC1bJgxy6gvScX4kepr6NMQevk3c7r9DTVT5Xczcv7x4R96y8f7REZSqDWvrFEx68mZqPE",
  "key23": "3RnZNjaDWJCpfZEoND923rqaG6CK9mG9GFs7BKiAUdwduBHgyVp8wNkDEA8D8xEJaYQEsEe5xtJ27fFE4RgTYvgJ",
  "key24": "3wtBgYjVvsi2A9DAUtVUjeM4A8tBN1wdcVaXxTHTiq1nyqXuvMdAeKEWfBUYLThxLVRY37ekm1wZVT8a3zGWoFps",
  "key25": "48ULZGMWk2BcDk1AY1MbnNWrZR7Jkmt27AifxUnirwKmF2sJwMSW6SCq4VekkkYP7VoRRQ6Y4Mf2mEFj9fnXWp9K",
  "key26": "3jVoURoJFJeuzPPwGUXfbDvyoXdEScLKcsJBBvrdApDGt23WmQFRAzBunTaH9xH36vhDq6jyjbzQu6mcgSFY5dLb",
  "key27": "esfKJ6sMisceGmpC5Bik1DUxhzKskYvwd8strF4ub9Wwc5NTZx41NR2wchTqe6EkP7vgPEyRLe2SL9tzirV7RzT",
  "key28": "BSmT1kE268Gbzw7FNyoDTB5iz3jpmztShPLF8yospD4zAYvwtjRJHe1EdhztuKRpZeJLhahK4ipKrPM7B3RRboD",
  "key29": "uXJ5sE5t8uEn5WvzxWWpFWbTJ3CLBuRVGGHHyM46x33MqCms5CpQZMxLmyUXY3n4NNtJz1dycVVXVX1qTRTdxsL",
  "key30": "2LW1xyEPJJGJevGRtonbefZgkyFQVYZ9giVyihiD1v25x7R5PToDFiraYVfpgLQym8JJMS7Sj61FQXaKYXDc1SuN",
  "key31": "5mJysa3QZTKYEqL5F38LjBRBjsCj6MSvY3cKweLzDCrqkx28LmwcFPEzHZAvZ2k6qcs3iLnXG7K7cjediB12ySzx",
  "key32": "4dpGCoEroiCsXdw2EaeUyBDcnxobXWzThGwpxnBtvaR2Neif4egxKY33Dqf3vjhwH9BrP7bUg7eci37q7Yw48RvG",
  "key33": "591QGmobBhbPcnPQsZPad5tLdSWqQJ42nkLfenGTAd6PAi5615nhKub9cDTCwL7Mc6t6ZTWfdHVSn6tw2Xu7gv9V",
  "key34": "4GJcD3BmNoqTFoRm9CpQroQJPtDXL1pVDshM6ec6d4ZWJVr97D576747y7W97D5XNQ5DC3AV7mYQbQXNpRwx6NB5",
  "key35": "4NwYX4YaySssb2fALq8tFtaSt6knwUVZVasa3koFJqyYnken6FKfThwSa5FUcit5LhP2BfpJ2rdMNxSafKic6gL8",
  "key36": "3GcgPK558wjXZ9ReTaSHzLeaKMzdzWxGn2mbS1uCQu7pr6Tn45nPrbwQVdzjUDbDfon7Hjs3Naf7SsgQAbY6X58a"
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
