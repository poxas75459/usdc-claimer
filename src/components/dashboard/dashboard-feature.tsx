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
    "BRzYMmrr9xaLLNXgECCJwVJEwXmXSSKwUwsno7bYyf5TqW3ZDGigmZxR3GyT6Jk2Ar8wxA8UFueqeMjr8vfPzWr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gJTbdTtPG4hCNVGfw97sfDLoB9Dib1ZYQLizbYAV9tKREhM8JPRta3oK3CPJFxhsEGXad32KYQSGd6dh2aKkqJu",
  "key1": "1sH3joYL6fv7ZxEyVpAtZAnRY8TZVj6CLzZfke575v6AyNsQimdwKHmwcAPVsJh2FNmzhiXiJwH4JiZP7ar4di7",
  "key2": "49qGyik91xMCMi4nzJ49eFy8SCM42PuEqT2wNqREygb6b6MsLwUKD48hVrh2SP1qo4EMDV62P31SKVvq2LVCUqED",
  "key3": "67R9hjyHPr6LQFJ83dTfAYczgKy6BYKjrLYoRSiUnzk1STNhVA6ivJvPxC6Z7scKQRapVSaRZHDNCCjfch4feEhR",
  "key4": "4adaiN3mhS1fu83ctsJfNDa1vkhemJPjQp4Qj7HLrifdzGFbgcn4hzhFoT82xuWKfzeX8K11xNhmsB5sQjJMACHq",
  "key5": "3gs6mzAnda8XpuVSibxyrSwJmLLozxtwwhcpSqRmAXfP66NceXuqQ5AgTC5piB5DdXtmJNQw9vwZPcCQc97PLNbe",
  "key6": "5eEtP91S6HRLrHohyzAW6KRubsZaQZuCJvXQ6jVK7KMpUYZpQBVm4yAMmsBHpcB3upVPQxtJYZV91anciUisQddL",
  "key7": "qDZ5pbJL6ZWY7xyRoWSncZVyCvA23XyfWwBzECKy9SmmcperMWeFcftzdquLCkuyaG6Cd6QYBguNFeB3quq82LN",
  "key8": "4LwN6qPqbeNAfLi9xYiWK4wCwaD4T5JaX84epD72h8hE7uyuVwScUbieYyFx8ykSShpCn7cGbVuKWK4He9aLjw65",
  "key9": "2aWDkfKDKWy4qzan5jUWNzPkaaUumZebtC6ty5PeG7PKjtuBAs8MdtkDu2vnYnuUMX5yzs8cNVmLLtREttMQiMRp",
  "key10": "9XJJqhF2GnihpmcCD5T3Fuf2SiRs6DsN8f7PqkE8VtMhNRbRDv4bkMr4uMzrVyFC4edEVrEpqDqPaQiJNZsezHC",
  "key11": "2aARFYsqBMxxyUxqcx7HBEwCR232u3YDFM6CnYhusPTijXEvVdKfxYF5QEJK1xm6xK1CZ7oDXmgXC8WtuiRMEoNf",
  "key12": "61t2VRwZWjSwAexG84WEK2GbMb8xSTWX76gWMmi3BX4fcriiw4YrzVxUFnBrRjAY9VWkHQwEs3gdMYJBeHXB6duB",
  "key13": "3Tz7eJ2WFxSSXJMnG3Jzu7CawXKRLGRvZQmM8YBR3SHbzqM9hWHez7Yvd3gKu9f4en65P8MMuo48Tjye9k22ZgHZ",
  "key14": "9nKCPT5hSKDscCL8KzEZo3fzEWzAGXvKfRS3QEnMLcrXhUong4kENsQ6njR4bq4Psag2bhHedRbMaqy6vuwxJ2S",
  "key15": "2kvZQaMWAiny9mpGEKw56qzcTroh11qfxg9L9ML6mQFeiQMwW84UQD61aHnQz941fDQ3eATrQkqGEbUCi6noQqpP",
  "key16": "2RQza8K78nhHsxrBUZjmuu6YxCem1USi8BNzALnxa6q1TCLGa3xHahizG5p24RcfsHV8Q18kqNjEgDppM2cXutfV",
  "key17": "TVJQtpJL7kj69P57yoaq5X5fvkgjeE8aiWPKxG2Ts67JtqUqzp6vFYy6LRVzAMkM88bfWPTm3aHsL6UHA41b5Dh",
  "key18": "FsuA9aZ1xcM5aPN4mFJzpEW7K6LZ5PrYBNRxVHfZG11L4YyVBrg6S2hxjpiTqwiF49NarHxNowuuT8umkRAsARW",
  "key19": "2nriStbb9HRfSsKAspw4xJTWMxFtYEbhj7xNmsf4bEGSJJs5C2M61nH8mGCgkvjpLtMFxvWRsxffJSrpz4weAiYb",
  "key20": "usVoaykHNEXpBE3NGi6sgKmaMwmWZwQPAP7RJhJpQytPSdX78jMMkWv8yPDotJJKYG1SJfxdgP5ehhZrZ8iL3cR",
  "key21": "5C7ReHp3Vq5258qMjSjSiH98Dg9mNhquJBbLgThH3qb6pMHvS4fYA6nmcRdNNrhTvWayPhe8Boto1z2pfRZk9oD4",
  "key22": "2ymhP6BbsyRHaBk2DAxRUB8BC9mjYzQToRrfJCkyWpMkvmuJWoZJzX1FcX42E19jZHkEYHN1d24G7S6ciHH1NSLw",
  "key23": "3vN3ZnWoQduyGsUgQtshoiepLkvczcXZGuie6LR3Nx7pyDtAxKqSkYzJd6BvnkaAyiSJo7gcoYqg8ewq9uJ9WUo5",
  "key24": "2APwy5wbJj7uuAJ2AB9k9REbJZ2WMGfFd4J8qJpVSBXfLiVpYNeTotrNuZd3xU9DiE6A3HJCvNZPwBLwQvexZaeK",
  "key25": "3QSpCbBzGFeXoCzXvzsgHRjb5HViGaxJhpCvUabkmCphZwgz7j1V3jXKjpjPBkj9RX9XHX45Kmjcd4L4nPbV11g9",
  "key26": "3TE2JfSErFhSRVyLViXp8D8MHLJz3iFKkF2TuZXLKWWYt4M3w6Mmcz7waq55WK8aGoim65p5hnyRyGAV32FGRkU2",
  "key27": "3jKG5WwjjrbwfQjdRy15pR59Nqjk4rPyc8b9Yt1KxtBxdzkYu53MPK4trjKrJ4mEniTFEatDFWCU7yNLbi22E3qH",
  "key28": "3G4v8iUYmnpqnFKr8rL8KC6y55kxe1Ng3YuGtUmJQ5RdKtGkspapartaxgP2sewkPvJ5NPn9jYvgS8jvZqq4EctF",
  "key29": "4xMcxsTHdCAQ3tHGarcUexAPrQ8DD7nzVoXVEenuWr6jTZJoCWX5YKP1n6kQoi4JztLgLq8qEUxLr2WargK8CpNe",
  "key30": "4KaCmagGPLUtMVmVKx8BLoRNE8RsqJpREAS9ZUwFyk7aTffDMMrjsHhfYKunXjfnAFQm7hVq1GYPmuitCxi6xoqa",
  "key31": "5RdgAn9dKJLnUN9t2uRzRhFjEXPbL2fgAa8ER5FicwjJAaWJBDp5qCyQhPmubjhqKpdtCNaZHbESjLqS2gScW83e",
  "key32": "5N6X5iT8tWnbR4qCANZXE8iX94q9wnKT2YcbC7vVfqcqisX931cQPLTnX5Rvqvson4wgucagUrY3steRNb5S5yMv",
  "key33": "2DuWtez89KBHBt1rQEdaa3zWy4UixxfdEVwAumSKvCW2Z1RRzMnyW2PEmo8qhh2Jbn8PNp8bGBY23imqXbfGjZy7",
  "key34": "mnMjBCUPZZmGpKFzWbXsr2HuXWjTGwb8WBxmi756VM5mKxw3uaNWBooT9SkDm82ZR66qwgDfUFE6EZySDrZhTAJ",
  "key35": "1218G68tnAZpEvHyAriEn5qd9zp3eTPLEYorMHZo4K1nZJtp1k7tbUWYz229P9eC47qkuPAU3pJCmkpiiApegCwi",
  "key36": "2h3tcXanJwt536kTpEbTtHeQjzvPB6rgQxuoBsUaU78BbvvkNAmJeZXPQq2qxE596diWEcFvKfBsWavjZtRmsfjp",
  "key37": "4GAZSvpxKEwKU55NeVwF9v1wbcTptAZr8N9gQ7hXEhmQy7PBY9hndBej99qApgoJvQ6Tvuog4zgUAonvFQqfnwu5",
  "key38": "2AHTH5XZt5esWqrLhMRCZU61zY9ssvtj64JLVbhLdMhy4YVUDGrkpsAGcJfmDuK2QS1vccj2zpRXBKj31k2QFXtJ",
  "key39": "2TsptBeTUBc6rHrAXzGW4VQWYJrh315xUoG5k1VonQFwfzeQpZvHQ7TZ7igccZiLgcDr9S18L8tWnqDTpifaJvAn"
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
