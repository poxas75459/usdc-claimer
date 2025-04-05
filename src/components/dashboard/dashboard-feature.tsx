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
    "3s5tdZeKCzGsvik9S8QLTFZMDy4rQ7EtvnBGtpE1y4buzSguefdw7yXm6uZK5rHvAxMmHc5G6Byzxb8d6U3MyYMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zbx9FaXpB72G1M4hNiQvrMJEU1AEcnHA493gVnP8fo8y9u3MmCPpWAenr3Zqo8D2smzvBRMcSRg1RmH7un47iRx",
  "key1": "4uHvPaz5s2rjeRtr3Jdh3hwFt73y6EvFkdZTpMhZFddQ9qTRHcfLfunWGFGEK5fkB5Ewe2jieXss8eJ7PDY3nbHW",
  "key2": "uSGPd2G2kGrrCFVnBkQed7ojYDRM4Rhoum2AzHGwkGwA1qXDWmgkCZqPmeiFDUwjKnuuKx1KG4vDCsC5NuW1p9N",
  "key3": "4Jc1X1LpNnNvRgGusE4Mx7PQeMcy5MZTwpXNUfNCPhADmquUSmJhhjQ56MGUxK6BC8cggsuBCnCk2zpuyQrTmEEW",
  "key4": "3ehfgYuDWv31d7fGbFckZgLav2fbVuKDh2cVzY95vGyG9Y7acNKSLY9Nvay5oN1rDgN2GPD9XoQyB9FntaugSs2m",
  "key5": "hQ7mrbxG9QEHkgFmdNuVkWaQ7LK19UNvjhx1ssdrXyZpZHUcrawfrbditvFyZp2qWqthNmdNrRuAM6SG6CrTKiB",
  "key6": "5mtfazpGnQwX7QUrdZZLF8x2oj1xHCSkiCZKkgXHuPzDnx8X8g1vXGyFbzPiVm5KggLVHv5qLEpUgVARjYUazEo1",
  "key7": "5YHw69cE9gZm9uSQpcmDEr1aZxYfrjtLCDsmkzWFDP74vTpwGDt26RD8Sxq6tKwScwCj3f1cmQVXkeAm5fizz6qX",
  "key8": "587wjnV5RQjxGT7rjvWMgifGxwrLA4VyPS4oxUa3h14xdTwkC12HP47xkrvWEm3BB46rp8qH8SfB2S1twWCKQD8E",
  "key9": "3HCzobXEm3FDHXMwnETbhuqu8qr3akXVA16HtdgPfiHxSQuW37r1FY1F7DLVYK6auBv2jSZrPvC86GBtnXoKNQZ3",
  "key10": "5JxuSB72BEjSo5Hr2Dq2oTrkjNKgoSgivEZJPkywd1KZdxtAtRAHG7sLisLdtpCnft6DxGiDv2SYNzSLFxgSuHi6",
  "key11": "PFHtw3Jz9d8CZoMQ4vNw9D74Tj2paB6WmV56TWZr3Byg93GEpBS4yufLq7aWCvdqenP1wHrKNZqQPDmTiRSJf46",
  "key12": "2K13i78Vrzj9GAEU9EBMiPnW71tc2u6LKnz7nau32VgfTQ1cWsfKirQrjfgavgpXLXTDdoC1cbBrTf6h6bRqkpRB",
  "key13": "4RZmici3WHYxPvjoK9FAv75D3eQxDP21CNpSPUyBQvWXvaL3VAF74zoYXQUZFD2nTNTHXyQtTnEW46RagwfsLXVe",
  "key14": "EsQgnLCaCuMmVBEJJEuXTKWnrFKULw3MzRFYBZkLFHWnGZpKiHHoQzDd7bEwm1oVVWwrDasHWM8Xm2cFerd44PP",
  "key15": "3m7qjVJpQ3zzAenFjDKpyPsyDktcUqbVAiDtPYo3iYJncLLLFercngcpnF6pz59MC4FthdT1iY5AEFsnCzXyHiCq",
  "key16": "3ckoADj1ke8z7fRtrPQAHg5FJY9KZduNNV2rNiK8eR7181wsFMWr8QuQu7WV8KW7X5bYSWwooZepG8szAUDeYjTq",
  "key17": "4toVNewHagzoiDuh58T1kTNaEDUAPUFkMcG546YHtTyWMq8NJrWhiYjKRhfg6xaN1nAvJZpMMCGog2CfyZ2PEpFt",
  "key18": "2QJ48Q16dfrZLmqMvHeSUqrJbuxv1f75F1XGEmbEvx8dRdE1v9sFKwcBDVxWtqsxak8KvdtoXwpPnKHPDFUb6r3R",
  "key19": "3122uog5d4zyu9Dxom8UYGNQgCbTEZ84tLFXa6TKuefGWoPVpY5Lp1xj8BtjZbpknDvuXxPXeWDahAyLZdzkToNR",
  "key20": "4d3GMHYsb1DCJLG5tNVi18kLbdNjuFiE6obL6oyyKPyZJscPE8G49MANr7xnzzyCdHirHL7XS2EfdMLtHZ3F5XuQ",
  "key21": "4MV4n6wwHCQXwmKuSVBEZTC4HkTKCsUyVSnwS8acoT81dUMU4ZBKgWFEA4fK46hn5qgahFdwnerz5eq4TDzkmLu2",
  "key22": "5aTwevbvk2MkJfRxQcCFGcWQxAsmrG5oKWpDzsqQxchmaLkXCUyeVKbPpsbB8VDxk6PKCeHbfhhuRm43ZtNdYxSM",
  "key23": "95seWUqXjQMZeZMevGniDaZ98bHCT9RYEyWfknAzEaj3ycovBcW4Ud6cWFkwj3rux2NvW4rMUKePjRzfyRDkJcY",
  "key24": "7WhcNExhJEuxyEFiKBA3PHYipaZF9fWqk12w2YT5BeJJdVgnSKomxi4SBr7GkrwDopezJCN2pXbdFwBqKbjbUDE",
  "key25": "xhhS4gCEq4j5rEzM34D6pLz3Fc2V4Zi6FKAagmt3WtwqtZvcFniTFafBafn49SgrowZ3ffGV8xiwxRWnJPwsc8G",
  "key26": "4A3zmZhYxzAeMhc9tdknqp4qq1FAsWhZjWWQzRrVzAeSDAZdWVqA4ZDJEcBJYdvHNZ67vt4Qou1tYnFdPDwaZXUU",
  "key27": "5cpQ3mkin8MxtXsLkqnqp4o5kCs4kCcJRLUCGJdkyQnrrX6G64KE5MFEZQm9za7bCAmjRkJpBNyqNWtqzRhz2T8X",
  "key28": "662Zcio71WCoAMEQDB3LHqxteuxdL12YF3hP2CwKoCoord1Z9dRztqpzWuPjsZKAigs6LY2EGWkyHzRCMqiuZNDo",
  "key29": "2R6uLN3JCoHc1dCYLZQsmbt9cLvSXidELXEi1ut82DmWxMtjkujXChafnr3TPFH7X2ePwZir4Soh22wYHNQZvRSV",
  "key30": "388jkHBsGErBVvWcZTP6AEWFih79KUWm2AE25qvzwn1AP7YomSQkkaRnYR7htrGzZCGkzDbYQWAgSTkACjT4Bfzh",
  "key31": "2Png5sjv6Cavoom1VjsjrqiZAujrE95eVzwvKVA6heeTGMC9Jhob37yFvyUExa6eRSkjnGeNj3ncsKmMBpoYBeD1",
  "key32": "5VFrYTMjF93MarmhXrQ4nhWTyJ61CFPo3rSXUhFT9RyEnW6hg3Xh2t7cVhrmjcfdsexAFP3i5U7BQqFGiVyzV493",
  "key33": "3NP2KRSPuRQcvDPoQEhbCzpFxxSWsXQd7w8jeV6L4HziSErGHeuM277Pu6jS7sV545RJgXbHq7pARnNMYF93nX76",
  "key34": "5ZA7eV6moXyWLgitT18pxizAp5QMcVgDxqR7gg46HPy6uA5V9gMYJvuUWxX6oa8VYCgd2A2imTrWuEkkYJznfyhy",
  "key35": "ykfduaHtC7Zx2gFXSFKZxVCPp4d87uX5o2Z2jrmmFiYNKEMqh8U4XBjH2H8rM3dGs4hgnV4WQ7t6ZtJcFck9MX8",
  "key36": "4qS6TkMrV5D2iSAZuSG88TQcH4kL4JhcDATTPkBjzKQkbtjAGaZrBWjoy62qYtsbGmUqhkMdJwWoLZcd9HKc1QS3",
  "key37": "8EP83qtc6hJt8ZkMeu5w5Jspxthy5uyoeuPL1pNZ2DMtyBHFSszRE1SrpJZVC7CTrMiSToWfWcURjprhibvcAFm",
  "key38": "315QAusg9SU43cC7tq9kw5BLcRdHoD4YxDjguFyDvsqHm5Cc6b6QrAc7SVQoqhBwYAPUw5RCWyuTDJRb1U4tUWHD",
  "key39": "42dnWSRQvvhBZzBwmWGbqnhZMF56YevmArsp7BJiXnUcYypDQk2kmYt4thYj2SXRTLqa4F8jW8FSBjeHeJYSikzL",
  "key40": "PazUqDGTe1S6m8zeUs6FSUDLhG2uYzn8TRSQ2hYs9tRZmzgz4CqMKAbGKL3vTAyXe2qTQoWhNzUhqfqxzjSNYCH",
  "key41": "5yPMvQcsV9saFn3LVbCpfWHyCYSsqvE3Fw8TYBhdDFonFQoREqjJ88Fabza5XmXKH1CsESALPAFF23FeFGGMkwEL",
  "key42": "GPTcAgu48WeaqyLw6DXFFDSJajatcXTzbiK78Q9xzqBsLBdet9o7YiWHMqbMuzSZMdEtThgYwBtrPW4pB1TPqHc",
  "key43": "2LDrXgJV7iEZ8xmdJMpBiFbeGCBG1TguH2MP3iCk4mtxmxjg2FLtpUh7Fajnu9HkFSPTyaYXNrXVAzB6M42y25Hk",
  "key44": "4QbzZT7S2XfcAzmXez5AahZNwSz4dbh6oDMZk6V66tehWcLPEW2Hi6vYpKVg8sfPSeCDWhGK2uvr6LVYibmBt1cq",
  "key45": "55AhCF5t9q57uFUnckJn9ThtLxmJBZ6h2LA7TCcDhvKS5Dx28VVpNcGLwVpDvZRWVbsp61jQrqDWkcX7ebSJGdEb",
  "key46": "4QK4QaUr6MYRMWG525JGD8J7yfNEDfoLBWxS8KFzcN317wJMheARc7uFsPD8dBqUTVWC6csrM9sYwWQS9PSYS9JG",
  "key47": "5BSxXkvxK1zzye2XKSD6QPdsnsGfeUKX34iowHMVh9wevMhTkg2nsEx63mLnJ1V57iBUoCmGQHCpjfhcihZxKqh4",
  "key48": "3p2LZSSmMyNUe3qZCSjoaD95e4oqAbCV65mHDaR1rzWsV4BB8saxy3vXAk5n6qvSbRWmk7NbAeynZNVA24oLALcW",
  "key49": "62CyXksFyku1w8QghmwKuev8hFuJEFJ5euzk8get95Xo7RaTCNtFoF8VmVANGGpLPM1RCZ1rhJ2XetXqshWGT2wk"
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
