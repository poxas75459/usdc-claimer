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
    "4PKVHwx56A95KwumytnfdP9QsyjS98XuuBfzQB1gqkLTV45QKnGTZxZWDXrwvdN58hm3jsBwq6irHTFbE8NwZQek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "w8Ko62QytPnAwkqkGFNkwLZABAu8BKEn1hvB3M3fJVQvzRFWHr1T86SpWdmQZKqohFppLQDv2XFsMknYbn9apGr",
  "key1": "3HfJzQxfEGYBpnFDs4mzu5Gad5XaUjXEz9rZWz8XdGbfccL1SRPrKxXFPdLaaMvNGvnk13mapo7hhMZuAi6MFF5b",
  "key2": "hkRC4NhZHzNh49nUv1Y88xDmjV6fT5v4FDhJhbh5XTMGW6GjRw74WCjoJw1VRCZMr8ZqqrQ4BjRhAd3jKdF6mb2",
  "key3": "WeU6vGcuhfmz4hnFFH4HkWedF3kdLtCbZ37GZim4W4XyMNgpPRGgNxud5rfpj7mzEpaGcqnPXdNDZ7iuPXRYuYZ",
  "key4": "4ot7tKyoWcpX1Y9orMbPWQu7b8SADwW9nP9HGwpPSj97v8ZxYdzajPTUzyy7xzepo9kC9rPz2AER7CVSDkHXNST8",
  "key5": "5ctjdsmQfMa2BprPNHiijcJd5p6qarKyZCqhXzZuGX2Jk5VCn56FEdPiKK9NF1i1bMGmGok7rWHPeP2BMJBqFyQg",
  "key6": "1isy5H1WSUBKeCGgBLCJT1g2GdnEvLscSKJsqYC6SmP4RysKHr9LRnG6ssazbRTrsEz4Vgph5wvaaofXm8XK7FH",
  "key7": "aAG54EtqXR226uKoNJRsuzeuxZMUZC9ywD6ZBXbKLNxPhfJTjJZLqXXTmgGPTVzeWRFQM7T8ybgCFL5iVi9mPwK",
  "key8": "4bJSBMCHQzNPLQgZRUuuqSt7vzRQEvi4r9RELQzjpFfTx1QzcGELUGjQRE2Zimh3aUZ6NLVzfsfWMvgH3Wh1mzBv",
  "key9": "4qD8PVzvmLvcBxn67vc1dRTAmuZBod4x8wfjHgmQ4Rz5qrvJKfVpBvfbJa3HVZeGUVMQVDksZoywNsBFWj5eqsor",
  "key10": "YCnCQtu5HgzdFheMLWYKSNtoVxKL3kN2CjceuBB1gPbBQVBps8sNgMWadYcXviYrKeKistdBuq8sXawCpPykhem",
  "key11": "279awFGVpR49XgSyJwmvVWy9CTDe1TX4ZHry1gryDvkF4Ppv6edxPHSuZK98r4jhMDFdiUfAHJmHCzT16s4TVHbE",
  "key12": "4yNRmQaybQng34xna23Gsi3jZ2oaBNCt7aRjLM3jVPajs58wUr18GajJVW5HAJWQd5aWVTqwwvBccsuBxDHV4JZf",
  "key13": "5H1Abdji2atdmU4hUogu5Q1wzKQDCJyxN9dRiKzHE7ETJmCQjfXmtCL9uWni8fVNEJtratRtEx6kGWs4MoR7fTWA",
  "key14": "2Z6SdLt8AhLCfm4cHDseX8LVzW21QvDUJoXvjizmNh9fraJonri6heVXRgvHT2zWZ5rn5FCVnbr29RMbbafcYMQv",
  "key15": "5ToqcJzpfwwJkUVPtZHhG756U6KjHaLmXBqqpZ2iV4TJCtXSrpqH4Ss4q5sfo26cai3Wv9HKA2osCN7fASYzRwWU",
  "key16": "2bEaWR7V8GsYsuLGKRtM5tLbsV6joowxNXncKdUNeqqAV89jViPitoUKcm9ZqJjmst2QHkirSN6qbEQgdpmgLRRg",
  "key17": "5JqxLL5tvfKows7GrsSuoqZSYEh8jy2GwxPG7di4C5waZRCzuazJ7gqmvAtfiCdHFhK2WPJnC998fdHNykTPDS3S",
  "key18": "KVoDXHoQWaF5iuggG2vgqq5s5zsvbpXL4Sb6vW4syqE7wG6ehPoTRWjpaDnHpsjVoas3JwDYAdRjbzz9RYWgECa",
  "key19": "4wCm8cm4GJKPn8153MkZwaG69Sa5kxDTWiCRXGbWqy2xR2fxnZi5gmxPSGXxc4RxszC3r7RhnuzNuU6XyvGArYNS",
  "key20": "zWkjgFGZ7JzPPReHp7Lapsn6sAutLMEU2XF7QExnR3PSBudWrv3ZM7q6dyvV3FPdUXL5hWykoT5csfwDujz3hYP",
  "key21": "x3nUkv8v29H1Ggu4zFREdwUGYW5zEBQGj49RTMbuE6AqXFqs8W3yW3jWRAjnsPNUybAf2swwUSWpWhyF8rpHaL7",
  "key22": "5AVfgimz1gBdXnMdhmcoZPJ16xdxABV9PzKhwFSiaNYvWz8N6EVVzoNkaTw7Sgpx1qQwABKw257ZH2YetV5jrubz",
  "key23": "53A4XZdeHGT8qnxgEAQBMbHQcJZo2GszALzfdZo5fEzFGibBu5JZJny2nH8Hq6Fn6RFQTR9mn4vdVQUkLqtspXXE",
  "key24": "2uyMrjtEr8EhdeFHYJQqfSwi4J6t123MHeWGT9kkQ1wUwoy1Qw9D6D9jtT789ZbKXKAeWwSTUknEggsmp5o8tPQy",
  "key25": "5ouGcTVmnTYxPeS1zFjHqnzx3cLFEtZavTy7BGnQmjpGkZntXsQsmPvjY38nFEk1m9Zco8H9KFUJAVR2mjdetvUR",
  "key26": "4WRiKQZP1oiWVwC4nGgSjwP4RCzfyKHPSGNF6G3sJhSs8njZg8NVaHkHKbZ2N8kvdDkg6itHoZx1TZumo525phez",
  "key27": "4ojga78JxtpAmk42kSycVbZFXP88ssiE4Cz3VJk7sYLGyga5AsiJREGiEsoUSzQs4QdQ8Ebmi5ScjqizWiUSBsYB",
  "key28": "Y37dd8PLy7aYC57cRysPtNDqWXWERtCUBtFKmc4qHTn3A4S1aDwWHiQS4JbvXwX4X5eESaHuW6tXi7TXq4m7U1x",
  "key29": "WBCVc7VRochffgdJDpbJXiDQy4s71279zTYDQRV1KUyvcjFFsGwu9rchvpBXmpgCy7i5kPXZHZ5ypQz6kAiV9Hc",
  "key30": "NZaGJP2ANnfYjta8pTf78CSeA7Lu7pMPgA2RTwC1TGPBPhnU8VLxBSREJpYnjvGs2kCKCtRbCtJ8MiqHbWBuSYB",
  "key31": "c8rJ6bGHeJW2wX6EUtJLQNdUJeXJ1rwjw5p45RQVWfSYGrA9KQ8EJ6peCWosxGVqohwTfBdpK3Wyf2UriSd7eSB",
  "key32": "236ZNEjbSs9dJMXgN57p2Jaz6CyuKh234MKMHAYqDcnX4TCxJaGnKKRQTwdBP9UsbQJAnMhMEK3WEohP7YV92YAz",
  "key33": "4sgFkmCdpY8ASYRzfPXKAgwHXKJkScQQpMVBV2QBUdpePtnTxwNfUF9tady8uUdrV6DVfdWB3BX68UYjg57xUKUd",
  "key34": "3dQWpwdSFCSCBT2JYJdS7BQ84ANYatQX9yysy7tfuL2FZKLxhyAxdtwtWQYjp3qmwHgUBgWgVJk61aaAZYmksKGW",
  "key35": "5bEi9RZfAaUdc4tH6acqRvV9SkQC8Jg2Ga7AVQnoWSds6hpFrw1h6kYQCvmRMWVZ7m6BnVtCEJP67DnkcFZdNJKu",
  "key36": "5dST5oYPHcXM9Ta6ff8UK8TjGQteEtQxDdPyHG3XwEmSWqkZdkUBCzqTZyDQvFvubscn7BxabJGtQq1QTaYD2N9S",
  "key37": "2ZQ9thZbhBU4rEZm3vLBFiRnz6wgoUtMbCn8m3ft8zUcvVVqniSNHwuCu8vXckYmaTYRHoJvALQ9LZT3474HYy7",
  "key38": "5ca7WJheBEiiEAUJmkvveARivQmmDyf3RSZgxVtRptYfqyU9cqiHP4KZwBBVL2sC6fPU2Ns7WCAsayXSWBGYFjaN",
  "key39": "SSbqUyJxa85QkNuk1BtPC8Bp4ysR6aUbfSQutjbbHxyBrngauXfCcRXvALEjkWBcDTGHLErCXU7pjyFeWrCQzvk",
  "key40": "2Tmq4YzcW36SytHGtkjX9LjqZUmmWfwoVZtFJqm2E4w11Fwi1WVXGqu8JiGGST4nR67bfChcEiqAU96K2PJTESTr",
  "key41": "4ZJwk9rAovfHED3SPxtxg9zXLmgNTccaUjypg1EjEdwM8PT5wVcKr3spKRer97vqcWewb9WRwARFr3Cgx3zghAAP",
  "key42": "26mGJV6A12aTpZ5x7QpPDmhoEtGhQXa6ByvugS6C76YVP3SrR1iXJnL9ZvwfsLzGeWrSHUF5UVVoULZSXBm16fTs",
  "key43": "56siJbA69yycRgtENkJx4Lovecs7sjisV1u1bB43fTzhGLsCCJDfT3ZhfgTLU5bzyNbSU179FNBS7M4itxgLYrHv",
  "key44": "SDzvAyJGZ5JpGiaNNQKh5n3itwEq6XHG183Gwir1Y1mkP1sN77J7ZUBKvq7BomgevkDCP88NRuxBgkR44PNjWbj",
  "key45": "CQvqtoykiiKGCwC6a2RCKruMGBnHCrCCQceWxwWDSfdVw7UNNVhS5ktvFUrsuMZyFj311w1MJXhuJqnZsqCsPzv",
  "key46": "4TYaLFAGDvLLr69ZkLnwJF2yrs4JooqdX8QtEQJcZ7fzyq3qkYj4uan5uG75CvSvByM1aiHoWERgn4qwsdan34w1"
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
