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
    "5v1UjyQFzLpoCMUD4vbArvjGRasp4N4GbF53gGyzM3V27KbR5z6MLPc1K2fx6qADYcLzSfvipE7Vijnpjvj762Qx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VVhKb7KXBrsA8qgq2yL4ugjSucg1JiooVw3YU2t97nMBJn2sVJEPnbcs4DaEgZ7x9LPiSuUfpaNPsqdL4zYSqbg",
  "key1": "2AUF6Xx3nU8GDCjmbfakXnYd7MScNLmffzdL67BKFvqakVyHYZPPLqUYoutSvM5zGVuBVgtNfxvmTSZsE7aKirwV",
  "key2": "2YKvqRxZ8Eqc8CAy6r84hfXY4ZeUJ9CKyhEunauZCFfGj6aj9EuwRavrc7DCz5TQ6mqH7HVofApuKin2WrBrYDAG",
  "key3": "3nNBkFvu3TES9GhApVhvPt7jwyrMBviLaB8dPT4bkfSgrngdXBWsidxpkwL8DgGgiqHoXa95RVGzudFPUgRZDzoL",
  "key4": "56W4tmHWXW6J88zjEz9kNCVfGupCunVCUhMaFjaqFwXJQff9yS2hZtn9bh6jaVpxFryjVvFK29yR8tESq3eq9SRb",
  "key5": "BjNeJGu5op1PPW8Pe6F6vQawXCEED8VQEcRPcyzwF2JZPgkgbPgtdmKmdpMbb8sPe2SnCd4qwR4JYD1PBnDWJrR",
  "key6": "kbMghRZwAVZC7Dd1jbAdR6Pei8cHr9tKR6CPGn7w6S6zkUWTjksibgZbjBwKFszZV3KJ3ZbNUtffiXYrakem8fd",
  "key7": "4GKn89qgiQbQb9xjh257UhnYcaSeqXXDUyedwHyFgNG2ZjPLRHe1fPiEtnXZsHcUtVkr1FnTXqonakrwHU5bZdAA",
  "key8": "5uZFUUFLwZKurB58PyCY47hJMRmNSY3KtZSvQDpNZpB4eDTZ1V6JKBuEA4BMBaLHpwdU515oTmHWLL3EpEcfjCYU",
  "key9": "5Tuh2d14RQbozuAQ7r1LBFm8Yojq9qKQrZ2UUiFJroBeD5R1kfMyn4xnnRr2JyFLemPiH46LTvo2oic9sseYMy7V",
  "key10": "4U7jsXcQqWQLVYNgd6ekdcRJVaAptD9LYLGczAmvgaEDYv2eDbYxNd4kFiAXU7Ex1nspxiVw49Gb86twrWQX6DMb",
  "key11": "Ph1B3orFrcpf3brXqNA84LbHJcTvE44zL5Zhw8M68ycjN6a5xb3bGkdM44mHNUWJpvBhUHhX2NFp28hC62kGhYW",
  "key12": "2TFpbXPw6MVxGMdU26WmGZANunsXRTX2GpyJQaG1Qxc3sLnBKebffEweBB5VWx6joH6Zz6bPAES2QdAN1SSi5Jtw",
  "key13": "2299H7J3TFXhjbyavF1pVmUMWgbsvZL1nu9L1twBkfaLdDxfk77V8X1PZFoP79uD1p8UdenauKx65tsCC5LtnRF4",
  "key14": "52pWwDLmHon8zGXcwkCrFkfqdpRPkaXLV6RE7Sh6DwwNEfow5dVPgCoD1zZQ3sWC8mPsk4S2Rhrgk1iYhQy8bdWV",
  "key15": "SzT2EJy6uSfNWGsRX8zqC5twRKCFwxfLaYXMJNBatpFkWsuNSJNtRmQWradSgU86uF8nstrsCQaoxjW25P2S9jP",
  "key16": "2XDbANvFo7pHM48sUPq3YgymTj1mYurs1YXRV2awjMAcuLiTqiS47r3fvTfcrP6GgdRcFbDGMAARR8HezJEzd87H",
  "key17": "3uTLaJQ4abGGABmPvcCvLV1USPz7c7N2tVsALT1qfdo3cEqs79jSCjSAHeKqsPJjupZmkwbQdDKmFJ3fdByWGgUE",
  "key18": "2zZpi3uU6X7ZiQLt8tXCE46FCVhSrY97Gis43MqcHFv4xsFrYsgzTJ9Dy9SoBe87ZgZFCrzgcGPVHF2NmEA3xR3S",
  "key19": "4yv46B3kXFAuZpurNuNLCFo6WRAc3geVYuYUGwQGhCzwHRJDogBH5kYpgvWgkHBPodPNR2tXpRy6eKBhpn5zYPLV",
  "key20": "3NiQXgqi2JLLgSBzdajnzUkGi6cKjQsswNV8nPQa6adqLVubq9eCQNXEkx7PnkfoyhJfU545CsjukVpkVALNm1pD",
  "key21": "zHEvCkjRmYyS5G6Np2hKLqFsoxewPrfuCKgric3vKC5cKKC7byUzUXa4MG7Jer78yYyz54eKVUcUkSV6Z2rLyZW",
  "key22": "5TnCCxGu7ubgP7y6X8uQa2KuuNqHmZNkMMJKeDXNiMi9uqKorr2YeMLfSruS62oL9nqQTj1TjUo79pHif1UcgA9p",
  "key23": "4jtRX75Z35SQkJLyMH1PKNeeTeNKqtckzFy633JHUZKkVyKi3b4bRpzH4xa6Y4FiR2d4VxcHdv6SS8So2FjdY922",
  "key24": "21UDMULYKr4FztotT1U3N6xZs8rfvTGxuSgELhAcWv4FPzeZqhZTtksGYot3VeKFtLxy3rF9pzpzGDHLQY7vECiq",
  "key25": "5nHbSH7voNgYMYLGjDzkmNBJNGDcs1SyscsWm4VFn4uTm6Wu4QZ3umHxbjdPeBkDGjjFeUCrPa4e24jQoftqwCx",
  "key26": "2YTfRqiSdV1Cvh7L72DqR2BMSHEQPZXqFki6oQnLCtuR6Tx6znPfcnWSrbBAtah5MHDWRmbZo3z8tRqbuRhkcwQD",
  "key27": "4sawJkiCU4sc5H48SDSCvp4jFsU58xJRSFbQ6u54zG1h9SBZAQpoxWprkYGAX41c1cbaJLX69gzXFHTPLuiZhWiG",
  "key28": "4zswqSw3hqgaZUmpkVAtQQH4hHqZusW9YAJom7MoJh1DkCQTr5yVVFxy9BUFuWDz8rVwhsCWBTVrsvx4HgZ2vXBZ",
  "key29": "2eAMGwv2hdUx37FnxoMjm1URnzLgF5s7TXxp7gnhtLJTyec15FSwMkKUCiXXtK7KpzkB83otKyYw7VskMb1WsEYZ",
  "key30": "5jmZALoo1aJ9uNHXspFuUwVFZ6GJ8jgzRcpnMQVyjiYaEPn6PGYnjpbEyiF5TZ6wXspSt5P2QLiiWC7B2MKApK5w",
  "key31": "3djy4TvmVMx5HYjUBnK4CVidc6EWPoiPYkKajWKjbda3MTtSrwWhKrfkR25fM8aTH8kPe2Tp2UiZN7mD7cyWF1Cr",
  "key32": "3RVK9iRkrBFJQzKUUwStPTHwdGeZBSe3SdRRpvSP2iaG9Y7qmw4FDdmvfeJQ9CosEXfmCeD4xn9LEEUv5Qyj93ps",
  "key33": "1E8bZj7BdC5qdY5CLxiQB1pJuuT3an1RsdaY2Xkazc7DEkLPBoUyDhhKGDRynpMk1L7Z8AsqQZSWV7WcCNwkFzu",
  "key34": "36bLTuXLceATo22Y1RneVv3uBKPQnoLLRJiA1y35PuybZdy8twxvTdBBmTB5rMDg612q72A2K3hSTMpsRvHXpuuG",
  "key35": "3EqMEfNim2DxC3eTkFCYtm1LabeUPsXEnVp6CGgS4vW8bcHcXXsuj8BhZgRPYmpRXqeZwVLeafpbZpm9aUmZG6W6",
  "key36": "28BSW2NnFyT2XwxcAmo3p2iehZxPh3oQ6NwLrVradsdpaQMbsJXELtX5ti7ZeqBWucxMicuVFFoaUwdGLDD1CaJ6",
  "key37": "5Y9sKVnyPkRZ5EX146JnJcYWPt1fjba24vPag6t2VNcHqfMG11vtCaKoZeLA2EyGbRVsdfdXPDG5CyEoDqtCZ1Jh",
  "key38": "2vsEHwpnZRpRs6kDjo8PJLYMpnqcNrqCMqBJ2XGPrKuUZ2topNUw7M91bab52ymFRQGCvdsMFfvg9EjE1gza5SQ9",
  "key39": "5K58aRgUvhxaiXWUbBX8fhCJDNNuS2r2sdf636sxEVnKg8Mmtq1uVkKD3CwHvG7CszHAsNXYpPngccvX2QseZFpQ",
  "key40": "2MyHZT469JKPJkpu5dTWvwgM1v7zqNN2QNtpYucioF6AzXAh8j9nvkwahaJ2vHkUxowdHWiX9o5ks8wbVzbqfRuL",
  "key41": "2NRegqJzPMc8PiETEPFbLKE3bM3icG2eiQnYsQdbJUYakLv7LUYxsxnvbrsTnq5Xyhy6TszTsqHfDEb4cB4gFG7o",
  "key42": "5djNGzh6kmm9fAh4SE88948a1SfApC14HD3m8PLsHxQ7TfdCn65jXHzNspTLXjUZzFzSVJnHDSegeWPQULtMYULg",
  "key43": "4jpZptrquxo7CrHFgVmPZ65fvahkyhcBqqCbJvj7NC5Ct6HXLetTNKswgkPytxHjkfdymU6oUb6UumndZnDZ6Vxq",
  "key44": "23owwh8CkpEub26f7mUkKaZSfEar4bbtyqdnXsQ8jDisyZyGffJfZj6q16J6U5C5Qqq3enT6q4ao5fjR6fTnnNTL"
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
