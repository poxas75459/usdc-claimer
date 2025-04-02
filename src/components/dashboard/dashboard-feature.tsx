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
    "5jRGKYg72zAZTebusBRUTm3bHp9d7Yz9htAUJcb8DSXeZHa2sgx99KwJdxFsTMxSxQVSgXWfjFLoih9Zot5is2f7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pBSzv6KFV2khwL31etE97FoeEpP5PKZKSTEBqEqTJrN1XrvvvbEW9hCpLoivciWu44oKo2JHSvF1eEMogBKF2KE",
  "key1": "31ALv7g4YW6vHLtb8Ap5vikvyw29c4yv64xCGchoaJDurh6vhuqbRy2byW9D4qwHcCTbjvuXV3kcX6LXv5BkDhEc",
  "key2": "5PSutSdmkbguehuF4R3gautAH6spT5ErZHHUoBKMaVbneYUwiATkTbhZyyXgGU4uuinQmK7xrwAN9UMVEyUR8eYY",
  "key3": "46XBf9x5GYvHXV9hwTBw3BDDr44AfJrXWJfe2WN2rTAmbrdPNGETMYZ2pZoHKYcVMnruuueLeYSpoLFWVAn2cs96",
  "key4": "35o6hVVQFjVza5Ks3DB4m5p1bFw9NDrPBoJP3yg3Ua8iCASzsuiR2AaxhqPoPRCEgsDoWHJhca1rfTBymcQB8Bd5",
  "key5": "nRtomGgGj8WNN2TmWpLE919sUZYHDa4Yt39xdZA9D1oTwfqA7NPcDUPMJYW2zHeEXKPuPh8wVbnVoAvnUwRAy42",
  "key6": "3kaEBe62pUurMnCPFUZgeRzNsZsSjUNnqRNJpmuSLrc6TepYMGsjLm8jBnXaPVxuMy1GknBNpdfN6x8Hn6k3nxkN",
  "key7": "4NJbyns39SsKBcxXj5PhDXbyA1MQJygqU3t1gcMexVoFncBj4mgMMZ7CfkzpnSuKCQu12KfdnWR8kZfEi87VkPd5",
  "key8": "4NK1VwoWDydhegMH6QkCM2CSea1wbMrTCGWUXHgBY86z2cdJ7mfRTmoXHYBvt1XCjqFu6T3kVVP6GkpZwTrr3Uj",
  "key9": "5shNChZpDLEpb2cC76oanxXZ3BVskdy4LHYuQMJLdT8kXCd5NSwEbUGVsz4bcxQymRSzWPbdbZdbDBWbUAuXaNDf",
  "key10": "61MVb3MKGU67ZGw6RHnpXEWbTefoFvWRdQsFzpE3c7prb4XNNmT7kvnLy7XadtDXbTVCwQDCGagoUrRvm1Qb69cb",
  "key11": "5eFTxQ4w8erCJQvkSgFRjZgpTGh6kXWnLGWa1Lqcz388JZCppK5a8Qm359ZyeHcWc7qcU6Yc4seJNN8FTKo7CSDQ",
  "key12": "4zttjXhZC91c7wrotUmQr5yoAjHgyk6bkyc4AriBvxnvKh9yZCHqXSCDKVuzrSbDUvT7Q2281v98o6z4tHraWEE8",
  "key13": "t47kqDSVVnXrXYD4w5dURMKBCUzgJTFoLueaoPLb29VsbLwkr6d5jorCki6aMNgshqW8hWPJ6cGt37KD7vAYdDp",
  "key14": "3wumetoJBRXyf4cfRHw4ABrZeHq8nMcsW3vLsgkSWoLUgswxuZfbnDhZMJQtRxLSybNZ6qxpS37Rk7NXQ1u1yHYD",
  "key15": "5x1Aum1pQFKLMjBZumQo9nADWWTRmNQhTxxRT8J9wBWT2cubh5vbxHEHtocmaorHwfgpQaDadaDQ9yaqrN7KomBP",
  "key16": "5jNpoigDWwoff5xGABVk8RMypft3zBSGqj2JtoQMaRg3UDLBX4r9h3JGbvLm2g47Vzms8HJfT5Aj3FXtNRfWgXBc",
  "key17": "257MMaBBkEFzmAVyh7c9QpjUKyrPqM3os5P4fPxPNbsNDuPt7ZGbH6VmimELbWu7iG6RWJmM63hAjR7uKgsqkwaC",
  "key18": "4MQHp4gTCNqtYbKG5w2FyTsdyYC8EfPrZKdtXtEZr837nbjsvqhM3tUsbA2LR4CnEk7hhJJXTcwX7x4R9jYKM4cP",
  "key19": "2roEPU4CCJkotJFk4xMuNkuSVxmzyNRd9z4BSnE72MqTYS2JHpTSHYdZPqizkagHCStT3HhQF1vY3YurecEYnfFY",
  "key20": "2rbVKiqJsvDtjsLTQXXKYmGfK1eQNRbKfVtaNu2e4LMRfePvdQiYmSnUrHYKoH3KmQa5QTCzePHScyLMbYBLUQS5",
  "key21": "4NbKPoTLekKePUyhbZ6X5KQCLE1voFjM3SkwDMq9KUaHiz4omheXiorT43uZV8jSNnXpYMjaFTxSepKwYnVVyWkw",
  "key22": "4dfFo3nWzvx87CYEffURpXXH2LTn5bdBMEY7gfJhByVc18brrn53hd5oqnCYKvcKjLvHtbH3UzFc69mywWjrzFYh",
  "key23": "kanDw77hyDfaj11Nfin1nfCZFkBd6nvR82ht6EcTNPomCrh7sXDjhtQgymqFuCxQcqwnh2vFtjqeEBEZkY5pKAp",
  "key24": "4eLpbat4b7a9d55QhD6ickbmm7TpW6U71BdR8CjJHzbMasH5nqeyGwAWYFxXazmaiTpB5hPpqnnzYai3aR32sWSo",
  "key25": "3Mr4cExTT2MmDnTJBuUxqVEGExta3T5qAFbd3geRofTwkgFTWdL2xSYZ88PY8SjKEtDa7Hou46HaKr1P8Hu8XKVR",
  "key26": "4zrzHdGfBkALSvkkBLM39ViyrCGwdnVaGfxW5JcD8Ky8uuSJseYRYLHwNtSHgQHHifQZYaJ3rCD6vLGVLYT1fhJu",
  "key27": "5o5jCAGzxCuqULh9fnyCHSjsRUeTbMFTPNbeFZ54FKV6txdgvawabnRB1vU7ENKKiZy3MwBVQ4pbyhg3ySjhw2fj",
  "key28": "2t7VeTZBCXvFb4D4dy11Bgr21VpsGEfRBMaGCQaa7adg3z53WCUaW2QogkCVfsQ7YSQMeP83SroeVK2jsJ6Qg7Mr",
  "key29": "2Q1cbm7X4mX56E68udHZuVCFGthrnKWo3np7xTfP8pWCY3pHBhJpazxNLpLdTSTJtYReDpunmR98EtaKh7oUbLmq",
  "key30": "2ueqxAyawmnhex2PbQiodKNJRJPJsacNtzMuCQz6tU26fRGb1ofx4kma2tsnWGxJTCUf8QvWLR5sZLUF9ag1VDXq",
  "key31": "3eDfFDkmzPWgnNWBPxF8TxS4UmLPBmTExd73RPg9LXUvnPLXySR7rG8sAduh93LEKMAnXnGPpQvBCvXdFD3GrrAy",
  "key32": "5odwEZ3YxLCfHzBHWGVfhiqfdmcYd6kTwh5PvPbdEZwknuAUBHJ9LwRTtLXuWRaCkZp4zzL9RtuZrb4MK7G8hKNU",
  "key33": "3vJqfjqYnvxEexcmC6rdEBapkSNMLSHFejHB3UDebnEiUNYwwShKJrQ6jBuS5zb9hM3cj9zAfq3J8J1UpotXQKa8",
  "key34": "57YASvjXxXBoJRaYMduHRhSJNqQHzdHnt1awyzhz3ufSCG3Vf7yDZ5HZQmcfc8bzvGQCCo5FUhGDouhiR7Q9JorC",
  "key35": "3ECLLMwu9A754ctKaY3RTSJE34h1dNiswEeWMrwvXKAB7vuM5CpueSgTYKF1xu3QHhmdMKwQ7suCDFoUvAgLd5q4",
  "key36": "4J2JJNaF2323G62rBLy9tQATKtCYsqNkrGj32BbNaNWPXXmF76uZ9ZFxxwqfqhRnkJAyNs7v5fMyG2LwZgGxVcuC",
  "key37": "3pbbds33BqWAxZRrGTcpJDuBB1sL9gYtB4xhLHwF4MaARnsFPF2eMS9j64THwMMUToW4roY9hvXMLy88ahxb4cfQ",
  "key38": "cWowyybuDwA6pHwQU1QjfGTvem4WYUfW8Embh52gFRhNUNeqU1UmH5ShER7vAKwusibHpfiJMYkY5L2YAPqjNCY",
  "key39": "32XnNPLZSWQxofirfYDQsYY8cooPcE81bXn2dhS6ucyBhft6Jx3ofuef1Zaa1A8f4hywTacHmPMZCfZCK811vHyF",
  "key40": "4oG52JhpWkXYsYuujGJMdGR77RnbeGRsRs85LwPPH9UdVmpTTZ26fijxyK8YHdyak7jgmo8h2qjAP6Qex3siiYmn",
  "key41": "3MjniFpg9RJMUQ4Af8fHo2GXZzW3rEKCRsScJ1NLKy8KdxBHZZL4oxavPnkChxpWiw4zqMfXnYiGTjn4C7Np7ThL",
  "key42": "eHi5C99w8AYYxbjRN79eXuE3QFwcRa1KL17vejPMN3ZMgFk9A8w14gQU6xb21qZTHCX75Z17oDUjyTsoYZFgTPU",
  "key43": "3DUDHVnKMwMKk4pigimKnVdbGHuQ3bQuiKAHS8EiS4NKLxbNPFY6FgKh9LBvEvD1wyBb5QYGe6StVUuYyudDknt2",
  "key44": "28vfx1vaR74udYcMAqM5CgifzMjbimPJtYvrzWbMBgzVTCf7mVmmscnzgAJKHtA7b86RAAXGjdTfvsWogZFRZ5aj",
  "key45": "5X1DAB61NjtAmKcVpR7st6UtdXF1Ztry5gaZYFh5g7cWMnM1YDYuCajFvZx4WutVDim817AHT9sNxeLdYE4JKCEs",
  "key46": "2ND87RScEHLQKcPFr83bPLAwrMkhtHKyyvKT5yNA7pm3aaVdjqj2NGXwpR4Enzr4giaejXLuu3xQYyR2gEyTLij1"
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
