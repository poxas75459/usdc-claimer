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
    "35922ddrnRkCHfza886u6TzvAwkivHmd51gYhkGaGugduMhnZwtTRXWZA37K3DrN1dLUKaHe7eEEqAyDUGbHmJ5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wYUNaHXio52r3trrx56EkcDrL6GbyTo5Lh6fqXHWFbC6ApHFoiV7LvXxPLCk6X2XogeMUUu1ZXsmvVSu7a7w5NY",
  "key1": "5aoKFqrHUpPzMHnNJAqp9Tof9PfYK79SXrnVTfDDRDGcFX6cXMqF5TL91TFEJHGwbnF45A3e2j8bBdqV4rd1yYis",
  "key2": "23Bc7uPX1Ajz35hquSKMGd5Cas5B88WzrWcweCDdC9S7qns79W1otHA7xYCDTBnu25cmsYZW82z4H1Eca7JM4KkH",
  "key3": "3B2yrJvMwiyY1uCfyCZNmFbBeeiAM8BTzYzg9auSzzQPGTozFSQUDvqf1f3Z72BSNqSwWfaNasNhseD4eCarz5S7",
  "key4": "2q5zydvk3rrd4u1uzGjkJNd7WoQAP1R4cM81ZieSvy8yXJs2yd4a3MaG3qfyVdDz4ZPGy2d7yGMmejusKX4Dkaxv",
  "key5": "2CQRW9EcbEzYdZKqNDeU4xyefaFF9BAPqmyUaBYSLHW4ito3T771Jeubz8dJyyZkJFL3tskXRANRW9k9gLaJdJwQ",
  "key6": "3GTrQWugzsPz6tHyy2NF5RBkDCkY1kU8AQcUkMjH2kAZCQpPh1axTsjCsBY1yM4UwuWPWgcygF3uSyHY37aLKQ4s",
  "key7": "3igzM6xH7chUXwaZTK2XTdbfgAFb5N49SfpkJeCExw7iefSJktFfpuufh4medzapq72V1NY9q32PLciT55o5YNvb",
  "key8": "31MQhryPBv9ambmnj3GdEJ1szubu9oVn6FcbXGN3xtRbtkvbvmfbeZiqPZaWhFgTgZt6kU7uAiPX7zkMEPS8Bnn7",
  "key9": "2j7M49LMJ19Rd9YMT1xgQGh61zWKwwPWsxqnKMucMbqmDA42pkFQuqeJfyCAKzJ7NfmpKFMpoGqFiDAgdCZ3Ahzi",
  "key10": "56auMg5YFyvhy6LLH8yWkEwQqEBWX3r5AaPfoJwi9UcXSaU74jSjnP8Hf5dNEnXqbwMpR9oWgB4L4ehDPDVxdJpd",
  "key11": "4Mp5WMVSrzGWg4E2Xfa5WgYwk21xa6ExjkoGc5LWxvqz6uMMtCNefdkQamBZeyqEq84PE5APc1DJGKuMfkz1hoV2",
  "key12": "4fANz5DLMNHoG22oHS83MRYGCqd6zFQ4URVJwQyKS8XtAJRJTu5NjyUegVqE6LMDsweAXthu5DNz8teqSUphEgij",
  "key13": "3GyDU8MsfbbXZGKR64C5m8r7m8pY22BqtVtid8j9BK4oK1qe4hGkh1jMVdatwSMgaiXhL9U9goaZVQV1RugtaLCm",
  "key14": "3KJ3uikhebcXAvhX1EbLYsCzr37aSfBgmJcdXqss9N3xo9BWXaEX97XWamNEJPVSiRriZLwaF6C15C2A4vsm1FuW",
  "key15": "2uTX5aFjXUmDuNPo3B6jsqAVZN1C5TnoBduKshqAQpg3rzL1gzkCjfQ7h8HRtbbrodqhYr1kdAcacB7vBA8Czj9H",
  "key16": "2CHRaXEux98Seg66W6Zg1ThSvjxSCLAbQeiFoDczMRHw56T6X6sxCse72gwkPY2JD3mRYLqz6b4N5nhiZi35Q6E7",
  "key17": "5PHh8Hbrjm8H9eMggzSZMFZusUk16Ao1YgZ3E4Re4M5BVtaqGm4rnFrJkSj6hL8gsgsvMg5Vi76pzPbvkNWARchu",
  "key18": "65LT5yoYMQeQFJno2UADvLuyrNkBXuXMhTDWnGnjLTLdhHyBWAWKqwvShc8vxLbBhmfTB7NF4TikBuXkcjq9Lf9r",
  "key19": "MgKhC3E1J3edouk2RJmmwkC464xM6ysw4yLoXuboJ7z8FD1jm3XbAomXJkCtawS55nPhQggeMZRrMt9j4A794Xp",
  "key20": "65yp9gnGgChwUTZjbfDEQsMv7DLuQuZYmmwdXgQuVysMpFVrs3jdJu8o49Rac7shxszB8Rf2QJ7EBjYKzx8tsxb",
  "key21": "JghjLqZgGU3pioigrYLaoq4Sfoo2nJBg9eeByAyd9fBS4wuV5RidgGk9BQFVsFecMepY9izWhLrsoSgF1of3kKB",
  "key22": "5PPLzzGMSrePpv5BpxQSapyRo1UBVFcxowE1BmZ8i917dMbxZVH8upe3fRGLaWU7hj7CUho8T5htieqbbz5iZ6xg",
  "key23": "3n83oCtb4hhmZYegwjNL4o35EnnptafzHwWwxybKrttNvyC68va9szUhpsXenboX7Q6wxb3Lx8XJDDXYDF4Ej7Tk",
  "key24": "42NHAXtXv29dqiJKug7CXcJ3NWqLYsEQdEcwjNqVvRMGmYDVLW66jonZfBguRGGAkV3yMhAT1g38K3m43sDj3hzh",
  "key25": "44ytycDhaB4D54SQMqwLAVzM58T1Tc2ZCWUwN2w2vqGRvksrvhHSoDsY9ta36zkaxEEGcLvEtkbzGAL2mSvFuRg2",
  "key26": "4db39B4Ne4kamopb2PEVQhmGSZApsNnz8x7a1NMNPah2HaN93b8jAVyzsj7ZR16ytkdQri1NUdRucJwYghaJwKSJ",
  "key27": "2Urd98DF5qbzYrsqY6rq5Ds631LFh1KXxi778DRqRfhAAchTwGbL55UbjkKUi1hMKeycTGMihviHtEbrunfp9jo4",
  "key28": "62PbmYKpxjK2qVLESiKjxRvUeeZpQTb2i2TGAid1QwmxuKCoGBMSsjEYwaDgYnnmhqBPxwrbvNMFHgMhjYZFT5Z6",
  "key29": "4JsG34H2riZY7tTDThbP2m95hc1nL6sKJ8JqQ7QvMpXCfMuo58m8qfYkPFUAuPNzCJRcRxx2EX8qTMQxRaKJAFUn",
  "key30": "4tfWpwGN9PMQQTGo7k96iTv6qEHxjNKR6w9dki7Jx46Mq8GwquheMf9Ggi1KYKbS78ut6vHbTzD5xHYLsPR9MyF5",
  "key31": "WRLSJBv3gJGEQ7gGxLAyyvUdxR9xoAaYWapb6Rdnrb8KRz94vMpMR8JTRxDnKGP3AauETKx1tzGkqEzZd1QQMv1",
  "key32": "uCMh7o2SnwDggWuN8Kc7SJz2G3WdjfyLXxUq1pRq4ZJjgz2WMXwEkmeENRtL6KGFM7bKrupMKFm9DcNJd6dVTUp",
  "key33": "5mP76EEDptijfuPfyHh7Lugfv1gQ3747kGRMBDrXH3JzUAVXLvs5bAsoz6fKpYvFYMv4d41PnuL3Au6FENjruqDN",
  "key34": "2m5iRZz9XBi6AsC6KwJo9gT8CxBLo3X3cyKvdDhbjYBt43cEpUmwAmrSy4KjHGQYiaQE1vjXNYSfZi6VnabGf2qf",
  "key35": "4jSh4q4TThcvzentsL59phZfPLRp3E6tiqre5HBHP2AJxRTjZRGmjTgWG45Rav9KaocPWrtTqgacTB2CuFo9PXK5",
  "key36": "5CV3WxDmHGcgicbC7ciq93Wk58Wq6poHy4fyq2i9aT6yVAhfJSbFySRkmNkLHNcPkr7RBU9stjmhpgWJ26Svqfve",
  "key37": "3jhYi6wqTitXRMmy36dibPJhShVgdQZXCExvm67WNsjnPpsRNXZ1y6qH9tzCgSwyWTKd4AuNBLotnyxuXynoWpP8",
  "key38": "3ZNQzRaG4XhwRSKPF65h7gvo7S5uMF18DSyvVuxnZtfd3t9aEhst7eikUYafRpMQXNFnAfntVgFXfApBCf5x3vuH",
  "key39": "3tzJsiuWJLpMpU8WwGi3TbPtqzEmYRiSH8fsvN5rqXaDx37QrBzSbLwu2VRJHyffyEh3TqPpkhUCt5cuDoDW2DZi",
  "key40": "hn9N4JRSRsL23WndLzjFSP4fboVYoxoS3BiZzyyzAS9EfNGaCTY2Mb4oequGQdxSF1z8hzBGHEo1NQfarPjpMpC",
  "key41": "5iC4AApBtiPLAd1cRgvbtdDjtjkLG9omp6Crwdj4vV7RCrHwqxSGEtArX1Jrot5RuxV99ALBWXLgG7utAhboqx27"
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
