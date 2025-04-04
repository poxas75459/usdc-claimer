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
    "65NUgEXZsmh15xpTVy8XjAtbu96DR5diNyfYEfJW3CYHZdKPE4ZvCdRK7eBNLXnSAgVn8C1Q6r1eZArryT7gTFwb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q6oU7ayB4omRj2EriVJf9Fuv5fC4vu6F48qQwxsGiHh99iZJXn6qpzDyemzzFFQXyiE9NbfUSPDoAts8VoJAiaD",
  "key1": "5PavGHA2rFZviqzWgLskxsQ4u7jit8ns9mfFAMjh3QeXKsbrRZpp2zQcEsqpXdm73mLnYFjtt9NXvkB1LEBeP5qs",
  "key2": "4Up4fYpyX1acXPgmzGmhokr8YGmss4G17SRNXtnnEsokjFaQ2y8gojyuESwVpyaLeUuxJTFmPtMh1Cu1wTwydG83",
  "key3": "3kHXNW5PKmJHpThynVhzrJjq96r4ho74NaKzN4QQGFqosU6KaCzczgKybopXuUHbTUdnii9KftvGzgXkE8pweU6w",
  "key4": "5tWeAvB39qZ8bd7oXTu8F5Q3qPSfZXbspx26jKjQSXcVU7PxRTEt6LnqYYvNYhNsxSnWsEGxo3GDGHHyseoVax8k",
  "key5": "4rUd7rY3zoWtURWBV1bGfp9WCHFAFvrAhF2zSzJPbA3WnPfiaa6m1ZwpGBnPBe691ttKzV6r3wMaiX9kK3wFEtmd",
  "key6": "2EpbQfnGL77nFgnadu2TvoMcNujsNJxA6FYSDoQbL95sYrsrY199pSNseE3p2fdv8r8vifu9w1pfvDkH7QxaFa94",
  "key7": "5ENMdEhoztaWgPpdzNJoZtBeTwE96CnJnYTgmPkPB4gZWxGkAWRDnqSnRz79pxn44343kxBrP9wJ8NUUuD3MAUgh",
  "key8": "3pQyLPV66Ekno7s1uGJHGxqnXNaYwjNUhPE4aUSXyNnSDtd9S4XdtDUveZrsBY3FJ8dXo4Wi1vfZnwX33aLuVukU",
  "key9": "WuDCASm94vfXmKE3g3xPSKhMDW3ooJsBJnZZo7ekBSRDRTsqEgqQrYki3ryVmgKk2wuJ8CB4YcrLH413jxunj22",
  "key10": "2oeK1BDciqfLHZuRp9bBVWLRxaeb9cXJbXFUW3UeqdaaYnk1miiRsMGXxodureawCbWBBa1DUC9fMX3CJfMfPfe6",
  "key11": "2Fqm55ocCunhfSUBy6LR68oa43YfnC4dxxQ5FWKUcHxk3aswcn8EF9v2r6s33ZY5WRezbDv8vy9DiwuUfxQM17Y7",
  "key12": "3HbSe94hF43F48ToMj2jhvNhjUDKxdMqF9JWhhtgpdQAo3FW35tGd1uVEcCN4TGxrBQ86Q2o94YxPS5eTvAXtmkD",
  "key13": "2CoDmahAFa9Ks4GuRAR9C79UT2D2SdYc8frJ3hLpPgke28LkZErMvhk3AQqBG7p3FEZcKXH7CQ6v3Dw2RQGAFsKw",
  "key14": "3nRNnYSCmdDpCYzpARukuht4sWwHjYuNSfHqiMQy9obomRLLPQQEzHPbV7Q7YyZFqwzesMr4pV8fMjUoAykiB3rP",
  "key15": "5mD5Y4rENGQDCDVu6caDX5vZcHAr31bjKP9Tt2QLJHtdjAyf5ajA8RT6fconFV5wwVYirCXACbUJgm3sDqzCysGE",
  "key16": "4R1ufUm7M8Gv5rQ3MjpyTJrNnP7wJKaPZawNsG2mwUGJ3kTLUebhh17YP7dK3bUEvRS1Wo7Nk97VEA7tqJMgfmph",
  "key17": "2Pg2S3e5conkcbKVQ4vUsrfzFYpzU6MM1JXvaeaQUptbibvGdB7n461cBKRBneZpicETz4NcNd54kcaUq4EJcMba",
  "key18": "5qqsFPwSejD2FymM3K5ZJy4VGFNm2ujCabyxBBT5ycZbPsMJPhcNR7sgy1xHcMGatqpG9CGrVpdd9Xxy9M78T81b",
  "key19": "8ZTXMyjudBiwzHE16CmVvquTfuJw8Xi3eszrBYNwn7RMZnXyHdMgDd3uspEzwAGaQ6XMJSy1EseosRf8jA6HQps",
  "key20": "2Yb1ww32oKSCmmbpj25jrNwKzVu2bviNAH55YgztNLW3J6YwtHa9rbHthg1kK638y9JAPvWRHU7mxrkkCBsmmbU5",
  "key21": "HbfHkt1mW4LKHYwfQZTr7GhCPUTHnkHgVjwoU551yaUoNhGQUo1g3D1BWCwWVyDnE2NN1MYCEv7gt1NtFcoEygH",
  "key22": "27QhDHkYuvVvb7n9Yf32gRgyu7DqWKnktouQqHAE91CHPGGk1NNtyT6DpbsCSzJpiHb4p627y4wg6ee3iWcUp39J",
  "key23": "2TiWzNVbSaWonbC5FusQkV2Hk3hXqpiRCPygJbYRkZ47CMgh2SmjP4sc9HxJu1iEnnopEn6Ziv3ToK6mQUfvzpoB",
  "key24": "5DRxzg3Qze3GUYbtvq7BM15czqEZxf44WWRRxqvXjWNbAwvEiEVbWrb3qjGypUTCZWQtHQJ1beFEPDyggGSMjpug",
  "key25": "2tcZ4wHmFxEKUyn8QPFeqpKAgZnEwDxeL2nWYK1QVzPhA7i7PS98DxiFeV6ZwAPAzpLKtCrgW59zpzYpGgVgrfLU",
  "key26": "aHDYa96o8LTfAPW3zo35HAhEHmXW1tTtmH4Zob4XPYmhTkSiQjkXioh3pZvZMkdmZvweKLZVcXfBUEcGLB24ZPT",
  "key27": "dc9VyZ3Rxaj76GZwsAFKoMSnfph2VB6MjGu7gQ5n9gc5TgzSGU5UxLm4D2eCMkrtu5zVB46FpvfbxvbhCkHVo7d",
  "key28": "6qKmTtkMQoNiiNX9JyERaQxo5GxFEEn7GPijrtKMZvSJgAtCngPZc89XDX9WaY7VD1teWeoLiWp2XwEuP8uryMd",
  "key29": "3Xwo19eCXbYBUbqG4YME5ujNxx1UoWGAq1YHj4jRedUCwL4nhjAiTL4qQJweFfRakbmu86JAGCjA3gJuDqc3mGeX",
  "key30": "Lvx1dUNd8jnJvMQRPaR5uDQ1WW12MLrbmHkEoczatkqRHqZsb8MUuzccbf7L7cjDY2ygLH6o6LCGdico3QW5L8c",
  "key31": "2WhBsAMX5m3c1dT6W9vG1SREynptEUYfFwYwDuYM62bi2xnBZCoAeL3ghbVwMbrXYZvNfBfUoh2hQHoeKRYnDZ98",
  "key32": "4CGMhCQRESCR829pdJDwbyvW5vJiPiR66jeQPSYV2anwMQ9tHgPTAEYnHAoZmjuhvMKrDMzHbD4CbEcXyguhkchc",
  "key33": "7AASgCBXDeFyBTvzogcaPLZ3vWQzR3Kc674KnccYTTScuZ9pmp6nwNkmvKod5Pn8RsEXGFGqkYSLTY9h3LUp37P",
  "key34": "5ZC1rjY6thxbQo1gzN8EXxHjZN2LmF65Q3j6YGMJQK8BhRpeNPszBWZ3wC36zGXQcCHVrr5G7tkAZ4TzypEjKMoT"
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
