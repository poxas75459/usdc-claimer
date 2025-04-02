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
    "359bkQA2dFYwUKLW7MzLSZtMSuCai5i2TwJbGMHhT5HcQutALYSrXb7nPMcbuaHo9nWHrK6sNiAMDCtRuTqkw9A4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uoYgEQtbk8K52XrThMAd4gFfTcGFoNLWgVFsGMLDian6ZswDG7TFFMYSumc6GvqYxKXsRtJbuib8mWNZyWuLHTP",
  "key1": "2wa4xdhsnrW9o18ThZYrwbXUkxXQkm1GVLKMgtp12B4fPzoymggdiZLkmkVB3gpUMTUVA92DrvxqQpwZ1TGggbYm",
  "key2": "2mqXuCUgKqGXzUxxzRCuMhhjHK4LpUV9pWPjJ6xaWtmX7Wwp89BvyyuCJ1qS3N8Aw4Y9EeRJfRo7oxPB988QYPjx",
  "key3": "59nTuVgWUpXb7NUkNtdc5297kVmW8BuaUnm2dSAD4YxWD8zej5fKXVyRQhpgRjKt9DZMAkT2ChgaBvBLHfmoqajQ",
  "key4": "61qVJBbUCwTVYqbgzaksoFx34LFVjGDEkRSfMjb7sBftqRSpPxfzKxm8XWsJWzgpyu4UiYqMq1mepMgf13djwCqk",
  "key5": "2s4JFr4oMiq4qyjVttYLRxvw2viVu56K7jRFMk5WqL78v2tpRKY8EqwLpMCvroXsYbtrTBKExLxebUirn9HWH1QL",
  "key6": "5no6syX6XHtUQyUpsnwU73E4wWk4CiqvUBN1kuYMKvCw7fNBrkPF2SfLDKBtAgZby42aJmLaEUtKwfv8Pa5UfnFH",
  "key7": "3fvqxD9wUoqQVbaGrcGQugM7oAvEAAu4e8ZupFXQmQiFkM2oSepo12f7qrsS3BjJagesmJB5xLrstmqD4EgEvFcY",
  "key8": "29822T5YsksSk6X1ocVuyDdPfipojdKtQjZiTvkMrWvEFiCLekgvKgGSp2NtdG29jQrmZY2tt9zXCaYibKHBYwWN",
  "key9": "B6SSWFJAZQEjxZcH8oeWRFQNnxsMQTKhdQtv6vQ4jQJ68VPLgfrjZA3GkoeTZDfYhBMdfKjLJ492DvETLgfBkAh",
  "key10": "23posGfFPoaA95sGdsRYQ2H5uBr8TcJfp1KHrytTRcU1zuBiEC5pcPWGd4TqosRiwfAJSJFQi3mVfy7zk96jFzju",
  "key11": "2QE39uhbh9N2hSUtAeVnWta9VZLnJb8dX6tEmdeKF7maQYb19Y5e5jJSYp4QBghwvbRp3rnLaUxmmzbEkRKaW4fK",
  "key12": "4EggF4eT5SzpkeqY1J8pNKWA4QBLUAbyFFLWJUFQWZt5vfBWQ8yWVREP9pkCtLbxAR4fezUfkp2CF9au3dHrZd54",
  "key13": "2VMT2ScY4jAiUX9B1zY6XCKcFS3D6QhxKwqFp7U1BvdLRoVvGff2XGgHSodRerZKBsBrvWGnMPeQ5uktrxsufUed",
  "key14": "6Z1uyZGo9nrfctHrCnJDag9Qk3iCT1H6tY2U5PWbk2ciFvqMuxc1QAPpuE97GNtrMLTWYix3LpwYVSqxng3zHG7",
  "key15": "2vmi5qxMr9qZotnQvE9BvrXWoaQb8qMUrjLxZbQLWG8UiwVq3fzmF3qghvkiYz3C1WVtcNdVMpUwFsj9vS4T3uRP",
  "key16": "4JqMGv98kwJq2gisCWw4FZXtsbhtxcAb5UFYZcRuo3qPW7tBrfWGpeCzYtpYEZfWGSEu3Ndiaf8KPe5pk7QzR3ne",
  "key17": "2oRmpvRnb93eVAEvZVmEEgBohJB6bG1iJJW3TctKK8knKw9NYf4gCt2rDEvRPTXPvBb88uV6YjL1RMdYwSG3uf5",
  "key18": "3DmsaBLGqGyhUABpHmywWQSxvQHfbDLP8XNjLuXfpko8phrgQ3ytEKgyyWEcJVH6F7otswAd3ua6e9nJaDyQVJhu",
  "key19": "2wW8mgZMmtLhBy6Pgtt7qdbApyf7CDE85GZrN5frkGK53jXZu92vBuhbbvao9dhriXEqptnsvBeztAKAW2QoAkJQ",
  "key20": "3jnayi5o9qyXycgrud5wJvE2CTNpxHD9WfDwuDemT8C52FGcofLCgAFuFW5u6oVESYkJC7BdncR7SwrKxGpqDeNf",
  "key21": "2k4ScxG9a6adpKx74avX1zT46ByynTSMHqiEg6aT29ACFddZ5Ze5rKAEvJrZLirnyHbLeJQnJdgHkS8gNzimq8iv",
  "key22": "4ZU9YKNdDxTMvYMG3Dfmn9TvXGgDJHTqAdR7th3Q2WnPbKo7xXBmvk571NNLfRxvgSxEwGKFxggzV6s9M7uf6Ekb",
  "key23": "yM7nWtijCyenGpAJSGp3MLYrF61hdMR82GPWgu7cCRdzqHjSWSV8h9yRV7kPRwQoaG9YqbDsMd57VVc7Pde946f",
  "key24": "3D3bCkvPaFqJQVY24KzMt8r7fJJSidSxzkuKLYt4oUzUrj265HfR14QcUJfSZ86xzfsJGaN5DFYa9s3HoYuBB8vk",
  "key25": "4pxt7bhqLcaZtAD1ZPwxUFhWBv5SkgrCqVSVTASogUYYoyQN2y7WdahvdP9SLJrZD5ZTGPbDPRZcKQFqKzr8D9p6",
  "key26": "5kgZwgvHKStAQjk6AWciW88A4ihA6wC1m5zVkUdFg2TC6UJJFqAZt7fTcGLNsDoeoS83cZDp31YbiaDpQ8cpr8nn",
  "key27": "64sQkdmunWgiFdy4B3WGL2ohgrXd6Svdh5H1587VPXmzKAGVycH6cxNSQmoEc6t32NfNRGpyd15NYKR12rWLznfw",
  "key28": "5CX14KR1ijXsFTZtdH9KtxJgFuhUrYTFYshYVnGtSsCxo2RHN3F91TiWRb4nPZNnqZ3NqMKt6ZGyuErCHubWPJte",
  "key29": "5ZByXtT3CYN97b64JWp5SgxoaBysQSvh2SCEbKjTHP2JwCnYTTt4o8ZW4ccGHDUPB6XXFByXQbR2MHMbbWC9bEoa",
  "key30": "qJX9vhXQhJabBAKt61UjAeJEo1p9KsPSAxyBor5L64z6bMZTtGmqiU4C4FpLvfJHrc67FsqfwU52JfMokacyuos",
  "key31": "5ARMMdQ32yzDDLDMYbiAA7eZoCdb9QVK91RTorx6Pp2zbKNTRGgPyFMvmwmg32XAD76QZc2iAPWuyJkX3KvB9T1e",
  "key32": "3GnAuxWPaTZLSskRCywP48JXMADgUde64Dg2DNgqnUR6ihJdfvJvA3yDpkCd931xF64qj2rirTPpf5nE3uefgwd2",
  "key33": "9eKYiRiwyGjVs8MiBKmMLNBK5z4zwg7sasFj9Xb63bNShMTLgzR6KGS9RWRvjHXLwcZnz3AJEdepf5wzTg96A17",
  "key34": "5wVBUMWFhSEQ7sdi8DTNBANewqsNmwPRaqrcXmSEm5wsNFTe1F7CELKHc9Q2DKr3QKL9amNm8wCpm5UNtWCgc3Xm",
  "key35": "4sxHdNEpYkebw9TNKoEkU8Wd9LeZMdJmRz4fXC1gmCTmNAv7AP1p83CawEbsTdr5JV5vAwiYstt6trCiduu53JS5",
  "key36": "467fsRRZsf94kUJYLVrTrhJBA5utSf3T2yiLk6xYTirzdJRBzL3qN6qUWd7pvbeT3ZPE48CfoLcTMfW8QcSaGrpg",
  "key37": "4LjBQGz8PoPEJtKEnM6Wcz8Gv4YHuvma9F1TzHsibC93K1wukhaTEecvcvdgsYXTPdjhVb3iYx1JqeD114eP5DKg",
  "key38": "2LEPycAQyFT5vtYVoQmm4BkDg38RnohRMuAYDFrvEWDwv8hoNgJj6am8T3GFoaQBTJ4hVg5bTNpCowA3bqbgAfYB",
  "key39": "5g3nFS2icM5ATmjxGCtWZJptFHcDnCRqTkksFRmKEEpHagRq9ixScAgdU7Wu3vLftRKtAdAyWV2qzNoTsWRVyYDG",
  "key40": "4gzC91pfqYMZE2p1Tt3P8aQ33SMfey6b3TZePVJVLBhh2XjnY8qvPE16gRquNyZeVwGtp6auxcPdimGwfsX2wdhS",
  "key41": "UctiULaV1R7uzvySEbrZ8mwJnNFR7vz43x5UDkVJczDVbooZPZUj2p6MciuswePJwfohgbdpeYFc3QdFDsawtuT",
  "key42": "2UCxs45TPPGfXzWarxbzGnacruR71vVaiVNuRzD82AcaDcsQREH5W24L9aJA6pXVUXwHNvbW87iRZzvbQubLQH4b",
  "key43": "3m5EXKHzZ9QVfLFjtgRWJb4VYs6T6assp6W5QF1jdeYScuAk8QxQfDXkzcbYtEoDKeMYGqun9Pa9PipyV9zj8scZ",
  "key44": "2ut7KmvGBPy2rQuakrdXEeyP7VL4f9J8rTSnXtbydgVdm8pHmhRqhNajUzfd9GGYpapvW14eud2bkmwYA9SYC7F7",
  "key45": "2dQ8ixHG1Y1idSVB3aCD7G1znYxzAgXHkBMJQwNRLEi8NxkQG5CYaUpvyWyQivfjL3mrhiVsRvF22WSw9JGgKPYe",
  "key46": "5JZjNqYnQ5Q8qqfhthHR5EPmU6yMmzqx9WLD1Bk2qaDom9VMpncrKozq9bNbbiXNDoH1Ra93tYy1TFhJkoQ1hEaF"
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
