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
    "4G4dVECXUBrJyMQF3e6GbKC9pv9zPgfLPYKS2KWbvhFddvgJkV5TkR7nL2KR5HQXDcuGWKbBdJi8sQ9vDRSd2TPf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38JiSTKs55sJYMGJG2yFmkW1grJeWdP7wbvoZFffefLYs5ACRBZP5VMcCufLCAR2YSScZNGudH5UCQNLuiA21Fuu",
  "key1": "3d4dYJ3jrLEiKkeu3RXT3xu5ecPTesGUjrDHwH7pC2a4J6WPTwcK2F2PExfQFqKawKY3wpdfmj2j5VXbUonY5uQQ",
  "key2": "3HK1ttYjgHN1j2qD2F3Rs6qptkGAVNCFEsMxL14gaPpoWgr8RRjYkGeV994SXdvcSt1MVGMf9iKHBABpADw1A5Jt",
  "key3": "61ENgYv6sjPrtCSyHzyvuueWkgKtwPibSfURXAx38ByYDaFux4yC1qDPZghJM2WNcv3dXkRKLTQePZyh4o5Q7Ljn",
  "key4": "3fHqYTK2gnHBiV87PnugpxKnBKrCK7yKL4NE9EdHX6SMmqybSPJ9JLmTzioNdwXMtDSQ9WWcwT5NA5chA8vK1qvB",
  "key5": "61tKBFqTQ3K7aXmXsQadvCTqMiVv6RREVaVC9FhsM3U4FNBNh5dLuoKV5BxunjmNxJPEjBoGacnooafeDc9DgHS1",
  "key6": "47CkAqF9GoowWNyxhxMiAGbKhtCisF83187EhM6PMknJ6KeJs469MkokmkzP3ZtdzxN3T2GqJPHJZvZRvjrteAWc",
  "key7": "5rsRcjekfY99VidkLJRqgiKJ1tpm68hpGL53zrp9HPbaQNViWZcy23vLbpnrFWyfgjbAPxoKZD5r4dKucFJtHABB",
  "key8": "5f8cZwE88WJgRvebsQFnUeadwLKjo6QuKLyoDzuFJ9F1GVhoRUx2T3mykzzmjyBD4c3YKEs24N3dr8ZceAAe54ay",
  "key9": "4RsauH6enAyvnGEMzkx4xDqigMnqh1Avze2FWzd24iUpjJV1CK69PWyusvqC7Qus8vQGLbgDqcoJR3kJPZWQF5M8",
  "key10": "5j65ffgQpWqbFC6uZrhP8HfT6Nxkfw2zF5qgtx8kS2XiAQB4mJBU4M4F1MUKEajB7qKDzwVFwknn5hCAQGx8z49",
  "key11": "2n8mRC8U87D5d4TbbF916izNKSzxpdP6c5Pq1kSekvPj6Ro9VCiv2yZTesbD2tT3RE4K2ZakqWNtjhYyiUy9UFnp",
  "key12": "4XY2w7ktTAYRPsr8Dm9mU9Npm7NoR3fLPHYCLJe44KXpBiAbMsEw5iTc1UPBhRD8mpC8EqHYnyGUQLfp1v91KUcx",
  "key13": "3EbdoP5uUHkvEVMYFXVmoAhEoYMK5G9mGKW53GtLfJs3PFJNN6qidkAqEcigdNXxcXhahNPwUXJEQA9FQhWfPxND",
  "key14": "2aFxb6amoGKVgoG2iAzcPtqpHpZXjt8sr8CJqbaPL3C49YNT9E3nQFrXr4RJwc99PNmwnjQfHvWz8weof3Msaykr",
  "key15": "5TySmSVL1DjuAe34sCPjtPxhSaZJgN5LsMecvP6snT98zGMRMH3RJ5sRZjB64Rf6DtF8UdiWwg6xR26TY57d35kb",
  "key16": "5BD7XKQK5uLi5RL1NKxqT2t9x3vQ9VG3gXksrpkBRPeJyQTm1GfvyHjfjeJDDYr5u82uc5G2X7hRUuWgjCyyoc9B",
  "key17": "4KkYrwbC5rT6mVLUQ87Md7W89DbqAz3Dj4Hr69qH6aGoWFGiW9Hnmay1B6VsLahGcoFpduQPLxXmcvc7Cp13LoTd",
  "key18": "4F5QM6X89Sh6C3aqVz17Cpb22AgPuBKAdbPtAEQoH1jv5kCQ8Y1hoH3WbAYdprnieyHL8YP5DVhHHUyHzp46rBay",
  "key19": "3dKgjVcKDGQ1t9vbPvquJduejwHm7Wp2dVfGgHgBoUHzpQmrSjsEZFoSU2SC1yDzRJWQhPHVon8qiNimcTqaYEVG",
  "key20": "2e6o49ofd4s6gje7LdHHrpyPY5hgztemVszypsc6nhdEHrvJHVBQbwfYvSsM8DfWHcSXhsiorVCAWd8HEoybxEZF",
  "key21": "DZ3X1fHLNzZWga6vieWbxhySSUNgVfvZ9cR4EswrJVbvdSUJF7j19nTXBziexApKQLhe4JUXzxDP8VezxX6NAnj",
  "key22": "2U3KGTdYWtPa9sA6wQeHjB79gNvwUac9LjFgPxo6NCQNVouC9C6AK3pcFwcr9ShNCbaDdzrmRa8xeujU7UnPz8Gr",
  "key23": "28xsWsUbumGyuE2neZDhSbxf2cL3rzve6HArHWT9zqsgi9FGRjNG1gFL5TrnJFPo8iy3EaBG1MSHEWR4u3Z8aEUA",
  "key24": "Pk7mu4PM7b1ywCKJ2k1DgDxRAFdGLgycTJqD26CfWMjrZRKTAnZSbPTrzipBn6iU2GX7fqyGyH59GRtxi6Gw7Xa",
  "key25": "29MPKEWbWHR6fXcUmB8oWZ56PiFv2kTRdTqzMcgo8Y9TbyT88fhsWzvkYzDgSSxURgqUUao3ntfEkuifpWyX9pKU",
  "key26": "38qTTUhp7FJrYaLfWXyAd3mvJUwvVDnNx4S63penNuo6gSDfwBdr7ESapf4rH4eq6dwK4N6yj2Dmi4k7YBTs6u9f",
  "key27": "4CTKxawov9r8ogxmm8zCQpP637DAkXqLLJhAE8SwGPCWd9xT1i8R4vCu6h2HQ4o3qhdHJZSvV6txwQ2shGyUUHvE",
  "key28": "4sfU4hyUKkBTNLz2fTfsB7z6eaj6KjYVXUfc4i7X8iBGqhW3SXuFdA7PnvLKYFXWZvuattSuUzzCUK6zwTqjHZfp",
  "key29": "51v75vtdML14br2tAfP7X3GsvUtLhwBMNRGShX6KBgMfV8RFgaTtAUaxinLaBi1PQ77KNvom6DFQ4idkyKuDsBhz",
  "key30": "4ZSiWu9ZR2svYGyh7bjEzvFUQw8P6MdM6TqRo3XZsNoPzRJhNG23C4f2Mieb5kLXWxRdBaj7h8CdDUVoZViyJJn2",
  "key31": "h2YnS39ugLG3ByfdzmZAohUyY3kq9D1exWSiAxwcMDRf3L48aPyrC33WmF2vH926kkzA9rwt6s31z7jZENeNzhV",
  "key32": "2BWybCbnXB8UEHiJ3kmfNbgyuQEpJNApuRcJGAVTKxXH2h7YcyWiYvLuLP2vQvkNJ5JLXGEEZ54frJHVxotfUJ4s",
  "key33": "5t8CrjwZ4SXyrcdaCDVju4Df4p7mwUxe5ygQrXipY2bDxjVnWWZGrfYGStdtU5Lv6D3ftPGpyxcwbEiPy9Ss4y8X",
  "key34": "5y6fMsLjjfCdHZt3rWbEu2fq8hfScVJv8nC3CWTFQqM3cdZVGWYj53Bvg5Jinvd1mFhAhFMVQ4mNEGQzAFdURDF6",
  "key35": "V2ivj8i1SZaxzUdBEJ2wEfj9b7y4iDr1M2Pg9DHX8Yeo9FrCiMrsteTE9swQrUYQkz3BM7ZxWpGcLe7r8pURFVX",
  "key36": "QNeMAZdW2CMpDipASKYf6d9SE2VoJs5HBvAkLqJ6TgL9vNVQPuSmpEC7QKpfa5nm26uRixjoLg7nWvPqCfZ9Xup",
  "key37": "24gzWYerH7hM3nnU1qY1kG7XckvHiZ3yVBvrG6tpEMATpS8vpp6nvwWjsPkQKyZNWXoDzwsUn7KNUs9PJsVk3d21",
  "key38": "33WrKH46bpdEALYiSTpGAkHf4iCZM1ukHwj8csA4rJQHqLusPDyP6ByvpThqgzMYbM8TqxcgbG8J6r8KwBbMJdY",
  "key39": "22YyUKAYosJbaVqhKu24wpaC2iUsmUZafQ4DxtxyaBge6RMZp44YiU6rG5exe1DRPE7r3kRzde7pNTCwBnkwGZLD",
  "key40": "4BDNXpdhzv97WRTs6b4KFtpJDXb32LgkdVtv3N2vFKYbFchxP3rvNQxaayGv9gtuSovHEyYiuyLCzE9n5JCxSczm",
  "key41": "3Xank9tCG3Ub3pX1umUQmtEanJ74amhJteLD7JH1vzP8jBB6Vw2TJeCVKZ5QGR4qqumBU7DiTTzZf5BLYEsbZvKu",
  "key42": "25D4EocApPAN3ZX4NxPpDJCqBDpophB8W2FPHDy2BR8qbmC4twASER8BoVNN4MBzbR7F4jiD8fmr6ZA9LBy7Ln8N"
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
