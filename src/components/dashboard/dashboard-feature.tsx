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
    "5a97m6JMGBJvTpETvxbgpbjDKoT8n4eLhWMuLmXyFApouyAxfmXcmyd4NuN7tP4khxCpNPomt9LLYj4eTCcSfLmi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BKtFDNTLzfetfBbP11GjnkFf6GhVNKwAu4gM3Z282fsayZdrhAV5HAAfNybr5u2jiyENGfUJfVCvnqYevcNRZyR",
  "key1": "4W4ewqzr9xVUhEGGAaHCrbmySfGHcU4jq5V6Mxz6aBbeJ1RxxNvg7shFgwjnMzVvXMcvQb3ecU9WwEKmA2qrWWR",
  "key2": "kTcLsTakNNd76F7dehfav9gLDtmdmLxTTs5cKZckjBs88fsJEkdgieo9RH8xthS5wuV55TossKEdXVhAYnkyGAz",
  "key3": "637aZDTE4wTk6asUxhbRAy97VJQZLQFgsKi9Gbm9Pg7bHiHnjnkfKFokuF7cQ5EdKxQXcbF11pmxEtHmEKNscisw",
  "key4": "h4bP5hNFmyxFD7DFSKNDw5wFzcgzBStvVs5fK97Bkc9J8pwnfXkce4aZ9S2WfMzDWsqszmbdFLcXjrRbG5qiA6v",
  "key5": "vzv1KFWiE7Bn1M5nGHCn7Vr3vwndFkotBx8tX7Dmsc8DdpHAHcuFJiCkUaDVj29EcH1dUkhDozPDzDRRENLwoho",
  "key6": "3yD5Vr1mEt5iWyNkTtf32etYpjKHsmoAyecu9BtxHPWZRuVru8EM3cxXpeRpze5KyWSdMtGnB3jZSYZj27ZVv6h4",
  "key7": "jJAdK8KRrRJLuniZJs4St7RQHtvuuwXcJs4Yr7Wd2ku88ea7Gy22Ko3kZQDEu5LXUiC1a8t2EJZXS4r1pmyQ5m1",
  "key8": "36fkiZQVTSzbBDXNaDDhiuT2tQ6VryvPFc5m1LRJM7HgPkySZo5JSyZQwDgX5p71Wbrz58ye7q7fJc5mxFopF8fv",
  "key9": "3JGUsLgsKcbuyBLyaferDkZj8ZrS8aSMzShEkbt5fZ98xJ71Bp65RLMfvZik5tXjwQYs2ZQPMyTMaMuLThePkLHD",
  "key10": "WZbKku52Lymoc7aHSUxitcCXqxMbwiWgFyuNvpPAoZ62fjtay8KkxFfnUyWgmgT8yChWNWqLXNM5pshYaUuxLUe",
  "key11": "2tcfPrXQ8nRu9DjpeB8ehUmYY9Q51zzzuXEkALb8Qs4KQxz5u3U3cyzw8vF9jWt3LquW2avEGXUoJc5jD6dUQFoe",
  "key12": "3oj3LRLGYzVcYd7M7Wu1CwPU5RKhhXL9qSVWXjQ9MUGmUYUPfpqddNgZg7jNMNTaEgBHzEsDwDPPCatwGaG6rqzM",
  "key13": "53yW281zWoZ2xeVERCbEazxHpKhMVCJNevnJBnhRYGzQ5y2ayZKFCvyxwjQmbqoBykXwKUdjZcrn6yUzXPoFEjzc",
  "key14": "5jScRzVLghtv1NeWGF1maRt53KLeG5df9SNG5uN1kafpVnKiEnuD7UfJHywxkbVPmHHhcRdWcjDX7r5VqmVqeFmL",
  "key15": "21TuezhTTWt6UAtrx7oBbWMPwFs182Qcv6u9nYENuYipGst7RmbBLjLgnUHVWkPB78GDmRVFRfyh5yZ2A81m3duf",
  "key16": "4tByGYHfueh3VRn1hNTNa3Ev1g8GgYyzCXcQxPDbF6oE6icCpJWSXgYQN7p7YseLKyELbtrAvkLeNjjJDXRLSnLk",
  "key17": "5tZvKWgpbRxeP71USt64tMQ5dT3x8conJLQeCB8S65t45J5YXZNBCMDBCgwhcErxC6GByfX9AKCu45qANqJyZGrY",
  "key18": "66hwH4nrGbJ6oQp1kjFBXmzi1znGmsCUYppp1t58aKiEFVL6JjNiQXsBiFnEe5huCzRwo8rH1Fg8EeFX88PjzSDK",
  "key19": "3ncWuyMLhkEdybHcBzhuwhDwZokQWgqsBLdi3D29fnLUg4Vw1mYhiVw6ZhZnKQgioeEvqHfhoKqhrm33hdtSRc2F",
  "key20": "mmeKPcnXSBdViritBA9nDSW1BjbPrZsrrPPAhwJxmEoyFLSjPNsD3pC2ZkLUUSHVPmbq1MsZEJgsGhSXpX35RMa",
  "key21": "5ceeron3WKrM7eHFfx2iaizBGjLT3Nv32j4QKSbpWEUSAvE4fgHWkNGsx8ndUbkSsB2VFrZvTcLV8TuCwbDSW5Vj",
  "key22": "4gj2o4riNN8GfqfCAiNgnsfkyNGLfuFtKYyAw7s9g7PKKeJqFuV1skp1TjpXnwdDgavuNSbeXiokvAha7ScS2dYj",
  "key23": "2xDHAYWdv97sdxVwXsU9GSZBZGcVQxX1Scnudf9aKEcwtQ3GmmCSb25bunbBe2Ky7LbDc9W5twgNVTPNfFjbiUdd",
  "key24": "2kvEPYP3exxKPGZktku6wRZxNszeyaWHKUKegdPUbxh3WsB9TGHMY1WjAmcAPGuHVUFqNsxfotNLdYVANRAeSfcZ",
  "key25": "22xL4yNmmqcr5LkbNp9SunCZCvLgMs8jogcAeqshZzvgT7tE4t3LGyAT5wiYaUhz1jZ3kHDFRhLDFgVydY4DRCyx",
  "key26": "5usiCYSGwV9NswtYMPEhU84jx7rt8LYHzAwqmxzVgLVwpvLjN5LnsXVNCaknLJT7u9hdho2jDWRBpL2vsajBuJvM",
  "key27": "2TJVckVQGM1GJuJYpc5mYuvNgY1fuZ4E9ziTFeui2wAd8u3gQbb9c3rJtbqAC7ePhFTgYrLUnhCFDhTRTyKrCMyh"
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
