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
    "2SrAbGi6amdPay5iXW26qcvzBqaBGVwgtQsdCzhWXk9mfcf9TXfMeF9T5TXqqii2iqYb5mGyG2SExkwbdp1aeh41"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nxzqb6umvnpoJEnNXCThxcFeoNEE6WqCDJw5cVF4KNcdzkSn9pVYasKnCuqs7ddb5fCDmLv3Moqb3V9TMq85r3A",
  "key1": "3GPHnSsqy2rcSbhCcqHqw1u6YG6XvcSxudru85mUByZhT8QpxMtzEHDqcwfWZeeHohXxP6hfy2qqmavE2Hfq9bG8",
  "key2": "36xH1i3NPzoNYDszq3EJe7wmzf6gdUHTg1oUTk3mBv6PBn9HgPYvtWdohxest8EHDgSM5ne5V6WeF94Yq52u7SbU",
  "key3": "16jjAxxhuTRvQbng8WAcqbU5q2ER2pGy2ncnuKpzYcpjNXsVHNeyrJLjnG5LK3hRNdjbantRFVGcKmtabMzqmdm",
  "key4": "3g2DvB3WTiVXk3ESFEqGz2DNfqUJHZHEKRcWe2A1vmxJYHMECS5QuavBKWcSgpAAufFRYTXiJ9wJWTzkwcNtgtqr",
  "key5": "i4tQS43N11ooVrqfDt9uY3ip2rqn69Pm2siNHrBoXtqUnGKXdmSLeVd5KNXmpRnY5vrcAVdhmkmYVEjLWn3orT1",
  "key6": "5U6kQY2RiuHnBbrmsV3DB2MY48nqQufbjp8eFwfK1rx5NaqSA6SKqtpSmvwHjGoUt9vNxtPTgv43aarYNJ8YvcbU",
  "key7": "34Q14uDhhU4Bij6fa1LR7NaWuKgfohrozitGWhdjoAGMCCkn6Azi2pshGvQtjo9imF4BQgh45Pyvp3qtDjXhR2xc",
  "key8": "4d1D1ZpQWZsxr1Kh5phPwb2PGjZE65wyBBAp9FTvqU3UxtDjTHSNCMGw9oQgbnc1bS93XiYvXGLiq2rtsEfJH8ei",
  "key9": "5G2CnhtQQBpzEz6tsDzyH4Bjt7pkH4L5nBSgRFyMuC2LPedF1YpUNjWDYGkZK51pKmxtkPiW8iyzT2VvnEH6LNJb",
  "key10": "3WZS6BHHRHAmhk6QWLvKhvDz5faBEJtbtwZrunEpeSAMSLgsBmvn8TAWkzUrgtRWBzgdmmQE1FuCD5SAHDfVywDb",
  "key11": "5pDCXsnywfXQgBMMntjkYcFrWeBxdpq1rwautgGH75ZTGtJQ4VSSz9Ez6r5HrrPo5ZoftB8D4tA96Xe5D2UtuSi5",
  "key12": "5VJqqMtcvnCqRkxyxLj2Pt6oT9fsN976N3FwdJdxtWDuSdvxPwXc4xmWkwaxYiYhanmKunppmmNTsBZuBePQP85L",
  "key13": "3HKrb3dwKKiMkoXLe3JGXJuht52UzCYJYWsi8WZaPt41p9ekPL9g9YVQRwk1zGVpPPXLSoowzSyFsXAe9mC7mAHb",
  "key14": "4QTV3CppHxH7EaVie5bHScHogLD8baxjHuNpd3tN4N82igse3ChiuxThUAnDQsVKoChJ4DxdVkh66UnbCRJ74YdX",
  "key15": "3x1aa9znz7LSChv6HXj1gKf9HG7SsZSevdK2EW8YiG97bHUAwZ3jsDppB8ttsghnXqwqV83zZEdhivTKSWM9Z4FG",
  "key16": "4kR5uvnRTJ77V3ARF2MhX5bzwfAC4o1yAp8ZLC8yffZR74hKZpMrcVfVZzDqda3ZPhZ5P3Y5cmx6sqygRtmw9KPv",
  "key17": "4qJNKZdQFKoSnSUUkciPhTZMuAJMvt3R88c3h61pZ5DQWdvpgiWxFxRar7zQrfbZsULESwFSxgTS8c3Yhh1Emk2y",
  "key18": "5UddDGUfXFJWdKzmBRJCMZf4uVh8LiopoSa7iEuJn94ckJeDFnSwTVCiusazocN9iTVB9bPY57dFzwv8P1YmW2cH",
  "key19": "3sta6sZ8t553a1LpTL48V3LD4KbtNL4SBdguN6yCWgmmp64hH4rVVhRT1CYNDNioCrA49gg2WuE1ncSHEDfQnkmd",
  "key20": "2M2nvUHzT6zb6eefJ4CMASKCqr7sLLj5wyYwvvswdCMBGZYXryVK6UtouJubibpTZaptRC6qNcdEJukK9jHeLpMD",
  "key21": "47jLvrJDGk5ZE6TrrBuaypJ1Zg5N8Vpb8vaQ6WyzU5HQVsNFiRaVhuZes3ebpzR556pM3UyrADFTcZcdUNhnLuc7",
  "key22": "4HU1h5cSDPZmHYTFTYHxpJ2sPDeybWnYvhufr1LaDhsh8QFiC1bGcmZW9k6XVqtYKvvdKr1PSQELHZPiEQ3k4Jhq",
  "key23": "26HEzbtTkKnZdQzc7AGzkfsQNGsBRZX2CwL9SQb5TduAMhX5puKJqBU7xRfmSofB9wJpbGoUrFSDDMiQpHYbEFDS",
  "key24": "47meJLFEScd7B3uaaadywQ89xQFtugt4uWkKVh1TgZk7ZWmKvvJzAsbBSteCSEnksoP2XboreyLji4SLbsCbZSFb",
  "key25": "2hkbahX2omzbS4DCRyCrya5v728K1M8mDXgGfjKQPm29pLSBU33SycAfdvRC5j1zzTKRkJuNyAfNdZLyg4SZm25k",
  "key26": "3gCpFcNrjBbPgMR89dQCT4LZ6CHVw5dRtVYzTgNcmSQywMnJ1MKjEh8xxCVXW1asqDHYFcyQR1h8Wns2inGcH2oa",
  "key27": "4Mfy6gBryGDzAQBemiiZ7yuMG51QfivVAN5uart8sHH1c175nagEgQ1z2ueracJw5iMSTZyq6SCY6GeC7keaNAEZ",
  "key28": "4VsaYB3Sc7fEnoVYvQ9sbgVd8qNNMWhWzQkcVLNMjU857XFrhSdP5TxScpNfWQ9E7x65EzgAKWf8JutHVUUu8sPC",
  "key29": "3qEDVCyCyNTWCqxpsfNqoxnsjn6SQ3DNpJiiYCJmeogEmaFSSNX4eLkfW7xxYo8ZmckKgZuzHYDPcwjX2TAmrcSb",
  "key30": "4gnP8AKwk4jjZ67gHx6J6ccthMohfC6kjLMtxN5NwJjtKEt881GUc7R8UMf7yFkAzqVySYxcseZoJmD2cNS3oUXJ",
  "key31": "3CUcgqf4AwZhSUkP44NdYVHLBtEVi2LdG4JLjaNSuDhGQFWg732AWZ5h86e5Bn1XSbtdFs3uEkRjfi6aXCHGVHko",
  "key32": "3GMEoSx96Ks55Pqvecu578QEFzwo6MGw1Hdzvzq2emh7reRxhEHFtcpA119WAkft4JXpb9R5sxrGhGzU5DW3ZEGv",
  "key33": "5yECtaVrD2hQyRzdNE8Fwh72mVN53Ww94pn44onSPoCtZAumdVgeDdFi5vDYsDA39QaTdzkyGexvuPyficfXdQg1",
  "key34": "3agRMvd8XTpbhuv2Q8EmiYq9SFnL76Be6LbETwtMiG2aXTeH7fw8fLVGPjJZDRirscRX2z74R2awc4MzgM7ujRjc",
  "key35": "2VqMhFgEeKzfgMHzYScGjhfQWCd2MMPtk6uGtHNjcwwqJL3hgU3sXxzmeSakWy2DB8DxAEb7XKz5goS9zeSEbBcT",
  "key36": "2nbWJ1VrQF9iRqB53mF5okQ8RVLYg1H1feFKL3U4vL44pAzgj9c5E1aWC4UeAwN4LyBVVLBWRG44NjHPm1k9nqpf",
  "key37": "41UdYhYaYUWJheSiHawSpadEFCt3NfWKQJhgp3pC21mEreYXq7jAfccGKvDTiVC2KS5wnEVxSddgHEkW5zj6o9q3",
  "key38": "K3oiGsrTCGLjR1pFzfViVmPPwxnuRPS2tRNKxSbU18V5KLiBu1NZtYt7ReUhoHwEoD3F98GUK9K2D6pvNA4nKrB",
  "key39": "3fk5rA4NsZo2MwjsZXK57ot7acLephQRLTCyPn7BmcAz1y3S7fNM2rhSo6en58SaQABWWuxoeee2dYUw69rHxePF",
  "key40": "3DYjzNeyChh7PmzARXp18pH5sQr4jdD8F2Km77b2ECyLCPaoXqnnyK6ZmHngCPM6ps1xMb1pJciX2No7gAQ98kLU",
  "key41": "3h1JidfsvpEkFY9kewpnEkYkRoGe5CXp6vFo4Lie1mm253y9NRqnSWpYWiMQKw8xQ3bE3cfzVMoHWzasRxTLzgjB"
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
