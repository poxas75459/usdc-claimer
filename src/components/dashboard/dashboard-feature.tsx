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
    "5u1Tiw9AJGkEzinGoevctp6NGGvah1gMEME1keqhrB7EMGhST6i5dmMc8f9tjqQ7JN2iTiP2Pc823FhMrvrALjxA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QP4aj5XyBuMZkb9EZXyfG5NDzpJKmvKYD9HpLnqS6L6JSZ1G39bDsAzxahD4y9UcN28b1eKm2QscLsa7LwZZEt",
  "key1": "3eQko5Tmp8XhopDizt8p7KhnJEQgoFrx2dJZ9NRU7UdXQgjCjuRFXDw954gsYLZa55qRxFEeLSkwmr9NurwWTddx",
  "key2": "3A4nMwP1Yt7ogP3dSGZT6Fu8BmBtmBFq7cYAWQevczXmxBks9LWerTCYAvD1L2nU9i3ZdBkRttWCNMWU42fCX1zH",
  "key3": "2dstUGstzEMFxCfUgavqMdtXVHL4YuU5mt9tJnQtoM3eCTK7Vmjwb9KGSDYSpePz6oduPyjUVxyGG6gaFGVQD4fr",
  "key4": "5DEot5x3mzyY2CKhxJmBqpSEPP1rnY4CmV86viKP6GdZFtDuqMjS5DqdpVp5BBzxBgP5H4tneuLaEvNbQjcgLBDs",
  "key5": "52a7fqT87LjqPheHBeFAuLYTV8K6fXuqBMBibXSpHhPx1wSt3yQeX4ptha7CFPkR1srsXvXsbD546GiXvfVn6sJQ",
  "key6": "4bYBz73NLhVDrrzB7cDYAhQh1NESezTkvRxLbGHZNa8E63P2uYK1KoUDs1XmMRpkzGqEwazKqh4tuEBkD9Tf53hR",
  "key7": "3TxiE6i2o9TBdoEAJVYKQocm1eubbGXPNcPxRVoZLaEuMczTi8r58C7mSExxo6f347m3a3EcsRqqPJDqrmZT4aQq",
  "key8": "KC5mcXUBx2L6yFiTbsfNGtG8uyXAYiuUeUuVDxjJWfDM4heEHswhEJTL5EASEUyg5Du3cpEFwRgr9KzCS74L2LU",
  "key9": "51v7bTksbKMEtDNvW5HZtJJEq2eKBS9sDYvfYnkp4g8TP5zFQwAeouGodNtatGp3cZPM7ijEH7QNFsgyi2XYYjdB",
  "key10": "5npPGR6svDgHakffKSikBSb4dE3f4zyCZ6J7nJ3dJiGPcaTeAb8mzGBeLS1sNaQtvGGWSdk7YVDYygXwUTCfEK6t",
  "key11": "3ChPaDF878vkZGy6Bvwg8nxn3k9AcQvDgEsJwJohM8yGbre4zswvpuRu2g6HXjzHJA8TRvjHiKQavG3yqwEbUCMd",
  "key12": "2YXyP8ihqfgJfEg5vYJt9Gyn5fuRnKu4sbihYX3t2gbQNttpVLF15rRQgedBWmbrQdzGeLc8G9jmB5HFDxhhVXPu",
  "key13": "zrQJdubB7ncmYR9paMB2c2V9C8f15ZWgKXXaFCXdM9c8vVv5CeqTqFhYxaKsWACNyQh3AP4qiinvCJYXMXNwHu4",
  "key14": "37duwU2xBvviW3p8mcCYTdLw6YPqUsbGg2YGJ5Dy9EKjG8v6BDn1W871mZScdgGVvzJ4C8Ncpr9gABHLqzSwcBWa",
  "key15": "4xvzPQxCfHZEURQRnAX1yxLjBNaAiJcQjYVUjtLT2Db5URD5xK8MPryAMNPgSyfv3Tfyg4psdrYVdD54Ugg6sTM1",
  "key16": "67GVb5qhTH3vFix8ojTtVbZSgxTS8ctUXkKFCrKvoC85QaXAUygpiMMPGn6z1NzcFH1LqDNUNBpTgrzHJesy7zeX",
  "key17": "2KbvVn9yc5ZJF9K1SBxNDcSCxG32dyRwmiuxykXgxSboTQMMHUFEqQHop6saCahuCFDd7FLcPfob9psBy2FaZkJa",
  "key18": "4NpFJQF3HQpyDK8hyiAiiZ645L1WUmaA1hBBwQDCyjv8otC1WgkP1vQ8rZeCTWtsJnmAtWf8mADQ4KHhyyrJTiw9",
  "key19": "4Xq7o6AV7udgJekmcgg58j416fU88AbMerghKdJvtYwHb9CLK6CS1m2Hmy8V4ggMKWAhCTGxjKDPtR7YGQ8dRXB1",
  "key20": "DU1MrADctoGqJ6268sS3ZKnDaamjh5SVVcaER7UNM5s95Q74MHjykSGS623F6o9PwgaM1EdCG75o3EHeYY4VUs4",
  "key21": "24rKLwShhWHhj6rcTEMXg7zpbm3K41SBj6iYq2ZM93sbTi6EwNqHABRywATZsYum9hzE277zH1J33Hw4V1Ch9Kzq",
  "key22": "2PaUjT3PWuVAmvP1UMKjj3edfUSpDGyFAqXYuX8y3ea1ybrJL3Wp5dYygCXaRZThv6gms9rmCrcmJWBwPhFyeoif",
  "key23": "62UCYY5qEepHqzLkMkWHv77TYSJ9w39dDxgUmsJ4CRA7BG6TQYeD8uHggDap7H1urnVTGe3124BjonpVpmo8FunG",
  "key24": "DYHZ3u3NjshDUyy81wBTXuh47ZH9seTHmSZPfpWWSt8XTZwxgmw7YTWNBEoP5LRwv6D3xHDy3LrVwmjfwCbP2cw",
  "key25": "u7RdLNevR8prjnv9t68vjZaSkXNeFwLg8FPjhrkEp26BVKoyRFUejsuDmT4LMijCeJTSwuvP7ewLkTtuS3iCGph",
  "key26": "2gYUVJDBVhNtZgEKzQSJtgWaHaDQNEzB7dp39EzgZWpvEvyERFoAFsQC7iRex9HFWbNSDwxK3MyJHSaZcT6hJ9V7",
  "key27": "Ay6UfB9GXXVJiXA7azHoj6xPnh75et6QkS1NckyLbrHFp4FzYeapVqDGNFTcyAhbWa14YEPtTbvRvBvRU3LsqPS",
  "key28": "3jDvoH8J3GCUFmgKxSJcEyho4mvMkedQb9wNi526h2FcJvxYaZkTnyebJtg6hay9ziLkdPbXDzhREwo6Ah3YrYTd",
  "key29": "wgGZACLHY6zf4bSJ5RPXgywVYxzgnpAovoTWsZAq5n6VasBW32yAKNSJ7HRh56bdjA3KAJpiKC1avYivaCX6t2o",
  "key30": "44NpaYaPN8H33t15SCj1nbmZCkr5RbwLSsfiinHjC1yS2FyYLtdQJY6yEgeHN9LFvwHv5WXwxwQEWjwGjBgCeRJm",
  "key31": "5D1CKmDT9kaYVZ17eiFn6NLXSutosDx5M15aNf6GBDiK5st3YNX3aRrm18aJN41MwvQ7AWXc6eN4un7u6gguZrB6",
  "key32": "4pacexampekM8Riq7TWQbG4ycFhwHjnD9MyaPPMEuWhLMNAfp1BrQPqrs5785edAukvqFJFmfKHq32rZjL42aLi2",
  "key33": "3oKR8w9sqKdxf2cyfdb43M2r7M3w4KmoCwCWQPsBZ4jmdcHGkZhnTe994kYKkdzdr4q19VSCrXxcUrNjcRuj4BC4",
  "key34": "4di2N7U5ymrvzmfH8W5C2w3DR4iuQocLPJ8nyDnAQitRSKrZciR3rNuzVUsVaAZVPaMoZH9ozDKojc11unyUep7Z",
  "key35": "2pTvf1rNkWn9DRrDHqh8oJFJoc3h54vF4qUjh7mPLzq11MJvaty9FW24mEoeEWykQaPngtf5Bv19QGxNz3USmQ9A",
  "key36": "2YrvRkuo6BEheps1wndQD5WmoYQzH8QV4qoHnTFY4mjD1EsnYfD9MsRe7HxiQH2msZq724fbGM53b3UGaxcB36GK",
  "key37": "2KbiPXzzgkoCqUzuDoxYNqpHXqk1Hnj6MJKWBvJ3j1wtwWq3fARu8fmDg5dBBmE9pQfLVaEC4DDQ66EUvM1HesK6",
  "key38": "5E3ugVUgjEWZoCCwwbaA2AVuVVC97tufR8t7gxuX9WsKT3qyZFcHeTwSvsSBLCk2zURDRKMQQPnwm78pdgwuL2qy",
  "key39": "2rJpZNrFRvkzHfPwRuqAJNMGzn58gKU9SWEKZodDB3iar4DBCRGniU9Cq9oE9hgAiprhMwYURXNKyWEowXSsNUE3",
  "key40": "2kupHETZaWfhi8wm57WiZFqf65LWr1mKXtHqguQcoJDZ1s7oqSqzVyz8umGxR5Ke2RB3e9fkxFVGUoZKqEUUyNDt",
  "key41": "BvPUbbb1EALBZCAQtdG6cYoM6dUkFoJFN5y5XXFALkXkn18PAUa9Epk7RibjvL1pXFpK1VJ5JXwabKJWfvCHsEA",
  "key42": "3ibXryMV9qSQ94Sbjb2kE7vE4cGRZDXjMSvZZ7sF7fR9rSQbYzJEjVWd9337vEJmkETDzhu4ZHiLmjmonHCxvw76",
  "key43": "48SNfmitgoxtCyJL2CokqJxyTKpcQVt5qpiZSSC7ja57oG1WLDUvjD32cx88dokKyChLfpN7mgBnezq5V4gYkZBy",
  "key44": "DC5aqY8bM5LfNW36ik5n9wGnpWus5ovCTw4CXpH8Xh3zPvMJAoM8DwDcgWZNdSff1UWbPBTHSvVVqHmz2z7eeXW",
  "key45": "4XjrfG6nWDx5TW3QuQcmqVCrxNw8cUbGBi3UULKqig6c7hwWg55x6q8WTjbG5Bz8ooSuNJx64ZRaC6HrRAG8qNqu",
  "key46": "44WoFBuYniyaCR7ijKsLVGVTr6v1ZGeK5vjuhSJdTKEJQFMUCEtYuEMJKaKZfU19pykpEgUrx8MRrePQLGpDCTBh",
  "key47": "2RbJ9Ez5C9rLmR2AL9bdjD8wbT3yjw9FXfUiyZ1CAZrCrT4KJxxibdCCjsiRW8WToqHLAKYdVZ7p1WpNT3GD4CsF"
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
