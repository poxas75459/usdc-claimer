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
    "2qXRvUmfN7g3rrhAS38suajgDZXAa4xZT44xjyqa9GqvYYgw5B4by9ZWXKiUHXYkgh2aR6qRv3PJFMYufPmA84Ek"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gq5c5MXon6Uod5cXmCpCnvoo4Xd6Eb2GQui8foTM8vgFLEBbDfU9anzaaFVf7YcbJvFBe5uhbVsJKeZGUMyHpbU",
  "key1": "ELKmWWhgdtUvdvn21MGRDGoymXMcE7cQESfB5P5YWS1AtN99zW6JJcWohuBdTEFVEytgfBwmdWQaWEmY356zThM",
  "key2": "4gNyEYK5wViozSqx4S8DNHqQKhoMh1qxH2YRSTuxDBKfPrsaoCtvvWmksiVNmGPR7y57Ljjn4iiskE2EMLWDkFsa",
  "key3": "3AMXYx3gq8EjgP77GEAPNTpXdLiVHenn5kzKK6iSZ8V9ggyG6ftBdXSDZy4HJGACatcXtnZFVusG8QjUz6cTurvJ",
  "key4": "g7NAyTe8phXUXmPuKhqEodS47nvKjWsJBxMNerT5BqsuoCuNWBzCiKj9Eg5xAiKZWRoV6FzVpnK6vZPWFpry1FZ",
  "key5": "4dDkxHxoQFuvpTx7cudgtA1fE2drNbWVBNU1TzgMvNL9LtVM6UQRfvYPTbhGGcepca9AH8B1TC8J7WNBkbBfucsk",
  "key6": "4F9iyiHvh2VRYSQPUHfELCBYCsvDQKNMxPQMq26CGondYJbKt5CD1GMDhX8NzoUhMi4qsisu6xnAuqqyLqp7C4ZB",
  "key7": "TYFwnVfibWMXYt1YbfXpaTnvLFhEkzr9Wzgij6e3wNomzDjV2JdxoqW5AZmgw9HvZB6mEhLH4wmHEzpbe1ggv2K",
  "key8": "3iFhNd8ZmGWmvWHzmaRPPhezEGudgnQRZ6AnVnJrKqyfzGJpvPLQEdfzw8s4HnrGbXTKPEPqQVg2xeGfRmM6bqVt",
  "key9": "2bKLUak3K125mWKjVqrgr41qmHFEdNtAThc4XZntkirLixMc3aA9s9pLs1DdHwGVkTMKsg8Ri8hD5Tn3aWjTRTmy",
  "key10": "2i8y3gWzEi4PU34cgQboSZjAtn9qNaV5kCwiv4WSneEjnMMp75ebqumrnsNtn2heWnwUWLbZNMLn4SSGosehbytg",
  "key11": "3mEukrqL7iC8fctTEPQWiv1i21DPfK2iZQUiV1daRVQ1ZitXEV7s19K6gPviBr1nNDRe5iN1Zgp9dpzQjiHuM4G4",
  "key12": "29RGP8Tsqez5cdr8V7VxZacLR4ropkCnyFjKjjCswrZtSEHXvRLMUYgbjQgh9mUCVycRNDXvkQRCnBemKUb3x5pR",
  "key13": "3wCFXQ5fWUcxxHZd33RtFTBk4VKJE9TPxzU2mVMfuENfkJtA9DJfzjeezhtYbkxzwkaWaysQma3E4kDHbEbeKn4W",
  "key14": "5Lk2cHSeJUQpgZoYVY4SFStn851CLbsZ8Yzm6o4q3k6YoU4J9NjwVX8N2fditjryNGZpHXhQXHCxxMQmyX1Q1Auh",
  "key15": "F9ijgfHWZBsLetf8hMrKuPZ5EPzidPXdpYhtaJbvjoweKcammkRNYs6cQMdxveZj9EwA1mmFc6x4fP8PQ5VkXzF",
  "key16": "3pug4UvUHJJUSv7sQayMwgEUeFMoQX3aywKEjRw3ERkQpBJNWKANAxE3nWJ21C8Q7bh5kQqZam6pNUfJvSJJjnkS",
  "key17": "MYVtgv5d9e5atHPvxmFjZvQtNXUQFTPC98XNxB7y7BybPUccmdF9JbTqy3FxczuDi2TQ1PEokoMUztwysnU1AXg",
  "key18": "WKk1mwUhgeHn6kBFH3HGG1Ez6atp3oVc1YoRwJR93wuFXxfaVjFQbc87n8BLCEbPGSkZnqq828sNqgNLyDL6czg",
  "key19": "uwB7M9xQFSeGH316shZGvtrqQuGn6qpzTN3TdN48FHn7mZiiGryUTwCB5XctPU4Vvn83NMHM6uDWw9fz4f4D49S",
  "key20": "3vr3WGyoWdGvEhM6Pag8Qejzx6GrxrWPxYo1ieRqmAP5212md9CqUuXD55Rk8cKB9PYJXXnyXn3uWgv6XSeDwQzg",
  "key21": "34kE2xPSNd2PyzudWynSmj4v1GmUqB6EmKRjyegveEJLjhTf7QMSMGPSQnfvuvfC7GnDyPqJM4874RUFQXKEVpWP",
  "key22": "4sjTFhG7SuAh65eRE9BYu9iHCFVU3QkGH5uzLhHSKj6zStfS92etF1N8z7EPBHmQoaH7FPtLvK6jVbr9YKMTZpB8",
  "key23": "2Xk6wzRJWZmSwC9uXzog6zRAzYo9NwVUpVmw9nzoz8RWi4sVCfk2iqri2kjefgwhAASexFXNiuLEpiGbn4uHyEo5",
  "key24": "2dT5uYj8Q5G9DZHmef2HFL99TMwrjMiHDYmirSNyrgWBrAVYPcsDG8XfyWuVqtfa21M85fGp1aCueaUww4mza6Dc",
  "key25": "4M9koNw27BTVwqQEXgq1qUHpEAyHEsF4MzGnYw1KXQkQ1siPTC2aztJcRuhJhB7nJSVCEeTDug2yE8KQtZgJ4Sjk"
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
