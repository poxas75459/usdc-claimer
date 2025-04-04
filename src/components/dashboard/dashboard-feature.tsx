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
    "gZYHB8d5qLA9mEMGpA1TSndyYuuvxg2jJPjuC16w3vDC4bNgRki9eVYYJaBq9QCnv7cSd4Wboq1GGsLuCrmbDs5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pUXj6jyKREYZS9VeZzGxP6dnCgt7GpApR8K3k9Dwd2MLALzzBKHrCny6udrhEgQUPMysGxuYR5BU7YkHMF4R1U8",
  "key1": "46duqdTq287HAjjy5ENB9pPiWHnkSjwLipN9ogWDC4WjTDZXFq9gdJ59dHfmtjABsZiunxB4i5dZZ1dpLMHHTBWr",
  "key2": "5Z9VVWrqkw5TcEE3P9mP4EBkeNuskfSeghW1Jo4q3n5FdzCQyf1NRCP6LsHaicRjGCVwUrPaedsnSqaCEvGTfqS3",
  "key3": "4JrHV1fZk4LYUNtv6GG3DaEZx5wZNaxDWEU5f8eUY2wyWxjoT4xudPFYG8C1DRbbHST1d7FuYxQ36Wh2tuBib7P8",
  "key4": "44h2j5nHriKpApvnxxsXU1LkRWvvQEjyLFEnsAeXEwvCMDKB2bBWCpi2dcqeDq3NPSFdTewpAv5DSLLLwXAkw3n8",
  "key5": "3MnZ2j2PWK5dtWMKqP4sdmbs7msLo51qkzXVkUbQgZY63fP2bReTm3dmsER8y81efqgWgy4EGMswMrCiWhfpt6ni",
  "key6": "3WdtpX5xF7GUDkafRePHaL3DaT1VmoHedNXCAdvMrBq3Uh1SHr2hqyRJp61MgVm4ks5yGr3Uh9fb8HuDW8NZVSHT",
  "key7": "2NQBTADYNXHN83LGHqhxbjxF1qMHRu6yTFWYQNhxJJzTEAZSUEGGCKoUGCXxyreRpxXnBCdJgeukbjKsjmf4MfbW",
  "key8": "2LaHBBmrxajpR5MFwU4Vma6trhZ5eRE4fR7yiwbH4z7G61sV5nSa5SrAGnQJpLP48Wri9jVpiGCheLRv1gameuLs",
  "key9": "3QXrSwZRL4CFavMTbq1hChxDSMJxuyo5MELPV8vqEpnRNNCVXdUNPyWQMPTwGV6j4ZfH45P2ziFCDQkXGgbssuK3",
  "key10": "61wwMc4A8KEfjU9ANmTQXBUVM5myC4TYuzg7JPcGAjroXoFAtQYhE1hKzatzLo79pFoXr4N761AHdYyJQbyMCkcL",
  "key11": "2KH2S9GxYx9Aax1veRy88nnznRK2Asy7zsifxBYGZVcKdoCrcK8zEFgZgm4Gy1bxqh527B4TAuVkoUw5yHT7Uuyb",
  "key12": "3tJf6oxRPdG2mjfKfrH1aLJyHJZVP8djmTaxKzV8mBMM6XKQa7M2jjH4y4MKajp6VT7WhzoCFdqNd9S8SR8kBgEQ",
  "key13": "4ZSqU1VGSRHkrG49S4oibZVW65VbbFQUfHGWYSADANoHDWt15gRTwfTcrPUt1JYmdVrkXiheNJGZLAQo8zPmTC2F",
  "key14": "2LAc1adLadBb17Ge66S4Jpydnh4auMdRbgiXKzX21EfUX2Y7TWo7BM7xGSJhRcvTqiXq5rsbpHg2p98SXF5q4Sm4",
  "key15": "5SsfLJjosQ4Yq7y43yEkUyVYkwCEkvKtUNbm2JWPJwwScLL2P3jpx5gf6emvA2mXTRJhkwFQpTCsGLGmzuJ45iqu",
  "key16": "3ixCnu62bq55SipgPeHtyQcQbYnSbsvhSY8mhLF4sos6AxMdYwRiyMCmnzmJzYtU9E3k4PEYnBMCJ8qD9rWX3scg",
  "key17": "2HioB3FJECRMn7G4DZG6JETPjBaS1EMeTQtEZhARbqJ9r82J375wHVkBAp3vwF6pt3MMc3U1vG7eYAoDMBNMPsMG",
  "key18": "2udBhJzEMmbL2ucPuL9p7XgKEqavkUBNoKT6eaaaGMeqxm4R3MPe1pJWf3jBYkiyqT9PdSqBAnH82KVVKHCryj36",
  "key19": "2XCp2TJjoEj9wDuFUZgw6yrHau2rgcPraNTEnytG83wBq3QUP8dg9J1NJ9as4aDFzibmrhJHfSReA7U7fNJX4gEs",
  "key20": "3t4LEy4fhAE1xNfJAa9BkcWcYgGyKjGMYRH1iQgoQSCZmNe5smZ2pCD7UTRM4oVBbns8rVtRBC8op5be57VMAXG",
  "key21": "4Y5zvzjoHf7HrQVink4yWwKXbdmaFx6ZhokpoGYdTA8Yvy1Z1tRaZsTGVNNPNbAkHkbKJRWNuVuQTCa39cPTDFG9",
  "key22": "366oYD86v3akTPSNRZEYA8uRNxfcdy27sr8xUKFs5jzDBHjMpsTNYFGJjrJjBikpdTxMUjbpJ1WjMiovEgs7b3v8",
  "key23": "5fD71dyxrBEycmvgySudqC6ruSRBHCoMSE7KSLSjitJRDQdfM4bvVe2rdgxLZdAxRhyn2Auvxuy6XjcBdKFpUNsf",
  "key24": "2uh85ggHvH63k3BfPPC3ZAo6i2K11hJLi52S9Es7QZ8fzoYbtyYAfbXdAnrneAvfTERJf7d4x2SVyZvykL3fdTSn",
  "key25": "54ttc1e9cpNbVhz9ZCenLaALSqWjYQxZRfg76fLZqvqyKikCeqMBkMhkEVmXnbfWFHF5w7mo73mYEzLemgyqsCoo",
  "key26": "5ptsnLCxCrocAPpj5UwtR7fRPJt6eRNXK1DjRFUh71HwmhjX8gswq2Q3dniekimukdXoXVhtfdxQTyHwUWDCpVHn",
  "key27": "2gaEfQjAW4fvsspm28NKKtuWDRtkMi5oecwjt8AqsbGE9MnFULq1Aktz68xZGo97HQFGb6dxzm2uyWtbHi67EoGV",
  "key28": "9oRi3UcKUMQtAE5vZLeMnqc7BcZgDF4rdPz51kLcrsGo5iSPEjeGDreEMQEXUrsGDgfLTN5V4E9RUvhg5mSzDuJ",
  "key29": "2TQLgcnPMamr8yhy1Dth3afSgscfdrwBaBiik8pT4X7tmxESLkzeDk8b2Y99EqRiCLUv12YkFwGP7YNicfBVD47j",
  "key30": "3kpVCpQT7yE4MqqPuynLTwG2fCSsaACZHprExSiYj1HAKhPqvtekRMNQ4wsu7wgaHkBsENsgCf7bscYYN4nqA7tB",
  "key31": "5pRdNYTjywTc3dEAuLNUKLZ8woRSte4x7SVWoQ5np9AuM2PXS2Ev7KTj6Wio8guZ3mkbAz7wRW6jd9sJiC1Nm1La",
  "key32": "2V9mWnSbKdTDiGu8QAcQNxrESvxvn6tK7EadKDznTiGbrLHQF7iyTVYGE7SP6SQSgpM5Tzt9CPs1FPuFKwFuKRo4",
  "key33": "2BbRGhDBe1jybDXnWpC7iNLnkWtqiDK68SeDvttxAUkrBwZ7NK93Cq9GgYToRRY2xWFU6mUWa2qs4sAAv9kaoA3E",
  "key34": "3pmepnGGpsW9u9QmbY7p4cArXkBEzk3N4H25pUFS5YpTxgUsisd5pEQCHZfimQAKcC5D7XciLQLE62JnNEDsN3Ri",
  "key35": "2rVGxAo4pMN5225XLaZPo9ZmzzQ6B57qNfhZAZh195VcV6XZLCAwSVUX1FvVa4ekajUUxjG5GP96tD5vc6BUeVwQ",
  "key36": "643bB1jAcapP6Q9vXvMS9vDCUwC3CjQSQvpiCiRMGuwoimTEh6dYUetGfMdeSXsunBitdFDxuaCKWXQN7yx2RnLy",
  "key37": "RpTh7BkG89wwjFRyCJ55p3bU8XnfAKaXVkVV35iZdUCCN9ULJuo5R1EXiYwxR9fvsrB7kfUu9HDJuk1m6vaLftQ",
  "key38": "44ETsGn5mt8iQQ5x3b5B2QdisY6CAuh6auJEWM2f5sh1UZX1kJVGv3noWnTdYPFi2Ew9JwxtHKDtoP1PoXsUJNSH",
  "key39": "N8gJmP4hseMyWa8pY1cLp7vqL5y6S1zk9mH6pXLsowxyViAR4RNVrY6vyRrxCi17CbPpDCW5AumyzBUgt5Jvvfi",
  "key40": "66Wj9X9hvHMaPGdZpZh3g7HVKwQEZUqSfS2BH1Wdzz6VU4gauLKRSsUme6xbtn7wTJujgLYdf21qFdbcRX2inwuC",
  "key41": "zaheYsyaLcvdDok9HWhsz25NhFz6bWnDpDLvFhpxjCveurXfasvL9MVVyzW9VgtF347KeoDHm2jEmUmpQ8WkqhD",
  "key42": "3iNnQZ1aPBewUkCkYZDiHurV6bbg8DpJ3aDw7kHEjPbgeQ7mUnwsJbphpnA5VKd4xZhBZaGuASmg8FVqtBcDNjyr",
  "key43": "5b4T5jW1jK9q7hEyKAP4tvpsW8hHVRaZagcrYGaDvnUvdozZdSC1AHydeWqCrP19AqZx1C5XisvkGVvELP5c9ZuY",
  "key44": "5oqwgf854G8toNe73mQJ88xJdNtTpvzi7kvyPhnHQxH1tFj67GGbJc1eD3HbL4ysNmqcD7o2bkoo3y3kfpsinJqv"
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
