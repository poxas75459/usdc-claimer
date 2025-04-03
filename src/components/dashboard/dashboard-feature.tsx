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
    "N3Lap5Tdjw14pQiT3Q3iVzmXdo7MbtxVVZ7PYpx6cGeFqdS2Z1mn86zP9xUVxa6NoGNhK6R6LZC3gWaTZw9kf6o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dTCBS3fGfrCsfECoNwc4MXSAYiPHpxdUhspHTGfCyV33X5opmx4EBuCLLwSruWDq9qRU813gEuqPzbhNEFoibqD",
  "key1": "67Px43XCwtuYLwMNtsY8Yw2PYPqwpXPainSE2mK7habaPM7EBrNrcF1mu4EZyNJeXqfEKFX4D3EgtSPCi6f6fRiN",
  "key2": "3gLezcPUCtVat1Mxhk6jrRSihhiccPVroQNXdo67eXWR21Vdyui8kNWdYskdM5zvxmsQfFKhPc6Do9n1toZ9QB2S",
  "key3": "xoPyyBD6ErpsSthhnZQFTm49YmxjsBU43ecUJ2cFtd1rH2yAei6qN9eqyyAFni4ZytuHDadf1a4PVStApc9FYgR",
  "key4": "PA8FyDkMpyPESC6TrtdDmVr7sesrMPnvuqEZHfPjSJRaJtvpGQVtmyScSgAaVgW6TYnawuWcu8Sxhui4n5zbvET",
  "key5": "WR6phmXz5uXgEH17mriRpYv2BQwpso5yNcTjBsy91sCkEGWyobcLjmgvDA9rkj1yUzF19YGRcu9hu89aS6GnBZr",
  "key6": "52yipruwmMPJriVgqV9TzuSg2en7qMfatEhjdJYfbyEhzAjLwAt1QPRZCRK6rNHeQAaGX7KUuR2bjygAbrfrovAx",
  "key7": "4ixVEpmRawaSDb7dGmjJgM1kpF6MMeu7m7JcvFL1jZFGMxRLavFUrKhkpn3tk2xgguTocAYYewvpxUMdm6tDiX5Y",
  "key8": "2onr4xUfpjgBq47zy9ev26tLghpjALW4B5VLMBZtEZfsvzakcSHwcgaBK3pGGFVaB5F6a5XfpEoz66N6SUFc1e71",
  "key9": "4JETt9EimcVomafWGDQrYrj8uxF6yiX92Wn4JLeUzvJMQkBC14Jj9b5DX9Jjeb7oJ3EBkcDJacwZT9FvQtTtjFUN",
  "key10": "2XHhznQpWGTrkv2mxyLW5jcwdcDJ2mSyx9CFLyvvcP3hYjo2ByGrnT3gNffKcb21vnaXwgG4a6hB5ghDWJ7YUJZe",
  "key11": "hSmeSQrCRN4KPYLEXgQ4V8tm4wja3hMdbeeKiHbtjUShSjyMN6x5w57kXMkLUUh3ComKfiCkemuRc5rB1rguZDb",
  "key12": "2HTQZui79TSUV2pzt31GxZwU1McmmjmCKZfNYZ9td7qKRpbjJpfSKF5f4BhRftUwkTa1rZuGkXVgiDDG4rieZdZ8",
  "key13": "3cGYPAUpf2rEk3AZg9JMiX4nxu7qvY9EDq8Ru4kdPvmPvhL7BKkp5CCpHZX7wNNxDfgPVfJ6iD1TZzMc9ehRa481",
  "key14": "2Wr99zSafENgoC6aCtL8uvt8ik76NWSwMGipwrfK2WGSLDxMVMtf63VWKzBpUSF5yhHfVwefhMminr3m6eWmKgX9",
  "key15": "2S2KBys6kcMBHdWnzHvrhipquA6g3QFwVmScTt1eMfknKj8h7MH31Yd1GkKmwKZYMdRmjNw7uggLDZVBFcMxm6n",
  "key16": "47Uc5GbGmTb52g9zS6hi3ZH2MrabaiqPsDQmV1LgkdvZwu8riUGmV6dHRA9cgFvbXfnyLHLYGr6KJP7CvQDAMc8M",
  "key17": "21XcCTpkJSv9q36DLu1WJNcZHofn9xPMG9UW9q5qfeF7x5nbCYx6SAPUeWbQdrrF4h4a5hcbxhDUys4crYhKpnRZ",
  "key18": "RKT7xxd2Am5beZhSd9qvjnjmr4reNoZoYxRUH7WQHJP6JkJrpufWJN8G7r67D1j7hAmJVs8117FufbVw1aHpFF7",
  "key19": "5ac5gUZArUz2anhS7Qa36KxXQe3Sbb9XxAjjD6eKVpVLEEjQbVTE7JmegqTXnEcQPCXVUadDGEf3p2YErYnZ4ttE",
  "key20": "4wYCsFFR3aH43pxVwLAA6HSbTG9GBfojenedtdFohSA6bibp5Sa2hapcjR1WaJRs8D5boFoVrMcSG1TGGcjy6r7V",
  "key21": "3FrLv58h6rMstj72KNEjHKRemw3zci5ChN8fN2pCPnxEkXCvuLtkZB3vcZQnVbCd34rrKJX9LKZ5QuiPDjPXPyrJ",
  "key22": "5sWqfUCGiuokyH1mcUQsth6VbHu7GUS3KEPRp9KFfttrNgE7XNJAFKJZUwvnfzxTGZYeDKkVjqoCVU2Di5sTerA6",
  "key23": "48G8d9cD4mSBQmkbF7d2TcuSErpApKMy1hXscJBnife86NxanA5ZydEBAZoXJUMHsXUYqQV5cba6pR4AuYvFf1C2",
  "key24": "4cPqMCuVBoR7sRa2nQQ52Yy5krG3AxdoUiLmhkCP4ugYuTmCvMiPejakpmnTNT4VSntiShBJ3HiBDcjqnWPEByms",
  "key25": "YxN4AMit83HPLkubPWRsKmG6uURuzqw23kaRacXxUvp2fiHRWnskUQ6L9dCp3Yp3sh5gjA2KoTFe9GsHHK6gc4M",
  "key26": "378FKrpwGn91gKh37vzrTHSMvcYSQA5rxzEqNFnQjxxU9HMwFz3x5zXLRGra16SeoRuv9pqbetB66uh6Qjs9zzAX",
  "key27": "afK4AX1R1LvCzd2JxWUJogf9TLyd3m2esYL87bEYSwzsT21RiUE8NXEyrR8Q6ypZU62NGKP9suApLS5VZ3vZBL9",
  "key28": "2QCikGXnQUrsGnS5v7esqqju4fRLpZV5rLoXfXZifMpdMGpWkjt5ufL6KSJAqWnbJtRqRbgrdAijaFECv2sBUqeH",
  "key29": "xJmBQ4FhZ3NSACbC6pWFToRhymfPRJMcvRMEunf2PLpBe7UB5gPU2UF2VCx8Pk2jTgetRdU2T5djoKxHXWKsz6B",
  "key30": "4sTacZ9Ak3WP99sQcnJHR6c4kmXJ6p38ghKA2GzJxDFW8bgJJELCSKsAQLe3LCMBh6vvxfB34fEAFGRHDMeAKL6c",
  "key31": "3bLepTRoCSesgDQPsj95bEspiy4tGSThcAaEfAhpbxN8jDXT2woM73WU7oXKpFUJFM4SvDrBVotepcB1EJ18QWnS",
  "key32": "3oDze6f9Q9jzELnQJw4nNcRWoZfymYXFs7kBr1LnsTymtp3bevsHmxsNHyHw4zibXxBdxWKK3K39TW5WNp8Hu9zS",
  "key33": "4WNKnqz62XdxEMRL9Tma5RkRX47PZRDTqpBZdW9azWidN8YdacnkBvHeoCFGfGFB1A2hSkmJH5xBWaXvdDqNarfG",
  "key34": "5rWv8HZmDtDcCzBSZ9rUdnksqWpEwpnXGn11mQbF4pdR252ZjZhui9YBz3E43LhfWcxFmKEAMgGTrELh4rgLoAWf",
  "key35": "2cQazH4hcpM8GRmxd9CaQHCSrB7qPx7EdZPXQZ1X4R5ti8zAK53ZhP8wFVkefEhn6GkogEHBbS6WQK2s2ceUHetK",
  "key36": "CFASzv42SuHNDGetTSLi2LAJzeWjqqP6q4hMvMFMjJGw7TDTwCBu1Nj3wN1RbqiH3YxWSEMuai8J6GvVDMoLtzD",
  "key37": "3DTyLwgsbJiBAzBxpDmQhK4PCc2ZfpWwRCg2no63niUpiN57jwsD2LEwUUtddv1Lo1VCjUFKYtiBY3S5T3sG2iJB",
  "key38": "3V4LdbVvHDPfrK4MBAXcvX61KYtjckzgpPz5axufzarj6RQSk3QP1aQvoUwbK27ZzC53imP85zPd4ARa9LaPPBvK",
  "key39": "4NZsJ4uUvcQPhFtwixdW6vYruXBcsrR6e3MqcuZR9ftvLKwZWzVnJ4ftpndeT1yaJBTeAJ25dfFpJLMpM6Xk8K6Q",
  "key40": "45j86qvY1sx9bWKjpyRme47uy4oXrVdF9KrQ4eCwJXRS4E7opXgJZ8DhDJYre7LhB2ZiGcpL3p4CMjV7YZQ4X3KE",
  "key41": "5QXEjpgg8DyFXdk2WsiLiWuWVfHvpPwGtFmTMKUXabQVDdg5SkdMGjJkuDiukQysnBqHTsjnbdEm41VyQfYUfDEF",
  "key42": "33vAidDaiQMWzo74H3isnWCxXjKNrxf6zqYWsrMV4z6FUzE6EPTuAo11sR2DfmR9AbkAcvJcSiAvzQDziqPX62mU",
  "key43": "1jXLXhxSHcsiDaVbgMv3Ms9B43J5mpXqb9UYxtGwFwdJJJER3mf82Uc4XSB9kXZiWGtMTjWfA8SGUNg51fqC2tV",
  "key44": "4DYFzTy76vaatpJQimZDcPBB1eBDnPDvsJkQfZvZy9But3422XdWQ6pK9gg8YpWK43yGVaDyNqQJU3tS2eFjQm7W",
  "key45": "RSaH3jqrRRhtfqXAjTTu5h7cvDGYgPmwEjjaTsuwUiLRzK14kqCXUbZpZ59Ccfo8jcAENnAYofD9CiTq8mQjvPh",
  "key46": "4KB18ZfAZCFJcWtfLridHv5eXS8GKSb1FqotMwPbS96GYqzkEcWS2y4BDh9qCxVzi4Mmi2MMzk7Z83U4aUKVJE4r"
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
