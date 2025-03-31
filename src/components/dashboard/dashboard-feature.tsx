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
    "2T4aPWoF2fs1AdbrxzLPcsrv8jXzNBVbB2sadPkx8LRtQHNXMzSoE7ZWfx1sgom3LtxmNqJMzU4Ts1DA9piDnDQB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uSzaoWTxzxk75aGpE9LR9awTCPqR32FKghB2SQahdNzfhyzcfCMu8RESCpayZq9CuSUsEpdC5ih7x7b4otbdvXg",
  "key1": "49XKyfv59MRs3M1XeBQEbiZF6h3G5QgyWUXkf4kCDSMPjqxE67LEHCgq7qzjnxZDkdCLnDVRQV7kVijxsdVsgCLK",
  "key2": "5Q5JuS95TytYxpZ2pZhjThoH7gBvk5Xs1xmpYrESfEYF5MVPZrubmjqu5mGWFPeiHpMXhqb75kKpnu3sWHj4ECTp",
  "key3": "4JET5Mi4Q3BkKaXwB6GVXBb2bqrvQaqHdAJph8552H4ioUY1wEz3z76hzaEtvx7B9VJo5x6PLZjCrCqHspiXCjaH",
  "key4": "5q7qGnhNV7QzdXxmKPEXh86MZ9WQL9KhCcHY8ewPRUeTP8KLtxHeaU4sqjpbvqfqqbqxwSVUXuZMFGW4Gwjc5mvJ",
  "key5": "4v2kqaGkCAxMqctAzxoDZWeAxojA9uBf789KXYfr1KcN7wsxxxvrFZf8M13zwEqM8NcxpPzZi7pt18MrnsTPaWPT",
  "key6": "5of5NbTYm58zmHjbVcKqR6MeLvB2btbyuTppcZgBpcRCpJ3ZJGw91JJTpRyZTSPzXaD9hAhQ6uSoTxtBYphimK3Q",
  "key7": "2Si1SB1yEvcZ5sgh9xP331CN6Fs7LbUAVSQ68qgfNh7UPgcZM3VfdvEYL6NvoMPuhzBZ2MEiDUxb24Mdib7K3cEq",
  "key8": "2HdRCrtu8Pok36zSyiCTfbBtRAiRqgoXVGgj3zxwLrbc8NjAzfpUny6VQkRt2D4yMRyujVWHQzW6GzKDrLaeEwug",
  "key9": "5CLLCGRwyHCQQjv6zNKFBuLvSsVmZiwY79EYcMGwmjLfK2tsnNDL4zfTsEAzrLqR5kVAzPkh8rB1g3Nd7tMwAmfA",
  "key10": "ijbr7bvFngiCTPkMx31QGZgPGEmHip254WzLdWXWhoZ7SZArAQp19NodM1UNSpCB51AQL5UvkfprdFPGg2r4zqz",
  "key11": "3qaiNE4vFkChPDwDADTSAroRbSta9wJpaAEwScFRfNFajgpSyCMtRH6LpsQdLtUtFcgHULtfBPT8Yfjg54xXwDDQ",
  "key12": "4TmrBkysyTZUYUmfjSbMxWXNu1VyUNDPSje5mNwxGkQnEjrPgEAf39s64UDEChVZNLZYMbwcUoHW5zw9te1mp4qB",
  "key13": "4jy2yN6t7ZoqajFJhTt2ZRwuJsLZhHci2n8p34yxBoR9yYgiuzMmMmdHtjaQ4boQ68cskEBLtDa7HWQGtqhMi4JB",
  "key14": "5rCfP2FP1zcR4YKvB3CKPh8WNnTGxw6mRNePpALUVwRYMHyGr2xf8eAZTrmtW2MBZmA1x9Ac1GNBQGN6QEBFLtuD",
  "key15": "1sY8yJ5dsgYcmUpoRM6MTGz2mUccPp6uq4Lyv9qBYwoCVYftM5s7XBxVU9Zj7eW2xLxDFSaH8W4y7qFU6G3JchV",
  "key16": "qfqMcbAW3922QNiqtxL4xT8fvhJ5er6pKoaVcZsRDYevYuZ5QcviepVMf3jJC7EuE6DvctLgZqZ6HkCyZRd85ZR",
  "key17": "5y6VVCWj9nrsb2Pi8eTLxi6GkFkzvKya8y6Ayu1ooEYPmYiv4Xev5YzUzdgEZxfKSez9zpqzXG9FmiCCsunQr6QB",
  "key18": "4Qmua7ewun1mg131ejssjk5nG7Gmj553TMg14riYVDWMCW3YV3HM4Yh8zPYVHT2ePswrPDGb7U5K6Gtax4p8DJwu",
  "key19": "4KbLtU5C2CU7ZcTsUECiLmUiPH64kPRD19hC13Voisg92VCXFKxevH89cQQSRr3fUuwnpxrF7ZyhRCBzdZqiSNVz",
  "key20": "2jCvG8a7ZLpEWRpX2DSJoX1LTXQaxauJfGJTaXHfFzmLmdQ9zQX7p8TojSkKQjSjg8Qa1FaBNpsEFNday8vZNHDK",
  "key21": "2Le5pGikPEhCD3nWRH15uBBFSntXeFvtSQbNn4oi4tNZB3RUF9JiArrFyfR5fYFivwZWwZ76iUoGEzkYLSWFZ7yT",
  "key22": "4hoMbMwwWFscPBj97Ag9neJX4iMJMef8o3WxgPdAu1QxzziGonjT8wWSkfhXuZYGdHXDQf36SNuaxcgZnSrfE4HC",
  "key23": "2TRVtqyjCk9yc7LYXEQCFc29WQFPfoK8ypcQqduTFmxFv2jXXbcqs7mNT3LqZLHiDxpnkHpU8hLwN1cE8atmtwgZ",
  "key24": "4gEByUH3EkXBHRNjUWRo8cYMUjLrDY2HBdCY94WzrnexRjD1HwEBU2QKzpqf9zfDSNm4YazdaHokbEgM1XR7Agwb",
  "key25": "3eXJJghXBTrVAJoSYh2ohB8kTyGmeqgXQTYnJ88DBjHhxHmc8Kych4WpuERtoYHLpP84xCvDvBypaknSiGnTgqUY",
  "key26": "4AmT4rrJqMyA6XD6i2tqhJcNutc8tQHFqkhhwK3FQUb4nmgHGeCfsD8of4Vz3te7JT7Jd7pbz16DLu1Ju5G3FgLt",
  "key27": "5cHwAQ8ovmNj3FN5epu2QL4aLJKTzHQjkjVrdqK2nweyTPAzMUqkx7j5mDTFenCvd1TuAnZiajYXwZ77zFrNYvnq",
  "key28": "5SDsUDpejcxjZJWwir2LaZiAVMaQxack2r3rSgg1JWd2xi7GvPY1DiUt8NEgtfApCkHfQFTgSyWf3PZqRvPrLFXW",
  "key29": "28bpum5nrLUGEVFZ375qudZArvqLSnSTDPC9ZRqGjTadqqs2QXFr4SVXKfeu2Bieb1AEE5uvf21fZnHBmeF2uhcg",
  "key30": "2z6S4kovKrrRhk3bTwJwCMNrrEFF9fFLM7dKVBVwH2bf1kL8A9TEvaECBqGWrFtfgi6Uqisg36XxauqWryeuLTuH",
  "key31": "2q2fuhoVKK4qzAQaezJiUbLKRRxo2sLMUN1MStue9WcDzbtb8iAntNZLbtcZwWuLbTchfMFTUxnyeFSeTJgKsD4h",
  "key32": "5dd2yH8TTb5xkaQLySAHjvivXXcKLZdu9iQzT1d5F23ziZgKayBLRRSYZaEv9tihfk1EeML8eFDFtYU3WkBDnsML",
  "key33": "4cHeZ5Jiebx2uAspat9vmS7zRxkFA66CejLUtk5baUFzEHgptQYccMfrUU7HLFJWjN3tYLNJTyCtJSBtrrJfmWte",
  "key34": "2XnmZpbrHrKUZr7dhtUaER2bPeJYfRPrBnEdCMBJWuSkpnDa1ZXPqkXYhKfYWAdMVQiGx5BBSnJx9zCsAsGjABg9",
  "key35": "2kiFTX3JMXdEEe1JBLkYdG66i82rQEZWqqfXPPUnhRs5EY5Vc2RcE1Drbt9KU4peGEscbj6VBocY1PR1eyqFosar",
  "key36": "5jfyjFB2mwyZN7c6YAT17dFDT8mBXsfwNdnXuMFR2hzp7k8NVheghJ99kvvtvXxmZTXNq1AkCkdEPgAc4CS3JDfD",
  "key37": "STdV7zMn6ogRMQRtTCfE6gTza4LAKFWME4JRH2D9t6oJvj5qoxugBtkUvTRiWy8tyUdgBF6RBidB3BdV1arkysw",
  "key38": "5UM72kC6cpSNE3j9JsSn8UeaKHwZP1PTMAcTfGc42FXRKL9GRyMVdAUfTkjDsm2srCZX7vZuSXm5qeCNNCf8pCh4",
  "key39": "2KCS7RfSwhCfNxfPtZAkJqNnCgZtExtCBRrSS1MFHU12gX9DcK9cxvWUVXFFVWEpoTTT5mBueEQQFNdaGdcnrQgq",
  "key40": "5wbeAPjyCi33pRoSBBBgHigKAQi2TXbpChbee6x4ffmv9FVuSmGFye9r9nscudJURBDN4En4zt3fc3nDPeFKWyqN",
  "key41": "2oSerXPn8BwjQh4YaLVFjaKTTaXjjjYYp7M4eqiGxK3Cn3EZVTp4U1RXkaXq5hTSCy7dvsK24HctkLkckX7QfqdT",
  "key42": "4vMD7vBsZp96rdbmb5uyzeQWodmSJWeC7tHUSitghYJ3C7sLMpBXHt64bLxiBDGoe4EwzRRqFnf9wvkbJxpwFtcB",
  "key43": "2po8PniuoSHAtLNHSiTZY7n8uQvUMMb4GRWRSLqLwREseym3AMJwMn3CCw3TE7Q765KgNA1syerfS9ykuBjjKrCY",
  "key44": "4h7MVB1RPJ52jqt5EtrZdRE2SFxduKnAJc4jwD8TwLZowhQaEMbDxZWWpGe3kp9RAoZjxrQeoWouDjwcUZJfbBge"
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
