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
    "3ccFDGodogKJuejqTtDYWzNDWvnXh6oRyeVYTqpJJ6fRyZBoHH5AYzxsvxy4j56mum3TBZyNugustojGFH4bdruf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XhN9ewUr564YkPR3nGFta3wucJvaiTET1r6cWEpxbvwp82UinSqM4ixrjtmXeU1U524ou2Jhju7b5n1wK59dhpV",
  "key1": "2BRvXQ6mWZe9EiM4qy7m4b9KTEfT5pwZYkDf1tzPfJQV8fvimdFQMFgGer42moXgkkXbKCYKgNNi4MTDk5BRhm8E",
  "key2": "3i6J4YzQY5UjENqsuEzVk3nvFQgbgUzSDQ3fKCeKiZ5j5tDyvwZehSmPuxzhA1SyihzomEHCCZmxLiCAdm7zgCrV",
  "key3": "5MYyDgBmF9abWroZg4t7ke5SrzkV2j1oYPU2XMwtdapWPsSWdSSAvGx98WepNet5nNCpY8GjMW6RqvCmrgWbZgUx",
  "key4": "3T1Lide4ucqEaeCEfpfxp4p6TebMXy9Zq2er8ktruNmT7JoBx58UEBVpWQyATDGkKEscV67Zm2WjpRXFL5q7KoKi",
  "key5": "4vqnoUrGgc6XRvJuVismMn6BaEPSg5ms3Axh8wUpLjW9t87pmQeXCmjWWvKfBRp65gdeRacKhpDKHBoB8SEWtRem",
  "key6": "5hCzuU7A9g7cwUbdRYj2vwJu7gkmScwYFT2ndDzsqWq1fYmUZ58YijC6a2F9gtbds426Whq1EkNJGQUTjLWmMZ7f",
  "key7": "3nkDhAPV1JznnxKnU6iCwAJ32CDPSf1DoeefSNTnnBBjnfRHQZL7aQx3BvsrvjtzYiCHfpm2BZgYJ3xWaEmqmi9Y",
  "key8": "4bnxdgYge2EHD4NtUSGoA3CYGBNL8214ZVvrbPYdVZzFyWj2Mg4ixFPynrHiZYcqqNXeh3ZCNtZwBW5P1sX1KviV",
  "key9": "3UtzuAn6j6vjUJc8hd997BfxTSyP8TykiAmMfH8XQ8eTX1wS3TYQUtK85KAHx5xTUCzeBYVfDNUqnpsxMkK5fHyc",
  "key10": "pjVu5drMDpRyNhShRGxjJiSzR3i22iGyuMVmEfX3KpUMdLoLGviyXExHLoYtZ2dBLG5FvnRJeyd85dYf9v6PPE9",
  "key11": "4y9DJdtEUQF99w3Hj121TAf2yYhmKFYoCA8ZmWAtj9xRWf4d8vJEGVFHobZmRuQHwN82yZbdgZ4pxgfUyMSVUA1o",
  "key12": "3g3HsahVqHPm7EVBfeTBnwGuYq8nY3AysakKNQp7ekqboRThUEoBapnEjao3t6ZdFkmZYE9Zg4bK7JoDtaHxJnuF",
  "key13": "468YBEPyvs1fB9oYCaU5h71uXYs2QMiAqYKvRDEgUqZpTTKB5LNpNH2Fg5Jndq1Hkq3mG6uSZP8PDvAzJCwPjgY1",
  "key14": "vC4pQeDtwDgcGEykFBKCDSvzDu3cSxjPKBSEngshyjnAFawHEuy9egGygAEbsSqrbV7cZGRVEgsgnZxee4tKFjs",
  "key15": "3WXiJtwuYx6hUgz6ogLa2GYyoUyJV2WPuDEbJaS6D8DxZYwq13Jv7JenRpuui4GmvPHyHbnseqbDB7pmR5YKGDiv",
  "key16": "2zVrvGS2b1Y4wCDisDtgrYPiqJegBbyBfFkBQgagHi1evd2oTM88BAH4kFJUjyG7o9r8gekDuPeLBanEgEyxD6yb",
  "key17": "4Su2pMt1q4eMFgiuWU1vcS8yvp2kWbnBgwjmZqY7Gz5gtt48tntREnZcazCPqXuAM2VFLfsfn1kX5Mnoq3UmD3k2",
  "key18": "5WGqKPGXXqMWLUkffWy2Hiz8AJLCynB9D4e6hR4HQ5vhRF7MXeub5NAvysshyKSfh8ZqtfZaEoZuWdZzYXtQYFpg",
  "key19": "4fHTTanxEpTpS8TkRfKFudumXshmLjLW3QRCQmHAkg3rwBU4TXnHsnQvcdLWemxEuVzcqbuPQriNQaQg7YSBY5j9",
  "key20": "5B5pD9cVyfc2vHBsAAr6CNzMqbD9wRq9MBBKJjpoCLmjhCTPKcHCJYBVx7y9BXSoNQKYt1a47oX3AzDnD4rLbcqV",
  "key21": "5gMag6jGXCND1YrZSJWur489t4XwacZL4GUibUuAeXGj39gtfu5yuQvjenzQNyo8qGTPmM3FfSqPLvvpmXF85jVg",
  "key22": "5ycL2CN8w4QRu6WJh7jVBJWAxbmM2eNQeRw4yLhCvDXhKc1UBCoUrwAPUEPoPoBfJW7GmNAhmzi1Z6KTem8xpqUf",
  "key23": "52WDbDkXJNTpMPhAZfUN7K2qDSkUWKCpLoAKdcvWuhoa26ue9EkVGjxpkTpo5CrvoBKNdGN8urdTAEA8VjPuAAZ1",
  "key24": "3gnKFzedBHrBnkvEim7qtg1QpeDcsdbaMwWddaw8VXiNzqNeAsAs2vthdNEY1q8EgxvCW4BrbFdRqFhcyJtptWGd",
  "key25": "4oMUTtAedLQJb68Pd4J1pGLNwMUfiwwHTex4DUBNufDtwSVyQ5YjEDcXLn9RHKKVj7EgdPPrpLVZfKFoRFdwYxcc",
  "key26": "2eatuUwsjageaLuoiQK2vRr3AnqwWM54mjWYveVJ9M7btjT5zGKND79zXNkzUYYuLt7UvdF7j35Q7yABkPWM1iVf",
  "key27": "5qJZNczZJsoQmNSxatygEnMnrSxATxH3LkrwGPCE2inTGjEQM8HTFzNmW2XFjMnkKMLLRomuQ3Mgd1UkX6xFbE8K",
  "key28": "2LPzkTyZFEFN52hKfNQNws3L8matRiNDzpwwrsnK5xo29uDUshHRTpWtXLN9wL1S83SicqchzT9sbxhYycEZzjTt",
  "key29": "47KBopy8Aq4ocTVG2m2FdVPndaQPtxbAnVkSLtiZDioQnoGQrWYGvBxUetfMRcYRTsnD7m3ppJbAq1j8evJS7XBa",
  "key30": "28U7wvH1sK3qiqVKKLj8odXX7CFRBx97fsdK4xy4yvqGNnsCvfKNhw5oTxQQitYVUtjppmUSHeJHhKYRJN8R27KJ",
  "key31": "GfYtWbJfjS8qkp1DZeHJkcHVkiuCe1suwAJceCiXwf22ChHGBeQP5Sfu3wMRf6wfnTnruhR7wfqwR6f8JeTAvBG",
  "key32": "2w4vT3DS75eoe2v4q3YSQ59CUwGxcRu3jPsapTabjHjHL95eMXEBbC8ucm2UA5ZDutoYP68JowVxpYPk4XLzwzCJ",
  "key33": "2nFdCVwr5bSmqFkxwDsHuB57xFdN8WopjhFyWhRwVnZ2m5ms6qmnLFf5TvQoWtd19CspSvHhMurSC3TVVJahf2NM",
  "key34": "MY9uGNEAGLTCHZnyPxpDVUzSfQryabPhkHmFf4dJ6aZwfzni5LwarMXwMKbwr2BTuGV5y2TjiTiaiPaZV144B5T"
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
