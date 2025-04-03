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
    "ntNSx6rNhM28T3nbAxF2V3DF9iuFjbaLpKsLJaNRhP8V8gWQiSHgFHgs67dMDrsjzeEw9qiunH3rz7rvXDmEVxj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56N1y6SEFXkFPNgqQhJnzuG6s4j7SusXgJ83HCMn3kyTQocp6fw7GcZ8hYxrgHWZs18fKLyQ9TC9W57QSXg9EUVT",
  "key1": "fTJpJAVPKSBdHJFfnaSJTdQAmAFSVRYAXLbmDL2W24aLQvzCZRviBT1TZhad2a1Ep9cHTmJwsg3trp2aHo66stT",
  "key2": "22vNKmj7UpQyN2XG2QG8cjyifkJpviRh3UE3xe8GVUmPDoGnukf4PeWKbp19FvPVtDfdBR7Mz9RGT4em7ToUBNs9",
  "key3": "5EN5tGfW3wDTfKvVcGS6cczV19bV7Dwj2k6HeRTNfor1djkijbu4cB6qH56S3u5CTVNtBvHZmxEHZyEpfhYVo69t",
  "key4": "2mi5KnadXzLmfyRkd8Yvsze78EXY6HyMYMxNQBY6S4vzYxbmSHTFmBYxC4jbYnouixWq51XEmvsjeyqFgATKiGQV",
  "key5": "5NKt92oK3ThuHGXuRHy8BQNxkgni6fWHTCHFmGHpCgrirhcBD6oC6F6buSyeiCA3aTrF8PpSsVxZDCb5uzxG3z8t",
  "key6": "xAqmomAsccREPoGkwroujFL2kgNJ5x8z38vuBBpe4XvTBb21Ay6hw7LXDyCb8ZEYND7ccqjUp3nYnH7rK6rVt6g",
  "key7": "5MyWQsR3WVgR84ArSLvSaHcqjyJwQg673hDKscbAs6ov3ZfbzWajVdMP45DQRzNogUrXnU8imsfY6aU7G1EkLdAY",
  "key8": "2hPk9nL2aeERZsg2JJPqYAC3QCxwsnMN2XyyjZ2CMEgCLf4PrzuYkCzMvL4PTGXFiZ2VwWbKZPfeMDeoqEVwsvo2",
  "key9": "2vwykhYqmcwa4PEjnxrfMmz5jtTZjeAcgDP9ouEZjKS6N7HVK8C8tpnck3G16mavroNgbthZe1GTqg1ZVfTLPbDL",
  "key10": "31JLD2vedzgaFSKpYsadusyvcWXJ6pqsbVTXCpyRbEw8vy9UoPLYsPMv3udAmyXq5J3F2RwFXepHnWM5xd9ugaVQ",
  "key11": "PhHu1kWS4sJKSYsNNwSd7s5Kn5x6FjtqvyPHs72ieLGgSPXyDZChoBfUJUaGRjZH5cVjcqarAxyTkvMtg4wPqKV",
  "key12": "4mKaZNrJGm1Dd5zVPuHn1becvaF11b54U6XEv1cPcURmhvjxnha942n8XR6XqvVCAcKAPsgdz7WMw7jGwwQCYoWU",
  "key13": "622bSEBzY2ZBnV7tZnTGVbXVSN7EYyUFWGkni2ygoJoPQoE2hFaLyNsHb8aGxxYov6CVEguuK5P7vwFyLjxuziFi",
  "key14": "5BSPHVFQ223rfSt5RCSKbwhatgp5sPUPMhdtaMHneeiQTVqi573Qt74JuGqXSbxhgxx7tEbSamEaqdGA9aTdP5qg",
  "key15": "2L9VcjLmvdtBSEmqtX4sRQEsJrQSrhwjmzA9Y2Ct4cPVaGN57otqVkcUYv6C1ckBES8MK3EDtQaKrasopQr3ZsfT",
  "key16": "4ehessbHgGRgJnBsGCXCmJd8cd8rHnV25DMhu5jN3YRuNkL7xhfkAtiDUd4dfKrdVKz3RRyiVsN52XbgExmwCha7",
  "key17": "32PNdA3mCZBNHNwuuUR1WYt7pG3GSJ4XFSaYUcNs6dDr34LaAbNnhy7d5zk1seRAgJSu25onPcaaw4dd3P8hod4m",
  "key18": "5o9TXisRn635g9uiB6SSgs8VCX1vvqYXg4PmvFV13NpYPgSdDsLGHTXNtssuYbhwtHVddMU3aJrKzGk8iutNciuU",
  "key19": "533nHjSJtstCPWcMxYvaWajMrVEeBjP883Qk2cyn4tFE335AVYGG1AJg51UtGUd9vHhq29kFn15kGNpspJ7zgkqq",
  "key20": "8EdY5nZatkASduDemaBswpZ2cbSHzzsXMZkHVco2yRa8rQcyT1CEgEeM47beJTCY16ZF1xauWfGYETo7gUykyvt",
  "key21": "EHuukgWxcxSKhYQrZeYzAhgVynx61dDYwwmsTn33G84J8peHoAq8bW1pCgkeQtuRTdTDXhCM4qJsTi5pV8Hockr",
  "key22": "BQ22Q86QwBNbnpbgGxrGtcZKvY7599RpPh7oZfdzCoVQccfWWJQ7w1sjQzkH2Wj5rtuLL9w2w3s4z8mFzmJnEGj",
  "key23": "3KAFehpUuBz5eYfvxRoLUJAFkWpBWCqWRWqQCWcFKfeTiDLQH9vxkEE45dEjGMPVxSn8xEDUHp8c7wbVwLVJhJme",
  "key24": "5zoFoJuWiqL56WMmDpoTeyS2tyJrMqqXsjNDUAuyRNFAhohJrLuC7BsZ8xkzu2PahCrFAyuSUttqEzU81YV333GY",
  "key25": "3BDYFbKHnxUXZAkAEdTGMQo1YeF9Cy4YNPUsZwL2yTm7cXubSa3whhNaiS6GsxemuuAhiucpTEPsQyFEnT2Dhbui",
  "key26": "34F3FdD6w95acL5tBRPU3eqjse59H5QAhneQGraVM7wm6Ue7L6c2NAzRBvraUrPRnXEd5W8eQ3WKNwwmavwYY4ZP",
  "key27": "fxq79KXY88jrHynU8LmnKQW89nigQL6rYU7eNdVbzBRZ15XRUhTXSGXncUdPKUod5iWHQX5sC3FkVRhSixmKsFG",
  "key28": "4mWATG41UmM9ckdQQ87g17Fx5wzPDk5yrAnpoGikkcdZ4V9afxEvphoPEb32KtGnLsE4Zvb3TeFbz3uPQoXX3fBi",
  "key29": "48uFuYxbcupeCrz7GnsAJvT6bHdjuMNdm1Q5Zs86dNGJf2vuK69D33RkcVTVnTGNbmC4LXrJcKVXBCBFjN9eaHS5",
  "key30": "4BunNSjyzQAtpYhREbpRbzNSMJ9u6ypGTWGHu1pD9hN5PiDNxXhP93oLY68pVKJX2CDKx4SW3qVUPoqCUfywpCUQ",
  "key31": "2Hn5CS4WjRwNn4R4hRLfUF5aKTW9K5TUfD5v9bK7dP8pnRM5hNqRrt2wLoJfWiW5W7oM8wQ8gyC2S4wgv6icVmq5",
  "key32": "52UFyHuv5KMdKVnB31xHXncUkRxRybNJuYXRwUhCwdB3JSK2J7hsJzYqsqZCkJgRNxDakMPddVr8aUEbBXDDUfYc",
  "key33": "2XLTyYmoz3MdAK9hDGeCNv4xZVdb55XbPhPKueBjcVoRS8vMPEBjtFs5N2Xv54fY7WyR5tXoh1aru96vjoVB2ch",
  "key34": "CVJ4CcAbD6kov9PPvqqv7Hfz4nFtrNmdCwHrxPsTJ6YPEfXCvw3Gp2aFeR5Q68PiSt147o9MdrV81mScNYD1HKk",
  "key35": "33WaHRf8J5sZvTdvi32XzQ1kP18pke2iYthMMsjSpjx3QPaBQ2B8fnfvDmCVvmxcQNQQaPruZHirLxSA6doMHRVM",
  "key36": "3z5BiQyeituxgULL4of5mLAoMTXyAUYoZqXVHMnpGBQqwZ56aHDqMHcQmao1AeDs7e29AFY8Aej74ajxJaqYsajZ",
  "key37": "kFjNLnAhNeuXL4E5uGEkRmyJ1ZD97zrg2jZFwK4hpPEJQoPoPCauf1KHu6rwht35E7143sLFZBE9iKpKXwFUg6M",
  "key38": "5DcZZZsAXvW9Cbj1qNwBCxuQDJ724VPPU1Gr4a8mtf4Lf6YApaJcySKfVZ4LzDQ1MQtcrvusxYx3XjfboTdCS8TP",
  "key39": "2EXFYZkSPN5mRwTDu1S1qaVR1JnrpzvReBM1hZNPctCAUG2iXjNHYKMBE5gBF7KRvZehhqs7oN2s98no4M2PiY6B",
  "key40": "66ouTpeWJAScNbsUtSaMC5ChjJYWCACMomPBTDACcYbGwVyn5btAoHAmh3hXyBhALMuDFe2pw6YbLJKhvEwmSCTn",
  "key41": "4RffLQAk7zPFVRqXkrSW72o3Prjon2rcugMEj6MU8352xXzqLa1PhHAPov88uSfgYbf4ZK4isKFh4JhgFPWgb39x",
  "key42": "3237pm9bnfszpGNV8etwsp6trf5CRYR5dHK68MeVB2qiPSJY36bKkSQvogvU2ha4pbRyZjxNuqEQrEwGZiuS7oMa",
  "key43": "3mC7ZEJeMwj2Fp2SzcgDcFFznTQCJZmv4r7q9DyihaGPpNAyBk6N9QecyyhpSU59gkaKf4bHwfGcicb3MR2QJnqz",
  "key44": "3cxQ66XsXCubzFvRWGknK45tNJLw11HoFn1hP8Ph6knVdubPzCM7AFssbdVPSgQtNHtgKYVweUS5XKwTSoT83mCp",
  "key45": "2y3nSvbVw8KrhgdeAxq1Wp4skk8Ds7Xw1H9Cp7HiNEgvP78f51gCfWFxRZ83KZTaEL2HLDdejZzMpMfrAspCyiGA",
  "key46": "4j7grjzsxdQhmstmKywVTrin5RoZ8vGHkAFw9RKiLbgVbXLoHMnyriURoTbDXQhzA7C4wA5kpofroBmM6m2J2z7s",
  "key47": "3n3czr7PnoZHjoWcS9e3Nv33pAZLHVK2s8Q9Gd1EgnaXqR8Jdvpw4b9cS7SBiS8VKv9hMdAMwhH6LegmemKptUhY"
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
