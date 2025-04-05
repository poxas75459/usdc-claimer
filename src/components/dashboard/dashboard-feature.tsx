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
    "3eYQML6sfRKrXxdV3QEsDVyLbBqY2KE91KVHMDTs6eVBSeXKgHLkGBSx64U1H9Hfp53f59YYmTeKXHmJQ5DxM6y5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KZC6MVu2XCpEBWCfjvJiKhGpbsEmaFvJNoDSKto5aH1dYbRHvu5Cdv55PuVuCsZc1bihgPQjfRzJuePqPhmyC2c",
  "key1": "4ZpTsnuWPuPpygiaDvUjZwZvbb2qrQU68XX5znVFS6LXUwirKggi3KtiYGbEirLd1Qe3oPsNdgjdgwZj6oy8Lftd",
  "key2": "4JEf7xVvEcYgSmTs4mBiQux2Vmmvdfn8QoS3hr7zE3XS2tGoSjvM8H6cHtiwnRfSgSKgejtsnNGD8yD8m4GnUUMA",
  "key3": "5VbLgZrc7DYiJ3xiQwqX1bW4ystqyvXHkLmugLqLg86v61J3WGDkjSQHH1D32UCJ16EjZn5RMoKbkRdqVhQ3VdJm",
  "key4": "54P52ptU9LBUU9RT4YoR5g5vqZg5kRxJpAPDPSTEYNLbjNxMqhua8UzpeqWjae6oc7S9i9u6VEpNvc4pMmA5AgzZ",
  "key5": "3sUCNQzc63sV1D7m2RdTpzFTsXwL6JWvm792jHGYn65VqWjz2whMGTPtWQKcesFyoaoV2p4EDHoqosdXXNGKW7dS",
  "key6": "4hbKPdigk6UvJfSptkQpox5YHsCsdN2r1DYvu7NziMPSeptMV5yF7ji7jpekUNtsFSwGCkLLon5XajozvuTChx7f",
  "key7": "4xhi9w9iZcHjKeop4Q8DL1YjVGomCc8gN4WKpGzkL4cRgq342ZE1G1Wa2dDGBZCDDzjy8hVCXZFvbmS56CPm3psW",
  "key8": "5FTuY8keJaT8V7qSpAxVV6nrE3ohk6aP9viuDU5rNMBUSpeHtXok9EfHt9raTNWfDg9K8GUUR8Qz3DKFrWPMyDhb",
  "key9": "61Ck8GLJxaMTYUw8zLAJpzm8hcy3QnphzTQRDqns8iq9yTvnBYozphMVBKZDccepg56D94sa1ejnbvoRxurWvpAK",
  "key10": "3wkaAb9h21q37P2PjZJBPjdE8seMdnmiDTrWZ67hpatFpPBdXNWaAtPhFD9WNctqEeLMZNvjkxTEkDYdQJv5Bx54",
  "key11": "5pABGiE38qeJXpPbyXWQ3imzsuxjdKNEy8U4ZgkY9B28GvpCHxCn3TX7MJyYip5xbaroevaVJbiLyMX4tbknnnyT",
  "key12": "4Z6q1dSDmw2AjF52SAGGXGJW2wqmDBmwepgvsQDKR4YK6Nm8oeHw98HfyUAKsFMzwksKZfSXkkchaxYK3h1sMBXJ",
  "key13": "2yKKTUqi2TzQkMfxmuXPGMhxBzDFEb26a65qen7YUQQbg1QXMtyi2X7fuuMAn8j7zB9KWzc64kvmj7eDQc1pWnZy",
  "key14": "4XFHngL5VJNop5ApK2WehmFvcTVwnM1n7LWeP7RcFjUFMkqSGyf9in3pP8n9c1qc4QXVMM3VtZUUG6nqYpzd3395",
  "key15": "4G463DnkxnugFocGcTFwQw2SZQHq3Rjytp5JkHSSvSedJjTqqv4a5h4DzVinwAQ5gBNaAmnXNFG4UVX7o7dWbkxL",
  "key16": "35FoFqbaFTpXoYnFukygwM7My3a75gzcnX7zbQk78Eis4ypShgj78U9eEYsMT26cRKnb3zTCL1XrKLN1DpmyUUMS",
  "key17": "5hZoV1Dv6kFYx1w4z44fLnxdRN4s55w6Abma1dmNcvTT8RRhHTN1JCuhCX4VNKoLeFzUvQ8rBM1rM35rCe6Kp6R7",
  "key18": "5EPihkyjo6B1EXUg8hEP5pKGsR7qnWkfnEtD4GZryoQoZfoXW7asvsbxE5bFTKzcbC4r8NvYYh5mSjkFBgvBZhjU",
  "key19": "pHwR2RBnEKwuJWr59DfNvtP4bhPFLN8iokiCHzESJiFwoN9r9bu5fdfknijvrQH6CqvWtmsPr9YbZaCWhLiLeUD",
  "key20": "3GTaFxPw2zPpMKP9ZDpFbhtV1Tqaow6mBRFax9DJ5pgjBss5KgZDXLNAkTmpCwxj6s1Zu3zUoWfW6iMA27byVanB",
  "key21": "386onyE1cySMqhwQifi9XqtEvXQY5kQfMZkAqE1aSbSvDVKvpPs9hip12gSZUAw2kjiTfiK1ossTfCAC6PD5j2tx",
  "key22": "3mDZi9CtGb4VcQ68FzSLoXvH9CbEme6VokwoawU45wjyfzoyVawUUcNuciiRycExrwqeLM98FHacPqTb7M1pF6cf",
  "key23": "4XnYh4WUxtbX5zNnmCcpciAdyKYsevKJk8zE6bY3xnnuooxQGonPnsr73p2MMNd98Apb7F4o1gGZLUDRJzreJJMt",
  "key24": "3sY2AD88GANe8hBDDMTdYBxNfZMU1pxTFYcNE1SsnCXhUXog6PxKdVdFN3r1Ci1zkD6hjAunDR8DUWjC4gs82mc3",
  "key25": "454k4DQdGXYpvGpVGaJvnRt6pt91LRyWnrPTjZh1XBCyr39kXbhsMBQe7HEL5GYonLPXpy4HMG7uKM8sDsAHDQ1b",
  "key26": "2si5icFVoStYDySHkayP5e38giJpwymAqcwmE9gFGBrotKA58U1qHrXTxXzjNeiiczLpWtWsvf2uLSHAPg1HjpWi",
  "key27": "RPrBmHCLe2UKTWSzjNpWhpkQkUNcZEH4ZadQkDYed7JL1xa3iioggeg7p2X3d69em7SZFgRcbToZEAnj7FBMd4z",
  "key28": "3VZ66z2QpYdcTXadTEehHned1dFyzmXTzRCStQYaJ5uAyTsBEcXXRGTyczWws29VhAs4GpVU3vhptF7f43brqBPK"
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
