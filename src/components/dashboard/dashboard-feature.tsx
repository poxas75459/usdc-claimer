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
    "ARLxWEfkywZcV8rgGJtpAMS3VVPqjpquoZVzxBuP1qbySZ7WZLvVBnd3Dy8UTAGFZ9m955MEB7DborxoScBbf1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fobf2N8CxmW5ch45e2vBhZZopbw2S95qpdyqZEc3ivAPTRyuobM8tp3YRK5GU1GXiAX4YW5F8tFcHLtj5vegACs",
  "key1": "31f8T5e91MXN6h61sJyu5CKza9QYEQKAzxLUMnnNme68WskdyQa7PixNsyfxcnCgGM1dFGXbpbtwUk9bn5ciPTNi",
  "key2": "5r8MTKz6ZvVFqzcmcX8QiaWmJezJ5DPtcBfdJdzQ9p41zTVDtK5xCNLLduZqVWzHyrhLU1TEPrPiukHuxBHqR8Ge",
  "key3": "4QjWtfDvLhHNY344tj5y7t33THv1RpooAAchaMhPsrqCwE2YSgrraZWEMRXcePdBkjPjzKWvG7qLnhZtHb7YC2L2",
  "key4": "3ZiHdLDCaQgtwAUUKAzp39worGPQCfpdpTCQW17MFZk6yzD4UWMVDg8b1atBCubUufJm5VKSVXWHQPd2htfmxoW9",
  "key5": "4rPqbwBoGkNnZboZe3Y5FsrsD7BRQQ24TCfdjQ72BjRArsQa1RVLqSMCjU3GcNUeMvW1MWBZgn1t8KQ91ZWULbqg",
  "key6": "65ovSLWiFmPHuZSQZRodMwHaiT1Qk64j9LXpa9NDBr6iaCEudF2VK9hJcPAfky5cR5WRqNhkVHkVjC8pmG7xsmEc",
  "key7": "28kgYSaD9ELYWFtDhQ1JZUQ1y6gVSo4nStYNLfSVuEeyVr2N7RNaEEUewECyksaSVjjgeRdpg6LgP7gQvKw8w2Rg",
  "key8": "5ji45MCvwqD1VJRcDxPMPnxEESKUbjKKNyWKEfAxMwEGGfd8S1cMsdB5etcMFsnMRrQ53SuyTaC8QDsh2Ef5f3Ui",
  "key9": "3d6bpDNxsHD4t8naGasKEWFPjoEKxvj8d9YCTkSSosF2Az34XyKpPKcQfQHoRhzrKZeTsmcdr56vzdEY491JjRTf",
  "key10": "4ya2d3M39nNhTyMZQBkjBpEgoMQMagEqcTP6WxGcyXiXftUAVrWQCiFsPAns1bRGoCzytgTYaPMXFY7DZoCUdD5d",
  "key11": "2XyXrJfW7nWkosKQDWXFmHB8c9GjBwskkymkKddD3LG5WAZykDMjxJpxxJ3wz6nLWU1iQ7EJQkUHWDZUrfuj6xUD",
  "key12": "45kY3fhqFfoE1fLnJjcyPB54esuNuK3ZMDaju3QxDW53Hg8tFUGTtik1pC2nMe96ih7RUHr1NE4bPseCo7jLHxeh",
  "key13": "3WLKHYBv4Bpj3fD73GTLsnZdW4CCHQeYtSaqgKmVZ3533H3YxpBXeAaAmBURMGG6hwW5FoNg5momzezBBBxpW8ZW",
  "key14": "4vBUZ5Xdqv18Gc8KcfeHbpAnDjpSG6X7LKS1WjVZ9y1S4vMZViU1CNzYkbw6zeZC5yBghT8RtwsmuCReq1jpgbXw",
  "key15": "5szT4wHf3JP3YoB99piGE9S2EXtba4cUW8P1vP5jfyskWcNV6XcbZvoEnuu79NYSyZifzXqvAoDhBF697NH1weXr",
  "key16": "4Bga8a5tMjAot8rDjW9kRjnAeezm3khZ5cV9YUg8uSoQ34QMAhDRLCmwPghHLu7UrFoT5jDxhT8R44QmXvyEX9ts",
  "key17": "vpYPxSp9iFYZxWYaSnBuPwHWxjPMCHvTrNvTYdbXrXqq6vjmz5852et7RBaUwWUcC1AGE38sLrqhrAnZUiFL2Ey",
  "key18": "axCZAeaC1ZCUmatr5gwCtrs6nGmAxrfwiZoCMCoMrKGEqojr4STdPDrHJTWsJvLhrV6YT2uoBTMVNybkWNPd25o",
  "key19": "4MMwXqEtQ1oyeVHBcE91vAnQGbvvk3aSFRamnchLLNQ97G5d8asEEBMZSjNEFR9JN5V2XeWypkWnVSBUVnTKCBWU",
  "key20": "4C3YEZ4i2D9zHZMg9JeERNbKrH6yw4kuSSBYBsSZPiygNxmZo7QNTsMb2gLEFiV7kardM6XnYaoGtBtCpfmtdD1F",
  "key21": "1AL6xQC1bS8o7FLJ9KYp8J8d9Ro64boSuzeyyMdjtZ2f3QWf4UyYXYYKMHQiFStKyrk5bmkpws6KFgEEfUeKxWH",
  "key22": "4S5SPixyL5YY3Ute26sf5w7PaF9UtFsNMapn97WkaKLiV6Mv49qFnXhv83hEGHzYbiFQ64KEyrJiVQQu7YMaxuxn",
  "key23": "2nTjab7FFvXYvbRSdH285gwM8TswsNacjqRZ5t68c3wdaXvKUTcWaA29Enn4qP9mVQocznCgDNq4nqXmiyXwv4tt",
  "key24": "3TDFjzDyLryA7G97UfGKpMHN6QwhmKTHncMkMJneVzkFQCGrhYsaUPSZ3t9FSCdKBsf6v2wrknjJzjLFMQuynuPC",
  "key25": "zksjZfyvT8heqbzmbvZGiXEtHWg5RWzHDJ1bWsMi5xo7KZt7Tw5cm3DvGWrpE6wU3h9apk2VixLKB2ipX3BbdhV",
  "key26": "3NSDAnG93vNF4ggBPSkA82gXAfb9AzQGfS4GR3vma3gkw199mkbeQ9xuiTmN3aeH2HvFYs7UnCGyw4DXQHNGe3BH",
  "key27": "2DjJKETBWCgko2bT5TfqgETWdiXVxgwadFt9n9aZRXaes9UFk9k2Qfk7sDxGMxB4jtiU4tfgNHKSRCUcKS84yKwc",
  "key28": "311KvqmH7uA6fHCvbJ7H5zWpZnJwYwpkbsrxc8QpchHSBco7suPiFDWRwJ9JvznBjAbdTqxzbb4WfVoRaHz9HfmY",
  "key29": "4WwwDHjzzsvEi5PYpQoqF2J2Kxf8KX3hU6o3f7DUY6DVibShWvdeAFSoxnaZRZN2zuA47x8PGRHjByRcbE9E1ZpP",
  "key30": "5fbR6ckr2nPBHbcSaXGBkQnYdNH27m3WsKMAf7sPFZT712dEvXeXPKnu2Co1CCgYJZ6ZPt8fEyde1r412BGQF7FQ",
  "key31": "XTGejU4bXgZW7Q22NTSTfHfWFYXFqFfjhuZ43AUBwtjGphRJyhYeG7pML2ZUwUk5o8aNCqegRZA5qBehejLPX3z",
  "key32": "ETaMbLxbFSVkDjqYpdFhCR57Guji8QtH7wCSqq8QCwuHaQcUvw1eiCAE9gtQiCbBHWSdvWuvC7nL1rLMFuwkL4o"
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
