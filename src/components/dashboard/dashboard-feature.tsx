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
    "2tGUZu7YdvctqvUCgyaWjyTSkYWSKZsh5jysqRj1rVUWcGA9dD7MmTLjTxqYeEwHC1xZib9ybZ2vGM6Mt9a1DXGx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ko9hcqbGMD5KJViNu3jUUg5JMqz7H8LH9HCiAZYwrXgmf7oUXeCcvN4SyeXzUyLYSCZW4FD8R82a6bhAESHcyW3",
  "key1": "YFDpM1bSnZdVKaQR2P6ZguDXNy1SuUqeizkM8MxRnvjgb4Pf9dsY5ZE6o6MxnvMoX6oBHW2ouSbNX9Sug2DjmxL",
  "key2": "3fKcpLQNpVe9XHAPYMav972n7r7EmrvQtW4oF3TMTUcUJcQpVfA8yvvURrmtGivNpnW6vxQngjDoqDH9gbJakdzu",
  "key3": "52EFj9Ec9C1pNgmMSUni9xuZRDKcr1NWFf17jmdtCAFzhBdN7brQ5TZ3Tpf1czwTE5m9bxq9PotRfDB5wQas7MfW",
  "key4": "3VwJ8456JZuhYDKoxPMWravGwtXdcrXczutSyd89u1ADh2qd3y44hbixFkkTDprisJcKbKmJUwHU38E9dMbqvUM9",
  "key5": "4pmfURomT6yPwJytAJD5iXVGYc6LPzwJiDowxWpjZKBCq7j8Q6Xa4f9Tv3MuRD4yMwBSeBgYNmPiTFB4XymaFKn9",
  "key6": "5tjZcfCaXPZmJRn818gjBnU8Zs71r4obp8NL7AndnBNeoCzFEWkti7cK7KM6EmMCCYmFWXjCZhoZqWmNB9t5QSuk",
  "key7": "3mRypPGtpmGotVGMMyTkTmqGxTVZBpCQHn89obGyYAgpNK65h6nvS4vN2VvaxaripmRn3iA7fWGVz8urYyjxKaN2",
  "key8": "2A7v9GXKPJaabtm1ZgLY4bCEBT74wdyPQx2GB32cPL4EXjYBKbLUKMQHnhoxGPtRUudW8kpCfeNxE7BK7CnQPwrG",
  "key9": "2jsTb7rDMNKCyjqcyX5JSURJFaPg1umCChp8KwxvNpureumtMkixeCaPo6BoeBaJsXLTPmhx1rmbksCx3H4McR4",
  "key10": "651aCiSnHnBnsbH8Gt8bx2ti1s4PT5tCwr6sBZoU7HXAm23KSAWh7vkKpUNXNwMtMATgX9CgkXdQuDc2YrRaTDmH",
  "key11": "3getDyx4ptiew9GtSVMEuHpg2GvzDY3WP9UWQsx9dbt8Hargonw6jDWpEMPwQddbojKaQsHYh6wXejChfohUNbcH",
  "key12": "5htV6VxJH9tLmkS1bKaf1MiPqENg7tXK91xH8SrckXAqu41fn9mRbYH4hveXBVdEQttVVMAGccmNTj9dCie2ACgr",
  "key13": "MsnkFayn1zYCysCuWeA3suMV7VSXcnD7Ux6PSbXyxpCSpwdTRp35M7gretYB4UpwYbz4529aTBhsQ1WDUdLUEax",
  "key14": "4BGLLqMV3G5KYroJ5fXWu3bhzQZRapoxG2w7j7pRDBt5gxeh5sGd7HGFDJPF3RJmuwYQEph3L9BVVzgSd2RsoKJ3",
  "key15": "5Us1RNGknyoE96wk4WrPCy3vYeGhHHrctfnUEdqVZCuGP5QBBZiR34uSmmwUtcddJEbB68BBoVUJ6tU4WztpSP6e",
  "key16": "45ze4tkXWVqGNL3CXg2v9fo1TUyrJTqtzLALX4MkGTLyHqGWALZCCu4sem1iXqAgb1cQAnWR9Mti9FQRZkp9mT4S",
  "key17": "52ZobGiMgTziQnDzpXA2vWV9M5m1kijwgLt7ddvCruYU8TawGTzcRFEXMJZr2xWUX8BGdtbGw9zGt5qfrMD1ikTq",
  "key18": "5tY7MaqLVNkvkv2xZJ9Ej1BxsUaSAydRbxESEpx8PS6x1s5k6TQ3dAVvUJKJ8dTgd3Ze2DTZW4XSuR29p4xXf1f3",
  "key19": "wUWsBvbdog8kGVVKKuiKyEHiRnU1wBGCQeAjYMGDhsNr3xDVffBoUssVh3DyvunV3KXwYgheamktgyeBf13wEAC",
  "key20": "2WJJ5UqAsZmWpa5AkF3HzCE3T8hFYMScaWiDfEXW6UPH4hM4StvX4qztqErLmeQi667vtQCvCTriM1mGmB17BAbw",
  "key21": "7S971fmw2JkrJMLQKgsxsGvf54QRngcqdsLCY9qYWTBqhubua2qjAQcmQc6yoqkYhPAsQDttyywzU2S3Uqm7Ntt",
  "key22": "cVz7F4KQWDdcwqAfe5jierqyfGXGYSfKr4naWDW2evKJMYvGmbomDSyMv9uaBMfyLZuM1JTcYYoNvhSDiSrRtYS",
  "key23": "4nR6ZTVWDXfxnLspwLNHCfvNQMEJ4BBrApJ7VWEkmB7sgWoe2K5RxEmfZ7WCdgQSZwgUs6LWzqfzhbaB15rqzAid",
  "key24": "5HtQhesxQ1X9wYPTzS4KTSEHFETXshG9d5pCksp96tZGGcf5hwyEmJbBYFCxMiWaAhwX7jnRfjpFB2fBW5EVwo47",
  "key25": "YSsqcNrpTqMKvD3X3JjeGULVjtZm5nNAeHccuZxmUNWRir4EQiJ6phkVaUVyDFs8vfAyxdfKAEyLh3i7txUX8iv",
  "key26": "3sSFexUgfW59aoHgHWZuuGKKnJgc3cyTjYeHwi5PDL1Gevgrq9QiayNJY1W1YerqrmF8h85vYAqY7oQNnoYvsQL7",
  "key27": "5nX3RBTCo1v1RuJF7MzbQemAZwyPjpZkApohNHfaw3QoF4LG9XrpX8Ad12inoLFXDvXCUyTCJzuWfEUpBZWALbFY",
  "key28": "VmfWWCcj7v9JbxZxUUo9wJkSvWuUMVrbpKHWoqFmvyMCSQHujTbFk5pWK5ZdPhAjvMDXPatwfUEmDebwvoQuzk2",
  "key29": "EhKmHaosZoZShqhzx7TcU5p1vpAVQ5yfY8d33mXRkSD2SuXZKKn4RakHpjP9SsHKQTBaGd54gg35qvLEdvHXNj3",
  "key30": "tpSnQ4F2DYuq6AV3yrDsbtozV1QVdrYULAfKVdkoqj7e7kDJL1ZQhXmL1Rq3xx56NhuHghr3Xgidn266EM17kgY",
  "key31": "4FD7RcAwrKbfjwEhWVgxTxzzrMWp5SBJPLGu9vya7nrX6oq3aYNwZLakqt5tbYYV54W34Y6TKuEksH8Hhw2cyxGb",
  "key32": "5KHoQtuyvkeY195ngsspxr3qtCf8Jw7u9srXEZPRcknoBdfGtMNMAHgtVNdFBMUWMQE9pbHbDgpzis6te5QgaW3F",
  "key33": "23oWGaMxSjUqRn8FTbG3ZZvDzs1Vck3EeiGWTuZDK9QyUMsdZD74cFnERyRLNznzbKbqpFJby1Nw4etWpa7eYsCh",
  "key34": "woWnomCfn2R4ii8Mefn8ApZarGQ2h9Mj8H1VgaBkLZLqQakyytBBR177gC6o2qxaZL8zwCxPsk9SSUWLj4Sjs8j",
  "key35": "2y6NJ9g9LSGYmpTjbV1gjTP4A7oovGV8GfpL439Uwnh3wFLeePDZJvcvSYxQiSReqrdRCyG7zBQ4NHSxvinjgn8n",
  "key36": "2kE9ihenG9JYez6oUiwKWT8vb6G5mwUxh2x7HvoSCx2JRvhm1ChhKmE8fxFhKsD9LPchbTcD3fad3uhMitzBmbMN",
  "key37": "5N7JFih143abHm8b3jkyYF7BsSBcdbZRTpUwxmhRjNukRma13ptA53d6fvPdUbZyxFnpGG1tsSb2P5xbWfJNX2g8",
  "key38": "5mbqyyAZkvcVwQgVjdJN7NXy3rZ9BL5dPFxXN5FE4ErWtxzbwboMEqPUjZDbTiJsojqcoY8f4XYAvSzLZk75iAbr",
  "key39": "5p3Vzjv6n28ASTsJzGNmPaz4B5BarefYACUwHUZvE6RBuss5RBYogoFJJSMUa1wDmZrHpZV8XhM32fKGtoEJyqUo"
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
