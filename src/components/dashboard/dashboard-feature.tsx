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
    "2ECgJmfdUH8G3aGETMAqiSpbtoEw74reb6AcfjL1zqhYuRht4onogNCuUjNugpLdd7b8ByhTNrUj6X85SBM8vsWd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v9iMePZj5zprpkPXWMUcTi2x3CeDBXUfNwTD2U6zTUCHsk8caZtNK7KKQEtwLLf6cMNTHTekYCfo2sSKZHZ4hd8",
  "key1": "3JGQvFuQxJqMqXu3cfng2s6kPNZwduKUnAUtdF1825KjD4hLYCqJqqTWhBoGHBMyWUD6eq1GevrKsj7XN2LDyFqW",
  "key2": "2ALxRJZUW2BEbhVfdpLWnTCWUKcX5rtcJMQowi6mgz5N9PEjjky1QqtnVe425GvxLEy1a9qBqkzfYK3ttSwSkuXS",
  "key3": "31zC61XwSJAAiEZV1JupgDUH2bDN2E3ByH8uCQGGH6ET3gjCM9Jj8eqG7tSn3Dz7ZBkNeN3PX6tEHhWtgkq7wcHH",
  "key4": "27HmVEs8QMVueaF3rRCuF9RDefCb9DK7jQNp61ed1GbKoHVNcMvVP47sPcRa4pHpWDwDEZ3A2dy5d92S18N48unP",
  "key5": "52jCe5GcBsDxHWmh3uuyEvsCdtuvLL78N6CeK1WcyS8CWXupG5umMD1c2hz187bXM2E1p2YyK9q9qd7ih6Wsbw9S",
  "key6": "51q1VUvdmQY8Tnw4Bbbs9ZLWf4BZJTmqTX7QTUTpyGn3Dz6LVHofPYWiEjX2kH8fDbPHRSJhstufSJhvbiHgFFPN",
  "key7": "4W2nP1gbJ9gy5jbZJhehuuJqwVZFgqwk1XcKCpDLnATy43Q3TWabBKhoEMimpxA2uMPbbDpUe7mVWKfzST5d9TiS",
  "key8": "4ietu5twKaTLFpVSxt6dn5Em6bSHjL6MzTUy6i8McB7JMkwYNEiKzkbFFtCjjQnfsURrVoFynSQ3piLfXaLMSvhJ",
  "key9": "4EQHcZ3buTeBkZgzQSQ7JpE6WGba8zmEFzXVDzJQtTzAWvSJL6vbsfuDDMfzxk39yb6FNKFwmw1wEBDH1bnSdwUJ",
  "key10": "3KMZE77DHcrLX4xT8xZnP5BreKBiECH2zJMrv5ALhi7zy9VmAs3TSaYquK9P68E62zRXdZqLaeuu5u6nupWa4CBD",
  "key11": "4vcopLtHsgEBYL9cofFYNzTP2Shge6kPm4vqauuvxyyCjh54fUoBLattmXRiuBwxbT34XRsKj7rdieokcrTpG1pU",
  "key12": "2yXWmtXC6TExYn3ET8DJZchR5yatB5yeLPSXwE6X2DUpLCyYkfZDCF4wnjs8p2xNySLZsxVcUpepbRP9E3c6Bbx1",
  "key13": "4AbqqDDRh3dXRNYQh7BituVFHYRZKwDBMnqmmZHVfp62nyqZRa9pkpVh2dArDNDsn3EU9VRFF3iewmM8X2fmLEdU",
  "key14": "2WGehNYaXH1Pzv2s4xq5DoEcKXpHrUjRDMC9WptE8piEKqhMmiAXYdba4D3japfbRU2y56RQ5ZivpbKqWXPSEuM7",
  "key15": "4tGGDhWLbdz8bhDp9djh3UJSDue855QrjLf812rUx8d97WRbgba2AztMeWTePgqGJt7CydPZd5m6yEVx93u8ifi8",
  "key16": "XPJ3XUrPbysztrFCbzmkbs5KpS8eX21YhyD8zj6DXwkwAL7w7qYhJXuh9vR4RC1EMJwBztt9DAvLMwbbuEYf6Uw",
  "key17": "2t6EaHYF9LbkhpEXMvCobpL6aDfnTbGtizHqbUSbeDp3HbG1UQBg7WLgXokupRNvY4WnX253Pk9eQRxRsb4YidH1",
  "key18": "3xmZXbUbqskH9ZArXsuA1huxujBcJ7b9R4FMLQBL96jXTPyPzZzBiC5wJMsQ2Rk4PTMTDgruHrpi9MRgSYhCRbbX",
  "key19": "55WthTuqAF4VBZARupdqnC6za7KQH74FkzEMjRbp9iFjtuginNRk8f3cVStGit1MqcZQQuYRRc9zceM7U3dvhD6B",
  "key20": "5BS63ZSd16Jtwdca8wFCmvHHFUVkjGNoLFLsE56yz4sJT4FTk1wFBBXDE19JLNd8SphkpWkU4n6hWC5s49fYQ7aK",
  "key21": "2UFnwZVmsezfKqaZBAmDAQeQrcvw86zbPRMJe58tStWVJG35BeZpGg2zBffTCkHqsbcBUGu4Rpx3i3CSAmaFdE5m",
  "key22": "22NFPdjiF59udkz5KaUFH9Q8AtUNCA88U9BSWaaECiTAt75NJQgCJZvMeEbJHBKhfS9bD2oLqhmjYfd8uDCaNMks",
  "key23": "fyztCckjjm5hFtm6mWMBhYVeWriZpRJQWmXVa69npoXBc7kc5g9dCvFwVo8GPQgR6mS8HbF7EFqJcyEDdRjku1a",
  "key24": "2SS7YNntwPuMUf9iiCWWN8kyNkxRujWbcNWciYRzcFoxbGb1WYnHwVPsYmbX4hVXBpRAztTnQuaCR9PUoBbnjgva",
  "key25": "4zM9APqr9NGgCAVD4YWq7WrhNBLqFEZMHQWvWYJnrnEYqFN3pjqrFdoXReXBY985macb6b4pbx5KnWzexGYWpnak",
  "key26": "2zi63T4oGCY5AkPFmYwM7HhDyyqpPysFSg6frjsWrzBmeTmf1oyspy8xC6pCdLhA7E1uugR7X3dgcPPhQ2VVccUE",
  "key27": "HbbvvhBEAtwSREZ6ioViWMxAAUw1DAJyMhvTnReaepveRbZDY4tWzQ2iXwuy8C9B6GoCFQeGVdCPrNQsCw7t5XR",
  "key28": "4AnYLkcxkVcTD28uZGfhNtfnQXT1concU51Jp2Ss5hfWw5FZWrbf9LNumsyUWQad5tgKQmVu4i6nSVgwKwrycWSp"
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
