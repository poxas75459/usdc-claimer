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
    "hyopjYjhqyUBtEau3wSj7CKYRnufdcuvqcXrEvK9jHTm5E21JodibXoZ1kfQhDZkuU1QBA4noT3BUuSrVNV3kER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ccMPz1XbPyJdXK7iiGgrYiRk6hyVUbzkUsw2ySUA19WxU95Fjn35TwqUHFzV17FpBHTcyAVnD4YwMot9FkpdpNZ",
  "key1": "54u7WaKLLFxwutSMv3jDYPrG6JMPXE1LLNmKnRcF2wjVx6vvsG2Fs7ufhcde2zfgmjsZBZFC9bcuaJA1XuKK2rmu",
  "key2": "4pUrRuxExBN7ZrZ7V9EPNdF5ZmqKaxCUyCz8WKHpYcN7KeJWYciyg6TeVGEGT8UhnGMVYbTK7mEv6xhks4BoZwrX",
  "key3": "5CZ4LWt8hbPJFWA53jSCV6tEixQYXttfsnTnCr794kCbtx2mbqPSANntNnHBUzeUdwTsoTU6A5GQF5nVNaBmXrC5",
  "key4": "LDvrufTyBbRLuyzF9Y247do3KFyoFDcvme9LpwYn4oeDqDbSe3JF6SFrDiB6FZMQVC1fP4wTdzJ3VE8U9ejNnFE",
  "key5": "4CC8jRWGMgpJdG6S7R9egKPsKf1yYoNpt4dRHgar3vhDkfQ8VSf22JQ6p4G8Vx2CUVsinKsFjK4hcdfcvuoJwNou",
  "key6": "qXgpcp56uTE6hWAVfy7ggJJJ5cZud93vQF8Wt8BBcovSv626cxrw62p1JSYcxdBsN4QmCuDgcVbNqcyEWJbfBKs",
  "key7": "4FF178XLhc8GjFj3YG98zFRTz3A1rkpxisXYQ3hHvsceguW1wLGSzMt3q9AHeP9bpCAc1HErF8GZqqCFKF45hVuC",
  "key8": "4hcXcwwCis4ZYTTjkTboihtDG9mwkPyXVPfuhiUtrRZSRzMNrSGKZtykQvrcR8afceoeaSgbkZ7DdymMbn6Hq2XM",
  "key9": "C6qJebagKQz2vYeCfTQjpobhJ8mebqq6PA1sZLi44rUwR8xkfjFi32Hsxq3G2UfcD3G6kuXT33sHZjbitpkiKRT",
  "key10": "4b8XNqp6Z1Avk6KLhbkyXTiueqRSt66FzvsgMRWwMecH1VmLEbzKstLhocDWMbnjGdeG5zTVZp31URHm9ZKgygk9",
  "key11": "4Z181WVZxVAsaH9pxHN5snM6L5kwA5jXZbV8oxwDoUqkcrv41mC2Ev7RPSvhr1mKo7zFMb3hc7XZh3y8dtLHwJfN",
  "key12": "G7souhvdDs99dPNbr8rjwLbviUXdumHUo3XStKJF1gArYZyvDoFX6gP2vzVTZJizKSedeL2R7JkJZZq4zWeqQbt",
  "key13": "45r3rdZA9DsCPuafsBh4b7BnUtiXUbxuE9Zsrew4S6aH5gcQSuS8svyRhcjT6GBdDQiqi54H1iFfJJZpScKndqtH",
  "key14": "irTfUBdxVRGBVdoyrW3zGwCb2eJpDyFcCHrZxxSnCYeugdFnzjQjvxHz18bLygtMu6o7qEU8H428XrgHEYj6Kv3",
  "key15": "64pGwXUpjCoQTo4mJJTTNiJ9DW156SMAcstKiaPuKKR6At4KmWokrnCHLzteVE3u9Ry6CzrcdApQAnQRu4cLMucU",
  "key16": "2stRuq3ZxFQvYRcMNjgBMdjugRxMtdgBfmynfTNbzxgwtdb3eUfbgMYmZdY6L7ZiqzotsNjyxEyC6Z7pRfmJgz9K",
  "key17": "2YQR7RXpW9KhVLz92EuaktoDrWukGrMMeHh6AZMCebLqUwGMnT75LXa9kScH86Zt9hZ5hMfKipApm6DZHWeerAQp",
  "key18": "Tg33mzQRds3fpzmGoGX7ZbsHvd4DvFpyesnQdVHXLafWgavRD3nsjHcETq6Mj3xuaGLrgJQgK7NsLPt3QHe7Szn",
  "key19": "658Y8Y8f4pM6JAaAtorFx6NUsJ1qikMVE5jgWRzgTgyQyK95Z3Eo2e7dWs6HKkVgB24DEfxWY9Yfi6tCjJYvxcUi",
  "key20": "3mW6zhxYqDx2z8fWRcsm2N2w4i1h8KKzWM6n9WpSK1erCPu3bvpR8adkinPNn8WZC1TqZpxELyovTExEokMPJC27",
  "key21": "3U3rkGMmC6dSFAFtUECwg3cJVy56prBcMEfemQogCoCUyNKksxjSbzMb3d3MGikKwrzSvC4sghbACPuBqreJH3oK",
  "key22": "z8zBBgGZTskeEf6jNqWDZPcBfujkGBuatQd6Pa5aaHQgMwkw5wAWkHYiNsYHRqh6F7NthGKNTBkBDUP9U6z6bak",
  "key23": "3g6a3YUPbDNT8jCPDm9WH8UAEobPg8sQEemgvMXaCtKRGYAMTyzryKeD6YAeiQyVi4jEZazqtEzGxyuSvWLePfYj",
  "key24": "4H3tfVMPrJHz8nqmEufDzZGQTNTMqbVh12NHCxVKY2M6yiRckdGxiS5h7k7bzRMTNdztAwKucU5RHXKyGS9xmjzr",
  "key25": "2qRJxe41B1KcfJg7ARzVAQHna7Vo3ADfbKTaCUKU5knbrzmR819HzNTaGiRca6NZnUbDXtJ6ndRMYJxniXuzpwBE",
  "key26": "5UUrezVQxD4AVgaCHXZn6NJ6Aq272TFdyQPqRPY6JCsxZ1gVouBG7SiyXJHmPw8ypp5hGNq6MDiZy91UQYA4pZTb",
  "key27": "2APogww2DxemBUabRm2J3vE4s1Gry31tqCNNSMD7vz3fn4Pxm6pc4Co4iJEjJJguViDjnoxXiMYr9qqdABceLKMo",
  "key28": "31sa5MtyvUH6qK7xd8t4Rxb8JUKRg538LAC4XBjEnbLdREWdNZmrDyrA83Tz25UNAYpntmpTywZLmySbiCYxoqUk",
  "key29": "4C4MwRWm1ymjQtWDpRgQAKvN8dFdKhdAY4CS1f8vXmed279SdDXEYj8hG44qP6RtiLATGbf7KW4CEtbwXQCFhzpy",
  "key30": "5Paw1aipcGLeiT9RroK9wpBBhCHFCnhaJBBR38h6LKWkjcex929vE4ZH2Zi3fbEywpx34ZZjNkcRkPs4dVz5KxFc",
  "key31": "icnwS4YNKdZEVkDrRitpeuH1HAxeECX1np478xuU5XgBZRKDxj6JcWqzQA9KTu7RS15hgPqGjCJS6XQV6Wq8syM",
  "key32": "3QkSQVcmwAqn4YyEUa1nQK2i9wwaqqakdTu5tqzfU467cXLdbHcymPSaqArkUqh8PoJNQSaaymFB2pH5ag1Af7bb",
  "key33": "4Ny8RtpuFZDC1dHCg7LP9qGSopYkjbND5jScTZYLDMVgH8HZDJUPcu3jN7RejwjbDo9DVRh6v6u4XY15ryLyvLSs",
  "key34": "JBQLkd64Rm5pSvjWf3oCRtaesYCohqoP8dVSsXRthryQwVY4BzRTDxuM5q1DpfH8o9bShHCMAk2FVZ9VsHEtar7",
  "key35": "2shymetGVf6vXHcVGyVVtbcuR9cbd2BKV7rTMdWprq3GzGZTFwAx6TiPd3HQfBBnjRFgMyK4e3UK5sTMcK3U43XZ",
  "key36": "2xBXz5XVcKeudkYmCTAxNSCVF2t6zgRCaJtg69NpCZsMY6YerxkzLraahiQC6W6Dj3oTQpNCyaEHQPYeURehYGLB",
  "key37": "5jSK5Ttu9BxUEuupezNNj3sSQyCe5nSaH5URh5ooAi1NmHrRX3c6tPm39U68nxZybPu9j7kjDtVGeba66V3rtBGw",
  "key38": "3zyhDGJhHqApt1vEDXPy6MQedN67PfyyqyG2pFBtfL38yoVzFMVQd73BP7BiiHnRWUFMfRtbCtSLnxe1xPLrtRbM",
  "key39": "A6GLgAnVMRdMU67LBBADZKFsFj7VCu4GkGyGciW9FFKAb4tR6mvjBNTYS2haown3W3GP2BUmgTvKJ4bhy4NhqwE",
  "key40": "31kuBUpnbaakpZ2f8qEdTueP8VkegoD5M6UTBHvfiY2GZLBFMhNb5WWnXyiKCj6KVJL4vwRZUsSf2xmbPXhD3sjN",
  "key41": "2UcWazmHiueQ5PqD7Kjv6sBvUcgWmVfQTSiuiVqF4WE1HaGeHBg4icPWGJga1oE1o8QjpznbjFQVrgZkCZC6sJJi",
  "key42": "3UsHa88XcmQHfXYc31kQbJLrWwbptHUMpRuhyzjWYVNsddeNsi92pMzWmBdy6nyf37HeuMP97EpQJM5XmMakbY48",
  "key43": "3huwW1FRq5TwTLKDS41Na3sU4tE7MNwufz7p6LYxXgBXZEm5xaRX6RVCn49UhW26Y2DvkdqR9LtgaaopokQcz4Vz",
  "key44": "2gv4pJQHadR1iW4Wpnvet17wqQkgSsvhhLR6fXgBHwBmkcYVJLmapNYZcdwZhxffWf2tZbfjmcuEehE1RVq1vfht"
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
