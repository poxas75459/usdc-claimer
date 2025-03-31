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
    "3xRVXUEg3HdpMBg7fjXSCvxU64zNUuNyZnZMeFmAHr17dkgWdbf1eeRHgDzJiRtGC6BaDTJchXpxkvaQXr3H2s5y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Jxm35GYxt1p6NDE1Bo9NTM5HCZHrfMu8n1fGfyV6t42pUVDMWXZxW2ZiVFDhs8Tozg8fcsDEVfPZMnNWSZnJ6Qv",
  "key1": "41d73AkRLPTpS9s8TSDGwCrYBiXg8wfjMPiGb2YXDvbsEvoGQWnzDXSNzkaXC9cQLQvskSNAJA2HWE1fZDTHmmpJ",
  "key2": "2yvYK192iB44gW9cy9kFkTBLgh8dTzDUSECA87DyFfGC7R2toUWTZpT73Gs1vD5oCZes6ZyS6peRkK5wZDj3XLoB",
  "key3": "41QTa8bLoUgpQy6GJBeoimdrNnBmohwYWtezbSgMf7A79BPNBu5973saqcWqECG2Jgc1yceurDVM6kvosgoAbhqG",
  "key4": "35cGVx4rNvLQsKGuVr7LccKGoTtTb54fRUyZBwVSd8sMWBnkCpUQ9a1JJQb1XzwYGWnRcRK3YjFbRY8nNGDrSQTC",
  "key5": "2bcAAwFEZGWmwGTrz9ipr356kEpxoGxSJifGktaekQyNe18Rbt9JcKt5uGPC4zGfj5fkU2kU1x9S4h6oNMVMtZYA",
  "key6": "23bXUfZTXJqTfHEqFmKZFgG46f8iUG58RHhTh6sBF36beYHtPz4j2MbENZvbrT9knMVx59jDiGGVkZHHH5YCQ447",
  "key7": "3M5msABRZxGLH72J39oUWBRchuAZxtBna2RyLruy7KAgKVeMfbuy1ZFMsfBWH2DYwFPiAHdoEAsX39Pbp1xi22z7",
  "key8": "25z6wdz1VEXN2tbfjEniA6ZsQYimd8pkGctJySKE62UcoCEJ795RZc5aM2sDaWHMLPGGF7jRtnRaT9KqSPA4Ft3f",
  "key9": "2uTno9yQcAT6FgHZszmWQtgawgYWEXS725nJeSkVUBN3SxkRqeiPzBkamFxY3w6GwbuXUM586C2ZVm8DtGDeD5qw",
  "key10": "37Qk58KnY8CwGvStFcoWzGfJCXg34DWPm7C8xfkkbL5cyHz1bktCf9ndfLuYUidvh8VGXB2HMQfSzno2kyMA7R3r",
  "key11": "5FG8GMhzLXBLAqmWu9oGBeggec6kuTKzxFGsrNJeZDjRPbxyY4oBx8NAGXoZJy9RjewhqPxjZaz3SUsGaUDkG3bs",
  "key12": "2HeqFvXmTCuBpbGLEeuk4qGoaDpC7AsZ6vccCvk9sejR79cJxWMoVYhHvZMkvJigenuF44GwjRzQvb3n4xLZ4dfa",
  "key13": "mH5UdPLxaRCdmwYut99SVGvHrz24fi3mkoPNVynMqd8v7Xpqey1z4Gm9y5fQohuEuxJkZf35XoHnfDvYCRUHsgE",
  "key14": "3nVDcgAjTHXqScFsx4az2GjvkNGfyuyb9LR2VfhgBbhQaKaZpXuXokBbH7PeeQCgBARKVeLVFE7Y8jonJuK4q5dU",
  "key15": "5HTjrTkYSKJHKsF7Ruz1xw8YE6DP4k32XSzfBRrCCmzDey5DFMciUo9u391KvnGfLDwDte8TEuvKRsG53RYmJ76E",
  "key16": "2PmfznG7yHencKHH3sGw9k2Fr3wvLv841ZzFmPwsWV5yvKsUabMzfNT3qBCAU9A1C2epY9Da5Cj5gLgfNbtWCYYQ",
  "key17": "4iNYzC5zZWSqWNiyUNcVzFsJUdt6snJgLVS5TqAw2srXniZuMoD9xiHkJN2VkHSyRv8AAvr6o7runGZdQVenrrfq",
  "key18": "5xSFHAFRBjfzWDUixhRLyrCxHfghxYK2MZJBUwExVrzbzH1tDtuJG351ATaR1Z9jBA3TVbLVMsbhTU4zmfNxFMfX",
  "key19": "4tydHJxhfqiyf48GZuTJRERNvundBsvLUSKtFoE6CrUSkLujHcnTwPMXopfh1jvqJyHir15xC7LwbZpemmiESEfq",
  "key20": "2uQ8QByt9gT3TGLsPDWbRRyiFm3GSaGrY9wqALd6Eyey5baSwDcZfxKcVRGfXBys5VfMatxTvbKLJC7TwshikBqV",
  "key21": "3QBeXQMx7gUjPmmgKySKSDFQQoRwy6TwDbjveUYMFeh8ZFkg2My3ok7StJ8XtbKDgQuBpiAEs1tH9p57zKuwK5zQ",
  "key22": "2k5mD3sano1e8NhYxy47y9nLYxMsjVftdUcBj3RCx4PxYxorPkSKEN2ondD4Pez1QY8nNXUECh5s8D57rEv1uzyJ",
  "key23": "VvpH4MMu1QsgoUmLXpTzyCiZGgJUsPemjTeo4gbjUKuJjVZUUfJK6vha7PV3VXB9bgGmcQ1R5aQ1M3qFPPLUVuy",
  "key24": "2dsiEVXQH8kDDA4aKmrRbStZ7d5T5k8uuoPczQ2ps8W9K8tU7cd63jDa9TLVEE3Za69dkQnSw8vqKghZwduq73Gu",
  "key25": "5s9yZUFLkRr3XcR4TzGtSkuSRqeuWh6BDMbUgHE3CLGvQfuQfnzQ98Nh8Cttdv5tRuE7R8BLqdpRbVGCW3iydK5q",
  "key26": "5f15MGDG4QU582V1oWN6jU7LyY7G451A6d4DeCT35FKYzuTQ9yhXFwADtHjw8qoDGk2HVAkyyz6TxckW3fgnob9Y",
  "key27": "4jHnuimg4HVQGHFAYYAXkzMUaSKxEDbKHJeaVupn71TiAGMjJMs5eMEoUrBfbKHhKStYxvwVnABzi4rZ1WBMdwL4",
  "key28": "5YEXRNE8h6HxWUxzJ7u8YTmzmZnMt9BQaPotSXHFfgziHLxQYjDPu3MvLEUtZA2LAExdNghYGzXN75s36fFzicbk",
  "key29": "4asG5PRtVhkgCJp7zq6P7KFQyRsTdCffDFF6GK8gcD5dYfE48rcFNdxD5beboCezknMHEf44yN1ffQzJg7GbJWWU",
  "key30": "4trfFL5EMDzqeVm4GPByaJYhSMmNm144RjJs3fiDciedYfGaScBS76qVbi9ZvjSF2rmDVHZyRs2RJEFQ32pXjU4C"
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
