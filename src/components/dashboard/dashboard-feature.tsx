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
    "2GBoWhxCFQ2MRgD3VZ1STshkDKPJ25QhkL5uFs1TGaQHhLQr4FRcZ1naBS1VYoarqBWGiCpxcGBPxdSbKLFeFC3f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vyXfW4v1JThEHMgWLXkrBAovFcQgXhj9PDHLQM1FrqSsTv9dairadbpmxZsDZUe4BmUnHfcKZ1MsLKD5HDXLVqC",
  "key1": "2jffRY5NxLf1KujyjpcZtjEGRWLSQ2zqfg6bdGkmJ5XAie5pwuXg4Rc5VWazfbkQ9Um28zM8ioumej9muU8FaAD8",
  "key2": "2G1R5Fz5773dYAAtNMN44DNEizfYxzb6w9qgsvuarnHPZ82qvHyj9aYWbGLyyh1UCsfC5Xs6qcPFsUAaZKUDvKqM",
  "key3": "5H8EHy86gQ4o9v4uAejw7Wp6Y4UBTd984Yycvozr2fXDK8vyVkjg26yZ8vicz478cr9nkGvqyH35Rxoc2GXsG117",
  "key4": "3Fknh8fG7bexjCVzvyuGM1oRrhVuefnQnt9JxsJJbJtVZVS2Uz4aW3bswbGKMMnRQVp64NoVkTCwAKAiNoy3cTPN",
  "key5": "5tMoioFJ86bqGzTzJt1KJUwwHYKyefapa37EmrTR3ZPEnwG8oL8rEXp8k867GQYBaKWqCbmUpQAZzNr56zBSsUQz",
  "key6": "5Ab4wRX7qwus1KFCMsGuNJyHbaKhMxniQVKxyCnoo7srKCRuPeoBhLq3yPbjcXmnxKRxE2MZhmmsxZaZRPvpHM45",
  "key7": "2W936HchYjQAaNxzLem9ed8vBvRDDHFWmdf8sZZhFXhi1CcCVgwgvtYGnE2aiaWK7sGd2oxyegc55pcRZtB7bxp",
  "key8": "4dQoyErmGAroroHct8yQBoEBX6YFKjuKh9vcc8ASFeCBmF6S9iVNvCpFHrSCP6hHrNBeo9j4UoG6tL21hAYFfa4s",
  "key9": "nML9kKAU7T7DEqQMyBAWV5HYdXp22GEt4qiWtCBCRDDY9zPp4rvHeNjoEzXqSXfzf1oN6XGwqaqytrsH3hQxjJE",
  "key10": "AptZeQuC6kRTA89JWicf4hWb3NA96iW55xf37aNBgivMaRqjZAi21inEDgbyxSREqvh6p22uDpKt3NUrPVyw3XA",
  "key11": "3iTgKQxe25XVf4pMBujYV1t18RhoBDCXf3LaAirttVsxCxxd9gEBFLyWoBStozTZqme1fDeCqssF4MGV9NGe4UMX",
  "key12": "D7hqcANeT2DYaxuZAB41c7i4hAqd7Chm1VV5PUq8eMibq6nenbHaZ62jwPenNh2jk2B1Ex8MG3ugyDfVADpRdqh",
  "key13": "iKm1toYyboMfhV74qFWocD4i5Z9HqLa8fTrVWtRatdpcJYTvLNjvHfZ7vk8Hd7RDJgKcuzp2LX9zqLXpEfGn2Ni",
  "key14": "3LAsq9yAzgx9o2RFDegpZax38nbPRoSLCzSMxFoabfXRK8sFhPx4xbbKxZBWZbw7YX8qRXxuUGfZ33r18QDG876o",
  "key15": "ViVH4Gx8mD5MwshqzRHrQHJcvr2mnHDMiKwwDf4HMfDZ57JiW16SLiRRmjhLgEAgxv5qi8QXYSW7s932pZzP1TZ",
  "key16": "2MFMc7CyKj45mnfUB1ouK7Mrqiaa7KVPRvaJmVuRjfdkoY3w788Lf6Mhn71PXeFxhVBXADYcz4Lg8qrx4EXqYCuQ",
  "key17": "2UBZcvNb2Ph2xsk1D4NrHPaeoDWN6vHsGTexvJ1Th88MGDXukZiiFc5AH7umcFLAJw7vN2kuThUricCUqY4ny44z",
  "key18": "366XSxwoURJeKesV5eMjSQ67EAx2CZxSx1waSg9TFtZCxdeX4cgCqyrHAK6K1oX8zBZPLhK1R8rNC8qdYzurwY1q",
  "key19": "4nkcsiUEQuhtnsTw74QJXMhqrVVrmxEWYZ1aH5pzPj5g2kyWRdpkSmCQ1uQhSJoJngfcDRNia4TCGc433bRP34C3",
  "key20": "US4cYDAoPWUZBXhNhueDQQt8LhbXVZgQbPrXpyYi974tVJp7j9nfsHH84MBkCr23yX6hTRniATmYeFc9LjYYf3f",
  "key21": "2jxngtEYQHtRPjPT2W5CeFWiXaywHd79d7GcZUTTga8J9UQ6vvRk7GBfgCgjJTAviPhqmHWXWjDR44y72D814Hnz",
  "key22": "42kHZo87q6esnjHYi8EhWMXgtwTnyaS9Yj9pH8ekh7XrVgrs8CuVPkojSQx5A8kUnXzoLcXEWkKKu3yNCs8rFTBD",
  "key23": "5USvahmWopfmZcYnLJg3YzVDda8XmDkAyApiyPj78TLhHuE6ZViiXFoGHbKQ4Ttibtbh4mMEYs1iB25ppyk4yws3",
  "key24": "26YRm215CXPd493k1kBiqmmDnwBLzF8r43iW6ZkML1j7zoJuAaUZgAit4DUvEaPmEGJtt57Y2BRw4jH77CBeD74j",
  "key25": "2jpYfCvWjnhPDQzbFZC8fLpPWGuTfuKgLGShppqQ8Qv1zU5YhHj9x8bst8iwQ85D49hXMgMgNzB5dG1UFCUrKCse",
  "key26": "3CNqCJ6DjZouyR8bcMoXCozyYxTyjpnjZreqjZFYdEV4WX5hDAMTRzh88qs9uBGcwUCtGFZb7sVqZnfBcvr8e7nN",
  "key27": "3FyHkTRbAT2qAXuKE4d3WcMESSYS8Yfr8gVh6kgHB3xDp32wofmN93opXJ1rU9ybjm8DQMsBaarNrjGydCsFEgWv",
  "key28": "65D7r4sR52ZkV466ppDJ8SY8zspckG8JZnndvZGq1qaHnT14PfZPLLyNXCBKoouXMBgCDJZVJj17vXxUqfQbWVdE",
  "key29": "2piAvfPbiUhdZX6QZW8sycHsmsAL2VtfSHtsuyeP4UnKv4SVn6uLbipe7pNwLiRxqbR3w61pRc36rmNL9pZ3EJ34",
  "key30": "5y1fynUHui1RyK27AGxER1MMqiCQJ59tHbrcYmUDSTQsbqtTHPXzm4P2TbUeUnVWp3L5cYx8XHYZU9fAL9JRTHz5",
  "key31": "519pCfLHP38MCz12kUZDwMRAFg4AgkkMYt7hAcF3ikVkaxrgvrVZE9CySNeaoZF4XBqLXFdnGf4GFXUrTyxxc1ha",
  "key32": "2hCpPXQQSkGv3KC3BQa8xxtRHES5XtnDFVt5Wx4wWbuJpNXgC2YW2nYveaBDjEL97d7rsemTzE2V3mScrc7uhd3d",
  "key33": "5wDLGXhYDNHxWvikq4x8F2NwCebF3RHYtd7XiziRc7R3sZqQ6G9moZqzHeDfp1eQNvzHVENYJCUZ9AvR17u2yoCY",
  "key34": "5tXNMfN8jGLoy7nPw67FAti9Ey249Rt6S99Axs9btaeWkeo2pzxgeD3jiXVjWFsVTaCNU85CMuSrUWJQKDX3xXgt",
  "key35": "32th9D4YQigsttB4Q2SnLtiioRgGyFDxnNveSW6wywTdvQP3BdKtMbKdoCyz3Y1V3rnhxKGQCU2LfEbwU4gGggdE",
  "key36": "3ehVeiuGgJGQdMuRaURtn6XMq1xBehx1k9FKzxkyiojgGfh6MqkTThBkjkkm6ZysVM7CuTN2nw6f3cvjKPMjsDNj",
  "key37": "3S9ya9K3rhB3b6ye7qfuiSXUnB8X8QPYetXSnywos7efn6hwW7d4HEnPZb3RPLNbwxbNayBSDEnPmznwg4CGAKCx",
  "key38": "4xHNy2qt3mfB7R6YAEGYXHh8Q7WKu8k1mWFqW6bVomNetLkrLGba4FmYuFAPoyA8BDT5rFuFc3UhPZem5FZtJMg1",
  "key39": "dC5ZYkgsLy2Fj3jJNprwPkswwmPCB7hze2sXCYc9KuEKaqe9xykWQG6Jhap4DLMiW1sgt2G3F3jFkLMs414ETPq",
  "key40": "4RbU7sRf4yxBvfE4Ui5vd8gZTcDG8rQLx7HEu5iE2B4vAKzUY1n1LDEJmEorVyQkCzhu8o5PgeBkZXdg1SwHnzN",
  "key41": "3JcWQkQWVBz9PEB59YFbU2pMGV4yEGgamCd3H1Ut6PP7uiBVBP5eeNKFhVz3nYaCXKP6bcEV5PSgbDA827gApSv2",
  "key42": "4PZ9qkHRtY3SS91tcbkLWR9Q9BVhQqtjZKzRSTun5fst3wzyym7gr6FEi6a4kDxboU4RsjCxAoB7PJkXugaSnMt1",
  "key43": "4Vgdm4vZgkfnBYtRoSs3KYfRez76Rkd2RMiQCQgrx3HBpWvVdEFe8RzCGvp3vbNMr2kSsCVUiSNJV9cP2pySdX2L"
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
