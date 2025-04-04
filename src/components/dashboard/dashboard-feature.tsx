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
    "224zuYUFkfE78GLzTjxEt1Y1AiAMv3AqSFwCYKArS1dykFu9kuPSbXLED3bMdjXx77N8TVJsAEGuH8W6Mp2XHZSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gNqBCoLca42j7yWHTJfbWUtEvkDC1VfpcNms8NJN4DasLcmDXFbnNQXncJWuwuPqaCnKZQ8XDZCAYbq8u2LYfoK",
  "key1": "4id7jGN4Ho9MrhVQJe4q3Xz2iHSpyT1mxhAKrs6vR6imMUUCbkR3LkGUG9WJzjvmXLcuE87zdWdVdAhLAoaZkDDz",
  "key2": "2uiaQFHw87fBUvh1c9gZ2W3eNz4r5zCA3kpSw8G8Yp5bjHL8a8B8TL9ktSqAyNeM6dk5rt7Ra1moqPuzqKBM8Qy5",
  "key3": "9DVMEwYuQFSU4WZPXRchpE3gbi8yeZxAPVxsdA3vv8qVMJQQAop3e9RW7qZjh39PNQnXtDgGf6sbGzCP73JzhVj",
  "key4": "3qjBg2TKRzjNnuZMmc3v8N36cFR687von3vwJoKPeGRKX5d7PccsdtExgNoWVpiNzvpk9WpVgoFygfcmFoNcVofM",
  "key5": "YidxuE15v4ArHD7KEL6bu8h5pDEFRHEuX4jHMRxcRhtaCyS2jV5rSprZsfGC2QdQGbTeXUx1GuYVMUhGLyA59t7",
  "key6": "5sjFVqmbLvfCjJDv2GCPSQ31ysUT7hERSiwBgcWJFBJRkzrmC9ZAMLR8pUAb8ARruuWDZxWEhiuHG3Twqc6nCNYG",
  "key7": "53nVDko2tYCGkhPyhhAfSEjhYSn8cZcwTgi1kPm1cFpbAh2ij5oQ8TTHGgqduTuNsc3BrHs4dLd5sVzZu5MVrPFV",
  "key8": "3H7F9ksXSv9vDibdroRNhEyxER7yXwZGfejdR21vsokko4ooZWJ5PrxjSwbTvh9iJjvmTCzgZyxPij1isMYyzXDk",
  "key9": "5yULiHQACjmUd47yZznixaA4R4KWPEmZpHT7uKLPEMGJzfQWWZxeeCYBCm9gK8V3Mm2dE8Hxy1rbCWksFZT38JEc",
  "key10": "35iVac2oh5h3szMtbNTw7nvzvRMQobUbcJGtG1fLkXLDfjEAjG8nvtYafUJk2Azjqmy8wzW2VMfeAJyLWkUg1pox",
  "key11": "9YrsyDz86F8S27CB1XkPvZruNNhdyFWeYDW6V3tvjt5EPRqhumGAyb8PhKTWtaz32EYBvhXTbcrpcGmUJMg4gXE",
  "key12": "J4eVeRuBaEEVyNkghuiogXb39F78GgFB7ua51TJpq9Tx1TnEa8mSjSAWL2mEN5GBJqRx9jz2fbJnWbST4sKfDZ3",
  "key13": "2g3i8fE5r49EiH89fvufCezYiYBfjwdikCKSGMhW2d5s1Wrfyo78THPxh9dgMVChNARH4VeAJ1vWoxv5Mxuj1oW",
  "key14": "UaejpmGEbRvsHAuoDSLAFjd62NVpVxahciSG5e1o1c2K4ZVLUbZ2aj9A7YmvD1U7uxsEyYrpoEeyKoPE45JmPGx",
  "key15": "5RJANPUgYBUZabJEiEZZoGwS8B7ZR5MQvk6dTSXhmbnfuw7kbznYWuRYZfLZpUx6pjt8aodLLByxaeVHz8C9QPQA",
  "key16": "2g7jJvJbLThCPfWCSz5UZ6GXS6vJyvMFvFwAv3f119mgeDKfpkgVvipHempcGe7ChGGowSiyuT4wE4WS1MPqFWgr",
  "key17": "3uG6XwCXdWZn5BFYs2CCLFu27vn5iZgnuVnooG5fBWH8CWtm6yP9cyyEHCB65EmPemCE3rDdA9dSHoBwn1egLBqM",
  "key18": "4tw2pvxjDD6eAKTVWCVh32tvUv32MiLFEN1kYQk5uipGbMc24XTFcRTHYyoV2ipUJi46W77mZntFZRgjVmEvqGLR",
  "key19": "4rdG68w94Z3EQEcBiF94XM7prn1yECHBM5iKgAJL8LHECAQpTeWqqXjyBFioSBt45mFQJtTBtwJAd1Xx9UUnA1RG",
  "key20": "ewMSgMSJU7bmQCf5WXKhc6YTgCSKWT64frf1Tj5Z3hauVHhAzsh2eMi5EVoDvNBZJ3YR4mAq8RtzHgwJRomh35K",
  "key21": "28wRKLbrH7zRJvg6kdht9ybF5xE6uwhHsLuwhirCzdWjbJjgeUNnMMR15CLwDEKeUk7JDFeghNMmCxRBMCkk3NJk",
  "key22": "5vuNr3a9BquzNfRzhv9eXDd2kuSeKWotjLfMJjiWwiFDJQaC26XfWwEpSSHtTjydnZYA2VByt8hxoYtHaK1zPi5r",
  "key23": "3DPwiVsKESs2roxnC5BFYg8cByvrhM11xcdDnQkTN8u2cBCH71ECzK2w232dSP42bYKdA1jKNdVjybqnfHuhX9uT",
  "key24": "hga1jbH2EYdzqCRvUHWMP6dJddwfBdAridGAAogHnoNje3Bj4to3LCvzcEq9txAgqSys6T71NxsxYf56jpjHjKA",
  "key25": "4BgaK7VhFbs7sosRM8XJybwJhA2c9ZVvQCHfemaLzUTsbWvHNpr9C6DDX4HFDmZBb8ohU55XFoiLpGPQAxjKACz",
  "key26": "623ga163qJAZgVzmsjjfE5J5VZrUGU1gun9icHqUiWBHCFfGs477BVwuCMjqTc781Y8eMqcXiJNJcYUAUHPkfLSg",
  "key27": "4KDVuDmJTULxpseg2VbqrmKoF59kGKK6Ut3DJqJmXqTJFwVZYbTX14KxLXbGu2VUoDURXErr7JLrSjoZGLd3QqDr",
  "key28": "epVGWay6cb3vx5xP5RVHxWm2KYpsGdEYrgpQs6J18Y1tVgNYjqj7KTWkaWTNVjfLLLjxyaZvvA5RX19M5mhqKsQ"
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
