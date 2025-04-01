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
    "2TTA7gFYaLCXZ3pYSAuHvFDpypTLbubDyMfGEGVQhKSJHgQQp9XHAthexPvPYLANWaRhaZLCNtPuWYC2aDq7V5gL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62VoMkPUEM27BtMimGdwgp6ezD4RqrrCnJQVn46yKrT4vUwG46fPpCYMsuZ4WXczMFrfFNvSxCQaNyxQCvuRUUCh",
  "key1": "56Eev8pWoxJACK6sPckFHJWNhXNpznzzxP49xfUThZeKxE935gRNeq5kUeZCPD6EfyUCkZhEvCQFh3yjzNyBmJYa",
  "key2": "46GQXc7zjqCZKiG59ZaZu3L2LcdxR8VGMsq1DurPpRC4GQvQWski1mBFp2ZojFg7oVREmH35MkWaoEbAkfZoYCfu",
  "key3": "33WehiavMX83Ju81t66uC3yPcLpxxbAssSkMv2TQYgkoaBoKFA3SAySfKVEG1JtY1c4zZRXHG1cDjUsBJRqLWrdN",
  "key4": "S6oE5iJw8wRiyEaG8yvFFdXudhax9F919icbzTS9yyiKEtv8oeLJeg5t4Xk3xmk2uWkQBPGVRTFT816aY3fSAu1",
  "key5": "3PfEjayX1M3eK6CjxMox1uNDrzoRhyTTgpxQiCHZTRYjb8XN9bYq3TGpoQrvdBw7tx29DjEEQfWnzqeoHDUktKw8",
  "key6": "5G9iAyFkBmPcVYCZpcrtjJjY5CYraq7q1vPzi7xKTwxBN6NwybrqQ7BU4Js4jvEmo5WutyKaqPVZsRpBXr2k7qk9",
  "key7": "59QuHbd5HSzMtSPsZg4QTh9zWHcY4wfmKSdaKubTE6tahkRf29fuCTvxku5G3AtRGgXsXhFcrVywB163kFL3wCgp",
  "key8": "5rVR5BkakQzuwPdoSNbJCbUZfAw9amdkxU6ThoZb4WRweW5XgH9vnqfTeCzCuQLa3vZP9bm9WWcMDWhWKpEA4LEC",
  "key9": "5SGdxasSFyEFpDZfetuzfXiyFZ1vmVHVnECrXLd6sh7gP247Bvz8ecCPjTnsqrbnRdDTHC4fgdH4n2XrKhfqa4GS",
  "key10": "RAbnGUf2GZpA7VqZejWJ2uV7s78zyWipdShjP3ohtTL47Euo9poNoF8527cp2QxTAyNMbdpLuXVNqaZ6GvxoLiQ",
  "key11": "4EgkAKgBjLCKa71mCpHPWNL6n5RUrxPfMhYzbcjrhNfAMomNoWrxtHFMD5QSwJFs4ov3Dkp2FhHHX1q12mUjCVo3",
  "key12": "4jya8rf8Rs5iwGumitBuFaKiaDWhvHJ5xtNH4ToKZYEKtpsxXTaBp3eRQmT4eC7Y8c9Lxdetda69FP3HCvm31jgG",
  "key13": "JpYuboEuSf8bjbwTZ9m9kxDgx5eHcpQ8TqXWbFXxteACdVp6VJkrt5XxZfx3wczpUhcnX6L6R45tyuSjuLBwq4M",
  "key14": "3Lttg3rqabjYyr3GrAC6vjM4GY2DKvAqnsDL4PnoGNYYeHwUzdBXutYVaobGRu4M7m78QGeTwEazEGFvwADm2qKv",
  "key15": "2L2WwGZCadi7rwDeFvRcbagywpJb6YrS24d3Yd8rmQwujETbPq4NT5AmBHDHgmkWnKFg3MSpNbhKk6NVq4Vz3ewv",
  "key16": "2oRJSpBjuUXjqzsToZeVz7vYfD6JXbrV31W9qUUTR6dVS37bN8EmHWxcBDUgYWMBy8Y2LsqDThavPQvD74RHP6kk",
  "key17": "47RZxbk1SHywmdB6tRT4v8KnVGY8zZaKdceEcHrGptbT82h3TcUevaJrfMExGo32mVfFkFUoKMqRThryrhzmvree",
  "key18": "5JBiJ9MUQ8zWtRm22uUrdTEhsV6EHDmaV43ndAfiNh7YkydXjbA6nuxjrjXrzT7ZJrSTAdEvBB4RKHYrEwCdByb4",
  "key19": "5gKJPTqJs2HcRkzq45pPdAMcHTmof1tDiz6kiZzSqd78ywYhg3haR4UW64W67pGJxscuKNbuqCj9rVAqQAx8Tehg",
  "key20": "2sbQYnpf6Tiet1qkcuqW4K4okvXa5csopb9vMwC8rffJ7aMLWPHC4QctGTNoVUzxJdLHzVJYpZ6Xtme4rAdFy1x1",
  "key21": "5xBeu2kfxwyNbMu8djf3TmVihGKu2tNeeXJa3TQ1CXDRxbDrBrpMK1oF4N1rbvDk2cWB4qWfAX2BcEtYMkzSE4NG",
  "key22": "2ByLRePiwMK4yMcu3pXJdGy9UKNwbkGE1zQfVSihgas6mwzb3NDcB7aGonGpSfd2bbupLetUrFVvnu1fiVUXEpcP",
  "key23": "5Lj1ord3y8NVbH6phf2EE2h1CepvSrDfkSCYpuCgzMAVx63kxqD7F9ep6qenbiAkaSBsHVA6YXfJzz3YkzSSu1wK",
  "key24": "5GED1uPG1Kwh72YZJ6G3S85H3VyRWtJSmDVmXXzGrtRRyxXf5Z4WdRWNfjLFAqNgzYoanmSnaWoF5STYHYYKRbZ6",
  "key25": "4v3nzSMGyEAdog89T6ve6juCtVWg8tLxq6PnqfqzRJKnqWHA7QuKXnrZhw9uQ861SdZzTqcDAz5tdnDgzAVXwFem",
  "key26": "e5wUrKRqXvFU3G5fqYnH2EHeYDu6FBXUsjZsqJwBbi2LMBVzPiVt2oKpKa81B6yEa6PA6248VKUPcWCnwEvCfsa",
  "key27": "5RRbZfHf9XuZa7SeyV3LC2Fp3WcgTd2PDLs6kkwjQ3BZzc6Vht7ybKmndui6vcS6sVnLSGJVSntGAY7JcRqj9pdc",
  "key28": "2naJnntZvfodUC7SKMR3X2tQntsCiYAQznaLKkT6vSdztAhNRkgstd6J9BrTnUHyZ8f4oQWMJfUt5mRoJ4LUurb5",
  "key29": "2vzvGpNtB3Y2akshDpHL3uAAPD3aaChwgS3HdsSKN5kJWpUgqxFV8UoukftzjHsvTuXwQAgL7m1adi7HhT6aYgVg",
  "key30": "3Bqk4ViMJrWiD9tpYnLURvh5w7r39qkYbvpYkC1iBQhaj6RtJG1n8veHDe9hzwy8oC5gLhmNkcTAPyV8qkvwuMnd",
  "key31": "2BM341VcSvTDprRVJaaGk15MfjrgVfwe2L3Pn9LiZGbPZSuphZoutex6jRw9jek6iJKZn9roXGtY7rdg5ihMwVhF",
  "key32": "5uqhfYgh7JZzJhFjK6zbmUm3qy3o4wCkUsLGwApQBtc1hhSDqUW34wbvcEjzCNeZmJPnrXQRErhJAXDxvj3vcK8R",
  "key33": "3CbP6f5tTi5jKKTgcYKV1o4XfXHaw72QHjRW3C2xuPBB9a8JMU5joAGeZVd8zmPUiy76BtU72giuR3QCtCEGum6L",
  "key34": "3TiTsGz2yLBChEPiPq8aHcv7BidPKZnZeMttmKtUSNHxTsrEkPJmKuEjQRZGrkyTVNXQSChSfMm5igB1rh5AX8nZ",
  "key35": "3Hv3dZcWSdL4YEsDpkicPKSG1omSKS5c99UqUAKNNvXM4vp18Cm8bABsf1LRvYquLpmXBUYHPDaXM2Hje4o5wvRE",
  "key36": "2Hqhywb6AkmnW1RLn6PHvttDddaaaBdVKUtKA7hD2FYrGSogSNUHVDhJ3ETwcpcuneuoQzND4frGVUfFmrszGNcK",
  "key37": "48945q9npDcUQrTvuiCx7JREY49yKhaX9iAyaQeggc8H71d4DMGH2o8oJMZMCcpA63S1qNWZMm9jQLJMxvBhgUti",
  "key38": "HtYJhxquAG2RqHqYyU4avsRo8XzUHCDbZYyRBRSmgck3PyQjwCkVZKDDihcRTw1uTcGMhneAXRivgZnwF3UvAcB",
  "key39": "33Cv8jAhv2HJjXm79Ss19KjpBVpdoBzRrHUMA1E3RY2gL2UMiRA1Lw9tY9CGdD7xGF8efLDcgrAq4nhZNP4x3Q6B",
  "key40": "2JdeMTSZ1Bvrv5bRQwebfS2Y6RAc9BA1xBAVwFd8dFWdkRuyRUQecmJ4k9RBnUwV6To6GLXkRHUUi27LuDDtL1w7",
  "key41": "3C1zPNuMypiPBZsSvtboVM7AUEpyKPgsiSmHsyAnsfLsGgyAEUwvAmGSMrj5Z248EnxDtZeCF41oBgefEhz5jut9",
  "key42": "4Ny14Kh4mPkvx4r5xhGMNP5zwhTiRz4i7w8B1uB7NV1GhpxxkMTvX3qKQKTtgdn7GUBjP6vho16h5QjFTQkJEsgx",
  "key43": "41yjJm1gytYhsySCJnZAwwbLEfhqkh8XenRXxfKef3UDnzepqKLFw5iy9SSPjUfTRcohpu7WXyAXzEnwMsYNpa7K",
  "key44": "5tubmux1HkXHdSPTMn485KctoLjPH7yha5y7GD2qPGwHLQAXQDFRYRJ2mTeF7Bh5bHRm4Fmap2s8xtXUpsoRBAsy"
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
