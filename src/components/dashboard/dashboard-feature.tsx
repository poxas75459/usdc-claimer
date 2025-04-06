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
    "57wVQvzWLVbbdT8fdJMK8Y24jwPixYcnLo44ZwMh5bBaLswjs9CvG2S6oecyUVGaJF3VrokmXuFaYJ6S6YYS9Gh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31yfzmTCo9W7as4VkVBV92qqeKf56ms95HmEFWTnEy4o7qJJ6hqHRYWiSNJ5gK33MKwe8AicYryZiungxtsMn8gj",
  "key1": "qbXkadpsJR53L4cCTwxeAZz4aVHKPCNE1rq5DCfzsE4uZ2f9Q2MAcmGa4XU3BzfKaYgFdtSYZMATGfBqJ4JZTxR",
  "key2": "2kETczr6a9vBTAGH7K3pBm7ob8NWQgeK9xSqP8gsLPrqH3vPrGCj7bpuv3nneNkuuYGbErisB9xiLHJhWmJqfNre",
  "key3": "2TFBFcdrEsreCkAcW2eZ2t3FZdtZbjzGm33SbN1ov1FnPxq9encLXq32BL9kK5Z5e6TG9fMRodpJYkGVkBGKPhrf",
  "key4": "3RL1ZWKMnBwwCTMGv7uoSubH955pwVA9oKiDTQ74kyQ4kq1WZEue8etdGFg9BR9Q7p6ukp69Qw5fkFLoiPdDDqNH",
  "key5": "2QmWHZUWW4qS1C9U6zReQtEcG99CGyG19NurDspomRGNUZFo7QWaBai6rykwaq2nFbzoe3E1LmCRZjxaAtwtwkHA",
  "key6": "28rEhVbEvrz8e3Mv8uFsV6FsPkvttVFXzapoJrRBnRedvEj21yszNmxAUhuUXKyTYmXdLtu78w6NJS15TSm1Tq3z",
  "key7": "2DLfNeH6nDX7X6N9EdaGhbycgC7YMQGwhz24LStTamuXtvcB2mWaiGB9Us2MChDmTbSK51v9bnbb63Xr1xUNw1V2",
  "key8": "RH6bpc2hqdB9V4Z9UZTkaYE3BmGrpaXxdW4xFNRgjm4qjjdPqBbtXMbehRYbaDBYqZPkALF2ucu5Sx5dDtKS6iU",
  "key9": "55M3XmyCJDox6E2X4MDjq3b84oqJwtkWqzZfCgAUz1AdHxkxPD6S4Fx6aS55AbXPvTFfUPZ8DRNNjowtRPRcJA7B",
  "key10": "t52MkqzeFKesckHFoqrgg1wdS2bWR26aFKFdrf5d5XeKf1ghemTjSXLioAu9FPfvRoS8KSCvksjdPpaoEeT5Nrd",
  "key11": "21hZ8cXbEn3C6U8qzR5MkRqqVuoiBCRnQ8pai1TRRkGCygxBA6Nqayp9taoSxBp8rALXVStKatCg3JEuw7V9Bhix",
  "key12": "4N8E86ZZJdMjxpFFzCYNTeTjmVQCemecVEnSYgsBt1RnHo8NQafmmhTjdq16udjbAomuryxLP7Porx6hFtaNqjpY",
  "key13": "3ygECWBcNrC3vu88VVXJHJ4qFwcq8yTDrM5UPVUH8qpZrQNTYXnnvs5EGAP2ZhJ7SQWn2ERjRVEXZWN5LPQPwgZh",
  "key14": "3bTwVTCPe9tRzJ6scSaNqU76JXEj4LRP6L497RyNZjEREs6emJyGuPRDMXeM3nHKs7ASy3aXUx1Zed3Tso1WiPc",
  "key15": "4XrFoBtzcD9vPFEw5f9ooFz5aWHbbPSHT8sg4bth6Sd126a2yjd9Djcjg3qgVgQ5MRu4xjXuE2HRgAGS9iEGnJKn",
  "key16": "4hWTHcqW42TYFTGhx6XdP4TYqns25WoPFC4PH5iXKbgKwurM9ZsNXT71SqyaGiWwoFcSDfhzBCbyFgSuXjjneqyV",
  "key17": "per1upsUjdRFiaJSBUymcbecUzqxhJCzKsQSrwbkpRkwRWTnwk4VRwjvsBwH1J6PZ5Ft1Aovt86xVR3fS1VwnXU",
  "key18": "aRgiR5jMbSbd5JXTsMidQsGRMFH258YCa3xGW1PDdidnQqXQD6Ri6UN24ppr6GTUSHaxgjD18Tj2eXJXmfc7yYS",
  "key19": "3dAvrTqvWwEUdGYjAMKaLKFXfmV1SWvV2iqewLN8tZarDnCWdR5DAa1eWAs1mjA6bhoAk2m9F5hawqdWvmGW6NDp",
  "key20": "2mq1EG34Y6YUUUDYxLx1awQZBZJfMdnx16U5MMWYq4WvD8Zi25eCNeEwHYNUc2vbjUBmVkDwVrQcySiqzoxDANGv",
  "key21": "p8z1HgXFNsJaZL6mxSQ4chYvYG6Her3j2KhTmEP5rjyi38bKWiqW7aK532EzQSttEDExcTLpWXcFzcjAdV7FAk3",
  "key22": "kD1DcgqxFk7iJid3QZHyLU75LQWaa9XgdUAytfWW9UX7j3B83LLS4RuZhnHE37yDpEEBpQ5nH4iKHb4v86LdDWm",
  "key23": "2deetSygJ8ZAkEHpEoV5o6DR48HDtamXVtbMadJWftmVAfnHgEBuhiTVf2onj1W3tE9bsJGeq21Vv3wS5CGmfKGu",
  "key24": "49pTPzBiQh65xMXZwfe39g5KacwLyjjJnjtqVfB1NNRwUaAwrKbFnFCk9p7ffEfGLkt6NQEJqmdKyK1rnCBKNFWD",
  "key25": "NW6QD1nXfin6g9Xm7M6Jkc3MkSSVSmEP6u6CC2JtwuY8HAxRdSq7egmNh7Y9cD9HBJT98AU31xvNo7A2RKzWKWg",
  "key26": "2UE7JUaDbLeYu8P6Zgxm2xJSpWtfvBrmUmVyF1mrXWsn3TsjunPd4V22F95qoa3vubMoJLBxXZHgWhWSLsfzuiko",
  "key27": "3RMB7N882xS6R7SqmTojZZcsxWV51sFMXVxf37F43V93qp1gzL6SApERsRU7yaVkyPzmNASk44ZAwfphLpHojDzj",
  "key28": "uv6F8jmD82tcXEL3YBTEPGnUGVUnHdQEB9aTdhmWvmRAnQWgL3pfTuZTaA5b7rNXJVzpxWPYiGcpW147xrxdgue",
  "key29": "2ipfgpJCN1XKHCPsZcAbikU2Er5AmiCewhRhxVrJ9Kaoqbimdu3xtUCAC9dACqbTWK1bPREe4sFDZDop4urj6Bbk",
  "key30": "4UL96mWq2Jtf3QZ6nSS3BgVTRCwyW6cqEhTu3cXj3DQN9W8tkk5YGEhvQTpEtFEC2GJChFpohqeHLru2NWxWrz5x",
  "key31": "44r3T3MUVWHpjfnesSeKFvyvu6dCwaDuA1h4oBDt4Fb7Xzjc4KhFQqJpKG89bZnZdyUHrnTnk1UPLXHgHmbakiVv",
  "key32": "4nvcfQaio81USPRg2eddWe6qUASoH64wwv1S4C81ofLMeZ35sxTxCnHWJwVckqWCyovxZzuHmYgAygBgRmBbbJQa",
  "key33": "5JfQ34aXDH9CAZyaVyFhrpJNXbS6tE25Njqdke2XiLCVCKQCEkisBjoEVACCcnghuVDjZ1JcyTHByz8gJujMGtKq",
  "key34": "3i8GSR8f9YvJTdSGm6WBuQb9aPPSmcmqbpB5358cYyjnNh8BckxDd2PE5XbjfEQJKmPxjm8o2hUqcTBtTJ5yRqbh",
  "key35": "3h1cP7Drn3eXkDtT1PZCFNBEkYEVa3Tm1vpHgfZT7hYsiD6sKREws794BtfYaZVCz9cHD5YyBhL2BNk9pSi5Vdjt",
  "key36": "2y1U7SgivD3UMKPzmQzqcyY1G5suZL5KbD1MyPYCCdqm8NeAmCZxVb6EcnELw3G3vPsxGr4GLBGRG9gGd2S2C3A1",
  "key37": "qKrQ8gnNGV3iaJp5Qt5ggGZ7LnEUDdGF6RXNumgekL4DL53AC16RhxyXu38ihaniFFAQpj2xveDo4kSGuKKv9PN",
  "key38": "4vH2qpw5Z6NpKDxvYjARXcyjq7KPWeCu2SLbWJngdHQ4Hn2FxnqQ3oW8QUg1cNQ18sa4bxinfRTpuZ5CaVUgoi3q",
  "key39": "2CCvd7cSewcK1xiBu3ah2mKZKfhN1zod3ZnzFQqkqMtRbicntF2cSKzJPgHtG7XvVT2agMWyoAdh9jHm5w5tzC98",
  "key40": "2sWDVmHuLx8w3dq8T4f1ZgygBWX6RWKHD62fazmpx4p9BiYsCqpwgWhXAbcNFiVHAsAhuq1EvhiBdwhcD7X3XXng"
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
