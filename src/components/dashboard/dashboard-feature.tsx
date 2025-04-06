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
    "36J6usPFptdKvuGZDQ9yqXXU5Do1KTj9xx3mKarJK7SZehd9wE4H833ga24ZhLCxBbEQ6fLTsHN66yRQetxGeUw4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uPG8opnYYPWBZ8eJqPs49nN15PqnU4WiWeur6TQcvuHfCTCg9rBo2iEB3MELvca1BsLsNEoj2PSkyhaDcp7ch54",
  "key1": "5bs6WYppbjvP8A4LiREvUTaY1MbqggNpHNZEafwMouezvf7GhQRnviZXkLv8T5ykz8R3v1kCCwcQ9WDrpmCK5wMv",
  "key2": "3xhunaLkLSjWhsmhebTKiyEcdD2S8DbAqTfomGsNwpGWuqVQKdvCxSoKM2k4WmxaSkQjRuUwDjhDU1feeuf1xHae",
  "key3": "3TW8tUgJimxZpW9TAtcmZ57Kq3i9okJBaYuVB9s8PBFtiV7ufDaVEWiF8iHLeiFZ6HaBBfG2zaXNVDzyY6kcqCWK",
  "key4": "5H5Ks9LHrPcJt48ixxsYduyGcpLaDz6WYVmrTahMiNh9W8s1Ed2eaKC1JJby9ZDNe1scC6sVxRzxDzNV1mBCvDnG",
  "key5": "514p7P7zvWZq4sgZT9KTJEjxGXzYMn3Lu5MFn74TqDDr27SdYnbPSpB7WooFctA4j16SQ9GTFZaAxP6PXeXUGhnU",
  "key6": "5rS2ssdcLK53Jv3E2fJscpEbC7bXQvkrAVLx1YodA8MLJXXcW4re2VqKWx4qYASUfnSUT4cRScKKWDQjkWzUEiKe",
  "key7": "3HD9VZ3fd53u587x2Z42cur5T2Y7nQFDig5NQSmbPjs4vXHmRDVFxmEajLoHFuXuqCQFmdHPM6gSWSQHciDaWYMq",
  "key8": "kk6HZMu78HbyJNqVxUU5VA8HmUgfe9iUEb6PaiuoJbhPmJHDWaRXDFpHLbRYtoYnFeLUNz2THoARu1ZPAunMzcP",
  "key9": "2eT5mbt8FuRshaumXAHGLHhA3EphgyCXSsWJyu1s8AJxuctxHd2Ju2XBia2LytaLY55PWcSBydG6xyVxiA6hwAn6",
  "key10": "57ExnCUJqqZeFFeN4Yn9QGwQZ3e9EmE5RdyrMH4Csm9BZmVgXBLXLuPvVSEDxyQZupqCDvyeB4aiABwodPwc6uHW",
  "key11": "5AkLw6azL3HtKU7UX9GRc6MezSSfmLYga4PFp5eA6pJjGZnCEvV6NJrdrYQMm9SvEFpmc43jKTib4rpgDWn46sFt",
  "key12": "4HYoRJwhAGq8L3XrVfT6G51r1EYMkZnWHL5S1gy3tMvAdSW6bmQTs7aNc2MFg2JqbHfFhFbXK16ALwJzs52yatmq",
  "key13": "DBJm1g4CsAcXaSLxyRThUHXJSfLxEi5FnU9pDVAVss45hbmY49A9Ejscyt6VXTkgSH3LySFMMHfsnA7R5FhPvGq",
  "key14": "vT8FzqVstvv4KWLMoCuBeUChcz16cNuwDg9uHdVD7ypUSXS92BcoJrEseZBPPEie711rhSxAhWhVFs9zWqmgPN8",
  "key15": "3FB5gSXRmkUgZJRsKmMZzU86hvwnrJj3Gr3xg4PQGfTnKTU1mqGa2cMqRo4K5pEXDkzPEBG48QyuYRyegK4qkrqf",
  "key16": "4TsfWRgLZ66BwR9uENa7woDGq4T3QfD4jWEy7d88sek7zxzTZXhXfTwbcd2JD5XL23CrwKb5hHJRVdvPY6SahM6G",
  "key17": "4gGnoPsy5jPkDZ5FPYZGJzHFLX3sYDrmNHRDBuXHf931VVHSr47XGrhasveSoFs7UcSsjJmJdUXH3ow7rvpE1Scu",
  "key18": "fAuPCdhFXZiVaocA9CLYYgkz3NDtWeHPXimqZChHe86VM3HqKphP8mmMRs68kotJLBSnQj89gsdZp96KeVgB6uG",
  "key19": "2agRpw16V3twpCujVC6pWRCXCPRAJi7q6qYr8LWGMoevfABGysronQ44oLT3d8yLZh31TeRHhJ1nVqddf9824ZuG",
  "key20": "3CdNKTwvyYHEK5cSQj8zZ2UkFVpZGia2ckuKioiH1ivzFr31DkN7qGheJjcSr9FaLH4NfBdyNHuVR7mLgRhWZtnh",
  "key21": "5L227NBQcbJGAwmxKxavA2bhFk4gXPRXGMF3WU92HjiaQe9xzQXeKkw53YWWNFiKrZrg9dnvPykuY3y8aEtcD3Uy",
  "key22": "5BBXJ9SUYuA7g4DZSBDXyro6jnuti76EtJtKY26fty1swrvKPS2jfXmVdCg7hrULL6m1cnuQR3d8y39pKqPYuW8v",
  "key23": "49q4wB2Xw4pifYJhJewGGKRaVhAzq8YbbHh79x3iR27Hz77kTKLKEjx2sgmmY97s13cw8DKdVLkLEKiTMvteJBad",
  "key24": "64B7fVqjB18nu4ad2XHQmgBpfrAC5oPCPgTf8ZmNpRpbRh4aLHNS2MbJeqiiMKaRpXv6U4zgbqsdryJHW3g762X6",
  "key25": "2h9t8Kx4sKnoLgASDSs3Uzo4QkN1tYBN7qp1WMyvbqhBvVuV6pj22HhrVtMkyUvAVFNa27pEgamiiWsRj7KKW8rA",
  "key26": "2FXprdaEJmmmn3JJJnoWcixjJZFq4fBNRjNaQVHiiSqm7MzmBJEv1jw7eUUn841LvmjZNNLbWBPvAinXqHfYQtip",
  "key27": "5yWva5yKRyksv55uwoYf8udYZVcf9j8Cnwj3Vgh6TSwNFkSym8uyBfrmrn4bSrpqnz6LcsvG4iDuypWwiCX5A5UZ",
  "key28": "4Gpcq73oh3Ch1fJhgWLT2D91besGAMMw8zMVQVG2wmjsKJF6eBE7NNmHBnhmzjSybjZrumT688ozkSt1oKJ4866k",
  "key29": "2hLHYiAJ6CNNTVYo3aoujsYCRqzyW3Xpfphs5ks1NF9iPFwWspbjJDPZNWzEK2JMKXLV9bNzTSRBk4mjv6r8jCUa",
  "key30": "h1jeSGHfPZ2Wt4QbFDdtZcekgFBpEPx8uEtLUVxeuSFzVdvYociwX9H1Vx9uE2JNyifw6dsMbmp1kDmH5An28pW",
  "key31": "2M75eVu16wTpALcHkRXimjmfrRiMLBqLo2Y7tUzfhrbYzwQpZ57yXA3Ux5RqKApAMuK1oDE6kirKjiMxW7YtEUzW",
  "key32": "menfDfhYnnBWHCfhhGVUE5LKTUbmT9hHyn6wy7yg2Lam8UEbpya4e4QVCMa2tBiEoMz6fSkrn8e5y2ft5qMEDaX",
  "key33": "Dq1CLirmAwvhwSie767ve9xohmioGrvD3rHt1dvMwjdaMk1fJJMPEct8tdKMWHcwUfJwmjK5i7Ve3B5S9qS4ga9",
  "key34": "5xiTd8fWsZ7ThWzjs2JrHhy9TxHWD4Y1sQwR5FTF6ysYp7LQJDKAoeDuNaXaH96pWHApGJ6Px2W9p5PRG4DbVoYR",
  "key35": "2JBNerCPebKCSyDMKArx2tpmAqeigVZgWRj7sX1bzWsrzr93oeMdaxduaZiJwWS6KgHdQJUvw4ZTkWMkC66Fy6SE",
  "key36": "3rKRKDh44qorDfjQhVXS78tNuWFoTMhaPhyWkuL4kF3sCcPdBGLXvUsiRRo4LiHyb3gzLM2bkJkBbnyq6R3wLHcZ",
  "key37": "2vWFLjF4hJdbsHeuR2txbRmVAQnFszPXGWsDXDKWnL4Q8TnN96x6eewUihob8Zz4L1Ddi7aT145PnDKWUfTbTW3F",
  "key38": "5B1dV8F96DywPZSh1LwsKR3gvrRW7HCjyLh9n6XHqDkY5cjuw4GG3JUm7qiHs855gdSmHzkC4mGF1xdioGQeziGm",
  "key39": "3fYwL2KA9xseftRbZ3K6Ni3MGSj6TTmdhpFGPZ4vRHcAGjgMWTrEkiTdfQaxAwBdk3LjjEXnUtPGmAEXAVobzNEH",
  "key40": "3nuvy7TtL926V3NPQDAoN4ucD7HiBrvx9Nqi7Bj4CovwN32d6SPiFFhkrJvfgaicS6X6bKHaHyk2vcWdg9FYM41",
  "key41": "4zMZmvDVLSgXeBaJpQ14DLzMd7pBP29hEuGopMp56j5yYuNEFhx7A9w9HW2tHkj5mgi5wwbGvjqKTu9ppEvhq1Wi"
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
