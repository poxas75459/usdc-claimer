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
    "Mej18YUPk8PU9uPexGpE5obafsu3om5kqSefkrV1fB1wpMvuy5S5MpE3Ed5eS1YfEXyHdUe9D11GG3hH19ykFjj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yZd8m1H52uaNU9jK3hfikAJRnQVCn1YL7UzsypXtgTGyHNAmrTURmaX4vBqkDpiPSMERUumZ3UCm4dH1DMh8Ffj",
  "key1": "5ACarsTViL1EYiWNe9ULHUAkcaSDmdXecCKjbX5HnfGoZgcxPxz6n5MrCAaLRt6gx7nnd9fEiUrP6sUsZ379GuVG",
  "key2": "tb1HFgVYTnBH2rW4w8QnoeFGadwJv9KUNVYDRXTGfs2jkZFRXs8uWPy5ofR6aonHAUw2PxLa4Mki3azPsamebP3",
  "key3": "2yvimjeb6gpUBkt1LKvADkCpoujg1CxorrviXAPdWSdC1pCQuUT91nWBMvvC7kMwGHqASnYXDQAhbamWbRG6ySPH",
  "key4": "eApdLsH4zawCt13fsVP5TDFvAd54jwJueRzBufmTdcQ34CEcds3kZ9vdpjk78YnthwoUv1Y57CXZ863VwGFeHFW",
  "key5": "4hUSxhwb7TpbzgeZogEcef2161h5VDfMYEHRH4PYHArv97M9nBJ25i9X1zb5NE8ZfJHsP2sPZwA3orRruUQURepP",
  "key6": "3dG1Nk9YPh48PbKLZUovSAGzyKRk4QN4RyckP8w25U389eA1ngqznXbmik88tgnQCgPqutdBcbxT4bK6B7LJUKPA",
  "key7": "52VNLLhZnC1RCo9J3GEQDwoqtmTLQAPS2upnjbtotbutBKpQiHqGuH3SQXQRcbubCp93DynUokuQumfa6EnmzC11",
  "key8": "2f4YBxKBMBW1iRcgTMvd21RMpCzKnGiLaapLKg2sEKqyJyjTXXs7BywfMspmZSLs8Ha4HcDPqsZPWzwdZ5jPM7Em",
  "key9": "3NoeQGN3gsBSS6APhsjra9vEmKngdgExF3d4DqAKb1SwLDtnA5L39EHo5mS83XW2RkSPpaydEpRYD4dq9zHvxJzV",
  "key10": "2QRgYKRXWQuRHGGbf3MQvJVwAMjsJXFxB1wcTt4Ap7Uk7WckKXoGq6QUQXFynxdtEFGzhxv563jNFNkhXxz3nhVQ",
  "key11": "2YE5FoK6F5RKW7szuMYEYvgT1ENrNeq4zWA9M7XkTjw9TnBanGDWgzZqn9ULGAVXBpXbKvMc7a31NYzpWD7oh9Qd",
  "key12": "54r1isnHm9j9cTHXaGC2m5NwTJcedpNYjt5BmDPnhKBaWSHsjni6dvGBvhp4pqN4zPfZwSnXf9keA5Hyh2JjuKGj",
  "key13": "43aV35FoPe6kSb45ZouKnc4gqp9rvH2WjE988h6z1X69ogWVkEdAWGUyUEjCiZeEbjfoW6bYBJ6gMrfA1LhEaNxy",
  "key14": "4wba2XqqCNa3SMRddcbcgpuvCHsfuNXzzkeXzTxgXyhE8w4yhBUE2hJXqWidKt6ZJ19NErpeddaY26avRHfHNjR1",
  "key15": "oaZN22jpGobUkkGx8szYYkQRros9jeDA5iEYkaEYdBEP1EtiV8FfhFUBithcCJwzPbZY28wA2q8Yt1evEooEzxz",
  "key16": "2nxivEkwJG5jrD7t5qh3ig53TLniGAgcFKX5gCDWrj2ZroSaob6spKshhn4x57kbYZuRBbhSeLetHoBFFDQjRChZ",
  "key17": "4oyoYr7SgyL3KLjsDD8bX6g2S55yNc33BMAvFEVmEmxPZngRdyHq4GJv2nC1cNpdwrLKv8dPrXp577Mab93UtvXy",
  "key18": "3W46nN9VstgdM1GNAPQ4kcDmqrqYDLVhgcq6CLvhfY4FXGbWWRdRxvJfegoQBg8sxxQYiTVqXcmGyVVndTPMBHMp",
  "key19": "gymifMKURkw9Q6vXms1XBjxSMPMLkkEyzNCCXQj8TfeuCRCkdxy3WGhTXoqB2fNKhLQ3gxfyh6qBcwVMPLhvy7D",
  "key20": "3Fh1aYRkDmWLXqtGQWKysq2Yf7RkBNaVthtPp8CG7AGqP8zMnHFVH8xZz3x5QEbJbf4hvcEeBckX34qbWtgTfGkD",
  "key21": "3cbAKDMufAgfAS3wVW3n9nxKZ6CNgu37VeVHioSHDgn44P4Av59wGGd7qXrBZJWoM8QKSSmR9qFz2k57K9vqRvY5",
  "key22": "5sAyKRjmEDmjTv7L2APeK3AcDX1LDsshhHuRiCRBD8fpUa7eWktghu7K4VGFaZPgNYEdr3pDHTgERgXod6jZwyPG",
  "key23": "Dr4Ks4NLfd9rnWZsbz4ACuP2AJqVEroQjngTi33yr8AU9A1NkhGsV82KvHriuaEeXtcgVbCPGV4Yd7zderzvg4q",
  "key24": "5mv5PpXPMNzqLTB8QoaFG6B3ZGWUHxZbq4sPDhaDkVQrt4yDHneiQgGR9ooCB228dQHJkFvQuvHYxBrCWZFToSRM",
  "key25": "2ZbdKaPvt9JfMzL2LjKxaXrDv8nqaoALiLKcVeBDXWJWfBVJxicDG9JwYF4ieMLGTapXyCbxhm1WkKcJ1bhAcWmV",
  "key26": "4MLCH9EWMfLJ86U9KAJQZ4NUihiZPG4X8rsHiAaPjaq7fDetFUg66QzQubD6rYq4Vbo4eKpuYtQwhPoDw6DVUHMD",
  "key27": "oFyvo5KigDwTMhAHQrgspnsqSHywzmvjBPwX36nqy2X2iJ61X4dyvNPMNZwwxa4VoVwZJSpgZdwUupiQmFs36gT",
  "key28": "3Gy9TPaL4rkveS3Udg99LwkG2QptuTyPLZ25o97WCSQphGsCcdPWuQPeJc42EFemqzoCvNUvJbGKXL6sN6aXwbTf",
  "key29": "5rvsRbBGmpZd8Q5PDsXY4HSBY7TxdczMnQQr9Kvo5svo5YqrNT1hs2gD6NWjaNPVY8LB74CCLLxsqcuVtrLAZ3TR",
  "key30": "2vkZuSvXn8JKs9JsDUzLBftTfbd17WtibgJu4nutoEdgqLEHMVUVh5Eizz2ece7Cn4r4hHzkJV9NSbAD2Hyko4SV",
  "key31": "4JrZSrfmMjiTmJLpRLCRUepWrrFufshsGJx1CDgB7QFFGnXmi1D5yTS4eiNdZqfjT2XoPWzVgFZe3TfUG8pfSBFp",
  "key32": "4BxCUfS6Deboo2wPKpsaGhAyLMFmK8o2ySJhw16SU2iZoRAGRZJ8rWrV627nCFyMgp2qJkQD4HQDon7TcDNo4NXo",
  "key33": "5x9JdbVtEbw5g6wAAkSHYZ5bmvUV1JWrL2CMEkDmXpdxgmJuT9Z1pQeGDpk5EUJKLytN6R8MLVbNPCkkTJ2tGei7",
  "key34": "2VjB51jWXjH6btbVq8S8WeV39J63jBqpQuktAXjJV3EDNgS6jjAv65vfj1Nhiz422wu8rhxwp87rvhzSkgZ2bQSN",
  "key35": "2YwvpANKgF2oPjyyJtSdVXxRPt58QLezxK7obM5tgpH3UhbA7DonbuhgFgp1KTMqJvTMdLjxmCTsR6x9SBRDnVBR",
  "key36": "5yAukSsBesvtiPGtaeRybAY9BP4ndc2qZzXpk2dm5d6f8aKPtrKxyqUACP87jeoUjCQModouCmx4heNgMSVhbMnt",
  "key37": "2xV4jN9665YaqvdUE2GasBHdvJKRNeiXM9arUcRySCS7divWh94D2KeT8WWfqZreYGEj7NiTfjrzd8c6bbDAMuL8",
  "key38": "5iYGefmm5nEW6ZdMK4QbWJZYMenBcenkyDg2u6ph3iLWL8TgtdppDrD2pTLREViuLuTNjLMdwovQkzNEFUf8tK2",
  "key39": "53BsKPXBSp2bwg2VKJR4Ayf7pKJqaXJgbpi4sZnb7p4LWqx3UjmytvFCDmP7PSpmmx1HkLZEWvDiPUt5rZfBz4eC",
  "key40": "2CQBn7s3igemMHB1Gd8S3ejQ2WTPFDP18cT1eAwsF4aSjW8j8LRckSJ7Qs1LXmDZngehHXJxkVsQVfBMtthfsNNC",
  "key41": "2E2NwWfZMDCDZ3AYTjJZLVBxBkWMAN52B5s1XYnrJRrxXPGquddFtZs1JvS5zgFx2UrSUQ4pZAZQQL9ZnD6fyKZB",
  "key42": "2kJQTFpUdmqfHYFkDcrY7cSi37dhiJ62t9PXLVnEnEouNvPhkLx27GzNyAhUWYLgpDmca3DvHWWCPBmQLT6pqG1J",
  "key43": "3rH46SdSHeda4oEGaY8aHawg8bNkMEDuqRxBU5h1A8Pqr1vT8ys5SGQd3ajhK1KYQomog89B4Y8r5f86Hb64nMBn",
  "key44": "2GFmgSidYxoFGkX4PTTiHQJH9JJoN2MAVHC9hbhFR8bnDY2Te9sDZAb8zZmwd22UCFLCWM1aMMVCvkqhJhe4wk4z",
  "key45": "5u4kYtj1DC2utBXWKyzE3PzMypHbYv9bQR1Tkbz9xphbWHE2XbtuRLMUaH1RpMRSxk9t2VsMNsGQdt9AZu5LFgid"
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
