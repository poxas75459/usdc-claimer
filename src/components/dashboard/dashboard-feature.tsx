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
    "34hC24SdCrPG79tLxBXWgYkTymwKPw3smCxMJvzt7j9ZXcJW4UUMwn1NX7jmBQDE2GnMvu8crpfcUfLUuR8JQXfj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24Pm3trZBiK84VqyYx2kgzPpCpnRKZ16DwEV27jcUuAXsmmE8B7kRKTyCa4o6eYfmC67xqDztPsDPruKjPRyfq3y",
  "key1": "58ZaGaNjvKZEAATcRBUetZi9VgaY868BKvY9CjiTYDZRdciGVwPZPYx4aa8JiVS9GbqzsfzLPuNFHr7n6Kttbk6d",
  "key2": "5kaszXJrCQSaPaQjm3NHTYKFChVBvVgVfWBgGBLiZQELVK9hNTYT8aMDTMSzMsNXW45YmD4qti7ez23smtSaxmZN",
  "key3": "2RPEuHqHgo4VFn2aUvcCfX3roRhAHMcFnQVQHhbVsYKAbnXjwTRqVcCLQ2Wu2aLwvxSMFg2PUyi1dV5ZXUnodvdS",
  "key4": "pfGrjfYaobDNjb6Dgc4EDwASjEicMoERtc2PDG3t9twY7feAQ5VQhqcsspfGf7kGWeDyPSpZy8MqhYzPaLEBdjA",
  "key5": "62xraY4Aeq7S7QQcEUWvFntpiaMCm18ANfa2ny6WpH9n22JQQjgkmhSP6oHvxnitMWwPDcVW9uoFV2x4KSf3ic97",
  "key6": "ntitFw6WUWHJB2qRYwDF5uHYZLwRHTRZRQ1wQp3e8D6eXKSaZNybdhFG4594PT51V92aAwptTm9vKRXNBvLZ53H",
  "key7": "592qodrF54vaNVJWasiXrTQenSXLKTdryqRGgwz8JL1rjhVijdjrQ7paDrxbj7bv2mm61WZgzNYTXJHiSAmMvF5V",
  "key8": "5YFfqoDWL9vdgh4JMnJKxqZYXakLiRX59iwoWkFBrxUPMHnDKYMoouXTcRCUyoLf35P38pbiZcdgRgidMpMp62wy",
  "key9": "5twk1VH7pQW2pS6HQUJ9gapkodS6mpRAfo7ApwiMnguM8C7RX3TPgXV28xzqwEgVyr4U7WSCvPibfwAbJxHaxtPv",
  "key10": "zfzfpTcj6dW8v8fznpffdCfTrrD8fiRxrwxg1hbTgfWoSvH3Pjz5jCAaip5xaQDa1ocRZYhB6g7VAQp1xRYyaMJ",
  "key11": "2EgZe2JGpbMthkpdLKFcTvB4Z4W28ZSQFMoCAAowfWC3eVrQ3hcQJRr7cxjMxHicHQWxnWf1D9YXeJm6P5CkywEs",
  "key12": "EE9cqrAy28KpfqKNTFxEEhsdJmTLfhzVCB6E5rvetxh6SE16sNb2peHBL9Ugxtv1gSkLVCFtKWpXAUVPjVzqGc8",
  "key13": "YFARBXqbot5cMqLe9tvD1ybXGQoMHpMxcBpvfypo3nzs83XUuWQjiGu77aGY9c1uuzGSTSzGctAgBbkwZ8cFCNn",
  "key14": "5YzEUGccgWaRAL4nqE2ackDcK64ifymfCNjjZEze5j3WDJkF2ESGg4WQZFogwF3uoo7fFX663ogjkMivtzsKuDCz",
  "key15": "2EqGbTUxDvpbexw9vpWANKczPP9Zt3uRhosxZceauwqAxArRexwMjWde3D2xVazGhqkTXpzBftQMbLq3HP2cTXer",
  "key16": "5bLhhGD7t1YxUGwpZZ9eUDsDH41FA4MWCseVtkHpo7zn49juZ6QMzgX6VbeVX3hpmZL1tpZexEoTGtNb7yZucMao",
  "key17": "fTygSC9gzQdCgbbd4HMLQ88AjU4rF2of4oEqdD9xFat11JU31jJANGC6CtJvbQy7Bdqye59hexCrAd7ckF6bZUQ",
  "key18": "2sri6GNtp7eTDUNZGYV1ukYUjK9mmuoGzM9AojQUcYq5TSgjRvkudb5aacvrqT7UimncbGzAPQYJg5H5mgHqrULE",
  "key19": "34wMpHvQw8jowcbYWgdfezR9oEqqmbe9Pj2e6favoatkefhWQLaV1Z2Cr8TRwPsPR9gLFcUywHeamFLVivWivrdY",
  "key20": "2c5k4rsu7Bfj2cPf1KDbBypxVFq2jHReNahqEvUvuoNWciAbTtNwBhUKdFGgQXEigR4Uehi98Kph1d4qFe1GqW1Y",
  "key21": "2DvaUNDk6k5rmKjYeWWA4NUpidczLxcsjJtuFWkK3AbHkHGxG9ArQyptQRBAShRW9b5wpPqm482ekSRkJ5HEZatx",
  "key22": "3SQWWUXWQiVhpBJtNbmMy6ixX6kM4itbL77GKWHd3dvbVm365ayfuCUtgqXeSfooa3WY9t57zeYYJ9GBNLhpZUnc",
  "key23": "32k8rQQB1m1KppUGZujHCLj4D7J2zQ5n49zCqHzQ1YaK3YxDfAzTojFyuTefadE5KBe2kRuEb62UwznzAVxUpTtc",
  "key24": "1wDVtfYEc5SPC4PdevvEXS3XpCw3gbqjPeSynnMDHEWeZmegD7jVgC3mMmbyRRY6A7A96ygMegTVrWCs9PXCaKh",
  "key25": "7UHkLHMjf6tW5Xr4f6rTYpE6GxbvFn9976zEYcDp6sNdYD1DSW1MfvnbKx35WWp4jyEnrQiX1CsVqh3UNsE678G",
  "key26": "4rPwJZPUb8Q5ukvHhE9j72RtdJdhpMETfVQW3mnBZq4NLJmaAKPRCRdjgszdKEcDNL6QuQPSY9XVbKokqYyR9kj7",
  "key27": "JhG88utQ9o9sjkXHXacbYpGSPi5Pszpc3CX8qCdJ8keStmUQqa7QPWoMX1c1ho2Gkby96gaMY3BG7PKtyVxSh7r",
  "key28": "4bNevsQmrhTvK6C7jjbR33NeDgWnyGVqLmANoAVUxAa2xQvAAWEZLbxrMYG9kNJkuQHa4ToKZwrvuwcqq2F1Q4gy",
  "key29": "5nBqoSfAQvbn1eG2Hy9iMdbkx4pp5i7TWc8hZPkcH7xxZqpwaCfXiw9Y7LYfFcxAmSE4CzEQoLzcFRxepei8M7gY",
  "key30": "3SGD9rqqKaEWSxyKkZeCP9yH3crJgFTAUgcM7tAfJaZ1BPcZdL8sbGbjcX1DZ5vkKnQctjv4WjTx4B98VjwGa8FL",
  "key31": "5evuVATCxT273cTWnu6sdZRac1JxxENDGxJ1NzFkETBo2aSgUxvwi4jBTskB8mJS5XHhNg79V5RboRUEiVFGBSFq",
  "key32": "26XyNWuVoiQWmzo1MgUAPF6hAHJ3LZcLqDZgTWzd3XUyJe324DDvJrSdTnFG6nYwrZ2UdGV6ouVznAwonYKvx6T3",
  "key33": "4U4BkErZZeW2P8o1ezCyrHhg2hDE8MRRGrPijbKBjwt6Kp5JyYxGNsMUr7ND69Ymz6jmqmqCFWSMRWskpy8EQMVW",
  "key34": "62N6Mgpp7Fdi36mAJwYEXcocakS4KrLjBHmG6heYzFVwwTmjgJ2LszfhsjbRRqPj3YGQY54yAdBU8kaEWQgAwun",
  "key35": "326KLLJkyqT6h7YyeaH5WNBxdgek7UgxKV6oY65JPXN6gSCLTdcLZvVVkzUeTT7ADjebJXHH36FNztpvPgiZfq1p",
  "key36": "5KqSvj4f8R3B9iggFxWAupuWJ37QP7jJTh5Tbz6Ltte14sNp42AQy5EHEFbQbgKrBgNSn9ztcSxdW8NSsgRL5ncB",
  "key37": "5AXYNPPnXht9VUcMbkH68pmAGGemQVmVKpznRQmcAnGMHMXDQHDY7qohgX9H8nJWdGop1xNHqS2GRhhKYzvgMdGA",
  "key38": "gzZGRYfb1XvANyZB4kkw1k9wsVRF4hQBt9PCsx6ioPJSDo9HEikTHYic5qMXYJeHx1oKRwkc2LAXTBhDHibGHXj",
  "key39": "3q6Z8ijqMoyFLkiPKUhwpYti4bvaiWY5eMao6ASsfx3uDY5hJX7fugvufX2aE3BCdHeFNK5TW1i4PYnGvmzaPDrC",
  "key40": "3QD99BpAT9FKTruNzGqjGEiQX6vfjd1HSaS5SH3pK4provhT3uJ83KCJuKktxWjemKa4PoVJKc1Q8VNcPwzpUiKb",
  "key41": "2tPtPptaBnAYTqWUFMk3TsKkSaH6F4i8J7UgdaNaefyxG23HKiNk1YF3wnHgye871WLromQXbdh4ng3iinP9rvzi",
  "key42": "ehnAGez1Ue4EfLbPc5TsrFJXU62Qdyx8E5tjt6TaCkHinTohYtamgH7bVeFkaj6iCgC9868XRTXPhxh1iRLZix8",
  "key43": "JW9gS9SQbvRJAsKjnYvkbsfd155GGt5WmYTD8BFj38oyZMgRVaUCfH46cEQzaN5ShnbqsRTk6W7erGEqmUUtxti",
  "key44": "5S6o3ocf5rnBWEXiBHcByY3BZdL171QoijFRmRjyEmyxehUpgpQJZvCHDuKdmiDtGSimPSvQm8hsuVoQJNg4LqRj",
  "key45": "3nvCX4QBnFbRxLKSFdAhSLGBby8j9hsXqDgXMANc9kcuv4XXN1QiSHGq9qj3eGPSgp8UATK4JUpsV4ZvL8EW91HP",
  "key46": "3Ltkah3LNefCNyaNWpDSsYFaMvjU1178nRA9DP8SenAEkhmm2qeJbw3cLPFJ5SwSeb8RHdo2Bdp33ojoXaaoeob4"
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
