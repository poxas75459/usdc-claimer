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
    "3EKtopynRc1XUcaEnsVFwP93kU5dFisqgPqSKKDfcM32Jqh2HjeyoVQB147TWwcnhzCd57D64ofLmRjZ1RbWU26P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GktJQjFGahMTbJxZMns2KH2rJBN8aedXVFELu9oZrqdnXTKn35hGzbACZZ2QGMExmwkhw6mBAHRdGx5BJcL2ZNQ",
  "key1": "4P8PiRPA2xXfiKpUP17z8M2mZSkeJ7T4y7nZb1AQ21gNfxVMYG8pQwt3VxGc5dZoAtpzuXp5hCJaHVtVweuGPBgT",
  "key2": "4xJ7UCvE4HPryScit7L3VUjTgFfcD17DvYYZ4i5NHNKZe9MMgGUrXEFaVeXmBkdbF3US4tESFyYHhytAiUiQgDCx",
  "key3": "2zUgdT76RNxtPxiAicD99rt2h2Cy4JxVwAmKfbJGXeJq4k2BuVBGtTdE7RhBnkJemPENUKcWGDjyCuiFZQBRc3yH",
  "key4": "4Q7tTTRtbmHRd65gYUv6shpbNZqvYjxBqp1mLsXggYwfdXxAWF9VjeYrpzSwenGz7NRWrEN2Ej5kBhBwxkp617Pd",
  "key5": "7vswnwbSJ4RhifcWXxfGeR1wC15F6xN85yPrH9naXzjpjVp7BJkHsY6qfWn8tK5uZ7AWQLA66qwSf8tWvAiMbU5",
  "key6": "49RDzMdZsgq6gzBfMkWfbspsoy4ii6HXwq4GcLyjuduR1bEZGtyxJqeWqhymJaX2E9kwQXTpbATUysGjdSpZ6aeA",
  "key7": "88axjBB28jm28AjUyw8sPLXm8fR7Fb2Nh5LW83mGV8m5d8788EWc3mAP9BtKUyDK45z9mjEydddzPUdEhf2buK3",
  "key8": "ovfJau4ViSWqqUTHgSPCAm3FmwLrN2pHoyUCHWu3D4oKwLM3Hbv3Wa42CJy5Vg4me2oM9xnyV8LxUqjRdKgbNGR",
  "key9": "4qu8T4Xy8WpqhNVhViMCa1JsbHfWo1oASp89V3icT6EdYmQbtpaPXNTuJKgfsHAfQk1NTQcsoykbUBiq714QpkjD",
  "key10": "4buM6PriqasLx3mNAZXGHo5YE1DX2pT7Rppr5v6jyUSRzwzPcL8ANeuNKD2Y64X9cTHsDXowtcCHEb1Si7XBcSHM",
  "key11": "4DUpQpuxFDezanRhw8QjiFEz6Xfg93bQtWz4CcUdi59UPEcSxejrHd9EaTBPbeMhTAFjjU5wPBQ7Ssvk2KwV5yKe",
  "key12": "2whBtodBiGWtHgAEdhwziu7jecBKedf41fc4bwnh2PgZEeoVsqnYPSs9v5F68NMS2xsQw8rXuNQet8bNENmn5iGk",
  "key13": "48JSYa2bXaDBLwEFNjBZZDWNLvamG8vJ3tzFCPiB2ZCZgsP2MPcSZAs3pU2bjtUAeHkyAhXpcNNnxsq786yxNZRy",
  "key14": "N5w322StdauVaaBCzbDtTJBMTVySnHVcWAZBSo3HayBJCTrDrj3K6d5b92xGQUfsoiY7Y9GgA1yGYt7Vxp5pFwM",
  "key15": "2gPV23JuVjNQmUzsWb8FNJNNuuiFFg1sMCLd7WCfL3AU8zgDQp5kf18hq1ntDNWCrXDV9Vbf5y4sn7mZc6YuZU2c",
  "key16": "4G65KE7gVrF54UrtKo65fG1ubYcDQ12x9XMk7MQKxiCpzGyAgFrHSWXgjh2vaAEzGNMo3LwS6jqeTGcxWkNCLhbV",
  "key17": "4r2sqaP6KKsnnkzSEVdQdCgYiCcZZ8V2ofQe6XErkGrpTt2PTtTuGTJnqZhZrGt6ghKx6sFXCmTqxFQ4Gu6i3Up7",
  "key18": "5uNZXbUqkroQ5fzgGNCGqrfQumQRN1FAUdr2orNNXZHHepSWvgzGZkQrRUrvxt8UdJAxzKV24TzJKihbs9xtVkyB",
  "key19": "5WpXVDjs5fjAumvxjvpYwqPMeMHxc5Qikp7hqwfcAKzdimMSvgi44yGvWx35BRpBLguwpQhLfHZGQCgNH9SRdw8y",
  "key20": "27mmsmpeiBB8i4GbLDJ5tnFSAmFYoowfXRMgzW5L7eKJdcxxaMoWizxg4kf1TFzEqHsf7DiRLDBnUcDAiKjJgcAc",
  "key21": "4Ji3fCWgJmzHz1veD6sa8g133HsB5Ru7XkY6LxRBiQ3f97s4x4ppQZKN3QaekC742s133e1Yr3ue6h1cXjKTCPkh",
  "key22": "2JkVmLMWSJ69JBpsYxzKonPAW42JKUKPbF6eAA6fHe7sSWGWuDX49YxfWArtz7EMNxY4TQMcLNULpgEp23DBE66t",
  "key23": "4PxBiG2noP5odM7sjm9vLPLLuGnMEZrtY1nHTZ8pNYWpEPhgy8kC66Hqz8xPZ7aJaucBX867U8ZRKQoun273RGk1",
  "key24": "2W3vdUJDnPjaotB3HDQgHhS65QzXgnyEw4pSwSuq7f7jALJ6keYaNkXCLJCBi3NoHyBMrCDGTm6H35FJ6aTjRWPD",
  "key25": "2JfYLf567AEYGV7SyW6Z9zCpUMe4nkeo9ZmMZseJWKiNaLM6rEdTiAdb4GgYTHRPYSRk2ptbBeZvThnNKE7g4Qh7",
  "key26": "2PQ6EkHudN4PYYj6NcojuhfUW5Z3aHnrvLDLn5iWTRJrD85cx6G5vozmrqTpg2QXmnu1PCK2SKgCS7sC9KicauT7",
  "key27": "1JJaVz7tkjL2hnKJJE5iDvaVyHkFmJTyUFTwJF5wYLyyjDCMEKXB9rSCC6DdDUJqqF1Uueqoa4RCqbo9zFALSL4",
  "key28": "K61FTgBFuSbFQDhqAPEbQjPMKz2Ei2gPnhyrft2REPygVCEF7BFTv5Fsx4dmjuhwtdUUJoNRZ1pn8p1fXUYEkA7",
  "key29": "456rT5F6UegfFKgcvBsLfFfdrgJL7ksFxM1gsNEDBevT3chR9fPZtAufph9w927iJ1irVx168iWXKh2jNprVhbGR",
  "key30": "4JXCTcuNxRZ6VUFNHer5aPZZmH41J4sgXagrpVz3gZSXaduQQfnuhoLkcYjSBvcPdpD4xBfvLkJJg4vtah2dnnVC"
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
