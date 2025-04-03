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
    "GUyLyQ9qbg8BTBLc1YpMk7aCq4MpzPd3mKhjfxE9ZioqNWWvjMp1tHdfxgYAGS2zzBmdgU9tdQ85sWWTic5soR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CuKSdLbxQ4t4Scqp2ywoT3rGkCwGVGeR51Pr7PwRaudTtgxGG1u7CfypX17PSPtNwPQh2m1FXqfVuJQmYNMqeqB",
  "key1": "2S6zap51z3vpDSxrMCB8Av6kKZAucDPyEAqs8famEmJA39HAv8sR3taTYaBVZmBX4SWvtpqcM6BMhzmhEUiDRdv7",
  "key2": "42AdrwA7pLdgD4HsBU2myJgqEcC6KASeZ4PGUjjVtbjRKE8jqRSBiEtZVvQcYmdvkqJJsF1k9ybwDY2dFrV3WyP4",
  "key3": "5PcPcCUCJogQFC18z4M59P8MPkiybV1c3fuoXsQGNbotQtq9nrsdScy7i1omgBHbQ1BLR2MsrTYEvMNzC9UgwTU6",
  "key4": "4oQeJBSwYafibP8SPo3yuhFvh2ULGBKCxdcTW1Gu8nz3XU9mQMWr9DpZZ7ZGVdJUtB7obgLLVDDPhhrSjLPZDGZE",
  "key5": "2vbN2gPNPe27WrvmupTbY44cB9nzb4jNUQm6SAq16UTnEWM8vyt6WaM2CCfitc3PRzTM6iR9GKMkJMaMmUG6Etbh",
  "key6": "5uC9nAZxrrmCuCiq4s3M9EKaUZjUPt3gWDa4H9ZebviybkMpM924Ky1i6Gh47QoKYuLbm95ZKNJ66sC2t9XtGzD3",
  "key7": "jBmWL6AegPZGP1oQdJqqmuhRxvVB2SYiaaMPLPHcPJqi83MpiFeheUhghY2KBhAu5L3RxGeEuvfgLe3LEDeVAKL",
  "key8": "2DMzjU4HLZjcUKh4s1F2YTwcxzamwBzsKoua9enjBwnhpkfhjQMsm1Dz3M2YppcWTkwyeJmXqZUMbomsByxGxKck",
  "key9": "4xrfQN7CJBjXAwzeksxFH1eQg8rVgbCtceNw9ksa9ZD2dFcPjL55r8Jvx9VUrLRFm4R3TLzw4tUbsmGBxu1z1VVp",
  "key10": "53Sg8crzNfJPuB2FzYJbqPm7u5fMngyyqTSr986mgRhi4SHrgAFoDPdhyB3QH9HzzbostsgWq8r9oAwuMvoxDNU8",
  "key11": "4qcSetZsuNFUUQ7b7ev5hh2GMcrVXgQ4JnwLrW6yGNfZzw3f3x3GEtPq6gPiDK22cnLmzrdAxoecouS5nBmLm4gV",
  "key12": "3x5pXPxmD5qrWrQahohk8Vf2tXQhoC1uomfSEPf8ja14P7fpg9pVNSHRCUJwP6q3j5MR8QbRdFdRDBxdkzn12ZFQ",
  "key13": "5CvMumxWEEmiqBfwc2d9faBvUbvah4Q23m6WePrpMFJZxpi7KDbre2gkfAq2sa7f7wyVh8RnBZsDvTjZBBg9fPKN",
  "key14": "2Gjk5EwV7xBR3yFm6MhWpuDaJZHQka1uyc6fzVorn5HpLCfkYXyWhH2YgNRMoWtsxVJdRXoy2mTLY25tiwLED9vz",
  "key15": "2oku8zq4yf4u28L7r1apKoXf8U1CLZVaAvxZBtyyvprcdggNTfzzAKnGuwzBJQACB2DJPZLPUxBPBDYo2ZZPHQQ1",
  "key16": "bAg9FUfX5hy1hF7Gj5LmWM65bgEBQmTzqQxMkbWbzieAYmNuHosf3N9wXLCnZpNiEbLNaww7Ajs5oQ6uv7sASMn",
  "key17": "241trjA5Dh4VAjBR5h2Shy48ASY5ZNwfjuHFNj78KejmCxbx74YjxPqSwNtMW2G7QiVKrHigDyi9iRkeZyWwSE3u",
  "key18": "5xEMSauYGpzdHA9TH3wRhQVQhu27iHphFmrTsJUiUT8ojLsZHVqxckUBk5oMHcNwkQZbmUSZjxtNhJMVHP7ad532",
  "key19": "5Pp1bbovBfp29z8xDrpxJKB9fnuTjeua8iX2gDNZbyXHo3D4XP4F8UaG4JmBrZRS6o9T5j5fdtPUwrUdAREBs4s1",
  "key20": "LD29cGoSVUe4u6rUhaw86qwHXyo7e3cPs7k3FuV7SZHDCvjUMmnqrnR7pDh1qjKMiXJTEXitCFWDZpRW5vfPsKV",
  "key21": "4TohD7qYvbrsg8k2qJ9prM4YS1YrXgyQ8JWJ1ngwF3wGXsamow3spMoJPuiaQ9tK7d6rvnjoezgFJCg8W6FWL3ap",
  "key22": "DgLppgU5duamUKqvHbbSpFMJHq5j3cQoc3DGC1qKiyzgFnefd9MzAKu54H8YzVtmyr5sbr7JysX3eUMMAKCvoYi",
  "key23": "5SkGb9JmfmJksoEkHpsQ7bkXwEs3i27evP2rYxr4fDKjvs5YoWBpjVjYBZY4RQfCmTqUTAJ4UGUQywijotQ6SF2K",
  "key24": "2xKWaCBcNbuBuGAkExvMxPnxQKdr199SgU9mX8PoRf8AHHAq5rTeqESssjAo9qte5pB7twM3sUUf7tAzgVhYJ1Ve",
  "key25": "3sB1JwsuhvVdxjDcjhBNyFtdMMu2YCMSnbvxNGAbBwXt9AQd4VsGEtpTSaSmxYq2BotzruRQeVJRTevzioJUDTVH",
  "key26": "4JYxDShEfrZpbuk8erEUBJgho1K99KPH4oMSWyuYTVd4ZzjmRjjHi47Bs3Qqs2tY2iLbh3aSh5fNFjnzBqs9ujxp",
  "key27": "5VoqVn1yZhw9Tr3pdi8jZRjNSshhdojnSsddB8U9qFUbRKa4t2DJqifDWZSqByscLedwJodC6Rttzpuu1T3VYJn2",
  "key28": "3zrQuv6pYzkK4NKcvJSFFxxcggG1pmWU2vCwtCqB7nacv8UgVrvpZN1WjHHQamv7NyBv19Ctwg3A87KqTjtHWjHF",
  "key29": "ZyydbUvNDzY3cjf8oopRCBmfXogFnPD7DPzgJyKtpf7PrLD9BQvKszinDKFr2QEh35sGgeSu44hjNyaQFW161mq",
  "key30": "32Zzv1GjWZdUvoGuNTtCdyyAHbANr1Qr9AdzEusdhqhEiMambTu1ix5D5bq4CHVNdWUtCsoXGYrx7uDpzpZ6MNnj",
  "key31": "3ZXY5nJhmUNmfLvXbuK8Gwn5GvGhuhJCpWRaaayUSTNWj4tWt1UsrjVA6JM7kyaJHJ5TSN8rGVYbTJsBhSFKnFQR",
  "key32": "5R6A8d5AmrYsQVXRT6R235ujuEpAWgxhnDfw2zi1vx4iPNBd8S9Y1dM1BurpJRKzoQwS5xQWZr6JY9fd5CLvjb7u",
  "key33": "4jqFioCcodwLo3g2jfM5mstpbPqpRhLyP7YfAMCqHdyh3AXwWuw9vSRYrTv12N93MVjK7XKAhaB8xWQo532swFH2",
  "key34": "3A5zHQPfsQm9abiESfYdMNsR1VnRCWuuCU7yBws9dLYyfAk8uegrNSrnsy1Xx3K9odtBmBWKHNPMTAhNA7NPYRPN",
  "key35": "2iy6nMXkeJoLkAMrnegz4GqNtZ299vPyEjVD17VeCMVCaDCMm4tmpxfRSwAGcYChoK4RwRhApzEiNEMdWkWcjnFJ",
  "key36": "6vvgbUHZprTmrRAZsuTdudksAJLQUFikpG8HGzaDwb5LDk3x9EDEcTo61qhVE8qQtbKF57WWDTNs8csagFqXC7P",
  "key37": "5MzdJkmCeFQyjsdAFxv9oGH1SuHocp4FD3yxRFWggFDXe5Bo4FvX2AQpFAkNY9pq4QUECWvhbgcwRhLSmdfYVKo",
  "key38": "A5a15Lum1zzyMGpxop1X1AjL9e7ZjbZ7WbYZwrSPmrQRiEamJxJ8Jb21wMMeR2dqXSyzM5UwvFfn3kvuUiTBX2p",
  "key39": "2FVNuwKigjNBZAT4GSfWGPAdeJyDXN6Q4YEmMopkPDjUz6sMP4mSweeSUQfvwUGtkfVyT2vm7PzHe7gFHXD7iLRx",
  "key40": "25Reg2qPjgmhaZwaRPu4ufVW6ZujYkbSMzPda38F4NrBZXE5uAsJHCtEszDMuuttfVaorDEfRAAD5P1tgPNVnaFd",
  "key41": "1SicCx75JfWxjtJ91cvybEYkqaTzbveWGJPYsPDcxvX4irq7jVULBTBF6khGzJYV8mpSSe4THx7WiyaYDGMuLr7",
  "key42": "2GAMwsfWBbtwGREciTDcjVNMiktNBFeXsGgMCBDWGmrXnjeMgeWimzYe8ELW4rvhrKWTDg5F3ffAw9cnTberVapK",
  "key43": "Ep5Uq4sqLK2ZevFH45bDYqertmNKwRp34fSA2tLiPvjuzKdNDhWYhCv72gi7c52cS8mExE1kg2K7HGWRTkRJw4U",
  "key44": "5K45xFAJTb4GKm7T2YdWcqP9fY4bLPTGgtRfWv7Yi4uS65TrbXfEEQbxUpjLYpKgWrdR5t3MwegEX8FE1WAJtQFA"
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
