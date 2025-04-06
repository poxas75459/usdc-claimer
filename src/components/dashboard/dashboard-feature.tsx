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
    "5DUBCZkrWzejFBAXKaHTt6LT8EHcBkhsEU6njq38AAwo4oVjUV3sTXn3nG5w1BP7qvbTk4sSGiP8HHzRjAJ69mK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u6SdoX98ZRNPzWXqyjRuZZ5WpCKUim5uyVufXH2mrHAEbBj5vpq35MebKLmobDwky1fh34KwaKw2ZpSmRyacyDP",
  "key1": "2RpJSHiomVgLQ7J2dvXJvpzmsKDYZNUckyJhGJt6a9UgBUPi7YrYGTDv2qjcMaLR2t7wgmoSE39PKf8DvFzEGcaY",
  "key2": "3fxuSsBZD3YqJSwKBfm8QzF3FYcgo75AzTKZnRjQ9DtPy1M9nyQCHFKWTm8ASWwnUwaLdvYgLdLdvMS4hUjAbtvv",
  "key3": "UaHhnzcqmerqQUEGcHNVSM4eP4NzZskGztRjWGc3Cu1TAFvWMxEMxjne5h7QCRmPno7G6s9DvpSfpQRRqEhgu42",
  "key4": "2txgkJZ9bDqcY286CvvLQuwmRkqz2Tv4yWvWAkDkoHBZdwRozNKFxB27QGfsjDNm6D2mAaCXbFmgddz1nk4PayYq",
  "key5": "MuZ7n7jyH7REQ4hkrXQogg2XysXcE8fNAUr4qTzKEwwjkQJGFFdtUNsUquaZHMsovi93eWmMeseXVU3pN4kSSNa",
  "key6": "4XJoDymBBV2zdYiSQ41EcorksY8pXUqHhXHPDkGRSgvBxdWWvvSDcLSgi2TgTVD4PfhZeaZBmTJw9vy44Y4LhhF2",
  "key7": "pQjnjmcAT8pGNxruNsVum36HpA3iBLQ1NRRANNUHfAUjcF65SDRB7tfC2fFvNb8VG5PKwFvcUeCBGJpJkbeSmGL",
  "key8": "5BRHZyDmuKPuadKhetD9VP21RoAfq26NAkTuC7dVG6rNV8Xtx5wydqdTZ7EgMe7SqFWKg3hEk7VkanWnAGAWSSpT",
  "key9": "5LEDRGqy6f4E6bM3HYcspDXJTGUsEajEbqgWYoh42iUuKB4s2T6e1Z6HRNKNunsTNpS4CTj6RwGkCKPn2kJv7eS7",
  "key10": "61bGx2Ziwx7pe8c5P36qEyoKe7kMfkm8KwaFV7D3E2hfGQcuikC4CH2vLWEGKbuQpqdqdtQ8pEqhMeCVuEK1aj5B",
  "key11": "zHYAKUw9YFqqYh7Te7DTZhf94tz7QsqdnUypZLdzzgTjvJGSbXTKaPnxAiSk9xS4T7Mt7Xb3gEYFokm9dFqjtJ7",
  "key12": "4sd7ro667NGs5za8xvDs9AUgYnVaxGYjAbMRh35yL94p8cBG18gYFwaXYZPipaiCAZZPmNw39dPLNfMVcgz74BSJ",
  "key13": "3hu2yMj5N2APWEqjAjhi2gMCR3o6eZTrA4kB2U2gsJKqctdUgisMULCg451QeRJ8y5suVFa4hVNtZ64nFUx9oz2g",
  "key14": "2oBx8RjeVWHMRL3d2TBv8dq31Xj2V3Qd6WG5WBAppiE9pSHRGzu1yBE6kM8gHoT8eXWAGiZQWcBao8vMdDJZfov9",
  "key15": "oRLxqcM6Y9HcGyFYZTRMKVvtoj14Pi4R2PCtaCWwo6QJ7X6RLyNx1HBhWyFpo2tEKPfy4AZ1gy5mSFFZWGmpJxL",
  "key16": "2eYW9Ev5EVrV7GRNnhQCFzwL2KgenBS8irC8uRvPb3fsy8XpAHPZWTHyCJfp7q5s9GBQ6YLXBCLd3oCaoqx3fqWr",
  "key17": "5LqsmM6bL6qF77XtAFcMXzrsUxm4HTX8QW3TrYDby8zxJMBqBEsrV9CtuLcGrvgcxjqkDQb8ahvirtWwaV3rmCo6",
  "key18": "FDKrKUgxsPz4eA7dxnsT3ZfP8WKG1Uzbh1BtiBwUp7r6MW231ifPSGnap2UmzNF3hoZrevMkPJsKfZJTdizcVep",
  "key19": "2GFN7pWkuQk3HjAMwLNMx2Piest1fF9vzb7foK73Y7A8j71sLNkzLAVxCnaCNhJR5wVzLYsq2oQyqJEUaCvpyuzC",
  "key20": "5ixzPz5vzZcCdYssWogsd8VKWSnTnBoc192y86wdaULbjLoVCZB1DDutcw8NedAJeSe7s5y3pgFjunk6rd3JWUFV",
  "key21": "5jgyFD81nXf8AEj7hT6B2csEjo3iCis6XPWrzf5BQSCefXh4fKeaG6YKfNN32XYikcfPszkSxNtAP6uzp1LxF8Cj",
  "key22": "31fUj4XcvXLcgAxgCgJg1vMvZyjRyspZKVEJfhUySdyGX7J8vrYJZnEntVnLmXMC8SDXPE52XFTGrf76k3Rz6UJx",
  "key23": "37ZdfKAhYhNF56ocJjG7nCc2qU9xnaJNUFrT4RgsH7z16qKLQCf8qoZw3sY5GQeM8aYrC4nc9A8FZPbGKUqYRqQ1",
  "key24": "cNYEVjJ4TU8ufbTArwekTgeHqM9imtp5ZSh6qCfE1fut88LVrQuhZaBZvj8ukB8YP91E1apnnxM6zeP9mZpNQPx",
  "key25": "3Yib31UAU5nLYLxpjs2C1QRQ7QxcvqqT2FaJuj6JVXpVkavyNVEyXD15Pe2qnWiWJVkijt5AtWbzm8ktXxouJxg6",
  "key26": "5DT1icVyRzgvpJqcFoeU32GvzMUdRktsuCq4n9yxPSkdBsS5JAT2SEPPXCsDF2YGr5fUY9PxsczuTNjaFS8H4JmQ",
  "key27": "5rn5LYJTWACq7vLSFGtpaVA4uyBV1WtWBbYqSoEuuzYNeY5GaRDqKqYsNyFQtusg9vrDbatU4yUQ4HVrGQZUDCy",
  "key28": "U3shhxr4idCwPVR3c7NMbhSWNFGDUAqH9j98P6SDnm2FGJ33Qiu5yPNTWwbWx7S9ePbAmWqb2TxhoLDw3x9XtNC",
  "key29": "4mdbGsSRMs4K64PmoAULniWcVnGzWWLGj9VHzuzPZJLsQEFsZ4AaFHprrAmuA9s7xkknmXGGxuSB21qgvKKX4rT7",
  "key30": "3n7WZ3zP81nEJ6NCczL8WckKNJRpgMoko5MG63e7s6oxATHtDESsRMiuVUUyTuYKNSPmrt9gYgUjWvzE9eZrt2XQ",
  "key31": "4MUksqDe1UY9dDgfcLwnpip4VUhMwuN9YxJLZ8w9nNbTsLCdFARNMXZUhhbH9a4NF9C9mhDSCfQgfNapqwjhNXKU",
  "key32": "4U2dWYC1SwMoVnceyqv4FfZ9fZD22taHAX27y7Tk2VB5FNfCuBiEvgvpfjZTpyF3Povoi4j7FqHRrkivpYYUXZXY",
  "key33": "iBWu8NMWmGyGQk8h67eXMm1hUhmtgpKjDLydixWnXgAmXNDeH9RJJQmdw7nq5fXppxTsm7A5qLdaf7JLTykfRaA",
  "key34": "9qwuTmmBqiczKXijtERykU2YeTxVYWwng9iMYd7dRS5a8zXHY8qWgVr3wqSj32zLcZXEF2v9cgmp42F4XzqiChs",
  "key35": "3DRRqYnNeYrqZNP82ABgPTT6FKMZuHTALUfsK9HeHK6sXdEgz2vH9vR2A75WNQToSs6auGujeWULktwScD1w41ge",
  "key36": "5Map6FbQxJGmjTxCKEr18dtrLVeX5ut7VMDPGF6x6uq7Fic2LVwCmdwq4PZhUnpJ8P6RTMgs4sYxEmwVM2aQ729L",
  "key37": "m3hdFrbg5yUJK1yySmz4xBRUdeFShBoNt35Wcjd9thQVMA16mMTkHuwDR2S11ufAiR66eHNrmtvfps74BzGtVop",
  "key38": "feKZtpCy6ANyw9WoCUw45ToEGe5RSv2Mqe17kNZGnEmPMowKfVVwj8YWKJ5cQbcZ2iF6gkBZoK4zNUVnwc8cx7d",
  "key39": "3dcJEJwJ8FwtP5Ef4RPFuS16rb9S4Wr8QH29cQTHD2agd3TKf2DQkFD2ezqBDo6Fhju5vWTGkam6ohHCnnT7uEn9",
  "key40": "2CN7g33QjGBY3NnwJM8cd683UcnKea7NTG1enn1bbwGAPN44Rk1sLXFrYu43v2uuXT6P5g8aCar98inpynmJzzDh",
  "key41": "YtxBvdPPEv47C2NSz2s8d5vfYU2MRxwanUUZoD6jpeg9p8rgKTiQc6Ef1CTLqcZ6g85WhiKhhyDCbGrnpoqDyfj",
  "key42": "4srYXjm3zbLxysVvkbvE8ncXKorHWt6K778cs7uhs7mMcvN9AJ13RZhkryuse4fj9BuH1Gu4wQ8LPUWFoBLAicFt",
  "key43": "3k2Ydoq7goE7F2kXCfxcfVneAMQFye6UCDsegpQNyT3Unnv6qLNncPwWArGrP8JWHXvx4ohRhbTG3e7NPYRxbG7B",
  "key44": "5Tb6zkpk9bVwJfb7cCzEvsNExHaqi12WQQBfEnHCWhmxLVizr4FUD1ERLHraFTNorWaqwy2hVWYQSTj7cSnjeyX6"
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
