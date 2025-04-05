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
    "3jg4ekNRt9aQoebS84FSB9UVitr8DQrufRauaAmwfMtTvhXm6vTG2itg11RgK1qQuBRqEY4KTb1kj9uv36LqV5b6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3h1U5gUv3FTD9iH6w4JcgoDHvtWnZWctoB6NEt6gb9rb81J2wcjNSFgS9PmcqEwZDnVoMNFCcbodavsB7kR8A17Q",
  "key1": "5RBp3PSMC5kq7Vy5eVKvYXzqY6cdfiAC9zqSsJHdA18p8Kwzr1MgADGLGeSKzFnvoR5u8P5CVDNFFzGArPcTWcez",
  "key2": "57qQ99ytYjAMfVm4nMVxeXotLPEspjYDzWs5vMk9h24HG7VqeN3EEY11uBJu17LVFU9DsntcoYDLF4HDJCzrc5Fo",
  "key3": "5Zibiw9TA7ui3ndcQ6238haLr8VC9nqjxLYe8UXukgx2oLTb7F1ynGqUKYcctbCsTwyjEvczaEjGVxGkLu6YWokX",
  "key4": "RdLdnbYbGVp7H2Fm1TSXX1XqyCBq6ngP4PRQn8GNDP1GmB1Dmow3TGc5qZjpJucZscm8rTX8KzGMSmL5CUWyyDc",
  "key5": "2RDRBpB8s9LFnBAZSGA6CGa2MMTfSfykHhU2KAMq7DqEc5h5rSCeutheSzjJwjd1GW6VZM5hGFhhD7qS83x7GK7V",
  "key6": "4mwTq2R1XwJ67d8rVMfcmsQuLvzg1W2X6U1SgWXuqNDAvV9XYcRzxixTCgUKTDmNFfmXDXVH87WnqrPZKSgMKxhU",
  "key7": "xAgSRRha3VDZmJK55mLUNYdPHYzNEFydC4Mg9zBXUeKNyHAuVp9kDCt9AA88WTr6saG5BQwtQNnvsKUUh5DuFLw",
  "key8": "2yX3gdXZ3rkMe4tLhLu7Zso3a5JSyXWrzc46WeuGxcZgyXE5UUpiN3aY5aAWcuiCUKPvA4G94QwUU6HHfDux83k7",
  "key9": "Rpsa1hWqTmasvj1t5Z3HDckYxaB6o3EgWHRL55gEed9vyN2ve6WQm1jogtactzSGVNcjLUdrNwiiF5FsPQcVaEx",
  "key10": "3ntcon2qFehey5o9E7tn1q6DRtQrDrpUmp9DA6QBM7DpSWEnnWF37pKJ68o69T9Ux8uLZCVEkU8kxFMtV1e9wKzH",
  "key11": "2aEmHrxXfGSF7gHhhEtghAvcYEBiCowgCaZmoZWV3piuMkHLmzdNZTy9xsMWnkk1WeYdKkRwW6hCUNPxmsqyDmAJ",
  "key12": "gavJdbXwQSMCvE3FutzJPHRmvkE5VBpXhRAtVVNvSJNChChk2Vd9aUvP2Da4Qcg2PKqNp4Th54a8AJCKzqAxZZH",
  "key13": "5vvXzxj6D61pviZsMfbwgzMZMpZ5qJqw83mdU3RqHVPjHAoy3jV9BGAnVxhmMQbPwQvnoXeBqPB2jH7sJfQ4Nukt",
  "key14": "dwPmbJ1EN6MPLv16TXYJt49fGdiuvMR2vdjoiNf9cPYByHY91nsFonYhNsy85gxisxdfUTHh8YSff1dPMbzAvGD",
  "key15": "KWRGYmkyBPsC6rjsr7nx33fbt51hmWCZtM9gUyiwzCVauMrWCzhPLtMwHKtGCp7zEiedeE8vgS6L8MF1eLz7yUW",
  "key16": "574noodxTGX7G2CSNcUZjJ3cMR9MYW2KKELxwQhnj6WBQDSQ6iTJzaBhZwfLHdQcx2EXSnzKjqcMFQy7E5c2DNsf",
  "key17": "3zGNrMn6PZUS3LncoQUttwsWJLhtBGgHtd6y1xzUAXihMjWis5SAtfTPzDMz6vmMEE935p4EWLGox7aYmqKA6j2J",
  "key18": "trSZ8vz7irKeUdvFZV96N6nE9HCo8Mow1Q5v79cdgkYX4aG3T2HxwBtwoXdViSvsaYef3nPJt6mKShqXn86wrYT",
  "key19": "3hnKwBkMRcsAcNUwoUFpAazQNjveg9CJdhs8Rj17fkriyJfi3B4DANF4VBYF84kNaabmG9cRr4wCgjR4BPtLux4m",
  "key20": "5e14FWPddaNqaW5167P83rmCpF3W9Y3LXRoP6KXswJ8R1Qo4hvzwnrJKAfv8taVu5XqwYFpoQ4n7TMpgKvB6w7uS",
  "key21": "4MnpRMA8WMFayWvd1jvZCaBJcUZ67niFXF4gP1d6xMJPv7GVAgcjGSFG6QV4sGjnyRiLw36TkqAzR5M1Kxa2Vm1F",
  "key22": "5fga4sLJVHeT8QXStXbXWVAp4eY17scua4FfNGetDvYq1gGRCzswjr2irapB2oeh5j27TG6mJpcGdW91G8spNjX3",
  "key23": "5gt63WjxSecasknug4JWif8q2uXequn6BvmWdKd23WtLkdSmxmW3yy27szHDBZyQpqKpXevPXCkfYmHQ5ZMUi2Uv",
  "key24": "2HxnMHaSjV8iMaYFq4XGNoWMueNv6EERXshYXuPWBTAHqmM19ingVsLvwZn58KTKy8HrXdWnK3Gx7t8sgcum5k59",
  "key25": "3FMsnv6mxSfNgVzGpYWUdUo2kTmjRJ7bC3kXzCJwXfXgw17Q4Wibi628dSMyLd1v438ZFiYNU5ho1JuufVV5rrF9",
  "key26": "3xdshUwY5G3VX8zeLqP6EzsnBbEgfTaNDp7TLdkw5cKkxbagKPeJcqDBvDwzJUKjMMbyfsB5kut4WGcymcV1Dq8U",
  "key27": "zB1miqEA8kQNZEyd1nmRP6wC3KjtzACBsWWxJznogf24791c8sTaNuJrzwDCvqZXCDMRoN4KSSmq9HsXXD3k5sF",
  "key28": "PLtsanXUz48Pd84hg7WjjQrYTZf4rgPRBpE8GGuyge29RwBjELsrcdJiK699cMztgjJgEMg9DbXFCZFQ2n9bRBp",
  "key29": "37R7eDJhBfqABwWbYhbHirsxidzTqeLtqCDQNshn3iZQHY6ooRTzw3hdZf1AXpW7czsgYsq96TnN3QK8r6wjhk4S",
  "key30": "2dYMo86TgJVHyfzSeyC5YiFcdnmk9bfaoVdkiavAvENeJootxyqLkxjAtx1WJhJtT3F19gA1tbA53WmzurgeLuWb",
  "key31": "jvwfrUfVng7LyitZn6aJJkvu44hjfnQg3CbTgjj3CB7uDzVMEgLXVkLAh8bcXuqaA6J7izdD37nibXWz3jaaFcD"
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
