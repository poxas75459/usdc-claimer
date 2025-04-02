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
    "R41da4JW1XD5CCYj4j2C6z8ZJCbwjBv4KyFS1WwQQUwGD2gspFojC4NDjX99wWaXz3GZ6YVen4WvjHvD1wpC6kn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Epn5Hu7mRB6SzrBJQXGXtr44MAsz6BRHQ9KLEXi9wroVihn41oMcmLszPLuFXToerR2TkMaoSRiAwTDNYqJLoSq",
  "key1": "g2tkbHTh23V1hjZN4RubxJGT2zyTBgYRD5Zi9Lz4Z3pXEBW4zYPQ8Qvn76tkn7h6SqvGJRxg4L66niwSkfGxCvo",
  "key2": "34BZCPSyCZshVmjXipr7w28L9RjP8QFQVGyJMZfcvvCvsNQKKh17qUpGjBrxQYaQTgRnsmRJEzKCJUW6PBsviUMg",
  "key3": "xzWNsYzWYNBx8noTfXHfLbmW4xXiFdFEt9eQZcdjxa7ZaY2nxXgGdA1xLWuRt1ivVGVT5KVfDXgeZjqERi1g3bm",
  "key4": "5Wxq3NCVrsbFjL2BHh9K95outkZHUUJuLEf6aKzUE8VxKG25ubMLBehjWv3ZxAVaQXFWGpf4NzZjzXoyigHLN1Jf",
  "key5": "BbiYAprQ7rpoPWMRbj9HZRhqMFhsDisj3A6NFime5vV6P9vX6CYirdsy8hidKCUUR9vhhetPY3NAkP64GHEjaRK",
  "key6": "35TAoj4NUNT6KDzmb5kUvkYaj8uXxyCpbkc6fpt1yuUBDvk7N1bwazpebo7TE61DLdqZQpDCY7Te7QVkUkiSsAxZ",
  "key7": "4cMZi5S3CBxR22EiA8GwDULnB9iJ3jMKQ9dXUpwRCTw4oRY53xPRoKrFvJbkvVu4Uj4cqenUG7SZWJj75Ht1vP8M",
  "key8": "4AEJdYKtFhfqDaZ6zZoKkVK8XX16PhVFDUUy9QfeDABc64zHJ2hcVp8ZXrgiUKACoztjmmXAvbiG49UHXYVNCN3j",
  "key9": "j9iHbxcQtkyRRyntq1BvJqfWdDDN64BR5gRoxh9ZLTLwieYbn1hPSPY9bbjgjYcWJo763eDzhqeiUF7CengDCYG",
  "key10": "UfdLEUK855oQXmPuEGhv14PiyVPQ3F3QCf1u3zq9AjEvZfvz2p1NJrKLKph12UpD7suGyb9oED7qF1toFeWPaG7",
  "key11": "3dQAoWWY1qiSnT3J6wmTgHySyCrNawVs8TEcD3e8zLPJZ8b82qb1PVZ2yoZLvww9EzZFEigkTH7KZP1P6r6PZbKX",
  "key12": "3q3VCSgMoXvysrAQX5xA9Sft4pswFDNw1G2chVy99ibdBm1YpGV7CusAwahxDiQFUHjbPgRwFcMndrHADpcPtvTL",
  "key13": "4He4w6kmoLLdZYTe3XGUjeJzxn3rxpgEkHwbBHzXScD6fBjschXdczjF2jdeVapn4zdVjDqGYsF4Ttax1DyFG3bj",
  "key14": "5oPmhyQGHffWYvu4d67xTaiwSRyfgtskWPdFgXFo5ofEjxvuXggW6zZyaywdUyp2Ke3FJh74V5qLwXzQmYpm343p",
  "key15": "5iHwmZRiTsWaTfPsSMFjd8EvtneXnXf9qKrH6JoAMKjGN3mcoc6zc4f5sKZ8gCktye2gyLhMW1NdhmSofvXTCpa2",
  "key16": "65vEXk6zhhxvdkyRHDDivqhsraApNN7MxL3aeaTJzXZbBM7WgFnZDTzeNuNoJ8dC64rXi18SHV6CJSaskpd1ybhV",
  "key17": "NJQrtvoE8v4RPaeq5jcY8vubht4E1n45ap7puAyc4vwxeCt65yCcHxQysW9dmiqhotVmXRNicqm1iCgLJEHfF19",
  "key18": "3SXmZu5zuvTZgb6pweNZNPLJhY7t56EdyY4sAg7CwCZmR7ot8xE27hMRwB9pppMsT9RjPaxSmvQbEPtNT4vZJ5nK",
  "key19": "4vs97tyzzyTsJk9qwC8cyKWr6VqLekrA36p9wv3ffXGRiemMu3PW9UhJoxLyf6PtSyRfrobb4nLUCWRU4YqVzdRv",
  "key20": "3KVziwjYLaQiG6fDxmhXmW9CEwc5VK6BCqry1q4tgzCyJfRUJWCoGkavYyLZm1FMfCCCWptYc4rtckyTq8UJdnXQ",
  "key21": "3owHPvfA5BmBZBWYdtTxrnSRBL94HKi3b6gZx3cNV5mjc4F4xXsBqRz1CUux3geuk5c8zDx1CJGJJA1SyYJMh4Xh",
  "key22": "3grexQaAprBvXURhCn2Ud9GiNXqbBTVmMrHS7r36R9KYgvn2NzyRR97bnLmWf1moSSaHvXT6aaN3LwbAJawB4bJN",
  "key23": "4A8Dtj5Fom5UTBw9huSbvZW6o5kYnD8YgjVMbnNE5vKbByt4jotNV6zxKR7wkxYK3qBKyBMR8LC1GsfMoVaS8MhE",
  "key24": "2te55VogKF9sJh1sor4f8HxD343UfRw7c1VjVkrQJZFssJCYWCdpSSvqgjvnG11poken5UdXeUcCoSVGvTvRoG6x",
  "key25": "28h3HJJDoJS2SsRkcZTYcn8f9Yk14d5LxkM8aWREuSiCeR5cXmmP9ze6wiibCC9kNYfGwjPnuotJ1kwaXD5d6uPg",
  "key26": "4Wo18REZ7Btxvtpkvt3g7ZrwDRWj8auH1kSSg5urGqv5xxsn8L76Fv6db4fvbj44DbaTzY7ChYADQXgjBKWiqxCJ",
  "key27": "3imVY5WPR6acBEjpC1qSnixaeHN5QnNJmMETmFjzMNudJDNT2AoCyfsMqAQ68gJ98YrmFtsCj4qQr9SLbj8B27FE",
  "key28": "zNcq47DZH2fL8i2oNMryAQM6uQFBUEJPUGp9Mion9ZKX7fdqYWT6uHAv29pGzarft8mGSkLikXJrZCdrYDzyvkN",
  "key29": "3vn6S9FEtEsXkx1Ukv2SLG2YbCn9bLUnVDrcanJJgm5QSKRYrxGD8Qd7KGq4G2XqqJ4hDyCtzoiDggu7bq3DEgkt",
  "key30": "pMpKheyUBHC1yPbnShoKCbJfTRNVvz4Bhi5ikKXsx7rmWEeKwVJ5dbHDfreK2bNr9rLXZ3AxBTfeKRMEP4UjCNy",
  "key31": "4nynkVVxiRqqvXKKhzps1qU7W2ttqDmycemDCghAk1hnHYUSmtud37PWaLFfkX3CKgPbmv6aFARQKQHUd7u9Xiji",
  "key32": "KsLwq1cBjCP4BMSWvcQQD2EdYz1xmaP42jEMCXVJthQir3bTSRnErPTy28wdxeaNJXHypikRBfP4c2AQZw2yryi",
  "key33": "5t4MFCQwSW7gSRH5XWtCNdhk8r73u4XFU5p8QksqXdnPBfcGiyGQ4BV6X7E8sptDKnUmNRyouCGY1sEh5bVBWVZe",
  "key34": "ob3ZBqMe3Sk3bmQgori6kZmyAdnkjG2gq8FHye3o4BJcK27ygd9fLqHJ8xAS6CgmVUsSRXbnCDc8RTBpD23t25Z",
  "key35": "4nAHsSiXjxpJfQHq6eXUTUp7c8CPXS4zFiByyDKV55htnSoRW4XMN2EoAKFo8meKKjHmwfT9MwUjEvqENETvSAA2",
  "key36": "CsHPndVnvfEt1tEUh6f8DnCGr7nTC9rRVgCXG8kTXF1HmwSrmqZCkgfxyfeTYUvHYHxwNFQNGWeLJL2r6JatwNL",
  "key37": "2iaPmegeGayJdXXon8hYNZDW8c4FtL9rx5GHPNHiXpPrmsnRAudhS1DqTXRdEbA7jEvPeiW6X5yRQAHHuo9Rt5V1",
  "key38": "2ewBU9jwa4465WoCqTkY37oiB2kKxBYcUWPA38AXzkLUQgXo2kzPo1EQwtdSzzpxTvLFcy7qMEKSxBkWmELeEyps",
  "key39": "3R5LS7LHoVa6ave6VrF8QU9mBmWjBkLeci7d7DNnqgajmndkF36FFfH5nh7wAUYZJQbdythRqPimc51XLYVeNnPq",
  "key40": "3wdRZWrpGc943tq26BE2FFHAwpxnSjQvjJyF8CeCmqBWcCGkLFCj6T4PDsNXw16Kfncq9LFh4C7N97LGoPJPNLEJ",
  "key41": "5XXo8F3wokDs2qTHZwi9JGcK4tSKER5bfqx7m6AaZsDyVTrrwxEnj5wGoiE49Cybbz9rrM3cSZ6M3FvzZDdVRCjv",
  "key42": "xLk26kwj7jNiPQp8TYAhQvLEYuiUsDkRpd7tSPvC58izom2tKBWzPn7VqJc1ejjTyLwfiE5pfytynGRqic5n8Xs",
  "key43": "ZPGgBXK5EX55Ddo2uFHeWMgSpdrbCjJLszgQdTd9feNDqeRvRmG3TGehHy7Fz2XsQEpXC7Cz5XLqeYrMniKeHR3"
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
