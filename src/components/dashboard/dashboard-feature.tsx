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
    "4iNim7YKjG2ddkRRSosEkNjhZqkSc3yx9bv68K8JuVELQswAiMMHoSbXHBtQ1zjt89S6jtC3pcQSwwCv5MhZu1MS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SMzPw6RQyraeU97NjMNumniJimQnxKRnZATNFYUWgarhAeivZbAsokQT2pjNmxkDbg9fBeshEHys5ZG2Za9h4T7",
  "key1": "2sWrS51m48Z66AwfKTv2Szr21JKHEDBbMBnYJk4evRfMk5H9wm3LjuCuzeHeULHDKcgDDgMYfyJDxtN1ZH67zQke",
  "key2": "EcWKkqLffTM6o9QEBRcsLXji1EZ2C9ATBot29iVw3dBeWFVBPVDszD9MXrgiavCryvpEq99jbhZVN8iNxJAJDmx",
  "key3": "5KFadUHuL6VyN2SiamN5Gwby6wHBTZ5z5Q9BAsUXbnAyc4AzUc82waXK5458Ra26K3pfkK3WG551aghN9F4Yuztc",
  "key4": "63UwhL5GT5WphjFiYuFCsxqZ1w9qrCpUW7bWwpzCPXQvoaJgdvatQRg6ZAZLr1uvoTJUHUdxbRnB3LB6DU8bhucY",
  "key5": "5zXr5SDMLMQsYxnWkqroUji45CQPTNqprMBfNmCfgEgJJQZXsCkFyStzUS5AYJbFxmJsPbxtZbKbnCTNfJaUGzjn",
  "key6": "eB5HY13jWCyx7gotTcSgMb4rzBQejzj5fGCpJaYrzt9hyUAYRSDj3GQEuue5dwqsK2rEkDFiNjHGxqNFLwChuFS",
  "key7": "3fVjhsGD5zBsY3dKbDauyJNJFi8UKsa2Ff5rj9K7ZtQyB4xs4Kx7Ekp7cfJarha8TQL19Df1SwwvyVVGho7puTwj",
  "key8": "4QEbRwcVHvodwLosifjHnSLzVZDKemdfBWrLBvPSiqxCWXxz2BLbJhoo5eH7CtWANDMaAns9WRNFcda1onYhJa7S",
  "key9": "2pih812DBGte6Zpv7RGa5GXiFgaVP4wPFqRx5cVybf2ieCAz7o7FaWH6LfFm2yKfp9hbe8JhUCiQiXdaraHfFWwm",
  "key10": "MQJAUbR8XyhL2iawEjNF13Kh6FqG8fXTrJawLnTGHJ9PJECGhfqkYkmJG14HDUn4i5bbsyknUBeFrN6HwdHDqAB",
  "key11": "5cPEySSHRAQ6GGB3CqYWVSHCqesrvbAfV1iaxxqD9hkrJeSY7wv1KwkgGhotE5nXXvBksesHyt5yTwWQ51QCFFKG",
  "key12": "2sVDthF6gPbhiYBmXaRmMbPTD7KoC69Bert3keUoLZbHfsqCXVDx8vXc12s1paBp4CvE8SfMq45J2fL5weHnCcrY",
  "key13": "3wxhvXtW2FdS3FYwKQaCcMtvwpkpHuTzVbzJVBiNDw5ZsLrg3WxuW8fAMp7qWHgR8FHuX24H38oAFSjuswnm918F",
  "key14": "2Q6KbYmmsqV8Adip9nZoNTc8W8kkUkmT9tGfmXqqqrJTcu74GezEFZBpj55YxmCBDGerJi22tgdjzoqu8qgMkjHf",
  "key15": "2ukQp4Ew15ee4PuyUXx2KbBQkbgxE2wZaA2g76LCsDv52oqQWGEw9XQ7UxiJmBgTtat5yT7SvMDTE3QF2NZ7swy4",
  "key16": "5yjgW8jXL4MZiaCZAe5V3NaCusXX3T5tqqx3EhnSLhYL1R7c1duQUHvTuHRKVc4WSt6dzdpr65coaZMJxpixi2wT",
  "key17": "2RGpzty8EP4NEcHXvmAjj46sLNKKfBg4fSCcHDqUxNBxKAsAkcxV9rt4iycFqdgtGF3S7LsCNLWmkKyBfpfHkXqQ",
  "key18": "R61j61aQQtbU3nmhn978mWZ79mxpPn9Kk1Fs4YWnwQ4ija1D15V1L7xs1Q4tG6dMiEy43eMFRSmavQbviiXcFhW",
  "key19": "3vz73xZYs2cC1pHU9wT2TAnramkKCk1spoeXN2EX8HePds7Zt5we3TXmgSEuaXXbUt6rvLLN2LbmbdNsjeF4tQ7j",
  "key20": "4sY7whBXj75mTWn9FX5US7HrzjhDvwbPDLAJawHE36MSeQDJLCXoh9NfayPcSkQY6w5z1qacFRKJYNDvgFz3LcmV",
  "key21": "nbQm4jcfzp68dghmiDXtqqupLidd2vqqYmburj7w3mAoj7oaPH31dsMbouJJBcr598eCtLwDyh4A7zu4Ydmav9K",
  "key22": "2PBKV9o4YNYjCbZKqBYWPK72sebdjsdnnWWzY2MZ9bgp11sfr5ecJBMbiNoiTE6LkNR7wUwoh4n9adCaNRo8ekw8",
  "key23": "bpS4o6SNASmq9GWwEsJxgC8CMHA2KEGMabyXChp4wb9sCQ1FvWUDc27xor2g2DiiuH8BuGSPQXeTkUYrHQGzqYG",
  "key24": "2F8NEZ83wHaWeJKetkDBKPH9mAMKPwi1KiJY1iLXWhNGkyfAF7Y78P1xr1XhSkCHHHCaTTtykJA1Q2b6a98scAhh",
  "key25": "62N1LUNmgopcZ3vBCNt48CE5CMTaxUdrY7cE8VoSCXjWrmMNr1wi38eTSCJvSwVytYhviW42EK77YkmDv93qnTUR",
  "key26": "4FPRG2sQv63TDmrbGGc23kcHR2HFTFLJEcedQjBZhJANgTatB5KTdkqjHr7JUcnMPBVs6AKzK4S7GLVdHZ7Jrs2c",
  "key27": "2te99awGeRgFKrFLutWbfmPhsWMz8c1ESASnDQsXqLRMPbcCjR5G98UkoNBXxC56FoHdQiXpKsvWqR784qhMM5UB",
  "key28": "uHwQHhAEnUWgca9VbniP1YLjHpMqdYx2SjZit8KubwriRTWxEA39Td9ofr88BzqwKBjhkovATLJL8vsnxdasnw8",
  "key29": "4j97zaWWQB4HCppX9arges7BemhrowYZndyQuGWDnHR2mr7QWvFAYBH5zHuJpCZorHTqNp9zQUkumB4d3DyHUkqf",
  "key30": "2CUCiuCSB1uU75GwFVSpkAzDqHoWkBhjzJPjxYrp9hEzJWFQg1NaLxmgPk32CM2Hv1AA96CURVUaQUzo6UCBMurm",
  "key31": "59jz4zFK6FykkLBpGm95ci4rt6qFqFeVyHK12D5SairKayyQvFEtXLSkEN94F1xnvwqwniYTHGsGRgw7fheLeGg3",
  "key32": "53ZF6wUd5RpS7ux3e1S8NYoYmbCf2jRqCDw4pj1zGoicNTpihrVKLM5Z2JwvnYnYTRAUadoCsBm9nRCZ6gjzx3u5",
  "key33": "4hZ7zb2EvRaR6nQ72STd84dZdtvUk5SEUJYV7EzJshkoYuUoN9vobmqGNjcEkgBrmUd5ESAsrhh8ZRW19e2i8mR7",
  "key34": "5vZG5fQoYJUAjWNbeFM1miFU4tkAPvM6N4gGVotFySAJXfJvCjMxA52E2rv2UNQcx7fwC59jZsWoR1ukXHpTgJi9",
  "key35": "2pLrdDfUispDcDKj4qACzTYjcz1Uu2B152K5C9sgQsjnCp9D7kgkakwjQkVw9XgV8CDS5CaRVnGzFNeQquDXnMRn",
  "key36": "AyHH8f7TZXBK36NwfTHjmJnW4x7LxbYHKKv7kjjc1bVXB77src89TmqyDEUHF8qTumHVrcHoAnqFPyBwAKW5Fqw",
  "key37": "4Byre74oHexcbJRae6GqQy69D1yLMjjhMQDiYQ8e8YbHnr5FKrfTF2Q5sLDez21tWZN8ukhL98WrXEYQ61PHhdXy",
  "key38": "67MWDgGvubQHSkzKRtC6cE6rct3ZVx8a2cprQS26ypgDvCwq6tFt3bD3ByHCry27Vr5nGxLXLfwba12QMvo5xW5W",
  "key39": "39DuMdY5e1MJ91GHMnP9HGBUwswjrdTKuVnCREDdwExbqaipdpkF93pQ43mCUGjrcUErX9kd6U1jryek7UbJSbGw",
  "key40": "4hiJVsEFxvVUgbBu3Sf52ueR5vWJBdamfjEVJ6fuhZrXNwMa1D6eGbX51k2KMwpCAt78sdAV12k1mURJa3CAcyj2",
  "key41": "3wG86umW6v12JfWw5AeJEFRJCac8zZf3rdBw7dYWDRCLGNGC69qsdGNucLoLk4U6hAZ4CVPTp1HCcr7bdo6oLABy",
  "key42": "jnaTyUZUPRpVyaycaawoVVdDNSbJUqQqhmt9bCCcBSAbLAes9vQo3iwLTJXhhY61TBssfDcT4EdVNd2iip71x9p",
  "key43": "5H2ph2Q2QYtJgkGfHcTy7GatEvDHPZSHn2cqeQCuh39ubVwXWUnuF9U5vkguFfPZU2TrgGZq5AZWoffzBReWsEs4",
  "key44": "5taCRxzRSejNrJsBF4tZY8gfw7efT4usD5Y8jobdQkH6fYkeLqnb3hF7YBAe61ajwwWKAWgxUbxJHZiwEw21Ujkf",
  "key45": "5a9HqkSbyXZj1fyNVrurVV1b76Qe32tD55jmtuTsW7AG8WMRMh3UstZ4Zgx3YVLrxpt443nhVLq4zUVTpU7dhokg"
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
