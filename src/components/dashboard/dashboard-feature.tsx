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
    "ceagjt7cu7y6d5ffSKLYLMGekbdskAhaWE1psuQnbfoXznfQbbXN2bqLsxGq8hdcQe7Qo6fk9EVGkywvHehkXko"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nyadM2nCfWvzopcCXWMCjsgnLWWQHfgfKJssU2CiMHFp4P4pcnEN2VQdEHEigQDwFD6oviMFLTGEFyRtE9uRsWj",
  "key1": "37TuBT2Zq6V3JaEPbh13uEXYd79HJ7LFoAyoSCN61JqoXLt9q4VHgAbkXkwm6o4kL6NE2RQyjW1JxyGDUaWRvd39",
  "key2": "2aaJK8RR9Eu2qvwZs9nANFG6niBMHf4iTSr3V8QudoTct1XMB2e9B8F3QKvVKMk2DRUeFM7ACrjFcUYjv6qRBUKR",
  "key3": "3oyryS2ETQ6UWjqzuUgh5a9uUp9bcTaQdQ41Ct6fTwNsBbekF6J9AgfajkSnxQn1oqAf5oQwmJ6f5ZHHJSMnQf81",
  "key4": "26st6MAGaPWWRjCQ5ZZ6afPEzdMGkkegKx5RozjmTiDGwSrKMZhRvv1V1ESznPG1qsfpeha8D41LhJyKbEUbC2dg",
  "key5": "YwC3Xx37TH5UKETMzLkmx674vqKx4CDQMXTaiSQXB2PPQVLyG4FttWfVVBABG6DLB3YV67QR4fQzJxbeNU5ctG6",
  "key6": "4hgHeRTPDYu8cqMu1YBTRhSL79QkLJaMtXTuUuVt6JjDrpQuRUTGFM28AHCNhoTumajtmrvVW2yPDizKcsb5wBVY",
  "key7": "4W5XF2gA2tWbJZnnzwYy5ShLTouS6ijuLzyrNmzTWbm8YziWGr82XngMjz5WaWXqQCCysw2gMsShf19C7DQxAK7P",
  "key8": "3mBtHTP4CDePhtixuDeM3zNBGzjCLvkvFhNDKYzA6X2WwEC2SoVsewWdcAvi6kT3QCN5SpCum9S2W6Bmqg8Wuyn4",
  "key9": "3s3HofZL5TAdVd8PhSgQPRF4MZFF6DMkKzPzxFpEUQJoNBik9ziT44yNmqV3AhRbmY3DgfhzrBWsFdBSDDbNSUmH",
  "key10": "2f9v4W7ichjsPNs26SHtLVS29guhhhdYub9iwN9yH1J3e1NjfJ92Npa4uZYRYXyuspRPCFuarnus3CVhwpLX4eD5",
  "key11": "22mtmrF2EHBwuN8DwE7EZeFdpxLKGLmHs8v6Vh4ANNJYUD9XKHY57K2kv3aaHJWBmF9d1av1831xKjQGSD5rhMsB",
  "key12": "2S2dyETqCdMpeSFCJSmV61w8yYmjFCyj7SXrBUkNZDMGiiFKroHZf9se61YLJVetnN6Niq3TAVxgMXykUFtyjPrn",
  "key13": "4JC9NwPiHVrbGzYwMonKCVWSzLkBTTU4AHTBYUJbqrKLZyDyQYCAYUdf7wRj5BbKSUhXDJ44zG1WNTPcwJwKHtyW",
  "key14": "4pyK52dTQDeE19hs8UGVR7sMxPpiS3vhoYqECong3vXHx4sjRTgd1GfAq4NAVa97QN5NzVeAFbKvduc81Zi2eANC",
  "key15": "QL6tkUksn7LQf8D1VEwND3o7hjQH6Qpm2PwP4oVRc3n4R1e9Mjdi78qR2gknN7K8dY18etPs7BKZpVhJaZcWcnB",
  "key16": "44BTG7BEkKW11hZoypiJVuRr3S5a6VwwUcWx2EkgbUNpvQq9tPAz9LLUEXWRbjW1fZpYUeFn9HCa6mJusompdPtR",
  "key17": "CAmAkuXs3SEnZMTkErsmPcWnZKfZYRg7vfS2wx4YcHKBUtf2hbuDxKpdYW8Z45zBFquMJCufdYwFFbRRxKEGSg6",
  "key18": "JcCHBYsbLRU84hf3pzMZfvetADRdHjviMbmoEAZYBAWPHHpriLWgR59tyKXJogqJhu3u2dNhLsrveDcjwjCUC49",
  "key19": "9KChGu7Bodqszvfe37NbDs7XUiJVjPBfLn47osjbQxfShLF2wbwa2WsigeKTvYoqzHTHwjhpEEYSneGvewuZfds",
  "key20": "3ZR4gbAQxHT2hy4xYFG3dtwJRs5THEYD5yhMur71o9ijU9BQanjqH4xCcmd1PMrxb4vhwETcsepz7GMwe6Akp9pW",
  "key21": "5W1xsgSJYrMvgJdS7hU8rbVuDGab4M8YHvfyBmmDK1hHt9byogGoiarscGXLWpSq1zD8cDaNpuWcEFNuZMHiePLz",
  "key22": "3b1PeoFMhaZ78nAVX1jfJDBgkthjyafciHkRAXYSAAo9Fe16hiKDVfb7guwgkoGFQ1qies7E4MhJQEBq7YXa5UMH",
  "key23": "1F8nKDQPjovMNFcX1Ctt3RzHTAvy3BXUdPJ3RQSTjs1rWpxBo9YDZpsYEzNF5GCAStiTDMJ8MTJu2pdxNyfFdfZ",
  "key24": "5GvHRgXTZ2ugtxfUMF6gp1MbnT8owzw14dPH4bDHTcqGDpeDUtngjPMBDvnBT8xNu83nqybxu4162ohmwL2zSzc3",
  "key25": "2XegmLo699ueJ9Z9rTqMgVqghBPBNF13C73en4MSoDTLWhnfRxpockJy5vinB3LKiq8emEmP3i39oTarkScU3UnF",
  "key26": "3UK7iieGs1g5kjWmcAFKxm4YBQoKPw1oDLvyWFGJ8qT9QQoZ56SQ9wbyzgZD8CFi7S82HLNJCekPKd1poEZVcsLr",
  "key27": "4cp1PDm79dHNUdXCA6X6u7wBVVgptQ4GLDty2uR7GfbTnKgdGyUh3yTSmWj4YCPgaCwNCDjz3JqxxTdFBCVGGuKV",
  "key28": "2zw47JDYFonqrC6djPaGa4BDtWeS8Bj7YMN12n4zcw5QUqU6xScfn53W4a8Bqt1Yp3dBQuhi17tHg8fySKcJ5ijm",
  "key29": "4xXyyiLoqd1pioeM4qhNyBTsmq3LbG47yreqPon71yA9hkrFYZsPUwWts3oyDFivfsTbNVtB3woiLbBzjJYV1AX1",
  "key30": "4k3An7U6cGDWjhMW9SxASE1St3hNhmPgdyhyae6NWrWVi8zU4qdu57qa4kXByAEM7GHYjDWuQVLSrf7Lp6JtGedX",
  "key31": "4Qp1qCh6QrfrcW9tMhbFurxz1pdk6sL4JjnAwk42iQobFXKGu5qW7kHnz7YMzyqhKnpjeEgQbnB1EUrdQ1JqMXEV",
  "key32": "4ZnuapFi7A7ncjekmpaQ4akcb1nFq1tEB4ciywovPTtRxFrSVMg52CSnL47b1MqEVnTXaoxpakGnRP5smKpK8Jhs",
  "key33": "uwikEA4iDAh2Nur5VvttTEyZegzZi8afEHGxVfoRRfESBSM9aFpecv6UPMdbVK8Sxp4Y3HyNBJLRSUgBgmxTzzW",
  "key34": "63vpoj45JEuVvLPFbxdBfmp45BJmLTAhSMf4dkxae31WwbW6jYhrHwBfgiHAiqXa5w9Pxk3rA3kwy8CDjvp4Mwzh",
  "key35": "wzMfw6FAfgfC3DrQA1bAbAG882zi8S4YmsUmXyuFmQKpRq1mEoS7DY3bQzu4ugJh6x57zLXehQLTxfq3xY64Hz8",
  "key36": "MnWsyxMozzJMzr2LKhvqcRaDrqGSKaoEcLCQXR9vFx3rrYxaFGMwFPp5Ttw9ZnYAJvj1sa9B5QZvD4evc8nZfP5",
  "key37": "5poHYwQCaGtktWDQHGPYLxVB9cJQoFKyMBPwgdJsZ1ffrexDjyrPeLXY7jrqbaRsBzjnkcE2LEXKnwUQusUj8jZK"
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
