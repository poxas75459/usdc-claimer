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
    "4CG95xsGDuzuVxqddcoGJbz6eL2sXJ383CJi6CBibVaxGvbaL1eCgvCBbCJzsxKM6gEYMsjdqnVHafcs36mCZD4V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5gF1Rp7tZMnmHQkYz4M2syr3pykBhgyJCkHadUqZNpVr4xVhQvVXsq7nHCuZPp3ynFVAQYyDhXwC4HwMQh2ar1od",
  "key1": "5ouPZ2f4vrhwUa23P25oHeLcXqwZhh1uVdNvUcu8ERgdML1WzRWneyxirTEV3YBMt5gr8Qc8bzAJjLrNJGQt3xbS",
  "key2": "3MPCuwwa8kWEJnamPaGeFhuwe7mihjyePWYKy13Fn4PCN4KPac6mA6x6DkH6cbhjyNRTCaJFW2JGJNxMypL34fqE",
  "key3": "3fx2CxqJUked1TTJryGDUGzjURJJyK7vaBLbWuhsdq37BgztL3Da97y2VKzFoXKp9GbpqzC2k6eLuDNp3Z3aJ7hk",
  "key4": "5nZ5PDFr3rVqWKi8xQaHnJUxCqSbWqWLJpUgqg2WdHY67UJaiehBfEn8gFiBHcBsAjpwGVH96Z5oYNW4JAR6UPGy",
  "key5": "5TQaet9v7G2riHcxvh1GiBgnUBRyLdgY4nis2D9oBRJVyUGnkASggWQANBaDJG6hBzNrPuSqt8RQsvJLQpVjoHmu",
  "key6": "2AArVmaQX12AKkXicVTv5eQdrcqRKFaPpuzuJvfyjd9NRyecP9AyDYvTQs6yoV8txhFn3Yn9HNhMkFqPjbTFPkzv",
  "key7": "2DbBsQvYSKLss8dL8UQAHrEmXygfwBFvGWDAVNo5yZ3WnsMGiihL7uLpHqQEZMFpEWeEC66eEut7BgrGSXCJdYK7",
  "key8": "3DEFTkA9p3SxLnLTw4QACYzMqJz5hWjtoNSSJ1d33Trh1HEPqyyU6mzF7SgtVQ1RQPjc4pcWJRn7nTWdTruR5XM5",
  "key9": "2zAZjnHREZexvsY9yELdEBtahemfMZtgS4asXzoBGaj4B73mF9McHqzMz59Q6Axk6dCC4RBzNwueEAx1itqQG6LM",
  "key10": "5dG3yhuXn4y5rAZp7WzQB5Ns4LH2ifHgXd9P5hY3aoDJHa45voWStfFAAjek6M7XepyTf5SWPzKY242rVn4ATKSW",
  "key11": "5nfmqo8tQkMoWz8DvRTe6roQsWW1Eeq2yingCQkWySTvnvvQyZ5qPM7NsBosmQcEfkgMS5X72CgSeqbzCDJfvQBe",
  "key12": "3JE7hF8sj9a4rgn1PiXLAD98Aw1JgN6DjFTgFVfkkWuEqHbKcZRKu2uH3C3KN97JRcoq4JaVpWkWggbdJoaYDkQA",
  "key13": "3RDe7MiCSbuHLiygeQ5Y9dKSfTAjiQfm9nhGmVdJjrR6nM25f9dWmvWCsmKXRqCs38vue2eEb5SCGStRra5xkVZj",
  "key14": "5AxaQ6jrucKTDh9ysAL9n2fCZWAK2Snufg3WsYbdjsVaFqirRpvTsXU91Wf5wpB4ZX42DhR9xVek5jnQEcxExWPk",
  "key15": "3b8N9VwZhyibAgJ4btqu459w7gbvN5ZbWNcYSZUs91dH3sEvyvQiZUTVTMo9Nzk3gYcb8DKeCVDJBKdat2gavbau",
  "key16": "Po4giSpxv7Q7bEDHvfZwZMxUC4W3xyEyzra6YSV9b95pzqYdoLpQDRmg1mW7F2eujpk8Tcrq7MbEHv9sNTMLThs",
  "key17": "4ccw6MdX6p4kaFd7qwM7cj4jTPn6qBDBGwNHfHkUTWERVo2MoeLXw1L1km91EYBCLLVekC2rhEVNd218Xjo3h7MR",
  "key18": "3RDRCmNeqTzj1YzmJaaq3aX6VnfbDN9dy6qHVCMH5sqkspA7r9aL12DVFpu28MqoA8UEu71ExitHuLcpTyoR8KoT",
  "key19": "5yDdgRzPWKtZcLjGr5WJnLCQv7iboUQEU7hQfLDYebCB44YLmQ96tUtsV7QzfBtRKDnffq4GGqEoS2JYVNvGt1gk",
  "key20": "5AkeVwDrAxJ1aRVpPYKSiyYgfXrBzbZEwtBy3V5MAoBHi9287gTR1bejEiKPXxqcHLSXSzrqewdEAzvXZVPHHwqU",
  "key21": "4FWDFKiSSizBHE2iFiixZDXscrk89vWcnsKAGBrXW8ycKXg4AcYvfvtRZAJ5HfFKrn88C59havXPgzk9gG5x7mpz",
  "key22": "4XggxLgWmWLLSG4KEoBLPB8qmw8HsW7JUZzZU9p7GMTa5HsEyhL5rCS2GFR3gmnxEpkJRjPpDuM8xEeQXBA5jWp7",
  "key23": "4yzVdVD8ihkoHAE1esRxLhCq8n66V3QXHgD5bKZwQXJGBLz4Y6AEMY1hWQCfXFWgzp1DXZW3xtWFuco5zRAKPNg9",
  "key24": "3JhdYGhZ9YjUjPH5GeJzzRzGvtzxUyoqwK64pqUBg7BudZdZ1KdcV32NT8CTa2PmRtoyWosRc8vjoT2CHiXhKh2L",
  "key25": "wcy5eJvzYYDQTXE5wbiXGDXapKcQNKZtMzYLYe36NYsZBhMoaCNJK8c2THd2Euky8ggeyeuv7H14uNNbVesVjyd",
  "key26": "21zJepftXruqvE6SnhiF1BZC6PPJM9xTmzp7xQTgkF2XBpPDyQUvupNi2MvT9jRVmX8bRYU1cTkhUfxQuFyPjDVw",
  "key27": "2mwivtYiJdMVdtVyfUnMievpFRGTTbFhB79oq7Qb76279PW7uaqsHHayrHdqw19Vr9WWpcUgYq6f9iNNzwduzaU8",
  "key28": "5rN4KuP49uhcX4MxSFxzhAQdDkFwooVqxMFCscSpuppcpxXGPTUdqHeGaL3pYP5BWghzHH8nvHADKcWyC9AUMD76",
  "key29": "3wQZFSZpPrGqToJ9JBnnPB5eBHZF1BXfUEwBA37g6F2Fu9FPPk5CF2nN14teva7YLv2CPQgMqvHbSY83UsCqn3BK",
  "key30": "2YggwQkXhmhJK8e6YgsHXQVo9kRyYNeyM3EjNbe9WFZDJNfQZwB9ykeuRDvTREbKqyjTJdZKK57fEkz2tJuHLNu5",
  "key31": "2f6dTVFuSshRqoFJExn6FPH7ACCRKKnBNfkJVHCRusWjbAJXk2VYdTe9Xne1TarxEVhKcLYwG3DX5sBULt31Fj8n",
  "key32": "35LyHw5ZdWtYb6to8C4swKtkSv5ma9B8muH1A9uN4NT7LxJ6SJJzuzppeRe88UJSxJQjPxxzUV9AEKMRHbedeRn6",
  "key33": "tpXT4jBJ7Mwrm64RdxkduGoi2nNmfuDcFWdBkFc1BvSoMo9Cn5Xso2BhXghuAr53WXPXmomYSJ5M79fDDhMbPqY",
  "key34": "5TQAfBjFQZcrMv2fzHqR7rdGK6NwX7556SwG1Jrow6j1i1PNXwzq3W8wBNPKnSJmeoDsm3HppAD8BoBy4PjpSriE",
  "key35": "427u4eNDmYsuYkPB5kGGErqEkHcU7sqKd8FnBA4SK3E5XhQUsZxqQTYeNBzwaAVYC1aoYiy5nqf9JRaGcZ8TDSyY",
  "key36": "4BYxbwwAbWghKuf94wpD4gHBx6fh9arwro8F78hvfsofZVNFsxykxL8Mw6eFH51LbeMSyW3U2EzaCgoqvaByAnde",
  "key37": "4aG4jfYFfty1QiGgH6EHy7fZM5pCgAKN6voLnoXM8NspnvczSNyBdqJiaq1rQZiwaxDhbXBMdz9ng6Gw36N27iS8",
  "key38": "5A6DCapcemi7ZHzLXzNnQBqSxi839L7Z9PgDZGycipwdbcwcT9Xsy8qAhpE1fekjmBwXqYRPAuHQqg96uDQGrR2y"
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
