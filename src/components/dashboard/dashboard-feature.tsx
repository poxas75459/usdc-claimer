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
    "2GwE2cmUwDiF5ji7UWaUB4pSKtuUB9ddtoshKmCsYGJ8Qz6VPA2UbS8HNHKHSCbEyxfh6tCxfCWXRKwLe8X9DBHL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KiTG1gq5GCyAxDCFKaLXyV6z8CEj5TjzFjj3vdsnzRT588xsxq342iiUbAdQievmDg4xRmwtjSbGeRV1aSGnWnc",
  "key1": "83p8nTN5ZhzDiduNkBn5brqHdQ4fz4ULCT7MTSsHdjWEni75Jam5WWRay7qRgMNMkQBi9Sw9DkPQdkPL1N4HJ31",
  "key2": "3Ue3SAmRsuZxFyWsWCboXyTdf2jeweERewdjgbS4iQaY6tuFFyriwhFQJALcbzeHt59fuki5Bj3bgNXvi9TmG8hJ",
  "key3": "9QHHutLxCgfcpb91cPj7hrixBW4WdVpuzDpDwpvry9NbuW2sgjGwV9umwWEDfN9aQM5YBauVTUvxR3UEXTq1VAk",
  "key4": "raUfFeubQSy2t6YSYEY8EyNauLS86tKhqscMFqhkyVJsyy97Kw7RcBfGe9MgRzT5e2hJ4y2RtYKuFKmGmiVjaeA",
  "key5": "4pbNShoBQARZkrhzwjAdwzE8attSb2sp9fayviavHhsuVAToMr8J9Qn2SEhJypPWf8kUMQQeM8jhWGTdyRBwLQ4T",
  "key6": "GaPYEACncT1HXq8AFZ1bb2gyvrqmUKammdUA4vVvRmU27wwHVmcuY9ia9Sk51Xe8GscM1jZt2W1VKk8zsDRQ6p5",
  "key7": "3aLhLTH9crjUrivChNaMTaXFj1rTpB3o41t8pYkMLXyMRUooP2CG2Mzr9YfeVqShn4nJcXe1ZFuzdfuoGwztkJo6",
  "key8": "3rmouJHwdt2ibbfrr9JrLbGQ9aL5ZTvUkmK3dYRAixMG3PUSt8aQeqEvMbCTGunx9rHWBkWA8A3FdEuCQB2wriJc",
  "key9": "4FZyH8tuTGokQGT4nnH65sEziXzoHAAcBh1wRSC3k21nCvArbstYbhzTZYshwdnnMnb34h1dfMk2saCb5kvHAaVQ",
  "key10": "3nj6gWt59T8M1ZJnezUNoRWJYYapu5HFs2BAXq2P35e1vXm7pPqfpntL7T68qrH1bhgq8AH3UQRHPvhFTDAdxw4Y",
  "key11": "kL6fjtDyL3yPtdh3dvmqGn3uvJYVKhZDSUJSQvJidHFaG1oTC617WCcZPFMF7j1h33FmeRsH9V62cvASvPiGmDZ",
  "key12": "5ZqmLPWjJHJ9CGCVgaZpPq4tpqUyELXfRmqGaQHb5aREiUXPfj8ubRMmBAa5ixgWBvGpaa9JUvd6XF2JzzMhX4zy",
  "key13": "4BEWfxSX24ip45RnqWHjACVADvyH4Nfkcuo7aXAZkbUgLCBDffP3aQTbcRUvzzghNrcniFCtHfGPMQGbT7tWLaso",
  "key14": "2JMQc2iddVCuZjYDN7f4tedwvQs679KcXnHJJPQTicrKTAk3ipLHvL7544SFBjpd1kRbtxLvPofkR9QhbV5PRcAB",
  "key15": "39mvmPL3KJHQTkzSQUDvmm5iScWtw4jq94GCeYKybh4Wygon8FfUHS5YpDxijriTQaZ4JzUxhzEB91sKYTWRyE83",
  "key16": "LEBfX4HXeLaq79CRxzeUC1qBWidbV7LhruwntLsj9wB1vgr4RTSbFMEi51zbKFbKzdJVGfLy1i6zSNugcQHCRWn",
  "key17": "3RC2jt9MKbr5xhMkQbn1Pra5Eb158QUgQdPe1t7PwkUWiz4BULzVbenL4Anyc2zjeanuJhi9DZcDyty95GPGr4Us",
  "key18": "5T9FNyA48tXA72PEipkBmt8Us9gXsB7JNgz3D1BwF2QqeWU32wuGDU6XJusH1uMV4ADxT4SxhksSGwsAmJzmiTxk",
  "key19": "3ZoxQfpfB1Qcy6P4vamP27YJn2bLcRvxw4Ygcf2ZJU8jjxSfb7DLExUG4QeFqkAGHdzorZ7AzGiNv8ePnET3c3Qz",
  "key20": "YdgEXjZpri5DJjsxnKCkVXMFvTGcdRrFYLNyJYD8LHTSE9XZnxYzRErEuemKUFZk2kuN4YoHZQ6p8cP7Ce1ZFzD",
  "key21": "55kRAVkum8DpWkuRBeRYuiUX5EWQ9d1CEmGUW9UQtMudGzFMeDxyr73sBS1CBg2nbb5wkLHd7jh857iGhCC29NgN",
  "key22": "449KPxjwiLAYQrNekVfAi8f61kdhtie9YKjNVzf4xmZrK6GeQ8cWRiteeS7X48rsNpBK8qHXhGuLRtdxqg7pVK9p",
  "key23": "5f4MkSJ71LsxQ2uSPMHRjBWGKvrC9gq6wW1kDaM3JbGRDskd2H9Zqh3RAnmctMDVwAH7jHRT8gwpeGmp2gwLCA6Q",
  "key24": "3rEGXShU5Bbg3UnzkcPaYnB1exZ87JUbzyU5jS6nT5st2VVk8QZJGyjAf4VMLQcNoTDMkj4wkJZxsjY3mxsjiUew",
  "key25": "3BKrQj28W391NepE72K1DKSBQpBmyuaPZ9uiiMyhNbtXLhSySZznGh7S2P6R9dVKXZqvyZmoE9q6HWQBYiDcYXhP",
  "key26": "5cPZUbvZkqphtoJDBbrjJCNcApdR2VUTaZyzGqhatSYyMxVLhn6JbrHv3wPhJnDZNHcnWntJwcdQDSTjUyLhMBEQ",
  "key27": "m7CinSfgc28jgXUScQWfv1AfKv6MQTJZdyspvMPfg9hSgshdcTdR7i6ckhXMU6wjWFZfBRSkxNz72UPtw2hyYN8",
  "key28": "3z4S2zHiZJRpNkXNevTjdJg7y1xxFvzL4ftc8rqJg5JRKYdjHDjpKguPcBdpzfZL78WSFA39eKMoP4FFGScGQVXA",
  "key29": "2ZWJGbDYMydfQcJAZEBDyrXYufqzhkeUZZrZmotMv6mQdePcgiD4fyx3Nq2QoZ82P3ygoGn5x3ghE8PZx9YMfDHZ",
  "key30": "5vnaKQWqtrZ3TUniGC6wXWbM5NWM1tESWNGbtQ16a9zVR93nfG6As3WTUv6h2Z5iwtRECkjYHW2apZHe3aCS5XQS",
  "key31": "22LG7y5cYrabFZZdvRkVT3Xj663rwB5WJmxNYs8BqY7FEKtiSFzbBjZpeJBg8dH9U7JxPvjRFHKRNLwJjTGeJh4Q",
  "key32": "59QpoETuxfbwFFWqeTrwAoSAboi7wxXFuFPUmTywztZG84fm8a5ig8VvwBQ2niDcgtFcwij3KMHUgSjgF5FVAgS6",
  "key33": "2vi1ygqMk51qVFNcHHHrpNHEsvfq5n5xQRMjWUPyvDLXCY3a1cyr8tRCtHuGwKYFDsH9grPYuBSziNzsan3F8fA6",
  "key34": "2PeVrMthFu2q2FtVr2uWENPY6EKZkGmJNF6tgGwCYaW7zPCErid4neS1QmSVtcqrKqkNhxTunM7jZWm4kaftHUYS",
  "key35": "3XfqBdfrEYT7dgTbqCkAqgNEYJ2qR4hN4ic5wVbasHw6CgYyPXWxB2oGoz2iAEoisGYxmJPoxAK1xDdotiD4NJab"
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
