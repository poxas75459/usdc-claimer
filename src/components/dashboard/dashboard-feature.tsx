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
    "573dpEhDxSWfDisBnSc19BNZ1wDqRvinJ3eHJ8oCZ2y6aHhe4nZ4LX9CYkvD9Jo4qdcXz4m7xpYbp6eaBk1qkewT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BLDseYLhTcUczSKBWanwU2RJs3udgnyGSqgK5MjCYdPo5tKH7d5H5HodwhNVCf4WqDFFa5qBAx4Qn62NHrz1Nhj",
  "key1": "gd2Ho66D32apVYFhqbyGX5GjhJQEkYtUyvDr3HXrCrQQveysVPK8fFGJaaU9gTE9uFD3TGCxgVRnUHcBieKhYG8",
  "key2": "2yi9tu2BcKq7Sq72HXQt8MJLh4G5Er77eTCmajxERZrU3kw2aP6r7h3AL2dizYeKCqrfKLWnUJr6JLsW3szyyUz4",
  "key3": "2aZUn5upHaJppmuF24qUcwXGeurn6grp5jswtftzGNzAWpP8dbjhkUCsEVnwhAH4aaZe5vRupcBkHSg1w71V6eow",
  "key4": "37NkcCwsyWXMNBcEP6a1pyRcjBUaXqVqB1R3dnKuVVF6jTmEcSLieHQQH1xCWMJhTWNg7h1UcUztRuXZ68dtwMxW",
  "key5": "4XPASceDcpm8dKEJaHKhVDqPw28kpzJ8qadTPJxKt2SmHo6WMgS9aDZmahihdpjzmCLEfkFRExMr1TNqFtp6izLZ",
  "key6": "4CtypnFitqyTvrmPrReQq48kwLwEkp93h9gCBXwzFUAWovD2nFfphcbpBFouMSr94UZf7T6wzNVxNyDCkwgZ43cC",
  "key7": "5GvqxffR41uSEyCABwCNYQkus92N6yjdiRU3X6R8pPuCaMNGtBz3xPbwLAFBXjASRAWQyFRSKMU1vxKnXYDzYcsV",
  "key8": "bL3BY8gEYzMd8ffGjnRHnTaCDuk9ye1Z5uXcGwt2pQ68CRrtUWLHgtsxhGHLN3qtwsfcwcxr5yKWCPVSAXjidwE",
  "key9": "56kP5hg7nQcntpVuK6WVrcuCVFhhkBSifynZxPRcZJAsNtwqxAXKPskcNWCN3t1bu6prNjoCfPVjBSqqo4df3Nc9",
  "key10": "5tCHdDcFS5mCDKiPQgFtnPEVHUaAKtfbsFMumoqm7YtQz6rtgv5JJwZ9dwNYoG1WcZHin1mCMQHqx4QkeruUgLZD",
  "key11": "5exE14pfeEQyuAr2PwrDfA48H9JiLz4EfXNVR4rJxkrMUg16soa4j3sLijUwtSCAyinLQx7DQpeuwVDEvaLqubT1",
  "key12": "48L7MfdaYwNGjrNRbtzSYZoq4YmUKzgWrEqxzAEeYL9cBQYh4gLGoSN4rKPP3JVrqTN1UwBK3e3LritQ9xwazdJH",
  "key13": "5mSa2UEbvGPfo7uSvKBnEBPRVLPvsqJVZEzBHyV8DstQ79eXALkfCJHWtMq4qYnq6FMgzyYfaKYmmGPNpKT2DV8W",
  "key14": "4ox9tHQPfyDkxP87ddFk6G8ndsj5uQhxmWnxNSrf94QdYMf6D5DSWQnTaPmnCmJnS7TKEhcGEvF56Buex68UsyqB",
  "key15": "5GDbtAwGAS1f4dJ1NGQWKq9q1uZphBJ8ZgYcvQo9WnATcEzJekG161gjwBqG35EfGd1EYM2GyVodkfnrQA9wJ5nm",
  "key16": "5VeUgka5bSi3K7JPxNaeLPATuavr8wr6J7PcfbJwFE7DruZM1yRYMe13bmSXGkmDbW2UY33Vk9dnGjsjRTS3e9iD",
  "key17": "3LKJqu4bH6dvHVMAJjJMnRKFgvjrRCFn8WBbgMYuXkZmb4fbju5JTNfi2TZbewnn2ebWeveJtuModAi3cEVVxuqH",
  "key18": "2qF3P3Dbxgm49uKCWHTx5nwVphSgyNxMee629n57HANP6t8s8HW2R7aDjgVdwdcsVumkVq1WLGAYDfPPU4KMwPXZ",
  "key19": "4ie6Yj9xCoepy1rLxbSmF9qXsmTLZL3oD9ToVtH6QK9wB8NYCAsxEwae4epMJGmQBmJaWZTzfNXE5St31gowBict",
  "key20": "33WuMXqQ5XF42eg13FiqpWSurzXvtYJJY6t8mWJEhzGEFFkFJg9QpC38ba3okoAhqY8RxnJ2xvBZx5bUy2pVFZAL",
  "key21": "2JmgrLoETog9H4ApNquaG7ore6JRxaah2PPsyi1eByDMmmGo4Pn28D3DUepRET37SPvvMg3Z9pRBviSqszXHmi8R",
  "key22": "44WYoCHRNoxRBBLzqFc1Cbe4CYdJ8RnEB88NQRZCXuqydSkAfVbLPYr4pQPW3XAETN3R4YDf7yU5jtXuU2s6F8AX",
  "key23": "zvwUVVhyPV4NCRFABas4NRWgxWBS3ACsw8iKFdg9gQAthnjALG8Rw6GXKjptEES9h8fiH7abNcQU7nSKf2n3SDS",
  "key24": "3f72egqyvGbAGXTfjLsH8dwS3J3cWVFYR2YBn2A7d1Zg91pK4xtmWcvegKQ5VqiNMmhcxKgWUdJaahikb37dve37",
  "key25": "2M42Mrf3paJBFzZokVEfpma1MZNrgrSCBadtRJBzeB7zByvQg3FXkFq3br8we9wz5tbjvx71PTCU8xbHobV3N6Qu",
  "key26": "VWYb5NR1i7jXVDS6T7Jm7vqBpPjr25iqaVWBbuMCoG3oaLDAygawLJj12WQWTuTZ8TTvATsVmEJyvG1StAmauyF",
  "key27": "455rnucGuKunoN3tD9hBTj1k14GMnAXHo7e5P9p8eWH4DtEtAmWsaVFgh7hMLFGoa6DFKK27ybvyF8PB38YRLbk6",
  "key28": "3ABNzzxTa5M71TNGKcxuQ8HuVVQgM96c9vhwK13wGpZxKnSpdvXqZmeGin7yKK7c24EEqMnaAY95Q2i8pRt8pzG1",
  "key29": "4CF8rUXmk5Wqcazs7wdtefNQtowVZaMK3fKn6CXvhdape4fNNrw72hbtsgrkVPifrAqFb3dCwz35GP2svE7597Af",
  "key30": "5CSZhiSAZMr3ieEnQjkVen8ecPTd7iiYgKRfKstBVDmLwCrJT4VYEWErFr2vHMyULP7CN1EeniR3WcZ8rt2hnn98",
  "key31": "4SCc3DygW2QbJBrSAPyi7LK8Mh8wgL9MBDwsSxDRFWgmYb65ocdQGTRkj9hhB85tvfqxEhbLn3N8DuJwYraECff9",
  "key32": "tj16QfqE49ymHk7JrVuYwNJyGFknkfW4Xs4kpJ8oDMeGACx8pvBCiU7kkKqc2KVGYFmtVvmWEd2zYYXDL638UJ5",
  "key33": "29JaivmdHjZP7EjV4xQXqQWz2r8k4uhvxCFAG3Ho2tSG9tZc8nKq9FeLdcp2jZkpJCrbNDBJ1JStwDP97Vs52JPx",
  "key34": "3WuXExNzeAHAEgXzbjZjPNQq5xNwepv6FyXzjESbRivL6KkPKFXXQA72zFagUZarQsq4KZmTyCUcbD9AcaGWcb17",
  "key35": "57wh3SRq5sES9EEb7Xd1sGbnQTK26EVbrDXyFsokhYPmyc2gdxe6F9zJGyiAGWPFaXG9bvf4GriMyiCixUrj4o9W"
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
