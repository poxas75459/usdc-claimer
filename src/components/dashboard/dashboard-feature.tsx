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
    "4AAg9WgPmzHsp7i2QjrUzVPgSvMSZ5mMkX8EiKwKLLHqFgcJr6yPfPVQqth93tkpRjAAXmiSEta2qoR5WPdr3bRp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tjkxKKUPofj7pEaiUymGPB68dUYBUuQc3kGcGm8G9pDqQeXJRJkc1vpmzjSiptrhftZTWdvQKrRSybCnfm8zTmY",
  "key1": "5vX47iD6C6JT4RvgHvUgww5y8Ho5UwJe18BYJAoBs45wdVE7DCRkNfaCN9aR1STAwqg8cN9RTmUyAy6f7aBePwDL",
  "key2": "FQFJATESGxRJEM5AEJZEJtvnbEggvWhRfDm77yAhhMx9EhrXjDv1qtaczYkJdPV5W3K8QcEUKS7FpY8vhnjdKNf",
  "key3": "4kziSix9DztHy88RV6DFJ2QunFQVS6H7rqvM1DoCeVAUa17Kuz8qz1yzbTEX45yjWoymymNXuGEUPsUzUgEBEagP",
  "key4": "3MmfubfPuvWuDnW8dZGUqEWxwRj9MVGEnFhenJ1erbJvgAiNAh7zme1PrqHgS6Q8dhdUyvd6FRnysqsELhmfDQ24",
  "key5": "5tXciwHM7vd5CNMCATJDVDHRmnaNwYjExz1VNvENTidYM8hJk6SgwMrfu3QtKamRXB8hSMZdpqYfHKJNxdhUr7vL",
  "key6": "86X7bCwn4pgesFDMQCVfWJq2b1yhGE71kj5WP5mJRVhfiQkexoG2Z5TF5nL7QBRb4CpDbh9i5vPGcTzHK6BbLH8",
  "key7": "5S5NmaBa5KPa77MFLYsGLHVWbhwdDsFu5Phb9Ys2oPBpTrej6sLMHMPr5NPpkV9b4LwMdqUw5RkwLrY6dMEgmeRs",
  "key8": "M7AYZ1u2aDN3y1m1XzGnqiVxPFbBbUrf1DXidnd9TZhazmwYPmUcmf3tRhEs5oATNVGf1jyYTJRiuknp7gZP1Nd",
  "key9": "5oXfSuUTYPpehrRwhLDMfHugXAvd2rwrZSANF7qrC7d5cgTza77vLHWmRaq8X7i2ZGJ8Mybjg2x5s5BDDzWWbhYu",
  "key10": "56rUaKvkB14moQUYRT6JiGcjHsb2az5qUaRVJYgtWx5haot3iAPsCfbFp52tFeZaNJiRmMkfZp9z4btMkv8jFG7V",
  "key11": "5Kjrd7c4jju6fS2JrM4ffjh33S6s43LVXn5hxF8Gfm6fEXoKN89kKVdCrViC1DP9iyR1GMkk5QBYxNSVABPnNNsS",
  "key12": "4L8FbskXX5GF9RtC4mFHNgD6DRJu7mewgFCs6AMk2zQMzafBYnvPT9huEB9kkc4RGiKPqyeo2rjLUyzpjQcX1P2r",
  "key13": "62TunnMoSw4iBvLTdfJDVGd6TzA7rAUJ8f3VLWcqKxZtMaCDfTi5aqFccSv7UbBbJwuU7U2nRCz686ZCcW1vGJkY",
  "key14": "5fmQytUZejrpjv1jA6F3q54NGyM3ptHNx6RRqRbBjZW9kNXL8VeCcTBkcN3cKJWgj3Z2auJaCHNhM8SLwW2XRXFv",
  "key15": "66ads8tcS5JyNZ2adZCpWBefc7qLKww3YPWsg4Y5pXywRf8cutyo2KRDuBPgEK7mZVGWEhbk7Dq6PnDQS8mkZ38s",
  "key16": "5Kw57QMB6koWv61M6YBqkFCjQporUqbRoHc6pjq1otKSEPWPAHhC5Vbi6VYxob2YvK2BErCD19Zf6tZr7tsqJxFP",
  "key17": "21wFpHdC7Fb3gRVRipVax6Hb6sPgh963C9x4K6WUT7A5qCie1MPhM2xtjx3JfRkcijNKyaGLWB2TUysZ51edBYG1",
  "key18": "5bKVtUd3VjX9nLhKX44NuFvVeuD9gSzqjW6LPuktjqde2HgJQSqmVQTp4kEGBBtGERgeZaV6h24rsU5qyfZ3gqCX",
  "key19": "grpiznofjouN9PiwDwmFaVqBAS5NbrP75sFDpJdpwDmCXJ4WyrncLJN54GWi4VBNy1tnFnNheZWGbxLf8WnMQWt",
  "key20": "5QAGdKKb8njssFJrT2uoeKEDGrXD7tSuMg8iozZy8xddGNbh9yGu1bV3mC3hLnpWWvniwnN1z5C2BdNUcGUcdfE",
  "key21": "58unfcnncUQXu8zn99W7NgLmVkzsEL9ngUzGjtYvsmth4dS568pt3twPrzYa7HwWXkR6FifNWpRMUDpUX5GaHnf7",
  "key22": "4P5Z8TZ1wdcyDYkWCpmGMiHvBKZz9dyazWCQaB1uq3x36WkfDEReqW2YnhAJGzrvWzrG6KzsVUKHWmKfYoGMqC7t",
  "key23": "3XgaXBKQeGubCGN1YrPfuWbfkMoVYL3j974xHrhWHFKQa9wDG2KKXkFes93mAMQoia5q9GE3j71u1Z8GYWnAd5mz",
  "key24": "4obinJJJUHHe9AwsgoXvWhzhaVSHQr8XhRvakpNcJrZB4veZvCohy6P7tnra7jTcGZh9XbNnRwodv6UJ8jxDaKLW",
  "key25": "3A2YkCWrnrF4abm3y7SooZ9yUwYd4YHW3i3wj1tt7s2dJBYaCLDBiR84oR1aCQ4eGT7TtN6ho2pUbuyYL6aEoJ8R",
  "key26": "65dBGyaPVge7ye1qupbWvNz1TgXE5ZhrmdDFqUjRX8v6jbbNRfAAxd33KTjBMQiFRbY7K5rj5Jpn67iyzE1hgz1Q",
  "key27": "5YCdJoFUB8P5UvBxRA82XCjKLmhU5WVKzoEJSNSRit9yuPukKfgC8GbW4g4xkuPf7cYrc6GAhG36rs8E6w83cdSA",
  "key28": "5hJsCQPN3iD2Poq8nmFxZWYH2dpMYcmNFumiUmeAq9XLhxxakkm3Ufs4rTNbZLW9Q7qytqJso2U1NGqoTYMvku7N",
  "key29": "3cJUUdNcBCKNBL3BLXb3zXcarNQ1UiGHQZMtbxJoHtv7egbx4Lq1VNqR8GYSxBctFsMwf3ZxPcFLubMdU2yxf4tB",
  "key30": "5WkPtgkiEVdiqLRq7cowPN6BqiShGMNgZKMtkZ1S7bH73wUnXqX8BSygWRFqDB7fMaJMUhVgMzDC6A77RLuiNR9y",
  "key31": "5J3jmTw2N7me3cYKLwGMdMoggmtzvyg6eeMgvv311uer5W5WzGjieLHQetthEWoJLzPAnzLozCvhnEQyvrf4ND79",
  "key32": "4yNPuZpeBmhexr17xC2s2KvwxVkmR4UBnRq1XjGs321agnh6CdNPWjCcQnpN124sngL3HXwvaZxVdiJeGdVkg6VE",
  "key33": "2At2CAmQqWkFRBwXWuEnrjFqxNftaJdfQRtVvqgQgnPKoVkDzSacBAJSrg5TCX9djESardVhPWjXSfCicpiDqkcT",
  "key34": "5jquKFeu7vfBnvsT3KjGVkvgHF4rAqPnjrRdeCU1PCCqG5DSVidgDp4NTpKri8UY86vaTPqBhFd35YTK9TpZvfoc"
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
