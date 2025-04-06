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
    "3zPhE6G6mbmVtW7gZGPhs4eTYU8y3hxWviUB2Gx7rNCCjtJP1Khe2pna5t5Zk4wj8YuZuDPFcVDyu367Kr52fdHH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26YCkmcVvnLN7Vw2jSTfmb4CYPJnJhEsqn7PdxR9zbspvRceoKjJ3ZHcKeg3qG1gViwkjDvvuc5Fey49381YSXuS",
  "key1": "5oBx5QjJUesXaZc38zymo8TQYcvrW1L4zaNuQfjbYvzxgxisoqeRktZX6u7UDNc2X5etwbmT4Totm4T7aQ7Z2J2C",
  "key2": "4D9WBPzyKTkBq4RK7f1NeGVXMnbUSBzCjo8sjS1mWF2mk9pkMAz2UfDpyzeec5sJZD7No688G3SsWLgMHTke5gHh",
  "key3": "27ZPuySdsxmxKiLqHuUV2nDuuuNoUxzYCNSnUKAc1fbdzqaUqYaimKm9jfmw52mR7fwLfDoUSKK1ddArLXDYM1Yy",
  "key4": "d431fryoEefwgvC1gTKrnk96U8DrmbzBFgUCNFn7cMaa5iB8cjBJXUh2TF4hhCMttjivx3LotueSx1GYDvu4cSD",
  "key5": "3i8RoYB8WPZ8iM1TZy4ezD5tN3Crg9HWtcrXWhVP88DxR1ynEz2WpBfZ1PK87NkssTtwFr8dr156uqLNMfjJaWZk",
  "key6": "3LjVGhwWLkhUDLW8QVeBKxgiceGYXv3zLoY8ieLdWkSs9B5JyZ4pNWsywMkg2EY4rxsjjVVbvcJ1H6Wtpfd83XQu",
  "key7": "nJV7eyDCmdDmebi8QYuuPGGuYes4BK1suvSy9vFvkvXgRQT51o5TwiQEQPsEACb1f9dbf3A24J5CQJNqDXG6L3b",
  "key8": "kqWwoUZE3q7ew3a8wptjZsUW9MorGYnaegHuMSMkBCipK14JRUnbA4ER6PU4YbSvn1SaCKjGtYa3pvbuyYPtxRP",
  "key9": "5ze3B328twXf69g5Ym8VrAXKV8CvA9tD5Tt76Uta72YWPHbNuo2hq9LBzqwwMiQ57jKZ1yW9qmHgcm6J5KrANND3",
  "key10": "4Pv37k6GQ43Fj8An8HsV2owgEqEMWndPuUvHkkhmJEEvRCdVRafRh6UpYKG5VeX8Qtsa3DJUA6xgwvZ4GvmzLxws",
  "key11": "52mRfFfo741woBZ4cvga2PWnJp7g4b4PrJNeEVL9aC3WaDJQ1Lm2GbUZmZhdL9UrtPzbgAr7pagHnopNxWMcjBYR",
  "key12": "2yKhyeFzXtacvoZurDuMJiMS3KamEJ4dmPrCeL1U97xxi9Yxo8a814pLHiV7iJfHfe6jzckRwQCBP15AsR6FARKP",
  "key13": "2GvQyZjCiWT7bVkzqyPff5xuvrfQnp5AEsXzULKG8DCA2472mZQN5SdMLBPyQReEHN7Gi4xNvaxnpiTqDboaxn5D",
  "key14": "2ZTiax3wTrtif29CzwSHutbHpDnQLDGwTmSDYWMxR6MwvVunax5kWT5FBd2tH7xX8TFRmYck9Kri4YKsnPUhPx3f",
  "key15": "2ENAwrGHgeoqCiQ1s2qJHYQhftFMRhrpXjur2x56eT3hVHQLXzswdiUXTPwYSKnkhyJrQTAoGoTpCRPujZov1HoN",
  "key16": "3tWem9Ae5PWR1t6ukJy3XEWuvvW9S7fFfo26vqytPjNiUbjGX6kVYE2CHWu7v4CfrSDxEnePtVsxDJujz7pZ8wMp",
  "key17": "2sX18Q7tTVNGK7KESE6VRBdKuaCg6t8jF5zxQbgfLw3n4GZ3VqCtEa3sGmwRAPs6YMLEEeiBv5ApxKW4uj5h591R",
  "key18": "Vfqmdh7L4e5wFTg9esniN7PmNDsHGLaT89EXr3ZffnJgxWPoccKh8FdDdBZ9XernYuyVhST9cu5iNkHuNqDQc46",
  "key19": "44o1Kxa8T7caAfAKpmb4ZfutqvBMxBQiJHnADqGRvjaMLgNzy6udZpGRCwb4NZxPZYdYxNXZwQmSmpvxD1Nj3iA4",
  "key20": "jS6iED2EqNFKwWdUULyqfsVFpFmfTyL86i5zV3sbXp3SGsDJQmRjmWvPZYGZPuYqwu8LesKgfYigoPPjRiZjhKW",
  "key21": "2UG1EPWcLeLNqPWC4kfk85CpgWZrKszbvnnnhsyCFo3FDJaAuukRUDHgy3Z93sfyf1X18ArYGyfJWRkzibcwgC9j",
  "key22": "455JevDTyDGu3QMqgCW5Bip9MNWgTgw5x8PDGuR8CXSvbF2TYzQpm6XSSmpqiMhrieTyT3Mxq9dMLrxvXzko9S8y",
  "key23": "3qTw8J2swiKWZup9y36cu41TaJT4vVYcJ7WtyiXytzE5xxbE2XuNKdhqdTE31sRQbx24tBWfmi8DwN9f7HnjNykn",
  "key24": "2ka6vEuyjHZAHjq9m2gzB5QRrBi1jnRLNU4VTEz93NuWkAuCE3nuDM3jkVa9wehQi7AP6UzNUhEJMTMGZwM7EVVg",
  "key25": "4r1GdvgTEGHbanYrEYCGvkgZDdGQ3WiWVnYeKhvgcCRYSuyCEdeRBvzEuuswBEo7UMMsXYFESqQysWS4Ke1Q8ASt",
  "key26": "W5PYDwdKLv4HYKU8WDUPbefEFrAL8VxoDJs9VdrbiK5XCvm1vow8Y1jvNStM47iHQSUKfxhfBR3aGUeyNh5bHuG",
  "key27": "2ctUp98Wv8y1s3NtjnyQuSzjgzSdD8o2r59315NLyN5yFNKsGCR5UEHDeePZJVCj5hHHpxjJPPDbJkZCeZgEm3kt",
  "key28": "4QXF5o9Shs92LtcrUFqRYRsPdtiPJJBD7Mu1ZVJNaLY28zJ61F6qViucF376LbRPaXx7aSJfGoHrH4T58KKNozu3",
  "key29": "tPecitbDicKv393n6AP9qr6kzaA25YYHdZMinF1tB4FpKibS4tP42mDoJnfChoXnkPSF3KuZEFStQ7yEPeHU8fc",
  "key30": "neoYK69BSKjQDcER75T5ScpAK81SBQpRYB16pLzupyncW91Yt4uSNxUsu9V7nxY5aMpTFM27z1YpnRoXBeGtMfm",
  "key31": "2n382bvm3yPo2iHx2TqoLSYJHHkX3yCs7H4JWdSm64yobbMmMXGoVkNbk97vrip1RS1DMHTpXLtrXpf5VJrCGf8b",
  "key32": "f9rQcTtd95ZLPCCAahLRhEdNGNiWkXogrqseZD3jHeEPnWuqJ8mF1JAMMemhKG4wges9iJGnqLxpNP6Whbz3opi",
  "key33": "5bSHiBZ3WjfXgbX4yGwVY7dzmidyKcoYNheBTBCqkLQ3RUJi4s37tCT5XehgesFVSs3qSGBDKZRMchKEXcUDEf1R",
  "key34": "2c39qALd4Tkd8MiTJdWhYxdjLRkPaRyViTyuhcfGrzWvezbzi35q1vTmasuWjxEvNW4netrqtmbGiD4cfzVD52p8",
  "key35": "5MFgo8eCqPmuRMDyRwDmYVvzoLUhCjcnKiqPrn3RkLSTM5JDXZSh1APcseZhHVQwyMkaCdVf9qbbip8CvBJAz5JS",
  "key36": "4AZH7geev7BFrZWnaThN9jLFwwYLXWh9z4787ZyZkzn9PBh4yCM22rsCT4UzfFD56pYpShAXhPRZxdfk7shrsK1D",
  "key37": "4Q3tsww76AjETGrDRkSgEvWqWYiK2uQfqyRBVxb1eEEemrFSLDCEuFr7c5ADeaLL4rGVU5ZjL8to9ku1Kf7iShBB",
  "key38": "vpfbtt7whpfQsvDLtFt77mqVb2JLyeLFzWezVaTx8KVQPRmMx4kSrATLBuR8oDJTePaFXxUZnDpCBnCFD9Q2Zq7",
  "key39": "5Es8VH62jkDju5bgUzaH2jk9vaqPekjPj3vqfhAW4smJ7dyjaNEYGtkQ45Yxg1SwvB1gUFWmwatsJ8byEXQknznD",
  "key40": "45PsTWuYW5gM8YNW3H8CxEwfRhotC8W28J1LN693UnrCXvQjUGQtdVFJcRwMxhy4iSqXz1QJN6Zh7BPH9Bne45PN"
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
