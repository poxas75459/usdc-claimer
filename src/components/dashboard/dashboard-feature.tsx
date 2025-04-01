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
    "4SXRYSzZuvoH1WLKPwihWVsyvFJUNxzgrbtuUjhQpwa8tHeLPrYTRXE1DkRSXKpve5AYgxA4rYP5qZKAkeeiwChJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33LHRfd1EAG6Eq8Hnid4NWGSUSXRtdJ7WPp6NfrB6epYaVXYRQmwyv1Jaz5zffmuRS1JTVbQWC32Av6r5nyP2Egp",
  "key1": "685SfUyGcYFfhNQUcRgvUoswhEWmq2sY2aLn96hkz2mhmhFvN6qjjV2LGKRRZshdc6jzxvPBxdNHQiDdqGdvJ2o",
  "key2": "KYjU4kiADySEPe1zYquSrKCgE1JKpw68YbvZCi9UKybkPCfu6EBUtQoWM2CWTCZiTBFYtCRKyNhQyBjgLR6QEAy",
  "key3": "5rmcjmymFHuT4TrGfSykS9trxhxRXkguDiJN4LvNJu1aZvrDc4mtceJLtrwkB95MjAvKDi1Kpvz9czsrckb7RTS5",
  "key4": "4GzFYYDpYNCePSRfR9vBUoPdysGWTKsucULhx4kUvb69StSkG9TNY9YJPHafiQSNwhMwwPGvjmER8tJnuiwvYBZf",
  "key5": "4hz9w9YJCV7E8GPmPayKW9ZmdqMw2e1Hk3shLusXS3if7jPT2K1GiZcbroeqiYRZyEoqLVYbXXyQZJVfFZKJZYyS",
  "key6": "3mzxayvU67eVNVLh2imLW7qGL3K6kaoqUfZPnomFrdYiTd878vEF5kPGCFentNhD9EybwkqvuM7Nkn2rhMEWSuvQ",
  "key7": "5x4cst6QMcJdzJsHCWNGgEtQsft5isfE8vwozENuJAy8uyo5yPZVB5tTq5ScEy6nNETXohKe3gVzHvX2LCvzL7pD",
  "key8": "2TaBgEooKQc4gmLeoosk8zeKG6G92ikjfke1xCRERGWKFEigjF3DpcpHqsSiaHCxsPTojwnFTuKuqhZQw9YerpSW",
  "key9": "4aE6L6d7u4wtThXKoVJrtKHtmJiXpyfbwZeCx9hxS1hvhZwxnvgFNp16DnfTiVo5y4qeUmfusJ9ansTpfjamtPhh",
  "key10": "4EptG2JMWWaonN1DiQJoGUSFjGFP5dT9vnQH5jyGwJJRXM1Azy3Xje9AmCt4PX6J1fmW6c82qe1mWAVFoB2gmbNd",
  "key11": "32fFFubP3Q6yXj5u2fz2W5QckYKNUt6g7wZVfhpS3HTrW6N45jpi2ZWbhLq357sM8grcchXaLXdVUyhq5G3aqrpY",
  "key12": "4jmedX7PgVFXz3SWbVuJE7z5f2VEEgrYwWE4mVMZ9gEZ5FxRXYQ9dDc6U8fcqDN2kYMRAPR6cHMpErTNCZbTtZfN",
  "key13": "5uQGcVs1tunm6EqC3R8fj6Nb8YYygcimBoPuPnLMKcXWUVH9DRUPDy3rTkiSo7UdfDHru2YQwXHeKx2RJhFtRzhe",
  "key14": "4PTj1jSpN33qrdsF9SQVJvkCbgURpaTXbTarh74d2JY2Q9DF5xceikWbvKF6fmuVM94aAqTT7ovexsWeaJWMGV1j",
  "key15": "3GGdugbstjH4GbEZXUpbVJuBptgXKuWzxWz4S3QLjKgVbM2LWCXwmhwYGo81L6kFsQwUZav8X8PAgvJvbMgbss85",
  "key16": "RhfQfom6zTgEqAQyJfCsgMnB2GCCXVfgA1yNPGt31ouEaJpzmcqPEQnVqMGTpgGRE7W9ZWrLKGTPyqrdWmg6F9j",
  "key17": "4Lo5EwUcathi6BQppyyTGUyjgrWeDPKPbQQvuHeBpq9ujZ7KfQBHcYcvWbutfQnmjXUmmpNq7QTeD39eZkxhbs69",
  "key18": "3Buc8KN627nSykTgCDFCyFA2TCGh9CK2PBsBCHiCTnDdDiU3pNNXVhg4MxcxnfdAUW28EyNd8JoMnWPsik3F4TbW",
  "key19": "3DKjX1tN9cJ54CncC6tgWEdkjwbQwSaFkcJULnbKEJtQD1GUKQYA4XBnT4giMifi7tq4V5u97Vn8B3gbftnAvWxG",
  "key20": "54iZyx3vHxJ24MT6nzCfpL32HYPzsnxyf8E6PkzY7SuZeG8uZc61ra7uS25FLHwm89KRfNCt8hFpZerZJDmo5kXL",
  "key21": "55HApyhtB8BNgpuuA6pf9pvCpDsnb8wT5H8vgx6uv9ZbuHP96ZzMd53fmk7NuY1skyHoU9MaC6BZei3M4NkTDU7P",
  "key22": "4VArYJ3iVbicUqdw28VSLUbqZ4brLhjfynE56EMxofWT9FCYj5XjJecRsWnSHvSxpng7uBSTFJzam8FYAzJTAhmb",
  "key23": "5ehxXAqWDtk3nFiNZU6aE1NCp3373Nr3kXmL5dw1s1EqCiR3Efdrj3GEpV1Vh3C9z5B2NVRqEY9cyuqWLD6qytu8",
  "key24": "4F3bgiK5p9mRvfyKBpZZLYAfT8ASgWcsiyPZWAj1v1dCcuxJdB23GyRyTKx7kVR17Wv7aMsUpYLbtAZNCZqeiKTm",
  "key25": "WmTcP47vNiV71YzBHXkeKQi5zTAVpxvBNYmZxHyykMSZQ8V2dCNA6ddq685NdqiPzaHZTxrmhn7bpXwndTbNAYC",
  "key26": "3toiG71y28YJw3Skb43pjyJZ1LuPajqvcwAgVDBPmBUzLAZ1wwfL71ZjLYxaK91h36e7dnRKbCR3W2rW8ptwuthB",
  "key27": "2JwaZR23qqLxqFeXmL5ERxuV8uhmrmMxnsKAAjN2vT6RP7YAMcDqa6fPub9Vev5jR1UQFpxQQ2KemwpekZK4mnoa",
  "key28": "3nReh8Q34CERHUiYGZV5ABJxmY9xXQjLesfBBmHTRVpnUz7sgQ6LqL5dWbHdCRdMLD7qXBZcjcPd7FFkxjoZJXFE",
  "key29": "43hqEe9M6DMBDjMVxamrPCR64oe4VN8kpM3jFwNKUvbd5gv1Ztk3a5xQVmJzQcQuWiJh8mvkFGy7kpmFmwqa9hgb",
  "key30": "59LD1wDJ1MsBKrugBUBb1AFtaanMV79onkpzp6Ez9aM3ovyEKxrPsRQzdG7sUxGLpjba27zZWPNt9xjiXrjVWKUH",
  "key31": "pDPaSWoq4xNFWSSonqYdZS2h4dvDMb7cMeJ9UoWLT1skVAfWkrEw5erEfAQuyzkdRXaXtwUxUAqxy8rHFo483bp",
  "key32": "4vMtk6ZDtigboScL5ZRWNavaXoQQucT98TXiboXqUFHsM49esodiA3LsP6ioMfv4mWoy8EXedQSvNDd8439PGisM"
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
