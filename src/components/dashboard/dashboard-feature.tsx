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
    "JoXJrCC8mv6BaHAny5fC53ZRT6MUKEyeUPXB9j6fRz6YXLwiAubFABkpizBVsWZaRweFK3gZMfECF5DwkKXtNyw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WSFoxyXEyV6pM9Kfi1SfVCeWeq5k6BEobJxdojf9iXmgc7h71rqtVrrtQMWLeGwHCzfpMqbP3xsbok2EfBT9Xk6",
  "key1": "3dhNmyqwnfvz28H6noMrEbmcak4t4zUnmCkYnJuAvwyK5DykB2Zc8qyK1iBPtR1Vb3oxdpDn5PeYvs6sNQoEdCgH",
  "key2": "3HSjucuSXTnWq4vNQFN64rqxzsv48WA6Cx9eKLhy5nQ8jDCifTdzKCA1LzdRVakRka6ibBFYhGcmfUimEjqWbkLS",
  "key3": "34G8JEKHo4WyxiPLWrQC2JmNXPir84rSHw8HkeEjvHq3sd84VVJnWUofLgptQ6daic7qBYi7Q1N7KhAuACmDRFtn",
  "key4": "4Yqf9o8qvjjuNxQiL1v4DEie1gSdKsdwmJe4fmnXSnhoRpjAeHSFXFNPt85U72Z5uREbjTCzAYqK8Yog9ZG9XrLh",
  "key5": "3kxjgH48wkDAGjfbhfw6QzPQvUWBazQiJCgyDFiV7DkRLWn8diHE1PT3AG1DUhep7Fw9jMywDUTFwDEs6zfTYczd",
  "key6": "45ZLb4Q2j21vMky2krXQKcBXLpzeHDhK6Q5utcNdWa8bkL95vodU4wF7nHGz4VkMwMbzZuktc91YyDEdNGjw7jiJ",
  "key7": "3hZcXLK9RYcrsqNYaETUPHPiokzomzBz4YzT47zLyxai5xkNRZCsyRQzHJeFnMo93vN9h1hztmq6qJEi95R2TU15",
  "key8": "2qR4qNre1FuDYGvbKfFEeJg7wb7KLtHYPWLrkXpWMQBeR9gbUTJSBpbvWTRVU3xtjaWmqrGf5k14q6yLwmGCL7wp",
  "key9": "3mEWvpCVVezgAL2seDrQS7Eiae5Uh5PiN5W8rPaqvXfsRP9YXXCc4SUHasXfFGjvJgNmA5rMtL7FRovkw1RVdU1h",
  "key10": "3DVZiNmm4zmpFf8BBWvu2GTsLwtVdZxK7FbzRxC4DWANYcUVrrQbwNpL8PGVuPux6LzayGX7twEHnGJhNxTHkeUY",
  "key11": "5b42WQZU155u9EMAW3GAcomU6exeaiYEEBxurPyPGRhb6bgMj1t3WTKcBFdJ5Fwi3Tj6yepR2TeyvDSUKeMBNR9K",
  "key12": "5yRPUeKtN5Wj4B5Qop3V36Jn5kcKt2reHvryD1T3ABfMtMCMddvqey1DfTtpKb9R35YpmkYkm1hgjJtCAHPqnSba",
  "key13": "2gQaYDTp1wjfaUqoA7bbYBTAPKVHeRNm1MPfyQEgbboUNJA4tQ5uyf26AWegUmXDJPbfjVbvre19UXwj7saye2DL",
  "key14": "2YmqRwmvhGh8yam8AJJxC1WKhwFSiNThwRqr1vQsqfibftQi7GZVs9sQKBd269sxiBa8RjeSHCRoSQa7xFbgtfSN",
  "key15": "4Py5aXyy4zW4CWKa1hT8JEyqA6hPTMeWvCtC2YMCFj9eUt5cALymRA17ZPxKhAA8Ye2MpbWMAmSzwUTZjfiKUmMp",
  "key16": "5uciX6WD1wphHjhLqbCGg4p3MXBkyKqjArHegkdq2eZA9PYzEW8F2TdHeStwXSTQ2jczbPpVXaVrxqy3jzKEACBM",
  "key17": "63sRWWGoXYYFhkDh93zSt4RbPXMitz9QLdTWAMvrGa8DLQwoMUQMZvHsXAv1Pa9mbwYvucivcpy1csaBNp5TLzPr",
  "key18": "pG4W6ZBdVWsFunjsLc6NH1v9ojRTZpxTuBjQHqwtYFVWs3bZCYP35CH1Ls3crjSAUuSRavSwSHGxVv4ZgQBhrHN",
  "key19": "535F7Wi5m4iYcroGtqPLsyioaDApxThtvMTc5dJv3ckrg46fxNkQLrTpjf4k6QfeR28XNjcAnkpaVfafsVEboyyV",
  "key20": "5M3vDUx5wp6S7rEwy96Qy6Uqoh7rkFDtLyKzveh2wCBFALiKFSQXm96GoEBouT8DeJworABTdvgEBVTBZDpHncoX",
  "key21": "5v8dWKBAMyHBeFs2y5XuNm6hXcJMiFoXamPmdt9Jz4r89thfLv4aFxyU39DkqGckn2FS8prSXiWGQWxqSfzDZUvS",
  "key22": "2PcegrcLKqgCDAd7QCwXkxNfJtUuuCuPwVTaW4sBQEdYTdSAsSjJxPCTkvEVBZ5x2dhcUn58XvoACN88JkUxtWUW",
  "key23": "QknHNn28QjB8TntiA5JJi81VtxBzp5B4xPAy7VhRC8u1mZiqWY2jMb6H1NfSJRBUkaBAnK1zUxA9Qepkr2JxVrA",
  "key24": "2SMdZbp33Zenhy6v7Hkz7yz8No4vWs6F9DdMnBbcZwPucUjF7Q46m2R18kjocXcwjoerujkoQ74zyEeUZQwcTT3E",
  "key25": "5snZjr5eKAmuoDPMo1aWotPyKre4VDT8ij8aaWX2Ka5jyi6U5y3Pd1wnxybWE8jYaCA9x2h38FhHyYzCMQhJSVd",
  "key26": "55DKrG49JqAUPEdcEjHsszorfPiSMVMaKHNDrZgirQk2zJTXbfLD8zbej3w2yqqFJZAGeud5XtANCdUJBKT5ccV1",
  "key27": "5FdT7Pk8yiaFqfx9mp1muamqPdeGQGiiNKvngBtrVtpQwd4cPvEs7UkamkQy9tpiaiLGs8vZ1b7gthqv4jtfiZVu",
  "key28": "34H2Lb98sTLRUhnP19ctzTvgT7fRrAZHSKcJg9Xdt2V4y7D7LBybexLx9z8Esop6KAow9d4gA7fGu1Jz3yeYvac5",
  "key29": "4txWSZf9qCcUQqqYp68ftus8ruPJfjREY3piV5kn3iCrnMxiygurf3QNtWCS3mnxjEFgPEbQTqx6eQydRDHttmL2",
  "key30": "4FhCayeM4AZ8ANBhhi6V26uNrJmZsyzkCxn4A6d9XptapmS2vi7Tbmx5Aak1uhYm4nxMvj722tqpHDJifG8gyHcp",
  "key31": "2YTCzDCaXN19jY9dAmtA94AoBckSWQerxbp5Rcfy6H7TSFz2n2XZ19MbRWBoQrhntaiJ3ACyFkKgVw1R5XZXAk22",
  "key32": "597aCYZttwp8zBMnaFnyXkYqc95b6huMvVmeb4r2n9p2EvEuBGtxwAcMPN66eQQUDKrhUz9MLEwcsUNXKhKM7ZPc",
  "key33": "31FRJBMXyGjZHk5WYW5ACpEYS14ejtC89WgbWD5673wwv44tVgMShd1kfH8VPVRg9dWQ5WMpJBzBcR6RW1i8GvUz",
  "key34": "2q8mfm8nDhzEY73nDAAgBfcxJBRLRshmahRE4YhZt9fikbGqJt1EtAwAvtRZT3qMTxjg7oF5AHeovwjEj9G2DHwg",
  "key35": "52ZdaWm7GNSD8GSxBBo3955YbS7ZNJtSZtptvyFCNPD5jb2AsaeyNoD8pU1gHNNgxstVBJLdxUddXPe4J4yGN3J3",
  "key36": "3SqZiDfyUfZq69cLsWt9EGUFv3ksxrfGizF6BnYDWW9ukBomdBtqrzUGCXtGsQYv55qJcBDgcg87LpUA1homvNwy",
  "key37": "4sUHVoF8UF8CHcBCMaxR4ozJuFc9ihquuNoMhFwFJFjyg7SrZiG6XTdCAyQqibr7VTi587wSftTph1ApkZEH5amb",
  "key38": "66fqUh2kY7bdLy2A6gp4AWm9rMhMnEiYdL31n8tZyHaDepLfxxNEyT66eLRqi55GaHNXDUwo17SdQpjvuCDR4T3g"
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
