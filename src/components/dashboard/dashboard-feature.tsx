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
    "fqgmZaYnQfYy62C4f8g8TWUod5LAvbYcYr9hmTk7HqbN6f2yH4F8rWAUApbz1MhRKCSPoa7ds7EqaHEz74abba7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eCdMM5z2WwAP6EgRMVMdZP6vid3tzUiHnnLUNb4oPjnqELH628PmG9jkXLxYyt8AbYn7JYMf1ejTyde5KbANtKp",
  "key1": "62bwM35YMXS531gjkdvxeNKZZCobqGN2h8HhusQMPYEVFA4t1Si3Br7j11eFhr5Kog39y6Q5d4iCAQFArUufdHV6",
  "key2": "5ZRZsL6pUA44Hmy58rqBDsdZHEp6NLqBY8qNLjc5vitBPVPpRb2zpaFesgNwuwUTcJscq9ubFke9uDodvubQ8tV9",
  "key3": "JRL3JzmDDJN6eND4AuQxcBdMtma9NQaEphXK3ZAREBsDP9pv4F46gk2giWaEArhgiqaYr387w3J4a24eCYpsBMW",
  "key4": "58yZQxPwXBYc4vRy1cRGpq5TASxqupWSAHnj3ZnWuzKJsMeHwAk3BQpUyUgkunTP5dCvLRRWtXvWNA3DgGRsUbkp",
  "key5": "51g1zVdrTUL86noty6DfcNZZeWQyfUotBwgSNpwyBki9KAsNnCJcpVYM7mBf2K29cFsckMnZXNBFmgVf4NakKTeL",
  "key6": "5dk8AQFxgB5ohoN1fdUwgNUYQWpyvhWZhYavSqNs5GhPi5FEDHsggaURoyuGaqV7gXuq3x9jzq7tPHETm2x4KenR",
  "key7": "59DXoiQRzm3NwVK952fDXcfJX8Ro9jb5WJ4x8SMJUcphhEjQi41R3B5AT9qTknM8h3qjLi3tV6SqqcdYchHYnyiw",
  "key8": "eoSGpB3AjjMCVtpAXbzWhuEuUR8j4E72ZZiwhGvHuvebG6aognCysPejxGu8v3RPgjGMMrPVb5F1Qd1Nxf21XMb",
  "key9": "5Z5pWMFyPHFp8jcZcitqRhJJU2k7WVewFvwxgXAdA5UrWePDyR5sBeDSb1ZhKXQd5dMmVtdCHLpyLhAjNDePysWE",
  "key10": "tyr4f6WYwnB9DNhK1VGJSgBcWtTzkKoejkWTzQ3R3yzv8YiDr4fyWHii5aDfVusGCbxHX1xzGEtBejHEMQTc9kZ",
  "key11": "48jk7a7omk3dp5UTc6yAZf3atFiCSpAgkes4ukrYxEBMyqPd3m2Z3jCiSAUkWLPUQwDxhwPJFPK4HKEME8sJXecY",
  "key12": "2ehs1yJfeziFVkQbZVvKevpX7JbyEpVhX84urC2LdcmdEYNbvap9RefiuWpiFbUF9DnvzEayWu9ZHMxrkA5rHffB",
  "key13": "4d85VVKpNzKKarC9PKTPATLojies3AsGzVkffKBcNWFLEe8j9iocSiCKYCdiU92J4Hq3omoFNs4kSGg33ULt9Fbs",
  "key14": "2kgYdgAXVgRGtXhNY6p15LT63vn398mKVFzYzYp3DVNsrYSUdxWCGwAvkLNnvTQkJrwXTNRhnWXxfR5i6ATE5p32",
  "key15": "3vTwi6Xu5Jd27e9gvbMpDo4MEixDYqnmq72QPgUaM6CBCWMcqmK1EDYTwLV8VvFyKb47VTM8XMBTY3TFvUy1Zm2f",
  "key16": "2NhbcL6PVAn7BNtiDUbZKLyWMwrds15jPSt5k9GWV5uCuz5EeEcpTV1xhMpYsM3iFB89LMyuTHS9RCct8HTSn1es",
  "key17": "5CgPXP4wRMwrRzPuVP9BiAyXupdWuMhMxYhGTEinwhCnZCu3nDaDGJXgHSYP6Ksom2jh2w95DACb4A2yhVnhHCwV",
  "key18": "2w7c7brmFCU9h3zqAC71Koe7n9xrSAQYrf57AQeBwVFTezgJpF68rSdzjCtmebPQwv3ejbtU9q4BnsUuRAMqxyvU",
  "key19": "58EJdJ6khC4xaKsQ7WMbPQwC3sdeqYxKVEaPQFXrg91XTtQDxKS6icAWmwSdjB5AYnJcXZmTcnk38Rfv1iYkXCTb",
  "key20": "Pxs1VoK2jQeB4fUc147eP54fgrzw6Tz1K1X1k5SJhQn68bQVwztFvJNqVJ4pu4YVePDXipJ8YCan6Vq74EsiwUa",
  "key21": "2x1wFidW4vVfYYMzt8d2ZKqjnZB7nDuTEvgDayPbNyJGu9ktqfea7bip7VNPr8XAyDhPWswgKWQMGjkficJCt7bL",
  "key22": "4djspd9naaNCwuu4hdEA2sjWaUJ3TjjuMLRStao3Ez2iUwcQ31kf7VcUx4Lw4jHNNshuDfPrK2UDkaj2MkGhTX48",
  "key23": "2nkzZY5brPYQZnvKJJxggdPMin6VukpRoGGGjUbgN5LWJ4c2b6w7cPBq6s7VcTpDjwyc39AgZF2fdRwFfrEWfsLM",
  "key24": "2YPvzPv9xi5CwgPeYRLoWQqGUYwdBkioTZYuv7cYa7VqeVhVNBveJ9k4paS5AbH2dfjDMsKE2nLpHSuYZehGmJL5",
  "key25": "TMLzQsyTrhmC5Ydc7Fwoy6ewPoxbMBLBR7qc4FbKtRTNudgD4FsGmZEk2N9oypoaS9uj1uc9pTimjk8QGin1jFr",
  "key26": "5nDUDiEq62FKAqAnuXBUDviUMdPpoKGntHCaZuYDu6xBEwXBwpc8oj2Wdzqh8wmzpaYArQmq8oNxPptFBpskzUCk",
  "key27": "5sYqVKuE5r9ggyobNaKYn3bowDZvPo3tUDUbUTS2dYtwfrN5cVGz5sYEeWi7wkKh1LV18sD4xRPDjva3SXUtZKzq",
  "key28": "5nw3Br4KFXKzQ5RwFyKzfquk73causs8khtBVLCg6GwEFXi7HtmLGNoy7ZKbBxVtQvhtssAmP1iPNy6eUMYcaDuA",
  "key29": "4WCdaRaAvaMVqU8pyeKdVix4rRozpYPptagNAu1DVNv7pxMH1u5f31Gmc62zsux3BPkwkNzRMtTsuK5WAK2FvnTP",
  "key30": "5yiKqAqssQjzhYcdjeJbPsxqLMBf7Doj4tiEJPho1MYJTrYKLaxFvh1tqHzrxEbL7jzS4gWW3hPr5pxrcz3dpNVK",
  "key31": "2rBc4tYGAYDg6VpdexkioVYi4ABZKnzip9yZ2hjW4A9C9feeG7vNG8EdqfePSnt9pGikgeJBtA9jDfcSNmU1SjLU",
  "key32": "5DmCMmMhSGgiUi1ZayFuSwDYUmqx2ymmYpymvbn71KhsnrrpBqo8SuwMLXEysSKYLNa9f6y9A6odjfQjEr29iUSH",
  "key33": "5zUxfRiW9hSqE2yteoWfpYFo1douKy3EWhQyFm1bAEwm2F5Q3fQ2PJ4u9jsSTQ5nniCqkfv9i5zzKSQY9nRTAHj5",
  "key34": "3cYtoAmw1jdcnMkCuQWMQKS7Ypk4C6WL8yLpGcuNF2gaiSeWjFYjgEvEFk9DhRKsZnLCmSqenv7MP9P4mZq9HEyq",
  "key35": "2TTUVxTGdaMzknrWhTjYkG6knp4RpjmNWi49bt3uQH6LcyhYJXXwnh8GCHu9XSuH25d9AXAPyAsbovtkFkdPZbH3",
  "key36": "4tz3CGMG1d34aXv3aJChatQCdY6c1n4d7asZXAqpaAayfvKTVzC6USLDyEFD7eH3YtDFLN6CG8N9msmaLMreig8",
  "key37": "3FjWxxk4R3QFKwar8YV8eTTMtFQ2ditKV8wTXXAtx82epXfGYiM2h7q4z4igXGxjTJaaNQ2BNN7NqYQe9Q9h9CRm",
  "key38": "3ruLYoLFGx2TZVZNsL9DZq6wTeNJNL59Chf2VE3dzwEc8xGGxeKTtt7rotxsPLGXocUDZzFPJJvycxaVcAPLsKng",
  "key39": "4dyTfYYTMKjD6pEEZv2wPWhdagn6TNfRrEowEEqncW5fjQVjeVtaUwY9XaiyUwS9Msvr2NiSouhgnfTq9hcKDp4b",
  "key40": "pHFZdT5uBMgQDMk1fdaMQK8E33nTwbrmDJpFUdv6Sv27jQ87w5qk7Ag5Ei5FAkUYXft9EBcd3b3riwXJXGpTEgZ",
  "key41": "2ZbaLPEUpw9wXTzTvXZRqgvAgbc8QuY3mjxkPwv1vChSXVLCHoKBLZjLJYadzZ6hzJTw6NwGbtiq6d2nTFScqsNQ",
  "key42": "3zU6y7K3nosKnpCbgubQnRr2f8njxMPHXUtbnZKKUoak6y72DrQ9xR2ZpRCQedo1v7wpgpeQfnCTAHYfkoDaT8Ng",
  "key43": "4ZerybbuhErzoEQEMDECbP9hkFP45sD3tZff7wShS5U2J57yVpYGpd77cZfZjUV7MNvxhKeCfYCdj2xDoEsZeZow",
  "key44": "2CXTcRLmWJU2qDT7cNzPT1rCUgVdFw49YTtN7vraaERLJJANwf8dajFM7GdEMgo7CwqdUAPDLgKgTiJcnhKEmVFi"
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
