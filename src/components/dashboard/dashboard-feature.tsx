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
    "4sbwF7xPHYC9XmvSfcxs8Z3r9rdsJH4WvvaHsnZgrGxHtt8GSYWUTEK8qesUNqZj69hqwPimbdprJfcDqtFvDfas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A1KGi7rjDhFidTCCnN4aSxSLwoyspWp3eQ6VqwWXoRrVQdWRQjeu1MMpLhrVL5oXB5Z3YJzKK45kMEWhS7b8cyh",
  "key1": "5o9Zew46Ld9TNBaaNnt3V2fGAhgBo7YyPz4c7V7seKUcZ9gZd2DH7TX3mjPoUM8SxhdzntuyJPFZvmpuEdYbjeef",
  "key2": "4YUCW2ocQyNN5QVfABfQ6EuUmN8AGCKYip97kuhMHe6ETPTyGKn15AYeChWXEsWctQrxJouhCLEcDrHnQY4kK7g2",
  "key3": "4mB3WgsXHMMrwvhwtPf1fAkigiAGd6KeqouWCJUpvUYKRPfRZcanEpSFrk95j1KiQXdTGYysk8LHETM29uWAy55h",
  "key4": "pnYz3hC9cC6d4WNi1PKoC67JRYp3Zg9usKZKvRKoAUNiUR5j4YFWTnxJ3VBabLUphgevcFXgfGWXxTxFuHRQFaz",
  "key5": "4WyAU8gNMNpdaHGd4xAqqDHPgxEhHut9vJ9HNJsATUyDekHaNzspRPCzCVuMmcDfa5tmu8tjjmbnFqreq39r4ooS",
  "key6": "5Mo5HnZt66gz2NqYxhVFvP91eXLproWK3EpcMADrNpHvHXuK2txUaJhnEBJaMYTNUBLh7GSLaoXRskBCk5zmXiYU",
  "key7": "FDhP4AmMRhHvQkNnvQbaQ2nofR4QKn6cvXGCxjdKf5EZrDe6onRQyb7FWL1bKs6LoGJ4vMvBJyTGQazVKiABed2",
  "key8": "Jb8xTziqSjrPf9vnJvTKDWSuHvvLdxoAZPTcc8CxXNQ89SczSFhAgvzQuFdahZypaw2hp3XsKrmeTinih5Xeskg",
  "key9": "4BLEHr69MKUPd9VSWAGy9dhMs5wU6Jrw94XsP6RXoF8Dp8wk6bzUeXVzm5F7ZyrAQhNz9PRbKeobp6kWefZH6Fmm",
  "key10": "54tR1hX8uYwLVDwGuJXa1AmTsvuXutvb5WdV2Dx3rz3oWL2KV9ZQCroJf44BjrhFCptTvy9dPR9KVQEZ53XHBVB2",
  "key11": "66KmcnfndQmGEgTYsQMkUhqkaFiLMmt1Ji3ZodRshUjcLrKEs28MYArLoriXrXDMEp7PEwW3keNbCnQbeixgzLbJ",
  "key12": "zsh98wf4bVBXWNWPN6V7EUjFtiFPta99VGMAr2RXn6JKWmkGNWuj1WVw9bapQZKmMhZmcnUkyKMLSVZGi7r4hpG",
  "key13": "2JAuNybds7nJg6MVzeyPBhXSkx1wUKzTX94SNf4ZUX4FMuDcHZ1ZwfWb3ao8iTfUGEPh72gqS6YhRPU1UCwqb9L7",
  "key14": "66esuickbdwmwivPbbg6HcFyiWL9UvgAWR812bK47djq2Swiu1EsnTWXU4TQD2A5DaVryn1N9fz3THJAwtdoUQQ8",
  "key15": "bWS6Z7BFjBQoLt4nz6qDYpRdqfeH1bzZzXJLFKyoax4e1jERFSmQR2AKH241gQ3Rn4yr8PCaQg7fSMnucds66uf",
  "key16": "3zsPUUSQPrszweeZ66fMFtRPtdRcoFrUhndsbaf3NMVUqbW7v4yVYkksq8WGj3bWDMD9g3JiT6maELqxvQcAFxvn",
  "key17": "3FzspZL1HScuxQJG5PdWZXb9prissS6Q1k94fUdfHg2ux469Mkw7uzh8JYHCrzy58UWHnnKCb3NM7TG6SrZKB5pE",
  "key18": "641SAY2xPP4bgXdspC6Lj4QGCE5ASLdNb4f3WPj6u7RqEj9d92cicFUgRu34jr2Lv6qMX5HXZCqqbY9xL8L8v3uu",
  "key19": "2Licpk1gjdpVFxgv5aS92QXiQePk16RkS4uTGgudyKnQdNxb8V6nLKvE8vv6NoZa4ihT2wKfZHz9LrQ3VxyFUk6J",
  "key20": "2Dukn6Z1KRmpnRgasgswVtacqbvBLEcjumgaUkzRGbMsZBRgB2pFYT2ZdKSE3SZ3QCkP5GCji5UCYgEZSBvHocyA",
  "key21": "4ENRxoYe2iKfY4dypEyEwESxvFiXmStYuP9utHALnUyuZHadXkNRFKZoUPXU7iugUBjeHnBCQpdMxcT9AMbmYinB",
  "key22": "5w7HQvt3HDPVQ9mFSURe4jVVu58FEENLGzEKWwneMqABuLnZLT7f6jDyP5pMaaAUcDaAqXDATwcNnUdqWZb9MhXu",
  "key23": "28peaJ37khtVvMkfDDyf4LSX1abVEFcxPKC8rrXfLEZb61FnDHMfCDwjzCiWu7UziKqjEkYt3jfRwJhHyAGmkK44",
  "key24": "3HDfADYDPppPU15jZW5nb6JWB1nkD1ft7arsZti5yDpCsLmNhBCC6CAqaBrRt7S8qR1jQf8anT886N54oMTa8xqb",
  "key25": "1Qdwu3ihHA6uDVUFZMumPRxDxjm8VWbMicNRz5zTGkaFvCaSbSBgjAPR8kyCEv66KZjPpzj8qbay2LDzQZT4jqd",
  "key26": "2Ay4gNKsM3sytY3Ly2zALad3e5oEEHzedWSCLzQ1GbAWq4wF2Scykav1nSRCcr2Ltkh89LPKs3yrgXnM3XhoT3cs",
  "key27": "5wLXJV6aUkeHcHv4VoWMR1xUMggjHt5xajMjbXpwWgtnJJAbwyaf448VuWQ9UQJhDPr9QCjiff3JM8Fj7Zn9GTNn",
  "key28": "61imeMuiF2u5HcVcaaiusuUYGqEX1bdGKYcyUVwUnrZUho442bcLi6PytcWi4G87jGzTa4zN6Fn3GPVLxJ6QAC5J",
  "key29": "N21VEC8Nh1KPuGkXXiQM7eyLHEnzhwq8i2saRvDCRxVAiZgA9poNqb9Mre1gfHg6UGuWo6PhP9mBWz2SyQZmL9A",
  "key30": "BSaTjb4TQchDTuEAzXLSfFJj9Fy8cT1HEP8wLyqCWZ7ZReywUsRKjewSw5EcomdZAncrXGSm6fkxvgvdDyNZLew",
  "key31": "35VeAaop978Tzhu1QVCw1udsKLgT5VNoVbaz29XtqGWA8UUQDShoPhNB3pyC1k84AA6kFFK2gmDADmZkgjFvdC98",
  "key32": "2D41rTpL3tmwYFXk3GWXtixMpn96HHMdN3FkUhJ3zLBiQs4iPgaPJKs9rEN3GqiVAz5TY1UZYhWUPdR5VpiaAnho",
  "key33": "1nkoPH7bsWBU76YhxnUAEEyWh5PaDgLwN3K23XEPa8Rx91iFqqnRZ6xCvwon7eigU8RRAUEMfysdrWJAbS4bitJ",
  "key34": "32YzSR9txYu1iutGheUZY5gkZGZAtezez9h85AMiqvPs2KARR2i8YEXQZQ5TxWTZ7CsXQe2cSdmEfTCoNmLF4KoG",
  "key35": "4fBhfn5Sd9Tnr9bn4UgzaSkbg2bsX5Hn5dVR1UgqhenycAMMHcws4MrjzU22TbcHbodcoe8pSbfKuQKZcudPyh6T",
  "key36": "4xfuhVyaAiPiBoRB1JuYuGFx5EEwUw4zr98PMc74SDahJV5PtgZeQ5P7f5XmDvvx2Bc1rgJnFRepvSQfDAXV5zvQ",
  "key37": "2nRktjP2QiJbmptYnbXD7FFHTVcUPJvcGjE92mBSqdsdNPSB9d2gYNQ493tTh8LDkKkMLoKCH1eAuUhEpb6ua2ci",
  "key38": "5bGmWrtiDenaQ4ChdZgBNvMK8iCoryAYRX479iW1fMSgvYpqS8jaGBY8kS4hUH1V19hvkqv4DLWF6frPoMzFzBHh",
  "key39": "2x584E5b96qmpFjXn9cDeAzpMLxkYqEbd2gePirEyzTAGrZZLb6fRhQh5DcMNLfju43HR91M61nrK2kLxkQ9pGMA",
  "key40": "nUMsPCTHbBaPBU7MKQZ5jMxJhhoK9A7ov3j9UKuaermtFtChzDAnahoAz9VUUcMDwEDyiZYcH5XLhdewvB5U8U9",
  "key41": "3cJHzg6jScyNMpCUbRJ9KbbkNT7XXC1YpmrPz6awj7DQELqox5Kj5aPJRmkwCWHdSuyfZe3PoDa7ZWZcwvWZhfhN",
  "key42": "UwZzcj58V6uRdUHZavzMArtXLDcrsRuwfzDNQ571w3k9NEJZnwPGXDoHWjJtvzV7Skk5gtR5DqKtkjWwNzBzf4t",
  "key43": "fYJk42fNuJQwGM9oGZeaM7qunGcVZLCqyv2rruc6NPTkptQpSqEuVSzGwPVSjX32RJegrgTrcSLXpe62Q6qqwhC",
  "key44": "5HXiek5gdasEZopK7LGjAZQDJaXuJvbfBNWmTQHFmCgkczHh4fNwE1bHDqLL3mfuqDWdJ64onpqNUhAbBWqDVcJd",
  "key45": "ryAHMCCyiK7uAQW8jxxsbHBxsFNbj2bc3GZ2HTcegFrS3EwahigYg1Vgiq1jnWeEQq5tiMKZrAJVxgPDVMMC8k3"
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
