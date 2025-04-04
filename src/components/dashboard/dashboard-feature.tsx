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
    "4RYuefDocPmMTT6rzEqmwV4LFzarhoWvqbG3uPm9V8AFGXGTQtdhWV6kvi73aVWY12YVRhkeSxvucnbjVQQ3qSGY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LNQUp6S2H6NJrZ89fTRMjrP4YxTdBERivNSX3HDE5A24jcvv7CTNwUVgDepqcSm7N48wSedE5MzZYocThAbHA9D",
  "key1": "3oUeA9G3qzprQs6hpgBhAkUghmdW5P9ZLbbm4pRTCQh3JdWT1HTTuuKAxGjttXeXA2n2GdggfrggNobiWF2L9ztk",
  "key2": "9hMC1WD2bYUmPMiPpzxqaiGQDFzPbysU2Q13KwZzSYx674UJfp2YxUgjqLzoN4eCp2DNWERdN8XER6XKkpWoJCh",
  "key3": "4vF92nYrwiEug97sHpqxhKUZtdHEWfzBkJYp6EMCneaFcaj7c6nW7kPjczBRcFtZsFMbw8eREsbpMFTuoRMZkuMY",
  "key4": "4ovudZDvvPyWNu2Knf95eoCmZCuQFW8zAfpEXWUWTiQdbuZBXxycdS8GFb8YxJst9y3GzCcHbdjJdaExtDUmZUWD",
  "key5": "3TrR9BVRDjLaNjiaFTtuTnX7YASRXogmcqS7h9u2eur9WE4FMBBEDzTaDTJocBcUcQPsHZq3JUAgKswYiQ7ZHZxD",
  "key6": "5fXM1UrM6XxJYt5twTieMezn6vCPSovdTKR3u1aBsNByvVUxAeT69rVrxp5C2K4Tath4gCoxYbevCwYYLNfFKneA",
  "key7": "5pFWmo5Ri4PeAr6oL9RWW9ydNcpuxGHCyA4ibiQwJgvczvm1A1wcPFwDgn9BLjU1s1efZoUX9gG6W1VXk3v2gEnu",
  "key8": "2q2Zi3wjJtb2jHD1B82jCC5BBXqtq3Msd3mPcCmYBDE3gUzeUC8vqt6ppGb5CfLRJzfYhJMuQouDdYQj3dP2FUXX",
  "key9": "393toEvuESjquns1nFewUnb8d7h8LMPVSsubH5nghFggkcRGJs4AdUt4nH9Cb81LAZDoEnupdq2BJqUrkXFodP93",
  "key10": "3HEnGBnysTSzvUf8bVLquLr1uUWRpirtHHhXb5mhyKeb6XZG8SfE88jQWoEaNLS2kEptYYueWNQNavVsY6r3KrAg",
  "key11": "3VdDCV7RpcBBChQTYtPNVjDmPBjFycopLYzFRDoKULU2CHLee1jsCDG4nznLdAeKWuMxLWYeQQ1i8th6AKpvVk9e",
  "key12": "36uoj4BkjJ7SGZ7A7ctySzc2JxkxTEBeBaArs3hy4TyfteUKzJucj4s6jpu18g6VqNmVSCVFL7AykyrWPQnU37qo",
  "key13": "2tHdjgMwnnuRhFsw5SvcnRFtq4FFLAjsfmzvC2TB8cDW1qt2Fjk3CmS85QR8uxiWD1xts2TukKudNDdM7qtiuG6h",
  "key14": "5SQRUawuBCYpk38ArPfC6Na6fJZWgVwYNP3wZVxFf5nDdtqtS9ELtzMULSn52Z9qZumXH4EWmKe2UGSjFu6XUkn1",
  "key15": "2ohBRPNGN8eTWtPPcFJ7P7jsFzXxxQgmdjynAexzzQaGoDtY2yo7pzTJdjhFm7pvVE6Qx27ihT5cWzgCj8bc7Pb4",
  "key16": "439fBcVa28g4L4rM7YDNz7UeYFikw9mPV8S2mdH4LzN3ySW2SNv5vEp5BPuEmAZ4ytGE9ibB4hCbrgSTSSjMcBBm",
  "key17": "yzreVj2dKeQSnKpFMXVsKWh7oX4ScGw1Dn7yfqarcRea2Mh8s7b4B7tX8FF1u7QtoQkCqXoXm2efT7ubY8uNvJu",
  "key18": "3cZutAH9aw1Emba9Ki9Dr2mE7EYmQc6tawMSuPX7UVj3vG5Wrk5oq1KYY3BEPWYnC7R9deivpBJyKPynQ7BPJWQt",
  "key19": "4BY1HXogJRBv4aRoG9H289YGAqyX8zbpq5W93tSasyei7fqBZSA9SzBfQT4KYrbeskM8ZSrsdZzd6KhN2yLNzwF4",
  "key20": "31yFfEKJcRkxjV4Ehoezr49x1KBuzrPZpxiEaa3qZYcMFSpumLohnyA9kxXNLD1PN4iiXY4iZGVXJuHBJJRumQps",
  "key21": "591151ZY8fS9C1GeCnZu82xUkpdQSnBeCm1HWZsyjbtBaaMNiXjnF38T7Lh1U1xxnYbvz9omTWXnV87yXU24S1zN",
  "key22": "5gA1ivWBwcB9PNhbgiTNwQ6QjtY4oS3H3GbtTaAQeETzBRWa6zrVdnbKKKa75zHJSFX6ZndQLsfW8Va21HPf79nu",
  "key23": "3ieLUztpcFsAKkDvgvQour5LQsy64HcS5nFHaiaMFdzuzwvVL9pRhazs6yoDNYQPabdq5N4HvVoPz614YBB6QXfW",
  "key24": "3QB9ohwCK1wXDwqTdgPLWnSkFMqiYqppBqszsUeCB6nbW4evAdkhqGadYdvELvWbviKzS3KLQnwFzHw4iQF25oww",
  "key25": "5MKPqRm3PRdeCg5DGcci29euWzJw7gpjkxsgHob71YjYQzfvT3Zq2ZDw4obUKcpsa6kk9xsWs2yUXynQhMbZ2qH6",
  "key26": "5UwWEEBSfUi7m4M1JARD8Uyypuz4DctCVEAFNCJfsRXSsih7cox2u5KvCjQM4EB7bRv8L2d2NfPDgJJmpyoQ8XkP",
  "key27": "5EhU9aTqLqnWS2CG5dg2TgQqTxR3jSneJSMthhe2Fx5HbBB3Nv58MMWrUyrMZPjbeRrSmrbV9MACesPLbxbtpsTA",
  "key28": "4J4U3HMbTJAeYABtjQvGAQvdZK9LKStSDNCCZFYit2xRWdgrsPQt37rCwL3gWzh1CXpqPx9yjaNnEgtmDkRppcpE",
  "key29": "2LutVm5QaJ68JEGyGAxmPdgPwForUs6nPm1VaorJVEKEAJKq4NhyhZmZxF4gntgAFHhsUXLHhL6M4zUXk84oHRWH",
  "key30": "3dw9NyrCvYHaU5RWkNvzuk7ssM7rJWRAzk24cy6xtbKqkAKXnrYkz5EyhkRtgim51q8yKUBu9d9cqPBqEjxpDU72"
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
