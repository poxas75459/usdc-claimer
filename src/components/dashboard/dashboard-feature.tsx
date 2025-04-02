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
    "FBQ9sLh5bpgzBGXbZnMo2QKX4VgzHDAgrzP1t85ie5iFyoZUu1KJvjcfCJPpN9W7mjcGSZvTikmTjFYi1UiJAAE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qcrfu2RM1eJb7vCwg9HhSUzZ1bkCjnHHivjxES3kfMzyLp6WhT21tAiHzcR9dArx3vCdf52UprmxcLuVeH8HdzF",
  "key1": "3RFcRYcTTYRdypPq8BWpBcKmEK371gsEVLsxt6vYVTnmXMJKrUrWnDDGtDtHdWfs5YtFzvPoPaBpS4DJEX18Fy9W",
  "key2": "5pHZjoGGjLscgBWJrfF1F5mvhBLgwa8RHoX9Q2HPBBsRv74z7hh7tKNQbTYzDR6a7yFqA3X7QKmEgGMbinGURkrP",
  "key3": "8qeXj6xxp4snxucf9XVt5xh1pmohorJFeWYUUkWMdjicuJRK4YrPRoCSddijGMHb1shuLnQ751VK4zEHGEXivCb",
  "key4": "L3DPufYJhsTxpgfebJMmtLfpQScMAbQatx4uGuQX3K6zgJbLuBJwGUVMMVBrAoEAPhwCr6VZeAfjTKEwcFQ1hGW",
  "key5": "2dQBjZAXmQETp5cdsNFPWqD1BndUNnXnt2wYToR5WKGpvZha6tP9KdNoUAFjpC8DpxheJeEdyXcVaxDemSQZ6iPN",
  "key6": "58gRUrqQoCsCysMeL94pgf7cxXs9MJMA4K4SQ8PmTC1FAWfBjKHRHgMPEEtiPUuFQWmQnLjvzMRaMRPkrKXH9Tu",
  "key7": "6sE15q1HLY81xaAZfifzdqtNPsA16T5n9Z4iH6mDkYm3tzeMj6tnHCHtjoHuFPAd3vPGoBw4ivoUrfkZNVzpii9",
  "key8": "66ciky133jentSGh9QuFx7sYnA2YYVbFvN4FEKygaSV1iDDWDJ9n5QWW7G7yqWH4Ufm2yH7APegYrfwDLcE4EyoR",
  "key9": "4BRMUNGT7qW94eCa2PNpY8qHcbnaub9VCgngtHqyBFnZHW6td3D92oJcoXeuzKjBXGjaFT6KjrPMogGicfziFCnf",
  "key10": "2DtE2iJgsrZJMVswxGaFmgKM8DsfucojkSmMcLePUDiqFiXV9EKfDBKr3XiMqcCiKTeFqK3bhWj4yzm3pbmGeSpC",
  "key11": "3CN6vYRKqgZ7Xyv8AeVgKLP5qgkAQpdweLb2zdzEq3MfYncV3bisMJWm8Xdc1rGqF7gF5dVsJfQEqznV2Cn5qen2",
  "key12": "53w4nXrtSU7uyXQnDi3Vd1dBkwbuA7jBqwCQuSyWy1PFUFZnbmVRD4cNK1gw7RqXPFcdqpKbnbXpaVJnFAEPu9Ev",
  "key13": "xU1TkTUKt3XtkNdiSpsaJ8Ev9ZJWde1tV4TLjt7s7qWGCJ6RRmGGCfeZr1wPmegMyNCFpUYWTetJg6m1UssgYve",
  "key14": "4G3WbnkqTbUXZ7tL44mWEuf9gJKJy5mfYoDLmeKRxPaMpFu2EHtjGenGtQSsqutKqSWmG4kA2DdYo3VnQtmDbbCc",
  "key15": "2PfvFiHxoKVDjpb5WTcnrwrNMHajRAj2Sh7aP3CACoe5fDmiqHFHyHQAQWiqeu5UTzHZEoBFLj2Ht7M8KVvTY84a",
  "key16": "2h225Wyf1xdvXhq4zjnYSh9usqavVej1LDu3rLq7tefuACFMaLUS682wTCEhFRLvVHqawFfJRAFsV5dz3gppvMXv",
  "key17": "3pVoukrN6r3t7vtTamZPjiLaUm29UJ1tu7P9T9GPF1sTdMZX1UbUG1r4q2e3VVkMEPEYXnsgdfvA4DxueBusA5MH",
  "key18": "5Ni7cvTGQPo8D4Rux2RuwZ2odmgzLASa1rLtq4PBeaWhSoaXKVQtC9Nk1B4YNSDWty5ufxJkr3c3YcAowwUVXqTn",
  "key19": "Eyq4Lg4ZJ4DrnWYwDbn3cdTEWmwRMsmuCwFDWiZedSZeAQereXLiQzn44QeecuAghy2mQbQMN1yFcQ81D3nhGR8",
  "key20": "2PXb912gRqJAKsCsZmZkVSANLZmhjwNTY5ZPRRkQWzs5FGKfZ77A16yhRyEWe9MMWtCANFwEcSdvFPdLor7SKy45",
  "key21": "ppztEB1uj9JRDrEhvemi9kauRF7e4bRKAKcZZHNGYFsaftVaQqDHgBpEH5RQRmPRadNRTCqV4m2xQeQdM93uP8t",
  "key22": "5Zh6NNAFw6nRMD71br4hQyTjzV3mRZepNxMzy1mBkYyWkzTeiTwHmWWVPfbLcBtiXu78nYrU2kxeKFGpj9o8SRu3",
  "key23": "3XQFXkgcU7nA6TgR1Q4hRKT9aV2Fwj7xtH98nkJdwBtMW3psNfx3Z41sqiVWGd4TDcepRvpJSBEn7wwZPoxYpiDx",
  "key24": "AyBwQMvpFbQhRmtvEJhJNSQYo7g6QmYUpFje5Grr6MXJw59jXWSYHJy2Nr6ZRnu4K9h7u3jZmyfPr2UYKsU4tFV",
  "key25": "2L67CiAWEAe3YKo1h465Lhht1iAF4BFJCcv7jXKQsMx69gQdnD79yv4xAp1WZuDyuchXDFw94eyZR2Br6hKDZB3T",
  "key26": "2cJKJ8ng8pPHz9sTfWzd7394KF6KZnXRZuf7G2J66bqABNkzNBKg8C4YXGQfzGAkjny2HQktc36i5mqNch7GF1QY",
  "key27": "2PShDNsJ1yVkj1AJF4WK5Z94JzrMuDn1GQGn7tnXMrbsqDvqaXYroA3Nw1vKyBLnmXDu4mggXTrpYe7ouJ136g5U",
  "key28": "383Ehb4CxjDU3jDcHB4DD1kQJnz14JksoM99Yipj4bfBvE3YwsXJLzwqEMo2XjZY3zewp5m1KqriwZCUoDcEde2r",
  "key29": "3egxixEpLRvjPPXBntQd7oc7sUsvFRw3bwdzoyK8qvF8vka2t94Bbhbq5AJMCtESW7VMjn6XyYF8Ptzj5R5QzRH2",
  "key30": "5nNp2FEdpwDBQxhAY3b4zSXJni1a6Q4QSp62xjkCDvbYT5QTB5XVe5BfPRA4xVYrA69rZ1gAGHaUSt7HCSMpxtCL"
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
