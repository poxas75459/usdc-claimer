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
    "ooKva3NgcWZEmtaQPCqGjCihKiWVbW95JW3NqdeF2RaLEZJUKHtUYkvmNmqAz9NmxDnNid1yRVbpe9BofUhXyvx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58mR1NxbGVepnvZSTLpPaf5bGcZ2Dsd4xcVx3RHYVaAeZ6aWty6ZJ8kLefqFKgj6FRQ7bz242AyuoXxqyXugPXFr",
  "key1": "dM9p78w39JL2bDCw7qXusJzfQCLjaMPU8W6Zc1WdMXMUN4rNVKfxe6B7j4ZPdSrHMs6ifUgFRed19dpg4UqgV4C",
  "key2": "3bDcJuDD6r4FKkaEpSmSTqeo16i1THhMMeneg22cfVkDSo5CFNBj6J6PNi5qiMJAVSeGjeEyBtXoksEMH2o4wDht",
  "key3": "3w6UMfGDRk5FPLMCZKsoKiWR1iMsA9QVANM1gLvBha2jMnXAQroV6LYHcpNKTMG8JxehcqUMRQk8ms7P2dKHGJAD",
  "key4": "4q6zhqvw9sChZcZh6YSaruAF3MjuHqKbMBef7dnJHYhWwJMWr4npr1ZYnjTFu9mAtkwnbRccCvqG6dNXp1u3N4Ko",
  "key5": "5cBbxiW5AvwXHeMVmK5ZPzwziKoKHNR3TVDdD59MVVAV8skBdpSqcMoLmRNTHBRQMuU65CiSryiXcLqavSYCru7x",
  "key6": "4rCNVrdER4dAgsMTspDsnDRzUwrPdXu96n2L7E8sJJ4xtsPWCiFQMD7CNadpSZUvWHgBKm6wxAi4zHpZuUy3ZKKA",
  "key7": "468Ge57Q8XL62G6pFMsXCeEV7ooVGHxTU8DozKmXWQGwo5suqm2h5YGEqBN1MEcwM26nQfGSp265EiFqvkfx4qW3",
  "key8": "7uZyh5L55mJruiUrn7prQsVUyBoKHBEYoc2XYr9ps4HNKpbeAbNE8cpYtCpYbUfXer1kXapvQeQB4rukJBeAWDG",
  "key9": "3sPB7vXB2MunXP8ABLS5cVREyRk94g4Hj1oNUKM5BDn9u4d18QRM2Yw1VvyViaXRzEovGKJoFKMXceSqmVj3Fa9c",
  "key10": "28Xthm81vgp6J5eH3vR2DiffERQWjjVRREnVUotenBk7YhCVpkDeCVzmtn24ttuiwqPf8zfUgqH57VtaemkYVZj6",
  "key11": "o5Q5n4g7mM5Vh57HjeGHYypjBkm8LcS1pdGyz6wwAz8sdWmXkXQGHVryEennZhQWreai3pm7SmZo1estXXttumM",
  "key12": "ytbwBiWtXRocfaccgu3PiTtV1eVvNbzSLPV7geAa5yttnugksbABRuded26eRMe6zfWrgdYEA28uFoxatS7WHFg",
  "key13": "4hjqdbk1omi8uCtHtwJJo8WoAwiuzJuU6DuqCeBpj4QRyEz73QpYqAmaYx1JncvsLn3TqSF5CrqhtyLZUuKxpCje",
  "key14": "Dz8GS5NhR49xMo9Yu8Jhxei6rvtVHHP99n9mazPpEotLMJnWZt7m7NWYNCHwJpyHogddL8HJir1C2JHuhzjz1rD",
  "key15": "58gmUJUJTAuLuZkJDRLXRzjsVxU1nyrSM2yXg8Z3dQc8rBuLKPHhvWakrhbkKACfxvUQcYoaEDyNs6YCcFVK5r2y",
  "key16": "BEgrpp36gJG68nkQmiFPujJM9hHKy5qZir4HM64LznjiZHuSbtepzF8pZG8fw2Smpscxay34MmwqLBJ9HwCXZWn",
  "key17": "2aPZAWJWTgEVU76VdrP81uwvncTfmbgmSwfqVmpx5WUZDUsWta28z6EZ8yRiwK9NrzfpucCAcjoQBuoCAp7fUTCR",
  "key18": "46XGn4E1WcLeEt37fFkwpJSYCLeDT4adUKTx2PChBV6U7Uneg7x3oTfkUwRtra5jW8uTRHCcs9EX6NVgFbp3h7Kz",
  "key19": "4Py87ei5hAeoHRPUcLD6pChC6Z6p8YhrAptx5xnUnvfhBkAe4NUPUeXiLCco7gUQK2AFBzrG8LS5UrptFJkqt7kn",
  "key20": "315awXjVqHM3sNR2oYkFaapdC99m6qWnJDpfjP9FTSzSXSFCYbiUxewf2BAqAP8yZpqqmhe3d4XnQDwvWuUoRiRf",
  "key21": "7icvb1DjcYpDS2qyPNnNMFHZmDVS3ivLKUL2h35p1GM4ZvWRdgW3W43Mpj3Wp58ATFD3wYV1jSVN6Jx3xLFkmpL",
  "key22": "65fxYbdVnRGhTfZVbC4DU2XFgrXtwf7wsmaDXeEQuCMBbwwXzq9GTBJcYzmnYkYNHs235U5dprWBdZWvR1k5ieqB",
  "key23": "5jgKwijzkjzMadidFc4yCsFvRaJLAj5cWaUR9J7ULvV8Ns2xiMXTksHREzYC6M52NdDiz6Wjn4HZpK9FrWKVyFQh",
  "key24": "cMtSizYSNM66MVrVYeyi4TUQbYuDA2PzPa3bV2cSzE4ewWbUZapxJPVRJsuv9oTxrTfc7z4mSY2BMAkqQtz97gv",
  "key25": "4M5DWnRseqyAQ6VnsGc8EwAQD4MP4i6EctGmpfZ441mXhxxqrAq7WLZBZ3hHfrhxgj7j2FtwknewQ7vaYBzdEBoR",
  "key26": "2M911qwCnmZqYbAeSEVmgvqMyNX3ub2FPPF4s85g7YWziR2aBKCu8LXddvyHbnJJSuSmyHD4mzqkLqJFodUVVpsD",
  "key27": "2LRu1i4ZuE4g2sZ1HWunAESzW2zca1fwrxDYaeoMxqMXcbJiWYtJhrgWERn3zFWPpT8HbgwkWv24DWXaJyFmcyNv",
  "key28": "4DEr7t9Vo2R5bdGZpr3B5oVuSQuEAzvh4ffc4KF9TqXkSs2ySZx8qGjEkoeEZatNK5rxyrchxNzenwPE7vJoZPxt",
  "key29": "3SuzataofJ5y7tx4K1BoaPmoVq1TdPE3f2MmN2HkthvqQp4vH9EXaSvgzCnHGDuJxW47Q4kZwM72o8NoTPhfVw1T",
  "key30": "5Fr2Uefx3Veggu3Xp92mNsmG7uRuGDQJNFTVEDEiAsmbmfKjcwgt7fd5n4Eq6Eh5dnTNHQ24pxxDTfDyzJii42mS",
  "key31": "41G6fn6qbskHCHDrxBJvQMFeKcW7EcnAsjwLNKTHaxLg2UFhG1SRG3WDYysoYoHTUorpqTeF5b3iiu2G6RgPR5Br"
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
