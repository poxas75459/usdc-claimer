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
    "5apjdne2NhXi4SRKcMUFSqWsBZ2doLtaRM1NLub2KmYimMNMczAuyGZXuwMr1UozJVjVeQdY3AEbfocLpfJ3ac4S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hE3B6b4UGr2jhEkcR8Tx4MGwm6MEZKZnQzYXVzugimsMc7K4QFLqo8JGDoBR7vHNsneeYHHV9d6nghWapoKu7vD",
  "key1": "wtQbetZ8HfTXTpTavNrK87njJCSE8YtgjFWRpHkLdKvfuyua1KaxaBkEpLsZgTcPtUiYTT4LgRtkqqFPKos7meM",
  "key2": "vXKq7Nsx2nqXQbomP1v8EKqXUnTqSKPoXsWgLfZXmCoRQpp8JBfQEW1TrGhJLJKc3VfrEDRPCrkNxHdQpMvTimw",
  "key3": "oAJx699m4qNLbmZdNKAaPyqF7u6LZB2GMnFr74dumr5f183en672QS2Eh5jfJZQK1Hvd8M7dsmASxXj5FJzLDGy",
  "key4": "5ZNo7kSyuyBQ8yzXxX6RMrcorVbaG9zm1fG9joLXRzVa7oaxcyzYZFySnD27cdwJajwofqDZb6LLEKHDpwKkoTK6",
  "key5": "2jTG4wNFCngn27F7PSxrvDvTEVPzoccCxvgYFYHMmJVDe7VfotLyiajEjyMTnTHqFK7ApRy5KLE3hwUmUxBDP3pq",
  "key6": "4kDq7Q3wMnCpqVXNRoeiGYYX85DbxcgbbSz9o9h6tHgXNghgaTSEVKbHdjSK3fnaVBtmtrLjG6cQra9xaiijSp3D",
  "key7": "3Xw4yX63hqvZ5fbpKL4dnhWjC6CFYa4PMTRrMgj9PyMdfMehTSj7ycc6zBeuVTmWGMyY9mEm28y8bm33GHjXx2zU",
  "key8": "2g7ovw4EYKch1wejPs4EZJx8XHzGz9rgTSQT18h7eMvBwsR4NEd4oA4DVtveaJseUzikkSx72rGBgzmZRcF49EUe",
  "key9": "aH52Bto6PmNxks3wiQmCHXgfo9pprxKyjygnm4uvX7avdySn93MCiAPzKz2L5Mxu4xdZRh5qHXo7acNZHRYM5s3",
  "key10": "3Xzzz19UWkzPQraBM5XontcZR7c65Qwf8mAikTJNrCHjMFiYKePQdT3eTpNPho33CzM266KgjrBdNTi1EjKBa4Ki",
  "key11": "3gJr46EpwkQbGNAN9jFYydqH1Vo3gbEGhYGPvQrQnTkMKEiFdzHCsqJF8T6g9xp3iF35YzEkNdqvJipVchLyesFF",
  "key12": "4h3TER3zGs4AXmryUfuFLKNG159mFU4XHp9UKXu2YNiVvziEpZ4aCTyJFfqfSe2Y1uGDYjf6Y9s3TtNKTqJ4nVFN",
  "key13": "2shzNG5gVenPJ5Ewd7R4DL9UbFvmd5p7nfyQdGCNZDZkPLLotSKgDMJeNqw8frig2zPH8YAH3aWVQih7BZJewdND",
  "key14": "2gGBQHMqddZsmfWcHX7qK1mPHFsWXpQk7PAYFSe7i14jy7ZQRpuYk2BvTfA37CbAPE4AuU9G64R1ax3U5gWuBxTi",
  "key15": "3acmLPuFXjXu5ybnfW5To11LQ5kFajkR5hRLUeKGMxsppjcRPceGocqi8zX5gB7TbsV3m8aTu6uE5jedW4Z5QZVt",
  "key16": "3MHDTbqPTkrdfv848sABzQK81Yv1UbcPnwanmAABiQPMv5YidJR1aLBnY1QZMHV22NYNG7zittmzpfnGGvcVSHTm",
  "key17": "5jCYonPCuCWSLQ4Dhw2PBFJHYWTGzzNd1pctFcp3eisoqbgo2LBUphEbjRothRmicMJ4Vj4YQpFuPkXnJhXsQyGX",
  "key18": "MM9Us7aj6ttNz1sw43mWfjfurZDjVqG8ij8xe2yaWh1vaVC46E5CeF4w8mcd9pGqQwdufFLqqwzkcyGNhnuFAuh",
  "key19": "EvzEVyD69sFuk3e5S2hrqmyyVJZDxxocHT7njkV3mynzjCMBbKpaHGidMTgBCBJsbc29jqmBH6hHgRLoxMP6UCX",
  "key20": "61DLTS3AZzkaWPpKEZmfAHgrFq45TVgu5dAwjzQNpGUndHZic2BDDGYaKMQjiwKXZxVuxSTSLqLFEdeSCYqENt5t",
  "key21": "2LFz7yiDK2eXVLFvXYeHtLefzMTEETUqDh4wh3beXKmFNgvPAfkMuNL4qLbCiY4X72oY4oafGEGrgjbofDYeEzAG",
  "key22": "65pcwArJTLpaMF3pDbg8SzRRHRNRWp2aV1KsazzvPBjdwrte1VffJPqjqcDti5bjwnYg7PtiziPzMsZuQXwQqYt1",
  "key23": "7xZys1HwXEmvuQQKg7uQbpZUsA81ttatbXBZ2ujfyAC3WuaBXqbdV9EeeVzqENDTwbUDBCBGZ5Aqku1PSLwtFCc",
  "key24": "2JRCKUzRkYmZHXn782vHjmeWw1ywsTYT4NqEjnG4b2Cbqa9YhQXEwQuKfGEbuJjBHeq4vXQjLsELyrtxNmD51V1t",
  "key25": "2G3QYbW6oi3U3wgKi8g3CLhdDJ3bWNZA22joXDWCCQUNHUyqAivee8ggFWujPoBrY3cAqZZEa5pJfZAMU5rXEnwn",
  "key26": "S7mQ6QieQFZ2wYTCtfm1V3Y1jfeg1uv572uavgQqrwuz8yekvW2KRw9NTq98AdKayYkvmkXJhy7YpwX4XgPYeHK",
  "key27": "4TfHFq7oijN9Z8GFk5q9HnaxyHuAHYvxdPrBS4Fy9a8Cq1TyyRk6X6D41xrNZTuK5raQAPow142fc5CewGa8MnkY",
  "key28": "3DwH18QCd3rH43wTLgNHyDrrPd15BVEYnemSpU2NGVAq3eYcSLmJPhM8DvrLWWUbjEhKZkTj4a1g5TYyCqih91ME",
  "key29": "5Dtzis6mjdbAYzQNtd6TinC4Ra286LG6dyFjqdUpcp6XKHc14egYWSjsRRoGftsd6M7yCV4f9zsfrSa8y41NkeRH",
  "key30": "25ACsvSgDoPptqsbzKp57W5heCkxvqSbSEAhnAdHhJVf8jYwEFDwUDE8WvPukCNEBNBUkuHfkX1vqFqQd5aiNXGo",
  "key31": "4odUdftMEkFzgn9jYdDdricpGYzECof4afxRKV6csYXxiCctBPJuLEip9wqyn3Sqd9EkgXSHTuLYEW5d5wuRZqhR",
  "key32": "2UyZtE9F8GeFW6hxvW8sUp5Dk7rYe4HxiXXU1FUtUbc7uPNHUgYZ2ZBi6Z1dvqu4eqpBipzTuenwxdDRd4YMgW3b",
  "key33": "5HCYNvgCeqGCG7e8Zbz2MgzeyaNAHEgcUDdvnq3T7w194Kgqvh89QMYEW3VkA4hEF5sGwd1Q6JGLYN8MywMPiNjp",
  "key34": "2y7J9xTFRQ5GqJtCghBn3592YJjweAcsMMX5nKseVUb4nE7r7q7K7UmdRSiowWhnBrtJYHnPqPeSXgdvbbonpJkz",
  "key35": "2MS7VzT4fvnC3xFiEL7N2LJXWc7yXu9a1k2v1z5qnNX8Ct1c8XwDb7nBtztQxM8NhmBjF4pdGmTjiqJA8ri68y7J",
  "key36": "64NM1L7SUYA6Wy1uePzvrP6oESrayjJGbQuHp5Sg1uZX3bVER7ni1X2s445pFHy1p5qCQAiTQfcmoVfqRxNrVJ3H",
  "key37": "4Qtdon9W2u2ZNEdQNzi7i3yn8doPqvTPvKMPzStK8VU5jmZiGsJ8Qios1s3m9dYvoeYSQrKDuZ3Y7u4EKqSSe4Q1",
  "key38": "4ZtaMGNdTnEwrkG58a4ZfRqapscZRCQXgZBeJM57vHDfnHN2shneSvgkiWpAXFunQVQLQRnqkau9NVs627yHZLMe",
  "key39": "3Gj2vp4etxF1LHuGymC83wsLfUWK7vbpGFgVg17Kia3EexSFTk6yrDQtSgdpwxPgFcS9YpTuPZPyYfN1u4jk38Ku",
  "key40": "4NSgwK7aTGnvAeVGjJzFqPU2LvjJ2NR5K9YZQpGDAr3gvyw4Burmak7562Ajzh8pbV7rXZjcpkmh8mGqX2uTekV",
  "key41": "5Dwn7Zjcyy4cjjYDvYJPxn4QhSBXgBBD4dJM9tiuQSAy4vFMymQ3L93Li5fVcB97urgjRXbCrLjyfYKHXCnWwE76",
  "key42": "2ZKCMkugacybemLerYb4JEtAmcmSzKkRwEFyUxxreEahyy6A4on4SznrRuSgbQWn6VJnt7wP4gr21tDyrWUaaCs1",
  "key43": "35BFBVv1Gg6TMMGpu2dGzovAwLsCi1mWLMpGKy69qKkBWCRo5p9UnHSesRqYUbLGp2mHzBQUpN25GYx5JkVRvBGv"
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
