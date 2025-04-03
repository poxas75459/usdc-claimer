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
    "23UKdDRt6mgNeseD6R7hEiv4nSHT6dPdKR66XH5z1BzhiWFzETotDycecWFj5qh8wmWXLKtHC5minW717yQjwiq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7SHXLcpdjQxbkwnNEXQnbSHqMt1fmc9QxFic1MQN2r4MwHLSztYpkWTg5zuRQX6HW3WxeyLhMmk4gUSyMufNTm7",
  "key1": "5Mg1a4FsT19bTCj8z3r4UgioJz4deysVuNfGQNut8EzWJqPkV7AqsgyzUSLg6AULv6SJtWkRFhtARbJCtxmnKhvQ",
  "key2": "4kP3MxsugDphVNNTNakmGVqSGmJNeNpQH2u9XdWN1TJrswe52Q3SCJheZYbDCyZNe48nV3auQ1god9GJHnsDchUA",
  "key3": "2YQPmTWWuDfrPRkJbxknM7qLKPvYcyVXLVquWSWZjE7m5UZA4oVMJEkjoC3AEhxJB6xq7hTwUF2K4F5XPZqT4N6G",
  "key4": "2WTNE4DxqxmuHAg9jFXbtP1wNF1j59gv51mqAHHzwFzfSJPPNUnWQVxeY5jQK6PmazrnkdwERWPxEM8amgXQh2vb",
  "key5": "yDAHhrj8dK2SeNCpbbbLGeukZwpmKriNgV427WyMG1m3LF7SsnYczENqQFyx53C5nYvaoJ3sN7NJYJAMGuHpH2S",
  "key6": "5jcXTk6F8LSyhQmiEThZpi9HrAqxBZ5YMEGMuskLdr95Xtw7UEjT9RNq5N7n3V7tXaNjLrQbRd41avmy2Mk3Y6f4",
  "key7": "336wKX2a5dUheveMLS4Z4PUhcBQFknAVNeYEC5R2c1WB6WGcyUy5U8gwE4YHK6MYWKStUdkWwYbuZXTAbkqhZMjA",
  "key8": "5edPHT6mdr1m8qCgdLzgz3RApmBMAid2Jk9qpAKy3sLeWxa2dgUJD7y1H56K3aiivVA324VqRVDaZzMDbZYUP4sX",
  "key9": "4iTQiPpJC6NDzHuXStmfmDTvQDzAsXYaNeeDrg3pTfpvyNRkjFDHNAF8nNDLyHncj8MtEfWLJvUFs7badhYKxwrV",
  "key10": "3gQAobyRCaCsjmzBdmhydQNEQkyMnJApbj4epzUEHPdZqJjRCx6N47He2ALL5HPq1TRvBTNQPsBC7NBWkeRVCPaJ",
  "key11": "3PBsSYy7N58hxwoponG9z9CVpVQ9tvcPQvJCFMe26uFCEJwAFSWAgDexMBA3Hwz6vTr4Ky6yd9555qovMjR6MHMD",
  "key12": "2C5t3cNPtdAxA2Ci24xydstiheKqgLZpQEfufNn6R4LMyK7cU6qZ4FTdwKUJn6VcYt6NX7P3v34e7wBwbeZrAYtS",
  "key13": "2yGzDyrCJG9SfoPadTyKq8GKExo3aiiABxyhkofWWtazjFoXmWJuPrqqNAzd9dC1v2Lfiej1uj9XX8zwZs2Mt6Lv",
  "key14": "2upMuCiCpjaeR9J8jJSFJqDRgLefkUnGeN5vW8kJ7sMFwjbBkpwwhkugqdt8o5oBzYaGUMVGTm1va9jJX3ytLig3",
  "key15": "3kwxXyrvXyeVpVrjT5GJ98vYzvwer6fJFDo2EuuJXBjNh8Td8bhxFaS9cTYYcmhrtXCP9iBtBBjRAQ5NnivFiPuU",
  "key16": "vDssAz4Jg7a7F2eNnR9ds21xMnXi1kXk4VmHSN1M5959hg5sKtxFP3eQPrriMxfrS5E3zyXjNV4qKwGnW4WQd5D",
  "key17": "4NiCSn4EU41gTh3dvxxXBMKwAZig1Ymeu5qzsPpJmyE9fmazwF26KMmwKgcdTMkMqECjR8aQsurYZjBkZw1C62rZ",
  "key18": "9BRL9H1JEpAKvhk3S3GYKR6BMMhPVqiFoxuKMxQTBZ6GTU3rUj3JLRYHszxjeYx1bnUGTMto92bm1DM9jNSooKR",
  "key19": "5W5JWebpSKZsUvyrh65vbhMCZMLur91My8B72b2qygMrUVWcaRKLqaPkmHDNQRVKafSrEMSd1asSGB91iJNjm5of",
  "key20": "42E6XEL96ZJQnZSx9LKmJ36HcP6VFKCL4AwJq3skoWqrtFe9gr6TDA73YFf9CCccFU4wxnX4SGjHFVE5PFd818ir",
  "key21": "5oLb7JZmSDpHJNLDoCZetyQMckonboiHL1RLujS4SPXxDrD8pzXS3Yh53g6RWuRcWL81Dx1ukbaqh8VET8bwiSN3",
  "key22": "4p7Zw7BZyMsAEYhnpnZE9K1Dz3a9npjF4iesWwE8wgoVezG6iLAJrLzqZQdBYNaHN3DSvchYCUw2d1d9w1Srsfnh",
  "key23": "5GWcsEqnrdQyhvxdgnW6qrcJLVeWyyHwPPB1UNNqy58voxdYEfh8kq3SGVkWXnFrRhKD5C21v9huVNC1BkJBKqgo",
  "key24": "8Xcmohys7X5kyYm9yiqfJP7vTkGcaJbLiropDrutdSM14AWeuEh5cjBtZ7i6TyvQ9F9PNZ1JDgnxDzoVy73Vcpq",
  "key25": "3uGJQfcVb9wcKW8eJQct5KprVERHn9jmvMPDknDk9hNg4Z3uaMn3vCaXqjYvmMimEFcyoQ9vYN1qL7yumgy6L9yn",
  "key26": "63bznADKAUKHvWuFAb31WgaSJKSC9oQfUVMwerE7XLRtPesbBB8PVjKrV1SgxoKKVi1G4FNhcykQYTP3qka3LCXq",
  "key27": "eYERRddN8JQbkndxseAuueW6k6Jo4qrKXdbtojV3wb9WAq3tFoTad6u1VuZcAMSriFBSShUfSYYncQsvTP1eKmd",
  "key28": "4vAPR4evUvHzqUXfkJTf8CoghLV2yffw3vPAVkuq7Da3xXyWqZaFVM3u1wDdvYrMYCvv7mHwUWYesY9oJMR2cCQe",
  "key29": "38KCC13HCg3XSYSSQRuHtrNpGxTg28b2qxy6p6eZmefnqpDPv9ing7ZZUsN7MTZSvhuEBwboJ24rcYdSooSxvo2T",
  "key30": "52zL68CUXb9GLuJLnTqjrJioa1jtzLDfwGA7uZZa8eitzqcwSbyb23JpoDmPxVi1EiAP1WMitCbhoQcLQrABhQ3s",
  "key31": "3QURiZMf8DBq29JyCQy7xRUWGMEaqSuaX7vDK2moT2FDRxJruykQSA2DqrmLaeqkzA3AZkQxkBH5tVTCNKD97P9a",
  "key32": "63hjMok9ePQLXT7esNkKc3iEzR2Qr4Kf1PUZwQ4pZ38LD71pS8JWNk1p9YVWNnJNsriMAFBoF7LeBCJyfuMJg3yn",
  "key33": "2kr4LY56Cqer6ucTi2kcwrBbmQ2mwbXFxGZ79DLJBJ9VANwXygkZx4uv3KQjGSoKNTrQUi7mXzrguyWAunSJEJSZ",
  "key34": "2iV4cc5YGKfY3tm6vnHsNkWTeyJovV52d86duBvfXrHBcjh51QSzpuri256E1u2p5YHRbhbX8zLBzZS6NbSAqbgP",
  "key35": "5Ts3jnpZudiQ8QySR9ccS5cKsiYmpCmZH91J5sReoAJWdaRCwoV7FCuP4185zXdAAZ9dQp5qngH65Tc4x9Fn9tAS",
  "key36": "4ufcof9D4TvY3CEd2csQWNPa7CZe1Acx2NEsniThaLaGBC9yRaGEGQn3Zm51WJUkeRdNmZXW7tWR7kxY6yoGAKU2",
  "key37": "3fWRHj168nKQKWFuatxqV9vBdvnX9Mrii3RBSV9ks2xz8nFrQHHFuHXZbfgzWEX3yWhqdMatVpeNAEcbPN9ugXYc",
  "key38": "2LyipnxQLoGzNK2wiAcZUKwd6LyUy9NB3hU49rqdNxTHDTnVYz5K5iHfjfQtyuCUULLEFFCS2isWjjWWfFGTgRM6",
  "key39": "2MZCcoRRgcB77VZf71ejGSRE5LmNdDE4JEZk5uEMkmvGpQLru3Zijn47SsujGoXEDKMaw8JkwJA1gR14GjaR5Nif"
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
