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
    "5ZzZsutEsj752Nu1rkFfXnfHEg6tsDVRMCGiza3dxLw9bPKuCpKqXtLaEYFvdvkCvUpnk61mJnKnHJP57w5jd7Cf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wXNVMBN3ybJzL3RvY82kmkbXouTMSS5E6zJ924jGr2Z69Vb2xwN2EMKFnTrqwV7RXuv4GDmruUCmZDj2N1Hc4cc",
  "key1": "3J2tFr4HKak7kxm285g9WMBKQ4nbfA2o1rrjQ6urE24CYUVvMrXHGw61fufyRtfbgStNfqbup4BjBxXNDZbjvHto",
  "key2": "5VL2xJR3hTdQ1UDFz6gzoudNetqzYYdNLfbZfijGStFoandexCtXRSbhVS4SWtZNFNGuYqSqYRaL4fmAvVtsmLqz",
  "key3": "3fppDheLZBem9NhPWV2zqgM4jLN7deeLF2crz4x42m17FL217R33SsM7fYdgS66kgh4wSrDvQZYsyta9xYLg3oG8",
  "key4": "5xH1nzQXXE58HF1ZJQXCru5CvWDX1gZeADCt9ePahGpDxS8NUUqwhPaxHXkzf1wyL9tanL6QTm7pCRY9qYN6y1ez",
  "key5": "4LULaba8krLKxQW6SjXuvVXaYQkX8mngNbTwDxTwtD7r3tcJ53FrQsiZv8fpXJR8RkDUTDdh7PZCXV1e7sRyPXkH",
  "key6": "2Tw7XX4d6UDfBDxuQbnagZa5e2o56gb3ZZtSnFkq6JkihjaLUqhhdNfFND48yxYhUQzYf8gu81hVALT5aVKzdwKa",
  "key7": "4wiaaQv6gxQYy57fhxszhSBTczSGnbXzPmrz16ABAyuFgkkTbgAoLoPCWVkVKDvJTzY3BBy4aJrQ5D6kgyDudft6",
  "key8": "2AUAMP2GzfkRoMDoXNt5E6YgfGQcXrd9GL7d9S4TRytA91gXJMdBqCujBtHcY2tPx34dUKvMYS1uEh5yGonqinK5",
  "key9": "2cheMqBCnCJLijoZRz3Zb1tbipqLb365pWYBbpkVeqrXVtcbLnA8xjs99spXC9U1hrkSfLUWiDLSobUyE57bzsmX",
  "key10": "4SKPX6abgM44pCmmjmapXDkhm7nN8nrwHN66PNhQppmUnfxWFaBU79Ex91grsZMiLHVh9d9N8V3o9jsWDNKrSxiJ",
  "key11": "BXh6LRNaBusfMtHkuR68crHeSCbNW9pP2JFjRsPCL1gAmWLYGpj4kSkuL8PKMLqHPGH6mbqKJoAm8SSg1bfSThR",
  "key12": "5vgfLpKfv8ULNZsiW83F3UkSeP1b3Eerr8E8K5gxYY4LCYh45ivJwCvmJUW88jSTNLmZzKtQqLfGsbMnJHcHoPqU",
  "key13": "eLmV3N9Xx561Pax7A4SLCjJ8yyV2M9T7WiyoKgvdNoJXzaBmE6wojcKYUV9BtLThPP3yswLWFe1HCRH31obz1xo",
  "key14": "5FouXpgQCXwmr19gNxG7KqoC26wk5k5J3VE1QyQ8b7VtFvTQFLywxs6p1WoCdb9UxdcZxu7uwkd5gp4rWhSgeYsk",
  "key15": "2tqQgoaVHZJ4AwiE3Hik8wBireffTdsYi3gNBrMZw9AAFgX8ZcCHGcvZ8VuD5u4WeGFQAnYKTDg3vJ9XmtYDZP62",
  "key16": "49qnxXgJTDvjBfmoyEKNLhjnUjQU7dnmr4pcRncvfn2gkF6nsBwjaeFBfnhDXFkFYXcHY8eboMwmzEWoCuVfaeYD",
  "key17": "4DXj1vGUrpiGrYtrahL5WLp7NNPWiE9EWm3hhP8gXcSZYms6BWCurE4t78WV37Xw5UD2hBYavKe9Pp7xZ1V2NzP2",
  "key18": "3zagwj84qS1FzwkJv8MzHshgcfCKGe3cD4BJ1yJzs5ijHxDauq4tMvLXXSsfvnHtcgATfaPdiUc3gtzTWstaApaT",
  "key19": "4qsLEMPKb1Jzw5wjLVAbm63naqdw4Pz6DmKtbksuAvmisRnTDQjnN32EYBd883Cv8hKDoUttr1MfaxzZSUkCfv9t",
  "key20": "5H6kw9bMgFN865WXHFF5DUdNQq2KrNeZn6iRAj5Lf2uD1cWfniSLYR9nJsJQhftpgUbUTbNyaoqjvDevAaRGsYhZ",
  "key21": "5US7uiur8w7nDz3mutnZm6UTtcfzYfvYGR6QccyTPdkwzAb7fQeZe8Z53PagM17YHsXHh6R5LEBGamqzBsit91e1",
  "key22": "38rgRnJDkSaASYMfYM5x9iE2Zn8Qv421qx6qT8FwM3LHYEuoUaeR1CECPFYaZSriYhNp39YunTW3BKqoaMRtbSwa",
  "key23": "aw8dZzjkAufdxQMHR19wVvNwb5FHekvRuHwkwUsXXeSjvYtk9q79vug1QrMYrQc6HWgYqpvYcUbFQpNtM8o6dgK",
  "key24": "4mTfmbc8uiVfFJuGi5dj2TG4DDwg62kLZasAGRQWg6f5thv2HRgsL3TC7s16yQjYURsp7HEZkxNttSVVrw6YzJEo",
  "key25": "5fRuBArFSb2GihpBgsX8uNrHe3E7sU6VbhpWGr89Wc3xMuQFbZAQHvBjmTSdnWhBPsQdvEi2CvzyuddVcyVRc4X9",
  "key26": "GUPmTyvfhxcBSmr9WoWbxJDdfPQ3PGSZfc3p6u4xDZqdbj3jHdnMjysfrhSvuecetexo7vs3XSNrszdb9jhH7nT",
  "key27": "pKrcg8SzxBy8MZLuN6F3m54LvU6aBgxbhBh4t4xfvuHEofkW52FqvegwJddRSKDzCzzAqYKejsnWvbLzMDvmqte",
  "key28": "2dUfANB6Yy74BbD2jKuE74RQfUgbRLdFa8dXxNDURtgNQKJWncYQdWCQkXA3AfuDwcfvweGVqUc38FUQJmRCrwDb",
  "key29": "3qfZQkBK2HyFZ1Z2x4XHzKfZmKNMhZaTwfcrNmeNLWECAJ9ZAnf8iMx5oAfn4sAte5kPkGc6gv38mX9ZwbzeuCav",
  "key30": "5Du5WbUKH9ueNA189yUmmDHJP5rJozhfTc4ysgADFGfh1M42LgDKXAEdtTnzECeofDK9dC5wexrAGXkPvJSUEhry",
  "key31": "vSsAbHEsppScdKcfS4AcwSkzQjM52eXuWCUE8tpLya9nFa74DC9Ztbq7iL9WTjSwQXV3GU1RkmzHk6cU6MWyXtj",
  "key32": "5wQLBPuACk4zfgpdXnP7LmpW57zLoEiBDCExZtzu8dxdML6c4v9ayr57M5NZzbg42uNZx2fteZrqdE4PyVthjDQf",
  "key33": "CQxXgdQi3N5BrPH8mupyzMA9FZRwEPy6uxYeBuK4cfxKAFP2JptP2NryVD7GnYH9rK7WDueju45xmWGZQjJypAk",
  "key34": "DSMa5ieo6aV6sRyP4ZcU8qewdrjntqpHQqLFTv4iZMA3rQQkigfXAZw3bg4Y4zWre8UvVkdeR6ax5a2T9zVEmuv"
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
