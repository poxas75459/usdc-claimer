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
    "5NtEyj2hCoqc41fUqaJgQTP6btbTK9ciqnTXLZNZHYYp5C2vC5cTSba2yVoZ2qJmKCcUqxGVn4C28znnnTJfwCdw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WE6mHCv4qoD9Yma6Hzf7XgwtcRkhfWrRtBAmNw3ppV2Zz6kKa6fVvACEgi3aWG2oBsaM4i63eGPqdSsfqGgWCf",
  "key1": "GVYsV6GAhY46TRRG2uNKgmQWsZVLnniBLK8qiaD9As7ytSju9ijUf3DB3hmiGDEXbJWcJeFgX83ifiqVCAC1jAd",
  "key2": "zpds2HVbYfhzMEDCWmKt6Wvi3sp26N5Vkm9NoSWmT3kaxwKQLgSpW3qQsbSsyHWrzjjFhGuUjaF1KGzJFfveTBY",
  "key3": "63bd5GNKkmwwRtKHGYMisdWyedDVK1m2ALzqS8PDrcibXbaNBFmW5fsBiWygTFSKAaNLhQRhByC6Y14oKpfMyum3",
  "key4": "5dQ574aRu5z32ec3tfizcXYZKZKMBSA2tzLkM53fMukrojN6NfSX7uRWCp2WubJeejjYRyAcmBKaQWyUVoDKMgN6",
  "key5": "39TZv3ByLdSVg3hWVKo6pCFzutCuUYq2tKvGD5m6hYxRxu2M9fDuhHFvLJR2KekzoHLj9Yarnd9pHRSfpZS5BSEv",
  "key6": "3orrtzzEJqWHRTDbLsayCHLBJn2rZs4S3cMvyFeJRsQzA1v2U9BMY1reM33pX9vHEQBiG3qdBjmWVYmKRPjeGzXT",
  "key7": "4jU7suDR62EbZowbA5MahHEiJrnPMz3hwjYRhgYPc4xY1HaL8rz27ZsMPrDLCPN1hsYk4HCo64wcoBGWMCc1aqCK",
  "key8": "26gbCcY7kgJHxpNECHGpdUa81FU1j2NnuqKcKcQqwCSPRNRokS3AZ3Q1Tqvf8KBjWgUxoG34hJVJaTp6aGfzzfwp",
  "key9": "2tTsoCgwqx5zNJmMApd1CCo3XBj78d5gEUrkNr19Gh53ZJxeDZt6BdA5HFbj5ZVe3TwTwVhRwyCySd8KN2fLPZ5c",
  "key10": "wa3zpwfEyDpRmNBAJcX6ebMZE9GTvPnf3gdTaLSUWegxr2MeT7WDNJSQRNwffTbDcxncr3eoMKiyzRUe2XSbUay",
  "key11": "2ayCmUEiezMQRYApEak1e4epUbpQ12vaqkj5ZGcxZGNwR8GPba1v5GVTpUVacf1iELMXzpuvZsZLxVPi2vX3siF",
  "key12": "5tvojkpqvTnCdEBn6DxWecs8qAKpvwTNBDvb63n5tcvp2LzDV331ZbSBJTbCQwQL5srxnu7M7YpAVXur1Z2ark8s",
  "key13": "4xJ6vSQenJ2mbSzswPxHUt3wphqVR5b6ikNky8VNi3SFT8EarboGNWugKUCopdHEYf3ziQcLbD4hPBn5TQmX36zQ",
  "key14": "2Sj2G1ccqsdfnGmxUXjvCHpwefMDCDzGHk8R2Jk4XJ7hMF1QRZ5Ca34PfcmhH9HDrYzDBcZsdCCcEK4Nya1pouDU",
  "key15": "2Kek59Yfwp48WeJBvRbqivrmg72k89L22MSvcrvLfk7MqvTDkjzeeE9cqoxDfC9g4cKu5GY71RU1XxobzUomY83X",
  "key16": "32aAry25w1xQdUZ2L4iJozJxETb5pWGHkZqefQyyxfwx9NBts7MSqAj7YHcnsPHdQ9FVCUt85qEaowBoJY5vxb1q",
  "key17": "4bHws9xmwmdYy1fqWLsckFBHFFWsGK5JcmPVXmZuRobUwFdmNcmfYyYQq6b94qqutCSD3yA9BYos9Kg6JtArW4TB",
  "key18": "4mqhskip3sVAc3SUxRh5ApZPL4YhKNbBHmdRe8xjo6D1pV8yCjeWPa89BoBHphCqeSZ6RZx7Gi3hPyRo4X2HWVmu",
  "key19": "14V14eqDwt4ZBKNkrtRn4KoTz4zVXQUpJjzBiLqfQkR14WSQCo6soWp3dmnZSGqBcm8wjNEK5vfCXG9TAGkjxda",
  "key20": "Nmp3A3x5ioD5U5YjcNSZDhsfAqdgtgt2zjQtWRSyzWbq7V12fts7Msqu2bKcfuVzDwFDgZ5ict28oMTP8V2dGHN",
  "key21": "Up4jSNvnVVQqZG3VE2XEPg82356omfziBSTvLjZZof9Hx1NPuHJ19GMguBqKkLV79QzSyXao16AzgqMNVfxhXXE",
  "key22": "2frkxXDTLwKYKC5aEhkMTMGeCrYdtQiGbq97Jm8p8i7GJNrzmxLJTB1dXjExQAb2x28Q3XjBF185n3AQiA6mZrya",
  "key23": "2AQciT1X1VVStCP49JDfxU6QpXk3eZRtVWZ9sczJiLgdvoQxJKWQ2XpiKdpo8VpwYg1jv4pEw6Z7uxy7QfAp9rcd",
  "key24": "4THWvWJHC5ErKRH8HY13oTLySEmW2eekDPmzj1HpvDkDTsFb5Xn8CrTLPwZJtsvNKANYSnTwKm2NCryBTy1bxZdb",
  "key25": "4GvxW9SB4hXHAjZwhWtJPwfJih8HVmVWEtBjpwtFj1ykJgjdCZMr4FjEtqWAaFHyZreUmRKdveijkCxYj3FwEQyk",
  "key26": "qXLsJJ1nPtC9WDuggSwJVa9Pb75EaTp6x6Fsz5iRnkYYmBWoCuegDxDQUckuXHLoAiPzfDMFBReGw3u2Fj57Dx9",
  "key27": "2VqK6RrjimJnWbQ8vhQg6MHH1iTfvhVGGenJM5dTcZccrmAhdPaK9q9zffotKmiSjnoCg23dFVyC7Ei5zHAKUtGn",
  "key28": "4gNgeer4tEVRX4xijBdAL6AyQHFXizjFTySa6UbstrAHiQbMCKPxqny9uuUum7Yw7fZCow4Hb76thP5WoF4yfpVU",
  "key29": "4N2BQzUrV23gRY55Z5LWGwLDmyn81Mn6Cb1ipjKBxgymaKtNSqezaMUKKWFMz8mVG54wYvgyz7wHcUoq84km1MvS",
  "key30": "2LGiPvzfCq1Xj69CxUvfxA2TbeTgPG6zTFqcYcga5PYHeuJVRjKeMUvKZxPUgWVf6vK9CnVXfEpWs5WfAQXFasUp",
  "key31": "5mizeb7osaNBZpxbJaMmHCqqkZkZJZ94cJonBgBApJq9fzdYaqL39sD1DsjFy8pNUAvbCg5PoSTJo7UBsT3NESyw",
  "key32": "59XUdmcw65e4AErLiYgBevoQXwB3sv2UUCvBWZSxrQKczbWhdr7wuMV2FVmFkKqa9jDFsopdiaJKtHGuV2VVVtxW",
  "key33": "5yYpi664ax37FuGPiysjXaF6bpizrpJEV2XqNeHmGXqio6Td5DFnVN5Rm6s5YFjB1LHtSXkq8gnCdYpUNss2sFUM",
  "key34": "ZzKhQq5s4udHsKU29i3FKW3kxbb57JD49c2nFbRtXSuuhnPp4XXAJvswkCYyhVokFBVsKxkAcCd12DfvLvYdgfJ",
  "key35": "n4kyNT1VL1HJQhvUq77YTvHEx88W4FvGZwGRHvUQyvr7LWXAy6qeja4e5mymPrVjifNBmnKWBbGarkhoJPYLcEV",
  "key36": "2t8aw9WJsLbFewgzpFdRSBFmJH54xKLH1kxBQpNDxAcxCD9bQYC4nPyA4YDeKvV6QSJHYrNNzAt5aNiR9uUZTts9",
  "key37": "QnfoQWkxpRbxjMqT85WoCoMPcsSwVLumgXUaq77zPgh5ERHm2gJrCUqqbDRDwaqqfe9aUMqSasDq7cVpUyjmfvs",
  "key38": "3ZkP7DJVt4NFm8bQLXhsh2PLFWDqDNxb7TRQsggsc61vnNscj1zSWv6mRULMmJL2FKeicoFZwdMtT8JJgzH4i4nY",
  "key39": "pwawJrvQKKvN2QcxkJD2uWMg9QTYpoEfAwBXzyFRCQLk4QHhWyYXTUYXruSqaMdGH4KtbzJjzjvsj3tNRkR6qNb",
  "key40": "5Shbc7P47KYTH1dTvNZK16QhJYTKfsPhsYGYRXPnwsW3ExFhUnsN27Mujy2Qa9dRqMC6d7EegiWetbuAaJwaAmtZ",
  "key41": "4ExGCwWHCVMFwGHES6u9DhTrmoQVcYiTokv9mYjFK5pfcHz87HL5Gx96H9vj5GpEfA8gvHJteRwbLqw5u5GQa7cj",
  "key42": "29XiwDy4F1zgNM896S627ckaoHbrHdDf8kTRthrd1E3nyD7BdJhaAqEStXWXovnnxBSMmubd7GcNU6MVBySSHeZK",
  "key43": "5cv8813kpYu4P8cWQwheMM2B95addnWwwY8e2FTbXKvBAEWzj83FFsdMtDeqxWiH32KzRw38YMXCWkYGUuqhLGCQ",
  "key44": "2cBiM8qyGr4KSaoU2YQvqphxw66fSXd9nfi7Y4h1g4QjUecHdDui2tW3xLvcagjbJFCa37LAq9oGS8WafCanzFdM",
  "key45": "3eXDGdff7iA43mrAhVAyW9FC5NgHLRGcrXVYoX44o5G8yafF7xJMueRBtAwmSxo4r2t4ZFD2oeZCyJsSn8cDFURu",
  "key46": "5Wk61uDLaWTdzUpthHyiXGbFtZXZuaFLHJZRuD5Q6x6NNr86jrCzV4McwSsjafJE9k5nx8seoWCz5GuvdLeaLdCY",
  "key47": "5Zy7k78gPQTyRVzUaNXeMiYFpyw9S53vfErF55MCTPKQZi7MTnzdNurY5UjUPCgJF6XVbrgot4mbSX7skACiYtQc",
  "key48": "5qQvZ9Shx2CR9auPXLZK6ELC9pgczgmC82C22yPqzpYvPt7jCoFYDms5ZwoHnyovHV6TXqCxhrVtyuZvj8RUj58B",
  "key49": "5Ng7kUQrXkSRkyapwoaE2xEEqkTh6BHKLYs77FVahkakYbbDoUki7gYCTbiPmSJjjhRErDWrVAgYicTRKBYDMZYm"
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
