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
    "2zmpNSeqre4xX2zUxJmbC2i1Cz8L9VPHYMCbfKHw9XuhU4eqx1bRVarJJZLNz5nR4bmnrEzwErfuosu478jNwZAZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XZSDvQaNFM69SQBVfwnYjc7ToHHPwiRyQ97wUicJ1z6tJVYoYpwwApBJjis6yo6Y2fzPk17w3Z2TnsfgC2MQ9Mi",
  "key1": "5Z5ddSX8YfBJw6Am872o3tnnLq2fLADfvxjVLTZKmgq66nZDGonke7yyR3FiWYsw1ATy46cU79qZUJURvXBKGpBF",
  "key2": "DnBLQgAKkjdvvLQxHq31Ucd7G6DmmY411UZXP1QmT6wbad8tzy2DmoPMDVahzpU1CAaB33SfnWTUXFgAdgJ2DqH",
  "key3": "2boAc1JTy8h7hA4Y6XceZQaPLTTCfLMmb2fxFFRpfsdFmJwbeJh2Ud8KouPuY9kHZNaeEGpXTW4aGB9KWRnMT8d9",
  "key4": "2f65HQFhii283Aic47aygCTY76PyTF2CqEigMxqYR9BLhuu2quUoagcE6NDe4k2vmzmi269oUXZ2DYuGw329irHZ",
  "key5": "4cE9Mcq5tSSPEkseKfs12Qy2o7rcGopwJCvzFWfVZ4VcqQvesB2e79gpbjinhB7YUUgASjoZESHBvnmnj7wN9RGi",
  "key6": "3jFbfkXiddmZd6odiJhRi4MvVQQL7Gmt7QGRjHi6naibyx42CaHbLyaHANPy2utDon68ra5E7QgtipWUxVUeAxvq",
  "key7": "3PUJ9yccYcGT1WKfhTKnQU3rs3pLwagQX8fgL3zajAkgnFXV1ZbYoQUqAuvvABVdRjXAUjZRuAVySsLyGGBVLiQG",
  "key8": "4WE9qi9k1fc1C2eS4Uq37wJ874ivUPAGCZxbhQGJe79nyFsLauVXhft9zUibpw2DA9L8r4E4GzibqfAPMJewKmcG",
  "key9": "BDtZBSydtf1kkDNJ8xGbGQ95cPoUWw1XF8zDH1SURA5fsY5GJuf4GcZ6NpUTqbXH2GsuNvWk5wcFq6cgnq4Xrvf",
  "key10": "5xSiYRiaoEpWWjR94tQtmYpcBRFNpFXPychJ66rAXiA7gtzmNymcyZjY9mDoeHosSjxvTVxtxZ7bmUpoZfwe4qYk",
  "key11": "4bijqThadYG26jdWdkvzrgLmie4Twmk7Bi94EhRetizca8AdNmnpPMfs7K3AA8T4sJtBJZe4ao8rJT9XZRr6x6zg",
  "key12": "4uNYRtxBEWGruYzQtVdAffCjHfCMpXKF9TXhGiCqG3fbc1dv2esqyp4TaManEHN4MkLRnruPWrJHCScoSyapr8vu",
  "key13": "3Qs3nBjRx4FanFq8unHnoujbidNvYGZVFP2KJ81ei71fmUCwsrZ8wKqhutwqkjuWnqGxtr2Wk2ZpG23TLynTbxUQ",
  "key14": "2tNgiADHij7o6LwU66akhuvQ23aA2hQmZCU4AX6B6YJ9Ax3x2KkAJSkAP79kfQfF3wjo95BiyjUtgJauup5ns7E4",
  "key15": "2zKDtxJXcHsCgZ2R34WsWmuVFAE12oQAobRVTQETghFafUjJckPkmU4nrB5bJJZLNkUtMdjKu94Eeo4ZubQggfaZ",
  "key16": "4e8qchFzfCGzfJTrYDzcJqHajRKnjFLo66BkqXUiyxkHXHdySCmGiem9QxWYh6RETK5qdi7HYUGCCkUeqy1vbLFZ",
  "key17": "4MDuPbGFJWDEHZxYR1Tt6z5U37o1sfzc9PY5wbRsGC1johUvcqmHfD4g7zKPTKB912tVVaKSZ9bC7yojE5QesW7g",
  "key18": "4aroXR6augFgwQ53tbFuiax1fovEa7A2fMsFiXA6haWoRVQFYy8fL17de9CiPZbDYxPs6GRLDnBZgs1PCpGCan2U",
  "key19": "2dpnWa5jUJjSnE3Fx7d8Y8RaVEyYett5SRg7B42vXQkYGHBXgBkp8prf9qryyrz9uTqsZxrqc9K23P4J5AitTMuX",
  "key20": "4e5kNnu43opZRoYrJqcGwEUWeYiUoNMZGCfEUw1LLyrnYxFVUumYjiwM4E6kXQNR7FDGzQC7mxekkkQNU4DHbGH1",
  "key21": "5JyrDQy7u7UYFG82wdjAE2MHYHgGREMnLwf6LTAn4bzD6yfrSmUDSjffCCJ34VpFtwXDftJHJFqn5LjJhhU8SBdP",
  "key22": "5eLnmxgJGXQTt2f8niMpKTEupTV2KWoZgH8kTHpmrpxiGjXrh9Vk1Q1BYGZgjkSW1Npi3VcZ4uLNFuj6b665U3G9",
  "key23": "662BejsGWZijBSbuCTygBtUhr3e9Ju4nzmMozTLCWPMQ3ZtudtJLtGqBqQqf22JLPWvhBs7HVn1pbEpK3qRcNTAL",
  "key24": "2vsDMsDe5Jv42SYmyYP7RGiLeNvqvZLZ1CPeyyzpiQoWaNTedYUc3pNZXwDGwK3Z28S58QQKrp16Bvz3snB7VvRR",
  "key25": "2KvXmfy55JwYJ6MbuUmj5Bv6FbdDbgZiZbzvwVNh2mceFdDaSzzELtW9QbYoi5FJR4C6EmpgdDxvVCip4ohjwBaX",
  "key26": "4cT4meYDnD9RPEQc8xc4AxtTwq33emVq3UNh7GM6ZQpBehC61gRwKgB1gxHSbaKbRah94nE5jTVxq75J3ZbsVeT",
  "key27": "inYYaBZ7DsADEDT1aYfkoaWLx379ZuJCncKjH7jBmRCzuAbHfhGKpBdjNiJstjJTYBmTGjmq1aTrvCwQ6srcWSV",
  "key28": "pCzPMxML6CohAEQ5qsB5wmEfxr26QL9ujPz2ELagbCzMVPCrN5LZ2zUGUyRvmVErKqZDL1JxicRNki7FH1hMtqN",
  "key29": "2uKtqN4NnCp7e6GuvHukTSPAdXccVXnSAD326etuMmQ3zQ34KjbpGfWczzxkGGfEaHiKhSU2FCaWRXcmkgT29mx4",
  "key30": "31erR2ZbWoB9k9J37GpobftX9wiVCv1wViaauAYjZNnkKyJfzfBLYWHaYS24BhYHrgrqBZh3M2we94g9Tks6YAzS",
  "key31": "64mMnLd7PHMXZqWFjt28vhZ1kBYSestNsXJCEtYXs1nW7KSF7KcJntm9mMNVet9zEQ4764rvM9EeZvSJtaUwzuok",
  "key32": "4v6pzwUt4SoB2UA18edUsaJJHomiohsUYpPfRNirjYTSBMgMTs1aXdk1xzhL2ahhzkGB5uSyoY9AzijqmSDVS2hN",
  "key33": "AkW7hYkZSwKnbt4mUNj8tKxRDZP1FJFpawtXdktq8vpLf21NGS7gdaDgbEaP133WBaN3kV2qZZfEp28LyFmvNM6",
  "key34": "3FtRQ2jYyT9yNh8nmu1rg937ZjhmBWesaYGGH2yY64KMrXepua2bNvybA1yq7jWEnoprw83if8jt3sGSHhBeNLVt",
  "key35": "8uf66JeFC61wvkqZDn9poPMMzWrFYSXZ6ykZyLnEUTNYc4uarmUoGqDG7LXBsANianwJoMbu6x4DircxhSMSe53",
  "key36": "bW2VMKQRzk1fJJ3waAcXFT4widrgcCunGEohRt4NaZaYNTAF6pAd7ko3Yb5iPpb9JfaQPKqU2FMCGjre4vvjbwH",
  "key37": "5hHU589BA66wZXg9oF9KZkDY4pfZREJJY2FRR1vmJZfQxBEo9FuGZGqF9mUduuFFB2QiCZvobXmDozcrzeWAfM72",
  "key38": "38u6ZtvNwv3yRT8TyqzV2NuRtFWQw6aS3J6TNKZy7BUy99bVdKgo9nvQYZhnhCD1oxdwRydWzrEbKKpztB1MMCFu",
  "key39": "JQsYfGv2bcNieYkho4CZFr9cMiM32kWjKGMfs91F34ze2xvKS6ft1Rgx392aUZXrqHjCzuW5GPEwAHkL2QWNQSd",
  "key40": "5foSpoPkyciSv5PLTpdexHFnzrtDiSqkKr6RZrk5ELrkqmPmJjKv3WDh6rKbYZ2kVgeWCYGpQiH58tnyw1Kmrn8w",
  "key41": "5r1zka5CEMiwUfq681HoJ4emhtDPw7xXP3SBZQ9rVZS1z4Gv9QcB8cbxyvnpW9tnLVqj1ZSWbqjpow6iN2aZqRv9",
  "key42": "2GpEZ2eivbdaZPo4WP6E7XiG2SA9qgtcKCo1s9uNY5GUyzNdnysCnspzzAWckQ2Syxhbe3DJfxS3mJMUJuzw7sp5",
  "key43": "2pC2tKHGB5xS3zdLgkU68kTz23r4R5mBu2BWcjrx1TAASsc9ynLjHFSWWZvocyNUKemL7kDczeeYFRYV9gnQiANT"
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
