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
    "2ETAQQ3jVGaAtGVxkkn4nSrRczDqaE2awbvMfnSC5EKhkUhBQ5DiZxWKwcP5jkDkYNPaQL316CkiA8bRTHbukWR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5chN7FCewna2viNggp8ZwW9A31hQmg6sNn6vyju43B1n4C2KABcjqaTPUVeMcvrLoUgrkm64c6jMpx2uhP3xmPzp",
  "key1": "qkj2mqoPoWHkuyGoRiWNkJzR2QsRYpBQ3HPgg1h8Ntbpwm17C6uScDrMUivg2NSVYwzLjT5x79JUHUtmVi49op5",
  "key2": "3fckbNkLbncvi8cXMQJSuuJTTdyJG25aMDW8YYaooWmzitckETHuwgPNiD35qHPQaTXLXKu1CbfmaYopbHAQsKnc",
  "key3": "2KC3hcQtiLrppqpjsJF3Xk2BqdGbvc5UdDbAo1kXPv5JKMvrU76155iyFZru6ZdRkPxmp4MTp5Fjtv3uXZox9dkc",
  "key4": "2SPm8joQQhX3U1PNW11uppnp28BFj9xA898X6cXQmxsRPunNoDBU6SH1QB9Uy3BGiHs6LnJKjcCWmaq3fzLfJdRh",
  "key5": "2BCQMsQVjqqo5CU7dhp7LG9EgoMe4NrNLWSRB8yZUHrcZEEU2iy3y8LLWfNmagutDT3cC8cScjJ1UpTMcEyMg6mc",
  "key6": "2sGq4rqADpxLk9paG5g4aWK8QwQhXePRRSYvQxcnm67dMzdQ5vALzb5yoDQw8RuFjSn2aVVqMi2pqJSNMU1c765b",
  "key7": "5a4DnqrJZjWNVgvHgX3uGkA4VfivEuo836Yc8oRj3F9pfJ4yU3QpkMMHL9ootC7QcqkyU3XTDnnZBXJzud7jnmKg",
  "key8": "55i1jGaXYhaeCfrFGcRFg8JLuXDqt3cdK3RyTZVSnem6uV5YaGzGSeSrCRGTpU2xUw55wQC3ajXMqfmFv5YJy2P1",
  "key9": "2sJBEudCHaynUYyqcqMx37qgiy4VCE8mvijQKy4qGX9yD6LQjYWdevF6At9hXVZo7G31YPxPfEwY4PmAzNcHezio",
  "key10": "568xetwddohxvCYBVS25DaBkV4pheR2X5bE7eteyAVPss7HzFg51gHESyZEbCVTvg8sUwN5MWfdHJCPoLDPua5qr",
  "key11": "4Bh966x7boXo7ErHeC8kAoogvveWnnxKuXfSNVZ1iy5ku3CkMzn6kLDy7zeFyQtp3z9omQHr1E1xzaFrowfbiPBb",
  "key12": "4Pbx8Vm54cP77x7KDgWcKb8EMmbaTgN9M7SQgKV4ZdqSgYXAXYmvLxGjBoABGE7GvQVdQJanQwhG8UhWTMRfPfWK",
  "key13": "2PA3Hma43HpAPycMZcbiqJFt5RrsBBYAe4Q1N9YK92xSkK53rSPCuafCPWDFjZJ2zL6bLVxEVmk1D36ACzVe2zGp",
  "key14": "5sytmAayPjWdbaqRbLdcMd7iPMYrQ6fyKUFxLoY2inHWsjTwP7bg2mWAq88HAhqCbTuEEAndzN5oUoAUBMwjUHBh",
  "key15": "5dBnKtthKYZZEzKwYtKZUCTjyh9vdGfJzqX7GoksbzTnCwLE7qKQi8fBkYgidqTXUDW9mfTQtU8k1WqFK3XnDakm",
  "key16": "2rbxXbZtTSQvNjjzx4pdprpupwDbf5ryPHUSseLBVhgKGdyngyjCoJdbnobQ95RNHJKfabDDzxjHPP7QDvCUJCkT",
  "key17": "5QtoygaGK1oHcKNwDxNZxQbfDRUeYuX1LLnE5UTDziyP1YaUx9ogzid8wdEn2UXkhVTAosMF6kANiwTTS4maks6e",
  "key18": "45rFENajiSKBVVaRCLowGkmtT9HhDSyPHzWkGsFEpgMaCbYc5Qzh8M6qLggA3AS6NBodEFbrbcmdR91kZM4Y4BT4",
  "key19": "4rErgAeY4sGXrVWFUjssJu9TaKPP4RTMhPWro4ma3MUc3BExNeBkHyHmMHxj5BmyVG9R95qQsB2qfMzoFrBS5f6Z",
  "key20": "B1rhobNu3xfVbZipF5sxhmsLXQ5Jsz2fem7ShZrPKcztc9zidZVf5e88xmijigoPTeGBEhUVwwFvuJdnsJ1EuXV",
  "key21": "4bMnQfTFkkQqSH9pbFsZEwv7x1qzintTQ4MswZyGNREkGfcQ1WSPauDwDqfG6kBpqsSqXJi8VTAPDi9PHqXGCUrL",
  "key22": "5ULkPbGKLvzZSw2Uz2aEVPS71qPH1NbtGMDwX5sLCBLkJryiofFGtXDH2zo1Mk65rBxtL4aBxfA7bWCbrTx4KjHa",
  "key23": "2xuAUcy7xmHcpCUVLjvYLoWQJVk9xNxxDJuyKbDQKDaup5Cns6Ym3HEZq8zvYt36mYdbapQzPC4if3qEFw1Yi21t",
  "key24": "YACDgANucM5fmicSSh2Zyz7xF67iGvThJ8CkDkthM4okVoPv4xr4FhayAFHVV672bqLqhLFxpQJVvnjcYtDhkwU",
  "key25": "5mzGRgwTYAaR39R91x8sneCM3Skf2cJcN4HNGYJKS7wb7wbpsveH9fJUeY7QNZyAyyYKH4hz9BLH78w2K2vBti3N",
  "key26": "43HKy6LGjEEWzD38eaVisZfRFR75e4SBosepXJH25hEUMwQCemQmQ8NhZSpnvTmDCdqvAYLibDVnjc4ZycZRZHao",
  "key27": "3VkzgVmuJ99nykPSSfuT7rh8414TBfP1wyJMRV1hrPfnfJQ8cnE6XQPas2uWAs5bKLf4dV1Ggq47X69tTLJydqCX",
  "key28": "22WXeieyHwbMRiMFhdCN9bTZsUnc5KxyMSFxY7K45jdCL83o28vvW832b2rZ4GSF9Q9VhzqpxvXecojFcbx4oYZ7",
  "key29": "4QBoxoAWwqQDGFoeVqif5BeLS4jYUCwovKJxKPHgR8SU1oTvaJLVX6PddMwpVnEbnKrgrXjSVneKczPURyLnsV6u",
  "key30": "NW7EzBWknCvqCe8MNDfTuj6hQbdcTCXYYF6CQ5ZaE2TZqStKG1EGwrpQt82T1hrUYpvzG4U9PnZ6QCNx82Fenb3",
  "key31": "31aTuLPpqyfQ8DhvY4KBNjMGG4n2z3nAcmesX75Fqcp8XuKiMC2YCzXP3EbdJKz9tFU7bdm1Jfus9uNfrcmsvqjm",
  "key32": "4b1FKqHmc9HCwYo67gLVYt3tb1iDVHCoEpMnjdFVJiV2MZnx2TfVZuzGMGprepKhpbL7SP2pFaz6MM1s5yTeRQjE",
  "key33": "3QD4SbwSRd1g2TM8SrSGsFHc1UJrBpmm7LMVmkuZEKemTAKDE6G3F7wChuVK6RYK1p3tjxV8DKLszjmEd2AnpVEK",
  "key34": "VbQ8TCNWw1Gdsn2tWfyHHYgKWbvnH7YMt4ThK3CXiMM4iNa7P76YRELop3TK21NXXzP44rT4JJKYgPKSzQiPg9v",
  "key35": "2LYeLWDuxpKMd6KCs9BfNgoeiimZ1Nf3YBwKzK1hE7AkThPCRwFaFTquUaGqNQrqTjjef8yg7iebCyLwsRUPVuSm",
  "key36": "4nyneTx1HaLTEDbin8WnvY32ziASQXEnmC8LPHPEWrQA8FQWpobc1M8A2vZRY7f5mg4fsq5QB4c7hUUgaAsyZfhY",
  "key37": "4q9ZNUXDLGTXifAAo5BJwnoZ2gAdpiVi9bgwVpty7QnrV1q7R96rmKK9KXBo9oNyvtCFaxCaf5unabjqnSk6hF8P",
  "key38": "4ty12mFEqHedTMGFQrPu2KetFZhpCz4BJfcKLYTCsdivCDnh7taubKynVMDfV5hGunzpacstuphUg8knbtidHmUS",
  "key39": "swFHDtVqtviRdHuuLeoBwhjQRpSB6qb3ARXS2DymMmaRLxc8W9Kx6APAot5qry7joiD1Cd2bCD2Tzzwi13SfXoL",
  "key40": "5cFCSE8P4wxPg9CYpTx8qR5KjVkkccoa16VkRgUqzk3fwwavwJXSHzSPBpRapQkxomxEFqo2oeMVYUREwn1gecqc",
  "key41": "2XPXCUNB9D7j5ut7VfV7Apb2rvuBrbUbMYaxWvxYvQwy1czMKo66PWMrPLw4xyVKVbuRJb2SK7c5vJ57LVFLhqCT",
  "key42": "5JPWb1Tsyek9hZVPSyXoXbdo6tFaajCrWNHPS61Ny3jgBxUZ7Uv7cNUAfPhVh22jVde11C9Qeh9kCKWMDQgLR6m2",
  "key43": "22h4Bco6kaqxxeE6YdZsQ4hbGCTDrpxaVBEyJdP1rVC2AuutKnYBB4ck66eu7FDSXN3XxUiJ2Noc2osk9wv6N5bY",
  "key44": "NxshxLjdB1gQmmEBQVsewBpd7B1FoRnBBDUmQFuGZrg2y8n7bAMVwAGKwRiMHrwox2q1umuHgPPPkvrAZt1CY6v",
  "key45": "4A5gKuY94CN71YjJLM7UM9wt6mBeN5t4kHyaxrb47Lk3TkFLkYhzUe2PofifuyMaULeGk7Yxr8e1Gh3qrGaCZWkx",
  "key46": "5TJtX8zKMdsreYP1P69sBe9BRtuVaboNM8f91VS8hrmU7CRBVgG3RMSysy8cFeCApJ2AHXTczdzFYHJwtH4tJdRj",
  "key47": "3XxYDkYnHC4MdYYyqtKvevbKyCXexNYzftMDEnvBfeSVRTxCkPevGkEpSNSicTK3qLTKUuHuHkAD2oG4kkyeAHGz",
  "key48": "48bX2cD3r4Huo2qEScDL3WnXoHXqz9yPggGetxG2iNX78eh37ZGxe1KfVHmoikEAK27EmYv9ENGZ21JbeioUxoUA"
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
