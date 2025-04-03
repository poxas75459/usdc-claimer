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
    "4hKB8YWoVM5YpDUC7xem9ZWZxuD1MBaLEMy9c3yCJyj8NESwdujZsfCDpuwUmCCJAHmn6t1bbzSF3yj6UyKCotLY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gP9NdCCyaXqBceUocPRjW7Wt6EJjYbWCjZ8DvsYFCJ2DGEvD5KWDLCHNBUVoYLtm6XmtXLzxEquJtZfuo3baat7",
  "key1": "5Ey5G18YeBmzikFoyXrMNaTTmu8gSAKpT3jcpec3PKEq3jqjvb2kXoQKiUkgSyrYLHoGUn4Pr3W3zmnhw5y28F3y",
  "key2": "2qFr9B2jRd9J5fQFi56Uax48V7PEsbLdDNDZjXP4EDQF1GDkDVTvoh6MySEJ6R2GmN3J4vWQRcZ8h7vzEJzCAojk",
  "key3": "2t4cMNZDeJDgyvjYuSz6kJPZ7DK3d63erg1Sgm7eqXTxPuceAqXCMgvttuZPhwgGfUZLZt59jWk46hBuSPzutEf7",
  "key4": "4v8D4VZRKXf5MThH4zcBhkbxEKs9vWf1NzSyiuGYncr9drWANUA4qTCkC9RWnkf8QHJ1SuwUcTe1GxpHPcMUxXvG",
  "key5": "3aKx1hTYkyBX5gw3xFcvPQRLxda58y2qN6W4LLsfPJbAKoCBGHA8ggYiZ4TMBvqqGZFWFSdEDBakCtkSgUcaYrPJ",
  "key6": "4AANDyEhHFu844szdLsP8EJEpBaVfL5MXDatvTyk4zYT2qN3dLBP63D39b9FLbPmDdVpTEdDP98TR2EQzMemZXbV",
  "key7": "4pqEZcJbAtKyA1cCB2zBMgc3T2XSUJTgTsPsxWqxvsge4qsnymU3rM5JarUxfZh5AJv8wMfkS6KevkNi9EPYuWGJ",
  "key8": "4NaPbnqFRq3sym1sLCoAhTdomgNVGGzq6Uo2hvfKWizLFe7QZACE92GK6Ln85N2BHfB2ZkJUEJGLT7ehUVU8uib8",
  "key9": "2ZTKA3DXUHxwbsSGvWkAt2hA3CWSzoQNBi5kGzWvtPBsafoW8ShLc8tGKv17qeWCbNNX7uxQrcq4kq2TTx4L3nNu",
  "key10": "4EzUSscGRa1C1KHtbis86w894BdCxUkxAMucL17xVf8AT4x3qtyMJDbon8Z2YwYKE1qGEND2RRRuWM7D25o7m742",
  "key11": "3je4pEWoMSswAW3mZ5GFd8mv6V8TiRjQv4EVbpP7YCSgvFwRrTtUMsP2ZbYoo6cBxwrYxEAWQTegrP9mftWKgBBz",
  "key12": "4n69gSHZQBSoUXH8dbZafdUiR4WDYvvm3vbZ8w1oFHeTjhFwD25q2JcvYE3e12EQtzQuZxUygXb7kopi34G5z29x",
  "key13": "3vK4A1Y8vAksjCXcLUaWMXnevQKKKB4yuan39MEmDegJjfG9pZgNx4pibeBLtyfdbz42wTsK859zUdAMcxkUHTJm",
  "key14": "3MGAiy1aCKwxq8pCNN82o5UD1HyNjpQQmhEEWjTA2B2ioNdddrriTm8RFthSjqBAAKDHsNDUVNJNo36TQn5QBM9u",
  "key15": "hYCR7io5Z2QoaWQBBADFQoLUywmpD2iyWFgMq3cbE7zzNNfQagY3edaawz1okzo1MAZVubUinxtJnoUXZ6m482r",
  "key16": "28KGvYZDidXhpvvVUx8TfB5zYxWyYZa8yCqrNXav5cwz3cRcif3dRPDAEiaU4KZCUmmsirJvMSnQxWbr7JarA2o9",
  "key17": "5RdiLnAYjUVTZeBTfCkD6cP5srDAVWKeWxyMCqHxf89kziUSrpaKL7937ftW3zyihYLjar6niW3MbE8Nbwfqdtry",
  "key18": "DbPvc7eYNDEkvBA2PAtfVeWvqVTeMqz49u8cdgaGxCi7L9KTQEvjTidjUXkRmrBm8UTmgShaAC4r54n9y7MG8v7",
  "key19": "47TmqzYosJLUT9v442rB52zB1qpdKQoF7bJ5uiVcfbjLTRQgGrhgXLMcgjuRyNzwzuXKvUB259ZNLYK12BYkBcvq",
  "key20": "2gu8rTvhN4G6Th1HZKoT6M2XeF8uvVYQKCqEtR2oT3NLqvKAjWmbLm3wJ1oGwsxCHGiJwwMj658WgpLA8YeqZ2S3",
  "key21": "4rmT2SG19xvRq2o763MZhp2GXn3fnpL3gh1txR5MAUyaj6UD6uWzymRzHURC4fJ6Fr826W4GRJJFmnhsFjrPcc4g",
  "key22": "4f9JMXx9eercMrdgsiTpwWvzoDE8QxWM2YfyFtmQojL88tP7fFeQg2EBCrVUZyecCMbXxh9foy7x9Aj6iqFQho4D",
  "key23": "2w3vqVMRTRjWDJnZSMvsiZsCHLapapUiNYyEeg3wawy9uouNCoSGVtkUmkk9BcirqrYTMY3U5bjfDHPt93Q7byvd",
  "key24": "22YaAceTb6kFjdC56DbqvuCjz25jsSJJoQec83euG8dY2xDnZgH2mgCrDUx8pVkxyUqGtc7PnqVbCEJ2raa4EHEi",
  "key25": "4DjSeNHpFyCrMsdwkxrvAy8b2jCGLBfhUXsomPCKoNYZ85etU9gZmucrusUD8nbTv8RgNSbTm8rPMx8Yg7GsiJen",
  "key26": "oaNT8pdUzFcz3hzGsTB1v1R3eg5BnVxH266c3fKV8mWhDTwNbuh7MkmsBqtDkNadEyXdJfZEAHo8WgcCxXh9mph",
  "key27": "357mpwMLcvnHGXqNdBrv7t7YrPy3a9ud4HwHPQ48JzauaaPGMJ4gBmKYMro84t3Y39NGgGbfcxPKh2qy6AivZZ3w",
  "key28": "3bakgt9esU14oHizUJx399UP1kFzV2rPvGFQsfUgmF1ezh9hJzEHi77pnSkHZfTjxWQ8Q3fv4sMu72my3SPM4hhW",
  "key29": "3U6VJvb6RwioShykHxQNyFKfexYZkKmAtsYakv7u7W4bd9vKJbfqwmLbtGBrVwubbYnZsBnusdgnwZNG4zGixuGQ",
  "key30": "2NFsYcwypigyPn7UgXFNLDAKaSzFXryNKpiaYeBxHcxDQ4ZZBvwcwZmxwX9iL1GXvbzJn6LkavZCBEfUtmSE8uow",
  "key31": "Qf48NFZRtjaQpfc3ndVmssWU6QL34QBC8PKWNFagQmmKdBx8XXDrenxXmqupJrBBSNHM8a3vRZLZNDM3rMRKZUR",
  "key32": "YzLA4RkzLnye11eUGMM3NiCJzR3SCo8UNnwnydZddqsEdVUrQdvqsEAjdDzqtmfEFGviUcqCYZtpKURMd6scHv5",
  "key33": "5ZyAE4yH3CdXu58JxUYuk7MAEHSomeYeAvzpriFoXVV8ecfnXa9jh3Uv9HdvQGzbFD2G1KpJzTK6DQsnAZKNZjTp",
  "key34": "61CifhRqHAnUHLVUe8Lkwg6gTAgn4NbxKCW8Rdyu1njiXMYgtQBYTf5TSS6DR1UqkN5bqh7BkRpvMMDZffiq2QBR",
  "key35": "58i8ZUY36ngn7tTV9cdC8sBDPRBVxCBRG2VvRNuCjA75VsY2L82gDDff2WZd6TJTTZbTgDgKC3RCPCrjoeNBQECd",
  "key36": "3XetYdjNUzsjtckRNBDDjzJmYQEXRh9uFGdCqjyusgEqSxP1QtZY4dbRDMq48rgiJyuQfuX93zL82PMvHthrKc5g"
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
