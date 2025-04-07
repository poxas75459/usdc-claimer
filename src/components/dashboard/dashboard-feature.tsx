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
    "KhF8mhD1bcZG9cbsevFh3L52WuhxwFHeB8M5jrrYepgTkRUdpKes3PRiRYDCtRC2SHnogfiXjqkzKJNXEAMujGt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VG6h3QGrHLx3Ybi6TgTgBVNP1jdhhB5dwXVQb2shqMVw8todz8ieJxfvop43jw4Kh3Qgyf4A59YL92L6jeCenMC",
  "key1": "4BdmPuF6ZSpBUYGSKoDRG99QTYfAqz9DAKd3CdeLPfUi3iPAKe5pqtYRyePbwDfUBNNQ7G7igmtbBv7MGZeQw5dm",
  "key2": "5bijjwKf9F3zmqH4hjzvT4xGJHoA4KbHNZGcJUxJcxpkMVehCgpLag4cPD7KEsM35eURKe7YcPTSehgRupdrnmnX",
  "key3": "5qQ5DqfGRZhEF6am9DCsXCW85UDB1XN9SbezsFxZDd4r2ur3XMspVnYvZ3JRQDDZbyLzMo9XF52uH3AQd1CZDrm3",
  "key4": "4V7yisoqKBaBjYftcunGb9Z9pJEuK9nmWx7kBx22VUr4236WWvyhyhMKN8PzJKEj6QhDaAkwBcMMR5d7Qt9CG5AW",
  "key5": "3SRbFY7qMmRgGgspCq54qppotTnYzQBSJbv6hrx11o7n4Mh1S5PKTEWrH6kaMdz8ZQn5dCTXv4QNLtXAwrUL6Gd",
  "key6": "4dBiM59RrGPQKUCKQ44ve3juDS9FNbM1EXhuyLkmVpt9vPAUhn5xBWybFZr6WULj4TubG1HbwWLkUkbSGZisTKHY",
  "key7": "41F3oQ1NAFGSN1BH7LGpGB4YbvA6aST2XW7oKNjz8n9BQtb2du4EPoWHcVtjsKkSwzQpwBTfMAxteazmhobW2y56",
  "key8": "4veoafTmP2oSkPrQC7rh6D1Y5wcZurRb5RfrMzPaZAh8bnqijmEvcPWpncfLW9Mewb53e7dnN4k36FLcgufvVAig",
  "key9": "57y6DYZDKZg3p3pYyZa1dKGyqcNLmvs5Yn4usZzPtVBZ6KC7iV1ztwQ6E4VgQ3rhShCAgDoKg2C4kxp5jMgjKwG8",
  "key10": "2JGd8QSbVarNoKwiNJLD9YxwkGsjZdvhhdh4aLhYg3maHGK9g3hYadC6dJSdjnAko2JaSE2YEkpTHnwboSHnDb6L",
  "key11": "4yasPnXq1EmuqwDaGj7sdH58zYEj2mKpp5UE26P3t11MBqAxCVQm2AHYNxNW5Woa1zdWFsiwpvdL82Nrw6afx3C",
  "key12": "4G57UpPiBbE4Eo3W33yP2UuUm2A2pi9piyY4fk7JLD2zGh5JL32JRLitga8PZD1MDM75FrnVDsSN9kdN54QA6oKP",
  "key13": "4ErokeAYnPnH6rrEcWHuQsqFx2scQ4k1kn1rDXxE8nBjUVXfC8RL2Ga3cd7JaQ8tTVYZ1GNAHH19uFs8nEYeMzzY",
  "key14": "575EcGcoe5RbavFT3e2pNi3sFLBaGQPHrLZ36H1bjwJhni5iHeAB2DCUBWkxoTjH444eZ1eoLggjrNqVMH1CZnzn",
  "key15": "4VX5V6d3Du2pXtP66n5WEuhGhbH3GBwNgPKdRRoYqJUe3qgt94R95wjy4wYXei2VTwCm6U32Mo94bUxuF1sGnqcu",
  "key16": "4SKDD7hRtuR4cd3pMkzaW9dpGvk64N1sbPgnuESAxwJAsvbGPf8J2S5wdEuwo9Mm5TtUV7bg3vAtnAvdjiBmgHCg",
  "key17": "8nfnj5HHTV4958Dw4hxPYxeRPQ3uFfNwncch5m6Tf9sQJ2Y3TLR113H6cMzyYMDYn8hNUctLsWqvYiQ1nEA1CiY",
  "key18": "53y4PwpBUp69ncEJ5CqehjwDwRDY1fPSSzJgh1aMQfvwmnZvvkA5cSuQvc8J158pw391GZSyo1h2Mabmy61M21wi",
  "key19": "5t7PGMqkcAgaMnx1taZqnMcf9GG1SbezYoYex8r94MwGyt7u6ue9MDxiJ9dSbkR2NNQm6qUn76uaxTe9FD8HyWwE",
  "key20": "2SpNhDSSbGm8vTuXRRK8ie2VjQYD1jgCCRKPDLLhftaG5qPfaowQqZshifpWCkXRQGEH7xuLApPq4srgTe5ZMoMz",
  "key21": "fuNS5EwFzohhHmA1mFQRWiJVKr6ZywBh1xXaSqwvmX8kFPVW3v9m2xKYgmgDnKMdah3ByLu1pS1Tfio4NBTX63E",
  "key22": "QQoTvxkhAPqmx2RQPmQYAzbuq93N1E99uU1DYafUV6nJaC9aYHJCPtsh48W6f1kuqPW2mAjHqUgBbf6pfryw2Qo",
  "key23": "2XtsK6B5oufSH9ydZZRV6AGj977xWR2bfJBe3BgLi6M9FMAEb3728kYSXWBTuRQ1oxcqCXodJVkzzm76rGKeXEUj",
  "key24": "3c1EszwnDzEaUEV51kUKcx3ptDv9C1azLUt9ST7YMrYRa3Pv2cxosuH3YUZAynpEueqsZvdZKH3boa84m2yLbAUg",
  "key25": "4KNNnoqo7ynw95rPrxETDRkHauUoebSeMxgmMRMPXmqwBRJa4s7VJPtU8KXr92wDjt5tFDqhB8wX5HLeC9739iyW",
  "key26": "4ScFNi1Svvx18u1dNa4rSkxgrXvYSZm2X6nFV7y2N2xhSKKpFK9P82KuUWq3PegymUCURHpgN4DsL7pA427Dzmjp",
  "key27": "25XSLvxP9BF3CuZ8n1V7GvTA46STx9mvWeTNGdfxYP5TUEMhXXkPgbaAVhiaBr7zfo6Rwiw1n64pQTKeADLmvNAK",
  "key28": "4QSBK4YWZSoUKEw1iCnqUaWmLHuYFkfLkRoU2LzSCLqCsHC5g24QJxYvLgGY56akVP6TpJfL7jrd4EZ1hJA3fC1N",
  "key29": "2W5yv3YZP7GJKQ3DT9YubJcFtVewNpSZrLTVnZFzn1Crhi4QJDiY1eWg5AVAwFNDLSZcyLYAuArebm2Jdybg9bhe",
  "key30": "2MpngLKYdcdJcVPNgQ8hZEHs1MPYCfPWEXFmzgycRMeLiFeFXBqUZYKCQJMMyaeDQPTtZptQ1Tj2traj9xbj7nx3",
  "key31": "326Dfy68VRRPZWvwdPeyzSKhB5uk9i9fxJqNdcPjNWHGzEvL42S3B95mvxigVf7wBwzkji2HAtPZYg8DJsaWG9o5",
  "key32": "5AzqL7CahdUMBiHZUVFfCk9SteGtEbvFGN3AS3PBCHCnYhpURMxhT5KmaNuQZMXKCGnsywS6d13YuJRWdX1gdVsP",
  "key33": "3sttkYcutBgNrigSdyfsd9Lstw4ZzKpduwfz1WWv2xV9nesmCV2e4AKhD4KabaFHXD1amwpg49Ab4Wm9WoHeckdj",
  "key34": "4RQLS8i4RoHLxcVGaSSNr5L7QbRXFLkqsv3dppJ45Gq17ALz9FX2tUDCiHkm4mpBvpZE2DLSKH72o3Y4e7vgrypa",
  "key35": "2rvRiPs5nogmYVYiuGkc1rgrujL2nqZtXYNY2GgfRfzqKe9HrNBqeRBYvgPa1BbLcTzAS9CgyLHKDm37mrrHja7f",
  "key36": "3RBnMvaytEsi6hR7SjD5Vo12foyTwU4cRs7CFNpuc4xhJQ2sqrUJXgXce9Dstv8Mbm3A9aYWsmsJsqKpMuAGeXF",
  "key37": "3Xh7qy6i5awvxgFG5hgSRc3wnYU3678j6KZXCDcaE3hbtejHSCSWp84uUsw7sMVudk87qNqaS4PToSaaLJ3vyZ2E",
  "key38": "a6H5hSTUs3i1WqdjVZ3NFCsobGABHTX4gu1JqCB6YPPFrzMeTxEVKTqqzMbXwUbhRqT4MPg6nY5MyxavnFft1m1",
  "key39": "3nfbVCcjtcTdu4bsPdYWWaP9P2KMD6E5CGdxErR43nN9pkLW8tRXDy98Bnnbta4j5SjzXYckC1jBraJqv3h5V1pe",
  "key40": "2j5jXGQXJ6fvreFMn424XkH7Qkizko99ZXHjjEAFtbC1y1wjwMWamCbrPYepbJFZWuP8eopCqumZmVSfG96ewY8E",
  "key41": "5JMCPDDoL46mnVyzYKFkUMtQ7CZG1deGbrxgjB9VKAmpfyKjt5GRRUMUHjKHokrTwXaUKwi9GKt5mE1ZCXfDX2Aq",
  "key42": "4tNyT5SBQL3S4TNeaMqfgLnKQxpZbXsJoh1sTSzRLBuEcj9f5a7hvYHZsP8MbX4HVbcs21TQXMd5sth7dEJyPoZt",
  "key43": "2hkGFJfDfoJXwgPbhpPRdS3QSonhVDZ3imLtRCSKmoGepVZd6gjVRGmv3F5kuAyFoVe4MarmPZ6iEqAmGupicLRP"
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
