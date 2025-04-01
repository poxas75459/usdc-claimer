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
    "yoHKAmciH5JubrxvWCqt1AMNtXhUUz6VBTiHSJmVPkTnWrBJNBf4CsbDoPhG1tfyymTDYNFFynn6soGeLo1eUps"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zxjcMXfJX8d9HPYkbVRWYMbU3deux4g66nmiEyK4DA5KuxmyLnKgLRMWKpLacr9xUjvdF1GGpKhNVNph7qFdy8C",
  "key1": "4tHHKvQkMjhDCeyLsBBP1SWbKZXKGGq39QAYBGHcZatErvbC3PkJ2ykbvEhWeAzhrW9tdPNJkP4gG7YBpKbK95cn",
  "key2": "4SsEMtonyxP6Hh1KhHbsCNvLkZCu9e2Cr3zxsBByNW7t768sZ9cfak3tkRzbBgEpfCWrH3Xyx7BMjrqptyDCzZEX",
  "key3": "L9pE2KPwTq9nRSC9K4h1DrNzv3Ln32ebuPKSgLSSXaQsJiehYMuLtzamE71CNHkYhEAn8DJhSy8SV8A1CjqFimz",
  "key4": "4xYnJB4dSxdbpF8thMFzhMF6H1NGeKNSYUZ1WM83KbssAyEaxgcB1A9VFhh955MCFFajBiAi9bDj6K9XStnsNUq8",
  "key5": "3rV1jTYMWFCG4oTZq2jnQJRoFNPqwEdsumNjhQJB6phT2Mx1pKUg5h3n7MwZnc6NGmrezzjRd2cHY6vHPFqNkLdv",
  "key6": "2NQexrmtVyvHhiehb8TaHdqNSdpNmaRjQvzapFGhZpMDRZ6u6HtMgY6XD1qxij2t9f83GPhHLayfd3QRLY1vxjSQ",
  "key7": "51qaAHjk4CwsubFZ837evnyH6rvhZqQUZjytkcex7gPxfpQvJsMjDkvkpz9utKvL9mNpmcjY9ZSwfQfF4bZfbEZn",
  "key8": "4R72dstQUdHyYFu1v4wN9Na5tkRjQqhVWSD4nhTdjFuWRm1s6uggxkfsQERUwhfUzLB9F4QfqLNHceJdEmZTNovf",
  "key9": "5X54nx4tfCJ8U9AiioppSiaAp9v1MxSHVQzvK3DFu6LaNrmjqeKkUEBGSMqcQRMrdkfW7fxdXfAs7Z4rci9uJg67",
  "key10": "V2vaaP1F2m74GHHLwNHPYMs1zoW7847ndwDMh1Ra3L1hUCszwABu8LQ3y6QxdppSmqnDYEpgwA1wyZcjKQsckK4",
  "key11": "5PKouDFdQwxQ6mypxvXw5bEhb5a6ke8joMLPEZhrHT6SEqP6WvnoUgjLD1Bw9C5kQPsj4GzgnQyS28pztvcfwyRM",
  "key12": "4MwVqnREHSmkx3szSBs7rTfCYdbhgdktKR5nLCW1FocHUtsyPcqV8yxT2zCQNqax53EhYKZ2W76d138BLkz3jmy",
  "key13": "5wLR7fksLdqmcJKVAtPzZzzuF1PxQo6PprEHJk87U4mEUrP3TDQm8MmB95AQ34WGkgLGZ8LULarQtzHzZxdtvzMt",
  "key14": "282qtM9co5WPM4R4ojUWpkoW1tCYfVq5Ptom38mvLymqh9fKXUt3DTsncH4zW8xKc47jFEFQPuT5jBFG3q4QBWUA",
  "key15": "3qvmo5wnoF3uSd5TdyXJcYax9BB5UfKZkcWnXu6FvXQeM8reo7EDiRGtS6Y3M1iYxK6PxDN3afRt7V1wp6Gg1vHo",
  "key16": "45aWnqKvmj77dthVk6LPZaFTxaWA4CKmpwFozSHgGAeWLjgT1VtKgtjqx9NA8und65NNUeac9QHZWThSz86dHLQ8",
  "key17": "5Yp6fHZw8hNV7SnSDyqZx9UTrB1P2ttNoWmsG6hxHuW5u5Lvt3s2CFoYSnxFArAHfjipQoPVA6mnwLuNY6gHemw9",
  "key18": "2PV24VhxuVHjHyUa41MLMfi5psCcHqFAvDZpprn6LqU3v6dPQ325wXJnGEHXXKLkj8o6dDmmvUKaRojvzvUntRw8",
  "key19": "5GwJGtZ92x9Luotu7JTawgGXZvQXp3EH97qYfH9rmypHsNnTYuvAMxhdJ5XSnwa9p4QPsZWEro8zYrKAGqL6R7ab",
  "key20": "JgaaXtuBoo4UGvTH1pybJNMcwGdniauV97q5yHV7LBtdBw1H7myVKj5njVwRKpinDfU2f4AqMq1BtGZY5K5tqHt",
  "key21": "RYeGf1TCtmbPPYg6zbeN3EDPzzh9ZgkpUtGW8xswMqYRqPPKMnr2o1gQecQDfiY6PShsu8XcP2Vctmgecwjwc7K",
  "key22": "4iAZysqrbd7QMVxZLX69aHjKXDYYpjYDqzM795mPibKy63vphhmGqRkpVovGxx84QgpQiGUN5ydC4rahGZQMaVJU",
  "key23": "25LKNxzh5Y6KsLGQRyCeDF2GCmP5w9CzycFiEnm9Vnzypmmh6Z781V9ygYpQUyrQKUyu7Yviomo4oRzjed2nTvMe",
  "key24": "63sTwXyVDgGZvMSgFKfFP8rfbt3JwUwj4EKLKKJRLL5WLeoQGqhyzgk2JH1gNAFbKyAepTdWbAirkwBawRmzqNRb",
  "key25": "5CGkqMCfbDcNDH9fMFXLsZeKk7B4HfqtwhHY6PLYeJzE5d2vU98E8112nk8MBJPGuGmREbHskHobQvAnprKSkXQK",
  "key26": "qRpuL7qYN2ze7WfAuq4YXHKPXHDnLKwmSrWwwxHzfDH9YAryvs44Aqt8rvvpCc5qHmdKjaJL1r9SzTcB8twXBg1",
  "key27": "6R8mmBGnLL9TMBcNjev5C9N5h22T1eUFepmne7qnrGZXaB6BBdWzLTM4QryLGAoBG2BhWxod3FrvwJaXyfwjAP9",
  "key28": "67brjkJDxNj5TPzhg7FmA392NdNwcc62eaXGaYZub5T9C2ASg7PNE9tA7A8Q9jHLtaG94DD1gZ4Y9s4HMYMDGoLp",
  "key29": "3giSdaaiHTdVjGcupnghVKs8fFrPMb7zYUzE9se97SKvfmzo2rG7wPch6nQRDkqzahCC7hLN1JFwSnTEVDvJRhTt",
  "key30": "5vCBhprkeTpPMNfStqEH1yHJCmWeaPdgPUF5effKM3YBAdKeejnhpyHp9QPzgr7HQbVDF7G9Ey3gZJUh2P6X7pJY",
  "key31": "2iWqcT9oY14jm8fDwW3DUaCZ7jvbQGiuPSE1xZb8JZSrxh1fVpxc97bu7Eu8u9hm5fMBsXdyNsf4J7cgndRiVPm3",
  "key32": "5uamPvmRWNRH4hRzCJwGKzs4siEFb8NAVrCL7S1SL1FtujMUNTxaRxe9g8rFhHaeaUxbEHrTwFn4byJS7T5wGpLC",
  "key33": "8zccSmMVvbja57kBPsStfEWGqpALfS6ub4H5fjvR9P4udWuVzoh61KhyC5L2ALXX9MQApL1uvrSa6UdoRsYa3cc",
  "key34": "3GmPqGHkSpiMPTzykbJfe8QWUWNAmzyoJNHguaqaRb1PDw4uepPSvkgfgToCqbBMRPHvXJN1jNYFABb47HEHptkx",
  "key35": "5kNe8bZoJCxUQgaqt8nKK5DXgfoVn8KkyTfVGvZjGhSubqEhk64jST4mdUVGuctD9KgQdPtyFiBg1qiEhmTXL3DT",
  "key36": "31GHk2hMMGN94UFkajVe64GQ2orrh6iij9LUHWC2u8MuuGBuS1yYkdBpsnG6wQLWLVYxyuVMknK9aYV1XtVUVJAP",
  "key37": "2WKZjuaLjBenD3L457DV39TexwQGjUNBesErVb4V651jssmTSLQUVRSUsL8z1YJ2m1buxo3aAurjm3vds8DXdUpL",
  "key38": "61gzdsszSHtaNEDQgFbgyePStMVfewW3r76nbwBHoBFrkUpKjxzkthUY4ciitrQMZaWAjPYgrch1xsWkJQTRJ2hg",
  "key39": "2ingYD18mNoi23CLRBAD2wK13CUr7xsY7mAZkT6xz8mwKyfoy4hTaNh7EVJJic8Tp28Nw23HGbF9gYbAGJ96bEiC",
  "key40": "5K1Jj5rh2NBS5bCwALVR9myGW65pkizzZMXUu2fk1wpudYGY8YpoaSgNQwnbMj7pRTnq1dRwTEmscE3Djj2ta1d2",
  "key41": "YDTFaSDg1XzvG2DTNYXjwFQg1qAL98ak7zs7jsMZnidGuoMeurciWrppjQMZU22m3Vr2EnHkgdfouzCYHA5Vwoz",
  "key42": "4oQJKyNgzJuB4ynGb5BEeakM3Do3m7ZJLyeAeT2df2sNtRbXDuX1mwAWMD9ZwSws5oixMYyCbj4JGcdLFUEzDiP3",
  "key43": "ZqqLKy5v5XSVdgMpMdvqKZwNj3QPQi4J1QBV9hQjrmujug1hPLFUVMJpQPSmhk5K7uCy3NAV521fPqjgDi1iw7z",
  "key44": "oL5P7K2wcGV4GcFvkgD2JsMSkYdKBHCF735HLn7bzzPMMALhwywA8FLaeaoXdei2XQpHLhPCzNN2zi4LaE5sfHA",
  "key45": "4g42E8bCrRgWM3wupo3u381dA7NEB1u43M5DVdvxW1RR1eJaibLSvpQhZBHav1Nk2fFwe5vKgQmER3Wo4ex1M5D6"
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
