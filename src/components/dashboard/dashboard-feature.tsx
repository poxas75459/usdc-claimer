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
    "oKmQv1bweCHRoLbRreUdvCfNbSKj1w9r8fUDrsVomVjSWLZLs2a7hqC2xESpxWf52Xx4LLEQwuKpX1BFBLphxUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "378xtqSqoopz7aMMvrpwMZQD3NtfTVuybiALpLQVDGgDAgSj2UYNnaKg5PQDeJaaRTrms6W5D3NGuF6754ngTZR3",
  "key1": "5u23HmJYyxj9z6zgdRsounQC8dEwqHwQxXh6RPkdgsRum41uF9sxNNXK4E4yitM9mAu3xuhHQDY88tqECivf1TDP",
  "key2": "3tTY78pzMnwsqNyfkMpYmag8S6mau5Z2FADpheuvPvYFYB2ypikz2XeXonnSPCGyF3c3AG8dHMKrYTr1Y6N5e95R",
  "key3": "5XdH5KJ4qtJnjJeGfqZqFFkhBszqEuhxbVUGm3CKyjMVufP1C5ccvtVFTmAixj4sU1eW23HuR6wHwu4ytCSbX16X",
  "key4": "4MAteDH1CdkqrR9xVAiypg2cR7kFc57WKyMZU8hBAv2dogCsow4VYASLaznVb342qAyG5TqLnBazoqfd5P5uY2XX",
  "key5": "5kUaEkDfMZyiPbphYf2i1kzGRfMnndaEEdZRGLMfAajprp9Ad8F6Tg4L1D14D5eqZrXZAPt6uP1dkSZW8BkABNP6",
  "key6": "2TGBks48tZJR4m9kNgzqA78czxyaqQLa69HhTXE3K6Kaem2REEfqGSbQjhANeTDjk5xgsm9EqNN5hzJbky5iu3f8",
  "key7": "2makT3w4fwZRJM3iQEHaQGfhPLSyYarrDALxowBjRbvDVvhcwhP1rEtRrxTbYRubwhvvYkCqmVWBmrgh6kZkycez",
  "key8": "3McoDyL9RFBynVpWhJ2tRzxPj7SFeQW5VeLK5MvYmXZDVZGzu5wsUqJJSWPVWCPDoM3kxMqEaCeNtkGWEne4TesH",
  "key9": "PzQbcuS1p7UeHuNaufPSZxDZBfiXNtaw5jUvcvn8UGnD2AbtqJPS2KdrKZ6pfB5BA5ivs23aNLjHv3VZwbHpW7V",
  "key10": "j3gS3GzrL3EY2MoJorx5t8AE5Bq21XfwNZhQ8bitj1Afd5JnNC9jNAh66Zxrie6A1AaXC5CsPUwdAe4rCCpws1w",
  "key11": "2Ys89GDvQteLApbDwCct9WmeZX7dB4b2FV562wdrDkdT59x4VyZmsGi9RZNWf8Q94ESFmqwPcQ8hd7HgDu79M2t1",
  "key12": "3zYzZWQWxPyaiBN1ZxFGNhm66b4Jstk6znu7YLc1QbD8T4v62YdhwZ7hsZFcAS84U9wVMXRkMRT5WvxkNUd2HE2z",
  "key13": "4t2FkRGMKqF7wdiYAb6TfRh7AKshqL1in5QTKE7zEgQn7FoqEZjAJXpQozrUpFNo9ycoj16mgUJKgT7VPitW1oDc",
  "key14": "2QMFMLTtaayV8WhUFcXR7T5jRP5PRdCMdGV3urAZbDpNtJqAESufoLcm7UYrg4MnRSgpvTzDhstQCD8kj39Ua3VC",
  "key15": "2pkviSSQymwhs2CtwRzHE3ypNTSaCajF2SCAeKX8iUXTwnwUAN8rN3u3N1VuyApLtHCtPP1qbdRMTmC4o2A1tySp",
  "key16": "2pY5L5YrBSV9LNnQzr1rqG1Svks6HtirxhJqbxjaKGinJXxcHmXMJFVoJDWocLJSjUkq1hhsPm7iNuxc6Mfxzwyi",
  "key17": "5kw5MbxyduyYSzcxaSpv7BEtEbtYfR3o1AQZUuyTgnBJySw8yT2ost2UFRyCQ5HSPeAr7oTbKRMmHgRJgSruvhks",
  "key18": "3Y2tDCWdpWUzoz3ZoRRu3hWWRgi7c3S7VA6Z6fKCr3NvZF1vQjx4DCWjBxwHz5W4ej9q6odDLLZsKZu9TjemfhRG",
  "key19": "37UAp6Ytuf6QvuUwzxCATdvHfXZNjsGFran5RurYrzvoTbWAESKN2AJ8oAZPXm7rL1fHYq6B63bUQH9Xb4x6y6wz",
  "key20": "2r85iYifdQLe1mS1C2FfcAQAQT1DNDx3N5aihGdvPGNaSNYcB5ymg5whvSA7fNJQdRczCzCW4VqAK8akfuzDpp92",
  "key21": "2btja31qFbMarC3LR2eUX3oUY4cNGjhMaJ4yATrY2cSTM1agkxZUKPFPW7ngPcpS62qLZ3HoWiavdizYpk9dS9Za",
  "key22": "2XDm9qhtHBRFLq5mzX2dHUxc3TuRKeysudhQXCNnkFLmsbugpL17tfxTjnNEbw8bt3GMZCtNidQ1hgNkPBk4zCLT",
  "key23": "48bKrZ6tgR6fJk59UygrQbaRXDyEkVTTeVk2BjhLC9AnDbRwvSMxEm8BRLM17s4vRqoyyiZmvJZWkpdazZ9AViBf",
  "key24": "3neFRoZ8ym3VhzPcBPvjXvddKYjxEwiofV262fCe5J9g24kWQZVPuDVLkfuAQAdyJr7SiLGmLHNNbRdfaeGqABJD",
  "key25": "2U23zjNMznAStQbdSxnsCWahCZuzLP54SmZhAq6Pt3XM94gxeM837hVZk32mGQvoijU2WzBNdspaXQDEndeX16AH",
  "key26": "2XvxAdk2WC1XDN7XAb4WTM6BzAHaqzZPSmXvQxfSZMAdz9Qzhof2wLkXpvZhGPHQN893WVavpBB2D1NruebGkVQo",
  "key27": "4tpfZQgtZh8jmNZMEv8atLctfC6Cf92Zt272Fk1YtnPWpWTrhdoDYxgmGLCKnhpi1Yyce4PedgGizicsZ7FmuBAK",
  "key28": "3AxS8cseTRy8xRL7FFY5ajrSV51SyqAFsHQQnTdtkUtdQYzhuU3RWT7CQYworsqjTWzc8XwGePUgsqQxK86yhfax",
  "key29": "FErHgnHvMFmnPrWKo5hTof8c12hjuRypjTMtYwaj6Yskm28UUdvDoHBmCE4PaEbsMvVnxZqFvGTrk4vCWWWYoiT",
  "key30": "25w4dVuiAEKGq3bdzZaChQdvWviLgdF1QuXSvBsA5WSpFg9WBeGfXh65irD6XYP566zmf8NsXtoS3vcQDoHabjNe",
  "key31": "DZhmAo8DRVxch6cTaxzbjn3c2mB6qFgnSRkbxeG7xTVRyxA9BpNMmJQSRATHp4Vmib4fWh1pPm8sa6USq2cgwYW",
  "key32": "58RDH122KynuQMHYoRorzzMapsXSzRCizBtmNqb6RKwoLqgEY2ECu1bLfsZG4Mzxar5Hr1LPyNKXWPtxnP4NvM67",
  "key33": "4YregGQ7EoHiuNg6DiVQ94o259xM7TQ4Cf6PCeuSHxDGYzFerceBMs2xH4CXvhtFE4CwbaUUsQxuz5hQNiAXtJaB",
  "key34": "5PeYZihyVdLAe28Kg4a8mcCEuAj7WaBRXcQ4o66LZhs5j7bH8p5QBcdyp2923jS4YU3Sz4MN6GnfFgHHJGHZLs1w",
  "key35": "5R5ZK6FP1i4ZUkT9fFpSvyyxc4TWMmSWhgsejUPd2cPVKjvQwMwZsr1jZxSxTxVYvNC19FXteNFKzNAzvLKrKLdS",
  "key36": "4k2tYMPBjqLMt3XRRAbpRpWkNxwYKMC1XUGFJc4WHbm9biwveXCipdCgB5a36c9MX9oLqoKkL9J5LU4TpHhpLtPu",
  "key37": "4vqAuwhbpu1bkcm8rr825QhP2YB6T7matoefanqCcq4i5xXjAAgKZXm1RUqxMAqqkz4yDDr4ko3ZdsnumG3zKNpW",
  "key38": "nGXr95uzWg8hCz1V1yoMDzo2ZLPdQPKuRTCneTafeqiVxNfo8SXtefaVAixcrUgXYi88PNAVRV6xXm7awcAiXRc",
  "key39": "2nscYowR9rHTZwFykgw4q1fPLZ76sEjszn9JS99623YsW9qs6qtvRbgsM63cQJK3LYUUhfkVUFZrcwhwtNCFMfCP",
  "key40": "4JEJHzy3BzJdftULd492P6mP4VLXJ8Sw9o7QDRJCYr2PtVSv1wHBtMcBbWb9JjH9FToGmUGcLn8PQej3MhyQtA49",
  "key41": "2rG52j9voqnhvJt6zLfeE9rMpB5jWKVsQRYSMycn3RVA8GeLu3i77BDRjYPjHuyjRU2uD2y5sY4x9TPtkaHaoqxr",
  "key42": "2pFzBhNvNBqYZPQcnrQe1dbHvVjyb3UdNSJe7m67pqSwu6geMneRZE4kRViZLX5HbK46XdY35i98BivezwjMmpQy",
  "key43": "NetRh7y1CdpVV52x3vtvkUXQPK6Ejw9HJEbi75LuzEGWxRgJWb8kWYXXfbv9qJgNPy8omWTepwZhXB6Rq8KJvkP",
  "key44": "4iyCaWZWALSLGPZBE6bGwUMGviv8Jr1BCFxQB8skDXrq3KsNHriuvQ7V8H1cmuwZ4RJFrMEP5VtxFn25a6QRtoiB"
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
