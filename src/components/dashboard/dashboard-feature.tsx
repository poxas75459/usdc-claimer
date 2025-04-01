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
    "41zcXLupr8hZUsZct98ApTF8UZUJxrjZPvDfQJbqiq2fLoNQTsK29x7d5pLNe7xjcLE1387TF6UG9o3SVcwTn5y1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EH3PktG8WMNcPjukQXNBKx7LYauwFpJg7MccRxDDpZds1sHqzArBmkdwMuUN2owP5tZ8YtkJtvgMXMNo5GLCkR",
  "key1": "28CkTupBCaunsA8TVqiPBbR1XBxAf16PdfhGJqzxCQQL4RLPpoa4Nar81ZEtfLy9chx69WqkcZ1MQg3o2JMkJ4dE",
  "key2": "c5oGPs3za9FmHYZRGn8mP29LGUCYKhoshbVbVEVfuupUYxD1N2MxzjCfp17Cq4usqehPntD9f8JBtR2PXdiNWXk",
  "key3": "3rwAppsEB5aPXMZqmbgB994Dso3n6nrQjBNHq94Y4j21bzrG3gSGTCMvC2eQq35agBLxPRqmb3Zhf8UgwzHvHRNM",
  "key4": "2keFcFkn53sytgXwgZsfx2J6yYgVcpPAaek57DNt9zWEWXyW4BJU6fnrGHA8KfiGz5o13wWqmstvxqBFgHtpX1Zk",
  "key5": "FFmeVRZKW1ectDbwWivuUVUCfDEWtRTgWnfF8coemgCBunnNhWc6FZzdy8VAcFX7MXgSVtDHnLQRi3G5S971vWV",
  "key6": "5yvQREZcztFpCNLtZuPJfuHdjpAWuDmPk8zH1UMJFbvT9gG6tQ8xYbaVLtGvDhh3YsDotcA1iEHJjLV9UhxAz2ie",
  "key7": "2mugb9g1VFzvS8g59LtoNzU9TeS2QnM4rgTz59fwtaH5T3SsGAZTVX1tkKrLs137AWar1NtFzX43GtJBZbFhU44w",
  "key8": "2eCoyyo5zMKWjo9PimmM5hDg12FipPmnD6A22xf2ZNNbV4U8678wFkuwqmEFoUSMpmSH5CxWQeknQQiy5v2PM36",
  "key9": "3jyznQLTopeXaqd5QKnh5o9R5k7qjcT9USVRdCx3ay4ua9Nx6K3VzoePShS98swKmew7YtKHAy7rZsY1Cf8yAJAA",
  "key10": "2BHYRnft4wgZJPVxk9kCkNkHavGgsTi9g2NpZjHuR9UuaPjNTVUCVdDRDmqFBnn6Qrvy83wAZhPKErdd93EaYFC4",
  "key11": "5DU7sm3w71i1UHERYPxgWX2vHTCKgizCzg3evqVEbayhxcx2xGRmbNxpkoakLy5fNZLQJBdfp2DnSX4wC3PJZ6GF",
  "key12": "2TrxibK1whC6bNNwUJxFb99Z7g6J9UNTGwRzd1N2yjZvWq5deNikxqQNqvoWoKBTCTs9dpyY935zDNqxgTsv8Bzu",
  "key13": "WBCE3KxRZk1sEDSwNp8PDDtLF8bGMxZ8P8nQymF9jLSh6tmAf2pVeK63TsPJyY1Leao4Qosiwbng7ALmsHFukQ7",
  "key14": "3qcrRNDUZ1RDR3yqGkwWkbiGhTErFUqgF8bHyrwLcuogrRR6u6BhwdgY7VY47ErKiHL8FxEZyG59voQHma9j5ot7",
  "key15": "3qp8h6tSBLVkBtxEjX6y6cWEbxK7eKmAy2euDuuhZohD19AwJwj66QQ6Rn4NUGjVmS3ynTWLGVLKe66XPbpBPTaj",
  "key16": "DrcRHhSytUu3diTRpqynUvjWvBUzbQvqd7dQ9sAFoeqpYeZgfQSKzF1yo1Zeag5nYs2aiNm17eTWKR3QePZhvtw",
  "key17": "2GcbcY8ZvcTsptScg5atqgZ4jJdXYWQB8yFaUtT2DohqznPqgM7orVRnKn3D5K88UCoiv5xtEuVFmS8LwfbCLojf",
  "key18": "8xfh2d3ZPWCAS4N2RXWM1z1fVPzsDryxxVv91ppHo4rLjEgXiUybshJppCVtv3QxmfJMTcdjUe1Mu1yP3Ms1x5T",
  "key19": "2HzggXKSg5fGfNrL6suKsCBCY2Dj6W2cnyiEZeLMwDvnZe4WDfuwVoB2ywWYxtHer7MoE8s9yTJVgNF5NGfiQe8C",
  "key20": "2twHTvkVZbbodQTYR4sv52CYRMELRsuW2SwguLqD2byK51xn7BEqMSZJo2b98hotfxa2L5YMDeKQLCGtvGf1S1BM",
  "key21": "62XVQYY69mxrKDakAni1wQdhmpraqtAmLL8xTJW2Gym4KtPBoY2q4gJB3PJJYDJRzkhgr5wMj2MtPQ73QKv4XQzD",
  "key22": "5u2NnZron2ukYLaTGBfraUCTXhh2USSdjmBqfDZi2KWSwV66WQQw2PwoMSZHKF2u2u2B1pzSbJxXGzNQzE35boTR",
  "key23": "2gmkHa8gUsCBp9FwH6cH2HDQq49igxbXcZtBB6iASs5uNfMt4k1zYt3aSsDhDcveQ9QQnTowgLqEx6vdmQKi5fxR",
  "key24": "5NuqKVHLtzUdbFSoLxq5hNYgkmttv98jLLTJYpncQqp6hdAe2S5eXDHhiQZA3F9QxD7SsQA7QZajYBh3McsQ87sy",
  "key25": "4Dw8nYjSjLqvu2nrgMX2Cgk8ZH518ek35VwqsHWFxRCLoeccAUHK63yyBuGFWjGkGJPNwXdSV1NYjNuRutGNcZ3B",
  "key26": "4Hjc4kxbJWF3xeDzRrdGXhGDtBK5qXwDk291p2RsQeFEtxZboLd5Uh3kuhLjFNVBSrtwaanJTRzTmJHsVYwwT7gD",
  "key27": "4tsxrZjG3tnVoNQrEGbrweKVRpwsx7miU7oAKSiEhwN7qHeWxFpkmDcjukD6fkEG1TC6mFStnzhuaRo98QBDCQT",
  "key28": "2eFw3MKtrPPigKqwVQkbNaw4Tz4AbZX3SBUsX9PNSEXdXn1GUSeuJXucTf1eTWYKpo5HZ1rKuvHkkmLc9QZ1kkbn",
  "key29": "2sapmgGYb7LhAWg94LXC4nHZRWnsfHNfDrG3feXJ6icQ1gRx1zeLLNQatQ2yPHKrjoT6NmjAGRXChyxxkts6rd5y",
  "key30": "5XMtL44aWNGzVZb5qtokweLUiW1VYEJh9gmGE5i2KPimZzwF66P6v4cpqioHY5tURYnCF4xhRfdrcXXu7uhuk9Dw",
  "key31": "28skbJBxsvYXg6bSPMQgrEyLtrR7aP3TgKQHKVzJPLFK8jjegX9AD62GSFhJbKUqGoKugWfUHkzdohRaJAgYyVsi",
  "key32": "2hoAwLxxEzCzbZkPcTTSZ9egZS8p6vNxzNZJMuqU1Vu3y3N322x3KfKGF8xKPMyW7aauvqDQ5TPi55Yo534QFaiV",
  "key33": "5VEUYPUrdtUAouXSyamFAS6xLZu13LfKpKHr949NSf53s3NsMnEgcfrf4yk15aUWPpviAqffEJ8LokfFJrvvX6bi"
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
