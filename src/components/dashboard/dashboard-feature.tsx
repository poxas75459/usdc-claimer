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
    "dSgJnCNubWpnDyoCoXGQoBTfoYX2GrFHTLQPVvf47CQxRpZRD8AxJP2vrKoKor1uWN32heZcknFGtpdtgMwwdb3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y48ibNAdPvugogFcnbTBPGVqDeCcwLrfbgPSwRfCS71PtH9zbSnavKh2bLojZRhpjLBFQUuNgSkwLQ7Z4eJH2d8",
  "key1": "3E9wDoSae59ABzMsQH6Gho3dEcGeZb4R6QYYem4rbwecjq4LfSd1ohECW3XHQCgxir9fp3aHBSwkqcX9Rs66v8hV",
  "key2": "SMbusnqy5Y9utEsyoxFEkJYJFZGjGKiRyhGPWPxFwpVcbXt9xsVAJE3sRFa6NFS8kt9KvMzoahu3F4rbsbxfBYb",
  "key3": "4tpozL51dmfEd8U9ua1V7HJG7t3JXEzKMrCSnJDhsZA2rn57tjMMeKNTJRmDugMjozr9EHBbYyLWQSsWYrJuqifG",
  "key4": "2uVfnCQEpbz2NaKWd4m9FYsaY96Y5R968duLNhBQgwj3RUD14hj2nfDDtcTCkMD5TR49CoDZGanTLDkGjaBQEWkF",
  "key5": "2f1pRadWoCTsdzJadazt54XNGxqfwcriYGHeHc2bkXD6TtWPUzxV1FYgfHDx2SebBzJbQN7QqWKwprrnHA2E2j3n",
  "key6": "5oygmM5JDk1fZfATrcxq7d31n8FH8dCYN77eicyKd7S6gRm4SPBEob3j7SrmCJZWMjhwGY1MkfJqVgRF8o8Vwbjz",
  "key7": "QabYyEhQv59NBvbRddFbjbb1pnSW4VaPBHk53wc2j3aPHekd31D74d4x6Wfqr51EsRYE3DUjxfjhfDn6KP4HV3S",
  "key8": "29Vmpf3qYPPm5HL37SRcNsc4vamsMN9iejY3SoJVR5ppFfaves1aDUoLa4qih79tYc7NPyqKq2cGyJsYuT6GSZWD",
  "key9": "3Ms8yzdDG7NmXTAvSa9wjtoPe7wcGnYJN5sfYijeTjeuB5kmgWr5WkTUSLuUJk12eTupFkEgNLVNuzShu9gFEZsD",
  "key10": "2HmAADgBSmJUSUp57gZ3W3DZ41vxmAMvMPUzVBLhMPxYoHhwW2aiR1vFw7UDyuzeWFhEBjAtwU5MtpjaS1PFQ3Y3",
  "key11": "5jNVnagZ8yKHwLxgDtzCBeGWYA1JRGnHS6PQzYr3q6UBSGJ5iH1xhkfkJs9dj7FLk5UsCv2EuH5ZZ2jY4rX2ooB1",
  "key12": "5tvrYAvSm33WgdoNF4xYHHpSjiZpzTdpHMLNKBWs5rUFdvLq2rPeBofxdW7YmyJCAE2AWEbFy3eBcTbriXJhNY7r",
  "key13": "2s8RccJ9Q7DEkBUz2QGSJNU5X6WTFB1ynUDEtmJKCR1rtajJiz8F3GdK77KHCStjx1HqZCMJbx7T2cMh16nvpa4e",
  "key14": "MRfPN32Eraevc2RWNuHqqT5nip89KCERj6zPcXhws2cRfAduAjHVBgy2SU7q3hjMxjDmN4by9n9D3rNEyZdkA5Y",
  "key15": "3m5gBz9KuhNeDUSvR94phHMJZh7zmXzbEwefTuAPnuo6syD4qJiG8bM3zZZVBaZA2MuVeNJnR5m41E6vqcWgFaa7",
  "key16": "3wMiQu8ALfttaDWHyfKpsyNiZdMHmY7gbudvP7F1R3Zka8dcno4Ld7C3vWcQczkCeieEz4MJ89ZRSL68m5wtVg6S",
  "key17": "24bCZo5p1jfFLHwtM1nQaDBtYDhE9GUihFHBkHyvUGUhkGZUsqp5M8mGVGkMuTxYnJrB4u4MEoFNC5jR6hBMasZJ",
  "key18": "5hWS33RKZj9mL7uSKNQHsEebeVzPfgAtbzJMG71aBg4ZQ6Jrjj2VkpP3nVxTx7WRq5AVz8xaEFVDhakzC5DtTwsB",
  "key19": "Rg2C83AP1FCZetW4oSgNM3eGBzqEc8eJU1RqF9rtAhTwj6gwpZbxbQ6HUMmqnk7Qi7v9xFu6qovJtRQFz6CBgFp",
  "key20": "5jfJzSz337RgPSmFhVAzsw5FsiZeLPanqnbjcQzDsum4T6VeGbnKdhZcKcMzCc4EKC6v5dwHq6VoGkeXsudUAe7L",
  "key21": "2xSr8sRWcN9S3GYQR68r3xUFydYs9yy2Ypi9bPsG23ZWQPEFKFxyqcBvS2mEnyGUvqG1xrajnoanfwnHfE7ZBStU",
  "key22": "3PZPd4uG8Z7Hdum5aQeiPDboLAnoTN3hC6ajoyjDbmNW9iTnSFPDHsa2aNzjqnabgsqPQfCED4g6st31YPb34qUo",
  "key23": "4F3epCzuqeqDJHWKvqxcgWwa5mXzYCxAmy2eeR4G5G6ZU1iFwNYNbuYALEp3ZtgtyCiMCYMEA1oWwbvRuU3iWzC5",
  "key24": "5vCgaJbyrGry1GkBbyFQvw8V3YRqpD3i6U26teP9LRnoN1LuWKX3Y1XA4mXL3Ae31ix52oRNupKZxGMac6ZxNgJn",
  "key25": "5ZKj8Nm1Jnn16G7pdV7QnAoaNJHyc5NkKLSAvt6ZH4Lh4JTLtaGz2P671A17XgMPv4zG3RLbhJTMVYMZhLTcdi8u",
  "key26": "3dEA46J49AWb17SH8Cy1RG4upHk8M3zU9eunLCU6e7zKLMYBSjySeDjbESmuNCAQt3LuvidwCYn8nMMcdp9Kuvg4",
  "key27": "3STo9MtJgB11EZubReBgLuPvfjAaKia3v6r7ARU96weVmv7ZBwthYKTxEFuBbRvno7oSUUVG3dwSjFPckT73u5oM",
  "key28": "5WpwJbj3W4kQ1FioUWiJ3TxgBJ1U6RDFVyczHWFTX4VC22RjXK9nqYaBDxo2jsSZVzXDJPa6E4xcgULCHPq1Nza5",
  "key29": "3uP3YEdwvLp2xn225M4dedM2Jp5fFrRxPTsPQ8Mp9jGGXG9kmuRoapStKNcT3PgmMEjVEqvfaqLt5HfvCbKgWqPm",
  "key30": "3XJbAxHdvuUqS6BEsjqs3YSViP45rGM1S7NSqp9KpJLusrqZTbJvxc4yWxUPVdMgYPY97kJnXRRUkFH3UCyHF4BQ",
  "key31": "MuxoQum546p9Uwwg1DirvN1FrF3rcF2K1mPQntMN2DN9hzvmKEUfGX3X5K7s5oqCuWys9U49iXLqWUyDm8tAfq7",
  "key32": "M6aRyB9uAuv3SnTLh7etfXY4rupZ3T7i7hSShqyfigY39vfsRq7EbonQUPn7D8MZR8AkZPChRy7W87RDgZXGWjf",
  "key33": "3qZeJoGo4dzjjHtnwVgQ5KYN298fYKChtkfW5Q2UaQNkiMrg25miexSfUkcCDcnGg5Pre7nrxeFd9UAzYUk4wuau"
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
