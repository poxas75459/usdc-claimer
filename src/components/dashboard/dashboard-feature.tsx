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
    "5AvHf3LwGBhcc5mnkwtjpE8uUe6H6GifFp4haYgEBchMrjvdpqS6YEdGYd5sZbcKpNejFhMnm9EHEtHU9QHVMMSn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54K6k1Dy7gnMj1oRzmHCQhUnrP8s9LLDJjAia79CnozA3ar7zDJpTdDzBYpR7UyxiVJCKtpqg367PU6PgEYnGDBy",
  "key1": "2WMMS8q7o3uXzDzsy9DwJV4Z7N3fGLLR7sv9cTWiqQgRxyvTif3NhXsSvdybBbhdhf9cv36ugwPTqGV9ixaX9jEd",
  "key2": "3QrhvCXVg9q5k3rgznHLSHsEjMxoCPHdjPNDGkCcBtNnt9eqzzb5zAWK97NMtUZ3eVg1GdXirsiYuJtxAdbqAQsF",
  "key3": "4Z6Tc3cYoHqJ9Nv4YzSdFDZfQV2RA1McG8YYJFPFqi12HL5M3R3NZ2xNawPwcmhCJLCGZaK2bKczBe8CWzLwdpyG",
  "key4": "yxdbbkrSsRZCePXg3UbrT4VRw1N4cXgYwRYK7zpvqpfZ9zsPNRWiPuFzPLAFrrMmuz1sWRDPQcBte9fa2DUVZNS",
  "key5": "3J8hUJrKDZBRnTSWqhKpyRy3TjqX525doU6UrRL4zQjVohS6ypHtsoMTCwZRAdHTt1Y77ve36ie9Z8C8jRZ71PAJ",
  "key6": "1LqMc6kDe5AZshBDMA8vwu8Tui5XGg6gJPQvKTkZqisUkZdFzJ6HiUs5pduF2iXtJkH7NRCxvWrLE82GsRXKCZf",
  "key7": "KxCSetQkEYofr19jF6qvvN4NxkTVTGJmNdWDFL3NiwyemoeCJwSxrCzgyRpxfoDeH2ayw39hU99wJE8dV7kTCiJ",
  "key8": "5naf1R4z1MujsdnnApXKJib7McfA7xp2Kr9jj2AQ8ttAPb267hpTkHAzrh2etot3J7svTZ1HHprVoJV6b76syVFA",
  "key9": "4EDwTFNJDinNf8YSdLZFXPy8PVGhhkhAB9Ky3ba89gX5PLV8qXyhWVRyBtGUmJWc6Jy5NooS679QvGrWM6KMRZYi",
  "key10": "2cqtqPsrSgVhX9derZepbkAKEqdup2uakMZWNbTRJ1QqUGQ5oJMdxLbhx4zrxb9tyCq3k8kyveKb1MDvErU69VED",
  "key11": "2YENhLRoLDwhXKRHfXpyofmiTeYCyVbcXz18UT9e4xog9EkfJz414RUBPkRXLnaRj6P9V7tmFVEvLqCi7Ksg4NYg",
  "key12": "47G4SCoAJtNmXf1y1eG4adb6wSN9jNv1qENyGVJa9mwLaCCLXikWkcP3mkCqPCdhr6rd16SnVAWEL3NUD1KXSggU",
  "key13": "2STkWkGXPLJo4CtLp6wFgb3rLC1h25cCyz4qvoGG3rFJfucgwJUc3iojNt252QjnUF6b4rT7Bu4yoK9QSzJrdsFf",
  "key14": "2tRGshh9knvBuw2jwvs2HqaPgYjjuw6H6VWyoAdRX8ZgjnCcduSk59mHnx2abydf5KcT6ZiQSJGQ2eKEWLXi9c5d",
  "key15": "4vncDZ48dEHr9VnPdqtMbhL68P2ZSXWsVZcY3xyWRqurMzDTajCGCUNfYZuo5G57QiFsG2ggTbn3WVRKeRAP9zvj",
  "key16": "zLstGBXFbnyvfMHQtoNeJwVKBhad15Z8vzEhY1vi5iYwNE89M5y4bbjnRrGdGMDHLShjYMLYmHiksuhNjMY9gos",
  "key17": "2CupQGtDEn2Ahq2edPh11Dpf5gLyfdGdzfYnqdJQnpRkgJ3tgB7iHgCbGkQXC5ErWen1S9MvEwVQVy61bc5Yox6u",
  "key18": "35jB97ndXxVGXZK8Gkvs1bpTBFSWVKAGjxSzxtDyxeKPNCAqLWZpEzSgdjN4L7vFcoAckQ38mzEB1c3d1ShtMKyw",
  "key19": "3YBZQhA3fsv5ZdSfoGKUhfW91MXSDwSQpAMUpFzTNZij8Lse3J7EqcvRD1CKeUxAsjRxUSRxw2fdvWbqsTKwZuBy",
  "key20": "5FKRTKEBifQp2S3KNbprqUYcGy2CDUDtbmP26T3DfhB32Yz4y8Lzci6N3Pq3yKTGPowbkBaLJHDzEW3g88QAuw1Y",
  "key21": "Nwzfy9dEfRLu6pgFJvQ296C35VNsmkZ6y1bk1gkJgWSS34ZBLbHDJUxdyJWxMxotgDjK19QWr1gdwEb7zaM1X6r",
  "key22": "28p7Kpw3d3J7QK4JEQ32aQSJJyS2jpffAxhsEchB9pTCcRSZr3NVxjxBRHNdWd2BJwt6jnQ6J6cpBsrpmDuCECyP",
  "key23": "5rsrpEPkxQRyX5r5Sk6ayeqQQ86y1Dj7pdeJeJNaUtSMxG5u9Nu6U9FeC7ZLE5VK6r9sxJw8UKvXFa51DVLyb3ZT",
  "key24": "61FBpY11geHH3fqdX3XzsHFgjgpUUMgdTXChqRwma8JPVzF7LYDcdsx2bueG3ySvS7heWTbxSyowB3YKvsCjXfwN",
  "key25": "jKur4mXyKA1NiwTv9qr2gBkTB9T1sEMPnjVmfBLnMmNpQtmWY5LPaWk2gT3v34eBDLN5BBkHgBd2zkn46f8faso",
  "key26": "2KKBaMJAZ7oqmxPGV7XLYsj5hvCThBYxt3YsLScNBSG2NwyYY7pv8cQKLi9vWJLnQd5tZhhF3gzCbF5RYDKc3FBG",
  "key27": "3h41dPcs8zJ4HdKMCu9R9mrdMESPfUNdrFPPP5dT5G2aD3UYEQv45WVnLfGbvpnHNJmjeDMaNFxzyoURtonwzgYF",
  "key28": "V56kA2kDDSgGp58GjRqDv5FMc1uau69w4q3UKBT6f1YfCNKzs3MxMxT6uFnfGdxygEVKWpCMy1pra22i9JqiwLV",
  "key29": "eKpy8fpd6PgmQbRL6KvBiETMRobvcQpeYLB9UXnHYy5psryswjtdG4pugPVPpforNm6GqoQyFrYqrDDQkiq3bQn",
  "key30": "2qAjboaVM3m25watVQEEC6LrevVFTvp1KdnjarHX3pde9kurMhY7xr1ACEU2MAEuk8czeGzXmJTYep1Wa3QWSnkE",
  "key31": "2vzDPumJ3e6jegVU4f6kUkYXLEc1RNmKe45Bwd1u3FMNtJ57ECaLDGRHMLagmmsuMAUDq7MnQPPHsivFn4TstEUV"
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
