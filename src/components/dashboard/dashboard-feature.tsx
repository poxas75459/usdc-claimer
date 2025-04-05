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
    "3ZLgQm2HGN2RxUM4N9AAiLCb15mBnpwtnvXVMBotDsszpezqMp455E4AhSwfeY2z6ALQjBx79f9FccKXPYt4hbjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vGDmN8184PjWbKTMP7R3JpcWjDBPEhs9ihTfDLVskx1ZmgJ3NKxyZMVSYFNgW87YfHs9p9oyRY2nysY1AXLKZZX",
  "key1": "4bxmXGhStehuYM7MdYG7k5icj3yj4mJcNfou25PH4gFp2y7y4Ws72eYF2VBbf6CqpUB4iPFgKaRsjbFh7LGWsrs9",
  "key2": "4T46sHRZKYp8Y5G2WnWopWZ7yZRH1Hq6Y3Xm79yKd3TKERBctYSUyqKK7nc4cTuKUzteMWTwWLjgvhhQ656v6nRx",
  "key3": "TC4afCdQ96cwCHGWUAL2JZNvjfYtZwJsGHKHsyvnSUr5XduhyM7VAtphDNfkWYuWC7AgJpewYigT7V3GUyoD8FL",
  "key4": "2SXjQt9Ac1riAqHCzaBqdEqAUvjKZ9Ej8MxDEnkgYpMH1JaAT2dYaGHfz956GjBB2mbaZiFuihWmwS2DxV9bs29s",
  "key5": "M6S4bAh1XiQSnXjkLERecxAJ8GSVodgmsGtSyBDnoTNZXuxPyykdh1EvF5mDEnjZVTG3yNT5AJhWkwzh7EemFhY",
  "key6": "3tXZqXKom5CaCzRebbHi6CZ6RTsqbTUeZddKXY1WpYxNxfRt6Ry1AM62FgYUVe6t8shH6JbtasJ4Udsyq1Yjcuf8",
  "key7": "4JqvWGKJdy1uHCPoB9NzLJqv7GxocdKPqq9rfB4Gncaapj2b8ooPRvn7jwRZ3oGMQRhxZYjZtBrk5cWX35z7Tnq3",
  "key8": "4UhEVeuorDymKDkLV2k6LweMFJXE9Kwt4xQnpfNzGEFZr6o62KSMeegUToPdgYWvyVBWj9RYTcQ5oDfqa83HSUoj",
  "key9": "3GFBn6bpahL2doapaojSs2hcx5o1grtDqRvvgnv1NBH1r41VzrEGVSuzRapHB3tozg3q6KUKD94x4kUs5v8CQ2Uf",
  "key10": "3SZ68mozxfkteeD3NoV9CT2427KFXvS3H7NMKxwstprFAnacHioyDr2Mj5twT7pSfeCeS5iq8sZkgPNgGwE1iDLq",
  "key11": "4LFRh96tNeCTBC8dKCb3BfNvbGXCDgZas7LLBR3xZKMx14pUWsywHdLNW7BaWHjSA7DZK1kBsJRYnXmWmkrjcqxq",
  "key12": "m35yu7mkc3oaL2GZpqyXVtVw3ZMbkrbyLc37bWmB1rFGTycLQpjhHVuL5M9HfNPkYEsczAeFuCzhiEo4gD85NLq",
  "key13": "2Gs6MC2KV561CZFDB6JNVNRJ8Tv9RjzbDPT6BK9LvK8t341utCFbbA1HXMeVoGvK29TcPvKT7s5aELexvwNJBmBB",
  "key14": "3bVrkeF1zMnJtBepHda2UvvPXCQgnAozXgbiDuQwaLA7tqcsvsa8VChxDJJUaMyKkRHxdaLU8K78yUNiqTgF7CQ7",
  "key15": "3sxocwpC5xRskHRSrXBHYYUPaySZkEPwbjbABJjGHRY1uWQ6YLX7oDTzz24kSXH8y5H35i42w5uE5VEmVc36VVgT",
  "key16": "5DJkL1ZrnKv12HMxt3RKD4j9hGcuhnvoHYWiPmc3KJHPPLuwVd872EwchyJzPMAe9VXNYUHjaAyevCmkod8fnHSc",
  "key17": "352edVecnsWwpS4e2eggF62KvHo9x85PGv5DNw6grRJGFeUbGT7WaPtt2FtrQJ8eRZfg554K67HxKWXpu66Qrg2v",
  "key18": "2N3vR6S7jkwXsuJvJnCb1JmQJGVCT9ZoqWWpBsK2BPorgNGFmYvHoB1b9xAHK9hZfoNQUBT9t6YEDM851QP2JWt4",
  "key19": "5sqhyaQeTe7pTahEcSiyTaF72RufodjAUsr9afdLUomvYZZPFgfcUpLLYa3eYTQMjVsH19q1Uqic7jd6n9t39dNY",
  "key20": "2UDXJdTEhhCmzs6fr5MsnayphhBMuYNKnGN9VaBz23EvzdpTuocymH9Zk6JdKez4z5LrMK17HVtoMboT1c6aoPvw",
  "key21": "5ZeQnLBzQDc7KETKdz3ZF4FDBd66PVhdCuqSnB6vecpSfqRvM8tYnuoit51VzoKSLhXoyoGCJtHaLwvhWVB9ocp3",
  "key22": "3ncKJk8jCjida8HHGjmjz1xhd3oGyuAEAd5LE5GQ5XXDNi74aXjwwPQeM1CEts2mFvWs1eu4kEzJpevidHVuNkzC",
  "key23": "4VLFq7Xeu87sRDdeQVnVL1CNLZgkzcpSq7QWNhVD8aLMMZF4ixhMkPwSKVSaGAqvV6UGsixhGdbJiMftghRYZJiw",
  "key24": "3yrUxfmvT9fVMCmnDW9GpWATvaYT8iPdDQtZJLcCPT3maYUb3T18w3SakZ3diYDMemi7BmEJ883QQeG8BF5W9fk1",
  "key25": "37UgxtTCACwAxZDVwmaDX2jwMB2Lp8eRaPbYaJqDuaqDMcCTVZLZX8vf7Pu4E4b8KzwFYuDJXZhRSBHPKaiUEnrz",
  "key26": "2ggGJV9VTgNJHnpGLLGGjBCznfHhri6XKtByupjSbkwPYPFNZUqDnPBWpaUhod8s5WH6PCE88m9CWWWPxjH4Srtp",
  "key27": "3Ur7BiQTyngkAdJm6i1rg6LxLTkpDNJ3YWY5tGzwVSgVieBJq7DfGQsxNZ51hYg7MEXfvzLGccHXyef6k6uRRXVE",
  "key28": "2q4UgNTzkjGKRR4WmZThiUSeyHHYbVjS97xkgBaiwLyV1tKKKsm5kaZGbVDmPYw9gTNuT5tm3dS3ohtR75TSNDvE",
  "key29": "2iVyhumVYgNQxcdXe1M6z3XkTJhaUAV73e4T7rZ7mZQTkXPG2GZj8R8AsEqkKeyBAUP6SUmdcZGZTwGD7ZyqN2Dx",
  "key30": "48JRhiFyTWVspCTWLGbs5ZLntRwTeD9CGWH2CoggpamuDzcg8QXVP24wjKjT18BETJ5EKBabgg4PMdk1sCjJptRv",
  "key31": "ANeJ7ZjrErqugbVQEeWiKdwNcMghPjhAuuSxQzUJEaJJyDup7oFyNBjjX8rtT5SyQGEmeFWNJBajqtFmXsWMUsX",
  "key32": "576h5HWv1WPa2Tie761Y38NyfyYTmoKopZRPHHUhQgRkkyKTmnpk7MscY7UxuGqxqTo1UNxh5gwVyhqDXEBhDZGb",
  "key33": "ktFAxzCkfhZj1WraHUVSbW876Wp3v7cGMWrnxTudX5AnW93HrFFUG7rfWqSKVopxujsDuvZo7q59r6k5axGvrjU",
  "key34": "2uorHWDDjWuCGfqaNXjd3d9UpPDn75m2nTnG9wkj1NE4Br3i6iFzynTeS2qLEFWWiJiruKx6NpsAsDB6rVFHFA8e",
  "key35": "29ZrEtCv5sWdRarUAK14JUcKWSKSHSen5oKTqo7kFNBxtdV4QrFCMAkFzn6naJNZKXQ3TemsZny3CyrYDJP2dq4N",
  "key36": "3wE9PEarkDcc5BavTDmVe9dnrQWBAjVfceMdvQDLWp8pabXe1r9S6yQ7zWBcVew2xUToapRbkvmAMM1Rk9Jdn57g",
  "key37": "662wAXX4VN3sSKKaAoQ3BMdhMrrCbfvb3nrPgwfB2HJr68m9Z32toiJkvsmtkKXTCy96HaUzVQSJ4NPKB1cJ489i",
  "key38": "3Ugu9ukyxgcXgTePDFpEeGPRWUmCnYhar7W71UmBpeu7J9f5o54y8D4wHKzwXnboGwVUq2m1HHVbhwPtP3EyNDVA",
  "key39": "ptqskvRqU2FLYKcLV61AfnQK4E8ccgGXVSdPLQFnz3V2cd2bAybRUKALe814WG1FGPRUWPo2wRGyvJcQAdnpsoi",
  "key40": "57HNMY4RLVZHbRmAhnf82LTcT9vTbTkAwZWMwzST4nmuHPKoi7QBe2mws6f7mnw5PCoEKopVxzc26y3h3EzBzt1",
  "key41": "JAqkRHEpV1GQTNZiWLec8j45NtBcY3YKAcQ1W4b7ozpis9iaKbHdwg7b9GtZBp4A9zE1suzaeymjtAGHxa6HD51",
  "key42": "5cu6cUFYKuKGkA2GaYqgiZzGmH222e7yrm3NPeoSMbFH537KtSnwMgmG4GTaxnMdF2DUjXxeRsPTjMFXDESuBfte",
  "key43": "4icSQoZ3Xj4KAF6DurdxbUssDpLetKR8gmzadBk3xjZVodat8NuqHTencTjnagPe3NSAwY6CGwAzy2Qz1QX3mEpD",
  "key44": "62mdoPE1LsrJq5AA6a73mnhvRkfS8HZjTs3cKyJywNCdnkqqfmnVVqzBhbMfSFyU3Utsy91YY7ANDKTUdCP7aMYj",
  "key45": "34euczvWsm7qyFuSZkMX2M3CfgEnzm1UeSWytodDVz65yHbdZ311BLvgumDRHhjFb1ngjknm6gqfPgusQYWLoCDL",
  "key46": "qkEpQSMyGxKhJUc2gfakpj28pipKfa8Mr7yMxHDi2s9Gk8DmTqxapddgu5VA8GQp4yQuBiWis9cJ1NDH848FEbx"
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
