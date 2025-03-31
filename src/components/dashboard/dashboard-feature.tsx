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
    "5UWQapEhMyHU4G1LnLe717BKr1ByYpAX3DB2whWybavP4y2fU5seNiKWBtDggF2qtZetZVYPiK86AtTFLpqRuf2p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S2PXwpR6b7JA2X9Rg4NNPAXnKLcbzJGX1goX8PTAn7fMyg7bRBnP4rawrBe5QwfX47F8QzUA298LHs7rd8MyvZP",
  "key1": "2SJND521BpjaCSdTmt2YF2Cnomu14yvwHNa9kbTrZApZNyftDssuCsL9q211abnLhggfoSSCzWddC1JeuBxffEQy",
  "key2": "5ydaxNJiTsT37ikgkxXJkDscKCCkzYZS7vq8doKCNmH7Z8JPA2FN4zB7YRZnRgdGfx6WWV9qLPmbX22PTS3s7Bqj",
  "key3": "2NXPdTrA7DL7tpxhhtGzy14vg249H4K5fKueSDR83q9nWGcLhrFeZFtFonuTtyubs5zq8EgYffpwiW77zg5t2iCk",
  "key4": "3Y2MYdakmkBNhy5W8xjsfWrhkpT3HfDoah9jy7cmada5pQcFP6rK8d6fQqQgZEUXZEAST7TSjG1tKQTgQer63dek",
  "key5": "4yfAfyDsZCjGP5XVgtjUu8vZQ6dA1VQZPwZkhvzpS9NVeigX8QuCa3WUp5miJqRm45gS9gQ18nuMScZRD6LVXz5w",
  "key6": "3MudWxBb8Hor6ktm2u6sKKDxByfv4HdADQkFCNWbXkNNZLKw75KoBzJZWASWEV2mgHvaXbydXhNbiy38xfarWUtv",
  "key7": "4PJ8hc7okdb7fYbmGePThei1AUBCmPG73c4KPjfiu8VgR5DFBWtDtuVgQCCpx6k5Z154vNLf5Qzu8i6PMTcbQGDA",
  "key8": "45CqzeVndoSvasaWPWQjb6W9FurcVm9RQXQMCiVxyBdYT3Rk7MAZvru1XodrhMaN6SywVtQ17LEBmwLTmM1WSsST",
  "key9": "2P7JujFVNgHx5SagUYNDss9WjY46pCtNkZkwvD2wE6Dqf7g1qEWwEpoisLgCPEznsifvCvVWws3HoPA7JWz4UqQE",
  "key10": "WbznzgihYEz9hApUAss8nd4rZNLnNBgVjpPdEepjvwKcJi2fW76nZdYvvRVzqgurtRRkFDY3VdDFcyRiD7DzErE",
  "key11": "3JFzK3yTaNZjqdsGigjh6geu2ydSQwd4obgKg9kKZm2ekQ8wpd9sRPhE8visb6fjrsqSZ52bL9DCCNFCfQdy7qDB",
  "key12": "GLevF6TYKwZkwr8J15n3qg9ACcnwGptmvWVr3nFnMK71g2oJLZ9JMZnLpZBiHNs4GoWnsJFZB23Jvaf9Z4okgeD",
  "key13": "nmtHfpzwHNDpSM7jAnGR47iaDZxdQFirWRvdWD31DytboFhXChHs1GANkwmEq8qQt9vZt9o2uR5MFKLnTMtZM5U",
  "key14": "5ef9teoxnorwnp8LB1ApYkGXF1F3N2nmgxV89AWHEE25W5c7gJNpYoHqWmyT2xobXoZYeXAUtD33Qs1cY1CPnCmy",
  "key15": "57vR9zaLYEG9uiCxJxFps8wmUyFuzXAkQmRiJobD7tSJbvbnHTnpt17ycfDmxCEChKyoLxsjhoUJYF1amMAqoZnM",
  "key16": "2WPJqLS37DywA3Qa8HaTmEDJL8T6GhdG7VDXQREem8SkXgrWUvjeMs2B3yh8K3893m3hydksvn1Cm3up1rb7yGHy",
  "key17": "4WW22C3nrris6oV9CJCXhdCGrxhbRTW3DXq8WHqPjzKKhb15BjSEABuauhpR4fvvkYsbALPLL2GN2BYsd8Ug9Mdt",
  "key18": "5Q44WwAn8hoz9y5fWx2nTH2FWxgmYw9ecMdhberUzmmHk5QP96zToRf6ychwb8KSybL9QKhPuNe7tFEiHvnEHRRc",
  "key19": "SZWZGJyAQp6ZRGcsFSHfpkqJUJvSScghqmMdofqzAenzm7RNSWrbWMxswQBcX76BdqtJqrjpFZ3csXBQdn6zTFF",
  "key20": "2kzHt6y7vgYMtrJdKyHeXo3dFx8wZyk8pgVrVgnCTPaEww4xmSrnCETjuGxt7kToD6rf268mHEBhZ4Pxj9tt6qSa",
  "key21": "4yduRS1ghAVCW5C8o6RYD2VQYB6bjCCr4rU2r3YYmxBpCsusTqEjVQuvdh3Y9r79XUNEegkFHXNhPzX2qSqHAWkF",
  "key22": "Jo13KN7oaCvUbtzG2AjennfdEcLDqAFAwCJnNe9nbjMBNyzF9SpVGseqRMQDaENZsoERdsGCFzbXBuPJoNyAVdk",
  "key23": "2pCjD2ggSQSwNVrmKdTMfQzJ4YQPwFg8teayLEvkdQANdHg7EumyC9psiJhJ3W5JdEMw9X6wDdirBvyeUV7n3Xve",
  "key24": "5uspQ4awqdGAFY7Pe9bdJUv4LiAyxy4uUAB92T9wt1Hit5TE2yJjmaJYSFGF84hanYDkq9RFgC8GHbpjyyLHeEJE",
  "key25": "5LFrzc3e6CEduH6cv8HM6gAY3CgfpwzQvt3ZsAQB7bcwDpkVpPgTJKWA6MTxjF61DfijmHn4BbZe9ye37zuHtW23",
  "key26": "51qAkKaaGRQjb2zggGkQRXtRobGRLQauqFdEGp2sK6Y352jm7yB9r6Z7doxEWRDyQWAWPb7J5YHXJG9WcqxHUjkX",
  "key27": "5jWhcFHbK9TFqYsnGpz3gjHYXArdzcMmAqu1huARXF9MdZhpS2joZrybkGyY2UjZdcXzQFxBNMRzMXjN9UZk4Gi2",
  "key28": "4yPVJdgCo6bS9jDEef4Td8QDi6crvX3sN9VoiGXHnxhfQPGRkeSfZJqS4m5FHmdswYhvpSK5YjaBMjsaV9pfPLrZ",
  "key29": "xhiZEpSLPBaCk55ewYiv1Nde1TUMHuCjpkZrFk5rC6tuvpSWhZriJjanYZeezWN8oZJ8ySBjQCFvMugbULGVeQG",
  "key30": "3Ma2MZEK3Gc2wF2PC466Aa4Excoz99sFLgJvagshotNC9bHRjC1Jou4ocopBFxSGzRsQpiy9TW6qk8nmotLRRxQb",
  "key31": "39WGbeddk7P2KfW6CyofGMLcY1PNFfXFx8wvq5orU43wj5xVNjhSZKtW1DBjx8p6ZRLdeeduLNm3syGcU4CqkYPF",
  "key32": "5wybMsRGDfTiWxz1TkqHWY7ufXrGQVmscqCrGkZ2vNmf4rPWd5tKERDLqFpr7BMaNxz3Uv2GEdzWb8mGBp6Cgbs1",
  "key33": "43tX8edgb9BGuUEu18Pd26jU3UPoTf1bxS5ZwNTgN4C6dxq9J8oq1ca5P4yRBx4n5xhguYhCwWjQ2GS4VUVtxDET",
  "key34": "23tGmgdHdDaFbTr6S6nsHcnhD52Y53PQLGnPFXpXsXgmGKSn4Wj68cRF22ErBu8oYHBVtiUP3yxmQWzvHboHZ85f",
  "key35": "4B5xBAXJrc5ejVrEQEKwDDnxaqYpx7giheaitjTRw4dPe6NPHCezTGu8wpaxYCULAFPYW1SSo1Jt6XQsNCeSP6Sy",
  "key36": "2qfw9DunhPhRChgKsKVFynwxtoFL7dxfvgjp3vHCDfgFxEe5XrfYTC6MNNGVkbC9ymncUsjVgmVAdeuJMTpAaBXo",
  "key37": "5KmTBp7ZAZdDoodzCHPm5J8ENr39DjBtuZruU9JLrmFPX8pqs4mVebrBfmDSBbyhR3dwLsdpLxFopinA3ThRiFi6",
  "key38": "3YTVR6VEwY3TTR417WS42C4oSd9LPdFcjBf2xwuNrUxPjCaADDEmX9QWwjH9Z3tCkgoj9Dd4vSxK7EUVnanjrCTp",
  "key39": "5kbvQcRutTB4eRXpTqRg5B2xnbSAKZJbG56AvE9fvCHohd6rZKgLqK6kgsKpkbYPawvUpVvzieYVVLPoyPuVoLrU",
  "key40": "5sMiBrU4vo56kXg3FecZirJ1Vrk6mfYhq8Zq5wAJ63Yx2jPiKrDhmHJVSLBtVpJYrJ7yFmijwDB4ZLXGGJRoNJN2",
  "key41": "3YZqFP5g9F7akjBcXxBsZDdRrLecX1AhuoX2SsDyfwUZrBhCs3EUFy1FPt7ZQbRGQY1eTDxnmb1KCZCzdKg3MhqX",
  "key42": "4FgtqyUxH7ncNk6BAjQhaUbsd6jjXzyFYiQKxCcpsf2qq2ZgHAWkt8tGTJJgF2Eg975pBu6iLLHv5R7FEZhxJ5jZ",
  "key43": "3zbYZZJoS81X3Jg4w5SLrAJ1FmWEHEJQTLRnsf15ndXQdhCYU48vFwrLdiuKVf9vaLWYEYspbK2HNBcPLp7STcBi",
  "key44": "3kNHLg5kDLpVE44vPNVqqdp7VBVoHdpun48SXCNjgedPJ2JSscqrc47NfdEugcf2jNMgCL21pEVd4JPx6pasQqkA",
  "key45": "4bBpau2xNzzEVPNefkiZXJe5W7nqDvX8bTjkHWCSeb1EAGvpXDb32R2zd7CECuRVZT5u3SG7AeCsc4UovEE2qx6p",
  "key46": "4Nx6fei7B3vzkNnbpRz2LZt7dSb9XWxZwgbLitSmJUWNrCtf6Uc9heJeqtJva2CncU1XXatd7aEHYgNkchNcpcc3",
  "key47": "kcbCVS6TPBPBqgsuwV3PwgMaLKzLaNYccKaxUYUWeLxUZF3XEkPCQH7Ta6mFUtp3SkPXvf8gNY65sta84egcLUa",
  "key48": "kYzQbZ8HvPbuhuzCoMuFHXudVMgQeiSDrAoZ43mx4s6yJQmmARgpMMqxxkfT3x3cjBF8X66GGrYSEjuXi5a1Eji"
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
