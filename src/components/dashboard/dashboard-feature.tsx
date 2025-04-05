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
    "MkRUMEPrBn6gAjXrJfPd3MjKKTbp7XQmpggqFTUqXPfHMc4zDst5SBiErNoWSLKS1qdDAAGFYv8ymv1sHwCYc4s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5md2dw1CCnz84cMxREJcQMvT7sHfiJ6vCbS9dRNetxrtu14WCaXHMRDViFxtde3Xd5ZWhqExyCNz1rgGihsUxjJ",
  "key1": "3VLTustA8t6tqCJo2PeBZp3ZbCv3iBDf6nLCRphz1G64kjtsLZ7u5T6mmSK6M77LqpT1ZmUbYFtWzdUUZm8juZvJ",
  "key2": "2xR9BiUSQWxDMMrAj5NoHN2trM2AUhSgACdJ5S2qDw2tgv28YqkkTp6rAYB6NXM1gxMNUgQ4D6QXkBwkbskvvE1j",
  "key3": "43HDeNPERUUXvqQvhy8zmF11h7gk4t3Eu7fC2p1oSLaah81bu7HjxjoCQiiv5u2HE1b4ryvYoFz7Ece4kFm71gS3",
  "key4": "2LW39wTjsHJ2iQV4arg5tuaRUFipbjuXvPBQHuZHPrFs8Ux7zRz92Ti6s9N5wmLbxeY2euWk7VdD6r4aCzvSDeL5",
  "key5": "593X4ErNEae2F38qQACA4yuSCbYvqYEP248bR3dEAoNDhWsouY3U3h12ET98C24Czv2eF71joEN8VMXgAb3KP2pg",
  "key6": "2f737peB97cmC1qNwmsrkU9m6V25Litm7vmLT6GMgthZujxfboGnGMQLxc9kzMqKPqgQVGzA679dXuA9VQkYu1xG",
  "key7": "5QjFogV8uqNstjaxaSQ21c72fBNo9SBTWxeM7oTggWcUUE7q5iSf5mcQkSTBZoSV4vu7mFzFsSD2F9dezQKf5T1m",
  "key8": "5Wh6beXERboTzAQQQ9SKr9Ja8tLAE66HCnDvAPyoppW8t8UCq2MZ6k9PHQ9uA4zFwKNkdZp3C786MbctYVwf4bkq",
  "key9": "5ohi6wkY5z93DvSc1T7rjWJL2L3yZS6koYMVMCzMuyZAAShbZRf2JcUvSsgNJe5JqchUFc9eCAf7qeuwCmjShWff",
  "key10": "2xrBS4wRo13zEV6dHMGyJQ95wgg38XtcFYyY53fUYTGhfpT94wyaV3aJ61r9hB5yLNv9yEMvjkmoE5MjNFmA79d",
  "key11": "3YRE5BQkruBYiuVmS8ZmwTAw4Xz7mr4DsxyqFPM3jjDBcfbsu1pgm8awFiy6b4BqGJfUQXBz7sSk99FfwWRZpZLa",
  "key12": "2kEbYtLoi9hX8smCiaBnuv41FzCwysUAgUG5tCMVMFz1H5GNcUbdq2xopcG2QHrc6z65ZAhae6VkA6xciaarUkkV",
  "key13": "4ZZgAuEVNPtMv4LLK65w44uRTxtXwGnaAW4nJWXRN3cw8rzcWe8TJeomJLHgCDdkUfzk1Yy9RX7e2dRwEhX28StZ",
  "key14": "3m2SQX8MB6ZQQtki7Md5G5iXhkt5tRsWmkzbyyyEqWfTxMVzV5qbBGdgHMToMXCtS3WVGH4UzSRePQSPtAEYajdn",
  "key15": "2WLJpvUe5Kn5jFSL9YZQXasQ3oy6SdwK5yKdE1d3pSQUpzkVij7AwrUKhNaA3C99S2HJJ2daEJ6qTKbdVk388WWW",
  "key16": "tZgV5sHdBecePc32cMwsgQffVr4Jt4KD5EnqhVo3dHZM6DDqQwBSAZGjB3Xntp6UYtuaWaBXwi9DLsdKGwYjPhb",
  "key17": "2SSR4o8nDnnSyUt3vqCiikWjZazJG4EMFzZy4cTgGqq8JY3apdjU3aXWMoFNjyfQeg7kZZ1vjTPtzmezjowaq9Nr",
  "key18": "429Z2Uks5WWEBTGkALHq4xPeh9FtbKZppqDHaEENEpU9ir9hCqqJb1ornMnEgQFD1ocBfbLn3FWwcDfQMko6XQJL",
  "key19": "2Drbg5yp8s8Zywmv2Hn55fjvt2WwnrddUyAeCBpYUw8WFzvf4R9r4VEtfekSd9VWtB7jKjacfjnMouYaV8mMneiR",
  "key20": "5tumngQjLzn61nRTfN2ybtzeLvUST5ABbXuvPRGnUmTFmoe7KafhPKjSMv7vZQCaHtYwsRBK2PkjL6yxugQe6NaT",
  "key21": "2qpNMBWtN195PVSoCDhK9Xg1SPKksZwMAwzdVyEo8j6YESjMTdmmpuPBgwhZoegy1EXKYoeUGScqE5pDTvNmWhPE",
  "key22": "3Khd5Cxc9ZRxCZMaPMsimEsqb69SxXY7v7Ho86k6ZUT2c3Npv4CioFuZ4wEJWtnnjW7m2G3eZ2ywLAGGFsafZP81",
  "key23": "3t4hJAtJA5paQJ6LDSnFVxp2R9DkfUDEKfW5MFLhK9KRpTxnotV2c2mfHEGQefZA2zF7Umt4y1FpPuEKwYEB3dNG",
  "key24": "2SpopZJr6MLd7MwNZG5qXKsibQGAF7ZMwoGSryMQ8vASAaLGQcUizUYuoPHeUCPhNRWg6FbFhU8SeN9otoQjV4rM",
  "key25": "5dMn5ZmP1vXme7Vc7w5CqokCtgGSFv9Ma9YWZjfWcXrUWyNJarkHzZB2M9ntmz3iYVvLWi4xhjs5ZYj5s8EpMvdb",
  "key26": "3QEYVY7bGuJJpb6A2cjSq6pe4XkiSWx5wHpM13zwJopriujnRs8ZTfKVvDkVwvWKqAvzKyKJqCq37tfyPoJXUeeb",
  "key27": "5N2cvraHGm7qsqkN7SZu7Qj5mZ2WbiD1MQoBHPdBGELBdYgDvQk26ZUB2hjmMFJKwcFiGkXtHJL9F7MSTpnAbVqC",
  "key28": "5KY8spwCBYChnCgaQf7RFYCc4jNe1HfJukSn4hKGW6E4EoBsY6XY7xGbyrWAFD5m6cMCLGaAPYFgxzz21MrPjr4g",
  "key29": "65BviKuMJqGV9N2Vra69krPmjvsE9WQuNJF5mEjG3qcL4Qu8T6A6ANYwfoQLnHrRoFHkB2zuB9jd7RdFbQ6kQ7nz",
  "key30": "2nagpWQoNgSWgW43wiyUGVFps6xY1PzkJ4dEjA91Pu5tHcXMpkv4d6iyqkgcEjvKUDQBpNwo8QrvJqNhUGEZaueA",
  "key31": "YzNTxetddD1TGk1gRfX17c3Bs78iaEsHnjWsaHcZJscmypkTHd4L8jZ68hoWzXw34jnJaV45mrnxkmKUQhysKUZ",
  "key32": "244SEj937ThAdA6XhgD1xMRpcRdoVXYYBKRT6G94nkQpxTKxmyAGd3JqUhc5ciJpPTthZvm2wxuZp4rFBMjcTbFm",
  "key33": "2yx5FPMBdCyLgsU4Qx6ZrCnhuRr1xYB6wiDBHrLbBvULmQPeGu9nstwrQti8vP1dxhfdqR8XZDfPzkFr99fPPfFv",
  "key34": "2GR2ii3BfKW3ZZovwVJ984QQ6HiNay8xLT21Hut3vR7iKpDGu1LCAFZa4spgFEv2nZ3bPkahnKatTSdnmqp8x835",
  "key35": "2dQ6Fxg7vcsKMXvZSSiKuMAfZG4d2YZmqXaFhWAXDNEqN9aanr3KQ1u7s7v9rYmuXMfEBsKcFHB7vi1h67vt7biq",
  "key36": "5jKfNVBgimxFP6gJcjcpQbVxJY1WQZhUP8NAQsow5UMQkEM6WfuuRGfSP5jZZ5nyxASBim36mqDCacn1JzqAYKeJ",
  "key37": "4Ht8N2WRGdJRE2MWcJLAtqpsK3zEUSmATV1GKKw3LwQr1YzAz4vjW4oZE6tpRjZZqWnD2dr9Djnz1f3ZYFSbT74i",
  "key38": "A9HLzYfmyn2wuHUt4fAWucEnhXPv97T1DK7VG7ttbr3amrH9NhfLFHQH5yKHeH3Sig4c34634hAFtkGtMA76RAo",
  "key39": "2qdkf2KZn6wQ2CCrnLHaoRt9uB2psPynAuLQZvXW6eUu9XgiNXGTYgkknF985hBDfEcFxGaCpz2SYJCJNJr4SMVS",
  "key40": "2eNbCp3R1XfEMRnq6XhyHjZkVoxH1HbfNRrUfArDT5wLNSoi3ziL1nKBvd63Mekh663AzPS6dXACe2HgV8Mmycp5",
  "key41": "ht5mZcjHV3LG4yuFwqKFhmoUiMVsUNfqTUkCNuxSraEMcx2yY2D9LWhiiBiKkx53311yXQhucptmV6j6nxyQpVW",
  "key42": "2svFfCxAboyCHd8m8Gjt4YmqpGFdiHKwwy2a937HjpNPSAjeY6L24pXVoktGza7z5xoxpdUVoPXQgDYfWBVTkCVd",
  "key43": "5QTfBBFXAdpqcuR4bABtGNSHnNV97UCF6p6Uj3JDnXkvhss1tEEKYnciCUhvAkVMrKB3AzQrvnExBYhc8yd9YFTP",
  "key44": "2YdBoxUjumB8M2rdjBBiZKchkoHobHTA6AHoTjHWNFZ8iEtEqeshQH3NENkVwuQi5rizaHyZAHKKTpNrJ8ae6VjK",
  "key45": "dr1zZfrqkMB1Cpp3XjGRjSiqZ5cYKS3dNgWUBZsih2gVZHVy7SUCK6bPmwJ79Tfw39dW6QE263UHnSyf1TPrPZx",
  "key46": "2BMgDqkioqnWJZTuUPB7ZEXBLvwizx44hbP5pRKDAodqARPYYxTC6ZFiT6zTm9j5WwtzjLcQzVMKuGjpm2D1iNWA",
  "key47": "4eUobvDoWXMBQUdVWP4fC8i8JJfen5gPrWPJCX7RFaF9faxHxYeVvicLQ3myd1YAy96XM4SLQydTk36eUaoDUkmj",
  "key48": "24MLmXVsacXMcYSXKFdF3kpbwJQjjdnRkY7hAuutrqjFVo3ZLHDtKY3xXz22a3UVBayQd3h8Qhdj7iXPveHvdMbn",
  "key49": "25oXRorvStiw83w4jEpvPhqMqM4QmJUPLkaAwTKwD6C8jFKSq7zn8i1wyC2UB7PCfHzRCU3sDrqneCWy22kQfFig"
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
