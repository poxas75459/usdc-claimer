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
    "5X5zELqRznu7xGhjRqKSxffAdNtua3pYQEmRFS9QCjvy8WB4ka3sGhsuifShPzRvst119xFMp7aFXo6fYNT6KmSD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RnhgHB5jmPNrrtwAwRTm8pKBbgfEKTBrkMRb7aRiSeQwssDu8GiytSCLvqPJwUoae5MN8zWm34Y2BBcdAZbSnos",
  "key1": "CZzuXUnKrGBFky9LTT8quq7svcYwxCrQodctBUsXe1HACKgDrRgCXSHsrHuAMPY3Yt54y53CjJwqDotAzabGckT",
  "key2": "5nndVFf6SLqLhjH1R4KaVi2h3AksSiL6ThCDSat7XGUys1pZZN7fJ3vQY2e1NZC1KxfJVjZnNucP2Pno7AjU3SgK",
  "key3": "GmvhRgoMACJbxSjj1SVCdoHJHSKHnHQg8Phn2HyuECb9pU7YN98DHY5nHdxMGoLmYPWSMDrn8bk6KnipdbLjnYo",
  "key4": "bvSXaQnoFatL2MMbzBUBTZDtZNXZ776qxAZ9F53x2DCnsMrmk3LAXDmZhDuZ3y3y1EvEqnjUacsqyQ8nz1QRhEv",
  "key5": "SJVrmtwzuKG8awdYKU1bzzuQ2X8tKMBHfv5qGSiB2gvrCMebXLzuZm3UHUgVru9VbxzLKwmbGMkCbkLjZQJpdso",
  "key6": "3aLCGm4dRPc2SkZNQsGhaBYEDUHD959RnBYzuLvKYamFb3ao7AJayB7XgtCKwiXYqR7Z41s4JDMzJeUU3Bc3sAXG",
  "key7": "mZG3GV4SbGTjrLB9zHbt7d5Hy3fmRmqThq2C8XXN8La7tZTKFPijrHkPjjpKdyzKsAp78XY5yh5aR4F37oriEa5",
  "key8": "3r8dFRK7yVjVBeztvv9Ln8HRwWYPr9Nn4u5ivqR5CYp629u5QmF8UMLF5fHPXwGKqH4e8TQX4JnETRAgnwR9Jqd6",
  "key9": "29WLq2jKKzamvy6ZDrVpoitmgq8Dze1JtkDfMJgpfhWuZoJP1E7btENWdSknnGiwUU2BrXZofMwGkbUxH2xNNY9j",
  "key10": "3Y3xQDCsVhj6CE1K4Ug4VzYyi2abyZcdCPXCgWDX9UnxpwoeVHzUXtbodQsk6y7mxHwbqHxC3mvTcmGxTwyFb9ue",
  "key11": "2tbnhwft5gAQqBKF2QqFRq7ZDAVMwnXSVoPmwnvMPEYBWNCodtHjpTSP9RS9AcYRwBiZEq6PTNT6aRSMo31HH7mH",
  "key12": "5duc32P5xeKRpfHr3zA83A5MtwEsb2Ms6Dt4FJneQsAeySxy2pD8btKjPqLxu722Y51xQapeWDZFTduD7aDKY9yi",
  "key13": "5Dw1pAT4wmmbfvm3dNSwK5wmjPwLRWM2cu2o5Woe8wAbhQZ1PMKqdd5JksqhHzpVALaTm9e5a5wc2PLYQD2tNbfP",
  "key14": "En5iCYWXRLdkQK6zBdX6A3rdWyWYN5xiyGFpoC3YzJfrcHhHzW5YDixgvqPnXQrJ8UPS8uPCVdM2aTUbFXqGDVn",
  "key15": "5nxj9CLLXJLuZbVXA4wwBauLvLfRzggxVr6KDqBWRX8kTkuiA419EyNLTM2BGZ4GteUrtSG24gUk9nZHMsWYaypK",
  "key16": "27gkyAKmcncRU64Arhdpnhg6C4kaVKAgmeFzhNfpYjW7U78XLdKZHVbg3tQGyuyQTQw75gxudB4HdoNepBwfRcKQ",
  "key17": "7iUfiANJK8DrN6PapLutFpKAFiFQxoKxZEukysV1iYmt4su8441xQQtrVYKPQSxQVrsG2Kf2p2jrT7PSQwM5C2X",
  "key18": "TKTAhHfDnnUR43nGZKhhGdUCswbcmP6KEwKXeqgQxeNeTv8noMBveTAGszdXUFxzLA8EMFD5NELiAve3xMTcPQJ",
  "key19": "4FRctC2sEpPU7f9q4GYDWbp6N33CoXwTcZeTX6c9i1EM38kQAdNLtuDWPG6s9hCPwJLaDm3C2BGMjBU94njTCUD9",
  "key20": "5pE88iy6QPCTD3LYNijJF6ZGWk5nhSt72yBrPvM6gtVC1Fpa3psBbsn7mBZZ5F25sughXeCm1KZ1ycAD9Q9hj9qM",
  "key21": "4Mi1txEwfCd7d8bkqbwdWQZyWyHQbetbanU9jAcAhwWaKocTQ57KGa8ZdbV9XKUCsRhuoNP8adrkeLPx7KdYKnHv",
  "key22": "2yERMcQGC71ojgaHoJr5ejLxhPNSVXmXo8MXx2kGxJrVoEF3r4kmoYL5vQJbZGYk96nW8vBLjnZYUEeALMGrDKUN",
  "key23": "jK4ucijoYQRJFY1e8gxtx6AKKk89nVWWQr7jxbXT7xB4G8ZDD9hjYqFnCDu2aVGFtzVuo3qSeddi4YsDpuVcurz",
  "key24": "2wt6hKDYAqAG1Fiwb7sAwAiJToPbxkvtq7eh3gBpvgHXB4qrfLA3anvgmDNj23S7R5D86A1e9c6R9s7zXCqmKprV",
  "key25": "5qZAbNDpKWb5L65H9tcrQ3ycTtnU83RFuFC3SGN3D7mipzKGMA4T6GwiMHyVRSMJzFv2NvK857zHfurcuAaWavP7",
  "key26": "hczMP6vqxxXpzubfJLuLLqLryVRwvEfSA7fPq6vSQEgpFgaiGEkaovwZX8GftU6yWxVDNjm6dYouY2rxJUAd8md",
  "key27": "2GBHZ5NJ5HQPbXmxriiFvDrGXSb7THaY6T41WcxhAbtYW355yt1c2fGopTCkRPF1T3Bu4CYyRGnwQb6ag8PZSKTt",
  "key28": "4AgaUzafCiCyW1omZM3qWNvPtrAW98wqqsvHcfL8baciBSoEFVGQ3G2uFj6FE8BEMEYG4ensYj1Z5dRPBB8DPTMS",
  "key29": "5ve8X3LQEB9AZGtwUm6bbeKngwwCd4VZswZu2wnpR4tjymrsqEH5rNVvu5YWwWzPkUpPLVGFEugiZv7EgkLts1qG",
  "key30": "5dGPUqv1UvqsnzsA4D4xDGXeV5eweAjpn5zMsmfgHNvrBG4AAZiXJMRh3bUVjnV68pC77wk7RQWD8iSnVWKxMw7C",
  "key31": "vhJJQvtxdRHXRKv1RzhtH8qvJkV3BroasxtWvkZG44Fu1V7RQNicxxEHhgancwFUvuQT2mxA7mYBw24oQxeMCZy",
  "key32": "yqsGcag1eXksVQbxV4VHkk4rCCZ5q5WEZ1ySPpZEQSFRpkbUan1X9a42h6d9KWsBLwmxtAywUrwc2Prjd3hDdmV",
  "key33": "4sHfMuDpDxnKfAxEWnXuSgaTf7qqjzYUVU4nw3HZ2thWmN6aZmPuvbCdGkV8FkYAvxJAVfxcDsxtahLp7TKXhAfF",
  "key34": "XuPrzSY3zs1HhQxrdUXv88gEW3PjjfXunewg4KsAaE4WaEHiuXfqrsrxPUSp6gFwQpMwucGSshhX5H1yBe4CMks",
  "key35": "i7ccruju9yVmK312z86Seacpd6wbaazoY1dTfZyZgu3N6PQhqdh2RbbdXcZKDczwSMC7a3pLnkUYB5GUMmU9UMv",
  "key36": "3ACJyVRxLUtSkEkbb4AtFxzeiWmQ7G2A7AfAZnkSVdYQtWas6shhAjP2UKnY2drnqFozjF1JQhb6uaa4PpRc3hEu",
  "key37": "5oAQkmiQyfz5z3gr93BQCRn2HRAyqYh3SJWc4k8tZN3b1u55S955StF75Yx92gbEy7jBAtg1NDTWgy1G529XHfCY"
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
