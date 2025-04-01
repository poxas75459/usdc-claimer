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
    "5AU7aqnwPbAh71C6GRxUNYbFbmxeDBKBY1UmJ2mSvhVT7pP4wgvUDc47iZCqFmtnBgs9SB6CxYaJ6AnYBvCfw2VN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Tuu4e8yL3BvTgqEj1FCDCmEvdYM1X3bvCBV4JKBVZ1D4HY1mT5d4LGoA2J5stKCF2TJQucDEbxQM3Z89DhowUPF",
  "key1": "5UZYCNqVY83qx1r6Sz9TkYTn75Hz7wk3siRbDA6q2nx57kXKYxuLjPaqkVBk5LW3fib13AEyNsdFFdC8ir2xYFgJ",
  "key2": "2p2GzbBTq7CuMoBUXvJB8ovPKpwEWRK7xh1CZfmzXCsnQx8eWZhm1R422U6dhzpKyo75moNHTo9Cqz37TVQUrthF",
  "key3": "3VKafkveqa42Jne3ueoXv5RdiUrcCYyXAgmcCwuPadzKeNhwaR1SxuRWSq2ZJWBHDnseqtaVmFUzuq5Kv4ycnb84",
  "key4": "K76En7H4EzW7XHvsHpQvz6KTaUEaYf3HfH5YkuCjndFVPuDwf1W7emWenDWbcjxD3kVqVWWjgSS5VGhFasRDDda",
  "key5": "3odFeS3fuHZSFYVXiFyHBN4BQQxNxiwxPRdFCRQDTL4nyYyuRJMKvMhTz4v1kh5rFL8WukVeon7qdiyEcEx8xK7j",
  "key6": "5BAm8bJZ1H2n2nArBCM46qB7onUXjezuMtHcAfaFXqxRbMqk54rtFTsVBx9HLZLg2hoeeDsz1NP1bXhapaTFWQCL",
  "key7": "2wxToF8DGta3tVcznqrgajrfLSosPADghdKuWghE2Hu9wQMUfPGtp4XtxfcJ9aeQRyvZnV5QCSCW7d25EumJNkQY",
  "key8": "BoHttbXVWLKp2apZTAMEfZ3btEdGfapNHDVsHnDwCxmFXrX62UTMYr8cR9LBxvVff1vvFPnkcaBoVgFtxrENygC",
  "key9": "2obYQNXD3jcnDThYh8QQCSXiaHgqbCXsrGz4thnKMheHshr5GRocJnr9vddysFA4YJBeZrDzimQDu63Ptiyih7Qc",
  "key10": "2nPoH5eAhwxfkJS8jnW56VCZrP5q58GGJyjrCDbrsCr52zHaXcqCZx645fynLYcawFZ8g214tXUQM1eCvmZQQU86",
  "key11": "5PwqZkeQmnTNuZ7bzAWEoH3etuAC7pe7Nr3rjnUJKWwxb5oKuZEP6JogHMxaBgZFD5bwZLymyzmQSLnZo5Famp83",
  "key12": "4ZogGaSa7Nw9UbyBapwop95QsSJbYVTHNfKr9oqNrNWqon5GCjdZUibzDpFe8wnBdzdrfZxGFw279DwgqDWpvykp",
  "key13": "2F5jBUCLAy7Kp4KAvS64VZdLHEhyDDCDzvdQF2vz6pnWYB5iLieBzSExRHMgyoFfs45Eafrs4Et7Y8sxEPG6afFe",
  "key14": "2AWmkxgr7kgDwWThQXbzi6wg8dgXrtn5P4ph8c9mbbKZXcRi6V7ttMpdgUYchXfPa8xSuWnJmeRQdHpZjtv9BYPP",
  "key15": "325L4USXpXVgR5cfRiAYxbiB3hPqsJZuK7MqUw69A5XhKzGntG6f8yMMJsqhpDdo1JdVwgcTHsSBLgisuw67nXnd",
  "key16": "5nM4CLWGbJkEG4j4QFr52FXUvdL9tivFUb1xBK5ZwsqwjpfY18oVLo3CquV15LSRc8GjJLrq9qqWHMqRWAghfo6Z",
  "key17": "3EuLtRzeivVSqsLfCchT1LqJtGr2bfjBosYnixCMCs4kvhrtTNokR9sEuzmSJmcm5YzAmwrPJhswvrwihZwpc65y",
  "key18": "38bJa8KnBXrm2DGDACdXMSNMFP4VdcXaqVM3eG44mJBVb4mn971c22SiPMbwG6JERYwdqi1QyYHCtgxCVHdmpbKR",
  "key19": "pkqmF6aCwS9uTDMJZJDHJDZb4qZc51HQotCLEckKiKp64MNLFfhugvVwdnK6abpRNnE9PNtPbh5kk67tp4A4yMH",
  "key20": "4RksFMcRRVFm5AKPyzpm4zyzKYwtTRTLuA5EvBa9FBUXFgrTovuvWYZV7ncpB7finSyJYH7msiPk7SGYemcwUrJX",
  "key21": "4gHVRFtt3fHin7DREeHBic4Wvgxeffkad6cN2TdgnbHyZrZMJMLqQRoJ6VLxjrUMLzpNxnwDk5a5BFnHwcm36cZe",
  "key22": "2ojnJzRZyrHQBN982K2p3dJBGuxKQpCY4sML4D4EiU1VFXawv1kqSE7UKnCpV4QcuxiRKToMRwdtsfKKm6NV78Wb",
  "key23": "2qHVCTqFYKLUXUWyeYcHaANgTaWeUBKpiBdgYZpvybsadqXSRBJbiFZe9t6rA6caXcGwDabwfwrcK2oNb51tgqkq",
  "key24": "4FEjPunGuLenXXSMGxm6G1uNG7PA564vXGpy2EcQN1wKAXTMU1geVDEpcoqJbnKgy6LrJUmiFLywHUmx6P5rojrk",
  "key25": "2QuhsbJekdt5PcUAc7tE6wNc7fgJpsBzmi9M8gaFvjpDt8jxTWLFKacXKRKKkyFgS3sQdrBeryQ5qgEGaAuhDgA1",
  "key26": "5r5mFP1PCu3XLRmPYe6G5ofWakk435mifrFVx23cKJunQjqqm6wraSqbkNohM5DA7ZizKqLBsyyMCWsgF331P69g",
  "key27": "2AGeprybDuvc8MdxADYC6nUP9Zv5Q4W5iygE4hNX83pF48anESjfc8mE8szfzdmZZyRgRUTVtZoVoMGteTaVzk9V",
  "key28": "449P7LhoATeA3W8Jn4dCgPiKPyuEjKNGKKWtFqhjok5LZJ3HC2woCobpHfV4HWzNBrgxhoXzGHuPTXrdKUR2LMYK",
  "key29": "644yBHEGFCA5DLr5CZUWFq4ZBSmYyiezEHWZZaKHjmCQrw13X7p5JPm3U1aeqjA5hvwYKA1EGQhvpfPd4dB1uh6R",
  "key30": "48psBgzrG9FNH3wP6qbq7mtjWBpm8NXz6n4SgeuaMeqHc6N2nPcW78dv1v1si8ePync9svJJLuYTj96YsE7zXT5U",
  "key31": "4T9fBwmwse5qZ7HPV25BkE9rpaUguzmLRSVeafB13ELeK13X8HikDKB4eLo4rZfPvEpntkxun2CzJPTC96dcFCCt",
  "key32": "4smc9581SPF4jRWAU5VDVDXLSoUabG2cHWzsPiMD3RnATXRoWoXWmMt413ENmYArzeiNUqj4WtkZjYoRtV67qYDG",
  "key33": "2zWPxckHifv1kCDDvLAbdcSYpTGy4BYQJ6zuubc8yWyo2gjgsKB6mw7wz8UbhnVb9Jz4TapWsTqqBbVcriryJsxK",
  "key34": "4TwzmtzK4ESM99LXGT2dfRvRE72zJKnHKC8rSJ9EV6iFKKB1S1TgcYhdtP7zfJtZJ9CQHHKA8U1Ve75oj7NAmmoE",
  "key35": "3szGwV7YJQFquhosMct5itvRUqP8EuvS3VW2QE1fER8mxG2cJFLCmPJPc6Ex5PEDnxccBQs466RLpEv5VBe69MwH",
  "key36": "5A2VR5EfBP4Qu9z5CusoUwjqnokigxgzoxtZVkbZgbgcr1LipUWdTJo2J2DmTLfCPPJtmY6jhTxLJkhpGcytcCSE",
  "key37": "5byLSMfQPkR7ttLyFiwzMf2ryeQy5RF5Y5dsRTqRtuwYguxt9R6jKeBEMDCwSgqTGQThU4uyuEnHhipDPf8oJYCK",
  "key38": "NPj9wCY5gRitxbYM8sMHZj4pkMFLGBMtZGpztNtTXVY3ZKz4XUhZtY8fJYYRtsd3y25Rd72f3XsA5E5oHgQuHGS",
  "key39": "mz5fMAPfWQ9u4rPzFg5iLzfVgdsgkBzZm4i6B3Mmbe8FeFst9qFxyJVFuFZQXMaowzUedy4o7MAiXYvrfj5c9JN"
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
