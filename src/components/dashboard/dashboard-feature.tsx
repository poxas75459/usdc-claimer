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
    "5uhWzyt8Cxc4dAh2422MWYPCxmRMVEXebHHbLhypkNUY8q8KCjuUugSh3JXCote5Mg7sG5DGqaAX8f48JPvjpXVH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dnt6MSpH2as1HA42BwwgGGVH2rRe97bamz1ig69gAM7s2sjbgt7erLXMfjubs7hsDhysjLKVoZC8XWJ9qU5grQ6",
  "key1": "2DzVH1xTsjcQSzjVm7ojCS23wbwXhbMghqL8r3GBF7EWGrgshiR3gd19GgEwKJ2y2t6eEyZLoPnbZKF8rSNczqwR",
  "key2": "5nGM4LbSbjPCzejMAGBwmw2Trfg8skkUtCPK8J1Tv993NmHyEgnUMvpu7btncxAJpCz22WnjZc1PyWmxcuNWKZ2s",
  "key3": "4X3fbCaGhhGb5j95Q8ocZANHuYo5x4f8G2YhStfcuGRk99sXmYfgduPma83acFB69Fqh5aX5oYWgPPo32SyXpTwG",
  "key4": "8sCv8c2df2a1vsRWsnhnx2k7cUemWHEhArekx6y5pEzGR5EbQdnJTR1FDwo2XUBVF1UrZ9HB8rgEU9wKJXzqB3K",
  "key5": "tymqZKLB9VDzE9iDJ9HWeYauiqZyygJCvRN1ohXkQumY4WnjsApJ9BGHskHVQEED6D4qqfASUnKvTG6Xz8azpuK",
  "key6": "5iZ1TrUpFTVoJJvgaKTYRKPNTsJttQsx3Qs2ivKtkQaHnP4A3JzjwSUi67khbe2eX1CVTboPRQ7CeCfHZWduhVyS",
  "key7": "qMg91LNvvpTFLmMDvyPPSTBPEcqZDyTQnw76UtfT6TWibMbRXoaYZgnMz7Xn3uxTL6SsqbVVKLpsPciP9Hz6AXW",
  "key8": "5YUaB1pjgXq6JtwXtpVHACizwG1pkurjYJp4MrJ29GJCcc1a6KopWXgWR2RdjCkCRv9tAmn5NpimHCn9ftq7XQeg",
  "key9": "3iEuMhNbMG4VvK4HUsuarKHmK849XEsynRogUbnnETRibY5vUsGnRCSmZb5wmV3uLMwp9VJaaCFfMzCJcdrjrxM",
  "key10": "4NihVCF5Sie9WaQuNbrovRBwZUMX181A1zo8nKHMuv2cTCjvxdU6YTzgXmoUTBP6urp2G3JVsKGJnQZQo3KydUeY",
  "key11": "4CvAeHPs8dDqjDcfSFZvqiGZKjB9D6BjzPjSms39e8K6ceEJW4ibhuGQkuwzN94TL72Gk1HysPeQgZnNGakw4WNc",
  "key12": "5edXvRSVZnSotkSaWKNnYDaU9tHohopZp4fBaK1W6CkBnZqTaus1D6TBdnBsmGBde3TynwmP55PjyMWLStPSdgkC",
  "key13": "5Nt3FwdUHLyRxP91XdHR74BrnWPCkLAtgxMP66RjyV89hRpoJf6nuRgcRERgJE52uxCU42e9i9VFd1u2BhkKuDsU",
  "key14": "8Lr8VjnSvmYtjstgTNRCKFZjCbj8uePb4ZZAvhJ4jM4nsNAmb33quZoekyDm1fC5iob9YicpHQkhKFeb3bSriPK",
  "key15": "4uwnbx1NQ8VFET1pnariLDSsGzpA4KUcrXFjs4ZLHwoVbSfEZFHBfMtC4EzpPDCs2oqmanvTMt73dcHsCC5cYyt7",
  "key16": "GPMsSZv7TSaKkQT5CEcfR7TXDYBVEaQvRyv2QSfUy2CA3sRiozWDTgFvroysUf4MC24gt1v7MgdXLHsosYRLkPR",
  "key17": "Xz2qvubkYr4WhRQLKRd9X7hCr33rkksgL1V1FRQubbxUVUCQXNowGXbBYm4e79E5AN5JQVHjdRyb1F8XKJ55Nso",
  "key18": "2TknN8CxxZRS9B3wfPJui8dHqLHH84J8wL6e7sM7VRKnE4McvGT7HUQD48vBBBW2233eCdJF32prc2Kg7N2f2T3S",
  "key19": "5ZyuMSPJoMBfTSsdZCMjvHbVbZn652WfaxGcNb3sutGCzeJx38nwmoRaS83Grp3DrrSPR54BXRRQW9tJwz6pA5JS",
  "key20": "5vXsfjgKYFM4NDtdLLWBNvQU1N1Cr2USgg7gRtAx53PjfGAZG26rBSP2y4YBCc4dHv2UNgzf9wEhZxVi3VzKJH7z",
  "key21": "47B9Mf6s7Jcz6aHx9q4BgdJDYUFfBPNBTWnsPzxvmuzcX3upG4DWhcRKPkc87zTLWCL9bZYD1mi2oKG3Bv49ZXVN",
  "key22": "2RJJMgaTK5G32M86jUHEdSezBfxqRwG2qZENv9F6TDKF69HKBUgPPFv3GBVufVsg8GU4XkavAEt8QJiDTGndzFWN",
  "key23": "23LrERdhc4TJMPPkVaX7C4XQMuFzcon55yNVE1twPsUQ1P7sMYZQb6NBX9Y693ZzjoJtwDFogBFs3XFZHEjs4uwk",
  "key24": "3G9E8pFy8YkhtP9jAtXJatNB3CzfGv9ENJowGQMcQH3SSgQkXF5kAdBVxQrkrR8XUUy6WGB8Ny8sViDmfqYyuXjV",
  "key25": "jnuFZewYThVxuPzvLNpB13t15kDYtSkPq2BEsytfQxXMm2q5hmfAt1BUTrhoQByDrHDpjxcsNbpvCW8qjeht1oc",
  "key26": "5JShN1ht5DZzrcqFSsJF5cWFMxFKip6FzXMx2quAxYvqSdtrQFKPMKFWsaJ7kKvjyWS1t2Qfx36Fs1GVp2Hmggxa",
  "key27": "4L4RXJTgdFBEVkMQyV5BnCRSCgxVh9s5CADfkQS5XYjK7beqeFAW7nsGSoyNr4VMgqAjw64rzpRLR7H6F2GuGPU7",
  "key28": "3LBsnjBXWgjs29aTXN7fhXqwP9Y1NMobnbPd9YcLFcDaYDBs1bzJDh42Zvze1KSgeU6694mk35AoP5dNesfejJjQ",
  "key29": "4FEJniYwStMsk1Wgr83SankCYyPJqWk44YmFeS8FsEPRSwzpa9rXpFQij1JN1JSNtUy6KfUKBAnZRnZzyACo4AQo",
  "key30": "5ijaTFQSep5PtKGvpjwDKn9hcPwc9zZtX248w9fyhhaPp6aj7wB7mspTFAthAaULeavaegeXY74myND2Qn8QPatu",
  "key31": "3xSMTsyA2TpsesirK7yPELMSrtyhbJhBUvhJHaknrMtDoHA6h1Ctaegu5yVdj5j8GKVmgaqEq6n834fP4CV83RJd",
  "key32": "35sfQF6n4Ey8Yia1ZCcZ2qpuw3NpTZBUHuPPfjqGwML8JB7cdxecxdMNqhaDLrpC1u5DJpvkbGkgQaa9KLCmf7Mk",
  "key33": "2NxAWN8NoRYznGHre3Gq54Q2r96ZSGfRUjtk5ft2MQa6vCySFpJoxPyv7ShNFdc8nvXXVXmJxsmvYPR8nByDFNHa",
  "key34": "3hhMjQ9fc6DuqZUzyCvBjHMGv8kd5wScofwGefZ33cvYKZGdYULoeAkwznenJ2uGrEetLoHc8rejxf5PX6Cb3AX4",
  "key35": "Ezdy8yqpVbcHfcHVissmhBFf8gNqBNgsiFTcgPXLxtMc3yBTKdLUwoUS25JCdLS875rB1c8grqfDu4GcyCsSao2",
  "key36": "2GsLyoSMRiJaMLuBrBPQeXVgjVccwp8fiD9AFWQ1h6aQype4eAeR1cFzKEfniRLqV36nuST5ijfHxcvMPqrvtY1m",
  "key37": "4xFRHavnuLMrdp1sVwQtcV9hiXq9seTLRYvVdAehr8NKZW9VM5jtugrobFbq3UCkfgMfucXfe6QR9W6JZ8YQfA9h",
  "key38": "2XEWhw7J1na4NnXTQX2K2FCpK1U7UD2VW82fkic7GXSDw9oEThDwmzH689PqDgpoEGa7u5m6aCD3mso1bir7tGR8",
  "key39": "4LX99FYoeBn9ojDEAYjyP3y9syYvsdVJaJke7rZZrFVkpB9D6rxCXL5UEghpzVY4boSb6WmLgKwnnRHd6epPYAuo",
  "key40": "598kQqs7Gqt9BDFiYqCUysvcnTbdAaLj7Kahs4so4WsRiZYHHdtZFYYjGrYMXEhe8VjF9UGUp2FdY3A8jeo8vPHB",
  "key41": "3hrxAkxL8vSH4djUGkd9CXp3TxKpk7k7Bz9WbmAXRZZ5EzcSSxVW7muB6P6Nky8E3SAMpZw3Gtxw6wWLBakVQ3zY",
  "key42": "2MgvE4sGSYL4yQNU2tzxCZV392xAgjfNbqkZ78ez9iS2ooYB5k6iE4SGbXn44tohoq12y3nzZKrCaZqo6JtBN9JC",
  "key43": "2oHbWYMKjhvJwwettozuNSvE4KvEgezQta3PJug2cmTEicHs1Gn11U2aW1DCGuqpmmQ6oAddmaVGcaucfP4DrBMJ",
  "key44": "U7gmEGgfFARmbXj4TuSYCxHkF3DqtXQ3phAw3URAGoAhLxrfVNZ4bpCVJ8ru2EKMmkayBGfXPKyo2f9HhnNpvcy",
  "key45": "2LDrJzpExobKKuuHmsMcyXMabJk21hQN3DeU7wBW4VGB6tmFM3KAhcwHa2QV9jwFYK5HLRzTsHuYvxK32mjNeLsL"
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
