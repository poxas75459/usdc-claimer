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
    "5evfLGpFUAX428NDYmAbZPkbuMSZqcmpxTmPHwJvoW5bQUSpLdbtF2RoeJbWd69F9s8kLcJfL4ieCzTPxSwqWup9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sQ9jymNazr12pExipk7TKkyqNh6Y2ALB13ksKL2uVDCqcBTZv1VyCaLAghtVYatKzWPVyzFEGa9ESWWcqLz5wZh",
  "key1": "2P17KHSehe1z8oTFQUeHJgNJrC5Vhuf98JucWXNeoYXsMUe9oJYwM1LaxW9LGDhbV93QnkY1Uwz7xu5xrJ1sbJCG",
  "key2": "4HuTVGUiBR3GSGqSoaXXydmSAkjYLTA84WKuRgZJfnNPDA848tg7h4o2i42yn3kNiUZ7iyEzrobPi9B6mXhgdAoP",
  "key3": "BjXiZGRABrjNryKJseUGLS8qxgQFaxoXRjximfH9VDtT1E1HKkFRitDqkv3yT1TwMu5jv4eHBrg8QhzHiPZQxcm",
  "key4": "5etnMqDfxrhfvXvADNggj3RZrEd8WTrUuUknafLxvsdoZhXxmiP8jeeNRcxHS7KWe3gCU9kThp7RdvueUkSzpVaE",
  "key5": "5rKTDGk2v955Y7PNdtEeFRUKtRs7wfhZCEQNuJsT1BvL1FfNue1GGkRqaK94sxXmXpEHqJ8WVDCqpmo5xc964vSP",
  "key6": "2jh1QF3Cp1fVy9umU1dvfrtiBBrVzbCL2M5hfGBXeXsB9iWaVS7jQe6vWMS99wiRyKwjsfZY5AwAj4wLQw9uBCwt",
  "key7": "2Fn9xwa9z8w5h3LKxdXywbgoC21WaXdZ6zGdB5JLg5FKmHEZgvTMUV9iiAR4KhkacdvvU6LJZRLsqWfjduWdDq8o",
  "key8": "4s5rikNG5CX3prWZbrKgVGCFJMzCDV3ieJNM2jz4iU34zAG64ZaW59Z6m3Ma6t5ML2SyGk9WKSUuTnKSGCuyaQqZ",
  "key9": "3BLM7tGtaTARf4Xswdg2HivLEqofGh6EHY7eWECDBKjwjWQRAkDfCwonjU6CSSv9Ux2nwb3jooBJmo8hwXFH2d3u",
  "key10": "5MehPbmufKKG97qrzfWtb12F9cAG37U74mnnCczurwFcywEkvde1x3a918VvfTwUd1H3MVAKtSPfuECqoDGfP7Pq",
  "key11": "4vpm1yQxUTZ14ar9cgWZSwp6TY9Y3hYRHGUifsnby5xW63fw3seD27VRvc5sAWsgf4W3Hi9JpPtfJtuueH5uRTF7",
  "key12": "239hRepv18tEsvG9KhRwGk95bRbd6ATLyuitpusC6AYj7cJVRXxhKAUPTNM2HNjHVrK1RJynHxAP2EFGEEq62hhK",
  "key13": "stcF9LmkrikRx44cdGNrB2t9K8TTU71yNNF9YBo7msxKTz3LToBniHqZz8PbxTyTug5VmiburEhsZip1EemCxPS",
  "key14": "2NHGNUKgiXHMHR46KR8Hyb9chQdA9MnNPvyPP5vNHuigNPvvqPaacVot7FTmZXJT57fCEKsZbjL1yRBSET7erN9n",
  "key15": "29GL7T3coRUtbmNWR8ojsZrsq4uw3MpMzP4yGFGWZqGRMfRa6nDy7r5CWeY9xUZN6ztY4sUKpDKvupNRK3kzVzYw",
  "key16": "3kGU9QwcRrVuMmnMb3WdeVf6FzWobymwDK39x5c613qsd6rhSvXR5a3Ed8j38P2ts4ZVS5RuqTMMTVeKT1VgiRLe",
  "key17": "3opaCgnKyBdZfcSbQPVmymzNjSdCKu5ZyyfzqWGdh5b3Xk6Ao3CLUN54YDRHAasuoMLFeGDpre3TpL8Z2eC4xgwu",
  "key18": "mw9v82LwRJJPsEyXuWHhuJLKYSRukmjSfeJfBfFNXyurqi68MYcNagCwhS68iZRQiJuaqEyv36hA8ZvsiMqqin8",
  "key19": "4jwF19TJDXLFDuU12NA7S7wwX72vnLLY5g64DrgAKB7GkgSH5hHCFfrHu99JNptRSXfAsbumQR7ny5sE167Xc8wW",
  "key20": "5eTkaSRGTszSDZkyzjFtrXusAEJoxWopNaAG2mRKMx9CeYDy1K9PK4Z2ADewiWZvuxVCMDyaw193SWeNVy5GgPyb",
  "key21": "2fwbkgwFS3vsnLiqk4r2FrV6VQmEQtHsMcJAtpLsThhgu7t5utRweoBWWTNXknuA8LJwxc8HWuznJ8GgpS55K4xD",
  "key22": "EJfjyRMLBWPXJAb8J24oDdxRKrxLAEpL8oXLyS6oY4q4tpp7LDjKr2MKdZogTDwF5imymau2stCdbG1GuZGYGhF",
  "key23": "5ZifTCHjoKLriT7iCcWqKxanGpvTzQsj4w5xuWwtAgPD7sQZjRTxauqdYKQf54kiT3yDt3D65UhZ9xeUP9z3Ztza",
  "key24": "g2oxT2CAiPqijCaVhdR93KK4LQz3jYydJwK9N1LTXkb5XKAYMZUuWXHdJzPRQBEWAUMvCo6XpZb1E63RvVoBZNq",
  "key25": "C1H9UjdU7w832BhA6benSCjKJrxSKMoRSWxu1BLMo2wN2SnQDcCV2dr3Zskk9vp9UL4izNbNWowYY8ZYqCw14ya",
  "key26": "4pUjxgToDnSMgwbGZyKZuR6DFSwZqnGUZDq74pu16WXo3gw38R16idVAPij7LQoMLySYkroDjGWBjY7wKAxrc3Hm",
  "key27": "2z8NVKrmeThSJn8Z6GJXPVHxu72DqEpB9ERFK1oT2M4hqhXWro34F7EzboLgY3WEMe5ds17VxqJCF1tvZsBRM5Bb",
  "key28": "mjXm2NrVicB7L6gsTwEQypwRjh2aABgJmqLJhwL4mNuhTgbkrgBYRumpY4dugvLKYbrqXDuPSvCMYTU5vEV6BGj",
  "key29": "4v1vDRHxfy8d1Pomk8RAZ7Gk5FawYWskE9WF17Mqk1hm7EmCqAFU1x4bSfNe7f8qKsU1q9Ht1eefnP7rMKucEeYn",
  "key30": "2iN5NB2xYgp1Qz5bTYV81fixMFSk72Y9zKoms9poEgiEwr7aYM9iab7rw2dBCf1feKsjT6pre6GDBvpvYs6cFgUb",
  "key31": "2BXFFCG4hGKGU47uCvB64DrBWRtazDzELEHo6JaQmyG7mJa8ndDeQMnfc6WhbSivyksh7kBTcu49x1mybe4LMmuY",
  "key32": "2WCkNT15b5L4WL8jDuRvji9VwiBX8nALtkKu5MEAzLMBcMhhXmDfbFhXaYWmBFrYJsvzbmjD83aVNHidXfDsBzRm",
  "key33": "or1mHroAd3oTbyKqxhNRbXxXKTMp6ipEmLwrAYcfuUPfmVrbCe6HdeHv62sdnVwcMyQBpFnGiMGvjAN1mtzhQEh"
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
