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
    "sKTRtpj9zqsKYi8T2fKdBbY245uGumq9HoZKo4UiqRnTwvgDa6Jpg5qLaWXsHDJpt2xEJjsS82XXg4nTR3ZKd2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KQ7GbTEyBu2arTAwLUz14kwim7BWDzm6HD3no9fh7ZbtMh3ku9QubRhsSrr9TN9DR8H2oYh23RxNEufbC9Pgoor",
  "key1": "4FpVNSSH8DcFvN3k6ixDoM7xfqyyRyRxAREKeqdyNYeQHXePgcow31ypJfiwR9aafdyPS4z5EXPho54wpGGeP7XZ",
  "key2": "54YY4mjLjRDBfztAfie4thRzDAiM8uBNLYcuhh45TryzjK63TfyQzoUwsu85iZ4QLd4VAdQbYP9U4SZLAbcDGawy",
  "key3": "Cm15cyCYwKtJfEyuvJxv3VxpiXkYt7QLHsMj8i4uFmmAbPhzoZAsnei7fHaGhfimDhbbpbBywx6T5pyuKih64xR",
  "key4": "czE7KdawTUEDEM9evrXp1PeBbGU6Bgc8GRRDQyfnPNTpGQm1KqUg45v3kVXXXDyh2rjUDfeHBK5jHNui3pfwh6Y",
  "key5": "4QD2Hgvm7V4P8aG8E2iJ5ZH9HusEK3kp5cFKh1qNv8FaoAfWtjmp1rgJsN72URyoRKSRdtB7gbarPYKgFnUuyqTy",
  "key6": "56QbKYwacsMVLAJ8yRt1KnSoQjWcdthHY8mZZEV179p8uBWj6k3HmdgCw5tHhR4gfrRq8d3Jcxf6fEbFKS45bNBd",
  "key7": "zNmnBJefLGaSdwmabaTdc4rd5TNFcZSPoSFSh3tqpyzbVGecL9UTFFym3e7cjxE9eTxvAJEKVoAyo65VHoWPh6y",
  "key8": "46jhDnW1DCrd8HsRtSfQxzSVT4cdBBhkF6iiyQmtrC7wj8fAW2gaj5tmemT7LnPz8bGBgfRttjiYXqg6xnXrAnQv",
  "key9": "bRRszcUqWvh6hw7Hrv9AG99KQaSNHfkcQSC1zpjVUMJaUGJhk7C1e4ZeVt8ZXiE2QiDmc5PKph6iGjhEXDujafc",
  "key10": "56Mxz3cYLCoLGTMEhzeaNYBPJUHdYpe5B9d8a1TJvEzJbX9ZAfRT9bmXt1mKf55Tfpw8owLh2bu46Xd5x3oERtiF",
  "key11": "4LRy3Qr7NFptwcZy3bCSWXc7vD3ALzjpC7CvBMgqchjrEEFdHs23e372XqQiCJD5UJHddM1war9dKni6V2VsB36k",
  "key12": "3hadFmSJCLk2eM6mYHw8NPi4NRMpQg49WampMH5xPoH1sDMsYqHzzq7kC83MHrJZHfcBYUk6mKoCkHVhgDjNXA1Y",
  "key13": "4jZR3Tb8LX4X3wYRbATT7JimvBnXvf4LW6MxqBSDLoKmD51au6sNiQENDpQfEvT62W2TCUzWtmAHJaSEJ4YneuSZ",
  "key14": "31pr4yWyQ1vMAuMjppcV1aM98TNAzEX7vMjNnjuiZ769urtgb5u4zqLMZH89wzrrKD5m7xWAAPrr8y8XEcoL5XMZ",
  "key15": "h6fDuzZHdGo93yyV4HXW6wo3ivpFpRndiuXNDboWd7SZ1EsBbHVLjJj4WiMTo7roDGQnnYiu8UJoWurmyXV5jxT",
  "key16": "n4Mjju58Hg4LVSPnhggn1BGpeV9ipnYK2goRaaJ7czvGhBnEzwZ5c8F6dokUeUy1Jrcom7MA88YUHtg1dU1Fbhq",
  "key17": "tZWpMY6ieVUm8jLbxjQHQRtRSL2fsrDnujVnbks8g4MoXgeTRxe31WBo281RURLpFRneZTKzGRicRPWfnhYZbp6",
  "key18": "3Q3f8R4unFs97mB3f3qSkPB2YeWNDs1QcY51mYGingH2ZaQBsmiXSuCHEQ8HLt2DJk8VLit4YAyUZ5xjDUqLGwnf",
  "key19": "2ezWWRW7sV4HiBzPsGov325h4SpkN3jaCbqHowaXmHQXbWNjW7Bn2MNJq79SVZiFoBjSHKGrMnYDXnpMe17YhioT",
  "key20": "3jVmt21hRQCHrrLWRyu6RjkGRAmVRQp6k6zFRrGPcrPrRupxzFj4WLYa3nHira5x8KJgZeF6K4nf6aDQmaYm7JwA",
  "key21": "reKzn3URnSeyzyQubtZsQtU8ZLruRsARkF6hyrTUghupfJK4fUtvREzXFVSQieBmTckqQ84rdt2iHujRYuRwtjg",
  "key22": "59DoXdXnqKANVg6z2a5q7fB7U16v2YYk8ydf1pjMd6F5My8s58mdS1aqfq5YHNTWra1oKketbR3tHZgESLZHYVcY",
  "key23": "4EkxzSEZtWD8HgjNwd27H69K18gyrph9jui4i1Z2CsyWXbUURVdCgjqbwtGkkKBXYsyCQZ4NXcXt3BASZsCSznT7",
  "key24": "2YymfcJiiyeA3K9CiXDwJAhzHHJ9nt29bkE7avJuEuTdTkpwYQiWCbcLkgqqi2yBAQo4Sbd9145NVZEFDHPf7KUv",
  "key25": "5XtiP5gWNZK3tr95W3wupXnVxWXH4g49bkDAdrLgkbwZChepXyu3FFzCkRSP9DT9dZ8VfGtEpu8uTTryREQwd6rH",
  "key26": "4MeooWYEcYDBdiD4YpvgPYiainXSxUnpDwwQmaSSf5ofTRssLK5yWiXDhxFD3j5iGDzZUWdKwysn6nPX7FJUnXWv",
  "key27": "KpLY4ojmaEAq7iNWmStV2cBb6kSRuUW4hxfaaqKQfLTyQJzeZ3TqHTuueWJozXAJztf66Fn8Nt59SXfgmZGeMRN",
  "key28": "5R4JdpS6gkgNhnEnHtpcXgpMXuaWKHHt4rgAq8bTSRyxZQqkKmbdoVCkYJSn1Fp8bsa58MVsygmtxPx4HbHruwVk",
  "key29": "49vbWkAovH7XcxcyLB5BjFA4kzQTZhZRzT9Xqh3SJTuNqvv9b5PXevsKXWkEy5g8jdEQi2z7fNp3EgP4RhMP6H51",
  "key30": "3atxG2MvyyxMZS3bhWzJhkTBRdpTjreVP5uR7LJoA8NioLyPLTEmR8WirXTj33WnuKEqi7NbQzHy6FgqKy4WFcbJ",
  "key31": "573TMEvjbFrWtcGRSSLnXKBKj51huLHLawGcCfx5yE5483UKd1RL4EcELfA8jNdNvzLbLifqAyh62GyRfZezjroB",
  "key32": "4j4VhfLhCDux4ubwHS991L4JWPcHG7UGHMw37AUAikdvPoUDdo2mUr9EeXVGocQ2rAdoqQc81rGGPp5F18hcQs1f",
  "key33": "41A4sQtfuMBxLt1as6Pg2YiUPSsYwZRTkMqvywjRVHpzZE4yXtVywUmB68awEqg5Kd5FR7jHwLNiRnUcUMwWw6vk",
  "key34": "5DGy1NhM97rqjwDdwHHNRWpgwV2aL3HZiyW3fLZrNTdTtFhuDRfHunXJYuAQmjHSZNGYkcDB1xbnH8iZp8DGP2Cd",
  "key35": "4nKeRZHTU8yiNHr2NVt9T4eZxarjGd9GrQsEGUq67dRg1hhmqpHhCNVBJBkBvdNMU8mkKAZYCMfy5rEwo1Xqvvck",
  "key36": "4STDQ3Q4NVxj49iyHFNvvVDr9Kys6EGHfmzuF9kbKSMVoxVEAjxmJ6bfPj6up9ewsWTzKnY2onqgG3SAFD1V5u4r"
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
