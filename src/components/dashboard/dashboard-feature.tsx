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
    "3oizso8FySZMWFawAEmGkGubFb8ERZKp6Umge26TdxPLcsvCytCk7MjiGSQ8rKRKG2w4aj9obSo9wN7iYueBeVQf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zj6iY6XS8Jw35uyTAbc6ZkgYUdSHqidGSSxgJV7Bh83Yd3xGNBUNgq4s9Ufnsq9r4fQ3foQj9wUSYe7basRP71E",
  "key1": "HevuhnbUXdnM6iuhYvp4YxDVYuK1Nc9RV9iSm3umBMNJzkgsnW9hG3TC3XyKj4N685DKhc7y9TByKA3XESjCXeB",
  "key2": "2NY6BS9MYem6uA4bqY5rJPuH8SmFEzPvxpg7VwwCNYoarVGyaiWhzDvKznj5qmmhvDwMJSPNUEekBTUaPoZcgXcv",
  "key3": "5EWTSawRPyKCkMfGME7VEGnZFa4t4im5icJpWAfLpKJoDnox1PNaX3rqGKNQQuvrZYHi5zPEfi9FiQkQD9yvErqi",
  "key4": "4bGw2rzVw6ubc1ZU1nRp9YGVLqP4J29NbAMDYCio8GnmFyhmF7rMghD3cjBCHLF5CEXhgkQrBAHs9dMprVA9YRLZ",
  "key5": "57arT5cwHQkhxhqUC2ptNwjeBhshjATAgiSsXBU2rNMH7QjPcpvA1G21YXu8wzx1exG13XBgyUiXJg176TdAQSrr",
  "key6": "FkNAsU4BcAqWvGgRYMCbS6zGYdt7u4W4Ebb1qUsGYmGdvQuD55tTMhLnvNw7RiKjqUtGqGudy58hAxuSo377kzL",
  "key7": "32bc1DxDeNwWQ6fyo8CL5Mka1q1qwkK5JZaUn428QahHoPBonzG5S9xbwmx2zHRVPhtmBZJq76P8m2CLmRgLQbcc",
  "key8": "58uK1Z1Rvr35NxUGGF5wjyJdZDNR5a5Y37LXveUQS28VPnx3uxGB3z9j5rTZV9E2aX9btqV42bMp3gP5yNB4F4YD",
  "key9": "3fDMsvPaPotXqUbABXr6ziWkNfFNwRsGjH3ZMsVTh22p7y8gHsb9Ux6b3EBqBJr1etwEZMfMugkkBEToscGCHFt3",
  "key10": "4SXsmRwpvLiK7KWhjMQZRwpRFr2cfCadvTA1e9sHvQyGTa5ghSgmvWi3fpzjkvJ4m81awutfwBYMYbTahwuK1HSo",
  "key11": "2TyKCBRmYuUVrZWWAdkktyWGsmK76pn2yLMm9P4x5qD8RbenXe5gne4G3TsdEks7dR2VUndkaCvx7VptoKoMSj2n",
  "key12": "54PE9v5F1uFZMoZxwEy5XFbxA8HX8zDVypCDnaRoapw11RvqX15dK1qDTVPV8wBc8iPFdzTuL1qx5xWY77PudVgR",
  "key13": "5RNVhK38Ftnjm32bwfTPycBquUXL17o2k7Sxanr6PXst6dVJBXiJu56nYancY45Kh9v4VMFqreKzoSRfE5NXaDjo",
  "key14": "4TNQ6fGoFMW2LSLzsggcwqd2ovinB5rHQN3qQNDm3QhvrzPusfcsacTW3jQMfb5TuQaWGZK9Rkps1wTZ1wH1w4Fv",
  "key15": "3oTWJR1vriFi8CfDe5nRUjbrDLmJMQzvsBePJkZKvtLx1FYTEEan64XVskuxpo1sue8gzWCWh4Z644CmTNgPzA1M",
  "key16": "3Je3wzrjmBj5Em9enxXHrkE3ZPYwoGCNHaJpv1itD5Qj1Npbed6wECyMpQdtymEXtBw2p4r1fR8R6Wc8jyUBj9nA",
  "key17": "3pWXo1xAXUfje6mn6QyzkGNQCYXF5LHmmFLQUii5JXjfiNiqvnQ9JsBpmgkPCNQdzdcL3cs7MzCJy6R5rWPoV44i",
  "key18": "2CMoRyLae8pjkXJZTfrXrJDEvPoZTNMhqChtvm1jqBzybfHC4zfTQB2g5czdVUNQPwKnr9JFjKheQnC6ftYxVxG1",
  "key19": "5MkuPRD32FxTRYzksvXY6qKuMREf2u7zNVvw4bL9GEHg8saBuaF1njNjUo1hSsq9SLi5amrHUTtSuKSf12Pdrjx2",
  "key20": "2fByWYmfvEnayCvYcckRVLkfiZ6x69KQDgYKqs7tS1BGf9ZYzZGf8V8gHdGWmfgomHei5ZB2MQXPZc5wR8gN8D3o",
  "key21": "5YjY2iQe1SSEm4jXWgpTRNfMeBYY6RNjzif4G5nmFBPY6K79VpRDVczgkBaKQRFNsi1qEVzzfTTw42uECzwp3pom",
  "key22": "M5ZJgM3uWG7xvXBEPkg8pnTnPjprnQYBbFTJXijTNrcrdvgtP4q8VWvHTxNkKmfurdiKuogw1JSz65G2PjVpt6W",
  "key23": "4dNA6mLyh3f3NzdtDnjFbzmcXwdKuMGzGQjPJyVXBRCC1iqiGdBiQM6c4W8eSsQFeBKHmhB3xj4P1wP7acb3MGzn",
  "key24": "3NEzKVtDfMJPPttY9FNGufZUc1CKNoZVykcnPjaKmctrpPs7kRbvT3v4w5Pymmyb1gimDfbWwC1g3CGMii5sh57t",
  "key25": "3zeh72L2sSDsWw6ZdT5ouVUJ2YCSAWNo4PGATYDYevRViJYzuwy7KiRCvvmSZKhHUYUuQSAm1MtNsyGFNi2yRQAH",
  "key26": "KFaZNTFc3HoK6HxzwT9S8W75XRqaw6u7RRkBNJ4nvEA5AaSNdbZ9HYZx3Z31bjDv587k6dK7pHLE7TpUUGbVDHQ",
  "key27": "28xojZyYesHS1kjoai3svCA7jbiK5W3cPnR2dsypYShQ5WqgvWrP7rFoso89cTtSpR2p1SJfbs71CgLFyrLatoNd"
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
