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
    "DBaHa62fPm68x9urGypMETeLBjpbEUqgZNFPVzwCAefWHsrXP8CjjuFDmXQLFhv1QDSjhEXc4V1ngxwN4rwY48b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N2AqHb5oZFBgRGakESRkFVLBYKR8GiAENTzCjMPo13Vzt6HYtexFbRJdrLzKoihkmpxMGvrKv25YpRjLAFgvqKs",
  "key1": "5ZR3mEfDFLnHnhkwpWj2RYqdrsBSYi4q5uZJ1A9c1BoA3GZWdsRESqftCukR9DRciLk66jL7rMeVdM9P6TCDDXwZ",
  "key2": "5YhQRaRBJzXbSZd7vaETUsVP8syQ5yE6CsMDaUfDE7ffvVzkjqmPxrUEuUdbjc5LpNYXDWzZmcpbfYr6oeG9vMH1",
  "key3": "2h6F2s6CQRgvczDSAYxtG6C5tLwq2c4Sn1tZzmZmYiJhw8TnNTtNAsSu5kBEThqXq439pRQJbaeezAW5YFQ83zGj",
  "key4": "5Nxmd9b1LBtyfiR85Yj1Zch1X5dQAEiFwE5SjDn332zWNpDXfEgaRU6dbAoCXiJXYwachCR5S298z8RSioTq12BC",
  "key5": "2NXon3NHPgDCVQPJM3qrCuBYgVckhdvEYUfrY5Bcnene7DgPbMKwMi7yC4PVpwHG26X6GV5DMBWnsxtGtKnZ9hY",
  "key6": "4RQrgXb7jZnapujtoH2t22PbDMncpSWqs5TxbAoVts9iwKWsb6XSVmosp3zmkGXjquzH9iAjkpXv4sa9QeLcrYTN",
  "key7": "3RucH4y7g2HzqUwrX18Xw6gGXBro4oFQX8hMQhtDvQype7VNtN19RsWosVXD4PByEbiCSJ6LzohsfZfby5gRgzqy",
  "key8": "3HG9HcmJeib9MvLRGWLQ6VBPpGmybsbGcGAHauN1g3kPXJJxtsRa8KCkx7QtmXeojFfEd1k3raBWCCjJfp9ReqPz",
  "key9": "2RUntTRF6XrCik27zuvmAwL8f8TQXtpxGMQPJ9PFdM8vSE9vop9mFNVzcagLsquUowDnbkYtRM7g39VKH6MeEa5b",
  "key10": "4kQ1ZEnpxAmyDw11FcVTdBtpvYFkQee6qm1Fjm636Qc4siiycb43R1yuxRFa2tfuQhzjoP7Qdyzhns2zWfHpcDUp",
  "key11": "3K7gfnkEKq6ZXw4T2ubzz7RAFYnr6G5useognWQndM6BqG9D3Eg9qV7V5sR3G8Vn1MHnjvUbkm67KoVLZPUk8n4n",
  "key12": "3aMeWMPZwy5vidwcMNWzhfGJyeRRj9bfVVvZrAC2wLbaDGoxRWWgFuQKmK3TqExBY6Lsa8Ft8jAkaDAAoAtekKpp",
  "key13": "3yWPFak2FCMZJ1DsVy1RDvHpB29ip6ySoBGWkv5mUrqkK5QN7avd8eCdvp6oy3CR1Ncboe7DQPa2u221Jpu92RES",
  "key14": "AyMSUZAAGvm3PsZ7NeGuW9h3QakD5btWgE2dVAc4aEfWHfkJ5M9WbpVvbs7nBozqGWMbhs6DwmARyNSUouy1Ztt",
  "key15": "LW85MWs9Maf15EhHBVWX6UapFPorE6LZKwC9MDzc3SMkExV4pwrEvSZp9Lk4rM4oUxip2VoZitDiPabKy1K93pq",
  "key16": "5vXGvY23XjzXNPhoV2oV1DJk7aznAun6a79TJXuqZxhS2MYuFsxT1Eisn2qM9CrF4zn2d31LUKWaee7KRkeobSrb",
  "key17": "2CPJcER3Ws1NotuhL6UcGvvBibLgw66Zb14m95avC9MWAG1fDM5TtJHkf2qkKd6a6SSzoyz9rvtDYFL3JXAnqJP1",
  "key18": "5pyPnomG9cGiqdMzShrNairzq9jCCqkbTgSV8yVnjPzWfKdTsDRob4di45wKGwpUWWWpdNW4hmhoLumurYuBawPn",
  "key19": "4waRsZb86EgHDUmWatW1m4o7fciQBardpMUSoB5DnKDJr5ZmztrBgeBY6ffppVh1A8ogPmtweKNnZUDaXpw3pZhE",
  "key20": "3iJD6mkhnDSc2JsnMfkYJtggnGQEj5XUyvF8YebNdEb7cFvAgJdhawDQkFGge87e8gGwaEJMFF1GbQaRQRbzA6bj",
  "key21": "rqPFpZh7VctydoMoxg2GKzo4K2tWEPR9BFcsgraRNPvk5BwzaohubJaY69pbqUzgdNSAaimuPWMvv7cGugjAJ4o",
  "key22": "4FyPM51P5GJF7th7mxbB7s5GbsXZ1BbxJuwn1UnKzBg98gqb9NYM7GrojVixciajxoFi6VsxKUTf4v39j53HHKyk",
  "key23": "WyKtkFwWCygM2hdw5mY2SnZYbCwPtsGDTqvwPhFhZVrUghGKHb9qYMnraFtTTvKXznMVY8m4BncLo9ooc6MyXak",
  "key24": "63YKnBmCu79tCUFfJYZbz9tywruybpPoBjCri1LFYh6wpvV7CwtUFzp8GEPjB5jCUf3DyEaBJq8op88b2DFh1ku4",
  "key25": "3jnTPGaEv1SoCdHLyzvDtBtxtQk2oPCHoCEYHyrYhqwEUAEPT2UYgBicE5cLLiqt8kzYN516ZsgEasxW9ky41ndV",
  "key26": "3ixg4bGh4b8cMMJdQMM6grmKEoAFLvSFKAf4mVKmYToUoxRnNqZCv79DM3AhELh3gbAaWuW4nV8hHhejUEXo8Fob",
  "key27": "4aNfPjSrbmrhM5LCYCMr3KMtUgxZHGPycBDWpo6xhaZWTY54o3xYoo17Ymh4zmzubbn9yp5HCoxfvjFxoHigMiLH",
  "key28": "3eYUQvQMPEgc29VuAr32vkaTwvvnsKgqymrr93BH9NBPb3dQd9nU6PEcsFWZKchVkCr6cTdUaUpktnnSCx3tvza4",
  "key29": "4JK56rwsmn3ags6RmWc1jLx8zSKhw7i5YiZCE2MxzLnk4hvyWXfG5UgUXrZGu6FRXK94Wc4kf2HLVs4iafwKz7uC",
  "key30": "3TetmQHpsWDEzj4uxNrKj5WVB9njMmCneYoqJ3Kq5S8e23EEWrP5sEUCSp3iwHDkmYPzr3x6uE72VKZGn7nMTTHc"
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
