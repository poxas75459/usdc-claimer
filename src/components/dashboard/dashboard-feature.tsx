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
    "3EtALFnwDrJwQBLTxUnJgaVcfzVexKQwcvwKwnovViwkzgjrZ37sbpicA7s3fRLQ8xQMEukgCd2gQxfzT5YGHf4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fNSh5opLTphT4rrR3cfzSzEHNXSzW3HjpmxC9hN3Qf6Gv7cbx8PKF7JNimkryKAxzVFp5xZhCNbbLiATJ6KmxAE",
  "key1": "4iTV9FivgpaYk4dvSTVRorehHQf4Rwt9twsYmtgJuLvv9B68h88FVK7RGauGDAbSqKEZmG66cMNncvo5cu6Q5sDB",
  "key2": "5FL1aWniFupJL8Tq6kxPM5KmgtMXf2umFWa9BkrzBnvGSuLDP7bt6zwvZMox6CwHjx79tCTdN7h8W2XDwKJFg5XV",
  "key3": "5MHyMYT7qizk73oq8rzeKuXMjyGKKM2WcMj817ZUdEaboqhxfFzLWSVqNHLwWHHf6QdLHP4ZFceuoZ1UHrQYa4Bf",
  "key4": "5iMPnSvStxu6kF9oesopLYFsJ6KpjKwq45MxrstzXmYJK5yHqaXHiioVt1zEoSs1VBA4XqLJQhTbDNMVQvaZprmz",
  "key5": "3sqggaon2XhvMKRsdPiGRKvnFrxdyUUqxrsxwJibjUsoCy5q35x4vJHaqedtwhqEon4domXswrPMN8Xw9QG7QRa5",
  "key6": "2n1GCA62gXPe3Aa3imT9uXXJDdSUDjgGsYZTwdJsNX2yESjTtPZQ3yrZYuagp2h56HDj68Uwkfsgr7gHfGFJwnH2",
  "key7": "3J2n7WLqKHmPLmvcLnyz6pWCNTZKnZbXm26kxWdo1T8vHAjB9dnaKRWTWJG6dcW4VSC59GmgkeZdtYvri6BZBT7b",
  "key8": "12qCCquDoZFjFSiguu23pLJ8kDVtqrAXrqJ4BLoKCP65wm7LC8pQMhrpXyfhMX8igL8PDGUxAHZxhh6UDXJJoX4",
  "key9": "3Bjm26pyKG7hseH4nYCuvi54s9DwpzHaYSpC6iypMAnMbnhcVmsaAF4GJzibUjU7RmvUw6wE3fyLYiCxdYtuaPKv",
  "key10": "r9snnASMVhWVfroAJQhteRgzMKz3mMcVRNuVSBLPEVKrR7L22EnW71Q4RxJrv21mvof2ncnLvFya18X3g4VUuJE",
  "key11": "5gUk1spC1dVZR8hVXGurfhR3wvLkSNAkYTxAPLkwQYrXR3c3Hc2CNA82NjJc6BPM7pX4SxBiSNdGk3LmoZdpnYks",
  "key12": "3rgk1juTDFCFauQJkDTqXUesfe1snWCrr6CsM97mrzeUKfvsJ4TycVABhCAraVTWs4Yc5G25PcwELW5jxuBCPEzs",
  "key13": "2xcVTDNoGM6Ez39Rc4bBriVzjBKs2t2SBZ3K18BndwJEXV548AuEkVs1bMN6Fi3fCiiCJ2zh1VurstfUCY4S1NTF",
  "key14": "5aDboEY2MEZ4YGpPUcm4vjSdgruZsj7yAGK31hGzeUjNpiQxFgT53ZZRZyxCuc56dMq2Nzbb9V3VVzEf2bd9mk4M",
  "key15": "pGf17i8ZhngFAYKwfwnLy1G6LNZwa8TM5YaVs2R9AtCJdhBTgtgwkhfPvXJbdwjwQdUhixoDWZLqjEE1aXRX8k7",
  "key16": "4eYhLmBTpVvNUpBKRvqBiQmrspvUStpFm8zZ11DHCtJDFHneQVRN1FkcGbdkfCxshxheffJUTuJtPG2mFFe6bzdu",
  "key17": "5FfpEjnWHgcBjmkWrMK3z6wBShkiM6wEJXWR2nfjqdCRgsEKYfhGXNDcG3jJuhQL1x6cffsW6xiKvBK5U9RZ91D5",
  "key18": "2VrDkgfSE82KkxKwNAGea4n8wDaWrKoskPmSKgKW73qwzNBrqLGCxvBdssiL5JLKkTXeV3S8omAat7wyL9W8ZRCH",
  "key19": "4GX9KEvFGbwJMtqp5qwmkejC5DdrArG5Un53kHUcvnA7VrKpcpi32VyjM4AeTG7JvKqMVeSvpfj7c9cErT1CZibJ",
  "key20": "6dXRmfzd27ZKvx12GMkGcRQP5LLXvdbP3bbcNHdgM1mCTjQBDUwCeNGfy2yYAFTbz4DKMpTrHuwjx2M6MC4zdjt",
  "key21": "4abdf9anX7yZ4rq7WdpzruCeshziBA3RajZidEPwQivn52855HXsU9fbKApbWEzERUmMn98G6WGnHLnrdJvVPdzX",
  "key22": "4qeegDfakqjzUu91gpT5aTe82R5TLryhKfg7hZT9BpbnkDQzMNNS1m4QxaWJTPaY41oCt71m25G1PqoVJJD9A9w5",
  "key23": "5cd6UJwQYg6BkruL5XTW3kuyBcSPZ2Rv6dXwQwJoonDdn4972UuZxrunca8SNfYG4Lei28iM2yKKyViHnntVv9gR",
  "key24": "3xWjStCbNYG8vg5w3K8Ffed3D6fdkuuNRFg71Dfv6bnCnuapFqBACYdhNkS84Vo34UfmbZRGWv7xE1GEUxTkcKJ5",
  "key25": "2HpTLcBWzUmM2Qa5rzWFDnRh82fpAM3UiDRGXYPuhfNguCj5nysBz3oiZnwB4XBCHqhfR8DkBX66EXKpqfGjQSiy",
  "key26": "4vYHekwnz6oZkntsxAfYeBEMJzVck35etKsmASNstG2v1mzhw6HycPdVs8qpbWCd6Ptr1cVQb8gepjxvYztArcqB",
  "key27": "22gwTWGixUNd47zJKiPC6YVL3fAAB8hiyNjvBGUMD5aFffS7zqTeMSRNPXX8EHMhKou6EMjLBjMyt5TxCb1XcBss",
  "key28": "591yxVPzmvecMKvtkw7dxBi1SxeuYWBjp6thBLPtEW7gNJWKMx9TBgiuFUsENhqtr6En3B1JkDd7ofFD3T2Wxv5N",
  "key29": "2eY4H5LBftk3R7iJr8FQtVdVuVwg4P3QwbbNmTRBofT3wM6EsXzU1YaPh95ooMoK2655DTEr133ti9pU4ZovhtQ1",
  "key30": "26ZmEJfwWinoc9KUZdiqmHFWZcwdcZMVg2RUYVhe7d74qbk38KukN4mqubz9HjY7ZREoRcGdQgFvzupioLSvYjFx",
  "key31": "2DDuQ8963JTaW7WdfAYd8MrLYVt7GK7HDh8GABZM6v4AXLCXTXuiAHw1syMEKs11oT1hq26ZJPVBeZ5LZ4dFHgGt",
  "key32": "5dvM2rbKHLTc1EpHvfQ1bnt7wmKxiuASuTScgxWKay5DpsGhwkSGQcJL3BjGAvH9ErBbazYEtF47sYBAGtBLaUu4"
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
