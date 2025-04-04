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
    "2xRiTXPgtPQsekEMg25f69rwcdTJAsZPvPHtkT5eg3sxNKBjsoXxrFRNcT9hzFgJwgy5iWeNay7PEKrgCAN4rWbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4i5quwsQMc2SajiqzZj27rsRyBEJAbprh4cCZZdZhA2toe8SmyVggTo8hDGse2EZPYq6owM5U9ULD8H2kXSUWUtA",
  "key1": "2dVtwze8SRUymkKehsn3vvNoR9NysD3uZKgEscm1QnqLW5jK4bFrVU3Za87r2rm8xvPFQArpBKRqGNPy48VoEfcd",
  "key2": "5jbPyY2AJCbaPuDbYM3YEdcHcVsLnkGybXnRXEvQFrbvCyPd5TvK4jJ8umd8bHUbwrJnNvcSeR15pCCVb4N98GHK",
  "key3": "26b8hCvhpoFsubZ3REEouZ9B6T5Up6rGAFQ78y2SSPFh1G1GySPzBLTrBG8KVcVhMZ6J6qKnCRfgL7bRnD6sYGBE",
  "key4": "Gx1XTBXojTyEhLZLkRjWzQts4wH53GsGK2bFoXJ6EG61aHz2jx9NzM3QG7LtrA5usvMFNDkK7JXL4MpSJqE5M9T",
  "key5": "2iuSTeqoStcDLhqfRvw8BVrtaLjrz4gv4hFiVw2HMdJvZwSRo37BJuNFZswaMcyqz6L1BVWWd8jLqmwzyZ9VCpcC",
  "key6": "52Po7TgJDzGxqERWv6SnFs1WGBSjzh1RgXnxBUpk4CFbjY7RtCxbjngGiH5nXEBD1yToNa2tug8isbqPvkfNpbrt",
  "key7": "5vR9ScCURBTakGaRPzxp16kBYL7MKuEJpnUpTF1RdE4rGTaUAB2Z5iPzz2u1cRMsDZcJXPLGweuwif9H1LYxczqk",
  "key8": "bqNT7TwDQQpnCUDjMMQ1Y86e9oR4RKFudfTk62p5GYoNhoZggBY6KQsvyeKbsMFFsj9rXcCUsSe41nnx8VfmtvP",
  "key9": "4jmBJ59yykJNJYB4hada6cpwa3dnGvmaoErqNgGQNmS5WBhJuSsde5x6wA3SApa9cAwkjWZHXGSDZbenwVe4qujL",
  "key10": "2izX2DcJhqATC8kgPfjxxqidHu1Mzju9SYVUYUAkamvJX4aW5gNqmMtNgntXfcsqDrtDmZHyD13GCR8E9PATPomH",
  "key11": "4JgW7vx3ioNPWapN4HVamTw4ohfLVgrTs1JLnbdduUF6jPSViHghJeEy2qinncmPuyFDEx6weWyhTkSMEwwSwHyV",
  "key12": "4JmLmdULwbAQemZmZ2qoGpFUtSvGCQCo5DT81yx6df4auiLWT4xkD3Ak6w8C3wy4ahY6wLFDy8A7ABdNHHSXbx1w",
  "key13": "4psHSVXbB8pwASex5C2aUqRdYkMejjBUMW2MjQSGVv8qKAcgmg2UUW9eoK1H2Bu5aw5Hk6koZpiFkGhsLvV1xTpe",
  "key14": "3BDj4sw1v45dqjFBeVpRARujJCzcFWhqwQQ4aMzFZj8FsMJ1PMSuDoqeEdhusAu58DuoVc42i16z5SWkDVbyczEq",
  "key15": "4DkV8aCid2GbzERcaLSk5BLWG8imwKpUxNdDr67ECaWvLnFN8GWzjnPBSueanrMa2UjzevinNusXA45xGZutt2mg",
  "key16": "28DbdpS8w53NpNvTaKYwVkxJ8uGEqnNjJuprcqqfs63v1imv2f8HD3QTJF6ut7pfcWA2hocapFzV9fqxb18CW2hA",
  "key17": "585W7gFoSahSUfPN9XgRU9WhVB179NozTFLD2iGGh6BrzrsVvSiSQteXFi6NNjiJ5iBKu3HmwbMLjRQogh4xBY3X",
  "key18": "5kW9NB7L6fvV1xhxuqq5zLpamTvBMQA9pJCXqKJ9pFCxMQHP7QeoqXDTsUURnEH49iK5JW5VbLXyTPgGyczBJgCw",
  "key19": "4rdkyC3uAyQ6maxXyZj6bKzgS2mqcoDMKc7zNkCPiNSr7jE9fwRcPhFBfweF3ot5EwhFJq3o7vqmHguQ5Tn89Ezz",
  "key20": "4J5SiHXTmNXYc7kF4Hf3qe8QQjuGhnGE1ivWCHvc2YDj74Seftwm47tx7oXhFqYdXJqwELBKPRnxnHw238gLqVVb",
  "key21": "2XHnFayBY95Z1B3WWdFy1bXXTLXdFD9LKM9TFHjmsT6AZdqbJfe9LFbD9SimgmhBKBLjFVPwg7FcJJkVNFEmK8yp",
  "key22": "5bVkuXfW4pNG2k37XvLVuUssguaCSGbjcaA5Ggr1K4aFsZbSvRr4W9Xb3RxMuKzDfwGACiXprmc3tPsgUpbhGeqp",
  "key23": "4FJeSrMwhrboXtoga3ZQK8fFhZw7oZRZXjHZbAaaM5Ut9BmmrrHs1zgrPX5RQKMXyKGJhBBFWeauEjBXAPPFWdY7",
  "key24": "3HyFfqYtbEBp3bR4Jx9Rr69xDjCgUuMe2W5tZ1UTaWtbHzgAprMfYSv5vnv1D1oBxYXKWMWesuvBnfRLXdUvKEzw",
  "key25": "54c4pV1m6HJCh7QREquiHzVE4zdRL3DKnhPuTGm1wKPjDanBnyKTjVjXGENf1VPFjzJdEN1P92M3gX8HqPTGacHi",
  "key26": "dW5aiQuPDz391TXU4EqW4z9L3BKkGAW7Lbx8Z6GgySBNx2fydEi7g42Wu6TYsvmSw6dcaJ8i1Cq5xJwW5tHwdXN",
  "key27": "37rnKb3J7tKJFXYBYbqZP79ocWFoUfz56aKVyqJ98TSpyaxnGNPWpueksaytsw6WQaXmaNko7E1eFjTg6KrkLqMU",
  "key28": "2sVqyYBSCjAXEkEoNgqm62ZvnaLWXH5QbEQnfkg2tdqrKoTZozAUMVbRcZQ4YoZqtfMhkppti6Q5PqgiBRTxUDKC",
  "key29": "2MFQaxwaTYoZYPTYCKN2L3J7WNpV3cQJFB24SLCSxE8MjSB5hRU9gzJTq7cAQrGZ5TzX5NuC89ghpDaXtkj7YtpR",
  "key30": "3MgRS2zcAUsyR7nmJPdK365pa2wbByWw4VFH1S42DXx3Z4tbM65zdzY6GLkiKULQDVNWTfkWakab6wLoZN3L1o6M",
  "key31": "5Y3kt2Q1w9WBQ7h15ARtbuJc7kts5x6A4rHWYGdbrp8prwiUaAw7WahAYXGeJ9Dt2XLB7A39dFnC1DSc6vTGARvu",
  "key32": "2RuysMXTiJprk8LXVdubQHYkvKfumatzUTA1Lm1ZTfjYhGydfoh6m4sGX5K4FY5UPXwSNyo1yv83gRb5KKwfPhCa",
  "key33": "2qTz2a3MDRxMEqTgzdzBMtMTWu6NT8faosvxvYaKeYqgGaARcTrHtk2yhm42JqCj8QxoJnixQKWNw2gosfGuZ6hE",
  "key34": "2g3YRwYXxswvaD5cCZr9sgdkdSEYThs23271J48faHr36Vv6BXNE6sZ2pMScqAhdCYpjANkgzL84E3Y67696UC1V"
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
