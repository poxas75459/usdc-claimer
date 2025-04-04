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
    "5Ed6vJPTPgPiH1f95xWt24BTB6uBHY5RJKtuZzWsUousWa6VyHRPBJ7U5xtmKKgwrF5348wP63mt5KZktaKaiw74"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i7THjBet3axhqgmWeJyfNg62NPUfLmmTFRJdWnCv7b3NPNX8G5gzWfeoQcWqvo1ddGPQgHC3jcbrbCyhe9k2Ydh",
  "key1": "5Rc8BspbAicyXcyKfJSzHjkwBJnEKtKQUttiopq1U899vnvyQPBkwcMW12EKrZ2EiooSP9U98o69wqWGafGsm6hE",
  "key2": "3Bsvmx6Qdjigrowqdcaug75cdoKKHAxGLPs3zQmmrkJbPPk6u1z4WXe8Vw6DSAzHErMe2d7e9A9T754ZX6cUHHPB",
  "key3": "21vMbNMdom9erqyVcstjD98Fc4RZvNPLhaHcWdnEoEqFtMM4BFDcFXgK5BWHS9pYnEAZDyrkS3rcRXAqWTeDkbM8",
  "key4": "2AxKzfaHLkktTxLGzEVFyqqtGfSxk63nknBdnhvT1K8rrwbVvevFmVc64JeBP1Akfj8DR6MAaD3T8JLcJzVgjPNL",
  "key5": "4m8CrzH3H3L6Hjw2jZTAEZT8jQNJf3oonAHBFhjwSuVkHqybvur34ZFdJbiGaTRkwhvQL7JQpgqbUVQnMdPj9zqZ",
  "key6": "2s64muRj1ktP2SV2buWbfqcrsu5PBZa6Lu7fMKXMkW978LxF1kCKaePhRbMUCPSCAXHndcgNaV4BAvhQ7hTrePW6",
  "key7": "4pCJrTKTbxWKHtZsABCEJE49YTkNx8ebaZ6N8BUdT1wCAF6tSsmFXyPm1Aya2LjSoaRD6x8Y675rCt4KAtVEe7DD",
  "key8": "5EGuScKK4bAQqn3GjGhW18UBnuA4KWASvuEsySoTrRrze1Geo57R6dNpxUBBnYn2Zwqd2kP3LxiMJscTora5t2Gy",
  "key9": "2DASMEUoQDBPy8xaaSzDG18qsZ7XJBEy87Q2JLGJCFoLHbKm1CvyWk2eFepCMznrzwxrxcyDmwXrqE8nnd175Ffk",
  "key10": "3oQBRA72ou1j4BWhpNo3RYGu5W3qndtAVBwoezLWHk3c9cUGGjawtTYYWjC4cBJm4hqNAFQsCuSHteWtBxkaxx2D",
  "key11": "zNXW8daSybs6MZcNdkgsrWWGi6W4Yxdm6wYZf6T2sqgQcoPEbVeLoh5iAMwwNMcH9mjdGG1BNxGaYxTdix6Tzme",
  "key12": "2DqFdBsCg5F7uQqeQCYf6yeho8UBj4fdPJuZjoEaGQZubRjUoHSwEdDf5WFAezD6zZyNahbYhpsr95N3k6n4UWN4",
  "key13": "WZxun5D8H1SBTXyjKwt5CvxqoQ2tNvAnGiurg6Hbjb7RBj6E3S5nk7WffvSkLAXEXsmyth6mEBV8zthhWJHd7Xe",
  "key14": "2Fd9otWuPtyEMPvQdQ1jmAY1PLptJ5AUuMN8QpJyCsmrCnp2PTHWAArLR4k86ywZRKpkjLbscVFE7BDvCUVdNjAq",
  "key15": "mypBZznHr7f7zfWi7yL1be5VoZujiKwjTxkcqdNYpJ8xnAoytyC91KoromNHHtWDD3eAEF6rWRB2frE12gWLxzA",
  "key16": "b9ndMMexfKwW9EYwU8u5bepBFeXH3PKGC4sSKvTK2jLTGEg5kN3fZfvtyo8Kac6Swk97XCDAKq4QgxRseCBareS",
  "key17": "4DLEjrZSFVcCZVhhjaEgnGN3BMeqwGhjQzX7V7DxCM8JoSSLv7cHu36eP7jzD9Fxh1E9gczzQYy3i73aEFycTTUo",
  "key18": "5bWbsFLVHwxozWVBRDgbhiiQP5uQZLeK5DEhK59mZa3bvNzCwFAQgKpmM46tgqGUZj5nYABxa2vKP6Q42wYiZo3j",
  "key19": "4BeWCrpyhjMsdETqUptaxEE9bFPXp3zwLxqA6XQwXRt7iTJStYtNoF5LwLcBwp24SRC9mUDq7BHmYxhnreu1ApLy",
  "key20": "3hc22MgW2FaYLaEubVY48aPCCcfA4RcSFk5AgANMbrc41pF9iZBEELtxHixY5Y17FMkZfDLGQ7nhnhdBbjmvg2KS",
  "key21": "4Qu5msfiac6g4VBppncYGGzWwTVYBb5rU1J6az9munuQzmYs52Wx1qmSV5XkGB4wG3GUzdcco1phzShtEkCp6WUb",
  "key22": "4Y1shftWDNv3X2wQhDGFzfQrgRKfwoyMyzy2yWcS9CU76YKh9nkoWMhYg7xVbbfmWfJz93fXChf8Pudvv4GJk2Lc",
  "key23": "5VPVu9KMqNvW8oLY1WSZvKVapVffSgkUGXYaioMCD1euWaStS879G3q5Q68bbrWMZsQnSvLgbca6dozhuuXTEFGS",
  "key24": "3n56xN7kx149rRQy7Z5PdsMm9oJ9ERKtR5HJ5cU8jmpDCxEBhQ41fi6R4DztEKu85BG1cVJhz7PgcmePCx67T7Xw",
  "key25": "37tN4Fu4xvkpVpbLpiyLYymAy925XCSiw14SDZ3sscHaTcv6Dkssv7oX61Mb7xZhh1pLJMy4iRbeyfdf5jQ8hv2u",
  "key26": "4zrvrhcJRN6WhzeXKqN7xzZJbbaCvajjx4yiwWP9kzxNrM5za5Zu1PuryM62Bskgz55mSVCGUuExgpMd8BB9VcB2",
  "key27": "3ek3jZApBUxh672crFKWFcPJqbUE3EVviUeLc57kEJFJiprrspBqf5dDGV4Mv9TNcEu3HFAUrwET2EXxRFeaxGZb",
  "key28": "2HEsgyuxRM7CBcwkesqHTqsxf99vPUYH6sPc5w8e4oLacZKPhohYhjEHKNkg9ULqHVAsjtWHkKujXakfnd6nmrhV",
  "key29": "MewHNNKadq1Edf6c7oHmW6J9kTRsab7FgfqMXxo8wdocDCSxcWEoTf6fd4jccp6xKBABcdfkEocbXmq8ZkRyXtQ",
  "key30": "2uVMfeWb9ZgVFwgcXdwGq5XLS5jeWHRCCoZf3h7NoAK3mCvSPTJnnjgUxQHxE9gJHStYstpRtrh8yvPa9fDKkFxY",
  "key31": "55kcaj3TxbPrx9qETxAJSe9yPY6AtZTUj22ETPJRgiEx25EnzaLL1M5ziR3DxeRZQBBDDZLschdFAGi5tUjju8ke",
  "key32": "5wp7WgoqPS2XKY4ckSGiDv4z2kzdXbmWMXZjQah8W786ERPJZ5XGBCYDpGkKuTC9Um8BoutDwuD9dUFVQt1crHvk",
  "key33": "4oBvgMRoj4riVTvabDMsmKPs8oCnBLmgrQpGdK5kbmVuYouo4mKdhWiACNoPET3dDEt2Vnupuw1JQzM1HGcqtztC",
  "key34": "5nPC4LYWcAZSREQwBzb1MXfSE5qfujeUXsBtAvtdRrp2gbbRytJv24BdyQr1kHgZvnamfMbeb9EDUCfaH1yWATGb",
  "key35": "48wreJ1wDQ1JzibrMKDkoe851WGh92jG3A3R2RZcuDdQ58Si9WmGhLmMrsBCAcEQ7iRk4oHt3gBECa8nTSjP5uNs",
  "key36": "37Z1Cvb4Yi87Pw99Yj193Rr6hqaDdAhQYGkoHmXUDcgwMr4gDfAuMvjAVpgH6Q9nbzWqFgw6pNVLJmWGPUhx63QG",
  "key37": "2BFXTR87cRSVm9dYxtKwt9Jv2RQT7QHoJhkf9Kw9SXBkTQxX1VaNhz7ZQEb8aZLPHhF4hgKhp3gQzmBTH84Sa39T",
  "key38": "LZUEwVjjZQiVSa5g9SXN6WrC3wAAuVTJVr9viyVix8zDK71sPwDUAHfMjBMPHVna78k5WHCnqfPEZPSexLWk6E4",
  "key39": "2Tz2x1Eqn6rAWehm3CMuZoiecT4i9zhV3v2u2i51eeNiWBAXv5eGFXChmtt4sJ3Hf62D5xLjuhjRrSTiidiKRjZd",
  "key40": "2XJuHrD4JRcwtvQp2vGLgvtFL22taDeq9Zv9WPBRKH5VnHguMCJ7cmS917GyVVtPpZd1fFUVuDh2wqyuW4yBrxit",
  "key41": "5GX1DrktDW4bQ9StarLKiAS2rehqhiShULCHNBS6tDPERApAAcNMX2QQ6V5t46neXfKhSVGNjoCze9Y4MMWbDehf",
  "key42": "2nSYwMrENUYJ15G87py3yuYZyMrUagmJ2Fp49JQFxXUHrUf1m8ZTQywDwwZciXjtUXFSx8wrTEMuVzyjbRw4KfcC",
  "key43": "5dwSMU9YPt2s91ttvHsr175M2BvjpJbVsrMxut5Yuk8TFqjHQNaEQP1vbLDLuGA4YVNoGtnQpoiAShRUZf6HZ6LV",
  "key44": "5LHmGc1ksWjYKSZteNy4cGNnG9FrY8kpt7ELutVchozoF5xz9qmp17ZvkRtt7u4fyUuhXMNf6mxGCMvpW8MB5ETE",
  "key45": "2dbHoBPUHW8Zdq5o1NLPEvtHCcWLg7viEZVJd9oHxgQ4bamiEV2DwY6TDxL92HW5zoxFf4gmDnkCUo7ZKDEJdWJB",
  "key46": "aeBn32VPHJENDRrVVLeJtwzDaQVrzJDHkcJGrnoqKfahEoh7bWpz47ouZbWgmEzAFr6KemZE4EW4madXKVaCXLA",
  "key47": "67naGAG5fxzvLqvPAo9vz9KgW1gG62ScznCG8oRLcFNgzKi6qe8JG7HDsi1vu4EwYKrPcuF5D8Ry3xFASEM4E41F",
  "key48": "5RR6nbXRf4n5bd4MCnA733ZvueNAAmb69hQe5LQttAkATQPYSdA1Fm7h2g7qX6Ya5qdU4CUwHvb8sfX695SB9f4w"
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
