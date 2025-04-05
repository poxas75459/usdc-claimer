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
    "3vxQh18JoayQREh4a1KmfLAZ7Xkyr552us2oVBX37fuRucxF694gUZDKCRMrVd2yJaJZrgyowLaV6kBndosXEW95"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Rj71yqK2PCzQKwqVyyVNFMYYHkrmDELVVWxxbc2FVCbKky6dBrTokDaMtLjurcAQNEPgjxoME3pRmZCLZXYq8XC",
  "key1": "3RZFT9sKUfu7mffkNoGGZhLToucUBNiLswY7EmqVikpM8LgDLh5maqojaKpYiyTkHbr6gXmhiyJ7WVgpT96nESjW",
  "key2": "2GLEzFwuhcHKNW4pKFieLfqmAmkzWtpkW21HnsjZaLaioSSE6Cx6q1TpMa7EpRbfNnWwMCgJyhyDCRvU6MTqGf7y",
  "key3": "575T2MzSttcDiBkyrDxLEsNdiV2LWHwcpLCZzECCp6DkWsGwshviLDj5bUzZxPvmrfmA92codB9dkG68rE3Bcemb",
  "key4": "3rfT7bRFj6Wg72ofBx72JVCUNNpQ2NpXKPgjrUEXyJT1u3Y7uimSbf37CbJnrt7tvJczxp1zbckpmtDNPfKndWa8",
  "key5": "S22FNBkmv2Z28bDf3n8Uzeu1KtAZNbRtEjY6xbdnT4wBJr3wbXHLdrRKchWhz5J2sR8ufnnMTdTN8u8XL1cvprY",
  "key6": "3DSdhKjyrTquykURLUq2TZx9RSSo9j8D1bjDGiToGhbEdmnVuhb4ATugNEnqzZts6j4yWdjVo86H6VSASgu1Wvvc",
  "key7": "2Wn7aW7fbpvdhM1LfaqRNSb2ADabacYSGBu6omUGrcx3b3bE5c7QA6S4BdkJLAVg9Z2pDXufcZiNH3VaKWH2CEXp",
  "key8": "gou8bs9ppFXbDMte6jTuFPQSEUikNGCduhvqQkGvdLZjHU5tMTBXmXZpU2TNrxBwgzJ27CNt7oVXRncf4b9Xjhu",
  "key9": "3UD7FDCgFBqyPwobgyWfnS9xuD9xvLyHZoU3pThNQNVN73HVctJuahrrf2NPJMEsXDaLhtYR263PweAy3M8CEMeo",
  "key10": "4oxqkT6mhTPXvRvUuA4FbW2SEwbDJsH3YWk5Ah3wpddzi4Vdnc5TwRZZc2QbhtY3PJbU6Ef1Ck4zHrVWDAwgu623",
  "key11": "R12KtfvVUD8SewCrRPKuEq7qhaGzyQan7YGBfcyyQPxuR5PxVfRRFyUunVXnoqnGDrw1RB4C4A2ffWLfoHm6vik",
  "key12": "3h2URaMfFg14xVo46xkHFTqA5hNPH9aUjXmw7r7r8fimrFt5qKB9SaEy1VM2hXCMzuKUHjZmzcJM9h9EYmRRbNoh",
  "key13": "i6GySYXiQVBdaYdx6oYVx1j2eDdTjwZEtF8p9c1MnqhPxH2ETpPJZvQy4EMthhX33Fut9mC5ZXHM9yQKMKZRhKp",
  "key14": "3ps98sevMVpyeXDiAuccvyfwgGUUuNRe21L2QCsZ2dNF4buBF3MsQKBUG7VWLpjXAUF2ymSrAfXyHN5nsEuKRLWh",
  "key15": "5QsSQUzBMaHfgxWpAE3FzVuUQHoTtXxQbLTu1usfCJNgcHnSZGn93Uzg3h6Q8zAwLKUaGMA4efGDsgfF3fLhS76B",
  "key16": "369ATrVo8o9LFt5p5rWnyZiLbrNi8rDHxpYYV8qircQ9d4U9RzmEqP4ZXfH8eygtqWqaQEC5d6ygLTCZ4sySN7A9",
  "key17": "5jXCjSpG1fbbeuqzD5wjidzTsLiHVX4kdHHMZCAcw3FxDxPr3ZZXvmagzQQ33KAraejivQq6auExEHzBm3eYGkw5",
  "key18": "5xRzgS6TxdBcfruLiRmNvZpGFxU25HAQjoJDd2RnVvQLtJmv5TCeggtY3REhtR2Zb8vLoMm2uuM831y1cKjWJpYS",
  "key19": "2G7GWZEMnSYGLjKnUajS2DyCBNN2p9xT3CPpN2s8xgniCJYChKF9uiBifnzG2V1fkaJHhVxCAPUdg9gaJucBbxwh",
  "key20": "5rEyUS6NSWv8vjDBUurWT83Mc2cwzzkRFDed29DszJATgdKMTGDfkzSnMmP3KwBNohPywF5eNErXYULruxujhNAB",
  "key21": "3RzBGibRm8TJJbQyYrQsTgnRa3JSDrdKTeJobvcLZQWCkc2aAxaFUrg7p5y53yHczdkU2MnMCzpFvuKvg7C5xY7N",
  "key22": "2JoCAUBSZxcmdFvPj1vsq6Dr38qsGA87AGUD1xThmfN1rmowAdUmBRNUMhobor5KJue1m2h6j7AtDiuoX9A2gGY8",
  "key23": "WeHHXz8XQAwVJ3DK9uvVEw7BgsnRbUrrRcawaH59VHQe3UCt2B9WxWwnasjUd5tSPpSNhQuYTnGXvnG8Xx5X16A",
  "key24": "3ZLAo5T7gM5B2R2RrbFpPbBvbo6md4NPjfHhK5voWehCbDUHnjksbx6Nck9FM2aCtXcGPZddkq8pS93EABEgsevs",
  "key25": "7RNQZgHkQy3H4hTLwKMSxFmp9gCa73LFPSPQp11ykaNb5azBAXiKM47e6BzWJeAi6ce9G7czTg6PdCD2NzUicw3",
  "key26": "56Um7FxNV5TmTKFTW17MEK4eH4ZZDAYLHyre9bscFzgXuLTJtSBR6uECKMazhztajeAkr22dLg61JzcFa2jcGCMo",
  "key27": "5Yg2WE1chjoJuNX9KXGZYLjtYXzU5cVUiF1vENsVfGsQoAvLCJ2p4dZ3dXA9e1y6hRrt4PeacoqyhwfUAZhG5LQX",
  "key28": "5MUVvFd5LiFZraupEWTL13Stg5zuPAFkR3QZzzpwbzcs4YWf6pUD1TB9cH1NGR6PvEs1h5WV5CVgS5RSZVm2CSLj",
  "key29": "Zkpe1VP6oGW8Tmgzi6AcwCkY1wDiMHz9D6PiGEGg4vN6hXQSnHin2fvuUL6uUcUSxTFhAG1NRC33JZtNwjHM8XA",
  "key30": "3iUD8NZQix5cWFYm6M9SrnY7TLrixVaFzCjSGE6YQFNmdoXN23x8XQQ4PF3HvSxQAfzYwhBAwJDG1HQxGVD8x38B",
  "key31": "4ETALqX3VRV22M9QBGEMumYdgiatGddAdqg9o6fHoxuEk9fxKVxs1LfTCLPRPAKGNthJNVjhGgky8Zrsgyune5Qh",
  "key32": "5KDskDPaSmJSdxGdsmjnaG8SfFWc2uZiQmTWrRCZQ63LGqop8kNCsyvt6NkF3LtM284PAc2JzvBSaKQoDV7jPcFW",
  "key33": "2rppvnitdGqiNwFdTwv7YsBASGmeaUjYB3MFYfAa3EAqVMKrxXRpuZ8zUJH3Lx6cUHqVEQdkHjEpqFX1F2McmhxA",
  "key34": "656Yf6TGpZ8L2f6DECHsAUKmzvLFVaKzRRBMKjuvjDHrs5qDwcArSFLWhMufViP7wZT81FjWYWko38SJE8faW3P7",
  "key35": "3UBcMWvWUGE29yywbUnHNutBv5GawBRS1wDTdrhJRznsXKiqtpsZWiRAiY9ups1ohmw5ZMVdUgMx8L7Pvxw1mw3v",
  "key36": "4Cra1KEvnBD1CiPXbDAcZbswCyx91HVMgTxnzd2SwQ1NWabJPAyKC2uV2bAXFeDMPqTBMmzub38GpMdahEFqJGEi",
  "key37": "4qcAixWWcKY2f1qmkQByW91EtXW8EYzBb5JBrvZC3fC2MMfyosPW7K5gaNDafxRb7pBECjLs5AnqQtQPoU8izGe",
  "key38": "5zJn6c5fsopGSVgSSdmpDyBwYCGQw5hPZFAcg5bhCw2UP3Mz1Kp48vARbZ3nSeEQxC9yS6bvjMEDNjCb2KXn58W8",
  "key39": "5AfBnzLnPP7hzgJoAC9Kpr3dtHxEYmPpsQKk2ZZYhm4zyTDnzLHKrWruNdmC6bTFUEaMH36UfeECC9ghW9hM6fh6",
  "key40": "38Bhi8LPvsK3QG6VhJo6yRYLNifk1mTxgp6fjXF4jMFZLJLUAF9xuu3nWFLLED9RMKNjDYx3KdQcxb4tXKSBHchz",
  "key41": "fn1T9cW3dD4ciVBr3M7dzby9t5fBRbCKyMbTHtEVtn3fWxxAAZN4Gd3vJPQ7asKDyxcVHwuEuyHFPrbuKR4yz2U",
  "key42": "UuEpYEAP5nazsqCYDCoNXB3Xrc24m4Jomp1YsJDcpn5Kvx5cXGeq296EoHYErg9UfMuYyb2QborUb9haUdFoAyt",
  "key43": "2eEv67SfVZpcwBfXCmzLQMMr6BHkoirgdvyyY1BKVFwmzgXZXqXc6aRg2pogiPrS2A1KVFuiQmwiJXJVNnyKFQmm",
  "key44": "yV48qMmrxyH3RtCgqoUBSenazf1FMRuspWXpTdPznuNzGgiqt2rREwTBjt1H5HhLaDeNw1SEM9pn9ciorZA1eCe",
  "key45": "2V5MNK889ViMQEQRtQ4Lk7aBcKurddRzsqY9Z9eBz9mGm6uyaGs8bWa4ajD8jExFSspGFQiabD6rPy4AsdnJBWp7"
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
