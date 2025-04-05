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
    "42Dz2t2WjddXP6Htj8hBJxq8mHQi1JsEYHCvk4h2M5jmCBFQv93JVLak5rvqaQsSEsmVViiYkBHtogym8CSkjXiY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38RD1gauyJBuLGDjLbL6aZCfbAhoWNjUa3BW2ThzffQZr2D9j3rMfHPfy9P3gsnQ2tL8DXXeJGbprFke6VLRYFS4",
  "key1": "4QHXU6v2ajhruLazLGdRg99EncRFjDzeQgNjguJxo8NrfStZF6KYvZWR7q9w8YNC88JWbExKZ9hgPchh8aXGLW9T",
  "key2": "382u9TSGFiRdX7HiFd7t28epPFu2duCWfGhmKtVPPJT3sV1UG6z4VAM9by2rakS3jUnrtwVzAzLAApptykXLdAZG",
  "key3": "66HbxKxpv1EKusQ1ooyxaNM5YTUUtXrJ4p38JDEGLwajSQnbQ18Xf3pnswVKx5caBjegyk52d3PqUxEFN3Jhu4FH",
  "key4": "5Y9GyMKTj3BVyJ8jHEHr1xv8ob3Enprg2sUenqeHrfRbVxP9xRedrxTGeSPmULJxoU6TH41bxj1dgN8BttoNGnoM",
  "key5": "5zHVvfRcCb69LFPNjHaydSd3hFDRQeo8wRXdQoSHHZt1zJjtzF3T8qVzmWFfQJJjVU7YY5SVnco1uJdPBsoYcgRr",
  "key6": "5Sr3FNHQ56FhAYY9UzbNy7w4FCChKC836mTNWKWhXceqdzZoRHRdxSmd7V1r5bQFWRWqVGzKyBp4wdCiEtSMhfQ7",
  "key7": "Azw1zyQDLGahuu1H7ciDp7RVkMmDMbzPNPscFe7JkLVcr2fnG38VvrJzK85S95V2sBtPsyTV479GYMAa8DcEkWF",
  "key8": "5tV9JiZbWw7BzBS8kyoQ2kyiJnsKmHjMCRcxD5RkAPtZQcJpSLCxK35rKehXsKAbs8Pbdnv7ZY3op1G4jBir3kSd",
  "key9": "5hj2YBadUaGZA38QAm2LEtHCNmmFXHqTPcAo32UfWop4x8SkZFPprKdnEdLsZ8WuuthxSGHNMiF5S1d1Qccsn9nH",
  "key10": "3wRkiinfc9reiCmNJrGHwaexNthpLRgKA5XGbkTpS8tA97PjjTN9vF1RxPKcw34WDANtmmhHCCAiPxqL2cYLiV3x",
  "key11": "z8KTZswjN4TNnbLF4zZbLiQxtiiWEZhZDSta7PyFqWFTKtXz7XHszkaoEGbD1kv3PWXJo993EdyDvPWpMYESXo5",
  "key12": "e6N7jhZTMiBSRUdU3Z5b4WpNAzTsJZnmf9JALPLDguae55CUFhfgaXgSgvBRWmnK1yBKwzNwwDiSQmtdrb5gB3E",
  "key13": "5j7SeHeBSUJ5q1Maoo9Q4GCMX2QEEbnei9WQFReVQ1S1rvowVw173jSRsrgDDJzkWGRoXXZ8zkSdgX57QKo9AZyC",
  "key14": "3z96eM45L8nByHkVnzY5ucQnCz22BGayNebGwQ48jht873z4m7gcrK3Hhg7Mbm7MvVTYjNLiwWT5j3wZDihXuuT6",
  "key15": "wBem2CqKR1PAQsUC1WeegthfXGQm94x6MVRGwBpEpABV6BaEcjcoCpKrmW5bFi5iVeLPghFK92ejYHr2s62oXkk",
  "key16": "vFXcvoc5tVe8oa6u6f9vPwk2cbArxRWayEtKqDKptNhEUCtcERPBPZSLqbxW3fjZnyX6TQ5psS9WPSgALBA9ENC",
  "key17": "658Dkp6cuWsUmTMmU38PgjbxVpGjbNQ7w91YsTPPbfZscg2KyFxEkNeaGMQEigx9zhL6eQsUtUCX4dWMPytxy9ki",
  "key18": "4qs7ycJH9oYRKnacvPQ69YArC5tmTzwqvDQzNmce2yLCqACv8i1UPZJSJDRzXcWtMyLGofNZiDZhnMU2vmrRmith",
  "key19": "5vzVyWmCXT3UHo4gPQmNbKCmjv3vYwVvx8FeAFENqwSdfRXWr2AfP3jtD6JZc6hY4fV9A3pdEbYJUBTMmGCzJcNU",
  "key20": "25D99kj9RwjSBW4bVPB97LmZZhszcHypqT5XV9XM8fycFBbvm4KGHDHAg67NvqN4dz7nepfWGtsLybAJciH3LUho",
  "key21": "42yaNEeEJcQjhDZVaMFZZDFsPZ7WqCUEC8WwGBAWg7kDYTeKWx6or9mKYRRG7a4uYQVyva597rqYwqEynkfFvguw",
  "key22": "44ZnQZ4vBEH2ZAZgswGoKozuS5D3piDTvhoMrP4a3D5vnoNiN9anqz5UX16XeuYJTVZ192fDnfRcV4N4nHpPqa1b",
  "key23": "2hV2UpNmPhLJvZokiXm3MXfS5qf18xfShggUkEnnGcCkQzkicdEAvEotQvMD2phAXAQ2ZARRhKSWCCu1VGg5k5hH",
  "key24": "35PKgzZv3kHbvPQ1TRZGqfaTA1HzmiMFjMjZtc8D9vNZG2b9AEYGWcCoiCH4sMccxajPAraicrTfLkb2BazFxPnA",
  "key25": "3xs7LeswrKojeeb234vuaXYd6ZNTL9gR7y3eEmm2Y5PvFMWCcoUg1zTSUB9tQpyTUpj8NhiVxEe8a5Sd2VttYNTv",
  "key26": "3fMEKVsDgVskoBwtuoWyq68Eipz7uPGuKEVd18tCBnt2VkNnuPE4ViZGx4jP3nT8FPXYpy6xitC84Zb9WAN3vWTk",
  "key27": "5JqcJuj7ynQxuE3L58pNrNDi6G2pjJx3jLbjiGQ3JYdif6CHmo1j7wPUD9oHnY8iJU2dSH8r5fTyFL3QCsp1CPqd",
  "key28": "5eZCqp6YZMMoahNJUAvqhjShMDA9TGVmUMuMDqxRFvzoNVxcatSHQdMqXWteJxqRbeRfu1kzSvbZsuL692ykjAW1",
  "key29": "5htP4tQpk4Yzm8rQhy7KHca8AwE9wbGZnaWYD9jycqfAv93MWkmrhHMD6B9fyrqCDmNGQ34u2dJE3YyEheBpiSEh",
  "key30": "3wKXg51Xmg5MzLJ7z2uhvTvNhmiaVX5EyffLJFzKGptKacEQfBA7mTpuBPy5kMTxtrCVDJfvrUxEjiZPtqbo8V1D",
  "key31": "4f6nVi7pGWqY1mckGEYz68jDHUy7QHgqw6BmLdEW455otcWZSXEs11EedtA26gPoXfqhFJYUdjTqXgPFWxztjEop",
  "key32": "2mhrzuJsiZyudC5de8cch2pk2yN75QbAYCr83qsvpgD9WXp3SFj5JrzFXEvhAd2KY5TD6FsvZyDrrXb41QHRemng",
  "key33": "63fVz6U9NE8nAxETiSB9sZPYuVRxWh6Abhtz7N1ewxRNpidocZC8vhy8gGK5prtEAwCBMBHsETuKuMDHymcE8Eoy",
  "key34": "57ySkycCt9JNxFfyrmMoGffJ5f8jatYPuPbxdEathTK9cSZHMwFTTPBdzeNAsdm3XQPuLZh7GqfNhXRaDcxXRWzS",
  "key35": "2B7cDMXX1kkoatRnVspRdY7K4c8adKqbnfbJbAPRNRqMhYXi3YPSprmEkfcTNnLP7S8KVFAMbSuLP7s6UsD38b3p",
  "key36": "518ytakZ2u69vgR16xXWXzBwBTobDjnmvY99ke7GEbgxDyezRTdVWSaVuQnULPPCcRFHFr6UVWyYhK3jViZ5rF1j"
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
