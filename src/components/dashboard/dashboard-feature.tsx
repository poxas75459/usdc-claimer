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
    "2bNCEVYva4vU5SrVTZViXJSuXMWNDepA6jUx9qZsHSEaV1wpNSLWmMssFx5AengK3bBaNHaY5aZqdCcduKMdgcMn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63du9XWpFzVGYkKns3tXXoZDBfQgQFR3oPMXizM9nHhh1nnEkmQXkMQhHswp1ryczsfkRiXrmyYSZWqEMYHymR8D",
  "key1": "2QXEnjJztVH3oWEAk3WnJfhfVFtzrJLNacP86U19C1jzPoStxSJYvb4aaoRNQok1fM1aiXxKsjzDSGWdY1fvt3st",
  "key2": "5DxbNb66Wr4pxeN98sqAnhE8WvKwjqR9RSJV2awhYqDCQiwFuy5bgWQ3P1jbsH2Mu4CrFLKKANMusPCZYrDnLW8N",
  "key3": "5YsZjrpDW6eRG733ebPk8xXCgWgFCFdw188V5WnCZaMbxEkTkRdtfS4QSUtBHQxsuW5jDahMUX3G7BJwPq8Mpsxj",
  "key4": "3HbAVubrVBSooviUXwwU6WvcK2EjCGxhBCHYbj8mteGDadqXj4rKaP98CZ2c7mJzVsW9ro3NwcV3btFCLrysLLwJ",
  "key5": "3CZJLCzKYDxJsdSmriJE2kCf1sjHELwSdNhm3GZyjdbKav2n5U8trpueaibHvoZUg32gm7tB49m9EJEmeMJX9dW4",
  "key6": "Eq4yhBe9hjGHQKTVCVgtqfnru5XxfvqxKkK98Vj2HJEVrqGDLCwt79oXvrt6fyYWKDFKHFXdEtakAXix5i4Gjrc",
  "key7": "4M7hK2uoQ4WW43pjWfMw1m4b5zGuNnkfrLdqE4WrfbNrML84qAmmMr68AZWF4a34FJCzo45AfxC39iymiZcgpT84",
  "key8": "4xxJTfkqQAUNggbnuwyBb4fcYU79EvhZVQJuPww9BnFUCxHxtqhmiwMNWu63F7PeGkf8dhsKQZH4Mgc7MpY7ZGcd",
  "key9": "2hsDrAjFGYBnhKNW4GZ3JQNpXMXWQihwgExM7vNKFQYswDCE8ksZBJGiDUpghHZo5cMqKaTkpznPkGj3tnXUiHfJ",
  "key10": "5vK4cviw3RAKLFpqfLxhWMFxsT5qZj9bkRpnSReAP5hct5iu1HmdEdNXmsrKcti8oWKA264SqiVrL7WNVi2CPwHy",
  "key11": "5L8MUVEeovqBj1hX5teVhFWGbj7DKXU2Nvx5ZNEjeGTYsEv1oJvCjCFUdfVn9QFfEAWy7gC38JW9EZ92Nrmmq2Up",
  "key12": "4aqfDD6paChnZ3x7YDsH6AHBK9fr9LqQX4iGp3yxQfv5mkTtfqvTC73NRs4exnR4xCbnE2RkVHw1mZpbX17LDWUi",
  "key13": "5cZ3RheopuPBfTXMz4zzEWNXG3TS5qBRS7a5g8axYeZcrujVoK8PSCy9zxFbpNTs33a7M9EMmWbQcrm1kmmrumyG",
  "key14": "58p84KbvkucqtWwUhANfXH4u3wi9GHLJE7EdF2FNsnifKGJrerUjUyi1SxFzVnUaJNgvqrzPZTTJ6WDGNEcXhbL1",
  "key15": "5A7LkBrXhUvGCMfeAMg8UVvKDkStB3Gdf6EirnrqXdBHFngJ5Zxf4gNnGNH12Yt9J3EdiQa1qaB2DJrdGtnJVMtd",
  "key16": "5v7B1YnHAfNV4QFnTkbiV17Bhx35Pg9qvqjqceYNqS4JRsdzkDjTKV1BGu5eWEiaD1KXzhCXBHxcG9eQr1y9HS7D",
  "key17": "5YkrZAsi7j3WZ5a3J6jLL5VopcxksMdNse8dLUt5wHq9N61Z17PQ9SFFgsGyctZqbCBwp8bfVe7NxJh8LZu7W2FB",
  "key18": "3BSfczkHS9zhshMgFfZWspxUwA2ornKuq11GP7vQg7R2G8UFCAHxSpUW6KAYWb14tv7cuEUhr8k67khcudVGaXYM",
  "key19": "2ubnyfXe8QK4kHLAyxAYm3XAUUFDYYQUgQ81TFRPkht5pu72jpWNkJMjzsp2zLWtY9jvDpzsEAg2egj65LSQiJnu",
  "key20": "4ueeP8vhN8yydcRTgZFRrrc9gE7qJPXyn1UqBG5e8zJFLXk1SUENov2Em3hqL7W9bye473KcKJ8ZPPcGxBxzvx2e",
  "key21": "2vBN5rY3LWyuLE7yQV2uFkWE3A4tVkdWExitHHUMQeeb6UbU3SsuNmjHdtjYjbmH4nKajtrkx3x5d19TSJt6qr1a",
  "key22": "2KRnawdLfBYYbTLyT9b877jfcoNGCQbZZvV4a8wve3iwZNCSz6jisn6cfXVzd26djdWYXEaZXVy2vz1gXVo3irxf",
  "key23": "41g3N2L6y2RKv8fsYXeNv754W9xoLi3e2cDPftS614U5xVZD1iDA753SBJPWd3rdS71Nd4W6dzCPvMmkcLzvQU3",
  "key24": "49n3sDSxyc635BQmiQyzjBNBSmPo2ubYL9sxZeQnHiwA9vA38j6KzUW1axVJFUtDuumCj28RpySxsKWsSay79QtW",
  "key25": "5XAgxUbDrXfEQgMDaWYtzzkfTosuQuo5UM6qZ8ajm1LXYcBGG8eXg9mi2ccxt7mqQPrgH2JbUBoHt2prKbeTgBU4",
  "key26": "28Wcb6nhvVt2jYPKiLJZ4Y9KHm73zSXQRGhYj38fxgfrZ6ahtaYPYZPhS7HU5s46nkKCHAp7bk6Rwzd251LrCTXf",
  "key27": "kyRrqWWuuLtpKMiaBnhwyPApyidEJECyaXYG1WjKuck2TRmJBFhgUMp48bJeGbYsDsdDGDbLfKCoEmDeThQMjT5",
  "key28": "2yp9MKxC2NCB76MFFy31jRFcWY6shJa6WiDY4b7my5deuJzMkwEmgW2XUMZDsfAVeQtQu44wQXw6VBcGYxmomo3i",
  "key29": "2Bf8iBKM3n21UmFnqZXXTE5q5aHbkiHykVrGhCtk2DrNTfvFuEzQ5oMtoepNNc3ufGNAynMP254oeWKdaLfVDvfH",
  "key30": "4H2ZyXnKdofDKG3RvAjiaAE8kYaUtaHu1KcjJS2Xc6cKiwMuPyuHEFz7Rz4Q2agPTUfuXhAjmyt974ykTu8G6g7L",
  "key31": "DLzndBoUwNAa11BosTNBxLJC8oz7niUjVAqE6TAcNaxYiCGpydhEKvKtpCPFHmcb1X61h9WVtjFMRmUnAhBZrCV",
  "key32": "RtPDd3Ey5n77aiEDiZ9dVcq9qsWrKcfctghHSLhRG3UfoUq1qVoQWgG7VrJyYF9ABjri62J1rVi4rJ4kdRM1E8J",
  "key33": "5hDvKft7cXdxXnj2gmSG3cnEBdYMDWh9TWYWh6wrJf8iEHXKuzBz3roMvNgqDemxmRA9xkWV1duiDqcK2qPatPEc",
  "key34": "2unGK8wcHoVc1uv6YVcG13NdgfaxzrDBWzXz8wEeNw4kM5ECtHVE1hUPbPerVkFbiczwYyy9oZoQmemLWgyKMXYJ",
  "key35": "5zQ3E6W4mhB4n3bcdNq9pPgi5uStDFQFbyaCatBhGpH9h1eCNBkqU3CBqLeEbcyuoZAT2TNQBCqhJRNLMKS1CAFW",
  "key36": "4zB9BCLkbf4FVfftsf7mAa2TG2LJGCWKeTRpHcPmDW5oPurSTkLtZ28UnnXgsd3zJjJLpf3ioRGnhg36hzyniJic",
  "key37": "5BBCGeZ1JeZvFtaL5R3WXP5peWGLLri6by1J3gPAuQ27aA6wXf1N2vSviKrH9A4XCS6Uxi1YtYKKnsbuaRvgR8ab",
  "key38": "61HCbozYX4czzyxzXk8EJ22GxjCF1s6p2DFFBt3UPwiFsmtLPVwAnV8zMJp56N1yvjQjBk6EEWUKha3bBtnbtJ87",
  "key39": "54F8b7U9z6x517RUoHwkVJPAyeoWXK8KRAp79BJzidwKGv89wRRHcRN1xKUAT9TvvzkRDPQ1sZPhvMLBF4oFhYpT",
  "key40": "28nXajSTqv2Vkf3ZB4Bz8uJJsuWcFn3xFBkw1xhRKoq8mX17PUZrgRGtVEfjMhkn5RZCbjoUHbVFT9FLL6imvjRG",
  "key41": "4sRNKEBXuKeq8w39oxf9JefWWVn5XDWebo16gZNP5vkjekXRZeRSV3PguP2uSYV2y5GF8A66bHm6hezTRs6RkBwk",
  "key42": "4WVCV58KWvqbMJkypyQrM7yh2ty8NvPb24eShtoQbigT3gf1338aSUEVhMjTganEkSbUwrt1q63rGN9Wgb6wiLEi",
  "key43": "CKSHY539cRj8SEVKhu6Mup8T9qodnwhe5NynzBNAhvaWAqJcT4oHQUG4DYsXZgs44MVumixTdQA47TJwhGGfvDd"
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
