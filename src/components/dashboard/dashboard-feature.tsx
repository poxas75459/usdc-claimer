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
    "5262nGNHNBcnqKiv4enWPQaCwbVwxvC94xnSs5mdCcChHDELioSMzjFMy18FGVfjq2191EbdtXmaMjAA3qHCWRqz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G5TMYpsT8u9r2dwC9PQM4xsiUwKgZUn3ASjpvfqttx96tDREJQ8kPfJHsRQbgzdKrUf1C4SU7AHYMwoqDmAGZxk",
  "key1": "zZdkCDESQQqemCapDgmE1Ly3RhkDTzKFERLLHH6J4hE4ugmW6Nq96RGdpRRXh73T5pRxxbqP4v3ofmX2MfahhUW",
  "key2": "3EFxL6ez6PDk83Xj7L7s1Tuypm1YR6iAapY2hxFeu4aRu7dopcgi3Pk7rEgLssq7onwAV7f6PivTLAvvZMUGAwTf",
  "key3": "jE7NyM6xT8DhR5vTWbRzEuDhi6qiW1KgYmN6HUEXXHsj8V5YW78bXN7PbzvVbZehSfCLYKMwAi4Msb5fuoPDqEh",
  "key4": "SvArTayMX7RHU23h2fP5698sFpadQvYY6RzeHeteM4R8k4T92XLJKrZoLa4R5PMMJse4HnwcVtgfGd5H4NXCvS7",
  "key5": "5qfRFFXPMdiEczCS3k591srsSiMjLtJsKYMFAHi3GfjJm1FcqeA9GLe1kvqjdAwSngMspYDJHb96vP6wYb9BYAV8",
  "key6": "Yb8ru5JjvzeDtW8pRwrrwpDtKEcSbpUy6ht8EKy8EyffzcZDq7gRQgjLi92yd6WvRvE3z5NpL7oEgFt3MtqwW6c",
  "key7": "3XBTfJzXwvrtW8i39NhWoWxkwZqS1eJ5K76hJ5AbeSAg69YGYdkDqYoCd1r8okkD8rtm97j75po5HbbqNLyqJrFV",
  "key8": "4e1u3uPkKfxkZ65CmbGZgYoPTGhjj9wDR5au8j8LHaXv1MJqRQ5XXBRjAa8MqzzVw6ArSWiZPQwq5qN8hD2JEVHy",
  "key9": "3SjwNEVKvBCGRxBVgv7RAp5MYS9pugLvqVwR7n3TTBfARhuGvWmMh74sHTPgX2qe6XpYF7mT9JJYB3AunTwTqDFz",
  "key10": "ViqtJMn8KqaoUYhVuRMHbo6nRJEUiDsTMQq8Ws8fC5CURZnu8g6d49gBuSGYouZZ4sBGmRGdNCWHx2MahgfimFc",
  "key11": "syRrqzSeKBLSffawEK9JsEGEJ1KreNqaryZsYDxDYwK5qzMxPMJoSN7RsyBmwNHFVZXcmDeqNodSyCXHpB9STjN",
  "key12": "4i4TEsekH2fbq3Ytwrb9sLSmWQzDuMBR2oLjJ6kpcyWvUaatomL4nuZn27HqwtCrXBHr4nHfUMR6B2S9zxU8hBU9",
  "key13": "3he7hAbgqSnSAFqTBAskf7ybbNPWVJChRn95KxkdU9ttdyXyFqCC6paNG6FVN7WS5JYb1UBCo9DfFF39aQDrBMQo",
  "key14": "2ZRuRW9XJzzmk7oiCFMzsbP22vuWAFcFmmi4TK6R2ehzu9BaBoNZSkTuPqh3tkgzFdkZsSfoVbe2AxB9pRLLcdTY",
  "key15": "5baB1CQTKvfEgM9Wv54o2VkLh6KL9RGNdCExgaVUby4Ah19dwPDVp8E1JdRfmHrBrWwF9hUVagWEvZGdaVZkw8JV",
  "key16": "53iHcRFCXzF2n8Kjv6mCyeY4YMB9ZDHzoVFXWieiMejPBCFS4ThaL77B3CamD1ER7C3WmGRYYyFW5UkBAkcCxEnH",
  "key17": "57ewgrEsUi6FTEY8RLmMYZyoKHFy2s4YUJbR8VMasHNJqnS3v7ez6rhVPVZcgWKtvFhU3uHPzBNXTZTsYZfGbvT",
  "key18": "4Karbg7EjLL4uPBM6SpDy5uG5YdVmmnE7LwTdmQuhURAPhwvQwEDCrwaceuaRhopzFFRqmcV1wRgqXCrjHaSffEi",
  "key19": "26vCuYYGFexNAtb1DkMyaHbKYmFDjY1Djz4zHf6Dc8pZrfkBjQyiaJ6bQgQN9tPQvYEnYeEucN5snsNV8vgfFA38",
  "key20": "4FtxDaeCWDQcLz24rB6QvU1YxtoqaBEW8ZQiWZkmhmb65HpDYqQr2ShHrSN58GamEJY1QXaF9bMG6q7RDED4hGfo",
  "key21": "5CcUfzxzc21HayVKSobe77VBUWUzyE79KWaNAYesqkkYRaSm5Km5aWoHSyFqmuGLoTWuUYvXTkynUq7eecmc9UKL",
  "key22": "5mxezpjUUutWnwPNWHRu8Rix5pZe3tRauuht7u7gTrq3gDMRCinH76W6aqfQMXGoiNjEbXuYkeSLU5imUFsHeTUJ",
  "key23": "3ABrbmYvxyRrXsVN3uAbdLtiY1qA8iZKAi2uuiDeob9LgiGSjMUXyUpRFAsiiAkLseo1ULLrQY5Tz1xLZHRSYgXQ",
  "key24": "5FUsW5S3CbHkfVAATWbUaXDrtZav5yx2xwvy8wPxSuJFK2vWeSWW2cLiFgWZdS6kt92NVg9EBrK3yMLSYZioAnyy",
  "key25": "61p3NuUtbDabTvrfDSpBgxKdf4XwVDLDaNBc5GXUKofMW1wKhCXcnQH6Y5rdrf9PZHw7DhfZUoaVhd9SzVVn1U6u",
  "key26": "3RxDcQvwMwBJ33wCLrAwTHpm9SBUfQ9bv35g7L4oAVAymBgMHAh48LBXPLrKCRr1hVCPksR6uuWVfJiytPP49HpW",
  "key27": "4q6cYa4TmCvj5mbbm4ycau1efoKctxbg3CHcDEvmxDnXXhLx9Aua2jLps32vPD1uZPetpFpmbwhAU1ZrYoCsRXS3",
  "key28": "4WX3ng6dnrEszhCQbFBxVzZyxJUDGBS4HQmRsqHq8jgKWAQaV1P4ywnubSqiaRWeYD9dNQZkgT1PwejqP6c9NMgF",
  "key29": "2sVQx3gsPeydREo3eEpVpQnbDxs3AyMF7rNW7GRFNn4Rx6xousszATVqTVfAPEvKYuMd5cJCSiKbba3zcAp6TxX2",
  "key30": "4rqkuZq4WsUAi1CPzDF2DPX9WxFnpy6DdTVvKVSbri6GZrgxczqHq1f9ssLZGMktQvdudCm2GMDsLAgTV4C26z7R",
  "key31": "5GFkV96NMKPhoP41dbLwei7S1FqwebAQfmU8sfCUpxPyZQgAAYZPP2sVmvZ5GQoNbvRks8q4q6QzJkrg7kNJHFnG",
  "key32": "57AZ5FTssauNYsA9wVuZDMGFacHUkVSpRvFpL1fqq5AdZqgv2Ya9Ta3N2w38fqs51QyUfeCLbuQYbJFtFi8fW2sm",
  "key33": "4cDChP1Smp5PiepyRSpxCD19aDb8eLK9wxUhS5CaBfG1XcZ7ymBzuPGKqLQjwYmfF2nGqjRzT6CYdCR85NW4kfGU"
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
