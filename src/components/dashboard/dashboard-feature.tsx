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
    "5SD9kRkQyimqYc4fJRNcpJhaQjBYC6rhn8bShN9YnPpH4RmqJE7ogLziDKJAJFBGccHpWyXWNga19T4UCtHMEecW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XLDGp5aQ8d7mpyX6iQ92CofG5dRAiahJ38KCnRzcnE5LKxYq2Cn5h1T23MT6AzqVciVUgb3L1986ptajpSPfeqW",
  "key1": "3yMutCYBa6FXqzNrk3BKFTDMBEoLYdYNN5EuytKH6CyK6tP9ikksoDbq2xzLFjk6bawqXVFXDWxAe2EpF4wg2aLu",
  "key2": "3ybkCfanSZoQRVTauMqWAo2nmKgoTbEjigMVzxCHU1viFYDtMfcwSUktKwvLR3Jepusy84jBFd1emjYAPKakiGky",
  "key3": "5g1gMedfuSf8teAse4AmGKT3td5MwzVHG6vNPh8TUGfCphBjz2WTRFT3R4JCsXZsbijix74EtxtDBtVYotcxMT9V",
  "key4": "4JeHZQvyiqxsXWCZuALKHy8SNYZSzA35nP6dzMtJYJSXidevRQvqX4SFWwzT6BgY1q9W8urV2cfMdAkyQkjx5LXq",
  "key5": "65xCmdi1o5GzLfaxLZcvKAvxC2anzjnKwUEaEL4dLs1PstHQjauSP27D2FfKdDTJqah2DV3tEPqMuS6xMYSEmVtz",
  "key6": "4kWtnJLzWS2oGA4WLwMGcsctkPgqqAgbMz31GJReKDxH8VLyfvpLvPrdfLKriQ9X3y7a78sLUL6Ucjk1yg3nYW6T",
  "key7": "4PaTA1BRigHtvqnxeG2z6oWyuChqrb9yih9boU4ubkNTTt3DgPb7t7vnfZttGoxnp2ov7VTVJ4zkw7M1bCmD1Wnx",
  "key8": "5H8ySKSMkGWntvEga6dSz9XMvkG9YX7rcnq3we3wak7AQBpWfDDtcu5s1WMYnanGy9XwWCKpzT8UEd5sZ69abwsT",
  "key9": "3XRLY5zvfGS7myCFH3QAc2YFuCbY9ZcdXiQtLXoLpRr5tL68uUxirfqN2qaKxhjf1bDgRZcQQNwgdGzFJZofygoe",
  "key10": "4DFU4WX5hThrCC9Pw7aS55CsDvB2fS5k365Ts7jE9tEhVgM3PUNdArSr2Dr9SKfSzeFGgX5U46AwCZsvMVd1wunq",
  "key11": "4jxLrTj1nwrmZyJs9PfJegwTYQjRnpaKwtcKDM7Ho7heUWaYbMFgfF71Kpck2pDByEAVSvDiBxFW5S9zmBxTv6i5",
  "key12": "29tCteGoLVNCtomfkMV4kzGCF5ygTEK37KDzJeMjJgTEhG4hQAASVjZAXLXeaqDEkvyDeyTjr5p5SUL1Y7wwjjwG",
  "key13": "SxBKbeBnkEdmhverPzdHTgz8DXtJw5PHJ3ooVqub21p4PacErpF9FV5bFutXf9Pbbq9FcvW3Mk6W9cCjbZkngHK",
  "key14": "5tLiTszbDHDmb5CNkmQ1LfYrhgyh1zfich5wLn2jtfNasdp3AdyT6kS2PHcyRYXN1eH7iwXGceDCjQwDccvKGuii",
  "key15": "sgCbWSTovA13oTk6h9hCzJHEjAjseAEtYNQxvqvzZErMPGZVvkSnFXe2CirDB5A4WMJXVw3TiFH1sX1kMqsSXJc",
  "key16": "vjLLuBLmWKN2UKDnYx2nigDb1eXpAMzKzRYTkAp5R88yiHzQaPcaTKvKt5tgMhYwzqgf6AeaYU8SZug4tgAVKH1",
  "key17": "22LYWZ4PJXoh241Yn8jhFMe2KhnLEvMWu3kC83cGd8C2neujYywxdcohW2MpZZM8eanYtkRv5zXP5Y68KauTc5bw",
  "key18": "t4sH7Xjz6Xwo5ahArKYEdT7AwCdiKMhFrJyE6Mu6Q8sJ96QVpQyuZaJbuN9xnHQ2xbuPAHZezq5h7ZDeBw8kSQx",
  "key19": "2yud15DG7QKowYe74rCWb9ppsuJtoPoWfDHjj17zYdBP4vqkHCdGP6NJCuUeJAXcC6r5wdDhFswBhC3Xtdsg7UPx",
  "key20": "4SinBc2y64EtL1KaVbJ21M5V87HLVV7pz1Dtk3JTFJEJCAMboPmUozZ1jMs5XaZjW3MqoKbUNTvuZnMuJKN1ZXgQ",
  "key21": "4JuzK6v7jqkaPTFhjeBEecpoqfmAitZfdBd7BhfLNDv88s2exvzFAhFmtwKFgxLXZVK12wnZXqN7xdfs4oPdCAAC",
  "key22": "jkXWtDD7Duivv2QvyiGRK89vr8weZhgxK4Afrx7kDuyANspwpbfuoypgqJsTQsyWgjV5Cs5DGGLGxAzEiCfk9An",
  "key23": "31mM5Djm9C97RbQErxem4EQH5UESzVQmnLuFSTxHSLANswiLiwVgBsFUZXmnhgozABBw9C2LmCGPhekTzkW2AocL",
  "key24": "Lo5ZfjB6eDHSqAXyH6zdrWw8XmmhggjY9tp46gmWxY7b6euYvywVLNSFUgzoMdVTEWuvntxacvN93H8iDLWqGa2",
  "key25": "66jfaJPmFQTZgzKatCPU4Yqw1MudhnEmvJMiaCgGDPDdJEVKKdMGnuVxboArnpsp5DLQXp2ikqNypnQ9z3U4VGd",
  "key26": "3E5kG4dgEcYReya4aZ6aXu56UARnjSjAJoj1XHjrfNNqx3Se3dJy6b7wLucwthioryX2M27MhkdLBz5Agt6t87m",
  "key27": "3WYCHCktFJPuPSRmJf3WLdJ3tyErFBi1THKjksoexKdCC9uscEqnHvkFcdNRqrirSrZr7Gv9CaEB1cUweNbDaC52",
  "key28": "2cfoTKkcrMvxqeMqqsyzXcPmuj6FYnGDM4FUCnWXrt6FejdPVXA3hmarDLSKStDTPX2JB97ooroPpZuvaRkBaXX4",
  "key29": "4AmsPq9hgVBLD92G84s2yhfT5gGpKws8HMhDNm51Nx24tnMCBMSxr6VrjR69PXuYgKe5KkHZ2pcKAA13VfjAtTtp",
  "key30": "55wEwksNXaeSEkm9b22YLBU9xP3AihNkcQJm9gBuKGhKspwPf3hn3dFp3NtbteopZfmvZ3CQrU33Efo4tZxv5hGE",
  "key31": "4aEfPfiKoV2mnVCj2fjMkg1xqzZhhrUcje3VKpWUizAsBKDVkV1op67dfs5zRQvUYJfNZT7bQJfZg1jNjFuB8tYf",
  "key32": "3ya4fHxo4pYeZ68PkCtTjepqeXEBMwyh5qi2qaSzKtvRMiWYWFbshnxbCKCbhCdBJQ84Bo3zoJ3DrgXhmV8RATWz",
  "key33": "4eUEnTNYAkL1EGkZdQMbhQvkCkqcnCruQ5AtHdyMgnq3keRtPmQLy1riDb9fTHVQyBikKzcCXb6noXtqiXLAYves",
  "key34": "5uK6a2vZTLRsPDMF3wbRhn2zLZJPMpyQwj8zjWTTDAe1YnNzHpuLrZyRw3anU6SKMaPrhtS3WDYgmRGAYgzZMBW4",
  "key35": "21LAQKYHH1dLA95AVL4VBvLd1uavcs37UdGm2oKkKQbExS844txFngUwTMprgNACd7P2vV5KkWJzkYJqsncKzFnU",
  "key36": "5jbAReZD72ThyEGnKwybf1KMzN3XAE3BdY2X7BMkabS5P97Xm3chktqcyELYsX59aMUE4QRM8Ts7zHjWVFxNW1gc",
  "key37": "2AyBa5RT9LfxHxZxDZRjxQdEN1rcRWL8yvTeoDU7RKMLUmeAWaxvU5CBSWjz3HLZBHC2EEmTiVx1xQACUcuxJvDT",
  "key38": "2afQrWMbuV7G3948of6zFzXvJZaPNSyAycBkfGov6TfLwRdNJGQhczhcLTkKaiQBczd9FoRpH1Vrja1r3ZyjAog3",
  "key39": "3cZhCVsDzRjDjWxodotyWQ5CFdPL9RCwgQdtvvw92BfFD8tMMoFyHL4m4aWM1J4ydNC2cXnrWJX6asBfY2QR8UVY",
  "key40": "2NGNot8acDr8zRZiZ4yjc8LgbYp55wo62QqYbQKD2YWMRHneUa2rUwRryebn5fSwctcaw5poPLkCYrMg1ReyL9J9"
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
