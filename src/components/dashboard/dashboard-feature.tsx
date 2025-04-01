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
    "3APm3GCRafzJvzDAUUE8njgC3msqiqDhCyUP1CMxaL47hQmUV37CKhwkn4bGuNKvfvELNhbtCYdDNiUBLCMH8QVC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QZTkhyXeXAYFZbFMFPRgypPUX72r35DwimqEGD2NUo7okWcD3Z8Xv9JJpPkxJXzizJuVmcSShvSGYcG3T8KRGzV",
  "key1": "55xseet1xpARqZwG6r8S2A5Ee2S38bVT7WCTaqfv9t3dmHqrQzQ8f8xVFoAAGfE2XHCotK4Wy3ytVf4rKXMJfwu9",
  "key2": "3b4TBaU9VP1WsELrcvZiLjXa2wNGYkzcKG3KWMzzNEg8WjPMncVVFj51LaeDJ1GpHgtnHSoRVu9ET8aCyB5mpcAF",
  "key3": "2K5n2nRxtyfpRBBGbhdwj18W4A59ahccAKRCLR7uvmej3DyG6FvXboLvJwJVoDoCJZR8BqH8tLeEzZKaeDq7o5Nu",
  "key4": "3X1knyELsABqSfAtk8Eb7ToHhzZH9S9srezaxyLG7s4rv6LdpUgcweqcKRF6VsFRBVBrvSVS4kxuJ7E7gsD8AiFQ",
  "key5": "2e8UPJ8GyRcLgUKxsSyouPaizAX1LjCynZFDXAbtXhfeeY1epdDu3CxKdsAEyu6ZpjE5pFkYAN2jWW9MR96g4MKB",
  "key6": "GcYeAeRe2CUxPxJSHoh36bggQSxcsPbsqXMDYEogbZSSzTxpJhViRRVd2xZwYtut8e8Rk7JmidK5reR1ecu1dbn",
  "key7": "37D7sxuxyADErvfz2W7ouf3sz4prExrA4kCsvbq1Cy4XyHyXeYzgGaBSVnfk2huEiJEmL8bgym7A8iDcR8t45DpZ",
  "key8": "3gWv1GmxxkzFZby3BQHZFbZYUCZ9usH5D8qWYURWr3ggoYu81ctCNPZhJrhxWvVWkuN74zJgFFJ643HXJgqxzZbb",
  "key9": "51DT3NyDwC7Z9XunFjhAbmpJ2TpaJmNPvkZhZSW2R6dMfEErTFitskouUFnRKQWB8ETKnEZ1zFAv79rSXoZe5dta",
  "key10": "46A2zcn4JxXH6RZRXcGduawWAM3JwsiM77ZtDVme3T4WT6SoCPefTSBnf16JzVpBHJPoFhzNeKU7b7mpZheCXFvm",
  "key11": "4hETEtoZKUCz5PDwWS4zsW22FTFxtGBX9Wr5jwtLzDXHDhzbK4AZ694xeHJhms3TYHnHEyUByNoD5RVux6YHLVjM",
  "key12": "53ZW1F2dXfqT8HThmSh8WE6s1jNgkRFs57SCcPJNenf43CwyzhANPNKYk5HaTfzRqG63S8Ax7HvKGmgkcp6CZydj",
  "key13": "3DiL5WXpaFYTGD1FJ5w42UTAa7bHqbHVYBWQMS5TZ3ts5BcBNYbf5aUbUZvh4qjXTsSnpLE2Fxt7dAKuMmzwn27d",
  "key14": "5AvZgJuxJdhXJ3e4pKzgbcnWHFap78BnZsmy8aL5nQZj3CpWQBjhwGbNaXAmPmvGjdtGKgYsVYEoYrB4j7s9kQb6",
  "key15": "3xcvQaGHh8kaWLmqG9snAPLg2HeBMjZs62SMvXSCVDV5qUrXwUrDqJ28iewCMXKXEYJf7Vhmc56cSmktp632eSn1",
  "key16": "3ZhgGZnTvgUMoceFWCR5grhkgAuwMjq1pYb75UZJm2xB3CTUmgrK3GtwxHrZ8P65Y29JmvkF3RejjoEGcNwF7rsS",
  "key17": "2paNQAEmsfH9B4stHMXLwqFaUBth8jb69ZpBfjknR7JhX9Dmwmv4W8b12dn7nVjjW3ouJE2Hu4BwyytxQpM9ZZzV",
  "key18": "EwtsF4DpXvtchBHexs2wTFqXU9pKEUVfTtEJ6nAZ4391SSugkVZzwx6w1S9DPr97wZp1EL33mKmjT5C1Mpaigvk",
  "key19": "5K5mJBqkTQNbBKGnjpBJ9ehpMcPkHGfvpRrxvhTvtvELUpzbYx2afiRzdQt8d93eVuq4h4MGfrfpFAgrtzEw4y1J",
  "key20": "2XsuGg4Qx19ijZoW7RXm7qvd2dHssJsips3skwcCtH1sXUBvm7o3ohbenenRCsArLxrjQtNaVspoPkopT3Juz1ak",
  "key21": "3vmbfFVdNagwoEm2wBR5E9BTjgAjUtJtN3W9j4xuhnnK5PEfAVf93uGCA5DuGU1WkZHSMpkRPc2GQadN1Hx5peyc",
  "key22": "4c3VWxupvHZRCVhpJrTEUX4zmigXvcHA5u1RmDHWYVcyN2EZtpeWUCWhbk5X2b8i4Fr1o97MdgXVwfCwd2iyjSz5",
  "key23": "2DFNKbXJP32njeAR7jiteKxS7tjx9cfPdStG3LDCBiiFxNWxtcc39c6wD6L73SmAVnB7Q75sS6nr5WW5tf1VfUzZ",
  "key24": "2w7jGfWmoWRYdoPv9SynBGv9vhWTkumTrq1tfRVPvQwTj8hhbhVTyGxNsgq9jY8Yn9BbfciGWKPv9bY8RHBddWNm",
  "key25": "5zYXdqMMHcaiNVMBj99pQuCfL53znc6tR7MVYQxjnwVJs1enA8urY7agjVwsg47bf2Z1RxFpx6axVFon15TYjyTs",
  "key26": "5spKUrkdNaCCPoZxC6UQY9EzjPw29mLHetG5obeP6wDykzuURoBEpugbryLeVqXMnvpKTZkwTe5dn3DL2DWsD9o6",
  "key27": "3FLHzWbX3W6UrKWS3X84i2RwLHCFyaRZhz84NHzw9WSvx8AJvXbvA3AeduXdG4qcw7x5SNFbdjvHxrrrzZ37Fmuf",
  "key28": "64TZ7KwJDio8FoWL6VM5FsQX4jsJUNkRRUqLo9RvvLD7sAxq5BHDD61hUeh5VYHdNP7wEkLyya2xdzj7zMitydpx",
  "key29": "5QEqwxdPEXgw8LfnLZQTKTVjCsY4pvPyyzqFSArFVk45qW67xg8RyJRJL7h1KShUHyd1wMQbkjL9yLHwegYNy6QM",
  "key30": "2SqXMYknBuhwEPfxExuEL4Xsc7JRtu9hf67ENwZJYS7yKxDjFR8Q659q4jC5h6zoV3qmfuN3fULcDMBss8jSdH92",
  "key31": "3uRDbyJ2ui7swYXK4mye3w9h6jDfEr9NXQbq1eEdPZH38RdBEFbopZDeMGybzfsLywNSQKQRHwMpAawKf8xY9Loe",
  "key32": "2CM4f8Koq4HCL56zrGtKZV2Q1e81TtXedqBbiG7BovoAzsbs7Bo9MZPr8uqXyjJizpwWXQMjvktfnFbTpgrUUQUP",
  "key33": "3euXgmnyVucwykqqC2hFWVcrehgF4YBabQWdeRWFCQVWBu1ghTzZruLbs5V7SRSsHJgi1FdrPkZbUA8tneL3fKJb",
  "key34": "3Mo4SQq37sTJqzkhqjrP44MczJeAHXMZRjpiG3Yur1b8bhzydixmpu4UsbhGkfyvSEs45N5CGP991R7duP5DxgVw",
  "key35": "2isJhKSF4KyVRJWGSExfbYdbsanvSBD8BUpmPDDJN4k3zZdBpoxakFtVa43zd9d7Ck6NutRrrLGZVVD4Awq6XnPx",
  "key36": "4gyeVWPBjxRnNRXxGWFfD8rpzJQYDxMry1mFJ4kvvHAFdEXia1yvz6SWaH6mgfGsQMaEbMdDJB8Tf7M4atda9oCS",
  "key37": "3jJVXffPdgVo1t8rdmKbXREG8rytPWEm59qibiyZi5ns297ng6qFhqx8ZvG52Pt7VVbk5iDSUZkWKjkYDZqf734M",
  "key38": "25fBAN76iH9FcwTswmHYK1c9JdSM1XZM58DvMU3q3LRFCd7ZECczcwaxf8txnfeFWCg8VDyxAap1B1R1q1HTZSQu",
  "key39": "2qNySPpfwQsgwVQyNchKXqxjaqNFaicyBXk52o9h9g6AaUjvH7PLwASznYufQx66ndbQeWoNvp1oRD1d6Ph8pBHv",
  "key40": "4j2ZfZbAwPz9rnaUpPyohZRmMgxZFpfF6bGb17JH3PDNPNLtYVPZQikQ4mvcb34DEfGPKMYoSepsr1AyJb2o1F43",
  "key41": "3pYSnnA2S3YY3Qr1EBi63P175am2SuaH6UGW3S6y5GBmowKKAQNZp7onxJzPsiEH92ksjhypmwSpEepgrXxG6QmT",
  "key42": "5REe8KAuwjLWqc6byqSysH6G4gAsPASw2RwYQocvjoGyDsV6Wwa3DCvPtGPxZw2F8x2KGYJ18zhGhkNDkowM6vY8",
  "key43": "2oNbNbwfJghgNTmqPufDXoJRatNiiXjwkTM6pnWA5HEzZbYj1KV1shnrTvewg1k2Zyaifuk15xoubNF6nJRFXeDR",
  "key44": "4U4U5EbFcxexu1sQc6HwXKDFniB2V95jUnbH7mFhaZsa8uF2W3tbJqigpBLL44eTaY9MbKcYyCr1QnqsPNT1PTuT",
  "key45": "3d9aCDdQhFj6eE3Y4CHmjq9GXM65U3ao56NcUao9thfbFowwVBFCdXgDviCC93e7zrpaaKrQcWCEaiZPtzZiEYYf",
  "key46": "CQ1s3PNnB6FA8b3cviHzGHGi4vxFSA138ryMq3ZxVKrrRfcYtuCEax92sXD8ULARLBwsdTBBUajN5m33U2ejyyH",
  "key47": "3y8Fc1koZEDrvoriWi7bHozDVu24MVFp5oKJZCSSgAy4ghduo4bGbJFK4JcV6EqkJNPXGDoqVT4SumcyYXdagLon",
  "key48": "4EErFhMruVEuUt5VLozVbwubtoGuTRkXNdDCEypsR8vaparwc1fBsBkzpQZbcxsoZWNAA7BviyFHvuAsLgYtNQ4w"
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
