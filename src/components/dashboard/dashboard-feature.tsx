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
    "4dBxDn4XxGKVnHM1gGEgNvfTZqzVyE4AcGWkKvKqzNejhrwJCpBm47hvYBk7S7vWALw1gcCgKmG8gRzHTyaWXFzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1CGU7zWM5hVRDMyytNX5P2d1mwiMCeEzgY8LnRKepvEtZXG2W9gELAmfxk36yibiTf9ZgYkpA5rZVwjjFntfm3S",
  "key1": "5pNCVRUyPy7AN74JPuAieDUb4MvtXJjyH5Fzr2Lbt7NTEahFYgNeGFZrp4DfDvtDtf37ckEo2cxLCQQsnZNB4nfC",
  "key2": "4CdKCX6yFiWy4BbZ6FDWLKP4TJeufsjsHnvTxRDBqpYBKGCPewBS5tn5HpDC5D7cxfxMZEjkJ26nsU5gHWaWYX58",
  "key3": "5HvuuSh2PZ5gKP9NsjM2WRNQ3CSnCgDKoSaTtjzbMqUPVf9Mtac9um3o8ZcnAnjSCkx2EVvN8Wx2E7ae5Vv29h5u",
  "key4": "XtMaeg3DfvnuyAjkcwxL59wi5fN4p31PVZXoLGj7SKpuiHKSPfk54CqKKBLfdBvQAcCrAjJoNCTXFyedn5D5UNk",
  "key5": "66Jxk39e1ukvWcV1kUhZ8PGRu9Lpp4Krh8j9Fk5DjEhc4L8PybUeodY4KubyQfRX4osVAyVt4VLXN2sfbRAD1tQr",
  "key6": "2LxkGcEevXMZZRn73xitbp77ZRNgNzhrYzSG2KPoubbH6WrKXUE2LHTAfVDdJmYYFSXoCkKF6QRnQt2xgqo4u9Be",
  "key7": "21zsVg4fLgMAscUYPRoEwnkjx4qPYtTmey4nRG6CpdRFQiAmn7XzKXnAeG2tjZhQPS77w98Uut297eZfh6xmiVSg",
  "key8": "2cD949QXWvP44AdzMPJjvWxc53DTuMV8Nj1fZCff5MN6fHSryBvD7fXTxAxKXTUXKhhQhAxyyZtuKL1btsevQmEH",
  "key9": "3jfqgiS28fBFWGT8jhriaiBQM1s5ybkThtd21tejVsmvw5fnULjuPVjEfFK2zEHT57iCXgp5rcW5eL5sU4XK6xAr",
  "key10": "4bT72f44YH2wq5pUgaPJs62Bq1ZJVby22BupCmn5G5nSpEotq2LL5cRkiaXjGLbUNcUM3uadLKh5tDtm3DUJdVJF",
  "key11": "4DadPETG1NC5aXKoKCSBzdgrG5AP2f3JXvXYVrNM4g3Lybs3rzTqrSEXaY73iSB1JWwDogbsWiUZG7Sh3YmkN7Rp",
  "key12": "yfZy1wQxtUa7adr6pj67unXeKwQkWnnESRG2ewJFsrc1PH1yxUGqJKmLMARacWwHa9wkhkH55rkeuaKo9qbtc1y",
  "key13": "5dNSxc5FbpPBbSssmCBtnyTtBPm7ahzAyDs9j34e5NQKjqhrFVd3MEHjFAigZTMGpeH9HbppMUmgSa8ep9229MUQ",
  "key14": "MfK9ERZWWKD8mjEBhDVXjPacWoKG6nqfsmRUZnxTjRuJxt9cbPBhDj7gQf7a9wrAbcvAdamxkEgtAvR8JRVRgoR",
  "key15": "3FNJAtkPuKcDfamf7pHt2fPRkmaizgNiBh85forxpy13BQz6CuM1uaWRQPp8z8a8BetAM9Q8V2o98n2Hxw9JC4H1",
  "key16": "3GLyAsHs8wWeGbrYME3RDDxc7UaRBeyJGNNyLGxJR6NAtXqn519x5EhXy3fQKKF8qVn5a6CQAcWNkk3LMJoNtzEH",
  "key17": "5ivB4pSUb8q33LKGohJXcYvTgT72S8njhKLtGs9b6SwtDL4QvpaPQ2PgzLbSrdE8MELmze6JLuWe3URmjjaPvog",
  "key18": "3YR1C6SLqN5119RASYiszhRKtbNi3yLgBx6P1JRWz7MJC47Cz9eM8NkFbeRV5V7qtfsYRQhxRDMqSYSc9hGiPdGL",
  "key19": "5r26xQpnAAHAcGoeP3gsAz7K6Ftczs9UKQft6DsAibpQLrMYMd91mc49VCZq5sKrQGXRST7kX4fK85p6WrmXChxc",
  "key20": "2baJXxRHbX1MBgeGwuBCGdGUX71E5Nryg8ko3NrHYgw9UhC8ygstnMF8rKSeZsn2MkJf5KHSCVp8yzoMFGovrH9j",
  "key21": "2noyqmZUr882drHCJLUB9WFtJEZHM7SQM9pcGGs6CUSPxzhuYvU41aVsgew7SupZGPntzc2ugRhCggAEXkBfDqGt",
  "key22": "2kdKkBEeUvcToK8c6VULug9kbFUkx76zxUYhpLQmth317zu7iAcDrxHxModHwD3y8qxNwQMTB84Vf75AyTmC3k2p",
  "key23": "216WnTZwnHJ7SAvJ8n93ryZVXsVS9iiPbyC95hWDZYqPfDcNt6m9U4z8McgwkM8bLprjpkdnGLDrwwMVQ9tVq47z",
  "key24": "2HodyWP47BqEVc8G9SGSXe1C9k7bqnTGDfUqQeDovHEhoBQPCVbCUi4p3W4bMJAdiRCcUDWNGbGvCpdzYFqriUU2",
  "key25": "3f7RLSToHEmhY3oVGxc7pQDixeQd3cuja1jvzMcM8XQmpzf1F394RBRMRrHgWag36KoyV5JauswWYwh1rm8FxckT",
  "key26": "2gXDdi8uEXPBJTqbzRfMR9TyZNE14t1PxmDLK8LY4QBd6Qr1NvGavUvdGvy5o14JGy18bavhMSsBFLBQL39fCFkS",
  "key27": "6MHJUuUgtQSr3ddWV572XVf9ojcFqxZfTNSgKnFM4SN9nPQJWe7Tnk8TsPZSzLxt9z1ro3pBTsnUmB2pmbxfxY7",
  "key28": "3mvV9U3EJhZK2NW7pEraXNfbxQrbsEnDSZp1UfunWjv8xjV8g4Rd9yqnjHn7NHXyHa94D6KantchQFH1kyBH3g95",
  "key29": "4iMKpqW8hTnNQg8XV2LmSxEfP9fvTW6nKzqVNV6vdPf7L7zeBibsVdweKTwQYd7UnJu5AsNMfBRaRAQZ2XbmLcEt",
  "key30": "3BGhSsHLyLaqYWkHzz5d6Bm9Afjtg2BZPob2Tpw4qtykgcJhV89zpw2fwpQYzxdbGsnuZC6S2s9PzCvWnPv6AHM3",
  "key31": "36y89jDchRjBarspbCDTBUFf8fDMvBKXxpzSaxg61uYEoKdjvEgAfjDCKFsn84gUhN6yi5QDjvfhjpg7exz8KAgZ",
  "key32": "dnW8AjfmjiyHiV6xJs5wUPsVF5fBiBxmMNC7ErdpV7QSZu1oE7PVNAs6Aq6PxLdXancg1d3FaFcUhmoMLiQFT8a",
  "key33": "2CjHQQW5fCBe5jtGKxoAKJh3HM3WWX9UPrYwJ4eFaLn4azFUg2BgT7uKfbs4hmmgvmpN7budne7kcMWbFsEJX3k7",
  "key34": "2KXzCFyTZLat7V2LB85b8HXxo8x4gkALZoTty7kYEh8vUg1fpj7xvSTAgYNf1Zuhm1nNHDE87ufswUkHxc75oDYi",
  "key35": "62zrTdNTmnSoZXtW5Kb17oAuUjrBqPaVGJ9pUMXfE1yJ4XquCiyXGbnHSrodtTteeVgBRwuvjy4Xg5xvhvRU1jsP",
  "key36": "362nP3YqUZBNGM4dp5AGveqkEjs3rAxJK7qAZep7mEGgyPtjCvytrszg3mqC4Eb3ASmsbT7rZa2r9yyJNQ6GHaYh"
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
