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
    "3hFeuzJgZnPKBnZjWLvzkXeBcKy8wzNNaQVpppxd5tXouNsMSDCxuSJpfun4njhqcX3D9eTKgMNFEtmaHWbeF6L"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pYsR95P1SK5Y986FPnYDRYUHspuHZ4uhS24v5XjJp7K8K6VBfTED5PdG4m9SuSu1SWbupQbrs2kfPb224Yg6P8f",
  "key1": "3LcH2bB8yau1jxu7CoW7aKQoMVvrfaKNAgpAUuetuMfjBjtrcheAwnfwxtkNGKtk2BBkWnRxDjv4BtNtTARYQEZS",
  "key2": "u9CQcLopjsF52GCToFm6xtbJrDBm76hF9vSeSHJAGwyYUPG1SyGKYszqaK91c1zadgoXkhm9zoe3rfKLrus5b4v",
  "key3": "5Swbj1DrJL4DfdnWbYnbvjLtCtQEhBR79CMt3BfgjX9LybH438Q2USQeRKZckc1gTYnLXKFYcD3Yk7N4cC49mWB9",
  "key4": "5Ueg7UNx3wtoYTJQYkjKhFFhhHzSP5VcBhYtt6wz7SpwLq924JgaPHwqqUpu3199qF3PAg6TL5iffttHQ8MH5vnH",
  "key5": "58AW6JGT3K9pEn6xbGPes3SG2Z8kx39V832U8qSBDWubryiN2TMMB7yTDgYPPRU7Uh5f2gF5FEFj9W5J5pc5vJCh",
  "key6": "2FcK642ur7jWJHiVKXNmPuKLfWpmMwV6UEptWcJ4kh7A3yS1GUZ46Tp86WiBomo3Bk58VTnmcaB61euG5WGokqRR",
  "key7": "3tTzmX1sbb9SAqgAAWyV4ijSFR1XH25ord38UcUsywYEqPvCcUkAX7ycAeg4gHoyiKqxEnvFrmqbNQZ3v2Rm92Mw",
  "key8": "2i2WeR9LW7UamWPXGQhj44bzXePfoP7oDf4nSJxB4a6LF6QPJrjHYtyG84ornD5NKvMtozMT2WZq6kAdGXZJugTY",
  "key9": "4X6KqFAVnrV5cS6Qj9ucCbhigGtX3yyvz1Pm92tgUDrmLUYYuPkPEMxJvxCLAbYmnvB4wWgqsgcyXum5cLDGLEmk",
  "key10": "2TUZ3mf6enpMJnmLkrNQ7pJfBrHtXjrhzEbHEbJpLywNprc7V3G6wxhc2d8hBocpek3c8XYDUcpwaeTXLKebnNEB",
  "key11": "3t7geUdq4pT4niUBGsY66c6MXcZriqjHyKrsr3JcSBZxc1AFm3xZ7bvkV8B5f3WEgCYJFzYjnuouTqzK5S27LMcJ",
  "key12": "2RE1c2SubV1BqTmnwnVZDx2gAanzBguvXbGPCcDCj1WTAn4dcv9R9B7oFF4YCVgU3Js5We8sCBBsY3MVpSb8uBRt",
  "key13": "dbBYL18SqY6mEUuPtFqa3NLSdJP3kn3kmqF2yAPo8rTAXDy8dmHUhbNMXBuTrbRFbsekyknsKYuj3kgKMw9JFYt",
  "key14": "3fnu9eajTpLQjZHb3vePQamtpDT2s1rfMyoZayrzQWaGnZHKM4FSAkUm99RX3hJttY62o7ymEX44G8hR2fE6SFTw",
  "key15": "2Mebs8kjSkHKPkSEYeZZRRhTiPLBEUczrFno2jPvBbpWSDT6JGj7WaFbfB3T4LQ8SHDqtHhoGfYAN5kHsRQ9xuMs",
  "key16": "aLQBbZPgH4WGiGTLxDfpXXcwQVB5oB8iB7hh8aQ8HVVcGfQgL5gFzDBV4DLwdTK4pcdwCS1dE85gWcU1Gj5msku",
  "key17": "49afWHX2es8peARTWxrGmR9HhmiBsBs6uHCr58Y5e8B248f666LHxTXJDuTRHnctXJmaNZ3PFNzisxQUWU6efSnx",
  "key18": "322y3nNgmXbPbmyAPDnhEPANaQSXNQAeXXAHFA5hRb7JcaSukQkrdaqdtVxydp3hPDo8EWnYMDcwZbrUNR4xpkA",
  "key19": "2Sr1pobj5txWzhqBDR3n4r1N9mTD8fiBwji4LmnNsLbiNsuVNTzkVQ6UxWvZzWHswqZXVAosSV1Q9obF7F64a82z",
  "key20": "5DtAWpiwbvjb59yXeiKAkZMFnPXECqWCBtBc1QwADzzqoXuBThv6X1haSsKhhpigEeit285CkH7hbtL9WcuSEfPs",
  "key21": "4KkMiX5pdSgSmryoKatGwKP7bSBbt8S4iGkNzZd5sZQcddg84mTRvRg1xNaWQBESkD3tBFLrhXdK1rHui5Cp46s5",
  "key22": "x5A17w5aC7SNy6m4Vd5aZg4qk12Mi7NadjUQfsWYwRyZ7jDtRZBJaNmSV9qpXr2puz242yV2LdCZNywS1rXLYp1",
  "key23": "3sveBRqw3a2FaGbuHvyyTCwA9C6y2XuYP8WfutA278E8t6tnp4x1rqDK2AM6nfxbjLFBXgk8brePbU2KLjWmhGG8",
  "key24": "qFewoGQmoFqo62s6Q9nseNPUhuGbwFrjvWWi6TJQLp6sPuxkpcAosQDfi7uyZKH7uSbQzqTJYQF5Xefs5DvHgUi",
  "key25": "ux4JCdcQBXeyLDsCoaVyTYB1PSGKnetqx2fpLWuEvL4jU9dTuSMEupxjqpfoFZFJSQNRyJYqgRwZz9HCyHPVnXC",
  "key26": "3AGRPpPGLB6yyhWbHL8YSnP9frJ7QkiyQmZdnbKksn5FUZF5TQr2NcxHec2krpE9AwirjGy77xzj7iNKVnRaNXQ1",
  "key27": "44unHMBqa22spokMZVz3fLsM83AfE4qpM8g6ZeG4cgvM2She8QTLbUB8492VfhW9Rc4TH4rAn8Gr3E1LuzXEU1dW",
  "key28": "4rv3Lg3wMtfQzzjTRkjWYCwZawUFXZVJCPsozfYnEkXpioKKL3A8WPSnVrBDwgvPhGUanz5vLLuVZdun4pU2ZnGL",
  "key29": "3EPgba63t9qVRG1awMz358Q6DhhbdWCAbzVwCXFuXRYmWjD2cKkC4uRez8axzgPc5nLQg1Vbr2mzm9P3F5ud7HFp",
  "key30": "3Q6izzb27RSj1BacMpp4t3PUjpyMJkpznQriBo8cGGe4UYdnE7ijB29bvTFMx5bWxkCrYwf8BpDaWVr142CXaAnj",
  "key31": "2357Tg42GGG4mo2ZLQsa4AJFqjktv8NfE1wnFQrUE4vTJwqUvqfikWwTSpHTaBsBo2XEewPkWWbS5ZpxdCvLS2oh",
  "key32": "4ZUWVb8ph1nH6kSdHik4MRa6ubEDadce6w6mBC7syt7dEPMkXKXQ4kqj5qpKtRKYKwym8RM5bPgU1GRHxqrj5VRf",
  "key33": "4b6oHgWHXrx5XNdtdiQ8CVzVdcURBTFEWV4ret1JBq1yRLJXqw6hbfhePEWyeE334F5DaHdfXYyRAAWubdBYaAvr",
  "key34": "2AyRcxJ6g9yMUf53zyWu7mYGxw9gAjhmhkKunVqoTfWKjMCkP57PDeHiobD32jaaWcHtC329EW3Ttm5fjAkVz6S4",
  "key35": "2DmCrRFAjp9EEU4J1n3o9AAbXQwebbXZVdcCo3WbCmxRuaRU7JJ2mjs12rY254Am1Aw5hcZ6q8QpCupRgJaaM7Jb",
  "key36": "2P2q8WD18R9iGiKshBGpvYuNf9UaTK7hiWpKxKUgrxEYi6EtmqfED85bTSjrFfqcP8kkt35TVCgLGPWEncKN78yT",
  "key37": "3RVJx3dodtxMba6vU8XikY8wwcvQhEGcBiPbstBgrkj9SpfpsPb9nYwU3RZdx8z8KHMrQNY2FkQwG1EDMM6cUiU7",
  "key38": "3M4wLjSF1T7G7VwdCSqsm6fZMAgoiZKnEr8Y89UJgkGUbryZNotw6W7HdMSzXviFzf1nAmMWhK8wpG57CtX7JLVJ",
  "key39": "52o21ByiYQD2wS5Q6xXVyL67NUHXihcjsLx4YrHRrzYbhJsWmeYqJ1h4xXJXGPDAZzrwK5TUt3ewakq7z3y5aH4f",
  "key40": "q8eGujg9hb1vtos7q8KTNubs86i6tS5RYeCspnLJSvCFUngNc6akb2P9crMxDs8XXmwb7SwQ71QNdwFmPSb4Ch6",
  "key41": "5q37TQwSy3SN1QbcjwZaqpZnZaHB6uKuD79GzbmJbzTEETw5pBAFwv8fq7ZzJMdeZCvGWuzVdzzfPRVBS1i4n8mR",
  "key42": "3CSrNDXgF7ZryHYva6HMXmqdNpr2vacYrXdB5BTch8QUqXqH8W92EkfKUpUiNFxVtBz2h4GztNu1noiqm4BiBbNu"
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
