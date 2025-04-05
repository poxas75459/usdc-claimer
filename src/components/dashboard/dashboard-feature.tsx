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
    "2hmbyxtiJXE6jecxHbYu9eo5Uq9oqmKs9FAz9BGnAo9q2CZwrgJVvzaE29AmTEWa3BebydQKqScvXR6wgCgKyvHN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C6xTtXKGYCrREawBA6NqYkfkE7aHknR58zSc71Z1HQtJ8h3zU1aN74f3Y8gF5Vqd14pkSkgtEznRjvMRwANHpEr",
  "key1": "RFwmJSN2GKGF96s7Hdceg6UNUjvh8kVqJ6tJpgraKXHBbWkVMxmaxgyUbQbCjC8QET5qD2xpXPswqXCgMhVCGrD",
  "key2": "3Ypj1fvrLQaHhU9x8RnghWLZDi9hYP5NgmExxS51DmV2WhngL74mJaHSxigGW5UsPR5U27QbkhhDG5nkqCD2wkGs",
  "key3": "tRczdyp5v8X27brWn2xqvPDBoPoX4m8y75c7FCSVZ74rue56kNAf443NKu73Dg7612kBTR5pQ4HRMncMyNCxBsD",
  "key4": "3e4obDim1q6HrkmuzZoXGQoVk6uZzHTB2VRfRcZVjEJ2GcF4JwBpy3W4SKsTaBpRzh4GFHxf1ArbTduP3z6hjez4",
  "key5": "5ZuVgmCUUdgrcfaj1Czh2pGiFYV9PVHpwHkgrW9NgermzTSsXrDeB6CXD9hwad1sYLy5Szm6hEMCoa4iTdCDEM3n",
  "key6": "2JsdgohVrtk1W1WVcBQc3h4f9XgUbgMqXAMHxyVetFFiUhW3TotoND7iC9cY5y95DfoyUj9T61QzZk4Yzr5JW7Nu",
  "key7": "5B8rZe2Xd3NeLXiEEvzD1mJEX9p8kv2QczkAYbvoqRyCxeHCfwnFraR2xot5K2EAJqcerDtt1KKvxtn47eChTH13",
  "key8": "4ueU5YasZnM4tPW1etmKXeTrsKYmp9CJ9RNrGrscHH8P3TttTtop4EBsfhKXncVeoQNgv6oU1jiYYS6yGWrUk1YF",
  "key9": "2b2DvufAb22435C9e9kYQDdBr81eckfLb8hgXNerbRcU5UKojNGL4M2XjMKQsoosCWjyMkL28hQf26NDmDCP1ugz",
  "key10": "2gARGMAAasLKWLcSHx9ZyE1e5CmNiAPwwgXz4Rkk2xBsRJcfD6NGSH2p36mA2ajwoSHTPkCjiv55GGjdMiM4KgTc",
  "key11": "3M1wAaVHshMQW267rqvYSbFHT6v7LjU4frZtAs7yDvCNdRHX9ciLj6SnZeBVEC21q9w3fy5L5JcaeftNUgJnpBEc",
  "key12": "66VPn8iUqbzKbWskdZh62a9bcoY5uKMJ3i9mPDKGCdkRDBata7fYKwPY8o5GUxhTA34BiN3vsVvWiuduG5N9KHTA",
  "key13": "45MeCScMwq9c6GWHNy8bxmvE3gyCgZfqCbjQeBNBjy5q8yBVUBrjPHxthEtgrXD3oCipsHMDetzCjamCPkoQtQL4",
  "key14": "4HsP9d2Xz3vJv7gF599UVFJHbRaPf9smS2nNYpehYpSWRGgNirj41GjQ17CJ47Y7dKEygpRaJ8oVcbDc5GHi52kG",
  "key15": "51bamYXWsNi3o8kYnrztNREvdmqTETsHhibqp8HVnRvMLPpBcAqqVFVkuJvMX5f3aP43SyoLdZtWPbkXYtqznN35",
  "key16": "4jgpnTq2P9MC9KX8Yo2ZZvxrSgc9o8vozyti4LCgBQUCcm3dMvLQSzNouaCt7p5kr8zAzQ3wBgddzAQghWHVXWux",
  "key17": "3rzkRg9f3vWZ2ytNkQyXXC2UU3btzD7cmrK4vXTA23L38EitQErvFoevvYhD4ZakbJVKnATk1fc6WgLMYfs3jbnD",
  "key18": "5Awkv3CAFnbUkB1y9ruiiePmoAi5pzyxR8EoXF7YdGWvAfCx2zT3bbLQojX5NjFC64PgBpZwGiyWcqX9Y5wuPA3i",
  "key19": "ihNhtRgUTtCTu3BJxqZDcu3BidPVR1SMWoRRoGj76gmm3QEr2dtK8w2o5Ehh5rXbQwnTLGTt3gsT39vXP2teFeh",
  "key20": "uUwpC4hhHyux1svxerkUqf5YkKqi12wGky9dcSZfY2P7eZP2mNmQAWwgzuCRXSghJx8L2ppb2PEsJ3h1nP77Hmg",
  "key21": "Pspq8mY5ThopFn5ASMzgeE8Dp7Zc4fevJjpn5xU5n5VQY2rVYgkbboMqPWP1XhdECDkfS6VDpmdqCzFbev5cTWb",
  "key22": "2RzeTC9MRG5vXTk2p9zAPAeTBnG2fygTrszK57MefVxphZyYppNBAU3CNuXRFo2HFX1toXtzrN5vUHFkJfnYtJY1",
  "key23": "5SrL2EHioF5xsPm6go8PoU1j1qi7SSW8rHw8nVgZSzYeNfym5B2qpVV2GNf9up1Poh5vPRuYTdDxV8Kw6C8DJNL2",
  "key24": "4r8v9M3uoG7bYhxxNc28vAqwWBXYijKeUy5TBFLmb9N7J9MpKVfA1sctfTTpVwKWzGFw8QkViUPoYQr6wxKhq6DS",
  "key25": "5Ho24arDkocUC94uZpwAV4mR6RuzohqLe7EDEAJm7usrhD7kKDVgkyLwbSi4het6LG5ciH1hxRAm1B6rSJaKmhZD",
  "key26": "42NgPb7kYk5ZKteT26KHWbJTPFfXNWD2uLDZQ8nFRmstTe7pLYnFgSuLoP8oGyTkzdrcSMCeT49NWMeCgwYMg8YG",
  "key27": "LoSiooUtdrqifmfPo4gmwhJMn8BXVy3eH6kV2ZvA5pN7KRP6vTSYXKyLntuNbsSgMC3dK6rAK9hp4CkN6tYc7uL",
  "key28": "2mLPnRK3VF1pTmFaioxEX3p7ian4iM1yU1J8shcJbLPnwEcpmk8CQsK3Mq2tHThzKtaWSx75wJX7HsuLh2eKSAFX",
  "key29": "sLFaevb2LykZd1Dftr5hSAhiFm7mbpXRyuov4ZTFnh7DGbaJJY2CfCAtMTrTqnxCTqjWbfLXq2VKQ7TzA5BXGZo"
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
