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
    "65pwvUXdeWaTZEFKDUihZDzJVjw34aqN3ZtexkJH1NeitS4fKYVR3Q89ScigEf9ovjDPYYUhuoRAx9z5VP5vguSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38oXzUrSFZpSQTNDwR8L5ZTFFGwH7MRYTi9dTWQkDzrzC3i1hF7mEmHrwLVREqy1A7pSay6Xm3hCHSAPrkGHdrn6",
  "key1": "4reY9eRpwk57uzwpKXSWL9NP1m8kVSQkvcTecx9mWCxPGwmNmazV5HsvjRv9zepRmSXTAN9KzNEoeqbAwEtC2FMo",
  "key2": "27VCCtvYpyvpMNYYELdGTL4jde2rVbM5pKHbLDzjo9WjS4Q5NSPVrVahkTQgRYjbpSAJi3hvQvXf1AxtaQPjhEeA",
  "key3": "5TjQgqcs6G8Wsu5saLr2AqQNBCWpp5gZk8Tth3EFoWcg9nwL84kkXH3URroekZ6Lux3WvyaCgz1SmVehcY38Srz2",
  "key4": "43h5ZYYfFQK2owFjxhhDupK97jvUQq4oK1D31adSWpnApyVWb4A5Bd3L92A12qCETGU4KiFCwNAP3jnbjxyn2618",
  "key5": "5BfAmYL22JdCvqXzc5uo96zYVzwEHLu5UR8pFzLnZfioSKAD37iaisQg5jc8vxRuRTZDvodLjxyzHaBdxfnWCokL",
  "key6": "26LQkUw2YwBwXBNSRCehqBz1agiVv7Ltyv2uCWjKcRbBNLVfmDiPhmyG4tiL9uNdGDsekbDfz52vfomZWWyi2RWv",
  "key7": "3mXnx5F7Pia3BdT5wFFtiLw7GnXe19Fif9qGrHnQzqZ6aPVXSgu8cNYMk6uuaG1bA2Ubo6MDPjNySAkPbuBFwZ2X",
  "key8": "3wmkcMJZtTmREcFjKxpXiZBjkkuEQfq247TLtvKuWWYsMjATujFfx8SqSJYABU7i6CAM67CzPKoQcbzMqzTsaZcN",
  "key9": "2sKuKSzAfw38FFmZQ7b2WsctHQGCtm7QTjDro3Zy2zyDrvqYdhf6D1q3bxvr2DnKYBr4zgSHfg8sVgAvaW3FariG",
  "key10": "32fFqBnR8V4r6dsTUz1kVta9wf7H5buRPdZ9sQDAvmRZ5FSWwWp71A6YPJhmHxtCyQQuJfCR8bS42sBfJFuveyk6",
  "key11": "cZKF9TqCB1aazTvMXBK4GahVT4kqQbRqCWDa9BT8o2AStpfMyvm6DeuSzWDUPfncTWhh7SQ3bvaANDpGdkXDzLA",
  "key12": "4vJodK2LELEXmDvAdzoze247rPhWjPEcTABYXAnr91JncnMbqtrCD32pgRG2X8GLGVLes5p8y9utyF8dMc91tPhT",
  "key13": "54qTR2e2uWKmHiiMPNGs2caUW9DZZYtHusDu6xtUZp5V4W9geUWg7E5AZgujc5d4PT4DC858GHzwHsVcb91CP6Ad",
  "key14": "2MMjHDbKYWWiXVNGn6JCu6eaRD8nyngp66EFnB1ivZL5obNsait5XxCGJxJt6uGi2HEpqK6NPJCfaPF62CBhLa4Q",
  "key15": "4QxFKFbiS4Jy7aARyEePUuqNZTpWD9W7nTSAyxCgu5237fej7Q96MmdAK3TKPieLGvoCEw6tu4PpK1b411N9XGCK",
  "key16": "5wjATtDhaoEDjtZsPUAoNWKEGpZ7DYGpGe337qYhf1megrBVDEsErkMzjGg9atzmnjAcV2Ew3Tn4mDdTqNzppDp4",
  "key17": "4XJGcF9V89Ut8TmjiyJm389g8eVdJFeVQ4siVCuxisc43BkRzucZWNcxBPBvvXpMU335CsZnxL1zKmW6dM8vv7bD",
  "key18": "4t8CWf6kAEde3oP8mzadJD7HQLFh6RHUaJ6X1o9HnXngGojBB4GP6SNnQ4inPWqfkC7Nr465Qgie63hhnRKxQRaw",
  "key19": "65BMFu5A6Y7ds1FyUyL2CmpMg76EiH1aw8CCAj217rJdHYydwfyxJwbWUDahb8fEgkAtBNbnMHYTrKpPwuB1xuyd",
  "key20": "3B4y239kQ3TdSGf9cRbdqmDayRs1xxu6nkf4QoS935TmfAawYGcAQJLkubNkAdKTThmPCfZ1NQAY1c8TxvYmwQ9z",
  "key21": "2HNQ2zrEoBr49yDEb5C5A5L5jsozAnqmYvo5myuLWtmXhhbyA45QaPuXTq3agRtahaUT9rNWpXCNr3YUtbtNBnm",
  "key22": "2gj13Q58AZ8qosF1tVni4nhZT12TFVMH2ARV8gPmgPQMdYu3dFSbyQcApymyUp9RXZ2vPGDhgxsLjrnDUFcNPFGJ",
  "key23": "DgtUyDt9L3gjvFY5aiNjDe4MiuhtqQyyzNDBzFcdh5n67jBmjzszd4HP9rGHRTpYCi9MjL8KCuqujTMAKbCJBWg",
  "key24": "297PHj5iN4FJdTtoHdutYhfQf7DSqDGRZ3qBbob1XPaFgyPx7VfMWbj7eHQJy7dtQ6DV8wa8vpTeDMuWE3PbZRrA",
  "key25": "2Zs2mydq7p1puwssvVL7B4E3yPkHpuKvYtbJdetjB9QBeCgxqXTKNybJtaBLcgpbDurp63et7QFfEBPDh7n47kPm",
  "key26": "2wFh9LW4K9cfWoh6akQd8dpKLxM5GmPcFkxVLC6XH8mn5E3MUxh8h3pvTXisA96Fb6cnGdrrMkuBDA3hiXWanihk",
  "key27": "2vS1GShZWtKrmDErhco6LMhQvtzdiC8cT7EFgf3oZjee5AvB4De2aRKdQ4zfJKBnqo6wgKJ7cyefh7oLQmaCpcBo",
  "key28": "3fyf6wHhECjWS3kbg7Dn7nU7NJzEwtHyiCYSuAHBN8CAc8j7zce1qZar1HqLcnd7RuwExzccywVu5UZ17wJtgy8g",
  "key29": "2xHaQHVsUdth12LQwVyzVnNM62QBHNV84MQEfmqnL7E7CKGvdX95UDSFohwWdWKjecPfRKkBbhkPHCApEefoHToJ",
  "key30": "3p2Y5ent4YaGHJQMAWXViYzJmVpcTabS5aVebrUuZ1DEcc4zA1dCNdkbYMRBQGwHRR6qqe32V2dBjL13dzp9Sr4t",
  "key31": "5acLbMmHZzZiUpVCVBXrowWZgbTBmbzoytXBGvYprjJ8JotH1aJNVN5WzMkEYkPmsCMbHAVLMRfQza7FaT8FWyym",
  "key32": "4i7iLYKA7Joasx3fRA1BisrEh6xXwRjkYsYnp3ewGgB31E4YPVj2He18LQCTLXe2nVG74V2oXFEEVcv8z4NEeMbG",
  "key33": "4MvFfGVTB7d1AVqXwz4bEt3LnjvpdwZNBB78vWsP357SNCMNawfXLndmCQ445prVQ1pkDZHyVmFAcb6ZosV5sXiL",
  "key34": "gQ9MNRkYneHDF6QpDfRwEb6KduaqgfwiAhttRQhHuR38PMPQ5GKW6W1hMgoF1NQYa7hKfkdjCHLj87pRSXTw4hh",
  "key35": "3iTUwaiLWy7Mc7fyCKLrteG6LLSxQ9wjpgPRyxDPeajMWatd7fBrHX491y9kXW8aMFvVEG1NJtPCtxg731xKqNkU",
  "key36": "48Ae2irtie4yuHqb4mSyXcWQYVfgXqi8GHgfrpVtfenmbCvgRMEaNHjzXWafkF7P92jQj1FEQ3GNEEGiHXfVG3gT",
  "key37": "251WR1cFUaBqcfdKJF1s33AeXMrYzqupWVXV6bshHTYMeq2PuoMqBPzNmQp8EQhBfDXbcmsAThQjNPdjxAVswHc8",
  "key38": "2HcJVYCZj4UmfWm7cBGbo869ZBpu6yNNHxd8Z68vBjunZoheaZvDpAjVUqWhpWc4HrsfpRyB924zgx4w9c6Sy9FT",
  "key39": "2VSVxttfMZWUb7GAgUXFjCVyVzQWvA5c1EFcfwmAWpAbyoff16kbMj2ULEGRPrvTTffMQ6zuhuLA62jDjNvVCMNm",
  "key40": "51v4d8R6Su8g9f7qseAvExfuRuYneJQVE5bqMmEMQ6NsP6dAs2zWenTNaw2YEZRMYFnzV9hja5hAZQFxVz8QkZKM",
  "key41": "3G28fdQSwiqL3x9JARZpu37B1TtV4Ctwn5L85hU8tBxBjebsfvr6HVZ7Y4NtCKgGonkae3hFf9UUkhLYkG1kivzg",
  "key42": "3BguWG81narfuU8iP4sWSJwvDfmSA6uSH7HkmPXJPb43VbmVwmW7JLCQUxgHD2tPNTM7KSNVLRXqqzQBTPS1Lf17"
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
