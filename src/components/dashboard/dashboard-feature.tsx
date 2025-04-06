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
    "2N5kk88NEeoBqZzFPkfjwfY9puX78NjeiEqvYcPssAFmSA5z3eNhJgR4QoHsAmx5wWSPVvzkikJpressKtTQxZLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UhyWT8kcFVtidQb4sJHkecjFqqJBW4PqowbnpmoVtYrqxQdkkv9QXdc5XxdmPfYdMJ6pAQ9gb1QsWS3oysqAxGQ",
  "key1": "4uz67YWtDAzKwzHesvLvYBY41zaeBaRAbC3u4MR99DrBazTxKrotpbpKyL6X7Xv9rfmymTmp1T5yfjCTFZ4FTLqh",
  "key2": "53i7sP88Lyi5PMRq6Cm7e5QKmtZLk1rv1dM5Nr1JHdPxK2pacy5xYykCL7M6RJMbqGaYiCkDw84JssBktnoZdxVh",
  "key3": "4fH41DL37pHfsXkF2eLrKNyYxdzm4NYFeRRjHCBYMwCVefendVEv4giYZVo6NTnveFk3vAJxKADnai1cRHX55uRj",
  "key4": "3oVj9w18RdJDqFShKTmMfmPimptxC3abeBStxVJjzSRedmVNJhHTu7CjiEUczkzmivi2G6er5hxRvmkWEkUTaFZY",
  "key5": "4ddwKXWfQEBc2i2EdwThc9icuGsFu5eZbebdXEwcB5mY1y5CYFttF11PFMLoF4WckpWszyvs3RAPZPXHiTbR8b4i",
  "key6": "5r7z5p1uXQ78si1JGGA4q44oLgtkjtUn6PVqtSWpefQjxLPmQvtYK4tEGYAgscjARDzdNtiJz8vHcTWdUYzVi5pR",
  "key7": "qoxDVmU3V4hGcd8kozaFTZML1SSBW5vhyCWHhFaaBqBGEoCjn41k1QAegX9wrGMYhofhjvhHTKT5QrTwZWBe79M",
  "key8": "3v1pZBSLwHU3jfxoshaGWk7B5EU3zYdWxgvnqAAPRNCL1HeLB6yRafzviPBoU6t2B9sZhvsZJ59F5eQbQTnf1fNC",
  "key9": "3Bm4eNe6jicEogF5Grw8Pgwnq1GPT42KyCyfssj8VsCqTSuHJWRM5Wq7xbYwtpD3cNHZ5aVxQbnC6Y6UWhwTvrG6",
  "key10": "5QSW76eu1DXFESem2dxFupToAUQMHAM3njHn18cjUNFBXVoqQKuEB5us2hW486u3ZKeUjcSwapMeJjdSVyDhRUFy",
  "key11": "5T4PhJufAkgJbecqokfrYSfGXJqhkb2jUGYTqmx4caorJkMetpUbSXgXZ7BDo411o2UDijyFVAd8dW643Ydm6A4t",
  "key12": "4sfU9ceZc4B1YZADxRahGnKQxN9qNJtGB5ijHhEHXFpM3ZNrVchhnbSmZjD4SwUks1nPsftbQPWB1LhowhuWWnME",
  "key13": "2Lj6VJaHKJchq8BEN6Qrfm9t33894TwPqc1ww3boUzxyigY64nRRehvzvC4kLYhf9AeYAghYStCtFKfWDmGZicuF",
  "key14": "4TaG2WPfxkfi9vvzgnpNvKNcpSJwH7WsR1mZqwT6z52QbaMRMj9SP2FyC5bqhw3e8vufBxwKpzwhWV3K64y7TdpR",
  "key15": "572uS2WTXiS4AvYUMPeQffJUwAbGHrgSuVvEC12bm9FWqhudDzDeT5BzNwadFyve1p4yCqdSDjkETbnB3nTbApvL",
  "key16": "2nMM8U5sjN8fcvmr3FDgN41PvXn1dp8QeCTiaDxYwBzdWsDpbNHYBfGYJwXv9N6NMK1yefxjnpHWkSK3hkTvuULd",
  "key17": "5psDU4jdY9xTUPWDsemW3nj3AVL1xKkJtLEc811qgvtAczZuJ5uDXZkXKt2poQ6i1WkoNkKHKcfU95YsQNnKPmE5",
  "key18": "3U3tDkAc5n7Mi32Egw6zxTVsiwUGGueLSzrAUBsvxLCofh1dAXY84P6gDLgyWWbjFLNwvdwSMxqE2zE3wKBbcUMh",
  "key19": "MriSuNdY4xwnUnjysd9g63kYj3r3QvaktxSyAzjCET5ZK1DC8XtCmcxjEWPfRZHsqE9AR5ZgkMBc79pJkvgESo2",
  "key20": "4zhKhJxf6adAmTPYpMjgnUNrikQvNssD83W6iBGhc1xRzd6CtwscD2sEaeDwGTpDYcYmZUTzBf62zzavL8hVeJUb",
  "key21": "2GTZ9MVwqJZ2Vc5zwQ3KsgBdknAdorNPewbn4YKcyN22DbvJRSyUntJz3UjT6q5jkSQrd16P5hFdVrxs8QcqWKYv",
  "key22": "62TnTCbPb2C3FjQzt6j3tcn8jR113V2C7DkLYcWRF3TneTGVqtpbCgijpZeff6K7CgoWBuRTzF9diVjP9rF8o9Yg",
  "key23": "2pkTnKpz6MiABg5g3VwQf5TQQg4N6wb4r7hDPM3E6mQEAQ12P5n3qqvDNuRFzn1JWjayuhqo3YeXmDmNy2HEu9Lh",
  "key24": "nMfALEptWFWNgpTJYznQwxg9rhayXkcgCKsgcEXUbQCJcg72tJdUQrsSQkydPcwJRoPMVbNBWu8zAUHGda82GZf",
  "key25": "2nyWNfkC1LPy1SLQhqnNiTLDaXXxVKyprqr2uFBe3ucdHe2WR76GVL2NxqRV3btyshdzuktjX8idyfiHYnzThvKb",
  "key26": "28KJpjJHiLeZzM5h4i3Xv63Ep9SGExyzqatTXQeYLxBo2hZ3qPCrVfS96SoU3kKNi2Ua8Rhnagbgucxjr2ubZi5n",
  "key27": "5cNCDNv7WDqeEVJgLC6RERLw2ySvBf3w54nmRhZvh9p91HPqYdZLzTYvkKbk4oJnCKKSpoVbYJz5Ew8nDAoK9NoT",
  "key28": "2LoKfW8Nv6sTeWCtVCr3UF6y4mfKckQXN1JHP5JU1hRHwg2LfEiLZWY8LvqxKuEZiTRN2kn7EwraysAErtbfpBj",
  "key29": "5bwJ1NFu8v9RiHkEUZ8ohKtP6VL3Q4bHgxWucowbkwGb3QB1BLGNZoJKmhy9MdHAKdcS1GG7FJHZxe3HgnwFHVsj",
  "key30": "2SGD9ciMwijB2Xm2jXhi3uyCPLCRMspkiXtsXauNynNquCukFUy4LZBML2LnDQm6xNsM5xdPaM5k2r4cnGQWwFPX",
  "key31": "2FE5ZLp3Zju6LAtaybiUHuzfzB1NXbebuEciPz9a5Gwb2vS4A6ZjHBs3TKERCPgqEA7KtVe14dRYB78yzzERoPww",
  "key32": "pWXs4fqDyAjE2KzVCd3UgEFgsmo9PW3XnKQSNVHpePpj9U1dgKik85mGr1nGAeAh7iecrB7o2DkRQqsQYuMJWZj",
  "key33": "3RRzPsKmvFGD28LNJ8zgm5mjiRLWbNVB2xRoWGkbLrxymqtEDY7AJFuVKaYr8bMG2fngcvvzwyVwW56iNj1zrCqK",
  "key34": "Z9KSVTmH3MZ1GjD9ibcTBGYSFgcnQkgSm1kLZCbruejq9K2haRXWDdPXpQbzq8PWw2acJZgFaXzo4ZYgyiWTAuL",
  "key35": "mVvQoX6SMzcmvnKHUhh87DrEMupohWV24ZGc2h6G1wMjYdVZLDb99UaLMKrspKFVXbj6BQMRSd7kDPFKtkGprTx",
  "key36": "6F2A3VTvy4j2fdCjz7ihpd9nYkAoibCeG262v4wbmufHoWhGhHyDHHwssg37TM29GbMcqSYB1mkxi1FF4aSddt4",
  "key37": "55DYU5Pr9dFnksBCRTND8K2skhepssyBat4n2m7Z9SZZwxXtbbqi7kzXwsubHC6pdxeEDi553EN5GA4podqYLKQj",
  "key38": "3H1c5MTzW2d4p9rNJnFA8GS7ZHapTpCqmcBjBuTe2zfMWNepsrbZDD7r4bo3tRWgKZL4PoTHE9wcNTpbqeDyMtXD",
  "key39": "4W8VHVzaz8k8AZELtzcvb9yxDADDbkkZ41cDjTEz7YE8dYjvLJ2xtYT3QpSmAxaaGakSwBRSPBbjbXagSf915nM2",
  "key40": "2ZpjqbWcaHV3tWqG4v6ryT2Cic5dJ1bKxwRKx15Jse9DBXXsayHQpUJqcpiovmgyqKxyrsoBkMxH5q4AFB82zb6J",
  "key41": "2RY2sn2nCDTwg1dD1bhbckeZ3WCCQFgBHEhAoT4s9poZZ829UUoEx3UfDojdbv8UJuTg56xUMXGWXPH9cy8dvuGD",
  "key42": "5GwNS1GFzzm3DaAxjdN6yaTtspixovjELXVxxLKcFA41vUg6HFd7eQSiJJUWPehnhXQW39wtuiZCnqdfeiLCF8vy",
  "key43": "2MtNQkyL9Cci6fSvk8Bds2ZSqwNxd2ttPzxJHvhJZM9vr6KaigdsX78vpZEWmG5i75DGQuTm98sVwNXDHWQkvvSu",
  "key44": "5Q7RHxwPuQ9jWxvXUZqvwpFjtw6kwDTYSMnjvBLf67BhaosKj2MYPvkh4kdGHRoUCaq72AoYgHKNsteGxftqzhrg",
  "key45": "qpTSQyq5A7NktH9EKCdqCgiYbcSWEJ4TZJ34hWzd5jvHDfNtsYTajot6uX3zkneSJWqWpe1rT1Vs1jfH14bpUVj",
  "key46": "63noe6WKiX37YpRMMX43iGXob7taDbQMmBAJnFQDkCqj4sNE2oWF1oaP64423s91tmjao3hwMeHAGrdZvrDwyeHp",
  "key47": "LwFQNu1PMuNiToZtd89u57NQgscetnRgcoWHyaYsDncQYPP42kUsXcg8qGCnymuyy6U6ybf1Vxwcu3WVpYSZfgK",
  "key48": "5ALG2kQ7xqfyJrwBL7ia5qBxN1F6771UPLW6BsdRJwS81Uwakw6BcRB6WPsGnD9QTnEtdSMxUavr6kguSWBVwywV"
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
