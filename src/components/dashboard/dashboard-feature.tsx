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
    "2nRJRsaX1eoMXJEmZU3yqySai6gpaWMjcocS53CXCnFd6ParTZ7WWtwzCp3HULD4MvJBDA2dAgsrNTArmpgn1cSU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WAYaYW4RjdAzwv7D7gcVD3qL2NPTm6UY2CREvtscKLTLF8dLrGWH4dVtyS6f1iqRA25CWNbpVdTRoiSjfwEB2rQ",
  "key1": "uAvGbTFG7FnHEHunt333uUXbQcjp777zM4iGWeGQCQk5rirpmWaQ9SN7g7E6EtwWPjitKGqW4s59HUuZNBRzKDq",
  "key2": "D9Wz59RY2nJNBLataLPTj8ruzpzqvt3GzXS1kskjcx3EJS12EcCoJa3eHGJw1QFFRVvBnzmAx789hPy8vMDepsP",
  "key3": "2Xw2JRednKJeB4qEgjovj6GP6AdSc79KHLAN4gV6Uc7172PR81sweLX5HisJ98nhwZJX6Gfg7WJsXYktHt4XhLVT",
  "key4": "5HEfG8HTtLTm4m1yFyXjxWGuH1H7eMbX19vzYgXwHrPaFm4G8CGCRuLm9dh78RiZV2WugYEfj9YmD9oCfpasDTbx",
  "key5": "3wYG7GwZa3k4DpYmNbUvQMGbV2SfzWKxpnvVMsGaZAUxxXR7Nx9351nVMzyr3hAPghWtFRLg1homGEknf4xKNkwe",
  "key6": "2z8wh3ZGnWUqH8hWjwJpQQXnJVtxKmKGWK5pvvinHgNBu3vWAQofrg2ydbaaRaRUqLxUaSUhSSzfjk8cAtqA2NwP",
  "key7": "3VhkBsxeDusF2jdfiFapTcPFhd2XLvdc7XedRdpApSPYjzC5JXNHvZFADwV3meyLfKz81CR8QRyqfWdKfNZ5TU5q",
  "key8": "3zVoz2PK1uJrJG8okmwtE6fM4q9dgtNY2qNime2zPm67xKkvkpQBeskH8J3iBxnszwyfmk7wied2xhTgXr1rpxRM",
  "key9": "CvRqFMyFjyMdDkCSK6UWRpR5Pqb8rMnrY5sycnivkeMPpLRcXsNorHebZpVJb7tWp6khnZVryN2o7swzKxHc9g9",
  "key10": "64QLQHAPStcXXY7iteCoaj5zKqMC6hPT577sf9u7TwRxJm7WnPZnn9Vefu4fN7kyjFPExhVKYkmmsQa35kf4xjq4",
  "key11": "a6zEthC55MFZRMJBwswrVJp62q1unAZNjrHkqE16WXzijd2ADj4Zdt5qL2aeHU93m9rT6keAj9GqJu2MHyE8e6q",
  "key12": "34F12dfy5dS3C8n34ix3KuF4YzgrcDZFMiqMFVKTWjzZKVrnntzMVKw4h3FcfQVi8kzk1Z5HZFE9Y3oKUzUmTFVP",
  "key13": "5kTStHtSrHsg6inXuuAzN3b2gsQbnbshk8KQD1dqCDtEgKAbM2LphH714m1RAte1ixJgMKZZeviVmNZ8DT7x4Y7n",
  "key14": "MWm2dKWoZuDs9CUwGEUfctoWyz9e6ngGqMZE5Hs6NsgpJuvs6xD5zvrLt7crz9mD5dUscSX6agJ8QP6YiJ8ofq7",
  "key15": "3ektD1fWcNCSowhCMew27g6QZxNEtrS3PDfXCAPwM5h4HpT115GBt7aYueuBTUogAhKnXDNsUzcaGhRfzydFo2F3",
  "key16": "4e9ScKNgoc4Sum39jB7sogDtqFbtoGyyfegiNvagYyihXpPU2gfgRYAUkkRsPn2cXSYEoucxEocBkwjNCDdFFZAi",
  "key17": "47E6rzhgEWiWtA4eAatqdQTmiVujkoXqkcrw7TbbAbRupYDK26QU4kJP8hwka5G1F7HnhH4mEXyQQSpUYEPApnLq",
  "key18": "Kk7JceWeFcqaj2XDZgzu5ZAS9vWBhxZkZsWkrzDgKHU2aSzTBhaE3Czmk2qJt7JwKwAujSJpqy6UB4cLYhvFBGV",
  "key19": "4YiCwnCamQ4F782smVAqb665PqvmdChyMahtSAE2ebPdp2Gx4xda4aXKhJPJjDscZZzKuGKQbTjLyMmG7exwVZwf",
  "key20": "rcTCgVETwR6X9cs5qwo7zy4JgrpuyNFU9JgqRMSmRgU1i2wqybjodTC3iP2M1XC9aQr1d9icAuVYAzWAX6WRgfa",
  "key21": "5xuDrHXK6UVuzDVqiH3LGR6BEwar9uKHuGUS3QooFRcFjyCqs58uSo5FkgrZLQSXnw4LxPNhLBeRAUhyY19Xoc11",
  "key22": "5nFXYieTkjVzRuW6hnWzqEp6XGn4GKg8w7fRefFjRY9Ky8wsfV9esJKBbG2DfUijV4s4u4inpwZvFKKRy7g6p5CY",
  "key23": "3iNCYd2AuNdkT5ghZ1YdKtSqDjEzrXGJG72NHhJrFHdz6wggnnEomtbja9M58jpemFcEPfFMfoF4eYqA8o74N4T9",
  "key24": "5cDnyumPAnavxvPCtsNT7b2z4xB8PamcNYn19kn7HomFrEtiuw5diMdmEm86hXMHSUWHiiNADtxHxZmhDetqnPLe",
  "key25": "4QWXVLYZoMdbyAkxEqZ6CStNNSf4gUh8PUdGQkTwEv683QbfyrytcJYHQCP5yw38MRVvJyTRLCVshDBYxneJ7tKb"
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
