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
    "LfMwjiaUsY8dkQXutehAzQQnc3XjCkkBXN3ysB99gYKbPhMtMi5uzRmiRVqCqE48GY2gpNUED3o8gtSJNGSAU1W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A12FC2iSL6p5CJ79DDWQzLH2dCVWUKkNQMpAG2nuNLKPVq1hFdPVXuhU2e4Ho7DJMSdEGE9xWtMof9j4WoyVxUH",
  "key1": "64bNVh8tVdX6KCuDXMqDq7vYaGu6qnUWUmeaR8mTr7YNySRFysddHdaWpfgD5KhdPiQc9rkaJH9RDsgHKsyEwqi2",
  "key2": "4c9DuWEdtZBF8vWQ1vBjfZLnsR6igjQUoVfc176wDUua7uNmY6bqDXM3EzfW3fQh2vaspaghTwR7EBs9SghvbzQM",
  "key3": "2nPTjnUXKmThvjrhrmD75iCx6qZgYJNeDKwoz7j6sMFVQMbc2mbukG6muRk4rLh6PX5wdT1vFqGzDdapTKtE7nzy",
  "key4": "655GYaBFtFcpkXxEN3otu2nme4YLKSAJChtA2WLT1rHgFVBjswHfvzapuoVB8X6SS2h5TxXKbhXFNTXeSNJRc5cZ",
  "key5": "5FGLBm37epXrspyGAz9vUhAqm4nBGz2FXEbKmmeaH4wqchcSX7ZBfs9Gs56Y3u8LsiLytDwg8o6jhEPaXQZriWFD",
  "key6": "1SCDuENopMhztyX8AnmNFuUtA2YyJQYmhuP4QuZjw2GPf4hr3PEyPZkfk49YRCwAWYmus1zwojE5Pb6LQcxE6FV",
  "key7": "3mQKofWAZGyHZ2h65eJoXgSFzFqV3qTV2jYpqhfoGgAch25JGj3mWPWkDyERkdNERJsoPZDogU78pDUHxKLivFxR",
  "key8": "55ov5tnoEhcdntyJ82sebRuJSkAQtgdQKfrSMALcjttkn69EFMyXbRC4kYKv8BDmaNoFeV8iMPCU248TL33dh3Ga",
  "key9": "368gYNEQZHFe7Y8NsCifQ4zcoAf8YfSYdDFNCjdsBWmJENqZ96QysEvs7u9YhrNP7NG5goxQCUyeA7fzsHnvHjCB",
  "key10": "5TZbqy7Xhh942wmLfETK3DCFzfWFRNpfpzCu7rMSEepBSXj3yhNWd5nbQ5LGekwMZ6RAbowvV4sZtnfx6ibzqNNH",
  "key11": "2MQuMMndktzydD89LGrS2ngtXujb8RBavhzFrp3ELrzEtG86NeEN95uumd2SwHUrDc7T6NSkn4EXMq26HwZ15VcA",
  "key12": "2goBTZM8k1Rp1tenZa7xMQbkZZHENMraUdBGiNqHEhVSn1b71MpJnEmLpLSoDqaudxXdfmPUvNFoCikTrh3PjSqp",
  "key13": "4mmdHwNXdWbXcTTXSX2BU2gnxHqgQq6cmfeEiYmFrhenH9MSgD1hHAM2AKrEaaQxwV5mNKwsKAYvD4ka8uRPmQj8",
  "key14": "492JMaFRW2qvj5odqGErPZsKcfaur9FyHXsURiZiZn31j1pLWJnHaNvGP5v7Dqpos49dLjHBCdQFyxFqGdKa4Jv8",
  "key15": "63tmdUKi1XeV6WkRoQgzzbxn7DXWBv7kyqepCEKk7VFnLNwxGtmnnYhBZ8jvQxabVo2vSp38Fb5H5LZeckeYrHXt",
  "key16": "3AyvLfV8bFmnCk1kZevWd7WQJQVfFBBG9JMKJ7TrE13SvTVkkc1WPgDWiitgkwCa7dfRzR8qczwVR5U9KHVHRQ7g",
  "key17": "24wrdHsGCtYUKgsbkWHQBkidHpqmjvM2hBLLDbXe3GD59pftLaWEPfgu2TqsMjJovDendWP7yrPBpJ44Ws8eXgZ4",
  "key18": "45TusDP6xz54YmqvnT49M1FXU4AcPY5bcC8WfZKQnpk2XFuTAMAhYX9i9UrviGFCcEtYqdFpyHnNF21HozS5qwA1",
  "key19": "3j6H8HdfbMMYZJHNZ7UkaMkJJYBPZjZFxNdf5b26tSTfd3F1XCwo71N4VpcL8nfBkrq5xtGp1dPfXyPH9SoqpErr",
  "key20": "2ArYqe6dfRvrg6mkJMwcVwrQAEo6GS6YvtEuFyx1xT6RHf5iPND3JKcEzoKenCpMXQXRjmBSd8KjKbQVFqJpoFBv",
  "key21": "3SKhm5eKk557PQzf9CVNNP9dGxNeDWa9ZTSKAteWgeXLBmABn1NK4XcgJjjJssN5jwHxg9uscKtmiBH1BbHQT7f8",
  "key22": "2mssG1Nc6C1n61Xe1uYd96rTzkxErRDnVw9EeMiBV5x7eBQKWCdVNix6VV3cqph56byxkDZxugeeaSG1LNEWgDpL",
  "key23": "3zkUiM8W7R6eqswmSfd6nZu13wY5JaUpoVXXYtdx1J9cuuJ5fggAkzEdQmhs4ajiLXvARVV8BAkPXCy3cG9TckqU",
  "key24": "4RqDrSB4scpof9Yb93pZPZ9mtpcz99XzfnMZuQGEN76KCeXGrHvyL6MUqfJmG74qCnQmLoXbuvN7Mj3yfqNSXeVV",
  "key25": "r6tQDa7HwtSKSeXuTvJgtoHQ9Vwt5JaHSadtruyEMnW2oodrahsmY4wy861q72cLRwHbXkWkDvpkbMnKeXFqGSv",
  "key26": "22REQLihxZbgM1RN43BJnydi7ksUHQqySKeuMcb4GuYRu8qfbMj42PhtN1RZvo7WoCrh62CkNDUxPD3LsfsdRTCN",
  "key27": "QeXRXLcjKJGtzM6spqn8UFd4MPhxKbUFzLHGar6q2dRv7sJE5iLdeaY4mYjZ9ywgScMDU1XjD4T4z7FexhHmRs5",
  "key28": "MkyoD137zxNQLfp5GeSArCjYZdANzhT1u5QGGChi8fHvLkWXkWsVSp13JzeR6qs69UKu6vpCch1kDEwtjpavgDa",
  "key29": "dwWHmCyDoEefhKCifE3onH9bjwMfqjetYESfpAJEyeLatCo6sCejE3iqwAXTn3Pt5D4VBwocvDnhnYCTmaL1oNy",
  "key30": "4wKeUAak9vVEUD3qjr46bpdAiczYru8GKd4hbYNJ1cciuiBiALz4ygpS87XKiEtishytt6xwj3ZBiNpn5iG4NJYz"
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
