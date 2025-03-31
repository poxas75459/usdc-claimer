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
    "39j2ouWq6T58f4oj45NvgQMwPpBUFobSEXkEtxzg7LZ6EdRLVjd4u5vQbGxVwmbiGHVEViUeVwXq6MWrRtFzDkbQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RdzV3h4smQB5tp8tgFj62cY6nCTGzNzb7zWmPa2BF1wRAqXZvWDRaGtgRB9ay7q5mJHdvrnMRdrzucC3TTV9oHg",
  "key1": "9oHQukpTXpekoHGeyouTUokMRKUKY9pQ7SCEsjS14LZUzAmtuxbrpXqhKtP1MNn8CsxfwfsggS3KJbFSDdNxxth",
  "key2": "eNkonQKgaAeBkaLqYa3s6xRqUVbfgfRwtUQ8UDXffSE7ZJykWAYk4CQSX4GjHnt4JTG3KQCcu6p9ZHi7BcSn5jE",
  "key3": "2oY7oBHH5Hc7KJ94EYbLvM36zE9DFmkGbdF2hWt5WNJLo7jkEZrhw11rwX4AtZndnWb22f7AB4JjVUCqNKwV5ein",
  "key4": "2xi2tQEn8dJn1YbzQSJmjPivmxmNvK3zqtUWacUnSXC1uCaSZCedZKyEgFuvx56ozoMqn55QBCpL8CxAsXkZdLoe",
  "key5": "3hTbXE2jkW67pjhWc1VPwbyKJpJXgWaQLdw9qKuipQ84qrZ3iC8UW9CJ7E8zj9kweGYasoX2dm5AcG2qWF6UWqy4",
  "key6": "5s6GUyxh3No8TLk5huXWMqMHgjLdvNdZeheQooLw9vYwHdGY3MiUq3eZsmWoR5hHSPUCc79azZAM6fT2J8zMTDdX",
  "key7": "3583azbfofUnwzytzpBcK2VuPdtGV51gPD6kRhtqGHNE4UcjyQdjTpfcMNpJEdRUv5FH6GfUig96zEoCW3mfNztZ",
  "key8": "2EXzc5U4GuB3VgdBcUykupWfAG637aKQzjRHvjx8Gk69yd7DCbrPKwDRMnTY5npUTZFg54iDeupSgXUVPXpAm9oR",
  "key9": "rBrvziwTYrhMiorQF7nDpRPxG9SEDSL7yckfb3CQf2ygkpFqzLjvc2PMx8SpayRbg7pFosZ3rpPE8h68PS5hWHa",
  "key10": "5tABPtLfGsp43KC4m3RKLextiU8SACB5fKoVnmBfjcNnPQoncw3SqgqvnrXvm2mShdojcnZkDcJ6gcK1v63dhkjk",
  "key11": "3ehsMGspo1BK14yt6hrdFCqmXMjd8G4Sm7FM5RCj7ewobX4BXb5fgDuRHt1VY4qSHgwehSDivLKmPs7JhSkE7feR",
  "key12": "hBbszQks6bft6tMjL7gFpXb56PisAG8pmnqx8rkUkrZoytY3mrJSP7h99cww3MudtXoS6AKJp9793A1HPuFcpE6",
  "key13": "8Ly2bYQwKPNSYjTTwSSXtvHm7pm8bMWUvFsYKCrZ3JWn8FRUsCJwdTMDfXUhxM81F5a81WjUr8iQp32aDDtSUae",
  "key14": "2cA7qDKwfXUiqFmtxq9Lebt5ogsVsQB3gZeAEXXhkdfiS6c9LCMJS4naVCd5ekMxRr7vxKniG6EgMaDJM43gKt5Z",
  "key15": "23LwJkjAcbg3UVuiraR2gBbqyM4kxiCSWnu1hivi8gxscLpCy8SsMwKrx2FLigFoU7nNCtLybDpSNbZi898Uryp6",
  "key16": "QxTKwTNnbHPNBxehjMKsZgYigAAWpezY2pY882yDJp8Q3XCAURpSZyeShNirTjTpJrsanEx72psJf3z4GFnqQWT",
  "key17": "4jS7dh1D1Zz8CLpHZ77Fwfm5CajsZ4eKmWyjXyLZMCrLbMrW3dXYkX9EBiHuR69NvTcHbXfWRXZUpMG2jznNNKWz",
  "key18": "5yzhJZ2m99iZyodQzKGYf2nBrPH6dgMVzAdUuCunZrvMgbBNsYbPh2f8mbffCZxhxrRHyLPYGvDNKMTWK8ump6CJ",
  "key19": "5vwYYwdsV56DG7K7mzGcEQZJ7fuxJ3H6SXXC6TCVyCAnTLEiVA6aFRbnGTGWcg3hr7PjRDMNPgWQ42Gi2jojp7Tt",
  "key20": "5vsbYYuMC2PE7Q9sDRjSWiokkSDUX2aU54pkkK4DuQ263k2Gx98s4ks9PkXK8Vb9Atm2aL1CdjEUtGqFkAvVW9tN",
  "key21": "2mi7jMPTpWU52j5pxPjnbdtUDR84kpYrYYhwoactY8hZ6RQ7NnAgThRc6kW5VfoCvvN2CBVPAm9BxAteTGzCECy",
  "key22": "CLhv82QTnVeP8a3eU7EqaAm5RYRu8UMtHDKQdDkDEZWEWQxHLFhkJXCgaaPTbJdfvhTdqVgF3pGWwLgcqFei2uY",
  "key23": "2LqLcmX6XhZXAorYvofjcRHPWGLKKRE7XQoMvi3Ca3S3orpKgF1w5eyYRJjoKY4ytY5yqRwdKtNbde5Jr8fo3nJE",
  "key24": "654pfJ7wmefsQueX5K9YRUcYtfppzfNUQs4qAcqLUy5581YvUtp9XEN1Lca8QdiaEuFqU3qM66thmGePakgVtc44",
  "key25": "4poNwf75UG4tW8yLyiii7cKJ6WC9anss1BQkbnvWuLwhcTVbgFn481uSaTis4yMpA48bifnHJRfHMa5bvXjBqV4f",
  "key26": "W7BJLVk8jDFdrtPLLpebR62Qc8i47cu4NPNbRU6WB7QD6ZFDnZriVBqryHMG6b8hchZDfwAwRX6jjTsWYN3WMWy",
  "key27": "2fiP8KVQCAog6agieTxa5DiTHrZ9J1ti5eQNgK7mKaNvsPfFcyRCaKBwGBh9wEgquxjjiP7dJd79XQLtJgs8Emyt",
  "key28": "4wATe2wFWH5vUWYEwst3WExaiVV8tZ81vxzYDiwpTca5RTJX6Q8zcQqe3bkz7WwArTDouTDH9qqRVAAFtGjfGFPB",
  "key29": "3aj7snMWnYekYsHYuuUCv2gJMqpJ2vrCwcLVPrrK85gYArscgZpa66qX1F6zhFe7LS94U3KgH9M83yknUvEzbmdV",
  "key30": "52o7YwP53hwzM5JWzorh3L2CijT2CkRLM9yzKFQj3uNEHW5YDf7cqWaZVGHTe8ExZ3NFCuEQJNCPm8dM8nDWQymf",
  "key31": "3Stg5on8oQxAhxcgZFJ1YqJS4PGZcB66JW2gPXDv6eYAPbvy1PJqSZmfQ3DdmATsa2YcKwAcSavZAStYbzSM4uTS",
  "key32": "3yobCu2tT44eJN8XVCiSKqTm1ms2Uoky4NgitdFTpEi7psjQXTgE5nn4TgJesqx1SiZqmVDNytJ6MXsqy3wz4VJK",
  "key33": "ih4rGVCH2XgSbzcUetX9wm7bVcGc8NvQhrzFgwRaHw8AaAeSHqDpMH41KpX6oFoHeD8dE3eBYWzE4cKcrxm9ytk",
  "key34": "UPa8qrH57ekLvfwbsa5DPBQTupKjMzYm34o2yiEqrywMxBsoj7h79SNVGRsxKwh8mRmE4NniGRGLpQXj31PJiie",
  "key35": "3vfqv6oDP354oTsBZjkx4za4CZXDGSfC7WmYcN9jetuYC2MEN7ri1PwTjW24uQm4UsSmAPrYda8ACm64VtfmN7mV",
  "key36": "2m8T94KSQMq658j9b8CZ47jjUo1pGb4ynNRGik8RzJYChyp7iMQZSqKntoq8FB1HxBgC27zVDN7pvWhLNiancP8C",
  "key37": "2V2DG3rasgPCFLmCrEz1vEJNLwEGMZcVHDyMem86jHvMJ83jW32xn1rfKjU1dW79VQxLULnDgWjsJ2C3XZMLihxR",
  "key38": "2ampdpigrtVSc4tpCZVvtDcY5hy788zrYhoz9zMeLoEZywW4wXNEkTK4uCL6676A4DbELEkGCR6ipZmytvgnuTbC",
  "key39": "abtgWMNgvtS4fzs9oWRhLhzzpYJRWhhdGchHsLKVhXqTidLENZBmxHTxJZFgjex2PsojqrFVAmPuuR8cXT1jWh4",
  "key40": "63CMCNBQvrmp1nyS34GBVwxWwj1Am8zD7UXTie1PMn34v6groC6rf8VC1Z29ZZCqcCUuZNcU7R88Mdhmw65eLm6r"
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
