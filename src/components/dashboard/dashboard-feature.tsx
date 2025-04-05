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
    "5nqUxcqSWXyocpKy5P9dXGhMXmbfMVTZyKWwK5iRrvt4aMvQy8HuyWmgvN41vEbrU3NVeNQ4a7jXep6WfZ9d8k9G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29BrCuixWhLHAnRoSNYFAQQ9irqG54eqG26txn34huDbKESGyzRCPpVWLfac9D9yYmkjuu7F14KktqJEiswxXdiZ",
  "key1": "3pdWaYDub398X8Z4qKD4tco6F4epmBoEs4Nvf5yMmtU45c22c6P9dAq933oWVKpXiJRg7bw7z747T3zkmLhfqBFF",
  "key2": "2rEy4ryUGed54PvRBxkoJeM65t2LUX7TNJ8So6TJLntx7mtRGzw8WdarfwRCSsa7TFztdQDhZ2czJ54DvTAJpKJf",
  "key3": "4TdVLy8UcxH3JDytkLg8yymkPquGqViU35FwCWa1qjyJN3ZkG2pw9912xCCYFazB5J9B7xZyYU15sMtNPhpJLTK",
  "key4": "5usXzrdFjXsxKYMM8NkLcCpXfEYZvfaThgHQpiWGzfNwsD6GFjKbLtK5AELzf75wpEYpefHVy1s6Y622693Ssegt",
  "key5": "5rrjefXWhGCDth1qD5yHwNR2BKtYJp8Uxe1nFJjsypKf3y2PW1bmxqPZV47JLXwShwrdzAtdYb67wmCV2fPp1ctp",
  "key6": "2MpevgVzpDfafjiBhkEds1tAueKu9NyNo8QS5wuKrW36Z6qxjijcBiJL96dX5YEECDDegwrYFMgavCAoWhtiQatN",
  "key7": "5143SUTqke3EdsvZTBLxuujyXqN1H1WqKHgNodoAWie6NTDPt2XZuduHjLWCr7J5XnjCQCgkL1RffJe8tWA39S3w",
  "key8": "3rBFZA2ua5SDpSHz4x3MHibgTUiZ5QL2zKMALqVVzbBEyDd1ANYCj64kLgp29u38gB8NaqZtXsVApACBWpJ27VLC",
  "key9": "4KuPMif5dJP9Nj2Bamd9jWnQgtqCeM4Skq79qMeYAUZCmCrAGcMqMKCt1NUy7LoKDTKWHh2J8D2gDDJih7GtJYT3",
  "key10": "3j9BeLSNbkmGfoW4z1QrXCnZFnqsq3kP7mJCFkjbXsw6CcvfDCCuhxB93o1caTHrNm1ow1UYZGsmseiozPrydcrg",
  "key11": "5e9Dnd1NNnC9AceXFWupFFycw7Y7xr4cqbueXEK6sMjBwFsSEx4iTHHrDgHjU9NXHg8LZ6gNUkAZkeYdx1CLR6j9",
  "key12": "2y5FaxdoidgnjQ7tEM3pa7A19KZny2EWk2u4NC2FJepLc4je4cQrhWPKEteFos8sjAML9m3mu8T925jtEbPS7TgY",
  "key13": "RQowqXeZDPCmQfssFUsf2Ao9fhvJm6FiGZkzcmqUubjMTmyLnvJoXgJmrK4eWkvg3V5sjcuCW7JbfGv7maa34M6",
  "key14": "3q8kLQFeCyahp65d3mzwUPJkr88LbAiutQhTNPWn2uVik6Rr8MsfvAf21SGXM1TPRqJrz5be7htMWNuf6KgTzrmB",
  "key15": "EPTr3jKRxAf6PfFtDiWNaAq5KAFgtXWMz3yojpsZCrLumov384Z1xB1xme5viq8ymPSuUaTsTAC6ZCv1a55X5pq",
  "key16": "2eUyp2iDqxf3DFC7BJ2G8JPto9vrNBNjSRVi3CQ3thh4Bcoa8iZ5WByrLbBCCrgnYNZqa1ie15zW1F9VepUiXKqq",
  "key17": "42LayVUPKXxcHqu5X4cxHieJCTznjtgsBeCf5hMg2aC7jvY6ts2MjcPH5xbSmvFUzegmUiiU9GBYFmfbFG3hhPNd",
  "key18": "2Cz2WbBDbwKnaoEykUWRJvJv6QNn54sBGhZtxa6X2gNqGaANQYgrLhmcyaBPPrL7m4egGFeoPyPhgNdE5hdfA8Ft",
  "key19": "5XvejwKcBs9an3cveXyHer4MTUjQZNkJgPXBKJoiijirLoSn4Q6So4kQYw1iUteRevCJkSRgUVLZFmSqp1DNctUk",
  "key20": "mBRcav7HM6gynfwqEgTCU9j1NPTkNgkefcwHb26DnukWi3AQuWiB1kEia9k33ZsX6Gw9vSzxyjYeDFuuncRnzNJ",
  "key21": "3BemFRHcHHnXdTBteSFppdFsakAgMZXvfW3T9nuAW5rVUxSPqdytkR26DFELwTTXhidnfsVhrddKuFSYGbW6Rggu",
  "key22": "RwF7rG1K7zJbUuHF5GNVrJH2DVdSfLQmhZBfY5rrRzwE79ienTnzDqSMZH9dYbio8x4v3MFN89WPFEDRiRdWpNL",
  "key23": "2ooHVJh9762RB4rBpMFWuebjte3T8Gn3WBbVUEdtqMcNVK9NLWJZrQzsCrNXb9WEQZQBo3jHMyZuoYjzC1L5cWwH",
  "key24": "y7paXRx7R6QevjFZrr1pnWKNDZb6X5PYmtnxymYQLTwzRfvh8MBsRzozBvqzyRXJPQjKVPzrihhSAigyyiQFoWm",
  "key25": "Lj5H1jq5R38r93suGs6pF7LaHmm78REFtzPDodu2CkqLuEcjxXzXbNeifSsB2G5dEmwiFM93GGeZEr6HTRkKy7t",
  "key26": "3gWVobDwTWodR68i8KrKHd8gx6g6sw2eoVBx1VnHLVC8iVgGLsRE3uPp4AQnvG5JF596Z6wpQghPGBcLqRkR95Mw",
  "key27": "4eEcE1QktK8bqfiMww9ZuJZg2GkqMzwKSb32At3oxeDHG2BT39MXoxZoxVRs4TWwKQRrJaqyt9yPxq4vKeKnXXMh",
  "key28": "5La5PbySErgEAM18PSxeRjfNXzwiWAYr9Qd38m4MqXS28WGF9gXQkAqDjVmSpsxpyWRwfh9FPTA2LAkgZXeCAaQa",
  "key29": "5wqezJARi2Jm5bs37Ph4kLe8qJdFb3wq7Dn4AfSbuCmkjBoPEdVu9dEvK3z81u1dP9u6BTEhZAVE186ce8DAicaR",
  "key30": "3jxZUSpmHRXS2dHJahHLe1ZXYUi8nLmyMScEUjZEMv79GC6koSRmmAMi8iVFKaCqxppiavtNXBjg9QM5FuMGRCKC",
  "key31": "3N7drpHjzAhEYUeMpRoouse9yc7nzxzd4jCJQy8iv2CLKikHf3KNUrqEFp4pWy8C9fTPcuK874MzieU2LdQtgm1P",
  "key32": "3sRBDryp6ct2mG6vjxtA9RygPxZXJMTrUCoYoZfV4pXtpoo2Zp54o2EKE3Eea3aqaWMh7hRP1by226Gjk78FyyGj",
  "key33": "2PqA8Q6AgxQdyTGXScRMQ14euupyuQ69dTRGfUg2VCsXtCchVkY3roC7bE8zgVan9tMLPbu1zJCRxiJVjXJBjCct",
  "key34": "573YP5Rug1esBp3T4TVEb8MtWuoqJ6q9yjgBLyn5bzvMou5fyCvRFB6Rfnxp3Dcr9xhshx9ddKGfo9tWnX4dKan8",
  "key35": "cM7UMFTuELP8LJi9na3p4ddzsoiny9hmSkGGU4vMUSyunT1Qn5kdUvJGqyJJuimxNFS6JoGp8bu2FY2yH8netKX",
  "key36": "58casv2JvDiM1QF9obqFL9hcz7V4KAnaF3EYEiC7BubfwsXsLiDanTrJD1LYxKErxqxek9yD71eDNFhzMTQ4phfw",
  "key37": "5HqSLKJRR2rpWU56gnK6kuotXF4WFp1o3fbLKMSTQKYf9ygs3XRdDbqewJFn5UVtsfvmyobC7qLK78HMVryAg5L7",
  "key38": "62qjtGiisvQDFy8A8gTAVbYAxBpX2PhsPamD2L9vbKYni4MVKVVxpbhh1MyrEWTTG6rJSnJVvEQsyj9gPTWJFc2e",
  "key39": "833Kob4SKLwpH9ArhndPuhvQV6zTVvDKSgJy1Leka9LsHxLj6uuHTTuDju4JwFLnfse4D8QaAtFGRsfVyQAVowJ",
  "key40": "57cyzqtbjoK6w1Se7gZopbF7sbPAcXbtn6UbRcpcdUDW8i1dN5iZQ9xJgQcRBY6UuBURpyGWR1xjVB6umj9VTpWN",
  "key41": "4yDqBpmzaCNFxAgfAeePQsT3A6vJxn2anwZMJTKwsa1thBg7rGWz6ECJBr9WMjj7V335vHTjKyESRmzZpuGQpDqY",
  "key42": "3do5cuHu2N9apd7Bge5D3aWARkHvDgSjgYEbtpJGyv33ha2mjoqQQQBCwgbXfCqJANjNMF8tZi3Jq86Hm25GWKgG",
  "key43": "3erdimjnVr4Er5xBkYJGYw6HxMjhmRr9eF8qrJ1123AT57YrQm9Zxnaei9xcdGDEzMm4Bcp2pA41yDroCRXXzbc8",
  "key44": "2w78GKp359JY9UfkBaetPeUFQUuFLfSH7Yd84vyUv7M7mWqT3wGV2Uzn9aqbUZ7B2NkySf7iCZgTLx6hfZoH8xvf",
  "key45": "4JDQ8P4xMEAP1G6fH9A1QYytqyZsRd1manbNPKcr1n23X9rC9osqE4nHoGAfcCv5MNYkf24uDuS8PzUSyErUWKbf",
  "key46": "fvgpHCfbRoHfjC5AvEgBHXSsps3QYioZGVL7FLKbZpUB2TSxtLF3c9GHBic4SmokjrzuxoBq3Cwrad182ozKZ3r",
  "key47": "3NDvQVDGb9DGB8LyERneEaaJBeE36aQxGiF1yk43nfwzzcfNbeGkDHN5bxnQtLnsQeW2wkG66hCwFVCQSGJf17Ze",
  "key48": "mpgkFKNmS9AnHJSVDaLdcmkaomx7XfTYzZWicJPJhoo9bPGXMwnPQwqjXXSvRwTSNNEX9A7bLpmpZVuAsKBgqmy",
  "key49": "3nUMYQeTHo3yS2bis8S4CSt5pVb41K3bdieWCAz2XFdj6oerhgS2uT358jMaDyWuWggLbMdXNfnSXikyNYd5wRJF"
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
