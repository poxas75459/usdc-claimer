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
    "2kKyNq3pmaTQVkYtB2xu5fyEeSbrZeZgJdnQLL5qb2yuZnDjDEcFLTAwGTyjXuWtrA6z4z5Uhud98dqGVXScKUgf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47F1MFenm28t1F3WgoNusgDP9xszWtUBbrV59qP5ex5Lz7dNkYupiCEVfRiZTVt3ax6iCYjozFWkFz1ciPGjeYU9",
  "key1": "4W6BueUEhzwTrUkMMkT3SRDcFX4iXz7mZsv84cELYYURK6WCCWBZs7U42wEVmfNESotGoMYCHnC18TcjCRnoVUM4",
  "key2": "3aXnibFAN1LmaywBzy8CPhUigadW55yPMeQCeL2CKm9S26YzP1yN1uMomDs3FW1rqkJTQhJensNfSsjsXoygSdsq",
  "key3": "3GM4WiYbroZM1qkwZnEqiYPpifu6jPSwuwswMggt7xP9VY7uGiKhFppr5GDXcGShsvf86NoGFVJ5co6NFqRh2DUB",
  "key4": "54uSb4xfpNPdEBFHCk8pKYSz1U6VETAnGd25CcpzXQPVy8iGzoBk7ges4an2j5QAWzT7qsiAQUT7QLoWJi6J19gv",
  "key5": "31rv3NuK2r7AebDyi5rzAiX9DS5JNAjoaDVMdqNunmwtMED2jnb8Tbv37G8UCCKpmJ6vsSaT4QQgR53hyPa7g7Y5",
  "key6": "5ZhiEFktwFcoRocyLxdRkbpMaqKbmHUwusLJ5X2VnZT45fY3ETmuHtN4uPaCH417YvzSvZFQko1p8by7ZgGqwfRD",
  "key7": "4ieS6U1SDYoLN7webfYK4v97LD7hzuRuN9PYZ6CZPzJiwVdJ1TzxRszBAxXSf1CYKVpM4izohpYZUDeaZtdNbrkP",
  "key8": "2rQ7hunfi6Ku87pJAWU68HuWMQfw9XaiT2A1nDn6driKtZE9fn7wusq1d7moUj4UtsNiUzyE3LanB5vAfWaCCd9z",
  "key9": "3syeqXUZ9mQWMvoXSmeRJ13JDHHQBi6qx6HUbLHVUxPM6pxpYUffzxGZVRc6CHSNsMrD7NgW7ZziSKWxFgXSwgrN",
  "key10": "2sH4XHWntysiy8hRNEQjq4dRCzafURAmNz33fawBfdiN1EThErELZXkGEgpt19TnNnK9CjWxrCyo96en1aC415nh",
  "key11": "5yKs49MXc7yYWjfckbZAhzcbr8TUjkwuB3xwXfiUL5ckbRiV2RD3C7NzcZtfQ6wWovRciFVhw4K961tkrXoCaFed",
  "key12": "4UFd59m8MeGVcDckGmDG5bbmkgsCk5v9mqRkQETKREuykVyNw5nBLfiD2Z5wFfEWrkmJpWpnyvcyMSEGyg8QAXVF",
  "key13": "2ZhPfwdEkHdXZw6aKLPnw8NRzJaEUnYqoNBDRqdLDBRXjSPTNx8T67z6Y46WBsgn28kKd163ovouAXqiFE7FmRv",
  "key14": "58y6tN5hCdztRNf78wdYmwAETvN1dzjQtpXkudscGjfmBhudmwkDEXSh2HRf7ausFvNiHueS8MaxKzWxhvBq2414",
  "key15": "5AEVhoFEJmPcHVcdMb5jbbMqDKyeH238p8qTo4LG9afKqgvHSY5859NTozQJZAQRULmZSfpNVw89VGp9ADgyx5ys",
  "key16": "2euS3KpshyTVBnJpvvBYsE8MsdbGPFW55pzmn2ChZmkWFNrbyX4hmZngarZpYCecZkMFJt351bApWB5mF5nhSZS7",
  "key17": "4LT7iCjxdu1S3kRRovbWMDGtGeZvDNzikpafmnj4WTBGpFqTgfFhSc7BMnHxdezVNuJQWDEhLuMXrAZpmLiTQdFM",
  "key18": "5LpSzvzT9BLehLxSkrwJ18AkEfgpWvrG1Y5Srd1LKLW9eYhhhj2bhkv2dfnAyd5QJm4eADdP6JwtzaZsMuQi5Y9W",
  "key19": "4pq6C3Vox389JHFThAPTukAaKUBDGZG8oWLtpUw3MWf9kGA8RCduvLULHUNzZf7waHiVvNwPVfYYvRpvpX6DE5pN",
  "key20": "2CmBu81W7DGes8ApapqKDHbJbVUgSb4LPV9VKUbPB6oQhRPq52usjsx7B5p5mrUhZYoNr8TnVvuLK5xWdjk4sqMR",
  "key21": "2d8W2tc9gGxCet9sMXV7gU3mkBHfBGXQpm79Tsa5y5rVEFvnQYKrw8Fq8FJEnUkr7ndG9b741DVJpYyg1Usn9jvZ",
  "key22": "8zdDznUxGSy5jHBY9Bkv2xsFLMhTKJ4QTTGrQENexih7whDrJX2FcL6WxYnwzUSyyUpvVhzZezEBpZgHqJsHS9i",
  "key23": "jzPTDBf5bLGT4WoAowsMxUULVVoxV3Th4mnFmwUDXAzYfYuJPoW8XEQh1LxHGLo1K3VU4NmFny4uP6VASvisrDd",
  "key24": "5MSMGtx4ffT3sk72yRkzBp5khRkd5iEkmSdMWLfmPYyHsfV4WWPGG59p1p2VESk8X8YoyXSiUaaz13deNnPJfLWF",
  "key25": "5U7DN1DLZuhUAo4RpqY4uaH3TqsM46K9ctJfm85Fy49pG8cWjCXRoDCiLgnNnzMUNCTsuM25Tt2MXukz3wNQzocq",
  "key26": "DZQdzxhCDnTKoPs4avH2tzvs3onGzoN7CVztxZxdm67XnJPXwzXbQ1jnCtSxeg7teZoFCxyyXtn98SbV5qur561",
  "key27": "4tjniUsaqBJ7cDyKcZpPzU8Vk6SSZw7qxfLPJ5evDS9dvFL4m3axs5fAJqgxnd3p6rjQAJXbTvgYod4d5tLHzmox",
  "key28": "4sHHRP4MwuJDpvuvDvxhK7n34D9qEzd9E8GHvDbgwaDBB9vV37DhBe3GXPm8se52xVGbvwFPWsyEMB8gKb3zPKg7",
  "key29": "3LHzfH1Aj2tbdzejtSFb8xKjvp8NJLdQzLfiGQw8i9mfwS2YNs1Yf6wmpE7K3b2iq6u6zvAYsjh7hXVSePns8eb8",
  "key30": "4MXcskjHAf8s5MkBmNoVi9xxu7tvG4B9f28mKYrKNmcCmaeqRawsY6kjk2Sm1jo8UVHXHqEjdgxZRHn3GxZob396",
  "key31": "wVswDCVfo7DzJ79EFX3wZCMbvFeUxU4DdXnjGcKCGg29xkxSqXQXtPqCfSmr72zv5NUcVjdAaQMHMtyKGfe4hBZ",
  "key32": "5Jf6fR6GiypzhZGrbtmWUEEfUkifxCR2zVMsMxbTp1UnYfeQgsxiRmSC85pUF2hxCtEbkdmTxLuEyYAFNq6Cemp7",
  "key33": "3HJx81uSmaAzqQjvthn92j9X6zDCaN3fGQwq1SpLH1Qdhhmmw22hNXEp3v7mBUCdyGesNJVSK2JHbkTrvy6GrNN7",
  "key34": "3rh7xzJUtuKCM3DjfZLJfHhXkm2TN3sKDosbK3Q9HfXTzJisMmANPNLMC5XK6zaPsjKXzmCNGsAyASx89ms7tezq"
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
