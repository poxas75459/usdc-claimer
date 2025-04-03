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
    "2sGu5PkHpz91vGTJjvrHA6wrmcgJXU2Zi2NnyRz7tePvVXynV6tXd6au3uRPD72713k3ifPwTnBaSs969vR5Sp4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yZb9Sjhj74qTfSNkHm7AnatHo3fERzpYSn3a8KCzqNPWLn28B2D5VEpLm61Jjbyp7aYFY3BNZeKwVatY4T8nH2p",
  "key1": "2uvqeCnW9B1xJuSuTbZqZFNzNyTpN6LnBSej57DGMATXQ2WUUAEUpsUKvWGfKq8gNaNi7nPKUqmWet6WMibM9J5k",
  "key2": "4qx2TELfjyMHEPjPiFxBLidJcoxgb7RRA75gbU1SxMRukdoannV3zA6fTYZm36ec5YsacNCFFD4q36WHA7M83yVq",
  "key3": "5woMHRqPKbSRnrkiE7yzLVd8RJ2a4KWpV1zn1osXDAfmRjFG4NMdh2djur67araRnU31U9YL7LbpKF66w53o2CKN",
  "key4": "4ENqMDnzcFnPTTbrJ4DWokcjdpga4tNoP6bP8anEeTQBxxYTbP3U3HY618KP7Uqd2NqMRcq9teQsQMB3QwazXN7U",
  "key5": "3emAgMrbf4tYFav71APWtrCA2ah8h5KWPHAozVSrBefRJDe2gg7CVjGzA5RkzLJMLxBEQrwqNft58eHxw9DcqpJV",
  "key6": "PD73VEkXahHT1FzEM7RBGwj6vBtTssiMN2zxbRVAbF2tC2BxfDGLM6PJxPJwhhD5mJHSTkhR8RRGbDem1W96byc",
  "key7": "2eSnN6YxwwioUMHNWMxNXJN49p4wQ7G11SWsGyafUzqrriSHPruhoREwheBmCXmXm53rkC9CwcQestPy7fhSfLpJ",
  "key8": "5XjNAHMh1RpXRma7yDWCJv4BxX3gkkAYAEgEHqtk8FPpKKpZnYUWrgEScsnA6rwLvMQxQJYVRVNitHfnxZeaEeWj",
  "key9": "3eUAcmGDgTvPuwAWggs1GBWWcvFrhwDkDqrLRhdJi8JMGmSpgmkoAQ26xXkpXohuRrQ4zQyE83QbSMuratzcNLSu",
  "key10": "4Wz5fHZHJT7qhNXRjNS3rT6u7RwbMXaX81Da4TktBT32ru8z1ArhD7oNtuenxwf1PVUL9sMASwY5yGPUBdUDBGQe",
  "key11": "2xhvHhSpwkX4ENyGK3kMyx6v7wkPydqJHZ1ae8Ug9WNZeyzAD2mHH72cr6XZn6akTe3afoJk6kApZ7t76icupVJ8",
  "key12": "3KT5uUknyCePsDPzQnLLdvNkQAP4BAx2wRQChmaNGcy9PGtjAjhu1hSAA6DgJ7RnFMrLSMZtz1eQk4QfLjmnDLDS",
  "key13": "2UjqdkwDAFgd32mT6cqJDem9YVHpvJsAvFBeSwQqp8m7tLg5Mj7jZN9DuspS4424JasbCVuxmF4LSBLPp81rNBWH",
  "key14": "5gYLiKea6uUyR9AhB1G1pece7oeuQ7MXUVY5oAWg6JjnKQjDqDVSrDYgphM1iZw963vyWziGFLpmCbwpYiSwUpcS",
  "key15": "8vzQCGHmJjxUBVR7HGMHWtv5guPGuqEq9bThrWcVCUZqbZEMW71bbMVENbfLP7LeDQtcLYDcTR6R3iPVTrvmUTe",
  "key16": "3586vdaXNhZLgq5e9h8FpZAo72gh65gVoi2SCTyYybU7T9hsxPtoQaBYhZvWHoLWHTtNgdWu74ZtSrQ4xuVDtqDi",
  "key17": "ES2LZ6bHzWyQc2DaRPBygMiacfnMtymc4U4ffyG3rTVCsXMSGat9M7ioh8E1XBWoJ25zKR84qEjy85X924nkbzz",
  "key18": "ThhX2CMkyCkkZ6zrekDoD3n7ZAbVskyHWi2NQuvJzXptsrZAR8SssQXjErBnnVi8HxgbjQ2UNoWNXkcgTTwiFxt",
  "key19": "4oCPGBtbakSkWbAMZ7N8TZ8GVrSNnZfqrJBbMEYivE15nDDwEupjVJvw7nF3vjuW4GdeZARbftQfQ62gf7Fz9A7s",
  "key20": "5J4tDQRCULSr5nYf7jhe3Bz5CPrG71tqLgq7DQvmbm2bv3WqN7CN8HAe62yX7AE4DzxWT8VmQzbBbeTAVZdNRw25",
  "key21": "5RRithvHQu4cqmNKDPiW3VzguBPQJKCrC2F6u4xafJGfhhmiReFzkFiEvREELFa3x8QdRurUd6FaDTgmv4DQFQhS",
  "key22": "C1NEpBRWDbD8j5g1ba7TedfLrZeguPVkL9otG4D5S2WnPixp7KRQ8ENLnkQEQoMFtPyXYiCQJKYvHersEomPAdT",
  "key23": "5KBkbSEQEL2TBK4xxH4A1vruzPkEpUdnL9xDcztcmGYmP7TNNVb1dFuMckT834f7VrwzvQaDGNFzbqWDC1BUFW1s",
  "key24": "45aJg8Z3VDGMPAhqcwDSEh5GuGFy2ZnuB3zDoekQG7AR5A9ZxK2uGy3AAQrmsWVCm2sLKbm12NQgvxzR4J3FmZmz",
  "key25": "45pRTGEaRb3n6mEV7ynCqHuNckqVGLHzmb5s7JSFqmDtuYHfTEEFbqAsTq6gfdK8DePhjBE2HMkuaspQnQtSxorz",
  "key26": "2Km8HRkXf58qRfnrS1c3W2H8wwaW8FCWwTbkB5fEKhEcGPV6wsEbGG6zbgdtMbhUH46hz1t5u5AZ9C6nBQLz8KbX",
  "key27": "51yD9fFCQ196T4JnQv77nGmjv7UZdDoRDsrSyR4GUpF9qf7GKvb9oTRZrerb6jkTxLMgvhmET97mApbAzL2xRtsd",
  "key28": "4cnGcfrhXWpxivhf6vfsngV8s7nsvMB2WDp48urKJiPWxukjpZcFv8c4SowoYErorPCAP9L4wBqvyL7GUbkP8t2r",
  "key29": "5CGnPKdniWxB27ZJx1977pZethsT1MwHVx4WfX3tBTJNUZZ1FTWYFcH3X8twndP89hLSNq1gwtBm2GyVkqZyZKat",
  "key30": "5jxNu7S4D1XcHZAob32z6zUUn3ChhbjWpG5p7BiediEQ4nxSVpWbpACVSCLJ1iDS6Jvk2hjKJDw58iDTjAe5gAkH",
  "key31": "4PcRpEga3oTZmAhkApQxE9Z3iwpCH9tQea57GT64gmmJxcMohWfjx433gwnH5JNKzZMPWGPHgZp3Ay8tRgwHMm38",
  "key32": "31V2tKQM6UBWZ9xXt18CwkkQqHThkd4SoRRWy1vr1RXixR5pbVTvaHGGrMnWFRvHuQnLxpptDwo9fKhAvq1q7SSQ"
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
