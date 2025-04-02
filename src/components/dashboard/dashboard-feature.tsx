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
    "2rnRh4Zt5XfdZgBqBrjJt1nGpYAm5ToAhojduMKecECbx9zEdQ1t8UkS2CMsDB8Wcm4ztrmnjznf2GpNmvh3C3Bf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xRbpqH7T9VxTe8UWKrvLiCLNi1WW9ugTQGbb2wroj1yf7udAeGQetdDSr5o761LZXo4gLanhEmDPrNoD1nwGPQa",
  "key1": "4qpYoQ8D7TMRFmfeRLGteQkJHmEQuiqeWXMoz72fcZtP363TAKgPG26C5dxGEXangSZctRcRgeNqP3ZXjGsdQAUS",
  "key2": "4dLx5LnaZRAtoUtRi15oG8AZ6vHhfbave4j9sKBPCptb6CUmJrBHMzpNz7QH9yVxyiWDtFNC3rpYT555jHf9A6dg",
  "key3": "2VztFw9SBvS7XrC8WuaHzMyvUA3NnQaq8JN7vQKnaKPKqHY6SrxjwxQ22FdF1KJghH1aDZ7E1r491tDNp7KWsEMA",
  "key4": "bvmdyLTE6REApgETLNeQb5Tw3Xfa82fZDLnneKj4FFzWs4HkwLgXWv2SBgUCKjTfC39uS7apZMyHeTdLcNNHBjh",
  "key5": "3kuro2Sk5w8KnpVpUPEvQDkVoRkwM57PTvZebegb5hwC3usw5g8LqJqh3XsG3yLhvzkFV2ZaPXPXj2yScSPfvAEa",
  "key6": "3qhkbhcKrMZt9cNY2XdEC6nbdky2fpeQrGHeVqZNKtr6UoMyPW7rJefUXUBKF3Cxft7af3E2HSkcZ7aiNWLCdUoo",
  "key7": "4fqHmTDWL7Nng6AQq6o2LTtKLWBSbEA2rqLGiKm3YD4bdq5zasYrSunSJdDb5jF3jUXJ9JQ3eP44LDW3wgfcNDjf",
  "key8": "5eYtgmFU8LMmzcVrwpsLe2Jv2EKKYwxQ9qjGsLESoMT7uGKHgJy7N6LpdVTG9T1bespvP4xXVEEX26kpgtGbHxZY",
  "key9": "5CgyJc6xfvxGL3r1DPyqNUuGgf5LDYqGEthPgT6rUbq81TPz7hf9rpQJRfSzETKyvKqKDMV3RSBjbqxP6nfKmCwx",
  "key10": "5u23ULQVavDHAeU6Zs9i23JY3k8KwoXdJdRB9U9c3RdcfjoLqQnfXPayUjLNjC9uyBeRFT548CEVRGqVh7xcxvNk",
  "key11": "4KZ7eD3eNHA3DQWr4UipzMUUZNtyRiCpUiBfVM6NBezheQ4R4nvsbJGhkKFaCAztoqoUZZhLkCveHDr4p3vjupxS",
  "key12": "2HixUsZrUwSRaNKQMnht2ifteVCtsRYzvnmhzBAg1cacMUjTJHJp2Xa5zSSQ1rQ4E3q6CeqMi6B7kqS51xFnzm5",
  "key13": "4673Ss9JmsBx2E4oAp2CcWB5KVXTZdXNPJr9X1Ah5Lh6RaqDfkTAF5W1t2WTVSqvfkfJZcK3i6stC7asGFbGpkkA",
  "key14": "yCgaxca69PzkNyX72zdyZoKgPthemzUVujB5tsbRCQinxT7sYEe3pKcNM6YritfT7XJi3yxepuk8nynErZX99Tx",
  "key15": "3ZRfZKVS8s9vv1ERToSBZUrJa47Zk2U6RFEp6fMStRhFmkNd1RHBBuhG6MjP7qm6QYfwTBxScem9wLv3CchxX2Ws",
  "key16": "4qyuD95Ge64XGgZCzZCP4Ph7exPpvzLaw4NL1Sn6JraUX8dnuGFLEyGz23KDGpnrmL9LZz1NR3i5PSexRT4bR5eP",
  "key17": "66kavUZDNKuT9HacXcZdCRhgdFjhesCYYhpxUmdGYwRyvRszBNXE2oMk2mMAqaBh47yedG1guMQLFG8nmQyYimbR",
  "key18": "5eBB9h4MFkDbDre7vDYwSKwUXjjxgLcmVkMfWuw23bqskhDsJFJfJQmeGAdhgsDyBy9fpb8gsEn4bgmnwVE9hLPT",
  "key19": "2b4KonFgUC5TNbz4XQRMQKnuatGTn2e5ojEvw5CQEynMm9nXTLT9c4Ncs7WAoVAvrY7TXA7ZnoM9Tct9mmio9ySh",
  "key20": "3uKQFmB5b4tarTXwEfV7rr2BDijH3r9sVAdPqwrAob9Ge7PzpAEv8zJtT9DaM2rX9A94gTiBzi5ETY2cARRoTGiP",
  "key21": "2N43xtj2tw12vJpdTmxiPKvLbhrXDe31B4RSkaNaesW9LK4Z2pwikrtFsr11oEtihMN8XhDmiPM9RtdwiUDuLVBr",
  "key22": "216iz8sRSzAeJALdd8F7FQ2SkxyTus84JM6ootZ7iGodnCwwUD9GvLuJX6psy64iaPKPjvyejf6rDQc7TZztxe3u",
  "key23": "3Qgxv8Lc11amDrphWtRYM87FWjdysdkEzP5ezU92QbvCnRYWwPjCo17PrLLbayED54xgNB4a8Yobo8UaPuE5A49a",
  "key24": "2s626cKWsH1X3tTHCrF5YvRfBUdeGFiWoAmf8P1qq4Rd8rfVUZ9pSxKL6zzB7NJUGrKaRuRTkQVGn8hg6L8Pfzan",
  "key25": "bsNQ2zy4cmvEQB4yC7Fukgv3tZXbdP1uBv6CyaCvLWQFZ7UKBhRJtG6ZbaZcwTe4HwQzFjKAWcD6ZPT1zgs33fG",
  "key26": "5Wq7qAhffiQaAF5uByiiP579K8isamUS5r5nGibiwXoAnti3mMp9XhnXAKttUFy5vzBFnXUiBEYHgzYyYfeACWwA",
  "key27": "2gxCtaNrkNjRxdDCYKEgqYpRMFMKCZcDAj92kRfkdJXYTNFK1jfwVun5HddZhafyshb5DwAFxB8eZbogV7t1QHZa"
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
