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
    "3mpg4q4aCYtxshp3Pmim257FxiYehbfCde1X653VvDAGaWSFnBvsGg6cuSQCZ26EZrNypfU7CoxMgxs3i9gEsuFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DF5CrX33wefbKwizPQqyHjjHyo7PipWytB6DxySttr6mSe4reCbGAaJxtT9XGj3mYBUDbAiTgsCRy4KZjwSHXKW",
  "key1": "vyr3842nNe3ooQWWePq6UwMsXJy4ovhTFYjdfBsjy8LnRwEyjXioAFicTQP8ozx61VMQeYx5EzCB1HShjSyVK3J",
  "key2": "1s7B9pMoRMY2CiacrbEwR22y5FmXypKQmaZqgJrxpqMBaCmTPZHZDmMPT5hyTyjXENZDdHASci3Vi8r1JdVwdhX",
  "key3": "2pZJULwvjQszh8NEYDYacCeBf1hwA4o7tukYayNHhcx8EgmCupZiP1wWcxw44NnibTzhk2KcNwNUhz8uqDUk7Ssq",
  "key4": "4CnFpDZ1fWRNd4TGc5GGPkZxfbKWSfqsQshRnGAJ5ZCqkLBEXzyiyAfvLD7EDvpBHqkiLKEB7ueJWkr8HEfEFuCp",
  "key5": "66CZwwonNPdSATTG3G6Xthgm8v5WwhMokRFJ9ykv8gFNuV9gwS3r3mpRxcb5Y96AMK6rSn3kJquMrMJnMpA2FDoz",
  "key6": "X5TsALv4djEKNJHz7c5RyDbYmYhZnT5PPyVuB8mPKwp4uUQ4XCnjDbgTm88NMBGGfwR4RTg8afPNjtn5UmGEs8h",
  "key7": "4Kr7zaoMacBGsYswKJsEDzCqLVWXtTFXwFJkWBscE4htLm8r126rwCYxozm9MrUCGFUhQLJv4wzAixV8DoGtjQLm",
  "key8": "4SeZ5jhYc6FGgHGEd4Kwjkkq72cERq7pzQtsjG1jA2prQndNrLPe5Ptmd9SWLFEAAEdBBJF9FTYba7nsD7iVkvVd",
  "key9": "Q83Rhcrfkbi8DrkaEZ3MZq1yanoGGL1tnJDfDkV3GgRuDhwL78RYzrUhKuWyJd6jK3BcZZCxJ2xW3FU89KrNqzS",
  "key10": "nnYWfMGECvfXMmU9d55N3tkjee6iDrhSqkYT4tn4MLFxNtN4wQVjvcGeRzHc8JtsCpkNJK8XWz77HSK4RTUvn9i",
  "key11": "2T94rXZ6Ts2qbFcM5Zn9rHrfh4isTAEi6Wvv6mw5nvmKcsNHg6QoiBwmRjRYTTJyUbtk7NaUncFWnXQf71cdwx3T",
  "key12": "3B9x6MrirwqxyXryFWg7PHxvTfuKpXsU2LdujB5wsuJ1UoEam17D6d5phDvfZmzo5QeAsp3h5fAVQatM8FXD99fr",
  "key13": "4XfMaiJUFgZYXnfF6uxFBQPzz9Ni8f4Z4aLCnZzNrumqSpZScDKtAAqwKZyCw7LLQ6qMHLQM8nBdZjx8fsPFHHn4",
  "key14": "4Snf6Wuq1UPAi1DBzgJzaaupybMepftCrac6GrhpUYTJQe7pQtLZdvbkDCvwg3MHPc4cqZdWfRavGd9DN1idCfQ5",
  "key15": "3XRJNy4tyPvzy2wCt9Twtn9GifWdKKZKohBsMMvadGThwhD1vhaanAwT6gvcoz1XFmTwUtiT5jC8qmtYfExkQ1Nt",
  "key16": "wjKbf3GGVkHvHq8ZsYzBrYrg5FbgWDZ4ptiBUCY4Ah1jbUmZ7ZGb7Z3CLDrZB2fTvBzYbUsZVXbLvt9LQc6fB7a",
  "key17": "31qCbxvFuYgCdzVwWdXGnSnBNz4fXy4qpMWq63n3McDESZzWvgp3Sx2CPFNTYQEwZxfQhjm1Cjo6t1JaCLm24oxF",
  "key18": "3DN5WHJNEFJS22YWyxvJVFUmYjuVu3fYLKZLQgNZr8k1iNGib2c6pQGvho3ohgFaKaCHKgez7fjrwDBUwVnCU7nX",
  "key19": "5ysQLYVzeHvLsonRfbQ7o5ozGwXjhoLR3LzvozSr1ggDS8RTjrR7VNUZZxwVQ9zJvCpktZkE1CVX8AALxjeUnPJA",
  "key20": "5Z2VSZwZV5v2yTUX7vjE5ei9FMzSYHKAQ1XtDeZ8xteNGh1L1narz3g9vbCtaqZRDTSJtJPU9gPn87YFSbmTLezK",
  "key21": "2VaJEq117YGFE1yAxe2Q4TXrLjXzFVikjiZKyvyFc75eNHnPkXD9ZC8PK4wtaZAf455sKSVJYqne4uR7eWSf2xeU",
  "key22": "5jUHXzVs8vvUQxSxhUdGbc2xMHd2QFoHfL8CvMYifnQEztaYjGHNLPrXjJt925vxYdLzTYdGExT6ojUdgE155W8y",
  "key23": "63hL6eEfaf8KX5FUC5TgBnxj44umCS9hYGAix8mYi25bXsrvVqxeeWrJLTtDCcvKnZ3NE4B9VeWAY5yK4Azn4inD",
  "key24": "5FMVu8WzxhEDtPh8mRQeRwTNgvx6WHZ8DCYspv228qYQwK8sJA7sXXm7fqQ2ohJqsrCsCdXCV5s4Brwesw8G72eQ",
  "key25": "W5cPJmr8avNTh3JnKc8og1M6fJwXzUU1xoRb7mbjpVFqCxSh9ktUjK9Hfge7k6Xq6wndvWeJPKq6FGH8zp5gUuN",
  "key26": "2SAQRL2jNfBrjGdYt53tbo9o3Et1iBYVurCEBqxF618xzCra3ZZJCWDAE4CoYKoYnEYMmZykHdY7W3g8oaKvZJp3",
  "key27": "5BcGv9Vc9BLXfSHeTopnXQGGsjhq865gsRmk9ciMUHqdR2zkG4EBQvio6qLnhKbnXn51vPukQzJtmX4m1Vvdx4V4",
  "key28": "2CaaW19yzFjN8tnyYkaLTQSmZcWLStfPrHzjVghpJBBHAoMLVHDCNBWcS9H38VsHHDv19WFWSQrKAq3bpFirWvvg",
  "key29": "3uHoK2SsMfRxD3i5mS9VzUBNznPANvqci9dJiHyGcRmXcjakVpFdzsfyFa4Ck9Astm4dF6VzSGKCHGvR1tdsdNLi",
  "key30": "FoSTHiZwmeZ34JipLbyW9V9jrEER8KihFePQShpth63amidTVq8Wknm89XZXMtjzZUK6NAnttrkPc8bevWXxfTo",
  "key31": "446fX8txqKy9TTc3gAddhrzpPfKPY1ZfPqozaotvSUV839Um5byyYN47zYZuWxH7NCdiWTKdAuVnhyNrJbBoSJCx",
  "key32": "4C5hyUk2tfW922Lk5gkan8ZJhUVWeJVw6DujY6W6PJkMTFaTfACWSFMW2HZ2QcoDeTVgDCfzmLPJrALqWZY9wJeR",
  "key33": "5AMezKePwDtebuXqbSHip6FnqpvPNXbFvUY6npfm94iYRyYHFoDRumaN68CH22WRsPV39pVbHA1EzftbQQBM4JGY",
  "key34": "5thdSRbup7rvpPyhwozCDLbbF93SEPHBATjgbABCMwYqXfCXT7dMvmjMrtwpedyNHmynorB7vxZir4jYprjQUvBD",
  "key35": "5BpKXT9V8YeAr7NgnzEgrooyMiBWMC4sMhy866VmFq6huzr7VhkMqS6JqrSp5oMMTskBb6GJKbbpbCEzpsM92ohP",
  "key36": "4ruzTKTxEQiR4PX4EoAUqPbTjkAi9SW5kQnDQZxK9VgDG4C9Ggji73RkJ3mMpppEof4DuJpwK3darQQUWJpfNa9v",
  "key37": "5ARuMMFPHjEnZQydgEsQX23EQWR41vVKDVa3fdZAohxRqeKxxFKfyTxvP89oq3T3zM27YVmAHQF4bTqrGBQTYqHE"
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
