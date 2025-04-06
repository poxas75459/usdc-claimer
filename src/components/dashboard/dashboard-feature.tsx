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
    "5s7kdrYUpSD7S12ovuey6zGmMBLp4v51Rueu9ZzHxFv3mrbdkoN2GxrK7pr7GNA2sufMArSRYy437AE6GePXYEb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rmM9DtUMUd7QmoScfSv3HNnNYXv7AzuDUdkJueac2oPxDMR4m9RsdHknnaYGng8TTXUhwVHBVeuabAZeHxahBwa",
  "key1": "2zmoeJLWNpCaA8K9aHY3eJydxUiLt9rfGRyGgM5pzN2RErAaE6mYeuuF53JBQn4JfJ8UyfCZAFgG8HeexDe1zojx",
  "key2": "592ohcRnA42G1xtsHezZetCMRJ6LyvqmM1MCz89doPyCNpw1mthdpqUEpQStyUvveSnawBKCR6iuoBKJ8RzzKp4m",
  "key3": "4cFmLJebuZTzEJbmnL3xKfjGRW5yeAYAtpt3WBcrKhecVatQjpVQwnvGQvGZekSrPYNjqp26DW1HYa3hTTiCViRt",
  "key4": "2tsYvZnqvyN1qBMf1S8mfbLSS7DUV2oVv2sY1KNAHCobYnuiEaB1wXGJQLBjKW9nemCNvEzK1bSWnARZ7wzWBjn5",
  "key5": "Ucf3tumwU2HoNrQ9yc8rKzPWMXJXAxEdpyQUqphnjJmRebVhyMbqafMi267D6ymcQhDjSFhBZ81jhzAmrewZcSQ",
  "key6": "2NiCs7zKA2soSA7imSdvErk8ZCg2s98hZA3t68nkb7ybnXfAMwuGLLF9Z7gsmVnWQMsdr6PVbrHJLf8NRqKhEnPV",
  "key7": "nepsqHWSA9j6wMZViRE8yQizZYDRf7tCG8LxXDwzkUGUkZPEDo3axqcfBTjYBNiJWJMLGLzHJ225m3BW5gDZTtp",
  "key8": "5noFYvnYu9yJmmab91rkcGA65cnyp19gg6fgx9YZ3GzDjHndZjgo3PkRyZZnTK4dHJmRu3YHF1UjCZNj1BFdRjb7",
  "key9": "4V6QFq18htncNnobkS6SEJeJ1qGJcGmKAXGdHY9GhmiZqeZnVy11umHj4pwVkdH3MZfB4qetJP3yBnG1SgfRQA6m",
  "key10": "3vXZWjmJo52rnwL9MY3ebfx1DpA1a14wmzhPnV5sgYUFQGB6qCTpH3YYRpRc55yx9SMUN6H6mNteWqPmhj6ivkiy",
  "key11": "3tqm65kz84dCyRWpBxtuRWaizuSqxqo7KDVeoUxU8PEin9aVZKtjgLCdLMBXyWZ8XMvReKzRVp7gRqPPqd8VrSJ4",
  "key12": "2wPtZSMS96974gvFdnUmBwDQiuiy1Y9yUxdKR4x6eoJADbqrTYTdciVV4mE6Bdfxf4GBuRKFT9ov43w47j8UBBWy",
  "key13": "3ymJr4PvMRwhFTjjPQQNC2MGqQXRXsPWVmTBrCHQKCPGdxTNSf4TaEu4uAXDdc7ifTjy4Ub3d8kLjuJtLMnK9tn4",
  "key14": "4FpyvKVBUE1vVB4Rr9M8rCW2h5VEgYJvrVngudDyCWYktFFADgvmyp2LBmMH2VypEgLWy3ZCQMPt2rKUjJjjyC15",
  "key15": "2Z9ggMk5eAeTzVhGj9Sdagbs6LXSqT6WeDEz5FPdcmrhTabaZk5qnTKXeN6xgs9Z8jfQCHiTypiNeCkjS7FDFyHH",
  "key16": "2FnGxukD6ixSmHGhgAtuS6KgnuK8mFUFA4GXr8XsUEKLYEjqLTYQBvUGkjgTQX2xcaWi8TTDaw72BdSNgvFuQED7",
  "key17": "3zzAXnHEsw5ZYjBt3psp7q6fYxEsiuMG7vSjdcAu5df39G4x2nzj67SXcS65yT93M4PAfny75SSif6jJzRHZN1HY",
  "key18": "nHRChHvEr3F5MpPYwEBYmNjmw4S12BhFDGjGZwNcYR38TexUpikWTdkbdinvHwPrzrCz6BvfQpduezsnpjc6tfw",
  "key19": "CTR4UtuPbMkaAqmM4WZ3k4HpLA7Gy4fj38oJKtPESbQEM1mmCqwVhTTwRcfUBKkAWaLej1m5bwkyxF5ewhJTHtY",
  "key20": "31V5C9F7MhDvwT188R998zy2yQiwna7DGi6eoNAH9mdEmmUs9KoLb7bt8pnRH2fstF91tuKUhGLEbjGVGoSUDK4",
  "key21": "5hTwkPZ4kz1WjSZVghvsrp6rSsLGNUWeJDCya4VzjUbvarSHF3oJALyUdJHzPSVqLHC2Bs4Ayco1AodTiBLADDWL",
  "key22": "4s56PtmVDophzxXf2ifVLmfC3ucXCx43a6MSqVdu4RLW5t7hSVNVuN3vJKF4yuFJgTTLF1RQiDaQDruA9oTpnUHF",
  "key23": "3XgqY8QH8BqFtrmQTFkEKKvy2iGY37G36V7JXjXEZqxwwUtKWuyr3HTzPAQZ4F6mMmB84Q2fw6RASMvP9q9t6rcJ",
  "key24": "5KMRzR7xvqYGQdgFqQ2f61crFuHK5UqHiLquHGKKiTMKmMmcg42pPHwgLMCjmAYdvxdVWy4tMVzYyTy5EZinQ3th",
  "key25": "5pv243caN4sUVGQM5Ujd8rK6xb5y8tinFbGYtuzLV9g4WvMnkzPtQ2FBZ1rkTJiAD76hN5a8zdf5rvgnKivx2EeK",
  "key26": "2Aq187MY1r94bf68VqdT2CzB2RoNSBxqJDP6qsFuFSrXxyMfenWdK1RVmdzACauLfWn3mxtnnUe1rbxuGeVxFJTN",
  "key27": "NG1PH8X8TgmpFQLBXooAzqxzyK7hzTKJsvi3N8D7hHBCJ5ZvQ2gQ24HqjFKxRqy4HbJSRizNho4RaR7EFvDZqEQ",
  "key28": "4foSRDZ4VpKiSAPdLYojZkBDq2T3dtmsv9kQLuDn7ykugT5Nkky5nrszNd5QBvU12nAbhTUAAAbMozg2wTp1ooRL",
  "key29": "edHAqwwwbdKZfLm3yQKYm2yoqerAWveczbbFTvFRLuwg9RqC7SbtcVnjwnbkPEAx1qTpkyHk6tGqjQL46iNf3R6",
  "key30": "3gT74APQ99J1pG82fw4fJrQwac9psxXjPA6D83pjJjdJVWXVj1Kcao96qDxUGyCQQAq1UeNBMUoMn3uHfS8RMvy3",
  "key31": "62qrv4pDQLDCT3Z4Ans8J9J6KR7McLR18uhsBHwKdMa7pjyNmGGXkA3wRwBG4QvhUx9cchyCCa8RTyaNCCDZYZbT",
  "key32": "4qkNJL9dfq1gojSAULDiAUWHMRFzMN3HeDsrJEYbwDxEoF1DqYvAWj8JJvvz86rRsRD73g8H9HSwY6Q3XiPTqgti",
  "key33": "2NjdwjaJjv3jRZV9oaFbawnj59LMszbxJ8RHMWbJEYUehUEfz4t3pMD7HtJJwedcRk6sDK1iHPA4hnTNd4vdvvPQ",
  "key34": "2rMxDCEBTcrmTjpoTNppXKf21EQw4K319g5NkjCkmzggZXgGK7JdansGjb6tAoU3zkumPa1ZKewUPVz81bt8FxKn",
  "key35": "3FWZs6USnt5QiyyfvS958XphvpPsh9GKFu8gxxG5j5byP187VoFkTLozWpGP8khK55sjx13ybK2zmseVGKr1uwRK",
  "key36": "qrEPaSc71qHtCKGrY8dC6F5F9haD9LgRdVoTgk3M9ySeuTgT5411jpkHTxsN9MaiYav2NLVkWV9o5NTHRzzCd5L",
  "key37": "63feh9DxG8w1YnVzbtmrNAWMmwHER47QdAxyrLJwHMme7FrcubkZag7JCTAnYyhgehtohePcx8Q6cjvCgSqVeUdd",
  "key38": "5wgJJGsNub2bnUvbnYjR4AsnoVngcvFARDcpXUfagWQxV1WjWebzM6iVEXiUdCo3Adg8FfVWp6oWJ5foUVXVk3wq",
  "key39": "HFtA736vFh9o3Y1GheBSjY4m1dHJpwTQnvjaBiqBUdeK8J2ZH3GCyz8NTBpZXSJCAsgeNSSQ4QkDSZBDWgcs3TB",
  "key40": "5VQmPr7ejtno41UNnjCRyXzmwgR4xpguTgGz2Xa2VbLUbrTRdzK6jwmceRS9UQ9SKRr3k9XpRFGNAywAwX7waayi"
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
