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
    "qLksiwsLjVuXS7LRwTyg6HzYHTz7nhWNg5rWBgqMFUHjbeJkMTgf5db3QKKX5MAgHKWJpXoCHaPq7qbDp4XZiUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Kh9oJb7nRLhGjaPhR2m5vbfonfWkLWUFJPVAeSkyYfLUhBU91x2DyNsb4DJ9N62GQjgYNGNGkm6YKJDjsy9Wvf5",
  "key1": "5d4q8qhUPjqUDeemDEFDivh9AxN5CM3sGyFh376MhE3wVXvXce82s4qDi5tTe7yn5nN2sQ9FegRjrPsK97KZd5CR",
  "key2": "64M978mMH7Ecq5bE94Y7NhYNUULhyNpskoLmNCkTsxdhuGoENMc396dRoUfvrFrLqhvJ4jUeMNpaM3ekneG5QG2R",
  "key3": "2fQDR8f5byCrdmZoD3iTLf2ursf274HpdUkMbpC6zVSx7HN3wJ5txxBVjCwEZEGjkzBFCfGXDbHzStraZFBtsf2g",
  "key4": "34JECfqRQHD7ASQJB8QAWPdprxtwXd4KgJRZyoHMAbqAAL9Ttx79b7iNggJbZ1B4LMp3vEH53uptrZnBMeyEzeJx",
  "key5": "221LEu2MPs1bvE9ydVrEzTCcYCAEjYf2myd549naFoSDPsp8SpTQCFGdR5bWHr3KUdDjXVStth4aPcCJi24Fb3G7",
  "key6": "2Fhy1gnZSxjp1tLb9JxVEMPyNbYazWUczuLtXJgGkXKrtM7hGTEVdYDk7JRqjQgk6wp7w3vqps5gVhfUYAowRrow",
  "key7": "5wEU8DbmPPXiKp98AyKkYzChHErzjtCgWChKtPYY2bUDEQQA8URTW8viqkjkuKgKAw7MxvHpmXoTbYBujCWzmS95",
  "key8": "3frnhUbUgfEDswTG62p6hL2YD9pihhRkcpDEh7Q9SomNAuN6Z1aRB64GqM3gVH43LWLjZRouUCJWB9P8F78vpftD",
  "key9": "5KnMKY3YwXtM4fEtq2FCJTviUVRvSDARdWLAjRp6kwDNThMr8tWgr2Ar7pMpnZrzK8V6fEKRJSVW8AsLuYxwpbhL",
  "key10": "2H2QpibiLAHiJ9zLTwBMZUpZUudMnWyhsM8fs9KxfbbHTqqzsAxwaKY2eWU9YK92mfMhZQCLBn1P32352z8RTDoq",
  "key11": "2Z99wAMn6xjRgKacmm7ck6vrQ8B23WmCqdiuJ3DspgrpZPPgsC4rgyidiLkrniP99vRp8XpMHQ9dDYdzcAyRBWMD",
  "key12": "54y4BGo1gPwJYKRXvZrKm4kfuaeoR8W5sp7GNfQ7D3vYk7CVRNCewAcZks7xvZmPcWpErPxpdQ7bCUF591FgLpHX",
  "key13": "4zG4snkRyr6borHDj9K5DRShGMRLHEYyjwxH8VwGyjV4DyitgC9yG1Gn4w5EpPMHBDHNSYSUJtfeqvXFZrzNbM8Z",
  "key14": "28Fs6rAbNgsR8vf8Verv2zo7hYyipttwyqprx5k1EL61txBYZ42isgppUg1evQ6VBwDGwAAvK5YTz8Fv9KmUXH4T",
  "key15": "5srq1BEuPRJj7XHiJ2teCWrU9eGZjKu8tiEHXXbuqmGRB9QMB5k7Lx9hejYBdpezQZP9rJxQicZAdUVEdHBC3DNq",
  "key16": "37SWddoP4wzftvDPBVg6nmAxbg8Wua38aNv372ZHbLfpYFAgUdBKWe2SieqkYtkDjqGFoWK4pkCnt7rNsFk9zrZy",
  "key17": "2ZMx9EmrREfqg1zBoqXcaZCQ2iKbcBANM5keAnRCUJPwnyLbXPGZaCEmLGz2wAAjcwo5sz1aN7sADGrmuPGKeaSg",
  "key18": "4v6eichWkQwbg4nUKKovZq2n79GevwB6ZGAHzqangzTfpyn42eFmLLRkKHmXnG3L2WJEQgkwx9ePMyAPvuDV53gk",
  "key19": "5f8ZeRAMEwpainrKQUHGyyZPPXhe41qBjckqXcjPTnswUiaGpAii9CGCqxbHJLyWtYvK4LA3i914AShcmnk4mHPV",
  "key20": "2zZtvwzKCuS3CyKdD9vF5RQcyYacnub6yjrezvNJRNr92AV8ZGWEqPCcGEjQQWvToqxVnybwbzFfYBEtfEEWQD5f",
  "key21": "4E2BRrd7VkqJbYQu44QztbS7KssMroxCVZUDiv9PspjdecJdr45VVbpY8xsRED6G57PF44HYqERiA8gtK3Qe2u5D",
  "key22": "26mZA8W8bRh9i9m94Ydz5xe99MZnwsNc4jzbbScGwu5xQQoW6stfJ7oxNsM8FjYmtXWXAqwPsoYrmRZmtg3Vmw23",
  "key23": "45yZjMFyAVy4PiQbB6u393BAYEMWQPv5irLHJSJqBvZNJVGr6Q6KxPdpwZ4jZKvYHWGQedaBpmfyfogUr5fJvuNP",
  "key24": "Bdem5Fqn33nFuafM1tbKAWRshNPv3ELGqmS98Q6pws7ym3uXbcBgMmHDCNQnFVSMkTsiCHAvFoUbp2CGrQUdnWd",
  "key25": "3GYg7qpwRhyt7vMSE5ubmNpRAoYcfW19snfPmetwPc8TVFzMWtaixJ3LkzNHfZcrwV4Sq6sHL7tU9r8166RZteDw",
  "key26": "2YZWWDocsiZyKYpjdk4hRHZK6tait77tzyLQ2EgUTPbbphoHt7fvJ9cr3QiWPFtBZjdJGCseHuFNYYCDieaG8sCR",
  "key27": "3oe3baZcug5B8Qdubu6byJmQ3JjQ48oYPhaBnFHYsC4S5P9GoD3j8ddLSQEgqjtGiiR7xbpHuHx5tFNVF3ancnTA",
  "key28": "4UoUEb1vL2NGzgbSrP3srjrHYE3q3noQohdPzL2MtDMJDuWmry44Hj6QHQLLAXFES6PNzq24UFkUtzo4bMXqJNoW",
  "key29": "5VZGyFZvUCj7ga5Gnc2n8kFGcHGMCfhEka8agP3z8CrbE9NNjM9ATdqgbhKrAJHzc46u7mtFascx6VQk2wT5cvmg",
  "key30": "AkxoH5wZAYy3H4cA5ia25B7LymaCs7Dqpmw8EUDosaJY5rudQsckyof6visqsWrPiuQFVLhKp774XuDfVGb38Vw",
  "key31": "RuXYtUYssBkijgqnLCN5DN9sdAzWpokqsfEnBUhSpCauZF7CyzikmyGgbaLcvavzLET1zgEUCZ7Aws5LU4rzwsm",
  "key32": "38Q5zY9XAt1n88vWLxY5ZxX2utpeuTNsFzmHwo4XZLdpR9vBx6S6HhujWD9eGJ1KDfc7DEy85LocL6TK8pQ7u7bx",
  "key33": "3ca9CMJmFQZstvinSVeW9x8iH2upfaAwWJ36RJusYrYHHkTJtW1qRMbL42e2siBvgtVMtuR94tiRP5Frg4Wtqz7K",
  "key34": "32GxKFDoEvLs9FsYefLCuPHX15PXMHty8BuxthzwZmej8SRt2oDS4CCBtLvofeWNqDV9DNg88QttJiatdR51xdJE",
  "key35": "31dB1WbAMpvMtS7xNK9syncSLgASSuNxy8cpmTD8KkPv3ZqRaiTfWvrKhMREQedxcDfgd1xNy41MeXjeRtwaFsaX",
  "key36": "4ptBrC9pcpWaV5dCwo9Uc1ETu3BUTjNbLkxxcBQiB2ekpp7AK9QVGyN79bePC3AnBq585T9qbpP6isJYRhyoqfJE",
  "key37": "28h5UQMzFbC97EEuZBVYhwR8N6FsgVAYDAQc6QmXscFJsaPSy9YqbepEbVTi7nw2JWQM7SxGaYMZ1kjqyNbTafgX",
  "key38": "33TdZnFG6GugWx5GvNWi9G9iiaivJfeYMwkUE7TX55EKLJ8SAiWPiQi4295AXfyqGg3eXHYzue1gcfHtY8HNgFTq",
  "key39": "2AQqtCuVPQcpk41BgNAiD174GvepAN4AS3tKnSdS9HeAELDzxuuEHHRXTd5N7RqLTeownwQ3FexCdgamtcPboXKF",
  "key40": "4Hpv4SvmoXXLgdX4YUBgiityov45MnCceZKopYQLos5cwjM4aAJTSKfYvCuqVemXq8be61ZALUKSx7Y7fxAS1kSe",
  "key41": "5dWgbFEeg2wnESgLpobaiXYFrP2rphWSfxUA7wG3V8C7JFGhrFYVMgL62un4V4gGdfwKeq7k6tRgXME4W8f1zYYh",
  "key42": "1M182ELMBwzFMszQUWAtc7MUSh3DpT2w5awRJzQN5x3osaR6bAGZDkgEdFod1DnczJ4ktHhMJjtzzHktT5JfnZk",
  "key43": "54K3knfChCAqRrZ8vjKdGdzjqZ8CQkbmFojhjASidmLRyoZMguHbWD7tYwVhpqPHdZE5yDpghNoRQFjwRjuevf2p",
  "key44": "XrmnVcQnWAKnMq16mpZ3ZxyTS41CYoPeWPT5yL2kxtZw5QoFRrtjS8TomC57TYV6bwUn7VKpC3PQTXC55vVx7fU",
  "key45": "4XpB7Y4jPyphLrKUF4QYDpSGpJ7KH2UPG9v4QpEgL848D5AczzCXKFLD6BTZCApLUKxxJMiT2QX97vjjb4V9g9Y",
  "key46": "xoU1Fa18ojMJkiZa4dVrK1QTmEC2YV8ocEcMRPoRXKCnch6yxJqpaoaVt4RVVzggDnycei7pkNbKrFZ3ea4RbSu",
  "key47": "5tFV3rnGe8rz7RrVeuEx8CoNLgN79qgDPvzyoDTHSMw4c8aH4UNtpHVRxgNPjp1wctMm7QanuReviqrnSoodHZvN"
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
