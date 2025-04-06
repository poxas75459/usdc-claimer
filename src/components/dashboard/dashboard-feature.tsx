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
    "32WHgGGeyCjzoi91mHM16CNr4rBuvEv9czCqAdzSFY6QhyY8uan1uBUK8gedLW9pf6HFRj4PddKdqBYKqHpQjbj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mjwzZTSxnriWWjbnDd4BxF8rY6KiKhSBiLyukBTutYwAZ5xQNtNWbmKx69GH6sHNA8gMArhBFrJdDaSoTExA9YT",
  "key1": "4QoSow2z1D8LPS1YTMxu2QSRJuWRBk6pV1vhW43hAtidMUJHjYEgyVqWSh3ifiatynEGTuyBE5273RcShct7mgfW",
  "key2": "3gfF3jRw56ey92wDC41ZS8T26wGfWGN22MdroeZCh2kV6nYdZoyDSQwkCn9EZ9AehNo2oB3vDxMXpf6XsNWLpeJq",
  "key3": "3d1Tx9ePR2ryD8A19rNygvfczycjqMSpP7dA5abEfSaeGWEjisVpZh2dLtJgmgJvtYuNU8AcvYj2pHYT6U2F5VNd",
  "key4": "QthS5yVJKU38sRq2wcwCf2vhFFECGmErWMyYTBfbxoGvNwDpY3coUgmP6ecEMUo4URVQKPmaiKyt4HctzPoCCfS",
  "key5": "21HyWymbjt1UytutB8BZ9UF5Sno8JFgKEeSyNZibZeHUrswyPbEgWTxVEc9mL6gZz3sqJ2V6DtARbLuM62yXQ5D7",
  "key6": "PAyTMGzZRJVMTgpEFFgT1vnXyCHR8Pdyth43EusKekn2hiKGux6fnJctBKvh4VkrVRAYufMSVrjEr5VqnJwNn3C",
  "key7": "3ffypNaEcr3fpHjsvZTgidzirEVthUbAyGi3JkdoToPLmMdXZ8FhkGa7Fs1XnV8GCZWY9RRMwUiQS7ivWUxCdAZj",
  "key8": "2fAxGZYPwvvwTGuHhKCqYw7PVnwuNGAxNGmX8R3wB7o39BFwT1GHwt7114ZxdmyguP5gAquVi35d8LCsqXYAtEHX",
  "key9": "44mz45KdaocmejpjAeCz8BKrHwiWVPxaJL7RA9kgeWUdc4vQEiCgzuAi5U31WdFXXEYBvEBhnP2aNnRZPd3iYJhs",
  "key10": "23yrghgasMNbq6SkhwHhVBn2mscjmpGsQenXxjv7QpKpumnhCAvRqXgVaZY4eRmqR9fwecQW5QE5tE7ChGJBKEBi",
  "key11": "5Zb2VxCDXXLvjQmc6D5JbzbjA4oyoh9rNWts7GmVUvCu2NcfK95k3jp1xFGQc62vMgLRY6BQtJ8zQNgJ4aHPse4o",
  "key12": "46D6mfUMEPayuQQHxjH6d1kbD3oeiDmP7vnhpXynMc1JvtbNJ91PnjmUAujiN6FEm1H2V94cc1dZGcdNL5DPbsC5",
  "key13": "3CmQwcW6EXSa6enDPrT26PFhDjmt2sKJyAsN4SEUDkDSvdxPe3mN3YApWXsLNgWBu6dG21QdocgXQboYXDJ3xcia",
  "key14": "3VauEcASKq9UFZuCGeDtS7wryxSdDsKkNNrXD9M8SCaMk628ggFogFakvUvteQgEo6L3s3ycFn3ArbxZEQWuq8hp",
  "key15": "4zYYgGsHA8isBRphpFwtctRDwvjKbYXGzrdgZKyxcyK9ZDLJWhqG6YQvoWqo4FiheRzzL97mRMqdcpKHTpC2AxfZ",
  "key16": "34kFF7zZMiKcBSU9HuL2f5oNtkuvjFYTd6BSMqT2ZhiLrtEXkVugkwyAHuTJnGA8c7ecnQewsqadtVJzZqPdPTBT",
  "key17": "QzFZE9HD2YPoZa4Mvy4j5nAYPg5ju5Wfdgt4wMre8TEJ1avphJMVZqgV1GdqnnzvYfC37Je5GD1Cd2rRbJhmm9m",
  "key18": "5YSiZEbCDAAUcWRqyPcrCGsv7Uj2g24QJwUC8PaYQMGjKNFvhs8szXqAV4sv1gGbuLNKcxrUmhWudgut3ScuSW9i",
  "key19": "2UVq2BPSBb6JeXwwaPbgd4a8zcKpS55bedHzhBkJMdgdYbrwbFuSRjs4m6Bd4ucYwBfLRA848co4VEc2uNU8LQp8",
  "key20": "5VGdcznWTMejuapdirLyhe7GKY21bj768xXwNSBot32t6FhcVBYqC2sAXfEdfULjqHTSQ2HDzNWNLEQT1p8mVUWZ",
  "key21": "3fcXdqaCUvSd7KRhuTRAzHTUYqWn1gygS2vYEfKNNN1aSYjdLCwkQVYH39udgChw7hCznoejKmQtrt1jmun198t9",
  "key22": "pyhRTgWwrRh46kUw5WZaWxgmhtkQMAga2wcpJH5U9QsQeNMLWSphBnRhZ8XxoTttQT65cr3uDwTDttVsvmfDm5X",
  "key23": "4Vt87EKFUCtopenmnPv9G3QU5BQK7uopmyqGd8QZBYnE3sN4FjY2FnFpL7cmxdDYed4tZq2n1DtDSLdJDe6RfvUD",
  "key24": "5amjFM4yLmbVd8gaia5VT7JDzoGvMZvjTq4m6eu38j9ts1TavbvYkXvLCUqh2d9BsxYatdnb53gCp9dZVFV5SqVd",
  "key25": "5BK5TWFFWXvJKe2wFmWm9gk9Rc7vcvSTPBED6uNRaF26kQFYfCoLyqbhAVEaMpGGZxB1LpbHPwYnAeu9o6bjkkhz",
  "key26": "4oC736Phqy7ffhJ1wYKVsT94UfHj1yommUJ3QWNHJLDKSSnEfkYQHqW2q54fEeW13Tjr7n7XSBr2TJcmtwvz7TjV",
  "key27": "3gMZwme3DMWqWhTxH4uenpvUo2CB7eTTHKVmLjSxUz1vjGabygZMnNhzEEtZj17iRZbWpdpRLqq2bCSB7qkptsj9",
  "key28": "2ri7QiUmZu48jW4hCeivaMM6jxjxBsQW1mq9jn4hHQMJxPNyk27vBNUpY1g927ijfjJtdaZ1affcvQErHsLCzTnK",
  "key29": "22df2CZz3ZwkfwsuWHPkh789mBHdAWfPzMPeWuotcohgHZ7VSshmcPqoF3rCm7fXuyQ3PndiJHpUDx5ZQmiTbSmZ",
  "key30": "q5dKfj4uvVgNB7SNUTJZkJR4Z6wQwp1eYKcprEBdnxaL4ATq8L8x7DyFwckCMHAD8R34qA8b7yvYLSWCsrMqojF",
  "key31": "35r3UrcM5MLnbgzUncgyHThxgDG2bcWAUhZ1VRuTdBfVPW6SsVxkRAZpEaq2tSL2kBx6MfjrdA4rTjFw7L2jg1oN",
  "key32": "443muVcfbHFVBo16mcoDZBFWCo7WBHBrCcAghdD2okj8qd7pFGGsrZBodtEA9epUMBEmYUfwC4wVxSzdzFCgtEfw",
  "key33": "5zt3ux3wP9VduYsK4q1XjJ8FbQiKFgfBwMx13wAENYGr2WHMrEk1xwpMu2tsBke1BJmMMKvnCCGxy99VG9eWN3xF",
  "key34": "28BUCeJy7GQQxHsnmqbQuqjN4xs5zzeBE67atvPTCpAs3yVthBDvG7HGSwTebuG64pnKHx7fmAt5ZWBFN2qJ2iY6",
  "key35": "2suaYYNiVVEcfUNGqhqdYZrwx29ULNtYPHPZobThytWK7Lh767Pr2cKh2iaVsRedbm7dEC1gxYLKoKSTtWcXZSon",
  "key36": "2nD2hqmtsauxfGjxLMFfEz4qkcpUL94rxBbDRq1oG8fzF3kcnkbv46Fi8qEZv4pSrvRcajy5Av8EWFVNAjaoTjjN",
  "key37": "25uL2tGL7FetxCe8vWRXYCCgNkXAWvBhQBmnCujUNw17dFCeQdnpx2bNhW52MaRNnoVxZXXiM3rF6m5YmnrhwdxS",
  "key38": "3psFTHf1stEEdjwbdtS5oo9zRhUL9WcTy2SEGMfvToPWZyVRobuwQPhF7nCZthQ5wUz3nAWFx3vgn63tbPsbidCv",
  "key39": "52WV8BaJYVfjAEEBoEWAFc9m2dayHD4qj6nbXynEZQnmgFu8G914JMXMQh7jCjcVqX5U17Fga33RgoyVifdbFg7b",
  "key40": "XM8sc6nZWpFa2JTjTeMfamzFnZjwRTqDmiegamAzn9nf6HY4HrhrnvZoZsjyg1J2Lrg8KiSssfXqn4Fp8rUYhhG",
  "key41": "53NjeKc7P2LNfiReBTzwCfKq3Tq8ouxJbm9yHnAtH1U6rZbxvBCmySSHfbRUpNDsRq1uyUShC3p9wQNPG8qHFFp7",
  "key42": "3oKzfLmH1A7Dj2ngnLPCLZouBaX2Cq6axFwEKCSL8tXQXaeQP1Qfr439RKh7y7x8H1dc6q9c7rveeizeMeFmE6gN",
  "key43": "38PTy9onpx7XHK5znCN5JZbqXL4C95gERCSiCHYXTS84wRB4VvANNJNigTHRHMGyuozd2EGekZwBxUEnaxaxRgDg",
  "key44": "3Jt27SwhghHfv5KExTmyL3LSbcZT9E6QQRa7ixWi6figmGKxLnswGKYfcD3u1wx1DsatRE3BxKtUUdyTzf7gkXpc"
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
