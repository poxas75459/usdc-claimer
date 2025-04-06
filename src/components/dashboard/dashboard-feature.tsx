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
    "4sDFmGLbR3Ps6V1BKxBcHYN21U8ufBeyHUZJeWQVJgF2X3vHe2qgaYPfzSFxg2n5CQuevixe5aUZTNKMd6wnyVm7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YfDgZhef3B1MN6F3RmujyfMjsv89onhKwgo2tMxVP1WgPcLcfyPicGhGVTkgJWJT48m2QFGrrpmos4NszQvgrUA",
  "key1": "5sqkDjmf68Zvk3yor8UZkjuaHFpFdKPLsEdHVpyysoVgaRW142LoihV1ZcqhKd4o8WYo5B6C5b4djNjVoWpu14YV",
  "key2": "4rRkSTJHVY8W37jEtCVLzZY8K2b54MHRME8czP1UHyHHUUtnFH7rsYWC4JYWtBVdiQB6Ahw1GASLDqAMrHAh3svv",
  "key3": "4Gui5jw4rq9iA8KHu9gPQrVYyJK6PM9GgwXSNF3S9EXMxKuiG1W5QzJWwBhQM3G5d435ABaagxy4dsxkh4oGyXEu",
  "key4": "HWimTuedtJC2vR47HwjszA5BtabbCCBz4GcXt3aj5ysQVxe3fkMT53qhpbF6HkAUVuk4k1kzFf1Ve7J9szVtxx7",
  "key5": "4XW8JHKpF3qdLtH6vyrTUPYSsMFEeKVckGnFGhgzvE6Y93pmB8w5KuwHZKQAu8LdcGaBtt8JrKzCmXHjnF381t1P",
  "key6": "2ssQnvRDPZjjC9ieefh9nCAVFa5XihuUv6T8nRnLkBuBnS9evVZg2v3nLJmoSagGfQnYH3x7SyXy5UX4Nnr5LBtX",
  "key7": "LF83tPESVi6Bhz8u5uKP4NEvxTubSBPXstqsqRwqvLUvkk8h66BqRVh6EwsPYHY7Bft8QQMJBg4ehmT19mv2M6K",
  "key8": "5vX3YSxiZAbEZkdBXUU8wwjpf6xCToksnHWYwmPtYbxCdrZaY6jZUZtGmayDEG6GWBG5zdrvRtN4eBM5CwULyxsW",
  "key9": "4qNPf6RxX7Vg7kkM5pZsLeL3B71Sjx8h2svDCS9kNo2arKKEcizVeZ6facqh9BoVgBPqAkC2WQZCUxJTEQ98KD83",
  "key10": "4Qz7X63Q1wvibh7SPAGeZNX56VCVAae8C17Go4sGXTrQBZsBVgegRgrUfKMBg6HHVMEZEbsKZaz5pVJowjGn9i4X",
  "key11": "4cG6TdfWWtYYyQruoQsYdPNGfw2DaPzTG9wcmaa1yCotpeYFq5bdfwD6bcVSUksCfDEFNz5TFUHTNLkiPW3QmS2W",
  "key12": "5vWntGNTzLm1EYdgmdk4qonkGdMy3sgsPtHxsX2Xw8ZEJXBjHcgF24Jv5yZG1XqpW6Jvwn1RZ7GnXEoJkCK4XwDz",
  "key13": "2SMkQ7RDtejRNeqtiJ7aV78LRcVhzwuWzc13CVnpGYGtqdAfaCjE1KzVtmSCwiuvwuqhtcNj7hDku8exCfkQGqow",
  "key14": "456EW6yHYSKZXLUKC8Q59vqThQ3JFnXP7ftQXeWzJKYVXytKRSm395C16hLfqUcyYGTwkHMJPzvsxL9BpnJ3yz7V",
  "key15": "GN3fNZqDJZ5MVRxRCK4UKjAskyWB6cduyHBQTLTMVk4kJkHx796Ui2WPDPx31hn4AzWwjzLvXfxWWCUBv8E5oet",
  "key16": "3Wh8cgwcUbvv9GPQxAeqCYeuzxFbeaay9AJoZim8y3CFr5tyubw6Lw1hAGG4mD7CLBDbPmxKKqHQg6RTibK2u4A1",
  "key17": "3j7Z9JVMnDqZXp4haEHBkwthV9GvkJkmrxj7aZBhFp36oirRqAs24SzCQdKSnw8JzkHXfBPjkrEbiCfRuLJPH9Xz",
  "key18": "38C6dVjfTURvTLizFAEgqG7nQXQB29fEuNSiwC4z6CS7xqdYuwzoNJHDZnwueJtyRWDyY8kYQ9UesVkni5oHDqgp",
  "key19": "KzqPFiYESLpMBkfbXy1xkXrzWwAqgpn4DjkmZqg2AMkruNrNPaaM1nXCoMnz9Fmy74BM5wjYrJCnZLYQH4KWURK",
  "key20": "sfpTsVHVtbzqKUvG8cTojYvJC9NRTc266Nfi7u1JFAhNy4xknp6yDYE85A7iVLZxvfWa36T8TCFMjcaGFCjJgy2",
  "key21": "5aC8eHknqamPRgyJJMvAtp4xvVJ3iPfWAxRsrnthnGfLEsKMgGGGVaZewqNn39AWzF9gw9HZU89A1k3st7cAL29e",
  "key22": "63ELP35ULs42AA9Vu7n3mtGYWqUewGkpAhJCmkZCVo2GSNSPzZ7TQH9K2A8yDY4W23N18kwehZJbpdcbCXJqEiqD",
  "key23": "4DXmE36xUQJmmAuu3s37rpMnhieFMzT2so15GnkiFW9LC62YtmTyHUavoThuheQ3gXQYVPFFKzr8vKVbb2PeN3LW",
  "key24": "5z3GQfQsPhuVZBDiVjhgt3Sg6Ji2ySGuYR1TiqjH9MEQCVqfTVGJCoggNw6YHbD78dH83XjdFShPayUkTgP1Nnbe",
  "key25": "5U7FZGPRhad33edo7Ju83fa2zLkcaoc2NAdf3pPYdMuNcmtAcR457yjoiSKn9kMGd7u4wghDFXsAoCL6dFrr7c7C",
  "key26": "5UJzhFm6fPKJZkPGRUnoaLUgUa96iFoP4riC9p9zBgHFcfWoLBi4oUdYzx5rgGQFGboPwCAPUcz2DTG4kxBdUyHW",
  "key27": "5KqwifHtvxjrLQta6SmJwLNLSryLVjwTb3cZKTmw1M7sE3fExVyjFy5MniYo9kftVroctdipAaY2gB6Q7s6zM4LY",
  "key28": "43fuqpUhM8ugtcKNu8mKADfmk6R7gHszHS79c4ZHJ4y2igfFxitEypzu6fMtDpUF2NyH6Mp4xp7kenftjS9aoYVE",
  "key29": "4XYL4DXNEw6jmJ3Upe7AZeho9btxVa81gMAFXwfTBcn2JXHkjydFnCgB2sS4acSmRL2RaPf2KovZGryJk8GuETFy",
  "key30": "4Egm7pgaD5FpvapaqJLT6QnV3m6gBN6usCZXoRiqDqbeR5f7x2bu1XxyTbG1mwJ1m3wdhWYi8Y1UWDEcVjrtF62G",
  "key31": "Mk8oehubyZiAEDtSMeHZ9q9e4EEUrNUs92Q8PxEH3QRWimHkdNUkeUuztbvBqq4GBXoPLj4ftpPBFL8QhTd5E6i",
  "key32": "2MS8TALbqQ9SHR5QVqskbbPvi2gMXfKwQULYVMyhAkzxQCKL1V3B81CoYqgNyuiB7FCyVgWABUuD5JfdXeJSHNnw",
  "key33": "24KMzjwjh3cidHSUUBFJrRFFrGDpMWaczfRLRAkamGsSLzpMZ1S2joDxWv4S6FU5eBJkYQ2FibdRm346axVf4QK8",
  "key34": "P7rmEEkR8t1Tre3GkRgdfvJAX46jSESFhrMCqgaNhNmzcPm2ncbvpnHEzCueJV8LACM393wvPDnWPUgQioypXrP",
  "key35": "5wPSmD7aSFqngWaGtfXp7cFyfUm1sdNp5RPaafPngzmwamU8XWwp17eG6fCqnUdAEpg7JGJKz6gwMr4FLsPsqSF5",
  "key36": "o2WV3TwETCCTDyPKJeM5xzE16Yqa1HDhZB3oTp5FJCSmJMDfMTQqqdpSnM9i4hQeEJbd6tKq6Kwdj6zXUVixeub",
  "key37": "5c9BxF6zPTVz321mpodrPsL3z4jkfnWGoA7wEn2Lu6XK9qnMnJ95RF6jGyZBSVhLSaHmyqMFSxRwxmxvf9U3Wqr2",
  "key38": "4UdKtVkrof5PyJM3cezXrdkpAQNNB9XfDYNVMVonfgM7KuXkxrx2YQmh8ij4KcunSbGYNg5H1xp6dgX4MpGXhbTW",
  "key39": "2CjmZ3yF8cwBqVEbjoe5ifMrxTDBXspmSekP7Araoy8uH8eP7Dg5anooT4doVLsoVv4iYawZ2CCw9eokwa4Wy52T",
  "key40": "4sP586ZjySGasmRQzoSmonjCzNSMLLNCHGmjNhdd8o9xK4iBuBpa6YjZnbKAm8fef96Jpqi2zRRQswYiS45ZrKTf",
  "key41": "3SwNfucq3annFC26EX6EAc4MEsBumpAzNSZiBmpPyryWtSUxjnpy8kNT2525thFFtAND9yoNPwU918QurCPTH3bK"
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
