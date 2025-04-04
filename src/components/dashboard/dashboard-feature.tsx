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
    "2MALKWECJz2qxqCqKrJmgNuDWy9TzMPaL97zzmctxukuAGaAap3m1diPPF9WD5jd5zn1rZsy7YE4AdZymUWmWQB5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4AYVg1SjS39e7ZLVP24rarG8t61P7UhxBVa8MziUc8ckNz5qZWgkAFgtE5iYnSiHetxoxzSwUq5k7Top7iC6Dtah",
  "key1": "3vuFW1DgatSpuFQPqKLzmzRxZxtNozBBpcY4zpgNzBEHLktuTtStQa2CwHJn5FcZWJNmzFoGoJ1Ph73bYRoF2pc7",
  "key2": "7Z24KB8MwowZ47saWuXbh2gHvXjzRgk2VocTunRV4WCVaa2WgAVr1vJsoCo7waTqeDnojuGoyDQzUpTt7B3Hfz8",
  "key3": "2jCqWySmepsANxn5uPgN8Eo7mCPPo9TU3CBU5r4VUouBhRcXvPwgE3rePtH7y8TWSQJNqASpuYD3KKvR19jEo8KL",
  "key4": "dNSPwP2WpCGapGusMmx36gnDLcz7xrE66dpuAFKcJQUWnQ9pVNZEDGmCY9SBVbwtUWcuiD6m4Q47AK4B1B7ufRV",
  "key5": "3tjD52f4bYjt3UFcD8Pt4NmGVPM5MaiCERoeDECu9Wtn6GPp76fbMUuGSDHEBMhgf4RzHrimHCfR1dNUpCfJkAFj",
  "key6": "c9hxJuC5MFvNBicvPgS24mhArbGao2AbGYDVNkq4ZJxFA19ghpqMtp2CGQR9ZZwHBMNQGimzSjyATVfjvuPKG86",
  "key7": "3e3DHY5CA1Tx3MXDjAF27NJATVxNJ2uzcme4nMcv56r7uxGV7261ts8oyufGJQwmue1WmoWCTVCdzMWfThHdANXz",
  "key8": "5VDr1kv1xgaaDG2XuswkJ4mYBkTjyTze3k1oYmyUaxHcpJaByvTKSW3MLopatv1bcgHNTGwUWdj8a2WWBUuHR7UV",
  "key9": "5qBQy5phzm4EJbm1xffkFpzYUESxLzpiNsst662suH6Pz2Eexn6ipjyAdLoxnReEk6rZDVD9JJbc1rg19MENNzDS",
  "key10": "33xfVjypCxj3YzjS3NUkuwjMVA4GBRghd7FVXdRzkZxRXTAN8hJv4Yx7GoT2kv2XQovC2W8bFjwC2v7oYCnNcDYi",
  "key11": "48M3gVMuybZjcdTGMjqHk6m29RVSYmJKNSqtTFdXU9xg35HYZxPgwWJmJL4iRYbYutuJDheNNL9RkwUkiXVX9c9R",
  "key12": "5Yti2dbvAmSYP42hwZTgsgvXJvLwTNoMysz4kdepL1dSTxjzPMNp2deUTnNeKi6XiPb15KboAPUqcwTCP99tD43e",
  "key13": "29VH6mU1YchYhJSsLjSkbUUZUMRqLUuWQDBCcrAf6ihLoop3B5mEu26m3gciA4L9r5bB6ReBczM2Qft3Z7oj73vp",
  "key14": "RGahD23nCRwBJe6qvK3ppspXZXqHDCQa2rb9b35VBT2oae7oakL2efee7Y9mxckFMLszr1QTyb3WPz4WnK3xEWK",
  "key15": "Z6Duxb6fPaFJeDLNrjSDmZRUF1wkZEZ9jn7hx2K85eNLFmcJjE5fTQpZtbDMRNHbsCbvrwC2KH6KrspaqSSP32J",
  "key16": "4EfL4HKkQuWP2LZf6DpWdzi7GifpLzee4TD3C85riYNyEVKL8doPij7krsk35pJe9YGUfYorDL5dC5cabr14UArJ",
  "key17": "3WHf392Akr5xgcyDGZP74ZsLzsszMoc7QVqUKWEY8jpf7D9kGWxmoXmDpwh1CjN6ZHYF5nVRfUoTboyH2aMpVBn3",
  "key18": "icvfPgdHtbJw7ADZjAVyVbdHf6yFQcsXgopzeay2i5P4ufydKfu85qjq6y6Q4mQpgrwZpK1dLHTuYrA4Y9Y6TZd",
  "key19": "5QrgENFQzPSzkSsmchN1kLXyYtu8ECrGK93SNprckPAQ8tTCnV5nVqiuAkdTvJQWoHyF4uYLLvgF7waitJzfWjNX",
  "key20": "3aTBsKYqC5vE8u6jQC8TJPS3mZwcxXzSQUBu7asnFbW71YZZTfe7dLCiYfXXyNXjvzpjj53imHnxWkZ7Up59zGN2",
  "key21": "3xWt4rde9NGNLUUpFvDPeW6E3JDoRtpNMnWcNwxpC2RFmkjPPN7gLFuTRoDHLo5jeQyi9fLz3ZKAzZkeRhdi1Z4N",
  "key22": "x9WdNrXjvKTAW3fbXWh6QC9MqTjSY7BasSi7fQCBAeBTmbM2WrAEXaZapXWN3TVUkRFWXvGeeFawf66q1qn9HeL",
  "key23": "5PvsDj8nHmBADn9w7uEQn9pLHzs1sct5j4YJ6awcVYoB6YKvsMwXfC9qg8SMbuinQh3rsFJ1EeA3Ka67ejNnS8qy",
  "key24": "487LoBezgTZfTuHWr7hxXhgH18jCzKN12wrCfLfN9hnqQret5kTCssCn2DmRYgHRDgaTz9WAiGZKPQTq2M2FL6Ha",
  "key25": "3753EDpRNbxKEvYDWf46FLwiSQ6hJtvvaryDPMDvpJrMUj626jvWdspRTofErXtLkpKVYHDZPGTDEcvkNKP7LhEJ",
  "key26": "3UQjZaoZYb6kqB6inBQjw17FHKsM4vHMFqyTzR21RHwt669Nkut8yv1gGMiTMxQ72bGNgqUzmJFhWMEEfmVYNeLA",
  "key27": "4DtAW5zpwBY2RJ2HiEDzDjM5aeVzLaKstrr7waZsZv7VrMyncuNrVmSQDwC7MgP7SkBxsZ4ouNp55ycJadtFXFkq",
  "key28": "4iGhFKYoGbMWAjyzFSMzDigpseQAo64x6mFhoN9SSHD1Y86AwcPAVjSw94H4CpLL6e4m883axi1d8g1A4fvDcW5",
  "key29": "zU5EHJ2zcxiksLEkenjLXxYMMxaGnDmjbo84srRUxQnv7hSo9LyQdGTtxCWtZGmvVWp25orrwXvvLBqPx2HUq4T",
  "key30": "59cR2TgXTV8GodNyiU35ZvcsdzqnJvELHsrFSxBxgk72KnQfThB9gBMEEeeiHeSQaJDrTVKxFTAthUCJvpc2Mwqk",
  "key31": "oQDuAHkTEeNaA8CKFeqt9GbRsjPkqxafRVabNuHsELgyEuDKFEcjCfBJsnbTsfzsdxhBzVrwvdJsnch53Xo3xJ9",
  "key32": "5PAyJ4e3orRzDVpWc9J7BkoyZoufxrZ2wMn9evkctRLExMgvwB3J1hADfHWAG1Z8DsL4bpEZ81XR7f3qBwWTdKdJ",
  "key33": "3RojExdbVbzrEDYfpyx1bJ9Th5qWDxTkAGSrhyCRtq2ADiVA2emQaLvJ91ujwNy1iyup1tTg9L4Xd2qBPq5tNJXN",
  "key34": "4JZ1FHqFBMfjYRLp3cxccHCdKuv2PxGCHZXUcpTgVhEgqy2q4WpyT3ajEQQfu1J744sbi565s6uQrBqddnjib3CZ",
  "key35": "2Qn6mJJq9e5wHYCpUd5vFLm2bH7weAhmV8kYiGNLw13pz4QVNyj9EeVKHUNC1quK63GriwPvJwGUZjCw8FeQXn8u",
  "key36": "5ACHF5wSasHbUzd1W1LyBfxE8iKiWiebNyUW569hVjhMx62iedQ8hV6FbcAxc4JX8pprEPUbAWbaNEFs3BaBfucp",
  "key37": "4544QKDqoJqyLvjEPWXvwKy8mVE91GiH2eUtBV3psUMB4YEa5JTuA5QxdeSFaE2zn1dtaACVGz5wz2wJZT8FNf4d",
  "key38": "4z3E8obczE42tW6QFE8K6zpSEuwaS73Gh9aNxTQUDSFRC7pbWodjUmNM99VDELnH6oETZBFMq2GAXkUB5yrArug3",
  "key39": "2HSQbT6h1PP2k8L2uoekLK1c3EJSD39DhiRmbT6uPJxExMpXfg1kqJSCuB3x5CV55MPRwa4SMCUnNofvrGv4RS5D",
  "key40": "2SP9MqyJdi4eGWEejUUMBPqt5eL95wWgVvxuA8S3BLiTvZULaa4DFJkLLx3sKvsZErawch7rovcLDcDjVP6TMawA",
  "key41": "KLUv6ob26iLbRph4cpuuH7dLJNeL8CuZpvutCbmS1hbiozPrAbsJxU7joo7y248cn1xVjkHahDUnL1yyvH68xAK",
  "key42": "2twZLLzw7v1XyZFXDsjUdmE879nR6rTYPpNFQHw8p97RLtbaQi1kXxHRjFbJFcRwFzv8eDtLkkMVY7TQZna6VwTm",
  "key43": "5jvJdd9m1V3rJmSk29ZiwMCkDupxcwM74ypwyP6qFrMmE4KVyXizCJufWdkgdFKTQw882nHySqRbeUNibj2vaKWn"
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
