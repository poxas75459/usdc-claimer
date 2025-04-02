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
    "3vt8xAEavWYDveq6g9bWYdGGZ39Ag3wH8KobDBZgNmqviD6Apb58f32tUZFehY4nUMdBfHwmDg7Yn3RyDP9xYYqG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wwhZ5v1Hc88ZwpkRm4z7FwQ5McLVzcQBxdc8KuTkpFLYuafzRHWrzLqtQhkJrKDBbt7113AKrzW9CePKJ7Q2nhA",
  "key1": "66tDAmN8i4jDXGfTZSs1qJuFKPrcZnDUCinydaUf4jD1f7CfS8UgXAgU3wH6shZ9ehXDPi9xBmE3qVjqf8TA3CC5",
  "key2": "3t9WfzZ3rQgeUqBZgP5CK2mn9m7yJ8J1F2qc9Y3eK8FWNpcnAGRbkaVmyXpoXvRZ8tAFfGRzGt1tC53acLs8MTKh",
  "key3": "3WSC33zgzQcFyp6WDx3sMHpQcHEbJQH5tfVuLpnk57Tr872rV2SqRJfwDH4ppsnY5v3PxeeyWW6hrc31SFzXQXpT",
  "key4": "3B4sJozc7HuKXmFTevLJz8H3WGeRF9oRzDUo8ZAAebpqkmVT2gPWLhYoDxq2mqpHpYtPUcsPwGk9qZhqesVmaETY",
  "key5": "5QL8zAbkVh5oKbR6GTxeqwbjF3uVVj55N67j3FU7Sor6UiKr9D9DdZEvZPesnBGag7tLpGpJR3v83zpPyeuKv6UX",
  "key6": "4pQN6VMZYTN4hfDKbf9fw8djGEA7hAV2vqLiGEysugXwqeKUKy4Pa9tWCMRGuSZYDAwtPgjeXd3PVbToPYKpV3CW",
  "key7": "St5NQW9w2bchGXRrZ1v1CM96PkacVDoxrA217kQKaVVjJxh1o5e4imK3MVjz7jiRTtpc18wb7hWH4dtn8VtzWuc",
  "key8": "4y2AW4fmZoFk5XrBjTHS3GYh1x9bJ9zbbzPP6hZKPgnhGr4YW8hS8veLfSkYP3b2dYpQSCPQ9k5X3JJAUNJJt5Gi",
  "key9": "trhUVcE49YqMimZSJeUcXtxfVorrBgtcQveaJeeRniALqg54ZRNsZJ68LJHL8FbTD7etom15W2hXNNvdVWsUnmi",
  "key10": "3S8746UP7ZWUQhiWjpf6W37HM5sraYWy6PUkbmzZsrV3tr8EfBTfjJHa48vjgLCvt7xMTd4QiYX9MeYSXYMeDSbK",
  "key11": "3ToJqkVLn9mp6m7LCm6jv5CQP8hgqW4NVpUYobR9AHdwTuGNeA4HFS1XocZ25TtegtN3CJCsx13KjHe8E9ueL7YZ",
  "key12": "4L1sn27hsWFV1ui3wtxkwPT5uogB5XdB3hnEdueiCgh3PrnkagSMqofbxofpxZW9658rs4BiUz9zduCsZipqBYFW",
  "key13": "2N1djbREKQNhbcUEx3o9iKiqVf7fq8ZmLdrgK9s8HXk86otKfiwS7fs5asdrW4MbFw7wWYRJH36321hpDBHYWJWj",
  "key14": "2hn4Ujia3S1ASqbJzCdavFwDUzfsj2b7r1KUcZiy1nFqddVFnJxCH7NKrKcNvdZCptdyd4Q7R3jM6LshoGSjsZHA",
  "key15": "4Yk4w82CxYbPxoXjbkhTuyZ8jMHeo2dDi17pt5XdkBeu2TShfs9zDgPHEkhfxUR2ASADC6peB4awuY4DFGoBAxC8",
  "key16": "2LEPsMJAh2p7omTs4P2zc7cPZntWSXgbsxvtNMVSjS9FxWNgjUawpFgFjyqmhGL2TZDvV8nNuo5YmhjQsFFFL2sw",
  "key17": "46FhVVVfuzGhs72MDLik9pnqtrombCXfhQh2hrYZPpPXAjGroqidDfHMjJKwUFsorcWdemrCCg75t5ztDbfyJGAQ",
  "key18": "4zkmmhXtPkTnxJhM2enZ1Jendsf4TW1LbpziCMoBmmTBxnmQDPGtZ6tSKhcHFvTbvxD5N5MWNBrvDptaPN68XU3N",
  "key19": "3dRaTHzwKYxiLHJZJHoaEP6bZ5HXXkwXxUt6XxMRmNRFCcoZ2JxrMJF9aBY3WZnTcUUH5YGu6KuP75q1wzekSzgX",
  "key20": "3BAK4mf1q1joS9JmvdsjTf6wMAhwFGJHbKsjoDu3mNUuLKVkJmicRYYxQj3pmh8fCotZe2JEzLdfJMfg6S64SQe5",
  "key21": "DTp37DgP9qdQMAa9MAkM66ir4wMxwxcHzQyc4ghuHGFZCAkG7EWHxfRHTMgCiR25N6HEn82XUV2bdzQ67A6BV53",
  "key22": "2vQQGX3vnbfnqJjmnJU2KNkXXH4XzhrYyF4NSFZ6PKpG9xPmJKSNsro5CCwr4CRusHwm4FLKMNeaUxmbypM4gjK",
  "key23": "2ATT3T4XjQZo1FAnAR9vDAVCi7oLDH2WHmgTr2mUKSzz9GPTdKn3mLSTegLusvQ8M1dZLV725jHhsqkiV81HMQNR",
  "key24": "2DrTYZQqyLSCEFijVqMqFwe7Jxz23FjoisQMHvUNWxWdhwDWLNdJ1Mt8LrpfYLdQ8CbSitW4x8hpQUKjtLXXJpEU",
  "key25": "QE56WaxW8UVEG7JroUB3ZrjLeuj96LNho53wNureKRDZPGtsKoaVhQHbj3wYc9XJiGjKMT4KrrU6C84nGji9TNt",
  "key26": "2y4pAHWV8cT6fDLRQLyx16H8Cfz4dQ13DtWL3tmgVh3efow4J9YpbyH267JKfaSf4TU1nCRZquQRzt2BgyPvbyPp",
  "key27": "uq1EMV98F7ejqLsE9xkA4PDqeb8bNJaSSpQEmoFcWf1pJ3gcNCphDay9SfWTeE1w6P5k2F6fAe3U3eatLADAAMc"
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
