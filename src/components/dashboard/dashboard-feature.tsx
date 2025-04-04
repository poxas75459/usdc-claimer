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
    "4uE866QgfnEvJicsJScY5wyhga5q6cohdkbE5QHBSWJqQX6bNrSf9Bks9fhqQYSisrasJhGXyPUZVCUBNZQUxNDJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2skTaSDHmmQi2tvBLY8XTkhS1JCAzhcKqGh7Ag8FWXGSjXSQ1saNVepUoBPBR1vy7SbGm31kxFiaUsrskFTmLVrn",
  "key1": "3arRw7AyaeKFnwiCpvste6RdMQuVmuUyeYU8aPnRQknHK5cBBVU1mcAWVEaWZSN3VheUNqRvRzqeKhyDLmCnfcBz",
  "key2": "5AGp1ovFyXnY5iULjz7g6RFRvtKAcGYFkr7iFM6qLT6WaJt9JutMG1R1YKnN3cQ2uoCLjrnGJUmeT4w4ibrgtFaG",
  "key3": "2Ph72BtP2DTc8JF3twiCTArYJWmmNiDTB7XkbCRc1FjvnM7EaKSg5JKR3K49E6EZzGbPwHfhwe8DewMqoriF8TLL",
  "key4": "5KsgwuNmzHoperVndeq4ucHJUqPyBzaMF4wfF5H7LhPuxYuECfDFJ2QiybbgoWEk2EGBvc7y3xEFrKH3eoJ3XoaX",
  "key5": "25RkF5paqdPiqWrNoePpQpPbnyXSrbKEZRxmoDkozi7U9w9uncpWdxrtzobwtEkYf68L5riMMmNbakLDDk2SBGjA",
  "key6": "2KkAakVsvSwigRpZq1DNpQSysJeqJ9hPrSKkupjJfS2yjii1rZsQtbg2o7DrkmEBDrjJyUjz2s9go9CwZ628WApH",
  "key7": "eBWhEZ22aKQbosNJ1t86Q7dGNbJM48eyMrUrQowUgozo2C7H9LXa6HQJ8dVZj5r8hhndouCXaNAwzzjkPzxNxCm",
  "key8": "4uoqJBDB2wxnsohziPzju3wcqDHVStRiEEAHu5WAHUj5JqUFWHi2WBWk3VdonKAaWb2Xjwp7rnkJxtWFFD65RSZS",
  "key9": "3BioBiPKxodhZvR6a33rHs7JV2WSJWHUGeW4tzKnF6e3UNNgbRUF41ah8SZuuRuMWsoCWBAauuZhBcn1xxheHTzE",
  "key10": "5HgTVCFEvMXsYNEjRbN864GY7ckyVfvSRnqWDwEG5qnugPkDFbkaXrxm3GMLn9uGiGw4bN3jgmtNthffdBWu7q7L",
  "key11": "5W81H2YjRXNrDfBjbHoTEaB4d5AhTWtWqhQ1nWkwT5QsRH783Ubb4oHivipdqmFemWDdKCEwUvMUecKu2tvFwhuf",
  "key12": "5YdmJmzWyaBndz1UAyLiQ3ban4FVSfywW9iwmeLUn2ewk1fpht54M9Fq8RjYj1DPMxW67MzC7j4FG9uh4khMapp4",
  "key13": "5JiAWvMiJCSyiXSHqyh6jmHpK4GrCFciGQgWzp52ggKetM4cNKPvTJVDbyYDGoxWu1rv5itgnxBEBe6tstCeArcC",
  "key14": "2UzgoFYftRDJoRrgCwt4KTqFWTtuaw2yiZH9t4jXQ4UhJrw4hc98bmGWeTxVdSCyubJ1MMGAVWrzzaAj7rmSB2fn",
  "key15": "6BuCascvSyksmxNYGepNaZUcEpVDSkzjDD1NUxJUduzzM3c1LhqS2RhWyLm14fmdUbzWKMx1bwBBaUP5jWDBWe6",
  "key16": "4xj8GDpPuAMXGYuBig1eKCrnwuLi4VTcFiSUPSWkSaSyxRyRPKH3SfRjfvxihe9KZwPkv7Ug5WjeAZhP4yVLhRhP",
  "key17": "4e7B9rH84P5azLE3o9P6Rie69Gzbn7RLpNpBnnv5bLfs9h5jTBh38sRo3zyViDDFGkYn9y5BQBGJcsn3EiDqwf3V",
  "key18": "5J32RnTFHqvpJg1zgjyUcxKwLbuVQVBh4QTd3aeZVHf5vscmUPTL9t84BjQf7ZkjVmhaz5aWjMMaLqspAgAzWFcQ",
  "key19": "3MR6Vm5TRNi2jABSC7fpAn1yDDnVzFakWKDnFNc6q6kudHC2zt4utD8VUBa3xB2eHapH9NwpgLGNMKqdrV8YnStH",
  "key20": "5G1QFsscyj2puVXwMMD8Ffur71CbyVUF7zPFx7EhZF8puJmgY5VjnWPRR1XuyPEgN83cEu73Fnqx8JrPbcdPQf3x",
  "key21": "2jNv8U4z7GAV1SJvvbygpfTNx8XtaJdhE8bnVVEBnj3RL477QCUtRzBxpErjYwZdkuB5bqcnxiHQtPXnmEzuUqdc",
  "key22": "5xrUNz274ZtXJ7a2sd66NS1cgEaMcBwnDo6hGxvr9bdzPe5mwEEaYtQroGWKPtEkJyhu1A1vzN1SXEf2iypsgfou",
  "key23": "3BsjrC6f4TFDH8dCnvdcP35AUaAnL3AdPGzJVHLnzmMpjnjFTitTUWAAxnqQDiCTURzVwWrH6S5BHeoeqgF4JWDb",
  "key24": "24ARXUUtiRerYNWxnm6jwsm6a5mRvRPAe5jpagGEuEqQvJAcGCNiU4KEjVUWHDwbQjaKV8d391ap1KJv9STjuvs1",
  "key25": "nrZTXq323Jmyimked2GXM1zeDHqZRgCvmbYDeB1aZfLz74pwnMFw4gg54HKroP4NdeDkgiJJsrrcDrVY9yzDckS",
  "key26": "5u8yVGuwgz33ZqRpUAzeN49dPjaBsq8HMqvKwE64v333FgBguF928WFziME2qHnUzwJu9Qj2sK6jUFZX9Q4w6gec",
  "key27": "2A7wH23bv6NdeCnNmzmrbCbqiHT5X5ey2oRr4QAaHVx4XfxzAZM89EXPtDweCS55xgLemgDFnKGjBnBvy6gXekp1",
  "key28": "47GagjgaK7eZWXGHLDgLGhPm5NmNyS2BEH8Yy1BLRw4zFV4nUVimfJHmMX3BtaNBou3M5uLexKEPuW2b3QwAAhQs",
  "key29": "3MVXtuLhonct6oLo3ywHJmDj9nNxpE5NXPka8yKHYVeDfnxcjDw3s43NC9TCCasBWqwrvGeDsGGCx213TDxexjDL",
  "key30": "2Fiffz7J469bdN5AuAgA8bhsfQCFQm6LnUDaFFKpbYFbTnmBayoeNPJpsmFJaLkoQ36PnxKWtxdnEGntgSkmAfVU"
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
