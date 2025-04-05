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
    "mK48Nt92f1ewmMMHkV2QtxBDbZViEc3fVSjeg9iKjvEZbCxBu6SyaHyTMpYDq3cUtfQs565vhaUrDhdNqCSSxcF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wYn2o95t9vkMZj2ENF9gvn47eXiB7zwd3VBdnNDGCtT7aj5EcVTZYy9FbBRBHk5akhtdCRCJba1Ysb2gK2Nxksy",
  "key1": "ZUJwdZr92janCgmry5EtfkXtqxuyqLDobo6RshkSMH6EHrXtA4stexQGrKMjQnaGkuem3qT5aFkhpTAdiGqaNfh",
  "key2": "5y6jhU8r26m26N2S42448Dd6jrE4RDkVgZ33zKu3RqrefVdEjKttGiARfdaZNARi63h8kdVk81Ge5Evs7YwRoWyu",
  "key3": "5bdytUTxFUb8Ko4EhbKA1b79Eh62bKV1bPq8DKdwy4RcWZAPAukkVLgNr6bfNnBwMVe6gGyqm8esQWNAnQ1DPuFy",
  "key4": "4ZBZtNnsGwvk5JgzUEP5zfx6Jm5Guj2znKSr39aQV5VujvThHQ18Vrg6WrzQadGwFD8yLSGorWEuSUjdhSJzgkwQ",
  "key5": "ScQAGDJFk2qjD5wC5guzgnYtA73FGgYsMoXeFJvBCEnsaoq3w1rvsH4LvqMjjKQ2v3yq3128fDEnxKmVUVKLZZ3",
  "key6": "4UzX15hpqbvUbNqzbDfxz1fbSQ7ddnsTvn7DyWqzYhwbopfiYytxHDS5fxGJV9zA2GQ6quep6sVkH42NK9neCSmp",
  "key7": "2i1WxVAs4Pf9E6SJsi8Vs92QWJe669m8P3mCksLRLubtRRXy7AY5ta2txTrJxnMx8ATfawheudyhQN2FKoW4RYPq",
  "key8": "5hwLii3Lb2ziKXkYn7ZjYhdw2NwSGeUsLzzhxZ1NFu1iScqBxXt6zqnJUavhs7E3rHmATuGdUVvTBqLak4Kv3HJk",
  "key9": "5LwSHB7oStrpJ8DpiVg8YZbqvSQKoahksPNDaSGBEZjSRNHXpBj9Jsxxh4YBcqJ6orxQkfYZCWQookjgSL9643jK",
  "key10": "2s3hvrht7i4sJC42xnAtCsU7Xme4Z2PGweE8G8kzhLp8Qjr4SxToT85vRF25YaYaWydtbMBQp5qYPFvnFBu4yBLb",
  "key11": "PCfRMGSnCT8dfbsRTCFYwZEoirJK6qwFbCyJT8JmPgoPtHu9Ze7AEBv6Vc8sj6Q4xzUm2qYxFuMHMFp49cnhWp6",
  "key12": "33uXTdSYZ7VYqczpoxmD6xiSZzYk1nVTCb1faAU5aJXNPPQdD3uztrcazTf94sfR9ertVvAwMEPZSpqMviJPrk5g",
  "key13": "3mBrbQBrmqS9Mm25GPVBKrsMj43MVQxB2fzHnWTyh6p9WjiLRptkjXSUdEi6cMwEjMhrMvCbWsCFU6RTKzN42DqF",
  "key14": "iRryNSUGsRc5oCVzCdNEwFZzy55hmejUoQx7AnFadqtgWpHBtivFXhez3E2QM8Sb1vF6wmW7TZr3gEQNBCSrT5e",
  "key15": "VFdVCKjjwu1KzvAsHKMmThUY64w8rPYFmdT3Ymb9CZGFeurbUh18BoN5Mq4385UNoYq9zo9VMuXCepCr9StegsH",
  "key16": "J3hQTatnNrvuv3VhaTWqH5LbJpi3KczNy3qJtrRCYjVLEwtFKvwuvfwuga66rgHDeewexets1uGnZTXSQt9hwpf",
  "key17": "5DwWyfSULk64w6EEG4Bmxw1cbTKmd26PDBvE1nzXPMvPtE5rqdgma4bUdyZPcMn4yVcwKypeq5d5V6PsAcgMdGPz",
  "key18": "7S6ASDSHx9ncUsxZFckPaEUScRaqPQKokFA4VzMg9AUUX99RPYPy9jCvdY2YR1JiaaBMoj2VRqBUaMLhXsc5BzZ",
  "key19": "4GsuAxXUiB3ks8CDFiXGBR3tQixjdLT6rRQpgiruwe5CE4Egy3a6X4PRPbcYDGHZiE4a219S3s4VaoDnzo5DtrKm",
  "key20": "31cU6au9WpD679k3KvqPBNW96u7QcQhZTH9WMfwFQ3yJpMjcBvXUvSXaNhKnNU5ACKFPMemhAi8QrmDuLgrKhNm6",
  "key21": "2Y5uY7FoUBg8ySiMyb8rKJsXAaJ9K4DH3LQ8VbBdfeYUKgEtC2HBFKRGPg51HnCv5EeckJmtf6L4cgqHKUvLhtvk",
  "key22": "64RWLdQ16Hqx8C6S2t9s6trpkTC23NaNiLLf2BySXagATySA8bdJWaJpjPQA8zVz2cE97CEYtgiPvXmYw5xLXNGY",
  "key23": "3tfyYTRX6z3umUjdbsAR9aKSmnwJrjB3SkRcX67jqZrkPXigaZRWti9UXEaizPAkcxExPXgDwWBGzn9BV9Q3dzZj",
  "key24": "4v9deBcJSzj5V1FFmh2WQFeTmqUUy3aDjwHGvPY81bJPPhgvg7UmMH3mZfPKPNptiyuJzz9wkxyQJ3KbKw6t7uLe",
  "key25": "58nqMpYjxvCpW8jgpZcN4ewCBTTtGEKTj65WVRakxDgGt9ddPUfL88WfFpmk9Yno887JY8wPfDgKPJkLrcQmuEPH",
  "key26": "4SuHdq8LuZAQjqK4iW1RwVLbqqvmsnom9H45YKUKgCQtkivwHbgqjqRwYunE9BzPrbm739zkf8f2AN5693QL11uQ",
  "key27": "Urn5bovsTDtf5zX8vnkQs6zhigPvGY1ujFH3hqFXw9qzYcuyxseiczxHiYvNA7LBEAtB1JSApibDbwd4LPyrcoj",
  "key28": "23htW8y1pEHTSygxsQc9mLNG7xpcge3TKjSSUeZvqwdkLRKDy1zi4WH4oLdz4PDAZrHyjtZo3DsQj2H9Qm6tHUAF",
  "key29": "3CRTCR4ZUeR8AW72ANztmgMgv2qZao7LqxTsmCN9Wmj2kYxUYdmQrrEaNH417atGoWAeY9rRaT4iNgkVC6iw46Gx",
  "key30": "2ZmfC2Uihb3KZdjLLemjF44UV8XYK4XQiddbo9pqK8tZ3msZTGXQrM8M9cScaYmsF5id3QiF1B6rUBVcRF8CWmAA",
  "key31": "5hQKUeh1dkTtLnfutgvKTQuxc9yhwckCP4jnA6z6XB6NjRgFvJYgPoRLW7E9BGqWXSoPYaDdzehmfwy6ypq6rEe3",
  "key32": "mzrm3eJFHaVERrYLYvVbEVc74vmMcSpwbo5weQSwro3h7jdZrnzokonJbxBKY5XqhBgjoQcMtmz3ysfA7AHSH4K",
  "key33": "2gGpJek9bGYgxiyjbLkFssFrty3qtdid84XSYhWvFUY6gfoAKxmKmQJmmQWm4g3vQNTJnuzxhhVG94KDbVNMHJvw",
  "key34": "3Qaj6BQnXSC6WVoG7FNyiK46mZuzr1pUkkFcrmGQKEY8qY8xas7v8jbFqoAGp2PWFNGroAiSs2SyMSSVnSjzKkc7",
  "key35": "34Kc5W7J6c64iQCWgrcDaYSdFaoCWRjmoLEYtzxe3QwWasRDdyN8oAjngKGRdJf9cvkH3X1aYpXjDcPm5A7invZH",
  "key36": "2aLuKEAvQ25w2zFJhGtjWiNT2Y7y1ZwjSazCtQwdNhF1wnQr9YQiySx4hbAijJYJiwDououeN82kkApqk5CuFfSA",
  "key37": "Ff4b4DSh2c2ZsQdBY4hZCBeSBdeYWqeu1mAnPzm1cxD9JvUWCA3oNseiJUEmdHEhCYF2ZaoSntixv9rzvfwVLxQ",
  "key38": "57ooVpJgsdojh9zXyu9ZPntc3dwbof6LcNVcBXGeyhfESTNt9LY9DTtL4pGuyhetdSDwo54aMHRb6xq8P557bXa4",
  "key39": "57UEm5BKDoU1hjMPXGEsrqzxCxqYbNRR1tBruE9ibWAgFfnToYA1PWKLmxVEFfBzhxMQJhrT9NLxQGbAYwgWLm4t",
  "key40": "3sVWb8xAmfZ3yXc7BBjhntRm3fgpoTx4MkNKGH2vZbcYcUcHMxjyWxMu9mQdkJEMfwXiWB4SuPf8hGf7GPeNogiG",
  "key41": "MHoWagRKz9mh4jYHdACevf5SbLXZL8GJcGmyJcLMkh1WPkmCLe1vEYSMaNtHCtuUYUsTrXL8XmF7TW3gExN63CJ",
  "key42": "4pgvyAVuSREULtv8SqNK3KaxtFgqHcYf9Fy6rfw6zPdXihY4ugQdNq7Uvt4Ez9s8ZiUZaGCcVzR6nEPQLBwFJtmx"
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
