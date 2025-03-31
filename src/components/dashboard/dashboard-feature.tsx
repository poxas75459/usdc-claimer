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
    "5rLmxsaYZ1cbqitcBFrtLZ2uyCgQrPCxAAi7fNnAv9U1mQkRFFYUqtLJ5tLLXDkXQtGk64EF6tdzKvHyQMLuULkj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WedaVmyc62PcMCfK7VBmf8BfxgX9R7vZVynMK6vu7j5p7WyrAutCcadCukCm2EmTgB3fwhebJZiYgQjzhSxFaU7",
  "key1": "46XamgMEBPQninaJJaora7GfHJy1RMTbMWemqc2VqjpsEtY87stJ4so2nXpX1tT5uC7bTryjQMs5YDJNSLGDFZz7",
  "key2": "4yc3g3TwAXuntwDgoMbeWD9HhTzbkpgBMo8rz1Y93Hoo7LeS16pKVPNnJyuRQpKTYX27MaHbS9xLQTb79gj5spuX",
  "key3": "Ltujck5pW2N3oqSgPnSfMRXanP1yx8oQVVcVrTCRLyTaC3EiuXMf3e3f9fLz3GzEVv8vgZJUaVnwDiNbVgNfgb8",
  "key4": "axXMqpYyZZChEGUSCiJK3W8v1sRUEjjtmubs8FmKNPPhk3rZQQYYtJiAxSfxzj34ok3WTgu22WF8cpWXphQnpKN",
  "key5": "5UcKdkGnCnbyGLKoQZrzQDRb1htApafNaqhqP1jDxmf3HsGynaH8kusqvvdfV1cbBP12gL452tirzEudAmud87dp",
  "key6": "2fACqExKTUFbZL3UjKQZLtNWYTheoJBL6yDzv1ueZkBqfJC69QY3gKLDu1QdgS2HQ6S2odq2Cks7moPgrNeFBEsJ",
  "key7": "JZW5ZKCueUvUb9byFYEnZrtsJrQW4n3eK7Cx2zsuGPZnNzY5s2qUKHWrHeUeJzKSTm7gw8J5D1fU7rec3sYHawy",
  "key8": "4mkMcaeUVuY6Cutjr4SmexcpnCbmWKrXCCYgsCjhyMpX2CtdaikWiKZ2kcU4hTDpX3MYejiuSLVHnEu7q7QS3MC9",
  "key9": "3LbZsSK2e4cEB4jTnBFrCwtVFRdpbDeXfmmsZMjYEpSFY22BiH4a5zWG3xkK37VgfnpAbSnHZu46vvPskyvp4Yrb",
  "key10": "4cdRjxLQhFqrGjqHPAjeLP8KkUiPBcWhrZLCjeB5w6xcdTEEZXp2H3K1QYCzdxW6M4cffizCbftu7syoCdTcFtmu",
  "key11": "zD1HxaHLxZnwvUFDFapbQKJyf6YdS7qf1faxzkPir5hR9o89hvjgWfxTQSwH5tWEJ4WD8MpEKjvGX2f1Ry13uDH",
  "key12": "2NnHXXshRmBY4SKZCNA8Lyt3sZ1rjJNxKb7968eeoMQrpCx9wFgULmU583WfeU4n4u48dk87juF8CJTWXxTzoGT3",
  "key13": "5kHwMEXFLxyxttLrCV9jAC5MJZi2tYKzZTFb6Yy8j3cPhvf868vZSjxKh9N8BMoGsVpAY7NB4H38dxD489k5FskE",
  "key14": "3mQtkxuWBAK6UB5Gd2rQe6SKwHRRRgv9r2UnMFsbQhZBMBgznhoMXuKoMDBgGcbVDGSCHXghWFdZvwefWtCxUDfZ",
  "key15": "3XpWaReM8vCPB7X5aqFgC1rJogpaqRuGC6k6XoBt2wAVT3xpW5dchjeWZh1qQVfJAkmxFVajRXcVughJLQCDwL1U",
  "key16": "4MwZ9ahb8g4pmVCE511d4c72nLmzr3DpVHnX4sjGV7jo4x7sKQGhp8d7LhXcx2bMEq6U7rSmbQmL9hempWHYvGS7",
  "key17": "4SnMjFK6J9HDWk96Ui9dNngairNdwrq51bmwVbKmHbrsgZynmqgHbNB1zDEnyePGLKym6oFUTZe7Ew9a3uTHKmBJ",
  "key18": "JAfxzyCTw8rQvpZJxQGwFygT7cRYf6xnemKDoUYXiLfNLVe4QfpxDqj8rpwEkNAMLQ6ksE1Kagf2UuScjGay2Xo",
  "key19": "4NsVKJcvH4GYBHwynPR23utk5eM6fKKSxYToFwsUVmEe8HyYACyUVAd1jRqe7GKTYCgyqajLuLtgRXdi9tp5YHBW",
  "key20": "29Hhq1rQuQS5oYQFVpLSZMioyJXSQgHLt9bnhhkh3PC6Bad4VJsz7FyWxfpdjE88bG2VA9RhcFjFpeLej7tK8PGY",
  "key21": "58iyoD4wmARnW2vgBagXk475oarzDWqD1dFREwPuszf5xvdSh2ZcPdmMLHps1mJ2aWKz9cooAszS1gEHRQJFXrqv",
  "key22": "27bUG8BmM3QyK5NKcsVXs7Xq5sfQf3naMuaxBb4HhgmDjpq2jfp7maP9G4cxMxufPTqV2frfbnSUYqSCjuwx3bMP",
  "key23": "2PUiQXEZEbnZPYeCq587nsKWSKQo5UceJE1YKS2wFNWm9QwsTgjR7jAoGZgXeJg6XUszQs4XE6rTkEEfgfPnmfkH",
  "key24": "cRVd1nnLmsLUKs9EKhdjnhRfRTm2VahALpzV194p8M5UabCQWkNGbjeVzTEeiRPV96kswrahQ9VqTduRtyke3Cq",
  "key25": "2yj2sdbMeCUr1y6vrC4RCFZHeAdhHQX7G77V9QSZ7ihTQaGv6dzYiUhRMpSAbc7zt2hjjo9B5ULkmqYX7d7fzJwZ",
  "key26": "4SPwdPRycRiCQdZVZqKvAJabXLr38BSS8hVMTbcahycScSsv7v4gH2WqaDo2ZnFtAKLTqsuS51iQudTXHVTwm5qv",
  "key27": "2MQKzwE3yaxAmqTAiAT5qcsnyhmxTSqQfGt7Z5d3ToRb8R95eUGBuVH6FQDHRokgEtdLYg1YkHpH9E4Vzh4CQkRF"
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
