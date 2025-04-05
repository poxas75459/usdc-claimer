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
    "5aoN92KW69yFhBei6TgcjBfctNQtp4WtJ3zGfPMGF69hgioL99WvGs2GxjRwTT9iFR83qHACEgshsqccSx9okyYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2jKBuCcK5opE9YtgFg73AT7NcuFPcwKtiq5xqrjuDTQTV4wbvhVkdsrAFkUccvFuA4fzbDbkgdPoE61HnE26q45q",
  "key1": "2MtE9o4y6hvS8Y51JoBvKhk3yL2DEjCJhGoU52zjxDkFkpAsN45nAy7425HJz6SMQ489CiPMqbLLWvN1BpGycQaX",
  "key2": "4TdihGUrPMdVyM88jXE1QWJxX284DKnYmXTj4WGxE3dr5SoV3DrHqQPCLaYbK4ieRX9fRzJN1TFBqmwhduBi4ah4",
  "key3": "3PmopiXDAe5MfEmT1LFdYEvhR3n82en3mjzHPKtbZwB9VH8oYsMTwDQw8yTRHYPCgDRzyKgp6KSjqNQZ4hwkG4qW",
  "key4": "2ckgkMmhyuj9CSZYqfJBA6HusipZaw1ufGcFWKZLorRoVb29tyU1EatuoyNN4k6UJFGigEV254BXEy7E1fuRW47L",
  "key5": "3hR1GAZWkE6xGXRRdDtniRvtJLkTw5r1uiNsj61cVoowRfjvhy38B6P6vFYzyZY37GnkCuoXqAzEHRcCDdeAP8ML",
  "key6": "52tDxqTNEZ9RnpX43A8weV41T4uteTt6aQf1EXHo1ULR1m8XwdgFvBu56AqkGSSgdoir5pcegZKNvECiiaTujbQj",
  "key7": "6WSNqC9b2oLWxezAWgVnjmTzgWyZDQNzgZ8snN3ye7MUzrLNitShy4WSWKmV4o3JU7fDNDDCRHc72A6trA3GCZC",
  "key8": "3x36KbC3w1x9KYByNanQe6WzKaXpsozDkyziYXh5eSheuBMinEWLn2uG2sqeoYbpifXiDgXL5tpE6KMGj1tp87TC",
  "key9": "2o5aa5ma7VzZx4N1GqbnabX7K3AXGEVt8D3UtcNhXwDq2jVUhcpQASU36nCqHBZXgnrzeY8kaBvou9R15SL2Qdd6",
  "key10": "gp6gGjvjd96Zu8QSA9ALgaTjXs5U7uZga7s5rjwf6uKiUPdiEySqP9VcE8kLTsrm3WYTgU1C1N4aa9EgYRZqrCe",
  "key11": "2wxZN3gm2nYdMx2ziXXU82321rF91mzkEbeKSXbZBARDG9DfmCuaVqSupd4Au3rB68PDJgZyn883XE2vsDiC4oMg",
  "key12": "4zpfxn96qbdywnw3zTrJFniL57mYKs6Um6VKnvXtbcSr4Yz9BKWtGBr4YY7raf87ELHP5PERafTKyZFDEwrcB6ED",
  "key13": "58jzgiQ5pah8XLWkYBZhpWWcU7oA3perMemwNsy15ieweiMDpecQxoPHkz1r7PpLsSZbpyGPMmxTQUdosF4xvBkL",
  "key14": "5keQP8wfZNy4Q1NNJjB11GpoLMUaR8hFT55cU9CeEmAFeBMUi3u7dWu32MaAb3tEfXmMnSUkdYjzhtEy5WFR6B1r",
  "key15": "3236wa7ARYUmzCgQ3hHeb1XrfsAatTU3KGuE4kh5yQpwqWktiSDaPThEcXKme1koU1QhVdeR4YE1XJhydDXqGnm3",
  "key16": "2JLPq5sUVQgmMkEfhkgfgWTkYQHFUn3TpF8911KNvcPnSmanfSduy1NPpLLRmB5Wv8hyk3H363wdQf3wEngS9v4A",
  "key17": "2HTbQnb1Pn8WRZsfWQkj89dgCnXZJxbSyEmQ69pmwTFkU1UUddsBnckpFxAM8HfiHR8CtZFFpcrFCr1fUUUqgfvf",
  "key18": "2Tg9DgHSW4k1jLyHjaLnG3xbYjNVNpbiDpdTLvqohkirNDzyEQFaVcdeKKhUuTDrYqzoB6zZ74mW8wfMeK3vY4Sc",
  "key19": "gkg6iUbVos5GVoBANiHJaDTfgZwJ4W1GAuGn1uWq8E3SWt9LL3RjtgiycsMiiyAgjxYTwtWsJDBG87xZ2NerPse",
  "key20": "3bKetkC4hig7Xp5jUgUkSBhtS4ZgixH9LQ9hjH5CVnbXEEx7LFfq5M5qVAvQ67FNG8woRWARR4mdoD5DaZsEjZp7",
  "key21": "34wobckCDeya8RfwcFfx95PqVUeJBofYkS2XbeGRecvpERWxG68QAFFYrVVZ9hVcBuhqdkA5jVtrZBKWJu4y4WPb",
  "key22": "2Fcqimgtm5mR3BME8cuk1r6zmtesRdYmN8VoNWZ6EiHYV4ptDKVCFJr6tAJDSFYu6NDmu4py4rAiPNB7knakVxJi",
  "key23": "4jw7V8pFGvk4u7oCvpDRyUQvrXt6QHxttRE1akiS62Ah7hcqhoWz5Af9nMtNqx5sW58BiNuXWiaAq82iAwhZfFGT",
  "key24": "24Re1bgdz9YXHnYKK4SKi7R6jaJFN3xHsb9edR4Y5FGXoN5tDBNMPErz35EKKaYRf2VDs3ionGyEtGkr7ACLxRt9",
  "key25": "4SxCRYa3bxfqTTwkLWt63RKu1aq4BsYE9qfxj2Yhi2ZoMp45zwWHVx5hDoYie8Q9eJ2gg1sV6kZQTs1ZU5MUv5Ri",
  "key26": "6UTiSfefytsPpmNpBB5bbrNUhCEwBnuWm2jJY4bikMFaMw9QGbmV6aYJkDcSwK2jaEH7KbS3kSKTY69sa4K7nWo",
  "key27": "ub1LM5tm8Hey7BaEZCgi9gCfPhCtEPeYTGorTHGCydvxWvzexAuufHhuXa7E8RYfAejwzVu4gWtBKAxzULhWnGJ",
  "key28": "3AC1HNADYdrJLowRHjoyAfec3JSCf8bt8s3ex5F6McCMQ5n3SEjKHMzVsjFpng1DnFkMXS4BrmJ3Kxz1fxsEf3Bd",
  "key29": "46q85EwPPocmzbPzZF3jR9z4Kwp6mJz3kR83pM65fabZ7dS9UCNdQSAFJM3Wne4th6K7qrsPsZoeWSnjhZfadQDj",
  "key30": "3tTp7TqvW9QNFFyudfwyNPApvJonX4vYvrkCExHaFnahauUihaK9BGtqaJJCPbQAULVTbWjRVGA8HB7xVSM4L9q8",
  "key31": "5Unr1YyeU4DxcwPkHZBg8aL1Na56Sj4GW5vARMju1NKbM3Du4fhBiEgf9Wftt64yshtbbXoeNwjod7cqwW4uDCTQ",
  "key32": "5ZPFw48rQ5Hf6em1yCE7nLBi2TFbA1U7TDiXH7XN3Haa9fQcAAG2n8D8syz4PY3twNZkKmhDqaDwuLuj2EdLCAuL",
  "key33": "PTWjSXmjFWG2dWpdUqzDR4J4YjdTJ2vpkPVZKDzmuiiygaMiqC3k11RJmtWRjoJYkyWU5V28rdoHLvrcYppayqz",
  "key34": "A32fRyKRvtkfKHA1sfyZznes68hNc4mxvcpJ9KFcsmVnUQvbj8oeQYqkurXd4uXsBjoRjzV5rDXsDshN2RxnZ6b",
  "key35": "rcfGVmKi8zSsFB3sddbGgapUhmdc8gVahrFFmjVepeN38B75h65d3ucsmAAyeaTWW1Q2wvpv9CC8MtZxbxgDMh9",
  "key36": "5NDzDs8rUxSybdfdoW3nFMgYm2DAHAMNuxDGy622TQrVsTV8JMFWYnYaKJCSesGvEyU1KLQUpnW6HYLTZzpZ6rvJ",
  "key37": "4u7FyKmJNXdjnELiseqDZHa37fdGty3jmHGTDYcPzBFue914dKbrgdkZR9McZ9adnRi3oV9oyXcCM6Y4xDSsw6Kz",
  "key38": "38QayXySZ8J9YV84i1KtkEByf7CCrWoVZAQes1QcNDSa85uqWUWYFdBiLmqkoBBY6UMr9ZbTXKR8FVdWP1h6Ybbx",
  "key39": "3QXdxi5JHeLo3iShL6vKomAteMcmHMgZG6o1KX73LFaGCmERfLWCYEHy7Nbqoi7y8Dc6Fv6fxyVdxP3RkXL8W64J",
  "key40": "26QPGYBktxYT9tmAbnbtKVe7nt1aiDmSqeLwTTcL8e7mTLNqLJdw8DrjQzhpS2Cn93aG1RxxyQrpb3p8uPNGyh6a",
  "key41": "34Bc1oJHyeeCEuwHfMeMPSaMD6Fa2q6qgpNjUtPcNHEcaFLAHH8YXWj6dzDEFdzMmUnqcPBmoMEtTMQfSDBR9XUv",
  "key42": "3HpfAz52acg4KQjfRRc5wfGqueWeGtdLi6merW3ddVzf8YDDqE9do5jEq18YtBXd1zyTBCcuz3RLdfErAGtc37Cx",
  "key43": "V1SCJv83by6619KkNTLmL4ywBSoiiU4awyGoECiWSdpsEwrAfvHKH5xUTC6CHAVHhAZmzKhxV8Q1r1w1NL2dkq8",
  "key44": "3CCckKMf33MtKHmmmwhMppoCcAThNj8uKrj1wG35KjDsg38ZRiNb1RC6Y9GmQRwquDzD58N1MK785XPkszbPc3Mk",
  "key45": "uksHnmCKFyLYyH82vt6ox4UHGmGzNHLKtvB2NZJCQWKvf5nRfARyY43JjjtJYMyY9eZMHYZScjP9cQTgAbAvvpU",
  "key46": "31xHBQTuqkYp2wJgKtVc1BfKd2C4XqWUoe8vGg3XvdhhM9ZXjHxNEdXF9XUj8w1BysuF7Mnj7KYXBXVxN7Lovv8X"
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
