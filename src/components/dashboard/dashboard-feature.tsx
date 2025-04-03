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
    "WT4QqM6nkD3XmZyV2YTU7D3gCU2ZPSCj1NHYfCGJF68exm1gR7VnQoyirBWoW81omNSiSYjbZ2edgnUnxkNk2AE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5hHCSk7K6uUmLE4uAHmC5bYVYrS5S1i7uBQ8GWfrbMEvrpnbq33GMWMPbubjZ3cVasAXKVtNCyPmvirZ2fE2z1Fq",
  "key1": "5jYapA7D8fVnFieB5XSVbipUfdcvu1mTkxYbwjiXLxY7Ycs97tP15tPVW5rybRsisRWgj8ULvanqowfBVynCfA61",
  "key2": "3Hsgyzw3AesTsLbqginCawSSd9gyHWvwrfnZqp5C9gQNF7uH9z6NREb3z2ZXZ1xFsoFzWFRomBjhRM9MBcTxGaTu",
  "key3": "3x7Na3L4DtM5dufyv3s1UQ9kRTvHZMPaxpmYxHETZ4ptwNQLEd3HcatK5czbDdBzu3M2hzS1AbR6B5sejfejSLTv",
  "key4": "5JmTifm58wjHFQw1vWjAz25Q6GeTD2Cg8U1mgb4NyiHdzAn48usvUARigz2ESPw5xZ3sZrf1SmMgQ7LR9FZcTd6W",
  "key5": "5cJLutNBKe6JBAdqPrW8JJ2cHMJ9oFg5odmivbHHiUdurmXKs1ZQv1FYeW9BEKbSH18RSFxeC9XK99qcXZup7BQt",
  "key6": "3y1YKdkiNJhxsBW5Wf1eUq2gRRzWov6F7DPacrPTDm9edQzZqMAzkZaPoc22wzRFXz5AsUmEw1WtSNc4Gqyz3REr",
  "key7": "WgPvNfxW6pLzvndtkHLPZCxx8bQ8uvLXYKJEtjAGbLEq5szPRWsSMEhwhoc2LASh79d9cQEP79X3DbkDzwHZygZ",
  "key8": "DKpnocmcXP37VgTLEebAMjrDCHbn5iLzjSR1RZeuVHqZ4vVW7cKrLg6t9mfDZmpVHW3yod85v7TVVFmbU9ziEjo",
  "key9": "AbC35er86vge4zDAjftw744cbQZ6XMPufkzqmx3tg4atZZvy53PiqwGXkDZo1RB8SYwjJaEo57rgHNTcLjGeK37",
  "key10": "3DS9McTpvXw8jkkDjQxC487nQYvePGNbt8BL1HfE6ZguQ9F5ngqiC3LrwNtf55buGkVjjgUwNRpvNHx3y5tXZQbz",
  "key11": "2nJWP7JJVvP2P14JrTdGHfLZmppbcBpFZdLr6FjHE41KH8KCgXLQ4xv7g4S7aUZrkDCeE7GqcZnmLDa2SaB5kMdt",
  "key12": "cBhk3DNBf8uaAkvBzRQAazP3SzB3m3cJro9RJKHTC5VMQGyXmbLbw8XqZTehUrNEkeKZwJU9h6aEMV9WD7kSEjD",
  "key13": "43RSqb9Ut42PQXx69YMtQspMfdr4rAD9biUExrYN3bsCSz1CappqRRYSGSLM4LjKtwueiFbJgwPSkqswAgMdqcFe",
  "key14": "Gxd8DBGQVWed3fi2f5krwD8kQWtL3VDqGvgqN6ztGHRR9tBFJnDM4FhzLBKTyNGvaAPjX3gV47Hnh337CFPF1qr",
  "key15": "5vHetQ828o1EaUQXesvcxeQQcsJ4wEga5vnozMe2Zi3AK5CanSvqVx4gQsjFPYRCPVJSdGtDsQCMiu6bRVDr99zZ",
  "key16": "4DLiKK3WSrBJDevKhwYCRhA5jpTXnp1MC75ddKTS9ikeVykcUvLJEq7BMZyqwNexgeFMck2dErxvn2cKbWh73RGN",
  "key17": "37XfvjSUHgLPTrE484W7L2vyTHXV5LdjG7Czj6jJxZeDBo9qYtuj4mr1QTNtQayLYNSP8wJM7Z1A9ATqnCWktiav",
  "key18": "26bd1GbSWegfuKVE6P2QYpo6DnxjaJtdd235dJHxsChxwRnVB3PTebyxM5CsbNZ379QhqWTRUGWz95Kp1abpAgeN",
  "key19": "4SrxW8gmWZ1KXB8ctkURXL5Y3Tp3iUBuAcFQK5EzGcbckmcrKHGAA7XkGEuxJsFVpo8FALyeQ7EeYMAHSFhZZ2Jz",
  "key20": "2Xe9cTz8bfDBETAEyVzg61wtuSmx2Uiwj9h7G2CxApdHEafwM6NHGYwjNXQcicq6r2qi3R4iknKvJso2Bco24tRt",
  "key21": "2vm3gyZzFBJ4KwZ35KkzC2HnKQKZKAy351sb4LfWMtH7EsK9s82K3efFsm9aHXHuCMCxbfLdRutGmostzUKnsufg",
  "key22": "2xmLa5ss4DWbwe1ub4pKLZkfaobi5DagG3ZT6nUsjRb6tMtzxWvsxwHbVDbftNeJBr4P1fDbV6FqjVCqXn6MJNC9",
  "key23": "GSfGFWSbXjLfG4rXfGnpCmTrNjqR15LRXUpLDd9KFxFA7qBWVEXeLDpuLWp1hqg4MxK8Q2EXZeXmnejdHD3gUkW",
  "key24": "53Dc3th5BCEdQ9R6tEzKP48o98j8nmaHuwzN5brbqeJXLBWYrYmRKsftppZmD6y6Dt8Go1FhwG3JreDL9P35SHNr",
  "key25": "AvFr4tcijnkXqTuJd7Vy69SkmybPLTXWJQPz1sYCuvBqSEfi2q8fcj6SR143EFgSvdmzmR3H1SVdP4FdmqcLCqK",
  "key26": "2KiLpXUDZ5Zd5vQ545gt5aLCPhHfYF3peun7v2TTo27z4mgWDwxcfLTsCXbtWBrrCSFCBqGqhPYf8QF2DVzn5ogx",
  "key27": "SyeXG17cvk4bB3DyGCQWyMfq2eB4ZMUggzyooV3YDmpbjkkiSUQhhH4Arz9HaTxfTyUzbLCL22exR8kBaAc8RNs",
  "key28": "w4vCqhQcp3mn1Rnu2NWgpGs4rdLLVDCRSevG9x41ryn2Zes8fAhE1Mnya3QDFucGYBT9rF7xeptoELgUHJRUivE",
  "key29": "EhybnDA5q2H7TTfiEaLcN4rfsS4dWPJf417YGpqYnz87Ydud6DdworopHUHwycBTE3vccHXyTsxKKebQuotUCgE",
  "key30": "5nbQyTZtyVWYmGzuT93yvH8utdp5BsVxBgsKmEr2NwgR2HYnZDZ8o2dhzN5EgEut5JHpoZBh7s7UT25nKrFup3Fw",
  "key31": "5NtceWV1DJSKt84Uz1Qru2Q9Z7mb5gtjXHoWyDPyHzqAzbx8jwmzS3stCEuk9jwkUgpbpSXdtAQj4c5GLUxpJfUP",
  "key32": "3R1uKCyQ6wvgB8SV6iYndWUE1Gev4RvPiDuTMYpZW1qMkJQcqQKMhpn4RcCUY8yuozMhMa6Hkx9hT6dT7zYQjuxS",
  "key33": "3yhhFKPszw7HvhCXRFQoBAX2a4jT9yq3hqQZhe8MRGuS9FTWCMsSwxAWsgQyvPPzSmNJexboJxCDeEB9UkJdaF1G",
  "key34": "59XozjHmTq71SmNEsYNz6RTHLxzVFBcQyG84NLHf3Vqw1pyLGDeAiDKEHYnrd3DBgnr2cSpmTdPsnqj2ru23befi",
  "key35": "5YtBSbDm94CSrieaxio6ezWq8UZ2PfbrR43wephNSsAfsHnaz6GEngAE8osPGN4CS1rAVyeWHXNmaZR8F6ubVK8c",
  "key36": "2UgKNyyVUUuxPvDKFb4B7Eo84KMptbvunwxiagcwy8ZQR4FZEeSgWp8epGxQcA9YQKLuGdqvLM5ovxUwBDu21Wf7",
  "key37": "4MqstKpnfNYFPxJj8vCeieZkbJPHbXxbhM7DxfrqAdeXcETBPzQusdfBMNQYcQUD7HFAn5xGnfoeTmX6KYnExXH9",
  "key38": "2f14SG2vMXFCahnAp5ViaakJ8qr8rmnAH6Wppn53MYJ254ThSJPjj9qTLv5mV4s6aVD5gZudhEWdCD6i23nx3o5x",
  "key39": "4BTahqucxZTrvTe5vzmEfP82sHvXZVVWbi3D9aWKqVxcmRotAEirxwMxpLm7RHyozkZMqvCjhkU2jQbMxZpcuErC",
  "key40": "5jjyjTiehVedEBjW3Rrths3P58HokDvJQzWk8U4JDkQ2ot3jYS6H4Enws3D6CovkA7J4aY5BUhYeFszkeN2ihjuH",
  "key41": "3FfZzgthnng5iVGVthmCTxP4sUXHWd32dNJ2fiXMMVF9DunvqYZYddNjsLcRde74rD5W37S6pTZB2qfjCTuc7ZiQ",
  "key42": "4iZDW7QDqajRML9sxKVnnZZwTjf1ArjTEgWvv35reeq5XkUHaGbGNT6FWayBTQ9b5PF5Wp71oDJjsm17KAXbtDGh",
  "key43": "5uqsTdhDzksmzP9G8S7XcTfzMtGxsmr5mYedB6ftoMmonjXLpcaL4A6BVTVYqyAYPy7TsYEJw5imJ96ovbnnfUmi",
  "key44": "3gEs7TrCDFtA6QptYXah8oWkNbvC4LpL9tsXpz5WenGfyrhFJmBbv2MmEzgoZE7SJaAvxriio8qjmszxbEYxF7YT",
  "key45": "61QNPVVTVTjzn1FhDmmgDhMBxj8p1dLY7WPEtExCqfnimcK3dLnuXdwpHm8fDMbwYQejTtUf91o6YVm6W1w6Cutw"
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
