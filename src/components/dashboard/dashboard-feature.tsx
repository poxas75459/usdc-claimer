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
    "3ms24pZsfAo7nh4F9Df8s5xAQnA99QwgQEGvc5ZM8Q5JMxrJxjr1DNoYfMi87PNSa8QQ5T8gzD33ZFxHgmUHaLqh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HeyjB3HZ64QDxpkEonudz3wckjjwxgaz8TcASH8pYBEJ9TSYTbgZ7Ni2dxadpeNAnXRiXdHeXipaVEYovTGvjeq",
  "key1": "vrgX9AzZEwGyyRmE2HjN5xRJ3LzMYDXpigeM4bzPrd6kw84XbMJ4P7pp3YyaPrn5bNhGoyq3FF6mjtNBGeUnetX",
  "key2": "32aZrb8wuev9EGppoQ12QG3udhgcu8Xfz2SrRjf6qK1bSZzgGjz5cu39iwABqDHmnT4QdcKRAg8E482vm9Fg7WD5",
  "key3": "42kDkvickQtX9HDaAz3rdkUCSABQsK7TaLQavAnCY46sZRAedUbtAt2iegwk78SiQUSL4Sbpus3GJX7Ncjc256Ji",
  "key4": "5GVwPfoEMEPEyUzJ4n2FS6Q2KxqRmugnKuGY5wh8C5GTjUSH3EkJ9g6kNehhKMMtTxnQW7BBiEGgLn7XBcnJi8pe",
  "key5": "3wiH2YpMJFqE2GNyXPqCHqDJRDxocAKNBQ97bXQrStAX93SvJMmYZkz1sSwZZxx658cqedfFiT4zSgtdhxucNN4L",
  "key6": "3r8Frp6NkWdzuwd39CLfhugcL7fwb76jUrthjDHtAREAXJxzPwF1bfQjEW4Yji3WkfDBBj2LKaxUZ1UdHzkpKcBm",
  "key7": "33iXpgs9fs6Po2Cj2NHkGwnKBdRbivPa1Sevvq5iJBqqsjhZria1ZinnG5bQDWD8Dg7RDhLUa5nwcD1aq4z4rbgL",
  "key8": "5KudVMFEcc1Se9PDhYQpsTH5pxVgQRKJJ7DpvNRmLwza31NYWVmTHRgMWaobMQYvc1ebmbHt4BFKzUgMsf9KAni",
  "key9": "26x9MyENkTAANRJYB3ybpyWTvKtG47R5G3vFLxckrT3weP6urZQYzAE8avXZNhrtW5QTQVxdXzMfBPd9CV58qAo6",
  "key10": "3eQDdF6cMNk8vGTPabPhVmcrCU8GfoFXjkjvuMArN64HFCV8iFH2s9tmX7moLWvsh4xTwswz18ZxWamJpT4YDCwC",
  "key11": "3N6zWCT9hZucwHoNw3wGG8MygvQVt9SRwtDAspZPHN6KUHw2MVcWkn7wgTVDufmkFqZUiDF5mm7rS6jUc5dhXWuw",
  "key12": "4HiMX3fKZrYkz1nwi1tG5K2Su6FjvKa7sSqYdsxkVWvQDUq5cHGZzaLhNoKTfaPgsdw8htbHurv1m3Xe8MBY4bVp",
  "key13": "2JFU8K3PpmLkivc33hkRGFWKCgLmjBxqp6yvA9ReYnJSsiZYxqSdCedME68ET87WALHmV4LKzZJUgpFJBcou1aXQ",
  "key14": "gef2gYRgqHyJBYdyFe2sVF15MYVMTwkTuLYbFkQAdaiggdSC6kXUkJyJFKhm4WKJnF8DsintgYTuZpnNU9sTbaX",
  "key15": "DXieJKfnUbNZHNMWn4hiwMw6omkBLY3Xvs7Zbo76uW5S6Z9AxcAT9iwewH52UGBJf1hMqLaRtQZsdNn63UEbhYb",
  "key16": "5Q76NvZcodxjeU7rBFQGyQjUzuExJPB4RHw27d4B3DuQ2ALrm2tLiQHMjMFaERzsAG8tjGd6bCAT117gX18Q5EWL",
  "key17": "3BFKqsNsimanAh7fcxrdn1cCGVvNKEiSr2gKv14WLi9795FVnohngiPZFSzxMtPFLv3GmEet65sadBi6SabTzGUh",
  "key18": "2H2oFJkdwoH8r2YpxcH5yKKWoDgvBP12HUHj8gxs4VjNv9dLrZYFT9sSrQ2E8iT1NU54eaEju3BknTEqz5KKfTwx",
  "key19": "NMuR5CADNciWsqKa55bC3vMF7fqM1XBXBVZg2EKDCUBes3Nq1qtyG8nEwj51VmZ7DesZRoXnSKF4GeqVQNh6Bfe",
  "key20": "NWaB5WuPKaT2ykr5n3Q9eMGFTguTaGYNxkxAwRv1JPR27THvLUqMWkgZ26Nr4JXmYwLcEFVnsoZRx8BnMP7YnQg",
  "key21": "36Xbfhuu7guN39RA5sTTUbgu6FNbEkgGrYq9HbvmKzKBDnVeuJA4iEGvLw9XeNLy7TfHpCSHhx14aCSH6FB3kxGo",
  "key22": "2mLWzEsh1qFu4gamTZ9RfeDtfz6GT7eMjLouXtjCqvJ9je5J7yioYk4s7cZJZgbCu3Hn345GKSGX3sEXmFLW5ehJ",
  "key23": "4xofnb66EqSEbqsMjuZ2RcyNHVF5E3uLyerk3iZyUryEognorTeGfFKJgoUQVhZ1pdawxbzSqukH4kX88p7jsPcL",
  "key24": "4ZanHNMs1p6rV8kZov4cRFeFHGXXfewptyanf87wz3X44He6UKU8Z1DTzC7qVZiCq49u1ER1mzGoKsEEW9oes4MP",
  "key25": "63nggFo9nAMTpwW1sLsQxwebe5yHKvvF5CdozFGg99xActyuNhU5v24XLcgZTTx2KAcekgywLy2nR9rxXarj1wMA",
  "key26": "gcBQyou9EnX5s324wuiDBZB5Rjqb16VVdUzqznhvhdDSNKh9zAF9KYDnX5pVb4EdTn3Qx7mPYWRrbEbYFRXWjNC",
  "key27": "4TbKofV5oneC3SsvfHUUHEaZvut8Cuvf91RV7LsotQKou8JUERrtuY7vYZpxKNjM1Vxcu5d8uMzv3tNL1naxTJTo",
  "key28": "4LueJYQA1aLPBfXTkeVZPTgseoGakRy8PubsLbop9zR6DdB1Je6rZHYHto5fDMhZkvQxYxKA8o5Nqfi6aQbLoNQ4",
  "key29": "2g65NrtRrbGfz8hRqcDDP1a9LtiRVgyWD3Py4zRUmhXDHcqbMkFJnJj96CVeQQ6gB6mjekvhBmb3Fv8WoC85o2oS",
  "key30": "2VtKqo4gdEg4K8Hx1c1p7wPiokZ2PP6trt5tkNpgnFJSfmpBf5mNiyywGTSeTaKEHDuMFgqYWVZAPPn8rzuTLaXv",
  "key31": "52vyJiWpLaZ7RBtWmUPK6uz7Vwp64cnydxpYXTRxebdsoio983APddFtsx6JXBkxtzfpfAKFfaPmBA66M9ttR4MA",
  "key32": "5KYr3Xv5R2a5dZCG1LwFCnigBmNhQAZgBxQkKHbYZM2BGEFpsxx9oSFod7MBsLdtGnP3TEPV2fD2qFiCHzA4zSQk",
  "key33": "4WJVaxguY3iPwdPmfZDQXahS5K4X5EpYJmd1TJ7Av7HHBVft8UFEiaN4w1fpPJgToNKzZ8XFcMmXwS51dTdtL1zQ",
  "key34": "5rxGwq2shD5mz8EL55cJXg7rDqK2mVnVkTUh3r6wEmV4roGQrpKJSUpJHiSZ5ebSoYFM8ZvwGM41JsR9crbetMYe",
  "key35": "3vhT58YN9N2GAq5TAMD7wPi1UU2BpcHA6QnimUtyUpoPACqEeBdyQctghc23vh4n3qroSnoS9oEEbMQjPbVinmJR",
  "key36": "23n1zsDtTRkHoUArmpZb2ZtWgUXzGXsWospeHaRvUfikneA6yjk8E7dxxo1vgzE3K2au7KumqE5MdYZyK4w8yxPK",
  "key37": "4RmT3fRJC5KR1ZduKbNA2TWgkoXw2LaRDmCbn1xjrTF71C5zq39AKe1JrDv28j4ZC9xAKKWrMUgW662aGkYa7iN8",
  "key38": "5XPVTo3T7XN7YzmpzzwP5v9SmCofnW3Wfn5NPMAwuYpM8zfieFxh4mXqjuEq3FgBsvgWU6aAj5xEWcErUBfcX3PA",
  "key39": "3P2Uy4yo36EEPCo4tTrCPfqqfvpuirXXziQwCorYHSX8HFd82znXDzt38ZjPGo218BZwrEDUps6Q3i6cnC6ercaf",
  "key40": "5w7B9f8N5MdCpSi1xBjmiqrPQgALutSLYdwFNzJCv8PjBWDU5UoiCVNZy1rf1YSpF8tgUXM7oCD7LzAmWKu2AbLS",
  "key41": "5pcobfZrJFZJMphp8t7ZjsL6F9uqgs48yVqFGf9SEXJfRJAHTo9wikRqy4HS9tv1YHi7NDw6zGrkdRr4fcjyrqsM",
  "key42": "65areCFPRmCwvvQbHge7aS4MubhQysXr3eATuRx2yf4MxwZcZCzEF1oqM3mgGsqGF3JHUrUshEjHkTJeSD5mr5fp",
  "key43": "3HEVMjbvJLrPf4ftD2bKYtz7EYjNueTQ42UEjvFTfqf9nAbrU8nD6RXiHDdsjQS1XgxEEZjLwhGi1msAdvuUh4FW"
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
