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
    "4oT5pbDyakxyL5io3wuPGXJ9uQcZS3YgA4Q1R2T3gGuEQ14dreooR6LhjseiFCnmWGEvRg4fki5j6mCBkqFBYoq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FeJgWb7x8GLiE5AfeCEEw3eA7Dp9vwKEPPGGt5K3viMAnQFNrAEN6sbPZx3dfEoJJc71cVw21Vfgo8mZvnAxcsn",
  "key1": "3Q7pRkjmfGpQ6nVsKFNDjE267BDmfGLas8LAvgJ89krSnsLVLkatkhM3au9VMmtUwfqKmftanGCpqqZjhafx2fKD",
  "key2": "3cnQc5X66wiirCSB2JC6vpsEzHT7HV219oeZEG1J7rJGxqwoggWPD7kY5X7SPZ6uKTnZjGcLQavAipXRQ46SLW7J",
  "key3": "uyNbuBxjq8YKKM2QWMBmtcqf8brmGM5LNHvZEcWuS3HHtNSH2K3LhSUFdpFEwhFRQNfP5nXMk3UW6H6Xnaw9Zbj",
  "key4": "5MUohegyM7i9WT3bu1j7aEHMhbdkhAvFtqeisoL15DoUE7RML5X7W2VKuFGZMQtJx3TitLi4tRbqt6Umjje21i5N",
  "key5": "fRgNoPPRc7Qr8JqdRGhwTRF1TJFQqpEK2JB6JvQfLbciGAezUSrcdk8qfW8ZFckqJDFbarpyfCvZHyJVgLnFejP",
  "key6": "3KV9V8bdFtJ76LAz8xUGuQY6dBqpBmJeekh9ouNhGGu5xmTPKwUjACsCdWGyBLTpeHkWR6QwvdwHe6eee439vx6d",
  "key7": "ykWe5EcbK8j92yjBL97JnnrQQFmDwmkfY4tzHrUucQq3FzhUhUbCgxVSX3Y4Vngb7PraefjFYKP8bfkEJ6F2PoY",
  "key8": "3j2cPHhXM9EdmEzyvqeuacexN9dpiyWCWCGCwzujKXMGd9ZZvNrm69uR7v291DxyrvvNqaLM1hTFYveA9Ajm7Erj",
  "key9": "4PDfcDx2DCWLQrVVD62h3xdWuYrChUyKvD9vsb4bE6NjHbmKwLn11SYYNemQuYNt8MxYSJxHSkS4ZyS5Hnm5cz2o",
  "key10": "2C3QchZTJSNtVjqwvqi75i333kJPjTvAwUagfn1KTWcKxTHBfMiH2GK6QGYFtj5bjBaxYZp6DU3SYq8FGKqZ5PBQ",
  "key11": "gXdvnPvWgASWimaKxGy5nT4o4hFZ6ExHGtQKJ9fXSZ1JfNSKpMCvteyrBTYPU5Ano2ysaX6avs2j4uycC6rsEc4",
  "key12": "4zHXTjKo7PWTodzweBGj8rPsM39iWgToqLsk6ruHcYcYN54RnirW21nADRHo4kKWdusrTFyyn1Kpmqib2MeEjLnC",
  "key13": "2ATyDDvsXYkRV5oZSYTnxXNd5wXWfVwcQf7RjqR6gpgYrkhtAvuMTpkwAFarDAVxZwr2UfkuJF8qCpsxQqNABwmX",
  "key14": "55AE7zrD9t39TsbEKHVMY5UnYgr8TG8ZaDzHeBi8Z7bLnC3zNvhj2c18nfwkXjV4eyza34hgyqRdHCF2TX2iKrQe",
  "key15": "nibt1UzGCc2gtbQzVy1VnLoSEPXQxJEdzaShMjJvg7PjSnkHk5XSCZPngosgi1pzWvQWj9gjW69xUBCvfe1hmcK",
  "key16": "4bjzcRsuT8beQ2KQSJuShgE1zDCXsU2pV1N3UTSqYqgTpJswNNtdFGCtFAgHyQk2dZJFyFp27szzHYCtvLm9iJy1",
  "key17": "6Zzv8dS4xF4trPU6XbaHPZ2Sr83R8Wg4CRLcL1jKoZGjzoVLdiWXmvYiWTgzf9FnXkcCstcDX222Gz5Nnd7jaR8",
  "key18": "47agyqhZoTuuX33tvFEKWBbMU2eLgvjnxfK5VWLjj1SQgZMRqdonimwETb9LxaZ25cRwxa3bVCHzUkj5tcZtdKUP",
  "key19": "MkRGkfLQ1PKvYvCs2aDBqvW3arvWfSXBKn841J1iej3NAYa5ExEeAmaFyGt7gCPTKFrGY1ftUH3V2eK6Dt89Pnj",
  "key20": "4RzZp4qxYdzEmBxqEq3XWK5etn6oqoqn4VxmVsPD3N82MjJHMJmaW9Ae2pZRMPqadLEEd6hmnng1mGehi9HRaCVE",
  "key21": "317UL1w5yTfDxBBCcvvJ99DsLoervyLKRQFAZkVc8EbkjAbLut1oDKmSv7FnV75pmSPQsFx1iLgC23VHYbth6xLo",
  "key22": "2owLrxnGY4kGvYAQYvCdA7NFyYxT6yKrQpV3JdABMc1619joLNuCbLbNFBpnJQPRmgaXEQuqvP5RvFkicTNS7e3L",
  "key23": "32vp71hCer5n5ptJX8pN4qoLVaVNyJmJQSWQjBGaPAMKf3CTV4NjG2dGkhV86kJjhqT2hrrLCfR7oYeGxmhrP1D5",
  "key24": "3Hw1NVxbE2RMu4v9vApLie41bSajWL1nUPjfeVGv8QimEUt7gBJEN4rpp6LtKngvusi5YMtU4BAaqtRBqPTJLDrz",
  "key25": "2QkxfJsshPsCDp6CvUWDqmPrrWqgUAZAfGaHSqNkTXpbZCBQJZY3d4Fa7rJ9bL7FuSqUGw2Ernoot2Hu1yqdxENA",
  "key26": "2iuY4brz8q6XDJAbL4MdNtHganTdX3z8encXk2Z6y7AZKXzmdsw3X4n3XfHCSyChcwZHYJF16dgqKtLdo5aoqFYM",
  "key27": "23mVXrLka28qMfdPSp9ehfapWsCKEKgE9UxxGofhr1Thv9BwVU7Fqm2yZRHV59RbGLzaitSL3XhidJtfbvm2QaPQ",
  "key28": "31DssADksgpYcHu9oNwJumsty63vNUBuoL3dZtvo9pCMnjLpvxgg4z6o8JVKnU4stGWEwjxTLdUFJFz1nb31QPE7",
  "key29": "3qy9HogVBCn7RFjJUo5oHcgQVJVQG12xC2RPZYBDADV39Lmz8M3kWx5tHefJ1vS19wyewUKFaqi5XYcXV4bMak8M",
  "key30": "4CUUV5MNKGL6nP4JH162kes4BousZbXMJvet9p9gGdZLJyTa3QMnSQeJaUi2GYqV5ECxD1dSFvRyiK8P5ENKqpa",
  "key31": "4gRKnAq6aTLoEK1KbhL8SdGvhBbGCPZQCFayJTwCoNGzdJr4srMNqv3VY3D9EhT7qAyRnwJVzjm21vanoRJYVbDQ",
  "key32": "cCoRvdEN4w6kdRHFip5igU8ECRQsuGMipBpijxg1FaXmysSEdcvdDsUC7oVvzWZ1VdJcwabRxJ8ntKNfaGJHTrF",
  "key33": "56sNKMvd8KhfEjRiUe9RYdmqV1YudEirqQdM8RrxYN2rwH9G99PgtG8t4upq61scjDv7cTDrAmtCiTLsHSe553JD",
  "key34": "433BZQLxgnGg3buYDkvvmCrSiddYFk3vrCGKt4YLzUxrVBss4ZsJGBP7PAJxAtwtBPyvR7RuP1ZjFtMDKeAqkkC1",
  "key35": "2MgxS9TEfLrrGBsqPF3c5y2c8frHxUE4H5AoGL2VEKRVXgu1rDxaYbXy7f3EFZ2U81cHTAdtaBgCuAibJLwFZoPi"
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
