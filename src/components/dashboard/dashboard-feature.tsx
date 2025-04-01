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
    "3U6kvcV4AZwBzhCyJcHMPwrjswvyGWyQDHmeNkUJkCXzn5R88kV32Q8iqTXMGquJiJejo9D5Aoopn6iGk1R3pdVn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25CR3t17WzV38pGo5QV9EpzrY9S14roqvrZ5nHwZj64rjgLga5jiAUyZ6j7jWQxwtCxz6aorzb2mnzvM32JxixZL",
  "key1": "4BHQShN55uAr6pRDix1oEiwYzaub6G1FZpcn6gsUPSnY2MCrP6d33rDenoqCK4C67r1NHfvYuRtXbxgxVQHZQmwX",
  "key2": "21j8HoacA45ExxUnNnxN4rKaAztVEASiNZWLTvAYoCJrRo8YcYSXNnFM96f64CMpfvDh8uzq4wVUwvejhEEpwtWJ",
  "key3": "2bWCsvgQxfShHymyburnfvYv6b4CuuTe5i4L6coP23MnPxzw9xdoi1tBaXbbkuYowog6UJ4J7cikZguTHknrfYgW",
  "key4": "4WpeKYgEzr7qpJNWVLsn6GdfX2ctgr7xjG2gJYc7TMZxsQmURVcXGtuu1dw9pst9yL6RjuoJGK1uoxAPmkPdYCfZ",
  "key5": "bowoLB8vziFgEtwF4YstuqfV5Fx9as7q2btLWEPRWRY59hCrosPgGyvgzRkm38ojjSGtpYLMePL3Z7UFnyGsNGX",
  "key6": "5jM2g3PGxK1AvizJN8rDNVbDTnKtwQjBk8JMvVfziTHWV6JvSjnjug4ZUagSLDCZK6Ua7cXBT3NeCdkUEcAfMgHA",
  "key7": "2v4kiLrCTogzi41CtwrUpF3pUqvVcWN7fKwBLBTepPXDLPSH4r5frm6sdj5dZbyTpZ7CjHt4rBL7GURewhHgVcwk",
  "key8": "4J9GSRtbQHJxvKZmk1aJfCzg8x2CCvKgRa57aTNyE1rXk8pgxYjNyJmpVkNCGmgutJNoNrn71uazRW7yF7uP8Ref",
  "key9": "3fpx6jrLjNfFUMiwkEUtSQWf6nYKYuGf3Jjbca8BnRfpzJ169v6yAVh4WpWRdf3FnRJPd4uEDqKkhQjd5hmhaZcE",
  "key10": "6htbhSmQFTaaRMVnBdRxkK3U3XVsDrg7j9GvKXSGHFM2r2G7tCUkyazhBt3Cz18sadcWGRFwzE4HNP1TV9kuK2h",
  "key11": "2FZGXSgcECXYMoiS7y1yzudzvLSzjPEnrpBGW1yeyZUybibaicKEwGb6A5oXDCBoHYPQrmbL2RGoM5NvzZBKxug6",
  "key12": "3RGvYBWog9sDdgSRBEEoq9c5D8NJdof7VPuDpdoJ4oHEN4s2ZtAz6p9CLFMrLgxYwaVZe7E5JNnXX8tSsvpc8R4d",
  "key13": "2YF9An4e8UnoSUEhtbVCGft8C1QNpi6dmk2kWP76ihtG44Rw2M1nSY6dN1F7SVhpq3JbPN3eiFzT3ed8zNgupxiq",
  "key14": "5iFboGv8JDzTaUxye311dMbDCGtuemaGotv1yTuw3N9TY8M3JGi9THfZvYQEoCWBiKydKZS42vENBm6xMGenGJji",
  "key15": "2USTvVYACrb46pN2ym3rJ2XYePoMJpWFhWxFy496mQQs2C7NN54EvkjxHAapDmdZQGRehwTPiosFLXEtNfjGLQYo",
  "key16": "62NpZ39tjHc2eXpNweaB95U6kJNguq6cC2TvuQ7X9Q2sEtfDntNnkL46m6yKcDYv5MDLgUgDDiErfaQu35J1832R",
  "key17": "5ddpYSAwcYCADbSgmmM51Vdomgn5VngzfgwcZkrWRsp1QPj2SPBapubEKNUTYKcZWReSShQbrZVAwUYqRS5KGcJz",
  "key18": "4YwNFbzNw2iH7xENq6MkxPHoTD6QQfUdEyA6vx76gXNy4CtqhwznmcMcwexr2ihch1fheTPR5pX2EXCrhZD35pj4",
  "key19": "4CB4qx47FEp3V42DKgi34AfvrhFQ7zisCqkhZHggC418yFp1h1ei3oz7CRbuZMXQPYSvcstjvvSkc98dkvvqWJWQ",
  "key20": "4iETUQVeozzrqScakuMMe2g9LJbSX12qiCXFzCPoqEhgTCkNSR1f6S25g7Uf7Md6Bj9e1RRT6i4vtMf3z6MnjvVv",
  "key21": "3uR356Jf6KNDxbskSaseYWf6noFPHN1NZ1KvoyDKQGXPsNGZENxbE6PJXZ277gfL4d2eg53gqoifQg3Jsxo4nHNW",
  "key22": "7MhwxhN5mgMYhqmJwRSjQ3SbHjxj12AedJ6VLk1kxJBVJNoWt9kWBtjAH1pPYHRQZWeJQ8Zu6W825BRj6J8uqMn",
  "key23": "3EKwvPNv1m9Y1aLHw3hCPFzBwBoMroXyMuKb1UzAjsNzprL6bo3fiVVKsh6THjUuySupBRNC9DY2kpmT8x1uFKub",
  "key24": "4vuz17g4vC3j5Wd4am6en1fMEixqpekReaviE2TSWjgqu14bDpmGqBV2oQjUmDGxY1wGpCektHxXPrc79g8jw5zS",
  "key25": "4L1RoMceYe3y65mqqUg3oEiLZi1NWXME31FyQ28TYzWQ7z8WacHf1LJxhy42zbrtzGjqbLkTB4zKtu4KrPPH7aFC",
  "key26": "hvaqCSGwtCcaVK7LhNzcnh1WeBcxDD6QVQLjy1aUDaBTncG8p8YpUodotAacE9ruiA5XevnDxL428aNSFyrD6Xz",
  "key27": "4vsYQNvg3QXZPdPbnjrLLooMKFqHx7GBkPjGVpDY1gSw4DeBg4hcpx7wfYpuqWtVKwQncp5ume6H9wyyRuCDoaam",
  "key28": "jZ3QP2QcRhT1ZnitJCjcNLGFkjXzRfHeYFcCiUVzdLhbQQvHxhgphku8NFSiH3LNiBEUESSQ8m76M5e66KAnfb1",
  "key29": "QSRuZpv9xyitutoq4uuTT5bKKzwNPJ6gTSJPcoY23NMoY79yxpRDGNKD7oAKo8EwZUpkPZbjQWftgYS8Phxq5ws",
  "key30": "KRwWH9WSRvxqXtp4Si5KJDa8XXSCiLt5AM8ji6JKAp3QhTRi5JevhymiFmaPFn6xz3x3qgVJ93w6KAFx8zJLG2E",
  "key31": "4rXAtb2NHTLpAU7ByAyDjjPoQK3U6ZnwcMd3YDDigUGbSL5wPYacYz45qzqm8jYhZ2hpGtLXcXDkSchHRD5pVwPZ",
  "key32": "4UNZieyxon6uy4Bxa7jvtCFqZSYY7AJjPhnityCYSr5JvzE6xNd7bbN5p7oe7296cjDCA7tMKEnm8Kwd62FAmbdX",
  "key33": "rovae92TpxQxUySvtUka1qcPYn2uYgQ8qaYatVA8hDgLuSJeqHrLQYGVYYrffs1CFjiqU94yFz1usxCT4UQteXj",
  "key34": "28zAFL3cuAWthy9JZfKau9iXHGNXxH7N9x58tRXRayBBJhipF6bdohhKqPSAr4mxbWrDuF3LZErEfo9gACDTnzcZ",
  "key35": "5iiqnRsSEn1UoohSeLzNMWAkmLyuxKByV9jmJT6Jdhb1M59H25b9KKtdGu2nTPHKriNozwJ7tZ9MrUDEeatUWNL3",
  "key36": "5xsMYQhPaDNjmtxhFM9NzSweashkdYoApzDyj9hAAHFuZEqJPbUjECr3seRLENtJj9SK7D56cKY2fria4ckDFkXV",
  "key37": "JDnuobmKDotkRGvoWer2csvFCrJpD7tvg1Nxp1fHuxkUVbd5uN6SRth7aGUzCt3C2VHpBPuC5fKqpGYMw8iQLF5",
  "key38": "4njTvkhb7hLxamR9PgPcZ9RJZf3cYVg16Gw2xHWcUmjgUFUbjVTPhnpyExCwP3vncTsey5BB4cD8keEAzETgnbds"
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
