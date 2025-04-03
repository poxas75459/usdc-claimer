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
    "64LhRmzLNc28gn8z5h9YgcAGnFJH9tkPtz3kryewPhcdE163CroTDqMt1SvHVXrqPrqfgZcK15KEzvLQpDfbfQZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ospZYTWCz4TpFtFMAbbTYVpbph65iqyZXApacosFxdVR8qLTBBo9ukxzLdfyne6jguSUJAHpg9QTgME1U6oAtuM",
  "key1": "2vx3RuERxeeXLLWqdpCb9p1431ikd2ZgYHQA24VRRvqaHrP3WWmtcyHU6rzVogqHL7ZdqZ2Lu6ywxxeTcCY2phn9",
  "key2": "qCegkSGTAQpWHBuPr32WVwmj4q2Rs9ytxs1iUZQcydgYCLLDeDVXKb2N1Q5kHpXnZ4nGFxvKzRXYnccMJ2EFPKW",
  "key3": "3GEyZ6d2cYcxphA5zQZfYdgwB3KimVhxQGjjH7vGoGz2716HxnxBk5L2N7j6yLsLgTVnmXHxhpRjZTHum9gA24HQ",
  "key4": "3EypDzt3Vg2C3fkyxC81vDSQ4SU5vFgdwTscgeE6HKyqruijCmro4iyMrjuuKksufv48X55n4K9W4P9TpP9kDP2t",
  "key5": "26PUfAzAfcuDxSbiXXFFb6HvTFWxgd9fPnGjsqkczBAzJocPbGiczseYVdh5NKfB7SkrKJNu1cXj1czpGUzdgvJW",
  "key6": "4HfB9Ax7H8QzdtJZuBfSdnFrnAyFTHgE135DVJxP3kNHwx6dTywe1SYbiV7ADTmPkY4139dTwXqu38kSECEgPem9",
  "key7": "54rGovJXprWzhRpXP1GAMmEhgwdw6CCkvLX4geiVLjh46ZaznuJuEo2Suu4ALPjiU8dsfPyrqRM4icThX2xH6TKt",
  "key8": "2Sa5gQDa2ouzWjxG1xujHYw6AcK4dpmuyjgYtntBQhBEp78z91JiHF45DRS45r4SeKSSDEA7YUWNSYY5FP53LTpP",
  "key9": "2QR6DeeceA9vFPSP9RucwQA6Ykoy9iKiEQfvyW6VKyJGvrNw3gLZFXSS9gxQUMeuKG297bUWC1ipHxfVv3RqQjvF",
  "key10": "2oHvoTW36fTrLiK1BB5ePBhmztYm4L2G8ZiSVTrnQBtBmi9UbrJD7bzvcEdPPMM55aF5c5ZWJdq73kgpXESJ99sT",
  "key11": "4vjq98HKqrfrE9MDuco99F3ppP5HM8SKz2sePAv2v3UmNUnTRSx76JUfJZvmyCra5sCjywRobiumBY94ZdMFmTCP",
  "key12": "3q4ZqSBFDWVBu9VzNSXgNeVAkXGRKWzFs35pr46e5pNABY5GHQwr5T5w3Wv7UbSXM187NYUCGBcMEsm72Sf2GpQu",
  "key13": "5BwfYvCVe4P4YhQ6Ljj8tmZPLh4wnc9mypbgxHc1TUgwDKG9vUhdRWt9SSCB7waCCzayaRoFHBhBdkFEDvCVzQxy",
  "key14": "EUBnmm7PbnXGSJkMPkWoJuFA5NxZzSjuqNpmB2vX3WvjmsBxS8F2VWqwkZHdoNRkTktHzj18y7FCLFWKSFLtKTt",
  "key15": "4nC9xGwFnp2qefJM6B1FQiVvsqx2K3bb78znjyNH41FThLuSKv29JJL3AUoXkqDALA5qAF6hiE5jRuyATSLG8vky",
  "key16": "uJRc3WsiGruo13hA2ybe7Lfe46vJ8L4y1svsGYJ2Rv1T8SCfHZnfpTAM7uosuWXdDU3R2bT1fXvvvrGV4CwCaxJ",
  "key17": "5mYHQEFtV2pkps9HxAxBvMYg2TPw2XJujajaxsgUVHMw359f6U5SitmTAvLznhWDVJG63GCkj4zbQhkQjS7sMwZB",
  "key18": "8ZNk4t11kNYxZ7B2reQeAMmQXFbJ3S3rqAF69Hs7R9QSJADJc4QJ1eT7DaUAfGPQ3kw7ZY27yyhbCbxWPWraTeS",
  "key19": "5XkMhbBiXxvkb81SuhcH9YZ6hKUWkj3mhs5W6wTtH9EP7ZEtk4W9SBW17VEKSLyPHAdGJFZ1Cab7s3isvWHUANBM",
  "key20": "5NNpgV7Zik7GJRqk6wdD1ky8mV4jbV6vdu8jd5cotTHhQ3zqDfmTqujpjWEyHmzJMJ6B4Sune3Lcd7vQCzBTbTMo",
  "key21": "Wo1CM9FdCyr15L68NwW3hAAQqPJ7D8L37MCoE5sANMGDxHwkhQDGpBX6Gvn5mED5X7tWddviot7DYAV6Zb2pA2E",
  "key22": "3tvuebGF4WVME2Jk65GamZLo4ZmQNGUprHp3dXZunkyoXjwibsW8Rn4QTY6ytRAnEupGoY7XoGVys38vSxZQS5g2",
  "key23": "5cbZTYiUzgaxHGhSiTjn2rNsaMHtkE3RRdTDtAh5W1NqeAZ2DZhf9AvDX6YdXj9UswTUzdwsz7EYhMaiBEFYMUSs",
  "key24": "37zXkpyEjBFAvk2kPTUG4RQLWsEEXBNE2awQA5V4TpR5Mr4fCoWvW5BB3L59Db428GHou5C7ZRqQkmDAqk4wU86A",
  "key25": "4UZqFWg1de2W9NAYch85sPyVPEVdsUUc8c5jqQxYgtZU7YF54uKwsKHkiEjW32dahZiu4qBeUBzo5WY3uNHDYWA",
  "key26": "36EycLiRfaEN5TZfpg7SGX6j8B9oriV7kNBwSCuuMKvZ7a4eMyMcmjNHYDnmi2wUhf4yVfKurReX1Y1D2FLgNK7y",
  "key27": "FJBFbQk1WS37Cc8GccR6UeQGVKU1DZaTn72ttT9uJsvJn15eHDcH87g8QXRXBMBf6GTeV2hUmVEuusDej7h82Sg",
  "key28": "2pqYxcTqQ6jeRNhxXhEZ6jWzQRTKXRiuk954XpPT3UZf8iN9pEs5UzVhmuWXwch3VEE42MKzW8F5qhnrm2gKTyUv",
  "key29": "4GFwRKrYocmfGePNc4HFWQVjbfaL1sY5u511V2JovmX6ipnwXFFjyxZ14LDTdWM8VN2XYEzhS7UsKsT23CyXdYTY",
  "key30": "2dtuB3PVWYhwwkWp8PWLzzZZHkvkYtX6fsRuUxb8gziojVgzSd9uEviw76xxHTpRrwsQXvMoZ37SfHwf1swwUNLE",
  "key31": "2amhmT2pecLs5rNtwtTvb1sCD4YpPdXwWGfbnZhoeHkEakHYCE42853UhfBqQ8tYtTE8KRArooX5BLcNT9j9nyea",
  "key32": "3ZSZPQ3zDm3zej2jtT6JCyvjntkK3F949xU5LKci6tQH3e2f9KG8ChEEFhC4m9RXgY7nmjfoGMtaQAQCNtpw4z6N",
  "key33": "35TCS2bUoKf4qXgzd3QUdxUpSvzN9m1ZhW36Qj5SVgVyDWUTTk47a64dEceUgU4W9nKauLk6NECUtWhXevQGbXM2",
  "key34": "5SCgocKcCGMxYjNvtkYRtTayrWLSEn8M5uvjmJqkgTtEyYUUcyp6x6dMY9g9CaGUcGyb3rwjFtBSPUJ8a3igaRtu",
  "key35": "5qeCBFaZ2V5UZ72wrVBuTA1MtsXqN24xcLJTLKQBtz8ruB9poNb4H7yXhmf8vc6zEqoz4WpBqDr4Shu9CjKihp4D",
  "key36": "42urkKNfzQQwtXgAUvjjPuq7wxx5NYosYYxKjyVsYAV3LWafmDRg9PbVdhuFdYjnL6v67H1nX13x1o6MWUsVBDHW",
  "key37": "4N4faG3aXYCW1DydzoXaZRbMBebAEvwR3f8j3Djx8Gb59VvhgHh7fRHmJLC7sxuZke3fuxLDt2baMzbtHrWqUUkz",
  "key38": "4FyytwQyXYSG74WGbZubxWsNFoBmMcLPadcErmCjjq1da8WsNJtbjVoTezemY9NBmJSTwdxw4aSeN4t1fNV8AR9i",
  "key39": "627yXd2WH8ARdtfVBHwAdGozqBHUB3vWByVH4rrsoQr43atqpyrgDg1jFXfzW2DyCQFPBnTZD2hqMW5PJWZn9v2",
  "key40": "wCSvZoGZFDeZpCtcJqwyTLsm1pZegrMPXdCoqsoq4qpziWpxjrPRm3sdNfp2pQHz4EXHm2URfmGfLj31E3W2YSM",
  "key41": "jJKt4Ah3tbnEQBJwMvjcHQuRRC2JDWEwaQuwmFzbi4rMQEkmLYgdv2RgicGQTRuf45aQUZkhC38vqqJbGcLjbMx"
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
