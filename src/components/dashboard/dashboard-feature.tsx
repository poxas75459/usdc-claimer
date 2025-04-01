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
    "MdGhLGSSnMYCBemLJSsa4yj1mJvMGiKrRpdzcixJqCcDwpeqDNjmPJmdpXbKZDy4czzLGbEHHQPsB4UvjtGk44K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZT1c9gziN2YmLhxohVK6HZZXJ396mr8taDn4MyL4Tcrqz8JuB2s6HPaxSAf2i5WwB6NgQwKRKSkbRZfydZzt7UM",
  "key1": "2w2zN7uGb9HycTSq8qSjwoqEwt1r55YKDdhqCfF4QRVnQK6HfM6D1iZxEU6WXKrPu5AZbB6NMW4WtzPuaKLYa1Jk",
  "key2": "5mHFr32fFRp7NVR3ZnsSLHeYZXgX7knSK9WkSyzhKdZcfX8HwxoSaf61NNmwkuegg7rmKpL8XiZnQpsYgyT6z29i",
  "key3": "K7jnTe9GHibwxmgSXmHwogiSs2QK2mkFpezEc8DBioGJttLWw46ADvu1fpmtUeVFUaYmmhFLf67RfR9u9CWe4Mx",
  "key4": "Q9HA9yzaW2gzW63TTJBk92mMLY7fmvvneToUWWdLC24ERtFKp9shroxkPFeEVuL5RsjYjWCcxmK9p7QNbFU77mt",
  "key5": "3Kfj1uycDVAooHz6NcTMJbokrNPVYcjfPPgURd7STAZdeb3137YVrxxpzXMYg9CCMSjVfa59pagdME7xrCUiy1rh",
  "key6": "29PxodfjxmLy3dn8gqtvnjx4Zxnt3ztzvTf5EpgR67Kb5NNtQoHvDqwXUeCTa7iPntamFMfJFJh7NvvnNQYi3foc",
  "key7": "3ovptrXiN85ts3RdAkvfLjXx19nNgnnnyDMRbQFVL4mJSofProo9sgP1F3ZzxFqrUqjVvCgX9Hdgpr2EptJH4pGw",
  "key8": "3MYGvN5nHFt2YvJkS8HYkac6iCBSTtHp4ctbBbQLXtbw4XhQZboEFXXBj3PQn41mF6YdZLc4W2sL8rgSv2Zemuvv",
  "key9": "p3WsCxyZtWGvUwm6BREcfhBSoJycP6P4PKV5P7m443m9PMsYfyEYEu3kmjyvucPxQd3RgEpbSQGXN1GUx8yNgz5",
  "key10": "2XyiAzcyqpmFvmA8dAN3P8Ref64QLouKTdt1rzugmTnHxJtpkWczFTF95BKBwGZs5pYD3D9VMwxcYrsoWYEiXZty",
  "key11": "34zVbvPtuihe7VQhhUXKaMED9Z8UDtScAtrm9m9riqUgDqn51rvPfCC7gKNv5iHQTPWDXrySyK2dVNDgRhVbTDmZ",
  "key12": "2LB5V47QpY4VnR1wzMczMqdk5s9tqeAYPGW8m6ttQS6zrwpnWMqJEZGLBTFFEkoTmqkecge1naY6Z8KbX4T3Y3Hg",
  "key13": "2m3x8jGrmUXGueKYh1dPtTPr4fxdBsJpGd51cz2QgJPj1sjjo75FnkPEmUkU6DePQEcLArCbVHGtCdTL8U8erHcG",
  "key14": "3rUm2MLEwwrPccJudBnaCsVH6cQBCR58aQPxBZCk4eRDxRMYQ7WKuGGNAMh6YXv9fAZnBxfv5obDRno6gs56nPAZ",
  "key15": "3zWaKzWucnGhtDyU9NAK3C4fr2EsWQuThYwzqtQ9AE4yfQawtbjurmz5CcZ7PuGCsMqur6PDYvfDWTnhyiTyAWWN",
  "key16": "2YQ8bodan2c3isBJPpWv2Qpqr1DDWd4qFyE7WtoULhVDoB55cta8bftxXak9UgWgTaT52X2qJXmhVmTzToju823C",
  "key17": "58QDHe8Jx1zsMyggVZwadxBbwWzX8pXGpitp4xoFJBWwv3ed9BrhKVmi6i7Xom1PNaP9UAwsFvTutmUiJZwtwVaz",
  "key18": "5jp6xcfFeeju9BYbw1o6V4SRXM7JgkvwAaFhHwqfMA1frJ4hSXCtkQ2A1P73Pn4X8M6Grwb1rPxDhCDHWWztxoMv",
  "key19": "5bnDVTYRGhy9H8W2VctCM1jQZv1w6wd4YVBcCCyzYbN8wTQFo5yFNwuRYgQntv9cNhQ2VDxqyJpqWpDjzbV1Ci6t",
  "key20": "4gaGSi4fLinF7iMVsT8vtJF7yQmRF9p4CApK8wCcgPvVhN1xev1G9A129564ecHUiZRWbWjw5Yd1tghBTaXqyxFc",
  "key21": "F2WGWkpKG5jdzuRzbqJ9Zm77uTkLuY3TgGjmQ2qt8Zd9kkk27Jq67BavTaGAnqKbpjtqakj1Syux12yNDM7PYMe",
  "key22": "4GkenbQkzvaX7hy3hXNGCHyH1JpHdyud36BG5QB2dzCpHkLfdGwMvwCUTzNsQZB9FyiMexuuDa6fwmq15u8CJdoU",
  "key23": "3Wwb9h7VibiQJ2eLsfAzTjJhR78fdopDLL4Sruc4cMvbcn8ZrC3zQiVHW3gZGoUuUZzVqGUAKv3K9xfRpBjC1o7o",
  "key24": "4cDGKmPHT9Bxz4Uir68tADZ9hTF5WnPA4zvLi4PgPkEMgDzvqtW7UNhy2uvey9ZmZCosEL4qUTfou7Z9JB1KUhLW",
  "key25": "4ZeUvbnwQ5L6SG7pyn3mbPRspVFPaptGchVRsDCjnfbTiTKVymUZp2D5L7EtaUjVhDqdCY5XhWEwxMG9XXBUWuws",
  "key26": "45B2wg3bPAnbWVcp9jkuJWZi8qb3ULnw94FTkgNrG2RLTdUhdJvhPBQ86QyGeabnjBeFfyormMYXvjYg725KpWdK",
  "key27": "35aQAQPY5fpExoXEPX3Ebh8zoLkxCLHZx8ZKgV2RRGNWaAWbPVZttWLVSVjQJpjzwmGgT2TSoGGMbBcbn5uB9Rsj",
  "key28": "2eFfm4uMGCqkj3Q9iPVUGdHYFNiaMLaEpfULnAcoirAd9MXoDvkkcqh9syMfkcBSVMmEeR2eMH7HUNu5LLwstMga",
  "key29": "37sYryN6KQTQ2ZcnvTdkmsU7h8qhnojmvwgW183fsskVKJmGRafbTRFuRvwbZjQjgWofyrGfA7H3nrX84axq6fdZ",
  "key30": "3SbYxvh4c6hT577oMWdKYbBbEFoswfTZgPi5JtvDJyoYavTbDQBdyHAsNFhRwRAyuyvBBThas9Xr1Kgako8iKNYK",
  "key31": "5B8TgdNibQepiZ6CAyzE8wHU4nwDETVYUWjR2Vh9eXEvMDaSbNtC3EfDTgoynrF4cH3QxGgSYBrqRFvhGiN66idB",
  "key32": "4JrWqKvyDDqtfeNWN4FkzAdTWxhWkLHKqyeRm2v1c3qrgk6YQmFKtcqv6ui4duGV3umhQSp4JbpkYKEN9LyZSVg2",
  "key33": "4HDdiJvyyzXdbvy3M799D6wTng8PmFt8U22kMcixefXvtHRkMfwGrBcRDLpd4jcciG4V9ABURePEZnoRhUcEyLLH",
  "key34": "4qEGZfkfnJTbezcRiufT16ha5txsmLiwCDBCFb1RMNGGp3YUwzuy3DJaPtt8e6KbXNiKNmnM1QxuzhGBW9H28yia",
  "key35": "WnyJBgafer3u6j6KhxCSCGMoP4HVcd1LwtHGcN5orhwDs4zbFqkG4iEXsdKiWDMCgVQwxG6YEKyrpj96NxAq3Yq"
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
