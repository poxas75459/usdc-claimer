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
    "31uR8LCMAmkUVxwTm3EabSj4wZHuCzzfBDrfUVp9SxbB46YUjX4JRoXaCZeUFuTeX5K27LusQHm6ej3VdantMjND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W6nFiCn83GhmarGmz6CQQQSXcNNb6NQbLhu9FtfvVs3dmBUuN3j5kUDcvQyfNhhEK2tSHcoqJas3EekM52zNFMh",
  "key1": "5P8PMumPRE9Rq6b9BwvQ6c2a4tMso1LrZK2Qa9EMe3E44N8hX2dCoHVL2r3x2yVDabLX38iyopLVSuuRAukaFBdx",
  "key2": "22XhW3aDaMxvF6k4SZubEDc48ZJh65hZcGUytUtJYPm7UJfKDq92SqsrUXH46MUcjuCH3QsoGKBFKJMVCpC2gWmN",
  "key3": "nGWDPrn2edGJdgvsJHR3Ht5o9VyG649ZmCwt3nNdCi2Tbpbyxq18tEvpEBC5sZ9RaSdjws6ZLY6WtfpXuFi6V8m",
  "key4": "56ZR1PGYme9QE3uCkpDvHBF7xpTfTJM9Az4rokfSGUZ9sn9pCrgVMtGS31Zd44nTjP5dBH59xq9bSp6LTzwXnL8h",
  "key5": "4N5kG9WPTcNvrLyQPoryqnYdJXC2NQipP5rLmWf9HTPuZ2RgDkERtbED73Ff71tsqDJJ9eCNnvyQSfq51n8ias1z",
  "key6": "5jP9RygzT1Zxtcv9niJXup8czhMZsuM6msrkr8JEvwDybbnHVczr26vjb5qnP3nokuR84tLmkfY3NxtbJfDVHcRm",
  "key7": "2oS8qxCRwuP6w4eanArDbXAfH7Ng4qzKxG24RhN48h6JuXvXksGs6cYfuC2JKgereKPiQAk7v4AijZDX3tMMRvJ9",
  "key8": "5Pbjo8n5FPoDusK7syefUUryuXiqbfVkNJV2H2JbrPYx1j1J3LtT3G4CfcEzRAPwAcu8hVkQCU9UYgWKxyFDsSKx",
  "key9": "3RpADSfZE7BcmK6ooBMCG3ghGaGF2HvxwKHsLH9i6ihqYkYgpCcBWT6epQdxKdur1KMB5yUyJNe4m6jg59BEoM5B",
  "key10": "65dSrDa1i9e7CXBcY5kgXA2NViH5PsQ1UaifHKM68X9MR1qJEgENys3qXnDCSKLKbL19eYpCruvBFU3YFD7HM9P4",
  "key11": "2iu89nU4HS1xShsCfXunqmXgD9zofhNRd63tU77SRg29qNMUoV42ZDRvPBH2YcCCPk2x6tqe7Yjt95z6L2uuLWV3",
  "key12": "4NmJCpWsPcEbQrQvwrFhQj2QgWgoDyNnUUhUctw7up6gVksFGM9w3oY5zWyfChLvQuBqykpbaq4pqQtkwh9mXGz6",
  "key13": "41sktdWe95L6tiiHGdxc74j9Bq2mKFyb5uSZQaEVjwbXoaCaTt5PvmH8PXXiu1L8BBVSw21SFLfmBpGQEP2f8YNq",
  "key14": "Ls1PLZszCvdQ2Zr99pZQcpTwhWegCtekYd3e759iGaUyhsAXA9bkYjHvZr65QuZNShLnCdg71A1YJ2S3XGZuUMN",
  "key15": "u7KLfwWmqNkmfdGyv3cG6d13cNxTkjg2TNzNJNW69Ni7RxuxE57BgMYGFunEcdFxSguMkEavZg2k4YJJb5MLbkY",
  "key16": "3jLCcr8B1Faf6fb6WHbLpqQDC1EZLvSgyAeCFHjt3KUJh65rsHvypMJ8ouEt6YnciKV6qhGYTez67k9UG7skCuhi",
  "key17": "29JE4bvv3Hd3djKyJAvRJviovLnhycf5Efv88j1r8rzeWPZb4BevXvjdayePQrs3jmmFmV3LgddnKCbX79V744dw",
  "key18": "4Y7KT6BwNVhZA99AzbTknQoj1s2Kj9TEuvzDUR18vHU8XgWSpoBJR3FS1hcnNpSTayFNzHtFfXyqcPk3ATyjnZ8q",
  "key19": "2fHfm9qFBnycXXHfAGhvBp64iCmQ8SdUQASiKGGrzsreXgfCdV5GtjaVp6HEnP3b6reTf9hJ2n1aWbEaz5JuUvzQ",
  "key20": "2SWDBA2XWPmtj4gmdfDiuKfWnXTkRwnpL1LaoTGXfo299oU2xymaTy9q2KoRPfWMfBbA5b1JB2zpmKc2sNERJNJ2",
  "key21": "2YR2dmsLt3F4Zp8Lhac29dZWATsudqYV4NujSLC59BDJPDuZ2nYdzmTSsz4EXn3WJhTynfESYCfi3sHvG6Bc3h4m",
  "key22": "3sfjM7ABvbMAJfSPxjRP253qa9gPy5RgFVV1iTytV2UjPVXBuRFMSTbKECLJQbCvwVrbmkTmVeHPkHapzWWq5qyw",
  "key23": "4UW9SzjxjMBDPvPcDxw6NbHGJfSC76YQVgx4WAdSohjwTrFmAemeR5UsRN5znMJMqGfW7JEGWDdESfryujPNtL7e",
  "key24": "45bZFBJc1gv9AdVTqzw6Nd8Gfp2CGjdQcnsXkjHzBvhEcR6DsfKoKt3oTnu39HZSknxFBxvF3fDedLkwyrZMrbU9",
  "key25": "34UM7Mb3mZ9ouhiM2G8sjhknEoEL79CrYzDjEhF6KR8AhKPWMKDonfPgmeE9kvfh3VyHN4Vts5d85dE2WTuVsXPV",
  "key26": "2gyhUAinP5VZBkWVJ2QDqX7gdRfAJmM7pR4LMUxeL5rN7UamDTuioJSLy5ULp3FKgi9pAuCKyrX2pmMiaJY6ERHR",
  "key27": "5jzD52YAqPxvtb2LV9nz3GA3Qh5rRf4o4hY97JVcD4E3NnM31XmYN75AU3idByiUJua2r7zo8Nccs9TeCF9rzVXn",
  "key28": "NUed5TiCWpnYKaPUUon6G8oQZe1qPTX1K52rxs6SA1Q3nBn3ZDNgyAg1Ur7ig9tuSxdDya2D23NtC4CWGNV9kxu",
  "key29": "5qjCKNkpqcEFFTpkjV4v5qjP663PJiTa9RmpgUgSa1GJCHeu4uwhPPzaJK1No1jbp3NTiHvB8VwVazrWzMqfPRVM",
  "key30": "5Gzn7ZzELqaLsjfBi1k5wr5VKQZVsprUVB4YNudhwXYU4ACZMLHJCDa7VBjLcGgmJbLaH1vYHrcTuZ2orPJMwmS8",
  "key31": "126mQHjPjtvTyqEED8bFD2CEUxKQEJQRH8SwWmzi98YLsDMz12iZsUFNpTD9JVMKytdX7PqcGo7YwuJgfAAN3a1U",
  "key32": "22NWKMEETPbWr9Jhvi7SscW5b8CyrcLqR6QJhEnA3NRe9fq3pPVnFvDh2keMKiP9XoaphWcZRktZhGh6vgGjGRYR",
  "key33": "3muHkC6Eic84qS7f1NmYGafqWDgH4mVCzBCoBqH5ddfyK9BYMU4GDLeyyMNcVP4VjR6MbKLyN1xdd8ZcmfL4gVzU",
  "key34": "2PmoYW5DEnoxwsDzdWnu5D51H7zaa2eqdraaTQMiQMbudRaboS3vAyyfzSCR7MFQG6ZAh1y6HYcbqwG9DXtJv4WJ",
  "key35": "5DGPrLVpUikNAE67Nv8wG2wQKQcGgis4DVXy7nposfmXwz2EjQivrZdD27drAiqYVZDdPhsrXaSMgBFkXoHFg3Dz",
  "key36": "5tJq79YAKTmzvBb2CLGY3VX1wj64EtzGfmag9325Q7CjwQEe6o5XPnhEGySm3dLpaZcb78U6RgtYCRJaz1Edz9B",
  "key37": "2QcUnXMUSax7qsqkSewdjvmWmq9CTRcvsTevLGFtXEgFpbWdXpCVQWP8nJiYe2TQr4VscUcJjrAvfs9C2Azw1P4E",
  "key38": "5rymgez58qfxdkDSsn9Qy9Qvj2SFaKR3MCv3LBYRjYGNfSpC21Rte26Nn3UNGsCSZNwSyay2d8GwMvVEfr3qMLeJ",
  "key39": "3nhdvbgDfoovkYtqh6HHz9abEV2srQjMUr8YAsYGuvo5AwwC76LVR3k823iZrxZ8eTgxF22dKCptiooBsDmmrrH3",
  "key40": "66B3ETNoR5cbJKaUqBJojKyyKQ8ti69TWu8KLFg31kvxe3CB9wYuiNnsirhGwazgz25j9UWf5xtesXn8CZ9CpdDk",
  "key41": "mUaSsS7pVXaRyPZTA11CUdsU4wRpDW27WACV52sByj8gp9TMScF7Dw9jZZjaNCzeQUabGkkq4houw12Th8LC3p7",
  "key42": "2Rdgw1FY24v4sxWPsF3bxba3gi5sppR1oAFvg19fmeT1PgGfYi6QHrzHtzzbTX4aPFS6sfZCCMsvMTFDk1vb3nfb"
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
