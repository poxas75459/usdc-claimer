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
    "pLtJvvdxVvWLwHj5yT4BxJdr8nDvvZuFVrjoB3sfmJ8JY3SLTUP3XVZakS6MFw6Dk57ung1aWRgKzf5cm5mAayB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g2vAHumSPGvAA8b3Rqjng7mg5BVG85iy4KKct8dE3PsFABd41faqtM7PYNUaiRUskFFbXC1zq7sSZuwurpEf6D7",
  "key1": "46obiqdwrb14GLCpWveNHdGwGReFik8PAREMoGoB2ESLCtqPYXoG6uYFkeXNUYbx3JycdKCEJM4WuRQKDJCYBzJ1",
  "key2": "4Nwp3jMCHqJupMoCPHSz9uJh4WRWT9BpZDDQ53T79dAkXf77L7R3Y1ypFA9GTyDpVgbYAJhMahC2DFJPs8muZoAM",
  "key3": "4oGbeH9ZFUWaJe3fCeuuHTxjvr6R9mLW2PcZecRaQGyCsxWiLs7Mncz9d4E4dAq7ZFZ3m7ZDyyumgGYwq1SSQqx8",
  "key4": "5JDYrzNFPpP86oMdkD4fkfDsskexQcFpfqU5zSbhf2hzUpBN7J2tFmaMaSErHRtm2LQFCiMQfDzsSYqqBLb1VUQD",
  "key5": "XcfdGdR8Zsiy41UuLhwG7zBSJJFqHYuTniP9ZWkLfQq2uqVj5tsELdQVGeUyEqUzJ3exx8TuiVemcCwzP1giQ8g",
  "key6": "3mxXM2okTa4oCq2ksQJLhBS6VWSB8kYEux97K6YKinUiZnCKCuFFg7avHGwn9iqagnJbb2cmT1HyDHryj1sBhtxG",
  "key7": "XvZpyzBaK7senvb7hb2ouTjJhGzifH4E8Z33SzW8JQ8WSzWc4DVT8g5gduhwyTZLs2wE78z56WUVzFCjmacdnow",
  "key8": "3Ymads68ts7611jSwwSEQgNje9makPGJ99E4i1v1jgfCSN4vkY3kSg6paxeia2CLwWT4yDKEjytR2k6PXQ3S171W",
  "key9": "47qFVJ9Nh1HQYPkdA2wZy1RXDARjsyd721Af9hKho55DhtkbfxBMpHjybKHeRGP9wfJQucDn1sZAF335ecXMDtvt",
  "key10": "xrj6DGfxuxe7kaeDJkTSJyf6bnnb8RGZw5nnoD7pHH9mfKpr7bg7t4X9ACzdtswHpDUx9oRUXUrv7GNcAqpMrvh",
  "key11": "4HtKwKeBgxgVuxQCTqLgCf7s7iLEZAEgtLfHktvfDPpuuA8VGBkZYSDqecFoPbCRV4w6nXLD3g97zPutd74YxL5d",
  "key12": "4xUgMFG6Zz7cgLkkxisarsMZFbE7vbH79Bfjhna7y8F8abccKuTnUA6DwffxCs89MWeEt2daQEwEMUq8X1FT4Wf6",
  "key13": "44Sw9p1koTapzEjP7Lkd1c718cHhEiB46D5fp6RseV3D5vhrkftDbh3nJXj61sV8uWyitJvAtpSpVbGW8u1EtfRn",
  "key14": "qEgQM3B1f9mrQJUY1hTraxV3ya4ptaDBcm3F2dyYnCnbto3EE5FeRPodRHguaceuZ2sHcU7akU5RohDFdT5cWgd",
  "key15": "3PTqCnXtBvqda79EmDse1nXP66y6rRJicvHxRJhqydMqaTrFLSNyBqv4URFiEA3My1F5BkPDfWGm9ak7C6UGqHgU",
  "key16": "5Qekt4WsMiSJLoVY3JfDdGmgYPKcwY8BzAUfzCtG22BML8Dkxcpx7DmN12pknRUeMJraeGWjktxB6cD6da2rbqiK",
  "key17": "4WvJBdvCBVVwuy9GYfBbaujcK2bZwjpkiwig9kPEoeUVCJQtHbroY6TDXG8YLgBiANLcQnPPCxYdxmaaPWowNN1W",
  "key18": "P138vdq6hn5sLbPZpaXvAvdoZwDXAkx7Hofn7tBkbxZDeWda9Ep4VmLa6PBszjdbs6hCsexHtEhCsZNGH16pH6R",
  "key19": "sHBPSJnhgSdp7aW8ka7nJhJWao32JdrsdSqvd4u59jijXesuAFrJSAh1KCrU1gzPdS8sJgp7TcTT9XNTnSGQ7TV",
  "key20": "ggHUH4FdHNMYTxXvJRimKyLGntDWRNXd7D1GXBLYwH8dnHFHohFeoU44LmE8emoDXKZBkfLU7Xduw4o2bVFrbec",
  "key21": "3QsauycNPMxNyQq4NiJ4c5qsS7FAVWbRbGxToA8ykSxwi9TrjWhPjGSe8cUn3DiJe2ghc2ZrfFPTE3j7LCetD2mc",
  "key22": "4GjX71uQn6G2m1aZP26G6TZf9BSgPbjo8U82ysyCPnvWB3uL774UqaUAQ3XNn5BbSmaAGvh9hz2fiYg3eoJL5uXR",
  "key23": "1KPkjUW2yJZVaAhHByoKnMGCJjw2HM4FJEQy8nCu6Jv4SEayffwgftag6NDqfSr3e11DLqK8ZtSRTKhxP6wYY4J",
  "key24": "dsHX3BxFMJ8RW7tTiqhwxdeDMAigwZ7VjJ64cQ2MB97ffcbKSfGwVEoi3vbNZcqeFqx8wqN6Q3mxSVqwgQZPTpr",
  "key25": "25JWnPgkH1bzwvZiRQRqv3qLEmQ1wVZrLXqXvKzHWh4pC1p6enxtj7ufU5L8aC2CqNTjf22pYAQDSzwRBCYwv6hQ",
  "key26": "2x35kYjfPw2dBBKZQN3ejWgjQYotsU3fnmjfjpLvpntymXsYhPFJwP1zdGXWDP6St6q85aTJB6xUKAYxFDibGEzn",
  "key27": "4NZCSnMfRssdmphMcG2QZ5VAzSgaU62AKBFhfJznfqyVDBv1L75URbC6veVtPtpcJbg231tsPmeppFGCB4vsxCZq",
  "key28": "51y7zswv3NJdRoS6X5KkmkTuUEBU5mXk5u3vboK2ZagZhkRNsYedMhZZ8fqnc49S5uRjheT1stusMnzJAtHuFAiT",
  "key29": "3LW2ivTQn3SknAfYR7uWApDEx6JNGsVxpVnUgAcf8WdKNBvDvrdFNjN6sTkj9VdPMUvDzt1t7YGb8ivcQrkXqK5B",
  "key30": "2UuE2TEk1whdsCPLbFh518LVBp1jeMKHxxocSTNiPwvgULD6tFcNFmdCvLtYHP5U4DbgPMd4oYYfeVUhexBomxor",
  "key31": "2ygbKCDQy3AgkHW1pNHcqrqgvQLD83ymGZyuKPZ6eSt7pFS1Ezyd6xqABxE7nuE4MwYWVsa1bpkjvXKSLHVRaAWB",
  "key32": "4dh5GL8Tf4MsuWH1a7ducUFQ1FKeqF4xMZYA5573XNYs97KUeCGe7RwtW7nFp4mRwFteUzE3UC6UqhgnaYGdJzMm",
  "key33": "2gbC5yjZfQaaPaoLCgXpwovk5fuBW1jGwzP9mLek9YJxUvYzQpCQLxnLa51wiHmbNimVuGgA5NU7Jj55mSXFtrKX",
  "key34": "2FLGrRJfkctSorSCu8waDGBuAfx5o8NiMbxGZ7Hh6TpZofuU174JUCi79XPFxCxSVtM5bspYiWsmFrHi7tTgLt9Z",
  "key35": "3Gwu7grZwFhWNS6kRHYSMso4SsTXtVh3hWjVMptVZU7zMv9DuzMTM3xF9FSt54h4XXU7S12G93eEZQ9wY5YjuZcv",
  "key36": "3QfcG3zigQKL7JXV1ZsA9ZPgN2VJAVREcBbMUfbxgRh5RpXpr1wFEJNVEM1HjWUoNEYtsXav2BpY92VroqUW3Su",
  "key37": "334k3PPHg5eQCH7vinNC5ywwTnrgyWWMVDj6ZFhWT7NNo4fBnutpbncDGnt5ZfBL4CFtGZfsBsxhh71sYU4StTMt",
  "key38": "5UUovFGhxpbsCwFdCtixRoKjBJVTE5pinQWmwAwb3h5SDpN3jks2pRB5kK87KY4wrWBHaHuKMKKx2oieHW27XQRz",
  "key39": "xqQBqFjeaBMaDBYy7PEysHUjFS2TzrUHwA9JVmEVGh3XNdCaVx9nyKqu4UVyUZYzLmtQ5Ns5jk2SAGo5Q2ndC22",
  "key40": "2mUrzuBsjhSfCbQo2aD8MRvDWu1uAXLj4aNeVgN3i4FH4pmbqD3wpMFA6hYF5xQLDhaq5ozaB5V29NV5ukNpqCYC",
  "key41": "5FzpswdMRAvHUZCBe8yysyKZCWTAJaie3J6VCCEh2br1BSdWvB8uRh4cfP1BmKwQajcQBsJBxkPh4LKprMjQHaoa",
  "key42": "46hknyeHY35UZsK1dLJiX7TEdXu2mrbxLStSpLLprvsQRJfpbRtSmzNxHs5QSNzVhuEmaV9iWyZRbxoNJN6bjFrS",
  "key43": "3Yc5D8s4vgGqFQQoJZNjo7vVboMXnBzCpKXUbfL1HJoYjPdVS1apywFKmwP498dZTnKmKCSkp1TZJbPh4H3eCecG",
  "key44": "dFZ6B76Uu6kWjR4QrUU1FxM9J5SvWoCgoiMiiXYVzkLe7nXXJK53n5F6skj6geJSunCUCaef3Jn4cCWEy1AU8E1"
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
