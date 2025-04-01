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
    "2HfQfmDb454csXfUoJyxr4tYz6yCZmMpBHYNspnruVJwmxKsLArYaNfes5f9woj6aAmUe6cED1vaL5pRoiHSuXpM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55WaLeuXMLx3Mpw8mNm1ojeTFxqS4AHAjPnm4WnSUL5i1ETWLueVX9hvmLHMgV6Pg3HuCY6xm2GPH4nuk1mttPJf",
  "key1": "5SfVN3c4TzqMpy1Mtuj6FcaqJrmEHL44pQcKzyrRxaLjET2e1UVGrVJAgyGZxiuTWihmjB3jZ2xDP7VNh46sZNEK",
  "key2": "2bSpxyfWPXxgxdRFWiikUV2WWgxcS1dy9wo9hZGLrfHZEaqww72iqbbCLDXkMGu2hqzkgEgwdACGjMeFqLNwHkfR",
  "key3": "5bGqG9qsW991Awg4MjiqJ94KSoeuqd9Rt6nbaqQsexHNqHiJ3Atr3yynChme7fXHEjvNoyJgTRRbdNmUkAUpVjd4",
  "key4": "nmTrRZXwHJgDSsmVhAf7Whdfw5SzuzAGJs8aixfU1sG864KgyvSEy5R9k9AYm3QtpNst1nDfEXYQVbxnZFzZcNU",
  "key5": "2AccSJWcB6QyqQNeYn7MwnDGhK1kwgraFjRt8oDgUwHNGYr7cf6maoYjfeto9VvQGVBgGjSAszHbSfNfdbqYPYGw",
  "key6": "2qHZSXbBKnwUXE9iQKx9xvNsjusTVLuCti9BvMXHzGmAJZqzskN84bJjyWXvzR7Lf8LLPjpjiqfdFZSH7fFfd5j2",
  "key7": "3uGGQvkLzGvgbyTKjaS3JshQR11rJyS8fWLkmxNNpNX5Nq4Jqw5nYtm8xAFPdWv9kTzhtcrfvc9Brv6VkTps8VKU",
  "key8": "5Bas7sT3DrYmYx36143Yr8Nx8BuA3Sd2tM77SHGmhBXYQSMoEqoY1oMiJ26wnJePs676SumQXGJHAMtFLBY5uiEX",
  "key9": "2MGDR6Gmp1kv85N6UFgP8SEbHJBzXfQe6QDWAX8njrdax6fH4uf7mUyDcpkHXk75WTG6WFoi35EZPp8WAeQAMxFs",
  "key10": "4QdtcHLxMqCVroEN3naB4xFdRoDPfC6kUuvxQsYGXVdvHhLS9kWtKnHu8Ywn9DEXDCMtMu5TrqZEB3cEfdyuJr89",
  "key11": "y9ffPn2ZvdBrRWQHL6dfB3C1ygtZugKn9MdGxmU2yhuUgaPJaL7u5h7Veysv5kfyejmivJ62R7PeoEETN3ovDSf",
  "key12": "3GqFq7Bw49jagviBrrrT3tcQCUNnBuNUcXt1yMYB9bYbKNdQRwgTWVKfjvyzWkeEUbRDeisUb9NHF8ck6rvnmxDt",
  "key13": "5oKUSW1BHHE7wYvuSbNXaXz3Nk35VHaxikBDjUEnAR9CdjjifYKfvbKbn15Q9yp1BN84MZJnc1ViVE4NjcuM4GvF",
  "key14": "5RqQtx7pHtqoivT2SGYzejSq3c76QfZWm8DWGaD4SzBURDJCeWVo3jk7n2iuG7XsqtDWXeAtzg1stizuNe3rU6SD",
  "key15": "58KZw7QNxApGeSBRZwyQ2b8SLuyY8HTq6CM6KAdxGP86XEEKbKAEHANUU5naJpLaR1bpHj5su9BeQJGv1er3gHr4",
  "key16": "5AD4znfk6ZGBfAaFwpNz9sTcsg6eUywzioPx1XYbwsZggfHmrChaqPuEtzfyu5xpmy8614QrNKrKcNw497jNqW8P",
  "key17": "5Cq2mjZag8LBTCzaDD5pbWYyX4ndkMF72jxAoqdZtGzGwkoadUPRAVzx3c6vJT4sXnubrb3MJ82akqBbps5yMEyZ",
  "key18": "FpFoE3StyjLKneTBwAs8zGyPCK2rzkzzAdDYYzgk17zq9dLww86Ldv5gqmBDMFi6DoJcemtfbLJerKaPmbJthYv",
  "key19": "5t8EiSbamS8HawDsrGbofKtJKSPAMjPBGMtscRPuEK9fNKm7jiy8F1bmzBnyn5Luib4cv7SR8Nb8SkXtJKbQxHD9",
  "key20": "3FQdxpBQ5R4bJv8r4LnXRXDziqEy4SL3LfqH82BLoZHgExpR3cJHYbR3CKGsdPgHVKLyBCqQbvuQD4VN9y7Sgw9M",
  "key21": "35mArXiGpDKDHWEzj96K5UYmZ1o3Trz51m2177PbB22vZfVrMdz1KMLSrtYPTSLvjdSF9DqMy9vH7XH35wZw7fwG",
  "key22": "2RZ9qgTGSCEXfS5ijgj3Tu7EcQHsYUP7vWbr4A36VNF12aZ9HxAwaybo5zyDVVqNfCDPhdsd4fbC6J1BwmEn7Pdf",
  "key23": "2veHzXm2tQUpDtyESrcPsiVxhF8yk1iehHnXdeDecRdbx8wadf33ucbNHzz3AVat12tNF4EnVi6Vyd3VY5ULKoKw",
  "key24": "5H8eTGEu6x3RP9dMwJESwpLQTHxVMfu9WeLVLcrWhkESf2Dc8yT9sEQFMDm5KjhJg4N64n6Fysf9ppcvvyKxxBZ2",
  "key25": "3SCh8on463mQAAFRCVCMUDKYKEQezrtXKiKRYBfDtzVh1brrz4M4y7wpipVQz2n7jJtQ1g8c7AVHfgNjiFDCnVJX",
  "key26": "3rCfJAKPW1u7fefRTHdXbvTHp3gu9TRXM9YjHy81LUL2Hqt34yLwBmZEXMRAEU6DacHHSpkJMcaUKFtdnRw62diJ",
  "key27": "52RbaDBjqRTF9jZo4t6zWNR1muLmmTPesaxffxX9UsWAYKwGHuJYtipv1Ez1uZr2efvkP3doJxQLLnAXs1m28ue5",
  "key28": "mYZbMmaf7L6b7j9XFvi2eenYm3ak2nTWq67iPXx4GgoWioB3XzwfekanzxsiXjX8uCYvs5VZwx67MWpThyZ7d9r",
  "key29": "2zj52cNtcAo4wDkpehaTBwvNTtGB7J6so2HUfBP8rXkB7DJQJQNTe92BYAzmoEDpJ7E42pMSjHaSQccsnfGW8nCJ",
  "key30": "4mvJwQRQH1QHpM44MCheNVwwnqxLr4CxPAq8sLdZU2kXAD2HAwkAkCHCc9eiA17WyHc6ZRs545kKL4NHfKkbQus3",
  "key31": "5gCzjfmAnSD2UF4hgdQ86mRDG1PM29VCj9btHHkMzStnHp4FNJ3X5PH6E3VfPtxG2Mo388xCDqQEFiVRe1ehy6et",
  "key32": "7UhbxZby3R8QQyit3Na6DNuanFReZQqHAuvT1FtNh2mL3ATC92pMD92rbY4o699FdVzbHM9jwoGpnjHr1D11zAf",
  "key33": "425mDu8bKq67b8MTJHCSjWSfFMi9CeP9fQN5MpqpgbaCRGP3Eq7UCaMpEtvgW1Z1uMscdNuXsUfmdfAATLV6P1WW",
  "key34": "4PPVFGLTAjp6zu29g7p3aBjrj3CvZJYt8RVqhCV2VputdiVaET8BV7GLXaZJLnrdYDVK54Lh6tHFaNHnpfxUyJQx",
  "key35": "3vJ3sFRE4acq89JkbtKthgFjLEsD1J35Gux1jwJS8suJBpmc8XKA1f4izSwSEP36xGts3nGPVNXzPJHNJVGzBGgN",
  "key36": "51UFrs98YxZy13Sz8VGTbE47Myhtw9yoJSsGVDUw8pw9rGW5RdKTMFAgBkkLaMS1htmG8QGWdDsxGSxrjyZSQJUL",
  "key37": "2Xasje374G8G9tmssWJaJprcEF6sAwLrh9TxxPdAvhk7x9KCuz8HmBB7wS4AnmPJo9u27N1d8pUnFUajMnrxhyku",
  "key38": "4SgXdzw4N5xFugwWdhJrveLjzvQHqBehzfAv7L8Gd7WgQwwZUkmMQL5P9AG5hAQ34X8soYZHKwmcWeHas2mq5bkv",
  "key39": "2BTetPRwBDR4PPdiURJc6xqvfbaGzHigWQT1AzKY45yNSmgV6CkHUjsXf59P4ENuHGBVVUvQe862kbJPGkhJxJC"
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
