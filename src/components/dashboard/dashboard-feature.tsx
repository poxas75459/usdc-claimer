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
    "5Jkgsud22m5s3G4wgfKWv7bBZeqxhCcNxEhxeMiV8j9ZzuDuhXSZ8mQ9tY27kWSQN7AsEjVcttS7thG9YtdqoLse"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VS3q2ezWPCaExBfFPS4upyBCSykkKwZd22Q8xFup18QxitsgLp5paRxJccw2pCR13fc25CUzQKAKktL2wEje9B3",
  "key1": "2aZEZguyNxj1SKKqLvHGUxBbCGTxVBsRCq4LgXfb9NGYYzhnz7yZ87gkuU3wsgfNeQ5ejvj6zj2yhENBnft1cjHD",
  "key2": "3zkGvsT2vte2jZxU6L8SQgKRfnjZ4aE1avdguGiZ7xu7NcSonVwf1nqzp6FujfR32x2Tv2SaymBWSbzN8dHGUZ3Q",
  "key3": "24RrY4UtaXGRhAk7YaReyse6ztVCxsJ63VLJQErLpFMuSjBTzMmwGQW7D357fyS7mf1TqJWnpUX11CxQPwAEUzQ3",
  "key4": "37D9XrnPZS5uTudZtJ2e8PJnSq4jEFHwyS5FBS2DbNs1K4YWLdYrYd8pEAWgyAC6vuyVPmNBV2uyLm8SZgQRH2q5",
  "key5": "2Bn8b52N24AZJYuDBY1N2Be1ifRm6xkXifTexv5aqxYwez5GqcrikPpqLwros6MmCA7nSyK453LgzTZASfsf9RGr",
  "key6": "5gVD9ALNdT4dBam7itfdvnHtoiEbA8nKDpxyi4A8hY6wmfVpwAMGMcbVxdz5ZDnEJWK4fBET13Ey2C5thRngHF54",
  "key7": "5X9eJELbjXHxkk2HH4WHkFaExuHfVtVscJj9c1UvM1q8rXVvPXSUgVRkr9g9x4NA95xXxmPt21DbGpycYNqaTSeN",
  "key8": "2XGRURxxsMZEphn7jGEbSQc3YW1VVaLnmxJzdwW16iNzcvyz2RyQD9ARhEBwP9FAmiER9VsMpiN1zUw87SMgYwZx",
  "key9": "5u4UnaWzZeszQDgy6UmbKuK61cHeFv62YaD7oNTEqSbHez1h4HVs9LLAvawbaQEHJGLxHBbjKyaYWKcMWudtnvEq",
  "key10": "24pSc2W8LL6eDciVko3sTTUTZUpRYadGr3qpKYv3zWTkxDqeP6Wijduu9VA75dEbaEoDcGWETdjFL2HUsvenanCv",
  "key11": "2BvVhmS5RGfdvQB2Fx3PX8mcebiddCjm67C6gHp6YfnFYN1h9TgdYM4ePPThviQzTpwDK2NVSPtRZVr4JrcVFfCb",
  "key12": "aRbAfH4L8w5qdmpMya5gYXjoBwWmHNTaZ2qwkS1m6WdJmSJNbVF8PMscfnPxRGBfNNxJRYJajfRHEUXnu6iixjY",
  "key13": "3DwPYA4KRELLUMo6ZQkwhydbiLH1nj2mEUrjKPQaJJVYbJSKMKCZudKd3AmQRLJLyEdP3Y2bVoYNWYTpnQVqC2ZX",
  "key14": "3tB9dQNaaQeyxyCVEKvzMHPWknjrby212cYx1D1RLzCekLZTFHRB4T8ZYjJnjizYG2B15aCHKNVY6Ud8AxC3SWRu",
  "key15": "4YhspCTBxVGRkkG7LHw4L1eetX7wixvLifMeN4Yt6TKQyhnoLkCCBwVt8oB9LMQ6GtaAdFXmepTVCCYXDa1K883W",
  "key16": "4hxJWBcDym5tmco6637pPckXJpVCrYkB1ZeEaMgqB1PiM8odYKuhHmGEgh4xLVzgrCBC6j6X8rpdixC7bZKJMSP4",
  "key17": "51CoyR3Z6ChmZpxZJdJcgxPwhppJnF584SWjt26nQR7PmkcJ2TgAZztBfRevuZhyiCZ6CEDhvzvQReQHNFZGj5Ng",
  "key18": "4DUmrA4cjWZq7eZ9VfbHvUvMri9GtrCCAtk78XSkUies6nXCsDXiaVnku5y4zDsayKCK3pWCEJkLGcCwiJaJjAf8",
  "key19": "3y7eS1JYmVHTG1ozjntDiKJ2mGzaHV2pL7NYHaffchBzQ4B7bF2sNmtnTesE5R23ptbGaUWFYbaKF3kEXg2asbJw",
  "key20": "5a5ModZoptPU2VQM81yCZG7uNH7ErNANmiHAM19zSHQSGBot675P68Z3tpQgw8GUCcAJgCwGwKDR31Qx8BmYJS8q",
  "key21": "xHdXPwxSHPJRVQBT6xvt4nZ3CENbdzj2BoA7skGpXgMijvVtrv1wKwdSyMMCUbMAwBpP7BP22JFgGdn8yAARmT7",
  "key22": "42ZLgNpFYNtfT4HzgUzkVbeZBGzBhfRERtgwm2rpTsCG7CMTy7ToTTL1ncUCoSDYYEaJkWPnMDZTRQTJkekQM448",
  "key23": "4EctVG7JTTtPwkBEJpGpTZwCHNtPTeosyrytTKTRZ9Gytmdz2rezDxwHnAjeBLzAhr2v4mtAjudieHBhi8APKB94",
  "key24": "4oSRziEsgovQj6FFujmNPXcpvcAKLNLzhCx7Hd6gZEGp5Bk3v1Q3wAfrfWMn6Qwsf7uQSJHnBwjBqYP8dAo4R7nP",
  "key25": "5btHP8pVmyaunEJGfUErR6VikNAMfBit6cS6Qe6djjktsDSmN9jryoMWcn5SBryEWWZCvqVitVG2NE5P8turg15i",
  "key26": "x9fQpt7wcMgdAEVASorpHsJ7eq183ZE9XuBN3SUEYJSxQAgvuMwhKu1iR8zvpXHycPCqdyBFEvwajpE28ZsdHC5",
  "key27": "39GVHZ66Y9xuCTcXmyBN4dDtduTmuSCtXd5bJgDYguXQgG9x4AwgRrUxMNzszUJwAJXRebi8Bkv5ZJzQzMkVW4WX",
  "key28": "5aGWQCnHf9QDuU6cVkm42rc3F6pT7TjFPwDmwdJriQK8FAfdLzANewYFUgXPychpLFJWFhpLnpV8TB7ujaLVHYKE",
  "key29": "4yhibX1gygwqWSeB2zYNiLGoxoNNkhdE5vU1GtfDvVkeJskLA7RVLeMDqYmPg4Nkmwdc2i9ChXtfd3FDdg8od3zs",
  "key30": "2tNqGXhqmRPr5TY1z1rCLgGtZZcC74uo1VTsrRcVpkcwWnrzpEbwDUJ9omFvy7V7Vsnf1sWLLGSToYNj8ibkUqJd",
  "key31": "LKtKbbU92vPUNg6hEASEtUiTZtpsk9AgAAY3avqpzFTJKAUUsF4rCpjyBy4m4nxngtu4EtP1yL2KnvVsSL8jPpw",
  "key32": "3RNVpc4xdRkwRgPJwvJHXGoknSsZ42oEUQJ7qP5SVNsgmGVTxkxTs6CXPH3Z3k1WJDi51aXasVTqDikJ4kHdRpXs",
  "key33": "2Ycwj5E8kJkVd2MJ85QT1pn8gpTohkLmN9XctLpXmCmnYpWfPFG4anS9cMgzLSWqoNjwfiKcK6MrrELBiTwbdapG",
  "key34": "5AaMraD9WVuqNGN2XQEZhU1o3D2XKX32HAZkW5zJN8k3Aa9e5RJ9xNmpAjjRkEXxWu2Cx5oQ7Kjy9jAUYHHpJbUv",
  "key35": "2ZeGKMr7m2dKLG3k1z4vLJukVZdYmjiUDcFPGafdt5VoR9wu4A6suYfyCVBj5MhCKJmAebLFndeDBRDByZf7kUqX",
  "key36": "tBETXYmNEdPMeJLYKqQZkX1H6mUKfnSCd6udrSdqMYGLPXUtWsX4WRSE1MuQ7VHcsWa5WBZ1HiVSRNvhBmoo3Qc",
  "key37": "385FST2w1RafrARG3Zij3SK7s8hfUpyZRffwJooNmeNAfB1peUScaBWS9iUaij4daTqYkD4M5GAqe9mDXnX9fVeR",
  "key38": "4VNw1vigmofhNExzjCZwBx4Rog63kXfR4kTxAmwDtgwXvqQWnWZW9vvBgSbYCWNFdXE3gguq2pgpp3fkRcKjc8zs",
  "key39": "4BDkG6ppAf8Rx31msTAsaBYjmmhjYLdaC5hmy1D4PfedpQhT8rJCe2mYrNF9VmJNVNmQsNkwzGYTrAeZnMgxhj3S"
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
