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
    "2wLKUV3k2QLec9T5gQB4YhL2aEdnNb8hEhSs6H5FKPbaCyeLY8zXousPYKGxrSiBkhZevz7t58W7VGShCzRXoVEM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sXKATdp1TBaveJSpvbBgT8FAcP3SJE58U97K9dVNZfkz2v9jdMA5qSHxS8NUuxPU5GC1TQJKJxiR17ZWJCtC3io",
  "key1": "iuaxjzPqGKkrJ5xNyS2APi4YGPSJY48k14nQwtmo9DKey4yJgqBf7YMVPnXwakBfDfeRPBXvXegLUzbBCnbvS3T",
  "key2": "2r9THhyyxGA4RbsdG1DyG5h3cJiD7RkuhNHkcNDd9eeAx3L5iC5zxoVhns4kQEAaxrArLKAntHogwk6fBPmYVbpK",
  "key3": "3c2d9gERDFWrB37mLtkqJTPSh1RESLAKjVYuc5cZBa2Sw8MqHNFmHi5hSvd3DDc9dNGV8A7TMia5fgnQgR4BCzHv",
  "key4": "4tZ1sowjrKnhJeZfAdXq9kMk3z97ABbLY444erTJgM1Ka7c8jNsnX1JfyuQKRPo9zd1ToFYfNYpRosExAEpSk1BM",
  "key5": "5Ck3vzvZQcMRqVtns5QbpEm8zsWGJQQCSGNKeHvqcZBLDNppgJqZ1ZxGAUs65dDBX5iZn3UCsFCxFjgSuCGxxFSv",
  "key6": "wdWn2Q2mNmtJi7JrkaoXqrSya4MfZ8nJjkdvJBkmfLY6onM9BkMe4pQKMc8uj2xbXLZ3yi3DJGsXTFxbdKFSmiP",
  "key7": "RPaCjWFJbEDzV7ePWm75VKXgRhzxn5H3LpJZzwaCHRffZZjuCcPJXgTqGRM6CQke1GgeZjXRAMyWWYSNrv1kaPB",
  "key8": "3JJjRrUXsozYcReVkr21Hz1yPf22BHhnrkJE9qjvAhZ5VbApkTgw8H3PvnXLWtpRrzuZzzV42kQtP8kKQ4zEExXE",
  "key9": "2rCrdW2o4MjFanZ7Uw75fNENDn3mGq5JrzuPLJW4ogk146HuUeUTk13UB3Ck6UCx7bioGYveBGrJ2MuNvhrPkg6W",
  "key10": "59igtHWDeWrb5HhEXzQwsmtjXWB9eFCWTQta3MyHhoGNdWM3CK3Ez9tcYDHg4oYtzxqTNyWJ1Gu9MYaEYCP7ChVq",
  "key11": "2p6m6mwS7AETnxcLn4gn7VxdZ2nat6a16hjwf8ctXzZ9mkFWNygdLqeK4gX1fLPhhhHfmRQRVq7vWNdcwEfiBvqS",
  "key12": "zVi5ccVkFbsrHmt4gyvUxkLv2acQUX4TzpKFB5p8dRotQjV1bwM2gMpXbXC6Lqwg2VC6vNhmSLP7gfcys35dTf2",
  "key13": "2snLM6K2wMHLEHhmwu2TNrnAc7KzRWN6tiFptvRoSvBbYR3ayd4wvNAEAY3DgENiYiy7qq3BMXAHuYWmdyBkxj8t",
  "key14": "3pQo9K8pvLLKNzWM6NgmQFQdoBpXZCHn68eRh1ppdTRmzk4YNL4L66kpgc3TEuZA2sLXEzSxuWaEoGmdQ1Cz6RAs",
  "key15": "2bQfvphPWfPzrUA6uav8FSfJFRYc7P1QqW38urB37Bc3D81aPNq3FgfjzqQ5ttsxCCCu2LLM68y335iUV2dbv5Eb",
  "key16": "XwSmpdMr9QrwHXp7QrD5YjFrrcvYeS52VtyfDE7BiGDVcayWdDgohMUqPZJzqSRaUMKye5ofv57AQrPMomXVE7Q",
  "key17": "Ta9GrnyjfQXYV1Npe6RxaWAyqMknZMwcDgUvqbS1uirHZhbqNL4Lif7w64sWdR1MnnAax8Jd6Tw5t31cZQyNiGZ",
  "key18": "3pobah6MqmRrrXUBZZrb7VAHHPwAJkYySBP6pvCt7ZrChavypWuCoEwz55i9Q1tqDd5s2aHTG97vgQpHz49b9WPN",
  "key19": "itdZRvWg3gTPpWwmZZXm8irsjh9jFdHkG9N5MFNgPo6aQBDox9FaNJva93bLdGAEnFuKdrz23yDHuHdAS6erwbf",
  "key20": "4tsE5fQjCbX2q5mfEW3wCb17BQ1T1wRCYd72cfPNvbq9Xh8FPRUdxvLZGzYub3C3jX59y4rt9YjeFVg72D7Z1Tvz",
  "key21": "xrskDkZdvL8XAYDrZzXYcShcfGaFgDnvJNdTL9jssEqmprSAMoKmQhYaRXdpoXcd1GBkAMgUqx9KE5ENsPckNo1",
  "key22": "2v1DjTGMmf66XgSDdEBLVoTYamFcbAFaZZZQPRVrohSTqVz68Ynqi1ZFA2HNhEeMKz3Z96dpgaA5djP6unVEY69b",
  "key23": "23yHbtcGXZoXPdVapdcTHoyGXfAbdeL1Ygf47ojviaw6KSo26faLaiTbTBBBrv8pEGUmfNpZtieP8BMUNw2bDi4S",
  "key24": "28WsjB6DFBfPZn4EqEvMeff72keXdHuoUeZ52U3EyBge9hA5rzCPpSSZjqoBHAhhzsLDnZnCTc8vuR179LcQnpby",
  "key25": "2oSuW2p1Da2irzYZqb9v81dbDoiQjsDDxyn76Kw4DUV9rqS9FoTA8M15u39Yu7TwJiXY68tWsvfnc62iuDCaoYyH",
  "key26": "4LUuPtJF75ShYU5r3cr5qjokPMeicHysKGU7jF2G2pZwKFvm3evNbAZyLZn5FphZ74mUY3GMH9fTC3CqKvQsioxH",
  "key27": "5aNtKaKS9SbwLzUxDPWUtU5uFuUTFZkvp3QuwmaGHFJGDj717SnCNPtqcCJny9pedrnqPX9GQe36FBUn5XGR5UH",
  "key28": "34i5oEkkTWJNHVc1SZih9AJc7CKtqRFawJhbjqkqM7WxJDHZf7YBubovPpmjceCKLa11Crm5GbFZTEdxb1MeLm3D",
  "key29": "xPmVGe8crW9oEcDoN1yNyHxoPYCX8v1ZL8sBQe744H6hduQVATND3adWHHQWCgV3XcUsk9uNNQX83agJQHhGAke",
  "key30": "2SDcUDFBUVxnzTXrcRqfnLxHzmeBQigRNMBfG5g2ZRM672QpsciC1XzCPYe8z2i9oWvyPWYR9789Ajv9xVJHRjMz",
  "key31": "4Hn5LskNrDcWhnQhwvhGhrg8FJqL7R9N2PRRW34gqcbupqPgmkmR9h1fFFvk31QsUe3vYqhP4UD3JzcGWsqpq6Jk",
  "key32": "3WQe88e4x1NvxDNuhnvdi5Cdxjs6Uowivhoe2xYVXATiMMEqGXb4s2x8btRX99ZeZDjbJQDURUBtYbpK1w9b8JpN",
  "key33": "SMNUrMxp11gs28x2otd7Gt7Xo1fd8uEP5XsobNyBbqYpSd5Uk11g2vgBkJUJobFULJWuHWdkSFX2fk1YxCsCKhj",
  "key34": "3eqngyKniQTwzTuqiMPmUbyeevgjs9pUxqTfhrmfeXaDSvx5viR2p21TND79PSW7tfPTmTCB4Baogf2jKth5xAoZ",
  "key35": "qcdq6gBLPndW9Zz2fMF5wKXWrmaVN69xT8YyRFNt3KCMexWcmxR4FxR2hPFQxqeno6cPxfsEoYMbeVSL83P7Ti7",
  "key36": "n3kWLsfpuXa5U2azJ8SPmtd6Tii2X9h5MUyVYfDrVsuYAcDFiK3FU2atvj4Si7T9Ed33YprfJ3rt9jh6tjSPuDJ",
  "key37": "46759nygE9NB1hAh3UVdcW8pYtMyJJh8bGKuJGUREjkLKPQ6m7W3f48zUBBKVtqguwWLKttUgtdq8cM5xZdaqHje",
  "key38": "4XwnYjaohQ8VGfzMDunD2Q4D5cJQstJg6vTComuJB3SEXADzMReLZ16LZF6RjA5FML2g4UdLVuaAogxLEjFPrzF3",
  "key39": "2cJp8ShGtBGCo94UaEuQLHTYsKAsFVtFqk7cAqsPDr6oJmbKenHkbV5EoFEvpbuDdeJxpWnHHXcPqdYkL7K1hjo",
  "key40": "5gWQ79P89vhdQaszVZPz1oN36xgPY2VBYDGbyhfmGXTeaBmPNJKP6z27jtNdHruYGsaMfmuhevjgPwsLnU64jLps",
  "key41": "8fFm2c5po7SorSf5Ld4drA73F9XYxHWg3UxsX5DbDPqsBuiAQK5sB7fYu5cYLH7XBqPMPeXXUywi3E9zxe46qpe",
  "key42": "3Nu6PeyFYiM6GVSBMez5kM53xELej3VPVLAEE3GuPhF3copD6GGCZLeFUKWjEWH9D7MRwpdoMVstE9fYu8DuwxUn",
  "key43": "5JbkyZma4oT52DfdEtqgUeBJA6AvdZQYyMbdRTNhRU4EVtZbirQgxH7LdkdhbJRPBNZmTMjZN2fz8UmijDVtXMth",
  "key44": "2ScDSppVnj3sQdmTpZtien8pWfHhWPrM3fQo9JKdCCxUWm8h2ecSFfAXDfhBpcftRK5aM81YWxrZf4hMRZVSAU94",
  "key45": "5SS3siKnxEdmFMgCBNVAqgv3tXHwZAUqvAbrLpvbC9JhAFpqayaBSLDRtbL1xbSRz6XGZ4THU9ALK1wjNP2SDevn"
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
