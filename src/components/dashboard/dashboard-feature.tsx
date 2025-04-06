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
    "49dLz8NFwCvJRLxf66e8rRSt4Kra3TaVVBZe7KHaaPYuafdyQe6MztuimJZdkdREGiA1yrFfgmgHAaKPzSmfTVu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4y4JAA1hww9o6u8mpTe8MuMbqVWG4yxpfkCxKAiWY3Hz6QVGV55BCsNW5pQPygdDPxDt881bmdUoMQ1hBWQPrAqf",
  "key1": "2bpYezeTSe3uXu8U1pALqEvpG5ZsqwCKrts7zAMLfNp7njtdtoVD7s3QPBbLWCDGNXp9JpGDa22NDMFGNHvQFWq2",
  "key2": "4nngKGp7HodLwpeD2bNVMS2XBh4hyN8WxfFyPQAJLdomvUibFUAr9KW8RkLiQ8gMoeU7PjtZUGneSaD7FtDNrihj",
  "key3": "aM8fQt6fQTGexEECu2Z7G2dYmNFmXWeqtGLBL95Bs68jh34vvwbPRM9Mi5fZskhiATmBXv7VH19uAaZKyigmahD",
  "key4": "4bJjZCE7gNWRowCiaoxBBXd25UoPCmdRp5ynr4wA2ckj381Y2cUePw7J9CnPw8GBAM3KcfwMdP4S66DHN7qdJCTu",
  "key5": "2VLdVFgWhGH8bh5uQkEWaLR5RD6LLaRT5iVsU1wEskbeGmAUfuuwSRDZV2pCUow12TKGkks8y3sp58tajdxnGgQu",
  "key6": "4cLZrXU2ahmbsGdWjW387XqdVi4ksFaRdzKqiYnXYpZw3xqHuTCSUaVZGbMLEZarp9DNy5Gfc2itifLrFzL4zdBN",
  "key7": "2ebfGCY6ToqyP2FvEc1BMvCzhzdxSU7JPs5JS8nz92ro5utTqmKuzyBbyzr5bWwHC43Pxn5EwUU46QGW6tf6ci86",
  "key8": "59pCdeedWJQNkBtR78jS257H3yHLdy7aRqAEwhz7BcvhS36JLrGFvHRTLs1eQQ1hhuXDrHfjHN5mioUNpsK5rNnE",
  "key9": "4oZBm1Cg3ogcyYafATMHZH3bmTPLXqBj1uHKwJ63N71RF4xpn6DFvFBEnd2P9qVdL9XU6VLWuYwSnbG9E1XGB1Bu",
  "key10": "5aC9oBzpK6YjYH8ucznSFJrfZ9NBBYFShevQH1mQEjhTgQYFDWCiEqrX7522KkomtxiF8gvznH1kaGRX4iqEpfGJ",
  "key11": "3TbgsGjf3wewnR7TWVwmhrD45cBzMxnBFJ5MQFiBtKUNPMP1QgFe6SghmNuARgVSJjP7mg6TpnxmKFZ75L4s26F3",
  "key12": "VYs5MvEedUwcX8yGN3RdEywDvuG3vSfWkayqqA984arze5YETycSirF9PjX48xyUGjQdQvVRmr41m5u8gmaRwTZ",
  "key13": "2q8tpa7gJojiyGs1V2spGe1NxeGcUuTFRtAyFfZuuBnQj5GaNujeVhhE4oRZAZ1Xf6BsQhFuhpGEvCRChVxt1JHK",
  "key14": "66jFXGKyKyKNNMsHGnaWFaE4N2KVEnfzQ34fUd5fHwyGkgfBPy7vuREbSqxvELgjTbDcivcoTB88F51VXUod19Vp",
  "key15": "266RXbh8NvhD2dEWsTWzoPLyWz4FuBpT8GQzzkoTAxuETcqjTppGRJx53BuD21AiR3MY9DKyvpX5fv4wSJsDjag9",
  "key16": "4DcXgTeUupRsrV7XALR1pweA4KGSepmEZB6KvPCegoM2u1u1eRPQiPZ5uwa8Wcm7QgwcUrHUDcEgUavWFvSfKPe7",
  "key17": "RyN9JQuma1XZVLQRLUWDqog1HYQAWeESxS3w9YbaAq9Ei3nKAK9cWLEErEANENrFAfkTBnnFJsyQK32252jcC4z",
  "key18": "2HHqTTNkkHghEWQR1Xt6mrZbjNUxzyBKGz8PKPUw6jFZkJf8Zak8gnPVDjLr5HFHVbobmh1rBUJrvsHv2kP9YYki",
  "key19": "4RVbfFfmdZBSb9snLKa5JwioEXbkTtf1eWF5FP2dqQ5r1tHqxcwkyuMoWsorvJFWHJT8XAQP2ZDj2MNbUCj3st6F",
  "key20": "28kyP6d1rigJoyMNMSrgZZNoksg4g33NNDfMXDtXjJmF2azovmSHe3MSHYM9TnPHZ5JByM3ndxEGNcZSVka5okFL",
  "key21": "5dXjAVnFTCSqBFNypUqVsA3UpqKjDNLacY8sw74LogsUtvuWGhwm8LyzYLLA7ZCgd4LMSVvTq5af7b3d4H5dFJRC",
  "key22": "4Xn2GMbhc7FUPqU6NjHFWwTDwRp3c9ZjqoLNuwDoLDHnpbhy5SwB862U5AEJNGu14dVcocKFrusPtXJp58m8keNx",
  "key23": "5dNwPu72sBeJGb6FGxsBWaAvuqkVFCPb1nHQLjmKfUBAvEAvkpJXaThkcAbZZQ4A4mY2yn6inUFXyFb2zTezE9jk",
  "key24": "FYD8vtgPQT2eKYPTubvdiHKeT5njfzKmccfya8of74U4Gir1MMkaSwp3d37P4XPFvv5JE7BEMcUyScN4pSZjAvs",
  "key25": "57H5V6NJg6Ux7sJ2n1uhvit8NTphqcYKZMHBwP9Wm38ZGgTBvUPa1dFQKGc2V3mjcsxf9UoqzF1voxUwWBXN6Mw4",
  "key26": "hvaTDHjJAdLawdnNzMZVRgRBNXRQXcZstRn2ekySRL2sCgfuJZMWPzFWDSYmHAwtgPGzSd9PxCR1Dr2Ac431uZW",
  "key27": "2PtU3QcAvLMqbTLAGVzkpaQRh6CmB1RjQ4Sbao7t7FFhwEEsafC83KgpXvxuetsB974unPKamsQinpZHDwJTNVmz",
  "key28": "3ruzoECx7gcjG3EFmVbrrP3EBCaeqVGtynQAY6nykoe6BxPUQiT66wjDvLK37ysqQ3LVWzBmGGPJ7FutwaEYQeAZ",
  "key29": "2ZkUckSzYHyJvwGbvX9gvee2tZKJyEjm9HRieuEJXDPSfS2jt799kqh29MReNhJcWWzijHh8SvefKf7ddnJps9bn",
  "key30": "rhZqhPTdmAhaLR9nmUxGST5zZrq5t9Ae3aRdbCdQ7G6AfQ5jsyfRaSEwzvGjUm3apvA2gCnMGjTXfH9L2nTPtUW",
  "key31": "4QJD5asvnoLM5Aa8mZggi1tsiiMg3i71EKhsgYozDMnWWUHCPXH5Tcm5fKxLCVjQWH4Pzm9FPkabZzimxMucgwyZ",
  "key32": "3QsHKMeKEhw19fTUoTKbQSFd3gKUs8NxYVjVMemF3dUrp17PmgLMDsHARU6p2VTYR9rTbpSezumyYiBkVN4kq5hT",
  "key33": "4qGoUyVfUcYCv4hggK8yoVFNNkg8yLd7FD9a9NTxizSRqBPKsRRXTSjcNziF3YQSycfcqW7xk9BN6sXE7c1oz3tj",
  "key34": "3ZAeFAskqEtPxKi3JPSfhSvktRTchkvmkZV8nTfD6JJ62GZCg1EBT9pFTsFFN3nsxXrxmGGyFhhPtqrtx74rz2WP",
  "key35": "227uMDQejkxr4gUr7CtaT5DXBfbZZi6CSyZf3cHLSvwk1Y25ruwdb1KFGhgcNMWvbwzNs3Znz144ncABNFancLiw",
  "key36": "2rxV4znNbdsk3KTcDrXuNAMpTzkaNpkcKw25gwjzYABPT29MqSkUw6qdt52ZSMRJkWZUGMs5u3MPPTL1MHq92z1s",
  "key37": "WkVLZDCVpGUhKCWwnjQ563uZ4ChRaWTxmg4nTSTefiLJGGWBpCsNGbk1oUqGtaKBHHbdqcw8RDKd2hhKUe894Xv",
  "key38": "2gY1WtVHaQPzGewv9o759J8EUX4pW88MfDv9bkb1JYyVVDHZ62rzDGy93jnhKZbfQtxDkeefBmvnWJL8ZbTFF5xw",
  "key39": "49YMeuacV2wYgNv9CN5G4HdTy6L6rwfAQu65ukfr5NWpSSTkUbwy7NBwVdUP4GdZAmjph2swZD2HoseP7TEWxrKe",
  "key40": "2Ev1REBMvT8Kff3FXVAuLXNKfYR7FPZYGLmUG37qP4NrLZmyFMbjeDtwMLwacpYqXTfZKoP3wFno2VZ6xmRSJMRj",
  "key41": "65LKT2kHuLFreRCMXAFaiAtzSPFcVQmLvxLQt3xxPb6Lnzjf5mMwWpyp9JzCG4UwmbB31Q8E7WB8jpQrbUmJGwFv",
  "key42": "vCaYYiNCHXtZka3DR9uWDb3JjN7TUxYTZihywvTmwUZq1DSb7CQTSNxeyxqzS1RhPmyEXYDnJawjRiGdEW9A9BC",
  "key43": "2KGqUYqwMJegU4VuKnfRaNxDBc74V38KhcmGN7MHyCW51ba2mgzYogCTKLwnCRkDvz5WC3ZzrtrUMdjnMzsGkVqj"
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
