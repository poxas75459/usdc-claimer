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
    "2oA2m2gwf5X6K9hjPDZFzMXeyaEVxbtqLwv23Na2A2gJym1nvineBfEcqDmcbkLnBEbDK76ucRKvTf3ezbRgnDnp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fkziFk3YYejjPJerHrTZMaSb3LJXqWeN4BniLYx7NhAboH8z8h25vfTJpaW5Qyka5iYMxnF1kzwwPABDBJ8Ecwn",
  "key1": "45B2b6EJPM24TRQtNo8JykBcdyV5AaTYFjJuSVhktz4RRsobrSZAenNu5cXE7UKFGx1xA5UUZ5fXc291EAgq9brc",
  "key2": "4TZUhQmYMCvxiFrNkrZLALGbVXP2P3WTV9wRSPrVt2rmNrAHH4zh93kTGxX5WXxtpNW6GugSoYLVwshy7718o7bq",
  "key3": "28rKW1QW41yMJv6SWT3uJTTQixqF8B1k3MCMq9bCcyJy4ZzxYmAdVpbLCCZWvs9Mbb4LBe3exe77ebUzDYgbeQ42",
  "key4": "4bG3dzxp9A5mWXogU9bFWjVVtnKh6BNq7GiuNnQaSonYmQrnskP5jFM2E6o6pt9CbRnKCbFoNNFxQGRwNpRabASn",
  "key5": "FGDprRXPxkBruNCYUScoPCQ539JQknq98YifPf59uiRCu6DUq1SL4NxXoc6rp18ZZh5Nw5JcqZwn1CPHesDNEWb",
  "key6": "2nB4rF3BmK5gaa5YpS6pDSuG6p5Qh6yF65x7nAGCodPdGWnNkULMP8p4XFKEM2Z9SKW6pU3jvhbxST75Y3rjZwxt",
  "key7": "228n73fWpqDRhjuHXFSxVx9cSKL2cortjfZQ2CywLS32zAiJCDTnXuHH6edk2TKcDnj3uQXKHFmoZCAb1Pj8jJsu",
  "key8": "3s3BQexXj4B5QzzCpHnw6X3SPByxuugLZ39y7avq3axQsV5BR9sDGrRksRiFAJmkcLzc8HejbAj3Zd5q4hrAkbZD",
  "key9": "4gALCGNkZZv5feijAA9cBZz7YQdsEAQwd4Me2pYtSgxSP1BUWsGHXPaLeLM1f1qt9STPyKaRfU9eUuWy8GYikKKs",
  "key10": "36v8SPHHgFKfbB4qchMgdB4sgqBczc4cQNFcE1JMUCRGf2KvbUoAvh8qSc7dRxwyfiXB5SnDrqwrP1tooTUeCXL6",
  "key11": "2tBh5iRRdm5XNmUwoj7AWowMtaL3pRQNbnV3Zjug5JXEERyTJ1pBoUmzb2LyJS8a4Sd4Vin7qEhp2pj4RU3eJzhd",
  "key12": "2tEQZoKfDHPcCJTBbKnCKnPofPXQXxJUAzxiV5o7Momq6r6QZRgriZjLef1mbDUef4KoPbt5hzXAU349gqbrZf41",
  "key13": "3Fy9y1B7z1MwWecSB6sFCyddbwDThdyxJruPLoH2BjcMJcxBUKgVJxicgeGYKedmhMArJfVusjFZwca8jDaEXMzj",
  "key14": "3gnyALmRGobXLjDwjJVcsAwdYtxtXfLXfM457tDHdaKcX8yhCd5tWNTVb4q6bPYf9Ttw4UXiJY192Rtmj4MBxr81",
  "key15": "QuNetMM1PBcLx8aL7edYD9Yxckj3E6J6735ao7yX8ueftRREicTjCAESgU2LH4Xwzj4QwzPdBbyvXY7g3fK4CCS",
  "key16": "5iRJiK2i5SQRtHh1Sj8st6WsUw54G2uNX6VFVCVXco9bq4s4NkvFQFSXDzm7UgtejCUacGiE8rHrRHH3JTV1EDPi",
  "key17": "uUDjNA3ax9pJQxKcN8Y9KX62uPp5RYrAbDmmd3UTtqA5P9oiMW4BXdVnWdobFijmDt1bL8yhHiXci7KVKr6tSS8",
  "key18": "4UdqWXKgyHRqwr7QrAg7EgptWme4kFdtsLj3HoJxa36Q3qBBAUn4MLTkJgG4XhH2Sz5MUohGEMhG5w7EFJzVHFnC",
  "key19": "5W7dcksaaeVnPj6BLWXwEiM8Ao3g4YrvFogPuesRF4M6MckAgbBTmV5QwdtwC5xTS4Kj3aPEtviymmC5qC9p1psi",
  "key20": "3v4jaJ4SW6hGkC1ty7zPNk7TG7TN18HMcYCiPhpuP96r4uySMKPokjMLTgfC4tv79H2TPodmXPsgYszreVTYRu3G",
  "key21": "4dYT1SmmTDVAB8maUaZ4ZxEBt7qjJ38XREe7jENYUB4C5XFLdHWnQZsvBg8tV9SYciMPatyyJK6N9S12fC4rPmQR",
  "key22": "49hFA3VrNcXviGzpqEQ3KdNbZe2W9tFcya1iUeShwfFPDQd4FnmfMRQgETMgxMJTboNFkgbykPy9nxPtrHFZZ5cf",
  "key23": "31YdjG26bUYGX2X1EeQK7uPKyjdwYuj4SGz9eJPoRa7rZGFjBTv7PeGUqX2WKa75fmMRoU6Q54uXcyN8JN144jj9",
  "key24": "42iJspD9m44SyuBGHhHeeoeYKGrXpPmZraGtSzqhZYGEveKpQEYzdugjg4s9vnTqj4uW7xdUmyYqWLwPi2V7kSBR",
  "key25": "3eWLYCmfkeQaADStDn1UNuFGLgsQZjy52XvEkRhficcDn76QiJq5wZAkcU4BGfiah7yJ6skqmB2jLgxsmArNoia3",
  "key26": "5GTTvRPkCMRLD7VdyG1wiKpRrsqKAiCFYjNySb2ywTCKTNakyh3KdYFVQ2vv8p2Q1DYH3RwyWceZCZ8mkYWyqgFe",
  "key27": "2agkWn23qxWEvQHvoFUB685dRPYTBZV7CpEyMHnSq3AnCFnzTQiBkeS8w1VBDxCJWAbTZubXRggU99FLKAL38MqZ",
  "key28": "2HiMuKKoRFjvsMe6BonC1kJd1W6A7KpWo4NfcTdPnomEeogMbDyS2E6JvXkoz4h1rLi7PVNt5a2VuexnpX4gcd9T",
  "key29": "4Yrj8xvVK4FtKPA2VtSjfm6yyKh47bSVq5eit1wBJexadEb7LpAP5i5DFRH9kkXZ2fXkyzqfDvrNgQGtofbP7FWH",
  "key30": "3H5wWhi9GSBsfjzNxrtnBUL13BnGjXX5o6p3MLZuXuN7NKY7VYXHTrWXKLzSNW3fA5ufMqJd6ugp8JfCDbL121HR",
  "key31": "62XvCCh4tqWBnDqCYFLgkjnqEF8ny9vvbqhpUrzoVAn2LTT7C4QFHYWMKC8gLED936P33qR1ShNzsbuZfQtCvwm1",
  "key32": "3crghinKveTxnXeK9N3JD9r5LyybKNxiDDqbsoR6DAaPPQ7osEGPFD46fCvgoVcjRAWHbm78xcm4grdr4m49yTPR",
  "key33": "24nB8wyjPPrkipuZ5T3rYm3tiDrJiFqvdjzamQ6jdx8TWT6gHfqtSsQDhZ8SNHZyAZ64EfonvopUhcXjNi2MNnDG",
  "key34": "5quYHyCh6T3LeYwphV37VCNJApsqALs4zKPdwaJfLKb1ZAKrW3Sh2KtMpsEp85jZqnPybV86WEECqu3B1hkbtnwe",
  "key35": "KgBTRUXjCuYCQeDpJpQHh58BThyX81U1o1qLenGRhVfrsUagAeur9tGSg4va7xGV5QNTeeaXAwrRbLFsdVjdmTp",
  "key36": "kGuXQhRG4DAMmVGMLdDcScGTKrMGDu6mNRJRvwyiQTyvjLv2HzWXRFo8Q8xH1xmphbLczwJnxx2XPu8vG3iurgC",
  "key37": "BbYHU21pDYJV5GDtuPcHjE9BzP2mDgvQpxtVksRM9BBMcqhDwnZs8127EU34EX4h3RwhW71buyAfgQYTBVjJXFf",
  "key38": "2Lk6qUCfZEvSfpiFgMkgnwYWmrkQhNsjD3wUDXKKJxaw3hnTJYUW3z7gkBNs4Ps552om1UJSoAcWGeDXCxvAtojM",
  "key39": "nqziRnfcyG4nnAY13w4AER3cNLwkJhZ7UJoKrYB4RZT2sc4tW85GjCF4jffzP4mDd2ns49QHePwq2EqqPTZ6ypo",
  "key40": "4XNYHsDbBtbEMVrdNEbndKTiimsfuYaDi8N47NKMvZa98FgJAVi5QQs6fGLUrPDGZ1GJFZinmGKyz3xBSYRnPoH9"
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
