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
    "z82zLzBt5RycKygMWpeBzM4H8D4JtdATKHQVkBbpcFLMFkGDYXf2DzdaUMLj9gPN7SniJwKQMqSwGq3tAfXpG6U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yAtbEpJ2zVcspcXKofZP8ducKDGyLA6tWYt21nmi78CQN2efHkCJ1vLS8wQdMPXT6kh4NsABnV2bSscZE8aFzne",
  "key1": "4y72DE39i1Qju2a6Ebz3CndAUdisgYV1tZb14meJWbQjNUPgK1fjyz63LYwLdQAKPXGuvu24piSJ4tnqbD1KsTaf",
  "key2": "2AdSxFtP4YdJMd7ACmbHF3FovwhfJS4PzsMhacyxfF88rv22GuYwZFwDo3ow8Agw84fka8tNyCZd6KAGsxxuuaWw",
  "key3": "3ZQqLmhK1mVaipLKAzewMegWwaunYeHAG6DeyJTGRKBHSSAQ7xjvTMxgA9grjNrkgVdeMi9yndBK9j7WGMPcjWbM",
  "key4": "4kUd1LUH8sMU2U1satn5f3LS1Bf6pFvdPDEpWedA5EZwbPtix2Ctz8v3UN1m4MzoHgCN7yELTwRphkyLvSqnmhtg",
  "key5": "nkqN5VdCg2Qy2yFpnEqUhmq1kA3ZQAfJfWzyamZazZoebRWg7WhweTxhYhKHNts3SMcJmH9fyQ7As8Ex496gAoz",
  "key6": "4oHYceLeUMig9YGoi1hEZ3GiRjfBz1VnkZbBUQkrm5zcLbNhNoMf2RSzxJPRfaTfTTEHtTsa1peXg32JgTsceTDM",
  "key7": "353UAWGTRh2X8GvuJCbWA3D8zkWXuzEoPN26iA1bh3VR2U8cGKCANgLmWxLDvbDRbM12iEa3a1LsUuFX6C3mKxmH",
  "key8": "4LJQ7F9f7th5iBNHtMFYGYc5WNAsmWs1HvxuoJzhvTa4PDRr7Y9nSxdR2swjfrtKteC7u5EM173kAARzUXDSM6RA",
  "key9": "3cLAmj8dTosDH6Jd9QmxSEudrg8afKhXHirJ3Kej1BstT7mYLUV5VpZCaMjz32t3tCtsjtj7WK3p7h5MH4aZgM5u",
  "key10": "2D6TJcaRkJBGD3P5AhhFBQs1FnPsb2otSorbncXp81P3CFquRiwenQ9fofKntqvjepxL8vrxzNTY4C663DdHpVcc",
  "key11": "47dufsfwToRW483KDoqtCNughPq9hxRsXt5UB42JmoR7dbUMZZi44rjG7tyjDV1awpNLH2QmJSGMCAVhueLa3iSK",
  "key12": "5JJP9hY1LWncSbwJ8vgx9ckcRXjSxAKF8ReR8ihWecX9XbvqQqJNcHzdUZfEznyyWcwKwTqaMREMx39AFxnZGs5X",
  "key13": "EsSWT8P7rEfmJZ8Y97KGnGrtwEeHNt8YJwnqBGomPnsGyQgskdkYnphMfm4AK88VEreXdoKHtEJokF3EBq5Cd9r",
  "key14": "wBtFRmRuKnh4g9kb9hPrHj7eo8XCWBotUrzTKHdDjMqZhTfRW7iaiyTt925MjLU1GZjC3tMJ6XfQeTPrxh1HX8a",
  "key15": "2PaFG2VDdS2C5yqf6BfTxJwQEsUuA7R2ov8RosKX3C1cBem9458Vx6ikeoob4BPACLKZQTCVzToku9QEifsX5F64",
  "key16": "3eQChyPSMTQHb1vg8ct6cgiRXEvcZjcD2LRgwQVL8FM8K5s585Y65jh2LEKz7KCQT3uxFHha6evCeer5iJra6bfZ",
  "key17": "EdDX5NG9sfZarnHPs6TRyW3hGNZstqcXrvuZ1RKDCqztcHEEt5E6HoeBUNFPeiMLXrcAaecyfQHgfzEB8WEoAvK",
  "key18": "61iFTJfXkTDZ4LebWUFrkecyJwREyBYtvVKk5teTz9e9CGZ5h6HPvU2NR33RkBi7KawBavaC49x7LkcEV597Q6K",
  "key19": "xTmiSVAZFwDqmoHjwEJYymCeWtUMPxksLoxYY4mCLWqrC2FXC2MK2jUUxxtaH9DjmNxdnLDLJ5mRYVSBBr7R3wy",
  "key20": "49eBbqbxBGpQq3wEE2uaU8CGVorznzivUMAbx2WFeeqtgXJoFTcmvE2AAEPp4k9weyRN2bvoT3ioD2fBD6PXxMLS",
  "key21": "3bMzHZugUPmgDiXDGF8Vs36KUTPdho8v5WgLnELQWvugrByCSyxbMbERpHouh4bVe4zscjMZhidUtia1mW19Z9Ys",
  "key22": "svbyCJ6NFsmic3WoknRFWJiei1TdLGJUYwvC7d7bMXe5DdrqyPn4CgpewssG7MrCxb4f4iaCp8Ksh9KkvPoNqJm",
  "key23": "34gHjj6tG1Hu5eavLHodNxreNHkQLHEKWvdXkxpA78CxQkq64vswJ25jRgk6hP68iSfCexXiMzCosCWbPuy18aff",
  "key24": "85SdW6K43hS4vf1ukH5d6P5hfqePLJ7gPM3Pt7FqXzH94DCf6MBoGmYdcvMqmi4uZbjDG7gkFQJaeMDpDLC2LA7",
  "key25": "5Wys83TwUmitVyswTnnbi616vFvcBGE9kZjfuUzoNz7MCqf8QYosuSgpWbsXp4TtExqHKPJiiY5A1tSQCff8uzwW",
  "key26": "3nv72gQT8pgg7UgCnuFTnDFqkGGDBHNDtEWP1tRUyBYf5zgEU1rb4GEFDUffAEP41TsCGyjYv92U9ahRAnpcreK7",
  "key27": "57tfztEXWPT4dDb5J7JGZLDomdWjAPE9XjY9yhU8CLrYKSHgEbng2Mf97Gi9aE1h3reSrx6KUqpqtkFwZxKgZgCk",
  "key28": "3pk5NHy9H3TSm4BNavHmEVtULqxgXvyGsMkrzFu3iG3ma6xQyk2sPKHTNZn6j2rdjtjM2avyih6Ppcsku85xygKo"
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
