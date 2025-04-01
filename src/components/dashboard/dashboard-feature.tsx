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
    "15379pnqTHTqQEBhfCUpzpTHVYNEQnEdvgfiwS555b2uagVatT5fVgezmqPxAgDkGBLuxetYPm6vwUj6HX1hf52"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gRnZx2tZCvNg1pWx6QguW3dcyBEAZ6vjG7S7pjrUxhCimhBDvxcE1F8UvDDDgeLmPDBfLAEDeSMEMHe1eXJDJa9",
  "key1": "4KkdHqYndpZz5UHeBYjNxoPYJB5VkLoHisLuejZuB53GW6utiXhdn7rCdjyaK82UHtTH6QHpcK3yq4B8awYHQeYZ",
  "key2": "234jwRFjgd6upkqNwMGYNCw9BJoVSEgcvYJLTASJ155UZAtavQEGi6BdahZitP6sZwUTcoax4ukXeGwPqcRqgHBd",
  "key3": "4kSegVyF9dyREHRdr5CiJKEaEQDvb9VvhF4ZUTcvBed6diZe9qk6PhYaeE3nkvTypd4qK8mwiMSKFiLAKuCzd6Lh",
  "key4": "kPqPUdUwYaiKgKMmQt1dqixGWSpj5gaBSTrFeqgPBMiCEWX6URi4aNiDnQvM8BFppNJzBvwtTfEv177sDafHtYY",
  "key5": "2KLmrHieFN2gpXhDd7C6M1YAL9YhxsvHmq8VXRtbRyuoEr2XAsJF2ttacDHUFRWUxkcvGn4eDzgDyqmh71wPCBby",
  "key6": "36UDuN6KoeH4g6YMJEFn1YuohQXnwRrxsycbsbteY7YWhKYDYvjxPaWaY6ZTLT4CUDoYXL5gdyjqPZ46U2w72nWB",
  "key7": "2R6MFApmfdjWwCqDgW7uon6L63Di8ismAW9pUryTruvoCeju2jL9efnWTz2uEJ4cDqUmLgFmdnXhHGSsLpESSutH",
  "key8": "2Hggysf8VzReiBH8sYWAZr1uMivWU9UrtNeezjCYUr9u5MaMgqkb5jk3TuojfLYx3a6ZTy7ENFgEmXRSEVYEXveh",
  "key9": "2SYhuLJAfSvtCUriZKqBBf6uin3cPtaTAggWLFzY5y8Hn1XtSKFiMhq73ohCyzBhRYYMjwZ6eHwDDKjJGxcgTqZk",
  "key10": "4Sf1uBEULssopYP5YmAUN5joRwYQrrJdoZUpvCcFsTw2ApzEbjJdEe6rQqL9um9HHAbM2Jh48RL2f7dd8QLZutnY",
  "key11": "5ZzSkK1YKWjJJCoSyjK49TsZExwrbdM3NgC5pmg6A57aAFs1WNgQoWMWLE9TqmLmZp1idwm6YRnwHAs67F3vNd6e",
  "key12": "4REGktyWAb41FatJKLhKtWqc2b83FGc7qP2C2r9DfCn7cSqaAMm9KdRyg62mV44i3qHG21HgyMUSBPvwELUtvuBA",
  "key13": "2cZf7w5mWd5fcpkJexyy9NWy6jRXEhrCVtcCjjsFbFhbHGDKQDWtdq2TLN6ENkNrSGp3CMxTHHUXthCytg4VR2pY",
  "key14": "24KP3NcGzQWJCodEvXfrohm5tqYeuEaR9UKX2af4swGmHEDzL86FWKXr4DiAJTQijaPq4fSt1SZ9sZqXiJ4Lepim",
  "key15": "3xBLjyRLebaiQXK7urvpr7VheyrzSXc1KkvZT89YziQY3WnDMXysLvt4L7EvcYKA69LwcTEWNzZPUkUHJieEDpgq",
  "key16": "2ZSPAmWazNQHiSDevgEuD7jZdhxtY4i6tPaGtJCfMgJrtuGGCcQAxa7q7XTHZnTq48C4Gc3phhD4tNXNcQJyiLHt",
  "key17": "4pctPAcA4oqPgLVAV6EjzqGNviGhKRtQcC1KunfxHRbkmetqL2oefyQWdBAGzEacmQ5aK2RFr2KL2UQHPu7YSHcp",
  "key18": "396iCDk2evBdq3LEk5PX7KHpmb22oAXdhxQxxqXxGAiipTbWYYkKcWitfeBqdV1mUcArXwVCkRHFFnpqDRK8igTx",
  "key19": "2PTBmohXXG8WPDkJDn1LfcDDXg8iK2PoNqednhTYSvjZ5FkvebgEzxbz3uv3ZzRQRTRFQfLm42Yd9RsskRiRHZyF",
  "key20": "ohQM2KS83zqyv64dNmxoS6t8nVjxEQkpkASzs3xvEg4YPZF7bBmDprHbkwRFifhLqbtAk6BQFzKdrnvEqRioibJ",
  "key21": "3KLWbNe76LdmzVbRkCFjR9aLdnkJCe2bkZd5CCzXaXWDPBT93x4cjHm9X8tLuxKPfvXQNycZdrzy1QZJnpoZuGt5",
  "key22": "3HSnp9iXmTdi4NVzUWUDcfP6AeheNwS2Uox4VhU3noRiSueF3MeWkzZTVnADZyZu6B55kcpgLtJfJ8CYRw7hQ2zn",
  "key23": "4nSMB9sdysxdNGBZiczB1na247Vt8rNFqVRFipEMwiyAy4UYKZ65aVQYA4ngd5hwyWRHhzkhQLYnHdPfcxvjh9bn",
  "key24": "GPWVpfbx8ydY97LJ3R22wvAjTvUe318jSCrBq74to4JG3ouoBwgs1KMnbeiQ25ruSbra4Mg8pdgoHLWbgKB3r7K",
  "key25": "2dfNzzHtVh5BqorBcBjnMFFG3HwPgfjr5vWDjawMMiFfeyvRXk6MMjd8pffBD6unSQB4WPxPVkarFyMZFCJ6Sxgm",
  "key26": "25eBRQcKNQaGKc6eVuc67vXvqhvzeTuqRqzGqkzC6o6Q8G7zDnUmHhwXrkptn3fsjCagqWqMim5xPY3ukmaAxS4U",
  "key27": "2EBuSmoEYDPAcenKa574LcCUZfdpCLMvvYhiuLhDYumsiTA5b7wNzeNVKDxR5deJahs6iQdFrqcxHSC5dcrAt2JE",
  "key28": "5hUjSbm4Ru4J7Yc9p9ufL8rzfXxLxd8XN79EU6AtRpQxVgUz8BM3tVH2mWySF1T9bzVvJL6Q3AHLApB14XRxh91i",
  "key29": "4sxD2qQSRMVBQeYVYzQG2NK7VvuJAn8pUDtayJPD9iioLMU84gWCzVjuLj46jHT8YfBi3AWBNfohr3TFHDV8hAkx",
  "key30": "2ktynovXSg5wVsNMuQPvkjnhZ3ZzdGTVrFwMw8uRN4DUDiAcjVi9i36UnybrT7V54tjBCExD5TLu3xiyVgqtMktJ",
  "key31": "2dU67uR6uRdNr2FhcaVh2nY2iPCN2gdgpnjd3fBZJSqXSgDyn1uY9nEootAwPC2iu1C4jnYCDGpf7XXkXonx4mFn",
  "key32": "4qskEpj9uAFCmTVC6yGQLK16G2HZVaeVjZe7GSiWyHUXATG7rSeNtGiJe8eg2CL9ustxx1nkHPGwfH9t9jja2auH",
  "key33": "5MV9Kz4674t9KKk4U7d4BdGwTBte6Z6LwNEZCogcd7jsWuKmdQkXfmeKzuAHApwVG2tUyFs5baq1tDUU2QUoukhW",
  "key34": "3RuTm9zLKVYVVRGnqkqyHcpB4RxCJFSkj7U1ybtBLaY2YHKgjm5ZwBPTdqE3Rc7CCgHmm44AFQjK31S8STChiYPU",
  "key35": "5gQL1rJaHiHQYG6SdmmCtgzWEAUQu2cdyYYieNKHbPxqgGXuTH2vH752yw8vuzhnbS4uJHpAS1DeRKDDvkXXDigX",
  "key36": "2gmo6DAbHcmLEj4uYkqcomGPGiU1EtGwe6Q4yXmBViNTb5CrdJwWmC8rxmFuFj4NUTdecAttGEpsnA5MReL4yBZE"
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
