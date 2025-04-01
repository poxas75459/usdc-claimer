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
    "4xxPcvC9sGq42f8gXShpsCGXBiiPeiBegAvLNzkadSZBghrfmXjEtUbacGLkvXndX4jV3p6UcpX44G7BhagStXFz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25dpBT9xMDJZgY7MCjoxpuRekhWatHCrpAyereZcrWQL4JxKuKPC3fQn56tnuTtEWjTk6hcE5Z8DQ5K2mKuGnB5E",
  "key1": "5hAt8fay9eEZJXFUDZptMGpHLHQQzstBebcdAx6tayjj5dGPL7ZUSMXmpQgRBPHkmXnv9WEmkk9eyAjRjYLJ5yNr",
  "key2": "3v7dEQPspczn81JUahCfe2nu7UfD3k77gb51Q62CLMs5QPEgdgScP9yroDvKbGXVTVQPrgJCsJr3cbV2t1q2jiAS",
  "key3": "3XJT4mifonrU4eokHPiivRUAsAdoFdELaKTRiuXPfpzHe5SDsY5rWbC743hMMyqAGNJJfLkfoRwWXeTHSBsejZ2j",
  "key4": "4Yob97HBeDpqU1UsPnUenvHc2GcFBKbpZmgFLHmA1CgxQDFLrXqrQjZKjv53mXNheHkueJo66z4g6cxn7MJ9snWH",
  "key5": "3kYdqzzukL6TKYonoMM71TdkH8iL4BaRPDQ1bBgL9GGpFiwpsFAvT59ru3wg8kDTYwVQR7wEfY1SU3AXykTg1uPn",
  "key6": "dLo5okoE1mF7CeSzvu1nNkVWx5CRDcS3uH4TTEpXxxeZypEmz2u4eatKj56KxpUy1ZYu72dhSCsrSt3UD9eGbsm",
  "key7": "2wZLCKFy6Pf5eg8kKhnp4zuAqHxaMkKK76ZY5nXftjNeoCHrpJps13jvnZEN7H1csoQfoZjkHS4tCDf7VsLgufaM",
  "key8": "4xcP2oNS9mcvH4WuWiNgLV3aUsNsDvZb43dTrp4BXR4yqbPp5P5BKHh2WCto3eY1G5N9jxLouLnoPfbs8PMUZu7z",
  "key9": "5fkK2rdUFccV84MqLn2QyMFGtneztKYuzTUGTxEi3JHDh3pLQLZg9ZQE9SmNsHzP7AZp7C7azrRqXbQ2DJbkDu5h",
  "key10": "42YQXnFK7AeNq1FATT2BnyN3BSCMTPCV1GRcC2KNPqPnfcUMdFsS2XU6TCYiC5d79thVTtNSSjsVSn7vgtFpPy9B",
  "key11": "5zn9SSiRRAE93rTqnWVQC8SbR765TYnXYAJHdLFLbwA6gCkc9FCNxRYdLpH9dVRnQKF2r9r9Gw3Wk22BgYTxwKAF",
  "key12": "38yCbihgAPGx3i9wLLtVnr4zG2PCVTfGJYKxnNW2Q6NSEDcXL1jYD7nwbsNUcRLRvP4e4wsyiQoPh1LwxpYUPsnj",
  "key13": "5k8Zrwyoz9m2XHRN9PHYFic98SyTqi7neARj38aqBkUKpt3TkdByjxBSU4NrDAD4W6qkncesewyK8Whm6bVTHA71",
  "key14": "zzU2v2bBkgDN6BEDWpfwTwj45yPTd6rbsBaTKXkV3MK2aPeAbvJxafgLHAoLBCumbT9MYfz62Uz1DwTwKDBv56b",
  "key15": "36pbmaHBKfTbd2rftEckHfTH6AFaDzDvwjKkUXjqYrT5qqrznFMC1hG2AUaDeQzUQCyBPBHkdWbjHdNHJcBamzeX",
  "key16": "5xrPUXFmEpriAVneCMKBBFGvHHQyn5GhPKKz2o8wgZKfzHRT52eX9zGRyHL4na1gkdu4vURoHpYX3j4iyeLMfyco",
  "key17": "3X4Rx8rvdfxBJDYATaSaT4oQHH6Ujp2X2fiYzUVQ4hEbaur95URwEtnvKimb7zQbL3Umu8bNUxCxNkQCdNp3yxUh",
  "key18": "Gy4b52NiHYPhJaC2ryyW1AzS4Zovp87CmW3Jdex3ZX94XZhaJtW6K3rMmxg5LsmSV2kEXeqN7dUk92wEBknLGMF",
  "key19": "3Xo29PuCDq7JjD8ZyYNryHFovXwhYMEE3kCWwtmVb5Z4he34DFKcMZZRMQjuYkqwdeaYr7LTriAjcykaeD1HMcQE",
  "key20": "4KFjsqZdtLC55U9LAu7CGMftSraGWtAw2NfuqsZH51qKRHJKaWp86v2gHPu9qvmVxC3J3usZsNH8iKXmRJq4k6Ea",
  "key21": "2G15ZQtAmBzo85nLtPKhG3iNUHmBNqRdpfriawjLTZaoYnxkhbhWZWePB2PAQV19im8spmLcubNMAaQpt1HMZiGS",
  "key22": "4c96ETovsrPHPcgEncSr2xmAgZvjaDmBCrZhbqHiBmfhyeGMs6ioZVQ6WWSQN7eexbth9GcTvnvT5PhpVprW64TG",
  "key23": "4SJGPmrLvsreNPMDCvWVDmL5sriXpzeGXqd6bLQTNpiMSJgsNk2xGWUUQGJP17pfxRDNLNyPn5tXvimvPo2dh737",
  "key24": "2LUbpQYjMgV7M3d3fqUWsvysE7EGNVfXKKHviPskffNDBabydL1hVLVYEga5JLiYCY8Wfz9TVo5YH5Genpqz1EPY",
  "key25": "2urB6daV6138TD77uQop3ipYyhuNQ36GJipnG2hcbB6Nn4Dm2Tw5QSzBwNjsJAEQGwQqDhEcqeGi4D1AYQHL9jwV",
  "key26": "XD2FKgb8HH3uDBQQeav5CscUE53MRKM9zuYiCkY9XtsDsZtLMcUFJ9hM82n6yXdPbQKeCZKkrXpdfG1oGaAWT2a",
  "key27": "3Dgy1a8vdrhLD4BzUwhxpnexnm6eescRriFWbxFthd2BNUnAcssR7n7fjwWWqD7hnWCzAR88KHjiETb64HRTRS4r",
  "key28": "4XRvm6hnDatCbzZgXsmjmiKVifqiwHy56ceGnBcbTXWZXQgH3NcEpfmXyEAhBu3w4DPDi9nKjY2cy2P2NXEitsoL",
  "key29": "2HJSpMTMAnckHcbZsCaVaxhD8FvZTzbCjV1WadHq8At6z8C8s97wLdDyCPaA9TgcViUue3HPqej9zzrsirgnaEKw",
  "key30": "5aVPRmTt4oqmXP4R32HfDdGVhcKYs8MEHL1KD6nb8Aa9ze4uF58ypc3EPcfNaDv3nWax3dtZf55QS6iNwo5VqA7m",
  "key31": "DH7zUTkTKu67H4JhCVZXatdrqVWdidkbkbQeYoBnKKJzQt15jtBAAoq7XDLCd6yufcGAu2znAga1g6w7UdJpgNG",
  "key32": "4Cc38Pu9sj2WxbSTFbm5cCu7fw24uAQS9Ycwi4xtm8TVzCTpQKb9DjKctfu7f8Lr647pgGJJY2MjcgnFXV7AB16n",
  "key33": "TyqaBmyiKegmUpGaP2akVBduncCmezPwXUDXLwWi8uu7awUZ5kRXnN7t3GmgtyRxxtRLxAGLZNWG8vZkTshY3hy",
  "key34": "3u1dEo154TMtAhYXN5SQSG9ioYmKxwp7jZM6ujDNt4nMPrJE5uh9UmSxyeRDcsZRf6nhhMKwH9EkyuhnEP2MhTrS",
  "key35": "4iTYgv3odrdWa4KFvvXN8PKPUWVQjbyTTbaM7RvT6dZZgjoxdjJdE7SKqzJ8ZH8RGAWYHA7hH7L4Ab9jipaFwJmj",
  "key36": "3n1KUs5BpXYCzGroCYCToqg2Qd7vWmLPfjbDbR4i8ADxSeQ1qwDHatqGc9RKP1FHQeufVotnDcFHXhvnqHjQf3DC"
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
