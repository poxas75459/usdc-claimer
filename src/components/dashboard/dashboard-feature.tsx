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
    "5bepvuvbnMqCwixyVgSuYTG6U6TGJo3jnR8hFLAgimAYxWxd9wUMkMcoJwXMbmaRqL41mg2E8BLz3AfJpWoPrfLX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bKCzXZzKJkk1LVzfwUJ5qvKAxL5o11UviifZGSGuChDKrr2K5aBtT3KQrGMs6DhP6jj1kaLCVxWBkRSESPxXTek",
  "key1": "676EZbYZfniRWoz1qK62U2xZdW3PzevHRZMVGvrjpCpjhWE9TEM8v6vC48bEHYu7JdUP7XsnK2ctSwMNLvafzCMy",
  "key2": "gFYKQi4LqNhCD7Hmj63nbLvGmPPEivJtVih6CgyTFc7xkePpVpizpjQQi9g2hffZtaWk4eBNyDxdZLqfsdf7A9V",
  "key3": "36WscKCSpLTV5BDK6jj4cKuenkXtuZUv6vUpfZUXNmRpLh9kBRW3vSpBEMiTZNJA2Ad1JxwfvsnK6UMxDpt1pm6F",
  "key4": "5GP98dT5naXwioYqMTVh39ka95ApYbRvpYnfFkpCEFTFZUM3PxDYXrwQbYBegV5gT1dS6Z5RM8LijtBpM5QCpm6d",
  "key5": "33ZKbfbS91Gf3qxbWeBFwPgLbJGJDnmaE99F7evfjJjLURmAm1RBufdMqazc6ptj9Yi67e7ZPuzrsVpHf19zZJC9",
  "key6": "2pjAQjsbEnqwwad6mgokcvdbseDZu3wmZNeurL69mwYBPuqQri7BSMLUPUhcx2UB2S71WpKe9apmyUR5FLobffRy",
  "key7": "3yJn1hQd7XiEZd5JTSxf1kCB8AwQH1TXY2NFzkUPuPUHBYh7wqJMw2R2Xrt7yae911Me6WXx3QkefPRPk74DXtVz",
  "key8": "4St3YPLhSz6hkqop2gkfvFTo6voYnPZGjuBCvVWCVCpU7Sm6mPvd1VHoQPWhoBmoW2E3Wiw9mphm2sqTk4wocWos",
  "key9": "3pBfmpCeTQhhRJiogSCwjaqiPD7oYSCE4yJCbYJEnQL1zVFPfQoDsxG3LGTGERycoSVsSygDmffWx18oAKdt4UZF",
  "key10": "ybY96jf1X5rYvP8b6GzGi5sf5nnGSGVHe7Zc2LeSPRTJRp9c5Vt1pgQCFDs8eVcXJMCYjRjhMQwLzQQwRUVAoqc",
  "key11": "5PBkVtSaxNfiSDc1tsHEU4tToVsszn5MnVEHMzqxi5jPYJszhr44wyXmm8arb1zFvtL5hRgJEhUtZqhimrPrcupv",
  "key12": "3bdBhCUkvsYqzHBMUYzqgv34wVLfhqtnmvKb9GbTmYW8V3fR62rtFJo4FVVXRNKvhvFrp5v1D7tPmUZgMARqgLE4",
  "key13": "57T6SYg5UFrVV9W9YbGTaaqVN9Xcu7ZUVXjZKqpb9Rzb3bYwKKhWtP8q1fwaLajYj5NnWtGY5wHj2GMT8L3z9Gb9",
  "key14": "2dxMEZeE1WZ1QdkWv4tsn5SCGZPfrQ1RgtiG4LEqRdHEsqwKicYxYswze4JUSr5guWHq1YEWHHoVzV43r8QHXjwW",
  "key15": "y7mK8TaxPc1kwoq8itYbmBexr33phsqsgjnmWNkJqCymvndwqQEZoBW5C2tHyRXSc95jsSPn4bMgUkqxEeHeWVa",
  "key16": "5agZKsdAvHvt8pjvjmCoN5ToR5YsPHw8PBGHmMhSxQUNNTa5FXTurYg4Fx8aQQxE8LPabbbL2gMZ4YC1CFwyaJpf",
  "key17": "3VxJHmJXZgNUZHLESeddAtQbmfHRciYvcEaK1cQiYaRbm1uWCTRyHkzzrN4yTGwPyiXKU2o66Cv16zji8b43hpUv",
  "key18": "5o4m2t4cN46sDMeAr7j8Zn5HAj2B56paxa6vpFNYJaBuxYGZGkiKFjHJgRwcbXpKQk7tQbSrMH97BdRt9rwvxJCz",
  "key19": "4hSv2eDkEq7fg4YLVGcT8mZKazmEc4XahpHFdVJ2da37eSJzxL9qq1GkKtzATXVbnahE1gzLR7CJ3edaFx21AbzL",
  "key20": "3zwxrXy4CckjGLikDS42L9VNFJT6d1NNZJfvKf7mMGHfW8JaXGGJw5AJxfuBbaCMUBY7pTyExLwhFKaFNNK2WnMb",
  "key21": "2PjLRyrm9jtNKz6njedEj8RLZfYWdjSMEweYvDMFHDjPTxAU6M2svdcm6JP4H7mVuzEMRr5yaRpt4RrxApeBAV48",
  "key22": "49EwDtRyBvXcVq5CiwgLKQPcfmXEGALJAv7FrCtKvv9w7J7PB4utdgw9Y578TwzcGNKC5h7cF84TV1Z2Nk1jSZHC",
  "key23": "qmztzADqbkGYpbiNi5J4PYaozkEsqstmYgJhYpp6B1ANfdBXiMEE1tNqjpad9yfsa8TCePJ96YcWuMU86hKjtZF",
  "key24": "YN6yTxyCRqDCafEfdraAkvcn2qSXEkTwfcjCm23G3vssJGecniydhmWz37xLCc5wRbow9KhnAAnTs1oLdwNaQTH",
  "key25": "2qD32kGtao7QZ4Wk8Sa5EZ6HezQ513BLy8E3jKkeNV23F9XmjnKeqGT6KGutmFPJfaiaQ8Va9gEPsYU8MP9UoB2b",
  "key26": "36ELo1tYwD6HkdTCXe6U8GQkqRw13yRRpxC6YywD9ozMw7xKkTfbMMZ9CF3PY2VZbAygMBoqn21vZRFgvEiRBt3D",
  "key27": "3vpzkZUmSfW8D5nEPjtHW6QNQgN18TsJjBF2pz5K59VnUyXdRT6BYxUZCytbyJZpQFLmeB6s4a3oKdh4d3qc9soB",
  "key28": "2Eh6G6ZGYDvYW6gHYkqdnRUmnc1VvQD3NoFqznQcWJS1gMyYjRMkfWkSuXzLaWVHVT3BZc3GTioX2cfjhNnMFM7Q",
  "key29": "2GjZd5X8qM2Nz4QT962q4o6weiLdB3nBAWG32qA52BrHLJbEyed6xNqLz1VKXEjcMcSexYXeK6VPz3b5qNG5G4DL",
  "key30": "3sywU8nvmhuYHEhGcYujgRhonKhX3326YZmXPMoRynjm1VbG5F2QrVVNS6hhF4D9x8LKC6K3E2wBQnu2wpLgi6A5",
  "key31": "4KgcFBNdJW9dMKiyTdSdXVYLAEUNCP1xrZJTGeJ3ss9iQzu8GFe1as5HSNUtaEHKrJSJVBT1aMKFn8pL9CN4WmGV",
  "key32": "5ANkj1dTuGPiXP1gaQV6VXwP2paxNsVD5gtMPipfYopqM9d3kW2UDFx7qwaoExTAWdyyJRfgrtzeJvLm2HKDTn97",
  "key33": "3jDo9Q63ehyAMZw2nBZJNk36SfCviSQwmtFrQ2aS4n89eWiiJ5D1GWoRnGevXUh33znx37hKWvhfZzCQWjEwMkKT",
  "key34": "5N8AvEPatmap9G1iVt6rxTt1ZiwQWihSZCARvBpZVh9XMY9wPLVF6JtzKUK4cVL7zcZ1PKfTXpPen51MKjJbYcTF",
  "key35": "4hstZaLjGEYND2ZWarEzPhbrSsAvx1kQeMmQTK949GR1pdqDNQ4Xo24zaoAGFaKDGggYfs1C1gAQBJTd7XF6NTo1",
  "key36": "5WSaqU7TWRBSazdcijkUEtRD37D5VM3d2ApXRQkUm5Mn7hWn6C5FrBxd2MzDYP6zYnmnDPC1F3NtnwfUEdLSuTLN",
  "key37": "5ts5jWmxJTmYwwCMsd9buysYoiobBTYp5NqMnznAtvrqFCsUxbUtu3huUZyXphmbEgHuKsFLuomjszeSx9RdaQ9U",
  "key38": "4WcVAA9MokNhrnPJfKZ79rSsJH5AApUBah69hdJf3QMNjndYZwCs4g8jRNmeANr18DxJ5igKK53Bn3FWHEjSq8QT",
  "key39": "61dAUCmikc448cjEG5QdGDNkqdnUgcabPjrr6asyd9akiYxFddjCUDGeYVrtUVoYbyeQtFeQQhmhL2HhcDtrbTEH",
  "key40": "32bNJGYMhXGezaBmhzym4Uh8p9hiKqkb1P3praNpgUTP8SsmG5Q1ws4PRsNRCvGiNj7LPhoDVo6Mu93rBM6hJMWz",
  "key41": "Dku8weK96Xc7r4kVxihmkrSSaKJ9F7nJZesLgSRxppQsb4mDux3fjDDtzYZqpnYCqWN3do8TvyBG45tRnpEm7Aw"
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
