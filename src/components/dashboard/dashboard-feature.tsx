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
    "34Xd2PRc5bGZvHNNxxwKdWV61CfCCuvftj5gUF8KNJQqA1Lovii6B5V4ER2R3UXpwDMwm815sqfoNio53bhVESE2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "422A9xzMDAqCPrfRr5i126f82WTLC7r3Wr2dTnjyr3sDcUWt3HNAqsNnXKAEc9XgyRa5GGKCV7WY5uPSw5PW7zuG",
  "key1": "26QwoeBvfutYxEz2YuVMD2K1XsuYZ3gq4LnUVCf6pPiQJskZxVKT878Xh6ZYGPBwLPi25znBixYCJk5Z6wwHxQYL",
  "key2": "564p6LTyAy5uWmMLm37SWtVfTJh3frWy5XCPKhFZgAJZUtx18bX3yrrudFuA9Lf8jnMSrYwUf2FVRov3v6et8JKb",
  "key3": "JRR3Rck4QkqqL9J38TLJrjUgtggiYg22jBAyGWMJ9TvbPd3wM4xw4w71NYeNv5q5HhPRRZzfepenEXLEjQpWNs5",
  "key4": "5Dbbw3Zz4qosmvSMM4XZCNwEtXC4Lyih7re3scZ6VkLeH2WWFdkcJHiYVApfyHEuhEpbEeaxmAjcFFAjBm8tJESe",
  "key5": "2Lmyp4iFXvLwgYuNEPacs22xtvSDq7kzdMjmz87fdmdQJFooWS7dtQD7hvHt3q2aKsm1pHfa1yoELxxpngyqBFrQ",
  "key6": "4CarShgKyuBYNznWrM1LuhPBjrbz3HfyyJVdA37yUMkB6ttGrMQpVh6dvbGa3rF5rXVqKUA1MJ3nfFN9LySC2CqN",
  "key7": "4823TaUEKdxx28SHCZpVCsV3oJuSepWom1D5h1abuiEoBL9yJ4d5LJ2eDTAC641NTtxYKEf1av1L2VrhwGXX7mZ",
  "key8": "2TeH23fvnifBkji7kne8iCSmXg9FjGr3mgPjkCPjkna54Et7jrBibZxWvzchk7zSYHjdxVNKWpDReK8hYf7a3vPg",
  "key9": "42ffPgeMNeCzVDFvnqv2j38U2zL5YxQKWg5mRfd58shHj9ocYT88RtcK3JV7g7b3o7QbnBQPEzwo5dCiUYAMhDFN",
  "key10": "xAyTsL1o7gUAnPt8fhwz2iQ4WW8cpSsyAK6UoRCFmn9SwUAqPpXSQqqbpVEmMUdVZBvGTUky31HtJ5UtUvHP3Tz",
  "key11": "2bq2TNuwMs89uCPaABuhdCvXc3YJ8Eq22EHWWpZ3JGzEvMo63hUMNveNoSHJ4CFMV1Zm7kFHRbX6oSTf1xTn3szH",
  "key12": "4Y95x28wmiMWCWW3nuuopVTqvK6rZjFi9vtwmREW6P8UtSMa6tCxSCZnGozLGWo9bcM1WGd2hUsDd211z8CL7JW7",
  "key13": "5hyyyjRwz4FMn9VvgGkQx7bQb7yQSBA67P7bjyqsdubSfA66mY8GkgVsAd6AZ5qhNfqMyZkPGLZPJfkjXpgg5y5v",
  "key14": "aHn3kRhDXyg9iUaJFTSF1p9FTJYKfdUNa44WQ45AhQx4bAc98NhcoshKSd3c4iXYSJWs8DRNzuvP8YbWfwEswNE",
  "key15": "3efWzm91khWjYeVobRzhjAQ49A4oXsEHdtyBxD9fBgBa4pWkKGAURVTiEV4Cizx8bymh5YAnhwLrrmE2nfvmdHx3",
  "key16": "4awfk9fE5NJ8m7XaSVZdpSgeoTSoHCNZAT5MQVA5cvtx8MZS7N3s2eZhiuhXfFggDnEXieWYoV4SXYCXbTGMdU2Q",
  "key17": "3fxoZUexQMTYBKWpmsKmoc7Y75svYYEG4ay9gA9BQr8Hu4LZyh1YSVgKe8SSFfBEcxCTjjkr6wZEN7DnvsN15bsX",
  "key18": "4mc5hT2GCoBAeJr4ZhASaf89dx7ASo5Ax8N8zXLSeFV4LcwQryefF3sHxPhpzvUbXWjc3S4upjQc2FgbnK6bL7hC",
  "key19": "3XqtirAonjVhgYwhz9cBCFK18ubq3wFSYVfMAWRKn7i1C9HJfzqpGCkBCpgMyGFNG78dhk5YVcb9q4vF4kzTGkti",
  "key20": "42KzUksAps3BERJAhKNMP8w7gar7dPSVGCH4DyXxsEJYkbcasNjcbavt8BZx2LnawTqkv2CqxRgPPxBaJDyMZHLc",
  "key21": "3uzYGkfsr6kxQd7JnisjCYRhEamyMx8F5uxK3CNFPhu3fv8DF95hVt4PYYQiW99Atb86n5naL9uh4K1YdFQDbVe8",
  "key22": "4UDV4LsZ8yfvsbX13q7piutHQByABMxme8iWKJjHLyoe2F8feBSZ4JbMsDDSTpk1Fma53j1M7Kr73c4C62nvv3hC",
  "key23": "45eSxA1e8bc39ZK5QNqDzmqbinkutZdXtaRNWpv6koBNivZXsaCxPvdGvouY8L83Rrhy9AQaVefmnZDmQFUcNx44",
  "key24": "4WwNQg4UpmpogHjBHScjx8jncQx198ia1N81Cdi57RNSrNptKBXXX14ud3rYfekWiAxMxF2LTq6EeAnLLawhC8qV",
  "key25": "2iVCfJcVZJ4TmMw7kxRS1G5L5HwB5PMFY2cba94dG8Pb1YBmt5WkVD6aSt4ScAKxHy5njNabPLaZiCLn2zxBYWDC",
  "key26": "Lvik7pf8jRBftNRCWmvvHPxgbfqqj1DrPpGryrWWcQ51L3raUaPagrnEDQVetmG7si8doKALyqhKfuRe2sLtrxP",
  "key27": "3Bmi96sehEtSTZLV822DcNKVzCMMZwAWrZ4ev1xPJRtTaym5AcFSRQrsG8aZYuoyArSEZoKk2dGCMaoVo5ZsdoKk",
  "key28": "4HjoNjMcpmTJiGgHfGCzDmC49KMRofbGUjnGNGf3UpwfGrUWtZgLDg8P18RRk4xtps5GVh8DkbELDM3QR4S9T2Y8",
  "key29": "56EsA7nUyQnS93Fkd4kBCXR5HHn8DNhZRmwJzHWtMm6uS36ZMCvnH1G5biyVFJU3LD89WgBpZ4kAeHkQGVTENGhR",
  "key30": "B8qFAkf7gushBwjR8jAdxcCkXsD4dvchg7ZinnsYeEcV7E9dkt2hYDCrTAY7NFeHUv4ffFBv8eVfte5EfdtSRh9",
  "key31": "2tCj4SGXP7h3evXGAgsXfazpaNjTvk2Drqtpg562xbDFJN9zoj4zg6ZwBTHjenjEnzPqq2E4CVMSHLfyZ6SRH3vV",
  "key32": "2Stmsuu3psn9kks7Y2PRYgWBniD9kv3krdESoftf5pjHdWhLiffQu8apgfnEH1QDeyZeStNCYgTiafyUL9qPFHC",
  "key33": "i4NnSsSr48sbY8LpvKopCUcR8LT6KdmCnu5NKnfvXDTAbm1EcAD1HG5EPNFS6A6VQmnxAFbvnUaDsg6hKdji5q2",
  "key34": "3tj4G9FVpHU7KATciKkFZzxVggmZpQVRT2zpXUBFFWBSNjWMnVhjGf1oeniwrNqR4N9Q5R9Ro49omrBwJbPx7BYt",
  "key35": "fjaVvs8wsNXrhs8DLwE27LFbsYk7T8vmCi9QBpBDWZ1GrdP5x9JuTrjDUZD8cN4KyvhEup3XWMpLi6V2PDdeiR9",
  "key36": "33UySAMdEEA79QRSWVec2ugTCBDWNDNjZV9MFKKa4JPLhhJyFow17h4ASvP3koh4JbFwQH5qBST8eZrqYzo6jcLN",
  "key37": "41JhQJ8RPc5JWusB3KyQWDSxikYh1ctCejdMKZCmQNqVQx7toMeNfZDnJDt1khkURqaQ1DShzMTjoaopLqUHmQT8",
  "key38": "Ci3jNx15TxMdK3G3YPKoB5z2ZUvfSnsBpP1UZRyGfmefZBLGS6AvydTFLmj7NFrvwECNJ99hAQEQ5A94Awgmgh6",
  "key39": "LLhZ8cLTE7uVTvE8WW3gCtLzzGXVkhwEnqbG3yAM9bjMGHPH9TSmzKK6FSPRhepS9rJMgPA1MyCdxxmcXs4Pmm2",
  "key40": "iYVpxBbhXvo3E8QB4yXpoNy4kszFDWVqqutqz4hKqrUHd1z8pqNaikNwrQ71NHDUXGqvjq9qAMhsLoNsaNSfAAf"
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
