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
    "63hHKnB9f1jx9U8AakigueMDjhdv4pz5283TGk6nL9peAC2W32ZQr8dDhxFcuwcnLh5WKBbmMJLYbXF9kgwvYTgp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nd1ce1XbVJC146JFpmNPLDKtt8j3BEyrMtmHmDdrRuKrvRodLNycbyzamqKoDZBoK5yaDzyD3FAiAPMdsHbtfr6",
  "key1": "55UjWmZYdTuuPTDt5BHR6fm4x89sC8LLG6MjhvuDfHAeQPWmCB4wm1ALwdJEiKPoX1qPnq5GEQMpDqfbhJoYjBq7",
  "key2": "5vrH6eappg613vR6i33LbhSG4P8yMMQW3EypYKSmqCq4E6twHfaeQG4byd9VSvkMVchbhzabMGonhtLue99PxzZU",
  "key3": "maHbMDHJLayQP7nvqawYvxiwg6JTEkpBxYx97XpSeEdNxzW5nrR86LAfKeKvNvsb4MtYysL8zyxG7PVuyu6EY4v",
  "key4": "4SfjqgzyTKUxGEt37Sy2SzkFDLFAb5eUHNiaqrJDMt9eaS4U3hXw35gpaBPppmH6qWT9WFqYjwpmqPqk2R9zEBac",
  "key5": "3r5XYjXsBdTUbqRngauBSfZ2mogGSJRwJKpcyZgyFPz8eis7c4cHhtU792mTQm1zwsVqKj5uAzqj2323rwnwYLP3",
  "key6": "3gCaDZcfBYibkHsHhdRapQTEbeF3wFcjG7Bw62tiguBsXjVQ7dTwZDPffTYj32hDLowt48h51TwerLJLLdGRAeuA",
  "key7": "zhYryiNLdBzrDmM5L9z5WgMd3dRcfnsYx3Wq5xE81vq6gBGbVDdDyDvQNn4nMZhsL1HY7hDwStVE1PTbwGdi5GN",
  "key8": "54dTy58Z51NZtycfrjdXzBZ7wfRepcy6LbfQyvp2dRoDC94i4Xs1x4ZcX6wTyGY2rueWPUXXwx38xeH1d2r2k7MT",
  "key9": "JaLyH6wTij7AADEZ7t4FKefB3S93R7DwwsK1fAmdcY4T1kfK4ZmR8ZVQUdTuVqWUYKCQmrpfZnDmxwmbjE3GaJt",
  "key10": "4Z2pPcx73KNqw86BgZSJ3oCLbW4ZdQCUzHwyvmcMs3paFQRAVgqE4WKcc6bBaDaBuBRE5SFhxvXwCccPhgevB6q6",
  "key11": "3LkYe3ZyLMJnNdgtQUa94HtXaJcEHJizcn5ewG6r3dyYmoqaXZKXhzxSmyqUREmTxcYectgf3bH571XLnCAhsdAh",
  "key12": "6pyJfMh7DaUVJn2RcMtmcAfrf71CGGKehEHJPUAtY2oaRbjTittYNXBf4Yc4Eonunb3mYurg7zds6V7kFrcwprK",
  "key13": "gDUAYb4Jex3sKL3yVz6PE74vJSvaXQKAP6a8LBfnfvf49F8MtTE1RxbsiPUqcMfC7gkQttocQiBqtd8Ys8pYNJj",
  "key14": "2oSuohn4yq6K6Nmv1Xhg9wxZZ26WM5tNj3MbjeDFxVNM7bN7z47w8VP5eLiAFgHAbBKyejLozcRWYu9uquJXkqUG",
  "key15": "2e13YAX4ubvS4irxGbxiZ8RgLFUDezdCxy29egpTk1EzkjvLJE8Cu8GXMM6rs2NooFjBtFrnxwcMsFG6ccKcy5mR",
  "key16": "37ZK7pxxBL3CWgZ4wVyUrCNozmVAaRFdSfmmReGRHsj4JLWqVftA6YXksa4GPMS95kdKtkEqx4uQ4RfxMrvSTkfX",
  "key17": "2UC9LJgh2td5tq4ZfQDrGg4oU8mSBPTWfetLxwGbNvUhe8yBuupKNSghca14hDyxpm6kiGVMiAfazLnJ1WbpCPDK",
  "key18": "2TQBkfToeJUJhAgDcysw964MQnWk5B6GzDLXpBpNWBCGDZ7XBjUXyz8QFMQiTuPMHMndkaTtLtJdLL8fP7Gki9h2",
  "key19": "2aSEFBDWxx6LbK8r8wdxL6L2VVa2p26RDKDcWo9ZC1GaGM2LgF7verhXG9A2NFrR9rFiiFrDfQFzVuDs5N9viiLS",
  "key20": "4MWEvT7dSu9DPhmqhizCmZ1NEJUi5ZkobhNyydizAtVXGSNiYd6uLkXRmG629WQQwLrMAFwUEzmfKdsErDErv76Q",
  "key21": "4AamvhdeUiuVattbcZmZoLE3nHNVC1pQEw9oQModfJsYKHN9K72ZnmAT9NXmorLxgNimNNJmXviZV7FMZ9TopMvL",
  "key22": "txT9zH71cw6rveRd1SqCH4tJ6Ebjj9EbHq6ZZpbtBVW5QcjLyPWfVHsYH1NAMh3qqTB7REayrSDuNDYxZM4Zbxt",
  "key23": "JyjvTC5MZVnJ7iNrBrY52AjPVooSnCtsWNJ7RH9zEeyv1tygtJdQB5sSX4e59y4N12C4As9kiXW1nctUGVHbM9T",
  "key24": "23PqdGYbqoxVSxfVuZSdvANXwDjdN7CVJe6TwiQA2VM7e6dXjNqdSN1amtQg1pYsCvfGnDVGBPenVdw38wcVYkmD",
  "key25": "SJotvMFwxWnAxbCT54WzixW17mEkit9wxxnVKFXoMkfvX1cFk699kkcmqJEpHyyP9hCvdDWkyKB6qg7Njvt6oAu",
  "key26": "HE9GGsH7JgJSrexTLzbyRKdKHqSK3WAop6aMFpF9TetA6fsyERjkucV4cNfkn3LJsf7PmtN5xHzGrAJV8HkzjAz",
  "key27": "38dxm2t7CsmEUmrMiJHGgge8jd5Lf4EqavqMtWCPT72srSQPS8hEGcyAivJHnk7r6ponJL7VPLcY7ZTM1qj6PAqp",
  "key28": "4ZZLS8Jc37dNmf1KBh8xZh5FcPdMXd2MZ6c7B8G6ktabEYF1a5U8MyrzSSaTPPc4g1apa6SGXabJKKqck5xUmE7f",
  "key29": "2YsgnxC7V27rWedeXQoQMQWnzTMAHcgAA17bWNCYZ4ocrkzxjvLdsCqCvNCSD97sNYyxo3B2qrMAegZTPeCSMAh5",
  "key30": "3AcZCN9VkWG7664ShuepVF5oA2mSovZKZKGPU7dGURiU2zAbZvjBzPEJTzBE1BmBdiaDxsM25M4t91f54qL8JPBr",
  "key31": "35xZhqAvUAC4RJ5PNH6m7qUPDh5CphnMiYi7rwRDupNV3zybPfBMZy7nGsFVym3Ysk72Q5DQEynQM9sFghaV2NEZ",
  "key32": "4UoDFihSuzV8LvhsP6j4vRtfxTj1VLADHyRijyttSwChYKkNdSBsCaaqGzRQSAUsiWYXR7BJtbQK3cKgwxq7DNbv",
  "key33": "C8cWCJxTqwJzfu2yY27iDiCtFCusBMHtrakfH3NQ6pudB3jKFNNv5RsbgtcgA7qf2W4aBfgS7Z1y3UF4TqaEu8v",
  "key34": "4MkXJfMkidUWttgncJ4j3rDXefaewxXtaHJRuG3RCAvAbh9XybvgFQS1B5wtvXdesMDY7o1wbbyPqarKLM6XXXss",
  "key35": "F5tgYZm5MxTSHZmptXdusn5BkET5oQZankygvJpcSZsSihGGrypH2eeqpfXPAcW5WJHUtRTNvqUNahu46pEDF6g",
  "key36": "2cXqfdS2y12sCCp84qhyaaR4ynDa9YoU1R9AnfZXWL8Z1xDR9i5kLpMsUC73mgmZDadWqTfRNXZZwxcEjnGNxmNA",
  "key37": "5qUtWtwGG6Je5BHAsYBfPFgjFaAFUqpeWHzFyK9rDnxn6MvoB7dEBgVariq7VJEemqyJ4TCo4v35M9WMdLBsLdAk",
  "key38": "T3Vixcaa6SSvchngg7rQfHRos22QAAB8BkxRYhGsjKRQ9sbEbrCQ83eQUvwrkCWeLqdpRkNG5CsSN5AUtcQMPCw",
  "key39": "j8UWzAzTvUh7NfL3h7YZRqr22SbPuV6mcjmw9rhraTNipqF5cKMcyc2jiDAQAPKhcMyKrVWkpFtAuYgrSKAvXL7",
  "key40": "4ZTcYHtqsr6VnGQerrNrDRpx7nAoy5ePmN6XQCNXkEjssLHvzq9shjF2uNrMJtxA3uYgXZ6ZRtfFHMWF7HJCq1DY",
  "key41": "21mcg5DTQc2cyJuS2wG4GS8Nse2heHPDsfdE1ZQL8ydarPfGQCwZ9ypKXrdueaAdY6h9UiC21CazVFzVzeA9guBv"
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
