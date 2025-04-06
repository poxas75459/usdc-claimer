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
    "2EJLQNMj7iESY5fDwg4xpeZVvsbxV6HGyYNZ715Ru6n7gn61p3h8QggviHyPbVaWg5h8XsHRZNooiSK4TjjQjdb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UgMUVMzfMk29ZS556y7DfztaX3hEP5vydNNjoyH64ifVLKnPt5Vqd38wMXzWneedHWxnK8HBt44TaLMCATi4nqh",
  "key1": "3o5SoprS7RZ3BUVLtwjVFaH6HWtS33BAe7yqP6jzbjBiRykTVFqe9Xmbj8jJoTzonMzUMDGKciiDYVcAf25dAJuY",
  "key2": "2WuHdxmZA2nB8KELZuHScVvmC1XPMhcj16ju4xjhpr6WKGtyw3AUVghbnayfWFiz3oVB6xbaRcvQeru3Es8Kw92o",
  "key3": "2pL4RJMvqroHqPcJGzzVgLFSS1kNN5LswCZuFYMS45fYikGW2p3qSCkwMYY9jr8XXoB4oMD1TaRWLjmbzH6Dee8j",
  "key4": "8W9wT3uhBWRukNs8snLbj5qTKwWg2fbFo3oYbi7cjgnCo9TY9ExRWiAUonWZWnKcQH5oEevuLqcYCDwzC2gmR4H",
  "key5": "5NzX7qxs9CdQqF8ADKWg3RujjngQWSQT95QEZsfmRzWka5qkGj23pxPSf2D2Py1ruExd6vV3CZvJ9TnPLMi7J4ZZ",
  "key6": "3dzbhMCa1gUs15TrKSWstSuFZBKGmZFbnB4FvPtqgNsHJGNSDqZHTnY7T1Vb3L6oheaxvKqrVpHsQ1ySJsUXpKXF",
  "key7": "48AdBCxXRk5kqh77yUFnxUBnNYbWPFmgWk8fS8fFZKG7gqKgXEC6ZgeVH6XtZWYcrfvb9GAJndszS87EUkWHbHdh",
  "key8": "4wdbVfCuCKq9Y6cVK7Ze9CqrzuiA4TfXTmPsXowHmZ4VwioUXDkLW7FzzVuZVC8nw5svAgFApMFPR9EyCuEFaPNG",
  "key9": "1gbgqo7cKxxS3vUaBxtd8e9hJmjKinRHZqAAadTBEUuyjt1te9D2LTzigobkMyMupzWgyP8qMHs8bLeu42j7tJY",
  "key10": "63wiP9MCLAAS6LfhWJq3Jj22FbV6FAKLKP3AtuoCguNKuoc5TRArmRXmcRLiGgVKXdLQc2tbrqHSSLQkJvmseiQX",
  "key11": "5wxcUdcTkvYzG6AkDnJVRug96FjbA7GgrpGPcmdjDHCxDdCB4TBoSZgSdDp1tR4A39EzCqqLSSZZjhNdZarzxqcn",
  "key12": "e1UZgJuWqovCWBpPmrxddPS5kkGBgvXjFeMQLXZtG6B6Aait4GUwSe6Wz9gpqH5FcsZy6GGVpEy3sQcsdWQbmPr",
  "key13": "4Voe1x2PLqSapQYaTZjjULmGM816LTurktfAe7iRNGsSHP1mkgVHVU8hgkDjb7ArV1Qw1FuTWrcJLUuuArDpVbad",
  "key14": "3j8bxqoTQgVsKDAYyjjEdtwKdWMzCvAYnfdjTibiFpDZM7SxJyykWq4EN7HeWSV3mcWgfpRHG6nuqvm1xDpp3Cj",
  "key15": "EcZJkMWT3PpKEWyE2gWf9qTGiF4KD9WNHzcLqWtpifABwXZQfbNkUxLdoYixpf7x4oBCKPNiWaDWdaL9rUFCGU1",
  "key16": "3BVoY42uHo2DfwxpRjCgCkVFGLeKWcWrgNUe6ysmxE2135gkJSsLp98WzEj6sDFQi8vSv1ioz6MZopUu6AJUcc6J",
  "key17": "2uBfCarmJK7baPX8btj6ctgBD3pUhFXR8bs4AWqgjkfWSNzFBEhVKrbRXfvaaVAjQX9u2LMVRdsEAxyLeaD5NDiD",
  "key18": "VbZBbevTGvydQrNLhjcNwFowvb4yESZ2oJYpjbeMzmmogcT6V1ojsX1BSBZfoBQbYwjKSCUnxyPMExtzojz7WgA",
  "key19": "5WgQf3J1g6nsWqnH66FnZH2o9jM2AVgAQRQSZbSAD8rgyfTyr1y27TXtwVoUi2LQfC1rxQhGC94geCNVzLKL3oTY",
  "key20": "2X2ppugydmiLw8gRXa27s4g2iskEFSP49xWypGqaZ3KmmyZCsjYjmeLzc8eTkfXVnaZm2Ai5YwdaYCowqeANG1CY",
  "key21": "4aj4yHvFAVqWhDrymAvXsDH8B76fEvah5zmAiYs8eeMiRti4cYEP57as8b3A4dTTq4rizRhgrz6Jp45Rn8aUahAT",
  "key22": "yYwvDpqjrZFnJxxGFLnSodpet2jy67FEohUSXczpftFK6XXAmVS2P9Z9astQLWHxjmmF87RA5Jiw8DxwJR1dQhY",
  "key23": "34WNEhsQMV8bS5szFAxhCmrhPNQdHt6qFnK6E5MeJDvgtE5UxbAr9qGpLKohMX4S6t93R7io6FQ7BAo2ULsnEj4a",
  "key24": "2owa2W3KiwGv7hozox1XutWXXoZg5Aak7BSy1QrqZ3vhhJxYzmJdfdg2vYxB3daWrRXT5HtUHe7GnNyEDfKB8uzt",
  "key25": "1YTQLARadyCKMpz2KU7PQYnoNX6rFMmZksRNw15vHCkejhY31kuW9ikzxFjyj4YgphfB8XCYunf3D7Kot9ZTatB",
  "key26": "3v5b2ebNW4YNFx672Baziyi7MXHXLxH73AZ8TuyGiuwFVXGckDM2Q2aTshH7PqMcZLUgdWXPZR9SFmp66J4SYLzS",
  "key27": "2AQjJYLZTc7gCibWkyAxk5fWcooKmQaNS2UujwTFGn6rtc5QqWqTS3m1Y4vgjnmwcL2eTLVdhfs1srbSYfW3bCoY",
  "key28": "5twBn8EzfZimsNDqbo1q8qjJRyCLj16w37iiCXBybq2E2DByeYAXbtaqg6xUjW3QW9X9fdKVswD5Cfu2nzrtTv5d",
  "key29": "2Q25kqJxweaHkSAh3keYez7sXUgcqfsH6RRzzE5oC7W4D7dc9Q2ibipeKngubhbMsT8eRoE5FWtCkmwhYefh5rZK",
  "key30": "Q7P1PXPeJ8ERAGxbVYNXRnaEiaMxczpFA5rf4GW9ADfMstmwVTe7ERkZDtVBRsQZVkhgiTWXQhP5jJbzTBggiqT",
  "key31": "4AMNpmZ4H8FPDyukhkYEvuyUDTNPayo9mG92qmsooPQathN2Do2XPiE9vqWJngatPpof7GmRQ3Wp8DuJV35xPYUa",
  "key32": "4bn5aW1EZ6hUGh3MjeCAiSSv1drtRz1vVHGTWYzVfQaMAjbX6b6X8iZcmPDpyRfa2yscDJW6XfB9VRNBPJGncYZi",
  "key33": "2dkRoKNcmqubYzvXZNYwUTC5qZ6i9xaSxVUBsd9yhYb79iN68ouABrWvpEB3MHMpJE8fyUSB1HCj3nVTWbCFfAnW",
  "key34": "4YLtziCGGcvFGKJ12VZfnej2uh1kzZTpmVCkwW3PoffYsD8RT6gUY14DReZDe1ckYdFj1etwR6HiXs3kRAMFMSZ3",
  "key35": "2QNcB46reyjtJiRwdax1ns7w2YLBatN6uN6QWPwsEmK8SvWE3mhhQyyCHaRV2TWVBy49WyRwtB6ifFh1fCHQqyqp",
  "key36": "5UnTLjmNmEPhejXmNAgsb5abWBk5RcGRnSz9NozjEx1CSnSQy65SaAWMcAuXcd41voGPrBhGenS9HjTCr8XCWUNb",
  "key37": "5nP5zYkEcCmAdEt4FZRtg5zV8Xoh48R7KSBcRLYXwkTPufEqx8btRknP3dYJ78oG47Shp6botP7ULsDcGb2TYniN",
  "key38": "63iBpjy1RkyuToMYQ22AF5xGPThuGu8b4c7copNSeor2Xtu6nGD8ZzbLyiJevu1KMYUyEMnLK1QMxtwiVdARAmUm",
  "key39": "9vjG4gVp4X6jJgREnSvC2FTsNAv3o17WWMj53yjwwphNqAyMHCQ2w1vzdw1f6Udwpt9zyz36Qo2JWW9YL8Enj8Z",
  "key40": "4N2FwXrg2TkrqGygTY8cdicmZwbkG7kqHb7GJcAhSV8BUXKQdCCd3pseyxmsFWwyAt29Et5SoYeSWN4axp5RjwtM"
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
