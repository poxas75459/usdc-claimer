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
    "19zyExAmMmntVKHwqpuK2D9wRULtePSg53FZsd3sPjYSouMapCcuuCacC3XBZTfj1txFCkkreVrc14dnpqE6DEd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5k5VKjZC2T1CTMoixco7jkaccPmqyCnRSdtyj3GZtQX5t3xkgt6vPbVsNwH3SLdRJKQBK8JoYLoDd4obiC8hXie7",
  "key1": "2KddqFxMQXCAxnYHKPH1qNpnya5ou4wvN4VJPyEk9ayGjYk1DZEkDdyUe5j68iGBYvefX8obUWYRQMmsZ7USMB2M",
  "key2": "4XASfhiwX6AwaiFPHW51yiioqovNN8eNTfjnRkofRgB1LewNX15zsmc9YVEDkAJoiqNtZDBUbqXhokDyoz6xFDuN",
  "key3": "5eqR1QH6SFHY7qmm2CZ3rY5JfvSLwUPeLNCMTEsKT6gDFDGeXkhwAmDecjVTnUqLHsRUfCBfgkXFYUJAejsUek52",
  "key4": "2f7fdYv2Rj7RoeZAC7jTE2GKWJagAn1c93adZ6W6Av6MXKBjQN7dgkCPoGH3UHhQefBeRuco1onkQV54n1JKbaLU",
  "key5": "126SvCdpBJArjefa9zHgCmJu4ctqVKrJKCUq2gJyhQ1HcVLF99gGfTGav3ZRE2PN5YTpYi739ryPztrZizSyKvb3",
  "key6": "2puJx14ibwvL4e4bu1d1qkBtLw7NJNbfaiwURnp7oZ1zzhXWMSS5wMMASi6Xcz1eaWFy3rmCCLhoV6sqeW7itUYX",
  "key7": "GHxxGnikxp5LoGGEfTR2uiz31595wP3WsjiNMHrZuMkoCnQJXtKVf72Jv85voQyJjCsNVm78EnFNDuZmLemouwf",
  "key8": "53mdBEWgo3m9JntmjcrDYUV62LpVquhzob4ffQVmctC6gJkaYe285mDHqNUdUxhTyjYd1HxVe5rPw1Y9Ac9Ao2kk",
  "key9": "3gJxWRofBfYcN6SrhomDt1aURCtxJsfgVLdpCxocZrGWVZF3DWS4codEq7gWeVwyASf5j4ifpvnzjuHHtT44rTzi",
  "key10": "2iXeCkbRsKdt5jLAmyJmLZFqvhRvsBnYtxQZzcEZ7PGc6rMv2NkK33B9797TtdNzE1NL5faRGaXdRLAzXh2FdoeZ",
  "key11": "2PBYD6ky6G3rtZUFRi5y14pYCUhFKDELst3oDY8uynyKced8nCHREdnCQduzrZA3NeggjAnKdQef2G426AY4N1Ap",
  "key12": "2A8kiU9DwYbxjGaVB6xXNUvrvi5gxvtZXtFYP8ThfAgCML3MNMUMfxCNydCCJxY4Kmm1Fy7bpuqWDrMCdYonz7b5",
  "key13": "iTatLJy6wN9fmMXx9b4AsAJkrLPbZJRTAfLMNEHCwWvVQ2mqBSWxdE5Vrx8CLCX4oUCFzwJNQWEn5id9Yk8yR1N",
  "key14": "3PHTJXArRyJjkVaBwS9wWdLy9VtvsRQZnKMs4hWnPqXYf1xomo1TKmL6R8PrwwEAAMpY3gZ1y6PKwt2kAy2Pk2cL",
  "key15": "R5UbaaiYjTQfKZkiBuStXJeDNhC5D3CtAaFszR3mrG4u4jvCXffTD1RWrZHkLKzNg2xVaRgzyZwLMSeiHc7aKMe",
  "key16": "4HBE9z7fYhYxDJCag5GcgPYV34bBU2DJ3UTTShFsDGurRWGDB7Zn9HNHqa2tajPE7vJhRqBP75R2y9FU2mXbEefS",
  "key17": "5sEaPRQQdDW3RkZUziwXskiLh8VSMcCqdHEWLrrJvZdbxQvx4hY1cSUyP1FA48iVtGQ1y3bucnNvYXEpP4ShjWgi",
  "key18": "2LJLKg5ovmXcPgzm6nGYZsnj3CGXdcQF6eZCKMupxCVNCsBNoEBwrsW9kX6p7t9ZVnwpiKB3W1rtoeJL9Pd3QFEz",
  "key19": "3PaSMfLeGr8pUrQrjSwukycG3HDbWH2QvR7TWcZN5f8Zr3KAXSq47tpQsx2aRntxQSUExguEhgBP4wqhX2yWypFG",
  "key20": "2AifgXEhXT5QWcPjEp5dsSnGWYMnvvC6nf4uqBUQkdr2ha6UuKrvNZSpzhUg9zm1S6xtXhCascy4YcfkrSWkbwwr",
  "key21": "29TLWctVEEsNiHAQo2wcXLVmwLy8mUeuYY8inBPnvxrdcyXDUajmaU5usKRmHxE5WMkpUVtCHGTp4bWMwEKCSTu7",
  "key22": "2qEyLf9DwFQbEus6BQHspTPW59TZc9GC5aPFfMhQhmh39y8y5fAN44pB7xknhcVrmvYz4pmnffAeoXGMeSk77hpY",
  "key23": "22T3Lry5ZrCKSnL8Gdu7BKF87vpkXGsgb8MvGhzoKccfRPVFpX5A7XxKjGt2KzthJsp2NEvme4Y8Hut5pxYiVV2J",
  "key24": "3WzQ5gjDQMmaKzL8CBL38oTvfSG8LYwDSXJ54TMT7o4WLbGuqkz7jyyUdPQHfjetnAPjFJrwRQc67R8LbNMahC8p",
  "key25": "5FwH2gC2bi86tvQF8j3DcL1qbZPkjFeBq6bSkkyNReMbzG2pFgLTQkmbsotDVQLByXrT9WDr2uF5WKSAqfezHeNM",
  "key26": "4KkXKXyURDzZnt2EzkA71rDadxeDLAGCw8ggqqPoMTKwfHbeQnfy9wGb244FbdEwssu3J4ngoTGgrCepav8PGxfr",
  "key27": "3ZK93tM5qE5Js8tdHtqrVNABF6BU2x4ffUi4pxZbqBZLjPyBqbVBfDB6fVfcRsn1GALzV7cC4vTu61DrA7WbRiTC",
  "key28": "4SLe9zZaU1Zy2v6yABTFFbfQnoNA6ZH4bmHQpHP4G2a9cioQQXCTuwyQvHZU64ARQXVRS9mTrnGxWN3ujQU36qkg",
  "key29": "9Z2JSQP1kpMyPGA3zMvZnYdUZdnPsjXbRP7yCcWmjk1K6CZXeWoxafNdPr8JcYx9uWdjxnEXveHQddy5KGJ8V2R",
  "key30": "KwPzjNFxmZhQ4qKx2FyQ8kSzg4fK65ymSpiz9c2txWFXQYWx5UB3wJFZibQaVtswesQgNDTAekJxG6prTXoQ7Vm",
  "key31": "5fDwNAfgXifyDS88MmWwvVK7fbETJywufpDQoNXGeSU3noLq6ocq7vMdt98hMzPWBBrWt4W5S7GpahDgDV5JmcHk",
  "key32": "3qtmte3tMXfcoUwoqnhrYARvUmpdmWtwmeWU7cNpz2xa2vtPMgu4H8xyGPqAQp8M8awYxxtMzxh8oKhJcrhz7Pi4",
  "key33": "5DRQ5BQ8WtkKb6Kedw7cijJxGwQjZsciG37MqEybGzLxivYdX66eBw7EEv4Xo9ic4CnmGfs7YottFkS1V86WXyJp",
  "key34": "4Uk4ksideGPbT5oAqrNcvXbwbN9NFmcgsfiyxKynK2PTSabncxdKzQPMnWhAuvDhc7sjtTRkTQmSoBTw7hLMTN7u",
  "key35": "4S6exM2Bs5bCqLguvXycAcHkfrjBuMmiqcJ5vVN39nD5tMPR6n17vxM9H68aMKuV8rXt7EG6E2Z7C845cDEwjsGU",
  "key36": "49B1SxruL2MRFVsmxqKA7w4S8sqYTHmF77gME319XaRHeQjDb3zUWeLJtgWurpsGz3H4X4NyGCKHeyF5xnoCygT4",
  "key37": "5CTJQQzc8qezEFQMAgkWERtVASybAwZtjFKvEyjPiCwGHPVBE18pLqBvLurRmUYXz21HtsWfjC8qXGA3BZtkS3qk",
  "key38": "47ZVWfSgCtuKYH1mnG1JueUpzRNpN4yiafRPm6Tc8FxYUKNNkNCcvu2vvbn4KosPXFDaE95VYge2kL7zi6k3zYTT",
  "key39": "3oJCYho72tYVzYd4AdiF2bgx3NvffBzWhCX7byPhLDyNA2yrsXi83ywsAQuvhrucDdiKKepDyUbR5X6JMZLsfZYc",
  "key40": "5VKZvp6s8ZtDuhfp4HxTJXNG7cfTFEVuLwDstNNBUEccSXh2feMu1sk48Hay6LqxjMP1oJZfPrQztnQnNSpoeDiY",
  "key41": "3MmgFYaA4n6Jyitj5xDg1WJM7b2gfHRDpYsXDHAfzTkDUp3252EzWXUdeGiPyrqcw3cV95Lidy2ZvyW4j4pajqYm",
  "key42": "23FcsDLiQbj2ktZ6GwFDHHSeLHWhdBLHh1jLd129gzQPcLR7swGa123Jb8KNMx9TQVWQQRtE2XnZQaEaHAoYZLvY",
  "key43": "3o5ax87E6tFvpS8kQZoo1zLwWEaGp1q7qyn3nGESbyPip1VX3LXub6BvkxwmLvHNq5uMFkRHg828RWbjrJfw4ZBn",
  "key44": "CiA9NGXS76knNxMGXpeA8umSaRaZpxXZpgVQxE8dki4mvvcwUkuTRcX46PB72VHferTfHRuA3yPNXo4CpaXSjyb"
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
