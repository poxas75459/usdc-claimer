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
    "kyWo2hLfHi2A4NpKBp3rN1bahKLBfLxLgZGWLVHoj3xRf3Fvcg3fqZKFKSdNaBuNEiREwN57hQsFtdtw2U8MXqQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SDNfk2ZaE15AQp5QQghG5qgzLKzYFYLfZC2TPuDiHjGk31L7h5PX1DNUnb1SFNC8q8KN8SxW2U13CJR6JsMxhPE",
  "key1": "4t4VEa9kg1JW52ZupPUBcx5CeLvNSDWXKmiWbf4R7SRpeTfo2Z3aUzshYfnKCyEuyqzdw65TZvDsAYygKjKf5SzY",
  "key2": "3TW6H7N8nT7cdja17bXk862z9RYzzT6DGW2SgcQzK49hyGqqQdneAVJ5QKb3tofpNoam5yd9yfBDtbc2bECPmg3r",
  "key3": "5CJMANBDGJjqYL7Bxbn3YKr7HXdYK5aDLv4iBiMhNQJgZGF7G7pXeu2aiZpnqqUwimntHtQ2ubGkkwpgCqqTr5C7",
  "key4": "qaRbeiiTZEx51mH8scKSHYffc1gRYy4tNP9vLfv2qWTy8SWyvErNYegHoVjK9o1fAE2fa7Bs7mN8w8Vy3f25WtD",
  "key5": "4EB33thMK43ocvz8QbWN2g3hcH2desZFS2ZHDu2ksy8DuaduT5g55YnsM7nj8pxgRqgyn5Shg8ddcYsseXYG6bMq",
  "key6": "3p2E52H3M1WhEzi16dMitGMuHFJbGgiChkL2QL8QBWwHDMMg4Uwa1bt7YVf77Y3TB1mfm8BG3axmkMD4Cyv9LTEz",
  "key7": "uwoqc8HXAgLr2M7uRS4D4C9LBoHZKp1asWE3G2WAzZC5BDU3PmyofDUgWL3j3LjPY7Pfci7vfsxuJhB6NE7AjvJ",
  "key8": "i8tGy8pYRRm8UmsELqQa7jY6veWT1CjaQ53rvhGhs7cwbZ1oPk7pGqkQ9Xna6JF1hExEDYavqM1A1uKehTfy79b",
  "key9": "3fVyFxe2q15ZvTnnonina54Tq5Z1STW7gJoEAf3bEPJ4nJJY2BbcK4PRYqYA7PGUwJ3FFg17gevrmZ5yfKYUhim3",
  "key10": "zrZLTMjerGBnRPjbfYWR25XgJZEzpWEArijrEz97JRhCB6Mo7ijXsv52eQypadfn7fhFfRH3k6szA8YCzRaaGzw",
  "key11": "4NZwbw6jxRMw8WVGeCJFdT1khfM1WT8vHJuDxHgN1sDNyLHqGfC7nUEcUZtYown4YGMEpbKfni3nv2u1c2HKGFvV",
  "key12": "57k6ktQHRgPLkx1MSboC7s3Cy9pAJ6d7x8rzYs8uuT3tC3Ao98hQScR3w4v4dLUkGakFYQVKKiV7138PHxaJZKbB",
  "key13": "UzbvXbJB1zcutbwcBYKCUP55bXupoys2TGrkMwHhmWbtia5Mq3CTRbQS24QZxunP6LsmMa7UGnASuGxpiiyyYPR",
  "key14": "65bWneRoKa2cWehMQyRQhxQ59KVFuK7XfnBNgCapu49PbdKn9cNczkNrXJpKGhDeL3Hy57BzcZ3VukL6LivzEt2Q",
  "key15": "Em23dGSiX9wt2ZJgKF1a1MPUg5njqVBXSgsGLCzF2k8U6KGLAojUCNdjUdF1PtmY4wCZHPLXov54F3SXGKjcgJ3",
  "key16": "2QKuS7matQjjwHjrRAZfk9Udj1bwfaC8fXnpFouqaGWdjb3tRHUkQh6an7uU7GVxtAxDrtPEvYL5BXuvqKhNtpib",
  "key17": "cUhqP5GdwMWLmi8u7m1J2AgNGUVQrnBAnwK5jWPCuU5pbhX9B5G15bNqAdL8phwyN8TDr242djdJ8MxDJbJ7H97",
  "key18": "45mcuKfmspU9V25mxBshVPSNhzb9tdsTfts6JrpZVuMn6dM73XuG67dnFJMvCzx4afgkJPifVjTkdDFt7JbMsU1r",
  "key19": "5Sagq4e2kvpd9CryE7xdgMzFUbVDjqvXR5TJmVRMq2txNiZ9L5urjtRh4UTFhrAPGeQFUf7VnJxcTWNvCnJdbN2N",
  "key20": "5vaMgjfdJJpocngAdioSMNqwy5daNF3bEKfoo56e3ZKu5kj7AA9Xo4QbhLahScLtLyEC7Nkx5METwRyEtk6TivcV",
  "key21": "4AE4dYKDb1a159JZeQQ2QEzEtJzBHnR243BSnLAkbKMCqPm3iuC9cXEVC8g195N6mh9sNzNuudVEwMeA8PA52wHc",
  "key22": "5B6SBvHuqawkByY3t98VeXWnAfiiGTsnWvQgq2HTCbHk7jRiqGQPLbTc3Vug72Ck4kLH2WJY59aMVdnNqfRFioSf",
  "key23": "Lcho4haAbVPoZQRLs3Ve8nyPwiPgEx4bAGPpB2A4oANny4yMf3goZRovgdx2TJayVGyhv9vyYUzrmvqdM1rMMxq",
  "key24": "MZH2J57e4DpYdn2EpYhH5b91d2HV1FpZS6MGVHQgzkb7t1CkeBZRmvcx95iArZVLyqDBtEv28DLgsAfVUAhpFeH",
  "key25": "5QpUAXD6NTt8N11WRpQgo4iKPkt1RmbPoyS51p37uqpGfEh1zGbXTyuvagbgCLVUcPBWbB5aod6nwpZp3GMeXmzi",
  "key26": "5cStvHA6Uj7PNJRpCx67mWQpWDEVnFZBstLg6NMXtGWMPzmKmnwGhJJuYfvstXgKS8t8K4nyEDtm7dxTkXv5iWAw",
  "key27": "3qKb4T4vTcDXmwPTzsqM8VStZ3TPj16gfkja436uE3MjSmA5MrroRexb62Fp32E4mEUG2fVE3sWqi7soMx9NtsDs",
  "key28": "5a4YNw2Z4xzs2MmdvdSFvSTcFCKVvmKE99gZRyYboXJxhcNpun17K91PW13dCikP4HH2zNbAdMcfhJBgpvQmjdBV",
  "key29": "5qd9jKdTtzDxdjxLyQxr3pknRt9Gw9TWtAF9Uv38vaNfT7YLQL6erUeyfU12YBbX73MvsPanBZ4hR67jV7pYkg9j",
  "key30": "4rCFW2eoTWx28GDRvTt4TYqxY39gqUuzfyC9dUdMntEkm1W3bvmy7TJezydJWDqA2niHsv3mDJp5HsY3VeczXqss",
  "key31": "5YPgr2Su1vkzFU4FfV3gHAFyKZ31NDJjtu3QQfutVRpMQ8Sk5CFDESxiFzwpcnxnEhnKeg7fxCGZzs8p9Hhq3gQQ",
  "key32": "591idDfWocTSJ9mYqcpXYNZP6vb6d6qS3aBMr3PjQBMr4Bw9XTkgKvz24KehP8yXZP1R7aF6S2ATNGMzpFqAhG1R",
  "key33": "2uTRHUGeCFTuwHm7LW8M25PuhWUsSAWKAWmCDy8M9MqhKKAX9Mgxr3M5B34NvF6NTAJyGYQFksxBR5MZjc1sSqHq",
  "key34": "2ogSFpJfb9N7A4BRZredZ2QMontgsNv5mCiUhq5icSmMT3TZ9Nnjc1M4p4fvtoZQM22di65FbvFhPZs7Xpr7vJrA",
  "key35": "3RqvyprKe9u63hiwgs9NX9yPAmpZToCsipzvctrxX1V2JxECWYfZXG3g6wqhnrBGm4BhXZisPeNqkJdRBTa3Sy41",
  "key36": "3HTsettNMS2phmSfdPWeBjVvSVZzex4TAEHKdN9qaZLnHAjB1wf8AYjETJVAFGjrx1AXreqSStCHhFk9FuQaGcG6",
  "key37": "M5AcBWvX9Ex6Jc728am5WjnXpAnmVjPqSQ1tbZdCR74m8e5sz7anCme9dDG4eDH8PHuJtu6fN5X1uNj4bY5srWg",
  "key38": "3Xuejz7hDFAFZAgxMUcX1y2LoGCdATYyPyUTkTm81NFkUwuRbivLBnzFHj1oumBnvU9DJskkuEZrZpgFELZ63BQ6",
  "key39": "2d4Dt5z7Fgx5BbVUZ1ByXh3eUW8wabFb2xaH69Uburcdzk1TtgbqTUzvsthzCL89Jdx7FF6E6Yu5jDAhwv1SwFma",
  "key40": "5Uq4K1z5r8x19HcBjAgatpHKv13r4rMssVRvWXX7SkHGYT1VhRE5drXuDC2wWHNn1CqT46s3wfgizm3yXhfYRC3F",
  "key41": "27jYefBVKCQ4KGnHKSJSraH7WKikFSJ3HjecEBLmeB6VwM7iR9vJhjZ27EyEvYQKYcdXRavS7Cdjt2TYBmEHNzPS",
  "key42": "4jYfHhBoWE3ETtoxddVj2fvq1ufMTDdwYXaGb4f7mShSUJUxJs7Sod8z7Y4brXDAmTYNJHd8VYdsk89s4o86Tw4A",
  "key43": "5Q251NqdbHtrjbmtXSjhhdW1HgQnN3r7Aabj7vkDVBCWWVdheWMr7yu4J5KUCT4sMZxneFDkefZzH6R6zUseVUoi",
  "key44": "4JEwFcyJhEVRLr4GVsNgyyJppjUdRU4PdRHQ956br7DdjEb9p7zXhNhd1yvgJGuyka54dy3dtDC4caHyksEGFvzU",
  "key45": "j81HKCXqPJKMShvMbFUWGKnyzFEjfYKRTDXqaFSMG3FTe4NGLbbCKTymM9E1RF5x1Jswartnuoei8sr91GCixHo",
  "key46": "5GCxwA84ZQ5Hz9TnvZgYYr2u2sEoTuZDA7us9vnpdSGgPEcQhRMx7W4zL5K1RqZkmbR5oFBhqSbEvFyLzHMzA1WS",
  "key47": "5fqDKPgDgirDnWpkzZ5fCZfWprv1fRacQXiW4bCvcDWQt9z2QJyRnqWkdJ1Yw6a57aumsrk2viiUbxt69ZQt3TDM",
  "key48": "4zVTRSrKPKeVm3GJ5kMSb3tZnc6Xz4wgBNvaRgUqd23zsHJnHTS2Xp9HA3LRHjfHy8sWzTn4BbCJEWw9GZa8EPjj",
  "key49": "57UQbsNvdD8WgZmELQs1MBxVH4oXaPyHa7kj96AfjSNL9uK3Vnv7jrESDhKY3SULGGaxC5GA1F8abyjNXS9zw8DD"
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
