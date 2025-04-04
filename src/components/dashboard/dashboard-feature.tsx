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
    "3Ddf3HZEyDR4QiYdbGQCQhMMDZCaHJdmbMPSBq1AEZoPAGevHZmMdhNFELRJYRT7WMXhwipd2pWJP67zk3GEFkdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rdp3a6kDqix7krL2ap2swyKc521E3aT7wVbGpFQ2zp6NVWaPnFoisJRnSryE525gpTXBMsgDJGD1znY3exwVdbP",
  "key1": "nJtLE7mZMAfixFz2gMSB4SAVh6QrvY1Q3xU1FoQb3jJ4dtXPQqVZtUGiwcH68EkJSPidC6qkKpwdJzZQgLyYbNZ",
  "key2": "x4NKRg88xVYjTVEeah1G4GFV5SqLGMdEW7m7hR5gnnGCmgGBjkd9GjCQo5nvv5hNnEHQbeLfh5buZYBkVgaM7YE",
  "key3": "2T8JKMpnqA1p1qSai2CtcG5dk4UzkzQxcCvqGVpxxdp2mpES2obxJfQwy1P6QbsLivbwoaBaHJLZKbPpKnaNVKW4",
  "key4": "2qpJW61qnHwzDNR1LN1QBr1f1eNiVasYUxKX1VAaut9oqCLuFK9ABowj8sAYdzKXqkyWeoppqpQxXKzy2WuYvBvK",
  "key5": "2JLd5swvedkfZpfCFX3hHPuriu75mcrRy5AzoPztnkVsFBCjNhpuW2EGNJw118vDxS2KQffyQS8TKHpvNDwNQEpw",
  "key6": "3G9MTruxD8hhUPiJC2PgKc5j19JvCscXSiHfdzVG145wPrau1bn9GQh3AbVemiT3cBSZsQu6zPKiYU4hDvFmMj9a",
  "key7": "3Ya9DBs93Xj7gCNBXWqC7eNipJujvmzYd8PsrhuJMnTqFneCK4AGRYT9onbta5LjNFK4SVWzWw3VrTubiiNcj6m1",
  "key8": "25bYsQfhqQf5VfYEqu2nhMAtNWAe7RVfarccR4Kcjy5RxJzPwvCkWtGxKu3JmHR51EEwmFC3WDJo8bEXmXvX1HXV",
  "key9": "5xr7aBEzjzqjJnmbogAExqu5pXaY2X3s649YPvdcij1NtkTXvi3EwZpH5TqjeeY7JD58P7pQ3AUft4N16RLpB6W7",
  "key10": "2hgkn7CqPVrXEdfBNNqhEKQy8giDCGHj2FNvi6y1NTLikJM3iigiTvZTHFpvsSy8k3QrEWtVnLtnHEgcyBaaZLSK",
  "key11": "5GGK8udzFhvTkmDtNgBD9Vb7eat9yUJ3z4vfzMnz5YNKXo8GJT6DZuWaNPwtvCN1BC3h2Uj3GESQxVTFhfKjVxQ4",
  "key12": "58HVh5FUrcNBrgGyDfsbJM2PZKxsXvCmiDwJvZRWXH1f8u1Xy8khiszMgUALG2wxQS1w6y9miqW9C2Z1szAHBduD",
  "key13": "5f4B5Tw7CRBS4766Szv1m3SuesM675kCZHPVjJFLsjhw6ygHfwV3U6uQjZaPxMe8xgYeuCYjJTSRVxxdvjbvA2au",
  "key14": "46aLnfF9uG8ks9MAoH21eB3TmxxwZPbbLvV1ycqYAvW4tCe2t2SCzaKLcavkESkfBFpgas2zqu8tjRZSd1QL3wEe",
  "key15": "2vkjNHtLpmRVzjW4XJhYSuoWJ3Puhs71o4Q3tNr1t18wmDA2LRXHqcaw2NHHHSdA5dXhUg1Cqv64hnhYZrEnpwzM",
  "key16": "5z3hzMgi5J8jbHqek63HiH3qsesSBTiaqbQB3eYBudj5QnvKR4Vnv3CS1RVaipUeteLA72a8Zq32L24u5tUXN3Rt",
  "key17": "arc5XS1KAAPQoKzh8ZhSRQjKfrQ6RPFNr5rvvPus4pTP4wYRiDQ6afSjuJ14AunLu1nStXmq1cSRPwvQ2QmA2mQ",
  "key18": "4sSDZbcSQza5vSXp7p9PPziuEu1DR2wvc3Hk7d3Xm3BiF1zHd5nocVwrN7wGim8FaRu7XXa7h5KUQsBkT8BJWo7j",
  "key19": "vQPGKgHxRVhQdWQtfAsTbGoNTJQG7nTyzfF81STBnCbNNTLoy4EHfaqwPT18xUNBgKJPLsMNVq8kRzwHPd16GCz",
  "key20": "3JMgiwDHLUhADuZKCD4TcN9LbUUuaUkmT7wEsNCT5LXKjpyHgDSWaHdWXRFGb2E4X7oBw3166P5sLgriBwifuH6N",
  "key21": "284HUNPZSQ58xbiXw9YiuvtUsHUWi7AHaGewijcUwcMeYxuP1Uy93zYe3977qVRp12T6bbCW2fGxKa7CJM2UDgqC",
  "key22": "ELC24A5fn49VSgNHryajRsmPdGo6ZE5pq1X1bWk4NquvXf943dTJh9MEHLJczwmeLVzAB6FX8jmt6vtVSNioAgp",
  "key23": "3GyPZmWypfY8reou7qSYLEyXvCkED7NVdph1CsH1WkajZKbGSsJYRs2wsCp5PpVwP2SXsrbTbQFFUkLzSB6qGZbX",
  "key24": "3njh85F1akXFiYqkNguF4CiSNpVsyLhnwVHL9zaaKh6WBBydMkiQ4MBJyR5Go1WwRTxyGHi1QywHuRm8TVHCrK5Q"
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
