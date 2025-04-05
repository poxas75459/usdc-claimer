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
    "5K6z4QB2qpVTEWkDZYiMkfA9iMuLX3GDK4Eaa7d8wKRJWw72Dcwrdm4PotojLogBhqFRARBBoaQepUPyQNKXp1xD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gDYno6FpM16jb9HxTY82rNKVAbE8s73zCqJuogVs355aAg8zZ3b2DmAEdbeB6zmSVfTuSZZZS6Lw568VgefUmSA",
  "key1": "5LZwCjUa4d5RihUcA2kYXEKhTBHp9rT3pZdbkRLnZ9xNtb2n6SRtxB6YNZ6jStU9CuapGHtx4tAsPzjbSYGuapKb",
  "key2": "7DsdVbzs5rh7StoyJsaD2qKaYZZiK7dbTLdPZJNJCo2fnorZQWUb8GhdetPpBYR8xUneWuJaqTZ6syFxu8WcKTk",
  "key3": "2WDmLYd94fCetacxvwNowS6uQ2v4vXneiBYaMV3wRwFtS1qE6WV1gjgZYFAMkQ2QEo7MW1H3uiKWTzvTJJzXZbsh",
  "key4": "3Dwt8pYGZNpJk2AsXwXMAn9F1ATcs6ghmj9DBb44ibdv14i3ssQvgWEWJp2sb85Y6gNpg8HaD5skSTSw9WzbbC1g",
  "key5": "3S7xfsHZzTiFGBzAjr6ieCG1R55nNqUtzezj47rQmPTzAqrJgTM8FML1X4jDHx7M23d9wLf2oi4H58VBZ2ZQ8xgR",
  "key6": "397kpWF1zRaQvLxPoQSWWofinarZFGsV3TBrDyhFWykCgAxNmWq5MtSMuL9gfsfUnxaCPNwcVFnRzgQNKRu5m4SJ",
  "key7": "3iHsDeEXUzW1C3TfHKqP9JH8quE1CP6prmRaYWcTPWzgsHCVmyvDteJkx5vA5Fvy5B9qtpfAMxTmuZbsBLod8oWa",
  "key8": "qixTfocbcQEkn5YfNnQbYqkeks4EEyo7hJp5opZJd6Pgu8DEFZjhQRUF7fzMfRd61VGXvLXZiAvGLMF1VjbLDkC",
  "key9": "5C32bXdT2p7T3RJ4Ww7DAkKNgyLFEPCwMTmNCfkg8P5S6sPAsDr934hMywQCLE9Wbdp5MsZXLbvQLVLYLuWBsZE5",
  "key10": "3qxJqZsGvcVaGzQs2jSMsrV2owN2faAebwBJvfsqmzBQQ7KQPu6TRWLE6RwkyhPNM1nPiaKmVqaZNefmZgXfoR4q",
  "key11": "c5xzbzNDeLeUQD9ukPdvqPKfWnrh8ax8n1UCndwguWPKTDdaKafPWd62mghZc4knkHAa2yPzD5TWDjR5qkRdML6",
  "key12": "2vepCzvPDdUtf2Y2pbeVQPLhuwNoWrqgobdPhS8EYNaZzF2QFkj8kfFdX5BTgm5AB4kyH7fXJYxrdGuexBuTHVth",
  "key13": "49f2saDd2hXbenVycCuG1Y3PSy5TwYJaY6ppRXkPZs4s2uMge6spxmL83GS1SJVfgNvitkxF9EyJX9tRRSuWPvrY",
  "key14": "2kVVu68kNJ1cCgWeYP1id22Aq9HGWC8CTR6aYX6RrnW8HKuY8zMoqEx846qNxg2jSQ6cA3EA6fjUFPxjJJFHuwJV",
  "key15": "27jeFGz3GXhMiWV3PeLnStSrHxwvxxL3wMZRtncN4usaxgWVGDuztNWghHZgBvko9CNyMuPFp7jNBi3YgDXscEnJ",
  "key16": "27XEv4rMLrzYPR98brjBfqmQfm74wkGQW4TXtfMjP1YKFQv1fsCpXvBUTV2zr9dq6odXGzBP3UgZwRSpbVzoWcdw",
  "key17": "2mH6R1aQYFM81vLyJmAai3HaxcHXLp3vzaee8W2n7m5idgeejMQFtF1S6tt6iNKSjBg3AGzbxufkuLw1ALXgjHGQ",
  "key18": "3h1TiUcB8C9rBL2VmAhcJ3eroc13YCdrrdWghDKeYj5HB2GsAfAwkp4Lr3DiboRzA6EAxWr6PYqgpUBq5ufZRfkA",
  "key19": "3Cb2yZJBhD2PCAPVVpEXFsi1qqit1usoaq9hzyAWckbKcE5Jvw77LQsuEFBakhBgfKyi7zs71BdqMgKvoqSKvEcL",
  "key20": "3hCfv6otBT1cLC7G3PCc4iUfBmNv2yuLGQAFsez7eJqVZwXdqdpdhwe73R1h9AvtGs9TZuD9qkWL5Xbjmzrmm1Zq",
  "key21": "26EL3WqrCZgw1Sp2fjAZF6WQ21miXr9JbFxWdzLbqZiyjw16sJN4nfGoXpnSuGiVNfkLDnVN5tpqhGqSd6QXLPhu",
  "key22": "3tkosZtH2iFQZGosjBkqnwSXE9u6fxcD5BkzesXszhu7fXMVB33AdZMHLwGhUJgSuNM812DqV2wx3CenqopeszGs",
  "key23": "3M9oJKj2yrF8jecr21YW37RacQcFvJdwkFaFfcndzqHdqCUYyd1vuGvJ23pGp8QrMCsUf8kQcTgZvbC7duHUiPK8",
  "key24": "3CWFw7Vs2EHMMoCsj2YQLHFiwaMAEy38doat4ojXnvDHJfu6xiMPcJNYe88HEQiG9rct6kjwed8jxu5uNHnQhzCJ",
  "key25": "4TGX91Fgw6LJL3yAYLJJuhxZhp44SvPwUYhyu6sxvJbSspiR6unAEgZTio2HrnyEVFF1GhcCvzuA9mWsXtcJ43Ge",
  "key26": "2hAY65YWx6GbkGocy8WXLEKvTTNnPbhG3GYLR2MiCxoLNgRPbUqmFshs44fuD8QRLhdZDaSMmohMBxhW3wjYfd4B",
  "key27": "bs7wXpuMsiUp6nBhrhtxaS3nuF7vEyvLXXJAPijWsS1NmFfLuABPqcsrnkraqVXfp6hujyyF8KYiidrLn8mLxMM",
  "key28": "54zZY6xFywBEojCdicqGEgNBnsMTneBBr7HCJ5Gdh7u7fM3gTqU8qymbBwBwM3sjdDJXkvwZ34DVKjXvdHyq8BFX",
  "key29": "53JgZsXiBGHMMJmjH1VTX3ScGsLX9Vd9zSwBdB74HpPqPPh2sS1vMza3tDgWuZ67oFUxispoPGrJaMf2wzCskvbT",
  "key30": "55ZjSLa4QhNWaMuDJgLuQt9S3UqJ17ciXxZNZe5UmPR7xvk8NuguqvPpAL7W1s3KKYai595B5YdKnW5sfBDJqXQN",
  "key31": "622BJQEhJ31w7gaQDzA57qfqS7J6F8FkQhCyQ4oQ3rFwEmaqW16EXkkJj2RnvNNg4yo5diPz9AsLMdikq8c8k5UJ",
  "key32": "5k5NnuN1yHzjRSjckeXAoM1A6P7V12Na9KHDYXT4muRXNK6quhFC5asChKUr2r2jPDW8fN5PjsxV3LCidx8bG7m3",
  "key33": "5by82ML2deZBkY1WUcTQMfc8SWW6rdaoWRxQi3zC8wrXzHtMhN76XMVnr2qwzd2hqyBY7QpzxLv857DJTE2DRooH",
  "key34": "3F3WK2pqJbKVaaLF3QvQGPFLzuFdWBLQ8CKmiCC3KavhvGHF5qSF3iLaV3KLP63YnAnL4Vh3qiFyVH7mLceUgpwd",
  "key35": "YgjNLW5oAhKzmZvzJ24mCG9g5Tgu1gY2356MVukM1uwQ2M4L68jR3c9FVnYHRsj3LHEcW8oJBQsnwVEdjnXDXz7",
  "key36": "55yTnL5dfDBaaBmkUT9WWM1LKkiJMM8R6eN56cjusXtXF7bMX838yWkjDH9B7MXXpdewRtWRBQgKkpMbj9mNjna9"
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
