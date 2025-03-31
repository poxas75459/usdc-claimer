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
    "2Pq87edAZJRaXV9xucVSMRQxmr6umgoXpCUnKRk3LzAmSjMrrcs9E62JYQq3wswNhAJDRPHTnxXNeiPco91T3YDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45uKSj3DNc3DXok4vafwV7eBWEZ4iQZHYPfMcJ8WZhgXtHgvdPjnkDaYYsqH93kZivGnJXzcAg6SC4B1ffj4CbK7",
  "key1": "5CgQWZ6Q2NJSFjf6r1ky7uM3UjwYrbAkPiMsoQui65B6NsTTnB2nvw8omsJgiAreaAhKdWB2gcasy75t4xfRjFkz",
  "key2": "6779ZPZCngBfKxTZKJGKNqJLqpeLgND2s5vQut3eJoDgtPPNeVCtT94da4vyozCVUn3FXtEy58KhTtLLsUY7fQq2",
  "key3": "2EsaXE2EWj2vycNU8dFj3NCZDmsvmyQa858hGqe8Zyd1ma65Chkk52bYYR3ukA3SoUZSijE5dKJEBjrg58ZXmz1",
  "key4": "HwXAjEkqahsBTKK32ANCXwootsTuHVWR8wRVuSxzwoeHsa3d4opFAsnu9y6yzc3cHBmtMYWPwE6Y7MVEBFYoFX9",
  "key5": "45iizVoZu6FcBDUxHWQcoKA6x48QBSxccKRwVWndf1WM4WDyLGMEwyrx1Pg2PPdUAkxCqxTVVbHuoeB8uyRb1sTa",
  "key6": "5byDYiL2ftnoKnEjbLu8ehNVaMzcVGo9nSzZfoiymkpFnCtmEUY2sHo1W3wW5Mq3hV6d4R8TLAch17GF54B1Dibq",
  "key7": "5LqqMA7zGPt6PsM7qiSEAxoWztFwDcfsJJ6u3hdQpM9zfZGmuiPSkNSPSvQFe1fmzJKrAUZSm5Sus2pkm1DYfZDZ",
  "key8": "5FAcMALjiT1n58Lft4m67e7kq6C6smiBnZE5PHVnpXJ5bKYw1LT1DCjTLsSJ44Z3naKpsPV2L5pnaeYCYCanbnq1",
  "key9": "ax69MLi3CAUUvmtcB7XfLWp8Mb7n7MJpZeQpEJPr5Vzpvy4tyuMVaKzbdE5twoGAWJkovxSZKxdaFqFsggEZp5r",
  "key10": "5GcckUntsEzUeYQ8uuQ2HqRsjXQgFvGp8nT1V4pszCxRntp6Kj9Unv8up1XL9o5NrEeYHJnpSo4cNhTLgSc7Ah3w",
  "key11": "5bXptCJmm4m6hoMusQHNqK7e9FnWTwypBav83MnjD6e9PGWtdfpJqbNnsNoTZNUcW4w3W98kjrGXALNPGSXHdXfk",
  "key12": "3NosUe35aubGAbfxb1hXNoigXtdua7GUMQvNsW25NjziDeByuHTA91SaxhyL9dZDABmhNbcpYkid2zQtyS77qcnp",
  "key13": "4a9zuNLUG3mzairnAdGiNZS4hMU6XYR8Yp9H1wYXgVLi4DWhhXq1eZWeCMabuuZjtrU2pJ7HW58uHFAXSPVo5YUk",
  "key14": "2ywJGDbSbXmLjEEabAv5CgehN8yLrEUvJTvzXywftRzG7CUqWkdErRFsm5ESuwywXuNCip7SyXnC54zWduj9rzFH",
  "key15": "A78JwKCbBZ1pA14BdubjDiia2aChjpGoEbenpBXBrTZWJzcbuZoRwVmkA1Ykrkj3HDDo3YHRg2MM5CeuFNui8MY",
  "key16": "Ape12jy71GCBp2dDrfN6HETKYE8skDqgRnDwagvEeewfKtYs2tWTNgkuWF8PbuGcfS6PA7DWRiS7DbsR9aZwp9c",
  "key17": "3ndPrLLbFiQFPKwwsYSGa9n4enKYgPm4dSFK5EXiqrPtEVbBHD1xL9Fx5uaXnA26rTFGQrAC62WF1je4BqyxF2Rr",
  "key18": "3HB9qzEm37YkBSNC5U496a5ftUJTFZCPeJ6wNGwLDJZZE98JzfZ3MvGu1vzwMDXjgTE3ZK3s53kk93Xyv1k5jVbr",
  "key19": "5msjsoKrBHaAAfbLjh556YztSKQ98dMCTABUXd2rZF9sdLhXRzz6A5m7AcxniFDJxRaJNSYWrJG6yADoPMeksMez",
  "key20": "2xKGZZNEUAa6yQC3FtmaLA6KRQxZCM6e6nctm4kwzbFQSz9vhq2XuuhNgSxTVpMPXxN1WGTYeLgpoMbbZM2UQFBX",
  "key21": "2VXtCoWXqFVa34gy8VqiWwKGMx3vUYzo1H72wQXjfxc149LqdQeJPgYivoWDK2VkjRQuxPztvEMQWaBBYz8yc3Nn",
  "key22": "3KvwFuY9dm4o3wzrncAppTGRGWZ7ZAeZxFfpeSyexiUJKZ75SBBjd5gmYwDBCveuh8W9BA3J3ASfQHCsHXnwKnGt",
  "key23": "5MbFqgxEUPYrFprehgNWLGXyAm488kwwNPW2kjYbhDr5c5ZNXpE8LczrDo2X9yS5iFVvw3uEB3cPqverAw4jChbb",
  "key24": "5NqdzUX8G8L1ivfeBGLrTdmHBAKEwcqtFrhkTLFCzN7BsKVGofeXAgWUZkeUJi52j2yrXxaKyZjUro6Zp9Lk97fM",
  "key25": "4wRHHVNdvveMkhiB6wgMRPVhDYjs25fUFT9cMBSgbXDUFpQQVThtEw6iJabgLusYWQZjBj5tQANSiWozU9xi2Dit",
  "key26": "4SH6jL3xSiwB2x2AriKWDcVi3afSM9uYZLeSq3cf9XZs7LGpw6qz1UF5ygdq5FoXTMLQPv22CB8kNTE3LaUvPdb8",
  "key27": "63n6LtjE6eQFNPePDzbWkjDHZLFqPrj2Fg4LHs1hvgDTLHzkAGdDsSF6cnucKpZdfVUCQTXZMmHV7a9saPvaHhvs",
  "key28": "3QzMLQRJjHi5FcLG6K2KU4g2BK3zNwTSUs52LSBCcZ7qnMxUZzXdJMQGqmidQDM775pBK8Wm14zuvQtZAtgdG6qv",
  "key29": "BcJtasLVNo7CGmg1Zo6ygNqsEeXZuXSeeYFhNd3BNhct8nM3hTdLeTid18T5hfEKLHkEpHXHkir2iKk6udwdvCD",
  "key30": "52VnATcwyG8r9fmLXsJjy1t5A6tp3sFysdHzrd4EfZuuKWL9DDC8PHRtmutyomdQaUFkntqnPj48awqXXBEd9RY2",
  "key31": "36Pgp3eNooA6eEVxce1MjkWaAWQEHuycF9hwsWMeHoi9QmkwujRd1b2FNQ98SPkbgRiyVFHAwxwn2MjsgyceTHQF",
  "key32": "5LQv1xCECyVZohZhqfewmM5ct7NEYMx43pvDFagBQDzt25cYvFwWSrFx4Waoi8RPFbKkrbbPmdojkZoy24ui97Wk",
  "key33": "5kgjwiAf1dQ1o2ShJvjjXZ4pdaw2oA4pf748Q4LuJB4F7vHM8fG9GP1CksF1qmGCwCY5Cfksdr6sWs8Q8t7g9VEu",
  "key34": "31JX9TxJ4VggPCsWUS3rBmkgdioBFfs1AsfJP6vUK9Xh5Kh7oeWSJsnxhPmGXNbBB5iZWA2Z1wQyg8gytxHn4Jzy",
  "key35": "4jbrHEBJX1bAekPk5UySEsiqxdeqJduHgTEdBjNKbDdAAAQvRVUvxtjX5ebwSsFRjY6N2p5iAUPQWbvQbCANN763",
  "key36": "4Lz8YzpY4zewLM3YNLJFpYyNc9oxAznSdLTAHdwgxmK5gX7BznkkUWA8XhbPcC6sDMPg5mTFCHF6f91v3bqLR9yb",
  "key37": "5KoJSSVYgB5gJbDRippzPsBMHNaf3mwQnGr6DSGGgU5R9z7SsucUuCC13eUn9n15f2umArzGcrgSZqkMJC5W6Pnt",
  "key38": "3eM7AKxKjfEZwRqKTzmUQMTL1ZTnwY8cuJ1oQu3vTEDGhjpRvQLYYuPpLcHpJq7YfpKGjPgcXo2sBhMfSwBktcxt",
  "key39": "6R5CS8HmsLeuz58oAP9PmPjafEGYZxafERDZaJre6r3wmkWpzsHtfeG8x4aQUoiyiP2XTE4TV5JiMM3oWkm3mfu",
  "key40": "2in6dkf8o1PBCGda3gVXQQRwsyvzaxnxwvfKRCdfm7mZNnpixjAQW2aucAb9EPWjvX3DAyjuwwbhCUKk72hxhjAW",
  "key41": "CcqeSvFDac93KZdYfscbx1YtVG4TtRtWqPS2nkPhF1JiymR1yrsPbCQyXxknhhqKhCU8AJ19d2MaQbpd1143Kvg"
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
