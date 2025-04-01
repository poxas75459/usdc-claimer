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
    "53kFDQXaPTxVYuqwXF4vzNbxgeZjjiiiAaFB7AZtMJyUNt2rESrZzj67ydaxSpiTYg6cNHKb7JUZCJkVNJ2shq8S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SaCy1uAvsRgM3pzpc9eSRaCq3f9QQAbRbjj7WsjoZgSZYmrFda1Xp343MTELZSzQgkxp9HVtoN6bzE6sUSAU9Cv",
  "key1": "9JMCD3zifJoEDpUEZzbBakuy1eyahRozzciNcZjPNx6PtkHxB4BZ6SNVkobPi5X85wkF1YdFYxGW1nKjdDBS6yv",
  "key2": "2yA1ssPPzGvy7rogC9kuphBzmUz7cKZ3croAvBeE7nTsBoYK8Ndv7uLxp2EqP1pjBoFBmYNs5dfGQBJoSP7JJp1Z",
  "key3": "5GZ8isMMmpEmas4jKwQd9pQDBcTuRD2fa5KXUFLCuH8xmyENyvFz89K2pLuRh2oZ11er1KXDZwvCGyrm1RtrMLoj",
  "key4": "5fL8gixHJTyh2d8fKEb1UqfafTihdTwuiEAcVqYHcAHGkqQb5nnjHGNE8CFoUHQnL3R2nNGf5Vqmd7DuTpHDFmaf",
  "key5": "2becdYa3NmdSgUphxBZR48Uqvg9fGiFoBvd4F5DKmpKShQSnhxopUg45JPZdTXP2Zd3LQBs9WviYxwSV1ZqmvD11",
  "key6": "5azkqhMPa9KfrzBqks6v9uPMor68sN1k5hRefqdrPvwMPgDBva9974tH6mQonQHPSLks8baWjZM8aTyynXarH2s2",
  "key7": "57agtDSB2TY47x3AzxyiXpp3G2RGFcBMRLYysduBoDSBbaQ49JqVGcFHXwu6jyojCAz1D9ZaSAdjYoR3Q6F2A6XB",
  "key8": "2tSagyXijz2FMUMkue52jUeWaWwSruEMnfZdZxC9hiGpHhEvaErXyrsqzgwQFy2CQhcotQPChCgghomtkNLuzwU8",
  "key9": "Sr4pnNWS7oEmpc1skTNdYtoM8ij95Ar6eEdQVK3Xz3PA3ftAp7fu3ioU12DyZcvNUBZX2MEnycqA1eU5ewD9648",
  "key10": "4a42SGDm8e1hxd2sP1s7yzP8wRZJjm173L23Mm3uyx4hR2Xvo8ongTHmTmUhzH6fC6fJ9dgtGHbHUDsh6Df52cB8",
  "key11": "53fHGfJtdu2Cxo3dPHZoRFk7xEG5oCBSs3cF6GjvZJFy2RSqory5dYS9PX66hV3ePghYRe69r1J9vA6YiDLbEiYo",
  "key12": "24kHafFY7apk5Dtnx23nFJEKFLV5jfSLf5KHK3BJF4DhBAJXp1Yt6q3VsZo2NBx3WGGSEEqbzYxW1PbmX1VVea3i",
  "key13": "4MovNyUrJmUzRaU9kixsM3veJ8GQcjb4UBefGHqrHyLF1ZSh6DKWGkMwvW8RuqnGZ3VHqnkNYfGKWFazuwEW8BU5",
  "key14": "21sJm61DyM3AjA9gLcctDT9bzEFXW4Fnw4maZ7QJ1ZvJhMfZ9Nbo3gzYgys9BWBibVm8FjavbxdpFRcacjLhvRnx",
  "key15": "72yZwxDq9BZ4yMHxLrGdYDCn41WrKbGs6ag7LGeTudPSEz343sohSysHEyHk6QBCn3ntgkUiN3tff3AaCA6pGFB",
  "key16": "UpG92bMNaQ9M7Ndt9tuzHKNtfYTy7XRUHEMRv9uDzhY9zaUuNZJbhFzMFav9w8xoSHRNtqH9pi7we7NYoYELRWE",
  "key17": "5mKgkoJPfDjsNnzvaf6aEJQsFAu9GCNrxYrEM2USPVzHui1ZGo1kPJw1WdguGBhTSnr9nSaZAvGDKRTBK2779rfW",
  "key18": "3qZJpy2aJ17gKM9jU86a7CwEFbxCRrYMNqqVoZJ7mfotnwJcM4DEXe7a8zMb2yWdgH2WR5SB6MpuHcPFio5E48yd",
  "key19": "5YRwz632seb49bGQ6a4Woz5F6CYHy5JUjHrj1w7djiGw2kvRyAfhNkP4RPdsUr2aC1JQMwUxXUVEjQrZWKt66oMA",
  "key20": "582wfueckEQ7q6pkR38k7d2CsQGmmhUxAB2vwVBWY3bCqfpJbtJhQ3JJdW3LGUwVZdNRVQgoAvQpTGLpTS12id7k",
  "key21": "57yabimggpi7RqqDCZ15Ep2jzyungj5zvXfc8jdrN8arqajHnVhTp39xFRRKRHaefjgwRVA2UMYz8aom5pyvL4th",
  "key22": "LvjYkYEBoovY3mmMTDowW6aFTPwAVAZk2z5sUQaEK87YhKcPuW9ScQrw12F3TZxza4QQ76pG8qqYUanZMSpXuy2",
  "key23": "NtomJpCqLoNc7JKogvB31DYxuKuayjHiUP4B46jK1jib4hSj4TagREPWFhDZPE5CmvXAuVmeC1tn2q5ejPZMdK7",
  "key24": "2GVtasfcPqGAA7qZ2zYwoQKBZc3WBDRtN54NbB1Djbkw2zH8osbzWDanNjacb5qbZxTqzdTj5WMputbfZuiUTdxV",
  "key25": "U6WmX8QzT1ZwkQ3u8VMuzGKDW62jRzBdnMDHHDDRFGo34zHx2Wfw3RcvHwFA1RaBRArLv2E4ZsdjNxufmLQBJWC",
  "key26": "3V4WYeRDYZS31mGhcmcZ9HfxCHUB8sjSUno9D4ypuUaz61n88t86zYtfQU1HFG2iDKTXBJAAZXW5TckJ2DS46UNG",
  "key27": "42ESba2jhx4xbXKCzFghefAhTYyDWEpuMpCZNAc8caU42hH2kqAYsk6NdVba7oQ6xwzEdYpG9rGbFzQgeor41rnU",
  "key28": "55zhfaBep3sx36hXNRuX4VEWRSUGVuuYAfvZGGCZnmtD8KzqQup5oCHYZ6qVkTaxidKiiHcStQ4PiuqWBm6Qp99R",
  "key29": "39zLZS4Y16zsNZRzeD4AbD51UDofV3hmiyKydwj1EDVA5ZRA5MaLhyT3B63LfXvgfGNEw4dKFqM7kyDo22Wa4QKj",
  "key30": "2RS5zwJ8LMTC6fq8YgAd4aGkGBiUa3wMUYjUKWDDLx69Rt6fgn7dZ6mSikpLkK6xWqkNbNuHRJCfPrRBVBSAs7Bm",
  "key31": "4VDWMByCbdp4M68ALGCuy9YGZyYxk6ouGRsnC8ZKYTxrc4vqi9NuHDsoCZ3ZBNDL4AaQcpUA3LAEgsNwAWGa3o4E",
  "key32": "3h6GYkmNhNgHtPJGcESHfjG4ywxy4LLXdYs82jqQ4aJygoDJKEWu9Nqesj28QSW45HCyUXK9XTzfsSebZVKmNU5N",
  "key33": "4254rDVyU13ZYked1tFAYMZnkDN35o3GvhrVnZC51hisH446UdASewi9J8oxuSsKcbZbqcXVH4be7GaUKjeEV59W",
  "key34": "52nLaE4fLgDxGTA5mHfApL3oUEC3rjE8EnTqZuK192EHS1R1ouzuNaii6FUJKtRf4MyNgm8VhmGXNgsJLZkPbVN1",
  "key35": "4ifatRNXJRXqKCRqB97a8hDzFkNo9HCW6DQByDtuAkUY12g4rAWKToFMRFuSCK3xtmFNLsv6VDEJTFCDxSgjzGYB",
  "key36": "5fhVabCuYU7UEzLwhBmVDxwy8xM8YvxUew4tUGAo6x6ytLkmkmKHV7bxUKb71GbNC4xZY2QxSdwpoudgmYKAb6Pc",
  "key37": "4yb8G5cCjGkmxCYfyzkuR7JnNEnGo2hcGRo5si6cGayMgMBB2fQ52a7jvmpujYBynQxtqSgqqMMGFrb3QdmADgjD",
  "key38": "63yVYxNW5Q2zQ78Xr35w4Bgi2hrGiKD5KDEsxA2BZLAjdN78esknbhhjux7jN8ap7r7UBncNF1mWDhQBJmYkz869",
  "key39": "wXxGKd4TnZcfJqKajV8tqr62jKNPGx4yJvAYMxihmwcQKwBgwpqhxWcYtB8eyQTt1q2agM7ti19yzmp2VJSjztS",
  "key40": "u277qUgzsELJF4t8LH3ssCgMvpn5CSSMsfDUQW3Hsc5pXBcvAWBVa5hWDAs2zU4hYrzGc9XLY7VLFCZpbDF8CC3",
  "key41": "4BNRtUELdxnKNKqji8MwRHvuUfEhjomqkxqfW3rHnPoGgnF3Kdzo4fEgfVUdr3uMMYYTP4CmoJEHsdBEjfAQdKG3",
  "key42": "52BowV9ei1qxbQd4ppgSSzsohKRtPcD2vw96hJurtjSVjGC9G7igRupEdnApVU619jenXceZrFhUxRsaRcZhamJX",
  "key43": "4cPUWesQcCrRrte5apUGsXwyFumTyCfT7qU6K8HYnAZ13Q4MBdcLN9fnht3vpgFASEn541Hy4L7GtxDmvfuQenqd",
  "key44": "2QFiG47gx1b8Qk6giAEgqRk53TxFkXBBrKWExKjrFSUyuxdwyfEmk8Fmb6FN2hCPJRNbPXaGvovuVq1pHEFnmPRW"
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
