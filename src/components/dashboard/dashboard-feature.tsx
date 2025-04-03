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
    "4orh6YRH5PQtudiVvtmnzZob2Hv5Y48JePYY1fRZgXAJkdeDPYdMaPMFWLP41Kk95BFePd3K3S7o495gA4xXTZMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qFxtNf34WfCpQChechMaeRrV2GhQNVkELAaKc1VW7V3SyVYoS1K1PeduMkbPpzAtfHDVknwRx7w25ZEyCCewnp4",
  "key1": "2CnM8Z187jEbpP7WUZcvByLKWjd2EqYMy77BJHf7Y1AyR8hSkJo8L4DcoohktcnAp7u53vHaSgHMpRgVq5Dd65dy",
  "key2": "4qL7YoCyqxmnXKPxv1k3c6snXiGavbeYVLav32fyfL3GJ3eu8cH1YL3T11a6dGQgy9iFJzunW5DimAFsTLnTqdJu",
  "key3": "2gmPWMv4uDqQLa5vBcvGpJoDa3pjGsZYXReNXq1Beistu7UMnbc8wSawGMxNPeW1PML638HbRCq3puHGms2Q5W15",
  "key4": "5oECkVpk2pr2Esq7wjC8Q4VpBHLxRZDbaJrVN2oHx7d2bU2T3xWdwysETcdr1a2yGBjHi8wASriete8WRo6khbGF",
  "key5": "gKZ5Qgi1VBK39dTfUXG6ufcwLxYDgX93PrZ1FtKsmUaiWAPB76PEhiuBDNDDXRwC2QHoizoZBwfPPkpmWjNASd1",
  "key6": "5s9DEbgK5Hszu4YYTRgMyJ7NE7etTWB4PZz98v9hhrSapgV5puUJcona4gxRzRPWwbbUXU3fAwrNAvL5EHQvRXRi",
  "key7": "5v4X1QXGSPvftQekATHB9iLForYJXwCU9KuXQ7VKTJH7cEtLfPbb3vzRBE1BScNP878cYmpzaVMTMCvG1N9WnYN7",
  "key8": "4bhTQd3DNkBAyNMt7f1FCC744tBLdYsYSGuSnFuZeuvs1uyefESxJ7c3LFJPd1Qm6eRTevMDMXgTpnQNGp91RhFG",
  "key9": "53RxHzh8ZBt3tr9JSYpWwCYfyqDQqZr5q13vrvi6zk5t1Ff8x2T1Fpvtmj9VtWNAsMczqeYpzXu7AfWKeKcWU31m",
  "key10": "3UATRUHZohUZMTQdpT6YEvSLb4vLpPLM5C6zCESjmoBS9kCiWYJoQNprrKz25byFAWUiUtNqZRyebgBuYesJaSvf",
  "key11": "1NTZj3bccepMuXU5w8fXv6Ui7xHM6vJkhrwDsYFwHFpNJE3xvkmt9RyqhZZ3D8e3vqHjNRf3WJBB4fom36Gn3xT",
  "key12": "5UVUrhwni2FsA55KzE1Ji8D63qoFhnM4rnmyjaUazddwd6WxZJbmNdHuHAyhFrYwHA7ESuCHYN3vJKRUkkYAQeb8",
  "key13": "5XYVB84uHFNZ34aAYnBaawMVmatK6ZuDTc5h7UDUeADpFMqZ4Liw3WET3XEKqXYGzYkDmmN476Htu6aXJfTrAacJ",
  "key14": "4z5fFwKu9K9xJ5AzVcVZdjrhY5akc5fxsBK765bQoWMUMGME9GWVuXWJbMFEqtHNnkiQusQwtti7p6BQoS2uzUq7",
  "key15": "YmMy4k9tSk8KsW3JtRR4KG4eYyBhaDjJcDmcvgVAxRnowng2rHTqXZQ2XcDyZT6dTPg1i8PEjuZSQ4YrTKE738U",
  "key16": "2gNhyY81Uzz5FfjFSNP7YhDPnuvpFU5q5wyHT39jWAKnBfs7qtWVPSNPYHfSuxpTUGcMwBNxLTn5ttiXVXMKDxRv",
  "key17": "5vuQeRiiRHeQBjL1BQeSzCrZdfka7HcQRciFTaXsR9or6YpqNze8YgdqmUsU1JgaFnLRmMdQpuk7MU2RQMn3VLVz",
  "key18": "cmCNDoz34JKTjsXwrUUXTgXP7Cr9LZ1SE1CvqhMi4efWa5A2wDPucqp5w8Q3sgcxo2a4ZNHiNKMrhh9NDrrY2Wh",
  "key19": "3oSQ3ni7SC93a8qRuRg1mgNBhgB3xTJbGQZo1rXZg4v3GR3xmYR9r1reoX7G9iqPkfdPhn2opYDJojRtd5rqah88",
  "key20": "2BZosTxTXMUNgHCMbgqLxr6677VxuuLKyNS5swDRe7EE7J8MXj5zc19EcV7DmQPLCczUDrJmoLvSzw8YK5nk6KkX",
  "key21": "k64CE5qUVNtRhc7CQSifXqgwQGy3eiuPdAbCVeB6m2YHp1VF16rYukM4G6RCBqPQfvPE3zyebXLvDvVGoqm1WiS",
  "key22": "61dvsi7wqvFu5LyqBKNVBQpj1aGzsNNQG1sd3CFGrRo6CeFq874c2RFSYrcLHLzSkve1sYQuAjzZpjJB5ejNvksh",
  "key23": "5BhwDVw4yy7j8GC5SvTYG2AMkfZ2RDVzqEuRZYshyqUzevurzYW3CZm47pFYaWvhtKviHcsfwkcrV7NmYTcWKCn4",
  "key24": "5d4huLpHYXrxY7LeNfahNRWMXbXCLqX8d2BvSw5HCi4FLjVztkmUNhQhMKpJkTbZcqqzfVMgt176Caydf29j7aKK",
  "key25": "3GYkpcbW4KPjq75DQXUkn6cRdRnDutaFnNBQTGLxBPxcCdLUXdsGxaEEfDhpB1hBVUDuwghRjeRf1vEwke8Z9tKz",
  "key26": "5irhGfTBsjyJjakUfDtgMLbcLk73wdUpSb5HjnRsh5szacir5eygWBvwqjoWfhsx2iQXyNfLCYK4X78GmsUtwVXg",
  "key27": "3DWsLy5P3NQqK8bWF5Wx8c5E8YUPcvcRggUPErnGsPZzDBAsedVeg24EuNReKddMgRxpimkWmYENjNn9TfrjX2q6",
  "key28": "4vwcWyHfcaGPguLHMdNxaEiEFqduSyQzeBM31WpHQbeCwcECtgj1oe6R53tU39fz7zuDwkjehJaQ8LmDDQeFrtJD",
  "key29": "35zs9UU2Z3HeD4SmN21Di4mHwT1yGJJqH95BzHCbUhrQqGihYqZcC7mdxeN4YV2CatyDCVxEDycUdSCrPwAdp7Q6",
  "key30": "2WiPKFic6Mymo2SmPuL36SJw8Mb2s11yPrn4rkV2c43mMrJj1uuR63jwmYhGYZbk7HFwgTykMULXQ75BFhsWu9rD",
  "key31": "5j7R7K9CJ2LxqbSfBYMrR1bqnHZwvYLTf4enNzGmrxsXWbtxUWgUBkiJJ1N7ubvFnx3xf4nvkXgyKyyDVPdiZNHD",
  "key32": "5LaV18qbZYsk1Mxw5ggNaU7VjeoGNJBvaHN2jboP7DTzZHg2wNECFfx9G1YH2fqnbL1WrAPoFoc3dArbJWwCBd7V",
  "key33": "28fYiyRUDsNVLWn4SpbNeJ452hGtBdtRL3k5R78MpHGYxCw1TikscbEsFAYaWToBrDtdfESJQCQcbDjFafrYJfgV",
  "key34": "42WCbAJ6pcLkUUKayCWg658f8tU6KAxnSV8DxiCUyZfjvjmTbdYmZL92gJzmkU35MFwEsMPejj3qdFkntMUVXwhK",
  "key35": "5vXdQehQVMUjRF3w7xN4LK5DfutaungVSxE7frq6kky5Ras8W8NtQTq66N2pmx4mMQMnjPuJvkrWFGZHGbDZY1yE",
  "key36": "4WUqomEMACZiSvK4fe4Lgvgfr46aJxD56AdndHSkjLbXnkrC6SeLwxiBv84dVW3YqrK7kE77bRRUBaReUQGfUUkd",
  "key37": "Mxk2N9NnHvtNfF8uevD5re3zD57gHo68SoCpjsspbzXK1wHvWDNAedcV37zFRgTMNcsodARSD96Kr9DD5vj5s6t",
  "key38": "nBiJy64EWmrWf44nVQJfEi2Jqy8DSoJ1HuE7uqYDZy8vndkftXnTCq7CV8dXutrvNnAzA9y51PuA9pN7beouSDh",
  "key39": "4MpoJCqghcy2qViuL5dC62zFWasY1FkzcBo8SSnEW3YZb5pNpXoaKpYBd1fAqd1JkY5qVx7Pht4Vtxyhbvk9xjkN",
  "key40": "XdeEh5iSvuptpC7r3tcELDxfY91DQBUkm4MzU3UVcpfbGfbJ5BcXwrPyj5scrq6LmLHdJofABKgWfSndcUthBXb",
  "key41": "2GX7ShgKfW4CY3gqJSCfZSKx99k6Pf2KefbNzn1aqeh3tArbSmkoPoP2Ju1wxR8ovrMhtdjXLVmxrw8zCJnBimJE",
  "key42": "56XFc12JAM53cmPx4g6QARSa8SeT6Y6AckpGK99knWoN3tdvNEfH7F3b69ddcq8euavrQrcWLSYn25cX9qBnzj9y",
  "key43": "471ZtUDBBqSykFbnGnmUuERLNyYbsQKtLaJV3hpAH9ZmKs7Fdh6NCiRBuWBLFdcE5HMDyzuMcv6q2gtu6njpgYyt",
  "key44": "38A6HhoQyj8RfUT39P1uLfNqgR1QxAbf35vDhXz3GBQ6hSTb5gmvB1iVWvRhdXZhAghVjdEnXBW63pHv9iRcU2rK",
  "key45": "2XvxL9mvfPuTGmL2meeYPqDBCYTz95SVNJy9W354nz6MWWV281EFRGdijAHw9TvF3CUQFrpAfT9LD8TXWgvDj3sP"
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
