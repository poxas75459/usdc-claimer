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
    "3xHciLUTvZsA5vRRRtCKzedUVMksn5aKb2ao9ZrEBGWpVYeyVSBAFDVetjB3VuoBnW8Vhca9vzCNkZ4ameoA3Fhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DfECtd7PXjJKqsyNd5ieUpcLVsp478dsGZ1sWCBVJXH3Hbuo58DEAT5FYFcwq2713T6LxYk8yvuZfTLB1N2gqhE",
  "key1": "17PqYQ793voY9dgN3HiTN6Dd5tCgwwsRzgAqKmpTj87t5us4jVESgAY5mDzaa7wuLHneYqCqQiUNr36XAJsS5Hj",
  "key2": "4vV8FsMfmUXm2wbJWaKCXSxpT8X6yRfLZ1iZH5n5MMbjuGuth3fVQMH8RzfEPHk98Ap9Wd33pK3JskAF6V67i9dV",
  "key3": "3GLsP8CDRGpjj983Qcoah5b8Mspd4r8PVKDUbbXYrZhkGLGLxbyLDX7tDAwPcRNEGcEG295G3UPERx8sL2TJsy5q",
  "key4": "65Pa79V3ZtyhjfGnmiU8o8iiiCsrMJvngmVuTU1Toh1iNoE2UPcLECxXWQDFiyxc9c7tCJ1SLGoaLDf7Wm1tN6M1",
  "key5": "2DPSdsKtVKrf9sU7wg7Yxdtuttnkb2KRqjNnBwPhoGAofAZbczVAwFtDADucPfSfrTLkgNvRRewCjMxDLWvqMhrB",
  "key6": "25PPvhx585PQa6DGR1i8TXCHNyGGxzB4vZszyjxDiR7YtyfeJykfR1p1aHWFxcVv6ZyMBqTTjLu5HKBL5TuyscjR",
  "key7": "2DzU928gxRoCrQefdRQdjrju5WS4wGQsCukZXiyLfVW4xgmvmRMu3mCy4xAzm2Vudz8Go8VRhcCqdBjMPnXEU5nw",
  "key8": "4zERqcURqTwe36gQ7Qeb3nEoULJvoskehKj1Maittk23yxFx24mn3yRffbrK1K7XaC2J4TRrjA1duNdKaxNEz67C",
  "key9": "4Kd2kxsnNhXqFzwCBTpyDDfH1A665HmDN2JKAgykKu7mbJun3T6WSYCLTqPFKvWL6BBvtgdpz5dwkfvKQ8tcMHsd",
  "key10": "5jsGN917xcTPeZZ9Xo4296BnQPom8gTGiM6o1twXEKhFfbVLT9LpdKVX9sRBVL3EposyjZWgr24jTm5fc42MYmJo",
  "key11": "2L6b1SR5z1seGTrhyf7AE4gHwtGPaTG9PiAgoFWK4mkbkmZri2zEWQGBovagh7mZoFuP5oTTqMmdHCA1FeLGcgEn",
  "key12": "4twZhcMFZGUsS281z5ZofJxpvreVG9EhtdU4dP3uzJWXWtvEqr8Y2qqbmYuffq7ieU4S64XBWr7JcGqJLbC71aYb",
  "key13": "5RJAAurYCEnRsZhQGNgEjotsqL8ZJfMTHSSLQaPTXLzuKimcgfkBYpvK7JSffDbhJECYejUi1iNoSmUFabjmv9XC",
  "key14": "3xAd9SbM2XYkqeKKyEufL1zFCo5XUAsrKDqYWNhoftazL8ZkK7egvi2CFfe2dVGvNnAEhtjdVqungfzZsc84de2Q",
  "key15": "2bU8T6yqmFQE7Qh7gR8JQ7aWNMKhczQJqWPSkauH6t1k1fCA6vJDMzbdJXu5Z7wPfsbohh62irDhHZf3Rhh1HzG9",
  "key16": "NajwdPnxx7A8yQDQAsSpKngwiWzVpGe8QJi7ZJ5oT8QfqeHPTUGpGD3RsG1K29MXpcxHt43XzDrG9b1mrAjNTiL",
  "key17": "3bbkGsrR3r54FXa6ettoD359dUDw6jp7xGNhD47UAbuA2ypY4qUWYxyHqfSEKUbPq16KscdCskJRw4VJFyPL1vDW",
  "key18": "63GYbR74EtAgPX6ZtqGzAkqrNZ8fw14PyUFJTXffkSMnHQMZipfy4f2Doa4PLqCEEhyUaUxnow6twXjtz3P9jqbb",
  "key19": "2q83YgzLvpSXvNFRq4oWnqmkCf1myoc2SrGPQCHaTcEQALMSNFbBef8pNYjhW1zYL9vuXokTZ8e2axKS733qnAGg",
  "key20": "4uuyNqQmuJe4xNuW5ZUZmduSE2ZNsVWPDPPSZii6Y9zPRZxbuu5iNx6GdoEkV8pfcFAuBA1W9anE6NoUR3UJNTQp",
  "key21": "1295q7DMEqHFMHq6uLeviYBYLpkksFMMgNgzDhEJSy2X4XUTYUASmpG3psyvgBeiXi6KwpWLL11Fhb9R7SGhxfe5",
  "key22": "3jk7VN7xH8dRAzsJrMPEEXUQoveNGfa71JkDbSArV37BUBFZe5yL4i75aEEHfUZzmyJ1PPrcRNka2sG9KpnFbHgy",
  "key23": "3PoyVuVuRU6ddtefqTXypvfkcpZrWpwMEKifo3a6CPgMWago1eiYsjeGwTEMXvGa6FyKGwUzybfBTLEHbqTbhhYG",
  "key24": "AUv1z5jr24PydJmmAHA1oB6UEmyhCGytnudD2Ae5mdfLiWcR62i1TDmHUn2TUbpDNYFuxptqYvQUvM1iatNBcEu",
  "key25": "UU7ubE3LvFyyyQTgJB9UZ8yVDJ1A54RKaa21RXg4SfCxbxxaY61Zboy8Sn8atAvFoizDgUQ1GHk6HaG168E3vjt",
  "key26": "2gFUZ3rrm35pneKi4Q2etwagFh1wj8PARtnMMzZn1MBCpYXjkRx6Cn1VWmPN3F9DypPTbNWDzc9tvMc6k51rCvxy",
  "key27": "5tVh1LxTQvy4JqaBUYqJJE68AdRMKSyxvQSPGk3Y6vGKULcaudNGEyEFhscjf5iBLRqZ3TLno8PNWuNqapGR8JPe",
  "key28": "287VLw31oZoEVTzNN4EFzWd4xjcfpfVaW7V7xXyAUiDGmabZpwvF1KFXWQBRD1UguJ127H1oFiP8XGszv6Z1PyaB",
  "key29": "5pcdQXQPtqoyLSiuskZXwoNvvx9KgWgP6mpvcoixAESyig98PNFnjZyhXTUVxz6NAAu1vPEPfUNRVanE62b1ead2",
  "key30": "65aJC2o7Y4c7ggKgx96rSyDfS7ijjafryczJLiEajqbGoUtn6YjYHCo8bfFw2vSouxL97P2JDG1bEozp4wmH8d6x",
  "key31": "7z4EHEW8jMU6uqwdGS6BSEtHMnCdzuAkXuNpt1DvL5NwpcCcY8CkNkd8LCN3wsLWvY9seBawFWoFKNQ8BjrAd7p",
  "key32": "5Cu2njKZrhsvG1Q8AC8MExRcCSG1arLsnLkMa1fo1ioBCqVKziSTUF5iqS1frmmXKJTwZcpLuC71GvPNiB5GoyfX",
  "key33": "5pB4q9bxg5FHoQg4cXGGmmMCpPbmJkAVCLS7P2knw4kcbwwSuxUFdh4vZVa2hNuNWkpQdQMFJkHsFNjQQeVdCtQe",
  "key34": "2fqdWg6HqgfB8h1v8sfnHDfyhDpBSZF9e5fAYmrRJcJWguuFNjhdZLeYZGUHoeLFJYcYwBnFBNZnaNgyWCsM3xHj",
  "key35": "4NR3vPJMtrsB4uAFZ3oNXmiRR3s3CQ2qZ1ut8sFjfKchCcBNwn78pNq2YK451iLNq4RFevQ9hGRP2UVFmh63PPhS",
  "key36": "4DYGQoogJb7zrJ2Wtoeos4a7XBomPBmA2NRahGugF8j4VJFHgjRUxgMKtpx1keC6AHKqcfmJSuYhYMkyKBC6z1Du",
  "key37": "5sBBKmCmVfhBzBwRFqr4uewGkRvPr5W5Aig5MYnfNXomQU4Djdb7phsbo3unDqsH2T5XD3wRazoQye9UKQZxVVhb",
  "key38": "35dyX9SweZ5a9UcSpxST5f5vuupeGdHCtRq6AtRMXK5dyJtZxWc7S6E158EwnECfSrEMyByZ9zYzPygJZqzDhFST",
  "key39": "4srvxCcJEwjCEGKFnD9nA6XunhHLycU2kC9rBgcq4cABTgNVYXSEFbHdVaLNvcEArrdjzn5hU1cEGkoW9tbYeFvQ",
  "key40": "5jaFPZQWd1qYg4SyMPnd4X4sJfETQmrPFZZyp8v3Wxg3TVR6xQo1mfZnNvX89YW88iKioxsa8N2vNihDrrg59gzV"
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
