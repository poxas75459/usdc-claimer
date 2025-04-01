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
    "2o2ptXoPqDp6sETPPuKBQVb1gw6GMcPip4sC1FA2KmmUY7asJTPcKEAVSPxCZZPYxCGFSRcfcKLsihp4WcJ8KML8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25ggW4wazCCH9YN55tYjDguhvAsNseV7ApBn9tF7H5jKyyJKjbSQNUeG7cU3A2ckg9UNnn2nnDERyFLR2KdCWnkL",
  "key1": "Uv9TN23pvpuCviN1X9a8rWvnMpPjuwZcVWR2McUEcbYiRMtnVvr7yqPsrgZLEh5uXEQ5cMeh8Q9N3yMRwoBRiKp",
  "key2": "2eGd2Qya6gjec2bxXetr2Br8XxftWH4LhRKK4r8xZ21XMJuFWnGopN9L2S59gyb7jafoFPKCGDneWG7Bf7zg9RMv",
  "key3": "nvFtunP2y4hpT7hPBxFEEE9svePFh8CwkEtmg2qDrAfqgtoJJ9nJZWZbE6UjgFSMZUSbbAY7aFXRSdT8VdZog9R",
  "key4": "154APr4T5G9TJxHyYFSELTt17APVJnpkvwijh3znjfHamG8YXsTrciqULbXRfEet16vqFRnV77QLsfLTWMx2yDN",
  "key5": "3KmgQDtAgT4rGzYAfhMipTU16ZHLU9mBGtXKYWBK91vDCoQ6xQm7WQxPetgrQ7xwcQBn9cyVcosJXGGEsj3xWEFH",
  "key6": "8QqBg4tpcuk1FgaFNfZUTQicS5MwyD6DdgCySKv134tMt2Qdt9dqBypnk66AXDQoqpXf5iwLXjVV1HMhrDGg3d4",
  "key7": "X9fBGN2AtojKG3yND1pnHYJFwwTKzVAWfEPNmKkg9Gi3M8iecaRJjUc8R77xc4Ryy5KAWMu2937izacUqmqB2y8",
  "key8": "6n4xesKsMgp9ZbixxkmngmRsdFrpi4sdbv5G7NxA2sKzHQJBgFiaRBUAFCT69eLCTH95jpMseW1X8vrmkzKGBoK",
  "key9": "yEzHPaec3x6zQgESrg7w14p63phzHAiLz6HPemPLyjknxKFxBrHtMewE2nfkHNVMfChN59ekEoeeGdCxBMm3oaJ",
  "key10": "36RRHvRjAinekB53vk2Sa7VWYooxbZzSaPQ6SVHhh8Pfc8xBi3PWeBJJ5wEr3yX8JUjKa7xcb4CWwJzHXKCdcguD",
  "key11": "4y4caDisEE1np4YNdb5FkKUTk4y7rJLrcnkk5qxRFcordBzmodEE1DkruiAJMefbUFS5pnuhedWtntgkXekzRMv2",
  "key12": "ejzGjy7UBJLvEbD3PKZZDNGqEauZYrH6ePHjMMkw1wNkyiape8Rbpr2AjmYW6rGiPA8KNxGdk2iC8avdad1edMB",
  "key13": "57EvwWmBJWapN3a7Jto793gL9vsMkdhJrU33nLrgw8WiqPnCGoshvgHhH8URyjLWHpcA6pKrYdo4goRB7WxdUAvg",
  "key14": "Q4DZEwAmjgVtE5v3NGcv8Ld3dFNMm3DBH7fAY6rZqUCKs6jKcyG6uhUBDGP97tnZ7monnSLts3sYuTe9DToMRys",
  "key15": "4ZSVUJ4Q3jhPCkd5VfDr9Bq81aXEycBXHBdGSjNyvbfCrdJzbsQFGkiyZYfogT52pjewPvua4EUqP5Hfi8vHfGzN",
  "key16": "4vBLvBXvFkjXjAjWc3spg2FDaVHmGJftaK26Y256Ntg9X3CSG9CwHyPrnSox6ov3JUNiwqNNYo2eJZ5BK9EB3sJ8",
  "key17": "3hYidKXdaBUypMttqWrKWr4eKYsEK9ifLgjbjEQyEUv9Qz4XArZgwKYaE1r5V7gc89VhBN5vpcRNgFiHuxWCxfLG",
  "key18": "5dvQ8LP7HF7nseFfZTUgffDQGJx9TMJJN2VNswxzDbBSimbiVax8s2wdyf1v3tvVBmpK7qejydsYGZYC15h3EYwf",
  "key19": "5Chg6zsnPW6muQUQmn5FmHxCr3BsmjQoKQyDbAxo9hcEUDJEfxPHtiNic8erThLanCnruHvEkzX64wFj1Xk6iW3",
  "key20": "37G8gsFJn1ubLQPgkXoGWrCygAxYSMnzn3ugzD3ydugAxnfa2rm5xpnFdq5ZYdtWjW3yxKbJ5HrhbiKHMMPSgetK",
  "key21": "4RcxqhtGSRuNWgsNgqxeWFTsRkUzEkrBjNuUYstg8os949wHztKNwXiqbxpqiRB42WTsghpcy3Qj5bRcqvqwm6nH",
  "key22": "3Hq2w17wr4WwVMMA5row25R1QAFNZAZABjVPC3oyCDExL2TTL6NvBrtW6PvqJKaQT7S2MP1pTjKEste8onDxgUSv",
  "key23": "2wWhem4grVbsZDdYjS9SY9skwFiULJJWfd4EEQLyDYKqG8s6WZGN2TEVgg3oKyiT8EsfyLv86M3BNwq18n4FT28P",
  "key24": "2bvzEAKhMhb9NMuPwBhsLgTWuNtzsVumFc6FGM163BzUWBf7q3ESjzGXiDNgJxMZZzVtpuNsJ6ANehZ83ueSaHSo",
  "key25": "2MVM1GfK6dCF4mrA1JtrPjYyxPYZBWjp5QktXkAGTomFStZMKz1rJQD9Y2JW3ZWHou44DLb9oE3fbzbbQYVb9o74",
  "key26": "ZPAXTAyr4E6YdwNUBtLVX2hYnP93haJ5Fcyz76YQ3e9dgnj5ExGFSgZqdycyqnebsbcUAquDYPKFoFsrJ3XJpC3",
  "key27": "5xAJ1xuDKHo5qSsuSE6Dmn1hs4cEFoevJT6wuFoiPkmAZ8mHo4MhXrLLcpJm83n67zG3Pvn8ZwEmYNCaow6zJExJ",
  "key28": "2sN8UvTQeyNsj4E78LfpNWrxt7ezWGnwy4sL9tqeRaXw2yUA5drpbycbqGwBja2m8SoNa8BXmyiBgsjZESTiKo4h",
  "key29": "2q3iqH3V9hxUsws21Cx6J46eBgpWGFqsSohd8PE2kV3iiCg8TYjPLyns3snwFVwa7VpS8UjFHzdf1PFQRWKCoN5c",
  "key30": "wxTWVJTUtUe3NG1oCCxyvoXTZAh64W93vybr83Q4TfQrf5b6g89zW3eBxHdzqp2MxYnqMHW2aUzsNBgcqf2Cosp",
  "key31": "2zYsNQnB5LPHShSENz9Q8TNAQ5qKejae7uTwxdKDC62THzPZYRAcu7gU5quKP3GYoWzQXG4DX3i4CtEZH8UonTH6",
  "key32": "4Laoaf4ELb9zYmgUS2MYuR9wyuHYr4W38jHNhowUrcu1H3kzPSPndpg8BCBNWs9o4EanMQPWge5BuZKbMmRogM6",
  "key33": "4nJhhNf747ahnUhdxxZyo7J5tRTKwaCJsD3XG4aTeVbVXXbzgqLwLQThKWkn5D29zVgxtaRqgFt4EXUKhauoK1uR",
  "key34": "4pjs1N1EjSr46mbD9VfHrBQA39DwbUcZp1uY1Qob1vLbhkvW12Jfn9V7UTRo38rfprfWV5qAQfXCfbU8DzMXx8WU",
  "key35": "2qXCsmhzcYUAesuiquvVwqEygwCH3oJG8iFwJYe55MkRvvYEjG2a8KqxYX2i41BHD47WbAbb429nBE8rMYmHaRAH",
  "key36": "3Ueui3Syi2ZF7pcaPK17U1MHFX1JtAmpqH1HM4PLQa5sQ3PAahWNGkN4RfkS2iwFQggRBxs4uvgc2ZBotKhgZd76",
  "key37": "4mLh2VQ9ikouU3yxK9q1s8ji9fcD1BpVaX8a2tZyy1B7aRt2zGGJZgCKaR257uSSwg51uM61ccpd55z1Zzbmn6xS",
  "key38": "NZNkE71KWWFwzsYgPHAUYBqgPGV49QMqa5yMVy7dRPqkQqRwj2zbAWVc5in3BkuXqNhYbGJQBL6V3KcQrk7TN7i"
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
