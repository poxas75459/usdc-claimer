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
    "56KoGpoTxjbp52EULDJCJoJHst5NKyChhGHDZCd891gipfxro2FbzuQEECtAUJpUAdxjt9T8Gviik9NvMusCEV1H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "c8Eri4ua4XB78EvP3aHEHoyZCGw9Yjhde49ic3G95wgjcQ7aqmVt3QVuFqv1jWrDRsAvVqqRHZTWCrQTfyZ6Ng8",
  "key1": "32Y6FB8qxrYUopaZXkGYVE7K9LimQ1AjEu8sTuFVNGCffL92QFKMJzZUYkk6xs8Etb14vfFYj4iCWi48FsDSoF75",
  "key2": "4Zs42ayTMYyqQX1dW1Hmg7jSiozVjxTWYvHQzXmUE8VJHaUE97vdirPpBoFG6aoCNTAcbAsuUVGTy5uS4EgW2M81",
  "key3": "2F5Py9DTQnghLmYLbAbuNEdr9bfYA8mVpSvmVjYi7Bs965eWC1C2Rk2B7NxGrga2YRAnJ2PbQMCxt4vY8k3pM4Sy",
  "key4": "28jYpW2XqbJrJvBR5L7c3kHV3jgfJYH5gtRybzyxbTGwcBz21W3PzZiNM9XPjgn4o6s27KEUuwQxjmcDKbdUcV3C",
  "key5": "29YNbNeRRXRg4ykn4PbPN5ypywHqwQaKrh3sLe6of24eEc8CRLeJzWpD3nzLof3QorEG79CTpdK5YBtyaYJ8cZAQ",
  "key6": "3TXYqVUZiHyFFToyHqBZ2YzwhkRTcUMeeMhXviVVx5dDBd8Syrs66YTFaNWgMojKmEaitJ23JmdPsAY8eyeAmPeL",
  "key7": "GkGfQwu8VrEYTGUQ5KeMJCPF1RUMRHhr4NfrZFk81isi8uuVstzuRnLDvVsjD9FhQYR5iHrUNhHB6vXaqmgZQPd",
  "key8": "5c7p4tf8e4LqHiuERVACuR5uK3TvH3jdDWvh2jJFaLHbMVckAaEmuD9vgfARxP3ifgS2qdzzyieMh1udkZveADgN",
  "key9": "3qrmWTepNRxqMmsSN2rk7B3nLqYHbHSDms4ETP8XGaWxExg1nfC3uWFKfjFs8CVwSoshZ8XNitM2725Lumdzt6YE",
  "key10": "3qAfchPVja3xbGk38JhF4JnhqrYSuYJgefZmPXRtuGXAqBH7qLXEdUfMeNVUoZHgsMFuV7RcA23njkCNjbjmngRe",
  "key11": "43jnadGoEYjcsJygrqJP1rVtz28EsJ5xAuFQd3dEfofk8VsCdF1tyeNH5gk6HxzrnoLpeVjnaTxSSoXcUBkj7pgh",
  "key12": "43794v1zrCGQhQGxx9tiwyARzTQsNjGi6zzsP98NreQTABSVoBVvZBHaFziXiNCxGurYPQkEF9LSZWAnr3MmWVJi",
  "key13": "5EkeXfE9HtdM5QHPmvpFV66osiECUR9cXf2HmpNXdqyrdo1wz5TnwytH8uLwovw5hxUESwcrQGuVeSinkikf9ZgP",
  "key14": "2733ojfpATC64WJkeQ3g8sLfPey2qhPtjuH3yWtfVjVNzEh4M3YyKf283wTxLvvoDp4CJgUko3tWUsX1HSNkR6tu",
  "key15": "3t3j7QRwJdijfJBveFtf1smHsfvGuR4xQ64nncBk2kX1r297uaVjrKNyQyixFjNrMAFgS28sdzVRjCR3s5r2rGeb",
  "key16": "SehLcwh4qb1PHDzbmt43xjHUDFmqwCv733qYqu78Kgk5VrNLDaXNZZdUiRCfh4nUbaz9s3Fa4q6e6LPSV7g9SC5",
  "key17": "2tKjFVEioN7WpZY2UZoNMxCSCdXxFosfSGYuaKDAeT3uj4jtFtMZWcaPVz8fUxHGfgu6SzEZY3NT2rUMcEbB3CQY",
  "key18": "52vEUXo4dJB2eaZ8JUHJywU562b5t1VAMkoEYD1VTSSXKFFZMGED4WzRoKqvCamE2mL6bgTDjtwCNWrVRa5nzC47",
  "key19": "mbNNnyaxbHKtk93hRBfyf1A5tqPyH9eYWuu5wuDkw4FfAGs9aw8EC59svFkTcCKUf7bRGy1EWYXFfZ6FqJ63wE5",
  "key20": "H6UxgYSE5jFaZerVtTvfAp6XuyQQLbpskujiY5aviphdY4GPnDicugZUqB2BQheBVojRE9Rr8n5oajdPmVeo4Nf",
  "key21": "52NLoLnq5togDsjffxpmSQ7Gma33vYFke5BmMS63P2HwedZ1p12XVrBXRfQs4Asa9YFU17rHUgP3rUsTCafeiW3T",
  "key22": "2G4LKWJoB8oyZaZZSm2TJ2PsWqnjcQcwnBRqkaSdaoDuBUb5CAjxtHBvBd3U4VGZsjFuKQUHCPPZ7z2XPTxhPHqs",
  "key23": "bUgFQcL6ppbZve23yRW8TE3uVSUbBZyvcHXZ9dfZ7WMvoBFJouKA6LYwdPreV63JLEayL3RRU2ASjZPCG27WbDa",
  "key24": "656gErCPueHopB3hWTXLHVjqSXX6zAJTUcqToVnL5uqdDCXEbcmb7CiTgWBgjoB76fXDi996gaNFFtPHasHK3sNc",
  "key25": "49g3hZn41ZjSsgPcNLEkPCDeMzQopXZN8V2MArXxVrMFzwq414VGcdQSnUoKPp2N8uzxgPN7EyvKNRCNewQuWAfL",
  "key26": "3hTq3QpemGc2apZoXPW5YGN9YGwe65Jbez5NrWDj1h5XYtR9bttYdrGmpgZrFtSvyFN16ibuMLJFsG6DSGXNwR65",
  "key27": "5x4xLsfpcSRRjnBxQsMxxffiexPxbMMKh6pkWbxhHoeWsUmBuJ1ezyfaTabQ8Mm2rBaq9YRokDcQXjsCV3nykp9E",
  "key28": "2gZtSpHkfMpnBZa3nWabpmhvcTZZKQ1XQRyZPSXLmwTravLMPGoux7yuBWtqh5THJQLZQKzCsU9QqmvzqbtEJ5tQ",
  "key29": "2KwA2zgW2vzN2br3bWxvxAc5R43DjYBBWjztz3PGYGrQuPsiTEmk71MYQw6cMpAzePzr4R3SW9pmfkFDkEj6Yb5M",
  "key30": "3pxhAmqwMjNnbpZzUvkViAYV5NPPctaw4kAEFEMxhkrmUwZo7UQ3ChbEy5VskukQwhfEs8PtFr8aeXKEWYDpi9s1",
  "key31": "5vAo7bU1ppuUzBxq8RjjQAZMTTULnHk6kkJF7bp3WwFGBx29rNLQdhzRtx25tbBJSyHzcintpfibEw6gGHW1cDN7",
  "key32": "shuFsL4PRQhvdu5CMLeqf5Am2wCNSfJshnCVYoictWBBHB2B75EbtquxuXdE77Dzxi4oZ3PAEefZWQGnbhbuNp1",
  "key33": "tAnCdCVyWzdMhFkweu1tDT9yyoA9DZLyL1jDznnNCZaDeHuc84BXkiv6f5qWFMtnBH9qhpoW6YAbeS1USdQS1ZV",
  "key34": "5d6wQQqRPZTiNycx7rLkBHPPnP9KfabzgciJ8oV6WN43wAnFxY32eesfqPGtqttDx5ieRKaFvLYVkMfeHXKpbtS6",
  "key35": "2AJbqdpMew7L9NY5cKnigscUjMdv9oSMrZML9guLCGaY1Eaz9A4KJNv6xuPTf1zeh6LDNkaksWSUaP1s2BBAjGsZ",
  "key36": "5By3nHCPb2XRdexWoWnwH5MGFPohLLfuSzpSvRs4FLtJPgo4c4t677wftQNcpyud4cVqnG4GQSRfpcCh8c8En9ct",
  "key37": "4C1pEuPAmjAgiZHfa4hgktoitVZtsupvQ1qzvnCyBgDhfeH6iWzPohcTgghxt4oexKxRjomCGSHag5U6GTLqp1eD",
  "key38": "2JzoCC7zrnk5QSLAH5NPtWuGLuLHJBSuK5GB86pHa31bRZBjioeqJRUL5KzyTNKEctHtyi2ZYN8cPLT7AyYYv6h1",
  "key39": "2fys3hXPoiM36eTt7qB9gsvs4JsnQY287LkpHgVQvqhGgG2Mt7re6VBLyLUujVeuZkwi8BbGdisRwSvJ7KWfBya3",
  "key40": "3cnkt1SPyefx3Kth7WiMjAZsP2zm5U66HDumXVGVT2bwHZ2oA7uADhUbAcvn6ja66hfQoPerkZpdLDrWhjmcct7n",
  "key41": "5c9uDf66eridV1WBP9fPpp1j7t1deMT3R387K6f4VF2dpBJg6Nohz7TC4TaqzaXB3D9yr3SaEyAKRUHwNzX75rQW",
  "key42": "4RykPmizEY4sV7aQikYzVCCBGG4ukVTkzp8af7r22R5h6MErSz8qwPwEtYQ7SEMP15XzyGzHKb5BUvYf7hoPt4qJ",
  "key43": "2VSzX4GkQgboaRURp56MPWstdAoVH2nXFcR34wRmRGegzP9cn8sHuiBHFUsboLGBBciF1EBuv2H1oJKJQvdFyJ6c",
  "key44": "4FHG9DzR2M9FGYdDdm4bPZRFsrNXfuhEU7TfZcRX11h3s62itRQDLb5ug8AspeGgtuhPS3rQJhNjZGoVdp71sr4i"
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
