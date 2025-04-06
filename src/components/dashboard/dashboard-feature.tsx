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
    "5oBEf487pDmTztRb2gNDyTmzsQ9AafrU4ks37wbDyG85fx5EKWvTX9QbvfCpgjUHH75espkpDAH4kyr59Pc3H4xM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YszbnaT9UEaDEsE43PfEUokocvSo93RjmiFKXYTo16pR5XTrVtpvSFtX8L3avH4C5WxpdtinPTWttERzuwTUG3r",
  "key1": "4hwzkARp7kYQbjXSnBqEEd1wCyHfavfb6NmdDos8eBPrQSj9PBgkxq5e3DU8MPxro9knnWgLLU2XxvQ83DBmib7D",
  "key2": "5R9a2FVQLKTnyYZn8opQjzC5tf5Ca7C2nU9C1bJLpfVdsWBrjz2oKTgLGQnSKSxfQ2YGcpk2QWr2hMKEDJBDbsR1",
  "key3": "deNoucEfxuotHRt2aE97wcCUtzUeBUHTxtfQPrBZbY5bXUGxg2pAhZrT3gHpFmda7EWeTbBF4Nxsd9Jw9AAWHgA",
  "key4": "2JYcR5n6vSUNvDBfXB2ZJSTUMVNycwv7CKHTeHaYZq9TvKzSwZofBLM6wddunwpgeMcPK7H8iFKQ726AfAJtowTY",
  "key5": "66nZWmVDaKA8ScbQJFstdwkqGoSmwNBhhc1nTH5NqdJogq9hD5EkJCVEWfCo7RUG9kc6UrobfmRUZMMkBgZRhK46",
  "key6": "2paGJnR4TWbf2C6YGNTicQGmDtBqDzGmFkjRkr8abZa36uMw6hpEeE7VeJTXdsggoGMePg1XLCge8KToFGQd48KT",
  "key7": "3ourByevbERC8ocvvH86PgBNwJm4wJcpcdF6idtiRhUV1Wtxof5Gm5jtqrko56oXeev2yDDgAy7Ywcmg4LDDh1S4",
  "key8": "5Smcg2RU9R1aKqrzRfYHnB9otRhFLPcazcxWAnNAEHqbzjL4m2nBiNk3KekBixPVSbRuGzZcfi9hCa6jjxTLooQD",
  "key9": "5pJF8csQ1FjcooBAUzqx3c4kME7n3fgFoXGub29puGgDdNiSmutFMyLbaAiipZXEtT4St2Dmrap5on7QCH3fs9kQ",
  "key10": "hMsKFxwXTaduiERyf1kM5vP4UNxgdwgPYiKc6HGFAyJcdDs1jGVQyDaf3oyZfNBmNEt4TA8xfENfDidoe2ML1ay",
  "key11": "2XeQy9ed61dCqB3ygLrAnKj7Xx1ASz3iVdeq2Ag4XBecnozZMjgXdANBsSgUXGKzAwNhtrfQJvMK5aK8PyaAgwSh",
  "key12": "3dV3e5g7gVS4hQjBiBvcfjbvGx4SFxDoWnodaJtWCMQKzd5e8dCSRSLuy4eixk33kZnKaP87vuK4FaUDdMgkACud",
  "key13": "XKPL4b1kYg2UKiFQJCBHSiQ4dPqVXCyyDiCkTcDeEJ1bZdLzrpFatRCBsv9LjxTxeRN8EZ6FD5uL7qS5Y75G5ri",
  "key14": "36K9aJrVu9Bd4fDcH4UX8wuUuoYUjm8tPxn26B3TmqA8Lgx33xjC9rHQ9vFa4TuHQEGQH8SK2mXab54QnVzQFnTL",
  "key15": "4WnWRGAvvEwQrcd6q4PqKnv8SSeHGTFtDJ59sfuTUwQ1ZMAvwUXs3geF3wghPNerbwBCxh4MyUGeHghaKnyDBqh",
  "key16": "4U9Sfu1gMZ9cFb6FU2eJCmpshsiWkzGfuuTFkGR4eDwgdHBzeU5qZGSFyhm6qeXBx4TzwYoVZvYkfs1u79HQXALD",
  "key17": "4ybQAwdtgknFQqwCHH4JE9JpoqP6Ed29cqLd7DqHaJQnodShmxPVrFuwWnH3tdmheqeSY9dqdwYS8GJaazRnH8Am",
  "key18": "2rrWp7Rtuj6umcNNTDLZFuNhvy9K7W3JLxQANWavLrAuCLUb6jQV2kLurhHRN1mDRzawtrz5jkxTLSYrKFunVoPt",
  "key19": "3btyCEJ5xHvVsz9JgPhX8nD4DLZAxXj6FeYs9yAtEkc4oJZAKTtSu6Z6WmfsGvWKiCpo627KWrqdxfZth5PRRgUH",
  "key20": "4PahSEkjUWFm7oZNsbUJrUtYUQVVBUK3ZvqaoMvgxnRJbXSPEHccRBXgmebqbef6SBy6ihJPsbJAyev7kuBondSH",
  "key21": "3ktHLd76TgFZevyznaS1MXgswdgNcCY3q7mhC2enEfJzbQz6vB87jepxGEy2NmhZaauFsXwJBz7ZMie97BkzYvz3",
  "key22": "5Ykhpbik1asWR3XFiXbQM2rf5zEpNfoFPcQ1Q1hXgdqQtRG4yvtgG57hFYjuUuNuhaWNuUaLvZwfsUri1T5txuLk",
  "key23": "5azYuTHLws35JaVwiFovbayFRAENC7qPCeEfvrRxkuLf1zpusmKET8uy4pvseHe1CLvuGbAzmoAMLi4MVo2Dvrsc",
  "key24": "48ea5JqFP3ZBy1JVfAkyvxkjv2Xrei345CHVww1qUrh5WjrCz9xUVSbXhdD58kE88dgwaeRjjJEYGv7DuZy1YYdV",
  "key25": "3s1pqyZNPYPy41ib6bh3pNKyHA8YBbEvZ4xfSDiBxknyt9GXAnTfWLibk39ZDX4s9RkrAMZBFHtrtwjeqZTgg27h",
  "key26": "5xwapaSrdhqwVRwMjJg8aGkjYEih9vBr5uckS7p3DKvdfoALPkHcqtKraRqke29wEF4NZoBzWcPVxiSBK59eX8kU",
  "key27": "4yCi2gL79EWzZ8su9APu5v4FUMH46F6JL9uPyBMEjmM721tcNo2qWi8R5k2y8LkHKV8CjnXa2eU6b5ztRycR37Bb",
  "key28": "5af9yYq4tVkccdmKrH28BSU5VLd78Uq3x38d18UogWc7RS8LVcNurC5t8xXPHDhTzhWUb157PQqHDPnBxWCQMTrT",
  "key29": "4ZjrgrtNGfZ22c7LGfSUNZGmwHjJeLEeBRx2TJ6vM53M3cNfmjoftxfAn4ehsafbLoAA4x6Kocg9XHkV6xqp1yjU",
  "key30": "2XKtaN2gK32V4gEKfC83GvKnNQzEABERhUCzWuvGbbtCHDcsAXbFuHZ7V8RytBukgBAnVHb3R1u59NmkuukrrSCz",
  "key31": "2Wvd6i2U22iDQj7ynZJxHx7BRaxgBgHQdtgV1i5tD9seUJWEUC9KdLqJqfXJBLhiUb1U1va4mMAjY5D8iwZdEDsP",
  "key32": "4X5JzoNUD7ktWPb7ouTk8b59EHa34s6F6A8czKiu61mRU4M8fB7BPuV2W4tndgkLoiPNdivbtvWiFzT4wzRPAPZu",
  "key33": "22qE7UMHqyBbrTDdvpcBArnWV75wd8cJfTETqXTQbuRcZ8vajcKPeDK6zd8j2QqN3uD1hk9JdacCYLjb9T6oKn5y",
  "key34": "5xCrDq5wSBmWgk2GHCE3F8aouB83Xj3gBMSPuUWTfAdyHWbVAiDS9ZsmKULP3yAFz2Z1qwj2rEKqdKq9z7ZB2n3i",
  "key35": "3a9amzGmEw9yYzn5ApRRc58BYKWZ2YeY1qA8YhTDPGKFdx1WcLNijGVLb3dgjPwJbRQVcJcEHPixT6odXarjhMgk",
  "key36": "3h1hM4QK6ZtojsUvdTdtwpg2bHJExQUVEzpsc4uXV66yqe2cb5FYFvo6VBhFV5am5vj8RDDnZ3VbtYThDCJaakza",
  "key37": "Tq3FkEjREY18HwN7EM966xedfLKDU15NMuHxPkdYVSr1oDtcx8727USe6SW2ZgtGsuivRtD3CwgVPppSUfvAFgV",
  "key38": "2tDr14sFSQBC1KTJpBxmbSh3jauG4EPaVtdgEffUpnQqaGuEie1GER17MJ8JuN7q8M7P2VNDtgLmAf7PqfWFdrTT",
  "key39": "4L4VKGeZ4GGRe6A27BJujjpv6sHSxn4tHbk23SVVt4AziA5TRGjCZRZ5DH8FP3qE5XaNGc9tsEWYtC9hHbE8ES7X",
  "key40": "4ojsjGkXWwfdQtgUqqCHU4qzHcw8efce2hcUF9gmKkPcJSDjnYWVNuHJQDB54q69WWP9AbfYFxA2MGnvB7Um7iuF",
  "key41": "4jiNRcowkvk1vsPcvFmvBEcyySoNWvY7pLLkckrHeSsuCNbV49HBYxRRubKUK4DCFf62bZ3vTr1jmJosjQaTSDGs",
  "key42": "5xD3ckENNEUajxttyamMe1zSVnQ3krLx84kLctQ1wRbDV2wFDALz5aXeaBXgiaSyHETciWtE8RHFZPUJioNenZym",
  "key43": "AX3phX656DBhQKGo8FP49icEJHXkhyjDZFmp6Bq6f8GDAqsM725ZjbCEcrP8hUmNzDZrVcgn7XyD2U4hV4EGzN4",
  "key44": "5vKzRhUjhUmJiE8f1DLu2JBhyADmGTiEQVLYa3jDm78PsrBvpZLzQZLQJx68PgrFZFcRgMw5TvgqVdZWorYN6mDq"
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
