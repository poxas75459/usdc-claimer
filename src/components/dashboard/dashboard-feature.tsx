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
    "zB2UTdqSzPMWYwP6SU5w9gMgGuMFyY6bdCj1vnn7PJ13sPK4DViX2aJqhbsRfYMtL1whBVTucfTyHQL9gvCFT6M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YcJ6RUUigNDUCZeSHY2fDYNWRkUyoG3EkhVmxFaDtsdF1Ay4iFCpYDY1YsnNXGisGkUZ47j2jecJAnmUnQgwg3P",
  "key1": "wCmaouewiBgpsmFzFLr9YUXduf3ZmCbkDkVzyeKyRFaXFTDLYqvEXWpEpNzpFRZD4Dv54QeBAd2pWuZpkYJKWhB",
  "key2": "3cmGN4nGCQUxaLh5iUhxcj4peqJT7y6UvNm6HnYxHqam2xSBmCgWjebMg6jNWkDq4brP4Wfd9UxHauNDP6ahqb13",
  "key3": "3mZHyPmc42VDhaA6WpriWnWcBVE91DpjWBoLZM5vyDb4em7THkBG6H9mz8nBCLRMsVyX3h3Ya3oGthbDrC51UvVD",
  "key4": "h2enzPDTR2ez5L656Z16d1JekXDEY4LMYvhZVQSzpUi31VVngjDEx4FF4maWGCECfkkcVERw3Wq6YWJjmthCg2b",
  "key5": "4vtoGNPhz7wBfJ4JsGP1NKNY7YngjohRBpukqPfrVPacXpPXJHcuVmMJsXWKCcFEfjLGKbTRHjG6S337zVx6G4X6",
  "key6": "EFrjw2Wu7M9Udq3645PmT2PVn1hLr3EJJsZnGU5SD6tAhd88NqNj9ttN3GyzhDzQzUL7ATuABRamjG91BvWVrw4",
  "key7": "2Ea2m63tFLySYoj86HriYC999GP7HTig3znbbEwC55PTf5CF74bKb1q9qPWhxuotdd9oVVi1PBY1wiqkaFZWcUT3",
  "key8": "WxTazuXonU4paXRTF9BGoXhNFQrju3FyrSpkowz1Uwjnyd5qRMwBgqSmqRJrSbypCck5D1RmDaRXbHWkEDD4MqB",
  "key9": "5cdzdJQ6kh6X64XDbLMTY6V65voFzF1iNquB2T3ECuBPcEuxeH2dkMLd7SsdHk75LTCuwQcmgyG8YYLfN3jiaPCB",
  "key10": "4iFFqSTcX3qczJbPjtFoCe2kuYeg7X3YC8VK5t2MfTHTGCVXmvKuwyHkd1Wtb1Nr1E5XnCHqf33oh5cgHwZuh6mL",
  "key11": "59sMCtCdSVZh6NptHAte3R6ymxzT9S3EmToab2XWAcJucNaZk3snxrfEyXehKEdBD74SNVLgE5RP8hnGBE5VzNio",
  "key12": "MVa1LHHEGrksJFgrfcM8nnvyovn2aswwAANws6JkC5pDT39ToxHMZq4YvkaR8fJtt3P4UgKsBtx3rMsUo7xG23i",
  "key13": "Yxy23T9515DodjpeY8QB29JxeyGQdNrfVKv4s3GXz155922RDPFw3yejp6mkv3HPBWgPhu637VBQmyjbxQxpZwM",
  "key14": "43H4eftP4WLQ37d7mtqeimF5MptvgJ9EHAG7SQr4AUczUpapnshHcHMjN5b2w4zBFhVD1PXABBSTHMUUisvGh1h5",
  "key15": "3gvq5wsxJonyNxjE19FMkzaC2kqJs2sotqyWCHYieTUdW3g6bKq6mS97C5FsutDrLWENsjGxrfHbPDuv8RzFbK8X",
  "key16": "3NNeRTdZZG6nGd8FbyZebTtPaGYVh4QA4jJtAimPTkHyqhScX61WGBbDBkq4sNHxYKwKnvp2cTtyZyxgTMNCfNpv",
  "key17": "2RneKQPEL6YN8zCfPwE2xinzGCyUd2WfshZm9B4VvS7Lpyq5hfTDihJFt1LV6gVd6ZtNbh5MCqZAPRqaK9L5tFuW",
  "key18": "zbXxmkoJJSMzG7Nbs5rHgu8DcdqKNRgQgMMLAqaNTParaAGqGibjJNJJajhndMBo8b7Vbh5PnbQ6LzEphwEkfgJ",
  "key19": "2YinP6GE6VQHssZPGkCitxRVtrxmTTc7MtEfRUPY1FZCzi8U3Y3muRNiMUcKe6BiDH9t3BigrWtFKwdhS3YRYL9L",
  "key20": "2DgYYkEyvma2FJZdbCn9bedczPhPxmUV13GaDM6nJgvNUvB5wFjtnegtTgtyVmBDiNNB7EEqfuQ3iEzgp1Cmn3L2",
  "key21": "5j8v2sh8QH6Venbsp6ZhxzJvpq8pJhqY3XnoxbFs5vKBbw4Pm57xPJEswABWyMA3uWHW8TkhFNeAcx5CUPFzD5Hn",
  "key22": "4dBJ3r5m4VpZ7RFUQ7YzFg9VEbk4aUCe5Zzmvu4T4ghFSEWKjeCu1Di2CNHa5DfMQpiYX8owEmJZ2o4VwyxsKpPw",
  "key23": "2rT7LU2uiugMbiuFAAUuxYy277GyRDDW5E7mjSiY3s9sLgTvZwpAUUBAp8FJnrDNsegUgYxJa3LjjDb66b7Bt3Dj",
  "key24": "4HSvz7M234ZFsJtGab4Y6fGivUirA9nbkyRi5RG8uYdMCeCDx9CPX7sL61ievLU5KRGqwJwCbj6vRj9qePipjVPM",
  "key25": "2fqrUMowr212h8t28MH5DZDTtK5sKB3RkvZtPPTsTU5xd874HZrVszggcRvtN1GsVpc6YZy4gnikXmXjeHLa4dNP",
  "key26": "F6zpXT3HL3EaG8qtZ9KNJgHt4d8qXchvUEau6WrqJ6fKQhHqBAV36v4hYnVcoATKtHaGp8yqaRMwspGXKwZdEzd",
  "key27": "5dY8XpFsL2A8ntn8BspoYW749NXkF7Sfv7DKD6MXET7DEQmathibcfmv1ZA1EHe6B4CVWLxR9x3UyeihzHmVcCE2",
  "key28": "9xKxQZKCP6PoKW75mnuk617HDHpKYiNTz8BmBf4MSiny6ux8eZ4oHcsS4xEFttuvbNv5DZQxAatLLcVz5t8TaTe",
  "key29": "okUcvL3eNiSHSTga35JJnoibSwPgaqC2MVA9KvSXAPQo9d9EQe4keyXpMFuHpPqWvw9oGQDKSc249hmpaXg2f6z",
  "key30": "KiScudcgZPY4gbcwzG2TVXNo72Wfp8TTDrzKo2jGHPKFKTML1GWAFdYFg7iRyAPNDBXiKce86yYXXEYSecXxPw5",
  "key31": "2cCqK6rCrzgwiiQEEKKvbe33LC5TAxEWEysu4YyR5RE51zM8fWemFvVKeYn6G6iGCKG2RFTk5inzkCTfRmexknDi",
  "key32": "3xZZZQY3RJoxhJQtRa7vgLajBm6mTUQDRkqDKe9drX3miMPN4iXivNo1ow5b5oCtcLtFvvYH2M2bc1fEsnmkBnTz",
  "key33": "2FdorPy6NsTDR2tMJVensPigcp3tJtGLgm7wYumLyHBFWRyEqxYTtwRjTCJ96Yb1poBf4bwy3JYNvZAorrmrSvhH",
  "key34": "5gnXsuDLhowou6FXmPpYpvd1z8trkcgP8W8MBydqBFw1tKzJ2Q2yXZHrVoc4wkzRfEqyFS5cWZHUVDH4va8MVyNG",
  "key35": "2avsc74bqdXLJ9ESr5fhsagPMcDf1Y5SphsREDtuHfuKNiVV5H5XzcxkqD7TeZexXMTvoPaGcUu1EMbZUyAZ3aJc",
  "key36": "4t1pqYDi6kpxiaLZ2cYvPdtNnmVkDv6yUS3zWVpeTJvoxfAt84H2gxgYd2piX5ViHUXsTbAWCLgT6V6YeMhy2M8v",
  "key37": "4re8jT156fWSzxn4u43W7jJgCxmnECwweco5DfdCU1UnMB4KAPz3TSKGbtgR4q1ErB3sjTRVCJQTNjJYAhHCsVzU"
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
