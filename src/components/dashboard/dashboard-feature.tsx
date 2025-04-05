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
    "5kfqSRED4oHDfvVevK5yzcnaXffbqCRD54h8w5uHWTF1yYo3he3hAmfsJvCde1jGyMj6WabHRHqS2866nfY2HW7v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kKmqwJWQjZJwZowyhu1BrUFcAA2wbWxq1cW8kFpwoPSsQ1drKkYRCvoowApDkZux95pzsAPr4i3EL33LEVV3mBQ",
  "key1": "52o5mJ9s8YxoTfoASs3AqH2YCoy5RK516SMt4qi2jSZGbaX2HrzfH6RXW5aiCUqaNatq2fGNFynZacofqQDyNNm6",
  "key2": "2c2ANTCwDfKtzt3gPunVYjo57voXDLyRJAeUrE9344F5dJ3qjUioYo98CHPis8nwAqobmJBkWVV9CDvUiP6gRnk4",
  "key3": "46cg3sw3o4zrV5CZ2ixtaHg6GgRLaxVGGy2MT9ZNZ7v11wj8uwjGtYnq8fz17mwuYGu13BUM4MJiHFtbVJjytHXc",
  "key4": "ofBHeAQX2CSkmiJjaz9VkcxzEJGDrJ8R9DhjjPydxPqmHB1bTL5aH8Yb6be8FNZJGvEQZaK95xV2KMLFBhrybcK",
  "key5": "3tAjYuLyHQ5ZryBHHW84cc4SPEFLRVLRzt9fmijistfPYuSDJ3sQxu5BBm51p8BLqs6aD6WkHRwCoY4Eq8ExBj7u",
  "key6": "58hxG5vzXUP52kxTLKZqDZdRsSjF4cAfMbxCsamKm3NWbyh13td4LuMaWT66L2D1md9jxxdQCHdaQ3ADs4ZXfXLa",
  "key7": "syZ3mpgjbpFsZ2HejjcqZTTwuTaAsbXFRAULRpdrXtpooSq6x3Mfch7FTF5GmCPHMyhyr16bM8kbASMzLGxxL4B",
  "key8": "2chsdXTUxVThv3padsQMw1r6tnzAH4Sh7FjoueqvSyxXsZNQJ4RHQij8z7WmKLxVczLYa1fNdbQTLXyTjgPyhyEq",
  "key9": "5EV7kiBYbjoe2ptoSfwp7cVCfvt13mqrw3qfj3NVAiTxdYfsr94cFi5H2A85LeTnV8qvmGpzqoPL91oRVWZT3ybt",
  "key10": "7wABot4wbe5XYiKy5hVFWrZ5JGEZvTZn7Lb8BTJiWoGA7AziqpTJXUkqTC8KdHHU9YhFis7MmzLNwKh2dptWFD6",
  "key11": "4Y8pRYAhLXdchxJcVzL5btmvj619MwmQXd8owybgnx2ueJ8697ZTxNonVuTBpFigyZTJjCN3zpdDhzGy6gvPevnN",
  "key12": "5uyLhZdMYHwhrc5tZLfAhwEwFYdcLZ41A2kSwbJEtGjAKb1ivFetYZ5LhysfpxfrdmmfhfETfFaa5tVJthSWod3B",
  "key13": "4rBE6GRnYnmNpNdG6DncLqP5gqK8HuunhP9fhUCqBMjezfMVtVyhBf3bEMtUzUEkTKX3hncYHT5H1TKjmsYW3uBk",
  "key14": "4Hdb3j8zbaoSJFmBN3QH7iWPCfEY8mZtUWZwuG3xsxFPfN38Q3Jzgm6s63svyGz1WajyzWabUfMuWHPgbUabmMaD",
  "key15": "4twuAsQhicNoc4VY7iHhRMesdVSnQUfNfZ1LStWg2VBVzuxEnNpYVbs9eyF81UcVxrpUbXJmUQix1fxBAiTafsNW",
  "key16": "3y3Hv24C4cwoTnFEAnN4eoQ9EN9F7TJkBtePgJAybvbppPvBPYbSCkmDXt5317FRXVpB8aJbypAe59oC1LiHWxeA",
  "key17": "2RMzbjFFyr2WweAjRKwLqjda3F4vWPv6ZpE8wscqsHxioVddvUwtYA8YgcpXFDDtjBBfqx2DBMUVdK4W9BczB22A",
  "key18": "A57LSUKzSU6QDTyP72L8Jvo2JjPqkWro2ehJbzgax8UVKtAaYMEBEfYBviHMinVbQcuRGQ5CPhC5DcDnUbZ3JK6",
  "key19": "5Dawmg5tQvuiqxpNnrtYg7WhCjcMDwfzsjKteDXz3FXjGvAa9DQ5LDRsikXcjn2b9rSDhJU8Mt55C73j7howo94u",
  "key20": "3AxfzT3XefPJkjP8X8hK8kgY98joWHiEfyJgX5AdaVArZgofF46HRt4vUyyJYMcbrX4Nwj3RZHwKWDtCnvTbM7Ek",
  "key21": "HANvfyyKzQahEvZw7UqnPSKhPKAX9FRH8U53vvU4NupQcyLy4sT78ELo3Vg6iQnKTsc1wzqRwLegJ89VYBzFa7u",
  "key22": "4bmtymjCKZjixY4ivQC4bM5xeaR6nGr37CUQSq3QAh192CF7zEr9zNZstvJZuF4ZvwncYkZMpWTuZhkgnEvVqhCc",
  "key23": "4FKAGnaMExBXf5NLmSoDb1qdBzQ72x3jLzTpvXUkFvADFu9LpfnnocSH76U3mWRaSNrQnnBTm9qK7B5fkGS85cBC",
  "key24": "43cY4C7U5zLSaE5mPMmFZLdv3HEpoSmaGHyD7hbsHnYKqzAejfjKCtV34KQs1cZ4W1ndrWWg62PPox85XkyAcbxc",
  "key25": "5PpwX5U8an7Gq8AF4ZLuB6PwXjCkbuhTTwhUazyGeLs4GMCxCJ1G12aZcpCCKdmaMqZzqfVZiYfKgfvsw8AVGi6W",
  "key26": "4BV2CmpqPDzYKxx45ULvRkhtijuqGNSMTZ9fwjzkwAJpZwvGVLJUTcFqVP6FZ4A21jemTEQi7dyhYpZbydFgQEhQ",
  "key27": "TcFeQH146qwpUDEKVYqmH1HmNywASdoi9EnLHahVmwXP1Dfqv55HQAHLjhq2e4Axen8CZLAb6gNt4jWyoh6Hjpm"
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
