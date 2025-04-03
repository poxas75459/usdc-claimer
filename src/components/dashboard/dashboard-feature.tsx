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
    "2n2pcnQMEgqGtr73sUYyKrKQ1Wv5PqG3ADLNN6DCGC9rbzUtsJbzqN9gdngLejAc52poeVQx9zr3ouRco7wRnyYV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2STyYe8P91nntRVaYt63gtRxoaDjW684Dt1tmE85BjGu9dD4wjRpq1s2sUWYjzkDrFde9ww3wUKdmj2z91kcfhDt",
  "key1": "2EpwkrDzV5MUB4gseniCBBuxM8j5ZhcjTAHSqxhKzLVaHFAW3w8odekpaRjYoHkwh2Bb8bk3pi5sr9J9FwbQhv9G",
  "key2": "MDAy5TnykkxXGLZNtk98ZGgYJkNhWuXqFiwDk4H3NVW9vbwzj8ZREBpKfnDKMK61mF1WbWxn8L1XiTBe69ECRQH",
  "key3": "qcGQ6s9bv8BxvFTwhrS5rW6Z11ba42XzUup3zbMLbxTSveFxeSJzGzLunNpMn6KJc2Kepp4ShJkEyibamicbPRQ",
  "key4": "5eWXsBLeDsjszyifFJegE7DXGsJGYTusTSxb74jCD2kNGiicyErhjqGFBin5NpfiEPaUUkEfGMNtDEQf4vK7ndZD",
  "key5": "31bE6KGJq4en6hsW4kYnxf3Geb8xHnfcsEKTZ74b8ch12G5er1j8JRicG6PZKTQkp4cveNJdsy3tGurodGBxQjXS",
  "key6": "4941smWDA5F7f9djshJbDhwt122du9Lkjs3oWmqD3U4mf5ZXCBT7BGLQrtfWFhcfgKy7EDvsdWQSAtcj4EVrtr1U",
  "key7": "Lggsj7BhF2RBFdgTmLwLxJXA7CMY6KxbzuSxbq7aLLUZfc6nTdFCTBJ5uaJTar74kLJBmXwkAgUMSUnDvVNKT5w",
  "key8": "5queUeCKazCabjXVXW5fukGfv7XvXqe1G4ZHuPerJ3qBqkxFWpxS6HWiJbDQBPqs4dqqxtBGgzpbydnCmZjhpuq2",
  "key9": "3b9hMsvbpytBvGuUsrfc6PF9EFzrioMe7D91op6u38618AWDNM9cfiRGvQjBRgDYVWyyqZxFhL3GkWYoahtH4jkN",
  "key10": "2RxAQ9Q2kaBgGVPeCrsKAQ3XW1FU68PYCSna4PuBdWXxdfrPVu1wAa1miUdbi98DPj1FWEwquB3eMn2gxqq5Lcek",
  "key11": "3y8kSjjZxQYS8pnTL4Zt5XtXQ6mS8rQjxjHxexAsUeaj3KiaM9YEP4h5p64yXmMyYRg4uJF334T9oEsrFq83mEx5",
  "key12": "3bZpPH8o8QqS5hG1Q5kRqiyBXmBZtiwJutQ9QwNb8d7Mpg1XkBTp3iuEkgAPx2mErmWLvZFcsWL7hqx7tw44qw5Z",
  "key13": "4yYVES5ypEkfESB121YVGEx5H4bjdVux72hKs8t6TWpRAcsP5KAG641UVG6bh8KN5jvQyLMpVed78gHqYHZGLZf2",
  "key14": "42QUus8kbqnyda5T5wuRzuvSMn7rSGYC7FNFMvH7Twe8g6SegATTCptHdz4xVaymF1iENADhkJV6RFt55hYwcG4u",
  "key15": "5UYKPVLCGdv87xext1Uq55wgy23VTCakQMvm6pqLZAfrMWnqVJfQkuXuY4EBHThtDAwqya8JUuyGTER5ZrKEmjry",
  "key16": "4HZh8g6Q6YwnmJZVzG2H2tVUXjFvLWzCcFsaTB3uwv16JyTqQ1acuS6v3aVkw5sN6u4BRsQAVD7KufwrVFkXhU32",
  "key17": "2cfpV5nTVfkY9QcDf1NFtchi5MRpHxMTRSqmz4FghBAKmRCMZAesRycxBLR3JS4bKTYu2cArVqxmXEkF1Fo7g5B4",
  "key18": "LGVfhKjbWykkBWFLcQ71gkcpfPjxLY3qRWehJGvsViuc6GcgUd6SHEAQLRX2CgaVaKfy2BfJKpSoyY1j9SDTviu",
  "key19": "5vNBGt93hYS51Gi9eNPRLDo1dX3ZboNXRzxzXfovqMtmG5URVAoBKd1ksULver4jwDfqYgYm7txygWVrzj56wv3n",
  "key20": "28RbBrHc19bz56ghTfckduLt3kZ8C31pYRjJ9nTiLcS3mZxiq23RyNn6PBxGwNoFzkZuo2fnV8q12aQ12h3aVHvo",
  "key21": "3WBubJK3GHJ5GVDvQ1FQdXkfTAajGkeaUKQiUu5f4tztfXw2L2G84ifzvGoDSEKKvqRCmYYSYJors7wQ7f9PFx1X",
  "key22": "2FmAJjSq8zy4RBLE36hGE4WL4xfRev3xhqfDcgcEqLgXQwhMJjaH3Kuv35wD5dQ2JprDDVDQp7KAcS2vwr9nfpMw",
  "key23": "3aJYgFDjE8KPZrP3RC243fDQzwAUtNGT8VU1vug5NmTEJAqej5ebs9mNLhd7f3SY3zZJZaoDK3kPytAm3b23WJTh",
  "key24": "5kiRR354mpY4xm7gfrcYDwJ58inv1LB1Us5T7iKqSwhNuwm8JLKkdywdnxa5iYBxkfzViQyuLKFcFk7WxhyU7Ey4",
  "key25": "4euNpTT33pXpxadJN6BzdvYdVdhZJHRwihXWD5htyktMXFXtFpWNKy86jyiwZjR55f3UEuxwb85aTZhypLcjHye4",
  "key26": "4Us2YpBRUsoRLm9ruzaQRXTWgw1mzJRuvCoXcvLS1GhY7Bgpm2YnWtN8dkPWWP9onMAocFeZ2nnQMnNHkay7NvXx",
  "key27": "jFv7TSTKNVEX9MTNYFFNLLFHiL8pkDXfY4ttzVCTribZ726kr7XkmcYpd7ppfir5CQZ5DtTxJXUPcc6Z1V2LjnP",
  "key28": "2UpbouHnducFz5uvPKS3G971byrso6rg2KLQt9zp9e3aJZJjy3qR2gnrZP43RngGo62Ejgbp9gCRmaGQkuiU6yKh",
  "key29": "4iLbtWvhcYHaK91fGfgMPmPWeCPw445iyncHn55G1CGnEpGdnexrW4yCXRzfvFXNUspTq2QFt86sxwV6UZG7mCQi",
  "key30": "3rKirAudHfM3ZkbXWw1U6s2o6FWoMDueoTp6fws6yK9YgwGNCd2rGDSNXij3aDTsUGp3W2GCK8gTTxch9UmxnyZs"
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
