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
    "4VPyYZtPZPQQDNNLFyrXfu7U8y1NCLpt4FjzSjj8cUVk72KGpkuXuBic2U885w1dKB5cLoeUsTffkG9YBPJMcyyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CkQNogGMS2pwtVvVS68x4qhn5T59QEwGkgSDkqPijohV3a7LLCVoz3RVkntWnXunkEqWzoaHdvtbMbdwWrupAAk",
  "key1": "4kCtEH13unaMVQ8yS8gPaxuaqpz3N9BorU9zMcaEoMcvuWGHE8XHjRNEbXbyMqzGVzqUpzmEcW5t9EF7HHCPPfhB",
  "key2": "hTLDAqt5yhhxTpxTFk6iTSLsBz2BtedC2YiYj3dMXdPLhtyA3KMdXDByTuopHfJeg78i8AtdUvXucXRkj6kUUs4",
  "key3": "5uaJXvBwkHC9MDBD3sxqMomo5Ww19Eyqf5sf93C4rTEksbhpWFCABzJJsxcrLDhGQ3h38JAt4cx3FJsgcvZ3fdap",
  "key4": "2Xt8u2DAfQQL5yeC57pLCzVNWhSVRcFkpRnVGPecX8w2FoSQn6cUCHXdFyHRAPExwejFsbThQuwm5TxRETzWEQ9d",
  "key5": "3J2usoz2qruKXVGVA6TZRL1iH1KdZQhKyJ1mPpq9k4yCEBfvAYvpxDw283irEXoaTYuqYtYz3JyX59t7wGJKfmTj",
  "key6": "2jwJEe3nCx6f7WYubJ85tBg2n2uTzrKKv28TAcFBJvedKbgWFNDGxzZKvEXUU8fiDw67aC1NudZ2mpMgHtSoRoLx",
  "key7": "4P7D6BrXjuFtX45ktWLktRauaKH2yp5B97GFzFPYMtxxMshu1osdpavHtKVcxwAxEkXmLF5Ep1AjLDGfvLvCaxt3",
  "key8": "4zsKd4JkBTm457EXHpnj1PFycoN8QYQuyb3p2QPCWLeBnQmxqDXUuSJZRovMNZuVs2gpGczqRNXR9z5cFezYMubg",
  "key9": "3Uy5N2QcERKYRNFyjAL19fsvze7exDxKjMymVL2LBjurhQgcG5mCJwTw3tbxcY4cERFoa9x1J3gYEDwctYYrYNbW",
  "key10": "36h3xBA8J5HByNAJBNBUY8bpVZsJY4HJrpVstgMd73zei7D7Z6jijHutN8X38jdgSSTCbMvxq7ghbV4wgy2vF2V3",
  "key11": "MecooiotQp2E41LGrdTtrjqnT79Ygif3nWhXYhsi9xyM9RsiCu36iE8F5KQpXtVf7zeQZNdCyg6X25dKMQbcfc9",
  "key12": "2MKVEPdkCAtTEg7H3WYgZe5HbfP4q16XsyEkQu9BNNr18Zj3m6PBurA19aXNx8nxqdHyFhgkS8ftNWQJj7wKTRzm",
  "key13": "USZ8H56mK9mpMAEjLPwzwGk8DNobKtBd375pFX3XXKhYYZaHAQN77Y6WDWeV6mK3czQeegFdJykWAknyourHbpF",
  "key14": "2QLXjTYXY7G3wLGqnYmwYtNEPhv4RqJvE6oYgUPo4JWQYYWKXtDejxkzVcwgy9UjU1nTkoxQa2zzWyrJ29xbbuRW",
  "key15": "5Y7as2TfGkvMRFic9rnqeB2rkg2W3HRFqzUvoK3qWMBcKtFvVgZWpmtdHpN6gExh5gLYabzVvLTFCeV8auzo6qy8",
  "key16": "Ajzvw3UFvu2q3piYKJxjKJgw6YMdrJHTuaqeyNGXE19gVJwAw3Sf2sYeHr2Bq4frVLBJh5K4UtWBgx8mgcu5o35",
  "key17": "2rUe9m3wakWdecpbENipQ3CJsWZtsmmrfEQnbR7JxdxDL9RWgnwjdAS115RxMBzFXMXaZd4aC2Lf2Gu64ShvRiBv",
  "key18": "3NxhQj8XVeUodod3zeUtvfSDn8XhDpuYtuoGutTKPXDsD4MR4ayNn5vL9GDBj16Cbvrjpcsuw3MDaCqW6fnvyDYw",
  "key19": "rGUJvJ4B6ZxzJuVoKSmfEFawjGrd9ocQzMbfvpm7Cwhfnjq2zDdQG4LwyHJavKVh7wvMisEZAa1tSqJj77qSGBK",
  "key20": "3baT1Ta2tY8hzDywJM4Mr9cMnppUPRpcde6DHKzeH5CZA4KWVxZaZ5GTM4gciCbzbXWFTHVnp2Hm9Q1yuDLMHRqZ",
  "key21": "gUYaynyYQuzZnb8sgQPCntUHg47JCDKDmQQe99ecHGEHKmcbjmsAi9ghSnd9r4bR7bRuKzTB5ei4puSL7ApB94a",
  "key22": "3ZMRd53AyeeK2b2gtaQorkfS8h9eAV2SngzjMkMazRiEEUkcgW3NVRVTjgeB7zQ47SkW9tpEWKyAtppLwK2JQvQa",
  "key23": "3x9Nah3qj9qztv9oqsr3hHyFDYr4vyXHA8CHUFun34Abv6JY5KdLLymEYCKD2j1g3kD98tRskucKq59guvtxTd1W",
  "key24": "NYAY6F8eqxqQF5XWkepb1Nvpuvfvz8pTd6EefDsiuLsgRRY3zyxZjDb45MmnsqFj7hsU9NRYUfUSGq5ca88gkq1",
  "key25": "64Tvw9dWe6ZwV8MaSdHoiE1QJozYkdEi6XWF2Np1srwi88J2dFuKV53TyKewa5J78mxGrdzBxt1C8EvnRKpre5E2",
  "key26": "3QsT2v7vzHZFfUDPahTkeakbnSv78mgCxtua6Ce5d7CzWKa5zHFJRTtQ46n61VAD6y8FMT82ZbWsqGjXhKat1zam",
  "key27": "cnrppdH1h5AEqEaS5j4RKDLTwpd9x6TkwDmGcoiWcJ5MRYf64Nzk1xmJTRErNXpNv1pRCtaQnuESdRgMfZ6Loaa",
  "key28": "4uAyvKtRfLkbeH4fPkMzd3EWiq3eACvir6K7AKev29fMbmQfFS8MeZ2Jm32hbX61tHZpRoYMKFj4vF3DmxjERsta",
  "key29": "4CciyQAWYKh9gMWLdLWkCDU8NxkcNSs4mhRQwG45yqdMKWGhKbFPVC6SB1MfwWLQA2AJuJ7YZwNA1MFcS7ernFae",
  "key30": "5TmrBVhPj3iGxczos9PrDZNaUnoTX3uGznRupCj4hcEGyjZfxiyJPKUtzbB9eMNa3AsHeefZ7JVasvFyK41Gv1y1",
  "key31": "5CgyhUVRkQvHgBauhoi7UqaU8skmyQBjWWUfCbGj9xUozBbRHoZpLV9betG7S7pCa6NjrCxm8hPBSJcJdmDxNX7A",
  "key32": "4N8Mpzrq4HF6oG4UQH2jpoFMjD4rWiR5Gr1rYZqaUhSrpy4f2xDAorNszTSfJ8w4Y3gG51DwBKTY2gHdzdQyDLyQ",
  "key33": "5bN4rEBnnXN85ZwDAeVsVN4kFTW8rGwLJhoUPWDfpM1Ev8cBsze5xH4SsYmyHePkE6631FvMyufYqJ62vyq1o2YL",
  "key34": "3oS7DG7hTcQNwrPP6nfYUbqJzDcfSGGvGJ9GBUjh2N8HiaaZ21Qdf8b93ahdvT5y3jWzvu8VaMTQAhLPYnJCbpkN",
  "key35": "5ystDyGyG8f3mkCHtPEuaw99CWsUvLLcprx1BVmu3R6DzNhqygUVNXYTkV1bVKizU4RRLuJRVJbffzkjnNJwmsjj",
  "key36": "3pdE6QFx3TyuDJ2DHTUEzKH3sjeLLrTqAk8M4YrQxNRYqoWceiMa2axLVRwWVJz8wX8LKLkmBD3pWEMqsptE45KJ",
  "key37": "yg8PjWMCakaQNiPwPXmtp9y6u5pTAEJxsZGT2wsVafHsQ5Ekij25eCY5uEi9KCJR9PMLrFYq2kx2eS8w2CRDFWv",
  "key38": "586SRbjLhTVtnN817zxaiyY4ZpRXZUZAYuVohBf57HBiJipABynLK6aSz5DRSj8XPkttw5f2NoLJqEK4pcsFxfzZ",
  "key39": "66MUgBRrRZqtFs2JPHyggF5JCYQuVz7dERHatEP4BzWpzABw3xiHkeYiLjLcua3bG3quZCLboP4xVa9btXh53pRR",
  "key40": "JQhv1mM9bvYBte8epkDAJgyQ4uAr1SpUw7kJFCMQd2TV72BJmpRpdevcbpAvKPow7TCuoXLEBinCHkUAdzosnpU",
  "key41": "2CbATBha9L3hK2cSfBU1SLEKsfG3Az1MqQEbJTTkT2EFagLvzMqAsCo4t1NH3Pnkt2LtWzGcNGhQQ4KcKZE6KnHF",
  "key42": "4gMW3cDeQAWYWBfV796tLuCPKLnHK8AUJJ4G7iqwGUhayoVuBApKUdWVpDKwL14KhnQpzjTWpr5Gg5GFX1UksHUZ",
  "key43": "3Ar9Bark1eSfeNqrnR4T5yzVJ7eRy86v8RR7FGarEgQguVjZTHA2rPmoEYWvp2LEKPE4gUrgubAxmx61fMS4fbxy",
  "key44": "5HXVX7zsxPTAJHtyVtSmmKeo43KHSNT69AhQfPVA1MCvEtGBH4ezkkZw1KP7NHbtGYykMmA2AK7zQNbUrgj1dKWP"
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
