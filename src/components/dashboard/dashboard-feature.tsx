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
    "4G6V1zwwL4ibaEPY57MRRBKDRX7JizHFKWjXPQoXWLZLgYbJXyVuqaNvmYKPjHbdyG1eF2dwuPktjV5AHKazowtV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2L5SDMeT8wCgjDiNLix9bXQUk4zG1piZhtFnaQhpRaf3PYqhTfuF3Ru6DFpiN5sPjY72Z2HNnamrRyP9rfSSU5d7",
  "key1": "oS3XKqpu6ZktPs8R7w7TLSyZb9pGi23VbC6uMDddX3n1Yhim6of4TMrrdEPdbFY8jvuvSdLpQLxf1wmeY3Pi7YN",
  "key2": "gtpCVUcrx6kSh5M6HoV49rjsJCxtvxF4RkYRmXPTCGHC4X3Am4EgcQVTbbTL8uWA6bdX2sgKENrTSqyjY9WF4Bg",
  "key3": "4LEJ2bPGGjoLtP8xCP3A595eZd7JZE28WWqguSh1MBsLS1C6BQBivNvpavE9Hf6W4VJAeN1qwDZeNyeVaUhLdwRv",
  "key4": "3Qeo4DRrMYEVJzVhMs5HArDNW8oV9Zq7f5Jk3DgWJzJjYnjAEfoVPCQ1XoScjahdUXCMF1MA4D32hfRzAgxUEjxR",
  "key5": "4v75GH6JsfD7mjwzBdHeEkn35fyTLQECgJC8hQLQ43BE1QLoq4qZhoQ2YTWCud8c2vjc7SVGzsUKGs68msfRvRG",
  "key6": "5NPrj5CdwhpHKCF7T8yJsXfjVH3yNRTzEe2oTk3uASwgzGfGQFRWpkmWYoHZVDQ5VeYpjtiLpEC6VmVRR8ogH3Nb",
  "key7": "3swWHWoniM8CWt2oFDGfDKRCCQXssoqS7ch4Ay5RJ7sHe4NNaV2C8iX8KzdJo7kSAnJNQrVERPWrrcYWHRC2Dw7Y",
  "key8": "ygPtEr1xdiVte5sGWmY4HL4ETgLaWNRVD7uMFeUHa39aEWVFweDHCk5mtFn6CYp4ZK2ssiruCZGGSpa5SEWyCL3",
  "key9": "7aVeucesyV7HktT95NNnbFRYqmY7pUgNpSACW6QkLtNVbL6nT1Lad8LU2LU7Tjd7WJnJvHRa6RoqJSzuFU1o4BZ",
  "key10": "Pgv37ap33DfAFX1FbZgf1ExrvP5CeWLRMyzjUZrTusLXdTgLCRLFePzbcps8v3xLidEgHhzgxyHSQanQNuNhKJN",
  "key11": "5TTkeD2tkjzyf8gQ5J9SEJf7xrWpuFXbfX2sdGygg6DYmTU2zakrK7kENdk7yGYGE2dAHxtScwZfSi8Mbs1pGBCs",
  "key12": "5C28UDBasDRZgnSTAHsVST3sVWJHpV86UmeAwpyJRkGHvaCwCjxTieMtvEM3CdjmQpHjvqq3c2UvmGbkNPBvZQFo",
  "key13": "2dSBSQ4oMT8K2ijyRp5QuPNJ9JSgEh61hdYBF5XLWyNjQ7WvKhyKdbtiYfAajQFVkqQaWa3KSHqdSLAaAduc5eku",
  "key14": "QGKBAnH93VzcUGY9up48t6gEBYSTMSprtgsHiriKhfLPtBbJWLqUTV1PwdFoHa8xn4hn7feJJveCoofuP1aH7NW",
  "key15": "3a5vFuEpU1dMhPtWttR6xQVFA7Zv36ukeyeqQNApxX2DSMgXmGakCTLXPM9m2JLkZqn6rwLtNLfJq84WqVfPZ43v",
  "key16": "4UYx8pHoA59vvTsK8JnDFkToVgRFwXTShyRvyzH8RmDsDkxpBE2dzbfNLGnEsxFpnteeK7i3AQUxmCUtrcEDAMY3",
  "key17": "3aDrBRHQhyNnTEgFu4ye4mgBFcFv4XApTWy6hWpywE6PbnYo2EcpNyATuBENHFRwkKJDkZ4HW7pvWisN7KSgCXxX",
  "key18": "97gi1NCE2KpDZXDJ2yAa395ctvkYhYLmeuhUbccZsd57oCAXuPsVsGfWm8Ka4gQsf3tH8rjmkrdKLW2KZSecXXF",
  "key19": "Ay4VrGnsf9UHX9ff17yf5676ghPmo4BBH1RW7zgMLiddcu58HWvjnpoXgunQvST8Rukj4N4RCQxPwLdjC5sEeBG",
  "key20": "1cYqsooJBfNonMavkRpWebr2wFWf4VbRPCqF4hnEZRHQ8RQbVAB5u32N58Qt4uPJuEfmGKryE3ZFjGqLhhqEYEA",
  "key21": "5Bcdpvd3c1CjxVDy8setVZ3hWAZBZNqqbMHyg4nQ9kV52KaSYAqGwUJFfffHtHi2uFFVmBgytmQCFwsVvK4tQPWe",
  "key22": "5HtNHkzniVBk2cmm4jHTaVxxEqm4cExum5hU8jG3no9YdNAvzGPLgPfZq3wEm4a4s1v5Z8QG67gRAFLAedvtoeuK",
  "key23": "qMqSJ168UDEKQTsgFq3BpohF6FL2JPiwzEFgfYWTrTXR21RtspbQHqizi1WF4iXRu3yiq8Z7vYtWxsNhTTFtcZR",
  "key24": "3S4KKmhQbtwinR1GbY2rEZLhtH7kGZa6qgwkk3GBTsMSWHVfAWuYFhXgwPmNDeD7dHNRUuZpwPmnHouxY8DkomA4",
  "key25": "3XeGXFxJgPee4M3A75kaWw8aCkav4w6MoyUvbYwk26uYAVJhHH6ZrtDuHjvJB6zNP9zxjywHv5fGDfM9k1seZ3Am",
  "key26": "rtoX9GeER9zuPWiL2abo1ekfoE9aRM7TUnNg3jKeg6Je6YueFgkYcq6TvdgSoYfy843h96Aim783oYx5poMgBUH",
  "key27": "2WjciV13VkSAxDnKZUM4MX4a3t1gNaLTGWEWbUL3QU4FKDMbQqz4CXspzMCBGqE6PD6AceW1tw8By2k2n8rHqHPJ",
  "key28": "44sqRgsbgi9R9EKnAHftNb8gPS9WiKBRzXJ7E3t9AEXzXVsQGRnycCZJwixppoKD14yAeNh9vgHv7CyWvsDdX3vN",
  "key29": "2dns6CSa94ttKhXweZjuykJVBEboT1mU2jbi1JER42BQhy6BgaaNq98hsBKu3wPwSxuNxnPhTwGNUwAJgWmSWxYF",
  "key30": "3VumfPm9bJR6s81qqUyqKfVudt13opagS4aKBN8tLEz3NFSgSJMbzdipAty9twJBF3R5zDzTP73RGnf7iBwR9ywr",
  "key31": "2BQHWXsRpaDktLW4nATD3EucBwfZcoAeVpdg8nS2T3rvThWYtpBimjUtyiu5irqo9rTzX3GDfY2qmDK5WqJLFzA9",
  "key32": "4hNunJsmhiEmfnkNSGjNhokGzXvQXwoBZifbfYvFEptnCQnfgU8FQBoH2dvdcR7yGoKtGD9sGzGnWUzn5XMeQRTg",
  "key33": "56yoEmx6HvXrbmDR7q8W6R4i2hC3hiCihDJaamgkNW1oxESAYo3mbU1LchpHriypu1fJazgxMjgemAQbsvkhQ3Yt",
  "key34": "5rxaDWbhGeZYJFMH6tju7DFiRfMHUJGFP5HbeNPQ1vLztXBU8aMueuQrLMmQ3BzvxDefsRjJAgp4Vg5VAjPJj8Bb",
  "key35": "QUcMnarNikMSVGud3hwGaX5nKkLFdjnPdLKPRS9K9LR12GzeSHu5ihKk4VpH7a1CuGFvfKm1o1QmNLm6bU113Pn",
  "key36": "3Z9brty21rTfewR4WpzDcwkgbsgWiQ7NEA13GfVohK2VP2JZrn6SgQqPusy4ntgd8GUtdac3xPB8FRegbBjYC4h3",
  "key37": "4DhnYSpiNjq1Kf3KTwt9gPxJFX5N8MyAWD47jCnkpBZhbHdthxhB2SrR3FNfqxWFdCQWqSv4Rq2JpVVtz2h3CDTw"
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
