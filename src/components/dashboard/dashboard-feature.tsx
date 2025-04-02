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
    "TSuWyRAwTgzboLqLbfWLUhDJheqrwBF73KkWLmrTkSYC1qbXfGWaqkU3FQSeQDni3pEtE2KHDEQSdVVMCyHrgPh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ry4Sghq4Qm7y6EHiFmY783MjqMJ5RZYdn62dRdZ2v1fCJbmsUT5aou563R4WHMjPED1A7DcJQrZjoRXgrSWruNo",
  "key1": "5aBAZLaVvc2xgPv7CaR2fyvoxKKyTN4nNg55ZBcXHLpQkxvbNzUd8boNzLy5dQjavfEBpS5joM8SMQ2XApK2hbEt",
  "key2": "2om3k5zYog3gVvX1S8eX2zAUn32BeHrMotXG9bojhoeTZZLoeqsNRxErLZPRgnvdnKeT9YUPZXWoQD85sfLvHxet",
  "key3": "CbxuV8jm2QsGpVheTWHsJ1eULqacpWgXSKgB6aQ4Rbu1Hw3uci9f8vYxQQCfERq4XCQ2jZv7xDDJ8tDKLKdqMNd",
  "key4": "2wdYhdUr8hK4z22wvmioD4S7hoWtpzpKBDpobLc64dAVUv8JJ2PHcr64FJjHVFGvvcjHTdymA6adD3wRkWU1CsP7",
  "key5": "5hqRyi2tC7UBERtEjRUmCtsq6Lo1fFtBLhp5YEtbDxajLVFVpmnfKZmic6vNtFbE8kRW8fuigZWTeiZUsqoU1KZF",
  "key6": "3HAzoz64GrBajQAFJpXaxcc9wYvPLwVtUuosdVcwFA7L9PNvVV2eKWKBHhD545st7v1MyGwSazqJ8xYwNrcKzNm1",
  "key7": "4xAubzfhxSC8xL3zjqmWyi3XyVHhiKFi4KuEhf5GW7izpLnjaTpS1Pp4r1LYZgFNzSVTLPVwdsw9j87o43yJHAqy",
  "key8": "5nhLVFrPs95e9M3nv7TCrNob6oac8rWDJqvdvP12KRd37bZzDSLwrpmMfFLbEtuVr75kSbm78UShPN5HcH5qnaBn",
  "key9": "WKEEBhaS72B4JGKCr83ncPh6WBSjpuRBk7JoVAdQwYUDzVTAdQEHvwAmHAjG163xxEkVriJyba51NcFwGbgZrgn",
  "key10": "4q4RXWYBBDrYLTagi3x3yAUSYuV2G5uiMpJZbg4goNRftK6jCiY384njCDToX6YS4fnW5YSng3kxGbTrEBsXkg6b",
  "key11": "nogtEYiVgN8Y5dYh1hfUMvBCCah4WGnThRCuzw1kxtL9BBCNUyrc7eNnSn2UjNvw3yG394U5DZ64BxwxK5pN3Yj",
  "key12": "wKGWiNTkTjqQ67GCmSoiikFTKbU6WAXimhNd8G3S6CmBYwBo96VJh1h34hR3fzAfZ38bjvGHprR8yr4dZg53Ebp",
  "key13": "2ky7GRTViQooGhRGN6dgAMNufXbrYADVf8m3JncySZScVK1YmbcY3TdwpCTEub6XBkafqcWyCD1RZLPYh26EFL6K",
  "key14": "rzvtDjxm1GYXn5CDUW9v7WtyDwAcZbenTwyzspn1aH8asjDRfg7aX9ngN3MbospSvuR27VNZWwjfR7SxTDTwhUN",
  "key15": "3CpkRdj6LKKmVwtMDsJ1MeaPw7r4AJZ3s8m3pss6ftnzwynUHiha7G7ySqUZp2QUbpzi36VSDJeoY9MuVzRQWdjK",
  "key16": "4f8Fa4vcUMnin3cbuvi1ahcGHPLjKrr1t9DkyMowb3GtW3FF9KA77mhKL1xUSsR44BzjZS2UiPa7zxt3hTBkVu54",
  "key17": "NZZaK3rGXAiiqGcWgsgoNv2p4kfxQxqF9JkWVZevZGA95GUJD7Xbj8g6XzMwhaaDjMJdnYxfPrsJqYQXtXh4T6c",
  "key18": "5U3Vvq2XHamQRUYzWyXLtyhpYK3r6srRhxMK1K35Ck4okbcDNdhVGkrrJyECNkiLWJ3vp8Dv88bk6yBppxcdSQNv",
  "key19": "3eM62pJRNaspWLDywKGWkrG7gvc37DBm1QohZ1TWM7yTeDUip2KVfLLcJAsDkVUXsU3KWvhsLjuLnWAuZfBXq85z",
  "key20": "3gatwmbuz2NW2CvdwiLMFBVYTXmc8bdtLkLDUhGZmVNwyN5U8jgu2HzWGwZ3rasoXYXJwhWsj11XeACQfG2PXfxY",
  "key21": "KPZftQDHtxKp41ADHuzK3VPDUrSMx8Ew1jfDijAnowskad2HRqC5eUiC1AmghFCFxV5rs5cRbFTgqJRyRAU2hGa",
  "key22": "hpDg5mWwSi3uy8obMVXvyvJ1Ls58t4ztCCNaKPpa4SXWsyzDUj2NEY9c57nMgEA5QKJw2w3z8AcPn1UMep83bJv",
  "key23": "eNWvC9ePCjWvyqDq6Qfgyw5UU3HXbDihGhYsQCHs9ker1NKQ2rJx9xrHXwzsDCvPAoaKhMRFZUEkNYsM8CEvVFm",
  "key24": "2eS9DT7rgCGNFzhF4dtJfGJChHLHjMYE6jJnZvz5F6SvwgbmqRfyq1HyM1N4sQnuHF11ok94BqWGf38MwF83RCt5",
  "key25": "2jQM16d8wcDYgsLFUHAHWZBaGukxm1SwkRSJrc79FSpHoNL7sPqAwMNBnXbKUWCRi9mbPT8xXZX6EceNxSnHQSiN",
  "key26": "2kMsLWK5NwK7osqyKJvpBkas7SFmbMYxUBoWRQ2qwtQ5V3EXF6iLFieHuwgh6ijBNF5hdMAvoNXdJwpVuFCoUzPG",
  "key27": "5dEboSnSBVDR3yiXVJX5u6ssKqti8CKL1hXucEXthJHSQMEUdudNAtJdy59XaysnYZAedPfqvgy1LJjo5x2LchaT",
  "key28": "4FytJCKF6EQEgKHbERgyYyazdDtPucxF6SWrE8BQqxKyxnW9VvwfkEgomVFPYw95RxWodYtnUpUVme32rCWzUXGV",
  "key29": "2aqeNXuDTNptr6DSGXh4xLLnox6cvtUCtEdjkeMeF4ueZPGS7GR9oktfG2QEnwkpWEzWNyyHUXDwUw8tt3DLkEx4",
  "key30": "4s4Rfzr5Rs5qwiaRZN1WFqq4mg9XRZ22mGJvRr9jSQH2A3tntSZH9nqyVmsayy6fNcx5uiaZ5CrVnCM5GPgbrDUV",
  "key31": "xhrHeU9PXknUV2ZjE8QDSMdrLXqdMbfhVvn8StYBgcPvhwohBixY4HwXsEd7QDDLtdsXQcKofypbf9Dj931LYtx",
  "key32": "knTDEbsg8LexV1dB8SFnHvebi9Zjvm3NtLB5BpoS5JizBEmR1JUxzs6m6UEAhj1FpNnLgnbhDLqi8uUhMumGPvx",
  "key33": "2cNzq8dFdJxC8pRd8XnyLYmRS7iKScJKjs5ANBw8uxK6WuBw2bnRy7y6i8bzsvHbw3LXvJD13o7RVMkD7TNYXH8j",
  "key34": "2Rfa8az9EzXhLQXSsHpMgmSGbpd6P1XzdtiTXyhPMC1Eh3WDAHaiWjASwDneNc3NwdmcfNCGyx2a5oZVSELwTRMY",
  "key35": "E9vbUNwV4Yk2SJEbDBLaSLYqpvYFdiz3hFDQSEgH5BE2Tx22To6warqET9eZUMJpb7jaqvCNYxx6simaT8J4T9B",
  "key36": "2gyrfm6WhkmVtTg82YS7CWWJYXRgtMMme8etEij6iPmvzBLjGZVqVfX7Va4d3iBEpRXhQg9bujKUtKYCuFxzy8Wa",
  "key37": "2qi3B3csQsd13NQGbB6CMpzPFCoDyp6bY66sVXsK6ySC6rhNGYPLgT9KhYEEycQqgX3Z5RsmgfUZ8akfPYS2T4PL",
  "key38": "ZMxRsAsBLFCPZ36biZu7sVWjoBgaMoVERNND3i9fjKY3V1vAorzYzwUmbNfw4a4EjYD6bHF6qG44dHAUYVVtvKo",
  "key39": "2tFTuNPuQQ5huhakVaBeB4K9nhi1VCReZzZTz1bheKGMctZQMGG66UDRspCqFWTmAoquuVR4jza5NMH4cuMb6RjJ",
  "key40": "3Y3NK5dLkcgbSwkzStXrAYhihCqcBAPesDG5U7gHCCzgP8h325WqLbjKYekYBa5GXvPq6rvKS48kPyXn3RaPCXY3",
  "key41": "28gZQwLoEhgMajHRmVZVhJVKqTwapjbxotrhpj9m5kz3LUATiKnRie6wkj2rY5RZPYBhftry5Se9dLSXjXjVYdmh",
  "key42": "5Hqyzh7FJBwoyQjBYEaZLkuMcwyroZVVNuJQ6EXRZrVUEcp4qyZxwA8SYTSTShJqTefBkFgGHTkK1wW8Xi21BrvX"
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
