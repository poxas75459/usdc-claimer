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
    "3MvcUEvMRSGhtK6MpnqFKzp8mTFQA96Di3wZ5sg294n6CZWT2eYfehcm6sKmmCYCWcuikJ5LPwh4h54bM8CCZDgz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57733aQfgjkKYtF1rHSezpdbfdZhVdP4Z6iZe6sgjHmdKhu6THJvuF9FVEahSR3d8wikdcmwf2ayqgPP6aqrAqZo",
  "key1": "58ZV9fYBLQiFQGJZnNwNLdBs9G6pbYftGyBjhCy3DBe291dnkVwv4vjWwVs6HAK6jrUhBdgQvBvr7X8qBTCKg6bz",
  "key2": "5SjEQPsNj6qisvux7Ren9hzratWYycuCNTuA5m6njUszP82UFDwmTThZSYXoZNSKGrhjdVc5JQX7zdAG4MCjkfpa",
  "key3": "5ucpU2M46K2oPP1L1bhCxWZqsCXuBANm7zVxY85NK4k69batWWHfgoCvaT7Pkw25hfhB9TKM4dwNjcFiKXM9PywX",
  "key4": "KaE1nANpvP2ViTJFF9QMpVMdcTtaCrsz3HvF6zXqGoKUwKxwvC3SheTMoHSNL4SD36gSip1mprxR4qz7a52KQon",
  "key5": "5KQYG7t9yvDnpCs2PgsuLQ8YaNCkBGVxy32ENzS7U9JDM3ymxD59x3aYHwqJaB1sb34uzyZGAd9Ny3uRVVbZPHns",
  "key6": "5cnumQf3B8q5Qb17tumHEwAdz2zPFG3BFUWKPQEYmHgnng3PN36Pj5GNHQhtYjL92jGnCDtCegMnfCqbRaQ6pF9f",
  "key7": "5o3SVihzEAWBioq7xseoFb1GZ3CrVQWpAZmF9WsBScXHHwuvbZH2iMDXiWHSi3in6XyU7gc742g2xeXpzXfwG4Bx",
  "key8": "2oXbVgJPGvXTruabdQoLHWYro7fa1oJFkuZrtbEgX1pve2uYkAqVtoUcqbJ11uwEBHzPLffbtZD6BNNfWn1MFYEB",
  "key9": "5ywNFReNzpBwQ38KjVbwjGiwT8zUt7Rzk2inw14MxV3JLThwqtWFNa6svqBzNMvucPVq9UJq7peDZD8jqcCNrTjC",
  "key10": "4UrZ35Xi9LURVBykVk6LJq5ECN151PvtGYozzcfv42hpGvDfQZfunKe8DK9N8WWQzoTMLxShAZupkgPqdDEpyShj",
  "key11": "5aHBqXHJXKxEnte5aPgLYAsNkiPss4TiNStiBwxoLViJYPaQ3HwEqCiNYQYSsbd15RtMoR81zdtx2BPBprz9wLzK",
  "key12": "mTNzFmR6FQCkdDv19j3bLZRcgpr2rF8LKqbXqnJpCpgy4rV8dgPzLMhmVM3ARFp9KHeChk2C8TLbT65YbTSdQGA",
  "key13": "4wwGVKudGLtvSmpF12h5TJ3FztChW8nJpruAjZj2QsUfTaWQVrf3SopbddxhLZYV2CvudGM7uqmdTJ6yG2CwfZ98",
  "key14": "49HPZBM235giuxYcH2wZoPx5aV5phHu7cvzvJSihFjJMnBChb3zwFm1sDrx5WgQHQnyww1z8o3sMqyPtcBPiTwFy",
  "key15": "5jGNehtQFSQohfomMkgBnsDRtK8PtKJRchiYvz1KN5CkNvvJjMttBNqvxQZBRvwTPDLekQooxRuFREERcwCPqQsJ",
  "key16": "3tRjmRFjEPE9MYiWFa4GpxaCDKDM9sms7DDAeb1qTXvMeR9Ee2QbJ2dUgc2mpgTJXuuyJUG2PLftVcuV9SM3khkb",
  "key17": "3w6CtqAitLNDudK5LhcpVAUKJn4s324s5JT8ML3nX64YiLnZhDYozm8W2Hxe7pBDhBvJ3E2Gv68Zs6BDdSb6RxD1",
  "key18": "2Cg4p9GYSywL1s2CM8e6EDiVCZY62V6aSH2BGQxvLnxxDfMFNw1YNqs686UjmCjbyBL4Ahxj5PSojo1nLyQEZiWH",
  "key19": "2xBVs8t25H19ZmP2vBRxZE4oU6d2rH749RFXxFfk5QPMdwkQ9NXXooK8kV7bRvQ82nLPRd8FYVf8PnK1987MpfWH",
  "key20": "2hHdhdkpXibp8tV9sYmKSWLDnJdJiAf7Bb7fSox81oebYVjNf2ErtyLQo5vuxqPhnYT7P6jkHqdozmJjk3qhodRd",
  "key21": "2x8HGpjDiZwkVaZ3PS1L3ogQQKRUBkQ7J5CU5njFus619pRgahqN59vcxXKKXmCWL4wpCDc4nyUi79Nmf3f9B9L6",
  "key22": "5csQstsKAUj1iw49NuCGhbaYi62jtQTWA7QpEHBsqTcSRZ965EBKJ2mvKqERiSCx1v3sw5kD97N25HYsdrcCc6yJ",
  "key23": "5fU7EnevRVCFWyG4j4YBTkEtsMp9EdfsNPBpWAtUGx8Wqjmvn7s2DBwtYZbqcPt51HyZbYEgUbM18SF8mZtsTEuD",
  "key24": "3TDfLf1DqhNZmFCwuHufm8vx8oEwqHDLiSw7NtHRTLZcEHK1YNWCAZTqZAx5P3mp93sEBw9mnLB1se573DDBcxYe",
  "key25": "2FtF2EkZjRGeBAZ84nWZJNT2rqrCEyKy2mmVbDRZ77YBznYrXb2ThUq16Myxuvj18givcTqQnkEyQXjAnid2SVT5",
  "key26": "ovqM2FUwsFrdiUW6MiaenqMc8mfmhatK8DemetFSeS8jrUjCrMF5Xmr2FEACeDVsYkzsS7DEDzdAdJTcU8AqZ5i",
  "key27": "sbZgTXrLTpgZPQNXoWnxJnwUFhzHfbq9k68pyNsoM56hFUJtcyYnkiJib5FL92NFXy7R5VFiujYoJck1bY2PXDU",
  "key28": "7tVb47vHLF5nppgNprrDKcRush16BPuLq6nsTDQ9VV9PQJFxmDtKocY3yi2FePJT7KPbS57MwJk8ZsrNRL9CXsz",
  "key29": "4NhnhLXFM91yRH8A9srkxbthrr2PfhWC7kXfB4W16xSNWDPjZYcesWPKDhUj6qywpUGadNhe53qXPNGGzfyNVjhk",
  "key30": "4omnZeA1ngcKeumyKgUfvmyVkLvEc4PbR5o2WMGPLEwdU92PrSNftg7BhppVHZXkkbWkQejiVnKjBFRy21q5MnEh",
  "key31": "x6x4qdREqRpt7dVj2nvMouuWBrevhB7tNzimYPthAb5BSCWEvZC7kVNQhCypdHBiEUwuJxsuhT9jys7BttRKd2a",
  "key32": "4cJFEvrhbj1pXHERwnPCm2jSeji6HxhDz8GCdzCkwjvhccHW4bGfSnhfKt5bNoGxUBttCk14jfV1s6EkK4vkcrrg",
  "key33": "3LPGtXb9xLWvN2pbqDmXqkvyKuwbkG6CHjcQRSE5p9zuc4xxbLpJBYZWHNPAjR6x6j8APkvQsGGbgPT5qJebtSHm",
  "key34": "CBYvFnuc69DLo9AS6H4XByFxCVghC118oLknKcRg9Ur5ucfHYv1GMJGgyVDgGzf2UjELmxYCXoGs9GNCuuYv49X"
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
