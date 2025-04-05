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
    "4oQkyTCrLq8mrMek4hsKGuuQhsQB33KCUpshsGTJPiZQgdisJW5fCtSh9be8CevoMo5gCbbEJCVgNqrchNzGmh1R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49pkRdvsRQdMg3UvCcqg8axE4YrFK6RiajP9uwRQ1oBt2XJMacd9LTqNGBZ6LeveEb8hg125ceS5BcTcPW3bmGzk",
  "key1": "n4otZEsNzbXSA8HDc43tBnR4JpZbuCNwoJjy8Wj8vwzDx2n44S7wgnKKHvnUJBj7ZfHxssBk8kJHMM1hhWAmkVm",
  "key2": "5jGcizgYydwq6aeyo3YvJjJaqM6nGB9e9BjUzSg7aZkCeAzFdyKecgj5dzLKnQ3SVw7N1y5urvvKbdBiqLBhJ4Te",
  "key3": "3Vbq4u6MShz5AFaRqnjnH2GoMF7J32uNVbiBmaQen9vQdZmyVUBCAcSGmH8zxQCtvcVzVyuzR7FvrX8qcBQWBTK8",
  "key4": "2YnzLMnKFPPkSJLZ2VnPSyqe3ezCK8hD4mj6STKT2aFh4vEVHRrPqpCA5HR8UwSfbcgyaJH97prahgrftfPpHCqT",
  "key5": "gkAydrnRrvJBf3qwauNtxS5xs1EgGiLmFQLYT72QTtgt4aprM4HnTvkHxAmjxKv9mvHEWaQVLUkmgXGCWAg14sf",
  "key6": "wBE2MGztruqo1jpkevT3CVFTwQU8k35VEMJh8CJn7g3SCyxEdQCeeyFAuXMr6qZtfk6zQQnF6LekomGhBhxcTfM",
  "key7": "4CUXoimMnBK6EdhvXwycHm1bVs3PHs1m6TthfENuMDp2ueGKkMEixcd7vxMQBXsvJPypxUnVDWzw7SKXHvyANcm4",
  "key8": "4DXwZNik6L8HwudMEvbrowNSmS1VhJ6zFRdcN4tmiYFu51qMNm1THSZH7XRiySKuz6wYw1u9rn7Uod7D2iZfNEe",
  "key9": "5nuR8FojX8TEErz1DWFq3PXE247zfTFxyo8paTHCTZQwsnZ851r5y7riuZ1fRsb8245GYZonfhwr5wQi1ngzXsai",
  "key10": "3jxEgc2k4ffhz9W4gL7JCQoAM1ghSet8ESqyLN6Mmu3ud6tuRfzWG1xzyKwDFZfATjxZXTEMJcZDH4o6ni5o53r6",
  "key11": "4cXr1vGjkBzNPkbJ344LcRdFqu9oGfkBT8rDQKsve27KRWZ3aaAhjVeaDzUYsZbQHtetqAfaRv7dLARY1k7vwovx",
  "key12": "4RT8U9XTmj9MYaqMUrjGMq2poM8bRdWQwRQFTaT6aht1sqhxDVaWd5XrFUdoswDBmDqvSMZVWTAqepRySXZz2XpK",
  "key13": "JDsfbSBETFRtE2Z1VGXo3S4xNd416rTrBR6rQU6R7AAYRySWuGzGoeBeB1ypku7gSzeCzz8p8UqDHLQNdPWxEMZ",
  "key14": "4vefnjYBphnyqXtMwFwcjUnaT39T692cJTHntBDL62dW7bt7UZz85yD1vdtN8ZVT58iovYWyvUvJfvgkWauYPCQR",
  "key15": "5wsTQkqn7BPDh1djJ3H6fFHMMsQu1nZu6da2jBZpxaSthyT1MwiudkBPcvvCcShWQVYzYQ2U82A7ZoLs93t5eTE6",
  "key16": "1Ldr8CR9DSe85v9HySLriPTugodhzPY81WbsUnnb4kabqazZtKc5Dpx4UjGngFB7cYxzChCi74rzVBkXzQLEktK",
  "key17": "49zwKcHvqNouCNKxDe3aUyr8LnQJpMo53MNZaNUE46CxE6h5vrPgjsG5tT5yy5PiXi6i2ZsgdXYGYqNj9GvQZmyd",
  "key18": "o2yL9DZRuBWN16oC7hEhXCn3CAHJWUETqj6S6mFRSSeLjhoVrgGmbkh2ffLvcTC2cfamw57KQTRZ18rc1hTpGsQ",
  "key19": "3ycJRZXRR44jnN8adGT1Vt94mAVfBhZY2rWzJ567mA28N5vhFAdJVmLX32CfHuqnxb1BeunKCorPXhstFNN1JwDc",
  "key20": "2u7iVFyny1DKYQXMRKKH73dtQa2duPCF8cERMgLivy7SfYc9Xybdqd8PkjPGZqM9ATVxhU5WkvmFZxGhgBLi2z7u",
  "key21": "vhu75e5jtPTbRPjiJqsPjzZvDiL3XBBhcBh3cAPRfuGfdiUv3JGy7fXh2NFga9B3QaQ5h5eTyRwTi2Xaa7DW7cm",
  "key22": "3CtUq8x3x8Ew6FU3t4r3zk5RAqYVdNbUKMzVjfXDETpr2tcHB6gaAeGsUztjTi25Eg6zqdYnuAhwWoGFCc4ZnfTg",
  "key23": "4FHrJZC9Joaj6unLYBvTFj8d8he3uEoiH2AkQkWf5YxDwAoFjFEkPWRF3g8L7Gagc3uTb7Y7oAuUm1TayczBbXJ8",
  "key24": "5e6CWsSxc4U6dpjdVYdCfePbNqWHYz4ZDKVf8fPZoNjVd4noKaJGhcBFyiHxQG2iUXjKGge5Tj7rEgjAAY5x6T7U",
  "key25": "29mqNy1B4ZYXYfgsHcJPAmcbDaFYoq75obsG6gMYoqiYUXGh1JURtkrTs4UBgUMrks1dd7uZBQ8w2uYWR8fjvyiN"
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
