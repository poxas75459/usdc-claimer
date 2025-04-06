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
    "cSpSZ5DT2fi7aJJ6PxkkGAxzTNtcBfrgCYE5UBr7VfKQcGFWBgVqPtgRdoov9mP7YWvvbHg47cRbYbQGpC45AGn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r7o1tTGMvVFkYUzexwFUcvASiefoPF4Cp7bVzojsT1i1QPAnLNtmFB1b73a34HtaTbKs6P9aGsPyYfthgPs6tVu",
  "key1": "4RVBZL7QJkK1y7Dq4D4qnaXHA8DZ8Hy3pEcmZzx3y7ffJmFQx8v4C4mehdRGQgoPpwxihwP13beAjRAzVhnzbJed",
  "key2": "5oeMmemk4nitAf9DTx13CtJNADC1V5XE4XMXZ6rEMVPqo6t64SKFSTy5qunsJ2uh7aqAA44gtQnPrJatUxydHrG7",
  "key3": "3kyawNRaoJFmZ7J7LAANdQGReDw6foPShApPR8J8Pyzij9SrQzgq2wdqZxYHRGAghvArHYeTVm3MHg37S61zhWMA",
  "key4": "28d2Xu71Qu2w42uc2RuHUaPQWYRCQk6Phz3C5FaLk555f4BSB37F64MmX8VSUm9AXLaT1J4mMrHAJ5aj3iGj1UQn",
  "key5": "444ReGHcwWvEaLzvkhV3LetBji4K53A3roKsdzw228ak5ufWnRC7zt9kDL4YLuXmvMWRraHNgUy1vsSVFb3g8jSC",
  "key6": "BexHhXgtE4cFqv5Y2v3z5xVJ8fad23XTxwE2dk3xDVk2ResUEfBHXmgamF6jed2UufA6SZ8zJFBBdhvxHFKfCDs",
  "key7": "4Hh782LCsJmr2g11briQVphVX9FRqNsMMfZT3J7HhuKrmknKodegrXMnPhgoNBC8KRjbJwsKTre9kr3W8NMnMheg",
  "key8": "5rcRUmviUyjZG6cSzAYQq5UmJQAdvT74b6NGpyjQprLiA7btxm5xsWSTb3YJusyC3guD6WG6YKMhb69iLdUKSsoq",
  "key9": "2BRHQ43SJ5Mo5QjgNVWE4sGvSqZWh9jT5oFztMsSwL1UMbihZ4V4ZXWxEGs8nD8sbo87fqrhbiq8rMFzsfv6eGm",
  "key10": "4ZSnZi4HodkEciwZ8ks6j1wjpBXNuQhDuS6RFnGEirGhRPffiMrdXLJDoTo99VVtquLUeaKoGdpjhRdkV6cGoHPA",
  "key11": "W5DVx2trb2hmCijtowVECGBS4QFMF6EJCoJ4ofryEzycMYTDfbMpVtyet6pVbhxpkaTh8niJDy2XFa8np2gmaqu",
  "key12": "4uunJJhDZNAriiu5NtKrfHSV333YBejFQZSp3CWZYavqqJrtrvrCR3cNfCzQxUcSNNQChCLNFE61ViUaJ5McaXss",
  "key13": "4fUZYb4WnB8LLNygUPmqdx4SqXHnULbkvSywe8YLGgNAA4VNs9ZrL4ZdkjsqL8LGdrBKBKDUtKMy1nn7P6xMp9qL",
  "key14": "28PwKY6d1tbtb1guXWs8v2HU2ehn3iuc3dyFNSGyUTq9kF2UWDsdhmiwccWqkgUikGAU3zYiRQpbPVv5KM63ZhGS",
  "key15": "Q7HuHtRgZ451aTK4NXjxKr3rmtokLEVbRBudQ9r82ubatmm35H6zRRpC5ExS6jA1zGfPwJw5MtNoMW7sftUjUHs",
  "key16": "4z9LvcGmYdBZPxBfZeAqfkN61j8xZ5dtUFXxJUZxMQwdzhq1eFmixkdhkvdVjCkHSnEbVoDJbN4wyNuVomj8qYY1",
  "key17": "2vhToQh5rsSFphf6HbyMiwczrg63hyPAhYFNsmS5X5PEhxZj9eSsHKcRw5e9ffempSjdmmDkxocmEgNGbeWh1MrZ",
  "key18": "5RFAVonCnND4L8WpgWdeGd7u6N9sBCFQSb2dBXVd6jyrcS47meirhBA9MmAVT2QMeonowC8pVPSo9BUy2gpQ7Tmp",
  "key19": "5hZU8DcUQ8eCQ3iSPZsxqDRtVD87mEyoP3qwvssUr9tJKUJdJtkrrAXvtgcgTNwLzQYYocWcUs5YAbJzJdGtfWKP",
  "key20": "5B7WiXfyXj5GXtaBbQL4BJLhbXLFQNMbpJ9MnbKaifFT8e142veyZQu7u2dFyQsMbALgjAevWDRyqhq6f7y9r9iX",
  "key21": "3UK2YbDcnyhhLCgXCC9SrzAYzLtGxcoGXRDgSG12rBaNEvKFJhuS7ubnnVb5yfSJNKAaC3cpn9Vu6cpmCBsgoKyU",
  "key22": "tHHwB1zNsFnhNC2MzWV97pX56NWjJFYbXwh2EF4hxKahHVbiQnG6RtpCyJQQhNuNoiedtrHgVxQB7XSamktz1XB",
  "key23": "4Joj7DHG64MYCEPnhq4KUj8ZHrdNbJU4UwiXLPwnBGdRUQqE1U1J4JjvDRk9X9STrNvEkDHuSzh5nSAF81LdETPu",
  "key24": "NKmBzwTkTboRB7hrfuLqfL7TVhEUWQdb2rTNEoMQdVkP8YxHrdkmhRs8VNbFU5UJeaxwKk1qwD1FdvRa7nf9414",
  "key25": "38ryFdhAvZeSJwG6K7ajxB4zfeS5NZVrFC9QAHNAUHVxBKofbE77p3TwdZnzFEBnEfA3pfRLDcpZMKKzdphdWVdZ",
  "key26": "5oB3DW5geUihZx7th945T36DYusQW2YWVTqcZdF6nqQp6k7P3UqZRu1e8hXxSeh8MHW7dPfwM7WQaZmTtGaMqS9q",
  "key27": "2WoEyYeiLuxrJMPQynKD3LSFfmrMacFyzwzumo5BN3aVR6DFqJFKjZWpukFHyWzuUazJo3GpcvGwiWBGLM93Wjch",
  "key28": "3jcsmavsh5AkZYCeYgZEW9wV9n89YcFFTadTLsMGraE6zNp2yRgwDDLt99KCWpRzQS99q2R8hkBdwuzebSxHSNQv",
  "key29": "4pE8cG8bHtCgtfW9h3ctVJ5VyhGf8CH2ZeTmkdZEyaDnJYw4HG9T9ubghqwSuHLbegvBcgXWJWejFiVxrvWwQGim",
  "key30": "aLX7syKXYSmaQx3PY94tuC9oKjke4BNJJ7Xz1HXm1ARn3cs4YzvLodxj2o7KAT1ecu8xKTeXhccMYqYoA1Qnij8",
  "key31": "5pACRjRCvhHPS2HSE3mz7gd9U2WatejpgN1AjrX9mquK4g2sd6QaECbUgL9mx3EUAEChPFJF4vmJgHbXcVGYMg4C",
  "key32": "2JLPUpT6JN31sH78HjErC2XNBwn7CHarqkdPgjFhbKYvT9aif2jRgYEi49X1yWj2wjMRjgkFzimMGibcMw5aussX",
  "key33": "3KzZ4NP5doB1tVWXmZjKmDb2287u1DkAFTuvwqJt3aevDFzrjPbfQHZnoKh8jbAh21WfZLTCnYQD8kWbscPCmbpk",
  "key34": "3jjLUEKGm1Rt7gMyDmFFsyqLsQbbFuRBXdvXi9StHubvRnf3HEUbbRK74sJiis1zrUQgFEpxap9oPywLn9K8dwYX",
  "key35": "3xk3xn56HW18qTPV1f6wswQeR1Z8N8qt2FWRD4FLnD7Yy4rQmN93dyrLmGM4eWEC1GkFByxXJdteY1eVKyJDLD4k",
  "key36": "4D9T3Gbm34U6Mxf6HdeQ813UmskkNa7X7pGM6qc5fefHUbV9AjXoMRk8aH2kWceyNLKJW5RAHUcvJXEthDW6iHBw",
  "key37": "4TDtiTxb7deADykxbfacryoP3my2MUuQ7brxKoCEEDDspm91qVTbhkHNtch6PWCRE2cqU9GqpCHqH8XvzBh71tJk"
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
