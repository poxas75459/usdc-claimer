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
    "32VMg4WzYhYyhajg3PtaYSi39U7FhYtnKNajuV81YVsw8maUQmPMXQgpxD9sgqBR4wxnDfiC8f7Vqkcg6ZwT198a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2veuzz6eutxyfNVJreD3r7uomMQCdASMdB89wPk4LyoycqZSqKjmPAvHvMtiu4pLTmed778hZ6MxCVh9wTLUkbZy",
  "key1": "5qscUS6RvPnP8XE2JTBCQL1PG8zaBY6NED1dwVxWcEVmLBxu9B64VFDb3rXHkN2kiEw8EGHzSt7AMPzLiitwX8j9",
  "key2": "2dui4MyHNHtWeQCUHun6UgeVVzrnpGowfsQRZyhwUwGUzJjV8psuptunLezboh7fBAxyTMJWtR2ogRToercnVAH5",
  "key3": "4tW4UU28ZTZedSd2Wivs5ucwgBckQGa1fZnzzRyHDfr67JY9y71QRxGeszxizf3NbAS4zHLSSauJQjskdtBD5xWR",
  "key4": "3BJS5vzLKvTd9LRd7P8JHzuQhHXYHGnm7untYSjnwpPH5Y625owGSDZnPCidVCXwr5ywdrqBr1KHXMu1SJRqnQNy",
  "key5": "2dyPBNaC9mk213mfx6tUSVpxR8FJMMZwQURVWtJSkoomv5zyKzaq5XrxMVDHTcFCMJ2vhCbKy1Xv5YaVvsYjck1g",
  "key6": "fKaMnHPr2cH8Dsqni86ddGJxUFWU5f5fsLf6H5dTRSbZhhCvBQk6UvfsYrMbGa2JAMuPDJVZCyKqGWeJ9GQGsrS",
  "key7": "4QszTpGaXK5P8LMvKmV8CEb6E7oKhQSW6qc1wWeeSkJ1fCS4ZjYXPavJPsJGktzVju5kEsSangyC2GTuCvxr2s2x",
  "key8": "FBDTK4KMwwyycruZmR9jEcN2Z9WzfNzZA1jk4dmU7QRaWVVjjADF27pea8VRo6PrDRs5fZWJ8ZSVJfaahhanNXt",
  "key9": "3Vd5NvTB3w6XNwxPDZ7E1Udf3qD2pfJFbSGm59NPeSMswXHBDukJPaiCWbk1YcVfid4XPksbH8czqBTcK2BjyiQv",
  "key10": "5kyJTsDfuhAQtqzfr8gGfoDMbLeoCvKxSZR9nSDBLtFfrvj4cVBUfF9p6hP6sAS6RQj9Ny4KJhwqKRqvqM1fH24f",
  "key11": "WLbUfKfNaagG57uZ3tExBhpSJCEztuc4Ch3m1czRpVWxKy5UnQhZUjDqGu97c2nYWUyToQ4tEGbL1pa1A3ebpDo",
  "key12": "a9ApzJVrogvty3FEw5BTVzYkxtPA7mApiEJcJVEyNSSt2WtYF4v1sCQchyEA8RUHVReYpKCMeV16E9KFxX6hxoT",
  "key13": "5xQCEotr2XC5X36Ts47ogGXcEAm3tqRwKZUEBqS59tNJVYeCcUy48tcJywaiZnmzp9FY186xFcj4oiPxnn88eCBR",
  "key14": "122u1HkzpwWXXGKCQrB468P6DWX9Abf5dUmshN6ZVPhZzUfyRAgoyEKZLsB2GKewGgUgfabi3Tuzo1MVGr7xEBPY",
  "key15": "5TxFF7y7uKgMdoVqJZ3CXFgmw2EhQvmvy3GC936YzvMLEvCk1NTrVbnzgfUN3yySnjqMhMS6Tbejq6NfcHfWTzAV",
  "key16": "28nguDHuDTMnUb1hJe2JTDXcBFkdu2NVahcWXJUWM1ngRFCu6nZp5Pmn5JXoPr6vLwksTJKcebveaNCrHCNY2GN4",
  "key17": "3nsAqwHpdnRrVg2ArpNQhWWGQ8kc7v13C8jvGPJoymZ5JfeVFjP76vGKneFWEKijq9TgxHphMxuAxb9itkeZnCFr",
  "key18": "UAUiaz6mvu6DioqqMZoU5avGd2uwUhxm98vmn2F4JQTopmZ5PFcSzWrQGgpeunfjHKviofZTqvCUAaYFaw9efae",
  "key19": "4ub9DCMQoDES9e8XiuhUFWSofc8QwgCLEV4c5nNH3YdaBh5Qk5r3DhCNLheiVXnPeG3rssfNdNPt5ZPLB31Rjzvw",
  "key20": "AvDJM9PxF6ok2qSqVSusk4NpPDcCQCZ8FfxxLPHCX9XXdq2paiUVjvPtYno8NgvemkUdcjh8dKGuSJDAaUcBrzb",
  "key21": "3tia3PtiGnVmpnLt2FKhrLxdVV8jiAPuyZ9R1gs11dTnFYPV7hkirrpYBrKYsZsaMz76swy4j1AVYKsEGw4EwW5c",
  "key22": "6769U8ejfp6m8w8jfpc5sNTCUnyk6WhhtT1RhPN4Jquh5xWwpD2SChyVHJSWdGZWaTLBVyDZgXuZStsnqoTQmsvv",
  "key23": "55axipsRafeigXW6o95ejoVyJLwZyvEQ4NpoYwerbaydwuL7Bzf7Hvs7PvAZoPWud7koNwYFimLj7WxKVWdYKFwJ",
  "key24": "5FUTJau2ezK9hxe5G7r4JtsGuHmQHvodKqyyvG6qfLUzvJbPKghJcwrrxkPBDSu4oQG35vjfbgY2xQWH4Sr6zdG4",
  "key25": "2RSDQaVkx9jQibTG17rvgdxE5eu7hGzkbx46B9jR6UvKKDubScXrfSbs8WYf51asjpg71oaz33RqRYNVQNJWZm2b",
  "key26": "3aPXkxwhxQYRkxhP13DXCAapSnKvcFZR1GohLSW6CwwrozobVfAyrNz5h6arafpEGwMHoKk1trDMhE4LPeEKfnri",
  "key27": "wWU8oTUPX2Dm1fta5shdzqERHssfHTytKQRgp1naJDRSJQ3HUYEWg156gfmBihY8AFt1H52rMgJ4Uuc184PmHbE",
  "key28": "mAeQ4w2HN75oo7ANnwjj9VhYEjmYX87qmTpiC1Va7pCCxUkyjvKDwfUKL3tZ6yy8kcURjqXdyv6uYSAhkVgyyfS",
  "key29": "3Gxb4rMTsGbnt9ccoECRRjAG2DGmAWGKvxpwALDc2NmgTc9rWeVqDfpvTWGfQ1LaPUvm5Yk1gXbpHs8n9UXiUnnr",
  "key30": "4CFHdm1pvGT965H4fCitykCVWyoeybFgRhKf3u9WkX7ZPEsxL2P3qt3VEj3zgWDNnBxhcBzNPCabbT8zQv3YN4yZ",
  "key31": "2z6yV8Fa6atB6SBjvNoZpfVy6WVnxqLSg47ASiYiFJX3XEoG7v2gxXfT15CSUqvwWuhoDrF6yeU8GHzs4Uj4dUKk",
  "key32": "3GAAHi97ZV4fA3ecfZUozkQux4UGa26oJU8XXfVwRRWGoT9zFzmcRAAgxvzrzWq99UoqayZwEC9Mmy7h5zkfiCxU",
  "key33": "4KMKy4GKVuA9zrP2GXgyBGgDetWsTJ84CJdEgqgqEtfNDUJskHxMz5eDXktcgrDgmP1V7M6TdP6cLcep1nWvT1iv",
  "key34": "7BMGQcsmqRcz7uJY6pAUht8XAo4cpsVVq8MQn93VVZksh72sVuNr3HNwxxAyywS2AFuN6rcc7GVerfXTUy9piuN",
  "key35": "5KWxbSmbyvz5mhhujZfd1sb35EMopjdPcNZJn29yqXcPhHa4xRpBBuhLJbhRmvkwGtLeAEq77KhRefBUwCc5to92",
  "key36": "4zpVkGjStFcdS8Ln1cutvDb6iSk1N18zHtdL3iLGSpGpmJSFo3QUPKkzYPLAnqxVLB4zqeh6zLwYF5MJECeJRQmn",
  "key37": "346bvyRcCTqnJg6BYCtAWSsneybxpYd5oafECWZFR2mu6a9vVoTP9va41XCHDDM3ncYHh2e3R3CHqqVRWfQDRTgU",
  "key38": "2mMxkACybr6uXhpJbS6S6q254DY2DQXe5vX9Ms5KAKdxE9YBX31jiLLvHXgzWo9bTKk1UuufnmUfq2VSiZL1XasS",
  "key39": "3pQ2g15evNMsrTCoy77dZXkZUXKKE57Me2sGWetFM7j9HKzKEAcCRFb8975mHPax1QwVopPLZ8CBkHRAyh7QJKk4",
  "key40": "5dszVKvghxyzhoqSQKrJoucQ3xhbXi2PL9JPekYVhrByTkQh9yTBsvckESrjX12RaAq7bV6i3MueYbFvcfMsLNe8",
  "key41": "5QygHnz6yKyk1mZapTtkfB5HZipVeNYjXExPnczPoQMYrA7nvZbjxkVCNH3M6XLK6EBDyVXteCuKJDszp1FdTDrS",
  "key42": "4g69bLmJqkuFnjn2pokwSKAxL8Wfmcm6bdGm8Yr9xz5smovgEyzzXjpvPJp8JtmqwkoUx2yzfMbmRK6gJ4QoQ4kq",
  "key43": "4dLghvgWRnjTMpuvkgHn5Yn8KAc6bbjk7dhuQFXQ9qr13XVxdky7pGLrz8ihUVCzpzqD2a7emxKn9cNFbPvo9RQr",
  "key44": "5ydqEU2Xx7EiieNUzqAjMxyatnroKLE9wTyxueHVHpUtWAAD5zMLias6LkGcqJCR4TYrmkZoaw19NwoxTUuAMVDz",
  "key45": "2ATrjgqt6cQ9ow2nX8ReWyhpyLqqvb8RaaqYnXw5AEdtC7tdc48K6xaPGqThSq6pe7Db1vZM1WSk5AbhQbCyThYU"
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
