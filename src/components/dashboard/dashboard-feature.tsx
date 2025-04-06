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
    "aJFhJMgxJGxh69C6rG4hHuZD51Ymot3AGXuaU4S6oBujqgP1pisSZXhmrzUYkorf9RjZzRAcCbGDVePBmtdfKxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MWW2LjUkWbbz6hRqmA7sRhMgdTNLGeaVCPmeoXHXumFWNBweTyYx83LifHjYLM1cfntXBs19JVrf3YJip9pSHht",
  "key1": "23p8WmQTqHsrdDzqCgx3Y9dez4BeAHHwQzupADuk3pWFz6fK3cRGsqHFaA6uGHKnCbZdWi5gvYbysyvLPnrpprTd",
  "key2": "2pbTHryoY5Urnsm9Dy7fbtsYY7KcrPdNmnTgjjKmn2AkH9xL9YQKf75dZAtUNMbHA8K5beFCYQRYDiZV8BkLe8WA",
  "key3": "5DcJgitkh1q8KnCBVVnuHzqx4Uhj54iRCdJ3qtHB6J8Grf3RYUassCPHdWBVMp4y9iEc4erJahAwMewVUYzxNpim",
  "key4": "56rjGYAZ8if57bX8WYgTDcbvBYS9NWnqb6ZNGyuDL44w9ac45XfZHDLgb8nFenSzcEbdj85CWPZoRMqNUXhEWaqM",
  "key5": "3MJNFq7f6fHfnbt5s8dGuiW4YsafKm6bKNXLvJCcS1bsYQ54rmp46K6WdLLdcLyfVgnTgJGnh5pSoymKJhn5DWLx",
  "key6": "48YPZBaKPbEtMLRJCg4uZJFmGgrfoHYKEWdptMwMNjPmpCfNhgvPkS91fd6esQx6qaZipTwrfuc6sdx4JcCEhckn",
  "key7": "3DT6foeDz6FZq8M9eSZ1A8vAsPP6MNXEoHQTHs8LbiKXq7F8ANtTAe47G18chmPAfk5sY5H1nPKiF2cJuD66kJjx",
  "key8": "3VyZWyx8R59GnK88sWviemWW6Comk1nB4jHkpbvLMYKFKoRvJMR7odS8pqUSfrqu2MTSAtbu8fVDzTShXP2QT565",
  "key9": "4FAVdtjECsRziji4JGzGN8zhotarybCrPrzafzNKo4Qmcm7pFuH4gGx6BdXgpYiwpCvzgr6uEt93xjJnZEW4rgp3",
  "key10": "21dn6Dxv7wBBhUsTxbwz7HneQVmpcKt6nnZnXDS4zyNLfF7Ktd53JtdUAmSS92cFVmKpHwBEQxvfWkx7zPyLtVdX",
  "key11": "obHsNH9SGuHyYcAHNRBZSZgKqVwijyFDUA9RkohqsG2gNUvHHrREmLctfGqM45Fw8NiYxiJJpdEAXgZic7LcfcB",
  "key12": "9MCBQo1eGuRjgVhek4HRTczNh8cEqhphnhYz9gyfE1eSQXtyBSk9G6FaLvsAcFKCFjyt4yDhDS1HJ2qHtJVhtwt",
  "key13": "4JT5W3JJqy4Jka6hmsr7E41VZoZHvx67YAEVE7Q4ZaMUjVE7LtQMrQkESKG4YdDZ6z2VH68Sj15Q1BvoiK5oVXPJ",
  "key14": "3yc5jvyLAm6ykBB2gg2nNTmW4tYt5E4hzsYdzr2524zjsS7YT8TEB9Sc8vyYXtF4Tq1YxnZcgspcX6agcnUj7Gj5",
  "key15": "2SKYnpvWsogLsu73vPYeH6F9JwTrF89RozEo5rbLB8NvnZLPJSed7rKxPMSLLQDXe9c9CYmcXN4RbtVjRJc6VEjn",
  "key16": "5G2JRFx4tYEKaLprSNR3tMnYXAevcHXbzhU7GaWhzVR77pkEkziVqgB7E1EMueX4KxVYyRQxCMLyraxzU1EgXAKd",
  "key17": "5tWH62DB76VgFcpRMDbMmKNfRiUkjM5ix2w14roP3Rig7bMKDfmzha8CECMZAdDxoz5YQUTpbUDoBcSYgxJCBqAV",
  "key18": "4iuddioX4RFzTyBb9USzHn6LcwBTqDd7SqCE31Hm8Dm6UCUsTsJBk5mWgsNGdPV8jDPmwMt1MJdMoYfQDLVu2Rb7",
  "key19": "EgC83Lft4uxk5335y1XzEvdBuhpQ6joFztgjwD2CTLYzCRPeqERtPqGiSa3dKTmufdhDeHRAzzJfbdvu4UXP2yj",
  "key20": "3f9MLY9vsXs8Q9XiDMkyRQ5eTtqNn2KxwWTrD7roFDYbx4gVovNcvsQrjzfSHFfjsS1MyZZ9kMziF3xqfrqoFbzb",
  "key21": "5Lym8vX9fSrhBu4vXUvaFGpjEQGqgbUTrRcizcjoAF1qyJ2WXqBEG3QnzwMRomsh2Cx4X2Xq1FzDqGXbkHksJRrF",
  "key22": "2gUKo7nj2whibSAQEvUuQrtgRR5DGRQoPaaQUfCTKa8i96BPBEztifT8E8LdgHc13TE5NM8CGD4k2MpaSUSWkfq8",
  "key23": "5Yqd6eVGD5eCPyqiS7fyEh6QTU2m2VmhtzMRTjX8yayMkUVaJARFLZs2JfUCNzD8ENXh8D3aEysEdiUMswRumTa7",
  "key24": "8P5cdNHrmxhnVfM4WNdzmsdx2FHhUS4cnWNbq6o8ESrzrjb7JWc6rRrENcnM3NkjvdV4xesDAh1CCmdGmpdn61E"
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
