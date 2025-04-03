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
    "6495pRcm4BwD9jhoL5V8yC5yMgSgQX5Djm6Sfw6Nk24uMahgwKXRgTqZgXwHyMNCRwk4QZ4JAFUB5xmHfFGKuqs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YzqvCFH1nYmfMoNRUB9HP1V2hXytPj7dAevFyiJu2MYHS9Rz4oGEBffs7m3dBFweNs2YfhXDyt16U8cVaGuHmuh",
  "key1": "7fyYXwMLNAE9sBy5K5TP5ckLcBh9SgfuiBhMcextfD9qS5nykpFf3N8hXbQAKE6q3g3TwWFcLsP75TnMyxuWrUo",
  "key2": "Nsx9BtHmjfKijmmmuJ35keEFivsbFc1zMmzMxJZxUEsQQ92kJTVyiy7sygimCcKJfvDkzXtKJnYu39zpB4Zqjsd",
  "key3": "CF1raSn6XEybpbYr45wmmiJFFobmtCTYeQh46eMJMdpsQLuwxySSsfwxGdfoYvwavx7CfYbyK96eWbaFWjRhNQe",
  "key4": "2cMaA7ZGdQ2m2RwWwwFTU4ZWbp4zLVHXdqFgse8vi1PKHF9kXCKFwxiXPkFqB4EXAJMTk7RXiyTkvTwpN2qcVxRg",
  "key5": "5kUv2o2h4kKuesgH4WkQRxU1bLoWdPrcGhk3V9UVEWn7QPj1J15hkMRpMEFjD3Pj81hXsMGtZmteXdLd3axbTN5M",
  "key6": "eNQ61v3fpEY6BrXhVKtrmUzEZxfVVLp4CvTtJN6GckqiHQMsHkmWYMydHJDHJ1BeTKRoTShcroKkZmAjXbvmvCZ",
  "key7": "2NKXdgcjN9bVjjY4BGVURtS8VgL6NDUBFUpqzKTaFfCj6xGz4YrRFRzNb67DATFBnywKZ8Kzz18g2pJ8Ypb2kHQr",
  "key8": "aaNXVNYxH5asnWARus5u8s3E6YdoCWWPT2WZ4AobUQwJhrFbZC47MC3tkyFcXeCuhR9GV3P8eBK321uj29RNKt6",
  "key9": "5WJpUp17zEza8eiVTXrMBgHPrUduc9LHpk4MVGVmyAyzNWBJ9trMYfoGsK21qePV786YMAB5dFDk8UEzkus3o8Fs",
  "key10": "5MjLFRCWs5f1pS2BuujbD3B2pXKJkXgM6BJYBvXnEZpbehkQB6ZQcu7ZZrmuaYLefCmB3Wb4HjKqcZBCymtwbKon",
  "key11": "4u7urzufqVty57t2YvuQvYocUj96cmEdpMQTVP5dvcM4gRGzVZCWXV2ACQEP7oAUozLtQdQcp5MbpUjdPFMMu8zW",
  "key12": "5zR7CXANmTL7gXozi9YZTMayChm3EgWfMsmePhMU7DytNd9PU7Ry6HcTswjeFqqDSNsgQcPm8rFcfo6xDv3oK5Yo",
  "key13": "5mw4cVoMP1q3dJm6Nvwqp3Wy1nrRy63wjfMdEdLpGHyUivhrvikL3Zr7TCcsWC6v1hko9yiuRTChcGjMQXbCtD9Z",
  "key14": "FKNXhLsGrsUkxLcqSxfggkyXbcNYyrZ7hGgGLvEukfpyMTJtUfH5sRJEpMdAkAVYrqz9Mv5pv7vBDfrwHDogom1",
  "key15": "4LSKpVNZSenNbjYJtkc13ex52hBqEHMJdZkT4Z2FVkycUbS7Jo1ZPa7PUqTDLpHixiqYUwu2s2ZKsikphhQYC433",
  "key16": "2NkNi5aYNzeCRHmeLUery3YJGwbkof1H5kGby83TQcGtFXKPy8ErAHq7Pu4Yg7ZuD3jSH2MkWrMR8E5NwUpbN7Tk",
  "key17": "5uq5Eeffwa6RQG1Sb4tPZUzuQJYKSjNpsbtD2fcFZoUg6H5AS7PpKA1kJmH1x9Kj5HK9QjDQJ9cokH1kuUGAdCmM",
  "key18": "35kck4QjGY1awGAzashRGqMsfLtmeitScptUvvvXvMCfUR4b9qDwFrMde89xMQqMA8ubBj4zhu8fFzmexbskM43S",
  "key19": "3JqQCgXVxDRpwv5GcivcK4EasygFAUiMyZ1jQBEqzDpY8xAvJYuA9TcKz9CaHKJ6MmpMk82CRiuKywrn5vjcEHmo",
  "key20": "5gu71hKgSgWyApTevvCgnG9anQVM1NAtJKiTN55R7jR57ShQr1VmfPrJkPtitZD1FuvC93WZBPaLbY1KDxVV3dN9",
  "key21": "4R6BczxcHFHcg6BZbgw974kT4RxwF3J6qX2KuAnc3ZgkYzWwRbisPyiuBQqoDyRGmDgZRtucU1UhNne7S3WAfpSw",
  "key22": "33wqNEz7uPKMBbDVwvMUwYWZTye7nuqHjH8DRbzhqyXUSG36HNyqhWXfmBVpBhv1ztZSzC7siuCVmGomifFUSYNT",
  "key23": "346fdBpD18yCpShxFoUDkoZkoqTupTN9xQGbkxFMUbuRTHRGGtdzYaHubQCbSW9TYSweFKH2xV6U6ttRNFRonc2R",
  "key24": "4m5mrVumxYLE3qjjTzzym2ZCrEU9s1GynFuQ7PEnayWs6VbfU9uCQafkk5opxYcvMMuKNtWfK1QjEbTaQJ6Az2En",
  "key25": "2RhohH5B2TPrRo8VYKFYgtWGaD8KRNC8wFwswfG2JP5UNzJjDScrYzxecBUssrAZRvBzvqqodkgsGHLz8BTyxaGv",
  "key26": "5is5uersqhyyDQ5BxZyQkKx6nxXf8GDy4FpEipVj1YTjhi2zBWFft9mYA5NgYK5RKWsnGb6kXLZXJd8y6QxoYoiW",
  "key27": "2wzY2QyRMHz9gxTiZbZmFspy3QqBDvavfxigxCT5QsuLC2sFMjKKuaXqDYcE4zGoMX9phP8vFbaSKsyH8Hvq5kei",
  "key28": "57oghAWt5M4r2RewguEfY22eH6hkqkiMWP85RTbR7D8ssBKpxsvbEECtTbQENoCHrV8cmMw1Q8QLyDyFzkRp7WJx"
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
