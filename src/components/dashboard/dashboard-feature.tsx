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
    "3vWjd2RBDEFbAFUk3Lew1xzHkeoTGjL4iHmkJmoiS3y2T4GeYJHaFJ738qZstdxeANFY2dbAY2wnybDTSHSUkVbR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24mYA6wgK7UPLRXFPbBsKcnGJM5iU5TsYwn1bQX1B6jKmFcgKKUrjpFaidTrWHQzUWvEBqMjvEQUjUzvgnLKaBYx",
  "key1": "2YtJpj5GeUtcPca9hdHspgX7SYVbU41gvyqE91ghZTj7fLSANR6XAifhTpHPvfMfAr1LSEaJwgtiTABfX2MqazKN",
  "key2": "3WijHLSqY1FSb7HxPA7su7FagNwD7tjPB9Ge1FyuKt5Ypt5e85tMTVG6CUGtGfzrTY4uJw1LgyhamnEt6yLjkTs2",
  "key3": "4rAY8FoHHe1xBbiTaSESWCqGpWom6YF3pbwqz3sYoYRj4zcr5N6b4dgZtdiKuvqdFM1UFHg6ePzgUyqofRT1Ro2P",
  "key4": "5yry4tFf8gDqYxD7uoLUyxsxZtcCn7NsU1VyPwWCWCf4Pmo7HQXKs5tszMPKtkgcSUS52w6jKTb7REJGf5B7S9Vb",
  "key5": "3zRE9qwyS1veq9pPGfANtgh2yQYvCJjaVfcdRD5exi8yh52A1eHzXCF2FdvTzYpnQRmAr6jsCN7bDYVtDKzqYrck",
  "key6": "55NiRCHGMFPL6qNvckmAAzKhCzRUa71AiS27iowRJi6JFW422bWcUgUZVp8VSaK8C5S3VF4ucBTxaHuty8SF4bnM",
  "key7": "64yYSPkSEAgBhRidLduf6VzEptbqR2Bk3ngEivmNzKq3sjBvvkKF3v8SxV4chGoPh3KtvCVyx6VVX4UmL7ag9KzG",
  "key8": "5K9gWj1372zeDMpKrMHJcYu3nVsH68Tg7sHCWreeVYib7RyqjQk66nW1mAyodPSLBYsfFPmcshSMvfpGu2nGYihq",
  "key9": "gwT3y8kJqVbzJuy45rxzPWkCSbEWoX1zEPtf8TLVTF2XVELHgREbnAZvaycpA1eM7f12V1sfDhJ3AShwqykCHy8",
  "key10": "5wkz98qYPoho9fSzhNBZoFs7Vdrr9apCh12rVGaz5a4QPDLAUkjNYt3ZAzQEienorB1ZFncWG419tGsuJt5vGEfB",
  "key11": "2oMhnrerZdZV2JWP2jSCs6BcwRV9MwWZPC3P9dts8ED8A4Tsy2NfRocGfS5ykqDCHYLTZgsxzsh8waN571Apv7ZQ",
  "key12": "gQ7LXZgkbq96Hjk4KNKBMLJw6hY1V2SfpUpskZMFyTdhzqWo1QKrsVfj3VgLJr4eEBtxtqTv6Yk3yoee7k6kTiC",
  "key13": "4JWqMBqu6MVVDXi8AuERkaWktW5mFQbxELsZ4YUn29qfkeRdKp13uW9vXoAtFmmMZQQMJo1boyrR5dygmaS984RF",
  "key14": "56eVSv7jhVWe4kPJgGAySFsDD3NphYvhmwnkjZEnUwLY9PnTEErz8HP9KpxZgSJDU3bNPMCuSUb3obTMJRFW1v1r",
  "key15": "5CbSHReSeSuqMgjtk4wHGtvetx6rzJqH39EsfUtZZzdYMSCePKAYRU3HwRQiTnT7dkX6MbxfWEp91fFExtrk4Z3y",
  "key16": "4F5mkb54Gcueh2Dviu3m9cWrgFNKVrsmn6zBeYXUDWd58J2uEaCiw5wFRdiRaxNtgAmnP2ZPdiqU4rCx9CDFeNNL",
  "key17": "39CoujsPj7Zw4EYq7WLRqwJytt419stVUhcgE1m3ZFp9KmysHWQT4aE2sUkMBpRJSmx9ZtSB1Y51HUJdACCScSwZ",
  "key18": "24EjyCm5aiB1AN62M6dqT6iddUVADFCT1ao1TorHBQ4Zp6VM6UjJhaSoDvk2FtP9dPfNAGFvD48gUxAdQCY7pLVt",
  "key19": "5MdqttsqveiC5W1CWgaEzzCz3w7DxQwUg1M48RjgNJxdx4xopUEMpSgcDPKmPcUyXM1scz7mB3Wf267mMSsEyaKL",
  "key20": "52f7SHvuyR6GW6qfUPJDThrrYo44sN8NRSSrEbJivN4rk9v5ajR4qjRaKzYat4jgHuKAoDBsxJZzB4MuB7KPvJng",
  "key21": "4i7xgVXSrZPN1oHtzGmSeisdjXHmesmgFPNcKFwvN9dx8wVno3by6pAv3L1nVZpfAS24E52ajP4jAPRTx6Jdxn7Q",
  "key22": "4d9HxwY6tVfD4cMxvw64etznZmdHMUpzWgTXPNq6Ua65NTvhyqoRU8UstdU1yUuQSzyRGiiFKso9trEEggE99mRg",
  "key23": "3y3v9KyH6YnZ5zrTMvhj7pP4jYkWvwvW6fXXvdtCrwfnmtKHJoJZsthSS8u8XeQ6CR9tym26MgxpPqHfpMAvsB4T",
  "key24": "4gfTMNSGhF1EgxLbd9HFiFyWLKNXBjKn5JMV6D8VQZGYm3AgVRx3ztMorybWAhQLRV84ucGRRC3komr517Xgj7Eb"
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
