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
    "5YP1L4ofkJYZUw9dAxzJwAv1QZzhM9tmkJP44wVtFEZydgbxFirpW3TNgDfr3i39sxNMDvMrYVje1vRZcCj3ijkM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i3JHChcnGDn335DaXrxxgAjyzb3m24HiYUZeHxMarhGnrFZSKebyQQCPr7TQYm9M9AWLGruL74sZk1nad5N85Vk",
  "key1": "2AuTpzkcSJNCbNsmjFBZ6Ux7RiDCBWyTe9UNQ4PH1J1zhGuVYUwnThHrbwKyBVW2KHdDr1LjKGUF4XJgjwrY2yfQ",
  "key2": "61HikugZ7ssAtHtPC61ZapBPUvcnyX6Svf6KTV6bVAdKRJWNJ3ZdLCbUdhpeS1QCEz96bUdiAwhqbFXryxHwU7F",
  "key3": "3QFZg4562bpcMwW9FgaXXF4XK7KuBweSMaa38Xw9b7vHgJoBN4fNH7pYAmWwaXrnRUiiDnZCnzMFKv6XJsS3mGkn",
  "key4": "3MikxuLLcD2yftx4YDYxHAasq8NsLunWYQFT1eg7zP2F64LEpnqMyULU3TyvhmgQEn2ADeu6DNMLPyJkiTWLzCzS",
  "key5": "4QUEWMfqKwVSqk5THNyetUd3bAKNQKGv2xwwjQA6K25RnmVQGuTaaEBrd7ndWqBfnXYmHdrJ9PaMpVh1d8hBvFe6",
  "key6": "4dmbcjjoioCttuzL9b1t4DzhcXn7oKAZ5xmKEamexhw9Fiz2kN1Av3qv7n2UBj4gxgx9SjagnN6c5hmrs92Uz8Ro",
  "key7": "g7GV2gazeAE4XJdiG3oVYorGheaMsoAsjJKPnFLgQxPHJFhLQ9B5R4jQpL9rdyu3e89CVrkH5J3xyHzKCQXaPve",
  "key8": "2MS9QGvhrMcQihmCZNtayShCxbHKqEJJvKbkw5Hms7rf7TNPUNACj2zm9oemj7abMJW4Toeb31gek4FLGVyWQzUc",
  "key9": "33SdxVegy7ye2UwYz5XQTj5J7xRuNnJPdTpDYSgmxx2T98HRSrT2bhZgZH2UeuGY6Em3RoXSWxegePT2j6k5Kw1g",
  "key10": "4jxDzRXngFEbCmYPK4NdWa7ZkhrsvUQV4pB1N6UkP9qSsSFxoVQyByGWXpLnDMBRNHEqWmsRnkjnT3MsVhxQmKif",
  "key11": "3cgJq4E65oCVV8PFEj64xejJgHBTJ3mV2jopDUotLF65MAhgKx6qZG9sPpJumLRcAa7fpyJGTCNcinhq45q9QpWD",
  "key12": "5HJr4VSegR7iXSmPsfia6yYHQaKAPnNtENvqEMjMv6oDm4hD3M3v8AjpxwDT7smFc2B8N28WnBbft1y3L2Lp7Es5",
  "key13": "2RdKmBhQ1Qp827cgM26HYjTxCKD6867BgsZ82Fc1hNBEUfsi8G6WzGYjej6WsHm1Hj3QAP4mcYenMFY34pTuijA",
  "key14": "65frLj73ncjLQuAB8zGDoARzP43ZDug17BD1zUbJ2nrS1TgK37TWXmsaMy7UjbyLtFUAvEUgNoMbkqXRvqFNJWZm",
  "key15": "jRHszX1K8E7SSMFpWFz2x1vLwzKXN1ZjvzSwH5QDUWCY5q5JQiDcjwynTEn3MKE6ds8pT7nhgekDHMNBTXgJbHg",
  "key16": "5bp318JVo7xvXg6cowJ6mhRey1o4ZmmzwUsCmR6xTUE55PxspkEdESPHdKQ8fVPmDndBCNKzLHtKBSXpTey3SSx",
  "key17": "a4Sak8KKXoUAfrANg7sVJLtQQuwvbkA1fkc85T4Dem53y3E1tBkEuvVRnhLhyMmRHW7vfjZS1fxW6dqp6eb3C7T",
  "key18": "3A9iDF7nj61PKuo4sCnoz9sXSq9RqyYuikp66kT6Ynww8huiLft33uei43nw3BJ4GQVe8K4DRpTPQYj3KKqZCxSF",
  "key19": "Sk5eBFz6U4ERbfaaCybXpLprmagg8WgHUBx7bdrF7xQyP8s1qs7kyjSZFD8WD5yf8wipGBB9mmD2X7dfvMkChTY",
  "key20": "31nuDEXHCnzYvZwXGkSEjNdtBLfT7LVr8SrpWTuF5c7soZS1ueWf7uQcZTTNSLL1cADYJKTSykq1cJCNStjVQEup",
  "key21": "5yY5Tq8XqbaWEFdbgBoKRc5zE41Dngp13edGerkHgLsVT6KG1ouDP9A7Cjwiw4zfSonYMDBV7XTYBSVqGrGU2NP6",
  "key22": "yJJFZ2ubNs65NCkfHQoyubAbH9Vnsj1nBqQboSEHKQyAEtGBLEjyX5MWeGzyAhb2iBGdbjzq8YzqpsieWuZJzxc",
  "key23": "mV5q5xM9374KeNcWu92jXCV34yEDhvcVgDL24HJKSJja3eYG1RmrT5nzyXrrUoDxhPS3E6Re3XZ4rCJ26R6p6ye",
  "key24": "3RWjUe71AfX2waWYfak7gxtEM5D1Q2WvoiJBnmUfBNFacrR8FwmajcakfsLpxsuh55V1T3anbeNN8WFJHQY4PMZF",
  "key25": "27VxAsqmtsUCcnxuVWnkJDgc1zMv4svDu2NGPyPRubaKT3J9heHKNjx5jmztkFSdsGY2moTTTJvrwXzQfpoojmWD",
  "key26": "4swSCRzfxhnUpnDFY3WDHSobj3HLBPqMv3ZUAZnj8NjRUEdbjqYPR5VKe6PPKRN6fBUUXK5EKFfSxxytqAYvYKSn",
  "key27": "5onXiqC5VpsnjhnHeemkiwVZJ1wZHWcmjowyrDjPpi2XYqtD1sA6MKWhuud2BNGWs8VLmqm1Vz85MWQwgcXT7xVk",
  "key28": "3Kc5XPoAXoFPuKgzibUPKJtLCk1FXZ36pzNSCH1oqkQA6Nt1zSfZQxhrkNQdRXYSzH86nR5rBTxh1uYAKorA9p3U",
  "key29": "2sxoGgzAKU46q83eujpS2Fw75p7mWbyLYXh67PpmieZbbhocsABDneHEsqJAM23qwUQPrFZcSsrR3nenFdr46NVq",
  "key30": "2pk5ZpvtuYbNNmosNzx7Taxk7ifDewnH4qbtiudybVqCNaEWMsC5VSWMxVJP37ZaHwtUDeDixGjvCiFS3A7F9ank",
  "key31": "2kZa816XXyUu67MuACS5shQvWkNbyPyWG46yyvcCUx1khXCwvn1HSAoK4pVZrSG5BiYFtNSUbdq1ccvLgVb9cxdu",
  "key32": "4RcP4if7rnkmJXAN76RUwUHSgHQZhTCFJLM4gDR3sGpPVSJ14e8X5tJysXgWKKFrYyFwduZqpeK8rbiKU4R6H1nC",
  "key33": "2LCBLA4CASoivWDudFhXEKrQa7gohGhs3kcZiRZxW8T1syFyfwHB9gJ77UiEhjNXyse9NaxKxYGyrEmwBJuuzYE3",
  "key34": "4zV1gYFASxT51MaLDZtxW4btry3i66Kppgvu8mvqB2vYjtswCouvLVdmGDnkRptvaPRHedEywkwehnX2dXkMTd1n",
  "key35": "BFJrq44MT7wWY8Z8SgVpcPzLzrpFbmQgoxecuaGu4Ut76YQdEVRC7K9We6dB3RGmnfJe64JqsWMwtunQFe54jtA",
  "key36": "33pctH68VcRAZ7vsMsfTSNV6eWSs62mQ7tKVJAfgRat3bBgc1isjcJe66LpqZbYnzC9RA5trMTtXcaQbhae2NbPp",
  "key37": "43iAaGYX6yUjJjpGwdoBKRNQoRDR42HxWEcMfBojqvJpPNyjTJrBvM3sXiFX8AaaSKRpuL94r66zZNCeoy3PgNDS",
  "key38": "2NQTbCPvi9cVVV1HCT3X8d3skfCH954jEaQSzWAKmHQ3qhi75VTqJCYhFiEt7bZZLugdT452FaSmYbwTxJVVq2EN",
  "key39": "4Wd68Eobwmp8cBXXGLkYwXT7x6EDUFXLjhwfddNX7WLxttYofMLAe3zvSHk2PZTHMaaGrzcVLdQGSiPRkRY8ctPB",
  "key40": "2AthdNAJiYm5hC5incV3vrQrK4Qa2vNZBuYqJn968waVdtwD9Cqqn1AHEv997Q8qc1WQaDtxmVuUC82v2deLsgt1"
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
