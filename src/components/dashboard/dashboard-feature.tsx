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
    "2CVU3dFbTfNVhvW5mWG76eMkGrXnNTgwWgCERAKBiXCG3jiWHNNyKtCkBPpgK4SMRJjyUG53hK5hgGJx3uZFKvxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8wz2FEw4hp2PPa3pvqM8WFJPA9x3ZSUL5kquaamoU3xCAGf5tGcdftbpZG7K69EKxcaNHZ9Xrd5Mp5DB3Tzic7B",
  "key1": "3VWbKZSypLsQwGnT3YmN8aXnEkW5sa6aBj6DuvxiBjAwNu4rimd8fa1JHuKhxciqaxPUH2TnfBLxYQAdgBz9SJHw",
  "key2": "C3x98bbuBwDrCnwnPZmp3MRZwiT6Tew85w9AdaQ4FTjEdDfqC2KU7rnkNHJs6WFakDpXhThEeFt3UV6ZP91xoXv",
  "key3": "5NPa1JgGd8pGzoxUdDjWfjiHMvapnDCwYYKv8Sy9a5pLR9KyCRD7HBHcQH5TRvnY1TMeXWG8pFxs5PD9HjZv7bQ7",
  "key4": "3SPxSXpi4yEgMBjJapQhj8NhWwfVAh5ccARLvzRBS66GsAWxZBPMu2GezuoyVyuuB1Zpp6oVjSSDvBXANFtsF5GF",
  "key5": "MGaNkgyYGoeYmFfLntEUN3huivUSJzYAgLb4RiDPWRLHPhXZKzYxXWSGET1kDnaPBG9cexpfyGz6CaxuhMwmSgk",
  "key6": "4XkyHruXZ3MUXMGP6CBqBBhypQUbKvjFq8ZAPM2jo3dTqjE9mnsXFRwrka5mRH1cZaGoRyQrpkyaFVScbfisxQHh",
  "key7": "5aToAc6QSYS2ckGqGzA4DvLXz6gHSAJ7MrUHdY21Y4Xsqmt1K3LT713kMREVvTwcH2kDYdwKKJQpBtjAJB96Ux1f",
  "key8": "3W5Wjegwrbm22KeDyhzA4FTtT9Himr6V9nKUju17wPFRKx2F436Y2Bvxs3YeL39AVLgYninG6EFHVALDAQjT1Dn4",
  "key9": "4JrpbnHhpDevkrP3EQZMjNrdDzRMyYWRiJtv7Q8WMrcD68e6puCkmrBRDTTJ56ZBh5SyawqPUb8DjG371SW5CTZU",
  "key10": "39Jb3m7momkGz6LosuVgW3VMafK15Fcqh4DPfPBxCjtLU1VwhmGJt2FFi3y5gTxdueM8m2akVLx6ry9UXXHWbVvb",
  "key11": "53zrrnrUbpndJ61rB2bH3NzXEpuu3YZGEpCDJSBSrLp6Tj12RzQnvpQZeEHYoqkEsZpM9p6RXubbKQBTKAriCPke",
  "key12": "58vfN8HBQ3ggbxPeyWEKJcsPyACbtL3puVGURgwLg5Ac2NVccDh6BpJLXim7UNxW9JSELQu8W4x9XnkLNePBQyrC",
  "key13": "4bv8YG97ymZTCxRYtTSbsqPsjuGjD9Bu2fjNfVext8MhtUPsYnGnVkkFvTXSRecJqt1JCS5g7d2YDVbq51cfiEvo",
  "key14": "5s4eCggTJ7pPBBBARSvbJ6ecDwnFg6EsXQrabbwHjwvAjtJZiKo4WrmBFaA6oRnYmFL1G6bxgSJLR1sCHtKryeJQ",
  "key15": "5Xxghf7YmHbHat8mKan1p6gSMcUSCm35BVXgxTRy7Ab5nw6Srye7SPGtVJKMHjnTLAbFERnNrum6EDysHokUyfHv",
  "key16": "56D3aCRu8GUURrkDBgZaDzp71DqQj1HRSm8f851KmVZ7XzUSJs84JDQaFHmhQKnyvQwnqkPZhZiAccLbfaVHmiHx",
  "key17": "3KKKd6kWQXp2cvB1px777Re3RWiSWdnLHKZft7Bzzg62bt511iJ9CdHa2FWYiwBBgFPmC1w76dAnUvQzFQfJ3h2X",
  "key18": "3QC7Jz4EQHD4gXZRkC6JVdBByh7T9CZeoMz3nfykFgxhyZHUpDKg51HDf3m8womx8nf5vKeDP81squRzPWQ3LTmD",
  "key19": "jtrDQmsrBMfYuvf2Zi1VnD1ps6HHXfJXpNEWn82CpMaV7H56xo8YreP2MzH2y1aFXWSTSkeRFcgQfeH5GomxuRR",
  "key20": "4f6aUdE2Z34ZtbAGnNtEJCJdK45MP6fW2BoHPFEM7nWCYBYwn899X2JJdGmUPrysDztGAs6s6x4EJ7KzssmUMFab",
  "key21": "Wk6pYUB6evMaHiy4QgYHbAnjChrWEouw4RwYH34mRzHcQhKtV9Dzjkbnr3Y4UzKdFLuH9aHUdyNEHkZc68HofmS",
  "key22": "fAeVtprLQVRzoPJJJpQB8iqgLicx1KWRersoNVTYZoLe3iuPY92gLu835oQdW79mWbn2qniAw4HaYcS2yqpxptw",
  "key23": "3eYJzyhZnZRQaReaU3iGoaBDuSEn2GSREMutTSC4BE851bEjfL1gqTekA8FSLfbzn8KoBKAovbQzWUhaT18bcy7p",
  "key24": "omPmWsyMG1ym3WPgwKd5hdi13J5MhYJ3bwvce5Q88cbThs1VJpS6YCWExtzDyPrAkw4mHimXFbHR2qtxGaey6ic",
  "key25": "55yLrg1mecz7JqSKHZMvHnxQSuKtPp4XGZT9foXWbtFPu5tQwC6ZXqvD3qXD9mh3MW9YXfNVBLpBJZCxywyu1yNS",
  "key26": "2djo1TkGqQ83v56yHVRAkegGpX1XTw13yenV9MFZTLp5tHHn7V1Syabwi88LVqHj54RhLvzKvUcCvZgjyJdRv7KX",
  "key27": "4oMTtDhuuus6o1tQnt9dn9kFyEmcxhoCFN3tmdKoraHFZ54aG6N8kfDHtsNUmUxdh3F53JSkauyH6jF7jSjh3V9u",
  "key28": "2akq1dBBRmRMvex7QrvoAw9jBSuS8kcXRUQLDxGoV7qiAJSJjJDCvnm7ivRWkX4dUXBaqUW3JR3KsDPPVcXJ5zJ3",
  "key29": "4uDGDqDQ2pFpmhpLsQwBWuycuuj3qRjY9qHFeB5pKptkNa9JZKPFngQ2Awk91REFf5DWtJF7KLPu7YAPq132Zuee",
  "key30": "25kmEt6NbvW7ag57sUwFnyjTatMKJigbwnz3anPnSaUs2Jsgc9EDVekpq9rgPVtAqwVxJMfr3hzRE8oEhkbAVBdg",
  "key31": "2wazEtrC91moDczdhdAVjyNTNxK16GtarNbazdc8qTFPuxF8NjUeM2Jm1bhi2GwwAnKLSTz14XtUvQoLJyG7YT1Z",
  "key32": "65mUv55SKGiswbwn8q6AfxbeivLuTPn835J8c9yUVDVXeJeYUk9zkgizXv4AKhkR5Yhf34j6E19DyKRdELw2Ey3o",
  "key33": "2uht8Hh5q2f5Ge8SAH2HiKND3fdxvvAStU73aG1SA5bzBhf1NZSmPuEmnqSrKDAFxL9HtfNKxe3DZ3A5rboDKBqm"
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
