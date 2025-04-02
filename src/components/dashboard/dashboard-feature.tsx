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
    "2Ptq6V7KPV1o8AGCDx8W2hh6Hbu69RQtfdhaYCZtKEXp9rCdn6GW6RqTQk8bfLQTnL1jN3fzmyAYrEbrHSicMD32"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44gE9pLg65KWGNgSzTD3VVs9Lt9mtEQrozAvtZna7PBhrR7NqnpgQBRQ8rUg1qVpkZ8L5EzJY7RSBtFPJjnSC59i",
  "key1": "2ZfVzVGNa2iFLfhJg5q3hwBJQKmmJP7n8cwwDM7qWQCcHRS9BuqzrEr76g8K7My2bbjbMvQPEm4mFygANbqdZnqq",
  "key2": "3My4f3siyno45W99oeDSxQWotScGhEjTNViq6CGpWue1mmLvkgvtLiEDymGt9emDyqeUywQxFYQ9VQXAu4WBEPj2",
  "key3": "5kpvemTAf1bH7c7CcNKY6FJEWT8hG9Kmr1Uc9kQfQS8hGnMKjwXcoeR7SYT8VCeLfhUzJCuqLfPkMxj5afEm6ZGU",
  "key4": "Cfr1EeLwoK3XTJ8DRwFFZKRNcoxNfsinuR856hSZvQLj38gWX38hBHKhtKHTzevmpKokbWcFxgmQtNwRdx11wAS",
  "key5": "2vqV8XHkAPcE29GffuiAhTGq7LTxh73GkQ8RHaTTs3swZvboJLcMu5VW1g4rC64CiUuKkrCfXnAWoh147Ra38SFs",
  "key6": "5h5yXsUJn4d7TBPbbjdsBeqeL5uJ3VTpuPWtvqwyMHi1GjiXE4ovo3J8Mt9H8n8ZhdgGcMJ3wMaJwffT3Ys7Xc7S",
  "key7": "2gYaVAGv2BM17Cdjo2CYdvTf59d9oQgjLmQ2Yr4DBcPVa9Fo9g4tSSAFnPcsKTeat61onCM61Rjs2B6nTc2aQ86x",
  "key8": "3iYmkYrAu7xDSVj2NgNs9eCQaebBYTxbRUrxof4gMg4zbamsUTshAGhSMHBTuLXEqZzNq6yLPKjrYzr7HSwgAKzM",
  "key9": "tWEb5gu294PRqU8dzHEWAJLtaSf79jA47BA7JhPVeNb8UKbVY4xSRXHE4PtKLmQ8Cg6M1mVedDmJfinhD3Y6Va8",
  "key10": "5KdjUcRtvMVFULAnAjAWuxzK3XjB2U9VQEMNogupJThVV4V7Kb6XZr6CyxLHMFqvi8pGF8P8M2GGT3ALy5wf5Vg7",
  "key11": "3MyH4qTCBX6jxhuMFrrtQDQLG84DaNzU9fSTgUe9C1D54xJcMmTKWVRHJWC8vjXeuhYj9Qbt3ntA6FZ4VYYhSNuU",
  "key12": "Wg9q7htgWwen2dfj4idE13hTvvt9domfzZs6wXmjtqyQH1tYpKHAM2N8Sh31tMmBBRBDdQd56XDnVY963tnAkSZ",
  "key13": "Kyg1wN9uajtQFdZPzbC1SgWgk4fKZR1vqt7M8jxkcWoRp13eYMw2VtxzEspDwTbGM7mhhASR4hFevtVqPNjHtqs",
  "key14": "MtJxBSzLzwPKqj3w644BiKL5nmH2DpxMoWyVsq8nweeL3xqSEVDYBdmK5UyuQaUAYnRZeSmq5E9jL1C4eFZkjfn",
  "key15": "er865RZ3aiJXTGU8BPY6rCGnGXes5BShH6Qbygs9tYTzYDqECwQA8kvFh6azC9pYrpXZoeH3iyRXkrQ6hgk6ym7",
  "key16": "6FEM58Ta9NjCfmvxHGKJTBW5eouHVr2BrG4JwTKcdqtyeYPJfBNxPtUiH7BDMqzWuQw4L4neENhsTtTLxjb6MhY",
  "key17": "4XHwSwJk9fWFLuwKHMnPBZF5zJo84JepkpVRkEtqz49XFvGizotQkLN764hddPsV3Wg48EyLk1HHzRsHCh9xRXtU",
  "key18": "iBAPgLRGijZWn8qL3AQekbt2j3bnUtYoBDk8AUrtBKe6CQm7pqciW4jJUY23JVTLUYEVDy3k2biCLzNcpqHFNHX",
  "key19": "3Vqm1VErVJLxyFZ9hFMnYsqZr1U4MExeGB833hu5uLu6mGa1ga6qYJfEu5jAHW7iACUVXYGrS4o4qENHzgw4CBYV",
  "key20": "41oGkmLSujzdJFeYk3fCSFJyWuBhptgEfwDoSxYiHxfNBZ2a6ozriB6p3KWrmzNoRDaNJ5zus88HrHbiD8TrYRWr",
  "key21": "5c9oc3fRuQDnGJpQpBbgjxHa6AfpMPZ9Rd6UWHcoviEfPeixz6Wp35m5WLe1LJS3aTh1igYkbCTqqjgEhFZB5s4V",
  "key22": "2i3cWPpAs8TbS7b1t2y6xDgMpyMZWPXTW4hAKbJ9xeKA8D8gdbjXGkrBw2iJ5pSXRWUHzebbvpEgdvije7yPzTYr",
  "key23": "58RKG84oHFTSu7VAWir5nLd87jsEzMLhfG1PLhiub8iYnuoz46SGxDQNV8N4ZzzxYhPFtr7oCuEdYqt1g8PPz39n",
  "key24": "57R3kbSBy7CdQY2siboQHJPgTLrWbQ7hRPegstpLKrZTWmkdArURomjUhphWMCSN1edz3Xd8yrtBJ9e3Uv12NetL",
  "key25": "4irs1NQ7GN3BCq49ZhpHGJpSfPTLYGimv2TJf96KRTnRAnnrc19Bh3avbtYthCpd4xTXULU5AUDf3KU5KwNiYtA1",
  "key26": "5BTk5uriD7pyXPqYb3AXVPyCv2D4UKnkU9X8K9MXvY9YvTBNNnaCUcoJ3eB85E3DWtyrMC5VvyYSAx7dP3o7RKHG",
  "key27": "drF5dkJhiQvkRL1ptb91g9WoHSHuLohUjwLpWsJpTxDUZBCz45gMn3LMyJX4eVC8g3xgJZjzURVS5j6eFhoZ8gE",
  "key28": "k5VNvj5nn6nM9EQRkQAmDMjc8Xk2hv9JQWrp1ugTmHY8AP9MyCvFCAq1VZgm1VuYRXXr7ieNJJtYHb7yz2dsFsp",
  "key29": "445WhWLqFnKh1ksymbNZ63hf8X8SF8Z7X34krnupzCrugVgcp6SJ7NM3VNveiJcph5LBVyAHZnfzA3nJW3tA5hZ4",
  "key30": "2dJxVhZhrBfSw2pG9JFDWhgs7vbQiq6QaKcL3DN5pZKarbkbgwr6Z3u4eJ6VEwgYvSJxHfQgDgw7vYAT4b8mgBYw",
  "key31": "3H5LbEK9FLiYvAyoznJoZ8xevTU7m5F4ZzDPoAGkY7es7u9wGmbU4NqD9F5iCPGxFU5ZxFoBMZehCQhv4A8HW2X7",
  "key32": "4S6wszUe34CCXdQdbzacbTAeADGJZw14uMyKzSzYujXiwbMh1jRVMBdxsDrPzcNUNyQtWdXCEKuhChHCUbEZr5dK",
  "key33": "65vStALNscRZmby9dwLvZzqXJXKrMEkTxVa3qRb5n7rr7J1hDSqjumUcxK1rTUQ1JGq599YdzYRP9gor9xSGV5Ft",
  "key34": "4moJbZJp5uBkMfgxtMkBXJNRnkjYXA1DpU27ohPFsgD7DjmkTsdZM6yNtj1DHYNi4XHrnnwWr3ZPeFEz6fgXjqzb",
  "key35": "4DkcHKF7vqsAcBrvaRu9nSBKN2yw8BEK5rd9JkoN6j1y85n45mxLHtrvbY8pk68pos1jM7LgxHyr7MDxXBayLpVQ",
  "key36": "5zm2DUmFQyzT4Ah5ui4xyddSoEb2vZrrQCQXzLnJyWp3YiU4e1UaGe61SBKHmaF6M6F5yax3HCWpQxQ3gHNjdnFq",
  "key37": "nLyA9hXPkdZo2SyZ9LibTSP5N9Z66E3EBkWzxcHpxm7s5ooV7NbF4SLdtZJBx6u6bHuhEvWi4FcLTQp2RaPcv1x",
  "key38": "645EUtH9z4DuWw6SiQe4kqPV3SNHiXjjZ8TqxYZCWHZpiLsoJSdCcWoDfXdCQVKxWm71DzJGrkLyYG3yuFZospmT",
  "key39": "WFcV876vsifFVVGb9uk9jW9keL5T15htbhcSyysnZSA1hKwM3qWXR77At2e2pegMzQqB8U52R89pMNtwsvD3Zaj",
  "key40": "4dppCxeaUtDB4srDMfyaR5PuwwYbhp1pYhXBhR4YSsXSVqMzeB6aq5dyX4co87SQ1S4mo9w7y6T9GEBR4hX1TAa3",
  "key41": "c6tf6d4H8jBzAMMJG1fU2GwD3KWXCjNzpc3cniBGNKLWuEnpZzcWQY2K9zmBrc2ortej9oavGG5dyErQCHDeJac"
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
