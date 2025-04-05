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
    "5MQTchHnfn6YMtYJDNYp6agT4ME92zdvD846hrmtbMNWox7bFjQspyVk1aWacs4rXsi2Y93B2dk6DSjBBjDKiQxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25jzz15axEfHQrYPo8gVQEUjgRJvryTKRrN8QMTawP7mYoFG8ZHSuzaMnzpTUFD6oNBqJjv2zxfMe5xYP3YJ4ZsQ",
  "key1": "67f3KpxGG5cp75u9ViNMCaoV1yQBX4W3QywgNjwisgBX9cemk78bBYNh6FykTJpFGq8cXakkfjde8Zk7vpyKcVoW",
  "key2": "3BiPj2LoBjD6h6uwfjDFu2mXdMsf5zdG6naeMRijTkA4PEqoes29HkX5AHtqXSVrxUcgtvdoMfk6DVLTei6Uhzd9",
  "key3": "2Y5ZvH77yx4yTgLhAhrDqgCeida9a7ftEcn9AXWn6DnYVHDQCEBontWw51DcHdNZmU9rsfhDY4TnXzvws7HX4cVT",
  "key4": "xCd6CbEipRsMzj5Ys2YG5ChinfgNBRNBxTUu4FCUX64oQR9UPpuFkrTQ9QBV83v2rnJNTHGXHFuRNHVzXk7spJS",
  "key5": "emQLSDhZP2zJmRU1JCcfzCKu4Difbziuh2rH5xowhCBt1DeKsMACacTYF4Ukc5rSTZKjB78VH9rZAE1wpNbtGzs",
  "key6": "43K7wkrN85Afhiwzu6WxGPsacn2w2cRLbbRQMjkCJsoPWVfkMd9QRvC7M647QGagks7kXSzXTpi5vhzQwtkZAQ4q",
  "key7": "319RpqF9uDwwYGnFvE7HSiZPzHWnfAkJEiSKFzStFELTZ5PBWYKxushX8cf8uQL3Fzq7NEQ9D2YtsBNBSi3SJLwd",
  "key8": "5yhtMmA5EXikNWvaTW4i8zvEyucbCDGRxAWUdEh86CrwEW3mKQA4Zcb9mvkQCdwF5jPAyAppA5XJCP4mqZg2u7wT",
  "key9": "BXAC5DsNC7vdDxnbfPqDLrsXBq8o55VkozVt2eZN77vZNz4nEb8qPEENGrXUCwEHqajipUdZVeNEpNetwEoNxo4",
  "key10": "3xCodqnfkMC8R757qurkeQBxARLkEK4ohK249jX5679gfLKR4EwbwyVYrEDBWvPaEoGkjJajaxgAhBY6EuiHpTXy",
  "key11": "5HWfmRmUm7S3mw3EofErJvkCcitSwi9zGXfNj1VSumNM6cRgHJ4JVeJqgN1ZXYUaa9oM5zLJzLgzKAGGHUi13mv6",
  "key12": "3e8TX5T7Qw73ESexY23PFGkMBkxG1fWD84HuuzkN8oU386ANevpVK1wwthLWqs5dBAfhuJF81XgF1KS15oNAXXQX",
  "key13": "3SZUFoHPKuAUxvvJi9qUi8iwHxGMvzfvUUhv5haspRAM4RouBFSX2KM3zeK4h5jFaxQY2pVZiQ6ogTUG6Niyy7ed",
  "key14": "2eSTXB2HDc8QWdAwfSxt1KKJGiuDHxfnpfiYdaDVKhiQV9ACEVbb8thhBGVtgf8BvbyfQvt7taKX9vsbRP2zGqbd",
  "key15": "4mvaHT1aGpbWihNLsmNp43CxYHTECTa6n6Z7CyA83oxKXHUhSDzmKtwfeBTyxPcbJHcbRHpPzQh54pg6GTTee6kX",
  "key16": "5LC7UgAXnWxCcjJg7ETQnqbwZs3R67h7RBSqa3gkSM7R69Aca2rKdoNyTgF4JKwA5vSum8iHtLE17TBvEb5YQDj4",
  "key17": "2qtK9JBxZYkBPoJJpfpTQivWj1aZS9YAv1M6P27q94FpXHR6jpkqJATrt43enzqv54b5L4mRSMbb3qdMkXzetPCP",
  "key18": "x1Uphf8RpHcHMkqnL1M1ZNCJCbBxqbzgdnh9aAfHLWMCbAjjGHxfK2mhr2BFxLjHkk69iyrg2p4kNibotGX7tpo",
  "key19": "5oweiSDa8dYAoTbxsyqz1Nq4brHZYKwfR9NHjDQVXn8EHgXDo7uTeEVNF6z7bHLjtxP82yqRjaVXEWBecVtjcxb4",
  "key20": "5S4vEv74pNJ3zBpGncTCkHk4nJrkFHcooup4ufs3njiBBKKJT6eDZCLGAmA93NAY2Y1D7hnFWcnQhHAFUEbMc7ha",
  "key21": "5cK1t88p7yww48n52YRevEcSkBdAu5zsPLNXw34taWHYrk4vyAB9cT9qta8JCnS5WdKRo1VQ84qCUGDcDDBRR7P7",
  "key22": "2Fxc4dkz5v9BXCM6BTMEsKqgA9zwdNyyyJvBE3M9BE16wPDAGB3s9faTj6UYuSPmmcX6QSryAtL4kd6A7m7CaE87",
  "key23": "3r7spe3KV3BWG3v3Hopb9rWcXNBt6o8WU6Mi3coGXUPENmmLRhvVp63PNPqb8GVyDGaWoh1NT1EGj5zD7m9ctKW5",
  "key24": "3sBkDDhBvkoUXNbW3yESt3gFKv1t2DDnXXMJHQy7AAshcatXQnRrnEChtYgcsLZgTVcYwHiAGwQbAPA9aHAaycQx",
  "key25": "5VtraYxUHXpqq7TpnQL2VcYAQbmG9ijKQA5L8QKUJ7bFDSkrWSRm3tvYw9G9FdE9F1hb3SCgPXHCur2mumKtZ5a2",
  "key26": "3fTKHADQhrvZVtTy7RCtE36G4KLHY8NEQ3QoCnajK7G7Ep7DzBk8sZVwxtCqkDZKPQLL3x2KA8XJ2utqzFTX1Vkh",
  "key27": "2GGRdH3zf7XHdLpfxqfwyxiYrhGsGEYuA8QqCdZ2mvkdHkgEXCWN1UjzPoqzzR9XH5xTi6x5PEsLBZLcqDC7Jcmb",
  "key28": "ypytqjNJ7661NY9eiQz1CmJWgJDpRKJyu1RmBNAzM1njqnjE7eUMYGFE9BZw1w6Mb1iprPc7wggbYoKmuqa1EgJ",
  "key29": "66nVxBdRApiNjLNhh2uXC3MXxSyfPofYrU5J6h9LDAxfKEREfk14rRPoM5ehTdtE9Y15P6GWxJEgS8VsqwuQLvfx",
  "key30": "T2SkKDfbkKjbDUrRPQU8wxuyceEjKv6rxz3nuugoZyQegeMbYNxkbngQC66BX3CcaJUf4CgGCg4Ua4hPRSuFDmp",
  "key31": "3RKwVA18Zg2HYWHCzHpEsGCKbxaUhTdqseZ6mwhu3MtxGK71ENBJagB9wXV7BDyg7HFfL2QKR22b7gJBGFw1GGiS",
  "key32": "3qJUstCaPdN8GrfqDn1MVX8ZASo6nZL9tFdzoGzdDmzJyzv2AgxpT473UEnmx1ZovziDjMzmiitfGRLEJidA3n7z",
  "key33": "45U2Aer7hrzdRUrxjqYqzyCAnQVL1hcSFfb2jheb7n5fWcvDPbcTcjPYacagjuchzg4zWtq99xb9DhBN7S5rRNPb",
  "key34": "sD75FQFfE6P9S5XYFZ5QyuahSVWQL4fbaQkSgo3zkerrdeMs1rYYu7kxdB3g9uSQp3xJyaZmadQ2iL9Re6y1KkM",
  "key35": "5iegUFoc1RE37kyrkW9oZyHPqGoxQ9jVHYPdETh1SgQq3g7zkdW9peiZ6XFUjfENy4PhKoYLG4DTQ2azEZAuQHKj",
  "key36": "2mhnetDqYFALAhQ7ZbpKxpWuWWyCLVKs27eT1oRP8NRnzm5tQoLaMdmXyUe9BUT9ytZitAV65s42T51CLKfnP6je",
  "key37": "3qnHzAkz6gWRBYn2w7TVwvN5MFAL67qvJV4jZSsHUK9AYAvrzRo7y8FF5aN2VMXDSBrbLjo9uJhbPAKwsWuyPiwt",
  "key38": "5i6Tb2bMNtau9f6DGY7jmXyi5KxDGEhTGvLz8oLTN1U7gxcCHJ9URRDG1BHDTVABwu4SpLHUymuEnzr38NMX8eBk",
  "key39": "63TZTgz64StCKgLD7Dayxp35GkZc7vr5EUd8MTvfDbswGxRbsvLwddQzjxaHcLP2nciy6kaFDheddMBWqEn5rECU",
  "key40": "3izzced6Lbp5tWhy9v9wzLx9XoHA9krVyo46HGTjLXwn273TDdsnF3tj6ofvouEq4jBWMJsv8fLh4sEXxhpZsfHp",
  "key41": "3pmQvTxx9VvuW8eNWQehhE46nMsxbAkTBobMrNStDJWzYdLDcx3ih2qpemvJXCxicNMm46fF5LRu5AnJ8gGfYKCi",
  "key42": "22HWEATSf68L7CG6xHm4pfo4C5P5dpc4wVnwZoXiK4RZYcpDGAof8DQzaGkJ32Ftr96gKuEvDQx7gkjTaqM4RGzC",
  "key43": "4o7tLSNwqHwVandfmhe8a5NEsMwe5oMCniX1bhK227VAvFKyvgCmZNUgJuCx9E4rNcR2utSxNmpnqPUXBBADZvih"
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
