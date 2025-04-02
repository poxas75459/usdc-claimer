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
    "5qs4kKG5EQwJ5dX3c5HFahfkVfyJ5bM2gYMPdvBjxLx4P6cRZuVcBktpqTRpRgtaF4EQ9PRqcbqgpu4V7T4RMGL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26d6gWreP5AoYzh4dsREqf1cwQiiQXxUqHSGvzWuV31nsDx39quTgREf7rawooyoDtswkPXuy98yGwYVdzi9rzLV",
  "key1": "2fgJVPrXdzMiWJqKFKk5AkQqxoSWSGxgMbeke2ZyHppz5RMp6cZmF98Z16N2SF5scPkWUNDWj4b8fiL46yeES2f3",
  "key2": "3KERqonFr7phWHd5okXumNd2L83F4mKxJK8C8zcaJjmM8LkjUAVxAuMCqySeeQUD1MB63GMsfiuxK8yt8mW8STWY",
  "key3": "4Y5apzTn3xYjqtcsZstemoDprA4X5GMDf5Xp5AWKUENQJ1zFxz6dEokUPucG3fgym8TpvfNrvfGqPY62KYpsU2Sa",
  "key4": "4ptodY6VcessCfYAHMFnGDH2UaGj2bKSy82vxco7REQjPZUUZtn7WAT68ZKZfY1DVNoRGp1C7vQZsJvUD6Cm8GJ",
  "key5": "3dQ4BWnNmja6TWKcPMZA8dTVfXb6PoojQVfVDMhViPLBN9VNAsevnQATEiVbTQMXGJWPsigVXDLPAWR1PdvRpzKf",
  "key6": "2fXi4P5cHXauFLdU8j9LsjZaW6K1ofL1vTvw6SGa9YK5oMowJeHhUipYy693TkR5bShsTTuWYYpMDzmVeTzpKBZA",
  "key7": "5xJe3FDpK5L2khhDwEnfLFRTJLKHSrLernEPJ9CXMwbYQk9popnPHQzzi8P76Cf2q2HPzSkvK9KWyTDXpDp1owzU",
  "key8": "m8gPvBzN6KL8zyQm2xynRK7eXesXa14ZScXrjoPuaBSwm2aoXF5NVf9xFvAFgASnfyTppFWgUcJu9LvRotmtRPU",
  "key9": "3chfvbiKqRU8Eta15tha7wcnoHAFn65Pk7LPnJTYdXEBfT3HK8mAovdsM722R6oqpazBUpDdt6XLou3aEjoknPo4",
  "key10": "28RFLGLxSjWdSmbEMKHNudgWEGvNq6VDkLrML8qDyNuUUG4fBjVoE8DPmt6UZHmYRQfsYdgeX2PMKoFaJNRyj8sb",
  "key11": "5AwrbvXTedBmMN87qfjFg6YAgvkztyXuynrKDdu2F8hxxdaWYUV1XDrNyqz2ktpXYcEpai2SsuetCeFZ6Cb1Ytay",
  "key12": "64ZH71fN8MtE5JzhHn4DtsQLdnAkXbK87j1nsv1Xrfw4wU7sQSL93j4T2QPK6zQuowiiSqDSes26yuam3knmmbxR",
  "key13": "5e3rMehN2kAnHPN9193rtNqFFNNBnxJzZnd8ZkXjx57h9q8crToYtoZofuRgPMk2Ng6Td9x7KVAtUfYyZwLjdXHZ",
  "key14": "34FodZFkSgx2iF5TWM8jt3f7Q1yzoGzsy9ZfsD15Jz8BnZNz5LJyv35jojdJHWue2ftiCMiB65h8wxmYNSdVRrUm",
  "key15": "4pxDUjSxpjktwno78UoT8SZfKAow87pdp4XN8FjAbZEPieNtCKqfSWMgfF53TvFUSvywpUA5xMDk9SpdT9eWfa4P",
  "key16": "3piM7T4dLjgkk582ZeoZDrSwJ2NccLFt5Ac27C6k8cs9j8wiYDyz5NSF8wf6KtRLuFifCsxNanA9BrgKFaBB5ugi",
  "key17": "2DFmKkFHjAmDQ6cJN9fgCpbq7JwW2NfhVLqxVg9SPHKMhxaC3K2CLsqyfowrNWFRsZqXArdtzRMtDGLNL3KR8xkf",
  "key18": "3bp3JeiZHNhv6xxxvVny56yWAoVUkgnF9BR4RjHW9Qx3VzR8YCcTHTPTCDpkQE2gkvwffZKanUMViWCkQvsz2xag",
  "key19": "29cFXYojXRGyJhcEAg699eaftAX7fjkYoH1mfnqxvxcu2BH3xebQi5g6uZTBo56JSWvjaUyHaKEb6C62nv3FLtgu",
  "key20": "5Vjxra9RB1DaK43S4NU5Ld6GtSK9dFV2utreXnmCxqWZ5GasposJBtNbsbY4aopVLXJjpBuJmZMMZv3wAbpj5YvK",
  "key21": "5FAE1u8732ozhPak2JpZZGC7RYDj5rp8GhmgEwHL8dEeL8c9j9t8qd9UjzVUJgDp1cTCo7CnM9PB7jkP5isJAQD6",
  "key22": "5MzQHrtH4HMyzCmGt4PXTBc4wEuwT3cUKmuLsVuzsXqzKxXT3TTyoMxcmNwjeQzsnE4mZd2qGpmXCzXFFJvoFZQN",
  "key23": "2ZCnXQMqtwmkWKcwovSonfKGVCAC6GVyD151fM88WqaELUvoW2feND2RCxa58SCwyKrn59dEqBHQjAbjrEkNkMjG",
  "key24": "5rQ9JMtV8mKHDVhqLDws7i29gr8nPYNXTN5oBuGwA3USpbPAN7huP9KwmRDZTkHZF3qEw1hMfL5Xb3udqDwoAT6h",
  "key25": "2Lt9Ekt1ZE9MaTeimLDYrM2D6VpNLSxGBDsSJX6k6sN87r9hRzYpiETCXqbbzmiz1hpjin5xkg3owUW6XLwqycrx",
  "key26": "3tvvYUWc7tcAxEHaaXoCsME5LpmZm6qxNWQ69HoPLPy1fLM3mTS7Tuj4NnuVfj8FDwLS8pNKdaU91wLh1Tx9cps1",
  "key27": "oMbtvpM6B985E4rhPVc3gAACAiJtaUz94XbSN7UrJgQzVjo1MssHVQsGvgvN4N6F2X6yADZeh3WJMRuhn8LoSeQ",
  "key28": "3bzTkpRKjEkwvX31VGKGNfUyXuBBn1YVXArdJdrNJZi8bBmsPwppoV9f4iG5UZGCiq8dxDmgrytbxrLpu2AHWcPD",
  "key29": "3efjhXDbKsS3NfdfDcJcbSjnNGZR7ZexmebNWn8DCNwPV5ZBszsdKjC3jkvTzY1oB3Fx5wrzUWpsC6UKDVwGxij3",
  "key30": "55jzfGkKwzuaXEJrAJjdbmeu34RD4ZLQ9635pWZakkzWsgmuVFFKAj6cQ59HFaEPp3RW4BPg32RaPByai7tBpsxk",
  "key31": "5oXVUpQFe31Q7aaHFVV8xBWbDPBtFpRoNp3UP6UB7wJTzyFuP9rPnMbcR7n1gejK97Ti2UoMYjcgAuv98D2BSR2w"
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
