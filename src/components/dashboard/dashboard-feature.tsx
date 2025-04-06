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
    "5Wae6YvPdZLcaHmsKcVeUWkSqkpStapxqkH2PnqsQ1jJdyo8eUSHkqicVW7EkY7NLMoNAS7zAgbjQ8ifLtghSwMk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EvjYZEyCNkeQjWaDsMkbv46ethNp4s8Y8VEjzTuL1E9Ezccd9wmpM8pHUXwfbjrZ6yv6ApdRbvowVcYicAQkorq",
  "key1": "5R7zMsjVFyunRW1RwJgdt2QffxhZLwoW4jd8ScUJWb9AWcg3twKRpjpfe9dDPXZB1YU6SrGWjALkboSyDRgUgx4R",
  "key2": "4r6H5VUiL9RWKPBbuRguXTiZBnBKwEYFumKSYE7YtyaNQneiTftfzBFHckC714GEASaq8iig8mdtpRyTex7bjv1U",
  "key3": "ChHCzsToYviH6Anzev7jSD4pwTNFRPZxk3NjcLm8i8ATXG6PumS9jicGnQ4iuDqfsq2iCpu7hQKtPkWzbew3JoU",
  "key4": "4DrJQSzbRMgc84VUD22sDb8tc1CR28XyxN65W5BJBvFszK2iWKvjX98Tn6SGxyTWTKRaPveQ9sj6z2kWr4fmu2og",
  "key5": "2zfGnTuxHk9AjtL8kJq386V4RAdos9tqGVikGPGhpjiSRXQYUbY5ZMh8RAqJZSXxYhmquaVhLfw8jYc6YbUh5bd8",
  "key6": "3hjTJrvhJdju8azse38DEYnePDbvkxkoXwrwhqzHChH8njRcf4EiMMaw7fPQpwhYBHLnGVYkmsfMcK6DH78fLYDP",
  "key7": "4poWtwbQhvigFtJnX3YsPT9fZTurEQtSPFBBfuLum3sosF2DxhY1rAUjcUqzhH9W4ncQd2oAPZWGYv8hSKEdF7X",
  "key8": "4jSYc9DKbcdxfaRgjW6egJaUdyt3CPyk5eVnpsER3bL6zbLKnzbYXQgWZYiWaNpcZtgmkyCQxoWRXZKKXmNrt15J",
  "key9": "4XX4bpJJRP7wMtSxDrr72bLF9ewaKNtKWpT8vPcvNyAaTrTn9BhSAJMAEg1h77etNdY2SWrw2TPubFEFwVpm89Ya",
  "key10": "5f8vWKptrXQo67mViLCEgnDTQUwhMgD6i6NaGqzqEWqW5nHFMw9ncRDwbun9Z6D4i3fk7w9wP9vsLxA9Q5Rtt42J",
  "key11": "2audwT4kygm4owFZSKxLwJ2ut3bp4XT1GFBecUC6fmbMscV4eac1247vBUQiEr4GSEW6kFa6ar9HyziNEqHLrqSM",
  "key12": "2AXExUMKRAsnSbMyRwYfmVAzGc4LrQ1Uquu9CF7SfyrLS2M9UUPKW3dBe1a7inxt4dzbT6Z5kXhDp6e1YRYzPd9X",
  "key13": "2KuvkYGmxZaX6synXxAEPJUKUoKUeiUsSTVgmMBxSrypUaZJrEtVYd2RTQ1YkvBSSrVds67MpeSfRzXGYw3ud2ft",
  "key14": "35aCcc6PThJ7cWHfidfLMXLxLguQ1v4rDE4qSYivHDD49qY9wrXWKbW94G3BDmkN7p19cTProycq1afTMYVLaQQn",
  "key15": "5s1QXHRH5YgtPuYAtmbZeNDVaDqUgiQhnvLvw8nJBye9W6DsWXgZg2zLdaaoLNEvMz19TScAa21iSyFhwhKmH8f4",
  "key16": "5a8mzbpArSwca2dMbZ6jAVtHYLhFqTcoR5tWnDpgCErzL9b4Z4Nmv2pYCePabyiUezHF87fmmSufhpqkB3bmrV2D",
  "key17": "66c9zQFaQdRoLxPqD21HyNLQJCfMK2DVNEr5hXj5JFXh82xZUqRkTzrJhmMc4XdFV3L37WWg38n9xvtnB1pFtJ3",
  "key18": "44ko1tn21KAJ34ogzKH62peEYHviLuAgoxxxH3CfSu2Hm2KNC8a3K33JBd8vEYfzCzaXT3ZodxCQYUotzJXVTgai",
  "key19": "4Y7SHurMYHy7F29qLEsgmc4tmD6wypQSWeqim26tUuL4P8vvz6wuSTAZnewjFLVMv5143BvysXceDJ9f45vPhBAj",
  "key20": "2iNsujdBfZapDH8UmPMAFHrLCsPf7NriKtHoVchNgNUNMNhBMt3BUZ1boh4ceAnSSvSVDciwCgjoZLqqxLzjaUeU",
  "key21": "3GAj9Rmaqhgu88vWGnBEJFaEtLqyHQ3GLzoAptv9vmT9RYEq6bGFjVV7aVCL7mXvZ6DjcUSVUUgPavYbgjptVbqK",
  "key22": "2oyTYJjZd5Zg25SQnsQbM2Hjps5E6nKF4mNFiteapqfGNN6uhF79wXojvnug9e3FuyWtPhxPpmBHm2MX26aiuBYY",
  "key23": "3eb41F1D7Nemt5SASuxmq8s5UjNaNHx77Q3AjgkPWCz5ckg8pZo9kaJpBVQjGcahJhd3nNDrb6pb3PNDR9hJufbd",
  "key24": "37nZoSeYG4nr5sFpyVQ2KVtmM7DRuLYdzs62RYbmuqEGjPxD6chbmTxnnH7MYVFhKiD8bj9Xx3zZYhYaWtqoo6p6",
  "key25": "4164R2xQXZCK2qXkZd4JZ3a3Xse13VPhuiS2Wo9oq72YpZPgMNhtoYrSgtMgg3h3wQNB6s8V8GF9dYrFWqCj2ZTk",
  "key26": "2sCvrjjDinvh8vvpcmEVbqfiKbFB9HzXi5BwXak5a5mAe7b6EgVKieRNJu8Fd5qTfemxhCFB6MyBWo1APJcPfNif",
  "key27": "3NvaMjCpfzfN2PPryEtknBJVgTXyArPWmLJRFvbwKaG9xjTbJUis3mzTj2FYVUcrGt9ou132qAAwoG8EhRjbRdgS",
  "key28": "dJ1A8Mq6wTcAjRjMVNWRGhJZ4yPgXxMHR7Z3HhUG7VtpYS6RmKVNrZGD58gj1WQk84n7hFYS25rb7FYkxDrvWME",
  "key29": "3Bb9Ce4KpWbXyygnsvUPUrNbioE6VQgr9sBPfd7GmmRN3aX7zHWXxiWneRdR6V5n2CPQw85RjpsN58b5r7pVN67J",
  "key30": "453gBX5K45NAuZsGJzUsvnL9go9tqAAvmhzmf8am6SzFe2TBhjT98H2F2UT9joDmnLL3HCHM8FX4Uosh6truxx4j",
  "key31": "2SiC1UqWcHBxjgykGXU5HtvggFgzoQDpc7QPsgcvGAWGi1E1mMvBr8635Quo94wnGnoo9d4H18SYy3efS86oBxuq",
  "key32": "3134YDn1C4Yy7Am2dysrpPEQZQpJcYkhvVSm3XvUGLNMPaJYFFnTYDy66E6XpKg6LkN5E4o5suicxcDZnZsaPmPp",
  "key33": "5vW1tg221AGc4ULi74YS9JGmSDp2fiyTbY99Dj2HT1wNoTWECcH8gYzGUnHcKp767LzncC6JH3UFFASRbVAAxRAJ",
  "key34": "66irqkSrETETUjo1fgb67Fn4stuYDeXeQQ18ToNULiA3fSQvQC6D6FVuo4HDz6eF7Mb42VfXpE3oDHdNQXmHK5qk",
  "key35": "HafxWrWxRfKYFgrPvDvhdSE3aEyhbMswUPuSbDAj7meH5D4vLvCyHqZLJ7GJw7Yi1Z1MTPKcpLZSstA4upikmbD",
  "key36": "3EEbRBfs3hehrNQ65pwFXmcovuUbNdbguDaeT9DNZYNJdE9eTaXfZpYCfd4MSp1pF9SvkAieFbPrxvSR9GWj1bET",
  "key37": "51tL2rcGEYaSkV35iviBdk84kutGb8odCqXu9MqrSpQtUhwPhGpBLQn9DgAj2cRUxEVK7mSaADTTYeKtVgdncSUZ",
  "key38": "98Upft2UjxCo9yXvLznuojYMq5imzPESVVSeVbNdEK2teivYEFtKxg8B7EzLaE763BVXY785RkoD1xKXPLrzhDQ",
  "key39": "2mz3SCy6wtfHXgfvcQpiG1zugjHgd2HdvzNMSsDsdM8DxLagTvCA8Rdxs55Artga6ei6aET6uqkzhsG1VETgxEgB",
  "key40": "NGzVhMHhNVjkQcGuRX9Ra9cmKxnq6mkUq3BH1VXtP9tBk3XMK7BYDz4rjRaAqpsa99hDMrrf586bmT2s9AF5si3",
  "key41": "4MsACW7dB1Faom9R128UNUh8WCTxMauS9sWedgXTdxww6kk8fJS1CP1CbFEucQBeKmbCfGQjTvTgshgvhx7u8tPP",
  "key42": "3iMvAjRzVkcEVf2BQdzP1zFLzBXWk6RtcqLzwZKWMyVRCJfVjaHMfAAqVkfdRwBRJRQNbpVEb5eTp4kb3k561PaQ",
  "key43": "QkLPZ81XW3UtfKPs8umWfp9UKKJxw2XM7ERoktnASQn7NfSFudEqwQv4WrPbgczhiBMY9Nx8YpSfQjnmLskiut2",
  "key44": "5ieiYzMKVo5cdfktsx7UvXJqGhhzHGsabdVEUrmerHnVBzdpx7pWHmFHr4SRP8ish89ZmBuzW2kN1vaBNvjtZHD1",
  "key45": "2np5oak2yUh28HEQak9sXShUgVXC5nzJjhJmsywg6XmmmqSFBYYVTeuT9ZJgUiWSmxQbrpg4akLgzDKS5bz8u8zS",
  "key46": "2LMm39xfGvX2rjCFoVKjdqdgBwqq8aqdTSXHUGQxmhDmjVwe4iivMTWvCuJGme4zpzdzDBZtWMpYGDd9zbbXRvKF",
  "key47": "4DSfeSKHodbtjut26Yt4TxigDQrrrZMPJfutxbyXVjKcRroQ5Y2pe98RVq7jG1vtwadnzdxKLh3ZQ8Jt8LBZHWoK",
  "key48": "3ZejKfV2DJJkiuqrYvGdt2qYvh1cWrLzEk7FbsxiiX8czX3sT3zS9baX8DLbahBAcZqsVw8crE9rTJaCvj4PVSjb",
  "key49": "5KrfKqxqovqN4yHzU3qn59cc47H17zKUTivv2jVi4y1VWSpnVg3GwRPPL6CpXgvxPhLki4c2yTa33MY6yE3qQR5S"
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
