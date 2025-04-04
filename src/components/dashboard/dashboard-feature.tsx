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
    "3ABbRdYshHUhvAixx23hXKuTh7HBXbXXXjgZ3b7HTLfiZKBHU1QkXVJxPNr3jHfDvJSEF7NWdAxuHLRPFcVrTy2L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fd1UoRbTWRfoYySko8tw6GxBwzp3W2zbdhiPf5F8myWGn7MNDC9p2He4TReNncQner2neuEMQn5iUaueRYioBif",
  "key1": "2UhKugVfXuyahPF8XCvJJToCrGgUd5RKNwzyRfaX7xFUV4Uam2eX6UvNgwMQHL5skgaQMjSLqK9zeWHaN2PXYAdu",
  "key2": "ushyXvKvUzsZQHSm5Y2CmzZCqAJCEbm8pUuL1Z3EtQeXn9B9Q6aWDjMkkKQX2LVKt95bfFiTrYCH6TxY8FKZGHz",
  "key3": "4nBLE7VkFPJtVVQ1oA9eB1WfLPr8UaGmmKp2RjMkxmyUBzgNSEd8c2LHE3Le7STMKHSKwpFZFtHAmSBsPAGAoUkT",
  "key4": "4zoQsiJRqzErTQzE1zBRXqvjKkeuJK3fJ8Xri4nDYEqKGgTuKRSCa7RLETrT5swJnELgfUhfSecw5o8jrnm2Bzr4",
  "key5": "5ohzj4c3GAuWpeEW1ow3C8s1rwp1EJ5747nr2St9XTQdrEcQuCrPee9tj6dLzGZVVGRXjGgUp9wCAzgqgcaQQmF4",
  "key6": "5ArZeJoFbydaU9cDHdUZQgQ2xWax9VAUeoGXyf9uryih2PEhmJamZand5S6aaT6MHU96XCggKRYvLSVjwMp4Hug1",
  "key7": "5cHdQnkkH4MFQMNwVSRNjyfzFr1YBEHsXoYbbnK2tvf6KNwXL1Vv78KR8pXgX5qHJWnyVHaKmKypthjmZkUzRVQc",
  "key8": "3b9nAVyusLCfGgKgQ82wKhPXHatFXRzqNyP1DuAvMYjcgTywccag8neFa3b2wasVBb5JTuCuEv4PXmHeQmNT5Ko8",
  "key9": "4F3mRsSt2GnjUnQtnrzj74PHf6jLq8CS8X9sGD4ck1c4LWkM2ADe8orwnH24DtHSrwwc9UbSDvv5ftpxgr8DnGW6",
  "key10": "92jM2gzUYsJVGczKmorLvxhPzpg1XiJ9YNeTCpy4NKUrEepFzLwuyBookvD5cNsyAyQubFNW7843MvDuARGsb6V",
  "key11": "29T3NWFzH9ZAryPiSb6C7N5QmCTGKxw7aNv8xrzUqNJdobmwQ2MzSPtKjfZBgQ9JmvPn2snBxqZJXsDtVZfMEs61",
  "key12": "3t5EebU6dGNTTaPAUncXXjC4NqjsB7bLUVfa9fPm4kZTGFgiXVP7SKGLXNJg2kqUjCkkjhaNm9XyAUDy32a5nwSf",
  "key13": "2dRrMGtU1QPwhzyw9aYLJ9vDiELY3xxBdFpbvEdemRcKtt1rp8JBJ9R9mjmfXBk1pZ3RzrvWqPjQuzKkBZYecgsB",
  "key14": "Vvi6FWgbgyFdmKgbUASiJ2oWbiWztjiPzupsQJ58mhNH5gNA2tQzqUksnEJ9Ujx3GTYfY44uJMNniNAbsrWofuW",
  "key15": "3vaDdMndKGzPB9hip7sX8a7D3v3baZo3ZHCHtzsuX95uqVRQHXzPZmZTix5a7A9VWkcSQQesQsmGfRvphdxc6oEZ",
  "key16": "gdtPmzdGCe24Db7fC9X6zXLbqtBNyTmdCf6bNVJ74tyYHutLt3S5YC6WM7PxE9PEaByVku6GpotuXX5BxS9qGcp",
  "key17": "4t6SWrE4QrN17m4S27kmcYKL4C5o1Wwdb2kqx5u5tmhzwL5SUQbFBA12NirSjKJUpa2tv3FFNzjYWvvtjVE8SoQj",
  "key18": "3wowgJjPc6r3i5JHsAAKygxaFWqUg7DZJzLKTSG3jq41ALbYvtsJdactPCbxUqbc8rxa8jT18bBc2GdNPmVgSiUJ",
  "key19": "JvjhHfaSAGuE8GfU39k7cYXsY6hK7ub7aE3NXvXx26v8xSqVYrdkAxTPDTjaiA4XtBTV7tmXTvnuj8NDtgCszSP",
  "key20": "4F37XCcTjEXn5Nu2d3E4LHsLqG15iy6SqRGUETqKsmiuVaky1dXm87VhfaK1TsMs6NV1oxcgF1qaRkFYmgR2k5Qi",
  "key21": "jjikk1AfJ6ENRb8u4M4mXMEZNU4vFXU7i3n2pBq3e9EBs4cB48uNfu8wBnah1T6BgvDp3U3kMqn6ZV2NGm7Jt2Y",
  "key22": "KxA34bx81Jruh2b1M2ndrUZST3tPocFWiyW8GwBiGV3Var2Q6XwhmABs65FK2BiJCwFQDG9ywUXodL5aRMsfhzC",
  "key23": "2E2t1KSsyYrHS7ZKDVERMMfx2Z4by7wgh7p9ePzzpc6UwUGhPF5QG9f1mBv2zWWCxDizGtRKmZGXy16uthf3zjgR",
  "key24": "zKzpC2uy2yzGA3WEQdHvAZEmwiCxJKQQHGycT4t88UpqrVxur7YVoKejWXuT9bmd3JtqNPcFFZPXLPPneFvjBT8",
  "key25": "5ofx6dbBx9CNXdEaY8rv8ebWR1a3dU8i9ZtRtzFwoHt7bq9pW98v7rzEdwM2SHCXxrYwLNmuCQEUfNxQM8XQhi66",
  "key26": "3vwwteKSPYaufTbeoJFNkif8T3kKrpWMVogZkCcki1H4W7G3DtorpCZ1afumH3SZDnYa4nqDTbvKHLQXwuSsFm4q",
  "key27": "5JKipDW8s7s8kNhaMiQLgusnjNHTWpFw4AY23BDMKWsB55WvY8VsWAKtPja86stB4mqgGKDDa7itwk14D9Xujv1V",
  "key28": "tv38QGYV5VnTNR4gGpW6Sbh5EE6Q6Kg1chT7SgiTEkVJkxVK3rpNBWZ1rTE8JDvcAwkiWUXGNYeY3z8BHhoHBjs",
  "key29": "3joKoAAAzPZHSdM1ujd6aV3773NQ3uYkDW3yrJ5NwUzBfrzcN4cHVW4GFoDJhXpR8PPNWm4RQZAHMC4ubz5oSg1w",
  "key30": "cGK2T5gDFTYnY5fJTZUL983gARwbmWpkBDa8vYVvigqbuPLGZko9rDJUJ8iWA3DemwKCGi5sQS1j2F3YEgDfdW2",
  "key31": "3JWxs3j8JRaDJYe4wymLutMZZs8qvReduo5qRB6hCPk3tUGZMoJmGkJQaQZcvv5E4zbD9we1EnXmnrsUvkvibJ9V",
  "key32": "9KB99zuLmCX1mUp811rwKGSkSDaSdKkJjFapeKMXnS2xWFfbCftrkwDWMp7uJtHEZEcVws5ivvjh5ZPFphtf1r4",
  "key33": "mHrFxSPKA93A455zwv5sBJJhwfNJQvCpwJnKohvBLstRKTi9xqtiM4MZpvssR2nUHb1ygf4Dp6fXNYLwZqW18Pd",
  "key34": "iLLuYqDdgAtuJ9iZqA2yeZGSR7Xbg5c7DY4MCTkUEnFhgN6QYJkK3JW3u4yddxZ46tHFvQWrtiQgxf98obF3cBf",
  "key35": "294axSDfkxg1bA6q8YbCuKJ5T75Fh1KHAEKeQki86ThbXaUnvriz7G6GiHTQqmDmubmxJbbsTKkvGTNAFDZCy4YR",
  "key36": "4PkL6oSTPLe3L2psSUGRF1Fi1YaNEv8fYAZ5gDU9pV4tcJo8Qpz8xEfyQXJP9xsnz88z2g1xuXnVGLa1rPeoTcN3",
  "key37": "ZBtPzjLXBfrDo1yz9iUeKSUvG8jf2N4JnJGhLKepS3CXuXzZQFRKwznFSy8wZQNkVAcTU22Qd1GW44qWwz4Yrp5",
  "key38": "3QVw4iHk92dRhBhzFj1ppkkuTSafPmfHvmssLyS22Apo6rXyVAqmwKdMnKEwSsR3Ebi9UjwDLCzS7wiakzQCU8KN",
  "key39": "jrfxKrTwP2ZgrwnSrm6bjLFMTNxDwb9kDDWpiVBFGtLpcMgauZ9mMwM98hdJoGBQ3dKqCeAWaeZcuPNGj4FyeHn",
  "key40": "4wC6HLe7Zdv2TEVA3w2urZJ2MmUMaqsYsQeu3yxxa8ZXez7E1zXW6fEbLqGDW9hyPsUxxD1wPjWgA9Hj3qTRXZz",
  "key41": "22fEyaUozQBp2LJzBqxEr794eVQthyFA84X1yRhXfYQYA1gVjqoa8xPuEqBmYhKyqBTTH9dZ6wMoCf4FwpLg5jLf",
  "key42": "292K9TPffBCD5HVherWXBbo4wtmpSwUSyrjrhDmM8XTG6m1wajATbi6npahaugx9A1jdnWkZiWYNjQBd4GwW7nhs",
  "key43": "3pFrpMyqzEgGVy3RbruEE9PMxeMnGzUeTaip9R76C9sUVARnU9gbYBVfjBo7sGMsdoRaAR23JRAuqFezSmK22jBJ",
  "key44": "2J6VdLVRsrRbi7hQ7KCYm5JNpimrMa95ArzJtDt2gTvCn6QnKb6r6Rfjhpw6sDiR8ARc97WxsCrRD9MwmKHsc3Vc",
  "key45": "dpCdGRTnRt6oPE7YsaejZ7i8X5qe1WMEFqeYBAFy9vPyCTqdxYipnBqsH9vKYxHMizZyb7JEf2F8NvHKFKvLG8x"
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
