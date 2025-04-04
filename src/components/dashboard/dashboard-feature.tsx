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
    "Jf6CZnFLNeBmGcVeJZRGBDs9Anob8xq57uJv593rbCGA7494yKCKY2vLUqE9tAvJxzT1RLJscfmCBsSci91U6iw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hkCCWTn3q5kAJSnEiWyLTGFrNyKqFNUC5M6CMtsxVG1xYur6J79hUGbXotDW15wTnskLMCHNRe9ZDsvfkCSL46h",
  "key1": "4YJD8Ze1enGPg1pY6RTiHuxzsg6a5YZqNQBJozEo7JmgwkCPgKQosR5AteqDtDDiyXUjWwxzrbAb1JWfFm14zdRm",
  "key2": "674hQdXEp98B68xjoGd6b2srTsjN9bM2wHjbqh7ASoML5TtNujk68ZZdDfqVnPcubTiPFM7AmkZJxY7BY93sKrFc",
  "key3": "3XHtj9ymnKL3a12ssjH9vtak4mgRTZuqxdqTrQRr4Ag3VRmcxo8S7c6f4eEj4aB6NRhCiXHBKQfnhjRSoHq2ZMn4",
  "key4": "4bGaizUqiPWUXUkBnogwrpm6dGxjQBtvQ7D4H626G7u2YhsCSoxfr6fmKb8XL4b2CfKA3vNd7hVfGNK75D1uMyFo",
  "key5": "5zcGd9sVedVaVnqD4Ja6UwTWj9fVSvUrvscdxyyNUPKaufPbcLaAUm1nnXWywbnPbtFSVRp7SoD8pgJEfY1SHiqW",
  "key6": "3CJoH2SRy1fRViStQKGM42adEyjecXPt6JQZQ1MhWiu57BgduK77AQvAh6TZyrhKSW1n7xfeHS8DA5ZW9y6ktMEc",
  "key7": "47MAqzw9FbB8T2rFxxwwuQEEWtqWMVE2RgeXwwF1TCGvKLvtQW3iyKPX2Ks3fWrgiyN3hjNumzLokFccvnUVjsPR",
  "key8": "2K1A1V8Fnnadh7Yv4k29tNYAEM25niA11CdiyDB9XD6EKpbU7Dj7GebH1G6xfnHVukVom5Jh2pyCfRw2iNvwr9XG",
  "key9": "4XiU3G8oN2MTELAeBAqsGri4BxPShvhA8v3hfjNGM9i9BWA3wTwp1kh6BXmr5f4Aenb35bFkQQMtqQVUC6YaLS3F",
  "key10": "3AvBHPj5vrhXaPceYK15CUgUUhwgNEE3wkzqXcFC5UY1de7x2asVaTUWqYWRgZZzVBc5epoe9hWJvVDxyhLi37q2",
  "key11": "3MdKpCpScTHDuZJyVMrnu91ASpoXdbHskNMy3zLYA65NTKbJyeU2jaMaN4pY1dXxvMfFrKTgnwesaENuXzEH6Je5",
  "key12": "mpJuK5HBp4qmjNBprhE9MsaBXYMA2gMcALvRUMfjSqZrkUiMmP6YGC1oLwGKHsnVnvmotHn5s8Rv96ej3UFP9ti",
  "key13": "4fBdizvX5UqiaauiWgYes7gqnCbATpXe9SVZfDrDADvfZS6D9J3TxcJJtZATwYD2ehrnqX2q3mw7dEyEonNi9ZBt",
  "key14": "4LhVr5SzpNwd963oyQyhPMWcbUT7KNhRhY7fqT4GZjtv7sC833pCqmB7HqpuTumh3yCgXVZLM7URqVKfadqDnLhk",
  "key15": "ssHsVXd4H1oh85A9nfw78CwsZyiPZPvpMoa3hKP9nMD467UKR7KwzmHpVW5D2KTnVidbFG2pT72XwaRaDrjzQim",
  "key16": "4hu6DiQxto26EgEfizwR78xDTcx1WYzEUWTsNMtFefw7xMMJ8LfBFNDnQfxAH9duvU5d9Mx7VWUGNPmYUTv3HhHt",
  "key17": "2C5HEsLrdupKJ9bTfLoKbCisxTTFpLEA163GDw84gtcgLBmD5nD6VgRsHHVG37uVTio8Ds82ziCUbrU5kWi8a9Q3",
  "key18": "5RdZZ4HP9f89ve7gfc6ZaYPbNo4VMDhXKfG1eKktu9Gu2nnVwgpbmuz4WtdNUdCsAxuMJaZvBspmCfwNhUjYVtHd",
  "key19": "4iR4hZRpBc7tuvo77DhezPcDuucVMSfSMpbE9zAyDjzeJGG8v1AYgukreLkBQeH3znC4hb16MN5qTdAfy2ErySBs",
  "key20": "3UVkE9CEutGxHkfZxBLDZCa334x3Ks8hHifeAwWHLBmRzb225q8fLEHeeG2Bbpo9AugXV3xUuwULcYazCVwdgsef",
  "key21": "5XSmKGiNCenaCiMLzx5XqqMtfmuxY7cm6QZYJEsJVh2DCMyzoZCBS77UFupRh2hHNjUekFbyMZLsubMjDtTyA2Do",
  "key22": "5LYPQmwBZa9ERGbhWQyWRe3Hrh2wEWmmZwN2zak2bXzRTd9ZEGYX6BdKRTqM4sGpo8YgDnCwyvUSqAEfVgir5GPK",
  "key23": "2ehJS3cpr7fW6CEMwGMEmnL8kXS5eSTkHaRyoJFYTQWhwoLHiJ7ZfnChSTt3ypZrVaR2Ap1SJhH3beWcE2NH9w84",
  "key24": "1CHXBxDAhu58CfDC3BADymUTmPLFgzK5op63Vn1FYmHcYABWr7g912Pu4jf8sGLr4mX37mgkZhJpKxfapQfgGry",
  "key25": "Wi89JRt45GgBw3AUQh1DfQgG8Ben3yG13Tz3zoxhqQ4JtwA7xviqfSUGPJdCbXv6PiePETXH88W6UcEndvz9Xqn",
  "key26": "3aPisXDvQV6L5cLRLGF8yAjLzv5ZB5QSFPxkZ55p1WXuXCyRZztJBZobdbmuf9ZUjjMWBiaWRbEADsxZDtwiQnCo",
  "key27": "4LCkYTZV2BJH6PZCZN3JeAYmkAsoipMqUqba9vhzbL68UG6MXwpY56yFin91WETMzUvKvHS5N9QUA2Ab5ciM7BbN"
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
