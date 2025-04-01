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
    "PwQcvTgsDoFDVZFCHourKbYZk916MQ8Jo1W7uQEzn5MGyAJxGv1Q5FnvQK7QPbstiQ77f1K1yVcWLxkLQkGh53x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M6hUk2b9J59tpri4gZfcdD6GZQ4JanFZXqb8pmfimU7nHR6BZ7YUoLPAmEJmDhN1zcuvcf79KfM4oVoThBkXyag",
  "key1": "2qG89d1rGR6f56gXMyCnG2S1rtBnFsuqAnjszoNSpifEQaGjo1emKy3PJiS67ndAvGWxMySSUj2H1eVPWvrGRuny",
  "key2": "JtPTt1oNkv6FFdvMQ2WoVsw1nS2a8BewDU6m3EvdyYKNTCHz6zcFHcJ4H4xuiaai6pkQgBzM6feNAaXFbby5tWT",
  "key3": "3K3Dfei4eiUnDppa71bpfFXpH3Y8aoSoJk3UnKPdmsiUXJ2VW3pnrsoS5Bj7SMq1oy19rE8xQNK5Hwk4XRy8dNcP",
  "key4": "4eJrzUQMhk8vCq6u3B2KYe11hzuAp3tLt2FLTd2mKdzP7CHFXWgAmukEVBuRtFs6kWNxi8Q3fV8Srw3rEhFi3u9J",
  "key5": "4LuqAtDamyb2YttnykU4F4sGHkca3kK69ayokmbYh7dRucYwhCJxMi615ANzbyRAY5TqX18QYT5wppbc5APW5dup",
  "key6": "4RSgHNKnWctU4wWj7adMSwTB8F68SM2BHeEwaxn7Qutme9wKnMACBhEdDxDwNCq3KbXeWq1GoiQoYQwFwDrfeUAi",
  "key7": "Ty8e6jHTZ5e3Nnyg3ibCPDxSab1BgNuUNoLSw5gno74f1xEp6iwQGoYCB9x6G2KXPivoMdRa4ymUEWRdvmD6sf5",
  "key8": "51FJw7Puat79Gm7fDZ9iTTW1U6iWMFXsMA17JbbsdNXetoa15CyE9vUBcUfS3rW6gATm2wMraZdCazMhPUpmjc9e",
  "key9": "9KjfU8CYcDrfwBEaBnwmk265SEG1ohGksJSi9JePorKdVCo1Y9YapFe5r8hn6VF84KPAh1zULhChqNzKkughRHj",
  "key10": "2BBTjeZBnn4o5kjTRkfs9C2Bz9pHHUXVd4puCUNYtprHG9CMjFV7gzLBHY8CqvGt5S3D4qRhqpCh6svsmSdhvEtZ",
  "key11": "4EpP43jCWh22HPB99u6zvBCRUWzHu53jJpUDHDdiAQex2BEvxp8DVAaLjFiDGDpGjZEJxQT5RH1PPRrgJ9uYdifA",
  "key12": "4FWNNgnYVskM349xKTVWi3U1T6fqzjrgvUNLn6SbgAiAXsJNzBQTFM6ZfMW65oCgjobnzVwMGp2hN5CPy8WxTkCq",
  "key13": "8wNwHknBowWUVHAEDZkmm15We84h1aPjMXqZezkbZ8Gt7NUgDQNX2nA4k8xX429Q3Hvd6Z4dETsBuLa9MT57Rg7",
  "key14": "5RgWBHP15tfC57HbpmH6FijapYWg3g6dqXFYY7pPYgs1b7VqFsWiAc6e6asuFCRcJrkvdaxMqjb7hzPk1Xv1xoNA",
  "key15": "4jCLVsvJXBa2LVbMFAs1mHWnEBBb3SJqSM4ZG7tKUbrJU5exkx9v988UWB39p529s528ZC1hSSppRjZ1xDFsPs99",
  "key16": "SJqnGpe2LEi2XfV7n2WXcLd3tbz5fZVyronArjiwFNosxM4J8TqedUStJsUBAynq9DWHcBNRP7z1TneHqyaiGwr",
  "key17": "2gdB2ipoRDyisxmgoBa6X6LVL6Cdqr674sXLtMMTvLYACsbmDnRGpzpsdd1QTM5i39UUGZL2kwDGVc8BU1jrLwQt",
  "key18": "2ugr3wAPSuf3NtwUjtLTfAs6ZvCpzJQzkAZtyuZa48d9QvKaHjZiLM6rgm1zwTmtBf17ZmHk4iB2UPmxfdviMFcw",
  "key19": "5v7owfBNQFc3PxCLME7X4LLxYV3cJAQQBk1kimKugs8k85pScdaAUtHthxfkPPVEzXZwyin5Qz5z5G4NNLuo5Yn7",
  "key20": "4JLPWrqr3wb1KE8Npby1Sy6Ddy2kmoQFGNtjDbuMGDxCdep2gX51cxY8ViDyVeeg2dgRtJNQvLs42ukF7FaJ2DWP",
  "key21": "4G7ocfJEmuUCwE2tm3sErfcyrSHaa8zKz4FSnaGXWN6Gdpc5FxU6DeoyP4itTXvjt693ovfdNvFzMzNiBd3yJo1e",
  "key22": "3bS9uK2fbhEH5Vyr4dHk3hYZF9wqazyuwQhwo5SHhAkC6zYvajkh41M7zBENnr1HibqzoguKjoUMdWGyn6GTmYPL",
  "key23": "3VdQDMmpgmN8HsBJovG6CZaMVZpvr9jSuQhWC5RKwKW2J3tR9o5RMNHmQGgVHANCXrWNVG9mVfPe4PErctKZ5L1n",
  "key24": "2gw6Rbe95Nnuu84gpYHB5EJAtFPM8zuAfRh6934gFexEaqmvH9vqfvQXHH7DmPrDNctEJmjQBmbxY3EBvVUayQEx",
  "key25": "3fA8uCyNEFjj4qDTc5wAuW8VXSrYxSJujZUebzHdMwNZtccBzy7JFSjHdjoB5vbAk21K4SxtAL8q39eGexpHgdre",
  "key26": "2fD6jfqkq3yJdmvZhyyRffjVkT2ygqaRBWPXFvAMxVV9oWN3cXMU2hSZRWNgCgYYK6UZ8BepEx4YvYPy23zGYfEN",
  "key27": "2tYRcRFfh4uoUCLf5QLS4ezgDE6REVUQogPqysXhARZAVhn1e7Jvig6YRJExdQ3G1vKSpjuwhggHtbHzspUmjzqp",
  "key28": "2P5VafrFHVaQiRD1xPjfrAL7jPfrcwoZuHiMhU6zYgM4R3FqyXZQHWcjCmRA1JxjzDrxWU14ozjQkaRdatUuuQDF",
  "key29": "5oafgwZTVU1ZgB5MPdUFfRgz6RGDGawVAGibWSzbaZRHTu9gNPgnHup2KLpShaFypfctj6M7rawxEbNJ4KT2fcFj",
  "key30": "39MnYmJBAC27wuetfj9NrorgQ9Z9DxdJo9Axutgkfr3Xj1s2c635HwrcvGtMehyL4RbuyPi7vBEzQXJeSyS5un9P",
  "key31": "2hVoAjA1vX1X1HUbtZfrTV3GBzj1u6eL4CbL3htKKrb9CUZD3qZvYu9NeBkBvTiGYHSJThS31KHQRr1HFn7EJv9c",
  "key32": "2oXbh1pFgZCxkHawFpJmYr8QhoxxxcxHCwK8FRVmQkGiEjeQ4gAmSfxnAx9fUCKWNJayrVmjK3jkkwnYjtAYcrXL",
  "key33": "3SXGSX1gWwtTm3rVWTZ571Ufegmb6r9vtfhyx6s7WcoavP7qXPe5ExAZxrfN7Qd7L117gpVadKvcauyp1fy9nsHu",
  "key34": "212QNdjhTV4Ux5fMzFE6X2B3weKB2WgEqdMgp4DHszcT7mn1x1PYofvvoYnCymVqUDZkckRKR6TGe443K8pcxL37",
  "key35": "4FZ6RfqTgXMULFbptDAHeUjmn39YQj8bb87ZuTuhqGXVwWWQuBwHAR8xLFdvNPs8jimLN9bF3V3TXr97w7jHXxSc",
  "key36": "2bFiVzAtMHNGkgs7tBSvTtfzam8sU3YVfKTkcofNxNxfJXFNWqgRr2jnLSMuuCR97QMVriECeaqQEnseaEBxs6GD",
  "key37": "rRcdZ5CH3Yq9SU27WXj4dxmXK8vynqxeK55nGgadK3nrkyUQPP3RXbeuuY9LFRPbEvRaZ2Wbz3LpFK1jC11TNJq",
  "key38": "3r37MwsTGEoBXYoUGa562g5UBfSapmNn2sbu2XTbWiFf3wqHAhyH165agy71Xstt3UBz6PLPTYvvdbEgZ6pSnkNv",
  "key39": "29o49qsTMKZDbifYjaECa1sKZCLNJUb6uW3CskBDKR1kTxMm2K8DcMKGbSVeVcCi383kQQUEjZwrdziveLYayRVc",
  "key40": "3p4BAmg666nLUM5YavCSCLn2xTG3Rccu6crUEdJjgDGeMyMrwBnRLN3VABipkZQsYtA77Mkj1ADboz8EeBGdek2w",
  "key41": "5jsCzNnvxR2Nui3Nh2em25RExKQLikYmYUNWDaowzvgCFhPWoWinexc2764h1hXQH8YwBXKmfLPKxFp1NXegVFCL",
  "key42": "t1zKoNafJKM5xiPrYXCjeK83yXXt2WBhRwUeejgKEeQt9jkhBhvzXu49Fyhcv2kajhUbbXu5JnFaUR1RNY5kuuk",
  "key43": "kUXMEzyatMTHUrPqSqP43uQ8HswXWPLam534tVk3nF94aqV6c5PQRkWcHbpAuXNtLmNL5YLRiaxckkyPw4QQzTn"
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
