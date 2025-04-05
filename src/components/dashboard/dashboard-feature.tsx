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
    "27x4FKas74dywsGac6VLdkzC3mmMmuf44iiZkWujpVXtymGTQ5ZRmDdMhsCUKwZgECAmiCBL58ZetatViKi573Uo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Mca14LW4kwQCppZHy2C1cvGjvEyma67E9LiP1bhBLTehmCoCjLb7imPyqTcjeD8AgnzVENQs8Rb1ZSB3yucRmgt",
  "key1": "KVjmuTtJY8oUwrZJCWup5KyBDDdurfVEi6SmBbgX3LUGrHEPmX2StFdwHSRyh6DprwDGRE777AX4AwKzsxyVNrY",
  "key2": "S3vbnSxfyrcdY7ewojX17LfzaHHxVpMi71dJoLFdN5SzEnVChUUV2GBz2zF5aBFdsECR2uu1yEXzJ6uT6uB1Rcp",
  "key3": "5UeB9bHSXqEenrFY3onqgCfQ5jhox8LrdbZFQrQ8Wk4yy9CA9qQ4bqujciSjnttuEj5Yc5kteHpkdEzCF6PjqxpK",
  "key4": "2H43pLTa6x3E3A7cKc2yuaYBdieigoqHBNAkkhSgamokNuRj3cu7Ztm9ycyU5UybWDtuuL3mvHvUSmb41HPkb3me",
  "key5": "2rfH1nSbJV8X1qKk5eCDdpL5E6An1tBSKjW7zuh9zD9VNKosWRGco2z6X5A2BVJte2mpS1gRDGzayB4f12itgJAg",
  "key6": "5r2CcppC7Xo4M3g476Npu4Pdo4tokYnJ4xostATqnSQrLot3mUS1xh7RpX82p8ztFiMJacEhmBUApYG1YTVC46Y9",
  "key7": "1vRXmS241jPh5eUzwzyAJxrpERG5bcK7n3dvcShtB6YEap3DRbusmkdBsKqCWuakY4SkJhUa2UWQXnGURHNhPu9",
  "key8": "4QeJ9jGyrTzKiDta4V46BvfjsbJqXMizbvu5vmQmEi2tWBkQ61LhzCHyqPUErjLvsLcgnUVa9MV4UYkyoD5Sm7kt",
  "key9": "3vGNb8BMGAtFJt39e6MDcX6q7bUQZ76AHPkxhG5ZNHhHxNYbyuam4mzkJmHYhxLijEzF3EfdY2Cnx7npWhJFViXw",
  "key10": "37EKqck8hz2qhDenLvtvvghXEp5gn1E5ZisyQ2sL8mDbXq95Pv74KGrSGgNXzQyiBHj1vC21mUY7pCbWtPZqu4hs",
  "key11": "4ooFpLz2LXsxq8qS84SwY1rP2zKSnRsY1b8eUjEpeYCpDf5EcGptPGG5Yf8tM6upmXCtULHazCvJ8qaXQoaiQuyk",
  "key12": "2PJHu4jBAcnSiE28mfpmFVGjRPAGRZri2UGUJkEU8Qfr66Z4sLgCrDRb7sL8V96U6nz38ymqy2xHSnnjfTpkDpaT",
  "key13": "42sCJxYr3dnTRHTpA4YT6iwX95mWwNWCfRtqGrB4EGVjG43qhe5itScMMBUA2wWDF2q9uS8ZqpPJGC8WMxLQYswt",
  "key14": "51w8SL42ZXnNWwqcTEKQopd2NpS5ZUGst6jjHmGeVPRC9CwWGMpHHcHtnqEQ5XpaPJcSvhgxzHYkJvkgYfQD5BpA",
  "key15": "oNa3BzthLhoYtBZmYh9C3jcsiQvS9FwpWZP83nNq3NNGyqd7GZSLswhuKK76jy56kS8TMbkSiW3NEEA6Eze69TQ",
  "key16": "ND85B4bqBJN2XhxgQQcTNDaRyvjCdHQuizMkN9T974q7jCmqnVUafske1gaFsUvHvVmwJpjvWoTrtMVffE48npf",
  "key17": "53kDGtceXE6Y9oyV7vSrfCFSFgCn3XZUnRmRYncz5xkndv9oDAfFiWEp9JceRzda2vp2v41Uq4Hn5akX9MZXgbt6",
  "key18": "o6TQwZ2PTFmbG8RuDUVgaoVUCbasGDnRQZYbP6R3qKfuvybwgMp6W4FqKknAe3njfh7dRHUdb8BCGWxfmQCT1Kb",
  "key19": "5hBgDavmMSrHPsKw2MbrAkicqHxzZMVvVEQjMbFTkG2uJiS7FvvM7gEnBLbZBnEuCzmHUiE1mK8Enied22hJ27Rb",
  "key20": "tiabezMtuQyezJazBK3oATuV6mrQikWWDrMSyLMue6x51ZqKEzKcqNrZeXCdQQ4rkAhyfdXpwWhjowS2nRgJDp2",
  "key21": "3M8GNbRgH5mL5tKqsaa2sP5izAAiXnxekpUZ3xgT56UPiZg6SrMGt3oKMwmJVULKQPZBjvvYMBHiMHrr9k82RPhE",
  "key22": "2iWD6Hep51xXqaewxsv6qgHyB2RpoSZztGdXvW4rD6RK3DuktgfEHcxxVFwgSHo39X2gjQjd9FoXqfvVzehSwZaP",
  "key23": "4m2UdB17A3cvMTpq2k9FPzSkRByGHCibzjcQqF8LMrAUpDhqQHNtcnkBuWNy2rYZzLfUnGfn9tPyydywzTkh1zLj",
  "key24": "5SX5bCjVsVa27x8wjAzcnopM2HtL8JmMbfwRiQa5YwQCHQgDNB2efHtceM136y7p7ekvGTwQQkQnzS9kmz4pJk1L",
  "key25": "5suC4JEuVjkfYSQ2KKpJXiKJmdykL3ArLUChnfScUENgJmXhsGwgMV5p4y4bDEr7pHBWtqoPEAJZSqN7EEdCcRmj",
  "key26": "4FEYLEs9N8mniqLuJSZxdcExrL88ypGZSXVPaG7Q6xwC3BC6HPfoq6e1VBcR1gbTaiwxhAWy42Ft8UPAffmqmnMr",
  "key27": "3HMfsRF7Cp1cxFRj7bpRG9wWeqR2rKdtzCVhMPnqNsEZUwEASDL6K3PACXxdbHwD3SieziRh2XpNCPrCvfi5RV8x",
  "key28": "43thh5fGCVfEZYQfXaWLXNSMJHQy7dSv6RWTLgnmYi3DhJS5ZHDjjAJiYRdLtpfBFeASCPBSiLHdETtosWLJpQFa",
  "key29": "5ayMYH3ucKKziVoqoFJEK7SEAankspfQsvKcY1sUssz62uM3MqjVKfhQ4Zm5kxFGDNKfrxXeeRnYZNS7MxxTsmac",
  "key30": "53YoEPufzPZ1YAJgP5FfmAy9Zeot8LnistHdTTeTRxbebnYUQTTofxUzhtX6gXtyhtGeXPFsXhRrto9KYc3b5wzr",
  "key31": "Lw1QjGgakiWYu1WKwi1GatAx7ZHWxEJXbatK7J3k7CDkMQofynSLMS6uySEgtKSFzTn8BYiK569aH6GgAzuTLQ1",
  "key32": "4PV9AjpoeGnJFn6yWZvC2qcFRJ5Lrb1mjMUgmjRiQGAyH2nhktoAWb3UXrEw82G5r5USthHmKze1GD7vatHW2Zu9",
  "key33": "4t39Sx5sP9QoTpuZtFfFQSbPcLt4Xnsorv9QLGQC7iFNS8megjn5Gyfitby5QGMgPrdrVWBe6PtvsYXDqgsNXMVX",
  "key34": "5vQktB1bNMk4aZCkFnMLUEU8rTPJAinVVjnsvFgjiLxWewSopTSU3WgJszNXDnSwz753knNutcqU9qMgG5PJbnRt",
  "key35": "5HBEGvRnLSVS4V7qq7vjsaWG4R4yTsJfeAu5iMbi2qiLoxzMuVQA2oCggFyDESCRQZcT3fHQ7YpA8GH4BYgWebGJ"
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
