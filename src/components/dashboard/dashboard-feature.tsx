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
    "2B9y1tn3raX5gE4Y7r7CodjgBMLWbQo9NSUTn7WtoMwPxX3UC3DytH15bPN2RrWvxYVS4DVrZRbvR9ZyZe1wor5m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BqwSbiZqCCLipfGGkgegWpkCHeCiUkNRPE3r2MLrTcJ8dC9LFgeRC8mfizcFXkGXoauFqRx3pNRCLZTstCFHzYH",
  "key1": "42D7U1UhvqC4TTD56mfRqhA6YQuzvTAhAziL4YTLVX5yhacs6QXyGciJY9VHvmzKiKEQNrWyYjFKHa5k6f3dEzd5",
  "key2": "5GoFABWamAVm21D1H4rgaeZ2gaLKaK6CZ6UXRZPAaSuCePmnnc4D5JYioGVRkq9JKghT5YBvUYsdWM5jkVKnNUnd",
  "key3": "5p6ekDztBt5KVbn2srgyAzRMuLfqqVQgD6XrsD2k6vRWbHZgZy6ueUnmK1vgTzCBaCtfWEtcgS5zFGzULwSuKfDt",
  "key4": "57LbmtpeG2czoNsfEesJALFkRJrEqJPsV23aYsaNUavxdpYJRHz65Kax3D7ywd3QELB1cGpQEG4xDNnn26oSTpZC",
  "key5": "29gDSVoMbq666pUc14EXmEncoM7DaFCaeqcSYdjC7cJMrUzvKVjBnSK7uw5e4B5pVthzKzLEj3StxV1P63Cb9KKb",
  "key6": "2HWThyd5kecfgNxPywEHMFoSeNfCU8HzHUG5RWJYt5HRbACutwQ7K6q4hVKgq6JXe2uduSffmUz9oBUtH45rosXA",
  "key7": "5FFmbNVq3h13wHqvKbQWhx8qL3qxPyWTfaRkZWVYDsQP7WL9CvSwiGMXuzqC39GNAbKdzaSVSUDCbLgwe6XqAkDr",
  "key8": "3UisJy86tN2Jm6j455XBapMFUS1JqBDct9M7fKgYMro9GaS2nLYJVaSJGH2fSUcmxMsiW6BUgiCJxGx2cbTb5tvX",
  "key9": "27uLE189SfZrbwbhukUc7pgJtwwrgqb3pPfcvqfy12LnJrC8oj7HBTc1qwHtvKjKCPC85mnJqqKWH3dmT1ZwEzGG",
  "key10": "pMFf7Sx4Jbx9NaFAoLMn7eXDxgfxcFrRFseVBQvKFRSdk4X1zArD1hwafMmaRN5Kms4j4AdsB2wg6CU6ANR2ffu",
  "key11": "AWpsRXHWKc23uFFCdG3UNKjYD9d5VxRGXy12ALPrD3NGiaoHr467vPbNf8i9tekgaGK4NLtsWKawBGNZUqZ1dmH",
  "key12": "4gwwBbJSHjKGpxAL3ijCxw9WNMLfrhchGSceAcUjPRskjW5LtVdpW5byTWNrrQEWfzGZHxa4SnpgEFig4NZDWLLP",
  "key13": "3Kqkir7Lzh6XpsX5rqbwJFHg5rbrnn7uRY15A3MKeQumzQfjRSJkjehSJKcZuceLdq74MxSohTcgDwKWNUM3kNg8",
  "key14": "2JtuBuibw38D9GumDScXETRapvL5DanRBGF2gLWhjqyigDcpRNtj4yWrCXLKiauoo2GKqFsRvMbJZ3Bb4ipQZmDA",
  "key15": "4g1kuCxqMsy566ZeAQms8QBnoeBo7giwyHUFJ6PtHpAYtWnq38vxGVW19Z4D961U9qnHzJqhxYCseVv5aRUDZ9mW",
  "key16": "5Rue5c17mTZQg9e9vd7X7K43NFZScGAibNWeivzNVunUyWKeX2quYoLGvwANyfg2zdU7akBLiSK51UtBJ2N8W16Y",
  "key17": "67oH4bd5Av6SFa9gZtjGN3nNAeWynXuijS27CMDS2C4vKBLu1PdcauPAe6adyKK5t9U29U8S4inwkSKj22MgAL3F",
  "key18": "5W51qCXYUj3JDJ1mcvcbDHNKNWy4HUi95NXePoKb8kSDZnHaawRi5MtU9VQnTR7urQv4g9SpXv9Jrv514Ch9SSXB",
  "key19": "4uTC6MZ6Atv86BWLsBPNue7Kj6kTwUMLZa2CAJnvVSCQmMJo5fYn4EeKX3Eg5nRAR93RqKJhiagDrwqbKLmVomeh",
  "key20": "5wnCoRumDkmuD4jJqqbjtBfB5L7LdHmHuicvW6jvGGSvoLtcCrf6J3R814NQzq3FFVgUCDiqVaEfAtUEMN6hdsTc",
  "key21": "5oTf9SvVfUAnFPJJPmUfpSC95utzW81B2WuEDQ5gDHhb4Qh2fDhjWSL2E1fjkVTgz2MTg86GECNkNd8H9zJ4U8tU",
  "key22": "3AKQqvDY9JHjEeBphCkkh4KMGHLka7TFuBDHSeGEWPpV1vjcNVf6Q659pHcXXdZg6baU2Z6bf3EgEeVftKQ613BU",
  "key23": "Q1JSMdHr2UYoLdfbTSJHkCxF1n53N11PKZMqHaZ5PraHnNxGwqyxxmD2zqL4SCCUE8RADz2WDE9bf9fEcrDdLDv",
  "key24": "kfyP5xcMKRL6TL8PGnuHXnFCV6z1vw6mfE5AMq8kf8DHwTNXjXp8gHYrkcfEhSvS5f8KWdpy9vVhRsoPwH1F3iq",
  "key25": "2Qp1EG4eqeGp2PqSzAySH58CQ2JLxMBSbbtHMVHrfrWefJQU5aXxDnFevT8uiQ14z7au8YXuQAx8uDYxDYjLzpmu",
  "key26": "4Xo23sG645EhhRYpathsuwxEsQZT4cqj6MFikyqncduyZC91dZgADWJyqZSnqwod8U39Kj2WNdz6yXgmuNemEpDQ",
  "key27": "2iuACPzkNHXtnzyhSQL3AUdMbrdmSp64598eq4omUdov8AULG3dWQnWxBTCdbAWE3PAvQU3x1UBscEDfvxHGCo7d",
  "key28": "5BzxGBTAmkQfgS9JdLNjzNqycqXtpb5NMXxmxjMDwX771Tkp9Fa1uRUJVRSWzYs7qceUg1j5F9Qawk4EiRYj9b42",
  "key29": "2L83FfXGyXvR6jSRhD1bQvMpEvgoBCgs42gCVSMzrW5cKpL93SqoyV2BATf9XQQVFmp5t3eeKjyMS2shYsNkuUZu",
  "key30": "4mYje6y5LhZY6oQjskxhoYP9K7RyMLPSb4vf6QHVxPKaPgYd6uZPHUTjGkeHZmWZirQNRVc8LqLbkF4oqbGXeXHo",
  "key31": "NoJLyP6NAPA7bvUrP9AmoGT84xxJ56oKz4KJdHRS1Yd3kCe2VwSsZ2j91gcxrjxnRyjNjb2RoLs12VfN4YwfWu4"
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
