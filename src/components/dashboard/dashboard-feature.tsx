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
    "533iuWu8ghJhaBWkmvew9xv9qE9r24YSJgTN3LS5XtbEaePgu557AwVxkwP76VPe7jKNDr8vxPf1sruEMriqxgvR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NxvWZ7tKN2ED5chKNuzgoLEdWbZVHyTYqw1HUMs49cXY4WhcKpE7NdDJDm8MsXdYTJ3U8wLUh4nNLL1XbmvYVzz",
  "key1": "4n6yET5nPqYxbpnFDFLsvdhXqjC8yS2JwKVQLSjFR2xB9qszcnZdxKiG7Yo7jRj4xdQDneZWTT9YvqhvwQWTKaej",
  "key2": "3QYP2sg3u3mDaPQ4mj77mUcL34JTfZK6yQe2jgDcXTiN4ZiwBM5w4CcAdkgKf3Nroj5kDcYtvkZpemHQTB2ZiSRy",
  "key3": "2aWZe144X4X6JwTAG1xV9rTkzDFyoiF1tAPexHjHZECwTj6xF1MNCLYzQ5iyiQDxD2BaMV4vYegpEZMHf1i15rx5",
  "key4": "4izeprkGd5XQ2E8NvJcSBMD7VbkUPE1buFwjM2ibHC61XLnxkAJzhGqAsuNUFLS5UqggcDGdf92YRbKueuDwyDyo",
  "key5": "529VBd4DCHLm72CXjNFkvDXHkHBB1Y3VRD9S23svX8ThsSaBH2gDaKhi5eUUSBUsqCjhgUvU1b8CQKYmPm1GPK2V",
  "key6": "qLbBDk4exKedi1vbfhTot3ZT6h4wLGLj45tBSueJHhZyT6oQ3k21dPSqc3uGQWiVmccNMrgC8Y653PAr117nuaw",
  "key7": "x8Q3uhCNsUZFvSNqMLpRBYihsneVouSGuxVxaJVMoUJ98uZWQi2FNnQCrbMbxyKFkWTCs7BiaqV8K5iyKVBSGj9",
  "key8": "ZyJQzy5Uhtt2FSegda7hPuzFB3ZTxSVuMXr4hoC4bqmKGg4CvQMmSDZ5WY4wHh3ezpZmiwk5RMGPTQdk66CcS4g",
  "key9": "4HmBd7R443BzcpXjcpc1YbKqKHMda4ivMUdmzGVJhWGveniuT1Xrciqmxi2GUhsdQc4prVfYgtVftPuPrii7zq6s",
  "key10": "ZnR3pSVXuiq6f4quAT1pPKeaxGAF5Zt9WTPviCPnB2CdtXUS24bH524nGBNvvRpSFkRmrgi1Tvis8CYYeMaQuhu",
  "key11": "4qGABeT2ETd3Rnq6JxNCD4zJJnpALJxPeCycDyES9zDiWixYEqKK4DjmQto75HdKunzi2rzmdbQxGtFKfdoVpNfp",
  "key12": "3HxtNh6KwzbhUgfTff8diQ9XiS7EsncenCgGANViQ8dDMWo12BxsA1rhqpwxDdYK6PLo753Z5oVoTQgW6PvfyVuu",
  "key13": "3e9n8tZGi6L3Sn3EqxfN3MLhggha6jRKFFDkPgE9uHrdzfd3fn61QNyAntUSAPhtowNcQbneSi1rds1XsKUm2JfF",
  "key14": "4cynhvBoTK2MpNxvDpJfU13a5EVMz8d3GdpuzAnb2yL6XUZ5ZCzxfH7gym6SVF5NuHpq7vB4udkPXH26YcU5mZez",
  "key15": "2vHR4X1x8MMK4qAHdqtoM9DwPL7mqfMLxoyV9yHU5DunrQfTdf5FBWkpQbNfxtK54qGxC4rFx7E6YZsz29yYv9rd",
  "key16": "2hquQdM7c8VEUzKKrFjTmm285Bt9Upxwbf7eD25drTiGg2XUhGvVCrVtpS6p9HpUZB7rMWLwbZYJoSf6NrsGny6A",
  "key17": "5foLTrtPnpjprXShAgtQgKACc9KJ26fY6pPWobDyxfuPR96bu4PAc8mLq3MjxZt9U4r4qmjrVxN7ZVJcknvTsfrv",
  "key18": "3246Go2xDRypLkUgb8kma6TJAQwfPVHFsH8iubXcrTtyoiPoiCBj2XdKNCmY1zrnQiEqZcnnhD54tMrUuEP43Nzf",
  "key19": "44TeTcYAa1bXoDvuLzoYkCM2s93zMhrKsYG8BVosgv1Dxjv8ySKcyqD5b2WvAYU63A1vBgjmZ3MYXETMHAnoTd81",
  "key20": "4Hc2KF5yGacG2yLJJbbbx2fR1NQPfpCdKFvHwTxpFgoPvbsABq4KCDCafbk4zq3qxvceJ7cWgC1PPEEfMaLBktY1",
  "key21": "4v4doKeX7Ut5xuBtZWRHibFHQHYPdEKRwavQtGzAbedtXURmz3CVpuVdgkPALiUmqmqqNdXZX6kTPe8z81SG3qwL",
  "key22": "2HEFgmNgJbW48NJhCwPvtoTHJ5MJTrd439c1ywbdJEWhSY8UPECrFnQdcYfB9SLYsSRFwypFma8T2QoEuQAodcZK",
  "key23": "2BoDrkjpV8AeDsmHBqeRRdGzTbYbjmVmMfFJ1DUnvZZ3ZZSAWwqTJ3upavojhGUtY3UQ45rmu1zfZak8eL73JDak",
  "key24": "2ptN7qUWEhk2eYmbXaJuU4i7ATtt5Wc9Bmot8VmAfq1PomRycUrb4ev6JcZHpufViKQfmK7DdW6HsHjRcdQhdr5r",
  "key25": "5p9sEmfrDA51rYeY16R9Mc1ovddG82johjNnZ3mxvYii2UY6K5GqJDXLyHdbc9DjUj1ryGxndEy3Zd3VQPmzHgYe",
  "key26": "2tuxBTK3E2t5ph3jezAChbsT2HNtvVipiZJ7iAyqAQnGY4ZJw58YBY1sAPPcDrJ2zqC2HBunCazFhF5LGW6ectDN",
  "key27": "3TgVbHb4wLhkwWCWQqQYewdjAHJQiHKbjW15VHKX9hy7aBP5MWviqf6BxYKKBUuHEXo2FE3oMgxcVd5vUwZUL6B1",
  "key28": "3SYUFLfszGXc4wxbiePTCgtUZYbr4G2F2rYsp7mDQNeZduWgSbUVoWP5JxY97kwRQhRjgmHLFiJnb775Z6TKw9Jh",
  "key29": "3oFJc6z2hVC3VyQwmpDkUB6b4SPt56XC1xL9q6XAnQqAfbmZAkDwfLtTut5j7TZcUUh13te2LYCT9ftVej8Y8WRj",
  "key30": "5geqsWojCobcDSBxAcu4gfeHZSJSqh61AdRnMPX1wDGJ1RiNRaQ8sH1bbyweMUXhP3FaSszDjNuzHZBQFGp9VC5m",
  "key31": "47YbY8LaeTjWjG95MH7kS4azs4bEbMYyBGHsdwQqsVhxGUcePXRAmaQDVofUCvQuLTLxQvNahRqdSjbhnvixLZsq",
  "key32": "kiqNPLK1QBHzh8FFZnVUztxL5yzSDsUSQ8H18sV22y14jeT94tyqLFHuuW1uipA7JQCEgx2t9eoS8yKewFW5PSp",
  "key33": "3fFGg2a4hxDQEUd7R91n49Ems1Q5dhN7sTQahhAwC2uPkdT9dCEQUTMiACAxERyyxdktcJJey494nHibMzZrAhUU",
  "key34": "4eZKTB7wQouMubdZt6MRib2Hsu1UmQboomT3dkb1LnxY2hr8q7pNRjcgKSpxQHxhebEDZYGXXt8hRjLrSWQvkByc"
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
