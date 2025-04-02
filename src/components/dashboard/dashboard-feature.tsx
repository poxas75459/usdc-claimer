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
    "DKnx9N1XMZBeJCnQa1c5YtBexBCCwxXV1KqM5A1ucodRLmPRr5LXcYBGaT3wCkwaLg3rSxciiRRvUUAXVWmfwa3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nZ5LzRk9WDoULvfceuG5bZKetubXo9AgGHDtTLtKnD8qkags37uL8gLafrNhYPA8mphz6zomxootB9NLNkVfFkH",
  "key1": "f1J1vUA5f4HA3fXMmiWQTabnqDR2UmK7FbHGWacrAsLtXnoA8KY7vyVFiWrRE1A1e9BqrpeF99pTi6UoE2g6nJF",
  "key2": "2BJgz4oxiVCtsgGPfgB5BDRUwkaCRTqgKUSQMpDtMK8gwrcgM5BuaWiY6943uNJc2wbCEsLeo1gmz8SxCuSTw5VQ",
  "key3": "2yd3qWKDgvFcU2YT99rHY5mCZiFUGynH97xy7idhmrfvM659Z9sRUSqQNYZm861pmi7C1wMQAym6mE6nmAVqQvb8",
  "key4": "3ZJqvLrXpseJhXRY7EfXjBy2vjAbioBXyK8JMnqRFEHHcr8uesVxF1bhYdW4LFK7hnGpZmY8umCGzLRm1ecHGSW2",
  "key5": "g4jxrfoir7WegrupbMAszdf5rDkyqhDvLdCV1n6jvbAqgkJVk2FL1a4cNftj4havqooA4ActZ5HzmmQ5nyqZqnB",
  "key6": "5L6udL2aFqTd7hw7hi63vrYT9Yjys9CP8FAjQGssTqb2MfKBioD1o5YMoFzoHEMr74yUsoAY45pg4yHfXPJ8Nezi",
  "key7": "2s9YxxcVjzWi3nLBZ8m3Q3hAX3vcDqzWLhuXhbWNfo9wie26fM5t7iGV5zENT6TFJQfcGj9pQnfoLaegXMuexNxm",
  "key8": "3zmH8MNw7tSxQGp6gECGtZMmLxAsRBH8jLRgsbaTx8Hkd1bk3B4dbdQBj8Ryvc9ezvJNXBroETHQ4LTvqBuNB7pR",
  "key9": "5RcWUzJmMAB7BSCuktjTa7f7VTyEPUgXZUs4dy52YSa1n5S5QcERq89kDRJ2PxmvFSPxYArNoSpGF2cDAuVEYHhH",
  "key10": "2BLa4FynSWkrxSNfuuVUNSRyUjmXayDeEC2oGBib9bmx39RxLyCg21bFER8dfKfGwzPBLY7B2WWpk5B8YaaPevsz",
  "key11": "4hnNHNmXgKVKeiSCu7mvFxcEoiZXcBM7C2xzem9egNYnJfCd3aVvBg6UAkU5mYNY6U5kZWaCpyWWvTCFwDQtXpru",
  "key12": "491uKjcoxGS7BpbMeNfgHwxpf4cHEF6gvAgNYxibBDQhZdaLwDXPNBp4Pu98H5zwZvLVvvmvTgxLRjyYr1NhpUDu",
  "key13": "2uQxkzEy5SdkDQ7tKfreCXfxFFSrCJbbQgkW2C9TJZKbvcdem5o96pMoMN6NR2CweZFJ8BwvAgybRu31TJmRujY4",
  "key14": "56gk8FmdJt4Qg1eXbMinXP2eEbvDrBfBsFcGFSNWwKhnzCFpDd68NXE6mvQ97k3cHpZ5cCZCQxZ8z7QE2n6t9WWe",
  "key15": "eZ9H7VsugHkR1qsMikBv5xorjaAMx13YtHTbY9Qbav6DB4DefWrNH6rApvvv4V8N3QrxE3mAEGiC2eiE1VzLpky",
  "key16": "3EZrPWvgMykRNQYxDzhCJBBZDZgUbz1QJrq7BkpzwvrUvkRRAM7ymisqZseBeJcVmZuM1pfZ9gHQmKjwqTLRf6xt",
  "key17": "3hgPFdtYeBQV5m7FWo7Uboa4S4xUsjk8PpM7dp7Yy3mxW3UmyKbyKTfvwY3zqp1WvgFjT6ZqeohyBRx4QtZ32e9A",
  "key18": "4pLT4VMnAAZmSJJymsoYngRwiiSoZJkiC9rd43duwTthGnc4FVNsSyMdRLvMnViMfdv1E2cqhMCoADHj7D1SMy45",
  "key19": "3tL2YjTxYKFct3zyfBESMNvSwBatX7CcsSzSDLjWgjMVGm9ao8B5vEdjQeN2qsjgYRHernUmscfyRXANWGrXTmc4",
  "key20": "61cUgdAZ5qyfazpKPpq9PV7ksEwoTzAtG2LBYmzr75B1WhNUjWSSNL3pV5YEVLjFA8NikjE1ruHsD9CBCYMTg8Bb",
  "key21": "4hZLRg29nHn6B6UUPNtueU7HJjgvKgtCfRo88ME4D8LWygh4mfMTzBFDKhg4dKu14PWUX5SpbkZr65QRB1fX4GHd",
  "key22": "37yr46efqdeDyB3zj6AyW2JXdQonuvrcr9rU1nnyXP8pFxFUZ5F3Hn9pMWJdpMuTLELv3zx7WLdkkMo22k4nD8ca",
  "key23": "2daQfwGBxmQYbyoFx4D9uEJURLb8pwgcksimeptSDV1475J1UgUXsEzRkAKFcLpncXyq1zzR4Rvr4XnuHbTeAauZ",
  "key24": "MzG8J4adNsDroNKbDk9PA3WaJg2WCgPvTQtRm3XE5cMygwtbHqVJc1442X5vTs7ZubyaiTt5qxQQk6aFU7BCyWa",
  "key25": "5e2VYsnkSMN3t3orvPVuEgnqE9yFkNowuF4LpiGL8JiYANCaovY5EvqAcdRe3tu7AvPcfykaN3vRDyCqbnBEmD7o",
  "key26": "2jWAecrpiNqpqSfr3QRwHP3iiUbQZ4ukm4vUgBMM2cfvhDfz3RmxcgVuRhGNELzCwejvGf5ALiKuhs4CWQPUNmSy",
  "key27": "sw4zptRJToawKeVcZYiGiiT7h3cVKPJ3X2uSCGqWRZByxMLp83KnFhFtz8MMwnh83vGC5Q3t6XNckkZ7FHprGsi",
  "key28": "3ZjjywmtRkjmvqhEpyVjxCwBRxJeCDBaJYFVxAPTdrRRxEVEmqMn7PSHTJZRkLqpUxeGDECu3A7hPpo45osZ6QJC",
  "key29": "2gYRGLoW7rjoepbcvQzGtyqMyiBtEJU9bxymMkxQn6gziXMjBYh2hJJ8AcX9MB7XJNy3Htjs441831KnxwYBKuxb",
  "key30": "4KSWxyp6XPrFqGnqTj8dqT8BKQxRF6jpKPWqErMQrh2NoBjD84yYB1hTY2gN4AGpAag3Hiu62uWM1B54cV6mN4eB",
  "key31": "92LY89W1fQcLC1EssTXovQmXnEknc1utGGFGDJohYckvKCNfwgvNdcFaEncYN3GBBL4ELVcJvwwnSZXrKaWy2rX",
  "key32": "pedCvDMmhR6aPtt4if63dkM2rzTZpG7X5YEhYLDGAensPF9LGmCgkPmwqdTac8TY1ght3DQizCGkYQcpYRvEH8B",
  "key33": "3MKoMAbRRQwhzjutZEvSmMkhsDhMo7MJEtL8nsVfNbh8YU63Mv3R5ZQMFyBa2ckkcnH2tqy3GPC2XiGJiuZWeP5W"
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
