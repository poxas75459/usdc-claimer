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
    "4qbiCWDmHuJSzurj7gEECuRq4jUefD8BWYS8m82tm9g9wbRiCgnUPWo8E8ciZmkL1WSKjeYZJi89k2pmQwBH3ZEs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59DfZikGoiqU868ePhichXEYueden3VmxQtsFtWvdEP1tnBxjup3avFqn8gfQqaQ7tug1M5tXJ5hRcS77xRwfhXo",
  "key1": "2Chwd3SE1sy4Pc6Hhj333tBa1ypZn5uGQew9aMKTXytexrQpckuNTK8baTa1JYqd31DbBWqyT6ztPfgppBKjT8Ed",
  "key2": "4ydJ1QRVxmAz9Zhreif6b9XDXTJ35keAFCzZ7vTQerWxQBRuNqGWoYCkmxzQbscErGmXKVLcewq2A4WgxpVpLzDt",
  "key3": "5saxDDg2kcJLehpiXyCAxLDSyrEBmCb82ubBfPfaFS72wBaWqqFGqeXQEPaJ6YWjnnxeA9KSQ27EeU5QW8sxSpRh",
  "key4": "3CbXcpEnHoi5PdkkMaNFrazQwZX7TofXKhtkx61wHkpJpSq5vPkdp3Q5Sh1aej1KHFJJnwZr4N9jhPxP2duLx7d9",
  "key5": "Jt5BnCeUJX82LdYFS79Cu3HyKVenZ7PUHProCBhHMdTLXv4kzfZTRsmKADnes3cFV63Sf1UwiqshEnosuJ9Pknt",
  "key6": "2Xk6HRLTBd3GxUfYmoum3GRiK1yNcktrvtiLBdGY8E1gyJQsxMRmbp9fnNs1aYX12uM2tiRzhjcLG4VaThsihzA6",
  "key7": "67MhLiwtpYviadimDZjisU1BR9k7NHnPSruCA3CvMLfVjFwqfU22FsFA5GQuo7KvYuz1YGcBuGCLUwsGGoZ8kJpA",
  "key8": "4mRLMMxU5dqqqawpiKeNfcbann4vJrszSrDcxfkoF36ETbTDgxQU9pkKbWR4zioSAVvnzBkhM3E46b8YVZZ3NppS",
  "key9": "5uz7YkNSQEXoRryrxAdKAKW4gv9Tvtyjsvj6KWXZWHBSBCWTUPUnj8PjnRqKGRhWUpog23Rq5vdckmRWKFjDB5Gk",
  "key10": "5G7M5eoPoNtfYmQpqrDM46W7x3eCk9q36n6HPYbGXKXNP6ywLeou2sXf3ZJGmkmrQ3bMEkQujRNev7ub8VTe8ZqZ",
  "key11": "3AKBgr2tFJYh6WCtJhsgVvTLY1oVeaXPgVqhkounCNegyMd2ANMuQzdN2Y1AVnHtrtBEJ8KxWYUSMCtxxUt5PwJR",
  "key12": "3j3gHxGNPsfzwUtYvfiGDWrhy7e3LrDC5t9AL5DeMzT96HN8QFimfx6dZjzkyWLheRu4W2bj6LN72BAkGXJiUEsF",
  "key13": "3pWrFCPvDJt4hEHSSWrrezQKWDoNaHi3uzZAnDnqv3ftcCngPx7r6DY94hJ97e3i1i9Q5eq7juWt62MQtFU8pYY6",
  "key14": "2wBQFHSUEztn8K6GoJ9pv5hPhFkUaycYMbUQKFMbAW4ibcsBbJcCoFvqoZTy57PmBe35cG2YAvmN8R2shJU63vH3",
  "key15": "i9dybpSjqexLkTPoc9LiFJFnAD9UypWHak6VAQy7AmE87bKMYWQ4w8eJC1hfXCHsDBzUrQYFtHZxppFvZ32UPUV",
  "key16": "KbsGZakfnxVAxKSqnXC11andhoDgCiAu72AS71N1JoC68Y2dKz6GsCWfm7CoPN2TrkRWcenfQTte8JUrEr1GTw3",
  "key17": "proKXse68L6tGSjMuYGjMLeh5hRzF8jcr1Y4BP92NatS67Wv984Zko2uJV2LzgYixyRZV47C6Pjfvdh5bZjqxRz",
  "key18": "3hYL8qvDhM5oknTXprrc4DbE6sbKirS9TSLtZtgQCCUC1EWAREE8HBt4ZCaJFmhjo18PiNTFpyXJVz1t4JdiN3vX",
  "key19": "43GPe5SiGgznw2MMMyTR1Y4cf6P4QYxh4apaodUbm85jrzkabcnsaeEurENpKGz2hmpLovrtjAD9d475ihKgKPFe",
  "key20": "4BuTBWZzyJdD7G1w6ypLz6YzRZHvqbKFpxK931vrDYjsYZaTVJYaRzKgoWsxeyHM51G51CgiDbRxDrpavxGgCSdy",
  "key21": "yBfWq8KLR6bWmRwVaJdYrxsgQhGFh4RGKgKKn47DvHy4MvjFnVfeNfUTu976JQ2xrRAkAYZXTPkyns32hkGqM5y",
  "key22": "2RgwE6W2nBUigsDxsAyfERkoStKwK2yGXXhSzQzY7iKd3CJWzRa6A4Q3JJ1kJQsQw8Wo8P1NYwYdAgpVXJuqSMdJ",
  "key23": "5MbMMvVBMKBfQ5XHHeQJJkYGYjCq6gkfgmridQbSd5F2DJ4kVfmezPDe2eNHppUzK2kAnaaXEGMzt3nMnWxUur1q",
  "key24": "o8HD5kyPZsNcA7vyLiTiP4FZvwiLMUWYT9379Jt3cm3xng6N6g317qxngf4eGWVmwYmaM9hPUJYYTPrMjycdTbE",
  "key25": "3Eg59pWeLXBTFXhinvcw3vhm6ghvR68eZNfKjeNpq9F3G2rd13bXEQUt3mWYrN7KTeCGw4oo9hX6ABrXbHAmZGuH",
  "key26": "2jrwqSVVyfJTphJBC4iAVDwY5cwBNBQB9wnEPoYbztwu3Xv5HXkwwx9VU76QKfNMxmhUH9JEMA6ULZa5tvYmeRAB",
  "key27": "ZNtRX9EfS6GALnXw89y7KPEbBWTxXiPK9dBmycLdnLCcBLwuNWd4qiFUnZprMYoPa65dpuEGrF49KNbMsapd2Vi",
  "key28": "5wUUkzQEpU1vF6XL6N9cRgUMZLUX5dvVgdENzAmM129F6n7DFgQBFNhYAVsmVc8JtK3BfyXD71rzBu3fcy9gmMc5"
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
