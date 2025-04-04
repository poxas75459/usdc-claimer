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
    "4wVFx9qspemBW7vr53e4R82YZkUbc92DJQeE9vjxVthd7giqZjvcddcS9Jjgy1NL1N4qFKQW3xBWdnAy8T6tRoZm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jAn4qZWzfubzzcgKS2B2empwQgphdZD1CtHW4zS5cnGS1uWdt9GZRT28e428Gk6L2EW3KVeaK1maYZWNWSkb9nk",
  "key1": "3mGwMVxWeKW3QS8okeGtUpPgWXPDqPDVRfoBjLsosQ5pckhtXYPiwafWbqycQJjAMTtbzognG7XY6cW7z4zg5ZU3",
  "key2": "3kp5hYZ7YoRwR7o3ijsYMXpgLDohrXcMpP1qBK1gGfBzjYoZT7EtF8ySS58mhTeZiicKPSXwaFmhrP9qQinZD9Cu",
  "key3": "5Mr92CC7aYoTZDBXspcRsZFjNzUbSypBNHEmv7n1BspzX7PktTxuLA9itacEtvwZAd4MFUbwbo7jT9CqBaa7DNxG",
  "key4": "3Vx4mRT46TiCrwv8eSKVrmQNJb82eR93p8wYYvJ4rgpaJ4S9JKwMAwEp1WMnUrfEp2yUvhqRoLwabPnZGe6jALy3",
  "key5": "ePrMv8Y2qNVTGQVQtWWzX1rTsFaxBNVztSE4FVt3PHbapmWayEzJ1K1btNGkgMqSXMcznhPLVzjiocvBwYSZFTD",
  "key6": "4SUZDxSYpWuPmEmkhpYqWSB8YgptCuCGJAeswfxcrPvY1wufidMSqgFtZ45MY9V9yqLaTr2h8PQRYM35TLT6yNiS",
  "key7": "43amYhEPq2EsvdWhLR1UuXUFoPaUZd5CWSAoRk8TNHkAWSUfYsAnXaiRRfgEsTTYAFvHXpN9dMsLQ6C4uRjcA6H8",
  "key8": "3v7iDC4Wdg3kvu5HS91JLtnhGGCfXGwJXkq4jXLxr7FDF8SjkgbUcjUjViRKrNsXP8qjNNiU5xHJXMcgma9aTpM2",
  "key9": "4du5MzEmWEMzhnxKfSMZWDmKgMQGoAs1bBWtXxg3MScr47m6S5Svk4YWFU1dHPamZwq98y21kiLLqLa7zwaDWpS8",
  "key10": "671GqUV7aR7bqk7XPvA3EnpjTcyRCQbeptj5QfKBBQKwQNmX88x1mLPPYDK36hXsHbpCnrXd1jeegmCEvWZao6YV",
  "key11": "rf7kREMh4KXVAv8odHZ6d4euFYSPPi7rpLtKRBNMRF9GnojECp7Vd2c9duwwhiTCyJnZUfQBteJMCQKEev4FkbW",
  "key12": "CY9jxwecND9LiMDoteccvKQAa2vMieL1SuaUfeSyvGt82kUXmr3wKp6gZLsGQ2qSDyMFwZTkVr8waHVMLG47RG7",
  "key13": "5KgcjKWwywBo3q6T8TJpNd1tm8tCUWqDFNDy4ghoCZBDaFVqMJYrtcB6jQBqhdUu1eXdC4muqBXFUZ74YoJPiqad",
  "key14": "4Twq7kuArAfXDbPgBFG56wijPg8YnvJkhramHLHfcCAW93hr3aYMvax4w8wcJg9fWSUiEYbpUkc7roY4b4vKPx8d",
  "key15": "3bo5fEWQ1U9goC95Qw75v1G8CAEJa29o4tJvfGd27G2Lpqv62bfPKq8EWCUhmsPxNqGU4xVAjaJTjsJY9kdr6Z8V",
  "key16": "QCs1PXeHvtVPvA635dJMegF9wrB86Fp8zVY38xajUgoJdfChAE1fdyaU8RRo1eMgsR4LPQGcsxUjTNqJwwmx2FY",
  "key17": "2A8GFwu2ks5fBu9RC9my39Cf4dEVDvRWekAaT2tQCaGaq17rEGHhxdGb9EYPcEAKEgFEBnTZQ4kqt3Qeh3NCfnEU",
  "key18": "4ook2Ut19F5oXWNvaZVCpMfi5xEAGfissnrf2VyNcVZ8CjyG3F1eb6cRvewg1kT6vcKRNYfaVL8VeCRrA9bi6o8k",
  "key19": "f4xcc27UigZbWKzwgEMJGAitzBZgtf9Qd7DGPw46me51m861hTCYugKrxCuWoRF3CPeGL1wqgrcuypLTf2K7Peo",
  "key20": "5jHLhZZUKfG9Cveuoyi7hyuWEpDY6r3sGjMmSVDv9opLzFGsdiw5DU6oabE7VzemKwtyHtZimx8Mu3AKiUq4Duo6",
  "key21": "2vNpJsW5XHgUaxLZTWovYFNSJC6KV9gnxZDxBD7AxT8ioj8t2BiR57qcpvriBEtxD82TBHt2GcyS3yBdsQzvcX3P",
  "key22": "4PaFGQqFsVupWAfMvvbBvKCXuhZmWUzwCcktZb96mXUr1Uv9WiT2QxoRswrQ8v6adSXA1VaLjotSMVHK9kkQAUZd",
  "key23": "3DvkjBZm1brrVKWRThYMHQQC2RbBLf3ayg7QoPAsKK7ymJ3KisYQ3cWfhUNbv51nCe298kP5n9E6nJ2VsDu8g3PC",
  "key24": "5pDAJR6fipbydEZthJrUFq3ue2R6yUnKiqot4zSds7Cnqw7ZN1Gbn8W9nmYvKzLHTqXiHsjpY9tp757jsAYhiLfH",
  "key25": "4Tib4ka46CgyN9SZpRVYjoQMzFjPLanNn5UsFSeMtzbA6dRSwdxotcsG39ZWiqrhtez1gvdpjDANsAxzybsPfgax",
  "key26": "3CitXABBCow3J6fV4vqYjGh8o9aLooJp4MkR8fZ3sR3cZR9iNkSsUAr8m3Fwt5ABX8TmMoqA64cF9kPV4i7wMyux",
  "key27": "3G3VidDiCUD343vawRACBCGrA1bpkBPT8mvKekKytaa9grvFMtH3YCxeoYwZkpc3Yg6Np3kf4ggbexc7zSjAWGMu",
  "key28": "47qUXYs1Mot8VB8jY24eCmeUfBYhziB82WBn9eXJBunWaKeTPYWHD3ErHSavCTGFFQ2g4ZKogFHxpF9i5TAoopob"
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
