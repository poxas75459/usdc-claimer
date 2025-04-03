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
    "2q9VQM29ovMbUsuwpy8HkP2ocTr8gRJfvmpTc7YGXtTvTZMu8cnB2wuxB2hV9eYPAThxHVFZqjYS3e5VDDfqsnAb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4psCJV4rkqT9fCZ3MqBdSLwWiLVU4tzDB8vGA7eFDAZczvptDJzf9oicAGrfBDYzVpVxEikZh97iMifNG4XQax9W",
  "key1": "4BzjqJBtHqawYMzVw8xEjJwrtk2j5W5k4TCC6znE9dLkLEx9UrZ9p1o831EAURgejayCLExs86aneD9x4rK9zbKe",
  "key2": "41Jw3LSDLwwmuPerCkd9FoX4oMtFQdafWhK8MbwqjRc1cNXpXMhc6dd2nGWzDw93AU4Guy5C9nY6W7qcLxpYwqKU",
  "key3": "5ZhC7cb7XTS8akopbGhoMG25sScXG5ZnLJw6rhye6vpy2pu8xuUDt1VbztmaFAmawkdrUprtUwPtArCpePAZihi8",
  "key4": "3rmvh8Es5QPZ81EENFPYwtmmne19vZh1KRNzRN5cPoJK39dMKfm27My8WjSD8sioRHMobqBzLvuKYuC3Vm3PFVB9",
  "key5": "2FsomaNDkWLVYrGQr5YQu9XoBxwGr1S8kQd1iEiATo7qc8GQj8MXhgLpFXDJDwJ534B5f1dnBvzjV5oRydo11Dn7",
  "key6": "42yFUQQSvwFyWJSYqGGwYrXoGHgtFb4RNfip8crr8Y5LT1nHkny2o3o7eMPFixfLcrVh87hswvfUqxjnNvsfJTwG",
  "key7": "3kGfdF2eQne3WWLNqLMQ73gyMtgiZ2jEQcmsk7fnZnAsWTfFjZwwsnZKkR9djZp1GjBQsB44v4AAg2SA4pH7113S",
  "key8": "32KgkpX21w8x5PgyHwPAThSwnfDC4AUcujY5MKewvA87tJYCiiCnvGpzCqve7KbNUdahRy2jG44Ypg1PViqRinYj",
  "key9": "4ofk9UoX4T1TwkSMYuDNf5PHEsknxhbECuNSqufTvszakxFQTw2CW1uARM7ALyBnnwLKu1aTGJ2ujtv7WVNN7duf",
  "key10": "4Qu3f5equERMuKVt5NwHA4Qgz1AZkLSLQK2Vs21QpLBUrQCtxSXETDYwKX7wRhMDkfRH1sta1i51nmSco6TCNEVb",
  "key11": "5V54AymgDeV3B49kZhTuwyHAKwNpvQcCB2B9ESLAWvDWZthB48ubrzU1GDFWBYgVeJ1kgsWXpjjjfzC3KHDfUeJG",
  "key12": "2HiPdMvnn6s6paeXGveGcMnN9MNmDhpAAr2dAJAaFfHLMGYzGBkfi4X2tg4ybyKzENeAu1aQAHjChoKwEWo1Tuu",
  "key13": "5wHtAzNDN6qQWovqPnfuBRkh2MxZKycyXN3kpW5sSxNZuhagpTcx4CyMHQNsNMo8q5FmuqRdXPu8joGrgiEz8FbK",
  "key14": "9jDZ4hYS9LavpQvMLWV1Zu4d6yQvnM61RTxDZviuiDMLGuqqSAD1iFLuTkmxv8Wp8aHkiUx5ZFeHjEJsJwT4W1N",
  "key15": "5jHRkNfVtM3rGYtqK3Buhv8LkKpSccvAXQFbqnb7FE26ReyZpX5fNGt2UwXN9Bnhcp51nm9mtzoSa6EyXai2CTzb",
  "key16": "3k1zXeuiFf51aQPF5jz6rsru6VjCQramBJDEYQbmAWQ7QBBZDLj2F36QSp9zEZ7YpowAVszYBn3bWdaUvLhPffoc",
  "key17": "2tK41dag4z3BfBNx2rDdYddz8ahXQp1pWkffkwMByezCGtSpxzLmSPM5KbWSch5C5jEMuVq6rkrQrBDsCydNFSHG",
  "key18": "3Crd3ySniiAtgeuf6uPjuJSycyTUeUfVKYAMQvHXUEEGkX4QiUE6jPJGFvy5ddAJ5vntWz9usJJLbidTNoiny7Ej",
  "key19": "5izXmMYkZM6uVteJ8jSnrMQp5ejLjgY4VpaDK2SPZzWxF9PzmaL1dZmTh1zrN9NpowNhY86cF2jVe6JmWJCosDzv",
  "key20": "4H8fV3XxkUFtTnvGHLwB1bxia4LCLe7MGgSBb9qUsaZCq9HNp2RSMvVxcsDikANf5Jg4LFZePVdiiQ8L1NqyB8u",
  "key21": "My5HKwQXZS3SHENSePMrqQDnunWwkkNNXFerqnUK3XgXsHPhY338vSW4Cm3bWEDQQtmFogduhC4gLYqug3vFKi4",
  "key22": "2scLcfkVYGK4VFZdvmtUFr5CXPjRfNBsSxDftgupfuQqpS2NVp5JeHixphui7GfmtNdsEDUjKKFEHLKAgUXbey8f",
  "key23": "MoDUDNiGyMrpxp1EAWqt7YMKeeU6ciFGYduV1i487nsQMyMKuwLWTXSo14pSobLrRLAGom7Pqoiz5zK6LG9LkEE",
  "key24": "4PfYiVsSseaTQw8wM5drTp6j5CE7tm5gZRKzV9pKcsuXiCm8ENQy4ShBPbWaDSkWABsqWQ2P52kMhPeeVq4iwCyG",
  "key25": "M7nPWYnvBtbXMfXN385aHsPGntSoGWcB2JdCFxFGKRwmkyk64wTADvEsiJskPfxah3c7aZVS55moUJ72zk61d9L",
  "key26": "34XZbsMKRjqi9zqoGPUp9QbNoaUmH1ZB5d5S8281HE6kob9fugJhuqBxfDUs3VcZnjPUNCoJponcTZETDQEuCCuL",
  "key27": "64ZiBg1C5HgLnz2Xzsizw9FNPDQFacqt5onSbYUBXSUjnJ6ixtT6FUfMUHoz1mkQQweJDyBqNqRApGxgeHs6ZcSA",
  "key28": "5PgRtUKLoA5t2SdWN6DwMUex54b6thMbmPxfu8HmWthRKh8yL8RuryyrZd8Y2fopQMgH6TSsPziDnz2jywuez24i",
  "key29": "ezHoJrGLHL6KPmqucapid1gowvXDUdNoYkV6LVQFdhuR2afQcitZxptUmParSW1UT8kcykV2MpLnWJk8HBRF95c",
  "key30": "4Zby18ArBPMGDrkmmXWVoo6aDtH1t1rFhQvLJfFYWJRoT8eM66scBv3SEHgmrbxm9WGwejpU6Q5ZuLTvnKhFjmS1",
  "key31": "5nY6NvFgwZvNTRrQLJ98Mf3FvT3dXJh1a41fUV8qdNYQ122J8oBWxAGJTvME15zJ7nBmWZRv36qnMqvSfcf5GGEP",
  "key32": "5oR5SNMEsHmjfEQPae8iyWbD2soqENX9AXH9AShv5zC2GcAz129nBGj1aQxMzDTYGzhW76b8un4o7uaPziQJJK8Z",
  "key33": "cWwUc44Lfkm7cUWffsFVhkUrZJKTAcaS4FgkX1ks3C9ia9mtBmP9GXEKC5iVzE7QX8iwTmJLkLAtg1FfEiXXYaZ",
  "key34": "3xewh8qFbrsw2cgkwnxML37DUdpjyn5HcLFLZtX729pavsgYBga7TnALddeNngibeg6HjHCBMphWpWmLBc5WJ5Xp",
  "key35": "4vGbnKp1fD5nZM9qimVupfdzRJp2AQWVN5sJHFPgiqqURiyV3SgRjvDf5G8pEzynKuid85QvfXTucBdoPvrbydG7",
  "key36": "29ioNENrqUsysEE8tPxwFZ39tbfywzBR9F8bMnptr2fFn44UbtvYwrG6FyDkWxQXXpRGoA4XVH9uPga6wctZ486i",
  "key37": "4VYpmrUXiLEBGSPRPLYPw75mR6B1cRZpr8KEqURLwg6H4JyT5tWykPiuEMUvwrEpqRwgXLfCcRZo6G6mrLDyW3EC",
  "key38": "39YdHonGq39Q5yfeAGP6oXBGfDXLa1JKFMYEg6sp61KAxJ2SRrZYhjYdg6HkNivfnDXGEJXkda9JWBWz3VxWrj6G",
  "key39": "23YKFdk7Z57nobyHGVoKhY2QHjHduv4SG89fDAhuLhJY5ie9KY2BH4YKQ561XaGMgRMtBUEki9RRumtvyb2ZLSn7",
  "key40": "4R8kNrCDjg8V828HoakhMYLuhUYnTLUexaFvRjkbbcqbGfaM1NbjKeL45igJPsCJ52pumg6FyA8gCoYnh7Jk4t6L",
  "key41": "23pbtePyJRp84qxVcw3k7NjfAzEJLCi6jCxWunQm1XJbi55XXhCM22PUZ7ym3Aj51Xcm6dvsjMFfV9XpQro6wPfq",
  "key42": "42cM8yJanw8Swcxuv5nQppeTRPHk81i6mcjayZX8ZqF6oHqBBss4fx3FLcecXmjhsKqvN9GoVbhS7UDDSUoUtUZd",
  "key43": "45ESgmeikLsgSM55h7iQfNfehAof47QNsPzCigJ4svsJhPcvf6hKY3GA5hRDTQxQmPvDjxC8jLbxAQJQs24iTxpu"
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
