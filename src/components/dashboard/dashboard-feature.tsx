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
    "5gHWL1JDzfHDFKZ8ePyRmcsHpKM1kvLoCjHu6v7k3MpSVowvkqCvE5TyHtbKomH6sQ3hndoZC1XrEaj6ruqN5roT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56n14VnT48mAVREmg5ooMaojFrGehMHFokS22PUmeKw3ye2Vw1wrcyaeVu7Z5fWFdmN2DApuTMtY7ahzUJ4zc1s7",
  "key1": "2MppoxPFhiHAQg7kxY4ibN6zJLksvs1xZmAPfvAQ4S3ZNZT1EMtjoxZNwWT5NA7kWgdY5DFR3DdtXdpE6GoSymmH",
  "key2": "5xD6tTpERcWXTcaPhZCTUwE1toPav4uTBZRdK3KKsM9Fz8JWm2UoxnCjzV4qhUoMxGUD6NBAUpixgZeSrWbmshpz",
  "key3": "4THNCcbUHk135KbeNnpwa58Cs9RZYuXwHAiWWqfJAAsWK7oSRirZNCaWAtpckimn61zuBgzb711ahxqq4Fbp3mHy",
  "key4": "5dbfGEKR4UKyfPoC4uhz9kLAxdPZgcniHygr3UwrTd7MqrB9jRRRNGKZYX5PRqNS9S4ypv4CYpXSK8qSPRMpi749",
  "key5": "5mVyT8RywNsYruFHX98hG4mMfRXWLVfn7sUfyD2NVc1fRfA6sD4b3rCnQcmAtNF5tSzagtdoVrWsbvmcEN3XMwck",
  "key6": "4k2C5YtGE3njajtzuzEgtN4V8KBqHyTC5unCXYNFhps73ieEUfkVxAPxr6jMfnBfhRFTacjuQqcAJmuF2ycpuEuY",
  "key7": "38qPBibj9EKRkRpKN9X2DByPBecJB38f3ob5GZVDGH6VzKFdNfhEgxo9ZV8YhvuUfB9RgXKY1WPs3rvJy5dqYP5M",
  "key8": "3roCEZy2AUaLHkoPD39CC8fYFnmhHQTxTR6ijKYBBA4qX64cf9kvUYouviSGyjK5EY44VYc113uvrirDtsmxgVZ4",
  "key9": "3qR8W1wEpfphumhVbXpmdA5qDSUgi1WuitMwTTTSKxwmZrLsrCSWSzdW7zbcSJo5XEzvNYX2nTEPpC6aKowpxWQW",
  "key10": "Fw8CEAxgi3fzVAm3BgvpxPex15SmutWK9Gsv6DxMBsDdCxpnNm67uSfxWg62CYdAiMxkxAfcTukx7wWsq4EN3o8",
  "key11": "3XWhom1fEZk2vpuc2Wt7NC1jPVraf8954hRQN9GqrTjwgoSt7LeKzQUa3WC7ncPdGprrSsb76ZqVystufuGb62ku",
  "key12": "3aZdMzmusiPWRRgPCYo2PRqxBdaJNPBM6xgYRVSN1AtakAcakDVqXJnJqzCzMFL3CkJKk7NhSrcPkGGM3SL25CsF",
  "key13": "4mFpvTKxZktfsc1UAQv7rY1m8zoe5XLE1hpc9g4BYfFHnENc2q2mRVqGtx3cPgweKJmVUsz8JiuvX4dfzFzF4kph",
  "key14": "GyFr6xzy5AjbLizzN4QjvdSyx7tAVg7UwfEE6c7Gw3qmQ86pRjdyA4HDvo57TNTSPNcCFZcBsXyvqsigyqErDab",
  "key15": "3pfe2ziCR7bqrdYLHVSJzb1VwEftbqPMG8qbdsLdyiust7TFhZGdpTL1WvbPbPSASMd1h9owha2fKxDWD3oL8VFV",
  "key16": "dAWpaKPHGfrGhprAADExfrNK3GwirW5LDpMQihy7yuKNVEKdNAJLp9LSZHNqpZxHpdH7tx7A6JYaN46H2hG41Qz",
  "key17": "yq2346neBA4otENVHdvM16abyHpNpBwPG8yyt4tLzbjmgf6ackFb13PcUpRXAnpQGDt59Ghouu37Kq4uMeAHiMX",
  "key18": "5FQTpT8HAf36L2Jm9RfX3ksh8j5sEbwVCNHPJ3WjTrq3LtfxR8RnocbowHVjYmihDTH1P8QLrn5Uk6nVU7TC5fcB",
  "key19": "47s7ZT7Rav9vw6jaDTBfF3ygaM95kMrfXchASHHjqAHgsUTpfnjF7UQvWFVYCW9sEuAFyYgNw16z2znoeTbU1pzd",
  "key20": "EGEnyR6dtriKtxksCiLEaJ9ivgHsJxsR1XgjzR2sDR6bigrysw9e7kX9mNWUEdV25dDur1NtrHs3MhCRF2jmZk6",
  "key21": "2N8pHYju7CAX67DX4Nev4fjHg6AjEN3VCi84WRnXmF5TUFM55EgZQ3duGryX1sa8wxPNWbC7EqV3YN3kKGtKZaNY",
  "key22": "2tSXgvr62tEwy4QBbRUGBPkVJKNVod6EmpmiBoyCyTECtez4vy1BsRdRLf2Mxc3rwEgmzmZZPoabNDka2o2cpstD",
  "key23": "45xnV67PiZXjMp4k4bPxUKb1DBJNuRivuhvP3zUR2Sj4D99hzZAccyB9zB4b2dMybquEkgcfLfTT4iS6LUbjy4su",
  "key24": "5SJF9TJ4tpQW6Tt2bbmqSjvB6XSuqb6Xk8bUz91ioEhsjAJvCQh3JD7oHnfnwhDMbAi1nUpVcaJTJYAKHCByaY2D",
  "key25": "2yewf2C39DT3Jhn6GxWaTnrUJjFeRsvWwQXZCKaZysDVfpadpu3KeVgJXjw5cidVHLQjZtK4hXbXKUbtQhD7obGL",
  "key26": "5V82BUKKRL7M2xH11pPwJ3PZmM89RAXeHSJ7397oXn2XRy4wUZTvug5aeonGtaYDRagFWTEjt5XwWTe5DMP62KDD",
  "key27": "39gyUeLjThbzbio6Yr2wY9B7RZotFW1qtiHCPra1Hp6xtPVfaE7qK6H8SoFSSLeCdFHzEQhh3f9B7rjUuJdcRSZN",
  "key28": "BPEYYcfmyJ539hvVpQTpRTggxCbE3qwfePjroPzs3e1X6zfJCaMJx9rSBtkrAZDsYPZ64phydDJCVW646g294TZ",
  "key29": "2ZmZ5SAeUAHmKrcsUWrSy3AU86Tp6RYDvTxDfhDfkxQMF4qXnnGsXY9zruLArWZwNXRvZdNrowWhPVvSXSaYzTyk",
  "key30": "3n88v6evaTEFZjnPAuDLSL9Sps7iUJapdV5mpufNs87oJj9GT7hkxwhuyPTJr6bev8DR8fcJkJW3czmyv9wckECt",
  "key31": "3Zf1aYytvtjXpDnHnWVDteVUFGBzWTZRYXWK99g6Sv9WmBm9uy66B341xMWRvfYrStWCqEeaaSaZVUvXUxLawJ6v",
  "key32": "2o6VFpq37ZA97EuD2o3iSyVtSN4fvUSAyLGx2odgkkWfPMtfdGEitMob4SPTki5hH23ztHRyUMCgnsNpqDK8AhD1",
  "key33": "2SKcGaC282dVLHpgo94TQc9JGunoSs8fHPWPPA1AiwTtGSAv3hjo47cxNKAQwYwFcdBGKhSh4uJF5e5cKmz7PvMn",
  "key34": "2W5Y7qz4CADtSHLzRh8PUZawyz3NBF1qM6jxx3h3xSF7gfc4gt3sB5UbnkCWbSJcEWZoHRQFah6nNFdDVV1c2x6K",
  "key35": "21LYAAbAmZP6K3B4jdTY2yTH3jxug52tDrkaVKm5TzUKMoFYeZtcjQFLtLbCA8zRnRj8s4KkAMn3d8v4rTXAKmNk",
  "key36": "5gJ65Wktp5e4PT7mJLKw5ob22HpF3MYTesFqrtKDvyTL4Yfqxzg1MfRJXXPSBLyxP4hNCiyZfH6ukMzE5fP9Z6Tz",
  "key37": "51kXbKszdGej8i8vtZ6i17Fz1bzkXBgdwnKkUGTxQHpthhowmGovqaiTDkbMKhfjPknp5GheQdEGwtA5avnJ59EF",
  "key38": "2ddL6oZxAnrCVA1SB5JzMoxELtZ85sgeNJEhmSFS2RsF6vXR26rsYfaEab6A385VdtBGGixw3jq7o4yaS4gB3DeF",
  "key39": "4cxu3m3UH58h92EAG4mnggj2GKn7ADcJsaYmgyRcNzWEkrVAPbyuqmXZWiwZQsNQGpda9U1RjKU28DLhfevhoRUh",
  "key40": "44timSJXVwMprwxqei8Q5LyPE6e9iRYtABLFsDyPiLDmzv1gP6VoqWCw49LrFaVmmiM8srQsfA6shYnJFh9SMru8",
  "key41": "2Bt6VWgSKiV9YsUb63X79MqCkmBfGNvUsdkpt4LEEkDr8pxu6SpbDMVL28UhZHJKCabc1TcKiTsfSE3iVXpSTbJz",
  "key42": "5Uqy5HU8iU3WxcawDeKUZk1p35o4aG7zz1x1dtFxUkNTmaFwy3Awe9NerDYsQXBdThtEfXpiMKkVnFTjMkWnbutB",
  "key43": "5xxmxCmdAc1M411tZKXDMc7NKAs6MMJPeFK6ZQuwFLDnzwk6BeTHY9x4hXZ5e3CBckjGvjxi8wJygpMYDtByHhqk",
  "key44": "u8ZSc99f3B6Af38ciHu2CzM3Vi2FPW1eAj9axizSzxufdt5GpzYJ37fhK3XB2QrSy3kYoeN5g7oXNMXhs16bQWi"
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
