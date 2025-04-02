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
    "5ZsTwSheJrDGrygTRad6rY2zXcidmswn6GtQ2kZcgqdnjn464rpaxg635rCGBzVF86pJa9tKNyj4gME4JWwgR72q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Fn2KXrQEAyNtdrjAg3p5Lu3jxSRqKXUNjcoCLUVpUQ7SsTKLmPJXAUp8eSR7DHtAanovNWD57PqNCsRWGqJ67cf",
  "key1": "22dYceM4eVmPmvL1iaDheTWX7FR1KNM9tUuHfBpAB5N7dvehsW8apMypUxV7cD7mxDY8D963JLgE4ew3uZQkt96Y",
  "key2": "4w7bFFZ1rnKpxrc3we9dE5a7hrxB76fvxwW2dSrSEJE5qKq91eBjmVBzjxQnir1FmYjxhVYaBC1dpGYbjS8pXNEK",
  "key3": "2PsuernGPsBKx6xYT9FBtUehfkPjX3Wtt7zmHJVu2AP7U6uwo2tgUKgD3fUZ49wT5nzFVFg27kpgTHZe7bQD2edg",
  "key4": "5Hn6s816ifArsRbZZnYi2yzymEfW6STDiAhY7SJe7AtrTJiTwmuGA8VREZpjkjqCYMzcEeNzh6fF2xnmzoiZLT8i",
  "key5": "3seWaK7RtauczLsLUUyUvS6eXU2Jx6QL9VV1GX6bdsnQraACpiExwVjYwor1TuyvD1NPP8tYkQ4Cg6CSzs1Kzii",
  "key6": "2MKAamztoZcu9hqcG6zRJdmComk5zoSJNbcnrWujr6DFAxy4B89YvSpW6ShUKVMH3eAMRtBY1fXUtyp4a7Nu5F8n",
  "key7": "qgGxHR4m9FdXAuo4hcFrwrQvzhw8Q7WzaPiiumB9zLHYQjipNgFos9M5eHm1Nk2WcmJguApKVZmgoz4BiWyUskX",
  "key8": "4dZNDcahHN4kDg9oUoL5WNa6ktRn5ZUHBwSJQinoHwxGKowixKcQ7MeVVwAw67aXckgtMUftXsJuV663cdhcGHPN",
  "key9": "5axdadhcqq5zcBn6156qXSe73YmJcvP5XiiLj8Xk3LCphvkPv1EQKRSumNnGTEkVjbBo3iapTpn1wxhCt4KRiAPs",
  "key10": "4N8cFfXdUhFXB3iEBkzoXG227auSD6KZQBFmd1Q5wrsqEggPrGvKp7Eo6R2kZE1h3nkArZKrrCk6JF8KSfdHBeea",
  "key11": "49fcw8psKdJPGppAKXHJcE6Y3nqXidFexxA1Kvcn4tawRYoDyWKAJ5qwcPWvovTMsac7Wy3zyKVrwJo831ZpFRRk",
  "key12": "2PQYnMM8eDKTpTo3BCj5hSzKkXd6WHwU34PksgaMnftHZeHiDhrdFfmZmhqVW23jRvLXa8Mh91sxPshDst6aG2KM",
  "key13": "weCqX3dW9g78ijVJcyhD3Gnt8UZZtWjGKwYBW1qRtJbSd4UQDP461muP6JK2Bt4Wa4XG2XY4oRqHEuUhssjeJok",
  "key14": "2qGzPAnfGPeEuAeztGnHuJfC8TkSH9mVqopA9SovS35uZc677xqpMRryvSefrbvukfUNfAQ5EdQheQar4G4eUvUB",
  "key15": "rBAxkmxwvDrBuR8xY459qnSCmynSk9M9XUT1GXJmj3eBs8G1P7345TwTTtLKQkZH4ob3Ks69bG7fP3V1D6L6T6k",
  "key16": "54DJc9Jg5C7xUWi6eFKreZfRQ8S7owe2JFHkmCKEki3LPTRF1YEhVnbwwXchSfXDbJsKskPR3XDyen16y9sCe9of",
  "key17": "5FcbD8bE2YSsuZoBFAVhK9g63bk6W1hqqNU4pJZRHjncWhE6FgXjZWnifQTN3S6DyWBiFPoRQuRtdMfLW2Vn684s",
  "key18": "2rZREYm1wHKtvEM7cbJqrNQz9TydYW1u7V97rqMQoUf8g41UE5vqQnwukJhv78vHL8D1ijjjH9Gc1m8hUqTLZS2S",
  "key19": "35TR4PnYU9V1TPcTGQMLwwaE2DxAWBtHf7XrcEoP1n82uaMphCkVCNK7C3D49fPca14AFPWKAXJ3aSRmRZU1HyLY",
  "key20": "DwGnDQ1XhJr1TCd8Bwiv4NqkhLjG2VS7brPWq8UJoXmU62wVWUAnzksxe5QVBZkaP3pF8aWW4NnPVT4otkr4yrD",
  "key21": "5xLLUTa65QmtGrNbNMC8SjG1SJukivY4mdhPw5TPZbfzrbSPQtnty8HeceVahZtatPYUbySKz2zmgnx9sVftY3Ud",
  "key22": "4ZRXHgv43gb7yF3CSQRNV3zMGPdXjknAAaLeLtQCH85R6wRfCZSFYk73okz6LtPXCWQxSdfodQYuJMEFceVysie8",
  "key23": "5uuU8vXCevcCVz1EVgsKfyQ1vNi8z5vYeT4X1WivGs3aBfSABtdHr6KQkH4g5z7qX7mRkp429x8zC5AtByqPvRjC",
  "key24": "V88PPjtFgnFeHVnDS3jNaFAxMdfHG4rH2xafKCPh22EUpL5MrQSfXFFXYiWm7rbfwXxdwnxBnLzXSqt1FUJSeWf",
  "key25": "5DY3RvAYhTJJDad6EVUBDF3X17BAcqR5DrWaX3Qchcvumxaapx1dunqrTZFXFiMvFMCBm5tvHbbgZ4WdQwdijU9G",
  "key26": "4ka4ZRFfyERsKqqfYijnNh9x76mQmeHaq3kgMoBj53a86qFG4nsf6TsKjheBfuf6TBgEqCxFTuGeMmwYqd8SMxg5",
  "key27": "3LLU3aSCAZsTNrHFbh5g8a2XxztE98YJmta9dkeoNYB23VNNz5EfB2RZfgjSHDkxXN3FjiYqaeXYGx5EKcFUt6LP",
  "key28": "f7Ec5M2TPgneTFjz7gEjY5ZnSgw5x4DXiQvtmQEgC3pTpR8ckpBxATRQ6hTug33ymVxKTS9yANyTG4aBVgic37n",
  "key29": "5kKaxrQiDMhEzUtGGVk86KzEhkBnKAYF5zftKBvQahSvhuBBbviqZ2rJegyJrRLzbEovFaTDo7Uxwsngy5n6M6jF",
  "key30": "8kgjPazMqUZajCWhfpNZ8aBX2fpEEUg3yMkfMvmdJSxX7WQbRqhPgLXLdrJHzpF6x8Pd9kgUsVy5YqXDJjMNHV3",
  "key31": "3CSmuX1PP8F8SPNF1bDtKyCai6G74RbXJxvbh3WcXtLH3JFiBFaEnv4AhBuYM9nWaVMftovQxxkpuz5a8YsUwQe2",
  "key32": "4KQTRdk882UMXJQ7mTJDCd5hTxYSJmHT16xkYhh6DWKjCov3w5srrYamVWkWACA4tPQTep6ugbiuGivhNBbo27gA",
  "key33": "4AQqJcSmWSZxtKjZuvZiQ7CQvM8QMfSv22rk64EJTEVKJ7VqiUnW32ZojFAjVGUvoorTR4UwNNc57uQeimdgjAJe",
  "key34": "5WTyK6bF4HqAKm6V9VB34sPePFSxTFcNhkYUaLeEJ83bCFABsfmaoMddv4ttCVHKDRjW5uqX4pLRFDGvqy5FVHnb",
  "key35": "gBcTCy8tqRMko1r7qgQNQGJwB3npNYUaowTPbaW2sBJHXoTFtAgosxRpajhjUpJDHznatNstAzPbDUwbfnwstGb",
  "key36": "4eGGvyCY5euPLT5CDyQKbToRS32PpECu7WvtnxtJkmp5bvN8SdEF6KiEYqfgsckbCQzfK6To76RyuhN5GrzzKwUf",
  "key37": "3gu4smXYbccEhSJSWcrKjyvgB3XjdivL3XKNu9pd9srnRbJ1XjwCh8KiVeUsD92WrSxjStd767uqSAQnRas9LA8C",
  "key38": "5szfNPH34GD7dy4J7AYksmyVc5yLRPJoVGa4cgzbDUHssj74y9AzHMb6yJA1arQYjesLuxJ42KmuVmZNA8fKMQrU",
  "key39": "43NwoG5GPhN9Lb1ASg3ZiMmkH9gByUJevXcYuSWh82Qq7WpKZxgoNyQKEjrHcd8NRTMPx777UT2vqyohUn8jqGwX",
  "key40": "3JdKs1kfrwWgRroaStrEMvJrYoxpNCsdh2aUmWAspEg4kWdsqp6ZCmb4Vx5akkkNE9cuhmyLPm9j96nUUqu3S6e4",
  "key41": "5oHUPhpNgPSQeQJKtmoN8e4pegahSKnVe56EnRTMu3W6aB95cF4s4mA84Fsy1Zkz4GEvpT7xRa5ae7RxX4F5CjRe"
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
