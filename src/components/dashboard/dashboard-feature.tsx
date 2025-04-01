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
    "2XvLthhcPvY5kcbpGv9PfZJnBSyfmumJzRXEk8p4eMg5NWGc1PY9LxzNULAsGKGa6Z4MmDq8Nfio52yPrm5qYsjG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hKs5Nez2FPKX3DJkHsYK65MtdSoXWmpaHKZRiZumtqhz3L55HVthVSeXcxCL22pHJeidmYkxm3Y7ZJEmyWUBDLx",
  "key1": "4gkgQZMZmjxeLxEAYSSUyVfsonM8mCqeLgxw5mHvuLpzfK2yyaZkCi9tu8eCr8qYjVFyKbnR77Syn6NZoVaQE8Vp",
  "key2": "3tdijee8J55dH4ZbZYSmLrqamoghrwksq9BW9B3ZgpXSmQL54fHyBaKcyioYexvfjTqoeGdYu4Ssu2QrS2nYSg6J",
  "key3": "3nzbs48Btmv9i8rZ5kLfYF33pRJ5fiZzaBsy1MtGHX124FqRDHW3b7PkiXn2qYcPvLtqgUgvLmk6ccb765gQboUT",
  "key4": "3Hizr5sG5Qopg7rYB5MVNqmqaBoz2oYXhsjpFrZjr2KACFxALhRrQD1dBawmDAK9aig4zEJYjfvu3is1MXjjWrsW",
  "key5": "2fY3MAqaTBWEhUmKr9fFvLY2sueZVP12iG6NHyhRoTndoxQ7vGurLy1ZvtomWahqZtCd7G7c3iN43bBPhVazCyPP",
  "key6": "4jhk9hrkYteEViBqW28RdX7hXJnpGFoTLFYAXhWBkoKeeXAWEPQ9r9QufAoMcmKsKAhPHX923nDtkWLNCjAG6tVe",
  "key7": "2Zhx5JrQL77GSHMBZiTpzkLgTSBah8ipLDgpv9z43fzBUjBVySYFSwEm8F2ei6PRZPDsYV5r87p8Z2xFsswHdAZn",
  "key8": "2DTVa5ETnoAgDGsBcHaDu5fYBnZHnijPYQSMjw2ZsXBB23JiawJS2HUY37w79THSRe8Tkkm6ESZ24S1pfv6PSH6u",
  "key9": "64qCoqrHGe6PpmrWPGJnERJnTRb5FaDxWKe8AmqYJDLJD6thLR8dNm3zfJ9ZP8VLWzmAzBtFthvs5KMZcxtZJ5M7",
  "key10": "wULi15PjR8kxDwPuDQnf1XAptyaykkttTgHXLwJPxYYZA8DekZH1T4Yjx9bffcnn34EiK3mLUZXqLtDpE126QVZ",
  "key11": "yFVsCchgcctZ19ubZE2p4BiMbeTCXWrPqmouAP892MpL1YkJCoVGFu4RXaLj947L1AczUNj1UbKjPBjmU8sddJ2",
  "key12": "WBLrVeBoTSdCMHbE5BMuCPgTKeU5YXBBDFMiG77if6aeQFeiDFi5NNVrKX4iwvZNdhL6jRSYoKTRbRBfoTSWkQH",
  "key13": "6HVCgzA9ihjh4iDtXPooPmfmYJiN6tBs8YrxJC5nuGrT254gpwtFoW2LXaDvguotrsdcw6NfuR8stT53ecwsWKx",
  "key14": "3J5nGNWVeTDofjaPBejXuGEmpuFsZkfVNae164RQ8dZ3nsDtkMTt3q6Wg1emBAQCCxBCcxU8oSwqFQAYjV3LQx2G",
  "key15": "31TMwZtjk3DvopRZJGXnHrTKR9k1afsK8zuDWz1DatAJnjYK1wjiRi88hxnGYXfav85MerPahgC1kPEsxHByFfMC",
  "key16": "4mE57KXQKGJnUZGcPXNwWsqVfRXh3KDG1nNNwfAXPVfNVThY3gmpAAuf7ULVBBq6yGXXcdFi21rHFK8CHZ3yUxuR",
  "key17": "4fdy7FVdAfwRbuE94RS7o5GjrDA5k2y1Lw9K3KvbME5xZHZpVFxTPqCGaxgmk61Rra3vE7xm3mD3RwnA6o41Yezc",
  "key18": "8dEaMVi3uXKDJt4yxqyZp6pgz4Tein4DU6dgNXmTVjZjKvQGgfec88X9sYDvgCRGLgm5SPGe5eTzt7gBxYPBehY",
  "key19": "3SCwRd3yzWk5Lehj2qTQMToLtQceTHfw3GB71aYnAUixMUVFtdNmzuqHsZBAX2js9cEom7wM9v9Uhz2E3fUqQipa",
  "key20": "4ATzf2EHS5QdbcsSU1WoVdQFQLm9NaK8BuSiQq2tCAFzvUo59eKVVJRWTDz9nusSmqxZUzZto7nRWB496sv44egw",
  "key21": "4N5XkXqU7kNN4et8ZeruunZrEEfduqSXM5ema17LGStiQAJJSVWodLVTfT5fLHrm39HDTMTZx2zQGu5LXZ8vevCz",
  "key22": "5mku6rpq6oKoKnoov1ig7VdsrK9rHWJioj9UvWD5Z5v4NULa6LsvezyvQ4Kmt1evwwKedd8dii67wuwEiizLHRAY",
  "key23": "3EmzA8MsJ5KgVANkU1aAw5J1j5jaVvXAF1b4txMTSYAhu4Bbpt52thu3CrXFfdyqJrHPrg8g9DipeGkJXAvS4VHA",
  "key24": "4gXMzR6spYDwVBY7tgiMMouw9PuvM3sxQ4Atasf2AQsgDmq8Gh46Cp4Zf2WzPYPDMi828aMj2uNCnf3vJ1v5DaPH",
  "key25": "3wAzjQ3eiQC6uUgHg8iKmk2PTueMPHUWF8S9P2fe9gpuYrPWHkCCX674hGiLbuyRcwgPcXenVtV9QztEDkHDKtNk",
  "key26": "2XvHHDzkAn5fJxKMHJXLxE4BPoW88TXAeguYae3hFohj1Vdhhrujkb5ncqkeyVeW4NHoRM3eajRRjhraqdj6A4Z6",
  "key27": "2Ev7uumxPVAq2qUchjKNBaabFLMvNA6sQFwRPoxa6PQNQEp19epGwUJQRt9W5rbbYBaMBMvbHu3JpLxHYarH6Kkz",
  "key28": "5575ppfRodXBcmdT8rG6VNnESH6eLcAKvP7C6ZQVysuB9h5p8wdC5FUW4JBY6QVi2swyTLtknbNPZh5JjhWCfsut",
  "key29": "5CdWzQn3KxdkmUE8xX7XFRo3ScZmNYscUyHTjLVgFSCgdqRtJRZZc5cYrwNznuQeLeXbrGffWVGbSnCaC4jxtCR4",
  "key30": "43J7TbjR2hVSa2Mbf1zRFy8PB9b1JAfQP1JMntt5q4Q5dyAe9NbMzobcDNaGbRgjZKn1sy4svUA4P2HhTR57potS",
  "key31": "4yjMNvK1eCh2NRajAV1dPCBoBQi3nG5fzDNCxeTxKrGWaMZTefCuaRUGis6UCFLSG6RZdu7toqLuQzy8CKkpfSZq",
  "key32": "4d3er8C5ZjqDBx1Poe8ZmPEg3E4RerX5eSsF4pAryuTTj9wf1SNRU94u5HbgM8PZBQUGpd57QKACLMbmFiPetwxW"
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
