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
    "3qRL3VYvqvMPHDd42D8Ej2QmxZZcxXMz1LcDZEDJVq2d7bvzj8sorqjum6HrqQei37NY9hefz3JsAQaFY7cMSomn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qnZ1hRLjWNVyc8KwfFYuxLk1B84te4wWMyHsfUXH7cgMswtEUjrLFMVYEPDw3AAsx9xQC7zmUp2iKSNwEMQ85dY",
  "key1": "PqukgDestA4hV7rc4yXLu3pLezX7w5x9hEj2ejvGj7y7C67FGE2rGdmYUE17X7oXLmwkoAVTAHZYfGgzE45wJzC",
  "key2": "5EeQjKXdoA9mZnqARRiUxN4ACtYMDDgf4p72kgat9SjJhk8t2xReDSBVHRaxiRbgC4kqZnfS4Dhy6Uom6YLH23uk",
  "key3": "5KSM4AtUwCDQFM86fpzVWb4T8x5JiAg9PMspo62iGArTJSvX4Dmyi8PL9N8SGmV423M8ULH7Ktbi4p5KDhLm7Sij",
  "key4": "aJKmVqyy3HuEQT5kfBVpUdwznfSZhVp9cq4C8PiE9tDb3Yr3pYoEUrWugXGi1gJE832zDsCEyLLsbv5bT1pkJX4",
  "key5": "4WcKUCx9BdfCBkiVZsUKkv6w5wtHN9Bn5YLC3R3yRxTm29UMA2sDRuiSa9VDcaTNvJc7hFH9rRPN1MnJ49cbHXMc",
  "key6": "4h7mrb7EoyhGskkMDvdt5NzVHfYmUDXqYMrcH8czfjg7biKqw9S1mEctxALLBwk2fbE68qZ27r4mcfm9xBSG8FgT",
  "key7": "4T6AswAhx9soMWVfbmWbsfqqMC7q1wUMCreg39cdAhb2aanoF1LcGv5d74VLbqNDev3Hz6N4uUmnz1MH4saVqevf",
  "key8": "4koYok3EQ4AMUXY7cGeck4dpi1qkBXZCqxqCQXzqdThx3RFpDxYHRy7v3Fdv48SPZZH1GM5itpsDaeivooY5VU1o",
  "key9": "4R1oncD2yDx8MWt36f3LJVer95eWqTgvdJ6Rs2SJRjocWXN4NkBUYBRchxLdtqLTHntdRpwVnJB8ZRKaBhsaRVXt",
  "key10": "4c9x1SAfSa5mTqqVutjSKqRaFQhwQc5BakAC38tnusPg6xqZnYem5j4eqEpz77iNXBVcxbUFiS8bKUixLAnj2uF3",
  "key11": "45QMjxYiw9NAnYpjNH4jUdhwxsxyuyNKR1DZx9g5vzAt7xyuR6wVFSruw3kMPfuLB19Mj7QC1SugKohD2pEe2zE2",
  "key12": "2PW1ZnLP8knZrwtkmrBVYDpj8PnaY1sJEgSJdU5WtLVE5FQs2JAaeXbFDdofVmtpamgzqZN37niVKK5SFvZakuaD",
  "key13": "bdGfYAcN8TnFryYA3zjsMBNHUFdhZVYpZ7bMKuxVfdkMdm8BapVhWez43AytSz1gbimUjDbh9vN5m5T6266AB5m",
  "key14": "5zPrc5uoZMLDcsipCaGoSdhAVGzJB2FBBLiz9AkfshEotGdQmZEbUqMBJbRZURfkdA1zsAoYsH6PNFiP85kK864V",
  "key15": "2hUpSsJiLX1upCUf4V9dAiE7uyCmTCisLrDuWEvKaVDQq335GeAQsmKvLeP81SL6swy2QHQGktZGszQ5RuoPYEo3",
  "key16": "2nA3ZHgmmvP3Ve6Jjb7HFC4qETZnxqt4nUpLxkWKBoNNqzfkzRKmJd9Mh1LhgrTQkSArVzGAeCBXkZZnSQ24fukU",
  "key17": "55Yr96kErJewbmP9qCksmZnHH1v4UQPzX17mSUF6uMzku7P69sQbTsxkDTa3TAjknnVGbkFua46wEXbUaKoJjCjt",
  "key18": "3SCSMQo7o7jNt33JTXzCNuiSWgWm2JJGBoHVC7YzopcXu645cQUfE5D7nk9D2e2u89Jry2TocxFifPGwybmNwLnP",
  "key19": "3Vuceiy7iXRCD2A2CXtm7nq2ZgqEJKWgKKqdAaxPdPi8rNVNW2MEB4rYbVjPFVwWNuyP1eyps1dLgYCtZxRscTGd",
  "key20": "2xJCpqspgEtGdqugZBoxNqGANtgSUFgsQeR4dsGz5eJnJvJv8NbLXCiKAjDT29ygsCu5Q8R6coZPZ2bGhJRNfRJ7",
  "key21": "3kubKUBadDzvfqZNLGmhpgtEgpqG4JDKw9Afu3fyfTxuBtPnFbpgsk6uB2hDwqobTFdgWYnwhUm3Ru1UstEh7igF",
  "key22": "5KqtdVjuLsFqr13qJQaqULMbbFuQqWqQMoxtBgxrgenSzDRJVJ3yESsa9w51CGhkhRsrgBCYy92BVz5xwphCyCnE",
  "key23": "5dYVYnkq8saMCXUYYAxBea9LhSiobrg7mtgf1Chyoc9FmW3zDKG8WScKYBL8oMVuUPfcVXz2JxQ1Y9Gs69HzeWzD",
  "key24": "5MqpUJGKGo8yEDyStDU6VHtkS6L5JLKWfBP2advoDDhiNHTExRFA4F3YZAbGpx22UeZTJAHiB3SwL1zdDAgtvGk1",
  "key25": "5F9KmfuzwjHG44i8LEg6LH883MLaGM43KP6w1feg79r4fTxkW1mAoKk9uT1gBeKjUMzTXpWAov1AJ7wPsc4RVgN",
  "key26": "4nsgTzUAE8rkgvx2JS6Hz5L2mrbhH5yScLndCK6dP5M4oAkPqiRtYmNY1Se2hyjhBxAPJhpiikkAKBKDDsGGo8E5",
  "key27": "524dpRcLz3ytsKBe37bkVT2NWr1MvCzvAoG7QiSo1RNDznLzUBu576652EHjoxEsWHLgoNasQ2YuPo1vAMdXsxXH",
  "key28": "2pYXxuzagst2B2cB7kDp71WQE6ju2HDePztMsc67ETL4Fjm9HN9qyZjGSWmVJ8p3NjkyC5hQhRHGvC2ZNfitvNHL"
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
