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
    "5hJcdx1Kri48SkJi1vgrMqKTajFiDUEmJC7NL3iybDhpA6poSCeoMVDssPtUvb2LZ6c1vwQ8fgRf7KeUJfULMWnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31bVNPHaYnBb2FbNh9N9gD6BKiGy4fmiMTwJ7yLoTWjDzQjBvYNipFQqRvEdVPtXMhEpp7H19qfcrMw2LmDJhcuw",
  "key1": "3UHuAkmZNKpx5BoR4ZMy4HMGEWSjKZEmUMLjPLMxXrwdDgvCuoEugFURuzmEfnwmUhECWTGk4hBBWQXK7TjWHLhG",
  "key2": "2zpN6HCWpxywSjHMr4fJA9WPef6Js1fKFVN3PLwa1UgvCWSajq8NjCfAj75sF2iULaXnojN9Sro56gYNYvPcdkkM",
  "key3": "5VUThWvsmTP7cMS1BhJm5mtwz1EXUJBrZ3VfV8yZjWkdctAfcq6oJkrvDbhg731ZJ9wrV5SER3EyAGSiJKVriMUx",
  "key4": "2zyzEH5nX8UCoBpohXCGqg7okoxeekMaFkMgS2Urgr8CH7vZvcT8643tKQrktZCaQmynYXWSVJ5JygbTpgLNYWa5",
  "key5": "2N31kX32Po1zxmptM2KEeDGD69iRv7S94jJ6fzMeBiJrEom9oTd2hDNFasUy9XnA3WbTzoUdyuKVFsa5QgJm28Sb",
  "key6": "4j34UFBkKKWfsFpyWYQk5ptVyFkjWX2z5rtoFUjPrKzCgyajg7uxyyf2XcTCSW8L5BLD4jYK48NApNTrhTcvhyQt",
  "key7": "va6GGaFN9pgpphwDUmDAZnWE5US9TyeTzQ1Asx1sFfeup5T6p51dyzULriTfDETeYkbBc43XxYhBfiSFnVEj9dX",
  "key8": "6b8oPCT8t5Hc612cMRZVo9rpSsTCVK5vrhqWpsFMA3nUYtxuh5AxgrwjCdx9HYhWfXHoXUrnHDf6vgS1JUsCcAa",
  "key9": "3GabayxCxYGZjPii8N9iSXz828ptkJmeSysv1Mgat9bDAucPAU4kYyTThPrkH2bLiZCEZVEVXW9PAsvFWFQWwiSD",
  "key10": "2ZwxgXebXbEeDc8mAQ3AoztgZqNUj7Vi54QCAKmv2BSBhFqeRpQcVA13vAhViXLpz22RV41m7WiHY67etoaxBpzH",
  "key11": "3oPirYJxYJQESh3Xp5YkHBKWZmKo4GVJHWxDyHd93qPqqH23ZrMBcg3VHZUBVy3dTDCsPm5g12Jgp723oJFMcX6N",
  "key12": "4dRqrRLohgyuEjrutHHpuV8FaZG624ErM7VM9gGn6zEccCNBLYQC1SzfPNXVkRufNVHadnpCPz9dCGR7Xmjv1VRF",
  "key13": "2D83HV5ypkLsQ8wJX3LQ6XsrvSR23pzABAV6MthkPwssgfw2EEHuVPsaKpsYgFhajgoECGFqf2LKuhCzGriegheR",
  "key14": "4paEHnZjAscHti3wNtTbfRLNmWG6iBVqAGkreSPxYt43GoMNchwDaCFUtStuHGHQpnh2mFCTYJ9Woo6egjhdPVYC",
  "key15": "4uwLCKLW7WEwf1KqqYusXhWAMm69AwX9C2H4qNhK7MZNrj5k4FXUAPKUdsJdhnvLCE1dv4jxApMzQkmyz16wJmM5",
  "key16": "4y8L9aK3PnBD8wttThcw5f5FTNVM2NYC97jknT3GcFBTnSJD6UKR4UY1w4qFQ8KGcKJwqgKiGLpmZGDR1F55iAL8",
  "key17": "YfyaxADAZkvh1wb9ZKJZ54PfBRrQUyb1Ku5hPtPwqyqhYGcPWgnN1YnYzNhp5F3k52xwSEnJkNdw4kAo4rqZokV",
  "key18": "61i84jm35DLbkwWdNhxub887QTDHamrXjSp8PsNSJvmbH4fkbnUAgtsGB31yX8PGhMpDSMoYmwdRGKMr6gftHjT8",
  "key19": "5RcS8NjFu2Nf8pLqT6YrFfmYHode9ebt6fJau6GdYacyxv9GutJuA4vt4hG8d4WSyCx7YAK3f1pPjJuqosKpDFRs",
  "key20": "Ng9dz6J2T1zU5opanxuthL84sye33u1dwdm6NbjZfAFFMBNk3bvYru5RUDZ2hWZhE6DkLGEYDSoKreLr8FU8ANM",
  "key21": "4cerYMPgS8tUG388RpxLQErRGd83SAGbw8PDH2AB88SNVoxz31ozVgY5cyBdBdJ2SBZANGubs5veNS9hk7YoKCMV",
  "key22": "4mJTaWSbTXfzKqKHrmXaZ6PEf8kgCSQPNvrgWh3mzcMHAXVQgrsZzcUUqUceYmn7Ago1m9cHBpvrTfExzEhXB42S",
  "key23": "sRfQxAr3mnx4nhVtsWyhD48GsgB1n6fSkm2SCS8wNS7BdVgct4CBv7bro4e9nJTnhSX4geFdgPwwaz4KER5WzBd",
  "key24": "36U7gfvtUpFaRCcR4bp8ok8B8UHTsbTt7yCzQsghFXc2Nm54tSfpmcr6ih3hPisjjUmQ4v9uwMLLh1UDC7wZqwMT",
  "key25": "5wSu6v39vrYq9v2aM1AdsmdE5Qe8xjUe3gmpvb7wYTzuSoP8atbwrjSkdHnrm4nSZ4edpVZ8cpLzF9MnUyDtfeeH",
  "key26": "3adT1XzmFrKD4ao7dKHX1gr1PUoTYx1dGcYMm1JDqwEi7tqV5YAm7zWzbbHXJaBfHEL3uzBZmwbi6N4HMNM9z6Fy",
  "key27": "43DVwUShDNhgjUTZf24FLJUXwB9X39kAtYUqzQyrgHJJ9ra2KnA7Qk6iq5awpDZxSDSVZiqtJCZM9AJ7WUQpVuK",
  "key28": "5KZKVKrL7AZBEmDgCT5z8vqXMk7VCC6tozpgV2zRhxSgCHsCsQbYrGgpBfkXeQP8L2dhUYmne5Eq2QLMNLJxyvgC",
  "key29": "4DcEBbv1SSmFssR3joGKp44LeZfQREGGHXGpCGsGrrTsDfinBt2eAduhpxPZRnqKkBNkpapKhwQg9BRhrSAev8su",
  "key30": "5QuDfvULWMg3AuGskomgpFYXfBa37pQQa3RvdZiLoBqmuuuCoLK3WzAYJnGq4iv9GVcS1T2qemE7GXzvUJ7bFmt3",
  "key31": "3DwQKcVZSfLynyUuFT3EDwihui4a8aXSNwsBspKRuywsVbTt8nPQCFHRrN25aSJocD8NiH9uehNoqfCPUuUgbJdZ",
  "key32": "337b2doumbbB9bcgU7p5oo6Eo6fBpQ8JxiofMQqAuTpZziLpNVjLZoiuQVwzf8uXbhcy91XgYwHtwVjqT8buXvWf",
  "key33": "5FYf5CNbDap14eCozZq82jMjEGrKfuwxT8nWmtkT3MsVocZ9rwE6GMr7hThdqBCipUoWjPJXaBpaWTcKSAWRRbEh",
  "key34": "5YfHAmFuLJoQ427RKxZtVn7NStHe6AMf61jLAsXWbrMbQaH3zy6B5z7dHpBZhWUPtMjUSc2SG8wXjk4wK55QtmVo",
  "key35": "yjS34t81CtUHAujr77iZnak1cXiZ9PrbWFkunpDSVtRDgKWXwgoZ1p9NxQgZSxXVbFe4JsJZa11w3yDs8jBcH3q",
  "key36": "3HLJ2urvz35GyuzqVyvZonzu8mhhotJDsHfBxEYWnAwPRqAMSy1k76Yu7b31UZso2xjU3b4S1UZN31zfJuvvzEM4",
  "key37": "4NRGoj3n5MBqXpcxu26juUC2sWtnNP4K82ZfPctLG1ANm4cznwG7ok68HM9dHJ5xEFavQVEzjss1wkjJhhHYEwWV",
  "key38": "626tt3vrusKKcqf5HMnG4n5pPNjxXf32neU4bsFjuezZJQRa6ytWD9g7EQDdHDjkwWn7eqbbFiEzWQUkLKP95ytb",
  "key39": "2AwLspuqa6EQyFPVvp9NggEu9sVLj2MMU4AtKvaoarbMs62uLYVYqJQHCVHu7nRixvaodRnRT33aQgjj2kto2UKZ",
  "key40": "3YQQoXq3GwXTNrt2PgGEBEvbX2bE4oE4AA3G91V6Qwq34YySBGAynutMzkyeT1nsfSG6mkbXB7Rm1FBjXaW9GizT",
  "key41": "2XzR6hNkcyZT8M3pPmbZq5tK9yYPYU4cV1zeWR6aubPstwpbLG6vs5mLqwaQiJPDZzHWWNCwQ65xBB5vhivSJZqd",
  "key42": "3zJMDWzhfuM5QtLnimVLnoPtMKgMk3i5gdoK9qNwRT9BQReQhj1gj4YK1vzJrBpZywVw5aBBtwv51XrDfHbVoNvf",
  "key43": "4qtcGmojhzxkiFXhMJnMG4cvdGvkdjRy3ZzRhdpe3DE9nWNEDqLmDyARfU1ZdnazepnzZqgxQGRez2aWWgBHooEe",
  "key44": "jXewoC7nEc83qg6fuAwSUcU6HvtgXZHEm1q8JjRHUXZGHLyX1QhKz6JA4G2ztnmwfUWLHWN7Pm1dPFHZiUYQru4",
  "key45": "42tAL3JFnQMt5P4C2Mf4AFtwbbA9zVBTPDeRg2EdF38DnHqoqUW2hSNDGKvYHt8irUrakbAUURcA3xySB1pp3cbJ"
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
