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
    "4X94oPMMAAdEq9eWbm6um48q6q5oT2SyThEHYRauzF7Lr3CeZXM2Lx9hUZDGSxB4rnJPuXmfYhB1TVXBMBsmj5xx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qLEGrsWtf87mBuuGkirXZD9mwNDjbW6TMWZnufsasmrjPr8HAveoP76pUXtmSZMcvEdDXkZQqDuzBQ7aN5ohhbD",
  "key1": "4xq9uxxr56wiqf6PvTygDL1feRaEZN5vsrcQ7brRnh2HLVJ6oYEGq18xiafFsAoCKRin8MgTdT8tmY1oUKS2ejHH",
  "key2": "Wh2dLtPkFZR2ZMb2eYdJgnoKyHnRMf1EvZyWd7RmkQRydAYj6C1VyrRMmk5RKCYoBS4ftiHVEu3cwoTb4Ly5TTJ",
  "key3": "66UFSQKqQjSFSgJBi5XQJxfsmHL3ackyVCW2rVYx5cqAwGHXyAQ7o55RnzfXmNZds9Hph3PF6DSKQGk5gXmTq1Eg",
  "key4": "67QMwR25QiPsj1L7vPEeWSLuvyjRyVAUWX4yEUYAXRptmHayCzXMNt2U7DEtSoVQMddETjs5Lx2BmsAqYLVePF7U",
  "key5": "5vLTmkGzctRjsK4eqb5jUYZybuFmDvoaBtwLF84QSGggP54LwptqdHbDiHWAkuvhYh5swPUhTWGNymtHguGdRNDc",
  "key6": "4XcJdzcZ8ZAhYQ914EChJopuiQoQwEvAnCzowrhWCt2vcDZ46yJQgcwAfQpfHW7nKhHyUqjx9LczaKxYckRz6gCf",
  "key7": "4cZvSKt1jRhvuuiCo9K7vQcB52hRPhe7hJ25mbYUj3VkmfcfcY4P8se36W6PNJ6LayvoiTnMmHcz6QzUBcGypWcM",
  "key8": "Y3Pd5ywXiPhuR9cv165efu8veDWdJ8ZTdn8YqmgpGWMFAQexei1saCZHAcenw8C8ZdtQ6LKrSKHrcc4A4YCJV2a",
  "key9": "2Fq2rzt8YYRa92PUjz9QXv6dUaYfsZgev3EQVWm6VMPdcTG1XZPdXScBS3R4qC23NdcByqFZ434RQi4bDHzgdmKb",
  "key10": "5nm8rTvrvJstgsFVYDgH2teAimNbtvmtACbULUuaUoex397UP5CfMJtXjyNh4eWeR3FVYUB2MawUN1awQEkAWzvV",
  "key11": "3n5fkSTAYx7KJRbrBJ2JFdhdwvNz9DniNpVdt5BHYg8qoq73rqSXZdrYw5d8DhSE66DCGm42EdGhXufd7WkyYbp",
  "key12": "33cmQHNi48mu3w9J6VUbkKrjhXv5D3w17NXmLBm5gVtza1jrTyhVGikeJYT8wk2qdQfewUFNbk4HEuyC7rRPYP6Z",
  "key13": "4JFf5HkW17uBMrNy26E9GoqQfQEV9WnbbPx7K7Ee53TtsmTviA1FP2x7frJyqGo8czvjUdyoUdA2jn2AZLSHz11D",
  "key14": "2NpqCze7ZX9WnQxmBpsKCYwNSUu2Dsx5GjY7HCgYeGKYCBNYqC2bLf9yDFiZvtRPD9FpftiWTHUvd2B5VpnushgP",
  "key15": "4RjFCjqXLfRLMbHW8zLoVNUtTtCYMhXiLEvtCG6rXACxXBXzbD2EYMTfVNtqwSFiBsvodysgu4otSfor49tpFzyd",
  "key16": "3Dw56CAFVoc4hb9ccYDNEitxbyoMv9u4Sn4mEmoao5vnLBf1n4UDxpoZzaSgj8ZqKc6u8nCXWk9gavT4K9T19a3q",
  "key17": "3BrBNmrLvqEq7B88ReeEw9ywpSkTjkzuLWNy8XEpYiJThkVpX1mbyzKkmsarvFnyf5upqGnfWjx1ART6zmebhgWK",
  "key18": "5AjfiyhQ9V1jEyKLJpL3tUmbH9x9uVXeXRm7wctdQxHxEv9PR8NGzRraxJLvSg2duFJ5viEgfMpuVvXfgbHiUmLn",
  "key19": "4ahE1bBmdfwKngQM6HazYo21fa7pH55KFNDJfUR8KfQeyayuPJZm45RF1C9H3MVVa1khPwkP9eB6QZLds6j16doC",
  "key20": "5LYEMNRKP1F8frENbkAAiyD4UgyRgVcHFoQaCRFhPR1N3Bh7UZR1SU2e1SczNGfkLw7bGCKc5S5pnrKBUnKPMxcP",
  "key21": "g7GZrtz56JDdVHkMJWAUDp6Ngf69tbhav85TTewoCj5QSHcX5T9UofoqyRGxpuTLbXMdNpDCDxPgtpTGo3Gv5Sz",
  "key22": "5tqfgh3J1RicQiUe4vz5wpnL2Lq5dusbfYXcqPLVg5p3CkoYqr5J7ugzt95BMUd1ChiL6eJ3nyfF7CzdKYLPY1Gv",
  "key23": "5bGtnGM6gTRFU6sQrYmgVdp8xMoQtnwtTuvcTraaKZqEcq9hN482gRvfbvfhunkDf2ukjQCtmZmgZokeE7kiYhGj",
  "key24": "4TamhRnbAUMmWSyEX6m6qpi2WBCdk199XBZmmY9EUwgnkcpzaeTRz9DJz9jGh1SSG2B3tvfD86SD6gzSfprk6cwD",
  "key25": "2xx7gFJSMMtmsqKMszy64BgxatyP3NpdoeECTrNaVFS7GRwgrvUDyeHs9TcCYTcMZB4gqsNuVut7xJwjytvfgDoE",
  "key26": "2qBhA3uHgaKbhLSSpeE3DsuwfHDMCYugDF5QUyTgyW7zNapToXqfrX2t1zrswEEoYPQFhgSQhX6pNCSshSWCfBc1",
  "key27": "5zxCzmLeNQpMuLgG6cJV1o5T2E6EqmyH6krCETsasVU94FYBBPtzRgc7FcRv9qjQK7DVMPzMCDWV3wqxT3HktTmn",
  "key28": "3JAWBact595vJWBg2BgZ4CyTa7uqoeTxokcHraaPqe8spR775FhMrwu6ZXVNFNJibL2z1hV6CuevY6qFQSmWYADT",
  "key29": "nReZoYoEHy3mW9T5xTnGE5V5JAYnp2j7ERyr5Js1kEcK43LiXQB6ZJr5AmfcsWGg6tF6fVgLQ7Ecw6tvyg9pNac",
  "key30": "45CjFspkDLq6wVevt1Pksm5uPtYmtGJzx4DKXQUnUYF6mVCLYZmRNQpF8gyvceiakN3BV6PSfeaZuoP7TmveNQyR",
  "key31": "4wjvjbNEei7G36tVUiLgwabJun4FtRZyn2twTeMCLNMPQ1ayW3Ke9r3nXK8MWNuxXgm71krpB5GKtCaAGD91gcRc",
  "key32": "4PxtyW4fH1cQwB429yZNNRuRY2L8vTtz8CpakLEJRqiL2nqWMXVr3P6nhiiCMwr9kSS6hrR4B5CwEnYPJvT4wzw1",
  "key33": "581M3PJuM9vvZwPByTmRYu4xdzDKzypE5cJyLpoyFUhqSZkSBwK3D6wXJnHq3uDqtE8N5RVuakQFZboijCGqgb1X",
  "key34": "kPhT8de8eExuewTNwYPcVcVh94715bjH1qkow7ExosVUJ3rjkyTH2nwk7fucfDWWdZvLN3fiDwKAVeJPjjMY6Ks",
  "key35": "5bvdQYdSCLwLJDoikFKnq3r1DWjVywg1uCkVahxHbFrxwkoxEQmnmKG5NspT9CJCyAkArnJob5GhbSdkoMhdegrk",
  "key36": "4fmT5WiRYjijBzQvECCM9rj7pTDDtTCkPf1BGJNdJQEMR71H5kui3UhJKSmNLZ7khNUhmAxrFpwGB5D91kLJqUoM",
  "key37": "3rzfwRnNm1W1sHTz4mfTaEXkmRzJoixE2mBKfsEuc8cgNPfgACzei7pP3rz9jvRueid8gzfmgxHKtrTCLDBZ4uKW",
  "key38": "4WTKCoWq6By68N6a1APKPsBqG9HHeCmZgsBTmdTiZtAGJgaAY7bzeh8eQ4zQKri1nzTKt2mrJUnrmbk6piCYStwv",
  "key39": "qtpvPdijeCmjJ4T7tn1YTUnodyZadvC4dGsk8cCGtUhAVmovqw6ncEFRbXeQ6hngoMUHJAagQZ9Q36brvPB58bk",
  "key40": "5UxpURcTMfsqFRMYftDwPrP82gnKokXbKWDZmidH74fMF1QDoyFZxtttqH6TUd9U1bo45S5pKbCfqhX5cqryaXkN",
  "key41": "2SUHfPd4JN3aB27TDGDxeREqB2TyXBLE1FNEeyhmnga1v55ENkJLTpUVZY6heBJKtdHdP9ZR5ZzxsW7K4YsSmYte",
  "key42": "2Dz2WC1TMVLqfB7Uccm87JxsSzwcK6frU7HYdyfg4dbhiicgdjX9w2Z8NpVi3UW6HWGJhyp6zRYwtwRXYZbfjAQP"
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
