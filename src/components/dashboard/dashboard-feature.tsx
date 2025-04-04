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
    "4gKarizAnLvw8cNDK8TYhF431A6R5pxXg8EeNd6XJwoLXfrCRhHgg2w1bVkrXFHebpnYViiboC76Lwk6Qs9kSAMj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "73Mcr6prtjgMePCdhsfpwsS6ZuBQd1ZBC8BXF3arYbRG79kxJwqVrGYGJRMaSBtk4czVHga9j2yz5A2e79Zi4qS",
  "key1": "3f2dpjFhGomPUeWXiyqaemYYFJ99vtWsCt4s84i6UDfMTHrSu67RJAJg6QQjjkzEzaY3eU3XNswYWThTtUpbMEgu",
  "key2": "3i4u6nYbSRYwjwvNZTAgzMNTBsgCChBiNuKLCYLuAPu9i2yN5jhHJt5bi3tWn73cvGwFHtxtKFtiRvEQVYhF6Kvv",
  "key3": "2JHE1qh8jyZEYXFs4B1rUQx9DeF1RsqmjoyhHWfJqsionZG96HM1n8N1ab4JPLEfYTU9LMDdBNkHqS58MBxk4LDe",
  "key4": "2Po2sawPgsV192W5nyRzPa9JF8QPuhTAWybpmrvZTak4W4rvbpyCk794xQz4XNct7Kog8pdCLTvcs45FHoLpWoPC",
  "key5": "5FdMHmygqYabXUa9c135W51ugLqFbwsScydpzpoqkJ1YYu7BqvmC5ENWLi3zjFiqjaSbx47fiYwFDQ1jFPRU89dS",
  "key6": "tXwzQA2PTMNC8ueCCjYrG3paMdY24ZUr8auvfYWJVfmkUe5Zobn7d7QcoNzqVm7FYgDEYrtUw66EzdARzoppmqF",
  "key7": "3b3u5WJ2EPf5MrrjZDQGfBvTv3XLrL3wBqhedzFmAqdT1PPAshVhTZc3ZrouacrwzNevJczM3hgosQrvHNqhtKkV",
  "key8": "5Lnv8GwnegesaRkypeWfdoUeCNVYx7Y9x9RjrbYBvTfCwiHuqCLphuaPmbj9bcMvBekwV9tswcqMTbCQ3cFG9Y58",
  "key9": "4B4cKjZxbvUXiX6Gb5qTq3yRYvB7UoCXp8qsyfQoQvdGraUaXG9QaxnYedP5bbYXdMJU2RpCC4dC5G66UaEcVpMB",
  "key10": "4HPXG6ZLDCLAiCYh1wXWSWF8nckfHjLfTt12CURFD9WQNG6f11yf3yThtmLaZKzBLQR6zL229TU4cmXosGbR87qV",
  "key11": "EYo2FDDMCAAfXb2CJir9qobMPJAz5SUcz776UfYVj4XnZs6wBWmAQAcwYh2qpei4SCAQ1oLQNzYHHz1WDL9Na7e",
  "key12": "4hHYALEGtsbiWHuNfFQSAvN5J3JBUQPm6psA9kcvYCXLXQJMkmf8UaCaE52kEDkBxv6qEKRJRvewp4QJd3j9PpNj",
  "key13": "48Vp8rwLUatER3HNGH29JQ4UB48pezMEXSEg8eDUiwjq63zWw2nMhYTx5TzRJPS31AaKgonPtcZiEYu1jzTNENPB",
  "key14": "4rNtBEGTAcEbQ9szPa9zzujWLW66hdFLtQnRZbiUyVR9bQj9ME3ybbcvZcKP8e5YDzszanW13KLf5og8oqgTQttx",
  "key15": "2B9RmZFQd22Lna1ib5iEBvURKeuWLaDMoG1cpzD31DbybDdFoefhZUFdUq2APov2wdKHtYniWCjeKtgM1zSZuooB",
  "key16": "39QRqdAvweXCgMJ4pTBGv5JqPtNmQ3hBabU7iHsrBicqYe7LzJ8freai1iQUZstgF5FuZhYSKQNbR8AAcgUBDRfs",
  "key17": "3k6YAW7rRwyDYasiZcpFifjcY7QaMcCjgr8BHL6rg5rQ1bWAuY7ZtEorTJhabTnhQkxyKMw75ejgFEiDDu3QLsjm",
  "key18": "4e7f6a1N4jyAXaiJWW6iyWRN25MipobhFqH7GyAg21V1h6FnYPccYeu4aRsowe3Z6sKVX8nJkHqRpp73JqLdA2C2",
  "key19": "62YhdrSppLeghKH6HqhWt9diehkjQHAAm9beQXkmZPiP1NHLDVW86qBR4r8sTZcRUM8bDz1X82i8sAze9ktk4XEb",
  "key20": "5NLAuZKpbzQkrc8jNvEHeoMX9rbUV4VGwVQf99WNYHooM9L1v8B8ShHnvTQGfEDEgoCmbZVRf8VgY63U2YLfE56Z",
  "key21": "2jDvgXgaHXJk1aND8PDhnWHLrAKymYv68ThAaqVhuh4GqvHcfodugQs1RnZ99ErgCQXfWy4UHNacYQL7dcpZRTx8",
  "key22": "3YXhcu4Wv78Aj8Lt4hMZWwtuPxecbShJTLyXKkNYHYm56YDNW11kyfs5FFizs2GsnzvemXfLty5Ct1gr79r6W2Yx",
  "key23": "5y6RdLEoKsATWGSdiM7NWT8RiQ7gLUvyLvkt2tt9bUfA6tNnQqcuLuVXjdUdvL4iRQz9WRg2265YTzr7q681DjDR",
  "key24": "31EejwwFq9tc1P6DejbJd7MiaiTBhazphdWbcRJYXeBy2hpnfu3fsYHkJKjr1uUcRydYeeJkYHwNELWvTbDBQPKf",
  "key25": "2zrbbvRePGsLHDrHx44uLzy7Q2FMs6qw7LTtDeDBA9h3rf3rxdL4RpRHT4uWcS54zjUveJHShSqDaWU12bYJzUyz"
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
