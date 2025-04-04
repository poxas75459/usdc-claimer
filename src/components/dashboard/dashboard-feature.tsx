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
    "25BZgdQqXAyfKsxufQ2KmkhNunNVLp7gWDcYH8KFfagq6ScexhSCeKkKJNK2GXGCCNFETurrxkj9KCTURpjtn5o9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qKXwwVxtpg3xgvVvyrTYstXypRu8vJeHsS3DpgyEcCU11fmeLGZ348SyFiE1paRNVGMHfgvCfM9ZVDsjQbN8PLE",
  "key1": "27RUwEKg1Pbg7RJygeVrJ68oJo7N8sYUUScQ56iWhtMWMNVgj99Ju1HngRKx9CQBASvxDJLHcWvFDguG3PZLyBrA",
  "key2": "378JZruF1LY6FPAgWLbMoyBgzNVzfCGxo3unZUryaj8W9Lg4swZMuHxLGpqyxPSGmbUNJgE36sgGuDYZ7V5M8idw",
  "key3": "4T4VAzQ4yLV4bxwp5bkcU4LyfB8MP2rjsG3kkMGugZcZ259gCpAr8DVDSMsAtqwmNN7tJG9H5EKWmMf1PcB89CUE",
  "key4": "tY3mJQNJQa8iB2JHxgKNRR4vpB64hJqc22NvdHa4DLri8kDdZ4xYwrgKhCfAzsaqKhN8FsnTqKUSpvvUKtmEHeD",
  "key5": "2jHr4wLKtQsSrRPGmbX9DXnfQXZszXXoFNUe9pzes6E8CU3y6SAxAe7LsoMzmGC7u9VsqYmx1HrTHNn5LzkA6WVT",
  "key6": "2Sd4tYssr5fTsQBPLG8N91C26AVLG3wxna9ezgUqvLWT14L7bZTwzV4hyMwCBcMeuZNgdsMqq4W3jKjRcUpUMkSc",
  "key7": "zwj6PtuGz8hQVfW541VucwqmtD3ngEa9XcXDe35b2CgQwX7rFFSsYSqYXvLTu9b3r3NrABwLnMVwFArDDfdtMPM",
  "key8": "4KHSbB5Ss9NqYJKwD3cVVadF8wiuD2YNPYh8o8rez4MJXBd6Pc8gLCyioYoW2EbgN7zZWnPx3M7giapYXk6UjLAX",
  "key9": "RgftaDsQuhjJma2UAbCgqtg1iskxqCukwHHqsTgDLYHS9LSuJKyBA4xPzZvr2HpcFp5Q81i6rCojRoo2SDfDhLY",
  "key10": "3918UTFUAuZYZM6Rg3JTCwja59J1tgNg31BkycX9gsp3hGLi16xELApCM6x3FYAbmJ4M7eW3HXWkujxjqbfofwKx",
  "key11": "xSjKJr1JHvibULssEfzCA96U2rVz78KzCRdWWhGPRRQBrZGeVAbU5QxLhk3s6bXUnwcMFKZuXF5ucUX9tidNuKP",
  "key12": "2phAVUphsEXzYhge8r1oNdJP1eKKAainK2ihWwQcGBTr8zC8GtuYugNDQNf2dYHbnZFy3P4f8Aaco1hHgYgrZ7Y1",
  "key13": "5VsxS5577YTvDMzudrt6oVeiqvzsJAymJ5vtzWazfu5uN1MyrHb2UPPWkcHqjPNgHLgbHMxQWXedLZceTCmxJVk7",
  "key14": "5aKh57RjpyZcaeLJozzVfH6uheZZqWsxbDvojW4rLkButM2Yucz3nKxkAuxjRZZkdf6xQR2YgVfeRi1XSAAML32s",
  "key15": "52izaBsk6izxATY537uicaNha4fyV3vKkNosTUPRZbU9ScsFKXrrNwBKaFB9fRzBnpwvBtaNpD1DBK2rF8WrLKns",
  "key16": "mJcvkohqV9SLiGgSVHCVWtDpCiWFjfkaAPrwR2HoaUW4KE2fsryjUhjz9HKFYi2JnyKyrztyYYRo3HKJbABAJ78",
  "key17": "5ZuaDDaxRT6dPgJD9LiBHbHeW8CPd5yQvY6uarurE89Yv1tpD8NdosRYSJvTybbP7saUYgHPzPDxQEM3o8FMVpMU",
  "key18": "2Lmq5BovffR1s8i2U8STRzy3RKWVZWFKEPJPaqyeF7McWnkxLqNN8PJ1ykDQcRGosP71AYiqxocN3XjmfTzfRLEj",
  "key19": "XubWai2MCSJgQ8GmAJKvBCTxaPfHczhU5bmLnahYjSb2tmBCpoDCESWKEsZXcphhZfQfsAZrr77KcXAPXVj3VhA",
  "key20": "H8Fequ1C1igkCWmVPZdWKpAn23WrnXN4tyd7T6vCtrdQhVEkKCxsSw2tm6Zqm2BE4UAosVZHeaezjdcziACfFsf",
  "key21": "4yRnsUQZfFkgmkS1rpBeTP4wZGhV7BznD4UZmobagygob6Ue1X2CF7K7EJCcvZgn6mH218oSMfxiqEhUCoxXeVmZ",
  "key22": "DA5ZB42vsWPhJQfjcjxt5jffgGSKVbGGFAtfspfA1vKN8bUs1rsGz1Kgz1dS5bTJDSbUCfPR5VEMDwT6dFZPjAe",
  "key23": "4KvG2rAEK1dQx786gUr6d6CEs32icBaBQT5VQArYqipMensS9ecLqhay82xWpMG2YX3CBY6SdTD3XEtFFB3FP4MD",
  "key24": "2qkf3ZPJFxzZEab1ZqGzEq1wXS1z3nw3Bm1p2gk8skqH5KTUjoKE8jadQCeZ7BNgnUBSCDAJUKnJKQ6m4ewAazKS",
  "key25": "3iC49XVVwHdK3emAByX4Sd4JG1ZHtVZWRzsPXZyPsmWKrNfcxTuga3LZxuF1t9PWEi1QN5VXBndfH9ZC3c8ddg3K",
  "key26": "3hGLbsvvAntb38VDb4R2qRV4fGuP6DfKZLsmud983e9FzSY3UXWqfXMeBn7V7ooGittbRFjjvi67f6h9XCCVGU1p",
  "key27": "5D29JFJpq5J9VunAQUKfQZtY7BKFsEHa1SFz6WCusUAXpVQ4uD2dGaVzsx7YWb77DWmX9NBVRPTxetd533KxcUyS"
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
