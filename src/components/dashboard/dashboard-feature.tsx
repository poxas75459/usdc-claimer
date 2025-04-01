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
    "2odq7hZTzv33wE4yjA99XRiWELSGuX9XNa52W3yJAiHyybhWnjHfN8pVxWeNq6rt6PcKsvV3e1V9ZMrfWfBpkeuw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DWqtW4A2i8nK7cf3u3aKUu7Eqou2r3q2tFGhFTFAWAwob8Jxg5zhjkVBLJ2SEmar4VNzubq7BnSrw1sYebzaCod",
  "key1": "2AWWeFGF8yR5xsEsfqd9W3tHyKKsN7GY4WEpYUPwfzNjeBfzpbvgokFjBZnkYvKUfDWPrg9Wb6dkUCyqyH3UzVk6",
  "key2": "4JyYzLQMp4U1TpBeNzmAaYncurQHzDV9QykEnjcoxPfe7J8jRqX6JLz2pTmxgemBc9WMG3EgXk8oSRLWrHerQfUj",
  "key3": "34UP7sy85v3A5e6ga6wdrCtkJfycKt8cA2wzUtDnyBWFEodK9Vr74GFajR2Mhejb7Du8UmvnrnksU9pgcTU3PeAx",
  "key4": "3b5pDL4yScxTQkSLCwF1Ber56cC2GKAcdZ3nXBZPVUojYRjvZw6LfuXnArPPoZCT9QMiRpuM9cVMvvoUds61jGE1",
  "key5": "3Fn1WGcWfj49d8NnNdsTGPwyZVmGUJTBSx519CeLBcCp5gqJH3co4VBPU5K1bmvZ6pkCPxTTKtbvX1uNbArjYmeJ",
  "key6": "CJ97tUFj56VTNS8muePS2CrkGBTDHkGxScbz4gMaqHkpHzvcwREjF2wAo85E8PBjV2CoR6qjGmLn3hMaCR4hNyG",
  "key7": "5v3sWWr1PaAugtJPFXiqeWSMVabu7KiwzyG7GfqLW4ck6Fc5wYre2x2PftycqJRFgDS2wnDA9BkzxNkqzPkjg8fG",
  "key8": "5y6y79kozWBLzuFVFdL3XQojAWnuTs6U5AEuqByPBVh2yJ6pr4beBFM2ZSLfm1UVFvxBc21d9fSj8D6X8ndmXrFh",
  "key9": "5csF8o8ZdzcFAUonk36VUVvdV58MRYepKjqk6eeS775ixedLPaonNr8qww7Gu5mzmQxAMoTLdp65T4TgMzWX85PK",
  "key10": "2PRwzFjSSJ3SVrjP47dawbMkxqRRoSswducT2T9GZjWhnyXtFsgrd5b5s8tAcCaVt2FpC2xUtu3dwwSZotRRVBUs",
  "key11": "2sStN36kDQYvJooQjsjesK8GFt4gxtyJhUiDA2QhBKTHVHoykaDVBQUSAjqV5gHbvwR7kpxYr99ZpiSJm2amfytp",
  "key12": "2QXgpSkdGdUcS1rPyyTmAmcRH6FtoGjw1AYEXkqB2NWZxwRHNZNbNEtUPrbE2HwGfZtviFrfP8HfytJQopA4H41E",
  "key13": "2G1v3airuejgSmPUb4p9yzgt9MbJ14feNtHAr6a8dcXAUigag91nTEJ7TQf4Z9THGBNLfqrDyg2QfyeXLs8ckwyH",
  "key14": "4ftNU8rEw2aC3nugr1BY2okFMJfQzxFTcbkM9sY18ddVj247rKFwwA2yXqQNfJbeNtV4kKRVW2CftebCN9JGo7PF",
  "key15": "5ktyituVYuAbEbSdPL8HUwQXYm1MyFE2dDMYfAFU7DDHNvfDSEgTVhqZgBvTFDRQQkfEzJc1VdFd2mwYp8CBjsC9",
  "key16": "5uxTKjVUHpSgFA7MH4AYFDkWuh44mH7mzvLhpSLaFmCAqyWBECtGQCerR7vRsnLSFT6VRhHLvuEr8UgvZvYDgRvP",
  "key17": "4rmQXjZ1MmEhbeUVmhe7KobwYDNU7XeVbsg37VNroa68r4n4Liw4Vd6zJbRRqZqihafqLMSWxeuYb6j5txXLGiEx",
  "key18": "4KWJRKKUG5ALMAqoorM5skh9PdwsY98P8ZZh9m3kBxw2g1Z6zXP5drp8qzzjvaXgFnD4Afzo1KkLkqUTh5dCbkYd",
  "key19": "NfXDCRfPx4NUWXUUSQc1hdPvfnuhuBVejc4FAqau2GTWiyu1FxogmdFW1yDUvyoQn6zDV8WoyRCQysWLfVwAkVr",
  "key20": "2wLzDFoubFU9KdTDhyns1PZ9W8aKoaXD5ZyyPMk8kt2ehhqYFLnK9L4kqT7RrNUmimBYHVa8KtBsCqgD1GgLgoBJ",
  "key21": "2MRBAx6528LUra7SieAayHBUpJZvtLniEEFQEBQaL2C9sqPEdum9EDByfuH94FgV1CTcyGCRmyvUGpsHppLhn5Ek",
  "key22": "2gXNdLT4s146yrE3wYJTx5JNgcuZcXE9B2RYKtEmKuLMMSjG2kgfumqyD2d46jdcYB6fHr2t2AtrQQCQHQe8F6Zk",
  "key23": "acBosxN2YszbYey3PWjnNW7sQkwh63kazZoHhNFpuGoeZQhjkfxgyvvmLGMvPQ3U7BqUjP1XxuRCLraqyxKVnc5",
  "key24": "5CmhRGwFLV8pa4GdMYzCBifoXiXHUyNCAqnzFVikDcQK1VKk1mskf74MHfaHrAyE6yTtyXnJU21mSowD8XsQpPyA",
  "key25": "5Zq9ELGPwYzdtL7uVfrnWkT24Yo594eFBoQzG4xwx6aBugKwAdUsTAYUPHN5r1hqHbQR5RU72FkojpmmLQ8bV61f",
  "key26": "5ZNFbF6yj7gaYsErWQSDhoUici1opn8mcjotL81NbsrQQsUw578eTZPuMT8t8a3npUvQZ8BcRrVP8rr8dJXf7t72",
  "key27": "3xvRGdNL1yQYCi7k8S6CTaLTsYoiY9VXszpuEwmq81dGK9rkNC9yBrgKt74N2hrzKvLmdtxhdpAAdvLq8VJ5MeXQ",
  "key28": "3bhcyT4qkWr4nbbZyak9wP76TmwzJj3FEvaJaCySzvv4oBek7daRkM3HHz28KHts3r261dvPL49qZ7XY7Tf5FRvo",
  "key29": "5upnoBGZzyG7UJvKs5dcHEANw1HCEMNnhm151h11H4Cjdkjg9ajCc4EQZ78VoPAtfEd6BJMqiwsNbfZPoY4umWuH",
  "key30": "2rTHa2KQ7vYDdx5pNRAHTDFB3yWaMuinHKgVaVEDR5ozWNydcEEEACLoGy4nvLgjC4iU1dV3aQRJSrn2ZRDUkcqi",
  "key31": "3XgCV7XHvgod1w53NChE7ZsXXSEn7wWLoay7QJxg3jC1ZjujWJePh5ebVadNWDjoeN5xCDnto1itUiHsVFL3hrZQ",
  "key32": "4HaQcadcoYABweKd4PXHHtCX8jvK7Rrcc3HaD8vnySNxeUToh4amp6Gqckz3x4N5zTzrzfvqnQeh2rzzcioQ9k9a",
  "key33": "CBunqLRNQ3qdhn1H5zEk2pcCFzB1S7g8Cnk6ZpkALpjoMoEMVuy3xxRB9VexR4i5Zx1vtYatiyxrB3Bi8u9HEPd",
  "key34": "N7E1yQUy5htVQJoUJ7zVvkecU5cXN78Ns2LV4Q5GhQPgFKTHtqcPux4c5RYWfaiREgvVxQfvsFhnkiJtyo3zaWt",
  "key35": "5C4R5cXQdiiiw4SWnU3A1PQnfSMtGhu8QVwWPuWfEsMdYgEZzRuC8YzDKBZuSN16L68wNZgmJN4rfNDC9mcP4hNR",
  "key36": "4NeUbDNAFxEaB6KLHUUAvLD1jv2cjMN8eGGfbPSLhaQVP5fufB4iVzncXMxTQLfgRXEr3ghLkifeVA9mNeYJTW72",
  "key37": "TtBZHKFusFZyxa6mWunFrhgRAATmHWCFkVVHNtKH5z489E22u3qAZuxTdKRai6Lnfe4xTT8M2v9m7eMAtH2xgVm",
  "key38": "3ut6M1MD4bfdZTFTJD73xou9JFr8FCqtuGsV8vQJpzavug1LxkBkzSs7wD1z94dbr8Cpe6AuKfqhzwL4zpu9sFcF"
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
