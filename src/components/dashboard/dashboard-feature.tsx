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
    "3NC4mdCBwNVNvBMD3TqRopmo63mWfcHVjEzBGtwAJzu3EFpQx31quNm1pPQXRcWDty198RmWmH4h9rntwwjoSmvF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZDG4GjgtAr4uq67e1XF7Pmy65Nu93Z7KEvBMGXBP3Vunvo3nB1fL1obJHYq3HVEw5pRwUs7zEvqTu65kWyzQkSq",
  "key1": "4Fc3NCiuhcLVwjQKqVjQcbzqBVZW2DYkWEst9xM9k4m6ZHzEp1EWmAAAX2uyZR8aGJ7DiuXxXPbXTJZrgH4okbp2",
  "key2": "BizvAcPs9TLaKZXH5rQ58PaLpJWFaJAvLYp4ayarq6muyzqTQfWAvRR5zDnQhyDGZcgXjBhNrxWoxs4HcAhHDN6",
  "key3": "5ivqTnE8hdghsK5Qq6XEcwyeZnp6xKUZvbfg785JTZ7U8MALhfHjurGXHhjRzFS8377aJRxwweWbgBgVX4Dvu9Af",
  "key4": "3QerRbNeKRbRjjwNUgxSUEhTTbDJ47ge5oSDuxfUDkDAv7ZGpyURF74HWLupNArnsgt8SWbe8u9dC32rC6Lu3rFm",
  "key5": "4jz5sFntGqQPk6H3jRY5hbJgbZZKVesBr21x1a7uTxuD7y3csPJmVC1nvxFwDn6rJfzCq32y5cq5fwXbif9zG5Ks",
  "key6": "E4RBzu8eDMB9VXpucG7jixs1vv1Yp8jXYdqbmjrkHRXDNM6rovfV9ZmzPgL9fqFDs1nk2Tkw64kVVsrSDzNKxrU",
  "key7": "3XCo7TCZaJ6tX1tdq18HeWxpSWEtisTwAthGqFARXjNbzjqgnMvhfX4bFLsTMHLWUCSSrSAUZQJxC6PuwXDVd5DN",
  "key8": "39Amvi7wnz9wJFNCCqYVWL4XuRzjUH8vddNuUeC5tS4UjT4Pr4GC5pBU74ZvRoGk9ijVafc1hAi9wjqpyBMxNhPb",
  "key9": "MXt9phUgntdd4Q7pQLrG7RWJcg2X9g98bFbGjFTxPYpRNaU9d5AKhn2VduDuiUKCYWdRAUU3oSpTiekQCEp7iuq",
  "key10": "2vyENYSmwToUsYUEu7pgQK8DQ6bd5iyf5JRWgv6xzRBNXCA1dvcmgsF88q2cJZqM3LBEe9pvS2ZxMeh7r4RkTRbr",
  "key11": "B9LYp5JWLhWEACZniXJ5GRBNCbVytFv8Tt4aikXiWMgLjXtjHnvFUXg66bo1TF77mim7nn227MEPEoLgmTLnESz",
  "key12": "66GAf4XDAnAnfVR9MvFJY3rUV8yc9GLLvoLkAJ59UySQQRLVnYmtM5CE1w5ZQ3wBfVuaqsmLmkXg7KhEgv4rv3go",
  "key13": "2TZBDodfeNxvuYFLpFxrEGjgMY37YJdak5pfLxr6sqemBPJmUanBCv6zN9MWKgQc3mTK6xkBXyfgiEAR3tvPSf2F",
  "key14": "298TU5gD9VDuURVzjB5nFmLaSfYKpLQxzjeBSinBtA3ULhrU699Bg5kZvxf3K5aX4GpeonJhii96SRFb6Vg1cLzu",
  "key15": "4iHNoVHVddUP43bE61QgwZKeS6kuVHQ2pmvAmrwBVPoV57q9mR5AYNxrob35igK5RQsgNszjdLE2RMxcQvhYn54S",
  "key16": "5YPZ831Q3yQsKQYnvSk8QxWFxcnS1kDPtCCBzLbTgcEhfrzgv8GXenX17JUPyDjXAKhEQY6WheQ2ELqfcPpyPUpc",
  "key17": "5eqTZCT1M4FNdcVsykyEJYhNp4rpBRHrhvJytxG8XPGnfnB3DHJXpWHZr4rmn13Pm6PA5fieDrAqPfLrkuwrZ3hB",
  "key18": "2gYSq8BXz9AvFfnomqhuFabJC4ypwmavGPQfCNwWG6qsKtFg2HVXVUJbiEyJCggVmCKDimCCowM9PNHS1RkbnJJ8",
  "key19": "5kn6HUDM35fuoPHeGZ6t6DFhwnAbsEjbjwC45rQE4PTZt4a6KG3MDndfE3Y1nsdiRF6WM32tLe3XUWsdF6aDMYz7",
  "key20": "4kVcoGAWAWDrjRtCBoTUcSnvop1qfysYNpL86B1JGVwRxuaS2pT6khnZDpBXo1NRBoNC3keB1WL1WxvJvCtedT92",
  "key21": "2fbmcSHAbW56Q7VUZfeysHqRpWdCnRiDQPwYKU2dRyLp2j4DEFrJH6YB33nTQJfnoeaBc5nRrKAHMLGCYLAAubWR",
  "key22": "MyXNYRQ2wGqGVyeR35WA52WEmg3ZjXPbvWTnUjV2xm9Qsn59kRyAk72cp3qJAthAw4pGd2Cmhktvv3WpD5sGwCD",
  "key23": "3DwMtMPLfE8GkzgtHrkBBJGBQ4MJd2WBjjKcE6wqAmLrH6HDAC1WHUtgnaW54p54tYZmntQDPxwADpqYF3puYtP8",
  "key24": "A1LJXBEUasUrNQFMi8qheAbzfK6ahWfsn4ReRFpUQsC4P5rL6wBxf4CKmJv6My4qHA1WFbaM4aztR3xVHMwxoCM",
  "key25": "5LSaitJDH7cgizcQGKQ1tBX4AJWSgocxpc1sesGBTMhMhKX5NnxANSj7M61FZjkYXwNQZ7R89eifRSM1iVw8TPAo",
  "key26": "4ZSTKwencaaBXYRBLmB1Ks43upd32H47jxwFRzySzTGHPGRJfaYxTihi2vRENqyWfuafdz46eg95vi4gktwMErmc",
  "key27": "2CZ4SPToF4meCufb28Bz3CdYs8a4uXihSJh82FkP2FAzo2EnFzFmdQtaHNNnBTcvYD3Arc7QQbeBu6LuhbMXYHqZ",
  "key28": "4RX9fwHBrXdMkZaqt4NZKPTqyPJSWruK3Bs5qRiK5EsZSQj7NN9LgcZhvSjptfAPBhRDYUUJznE2ZQEDonU7ioH4",
  "key29": "3eQKJbyRgVvbVnN3bSbXPtmmFHGUEB5NLWyt2CNyboBWVEqDeujiZAuLCzzYnU33QssBNfZDsWFgvKyWk9YWBkdS",
  "key30": "4MtQUwF7o3pyczkRCDjH9yzucgsAGeNRfMCvimoJFpkuH41KSn11MhKTasmarJ2a4rVV2H6iugrU7EQLYB3qSmXJ",
  "key31": "5D8CadHfYMBsRM55rvhtYh4iRN3epZGcAZuB3puwBxjb2Qirws9ZLr7NYc3GxZWNvUZ4qU5Ts6mWsuyDP43H87kQ",
  "key32": "u4xJgQf1A69NatBDLnKbK4dNsWpnbGa5qyhxWoSDWba8BXzgAj1sacvAZSrbcoajKUtwAPDGacDpgf4kb18FHSe",
  "key33": "5d7XBpCqvQngVonuJPerQsHXkCGRsV4rJvdYcnGMzz4sTrTV4BFNcuzrKDD4UM5Aj7kvw8Lp5qUrVV42MY1fUKAJ",
  "key34": "53AWPX3zjB5saHWtHPdXh7DcFj2d2efrqva41h6eyVnQeAw9UJUtxHSZjfAcVWSXwnveP69enWUhZ51r8iL4767P",
  "key35": "2KGmBcrU35muVSscRWVUeLr1X6ARFeEajx9Bwwwfh2jQbvK5H4x1kxWEBP7eG8pEwsGBrzWdEvdRGEjvKbcp55EC",
  "key36": "2rj2jyZnpN5QYqBCgzeutPTeqvaD99UMNbtHUpwDRa8stY12fJt324CjGVdz9h3hKTMb43PFzHHsCqztpa9P8n7V",
  "key37": "3rNS6kyQJkewLJTAJ2mx1fuVXbPGKMvdFVqmqZq9XYjKzf37nyECvM69rFuAGs8WgMxkWjUudwrcYZSYMcr2woHo",
  "key38": "2uaDPNwYAbtgRPuqCmAdqf8Rb4gDfeh8U4mN8z7CKehdxri4aUirUJPEMDf9NcWwe8XVxsYtuXxuYcRYugPWksWJ"
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
