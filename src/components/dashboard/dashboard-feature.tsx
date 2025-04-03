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
    "3oQGTF4ECVPMDsvR6SGgFhPExPWTf5J2K9zW2LbJaY9hAkEDPULLoHkCyW4RMcit9RCfMqs6brFg7zjeeRZyjxFj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CbXryLPB2x33mmJTG187TVjv8NhLJbSfK9SE4zNnKh4tWUvXijjqMLjaSQTrjofut31nFrNneZtyfPF9hxeFTue",
  "key1": "2rA43DtPpKJfiBP1n2Z83Z5imp3xx6kxN6aeQUMjDEvTyFs6jRpwZqp5RVzzrKQXN3ThkbWc3eDbxLvJpmwR3qJ4",
  "key2": "bDEg9y3kXzH8ifTbCE7iXbRkFtPNJ3Wj4jZxiUE2az4z6Xm1KGEZ59cVKgEozc7Efw7S1ozC5CDcYoqPDh7i1AD",
  "key3": "5CjFUhuUdatXY3q7nKToqqbYWjFZ79AqVcf9y8PPbW2NrWyAriwKBURLv8TArsW7pJNhjsPZjauMEURaiwP5nAiu",
  "key4": "bc919ttsgcqrNBuXsv1iJDV8p22z53KGHW5kpHskbWRRPGpVTbvaLQkFQgnGNzfhZ65UjVKc21PV92LK9dmvEch",
  "key5": "45AAvuTc8xtx8HQyLcBTxMPGx6aWaQDx55BJaCx4HUkBTa3B5wfsswm1PaPi9ikADibn5MqQVqTGEKj1EbEEG2cu",
  "key6": "5ToEkbB7jG1ZfdMXez6VVQXf4guF3T7drN9whCP4iWbvf153QYir8ikZE6DwRB3ketCptCpEpJhq8tsNcp9YA3R7",
  "key7": "4D6csyETFvxr1mKAoqBR3EG6VE69XYHcaUKNrvV4dKC5zyKGV4JkwNmXyQVV9HNbCrVKFQMgk9MW9n7PHhGX68Wv",
  "key8": "QpUvf2XH5boH8cWZT2qmQRWqjDC9nUX2eywhSnsDnCzjYm1gjLkotE7zTbjV5X8f26c83o49V83qgmSoz1FZPpH",
  "key9": "2i3tkgGaDwHXZo4gpeLzXgdNS3prfZhRUwAyDBifXo4tfrB9KZBErhjyMFv47A8yJqsc7dhVLhoowW3BfULW5yJJ",
  "key10": "3VPDd3B6BWckuwkCAskva2mbAmp5m62fjTYER5secMtQEYNLxGRZaFsotnM83mPfhvPYjGkYQvS3S7bNiZKiX6sF",
  "key11": "4fcZFNFqjuT47DWTKDjiRQPiZpeZAXd9QxsouWiDY2U34n8QM5awUsWmTp5uKFY8NLHFGsi8h6mEyjeZL9qarnFC",
  "key12": "5cbZGo1Lik2EHwvjBWQVET3RS34w8BfLgs29kK4rjriwPCL4PmCjKePSbGvvxWgTn7acH39JkGGV75iAWtkn5vQQ",
  "key13": "3fixQhi8dEanFbcqib7cGJrAABFgJ7m4UT9S9JjLtNqY66eAGNV8dZDyQWFt7nm5v4TBK3jLAhZZVq5k6XCXHdY7",
  "key14": "cd6njEs1LCNvyF137x4uGqVoRsF5Vp12TtdNdr6Z3zBTEmnu3bYQR2B1qTi7kUuK7ftHXNLgPq7sZmzD8WVyxRA",
  "key15": "LKjCQv5Py7o6k56KMrQkHZLewwpYY2PNY5kpQsqcviervkZ8A6jX5dhHYZzVJ1W5xNJtyfurDDD5wYaiVRqPbLK",
  "key16": "5VeZukYuPGTVwTJ2UDTQeYkJnhVoqpAyJ6RG9sLVh7PC5G3zevw8wrqfLJYJY2hSyhKHLntkxTr9nSD9oQBRD8j1",
  "key17": "5pdj4qGQXsB2jHY4FM6FngV5Q582P5xz9J47RtJ6fnhRvpmN7QuZ52D2sCF7LMkctnBTBQqihqY2dP13APMzau99",
  "key18": "54qB3ev1mZBZiDVnodzvMwCXJgEry89hsxinTbKzQctvzpyTQrgJdRxpVUfLqZEDpT34qX1tYLbop22wanf48sZE",
  "key19": "3mPJhg9BQqCYPoqssrAKMRUzoJrbmEu98sQ9XEpcU1VU5reexi1L2Z4Qcgz7g53kUAjLLsGQFkU4BHu39Jp5H3k7",
  "key20": "31sSDp1nw6F34UjmRLUnHnBPJUGyJznZuHbSgDp7DW1aTDb8yXeQ7whvk7C3Ri8iqbQdLZiBhCXzpgQTJtntBDG6",
  "key21": "BDT9zP7ZRxBz9eXcU6yGbYLXyB7E3sKeohd934Lepu7eqg4EMoi6UG26FfGoX1RVaT6ZV3ejCzM5WKLmL8JRu9F",
  "key22": "5q9p5gmGDimYX3ehgVdtfZopJ5TRW1QDdcx12AFWM9bY7jeEMAsJZTzVhzYKc9AtYLoQHV3TvLM5EH1cxz2zk2jZ",
  "key23": "4TqAdwG9iEApr1cv3dU7giyi6nPahLRCfkRpQ8ZVCNdZpXfqZPpEAnwP1hohPFEtC5GK4PogcHaxiFVEDgq27coQ",
  "key24": "2eYABVeXiM1NTb23t2nyUfqpiN4iR9LqAY1nuHCkR85WUP2HGbzPw6CF5JDuo9yThSfQJFKMJJwKgTZTxXQ7dKLH",
  "key25": "eZdEeoH3NU1xe5LQGujji5K78MxVA6kj3Hcxvqx2ruUd4C8w7Tpo53hfi9Q6qTKPvyRENDfa2tP8sXnCH7e4q2n",
  "key26": "ZWn8obYLwRPejgKtZoWvCgTVd83KUezsbY8wVym9kjfeBnVuhXJc7MoDucqdUCuuPaR4UatWMtbBnBLCiPno5Db",
  "key27": "3iJXpABcxiXirzcq1k5rggxz9ijMqhfrugfW27T3Chu4d1brF96cVYrCuMQLVwrnfyUe1Mowggq7HLTdcpkNQsSi",
  "key28": "QMw56TGfYhBSNK4qZ15hNtkTUMuDgoG6LoX1Tis6fNc4avgnT2wAwwfAimZGhTTDa4P4w4gCawL5H71ZHfgEQr2",
  "key29": "212MbsEFVMr5BSiwDxNnGU7bNo1okdMfQdbFRqbMeASWyqsS6LQVr6DMuNBZg1buNv7vV5i17uYd5skRCKh7NH8J",
  "key30": "63QUim8QonnXFd3LGd1xMNBDKmYFAdj9M6C9bf5tcuJmk2fuFepjTqZZB5ayHRhpL6MHZFLuUDY6rVikUJXdpSxw",
  "key31": "4x8xMTToB7xkmAhEUaaTUw4mErzR5cZ2PoAHoN2CnNS5YhLhcfooAdkf9rYAFNZBuVfFkWU1nTA8HwjtkVrLaDgt",
  "key32": "3fk5BKctHaekgL5sQDUw9BsxWbxWNUM1cEKFZgGaSvmkH3RAguPJX5dgQHHikH6Sdj5G9w9dPNP93o84D1BBWzgS",
  "key33": "47cdxUYQVhn9T8JVRa6dSCuqScHKZW3BS671K2Wjn3GinQzAhMZ3svuM95gzw7EqbhUwKPRBXFf6w84oKvhbnd5j",
  "key34": "4uMF99TGCxAYEpNmQHdj9k42jQ9pbE9FXKrfqMoc4uBfE9uVGk7SWqGsxZpKUW3Dhhc6KjR3dE1ZPJgXUrYTzDZR",
  "key35": "PbZ7a8DGYzTc7w1zH3g5yo1Wd8Z9eBEzT177kd1uo4j76gY8NNrDNc9jxAcwUNyoc1VjXv2qerVQJUPZ96qVAZq",
  "key36": "5rrT8BhEjMPgQf4aoTKHgppQnDLacijYfVDremzmJzac4hRV39AXkA2dHhPeTwfmKMtjbexnwWZLiMJJpWEWR5E5",
  "key37": "RB5wdbe8s6NBuotE6JCaqq8C71xmW7A6vBvs5jSsYuUqvej25RXjxozma9BkzLNhEnGM7jxWsHQYEE61peFSnd2",
  "key38": "o1Cu5PurXxuMkDd4uANzQQ1EAYSaBUdV8fzSdvM1EZpZuY1f44g4T9HbWFjsnM43uYCQCP7QYkLKZxAJ9JMjs2q",
  "key39": "4aK5sdCxvfdTTChA3jVWg6ySD4njgyfEeYgokJjJExVBuEFzYXG8TB46JhaT87f1WfijJnV7fRdH5Aj73xnWJDJb",
  "key40": "4FLbDdTGbEM3vdLySinhabEmUXciC7NCmKAakaUY4q51MhdR6GovtNnMn6N1fAiN7usA5ZPa5xnkCcAjftwD18jC",
  "key41": "5aPCsWDs8Cp76aiMYhuTVB9qXGv2ZVRG6NPApGd46H8vow5mXn9b8HG7vrxqUm7ddTcysWbc1biWuWktRbvebLPg",
  "key42": "5GMLnZ58T3h4QHTHkNWeS5Q4fbqy2UQ2xUkPFuJWT4adCZYHnwLBMm4QPfvEe5GgUjwNm9ckirTVS8eWbmnGQLCz",
  "key43": "pD9Hvpnj9T4eEQTJAtiKw1rVxH8WVWfrfhPKAHa4ig1S1UrmAixQRctiN6fS375VqffQEx4STB5n4VFgWQpJiP9",
  "key44": "rmNFXNY9X97EAwt5BCchBRecAGG1dLKQWihCYZA5hH4QUayYP1ZzEjTUbUeTmYgJUNNGYwjb6CQEH5WYSURL5tH"
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
