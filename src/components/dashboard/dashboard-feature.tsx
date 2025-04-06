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
    "3gmKqoXgUUWz1x4JjHRFvsMEgwx9LMY5QxbeVYfWDcNyQ5JDmCaHvxvYdh3DRVSod9W9pvyH82CnCdPDLgBAfi9i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uS3bcGoKXZmct4BbhyeeUrWwWpkYe3Qz3HUmc5SZs1mJoPrJSejQTVEVkjifGPvU9BPNxu6vMMuYD9Xi6gGQFjj",
  "key1": "roTXKCiwvyDTfoYG92p5UByXpfgXgyQFgBnh129dApYwmqNoFLPtnicRrACjVgnxYHk8h62rzrLCoWoLZHBMq2n",
  "key2": "JzExXShbwX3br2J8UgqH3Rp5W59qNbwQhLPYeooNukmeKjukrs4LWZWwnwhW4EdsAr1XDqRN9HwUQf2XrHsYg83",
  "key3": "5dpytf7qVsBjFsBUUdgEr6Z69Ams1ZNEkpFyV2Cp92hVP58ensVunLvqS6QmiDXKkmH9L5iRrrco91aTC8J1vG8H",
  "key4": "2XSCYJywcoQDE9Mf6n9YQ8gyZwmtTgxVQoSU7rhiQJNYw8dx22XiCBsuc8VJgDriPW9o37mKsN3SRes2D3zGsXfT",
  "key5": "3PwGQj3eosMt3hxKLDgjn6TFqJckaMjnhbD8WPZ3KSiNwhuggSbRRYR8HZjt21GB8cSMMVCkSKoNmdMjUKPMsYkz",
  "key6": "2ATfr7gDW2vt2k4vhzaY99hibN3WEBGuFtd2wbtFp6xKn1jTzptdovSroeQfxHfMPED5hEsnrEwe1dzP5bsxeTqu",
  "key7": "aaLxedAfHbBXM9gLdMiHLn6eAhbgoYPYg4o2UJqxu9jFnBc9b7gjhYqVvn79YS2fVhd1kGcT6KqrwjGEBrznE68",
  "key8": "5GyfdLwQzQ8dk7GR65ubwHwZKd5LxLorcptuXxZhiPWbzjuNAn1oM5Ww887KFVGZJ7U4Dqb5PLtHBS8Efn6acvv5",
  "key9": "2yU64iNEgxiYawTYaPonrUEEUvTkXaBVB5yBhXtc3mVNjxwvQ8o6iULFv4CadStC2XZ5VZVb7uipBfvMgRDHyDkU",
  "key10": "4S3CaZuUmyoxLxL1mVq369u7GiHVbDZw9dThwBFWscf6xo2CJGvtuS3VcndMQKJ6tJFiacL4GbgZQXqZY7sJwZ4k",
  "key11": "65bLWJDYhgL78XDCAQwVuX9MKNJ4Yc6as2iJYttsZvuqf5fcGB11VyfS16yMq76oKVbontn7EmAcim3GbUrDWPBq",
  "key12": "5ATE5Gqqp4c2zcdJviJt8DeWT8CZhu9LqzvJc7YE7XWDTLJmsU9YRVuagL9L3NMd3hMERr52ZedEmPac2zcJVHsN",
  "key13": "8kKWii4iD2Zwh45hqWgtTCGiQXVsfEEP38LeEDBLjfcv5HABzvp4JkNLEWHc1X3F95PpQgVxY2LKCZjmx5mRREx",
  "key14": "44V5DAC6htjE2drxP8tqY7zxFhrQBgtrLKebFMh3V55HhjQDv31TpGXPqJ1jrL4mXjs75NXyfcEHht1woi1unroG",
  "key15": "3FwhKgbdBCLm5XNwXT4kcnk1Zn4Sxv8H1NX3eGsjYqkak7Z2eqzMTcAtcAYtMLHoFP7SuT7jRPstDtR6McRkvViC",
  "key16": "vW2aKYy9c3CaPobNGfuJRqtuuot6R6Z4Tm2bwpkuJvH89p72xn1664dC2eBs2Ho441upstsUuqwQG3w9hFgwDxK",
  "key17": "33ZhSzZTrKazXkt4sHpvftpUDj14fZgVhxdkLQcbBToBM5mmKZL7E1wE2a9xEsFnqUVztbDtYku5h8JjZjNCXDcT",
  "key18": "593xUiSpEB24e1qF7v7NYQR2F5D2s4ZiMQ38zFs33hurdANXNqJ9scFeembeuKBursWbvRsSdmMcAx9YN3s2Svtj",
  "key19": "4YqL1z2a9WSNk6HYhS7D5wYpE2wj5wHDCkZGdEqQhL2KFZH4fknXVfPtxhMXPDFSZgZ8Du2eCShAoPB53K5Mzrv",
  "key20": "ZWKRB9a5PQjqymJ1pDs1ApRgL7UhaQZUHYn39kfmnGjWg5Ph3EBevG1J9p91boFmMGSMppoRiPN3VjZKKTrwaXN",
  "key21": "3vbtEcBb5UDE3fu87vrWgvSW6QNvsaRDuj5JtxooPR8LbsdYWigH9hHry8sjsnsdS5AoNdchspw9Fu2DiW5E6gX8",
  "key22": "2dGin25ce2seuPu8hEG8iwpeGNrhikheKy6FWLLtZgggyh5aLdhSLzeWQwZVHvrfkUZ2UkDPcpwodYSSPckcDaC7",
  "key23": "2P2zS4L2ddvYZp58MCSoYZrRKdXtrCbn4nHRDaHmBizbygiqJBVEpSvTt1M5Z2xx5pLxRARmZrz9DLVT5QxM2A1E",
  "key24": "3kYvgweQ1Rdknv2CbDCUPb79LUnAejcyDWhsURRRVfZE11hkPETAdYghLy4NPwkN3jNAJVm93RwXFjyyAPC9Xqe6",
  "key25": "qZx77Z6tk9QP16ryk95iPdi2dRwhWq5Mwc9se7fxkXmT1BJ7d5TURwnZpyEz2so4ytSdUFXXiq5oNNM37mMZT2V",
  "key26": "3ZvNnSgrXRDbXyVh8QDGLcRFvcoCyqZb2NdywAG3GaD6T1YWdyK6BSCxUbY4q8EMEtSUvbkZJGYvw1vUvtC1axVx",
  "key27": "3fdQ2dKxnyWj8nz93q9BLTUgh8n1ip5KTSmedRdDgRYcW4Us1GxEteUNkem1Jhjm3Dn1hUEkGH7wPExmGmR1TdkD",
  "key28": "3L69ZjwXJj4QN7JcTwhsU6aJkHP8K7vTKFyz3azDmPQej7uNDjrEJVKKr4a3QwV3ksAgT85tmjYa8EmECXWhYiYb",
  "key29": "5ZLiB82tRMUEoFhWKghFYsz8A4W5hhccBaujkEUHDAJDRfqmB23h7yVrJPcgQZNycaPYLFJBAEDEgoZXTeGWDzs4",
  "key30": "59fu8UbEKu2fZraYwNqp2VBWto6KmaLiNM6XZw63o3APmRhQncaDe1dBBVC7ph3pVpYGrZgjRuTusgUFDcGaF3dt",
  "key31": "3uAowoe6WxBJhdHCUpXRUwgmWWmaZU6KgT2pus4HBpABf5iaDqC6Y4Zi136aWmRRpKMRsXiEjnr6xiyjLakNrgBQ",
  "key32": "vXAWr6UYrYP2yTuSo4jSM9sS9T9ZUvmm9r295ehPLUYaSRRBcea6cL9iEzY9KCrz4UvhSMRFbRujusCnnLeDGAh",
  "key33": "4pe2XdENhypREZ9xYmcAzp7jknCiB4kDjK6HzQFuvFepVD5Msv61E2iNTJ93FeAgJjX13QjJNjVXyfDcAR8RycFL",
  "key34": "2Uu7bEBra3RXCn8SoUiR21FdpyviFG1u4euwU3KVTgkKA8ZG9npmNtg6ppV6HxoeEuGHYrDjvRHq7SixnFynubon",
  "key35": "45AiceWAtCs6CoD8tMm7titmLmqpxpTKAAHvZGkNxMNjnHEm8nQ3bSQcbmwB8s9YMvxjnr5k1EGCqjJerX1AUo95",
  "key36": "4yvFNsikERfrgHsufAYgd18CT7ufRENQ2NkboD4XGJkCNiMikc1h6VuLSPApP7VgCz1tDTXc5oK2opApvvd8bkFu",
  "key37": "5JoJjuYAh9ZdC4QeawN3PYkex9FHexbBou7yT4Ti5AAKLfifzRStZEFL77FNzWcjp4HcwvPJ3MMX5G24K2VaJMHi",
  "key38": "3u3vpVc4VndYEHvKtGTwkb8wqyTNyUvZQ1kPd5sdLc95pLP1m99Po4XSaFKr3QN7h2DJv9BM8s3NfTTZCX2cVLNd",
  "key39": "5WvwHCTdL98bz2giedPvYRbzqnMPHwx6NkX9J2844ecXiXdujCCvjeKECehMeoyscga5rULFABb8E9xzQNmgD5Ku",
  "key40": "4wwsSCCzsUPRNtDTjMyza3x8KkTKCGzfVrLZamCPDcGc1WVL15SFF6Q7Pr9vGHc2tSfFCcrhmDczP2LdbLjFRbx2",
  "key41": "4ojgtCNEA696YFkxdFjftU9AHFAXr9dx8zwpe793jyBtDCUh7kdxBuujhVFBW8FsKqNy9XBL8Xhxn4GdZ8zi737t",
  "key42": "bBsyjt1cGK83HCx3vaqcD5yQceT3ZvDLW8wP9gf5R3ZpybYy4upZSJqd3gWaizvpPtFfYCmxBB3w75TuiQnx873",
  "key43": "2VQQADFP3Qb5H73J2gXVnxQH16SZjX3aQ5XEbh3LjrT6tfr8nDGUooc2woFCyhTsM5NuAkGGehtF4CeCWhzhda84",
  "key44": "5to3AVCEdvyAxrGt3JFEGDVyauu4ZDKWLyujNeA5cjaNW4LHNWPxw1H9Xe5XJoDdgfukbZQinNmMGwB9MEnv7Gjf"
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
