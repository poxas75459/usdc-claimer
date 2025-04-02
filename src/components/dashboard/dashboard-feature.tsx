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
    "2Dt5w8kDLyKzFGcFcX5mEDpfRMbqadR8ThpeU4niFnjDDbg7gfsx29RTtkdjEcqKhhTQFebvoTF8QR9MVhZSSeoi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rwKVBLdagrA45REsq7ePVSQehrzuuJA25KJBPEsx6ErioWdxdj3nJz43qPidnqC8gjC4M2r3TnZWhFsgBit2jPd",
  "key1": "27VPMrPFQ49WswGbFMnfCwMSMXUpB86f2hYfsahXv5CrScYUL1CDuhiidFSbUTJoPuEL2VWktaMGSXZsdckgLo7g",
  "key2": "5U1q7odR4b9oaVjgND7n8KKaePA3L11tcCQeDfgjnD9FUZR4xfEdoyVbu7yUUK1tAhss2dCmViTGQu2RZCV7SZnf",
  "key3": "5yS1gwgvDAFcqve7r5uB4yavG3iBnaWeNizx8LvNkjJdAxj7EHy6u6PvYAVvWk66TAEkrbzkFruyx9xvQaCuWSW7",
  "key4": "4QPxMQ9mwGFgtxJ5iYoFjjevrB1CvvMJHeTSo7g34kpGa7CAC2acaQnE3sAZcQcZ7pTp44L9cPMEE8LJWPGAZkVW",
  "key5": "3XRNbdoFuAHpRjLhwFwCY5wrhUw8JKXQFmj49rFyTWyF1AxfG34R8UvY4FRNbQamDyy45CSmBT2Xy5NmPrzvxWYM",
  "key6": "3LtXP2VZoVPkMCzLk8FLgh5LRboxZKMgXAJLKocNRVSFvGjYATsq9DTaed43dzHTjJKgMoYfFeoexESfpggnXNTj",
  "key7": "5rNCW4aekDgX88MAwBCXrMYWVmvP81qR25GiuWBJb2yFXqAPzXRQeCs8SQEZniLnjbBKBuEaVZKf1wEnb5s1yWsn",
  "key8": "5zF2pRTG8nvQNRhyUNUS4KK59ruMg7TGANVS4uQoEGHPuzGunEgHR8u87A1zDeweYAU9mFbtk8kPyx3R9pP73yQz",
  "key9": "3RsicXgeQ9WhgQtkFv5gfQBpkD1nW6YmUe895JiiCBVAGshFDjwQntG1XjRHuFXvJpNJBSeiwTFkSrhM2t8FTdHq",
  "key10": "4KxKBz4aBU85kKYgmdN3SNGM1P3Y6ewNjUERbPZpFp3D7U1pLmcUqc9HnNiWHbVWGkxiWi217bz3KUje99pZuAw1",
  "key11": "5wtQeyKEndYhC77jQ7u4wiZrgjqqqouQZDURjmas6dpT3uuAXpb2C6zaacoy2wE7FBdHfPuyt9nbea94DBFvKVda",
  "key12": "VrLMBDoZgxfV8QGzmqwGJnaQ6U5ZTZ7DDfV69f6cdiiaNWjNCMvLkhDsZ8B9BwjZTvNnZgyhbhXyY5wbGYHeQAn",
  "key13": "5XREvUkTj9i1jw6i51XBCagStmNBv8J57x6giwRWiEozvbhXtwSfqMa5eReF9PiAwbn4apL7ZFNTGXPoqsxVwSxR",
  "key14": "5ZP2JBsWLanpfrCDG9DjHZUu4EJGT7QXN8yr8JrDDVeExtMqiT9CLe4MW8cmqRDpNMWLkciQd3DqaZMvJfP27j1J",
  "key15": "3yE4ZV9M9SX13tZDChR6Djri36aJTDYkkNBj4Uv7qkR69rk2FAJtmSUe39XgAH1hPaW1DFd3gsJ7kGi78FQvvnBg",
  "key16": "2An45krqrh3H7kwx8YdDLp8Uz9toCcS3Rr9NL94pc83AjjiaX6K5msXGQ3Y2H9s5jyALjWwjaLjFgmQU5GmVo5ff",
  "key17": "3kr7uRP82j4ZA4eASzvvjuiMjSK2BhTDp2rD38DUsHMKDgx466S387Qr6F9PdqiiimNVMSufGVVag6zBp3uK5Z17",
  "key18": "4QkBJCQUkuaQcdRpfmy3F92mGqrHfCoEZN8UZDUcCFjvnVQWSf2FxNf8C6qzdeYYsEbXUwv6n9oWYBRvrg9ft42A",
  "key19": "5XBC51T5mZbX8dWj1bC9XZX1LSG4Cw2YpaMSW6EeC4DAQNTPaBF4nRcWRkNMexL7RES64T4bHW8N9NNC4Hnc5FwB",
  "key20": "s7FgE229Mop7gaWKDDDxa3bbLrW7QjH7HTDgme8fStGPvshn1EZj6RzswqvRQ6x2kyoftoKpyMJCRqpgmLBUdq2",
  "key21": "3tD4UQxs5FRB6i3hbmvLrwiZsoJZCg4yjKWUXuZmUDoBikMph7QuLJ6Hgd4ykPuexz3v9g3gwQEhdqt7QpwXdfh9",
  "key22": "2r96rm7BuLfrP2sJYDXW3yo2y6twj7yZmBFUgFhMoCLkknz15nYTZwRPWgRogbf8sGvcYUj21N646dbtfZ9dJYJK",
  "key23": "2pzjwgZL3fQQaBg5PWThWL2EDWTjtdKksgUjKspNVVtRpoxiz58uBiG4G15JKJdpbrU1XbLDTgfcjvkpVQvpfrKY",
  "key24": "3sagrE725KNpR4UuYHcpgRtVYQQTdyJ2Kqsf7g6omZtL4TkSuLydty41vTe6buvE9mWdGkqpUvVFzkiJDFfythph",
  "key25": "3WC7MRK8xrtZi6mHuWL1zRQEt2oaN2u48REw9ygwpC5nJhVKcAFM2ZEWgyQHWYN8HKGBNpNL5CFD7jAw1mD1grsp",
  "key26": "2ta7B21w6SL9stk8qurr5Q7wvzyAB5mtFNJMqh2tCFi63zRUrcxK4Bf9CkGqgV66sSPuGTsD6YJ2rLLyWEdvkACr",
  "key27": "4xSgUnax2U1vsqdVM6MjQmwvp64ZToPkdLWecXxxif3wbFe3cEL9DgRaGxYF4HrMEvUNNNSQMgrCD9WAddV1ASnF",
  "key28": "5Ua5RvcANTpWrN3tQmUAoLaAyB6FsmDn3kufLx12du3cP57PrxJCKHXaK7m2sJcQJLaLGhsJUqfBz248YGnJwDia",
  "key29": "292AxLRDokEPRMP1XwcNizRfsyjrQqDA1Wa3ym6XfbbWGEVyTs3ANirdPdMYwjJkQk19GeiSReTrZZvetwLM8Pus",
  "key30": "3ytsGHpADpMoGDt6HArB7CpBGQMWgcq9i1ZLkrqUw5xnc6HQPikexYYvmfjbgAb4LDeih8n182Jzb35vdiZVhtzf",
  "key31": "4HsD1f1v53yuQr2wnJxrjAmnJVsmnHXWJRRMJ8SrEcEX1SMfWkM2himfemZ94w21zfDiyyGDKPyNUbUSHVrz3XkV",
  "key32": "2mhkUCnBghnY9jGumk1AQ31H6pgb95ga5btFquZ6P6QkPMDJZHwoYctczbBGYcjRrcnc7tSA2bgaqdCtF4zjP8FX",
  "key33": "5HutyHcf1TTHsLZKCwSjSz5FfmkULQYojJK9XTQwdTUx7ER8cXmQVaTShHD5zCR4D5U9cBgMce5E7BkKiAKG2NEr",
  "key34": "39EpPnARAqRmHh1Y47dVsuP3hnFggRRvRM4tzn1auz5wDoCrMFfyTvbkHnchPZixj3KAoc1eu3o4J44FQkbGLZny",
  "key35": "duUAHX7u3MW5qpZR4LzxQZY9zMoN4oD6o5vAQMAZh6kZbLZyT4UrSn5u1H9N8QN1XC21389b5bgpoBm2CWBMg2A",
  "key36": "fWoGswEDwNo4vSesvDTERRms6ZVx7pZkTEmjDCck22C6kumSkkmx5RRjEokmLUZoT62cKi7EbucANbZghzqxxmF",
  "key37": "4hrLTRKQBoSV4jR9azzqBS3vriRPHNZ7djghdNzBQVyWRPZtnojBUzuuasZLnqVk3nYmxinF2NKkq1GJrtBDxt17",
  "key38": "4w8agXy9rjmDfHkdhTam8WfN61yWZLPD6VTLe2auBBsa4DPKWAnN218JzLgoYREYJ7sDSaVtMujsECGYtnEAKbFq",
  "key39": "5BG2UjpCfGNny1wfe9jCNPgzS6ikQDDhgmdfRU5HF9CLy8a5LfRttP3ZBcbttytViEVsp1uCjngHAavhz2D1oDGf",
  "key40": "4epPvQur5VYKATJ8sYP38diAfWqJ9rrtPqeT6AdtBPWrZMVRD6WqVVv8zWo858dPYf5FeoJvoZYawyJfEyQxBceq",
  "key41": "32RT5dbxhK11akgJ3iSB1ASp15ugVt7pUNkS62KYj5KBtf24hUbL9FPzCzTcZPp1bLvQe8HCjR9ezC1Xa6TvajA",
  "key42": "2AmTh83cxwjrhaCcMHsnJV4sMKteLEAfNhVhC4f6x8gu7hMJb2mZmQi6yU8BmYqAsBxzitWMVRtL9bmM1nJyZ2kW",
  "key43": "4QR2pdNKDdygB5HJD5GG2DYg1HvDewXSeugQSspZK7ZqFJ78MX36d4HnqfNRL1cbHpj4FnPee1ezaFFTUEd7Hc9Q",
  "key44": "2g3ajRJotjDSme2wx1osfJsv3qNSY2FQob5ZBjkktBmgrb9oi6pdtt7kmw3JhZhtAa7atvwfagGyQGFJsLRPcs2E",
  "key45": "51eKv8VjkwHBeCyXXXT7Vjn78cTSrSAbRtmkoFrFukrJnXjL9KAnf4ZfVdTb6f7rigP9x8MehBisPMJhwQJF69Ex",
  "key46": "2na68T6mhTg7SZNnye7u8borqefbYw1rvivdg2B1ugwM5TGcxchexcNc3saZbZTVQU2sguLwFTU1CazvTApvJ5dY",
  "key47": "tb9jPZEL2QhwRFQWr5xRJ9Ak6trYbriDb68q4Wnw146gQDYxY7CihfUVX8Ayanen8FV9Ainh9weHZRW7aakJ7P1",
  "key48": "5MCmLarSFHAs76rejzF7HHvuRDfAD8ABgjn9m5VutnzXw8TDD9ikFEAVxHZQck5nGcs7cYcdaaz1cX9AUUHVpyyb"
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
