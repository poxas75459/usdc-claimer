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
    "1jn9TG1rRhgwL33M7nioaZvvMTkERVK5JQh5ESyfxmrniz9quj5yWq17oiAVe6WKZNL1NXXfTkTHuiGTi41qdk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZKG8VJ54yB5tmNdQ6fQKRXAbFMRzTYmJSEF6dMATJdisvDEF9UeumxdLyCynq7f1FdLuP2GdG9voKBYTRwdAMdz",
  "key1": "4dAHmXuyutgoL2R2iCN5DHBR8PiWCpHL1KWKFVAkoRdAJJSCmjU6Gf6uMn9QWEBxGjV1Cvu5mANeJLr3cUH5bfRR",
  "key2": "4Pf8LtB4MYGi8UxzQCQa46jfPtS1qkEGh9F89n3PGhjQqABAC9KewEMxq6QF3vgRqjqRTpn6Ta6DKnvUiR3ncqgd",
  "key3": "328H72e3fVGJr38dR5g7QGMS7kY5pQcCTTEa8YNpX2rSaThWwYCAPWxKSup8oy9UcqjN4nQLZvX9FwYETe5hx7KY",
  "key4": "4i9p3vsYMjakx2ePpJvG7kNM67U8cEUZttegcxuBupjkzUkDtWz8PLnAmZgSv3B6oHKNsHwyw8NVz3Hn4Hq2r5Af",
  "key5": "3kFyrPXkCUurkYQ3so1WKbgPKUFeKKPYM2TZPkvkRY48sMi2M2CQCKFgasAYLePF5iTzL8kt2fbaEq35FJwSTaf1",
  "key6": "24CaQNK3PZUPu9nNbhFQPJF8iZyXLixn9Qi1AQhWW1hmmZozLvnCBjem8NHQrXYef2dRurP2Cw1MmsCLx3FgRNrM",
  "key7": "5ugfvJh5h1UxptkyULSpLdt3pLaazA4WgPrc58uzYDVDcExssov8pwSS6SNV9c86CDS48xpX6NEDGajQDMYWnX7G",
  "key8": "3jQVBCb1vnmqhpx8DV9PdPm3aarVf2r9E3f5o1dq3t4FsX5oJChbsHNBdB52dgtH4J7DArrFUW4iZ9KkCPcHCGFV",
  "key9": "aJ7U7dCk6V1Ud6oavUcYhML7HNkuHFAE5LEsp7yf2hBxVnafJLcncC6hPk6cCybkcUz5BU7bK5hGup8jUys9SwW",
  "key10": "sAR6t9z7mVtEdHAXj3dqGn5qkjGsXSehDoveAZuHT6t2LxfRuLBKSfo4Qfh1gZKmBvfCzq1Hwr4ir2PgP8hmiGV",
  "key11": "2VR5Wwx1hs31c5YJhVtR2R4hDWM8s1ajYw1kCEqHWtHvGDLcxzqjBtd8dDEsG2vGHJRG961sPZn7YpNRR8jTjc7a",
  "key12": "464rGqT6t5ZXVw1otbKBLB8VbpWzyDQjECWp3vihF7bHSoeGGo28zrtvKLUCLxbZovheCVwxsYJiueLuJ8qmsitR",
  "key13": "3d3mLvzv4KXEs44p1qbQhNF7JEGTSYyRYu6JK8VfziNQnX9hYrznSAddr751Wf9dBwzf7p53D9pwJpyu8pRELsEs",
  "key14": "i76MzaBywhzcx32CDEZYhVLHzGBqvTNdmX1XNQ1y1u9CHyV6yYeWEDitpwtuVFJWYqman1S88cJLqpMcZ6yMqhS",
  "key15": "5Qigs6FuhDMNRzG8W4JbkChcgRCzY4cVMSGd5qFkFQVChsWdyABrW2mxVQodCTBc8GATSq1MRotLa4W6VoCM5ks9",
  "key16": "3Lhe3HTF1mYVdv5C1zhiPvQVcChssL2TkvDkJsz6sczdi9q4naRVophUij37CTcP6J546NXtLM2bE3AYki2GBM6D",
  "key17": "5bhDXz6B5YEvRiV2bF1oahq79QsLpND2T4Gab3ziEVuppzMj6gxcrPaY6BrBJ1HPAQdMRjfzKMSTqgVtSMKDsvWh",
  "key18": "2WbXtvYJmt818nmJoK2HJfKD7F1aPZTsofFkzcuApQuJdJNEGjbu5mpCed34A8SDAVVUyTUMBDkcB4C1rdRvRZkR",
  "key19": "38nu2uWd9kC3A9cmWE17AhXoSCi5MA7pNym8QAT7K4Aks6VxoQm5Jj37iAyWA6wVQLMWdQaGSnTfkNrVvmdQDpeP",
  "key20": "2YiAFkmqR8Z3dZwuUu7ovNDFdHdfQE3n1RJpsJkdHTcQg3HMRTScWa5H8HJe9JBk6j8bgfX1ooFJH2yi66JQU8P3",
  "key21": "2bKvxbx8KYMo9uCNbSzFgS8oA4Hv2aqHWkZCw3SZcwQLpr1c7q2CTprGQ9UTVALgxxJhcqTtDWkuoP6e4qcBcnZE",
  "key22": "4cs3Gzs24eXxQdjVoHEGLjLdEpdaxR7aSax3QLoD1ZRqK4Sq1GhBaG1Sh1srbZqRqBUCcg8HtB2oUh6ktMFn1onj",
  "key23": "2BUcnsCqw8WJsVtZrZhPFANdhfSNjGjd99V7sNwShoK9NSgCoELxhHqcqSKZdNymcXuxTKqUX7zw819XkLTpbGZ1",
  "key24": "2voXTTrN7YHkLJRLD527ZhkfMTKWEepfyRKU6sRsuCavLDpAYfAyxTdf4nHhRjt1EKF4n1BzxSGXvvzE6LSzs1Jh",
  "key25": "2RE8g2HUrHxtbrUYMRFYKMKz4Ff9dwq1qzszL2EPhdWBUQ8L3EWjwxnuDWCgTqyxcGRa7P3XH8ga14u3S6Y6QJrK",
  "key26": "5D9YHtCKKjazyRm7BHrjCAhermBJr7FaMkepjnV74e1gnnGmbgd8keiWgoec8SUMyREzosMeGyMpA2EcEMNCcLMf",
  "key27": "4m3APQftMxWBJNrXXnWxHFcc18rdMr5qHxAs8L6As2ZrckZFF34PeYu8LjXnPnqCar8qAfmwPeLoCgu89T9QbuDf",
  "key28": "vZfybBT7xSEqxTRDncEE6eAGcU17FnTk8qznH6Sh7PN1M1VKvp4Nkx3zjt7ZRbZS9p9C1xmLSYQMJtpT1HpuWuR",
  "key29": "3g5iKNLpo17B78gzPaAgcM9jzQVHSyjLJrqVfzoJ5bac8RsttWrAkVctkJMYja6PhKdkfQVtjfCDdtYd62GuP6em",
  "key30": "4CPNr2Yuqt3oq1VsmTRks7BctmrH1rkngkt5xb7yGU62raRiT6M8c1J6uWkqYR8amhJVf64fgb8FD8omqC73pTVj",
  "key31": "4wKGNHjxieQWaLocTsdmaMGeyWb89EBxAZyBsSdw4bipT6p4jJsF4MWg9KW681AaPHUERg7MFSzXqg2G1mLDwD18",
  "key32": "3S8MEJg4AUYm8VwosyBogQ6XBE61DxdDRCffMFQkmXDQkGP7Sx6T2B2CfbqKayKeroWwg5DrFyLPMZe9PtR9Bgqs",
  "key33": "5vfUFvaA9yrdKsqUY2Mi5rN5de6howkLMYksvPKJLPvCAREWoDiqNig3pZFfYVJKQEX3C2hBGQGrNgPbK5eqXWcL",
  "key34": "3BrGgSMe3S8K9tq9i721kywWXB6qmTJrR7BycmnEazx6YdXEQVLXTiHjdLG1Q6Mpjs4hr5B1taRYsfMnCwKL6nnJ",
  "key35": "3pUZ5Pgd64vQkq27Tox6Nfui7hh1gVyFzkv74ZeaRHpGwh2gMgd7mBuhKDFjKbTcyJbNS8GqM5n93XQi8HZHwWsM",
  "key36": "4aAAXuiK4e3Nt7rLhTYwbc5QE9UD2HmADVGxRAWEdCMvBvuAmHMQ8WpJGykkZ4WdRHtE4eS3UCRarfKhaaLsKugA",
  "key37": "242YAFv32Tn4AA9hohtwDJLjqirVKNgWFyjo9ScGAX25vV93F9HrXc862PJrMjoq1goJXaDGmAhP1XjV61etqKNt",
  "key38": "5eveXiQZtB8ZMh4GL1AC3HLw2vQHpU5jtMvguvXQqV4jMbnvoY7V45CqgiRjTEjV2cM91nTHbRAitbm7irJdrSiR",
  "key39": "fshReQ8ixSqhrKQCArnZeKoULGeGUpbBD361HCMyLNuT1aMLUft2gG7KuhWmj1XhP3gHuG9oh9cnjZmL98bkPUm",
  "key40": "47VH8tvDMHwgkic365kBLSufbydL16DrttvcNrsRM42xKPoahfnJGZkgyjXdNtJBPGaaDRkbgr6BWAgVPsR2vc7i",
  "key41": "467yR6upmX6TujtT9cPh5rQjGJmhZucGmyWqYTR2enXwX9B16wYHQrNErVqoDvzpSuk5PL2SUrpp8p64GcgzDR9Z",
  "key42": "2fRkxuAD1rs7DErpahW8vr3fFQDSuEnSYdMYNSUfcnUvKMB7VcEf6Dxd2f9ojZP42WLzL9hLMcgUDVfRGfA7Xc8A",
  "key43": "b4f8QW9UGTvQG4qv284XM1k7mHqeBPShP87T3ygyaAMmk5VXu9U7Q14orHutAtuhhVUEK7yHuYzhy4dkeeyBvMZ",
  "key44": "4rrnkFUWfcrR6jeqwBnMZm1ntt53Rmk6mpY2ZGtrTYNeex6nZQeiMf5MDuQGz6QHb69g7ijLb46ny5AMTh5Vvzo4",
  "key45": "RzsxnYdkThFXYLxE3ZHGFXrZRbguqD3ZVYiYDV4xqmwSMbgf9hYbBWiy5SGSDdb4ywGo9d2ZYQxu4QtLjdeYxUP",
  "key46": "AUFhjL7iiM3XRccm9d7TNZ7ERnKJvVFGcfm1y3o6mHj94NMF5TqWZjAmgKyeZqDXvNxFRgX3A7ZH23tDQiqHm42",
  "key47": "RpYcVNfu57cz4UCGQwiCVZ9TaRNhZSt4pU4HAGqQzPeqTQ89gNQuurGFwBEM8ZhhvHWCuC9Sr94oDFR4fBCw3xJ"
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
