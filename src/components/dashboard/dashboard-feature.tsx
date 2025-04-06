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
    "2NuEuydrpRNrgszUASZ9UNJpGR5nbYVZcqR3SLE9Do91hbsHaPBW4DjmqBchJvrFfqZkGhagQaKwHogvdP2eLitX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nfNqxkzsrYP1SoZCphNsFZiDwNiqBMKnMGpgZCeVkfwMwjPqsSjiG6qp73AbLnrZA5ynyMDHVyFRxW8Bs1BoeUq",
  "key1": "3arF2DdCk84wLhJoPoKcTfWx8AJfoeEf9TALbZifY5d8zurr52nhTXqW5jqzVj77dB9KtpAf9kokJQ8QU3Zs3Bk8",
  "key2": "eJ5qUQMZSnLYqoiAPDT6eAFaHNeMrkA7jZi5svVDWRfkWqNCyvsm7hg6Ya5U1Ap6ibZupy7P25i8E4H8adZvDQi",
  "key3": "poYffCKGTkjMYUT27ocF2srpMZTeQ18BhccEv5zA245nMjxZjufRLASKKcoQpXWD9PkYoWNXMTWGoUhJ5fxbkkp",
  "key4": "b1epRa14UFcfeZ1Bhcbfk5zMc5cZXQWG6ARfs15Jj3msGHPgcibJxgVRHSyy5DiNZLzxngiQtm54qXsLj9u77eX",
  "key5": "B4kYfJ7Yvx75Hzd7S4ya6eK9kozGTao9x5EA7gtm5k9DAbpNKjqsN8jgYrxUaZDTPRh5E8BtW8EktEPLmqGKb52",
  "key6": "46rDDwM3mmCnVgHma1JfjJpVxXvpT4HA5sQYQoN1Pq2MegQ3fUFmPuH2XUxicQ844arCVWMHPTPsuYdrPG4WeR5U",
  "key7": "5t1sS5hp2bCX5UG8E69p5HgkiG8QP7j9AVKiL7ZZWtnGoJfq5hroyHXixwQvy6wTortkCx5snwQXYBrBhvYXLmox",
  "key8": "3tH6c27tA7WpEhgzKcFVT9nqkfWXkpqW1YKfedBDJAHZ8GHuLGeywjjesYsqwuJdj3xjJA3BWxCGFTCrPPEtAQBY",
  "key9": "21oRsiW6HFWA9WMGfE7Mx4hKnM5CpB2SvhTrygveUoFwMn6QDoSuCdo4DRiQ12qfyjhMy38D2TP5ohSbrn2MwJP6",
  "key10": "4wfJqNgatLqX343mDQjo5aWTwKxsKF1Ed7KEQCf1srJvMGJBRia2LptqhPjcQkDyZuFCWEQXKt5s7GhAM3u3jGzs",
  "key11": "2TXw4stSi9TS61gzBpg5LHL9f465eWrs11ELNayVrtjwDWjEWd8pTck7cyedJUehDMPtL6ZxxfG5bnM9U7Vq3SZL",
  "key12": "642goMvAWt5EdXMRo4Dkpdba9LzRckWtUxeEpJj21TNuL63USMsvZTjbdBUsTquWUbjPjpqxutrMe7M12EWpxt6N",
  "key13": "2ayExjU72ToYTkjPFBkqB3XuABU4y6E8xWWFghEENhjJWzFvuSxZohBoew714asDU8JPurVyGSWNyBY52KyMNjAZ",
  "key14": "2uVVFkDn8u9FxptQ2SEmYfPWUCBkiHGjqFrGiGWmkyKZf6S63W28v6xr6FszKAmyKG2b79waDvnQYW7sdVZWMSH",
  "key15": "2E9qJ3SXeA883Q6L9vN4DjX5ehRa7FKD3mv7FCwRE6WpPxgWNMzh7rVrDntd6DDgx81ro1jv4MP9cmeLQ42XhCBy",
  "key16": "4wxpVUASpyDmx5eTgnuJgLi6hGDgKs1hvUcBWNPxHG3EnfqU8mKSSos7G5fUWyMTA54ieSsvhdpXFazsCXLMTRMX",
  "key17": "2HsFrVfetWcMqpKfx7FGKAEVo7N6VhxhBNiviw5zMzNv9c1hfM8RDkTpC8hvYsUJcjsYDRvTLCU4yYHKQjkTobqz",
  "key18": "27yUkyarE3Y22m7Y5cojf2XMepj4dN5LzknkQhHKfEGWS9kstK51BLBYjH92xaiyrZHCb9tkxUd6BnQxu6HsLsum",
  "key19": "4aNjqn7Dokzrmegqbf815dJMTfD3DMYyYUFHY6WTBbM84XerxMhu6wfWKo3DG4RWYeMLrbgUmxbcb1t27F2k3etC",
  "key20": "431n5aemzuyFTiJqVu3kvyo8FfnFmuX4U98t9Mg3ia9qdePeM3J8b7fDrJjctubUP2Pny17YUJManME1GSkhtb34",
  "key21": "2dS3d858cEnn4QXyduqBaDtKHS8ykUCmrApAd8y5tZ5A4zgj8TfjYYbfWA8kEzuRmzuPhjDTuhREiY43g9JVwsB7",
  "key22": "s8DLKRcvqURpq9NuSgyh29t8y5wRjSRfHuYeoPh365SGRm6Th9m6wkk6ce9XvPDgxZS4hBSrW7ASbaW2V4CZmUf",
  "key23": "4HXKhVgTB9ooFGdyi2F4mrjtNtkMY7Q5xQQn2i6F8T2ybwBwFSsnwBUoRfUZJURui6JoCXW4W4sjem9LJsrDcCfg",
  "key24": "3qpLwwv6LLz7Ajv4B4fTgvho4fD5gB4EGZHLZeRVYcpb6Uhpsar9Gt1MPwbuTazLQkS3177jnrs88JZPLsKRC48J",
  "key25": "3C8NhmfBgSAA6w2U8CrHXVDRXH1vh3PrYrg3fKJCymMSa6KA1m2ZogiPRTtyQC1U7p42z3zkpMFzt6oWBmaD8yw3",
  "key26": "5dQPQcUJFRLhLjaFMevVwRe57cCBkmorGc2ezVyqCx1BVJmgdCdYz2C62E834kM7UdapdSgT6B6GNojdkAeXQrK7",
  "key27": "rLvZh8hJFGpTxHrPwLfWXv2WpCTwSKWAcp2fWBh4NArFmFBybZpDdDNbDLVqCjM2J7vkbHkwXcXUeLecukzvb6U",
  "key28": "4u573EaQeD5UukEZmtVnxosvLamnvFcTyiQJizepfDcqqXmNpitrEt2U3z1bkRFavjA4qHMJ6sMwfb1ZhSbc41XH",
  "key29": "5BfbLXGzasLNKf974ZpMdSftQdWGZbCXr5cahoT3gAp7FjAQvdBZq96Xc6mCqeqjCGFpBPRhnf6YpFnuQ8rQHS8J",
  "key30": "5GAjzxrYWZFQvxtTR34twNroSNKcYrqP3LfnFNJspJiQUwPmnR96dGSdhfKT8TMwKsRxpZJ4J2r3cGtNmbmiBVX1",
  "key31": "4bBiZCzUd5RPn6DktwV5A5bfWtpHjfutFDpEHbDNuPZesvPUWMG2cusvEAJ2rdB9DwFSiaCrSiHP8us7uMVPTrja",
  "key32": "4rVCFN69cA5YFHom4fTBt1mofUPj1XZkmr3guGAEZn2u9uRfZL8aApK9dTLNXoH4Wm8JZ5NSUxb2CTMiejEcrtgU",
  "key33": "3dj68VkwsCgWfK5t8XzVtqHCsPtVGDe5DJb4aDnYePMxKjt9rBuRyvUaziHvAA9XFhrBA2KoBgh229o4tbfj7G9J",
  "key34": "4eqcke4FurkaXE12vJLSQX3Mb9UeeTT3hHiYFLQgN14ai7XTTPQt1FtuCLVk48qs3vA6dMXbteCEsSoGUGqL6175",
  "key35": "SF6iWwXtbWXQyYkpC5EF8t7qDMQY9KuL4NGm3itiCES4dP4891moARsQvFkSecvFx4EBm1NqqkA1u3L5m1dELph",
  "key36": "5UH1n1HTAzXy6s5Siud14dozT7Yz8BMjkYawaSaZgCinTLfyGmji5HeVHUrRJSgVLxPggjgLKEKsvcxzU3nRG1ok",
  "key37": "52Hb66w4D3VHJfsq7TWXETZhWrQgGaB3Tg2N67WVKnGUoZ8Qx4bizS33PuJGAM1hFXo4RHGoxebVoQaVrJj3TZrD",
  "key38": "3DgH5CFd6nSMv9VSjUAhXBQ1D4VKWUddUdpXxfWZA9f8ADDjoeVmXah4DGSLWbJHoL4gX41LKCG5MyQ5pqdsnBD1",
  "key39": "7BdDGmuGvKjPA8AFqGzULGJACu6sae4KPAWhRmxnUGEZjXhN7PChWf5vMQLBTEBx4x9zb19CDTe1LAZFnKF3Xjy",
  "key40": "3tuYczbqYqVft7hy21FWMDL7h9u3vHzoKusXNrYx19HuKwNSm3fzUT7MFNTkw5kCZduRmVcUWbyDLf54eoA4cwrE",
  "key41": "2VQoEmfywVn8RNucCtCMjYxysrzAE2a8uwFshLhGnAKRwgz4BN95TuQe1zPBEgZjwGqLjGiZGPFkrneoPJkpTdsJ",
  "key42": "33W4U17B21nBGLkk1zNB7XF6nE1QS5oe5asf2YPvkcAU7RczYP1MA8VuXGbBhiEWFsksZZrEZR5kL54rD3c9RFVs",
  "key43": "2Sfe2vEkxQbpCzbHNpNxQA1JQmoBzFc9UzjBuL74R9AFrf6s7yEM4sEiwrrcNnWxFq1Dy3uxdJWGQSGU89tBpa88",
  "key44": "VSK1kGZ4kAo5c5aput7YY74TUZg3HeCQsVRVPVubojSe9iGF1yQbuuzVKPDvTodw21hiMkJ929YrCXUpdWjJz1p",
  "key45": "4bUJLoTEwpviWH9znqtJixFtXpMiTXtQ1PZHNbHbPPGhLa1dCfmF5ebxWwqRAMZJ6TyXqFpEjj2ps6ivxSkmn3Zy"
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
