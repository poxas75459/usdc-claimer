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
    "4MfGh9xYTL3FW6vEwt2agBh4ndJNLtXnaV6GjCSBdYpYkwJzfU4692bdYmNdf5hZnXhJ4PRES5PmDtEw67E6VN9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tE4r9k5WHBkZpRWyGXVkdXEjAQSipcrV3VH1FjmYsThUmF5keKdyBFCJ8N7UDDMf9qcQt9XP3UAUCg9vuatQh1r",
  "key1": "oxEiFag22sJZTqGkzup9kaoGCkqNn8vw5LHSu4yYLMVsDa4wAKirJYpZqdsnAmNnBy3kBrg9Nn7iLRWgsWRxNhY",
  "key2": "3pjHdxCCLSF7584MaxaNTj3K6dNZbHSj6FkLXyArPUs9YiDtFJaz43MNzza1LyCEJQfzWkLPh7KGswbrw7qFL2Un",
  "key3": "2Ae2f1nN8E9GPuZxav4PzHt7aTejhbvpb5yWfFig59YDP2RqdMTjULhwfdCpaTjt16hyWwp8KHQhMJBn3hKQc7KT",
  "key4": "2erCuXcUw1293anzNyvGm9oCCQVcAeEvJYTpQJWHGhzQDg7o6Fyem4iHMuRfziSjsgnEBRQH3AKnEvSBaQxUfBnS",
  "key5": "2uP8WWB2Qtxftx85wYn8YDAdUFAbeqjY7ULPzWgTcpuh6qYjFBkNyuo19VaP8ap8vC4ALSBMbgVzz8FkB9vmqkxJ",
  "key6": "4QGSVNXkpKKZZ8JNY1XLcGzw45bB9UBBehJZGj1bbsyYBZndZqcLXJ3o28Dtrwgd16xhXAJ3XEBc8fcK6QkPK5gV",
  "key7": "ygEK6oEcJxsJUrLVBc6QEV53ExSfp89DN73pNcJZxqKjgVebjwbwiHkGHQBscGxDUmBFvMMaEaW85HZSsRSVBHv",
  "key8": "2KBKN4NATrai8mFnNBYZ88FonuSy6vfktKtzk55pPwn2BsZSg6tm6q5hp1gnsFGXDMVSVvBKmecGw9KTvWzctY6s",
  "key9": "pXBWPYa5sxiKL1dLaP96d2MSvtsCUEQAEMK6S25WogpXv5bua3FPzZkYwTicsey2DQ88pXuQJ39aFUrEj8LXA98",
  "key10": "5qybxhUVCwv7rQp4t6J1t6iq8Ycfk4u775TJ5ERYF7piJpRXKnurUHowfWn7dhJGUdBRSgSFPgZzPgH3QmntDv42",
  "key11": "3ZB6LfDeqhLLgAqWx9WDtv1fRQgwhcqfZzHALZkY6neAGevtXDK3asNrqipzQSfTtVdaQ2JEeu4HjSXvzvrGY1Nn",
  "key12": "5jVZzaXrYWyUW36oMz4tgrwn75mHEczhP6ezZ6KEYEZFM32ywUt4oD2uGkxEmTr2qBHJd167xN2E5pggPKmocG4v",
  "key13": "4YgqgjUcPd7zyZN2kLQcXWpwNDY1dib1mumgQBSEdJicCWqAb2KnD1bn4irwqPPBDXvtm7MFUeZUj1tjGebS6cWK",
  "key14": "2uaHtVEzTugQwKnj94pUSqgAq2NC2rR56Nv1H1dcyr6ni3gYTsHduZuHKareCv48vRkG3L1mTHAZiojz4ReBuaa9",
  "key15": "5mpWNESST6KNtUh6fYiJtE7J46k928Rvqtd4PzqqQb2u2qSqtzUdN2ceMkXN2McnMRMoms2LtKZjaWwnr23fx3SA",
  "key16": "5ePbHHP7yJ8csxSDek1WvyoYGL8QcpumnfMtGWiTqbJATzdh97UwnzyePTFBmwUyeDZSFy1CAT7rUpMgF9uvvu28",
  "key17": "4DDq2mFfUr5KG9JWW1gCnHsHZohnv94L8iQCpCB6jiqvJ93aiav1vUKG1LMVTjR7ueaJF59sBzcHS3foeZt9wFPh",
  "key18": "2Hr5iDjk4xTrBFrvsbvm4DHqQ2k35EzSDHqG9QzAJef5aQwphMwBmZSyvLH8WaSQhYQwWGNd8q9A4LbXazhuvbaT",
  "key19": "34RDbhMWqA5R1vh2rTLErYKVK3jLX8r3sbRr4kdbE9VAaz71gMuqmcuWfgBnwW22yhHuCbv5LytSdJLRxcPujtG",
  "key20": "48fNv8QiBXSLXLTMbJPqq1WiZMxQmJHxkmSthyUS3UXAuqdXAerbrxjkAtJP7hDh9eBK92gKSy9Zd44K2kKCiJ6J",
  "key21": "ZkX691SesLAwSEx4NUWWBLCApdsMChrvwpv9VQabBacGdPgtuTeQ4QfYZqNqnSTz1CS3TKEkvJLokWfKsgSrohy",
  "key22": "4eccPnX6EfhiVF2sjfLbZSBmSGrE5hsmgdjzF6wVDyAkY4QPXCVeRqGWjwLu6igj9UDew95uhYnMQmf4uXqyTonk",
  "key23": "2QWcKxEwQdAiF1diFeu2E2dfs9HfyaCnM6KKfu5LkBzkGDBHXPvHLnDfqAHGEkK3mMVpdgGo54Qy9KLcuQDA4i1f",
  "key24": "3QjopwesYtgV7zL18GefY3n8URxioPC7dA4rL4WuQtpoNQAVM8FwzgdtMg5vPCTY7UAajmjpo8VNc8uuRZ9tYHVC",
  "key25": "62guuobh1MEtG5qYPp8BSHTtpSAMFrcJLHP6fFXFbaaac9py1U4fZufUupLVStHrryy7rZFbJispNNJj1sZrhNgu",
  "key26": "3JKaRBLQ1vrng7BtM1zrb5uBkCwe1f5GBoDAgz5guH1FTvwDeYGArUQQtbJS1khjmp6jxBie6zGo9FqXhBgnHSCX",
  "key27": "2MvCbFrQUvyhJsc8SzUn5MSjjFnqYJMwKU5GBkb5td4UrrT2QEPDhTkAQ3KGtgH4efs2KBAyU8zxfkPuGQoJjAcr",
  "key28": "2oeZezJoJjhrAqr13pZGw6q4m3Aa1APMENoatUrbaxuEXJebr88dFrbiNDjNUUMBbbg2GWoBQ4TPYLjS7uoPfoip",
  "key29": "63U2X2u5aTeFSMVEFZNxpi1VvjK52bX8TtrHZ8yhmEYn4wjLWBzzPTCSx6R6PiDJHezhGiquKfaXrKXrdg7LJRGD",
  "key30": "5TRQiH2JZeQM5NGcdsFpUja8Ru1X61M7ZzE3e9aGmE6NzU3hgpYoPRSt3saQHj1aQRBwP7kt88FyLoMQFp9jSRYu",
  "key31": "z3sKeLWSJScbKNRAJKng3r7iEBuWJqsLieskkmHYvK6iGo2K1NtQch2b3nTwkHPPc6GCkSWJXyP8uoDrJCrEaeW",
  "key32": "4jiFzG7hiX24sW4Wb8fXGcYogtgB7p3E1kphyGzSivBXDZZu3w6x2prUh9tkLQPeZBMWVGTtaPSZqPcP4G9rEAJm",
  "key33": "4oqZpoSrtt2VdynFH7c7K7nCFCucewDhSvoMdDyTM8kqeGPwXZY5ZcWX2E7QcRJQR5PFzwgvNkxRD5kfcGTkirzt",
  "key34": "6xNQR7qupfdRiHCNYKGNkUTinCoXuEi9dzpLwGyLyebCPa5b9gjPJvAnquUuce5oa3VFbEcBJWzHAFvN8aUNkcn",
  "key35": "4UeC68CdRhUqA2gLD72ToYGcM5mn4iCzPYTBKLmGrUj1MgunhCVsLDuMo6dgmP4nMApoiARaoKPttjW5CghviJ1f",
  "key36": "4BpMBq4V4UbAQE35kcoL6YA1u5X1Ufw6toAXvFGurHHtfbWXfjhPjew237E1NohagsSADxacUgVbs1SS3giBYnfp",
  "key37": "5kBPRvJ6AoYFVtXGyt6PmNgMrnNRrdGFm8uKxTEwAizdAx7cKkoiugFVe328jsZJeeWTiYeeuAzAAvQgTiLV1b9w"
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
