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
    "3T2rVoMXgtqBCKvHLV7iMSFEet7h52BZ7poSSKwvkGCKsBcZ8bNNXtRQQ1uZjrYbTquEEBpxY9BR45XCNECjZo1j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y2n1DaFVMitQyM4EM8G9R1jeYPNfxKS39bbZFTqbfpKi8gsLfKa9X4YtC8Lz1ahe5i5m2Q5dieQ667h4c64mDre",
  "key1": "cAKPhwZQbcLGePXGVBVHmkWjTcV3Gp7a38quSxj6PLhB4MWCnmYsGyJXRcskFDdBst7zhsYprHYGR3xnUoB63jt",
  "key2": "5TTGqTqnBCuWAEdthcuS2GAYk8ezkJCRX5sSzpanxD6FMi1hxXUTTZNeHYmQoQ2S6P3Fv7D8kDaztFhnpHs6MPbb",
  "key3": "3zXcjoxDUnN85hHCwqcRYvcHADGRTwD4vw4Qd1x56k5eEuTXJU5NLVQRQAQNgQMXQ1dd7uM7gtfmbQxdjcVo51mq",
  "key4": "3ouHyKsDye64VscUFd4oLgUo3aEmCQ7arBx1yUTSYDyn6sjmmyUuBEEGHfGBn2ff6RtYAzF5qNkMGiwsKMdMmD9H",
  "key5": "ihDt7QDeKE8kTK4fuuF7YmQVwT3BTtKUq5ncrsbSC7BHeiBzjNJnuBLNVCMvfVG1JV7BW6k96iFndRramBAGyrs",
  "key6": "5YRtiC5Fid2BowdbUdt8R1Lp2JWMZ68UEXi7Mbof3kHVnhpQhVTJtuA5SMJYFYxcwZQ7R6WKfShCY9wPaAhddRgH",
  "key7": "5R5LcpbXbm7hAx4XWEeRQyQEgf77wCqgzgvnpdAGZBPwjk2XhBSUfXXdoFUVsBwvCT5ps8hUmeXvYtTF9oc7uwYu",
  "key8": "2TY7qwBziTfN5sWpNJr617NXMCpQXrtAmFRuTPtPmq2bDjWN9FX9ou6KbEhXn1qZN3CcF6oRiLs3RdguzX64J3sR",
  "key9": "57aTSj2ZZEYqa3zh82WsnKthx2cbWMBQDFBLJSj9Z1XUFsPf2hbPhBvkSX251jbt5GvEWDZGG9ijcri3x6BUrXJf",
  "key10": "5t3MoqSdNHa2GVHxkWAQVcyHx6mtcr2LB2s9di9UDKRJ5Ad9XXyVYqtnyLpiSn9a3mLiHAxrmwormMnp4fKunF7C",
  "key11": "3sqGa79DUNV7neDa7EKCuoFfRJGSamLjkRRppF6bo8PdzxUCnXiuLoejz94V5ojEWBCTPHFx9swAYUeUdE63a2G1",
  "key12": "5fRhXFkYBwfsUHvZ6QdiJcQzR1DkfD61QJpDJdoTVT1FjvL2Ea58LbiBesW86yWrYzhwUCY4CuYN92NRupPywWJ2",
  "key13": "3m3R51ShhF1PqqFM1yjtgXpxYEjJZh592ZGXEot6MHHBpFTiGPho5jJfpKh1tvgqbkQWxKnpDS9bzk8owY4XLyBH",
  "key14": "3tV8n83gVwoSprx23biQV2gZDdsxcCDvHJ2vx4tXtaKihspWpC24XhuP3ePKR9amqoGzwCRCf3AXhJpv46kvaVZe",
  "key15": "NAcAGqJXiRh8HHPpVDzm4B3b1m6QiU5DwFbPdEeT822vwwbspdizvApC4W5dpa48CZSzwzG97MfDz2KERMW34Wa",
  "key16": "2No8o4M9ApSHSwfwuwfwxKnazpWV9XvQJj6HufQbGJeXWNQcPsbKCCeieAhJ7UJ2ZwaDNiBcjmrByqUyQsd2jBY4",
  "key17": "44Fmkh45vdPQh2rRmeMNEMJdr5fFNFX1jfEdJ3Xc3pkH5jLPnV9MjxsdaPrkCDPzCtrJQLcDj9dy1Wq6b8eLiZXs",
  "key18": "3jNJY5LFz4ARFqGfBvfBVik9wZK6hgEToG89yfKiJSVBSMUa9omvbEn51CGtReQ5obSQW2hK5XSC3jgkJi9drLLk",
  "key19": "5a7xhLrHN58CScsdphcHoUARvxFsLRvFSckKe2HxVRi7gJjD2u3j1hjaNh4MvBJvnfrzmdPEuQkhjJqGZa6fQpyz",
  "key20": "3gRR8MS6pq8psd3aqFELGzK1rmC6CiD2eZxNyPiFuM9QJUT6SBBZ9VxQHjF4Q9tNpnKXWAtM8L6BJGGx6DS4vRw4",
  "key21": "3dpUVu82zp4C6zc9cUGAcQqVSUgTGpwmZJSyFbziwPjgD6Ny22JqvoTW5zr8Si3WWxxHUBWrm6hhcGqavN5cXAdP",
  "key22": "23PU9JnSHtYkV1C68tCAUwLH8tQkdCE5EBksg7Pu5t6xb56bD6bd1Sb31FWiMirJ9RRhbHh657PJGQHYp71UmdSh",
  "key23": "2Q4CxGNBGQZ2KGnZFjrGXGJfamZvj66Mq86GsWXhYyF6dpdErPtniGyzY9khu33BroTCHCQinzEmi6uYv81ZpXt7",
  "key24": "675NxvPJEcMRgXJ2oEj3P2iLMtyxfaMrSuEtdDkGwRMYJgHzEmYwBnkA7Aq81KnVGxNsaihYTPxUeM3APTSmxaMt",
  "key25": "Zyu2KnGS7JLFj9Kg2k5RMNJFuGuwtA11GZ792DNLHymYKYmZbb81k8Ubk3Ag9Mscr43vgRR35AX6HU2LgWpmSws",
  "key26": "2cCctqDEFbrMUPiNPwsrNULaMTzQEyk1up9MyAq8fvFdS3pH5Dyap6R1bwCFgHFhd95RmgpMZgifwR99xSy5ae7f",
  "key27": "5s2dZUbWPYvwfixK5YRjQc16Sna8hG4HVYeNVELhpdnAQuw3V4gKhFU5V8rkyq4B2vWfajU9yctqUoAPwmfVNaHo",
  "key28": "4GrGHND1uMxsPbPK9CCdCfo3d9VcRuob3Bvw5mzrmmPYLLo466AHTn2TUAwbn2JbmUFBvQzzGDKorkKLFDcLhiS2",
  "key29": "59xxPcMd5iFzQVeigcDF2QNMVrx9fzprUJGvaMHbFJcidg82J1rbrzf4qtbyhtPsr3sQxjs2S6SAeueDH7F3QjB5",
  "key30": "2xrBGCMR6wYPud18KjHRUaePfmpPvbPCtzGzaYDv5v1mZBzxs4KhzAG8kpyziabhTVWM6CCQKYVeMjKj7NbSvCGo",
  "key31": "3KYdoTctj6pNcWNEnwFEWKgiVmDZ1JSkaRoRiEMk9ZcXXWHAQQ9Y7XVH9m1uZCan969Z5TdGxLzFgyrKkyeyJALe",
  "key32": "2wagqWy5U7iyradpkSkqxv8SU5oNtNEtKUCi4qmDW6AFgnQNZnTqVsAwKFrSqaRT7CQJhvZR426rdixtp1aJfzkC",
  "key33": "4PvSwv6pbPvAxf3EMsSZk31LfEXSeqhHJ5NuWuKwJJ6WNt6K5bMtaCyUCWz3hJXJVhhyaYjgvMTaiC4HBDKpnRu",
  "key34": "Fr7BHWJntVv1aeeVUrkVZqnDowXnCWkuAKehK8p6u1YGpMTLpjR1w9cRXZzDCCySJcJa9sYKGtso1coHD74VMLj",
  "key35": "41jLNHvXMi3anhW53AVLbgzvT6aXDmRh7STWBQJy6xqhnn9RfztF46pgnt6k8awo1WbwKuUkA1eesKRJYP1c9LZC",
  "key36": "4DZ95fFM5bbzBzbU3XLJDt9mJD4a2WXfAbXqdD4rMLeYNYJtBgrE4VwsShHwJHgbmqiVThV4HWFnL6vXseNGkGQ5",
  "key37": "4B2C4UbEfG9V237PmpvRJAwQ8skNPKAX9U9rRYYF32QDsV66PZ5BSUxg2iVWA39agGz8WXgPzeAGc1PNNY2jLGaA",
  "key38": "3Mvoaf3HUQLVNC8dbptqNx232jvaL5jvu1pYP6AitxJAwmoRDDj2wADCPG3sApNwcV1VSUh5VV8BRL6yPmfmfCbw",
  "key39": "V5HgqrqdwApNd5Fy2fVEMXpDR8bFk6kJNwhKisAqFTwmQiHNBDcXNSDH23Kc8PKh2jkw8VujJ1Z9TitXgEdnrez",
  "key40": "47MPJHJbnE6Dk878wmM9R2egxCfrv7Sx6xzzcUWWfdH9KGLLW7A9B2YsFaSgxsVWPai7h6ipyK46ZvxP4AKLcqzt",
  "key41": "3HzBBGx3NPLXJhm89kqqfPWhZUTXpSQevAapUogh6j4cVNNSxz4tpfmkYYMkiuXCuBah1G5KuzvGUkXAxMuTG9HK",
  "key42": "N4bLVyJSpENFC31icj6pFFA5rwvcuq8GCi35p5iGH6p4DfqP7FR3waYhHZkjGqhCQL4sX4BGqb4dC9CGSxAuDFB",
  "key43": "4d3nn2MJJrqZXSWzqjvz9j5855U7pF2SgZEKHoenETA2mdejyvba7ZN9Pxamys8EAqCq6FC4DY8HF5tFTPVvn58p",
  "key44": "28mcdPP2LKbhFp2WpDTsPYr2Mhc1hvLCzYFRuXuTNPNfeFF6oW2x9V2QcbmCAA7vemZDERf4md8M8bWwAZh2Bnov"
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
