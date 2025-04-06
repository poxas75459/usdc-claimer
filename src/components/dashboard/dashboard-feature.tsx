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
    "2gZW6fh9TVkLVhs7MHt8VFvc16wQMFuXzpNhGthZ31WbArTjPdjvELDS6AfjPxNx1CQM2Rfefkth1S6631KBodry"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dydWqAJ4Dx6JzPCnZqSNdQD2JCwGJdKJ14TW58h3TU3j119AhvMHsGMk3sd58VM2eheR1BGdsD3Rn2F9L1y4kx7",
  "key1": "58o3dVHg4gPaveMoZY2ATpzGifPA7ZozWzKkidG3P8xp8Dm7mSteya8Fd8hborW6FuiDWHqx1wDQvomakf9FaWVt",
  "key2": "nhCvQ1GaC1asV5mw33FRa3CjYczY37KNteVazEkmacYhCMYyUTA8JFjEybcSKK8YWcMjU6txkUQT2DxBDVnPUNt",
  "key3": "krPbVzu2AdVGsFUcQVabDAgs5xKmyhW5tKUcPSFY3Yxmz2Rn23RxbGXtp2edGWWgeufaKPK2SjiUgfe7R17j92k",
  "key4": "2FdZERMPXAQtmH5UMWMr3LW7C1iAjKJVA9ZbLfh9Rk1t123XF3FXVmgQ5KfqJAh1r8x7VFLDUN2VjY7qsCWzgkip",
  "key5": "eCUmWBcxYJHPD91GxRmTYY4kDqYFNp6jqsfCgBwEvQLnsLkyA4X5G45TDwo3GW5nyvdg27AQy8pStWs721WBg5T",
  "key6": "3YBYhpH8fSfkKKvtkE95hh1xnyMwEtnDqAPX3xRrEqjcqRCRAG9CpXvRsdRXhyQowkcpBYWuYJa7BLqhEKz8vFuj",
  "key7": "5EX4ZcgwWLCDp8BvqWsei3sFDsL5Q9RV2jmgRic6yGoagj9DvbmPBFiHxNcV7fTjZumerT9YT74nJXCiJWQC2tYG",
  "key8": "54sCQC9sVLvdhAoRS1ujbqpSLFWRs9WGa6Nxfh8sgAAZ1ESxaupnHbNCqUFoNvhS1ag25B4BkPK5Jdj9h8gbE417",
  "key9": "4sT5sBwgsDZBHWWAM5nyWS2oHqqSaeNrAxHegDrv1QR6bGVLxBzjRmai9mNkc2Sd1gyJS3diwugvajun4hUqEYBN",
  "key10": "3EZdJ2afmUVSfVssFRohAaa57KVRx3zCWiZAfyoKi9hq6yCT9QeK989keMQx1YDDRS7t8gDPtUZVHF9mvvqJu5QF",
  "key11": "5xoCU2q7nsjurUKdeeBmwbmfM4fRw3cCUwyNvJbCXJeLTC4jxL23SKDE4v4raqLTRrJt5vBHzYJhSX2ed1Vo52sQ",
  "key12": "4bER2N99oXnmMM6KRMdbDQEqi8LrwKtF8j4x65R9C3B1UuW6JPUuHSFX7Gmy5tJ5Gbyh8FGFr35AvAEZCYVQYpva",
  "key13": "27D29cveAeZgCnN2fTBYyAY4EM1KpFQdwsEKxWY2RCrpAuLy6zxVMNCM3LPxJukgQvFKGUxToAFNHVCoKTXmKRgd",
  "key14": "2ahBz39Ztiy1gEWNXM5HFuzSiz91LYKXWXZDF8QNn9AZezhcW4kSUWWCns6Lv5rhGpJvkA35EXWYE4yjzht73KzB",
  "key15": "ieKXTZPav2VXzUqQmf8tj91WeQBDsV9RrVvDxQp9CpPntEShXJGYS1p6yfinEb9hty9EVtVWQAGdSGbkKw8KSXw",
  "key16": "5Fn7sJe3U52icf62joTTkqDSJTrdNz1iDnvSCbd7Wxq2HuvK4uYks5xLrgPvpiWkwG2MqfgJwx9KjmDR4gn7MXe",
  "key17": "4ECeqx4MGdJXqnKYDLhaK39Nxark9jvgxLLqifZx1vMix4jZmKNDBjvtSo5duqNcnt2RttD8RgQKDh6SHQLmrrZu",
  "key18": "4Sc6dkudq62SZMm4gqXimBp2NRuMZZQ4xaMjAPJpGxzWKe6KUnkP5a1t5wR27g2ZAk3syMNMY1n9K4GQNJc1ZX22",
  "key19": "5pNj2nTPribekmAximJWas6i5oHueRizn4BTDT8LbyBucM5yvbNQFcNXXpGFTN1C8sLhPdhEjxLdsCfYew9xhHqw",
  "key20": "2D5ztauVhC4JBUmkcLqwr3kynCGuz16vBMeKRoh6dTS81cdP6b5Q8pRNzwifCSLsymn47tfCknKxpvzHcBsGAJXx",
  "key21": "5z4dVDmfFVsVnt5dTnLT5nrDdZDgMxtZVRpzzpKNcVSQ6F5QFwMyUqu2ykH1UXpRdEiTg56Z8M9R4FKSBYyJwca5",
  "key22": "5b4mYV6tBcsNFJsaAVBpCNfhyqUjQCnjETzYJSdfdrorfjbAaBEDwp9XedD7BgrowT2iVPCXqsVveBosXHk9uXvt",
  "key23": "2jSLbjxSBDCvFJ4gmENc4jyY5wKYnCithyioyxVaT1XVYYkMozFbqcPB2dSidKkHNy5hsv2ewHKtRAKdNprM7gqm",
  "key24": "64pekwPhbuVWejRDFM4WBhBQsyRgW4wxbVme7dcKCtes4tjEKkTd6KzJQfcnrLjzAxzy1bTQND2M5XhKR9kDF6c9",
  "key25": "3ByqbnrJk2oer9BBgGiYr6dT9oWcEZCzNXbDwSxxJfLMLccR2zhFnGj7FGUdSmcLJw53N7sX1NzFs1czDipXyLjN",
  "key26": "9QpL5QCqzG6zwLttQnMbyA2t3Zs1jyzTMgivjX5QyRUbqmfrCmy8SAq9eMDrZmLLMuZYN7Vbu3ENvJZfki4KMc9",
  "key27": "2zfLn3bGbEvZBMj273o7NLknPvEiE9cEEUqEDy8FTZfWrMrcE4moe1u3VTLbML4Ex3sf9YczsH9AWNZ3YLQCQ852",
  "key28": "2MXZwjEE1RhR9jQWAfZnr6nJ9gAB6oEDYzMcW8UdSXNULE666PhaySYHG87wHX2CrFtAUfn8EgUVh5j6V7aEF2vq",
  "key29": "5m6vSHEjyzMJU7GKZnUShzXboRHQ4g54mNbWbfz4PU4vqHiXtyENPBKWje5giiHBCXDscSDNp6ZFKZT7gbryHouY",
  "key30": "4W4V1s3wUFtMtJMY3uHMTHu11EAryLhfNBV5LAuDjT3EtNcESmR4gn1xewLMR8G9zKWJxhBZgtim3eveTixQVAni",
  "key31": "xSPLCA8eehR2XB13f96UD74fQwgXbB71aKEUFNdr9wihEC4GrPGZ1Py2NgzuthUBuus1LskSRL7TdNpS9Se1WzM",
  "key32": "4wS1fv4DZhGYT9LCw72Pb7nmWHCqPVukTSLNXNAPGC3m56MGA53XmkqGAvNzjQXDcNx4GWxmUgvKvv5hRWsbfG95"
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
