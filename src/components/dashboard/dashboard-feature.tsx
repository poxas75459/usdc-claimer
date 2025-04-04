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
    "5TD4F6BhRC4ksDkFCMAqDSuUdUqSbnJNfnxdEh5usP14ztAyscvNjgcLAezQAEVpUNzKm8rtsYR8YzjiQRt3vPv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h8HF9qX3mYsbf7twidbTwYtGAGRrVGEcufnKbX1bpVEzvdq5WMTVq4XUdky7VXv6euNfAEEjJkJJbfgYTGu83RG",
  "key1": "4kRA1phyi7qa31XCEXmkb2toke2yKMhmAaENqiqVTfsCVg2y1VzQS7xQpJzYEeu3rvZrLKrxSQUn69Y1vaVffNUd",
  "key2": "ruZ3MdisghQRpHY4ctMPjTRkPW68ZbDxkqTe1xuzptekaZiKMkihTEpMypH1fYQrvd4ArmbKVxmzDDfUX3WtSD7",
  "key3": "59Bg5TYUJsez6daS9LEAUFacLWso9q2tjW4nqzRcjLi8yGJM4a2QASDgk5vNMiTZ3cuEqgnpQDZzmmEfGpWaDRxJ",
  "key4": "aJpasjJ4Ltvi1aDTcBcYNXDmiyQzVVpTX1JYNZ7ffdHwucE9Es4wJN7K5tqDVYdxu3x8KRBEVwS7LzBmUGeakwP",
  "key5": "4LzxJTrtazWDsuKnxNwHAyLriRAXzC5KHQcVVDsMztNbkZm649zE947HqHjvAFS53WchLKzETnD38FusxduSCWuK",
  "key6": "2cW4s4ufHCcMKHyYqGZMPPothBYyK2JVHS1NzZHTSZSzDBZ4Djik3v3Tv32Re1iqPiQgtAFsPwfVvKoTHaUN2NRi",
  "key7": "5iYb5gm8kgbL5vWtLW74mCnU8sGtaXb2n98543eVkQ8yA8XnAPVLY28NuEccDTNZGBmLJLVBctcg5h3NJ8Vs8WEg",
  "key8": "3kp3ir3qybZkyyAgihXzQB8bhZ3PsLNZjHs4WCp3jB4YLqi2C8JDyu85ne42rk8N4cyegCEiipQrKgksPqkzkrmp",
  "key9": "4JVwFvwnfQfFin6pNsJHfNYNj85zphM1KjGc4Vs4sfzeF2VH8nRhRvGErXDYqrCx2Kjq2fvHC5AbKByWCdGN7SMH",
  "key10": "aDxNELk2c9yQsDrwU5Y7PFe3G6GTN8CLSKs6m2nCag52dZjw3vdSNGtG7zMGEfLC5VYJUmtd1K36w5JDzUkBKb4",
  "key11": "iN2s7n9nVq8TukqgRnsA3VdUjhXhsLtxNGR7vwmWQTACQSV45i4jb91EUgZtDAy7QGUzVv1kjEmLZg1tbe2HRfd",
  "key12": "3k6hnUvRgjSxFsEr4p3fWRgQ9G64QySbQzfEi7AgYt4sFTASyetSWSZoNGp9RxxYbqyoXna6ubCxdvgq4CEtQmYN",
  "key13": "4eTnWA2hFkTkdvfkqwZ2dDVytWeS5NfLnESiJUn6Ad75nWZTKSwdmTkmP7LvnZxGTw5SksLYcdTa4814okTovTRk",
  "key14": "2mcEm7ptda2skFBAkz9SNRV1cceUuJxkMS5aBhkJzZ6HGTs4eZUZUhX6h1dkjXURxFNBwYo4vzsWmfCnbmXywkWy",
  "key15": "2TjMYaJ2UvbBfjm1Wv5onryYySRyArHgSYuNQPAEaPbdvnaGztSxgK8AgEafJNsNQRdNPrYXckuYEgzWRVqoi1DY",
  "key16": "3HWNqwk9rV1PorWWGzN5oeutUNcE4Wu2YXr6oMKdfwP658ZdLPWSzGt6aDAUgPvsMQMnZwJ8XQc6NLBoY6A9pd6u",
  "key17": "Lw2gFEnvtDNWBdxufTUb1VsA66rr6fTX5kXtW8CmyrM2fpMXp6GVqo4iMWAR6xEecE4gJrxLiNLxfQY27gZc1MY",
  "key18": "2BCmsEeibUUGP77Hkr2MGX8dT4XGeHDVnYhZBTUa6dwntPt3iDAgsBo8CtfZPLhHUmkdHZYEbt8mfeBdyiTR4fEM",
  "key19": "2PV1o96MPdAhL3RtRESCaUe5vK4MSM7SHduFaZv6xNUc4PzgnAcFbu9RPmTrgVgKGrxBpWp8v5ty8ZqKdxaVc6J6",
  "key20": "3DY6zSt73G4qAuRc9e45ZkCqBzkD8zb6VS1Fne5f6CXCMRpTb1MGxEAnFY2erYKA9xyboqKRrM7TZwQJkbuYQQe6",
  "key21": "2p5hdZcM5qtYmgXoaHCHmFZ7UYFuHuWwB7AV2b9xFppG8cYGN5hz256ghSpYfCMyuNvAd6kmd1PdZPqaTxS9jAn4",
  "key22": "2LBXaz4HnWeurYX2miVKXhjHHMgBTThA2aeyL8WrGU8vYT8Bq5UvcNH8H7kJqGCJTDtcfvo9JyuUHdDyiWpjxDxd",
  "key23": "1CndGosHkfTfhdRyvzSMpWgjEAX6yRSZvZwDrAAazBdNS3bGxecRr41AFawi5sssnwcJ8ANwftqhsaxg8s6h7Jj",
  "key24": "5r7eqguZK5Ym4fxrAEFRL73MUSZh2gDZRAYiXeGgHPRqcT3LNz4z3pdiAgP2FZ8LJbSPkN4gxmNmCbiH2jbfrB6o",
  "key25": "2FHeuLiDBcCbCT7ygyJfGBH4QmsE1FWeFBnkRp9EeuLhCC87ZNn4tpTczk32YsP47WujefVib4xvhwoDEGco4E4P",
  "key26": "4bNqaxPo46g7kUP9N5RprzFcjGaWHNQWeUv7DVP1C1m62E4A8cznMGzjWTGrbmvBPJHDJpXoD6EEHDGopL92bAb7",
  "key27": "4aUS6F7ZM8MPBaU9GrQmABWrKVnd6mekadDBdVVgu9kBJmsEQkWrUP1EroQfGC9rZa64qydEiJiKu7X2TMBNyTTh",
  "key28": "5r1Zvd36opARWjxQwXZgaXKrQD4be5M6RhmprChiJ4pZ8PqsEUVSkandbjoA7GvT1C2xQfik5CjFustQ5BXPWy6J",
  "key29": "5HRnDnzCRmFkJycopZLqM4BgJno3DG6D16AnyuiAFcK7paeoPhpg7N8Kh5ANn9qhuw7hxNE67YrjJsR1rZPjpjr9",
  "key30": "5CXBd361nHHjCrv75McsbvZoyqKeWSXpAEu4N3MerdswRUvvfwn32BSg1E7ZCESccVQctFhNbRyMNyrhmNkkuh5N",
  "key31": "3MJEVgpPGHUeYLjzCDY3ECv8ymjXaPmkxbyxFWD2vnqgNJKJwh7mofoVijaDB4HF7G2823jukZkG2ypEK4poM9DC",
  "key32": "QF8rZCB1QANPr1upixDnscXhVLGoArHvtHb8gbhuUwYoT9Aw2oZg2Fx977KjZRjWyvZh7vd3shgo9rhFsM24ZxT"
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
