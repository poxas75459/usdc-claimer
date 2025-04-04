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
    "4ZCRWgNJEYhZjMCKSCQd5DxdrXv3SBAKKDwxEsPvNi17kaxHFQpv5YfvN1UAwHr82H9rymUGK2HTx1KUPNJj6mZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jrjNent711VJiiAfyNhxhX2tPMu7tqxpnjwrTenDAesuTtEBxZR21d8D3ftBkWTgnzSuhvsEY9o15BsC4iUAun1",
  "key1": "3dDYQsFMHCAPAfXLiDjjyhkLFqtrVPZPmavdUCLBnsTFKzNh29Xg5A4QgYPHW9pXJNAmRcYqjgQ5HW4kePfc5gNw",
  "key2": "5U98KQPEFeE6rRPuGtpsa9pw9XXGn3rxQ2gdkKrVHCDZySi66TBeC8TbmYaAJdwreJAgFKyGsuz7DQVkKffVfbcD",
  "key3": "5fyMYJbj4Um4s9stfEmq5bboiwZWBm1wvMGLGenCpqd7fooo2j2GDgAYWYHC17kuJuTheNqGeZwTfruZaa4tPNuv",
  "key4": "3QwWo7h7QBDCg1t3W6n2uSQi3aiS4u8x8bWuLh3vDMCZzr4iaxnXEc3rw1g3VXf3dEHnU67K6nwGwKNJauxyQ1Fh",
  "key5": "67HkCcRsaAQnkT5Bw3XVF4FTeCj7u3JXK9JqHUWuZ9Xe5AZG3wNg4e7HympJvGUsh72Bwds3mGLdAo1DQgYg3bfM",
  "key6": "386W5sG2ohqompmQiuyEACukkfnv4CLDJgEy87Av4SbSpHQTronCaeMV34CP779bk6dvU3sNN6WoNeMhxyCcsgnS",
  "key7": "QJcVED2BKiCRUWKqoT4AoWDibLoK9ign5edBUZwHfwggySYD4t22VmLv3HYydZ8A6KMPnSHQhxsbvb9A7Py8KL1",
  "key8": "4hNC2nJ1h4mvH97VpwSxD2paEa9eXFVxyrH1caDfCU4aGg6YY8QMYiNRk6TrQgFp3CNBqZRgzbB6SeoghFHPv6YD",
  "key9": "41mtJSsyziLwzxY5cfQcW5ZKCg1WreMB8tgupYjgVBxgoyN9Kp3hces2LcfPm8Ryww1WTzQ7MLsdXwoPtChHiMBS",
  "key10": "67UxphYM4iU395Jvg7XANcxLt3bZifdJdkfZ6EkiVK2rR7fsm3vKwYSDoAtGmeeDZJ1iWn62CRprbL2knaotW3tQ",
  "key11": "4gLKSBuqqcEaBWg3kPL9br8RRuedHsdEtQEp6k1tXwtatMCcLzNuJHPRCCyxDZkj9BR1xMjkkAcFQMuH1cBnN8fb",
  "key12": "3APFFXFU21W1Cu6brLMfhKgNHatDzeNkGSJLM8JbcWUqEPaSoPbdvsEtdiKWkB6JnCCdh5aQN5CFVG75nJpSR1TZ",
  "key13": "4tcn7Ffrko5dY8XVYTNccVSKjSgw8pDTK6eYwT4XgLzeZLZ3CxuWr7Y3Sb6VL4JCpdSi2xLuyzqPohWL2ZkLstLQ",
  "key14": "4Xfwh17ETNUF2KJNmSduCu6BCcHcr6DWw81HTUDxEtRCDPb2u2ZjVcsCi2GXhME7K3T3vjrYpTZ3hL5vjJiCsjPW",
  "key15": "3GqzBgwHrGBTNqNRACLHKVQdMqkjuPxdAPg1EV5B8FcgZh1hHMLZMEexsxzAodTQbTohwzEbwrjNY1qiwkSrrXXN",
  "key16": "tr3zrxFBYJYx82z16V7QkPKZh6t6k3fQHPAQyh9DXZEx9x8deg98bzpF9Vx5YoNCMuMkTsnmiG9Wp4w8mX7zMPw",
  "key17": "4TnS5dKR2GWegXTNKNNRyW3wrAuwT6t596Dmsvv5MbXgqGN61GvSz8qA1S8rGhofnX3DhXNWzdrNh8hX1TLJkNd3",
  "key18": "4Vr3xRGK2b6LGDmVATv811uCVrozduFoR588q8aBmpGbgdi43ab8tJsqiB6z9mb2MCGKje9LQ7tvtRtKyyNBA6HK",
  "key19": "3394PpkauYAZgmxt5HzGUJo3EZmPtzzeA7oPBMCsYawA7Uz2kAxjxXzTZ6aKUWfGQgkPrrF2VVDqVjnrpjLsUmjX",
  "key20": "2EAuxSKbPsX4qLgZLnYvmRKWe6BUowMnU5T1GAHNb3SiZgBXktC3Fuec8ZHyaADe7g7sCuhAftWpMaSfB2FE1uF4",
  "key21": "445Hpo9DQrG9coQkbDSCkVuMYuxvBGFeFtn1dKwTRAFseMXDK7qQKDP4UQVz3JWaZKo8dHFUdZarHC3vVs8Svx5h",
  "key22": "5EsmXXhFg4pSvSNG7aFaw1ciiKdqPknt6tfPRNrHAds8F8UBdJc1xqmpQu8gzzJWd5KoBpqP3HrYjrgTagtpfMQd",
  "key23": "5N5gUMQVTs1tkRA4z77jSbCKeJwW2WN7FQ8PNr9RirqGYGfNHWo54UdoDt4NWLGJTBBgUsPVNCzz9BC8u3PNwnf1",
  "key24": "3U6CCrG3p6aN9cm1RZvK39QYoFbympQoqpNGpYezaET3ZN4AWuDpXsaDRyS3JjtokYPLYmqYRGiEGYT5ztWAZsNa",
  "key25": "2WgB6e9p5NirtAN9JWvhdJfAAXmnGXEBUaC6XaGsHLK86RewgcESZCe2XGXV1d2mEmTsBBxK3DMDgNXhJPScmA3X",
  "key26": "prRnuvyBDbXFJoZrnMxB5wyeTwhfK2gHCMsWw2t9BkGwMjB34Ff3doknZrv58r5AbMvcEVzNxbAsczktjCmkFWy",
  "key27": "4PqVZwyXZbxRPLh5CP3BtRyD6F4gZhy3rEeg6d9mfMRxdkagG5uUnqpRfGmBVKUbwt3vAGf1UTeidD1JEsE714eG",
  "key28": "AYCwSh1u9i9eCfotiy7oWu5u7C2UMDQ43Uq8Ye9DXU5S6aqTsZg8rHmwjbhek81maYPFeYzZoDTRRhZBaufKGDN",
  "key29": "5NuD1fbdkwP2iLrR8G3mmqYSyWNmCZ3kgd3bEavkskBRedDoWkGtEYyjK5nag5f1zFcwY73BfAxzEBi1ppG7SwkC",
  "key30": "2ao4xemdgR4nKLrdquUPQXNk5JQiA5cVEWwucEMGMnLUw854DRjXD1CiAFaQcbis7bDpro1QkUCB5A7hRw47sTUW",
  "key31": "5RCmsfemcYtyU2HauWkSmArm2iiDdAk5DphPoJzxkzKKCHUPhy8Ms4LVS4u8ddi5PtGNpF7k5iAW5NVVzYDsFF4e",
  "key32": "4HvESwSAhz7xF8MHamaQXohQDRrskN8zL2K879uSwTyvdWDUJrRg9DMfZ7Q3RLvKG4E49DR4odxriHBGSvvkSMig",
  "key33": "3NsADR7UkriNVQQNmwZNsmQRZiXE33ZW1s7m6pzpKSUNv4j66Hb1WEYUjfTPMbKBofgsfmighYyrr71aucH6J5tr",
  "key34": "49wKkQWU6qDazxhyfXyCY5MtVTzNfm38avnVp4idHdi3RL6JVcAkCrZHWV4KVFpJLXYfDAAxeyTgveT6sbKZbYfU",
  "key35": "gURWUdFccddKggW3gCPxnj5JFJ9X1aFgw9eyPvPWeEvREy815DC3iMXph5JemwYTJLRsWMThFe9P2AWdrEfKwYa",
  "key36": "29Jdjni18RofSQuXbnnitJRXjx3g8mRfyVADiygSQDVHk8yBNUG6nJsfnp6xKZDowVUuFh8FKWS2BY4mcbidWXit",
  "key37": "3zfkPrZXwXQfhkiiRqn4rBMTTiG14hP5kia22hiojajhwNKuAuyMFgpk5FmPdwzaCkuA3JtGhjyTj6EKxZmpchkm",
  "key38": "3y6K1x3iGydR5A7EecWAJsDGznreo1ukmG2pag7gzQx2m4k1kNdH67ey9ce1kPPFvskS7aRHPFzVqw43jYPssfn3"
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
