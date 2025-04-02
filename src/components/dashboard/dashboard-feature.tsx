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
    "xYKnTgfXcMV7d58K1YUPbye8QGg7aQzCtb6zhUMEJ3j6CzjMHRjbsupjTjodQGqWv7uQLksU1T6th4aSVscWmty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1UgnV1pqvaKu7yuWFiWRwGVPpkAfb8GWT1bdwtMwxJdTq4rXDNpK82v8kjXP7mQakQTyNvCCuE9LVz8NARxQbpy",
  "key1": "234WaffaoFQEfPZRvAgcW3ZFptmZ9Qo6uBNXtoS8g5j8qLW7mzjdPz88i2EAYBZaC3Tq9LXssAVv9An1LfYubDYK",
  "key2": "59AoxzChbNWmB3TJmU5NyNuE8d5Azifz4k96wYvpBL1PBLPet5YnjZKMtJZYVGT1RjhUqiJGE5rXop7Z3Yr1QKf4",
  "key3": "36pzhYEWGoPESYDnubv8aFotPqi9rCECEwHviD2J612ETz8U1osDvAvWure5aqEbkAMTWjdWbrYEjEcB2FvYbtBY",
  "key4": "2ZSAyZvpt8Jnua63FCehX7gYRZ63DeRVH1xt7A9J6eTc91V46fB7ejaP4KgYK2G9pnaFoMchjuugUPJhXcRVKtrs",
  "key5": "4p4xyJ9A4W4edPY85T19TrFNHKe2SAwzWWEXtjFB38VwhekRw9u18e8C97BX66gfJaTXa5BBP1t7txhdpS4duScb",
  "key6": "29qEqGhoy2cgJ7Gy1uBXf2Z9gYLYhn4shkjgSb5geNGLr344oPwphCtLxy94CFQ9iRX9hZgsrf1rKLjwSbygDqve",
  "key7": "3ciBgNwZF2XykaU1NRWxSeDQVpyoLQZWBvkNwGK2f9n73gx3ByDi4n4gQ962FZfRettES4WUfYd1zcD9EyYwzwC9",
  "key8": "2idxkjogqPWGrLx1rVRbxhr2FoBfWkjQ1YX1RME3MFZfaY8DBKBfnWPzEAfA2zBf1x9uoPZ8bdKywfjb2aab9RCC",
  "key9": "3iXaW59pUUf7Qt5WxZX11pTcwwSdtoFHcVrWqHo6Sp3SAPEhYhTh1H9RpUknToFB51GjDDF7nBMKYSsgY4CYWRHF",
  "key10": "5GbWNdAfgrkRmmfxuxHyHHdxZFVzo2bxgyjhCEsSiMaZgU6fLqFEF4hf6cevYCHWp8rufMXYLT1ESqQ1u7oLkNnY",
  "key11": "5CUYKDwxQeBR4tqpVKRhs4fAd2zghCRkNnL3xadrvf4HgWyRiCTdGH6j4mvjB1cZ8WBk1cHoVeZ4Q4Ac8qE1UWD6",
  "key12": "41dJMVCU4kVsFjoWGgu9iuDja8ADJBBdQT5APu33SMSGTbyK4PUG4GMjEc1gBKes7hSz7uSQnsbowG9t1FwsHDdx",
  "key13": "4U6VmqbG2xiSHmfunm7HLqJDVNrbmvXJQHVJeoJqAjm5RnSXbTWvuXRJQ8Gtm2vWY2QvmPrRRoXdum9wD6kC9XvR",
  "key14": "GGyexeW66jVBccBH6PBpzZaQfR5rVJMRcdvGHKKBooiKwwF1r5vT5fYkBhB55QhpEiKp8AmhVUdRFhKeW2U4SbJ",
  "key15": "5cJfiYzSESyiMrF4Uboz3FyqUbsvXqZ1e1fe2nXkR1hTuZuDv3W9KKwr5H5taqCWs9C7s2neMU9itBFafY6WC5Sk",
  "key16": "3hS41dz1pxuPthZbFmYaE5vh2G1VoyQrFv5kEevRbVx8KpSG7Q5DEfqtJaGqpHexNhzwVzqz5pKaRqjcjfzgUw2g",
  "key17": "5csBPgLfzTfq1aN8jqu15AzoKK1UEsguxdo2U2uLWYYsCCUJpXhayxPYgU3JzhTWYu1Udvf43V7ovM9SUrYDLdnn",
  "key18": "5Fum5xvbyzCZ9Y3zBeYG7cV6VL4jKmN1FSA5Tf2d3WMXwGQ9V7k21bbinLWxD3vAfbaGJbnWKjgmQ7Bi9MUK7Jme",
  "key19": "MYyqPgSLgdn8PnSMxrHVsSdugCU8SWu5JHYsCVnHJwZPtUidPJ6sc5eoiefFYMyBcyn6GWNwUGQ9uv69boWQwvo",
  "key20": "3HTE1HMUhFLFL4CPPrs8fjhRNrpVhjnmiDEZjXFoKdV4j9zb5aPhYFVfiyVF3s2f717aWdhksvPtQsGh6rY7tcDu",
  "key21": "s1fiokRyXtxcDRUKqCeYL13U2LtQHsdME1hVpH6LCweuuRZkS5gPeanAaSvCKACgSoo6qxSoQvonz79tBrGzfoj",
  "key22": "96rBqjx24xyLAcjsMsrt23F25cUFURm8W8qtMbCq4LkqvQspPtEbLPY8kNwnZeTxPDWXuhHeNMNcCJCTrqPvADw",
  "key23": "33VfbVWHwbWoLtLjLdVDujzNgBJJFmDw7h2Lxpou2oSg8nRMGAeZwaUA3QnQaGMGPpEPbp663874x4trsqhvsL7i",
  "key24": "3nMX8ygHsXDWVFNeiFynjH9qt93H24cJkB6uCFo1HrWFW46YwG5j1JLffhkz2bVHZxa566cB8GC5jan1rnDNcr8o",
  "key25": "26dysUaJx1o1tjSgRCK8bHgSs2tXXC2z7zcExFiETJvUYGadN4jfnJTCTjamyae7Na8nh7CAn7u6Q4kT8Wsn1LkA",
  "key26": "57kjEC5hQcZEtQzfwBgjypBFB4Gqke3hWkJ1Vv9iT8pfNQ6WQi5kV3VdCioV9akQ83VHzCG2eAkkdsSyeuiwRqmy",
  "key27": "32Mgwgu8SBcei5gVb44teQihgUhnMAScyDsd7hscGsFu9sZG6PHYvJra13V9Ar4SeQuT6MBnaHh2Etp9ADhWSpJM",
  "key28": "3oyXZ9TzLDHizGiiiiAeouJPkbhqeW99yY8tTbjxZP3TCVotUSjcpw1XyMHbWgWcMLE1bNpgeEjcw4xRfGXMkRkF",
  "key29": "5yCDAyYcssmUUa7g6Qiy4oH8AS2unYqU9vr9CoxUCMQffCPwDG2izhDB2uRUtQiQ7PenKaMqHKdSrfB3dgYefr8f",
  "key30": "2JYr59cdoxsDYE5QLo7Ljhia9qofbYTPSQLaeZ8qx2vhhPdrKvnnyCMjy3QJX8iKy88tUUNLRRELU1EX8nDzNenf",
  "key31": "2Qtt8DqgFmP4MYfZUikUrJuCsCojK5AJRFJDrYmoXTWGwD48mDGu987y8NRcFQQiFvvN1MDqe9YPMrj2N3NXfE6j",
  "key32": "4FrTGxDtAJkEgpRRYfbhFYRDLAcqFKXW9vYETNyzxbKiDuvNJyiJ8SR3k1cJMG3eTBmKk2dYnqD2wwEZnMBCkGPe"
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
