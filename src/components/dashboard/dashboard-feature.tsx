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
    "2qBZXzV8Cf7RG4Ru7s91vShNQ7sbNCC6XpUadpGYRdTfYXWiUbXw4KxGMVzZFxp5WBCCsjZMbTYizRH38WS5j9P9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CoUZkACyj8tu9XAj1ZtTFJ9aP4DFSYrr3iJLyEAMKzZGp34D3kCgJMiP9sNLJCdREiv61AxbQ8Wdgdwezz7iSzW",
  "key1": "5haNw7coVVUEdrkXjKyFkULNb8C2VS1hmFYkTKsFPdX832BhMhbVi2gyZsUJC4HyAzc8ts4hapJW33mUuybEuhPC",
  "key2": "446bP1udgmMYK6xEYBeuAEqzJ91vv8QByWwpuhqeimBcyZZG8UySu8r1sr88SzMtzf4xkA6w4yAMwruhX63qh9sb",
  "key3": "4VaYztCtg7heNFrDnTveCrLoA9X5dEtV4b4PGSqiqHMCd3WePuhCuxiPCHU3ZvFnKNDFmCwBQeHTkkjUq3Q5gNZT",
  "key4": "42nKAPUtnrCSgkV1CFy1uNpFkXPEupsehEPP5NEfqUXX1RxCrXQFgYbAKGVrWGbJUQMLgJMsp3rUKuJ8wSpJ5rvj",
  "key5": "3eM1M7egbi7gP4f2PdJjsWzCCBwjiDumCmmLWrf8i6rhveKEs8teB1xtspE7wzWgbaJoR6WJi27QsSx1mAKXGsi4",
  "key6": "5GSYtygNb734ifKyziDSPM9CXKDgkJDiPuwKr3v9ZD9kTKWwnLPJQATSah4oS4p7Hsv2m6RsYHCYMpnAJm3JQZZF",
  "key7": "5RRGC9zNmoJ86p3WZaW6Xxrhw8962koaEz2jXdFmvJS4KZWmFn9zwpRCA6a2irQgkEdVyH7fAksu4NBxq61E9DAe",
  "key8": "5vxPTwjtbDodtg3RDG3DHiXiJJR7JbkWX4jZgQwvi1EdN9sAZnkxXLXBQ5raZSuJZNhcwCidDCmtrqrwP4oQ7G7X",
  "key9": "6rZyKc9P5VejQfQnsMneEDsdMdDuyrWbnH4QBCr2zUPpgPVz43AoLQCupq8e2tDbimQ4MafoZi4M9nWKd8KT5ye",
  "key10": "3VpbC5evimUjUGLXwz3ufWRFzpEHi35wmtmG9MUrrm4dfnDUj2CaCujvJJxMYcEMeDwfN3LepPCuhKzbuULMyJ7Z",
  "key11": "3JPX5mjGnpQvd6YvqAjMfiwDTpAE3juRfGw7yL3Stp3EbFhpA6GGbHGccTiEHEA41dGQMaw2F1EzuKqmS8sShGgS",
  "key12": "3mHVJSkewKUiujb2bdA6feXSStzJALXPJYQvugiiAxKe6aiGz4iTtDz1SXYq4A3GELMzwZFXyN3fKCDuBw9g9U4j",
  "key13": "2vFRymHaajPZXXUtaJzeRiJ2xSymJAnxAgt56vXHnifZB1PHWXz3qng8L41APE31JJweNAgaWkcePfmsWuKWzxLo",
  "key14": "s3R2zC6oy7hZfJPnJmS8fyUtqiF1BEqWCpvsGxd5jaYd3Rwr5bpJmW9dCJH3FKAoubKVT5F7f4DT9ngtYwwMZbo",
  "key15": "wQfASa1HbLKovG8RBStXhtcmzHq4hSZnE8sJYfwikwuFpQZHoGKqZenTAPsyjTfguJMvmiCKE9crcnqYp4QjTU5",
  "key16": "2rjRhAHyF77EQwB9PF8cV6RjPxYk6QN5GM9FgBPrprof8J1dKHGSme4kYXifNmpw3UVnMJ9Pgnhj2ACTBPza5jbE",
  "key17": "zmMerkMbgSuU3BHWrArSJaGcxf58ZV6dkPRi4wrPMX35ievRGq1Pm9GB7AoQETrMNAgXsX5eijzhhz1MfVpFGiy",
  "key18": "5go8LMmrhmVWEc4CWUxyqGXRP3egNCSxk3rMdRs6UXRA6xNTchRq6JMzZnsXnmBpZqp13Sset7osLoCF1KSMnvEh",
  "key19": "4Z4JmFSdxjxUFuBHXwLk8kxQ86R7KE68s1CdjhKPAuCsBxGFDK2VQZLea8J1nDoqrYALB4c3dZzgck6K2aQr2BR7",
  "key20": "4VUKiBgP6aXE1vdHfyH7ZCSzG2LPDXcH738BmkPeqDyog9tLSKFWKEUk5pz8jLMRmhTSEz6FgZ64gZTXpgsbrMSU",
  "key21": "2Ybf5VPBd5iLzJ6JYiE5yF4BKTzeJLTuXHQTemvewdsbjfA7oYXDaBK5bV1RU8UwJXvLcHyMPUnKeR6KDkvCim1A",
  "key22": "5hKoMEoJiBeF5AkMjapHNLNsKuW5LrcBPqTNsaWTBzhFs4aPf2AXDgu5SDcrjo17cM4iK5F27ktNsXik4jyqG56m",
  "key23": "5gbECT8LZ9mKx2kegBcEQMFm5ZnBYxTefXrwZz1kaQW2Rfssj7Hrmsh4FciRudDgBf1cwf6aZgj2eVBAHVJi9H2e",
  "key24": "35vJ67nchRiZapGMiVoDasjdRoyUauPah8TAmyJKFqBnWNgyjh1YfY3TwmybQiC3Jetshhwp3o5hpjBQgfYG8WeU",
  "key25": "5Y4zDqMQE5xrbDUjTaDLGYqmbL4NRCrGpJac775JWciwJLd1hqTGKfXiYNGNzvnuYXL2XnH82EiP5xLaxEMR7f4Z",
  "key26": "5hqkkpRgwLEBL1KE52be4nt9o5PGCJkcXT5B9gPbRLeSYzhguJWiMKouLM7hncMs7ZLPKD9zncZP8DSt4wE2i5fB",
  "key27": "5d6R8zBngnBWujvHF5FZC6CkUvUA6E8TQM2ysfPGDsnLTXWd62siVZ9kvMUCvK5tieTUwsBzttzDkr7EiwV6dnsP",
  "key28": "2okr9eMuxC8UUomDgajvHoTneYYD7yvchKC2fCiYTMF1cRsXa2F3jWwyySMzbHps7eGgkgMnxqnV3MPpBxLkExFs",
  "key29": "vpFrvvpwoXgEuDRYvvaAvuSfHELTZiCrVzwCrLqvXmcvCHSHzuoQJcr9YhT3khvcg6nuHy6Yix4WGAJjMk4sU2M",
  "key30": "4jN16k66dX9BsGKrWWeZ7JURoPX6gtQFQn6oL7YPfW8Jbcim8HXqhMutzNVmHRDyVhXD6zxnb1au3p6usZ7s1W4Y",
  "key31": "3TsQxRsESYrRNJcZPRvgNpUDrFSSW5twKy2EZfApzpHJAiqYebqcrmdpnHJrDYHNNNeKk13H8cozjM7vhXhZDbT3",
  "key32": "aRe56uetGkHKgrXVsKKDCtjjRJE32eA3AURjYEWf7w2kEM2R1kvHSrkMiSVwBuFLsd7qyxCivfSHKR8448e2W6E",
  "key33": "588GahUPxkToDrwAmbtgdtttPkSjdqwYRHooGFA6CVAyo59E53AE78dRJgVZeENchXJn8umkKxZPVBARCDY8kimY",
  "key34": "22of77vpjd1SFohVEg6W4wwpWLVNGB1DtbD5Nm4EiwLNk9ytNn5MQT1emTrXMbobeUyXZ2C7tKcLCq6P6uRETsyU",
  "key35": "2g2f7NbjjoKsDnjce358LrsTcY6PW2DYysZooLVuHDFTG5pSGt7dfFhWy7tJfNwKi5bF9fn9xPbdWUnnYsL2Bnn2",
  "key36": "4avqmnvmw4V2AknFHsL6cqDzNLitsLgJreC3yEdp16bNSMha1FD6bqA7sbyCdgosqormh1VZwsgnyJb55F1eCbax",
  "key37": "nVmq6Y7epsKhUoKnJy3x2ASSz3Pmtm9bfvBin6nofBdKabeyPRPKfLMMAJRsAtdTBGrDJyKvuV2YViZBZekuu9b",
  "key38": "4vwbXHdVPibBFpUUi1aRaxmPaEiHhA38gAN72psKD4gc9stqFPa3jE4Yunb41kapFnzB4oHtsF6fxfBwW2afUE68",
  "key39": "M2B2CveCaWz5kPJEBniyWFpReG84HYi2LJ8jRT4nLbubDHvWyNwV33zrewDABwjpXgWjeEsA9PcWDwuCUBUV8zS",
  "key40": "3nJNsXW6aVrZ5Z3Sm6ZGnsjZaDG5KSehzmzxYz29mYE5RWdZ94h5ooarY8nVf69SYFuHAPuWZe3ppWEsYmS52YCq",
  "key41": "3nrBnsCk6C7EyGFdxbYRoGxMLXXbDnBCybFb3SYYegXsh3KSSi82of2wwj8U5Ar81tnqw3HreXtRw1JDundYSPw6",
  "key42": "64M9T7XpbGjRshVvGmMmzPwnQ6DsgA5HameiC6rfdSnXdJguuXxGjKtztqBnfDwhKCYhPB9q34g5SGntQWgMbQHt",
  "key43": "3tjxKrz5o4TtrgiiK7NDsCGWEpLJBcL53Ea4maMuS42ari1zXeu34XfvhNJAE4iZcDZtewc5N85DSGPb7smdZ1L3",
  "key44": "2vBJ55Avkv2As7Au8TT44BHpWP2zjCWY9EMYQd4uBSM9RJzDJveRPma4URJJdYVcLm17BwjVBPWQpUHjcRxGB1Wb"
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
