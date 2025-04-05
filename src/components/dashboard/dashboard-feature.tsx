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
    "3aD8k3QofqrQBNnmNTcSwyWn5A2r1gqEsZXGooFtpZuYiAxND1ntUTNGrmdn4VwQD77K8M7LAZcqQyusbnzouRMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p5RSGvkM1GypuGm2zoMtAS4vpFndVbB99T4ApSGyht9fijYTat2beG2ms9QuJnwEU4AvDjvgNw5WaVvGHp4mSvx",
  "key1": "2tsKGy2qAEyWzn4EFiMtV57t7DatJtgoLYxYh3exqvTJjjjsdPcVQxJxCJ8Y8Na41SVn8vLuzpEfJgQxXM3pB4xR",
  "key2": "2Tpy6Rsq9tZBZonTc1QK3DWaidFiK6Nv5WEdKHis3Uzs4ReJwakV78xqL2242UWrodj6kyNsicHwXqq19rbSyy2B",
  "key3": "5vRHnaqW8qCZQWu4Zrmd5sNYShxPn8EP4ZThUy7UE1sZmA7ZxbvfVZwNi3oQZTZbghUDYZ8753n7xX3hRGUoHSK6",
  "key4": "21WrWbET3FE55Hi7VuAGbzC3pJBW5A69yi8uH3NV6FsCdfBkL8aL2wP4aFmHRTPuSR6jLd3E1bmqR3uhzEoVufDG",
  "key5": "3ki5iToctwnWbN9Z8rLRtqHWj1u9iVZirpJnza8vLkpEBxKBstUrydv5eppGWJti9ZpM7wEHNXNfTMrKRqzBeQyS",
  "key6": "CMsRWwS4GX7Y4QmmoMM6wTdCdG3t1WbiCLYnmDgi5wnWWa3sJozRJ9AGMMLWXUv12fEMtVSZkW4HNkaBWqW5hQD",
  "key7": "5G8YtU3TsC5ExuR3S2WMyH3GGxChPzBjrxfweg9GQ4oafZApV8veXZ5c92AiJCCTkgMigNMCurn59Dg8rxc171ZE",
  "key8": "4S9rLF3dvorNJ3KSv66U9UbwYwfjZTEt6N6CcmYowwCzbHjBQiD6PBw1XbQUCdMsaW8frmjJrCTcSMqr7BCYEkKq",
  "key9": "ETwUBcGXrhKrb2pYayFLqy8JGdPtmrZqJWdPWa28NShod5idaKp2bAmwJDsXWWDfhrTfMq4xjDEeme6NCtffobz",
  "key10": "22HSXx97FQEA5PyUbZ8yGBTW1g2aSN8xQFkfZPMyKoDGoGeoRYzzSQepzJdHR8c2cD6di1REfwWcHjGz6AfX5WuG",
  "key11": "3QXCWLRivTxyyQzszgxu6kmttVJmjc2k5s6gL5pjvvAZqCwqBTaG2My94FbioCsACdfqWRcZg6BuEtwqFV7J4XhM",
  "key12": "2D4PcxF9iGRhq3wGDJmthp4SNAFQw9ZxA1T13wGYRXhnESGMRhBCLKbo3mYed6J2seoSLkHCbXuTjDbvHaLKtjZn",
  "key13": "3SQSZPx7oNE94MVK3LLpmKmNHZAFjUdQQaYrN7KyWh9rWrffo8bRP4v2t6kQEu1V7EKpin468sPcWWLfgAUXZ5Vn",
  "key14": "vrd1je5tL87Y1WAZCnXr8zXi1wbNWenrvuoHuStzqtLkCtNxAqdM6Pijp74BtZYw2BeiuhdYHdcuG7CH2VqT4hm",
  "key15": "5WJkjtu3JHHVJ82JWUU1CGCmLJgX1xigyXiZQcmHoJfR4XcVMrftahRkMEP8Qts14GuRF2bv7ArwPcbt51HH4we3",
  "key16": "ZDfgBhDtTmSmY4ePvyH3QoYPqNs82J8KUKqmjGh8ojxvSgxJVME5P3LYGGdBiNNfrrpABhy6eq54Dd9N1XnmvSk",
  "key17": "3658CHQtePXTJyknE5my7QmLcS4aHMHyzwb3agyhNbUeX68hdjsQXfMDo3Em1r7tsy3SbQbaeRvJLsdosdam8WYn",
  "key18": "5SZtcztHkgeDz8iq317mY3GzYAnfuBaxRsP4UvLktwXK6qHYqCfJ7bZmNFLLY2dLMqU4U6zpDYGbNEk44qbvEJpp",
  "key19": "pABiE72BMBGF48Y4MQ75p8TG7Y2f6E9PrKrHzkahMahP6T7WGLTLmymsZj2vWzgN9BeMgVw8MbPvnC8yauQ7qJp",
  "key20": "3YWsMoi7eKC8yfVZG8UUAziFVc9hN4puUNf1hrSRWKYDvtaUKZh3XV3ByUkua2ki4HCpBtvM6Hm5P3ejzPhNsx9p",
  "key21": "3GPe1QNkwJcqdUydGZZyRXYE3Yqp7MwE8PbbnNDnwfxpWCEtanncetAV2jUdPELfo6c9RW3qvmorxiWQiWZKTBCo",
  "key22": "4WmNXzwAN1dUiZZpyWsgbFv4P5XpTmp9AQNTbkVqTeuQAMYZozk2siXanLJBSoPAvhB8iPEVM961ybKEeTwZL3at",
  "key23": "3uSUJFqfUMLE1ChuogHGRg3HXxQhp7vHxVm4m55L9vzKXv3DoT1jGZGyH9fWVfaiDzBohSEzNY82qsKsfzkQbVaq",
  "key24": "3SiJbJBQVnCVphMWXReWE816iL2Ybtxqdx4GgcvUvR5HT9MGA7o56awhVCuXfph9seKtne72f4UXdXhbhXeJguSr",
  "key25": "4LNu49D26m6Ru89Dok4BY6h48j4RpbdBbRUvormSBAnE5cKiHTq6Kg6nwsyMdKi9yFLsbWW2xGesC18gb1WLhKxr",
  "key26": "5WNuVLUpTNSFri4bGMLVQiSWzCmruEXT3qToxSCiB921W12oHkA8yPrV65AgUDtvi6AvwqHm8qmnhMDaJg6XDqpC",
  "key27": "2cnSuDTXu2eFLVdXn2cdia5NeiTEqWjmzcNfQ69K4Wcqw55jTEgF5RjTXfisLbf8AuDZhTdC4XhtWkhSLh9NXVsP",
  "key28": "5NFvuQxv4WB6m4NTrfA4o74ujcDrhxUxKp2VT2bbcrDXYzuP2XauM2xihPbF18KH36iKSarV4NUsTq5D2ndhkCA3",
  "key29": "5BdbeAW8fu8AdmzCmBy2omR4BeDPRD4pw7znMpHdf5Phd8RavokG1zPbfRr6U1gZwUYp9gU3LoJEJwmtNxjLXrBX",
  "key30": "2tDHs5Vwn8qERoWB7KQdkcX1QocYhTKZAtnBjog43bRXEfKY7hx8kJmpNGhbQMepY7DEQhvmVdZgX9JxpMkmidfp",
  "key31": "K63LiNrgqadZ7oudjSq2tNXmV9QNRwv4CmcY6oQu9By4XS1KpceLKUZ7CzygC4fujfKAAQevBAiMULw3X6MoB8u",
  "key32": "4PSgStEjcNaUdoUuB9eLGTs33rfHdWJhWSiPbdttzt73hfHEw7pxx4PaJtwE3zppQNzJXsDZRJVCjdmGVGADs6st",
  "key33": "52HZrZ4GbK6zkhk4rihASkdQXPfw9G8mfcH4vsuaXbwSRevSPRmTqUoZA9bckzgstQGsum5kFJso79o5x5N6R3t1",
  "key34": "wXeUYopLtfyJ6sGkP6JKZFGDQPXwHRLZx2VRRD9mY7am1BefJ4tfGocSZS1ufGN8aMJH6dTZGpzDEWz6GkuAze2",
  "key35": "dXrcAufjkE6tbQWdwzxd15mr8XcPawG776nrjPNvziWJTqsetUncMwadJgP1UXFUyddmXwKmXt2bpmxiScfxbnw",
  "key36": "49aC2tNUme7ECYj9quTqxui1S5hDe8uaiMF5C9WZX2j1xTj2qY2HbunPAtjuyabx3S4Xg1AyAvH3W2DQ4MQzCfcX",
  "key37": "2jomfyDk6W135iFNbp14eHeUwDANZEskubYUyn7WKjzZVcRUVgqMELZeFutKjDckFMBtDD58iSxxZjFp6CoaUETQ",
  "key38": "3tp6gwWR2NyhPZCBW9b8c7CLrvfkG1QU3zTuixQz6v2SfpiEdub5tRBHkqz2n5f6xsmVKznFBpoMkH8dMey7bYUn"
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
