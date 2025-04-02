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
    "3b8JYXsrbQUTkrUKiKxgXCMNntpZmPeVSsUkV2PEpc4rLTq1C76SkpYV1ffvHSYGbmuNoUbupu4sJntcwPge7rhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SaZ3p7umYRuN9Pgqr7b11QvECK9nAMuRJskNLssrvp6KJuaD35eXGNKT1m7D9CGM9Qha488bFHf8fFw3jroVb4P",
  "key1": "4UR5P63dSddSqNvbjHJ9d9ay7iG1uYERDnWA3LjS8mwvU1MNTLbmwBBcuFsVAEkT1g7rnNoDzmb3Qfgp1Xo41D2h",
  "key2": "4KapKshcJECk7SFJJFHB37R9UGTPD49Ytxxyhdi2ab7xkRZc4F5eGLFfZf6QyBLMRgHvuGPMu77deB7cGHhdhUDC",
  "key3": "LM1FhL3i65voPEH8cFuw4RxQVQTLKyZfAqNH5F2KKrjcGx8c2QYoPmckDz6KF6rXbvkNYmGgYAJ9XabnCc134NA",
  "key4": "2KoizdutxEVi5JdVLktCG4UugZiyaKg7FGrLzWnnHppQ3J542KQJWWQzxd4b8XajmM4NTmBW8T6MPS1aEQUR3kKb",
  "key5": "2TR4doATBYA7HHhbrgWfhWWyk3CxUt48oRLg49iJRNRtFchsPHuLbQGsADePrKTN5UXyTuaNoqZMEaucHywvLVyt",
  "key6": "35TooeRL17Na1K9v4B3G5xcFrDiHbGjm9LXqzWW6R54YjowPsjKxJGmYSoUsBvAL2TYNohGgJUp4e2N2NpUNNUg8",
  "key7": "2yCZBspPwwYwNdegDDtSKWj4EzZ58PhNtaYiWHJHiEjUQLJmFVu87wGePvrjQDF7jVqmssZz8Z5GMaGacXkTxD5E",
  "key8": "2YXvhfJt1ViqNTyYXkjBG8mKNuxvgEobX2gchTPhuiZg2vLLNiy9yXvu2xRzAmxqryPvkiJodfWFq1D3tKX3PLKt",
  "key9": "4WTvVNFhrFePkZwdw4yrHEXZnUxvR9QSQT9nRJooaQLQDqBvVMcFo6aVMVvBZpTUV9HGhR5NLDfABbgrRocVv7Qg",
  "key10": "V3vmqD7Wk165EJudGmMz9VftKykELicAwLDqFzgjYTdyws2eXDVPA74GdsaQRtCYXVPRznx1B3Z5FVv55NyVs51",
  "key11": "FnTbeAjEgS9SFG7F2AfU1wGLsUTYM1Cr9BytUhw1HgPKPaKLZeQ2csoHL4VbGWSgdYeA1QcCMYhT6aKPew4qSf8",
  "key12": "4Svv3814yjTt9SAKaUF8mvPJVCuErpU227MbHB42GxXKRdNNxg2vf7utTjkgGeSER8isgxzVbZhk9rm2pLAA6hVU",
  "key13": "3N9SZfUdz7BfXxAdaAvq8eLvzw99EZCuCqMqMB2wuPSUZC1mgAc4aiHTXscsy2gKZ1TcvfR3puRpQtE9NHGByA4w",
  "key14": "4PDNaNhdX26h5T38Fn5UwDrDsBB9ow8evPSY6hU2wVqi1GE6CGv2y5pre1dtJGh3ZXQjty2rh5UmGJtre1G7Dzah",
  "key15": "2JRDP3emy6ekLdRRBUCybkuLUqDtnsu9xxUguK9jmamYHjKJeEgwQG4A7gQXGW2jFDfNcRSjvRKHosJfwurBPi2s",
  "key16": "5wTBhbw3bp21yQEKVLzz7WWyWBjunU7JTFQgNLaVU3RkTtpQ7p5qmDyAdTim2Scefd8MJdEWuv1zse1DdKVyLrdg",
  "key17": "33YsEtXkjSfmK6TXLJVtT5fe7ZWHxT4azkokePwSugsM8tnqusHqgUcvnBvPfguXLshayJi8WNcCt6xKMGwgDy9f",
  "key18": "3Hcfj9qyvJ68qhjxt1xYjyCgZspDgCFqzaVHf6ujjpwbfrm983SU5BN2bAbNNyKT8hbuebRw26fPfVf4CVzN1d3V",
  "key19": "4DzDa4jeCEZE4xhidqNEHoUJqcFuQg8e4n3t7E5ELaYXr6YZ93DxnrQ8DhbX14D1dkQvayz7PZpzAE1QT2g5yQqy",
  "key20": "28uH2hthTCdUM4SqJ8L3f2fNqGoX8ch6FT9961wntVjoDh9GWywMTgMaohFZdUS6P3NmdrEBSM6tmSr4TjWUbURz",
  "key21": "mBbCVqu95HwPBr1HYeHYq78r22azeifZavkKmuVWUp2GwT9eY46ZZqgmA33skxyQyRX3hmseGGVhMeVrJvYtyRs",
  "key22": "2NCmyzezaLhJhfNVAKTMbeXr4KqXvcA2u9HTGjsKqafjDazLjxCtYPd14U6qouoZW3TgfikgWDAXt4QpnCYH5UAb",
  "key23": "mQo8tF5gastpChZHEsqdUSkCmBquxL4qMWbXgTwV4rZGv1aN8pRuDXpZWZLnkYi1WYNAWYSEeEZfTohRaUSfcea",
  "key24": "4a85wVWMwJC3hXeR7dPCBUdeeydiikdYKw7r1BGNsvcvvQ4Q9AbayWU68C1TmYN8AqJDRdnt6jCBGehxDwnUbJRN",
  "key25": "3kCTCjZNSVBmCJEwPpea4msVeicJtiJ414Lm54rGCSLfLhsep4ef2ZXG9owpqcgKhXBbeUqL3Y6MBayXa1xDtK8B",
  "key26": "3DxkT88W6tsBcRKSj1bHBZMEtcjah5BxodD8JvbYF7sVMPG9ppCoRQC4YKFCbbRPJrPMVc2exMn2qKkXaZp4ZSY1",
  "key27": "3VF58owrjFMGp1ZTnDJA5BjuZwmdajEweDsZPeQk1gMyRfhnGc5TVyh7JMzhYmCRBdDLTh2zUHoKsRmHfPQZbuft",
  "key28": "4fbUpvTKTW8mokCLcLTEcwHonihYGxgxTiuqCV6JKci67ciPqNDeBUYiqp58hQEtAqeL3SCZprYaQgj2XVFx4p2A",
  "key29": "3s9xjxFQgedickDrWs9RH6njgKmMvwh7P8LFGvGPLmvA67KFmng8cxajK1E84jzKksqkX9fpgQp3y7Hob5VCZxr3",
  "key30": "3o4rbUxWuCkRtGwJU4hk6SxP8GVFpNoPT6SHAstfaWsiVqiGoDZkgrTFbw81dwvZK1hTMcvmCyZzGzfBM1HZ6nFr",
  "key31": "5Zjh7zP6X1pjgTjaqFmhZyRPjohnU2KtWrmmcKsgdyiCRQyJWfDXKLk5zfRqbnwiduWvAtXYkFMPKLfYoTxJ63Eh",
  "key32": "2EZ2QZZhFN1cp9Ga5RYajmkaRUSEorQxKCETFYUJaw1uSUoC94D43yxSufSePVWx21ronUBEYUUpHLVN4Qsh9xMK",
  "key33": "33ByCpKFEa2S6AHbXEX35CnFpMc6GzqBnyggCgYGjcQdmoKsvGqBatp5jqFdPBkEbCBGeeEADBnNr8GbY3wPtKE5",
  "key34": "2G2VSuEn3eCU82WfXpRQoFkWkMUJRPA7xWRdR2c24RdHNtUYP88MecM25t9ApUYyPrKJckGQQ1cSQK7YpcvBRiWF",
  "key35": "qrEyBCMSfspt9tvVhsTCbtCQNZtWBbLc8hQVMb4TW1mVtkKx1oX6rpkz7nVq6pWoSgTX2i5DqZbCwDMMzJJLdgn",
  "key36": "yGvA7HoKgHZBT1zSUV1mGxnB3HgpbLexgyj1Jywj5xftZ6gdtLmaNwBfTTMFMyG9FKZrQ1WhQjnzD3A6uKQQtiT",
  "key37": "3zwmAAjv5KXs4YYGrDyz5JEJ3YSsefwLsutkTAU2vXmXsFh62tqrapDKkPR2butVqqsQvqtyt88xoZbQW2TyepeE",
  "key38": "46NNKjRg4dNocfK3RuDzFpHe1bt8nkJ3fxvZHUfrbA2TvXJxQhVMDfYmva4SmVRHydd9e3Q1gXWcPTYS9dcTh74a",
  "key39": "2wEpzPvL3BVztPNW3Raq6ypguF5hh6WfpZEJAeLbgRvB5Uzrm3S7oYBj1fJKi4VWBPNJ6f2R8PuLGF8my9rAv8Ev",
  "key40": "ican1YaHj6eVbP9qE5ii57Um9PA9toAbEnD7cE5Yv1zrLusaaNPo2YoDrnwdjVezh3Ewuqw7G1636r7MjTkRVFS",
  "key41": "48ZoQyWBxe4KWwqeMNYwguqyY3wffzWP9FWsqszpu2gZYmqx8VctD5sZXXYvUnfyuUeUoU9kPnvh3pVg4jynEbk8",
  "key42": "WEnbfVjx1rb3JHCLAVjSZRj8xo6TSmqpqjZjMaycfXb6dhS2nnfxemXQD7jXcJu7rKTjPErgwFtzjtPPc2RbWjU",
  "key43": "4spPJ6bj4RyP7Gc9henxCrE7BCAqnZ559YGtEE2a5So1WESDDJmiSwZ12QqkNSGY1tfAWhKxLS3ge11LNaewM6rC",
  "key44": "4pHr8LciEMQ79yadyqAcfiiXPVUA7vZgHs7RukEkBTBvRdsM4RG4gLA16k5yBHLiBQJ8nx59nHGy7c3QK3BSxekc",
  "key45": "64HaKsgvR8JXcrGpzMHzPNrd4FefKfRZ7h1Ne4ARZiGt2PwaFZ9FTcsprH3aLEHQH6MpfjCGHzPc4e1LjWWwQEdE",
  "key46": "2a1pwGKKPiMXv7DRCCsUfMXx7pk6rHQbMqh3Lq4Qo3nRkbyPNBmnsmB55auUGFiYk8DAyXqkc7rGtFx8jaRtW1Ww",
  "key47": "57MhNyMVAqzVJSC7DYSVaS2ZRDGiWmjxhVoCQmsn5p7z39UihWW3kBZyiNZtfRrF9EYjN72H7GWQUgMFw2btssLn",
  "key48": "3WgzsK58BzjPZnSnT42kzB3ZtrrFnkMqR9JD5Kuyybsp8apgkqBgohmvPbfjFdWQPyb1ZyRQysWtyCngrZnGQv8P"
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
