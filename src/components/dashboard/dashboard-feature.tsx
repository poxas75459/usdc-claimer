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
    "1Ct9J2UjNvj5VKPM2yMGLtn7K1NsfpuZqzqSjF3UofWEpNB3Bk7M9vEcX9ZTrNQF12jHm4DTAWR3sUfXyfVive4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q3KATNLswcyGbywBvUzTZbqSyBD8UoQSswfZZNbJw9tv1UZ97LcQRpY6Z7ta4eUopDeDVTsBoNTCydFRssv38yG",
  "key1": "FneM7hA6zGnP2DLqhvNPsU52LP8SLZpbKSdZUZikKA2a2WRSZPtGGcbvN5Vd8Eh8W61PT9vsoH4d9wYTKrUXUNd",
  "key2": "4F7rTiae57dgvoXN6BKFmJB9zfR4NSAKzkUZgNDLyeu8hVrz8qUNtErXKBtTu15TJu7193yKw9QBmzCSE2rx7KRK",
  "key3": "2rPrBw9cmCSuQ4W5K16GoPwkykWwMAt2mKeDBRazSAWDBNHsQDBTw73oHcFXtzu9tCwoGD3xgBes5Dum5fuAR42K",
  "key4": "KMdNZp1Vd3BK6YorQudPDn2nq9RbmLdALvqwfh2FmSQ4DH7o2TRwoFxAdcDfCvuMyfBXfmdqVHZfRm1gKnMx2Aj",
  "key5": "63CMtGiCk4Y2DxuiAabppLEPe8RMvSzBDUnic6KQfPyWJmK98jUPgLSqvk6j2rZTRXKP4wg5KYEf6cUGrXV2bRvN",
  "key6": "3gRUy6vXSrqZoajwhodCgzeGKuaf6fiMZXbMwzJaBtQXdABssvmXR6upJuUdad66kaj72TP1d6mgzERezhjdCiM1",
  "key7": "5DoaE8LBXvc3kmMefpqgCAhJ6GrjMYcw91C8QV4NBL713x7CpmETWivMn6oxEz3CDyyfDwkH5URRpbmVoGeJ2sDF",
  "key8": "4S9SPpDpom7Re7RyJ7EF9F8GQih8QFxAcELBNqqFroJzUJu8LL18QwhhHtyVMVtFBv5KyRFAhEKCiR4Givrzhfwk",
  "key9": "4GwdUUYeVThZfju7eZb9dutbLEuY7ccJUPLETkt5aMWVjvmra7S4yjsV6V7Zca4nLFy1T3E54KajBUbaGrYa7VHN",
  "key10": "2ysUHP5kgqGWt4ogTCkWjRDWnfgbyxEzocgNpbeTSRWBwXK9sZdx4L9Tm7mn4qnW7hn1vJyfMCJNtNtNBiKmJ6Vo",
  "key11": "3kaPwkrWxpg9UrrEq15atZY5mKxPDmvjaeCKupPWFAGtAx4n1CLEeJVXnGsqGFd1jpDkAWcy4e41ue3T3aSsJzKa",
  "key12": "2TGAQqhMhktkgLS1z1ATe1746FJDYV4oXP3Rdjs2111PVUGvzfcmQYzUjiMBUkjKABd477s1cTA5FYkaRwa9BDeH",
  "key13": "5tQiJou9v68XC1ebf62cqacqK3Pmdo7BYxngcXVyRtP9PVdXtApSqvquc2vD2FYwbPy8nPfgruZd97BDLGkTi1iP",
  "key14": "5VeKHhFtLQSBVZU6cJyPuPGCq1mrGSFAPYcME6oxnuR1eWGUXgjC19SisMc7FgJiizKGtiPAMgMAYxeJkYHpCBtY",
  "key15": "M4RNpFd3o85Nrq7PWDXxWfmUvvyvBuGuSciid1e7hQLyWvu8T1g4Fez9rjiEgigcwutRkuPczYPTVMPF9TSvqo4",
  "key16": "5mfao4qqWXk85jDRon5gTJtuviDqMdBuq19FMXf4ByXRvYLoK7pwGaw8LBJU3ax23spNjEQLUXeY7uXPCMy9uD3V",
  "key17": "4uDQnj71r87ri86xPGNqkGbYdMNGB5qyTTQSEagoBe99JyKMGgoqErYLJDD25undWsRUgEABTXYqaaE9CXQC2jBJ",
  "key18": "2mc9Uhrh6zESs1zq6edXvG9Ru4pxPN999F8NQsjYSbRt6z2B3AUrEqrqZZKH6Zj9zFMgYPCswC7tfDd6AsUh5Tpg",
  "key19": "3J6m87GmJ6Yv6eKp1qKAGCWL9vUqdvi5NBSDtpAvwzXxxW7aHbdnmrahTEuW4F1kiB7TjbD7Uh6ZpjCjkvUjoi9E",
  "key20": "6uxX91PyE2Bqx3mN7EwccHoMu5tLsTcGfupZiF6vJeSxn2gby3kLqBp2YaXSkY659xdKGnAT5GFnmuDetigGxQF",
  "key21": "U6V9kHxm5W9YsoHacirUrd7QEnhxyCC2mvGpyTAsC5v1d1c9bCfeKctc8ChRc73ja7Kgbh6PFiyrYirAX8vyoh7",
  "key22": "4qPaeuhuisQoPJCVwY6g7fKP4X459ojcjyeYo6vZDyy36BM5Pt7eVhr7TeCoc3eoGDSpVpCD3q8SSzGysYygJymm",
  "key23": "4Mqe1AUpUYeuyJF8FUrUCFeUNmnivwG5rDEav1KWEWWWXX6hJPRSYMBsjRixosc5uuFoipChwoFUrTyo5zXiff2o",
  "key24": "5xZzKMZu9MEeedUfm5ok7etHMCgbt93uEkMMLXAPBkGM89aPx2xD25HXPbwxP8AUweHvMwUqD4v536t3yVxEEfns",
  "key25": "58MizxLgjJW1qy83hBgSuSWqsCga2yqnDhoFh6SCcTDi3ehstPry7Qh3iqBwXxmSgvnkqWPRSfgm9N4FVbFkrSdy",
  "key26": "2TkGRyVG9iPyrsznBvTAedShZb8t8DSLnWC4yQ1267dBSvPq99n3ABUwxiy5SJcmtKjPTHXEHmZhp9brr6pkyhdc",
  "key27": "qJGhtL5eWghZuJ1W6Cb9iaUm8ZT1pfBtK5rraJmvFFbTRoVy2ZgMbbgD8tCAy3RNQiAhg2poKL5aYyiwdWzUW1p",
  "key28": "5pgq9FYhpdsLrhM7JT88yfBnXKWbszEnj1ytddEjoDvVrGdMTrGHuJyzYynhhCb47JmSZVLq5mbF2w8YQmhc4eQu",
  "key29": "2hKymo9VesfzxeNx2YVLmhwim5vog8uLFtuuFvffwtvMUjGmWCxkhSWy2JNbgaSPoCgyF3phGHkbrDCt6jnwmVCM",
  "key30": "3RLKe2szKgTEeptuzzddh5AJJJ3ygzKS9PsCbJyxEpYVmK3hZrS2chcKPFnsmCvQHhdtaW2UmxuEoZ69CLfyKPJq",
  "key31": "9Kbz8chnRb3FAuiTdZKG4assK5jEoTf78CtceQ8VCWW2T6rNb6pk4HMUX2XP8UyFc6LvhGZHgb39xxsUnv8WUZV",
  "key32": "QYFBdxCisrd7k9LWBrSqAUq7b6XgW6D6UxRC5vGj81n8xYmcSxf4XpRHDt4yKNiZyyVmiJJYPMom1dUZH5Lrpox",
  "key33": "2v6QhX14hpRh3FDPH1S2KHPmuaKtgcKFQkU2D1iMhEYfTficsDSWFmVfKeWXUrdk61bcY3JcnajLFpe9PAqwUiN4",
  "key34": "3xxyEYR4Re2MFoSMkytyYNy5Q1cvrKAFr64bFbN3GbbMb1o7zBrdH8iAfGUG4UeTY75RqHtqPtD5F45oBL1WsQH4",
  "key35": "2DJk5fSnYEuqyQP5fVcAKoRByDoNjN2HQg2M9HkhTNbUc426QvJCChdZDoxX4mzqgzQDHyY8vbnkCVMovSWXSnBi",
  "key36": "3CFL1g6nKn5pJ6bb5hHgbnHU8WW1v99ZwnsDPikB4irmEvf4nDgvSYFA9qiYSLvNYFfsMcJVKLdcJMvMaNfkJVwM",
  "key37": "26k5WudhKqxdKrs1apow48GugVyztWRvDsNH8WnSivrfjuujtXxw6DJtzWC1eRkBjR1VmnM5sUf2RWPhijMWZ6v6",
  "key38": "4NT3S9hHhpE7MLaMrqGBkytsj7n45ZRfLZAwgJEoPcsiobi6T3fHqk1t4qepXbsr8nqETaifSjH12kBAuTEJ9nm9",
  "key39": "3uFyorzKQYVTipHA5CXnByHScr99Lfk8uzmudscjoB7m8bsewjKYMMb1fQ6HYh6LPARV9fR2iWtUC7oHz26VQcoC",
  "key40": "8LABHo87WYuWukeEHDXWizvVFtQhLQTJMSoCYu7mbiQcdQmavS99Mgj2EepMGZqP3jsmNhmv723ky3DczQWGUYr",
  "key41": "2LFQABhLbETW8QuJQcVGabf4HXX6ZAqfE5iAQavKjgaFLPZugJFtd6RutxiwGUeVC3nyRGmW9UbC2V1iJYycniQ8",
  "key42": "217WaRqqHw3mNGqmx9jfbdh8GtH8rzoD8CeqVRsaZR7HxBP9Jy8otAR6eMqUyS7HSR231woiYJ793gEbkFTwt2DE",
  "key43": "2phBx74k33UqyzZRMiy3rsApBwaKaiC3QarmqpZxDVYL1taG2HoBadu2XKDRChXbtgKjBSuCaSv4vnwuRRDCbHme"
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
