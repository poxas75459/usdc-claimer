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
    "5PF6WhQ6sM9yHYoVYerz6V93v7NthnLkTSbnfTEXnWg4DHWqjyAWr8YzYSBywerNAQGQXx1ugV7HpB2nHGzGhmFV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21AQ9oMKzdjEqXSEVam5rxYyNauVzmG7Wzk6SEdqSwqcYxbiNm3PfozfpeTEC7bXtDHvNmVxLkZVVQ1Auyb7MAdP",
  "key1": "5YzRjZ1oEDdLLEbdAvmCqS6MJhEiQpbYibrFac2oCCU3CwntowhP3213a3LNhiEitozCsF43bQeKqHhNyk2aDNqG",
  "key2": "JKdWNL7NJ6zSgcdLEfixQ2aAnq3jbETKpS8cqvyxaLrmWANQ8x7ghVom6CSMpmGaQFNxAkHsPa6nY3osa5xJ83G",
  "key3": "BTdyL1wc59x66iphnFGFnLRpeuLoLb3pqzxW3Pqx7vpG8xTzUo2MXYzVszgtXvmGZz1xJyerurt8iuvCo4QM5fo",
  "key4": "2xykWja6HUzJ2oEXcfXs2o7dozRPY56RWRyLwLHaR7Le3iwEb6J1PdYQsafV4E5EhtLyHajpeQBrW2J2TPTQjArG",
  "key5": "YNzm9FhCeoHhHxmcGs6iD71XreAp3rCv6gckYGsr1Zw3NticpmSwjxyPw8Ky4XRHtQuSnzaWBZ93i7EX8C1TwSq",
  "key6": "3MZA7eQyYqLdempNwBXMBKjpEHGgZNWKbao21uQHZUzoBY5idcQ584p66RYhLZYHQGcdhHyCLpG2KniTCCj3hFSo",
  "key7": "2KzrScDm2kkeYA5rgdPJ82oX9dYcoZ3NgVCPfz6S1UwMfUYKJhhQmq2DHyGMeQ4H6LNGse3d9VCizJi4SnEQkZVu",
  "key8": "3m5mmtRTxnrm9aPWoA9k7gRPavL66beHmsMsksEAdGrusFncnoj1SExgVr6CGAwc8F86uwF97LDVu9uppMC4gKTJ",
  "key9": "2pV8Ug3wDrhrnrhyvx87mSUUejB5pLVpVzzRCw9fadmgqFN3TkBc2MrFBwSXarFx5FE7mY2L27j4nvk21FL3Wz4V",
  "key10": "pTwAWPRctPuxFpLF1NoiktfZjLnTLKzz5LURY6fUxUHcsTjPXCSSkbxPpsuQDzJXDuiH4Dup8xshW3VtHukomHo",
  "key11": "3PGoFw9PGnuyNHbW9BR5c1C7T7TQrNsQAWHRsGMUBq8GqTNywJJf23ywhPY2pF44uTzciPUgut6CvBTwbAXfVAKM",
  "key12": "5EmbmZ2NkiqvyM2cYdxuccjboaQ2VPi5e6PiS9oSCfUwzJmsomnUYogMKeAKYvufgxGRH3gabP4oWon1tyPhT6VK",
  "key13": "RVK9HhxxUJ67CfHjsrp15tJoa4MwdUqQm9YUL6yrtJ6aoaVfBwdzDQUww94m9YYBMtUyvv5B6GAZpGAZACkKhHc",
  "key14": "4B722x7CYfJicrr3P7t8mp7yt64Gp3CXELoymxxTSwra2bzHaCqbiSPCHjTofn22dScxT5PhtH3nH3wPJDUfyaWR",
  "key15": "4jfE33ECmJtZJ8QiaCkobuiXMrBreRiUECSU86NiAPApKRSfnFKFx5dyUF4iDXfyWS1yYVWJuvs4ErVk3Z1H9RJA",
  "key16": "4v5uM1jDyGrVG17gWDsygJYTdJwFLeHN2DUG9R7LhUUjK3Vq2UZQS5FvUN7LP1kzCL9zqxiUU6jEKWHgamE5XJLK",
  "key17": "5mauTGQpjCYuAmPu9MF2STMUsAzbGn7KmQZUJCaLxDUQSK64xcz4ZEpv41nBW5EF3tJqYTqrwn64SryvZL1Cv2Yr",
  "key18": "5b51LUmc1vsCz4dkmvMHuTZ3qc5NHwSHoKKhH97JYRZoGTtM8Vy8g1ZZcY9nw3TSuBjkeXjbFfXjpFwPXnsh1471",
  "key19": "5Cbe8rg4MHN8DGm11TBhLzYuXoqtRjJjBj1ivEJvrtHCgW6DKuvj9AuyNAezRE9JQZd2CTaGufM3wWNkzjuMsQJ",
  "key20": "3tYGegGE2fNYmL1qHhn3hmetihWFiGRasEv9KoaB8aCH9jEfTSCWwKBBhps8L66MHzuEjtbZyzXXWH5VU3rpk2aq",
  "key21": "QoX4kmnH8zAhWwJBB5KNtutwvFPBT9FXnDpjAb7fJrpqSDhBnqpPsdBtkdZKCt2jE3WYQGnaPXsvQuiE59q6VHk",
  "key22": "arTqgCHqWRRCLgTPjjLeTZKQDR6a3imrwyLsHa1e9zJ3aQMiW8WMGE16cvjtcg3AyaYGtKXUiipeg7rwoDn6zZW",
  "key23": "4Yys1xUc72cGiwJmxGocHF7nVW12KqKxrhKGU5UFAtMBwHPLkKs9soPzuXYS8u1K9g8weZ57XPdFu5DapVCfmYF3",
  "key24": "xLB4uuY2qD794TqSyr7vtuKoUv9AKsFEA5TuFZ6xo19ntB77JXfEkFkeGcn6QP8Gf5DrzxidN8wYZittcr7qheE",
  "key25": "3M5cBwbYUfGH8RWEpTSqmh7YbPyDdKFiBVeuu66ZAwtpPbKhJgxJDpmMu8HaPUdnWenuSCemDX2CNR5wGfbVvo8C",
  "key26": "5LFBxykQ39pxnXbeyTpDgMTGr355Wcwo9G53SJXiJDMu1eZEn7CbnbjeECXxk6xeCA3sB3LHc72EqZ9RNGbkQxj",
  "key27": "4kzy1ys2qzmUwhSqtXu7V2gp5TRiLAZYEcKxRugUM518LNk6ekWTKCCJe3osKxQZapp6dQx6JyZk2HpHdtFkzgqe",
  "key28": "cTgvBoFnbjWje8Ye6K3XV39ZGrvNVy7H4EogeSpKK54czWjr6n56uAKZAS5iiCzumcrccKiLBUK9MAifNNXaZeg",
  "key29": "4U9WXAtnCCbUkHrMAC1Vkwpkjh54zgbpjj9CuEURxorMiQ94S9z1qbWQrhF6LqgTBrykwYt8NXyYWm3JWQGMNAT3",
  "key30": "3AZhZXidCP6BezS6DMDKNkRPgTtwshB8dxGstJfjwEWpsXSoxk6XjsNB2p5cfVrXs5uF8tLVchmtamTLpBkSHBn7",
  "key31": "2RHYGsrsRxZq5DVDEYSWKw4AhV7zYW2NCwGMbYwPUzmziaVXf7H2RWrmLMEqe3GEGUhouimN4CrtGJ2SZogWoMdH",
  "key32": "36qPgravoAN4EgJmNT144A5RWqhAUcEu1kUKd291XAKCyKraW5YyuvJVj53NVydrLXH3X7yxzcicrvnV73g7U7cR",
  "key33": "2mMaYJg8FSQPBqRr12sA6nFpqyXWHDX8XyqnLKCiT5dBkyvPGxcn572NXVZ9hQSCHRPgABKG3JHFYJ7XZ4R9o7HX",
  "key34": "biDh6QWEr1pUMH54mHeFTJZ9su6F3jsvtmcYvcEjUT8VgwU61rDptSHcCCprjMtGXd7oyCskuamioqJXNhmTVsr",
  "key35": "5A7QVBAjx5GgLUaJUtW7RQ3dTLPDqyxo4JtkbosKaz7mVYs9A24vQfzuyfwtvB5dLF9Z2hjNc78ojg6rJvH9kwUg",
  "key36": "5CDufofLRHoswAbcE6tutdaZzVuC2zfKxRpMxKRXdJqZwDFquoUkmqeQ2bGUa3aq2a4GYFM7jCNG182iP4V8dpJG",
  "key37": "4vcun5uSZkL8rrHPL89DmBFq9bY2vWgWY9beMRuVprWA5mKVR4zsvF5EvhgjVCMMbd8MSK2FvQUQkgkJN3tV9evY",
  "key38": "y38d353EDYYu2hfk7H65qTNaLeEXnCKP4ioRDiiHdcZkiC9FPvtPxQMHLEuJr48ZyBMvWwgjU1ty3RyczS7m3Zy",
  "key39": "4kg1Auy8QkPEr7qVWmWMw2qxSpfMFeNXvzuiqmxKkBfLWjNjvEoYx5JKCE9fcvCkuvkewbmVD5KqnTUcju2RnkgC",
  "key40": "5dbyYBFC7pxhy4NM2J5AMeFtFNuM7fXzmRaTEFvASZaj8vGswVfavCWzCnvqPF8nwnC9SuTDcwxMRQoXTv5anjdC",
  "key41": "27uPdeYQdP5nXLRYFxwi2eEZ7xPDntwzyXV8rnpQsJbmywcRYQyahwSuFDQ9zyEfEBCgXFMD1YgVcEvx42iXiQxa",
  "key42": "kGXBqwTmGtZ6Sx2bAXnr3QQoQ8YxgGctN7GduDius6VDPyGxfY816mw86ZLReqxt11LoZmWuLXiS5t1afQWF6Qu",
  "key43": "XSLbdRRCz6X9AANjceL13dJz58AWcZ1QAhz3xvFaC3aYoWMTKhca1vtRQ5ioaDdrXTM3ooFY1ayFykvn926NJe6",
  "key44": "132c4J28TQxJYz79aA63NUkZWXtTuh9CJHUjJ3kZoVCSUpvofJw2EhvswU98XfRXVJSJ2EKGXokJSAPWXd5p8in",
  "key45": "4inZ7jZpCgMr2qpDXok15jm9zarL33AHBkVk8RS2DR4SSdpQuLntqwvXj9E3UxVwQ2hd8AhaLdKYoDit9mTH6q68",
  "key46": "2HjsCbdaVmknwak6GAReZ4iKEXzL67MpHvpAQoSwgHdH77njrs1AsY3GLXDSTZwKJkpdDKb94AZxfTPL1bEo47ug"
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
