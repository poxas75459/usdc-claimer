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
    "5rw65FrUf1aMkDcXgirb2HA5eMan4rSxM9hDn84msPULLR1PR3Kis7xoBiUwJXX1NNikzwxAjpZnBaTt5vmNsk8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GR46WkQhJ65rEDhYaoq7aekb6Gjj4wJc5BBovSHGEHxTvJpn8DVpCvUQC2CU219fy6Z8c8vZzGJBapDN7zZ2TV6",
  "key1": "5aKZNpFqSPbVPhiVpMAfBbAygFSyLDVQUoxyWhaDLj6gxwCJ64jcpD4B8oi8rB8RNVxArRcswoVQ1qiw7UYwpBA7",
  "key2": "62KQdLjVCQWrU5urh93wjWAe6Q5cvSrpRExipkmGAHuVKFCyobEkX4ZvPAPAH2676ZNsivNJmzTWSED1wt9h5Wq8",
  "key3": "GtKXg13pRonpWb9TBni8SGji9E5wEjeUMCFNz8hYR6Tcd9UhBbtgXFkvHoxxvZxnUQmRQ3EK3tTniu5FSQecNkv",
  "key4": "3bVKFFZ4WbbcvHTnAYNnToty3FJtk4tn8kK5v56yVdGDtbrqpxR2HxeYkb2q5ZA1tJ8X3dMqgYKr55W8Ly9kurM5",
  "key5": "2rGM25btYxEeKUGx1XBpC6WCvnhVHkW3Gn3v4fHfRJV6mr5fGux1PZmSUSeb7HFhJPKcBK1VkzVsq85WW6Uu8Qn2",
  "key6": "2wKJosnbvXyyiqik2eNVE9fSW1if6TBLvU72Cb8zn36eNNCRw3dAWbxhsGGbbYjj9QU1Bgp7p4oHGREWYqK5Vxgt",
  "key7": "3myk4Txd7RyA6mexHY7gYgVAuNWb8ec12WhHbkegm2E8RMWHo8ik5jWeeGw7grirFuYkj6BuCLNNZ5Nbc9tt3GtF",
  "key8": "5TuYew5Cx6RuM14UfaAJW93wdEGiCrHeD6cWZ8mVckfxbnDLdjd5u64fVvtkgEFLX5yEJCvF5zZ81GCXbmmPSHh1",
  "key9": "gDJc9Ytj6edtWMkBMzPeNhSYjYp7pmWtmD6eab36HqEZ8gS41eLm6P1ewD9zKzjrw3d4wKHTWBPU24eoFmNBb4F",
  "key10": "bozuhpmqJHrEjhNaoGo7FAoddY97CsPrzaeyD7w5kKvGU9VLpP5cxZVCsZfrXgLD1svmYygEmng4q6Gh4zgDwyd",
  "key11": "5YgKsSoJmkVEWe5YrLBiR2aXBUCzMiQw7ZsNhgDNM9spMnj6awTHGBjTdDetUaZETg8ZptMcmK5ETB3GGHqrGKnJ",
  "key12": "3RibTzJuUhz4ir8GJZX4omQ2Ru1wT6wigcx77SMzPyYgTXeaNL5PXDFEpTHAE4mEncpC5JfwCBUo7568pdPxLEmN",
  "key13": "35LGKP6Xw8ZhNyVPX1NFNuH1Q1TQ4kSGmvwbGSEBg3EdVogXSH8jqTz7atBoHJJ4z8pjfNs8e16wASxNBGV6mYmU",
  "key14": "5Z6ZqeC8VLem6SheBfV6DZPkv5LpKTpd4BXRNoiKi8QTWQAQUUEcVpqPLDmcZvCmBZ1xkkTkVpg7A3dcYJ16x8ro",
  "key15": "35debVqxSzaWUvt9D9oEMKT4wbeLjX7s8EYbAgBv5u9QfeNU1zHH3Qx8mJiwSYh1GPKdXCYXmChu12h1HSJA82Cd",
  "key16": "4biE1Ut9LQER6tXyMHBsEbZzkpdEoCDWXUtnYGt5qTZfFXDr2NhmSg3hJ9izaovBrdF6rD4mEECpkbHeca1KKLHH",
  "key17": "3xQApEU6UH411V9oNeEu4fNKyeMSYLkKCd1fwSopETTKLWWwV83FuftT7QD1oMzGHeU6CGGRCc9R4wDYPvm3WgHT",
  "key18": "5KeyFEtYrvvL4TEPqcqCJ4LvPabc6sT8WVMEZJ8E1JU8nN7EyukFXPRLPEQv1guejBH7kkT8ghbTaJsUCrR7xMps",
  "key19": "YQp49PDkSw1cJA6S8avWsoPyC5XbUaN4VJHyZ82E8TeLLWzGjJgYxyxDJBj9povjr4rcve3A6F4CqyRDjaPfNAE",
  "key20": "B5dApB4EzGB2Yr6T66QgNW6yhfRokat4o5xEtkNWXVfk2AizmM2JfcXCwwAZJfpSznuTciRppR2uhGceZV1WUxB",
  "key21": "3c976aLrP8uK56Mh898Dv1qjG5vZjSHC8gdsEbKqSfx5RTeppAtDB4pmqea4kZmSCckAvoa5CQC82gvKWuV8Evgo",
  "key22": "2L5EfxHvw2rdmpKEr5qtykGH7uL7RQShdv3AVumNXMdRVFBnrPmUY4Sy9RxzBHQN9jJDPzFLPMLRfi594SKvxSq5",
  "key23": "5b2kjn3ZAAhYgbXrawx8UnLM6rQibmSfr4bvmtxb5Y9t3T6VhCvd6KcwUTQTAcnXmpDn2nSsdidC7XroH7XMgi1V",
  "key24": "VSzp5xdHTpnHoZkzTpjVFNqqwn8LA36ZGM9B29EznnGBBik3B4Dppaf18LgKJV3naRmz1mmPZC7zNUFrocecv69",
  "key25": "2KZRrR2khkTj9CVFn71kJLqwQkmmEQMAH6bZSYKeC3c89BaQ1GCdMxzKmzd1zJoVjGmViDX5kcnmmf6xXGpZ4XZv",
  "key26": "2j6ahuJYYSuafbcCQvLQR1WJrtWH3XxnV4VqKnS9KLVpXWQZoCuvNkVT3yLidoWeeH8y5CQYnz4H6iH6XYU4iV4D",
  "key27": "36xHnNqJUd1aHmJ4UBF2VW98fChTic8MmYUxnCDrdFG7jrdS4bjG9Dd4QZeXMSjhtrPEjMDQQ6xD1aRgzwzhCKW7",
  "key28": "3fWU9RvKa18ncQFXq5rGU9C98HCyAAYEhSazab1zk2DeATBWwt8jkSCCNmed2yKybBDhdNN4zzY4knd113JF7KEy",
  "key29": "4CQ6X8FzWJqWdtVQGSPPGsvX3EQrCKUkSgtv5aQ1Tvxb1ZDMFWAW9Abs1xZW2ukjfzNe74pGoYMxpSMohUCeE7Xz",
  "key30": "3Q75bQ49Gjbxm5WSCbK3LPVao4pQWoaZ3AmMtZiwg5yknSQuFCUxJsCi4F7dKK5y6y3h9Qo4iaip8ySCMQFbSgiT",
  "key31": "43RdnVvkKFLVVLVAp3t2QxUaC5zhKuvkc78NNtky5oHsfrSqs9byCDtfUVXPiTyywPMkaHrzjKKJL5aNZX5ZB4VM",
  "key32": "4LVLVLW4DmYzEwtURJyqKsnhMv5ZvidttuMtyer2CkAH58vZmtNbwyfasYwVdtxq8EomcpR9WNsxKUCgLvFpmfny",
  "key33": "4o5DMBXeCTAaqUnR6vokryAWhzcKKAfFptUor3kdxceYEfthyqtBPHoUCGgU3WGsU6yLZgfY8uPDDFUJ868punhE",
  "key34": "3bprJRZ8TSe4eXKJ4e9tVgkRiTEu1TXVzfCxSF49sKa8SWtet4kgUh8hYNbiAyMhM5kGwT9o619m2bboHVcczsMA",
  "key35": "3UK4XeekyrCZErWJPZhEEGdDDWEno23uKy1KDkwqjh6KMjjbkGdBXa6ASao99X44dwuzjSzT25gWrYvSYvtuqW4p",
  "key36": "2ScUEfad8g5DNVfYmH2Da4vxUWEVUa66fYoUaqSZD4gMTFhK4k3y1xegLWS9v4r7wNKNbrbCjWYLFL88dcUKEaoh",
  "key37": "RKUJx54neu7pvFRDyTsuk8spa5mZeGWKa6jWgTWDnL7do8h1x8ibPGrP6Fozzpk3SAzRRrBiPpGGU6CtTMdHApj",
  "key38": "5HrP9bvCaq28URDxBnnm7A89s3TAvyC4KExJN9nsJrErpdms34U4x2zkVrTS5C5NGj7h7dhCamy6VDwq4c6vKHd1",
  "key39": "aRvxGxSubshaLtNwYVhRzG4SXMATc3rubuWgoErif4SvTZXug3zBZLqddNGb49fZvdVwMbQ3dMboCcsQbKrrqAc",
  "key40": "2TvNhVLbswy77ea4NXjkhaPepSKwV5KQSSdcs1dvK7fWTXyzXXYVY35XATBKjn43Vy9waxYuZQDdcxUgYGzusUk",
  "key41": "9EsHsgu7AGgefmVfFB3Z6YAchgUnjPEDhbBVXjeGLHDdrynaWiojaqy3TPo3x6Lwd6KVmUyAchvCNnxqxCkPo21",
  "key42": "5cT3SrtHfJAvXV333BzcRfyUwrDvoZCEPwLrYb396FDk919oLvvF7f1UqhqxE8obMc5NbLfFnMGcCBksQ9fKsU6h",
  "key43": "5sCGuz56VwV9CJ4qNAZPjXft7kwAx2xRqztvSHSoBZAW6Y5kZsrNiQr7BfRYy5FSKaXxpTwexxxjuHGZRYDCwu7S",
  "key44": "3PZ2XyeFg12JWkuSYcLwY1aSz1CtdgwkRddyb28niT9xMKh8pXQ14hdyx4oVutM3qdkRiKMEmM4La55FBB589Rsz",
  "key45": "2EJkoYQtqfTPYv1CM1JHgmmbhXrr8kjf4jCZuwTE14msGHFRSK97zqFUhd9SzWwehKd2umN7bwdYo79pS67doXB5",
  "key46": "3wRyX1m6mSDst78kYjKH9V7YznwaNfEBttg5Q5AyTWqo9NsxX4F63qB9ZXMfVk1PhAzZ7qxWLcgthaA9Ho4RKbdk",
  "key47": "umDMKzYm6dFfbE9bqUv7RDJLVvVhCbfHBwRdm9nQBsfX1QJbVNJahQc9dvoJKrobjpU3CS6F6DS7NUDXJBLZsLQ"
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
