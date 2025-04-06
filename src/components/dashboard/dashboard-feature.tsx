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
    "xnoMa6bRKRDt3B8aGx6B8iy5jEcKheDKsU4N29roPyNBoVsf1mZrD8qagKyTzJT2nN5kqppE5LFWgdqvQCQYijh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "B2h8WvhzfKdtncz5WxDHvjbxEKQh9qPNJuwGg8Wtex3HA4cPNvSZCaUSU21bdvny2aqYR7KwBJDqpbPkPvBwmU9",
  "key1": "Qby52uocYA6gkt5MQMmH81N9oaVxf7zUmrHR8DUF8bPcjEMjAKCugdtPMJM7yVyocqngnWPBHUUpo8NNBaByUK4",
  "key2": "22b5V132hP5uoetcfMF3bMXDqnUuciUkCnVqnuuBuDzEcYnhyMHMWh4e1roHmJLt59YsFa5FtW2ALfd3HRQ1Mf8t",
  "key3": "3hA5JHNceafgZF2FQfymVBqY2s6zi1NQfzd5hKVYU5QHMZSaw2FvQyke3M8YJF8WcL37gFUwEGmXpgdkh2o7fNDr",
  "key4": "3KFWmi9bELXawqBpFtrA4ho9xhqT5qgWvxatJz7vLDuwDqVECprrtfzhXisEs6whk2KybaFp8Qe2GJqqHrJjqN1V",
  "key5": "29dETxfcMqSrEv27dy6evbMNPqxNNofGg5TBFgpqq3MGoed13itHSFbefZ8DeQiE2RAVxG6otLmnkEVFY9hG4NpE",
  "key6": "385UeQMdS94d28vonNMimMGaFfbEmBChDXauvsSufXSTcYVFB6HTmWEefz31vHbAJJBWQxkeyB5vSSvcrGEtvT3N",
  "key7": "3fJDKUm9hs35XLa4Z8nqyhFC7JVXw9XSWF93Xpt27kz5cjgzKXP2ituNS1oqHHq6XyJYCiMyi9X56iruxJvDt77o",
  "key8": "3njhRLHgCeATYueTWHJzVNtr4zp7JLRBHuiokgj1HrpX9hWxd5pBtnEBmvw1rDDe3uRNuUyxNmkDuXED3Wsd3c36",
  "key9": "3Vzsm9ydYegouwgWgEss8bfBm6A6T2Bh8tJkBgR8N7ZNmFXoTEwFGgPq4Nz3TPBASbPBywZRn4Qqn3swJHnM2UdV",
  "key10": "5Ashcp9MAvFwmFr7RgNkVsapizSUeL7TrNnV2ja7osn9soG8RXhXXJMwaFvS3EQb5QorXC9pgDvyjhpbBG8NYncm",
  "key11": "5qeU7A6mpA6nDoj71qoA5FFdqxjiBBZBKJM7i8dHtB3T8WVQEMCgBp8VCRbWELYgPs3EDG9RkHGXYPfU8MijybRx",
  "key12": "BkNKXqBxFS9wTmK46CrRj9dmZnGcB3LAgbM6fhMMw7tJhp9NVMyd1rQrZCqB5bZ2VsMTfYxiQRdGfDanb4kMXjx",
  "key13": "Ndb8uiH2L1mbQxVGcFVq9bY5ukBC6eh7XBLcJCaLy2UrDQ1phr2H6Ttj4EwVpJ4xuXdrmazmZLmEv9YhkAhY6aM",
  "key14": "39NSoyPgL3KkbLz1G2ELTJYT44GspsVx8L7jUFBTcGPK8BeUBDtCrziUBwJVBmU7SJE5FjkJKCh5ka8ZP8q9PybQ",
  "key15": "3jEq9kpGxswk1YX7L8tcVP6yG2x2TWJ4e2bg4D542XoiyzduWX47WhHTXM35D2JoEYkqadKmvc1UkDetNpMJQw99",
  "key16": "4xCiTfvFc2iD1gxD12MrRdXj8tESZU3QD3FStjnzBkFrNN7oiFZxqCaiy4h8w82nUMBRY9ZWCXX6QGsiAuVxw45K",
  "key17": "2Ai2RkEY5z1V47GymXnQy3nTgkG7hQktv4iSQHmo7abohW4mWwTAdtvPb87W3GZoTb9bhivGUDqLhJP5mFHLCuaC",
  "key18": "huQqb7z9w2NFdagjNPr3z4JXmRFY5xJJ2pLkQoiEZpbFzDpmo9AcmZCAKGTGn5YxA9JcKP1HBBceV7K7a4HsVwD",
  "key19": "61YQhJVZGDUvK1Q4J9EbX1UYFpLYCFJNcjDey7zN6a6FzkjZtksPNmxsiWVAPzK8BumbfxTQZ2CpchcXGpZPsiWX",
  "key20": "48AzjSE5mXwChdN9XTThyumey2j3AC12t6Y6vUzKKqgWi6n1qLEyCL3X5Uy1gAcvfz25paiYTJPJgL4AcAiYUWr4",
  "key21": "Xucftya3eTnso4yTFDZupSXfzyYJuTaYKbqmeoctXYygW8M7zCgRPDvgdeeuw9RoAcAxB2pE7Rv4QGFgtUUSvyK",
  "key22": "2cuX1aXwQpUp2wgMRKQpcMRuA8dNEAqkLsuQj6soUD3r3CeZMtU1Be4JzY6wDDvc5ZYVbgFpHhoohwtLSCaKjBeg",
  "key23": "EVGh1yQjFGvR4hgoKsVvuYTQo7PRHFkrmXZBUeFRtUys9s8c4VAFBJXKUdA1tYL8W97Fg2CzcXKHQbH7ndHSGLg",
  "key24": "oxCghfb43Ucim7m4ZMYfcwdtwgN16546WwEUzrDvAiBgMh5dmcnPvxxy5szrRSLM3NVFFwNvpzrfsEV1V1C5rsM",
  "key25": "4qvX7Q4WprH4Cyd16Zr1sbThWQRtGcoQPDeDeMpesjRVj6KYELGxZe5L1Nm9RgkoEMnohtUiogJkuDoiP48ckJRn",
  "key26": "4UqtBN6NXhw8jTeR3crspgUsZFw4kYLQf4irQzqynksyNN9yzHMtfXgkTXMVUgAQyN1XEmDkcKxTR7QkSExCakF6",
  "key27": "4QdvXWMbzUqKPSDBarrZrMXsp9mS6N7YvQSPQXGWk9m3VvVJiWCdjpRkgG91UDc4a2vHsFvMtFJKMG2h4baA7v5v",
  "key28": "3hq88UuBwc8CVc5WgGjur9eYf66gRKpyNz4M55ArVL9j6DoroyHgUmECEVh1qYLRWcBm7jS5SHCYaFwybVoYczaN",
  "key29": "2LoxnEb4J6weJkscZRwEAfPmHuq9hDDGEe6EfaiiRMEL2XE2oQfAXRnqp3YizMC4DfueRry8xzLQBe6BUapSP9kM",
  "key30": "E4MXeypxaHdZACdXNPs9cuic7JYUDcvrWJe2NZxgzfw5FsS1EM9vaAjtkXgoH6CJNEqGbAvvB8eLFjW9kKP9hCk",
  "key31": "2mGwYi74wK6M4yRUQnxg9qrNNbqoPaZ3ZdwdzE8pbv5VrFiBhowBFfZDVyfQFDccFBUNCwE7pGgrNJBiJQW4gWgG",
  "key32": "3b9YmCTcwYPXqPXGeKbKEve1f7rRjPZGz6NTHBREFcc54n7NERNgASRva53HbciwmhSDjwuWWQNUNMgJiuU6sBmd",
  "key33": "Mg73jW38bj5tiBY7VH7upYmUkQTFuaHKAVBSy6Ej4t46xZtnjpantsPXRabP4LXAN1Hi2DYJbDUf9myucaoqoVy",
  "key34": "eyTNPmCzSGaaZo3qbSQHiDzY3ac6Bj7paTtHiyG5dmSC2LiAUAJcvQ2oBEWJykfSPVLFkcbQzDveKbUfCDmxNB4",
  "key35": "3ogqDSonpmhYAx1xLNSP9Gz1qUG593sjSeYrVr1KGUWxKihHE6yo1NF4JL1EedFs15Z4h87ZQFwPigTtHkkbKuoK",
  "key36": "22y7C6HdVtNoe45uiZHgjrj375yLx1NLmUrtanXHcVfUnmd2fYe7EfrCNNVX8M363y2Mk2PwU8aRY6vReqTnnehB",
  "key37": "2hD8mzrvdBzvLDLMNPpBNMVCLQUarqC7ZD3g9Cd9hoCpF5NZfPR2hAdCfTBEiKWUeTkF1oPfpKcDnnViPxkfJqVh",
  "key38": "4Hdc4ZcemhVgJVg4UHQ7XepKfQLQZGtfUDZwuAswigDdcDCNrcEFW86UXvbkJtJLQ35GXjdEHdUKredq1wAd89yc",
  "key39": "4qNmvGXdAXBSFB1osxZMRzo9pLqbSA6UHTjXx8uLAUUmwSMZZZe25k1BVeH7z1kd3uD63tmcVBUsWAqRHmgXc7dT",
  "key40": "5WBvbnKPrCYB7Xahx4j59FngVrYFyJm3FrHqhMgZciM9A6gBPFNusYyQwG4fJzHtJGXEPmv4Rx7E6aH8PT538mCe",
  "key41": "4zndy3DDQWUVGcXfXSS612d6LPGkzSTNqMFznmdL136D2jE3XbZxwXmpMM1XD3MTtb5AxkWUzDjeeXQ6jh8GvtdW",
  "key42": "2MxYaRLXXaRbq5mbvHKo1rr5BPafpsRTGyuMNLGm4tkHYackvAiab8sc2K9MF6dkv3S2XMDk9KKXLtjKeSi3gADY"
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
