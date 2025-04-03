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
    "65Eg4DwVv5QEYcZdXBYq476HrQbsC5tswbEQoMvBSst9r1U7qdmBK9R8GBXYMU2ZvbQD83Yo9STp2suVwKPtX4m3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3J8QCfoigogTSZbxN2wiV6b8fFCo65bbvGNtcT2fKTAcv3iAFhS6CiCnpEYJrMbKui4sCpDAueP7YzuD9Fyn1rE3",
  "key1": "3yMhoTAfEY6TB7ijM4dhVE2ZA6uYoG3z33CsLg57S7fnUXGJLe9H4bFUwfJELi96trtK5pbMWWuDJyV1yqHgfCuR",
  "key2": "619wWAnvDtny6SjftpB5fgLjeV4YPhLaYjYAXnjAP793jzfVwe6jSTsa4AVPmfwMs2p69qnNzbRQaX2DaRSGFRJT",
  "key3": "3BH4kY9bNkBsojvpVqKoA2vGWJ1VTzKisuZthZrb8X4NFLJoJnvoPWfiFoCWHZJUvM5Q9H5igJxJEacLcdr49ynE",
  "key4": "641wVe74LBDQmAQnWuyuQFha2BqGumkcy3NjEBuxUNBSfsyEKR12iqv9aWW87zbqVTkC8E7cE4HLuTtkYpyvj64v",
  "key5": "4A6vZcCxxLPobkxkhixfJNAEJqrEtsU2DQF44u4Ne8iAKFjAcfkrAd8nEtNCGjMUrbtgJi5ypxrYWpqLmJG9a9HR",
  "key6": "4kYWqKv2B8zVE5JzcW26CaUyxzZFm73JbGB6fVuZrLbxjiRhFwzwi5EXJBjaL3vyBQe8EehQoN6psKXhZPMPeTJS",
  "key7": "34PNNGKQSwjNXmvyJUXhh3Lk7p58ivHb1f3gRK8eFjggRqeXEKnMcfXWxWa1gHrDZoPL6Po6YpHuUMBfcCJMQUJu",
  "key8": "5MG5s8w5SmKxLS8FVvUzBaEknb8KtdmKEraNp6MDTBX37ygrWnHNxer6LTAS2QkrddLw8vvukBaV5dUte49M5BKz",
  "key9": "67W3hZpuz4HSdX66KEPTvQV135yc1FuPnWS4WZssKYjVZmwKHXTwggqsedqibZfcVi6wVgA1L5T7aqiNRkhTZoiG",
  "key10": "2HqgwozbvpPBQ5J57jBkgfGRcC2HjyqbvtRU38BjAiHPYgnNLdVD1qHUhUEBQtTV222D43ZszeZTKWpBiv3MyiVU",
  "key11": "2FyDXV7bL726ocon9XQuEDkX6soWeGDAyg92oE4hHcsqMCUWaMfpojSEDYjFgFsZxrNRGvjeMh4AcBTTnezk5mwb",
  "key12": "57sAdNPeCEkdEBntdUqf1UNefrCFEMsfSuHykUh5vR4JFh1oXh7kjENuLeB3PMM614yTC5VC62XAGPBaTVDMHpX8",
  "key13": "3fos7XAUXh28tMWFVXzBgHaRbpx19dTX7PN5xpNxmo7xbtxpMgoe57iSXnNTGHd75hYx8c5wPUEKPFwMtdb3uQJ9",
  "key14": "4LwJpmyaRGhWvWuxFCua8qaAW3C8qgbo1ne5aCmf8MYStAVgRLySA9XbcEGwwuteX4ZS3F6UoKhq5xDY7bLQYQbw",
  "key15": "2Yehd7N8XF2s9oz3XkGh36AEcvTHvtayy2mshqG8wdEpnpU7nQVR8B1LtP8mtjgvcHabLXHgsfVFeswf3kMsVEQ5",
  "key16": "2UnyvhRKUYg6HVhoo4y6n4kxmhdoZQtN98fsSwxBU3UnrRP4SGa5iZpzvCeTjQXdTifNi31XFrNtTJdDvDVjeA49",
  "key17": "4cKQ8nXymrdVmHcJceoq1fjsDacinZnjK1KXAzSGMsptRPEjLAtgWgb4cxfZpiUYQGmBTrnzLoVq2wK87DwECN6z",
  "key18": "4R88Q8fifHvFvwdox9bKY5vHtb4mrX5bRMrgiL1fnoGFYJ64UgAiMGmcUtRk3M2yCnTwPBewCVdcFzL8aiRJBGAf",
  "key19": "2u3Sn13C8LhujGGw5refbaDRfcXexbJXboqZMuRt6UYjZfSZ57JfSbrKW1fJtBXnAH1x22YCxAY38yZwhAvJqa6m",
  "key20": "2yJBBCBe1ixu9WxKSLXpwUmkV6sgtAMesECJwvX5K99eacxgeDaMdDFU5iak7dzmNg59agn4bCAXmzKkNpB9v9kn",
  "key21": "8Ru1DCRaTusXDkXC7wxkCooToBSUTxVJk7jGKPpfU2LXWkPMXBubFpehGft59hxUYyAoECZj6yqkBYYt9gkXj9b",
  "key22": "5okZq5FuUq9G8iabJqEwDcuw3Q5F67tKGxJTjLtEiyn3bGGbjddXbdXUU1ESQ4rUV5tWdhErzboDYsPdZJd6iPGe",
  "key23": "4rawW6oNztyKwb67oU97fpS9NCRHjR213D24yPGbVEwAoF5cHZ36uApXt1HJn62VQt8QgVHeZkDAahinWK5Sj1yu",
  "key24": "2o15vxuLCmVBG9X8BLFvYD2dLLAdRz3xzWF93htciotVrnHVRnxrdR37ZiNjACotqi3bS6isTm7GRcJnDPg53qKA",
  "key25": "55XiDXMxsdAQjf7uvhUAwnbUegdgiqTaQsjnVuEGysvjSiWSnoBjeU3JE6PuozvhZhHgZmJGHnMzarVp1qFFJ98x",
  "key26": "3GqMZtTDy7gjqEjbNdEhwNHqNzt6v36AMnRbCy3JcCb3WTVZZS2ZkoNQ37mqo9xMVYBzKwgKMrkR55eGDYK8Pv8c",
  "key27": "587BZvmJh2hDixA1smYNyMCzK2bC1CYmhJJfjETGgkhF3gh1vWF9PXveQb5fERqNXmYnsuMAjxSAFAwzGbrUu23N",
  "key28": "48jkPJtdyXpnRXqybkeRjTDVcG2PJK7ttYFPkAAJFsCUVEB6j82sKFu5XWofksQqzvbJeLsJHpwQRYT9j3tvHuXe",
  "key29": "3vk3ox9inBwVDE2hUNLPC2nS2iyYG5qHhyVLarjkYvvvNCFkV2gAimKoRcLDvjtrn3wTDVjrQBDrYehXhzJeiwGY",
  "key30": "2uSmqESXt7MmCh3i2ohTg66VdeWVHP5u1uW6js56Bv1tEhfSu9h9GyJ73VVeh1k8idrnovBoqMreu6Uq4QtodF3x",
  "key31": "67UcLrBnLEtozLgH8YFeephF4tmsq3xF6LMPGm9CWgmZyoYYgXZ5MNnQcs8sGCoMWRkL9cW77z9ew9VbYJJVkviD",
  "key32": "rk4UdXvJ12ZQdRhRP6jzAz4qvtZ8ToHVyk16WCAnBb8ZCjPmP61vQouAzFQKJwzu3p4zdCxCy2iPt8vkevGs5T9",
  "key33": "563a8zwMTvyRq7GKAqjfCLJKgR3DHF55Ysje56k63EEQqVNy4iFdvYgCdWMDKrHABoD8HsNQXKNnzaQmN5C2A9Mh"
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
