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
    "2mUNJTfh5mieGath6J8Sx7noVBfiTyepkEdNRAUQvAjRMphUqibG6EvocJGVvMa3ueUkzu2dG8pmeyF5wtr2ETMc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ghjEZUJRC2jQ6aGUdXf7HFspSCi3Nb1dXabXD2gV5am6naK41vJFtBujecqyJNpy8fiXs7MBQk5LajQDSqoCDdh",
  "key1": "3iGkneHCFLvsY8e78hXySa2jMctQodtfHhBvXVMjhL2czoXBtY1wEhkkNWbfU29367NunQp8bsLyU3CZhtc5Rg7G",
  "key2": "4PtpGWYqsjspQT4uWsU7KLYaZEB4nHPaRBnu2Z11NHvQ6DPTRhRNhUDGvyzGujqcD4pfKAiU1vmJAJJ4Aes2koyK",
  "key3": "5wfgoPMc7HWrgUcN8E7RQ2dFENrSfVT5VfJvru1mNAKKSJSywMpafNRrY3WsYoLAgKh3auV78HaPGBG6krTWtx1V",
  "key4": "w6zV1F5TMRMhrmGf6tWugaqfXnbXcM4FSKd2rpyHCX4a4JMUX51netWAtVocmCSrPstivUfU1xvZL8AMzAnvMYK",
  "key5": "428geidtf1ExaiQKdDEMJmA7USE97Y14uiSf4pZAZWEnpeGQPjowSdrPhMDp7SxXtiD1R5zPjpivCwew2h5QXUNU",
  "key6": "3ri9E9Z4FYwGXVYZXBogvLhccHS9HD1GGU3JKY2pdPeSDjUzmgoAmYk7Jz4nSd1f6RRTHkh2s9DG3hTZYnRy7b4S",
  "key7": "4kQ2YLgnpzzvnh9TU6GkFot46kUR4fviz4UCHAU61rsQQ4MobfiPSq1WbbB3TFv5ca4tMNhiRzkhCAARgxK5yVME",
  "key8": "3JiFMeDPodyzmXvJWqGn5J8gACxVv2hYT6TpuUHSWjy8NcywkKtKgryTvnqu3LtaivKfKA4qrGjUnXt5jnW7txzM",
  "key9": "34aXGczhXMbDrbnm9hd4vAJEXCAzAUBDcYDAXoa83DwfJKKWTNSgKARxZ9vbHGwmVLtiRctNMk4VLcCR6PFKbT8G",
  "key10": "hmRqPQ9gHhCjfsBByCMAuMxQrNKEu6zt9iLyBZS47GfdAeeaPNJeDb3cbmFnzHg3jZka8CXzfFVC9pr1DHQUqDR",
  "key11": "aZmtSe8RNNTS4kXWo1ozdqcC1q65v2hpAedMKkREoQ1j9TCUjXQciHdkCP5hxrKEfXPjpqkvxXughC39PSN7nFM",
  "key12": "5PJL75dXhrmnjM17Snhe8jG3yELv9aRwZSYypapj25LFfeEFhv9hNNSvSPHpUjsZbt63WBuPZcb2mzWKhJPf5hkF",
  "key13": "3NwPP272hqxWvo3HELcWpWPmFKyg1ZxPqHGkNMSho1pr7GuREZW1Jt4j5QVNdpFkjeNcbvgGLFuDXwQ7UpyVPFM7",
  "key14": "Gy96HcWm4D8MQ6C3q4cY7HPwUBjJdLTepLWP7xoJQHy5y8D19ttYVy1TSTEZUtSHHGsayi49yFLDEGNBqbDCLXy",
  "key15": "61rf2gL8p4CoiznzVDEacmbPQMo3C75zv6vzYExyn9n3sDwb2cEMyCh2C7bN3SFCo4GEbyTzhvXW7uVH9hHaRsc1",
  "key16": "4sWLD2U3weX5vosk8ft3sjGmHmgq6ox4BHua1RcLijCS8FqsZbTygn4WydDziTdeHNVEDNmW1vnWEs7vjtmsUav3",
  "key17": "4bgYayQoTHnQnEEyhJVUNQXyJdPiJPYPT16w4ibDpny7PG9EQQSN3uCxGBe9vctDjFteiS8JjSd5WKvkbvcyQWCs",
  "key18": "3AAvWjAPHJAqHRYPZTJwWp2tL3TXXqHf8i8LRMao91mA1iwJZntJc2sUq9ody9EVYbNihUDUzs7yUdpfQsP1MaJP",
  "key19": "4XCt5Am1yCvbBqNqfRBbAF65antucXPvvhrKjNXhycpnjyZbuPqY4Fu4DNu7frVdbTzXsPQYASxD6j7rDx7ccup1",
  "key20": "2aCBRrYFjcjkyfXWLsZwmZw8U152dXJRb7FjiMcPehrLjCSiwqkczCnLvRLc2d9XbBvPFvqbeJ1PAp7DiPXd6ALf",
  "key21": "Pe5u2wyzUb2GjVVAjdvnNDrQmCuT7CdSjRMEk33yGPuQZxswoqTrGJ8KxJgQai8G5q6CPbFJS6Dx53TUTTfcArB",
  "key22": "26Zn5JfBLwnCnSkZ3BgLoVWsh5H7Y9WDvCSgAC7dU2FT8u99FjxCWhCauLy5zKvHGa1Rjdtf9YZM598FYNtSL1s2",
  "key23": "2aZRtMHpVS5pe7CUwJamLxXCmv997f5qoxTbps6yxiUKQTRUZYZ5QnwPTX31Kgk96aqecNtqcUcia8jwXtZqicAT",
  "key24": "4X3g1VG7rERmLUG1noczuZLGNu8hY657VLVCQdvGxQohbQqXocCpnvbMHT9p6MhzuxP6hNKXmKRg2jcZpgamkzcy",
  "key25": "2it6e2oUebsuNrrcxvC74tia7pwFx1JaQthaYMmXQUWVDCfVLWoMscnyJcaJWBDMgPYUEvEUCrhQNyW45fmEmuMv",
  "key26": "4JimrTpgnVPozzdevcepbTvb7JWhEMJxvgij3BRQzUPdatxjpYZV9zWcAiBzpzDNa9u2yu5PaSvYkFCF1xEnGTZr",
  "key27": "39E9a89XS7YNRDmvYNMhpbbqUDDWDw7GnzLtWzvFVAZt8KnRc2GkVY9nq9GNziEev6M8Nszr5VsCdPJjaAXSUCKf",
  "key28": "64omDZG5Cvw9d4BjvLNJAChwUSLJ3KvEFGTB8w86qtK7FEVx3rVYaQcCxztdUtwSzGVZXD7D3Gv36jBrf3BgfLb5",
  "key29": "hpY4JUrxB9xuVpiaYS1FgG3sJrjmbCwxTQiAzNQmuxU2kQvFDhPwk1qJEPhKNfBLumy6qnv1JBEBuKShTXkR5Bo"
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
