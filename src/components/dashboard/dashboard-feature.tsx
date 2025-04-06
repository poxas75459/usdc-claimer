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
    "2eBxGntAxP51TrrRrqKVqSzVTVxzv3cb1czrxhcBff6TNJoZ6Gh3NakLKPaPLqNP2J6srrQNK4kgAyLcy5W8xLR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2umLw4bEonngYAjMgCnhDXakoACWWiWtsonfTSmYLAod1ZxH7kBLJhGRiAtjS5pN8iQw3PSLp9FrX4eTmmbNJ3KZ",
  "key1": "2SX2ffRmDP1CmdYiSPjK6MW2BSX56xXgYVB6az5P6bbhJaYf3sfW3EQm1s2XdaPuQiWjf8hM1a7pfKomGaSHL5o5",
  "key2": "56HMLsv4pNhps2GUR2YXNz8DYMUVub22NMfBWyUZBWdQSsQgsauZNP8QUAGymhuH8fw5GLEb77ZAUDmQ7wYDx2wc",
  "key3": "4ASbXQm63ErsQeBCzUxNcqvyjNr8yzZNUfmRX6nXQU2TF4J8kqEqjyJ4vwfwEmtWcKpnjEPtzsmbK26h5YgDBLtE",
  "key4": "3wH4gT7pXnFLdPYARpJftsfHP7wynKTT1vUYJAnWKBoof5oEpagZciNre6ycZgbtwVXqKpjfyegWWAGZPxpVUffQ",
  "key5": "3bdWxfpFscbyLHyc9p68SV6PKNggFuBYc6jNU8BZpkHPFuCwgn7ifyBiSzGV21Y3Fd6nUBVGrcPqeaBT8k338yQB",
  "key6": "5m1cDzSbgSL5z2BKTkpp4mdWPVjPi1rMe62Z5DVRUbTzqC7SCWXMqPDKzWzmTSwrxUS38u1KgMpcbK4PkPHzEaw5",
  "key7": "5vudUYN6g2wPzkcEwQhRqMF2PPaN1BCcV9AJU3A5WgGi8RBvKSAWtSr97Qxz9S19HP5fwYEsq6q1yENEmfkTBZuV",
  "key8": "61gwVDctvBykShKctSkjDkPFg8oU9HthmhuPRrb4o1jUmGp6BJoe4LDxAZSD6gTH6mjFCmq22TYHAPvqKbxtWWnT",
  "key9": "3hxEfdFh8iVCSXxH65roiWiWyMS1Z1D8VraU77CQZ9SfWzkmta45qsvGck85YctAVctEQe3d5LSNykVcoyY7eo8w",
  "key10": "uy5QjWRzXVhS8xJAQPV4ikHzkAAtaPAC8EDrnZ2J64BVrPb6wABtj8ETDDa7X9tZ1W6dqjoRWvdVCZACkXJUYAS",
  "key11": "hm487J1uabhNdk5mVKEN8ynw6yAHPz8hQhpFnWKBRB6W2x1MXpDhuYuTmM4WtosH1Nq1nfyJp6LmBChu9kcfxin",
  "key12": "3s48aj5Nap1hVhVLKq3noKXdDk92rj3LUHf2QWPfx6w15yXwinsK525ZtjngNZ2EnE3wRa7ue9AFqjqptor3QyD4",
  "key13": "3jdwZjRFmc7zxmWCgHAPCGkrUMyz71ArkfZZAEFHzu8NspWczaExhNKGCVnf7HzzSUy49CFoKC37Ciq6pTdWoJny",
  "key14": "2rgSgCcYxXWmWjdqCA3SCuvKBJ326TjwtY89c5gh6y88LKqPBRcRS9FeQJfhE1gsGHtYa6CccGtzCnB6xkbH63bF",
  "key15": "r1PGwjwfwp6JL9gNG4UY86wptd8LEHEZcb5tDdBBhyTd31DsSRZSMidwk9BvmM6jZpRJ9GaxwfvUcZDM2UwFL1Z",
  "key16": "3E2aY9g6QZ7A1Y3jQSpH3PhmmNd7uD5QdctDZFdVyK8XScD6vZ8Qv4rNBQtz2HJggto4Z1K6tmemCjDXzf382N4x",
  "key17": "46M3WEmr767CtUNYREwUGCi26z44yFF1QVQox9Jps8V8C6LQ19Qt4LxHa8u2zbn5nrR2kFYGB478wDhqCgZBQnvf",
  "key18": "VQnCrWsJWzsy9tUqjARVPfqiFWrhfkGwe2fZefdAUoY5UAi1xTMJowJgNwU5sdYyQbrYg9U5JuQZGCxmYFykfyx",
  "key19": "5DUfAM1kwEugZgYj1bkaXMBZYnRcNPgUTEC7rYyCXCvrD6XWRTneSMMwswL6ikdLJ9DKgAnCVZj7UqAeZuaBT9oe",
  "key20": "2MsEmsZ8bPWcidUUM9rJEdYxNUdJqAQ3iaWLZELgFbWudSUnAEvJzqZXRdxnv8gpaN5xAPoGFBHC1ixaPuBTUtak",
  "key21": "5E23LhcQQshfzt9Lq2VMCuoyWh7eV1J9dxqhd4PAWWXdFDeNnYSXtyjwqsYkyv2G5aBU3mH5B9zo6NT1MB96nyN3",
  "key22": "G1899KPg63EC6awPxsdCcmmGQSs6cbhFkX34hhtyu2MCwwr6w8yNgnxeJPE6FrxyVVfcnmqZtxXRcYWHmprMrcQ",
  "key23": "8UVjZjuPuUtFX7MqebXsruWGeCgcc7C63agcqGZhHN6dGguxvH8tKgTxW9Bcy8BxdR2bBtvxyL5bsCNUBYve5LK",
  "key24": "5uAD3Mri6pr5AqMkYNs6ZvvQRW9eMjfDukLAPobDjDYcDZhAfshapH88yPPCSEcK9uc8mTksncW1mQEtrKHHLJu7",
  "key25": "41gRNtLKbuuLRonaGMRRN9mw9KTtPtHkT4HgQ7PBXxcfPPtbRV4wD9EJKZDzHTvdnmUmHZ3ov9N3gMrsTj7tS1UA",
  "key26": "41tFWtnXyVYHdAPHV3hN5GgkFF8H8YCQbudF8TmKMxDBKNiYNLb1vPL1jD1XtWumQB6uSF4TywE1SRJ5exdJidda",
  "key27": "58Gh17Cjf44En9qwPrKoDZ1ye55MKWbHnUJUMyWkTz1qLwLRk1JX3BnqSTNw8sYYjF66ZQtWbuwpVSBU1SNYCWZS",
  "key28": "3bEmyZorCyebw9vr1w57ok1Rnbu95LNpfFxHHA1fie9PuPTRYz8rAYnU5fHhzGrv9DQn3LNnVd8N97fsz2jpBGve",
  "key29": "44FdsBAQWRBJhova5X15W4hsdry7e5LLXCnzXYVUK11U7MwSjtXxsSAwxNZPT8VbXkkavQvkfvqmdWGsWmpB8XY",
  "key30": "bPTH7RjGPLZSzUZ4MPp77JmSCsYq83CitC8ia2BJcabPoTpWFDcprzjUg4f1GwZroFmafeFWiqR8tEJbFr6XAKY",
  "key31": "gQwF4mu2qa5N2hiPGLp1DRQCDSA6bKKB4HUUzV9aUVPHKk52PaAV2gF8m9m2Te5QA9t2TaqHyZXAcCijzxUbpLz",
  "key32": "WYGpJy5X7HskaVQqwZyFWPLcfGEpv4oqAemGzZPkuAHsiEBXdMW7d4fMzzNN7tnpYbrF191a7s1FP4JtKAFNbjS",
  "key33": "5antxEbCePLNsnu8gpTnoiULrfuEeqg8EjvT6tvu5tNhaWijCSUV9j4AgcNaEEwWRauuQ8qhHjq9W1t9SeegRoh6"
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
