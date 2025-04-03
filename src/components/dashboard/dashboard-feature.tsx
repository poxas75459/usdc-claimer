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
    "R7tGjHTLSmjjr7sLiuJhPzAywyin8ZSYiBQpPpS6vUWUkPxBYxhbnubhkGVcyPjcyBb1NoScZ8G3P69Ce7DXyVL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ymiQboBvh2RctdUmTW7HHLv75LRnb3mS8xYFuo6zo7eeRVp1iSCoxFgsf4L8hvPRUDMtHeNx5ZuqZRWWdZ2Ckcq",
  "key1": "2V9M9HHtQvEHg61HRpMLLdLts9e3q9iDC1eqZqPdkXcCzLotbMJ5fQ2pk5ckETiE4xKz2VWUdGYQEV4n5X21W8ra",
  "key2": "XouUHHxNUo4YnsGDcTpXe44knZfUmiyi43F2NQ6xxyqL3fBU8uPkhWKKwfCZxCQUYWLqftvNDdsSzVYuroPDowv",
  "key3": "5853YYNKBS5Xj1ty8r6MSiWeuU46esFxohoJpSnPPTNi6RE7zPwCHQC67mbLsxNoVWKpSqSs9riEVW2PMSUNpgrm",
  "key4": "4Xw7dDdCXAfaTYDJo5KcfHP89NTCV5CZHeSPUg2oSAUp7d8x6dGouRANoiNaeEa3XSXvWm6cgCxNFU6zX5MXshan",
  "key5": "3aktDaNeTcfHBYHENpdWPqZaTqxrtTaRsXT8fqfk5gcvJryh5fGWasf1bLQbLAeWNQ84UcEPTGbRQkfVyByvvMHR",
  "key6": "5yK8zVCYFXaAwkxEiMRjTiYYSSzbkcMej8ic5QyeJZq1pMg9KBAg7XH2KZyqwCcKQipCuQmzCSQgkZ6woyB9coqU",
  "key7": "wGHG7MgEExmEapgYZyH7qK2ivjGyyohSrv9kDFta1zuZXLiAhvS79hY7bHe7hgwACFxUDXP4NpBj1ZdgPJhK77v",
  "key8": "2KW7qxSJhebvCFKC6LtqVNNczTVH66pQxaX4NWKEr1ho3jDfkscKp2xnfLMAwRVEGfUK5U9aYZSu43XFfEY6F5s5",
  "key9": "4JEginh9PrLpx2kXfGSoEGqHKpj7F46TzV76CBKvKBwogUacEbZ1McssZjt943KsnGzjdhvXFskfZMFoeva2faYB",
  "key10": "4jYNsaTzcPD9YgQckvVU5NdkGPaXxpWTBgmzVFNzWfcbTjxeVzEu6LwniivtFLMKjH4MqAQRKkHKexCyCpQmw7va",
  "key11": "3j1nV2saxLBvCDrGp5bxPBnDVgVn9L4xqYCJGF1jXJTL6tc1guqbvcJqDLUTbVNcmicK6mYjbYVYjhBqCnMD3E8o",
  "key12": "24232VikKNTyMoYEw53zJbtqwdvwVTxNE9WNEjFyxcf2BHoBLBWWjA8qsikC29NHcUi6tPWRZyYuP8HJQ65ZJKaA",
  "key13": "5jrUmX7VCJpk1L4fZ41UQKiWTSsuyDE1E6hqRYFpcJ3M11gdLyEEukzcWYFw8qteUP2yYJ7zVZmrMKXqbjD6FzeT",
  "key14": "5jbug86uHAVaJEPfNssBwqzCmCXBjjmm47Moper9ye5w7gYjDM2vJK1BDrjRJVNVgn77NvKpTDh1jySQKFUBvgUU",
  "key15": "o5RsY734eVcp17Mu39Nu9NroeGiMKWiFRpMYrnyvK9cz73jYTTSkFmLsUnH3UrHqcFY99aPPUXGjnb2ka5gr1JU",
  "key16": "46AS41sDkoHgt9z4S818sqPuCAhuuGNj3RigTBS86ozKxd5s6PhrFdYNwNDvnRnVda1WyzsGP94kU6CuXGLVXpqs",
  "key17": "21sH6DdHACCvFQJNfakEEJswAdjtDJGZorWwdznRCxhy2fG19vqNyRM7HeXBpyMYNd2LhvNQPYHHxfec3wHLxMGR",
  "key18": "PQfbRRbnfDT3WX9hFfxkUDH1qeXn3qF15mRddbr4Bjq7j6jLtkgV512MM5dcFqDGyjZzCzb3iMmswsXGSB7buQM",
  "key19": "2QoGgGvDaAAdWT6Dt56g3jzytv4wCiKSAxGinhdP6Y4LBPegAZEmVutCSvYg9bcxkHZejVYwDYRmwvRoF9AbEn37",
  "key20": "3Ydnee1rGAXZvGgn4Hu88Xpst5G1N27HjZrNRzh21yHDcYQfkCU7AzQa3FadMa9P2288HhgPTomuEuDD9doPNB1k",
  "key21": "51qBNh8dsLTcYu5PPbjhaZn9Fin9FoA9FsQxRTteX9cDDeLvEYpJyVS4BsfcR8nQScLv9RzRcEW4AUbFX2docZ1z",
  "key22": "tLijxnxDtJVXc6mGLJ1pLC7o77dqAWkrRWfja1S4x7eLidwDHjWotd2sHvhS2VLfEys9uUQCg3gFBVmKFE5iUJB",
  "key23": "46tBrcKQRCfEcgw9t3nUmfjBuzgV3W7CwY8iR2soKH2tXF4mgzj6he1Akujw7o9UR3KJ2wQ1nxgaXnAhzvoqgXsS",
  "key24": "44DwAgpb86PEccTeGcCAKSDmeZfjxe45Uu3vADSxUqyLc2t4hf9SC8WRtu7XB7Zj3bemJrzT6hbWLZ3KdS3fNbSC",
  "key25": "27A2Qad2eUEKEqkgcgxbZdnvCEsyXmfonYQ7i2TwsYfm5bpxD6FdtJA9zn6UR4wb7YSTaC1UkZmp7ZYaFm51fbGy",
  "key26": "3Q8iKbdHUVWsD1E7AFqeEQ9DqKpzmg5FLA77nqKHknAptgHZGYxTV9GW5kNYUmDzZ7Cxd8fisz88GPi1EdH6d868",
  "key27": "3ypRr2dpixT9SiBYFiU5KspHJkWy6iZ69eNXGD9WVrwDgXneEGZsWq7VFZ6PtRLREP8ivtQ2MmYvvuYdZk5HgAkS",
  "key28": "UoKEGFyJ2VntAVFaj4Mj3FZ9L6FEHHFKwTFyAcZNLmj7hoqMpCWCyf7LkAFi3yzxgQvUEovr8X95VfteiE2A7vj",
  "key29": "tLyiH2eNJaqyq6Qy3qmTBgpukni8RrDtDopsUytSfPgdkxqvyXzRZbEUcTMvgDmdKbDsFFL5Gom7ZV5HxuCRW75",
  "key30": "4PQQzesdQYoMF8x3qVy8qL9yvBK5seyvL2b2gUN3BEVZpsWShDeULMtcvpkwUYLP1g37nHez49TYcLwAaxLNASb5",
  "key31": "5E1nyU73C7RxMeyMge8JQwpQJuL2MKz4Y2XY9Lfssj62vqvTYKKpa1TVBd4b4idcFk3UktMvAFs93rmkNApEERGX",
  "key32": "37aJ6b1vtWPdjZdu6WPmE3G8PTtFMMrZ2H7j6E83LkoNFEYyqrxXUEXqdbwJnRPQmt1386CuCyLf66f5jvM4xsTU",
  "key33": "29rfiN9Sg736C3AMMQwdMn6uzzNUfDf7rmubrW5hyciqAaUUZjYSnj3PRbT8UQRsTg8zxPcnPvNx7AzYFm2cvnRF",
  "key34": "2x3Gk1eq654JaLpRC2po7V1TAYvh78z8i43iWM95cvMCLXepqy3rYN88AUHTbey64SjAJmyuuAhY5t56tnAJdRdi",
  "key35": "2wgKWbcev7BLjuw9exn37hgwKjk5nq3Edp49qPYH9MWgb5ads1uyTbaSQDSRTz2an13QXEjvHpJ4dyey6MsCXxsW",
  "key36": "4c6rjsPP8qEVzpDKrD7jvFvTWktqUXYP68jkgA5shyJPDkBHKoqyGTHdsQToqjhNbHCrgbWDgZYTY2LeiCeaEf7E",
  "key37": "32oB7TsMPLCCDUDNjL4nv8uunZWu4vpVmyVaTSFCtjewVE6AXCB4FzZu4z9bQYKVFwuyrxPhpxJTJi8hcoCdLqD",
  "key38": "4AbFAwrRwwsbaSuSNZthHQtPkQmJFH25J8Rnd4vYUMLsDXDXxFSXmG37sFFWR5Gh2fVLyio5jdGFktyyAg3ZvLqe",
  "key39": "3fg4HQidyqTXLviXT3x9HfNhx7sGWw5bKAFmpvKsXVYjuxb8BJ9i1AwH8DAJbrGFoKwfpL8euUe6M3VE6Xk6bmo6"
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
