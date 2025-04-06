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
    "a2kRcTXBKdS8DoRVcnYsidQC4j8SsrCfc5fE5zuYdeEKhk3hnQHPCuF3DVv4vGfQeubBr1XFwZF5g8ujyKf2TLj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hFnFR1yvFPz1Tiyf5jYFWB2fKzp2SozK6j67waAZYNRE2JVervmHd5Bh4SJ4t97KuNkXow1QqVZsttG9ipTrVhH",
  "key1": "5EZdHAfHydAxZG6VJhXupmHRQuPMupPHQxFpAHeS46RJs6MLnYH62zJmSQmuxeBJVr5p9QxjqBy22KbpzHgHCNgL",
  "key2": "ZSNaVNP4FvGMm3nTCDaChRhivuVW4KxnpyC4jbJGVD7KttMyUUY82hxRbPafxAg5CE3qiJPCRXWkttEFM4zv891",
  "key3": "5n9w3Qaprgt5bmp9Xnfyy2nhFjuSTJbivZS1zNt47zQLLEZm6jj5AFfdW9mpCj7gVKuMKnufhQkM6YLUSXgcsQ9a",
  "key4": "4EkVd6FrQRfCQmAYMxTj4RCcFPAbLH2XTAL1NpspkTXCGMEmdBAfSdT8Uj9HQJBMMHfD71NESaHbV7hfS8soM1vE",
  "key5": "1Bru4mhzEU2HXXXr4erAnEXcUhmKmFAPo4nvPvCiC7kCi5rd2swrNzrFbxaHgPATLNJxywzzK2CHKkW2K96q5dH",
  "key6": "2xLsMzLRNVNs56BWN9iWFEJG8vcxFMQCZ9XefwWFE9Ka5JxCXE7SM8We46YGp2Nss9bNLcbopUqkVpaM2JphgQF5",
  "key7": "3ypPqin8gKZLhUq1gXHG3XAXrAHecKpdYRM6mfijJeNxiMfZ2skKhD9QaHXPycXSe9rKWcrUGDtoPZbv1FeXvzvv",
  "key8": "2z1udG6eDptdS4ptucWJjfcDUcBiLQ2mkmuVPr8LcUM3HARaZ7RcT1zm2ECfc5iPBHnpkPws34tx9963QwwE7eW6",
  "key9": "32EsZ6azDV1GJ3i5wEUAJbeTwUF67BQ1rPc4Jtn441DTiTF77ncKvfHCmo2DQoYckxD1Xwv9FfjAg1Nw3gYatBMm",
  "key10": "3R2t8pEPS9ELa9fPs3bTXCUYPHzPNbsFKpEV39pEfCKHux4pLqYLAC4hDLdXPnoGXJS4AQbi586aE1QFFm7c4FyC",
  "key11": "5f161gTy4amPMBdCTsWiuuodfnDPoXMWEiaEFxBa1Na643EaYWC5Ji69Rx9Zmez1ZaBCVHgGznS1EoyaVR18qR5B",
  "key12": "3jJPCnKF5hGje4RXYpQQCAQBMyrfWfdmRAUt9KT8t5f3BoRBDuvhXi5V9o19F41sHy1nZcdW5ogM2ygXArMQcNAo",
  "key13": "5GuBzSeaqturWU95ZmBrBbA1Jqqs2Z5nGHfnmyExWGXkAz9kS2Mp6y9HeKGKfHhg9h8DcVp39zTiWcEAQeX1E5CX",
  "key14": "5YwU9t4p2kcx81MaFUXLB2vNYNk2NGzRve15fCUXh139zP7z7VTYVC5mevkEJK5CJaVJ7BCxuxLv1zEy2rfQr6e7",
  "key15": "55ujJ5SoaR1B9PKsqWmVfsUbhRzJqv4vx6MrcKBa2kZtNhvfNYGPpFSH9zLeJz2nf34MgBUg4dg4NZQJGEgDEuSV",
  "key16": "3ZFB46SZfKJABS73DowfondNM3iPUwQc7AYZY8vjNe2q1y6ivnzcX8ndkkULXV57tVHttTmMCKDtLRQ9XbNoUK7Q",
  "key17": "3TaeJ2VLw7zNgYwv73HL3AsdQb2HqFsvpBwyp8rarN3y43GjRAqwEesp3RdPznbd5X92XjgxGrntE6ekEqWKnSWq",
  "key18": "JNNkXfBgVyeRwxA87Pn6sRg6SMnKaKLZgTPYWtxWnnveniUCvdyAoLcVZ2JXuL2ndQm8mZda3hh6n9VWmuRFR16",
  "key19": "4eSPbyWga2iKMk6zu6q1oLyQVSkjLmicoTgrnwfRJ6TJaPh2JDQSdkfDEEjtJAdid3DwmZtMqM7ce64682EbKRRM",
  "key20": "3v9th2iiie3pM8Su3EXYxHFcz4CNKyagELu6EekSuqE6jhFgmRnENEiFzANagFiDsTLz8a8XVGh92Bwi2VWQ79b3",
  "key21": "3iLFU9HqLZBphz2BdmY6LNrjgYEzg2AkXSCgdBXpXGRyGy3hmEZprLUJRRvxCUq5oFUhLtPi4Q1eaMBXvJKwXqED",
  "key22": "5fbXyqQAhrZF4DRJ4ZqupE6A17Vncyi8avLvYBURE9cMrrhkNxJze1CEvXbRXUJtaYLG6EakV32H42azfvz1XXKJ",
  "key23": "5QQhM3LzxhXNCptWFY8ENS7gchRhzcUhfUBwyDBGpmJieArjnFP1VrTTExHQiY1kxP7cC346CjGZbViFXose4S9E",
  "key24": "5DZnZjeb3Bk6S8LPo5F53QBLkhVaVmHufLU3evcjUgVGKsKd9XCQDv7xW2o8xxGR3uaVJSPe2deGmuQaozrN9QCP",
  "key25": "3aomdnZ6ebhSq8t7wWobuz9MiY6TaSwde5KnzNbEV1pDyRN7u8GeiExUoyYDdsBDzrQvu5JtMRymxciYHkGUJgaE",
  "key26": "2T44cUXzhcmmnDHWQ16mCogyAu1xv7U18d512KGRTAh3JFnqVGbxuAEXMi2vomojrEdGXKJ3dmGUShs2svoAzdMM",
  "key27": "2ganuR39S9cYQ5U3EqFu8SgR9gPibm6zbNmW9tnvttU63SATyrevmT7maE6ZtXHotVk4AFR3S21HvYb1kWye7MTJ",
  "key28": "43Gch1qquzfugNvZP6Fotx6uipGcSJYm1AwJvFwvwfTBS56wjn75HKPyiGXTJtQP1RV228rftJVRsXEQjEth5eDD",
  "key29": "2QVdudbDhjsecvaEMZBn1yb9CNCaowfZKiF2obuRXB91iqqhv8eDKkLGDgqyrPTGJCvzqAsPVR745WCD8f3cAcb2",
  "key30": "31ChRRLfQ8dkAAYrysJwnM5fho9qgu8YLkJg6THAqSjToMQVogRtFf1RS3ymULLwRgyESgRY5nLj1o3Ybc1nJhP4",
  "key31": "GzcwhE6Ka4HB4N1dJoM71UMVzm4LPNMQgGfbaXYScT2RsJNo4HotemYGH8gZQ5Sb3wb65RDsy32mogvmshHiq86",
  "key32": "234JhnVGHv9FNuokEpUHdDkDb7CRe52fu9gJZ774ggQf2gDVoPFyZZTZSMaiZcT7SWarwJSqo4pubjDGV3cBYKrh",
  "key33": "3fBaGrxJjS6VSn234WxM8Mhhqsu9neCjZh8VtF7XoYWwH6LdBtebP3NhzmZmEJxscgdQYTtBqeYaB34TVazWQWn8",
  "key34": "2cVY9nggTh713u2sEwa59zTsPMdKgjz9CEfVp67vu5as6z5d4jWgwyxt1NjyB6DtyAH1aNWFvkb6xVE9RCXsqzMC",
  "key35": "5XNJ5FQThfB2Sd2jbaXxWWqmEio8gix6T5nFLUSSFegbXjUEq7tg3fCsSGPPngD1bFih3ZWjLtcFpgfaUeRkNNac",
  "key36": "2vAtHkTzCNcPjYoZLceFqUJX1DEmHxkdeWSVZjesdocTEYKQ2jjqwCBzAVCGLn93Czsn5sjS5bprZcxyE6jiAEAd",
  "key37": "3i3VPwyCLsDPByERiw9x2eR57S8SqEphswbk5XKgPt9YkH5cSxs4Ja6x1CPsssRUBLwASG8vuEn3T2fGpZmEZo2r",
  "key38": "43M3dsAGU7ngkRJ2AUktBbaoJBcW1BTwCHcgSGcNdMVJwMdZU3j84CHmyCbouAjwB6g3yMhzArHbtb9dbh25DiDp",
  "key39": "3R4zqGKkBUFKQMFsarCkLCjr1vK7v9xn9w7s6tp8E9PGz82bPksCRr4bFU1ysB6u5Qf4HwS98nvipsLLRcfikkBL",
  "key40": "2GcchLk1LYmpcHcMioj59JUyaMt2KDL6TqYfrGYRSYkB5xzyDSJGGjHTyuFboGdU4LdxjQCrzdceCcLC5EYNaSjw",
  "key41": "PqUZ8M8a4EXUAYVGKdnmA2rTbidLaRE1CTtpC2B9fTjZ6JC6kxR4iCsFvRPg9ZamKB7Z784czTV1deDreB8nG8e",
  "key42": "5Qj5PRMWvKEAFrRx4AyTjn7dPPHJtnJ8CeAtbnBkNTdgNHKGXAwcTDfnZd6UeNNtbsHREjbPSrBiNvkLnKmBUty",
  "key43": "3P1mfJKtk1P2uVwHbWRrGXjKkTmycoGhLAhQ1tA86vpBpdvz9EEKKLgDnuXVD5XwVrwo7WRfYWc6niAGXriDksMH",
  "key44": "2sP9oMgKiqeV6rmDa9K8UMvArciUvV45ao6LJTjhtVkSvJkK26kp2AVhzngfLroh3jUVcCNCkkxC7gEhKp4b5T7V"
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
