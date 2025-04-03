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
    "2TD5K8oNuu3NiFN3EL9aKCwYoqQpTRhEQnoZ2zHnmWTmzZepQMVCTFiayWPb3GkvZzZCqFifk9fKHoqb8vFhAmyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3u8PaFR5Tx5CHCcfjLJHTjpyofEnXpq9dpG2CUmU7rfr5Y1t1RYzZhDDsgGGA8efmTuLRz8WD9bm5BwLipvRVFhL",
  "key1": "5BZWV3wS4nXBECPhwwF5Y2nMUsouStuNZktAQijzJkrw484zB1GtNa6QKLbBZLvJQqrpPqHyLNYPj14HnuycmwsH",
  "key2": "5oejr7LqdZq8qjembdgL2EVntCTHHQnBy5GoDnFGntowHBi82YN6YFNHvBviZim9B9LX5K9tYWQUSK1t6aEQjwcE",
  "key3": "yiWztFm8LPyRRCw2EfFQCwE8535Q4MwAitiWH2CW9aTBucxKPFLJvnf4FSa7NgHTxdA14eqSVMoig7CCpea4L1b",
  "key4": "3aFqrA6wSp82nDn1dpk3g1e988L6FCMuUzvNtGmAxtZLkSu8NKkABJrNuUDf3BM1RpLL2HqNJA6LCV3fY9ScB2Cc",
  "key5": "2QLZKtA1Bq4k2Ni3qqaHkQbuZu31gQ8TsWLuQoaWiNBvhvXHU729md49yfi3k1QiWbsToW5gfFxSrT71CsE2jL8V",
  "key6": "4JK22LcZuN7EZ4xFpZwNoFqadKHNmxmdDV26pQ2djLRLq8XTg21E6f5DphKWr6SjCKn58eyVfZEhBda1mCqEduNu",
  "key7": "b19AKaWEoqqp5t9i16nw1BoxLaMDRf1CvihyGzErSM9b98wmJLLukcnADhgnkj5uAuLnMR9g2dPXmUehr7y7QRf",
  "key8": "4XjVHHL9eqyZF3MQEVRA7CRPzKP1N8sYH61QkRDVRU6hmHuNz37QgQsyuydt5Y5czS6ygRoNZ4SGPxygeu8a5DbC",
  "key9": "33ZQcuunBRLX6bz2ZbD1tu6uYYia85yFUJYUUSGokhU3iwDKSgPmTs7nd821KsXzRQQbxMabNm2orvFz9HURoc46",
  "key10": "9fzBcM5kFgzLQRaanztR8oeeUkUXoVFjfXeyAU94qytnRBsb3icWsWN7RW1sxTQWfTJETVRJPKSgNNGhq7CeNDh",
  "key11": "2QSLnFipeFfb2EZGT92C8pV12AQ7poQJ1MBZkUAoawazQRD7AJ5BM2vZ6CXsZGs5D6GsUZfh22m84t4YJtkusyeQ",
  "key12": "nXQdDtBUtn68Le9iHagLULtEGgHZwhUYWqtrXBjo3a6aPJWfdeVB851UK5rVWdTqZhx2WQx4AZ8aEarKGaG3FAF",
  "key13": "4E7TLJS4exqiKvo44GWT5eZ8ZM3hsJpr4yj35aj9rEXNJ141qC2EG4pKg8bqoSwqYsegaZN9WRA8qP3zX2Uem7VC",
  "key14": "38haapedCN2MwEHqJqaQVH1SeCLATyUg5GndhXMHNTxp1k3j593rdA2t9SKqqp6CpupxXts2TTzFnrQMLJji49eg",
  "key15": "5DTCXL15agG58rDjjMKn9hhH9RJzKvNMBXx3rN1A1LNBogjqrFWkvNg9Vs9xiHSdW1GK59HwtpxphA3vZW3ZqbJ2",
  "key16": "3rdmpL5UWEUNS8dc5SDexdGAoaKMoShJy2GdKUMyuJSXkvADwcuieDCqrLmCpv6WEewAY7WaXyem3Q5cKchACUT9",
  "key17": "gu1MYAmBj8RQ84TQzvzH9GfmkuuSgZCYT5bCyzV2zQwueyPQTjV59WY7vWyYqjTjtSNef4vkHhdFhDvWc6H2xmR",
  "key18": "3fSaEqhgXvckJMCTxSKxDu9pTsFpUcLboGFEgiDiTWQLjB7r9ZTQCaawJMLs24F4dysTyvkHTbQ8MwYLWX55BfLE",
  "key19": "2BVnGtjHNJWxmxjVCNdFgMnZ4XzmLaK8iNg4q2GiG5eABUUfbj3TDGVtUS64tip8uCJGWQ2rhcU8BCneBiSDzVh6",
  "key20": "57h1Mkv36KKfP7ui14ULtXpVRSK8atcn73emBQch9vWZLkvXKvtxPBiLXpSACSmc6FBF4b1f1AXU3VUqqepBgCYe",
  "key21": "2BwMoUqxoNXRGhSriGCvHKusGA4ZJ2c7f9tod75hSwwEwBDsqAp8vhFkKRv862n4HNWAEdAw4ZLYNtB72gxkP4Zt",
  "key22": "2fQn8n7W7At7kNFpJeWfNHLgjT1HPCwuneaFR6jk2AiiZp1qpW7d9Y9hdwLctjiDuaehavpumCndoEEvz7NJzERZ",
  "key23": "4o8wNt9mGo7bYMVFieGpDKArwNKhvXikZZ21vWJMrRZgdVPCQEFDbBjSms6cVMi1YvQ73pnx7yckaTPTu7gAhmMT",
  "key24": "4cCGx68qWpFLarmVBJaUq417xdNg3ZyD94VDNzzK8pqxiLnGBeQL3kvXPMi9TvMVkD4UFRtpuguKBK7nBcE7ADnr",
  "key25": "UAr5PRFKWM5UbfzQmbGcjTKfxK2nTtVuPy6t1cNPQUcsEoqbx3JsfjjrB1YBfJ74GqaW4cbvyAyWp2LxfRMz2MN",
  "key26": "4XR6nLJPibCR5uusQVbyrLwsDtrDRpnbzvU8yfWY1r4eo6iYck16fTBEwhEsLB8ma66PXwway32Rc9oynBoBco6n",
  "key27": "5uGyt8ep7vFA8FEtaqXeQJFDUnY66LANYdnxraiSwLypwiDddLBX5yqNrWkUWbM7fr4yKLg1R49iJDhviBUcFXSe",
  "key28": "55bEgV3PHWKGBUNo3be5K3pt1oZXQgBeCuZa77FmKT1tsNmJRBsX8P9dDRSpu1dCRVu6r2L3usnSDULNpZhPfQrG",
  "key29": "4xRQv1K7dKVieKUo6DX7UNFR6ZfnTBZN2RHaJErAN44LdXhW3XXxTEJR3a3tHvventvaktcF9pL9TNcv9caYmR9N",
  "key30": "3emYyK8N7XANw57vB7VvJXdNFE8CqutY2YvsJcT5BiFru4AoF3653oWMRDHuLHomKNq38kXzE8i1uVUg5RWVTxD",
  "key31": "hLjB4bCf7ivc1NDMmFYPKTUk5TwkcnhNyAMgsVoKcpf1yvQksREWXnXYKgQvf4WzNkjwNBZc5Sk37sT65cGjybP",
  "key32": "3BiY73SA9tP5M4acQ5bQovsZkzcTj9wSYUjjuCXEZPjv88JHTbYQPi1wtisMmnBSA8ttrtGMBa9u82tFj4DKuSuJ",
  "key33": "jWguK7beZDV7YT1hEHsMzek6dF49zVZ7ZwvMq8mqPfkX4dtJR3CVPG2jnx6ZXGx6n8vr7f6J9JfTgK1QaFT9Lt1",
  "key34": "4P8UVXTBTpxibMu9DsW5H86fK6M4eMQ9D91ojH8GveW3QvA4GuK3gHBNeMuW6dsdvmM5sNRpLDsMZpsAfizvvuJr"
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
