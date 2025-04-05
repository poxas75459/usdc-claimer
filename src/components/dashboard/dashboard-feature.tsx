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
    "2D6qkCKHMqPVgCRM9ufXQfCkVVKwN1152RrF3QVEk1K9TnEn4FcQfGHY2DS3pSaiPxiZqjppEioBgXzHVzUYhkhp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xrqd93tEcn3xu94VahiUV2Xhbb8445crbWUzP32fpPbhcXgWQUCmECqeWL2ht5zL3wdYpHrdFHYTAT1GEnHiQxT",
  "key1": "2xrszHTFaKUGmj1VhX5XtnURrB3Fmjc1zkbjPureXaMntCDMvgRjYKv6LQxVD2CkMo4qznBdtMaf6S8TGCXpqpst",
  "key2": "y1t2G1LhjNmzhE7JfjmJHxCVcyMELGGBN7SCqqTvUE2NRsrWUH5We9AcNNi3McJ5PLHSK51iE2XQDcG49UKY1vr",
  "key3": "5ye2D5aLKw7Axv9genzH5VjLfFW7xHBKDmJhg4WUkX8sHQibsaf5N5z5ME4AuWmJUcz2DK1ir8okC8dhJDBUfWuw",
  "key4": "4pmxMAjqQGpabShjwDZZEVqf2dcnoGKn36Z1UEYqv6ULJGwW5t1bPQG9jMA4qTN9M8sUF3afXrinQUB7KPXGcRor",
  "key5": "RTGD5YNwf4vmyAX2F4UfG4k1cftQoPiZZd8e3JyjwzhyNYYgFPuxxUGS3yVutcQcuKxFmtaYf9zJbh51SNWysFc",
  "key6": "5PpHN9VL9CVvsFxzoN1jbzdUBXuhBFuu81pZJ1fx3agHmLu5ptJpnzXze2AbHnFAVk2sJTZ82kPwkPLrb449S9YX",
  "key7": "4urER63W9CivstHzFR8yh2hq2xoxWS1VTTi3gfWiBo3zE4dTj9PriRXfhjKBLo3h5GNpppTA55qzerf3fwtpUQC9",
  "key8": "4qtXx74nDzY3HPuCEzJvrWC3Q4HwL1Fyf6DNUJBqeuqx269Amr2M58JEHoytm8kBq6FjoW4kxPuP6BZG8uPVnemH",
  "key9": "563URGsZDNoTnVjJHmSzSfw18vsTnx6wb2Sio2uBq1Ppf453tTb3QLhbfHMaFu79Pb1SHG3uJWfpB1hBinGmQtQA",
  "key10": "Gm9KTgJj7PD5ooB9bJenxrhH1WD2KPHxSEiqrvABtijPQnS1HVjQj2PM9xpcMzc84gChPAWPt6ix47HrbTei9ee",
  "key11": "5br42QecgWkzuJfJFLQKDnFiv1JuedLMsykcYjWYWLPjg9mR91i1ey2Vvh6RN3BghKsSvexHiyJ6oZmPucohhYk5",
  "key12": "RCXddbVVFAFUexg7HMJ9cZ2NzRQDE3ZwEthppaGBoRr2ZDESb3qHfJSu6cV2z9g5FmeJYonLnnCrx1ZipXM7uXF",
  "key13": "4ffPevCx9gSBHPWguKau9v4ZJ1BK5EfydNRQXPTgXXajigME8acov1B3PnkXp6X8HunLyiDd7ch8quYBYHhgWmym",
  "key14": "3YNfEJvc5RKUtR3bK59QTYVE865BBmBaJrcK2GDaQu9CA1K8iuWA72fyTR2wsHAUT6zf922RnmwfCfwm9bH1P3dn",
  "key15": "42hJ88CVRuyeF82L6rwDKPgX3x6zDzjzA35YXgNNcEX7Vt3Ua5LyTZzojfGefrMvUmAXNyqjkoVweUGPdhKuYqyZ",
  "key16": "YHm688ocPdeF9tRzG8G6RYejpLmSzVTcrUraHVQuWCs5ZrrgRMpw5sgtg4v9xFUxQxrMzW3SS5zHp2SENUD7iaj",
  "key17": "5LW4d8DDbYXmYc9upm3dYjgF3RMSuedYoEKTyvEuv9ZKvKGSn4wPm4aJux2H28GHKsy86tCXz3iBTB1eRHhxsJi5",
  "key18": "AktyPhGvm8wkG5Xonf3UaRCCHnaVpy2B7SaVJLJfuuQ3URkXsALEE3LDPcxg45ywx43U8G8Avpn7gdHw5K3TzQW",
  "key19": "2MaUfhWXTT7T7Lx6PGt45JNYJhMn7FD7pa3yH7hux8fG1gyqUdeBhp9KdpVzGzyJBo1hLVMC1RZxyYTDg3mknHAK",
  "key20": "21B9TDj5wmmJVsdugJoyKAaev31Vvh2tx6aWD3iRMYZXd8o3btRUNRKSXbY2B17BuQN2CSknVfqnS8o5DjMMqnqD",
  "key21": "58jvCkEAs2qCUHLi83FsKZg6M4uk49USYex1aYGEwSF1hLMFtFs86Fuc42i6zJj1mPsmwtT9VQEtocM5tPntv47p",
  "key22": "2P15qrumwsFadfxCibXz3QR3hEwAmQVHtvSqW3xFbKZexD6u6rS6x3zJsKLhxv2D6pWWKokm5sTaToKW52GS24GF",
  "key23": "4MDRk9tcHroZMDY6PZrVjtoocKVnfjTwzBvVXodYiTGhscYsskgz6bGRT6ZvKXdf3xsCEdS21Ur7kymFm3F7snSC",
  "key24": "4Cu2WmsaHf7BCjFkkK2s235u2VP4LzGJ3D7Mi3xGRnGiZ4m2BeUXftF6zuYDaENY1Y9adnjbUsmCrHUzeTrcXbkz",
  "key25": "4E9zF6v96GQCKA5mTryrfRnth5eNesEUwNLo68EREh2R9Y4NAAvoMphfEBbJep4z9mVbD1PbC4YbSFMUves4LTkk",
  "key26": "AkcTXJG47AvRDz1n3ngmTaq8A8WFVcnheqiQ3vA4iVMiTuoU4jX5K2v8G5uysMa7rb7ZZzWG4BNYmeppydDBYL8",
  "key27": "4KJL4MSmbiw24wStCoKDc6vqX2cTvBVSwBaqJgCURv4mX3s3Q7fnaJzZUXXRtC7kzhjjWBw3pn6d8Si7cyus1V1Z",
  "key28": "2WohuJd8KKUXUPCmDdyN2UPcDpg6AFbFiwgK2MzqrqGikZzBiuEHnfHPrdCKeujospVRQHDYFWBS3McydM7ePBvi",
  "key29": "288AJKBmcEtRFAL7mhW6bFKjfdkhcQNdB1h1yB2zg4ESMGgKyynSrdLZ4A984CbbrR8rBcKgxMjbcqwVRo2eivSW",
  "key30": "3rZbu38CrQYoSPBDkjaBtNuvYKiibnZehxaXfs2VPtvFZYB6XtszwZ2qJpt4oXkn3jaHgzt82FFMyANkxuLahtZt",
  "key31": "rBTrrnGjkVdqWWcSGDAKxZvnyTajWFA5FyT25qV5bchpVeT4NRkfBCeFVgK4DcfNkpeUDreQa7HPijhEczTkR5U",
  "key32": "3FG7cJkT7E8vjKg8jd5CXQ5AeR84bJq8jXkXxFNDJGwgvh1m1DVLaQFer6zNWHfjfCbK65D4zeyB17zRdYLPUEnQ",
  "key33": "2ijpk9oty1onRgupNcJBKGXvRaw2dnoNkG93LTaag9W8CqXwJ43RT16NQ6EC1DcawG3mrB85USzJyFuUehQTUsLt"
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
