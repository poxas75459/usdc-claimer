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
    "6Euexh1Xk69QcXhMGTttoKNenaH4C2huWcVgdK8UKbUVo59q8CCC8cqqYtV4XoCreAopQM4LmZDPSyWb47Tc861"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nbCkUrCVc3rzTWpndSpkeboe46sUHbCioKMwjteNhpyYfFKXT2rSka2yKHNvp3TSD2UrTnhqNYXhhTpUAxpDxxX",
  "key1": "4GeSXYRHEGDw7yyEfN9yG1ejFuUxQShcq11iDvUwTnzcr4f7Mgj6CN7suRuJSzpmZJtxB5VaqTi1PHcQjZ4ydFvC",
  "key2": "5cz7gUQFMm7vLTDx6aXk4pK2568ayYbTwX8jdJiGQQ2AMr2DmeUkGKREdDM5wY9ByVbbib5CmpaqZv5G2XZ1cHH",
  "key3": "49UWwUtBj9QrCZrSpxzQFXR7LrKq1w3PixxQg4Md7MRASYq24KgeJGw1WNo6cHQqpeLkv3t1L2FbmYvx7b8rRTLe",
  "key4": "3ADq1kGCUjqAP59nkr3Ryeq5U7rsSBYUSLvhCQPWNFFCZTtiJJZvZbgKyfUUS1TdVTFizk7Q5o9DXf1Fej7Na6cB",
  "key5": "QHehhwadJhGaPGUChzkwzSZENocYNo74ZVAu4UnD9UumaNXsgHfjN1cDU2sJDtzTgJYArNLxe1VNpHckXk1C7dr",
  "key6": "2iESMMUPqza64QTz6sRvbp2zm7wGEk4jpG3Wpf9Z87gK16aT4PwCWn4Pf4dN3S9Q7EhsvdaQnpbCpBL3S7KETadX",
  "key7": "w7LhNh6mEmok3nCV91uhBXrLSjH8AYECxvnSR2wxsL3aEGR2K2aLoAGkRScKAQmXD3ZDc5rjrd7DWTj2roZ8iW2",
  "key8": "3nanyJ9PG5XJe9YVf873mLamER7J4f8oPH3hkDbb6Yg75UGe5KkUF7tisfrHGJ3eurTfSEXEZoD52EJoK7ZuMFA5",
  "key9": "5n3Guv5myhJZkDt6dNAVmAw4Czj8gjYbGwpCCtz6295v8986Hiq5paeQbCEnorUseLV29SSw8HqQuEeWU9Mw4tvk",
  "key10": "5NFn34enJPHWutYxTmdvPUS1wHh3XUtAsyoDjU361CFit5ov18kY4gmTPvfNf1NPZVPtbnQoyPow7sr3irQ5S9nZ",
  "key11": "2xzVXtrTCaCuY1a8h2RigizPDnuQA8CuNKJ8TZhxfJDjBd2XNsJY2oERmgvqANhQCSkqusxnyx4B2QGAsYTuyb9d",
  "key12": "5BuBBRRWso1JgtYiQDHEekw5gfr7TEvx2dcPGkS19tkJvZm5VtJTGhNDDGjNrajvePee2P7KSSn8tkxV5v6LyCqg",
  "key13": "3tnTYyN95qWQ3G1U1NVJJNZFDdmQHAJ2dAHjRteQcNiVaY61DEDxNCJXvnvjn4TgpqUEEw4FdnNwGpfPLNFCGBeC",
  "key14": "4w3HDzKbWJaNS4T6beVs9a7v9g1Q1wZ6zUdC5anVJem5SYqgvN8Mya4rSPWzYif98KHpbtNxx5d4AcGiHSJZXrmg",
  "key15": "3kiEjBNfWXafA4DwUXRayLDsvgaN6aSP3SX2VuUZkAtpwLBwGs8eiVQyRNtVZLqH7XG4k6dcqcvF7TzjnDxQgkwx",
  "key16": "5VMkNLJ8Re4JkwdUdQiu3W7dz8onBmNDkpGhSCMKVadaoTSAyEBRBsqunncaumNTShRCmJJ95WyNo9UqiYpy9ZXf",
  "key17": "5C4TwakXzAeJDK97Jq8yfZsXAEjT8UaiLtBMVewPDTbgDCG8RPLJVz49Lr1PBSFLQ4FYqwbN4EBeprPMaUevAvzz",
  "key18": "LskUHA6ArgdczFDuv1zyoqXwA8nU3XuTsrFaFkyYe2HT1Cd6RDDoMPEKQHxF6saqibbdwc2xmD2oZ984tBgp6Rk",
  "key19": "2Fs6xWWvPfQH8CYCi7tsXYMHGJnMaHJXNnpAmNWi2Q2o1HB52wWZ96ayDtswPmHdwE4fXiVViZZNgXrLTEPGx4gq",
  "key20": "2BhCsNs8vS4AmKyKv3rXb4jCiKHzSu7McaPMFq2EYT7ssiUSEWQoH6f7oX9PtH3z1UBfk8U87eeq4PUccwZX9Ryu",
  "key21": "5TEhtmC7rmZWu5dDWALt1i9CwT21SewM5LhX4RgPU3EUHfiB3eMpQ5k2E1s2pMD61tGaQukkoGBVKEG7MnQLYgdW",
  "key22": "4vPgVcacpGoAruBywzCFD8Y2FbLjQcu6d2JG6wGP837FbvvLnJD5mVC8yoN6woLDnQPRGWitNAywVvdF9GKm46os",
  "key23": "3VeJRPR3GQ16xehaSr3m4QhMs51FByA4Ndvz4frpKByyVCBrLaQKZVWwe1HaQgMUYEVVS5gFsabk9vgbkyPnVmPg",
  "key24": "4Ve4m5CZmHbWSCU8ghK2X7PSsipGmgAy5PdGU4XB97DSfPy2f5zhPh11RfhAJvxQQ9b1WYKR1DdK4Q1gb3cHGnS4",
  "key25": "CTxyZDzjBeTE7fuHoA5J2yewiqbdS9snmFAqCXz865jNx9DHEXpZfQXxGYx5nZcCF7yPyUkVwzk1783v5E1yaXE"
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
