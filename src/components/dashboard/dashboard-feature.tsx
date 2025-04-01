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
    "646jG2FPivTxW2nQhnsez6xfSuthXvigX7VmGjsZgHmT9xrvpj1NUrWoJdLmjrsT8Z3fEpF95zjD33p1EfhxzV5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "347iwon4hiqQEYhNcBpzX79GA2fJ33gg5CYap5yHrmwnMBttT7pScELZGr5Dm67oXmE5UdoveA1TqaNCLH1iWS7s",
  "key1": "63AsHQ5tfmHUpyaBbH55ZjUC2aQuKmMqzPiBmZwvjUugAYuoMVhYzZsgf8qKDv1UWeaswTUMBzYFzFb5n7ULfwTT",
  "key2": "3RntRqwecxxWpBHaQ1SHKhfhsN3i7KYEcdfwy7yW9aCe7xni9afdr4tcmeeVHcuccBL3uNQJ375oQHwYvmChXVtE",
  "key3": "4dAbc6HgT1BiQkRhrouJ24Zm6BnRi2wxwoY9wFU3S1JVFphTVq5C32qYFkQgXu7wu8rvfKyyA7UuyZJutzxcCtRw",
  "key4": "5BCAMkCXRKC9VgZp4AUi8zvydDiisCvSwKV95hFxbVTVCH8oEKa1uLCjJDepF9taKe5FSAWuASMKkDiG7CgkHDA8",
  "key5": "3rMCty9wJALSBQLPcZunZF6dCUdM4tUt1HHpgy9cPwTh1L2LMzc5HE11aHaxXT1zMBzZdaYBEbuvxRbYbmssaHnp",
  "key6": "2eXiNSmUtUbcMmx7HHXVdsuP9Kh3XxaRXYyfiTaDTcaLMbThQ7GHj1PkzE4oy6LBg1kxQPuqHoFbGShfSGXfJcZx",
  "key7": "SyuGR8944chm4LCimECrAwgBQYP9i9YuwLUK1GYaTFLNdfYTCoBBNYfN2PE8Qnr73DKhdx6c61xxdccqiHyCQuB",
  "key8": "3c3rNPy6BzjCjjhyNvoSJ7MXahvYHsWmSWi71NbQmvvMRmoXsCwhTv8ribLUFrdNH3wwvujk4y4RKosDif1qocgS",
  "key9": "4DVyL3XCtSQgWPL6gkGY2Et8oaXbH6qkBpdRenPB8Q1YxVaf8aJbdtrwydo1WqBTFAJLfWRpSW5SHn8BvdHzU2bs",
  "key10": "4AjQMdqTebPJguwp3F6GdyH8gT3AU8gdEcYDNmAgHJRu21sCjtnxvEBPWHNMk2S9wv6hdxEiTqSsLNrbtMmmtsw3",
  "key11": "4VgYAuK15SxEUWJTik7boLfJXx3fYYtxjMD7YcdxF3AjgxQgqtc5rTE4cFjTaLh89P4SHD5Dx9RMn2CaAshfKpBq",
  "key12": "cCUtW626CULHvkLdwKSrzKDntYrGvnqRVaf7XSbTe58CqvH1FXVbeL27mNCB32oBMeSJrjSvSjNMDZ3k53HUBZf",
  "key13": "GnznABH5ANh8rvpJs4FRHaFsfS5BHEP9kRmyFmej7cK4fSKkCfqVedCkcfvUq38eZnx7WzcAJwfPrBspoL59TxQ",
  "key14": "Z9nn3XKM5LrJek83vemRjehy3qM8qn89Sf5xaEvnSbhLBxgbhxyRSK5iJtDMQ9ACsZRra7DkiWuvA3aqXDpx7vk",
  "key15": "tG1vLjtkubENEzKENXuerxvwUWX7fmVJjwqRizop5hzu4wRLGSrS7m6uTYBbgHsWh8WHfjAeNCkmkBtBMptqshp",
  "key16": "RvD33TFJ7NPoPEFbYBD4mey5KhPo5Lu5Z61sMhsem1YhjH1Kxs4GghdurPnYGBPGc5yWSr7JRTKDLZJWNPEeGMT",
  "key17": "3ZG2ixs4gmdzbEuJVipo45eU4sHTHueEmrQdSFUB792443x8YmzFvSwBNaBCfoTdRUP1sn1iLL27HUH4ziDjqHWM",
  "key18": "24GEMeoY2rPyzh8Ca2XpfpR2dYAEWSy5Q5LJzJoKXm5jXaH5W6XHxJgA8K8aiw2qdTx2fvTZ5H5CvVSfhYunE5yP",
  "key19": "mkQJpPH5BdxjZMooSzQT6CZPFEWFDV8Gb1qd3eBUBd7LTXk26XRSf7M7jvLpQQsCiGse1xtxsbsc7a1tGQPkgQk",
  "key20": "UJbGpGSYXrhY4XjCyuHjcinCs8G5hfFA7EV2ViEJaudXE7Vzu9iSVjVxmwF8eidKoBxt3kCcLdBkr6YnzcniA5J",
  "key21": "5av1tYDgZnHE24FPXzfQT6DtXLYurSUt6u4uWdYhkmCtAs14AP5ZHdzo5t5zo38DEzub6wWASfC6Us98bBqkKPqn",
  "key22": "VFSycezkuhShVa9uUburt12vUxW7j8GLk5TSd1vi1xdxsB7DFvCYTuaaeiZ8w8Mhz2cjNdkLTp3upR7CSQLUm3f",
  "key23": "3DQ7phKNsQMC8B9aPqJLQ8pSywduqd5ZD8XCXU3wueLhQanaRARLVVPibUuDjFpro6ga9sCPRbyKCwQUmC1MMSAy",
  "key24": "5GUYVU74dqzmHQzWf4WNwrgkN5HHnQ3T6fvJkWYEb2sBAGQB8r5hgX9jhUjQoTUjswWF9vaL2eVF6Pprnmt8t7pU",
  "key25": "3tzcahpxVf3fz5u5KepvFdnToVQhgSH9kVKfwnrMgwrqrdCenshRZybqFC1SzfZdLXF4pApiUCN7g93ZCVNG83L7",
  "key26": "kGyL4Uuouu6pdv69bWh4tNZgwcTeitZeQv34439Y6qWGJ24aByEbv2JL3DyrdKKc1cRGTZdeqHLXeGU4cN8BCqJ",
  "key27": "635bu78Y8oANSHBFMrHky9QNvk5c3K4H3TZUUTe3syznx9oGxD8aFjTznvKZUzikj1rwqazgYFAY8hXRyzvAinsU",
  "key28": "3YQuAVBQdfFxKi4Yoxcpi6qmQSiuCTzvhHiRdKcMLnpBcTfyTknM6Co9SSuxzGsKUq8Ug7RnyqjXsTfsJQYnMg5Y",
  "key29": "3ynGkb1bEM7QMU6czY8q9EpNjWfKkmArjdZ9Fya48N55Uhxasx7KuY4hb65m9nKz1jjZcuPLoKvcRFnB9szNQNSn",
  "key30": "4uZx79GX8xyaejaajLsbbZwd7rm4EmMgkfJrYsdNsb8mhVpXUq7sk6jy1Zqs9ch2BfMkJatEXcZGxwSjUygEjTDs",
  "key31": "MqEJQfMSDdGidNt5L2dHMEsTCLB2Keyf67Kd1fK5ry4fRvmsVDeM3mhNWoANAMnFN2Jsde4SzDv9u3fZzehc74r",
  "key32": "2XRhKij8iUpH95UBFEMfYBMpNvn4AuMgcEbp2d1D2FjFXDQ6qKxFDABjPa9tVFwuAa18H6ABWVZc9bSswBG68KEs",
  "key33": "4KaRUNZMwezKB4tGU2AYXQbxvYaYENgyDRQHBT2UapXHYYD4xjQAV71vKmtMuvWLLHBWMR49SZ1nap8fm3mQAiS2",
  "key34": "3h5qZWNfFKTAxGWHVMkpNCg1LKWi8N9JkTABf649XsmbzVLY95nL9YLgi3BgERepHYkhynTFtf3ctPodAJqhHzaT",
  "key35": "jLMt1yBLi3mJyn2oQAWxxNcsPHJCmo7uJ8tu5qggoeJaY8Fbn1Q1xTZFZiYspEUQcLTyq9B1vjCracihUj3YkT7",
  "key36": "2fccppfEP85n1txRLUzht1ZpHMQViYF5Zxc4Nsr9fayB8N3JxjcnHtb6zLpaXoQj2NSwvwTtCU6WHJsMhtMVoT4n",
  "key37": "3zQoaGs8xsWnErC5EuGHie3F8zjAJzaDFZotL29imsFt8wrgfGN9o7kaU2btpnvDtN9HAG4iXXnRyZp4b7D2LXEF",
  "key38": "ewpCGXSoLpGBUHfNPEqCFaTgnrkx1p6pVaVFq1g6yPUBAR5AHRyJBFqs1YQAMp4dTCNGTA2qx1bZGtx6q2eo1Bo",
  "key39": "4X9CmqiF9RHpTqUpkQbC2eXCiZUzhNkBQsnxeEW2V9c9u4B4DwsPKNZGqQq67KR34GMQ3qW7Ad6VyJesTaMRzDCm",
  "key40": "2KXbjNE4QxtwXqRww2tnEBMTZ4SYs2XhLjgMuWuC4wSuFNbfdRdaBFUumr3L63Q5mrGfdqUx6f9rJdj2HqWgutda",
  "key41": "2WsXuZPcFudBAm22w16PRXt3r1JhkFMrZEo8WPARKWPZy4d6SMiWYukuF249h1Hsi31JDbegT1pnREQv6oHR2ung",
  "key42": "2BRFrmogJmLHqash79hhbQeKu5kDZoMeibWFb8P78f4ZKB7UyJoqd1c6EqjccwtDymGWdzyedjTSbQcXKWsV7g6c",
  "key43": "5U4ZijVuRKpo6rB56o4nAi5yofXSUpCGcqLgKbgarTWqsv7iKMz2by6pBmatqyURKpbcw8p8jSgaJRQ26rjRQAd1",
  "key44": "Kge3tVVkzykHE3EddsiKWqm7GCxHxSfUMXRu8MJ5Bk99Mp9Wd27PkoGRUBjpfM5upL2n8dDw6LX3JK3AfwDvmRR",
  "key45": "5DHYAQTVoJryXyhEqTXDnhv1yDbSgUfjfz5Sx8MTc1Vsfx9UqpgeVi9rtkdcmi8HYZyedD9afAz9PXCujNy2ewpw",
  "key46": "2SU4hrsVVUTvAZ2ELMBeTk8MsEdNPEsDB88H2P4BuTfqvNo1sFVajTwLJwy2ajMBSgaR64MYerayGFTMjxQVSUJf",
  "key47": "4fnogjeMDRpG49fsGZgzcFBQ9vd3CW8KABE818F9dyh5bp88yHhu8GiTyt265gqWVHyiPgXtoER1TxYTW92pP6yN"
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
