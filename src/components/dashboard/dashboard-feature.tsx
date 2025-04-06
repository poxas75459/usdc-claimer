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
    "4NR9zvNrG1wkqw6WtEzDwzrcnYK2G76W4YgKoyq7rqoqSRc7BgntNi25K76PJdgPVdtzgJYy2gjEHkm2ToEaPWG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZtmsgfJZ4kE8PkSqUQicisPaFjMveCvxD7cXf3MPAe2jcbN2GTa8uHXqdTMjNSSNq8HC4EaPnmH68K39bWDB8sT",
  "key1": "3ZdGnwYLvMGZD8FEX6JEwuUzEDa8tBhQFnFQYCPQLaE7oaSdmZtz6E6J76vDYSPBN2iqRPq1ga3YyAdc1Xe5PNCK",
  "key2": "5HQTyFeKGVEXPWByLVvY5b4kA9hhDTqAQQ5djitTJZG9U6bHtX19gazKftpBUeDHKN72STc72Zo4S1gKFgxYcfQ4",
  "key3": "5RCBosWW5PA7N1iZ1EdB63e5Ym8iyiG3MKKkc6mYjMpx7sLwuFJQrkZn4wCNiaPk72nyJPvG2AWxogDqpNuWVd4S",
  "key4": "jWKc3x2VKc6GmjvpwVaqbyR1z5qs2zCccMnMrSwHBdaoC5cjtA37Cy3wR4p33rT7XhbgGJv8y7LAxoGtuQBgJjn",
  "key5": "3BYaVSa5WC71eKkEPz5YNvFzsqxfrfmPAfBgYDcSdhiNP11vGCb3MhVCrKPURvVCnJdwja4DSRLDtgBoJQ8qNSsV",
  "key6": "4SLsr8rYWDBWgarU8azJpk3ttdnsqDm4BqHknPNZeDwsGaWZnQpN9mggjLSQgyDFpQSvDJCgcHK73vbgzUSSR8Si",
  "key7": "34NGbwtdaK8n8VAUnNH8has5zXj73neAXoxybU1YP7ixLjw5XkpMuV9H4HU73CtCoPWwZWUxLkmjZUSne9WmEuKt",
  "key8": "BvJFJoTpy8mjhUkRbbUDUXtUGDj6sqm9cGDnAnMaeEDMmVAfSQ4cBytt7cfH1YvBsqgZEvsMpNDL2PgN8Z2ug7a",
  "key9": "3e2fMzmcSnUgi52FRQjgJdKEWMFm2rkAnUj1xMLbJ39hDWVjzgqMi8hGv98NWJQBTtDrofxQ79fR3PXyN5GotBg3",
  "key10": "56soFWhR87LLYd2wjDnJb1UptFiW2jytF33rfttEmNW9a9chiafRAXq7Dek9xMup41sNT9P5L3Jq2wqDvZTgfF9i",
  "key11": "3e83128LYj7iYkjHjUVuvgwrzppvQz6WzWWTcpzheyBzyjmnQHv5SWWjwMfF46ohGToc1Fz2MQEVdG5RfDyDhHKe",
  "key12": "4xRvNKjd4L9MzxBwGfh4ZYfpSDswsCB7vRaatjpWU6PiNAsjWadLngsgGCUj7YVMZJ7tDtpKxUrh8fPyn29gKmDL",
  "key13": "4WFFXs91vuavV8Ub3DARw5R6BhyiuWAGnHcpnpSKnUCwTNTkgovthnVbEtk3b6hAoVXQpcniBesLXcnN83HPBZ9X",
  "key14": "5piP3DhHas6vu84tp1wbPDdCPXtYXFepueeFCQHqEUyDpFAxDhyo6YMnTYVhRk9ziDf2qLxy8t9wneUB7pZaTeHR",
  "key15": "yn5UGksVkwKYoxKzZj9FqiBuoQCkqD9v6Qp3K1cZq1os6ieQCykMxeGspN6Y2qC4Wj6RnSbC7UNFK1rrRuCVyeQ",
  "key16": "28RbE5gKvSHDTVTUiowPfMaBEdsyvYQ7cXNkZTE6HsjtQu1N2Qay9datiT7fBU2ijU1uGwScPwJaWNCbE4gEkGBC",
  "key17": "5d4zAmcvzp9MYfeSQEcdaZ4k6Cw5yScVACwm7B6rDAUS1BSgG1V5vCioszMvHCngsxVcbZBijG16ZsRxLhsRJkDr",
  "key18": "5PZzAbVj7MJWGhS9B9VjvYG5U6a1obG3b14jD3ngQijipgXNGQ2KU3Jg69cMYUM5q5sN82yDLeS6sY8MeQMNWXWs",
  "key19": "5i1npj4siGD3JixC5v8XxUHnR3CPCmumRU5FuFokznm6CKTXGAzBfMYMaiAGGreTwh274su7SLPsD1MPVzkcJLom",
  "key20": "66TRwsgKpWiCzURx2GYMikKqzbk5GemGUA6qKfeNgJqQbjwR9ZFJDKLaXRH3FvExYrH7TE4BhVWRU2eKf4dRpP8C",
  "key21": "5pRphKofPKR9bu9kmaaV3CDMBqXc8nwYj827gptkXnhPnXbhCGNvmnGteKXfa1SAyKKFV38xh3L2dNcbG8XWju2J",
  "key22": "66jL8FjosCGZ8vT9NGZ4VVJfJR94QLFxgPCbeLEQdoZLqtxMqq7QvgjTZsLStYu5jdUmBrwevYnj93sAtw6YqQHP",
  "key23": "DBDGMj6q1opw34dDnWogms58VbRYcPMFStExWWPFjmjVDyCHbSuuESLCjhFEhY1kdxqbAJcjtaNahRmZ2QLZmYZ",
  "key24": "28u4Puj3F32zvmcVJTfjcSUBj7xiyqBRrMoaKU89g8otcBkVWuXvriFTzjkoMb65gdu5Dbqf7UCzuD9doWNgktra",
  "key25": "3NFAtbmBBW94u9tRXZbiXF5biUzkbUwvzaRPfbvjoPB2j4CxgM6EJYmYdguk1xPR1UyVii2KS5vtKHASMyUWqRh9",
  "key26": "2d7jZgncyhpjtvnwhV8jKyAa6PYqPQJss3HmwUHFLBMSyq5x86XvhBxLBzJZpahbrCkGWidCMjAsy9pJmQpNfLQp",
  "key27": "4GrNM4ggxTeddqqcKGbJQq4nRrfkF4wWCn288unB5yzXKy3pHk8QqxD8SpZUTCq1ymYkuXhmnjDDJoiWVivmXbM4",
  "key28": "2h42d3VhnDjE4eg2YkC9jkbuNFATRZDdE89ZdyvZf5uQdwweESBfVYRUeXmXpwQ2BxHPBhRQWTfiaYzYkFvkBBNa",
  "key29": "5QczRgeyct8Y6zdXfiXtR7SrkwzwZRctNk6u6W5znrwRTkjDseCD8yAKEvb8mVsdPgm7Z5D4i2R1QigPA2E2ZC1U",
  "key30": "24vTKr4HXGii7aW9nY54NBUdDXLLv3GnHprgN21mGFbQyz8CxQ2MmQK6nfQbbFFgdMfvv3dE9PGGXPAyScP5ZApx",
  "key31": "3wtio1dmauURJBwxTUQsCoKpHf1js7154Wk5yEKBgp5mUjWPUB4pwRjcZNK2g53HpW2pbxgctjd6qVPaQ4ynJCJ9",
  "key32": "NVBj8fZJwci8yaLWfvD2zKQU2ZiTqccrqayNeEBe3WbkruQEz8y9Qp3DFBVCZtKf6d2P2Qow7hUcLwH5FarBxJL",
  "key33": "2auTtwPoebCdydsj8pgabEyrpHVvKENAmKzQBztua1AhofSK6VuKiNKE3ajvX3HcGQJfD2dN8t3PqtHHLyfxNThf",
  "key34": "56ctb7bGMHB6j1BYb4N5i8FwrKAg46q8kYyzsHmfTXNQZ8pYnjQjmWXYwTobepx8T3AwH8VMahBmcccFMBbChGrT",
  "key35": "51jJ2ro5m99sSeHaJX9RjuAcfqLin7fJvuLgNo1tsozkjBXvb8f3ahhKTfRaffniFhY3wDCSBfNDhe27o1rZ1vf3",
  "key36": "6njzcswtVXaYzGeE34wyzvFHN12sUxKLrgvXSn72EVuRZjbpQh7S4gauYJAWaihixW2SWRg9hrcz14cBb5s8Zde",
  "key37": "V52iUPxGemSyEYfBrBAtUNAbMk3RqdWDaNAEbjgpaYQPYpmDJQbeCAndeUZzQRdLSJEqkwCM9GB3D7xXbUjQpzQ",
  "key38": "5oBMoYnq4PcNva6X1gJFSF76KuT4JH84oXCku9dZzXcnsKrCo1E9MTVxYD1pTU6EauuATGakHFmjp6nsQoVhbRuj",
  "key39": "5BKkVYnHgtutAkid2b8knKtsUJGJKKQQaaJ6QBq4xVuDrRqQrDcwF7jKxSd5BTcvMEw9fZp6Q4nNFT1xkneZjRPs",
  "key40": "59zG26c314ZW98Qz9QveLdKxHMB6WVYSeGFAKChf8EnYXrKSYUNvUQ9aZ61Yyek68CtUpP736ht7a8onKbfdrBMc",
  "key41": "374YnU7my9u8EyFcBLQ5tdkQb5dAitAMxhp6bKjoPrhxMfE8CsiCC2dp4Mvcnj3eRyzmbvHz5NhSsPpen5WKbE77",
  "key42": "Qtk1e18r9nhsA6Pqm5Y2Uj4VEKT1Ec7ANvNadzvgWv6o2ci4wiGV5B821a63p5GifmHoNSQe3fYHpDoQKQqcZiy",
  "key43": "2DZzvNSsLdxJ7JQtvLpBRhDKJt8B3JKkaHcU9bDRaQQHN5NiZRENvdZvzWgGS51SbcvZg3iQrKs4V8wzrAxRRJmc",
  "key44": "5E2Di6HKNVKWi6KLEocniUbxkEzPQDozNRctywWLQ8yf78eyvDHcPyEXjHWnRnkmT7EQ5uBT7BVie2a4KMEZWm57",
  "key45": "5FiiC4XHrjY8XHbRMAR7Xp4tuoj37jAbqeBvohLH3GVWCs1Jmav3cDrr9wGW83GnURiHpMPeXo3nAd9SjTYtxWji",
  "key46": "5mtaz2QH8VhdeBaA8ryKxbGDPjXcSq3RizGZrWgfzyd39zhhAsSLZM5mF3PSQRos5Rs4WbYJDiizC7Zc46JoXZzx",
  "key47": "2Sy756PXe66ixHh5KPRYGhmcAuJcdEiJ4sS3uFq9wCQXYtftieZNmtg7bPbv5VCY8jfwHfMRf5cwnnmXeVpebkM6"
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
