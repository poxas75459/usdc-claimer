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
    "5P9nUhHm7J9Js6ooWaFd2sRvTjnGnhyXuFVSAtrXjvM4AsnGxTaiMbrHokfgjqTEmG1nzHmd59KbhQQVz5cTjmkJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jjCdR1irndqJSpiG6shhkm2toZui8Y1hHErXYyhk9QgUQNoyyKJ7KeE66wiKDFrhNrKrH6p3rm6eYnUK6x4Yn1o",
  "key1": "5Na3gx7WN6NwkBQp5oTCWJ41rRQTFHmKm95qY2AEyRGiN1cpjm7tg4Lqn4Cv78mW8xcSRW4ZkK94maKv1QEHNdDQ",
  "key2": "5L5xV8tMNkRMc5icu4GhLw8ZmNNDMQgJKUuBMtDPMnzjJBrWcqEGTbZsQqJNySx1tJZAKBNbb7Y4w7iQaQb3hw7Y",
  "key3": "5fAHyf3VMfb2zoDvPqvNGuPLNBuU2f3uMEm2NzQtCmnGQzJHsWn4gttam2YQ6aXwC7pSKxVbtyiN2iYX5atY9es",
  "key4": "gnGk6H5xneqR9f7ssngGxD1qdQDTzfK1BnTmjcZrdea7mFkQDfqAdVfgQu3hP5SMZm4mj9KFFo9LnAPuMPwBb2B",
  "key5": "2uG5g9QWH9UvEXTrBTocYuQWyrnJoPEjj3KLfzvmwZnTob3cso47kVwQdFKYcz2V8bM6DLHTr7ZHR69GD3ZL6t9d",
  "key6": "QvkbD4sCLRbbnYv43mwULqydgWvhq4MrwzHr5vzJ97YSuvrmcEvdUxqWMJ46HMmLQUWBrn5ratDPtz9YaZLjYgJ",
  "key7": "557pCv8WJ2xPup7Jy46h1bT9EUtJtR2tGZYguX4uQobuVyspydCH5D9fPpdsgEw7HmEkLRcZqwKNdro7EBWnQ8Cd",
  "key8": "4viUDvMjFJQKepmy2bKhoKpPoh86kgsb6wq5LdoRGD85xd1HUKKA28JuJvriegfE9qYBEi7Jz6KM5jtpYbifaCvi",
  "key9": "fKAYZmQKjVV24QzfHmKpnSy8zuKLFdnshcpkHz4CSMR6QoikSkyGtGEXzDzMQCEmrVUbNiBw4MEsYLUE8MXNaGA",
  "key10": "V3T22XbFbPVwriMpp4PXoRjmpicuw6cNt8PEjANQrm96ke8s4eAZPPfGsd6hD9tYXjiPFSuA2jiCfYz3ieG4rU4",
  "key11": "5d3nyh7ASXmHZ1njkmLihpjQvpimbAgeAXRKuzLufhTWcjFgCnXew4eb4eW361FrW7r8az5qgfDL1ogdwx7Qh3oY",
  "key12": "59YmaB9Q1PtbHCkTq6GE6yLJZ5zApXrktHfzZ17Gr6hGoJTiemPmUyeYKAdLmE19YkvkFRcN7ckmTqGYV1ZwsPwF",
  "key13": "285nwoHE9EjQgVq5hw3RoEgu8vgYEDjZUij7s81q9YicpMUnyKffWDZYd8La4zfSJodigrj7AVbRiAtzaBBsPJoQ",
  "key14": "526jb7D63EjQW1z4YxHfDyokwj24PBpaqfiYtbNq5NiNDRpu35jcyyCmnqxPyJjzzMzdZSNv3xGyndvkM79ReDYQ",
  "key15": "3KDXitWtsKRthjSjqziv713CFDb8g8194i6b9xtT3U2Bdz57Cbrm79FX84Kpa55shwfnF8iuFL6Sj6DCZkLa3ubz",
  "key16": "5ZXc6bzS33SbdBk8KQkse3Yq5KAHjbgZ6xnL5uUUJwyQZk9DHhJMrKjZ5Gv6JC4nx5rztACn58YRxS9JY8R4uaDv",
  "key17": "5RMk6EbdaPFgAHvS8C82oFQ7bmhsoXc73bKoABERxMPULR2xM6YAkEtwAJaaVMyAxPURQnQYKNoRvYtDx2gAqF6x",
  "key18": "5VARNNLf9ZDodwQJHr1VkdWSwzzjUUS6WAQCNAA6UvbqyBYpM7T9kDiDK26gpuRioyYYgSscbRBGeaDuPwzMNJQn",
  "key19": "5AvZST2B2JD2Ws5vUA2MEQ1JEVCEHG7oHV8YtPgVycEpX13shjGA1CX6EEZtLEB43TtXXBBvv4daimJ1CGfoJnvi",
  "key20": "2btADb3xSg2urMR7C2AhjQt4KVYR14C6ZqEffWssKEXqTwC9RzDwWkKNnhgw9wyfmvtCS9JrjzhXgVQXG1s2mbhv",
  "key21": "3XN6kdBFE3QA8GdN21KQGZJTEcWBDTd9UvEcTYhXrw5sL5gmh4M3tqfk7Qho17r5o4P2XeCrpDRjg4MvtmWUpwYQ",
  "key22": "5qnDZEZ8kXR2SMg8fWD1Q7JohJ3UuE3oA3VTBbJNiCt5GGaBGzp8FqNAbQH6dXVz4bQuarm77tHkxRwiWmSCPrm",
  "key23": "2NWZuSW2Hm93vaWeGWi9ECSxhMhF9vGMbFWBKVZKbu5pVFi3WyCuv2z4RXxzhyvQMKCe4GSq75racnha372fXVpM",
  "key24": "4t7E1B6gsPZU6Kn34XXDLNJXJBGFeBRzqSsh5zu5gcUajRGaUDrCmBNteKKhPfRiGdL92k8zfR5egAv8fvv49XDy",
  "key25": "5gYu2iZn1YGTBUvyWbFjvoFqgAnBx1nGdWyniQJbJaksiTnbMgFjMyZ7cHGU5f7sgtm8T6crP1ZF6fN7YVYd4VQi",
  "key26": "3wDxhm4Zc8U9Z7KoSZbGK1yhyjZZsyZJDWbcW4yoE7zbD8wjS61nRhLCcnbRKbXdH7NVyW69ZpP4KTLgMuhHqL8e",
  "key27": "2vLZG18HLEVLDoKrDe8zxFZceRG1rFXAzfzrF2TvZBHs62LNvQpSEPDGxsDgwzM7yyKW378h8q2KTQiiNkorYFm2",
  "key28": "fQpttzdPsgKEx8EC7M2f8qmQXEkeG4LcisdRMQ1hnHWn6mcfBgPE5q6xjVRPEnwfzpi9boonQH26PLjwCuBEnZT",
  "key29": "8rtDg1wt8iTLzbCS1gW7X6i3ZnQQFiTx8iJjyFdAjnVMdKCt8Kw36g3zrpafZf9CAV3CZa85TREGaGrdmZSXPAL",
  "key30": "39JE7zWad8qGJ66ebJYm3eMoq3LgWYF26nJREMbXgK5Pi9XogxNqXeSZ9swp5RPsYw66BX9xBibbBmgsEAD688JD",
  "key31": "3qHyAV6nKyE8hB4cxnWSK93nyqCYiScshhHajhV5TMrEFf632Vuqr9kXknoh3JFSdjc55MHdDsfYcuaGQkzUxnm3",
  "key32": "4AHqTdwRW1YVhy3He4A5RL3pKkDQXM6vVccHjs2tFYTQdkWkCVDzDF8bJRtNx3LSvYsYycDfdm3mBQjsNxqYpnwf",
  "key33": "5wYBVt4JGB5DRv5hXMSTmXdQ1VUYP5t8zxi2QbST64nhLs8svvQZLYNzabJjroXNrwKfAEtzvNT4b1p3zgQkKbRk",
  "key34": "2BYV7KRvLB2S2kK8hTN35WzvCwuzAwyucC6fZsQzUae6Z22tEcmTLLR3pbreVZ4LKaC6aTzss5GkspFcKdagRqmz",
  "key35": "3KijBHvFXpGhwzeM4PUMLQaec8Aj1wXJmZ2gipbA2V1QxAEQutZy9HZrCfEYzoM49bECpWZLYdsekoU9XJNZsG7f",
  "key36": "2SvqTGUQrekr8T2RAjedRwvcAxvnk5bSshC6RWKVcMkeQvzu2QrfWkJiY3LwicffNK5no6LQ3LWknGgCZgmzXEag",
  "key37": "3YZxZfCHAu4UMkck6LT3rgq8mFAL9Qnvm7sbTEhAB6GtTSd1nQQxhbsuwMG4S93ZrUH4mRnp3BHm8tkGguZ8FJhW",
  "key38": "4Ps8CWgRfX2NfDsopJ5vxHgyLytVokS73YXdFPRJA4soMGyALbsxFbwW7Q5mqrH2hYkyLfe9pkuc4hD7HHZkA4Jp",
  "key39": "66gMR9sVe5g22eYDKJCeswdjJwCTXk8aXUGfNDrmaT1yo8F6fv8CjXi4YsSkiJfZh3qPibYZumRQz5TA2SdDjto",
  "key40": "28o6dEqE4pJ3GE4xgx3W3WacxCmewLuYdDNTo4NWWBmZRpuXRFs7pjKMri4MsbPEBnrbDxiEQxppjLFf3yJxB5Xw",
  "key41": "4mGsMhGVZJKnR1sY4TvTVeBZw7u9ZEMqHBo9pX65wnCRnmie6D9kWWcsnhrozP87CXGT7BNir628YUm6UryJZoEw",
  "key42": "2iDfH8tk7Eopq22MPamw74M3Kikd6XaZyS7Xu8rd96x1jsA1UsWpqy2mu9g5aKWwm384499miBsrJoLZyYh7VJVt",
  "key43": "2dCtCxt4Pbaat8LFvCYMvW1wa48fJLjHuG9Z4jggP3R2yT9TeJiJg3nbM5N77uVisrbdi6wfVBKZQ1a2wCKdZ5v8",
  "key44": "2o6TUCSF4aowp3kEAaSzC7WN3qACWrdU6BZUqMKmg7y8UoD9xM5hv5YdBRh41bJbDAvgK11V6FSevX8D6SbGYNAx",
  "key45": "3azNFJTYkM7AyjnEqXXUqcTpbUVPYwjh3P1AqcumrS32tfnp5Fc9GPLNAthsAzMmv1hfmcxLJ3RWqMeoGYEcmLVT",
  "key46": "44KuQ9L5meW9vuMsLSE58bveALAY5jC8fJ9n3ZHUXSybVJvTwh6ys9usUrN6XeQywVQWxwYaogbcW4BGRyBGsGGr",
  "key47": "4NhYt7tAWshUVgzvWLvUjRweWLaiqFivwB7ttdTeR3v8G1RDjM4vcJ2xJ8S4KAKvWWg2WPRLhytQd4nUwr1kQewg",
  "key48": "3NGaij7qasRt2ZnXFyQLfjFoiWEHpCx1tZMoMM1FTaNk9k4xNLDFD71sLkQDhKdbtp9MsdtQafdgHLdasG18JDra"
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
