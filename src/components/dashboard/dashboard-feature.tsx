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
    "4sh4GBLAv7EUCkXdKJq9Qm1dNqbwKC9zZUMZWR4BrePwXXPGm2uU9XAWNePSE2mncmt5fj7FLTDcEfR7MMe24PfG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s6tDVXwSta5oMwdcCArwggVJJyRxosJ9y8yZtDSpUoBwMq87QVcU28BM1GpiDDHFYsB5JV5GwuRiyafymGJeAdK",
  "key1": "4mzXzMeXciPmLB8kwREFDuCSdRbtsj7WjV1bicB5dzQDZpsNG8PaQcLG777AUeRzS4zEjDcriTPvswVeGqjAwtUT",
  "key2": "44VwQRpSrAtKEkaKGvY9kr7GK3j5QoRyakMNapiay93SKMZuWuhBHFXn1ouAHJHWi8PBxvNgAwURfA3tqAFJmYte",
  "key3": "2bkLKQqbQnHMZgWF6qGtjsMSEozLYkeGKAe7DUFRZMaD8kciWhv3qJKtcxe9gSosWsSNHwhjJ85LQLpnPSZaBP7P",
  "key4": "2qEyMivCsdKV1kn7F2fCYLHoFb1x6fKZtRAkvHfjaRYnb8JAjGSyEgoYNX8hTXJQrtaLTQjfCoRhcxg2HVcfot6k",
  "key5": "JvqnLQGWCDBa4b9TmWy4CJ6eUc9c7SKTbqTqsiPyBsT5ooKUWT3zAx6gj9yPPB66R59hRg9mDybb22pyMojrDCQ",
  "key6": "634n42y5oxzcctXAncwhtWRZ4DvnfhDDVTe8i3ysYxmjXRVE55WWNjnVPh4HsRa2erUHCeRDViSWDmKeyMBQvvu9",
  "key7": "4rzdzUDfq3WmUV1tLcGpdTR5kXLVbG5w8vx9tkgkhB8xdsucEfYbEo6RDSa99SLAQgCT2E986eaiyhZwm6NMjgeX",
  "key8": "5BHa769fKpuFFLrZUBoer26P7J6j7RH7rJ8HiMMX23oVhY9YfXen2bMcFXviHjZTctejQW2m3X4o673yvWKzWwrc",
  "key9": "34Wty2Yydud2463dx1NpBna4nu4T76CX4wY4XPFcDaNDjpxJR68PFpBX821uTicKdkYnTqVZkoKwCgzUuobYLhQX",
  "key10": "2U5SEaB8BmAnV1yRPqnvYp7axTGJxXEr5ouqr2iKeNdcSGpAHptrHqcUX4CBKo935TrLSg1zzvbRmzV4CKpUuKQV",
  "key11": "3HoG44YZx55Lp1Qtt4wddueDHp5euNJZqdaZVPZdySfG968VcQdYxE4JUkDzcYUEatxUMirunHVvbWsmGtRXLGxY",
  "key12": "RbLLjBSjhpXAVGUHCGzvq4WDAjreREgT2hkMj8CdythHgvRp8HddYY2eEJsqCKwhtBHiJznN7HGKpv85gpKqzGX",
  "key13": "5Zdn7bjdyrLGN66eMzuYtwCR1r53Shufe98hsRTXzzSv6Gyt1mGKxcmM562Z7xAmjHTosT8FSPJoLWxtNZts9Bsc",
  "key14": "2tUvk2CF9pAMxQ2pjp6sZFgwJqouktFfo47yZkuq28C31m1w89HMGiSqYhWBqFG2aoKTQmV4pVXhUwEXvENkJoXe",
  "key15": "5ooZH1koqE9e858GTMtwkQ1ng72Xh1rgRpUmkj5ZxdZnHQ875HcwR3s9c8u8FCJyv2CL8LNhoKwhF42j7eudZ8ah",
  "key16": "48VDCFcd2YUEz1wGLxKhB4brku54ahwPWRRz7UKLTmsJq9shn1ijyJn5SBnG9FEnq9uqFpV9t4f74k8ZiCqMfFkL",
  "key17": "2XZbvmxhuvTfdpzd5qr2KkGaK9gH1FPAeuy63NgtbC3VdvNoNKZrZ7rPGU4xUQ9tWRRM5kAJDph4JdKWhmnwHKBJ",
  "key18": "5fQbMDE9uHxyemEzxnrJbPcCAeZNcwXA4bwB8MEva5B7f1A2LH8UZkbdfsZZQxaMfYsX7XopfeagTiZDQwdJYMBR",
  "key19": "5rr4teK5XUxzmLiK115Qy8R59LAaAxnwHjiq4XmKszPkhNzty2PCZk1um6dDNdaiujNMNpKKZVDPN35AJxAC61Ak",
  "key20": "4KvTfBXKB88ojehZh5aUaPrh9dLXhLDaXdtXTrJ5QSmBoqEJ5EgmckTNTLzMXK1YjjwYxyL184G7spxrJgH271NM",
  "key21": "2knETd1EZULNSkWErTGaR3Z6jXuRAUvQK5V1JZ2gdoUXA4ePNqXiS9T4oLQcwH4ZUiBey51ZbGeDgf8ZtKCuZF1P",
  "key22": "2HwRZ78nHsUZxmHNMvxgii5awEqPXY3EqU67c6K1PR7YsoXGfKvZpm2sYPoxip3iatZhxd3TQVAewVKzQxFWZWK4",
  "key23": "4D98TgZ2XW3KWt6caQyaG66FQ6bzaMNAwLPT74D9i22sznfUKWVB1mWWLusQ4oDconaDxpUP9WMsWYXEPTbCqbqt",
  "key24": "5GUwm6anrNsQGwDZNMhYwY8d5VG3nungCecKQp9YKcQ9ETyTrCeRnZUHuJeqTXECRUi7Kt5tJ9nAs7SFdXXRNjRM",
  "key25": "5HyidegqHV3A5hwdNdcHWpBjcGT8eWx8X3fYwBCUkLzVbgbHWzXTSrZK3JTULB8JLzBUFEdfD6G2npa9iCpkZ16",
  "key26": "wkLzSVGXVnhk9Dwc9S2mJUgST1rbKvXkbXsXeGPzZF1LM7GUVBfU8hQ3SKTk36gPu3ViEtfQtKRc7GnUSYpU76W",
  "key27": "JgWxbvXaeStoSPngpQWBVqXdQVaWV1KpcRhszRemJ8Ct4ZiNAFDokksZFh8FjBW3gynjn7YCuyuJsdB5Hvn9KR2",
  "key28": "gPeLn1h6NPeFa791EUiXuN8PQUBhVoq8W295rLBvXZk2YJXKzW4qZ2L5xwAqdk6ASuFmtm1VGwz8grympGhqsGu",
  "key29": "5gCu4A4Q3oXZERYgjrN2T8Naof3MebnUgvL5mRkrYvrruWFz9TfkzZiY6zQd4C2XqXZFyETaQs6Le7bzqf4zeLec",
  "key30": "4FQJUuBbYh7DshWGZ6cnr4NAh1CtB4hZVv3A1N3dAe9EF117Gad47H2zZK9cF2PUMeWBnfdhgeKwx53qW2eit29H",
  "key31": "3KK7vY28WLZnHTZ117KvH47fG6towFZJstrAsrC8pm3rYzA3j54r6sD9eqc6oE9gX9VhbQYT4Pc3xzsgkXxsvU8n",
  "key32": "5XnPQoBeGpRSLLKufRnSryPp8JVgcECVDMELPbjj9TNTok9SSocXUSEhNq5ZrmbK5T9NVUWkBiHbpbTFWNTEk8a4",
  "key33": "5XynMqNfbMkkjRhoGUiW7eiQmoxk9cFnqqDpGv3pan8VAffZA5z9o7K9MBETSoKpjq1LGKB4aUy32RZgpvAM5e4K",
  "key34": "5P8oZCoNzbaW14aHzxHBHkPwNifHxyUbNtyDAaAyhRSyHhfxFALnfsvbhvSMAc4Tg73TgiSqr579mYrh1MsDkeTC",
  "key35": "2drozedynqjimWu8sGy6ruKNzFJMP1o4Um5V8rTVSZKT1ANV8tNzQjNikMoLFfmd6BU9CJECh5Xd4CjCGDri7vJS",
  "key36": "dYYQhuLGCbxUb81FVBR461eEXhMBZd6pBJDScHuYtY1RuTgeyotBxzy6twHs4jULcRspabVRrXHdFv5RTuRrdfa",
  "key37": "662XPeakexMFJCjrFWXSzhQkGekFGfxMdCMpeqXbLaEj763rbeEco9263xWKpZ2m2GV8ugA2EfZRx2sFYtjuHMM1"
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
