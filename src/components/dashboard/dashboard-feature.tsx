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
    "4CCKUVxituQFhhjjBz22xTVwYfMPjfDA6yWECt4SdrVeHX4JVn9DTpW2wCZkZQ5eDsv5KZpBpo9GFsREeESi5T4c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sSB8howvVdBJR92KMggaQapQbMJ9jxJW5n7qrBJVqzsLZmYo3m9zFsuVUGAZW7zazRLs7hstiwDatjUAxw1isEy",
  "key1": "5FoWMPemNv5tGZZMtBY75mx7yAyexn7yGFxEdcpqeaFwGnYJ3PgaY7guEo4VppBy7L4j1DfWaQPrx3fCa2Vybrss",
  "key2": "3NQxh5N9kjtidHjRLVPupCcbd87w7qRhhrDjMaodxabq316TjW92cAjVzpqWQXG5H18n7rEM1uxX9wbS7gN2ynt4",
  "key3": "551V6GNhoPXyb4m6kKtrPB4i5EeUmaPaJoaze8fMpWLCDcVXJyRm6UwNXYjS7yiHAkN8n2KDdMZcarizk9boxkZD",
  "key4": "KL2xK1wVwEJZNHgvwjX16W9n3fzTPxiCoPdmGVX6yT1UQJmTQ7Bqq8e3NTco9RCisLzBmJR8CDq3LfbHEwkNv46",
  "key5": "65ekkH7WxFHCSCYvg2RHRAXfUZfNyHvoohaTVvZfRbjeQTNAdrzi4u6UpwHcYr4k3ML4RBRZXUKX11y7GEMTaMY8",
  "key6": "3mpdgqPYGk67JNrvJhEg9H2Fyvrjprp61MSrDDoU2FMq9DkWN7BE4scEMi8nUHQJjx6juaZdniZ84TKqFGhtv7wz",
  "key7": "RgVjs1dN9N8NFgYKqmtAqhfqCYFofqHZx1SJRCY47DnnHqo1UVmucctpHGiq1R4SW9by8XXf49MR5a9wCDZamvk",
  "key8": "5j7zhwuBnxdzA7JX1W9pHXGzKax9hXSSE4rz7Bdcy158Ehur87H5cp8FLmQheVDcMuDiRZPX8YLeHi2wpcuVj8eX",
  "key9": "5TLLaKVgW2axov9aocAfpBcjMTjV4sFZGpmtCWfconYFJMoAE29pxr2retgJmbRJhaUWdDBmtaNrjUWUPAT4fGEu",
  "key10": "2Nj9Ke3XhenAbN5czitpVmiGxPwE8YGKxxRTEqCsrMVyFzPtHs2k3eJ3XEgwCQB6FCP9EVu7x9N25JzYoTt4SXZ4",
  "key11": "3cLERebYaHdmLWU17D6vnCpFFiUq8VHfZzV7mpAjqVGgVwaCKuQ5so4yrDpJhhkXjDxfRJzJcFD15XpyNsz7Wa2J",
  "key12": "2ykQMmftJLt8rpQRPZqYQ2A94BHmV3jUE6XLY5pjuU9XAfpixnf8VtKka2bLZ3y4ALpKwHKgyWw4YZWVVUkV8AAe",
  "key13": "4juHLCnEX8sJfF8S1fJKXPUmdCrxp5jNGxqMcXgeHgVcNfRg7q6ApzXWgzjfyjNESDhvWhRtM7o7sfkGgSGfrvH9",
  "key14": "3ChPCMZ6LZHYzGKDxAaWKgnjcYu8CrAZTUDPCB54Kvoqmzo9fM5Mi3iEEafQ4rF6H5WuNK8H5f18fyxP72SKZFz6",
  "key15": "Aaz3ZJSNEW6DpABWBHUbBW2W3E6w87YqB6uC1CCZMDEiEAWZxejLSRPcRm2W6JvvfW5Dt36hSyScWwW3iXturYs",
  "key16": "51xWwaUABwbk4rfsQ6vHoyRTyZX6NUNM5RLjUYTbkHaGzBRsqo1bc2JXjWgbmEyn7X6ZCu96q4XYrHMTpDYSd2mK",
  "key17": "3pbNrmgQ17GLTuMq8ATu2rbSRSiMa6RqHGKAUaP8BVrkK5NQ18BsACZBPKzyFmi3Az56DcfayZjynHpDvUgNcgyL",
  "key18": "2gN8jQAGhLjxMtmx6h2ifrK3ScfwVGNRu3LjdaNjeMXE4KS1Z671x39XLsTE8aj7skJ7wfv4oZx4sU7mU5fAks7R",
  "key19": "yEoL3TNU2A54uKYGZFEt3vjY9ZPgngbXSS5s2rksWXks1WzcnENcecvSta7G3wvyYRCTJodnbaVF6hMSj5WmRNt",
  "key20": "3YANKQgQjyBSBzsYZZk4MnCWsuK5U2EsPTNT8GRMbKmGDbTbSA2q9E5kAUjSTeG9V3SFz8Jwt7dp6vUUxBMtDF7W",
  "key21": "5K5Q93fNizt7NgYc5KdysetqbfLLrsc1vmXBXBNLWHhhpZ6SLm7kZK3fwGnWpp32QaaPrJjVpVyqutogq94Nbr1b",
  "key22": "5LyrCmkzqtJnFxNLB3ndRNBqKYZDtUaDHLmQNBCG98o6PZYQbtmkQG6mL1L42ytyvgikrxnvW4Ea2zpWCBPDUBvU",
  "key23": "4dpjdkkSkPpA2s3maQtN3jkobiAhXCrisKGc6sYmRFyCxAozDsaXRAGEHiRQjRQ4pAb5ftW6gK5s6Q8cvBqBwfDw",
  "key24": "5c1pf8Po7u9UAi4DoTr87CnTuLcMuQo8kHxVSXLUZZMSpW3QKwgcganuVai9L3BoaSuw7UTYSsSMnqAwtbfbEKhn",
  "key25": "2YtbkYrRhA4uEucD6x9JRdicERVQh3yXeQtYScNWiSnCvAQJqfDdfpPzoEBcG6ptRMNGamxbXF55UKScw4Jzw73M",
  "key26": "3cCuWQATymg7Wf12fitEGpSsCf6bfchkuyCar29kR3TZScyenQihgStDsJdLMH9vDFGmeucacfWYgAzroCHr8zHD",
  "key27": "4u4P1XUXN1eY8tGfczLc14gFLRm92Ah9KVRjiyjkkPBbQK3WHgYF9eENhijKVQKENRUKXa8BrKRCdXZtNc3tEN5K",
  "key28": "4gbKzoFr5gR7wVGQgYgCXkjKGpgbPuA9yoTrTV23uum2cH2QfjTJuezUn7dSgQXM2prPJ3k3Fbq2B3usF6Y1MVny",
  "key29": "LCq3YDPDvUHMVckWdKHAomG1iG3No2Vc71KoaDWS3J6dsFcnMsCjtibBCtcUVJYj2ZbPNQSR8J1NS1HJNzxxcac",
  "key30": "5gTyPNiUDLrztsmVDBTTJPNbRFR2mvUNNXzX8sXyGorWCGkQxNzajThiwjrrZUMVpkmMhyUXkzvN3JqXpS195xfP",
  "key31": "5TwrHARt9v4qwHLpKBspjwrYZ72T7MU8xCnaHqn8TsBViboHvYNATJ5yosmyFkCeghTbhpV8qiXuXvxgj4bnqJS4",
  "key32": "4heGtvi1qPTW4oD8pcWaoR77598e8EdVAUvs6CmLER8dWctHkndRbx2ZbUH4atDVwv261ph9awMv8pyZgvtjwrfV",
  "key33": "2zTrVjUaA78VUpgcHMHFKsTRK4tHn1rvHmQWTFyczy5nguMqaiKPqbV6xLjEDfHQVdh5fS7wscnsaPMDyw285dnv",
  "key34": "c7umTg5U1MkyUyHhPSfNhUvBW8SL7sUMCUbyDaEmKsGyD2igBNsaZVLxKzWDeNo95dEkNFsSfMhqfC1PM8jfQZQ",
  "key35": "3Y3zLDbbE3V6WuoQnHZHonzMwaivr6PHNih8C881hh48jAjpE3jR8afSJDFsDSTn7dSaFCkVg6U1FZDqJwvc5hDk",
  "key36": "4tHjLf2vSza7LDfvb1GQuiBeUGLdCiqaAE9h3GpSiuPzdEkCdsspsCvD7Q66PReViZzPdWdUjU53tUtJ5RcpTJYe",
  "key37": "4KasYQds6UAofkm8323kqtqWAq64T5mzYVFKboL1MaPqg3s7sjRS2N72SSZgUeLnM4eFqcKCEfUesa6pRz8Tju2c",
  "key38": "5TrqijVashSMVJHRywjTfi8s1k1HMK1HEPPkQ9nDFky4itye2WvfbmH7QxgB1VqPAQYF9sMkfjfjg6YY3qW3tAX3",
  "key39": "3BJfFJRHLtgyMd5pnaSb5kA4SF2F3LDifrhrM2QfBzuF7EMq1oXnW7gqDmvR1sXcN6hCcCwUWqbSXHNoExo6j1Ak",
  "key40": "67iYKCx4VpebkkNLLJd8ffwiQn2YF9tyWXWc8SzTHigfvJzpXHSTdotrqreAt8heJUpQ5HU9E9xf5UqBFDZ81qH8",
  "key41": "eLUQq7C2wRoVTdCeQH1qxra3vz3RTPi4StiH2v4bQJz8MzyVnGvvW1FtPVnYFSdBV5KoeKpzu4nSQPqqMVSwxXL",
  "key42": "A7sxB6xs8mm5TFxwVZoMLWo4zvBhPEUrbjGKNSGAZFTtv56xQevz8gGb6ZiVzcvwkz6QEFm1822Yn6QtmNnyqU7",
  "key43": "3bfDU2P7pjRAZYhpgBC4V5vAwRnh4Ur9KkmJ8StVx55sYvcGVV2AKmLCGoF8v41dPQ4L2kadfaA8UdETbBn5tePA",
  "key44": "LVKhcLjACSadyJm4HV7uA5i3mfBuuxvwd7j7z2X4xe8Buhwt482QDb49mL88feEnhj33h21m3hxezDwBXQepPzt",
  "key45": "4w89Gq9d8KZa6Ta1ELAMyn4TjD445oQ6yV1t1paK2Ek5XqKAdsvefBar6ZFTCqPEgcpEYFYqb5vGj7sLAJDXGbpy",
  "key46": "4PCGnjm6rv1fFPVAaPAt2aCo7ZDZp8GPGSnjS44L2ZwbuWHH3WQwF3TW9DojgBTL8ezukj9iobPcG9LxewTnsd7P",
  "key47": "2oXTAhkNFvTMBQyDEDABzTSPxfsCgDGyWsf1p9TPY29Kta8DyqbzE5bV8Aeew7tRSHmh1ksfzJfQEVSRQjFpP5fM",
  "key48": "26YRr8M5pR8nUpnCZebdNZ2ti53gPban4JVz3goX3qFecZtceWCDSs6eKLkfhPC2eHhTkpUErumuWvEw2S3BkJzP"
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
