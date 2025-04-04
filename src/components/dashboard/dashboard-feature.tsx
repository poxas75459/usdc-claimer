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
    "2Bw4PRfhnZyNJV6WGeLAABZNPzvxHKETEvPvqz53Kdz8c5vqHzvNnXq2PmovMX31nTjWb9BVW7jNCZ5WGsNE3GaR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XZMxcBjgToMA4oYXzcidRsT5KbJ5LWepnAr1UANhLEgPF6nKZjvzs2MPBhTtrTtKhacEU54BYtLQoSpw7rYsiD9",
  "key1": "4ubTH1HJwRzb9Q4Qihuxgrw4QHmQchzwYhQpUYiGE11F81EestRxaKi4o5j3gyybMoojFwwEvujN2oiza4a77XBw",
  "key2": "3msUbiGLn7k1jLZ3Fo5Gp8wGs7c5oBzC1LP35oT9sqBxD8tJX8kyiYStq4jBs9FCacwqks6t8PTY9MYdfU3E7jbs",
  "key3": "PFHueLJnapVJzrNQ2PZYhpFVnbamXLQYuxM1DqFYJhV2h2tDQLSvngoMcyTn55q4wSE3TedYKgoUwCaR16iWrEb",
  "key4": "2c1BLirM7avoeh5FdoEBfCFefAk3W9QHRqnxyKDf2WZ6U4snrAaD4JRpx6quqbvwRkcYErJ1yiuomD3xUwLysADg",
  "key5": "pUdBMdNtL17YW5WKGtLa68LiVMCErarXfBuwXoecUTLdZEgK8rj5s5hBqChpmwp3PVfKJYcwhH6KSoCxyYxbXM7",
  "key6": "Robp58Dd8P9nnTfJUNb8ZhSDPRHLpFvw1SQnwrWANJWBMwvXcDo4f2scZqDgBVeKyKK51DNPEfbH7QTqRxJxpee",
  "key7": "Ys8AeGn1JKi6CqQJo2D8D1CcrcEegYpXzsoeihUjv4rVXR5XuWnJQzmjeWSAqh2WG3Vydozmmhnm8cnbBbEW7VS",
  "key8": "4SS7vStigiohRZSLQHJimbM5TQnwT5fyXEHfKUPRmHdz3TMNyyuAoXj76U16Ks6YkQ73qSxuB7MLfnmKuHKrGVSn",
  "key9": "5yWEKjsWixQ2y9zeEbPAAhWcAnM1vgmfF2YvZbk7YwiEPnc69pAk3rkekJCmDaAvC5wTnBSTbz1nBdUqhMiTqUTw",
  "key10": "TVHyEpJdnqhMUySu3ceg826w9LffSUc8oJUPWv4UHw9YYMCtBpfPjqyy8WEB1uSf3h2wYzxBUTm9R6ooNzsENkY",
  "key11": "4rJbJAzh46vVky5MPCcgCHjYh3Z4Aib8hjXom7W4JaJmeh8J8L6vN9CT2XSfid9JDeDsRo5YjhmfT4nkSLtgQsAP",
  "key12": "3Fzyqyg1r5oWnWMV6BtoT4mgkLotyNYDofGA9mS5fPxnDBTMqxHyc3Cs6JKzArycV2aFznADeyNqgqN3dDLcoh3j",
  "key13": "3i82YUADsn1TCUh9gg4ztL3ZMTVFVNovjJhPEsQ6W9CJ2Vzc7DCzTAcWwjXhjotKTZmSCmB6jiLdPhcLppryNtzH",
  "key14": "55umuJbuFb8CAq5qBW4pKTBTZxe6ZyXWScmDcMyVPqF74MEoBao9rQ5fC7iEKSdh2EaZhcCYa9eAqyHPqX16AUFs",
  "key15": "2SniTB2cJJSTkYeKNxL89HmueJPZHEENbuxnAxXmYkhVFkS6fGZoDAsRVTSNydwo79nRv6fcXSWTrdD2wFKjidkX",
  "key16": "2A8HBgtVuicf6ynzv7Aa79d7zyWo7UYpJdZm59adE3vUravKG2mgWHN4GGHfCRx9t5uz7A36oKqU52PhwBHGtW7E",
  "key17": "2FKYbzuPGZEwjKw6T7jvee3aXMpbnL4oRPefPtFWsC79dnAnK1HAX4q5whCFNFhJ78aHVXMkrPbzFxerM2pzjYR9",
  "key18": "5mpo7s8otSAxJrU1r3ihV3oU9z4SGTADzwdy3KhwFzfvweavCbNn4veKGjKkYCJ4wWakhptYqCT8TPw3W1Ff7JqB",
  "key19": "32XmKkXFb9aLsE6XEtig4S5B3suwn5kbLGGuP5dMXnmGHDk4xDSR5vdsYmw6FUzpzQ8MRfgg2ETJncP9VCxyMEFt",
  "key20": "3hdCpYGaXPvewM58ewqm1n3uAJjuGnWY53h8ZzsALnXrHQke78nHZxR1nqGcV31UQQ8quChU1fuHgGbMzFgyQtfT",
  "key21": "5ZQSfRJvMcscLAweVrBFgosSfauAWLWS6e5qqRg9Kvui97PMYBKZ2eV2XeZ6Ec863fGiJ89JBCnQNnzQuKyubAE3",
  "key22": "u6ByfG5JhttgDFraqfd9DRbwM567TEpW35PvoM4DNe41w9BmgaQmYjWZnhnZB5HxxwabY2HHgxu3D9p5txGaivp",
  "key23": "2zbBwRwwKcdSVB5wPpobDQSx49KBtMEhe8K4W4mPZaAgsj6rP2fcgb56Ge4nKFHsjZu1hJkEcbR1cmSHdEzjWp4k",
  "key24": "gQ23sjDTf6CgNwjKbBW6VYJQjXKRadbuc618pf8FbmiNXh1KyThbnf97mQg7wmrcfukyAG9D5beHhzbojqFZBuC",
  "key25": "4LrqE1rEPsHzZim7BQ9dSwPEJ2PY1BEJ6wnnCs48TMUz3ryYPUDfj53ezxBFTxmUXhH6NixMUz4tmXZ1pPY3V9Cm",
  "key26": "3osdVUiLBRJPE1tJg9SNqY7PpQXdqMHRAWG6kt4Nud9EEgnavZXQUexhmKse6HuXceefG2WehfvLscmwGaauMd7G",
  "key27": "3nGY7trGJt7eX7UjiRbZvwbm2Wg71VwfseNcWqUYH2V42VoCCg6XGm8wrxkNJ9FucEgooW5EUQJbYTYmxmUHz5rP",
  "key28": "4bRtfpXUDZkj9yyTs56VsiNBS1QiDG2na2MVbjoAk872u3y3XzqgyjHNtqSQ6oBtXZ3BYx1wiu73E5xE9jPyymyP",
  "key29": "3gZdzaoGE3WbnPzd2wrUwzhjXGL3fB1xZryYaE7VeA85xMzWQT7roeZsYXktD2QWuJcj7fcdawGYQxaoYSNfxCyA",
  "key30": "2QyXceZYRtVwNbT75AmfoSCtgxTDNSkJ2zSm4PvMQSmAbvmAVMpcNLQbcevsos7Y5a1FLUXUjDADY8byuGTgvUEJ",
  "key31": "3RSxoogkqwKRToQFdvCmx6LA5gScSdhnF9AxzE4J8usWZ6gq4DxCyyzNBDf6yRj87hiY6tmr6scPMidEkQt3TxQz",
  "key32": "2f2Gft1c9dgbXjnsj2UME28bmJnP8wTZC7LkvJqeJfoHBFXgY9TCH7EnUtthP5BqhWgrtPgxEraeNQ6NAi2VuQ3j",
  "key33": "3hzoW8JdBhT6D8cfefFmySAjfzZq2L1TvFf9WKH9srGuqoRRFeZ1CpBqTpySk4Z2Nfcu8GREfzAtENRo9vieCUbU",
  "key34": "3BD5KP1Ex5c2XK4uxifDy9mnf8ALTqkZHMhb15Xk6YVx5f5bqSr4o1mAg6ijhThTJmW4ALB2LGPPdnLsaZ6x1Nmg",
  "key35": "4MJohuLNanKRma2gL8U2sWmMtCmJ2kscfPngtzqrP3c2A5HdU3t4R2xwDpctBqDk2UkDusLbyhc9uTnnDx5e3mLy",
  "key36": "5efMCbxxNqAnRdTvYtW5N3n74ubQedyqtjiqEMLBDghYi9mLA1HCER3yvxbq12q18eZSrrkVFdwzgb38gwhASJPs",
  "key37": "4KtUzwKLvbEy8nYqjcHBfJLar5B79PZzZ6CowcipH9RU297LS2k7Nw7cnydstXYa6c6rTB1J619vztQY83vhrDA3",
  "key38": "nhtP4LiUWCegZqWru278jKQjGD21FMsqjBmSABvBK5fSRPBTBnKhXZ98uaqYbeass5NmDgWvVhHwpgSexpVpNwp",
  "key39": "4NYgLncoA5L16jKuqdXD1CzVmnkqxX1RSbHUqoAJDa99RrKZjTd9pw7y4whJEFqRHKEHLLiXiDUzMwFLrRxD9imw",
  "key40": "31zeM4CJv3EsZaWhvtcP7s25yye48wNNpY3f6man5ERo2BcjPZD2p6cA1cYhFfgFFCuY52p3YiCEcEcgccBK3RXT",
  "key41": "3NBtVQRRzrVkj4tUHSAPpJVN1jJfVpVZkfMQ6HDHXkrFtLg8mjw3Q9kBGyw89mgsHtkMQDPCkeBJtZ9aHFxZrvFa",
  "key42": "5Aochtnh3ZeHCH7nSfB1SWJ1keTnLxCUH8hZk7whMzMbvbD3juwmPHmKEDL2TgEY7dD4EcpQq2NA9XuKASGpT4cV",
  "key43": "5K14kQkprbMN1xWpC9JVTNKi43h5NKFpv1MEEyPQiLYadTygWVpMigvLVrfZyyoDkb5m7v8pzCvFQ1gdUAym3czZ",
  "key44": "5ZjLyb18FHX5zWZPzNtvX1Zvo6HnxeoyCX78RG4AC1Z5nu9RW6dqKL5YxjyhrzgvBqH5n4pMFP2bK9kTYJXW9riv",
  "key45": "5EGToR759RnbSwXF47va4mrPvcMWtLTZV2ntWeLcMdkKfGGoXaGTBDwYZqKqMyYyFNJRfgKK6Sv82m2TVJBMxcR5",
  "key46": "636nwreJEcbx7Tbh2jJidNCGv2bL55yX3TA83nhefbMmLo1wQrEpyYnXZfJtKzVGXmPTiXo4ZHMWCoqUr31dqXS3",
  "key47": "5eoraG77Jk7TLRaAyjD6ykD2MBeWsTTmLk2gHmZREpqL5kUSvX2LxcMHAHK9F1cYX1wuFMcJwoMXnhVjtZhGCxiW"
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
