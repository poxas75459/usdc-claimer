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
    "473n3SjtjMz5AhVinMVHfzCBe4ZxwSa39uLkjaykKCskbAg7APY8GHeLt2jhfzvc4rTPbKNrQbueyVffe8jWeDwY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GNrBtVS3ZohbnSoSgs7e6vYG4STqfsL3uEt6Tc5HsLQyb6jSGxSnEdGHVRjoaCn1nPDY1GczsTs6TekJh9prXwm",
  "key1": "3KRMRZp5VL74YC5ALBqoCA89iE4K74xmm6DZdCz6iPxCHnorc7xfpe35Qk4Lp14FiWPmwMMe2t3SN4s5XKQdBgt3",
  "key2": "29RJBSRv6v85b4jB4VkL3hfevYhh5bz1UxJVLXTNjvXpooWqruyu8dJa9HPjmQ8iiSjZzjeRWtUUREkthtennvQj",
  "key3": "3StRPTPxXAaDa8Ue4jZ2NWKRiPfahUbB8tRUbStHJRs1Vv7Fpwg1uxEQqct5Fx5D2TEQPj7pwgS3QyqdsPMMZxVz",
  "key4": "5WeiMa29WxrD6g4vLzjPLYgvTqtbADKXqiFfMaRXjCskhm1Y6arGj25EED34Z4fP2UcDbHRjuUUmn1TECdzNaMeD",
  "key5": "5iuDLH1oEFuTgsEFdLMjRiRzF1pZoS3bwkTWKmt756zKSBWM8cFbK6Md3pKKXo9MpgctW48viFtcyQLQ93nJHTJN",
  "key6": "ZnvUbGqhkufcQ9c8tRzL5S5hmy4G3MJQtAAZGzKAsdhmNt1cr6a2z6pjpTsDZ7tskCAFCjFLyqJPEHdAGRL9U4h",
  "key7": "4cgtw6HPbu2CCoMTwAL7QVghu4b9VAyKRCAEmiqcSg1MzQJZjVaV8GGS5fHyouRTEJHitEFwkEibrK7tX5FwC6a6",
  "key8": "3v63RAdcEHvWdx48tG9A4i6AgLL8AS5Jd726RYkXTHhU23uknLXNBNrKerwGkPXFuy164mdSDZFTPesKMYZKxvAQ",
  "key9": "4FLq44hEgGLtPBpFV5XBTV6H5RAkz5vEiNHtVMAtETWUTDQcoE96bVYtApVNTDUvFxihnhDDa1FcqQUKtV9yxya2",
  "key10": "9X4GiA8zYE63CBVQrWMfMfFRWxoXK5v3ipSvz4gV3nZoPfKbzrG6eyi3heCmZF5NpQa6HKJwFQnDezL7i9B6BAw",
  "key11": "5fveKGddeB2nnr2tCGncw8EFNZ1FNp4w83wcDBovd6SqpYNq2Ki9ZFWBa4FwWYhYVEwu1jVzusDxNaS6fSdBP6qH",
  "key12": "4KrX3r1pvgZ6i2ohRsuRXeXFoQ7BAxW8FbU7A1KgwcSnJvrLAhfs5d47zc8dNbF6WtaHauP6gMAwnjDMwwPsTFyQ",
  "key13": "5PZZdeqMiJxrE6Vseztir9WC4KAtbBqzQu9bQDnU1DEXNoRop5rZMVqAkGtFTY6VVXPd9BoPgsokAbPE5UvuvkwC",
  "key14": "4sDm5rCftCyzcLBSX3FBqJqFj6soTZTGSbDmsATGBk1TVLBHza3JdYQqKRWX2fano89q8brNe6QA2H4Kj735gNev",
  "key15": "rEH5MvV5hy6D8GhmQTTkfEN1i6STC3BsebBr5q9P1JzZ1BD3VtPKkwQzyLApqgA5mVnuj7w4FGWHDShnJ2iQrb3",
  "key16": "34ceWcU6q14K3MJjYN23i9B6TMcN21xUiwoMfViMaSjuipAGhu4XQ4ZLj8SDYvDak7g2wmnr1YGHC5mPzwKN6kMU",
  "key17": "QJW3FyiSthuLx6oMzLjAKS4hgMXzBsKf6JAfq9YLJWqgnKnXJUyLjzMv5ruE26yFkuzEdgUb9GuChkZ2nPmZyNh",
  "key18": "2E1ivTzFhzRB1g7Z1gu8E3KR3XsvYwDH5TyUNzv9vskisZeJjJqgpTD1VMDcymrDAnx4YbkDZsgxxLh9Q5X6Tk6S",
  "key19": "4ytZNqAhVELXZiV6QjfsyBMi1BemBMzQEahPkhFkAVpCpSwN1xZ4f3C6s2oszgWb3kd4EWprcYA6SZPVr161PPmj",
  "key20": "2PqNwJ4wdUVk2nNywRfXTWtM388eZtbxAYpmZDDUvC5SJot873jYXD2tSpNYP1fytif7QwvYpRUPVbiHgYtHmHRF",
  "key21": "uyjd5zMD4PeTXjxcEpi98v7e4dXPdGgUyRJFVKr1Ehw4V6if5UzYK6WLYM45Fbvqc3wxi4hoFgSCHmAyTbAqcWx",
  "key22": "5hVPQzwGe6mP8NuMBdEU7STtDyMFNiN93H7tkrf8n1Pbr9JvcGGRbSAKTrNP9rGmRXUHKUa5jTjL29S6ydoeDXLZ",
  "key23": "rBDQPcXikqdrSmwsoExoWJu3qNpSUjL3bkWCgqAQ35RCotvKkGB6jzVZme7YoRvDikSxEMpSW2ngx3q3Y6esWZC",
  "key24": "5TmAvvJDrmHzYSJfWbcfQEM8zM2xRUGo1CNeWLnNzRn6VGqyj825GYiF1ye21tntbQ35X98aQj2R4F6Nm7i7jAn",
  "key25": "3ZC1g8PNgGf5LH7R373WFvJsRRdgHjMVRCJGRHyyQfZ1jyeLEoVemksRs8F6Fn29P8p6kToGJJJzL5kdxNgB1pZB",
  "key26": "Ny4yoXhTpKYsrrhBM8VC3vzSyaJf2ZJtgWvs17dUx8DoUx61oYhzzFwsCmaFBd9vDjeSUushPtg4RbBGL3VnAEE",
  "key27": "4o5Cs3hSw4KK8BHVWnsmN7Nnhwbs1hRHzoAFFCCvX3a1QhQ6sReMyvtnAdSBq8d8NqSeEBaegzwH8b5YLbnBLe8y",
  "key28": "93x5H4V5aLzVTcxpTnV23q84BreHV8stNifQVTp5HJrtHLSQS6Zg7a85FcD6jyZEBU1EHt5vTQ5JzqZJdXhDka6",
  "key29": "5BcrokVuLwQnT5zsA5rmUkGA6v4UbhLBUBz8YTE88oqHaAjjorcXmpkkhR4QJgecfvYDnSMAe6M85GunKhSJ8vqP",
  "key30": "2EwURVz9odSRb5t6X3KgFDKtgig7Tqm38GVH34rFXgPA5n9dSYuEZGqHhi1FveUnCoks5mgB8NFbH1sZbwA1bV9w",
  "key31": "4uKqtGTCeKbCh75vqHE6HYUFhxCgQQ37GEkScJYZpLwzUFzUnitD8LPt2ECxX9TUyJxDtrtogLSJg4tpRjkKnQEt",
  "key32": "3fXf3Nbix18B7DYFPr5xbEcvkoR1x315yGkeBJA3Dc5C3Ho9NLBywanA2ZyAkDemiZT4kHWtD3QTngxQov8eP5bN",
  "key33": "2Ee4oQqh1cCJbz6zvcQZ2NSRRG5ZQSpSCJDCgX4WRUyjA9KNKwK7fkxAE4Umpcji8uQkwYjYupKiwD5YJK9bJCGZ",
  "key34": "27c4UCvVdMiGAzse1ag4tLzyvsXuwHS6fviQPdVCc9FLN86TNF36ntXKgfkaNkMnPaBgAvPhsPoEYi5e1SvyfVJA",
  "key35": "5wJ8UwcJ2c56QP8o8vc5RrDzGMFqTiFpGhX1SL5aX8kXaooFkptJJJAzczW7br9o9juGNrqZc9X2Wvk2x3rWm8zd",
  "key36": "5EsRb41dJ6xWyCKhcpjn9KfL7uCG1Ldw6gTrmTQ9UKptjRjPG8Wbr4VmRr8k2dgYpbnXdMbasHnfz4czCT4g8Vf8",
  "key37": "3336V5GGGHukdQvh5wXdEeTjzjpMyjEMco4jP4xpyrTQH6JBmfAAtvSYFmxM3L4DqMn9VkVWwbjqKhsqczex4ZZk",
  "key38": "5q8MyCqb3bx8G3JE5zNize1VAPbpp2T1ergkNQqg6hxpQVj9buap4cpiygs682TRcymfvKnty5nc3h1WBVXtMF9Q",
  "key39": "2e5u5XJZAh9CHTPnMkaXmb814dEagnzSjxPzYsMEBDaJVPYmnQBGw7N8o1KH6cFcZgkfSAJjLFQqrFBxG6iXZ8ZG"
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
