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
    "tfj5vuAZ6EWtFjZRpSBM75EfPzQBXZ2rJdXVqGj6LWSRdNnVnd7cVd8d1z85EwnninY6HAGBkk67VRRgc7uDAML"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aP7xGVu5fhFBH6RLaP7dGPyaUw9FKHycDGbAngrb6QgLwGtj3UKcVvkqmYiwiLZCBVyVzpN2vZXfA3abqchkNst",
  "key1": "3Qs18QimmoC7xRCwb28C2z3kDYDdEfZHoRmnoryji5Fdh4n7b9NqaCWbENEUf1NQEUKeVuS9EY939GBPg6DskBDk",
  "key2": "3TcR2hwDo2vkEZcfkWskUCbH3PbbgzTffjnUY6HpBLH5giCUym8JdohSKFYbVgnf4zkBp7DjYsCFgGFTFLc2Emmm",
  "key3": "2q3fBYcNeqU4y3vzTQmEzf3FG3ChGxjyPRtoHqdoos7wjtZgF4bqDcfTWQZvMmYZ9n8cdQSjtwX6ux93LYcYDKmx",
  "key4": "6FAa5LriyXbrzL9aZ1Tze13U4ShBWudmokk2BpG9otjyHwy3MqzqWtcBWMKNPsddMVpPUZJD8san9Gx9sjaRxxR",
  "key5": "13NBvwyEqVpLpKit5cdxGAqTYNvBzoAfoS2E69Ap8uivVDn1w1DPYFWvqUat8NWFvf9S9A8LNqTJawoYhT8cRwi",
  "key6": "35yGYFCkwgtag66iz3utY1E9JEGnFrZbPmRMZntsn4tBiN8ZMqJ9X8dqSRjZJtM9vq7Rdg9JUDSVKu9x2cheVKuw",
  "key7": "2mn8koKFJnaVzxAVKxBuiA5j2mSibYW8WgjpiGb36Fj7wia3MQ7wyV3dhGKGbFKmsiHXvugxvkMoxegNNDbS4951",
  "key8": "36bSbxAx47UcrkHcq4aPoX1YYkV8Kw5Kn3asXYfqbEZpraQNv4X5t5rogkEAk3sQEsStUts1VMXq23c2SthTTdG2",
  "key9": "64JSdNhXVN46SvjEPi7K42wXMXCiBw4mNMVoSsknqqhFKqHFXpVpVJ2WcTdpKhnjtAYy49z6XumnzonZqZqM6ZHU",
  "key10": "2Fpx9h88aSPnAApS6jmkYfKgVGmRu7yZsfv49Gsmmn4cz2RtxB9gJ7sQLYdU6mJf45zctchkGD4VwLfKVQNg922d",
  "key11": "5gdzTeCWQ36BFJzsC6eo8Jv8MovgRuffKPb2dF24YXbFjsqPvJJ3NuPabT9jCQwg5e1wJTTNZjr1PGJuiYSoXznf",
  "key12": "kWzteqhUkPnS9rqvZCcnPYM8EXGfZBhYMpQcyprNU2U9qnDzjoKk8wvj5Yp4RwN7kbergUyyjC2pPo6DMaFhuSh",
  "key13": "4skFT3GCJin3XRRRNaQfhDbkevrbNux8jedcmX3FYYGPKWgnPThmCVa2cz1PTW1Cxy2VseHkMtKY4ibkJWyUmNLn",
  "key14": "3aPVqAY7jhdeKe7piBfgYcqEYcB6pXgByywFgwuA8HofemkQC4FvphPiXx5rtETKqGfSt5i3xQA5PJgSsUpBUTys",
  "key15": "2akiuhGbd1CS7xZZz46jtRMN92zCXHrBL2dMEntHexrKXc3LENRJSTAdSCGHJ6JdaBxdtf4pdWzBjW4D7M1zzT8U",
  "key16": "3WkU2pi9A4LS5TccjZps3LUGHvF1u4LCvnyAZ5PAFfg8GjRQ7xraCvpfeqyyeQEjyNDwzGhJtPsV5ALhZuwLvad5",
  "key17": "5p6my8Jf2SXPzzKxMVdHCKkSTpWPRgvNhLDYLbkMozmuwuSMUjQfwDfXXPw9wvBqWmNjvLNzgFa9ZMtBzZsv4VLu",
  "key18": "29AsbeyXSpwASWirQhrCoQfFqymJPjqSrzTnbyL7Eg2m1zNP6LBgj4uXLVnEiWASihAsu464MWZPjA1wWUeVfvJs",
  "key19": "2oQVftr9xPv5s8pdp4saTTSJJaWxAdta7WZxYcoDqhZ198dmKkdZ6zgg7EMZ9H4yDg7suYAzVGkLdhES48AWAMfP",
  "key20": "3WkRmKo4z9jYHqrMuWqtCL9RnTT2t35MJiuMrbsU7SmuiDEx2C6X4yt9FaCFay6DAKy2VeEB8Tk51aXohfgCVcfo",
  "key21": "5fQjLH3VNKoF7XJGUkSTMmwcT4Wuc1sUsWtCEGiwk9ZMTm6o8AazHtfirVPKeAPraoQ8yGc4kRRfWqAkk9B4i3eg",
  "key22": "2AuiK6YUiWCbCQnsvDePG5k2NfjbwEBMfkzxEHP7jaeypU1ssZqgPm7wgmkrQByGfSW77L4vbFnTPbz6xgaiXK8G",
  "key23": "4Uas4dE6CFfFdv84rofzGdpkFT29BmfVe5LQCFPKmVQTskCB1teFotYBQMj8gR5MRxR11cdbaeSGFFgx6UC1nutk",
  "key24": "4hoK979bHLBb7sqT14qPD78CcRRrdKV5dxPCzp5RgzWuxAB5oUWQLkMhgTGd5Y2NekxN3uQVLXeJReoSQ8hxnWuP",
  "key25": "5Y8f2yoDgMkrRhHSenzpYKw8ALVbJT2Tw2G3vdbHtzAjqDcjHA9VazrGUhqHQaKKywPD1am5nzoNmgE5DoJQzaWL",
  "key26": "3sS7VkQMxPf8jMVzZKbJdcmNufSbr4XjD5PoZeJ8i2GntsFtHuyofKmg8o6gySYkdeFV1Qu7L5LQEBy5twFPPVn2",
  "key27": "26qmDFQctCpDidVEfN7PFyLqC17wo15sR8gJ4p4LyrrEQX5gYPM1SSe3Si95XkEMc5qNtT2C81ipPDeUssptXpxV",
  "key28": "3FUV4xGs1gRVXzzQp43J53xZp5j9r1hq4s7Z5sDMF7XmRqzJwKQ3or4KBY5vms9X4MCBEPHQ6AzRQcvyx8QCHErW",
  "key29": "BFtF2VZn4CETEpwkxxuT1tKgf8A8SK1zv3idoUwRDBUw11123FJGep6QBRoc4uaAnfMtyknearzuvrohB1pn1KC",
  "key30": "4hf7jD4bQA9aoGmz37qYEtiHJXADRikZPw34Yr6EBQLT1DYZKJuGzMzmpU56jFqNZEV7G5HxPgNRszpwzyKsqK2k",
  "key31": "5rHvDmkKzhYxkGJxrB3XqvptpCeK4CaUDVqpYjHFnmqB76HK7maASEtnTYB8ESGnkvT3VoFc5UJN8Bm41Epnoc9U",
  "key32": "2cD2WxaHy4BJ6aEzAPUdJ7i7qqvVsHrzogjGxL8fktZHTxkMXD4qyJoicdnubzrRiFugdUrHJEyq29grBseVuyYu",
  "key33": "63biz72iqxTS8c8e9jmZ412P1FhPjcpbvLtsLh78528FpbmnHWVwJ5KbcivMWFzvmo6D1zXQUUMwoT1ZmLuTcF73",
  "key34": "3e4kMBvoqPjH5TaSY2r6fScBc6wy7bTffMZ8spqEy39ctxWNi1VdyA6STrcJG4CY4sWHCisBP7EWAn2WKkFfNTSb",
  "key35": "Li774ow4B5BdnpALH53bB44BrkBpKb3eEjcWayTvTu2ysDtksFfERBdA3wU6DYvBDHU5ceUCEwTmqav2kQ7TVM5",
  "key36": "63KYzAMkiXfgsRLg3vx72SZKfFTjD1PGwFqzjH2S2BNfuVnqEQZfFR5hQCYYXbk7UoTCy3NgdeDvmfGi8ijUXDtV",
  "key37": "5UtyrJ2LrzZMVfhknDvBBx2bwKUMtfybgrc5fGfjma6KwthsGCZF44gQFJVPxw1c4ZQajHs7piK749e5D6KFtWvM",
  "key38": "5Fs3tR1trMGNEiSnfjzxEQmYTK74xvqBNv4n6mgufXifYCC23DPEjCbC5QreXvbPRJhA3Gckb2rq6QFdNygN6SpS",
  "key39": "29JZeTGqgc8hy7eRy1zaNuJ9FjvMBQzH3mEt6KPPvJ819m9r8QqN6wyj15MH9jcMzaais2MFc6yg2izZ8YJVuSLz",
  "key40": "5UdyS3kPjsMe8yFQRDudWpv5ZhvenPiugeNt7t8PsXGMHhEKYiE6jEEzLwWFJ9dJdaJHkVY2BSvpiebwkMMsxqvH",
  "key41": "659ziAT4spwaMLHn9FNZgUGA1WyzaERPRQePNZk7zuvVfjmwaPyaZAK52TTEz7vrWHCUWJX88ig6kmbSeEjwdUQb",
  "key42": "Gjhs3FG3j1EzXXDhDCqapUmDZbckhTqCo7Tab2mvZEtLSkG2Lfqypw7n5HLhVMCEcNecsZDCvtJ4eXAQahQVGQP",
  "key43": "2ffHvPxjBJjPTVk7cVobkAieMAxXJqRZuHqBAFxBqxsChenVMZCn8Z8w7WeBxXz5v4GpvcybewzyumFMy6uUuXWa"
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
