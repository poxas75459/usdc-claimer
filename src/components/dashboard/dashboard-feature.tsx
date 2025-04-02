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
    "5XJQwFMc75pnw6aknBKLK2o2YzPtwx4PVX9Ed1voq2R8BZE6NVncQ7MfSwG3AHAYFeYk6bxFd2B4J8nrRnYs75uh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61BRv3ewDPR4xrLmYR43fUNztsr31ZLpsPYRWKujUzKe31tmAPEFXbq6CNAr6Huc36qn7rdvUna1LzB9skRTu5xM",
  "key1": "5yijGV4ci7numCHoHHBEeVoKFjhRnAPGfnd15ZaTmxoNy5Xfct7nicZW42G3KJjEi8wwvmiBxLAAc89J97hxe8Yh",
  "key2": "5bgP9ECtzFAqqQhDPaoGSHYqXxQEREFghYzgkGczvs7CDnUj92Vgv1xQ3mk4oMkqZHPQMAVKw4TVnqpXBFVkFY6y",
  "key3": "2coMu99AbaeUkqpt6r4KCHsQXvubgGHKhWCmsyp935GWv9VmdwQ7zVUgTJhJK14GvHHefu3aDna1eHW9pw2xYojd",
  "key4": "3HgJmt9Fm4PDVE3UMYZxVH2GXw4Gd9XqAYLTG8Zdx6zBdFddJxvYdSnTz3Q8nrzunVZoaVpN9LcLEB2aWAZpuMYb",
  "key5": "5uVRgJumKaXwoaRsF2HD4PrphrRxMwv1aEw2uNDbd1beyHR4cFhk7NN4QoSWKJxg37SBYEzcUk1ivYJ9B3KNAdFW",
  "key6": "4zZCJNSAaGsqqDvw3RaTTHJyqpuoW1jRCzwuDEihd2PmVcrd36vHX4JFSeErjLqZfPAhT6f1TBtcmf5VdK45LJ3P",
  "key7": "3HwxBKDrQE41QUaqNkCMExSGhRnKYgrgHpmvGLRoJtg47r5LbDgTuhNLPfWvPSgkq98i6KXC9MNMYmotgGrWQn1A",
  "key8": "3j77jLHdsUZ57zPoESCQbPpxUGvsG2TuPA7YeZsxmbi4658eauCBBt8MHr4bWfr9sYhvermc4eZUuzWwTGf7v3v2",
  "key9": "tbHNMEAu3sunBNaiGNUSHHEKkPiQWcMYwaTtVAC1XBkTZWm7UgXVDg4LGRPppRhbaVgZvg2wYYJFCi1vjbPoWzR",
  "key10": "3VpyR336kiVbtbcUV52cLwu3qi4WAud58tWVDhRuXEwazTnivTfzUNC5Tx4G7Qvz5Vq7iDtxoc9zsdZG9eBk3qM8",
  "key11": "3monnhc3h3BKwgxgVoyU7sBbgjFfoZEfmbXuiwxtHKdUeAvEHh9T5kEt3KffV2vWjoF4TfC3uZuwxky45BRZ2tXs",
  "key12": "4xSVVNEhgrr7D2GJcEauRJeDYow86knxCxgpASmZgjHJSypnKfEjeS4QzscwEVeLew6v7TD1QfgxMqiLsR5ypSfD",
  "key13": "fXYMPjjNcyiKgsE5dYLXretQ45M2FDMGDb5LrEybjqeLVNap46Sdmgg5WRjkBs26uxVk15C148iHx95MgqhJBjK",
  "key14": "4ZTFLP59tv3op3rcsjq1B1g7WaxswjUUKgkDR63g43mRa1RkPC3ZDGbb4p5hZNuCTcqXAkfhMxugKEBsd45o5C98",
  "key15": "26FBL3KzWfKtgwEmg3PQhAYfj7ccTg4GdHfcyuP8SpqWtXGbMdke1rdA7roM8jS9ewJsPNzuTbVHav6vunGDZWRV",
  "key16": "3K7t6TLJUvcr6spLn7YYd1RN1gdLKLboQ39y2CyJCJRyw4gf1ei2mhqKaNzsbhzLqSnWp9SsMdkfX9Q57DcCC3zj",
  "key17": "6ZVyKLhSfjCURmcVoJNFvkRK4V7s6K7fzHjD8KJrbjxWkGuFudzoJpuZ1zHygppMcFGFy5KPsA83XCH3vrpLqXb",
  "key18": "9zJSi4e5KGm2dG2gByBcKUApyaeygSQLUoHiUw9mnQAa55C9KLiQcGbp5fqweQcJfPixTJe7UvR9YY5ciDi9aaK",
  "key19": "5ADKnq83Sd8gaCaRaZRoBA32CTvGkSFHb2sA9xYb3zERd5PN38RJCQqgLDvvXGqXoijp7TZ4UTqrxGiadpHRjgDf",
  "key20": "4377ucDvSfKJc7m7YgSfBF8qBkQrAd8AAt5p6EZaecJYQommtoEZaWPkQRCaYQgbtnm6pjD4wNFuvH9QUQNLTg2f",
  "key21": "2ha5hWJxjuP3Fz9iwfTrwZSzHHQKniwtKdUu3EGPJNU2EhgigvBp1Q3HNtAnt8e8UsyB5dn2wyw1N613eRGCU2UX",
  "key22": "4ptfgUPYQ2CowSDV98v34Bxz9LtjD4bA8EABJGY88Bgf58An6Q3PWLbLArNdkytFcLNsA2zcRjCPYQ7UAQJrw7Cm",
  "key23": "4BDhNhEnrSiJEY7Ya8u5svCrn63Z8jeQcndKoCaADt9GxdeB72PiQSCCJ9ohcz86pCR5XSjubmq1BCHwBjET5QFS",
  "key24": "EmekUL4vtKZnGCPwMXh7hm2tJsa95XxUKjYiwwk7v8SJCLbsYqxQAPgWAcHxK7ScTFu2fRMu7WvMBYNnzyEUuXD",
  "key25": "4ZkGAovJoc5yKLfqLLWRifhggvy1mHoV1SrC3Kp7xWVKdQB73L6XzfEbqKdCg8saSAXqHe5uf6dRyfKDeW6aKvwg",
  "key26": "2zFxZgS5UN6wDerDTUSTY82F7Xp2J6vMozG4y5oAFPZcUPvtsgcW76CQy19EGF7kHxtoGBC8g3Bn2Rp4t1HKmnk3",
  "key27": "3hfisvUbma7jdNP7VYpmLtYiW1fgpmvMtve3pwqho4yahBhCidz6XzgPARqEyvyr2K8irg2vqRhcsyMdKeniF5qL",
  "key28": "56iEh5eZLzqdoZ1W6ge2aw2SVCnjgUzE5mp5XBUss2Mc5JAG2BacYpJsHuLJDNkt1eseCZKPDE6ibATBHmibJXXZ",
  "key29": "3mzS3LhACgqVPqMmUFPPN6smdpctwmxdV3wSX4yQpz9XXz2B7fguUTENaugQxTcP4fUPco9QzQGDDg1iNmsaRw9Y",
  "key30": "2JKhAAkra83bHLm92BWfTxa3tqRg8EM5rKZ3DsKpeGEQVmzs5XJLgBdfBMPUzbX5xYx6LZo71SrGB7JCPAZjaiPT",
  "key31": "2eXmZ5fJP7zQAYbNezHTGTPteWiwdYsWAX4HKeQcASDipUBYnydtUN6YPXvCt6SZfftDby4N5kLb6AZvd4TnLJas",
  "key32": "4FEJFJ5G6mwJNLhAAKbamKdp6r9yNi2FHArk6Wx2fxm9W18n3Xx474vKUzZAdEKCmpMCjXwzXGe9ydhFnLPRtbme",
  "key33": "3upGVY7MpeNuBfR5kY7EjoBgGR1WfkxtTDtkbAgEToLWKMNKuknGoAYZdx8JY88RtDQ9wZZMYgmxaPBpUe61zoSr",
  "key34": "2WSh8wVa6mxaBRhjcikWYWSwaGW31hQbo71Mdzxjj8RW8udek5uzehoRbMxwL2zqJHposmmMYXmqnq3DdATgEZT7",
  "key35": "4YwmJP3vzzU65BmQUxdmSBYsq5Eg3HFtPpNiATfTpVLzs8tvC67xC4mrW1g7UH7FCirwWk2nGVtRkYi5ECV3TjZa",
  "key36": "4qexLJjdayY7E4fAu2B6iacahsEssCRXmm6VW6XNcG8QRHDF3uLJadMAy7grLeFM7WUCXXoSnZmnJwqFi6ho5YqF",
  "key37": "4tzGT2ouPwC9zny2XfH84cqALJWGK5SNnXxH1Ej5xgKKzS2KeYAMkKihD7mMEGo78eMJ1fe5VAKrvjg4j2i7mhzW",
  "key38": "63skzfDLQC2N891NdPL3SG2eoRSqVRv5pD8qeBE6MHfef1VnC19kmPKxT7Sq7yvLVGWVAPmVWBEn6TTXMJrNm44S",
  "key39": "2AFZwqkeoSwoNztz7UCcTffPDzDfUCQkGdumHXu8dudpTrascrDXsScBzSotkbbJzg6oTCam5YwA74WwQsYKJoEz",
  "key40": "4hzSae4KQmbhCHn6qELYArQwV1x9DrLMjBnQibzdt8nPGxSrYDPC1nBV7EjoKkk46Q5neBSustfiyQKGDUtLEnky",
  "key41": "514rSY5URTDobqTo7BedAcBF5yisYABd6ufo9uyvrmdUiSyXJ3M1g7h6GUzuCGGb5T5otqMpApAZHRqMuUyebWam",
  "key42": "63wwCahxT4cbLRDnDhosTN9z5WDuQdPzea9cFVQyJi7ZiyTFbHjHxFs1dXNGs9bSCJfdqDoZDEcY13ywJr7bKFnb",
  "key43": "2d9ssqpAdvjZycTSwEi2i1ggqgnN2Ev44URePbWAWVwfQ7Lweqt3RHAGYwjBaDM7UZ1716M63TyV7mymo318HFJd",
  "key44": "3Po3GmbUbqXaNDkzYxnGTq97C4W83Sc24zrSghMtw1UxdSdFQ6qRi32sWfEsFYveXAAbMhB8uBaw33EfxrW1T2Dv",
  "key45": "52oQyaSzrF2b2589x76mRy5ZGyFjuJHdSA2WmQxXgGWDcxW7jBqs9idsoeV9qk72dun4MiRCWzBL3HMJXpGNrJbd"
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
