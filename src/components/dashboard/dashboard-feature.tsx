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
    "4APfEXsMTTpxs3VGabGFtb2jVpLfm6uQNuP5p6kQHL3PAD1DNnp9dkgTrhRBhM27M9pNL9V5AHZjPv1K6mRHHyJr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xFDvsBzfEYzGfjLYYa2bFV8hyNvvZ7BGuu7obTJuMsRJam6e8WSv3m7GNWdXp2HJmrGRjZXBE4S6mUdLpP8kju9",
  "key1": "4qVRBcFBWoxxqfGWPvka47H1Lus2xLpTw5Cb6jNoA9VQAU4ckXJmFTaUpDMVbnaHP4P8ktu1nh4tma4vHuwLoRyU",
  "key2": "4Woo1FNFaYvrWLEqJaScKqBfFwGCHrH4a2idgQayPstgSC9aiKHnDbnqXzs96P9rASEQjmF8BxPx86CZ47STcDRR",
  "key3": "61WRLFmdeBNebTqfj5XZkDihDLAG9zp7k575h6RKDygije7s5ok756KhX1FfaAtsaizT94XFGoXJjXShYkZLKSMQ",
  "key4": "5LoUYT9DixvznTXaohRF2SBmkBwNGqc9J2cYPCbifTnekev1xNsmLRnUJTeTpME8W6A3noK9hfKA8VAZzCGB72m6",
  "key5": "5R65QNiu5mr3PJa19E6LMCryTVaTmcELvrhmPAp5VcCWpn6bcL3C9fTazLUS4BRRiAy5nrKHrCEgyLZcrUK9H7Tz",
  "key6": "p8WwZk9ivKx24VPnWRDvBWmmKaj67dHfv5REqk9wcNwVrUJx9ES8N2FqEhqmpyA1Yecu1RgXxM4XQC4TA2HUuoJ",
  "key7": "31peTZ2s6m6tkHebggSRD1DpEL9i3AqxfSELKBnD4iS3GeHwqtevCz6LnNYATe5QYaQTwoNgPZ8vjMgoNH56cq8c",
  "key8": "24gK6NgF22zK1UjuMgkJL1GeQEh3JPrhBnarMYkNJHjG24G5drAGJv89fwHUkMDJDqAu3voMP3C2ZiWWvRC1xfbD",
  "key9": "UHk9KLxgV4yN8Yf895C1eqMWiRys8Ci91sARMKKj88vLaT2wCS9jSTBuRyDkr8BmJjntjiR3zqT89ivCrtFPwXM",
  "key10": "Sqg9Y3TqNLeSsZjAd5g85HY2JF9DyShPuYdmx2yyWPTCrRzCbYbAtcu3vx59WAee16kXYj7hWsoTbQXy4ZzAAaQ",
  "key11": "5Axfr8b6BV5xkT1ideAkRTrjcgrMA9BFteYSgXdZxWJWxKyhLZHgJoBRX9VutnahMtHQBkfBDx2DztBhd9Xvb3QD",
  "key12": "EptiYdG5YsGGJXRvB7LKCQQAKSy3AqgAPyW5UvntT7Sm7G7EU3fYR8zT2Zx3yJK22PH7tNKQWpMxmeEouCTiXHa",
  "key13": "4wB4EESQWd4WsDK1WcRj54ptn5eJGw5dg1wWGUnFnZRqBfLkwTgPU4jhAkHBcduf7FbqTA9wkWPtfk9LUMDcFihT",
  "key14": "59v7yAy2S8cdz3amZ4EyL47DXKQiDpUZBGDMkC96TDSnHsGRPG6ZvsGZxSMPbB4APeynEUCwg8QohDTyF8LB16SC",
  "key15": "ySDyK81izApL9m6cbsx8A8pRLAgSwwCKQ6TSZESoiZ2snTiY3ysi75G8obn8GNyUYz5aV63z6yfbMbnMsbUQpBE",
  "key16": "3pS1q4incNvuzxn6pZZ9vv83BKY49Ft69rYT5kpC5hPJ7GprNAa7ZR1imkCM71MzidjepNwdD8EN5cx3EZfyXnJG",
  "key17": "3efdbjau8siQ8EQSfA27DoBG35vA2mJgwqmAQdcZtApDfibemJnpxGDgNGAWhV5jSnxN99JwFn6mXxVpNtsCHzLL",
  "key18": "5tKpbTn4axYXmTpUxiMutmTJhsh6V1XikXUWWFSqVvCyJSseCPobrEMmyqTGa37AWqedfhbKrbuReYMZq4yhGqo8",
  "key19": "2uwqr2pN99xtnWsjzNnTZ4edJGASsduZXMkSVsEdteu4Qr85DqyD2xMggVkGadAxCXYXXWtHBACDXAX2vpAEasyL",
  "key20": "2qjDKgHbtiQ4gY2dKWu3G7rRHa4whWdjgUYiGLtc4tq5Ndg1VbTvwPJFNwsXhzavpD56NjM6T4Gv4e5inDr9nf36",
  "key21": "4U7eEdKqQpn2aAXadFB8Axy5C53Wg6JxcvfiRepKUcsjCzrgXdmyPkGzUDZdtu6tRHvokMvD5tWYmq1ehqbKXrZc",
  "key22": "3oibk9nkmtm1rMpyXDCYNQyTMi3dezYj67yFoyWX8DDASeQtfqL29qaTx7Ng1LTFYY1FBxzqCy41Px8XpFQ9KmSs",
  "key23": "3yqntdu7YUs4A9wgfL2VaBJkspKHc9G5nhGNXY2skfTmM96L9bQPrsXrKMgeaAYsZZNLyXhPXkiGhqaURQ4aKutD",
  "key24": "FK9Cq3NPtHWs1huCSHjhHJ925Y1w7z6RqH9uKg3EYWGHMzh1hxChiPp5GqRCbrxBLnqW6ZxNuKVRpPn26JtTXWN",
  "key25": "252c2HEmcD9ht77Cae3RQXP9covh8LS4Astn9k71Y5EWz1gunygaSF7VHSiGmEi9NQuWeq9HSrFPgTsXLNRSpdyD",
  "key26": "wgtBSofeLKFDDEqHaDbDQnAXixagLc8GZF1SSnKRqdorcRsAG1J4miMxA3A5bxWJgVuvRaGxVnkmhaEdpqCrYEZ",
  "key27": "3YQY72aakPN6NGDKteQmfHud3uDd4LhND1APZku79AaxMzBbDGZZMK3GYs7qabnH79uUXkddLzfqs5hvCimGf4Va",
  "key28": "3tEFNACG5HbRt9RRUbScBLq8EjWeyALV9NNFvmF5gP2mkrpGbmKuSYXRSjpKyE3jWoG7GbjhwV5NutDnp3ew4AQE",
  "key29": "4PeqMTdckvzc3gsDkWZEd5uHEiKoqZhiq8NVcqUSdweEkgbSC2BrE98Xfz6dvEekG5mjbZKM3Hxx1jGt8Ys8DyPS",
  "key30": "6uPoRXK7NkLLCnGPx89RQXDpGJf3owrBGXotpcYxCZpoMcQDbi8gEzJrgwgndkfuQUeSCGopbDBMrCpEYPFzZjw",
  "key31": "3aWbvKFU7h9zzHJeoLn9RE6LgaUbEWk7XCveEQvirwkLFb63p4Fgeh9oDoXjDE3oGZq5ZsYB8gcX6PqTFhoMjoy7",
  "key32": "AHREGRdQenPKkBHg8rKWNF9Hd1CDwxsBV79MzKwHCVj9vJWTQK8VpP6UN77tnGfrdp4vzKyz6AXBE8aLENwSyUV",
  "key33": "2K8U13BXD75DJ2s383qChwB3eZHF9xP9FuKdqrKCYLw73k9Uneez3trnRGsGpNs6eabxfusfRybDWEK1kXaKSZML",
  "key34": "65oZ8hYTy828xXtLLUV7hSG53Emiq2i71DcMwdfQ9kfRvox8uZeok93DkXdHM1knNSMWCqxDUeB8VgfUudCNvDEF",
  "key35": "2upsR3u5iynNif1zwRtCdFQr4rvJHNTFWet8ZwC6AvYG5SvP4daDcY9VoEfdAmHQD7CaZMvxXGvJQMfG8ptwXkg4",
  "key36": "4DWuiJjLMCY8NGntKPeVTZmNP5awp6Fb8wGzybYrgur9Wf8aQqJuZJEdDtGiZpeBxPpxhViAPKgCWHgJf1WEB1Yf",
  "key37": "3vV49nf5VjJKFzjWsaezvp2LSHTw21k6zy9vfmzRHDzMK46E8UCWT7e68jPK5TzxD8yqiRGpy7ZBvk9qwfAa6RpG",
  "key38": "4et1ATdEqwCuQYGRWZXZU63sjEADZUXnsnWnxE3TTWdD61xYU87tL6pZfCqqfgyQ7vfaFMmsgGBm8xncrzedbmdH",
  "key39": "4yU8gBqnNjv4XFDUgxZsPWE2gaZFdrJK9HtUi4ekUYTQTt2iz4qiWWvcYxpNWyMEKMho4RN3t5JVMQxpWMYTAgoh",
  "key40": "3GhukXZknzEMPVUpkcVMQsh31Erkt8rbTGZQ1A2mwLKFFdbRq2pQLBr5gLBbZR3qqgMxAts1vGGiSuTAzewtVvk",
  "key41": "2UbWvYin97bKB5nTJEps7Z969ZLGKfNoSMBM1EZRdhHNxmu7SjZuDdzzyeo4rWk1fzPzLT6ywcAwSsyTPtzSYE4S",
  "key42": "2yRYiANd5bpLhhWEt3QTF9QvhVHnomqqoXNdu5wAqYHfAH3PUG7EVwuJ8ydw4zazfqF4GfDdDKfL2oB9VXJKKMho",
  "key43": "57pdpSa3sK1RbAjxM1h5dzfKVzBjr6GUdXi6Ew6fsNf2Byx9bobNuFeZpA23MtVraUfpSyzqXcWCUQcC3mFDQTnb",
  "key44": "gDD1e5wPMaB91tgTcoiKiHgGBu8dSNojj8iz8TAiZQo7juyGyaXDoLiLTqD6y3nWTgRsPdAgJNyJCz6HjbNJZhh",
  "key45": "2q1nduAR766qFy36qcX1zc1RutHxxZ7jeCp3cYchzJpTtsami4eDN8h4Y1YU7d8C8nBP1TGvpSANpCwd3THYAggb",
  "key46": "4fg8wPQPWQPDfJ4ewzPnRhurNY2wtLR1Pzs3EjiWSTeE6Aa7VU2foUKVJjLi7Jb8uH4yqfrCJ9MAs1ZgXsMJtfpc",
  "key47": "2tuZwyDi1h51LxaW6TdSLBnkMY2Som6MumkLuNPrRJLyrYhaFQiyoKJNRrsLeXtemDH98z3UzxRdq4h5tA5nBDXV"
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
