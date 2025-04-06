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
    "3rLJmpnMwduEWNgF6pEmkVZdhJLP3aY3fHpg4g2x4dkFTbo4UCtyF6Tr6uvqcdo4DfZatofYw8FsSVqwXtusuybX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52FtBdMzuvbm9h2cs5KE5ykNBrBSJHs5kiesRKfzAeE4cDNXh8ZAbfMJPbZet67YukhGyJVZnaxLDw9vnZsKxoHE",
  "key1": "63AYJXD7PC1wZZXnPCDHniQQfXXcrwy65ZYK33pHKqgXK8yEQP1drdY5Y7jxUXePSgEGH5GFEUFdzkfeBJtyz8XW",
  "key2": "4NEc92E9V3uVo8pDc2xuAY4h7xG439Dei4Fkm83howNEtvcmX5he6PsyqT8xcUAK31rCFgwoBo4WXJH2thJqFuM2",
  "key3": "4qH4ECrL8uAoLHXEYGoYzz51zJuTKUAmMJfJsEuiKcskFVaB3RF63mrWiHGNChR7REwYC633pdcBUJSWQQg1ys79",
  "key4": "VuDEb23TdpPdZAcyU9nw7Sj8JcnzukkFo6pa1FkZL85zxCdWQ5RufbqqeHa9x7dySGNBS8fZ8AzdR1jziAo9JM9",
  "key5": "2PhKinjRb2p8JJVwsATDg59s19UXPQmJftrpsWHneDMe8fjsAFdyKxrBz14Acyzj6c297hYC2zbBRU6LVoU4ZizZ",
  "key6": "3uYu3bGkPVq6fy9aNZAZWKgcSwUFQv8nWUJ8czo4oM3mYg48hZs1Fo35fJktsVuJhT5UFr3i7mRKMzsbhhvpXQ5y",
  "key7": "2yRF9jtyYUccB6PvzQbM8Uvt5eTzTAdHZHTPUq9weAeGtFGjDRs7sGA6o758CVQR7EYtDakzJ2UGGMxz8n4e4E2V",
  "key8": "57xaR6wejWNT14oULWvyyS2jqLYmNwSdaKW9wmy1LXtDef3Wu5gL9T6aPztdwTGJtLdkhKFARnLKa4Bmisy6h9in",
  "key9": "XT667YgthPqrzm1sKcjfCYNq5nmQ2YWakLUpowEe2LPTiiXFSFVReEppUi8WmUNBAZuiTkRSLwbNyYLDtr6kvq8",
  "key10": "2hKaXetm1BGdCFcKHvJnVM3Ct5nPy8AMhppmz5RzN42xJaoYUTBPBXkfAfoCHDK7MtiS2vqwub7pPbaU6pQ2ULTY",
  "key11": "4m7yGGDABsYS3Q4v6rHQecTmwMAL8c9g4fM1XagBta83oaiThjpsXDX2VYXEfKj39JFvQ5oae432RmHEoAibd91z",
  "key12": "2M4cdmSv7uAjBKDJ4oFzkXTwPGPT5YZS7FDRSethMZUT3yevD5QcL2jz3ZrE8HBxKxZrhUZdJ2dC49J5eUr5rKWx",
  "key13": "3i87JjzbbmCH4NgoLyFbh5PCgxMh7v7sqZVptBM1v1DD5eWDbTQpsUwHtmvjrQYhC8smfDAxaQRYLgfkzMYZE4Qe",
  "key14": "2UdmvbdyBViY5bekAsYLL93q3pyEApzmByTz5WXSiMe8kYTJYQmH4t5PAMUbAdSpHKLBocyF8VGazsWDfuPQkRMA",
  "key15": "3pWDd5UFoWxYG7ZZqUGKLg8mENNfbEWSYg2jumXX65VcAK4HKwG7WG44EWnwu4AqTRwozJ3FJUdjYBwJMWJN6JeA",
  "key16": "2KtnunuuQxQ8ZVQWTvrBoA9kptcNewxLX1RXvUT6md3z59L2REySXftjy1ypkYzZFaoQ7YKbiK1BF3CZPZwiL1Gz",
  "key17": "4ark8r6WLGXdDhW2EPkTUiBoeER2wHgk8xofPpcKrb8J4aH24MRqWTjXkUmoox1CCHHNFPBfmphBsu33sBjRDguJ",
  "key18": "1ioUtzRMTQ7NWFnCB2DQMVFSDSoof1DAh6cAYVDvwCz6hp7pKuDgm8LnBAMQCgc9H1LdDkUnrmdEBFdzB2Aoe2f",
  "key19": "5qf9ppMbervzoxzcpsMEAVZ6Np2hgxBTwF15NJ8xDNbRK6S9D6zxjx2r6q6bsKByz2ZHmVcMgiXaQYEhRGKQ9nYJ",
  "key20": "2SqZRsJRBCzUEcHQxcA8Gt3skjBrypdTFf1BwGAiqwpxbjgP26176BmgXwikxnXXaTyAbS3aYHRxTHhhXe7MJSX7",
  "key21": "3FcYBcJYdHUKhVnTQrqCq3N9FeW8AYH98VHkiwY94CPf5Cj5ghFW6xj8QpPUCLBJBKYnEyFw9nzeEyf7b7JDuaKD",
  "key22": "2kwRVRgxgufGfKNWhataLXTMr6jkLBeMZtcXoBEtqFWZqHR3pfCzRGYU61fXxckVRNCnQJQMkYsWfEi8v7C7DzLZ",
  "key23": "3cJauVovZ1BrHu8gvhrBWqgGwmNrDi2WRZpUm3gQ9yP5dxUEhAGaeAQzphBjszMq1aDMMti1oqjKVDCo2kEjXK72",
  "key24": "4Nb2a9oNHpFdNXXj5zDWEjZUXGXKSGSn1a4yGVrU5Xu7N8WX8EoVqdbTmnjG1bD3wmfWRjcAZ5q9C9arPi88VpgY",
  "key25": "2qRArWwz4Pv4hzpqYi2GJDsuaknhaGUVRVBCpYo9vb6UUx2zkMR3LsqMpGavR3Ft6xPjeSJktDbsgR5npastQWUC"
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
