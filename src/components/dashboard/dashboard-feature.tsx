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
    "4e4pKGUvthtHtCd64yua3yT575Z2dD4xdwM2oehSqzy6pnZiUfWBniybQDx17d9EseQ2jj96MDYSSuj22p3bmdAf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QMnv4qmhtx7TtMUgRgvzB9fj3PyrD7FWGZCSCXzRMmnw7AzQkj8PQs6nRaMK1YySUwxyWuwbnWwzpejRUs7Jbv4",
  "key1": "67gV3n7Hk56dHeKZcgWVxEyBJsuGMHVw9pupAXCiJsno5a5DcVh5HbM1ShtwsgmqG4MHyTMmK9kpuB3wqSZE4fXW",
  "key2": "3EvhmfmfJZyp6VmDG5Bqcn8kCYpZHRFjQyaHwjaFFiyFVRZjyDZ4EcJoB31U6XK6jxGepHVK8bC4a8W2xjT5BeZK",
  "key3": "3o3oEUZuSM1jFqVZA5iMN5YS2ApBWk2kUXt51h9s2RQbzTKZDdEKVAwuyN8SCFNdN14H1TP2mYZWfVzi5mFsDacM",
  "key4": "64KjDvw8npo5TMouDBo5YD4wikSCaciWPyTAK7FeFo9WUmcU51KPJm4d5Xie4n8DXu3WUF2jCLg8LcUzB51quqXn",
  "key5": "gdgpTpYSmBuU9dMML3cFqk9sqrLeCbpuycpho7rzZTiGuaBYG7pa1GJrG9qjNaJc3XGSMZPgZMMftiUkJJ8jHJ2",
  "key6": "3TVanaUsJsEsmXc3KGcBS7prxTD4nNgqnAq23Q9E73XQqeebszDFm8tt9dPcVFvN7YGQL6dQ3w4wKwnUW1XAoUwM",
  "key7": "3JEYxoyiVLYu16e6VCMDU9FuxKVz7q71yEybsTokdxmngdturEGAkHGzt3XSfrEdiyHvVqCvYb9TAW984Fk7hPi9",
  "key8": "pM4PJEP8Qt91jpUzfm3DtpR9UTzLodhxWczybn199saDxYUMEQhoebakW1QxpvGFVHApCCxynU6DdnoDLj17iHt",
  "key9": "4DeFH16XDj5qLC8ufBeK46JZPfHFZRQC5UUboCQ5aedYKL2BMtZF1w158Sxd66fodVY58YwSfiY4pRQGR9G6E7v4",
  "key10": "2fGr8Ceb7DntDmUvbnrfEd2GqAwpjkpKZsEv9QTkKMcBSQU24EX8WMJYCH3L9AkyvKGykcxjfjoba1aVwVFZixrX",
  "key11": "2y93EvkMhncRqvNooNP7MjTSsbMw5d28NfMhzeq63XWPuCk8GFZecSQGDYG92RU7GPjgduVEuXLpT5Yx6Pfs4udo",
  "key12": "QHKMfAaJ778h6NMqX3iW7xo1fMCTJv8snG5pHPKMkKKBr7FPENQ84MCkXRMsyyeNNSmhDLSzYiPUhofaLB7vomk",
  "key13": "4on8F42VWxzhgp3JwswCy1it49EMEGuR6ivSgew3oeF8DnococMHH1Unx35YdCkSuBsFpSWRA9Lxv7XTCvFhitsy",
  "key14": "653Rhu88AYdb3w6FD6WRPrJjr2iTjWU6FfuPQ9AYMcnYfij9yRbu4jHTD2NsGwsA4uG9UxkCTkrwTMmQ13LHzmJo",
  "key15": "25Qbvu7PsgKwWvTxX3YM9fgH3eXwAPV5QMjhb2sLiEkjYQPsZwJ9JUDSUKZjepa7xd7qZPRP3VcqGMou4DC4CNXx",
  "key16": "nvNXi2TKAQTY3thrpPajxxjyR5HJv8LEfDsy6hDYaSiUxrjH2iNAtPWrsHeRjxjrj8REsbcy8gbtNYNwQPJDiFD",
  "key17": "3sre7ZrX5vL5mgZDWfKjL3MzCUQnnZSGNVRa1FFPE36KxLAtgChUgn8W5ZxyK16wutFx74iA93RD1PipCNa8AwNs",
  "key18": "64vDQNNLzcy4KrsW29JckmdimHTfxxZ6EHgr3B6mN9pWxy3FPeBY3gRwEWmqSPfYqMCG8cVhXUDF72Qe9W72jBGk",
  "key19": "2pu1hXpbi14LPowX1PW5aXk85KQdNeDwfyHDpCrM21ZMGZ8Gto2SN6CN8B86B9KKJTiEuPWiXSLxX8Rr1nNMSt6y",
  "key20": "xhM8zm6woNTwsbN6WVmLg4ppsL3DYyZa3twdQcraZ1hkRWrp2J54Pod3Mpqg4zxghseSQQERdjnXKJ1LTt3SpKY",
  "key21": "pQZiNZrKqXBDRY4tq1JAFtMDojsiV4j6JtbWLHpJgvz9eEy5aTwh7dWvmAcPR8BRLsSuVDeHVfWZRUzA2RCmmgc",
  "key22": "4A4PETjsJKN6S48uM3ptZthY9QVE8xfss6GtGy3yv3nTCLcoCMj2NxwqhvS9PbFHGM23BUKftm2DoypyiDPhX2gp",
  "key23": "2GXQympfmgxzkBYJBQegfvRCnLwThcGEf4FzfoYv84t9uqJhQhu4cWCy9PSY1PafCwqigPZDUxJVrM8paWu9Lzhx",
  "key24": "64CHu832MUDUqHsxr9sFPSYr1BEaR4Vap2zmHsYhyRYfsvHWekxY2yWePDaeuEBtGTP9WQjMGPLRDG4NVnGvzvCE",
  "key25": "2kRctFNmAzZyYFDV1ECVw7drDRHpwV6AdTZk83LMnG2RHWZ5yW9X8uWPYCogMDDUgx5RZKELrEvTBUdKfVTJsY2o",
  "key26": "31A9BhFWCiX8QDRfi1nrTp3dYqzWfFC3hc3afrZZ2hLd4LZSJFQ49ymJvtQdZ5r46cFbiC1ByaxwpywdEK1q5Wnb",
  "key27": "WxRVGmj7EmwZ7KBexzhx3oCguWuMKt9kAgNqAvfeXsyu1DoTXWyYNDCmKSsyZQp5PAxGEF1neFhBf9WwvdeFxLq",
  "key28": "2tjXxvhStCFGz3EVVph4k4CPDq3NcHvhFaZM2Cw9SUBQb2RMqZSVhcowtkdPWdcWw2Kkf2QeiP6BShHAHCuq8cES",
  "key29": "5fdWYLZHg8DNPdi3xoEiuTf8LpcYQeLezD3o6of1PmSg5YBNcBoENxdEe4BCmHuripfHH6g7Kvb865TEgrBL3RoD",
  "key30": "4X1F56Lyo6yv5MCK1UgyQSwn6ejkbBKfx3JmiwA9ScvLoRKhqoo2oEikAQJ4WfTFK781bB3D4TzsUsMKZfxR3hQu",
  "key31": "eZRmsTSCXfkqqWZSLv9nYoB1KtBeFmNyytCaDhhvLxgfigk63xtdagXi2rtATv9iLUo5jtALtf7vh4Pa6vATDrF",
  "key32": "5ztX5XjwkCFoJpMUXEBcTP95UJiTST4hwDeNuMCbRkigZDD7H3sLBaTca5ztuUJkbrxdMzhf3fX2MH6268goqT4E",
  "key33": "3DJ6n8zGizPGLTphcTk7tKvtfzjMo71Aj19C84iojmdnB1XZxcTLG8HDGEPH4Ck6ctj3xuXzmi4ud6Z1FVFdbJuh",
  "key34": "4nvNzmkdT4ezqzAapgvZGJZckW7G6Bawjnkp14PWhgMXTkhE6FRHpMmqwrXsBqyu4NN24o2M1xG3n3PWYUub4MDD",
  "key35": "2ChvCRvtmCkjsL6TRc6b7AunB4T1CvGa69PPV2ekXZojLQ97Qn7rwfKmgFE7eAQ1ns22FWWMT7LjLbstEQhveKjz",
  "key36": "UWT2PbxTyYdVhEyS6ca36ivwPNMjRC3ztq5s3wbCqTJ2GQ4JJBEMd4guq2SBbwvLT92LNqM6bVQWeovaJUCeyTX",
  "key37": "SKwg4JKXijFYDmVN7H2wAi4qPoDC99t3e7X7kprErpwsKTbQUPzvZxayi1r38p41ahR2doc9w7DA3LcZSsE8MY3",
  "key38": "2Q7pSNFBwviZGcUQLDr6Eqqw8ycZRZUqUd1SujZ7VhLUso3xjRqCSnHhf4ssVYZyrtwMYD9A6htvRmyx5xrFK8sz",
  "key39": "3Wgb6gcPq7iyQYFU3qEAzDBBuqRCnYAjzSVEhWNeVXijUKRHZTb8seE2jmmXvrKRsy3HdpXSUYPzYzGtD9XyugE1",
  "key40": "3hwuFi7xDf5pgChK25AW76HuCyQgpDwWbTxDevWsiYYdxoncDom4hWiRit9VhW4RNmabwu3m4auRgAAtYNt9utJv",
  "key41": "2Dy2BtcTnUkP4M9uxBHxQ1Bj2TqvATuPkxXNVKT9ZnZASAxSQuLJVKCT4a2UztD8zs5SzQpkLt2ohSnneYUir9VQ",
  "key42": "2V8ooRSXcmJUqRgvGNLshvcRH1dVKgJZ6dKpv3hkV5ZR2qhYtxy9x3FUZTy3xGsEH1X2D7yq8WtzTBRHCDdFhWyD",
  "key43": "5XeeEdBj82UWJfXugoDG6y5exsaayx9TWkVS7evS3i7xiUYDbvCMWdDSUSCGp9FVtNovtAZSc8UPfm9Hpv91LoLY",
  "key44": "2g1XkPAQhr2XfadXmF7HMivSJnygaBvJA98JUxin549Kbp8wGiHAS5MXQEUT3L372mWsjCYaLaaYK6TvbaXwo2kf",
  "key45": "4cKih8Ys7Z7hzuZRLvLmKTpBXeTNE4NembWsbyzS49n8GaGF367iQSgMhWZc1sduZPmbp5pnSMmadtYJmaTiJ1sd",
  "key46": "uU2LTDn5PpKjerADXSMdzPPtruHVqUNSxjMhvvHKWT86muirWBLtBiKBndfs4eveCCVwykZCyYGnKaKQJ869Svg",
  "key47": "4oNCMKpVD48N4rMtzNfkJo3DpYToCZ7tJkaMycHnugjnTfaPT7P5DEvRgwb4MyYaFc4EehbP3PQYvgjSTrTru69r",
  "key48": "33XKfY9LnD63xBrLyUwAQpu7BjmqAuAzyU8uF3JanSJKue4MQGNUC2NNTRe8x1yVsWM1Wvy3RFhT7EdAX3Jvqzzk",
  "key49": "22v6JBv2SKzAZNPqmmee4VUGtF5HdXdn7othtyuPT4tgHQkkVnMt8uRfG6qo3PCXuAQgcELQ5wfDBw5s8aU44ctH"
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
