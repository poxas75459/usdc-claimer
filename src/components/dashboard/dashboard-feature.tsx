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
    "2yzSidWBFUSVPoKXUi1WQ2mqr7d27iKzN1Aii3rbHzfNVyS8S7t8wLt3sUQruFgRNDy2Jm9yxDttzyXoAHS8PZEi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tZ1rRveXhVriTzGt5n8NhMoSQkr2EiqW6jQF58PPgUxZdZng3ot4R2RpYxx6dCo358uUpT172thWJ7ucbqLEJUF",
  "key1": "5WYcPufwpgWwBxeFz8kz4hVLmHdTZnBmd2sKTuwPW7FrrsUHHh86kFswct1FTzLUK6PXmsB8qCAZ6mpSVY9fXjqf",
  "key2": "3DFx5yRArewAQF3rGt76ZawvaT62fUG5KPjoiUxNvGv1szZAK5S3t8tHXXgUGewgbjPHXCTvwmRxUC8gW6FRx2bq",
  "key3": "mZ83tSarTxSiBHk6PRuHR8x65vy7Gnkmg7HjjUVkxtnXenL4jxB5QRkNBNFcwgjL7RYpHbgikGjoHWxP1hGAp9Q",
  "key4": "5VCBkn1tCAJdWwkLCcPPR51v6ePwVWrxHXzm75iKdE3aGmrqN3CFU3smAcstpF3JVPdvRJRXWPHNigmt5g9nkE6Q",
  "key5": "3AtadWBe4uzNUFrqotQCN6nMF5Aipvefz2tZs3xWoFikgGJ19wMJK4qyQBEzE74RHPVfvsvVf82KwbGZLunmXfRJ",
  "key6": "3EzH4mtBrVbfZQ7MN2NWXAYhbqVVsY25dHHpCJE1wxKhNmgThyMtC8jJ1pLqUcHsvHUTLz7TQ4sMMNjQmiQoTjde",
  "key7": "2gTHddJXEwDKKtXbyLdgqgoCzTw7bcAh8b7pKNtoBZoX8wEJwA8qTdqovXgB8tRmPfweVbYMTE9iyubVwixMbV8D",
  "key8": "wGsqTVsRrsrbVgLNdw9g5552f6mCEZQsfna1oC5iQW4KbBULtd9oT7iqDjspLooQEBDnZ7QxF6KCUcvrjYUnypP",
  "key9": "24J7cUqhe9DSEahp3icDXWLV8WLg552R67dvpxKbrQP3unJzqcWmVqgFAcjPu8p4BsCLPuMvFFZL2bcC3DCkhjGL",
  "key10": "5sBfWAzvxoLgh4b5tqL8njKK6ojNUaYVCAKAsqZQmfERFyAtZzYM3sWLmTHGpNfixPsAKYbk7mtSu1BD1go8FDn4",
  "key11": "26YH5UYCzoc4jJtp7cfpmQX5xGUh5fBAtHtvyyvj5kdmwvdeF54n3j5Wq2DEr3pamRYY4jJWBZZte1NowzJxVZ8Z",
  "key12": "2weBXiMa4ieAtA5B2nRTpwdaw994qEUXgCyNLDDi9LjRgs5YtGgt7BRqmLeRoBirzmhHLSkPssRx9ZKtooYFqiMw",
  "key13": "25Z2n69mDpteshtgsA38gWBtuPhrNqxgsi16xBgFcT7r1t7zssHDivoyHC3pZq7bGuurAenHc3mohsPiadhpEfGG",
  "key14": "4pV2aLGVE6HETKTGWdR6kZxDXVvo2ZzqYRzd9iHeCqL6Wz7WGDHb75xTSw5cPabUo5ka4EFetUxsCYbEsYpKfDda",
  "key15": "4peubTXeLJdXRs9sVvDR4pfCemdFgQrwXikDWhweLgxKBiumQSP1VE8yuD8dhYbHQqQcvbQ6qFb3r3bN6rGjXeaa",
  "key16": "SVBG1AWoDtwggDq8LTppfp29tbbJdBvbJSwmFeVHCLdxsNyEPQZ9A11eodpYPT9UAgs1QqGQQfWrfhft57xe4vt",
  "key17": "61XnFGgiBvME5PRwio6AaxGKE48bMhoM2GqP82tvzmnARS7xajoqz98rcazN7iQvov7M31D2URrncY5RSzBRMEa9",
  "key18": "4z2FfF49qmA43jocHhaSG7y8TepdvVLLF11GGFGXwzMwrvBe4uznCJMdJqYTYLAF3xTdQ8oh3zQJ65vDNqWVuMnB",
  "key19": "3vrF7pSXtYY6AUXBp7AF33tNTnzhors8pfSUsFBBqpUq9h8CnTakvCRePPXwZD9ghGucMT7B5jFvWJU5LmenQ3Xc",
  "key20": "jEKzwA2JaZkTwH3i5as4unJS8W5mFrZuqB6RS3A2D1PSB7xEuprepkGz25X9yfJjPj3k8nYC6SLEgbYmdP7Nyfs",
  "key21": "4TJCm9zAVMgUmHv93MJNTLbkarjX5xFGHYQpgsQH7BR4D1pbDeNrHQKRsrVJzpeTizM4Ch38CkFjuqAdGP5bpXw3",
  "key22": "5S1ZXfjn4Bvu3getKodk1zh8FoGsn8L65ftDvq1UkYYLczwKs7aZFpoFYaB87MtqqNLqV828pQvQJbAfj1y67ysK",
  "key23": "43braBXVa43RR11572AZQMjr7teecFfKzAKubVAYV6j8pCsbCSs95d4ThzmMR7N31cW7Wqbkp6m5hLK9LnnkTSij",
  "key24": "63ctukMP9ZmLbWifi6fUyxasnZYMVobqcse9wiHFgQS4aKZDciKfAXoksTsjxSGxjusfh5UbqPwdfPzemD1HxEmS",
  "key25": "BJKPhLpqgyP9dB82RkvDf9uEMZXY6wf6SNPEYUciuKrMh8i854M1NXUjcALMrLk56hk7iGwr4uPAKQ1NpbJrtvA",
  "key26": "4Lj486ESVFKpb6n29arWvXngQoPabJv88JcDx1CEUJ6PwfrdNbA6SXQ14ktwb91arw6LkoiEfGxt1SESWWjR2CV9",
  "key27": "5QuoSS2jdATWLL5A4366gRQXvFUaTa1vwMccqecZv53tL6H6727DirfmG4DqKLk9HAEtwHezNnzr26XcYrhawuYN",
  "key28": "49MytUURsnBxed2CGmfYxkoEZBRau62kwgq7nCJ7CkNNUoPNJDUbGGhxpz2jmScM6ueaF2ZNNczkMa12MddNvJhL",
  "key29": "MVmngF91wMrNQg8sdWENxiNUdkGUvTm6PtaNZKSYfbGoMnELiKCpLFWQyK3aj5jhCGDS4nCAZD7gVKGfxTxxWDx",
  "key30": "2z994SaiPLGEzcbZe5kRN33xrGTE3vGLmArh4pF2YYry6cF9uZWa4pfVz7LHhjFRYdRmBHfwry4mbD4yNvWtTYPt",
  "key31": "49gqKmF1McWr3z47Uon9ZDo8GfybE7BUi4EddF4wGY7oDrCAqNnPdkd8s9z3rAgB93EZXMMeET9bLZvuQPcYb2uK",
  "key32": "2E1A7h7qw2Vpk7DCuTeSDX56GFKqXacT2FfggBKTHkHoY7UXczvZvLuG6yo3HxPhuiAsqLwPUc8zBLu1cARR2foo",
  "key33": "5tM8iWsXrwv4qdcithqGCcfHoKUyaTzjYbFux9eDLLw4CdNpPHhcJZvcgtcSi7hTx4WrVL72RBfVZ31fXSfhQRZ",
  "key34": "cCtqrpCUeK46sS8ucHm1eTc7F9Yxcz4NRfsScDYLPEL41hMX4oCzduhamcinpsRBKGZL8aBPCWT4R8FkSNGsnGQ",
  "key35": "3beWHoHSdbh17JxWrrkPpjrJRsaw7b7VQCaAaRV4S1EazecpgVrBxPrwGSCmK7DPbVWzeG7uSDLcJ9ZPGMKRYgar",
  "key36": "4yXT5hcx4kHWw9GAe2gYqgrTpV7B3HaUWgVY6zgp35wauzcSSruGE4yx8XbgFdSpNbaWMLxJHkjjyp2NtJGnNmqc",
  "key37": "4RSVwRZ1HatSYWR8z2ZqXqcEzRdNkirvAfLjKdLgXbq1FhnsJtGftBDfjJG7rYZNCe76zp5XAxs5aUy2EZbPtvht",
  "key38": "5xy76vDgPEVvdmVgUp1dMrWMxsZ5VMZqMU9GAjk37vhPSg67JV5zM32oLgiTj7aGHQDtw3b5xs1XKFSStcYGgewX",
  "key39": "D4N4YgiAW8QzkbCMGV5vwjv4XvDm4GSMqsy5P6WHM3wC5CD6TwMrDigoFKANjqi3kJEFGs5s7FyH9kWU6je6Di6",
  "key40": "3Rd3dzwtmgawwtTwZRD6PWc4V7hkV3GtfdHp2M9PWPTWVZRV1NwyU2PQk6JVGNCB1CCG1vTLQp3PTHGsi5sYzN3t",
  "key41": "3AoDJexA6UvDVmSmMvhGNWKAPkAmZKYmLN4YKAHuVWJGUjDJG78ySsMgpYmcUvYatuP8YNd59fwMyc7uoT5Tnj9w",
  "key42": "46o1Me4cHckhTWN4kr6KWZ9LrzKnHWmFd5idg1fqscrUQDW15CXQtCFktzTjsBbr3S41rgN7bUkPimBsscaWHhp6",
  "key43": "2kVSaaL3iAsFBCg86KtYZ6JiUX7NHXKKU9GcAyABZazDqE3AkRAj8rg2tH4RwqMHJxh1AzvqE7gnZPGFe3X7eBiv",
  "key44": "4Nj2z35FxVxaQZRu9nZzjmVWvoNPXGnA8iqhXqkWe7poVvhkvGXiqRV7w7L7uxWcBUsWrHwgxAcZWsu99LA7Lhs8"
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
