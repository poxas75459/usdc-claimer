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
    "GXU5uSgnzHnjkaavHC7KS4QLW4ZcbLZfQf2e96ykgYFBPM1AAs9GDMtZUZHqApyyhJdDz8G3rVdWv3upxt49Cmh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XZhQoJ9TUHbMiY7nnVGySQPtcD2dkNjsGkyMUueAwsybg1uxDy8AAqYrf9WEKiYFAynX2Br6GPpy7jcJSgyQh1S",
  "key1": "5BL5QBfrFrbgfXEDzdqamW4diJyH7jnUyyS3hHP2PqiiDA8bnNJhpm34X1bMcj6ZpBF5fTcyVgNBGPQ7BA54XbMy",
  "key2": "2E7sa5D9utaySYvSwxy6G2ndMiUjEKvcpf6RekX8s2P7toZZvZzVrcpYvsm2NfyaU6J4YSBZ1sUP9SKQAyLc5Ndj",
  "key3": "x59Rrn2JXSJZ2hd1BKqFMpuNiwB2Rm1ZYPNsvro1BjTojANbHC9kCk3jUoVdytPENhEsmExNDpgZJ4tmAf7V5Pz",
  "key4": "eaEaaGyK97z2cWUrCErboRvHFfbc65VE3rk1uoGiMzHeXihfiJDkR4PmaemkYWJUyTS84DQqWXb4P2y4piqDdLS",
  "key5": "64VNHWt7xKhxdPWewVWEG8KaH8Gs5C6i64zxEjAYjDR7uTVZoMS41K89acxZxMGufXmYjf8bPLgBWHAKdcTLUnAE",
  "key6": "4tNxXXV4WWxkL1Dj6zEM1baHkNHqdhc4xZunMEnP3CMUZWM5vLEkJoAKUkeSYu37FHbsFTsdSQCmmSC1cFSheGfk",
  "key7": "2ZTuzRmDbEeHka4nD9R2hQMQ7VST3ndsEPiNN52RFcXFiXCAcerP36tKB2ZVhZMsSuJL5kM2Ldnvx5oR2JfVtjpg",
  "key8": "5E2RXLak8nd4naKd48j6ne75mFo4pGiHyDmSE8AEK1bXg5ZBzASQXTJMT8d3nCrrJ65iwhccENYH11ntS7wKXrcT",
  "key9": "2LJQoKtcy3a1HR885423z9ndToDFEdkJURtXf6VG2J3C78BCYxt2JNjUCQHBmi9K2a9zmwnSUFg5iM2Awk6dwdyo",
  "key10": "3B2aFbdwxDdEGX7V8JFHAk9LcG5eFpDqnjZATHthi5weBoizWdeLSmpxZDnXSYwyEh5jutHpdCaQsAeeubtxZCMw",
  "key11": "2KF7qCHnyZ9inSGQUhb3KtynBLkKFZoPYr67yxkegK9Wb56e6X3eFdmvdjG7yKz1Whqhmt2vYytNFCCvuBMvM3EK",
  "key12": "4d79ubbvZQUVXDzZLxKTNFokVcEqmEuDH1BV5BfaVdChjW5SAEpLvNNuqVQhjH1x1HooC9bW2JVjm2dWZzhjFaTP",
  "key13": "3PeHh2vbMpcZTYGqY5aJssBfDuA5id9HHMkPap1bHqPhgNLjRBRi1gQER55Yd7risMWSCZgbi4VcAqy6uW2zx5Xn",
  "key14": "5d3mKFczqp6mfZYKngMf2Ve2S7ryK4bjw4WAVVa5MNc2vBvjuShSa4cZ4v3WvBhzZvcndhYyHQnVEC4LBhKpSwrM",
  "key15": "27E1WSdFHTcemQUBEtAHrH9qGZLTbjfAeiWqKzGAn4vfBX7UKa78qs4hWXXxokjBS4nUtfsPZSGPwiJxfPbDjpL6",
  "key16": "5oCCaBRkN7kR9NTFGFCXEKsKBuuazco8jZyS3ZpJQLzgGHTiE64HkokHpERoWXTBrUoPpRpu2qAeN21vEyHRXfba",
  "key17": "5i3Twz9rp41znZKgDucCFJGzsZuaKCg7D8CEu6EMh58Q9sBTbEw8EsMdtCU21B2Fc5L1kSiebxk7KuF43YSt9CYr",
  "key18": "JdAYGKJLPbHYBMxMby5PW3gkbkrpZegjtF9UbiZVJZM5836nsqQ8BTmduvRKj6hBcGymam6QkxR9s2cAYwVVcCK",
  "key19": "S5m5nCXWd97jo3PQTR5NVUn8e7Gj8h1LJH9PwD6NgkUU6dt5hvksFABX6vMc8C3RHZWNFbiQj67KZ7KYwRv9923",
  "key20": "53scP4btAmfXtW27bUqGzxczjJJAYUJTjsTzAE8D6X8dTWvPzHiLy7L7DsNreM8v7ZFuabCJTZYHyXXUx5EquVvM",
  "key21": "38sxNUhrGetWWwC1JjDHHa45kv7SVmHJUXgms8ffEUaUzWxqW6w6yKSfv1evZPjVZzUk75sve98EimqRXX7toFxC",
  "key22": "4fpZJZLN5BLjMoc69CMGtRdjP2sJJYo3KJSk6wWHrE9SvDmKYjCHV1BFPsTzVoXhk3LbsxFGAvdKUpphPo6A3RsB",
  "key23": "3E76F1ZZPvKKppMzUs97gTZg6gyMyVu2Dautd61CYNhUmx77K2iwfzqiZyZwuWNsEa7Nn37fvp5vn8CdgDF9GXH6",
  "key24": "5sjFLxUeEx9rVhMmFxa1zRxdkLvD9AFarfADv24XhxG2NYQ2Vw944unXp5uRUy3m8P7dP7LDUTBxqoz9FBxLXDVx",
  "key25": "2niX81s94SgVTArZ9m5HXaD3mCMa933DTjP5UcbShUiGvwcuECXWg6Ar8abJvboa8mBksUHFxX1wkvqbBMLTRJpc",
  "key26": "7QpvyrxmksVLRwXSxUuGGCUhmVqsnvjsrwDvRxUb6e9KaX29MNFHNuz2kpZ7uqBFbSNeqULw7XLdEdJ9maRkA9g",
  "key27": "3XZbYbEEziECJhzb6hb5s2wJWdGhkL4KXWfJ7QhoSwj1xSmbah1sFaMWyj3Rr4FGYWUd7yZWXATn42dAv8HUCkju",
  "key28": "3JifVicfMahMXDiammrwLsVfc4pwLvWpjroLyf1twNW6oZL53362tpUqPnapPHj1mu3uSawySxnJ4a1sSQLprYk",
  "key29": "66bxKseUtVias65A44TTnp1nrcsS1N1mJLEZyXssyKBFdhERQeYpxhP2hXcAwDFFErhgtTUWGWgREieFXYX2jNxD",
  "key30": "29jKjHjGgc2coHuSSoZjE63sShUSzkegH1B5GF2fpyBM5jgExgjEuHZ3w5EWVFuTtXVaYq8VSjGtTJNyqsmvd53C",
  "key31": "4cDRAMKLy3hpS2JEkRW1xa49F1pW3tGMpFtfXtdzu8Zmd3RgWju5JqkD7RCDPhwWqRoUxCnhDfjQJezmKAumQKEp",
  "key32": "2pfhyAtGBcFKnQB1RpKuNLGXnwoBE8He5cAwbeHwzzQf88YgTswWe8HxoiEminzy7tfonTXTXMTLwiLjp7cCn9y6",
  "key33": "4wYiTW7uxJto3KUEeuXFpbv7XV5GSteNtqDPmxccH7g5oAkhXjHRWjvgquer15iizY2sm3gcJmWmJNhnrsYSb4Nh",
  "key34": "2hNQTDXmXkWa3kFhhBq9Z7qHUj6x36DNsFZZwcXhpJEmhaqzmyNfYbs77MwBXvN1RPLJ12M2tmb6QcR2cyTwKhaV",
  "key35": "1aq7XcpwCpw3w9ZogBdB9jdC86vrYuZ5UJ2mmkChkbWKRXtDKimcqPVRwh2eano3NNGo5ZQBUog6PuRvT7SvcYo",
  "key36": "3AVpjoqKhqgUAKty1wZFwqhCp7PDuJuNLqCV1RXZiYxDtUmnL5JjV2M8KxNsDPNZbU5apxfZg9HxoUad6bEgZceT",
  "key37": "2KYXHapZQCtPjxbFExYrefhTsJTaRLfGN6ZFp1gGCRnahyYzW3mQA8zFTJkzy2y58tVM1izseho45J27wQQ2BtFD",
  "key38": "3k2tAUwHz1sW3VpSoVrfMJ832bqjSUGmssBJE3rSNXotBsDJFCkyh37jZMoGwGpGwY4nH5Ap2X64RhpELJyFT139",
  "key39": "39eS4m7PGfLafHEqD9Qg2yRECim54Ez4jfNXwRpUQiNKxAkmKQgXm7QoLchqXPXG5H6zRiwSFCcvcWA9DvLXCm2X"
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
