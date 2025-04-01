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
    "1GNw2Vi7wwuK9saQNp6rVmvws1k5f2LYGWvRVnRipXTdKgMVMZhxU9LLobYymKeAa2jhcTkCRU3Gm7xfJvHp6Yc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SPCV6gzJnf4kyaHNep4iW1dACrSZVXDsDg1o5QJf9FTbyEqs7ba1pgi1jYkxT3SQG9zwiofLnuCqWPLmMM6gvwp",
  "key1": "LpAiXcaSq3jefoW5mChSMFXeaaVQabEi8xfTBbPqndkmPxqQJsM8GSdcLRZUoVaCWedbv1WFsWqBvXmbg3WXoPN",
  "key2": "58yFNusMWLcm59ze2hDxX5RqzDhLok6qLMPwWjHnTUbTGmZFFTBWyJSKmtXpnhwX5mARhprk62ffpYueArZkanRz",
  "key3": "5E73NaEPjKyfaSRBjP9rvhfXAjji8zSJMcdJWUWsKk1w7k5z3GsTpgHtAGaoZwHBKCjxjFmPfaXudk78MKKH6RNq",
  "key4": "41t7sepnXEQXuP2jPDdkVv1NmJmjtWKvwY1LwVKTkqrdaWPdCbWTn3vsnUKjWTkpahqCgeSosmr9hFSmGhBDvB3N",
  "key5": "3aeHayxz87cfPpPtN3Twg7hBxRt1vHExtrJQB8VUmweQt5dZ9Y4p6cd3F78zSdqxmoRSoXcXuUQkTCB9QAAC6ynJ",
  "key6": "37rsuUCYrkNHMb1R2FMxEguTYkB8paDY7zu9fSh8RC9QZF1BwK7UJmKstxcfQGASJabq4YhtqyQxKM6ngyTLshtw",
  "key7": "5N6gvpWVhY3xTizfK3ucMuDGjVCXQG8zJqyrfQdQ7h1wohR13UrYkc3vF3DBnrbSzhknyrRmpLj33UyoCrGqy2Te",
  "key8": "yepyi2ZcfAaf6cfiuq3pLoFJ8ir7TE92L1TbqgmDdMKFJXtm8VKrcBa3PoSxJsRzAESR7hC9WUyUcNPFChVgkuG",
  "key9": "2JYiAky8U5g1f4h4ZbTUi5F9bUWMfcB8uMZSAiBRFCtdUrbSDo9aYG71jXXec6xEwZm6XbL11zu323hmpAyeJTi9",
  "key10": "4RMfZxEhXDULtZDS93xSsRi8aTzho2rAQn9at1dywyHjA2faQ7dBTffK4kNnYQiQ96zQLNMBctjQ4NtcepMLqSt2",
  "key11": "3Ey7KEwd7rkTb2Jc6ckkcboAmg4U9XxC9BdFyP8FR2szreqdSsGQvsVPb8gQtXQpNLiEfH6712kScacMkfBmRMyb",
  "key12": "5u9KefA9JcobGiu2YWck9pk8F6NJmfNXhofVmb2zBav6GVcwrjfoAcv2acDYvfmJAD4VBjCRttaA36p8oiukh8Es",
  "key13": "556zzJDXuDJsSFauFG57QGii4w3kXNAhq2GDVFkNinoJpcxwynQFfRjHFrHZRpQz7zuwpmrHys3bDHfqaiAb8ACc",
  "key14": "xawmbmLyZdKiPCiS6ALMNFD4n7R3M6BjriMHgNUV4Nh9DUv8SABB5vANFdK4NvZ87tzN6spH1ZkXDMrWdRd7j4x",
  "key15": "3BLktspoD3YhU35g4q8NigwYxaDfY362Bo2hcVoLHx8GKLhb6H7PrjoaXuo8t6hfg7UoRysVuivZwjBJQiJusjdK",
  "key16": "3zsGkcR22SZFTYompi9SocXHoCiXriMVJz9CSZeDpkyZxsjFREaE2GE451CX8STSoPGfQ9DQ8ar9CNq9PQFw84tj",
  "key17": "27HGC9C3bZjZH181eoUW5tDxuCQJNq5CABgybY8pCgm4AJzZQba4LP9HxhpGmfbuRNvAiVXctfrtZWpbpRfFhNQz",
  "key18": "2WHUpcCyeerwQoSD4ZNbF7EWa7aFKVxQ9s4AoLS4Nw43Ut3wbAiq2PigB5KwgVxNPziNH1Gr4acMEN1JR5FZXrJ6",
  "key19": "7c67g6QQFrP4cZpiHtRBU1DfpyCsq88JjvBQFdgFJXpmb8L72285bA8VjwLyzHZfq7Tz3YGZcTWfpardyhnc7CS",
  "key20": "3dm7ChjiV2hLxjcuwrN5K7yERDxra5hYr7tQQTUaR88QnTkT8SghA9XYMG8Gb8G5bEDVWZKKBNWQpF6r3mJHhDuC",
  "key21": "55TmTL7uEM4j25xgmrYHYiaUfzsy4UiGjDWsDQN9AAbASSJUJnAssB7fEUaRJyxMjBtnSYnSzKt8szHXHQLJGMc6",
  "key22": "5QpT77WMdB5U2yjGgJXqtiYZjRDLEHnEYfxpmm3DbV9RJpJz3Vb3kTy39BKj8kA4ykHhCJgrtb9i3jGnuvzou8so",
  "key23": "2x1Gny2y9ZBYRLYpcb86cdtCDccwc49tusMVzHZWdHTibDgCLCbFcPTvLk1BTf4HG48a2xGxHRBt48zxD6TudnJP",
  "key24": "5vTpZdPT5Hox22iTSnYPFck6KRU5h8u2Cei4zZruvR1y3yHc5VfxWn8UVr5AFwDVzD1LaZZUqQUSPW1znP3KMS8L",
  "key25": "3ybrujRmpif5pXgv1V4XNuyAr2BpGuWjFcHdqLCQzM4QMPogJhf9n5beGJJ1mWgGyyTAC5r7a64anUcjSEXNWgVX",
  "key26": "5QmJrAZssxxa59mo4hNmnJiKG44wCvdK7nHPYWWcr5dpZhnosrdozecXnpgiGnsuJhhLVCKvRdDA8d5AAjs5zeAu",
  "key27": "4B6zPbSA81ZVDMYMQ8Zhavnkz8Eeyns9GSDKzetGube6AGHjDFcJjturJQ3uapuhNHghdUThSzY5ETwxJS8m7nUK",
  "key28": "5vzwYw1s94Eb4UDTQnHZVqTDqn3JuoJTa2P1dUN3oMafHVZ7MLT5mRKiVGGHTX87dDF2ycUwwd7zpUr4bWC1Kn3f",
  "key29": "5B1baBsC8iaEC1qfjiBhzRATCrmCa7nVkR5RKfzSCewkhaXBAcMxLHEYKqJfPawFqgqguuq54UMb2WUMZ9F4suFR",
  "key30": "5p2N8wdUDEmjRZrrpzuSJKFp942PyT4RyMfGcSUp2QqszQXTZooaVobKtnZeSe4p26vJ6LhDh19bJB2KaQvSHceV",
  "key31": "34GZNPdof8pJnPqiXW5cNdfBZffU5XhQPcfpzbngHA7vcMdBG4fh3V1gTvCEYcVW6NVF1uxsLbqSVQHrVbe3Cjxc",
  "key32": "2ZUFDQ2nu7yXW1gJRXmqbBLKFtSRr2TwfcCvN64DwTmMWgF2SzkESa76HfP5QQuoKU15EygxBH6Po2XBrFQYqcYC",
  "key33": "3rP1pCkSUYfSthL6KiAtcHXjEBPmVFV6QoRvocGDvw5qFNFafgdvrTth21EPxP3Cuw51MpEjrUSNssWqKffXhC29",
  "key34": "GmcyyAPTpgpcYEqQjMHh5LJaGm9idUYPycCUFFjRHbYLQFHt684yeLujnRJ8o9UMtZdKph6yYFbAgYeNT51No3f",
  "key35": "2kq9MTJfg9oMtWU8kfKaEVSLbW8zXhDBvRXJwTZbPrXxSb3uFaL9FReN8BtVigHxSKXx1Zn4Uuqkp424ooVMeu6h",
  "key36": "CbTnDk3A6L2sjbArxQu2dEwAjNxKfCEKzyFf5rfRMHMLtYPqYnV9J71uPNheyKpLmAimdLH5tv6Y3suEPA84VW5",
  "key37": "4CmdA7fKLxyKF38rxpKw17KJhStB6dA1qFohYBhbz8yxtP5TCdahhZDu1SSNzCsb9QPbk9mBjLsrZL9qiA6XavP",
  "key38": "c9JNcrpEzio5uptDnYVQWfbNuYc8X21vVZNdtS8coPtc5uXwcZQGGUYDRvbossLZpaQsTLLRbgtc5qMByVVaZcU",
  "key39": "62kSRtN2FAchiZeHTpf3gGnUarisduqESL9uBB1Ceqjxtk9YbE95MhCuYuBuRJv2RbdkixgnQ7cG97x9skuHgFrs",
  "key40": "GsXJMGDiePEZBYx4ikJzi6GYZPERtCYBJigQHsFz2NTqfZXqPtfKbXH1yt4mGdTXtSBXLoDzTGsaEdjQzmjSsKP",
  "key41": "4ze5iuLcYkgK54BGga6LfdGWKCQyyWngQDZoL6bZJPik62iiK193vBBbGtCepqJNcRLJhLyWJJTnjDm1bvyTRhEt",
  "key42": "3zVae2iBxou72TQ6ckjUCUdZYTMvzdmgp74BNzPgBixL3fXpmsXVWuN7EMXH3iEajCZhwwHuz4yDuKqvVwayCHhJ",
  "key43": "4KosuHzrw9253C3Z5KbFYeYfHD5Ae5VASZShjdv8rxRbLJaQz6Ltd8bZxvu8VmTM33fwWBBSk9HJ9pRXF3wB296s",
  "key44": "24fGiC22ppdK28pUjYVej9S96Ca72mGNRrkfY4t7AAmVzcehE3bJvheoFnnMmucWtBUEsWvUjYMc4UzuVfmv8zXr"
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
