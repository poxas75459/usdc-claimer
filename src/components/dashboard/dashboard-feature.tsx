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
    "4e4zRACeFZy3nfhVJimzRyQ4QsJkJnP9Qq2G64h6NPLqSoCDVxw3qRkTrRjC1AJa1TRgoY8fMEVJ275m3KYejGdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54b8uk2kL7uXP31W3yKhYJCpjtScD8v4zjaz3fbyMj1YhzS7xsn9551ZNfWoEJbE33gV7RBnxNb9gcmMYT8Ektt1",
  "key1": "4kALFXh5KGyYbqLReZKyMifHJuYDnDCEvZCnNoAEoGmDWKkh6VC3QUS7Zc6KQLkkxWWnqftLSLRppQWtRq5Vagsn",
  "key2": "4Xx7M7p3hpvZMSSZu2SfaczV7b7SicTgBCW131zxVpDvAFMdd5HJSVkFAmoJ72uJSCgmprXwuESWY4akmSjy8dVE",
  "key3": "3uY7qgBSvCsc5g5fh1vcaA6kcCiThs7efuHJirwoUBDDGP2mZ7erBe59kj9oKJPbo1d7Gz2Ah9TuFTHW7A52sKjV",
  "key4": "4nvnFBctFP1JwNEgRg3YvaTng3iX9jUyRqmYj1pfWjrKynnSUekwGXTAFarzHodH2oE5wpr1SVs5Gvh6Bc5jB8nh",
  "key5": "5BVQs69xbHzmxq8Cynm6Bss5HR2xkpWyNwMHQGRqcw6Z9uEALaKSrytQFaQZse9MQmG4ccFjD4KcyFuxVKqXjZ3B",
  "key6": "4qenPHWXB88v98xtGZfhRX5vwnJkXy8B1Pb6aJaCTnZGZbzz73STBiregnrmoADXErDhapj6orHgtnYTHNCK9vgU",
  "key7": "3wsafp7GgVquUkZCYi5NR1h1XbZNBmbbAwXbHwewMcq2iLHLmud2u4yBM9spr5tjdWKQtXNRsPoUENQjtxxJhcRL",
  "key8": "HK8Z8TDw92sNmFi2gP2nqAJnx44ziBdaSnM2Z1EvMkCcxaWKHHCKfNSNMPaQ2XViBJvRuon9CnsisNvMBD9Und7",
  "key9": "4Hd3wzvSNo1xUpXqB45rxdGvUDcvGMMAUdL1Grny1aZZx3xhSf6uwUHjHatTmh78mBiMMUbf68Gwj6KfQEHCmX4w",
  "key10": "3yz7NBUqjZyrFMNGm1wLw19CHCQKFDu6BD8528Bd23doa3UfL4z5aiM2bCAScQ2t1rpUqVCa6VwacS1ybwfNVkAf",
  "key11": "5P7sjGnJLi1Cc6qz49iDxPno6RkJxceQbUHN3uQQvDRVHsHEeXQSMgewWG4JN5LszSPrM4nigjoUNLLQ1pZY9v5i",
  "key12": "oZL46iwb3Vte6kebWNUWc2o6Y9saFqaFQtjQo1csNY2zP97U62wxzkoAg6XSA6AXZUqxHW1MzEaaUvFDmwFwbDD",
  "key13": "3SiXLL5SNPzW4JwVGwfojR214nFr9XAkmrGvoQ2kRTdrpJFoSCx1YndMtQtAzJFdK3uHqAT6jNEiekHe5JAPezwR",
  "key14": "3ZdHkA8CiweP6JtJUPNBprs9HoRMzd38TrqrnwrdzmjWGSuKnUC67zr4fRmwkki9Crb7CeJEbr8FCQLR4tj16jhr",
  "key15": "2sEqTDdVFXD9uxJyURJJm8TDFdfmBARx1Yp3HoXvvJLphR5cDXSaHAvw4hnDA8E9CUUVksijRUwH83yucxGKBkD6",
  "key16": "45QoPtQs3FXSWwBRcAhj78GZAhG8GRmKew7a9SexxwTMsqigsCY9AQ5SRT4C6dCtjV8CGLTwGwE5KfAfwbBBbmAY",
  "key17": "2geYo9fyhpgXu4iShPhCng5gbCrQodjVaDiYVvyuSUdp6ZV4UPC4snNTfZJdUvz4a8TwKZQsZ4vjSTDrHcspev93",
  "key18": "315Nxx6PLUVinG9oYgjRBAXSpYPS1YmkYVjJiy9EijVKLLD5f6agb5zbiGvW9iiTDKLdGgJSLtEpfY8SEHp9hYwP",
  "key19": "3mp5ADWXvELs7Cb3GFLCwuj1G7816iCdJLP7akyDEALHPwzUf6sJuhTdF8R6psGNiWq3Z4TB8Gf3HqD6psXWcLTB",
  "key20": "3kj3g9M1maJ9iJ9wgFAHfd8gE1hw22DyRm4yb7Xgb4Zmc8ySBucGwzkNJsMWA9YCtCWsvoAGJETRPWBMBz4b1ykF",
  "key21": "3Y9suGDHcrbKDVZGQG1eSvCmTKADynA6AUmgyFe9BGxpGEHJMSU9Nc5HtjTTc6DWKW65Xg6kJddytmYVWTn5fd2o",
  "key22": "4WKwE3TeaUc6RVEA1xdGwYDPBYBuy3WuBcp3KBP8Cq9yw6912XGWVnHqVr5qcKpLq8tEcki12njTouAKdStvdXBp",
  "key23": "4HPXVARGQi74KpykWzy15XAgqupSeZTHsfmhFG7rftuETqpitnq9NpvLmVWn3LpDENFQMRM6ZYhWFZqt6SqKjPKV",
  "key24": "2oSUBxdzobGPAr4EV54dAHocxjuG7zTFaafDqqPcFJNzVU79ejyJeMsozuGi3piaVavP9f4VErm9BgCMApKkD7HG",
  "key25": "273pEomcu9QPdVB6BihYeEXZ3zjzuUweDPqat6TWNe33pPfEW5zyhkQ4kDxeUGv2BnsFXwV9yJcopETC43shZHPN",
  "key26": "5nhJ1SGqw4C6mQnnJUVudXbWASjAfLNbvg6WXmqzPPxurQbHgmoiQTLQdZ52vP1yaMrkubLQAfxtkYjnbo3hGky6",
  "key27": "3WFSmTjFLhvkcyMLajtn5wckT8Zk342xJLxGEZbiN1AWuCHcG6HvnXEC1P92zM3EgHTgojBPvEULpitHNyDvrF1a",
  "key28": "vPmMdpBS327ptwPtioJKSAHGUsM2vYxHK4ik8mw7MLQEfTX7EAdYLXZgzbEjky1uyTtN9SW3xfU4MongnT3URLM",
  "key29": "N2ppQxqHvGNqEVw9SYyeQZ7yQUdmZntTKJ65LAUS4V27Ja1BWCNrkojZ9u3HRDJh6Pd9bVKy2PmsWfJMQikQyvB",
  "key30": "62JH6znyWWEeHc1WVbnvm9GeQ5bmPbHYjMD8oB1XQxAseg4XdfEBaiDABabKr5FhjJPNTsXwSrmhBaRuTEWrYsq2",
  "key31": "3W1KUNp5mmeisjX9btkA9ksea9V7avDLNHTbamHKw8R3FLx3LqHRw3Cw5Sp7TbQTqEVeHNFm5fMM4fp259yTcAj7",
  "key32": "5Cuobe7Jgot4pgy1KiW3KCHavkoWsbg3e8daQEEcLu5r9HHMPaRvKxyhvRNQGSmgQpq2uUgNwx4winT6YdpUHNxQ",
  "key33": "3VDB1kbnyyjQRD1C36RsNkUhwXCXJb9pKc3ZRjNbpSPUasinoWTs4GNocfmaoouZGPKPLskc6Tia8M3ZfEpvHTPQ",
  "key34": "yeTswx8uMhL4rEtRYuCfiLWPD6BbZRG1so9b7XqSH4jJppQSst6FGj2DhGRboEVsNJPZkNhuqjNQWQeKTeC6Kwe",
  "key35": "2roC8VLhz62joFoDuNY7WuSpBjRzntEs38GE425UWCn8Kdq1f3NyeACEDwbTrghREMPM5i7UuY2VMH2hpiPpz2sE",
  "key36": "5fY286GUPQAsGEBo2eBNrKthiykTcLg2niETFKdJourVbmbX1QUmsqqJ3x4mokMnu2QWeRix8VQsNpUms1AEmhnZ",
  "key37": "53QWZNreZB4uewfUW38ApFbBGdKodyzSaWKnSxvWutcqy8cM1C8rMcez2BoN2CJs4CXvXgnGRYkMfNmr6M4hNaPw",
  "key38": "3HiHc7y8fPXULmfYKXd1K3hXmRv5acYVLvoJVa7yG8uN4yQ25C5HMCFv675YRoBZaKo7Cm9m78NdyGNFGo6wzFtb",
  "key39": "riQdaqdhG7ENXQS4TGM4z69UMytL124Fpyk49UBoV1HX6CBURou6riQ7kwTM2rAAtK2H3PUhUFzXXhj62A2ECnJ",
  "key40": "3KhsFkdEm8b4hz6ATtAnoQpeu8VPTxGRhkb6BNSsbjXqrrbtepB45cPUQgpF6LnV1tmbt4jnpGWYS4FcDL5JyQjT",
  "key41": "5GjZNXgbTAdNs8cZeecJxGudSzxP2KeMFHF5tLdrpwX7NG6T5dD4uMABA6GjB2VgvQEFnZCbbRsf9U7fbEtY85LA",
  "key42": "3ywXPZuGA4czpm4yExRKEUbgBkFSGaDuhrGrtHBCie6MnWm1MgaFpwEPx59xtVAsEfPo2YkLxNwzHQ1FrD5RZy3R",
  "key43": "3bgAd4zV2paep6gQzsgwWq733p3pFumXbFjsWvzfsS9GbCDHSoW2CELZ65175sJHh1ihGnKGF4pkFahhGMHytuLP",
  "key44": "4fu5QNuhWTD9NzqPUvBXWvWMVJQratepYLbU9ScBvs1Cfvu4wVc62kH3cQshuMBPD9Z5YfpwJXWVaYAg5aTyFteh",
  "key45": "5cP2xTEcJ7RDDJcma3Gjgri4vsZDecU7Lb3woWvVFpAk8Y5UUyn1rZmYpKFf2M38sEiwVYKS7tCPabpw3UB9hqN3",
  "key46": "5o1hNhFYMJ9BBTMwUt4CwHnqELaLr1uYT3tqWPGk93mbEWaU5Tr5gUEqBUqUJEP7hQJRP576ArDGwkWGRNv1jWuk",
  "key47": "4fwDhrEu3sFCr7L9UdNEZgGayS7Sad7toU8Kwtjq9MxXU2gYf1TpvcjLt5t53GKPiw3BgDgosNbFmLvC1FLVYoyu",
  "key48": "4i9TLFm5wNiLsbXhA2mR84bRr3mqc9ijTxjQp4GFuQiXTXbNhjKmf7SeSuw2oQpEEFWZHk8cMEG8xY9fzGdrefXX"
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
