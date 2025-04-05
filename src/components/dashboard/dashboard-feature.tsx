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
    "2iKKDnuZSs9gb8E4mcqU4FoNqgk5FyNokUs6bHhueF3vCCtcSamEKKtrfg4gowFUCZ2QkGvJH984jp7CiBEeLfvs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DbFeJkdkbNapicb4hgq8Tb11nGBBaY5mwjmeSb1CVeYpJhRUxwUvm4B2gMqmBkUhsr2bKZ6bp9nB9xZ5mR1scbx",
  "key1": "pG2LGsfRVNFX9tysjb88t98h9VWwUibVyDpH5oCSfN4FqR5ioR5qojsfcKS1GYi4wFTwj6ZAbgq5uAg6emiQHrd",
  "key2": "jou7eSoegLWQJkN3p91hprchi8Qy3HZNuXkXrsSwfeydt6Jn1bTS5am5U9X754Pu6aNnZCHu4xsVENFiR7XJQgY",
  "key3": "r2ibo33qzgHYEWeqByNeSW3UNEax31xj6d379eSVSGAZttqvA1euUuVGYzNULnNu8j4URZbEdyKmhVQ7V7yaDk7",
  "key4": "5JhuSwNST8BiNGYuRJn1rTNx53aBHFHCnTWHntfXiuqMjevWQzD2oqTmFdLEKrBvfBopVYTEd4ZY2mLS2xoTaTCX",
  "key5": "56pVDaVMN14wUJfm4j1c2p48RMteFP6W13KbiSXnXcruJCaqzimALmrHEWua9P6ynZS8QBZ5y3tmufMhnLM1g3ac",
  "key6": "1257Pidq5vCDsGMNzdszpCJYH9Px1MXQWEQSrAY3vtLkG4dGCJdSy1tvxQcQ6sD3pRczQxfnFoyMh1zw3yoAFuts",
  "key7": "4SR4e2K3fRBqMMMGj338JqYJF733SvyV67ZdmwphVfgahmusmrxryojpRyKK2UbHkdBHcCoGVSadb9Djaj7B62BZ",
  "key8": "5UyiiS5iXKYpTcHJ6B9zT6ShpAdPXgopMKZY4EosEgVFMhqCYgGaBxy6hKgDej2JcmRY5GhynmqSm1VqK6HSfYLM",
  "key9": "h4CyJUyTfcXfd3nKso45oCGYw2bzt3D5LnMtX1CxuFvkswkmKmLmZQ9TQKsmN7mCsq7CLMcQvKR5qB2SXgv4aiK",
  "key10": "5sG9K1WAFfdbMYmeYjHLP6UbiRHvPSBvbTUA7VGTmzwjPmvjdKyEtSAjaZ5yZLU4CY97VCMnf8rFHjFzoUqVu9PS",
  "key11": "2GMWmWpCHs9Ec9HRBb3BmTeYxLtUzRDkhyAMnZ9NsPWkgogBzGpKKRWMfWno6NhARz8ThQEBokbd1TqEGqL3iUff",
  "key12": "4EBLkKYTHvZSUtqrXGawfrLZBBKppgTBtJJBjyA8v9jkGXiW325gKUoMgZfiodu6wVpa1K1Rvxm94eLpDbM7dFCw",
  "key13": "47KR9Vpm83EBGCyLqXndnJdrbE9qxNqgAuNV58LvPXVQpsXHtE6PewPeGLemdnpGndsJKYAgaPrXAjxqaczBLUuu",
  "key14": "5SbHNFjwtGGXaapwYdPnyL75XJ82wo7wpo1zhvrtThE3fo6MfvXrWFcWuEDALpQ4tDBFTGCseWJvFQit6NNH7jMc",
  "key15": "5KxbRkimf9TduSf1gVQHPkR9NbRvVtQLz3PraBZZXCAHWFtPdpoV5UQxTSro1zEMi5XB36H3pFcYn2eWUigymx3r",
  "key16": "2Li2NuujupNuA7dSkVV3fiCXYMP49QAQVDgX6XEHn8ZvT9crT4SLATDdzD4K2aGXbePUFALUmGi1gWRm8WePEwEC",
  "key17": "4bxF1KHTj1nPQna8SUz3Nr6wwscLSoE72fAEWq8s9RhwXJ65DWq31GCr1rAVHGgjstfdZgSQuBsM9msi6a5XBKs1",
  "key18": "5GnGUr5rY5PjtmMhY8r62mX3W6Sx2YeaZaZibJp68DRoam4kyAxmQQjVqzzwtG4iR4osqqrQzFAHJJGUTaFREnd2",
  "key19": "2aF8czahW5ceRw9JeGkgTSdmbrhkXHbGwixGCFjQJCJuebxwKEqwYac8PXNYWusgL5DoV4nyNn167LXusvNAUeSe",
  "key20": "3VdkcJ9sRN4C3S7cNjkf2mGMJWeBUeJDBED3Q3ope8vbajwCxhgSDg6ke9QivvZXHfqAhv6jfkRbsT518NVbwCis",
  "key21": "4u392vkYLEA9Dvv4onQPcxJSjqTvnrLzgSe7v3Eqys4jCbYuvfUahNzEFeDsBVkjF39E8wBwtcMXU3jvYzKvjvMw",
  "key22": "5q9A5WbrjXzJUBbnC8fKvz5rmLpVpV6uxVUuEBorK8B1YavdJUUGbh2DmyWsk2fHRhzttU97mJyYkW2agr3iJk3",
  "key23": "5FwJQAJAnCp3eiVEEL265PM7wgjEeAHzyu63QF8GFzjhoR3vYyfESsLX4XjXjEJvoQBCYHoBiAQgFXjvPLmxhSkS",
  "key24": "4KjEqdsrrcYadLpgUSnVUYjBthe3tYFYwPjBejrRxqjRUuyQDFBsTWdZ69DTeC5aoNfAYw84cZK24ri3B33HYPTb",
  "key25": "21AymvyfVXEipmo1PKtbknxcxHojhcuJJd6APxqYxjis9LUncxWmPs4iA6Qwyr7wjRZscnLJyp4w6kbUYNz3M7Ac",
  "key26": "5J1LRxEbkPpBkwWDGoKuXm8Zxi3oKpcDwRrFThVHymMsBAjChkxNTNxz5GUVDDKxJSfkC2AA4wtynvAGzEGww59J",
  "key27": "4dcYto3aySRuZpZQwnJfVjXMPRdhdUHqq79x8Uxk2oDLkqymfv2aHg4kWCPVHTp9d1veB1xH344cNtfff1Yctcjk",
  "key28": "3XfTUHgoYNNH3NtGzGNyQY6n9DSmAWyBmenj46BMbBU3PF9tCi55MxvXdQySxWg72UVhHGK2ASARpNdYBwDduQKD",
  "key29": "5D2d75fPp9Mrkh31jHQ1Gif9iYrvBGjQYmoGwZ5HdfPyPcKWrCohD1Rf5dTYfuCb2PcBmfF6pGNPWZidMKJd399w",
  "key30": "5zoAD2aNKuBQ8CVZauHXLNPofszbJSgKBDCFTdPphtrss247n1w5suL7RChEJBY3Fvx5FkfeNcJjC2dC44dxUrVn",
  "key31": "54pJvTcRtHDbAbG33pnxvVJrYenHKWnedvKMqvu9ZLdHKLM1GrX2EcU35bzEoSEz7PPWJMd2UE59KDCo8dYwbZXe",
  "key32": "nAwdFM8tWKQC2uF1Q52Fw4FxqPY1Cb6BaGiT45E235vAiU5DTps64SN5hh7kJ2TiAq7vbCTFs4XEu5XiBRoCY6m",
  "key33": "2QWqjV92AHxY7VdNXVG11AbDA9fZbDSWGQ5QyBzDqwHzuwFRUqrRDqciuiCHJBXc3QDiCDCU2GJZhVUDAiEpP89S",
  "key34": "3N8GqHdTtWnbhXCp4acSDf5fAmSCoHc3vqhFL9cqJMQZhFGGMZ46eq6wziyzxZm4Dkh1nMs3oAtAFkvYS2ZksjDb",
  "key35": "2fo2RNB1DxJd2V43M26puhDzrWqQw8y6dwPuGFKkcrMcV7KWPPwtX69aFZpoaCKbGu14CD4C2VLHWHpan6f6QcqW",
  "key36": "5bWKVKwaGCttPvM4ZQQ8KKKN1A7UHXbHhhMgVbLXwhmnE8JYMVxkP3aRwAmfA1XKj1gqnygLftyTmjDV18niXye1",
  "key37": "KMnihnj6CYsaS32XWMqGK91A3QZaGziXipaiBD2NkZ8CoDtougo2LBFoD1yASbzimq37zCqpUjQCcTyNG7J8rx6",
  "key38": "HnETe9w7tZFSzXVznk3CbYeioLxMm7pkyzq8Maz4QMXh849SwkgMH2Zxk87T18K43CLC8fiqXzmrr6P822Svzun",
  "key39": "2mBUZA4H4Fuap549FRjMDtpJ2a2eX9LY6o4ruJ2JmpMri56EdHiUcuufUwPBLHcN7zAjPkESPvNfdgxwxm12TWRh",
  "key40": "3DUmnQqgpgEdka7yQWYMfoV9h1QkJj45ggNXwpxjqcN4GKgNkoZ94QV6GWCmhqemRWtacm3V571PEmz6FfA3Cozd",
  "key41": "4h3mHKi1LFjJyi6p5b5KTRK9c89FzHR5Py2h2AYpCJgXMvYbQ19UKSiWU7AZ2i13basLDebFpe6Wf5APRZfLvmAT",
  "key42": "3m8s5xxUwvUQMmzBo7DXo9Q1qzEHYkneDVbJJvqdetp4Qmnx8gsCF3dyhzjz5h1dEwo44Ui9LUtphbD6g1YMsKq7",
  "key43": "e3kssgrxfGgh2YRrv3z28J5M8ejqMjRtq7eF2P9T9jL4v1tpNdqTHmKMwkFNCUjroHkuuZmk812pD34M55TatZd",
  "key44": "4XdMtxGvxd752Pcuzoe8wRHXfFseqnT3GXqZBJ3gNBp4xs3DLeiaf2ok9AQxpdpo4kytTCcPSKCjz1eBtFmuNzWC",
  "key45": "2feHWZyfH49GssScxabgvBHZfCupMhCFUVqbtcB4yYeHuDLs5pKJ3tn9faRZnoYrRnbidSPMag7T8PHJUYdmEqU",
  "key46": "3Z1MgYtHD6pHQAgsQCogysxKCjPvxR1SGZYSMdLbDy4xo6ZFcSstBiBhNWymbXqVQZyrLdGbEFwdJvbH5vRbk8ac",
  "key47": "4N9YSFPCXRXMhFe5KT61iFxJb2VrLeBkFwUs97EGaMSNz4VcsAzQ7gyoeUJqDD3jn9TC2LXL2DEPkURWCewTSkT7"
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
