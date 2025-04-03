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
    "4NimP85t7NrinpmTquJ8kaPSNTQuRqdoAqZA6PaA4bZEnUkbKRgFznPhru6g4SFUCvGsH38m4gGDRTQyrVttiMPx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AZ7yCU8gmhTcWqm1pF28CzRue3op7d6GzYwkY1tEAbYF81JB6UxWbjNrkgJh1oiTqzmyGzxm7DQKpDYDhsLrwyR",
  "key1": "2H4Gvtt4YvFV5G9LmdTaBErtgxyWM8vu8YtnGbAgQFCNKwAnVRBN9sWJsZcHgcbZP2yG3nBfjLK8zd6ekdRahFt9",
  "key2": "47PZ2vqPHkcA4PnkZyhEmqW1gQaiGLFqLuy1bBDwUfJiypQmFpp6Mec2Wjm92f5DPC38fhCzdDrPG2DZgg9erhLS",
  "key3": "3135g7v21XMQvCzV1fxyRJdNaTyDGZHrYxZXxexMc1u8FeCirjkWxseXnQeDLjmAsNaryyLKD4S3zDSeSxvfG1cE",
  "key4": "55exDxqxHVERLHK1FW17urxwBFidmPBNcBcwdT8Quq1WcQJApMPCHzAWBxYiXCgXxJz1VNn92q6FjCmaX1kkjFNM",
  "key5": "2YrDjgwsNzyjn2ugADyjiMHJ7B9TFy1V7xXdHepMRiRqTq1CCP8nPKcjoWg6ETDiz7X7higb56bQLZUwSLvWSqjX",
  "key6": "3fSEaMsv5jZicjHZRjJe4B7R9YZpeL7tm1b4pbr92BxFFdCyaT3moi25Lm8LdJ5xfQ6Wh6PoyuEMekhhBqdMkAkq",
  "key7": "3zeWBtS6H84tCQchpA14Chz1TANkN4bWEmc5MbKsEkYZ9sm32FfjmWEBWAn5EzSMKqJ8anmcPV5xGAUzgpXBtXqM",
  "key8": "Zc9aHiNLY1PF8daxQHmFyxmSVxmcwM7f3VGZ2ZmrZZzSRF3Heh2cqz1zTaiJXFCijiiUAiDrT73hdHqG65TYFPH",
  "key9": "65HAupHHJgXNinN6bCb5eQbm2du6tdigoDrWuzsVh8MiSdLuTeGMTc3nXPB9iGtG5w5WQcWajgCzLUh7U8o5tr5J",
  "key10": "4GSemThD1MQpDXxznjsieL3PxNqsxTAoa6rCXomMoHJEHBMMW2FwTxnoFy7p49L4US4c72b2pMDGLSKahTxToom",
  "key11": "QiS9baRjyTckPCAQhNdgei26QRnxWnznCr1e8cfESvDJYUEEuUF1BGJRMup5pd8bh2Nx4RtNnhfPYQQVSSD7iEM",
  "key12": "3D6i2im8hZ2YAQmcSXuSzq5MTgm1D8vU7oGpCaFMExEhtA342bQsoU9C6cqk7TNCyZfzvQvjKwRoVqKrnf4Fu7DQ",
  "key13": "5Wa2XmNggAiK4zLNispUHbDnvDM5iocSQttZZyRveg4f17ZP1i9C1knoQiVcUtecLseyzf2x8bqfJS6exWJDuiFP",
  "key14": "ukuEcpbnupQx9vawuRcWd6jG7iX6sPFvZ9sHr3YF8r9TD57LTvzn3AmXyBRpudNfKAy7281qGr9VQV53B417oTx",
  "key15": "5fHZ3zbVoEv2H1FPiEyxFUx7CZbgtV7PZEs7TW8gJ4XDo7WhotpNyRRifHUwLYDHwh7r69bQKJdx8rL6ytY6UFUj",
  "key16": "JMrtJviJSt2TKTZ3KjzoXb5My9ikaMLrahyoa3wjxms4bPgxNGLY5BWLrGuwiryYzRxvH2udkWaHeTRoKJa4YYW",
  "key17": "2JzwG5WdV7QSRL3ZLavxLBUNiKM7cdokvZtcgBbNGKYVB11bia2pMMDd1jFGkAtgeQNu7uDFbTzvewcLEyWtAZUa",
  "key18": "3XVkv639VJGU1L6x4jk4SDEGgeL1j5CzddoYZPmhMXPWPJZmMsCPT3K92WF9pj6mkg4n6h62LC7ircaFsis9YEAs",
  "key19": "37CocsgVkREfq3s1V3zAhBtKfKGcT7dKmzqwMjt39NAi54TszAPemudvc76M1bY8SREWjQidt7EXGDoBssRuwnbN",
  "key20": "3o4GBvtAheaucMWHBFA6BvNz2yrAYj5GXKtsQB7kD66UYVVCyKyZxARy7SvgZrFvgUy6YHr1MDobMDvYfqRmv1Hc",
  "key21": "9kQ8XxzYNHCGt9Vk5Xstc7bnXW5Shi6174nS8yH5MWn4qrToYv846bqsnUnMNNmnFsqBURGsxdZQLyDRgevCpva",
  "key22": "21vJ9j5RTnGKXRkbGCWxoHse48H7YE3J8o5GAxHQYUyhYSj3SP1iE2NV2dwAr9dt9H9F4WRWv2L4iCEV2pfeUozv",
  "key23": "4SZNW6GMktxBa4dznk9LZt7yX3XHm5HNWFLsN9W2jPHxWjpd2VKpxfAXBdfxgjjabvaTZvmfoT7NmUgmp6RzsiA3",
  "key24": "GjoiaZZ8mB5UQ8dWHPUuyAiR4dyzWtbCfKZPMo7Ws4YtU9sMaYDEXHaco6ZwfQocyoornXann3LKvjFNR7vtrqu",
  "key25": "gg75sG8r49WJNZfiByPg4CE7GXVGkWnZEW6EcSLtnGWfvdRnYSWwwLD2kVSgMMpb8sbeqVaranxuA3SxACE8zJV",
  "key26": "4zygK4XKMVLAnZE5dbhN6dUx79uSZbYcpVsDb1STZ7n2XAzGK5vnPDMd8AScE2LbNqVcFgReUZ2TgjSAhvDErxyt",
  "key27": "2ZhpSsZK3Y84ji8nYtcdevWZc7u942B2wdqYdSzmRF51c41JamjoeTXa9GC4gnVxFiJ7TXSc9cpoHVhDeKT6yTBb",
  "key28": "Y92qGYbuFmxZouq2VAPF9BJGmvnAaAoUwV9Yp8RFqwBtmPXU6XJtUnDaVuhSc4zckRZCaLsR1agnqa7skSTDQ9s",
  "key29": "5BU4fhLm4JiA46kUPQHRuRM8FBvfMH1hhp1jHQAFDq5vamXrNfQQPiRGEBrsWpUhu1zx8pz3HsYDXPurnDWNS7hm",
  "key30": "5GLT8kfABCq4pvv5cbWyJkWTQKYSySFk9FxHE2Y5NT5oxrEJaArKKk4obr8uAXHwwHg9YS61uvfBPhhHncCCp4uU",
  "key31": "6goz3kFwC5hPVKeq7BEnHJW28a9UryJH1uxoTViqTPdLTDytjxRQfiv1fMND3V6befUJsGs7MHGtTzRks6aHmtq",
  "key32": "28ZFNGpB2aJHkuW6sjTFegjQTGHXjUgLAVmirY3hu9CDFoyYe8Mqy3wraePwQYTHP1WXxfNpGaLhWVA1ajim1ffZ"
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
