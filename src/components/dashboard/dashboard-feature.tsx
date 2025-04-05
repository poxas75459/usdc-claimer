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
    "3KmV7DrQQ7kc93ycGkkTi3qjFjnhv27rFQu1yZzyA72mkh5e5AUWdBNdqjggjq5oTz8C1nP8dGLQNpCbJtkh12Qk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FT6FXvhNgbRYZUwfqHcYzCXJdVRUJPnu6ELgFQQJEupGJsfBTXWtvV2NpzwuNpwyGVdaHCxQAuc2cjmNpkyWNoo",
  "key1": "42e3tuyDxUQB4aXGzMVgSvn6Ei3YVpDUgqnYAMj59ZXfgvgJobizB57Ma4FpwFRpDDTNbFxP22xx8UT7hhvnAyuC",
  "key2": "56nUbiPt3ShxNLYnBYD8fDXXc27PGSAA1QzEqCCXGiBEXV5qaJUgisZiQ2t7mnW84te73Gcu7Cz5BJ2YFAFGpeWk",
  "key3": "3nXSjtDpwysrjmy2RLp7PH1NHM8YZJDK1nM6tuWe2GNef2De4ucn5PeFzYNwd5D1XcS7UVpRiP8g6mxEF7VVj9Hf",
  "key4": "2CT9BQYrGmWfrUWovAp1Chqizws4cM6okoVu3yEAxYUrpC8BmXBeocF2QVN7QgdL8mUZpGt3PZAxQ6QReVyEvNpA",
  "key5": "3HrGHbb848MBFFdbiW2Y6yZmcDeVqmhL81xWs4MXSTt37SxzTDK9C8twRDBvWwmW7iyn2TE1sMUmcZbuVvWHa7Ha",
  "key6": "UikEB7fqAZ2Qm5NdYUnNseo1BaJ8tAUECHgr3E9hBSFxsGvq9XeNk7fF65MkPJbtDBx7KQbG9orLHNx7RdzNkjB",
  "key7": "2ngydT8P1y6t8uJYXWoB5aui2t8ve2nV9Bsoa7ai2A4AJEbVsqrAvLuvXJN67or4Gotf4tksF4ptBnofVZE5XtUe",
  "key8": "QaYHs4RHby4QpxMC6zEmht3UW3GUt2afZUyVUCn12p5qkX38wtLSAbrG7WW5TDMBy2pwPNUzVRGf1qVzG8CEVDM",
  "key9": "4ZfFYeNFxAjLDaps9zzuaYjV5R15zSJZVqr83a4kM51oX32415xgZtS1WciKPmj2sofvk13YJsktkGXa9nU5Uo69",
  "key10": "jvEiziEfE1KCjCC7ZN6TrmCAkSrAi85qpbH4Wkro2cj2cu6CMUNjdh9ZM1xKDzc9JYAdzdJr2NG25qyWHx6kCBx",
  "key11": "36Z8ynXAr32pNkxF8UvXxkRdG9Kpxv4AkUh6mAAQ4g9kMc9CGszmkwZNkoQ5HbVjaDjKtZTWnJUyFLNVD4W4oa2P",
  "key12": "4yc6XFfa7PHMyQkU63HC3jTzdtTyyRMjpe67m4wvBsrHRtTu2DB7tXqkjSe1r75ouipbcZSqREVSxEE59vG71ULJ",
  "key13": "5i2xQ25iYeQvD871jgNo26GsWthSLU5FZQuuWTKt4CMLKk5buZo6TG1peGtGMj8CiA23kkE1ZSjBf6szWtteRsP2",
  "key14": "3cytJaFYjEnbWgNBXFfsGoSb51B73NRz2SiCPrATu1e4Y3qZ7BB7QYeetH4fETRSfizHkugNZmWf7dAvLwHjW3nQ",
  "key15": "2r7X8VEGwATnYgkSUVZf9viupVZhZqVUzyYRubKY2tdsvYJpWaw6EF5ConnE9Gzc8LdRfp5ZYWakMrChy6P4MREE",
  "key16": "64pr1t9LU4bh2YWPyN2t1FiYzj8h2hQobNu3atvL9CWFX6bpouuMxVZFUutrdmvCYt18jy11VZaCg3sRPyqTQZV4",
  "key17": "511HuyBgttinzSsXVKsRzRu9Jkyf6nLRzAMcD9UC1xzqUbLoV9Ag4nTNtVEwTe9KyZBJhqWCGWtz3MLb2WgWZaPF",
  "key18": "2YGZJAcpz7h4RNjL3rPQLZGWKXnonNjp5ckaSs4iF2qFnEiayXhUns4Fyg2Fkd3JRQX2wyrdxjTnWbg2fDBHYPJT",
  "key19": "2x9oDzbQG1sU1NarMQ1RohjXDX4kPKCQdb4U7upbjMdWLd1M8tD2aZW9gcKNXkkph26do2AePHZs83suqHQKoFrg",
  "key20": "2o2o3Yy1rvL7EKXC5SjsfNrpJEyh3gbPtZ1qVduubuX6GwidEKnaZygro8fRkpHVx9beYiFA94NhtexStynAcjPe",
  "key21": "2DjvCjEoiAmYnjX5V2Bb7tZtgW95agMNrBazovVj7h6xJriPcYEP4q6N3gz1rpH54kpiwi1vtMNcVHEGFwgr39x5",
  "key22": "2DYv9gAPL18DEMTRyb6ezQ92BX4rSgnpAwX1Ye8uLsXgP6RxHy6WDUacuek19CtYgsj1QpBPZ5wQZpbtdDzZaA77",
  "key23": "ceucb6zKJpuFbXE3tLk9ntnNLah2ahFjgr9ZkGmqV7KRsZHCWY641UCH233e6tWPqgRUo8h8rh3uSsFM9teTmza",
  "key24": "5hQGZhZCCCa9gYoQSsv6soP8UyaK7L7B9zeDmXAJXKqmb7ii24bieSmjSwHw3ikL8EHivx4yp6KE3BJhFrUqeBim",
  "key25": "bph2jrHn9SDVQLza56KVQG6s2R3oyQyUJ1hPG6Jg6HqDtbSpmVmYCiNFUhwTfVecHLspb3YhmJxfcdt2eP8qMpL",
  "key26": "5D2cEMnRTyrxwTsY4ucYhc2WS8bU1EL8VzittFMwztERPTRrqs3DF4jzoEMirkFR4aJHGtnBybFqaHhvxWytZHrk",
  "key27": "2S2V6GhV3ZS1utKkeqk1SdaUapziC8KXCwhTGycXnwqm6FCmbfh2AkDuZBic9nFyq3xZqaUxH3RXoNAznXvMTzCg",
  "key28": "5P3Hpm3RxNpQvGxwapeMmURSYAHeoaFG5s6accMckq3wMvoqiZ8kbya8UwHxTN2Ek8nR5Jrsp3b1uE1WfmpCrQYx",
  "key29": "4Z3frLMbbTHcEjtWWpDWGm2PE17e8nKPeyRGutNKSi5C1Z5ptSE3ya5dbByKaokMQa8PnvotXZVdtwn4nUkf5YMz",
  "key30": "3yvtGZfE76wQTUPcJycjYutvNZcm81G6JeGKjrmwKSGz9BdkScws83C2udV3RiFVtn2yuj1m2G3y9HqKknoDoYdT",
  "key31": "5FMZ1cxSn3RoQhxUfqQd9i4ZptcjAozhMJPNfxYfpsLJu8sJXFFe3PTxf3AiDoTbEhNP8ZNyPFgR8rLC9M8i22pH",
  "key32": "5XD6V3yrdd7vBgazJSQcSC6pQ8iqu7GgjG5691t3Ts9DdKYLxuaUJfHKF7RFNythmerkWCQkZ2wdcM6nfco9YGxC",
  "key33": "5DgWEfWXkBACmAfcgpEZ2dENXhLh1S1HE6fDsRP6Gg5aoRoVbetcDLF8sJt2ekkeXh1EWMyDFDQsrwmhHXU7rG2W"
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
