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
    "MrYowNKMogTRtTHZUmMu3uSUPPX1yPXSeNmW9Y8CYMeN64PtsMKHk8UU4woeVR3u4Cr5h1pdysLe8J7ugfxjyus"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tK5wkpwwzA9izT8FGMUzSXTnSRfTCAWdroTAJZird4niLytZNXhDDJAiJZFCGczUv61WTcMmzDYAz6BXp1o5DBu",
  "key1": "4uYcbF4w3hu8RVrp9EMtjPkXpuworxn9yUtCEPP6pL7iZfDSi6fZz5sdVZKRkLBiQmKJ4K6LgyyRDtyebZcJ8ZYM",
  "key2": "2dwVemcG1zVtCKqmootBRA3XLGZ3M4Jtf5DFQPFrBPu9THfhyXfL7monhDFyEw87V91tCNrsKWTkWf4MJ4EvAWga",
  "key3": "3AaRpdhFq7p7p2zjDb5YkpGpB4owD8xhFPakLkNgvS6gUQR3zczFs8ewdXDeBZQRmzD2hrrbVKUUWXDZQzTVQBUR",
  "key4": "5oXo9Ta42bQ5S7554fqRWBFtxYcfCszadYBUjdnJ3nT6PKXjigJ7rT5S51mjozTd6qkiuCYpdkLJ4ejwJkTUJi7m",
  "key5": "QqbbrMWHTHeJGajuA44pWNi5qoZENTqY9gxb1w8HPSvTmyL9LAz5vdkYgc6LLzsF7PTn4E6quVZVStx7kTVTHq5",
  "key6": "4m5oZjm7kzPShKkDtS4wBvMZy4JREMox5vVbinmErM1EqfkfBtYT5cgSJ9J1qVT597yAgfCYG79wdW9yyZZXrtf6",
  "key7": "4bVAP4KvNrKSyT3ovUFUm8PYmLzTvtp4M55TDhg8ZFRQKS4BMHX2MfeT1vbPdSTPRNvtBUrSoP11WxHSmVtHRWba",
  "key8": "2ZjkEG72drfRnjvKZF4NDGt7UafMG2Xgt49QkFTZuxorw6dftqfmQk96ZvjeGBBqqpUBq1vDs2BBQF4ccbDrHrJp",
  "key9": "VpXWWMs6vFk7MmS7ar3qLxLgfaUtu1uSsz4b2eNXpJukEwCXRzU2Jc4AMGnFuKqQSSSe5m3JRWeiH33cGGKmsFF",
  "key10": "Ncy2LAb2d18XzfHdk7KSurWboHoEQgGzSJrNEg81gZ8fR9ZQjCix1y5TgNeuz1ZgoLQ173tFpain8hKdzA14wmD",
  "key11": "4ozvpmDKaiTckb8NJatVb334hTA7TrqnrRjMya6bpqJfdTm2jfippSXfaBkBhVc3xiVKAFRgRpYjj3iPzoDNSaN1",
  "key12": "4mYfn4Hao5wbV3XdpG2cyNLMEzZXaxYhKwG3TcAFzc7sQ4Dz8neVM5bcTRqXPGdy9XDteDHdYexbLjzbH526LVeR",
  "key13": "3byTLoQ4uqtofPvFaXUYM9G4djRAqPhVF8gzcEK1ieYS2kMs7nnWxkwBbPHzadxjeNDh18u6wK9BGcZZVw9vbCWE",
  "key14": "5b3Zk6iizQPeWqb6Gux129FMuW995nCCLYUuYofHfF5RfnMW7sUtueT8i3bopQHYW78WFHeDBFqgRPV3R7uo3XrT",
  "key15": "5jEYPoQoKXyH5ozm6NP7WyK4RdRM8GmmRBg5JqJLZpjzkJsMyCswdMrEUmLeEeTa8mGsAKvUtACQxeyZHm3JTvMc",
  "key16": "4UoTtkYhhUA5ayL6AwcZsw56sm8jRRjHx3eRP7izu7t5hDDAJQLAGs1wDy73QFPUxQKnbsFrykDfsaKSVFyL9Yjx",
  "key17": "2ZbnmxtBGuWNiYNXgbWrgtMyk82hwe26QNTp21PMrUYvj4WCCi4fQWh7tWLPpkkHb1EByPYS2JWE4nK7cwNTn5V7",
  "key18": "47mSRndDJswSagZLfvAaiitfBoLdrdeEQQkgQAtLqB6qjR6G7848eBVVKzdRi4qMsC9tGjJj1qiiABhubcuv5chs",
  "key19": "5i38x1Cs1jaVAmhQiAj5kPB8XSHmzehwndSYDwQwuDe3SiCA2gceyB7Q2gnf81vgLPsHDXzpoZcnFW2AxuPWMHxc",
  "key20": "3mjDmWv193sGD3YLQbY1r5eMZuz7gKUxkXcmdSsuosWJBpVUBmNPZrUuR1SCsRg9pvn6kKD9epD9jVB4QDMmR4zw",
  "key21": "uAULKm2JSQ2gfLKPMoNPnDbBskHaRDWibcrczKCeN1NiBh4AThbUrTDifQc5MRyqSF7btq5oubtdibJuBBfnr6D",
  "key22": "2CadsayCdMgx2jPuM5sXJNahv55RQ5iLosckt8LFVjfLx1jngw6kFu7B7WvecAx5oA9mZRsiMYVcG9wG3RxEWz5M",
  "key23": "5kBhf8H3DfNLt3NLfymvGTPtpmsbZ4kpYiGL7LCFzpidF6rcuoqkeKRTwj6P9ZVFtiVZRbii6fGm4vN6FkDAVWdy",
  "key24": "4QMuNu1kkveUL1mFz87ZRPDSdGAdmH6ynRDae3QDPvefRv5QV5aaCcswAfZ25RYLZEus4RGFAqdD4uxARAGHFqw4",
  "key25": "2oGoFzkt62tXKAbT4sZNEyRmKtUfoPKFtyjctAac6WPMvSRefXVvgvzbseyAXvi6iQ2Vi81g13zxYYioUQiq6rW2",
  "key26": "3hmvi6hkAqWaBG7whgEPEhz11RNPHqhaWVVS4vhJqN2gAocp5Kds5SgugNCjJUPAJxaUGA6jtYM8zwmMnH7rX4Sm",
  "key27": "4YEkdfaNWBpWNuEndcmx61od7mrxiW4H5ux2Z8HQZiP9kQRcBvxACUbmSfJE5GVDaBPkxoKTRgvKKC5MjZffsYDg",
  "key28": "5cmsJKP5V7aaxzFEJERUZxfQkJn4YFQvPJrzWEZdRpMCvJ89Yrih7Ks1jneQYcygJMtCjWcZzY9gh1dE4R1dakdS",
  "key29": "3bLeDyNsrJm9WTNAKCpE6W9PNB3uyBh2oLThwBC311df2Sk9ZKJhjDzTX7cBczGR5cjVxpQ2aM5ioWsisowg54v1",
  "key30": "3g1T41SXsypsmTGYF9wgQwKVhrGfeYkL7mb7sXjYSzFora6Wh5JAaCFxiDXr29ZpaDmxMg1KwkC3E7e7ZgTB9dvw",
  "key31": "62P8JCWwGkb2bRwpWizzuJPMALSW5HNeHBC21ZXDUEWGqAJpwg1LPKGbV2xJ5q3M3NXrdb8h88v3n93X9HKqo5f9",
  "key32": "32M2Fri27ktLua3PCWTRjbaSqKgJQNYBowxPT7VbR3y7eEUEXwKkXXHF6niSfPdQ6rovQFWgZ1HzsAct2awETqbT",
  "key33": "3AwyAaXCuqaRkaXhv4NhAzJMVn3bNviP6VESdEEaoj6M86AEdQNq5FCgiuGjNhDmj8MpKbyk4goABFsHbVz8qg6N",
  "key34": "3dpTByL6gLY5ovyhVJ9whvjEGAgcRZDLJfknoX2kh4cGR76JzgsRm1EBpNXamt7mHNGwzLA81wiegRFfPru6yjhS",
  "key35": "3GkDqEqgYJc9tCpVXPDj8sifBmVUWh65oFJL2gTCT9zpJqGchmsnyDPvuGxKDSPYv14BXEFYaApw9xHtNAVE6ueS",
  "key36": "44uJB6L6U7DuGWen3bz4iB3g34WVNRXiaLy9aXf5eZdYqobMxuBfsYzuWhYE5Cao43dzSnbYwh7FrWT2FNsVSmbA",
  "key37": "44hSqJL3uAs31xGgwccY8KBweMEqQ5cafbg5Yqcch6xCysfJvSmytorjkBMUCjqh343A5ia7FuqkbKwMZTbLTkxt",
  "key38": "28Cvqt5nQCFfjipGHhV2xP3cVdV4FnpWfzPXVgsr47xBc6hYrGnpZX2eeFzMU9iQ5WwuZbrJVriLdsegiwrPyC7s"
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
