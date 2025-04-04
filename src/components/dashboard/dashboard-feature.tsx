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
    "4pPC6mudk4bKXrJgq87qYMNepymiV1n7uKTkx2eFL4XHrhc3fLBQncUGQ8mN9BmCK9QYowBVbMJ1SHMe5Y53ZqG3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jFzU1EpHuJrxz3mtJMu96FmsbfXaoWgfvuRPRmcjEnq9sVbpoi9HitWkJDouXK3SVDU2ceoAiTDZysvr8XLEB6P",
  "key1": "3yTZdMchwHtXENfCj1mqxWrygdbNRVTpyjNrx41Dn7Txyis3SwZb543CLAQxMQMtDW7HNvM8H2AZSYWkL8ej1BK9",
  "key2": "3KADRYUSMZuc1jCzh3WYgP38nUzjQf2E5GeN6okfgvCtmEytJXpKqXwsNtHHthKZiVnCC9gCsw7tv4oSWSpWgu1e",
  "key3": "4NXA6M5W4tuqadmW1zxZhBFJa48xXuw7qwWhPC9rbgr9yY2tbx874QQJ5ob5Zz6FqE3uuTA7T5KmgthQhprWgVSP",
  "key4": "rsxYA7p36Xfxsu3imzqb2UBNvdHUnibNKZi1fzkVwXmFtYfU94nRHPArVhDCuSCEfyqDqXNAhS5YJcsPqwWWwvw",
  "key5": "2TzDytf8yrs57yf3uLMtTnFhHqja6wmPSkpU8iZYnKMwfmCry5jez5sBHgf4gALFiaXyx4YbYwzFDfaYYjpEww2b",
  "key6": "GgfYVSCdmsQwEpctLjLJ8V6Ey2UETMc2eouZsreWHybqnqMuFUWCos4acQsL5Z4aaaeuzBY9jmkXYvFU6eTpMRL",
  "key7": "5kYJywWgdaXaD45TQa8d1V92QLzXSR3R3DiEaYench5SQtbuNYnma93ZMMjcdfbbbH5QtiCRrh6tLjGLPuuMEnyq",
  "key8": "5z2qCUqN26uPnw9iabHcA5dxUmvEWowWSeH2PSXCN87gLSSYwDWxVS56twQfuZcVHKJSKe9nYfRofnZgCw1XFRay",
  "key9": "mGdcteoteveM8UZB9iPWNLVuK5kDPm24nappfwZ7vHeKCXc9XgabodQoy21wnVNp6kB2D3miyYbzvEhw3aAHTbQ",
  "key10": "4Bgprp8yE5rzQwEDiKwErsVASUaZotYaxkqFNVmducu9f4jBsoQAZ1FyqgTxN5fAzY81nGzLZUFSq3GDFfNmfk6H",
  "key11": "21WV5nAd36rzVGScc3vLbP4dCJaLUeHpZ1R4RfJCWjK2mMhZVWDsyvVGhKoQfwLkLYjGXQP8MZdkieFo4N49kD4d",
  "key12": "mMqPSFRTR2VmUcRMo7dcNXyEfYErNaD8xpvinKRVKbc9fJECQ5QTvUo9Nx3WqsEbLmwBpSS2npJemLhzVSC1BgD",
  "key13": "26TiAgiUsQpw8vCsEHSrGU1NedYdoXgdZ3c6D2UV3VoT1jxPy3gKUqXBM9NQg5xrpVPzKDGNjyFcdVRUy78y7ouF",
  "key14": "3cmPxjaQFs4RXn9HZJo1wDyN8rBiZVJmyyrw1bVJotDQJmWiaeKr5tDVU8y5iEBvFv9g1pWgku5cRx5YwcW6fksZ",
  "key15": "2KUsFzGHcffZAL9obDuaKZhwqbW1Fa67mytXcdRjJHmcteNh5Mw1v9SQAQVsKbNdBmosTA5F4BZ73Yz5uP6xGFLq",
  "key16": "3hWxbao7YEHhCJgo1D3KWQHtSyTk6zQp7mH6QttnxVyMEyyiVtwCR4ZoitKDNuz8nF1gAKiNKMgzph8FKiqt92S8",
  "key17": "23HczXX4vmoGtiNRrWJsE6dgm1Bxs8hzQbQfj5iEvqrc2pk9dMb79PduevVvha8u1vj5owY7CAz2yuXi64RnsRd3",
  "key18": "3TDT6oMSpFC4gUoy1PfKk1Wq7ZSXaeddkdNCmYY9513Mup4XSDsw8G63sC9ZQbWE9KDKXGcHLkgCT6RdLt6T3Dqn",
  "key19": "5dp8ZgN4mRg9XtWWxN2GRcaMua9HB7AtaNJgjiaYBVLCKkHrjuw7otpuhPq9vcCF9eyj4wqdmQHLaKzm6AMQk896",
  "key20": "2vcSNVsAHtUsmoKqRKZLzXsxEG8xj2uTsy4LwYzfopDfAi54gUU24KhBSy3dTMjqgZUfeHGPPGHNK5tWpSdKQGmG",
  "key21": "umVfoFFrX3QkZpb7JhQNEJZVnFMSRzXwCA1VVEb2XW2jDpqSfGWGi3Sxxzm9AiWHdYM1icc1aZYsEsiBaA2wc3u",
  "key22": "Pn5vo1KYtM2hY7Zy1AHGmPFrkE7qDvBCtmJRdDtT4StEsegm3LhEzb3MNMQ3cWHiFqrBGTQwdGcsbUtpvh9Fq6Y",
  "key23": "5kjZNTwMLe2HJCz2s9gJUVSJ3TM9pCejZu4ZXohTMgHLjXJD1oqFQE8vEZSuNK133paNUy5xGhyjJ4qBB5mbEJ4D",
  "key24": "43D5ZuYXtHRbNpAYBnK6gBWh7BMXxs6Nvzh4YgeYXeFFAYjbLuvsm1i89exzXshKcqitoVVzcSQvVXWgjYVsktZW",
  "key25": "4AWaSrZvqLtnFhKhXKL6rSuyQu8Ly3mddmbu6zWdAvzHcmxuuSSeFZ8t6NAsvSUGS39NunWeEhQPFzsHjr6MJtT",
  "key26": "4NQVfR15CanG2mxK8TeXieN7BJcMs8eUvF46S42JJrFVEKdacgVfhaaUTMizz6JLjJLiwm1r4TyeqsCSD77SReEV",
  "key27": "6uUFwXYVBZDR6XoidUuaJaDkQB6HAgaPNacu4ded1AMwz6zRVTDsHjSD6jvRfspASHyRpS2fR5Gob534kUHYhWg",
  "key28": "oupbEVbWUdX1B7pvL4fHEhs7StDsR85aa4qh3sV6Mnse969GcTi6M8g125dyDqFSJFzRgr8GoRTF5sqQiXpnBVq",
  "key29": "5nPgExrpeVUdih5BtajvNsuQGzPJ8H2F4La36XbFD7foJP1YSzoDp6xFawfQfPxBR3cBHX2XdQwhYZVCm39H5KDG",
  "key30": "65F2R1WjuPEgAdGpGZKZQhXFE2reY5eFybZwrUmN89QFKHyFM3nANpXZ2Y5oQTmAX1qb3oRWKoXtPjaX9zXYe8nm",
  "key31": "2rZsdQV8MsY8GNrukDY1rim833L8p51M32nXycVHzbUFSww9VQWxhEeAtyPQDbEbq1XtgYKYrKyCVJjsDH4FgKB9",
  "key32": "5QrixakCxyvAYFDk1CdbaqDX3B3PHQEuDdjwxDqtjF15vUoyzXubV2FnJa9oPSyNbyVzciNU5YV1dE1ctowPnH5v",
  "key33": "3dhckJXj9M7Y9G6u2pJoQYcccnBN97fFFShAs38Ruv8BQQyHCwD3v2nnmStm4WZjXTfLsPaPYZbtcDMRcoQWUFg4",
  "key34": "4HoSEFpyXfnjMGhSQYPyHdrd3wqQEq2RnMdXixy5CQewun1fcumVm58kgoufLv9djryN26gcbzKano2EZsLGgWUc",
  "key35": "61ejqcCFw7iFcz6Ao5Gv5fq7qRPQKPVcxNF4h2ebBZqPyGXeiYsYEp3CABDAXLeZLJuqPEkxMyBFBjxHFs9EUSrz",
  "key36": "5G5z3kc21tVEJThs94aXheXHAjVHpM6moeD1bZf6ZwHy8srphLcZ1yACT9HEqWcm5ythXe77J1AhSDRMmgd8SM6z",
  "key37": "32MWuBNHQfYJbskYUNXPnjXWRd99jJWLqVtKHzuMSPd2MUpFZnXoVRkNLtMuXMHEFTpRt9iuN57aiv3aGr6fYQMZ",
  "key38": "5SXkpxEbZamFox7GgsfhyFY2GnNg3xwiepzChDXWDjuo83hvqKKWbYnhpADf3dUGetdgTSyswaXg44qo9UahiwW1",
  "key39": "ZvJP9VTdS51bmMWPST4mkVswYcvSmP7qMSyhmytAZLZhBjjLhm9u5bJNpWwHH67n72nNiMpz7JLeBqGzMzvvJ7b",
  "key40": "2STW1s4Nt1XZMZH1KSxFUv5sVMTokj4geAg1jVXt7SZVDXsHGKgTiAnUeg4H2mm8GTjeJwT3GHUCFSyNc3st5sFU",
  "key41": "47SmFLdnBfxpNQ6ZikACn2uyoacurNPYxXeu9cc96GcejnoXUWK1pvGziPxWzgPR6ecoMi1i4awddbp1q7P1C9mb",
  "key42": "56h2zUJXhPfRCQubZozhQYbpi8hgvaR2pC3MR5dqKbhLTRUMs6QREBYWu6YrFiNuTTCDwU2t1Jqmp9PdBNGXJzq4",
  "key43": "4gwdZ6ms8WMDMkgvarvJTFPymidCWY8bA8wWq11SABsNzyxrTP8kQfGg3FpSRS8vPM5ukvtUaUU2Y7kdcg5toFxm",
  "key44": "2bN3jvBzfCtygkMPrsTwtcQycZSdtc3EMEy7GX1ZbJ8H3pnXSfCa4i1uRNNrQB8rkRhiYJcSpvD4GU8Aixz6pzhK",
  "key45": "4Jscmge9ehG6C7FX9nBbgVtm75ofhdJUP1KQ7mvGUuGh72WyZpashokPhYBmyCvywteMDff7rh5kGN8d4Uyuzqqq",
  "key46": "3NAHLicxxDHaPj5JHJ6VgdsvW9Hehggf7nvNuNL2rNfxvic6c4B9PNieqkAcTKwUm5Mg6PooUvsseuoo51feS7Ro",
  "key47": "2YqdYrV8SPjL4Nv9WkuyUc6E9kyAUGSTbWseK9zjV3ojPwtDhW3KCrBnAMV5heRyS1FgA1NTYHe4yb19T9t7HWmB"
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
