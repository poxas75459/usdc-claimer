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
    "3yMh15aWyXFatDvPrLoGj1PsijVpZGnBMhWcGRzo1yD9ML1tjE5evsLbgrL8omFwmMumoTnkuTLMzK5hoLqRHfY9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X5PmyesBwpMdSptP2Ec8HCiQHcfJG1y2h4obeLiNYp4sy1J55c4aedEvNuAjEdpXFXjr1HobyXgGTCfYsQubKoX",
  "key1": "4JcwVGmDNA3boQ8epy9vUKmnN3Hxmb1SL2YrVyM2fNiVC4MQ1gUBGo3kFesNvqfH4BpEkzGpvpZFyDk8y2cePaam",
  "key2": "2YeTy3DJxxQEV2DTY5YsmNQmwhESa6hQRTwwRXMwivo9pToC9JwJLcX7Gf2coqsYdH246KTh2Ej2nXVkDJ3ZzGLL",
  "key3": "4yzPAeNFEdWg2M9gmDcFL5U1ePDjmRcWpVSLNPPchWtmsA1Y1Jo18mRfEGhrzPDs8ZZAdDUtUms3pA6fy8mDWfzD",
  "key4": "3izithgFvSxqwYx7wUtpmQPmgoYnJxePD6nAmF1ErSWGn9hMicwogHQZTfJm7eXs563NSkcAnbyPZagf5TwXaDQH",
  "key5": "fCaa3HNMontZscdwNYa7rjFxJ2QhMd1TmhmnEP1LS5JAzpvsj1Vd3kmAYPxACqb9oViRnaZr7KEMfoZ4yBhFQ8K",
  "key6": "5suhHuZPgS7pLqHfZeR7rkqF2AQAcuvcHUhzngHekDXzJqVAU9oidyRNTfGYmEsxGhv14CaoivU8B91UoPAgid6q",
  "key7": "4gsGQKAV1WmZC4hhx9XZrMZ3hPdSAfF6KSgzuNsJnba1vm3ThEdhrS6A7QWhoUprUSWLMXdKQyse7jZWoFLFfyF9",
  "key8": "2UMecgDmBsyc94KQUX2gmziD6Z29aQK24JyXh74XRtfZT8K9StxnEuQZr8nBCFiK3S6gvuxKV2bK1KGpCzPfQmhM",
  "key9": "2djpPC4x4kbhubGXZy5KpPBK2zyBhGXcoDyrDDAAi1SfBnTSiKTZM4oEqtetxNdNQEnSsRbVn5JDxUVHggG4Duuz",
  "key10": "4bfZmwS2SnkGZwavyxvWscvxXvXFoAePXmqfPB6inXumMopervXJt9KZwZ2soiCFxEtiZk3GUgvSNr4xAGmx9T7i",
  "key11": "3W7cdcdYczg5qDdA4xFeyP7w18tp8ssMYqV1JCux4YpCmvKEDauv8rue5EN63nfZ3CHrNro3VLBdYAhW8qbewW66",
  "key12": "49ofrTtMh3eBhVvrNMk4jbLQ9x6xhgbRXLqwD6Av5UBW8PMM2SuHHcDY4f2exvw82gmqvgkytcj5aj36PwYDEotq",
  "key13": "tiQjswYbZECwfDEPkyCh3Aid35thKseMKc7UoaJvAFvRYq3ajtYkmQRcsLeNGdX1fGPbnyQnhs7ZhPTikxumsgM",
  "key14": "2JQ3vqRR2piuyJB7e3Di115xWyEGMpeNKAFFMxrWne3wvdDC9vZV44foo5W7SGbtos5LYzzp2xdNi9FjSeZ6KWL5",
  "key15": "4x8JyaaKQoaV6QBjgJ49eTTVncwx4E8ZLdT86zXDQPaJ1a54coLVhnzSpBnYo1GK6FEGh7YmbaxgifuJXiyxWspf",
  "key16": "pptG3GKFJSGaK7NymqgRMX6RepWbM4XxGRMmcBVab5yA6VjdvgstnWMVMgp3H29asAyrSujqKSViXFEZfVgajPK",
  "key17": "5oikWXYTiuMJWHuc9NMWY3gxwzFARY59VGqygfm4B7YC6MGk1TSRS4Rmk2KP74y2SiuGUGGJsC1vMbksavFLxFTG",
  "key18": "3PtwXGQMQBoAQksuvqx7tcNknayXmh1ycQoB81jF7CNg1mDZgU6F4nhtwnkDPxshXAGCAsQUFPtnjVtQS9PNcbac",
  "key19": "5NL91NNDuDP6YTARyeUdSmZ7PPAjpxDbmMXFduvkJdW59hu8dW4VxZUwCsKrLr2Wv4NLcGHZ6PNM3PwzPPq3nELT",
  "key20": "3cUf6AKfxpDczo6LkSGxYMK5vV1mhKzzwDUwkQYCw3jvXAr94QGxc6c2Lbf1wde7hwo1YbYiMy5SQGsPmKF2WEnb",
  "key21": "bTZUmheZyC9txaM1kzah9ijHj81oQPw7Pcy7USPmBi6Gtav6fA8ZSq3FLt5of9WZamrSX7SVjnjbDonhtggtTGd",
  "key22": "5eo1AXRNijvN9c5wkPG3fUVZ6FCGEPGoh3Wbz6Cd7Wt8bzrbzPgNJ7p9AaWexL4FJWNmvrtNXBsyhoz7TY1HdbZq",
  "key23": "2n7U8Ec3J9H4gZAcit9bwNSno5tMbrHyu2bAKnZTkwm2RqeseP36uZsNAAW4phDUssSyr8qBF7ukHf81F29VeA7",
  "key24": "216sNJx98hyEKh5mDHx9s8NwFiXdsYgSUMzu2JqtAk6xND28xPhrzbZpP4HJKmH1UgrwHG6go4rfKMz9mgFV6Hwz",
  "key25": "2SyPXwPMzQai9CRE79oK6BeXPBM4zkMpKvniqbg3uCJBUeSNjzFm7arQ4AxEpTn8s58wW54PSbPnLE9e5s9L5SDM",
  "key26": "QLg4DE6uXyhH9Soz7XxQbCvT1pBkGucTJ1Y24RNk4MoVEepbmu49qhBFfiXjrDwF7YZPKyd95NJBsvKSwHydskB",
  "key27": "bzfYdzJx4dTNpvpzP4w9GP2cRV32B9Sqq2D6zzoymv16apyy2vbH7uQiAvuZwdtqoYjy6yNnvH2GephTtn9jxVs",
  "key28": "63SEXLdyUF5vLQF76vXjnnVfNVvjnjHCH2EL7Z3kgbmmwEW9EwYHWYGLLbc22otmHu6ie1oLqS9JVqBSUBdN5Btf",
  "key29": "f3hH2SWG4otCFg8ctjgNrcr41nYjqvBQoieFoGmCmrq5AdZqaPR6GZz9ewE2Y6KLrQCwaomV4kZg9R3rGu4fJFM",
  "key30": "56DJ9NQL4g1YyzJxXraa6ZkfmoZX1jHJH4KdApfDLddTAPPHgMHY7GwE2fiExt83Gj28GTLxWhp34rznraoCuQYu",
  "key31": "avvgfpHyySnKEfefCqUgcDpt91UkTTsXZJXVM7F7y2582ofs5JiSYRiZAU8e7cgw3R9RQ5riDdPeenXqggoVbKH",
  "key32": "3gHMTDxpDPTNJf7k197MjTcCPPJ5nYqhN4uuAn8T3xVv3dQUGQdNCjPEDmwczrMUv4G594ta8TkjUEtKkNGs6cQj",
  "key33": "4zxTrT6gaUxZGNyKpphNytBaXNCXPHbMB1He1mfWHTRdhuMBwbqoFUmJvWi5xVwLeHGmew8VTFxbkBMq1hHJbVNE",
  "key34": "26LXCyb6Rw5VMkxBSKWp9mn8JeRmrLepDK2yGjdqPoGdK7S3ZeX8G42nHqPg9Ruibgz2mqDo4ps4abNjZeEEjajM",
  "key35": "3fyjWVv4q71Gbw67s7Wb2YM5t4xqMAaWK2We795ssx5FzMSCeBJMaRmKXL8P2Vt8Mio8eQDzzqguZdgQDVSMQuoB",
  "key36": "5FXGRP1LJ53C7cZwSGar1i21W4NsF7jRR5SSWjeTmUJdyPgpieWu2MgeTwrJz3HLMweozKpa363EXkSsdFghNk5i",
  "key37": "4XcyEZVhE64hfBebLYCds3ckEuFXnhMNeTemUPu4KGtdpYJMSs3QjqcpqKNeLCUea6GP4FbsuPBq9oEtxmf3NcFs",
  "key38": "dgfTAVfdzCRW59dGXGxFZm5Mk83enyPfZoFadqm9UG2ptYtNmuTZVRiSESSVTHiGAwixuJMfUS4LZuo1brRNsdE",
  "key39": "22V9ji4A3apREJcuP1VJwiKtJZKeZkRzNBhUX8Yw4g9RiGgjak3PzhRzTXyiGxTYcrgYixWacotpT1PXm2nsr41e"
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
