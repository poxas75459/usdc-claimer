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
    "4U8PwobiVzLGP5SiBBZCv8WyJRLrS2bdeoT9gQWMC1XniSniJBcYJryCiV6aivtMsVg9RDdxchXPN9tRgahRcBfQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3d9qn6Nq66uon3puuxs3ewr7VGv9eK4Uho9DuVyqhjjAZui9qzwKPRV2AkM7YBY44sBJy2KxBKAcpJJTSyUPk8ci",
  "key1": "4t59yA1M4UHijjeJx7cTdy8trq2BBMp4TPBXhgpKrygR28cDi3LNcTKJ7RSS9F5ZdadiYA6PPoiGtjKkwQ4w9RXC",
  "key2": "3LjPDiKpQYormMjpQGBpPV58d8D37KLcM6JUtAYVNUSLtGuGUQr9PKkR8yCgP2mhFPE1MqRgN23v5ErrAUSDcTv6",
  "key3": "4haSBS9gjQTjdtrEbjigEp9HuDtZcWoaA36uUX3bg83T7t6wnSgeLDMX8HRoPW5fLdq6t7YUzD7D2TJGwMYy8Rbv",
  "key4": "4BeNXpyLkyB6K7KHdfMvkxDHWfTeHZETWnRqzZjr7Mmcs8PM14zJKcLJm39EkJrapJgv8oqWkk1NzDLcoGqaZ7Bs",
  "key5": "veSUWPVyPS21EiBse5CBMf6opVar2hfnZrwh1vndryyKxUxsYgDoDx4ytSS1Wk1QEowabNArYawnDNQeiBjxS82",
  "key6": "4XDRUrxiCGaxf5J6nFWQXY6J9FdKXKRDo37Z1gtPizWyTTEUzfeL9V7mo6GFG47qdozmkov2FyeXSNrWyyh38arK",
  "key7": "5TbXGC8qcNnYyhC46L6KdiZ5aGaWF3RARQkvE5GcBrqLGfSFYZ5Ax5JxaYX9V3nH49MWZVWaHNDBqd3Bs6NKqcJo",
  "key8": "cLCPLe3sRryZmtpoEvZd1KAYuCdPsnZsJK1QFBuqsMMpHyFePTN6pY8V9mPv4sqRMRCNnN2pvmCXP71Eq7fu5a4",
  "key9": "5n43R5P6BM5NNK1FaeUoWpDS1FgpeZzJHavUKvQPvnxLd1Jb11vVuijnEoBh9Rdv639K7jGU1q6DLQ5fRvwJBdPq",
  "key10": "am5V9tPqJgJsqepZ7KqHHuwxcLSmQpCcH7gy41fqKQfgJFMGmrDNPCRE7RUShbqWYrRagMv1CWKAGTMCf83mYBs",
  "key11": "PwBtqYyvp7dXb2a79qY6VuPc8SWoph1nddyAerReG4NC5t7Jk2b1TMzT3ZYBv7MiYDnzV6WFwfJ85Gqq8HkqcYy",
  "key12": "jeYnLcLy24ZNk1J9GEMk4BSSY8XJBGeevmxkwjsu8AbttkzzAax13coC1vzWHjoxmeuYv4vKFqGLFA5yHa76uwx",
  "key13": "37yzSZL3hd84VpvhLCZfhJpwphQe4DDqrBoh8q3xogyspnx9Lo1HLKLYAr7h3yC7j93coj9sub2iNakDUw5fPvyL",
  "key14": "3ojWUXrziWFN6yJCZepptbZ1Y7FjcMmsayeMw4jzsXz6XqQZEEdmRjafcFTQqTZ8VK9s6TqVfysskq2i1hbRr423",
  "key15": "2VcM41y4ECmxzPQVBRK5Nc53B8iVFJXntJMXM3bKcDFesACLknE858ByQKaTwV1dfbWis91t2H69x3tvw2UQgmNh",
  "key16": "2b6QG9vVo6Eu3ZMBjM5ouYAzdh3TXX9hVTYhs6SDoKdae75LjVYrQ7pez4gVKzqE1Lj6WMgmAhXQB1QbVJytaY9e",
  "key17": "2UqH5Ki8VBg8vyRgj7ynztYBf27a1uis7EKicG5ACevtzyitydViQrG8G5hRW95wJoYzLhvCfdHUZgb6dxoy2rLe",
  "key18": "gsduHJZMbn8qismasTM9XtThaqp5zT8htr4wmvsB3m9bbd2DZVpY7ZJ9HZ2WcjADrqLmDAbHcbepuY3f1U6UkLj",
  "key19": "4UsQjP7RN5GxVNCGedabbWffPdfarKFqLT3D6knQgAp5sHbAAn26WzocbPfgwZZYCcGrirgkTGPSc886A6h5585C",
  "key20": "3Q9U54REC51HpYg2dmXZMp6JtTcKv4sMEo24rDSv9hJ9hdpzmNQovEsDMfmDw18KhcQ4eUxfErazBEhNqtgpcmm3",
  "key21": "8KX4EidV3Nnh5vs2fNyd9jH6SC4feWG5vgNtrJ55aS8WJLUA2Hb2Sny7n3dkEQr11t169vitf4j5iujeA8gyYZx",
  "key22": "2UNDK5LQhTveDKzJmbdeTxCHk81S8FzpLLYkfj1NficJP3poXmohTZNMhpdNFwKgViChm41tnTdFSMd2DUnvS61Z",
  "key23": "ntbsU3gcTNxdtEty6hJUJLZcZVySoeZv3Uiddbm91vgHCQxesr5Sg4Ab9X2Xn3KmxnYUgPgCyPx759JWUnYzTph",
  "key24": "3zwW3kcj4Li9n9xyF3twd854GFWvhbfcDt2TebPMHiuEBa7zyqWsFDs7M6MRoNFtoWuoi2oUTowaa7F6hCBHr7AN",
  "key25": "4jUK2UyqVD5UnA43qFqh7CRexnvaSUX9aADZhXkGrYgaGDBKtx39jRJH4epABywCMfaKB1z7G119vePRukP6R7J6",
  "key26": "4niy2DnH41yC9LyJ3F5BK7fD8kTuAkDH5E2Z78YFGqJLNizssJvuRZTJEkHoDeAiJzzhjEsJKKZ4E77U4FJDg6Bi",
  "key27": "5g41de1CKHejKcz3fkom8q9i8SVDrLPpwnMuZZkz2PWUcBot4VZpFxZmmDsrRQT7G5ZSQfueaSt7uPgD6jYRgj6S"
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
