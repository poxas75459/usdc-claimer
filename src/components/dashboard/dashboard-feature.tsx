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
    "5GaNXWtiP9eaYtiVrAye8MtqtGVSPrMe7EMpEKgrEuPk7NDyYQfPNChWjP3VQ8v4XHgPRGqauSRvoQoMSCo8ywwq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iLSnzYjUnXvT1NxTka2wGhdGYY1PfySjPJA4q85VimitdQz9aGWNDYCVjK4Wqvt7YWnanVLBEJKdT1PoZkBou88",
  "key1": "4gtLv2B1TGeNBa4DWaxYzr8EjaZ6TrSocE4CztA4xHpVir54Wm42cvz4V3mG24j7nyxS3NexAVfAoe57XZXSxtpu",
  "key2": "36tc4abfq1GKGQ45HhbC83hjBQNUuZDq2PTrv8cpXutuyZVZYcdhTpmx39GSHpc7amcsNDGGbhqjiQfNXwysgYv5",
  "key3": "48Jg16YsqrbqGphUWusvDL9hMRDP2C7Je5codQkYGr5dHfWRJmXzctw7H4Q6tPc8LQ4M1b5qNLyU4pqXrNowVRP8",
  "key4": "j3e9yuM5dKDC6CFdJFNDQoLr6ox7rPryhGZqFRyzyvz6tcAjT5cbZirxPtxLfWymdyqvbJdDTvULjr4mJSVY76g",
  "key5": "29CrsA3bCVkbjcoXaNtPuwc7ZeDDjkBZZYvXVxqfYcj9st9cFUxxxeWmhDnXFY9bGpNQ4eoupRz1jDvegDLwEWHc",
  "key6": "3C6QXY6LTxL5SqSfJ6z85eci8wzTdrJrQPGbM8YfrnhR29xgLNapBhbid3gf8RRonEBzNRfWohq9aTFc5Xv8cWoU",
  "key7": "3FNzNpdgxoGcVAWz2c7LsaTUxcZFigGzkCs4XELmFNqUYHNDF9obtDaWFA4HGWtLYWoSTNoPPNdPhG54bMsip8gy",
  "key8": "4iWfUTbs5aiN1nx2KbVnSuv9wrJFot4GX2h2tmJf7Qx6h9pHpuqg7a7hqYaW3BbrE9zeRV14FQWyVk8RQxPyMap7",
  "key9": "3d5Hi4xSK2f3es8md1EtQwX5a2aFnwgbdm9gAY4tnkD86KG8YszrWeQvBWFfZqeGjuzKLvBXV5JzeqwEQRp5XBf7",
  "key10": "4h9RvVFp8Spq4PFfq3MW4ZGKWgtmmWy2bJEbkTRuFrTRxuNdtX61oknLju2CegacbBJuyuiRLXWsv3cvs7AWRNgR",
  "key11": "772gwxCdoxjbBd1uZMQKU8EWtw9yT76kccKkLqn5W3oXUamXRNrmiA47SKgXs6fdp2rK57TDt7vENPNk6riLs2T",
  "key12": "5hfZJ8DMegyDCPLrc1Pi6SX8AauwzJ8cHNVssEe4mMsi7ynGZVK9abRqXMGZ5PnEknfj6PXK1oys6GQja2QjEYfa",
  "key13": "4YSauFRweNXJwDMErK7z3qGFHmaMtEetSY369AQJdLTQdG5ruDxunrk28s5qrGPHJJ6bmtmFBH5odDKowhjPuP8H",
  "key14": "9LU9DggRccySQnd88g5vcs4UAxrXb2HM8dnUb5Xo1trx5MY1PGvKnxYYT4WqimYAXWvF9xYC16epTibnH64GVXB",
  "key15": "4RNEF1SR8nSVPSBBRXNqwLMdiNJZShstsMo8srQCw8H6nJJUc49zbRWo8Xp8rZT5f8sB1L7gPBtJGAnXbBEaNGm9",
  "key16": "29tw2dMj8msiaWwvndoiw5GGwQLSNHj26RHLspx7xcrwjfrodow1r5o8xGR9UotdmfyCcfMj4iTHZ2E8XX2FKpqx",
  "key17": "2wksMDKTYztFM6LJw6EZBsxCHhCfr1fE8ir8pnJQieii9pvV37xf7txy1Ne8oknahmh1JZjVHh6Y6f3LFQqXPq5e",
  "key18": "M5vu31TuSVd2P4LSmjtd83NfKdYbFRyshHtQ2pHf9JCVvsTXK5ftsRybqjo9xcZxF469S5wNVCcHCucA6ohGgXz",
  "key19": "Dm7GC11kRuWB6ouj3F2AJZZowtWLFGXdeiSrK9NCjKqDcAaKAcg3YtYKphBYDcMtBag4ujG1iwVX5E7FGXjudzP",
  "key20": "3rTPuRjPNcd88SxgNGfA1duG22pY2LNt1gKDRsMno5hfb3cuPk4Jp8YVqeG8sd5BzmJCUCfGsioeX93WLSLL7T5W",
  "key21": "59TWPKvFVjdWMsx8FQZErR5FBQLeTJ1xtg8BPfH9C7TfqPJvhkVHYd97J5mc5t1YoBuLmNBd2ZtKqHzM28WVmqHi",
  "key22": "5naHEVoMdN4t6icBk7dVj9QLJ9uRBb48jYLjWewKxuJwUjQKwF4LjmdNF7sq1kMjL12PJ8m2fCTMiRmWoWCNQesp",
  "key23": "wmgX8CBbbxBmcoioYWw9vhZBQX5rRgW8gNmeQKQmBVoTQPhkJLyzuVU5j3J4x9ZmT8ojWL4PYSyxPh8z5YtWumv",
  "key24": "J7PaRrihGvxGke8zzjFBDBwjo28Gx52NvX6TaVsqiPXteJUikdms7XoDBSXp13bjjdgATdSEgJjFAURuwmVQTg4",
  "key25": "54jczLHRsgqmRBcDsERidAvR6LYbkiMY3PFLekXUpoJFiHL62DnNvzWkWS8fZbhiUHYNATK74JG9THosjHBH9jGs",
  "key26": "3MtdCa34E7L1aM7typFJFoNe72AJGRdYgALJ97jNCSQ5k9YS5iupKJ5Ka7onpxZXaLL6r95N6k68zgZbNESuZDDG",
  "key27": "4zZQP3UkHfHtwmpnZqh5zqZZ8VLBDpK5gDv2HuMELv4daneoKRWFkMRJUtxPtrJm81eLGVK6LFEg5TDdV1tZyuEL",
  "key28": "4Wsb89AXwRVfDk3a1FGkbwD1Ns7jhCbR8CLP8GTQfJDZtSLSXScyAQmXUzgNnE68G13CdU6spLPD4TEYkn6kXMSt",
  "key29": "2GJambx4kTbwzaY7bbE1tsqbf1jViC4aB5oVivi87sfHzJCWpPpX42mSwzwhVSHWecDd7hRuA7i1tiQMPyxLiN1Y",
  "key30": "4CCWCpZpBtZ1MFp32pJM7Rq99GBrd13KgkJDEv9VVfc9pZbfMUwh4CM56fGGyDo3KSAiKQCqe6WcvYUD6JRwKNFE",
  "key31": "3VN1D67aGLE6eihy8w85B6cwn4ofkHGo2vCzWFAib5ssfQKP3Xjx5Jux1F48dkdvPmFekkJZUgeA84MuQXmFWesk",
  "key32": "441Vn75JRymDQ7UtFJrpaz9vwQujDRknYkUdBnRmTTRCzDKWNkpWtn6ZfJapuBB4ZERoc8nNDZfo5vhAqCYFjCF6"
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
