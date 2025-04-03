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
    "43dpGSd9t1bLTnTsjppGA4xTjgtUR1Kb37SLCAhSaYeandtSAL9iRXjTKhcmb7CXv2hCHJHT1vXAsa3AYEQPCEV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vFNzL7FuEeyJFctNwe29WEj6UbfzKZvAhKQudzrYi794uLkmrXSEgQNGcfPnpeo6ascL5VuApaMRq2d1DVHgiDe",
  "key1": "42NQZHD8NnffwDYig99BzuJTR9QyQbRqhjrbCT2P9pmCqzHLFpjm7T5686ax6C6fFksZJFotuvPUKyHw3CmSGGk6",
  "key2": "31BVGEUg7YtrGzjdDBAB1YCgM4LtDfvwFSVDP8Uep45zQLy5hyDmYW24H3oQnEWYyKybLZXdv3jR6N1SgWh1pDmx",
  "key3": "3jPfsmFyGhW7HgTfS223ZM9GboVV8Luw5ob5f7DypvFi5zYrjsybBKgfEN8Z2LKs8hP7vNi3B8GLgySgbxeMMFLS",
  "key4": "3ffhYc99ckRtBTGWtfs5vLfnTJMGTrrJwfzGpVG2UUFLqM4shMbdF8dzP9SKaRsj89aZBWRe9J4rF4XpUgtaY2MD",
  "key5": "sTpLKKrsqnFzqV2tL8U25TcfKWCDmCmnDJ5HfdVJPoFdQsA1yHXBpWhCachGwRtoGwGGQbF4GsWHr2KZ5cX6FMC",
  "key6": "2ZCmruSGjFd7mUQjcKpXHXgTBBuc64pFntvDaZ5ubh4fe4wpEsjs7XaGFag8upyc2KztMyNp2ZeEHZmxjvtFXCtX",
  "key7": "edbZVMMZe5z3yKsyjSG3PGNbgPKPn87sQRXLaVnLdosxeKeC6JsQKyA7qrTfKhcrn8L4toahe5sjtYjCgRroLqi",
  "key8": "26q6SHR5kt8utx6FNhaJedhjCyEVrs7kWDPuZeqRUSteGdJQw1svWvZPEtRDkbPMzpyWwHLnRrGF2zKT9WJH1qUS",
  "key9": "5kiPyA4vaevGy5s5ANAmfmX2wKyNCj9RZoxLrNRsFsPAA8uxVV7EuAJxz7ukTmQKTR2Q8gvgEDMXmAtMLr7AHNZb",
  "key10": "3Q3pDyMMe1Ka7aC6UsKLoTJ45kfcCysuEs75GK8fytuhjBnWFA66txVT3xniXww7dzZNDPvRjr3eBvFNW1qhSbFg",
  "key11": "2NSyrksQaTNh8az3EUiPGy86nXfp6CDPuKG129g3np4AcdM9qHgBhCDWvYCp5jpPTDNdvxTLEzurJtFWLyRP9bMd",
  "key12": "2izWHFdxstNN7Em2L3RUNEgsvs1KhGBLN5Kteu4jhBuravxEyaTnSA9TrJjq8hMRgkvPUsigRFBNewDUVnS8rzmx",
  "key13": "5qxXctnUX7mSLDm2xMdNarTcyUb6ctx7CNiC8CgwkVWQ963UJm4A65KivtQhpfRM5wNvDEzH6JuEBnnVnWxDM4o4",
  "key14": "5SvqYYmAi9zPFSErDutKgzyktnTMJQuWze6erwPcPtgTgsSvnFEzey1mkPs5Rn6EEGA5RLxfrtBAny5ZyANzFyHv",
  "key15": "tnPwzWRATGjNyaaoupQXFFEft1LDbTeKprYKULb2DNCddsQRJT8f2ie4gHYoFCPkhEH1WMHDPLEhoQun4SCR71k",
  "key16": "2JNeeiKUfSiFhx8XyZqknLA9L19hb5mzWeGuM1UXBkYuw4ywE3j9YPyZHxPcjg54k8v8QKiCgmdN8zwimTZp6b23",
  "key17": "3zMmY9gUL7GCXE8KfZuHNerADcTxfjSsU258Pfj48zXaEHGvTd5JvrkaSFTCWieGsYShMLhnL5p67p1hehe8wQaj",
  "key18": "QREvPNXBurMSUpvvH6wQ92WJQQQsS4tsRNKnR24FfKN8h8G2HXKQT1BhSKnwux7623ovhFAgftsxN4kAbwMvsDJ",
  "key19": "5MCqU5jTcAfo78h7U1ag5NwRERnS2UwKDe2oUK1qTkCzUzPEWGiPvnQ9T1eJEnzRAvo1YEVrjWK7NLmeYA7SyPee",
  "key20": "5iDEUBpw1s6gTPwMBL7iUWPb7YoU8j1UNbeUY2hNd1uxAoxF2i54WRYwK4orUMqFEXg3AjrT4oLMGCEoHRdbyocq",
  "key21": "482BJSMpMfybCu4XicwZJzAmBnBwgPBYhPUBFPSnxHGVGzTAJoWKXqjJcGxYoLeoWU6GQCzCfEqcXY59mGFGdsx2",
  "key22": "4rWLur53XzvAUuj4RQwUzTEiNev8oc6w6KQ9CzDYDK1TUTQbjH4HSYYogMURxyRjkgooZ9gCiQD1fgqHVvgjn4nZ",
  "key23": "4k8ti5wLGVkhjq9VtbeuDicgLasdfKu7GZV53Z2RALtmJoknMvNKnvV5xeNApZjSPLPJ1AHzHNHsqxTLCJgnthfS",
  "key24": "55kfXmfRBjhJzxf6Zt94zZpGyf9UzHPQZeeiCLas1qWSPWuuDyRWDmWMr2usrY4QzFoDBXcFPtWJimjRpERmPeA",
  "key25": "3gNoDHWYUZ9NeZ7ZR9o8ACPHpNLKQxHYsrDQwXmBQGXtApEVrwTfobFjZqHzjkDGi1KbVQJwcDVNYnVFaWHMGPJ4",
  "key26": "AUC461N9AKzRJgw9eCqk6nhziXinX4UgW4gAyKHzKbKNUQNgYbZYWycbgJs3hJ98Mm8Xu4V8ZNMws6iz3A6T5j4",
  "key27": "2FAwuZnvud3AbArGNZgzDJA6s3WV4RuvJtxHAjMPxsdUTKAQw5UHyAXYQLX2pBq1SnMdu7s8wd4oQYUWgqsjb2mb"
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
