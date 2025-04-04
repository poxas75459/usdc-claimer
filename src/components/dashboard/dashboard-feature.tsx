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
    "cVoyxVxaK9poXHj8CbdydehFGGi4g35HLAomFLe8oSrrPwA4H5DUPJ1TMSy8y3xa4yj7UzcCLkpKmVRrmf7CY1V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ohJgFKKMWXd4EkKKdDZAHoLwoiXybHK9DnR9PB3JfaYwJUSaan6XjeSmA99uvQPtSKCo3koWG1XJfYoX56UvnXF",
  "key1": "3esYB8JkCPnKFwpw1yYRpL9cjYCaTYZShAXUPXtxgSGSRMSBMbDLRmBBGH53wma5s5oQAVWVUixgmapJDYDhLmr4",
  "key2": "2QuEbK5SE7DcwPcrbsYarEKNMFVY8cNyxhhziKPjHjuKPPBPZDzdgbhFtChEzMK6Ws9pdeGXzqX3n724QWAtm3E8",
  "key3": "2z4875QtFmWZCJ8tQz99c3vaKYnAqPrxMTBnhcgbTQ12a5Akw1hdT4CMU9sqdGiXGH4eLTyh1G9MyzwvZv6jmzj4",
  "key4": "2dyAtvZtEQfatz9RFPGPs1pnH1ppyQFq7UqJmqVQ7qt3yAscL5Kp1y27tV3ZmqXiFwnGAHSWfNQS1SxQVViNyYbL",
  "key5": "4fFDZ6tCkV2f5Z27hyn3qKkZejWinia5zGGS5cxRBuZtfA6zezGiNKefJ8wHAa6eUtKL9w9JrJohaLiENyCCGQJC",
  "key6": "3TrQ9N98hFpmam2GPf7v2EuA2dxBjKB6CRNo7huCQbwhj96we38T3eX368dcApJ8rJwtF1zAwfKtFSnRRn5LxPH3",
  "key7": "2ayN373iqquEXNvEzUPTNWePAU9kPZu8NeoeAirwiTgCCHAEZcAvUAGmAdpfDf57kxrK8pUwKDqarEUpJT33WZL8",
  "key8": "3WWkzVTLsEbcuvv3b1aBxxjXQpmG1twTFdzMNkhqk28SMDes5zHG9ypNvwVgc1wcg4TAMdd9ePsVKRUQ3SNA1dBA",
  "key9": "4ASCiwWv8kh1g7LjsGtdxZzpYagMyGUnQ6VfGWKNKVH65q4CxqAL1QHT4XFgfwXGBbjbaVd853Ck9YVkhH9zXYrY",
  "key10": "36TrtdSbnXAQHCCHHwv18hiYgRDHXstmhgw5QSHdvFj66HJ8zkXxd2BtEHZS7bANQmgxnLrAjwEabngvagXaHxPe",
  "key11": "3bHYYfyDSRRaBK8626e98Y5d322k8RyVSz4qZA3JQfpFkL1bSt15Jye2d4KR6vwRju5ntcCaHitZiLw81iJAZsm5",
  "key12": "2PvscKJWpeWwohVysgdUsdUEUHek7YzzQVY4RzZgVfZNo9sSqUrS4agNmiGomK3idgBNfdCRSxgSRVhYat1XxRhA",
  "key13": "4AiqSfniGc44XhYm1hsrpwu6CajVV6nHP2WUt5m6dH773AZ1fZV3rbFweNR1GSDiDxtHSAnYg26u3pg8EXXcbvXx",
  "key14": "guCCqkEPLqdpcidrbmJbKF3f9UWqsaQYtbTCKL4YRME2qXMjTE1zd42UC9MDesvYL1SXBwbz9W3rquGzvHMBU2u",
  "key15": "ogWVQxj4Y8srNkPmVrAzUnpCh3P9hn5mSCTXV7xKPVpFkehuE2Pyhn3i152e4WNpRbPMjerggARA3tdcnJJEj3t",
  "key16": "29exQL6cd15LTQC91fx3nyZQc1ZYCQJMwnMEq2hQAsHifCxFFRAPXYW3vrAEGyBdmSMywbSTouq6JnNeHUx73BUi",
  "key17": "3SGpsvLYFv76kJ1peYa1n9NSj4hxKtcy2ttzkBbYMZg5ZfJ82s8Sdm4U9CcapjaSXpXnCRN92GBJvLZutrYVU3px",
  "key18": "2domXXYJzke9HD9NRGzdmk1ZvgL4KVG3JcrBrL1DUStD6k4VySSVf6qayrChRpJ3Hs6BxjvdFwkjAi8b9ii5Lq4N",
  "key19": "5hTd6GfNf3wAFDPG7z2nNhdD67bebuaDw8PU3CKmMTVGMR69mDqSqyGeyt4WNntTKxoENw14k5SYkVt9zXg9zF2K",
  "key20": "5jYMhhBjozLk1wd8gLcWjpvL7cjSqcgw2HSTzF4uED2TwbgjdfEAq3hrymyMW4UQZN7JrxGGZaT4fKLrcSrZBPCJ",
  "key21": "cGwjuH49KzYKF5yLPxom9vobchDh96CKkPNrQ7DpqqVB4jzNHUveAMadtVCqJinnrsHo4WLHFrBkLMoosZ4N5Ez",
  "key22": "28cCQDyeLzb9bT6fvcUERKjz1ZiYyPCBkdX9BEo1DKsf7YTr2bNkPsQm3mrzZeSWvigKgVQsb1jvS7j76TM4fsk2",
  "key23": "5bBdGvhBsJm6W7DcyJXYuwpbFNoMtSNYMGQ5aujYkMYTAjZxGGCRtQebfLjjJxUTCye8gmNEDAPjq3t8e2R589b9",
  "key24": "5PujipA1YEfB9UwnirDG3ofDgAtjwCpGVcZ8d4tPU5Ueqt2knythZsYkDrgoPfksxyYkmkyPTmzWxAAdGgtQosJW",
  "key25": "5kxhAGZ25YyvBDXZE2DkAE6wmC5QioYnJtoEwcnyzcMuzxCgtrs4r96RPRja41EX8pTzcNEwhMaLGomxcVdLtZ1r",
  "key26": "2Q5owXFJCyxQ3HKRpF6PwFV9V7TfohtN6fihoBXp65SCrLujQXUq2YLAwg5EyTQdZBTo1CCGdoPrUjVUiQ8Ptdwk",
  "key27": "XuPdWGQQA1oRDf3jKb9gHUkAWUo4zQTxfeucTnTiv9b2i9NAv2jbD1F2hwWKq2Ke2iFtwdVyQvxTvUmSn9eSiM2",
  "key28": "2HPQbxGwWQYPEXowiVz2B1SCakaFu23fyh3zJvFpxzCuDLR96WeJeaYp6g3xMUeNRkbzR4uv4UppmjZpyRttcJKF",
  "key29": "5f1zsBSsTAQbggkS2PiaFhEcvGjeBebpdzrSPDCjqhUkyU31ASQ7NZ6hiq9aY9HDPAwLG8j788FNwdP4NYdPqwff",
  "key30": "5uP6kC1afAxfeTrqGD7Myyp7a6gjZpQKKzVEYe8NB3mK9FyWju6k16YCqa6DQMuLvKt1CsnEiesnPBdEfoBTH7B1",
  "key31": "4pXoZgD7WDLhMVZ4fywCiy7U385AUJHEBHZEMaRArGzS6U6L1aUxm2f83kS5CVyp6Sc1gvNkuHYDzZvfyd3Z2p8v",
  "key32": "5rWtuX4hsHLsnzLMdLHhquwYrBXukHjUmTokK77WD4JQ5RMDL3xQGdtFSpd6ytKGAWJNyjCNYi3sK54L8V4qqbTg",
  "key33": "2kMJ3yK6CRTNqgZ1n9oyXoNzPzRJ5Fyzza8K8J5bsY2rPsbrNGMBmGA5rpW9FwcxtNGKDXMvKFv86kRKt3DJwDcW",
  "key34": "33mLWBAb4UdtmKLJiGYFtLg29E87PJ5SJynHRwdybLCzB2GCM4huHuzQjqQaVKxtCBNkva7nBEc1JbPnPHrc9yKh",
  "key35": "37KoCEQBzykhz2dcqX9yXKDPWjPMz1XP4RgCxFcsLTqTu6HVaEyVKvYiuJ7kTLyXrgPWcmdKxsqWd7RME4kqNvKk",
  "key36": "5SE2k3sHDfLKwJDrFemVQg2hQBXsD8J4ged11F1BkC87jNJr2LLv4o3ULwFah62VFr3pCjtroSbAaa8MXeBQVeF",
  "key37": "zjpyNBgEruizGcbQZz1DM2ZZGVnnJdbMv6R2bocRwqgkHy9Gc7Wsnkc5MmC8rrTKQoCghmBFJRmq9C6ghcSCkJk",
  "key38": "2BKEredVsaFjgY9tDNd2VGoXGt2utt6AQPgxSfztQgMe1JknJ7KeErB8UA7rCQo6rqZcvce8AtkqMfVe7cM73YNi",
  "key39": "5QE9MJ3sctDoQWkHxLdSM5sjXw4AaL9Zi5HwmEb4aVQM4QFQJr1S9fw22RoSzSzq4xVi8ypW3npPcLt9BHYULgmQ"
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
