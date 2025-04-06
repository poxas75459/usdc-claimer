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
    "3Vk9J7J9Z5BmhidkANtT6a5vCEcJgZ1bXRrmQyTZqJdWMtQn9BmzXPyX9uVkXEkopSjFckKx1JBBSwbnzHPtrss9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51KvnUoTeQ2oxt1TQDPTHJdequioMqpeGHXma7rETd88uqbc81QnynPWFUrSJELhLX4XQFvrapkHGzitFBNCgSdp",
  "key1": "2E4eBwaRM7DECUwLTQ7dqikSS4Gj8xsW2hYt9vBmG7QPRBBS98vck6hL5CmNMeyjYApPmoLc2YHaM7jKYuSFuL5n",
  "key2": "3r39y8KNjGoN3XSGyvYUn3sHUYncTcG4UytSFLJXxJGXXMctvEKTCjq1SkJvLjDh3sHwU5tcYcioUkzRHF2d7map",
  "key3": "2xNTousxgjoi9kuVANvgeuQn34zk9aVcrCpkZASznQ7qzcJes6LzJKfzKgDK8iN6ogvphvrxtNGD1DFb7QCQDfo3",
  "key4": "5HQ53HWk6NESmMhzkdnQisWs8uwWjJSWg7ZWtJhJHwkhbcX5eNMWLgNGULasjPAjhEahgcQZAg8gLLEg3XDquQhu",
  "key5": "5wucAoy1eNsDaQz8uWhwrcdwTtLcetZPNqsPh2zYTA7YcXWUUdVb3291PkM9twSn8zZ1hsD6N5inAFHRytQk8wbH",
  "key6": "f5baXMPQCr8deiyfiscNDizA7SW5QxP75QWiYJewHELxBJqDp2yTB27ZeqqZXomEahajk8RKGxVB17pJ2JKtR2L",
  "key7": "5hyTDVbDN3izc5UArCnkqTwZ9UDjD1fVmvs1ScgGix9HJn6mBaEMjc8LZsKxFejssToYLowJZuv7JsRnMjTEhPsg",
  "key8": "4XUE3tH39fj2uKjdnEDgrPyQn5QMcP3o5T7hoKRnkT68sCfg4Utr3PF49DBzrrugLis8weFbVpzN3QWZd4Kmawde",
  "key9": "434wdfUqvZvcW3dGm7KF8JoGRgx8LqpBZuBCNBo2Eeo5jFUyorBsaYneL2AqhNSPfb7hWViqs7tneVauyNjo2nES",
  "key10": "29xrbpHrsXW2STSrUPyGEFWbSDGfCNVB7w6zXS3Uo5EiAXkXXovJQrGzfhAFmmyDWTh6ydnBsYmgtwoi1Gae7Pr8",
  "key11": "41RuVUVhauxJ1kBNJcM2XQPNdpCyDTgbUdnQtXDnz9oEVJGXPVxywKZHSCsaVTw36Rcshdf8EdMQ8SJztdFCyStU",
  "key12": "JSNUu3Lx85pC1jMYJabydnyNu1uLede18jAHoumafrv3VknFDwg8sDkv5azLBTNZA9xu168h8rCDmiTzKvLcfut",
  "key13": "4hx3F3JKVVKS3uJzRGghcnGhppU47QAjumjXvC8htsvZqgS7gSnraRxXZ9e7vaqM9tycyeYRFAbzpUZchY16F6Ss",
  "key14": "5d596JWvvqnodFJrvSTv3tTutJzyjxnEE9ufdYj55Mzp4w9fbBgmKLan6yvp8aZq5K6nxsnFg4SgFah3J677D1i9",
  "key15": "4wnc1CPt1MeXUGCnu3Z1mQTMWNoG6zLpSSG6CcTiSgTVnrP9cDSWVsRVqgds29xkuE7FoAz3hjYaJHR2eVQvNy4b",
  "key16": "5p3SU8UiJgAKrzWU3toohRr7AfjX1cJqc2am9HFXGhsewimY4wpq5Qw2iNRdKoYvZ7LnYUxTTomLTDrwU4M3WMfL",
  "key17": "3NXURJVjmmwoCgo71fg5JNYsmcGew9UyKNHRzMpZCnnaJaLW3FWjgddCpSFWS4Ui22jszfPyyCWBanGm8A99jG8D",
  "key18": "XLgxaJsWVUagirmVd2bpnXKj26TzqM3B8bbM9hneXF9uJDSCHUUgcedUwPutemYBTKSnZSX5H2pRgK5mwGHURsa",
  "key19": "GsNVj7UTNHkcvsj1U7S1mY1XgMM8fKaSbCMGTPGDXRtS3GySUNrgY6MVNXXdpLdA5PkuzQjDLJ2yQSNxqKyJWG3",
  "key20": "2xhJTY75jUNTKhpqBTepSX2EY9BUmiCX6RnWpaz5Euw5JnMi6qGpxRz5PZr2f4RvTmDbLdtsJrMixTFQXRzJAfFp",
  "key21": "cfwhTpNp2h2AfZiUUeLTK6mJrrqPfzKb7ULPbeb8ChBJy1qVNFKb5ZfnzSVKriEm9K82PnAzjVu1RMzHQPPxSCw",
  "key22": "4ydZ3WhzAqwd1tVJv478nGXYy7tvQ1DqCZGx1MoqCANpmVx2oRjAudFBfQqHDWCwerX3tCiqd5x3vc14dAykmAzL",
  "key23": "2SKEs88HeqtSrpYQkyjC6imvSpQK6sNkWvkpaTGrWUJcfeA2NQakKRFLh4W8s7i85BccbCVUtALW8Drse32Zsxcx",
  "key24": "5uxDwdJxhwKW3qcFVacUZfEFH2EyiMXx5q2bYiCL5B6jAYDermqn3HW8g4WiYGC5yrqpDeN81i3hq2oXCzSwPDyW",
  "key25": "3nExYwD3dredgxX8sVYMyAfEM5tarux43Fe4NSgMcd3sGae5SbBNh4iq2QP7WvHY6tsQJx3Rk7dR8Wgej9ZsA8oQ",
  "key26": "uPWpb1AcYzijBE1A5gXnDZyJKzhGgRKbg2ZfQEKfp3ATQ5AC1nzPsDkxq6J4Xi8Jz3ob5c3B12e7zpckG8kqLXa",
  "key27": "ZDX9enMTgkXnhmNmhEWniJoqATzgLrcoce4bq6g4B4A4ZsBkyec1PiVgYyVV7WEadEjQxjy57q4xvbM5CuH7uPR",
  "key28": "2Y51ah3GAfqTyiuiXuuMaLVEqb6FCN9KueZtTvsRB59nD9tc59JgwcdRr6q9aM6pKq8w7eR6GoYDJrUN5RDMBWLj",
  "key29": "3K7kU6TBMm3pf1FFPEm9PPNc1oFZBJTXA4atUYty6AZB8RC2mp3H51VJc8MwTCKVXGAW9KxRPSwNLjhiPMUibdmF",
  "key30": "2oUg6h4QipfK3TE27MQV8Db9xxShhBdXP4JKWSsGfbc3FXiarCMnYzpqmWMfhyv4GDsH4MNwXKqiLmyozEtfC1C",
  "key31": "5Kth7v9CdLz53CyMTNWU7nZWgw5DNMqSeyDzmtiV7RrUpbbdZB2QM3Jcw2WaDto9XT78VHtiTkewuU2YTnrkTbDm",
  "key32": "3z7q99LfYPiGG8AFH972zciJapaquPrM16T8KomUh4G2rYX5kE8gj3nrFtrpuAAkhgxcwhJPki63Xh6BXrycqQpd",
  "key33": "2qkYYGwcj75eZxJ3Y4PdFzKj5GZdGcsWCuCjEWoT7WRDjJRmabwy7E1KJWDzikJNWXSQyfmdm5v6T3iwn8zWAnRd",
  "key34": "3kvrHm4a9mAq9jjmTuMyriXnxrucyf1hkvjdSkvDk3A2VJhHv9twjyMZeFx1uDLwEeiWdqo74Rkoy6YHq6nF4dek",
  "key35": "4GuuPmp9DtgF6khGPho8CK5PkS9HaLoz38hk7TQfSJiDVKL17yu8iFnEVYSDqmpAhV8dwSFWhXWRB8y8HozTjw9G",
  "key36": "kjHvQAfrRBZaSsdFnrrAeM8DE2y1odfhvJ8xNZLSBRyEi331VAZnm9CmFZwFMg6kcXPRCmJcgeLEFHQraGkeCWE",
  "key37": "4Ng3ntMs9XCis5g76zoJHhi2o4XEaYNb1keXWi9wQPznmsCyBKDszCFrA4oTSCUxvzs19UFXV9oLmwC2hh4FH1Ub",
  "key38": "v8taKYirKoteBNsEvyXPq2QzdFo11hgJahMWSXbXYnJipuoXhiH9WQa1oSf5qKUE8PiRY3trAcUs3DYBZkipefT"
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
