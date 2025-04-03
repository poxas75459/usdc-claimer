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
    "3MQWSggFr1YjP1YMwhXzTSaJjC15LU5TU8mf3jdp3HMr13dChKW53wtJtFL9x9G5rFqmhGJaPd9A7sc4K4QCUbh8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h3xHMEx7XGAb89LxZvaNQHUYBUYcZ5z4H83SA9aESKiJXbEt1m3vfQoqivRyifgG4SsAcMAVKZZYGZiykK72Pi2",
  "key1": "3xQX3PiZwhEPSg11tBMJ2QzfWoWMzg8jqp9xVzfNDhFm69xSzBhcUPeWXw41VQ2d78egsFYwTkWkTXWfJiKbxrXk",
  "key2": "4aiB5Yn4gUe8f2NoQdeFHW4t4Bhy9HSN65bbF4AuJMzuHjmJjXvC81fFbCC3XoGkopq5AwjAv4mw46rm6NdUcJ6Z",
  "key3": "45AnckhXs6BLGHD5fagddnDqGQh3VWymgRxZLZxa8vGyskunQ251F9u3BbFLnvmoiH5VNQQudGzpFXDPVRDzkEuK",
  "key4": "4DWSVoaRe2g7FWg7GmnS6PzgD3Zx8o2u2MXh81NeEE4ZSSCRKqmtz4thAmC8aDpcBsyS2rMa4DxP6KZBXBACwZAE",
  "key5": "kJYRP5TpDitqciUD7Cq8emUt6mf6riwYoxZFJcghraoT11GJEFmU6y3kTATMAQR1is9QZP4xkwRDdqsB8To5acj",
  "key6": "3rQuj1Z5BfatWAQprfEusf9umQeWxscnBySZbS9gPkNo8u3jsuhEdwfvphRKh3UNAD3ZwVd6m6x1zbjwcbqrCSsV",
  "key7": "2963wfjkipYW8RCYRS3GUbwsfwgTbXjpmrxVeA2yyKJHB8gNkn7pNMZXAtHL6z7QLhvkyz9tWTVnbZSgKx9CHHWe",
  "key8": "2Dwgait2ErhMZanuQu4NRXopx3v6Sx6LHa3uEmdrA8aUcNk1QQM56CLAcqJ5ptzBy2M2vc55YkxGpEMJNpweXHZu",
  "key9": "2L5q91gmYpwUzPG81nrLcd96QMVTZVC89hGgto3yvtq4Kesy9ykGXeTi7a1v1pSbpXC64zNXASfRbUWLXTXmCGgC",
  "key10": "3hYNnK9XcTyuyKNyGCUSqhkHDP63yXzpJeUpcT7HTdPcU21tDpLVfXoF6LG5pzVSpVDcPK5zoLKQ3EaaZPaHLHEz",
  "key11": "25e6HZQ5UXK9u8AfDB5WGvBscJNJfXhJULZG2SEF8CwrS4o49WJNPXTWsbyFCLcPLYpJENHSnwCnywaGo9cY6Chc",
  "key12": "33ACG5JBCSgpDRLGs9Fbf4VLR56hHBGN8C6JBYw679o32wk52wNh2DXpFUUWNqfGe5GgZ3yePu75n1WKCqFYLJe2",
  "key13": "2hJqKBynRBb9iZy4vjEKc6SZi7Tg1ksN7auJWVYH726xyuk3C4T5YyTzWGttTNub69sNHFa7rPcYaHFqpgoAnWyD",
  "key14": "2u8wsQHLb4eibYRcfsixWy44SSukfmvdp4h8hG1YV7tdYg6m3DxqMmjuakMyvTSoHFgAZgnsocyPTFQrEYseCSPJ",
  "key15": "5KVVy4uaytG6MGiRzVEck7ny4c3xisq2sqBL4QuiJWPSLNuTZ9kvRidD5dQqg3TCZQiUEEFXuGM2y89q1V652ghQ",
  "key16": "2ufH7dxdKZ65sEBSogvruM27WxSMctky44ZtEnNs6qnUQ1zbSv9GM9bgX3BeyQmKqRvzg4xEdK6wHDbC8PPNsXAE",
  "key17": "2991Bm49pk83EJY9B5pZ4cmRaLjQjDvgTsizDQKbykR6yebfW1znHsed39eUWXAYkos5gSUTC4qsnn42LCfzQ4sT",
  "key18": "4tvumtEYTFqQguWctutMGzayAxGiZkXyQiHAaPmZV5jqiJSva3nbfz7gagz6xmsXZt5JKPc7DpnUjaPvDygFTPAQ",
  "key19": "smyhNDFWeYBLNzpT6ZNvRc9p9wdSjb8F8z59cKjxYBj7SW4uKaFFpNaJMBHcpBNKc2YWsSuqG1chQ4yTaNhCwXS",
  "key20": "4Ap3XeCz91NgEgBeqvDaCtKKpfhLEfRzRRj4CyE4qPLvA5eLG84Fd9AhZrf4cstAZ3JokoGCb3LW6BB6oRrLUaDi",
  "key21": "4GbNSczxnCVxKY41bJ8upQRCVqfJcxGj2N1xg63iwz57wMFa7ZDSbHyveJ3argztfNVj1KLAJbWjaRsxwLm4mrjk",
  "key22": "55o1cF9LGg2jvEQQMmLiCCPEVurB2TLGMTggAdGwgnpTARn3UQFQcP7sxSKfTnquuWWM6h5RKEzGJwGYvohwJ1Tk",
  "key23": "SYpWdLU5ME28phMQhtpPHBcsm7VLydPaA3Se1QjZmfdtBBjuADuufcd2r36bJztcum4ib5Gb9XkCVTzC15LDWDo",
  "key24": "61rJhkYxx4uBVnBhwTreVnA1VTAL3XqPkS2Kj45BSDEu9zqAa6BPmxHmXV7hvnWEcBb6w73ydBKpesNPvXQV8zvr",
  "key25": "4cLFnx55ubY1L5tTEDKUVtcSSqRJsEfpfm1shrqxjpMmmnwvWp7agkVQishfnkH6uZFmcquvp6qCnzfeVzJyEFfp",
  "key26": "5eRuRXZbtwJfPZh5iKNWLgceBoP3D8GujM8MhkJwN7AMNAygDcNBFLvsjG3evWiLmmMRCb7iMMTZhZ8rkHmj5f83",
  "key27": "4ijYSNSVSMNiazkCxE7tWK1rsYxLR6G9bYLeuY8ANckDTzcgxRAV8xQcAacWqjN5fn17Tqfx2xUAQoVWAoq4wG4y",
  "key28": "4q21ZKQABwjUYbtUfW1AU7S6Z9KcqigmtTgFx8kKhp4srdsKdC4QEhztAQRgBHiJbrFAK7e2Zu33itSnCV8jCC7T",
  "key29": "4S2MH51EUWAVLXyVNBXtXVvpvMCXnWEbscFmwvH5hTMshu1nbtoHeG5YRXMryDJMihVS11Vhps2bgLELiaaizoJ7",
  "key30": "5dsgVyfqUUnpA7hv2TAJknmGq6mgKUdXpKmfBTgPHezKvQRpYhAi8bLJMEzjGD4qWW58KpjnkZb4vdE1ZgTbGwyU",
  "key31": "5JeEm6JENjcHApmudrR14XHVxr5VWfMBEV2z3P5VG98EJLAzvpAyA2zp7FmFgBxYB3YTNZXF7rBUKdVbczoZ2FeC",
  "key32": "3k7D6iQSXQv4vDeauNLqNpETrxqs5a4TVharSQTxS5QvmywgDyEtU8LCyyV3XqdNn9JPyZ1G1VUdUbjTzNsRrxK7",
  "key33": "4G8XoHQDaxMEVAoyC83ygs3vd1UAa1CQNA8njFincaWAH46LG5k2BvWq4ekv12RJuqTh1FLetcFEYfRtkjn7VCoe",
  "key34": "4AyC6HpBScx3aQc1RMTFYDWG1asMTSrjmxNrJkdhByRJZDt8VQJQFGdsEAubXquF9aaPcfXWAzkjpKWsP5k6A1eh",
  "key35": "4BeyHqgFufL35udGk6sh5szk85mKVp5An5hkpd1cLKeHUKfaNHsXQFB8edhWKqs5AYqgE8NZB8mnpDNzzK7oSGGz",
  "key36": "3ZeZBFRZmvSfYHzsuP7o8LijVm3ZwykGvL3xP7dFSGY3UTeup97jYuV7uXBhuFv5y1gLuQzzVna2oCCs36msi4Gh",
  "key37": "2WnddaEDim5ys5zq7RLanzWtN1n2JWhBzDNkGpqynZdBRX2R5E2Pq9DnKfVErXXJU6k8AzHYQQfgM6vjepXVPYdv",
  "key38": "27x54NFT3fQBg5ityAdnrEouD6iKuE3UhxPVEdEmfDx9oKYTw9v5vs66RpJWr3oZRHDVPDJhssvHYVn4wev6cWhr",
  "key39": "4gdK1e3sajYpRVHx2ULsqacMMriKVu6jBmJ84BQfDrSRumKAcqDUj3aakbGLMF21rmjGJT1dQoSETJ4NiaFV7x9p",
  "key40": "4yVpuiydhFBgeWRug2X4JnKiuVwQqrGRUSjfjNDvY4nnQmiKoci8VUCG8FwBDZLLTBLCTA5ac7Jrc8vFRF7YmTjV",
  "key41": "1YojiJhwrQt8xK9VtFwY2PaSJh2SRSkuzMsNAqJosBbdSxgSvfndmRrbUtkvpNaTnZWUhtrDbEeSV3tKhdXLbpK",
  "key42": "4TGR2XH2RQYVbgHpBEFBiBypXYNVj1bAShhuGjEP1DgW7HoYrvTdWKE9WaoP3c9G2WEaMuC8EXU3Dv7eEPTHV7xd",
  "key43": "3jes2XaAGVTzh53RZw4dfJnqdagLAkyxtnEpQfGiGqs5ZG7n8Rgpsyn5ycJYeEtcPqNKTzad8dBRE6cvTpwBs4uS"
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
