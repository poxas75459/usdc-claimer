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
    "4C6EzRFt4eYyQAFEYwzcgNqFQPAAKhNpavxRJFyVefbBDGUBvwUuQy5eTpkr7DX1pfmahPUeMgnHkj7a7T7JLZou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U4HX6Dct8kgnjxbPfTE3jE4m8Se9y78vY4J3oSsWDbHPpDEXAJvsb5qLvHRencipr2mRfJnCGrQs9mJCtMCQWDo",
  "key1": "4i798Yto2z2F4SMwCd33d8GB8CAQYTKnQCC6uKqQZ5k8jpVLgWB4CZyrJcZnmgPrWQBs4NaZ1twoAnPKA1N12CiG",
  "key2": "rRDYnK3BKNHqgasDkcPtD6UV6QBS1opAaRfGJVeMerFF8HNVuV9rsxnfFqkGL8HEoZVXs67PrYhs87wJMcz44Fi",
  "key3": "4qArdCVWRaj1AsTZUaAveUJo7jZGmuSpHZWw2EaAnoFSArdtx39xQAuD9p5AssNZeUtmAMCo1BTYaqFe9hFFMc3F",
  "key4": "5FrGw4qie2xVehGjZSRvUuoqqJw5jMkqCmPCQBv7tBnbJhA4j4xpjKQTQLNXSguo9fS6SqZk2boWLJYvemWowazD",
  "key5": "2tsnquMtHCYZPLZMk7UtpkY2YRnVeyWAvAEbavWas95BdNmPpEQ3r5MvCDFP9o4em7nTNAUbiMN3DA4pKKXmRwkA",
  "key6": "3gXshRjrD4VkbwJiTBsabwJ4YRgiRTscDjSpZiTb11dRaqTyRrTBZg6hWiZrhemfppuqvftGDR9vpCuDvLWYduuc",
  "key7": "4Zxa2VsLq4PAQvUzgXQYaDKdJDgVgbbDW8orT7jVfH9Xgcv7XN1z1p9Kp3WchMdivPZVRiWompYknEGKpECrty18",
  "key8": "A29DYwFkmhy5qEXVmvSeELUZpxBh2SR8czAvVbrrjDcutviJ7NfG3QJBMkmkZiGQCFa9UwQjrTauorNtFojWE4j",
  "key9": "sh4LQNqMM69oUHhrBAEjzcuCwS6j4VFTg7UsruBz8pkd2vNttznLvTRgmzPYpv8vvPAFRC5jJDdJ1pq6H7cRKjC",
  "key10": "4EmzvyZ8KqJNdSBpMgqCD166ihT3mdwgBjv83ygYjyTTap7RAk8t34hcBcxoNJ4F8SgywvnbAxeEECUgDVW95ZR7",
  "key11": "4rejtjVrF9v4yt13Zh2JbKEDAZpY4vs5fNv3jeVuJ1Tf9Ec3xtdMjKLmqcvZVmhn5cMJg7Vpo3hYm12QVK69pYc6",
  "key12": "2UUXLp4p7wn9jDiJVsmYK2CvuPRdU4qy9Gqw9W6nRPMvXPLdbDS825WCWxSEVASu5EgDTjAvhUy3Zg33CBm5aZcS",
  "key13": "BMCr19UNvcNNsuMEH1xGiKygku4NSf17afFNpK6T73x9siimyeho8FcL56CFj1jkYpQDTcAqbFQiY3pqWy7KYU2",
  "key14": "3ng7yow7TSvvKSZPCrjtWyjKfBsVqA7s2saRPrWL7QouAw6h3QYC8tFoq7S2RHf6EmRvHpGQiqdCaTCTT886uA4E",
  "key15": "2P8VrnnLHx4rRTCUFSoatsQ2bKsCjFLsCaFN4PXQJXzZwPuHBhomiqb9H8pR1iTZnUxddwrKtvTzrsEEww7RmPag",
  "key16": "AeExX8yPshiBpYVC3Qai1WDQgD2SNTXrN1912mPv8ZjxPrF9AEZ5Xsg5eLmgCxvnGAydwpJRNTV4H7w52Ho7BvS",
  "key17": "4KjF8TifZv1PEfxXaWXuARpxzeFi6LmY2rKnsiQbVpWhvdkAxwN3K7tHEbMMn6DMiTBc353H9N4pTqJgxqacjeQw",
  "key18": "4WfPE6CoNNiYXTjRNyqGYAiFH6NcBed6RMxqZVcyftKa2wbd4wx7T5NqnrNiWjQL42TbHmWcVHMn6TxXYPiTzRkr",
  "key19": "4M2zZuLT4kKuHEUZW6WL6EoE1kArAqnxJCmGVC8NzsanMpPWs4b7xYVN2G6m9AkBrqkjkar7k1DyMhSzcq4nAG9o",
  "key20": "2cJx63P5drqZocoVbDcv15qq3wXba2PAkvfZVfaxMJDdXmEnbZXwNyhdbCZZvhuqfpm6yfjmfCCXwSubASX6iwyY",
  "key21": "3py4gqSJVcSz7ApULPwkhMqPzV1TeUsYx343NfrSJVmYFyBh6jB3dXXcMfAi6HRJ5toFadjXgKJXraTrg3ZSjZ5h",
  "key22": "7tN1VnpcS5awCG1ks87T17XSqQRiSyom4EVdQEWvnyVDFe3MgRR33fo4uTiPW4Z9NoEcDkZvdWPHXgxmZZFV9Hf",
  "key23": "56579nHq46SnJk7RMqJ7YhXHRBb2HgRCSGwSwuhjVJabFHLUyGNQ8vzkP4oVsahqt1hEpb38vCvrx3dvRQD1FKa6",
  "key24": "ysUWN7SbYwfZ8pCetnmaJFvchN7oApBZn3o94M6iPZgDESg5bNMjERgaoqv7YTsQQaruku3heWaZddVPbXmTTPj",
  "key25": "4U3QwPTVZAMXpJdqjyuwSYgt7shuVKY3HgKRMaGYFYAHJzmXvqWQbg3P8uEeyMT6XddoujjV7GHmdsabKWYYKQ4G",
  "key26": "esrNfbxhC3ocoQtgNcdpm1ah61Xb6qSAvFAdEM5FwYRE5SB2PDHzMdNA1cV7ViNrGg3dGNLVrS2EHoYPEGxBnKc",
  "key27": "5gx7vaqikWF76BDq67x86qiVEuzsTTqFF2a1yxiUjSg4CjEyTYRct3QkPWBBncJeF9F4powbznkk1DegYEZHtVkW",
  "key28": "2THGF1rVyG2FxYB9EEuhStctwSoLKAQM5EXQ566nddrEiRTSoxkvw1ZLjuXyegGwKQubtL11ny8ZbbfUX1fa9oe7",
  "key29": "3cDCsqG3Y8G9Zm9rvsj2HqQGFKKGQpjcmkkMWZRydMd97a7idz7rBkwvA4Mbp6P6jNPQXbhceNhJx2xEFqyLHHaZ",
  "key30": "38Vhwn3pjtKFjHYCRf5JQEnbELvs8pUeL5QHmCBugTYnoUfSUWY2ZYBdTWxrTAUExESX566n8LV4oBsc7ARSP5ge",
  "key31": "3wvnmVSW4cg4YtVD7nmZzipH15RvxxMj82WkUECwe1KmizzCF8y7mPffXvRu8cA6iXNtci6LB3j7SspvWKy169L2",
  "key32": "BP7cZfEsFovWrkX4HaM3G8rNTW6N8hAXo8yXB3vqhafqnfFAFEZ7shv9tkQxFdZQpEARbqqvdgRgnf8ckyNNVnw",
  "key33": "2Y7ke6ngCPhKjNMhuMkMzuFSZ6Nb9yZ7pMUpA3JBCjqhcd9JJGXUqyR9ujyyfGtygg6VRzZiS7zMyof9PWWWu31a",
  "key34": "2TYBeELPY7gzQMCEPGuWm38vuum8meZpCGUdVQ1Ss6gDvkddA1oV2v9kMwvjYVZACwvGaJmhVDQffRPd4NAQQxWw",
  "key35": "4oZVWaFfYzCeDf6qbfxgDpfHvXQwBKPsLx9rEjq1iAHwTSi5pFBCnb4BS7HZQwX6y54WiLdAkgBhomxNa5dHsqUq",
  "key36": "5nrnc1RFaUHjhiguZM38F83idFJ6Gu3WseRv3ALMoHGJHkiDCdju6iSvdmcPsjsiDp7R2hRHmFXZaQTingCLmExv",
  "key37": "369XgmMS19m88MDReKJquhTrwWsyM82VdNrepNZ4tCDWdM1j76aG7euCwYf71cLL4JR77Mz1BQwnXLY7Y2KWMToT",
  "key38": "53jR1nyr4BPDBkBaqmAUrdjpd4qpVMX1TRGvUoqRqFAgUwu4FB29gSCvTQpL2zm7KEK7uSDWS8Y8e3fkfHxC6X2A",
  "key39": "5kHdRvwiaKLZZCFAHYSHF6Ux2ycTcdVDoajWJLwndWUVia9QboXWa3rbYWrvhpXzHHC56wtoqczBFDfHmm5UHc5g",
  "key40": "3xM1WKbfgSS4nEs3YzEuJTxWehsL465kZTyEBsbgxJpW12Ehfvsodrk7zpi3vDht4WB5uW5GusuG8Toak62nwf7a",
  "key41": "1mskyuBRUtTmwALGk41miXcZ5rRqvBRCtxL8z7KYq1RLjnWiyW3fd4uDPq7mNiiqWBzH957eKqGWKYoRG6Q41aJ",
  "key42": "5CzinppEg1gJfgNQRgzjtfjAZt2AiHYGTVkD2SrZwrKgp3osTyLwvjejEarZvthVzh4S7C7SsEEDuF9pVMFo7DiC",
  "key43": "3pBwGSfSKavLUz1Uj9z97DhnNVNtm7mQ8LBhcM8YfP1X58wDW14QgzGxGxS4FHxmYekzyQKqHpGdJcyRmav8Gr8r",
  "key44": "3ZuhTBoKV326M9h1sJNcJt68z7B3nWJADeQHTW6wx5FcxWnAhXJE7XJ714v9rHxb2RQr9BWEZTTWpgsWGd5Udr2H"
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
