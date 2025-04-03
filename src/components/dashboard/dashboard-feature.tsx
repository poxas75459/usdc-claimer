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
    "58hHTSBdEhNBEXShBux542eeJ61EnyMUFmL3ZtvDpi2Kgbgh9i5EWSNRh2aDTnf72xxS5mfbT4TWS7FDeVKxgbun"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BKodyLU97mQzXF9GpnF8vF78mXmt9kRBTaZuhTR5S2rmD92G1NtyHE2jnsL7vwH911S3aWeSDqqh7PJn3niuTwD",
  "key1": "36afDuJgoHEBQNHfBNs2R5K84vSo3hgsNJf45fgiBHNUvJvTi9t1AaeyfpZ18j5hrihCFS2J4m3P4PjaxXspKCFM",
  "key2": "4NpjDEBKGQFfjqpfwhYKdTe8jFzv7434edse18Q3fZgt78osKA7gXKAw7LLArauV7pzSrVcYnd3umaLQuSNRCKZk",
  "key3": "5LCEGzDrPRYr8sLAiaG3U4VtcJf5eUnhb1qqbzVWKzkwYeHEhUjRquCWvaLrTBH6oZmN1Z4Jpr8nBZmRd8ANLgnz",
  "key4": "3B1959rDRvf57jQaLmFuyapZ6UhxTDMH9g5xgfsCAE7sL2Adb4a2GJD4P3fWp5dMgaPJEyKVFadHi945TbLqPfuz",
  "key5": "3YdoSzseKr5qtHrCrJW9fNhTn8vjnsReVLV2Z35n1pVdzUofSZavaaqu9vPwSYj3JvkrvAZcAgTLzRgaaxFqdH1g",
  "key6": "39xVevfakq3VPpAQcNaV8tpzXZxfaapvmVdVT8xCKvVq5hmWyma7x6uCnCcAzMjo4zNu2DMmcxDsTJTwiJr774h5",
  "key7": "22DeSpUxrKVZbPiVysdoZC1Mdvgfipwi1aq9Wrcdx2wbFTWMHfdTnz58NURPZWTovwFeyVmzszVcV6Z3yrhBD6fj",
  "key8": "3srEGATzLPK8Fch2PqfQc8sWmk4fQyEmrPZ4cWeNsVdzHw6LkxB7k7dNHJ9CrQsDa5m1RMcG1TeLXEePnWHTToaC",
  "key9": "3Qzrxu8LLw5CVTURdXTxrNLvm4axuzsgXPDht3zhxeZgPwbUjuKw8og9He6PovQhGCfjmhgmqhn6tysnRwGn6dGY",
  "key10": "4je3AKtWpm9ArHWX4DBDT7ha14ti4opVKqp1LZAzrCHyorszt3Gt6HSs8Lj7GwNLuzho55DPa9hxoKhJPJMNDq6K",
  "key11": "2LhSs3rFhAvcwZVdrDtWeENLSZo2amqQVUPcc9qGR39fd6qkjgqgsV8fmDcbRjMoo7D2CJ4AnwSib4W68CZmc1Vv",
  "key12": "48RPei8YRRpKXo96wvCuCfCUBLLQYqWbuM3nnHq9Lvn7WPZzggkQJJHtTKEUbZ2KhMw9hkR77PSwpgUhAGjZRWVd",
  "key13": "4RHw74FsY6x1vm8qwUyPjBxrRG3rdKthgShXYt1RAH9CUL1iTfQBg1x5Mx2PSa75CLQeHPmaWZo9tKGS64Tch4QN",
  "key14": "5JoS7VwsNJAgjBLQTeUA9M3xVbnA8tbXVzwzHDEQ9wXWmGZqNrXaWt8EdwzzXPz9eTkinRMPDkdeS3zSYGTPpxj9",
  "key15": "3cdvXT4KR4pZHeawGpsodGUyW52kdLSYm8hnViPuwnES4g6wYdSZtXpdXTCvZD1BRH3XBGZLcr5tu1JjJeDss55P",
  "key16": "3suodZ2vid9o6TL2DGVdv8LaXBPrAsCvuxm9bcUkyC8fRPvsQZH5RdsiJxmQEUweUMHq3EvfTpdBrPHxTCjkRH6C",
  "key17": "51mZZtSDFCaBCHQgzE5qGrSZeNzR9BRK8CJKW3PgTyKXzeev1NGrFuuZ8X9gFjeZPCHkAQ9HNTJTXx7BHrsP3uUQ",
  "key18": "2PXdQFAeL9WM3snSZ8qFU444KPTmgf2rUauzo6ja3UKh1toTbnfktxJGLFuAJt6ibLPoUyQoF4v3aSV9Gz8Tcayh",
  "key19": "57GsFGuWPCHxyiJ2wbHqiJ9yLG8BxuEKh8yU56Aky9VL2vVMmqTNiASzJgGbsAkg3oh6osFxXwZ6xzrWx8xK5Tth",
  "key20": "3HjBGUV6hQ4wcmoBg92jVrqWjpMUFx6JoTZL738MK15GuRufAKUUDdAN8X29YCop1LGhyUM8QASWwZWttuHqEUX9",
  "key21": "5t3Gzg8yQ8NhzAsMmq63EXN4Udcie7sK8qnz2goKtNP1Xktdv5FaD1nA8bXupr1HDFwQcz6MBKmisdubq1PFXNg6",
  "key22": "2HrMbxTWNfbcngeMyyMW4JHBhHDjnGjndwGVTRUP2DhvNZssiw9ACRJibNQrzWmRNt2GpKHXL4tnm8FQQYuSWAFj",
  "key23": "4QX1qfa3gPuNeS1UZCg3CjTvxn3EcEB5ndk7TxrU7xW4u28uCCv6JEcSteH6gcC1LBxFQQLaPuj6pTfLerwVDUt2",
  "key24": "2exA5VnCTXCCuinTdWrEuwGJkALEnj1xoUkX4GouBcijHYZZjESLFDJhbXtMPdU8gs1S44HFMifGeiGbsVQ44HLH",
  "key25": "33P3DggjGjhhdsFmQEGegVnb5Vz5xAAHKs6o2xXmxBsj2oVm98kPiRXXgsRaFkxMi6dK62mzqnggkok4t17rsKq6",
  "key26": "5yrxUcMWXuyHHK6Roy9F8sjT7mGcSqXr8RXQBoKxVe5SbbPmLrUnFHXRxTvZndaVLKH3RK6zMaaccx7MbCAjpAn1",
  "key27": "3XmtsFkp7aTxYs2dSFyubuV2p5s7LFxrVZEaM83XdgbZ25poY9UrWv9qUWPVjFqFJQkyUapMGQRxZzEvdj4L9YMh",
  "key28": "2PAsdpZMNnZAPz5XCvEaz2P1wNuPFySwW1f8yj6Rn3KsUsXrdqqz9Ysko7tVeVdZ82c4tJ9eh7T3aL6nf5zcjmae",
  "key29": "635YHRAxurCE8g2tzHC7eEhd8iLvNUhBmgHWYM7craNzbyg2zm4NSMb9GM176tT84opSoeH8H1vuVUfiZbrw6Ppx",
  "key30": "2docMpYLrKuChKSQteWBFAA6yJW29hWardVXKmLsqGFRZxaDrZdKeWVeD1gonggw3o7kmcxSYPf5oqD7yd78BXEA",
  "key31": "4tnEL3VTxhKsazHm28h6jpALFDWLgPPYsvqCKC4sdxwwtG93vHrJxxUHyK5kabM7UMSfGS4TDZ4fu7SMnfiN2FuQ",
  "key32": "2sM5vgYqZev4PSLWkE2A2fm9JS5mZtXrScX4z8hz4cowMkNC2LSTkKPFq9kpgNhgBg96CUeipNRQCdwUHR3hgQZy",
  "key33": "2xau8nrmSqhhnJSjMgzt4vLxKChTAJUhRwMVFWdf3XYNy1ve5VgQdUe6aVfkPiKgaT64BJaxNipik6X1Hzooso4f",
  "key34": "43zze2kgQe3rvudhQMxjY5ap5pCtDC1nKUC5coyaqAHkxKoVGHRxP14L6KCGuHeiqeAVwv9B6dysVftdAMZLPaB5",
  "key35": "bpmDsx4NjEUAR2xMvaHGbSScibAifaywAdEtrT3DoSuuqwbugLZQ6R5aqJ88Ph1TiULr4BUF7nLyUcZZ1AUv893",
  "key36": "9tUfVu4a8yoxZzEqrU5Fg1b3siELioPqpEHsJuw6u4rhcT6QJGDZNMZffyKzGXtLp3yfimhuz2Q8pzq1jMuTJas",
  "key37": "o9mu9YC5YAypKDAUBBsgzX3WmisGh9Neacat1q4nLZSRSGT1pZCVJdn6ivcNoMB21n2FP2ca89RP3gdZ8KkyDLb"
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
