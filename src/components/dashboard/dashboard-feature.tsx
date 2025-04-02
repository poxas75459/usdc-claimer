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
    "3Nsw2SJzTRMXGcASY4oC2wk6hGnAUeXnb6vkCRL3XqbVBu2xYMdYvAbDPsv3mtK3GuoJVZnFKPoiUN6NN4DHvvsV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4npwx6tUbkAPgSD2k45q3R8coGQf1Buvj5rPzQ1pJ9UNubZ69SQjPPU9dU6rqKZor4VjBEgMuGYT5Qr91mBU3aZz",
  "key1": "4q6Uvn7bbQUchMgaqzwhfHjxu882gmQzwZSb4abSaxhhwHLSxZwVx6uUMN5354AK6h7kRxjG77cahgh2tUAJmro9",
  "key2": "4fyjUs4sDdf5NdRJD8UtXLJkmWqcYGtgLrE8HqrvHkvuPZyisKPbN2dxafEqNv3mT5eEbEB3zNf9z1K6vLWQhtiQ",
  "key3": "bwc62nYAWJwSCcDwgRii7gbtTPxMqBucEoq8L8H4eTj2CU8aWHXEqqAn5AX4uE1MfKytnXokuVLVcrJ63uMTRRd",
  "key4": "3DxKLG5wQJtM5RiruZQRz5LrnbUuzUgNZUeeiBPGq2rkTzsbuah21y361igrX54kudmQYwjp6DtJaG8dx87vp9iV",
  "key5": "51e1mpV652ySmoc95WR2H3SJXFpz8nqb2KmR1UtWLb2wC13KbtbWQBJthtpMdBL4jaHdKJr6PaC7T6VGakSFi7K",
  "key6": "32UWDtDiwgELN5uAK7FrKnGpM6kKVsNcZCoCfsvprSin7d38Weoo2KGZhmp2oLJQ4bF4ryttQTVezpxvzUdziNL4",
  "key7": "2yPuHbtbeQPLK3kTLCXxYcbcXtYmMYg25r8yEiaE12c3yPMma4weD5f4S1cPgu26YaBfAUbhMJ5m6ZQDUq9D1yUn",
  "key8": "X1W4miDPN3sLU3cqFHrRXXAQfAzh6kkv3KzRcK878PcbSQVZP5Y6SX3LJFByJncLzqWH8ZtsxDrHW6Efga1DBsT",
  "key9": "CkWJd87Vj2HmTiuyvatbSRNDznfKSiNk2xiXgrKR4dcYb6929ZJhuz5Sf3qobU7fbDQ7WUxodhPLPuo4b9odZvH",
  "key10": "41y4c3qpMciJNjXcUk4Q4McNJhRXeh3Me5gW3hm85b3KEXtS8sQ3CVAQXCPxmTBNof3dLY1ETvcj66GPcMsKa6dY",
  "key11": "5p535c1xZd3ouUoZVDWDQ5mTMzAb88x294apyXv53PRnxELjBLz4Yn2XF4KStbCh322az4L4jmPvAVhABQYvmidE",
  "key12": "5NYdtBbtMgksURSFps5arZCPoDeqehYLUBpvArafnJbGhQ7iRK3zkPQL3rtyrqvf1tRLxwRkoymHFvqTNPiwxgAb",
  "key13": "4oHWBSpuqiYLdfWAyLVyYqsu1igiGPqWbFArWeBgL621ruYB7BvLVBefC2rYzesp1o2J2n4ppdZeJY4zfAQDnyF3",
  "key14": "2iTcmN7u9pR8867ETcUXGqJ8yLCRunbruCDhoh5WLuYfp69fZSZnL8zzKitJ8dnD3R8sSfW7wfvepVjPatjvRvaj",
  "key15": "4jZgjwET24jyr7tPJAbmBTME6vkgkynEThy24Rd87NQKHiYJw882AmNpV44muqQ1WRxNrBFHyfkZZ6SWVEdKxRc2",
  "key16": "2LhxkZ7QqfvkJmrgtDW2UDHjWG7DEzx6okbdNdtp4V1xEAKt4vGp5pi7nnGmiYD7wQMu2dPvuAG7gn1VthgEnSp5",
  "key17": "4yUReGwgxFoxspuitomwyFQoKi6DnSQZZmj7NkkQTzs5fdZL5kTvmXVCTsDXBha5g7xNw379iEzS8umcXRPjJFyU",
  "key18": "EnqvgUf5wasVhvUVz4dsRjsdjSYSzx21AdzyXdbjLbbmNo264LHErz1zTBX5Y2rR4xUJstFGQj1CXmJnFmrNCXE",
  "key19": "2gdMQ1jxp93S18fPj6KAgt2AFfCTKEgjF5sfNj3pZMmUkZeagNXSCLanCnWVNayYkco1bDr8UAT5fzMuL6e8AH2K",
  "key20": "kZoinATDgG5ccbheudNk4k96FhAXxscXJQyGNmUJtBUfVV7VRca8tjNNWgidVGG2eqSMEa2M1WMKHbFKifrUc4d",
  "key21": "529GMZtBMTftcvbVYWcnTKqVxvf1HJJkJJJ1wcBnphK5fGk21X6JKWr8jQFenDoEgL9SZr1cfKBr1j4JYKH5SdBR",
  "key22": "252Ehs2PGcc71Cpr4smszbUUtQYoc7eudXVwsv1WbXtukvYHgH5bFJUg9YoFGcBKRxUdij145mQk7S49tDEevXFi",
  "key23": "5oxGW6RtjYMmjuz8VSb1VYYLKEyR5ArDpVwaGTDEjCGwksQaUaNioYRZ26VoNhQYmRD7smMrx5vf77jyJXKNwTVr",
  "key24": "31g4ydpRYNvGiLNJWXnBMZisQECRzdEhxBsprSitVRfuBNW8sbKz1QhgUFZ7c325J74m8ewEHGQdxxGpnqHMGy6Q",
  "key25": "2nZKCXtML53ufwcPkJ9GAt5PQEka8TZEREqhgbtM3SWfzkteGNVhWeDzc1KiSmSyvt3VZs1LYc3ii3CyB1RQnspr",
  "key26": "45NSnWZh4zV2qASFEseGtaVk9xhGhgjijSzTGUqZ99MUH9rLrCoXS1x5hRLsZCFXXijCCJXjvacnpahMbhwRzuzQ",
  "key27": "3wNEUhx7MCnR61RzSCMNVmACKakKmFjEUXHk1Zs5aUmgJf4J6qvAkMt4BmfSaKHkmyEsR3k8bmuq1zetrUSm14xt",
  "key28": "8UfAscxTuVhyvhcWcrpNgaU9gnMyudHmuWommu8x537if5hdtPWxtdcrqtoWYhXKbtB88DTGQ38iqGiVUcFko7U",
  "key29": "31HRKWyKP1UXYpDaBkU3AvXqYFU8hJCTVmAHMTU3tazYqDzhNoWuQ5A8BNjjrsYJUN59AtXJrvbVZYXqPs22WRmv",
  "key30": "2feB4gptMQV6iAX4xPLm2nLKZLA5EVtH1yoYspVtGgpeQHvdTk3Z1QadhHrtQGMN7LCRb69df4ptiKyLJrLDihqu",
  "key31": "2QzA5gScU2VGdc9L4GpP59TCcabuoxQ3rRkMdmWss8fN9E2vk6ybuHXTFMC4B5EQQ9AEpEF5VfAcnw4RHz93rBqj",
  "key32": "zJkFQQwTuosvMbnjDcd9kx3tiMkgXD58ENGnhYfizjZ5a2EksB3v3heiRDvSdF4VyHoHv1J4oS6KwR7ExVkJpHV",
  "key33": "55N1kTWkoEyjZvS3PW2GuqRLJsdLuuChDWUMnZA4SUwNp3oZcQCsdurnNrPA6ybsUmehbEijKuPEFE2wnQfPGK7K",
  "key34": "66bt2WgbHMBp8TBLo1HeF78XQAgqhPvAXgUpfS11TMMGc5LtiCDN2ewDSCmq1VwTGSS3aTXFKZNXrG5LhqAKYxYT"
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
