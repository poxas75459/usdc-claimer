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
    "cS5kNgLg1JZK7WXoRBLrS9nXZTSRhN6PGtLyEcLCLta5UEZihmUGsngaoGUtyv4CNLhtKUnAecEdmEahbTYMjMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RTNyYpgRcMm4SJTfSGBeTb6cKJ7ANg5osqNEkj8o8TfUnvKL8KcS9LCELWmWVr7iPueeysw6LXQEnveQQmxxGx9",
  "key1": "x6BKLUqwzh6AmyDmXACKsbQaUVWv2vXvVx1G7oh24qc6K9NYUGBhV9MjWJHs8xuH5jd5njB12YLGGqWn3vNzSs3",
  "key2": "5ftixT31Gv8FiznGLrKzgHUMpkcwRy26TxCyrDYV6SQB6Ug6npmVRKDDjdgKXzCVBwXiz3QzVsQb93wD29Ut3S4j",
  "key3": "4aZUqbWzFRisTUhWEmmzBxsgjVceWPeMvAzpzYA4gfWf6ewv51SQxRPmcnjMHsMBVAsu8dLh6cXXdVK6bNpPd3DM",
  "key4": "oaN1JycG7FBgfMnUGvBpg5aaV8FodV6SWfVELZ3Nn9jxHvSrfqKxYHNNTeewRo4P8tnJ159zXQDur3UELUuiD4w",
  "key5": "2ZwKTR7jvV1LKFeupPA1Zv2aQRBQbRKrq3V7U6pDFEWYnHg3btRpFY8VizP4uqrjMiYcEtEg8etcghMVYhvZicAp",
  "key6": "4diNbuNA9KpnLVrrHtru6Ux5uZtzFYS3LpNmQwTRW8dZZDeTFwC8fPYq6fvZv8jcB7nRxGi9tJ6AjfZdnoogEvoa",
  "key7": "4qf5uRKXCvL7UjX4u5kacJue4UNU94K3Fr3ajbTiKbpNgT3QU5nwR3VEfy5LV2xWLYeEAjmHC4RbyGNj4x41VMEP",
  "key8": "VHFFb21Ub5F5r1nUnwg2BfwNUqyBPq3mWZyth9dcuJFi1YA2sZrGYETQ4ffTKzNP6QBmo5dHpRKwkQES71XZkkz",
  "key9": "3iXMp9UGHusNCRDUwQhp6XVuF3EJYXophTcqxzoMSFXKBEFDQ7qwMr636ojTNLRirFjNfEcMFAJutzRGwefX71EE",
  "key10": "48y24855fBcivBrp8a7Jt2AiHkVGiTBmQ4A3EXrGhj7wPF3cBHi4u5YQVefyqzQ5RhaabeMcHAdr6PFw9ptT5VMG",
  "key11": "2VceRyD2jnQoEgQy3Wa6doNrYp9gosjemY5EUnBR5zh81Fouy2ZS1eECoV9o4B3RuCyh6hZA7BvjRkNfBickGUzB",
  "key12": "2GsoTC2G2bNScvFVfuNV38fnDhK8z5RmD98BgzFEh6pfPhaei5LytkvuSQrwf8U619pkFwAtxZ6dxyGbPytKsrfZ",
  "key13": "44npQ3DPFh1kfhbDJtrbLFyL64vPy71qL7gBBLUsBVHCpD1frnDfnyCsTmkE2yMHumJVyf3u9K13MfG6dFByHcfB",
  "key14": "5rp4M6pSMVgWTwNey6wJNZuUeo2bkVYTRon3GLBxxRdMHg2v17bSDHcf6zofK29uEyamvfoqPVMBxhFtkDo3eW75",
  "key15": "3ivjqZDcAmkj6E43ypXb1Yetgo4y2YWqKzfmmKZVPemh6dGnjUzBZLNDkMJGRCeayB5H7jKkE54kiCmFKyBynVF9",
  "key16": "5pFoQCjfYdhAFKjgtkSdUJbURfvz6eeVNzEd6qQtobG928cv7hPV1Ts3dWJwQnwJnn64ShC3YeoLRjybKLcgWUpR",
  "key17": "R8XznjugJozdiwko4hqmcyRRVRZJFnGTUDjx7FbsfksEUJQScMXrnZqRBdQ1L5d7upVsHVh3SX2HEKi1Cc31kBG",
  "key18": "3qxFisxW19c57yJ6BvGjaQXrJtzpSamA6GZxC7WDmMGXRhu349S85aXq5d5XZRZeTbn82mCaZPiPtkYzixc2Z4xb",
  "key19": "3X83zLUbBV8uniZ8nugieCwQqJMZF9sofMhixC1qA9L495G6gd9QdHVNCbStFSMfXDZHYJ2VHRHMgwHoajKUdW8u",
  "key20": "66dsVrQnCVXzex7A8zdXr8TFzFshGg8ujesWRz4xjUyjQLEP4VBRptdibhN6HyNYe4aAZdJpfMnkbhFmCQT3V1xn",
  "key21": "2eJwV1tvWj4V5KZZnJx6XFYUFmqgLNQUw5jQXVAvQFabiGS3T9C8MQe8M2U2e7My3arxyHSdozZNqSep3UjHKuyp",
  "key22": "3DcFEPZbUTbFstLBui7256cR44peVQz1DFpk4L7jYnJPc1TU5VQEyQvmmm4zRAMZ2YY45qyCqeim8q4hPixHZ3DE",
  "key23": "eRosv8eVoxh2mpbH3vGAndh5kNWJ9X7xeKrGPRbDHfwTmwnKj8drH41fm28sRsv6TCHQTtg5gfhA5xqxPgcyKtp",
  "key24": "5Gmz3Kkn2S5LpHugmNT1kfqc2tV8F48KRaH3KcVvQKnEiUurRVnAFt8HcP1TZUxN1VKYqazPpQwZUxM1oAJSiUdf",
  "key25": "4HZeKpAKBTBUKh4WJpqCDo67suu32yu3ZXyUBwuCR113ws8KWm5mBRnZrgzWndCwyLf4tzV29EiQAYBRxPaVU6W6",
  "key26": "2tqYf5YHW6pz3oPdaVm2mCDDiefnDuv1rqYdSHdmYfi1RUpcFMtHn58F1TUbtSXi8ueMFTFCsTYcC6DzZm6dwRQt",
  "key27": "5VBsrEvkm49jnwkYQcb2NQWKSs8Q1WUJoZvw8xc2HCtAmwFmZyZPMsiteCSe1jBYKY7vA4phKHa22ReMgohtNc3t",
  "key28": "2uvca39qDqLppnjj6yDgjQVgKrHABUafjJxBxRZdNRzKBsCy522jG5aAohMJGpxokC979qYGnw5z4YCXVqxCfrkt",
  "key29": "2xfGReCUptddNqnCe4Tm4vqQkQp9WLpUk9iWTUidB6wQrVBWbkVzEoWuVkcu4JUqcEB2E1AxxtKfpSaJZSfnjUG6",
  "key30": "4M2T3xvesdiXBv9tnGUi1mz8tVuRzAXnYkLNpsqQQvjhStSavviuC6HR1FsEFyJVP3bKSDMR6VgyVkhVZNLSbCRx",
  "key31": "3XCFwjLpgGtSEyHNQDK5eVLcLcsxyT4jqtoQvD2yBLABsUm53K2ZjXn9HB8MC7jvUMbAsbLX6Ktv1cdnatF5bmCA",
  "key32": "4vJ32Qztp6aardDs9ivkaT1dFqmaETxmxFuT8LsZdj5qejKoWH5dLSpaJR6c1T2nXBqvHpb8HMtUbB8s151GoRUE",
  "key33": "4nrrdcA7wtpveUaKWJFbLfamCmZfwbhAVaWXgE94XG6eZ76WzgpFNytqxQMACHJVxzvGrLS6CDshQhbc6rMsDEWQ",
  "key34": "3nEn6RTU1FoqGkiGstGVE9W9LvjwfENzrgxg8cpnJEQYiaxwkxpY2cw8EXfvTdUDcKaX1HnowoJ76HXU333YtXuK",
  "key35": "3ii8t2KA5xB3NxcZ6fYvBxwPKesreCRhSRpojtkWRKqRKDHbGGJVQ47ZjxvpueEELJ3gzCvqDZ26xrqP7WHtjd1y",
  "key36": "67WK4j3yYGTN1835zSaKiLJBcFvHYopFAaYrYCoxHxXxRr1bkW6Do2WnC7Cm58F8C8L2tfaYpk5pA93VnR93TGmg"
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
