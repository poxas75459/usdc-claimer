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
    "3uoRrYQcym4JWkRyxnfB2kRvVsAxWC4C9KW396BQNkmnNGPFPRKuK4Y9aNd6hUSqhjiNVZWT4sh9G1dExJXhW9vc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YLDTGhQkjLLGXPtojiJHanM5jWKwP5E5p6UidycrDctMuyygkQSTX1tp7tojrGu8d7wBrKh4hGmp76LMLzNhAEa",
  "key1": "4YKokkGcT2wsqAvoMZ9P13oQ9dWpesi2BtwTLLknbQz55dNY7sa2GV5V3ceRcAkuAXT217q3FhA1mHWHhAoGqdKQ",
  "key2": "3TrWZ5nABUBHagp2S5XmrfjyoEYs1HeyaXukhjorHeNJPfZBtmPcFbd2KBchJWvFjFWHtWSsea7J8UyrKyB97F3W",
  "key3": "JPjxHdyiPxVHw3zcPzfV85vwTQGi8SpsWj2sphsmL5BHrtB3PXAmVjRGYzY7UdX2gq5fBoeTJ5oV6o8dGRGxp5L",
  "key4": "48Wk78gE68kcPrqyAkkUHFhx4b76mjYh7ACBPxXBomS7fXjm6xJJYZEbnjbK2DiAWD8fUHTcmtkFUqAYZwKwbi84",
  "key5": "3MudgQRJh8dRQb7aCiz8RruJfzWypzGpr9s11PYGvPcHZNn5T1RxW3hDrBf25se3cLixF1ptjfBHmkvmqunmNNyb",
  "key6": "8KKap6JGqcM44Z2X9ZjmrSKSp7crnNj98yPcRaJqxvWnJoPqnJJn4w5pFRJzbSAvazrMbQobw9Uf5quVccxZDdg",
  "key7": "4rsK1qzYBdwoeXL7aD93ogztNJ6VniKXaAo8KZwB3ip1mdw84cAXHGQ7TXyBRasthfRzMy9QQoBZdQXXn6rUk9rp",
  "key8": "24gJPFkaSCLVJThYzm9V6DK4fZWMDSgvvKSiZWTcbmgj1Zeo9o6vpfHCRCGkg377h7ovkMsuTVZCzftZZXH6VsaS",
  "key9": "tWCH7o9iDY8x8brjPiYi4QSjWCdkmHtZmmz3BfNQgtmNEcPVuhiD55smew5ksyJSQAMCUScUYFefvj7nr4p3vgn",
  "key10": "D87eShMSxgqUKkCsrtf3m4qXkng751S7zuu1AvPPHSVuUpkXbyageFY7UKtsEwabNjs3SJT1nHA4GAN3S6oXS7M",
  "key11": "2E65VpAghYM1MkXLcMbMnptAMV1KGWTfNZbDuiQm8evNQNob4wDLmmBPbhq47CJr2W325Pd1qEEkAus7AXTEoHMA",
  "key12": "3eX31px4R4pMuXY3oYDCwWrFa6mrS1fFBCnmGvDKxnDZ8KXVgoCfJ4Tsjd1FNTNzuDCGaUpm4WoZkuzt5svhwWJN",
  "key13": "52NGNd5CpCB1Vn3LDzpLJDDyXHyfGboveaW79UfNG6Xsn3uYFkYPYL3ikSJTQkZtLUBZPT1vWu6RArybn2VMXjwN",
  "key14": "4sjmm7kza6YMgzhtKY7xHB4MK676Va2CDY63x6DiYfhDF22oHcLCC8SkbPw7qpEPkULrP5s1WCdk2gpPTLDdHNZd",
  "key15": "UoaadX1GRppsDyebJXpLg1G7qf2Zh6vFS9adG85ZNEbzgWEfQrSbcshe1LP8DzxYSW7RyA2b8pZ8qe6FjxqxZ8T",
  "key16": "36RBnYxNG5JDVNVrcTZ6S6tA1z1XvNfTh6XazcMK6TKpTcAAC6RuVTnyujQWwbuDCcUybatEQLGgbqJSCm5nfPXS",
  "key17": "4EVarvyt1uEgu17rm4o25wrV76xWrp8vFm21i9Gf9nej12wNYKDtaKzxKhPCmCDiLq2qQGzMpv2LLH2okrqqsuSj",
  "key18": "aA9Nw2egyhHoeX5gjtMJWukuHXVmmnMA3RwzoTqWpLjpyqRhSyGoHYZNBjJfnMYrX7NR4YrW6s9wFY91NWmuvRi",
  "key19": "psERMuGoy3Me9DPLDbYGhD89WDVkdvyGVF7kTgrunq1tkK7L6CfCWDukkrmtzDfvbdFUuFMn1rMt9YLe4Bv3UjF",
  "key20": "4QrH9xR74aT89Mo3XvXu2pQeFNfEQ7ysmvHSi2abuBrA6FUQ7us1Nt6XVN7iLj3wzAkxGqc5R1mywvqLrsPmnGRK",
  "key21": "3x9XEr7YHS4yhYprcy73Hb9hAdZj5bgVFn9wC34qyK37nqsXKpoPdQv8NfuQrDKDiCJTQuu2y6a6TFiqPMspfz5z",
  "key22": "5H38YRyqn8frvL7iqZ5bz1XkgSWdsj4QYt9wS1VRgUmjLRvScCE5XaN1Rh4AMgrMBu2eycJ4w68uVvki9Eb9yfRL",
  "key23": "cwahpDFohTy3uivcpHTW12UL6xbKBj9edqM9bGy15eKTGnhksK9r1agtUyrts4GUUDgjiWVph5gW1DHy99awC1D",
  "key24": "4XToWs86fmKQkzB5q8QrY4Gd5nYYdaEGScSwk4VEgD7n3a8PvxiLaZjGMUw3dBr8xtFPtRc4MphsLZWcmcXmwALj",
  "key25": "2ko2vyTodJrPpyLcfnFMRo4u2naM4AE3pBR7KKpGmcS5PSa8z72hmLqrUEHSj3Arr83B9HPahDJwyhvMXdV2YZiL",
  "key26": "5QQwTJr1a4J94aJ3Lf5DZrpF4bQTn2f3n3Q9wgTdeVhzpWLSKY6DVtvYvPApY5oBnCwUQRuiCaKrNC6VGGbDQgiN",
  "key27": "4RjrNTUdjtE9YZn1j59TorZ7VV6N2sCsJyoh1SAMetvNDR4dmm9w4UJAYNs7Gp8scXkMaVbSesGWd2yzjG2sQhtD",
  "key28": "538RbPEZUmgx3UC4J4wT6TrtXTsXmCtKm5Yi4QyZzr1pMAxHxPu1aZS4afP3Vozx4Aradr3BEi7gZhDcTTjyofwk",
  "key29": "55r2F5fFwJ16ko8EfUVew4zyydmjCFmZqtqGV27PMNE3DMFa11cXahDUYPeiPWxK4uCvoxQnMyXbUK25JCmUvpkE",
  "key30": "4TQSZVSzCK5LWND4FVJwCMCDUjN3DxN6qyoh2rTqNP6PShf9TiRRV2v9uWxHrNTgu62CXSixnZ51EMbMtHAPYiZa",
  "key31": "2XWKQ4RAZgyY2dWMdNVcmV5bAeuTwMa6DjUUdAX6PgoHprDkesHTvKzkbMFinBqGL5LZLySZgJL2hq37rEueMVun",
  "key32": "3GDtn41RJ8BUJZ7cLQTy2tbR6Fdkz8y2kdufRi5UCVKndtiHT7ib2iLKVTjvvPDcNsu1vmssVdYv3hKKRSR7FbbN",
  "key33": "4GYwGFbVYNfMNVW7jYPqYGQkWYRco787Bru4tnCcMdMn6i1rWo8tzrspuKZVzoTD8GDnK8Z3sSfGtjsyVjqnJhp9",
  "key34": "5JhmzdT6jRfYJG1aZJHGWAPP7Rt5w45bK3dkzmSdroGxqbp3uoUyuK6e6WrJSRgi7nr8YQL3yMyTZMue48oFjbxW"
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
