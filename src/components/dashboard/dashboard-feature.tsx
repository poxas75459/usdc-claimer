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
    "3wMgSkws2kHUvdcuVjnFHiaoMm5x7zzkyeUr7VZguCKdtPeA9tFVavKxPPwkyJdTMKSXHQmzivG3RN6oZEm5Ue9F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AEqLoKaKm8kn1tVw2E8SR1Y33HvfSX4bVLtRmcDDxTQGX6qQpTAaZCeAegGXB5YF66t9vuf4KoHrLc5TwUjtHbn",
  "key1": "5zXisZK1Q782CfVEpeX2meJJz99x6f599Px5h6HGTG7TSXv3uqwR4Tfny6rFMF9XvR84oYAZg3dMnpLpqYweWnc1",
  "key2": "5cesXMWx5rdL9tD3dWWJGYvDR8yCx7U5iTa2jKHaTePfA1hZwzi3fSfYFLFGBG15payTMmoE2KnoXPTfxGfn7yFs",
  "key3": "2gLRMPuqPk8iRYraTJo2DWEGVng6e46VzTJ8QUSHveTpyyEAD3teAkqsxUoqqt76cekjM5GbShqqe9vXzvVdFa2P",
  "key4": "2kZ9YFrGY835awBGM7fdc1JFqutGUaP8yZ2dZBDeBbEGvTP23fkpyjDuPhXkucLowHzkXJrJZTzNrpzcysQ6CFVv",
  "key5": "36CxUFtosim9hsvo2aenR3rSToAhFK5NHnCBN91JosDnDXVgtEsVm8gnfha58XELKCMvz2Kgf68oRaMuZNJnKjbX",
  "key6": "4sZmegXNrqVvLVXrbto69FVeAQHpYnXCCEd4zDQr5qxGnuxDpdydq67nxBGfQ7dRFtah6Jsp5eXnvaFHXmEyDTtd",
  "key7": "5YisSSEiVPaCp3X2zBPywukz2GvL9JyWcth5quKtzjoLbZu87n1xyWrJJUdAASXTjuGxEWA6ZtX69x9KkokTqUBR",
  "key8": "E2oUQzhFcWCL6TbFipvQyo8F6HcxozHAVsDAoap6P3urbB5GHE84V1FEAApo9zCzTpsppooniyaZdGzm1UfxJ7E",
  "key9": "2U4A8PoMgdjdr8Qo1rCKJPV9iLy9t8CmCRGHUqU9CZB54hUJ2Q2KzArZ7TUjrqbWrHg1iPoHXjjwJNyXXs5CJko4",
  "key10": "121zK8wj6tFQyitGZYfqJEPJ4RBoavSyc67KApnGudqnKzHv7hzg9kpiVk9wyhHK69S1X2RGuXaL4Hf4wXtYn4x4",
  "key11": "4ftUxwtcdNPHsxgyDSBBStpkWs8BfLwa9sKHLTa6eTGp5A4mNmPsoZjbZq51WJX2k1qjVLyqbp1SVscwW6F9DddV",
  "key12": "5o1EqJq62HwVScAqFhJgoALruqLG5XtQvUXxBiLxYYePfdekceBR6u3dGWTVGcn79boN322Sr4jD2sPHAeR9qzq5",
  "key13": "67QvRNu5pNDptbM6K526cs8EpsU3NXhmB7Npj6jVUpU315sEtq9Rs4moZ3pC5gTedZa51xYyyrS5swddVxAahEMQ",
  "key14": "3tcg73f1FwQqfyJ8Mjx6iv2Jr5D38pDC1k2nsT9QpjbVuxdvJZ2MRp8NyHorAGFvFr9kpG29L5TyjHoK2WqNo5tJ",
  "key15": "5jV1BFcrxJapm4a3dUKjRjXoYC8hUdLyjowQH2aXwuUQe7CYs1kgFCzb2beHaRpdaKYhvdYvfe8sRVRFpPgUS5Qi",
  "key16": "4K5LhNCHQFQRSYheWnPxwxXjM4np6bZctJNqJfjjDwuuUsHLbEeKzFAHigUpioQbBQpUPMJC7maxUkp8fBD9sKQ4",
  "key17": "3MVaBgmkcjeLYD1kRxJCNzpy7fnM2bHYBHXcSoPXHLYE13sjJ6GQqWqQVn17EFLKqAETysMznGjsi9yYaAvBNjDv",
  "key18": "4dSikZcPwxdkb54J9pgRVG5XiFvtsPRwxktP5gZ4DUAcTDPSoRWsT3KAZSz9ADQCnTR1Z1BDjfsA6kQdLrSNUYZ2",
  "key19": "qVdp3JbpzY9ZNAK5rHcDzv2QuqHK6rXg3mususP3LjE7PHMt6454FxZShThkKmWGQswQ8f9eiyDoQ6Hp3XBvLCM",
  "key20": "2AvPoMUSSWtBTN494nLDF3DJQAe6LFaMc4ayUyNydQY5KB4LaPAFdiWmcboqAUgkPUzT5RxACZ3pNauQNMLiUsvb",
  "key21": "AYf5qS33NkA9aexFHXKQGPuc61WrHa4GAAazJ6J7mXrSXFqFtb8Di6LygBiM1Qnpkrrd2esWGo2Pdf1DymRtmma",
  "key22": "gt183c3BrjYqN3TTKmsaibSFSJFDptzarxm9XWzYWFjacdq2vi2zCRi7froPb4hWrVnmst2ZA1fiVbDJ1uzR487",
  "key23": "4DS4CRiFGBS2x5f6bSqbHffCDfg2hktwB5wZgFNsVBhoazSiVJrqQ6HsAbBZAv1ZwcPPwjR14QC8MLjcCwU3c6Lz",
  "key24": "2jnhG2taV89di9E3kFojagD2w97GvozvWgBbb6iMGkiw5ZvWBbFuYMp4UCRXAga6mX3tqmamP3Ks3WFM7xDePnJh",
  "key25": "2HhVBSFrjndwa3kqBWWux287Jg9NMMBEhbSadvJwnyjNs6NtfN1KzfBmREVfqQecZ3Xxk5WCjEcYNx67Jfcf9RQR",
  "key26": "58wefw2oN3fPsenPpBvfRBhDJJ8cZiv7ymup4N1g1kH6DmD7q4dvUvxWMhpePctebhcDKvrXkkvR3Tr3ZFMdXicG",
  "key27": "4ht6GucbMLUvcahbrxXJGbnqDTAKwQLz78vAC4GJKSPLeecd9A7xuDXnzfz1dvurcNFfWj1hKRUvT6xkPy3114q7",
  "key28": "4qPeZStUqwcoA6KqJuUchyYvxVpJbJ7GPRExWU8oYmvun8a3ViRQwjppggcZXAtrv9v1JN7UTAUeMNeKxDfQXr7m",
  "key29": "5NVeD2SQ67wAUnH8Q6JYWxqRo3rDduD7Hb5VNioWMUMuH8fbESZwK4pnmrDfRWPwq2zV1DezVQQjFAYw5WHjfgLD",
  "key30": "3LhDRjWWVhZG8UK5D3CpVvzSfZzTyvroTnW48Bw4kHLedhXtuaRYVBb5rhJ7bT6B2fSCa7iJdcPpDf7Dx9K23XnF",
  "key31": "5dUCUYnA2yVnEtaG7FfUNUrFQxKENgQEXtQtifd63TJo542WJbt9mCoq8gWSvhD6FEatay7uvVZ2MgGadwkMFYS7",
  "key32": "29b6xpXL4iQreSxoApQdvepSbBhq3iW1rQE7F84A9rQzq7XsYDZjetEYVsAaFVUr5RgEcYLQEpoNKXsLMdwW2nfr",
  "key33": "3TR5ud5PFkQDao6vYfBbDiwNJHYNC3fH9RaY1BrgJhLzqFEukv3KsSgsP8wvSqt9B2sH593jwdYTssCLUoQY1567",
  "key34": "4LBAc2Hh9oKGLwnqMcqq5ANYBYVa1ybHtA7kHAnREY2viv2QJWjfaVRoCqNEzmvxUC129aHy6xS2VcfhiPcGcFi6",
  "key35": "5RCE2V8GZ9VeeSHEnuCZZXHwkgMLdMNKny8RjSJM3Akv9xDtBbPNrZdJG1VhNk2vrgKh8BQ2fqt5sUTDz69oTh1R",
  "key36": "66i6jybiUpGdZjixnJQ7dAZ2RAsr458D9KYeJMeo8tNgNimsvSrYuqAacxHMJtWABgmhQ8hN9C8SDG1QBoCgeLNN",
  "key37": "5ooKNXb6rQa7CyRGiyu3E4Psa7dUdsU4JCx51o9rRCAndXyQpsamw9HQJmtfTaX3YvEgkc3N11vULBhbpFrsfHKq",
  "key38": "2MYUCDV9673aicUCqB8K5YZieUDncntqUZn3CXfisxgEL8D1EmnUgmoqT9bfktdsVHCk84fhFHdMprTn1HUwq1VP",
  "key39": "3moVySVVK6SqcgtrVAwZg8cVc41B2o6FFwkWk9XJpddxdxe9qQFmxaX35zi8cHpTioRmdRKuZ5PbC7W1bUSQh3a7",
  "key40": "4vbebEs8wHt1zAB1kTNwb1Mcs6u8HVZVTdwecegkwA3uckc94ZsxVJM6epJ5fvq4kLUaDSjNCvM9Qk5nKRPPYDt9",
  "key41": "2BEfiYP5EXUKrtzLWCVkGa3bqN8QfHh8JYkf8nEpSMQRr882cADKVahNygaSuzuMmf6KjdXpFAKtgbKHTUAqpZ2D",
  "key42": "4w7JhMMmcogyFKX8i5ZHHLBzmLuBbZKZuKSHpxwn8LaPmJ572KsaWra7J7a3kpZ88tdZvKtqDAQWkWv11L9qcEPs",
  "key43": "91ayU6vucQmia1gCtFYa3HpSDNcKZ8fh8hJEXNfpAYrdgZJsYCs7f3b99Ta5FEN632burAfSc9AKP8CqaYjXNm7"
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
