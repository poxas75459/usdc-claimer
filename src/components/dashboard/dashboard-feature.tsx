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
    "hXho5vVjtHx4cqHtVh5u2SqZwLRoQQRS3TyXQRZVyKi9EZ3CCD3Ufdai45kDkHynvykjGmeG5piLGuDPp8oRsUH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PyNa8BediqWc7PZvrWmm9vUWXxWKhtDNWrVNeBaFSGpAgp9NxPzjSvD5SACCAeiayKaygb9zYJhEVe1rzDKrcYj",
  "key1": "5i2ss32sMnm8SAdWxPdDooFd21UzWoEo1MLyCshpnZgtKVeowY5RdA9aK7vGVX1AkRChQ9cgEXPG6jGiq9qrJEJJ",
  "key2": "5vWTRhB6k7xKrVPrQPpzcMk6FAivEFoChx4C5X7eMKjHVTNZgsMLXdafbtJpqqDBdD1NFag7PcDrs4xCbR9RKi9e",
  "key3": "3PPFSHFayD7SbJwHCodZnGB9vAABrEBETyyo853ZpzftJQpS17ZrTG6GurW4CMFtCqYJcBZ5W3V2P2d3TDqUyi6c",
  "key4": "3WFB9Kz9feKTkgW5U3aQs4xmM4GhcSYqMPAgq26juNNERMRHSTjk6gKeNpo4uovF2HisCkpmeQpmbSUCuFBeE5tz",
  "key5": "BMWXWrZ7ca6ZSezPEe5ppWbQNgNJN8X54y8uM5R8W98W6dPWHEgwc2nRtMYAqnMKppUDqvD3iDNcu417BAW8ghX",
  "key6": "3TyXPHiwdowopvFKTGZmKEkmgAvzteTSypnt89SazBVKL6CZpZmtPCguNzy9thQv64efRfYjM3vSiwPAkcYMpCJP",
  "key7": "666VVk72c1UzTYGkhfmodNkm9q3TKtyyjvo9AkiVFHtqdPisK73UwN8ed7vGspEfsSm1KxMcNi3B9xQrFZTzSChQ",
  "key8": "5RzmqFYM7qd5XTbyLH12qWB1bt2kruqonxicBaY3WUS1zj8ddHSvKUU1SwM358B5L7NqAXeMMHNe1zuwnoyEsG8F",
  "key9": "43kdxJWidrFdJvayMG1XjUvr2nPjpJazvQ4PfdNfX8nbWzpu2Aqn3bCQQM37TwHkBp4dy62v8La84ZTibwf8E49x",
  "key10": "59aoJvbSHGk9cH3VUd2ctA7Ev5tf8y8AMbjBvmMs1zHF23MnWv2xLTV7yFztx4ZWSaCjAzMw4NNxV5vMSAHvTo9C",
  "key11": "3ogsuHVSy3Y4D8PEnezzAY7cNU8TryEZxtWyRfSHi6UvSwN8A15naAxCfUNaQfP22b3C4UqtrwY2zHXPDEen6MFJ",
  "key12": "5PC8zKG8xzpPNcwnqs2HveJuuLzvyLRQZ4WLE3nm9W4Sxz6pbcx1ZQNgT8uFYHKzKnAaSmPQd9KDpjfnAyV57shK",
  "key13": "5V72qqiBSgyE747x2gZ8JawnqBQWjGhtUfNiaRn5RRc8RN4Cftvmud7eiyXXejFF8d9gu6oyvaB1AMVx8CysqgkG",
  "key14": "5MZNBYjgUaHqRnKxNzxGxXDNHJr3GwLYiEUzLCoMU4yZPP79QXojF8KyZWgW53q8C98inV6L45BArj92Qh3o1qkY",
  "key15": "6PPDN5Mf8LoKUxg9ThFQx3GpA9iDSXfNHuZUQTG6n8kFcXXhUzvZoNWBMiWmxfd2EXQZBeZUHHU7sGUBvYs3GZv",
  "key16": "3j2wQAz9VofZTqWYY8WpSbE4YjDpgsMrcJz5Tvc4R8cUgNqFeyBbQpsMNCtn1C6XkwF9fdYpoCpTyMcsRXFFZbuo",
  "key17": "5RYCfUmukmnj8u1hDJpJ8z73NVJrN8wWEmb6K9ZFyZExBgCH2fnviBg9NkbLXtEqR1B9hMjykM7gNpWmLeDMNenX",
  "key18": "3LPWWHCWzCmTTQxzyx86AHKwnjQLXHTwZpk75CX9RQnhtUZAeDm2zXVT2AH1QwuDmpAAkVXdAiGt43T6XETs6BRY",
  "key19": "3fUwcjJXg2TFnzwHXnUHa56s1FPuEirLgQjDqw8L9KFQPbGcDfK8ZL6CoK8oHTZXRGBSdjZoyk3Z7pUvoQeJUi13",
  "key20": "2qZJjwUXRhpZhVx3a1Fy1u8r5EGZTHszLbpCrRm4NQ5yBBr3v6GGSHxiFfSL4AkJJx8nuS9gGag2egZgzphnzbMT",
  "key21": "2uD6cz6tB2WDPF44UZeeioCPEL2FPyb3G8BpzXh1WFDU3jJSnum4gNBf6s8YdrKk9aywmqyMoZizrxqtZts4Yewi",
  "key22": "4k589knV7idH1iVoLyVx4pJAn3jeGJ2s7heFpopsbbPxnnoJ2Zw1nRGh4DC9pxnjuXsS5F9wf1ps2gihzCNMfxc",
  "key23": "4BcdUwvJfeq6LNrxHJxAWagY9Tia8ycyAZvMhK7KdrL3rDVpoNK6EXSLbTnaJ1ThxqHuKFdnBwUA1sc5hmizkeaX",
  "key24": "SfmYqpUzNpWuCpUJvT9UEhG18G4yQzpFj6ycjVhJwwSEbHbwG1HvT5y6dQGsymCD3dkapnJBCBzRBEiiWaXtyMF",
  "key25": "gc3Tt9EKLMPkjzGov1LPK5Gg7M1R91hJ1WRDjX4m3Nuoom7SM3JUFAfdLLN1gwpFCvzSE9Lkrd47RbUEc7fhW6R",
  "key26": "HzQND9VeWMURtfw6tbYzn7NF8LktFxNjugwW19DESzUKySe8n7mFC6stJvmm61A1cddksJWvgyAaghZXXAqXoyk",
  "key27": "5oWEJBzjhxNDzeD1uyZDSxDz5UC7ZschicmscFxQiuAiGBaJf17qEVzcF5MnKDTzsmVTuiNij3j2HTR2rEdaEbeA",
  "key28": "37swrdEiFjrnGVvFMjdK13E7F4SEyDR8dR8TBLGRM7pkx4dNYaDcqiM4pKbiXWb49nZ1rUNVRXZWp1vyYiSabc1E",
  "key29": "4BTNGHT77sSBfyxmnA3J7QpmeYEoKz6dnuZBSYgzYit37SDMdNzCkcA1Z6Q9GQVFxXmvtfymSZmBTQJzEcBbvZki"
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
