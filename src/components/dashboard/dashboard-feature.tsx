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
    "3fYcrMhgBXpnJLxnfYjKPpyhSUUdQ7ExJq2yXUq56TnndiFQ9ZHmjfJWatxoxfuUmbmQWycRSRhLuRmBmBJPQbJx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YQig9ffYp4ugxHfFThZ4mSPu5n9MyBUQFUcYyChLJL3tnnKCUgYZdYDhKECzdwc9NCRWiSuQaz1LZHknABoRNL9",
  "key1": "3zigFZfErGKtF4BJfRdpr1XXm31Q61bbK5m6jMWx45vSZ4tznhysZrrjB3a9VTnyhJtYQ6mRVxJ5PnW3s45nmkna",
  "key2": "575tXyfGd4fPutefJBcuG5NPKrzHLTTnRo9LodJXCSsKd77Z82dqZmPhA1Vzf9Qry8SceS9Xq1ythRsZLjh6Jqmz",
  "key3": "2KweEWvmLEvybEKU7UeSwYA2AT6wAuo7DGQXPGeGw6G7sMHD1vqwnhLwfZEC92E8c5cqz7WbK2egcDMMJoLj4f8j",
  "key4": "26eDH87xhmMzcAY6XxFVmw82Ti8xYU4dhDhQyvRfjxDxdxh7XA2pPGRECein722Abp1t6scoV7vUFsNqU4mkKTDc",
  "key5": "3MX6Sr32GPzbLzsjXXUvoSdras8jRChXBAaLSKwZJvLBGAJZpBwfXMvC6ZTEV93AvbT2Dvi7PbNjapjvsRR5D1hD",
  "key6": "37qnko8RAHedDiuSaEBRvWf5kqjN3DqjnGsjwaKAhd8fNdCJJUVt5cKSAGUMQVRvbiyDVtpBmKxPuMqtk19MGkfP",
  "key7": "3rHR5KnzPkWk9tqxPyksy2TAJRS8D1p41CjUeSiR4B87KKtbm9havXX7pBNQPp1g6u7NBbEpHKXqoWeEvmijYc5a",
  "key8": "rawkJPog1ZDXcuPr944uUy4YhfFbqA5MQQu4eF1J4hBBCriaNcoeX4yLe1mFU5XZQnpoYqTQckrAEgkLByHmosh",
  "key9": "CMS15kfY5wo4tsYbWLLY54dsBXJRFKzaLd9GFC78bxJv13KrGAYHoEo3hUx3ZNpr8LUDxokZqYcZejfpfxbYjkY",
  "key10": "54QHRHfqkFdLEmnqFvjSJLAcfGgwwgh1KSFyqhBa3bh5g9hcjRYUn5ykLoEKLCyCLT3TmU5XTGZKCGfekFbWJA3j",
  "key11": "3qswvqqUdvuy8wuWagXt28tP2cWAXexxcYsb1y5jihReHhi8wVUfciCSNduyperYppWCXzZLEjGWtADz5SXp2sAa",
  "key12": "3czHY52iFaN4LFAF9sHspYuSRLVKmqcopq185TQjM5LGHYWesEN93oNd94QMTsyu2MPT6BqA1RS1XHfAusxV914z",
  "key13": "2tf5VHtsUwGsGMHrxBNyXsRPULv8WqLcd99nNdUi1NoXGTHPzyPssykxJTX685ySwnhEwDHw95JTcsEUvFq4NJoW",
  "key14": "FpHrppJt6SWHpkz4fXxJC7dHrWx2Bgy6PrpdGvq9mfZSEbm67LNEpe7iTEhwxpkWvZuAWxLpY5FRmAcNRd5NZjR",
  "key15": "2rwqSNkhTFq5hmksVhk399e8Nnz4CDC3PGTpwhUjLYp84hH6ZGXuHGByvb8oiJAQYjpSrUNet76YjdqKL1Rc4znG",
  "key16": "3yhC2g3oGXJL5mKBSi3HCBPbdZJThHHhBLiyF4JRFaLcX98TwT8zBZGZkZo7wLTGGctWPzXdcFu3vKpfnESsaE21",
  "key17": "3gJG8sv6uV8F5KZNcGwBmbxzEP6XwBVvWCdiE11qMwXabDrZfjW2s27pTJccrtesJVmfU5fzV9459mspMAJdiFe4",
  "key18": "4vbzEgq9yxLqxGcykD3MMHkq6rLD1JvihXJ2wzxAB5qZg5wg6d9FJpJPvPYD3d95XvPwYJ3BPFXpTjGJBbU7B7yr",
  "key19": "xL8czri8sNtkhPSxKrPzykrLR6wVR5r3S24uqiYj2M2yMHnGgB4N6WQrNXvZsc434NJPaywGErA2CABbYXFfrWh",
  "key20": "5o9xcGFub7gebmGQteScfpAqwH34neJVLm8S68pFVPn9u3vC6ZA1DQxn1rTAoMT6FtvN9bLJQkCDtkZfEikgkRtH",
  "key21": "4BuQub5wcQeo61GPN29S2auHzmxmrGCnigqzxPF4dqCDsVi1LXumDA1qvNCKptBWLVbkfoMfVZU7oN87LU69x7Jp",
  "key22": "vkmvBm8iGK5dEucQAHjrYT3R9QaRHnDmCDY4WUdGceZc9B6dLkwAf8QnGD2UBo72TqgJZnMEppuojc1XM3R3XNT",
  "key23": "4iJZtfJnHPLWaD8p2wyJESUtvf299aqUgC6QjGSbdVeV1CxP1bqzjWrrmAXDZ2xD7ppwD6hb99Wsi2T6Ynt3nuoL",
  "key24": "QCxjeLdedQowrc6UPzmLMyyVrMGk5XniqFTfQL5sc72CFq9Js1d5MYYFtww4XoEXbpPVdYU7YeRNffHrpe2HMQh",
  "key25": "3BB7C8EkNE5YgC5fAGQpg1r1ZS815wTv2VPrqVf8ZEu6dLnx8uNMHUNZrzECz6zS4NDHLUUwFKBzF3FbnLF24zKW"
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
