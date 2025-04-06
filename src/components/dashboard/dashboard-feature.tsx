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
    "2LmM6Th9t67YpxC2gXQYHCJQV7DS1vZf82SGpzjUzmL7kxzPVBD9qmCq7nKeUhEPbVX8LXQejreKebpp2LHrHSj5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3q4y9pGF4haUbpoeyo3q7ddvqPoX7vU8MGE5GbxuKU3Nd7mQnF9vcJFmKqSF69mehNC2eecEtxxAGjEQVG4o3uqy",
  "key1": "5cLCuv95X1ZEhFF8EM3fpAAaXBtTQkX82iZaPvRrTLHpFVMA7HunYdM2QZPF5D7Put15btpRprboQESvSmk8GVj",
  "key2": "5oGpw57n6Pkm34a21s49ifbtss7FgE5Li2ovp8SgpUPvnA5NSkWJNz9qnYGsHgBmQDiqEcUjrUAihiT6NniWA2fL",
  "key3": "27fRHdKmar6DM9oCQCAHBPAirjiodRPNMSHPAZqBHnkLVKSXpHnwPZVe8f1u2YTBx93CpvgrWFFW5UJ3npedATAT",
  "key4": "2NiX4qUe5mCJaNHKGahu3tn3kS6nEH8WPTbwZU6MUJ9cuo4ZcpJpEEULc37n6vArt5VZqeWWVydEMSuUJMeq45Hk",
  "key5": "5e7SH4UAeG6Hs47z886xpDT1QoGXBVM9dNLYP4DPK21nNHhrZU8tuWo31o84EaqKcVvuN17WLJrTHNfQb6JxvCDN",
  "key6": "3y36XycYYFnKwkQSDptDXJyeUbFSTXGLV4M2TPnXoLsd1dyREELFJ2BcJpUtMr8Z6C4tN4oepbEpvNCiHZrYZNgw",
  "key7": "51UTp32nWgcAHghJTrsyP3PVmLWQ77W75fxepFhCBmEqmJHW5VcLeoghoPTQcadDnwcXtGrPWT1hS6r5TP6BXyw",
  "key8": "3nKJhVPu9MByo8GHrUFZ6vfjM7a7ghEaVVCbiNh9ESfc2pnngneACdicbJ4q5nEgmgfWzrpheWPew1SXGbMLyZLf",
  "key9": "4DMi1taf9fYhzFKtQWcmxpGboEtfjg7JsuFsbamdTjopzLxCFJo1ASPT44c1EuZJaNuuxTxvF2rtw3NWXvfXHCtt",
  "key10": "413YFWf9y9c4zHoc3DxLXjcSN7r6d9AFa3uA6nESGHmSGQt88bRbEtHqFx7CqvDxErTZjLRqyZ5TYaxnE5mMY3fc",
  "key11": "MWD27SPGtCnteTdETZQTPwAxRcz17mzW3cUHw2p3fuHqVtSKPJcR1bunEW926wFAWCuJdWtBwvHFLmsVixESM65",
  "key12": "4C4aqkazTTC4SovbwxDDpDyyLL2vtEfVcpbnJLhTLtaXxAHZynqxwxFcvWzYH9JeewELrCLnj6NFWXrruiYQgspq",
  "key13": "57iwdPZ5FMfCnFtbWeBnRxmMkPodb17skDGvfTsJXCsiNs3JsWi8giJnP23SWymziFqvquyAPkL3kEf3GDtmmTej",
  "key14": "4tFnw5Ezjzgdozva31E9kVdrMiTsHq6cXpaRji37K8bCXwdnUow4jz1FgKKdYB1Pc8DwzZ9RKfFEyvbPeAr4qg8h",
  "key15": "5myompwWX4kRtiN7ehocGe1G3Q8bMJggiqhAffCYihN4ng3v7mk41yyRQCFaxbK4N8RkCUioG6kNaHFjTp5orPo",
  "key16": "2EgGcL3MguLBWKXKWgTbDdit17W65BexP9dgARKjE2XC63MDzHNr1FnZVesMGgzkUPHPzELxmef5djpST2xmcUc5",
  "key17": "4xcbvXKgpPbDmVF68R1B61kqdgu9LmddgkuXvnS4tpkKaES68Rj6k68N1E7fEtLqXeWY6t8sk9dAtHVyEMBShPme",
  "key18": "48nMucsdNsAMeH2bvvNCSi8otB29VPWEwLQbm5Ec85FF8P3VXgP7x3YT2SnNAX18D8AyuAzc5Cvb83hTqrqskMQF",
  "key19": "5CrpDixrSKvLmjmqPhCbPEnUjevSDNfbbcfVhxjdGZTSfpDyYFu3td1pTwMQDXkdftAhiLDRguqgfjsPWeBgBcMM",
  "key20": "2qoezz43qZoYSjQ6JocRbYfcZhMgeb81pMLRWGvf6bitSHe2GJEJ9GouWAsCSDs9ZVyGgs6nxQH55fiW9giyN2ym",
  "key21": "5AvUg8rYWp3H2VXbWVQ5ojAXurzyZYEoj5JfA7adRU6Dshhu5Wj1DEG2vj6xkwuAeWrpwKFhd3UDgCB1LYB6Se8W",
  "key22": "4VbU1SczdWEQgwZoUruGc88ty45XNcKz77yB8bjeKzGsgP2Yiaxepg65KxVXCfLcNsrSxA8m4U6kPNja43faQTgC",
  "key23": "2qi1ZQXnmGRKdwFTghpvgejUruruJnygoHXHnMAhR47whquDdhDWyWaG2uaCQByj9Tovxkj8Lqpd71MbuxGQTQUF",
  "key24": "aJ2nhsnfsKKUsaTDFrQKTk9M2ZMhYDHdx66HpxrrKsygtbsUxz4sxg1poPgPYuMaPhAzCvFTWAAJarvrmiWMwJf",
  "key25": "y6CP8iRkSfUSQXQWscMVv5438QYetLz3oMzuoHYajHTDWjN7LBLA2rSmJmZYEPbQQThmgudjgaE5TRFFKyUKgkX",
  "key26": "52bSKdZtxinnDxopPcFvM5zyWQQawqm8zMXrhnjEDcE2goLzaM7wgCQpaXcxbCx3b6jT5DpdnNYLSsFMPVCQa3Pc",
  "key27": "4XXXUS3biMH5iNA44rn42MP8XJDvJ6BUKR49FApLRFmHy5n8uTwNMyT7eHJDp7Kynw4twBspkNHrFBVyCy5zFKdn",
  "key28": "2vCWTwtS7z95AGbQEHgPdTiJpuX3b33HEnGsaYSsErLbmxFYnAhyrRE9aSZmTfk99qpA2hiwYy67Uxrnzg5G5DFx",
  "key29": "59P2T3iMQFwdKjVXwjxwi4oD7ZdYbEMztHU1f3F7kENagNJyndsuhBiXdJ5oN8Wtf5ozBH2pnrM59mFauLZ8F2B4",
  "key30": "63teURGEjw3JHvAi5P33vSQr7K8MWsFFSkjJuCPNjHunMC4vdAB7dwyc6zSRWpB6h1SMWdX3npG2KG7JXhTCharP",
  "key31": "AGLQaTy79ctL8iPbVsEzbgWUJodCs83C8o3nxzf1o4Fc11DP77h2itVFCHBrDCZ3pjV9cirXJmrFrPzVWhLej36",
  "key32": "5NZgxBbKy3wdGRt5kcrmaChvv1nc3nEVYjTRZbfmgnJWoaBejudgQnN8FgfUhiYz4PUM7mf9EH4PgEB6HUJVwFqD",
  "key33": "5vNuTe25RJzbNc5LS7FFb7J2NiBsSchQFAfUEGzgVpVQDZK23buYfRRCUT4ouuVSxGvBmsSAdnS2d4A8BNj4fYDV",
  "key34": "5FPefUzRE6GS3gem9aRnm6E3KsFTLpBGf3CjpyATbgB1cDd5CTrQPU864bse8HmxXeTEFum9Kk4wrZLKAUe3Dubv",
  "key35": "tkMpNpDtXig1GrEsCa59gU8oJj8sEpUKTsq6GyYWTnDCE9bPGWM2KbiHtxN8FdGvfXMG6RNKK4nUA8WSS65zPFQ",
  "key36": "3qz4FmbYfakbR2Prindq5HB2sfr8aW5kUajwZz8YeyNNiKFjF9VRmNf2TApTfrf8kWtACyZu44pPFw3DBugAGx33",
  "key37": "37XmPrfkJq8yhz5oeDEqURE83zWByqpovq5bFX9afnpW6hYMbPMUnG6KLuHUFobBSfrNSbGYarz7YnTa61m4vyib",
  "key38": "j8jTUwakpYvQRve7UNmr38BiV4ihnP9JNbZyVAoBtkKLo2Kwy6BSu5m3j5uosrgzYVG1YVxU53E8U5N6sQYi6ky",
  "key39": "4Bmj3Azws32UKGgGEdCNvg5Yg8xa9JHT5dZ8yMPXT7rbc1dgAyHCygHpne3reKEAwVp12nZjxxpkqkH51vDC6Q4x",
  "key40": "5obV9dFpjzXf2rNwUFKyXxrLzEoZPfpgNCyqcB5ftVMFP9mZu6VTakBPfhzUaHaveCeyiZrrGnkT6bR6Gz2KyQRN",
  "key41": "5HCCUgkduNH5JGSPdyQ5Kj1toQMNUwi6RTC2E9E8pYVCaPbP4TvByZB2ZLKa8ogPydVTDoz5NeLGqfufprUEsEG9",
  "key42": "2s1UF1r2F6bnfegdz3dnvUg4Ci2mTVEGGWhhHDcbpqD8rVS4MnqQTyYuPYNRJbXGeorJ8huPdqcRMmzd8wWCd7pS",
  "key43": "2i46Qta8rU9PTukX56cm3Dkq7j8THHSbEu2KVigWjEECZK8ZkykhB2EnXsPekyjRzg2xJFbmR8Pjgb8muYdP4q9i",
  "key44": "5ySKdCN6cd3iPHbMgXSKzZtKDUTyv9gyFtuEmKU7K8tAPpgZXYZ9MDif6bUDXq5RgWPZPVy9fFDc6XV9qHawPXEe",
  "key45": "3FnAg8799CN5HAktumBeVzg9WTa8msjLTzzJ8FUMcWpNwArZcQ6REFMaYAt5ezvV677LpSJeLQzCGfS45LAoQLyr",
  "key46": "5WxFZjgiWLeywQjTrE64WKJisTtd6F3NPMQS2gX5yn3rAg1yRgG8muJBq5uEAFnyCuvRw8pHbRMW55Z4LgjUEqH7",
  "key47": "5Ksjz6cLbi3B8naTtBon63hfCVrpCS8DBLjDtPxhLBGHmMHkTfozRtUjcDsVrWcAP5RDb3TwUYqrHvGG7SxDrpmp"
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
