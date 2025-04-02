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
    "4FjKz67b8jyPRXip9ohLVQpHbiqCs14HM5fUFcXsLqSsGhn22B9yqhvVzJFYpK9mGz3JJFcP6dE7QdNwjzHCCFPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L4kdcQRNfoRJHP33bpXcsRH9dCRYVujkvJvdinTF7Mzx6Suibufz3F6937xsV9nbEgaYcdiSuUZkd9QiP525a8T",
  "key1": "4jTHWxJRNQX4nF29FmaKWPWtT2Nc6cfxuG6vauaYG4pyNvmGmxC27LFmfZKwVKeE24uYh4H7rT4oudcrxHe78r79",
  "key2": "4WZaRAsU99Ywyy1aYFBcam1iBXWksQ7KdUGuoG45LinaT45PkA3FXSNLGnx37XLuekqgK2bH3e1HnCsbqKtHpFkp",
  "key3": "4GvXz6wReKcrtXnCbcd4DMhj4Qhec3o9UjPeTPbtE9seUuhP6eoWnGrDfaaqCYDyimGuN2yUkEpsvMLDCFdj6NG",
  "key4": "3gPTs2nF6kws7uG4VKfGipuVX3hFd32w14SUdo1RicWFWF1EN2neNLeArF9nPuYuXVaorGXowzBcgSEdMA6fzcaj",
  "key5": "4PYFjrM6ZN4KxiZLMtTqe4rvNmGPZygJxiE6Vf7fkx8GP5oDYWvLK2jQH8q3MVqevr31k7kz3EWTqdURpuocBJjn",
  "key6": "2X2aJXyhn2xEGTArMF4CBPTY2Bkpa5zggAUMJxPpogiEgupvkMMo9WBNgNvZSYWmwJkr6gUDF8JYKmEyGGaFmuoD",
  "key7": "2Gyqpp87DzPnEcUUSMKHyXk41pkwNe3x8bHpBkPAEMXzjXL1Y8jf7AgTYwDtyeNbZNbz3TdL6WmpoNpjNQ4a4KPo",
  "key8": "f33FeeinoykHbHWdRwru7LA4A7VxMXrS7m3gzU6VDsDmvAmnV1wve5oMeTjnZNr5TuaqposhJJzFg1kuHCtyP4b",
  "key9": "126MKWvRVX2m6uwedGJio8Yk8svmuqgqGMfxTHzH3776gAm1UfYGbwynvtFMzDEZppR4Fi8nNaN3mFTjfgjCWD18",
  "key10": "y2A8bGLw8z9p134rz6u7M3VbXc3j4BaDURAPLBuQyyN9WA9ceeYwzWWBsv54tKg2kBCMzLAa5YGTPNy1boA8qxd",
  "key11": "kFwNn9ZUjTMAQ7UzJi4TwBzvTH3jVUNK4M4pFq8DJNgeGCTKN42WhhPHzCndyRoFtF8MVSMPPZ3tkxcYKVaZXwm",
  "key12": "5UKdRevWFR296VB7xUZwaSt3vh1RvnJ1UnsZDkohWD7LyVZbPszTXmjzVmTEACpaABRNPDxJwuiDCBRQ5gv7o79S",
  "key13": "SYZqHpeghXVaB5MN98XHebqwr311UaTHAbcrMwM3LsC7cP4N9ScHCkx2McadVEevN7Mq1RmJ8y1kiiffbZG34Fy",
  "key14": "2PtpJvQhjRiK1iwfubh4UzQgvxrmKwmXogKMwh9UAWNgxNgip3JkcP4SsRtgdEJcQQbb1UiMdZUZoM9ofLNJAdXe",
  "key15": "5zuttmMyd7X77iVqkcwdaMaqTrATBRs7EE8YnEbmQ7PGCYo4SgkQLN4UNuGgypForqMUNmT3SaHnpz3weyjo5gZd",
  "key16": "3id6RvrqpkCu2WfQKAFhgmWvUhfQPuB8TBbaeX1HJfKJXPD7eVtJq5ksquK9QHd7zoM2zS6ck8UM4DjTj9oi5sJD",
  "key17": "4UddpRc8wtjsVtMhVvU8C7GiJfShjBLwtDEBYD5a4PgGSt58nU4r9RbVpBEGWKiAqSFB3MoDg3v7RCACxDBtxmQF",
  "key18": "4McLJ8dk3Su4LcD3vCXnPtvUUX7mmmpXoPHT72eRK3jCxA8AnMBjSBTWpTnHDdrHuKcdiW8A9YRGknYG9GEQraNU",
  "key19": "383H77xQjc19ghKjLDZneh4CwuS4GXJ5KYcqLdAjszCjcrQ1hjeM6rRa3FaEvQuCYZonktniqdb8k4tAuYFGdvou",
  "key20": "4dhACN3rt2SrN21qJV4easAa4m8DTgQUbYpxV7JAECzxP8KaNbQXrvffgCWjPX1bpcGqS8kDhkTEEkkY4igxYPZg",
  "key21": "5KqYjn5P7xTMVGEtzcmFbW4ahvGbak4UDS8rqoxnLtbkkHPJ9uneCnXqngHEJFvZFVpAgLwo6TnYkJy1be4ixCTR",
  "key22": "3nHfQ3ntSbMdQbmd49ypj3uQAoEFNBewJbxc2NXCxAMTZuciiP7kx3rzCohRc9XbjSzdnmtqKBLvkZUqg9LUJom8",
  "key23": "3A9cNRTfyjgT4gdsL38zma8Zog7dLYxLGduNB7khqYTR9DU26eYezW4ub4NMqv6PDQsAYzovbH146dPjL5t65VWb",
  "key24": "4HmC3uCh8Uz9W6vPnpTfF6NgtBaxa6pEuv4XsRVmYTJTcYzxN4pKpLiXKfmCPJP5VzYLvPVPvBPjQcdMK5E932Zf",
  "key25": "3BofWJAoEYS4L4ASmpGsCy4zgeoJkVpYzpZS1zqSNY5LdjNjJr2kASK26RTkcDn7Y7CtThyxZAeTsA9qVDDUSLCQ",
  "key26": "4bi9o8qJzJmeAX8LbSfevwWweKtb3WFDAGcc8KPcsjKC4QjUzTn3vmYJg1pfFwqcufU2yup16njsVooC9BJ9Tec9",
  "key27": "3m9Tdeqq2XXG76J1T7Ago1xz3U8xt9bbmLtXxLC2tCcGHnzz7yLwMNobCDWnDeLJs6Dc75FoxxvQY2ryv6zxKcH1",
  "key28": "2pv7RHz9wcRtxm77Jv3m11BGqYFMTCixRrMcmTUMtK1KeGFEYcd81aEPhEnmX3rrHbsUY78DNGEzHjhHJAjF4VCu",
  "key29": "2o9xHbu8CfcE2Wpav8J2xFAvSvBVkXxcVntqiD5X8FeHxGqV9TawwPBn7QhahNJi7jQ6GCztuTXHoLAD87y5TyG3",
  "key30": "BR7uHxr2R2DYhqF2DrYKYWrKv2EXWtsXHc2wmdW4KcBkH8zs6YXpdSumLcvEUnW8MvieRk1GpWX22SrXwTrv3XF",
  "key31": "4zwjzYW2oPVjTYnUnHZ6XWWWABfmJBvYdaduqisDtGQwpzu9oUNyLjdCZu1322fabY9ozVDWFWMDVXf8JzUnzgtc",
  "key32": "4mZDjR6HvL69s85szGd3rsne7TRqhKMUMnS8xMUxqs3Ts8qJdu49eK2CJVw39nbVT8LP8c8xPS4khZA2asgmMXRT",
  "key33": "3uKEsJFcSVgfv3vChmyaR9ZR9N1AAzNocwXLT4LDijUsY7huzYxp6B2hfsz9jUKpJfQhjvshAZtVtQwzSHSQ6phy",
  "key34": "87ReXjbpHdwWyeVAk3sgPnrYndikSgfa2wruuUBv236Rue1gNyoDj4VqKD1dnEDzBTnBFC5psyVCur439jtmzU1",
  "key35": "UBdwnWE6YxK8vLTBr9jiHu4TzCNqR598LzfmnDWpLqt4EjVRumnZpuTT6RDe7fMnwd73AjhAgZutQeXU5VyK2ZR",
  "key36": "5NanY12TPVAj5JsAfZffKpQYQtbbMk9BSg7jkL8ne2DyPC9wTnyhywBekyCJGwAnYF9FtSBcMw9Ekh4frAcVw9qN",
  "key37": "2tENmLTYFMs7rF3pSHe5ZeybwBsGPDqC9N3CaT1tdeY2z2tApLM9MyeRMSLf2rwNTd1hHwzMAxsC2KhTgq2CTMnB",
  "key38": "2rDoi5u2VNmHwehBoqJbipBLANEzFNk5ga6qr6rBC8n38dgaMwFycG9ojZ2bAwYUbj8cGDYUyjruqPkKurZP8UT5"
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
