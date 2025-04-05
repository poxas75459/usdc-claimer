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
    "352XZ2mTj8jMZ3yvhnUMZADMFhS1Qe51KBZrnmyEWQbAVn9Ht5SaZvVW8yQVXjYeZJSDJJzk7r7sgNhmTFWGNjYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55GfvEGdC7Ln1TBy9NFSHfPxbpVtihCsLHZ6UHBXh4KmVqFMvB3jfxCpQsTJdteQho3AJru3DFkZzKCMNRQSJUqS",
  "key1": "3JykfuEQJs2fPVCsStwYCU2v2ni1Bj6FdhViv7XoENufCyXF2hhnLRUYhqRe3Ktd5u9NC9NDyT2TivS9RzK82tnG",
  "key2": "2G9WLHPfMiCmVu7JamHmosXByCYaWfPnuZiFW98mxSKBd2SHfS2S6Yxmswze7FicfBQe8L9nZB8CQBg8iL4gkMtz",
  "key3": "3KVw8yx85paaW96iPDFpxEyQjuiG7Wdbwop1ELGr9CM7k9RRoPwWCU51JiqsNCfhWTL1BJcDwEcFEczk8bJfSjZC",
  "key4": "4qJ5LNKJkQcWgfBTFNt1fZYtmbebNhUC7G5FKVSZ13KYrXWsEthpYQd2RC5vyzvCRD4Hg5FUQkBzYUTLCpqmFNg5",
  "key5": "5fJ5HfGnoP6q7FswkSTsCNZmSNa93Kgf9XwUTfk2ewtkZbPSyLhhw4XpXbSEHLtqGmwBC5zb4hr7r89mMwGrujW6",
  "key6": "NP88HnsRCWNp9sdiEZy1e19YNGV8TBtXX4YMSkh6BW87hmGyYmnMz71o5oH6w5SsR8LAuwexqaL7iwxDJjo5Yc3",
  "key7": "3sYVDjeqUBYt88ZTTquStyYJdGaAzE6varj4gPBKXic4Xjpi6UYkWFLaUCMhZxzgW9rvMwWn3Vh51KkuRSGPxuyt",
  "key8": "3CW66dLptmS7nDjQ5HDYacJgrFoPsNTww8qLK25D3TEcMMJfmJ2QuTe29kLBNgRqr8YLd6Hym9qpYip6TZodTjYY",
  "key9": "Xe8TBkqQyrfJ6mbTxKUPEijwr1hHCVqSGWHeKWzktpQdVSbd9U1EdWVG6TfVDEDFMipSxFeupVFzXgGy8u3izib",
  "key10": "3FG9ibMV1Gi2jcCGS7ujEK2wUUi9TSSxvD4MLSF62dCPWAYB7LVvbAtzHfnYhnDttw622VM9bbwaiPDVKW99T3TN",
  "key11": "2RwbERnWjEB1pynDBVtVfjkRzP4fMRjgmLSPkd8YfynhGQV9C2c8TCFskxZrEc9zpmTiZ53zBL4omoHaLH7E37UQ",
  "key12": "4orGfFHMuAB4ak5gnQBxTNjCWexfFZFA2LxUU2ucMjjc4ZdiTZV2gEjzRL8LzXTpz27HxbKspmvtJKAMMAHVqEap",
  "key13": "3PjsMqdFF24NZ3TvXcUpDFZYGBvrBq6if1rG7sdF3ST5gPd3zYzKmVuKJntdUnKbSEJQdYwgKbqS7UwMnFxaTgTA",
  "key14": "3ACbPagw3iieYTRvar4tdTQJGeu2NBZLwVuvu6zaZuQFQuY5en6aXfa9N2bjwXxBXYPCNgTbZa3EuHL1ufdE2TYa",
  "key15": "f4bYH6yVwsYAiMdUzdo1CbP8uURrevEJPVXYtxjrGpzTjJuoRTNtmY33wkwJpbksTBEhcYbByYqS5UNF94cY4JV",
  "key16": "55FcfgxgcYUJCLgCiRDTohu3wg5ord835Fc1E8jHVm4YL4qVqtQX4RP4F248FgAHes3n7MFyd7M8oUBPZfmXVAqp",
  "key17": "3b2A7HqbM55ew9jsFGGD7HSXW6rkWZb8AkVBTpqtNDYaaKQXDk2MeQKgop5fuXzrSgbm77RbGmpKCay91xTvqDNS",
  "key18": "3cHH14pqLEjpHT7nR3dPTdFtbf3GXiqBk13iRTBSUWMy5CmxNvNpvSt3wT7h1u2tzbwvdtJ7DxvSQVPEMb9LrZpP",
  "key19": "5WcDVHczfzmNwVXnGKgztEu7XAdxa4MSLym668H6qnHUQk7SAs61jEvLmoJumW54H4t7CwLRx8mZcHJQzBfaV6ST",
  "key20": "9c5W5FuHVmACScDyqpLmaDPsd4DShLUtq9YEHtbxJ68ah6UvgQKQbgGRBoAnUSih9912KKewkyx8dbGJuzRLj1d",
  "key21": "26GeJAgowWjXzVZimSKRSZpsRVNuxQx343c3hhCSm6XU6jqDR64g9nBr5epK5yhXv4ULXvfvGdrWBerWJVdQbmE3",
  "key22": "3eps7EggLfF8PkDQLCqDA9YtuYvFA7wfL6zMoXFEX7nd8yZyHX3t9fPcjaGAfKJomfRg48BAVGrSuxKTCmfZYGPM",
  "key23": "36bNcwGzN9mPN2eu7GuT9yV9PnPrqmRGBUKX4BD8UcevKDRWWgYswcSoE4b9ze9aDgiYt6FUv3qscuSRKRHhLUSe",
  "key24": "2YhqSsLnWenq6VHXeAdKHds5pic6qBLpoe6b8g55Vgrqea16PZ2pcepkWtrT8mbHjuuFbedxy9MMYjTXyxD6exjC",
  "key25": "5JAEgf1yimgLdhP9fk93iq5iKUF8fRZR9SNjcjGtxYoBYTaicSwgik7tWYQBRmZW5rcBTjG3WxGEC1N2QDrqsTe",
  "key26": "2KFtu7bQQjhS8HC3NGJg1hfwK8Fxf24aJMgfM7zRP6TJ1MhKxC2f5MkpTKuGERBsPMBqMZuzE3izcMP3VFsy3XYD",
  "key27": "4ivgqMBZxG4PG8KgY5JNNFg5bfLceHfQWN6Ve32GtPmLvBqPT2BwMsXeBkdgMM79YK7vHxbUdouxp85bme9QXyUU",
  "key28": "4aqBkz7Jjwh3AFnpZnTi4AscPvEm6HfuJ73Mg7cCD6h3aLWbJWXeQqpiuoFxuLwhnXdW4dtMQH2CkriZuLsPnDrZ",
  "key29": "3fqj486Kkbi1ixr7QWHDyWndG8Dauk7yv8Nknw8Br6WSpcnUitKZQXjm9CL63Lq1ydx13wNzcRoDy89prAjhbqPW",
  "key30": "4C9sqxATXmDAsxNo83hghG7jY9zafBXS42tqW2FmLVyTs8HvhPxoJXKVJ4dJE6XW5ysFhpLNPh26pVQcM9trqenF",
  "key31": "4wekJ2QrPNhZmLjwngRS8uoRnmUCtb5sJ2zeL92cwo9XeCVdq3Ci3hVK6uwrFSwKn7N6riSiMSixXqZsxLgB6C2T",
  "key32": "AuSa7BzqX7vehXEmuT9h62ASYfHt5oJCQsuUuexBZ83CVzVyDNRQZ3gaAudaoAeng2QGmbMp9JRD4ytuC4RD4q7",
  "key33": "48XQrAMgpo7ePRHHDSmXeN7Gz3QjivVmCUhkB6jpg5V3DxdFrXvHw7hKExwStYKVzWvxFvKgM7qQhY2gRpWaDmgP",
  "key34": "5diFyANtcn1v8LSQrQXvp5jeVtrUWzE9DJYxoyDAztryYtpHTzXwWZ2v2wi7x8x7EPTbJVujuqq5QXQT3rEhvFuq",
  "key35": "2Me3opJLYWmZiMb8o5yh35CW7fYK4JyLaQNumWbFe9VXot9jSboRG62bxAx1pJKAhFgUTxyb3uCzkuiVm3Tiywnf",
  "key36": "5r4D3M7FghUjHoRZ3PQNDpELE6jjb5jrUbbKj6w8bmosgdwhrWPxjzPiU6Ap8YbNjHJVr6nTLJH3n4FsQUEdhAZ2",
  "key37": "2rKynGYJW95caKcZNj6JK8tyGagVgYDJSakJiMbZjU78adKfoUPsN4gwR8Q4Uk8HDc78BcyjDDanAQEr6JPZpRcP",
  "key38": "5EYw9fwHbLVao8ijLWUs2bJyKbKSXFkkQ9htX8HBae2dujKXpFYMUNwUcj8djeVM3vsrbiqTpPQ6NksrzEKu8pAW",
  "key39": "4zT6VEhutuhbMvyJbJSaYJUw2xc5EeYKjmbiYBYNHXoHoC8rLoG3TRbEv3shetEAp2VcS2bHqUb4xUxQQeH2XQcN",
  "key40": "63ZJTcMRfTjFWNpqdGeFEjY2N4L6MWGnd1RggaNaGXNkzpfxeQpqCAJr1VwWq1fkHehm5YB4Rz4mYM61LLZ2rzR7",
  "key41": "3wi418rLzWE24sVmY7eacA3fXLRcapbGNi3iHU5LKDSy9Qp4rdGv9RwPjPSd2m6pJvhEHyGSG3e728VQGAUHjSdY",
  "key42": "qZ6D8JL9S7X8iACUxxugmUp1w6NU32mLswFZnJi2GjMz1PG3GoEtfJ9jkoqWLpi6T1hQWwt66fcvtbqFW1CprRM",
  "key43": "ZH2KyBCLMKx5P2PKCXoPxtWC9JDraQyT2AygYythV8dua9XeWZFmv8LjJn6nggMVjVsUaXo1sE2JmzP5qkxhBpG",
  "key44": "TRN7eUfkY2dF9xG4KPdK183PefxmSASkTubk1E9CPBvwY7Ne9pNFUxCCgK9UYDkS4JAMHRqpXNbPF1e9Kc8h1kg",
  "key45": "2WPwWd7VLibYcRZpupKxcRyySLu3bLqJ4Y3GzgnScQaYdquWdiGW5TYcRxwNhj6iVUVupSNPG65nEsuYtZxjE5hD",
  "key46": "23t474k8Kb9EP7KqXHkH9GdxQakyjULQvveQZgFEB4KNHdoK71ahEZnmYJzrLFs6g88WLpP2Wmy2kxHjS6fmk72G",
  "key47": "2gh9ix5D2ZpaVFYJrw1R7vUMsVradLG9KPLLCvaNTbtcuZ2VNQYpsWhBPECg34Xz3DtMyWcVJu9GAMQEZbkrBwsC",
  "key48": "5pFdJdP1mSdA4iH8vecSdmJUbNSyCTbGN9PSwxRMHPZZxnAvcwuC67UbxW3Uheib7FYg9oKjbnvQxdEuwhbKr9Z4"
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
