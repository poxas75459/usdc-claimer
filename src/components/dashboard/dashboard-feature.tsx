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
    "2WZtdsUtuM8xhPZdWWat15Lh3FWBVe153mxtMHb2Vfcxs5RoPgpJkkuMHqodt5wmnTKZEigHJ7AAPkGrrqA8UiHw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pC2ryZMFCGEtx8KR1fQ161mmzi75p2vNfuG59ricwnYbrvurVZE6sptZQBZ2cjvx2yeYWxaDLqhsX8gbnqex4zd",
  "key1": "3GnoT7ek4Mf33nsHjWdnU58jd6E77f3qvJp1KgTgEjUpzk22kRPUS63byG9nJLTC7RYUL35e237aMdcuKDddnS4o",
  "key2": "3KM3NQMmHAxi91UXXyku61VFmYYK4p4tMs7FB3mCugdJ2jvucCjDydVZWAVhCFReQkU793vSYkgMp5EmMHryWjUw",
  "key3": "61ubFafLoDZA17D9KGbTu61dNSoHsb3h1KzRh5wk5qLKDc899RZRdwC2DpgVs1jvWHGQXNiYz4mkpLDme7ZkkzSd",
  "key4": "3UGxXfGaTSVaCUC4u4FCaRTeUfmtGfp74ojC8iz6pLp2mCzPY2rf3NpJZmYYyBXMKdyAa1YTPD2GFRtNbJmfYYen",
  "key5": "243xKnFCZ8rTu6292QnU4cFY7yMNNeyg7k3FppKmH37oRMybhxKYrqGBP21xEGCJ5mWeSL81pHXcxsJEA7xPRLHP",
  "key6": "3ZQZcMjgf1dSH8FagA4MBdfmpENkua95Ad5XMmkdCGKaQAm3WT26Y9hPk25sgnAuzZKVawubERbve9LBAxA4HfcJ",
  "key7": "N3ZwoveG7jW6GGWhwCpgxd7Vmr8u4fAjr4bN23FPMHuWsHjX3ArRNPDC1J5bkKz9acKuBsiE2xHw7yshnADd3FY",
  "key8": "5sTvmCMt4bQDGcTTssyPRjRk1TTFzXQdu46Rckv9gPHHgcjsThJbBrDkhHSk7U4Wh16kYHLajcUJ7ijdHtwaUpyg",
  "key9": "4i7mgTfqjKxJADARqHMUn6TmJ5eejoNadM55sDKigGCcpM2VqhzTnPdHK7C64mERVndZrmXwwAyEYFK6QKZy16Q8",
  "key10": "5Ls78WDCTzMpiu1eYiDDFYkAWTw2Ecni64pZDPibFoDtpLJZLPQoGan7PTeAah56uzFEistX4WB2cgi6uESzHMzm",
  "key11": "pH9z1fKdnwwFNH1CeQPVcms9k6JiUupSTBBmYGtTbRLapF3Mf5AK2EBoPMn1AXS1RLCCfF4Vztn7Dx3k8bpnTFA",
  "key12": "5YpeCudLMZQNGy4zsYEFkeQ5jvQVRQ1v2r4Zb11uTnvVn1rZ8o7UBBqvA6y4DHfUMun2bdLJpAGpLAzmD4ywbh7C",
  "key13": "aPM8cDdpvjCmbZmDX5vDVwruNbJaDKqh5wsGpYfR3c619SbHi1racL6gFBaSs2fpayArPNGnjyxRA8ZaoQ7gcTK",
  "key14": "4vogQs2hSb6ARYV7Lg8dJdJEns3h2LC8thi9FWrRHuE2vLT6j4tUkefR3DMFAk251p3rtrbe6o82xyakEL2ib826",
  "key15": "4oKXX3Z8fZ7SJa4xTTzANTDeWQsZAmdT1sD1hj1v2JQoEMBjhQ2pbzoZzzmEJYJAPWTSHJCKFFGHYrdLFCsWst3R",
  "key16": "25wzrKJWB1XdzZdDzrbnrTNamFceZmxeKwGuHNrGhqJn1YbuKwDHYhwGLjTojcd63vRKX35vC61x3WNGMDzaZVAF",
  "key17": "3njiSoz9SeJMke117fc8YDztCezZdVb6qFJmbHw4vLEcxoTfofq8RgfVJ3vpcJuHHGG26MKo1jbakqEj739itaF1",
  "key18": "3DSkXC3DFWSXgLRuBmtMzNSJpB61ygJxfoRMXd84iToCvtyb9PdqoXavoXx9uCX5z5dbURoJsRTDBz2S1LZe7eKt",
  "key19": "327u8nbSBfZvTL7FTCP2x5EMQ7aDAhCt7KFB184FdPiWRUDFt4RiLDEg2bG9SicovHF9ok2Q6z3KAjAccCZtUqCo",
  "key20": "4ojHvEmYHUcvSRyukCQSnEQvDBmAjvbiov4ew9mHa3k2fCK8yzqUWsxWMGWh7PZCzHKgfMmExVppMk972X2jXjWN",
  "key21": "4jumHtpYxMxUPQ5PyedjNjcPq1YMdTJvhtdcVL3nMb1mzd9QvukMvMsCB2XviLSFgpEXku2Z1ECzgC2jndVCRE3V",
  "key22": "2dZFjA2i9TfFH28g4HP53Np8DDqfANmZti6L2FDMGgexrgH3ue3zP78vQik33xGa4qwbwrVozss58n2QCrFoDjCv",
  "key23": "4HbWDbrC6kVPiVqyD7arsCAiQB3QnVm9xZmuw38YW3ihpWiGMyYUavJ3fMjmJfjXJYmNsYSJEpYoY1TrobZoQ6U9",
  "key24": "41hEFaEuppumyc4MMppFQLSQ4cnmLQYcwr6MTMQjgLrjRGsAD6ikYShfM9PvN4dRaBCcS84WpZE8aB3x2pg8TSRw",
  "key25": "QPjmcWiLfHYkmk5m8fHJW8tugbn8mdv2Zh1fAvGtNV5yZBUtyr4me3VZ32Hfzsgc15zhfosy2h681zyNvtLrhur",
  "key26": "5rjjwH19ocTTmYUvJkvaAK77FRy7CpmvpsSYE5LKzB5wNbLzMkT9adtXErPByBW2samaL4ar8VDwAVGVg3Y1pmXz",
  "key27": "EMt2s5rnP9TF6rFmrjWyuTiNcK2bGs3zWnSMmYJPYCAJMi2VVnwkZxzNJqpVgHMtS4cTfdK2W7RULQ7T4rs7Fof",
  "key28": "26GZAAbK2XCpEoVgxgT2J5fAoiJZgFwsAVaNkMKWovPRnmx1Tb34FToB2TbyZKCMZqZZiSHjWF9imCxmbfRkd2yc",
  "key29": "2Kc7TjTvVZJJyppohUVGrGapj7f5Qh4wd3WmXRkaqXXrLHJT7M9PvedAAnBZDZJUQko3Cr2YEgM1fcnQumVwBWUh",
  "key30": "3o2ySdoqS1sFJatrQrnYtwAF2f3iWcFgY65nx9chYVYiNo5gDdwxAW8bTYGy4vfN2oJ8TRXj1ZeWmSXiDNkZHRtU",
  "key31": "2ctWG1qGN5ywX1ueCBEMRTyZkzQ8Tz5apH8EGVfCYWY8vtfQSS3FAqfENtwKc1RpJjV5HZSUZ7p5RcRzKHvY2E1e",
  "key32": "2GC8Zb5LM1ncKGofVKVUzPwemnAZRjysskpSp82P4kZHNDxZNK9fCVDPuU9yUCh3ksXMctxAjRqJwY75fH148eXD",
  "key33": "2XjVhnhzDunznWEHmb415RNSsJCMrj84RG4e6aCCZTvtRdegwG7qk4hZcSPwuqSoxmWfFJt96AkmWYEJSbcXdCuL",
  "key34": "5s5DTr4oyAvUNb6CGVY8jgK98DCGGV81jgiTm2yXF46z26YcnTqF7CfWP6RwD8LMjxDT7dyaDsLD8PQa5S67is4P",
  "key35": "54Cgrn67ufUAGJefiNa7j4inAxY3B9pZXJSZTnvGrRvSepRvkxjczz73GY7oHn3ey91tMYGYnUzhDxRVQig94rth",
  "key36": "2Kd6uC3zgDj7XgBRZ5mCUTa3fnHMf28UVhq4smCWBZUpfNnm22kvuQM9qsxzxoBc8rk91L91jJ7jvUXFxfUqyjmi",
  "key37": "QVyL2n4WbQv5Y5Hhsn91MNzwCbjx7DZRshwc38cFANKv6Ta4d56ZPCfi1NXacvHg81eBqDkLgDZptwCXGMEVuCV",
  "key38": "4Hi6YGoiXC6fRdSd7sC86D1ZHZ7X4Uuwn1syHF5jTGQqq1RBDXz1QBW3dLRtCSCirvtYw6HB2kTjMuSaKHf4Jomh",
  "key39": "5VQfp7bLp9KEgqwuo1LsauStHdLiDVJPFErpfBGpHwH3M9z77z34wZ3p3YQkWYhuZDYoxfaQZqukDsDtjHf2jdCG"
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
