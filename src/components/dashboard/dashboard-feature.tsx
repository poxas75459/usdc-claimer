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
    "2DNPcV1duwfETMRo4zERrUEH53Zy5mZvZJAtZxrTJdfELoJVhrnsmQUpkBsxJuRvKzeVsL5oKVbmC4KmhCNDKDhi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GTX95zyJFSL71QbHP6v6GWckU4XmhdfwFDQSCs8S12WQZKjpTFuqs4k4VkyeFX2YXsRpQT1grEYCk98TXYATbR3",
  "key1": "5NMs2imJGro6YL7XUoQ9h7Bg9Wwh3VgBC8gGedJa4fbnyuhKB7KyzoxKbwSUA5fFzknRtjLGsD5LudrwaVFjJRFw",
  "key2": "4nomLu4uWimSeERUao2GPnbUvoNNvYKAHfUYUBoU5LzP51jAGxijMyuPFwyWn5M4mzAm7u7KADsSZAkNAknsrUkC",
  "key3": "3WwPjJ4DSCDw392aQa4RmSHWxPkZ34MnZLZXmdUX4B8UQZcqgZikjyzKaQ79WfukNCrsapa2tu9VzA7xzsJxPdTm",
  "key4": "5cPvirnuPsM2s1ssJsU9P24SSY2KMe8UkW4kWvWmnx7Bc9ng9WWo82GdqTsZu4yy1Xdox4Adb6ypAZq9yEqibwLH",
  "key5": "5L865caGsfae6zk9KkQko18sqWdEEtwjE1sSesKwFyiB8HSJXTC3ADyDfRcsZV8wLfNkBeKUnruq1V2HZdzw4p1H",
  "key6": "5LLLCPQdVCjoQaAATUbCLcBbHHhsj2MQQZsqGPuj1UN7to78vRqDSt7QJgkx2AtYpNzbXBsvwa9eaSdiBE9JsE5w",
  "key7": "24ARBwfL1voPqsNWAtLKdbe2jUHjVVNRzH5rkXXyEWiqYmXvSMFEXMtuXGNBa3kaFr1z6WT6F6HWmUu4hE4QdwBH",
  "key8": "3PzPES49VPf7P4LkVwbwxjoS6yQAci6oS9ANwHKeK3tLTsMB2tsAHZLaQopq6zqggQFMMUL7ogCmeBd3tVVwYbb5",
  "key9": "5AUhWPtdRkVL9qyCXqkdazAEUxyJsm5etZvWazj8iaYJDkmuahiaBxATfD8Gf5YFKWnJLhESLPpAogHjLA3Tv5Yx",
  "key10": "3HG8ahT1j5oChjTjXGmaxVekAX7otrN133UmEU2Jsz7mSTssAj23vE3iuCqgoozp2y6UrRsAdshRScqWbuibihH3",
  "key11": "5bgAtWAvJSK1qGsgmpZ4xE7J9wGtk1osZzw7AMGZ2xDJU8DxZNRrR3iDJrFEcGhG9XhVLk7Ubn38FpAGcAz1hGJk",
  "key12": "3nxQJzYkAtevo6J1Gh1iCo1pDx5g98Z4H5iDctXBzr5HPB6naDuc8ae5qVau8mFhrCsB6cffZbdHSB5XZ1rE23E1",
  "key13": "5b91kQSRo12pAtQAiMRcK5niD7zpfXVnuJxP28Q4NQQVA5Qgtpi2kUZVQy3PEPWXbhqboZpvozfhHX3cyFN6UtKV",
  "key14": "5MoVKcjw8jGakxe5FTd5c42EaME4GhQuUeu6aqT6UrzpuFhJkUwbDkAvTYz4jroSBDxjrH6sRnyDben4qPu3WtGY",
  "key15": "iGLGbdAXmKjgjJhHw8RGrTtLjwYX1xBee9SZnxKm1URN6NBjG59hwuZPt4s8MKCudywGwnAXCWTDvBbpFUpzi5d",
  "key16": "1v2TGZRXZYL9bDBvPMHTrQ4zMMCD7CEY3ixgzcbSR5jFjACcuSkUBLMf3Zru92qxp8sYN8dN46FvRVR2jn2KLpJ",
  "key17": "3k9neVoUnsGNVoLLhmw6ywPp2PDqYoUJx2T1iXBpZJpovb1R7wz2vGSfWSD6ofHTxKv48xMR91QZ6iLk5qHpBUKi",
  "key18": "Vo9iu4s2ymaYG5KEhxFPNnQYnpEpsT62EXKMEbfbjte8nvmZnc7m5fdqQxBaYH9cbFDAL1R1pYgjM8koUtUGyXR",
  "key19": "2id9dbFwBgY6vbwWWYt8JP93AoAwvdGko2EZQm4a9ksvyS7YAq9XeZSMmCnePg2Lw6YmU8QnCW9kWLseL8pb2d3",
  "key20": "26Ysts1duU8BTY2XNh35mmt5pN61YhuiMxQGUC9JwLv6gMvydtiYM21bofWT37sUKUZEV9y9HMMCLKgtvwEgAU6w",
  "key21": "2dFLsiqXDFB4sLiovxKvC9cx9bCej3dgmVHjVRMAg99aKqpYpjWLRWbhjhDGbnCPJNqGChrqCeHXZiMzwBqW73Uj",
  "key22": "5MkjzSucCMraCMoJzYHBKwoC1UqhgbTCqam89UmnnaaLM8VGPeJ81MBhXKxux9RHtKJuvjZpRgrtaNQZpMgQxGcf",
  "key23": "2ybxWZJErL5LsPL2V1QV99ecTfJaH8Kw4etmRawSEcd9d2hdfgzCcJk93sywiY1wu5MvqY7zynHPbEAw2ciP1Qx5",
  "key24": "4b3gLaWCcNatKAmLkGvEEbzZxM3FNbWhQv6DBhpj55iv9rGFZUExCRUwkMTiqCaXXHX7UvVneXCKbSWGnTQJwFfV",
  "key25": "bHUUbkKxFcnsTP2591BeX6RNzBDFn62Lejghf57y9pcqFgM5f3iSEByAcUctD577wyVqap7n7uBDaQjU4vKtTv4",
  "key26": "3wNsuASosToQwc5rVLNq3irfMQttyQaDmAdTbpPTfSRtzg6zpda3RsfxE5A9wGf6BETeqLgGqZpSfWkZ34ZnL924",
  "key27": "4mP8xUZTsnQ9UVnaMyuzyPCH1MxskXWpA62FWv1eELzCvtZejrXF6cHFisfVp9TMj9w4V7r6h2e6qEHcCBvRko8a",
  "key28": "Vbn1MPiVsFE2rqYzX3WYeDkAz438KAiAMq8YCnKKX18xtfsaVdEzk8rYu9eV1SykEnhHY3REWtDSNdEGsR8B5AC",
  "key29": "5cHhMSuEmkUodqDAKPb9sjaAsQUP7gRN5tPhV3NFVKuUVz5JkByNvqTT88KZVFUiDBHxzt5LCHLca29JFm3oggXw",
  "key30": "KjnMKLfuHqyUD6qUgtLC19uAeXvzBzRq2jGRRzYMmARWDvEc8xd3Mm9wJdMhgttDvWYtLwub6FeceVajTekCiYi",
  "key31": "2UmPaG4ifTQ5kW9CuV9LWR6L3a7R3Wdd59SBvhBQNR8P3QGAAc46kuo39yuTzyiP3SqnGMu56w64Hd6S8AVM2UYH",
  "key32": "5dbnGT9kWJHSuDvSzimP97UPHzxwQnCkyXEKets1NdTm57m9fkdSUEmr4yL1DF7SFvuGv5dSTsZ8Sh3F3ZYFQRRw",
  "key33": "47WK9oPHSv49kCHhbo9d7hbeFVkdhrfe9w8d64BcFnmn5JPHr5gBe3TsHMkD8YhaR2Uyr5u7pR79TRX7YHAt7dxv",
  "key34": "4a9KwnFoi74NBgdoTYkBnvVdL46rCw7MDi2Gx1WUrS8RREWwihDRiE3KCQNEMxsqfeJoyjC337YyBhnKvZ8HPxbT"
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
