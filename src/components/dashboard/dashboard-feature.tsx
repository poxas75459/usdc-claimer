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
    "62e2VfAMXenKpypdvtRDcevsSv2kbHzyvypMPsbeSpv9SN441EyQKqdsVUco1Aesj5SfxzJ2igMgtLh9dWZMEKVh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PJ9DoA3iYwT6xiEnNRVxMuK7SWV8UsMixMi9T9oV6voLDxvu7hXueius1Ac5wbP5fRdTUm2UfKQfiYoXAeTbcvf",
  "key1": "hSDWzHtV3VutnsPiHhuzLaXuYcmhH4ozCk7WqSRufxs1GbvZ945xqcEqbWoCZW5oKTSV7DA39UGJvSBxoYFg8WV",
  "key2": "5Cdh5eGfXgwyVQBGZ2mHtJfVw7uywBDPgaaSjd9nfPqbkX9S6fwko83aPVjeuGG9CsDDu8TcFsT3psdDg1n3LQQT",
  "key3": "2AbeaC5jG3LwPmAetgpSokAMdpnwrGBWkaFEP6Lbm8jZnwNm8HBLTHsKWcSAzr17VaQRutoDmaNU7SuL9uazinyg",
  "key4": "51PeGDANgYFpuULWx5ftyo8DnjRJcGh4Y7jJuRxDvShTe4ogpiCTSSDQHzEB6VfVy3S8JcRVZWyVZzqUArhHCpXi",
  "key5": "66xfn2sV4CmGmPTiEm9SU6wNpFGEuzH1XbafFPLMfyCxJTyJFpWzJJBCyGYA2fuRfQaZXPt9wfGypQiqvLkkTnkQ",
  "key6": "4UVibDZowZGkv1J8TfWRhrf8MNdZfvpvCoZQnkCv8zQDMmu75bCZmsMgEhDoTAoHzMNcu8mzoJqPKb8cLNXf4nFH",
  "key7": "4otuugdiUjidQZ5Rp5Lgc6x7VhCwVzBuqmdd14QGXiva8SrGJbtTWky3pafRkTgSdaShxYJb6dBVcpSacV2GS7Ta",
  "key8": "4sRPL96RuaMUZCZU2Z4yPPJjMfTXQgWdgpL83p9Vq6NwCyReeuomFYkQt6hP2ZWEtvgnmd9Wwis5mQnNVW73fNmA",
  "key9": "4hzkRQ8TvG23EpxuFMoNMcirAemGHpQ8QUT8HRPX7R1quAvGBZFpJaz7sPzFRe1wEC1eQ2ocTxY4ASt6ZMZQtkUt",
  "key10": "34WuZouk6H2oKxP3tXyfp9Xg3sL3fGojHm8Yfys28PUVK4KVpTBa45XCHfw9SamGpNhS8FTVkNMdXiKLcrbQxTdv",
  "key11": "5nA8yfL7ngbq74GXoRekcSKKdYd8J54XziPHH5Jtz3bLJgofhbe9QTdzKwJPQoZNJi5aJpDJxZHBk1dF8CMjTZE",
  "key12": "5JhC7hGnUBLnJEozNVk4czdtCU8AWVgStD9QvReYLShCfr5NatDm35UgFP6iNzaqiBUWbZ38qXi3mEXpwyip9SDo",
  "key13": "2fSrKhbHUWjcK22m52QfhRDUGLTEYSiZAXJxjJN3wV8SH3nss4Ck3jXCM1NFUsSPR1MftgEJ5HfG4V2GBaweyrWz",
  "key14": "6y6wx8zebRRR7xHMrsgd5vevL9RvSdpZ8T2c9unxq7bNmM8TAzDNhMBcZTkrMZhWXLDM6PsQjuoeGhZoq5Cnpcu",
  "key15": "5SbiTUZaeJUCmyUKPzURuePyRxVqs9pRBH9pz4esRgJ7e81cBKCupp14du94a4DPpk1LuBcznwBApDbwnQsfZ5Mc",
  "key16": "5SvwSyr5fbAJDgAJRg5WSWAw6eoxpkAEYutYC5m4LPS7arjXuEyD5oMduiy8BcgrUiqgQvYRk9qevGh3dZk5iFXY",
  "key17": "3V7XhwDc2KxsAxodNVCNjYiYpmECTzsMPTtSiMyy7e5c1Y1PRxKH3ffzYUhyWLWddVPjXzLn9tD4d451HVZFvP2x",
  "key18": "3mLhywmP6BRG7HxLRxn4cbG89abcCdF7ufjNd2nXqznfwb2nQ8KKARD7dr2bBk3HTdHNT3wGy9VnT9iGwwuwzT5v",
  "key19": "RfGFkmcvckrXYnumy1TDFMYTfmMs7bN83pprCDovr8iFMEn2mDLss8J8rXUhuVqAb9SkiHsbZvHmavmvm2JnfyY",
  "key20": "5dELgGDDfUcm6Sjx3BX7bV5Ya8DigY9MmW1pa6xwhH9abp4AueSDXZfBqS1oL6f6WxyXuChtn4d9A5VrYyKrSSBu",
  "key21": "3MwsSJLKL2UWkGjszeZeME1iV6eiJhFj472eLmRgg6nd7NAMFWZBHoQkJNFcK2Rg7DaCQKYDW3GT3eiPKy6udyHo",
  "key22": "5Y2TgE6g7q9FFVC4C4jZrH9cmPwA2hw3VdSPyj8HSviPtmoEGtmqBDTBerRVq1p3uGFTW7xUsJcYwZvvXoctduv8",
  "key23": "3XwivmNtZnx72V9mM4okw114Fa83FSbAaftqqtzqjHqB8nJt4o2f6hrDuYbAxiCReCvgA4tmuWWrAPfM5u3NefhN",
  "key24": "2y3zTSFPvf8wPqqtS8t4hjxe7DwzonsXa5zDZjEekxZvsek5zjQRfeorgzyfoUzQqvgeYXwFbgFe4Ffvzxw125ZV",
  "key25": "4spBTRQhAeqTzqKxeBaEuwJ4GByZT9JY4mSY86zXChS2kpjCizshJTdkv3bPTqowNi1MDfzBXjwgiVyyiPXWUwMX",
  "key26": "5xpKSGJDBjo6AJHU3BiGTCSuMiNK5RGXXyo5jwHEHKdmbJ6kJpidXsBc7HSsb2r5cJkjF2AWKpndqTc8Bq591mUq",
  "key27": "5kPfp6aGypq7VtJsG4KVYE5JaFZd15ZyUtv9pQx8AMWKDuife9ym9t1kdEVoXkujXcYNnEGaCDU9eaK2VS9MtiJf",
  "key28": "59aYmwMobFyFy3cF3eigkzWWT4hNNWab4UibDH3ufjR9KLgZ5VwL4NX1Vwyfiv1HMC62P12nn39WFeVrNzZbfYtn",
  "key29": "2USSCgmB3LUe6pzrqovuU4eWXy141NVgL9Lysxum1pBWR2NkkEtFGdF7maJzSwJ8CRZsiQFdXyAfTDY6Ao5dmvY2",
  "key30": "2KNrE1tsbEakdTSCqzZKqssHyUUwQgECXFtDvUcP9BoNL39g3pBRtcaZHcc3MLRtvpTWpmEZSsngf4EARotpNZQE",
  "key31": "5AtyXLEBCa7Pqs7fAdMqeR5VHi4AVc4hRiu9joaZ3HXR3PoEMQLPaQGK2ULCsgZLuAMimZx14BgoPK7ucNo9aV5r",
  "key32": "31LH9E9VHKz3GaTzW1814F58hg1sfB5RNG6g4PS8bRnxjpNeCka5nXn7AmtiUrKMfHQ2B1yyRVdvCuN7qmUKyQ83",
  "key33": "2yuozrBDenAPB52DyQD9FttpxD7o8kEhTMbjig92mk26JnQgHpdod1nEtDteo77kDmr9JSBqj67BpbYJFBCuQoWc",
  "key34": "37RDE5fe6DBa9PzCiAiAJuBfAcXZqhu9MWNGKAxoa4wvnABVwdBKgHd4z93yinT9Rakr5n2eoHdF62ywL1YVNprE",
  "key35": "2Dat3THjJbfDjQjqebiN5KDT7fcMtMY3PFmGWYVA2YKSW79u2HQ5mujKaoiaZ6xCjSoin8YaFTfbWm8GsCegzqyZ"
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
