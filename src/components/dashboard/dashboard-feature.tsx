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
    "4g8XkH7iG1QPVaZo5Mi4LG6EHVC49SmpvXshmHsm7aexj1uoCQFYYBoyGbvvbJSdYRVCZWV6wbFQ94sKTdcSdWer"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4d5ua4UT8uQyanyxBv1UnHrnn7DV5n4TKwhEfbvDJthFQiUQd2buwZUab27zbouGpAJpMdXtdwqA7nF3rDAt2Gor",
  "key1": "3f1F1BgUPhZMdJ4Y3Ud7EraaTZ83goCmyzbq9gaBsQr4yE5kvWSgDTrE1i5749a3FfREi7B3FbuuF9UPNBi6shbU",
  "key2": "5iTveufszn8noKVSu7ySRG2q7Ui7xRZBx4W4zzK3fgtHjADmtEx66e5xsBhpjajijjMUUUv4cEQHyxX9XM3KhS1W",
  "key3": "3J2MfPknf1QZYVd6vsH7izLxVtJjAhTpmjTuPwp3g5JSdXfnsJtfFbSHbHV6v6oBNTmoBLNR5SMuV47F2o396BjB",
  "key4": "28h4JQ6pf8S6wWDXf8msbtqPPAJmfBpCJ2qTVpajLc3QW5F343GPdKUdL2NvnbfZwJrd7Fd53StNbexAM7HUKD4s",
  "key5": "4WaJXYwGe73XvyeRaJhbGzJ5jxxzD9XgMr8vuta9e24cAsFctccX7oZwajgs6B1wXBc8U412BTsvHq9DofAFywgV",
  "key6": "4u3DRkk8vfJBi2oPZPKbJi8wecnGJX3i8oFnnBLtyTau9gbUo4ymozK1bYQwKZg9h5XoUowLjCTCFxS1piKGYVrw",
  "key7": "4xLPFDTTNPA14xxTrRN29BCYjzeJtKrebppehsRqBytvzgNqiy6rhnryjSeWwgPgF6feHhq6jpFNg2cG31YWrAhQ",
  "key8": "4ecNdjUNySRrCWp525RniPmKk69C9taLBrqeDCohCP41UHxaM1zRQbQYATw7VzXyfUvJUN6dGbPab4i46KBEZroV",
  "key9": "5z88pyyitEy9Xx9Q1RQz8fkeedJ5BuTP5HpL9iwRNtkAhbNRJeZpFR65t24hukJ5LJ6rGX7i9YAYAe2yWrypTzLW",
  "key10": "3DvzSfDu5FgjPZwYnHFK9YL2aobZHUtcBpbnF6jTmq2VembBha8JRN3BdkuWDhj3K3LuSDApUgeHH1fDZfnehAXo",
  "key11": "4KTDgb15c6fWTQk4o7SAb7V6DScoekhyf3n3sSCYn1ahWnnBHzeyWYVhwGLcSNiX4bLuxBFf5JFvBrec1CjPW1ev",
  "key12": "5dd8JTzcd2dRsEFBrUMVu7SCzm4FKUduXyaQzFPnnNzRJEDC2DCsgStQGoDAYPTLH6jRR4CeN2ZZm38qoAYRrpvk",
  "key13": "2FxRXAYhEAjSzahzLhoqecP1W43GdVigN42sPtTGLjq6t2z7sehVrcurzoUffa2aH7PZ83iLQ4r5nDV4Vu5qwSjA",
  "key14": "4JrCWEJcc65PeQ4JhHJ1gLi8CFB4T54xpjzpd1fcpafHMQqLJYMGVMqBhmocPkcMaVriTFq4QcCVP9wjoFW9nY5B",
  "key15": "4rWYS8YAnu46jGtaEfSzh8U4ZftvasdEaQftacAQpMg2RwmW8d2R5e3rfTMZSREkb6mZfCZtw6riBMCMAFNyE6wa",
  "key16": "3ieJaTeG2nF2QMWZjRRKqnwh4QujytRqqdhBdaSuZmab7wUmTb9WCrTkbDGgD7ypE4TcXzFdbHtALGVjyygQUrVi",
  "key17": "2XPTLorgeYbBkrm4ToFRjwG7wEdtpYa8YgpvSZQph4nSLa5ZMxJMsPyXsBk1XfZUMDuXmuYwL6MUFAYzH9oxbrP3",
  "key18": "4oTXEJ7UNd2bYNTnTbrR87zK4DbA7xB8Jx159P1kRoP3DQKRUuttbWS7xN8UuHMaX6R7tmysRYmSwDdzmy1R9WqB",
  "key19": "2pU3MbXukHQXsSAhxmzCJUSXoZ8LAV7kuktsKbsQrFG2aq5D483jmakoc7vCLkELfLmsRr6eS4DqsbTeU6jY2zdw",
  "key20": "5R2AUVM1gyZtNMyUBugaseRT9zaQUzHarxnvKLFLuezGWvtqxDGoRCz9yrxvzUmst5np6NJMi7A6qNyHTETx7oPQ",
  "key21": "wMAWFia7mmJasjJvC2nPjYCvGZBUZUtpNQnBDWCsd2rHW7LfwGSZtAipUS3FHU5LtSYRg9RqdHLnPBYoAEuLaLq",
  "key22": "azodqSp7Pyae6N2fxTpjFCJkZAQWYYxMeYAtGAcKhEzuefXXpBQhGbRyayBMuL1o5vcvpEwGwTjexzwQ25Hu9Sa",
  "key23": "3xjsowuWNoE2JM9rgUVe6V72sm22uXpaSdWescoArmbgox4HDnU55sW9fUaQmvqkdhqssvoAHeUh6ucJAoLR4WZa",
  "key24": "5mkqiRP4TtAMwEzwm249m2oGkaxd9FV4UdD2CnRVRL7uo3bG55pKXGwNALaS9KVaWGejxLZXjcRxDhtENnnKfGyd",
  "key25": "49T6s2Y2MuuRjZRkkTsv6heEPVMo2VPQdzRVgKUft55UQJKip8DYaktNborF3SkMr3KYSsk9ib6GGJHRDgjopkXV",
  "key26": "4UkY2wfvV2dhyWgBqY5tqirrciP1eizqbNWDUzegbr1i7oCTwzczeyeS31uonHNxb9PmBqJBt5B1gyszUy8Aunwo",
  "key27": "3Un6o9N1TUqZQ73A1FBvf2YtnthMHekbByjuqrSxopHt4JNZeXndZBd2a6eAx8mxjjJhR1rdY5DMFFCQwzDfi5Uk",
  "key28": "485PpKAyezH6eqVUn77twrpDi1krjwkbfXevCGkjrVfw3Hz9sNPFZcn4i3czpCpMosMNMBr4oj2CoMF1Y9wnWA5k",
  "key29": "55FHBJ7amdvmCfPt5iBsadBNLQeDfE4XVYUPYwxhYLUbiJTKJihZGKh23iWJwrR3LpcUcJqsS26uXYfavZBrW6zH",
  "key30": "S3STJyjRH8H9oQkkLUxfigburUq9DjbT3yf3vR69kjLdYrta7egF8cdQAenpY7cGDBx17o8JZZC3p4tWDhzGa79",
  "key31": "2Y716er7sM763FLQhdcCKdNsiBMsYJ6Gk2Whju88kZvR1npttTQ7FFHYpX8mF59GLtGr9gJ7PcC6FY52wQijghwL",
  "key32": "37Zj6c7MQL6LTJLSoor4v558VVf4DHe8RowjW36cwu3Mt7ajcMokXg72cCSWPsjYvu73eZ9VHcNiwWu4LcD8CKbK",
  "key33": "qpBL3G9egQgNcFcgYMevDwFgmPgV8p4dLp1uctric71m63opHudxMkd6TqFKEgK78LP8Nwt7dGbW1Ma4FvAgB7f",
  "key34": "ANfX2Xdfu2GahfSBrbD3kALBwo6SoLnrSxL36y2a66XKusBMWySLK1wJ2CfRSdiDftfjqPCiqgUFWCVJBphV2nD",
  "key35": "4jJi4T8Jj7RBS1zTLMsUUSza1GDy3hyeeYxsRSgFbjC4mbTyuXXXeovy2wPnNq2opcaTu7QnjxpfcPpSkW2U3Krv",
  "key36": "5SNX4gFUYeJUkC8hsAbxNXS6TtDmt4YXWK2eRJvp7Mj3gUhQ9HVMP3gRxwu2xfFdH3zzJXPp4daGv5MR9ej7cCCX",
  "key37": "eUFuFaD3WtTVKWG1dzRgH1CUaQm1TycdxdGXzF9g2C98kPmCL2waip6ADmVmXjzyfBYFE5BvQfJ4iR6o3MtMQtx",
  "key38": "5n5uiBxxwcamT7tXSpwJfXFHYpfpM4FpkArao26XouTfJbx9zLktwDEPG69tQpuJB2wC6nBtv12phsEZPY1RvJvR",
  "key39": "huaYBLz6hdVcPALKH9W9cnS5CrgsnJJaQKAgQonD6PxaDQ3NFeHmicsz5VuWuh5cA7ArAFMkwJKi6nMX3zyX99k",
  "key40": "5TXVzKhfdMYS9EU8bXU2JNuy7UDVFMC8DHhZv9rWnvoUDBzAjrHdpiFJWh6PFUkutYd6DqWi8o3iBQWoagp96SX4",
  "key41": "4xgxibDtpkb6iHJDLWFYwpQHw2gTV1MwrbnbcVNNXxPq7TXtCvyQnRYKhPUBGEDiYLFYUARFjKXMUMwbTnNvcaJJ",
  "key42": "4N49XRuhZworo6SWMxPjuRVZRGFokfgcG2FtfSyhjYRJVq6fFngJA2noPpnDtwMCKKqfCtUuDtSFrVN2LHSmT4dL",
  "key43": "2Yn1Z3i9rvFKu73MduMgdrT4BHoqBqMmxtnPWsacfBVd4qobEs9zPpoN9vT9LAqgLRJRyazdb5n2vX8YCmopwEcd",
  "key44": "34hDZr5DeRsVzXfCFMe8iZmEMT62tmBr81hQoDgPmCF4kenehSH1hRtNCBn1PgQuKAYSxSsG1TzHFcimAf4vjfY9",
  "key45": "5dAXi6F1VjaheZHTQtPQ5D8nmEbZk1C2uufYGoenHfDLEMvxeQk6sjVyD5GcxmRf2TrHE43pAfPnqC2yvAhzfC2A"
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
