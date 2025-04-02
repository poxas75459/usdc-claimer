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
    "2gNt52n6V4aFr1iHoAFzAG4drWGkJWeZMdk8BcTzfN8QzSurHHZJFH3JgDShUmgih5AuGxYooxv6boXtEZ2HNDn7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dS4rYfMjExScAPFpv27bCpqmKMb2ha8JYbQKHA7tJrkbacF3xfYoD6BTsDdU2ACAhctxn4XDjjVnsHoDhQZDaVa",
  "key1": "D4xXqh6jjSWqVbiuaaT8Jdh1Ri3EUDG8xzz7tpEoAhTczP6dzw3TCWafNaBZZ5KNTgSz7viyoSjWEyA5GzDDaXv",
  "key2": "P4SK6NGDJmWwEhoS8y7aSVLaMCSrXhP6LF9VYyHB1FHnNtbGdJY218wwdicuiGu72b1kpuKUJgL3xZswxTHSoKL",
  "key3": "5AgLdjE8X83j7D1kqQ56cKvKwstqbekvNdTFkSTkEwHnmNqhG8oM7F5XRY5t9E4bYUYQiE4Ro8c21aqTkaFQubRE",
  "key4": "5qfVm4NEARFvDaMwm79BigbNfhTFCFKrMmfetq1nrughWDa65pYFnNu9NCXQw5PJqCGu7FAMCrFi5yj6mr9od3hN",
  "key5": "5uoVn8LHtvF1xaDE4ueF68oNyb8jjZELawdsJSSyYAPCtYQaszRy3cTevXHgj5d75QTKH4isywzg5ZaN8ictBArB",
  "key6": "4gyuMN7ZLMXzctRgBGbi8grnscxzbwJ8tyMPy9wXaU42p2EHWGx4D1bNFzGajzBpVvmjVco6nY1sTc23BJkdwTpQ",
  "key7": "2FpBqFTGYeW9sSuXLwfXfV2epKBR8A7TXHcikxb3rWPdQbRdcZqvztihJ1Nth7UroZEN9p5VDS2XJhYNFMXqzH9C",
  "key8": "3h1Yk7Fzss3wxFAzoAkwxabY6YMYLZYdgsd8FqnXv5b7myDwBSZkgzxGZBepL7hyVeMuGmvr8nkfRVawMcrFsnBv",
  "key9": "PXRbdqiZHxbumo1tkAWwxoE9vTGDeFbUJhNgnLLakmDKyRBrKEDBRQhyhQG8jvbr7WyLE3MJBzSM5GkjqrRo6FN",
  "key10": "2EeT1AoHPvnVgYxBAVEPeCdT5Bfjqh1BudA9yQ5Aaui8jefjFTwaf7EbrDyGmioeYRTyr4zxHwAjz28ppJ9RT4By",
  "key11": "3irBC1PN3423xgcQFAMNUStJXdrtGzqNoXTAhMzckyvvzGHGwCTnfW9YtPGTfHHJCS1Cnt1YycGGUbnPKbvhMAhP",
  "key12": "5yjnyVLU9CpShnYUrwiRmZe7gTVtZ17TgruHdziiFSi7Us3ehdTAuosMve8mwgu5NQK8TMgPHbKNhmBKahpXkk95",
  "key13": "52Bc9AZg52jH4BuTwEFY2FHYq2zVT8gRPDMGQ3KYW79vAqRBHe3AWbn5PNRv2VWy2hPyt3PzhFQuVuczLWNAdVbW",
  "key14": "29nwkgwz7uGporDJaNSsckgw6Di4Y9KYYwijSCjVqSvWBS9oYmSyNEX1EmriTsvpNpkBtjKpV6TXJCUfERtGgGqb",
  "key15": "5majzXtzqsWXoR7DAH3Wvmd9JgBpmWSVn86RVxCmjm31FXsmxornRtfWBZ4ouQu7Gi4VLBPV9kxNviWEWRYGosGq",
  "key16": "5qa29SFNzv1oRiE9dzq71Y76Y9tLnoeWNVgyvTTQx1mXMeJS3TH1eT7kwCmp4rsU3mnmb6MXTTGdEy8ziY9XuCrR",
  "key17": "4mtrHgkXJyHC3VFb5gpAd8vq14Kf8MGvDaswrgBzoLyMNXpAkXzqsSJnszJtLy4sxeNbX8a5pnafjAyJDPi3EFXW",
  "key18": "3gXgucw7cSkZ2fJhdZgRXtd1PcTktZYwBXYQJhonQe4kgX4ya6ndrcG44qCFoPW3diR3WCD6UnDbVsBUxbCAaVJm",
  "key19": "2sh1snji26k8b4GHveTsRC43EMd8imEJNaLXCbpnyUHe68jHB96vc5eFpkkg5iYaUDj4NVsyeFbiE6oKtfPGDQvb",
  "key20": "2m4E9D2AjuDJ2Bjf3TRjEnjBfrABhEKPYWo7ouMsTXEP7JqYEnQ92GRjuNJLP2eZUwTnYarh1Ba5x4VtbyrFtR5d",
  "key21": "656Xir5nhPUzTVseW7N8CtiEfsMDY8Ur99ZRrchTGKdB71DbitHEZpevEH3Jdy4QfsL5GMdB3XegBK56egqWbUrc",
  "key22": "U4kXsxGXQ4jfT8DjUm7sNamaXLhF87JMX8zPx4zqZ2V4zoYGm4jCfesnhMq6zZJzRfynFGFAaiyqAViuwbZqXqi",
  "key23": "2WnjfZEcERAJ3WyGy85VFNghvGhpGZkSbC4W88Wmuy1Hb9iAzHJD34jYtAQPq1DbkXz9sXjEv9qHVQ3q39JshS96",
  "key24": "2ty9LY2hJF53oqeMGfvr7BWRBW5Y1BBSfi9xQ9wNJETX1swueBHHheBtPGXQmbEWnnGxJdiwCzmWTD4eGT8PDeRQ",
  "key25": "2LZaFFW1CgWyLEC1QEqec6BjNbyeGCnJ5qZcpoZVgU12upTjsEWKCeGacpvPvL8KZgotUrbgoMw3QLasQKNBbutV",
  "key26": "34HBbN2iJuZEn3PEX9hi3D7KViHLGjcbo27NPeBThdpkcCRoVbjHar1ZERB3MBArNBjvqAa2SHyAU1hrHUdXLsHA",
  "key27": "2is3Keg3PDfuZYwx1epRDTYvYJRmVHPGs332RJx8usSGb1GBG5S1BbhTUXhHkukmhEgnJBHw8GBRWtSms4isWRVC",
  "key28": "57WpNPzeaDpcihTJHUWQhqsX35ijPZ4oZ3oknBGjRpE9y4Ct1DPWWtEeBaALqrPxxzdWVm3cbC9vc88wt34sZy1g",
  "key29": "2mS9EWnQtyJQYuJyUDnXCbgZnFp2UJkBSH8AwWCa6VfVaY2D8Qi8wJ6XCRi4uvFVRipmywVcYcsqk9v9YCH8cJnd",
  "key30": "2NY1sXccdhWLBUJcvzjrxQuzebWNGz8fnSsdMbmVHE1pETNQi1erixVL8tLVsz7NAbNiS4Ljn9TnpCWY7WpJUvFN",
  "key31": "5rPFaimxeaKtk6envBeCWFmPN7LUQALtU9dhQBpxY9HeZFXrB6YYwRumkeScpSh1vuZphX7DD3xv8LJMwFyg2kQB",
  "key32": "4KqpYokPESoe56WmQrkbFp5qVNCBzA7i9kf7RWHC7pt41GHxErsFXmUxJuNgWR4yy5um5ewMprsioKFYCo9siPbP",
  "key33": "CNyy9frEUJBNHyctC4Joki73XDD8M1CzduHyebXv2dm5ufwAiirnjQ9aDpcpynKDhiuESdaVvciEEcZup9BMemr",
  "key34": "5RnFxhFMAb9vFVN4ssfahpiJ3azdvwBNHXXnBB6CPceyVWJjTWY8aQzyBFTPeg8dsy6zq7ffGpcEkApAQKekEx73",
  "key35": "crJXMEZZCc632CAxa1tewgta88428uukf8JCcPdK28NqdYyYnR6YK2NKe9JmXA2o5WRERJr6SBwmjD33HdzWFuB",
  "key36": "44D4wTcC8SQXy95BnJnjXUtDYRVS92ptsKXMKqa1X4ZdkS1bUBnWm3pncDcAeexYoAYLtamR81oc9rUMmY8UnLLp",
  "key37": "5m65tWXUQYQ4zvM5Zq8KWRxU3ptpnxhXoKQPApdyZR3ig8hazYkvjQCu552SnU5vZHSU5kWcv4AqKkfT1g2pFVYt",
  "key38": "45axYHJ1vGMYfXp8Vq2BMbDLCCE64sk8b5fhMq8gQUge84gdNsiXmTXhJTwHKPAKjYV1CXZwS5ZeDLcoscqWX8Vk",
  "key39": "4scViaJt3pkdaYUecRsaANxBs2oKWbJYfxE1HGFbJLisLRTA4U72moScGnqwLLMnbTimcaVprEvrKKrAYLLAJAG1",
  "key40": "4ywqq6TtEouDp3khmTKYsPGUrvWnqMqJat1Kh921GcFgLiJaqfiByqQLFXo6Hfc9sPF5zmdDvYLEEYUt7AdE7R1j",
  "key41": "2VhdTNUhiRsn8QkYqXfHtNTwt6WZpEqd5msShQ1pRNLwrTZeGw6LkKHVwZrySPZ7qrajKdGCZoRsfiJZRhR3prYe",
  "key42": "7qsaPpbuUZbHjAaSu9YkNyW6ma9eqF5HT4yFJhQfxH8rYPo81xNEMrzNDyv6eiHz7Bj9vL15o2sB2rpMdJUELpJ",
  "key43": "374upfu4koKoAVBi41tzkG6PEg7JtkbX1pEmHXKwyDmi6Hp5YcGHdYrD7EfxAPqhZc4aENZA6HyzsCyCaiyA6cRg",
  "key44": "61UAKcN44BrRZbmRorQhWpPSXhrqv8XAs4KTv2h11UzfndNL5WQu6fGaV5CHsMLGH2S9rwWnGM2gjrtzqaQVwuiD",
  "key45": "4136A9bY4LnULZyD77bmBsQa3ZeiyrvNL4QPptZaofppZLiu8aAjN1tJJkvHDPbWTDC2xfmumBdXXKkKEn8spWzD",
  "key46": "vjRwv1JRQd8D3t25N1KZ8UqeAVTRcw4V5qHVRJQXz87C5p4yVw3PBrmooSB7qBEdCBu7mgXq54sNrA7oo3dmHXJ"
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
