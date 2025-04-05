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
    "51JThnBqr9pd8uozc92NsaiJWyjz9ahuEuRg9vd8gN1D1hRiRGXB3nktxBB8JRmsKWLanAMtFUEhLj99caJV39LU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cyP9xvGzAg9UHLnbW5R6Q9GZNiV7ue3BQPBeNgbKV8tV4FmTg5y3vShK4SxMWs8qBZzR7LvMJxqK3CoCWWCb7cn",
  "key1": "4RmRhTxVT2Dmd9VSAJUchX4q6RNCiaJRBKvP6YBEZknXBQST66NeBBoyPN1WUaWGaqpb4Fc8QHaWjvGPt7479qgE",
  "key2": "5Enh8UvfFJMyseKHkg396D6tXowFTfdPiyHJcaFx8fYLSdzuFDJe4oUSQXk1s9cz1QxXJdDexvcHMc1Y2Xd6gm6c",
  "key3": "2mi2GuyuyJe2hzDyGkfFb413Xfap1Z4fS4XrYb3do7QdbVLar58j4zSv2jSx7pdRxz7uiY7JHMV1ySbhnPwysHMe",
  "key4": "2Rofi3QNv5qC6ESVjtwpLYKTgXyGDvnnByWW1mRhFUEirXWc8eJhb3cnpPq57Z3CCiTTJqvEjHUbDoW6c1rEAnVg",
  "key5": "4FNV7LyLyRRjsXvPktctVeWG9vtU1UyL5SNKRqPESBtbxfNBJBSqGKDvSNk4c7S6Ncudt5EPkZJUfujtoeViNfvF",
  "key6": "6311EhigthsH1J1t96hoVzkcNf9r141c66VHoHsssT3zx9Rj7jdmv8tLnU56crcnVvkBxwvLgYgZyegPtG8fYA33",
  "key7": "56Ku9BXuotregMkVBxjUsoYSfzfvMURrzEtH5aNa2NKSZBdFMN4ZUD35gKJX9u7sKpdTKAQVgKzzBCGqn8g76opf",
  "key8": "ay6W1NvwdeiZCD6KNDKGStp5ZY7zAsCeuu6z7Hrvo28L3vQMXQnPwEfH7FVomfPL6EK2sECvCHe4DqGuq1RG2CB",
  "key9": "3oiXvHwctzchsJyMm8xfdnK4oeTh4K1dcXgSFhEo4UGvCtPAddYfDuFeeX3DmR6LTMkDzdciwnaoxdLkhDAyGrHq",
  "key10": "5CqBPE8ZHoRDjUjd6ZQFcyG5q1SbkXDockgXSCZaMcqzKRe91BQWJvkCvop3pQETg49QqZfiRc5SrRXKc8iZrbZy",
  "key11": "49bxs7x8kfjYpT43fEDaxH7z3pqu3PjpDVCuDinik1ptnJKsAKUMnYXxFNaq7su3QvLNvzTtHwB8Tc3e5Du1BbGD",
  "key12": "qDVBE51XA2r4CMkmxscHnpFCR3Rf4XPDPnvdUPvfT2fAC6egktvvYuAoUX9kAfDQuSJjMK7BHv9GpwrYD9PwmfE",
  "key13": "4is3E3cwHGMfCx3tcjsFZFimFHfXvUVQqnTLZYMaBWEWdou6LYb3srVfjgTJruQHJ6rUdEzWE4kmwKZdv6MKTZhV",
  "key14": "4KtEH2zk39XEvDzqUyCDnMVU52SpXJEAFjvZ37tWPpgaCHhMYBAerXVJUCT9L7rqRnFcev9ARpDrDcTZ6L7uZecq",
  "key15": "2fe71c1yJeTzjSLu7Vx2Vw1Bnns14HLQ3zyTSWGoSLBaTPKUYeyL9jWHdJbKWhE2mMbem2PV4i465bVcZBkYV9o9",
  "key16": "oWkgM6Va5hX4sejNZu2i3JuFRUzSCdY7st13LdioezgBmUwgmD2M7eqHFP1Gb8d9uWfWMEEtvsRpfRw2jcFEu2B",
  "key17": "5RsiQfjtCAPpCj6wQbqEtJYPGoRoPVoprkzg4uyAcY5bbRCnx8yD2ako7JUBNzF74XzoyLBmAoHY1RkxVYGRzMvx",
  "key18": "2PZEQHjooCEd8dfrM17JwtkkG7JBjUiWvtk88ZEyvaLNSURotFjBqc7Ud2LivGPpxdSXEAAmFFSFQvqDFXPiVrSj",
  "key19": "3UFmRHv7UmXrM4mnDYGb5zi2oLvPQJzCAfMPkifQ7ZpuDiZQsrFfWfVA9KR7mqfHEKzLdFP54BacPV9Pod1NiqCi",
  "key20": "5H5FeeKb48cUEPd84m4qokuGxSe4ePQoasowN39pyRno1w48HHbWnNSrMkeXXsjxC9cQ93JRGFJnn6PuTNj1vr7c",
  "key21": "5QxBTDGVAooYufx3ra2q1PsMVvbPrmYBpRyKXrmKETCj1sEEGmHVoF3RuyE9mDzLJaxic2bAYCqnFBCeMdt6ZARx",
  "key22": "3n3AoQ2jy2ts43ujiLLzUgR1o8rJW9P5sd1fckPS8QnLMofhxGtcM5FcYmRXCGBYQPBUWs9sNPUY5rNWGxLKBk3i",
  "key23": "53yAqaJKGhZkW4wDx1wTRwpNGYSKjjJSJwRtrhWDfhdzZ28Lj4EmoFdxPCJ7oRVNG5gvw7N1jNe4e7E4sw2ubRtx",
  "key24": "44Yc1TZLGaue4ep1phmP5HjnHGbmGBTFxhj2k7Cgj6EiqKUhkamv3fAGV2d2SaMVdBMA4JNJ33YzXA9UV7nf6eB2",
  "key25": "45FsQ3bfgxJZXmktnmFX1EvYYmk8zr4nWiqHn41RBY1L2FwjfRVagxUWzkxmMCGf1WhnbDvTLvUsaEttWKGJ8P2E",
  "key26": "61aeuQ9yqcpULNsuZ3YHpa82A15tJW2e4WN7e6GKMRHuN3LWcvRxBisLRTKJtKovN9VduWNTgamamE7Dn72uik3t",
  "key27": "2m3KHhVMVqkuLkUr1ZEhCtWzE9o8PhNe5Q51NUhqiHztYVnTDZF9sT6BrDQ1N94CPBr7izfUWFTYDyGhHmBgCPnQ",
  "key28": "5JhPGBaewrqtzw5tte6GPZYEFdRDPLmQGY34NP67EePdFTpAHgK18inQMpJz5BLnmehzo1jRt2nQguv8FKK5GUKo",
  "key29": "5MWDGFVcQ8B1Ns7M9RGCyS5tbsg5Bmnp3zxczzhH4z4kzy7qxDG3zVRvNiSPUgBEXm7LZZmPaoczBB5vifeBSnkF",
  "key30": "5WT69JjHj5ZtQQuKHT9FkbmwNXeB3wQ5cJd59J96W8mdsKQZJpH3dytr3FWKnEfWsqtuzAWR3J3euwZPx12mAuDZ",
  "key31": "2Vku3uirGYAbB6KBStU96xusTXYhvDph5ix36tycwTjb8XvW24pmbNdUcin41rV4h3f3wiooGTcFzhdc7kMRPy7y",
  "key32": "4oWt7RjFHB7tbyvBFRwTo3yFVXtgHccvfRyKTzhgBMWdrWqQv6Sw8x1nPUquCR1AcXmh2aBon1d5HMqBGxJg5zGW",
  "key33": "34giiSFvWH7vb2m2Ct7FMZUFUuywGw1mL3M1RwEBm96Mjv2WtfJm36jAzHp4ikfDoqVdHV7kq3gwwPwEa7K9dJqv",
  "key34": "3jHtgLcS4LCX5SKy9CBQpqRu7jrPwPW6q96T3qc9DN7gJxWgpb8Bt3rStodvokHGcG7PqUZAAjMtNPZFPXGDXcnC",
  "key35": "FQF5hYhYKw6aKmuh8ZBBufkPuufhYReiYCCdWXpdeZ6GNKnw2eFZqJvdPxErMq5VYFork1WTF8UbC7LmzSkZQTt"
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
