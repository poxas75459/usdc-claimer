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
    "2Qybtd7iBAZSKyMR9KYh6i7n5P8WeZzvoAQd5HujtU8aGF7idPf8Dt5jKQLqaqaG9YNQZkXWR6EryxYwo6ML5dHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L2W3pZ2ovmyzDc9EKRCgNMeJ3JH8P5Q7MK4w58JuveLsTeB5unzsGd8DBzXWVxiRFEMDdTMcZFh7HB766NZBUoz",
  "key1": "3XcFhH9NQTFs2TBJXxKXUqUvaiHkSJ1uAYmF5gNwoc5yAZN9U7Q5FdFZj3diXnR862pxL6hCX4fdHXvoZTbpgDBW",
  "key2": "YZ2yYtgw6HaubFNuodPtU7jKaQ2xLUH4w1ZoeFX9wcU51N49fXcAjeV4Ma2725VxvXq7tht3WJPja1aKYqpztSL",
  "key3": "5vhBEniT6zKzBFAV2Dr7gtP9BBzXoM8Goz46qeSdrpBoWXQCULSzCdD6MTTJj6fiLW7gDKokbJ9qs9JCzgzv75kR",
  "key4": "AZMLAcLANpVLAzWcejDN4xVckh1ZoBBYQCwQzzNvb6BPpzuWA2Woe7QyqUHKyoL9vVjoF2rDxpJakcznQNx3ERR",
  "key5": "oXdsDn5hPerMtjJ22sDR4wKmZEnvHcTnJyN4LyLCxujDJgtuzp1YivqB33ikCiEARi5qc6gEfswtNvgwuo3eh6B",
  "key6": "G8vd5cnPZeyfKJ59BhkijHgZSuC7amAA6toovByqSzyv9qj2BSUcouECcNgBVpxS7TXndsGpsWQeBJ6vuyDJNuY",
  "key7": "63E5Y61kFwcmLBF5GVSV82GU2m7hHb8g9QbaLxFu2eB7PhQKx5t5yDPSTTnaf4HJbSUe9C2vF7aH75wXnGoaFL9P",
  "key8": "4uKn9oMvbG9M2S8UmLqjwYj9MiZdWXqpYkZkqp2ewFKdj77Wgegvb5r68LRqpFBKXbdi23GVKqoQCsy8z3muTgoU",
  "key9": "3DDD4dzP7ijzw6QgGKWMCSvHYCYh8fb78ynR41YP6PPesPmXiUprfhhhhb8oRB3es33rJj6cWetbpw2BJb9FB2Gj",
  "key10": "4tVVGAEgzetxGKjiWKDdnHfPBrYVwa6A9y8rrrorvLdwYoErL8g8aQtqCxaGkz6xQQT7VTmmCNHhZbin3zCHdtzU",
  "key11": "4aLH8jg1sSpPwLKiLMAKAFB8PUMfkKZcxU7iLWMc1689hWx5PSnWjKsjTwte2mGQzfDoLz8rJCVzux7SWgJ8XFoC",
  "key12": "BAYRL7FM9KY3tc5yEQHqR1sKD1aKwEbeD5FCDc8v8xargpkWDGcVFsziVZJpCfuD4kxjPGhXe19zuuW5cbZPJSW",
  "key13": "2aFVpcGLYZywwxCRZ37wAUYchXX2zL3MKfcd3R2z5eW7WLF3tWhjp6YPMa3NAT4J7r79p3XsFtCaneTpeuhQA8db",
  "key14": "5Vj8AUJbVmmHkzDV6EHMPCfpdCFU3PC2Rvj8fSMwPpo74f4J8cv6PGig8Eqj5xoc6VNjeLuNyQes3EUdXZvzBm5H",
  "key15": "4GYPsTjncfVBrGtJmxLNmweBWzTeBxig92XvUXv6VbTb2suZQtGFwkjAknK5WocQa4nfoi6xqdM1bbdsyaouns9K",
  "key16": "3gnSmkCkW9MvRjQdMWYAQsu765uJfnGVxGyVHn8f2TrSGXneQXHLPBT1tpSAXewNJadaDcHT48wHxNj4uTWy2uLY",
  "key17": "55paDC6FxbbMzh7M7kKBzS9sp5UGwg7sJscXJjAPyJhMbrU8ZGwtK4GBJup5A2ZyQiyprv1RqsUkkE1BBXC1brrb",
  "key18": "2cmYSufawb21e9dMukinf2GgL1DP5rZqLRtkhNrsmR5R7xKQUnQMbY6vhYP9tkBeiDjdNatiNzcd3cW8fbMkLwQr",
  "key19": "26NA3eGQengWQWZjGoqkpYENG8xeswsyXGzs3yhfhRt9GTtxbE1ugjMwvYBTc1R789CMDExWPB93Yy9hsfcL9zS1",
  "key20": "54hemYVgrM1rj1zG6pgHjGMGVnKquMXB9sJDNUDdf9JvHFewsgtK3AbvEknkBvV2BtebRBPoeywuAHtS9uH9d847",
  "key21": "4QAqsRi6mGigxNmNcWboBsKRNzwF77nTyKy7NWmguV1u1P5rMEEUs2bfZh6nfJ1vEY8VT96MVsL2oXyNgVLEPwzx",
  "key22": "3m6JbHnFgcMeAu8xU8KW4o3Wc4cDjkymUE1LQC7YqiWmwKygLGdvv8hrKMPxsdCZvB6tBMJf5Bm6WWyz1E57WaFY",
  "key23": "3o5oPeiiRcYz5EhM5xbqUg58m2XAcYvkjjNe3uZQuPqWj4q8xgrwhqKvUpJnzASXaHjcvoB7drfNfSf42fJoDj1w",
  "key24": "5RQU1j1pC2NZoXcCQknbJC9Rmh6RiTDjBCTfMXMfB5mdcxgifsoDwdQ13Xdz8NMcCFqSPrUGRqE1cTTft4mebbz8",
  "key25": "5PZN9XxPu91m7TQ4NGom4yt18bP54jd9aAEN5Q94qWadNv8QiEznAi1vo5QkMgCeMhpXFxTBRXiWgJZN3FexvD8T",
  "key26": "493rLwpZE37uMkkZ39wtnPii2cuVsZRcYs8nv9vA7P6Ud15uiwBFEctZDq4zV93qyRhDLz5f8VGfrxwE5ESLGLK6",
  "key27": "5mUqDNGfj28K6PdnM9xfJtfWbyaxcVUakcx6nN7XaFzzfACd5g315BSdTSpzZcp79dQN2mx4UHW4QV2LEy4eU55X",
  "key28": "3eVRVApeko5dzSmVPvG8Uh6Bb4T4jeSmD9ZbXJJ5rs426oVUCSm4jVAg9igLTWMiDdDtWS6mcRc9H8bahT1EuCUJ",
  "key29": "5ZrE9m7KYoAEQWZQSDdvFQY4PGu1TALJR7xDRt6cSDwX8F2nch7hwG1xZ3wZ6WqYgkbxgQbPEkGqE9VjhFg2VBcJ",
  "key30": "2TX4m1z6yEvBpJzL7WnjXndjxAvwioVP38C3fPmeRTe5UK354pAY9Sh8X3zxQsYbcekVP4EqBzeivtmJzYQFBvGr",
  "key31": "4NWxPjRputX52qxURjbNjWFH5HrVoWMq8WZdC2oTQAAkp3ujiD7HN7pUGckK3BHLD8ADrgiMiSFKTQmcZtmRZRPm"
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
