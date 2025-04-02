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
    "4UXFsviNdcnKeLcfJyxUaZsD5SBmhUZdvotFgbXC6859uoD5VJP81s8yZZy1n4orvGroi3EtCGmknzAv4BpNdePZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eWpgTuWSePyEW9aVovLCDfyetMYus8NgZukdrUcGJE6Ee3aSnuUWSW1r39KHquer15A4fCLUsDEpZkjCLMLzjsv",
  "key1": "2MbxuZmtXsWTTQohAAAogwVxHeUvX7RX52TPHsQuqPAn8VoCz3dLkpZnYBX3Eg6imQkTstQ6q8k11Dk6D6XTjCbu",
  "key2": "2s9Uw7NVksDw9bdny55YEeUhw7ShAaehqFgpfkU7uvp8oZTCYgKT7PC1d9SPKZBZsLQxRXVQmWawJPSCE2y2C1pN",
  "key3": "2mfpUHyURDbCc1xhwBUyGgE6nBVA77Zamh362MgcMwoaAtASPjAQDa1t98bBmGqyBH6MtjoWcwr8Ef9rmEanw9pr",
  "key4": "5sev8N1oMpag68d1GRJMAG18E4KK9Zmj3wfGus8P1MSF7MiRnSaPdKHpQNWULhHDMtS29Ub9y6wfRqpZknfEw623",
  "key5": "3i7nY6wkXs7PrgwJfe6hzEf2cDCMW7zYFHucDGcHJVcgXZexAfdvRPX1Ze1cXrt39zqkmVjwDyYrjfoYxRUdd5zU",
  "key6": "cHNW2rpYp5aFffXz7JZrDYWfEFpuLZn6GgZvUYNBi9UDbSmYg83q5YGdTmSuogHJsS1nLiZ9DTYKJvvZqiJGLub",
  "key7": "5dFaqJQjZrAqzxAUpAscq4hbjPPbLmDkyj8Nau4n3L4PzRcypGXmWcfim5hhN9moQ1yXCa5NjEipp115jmx4FkHg",
  "key8": "v1mUV1vufuqomXrcsUNQGVZK4RVG1TpVhvqdPaFrM4b8Hcxes6XJeho86hAqQxTz3Hkn9KgAJE9fQhSv1tVbFbw",
  "key9": "49KHzQpsMKrzphgSNPFmHE6tNMHum4mAeKTdD2qFca6sMdv6WkLNwBkqADUwPt2Y2uNv5q44EFqG7fqe9fbqBZeT",
  "key10": "LMJ3fFH3e296gLDtyA4zCRJBELnWiv8ZAmbZjFt4DdSWhULij3ECg64BNG8biBB5iLqzstwwG1bhqgGxmm5JxfB",
  "key11": "269zpHed5xsb5KaE8R49xNqDb7jERUreXPz6JL95r3WRmuB5Sd6K9g68qbWZP1ova1u3cJcfeVXtmydnsWQf8zst",
  "key12": "4CmLNtWjsV1vtHwtW2i18Ei25ddWVwa9S2LnCfWnqeRa8AsVNPUKW3FZhp9LaBugx3dVAYUUj1NmThbjh97FM3oT",
  "key13": "4pp9CFqpc3zyf8Wnbpt6ntGnwe8fir2vvritcut5RydBgeh3Uq5UFVsjLdDbnqBiyt9VX5tGHUYKvvZ8CS1X2nQ4",
  "key14": "3oh3pumvzJPRorFy7MWdCZMjfxLxJFmQECLCnXsPYrWLQG88JHQSzWv8KZ9ufTjuKCK1vNancoZW3H93Z666P3vE",
  "key15": "3ff6KUWYAKvSnipxf11wZUUREvEs28R1mE6LK5uS7oeNUAP8ebQJ8WpqhCRYfbZtF5gyhCR6jbZcw9z8mNTUEdXR",
  "key16": "2JwLk1CJeGa3jfrKhvUz54aXqzHjtMy4gbvczRHCXUeQHkj1q85jRPhkbHttz5ThHsoac3awZfhMvUcLxE4TUvFz",
  "key17": "5XrtTrPrhCiEXPT1NC28yN6HmqgqMe1xmsHqh6yERPGHMPGGBThCEXUR3C3c8YgXfpHwxmRLoeCqkHwFkbYp3mxM",
  "key18": "5K4r6uQDNcFcmYKN8Xzs4ytwdqLBFQAdqRNpkL1DSr7QduwEPR9uDoJ7GgwAkjGi6Kq4oNDhihhkwJ29GwEbuXb1",
  "key19": "LuHk9xcaxR1tBaSAYqN6Qifs1KN1tuPQKE34FBucgJcynLDW4RLC9YvzVoXCn98N1vFhPsUDQYcxv6CBuNRcoSL",
  "key20": "2nnacjfcDDYJdJvGn169AawA6sYDX7izrEVddAhxy3747RyhKRCMFgfKGkAy3Tu6r6JTP3CRnPXKFWVEPgcMPAfB",
  "key21": "5zVmPqXnu54uBpeGBte3adtLc6UuJZ9UXMsPVVXtAgepjxQ8m2Y9Gz6kb9nADKsjoVseiAPe86j2tBJBanLLgmjV",
  "key22": "3KmCTdfDy6dXkLFc4Z8tsuGgKiFvEjMGXr9XZbcF5SJcuPV5JoshQY3UTJihFa4L4MCba64EFyS8eY4wJDV5pWN6",
  "key23": "5Hz2AkBKTFYHzvVphaYVKyRSsnWve7iebAN8MY4dMseNBRvqAqcE2HaBFi4NheumnRRRJSWpxv8rxUnUDdLXcW6c",
  "key24": "2jM5E99dZqbNZApoPxYpvfWwZ4SsKThuEsj8nad3947375b4EPqPeK9tQv2imVDsMLoG1aESDYeeTePGBsMzj75",
  "key25": "UFvR5QbGR5hXMiHedCH6eF8FkLKWt6D9CvepTSuRKmTinCjqS6T7QwZ6HDN9EY3niRTsRWV7fBfatQ9FtfjZBsT",
  "key26": "2hzfmrPmCBnuXZfH8KxcfHDZyBx9GMHLb7L6pmrCpPwR1u2RKXRWaZ7FRsksR6YjtehZLqTAtd78CxW7h4RwyTYw",
  "key27": "2KTJFuJQxhzCcGhyb9myEyrTHPjxQDMtZir3QtaZDH9Eu4g1npiJWeSQVHXDTxGxDEKpgHLoM6dngn1vPyaMKWzC",
  "key28": "25xHLQJvSbNxpy7oYqgn1Bm9xaGHkxWxUaBJMswZQUnyDqzv1k4nKqqswiZNQoBccm3BCc4pM6SnxdcAA7nLadqQ",
  "key29": "5jS8Loeytpqc84gYosCyyyaJqrfvVfghDEGR9FJAFbALiYJuHWhXjiU5NHcW2jcCwZbZXXLGEkietN8rqZFNHqPt",
  "key30": "LS3fc7JdsjQeA9rUHBJzYkZwZ7jq2KAStJQqtYj2BT41CtjqaMiEa3kf83YwWLMsRyjbZmFTgZfiNgnpgJxgMuj",
  "key31": "3r1ngeTDhc7cBLNP7A2ssDBDYDD21r6YAZjcBocFPYNXo9LKeVAeamzkopxKQpgVDQc79grTTXJ62fc1NkeuAAqf",
  "key32": "j9VLtJrXLQPa9uT7AaV5MPYxXgUKEpkUvtSY6GTcT4uDcT9ZAjArsvGfmaGgKFU1mQLxVLqrnmEKRBGT2AayQNX"
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
