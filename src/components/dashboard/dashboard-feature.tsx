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
    "625zD143LjEnVwJfwU9u1fWtdNHNEAG8Qm7pFVfZ7aJomHPYHjQYNzfk7E4edwJUGCSXxJeJt8LoV4HGxhqRTLMu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aQEbG4eVaoTWb8VTC3UMHX3H7rqEqZWNHY1zNRs9CduSjsfFXBstT2Pn1Hf5fLvTnMEVCsFTaYhfLWrEKiqfqBr",
  "key1": "2n8kWdp2pukGxN1B4k9y5fmTZNrUefh279dD7TMZ9HpBcBQkGT8k1yU47dBfnCbYpRNA2iYhV1vtqJgkwTMQgnDN",
  "key2": "3SDhkoYenEMn6HSuRiLguaCcoCaWoU8CBZedSq2DMocSqqXD8hkczhRHe4JhHNju13vEck8FHoQrmPKmDpQjGdFX",
  "key3": "22L7ASGokY3Y9SwiSkBUpJ7dUhngUVUgqxj7nYQ5a2o1Abk4zpUr5Cm4UH33Jm45ehnzBFUBUXGkL1jERevy54jk",
  "key4": "QMSFJekmgQtcPRSYvZ1SE7aSaNadELFWMdoQuyge9MEW9DyYXRxCQhJsEpXfs7qNgKh3UWGFTZszQLh2XKx9Bwh",
  "key5": "2huFQKBufzuW7nDts23Q5BdEiLKd49MQcx8qyUgYSjnXAPopyrS5ZN38zS39xPgWNxMzPvLsRUFMpT1waPB2f967",
  "key6": "UcaMVNfauBV9WKtsRZxwZj3qatBHP8SiuKWtyEvfksK9kYkSahz5joyuMrKGRuADfbZj53zVEvDpDSyiJBQrbHQ",
  "key7": "4YjKhH1Aggw8br6u8h4mC4ots8jm1rgFeBurbqkUn4wEgy74wCaQzv27nVA9JhWYcNUnSJgtyTNGCqXAfE9ppqfy",
  "key8": "4jRiR5dPyqXpz2hYHCFjByC9gkWn43XGm2x9Gi3F51sDjspe51DJeaCRE95hEMqiNebn9HdGsMsD8rJqvoULgEDh",
  "key9": "LBmryGH1ZicSCkdUx4H2TMKsWKcD25tmZHEZkcTHvsjcooaNobJJb9hMVidJjG6qr7aA2Wd9cRVL6Dnz7P3hrh3",
  "key10": "4fMtcWVus6ebSLMwzZWRMTsLMzYkAmhAai8kJVUtrXwNF33rHWYpokoYXYCYpM8zeJgVvCeHjHSMqnmZx5guxWcq",
  "key11": "3AcuD3LENDFqgfBD2q6gF3XNgobWxgic4DzUTUZ4ysSyGMy8RQJG7tbyc2KWdYyFkSBtA7DhZQY3grusJ8WxJA9x",
  "key12": "37LRpkKQegEQPW2EMH2seJvBB72NmS1TLLs7TnzzJS1ErN1nCNiTc7WgEFwATR9ZrnSERKCA41tYiVLjjTYcEhd5",
  "key13": "5XfGhQAe4z2izK4RsgLvPhEC2pobt9ZsyaYZtXS54Z7m6M2L7wQJKWa4YanZExrQLzHuVMxYwCwpq7ELyRk2YJX",
  "key14": "4949psxTepcJiqVQeyopww8GTN74w285xrRf2pzhiM4r6tU2Tj5iknsznLJT8164Kbbj6KRt4m8ryaT229KcNcgz",
  "key15": "rxxQe3WqhSdBX26yVefTcwmbmVRKdxnxAre5j3NFnFmm1dv4NSE5V9RzQz8q6QVJkaoWQTF9navzLu7hCNftg4e",
  "key16": "2PwgMi1PTmBJjxu1HyroUgDHSQfuQcGa1Zi2cUcvV57PgWDi4yBm7uFtYhuQL7u7eA3zNkQbZorSVUV7jhbRC9fC",
  "key17": "5d8km3gaPn6mcftZXeDEVQ1GAVBJJsK223917iduhstSTULh7Gu9MBTQP9XejVNv2pk4vpRaBx33WZrDArWU9y9P",
  "key18": "5LHKGyhnBFDuRMjvjCT6pFn2yortqKhmZT3Awo79HsSKFfpgk689Xavn3hinoBkVjYj9rkZD9wBAWcSQu1VML1Wb",
  "key19": "3cccHnddFtTeTEwi8Tkn6piGuWCSihrF2coGCmxCjHRTvonVKpAgvVMuS8idPHo5qPWg7DXY9xYnvYYrYF95Ao3a",
  "key20": "8rxjoaUf4hrAZFg6iw6ee62R3tfAS5UBV7uoH9w88BtqSaMLS7UFQjMt15u2T46N7E7paw8t7F8b7twP7mohLPG",
  "key21": "6UGpiPxNDGZYRtCNBU3RghA2yF95ix3b8J9HpBaRgAF5oS1Zr6UbL78FhH9ZxazGWzFeZa2QV59zWnTfemNkH3j",
  "key22": "28TqGxGpkkjBrk89JtStG5s3un9vApipqca992nnMrnXVugPTpeiSnMgSNqHU9xSRNVdLb6jqEmQuRGMXNdmtFz4",
  "key23": "3v2VUf1kjGGP6uTyZ1HAuYKd7pLqScw1ef27fQsGDytSLzCFNEjy31wYfrgVhcNXiNwZ9q6yr8ixW1f3UQfFTNMw",
  "key24": "2CJ52iciajkYKBg2mBoALVfbYRqizM49GbWJSLSpdekXKsmbHxsTH7HDnFt8aDpruakb8zPKUDGSVLDyuS53eeMh",
  "key25": "4yAY322pEDM9ChgHQ8e2643BCDmRuN8VEpmWLJhrEnabsj7fagcQ6VPUHZ7cxVipWoHbwZErtsHghDApu4N4EAS",
  "key26": "5cVJuGo1norCrNrpUC1E7KcaLd2cqmzPaqMWvyeDpthBnyAGWryUYQ3kNZhLAKDAwKdTAwFYRNxxzyCTXScg7zb5",
  "key27": "3SSFFi67fwriiK3SoJ6mMXyxwUvfmzmGL2uZmZ3DkhBwcyudzN9CWofML4jxebPW2KxX2fBmQtPBoekMMk2A5k16",
  "key28": "2uY3bj4UwD113ttgZMe3LtEsVnt3KEFYb9gXXgMebDdxzRSMmvoDkH7tsYzM2jdgZcWUHhgCHuwDriNJtmcXw3yn",
  "key29": "2rLtszto36vKihMp9B42j1fGotVFNA9paVxRTFLq7Abzdh71rP6Mm5BBGmZv6oXAS1umyKRgKJayh7mVKHwhyQeS",
  "key30": "31o2NgiUG2Q6xZtGHcSqJK6DG6oGiwGqSTKp63FXjGMSHviJvtxQGFgENmewkaAMAF5BQSna51wgtLGEppskviKV",
  "key31": "4tmEjwjJXQmGCX6rLLWd9rz9mVvUQUS8Gpmvg7isqsMn5F87RZyaGemxYPgWD3r5hZAby3myNRyCDPqzTFNcmcaW",
  "key32": "3V8o95NHhWdGsxdZ7dNEAgXnbZqxG3qaRPpuQyRXsa4wnpk8sjatZy1PWUWLEqZ1v9jRx9nVRxX97t4E2Lx6yZNd",
  "key33": "39P8QX7EkvpRUarGZerD8UoXUTZfhHVTCJGZVt9JUTc1AyD65wjkqqPfrBgzu8JSBb28LQ9gh82yYiunmonLrM5V",
  "key34": "5hxizSN9NtCvoUdU2xjgHReH1P5Panmqb4RTQjmbtkmFhxPg5vhzeZA25NRPv2vfRvmjBsQyPkPUika6eJqqHHvK",
  "key35": "5ecz2BDQfA2h3Z4e6gR9maY15BqGQ4CM1jZDvdmZbKgXEGgg2ttL4gEBPejoyHnQJR3zM7Mpc3ouMHSQ5BeiQ9jB",
  "key36": "uSZz1oGuBJWXS9JGodNLJPCXwzbG46DVwHAN24o19vqMDAUNqcyKBa28UgNtajcKYC9cj4GYTZCusjNLPAnkRfd",
  "key37": "594Xg7zJAfJuWoAn43zSNeCDGzzA8kF7kwx6bghhx2P2dYmBo9sZogZMneWk4egvzXR2jGxZ27uzq2Qie3DfBrAg",
  "key38": "5NtAyUUWtEHEU3C5smqu7eSckVQWtrCQDEyQvGKqDtLD9Q8s1jJLuftiPkk4ynziaH2UgLWv897B8zoEzeU1wNS8",
  "key39": "3NiyEX379DDgRPu3EhHVNoPLNjY8NdmDmtSXmJYkZMakFbh3tMacWfv8vaXUaGitgrp6DLgnDji5h1BwaqiUWZCF",
  "key40": "62trKGxYtpj412TemVX6czs87Gh8cFKMuTCcBqEjxQMxGuBWQ4hxKkvartGa2x9E7kSCtUwAHqBjen7yxi8gZ6rM"
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
