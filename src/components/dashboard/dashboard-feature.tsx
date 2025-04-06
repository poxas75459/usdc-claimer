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
    "5ZSpxjxvXmTxBWH8Hq4Z5YHNuepn9pLxqdQeQKb3WWSRuSTwnR4RsaqS6tJWjXnkEjjsiZM7D9ya1r7gFNzYmkoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yugwHqGqTCATkk8jMkXovF3uHaH3qHoAjkCe9ECxCsadc34aE2N1eFsBEA3JKickDqWqTDpoKhoipePcmXREXDH",
  "key1": "2VGA3h73Pep7yyjTQwEDgR99kbeaZtcf3Xj9yEPWbx2ZCdWmJi4spgimRs3x1thjVeuwmLFXwCCoHX6J3jHMHqe5",
  "key2": "33cXmUgA8furrpEmdfweWafyWEWUar2EZhLLsB68qVEnm1TThZrZFNw4oLvYow6t4YdrtnLF4bTPQCUhpnFwdoQK",
  "key3": "cPvXETF6zt5ieXMf6HFTATS8pzZLwasjCpKW12HFhnaRR1uWErduEDjVRxDECZGGMnZbcDBUMfcSqArHuwNuCL5",
  "key4": "3BACM13p3rLWsGgUwTCmHKieeufEWdCgLkM6wU7qajsqtW3V5hap6Pn8oFAXwuZCWHrkgFgZoJK2RhmfMwZsW6uZ",
  "key5": "2WD5874ncMeU4S4QwvaHZggyH4e5n1oe8nq5RpSq2khwUkU9y5RHUEvC3by7RKZvFriqcLpb5WyFQBiXouD9Ly5p",
  "key6": "4DDbjr4TYZXZn5GXrm4A2VBcFVfj5jnu3syNYQPKp859gWtqYRkoeXoLiqXV6oAfiw4mLwsygEpNw88qKwxAJjGi",
  "key7": "62xZGkuZv4sRm5yhL9BCT3m5x85DfHt8xHbbMNTDmNL49KpowtuYStVS1czstM8bqwDVYBdoDyCXuud1viqkBDJg",
  "key8": "4HXaBccBtmk81XvKoteRb18gsgJk7kL2iBU5LcUdvxGYKZfKUWnhzLC4F3merxsrF4C7v5uiNyHn4YnBxQfHM9Po",
  "key9": "57cushJKghjTH7y7qSUtrtZmMyKyirFM8xNS4rx5jjJV4HCZNAPgvSaRmsd2eFR21rCVetDiHsQmE9PaiyhywY9f",
  "key10": "25XdMJzPTEFKPj366JSZKsiVnLLFu36rPehEB4HnG8b7fRM5HaXy8knTAQitBfXcNWm6K7VFbYrkgj1a4TGXvS82",
  "key11": "k6G9UkxanuiaqKWVisin6PFBAkpWF54Cafg3xvUkpDMR6HDqRFcmJSJbWwm6iAfoPVzWNZLXo2VWGVur5KvF5fs",
  "key12": "2q3DHFWDWBHGAggk35zaHZRQvhjiNhXDUrp2rArCxgsk71BfNJyWocb2rRmfEWqgZeohesvR8KcvewGA14DiprBJ",
  "key13": "2vhSdqy7eFjy1dHNUgm9eLJSi7TxASRsg41gZT7uuB622XiYLqnL6wTv51sCyb9uGKbTEbnpZMp8QnwqKbU3F8AM",
  "key14": "5kXP6Ya7CYNJsvPr1y2pw3ufsMivS2KaZHMmenN9K1oTbYAZ3JY2HUnZmWNNqvn1Q7Cn1Mjx4z4tLnFdtz9d7agu",
  "key15": "CYUmMJErhqNKzTtRLH3wxYbe8kGGgkZHBDEQFXfMiaKzMyUbr78WprkhjHFY8zGV88YQZ5XgHvpqHvHVpZLccHd",
  "key16": "2eEPU5dwnfr8ZpKYRR5F4hqVfTCJhHQgXE5SHbsPH9XxzJgCQe6uuBxi8mMaiXdpKQpVJMeyiBwQRc86kGUUnP1r",
  "key17": "4pArictPTXrtuoQCP4q1aDqq2EZGwZ5zHkAg1oR5WvYtraQuv8brniPi19LeV9m1Vu8y44PGyvcVp8M9f8oH4V8",
  "key18": "36Lg66kpsyYveZ4n4nd1NfF3w5NLXHr1iPeNnEP9J6DNi6rdAPwXzrYsPxHoLtNs9Yy2dkqgnNqnrNWxBSrWV3N3",
  "key19": "4x4dDetyCvNbdyYP8JVRZySHxUJQhCAbX9fVUUiQ74TN1voom1rrfmNNzxS4cDsrhdanQc9pLh1bZtH7H4WeifeC",
  "key20": "2MmuaJ66SC6ppYouQsd7YqPzr5HqowUe1Loew1QsoNiBnZYZQxXKu2NHeyDXDUSg3QE8WkjiB3UW8Hbr6V4F5Jw2",
  "key21": "2Nqy1rojzTgHg65gCzLpZcEcGtbdBp1BcgGMi2BWDbhZ62gdu9DxbCob5ngLQ95E1nygLah5E5TZ9Jub64boPrVP",
  "key22": "D1x3S9SHJhpVb6Rawq4jfANGDotnKiYxjSW2yZYdF9HsHEgpvsssReYJYfeU1A3TKXcb7HF3Eu34SqqVKZqZQcK",
  "key23": "2bTg9of1YFtZBn4eK3a2PaXcyyECpEREtc5Xjtdj3rXzoSM9wnsdYjxkjQNyVkhJrvtCtijhBqj6SxJM1Hovnxys",
  "key24": "54ENaQfrKyH1V5X3o8LUSJZ9tTajaiRd77CQzRawWoiuaLk19Rc8ts9qQ3cXpfsprtGPbaHAeRGiMHTjCzTooFTy",
  "key25": "4e7qWGeamoUQjTZwW239bjgNeq7cRjwPsQzv22J5gaKgHTwB9K9zc4bv5F3cQhPwk62KNRSABjVNf6gZT3HQ8DR3",
  "key26": "3nkPfp6feGsK9zDX3SpXLXVtNDniYyeTsTd6Snc8WAjF6aZgbXXTc9QJ5ZcMzJhdX62Ps5VSMmWUdejAtyrkVhzA",
  "key27": "4hrKkDG8jVvZ4iwtnFaTHfkVh288yyC8mN4kh99vhXQUVJehuuVjAAGcQ9KYt2WAGHDSKFBoYDEQkxmz5AKXAKUw",
  "key28": "5cMdNKMBbuZCUy2dbk4jtU4Q6eYZJNcdCvCTcykyYuNM22q1b3t6P4ft6MiZPxK1vsBzu45r187jFUq5iJVYbjxz",
  "key29": "5hiYhzCRCn1iEMe5Qhx9qKwFr3LtbHJUqYi9Jq5C7xsDr68JtEFxTm3Vpswc7xMbEktHqTL9TfsVxsvcUrNAfoRF",
  "key30": "a9aL7vkwmvMyPhBGkpcMbi4MSNhA9FwgmMRQTJQoevghDx59He6Y81BSttVkSJxBpP48AjZ48wa4VZWMNSia1hf",
  "key31": "4eXvxejsAmTe77R2VQUVDcuvGRpr8uLQMmTB8idUST8MmgPe6758sLkQpfLd8jagyt4dgLGGRPzKY8JjbSR1wq23",
  "key32": "4mbHcnqGvwj2v2jjJhkorh5ZdBd2NK5Lt4V16pacTajZeeSfuN5RcLgtdArPQabKf6GeCHHTBvgoYWz9tvv6eaxS",
  "key33": "4tYvLKiuqYDH4vwjKghsZMCKwmnjKEPiZYfNpw5nfo1LFyUnnfBg1XiaV6UbYYjG6L9bpW89pCULsHNJDJMbuQ7x",
  "key34": "2knkU3VmrdNxVSjnAJzYi76hsHa8pfRHTr897nNxtsvvEkAY7Fk6BFVdhUDwdxtanef5xr3SpKVDED8gMDDjrpWf"
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
