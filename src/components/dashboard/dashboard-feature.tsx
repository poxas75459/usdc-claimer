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
    "2BeuZQ6niARpQLSVxQA5NMjQePGcWdEQWN46caDth55jGF8K2HCQAwArVXQA42DhzfT26mpvswXTHJ2H6NyzdLdb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63u1qJKufAmEqmDdXQt1qXLpyRF94bsJAvmpZhSJjuNq59kC8JbLvFA8tCdXzFEzymHrMVqHy9muXi8WbgEthrrc",
  "key1": "26amECuuDZopoCkk86VnGwcLFSmYkwYXpLumv3PqTfHiPiy5WP5ZtRr2jf7D1UuDCN7zf5frv8uHzf4bNvJdXZUo",
  "key2": "4wg4QhRJ2vC2TADzUGuxk8nGhNx23vcDQXJC7nHRVaakudesVVD58ct97A8qjKN5yLitDHYCRHot3XXDuhEcP1qF",
  "key3": "3uipnvPRPd7NUrKQHaZ84zC13MU1jQevtcSCWWpF3RzW1u9ad6q5BmrsbVKJ7rph6vnAH3E7Yc49epEtA8Qh33Dk",
  "key4": "h2ux87xwmt5AfRYXLG9U933ydma8Fqo4mfYBPaVUQwGSexvub6ex5qg5sy58gGmKmaKhe8HyFhGu1ioZXtgnahc",
  "key5": "3hmgFSNNUvjrKNXEJp2ett3N2C1p6feKchM5MKsSEXd4f8imwS2NSxXqEqVAYJyY3bLFeamPfpGv2TVCUVXtiH2n",
  "key6": "35E6ayDuuh662tHg19TDxLeaQZG64bU6NoUQNpNk6YpsR5DZjPBhg64SVXy4YT5JAMRp1LhHotR9PNtNphXmbfg3",
  "key7": "4gVfhsgniSn5Bci3e2R56RfqT1tB7muXNPB7GWZuYcYQhtbmUPGwsh9MZYPr1rfRaJAf8RdMLZcveZv4wQhvkPsz",
  "key8": "2D31CPSvzzB7aAPsKPEVZzGjhdQidZea9h2praSoQcsnFyV2qrtQ4iaZws5D6noeNqiHMRRqMiqUTb6pHRXf9VaK",
  "key9": "5rDxCwyybt73DqsmwWaVLUgnzJPpNndnnWN69jsc6iA5bW6ccsWtrtEcbbbzTCYe3Ljzh8ERodCdiqJqCbheRV3N",
  "key10": "hqQrp68eRqyUA7zK19Kb6pwvXuBkwtSUeRqG8oSYSY1NpZEECPr7VGAzqJ5rZZN4HfmYz5aLrwP132pyJEickDp",
  "key11": "5ww3JJL6Pggz3a2PYyTvKYk84WTqahXoKyAQoFY3w7PrQ9p3RyH1Uavc2rJvqN57JkugeNTQgy2KXkrvATnVqy44",
  "key12": "33qBTCuBDH2anGpCqCQ1gMiTGfMRjnjRCN1RSd2WY9Q6Pgbr6q7aNcJPjbBcad4SFMT2eA13e8k4tcb3UsXBZUHc",
  "key13": "5aG52k9h1cye9SNbRqgPD9ELT1RgoVMyikxbbenoLhnEWo7Rx1LEVwXSXw7tJ6EFaJpSaRZeXnoEunDciXvBTB6L",
  "key14": "3Nwsn97JteEr9CjsQHJiNzXcKoT4Ez6maCBnjuDAq7Nzy3KhqLMP8A5Qb8L3NqejrWCtMesdUczqFBq2Ve5SE1b5",
  "key15": "3DpnD5D6h3gwUnpozrFnDrJs3wuKZHh3Li5VAiZoHnHF1CVFK7ygp2wWikjc7DQ67AuWpKHvPWqDr3T3K16yjY84",
  "key16": "3YZqDRELJc7oRKgNyJRfGacfkQmDeGwdW6iE5fSkNSqQuEiWFNxvEbXN5HwWjFUtPsMvY1ZxwjhTCfg8b9J3ek87",
  "key17": "76Uv39HPLFNKwJJitNmiuV7oV7nggw8Yx5Mwt8YtzQWUwfTY2ahvht6S6EKgQvj8TyWWX2bTju2ikAfwJr2Qq7N",
  "key18": "2e3mKthT15xkcXAXpCiFfgZqH1MAvanAbSjj7yiinhMEgCj5vE3wUS5UbTLN8PqxjwbhvBZb1PikGpexM6rkTe8L",
  "key19": "5E9QNstAJ1RbS5o6L8WQP6Q4WENXZYgPj5vbRdJvG96EXhCfkWQmHn9MVgVibwM3XM1tK12tcz6gmsZ8Kjwxi6jo",
  "key20": "ySk9u4jEfKzEMQAz6zyXiESBjcYVPpvGWA9tuxff92Pe9ik8PUKnXznVHQMZ3JiDiuthGMr8FmTYQrwesQiYZe9",
  "key21": "4GuoW7xeH9StN5jit1hKvVqxAzhPCnvgztXbSM4SxZBvL5dMwsmg7WSS3US32ttmLChiqRsjwB9R2aAYA695U2PA",
  "key22": "4yXLwaZDe1EVErYFVBASVkD1eAicMVYzawLwvrE6CtGgr4sseew7922ZRanSWnX5hrPfNht2F58PiNB68u9hWx9z",
  "key23": "DkKFmZVZBN1aY1cCVZCUNa1q45LaLBHp4gwamn3bM9dafxphmcX8ayueHNoJSdYxB4JtnBSuF8qwmZdoouPTgUz",
  "key24": "VA3a6td29r7vZrveUFpecnVKdj1CvAw2nBaZGMknuFfmmMkdFwvtVjTuWzGkonSyu1nD3P5YhwLxyUwHCrfJUH2",
  "key25": "5JqMQZdCMpRFytqX3ruCwD6k3tTmFiqdXdyET1bpZuwCYAzgUPVUrcGhhMK8PPwntLr95B5YaeHWVQkz876sJvRZ",
  "key26": "mNvdkjk5qLVSzPf4XMcwPXy5Euz28ZiK6MzzRJm72BV4xiLA8CAGTYS4cCwbRqsUnudAgb2G4rTmqfudsmfUqk1",
  "key27": "5Ak29WpUJBzcrKUEuYZFGaAZ2heHcPTpn1T9yHY9K1vD4ncL1eMpQLETqjn3w9M8T4mcWR6YPaxDbGyXfiKiJR5L",
  "key28": "4ap7Vhcn7JL1EQGGSbLqHYHqPARbstMkAwP66ZDytk1KK5DNLk7aKFzP8pNAQzn1hLsPUNHeGdrzjj8P2TjVY3zg",
  "key29": "43Jbqn3i1SVBdaCTJF93TGA6nT3iJWYhnoFiQS33pWuuCiCm3q8wDgc9DJxEZyriaNCkCzM7uikTgoXQapdhcvpL",
  "key30": "5VpmbFuHFBqxne6nFn3zzB453bv8mr71ySqVhednWsrXtet39zz5gKAKJF1MAnnVgNxifvB1WhfuD6dpP4unc9iM",
  "key31": "5qnehi39CczExybMvMtkTCV5gqjLTjMtyzqdPt2xJKiEAXxXe2ATXEfZJGmawxnJ4TftGHhBwANQ5K7LRwUos9HY",
  "key32": "3gap1fRsvUmARFMce9eWWvfXfgKZJqtLg9GNGx29z1wUR11VmqJFNeS2bG8ZXVvY4oskGnSKRNASDPHUB9jxcD7U",
  "key33": "4qWTZhzrXsfhFC72nt5fGXT5ErBYhsYgvDQzNMH46v4u7FpUYKaSMdCQtfMRNPApUp6YBHTpftmzVvays6LTEp85",
  "key34": "iJF2tpiCKnLnFGoFMcwhQM5xEduPYmjvfe49KE8DzXtAp2Qx9KVih5cBiRQ6MGF52wvphgGvrdN2MPKT8k5hurx",
  "key35": "5rQxW9FoKzs6kAWVWU3cEb3Ey9VAZuFZeGsaRHtJwMzYiBTT1Sxb9C6piULLgEtyeZAK9nF2d17a9MjgYfvycGJQ",
  "key36": "46ZyrGgjsTFjWzf6jE1PPjZRRRTGfapnBzN5jnT3ykG5GQNQzfde9nkKqKN29aMAXyYjV84gVNKEu5eMm43TCLfG",
  "key37": "2R9VNjbFvTUAg7uyZ7vD8qSyWkEq1Pok8ub9pSwfGwvswgCoh1ri1hrkVyos6myeuT67y6rFgqacTFbFqosEEPus",
  "key38": "4jLM2wuHDKRC8LktF4mWpNk9JN5FHnw6GAy7L66FDkCVUeM21rGDPk56RUMKnT5t3Y2FmSNEkG5T9FE2MBkDKQ9Z",
  "key39": "2Xav8isFoqLQCH57Wd1k8YbbVdJbJtRoZbXMq4Zi3gMANRg8bNwbcrN1Qt2J4Jz2cETKxGadFp48axbNwts4wPng",
  "key40": "49WZF8sMf9Rt9xn5PDYsatwVf6tK9C9moghrmMv8RskWH6UNNE6ufAK93kgbvypoLXLaMLGcdNj3BPMEm8o8NA5C",
  "key41": "2FqoegP7oJegxACxH9CbqeuUCfqD5imPoCZBbfyyCSHWr6YFcSdTfb4FQtaDDUmvB94MjcxgcSg3fwRP4mCfHjot",
  "key42": "2Xje2anXALNJkaPyExjJmQqgXqsGNT1VKokjXtVnUSa84FT2gvAs75MPjzxnibCCNbFJCU8ZXcwtgpfZchHXMTLq"
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
