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
    "3fVoZifQFYED5VdGaYoBSNfHjtay7GJTE8kkZ3BWvcdsvgBHLKvGTTH5nrLqk8DK7NpE3CiJpHJvAbxF4dyL2984"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S9pohu55FSBXvM1gnr16TRjSpAr58uxcV7TzvQbVd1i2r8gfEuy9uP4QF6bLe4466KdFb2C3Fqh4HzrCjRLSiPu",
  "key1": "4WMuXHMNeA7QNXieVSsh6DYjQAa21b3w8PfUqgUL2xcXqyREhv3wfJyNrAAx31f8vFgsTPd6jCjfmpi5AQTddw7m",
  "key2": "4YLwk6U8cec4ZEg8UZJkv9CKJVhQpeMHRvVNbWG8T8HYHHV2cmePvhUxTpgqHCP2wgpm5qxF6Bzj57VEFG5amTbq",
  "key3": "5eXBXX6ThuyjdycfeXXVhpVfdvFLwDa9CKELv5WQzfwrN6i1kqxCqm6yGDtwUaygfzf7XGXJaDnTrKnimt4ExqhX",
  "key4": "291Nk6R25T9VPw8C1i4SkVwdyM7cykcT3KBYvhWwu4zVac4aVr9akG7CBcGoaypGJB2TuSnz2QBKxUdE2naiT5A8",
  "key5": "4GgAYVUafZo7wYb6toErwWA66xve7GHZ3dGv6Pv7a8L6nvvz3bir6tgEsqUxdiQwMz7sc7QeQBNv5ZvMAdS18FW2",
  "key6": "u9VmssUC4FBryBFqovbt2MjgWgUg7syGd3rYqBf2kz8QTbxSDyHwtSjaquJAkfWuEHrnRVNiNeSXuMQEtR4cuCZ",
  "key7": "2p9nZfoM1vieWpfNC2JhNWRX4seizFn4LnAmsKSNZzt8iSeYwem5hAm5RMjLiFkPfVTXjuXrAc4fVRJpe3LS3hUy",
  "key8": "5eL2TFc48dP9sd9KeTbjN8Aqo6Hh2eJymrpg5xycC7Ri4p3BnGFBtVbWHryEfnExJUFcG9P2vdraKgCx3KTxSUeq",
  "key9": "46mPfXdvjV8jpXBu4sM5G3HTQ8zFonb1tpc12tX4buNWECFz1GG5q2acc29r2upzU3TRXPVnrFAWwED6haXd9t9w",
  "key10": "vK2SvCWQpUwAL8mxMG2VGxkBLqpZZVqfvAFPZvkwWB8DZs2SDkZroaWs2qa7FijVdUQrfyt2SyPcYTiyuEsBKg6",
  "key11": "5DNRry7GbpKdPGEw7bm2i2sd1vpLrzeb3fXakMNcA1ysswGzH3pJEXG9mNwAbR7dxixfiXsbxZqUqFLa6mb4QFHk",
  "key12": "3zK6HLhbREdXvtD6gTeo6JGCt9KFzHMsucKwwu7437AbShLWZGoYNhw4ScJWH4UsmYa1jA7hJpVjKHSZ8765XosG",
  "key13": "ZSWjTt4SWct7JAF1ePhRLdWHUmUbdYH42YunFD98qAgkyLNdef7kmdrxpQN7KGA7QqBqcdjoJGup21iQvcck69d",
  "key14": "4JyQnr4vBRtr4vpweMjBR5jZRqxamGQxU5Nf1y2q58KQwsU94McC4dQ2M2tiyfVbP6SK6ErLT2a7TRutAVHm3ZWK",
  "key15": "2J3zoWpgZfTMBvqs9adfGZVSjUtRVmGGQBuamvnJAySzwvFuuSRqCD3NdSvRCz1RzhZDdCE7TzmiviGLctJ9kj29",
  "key16": "5ibeXWE6UuTQRwb9KfqPBZ49GzEfYykPseadBy2kBmAg2fbpaF9FQK1TFwzjL4uz4mQFpFnq1qpFj4LFBEXfmPCz",
  "key17": "4nWnJTfJ6jkwHNqZskJD6PtGRofCnrLh86q7dRvuUdg8Dj4zgt8Lqzh3rK7nPLuRzUh4nMqDiC61WyFVMjAvGv39",
  "key18": "5J9Fbhi5KU1XBrrrJPNCUj7MtBZwJoVJznriPqk4uvLKJLcbni23jAgzfbUaHK6rX1q4jcyr9KY3YpQsrxZUhBn8",
  "key19": "3FhZxqM9rTrWfHQGauct5reJvzywEVMSaMLZS6cqv1SkAPkoLSBokinxVfECYHVF151avz6expZaQtbBifA5NVp4",
  "key20": "5NYd22h1ft7fsAxC6zxqucyDMjwTBoa1LzGb1tG4zch9Bwkaptfw2yHHP6xMcAxdvAiRzQ6gBe5Uw5rdmEMxbqoa",
  "key21": "2taetzC9YhfFcCw5WS8Ex7ykLAJcAbeAtYdcW4pgCUCEeUoXs7CzYuqTYz4zz4CkcKsp6uUzuqsZayDPxQoKfUYt",
  "key22": "5bb3PNU3LS8isDLUgqyav9r9KJH9JCQZZHm1i192LEsAJiSemUHX7C4WgArfnWLseCBNJ5X4yEFfgi62Gwse92H9",
  "key23": "2vNyAEip4HxkkUaopcbzSRZg3bmGQ2zqJ4uQdcEBxhrW724R6VvfQ7WHcU7icHnMessZTQAMZsgnhv7QWKb9Zmud",
  "key24": "5ZgEWe1PtJPEyHWKrLBkjmhrgYeU5NjQ7EsKRdFAH1BFqAXa3yHK5Z7iyhgqUtPs6SoJZASs2GbAGRU5A6X62B2H",
  "key25": "2jWBYyPzVw992wK9ZeSLa3dzj7zL6Df3s1Qh8mfEs3yjAphDQEURE7kcm8tdHT9faZfJwJdWyAVXxcTmKg3Yt2H1",
  "key26": "2CLhG9SKzqYz5Kjub7di5zwJzHobdTcLbceepXEfdAvpNuRVai98fgvbiCWss9LKN2HX5VNuDY9Y9oML6FCZNcfo",
  "key27": "3fKPxp2tZD3Dg2F7cZQ2Ui37yG6ktjU4xzcyi1PDJyZhW3jHpF3rqGHguXYJ37qdmEWLdmDHviN1k5S4b2ig7fJK",
  "key28": "5NwmioJBwcMCeAscd3hzN1bLoBkx6HAEM2DYDKmNwMyEkmRY5Gz5CFEAhKquAh518n2TZCKnHdEesvH7eKKpiU8w"
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
