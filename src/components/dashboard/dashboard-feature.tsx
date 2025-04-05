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
    "4tvNgHztUiQkT6kywe6PpezgHbvGarXqMH1eFR3i8gqXjqa7Lwk2CzpJjx7xNJizrNi2VZWovbDRGVXnTUkDkkj7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UA9UdVNp7osnk5oWiy4Tvk7oFRZb72jfp342RDrd7FyuL7TuR387f8RrcbZDbGdUXNBB9TjbPZAbWMq58AsriyD",
  "key1": "2cYoR4GNHAyKeXAMfsHERuhCzcpHv4KJQ9sUE29XsR4Ep6jxX1Ei2SXEwL9bXCNEbyqWBot7udBdk9rg9kjYTTa5",
  "key2": "5nV7qjvq7XHXyBEgUUmjeazdRehdiUgEzaW2yfqNjm7h49Kq37AnMfB7zBofDKtvtSXqWUhQZvWrnF6Z8TCBUWE9",
  "key3": "2GrLT2cPDgJ5U2NE7JrEEgtB6LmuEzatPrPZJ6NtNFCj12N7jsYSkqRAKjmvYkqm8zT2hYRLsm6riqjN5mLkLme1",
  "key4": "4ZD2CgcKEWwwxmWv4BAhBWLo28Qvn6zFY8zd5TsLwkUEDdEsQju1pi7J8q9jkiSWy52q8L3JKXKXh8tjmbEC2ofh",
  "key5": "4fykps9TXjEYRXNW7PvQm5akjro25Kax3xe7jg72t81tga744fC49JSLArxbfYaTT34P7EnktY7d53SCogyBR7ZF",
  "key6": "5yxE5ACvqdepecyUVodjNb6tjxpoNd8QVFcDPz21ewpKrV9sbRf7tyyAVNnc3HfejDyNBswNBKpwAYTEogY2QVow",
  "key7": "3WdbToBB5aXWrMSce7kti2uoDnpEcF7WuiURyUZbFWmn68SqgRf38piZhV6ksG4pdchGY8nJBiepBsdULdrVZxwD",
  "key8": "62MLqqgZBbstoDgrARoc4WtPNFng8iNPYqpc59BJgU5vtzNJkoyxgBwTQuWogURn9Qyr2H8ZWpTWnWXMvFn6p1Dr",
  "key9": "4JR6UtCfXYHpQeLK86wsteZp6hhCFWBomPNsvJaqb4bSRbzfUUEFrWwtYz9iNjzgGZMsWJs2tR84kvhXdRfdcooD",
  "key10": "3FViWbYkczEQtdakStPhK1cagqKpxkpHMG4Gmx5DismeUGpS4CcEXkmbyajM2ujSeoKBSHWx4L6fG95THX5uLTxY",
  "key11": "63Hd4rMfLv3tQmb8RnkDBR9EM5zvtdNGLa28M1xWsfgSpNhZZcHyuLp6nsYzhsmz2K43TYqr3VL2y2WpRz7zLBAq",
  "key12": "RAozgXDMcEPVE1VWc5y7B95K7bkf5GdfJmTwJF6xStbptkVzt6Dza1jQD1nsoD3YUPcsE1QypcwEBrvDhy4S2KQ",
  "key13": "3dbYpDrLDm2QnNSZxHctZyzrrP4iuNBTef6LcSN1FNbpL8UXLRinj4Fy8AKBp2vEjxx2AyJWwkMUkyED5wT75cGJ",
  "key14": "SagzZWDZCLPuPopGJ7qDxh8rNWyvMAT1yi4ffG47AjHYmsQ5GMRR3xYJAs6GTZpTLm3tJqA9wMPVK3mz4gJPbq6",
  "key15": "39JXtH43pQXX53CwiV17XG2wPq9XZAHt1Bs58x6Sf5rjXqUBEfPWzkY9JLf1A2QsjNgpp2wEoUdEvu2Uzqmh1CPk",
  "key16": "2WRxf3JQ5iqQHjKkZAqfaiCPSb6sjuYogSACGCtLb4hvJcxAqVFA94ue7X3wR7Y7nSehpKGd5WpGo5KzhUQ6AMYA",
  "key17": "khHEMaqMb3criPnYkrw5W4EfqtEdgmjviFENKRa1J27bcotuCRfNoRUxumqNuYG8F2puuQaJfMNXzLJNggUqdKH",
  "key18": "5AKKuPNLq5KJbgArJy8BsHWEZeMaEukYNq5U7W5zBRfhaiMaJjw1v3N6raP97iZskmwFoB7Lt38FcYaa6fPDFaEk",
  "key19": "4TUXgte1Dco6z2q46s6YS2V58ALzw9gYyU9ZPiFAN6kTVjQy6n1AA4EqKYBCH2Adch2rKu2LvBc5B8s3TS2ZvnJe",
  "key20": "4V8pPBrKha5kAeeWkfS7hqhdz18H6PQpNEXmiPkemb5yqGVC4Y7xpjy12pfj2A66CthF8X78zivT5xCQSM2TaFNi",
  "key21": "2TS8xskG81f817HoFJjkKzfosRKun4qmXsbVrtApAq2eyzCRei6SHxtPLEwfftZRzC9dc8sggdSgbrBE9M1YDGmG",
  "key22": "2LnRFG4qFLz4W7nogv3rSX4WeUbmAA3VFmw9mxZrkBKgHVnQK95QkYXcbSgWVeuH9FRxxrkYc89BQnEMmwabxiys",
  "key23": "3LBZsQxkffeFP4LPAMjyw3kbvVXpFyoXyDhAMUdYoRyiU6wKPt6Lr3xBrM5QVw3sW5zELGqLGYo68skff8YRH1Gf",
  "key24": "2ZFJGhZq7BrzpUhSX5x2Zi7zjnmsXFWrjTgxxFazQ43cfzotnjiZ1v7DqVqm7K71oUuuMUSYtw8a2ynzgKHd8yeV",
  "key25": "5d5VnMpJ945aWMDU21DkTyaaPowozaPzXQjZB2jqJinT16kvwAweQM1nA497ujmzDR9irSWGj7EmQ3GTN7sRU5hE",
  "key26": "4UxkozHH3wrW2Rhu366arGcCJ3zw9tYcgqSVNoQhQxHYp6GLSwPSFQUCP4rcrKWEsbeuY8bEkbPDUYBmpsoi8Q9j",
  "key27": "3riDKQZ6rWL4KeNMiMhFqtd7oTQewSChMfhectNETUEX5YN22uesohMF7Y9SzD1W3BuSrQktA64WwS4rURmPHkPw",
  "key28": "5X4Ugkq89mVhgjdTWdaZ8hdYp7DV9i2pc5kRmyeMr1gsoVZubXKercbvG693NxRsVAKsyRL7K2Si9czGemrJTgZj",
  "key29": "3t9kfGuQ7fdDGWZUwfbq25MxzuCD9njwTQzadfbkbKzgyXKsEPoR6DxJHEvkS9mVQtS1rcCqvvyRwBLjHJMdBuPp",
  "key30": "5uzPY9ccCCEe3NQLDfGzPY7PfEV79cLPy9AiQ5tGaZmZgY9q7Y6ze3vNaLKo1Fej1vLuHiBpYe1MGrk5HJs31U6E",
  "key31": "2KCHmmNf4AwrHmUyD8LszUTTA5EwHj3JyWEuKi2Dm3RCBsFaTRA8dZXsU7R6tq9tBXCtC3ZCPoQ12Gsgph1ZDDpi",
  "key32": "5gD3q31X3CmswZBi3tQxho4x6RfY3k7PRsusEAv2ToYPxFihdrMhDP3TserhBEL7qJ47Sk2cHGtUHPgGHqANJrdu",
  "key33": "5bY7vu46HnfzKB9QuiV5L9n4CadUXE6awxqutqLaLF838sihUUiEKdENLDwYaztEGNxxJkJUHpfiAdfCTZ4GH4Ha",
  "key34": "2FxV2bdyTrwntzRgv8sHTVAzHEBXG6ni8njp9TtLGaB3Ew1GLCxe96SyhG1Q2TFpnuhziqp5oP6vrbRgETT9oSDE",
  "key35": "5a9o8YvYdUax55sAEfAN4AcHn5egmqoKZGH3JtxmtnUPm2UjFzEAbfUEQUxqcMkJDVz2Qfzb6BLoSnPg89MWZhPS",
  "key36": "55YGNyVzkJ1udYjTUXy41cZSPfrtBLAjhw6PiKmWkxsYfQQeUVJAogUVSbXZELYCS8yFRwTk7bFwMe8U19r2XQUq",
  "key37": "4DUcoibXR7AkDZxgcwBjSHKWnBJtckbnzumZVVbEmeQivLtpkNUcaff2Hi1XSpBVnYAVBo5uHjHALbKAp7eauGvF",
  "key38": "2gjnUfyT71G7KToeDSoeqFYrkd8vJDxi4W9EZfFCjCHdy9c7RCe29sftyf6ZLMBVriW8SZXQc43gRc5qpsW9LWJM",
  "key39": "2eVsLvb3bAedAJdhWmhbwsWf3F8nmRXWLi9Vn8VKcwiNg9WbGzBVZq6xwPq93F1BBB7VT2YtgqPGgcVvQ2B2U6sX",
  "key40": "2bMuctxfp191wSBU8T2Sb87EJKhPi2KFDuBBRJxyXCusewhDJmqLHLwbiTnaJQgwQfmZ9rxSZnsFgCchb9Xz933C",
  "key41": "3ycXMLUGkgjd27LUCWKRafHXCgfNmvLnuHz6veAXjgFrfDTwtD6BeiW62rWVbsQovESNKKJg4rmPvzyAGcyi6n4z",
  "key42": "54xGWo81hsxN6cs1gcSMYoeYNdPVUczgTaaDJWRtn5LLLBLgkBgp7cdH5zMNvUKLTJ1BiJdEJKTtjhPmqd2s4Ua4",
  "key43": "cRbxoKfC2SaLNZPm4kgF6HsTaFFMMG1nfQpvjPQ3MVA7bnp1QSGQpKoPuXqeej5MGQ9pNhXFa2PvPKqYKXBncNa",
  "key44": "2R4QrgV4pvCht4XjLe3o9SSUEA5DDFBDMf4sd1kQ1wsv9iQd7LSCNPPbo2RSjDXtw1Rive4sadh1p8iT3Y4jxWuR"
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
