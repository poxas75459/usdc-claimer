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
    "3dAAr5bbzQAQEuHxWtHP3T41rwPCxsvrJc6ouKfTkXYo6iZjTgKgnXXTuTj1YtCuRwRt5q2UdDA74SfohBmVLq98"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HvTDFaSAPhdLoXk4N1xVSsnW5UU5hCYBiy1muKNfh4TF39Sw7Rzhta87RkjqL9b2A5oc9tXHxFUf6bswENvKLyz",
  "key1": "5toAL7nY2Ti66kpEKgkAEsBFzf7AM7PGHXHiGWxktGQSkdfoaoz2RVPf4TLMwKbe347xV86x95P5A11Q8yKCQRNa",
  "key2": "2jFCW6KxD8kmWNM2dKiLF5KvjZFsnZarV2kKkNzE8yF8ksuEke8indTy55TdzWPcyZcFm2CGEN3yNDkpDY234D4c",
  "key3": "3r9KHEmTY3YnH7cdxRcfdsJGopDgzEsVK91mWCtuLi4Te2hLZ3BGYsNs6B8UZMvdoRgLqTjFMGRKTWtoA36xwcDJ",
  "key4": "4LUUsveJQTyr8nCQLhe5dUexLQYBejBwHbDCXjYmhH7UzWih9Rzf5xgenSxWhtLWoBBJn795a6fHSDzW2tHgAhhV",
  "key5": "DUpjmNi4L26QiCLY4E1BBc4eMWtPPVgWftdxr9mGmYLUHG7zKqrbyehBw2f54JrYMBcQfgQH2YwPvvEea8A3MVg",
  "key6": "5Bf8aGd9QRH4uzixiELSByigBhiTN8diBuN96N7E6yB6DY9W3aKwRTh8MUyvwNLfpYSW52z7CErrJPEcFPaXJyga",
  "key7": "5zrXetEXjSrxx5kJ9xyi2SuxoDbiovr1Y3UcjbiHGvxf4MnC3FWw7nX5HrocDWLyhfYe3qo4tyqmj2wCqKcZGjFm",
  "key8": "2fXJdzwvK4brYxyvQgiUXwXjJHYzwZzkrtXMhiGwRghRgTb28yzeYiKXvtTXD8oLXPmcsxm8t3yqkx4CDteHPqLm",
  "key9": "B4MZ6wqiNkWnpaPChwvDumoQPvR4YhRe6hZgvVbQAb2xvf81xirNLbCMdjdr7Nbv6VZsdb4NoyCY28p1Anxukxa",
  "key10": "DX6o8e7BxiqsFtShVjVkH5RFvNAtfaLDVZQj2grXJ7rS84wRGY235JfW9eo9y8Q31VKnc9mNWgxGD3vwnGD3eed",
  "key11": "54wT6deqZUKEGkAHrNwk4nzudo9E4Wr2dX15pRMZcofRdEpzCymvKWSaEc9EpLpUdBNoyYoAwWc1NQJ8yAh8mTYo",
  "key12": "Th2LV4ukc6hn1iFsR2tyQr9Ljj7frNskiXR7nGHMCRCeBBFvBKtoH1CUykyavmF6h2XsRCyVrnaEVGT6MhJtueZ",
  "key13": "3Vdj94PPvCDUtRxHrXqf7qrMfdefGJKQDZtGmHu3P2NQV5tFUksDSvyRTCBWFCYZ4utPFahkxMYjfhownp4hRSdy",
  "key14": "3RxoBjmQdy3wwVQ46AbwefCKVcGzn12YoWQSXvSyrXRZ7ZFygSd4BQCHkZzPG74dSvkvjDsc2hpPwCXLDHaWd7Jj",
  "key15": "3udGwBYeGA5y4rSjbujcDNyY5TvpSDzv2mW3HMERdZdkL8ArRdTyGcv2kC6UzbxeVmYjWNNXL5DhmLcYw9QwH1e4",
  "key16": "2AxUaFoqpA6uufRLX7LobAcxRoW6Wa73jncgMuFbxoiBjWE8n1gBcHdQidv6KcAszmPV6w44fVyAD4ob2X73HskD",
  "key17": "3TgzC3L4fVsMz8byimPsNsngbnEQboRmGFSRnZHsLUcgaAAk5aFXxV6F5HUPe3tTEWqu3tuX3ffMwpNH9nnbvQAj",
  "key18": "4cSNn3HqstkYgwu4kE4c729LP4L9amvAeqyXdQEFnyn9XKPJB4ZeeDMNymjDkrhMbojgx15Ww23TnLQ8E4jmct5j",
  "key19": "yNAkubLSbrr2EyHCa5jxtb7f94T1aAqCX9fbsUeswfeKndXnz9v5fLz8Xeax9AwDRXLYGmxaYb15fT3aABTseSe",
  "key20": "2HDEkNJZyT8haJtxZjtUYzxFz2cZHdN5BYCyH8RYggMgHNh8UZFetv22wBbghpP7GDxZmE8cq5WVpaTqDaaRDFsw",
  "key21": "5PgQQxZuvfjeKtxomUw653nzq16bszvXh2V7W2hZEDLHWD9ACZS75eAG8q5uvztSvx47g2qVRJa7QtPn8gCmqGvo",
  "key22": "v6qz3SpNTMfX6TmHNBUfGYPY7qvYmKt9aJ7bRtfZFgBDgMTgbZrocYKa7q1Zq9PJ4xCDHvR2CUQhA4mkBUs2P9v",
  "key23": "4eH6i5e5ZB2Bn8TsreGYSmE3K84DxfewBci1dBxRAembVegVyG8dzpE8N3GFRPAjWBC4eYCLqKj4anEkVwU9EcCF",
  "key24": "25xvrS2WcgMx7fzFVsK5wumcRPznAGz7zQaKLdZKmNhEVxTzevxYdBKCvVzQoK9tNEkcvdbUSmzg2hd6EQm37zZF",
  "key25": "53oVF14TooU6DoP3hxhChawwVMcieQctTc5ut7ieFV7WLwAjLvPx5KjwCokX49Lf5Cko9k7zcRxu2PmphnfwRWow",
  "key26": "4Y11k3XAN39zczJqfVGqciUPq5HFyuQq49FwtRGWjrT2Fqqtarh2pwkEKpBK7JqGxS7azPwxKN81ii2kr2wuBLa5",
  "key27": "5gV8nP8xrdvjFzZ1xKL2wiEfJ3Rpr8mHsHfGQjr6Yzp34uFoBqhxuQRae8EAjFM75eNfyrU5YvbPF7VHPTLm8dM2",
  "key28": "5GrWKhQy74ugnk752pnypPfRfajXXcZCwRnrQv88eQnU23U8C54bXyBYUxnYqLZqh4rGqgxUE4XomVeS5ZuUb4KJ",
  "key29": "3kL1mDWA7hGqLk4VsSBK8onJU5LdjYWV1yEMWFbDkFcjkDTU5h5P92bSaTWWTeQgLEFo7kATv77soe1Vb5qoS1zW",
  "key30": "4C2No2JgA7zTLcktKMKapYsNhNorV4bKiB8kCJSycywzEg2VNfEXwjUj9EGNk3Mx5BCGVWXcHPZ7nWYCom7buaDW",
  "key31": "4T7aeLJspmRxb4qRmfjuT9f3zEctVMbP2c37igJcdx7KzJxYmHoYfTXkmgqLeQzEhp9VosLSstSWdLTTUD9hYt4A",
  "key32": "5dWgXTfeUc92uYVdvfnnMTm4v7Yf1bhM9VwKF3QTxxSu3BpMdQ9nGZYSEkx7P5SbkJSwfCx3uvFwAXFQEz5oU76Y",
  "key33": "5Rxhme9oFSZgxpw14ZJa6NGiXW5Z4wTaXYJ6HrfhhFvZfC6MXGxzbRA2ZiyTQtiHEnna1miccistiP1xMQ1NwQys",
  "key34": "3U15ejYkHAH1zxWr5uSP9UcE11gviHo1GconX2j9W63JpBNXCYa5GffVg2pGEbDWsFEZ2C2Hf8vn4yW2vACKD1Gy",
  "key35": "36hooZPpjKLcvPzGTiutKmjYu7hWy3TnLiDiQjt52dF6nFnV3oDraDZ9NzneajMKqjh3cbrYvTefRH8mVRqTYdoK"
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
