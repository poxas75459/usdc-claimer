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
    "59tbs8RgBN25hnwg9XQTk9eA7rU1Rt9toCX4rKBAst1chSjMPjHYbH5utH9vDXmD6f6i3oZSk6wytAEr5t54TNZZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wzghWYzHbgHEpzqS5CgnPZgn58mBXEaWKHMmshRgfLq612UZykDe3WtAs7pywe1jMrAH2LbrKzGPyayvcgwqRFR",
  "key1": "612fpvCrEu8fzL8JDUfxzaiHcHXiwVEGH2Bvmt96mL2eGgL9QVrELaT8K4YewUbj8wsB3YetH3j7H3cmrz5iqM4t",
  "key2": "4aC1dhVSEixu98YyRHnQNB4Lz7kL8NoKWuUCjpbhYmN9uVC8oopHLYaUnpwgQsKGCsVEamoTme1jZDrX9nLwugux",
  "key3": "t4DiZDtVoAAYaDfE1ur2e2wg6HANYJaM9D2hGjNoWz8kP86UopennDYWxMLf5Lt2vZP3gv67UZXhY7wLsRasAG9",
  "key4": "4J28144UofrZprfYTaWi6YK6M5cT1gx8itY1YjrDVdWvAfPTkzYsXREhKGyF6F8VauuGvBTN8p7SNSmTSyAR4gXA",
  "key5": "4scTuQfv1L39QxxSs2QTcTfCh9TiLEAzFQCdupUMP681WWCkscY3vnTr8nqVwH7X3UHuxtahGcU3Bm74uFrssbvE",
  "key6": "2mFxrSwESjZ2bzXdhzG6NRXdwvQuqCYNHZGtY1psS2hHmznR2VtDjGXTer1ioBu9Hhpya4x5yj31qykhU4zUMzwf",
  "key7": "n1afdLwRvAGEsMx8Jb2saHcvtF6Bh8iCMNkfhLaMTZDcW8X6HgdpYfVGUoEpc5k6G5QkWiPDwJTM8xjsaNZhMA9",
  "key8": "U8pvWAnByA8LrMcnpJAze5cu5h86GfAhMdYyT93DVX46FLjJfb9sZqf1SkZ1DBUP3ebJFYrGyqYgehTyhnrDR2o",
  "key9": "52M6PtV96NLeRtDeJc7WNh8GnrRVmMTFDiczu3yk3Yf6cMdjmPWucczpWWPryUASPaoj6RAucffphacAXXkgQ8qp",
  "key10": "3wMrtENrchUCXmAo16HhQz7DVL3cDsdKYiwuCX5cTQPpQMvs7e9976k99rYA5DMXd3zG1pq4ExbWMkmCpE6Hw8LX",
  "key11": "rR4zeLo3NJerS5RYoK2fLP52sjavUeZPfbcwPuf2SxGFftQRo3B1vzbWdTbziUy4RSsaynMWaUaGA46n3LRNQ2Z",
  "key12": "5sboUJd4nFPXXAnENHuYpLAfYRPmjW9aTV38QURnFeJo8N3YmYaL5uomWhBpMeSUYU3wQ2V51YbjNbwLBB8G62JF",
  "key13": "4XLKFE5GC5DeHxC1LYt3Gzw7PYknYvnj2vuAbbGWVpw4dBkftJzhMwjhRPMKMP81K9zJhXFfS1oxSHkSkhDqgUYj",
  "key14": "XTcz1VtotCfV1bmoj1zpWvxTJXbGzfTE8a32DoHHgbU9MhYTGWPVYP1L1xjgD4jBNxnHrP4SP6pMZ48KGoj7vFr",
  "key15": "5BqVBWjAHrCvRnX4HVyj5Et5CkAozuF2V6dyzZ9SsipsyPUtRPPGyjmTEo3DKGitAcVHAQH6ifehThFAXU1yEv68",
  "key16": "PRFxPpKTsmL5gTmPhJE2MjYD7diDi96JSegDoVE72ekCmmoouJi94X9UgFGY6jrXZb1k4spsesuENDWsYvMPaDZ",
  "key17": "esMbnjDDdCB6oXbpEZLitLf1ZgvXtrfsNQnFihYpFsBUYJsuzfzJgAf24YpVtb78sCAoM4FoX2qPYRCxa3qCGet",
  "key18": "5vM1ox3gRXJJ2xJNwuie4uERg533MNuzJ3pJdYxekYMhWgmXSqh3ALQi7Zhm3B8mMJqiipPqa3u4rcLQCPwKLhhi",
  "key19": "2ZirUFVZxZcz13S9pJtMDfkhc42FbSR2V7v6d3V4zK8S6NbvJkFa8L1B6n7q1u1NwfvW81PNjYZ8xCJg8WkruWJ6",
  "key20": "66HRTojmhQxqac5JpZqx2Qke6pxmJkbXw4She2xW6iFQFXHVzqWtFDJNACuUbiU1USvbMekvvtCSiDKpg9zshYtu",
  "key21": "2cNyxRUeL1UXKku7oHxtJ3MVQe2ZLMJ4WriJk1kuxYScWfotgLoHwNpNmiveFrBkMyrJsJNDLndgoqNgTUXgV56m",
  "key22": "588NnJC8bwrQYcxLp4eEo3WDTGnfDT2FPwJ7Ea8PdbNNNPFo9ctU49oqEwPgPkVtwi7f8VrAGdvphdDVZrTxV8aN",
  "key23": "4QxGb4iyg3Gk2cBrZE7VzXdg1JkQaPsaamhNjawmGE6Sazb5TTcbvGh6rcs1sg2gXDxSSiaoYM1ogJGh7f2syk6D",
  "key24": "32LU1aPrBbuzK8tYAE6gZBso47ZtoUPtmWxffegV3bxDPcXtKDuGXMTYbkWkS74fr3ncKzkj7sqReGEJ6FQ82Sfe",
  "key25": "5pf3Sbv8qszkbua4tQ8TXMm4kuso48JhFXyTqduSRGNrouYoL16dYRVoRrq4La7D1Z3Rzz8R8DFV4kooK4EYM6Ba",
  "key26": "5U3bVuHY31DR3YQm9kU2jRX4h6aNaUNe23oCvgx3kb7bRmLFZwQ7WZEAtxTJZinTjkfsGSbnqbmTCF3h2MymcGCD",
  "key27": "VvbMe9ezc1bJZrHXYyHYv6ziGJm4w8k2cSQb5Wn41wqzi6kL3BAf79MMwG7ZCy8s2txXtwnFP2FAafAdBkFJNKq",
  "key28": "Xdv6eLdoun3mbzJzEx5EZYHbadHMoMdCp4J9WhPmjL3zHAo5Y4bpDrQyJFViktNQPpbBzQLFi7oHXWtiW1VUqCd",
  "key29": "5xh11mTuMTehAZF5Do2H8A7FztUxcZ8XY12h5yyv3Z84bNvhsVzwvtURCJq6CKDLvSk6HVzsGEJXxGf39xkgjt5f",
  "key30": "2UXEy2QHB7eba4GsiA6sjRW96M1m9KNyA8AHzGnR24TnYE8RPKpZ9T3tsGLM1GuYqrAUtRTjpmMy2p2fdQdnXLep",
  "key31": "Ca6fqTBmtP33JFbTLNycZnffSiX567wfxL6bwvPVyuH5MzG6Kg9umgPCFMfjm3bdPHSsrAeizdAhkiusuFqvJDj",
  "key32": "2cUVLmCXWedkcfBwgQqPTw3SD4a3L2kaEdYq5GT57b9P3voKYDRAXEndH5Lx9xEcQHA6CjFQE3vPqw6dHk7aQGu9"
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
