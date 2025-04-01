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
    "3fKJFsK5WuPgCiDYg3oSapiwonyp4PnWAGPUsHVRRLYRLncQxjGAkUKBmSqEygGuS3YhSrLzFSc4CuBuVC1NuXUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BVUv76nCWA74oYePJJeEqqvt555C3XWkzE25Ut6VKAcJZoSyatq2vRYjn3VWPTDA8Hs1ebvrR5s7X9wpjiMuu3",
  "key1": "5bbGZmu7873wHbMa7iQrXxYjpX78zovXdvKXyLVRNX7nLRgqiZas2gZ585pSQ4Uea6BURy8w6KM2UNPGcQXD9iGT",
  "key2": "3K8WjTjyQ1h4LueudCMgoyWNvnShg6tZj2fwuSSrqf8AeqfEVcAeRtMd2ZZsC6UNkKkyZCRGGrcrunbw2RJCAFZc",
  "key3": "66PCTEYAerm1ySrXNbPhHToRLbVBtGCMzcioPapiAP4hueVoRtepJ56kFbv7hNbp5x3nbztVtGAykCRrF1xg5dta",
  "key4": "ab6kZYgfWSGUhkr5bpTvhoWHeSw3P37oydRDyhnsipmK1KbmbtTkq7GPLyY5aud4tvujNK8JAp7pmU2QNrUjogN",
  "key5": "66mcbaCC9TGdKmPzFU6dPZby7UST61bQW6qeAtgPpujXFuTrMNB9rzVKiMPHB6tFp1UVSosvcef7TDKWypfMijMF",
  "key6": "McwXAkHD7LC5G5zAGfKuH5ha9kNG9WQc8UpuUNg1P9cpersuE2FpiT3Z8rpBP51h4YWnQYUh3UHhL9qGuimdStW",
  "key7": "3btQNmbzpeotdRxnh7YzS324BNjTEdoYKT3XNk7DmjdLApJ6xjHww6kcNNHQXLfXfbw5raEP29UxRZFoFSb83nn3",
  "key8": "7NgnXymUurhe8rjKZvMMRLtgQgnCnT6HjXuXa7BascwFLxh5YW2iUj2Gr7tizMp9TAnKSrkePFRTLKNHQUKkRRC",
  "key9": "3KmLyvx9m3eVQ9RNJeS4JfFCAWVQ48WKJbebvedraPrCULrmT1NE7TSUyJueAKGtww8sxPbm36vDwHq2knAQnvRL",
  "key10": "63cQUbTEgH2G28cAa3L2vutD57zfrAGMzewYqeNHJa3pQ1ui2zqUDfvq3JWaJ1TsLYdcw3o8wMfK6UBJvy6hojYy",
  "key11": "54bqLABuE6hs7W3y6Mr5nBsQjiWgNcfuJ4ADCidTUecG5CzkmBVq8TAhjDmSfvVcaHWM2KSbULTBt3v8Xkzm2A2w",
  "key12": "3Hqw6QFBU1aYgNBTMpspGk2paPqpNZbx5zcDYQ8ifH7sJMaB9H9Bk3Jh92aspSmku6f79W8wbH46tHRg9DqLNdax",
  "key13": "A1VXnjDMciBhh9Bi7LSGjgv9AesJcGaRQiZdmHXKxWzmABGfjbKbq3tM23c2Qe4tGwgodVCEsqfvirhpmnU6sSU",
  "key14": "eCWDw2Da7MGQDwf3jshDVXFQjjtGPMAKUAtMkZWS5iViBVw8FXGBokw6oP4xQc3U2eR7o7qrqsTD2GxLLkxjoni",
  "key15": "4oFnKaSbCrDkZn56YJkTfJBMGU5a2h2YNNwvNDbE7SuwHZgQ6qVo6AMUUERSTCaJWpPzNFmV7Tvh5eheX8Qufusb",
  "key16": "3CF6CCsUQcFCgG36D6sSsgGkmeiuf2PssronrNVpZnQDJEUvoB5yLYjKmXe1QgMUWmDvHz9UiYZsdamoYiBBmSju",
  "key17": "71TgusuW8XEATyME38b3Ni4LVD2fscE7Kxjav53SGpiPZFAbUgMatLRwQikuyDQ6y3dLUhHG89LPDSjUdx1vSjW",
  "key18": "2ptNjFUuiGRCwxVTFUiLZJcupFUJjsJExRmzrV14TGfknyHGXzNeXi4MjfQQjAutGfwmDZSEshVtkxDhdxmhsqNs",
  "key19": "4NDBXqDBnpGJF3hQXk8M8ZPfpXVuSnyBdEqUTN24J6vMd8tgYJpmZ1TZ7rGYYNR1pbHcuNpo4AhUdsfEZMPx2pBH",
  "key20": "4Aj5UhFsuPeyUXAtFj9TpJH85ZA2frdfnPSxoSLP2VDCYNBeqGA5efgos4TB6JhRNt9tZrTUHjQZXaoJGA2pDRFj",
  "key21": "2epzCSCT4xS5AUReyg1wu5qoDmHNct93f7mqzW5qYQZbh3uiRjmxBXiZWx5Jhpko2GWiUfjDSdo5NUxrkcZMrK5Q",
  "key22": "4usNy52i8NqFAyCVQN8uvX2EttkxvttGvrftGGKjYHCv7i6c97PYNRBXQeuzWdaTCcm1pJjsHgKdLE1WKTNGky9U",
  "key23": "5SuxGa4asCcmhgBF5LmKb1uzdz3YALThNtyPioou7gJUoaBkwjAqEz7pvu1osbio16wVWyuk8JR3p1NLeMnXPjp7",
  "key24": "59YKm9azEbgUFemdZSJLEe18fgYyxhZfbtVVMG6PSwxsDe4LfjiDLqtHjodvAkDUriCJnJpMCRwShmJFvJx5nuab",
  "key25": "2Y77iCtXEKQc6U8sGGch7htDuJrv75nRcnAvE9d13sbBT9QxYCqazNbbsDfv9atBnUeHUKHkL8XJURCCs5M2kZgH",
  "key26": "5YemmXJ4srfpHQd5Jd5MQ58Cub6rkwH6bqDxtH1uKzVeDwDxQjDD8euhNXYQFHGnBcnC29BHcvxHN4nivhRU5AkP",
  "key27": "3kgdJf7v5EMhZjnhrszNQFx5PHwZ1bmGT1EseWw5smDFLa4reT1p1UnoCsz5K9Yj1EFuNEBPhpTCSbMxnRWnyASK",
  "key28": "3M5TN1QM1fLB9mBsvs3Qf85t8WZipWZaX1fbpaWdJotMsNh4zP6MvKj96EvW861x1sLpfFtevdfXNCBisFCHXxoG",
  "key29": "41r7KBJEjwLsnyVTP8fJPUPf6XX9Ac14q63cTvZ76qTbcGcgiGbr6Hv8V6ota7wBSx3GeJGSumJbpu33JSmhCjfN",
  "key30": "Tg3JB2wjzDuBtMRTdQoThosKXaPDSQUXAi7iw8WVcHS6mB6HqvHiVva9NG5w3GGFYEb5opCvxhEn6NM3tQBSStm",
  "key31": "i4aGfNPWBs1ezme6g5cG7R9ya8bDXcMmeut8gB5MdPxAjPCzN3h8a5gofYCGsoXu49pjU25dmS7edgzHod47TxT",
  "key32": "3ouqHhEYhzfVJE28VtDRUTTihrvNkhKpkyoNwrhnWF2Yqw4NSAHU3jPJn5VNnkrNeSFaK4z2RXY4Nyt7HxRBqs71",
  "key33": "56pgNVqPMdKwpZ8Bv9v6dTg4F29RcU2mTa9UH99i3eDL7zWWYDgRJCcxjyNAVseg53x1kzLcTSMFhZCbeyNH6xpm",
  "key34": "2MojAUPRkjcPv6Ei56ypMQEF55J5Q7dXSxfpfvwctic6HUa7y6oXwGK7xRUkv7vtHpxuiT1LVCM1LLypR2H4VHAh",
  "key35": "5H3DURbz9CkKcHeFvdgfEW26orUDspnMZ3PCgaLqH1pUzd8Gm2BW1ofTv2UstFe5hf3H86Wpy7BSQ1RWDDGd3mEd",
  "key36": "4xGayYjXVQW1JYbCEJrJdPQPZSzfCXZBxatfm98pNcSApHXtraPRRZnAZnnQX281yH1FRSK7UJFcKfrxFqNgn8tV",
  "key37": "FbHfB6N6q31xC8Bf44QcDrWi9LgWpWdhjGpYE8PZU2HAg2XjCQmLomqSHnRgRUqxnswJAK8jPgjmZCp42ue13Yr",
  "key38": "56heXTprVUrRmp1q4VFKv83v2gicR2qoWsjMdESrLx3qm4F8JCrPgHaqDAUiwPrS6SCf71ipc6S5fEraZxPvP9AW",
  "key39": "5Lmyh8NokqPSGcN5Td9zVo5aTktZifFZy1HcBNR9TbAnyKvbWrLcesWn3qbjBEXg6Z1okqevJcB4Nut1Fxyf73b3",
  "key40": "2P9MADWgYPPVWh5w8dzNhXPsRn8c21rnaeyCBd4YgzVEnPTk2B4ERN7Q2NxZ99s2894injoH9BNo6su9JML3rbAY",
  "key41": "5dN1ZKjy3wVLTUYRSokywnWL7P2uPxGYDq9jwwNDSxPUhQeAD5WpdDvJpDA2oRPXovFi93qA4VnjKmbCMbA7Kk4x",
  "key42": "3iPxZG6utgUH3MRgTDHw9pqBGNKuR3DcRKS168drpoMMN2cUigZLyKzuGBEY94gmpzJtnCcG9FyL4GidnftWVte7",
  "key43": "5xt9e1sFhbdEjHTTauwZRsTswbMx4QM6xmGSh5T2MZybypQz7wrez8LHVCAfMtKsdwbQ8VMZThjpFQMtUY3zDdKh",
  "key44": "33d7qHHXnnv4reaTSV71faKQbT3YRmduEnkhSTepGe71or3XPeb8tWETcExCePqNvUXv6T7wTkZNh3whTGmMdVqq",
  "key45": "CmGQXhPTkcKaPPtee57rhw5q4hsnMWE8ogmyZCx5RVkwmRhGdMGPK3xxu2G5J3pnuSVktjVxNgon9jWijENfZVm",
  "key46": "5rkwVii6WAgRo9kBgJ9zsRBRUjQm8kzr7Wzh5QLTw7tjPU2aQ8uuifQNQv2yj3bTBkZXmuFXB5YZGJBe3tdGYKJa"
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
