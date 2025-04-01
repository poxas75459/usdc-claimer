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
    "416WGKxXkAdWzc4oiyfmkGbiokXwbBCcyU1GmezXoZoBqWJcHofeNBZYCDtF8tyxAxpfCqSWDP56hJwDDbk7b3kk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DiuFrgu4QhwkgFguAHzKNjwmucCzLTeiprTJVZGHuaX1MQCJ3zhYqDvp2y9BLPonYvx7EsaiRrkWQKnCVssTGwK",
  "key1": "2jLN2N7XPcVSpzReVevVKpZVyhSKS5ZJFUXcYCnRfzXmAEYdpk1Amn6mSjRjK612AWUj1Z3gZAiaeyH4XGysQBhJ",
  "key2": "3d8zDtzsokJowi9qnJWKCdBmCXBeqKWLyohoJ7v7rSY95CZsrNprSYPK83qni8sjQyY2TWkqTko7MUdUTzxhL33y",
  "key3": "7QG5iDZAqcZXFs89ezq9GMV1xELhY4FNTHMCEUGCPJbi3UFTf1pgoyqpEiMkymkq3iBHQkBvAsMQWf2JR4g9AdW",
  "key4": "YJHdn1yy38BH5WRAjZ8xdrfuSrmXLejz1mZKucRpMRxR579v1bCifW62vFzqyCrJhddxNCBAW3E5PCccFacE4fo",
  "key5": "3Qz9NNxW93uSUxGdVyVbLeAnvxs7EnwhQ7iGuAoYShcP8B66ZeEjYs3EogpAphvqnm4BsYDD8g18zRBkzuc2h4aN",
  "key6": "7DLH4EBoSWz7rcx8TNzfxmSYtcub68EbU6jM4PKgqkBAe4SKeEa7KxXXK2XSBJdwRCEXPzbz7CGQMMUAc9zMnzd",
  "key7": "3VsmgqaKQFFTB1PmzRn2DzQRNnzvwjRiGYeBrbGGZtL83nakdCeRHpNCtB4BYfUXGoisHq9fZaktmXFFtfdmRiTQ",
  "key8": "3mzibhwMefhuNZKRZYi4w7jDZvJU8MLS8rW1sLnBxhXGx39V5ESY9pGTwWdqceU4RujuDxv6ikqj9cmcHn7YFBLz",
  "key9": "4x7w5U6Paw9KtCXvEE9whuGju2Nzr18aPKGSs6jgi8M8kNZWGj1TwvdLiAdFYjBvKPsr6rxu3YpKNyE63UVqxyLx",
  "key10": "n86qcD6uPKUb6sPJC9Grr6A9N4VLdfJotXdRrEgzsrkLvCrZWwdCuPvf565p62RPuib1RvJKKKq1MCYMinZgP5Q",
  "key11": "4MqePc2VBeX1dpd1r33EJ6rJyXAM9gmheU2uKB9zpYQtd73uNcs8ATV6ir24Pw6omz2qMLRR5GrFNgUWQMCUZnUy",
  "key12": "4yMj3Gv9FCn5eYKJYdKCBHvSM2vRUEBhrNPFD2JNmDkwiKvCDRg72Qsa1hx7rDWeuTPBuPZSVVuk5UCZETtuYReB",
  "key13": "3G1M6tZEvgJjjxAt6UAmTbcobsiuhXJNNfbjxSodVdiiVQwKJai6PAiQr5a39cdpKSjfePVm2tU1kHYHYBZUve3k",
  "key14": "5oHoKdfGozUM1buRJCkMC4icUVmcX8xFXGRV8kPC7L4SL5RKN2hwGdSetqm2vXP1Y8yi5KDA5dVWTaht4Wj5BhHr",
  "key15": "2yUPeafJ2br7qRurqeoUCrUFh82yJfCSvtKBt4h7fJqKp24RFMwELKctsSrSA5xcKDF33mqW9VeiUtXqbuM3dVyc",
  "key16": "2rWZjcdGgtAWSauyC4K8rZZZcFgbjo3qHgnsL3KbqgGKpR8YtdvTAeRbKRZ1mXuWojBfkPMftAyKgSiYUVyvpMsU",
  "key17": "2HToVorzJhYQW6jYoDET9cLsKVbW1uzTAm1diQRQMgpDA2uv9HeQQhq4YnYrG2doV5gYRXhnu2eSJNp8ZJPzVxHf",
  "key18": "3E7WogoYBo381r6WkG4txZfYymmHnuDWuWjA49XGgMnRkBuHGKbAaALajXBL5sWKQ1JZHo8tp8Qx6AwJAzTNpKnP",
  "key19": "37VBKhkAhJQTSFCUeLHfm6ZCXHL85WijRoGsYx26a8k8EAg6DMtGr7mb5bAtCDoWXS4Ss9mzQAChzy4ffpPcNyPd",
  "key20": "5AoxjqJG5cHBz3WvGKRVAYo3cFuh2gE2Es44kcXsXhcGqfJZirzahv2ykFUwwzrABgzsM5FqkwJaUbqaPgPaoK3N",
  "key21": "4Rmmkq6FrHWosFPXxYo7pB6MiQ4pkqV8soGcHgQ5vNXfuZR4ZstpF9XgdCovPTrbEAQrbKbFk2yn3WKUBtFgv2wi",
  "key22": "sXwhE6gUp3bDwzQ5GSSWPaRRBEp5mMDNd9httojWT7JG97zJgpeskJu2JQAUSJtJBeqiYHrYzJDBnPsbsrB7qqF",
  "key23": "UvPY2VdiAvGFxExGKd5EZcSbUHrDWr9dh2uXk7qywr9W2xSjH1h1AjQaiTQt8YSuN9trYoG6nhVAFXpo5YnpxQe",
  "key24": "2RyxZ3VLu6BcyJt1wVv33KfeGMNsTQPf2NUBnh2sKTYLVAPdZ176pamrJszKrs7B4MAkJAfTmFHtE1FvtdJ1sBkR",
  "key25": "3eRdWfrGSkKnrcz2BYkyAxnmS4n5wyofNKUuib4mzanr3xdSTDJiqAFaTYsLJ5Kq4GbC1KpMFpmghUSuQmSUaGKe",
  "key26": "25RwDxJxReQtF6dMZjk5kk7BTVUpFDTVAsw9jVxJjDrMiyxyMmAu2imXm1iV3Qa9jxq2PCjAwk25SJ1jegA6VF6T",
  "key27": "mEPznEf6StyXSq6Cj1urmxW5bEoXVpZYsKfqft4Z2YfKSUdP11c45mGtmF1pwUedzpeSXYSLwUC6cdCq8aZTymU",
  "key28": "2PMz7CSMSfbTsjYRzSmetWjreTuAsboPmgxSRugTYzDBMi4rbUWtK7E8KLJGXJYWHo5N6RTb6spLkni1gB9A2Di7",
  "key29": "htocMXLBNNMk7aXywSWKS55ezwWa7zioJj6neiocukuTuTQmjtX9xuNKh7wJ6tPCDA8B961gPxZEb7BCXENBxzp",
  "key30": "65mn1Apcx4Mk3WXnFQ3zd46Xf1WQPgxgt7Thix8EtpeZciu24VK2Y9ifX4AXfJJETd9Y8civpNhXHr6Y9hPWoXEa",
  "key31": "29w85YvHWfh683mvC2vcd27ZULncfce2QYbMXPwF5rYhoCjqro2EMBjkSKfsEmsXBrstBPEK3qK3psbDcxY4XnYF",
  "key32": "5ucLYvHjrTsWchnDTNXgZHgYA4Zx8XgBVrRSoH5JL9nWNndKXjVds31GnHtEsxn9zRa1EdXPb7hPXiESfMD8ZjsV",
  "key33": "4W3LRg49QSKh1tBwkezkJBWyAyRFNuBa6RQPzcM1GpUHPzMGtzLQAHeMFatTWobJaCirFzoHR6xoM6vNtXGwxrgp",
  "key34": "3iLvM5vrjzZpnZkqNzdUUYkaJCBmc3wZZHprshAT9goaM6f17hBfgxGWWKjtN6ENBjyuW5yx3oxBp8rCcRdU19By",
  "key35": "To4CSVyHYsxQP7XfVnE8qoN6dryXJ9hiJStCkef4phMyCw6UsjoxaXPq6se2CvLnEjy8EY68rasfbwwhiMti8vc",
  "key36": "5Bx7yK18Uf2PpDBUQzEmQ1A6faXTgZL7YFmhugeJEZ5QN9gKxBRjSvNaeNxhFTwWmjHYr22cvF3H9GHciGYREywX",
  "key37": "3V4HwGFZJnpCarTreAGxtb4C4JfDz4FFhhfEswLsmg8p6JrWYJvqvKzyf9giX9cyE7D3A5ZPbefD2R4Xs5pnj3eJ",
  "key38": "2cqobkiVWgpWrN63Ux7RgH2STK9AaYtdGbB4FJKkb31ucFbZuARo8dA1Exo7A9JMsGrND1NcqBZUZcoxZuwGnNNM",
  "key39": "RdizwPZvczE7gj7qXdA8MU2GHV3WC8JoSP2dnFTwcm8uMNuW24A2v5PZA2XTDjmQEeX3UyjvS8CGmNDYJsxWxx8",
  "key40": "Vq2RxJaPnf6Ft8pw6iGFPX9YSeQLUHD7u68Feo9uPWr3vCHfWuT9rAi1Lf7fwdiY1kCVQsi5StcNrBBqAMPRDLf",
  "key41": "3Txv1tgDznNta1VLGu8MoCddnRKFHwPydhT636mSd9U7HsvQ7S7rj5E56wfMjmJBfU7VHZw2oHNHbQMeRV49tETt"
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
