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
    "3oS7kvobuyvbcxMRv76WiePEYeeX4AWjT7Rw7pktgsC3UuyUp7RmuxPUWeENdn7sQeahhreei4adwSgp4Mq3AS2Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RA8DVJgoxgGMaqxLkYon7a4wnJyKYX4QGFdaH8yg6qjfpavz9vkiuGJJ2V6K1GFbfZsaAoF4tfTJuC6nHPBLnh9",
  "key1": "4oon5jYo2abL4C1AEHxnGQjrwgWCDWVMTmGVqapE51QZ3Sh5Eivv7rdvZe2SqfHy7AxNMzT83Pshnyr49F4fbA97",
  "key2": "3TKQn69gh15XgAuw5aPuv7dSHPUPZJTzbYMud69zJdAz4CcKuAvdEAARgtU2wPPfXpEYEvN2i2JmwQgU7s8Pornx",
  "key3": "4y8PsVSjYbmznEN5AvjVq1CosuYFMBKWyFoBkuQtB2C2J2sb7EVNtDtmt5EgUxRpJR4LoCrx7PZLyicanuNagSfi",
  "key4": "djACdJv39HRwo2bJCGHbXGqoQrK9rouniRvgA64osJyajYuKXaHLwGUVGGTU6d36qYZQY1GDtNdBKnt8hwUnwE7",
  "key5": "3ro6Gn7uQLTv15VEpaxUApishB91sYyi8YmLGQtmytXaPXpZG2VaKLLmmjjViVk4xBDHk3joWftafGBfH6fNAx5F",
  "key6": "54HJCvotQftxvdT6rkhdXGcVohmGJBgyRQHLWCB1LT3FsQwN7yo5Gh92moEZLEwvbTgZyAqPvG9U7V1s5HDHnKnL",
  "key7": "62oi5K4iUfxmRcJuWakdoNrKJX6xoTrsJWApNNYPzXMCXGpMXcLodXtHDkWriQQziS4NAtRRYvf1wm6s13dLBrin",
  "key8": "5nK3PyK5u2whpoAkKFPjkFATFYzADhLwUPxtBAiSD3Yoa9oHuPbF2Vbs7LM83PNfuBbaoMkeugcYoYbvX85oWURg",
  "key9": "3hybwmnRqn2JYeHSMtjRCdw86QBp1RkLgC1deYCTws56zsP1zYf6HE6KJvNqA1KWXhNxq8ydzJvyG4Cpcss7M5Jj",
  "key10": "2dKYEy2hoGFYWxYPAoFLkxWjchZhDB9kJdVwP5QJDnn2j4gYSoaAfY4i5cdh1wqmM24zHeHVn7UK7MGvjGn2tRoD",
  "key11": "Qme6g6ZFrFfWcmSrxU2n9mD7gi2gbnvrJ26FAc9XxgtaJYmRgkXgqYbUDcupUCJkVKBnsTXwu5pm7gjLWVPpUKs",
  "key12": "32wms1AYwHjx9uMvs374zVTWdc9SpMFQGX8zpUTsFrEpG5xcsVCKfXmXCbste5KU5Zkxu4MGnCF1bj9rBCsoEwYu",
  "key13": "eBxxDHyW4i1PrWs19DRdvQgLsv3SjqAYd956LHaCvNnu5AQrEG1QfjpMwKqSfadHW3T6G4jSR244628cP8Ty2Gf",
  "key14": "3eb6egEEB1r4c95ueLrY3KWAizd2FJZCdt6uVHKDP7XUdBXPBJm5bfavqpCspmB8MMP2axPbHQcHaSsDLkHv4UVn",
  "key15": "5U4WLSjfaTaE2fPDz2T52PkhHVdqU5jJ7pzYNtF1MvAtT8FfwiLqV7w2V6hsq2azTb4a9uFSGUJFytceHiXGJh7z",
  "key16": "2TdSscrhu3c6mWLHqGKZAcRnxkRbns6apgcmsPtSiyAq5bPUE3m27UeyAxJx3CEkCqLnVBdpF8SwGvotm3MJJxoD",
  "key17": "4hPNgJ2Zs6eZQQkj1rZNtjGx189Uzh8DJ4JeTEKXRkZtHELZjgrv1RXvtK6EPJsAhJ4R3HW9K6v6diaRnKzumJro",
  "key18": "4haKYyqARXnKpZY3rwAZ7rxugHQ1in1ekNTYwuFgDzkv66Yz46tj2CSSYKXMKKcunPvyYDxMvzPLoS9rvJfAmZW9",
  "key19": "5WwBfWKzNgeianpDfwRyv21MVwQvxUR3kLKY8s9J6HJ3Ue6ZEunBhfVFQvkkm68ZmEejWsoEdQJLkup34wBEjcgP",
  "key20": "4FcLHECpZ8mMFEhPXQ6DPx8Xu3d4Lg9WTkBwNDUUQQLooPrVHncjgZpDRSLHUzn22WPqZrXXTZ5b9FTihnNVn6UX",
  "key21": "58MT4vcvnjCCzt8jqjriWu1FqY9WHu6VNcgBD4B5gHofqAav4CdA9qWJ88JirPFF8EnBTNFYV4QQtNeKBqayeiVk",
  "key22": "4jWvzgj7HFgJjbSpn6MHVVxbBegxGcopLRj51tXE8bbCwgMP6AtNjHPfMSBpkc2RBnX184DfBAh9umS7H6PNffEc",
  "key23": "vTpQb1B1TweAEh56i65PGFhgdpbtS62o5q7eqZi11pbGpMSfASPwxdciooUMdAKGcmUZcBztFbLzNBwTtDLsyuM",
  "key24": "3VqnqPEE1SVxMZiGSA3S8cXD8mjKG7SPhySrEzUy6X543jmxuZwGpUGSEYDbxXGh1WYz6aXEjjRoM9ieMqRQzzJF",
  "key25": "3Euq9fH2xc6vRn9bKyTKNHk57RNusWWFQpNiJfbw6DqtiF7NutfRYQHunPVv8ABZq1xVRHyyR1Ao64X9q9JDKSpL",
  "key26": "iHUnKgUMc9435U2uu2P9xGTH2QQ8ukwxzjC4eX9VZsmqRJLJhX2AqdgvvY8HcYTthshEgPsgXZ777CWrCN5rPdi",
  "key27": "2dciKsVWa78NqSghAHBQLsqtkDtMH2k9EdvtdDc6J6W8euji1wDU1HfJ1xzTjGXT36gxv1UnDHKKy242eqyWkD5o",
  "key28": "K4JkWvBaSTYmBzpsrgwGAt8Kg8nZ1ot4HAY7Wn9zoaa37uXwcirM8QHhQAcT7G2NsA3b3vZRrXtc95J1AJMafc2",
  "key29": "2A7FtJJsYWwLf6vrYQGkgYtV4insGMHz4zZQoPq6q3fhXLyjVXkssanfJW6UpZrxWrivtfm74wpNCJDv1qULi8Cx",
  "key30": "4AKRnNY3AbPAUqgVGV19HPxwqKNjmAVtShTzzpsvVmED7Md19PeXwvbxb61GWXqj17BTVMWsi17Ft4e5WkvhpKk1",
  "key31": "VxGqPrz7kJXQgiznVeAzhA5cBDUF3YeaHZ11DXYiZBWFsxokrtoSPTtzCUePwk6dT33LN6Z22pDPqE4CbsV1sc7",
  "key32": "iGUjpApdpkxv5VCGNSfswdm5qFnYzPeGgzwPiZxAuDBmCndNVUQZjkwVtsieGFiUijt9mxW1Fa9ojgDzNwuZDMQ",
  "key33": "4UnYYmKXW9hb4dML448oFskf7c5WzNdSaAUstMsAhYjcgrmhQeiG4nPsYwaWx3z9MSobRjLMsPhKmmsEuSCWQ4NS",
  "key34": "52nvbdFStfBXME7ykGJtyzvCCsLJs37Fz8dZzEgPNBHgqWqEeLh2n8xoZvq8KsrJbnk9aDKFRaXDx36pPFNpdKAo",
  "key35": "5QxXkgk2XfcarM1QMQ1ss7z3692YjyoLN42GMgmMoYCuM9b2g1EZpYKhTzuwPtAD2mdQeqP3zKqthvDFcvMTvbse",
  "key36": "52CADwrZDgRGecK8HqVutZsnDGySNz5Smiacgdcb2ryQP3of7VnxVsQ6uFa7tvmu6J9z6z6hk5tDTiNGWUC1LNR2",
  "key37": "3HqE58B5BbdhxXAcE4WyCTWF6wU32sAg8bnCbc2YddMCegY4YDim4PE6dquAtw42vwikjUi2yAC5eT5QPXRY9Fxm",
  "key38": "5PvskDaZKWgEGk7qXGhjfvvUrtkT33PFxBR67DccQetUmks7GGjWeFWTrhvypY5uEtgSpnzt2jjseidQN5LmVxxT",
  "key39": "5gSWZyAJ1BbqvbQA4yNf3RDsT8yLxZdom8nFPyLHickC5M663ffs4B6SZiiiAphhDE2AQqaUVBHRFuB5eYkmHqCq",
  "key40": "3KKvaTpRgHrSJU9D69k5XGQsWj2B3dDnXvus78tXGaRJCYQ6pBWseupQM5ce2mMjm4R6nFnL2RrmG98ZbJ3TivHR",
  "key41": "5usMSbK3rv1nkU2LcAKdGYtyr43eX5vK6vFuHZ4RAhpcVZvvDCG3S3op4NtzVfBa5Cgf1qzc8y5cGDWxEGcRaaTU",
  "key42": "4jSq9Vv7Anynb9uYAQZacKDzNCzayqBMifMzxdhvfmdHNmx33EkiQ8hWEYC9hCYneAaB8AzVM9CpjpAMECcLPuNr",
  "key43": "5LVrmZZYg8bnZd6AfprCQXVf9d73pq3kvTvSUkNux6PzcVUcWBMRWqL6nTS3jpQMCNzKDifzQ7hyJQSFHEP5Lz6M"
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
