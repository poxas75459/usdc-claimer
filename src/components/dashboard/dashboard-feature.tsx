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
    "neudpcqpSJHyoiWJ2xiU5WqWzditebv1BHzTAZBopdjL1gTAs9bsC1hhbvnR6eXdyT8HoBAKubrTBM8Nn88ChA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Dzw95Wkbzjc5zYhwwKMQJ9HpXrxCyDeAMwsk3EidwtoQ5uiMdeaQpMuMHrAjEGNFtLX4tHxRPKfFx619tWYSQVR",
  "key1": "5j7ETdGgM6AnBxq8CYqv86K1by2ac1d7vi3GgbBohFTMb2NLVbQj58VANnsZYz5bQNL6RHEuE9zKSphueF4Bf89n",
  "key2": "4dnRaRPRZptb4A6SJVpsbFpE3EHbgmgZax3bU7Mfswi2bzSEkeueEYmBg7E7uKu5DAjdedTeu64g1d3VUEhTZs2r",
  "key3": "3iqk7zUPMeyJBeJLoZnis4VtjjCbZRb6MgJJpyKeHLknxgGJvmkzECRYN4zMGnM2j7Xw3aM8ri2VPh7C6ux2E9Wu",
  "key4": "5uJansA4xVRnpnk4Vereh5p8gZA4f8SAY9NFjGnVt7RpJvx9q6uY8pN6V79rfGQUDRdfX562mgfLTrxm94VWCTVG",
  "key5": "3efkv1tJQCTkAHCjYsTZYpUshU3nxULPbY2Cdun2LFaM58MJwF7bAJeXYxs6maaCGrVixFjoSoXQhYaVdvfMrzVB",
  "key6": "4DW3p92ZoeH1n1KKNgsgSiozxSxLogFC5cRoxKNLRRXEdbhdTBZWxvRg8QqmJFLRXJDfQu1NCc2k4gmWdvQNBi2q",
  "key7": "5tHkjj8cYFDwnGpzNCYjjn1ygHsU4Zo2bYMWvGoaMic3epdapV2P8kWwoEe88Me6sAKybe6PAkoPmtGjBKBspfoN",
  "key8": "RJRW66QqxvVNiCNnX8SKUsqreQEkHa3o2mPtwNaRDosWnyLeWRrEA5yGuJfqDPVjiT77jZCSW76HKrz6zFmQQpQ",
  "key9": "4LFn8YgdFGmTc9DskSU8ra3YNDwUkr4xRwUBnj7xtxhgDHpqURJQyZwCiCygdYRLhYmNtRH5iPkakXPzChCQtxr5",
  "key10": "3QAoBj1xupZbHbRGJBgHun6ptvctwkKnifpxivtRw1WvQyho8HdzRUwhbZdeu3zdzw1BccZzSmE5VAhdjafTLD5H",
  "key11": "2Y1Gcq23FNaJntx7mYMkJXWMRjUNzP4wNkAMxnBKX3uzKRBYt6GfxxVYCAjVgmNMfNyqKf91nMbGp5uJQJLKGiLZ",
  "key12": "4aBdoBGmswnBpuArvykzWvPpyU6mQuW74sVsijmnCQRU88ysaNxKyf8Bizu12YEeVJ2LHnnqBem55CayeDD8Pv5j",
  "key13": "5nKk5kJd18GtKbvb95Pinno7BBgH7zAqpapgmnjScWfpwQ5gLuGTnSTu1W8ijkDvSMCKv6QMfy7UztHFWJTBEb2Y",
  "key14": "RVzzGEfDfDy7Bq74MGatEV6nzuS5yQgqDK8Vsj9G1MyugX1UqrbyCyPo8P3bLk4vmsSJPof9qKxnwvNeJACEoPX",
  "key15": "46uhoMTBqHUGMgnfWo1g3fg8k9x32b5U2Xhu1hLPpoymHjnQio5FrDvBTjHvtHoeh4VZqjVGf1By8dvnNn2eaf7Z",
  "key16": "5vrXN7bjdBwfj85epHHTdrTP3gv5Zez2AjkDRe4MCeAhW5UyqA2KPH4vHhNZkZpeeZXZSjPjMq2dkAF1KtDei4xN",
  "key17": "Sm8CqHrR78DQTyenAAJEb3SzAdvZYcfTewN316bADEs8zEaEqNQFzr1NTVe6gBUexisEVEip6u2PT6b2w8dx1Bg",
  "key18": "2Tz4uZ7ffBZmuCDEToWKCPYgBqkUQkXU12JpsnJWcZYtCt8EUACMu77gpS7cmy4kriiw9Mrs9UuoRFuUsrk59cXi",
  "key19": "5i1Vpjz7KGYUdbJVEYCSWAfbEfjxKPs1Aoa3zn3jArxiHmR77JeLCwAQnoFse2woAyZJJRAjskyXqjC5ynwVQq1Q",
  "key20": "3bA42RoxC1mZqKasz2bEns2xEaKC52zeKsdyQckGuToSpbqmpeNy3zkzcwsAbCVG8qHQ96kqnJfp7pCWs7hpJ5Mc",
  "key21": "5TTPJtwmobBfojs6ty5vcFrUfahGXeUwpSLaYR5QJvXJavdFf2iMLx6cDXVgm39QiSJUohSmH6LzuHzDQgjEnaV1",
  "key22": "9eTeXw5g3EKpwKFoK328YpPSbwyR9ZXnTxvCnb7qBGKuwczuhfiQfXV4WehxX5UJbt4GdqHhrNRtz3ZJ3TA4tuK",
  "key23": "5dmyAA1R829wiKRCRqQfuUoURJGRFDsrHa9MRAasqMdxH5YRqMJtvcSgheT3jonV7bn2BP6VhuTsVQPE6miELZYX",
  "key24": "2jdRbSamzqxuMcdSYhze7oYSsxAnD13kmCm3kEfDQj3xQ7Zn6T4d9kVjCf2gj92Bs4hTfuaLv2ykEMftXgysqYAd",
  "key25": "2tgDRWoQHCMJ98HbXBV1yqiUQ2Y5X8YQrtpEne1dBqBab3sC6n5qYSWFSBcUMXxCQG4gUeVJPc58oQwLcwWiC4Dy",
  "key26": "5R87aiRG3njjTeSdkzMURVoVppQ1mn4kLgpELmoXfnBA8NKzns3Y3e6F98RGkg3uABttwyKa6aDihpi491P9aimh"
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
