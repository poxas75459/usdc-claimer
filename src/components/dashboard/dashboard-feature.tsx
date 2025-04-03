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
    "2FQ2iiRjKo1BQozNxLcse32aiiXSoEqetJud5FdhZfckk8truTejh2nYpG4Ht9P8wcfVcrBCt9S4NEYsvhM5yM4D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eiFtDVdMutFAbsqaw8nqXYCTgtoDpT7CbdhJozJ67Ha4kMYMXbXJNhn9ukdRHAEFZeUPvcfneHFrXMsF37VQj9Z",
  "key1": "4XrngmWaaCbr5GQTmtQoieVkZ5J6sMSNor5vMGCbNKUgX5GJesrvuZZTqJ5akotqMdzcSy4qXWqDp6LHQVB85YvL",
  "key2": "4Fz5HuHmt5ySzYgn8xavrbBvTLSuAYzce2wbu2xCPUfoovbt4SrztzNMQLi9db6M7ekMFSxa41oPe8fWStn1CA5q",
  "key3": "2LEHSmi2ioGc2exTzn1FqZKiCr3KN16Wa7p75xW9PNA7xNTfcHnwpJPuwATqqKDxTc7j2QEJXyeKYpG5AiSbfpTD",
  "key4": "9RdDun1YgbSHYp3UKyHk4LiQpqWMa9JTCGeTaqtm2g5UThSJprJZqJor1fVbVSwC8qweVJK2mNuxhAzCgpxzekH",
  "key5": "567MxNGTY15TXUo5qCpocQ6fRGJqWMQyF1wC1YZC3Wxf9zD2hrBJrC1fTGCcmMNSsLcxeFNHQ99Fg4HgsSBYWLEt",
  "key6": "5VusWfuAPMhkgpUjkV2dg18b8FwRyUG7WKwSQLiiphuTeRWdRFqZD5JqrppVnYz5mEpkCV6ScH2K3D9mckYkCAVo",
  "key7": "xhXHVtUS1Q3XShYRjRTFD8Z51k5goiJ1cBGnCFk3ib5HcN3ncQUWhFXPV7Hs6P8sgD5vZMDdFZRMQaVCX2JkvAo",
  "key8": "2oMGTcrno7vuqZxExfSCsqTShA69NfZVqKww4qnCV1UBve1sUFXy8ZyPGsED141ZMoDb3k234RKMoKmxoGp3AcsN",
  "key9": "296ZnBgStwb8mjiCgHjPfUfVJNpEWduR9wN2JN2bXNbKyKvTgQqHB5n4xAJWgG6s86x3dVLbHw51EBz4ZE79CJwJ",
  "key10": "3NqaYk5NuRjgF3GHjBYjTm4pQ2ALVtXZngsWNYLqB9hTpMn1qzZb18BpQHoi8u4SoQNUbsAnduL7WJBhSCdMUc18",
  "key11": "3B1XXFpLgwK3BE83nu8kG7CQnWodQVTV8obFVWUmgs81ekj3RCdqj3nqGFLNEqq65LsY8PoQjDVu9oQ9MpBUHDcd",
  "key12": "3cgChP7ocf63K5CGEH3BF8TFnUwQ3fYzcQQTa7pXZ5XuxhnBUt3qViXeCUzkuHShVZJf7nunbby7xre7vCrq6AUh",
  "key13": "FaujyMCMZn9V371doxDp4AWoZCAE3BRncJQWiiYtavFgTCkhijfMnh1KVqXByGeu8Kh2ejZDd9QLTGtAQTrhzpM",
  "key14": "4F3jPtQkEppm3fUd4BdVkaKsXVa6uNhEZcYAFRoRztahEM6BQwk9fHFZE36dApNz8fjptbkb781BYPnCqLKe7sK3",
  "key15": "vJaPjzSLA93Tgtu9DTTLw8w9FpcEsq1LFn22SgoLQVCFHRMXBEJMbiDTzgFL8EWLvhyMWvTpydrU4DbGrLij4d9",
  "key16": "3iW3xfkPzxBv8f7tk9xen2V6aALDVdGrGJKAvzfKTtPNCgCbiQJThnSHAFAnD86KjUHkUQZQRYFomFaHZi58qPzp",
  "key17": "3LkoD9DtR7HJP64jmj5EYbsaC52bRP17njfdBUS8K45yRQ3GLKaVHwtHbwtfB67s2hyUA77UtcDUmebsLaD2wv7k",
  "key18": "5xaGHSRgzUEFNWDuVjRYU8sJGybr6aTGrYssqRYYpxxXbpLqjyWyUFxqJVbzrxgmDexcsvAjUQ1B433fbM4MWuun",
  "key19": "3EEBAxNiE1wxqNveHufd91rrigeZhJ2txXvJ3WHgQobSWfcUrx7cwVvN3v7LXQjXmugYyXmAae7yrCrgCZr3v8r",
  "key20": "4ksRRuDzdBZ7HoMNfN1WS4uwtpNtPs57bLY9ZtR7LuLackarMW8UeULeXWagJNbaPTcqpoWy9LuzDupbPVy5ut2H",
  "key21": "42ujA4Tu7HsSKPwGmQNNLfNmFGmSepuFF9fk6mJzHc146Hk33NnCLp4ozidiHVBRwbsgRwd7PUbpLbyouUQ4YTH9",
  "key22": "2mhx88UrRq4sJfRweCg4rFkqnziUPUbJqPDwZFAJRopbukbwj1vFTmnpkDw5RjRk6q5uVBn2HMECAmzDT4Xbw6i2",
  "key23": "svU5VzR98S7BpWPpTxaU5tLhu4BvuksqsugAMGa4qqUqzVMLvy7ecj3NeEv7tebaX4bAaGF4JvBA5rsZR65USpz",
  "key24": "2NVRKRwf98X2C4QPyB1TrzBFBTnPZ5RfgzpRkGdjnyZcZZyKP9ae9MXBTeGvqVepwUtjoXqjmoVPC3SHUrmoWcpy",
  "key25": "3P79ub9Sfz2ZRYQQ5uxPdEbPG4Q8VrGNMkRCfRW5V9p9DoerK7xVRtDBxteYiSckC6mkzKj822WjVL8EjTXpzS4H",
  "key26": "3BsUCrf1k29n6QMSvE4rabjDP6zt8AaigUq22fRrbPpPecN9UZ1Z8zpYstLejeTJQPbz6rFNiQDs7zkjguVf24dr",
  "key27": "qGYtTt8N28o182vmVojKxtNRaEN6QqTCDS6uAzAJuAstRpCQQ3efNtjGewjLX5zbrBgfKiFhg9T7crtDj6Peowi",
  "key28": "5t3i1WMJLYzCmhFSVL7as61wrVmYrywRqJ9yrXcTxNJfZ3LyzB2dwnb4zUhB9aPJkWRCTWoY2sZRT77Zkkq3R8y5",
  "key29": "3hvtm1P4nQtVEfS69rsMVpd5ak6CNTz9Cbs39AEVvppoE7oRwe9MGHyxZFGFKZNT1LvicBXb6cWqzSH822RkNv7i",
  "key30": "3yusd4adUZJYSvguuXExKBCuRVQePJJt84whJmB499Aew5e3LwGfVGvGmNhCYNPE8U6JZr2P3mhhZcm3sNHjz4DF",
  "key31": "TngDBMTufrou8wD42JeTf7FMtDMXd2n1w153TaET8sgW5NJ1nF8oMPZhauHRJ7stuPk7W18zNy9RRkT8tuL74WM",
  "key32": "2jhDd6D9Z9NasGTyFk3bh5vsmapb56oZpD8JTJCYcSRWa2RtbqpyQQPoNsGqzVpdgHAHYy3J2HjaZNa81qCwAKrc",
  "key33": "3MS3Z7aPuNCk8zYNE5NGkcNgHMAmXWYpgGxG5Ar3esVs8hqoUQPwTGNLxjAez22KR73tzpN35c5gAXtvo7jM3K2V",
  "key34": "FiWmjSzZaDfm5EYHaBL6QkRbMd9QDPxspgwXY72mTDSDbPPF8PkkCyM3RkxQaRg8oZVrzNBCu31PBkH2Hv6Lp4C",
  "key35": "5wUj9j1GWyTU3XznNefKbh6SaoL4fkgJQn4oLBE3hkQoMjo1pCwwNaKKNt15yyXrPopREN9TQZExqqUaNrmB6VNC",
  "key36": "4iE8SMogbA6p3CMBWea9d84GPJFaiZjKED1M1Te6Dw4esN1eDPVGnAH1rCLURBNbqVnuaPzZx7JYJ35UcdCLUYd9",
  "key37": "2fbBgBtkoWVfFTAe8t1VkHrKm5nWmZw463T279Y5PNhqK6DPLmX8Xt7GBM6ZRT8eBPUHPYB4sUgSX2FGtSJ6DtzF",
  "key38": "4YVUFfD1GwVLfmftrBhxd3WYPVvpaq63T7K11Co3sankQcVTYEadybEkV3VYa5mjAbvLyiNJSjwrxdEJ5sEWAWs2",
  "key39": "3yUUEnAdp5RLfW3sLU6gWkpUJ6wz9oTCEc4Sn6RUbERhEx859yFuwnThPRGUfKBri3mtcXuiCdkD8KPTKvuHKdjn",
  "key40": "4V614uu52K3wwNLFhv2HEZDQkHvkekN66P6rRseANuknVht7Gx3kEjEuARem79YFaU9WJUApbBNgQZiZUrU7PWDu"
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
