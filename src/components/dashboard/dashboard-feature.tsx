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
    "2eez7thxz9nNaK18g1uonya2HHZ3WC3jAVBXdwSHpLu9nrGavhvwhH8B17QBJ4aqMRAsoiERU9onuEpvQYCofVAV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SkTLwnkVNdEacGXQ8sJhRcLTEw7BJQoTbusG1Y6KpLxkANpoj4MCk142RZQvrko1WYc3brMqrPZBQZXhqCsxTch",
  "key1": "2as3n3rawBsU7bbftniZwSmVCveBmTdoxMNH7H64VWct3sYvQeeur7EiLpfAguZtd1NcTmWrPwx3LWxUKjUbQ92c",
  "key2": "SVzGZfcq8ELLrQdciAiEWzBV3kVGEmHDRxrq5EfjHcAzXxLxhgaNN4GwyLn7bz5KVXgRwaXZhe1Nh8JrYwuchQR",
  "key3": "2rUGUzpyZu8Bb3TuSrHC7qq8j3Kc9XRkfQ5zLkNG4ikv5ECoYKD2dBDtTFWdYkXYu8uGoW9LUeoFg96Pe6KxFjhJ",
  "key4": "4asSUdeZhU1c5LQABnqCpyeB33vgzvVt3SDdpWouBADmcoehyuN4jsAbUfsCSjUQ21z3FZwcA5FXcoDzsusE5Vrv",
  "key5": "2moDkAeynJAt8euUEjwxGZYfVg8fYQ1YzGpDCpSp34YymSgeWhTbrVTtfFmpiwxwyYjmq1HHDtrAsCqptN7ZB23E",
  "key6": "H4ck7h1DzvRVmZtEoVFdkuUx9MoRHwnbDf8zjAMhBFi7UqJEW9UMdB4HuL7zhrJAER2KC2g9FcpvLUvQ9XgLErb",
  "key7": "4dnGn3yV6JxuiRmsPwgHPh1QnGsRsvGCggv6JdW5weaEa9CeVJAZu5k5pcgUQogkia1UraUocQPNynuS16SdxMAc",
  "key8": "CpA3k8igeAwYyQ9L44r8EfJz3vErgzegPub3XZHjLe5ab1yLdeRgPwVwYhREEb8TygZWP6VRrMT7jgzoFgD9cpQ",
  "key9": "Sf9ar4w9FLBbJMWeqvt1YFAzinFvo83794fxbJ6Bq9MLWUNx7hrjvLfjwZZAoZcu7AjxjeSxCJK7kRbYcbwZZsR",
  "key10": "uDGPo8FiM1t2MVsjE8dVNByzCZW9zn6cnyg7AX2cJLC1osmPhWWfpAdzyYSAV3uoLQvpChbAYrZHfJSrzpHTzbU",
  "key11": "2Ama4EdPTdJGDmw11JoEnCEoeDs8XSG225FCe3igsZRKZQkqQaPTQS1YQhEChhtdycZ4vXZqk1tYb4LLTDg4JcUj",
  "key12": "Uvm2LZZqQ52na7UNWEECatx4Adyne8Um2NvmxLw1AQhvRhs9NgqfTjJMqHVDwCe3AromFaeE8E8LJf9H7e6tjsv",
  "key13": "5Y9Am9e8aLvNmKpdF3P72cTkZ7tYyyU87bEPSoUMF54SRF5WF7P53tM9Ajn7ECu3PRUTCeYgjhGg7ck6GqMDqvzU",
  "key14": "4paqLfki9d4JaxryKmTXY2h9opeM84RhWyY7qNpfu5mwuWMUQxKAwyRJJBb1JowrgmUdVWTZ32T1HBg3Jw2PPaxH",
  "key15": "2BPQZSi1G8v9WM3TyVKFRZ7rWR4mDwHEsBw29EDjBgxdxyCqWpzoRN7AnsAQFe3CkyyXbCgssm6ugxsFSqR8UbKM",
  "key16": "2eFQeiGufFJVqtrNxZyCaGoZMTvWtgYubbam4asuTYTCWyCCXiSKvjHaanNtD6qc9c9LWdvghb1Ljr6xdgyMgc8C",
  "key17": "2H87KH5yrVxwRNyA97mRqi6youpoYWCQsW252WX4UVZWuqtiKrM7XyHhVkLkdjJHJijaN3mByo2KXtSJMb3e178E",
  "key18": "35soLRuJFhJTLMHZWXzeAB3VZwD9YxzVJqgmBGpAjpqyaSmZXnmSDAuizguQKfC5KWeCuavWRmZq6EDr9UyA5iBE",
  "key19": "CqN33LhYk8aoaQtsaB7AFbC7GbwthPLvg86Q1ewvUexuTo6VS1KMABTLLCWXFcuYP3afE8B9nRg8CXTY7Lxctpx",
  "key20": "4DTz7TZmipBHFGdv8KmnV9uecpCTvErPGYVJEkDkoJRnprMB2m68UNqjYSXGsQorCJTF1EbTL7i1TsHJST6SMjUT",
  "key21": "3Dz9xqpsFqpR7aPgi2bcn3iHFfpJKeCZyUkTs6X9m11VL1bUT2UBTXDV286tpwvk4QszwbspXuqfKDGZX4c8jZEn",
  "key22": "4rQtXhESMzdSeqsG4FTB67EQ5KxBK5k57JdsudXCFMbVaMcDrYTTh7xMwLmmwHUgmpyJG53yHT7vKukhMNVYrGkh",
  "key23": "31EukEtGCaovFYL9fEj4Y3feR7meKZeQcgYT6WewdAZaqKY2KTFGcisaLFBCPYmou6ynW4SjeE63VXVdYiNv5gpr",
  "key24": "5H5JK46JDe2VzpvNjDuDzMFjf9Wyj9ttWP5q32AfJQ41Wg73j7bKvZ817E9pxDMtfKHZnB53rytQYH6gWJfPw26h",
  "key25": "5qJdX3fG8ae1W7bTS1dvqQQntR9wiqTY8segRFnsG78CmtZwB4wNjcWitFHjgan67kPhMY8CKHnKmKDXSFfiy3ct",
  "key26": "5yiQm8h4xQbEY5gfDTra5v7fHGRkpToLxTBwWX2bRF8BrV6F5c3mmYKdiFmrwuB2j2D76KEYcV2tz9eBw8nFwYbM",
  "key27": "4k2fD6cFabzv6DggR7xKT7HQtuHnZzhE6FzZw7zv8xcXCybqvFHboKP2kyMsivznK5MYnPDoFKx5D5N1reP4S23L",
  "key28": "2f5AVZwTJ9fsFUKqCyYBYKJPmVA7zXiPRZSEtZSzR2HSzrCSrPv1gPn2GgmvxHqkzgfbjGq7B571tVaXvoDoL1Tm",
  "key29": "5QBfecUq4sHJUaSEAo3SQajeZi7VfQAbQaspJ1z7vk9QvPFCgTJ9ZoyhXcoaQ2R1ZHuQFTsRC37rtD4fp154jEaM",
  "key30": "46eBaA5rXDdmkAy4qu26gVaahjoMD2Yzt5RuxdVuv7EzLGFCQZQUKo5MTH333mZS9y1Q41x2dzmZuVinJPBmhdpm",
  "key31": "269jvndQQFa1cVw7vjcd4RpmXUQH64SBx3npoReuMWERqLgJ6d7U21Zj8M7bra2LZWPKXbne3jv7L4xMxh8uKXmm",
  "key32": "2ZkfXsWVxxbih8hQ8VFLyWfEbsZ7Zy7taubNN2A11h4K1pBRoypwAcZ5m31SmpeB4sUWsviD2bV4SovEDqKzZAKa",
  "key33": "47L42WzhWcd6kAPh5u5u1S3td59KNrkFhoQGtyqvtme2o67ezf6hemLXgnNbZbHFBcPXu5z4ymA4Cuw8AeQyp2Z",
  "key34": "2qHzb5Tqb9qAhTtREeUdoxhp6DcHwdmATThSoq63sdZjSCuqNQ1biYwAQn2soZUg4JpZtgjMisJmoNpz8rpnKbhK",
  "key35": "5tq5ojPzARMg7bKhSaRpPM8WM52cfCW23nZ4nU8H6bGSfM9DsZ7gWqo2G8FfBtEfgoSMzzXqVQzPFMDGuz6vh7tZ",
  "key36": "5tsfD3DVKmQgynYrd6iVy6Y3NixTF2CG8knd6JtDnjgNQzQxJTcUQeMBUYGANhJDimJgMZwYnCyM8YDFQZjcwseX",
  "key37": "2UrefigVpzdJbfGMkVgjgbzPavGMXgsnfs47NHLpV2AnLTrTwjdtKbvzaf9BsGVLuvLC13zV4AwdMErVSoTjrhVo",
  "key38": "5zKoUioNmFfWhQczm4UjyPSWwnmQGSjL1bvqtAx1VQ2a4sCsE9LJdkDPuG37ivvPSmUeouKuMWgc3wtAZrrd19Pm",
  "key39": "5t4TjPdrMk7K25tVr5bcd5GJ4DR3kMVKML27gwM8tKYDYW4fBULKZutfCPV2XeMuCz8RPAmbL18gDBFneGVG6gek",
  "key40": "635StFAWdo8ERh5a9BgtfWGpErR9sMvL8vyEWtx8SRsGycXRA3J2DpGoWmiA7GN99FEsukftoqrptWhLxPm6NmEJ",
  "key41": "4YDbzR2prwmAjwSXwzunW6Y8fPM2KU774Wp716Bcbpew3vMghsNDsPmVroP4BuS67GwnqdqXApG5XuieFqBwGVoz",
  "key42": "gmHEn4Wrd9USmhAwQDAtGTo8Libqj5s9zyQxeoFaZo4SkVbewLHJ2bY4Byx72inx2ZSNyWKLMRrdtstH22yTy7z",
  "key43": "4ZMvrr2Pt1X3pLmoez8Tz837mLGSVDUGrYr9Tv4Zag5YMdUWtFckMdGuNavdbPk2cKkAuGYcYrPH1s8jRCuSe3aY",
  "key44": "3ByWfyZxkL4g9Rhxgwija2XvtmGKZnF6gr4Rb7GbtbYNiHTd9WdGesyRQn8s8eVFbdWMf3o3fZa2iWtmAjCSb36b",
  "key45": "v9PGGfiTJQ1JqX1bs44sbbR6m1YaH7c2hacbQZxni3EjRSZvS1naWFaQSMnHnz2AwX17xnZGeKGLi5T793fN7Uq",
  "key46": "5UocprZJzTzv2JCnvrnVgZDCT8hcWrcCXFLEAU5vbJArs9C5SuiAcaJbUoSBhf5qavh1HxWYBaxGYWRooRETVMwW",
  "key47": "3MMVTFs6GYHAMsEAgVgpUJSFv41BUj5rW7AwofFCS1HfCQEdvVLjTMu3owSmNmZLn6DdbW7gbQHD4o3RgmUfkUFp"
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
