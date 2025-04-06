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
    "5XkVGGAjKDoA25AP6GwzkuProvYRUtohA2aaF1qxU78RmynTTMoRbutqBqmMgZuYc5iFa1rdEJb8dW1vih7K8hHk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VaT4gfyFoTVA7ot1hzH7n82ykNLcjC99NQnU4TghDTbqFHiBWutfj3WHWSgwNsNiaBieQhpizVu8FeYW8cEUNeU",
  "key1": "4cQuomKWwKVBRcto52jKhPDHswrsyyLX9cSdXz97RHTVqsAzSPu75i2LBtMvVbAtPeGEZBzb6hsUPssY98VGoY4Y",
  "key2": "3NDZcSM3wPY3PipfhR3Tyz8FXFdFmoiBWX4ubruWPPocGfW7Z7q1PCnQ9ZwdjQodc1vYMXnKJXrRxwL2KFE6MK8a",
  "key3": "299SbrWeSL7Wg6K5HPZTdJz45q3JDyuv3S2PVh8DFCxRHpvgigwRAafUWbUyiUAmMTuQSUshk2FovQKcMZy8C396",
  "key4": "R7QbvvQRASvWL3tkpYL648Q1i2Fik7PvoPZUbZrSRs19jBN4aZb2pb2RSSyt2XM8jdkQK9kuQmVqfGcAChMEbXr",
  "key5": "8vae7okCEx2krsUzWPdYXbnKEeeh7cRdiW2oecHZHZqCMq6i1pum1YNYmooqG5LQYhZiQpDqxNy1H9nywomCQNp",
  "key6": "3zMB6cfzQXFgG4n9YzcAKgEMtH8tZzikF2Qs6ep6krM8FWLedhX1ETNSDWvzrKTbJMpKUwSmakQgu93UpLvKPmHq",
  "key7": "5rTK5tK2gwzRseysRuNNX8EJnUxX9Yqe2xP6dUjWZX9okCcMMMonvFgTcZrWTdLxGT3X1cztpENW2vq5gZ3hExVb",
  "key8": "24CYKTbLqsYfQ4LYxrghUps5LUG7Fy7P7EcEFJeVFPxvoRYivp3f1JbeWs583VWbhFneZmZPDqwTDkN1HHPMATwm",
  "key9": "2m3kg4FiYogT36fkPkGZJWiJyt1ZonvzqRMP23usefthZqiwL9j4oVN8piqhCWn1EFeEkV8isgmnwyN8eDJfPdMB",
  "key10": "5nTcr5CHgnHC5BKKruL5UPanbae3sVZzJEu7cEdpeVGE7dBWr4oryq5VVNsqpYb9X81UKSgSWP6qKriELDdatpvM",
  "key11": "3m1gmpJWVUULJq6zKwoaovw6dzzdzAaYWJ8Tep4NE9E2x8CmR9eP14f9kxf1GZGZ4fpQqKeuAAsmKr6YMPxsDVmr",
  "key12": "5bsbZLnovj6E1Mj1r8czqWoSHHF4ygUhbGwhvdZEggB7BzQHjzUv2EUbURQwWAuTsm7zJzaVMi4qoAEhjeukTar4",
  "key13": "5dqfZmyNZWeJvQWhGukhLVtNqep2wMV1XJreyRs5SEnnuBcwn93i7ZmDciG5J56hkp8CW5aSdKdu7hdxH69weEj3",
  "key14": "4wvQHj3bcF2xQkQ3TwvYzccrrCXrHkuxJqkuD2vRtg3VsjGgG281iADxJo5R53YnMZLBdzMTTb1XEsTyNoVe1QEG",
  "key15": "JweZD6pTdFR6jD8UTw4v1KRCTVfpVUNoqBEHQVryUDvWPQTjBJt7ebUmjzMAmbf6VcwoF2n7rsobs8cwGF5Dyjn",
  "key16": "2nGeu4C1Y9RqQndnz8mmzVygapg1SUXwP5YHbh8dZq4G5iUcVDvaaHfSesemZkm7HEFo55oLu946FmW9ToNWcydK",
  "key17": "5JDi5PtpeQuZeT8hfHZxooTDYN7FG3JcuKZAa5Wnc18f9H3Z7M126GBtopHQpMeT4HRtcnyxYGR5XWdxBTmTWr8D",
  "key18": "JZkXrEtkxxJ3wugttvsUMhr9SiEUM4AYoNeCBoiPvBafoB5TBXq5Bbmgwxr4vJ8dZJDM3sADwCFuj2B86cC9hDL",
  "key19": "WtkmCzRqzDwcLqiUsb9YAqFdUAThDo4q8qjZMcwgkabacQ6vGsrPceBvAmu5CrWdGH1NH967UbaiQ8rYZew4amR",
  "key20": "5LaScdw6Pcyy1Xw5K4wQwiryNntf6SepbtYfNtRi9iV8rJyME5Q4Nu87ZieSawT171Q5VAdGHPAuD83UJPXHnxW9",
  "key21": "3n1dgxjXV1EfgP2vMHrjoN9LytZf7PhMJPKVVisY9Jg7JxLKdSBoUjRdjE71TWSEPymcgJE3NqtVsEQU4b1P3AMS",
  "key22": "4N5MpWWEajjngGcYoq2dZ7TpreGk2aHmjXX8FkqnTDWG6LGxbKoyGpVkEBPFNyZCxruoq7DAgEr1QsVZSSJzKyJX",
  "key23": "bcPH8zXT1Z24e9knm6bT9QhMCAMvMMfgsoFtrs7crQMYYcaABFLQCiYYNWFzDi44aZ1YtvQFWiARiMmk8xqLi3o",
  "key24": "5Yisz7fYVjv77uqXmVEHrffw8KV9SxydheoPPh9e4uxTEvsfZnKBjQLzHXpAWjrAzmZ8qKzXvMUqTD45Di65T7d8",
  "key25": "3PhZYPF1njphc4C1VWzJHS862UVbrvmHvcGYgVvPzzuJRrYFr6yWFSNtDMhSrrK5Rcpxjs99QAVzWhL1SgSDLqiL",
  "key26": "5XN2muWRMLMf7q7sU55DfJBNGh7kjC9HmbmCbunNqkLGJvDqs5t1XZKz2bmLnPGp5V5xLM4fcJj7i37VXqDoC7K5",
  "key27": "5ctBCwnoec7KVjw7e5PzaLe87aXifRxgHkpFehPWjT3XFXT9VzjTUXrCBnpJVXNdEjGV5PxTwkfCGSNniMf6mpHc",
  "key28": "5ziu4rYND58XTSfDzdZwys8b2ymaFR98m8JEZXdVJDM5oXZbQiLqW2SvdkThjFK3hLdFFQkb1SivCusC85KN1PZ8",
  "key29": "3WHRLbkGZtuxfemyRcke1XpgeLGFH9P9TzAR691HVv2QpayNMQwsY4PYpvyRBJqJfuFHhfSFjWxvT7gKedJrb3tE",
  "key30": "57Gsgo36SFGTvJj5xcxTybC6NN2hFG6AyUQNZSy4c7qbyWYXpS2JrMeVy1Dg6MEp9yDVEKUeWYzuNZSu4CgS2c2d",
  "key31": "2efMVoufE8tuVMe9sXUhDyuVCvCPYS4Q2FRZ5D5JthEz1RnXZCuTsGDXYk4fTgLPhPDr11yDbT7o8Yj3P9iyfx43",
  "key32": "3NTQa3KofTDFe4Ly4QrAUxCtjtdmhFbSup8ji4iBsWkbWr6KY9a4iri9qAF53zB9HocDqHwBoLZY5gZHSYWbWgEj",
  "key33": "4WCRWm2beEv6CvXYfkBhftxXGDKmZjeDp1FnFBzdXfJ6vDKk7kW54HTiKc7CbukWsHwWpQ324yPUPBd5rJuuD4S2",
  "key34": "4NA4snsKTVUJeqamrdPdYm1nt3qXaJLB9Ee1jF7oJ4EymmnaY64ecUTs4vhd9UvmAEuMFh7ihFoZ6T2QyxbyjUk6",
  "key35": "2S1cNLU9BLgumi3iLKe4jDwPo2oD7ukyVxHVPmhHXWCBWbPjsRVwShgQskYkiuVD81wzwoLBVmxcpp67oj2bJydq",
  "key36": "2h3BqnvJJUATBCjSu4zfYJv3xVVce9BXdS6S21QpgMWPbVEV3GTZeSTMM3uQkhL1mxYpGEy4tWgVdLonH9xV7qez",
  "key37": "3dSzodMvSyiTUdQzdnG2w3Ekbjg8HXoDDWFz9JZKptTkehvvpiUBRLk9AkXKPYbuCJrZiCvWW2cAXXUh9Bn3VgYL",
  "key38": "2FsHHJ5PjqBCsuLYwRVnkKzuQyXvKsvDdDSwNZY1f4jnKUAStUcmuLw43SfoMttcFDkbD8GG7rTXuTCi8vg4asML",
  "key39": "4NQwDvJoy1kU7oiPXWpDN75xBZrcHsqstAor7M1Tt465L7Ghqyv5KKzFfReHHkEZ3x6nwkx7CFi56uPgySFshRpe",
  "key40": "5mdJaTDBxh9jPi9dWdVTZeAPDBzpdGsuUSkZqBawzYwvr9WW1C6c9UvahFue8SLsWx78d7g7rQXtDz5KVGHqDvw3",
  "key41": "Mt9VFLPA6qRXPCDtR8TZmDa5BFkbuTipb3dzH6Nh23a8qmxPf8VU8z6Bvbxzo6UzxdbHy7frqSKPPeSR7vfygK4",
  "key42": "1CnDAropG7AerXUkKdbQmj5e5KyK31VjCEAyuAGeEr7oxsaxHR4RfasNfHhfXHHVq8kC9tiKacj2oPNxdkxLCCG"
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
