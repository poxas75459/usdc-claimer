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
    "dnAvRatTZAZpzgwJsd34ruhKHeVtHqHkShsBSwyEAGyAd1BEMrztUHoh5t21abZ4rs9sqAyf6qf45gwQFtSAmtk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mdtQ6TuyZay32z64XKX37z7iPJUZfdoRnTnxCF6X6nr5onyKK8x9jiFTGsFkKYQMGL9McJM4iaSKBeUAokADfff",
  "key1": "5fPq9TDASY7gqty8dJGVtshzV7YAcAatDdcxZ94Zz2fbhC2ZN6qXR64iuSiDx8ETwGpoY7DzTBMqfVkEo6BU5pt2",
  "key2": "3tLKmcjdxQyVjYzuasGTKEQsrwYEUVMHxyEHE9zKU85kbtsMChu3ph2TETjAHQZoEGx4Hr4Z3W43Ju2qvtTbTc6Q",
  "key3": "3M85dFmb3upg9uWHoNKNtG2ENcykXXGmD8q9T4NFHnGoQgE1KG91Zqj8acb1qS66P99M13aPqLcE4FN5Rk64YwKA",
  "key4": "mDepET2ujDdpFEYLBcQ4dDEMD65doSZXh1QDDNCNBgHfbCxBTAPJMfod9jgXyDzAtxH8bSv9YKjyqmAdeMi5iFq",
  "key5": "E1ENxsBZz3z1Mi9fmVEb17a2WeZ3mwSbwP12B17zWqEWNYnEam3XrEaU9gfSM9QnvbWGmL9Qn4pYi3zKgzKXAiU",
  "key6": "58QYhBkVM6n13nduekWoxYYgkGNnjZ8jHVAw36bBe72H1WgEgwhHoVW1BFPxSkPSK1isUoa7DnS2MPZw8i5FXhiH",
  "key7": "36KFqCmNBwfHbYGLAL1Q3KJYDJ6Ax5CBjy6B9qLZjSHG8tZTcH21Ef9p6fT4myhXUu2McxsVqNS6HKoH8enYUnEh",
  "key8": "33MgLQS9CUQFZefQWELrG6EWGbVyhZu4kHBrsumFZ5CKNyXPen3AmcDo962KhuAgtDyDaYXeP1qa94tpQq3ffrqs",
  "key9": "5HMAAYjqfgws9nnXdSMunJbgMsEESx1V5CywUdveGLWeLx8Mo89ACkenxDrHqZG6pspVYJvz9dETPm7jBcJYt2wM",
  "key10": "J448MjW5JgenVfydb1CDLDdekzQUmVavxRWSuj57QQjvyAwELCe32jRyjbJxYZM5QaHxsjn7Zo9da6951uYrXnB",
  "key11": "2B5SHReBvkDb55BhHhs382ArFvEyobGsWHRNPteiiagXSPhZhyQJirPGspTQ79f5h7DuUsTMX5A3gMm8UzDfpnLV",
  "key12": "5DFYhVEzKJdKUWe4v7o2TfzoFpCZdGpPvjiGmSWgPAv5iygT68iGEBKG2ZChgqQS4pPEaKrBMbiP3grtF8XAMxNW",
  "key13": "4n6MAmM8YomhBUkNz5pbXYDirQdejYAxJS6Cm5CASabHjM2f1hGaRUDrgWduhWth8ZbycVx7maPXjaxSXsuqAWCG",
  "key14": "38ysjetTYt7myuCyrCWv8Hb8EhhL9K1QzMmVWZfMPeWtstHAN7G8Qu315vVEwCVZqkU6uGy1cBdzNW2WwrzxsCZd",
  "key15": "4uKfULZbqixaWDMEQkF5dKPdSdJdNHU8xKY7WDo4q1bUR7mUDsr4jeXpLKh6DbmDNvV6AqmktiocX9DbaYu8fwWS",
  "key16": "21ZF2VsexqMB4kfgKMDkg7BPnJYcs3k73LowhPcrQXx2YHtmUrwuXM5V4xyA3vtjGKL2YzhL3ZXKbU3MC3EUwUBX",
  "key17": "4aDFpCK9Zx9HSCezfQtfmczdiVGSWEEwCg1ecV1gkurnGVoCsaEawV1cRUWCr8BWLEkoKGfWJjSybe7aoDNe16rv",
  "key18": "3qTZAfNQQqumLbnHNHbvyc7u7r5XeRCN7Dpq6Z3LXQmqfrBgQGdG3A6VALinrtnkd44k2jSLSGjnrFRxQDWfku8W",
  "key19": "m93FVqmb5pZeiunGCYHu1AZUhCSgdReFHraR9nhdzY62rUoWkcEy7bxuuZZq8FsnjL45cwT5thPDgWpsg1Mem4w",
  "key20": "5R2gDmqUMPNPVJosqrjaAMXodAcdHqNfWPzKHMAxhhGia7P9HnocBTNBe1VXoy17TbetUsiKd3ycs8CHsb5udbXR",
  "key21": "4pCLQt1ADpGzmdKFG8dLAyv91VGZeVYJnhcYzQeMMAmy9Ddfn4CALKp2tFCXeNkUjqeBc9ECesrGgtXUqkfgNNHA",
  "key22": "3oYdjbJ52UtXCVTk8fjMBKhCKxRcBgpgLucMJTzLwJ4U3TMBp6quBSs5suAybJSiE4TxYFh8sdNMY1L1KFAqTfZx",
  "key23": "4tHqiREndMXSy26S4UwW3kxTEUwJjv5HwsW9ZsB1hHEiyXUza8P1bmXCC55yN1yA2a9rHVfnDtuofyXBpNHP5vMw",
  "key24": "5Quhgy5NGaJcvnGjmMM6o8c2e8jCDEZPb1Xu6iEqjHHLbKtmG2qQCLHdPiML3idP1ihirZU5mVY75mMebky6P43N",
  "key25": "4M3muEtD6XFyYYwsZnBDCJo5jYXfTs7X7FZ4QwsBmmAdciaWFTixVz5zcjjjWoHVLZQyS6TS3PwCkJqgASSovpEW",
  "key26": "3vYnvTBTMREmXoUNQuVKzu4unjEiTsouCErE3kSMqkXK5XdfqE8jz5rPpdEvpmWaYRB5FbcMF9bNo2zE6qxX2Qkt",
  "key27": "56Z1YEEZr1rPQwTdpeysCdm27jcPLUcfkYjvveLmGprzvuCCVJxeF9FzQ3pEw2Q74rYNDqF8jirKq7pqnv3DXcG8",
  "key28": "5RH25AdtMjTSzkgLreKTM6CwHheGoy6sa1MkG8vUMbLA8sF2dmbdh2tJhNY2qN2Tq4b3XU5w6nwtUThtFDnjehDi",
  "key29": "3NvGygbgYFr9Phi8iB8eJn1MCVqpFPYCkEqTvdxnMJ2UNPYTM4Evx3DTkHGymNyDx4zW2mkhh1qCLy2pFW2GbKx2",
  "key30": "4AbJxWwYFQWgf4WMCjLS3WJpN9q9hvaXvCw7T5732JNAtoQzRjcSESXTMdPx49oJsc63YmG6fPq5opoPSQwg9m7W",
  "key31": "5gAbH5cdjhqsV6KXy5YL7WSCviJsETqv6CXagXfNaL4qTyix98joydSYkgVgbimQt8bzWSjUwPEHc7gFi5tafNGp",
  "key32": "41jddNKVPvB6SRQjg5J8m7wPPFULPxoE6F1WbQzyD9vdhKJePdDknWdz7EdiiSuP4u88sXd8DrpwXMbWzX8yXrRA",
  "key33": "2oLtG9g3WaUnAEowdXXfNLhjm5VAeZkZQn46KJzcrXfXpuyEG9gTQxyxqBMTCpUeAB9HoLkd1BBWvn8mxpJL8SRu"
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
