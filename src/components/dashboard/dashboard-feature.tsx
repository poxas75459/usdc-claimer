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
    "4nRfu7mmHyYEgkb3SBwLbNqS4qT2W37VBL9643WuxP5hKPRB1fzvfQLxboSK894Fz54XyaRiWrbPVqfa4qLuDk6D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZMU9gbgL9FFdnvtBcjxyRtnPPUqRhhuRkSWBKKEx5JNf6KrTzFjs65XfJmenff2dx7LRpG1mGAfi4ruUrbjqNi3",
  "key1": "2wnMjH9UqBju1qiefmevES2cyvz7A8bSrq6hJy2qanf1uBcGNrkNJybxpxHGT1d6LUyHyPAGjKGzsLfXSd9dWqCv",
  "key2": "2BWcUY4w1imFtswKCJmsWF7gBEGNTD6w9dYyf7bC3PHqW4qiQV549ng37hnntB2hCzFNsWhSiKYn8YfbVBhmF3W5",
  "key3": "4NuMHEphRKE3L5Sm2graRJXaN2L1FWGBVi4SfjBPsgwJUEUnvb4bbe84avJucWM8W31xmhPJcmfBFosqEKXLciKA",
  "key4": "pHzfPbSCU3hMbruMzJQZNe8D88QynVkhN43FrgX77fmJdMJkqwxDPvrE2MUkeZsjcGwvNgUGJkk7d8aDvhUxAai",
  "key5": "4oiUwWxCF88gMjE9syAKj32uGskHj8ZZWK4x4WWKtuabHDmAXzXm49AawrfYEDMBDybV4rbhqgmF3UmeuZDxfxfX",
  "key6": "23aUJNCouYfvvt8M9EZVxTaMTb6Wi3gR1mE6syjivXbVED9ykq7NKUMqYFWw65Q3sm53yBU6mApF42XvqL93DgkB",
  "key7": "5J8XJW5LovVD9Q4FCbWud63erajjJ2YoyxM4u3jFBQP9dtBVvZ1vYMp5PQbpgLn171MUKA6QFp92LuN3M5WNXh3k",
  "key8": "44ukaJ2vn6TLRQLagWdVwsQyeKrkErdD2SpZRaXpciAsKdfqxe48qQrJtLMuqwsdG4bi1ZU8rU9MeHBiqjAaMysg",
  "key9": "5xgJ5oGnpggg4zTira3MLYNMo8b89vZHnqkAJpqfSeLRDVFndQoUbioczefVJUzFxKMEdUfQmTPEb4ch9ez4U4FS",
  "key10": "2BXkbN8RXijukvvgyovtjrTH7wMaDuHRnPx3xaNvTFhyhmE1VPS4s5xCDhAR56pWpSpM7QtvTZUfMLxJnqYNQs6w",
  "key11": "4sMrDtAPw7TcxQKwZKEsnzRTxAPZpPUsf3DtpSyZeArQrKzA5XymapWQKCQ5F2rsUAmCTEiyeRwta8hf4FV4pC2K",
  "key12": "5wRcf1Q26Eiocp9y2TYr9FvHbCqGyvE643xwLNYLynG62tPfMnpge9Md9EjycQ4w7dpHtuJhrWY2KKMQtSnkQfPe",
  "key13": "5fsENjLZtaKwrHm4butRBZKUdFWtC5f4GoE2xLdiFKyzRrzZMQBwkuVEKqteEmTzoRHVc4JKJ2JYvC8vHZu9X8SA",
  "key14": "oVnxgZQeUWLGGULUzgeSYdDxrc4NVW2T8zZ4fXC2N5jXdZqQNoyG5uGDo9WZi8ubtTDCctB82gFnBstx8PGK8WN",
  "key15": "4ZuJydkhjVSz6vHGpNcoGQHymx5bhtqDFy1FRrpzP7JqXtrx8JmzQQbnFVyhh9T2Dq275FXZ9MFey2tnoGUK1hQE",
  "key16": "5s5cU35fSDGrpZbhB5pVE798tx1fQwZBfDtJQJcetopFuRCtAW3j7SibEDu6yh761yrNrcCQQakrcZz6gGAPYm2N",
  "key17": "5HGSjmWG6htBn6ciDdcVzPehG7qw2SFbVhTsP78WLbcZiSqRni7UpT2d6tjmKBSmWWqStfhsQDKHBHZxxtEWXigs",
  "key18": "2sFtsgwqHLWwU4HFw7BuFFWKVhtQprgV7U7Up9Aqg1GoRDQE6Dqfbznqswuk6LxBUD9degodG6eZLgBQJz1QFXmF",
  "key19": "5J9XmRMJEGaDNW7cq7iBAT5i5wP4RmRyDeLkh3EiLi9inM4yk1bndQP8B95HUmBzsKe6GT3UVGmJ11ZxsBJQwJju",
  "key20": "kZZtMsuNkyz6A7dycLVxUsDMFtJBEDrgZhEHbratXTRKMJCdZB151i2wBiiLceG3ouXeWaznpGAPWxJUPquJ7au",
  "key21": "3jJqEFbjNTMV6CMNvKVaBRrSMTixd9z1zccYu6qNY3FkNrPEPHMLbgc2g1sAfQCS7HREUJ6q7VnP76uAJmxAsYar",
  "key22": "5RZiMrPJFAR3uhU4HL76rSpdDNwgAiV67jgR4H5iBcHAxo7s63YuwVMPwj9zZ9FtuLwr9yibf1UttkAdda8ydxHK",
  "key23": "3RTx77s7DKM3ju2wt4wvKZRSp9VHQx7GWzakbFUsuc8zniYnEHArenGbsqAbDactoxm5NGfFiCyvd5KpBY41x9wj",
  "key24": "wNSsHkLHMW9VkhRcEAUhgzvVuezkDyjxhL1S6sHFhVD3DY5YjVaYbNxPC24ssmHADEXhxcKEAVVxamDEyXRnuDi",
  "key25": "55vMbw7Mwq1VSJuV3GmNm5aFXwcCmExZfe7yg8mwE8BwHMZdMaq7LxJk65BwQ62sJ9Hdubd2uHiF3ysQ6LAGF6GM",
  "key26": "4Ew46DxjPkaB1ZkDL5qQttgf2GNfp5aLGZ4W8m1ouWBitY1tNNbZcgiKgziTnSEurrQRkdwYkjh5dwHqvFwkd3P",
  "key27": "2mK2TKpKm5sGsGdcCW6ZFRxgBAwf465WFnFGow14uSRr4MNqt43tMbEBVbV9Cme8N5A4QTPp1ZqCk7bsFTByibb6",
  "key28": "2nifHj5P414ujzCPgEULCY3WUysq74KZgLojgTFs35qD8RFpfyYhZEHEMzPCWt14GVetGhEvunooX5TwXSLBJb3D",
  "key29": "3u2vVrVKcLwqnRrEQdFDwqiBScpRsQeWRTU7Y1ZkjFaRryvP2uy791QPTSGVx5agSC4hXbZhoS1zpDCi4qHqyAt3",
  "key30": "5yUcJfqBKHyVghS17QPNbax6wjXeuMsxVQtbJYNSxnzidSnhXzeKiCnVZJ7rWrcBbaes94DYVEZscafysdt3qhhw",
  "key31": "3qtg8DNYy4MzJz8U8D24Eg4MsvdkgmdtaJ5wkApj3N5v59cfN1Z5ScLAiUVxrMhsezsvscFwQE8XHQFUEf18VqVb",
  "key32": "vJHbY2sefXATJrVEeuZYUFeGTz51rWeZ6p2SvEzbWckTTRqSWqMt1CKx2vwiCbjgsb97Ey641unYMLjk3Z7r9W8",
  "key33": "5jn619w86cesYxehNzGz4GCK31vjBfYgqQqeAGnGX4GgTKQ1v5LSY3Kyo6vc55rY4SAhqdwcGzRFXaozoNR639AJ",
  "key34": "3yVrSYWjAfMsjafsc8UCUztUdbUfoLVkXhTVCtRmPjnGVnWxCvyMjJ2reru69dkkUuPVGfFHnjjKt9PvY25GJbWo",
  "key35": "5QHycxTFKXc9BfkXgzQ2SgKHTwVFC4SbZDrwvzbuEReKw7mUx4WxGzS6eVxpz5nbaayJm2o79JWGLcJnyMS15yHd",
  "key36": "RJ6hZY3uQYLAgKK8oM6gG7JdnaFC4AN8qdXuSQ3Nbqv61X6111aFKSvbre1LFUy8aeTBf9VchsKkg9KSPaEQzuK",
  "key37": "3AxLNZiu2cf9p6JaKGx3UsopsTxVRaXn1hca3M36Sawa6T6YrDiBPohWSk4cGvPbZTU8FKcHCaxVzB1VeJfptZHk",
  "key38": "5oFYktnX1dkr6DyWZ8jPkXAwNaXb1gkRuhkJCVodkGsqhiGhH8Ktp6fh8kJHmm4KtKMbCh1TKU2NNgT73JzWsRWD",
  "key39": "GTUbJq9Mw2ncFyKnJYD8qhizTwSMA8PZ63D81jCKswPW4VfwwZRoGET6qu1U6WFVQA6yq88Tv88VXK1e4z7R6Tz",
  "key40": "37wpA4BUUiAkHHaJuQC1QUtVFYiZRPY8xUiSBqRrTvVAYxFWiHL9Dv6sEFom3yb1NgMHKY2CCSLCDDgXdwGs3vtb",
  "key41": "59Qu2qRBSxaVMLfTpauaXdoQ2QAmvJqBFPG613rzB6ZUZmvUkLswXAHGSy7c7KcMiCh8sTourVzAsAh26yerWsfM",
  "key42": "4dujQdbsHKK6HvfaGfZzjsVYPB2NMSy8CHpvZgLt86j2YQqKTvhYwC47HUUUGdVdVsCeenR88rDfZwinStTJnT42",
  "key43": "2z7xrVcKDT3sRyu6iPDNYcLjhkfp69rDvDWpR4L7ZXngyghpHibn7uCp2UiDi3DxruaY8X6GhfAdwE6u6wt6zf2v",
  "key44": "51BwderaXePje6aRYUPSn9SMHqZhnA4TVRZrkAvxT8bdScQMXDPuuCRFGibZDpoBwX57U8gvWZHuhm32BVze96cU",
  "key45": "3WsM54pk1kZP8D1PZcnh9MAeMzwQ8nfDpKRYy8RaMGYexBQnHQVaA91Cn2ZHaHL8BVoMdsUHEkGPeL8Wp9Kypvtc"
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
