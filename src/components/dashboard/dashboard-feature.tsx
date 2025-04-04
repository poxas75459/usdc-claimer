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
    "1EJDWDT1kuxzbDCzxCzVqMiszrmXgMwed1GiLvcKPiZtudU6dbanuaw52gUoXViCtLpxSjvo34ArpYZgeFJsfZV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xKDMyMrz85SnmYgJCAybZ18PB4AXS825bg3bZehVby6UffXNnmq3XQ6teoCPRF9iv97cw57vLtfQpxCNwC3GxTX",
  "key1": "2taoJb9UTnABJhDVKFrudazYjTknsNvHjh61VqRTZpQN7TmFmbFCH5JttMBw9kdpic5ycbtc5czweFnfFPhXZU6d",
  "key2": "4dy6nvUn4yMEFRKTPQKdSVaBjBGMLw87zQuwKKJyBDsSviDHjHi2eunqx6EWR41mmUwLfCQkfNdJJe22mGk14TSV",
  "key3": "4MiMqTj7JPPxppkvtrDQVXccijcKxNy2Wt74jJ1FgsSWV14rzNBejmHLHLNxfVDn4quBbDTh2dNJkHSkC7n3fVHp",
  "key4": "rH5XXZhGcXEUCDQwPAHBX4WmcyGQnVMWzg7tfqkqqZpdLJZKy16EGLLs5cP42NfRrLjDyPT9yRCMBCVTEgUNhyL",
  "key5": "KozDAviTmG5utqPkJ9zPtpJEFkEo7pSg48gV1bnU5u6ZuKW41vEWFWQm3VFJ1SdYm5Te2GEk7EN4Yi3AfseZFSK",
  "key6": "5FaDaB218jevB6jZNrLGxKLGywqri5BRtnrHDvSXLwd9Bous8uDMJKwx1jew5mRsCsirwkJEeMBSNBV2B1KFJxDy",
  "key7": "3P6SkeucR4CfWqCNj9gZsCPAxutuHMhPavKrXv55uqovxeumt5BvPUTbT1NRhEgQN6ZTPnGxfBPx2xrbRsuNBMRQ",
  "key8": "3ntTzKwTYi82Gj4TcWpqye2ZLbJw9wWnLj8ysh5jLwU6cctdSBSQEH9ypbW1NcFJk9RVKZMqaUX4jwnX7jmguLk3",
  "key9": "5Gcc8DnJYkAn5YUVS8jA47VyfH4gWMvHL2Y5RtAxnw5HSaujah2myGtCchnTteoSxGDZBqA25vqsde4fWxK6feWW",
  "key10": "3sMVX8fwb1mzusdHV8wBSDHx5qUQRPkuN6daW3xGeQ3td2wChwdLzBGZRTfDqSvfF5kP37UJ2iPfqCkMWvkc9GmU",
  "key11": "2QQwptURnmcsa8fgdKHZjb4GvBUd87meBub6TtpUNbhQQzhBRKxExorWrq1pprEmpbhuvTheG3GrA8zc6UdARZZR",
  "key12": "3QvyB2kxQ6D4s95uT1x3zxe7xXgvtPzv1ZsiTLDkGH1vPWuXW2W5CLN9E9AwstKqcaA3f2SyYKvCrUiLVvAvtLUC",
  "key13": "1HKE5jX2BBbWhqKVAiqepxQixaU7qA9pJpss5bLR33iKQ993ridwAgeeddziEgrZVxbpVjY3k1XRFBp8BcQTTec",
  "key14": "2ugdHBjJaS7VgsH4mN6HfCwBNPbR7nferQse57776D3tngA38zBY27b1WDtzd9UUqoECsMG26qADcg6Z7VoxyZAo",
  "key15": "jmso4KH4BCKKB1jKJoLM7gU1U4oCoS7B52gUt93jJJNUsMT2M3upvneFciBzhovTsHUrL8pVZmaJ8hpxrhdkDEw",
  "key16": "2PX1WMf2QjteJVHTyyc16RdRTZiiqsp84p14e6DaoykGL6GAxEqV4VWBuEnkJCNMzkMd9jUPVH8HkHEkz6PnpKW8",
  "key17": "4oz8g4TTmjNyBW7L4tFDKaNQwjnFPy5GAiWv2dXYw2Nn2aXFrsSVC8ahbE3KUyKBfD6xSSyW58X9H8oCcBNNjieq",
  "key18": "4XLZMx4k4uJYG2X9LUJ3aNzNjNA2UVjjaPrmiuhtsp76qDjDpYXYYMJLM9QbAiHX3vXosWy2kKDZWkLAGFLKGLFf",
  "key19": "5ohiPcBE1DKkbBc1F5EgSxMmoMXMcNaoD93ooPaQ3UBftJoeKfY8ioZg64X6mvZnu4qkbFz37t2xnzhPUTZxXR6s",
  "key20": "4K7eno7iRifCG3ctJfm8v4p8JZo3hSj1R6zDGVWmW2h2X9CeMA2JopY89uCfujv78bUiYQhByNmUpqnefdiZGiLV",
  "key21": "32qNn69STXaaJeQ1bWseMLrrRtUWBW9PCX4tvyMRgkMm3DcRuDKtt2bwjRTM5urw1SSoNB4eiGJVUgQs38Zs5u1M",
  "key22": "2Hbmp3cXt6VCsnJhqnzBA7PG9mbFRVMtye3iFQ5CgWY23wS6NykAAEay4Rt4qmC6veq67isSBd4rHbKxd4CeNm6m",
  "key23": "4U8skEHnq9kG4b9XsQujwWYR7oG3GuQxqtxathS3gnHzE8S9tpaxR36j66npdbUg9PV7qtmy1ie54EmZNeWRAD1g",
  "key24": "2AkPBsCkQRwvCESR795nbVKYuKgv2bjKx56BKXQLPd2y6URprgk6EYHcG8yabNWqdN6NGXLTMSuYCJy4J97z43i",
  "key25": "29uarWYSs51w5c5MWM2hCEYrR9WLyCcV9iXFYbZ8nczXevRjZTD4a1nV1vk2oaQKay2Cz17J4VzEZ6KGViyfJpjA",
  "key26": "51KAziS145otMsRJcDyADuJMxkoDnmLmpu9Wz3dhnEbQvi2RbHguAZj2j78TCyNkKJfi23axeStsRDq5A8gbgVrw",
  "key27": "2cUEUc2bcBVRk7RBRSHu8ArK8ZC4kYVFExkBPMX1zaTbvJGXnLKkYKTxBnCWtaJ9GUoZUYYRdk9CPVkaaWSJzUpx",
  "key28": "2LDJpGPtxg9Xxf4bUzbWW9vUpwkTm9FkvCzJuEqjncvyW1GKoWynByGTVBHpuQYodpeH9ytMqqk8wvvFbAYHWNVL",
  "key29": "3SwYCJxyQ79wLc4y34NquJW26upzv3KGimm7yBu7JFAts7w6NKhnfxxsfibe5Vr5exmVXC91hFZZaUPW5FMiiXqi",
  "key30": "4cyXwYUGW5ruNr6WCLHYfKCBCk6cz8vNRnXh9G8s8m9ALCAQtFczqp6aM4ZKKQmLkSFJbsPcJEcofFosmmUEKj4N",
  "key31": "3qPgjiQtUPTVMKP5LFb7xpnRn3NnCjPKcmzFuLNxRr7CyWZ7b4CaMWRQWuR9N1ubD5ta3FXoQWLFs63iXFc12wNj",
  "key32": "377qTTfKYrGNpRkQ8sndSpdueUGnHAihXusGTHrVX65yWN5AWTMzDbRCZKK9yXZ18eh6wCrqGPP5xm4dBZZTuGzz",
  "key33": "4ktBuWjPVGdfXgscu2F47VpPqjLEB1zvFUDML3U17QgwvfXQBskdnZvHAm4dzbJHEdx8VSiPp7vpFjYW2ERKRrtu"
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
