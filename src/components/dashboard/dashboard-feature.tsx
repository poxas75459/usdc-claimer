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
    "65HBmMiZszxyZcTvvo24Bd2LsSpGAP2QRto2NP3PzgME75L2Xo3JZgoRUN3ES5SL1J7kUGDH2ghL9xg7xbRDqw6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Bj9ohmMtdn9qNcQpyMBDgLcKnXKZsRT65rFz743obcaPDkJj2pgbTtKtyQf8Msd1Pm8iJzPad7FKP8bM7o1Gi4E",
  "key1": "37XEFhgi33RheoQzpjc2KqyRzZUQ9vJ1vWwRM1R3uXnYpgsCN6WCv8EYxryNXxiKA6QWfq6tyQQdXQnSAQCGJ8Zf",
  "key2": "2uhHusQ4cifdrkt3wG7KcyfGa1feaMN7MK5oErCQ89cspQapj5PaUa3Bqz9TYGbVqyRWvQufe3dbbf9TgbYJBqDW",
  "key3": "YUfXEfYZwvP4wMyBVhL2syppf79jM48ThUompk6CTP7z32z7aRSnsqQxfGg47SEuefjj41yiDVFMDG9ZcjjM2pS",
  "key4": "2vtw7zskSHWsFacQuK9EeNes9pWUn9n4tzDzKa3XQ7AZtBfSB46P5nZXr7y3YQSxAYiqLTSHAefr7J2PWeSDGAyH",
  "key5": "5kcS5PxGLPNsgySus4zRiT1w88Skn3shcKvyC3Uv224zgpaECPfP5qSMAfogaiMpRBua3TqEsjgZzG2UZAVCEUwc",
  "key6": "5YFxsiH6CJGJCuzFP1TG1iJrs7gLS7WjDzuQm6gqefecEqwhNH3QmkRLUKEunVvZ6mMYZGAmXvdkRvHE4fMDwXYi",
  "key7": "4sUVh5t4j7oS1RuS5F2LprM6reAzdPjeEnu9fni1B2EUans9MDPaJF78yKLQokPT8JsachmFjntgt2EnChC2Qgib",
  "key8": "5Vfpz7F5YmQSUpQoCgBRxKST2vUPUbMmhVsLkkyQfZ9YGM4hRaswe46J9KMjgkPRMnRN92ogLP85JqHzLETds6Er",
  "key9": "HDTsd7CJSWzE1go6X51689FmvVPFPfFt7q7JB2xc96M52pJHZcHtcgf7Yh6Svwh8vz7RQJx7ZF46uA461dQsjDa",
  "key10": "4Cv2iZE7HsbBeehpsSVbJeHP2AXArHrwppx5GCjnjXoqdCHNYvAeYxc9qs5Rq3WL79ANjJt6LGVRNh1G862Xd2ws",
  "key11": "59N4mJ8PB1Gpzti4vQapoAFz23v1CubwaFppeyYxVbTzU8vdtN9Li6BafuNawsV3fAWS57Q4Wi1Bpn6cZ5aqGScA",
  "key12": "52aZRJyE2exod6B7w5PXci5aiqtqQvJMgpN1iZu6dPujB16PPtkdcPQAdoiUPXmPSJzg3v6W5RjyjHiwJndE44yJ",
  "key13": "2L5dFpxYDFRgAfAvd9z6kc6SKDdxih24ZWwcxJsdcwWsA2PfB7HGQPgNSHaMZ8BCyZgQBn5byZMEC2r2bXx9GEUN",
  "key14": "2jdfQiUpdimjs7dTLeqTAfcMyCjc4AwGXSF5po4JerzKNfWhp87rW12YFF3bUXS4GD1j8Cd3YpTdD6eU2n91xiQZ",
  "key15": "5nZ8MQpFoXfoxH9v63fwWfRTLPc6dVKVgszbM6SpjzZBfKYWmJbdw1bXLyrDP7TpCJ8VdZzoUbM4sCnk7xeburWZ",
  "key16": "dx83hv2vJvXvxRV5TM2X3jybQF8TkRnXwJ9m3ShM7qjMJCSmWgXCm2y2fxSMKejsQXwYhRFjyM7TbhFfsxwYup9",
  "key17": "3dr4qE79g2SVqQMDgfR9U26qvhz9UfbbfERSXDumCg1o8rtha7hcRf4CXeR9wKpRNpye7G5H3vHvP3f8ocZTjXUX",
  "key18": "3h2tTEdNKXxWA8mwWNFihj2RAARHngr8ke5BrskgWA42pS6R6C5WRiUAxZjz5bwcHqZoauS1LrxpbXyBGniNBErf",
  "key19": "5XLiBFv4ypEGjTvPHuHoHzomkBdM2J4Sygvd4B1TF2ji9HVmsdWZF1DBwwmZ8aC8zZ95pCm7Z6DZZMNxv6W2mMVT",
  "key20": "3EBVPF136hvTE8e57rNQKhUcUey7iiwZo9Ta5c87AufxWzbhngNhJStTyR8JgSqqiRDQhU63PMcJSRFCJ3dyPame",
  "key21": "3dP6BR6dZxcbhYvyN8KUruXqAKKMxt3kX9tWaZQgQ8Lu73Vs8arT9HWmGsuYYBRjm86Sn3fkiRVBiSXsqQMg5wqx",
  "key22": "2HhVQNPNDUmYaUW7Kj2ukoXo9qWXAvsLcT1AH9Xz5u8tgSFnt7ADJXtzNEL2X1WcrvfSS5SPqDMiAJayJSi93vc4",
  "key23": "22VBn7XaHRNPpTY78Df7UN7tadsXwedxz3cKy8T2YiBLpE6sqPS9msFSY9mBNEgWsX8aWhZ3rqpP9C75f3BarfeH",
  "key24": "5UFYWBxqxjjQ7mxAAUeFWoY4Lna393sSGE3MMeF18oUi1tWpTw8biETbuAKLz85zAYYy6ePuMau4Ga3sfD5pqwYc",
  "key25": "5TTxMs85zLKzHiAQyuSR5peo2YHencYqg4xuWoZ94wXkTsLCynsZtb3TNQjJhmqHmwZDQVojTYJwiiTesrBLZDGh",
  "key26": "3boPMV4KXYSqpaDrC4cFViKpmQc8vcz5ViaekmBH3iR3anF56vvF8wLopawct9tAM7dpLo4UCMgwibUYbLP2YmTm",
  "key27": "24nYKz3vhnCepjnKiKMSwTD3KNRQpizoQouHZTGx51Qf2aAQVSKU12NRL4xz6ShcrhAavBZgTAzCJ6H8uHm8qKt4",
  "key28": "5YyAGuQPA9Fitw9PD5GWj6hwMvCUQ39zs9cAFb9wVupwRSE3U6vK97nHaEQqUHM9YTvZp13Q89NWPoDwWfFkMkga",
  "key29": "wd5XoUGE4YA4GfjBXMmueX6vm9qKGC39yVqz2qNogQUE2a4qPZ1unYTbEjdpgJgcjrqPfkhcNsCjmK4GFEG2huR",
  "key30": "5rzV6UoxgteyP1wUd55A6SXGbXLtgP2zxcrPqaqFfB9gQcEchYAGafLqPTZShgmoqeaNcTgCFW63UZ6cyaGtj8Xq",
  "key31": "mm1BsWsd2fbLDjQsCrkUMP77ewi3mHWSLFd61uKmotcNNw3wpCeac8R1hfsf6j7tdVdn651xVAjs6yGzeWg7YTZ",
  "key32": "3HRuqAhS8SvCML3vrtywTpjbRsoR5QJp81ximCQpSTXStejkwdh2AkzWWj3BUShBtj1KgyVyZu4mj74SxKXC7M8p",
  "key33": "4anFuDM6KEREbs3QzZkaynBDAb8TXxcjLXiAvcXXTDNGK1KXT9BNBu7iScbUcu4u1M5VPgqyd8t9RcQr8rjZ7UZE",
  "key34": "5VZH3cMj5ZjF7RFuC5cPuZNYnBwKB5tKcXC9DMtJrHDrKDRMbEEkrGRbbnHHE46zdkGkVZeycif2oKQRy6g4wiyG",
  "key35": "3XbRr5Mk43mFi4k3NfVrM3PUBED51GUiiwFn3h3aQPKnXcGRQmDZWzaZov8grMyc6sSiCLxbjJ5CG4qWr3h78LhS",
  "key36": "3jxUwL7CbQZQgSGXau5uk3yHAu1Vu42bEz3G74JyuYFUUqLPQ9d4AroEMrkMAax57AHqUpwabpvJubtVvRfwR5Dw",
  "key37": "2dc22dmsgvgyzGSoWnTDX4kmqBc4E3RuJaAjk3uEkriS5YxNjWWhVf8xKTs5xWzZvPqMuTvBkSfnUU7863DgxTU7",
  "key38": "5cADYpZvbPjFjhxoAzythzqN1CVe22huwdbfmpJvW9kUunQKBUJizgBcn8in7GUkQUgEA3Q61XFQpQtkpWSuwWNV",
  "key39": "5THW9YZdfzFowsM5uHJQEJAU5DRrmGcf5SzksEnwRuPnqiusvzick6L5TGMWFxTw7PbNTLdUjNSJwzc4A9AetRmB",
  "key40": "T1fTTSkBeTsizyAZxcxHLLmf1gxRrZMbSESyKkpr46MYnuUp4hngtkunm6sth8yXDH21RHn73yejis3Jcq65kYo",
  "key41": "4nd2bJeEUmQWj9ABvsLCNMZ9sW3pu79PCJm2SqoAwwsULUKUdPAqXVXkjC4E4otDkMnRF1FfNTdFwieXRrTjeyyi",
  "key42": "2LRBJPrfkEseTP9w9fFsyE58hkJwNRRcvYcLs9h1ieomwRbv8FvBkL7GkGGGnRva2XGTebSVwYjWxijquvrUFKA8",
  "key43": "3S8ZVrsR9QPMwMJN2jyn3NkwtkjsHLKKGfYaH5TYPxnTrYX5Y4E29VwmvRS62UbHBdKJ2qGHY7W9EmgxCLGfoWEb"
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
