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
    "QFmgk6tKes6JK1t3frMbpSXRPd9r84HeNKZ35ccUJJHdQNADTyEJsRCjS4MsWM2ue9aFMRjbfrw7WqSy7F4b2zu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2anhEXfyFGggav2bVvQTwETZsc51mMctMGk6gXR3HMsS1LTNZEQuj29xZ58GaF9iV3US9iGxGHvKJs2MrUyzjL3p",
  "key1": "4YPKCZVBWeXVoZe9kJWmgbddSnFKiRSYeX4YGUhGFsQrB21iQKiAJB36C4nEmirCCuPRZsKhj8SB6rUdcuEeTEZW",
  "key2": "29HWjugLxb9xf8XFwXdrxPzfMyEUfvWkywZEKaQGbmztcLHqziTvzF9a72kMmoUPs9S3SHdHSCyNXSXM8WqLU4TF",
  "key3": "5zQESfwCQGCSaDeMR8Q3owv5R9R7Z7TkAAUXbZDkq9BwgDdRoRBxFS1FXGzc1GZdyakUj3vrh8B8Rh9rFs7Aymfs",
  "key4": "DVk4KtTX3cRCmyTTsZGiaAA3Apj4DrW3gqmS9vpXQBivwL2A7TUyoKStGNtiaUM5DtLdkHwRTo5uZXMEa1sPjMc",
  "key5": "54mFkAGYAmiTjKMDByvjbHqu1HWhLdM7LxWMRSsJLUQF9kzpNw6YkQVppMKwgxAuqVTzTsNakxUimqcezPc1wvXT",
  "key6": "9kN59YYNqhTtC5sq5KshkZcQXKSCBeUCkzM3UMj6ar6bwyPaaBxdiwTNTWE6GhRuy2vr8vgraGTUZjfqRBfvKFv",
  "key7": "d7MtoyVByCdcUpwHdnWVAZ82yQmF9gdJmZhU2dzkBFaJVFQfwEv8bZpvyNKDXDBW1ymTS2s4Xa3aZo5yiJxuFdA",
  "key8": "W19coN7cqF78r2sFhJErayjUWojAP8GPAwZZro8t3KmpXAxwxxE5ubY4QkhgrCjfDKsFR75oGEdR2FyuxcLEAzn",
  "key9": "6Cv2R1UTaTdfF38eHHeSQPZjkBmQEXhqx9Nxkv6c65RZJUR9zuRXQfNpuDU9jmSbsJqpGNnK7gA4TFcUmh2TzJv",
  "key10": "3nDCHFBG2hB7Vp77tHVZnhHXoCi12rJXZWBT8ZSb3vQzrwjjEr3s5vyYovYp6mAfYYzuQp3xcnXQS2sqmXy2PTaA",
  "key11": "2XYKkwFGosv5vAx7amqK1apgKmEBCtrUVRV3i5SZy1DNixqECBCZZB76rSH7H9fQujtCeaMJpVrcgkU2yPUeMTR3",
  "key12": "3x5cn1hQiGo16jcRdxVun44MujyKmswe4SN3vshcAVwHdifaxJMM9Mvt5exskrHpRh6NySYQajehVng5C8yXJnxn",
  "key13": "4iQpbAKfFBKbWKzKj6oQeFhcXfdFTRVGiTybg422xrbo6zDGi3knbZbtwXmTgnbCU3ekBoj2DtkDs2FES9HwhoSQ",
  "key14": "3YjM8yvjuXSmoQvAvpHpMUAjp6afUwBzjm8R3bT3GqiZ58ArGji6joqXm78V6ntFXDm7946DUG5JyCG3xXZ5bZVn",
  "key15": "4zVoJowLvkvestK4HUJtjqyup6bfqUW5nsa4eh7j5wBsYfYHH2NiMemy9bLoQTLkTnSB42CXiC6Br1pu5ZZgepj",
  "key16": "5cEnQTsxit5pB6T7ETqN39tPhPWLNGwwfMqivFZf875MgybHeSEW9sbrpY6UHeXzL247Hj4wHRgDwviqmA5TFXwk",
  "key17": "3YTYGnp5MzUtLTLUhLWZjbg4VUoMbDZWUXw7KHqwSQBv9S9xtKGU4avrvJELCsmbVnRPRrM2jdHpQUxo2b3jPUWD",
  "key18": "5MUi7wYCgRfMRJhpjVFnQBDjAZz7LiEmRjgSfqUcT4PMQf6gYZ2eed4TPV3g69Xs83YoujCfX8P8aZsD6YZZqpik",
  "key19": "2upsy5o7NGYRpZZVXi4LeDwApU6992naAX72bViQR3BUsCq3rjUtLMkPMMGAGoknw1A7gPM7eG5FGv9D6i7yCTHR",
  "key20": "5KcPH8u8TYW7BEvfLWpSZYUh9rftRV8bWnc2uLixUmNSkLw1EtJVtMCV6zc96Fe8WgJ1gekLL5H7z7qcj81eZ8ur",
  "key21": "59d7zsRfkYoYX2yTtPS9Dn5Lwtt3GiETFaoV1z9KZoFc4RFQdidUkdioymMJdMbvYk3gJ6xfFUCihsQTocoqetJu",
  "key22": "5Qay36jFNMv1mnbMvjFUtvz3LmdgrxFKvo97boje6EqhNvEuSjoHGWG8hDDMBErFcpGf6Cmdrg6dJ7cdnRbMn48r",
  "key23": "55fz1Rn95Uu3uyQ91orJGd86q9xpY6TbFa8s4cRCpN8aRMrr5ydShaCZgcrGzHeztF92RBjZNkJwbFXeAenAfnvp",
  "key24": "3aVExh6m8Mf3FGXeFpoaSZaR7RQFxJTnNWQpRuifw9ypKCxBK4qwmohWaF5iXpXeakSwb62G5GUJ2nsCoSDr2uHC",
  "key25": "5CGJtknPQkoxQtDpyzKDmXNwrY2w7rRK5fjVhNwBFCxtpDHeDjp7nh4x4SHjGDhwmx9RMCkeNmFyryrxLHpJ9zhg",
  "key26": "5EebUBWGNxP9WgL9Fnb7e3XBfpR5KbA9ui11L5Vy7j8EdnBBCBecnTBrPHHbsDrvsAwmLg2dpZWdnmomLhewX6tw",
  "key27": "4W7fjnw8fKpQSZYV4urkoNPRVmz631XwQHZpTsyskRpPXPPMjKqd9omKE8wWrpRHzb2nHsf8tHmKVRy62e4K2HCZ",
  "key28": "HEcyuqeJyJ8M85MnnDJ2pRRjZqSPhxEkVf5MfgHw33Vqqy4cyradfPjCyrF3fJZGgsbtzPpPVmbij1ZHfMZvM74",
  "key29": "dj4m15eirKtwVMTZgT7yUgg59ceZdHdqeHE8VkQw5WUGQYWcgFcREAehNkvd9wQfkB8bnt9g4LAj6ipcTpxm5au",
  "key30": "2uErBw8SqYhy9hnFo8JH2t9X7SoerRCBAZk8TEYkhkoeXuFCCh8jCD6yZwMQqUKYUU3HAuMgobGyZ4nDcsKTUKnp",
  "key31": "48nZPpiYF3Mp14ADcwRsbuVTYLLmZyRivbuQx1MThaXswMMUT8Yhd5G2ZhjYAqTPrCWPKM3nra7NxuigrmKKA3Dy",
  "key32": "3NxZMuHHQUDH5nLUeW1Gx86RSZ1UYFL7w7sFwp71pt26KTmepf9RUa4qjjfAurP2TgacELSNB4bzdqmJKcJrv53x",
  "key33": "2kuYLkNJ1jotmf1GJAcX3xr3qWmFQd1LeUax4Bkh2XN7CjG7g98cHQvWK9J5T2rf1qnhNpYTTwCXBcGPd4ro8xQD",
  "key34": "2oCStUaSgmqqC7bY6V5U8L1HhHhcb1Duh1jcmUuxDL324yJqjJuZbni5bHh15xCc7tG3ESYCqn8Qibmdt7ViQmFU",
  "key35": "2WrrtFFj1HpXnoLLtQhTBTwFkXw2hHfure6zs9XVVHjz3XxKEURSYHw76qUeEuFvi6bGGkU9CUKRedyfxAxSR6Hf"
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
