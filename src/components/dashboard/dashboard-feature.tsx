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
    "58rvkKf8NYbk21JTuqKipktPrJ8WbQvXJTFDxqY37rGDSCRNYWbXSiT65sgyNtzdnD1nwauepBaQxEAUWnvq2Eis"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ZQuLJgXkKxVqBGNtrG7ZTPVvam3HMJQYcJrLhTG7WHnkEZE34wNsAEmfASEJqdHdMPjFGzcniLGXgTLi5swukw",
  "key1": "LMXPHUh6x8GisriKndiHv9iRFCDvCLZB7CzFBdQCRNKFLjDrtCmC7K74gAUiEgwJCtgwxUq1RQu3k5fK84NjTvj",
  "key2": "43ENuiYBA8AaAxwVGZgTow13qhWUm91eVEALxyxnHz54HFVusJYk19hQr767eGVmrxnKXTpRBJoBDXBkZFLCSBfH",
  "key3": "4FMfze99LUvqPWmJHUFxdtT2XGHENbkpEN8TJwVoZBt5JcszVKhyR7NzSLoHxZBpFB4mxA71sixhvbjMLTcBMMBM",
  "key4": "5iuGdfyfg5u6LTv73GtHsGzwUSm5ox5G6PiEVDds5A7k35uyY9UQyjZXRmzGqKeJserjdMNtfjw8aUJC251mzUWz",
  "key5": "2uaRSCbofpbTGxH2TvnLtrJ51UTtXxckCREGWGdTZsHebmkuuHP3kYX3Ny2BeXjkncnUL1m6sQLtwcbmBHarrocH",
  "key6": "2Spvz4673bfKnv5ZqD1rqaaCopSXS7yLSUHdRcXVida1rx6kPfN4sq4KkfXYuLeUvJQzrwFNyUjEQbJabGBpXG78",
  "key7": "33wQMiDc2mwWwqWobiUgxMjUTYraNzLjtto8sUnydAuWTP4taTXxJCp28BQ9z6jdRo9KZ5ZNn9awzHXkuWcYeKh3",
  "key8": "3chBjfBTsm1btCcQCxe46qNrwasRGptPuQy911DRA9ruXkKNhYbcMA3TjuPg3dC8T1E6X5eeiJrmM5LmQzyykhHR",
  "key9": "UA2iwpVFJGnvc3MhhoYcox7N7sPQtYPLPDu742vTTnpELj1btY8UJqQxJSHCsnXat7jJf767bUQsKNf3bq8tKUt",
  "key10": "EWs5kv58ojHj9CACosEqMkPLu6fmMe6SNdNTfBCuvEbvJNdLU2wVdSC6yduhZh5tKqxHowc4YgpK3AbZSxc2CyD",
  "key11": "5evbXhzdLcydxiVCJCAgnsTAXpEacEKHPEGNqWVJevXVLm49fwj9wj8dYNJD2rky4FCSiP3M3N6RLjH1pjnANKob",
  "key12": "57bPfUP6ggHWMww9JSvJEr4tqMm11NfkAvs1ZeGH17KyaGeMt3hDCnaNZvLPp52UV8nV2BgbB7ywzYofZbjjhwzT",
  "key13": "49Zt2BA7XCkGaPeQrVWgR1iMcxEAGb8szffnz2HU7my4AQJ1MKtVzXToKTEb9m6tEHk5KDSqYX9Q4jPqBBdXZT5U",
  "key14": "dB3rAyiqbyBXVc7eGPcZawRjmF6zBCz6HWNsiptxiZhodzr8PKBEfVZr2XvbWV1ihQi3V7jSiq2u5WbGWWH29yE",
  "key15": "3Rx1jRT1WN2oEzHfNUpYYNaXiRxR3zkho2LTPefoZwy8tQiVP49N9fvtEueDFrgLemZxcZvJ8p1Xi7j9Ln2Cv88t",
  "key16": "TsYtmpZetNMqpwSjNNBEWfaywi57F4CbetVd4Sx9DQsGaVirzmro7kiT27JNUB1DdtwbJkHbAYUCrM1ZhJkgytm",
  "key17": "3fW1Xy9AZWZf73xSuPgcTmLrTzJa18wEidWPN6GZNtWQKWHXnHXkzTWG8hhYwkLtGeCTDALvbxKETiErUdFp1jhL",
  "key18": "4QB4sSoKNmBRDjUTSFbWQpmkUi2AEXjrLPeCZUhvddHNH1JnE7BJFeAbUS9Rm6H47u2K5PK7N6jPCMWpJMPuRpG5",
  "key19": "inqbTqHaJERzKBRmvjzmC3oSQ8dknauN1WbKHU5XhGdKWG4qNtnjRTM1kndGvs6rN65QqLrTrJBDBkwcP5UKEp8",
  "key20": "3rvXmgmLjzg7gFWcYXRYCkfR6Ad53UbChy1cc8V44opLWLik8ecrj8mnPKxeff6r3XavtBoJMbaKV7BdNbdWnpLU",
  "key21": "5ZF2ZAmK673tLFu6hwG9UT3Hyphz5916zDw98mXJVH1UcdpuJs3oSsPvL1qi6gdTZWN8VcjRJJHjRg76m9ipa26H",
  "key22": "5XxuhVmABXWQZjsNUabMEv2X9hNJUARhaeaNJhdHdYQxHw2FignyFphCLdMKERXEgp1wKkc2gYLUaqsWcR9cKEXk",
  "key23": "5oUBiUKo6HapEuEEfu2f4pLuXk1ds5fcxF9EsT2JDSMTMR2ah5bAADoogQpRnEy5ovSxZAfGD1V2XJRAYG6whXUg",
  "key24": "41ybdsrJtHqcPcH2cfdmNDQ9rRYU7oAM92SxYpPCt9WFro8C2etHbzq1CJqjrQ5qT4fw1ejVpgrcyvKeNpStUREt",
  "key25": "4NFVYF3orztzyGxZ1wbPTsnXj9QYk6x5XsvwPN3fKpWJihDAH7PMMmVx1tAcDYn8kA8ot1Pwo5LqngzDZqEC3eXr",
  "key26": "5PSftnv4iiEPM3BK3DtVzPiKwarXE7jv2b1Wdg3WXrpT3xZjyV5Hk5Hc57DG3dL5LgN3hM8EHqogJLs7JB63eEFZ",
  "key27": "3jrEVHGmNgZctrrZAvxsvAPqM6bVpwXnWfESyaMaHZYF8Xwbm1ySNDVwBTqUhsNUEEXtfrqp1LEKkgvCaG6nM5JW",
  "key28": "4tYAZUksi2aeNPvT1x6L3amtjc5FVJwqwuJoYwPKb2MQ5BLmBxBMiuPpb9CUkAbJsDhZQj1xPkGqC7rkWaMGpGo",
  "key29": "gonj8yV4Ln3u26XDRYVUP7fd6TTdf8rjYKGEVbonA54ST7qx9R2bYqtuFZgDrVMGbW4ocG7hnw6pbmBtDybRp47",
  "key30": "3D8mACkoi5qKhHrRL2sKSJVycURykGbCE6LgCMGDPyhyk5V89cFHzFbVYgKJcH2LsKJANYWoBntbHn811auw41Xc",
  "key31": "4u4EgkQTX5pJ6H5X8iwvBtGDsC8tegE8skbKPZzKXh5gVQ8AYNBEhs6ETGqfQADDeM1dqmpF9DAs9cXhgqDLviRS",
  "key32": "4i2KrUgeA1xNuE2XbnJU3VQC9srkV2TaQJBQzEx17XAjdC4HKC9WiHJmpKqZC3G5tEWCRpmMqCj8TRDGsthSWaro",
  "key33": "5SG1ZK3kWt3sgEzqqmxxgGBDkUW2gLWpDiwa6QSKHgT4diuS6NsfAPY1xGZXztEcVpF7C7DGHCH7t3iu4NAxR7YX",
  "key34": "37oJ4ChwtsHeVmjWV2f7yULv2vMAYAHMJRVM13NMyvc1eyz6S47YEUXjyp1GWUcvKBeN5SZC2UbfkBxmXVRJvwYX",
  "key35": "3ETDeGgfiiREFK32rJnQ9JNMry6Xg5GnFAjGTeGLsuFNaVW3b8Wz8opFYbSo3LbJDqZePMYZCKFdfVQnG38jxPPn",
  "key36": "41fbssHdRgWxTtWt2mTYXH6UtQSrYrhQNugUsKL88KKPPqw7X5wxirzqfTQyBH413t4Ts46381Q2i4pa99rsvcvi",
  "key37": "3nmwtWLz8sgR9aFnvu2dbuotLE91qM4FW3iUue5xLKhs3yvPG4PmG28vW7TmQQ8BiJ3nRiGxhXWDVTddyay71ir2",
  "key38": "2XAHdvM7oyb6pmwCmFJaLGVF4FhMyKNjbd58uiBKm5Xf4WbZBWkA5GSHPtdcU8uLFtrc6WUBUoo4PaMVohiN1Q8c"
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
