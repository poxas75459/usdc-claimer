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
    "bxqx7qJfcc1RGyoss2N1UNRhvjCZPkw1H1k9rnuSX6X2oxcRZDZXFQaAAUJszCkNmYoh59TeAJKnpQSSmoesvxr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WnbgkUBxh7NYAegLuoBFMC2rWVAsxskU7xLW5MiHEgYvrskkimRzdhULy5umYRC3cQLLuN3DX1qh9g76VDJjCEV",
  "key1": "2wBdoguZTpq152ap1wDLZP4uZotkUAVHtMNfuQKsvmbMgwTNb6yoPKPSkHnzbfSxdAejKAf1DrishyKWTQAaPVXf",
  "key2": "3j3odH4RjE5A15KHDo2PhNSNB3cbqJC2VKRRDhh9NT5GLJG39aZpVAGgLXKvt5PNYe1NQNJrggNiRfosfaRBjhaR",
  "key3": "5KXkhUQPmYc4cLuycuqCuV2dqUvs9rcTPSmpLRQ4wRxS1tpeoPY2LwfrRmxM3Zwdg5BRyQfRmefo2nHgEBh2xJqY",
  "key4": "64ZZEDzM7TnE5yCv26KwvoWqx9UQEUNySNN5ijaZ3vTv8azgpCuBpQKDyYLBj8vcq4Z9vfUah8A2gzqQrdnM6gtK",
  "key5": "4zjxp78fvzxAU1H4EBc5a1Wb97xw64FYNxB9ZG4qQ6v9yEBTXY5VrgJVAv1nbnYER2pcShscDX7Ffp8FMBHCtUS5",
  "key6": "51gTNjSaqqq5hW5tceB2F6iEiucrmq7izwRYcYzaGgYDvjSGhDoipfj5nzuGD5mJPbdDxha79mt2aHnuPCwdZrNA",
  "key7": "5mLLKHcncMd3UCHADMdNuNZAiPDHBaeUDojJ82LFvdrWSM591xwKPzryGPadT4Bnaus9FjSbYrJcgLsDoZfRd7nG",
  "key8": "RLHvPGP5C2Mvqhb9gBEFhpMmhT31eCLqi1QQQt4XPMfiq7Rh5X3qkuMDTTqXUJxsw1JDjSYj4o8SQ3UbfqVKGFp",
  "key9": "5fzruHUnKWdChwqd1wbq1LHhpMhsRWDSkeL24ksrt6iYPNjFonegxpyizowheihRayXHE9JMgUSJFNR6F6WoBfMD",
  "key10": "tLfcnkp2qaKTYPr3SBhLofZ1Jhky2x31JcDjLVtkXqAGGBgQPqxCcgkpTZQuTu1Cj8dRpT8kj6fxmCVnKiNYuhZ",
  "key11": "5mF92jGFG21uUNbyP1ZHiLTemfGKDYMozaVsnNkLSGWhgQEhMf73h9AirFrUEYFWcBv87b4RNUXywmNAcuZSq6iN",
  "key12": "43mKpbLzEp8KNhf2CocD444g68erspWGdUxYTC3sjRbB1BMVVtek1AztGw9bVZNB9esBSnB5sPt9HmL3AV4z9aeY",
  "key13": "2LgNWGu7dK1hg1MkSKyqs1CHZZttumV8GUGggYNoF3yqUiPG3yxnHWSH8URuyETYkhbLxDJxwEEk5vQ4qzEqaoZH",
  "key14": "2vUwbBc4Ay6jkeGpkLTCJJvDaykpc7GtzimJPhqNzfqGWWmGu1iPN9H4HDmu2YE7V5gT37Goh13hSsSCHyPvLq7M",
  "key15": "4Bt5C4WzypJzUScNtMan1E8X1MCC6nY7Cq9uRWpv1MovStXpbG5VBLnCwyru73YA3gjSnKkS1eMLkEwvSpoAumTV",
  "key16": "3YeyM8YRQVHZQHqWtg2khAvq7bMkSou2KeSBuhSEYwUzCrjCviQFAfARYuMSDF2qXCWP4kVUy1ngdL19Cr41Gjek",
  "key17": "5ETNjqmAhCpCFVQLeguCQnuvDhG9Ls3dzZsJftxmu6P3mwBS2N6FK54nWWGsnKwrayhhvBpM2rXr47MRq68cR16Q",
  "key18": "2TMd8XNGpBPPWkX9gjfiCwY8RbMEo2zn5vJtZdxqS8FuV8YGTBbXbLiL2cVwapuxCTX95gjQv6u5qFSZzHJ6xK31",
  "key19": "bSL1oJNqTThRYVSqE3ohXGQXa54www3rye94ZVWAgFsT3GJbrrkP6wDQTS7JkS5HrbVQmXRSHCF4ybm5LyJyK2X",
  "key20": "3mcPNFdQjgbT1cT9jNZozJgdmK6cev8vUCNYmip2CBxRXTQrv59KZA6XL8ecFma7r9vSpmaQJPgVnERd1XSBLXVa",
  "key21": "4M77kaYiwmTY732WjsTupsytfh5QRd9zb7bezc79mWZFUayy3mRc3ZvLnv1WqyAMMtRnpV97phT7wxowRVgG6uWA",
  "key22": "5nHkXQUiXfpJAjXzoEpLuAEXJvZ8Hw3qkPc19BPBaRYc8D4rKQxK2xMEmG7hZn87oSsBYt98gd7i6QLrTts7ZHH5",
  "key23": "5bBUetUPtqHAxAYpCUo7oyuqTn4izQkkvaHa5z9FjFvtXuUAMcgTFh16HdbadvQyxXqCwYE15BhwxDt9ibkkFvHv",
  "key24": "59csBQV7zy2VMrpzHm757bRjgwKdcHr14CEvd2BHeXKiL5ZTt732bAATDuRz582a6weifbjBJi64vkUpJQ5Q3Si",
  "key25": "2dFYeg1Knfg2RnErvyxehLycV3Em4Y7WkK8aii9AqAvQZggmsGfKtYAh3mEnzpCKc8ZcxrgdEPAeuPQ5tuvEN6s9",
  "key26": "27vzyJMzGf6rwAX29M6f2STryEVZnE8Zojn8wHNs8zqLcuKgeeacEjzVSn7HBG87Bbhj2Uv14LraxFN5ooXFcqZH",
  "key27": "275uoz5Q9DRDaWEDxcTVxbkcA5S5pZh5U75p6iK8nti1D1gpjJEBHAeejJkUvzqEkVnVr1y2uZMTsAV11ktnenpH",
  "key28": "3V9TWy7RnqPr1J7YJH6pemHi7bSzvxtGgpEaAjhB8MKzMomW9UmHSqviMRPVKRGuiFCk6Nyubi2fS2PQLneDWsd6",
  "key29": "3LuNK7FBNUvnArSSM7z6na5Sv3TG4CdBammYo6oZADHNjiW5RRuvexjdL4kE4rwAboPMbFXtju1WXQfYeArupaXG",
  "key30": "2rpDTtVQbkU3QUF7Q4aaUmnZkpNzjFpxEBfn9dXtidyEMU6bxbLgAnbF5ZM6xPngLoeWsRkE6c4Qw4a1Y25myqWt",
  "key31": "oSuyYc7BQ2EvuE3byJaTjX5ZcNZvXSqprMKetMtwSVmAX5Zx2Y8m5vofPGGG1YYwiswhR46aiUne8Y8fTWvsTt1",
  "key32": "5NJ737KP3xbFQws4XggSikAX4hR9p8Bf24vk29S9Q3X3VTyXAaCeTH6vqqi6qGgLkcYr4PoLw1wfNYssuVbhiDrt",
  "key33": "5Z5dV6XdfCKUPDftBQL2nncRefYUn5fBLrqJatScQJrv5Z7jbptJWtGkFRzzg2ABv7tjTzsj6ZStGZEGXWkBgpAS",
  "key34": "3KrQvZuGgSP42EJVojW4qVZadWsKFaizRDQXy46gpHRRwxoofWaGSuwYZ7nCT8DgtRbNFriCiXuDpCJqXEvXp2EN",
  "key35": "5NKofm6aHS2FKvsgtCQQTSDPHPQ2SD3FfRscc3yo2WazU3X8RhAhiFJ2d7C2qSJk7ZDcjGqTPR9mWaAxKapD4Xmp",
  "key36": "28VztK1aHAjBymYBG67vH8ZUW8aCLCiaGTTpErvszBDYPpgeq32JQyCLX8wf5pCMqXkZKVs8BAXTmGRy2x6qyrKq",
  "key37": "5B2iLJttJMdgQ5rap9nrhZUpp1Gyg93PVsuwgeMC6177ysmh7UyvRqsjBNNSnsGsn3ungKg6QwR7FVbnUPHGewc4",
  "key38": "SK3nkBx3jFpJy9SKBYGFdJG9EKoknh2Xq28HYSUzoc5fjvvRDjNf4Mr9wmVaqk9jVutX9k47qxsRrKoLd2JfYdT",
  "key39": "4gCUmEmaNiBwXdsqk3Pohr6sHNHuKtuqYGFeS7UbDnB2cRNUZxkg8EjwyY58n4WWdJAGVLWSJwi3HZ4My2v6hqCW",
  "key40": "3tfRPhBQinnd9Bbp9LprNHnMXdqwCq7DwsQGgc14atbHPeLXwJU2CRrda8D3H8xVhGhdWxrpL4epu9zc8UkjAeZv",
  "key41": "64JmAuA3mqf73WtezoKYvT7pTqnW4mhpAtsnyLmKr2JMb1vowyExqmRdjobm9hkk6PxbZhaBfofExszNGvtppcvc",
  "key42": "677oWgkxXrjjTYPtKQbfCbyeewQT7ZdFPsJ2XcWc6gJ36i7vRmqDGacHqgXo5sHG7YFwH6J8HQ21pduuDugpbrCT",
  "key43": "67k4ATWZGAdK1jXG3RctCDkuDx5Qpp8qRfvMwG7KiqmBe5XGKyuLcbo6kVFD27xMWxVgZ5UJBmbigAFNiPwNQGWh",
  "key44": "3g7jLhMi2E9RDhMuJVb6BkEGdTS2u4wrQPKvpEss2z8Lv1HAwEDet3ujJ3tf3Pd1EgC2cfzVHcedPSoGyufro6hQ"
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
