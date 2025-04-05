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
    "58hRAXfWNgLVMajTZzqPduBGpWx6mvvrdv5ZqbafvZqcBmangmnQ2QMqUxgdGrgFUWz676DTSzWzZona5yn5uaED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V6Ez3hDCPomvPsFQzVUqqNH66tuE3AzecKJDBGfhDh658sCw13kn2JcxRCviMV67r4E2jW7KcznMaYoJo3LnJrp",
  "key1": "jB54FbNorDHgGJLMiQZrZnJyLVi5PyVYz3R7K1LcUF9JNdN2G6JBaZ2wA86ww63v5ynsU1skYubKo29Hzr2ibFQ",
  "key2": "9Wpx5Yjh6vMJdtmA5c1ioFa43BMXzdZcb7tB4JqY29bjA5WGM1eabwQtEJUTq67TmM6iUW9qBQ74wKUpAoFDSfE",
  "key3": "3ucNKeJApdBQp9uQhP6ojCqmDBb1NsbvSJwcgwtorJoqiJPazSCA9RtrNqrLQjBAJ6muC8wVAsxAY6W5YQURMoSS",
  "key4": "2tqtXgF5ziJC38gLGrmyvom1pSB5PZT6LagQyPJZeVj7PubEpUgV6Y3KJ6RvCowg68FqdBb46oGwnC4VDe87fxQG",
  "key5": "4ZNCP7mRAwyD1WFS3xoWCG1MxbVC2euV4gMydxetDTnqNW8B9Rd4bPCg6pXP8prChZFwdvz5sKHrM5FyrDZfQxRg",
  "key6": "NfKJosZDFcqoUryNFUDSi4CXvQcHHbUw8SQP1CRSszXBjeMdoAUay4tkcLWGkZ8t3xWcz7TSzbpFBmhsRwdCKqv",
  "key7": "45aYpF8zudDV6yDdBmtC1vWGCRjkNo2yB3uiV28AiLdgmp3XzBep3PsRbZq39TTvQCQyx4nuSBPPzqt7wmgsy2Ak",
  "key8": "2CrAsYtP7fUfBsSALZgSc3HnzievKUpbswBNiwJx7p7VvALUpNsuD8sW4tmzt21LgvEGKoen412TSFJsubpmGy7f",
  "key9": "5q9h98eBzQQMbUPmtPA4Mfebx6cZ9Hot8YaR2irGSyrdkHNzuxVFKDUY9Mof9EJqqCtLgHVcTSBwDSSC7GEvKYLF",
  "key10": "4EggNV4ogsz8Dp9RMWr5sFcGGh1ZsTrcZ7Qtb6uAxgKojosSGizLCSZZWQs7mjNPQ6yw5nxe41QrPfUXGDbKXBYc",
  "key11": "3GQ3kukEPJJGhMRft3VzMa2JXT7ZYaBzYm6c76pgHCcmTZ2YquDXGaCsCZ2VDFmBHxjkjvpgWwhxcyFHKH49PuyG",
  "key12": "3DXXbpTRG2eEXdWfKZ12jyFb5ePWnhrnBtUyFfB6SoPYwV6ypuEiCa3XWNqz9xap7914L8yMLgeJfeDLNf9yzjcn",
  "key13": "4hy8sKBCi2HQZQEuYjVHnr4dDLcNuhZnE98dKKk8Ub5jJMqTcX5FsLc2pPPoaLQsaeWurSchmGjyhqVfkBfigybY",
  "key14": "5hmF5Sm6MdrCZkw7nsWm8BZq2gHGa3nMizwsy1HcBXd8FnDPNeXAHmC9tAcPS2ui9EQ3jyefNvq2LnyN4TjTmNsg",
  "key15": "2areBANRNUHZq2wRRSNnXHyg1AArJufMDN9WFQEMeBgwXyzTe1s2FJ9eASFsCjN5wqi3UaEH6sCKXUfVqCQXcDvV",
  "key16": "5uvTjbgYRUwddmGBAN1PJQMeqKGWa3UJY1p14VesVVnvnx3PfDj9SEd1T7NAYZ5XvjJpoFvpJEUaHgViNuA8stjp",
  "key17": "2AHkro4v7YYYpMDBZfunbHZtrXZGpQEmUto2y2jGQ2RGxmXgxZzDjSsBoX6bX4XZFY6AK5Ws8US9d2A2vkkuoxe2",
  "key18": "2gXQsmtsLDGXi6eKBAwN7ea8nACSdGpnd8VuTtYsBgaZ3y7FEBM29qH6AKS5HDDoVYnt6YJCamHBdC6CtxT5efNe",
  "key19": "2UNVfuSsjrfE18a5DHotU7TvtyQugL9zwCLgHC8fa1TS1EAtDfuBGd8GqNxUTcdCfJKChCbJ1vXRH2NpGBBWAVDs",
  "key20": "3y98JiFTCsdeMbZM5rv88XfpARrzac4fRqbQ23Yd5LiVKXGHVURvkpbKF6dyVgNkjZ7UC1dbCUaZ7oW22JFrW16X",
  "key21": "26NDhRGTcpAex4GVCXSR8tbs68GyA998UKsW5jQTKR7dBAFhYeV2x3HAuzq6YevibvEvbNXRujGP6M8tysJqURMa",
  "key22": "5XLPkpHkJavo3e9y4Tf3rtV7ssFoCmRrms2wv25gawvUvLWWyJmfRRkRtZzPdkSQn92qVSNt1kAJmYpupWhKUfcN",
  "key23": "RDHfAiR4uhE7HzkoBSXnXgNMAEtD7e3voZ2g7dQsRfpDUWP55ggfdSqSDwo1vH5NVc6x9jup9xStbEVXSqhf9oe",
  "key24": "2MLaXSEgLjXdPsK8MSRLZruRzyPWzWaVfKv66X2hSopHeovapRXYrf3TzAvX8a2wo9QhGrXxPjrevXgrsyh68p3P",
  "key25": "Xa4wo8QjrPAdsXCou6GVzch9bekchvpEfwXKH2upx87QZDkaFU1HgTEQzjRazKZ5ZJthCF9eNWMPuHZRym9FCem",
  "key26": "2q1zsJV73Qicjh1CyJ9qmQojpbhr1pDy4wXbdUy6F3fAas3pyJfwS8qLjJ9ej2Wth2omxRYiKC4AD5SjkJk2j1Sa",
  "key27": "3H6MBqVpVGYcfHw2Wjpjuzr9XZWoijBvyLZK7chgLxY2yGMf7oBzh2vHUMTanLKCyeKrQAnevtEtmuuiR2dg4z5g",
  "key28": "35cr2Asd1MEf2Vq2GYz1yaNuHAEckWF3k6ujjAUuwv3GxKihYoxPyx2fh9E2ni8oRseJt3osMrJQdyNZBCMieK34",
  "key29": "vyASxKEH8fCmVvSYKAhQUHKzE32Rm7545Xp2ziQhknVQt2BMC1N2BSGPyQiQohEg7nkXUSfk7dDydur1iUgE4Hj",
  "key30": "3n5nivvH9tBzaFyxnrAuic9jTe9vkmvVYDiR7qNQz3f7RvzuuFDaMi4A6mzb5jE1UfGygg1ziCmMPGvbGfGMoo27",
  "key31": "4A1WmSZEbsX9yU1upzgoy5on91BCHSrXEYdJp8aYwpBmDL4LCDz4jEqM2uvTxj5yFKWsJHP8CZYJGLw1v7hmTZ91",
  "key32": "4773mFzWVDsmypWBvtNdsE5f1mD7ubJQxhfzSgJdDpA6qsYiv4sASdV5wSzx35BDjPRm75MdnVgyDeoLyM1hHaUG",
  "key33": "2fNr1PYnssA4h9wCGgbK1U45mksSZmP7aTT1iF4RT5phPHHA711MMyAdmJPuSxmbAyCZ9hJjhe1ssuAXTGMxZxhm",
  "key34": "5YRdaV7iJbfRPgLL7EW8Tf8c7LPLtGS8KL8fvkYn6KaNi3rby7rkvghzouov2FxKTNDrprR1fNfR9BgxNBTNQoi6",
  "key35": "2xxQXHqHYAMH3jQiSGuHgN7rZzjukQq2LSRyF8JTmbs9o93AZKcLEjiAWc14ZPZinLbsKEiJH8euHUQCVSMzP1W7",
  "key36": "RX6GKW7Z5HJaJMdNGcHdkLfdGTvKmUbEyvR5Cczmj1epsF3HqmHgVaHty9SrQfgVtsaVhaXnWmJ7ndYJ4uMatg3",
  "key37": "4BhQraVq5wc25bQFGKchphLyQPDhHZfyroxhGBNANM17PpKLphftpybZvjAhjGobNHAa2SsTfiyaPG8MaFk84s3D",
  "key38": "3GziWNsGFm6pE1NDo1bZ8HEJRvcSutj4LhhvXzsisnJpHWSMsrCmCQCRw967zXwDAE4ZMLYEBG7spHt8fzLKDqem",
  "key39": "3TS1XrRfnaoeh7JAsk1HB7gUzWpAwfogtd6uTMCkwdKJs6p8mUHs7f3naTUip8GnUApbhk2qTZPs2VrFFo56kNQN",
  "key40": "LNbHzyKxSUMAUBY8XCchupZq5PJUzXfk73VqR7C1RPdQzjkbXJ2DgwAMfbsnpZcWairhHQxQjnk3BayfoKnLcyy",
  "key41": "4VveKkq9JH7d4oip5fwAKCsEuhSdNeS8DUpxfXfnETh5QQ4sPwhxWiJBHDVYA2FSaNPtsP74GdeqY2hJREVSaXER",
  "key42": "4myJ692f6ihrZtAbHzVTbLgaj1oJ4qMMMDW8XBmBz6FidwBLHHGoMu9NQwZXTGHQS1H1B9Aqu33uFFaJCAMQvwfe",
  "key43": "5tvuv2CAGf6q9k3AE3J5uC2SdfuzeRYvEnzRLa9gQSEVorZpT8kmLNVaZzeEQyWnPBA6WQRkp7pX3R3RScaEiJnT",
  "key44": "3VHPGLoVDZLhFgknv5gKw4sV92FpwaePnBRsTi8K11P5a4pewGcvzUjNVDFm2Hh8j3SJ9fE1a98xUvfdGSyStGBP",
  "key45": "3XC89uB6XuUvGnpWs3Rui3FU16rE8cqZjWyYZnQ3hSH1Hep8jyMaajxLuRFopbAXAcuSeeyS3276BEBwRDXa2rfr",
  "key46": "27rUcNHgHm5CuQzzCtyi5XDFBrNNmRcWTpBAHygK5EC8cEMWoPMPpLJ4ztaMthyZ2Yejiv8xNgx7Y7waQUKG9XYu",
  "key47": "nX37gyF1EoY51BR4sbboy1pQNW3E6Wo4KeaJfAzbk6dWe4FvVkVAaLwCbef9oju2gkxmQ1DpdjVj8aCPuFDQ8SP"
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
