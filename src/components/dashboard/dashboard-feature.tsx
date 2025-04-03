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
    "39qv7oeRyZoS1HFtxFPLNPfapoqYgsRRV7SFccJab3Ds3YPa1QCpx5oiWWk5QgrAZ2zoT3fmbDcKMedSQdBZinTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mS5v8zZW1YJECZGKYcnStBsE2RiCh533cm373BZcjMWsxm4m6bmhuVcebHwv52ssLjEqaZNC7HQugGrCmVJGWbY",
  "key1": "di6e68aQ8geezNS2rzR6VyycXkXVb9zvhbS2AVy1Xj5TH3v6SZfBLd4bDjDeYNkG3B3i76cRgDeY33BiPkZkbBq",
  "key2": "54rmqBaoVkRTse3HLDKNotD4cyMWz18VEo58cEsCTRpGvPuuFqFG8D15ctAYzAYAffcYriJ3Po92bstULjWWZ8ji",
  "key3": "nkX6P5tE5FV6RxFPccotUMojm3e6UngQcSDA4APo4hpe1iwxkRijeNEXzNybnwcWvUcd59mLVTsdPC3L9QMeGj7",
  "key4": "2vH7Z35WLdWUdYJs65QZxVK61au43tsWbLYLNZwvU7WPD5fK4WJDhzKjxHi88w1Q1HTxwqvPrh5Cb99eVUjozaeo",
  "key5": "4fZ5BHLKm4P3ag2LGWGbTjsSzvoYGANiyqhP4DAbx6eaepFZWAsSYFAWbMHqv1ZheWbivje92CGyxsQAYM4KYm5t",
  "key6": "3e1BaPgGRA1hTNdUnxPeXV6sejqWDgrzhtAzmcbYE6rryfjtGh6qg66CuBNicRetgwwZoxDeB36KxyUptvrqWQFs",
  "key7": "3oa3oeiNBpbHPwvnoomGciF3Sqa26WMugU9vWPKoWGq1RBYYoecDvsTowXn6Vhm288wpbBmYwHTBUhHnZiDBtKvL",
  "key8": "4p9XZ5qxXGtTBTzUMwgncbZh9aqFZ2vYv7iTKkdJkMwWBVYJdaq35ehnPE1ktq7wFuo9Q7T9s9SR3zoK7Y37rEpZ",
  "key9": "42cEVdD1dK7qNnfXsWRxsDvjRRL8m9x19rMYs8LTsTezFqh7kFLBFARo5ZGcgCFtSWupBEZ1ZDPAE3YW3xc5RHS3",
  "key10": "5JXX4TbTr8MpPPG1pzwLJFEgJbEopM7dswKKHP7Pq9UH4FQcpXTgb6Z68sSoGvkjHU6qRWnh55nfhXACnS3U2sbn",
  "key11": "3J548DVvvSCniMGnU12N794PvDBHUVWcfM1ecgr8BHCn6HmKH5nZ3gXzy56fjTiGYcpJcLAqT3YeHxz5fCpqtE1J",
  "key12": "5iafL4xZaVLWptMv5tXJnLX9Dsy7bwv8ciHRv4syM5rw94UGyBawugTAJXUQLAbBMsXCZvzxUUGMRpGJyoqqgkee",
  "key13": "oJ712rbyGzjQYMqrUxWL6cyyX96agT4gPqs3o9ABriuCGUs199bknzK21mcP3XKuR4Mu7Hm9gKvxfxsadWLASoB",
  "key14": "HYwUDZ7FrERmYLFmqMFQk6Z4JwkGN7m7zWwEyYV8RF8QWNBNY8XgTCUsJ53ou8qfYdETbCs4dNbNSAnrUN2h2Ym",
  "key15": "DpqZZcvvFyK3RsfNct9o5Gjwu639bBBfYAThYqKDCXu7vsiBtHdBoVhXgffVm3F1d7wmaMRKzWXSarAi94SGENM",
  "key16": "YV4WZ4Auxkyp2ypmJgfE6DYS2yfFp1bBxUn4Uk8tqAcv6dHsupzTDFuZYJxvauVKFB6cvCh8y5nyRh9YXpUEG9n",
  "key17": "5kjzGURqs24sFqZFJEPvnJZk5i6exvjKDGTjF82ob3g1pmgfhFnM3SqBf4spZze8GSXXmXAJ4AVZQfTBzaE5RQ2E",
  "key18": "ME51VLYEyfWMPnYemsNHTHZZChQynvy2q8AKgMHV7UP1YThbLd5mR8FQULrYpYvYqDFMzoJwSLkdxNh8aURPNit",
  "key19": "wFdDDQt9NhrveUv6qMUowxWn3K3eab7azL5mn8Pajax4fb8cj3H1AtRBTmg2L4Lqv4aHkxggcV2n9nnVrDcbpJ6",
  "key20": "476LJ4myGsR54BdBUT8CiVLnnX1RazrfWGmGqGRuLR67aFiFATrZ3mK228xh8yb3KBv9WUN99J7DohGdxUkckGEh",
  "key21": "59v1rtoR4Pkue7Xo9G11AJ63nNhEu9KcJsrZKtWKWATwATY47mGekaLREn8coXNLPQB6xz1rKk9N1wmvY51Wn1Nw",
  "key22": "4AMcZuK7d5ynzaVuuJgUd58LPoBdEHHYCbf14RSUeLg9vWKAdHpZzB7dG9TECmGh8fqRyUaFD38zEbksLtkEtsUX",
  "key23": "2p54SMP91nXngCJroHdtjdeYse8ZgXPYFKXwu8hks1e7QakghMsJACTWwUByp41yL6JPreMRvKKRAh5owWT4nSeZ",
  "key24": "5GSEyMUpGFWkLVzw1TvzcgG49MCKNptEfSiDSVmWRZvLCQapXEt6GJUdFa4R6FcAULxVa1oq6xUyDnPN26hsxu8L",
  "key25": "5NEKvAaDhxvLbvGDSGAdWCxUKSfM4UaRsRX7syUmg6pPCGECKSU3Z9FaxgC4wZQjHeC2c8aYsKCGhf3AmfRBj2Zy",
  "key26": "begwKaNERRT5W5Nho1TKkz4wxqo4TZUHBzreyBEN8Hc5QSpWBFXPWDdKZqfUiT2qrvxnaVzdHrKecmhrojMakfZ",
  "key27": "617HyDwSSTnfRoLANLz7ToGfoMtpm8WVTZvNqDuXhHUPw8mdA8zsigHkaEyWuuQLmFCCENgZKvoJNWb2GZHntG9S",
  "key28": "4SDVkVikaaTgDidW3eCLmn4B8CpRb1mT4feENihsGgeTegJhQMVjVxVcGEjscAvveELeMgwzQBmXWJ33oVUgcFhy",
  "key29": "tVT7pYscwKPHnzWBwGMhQiuia2NRzR7patfLkDZhAv5fjjsL4FJ5MaiaktgXzbYJ41HUHDBx4wJr3DMF6rjH6j1",
  "key30": "3EyRMa6jHhr6btA8SH4oWizEHotGuXuNvQgkK8qxemYH1vx4vx6eeFHVdq7W1PZKoCst3fK2GFYHGyqN23iamB3N",
  "key31": "22JuRGwDdR9oHuT7bXypoHDW2RYErCRQbjbhcV8yAEdW4jDbPzycLZUHYkumjNVV12QTJMz2Nv19Uqrf9pWFBbFN",
  "key32": "hzBddz4xT53QgKykyWZCkpivcf9F3S4S5jpLhXhFzUNhbXmLjqokPodZzuVocnsJoMoH69PYMs9GTe1YTXHLAKY",
  "key33": "4p5fGwkZpXThHxSh2icUi6NfPQub1dk32wQWpBDz6UWFWvv1kKXd937PHczqui4xn7kX7iwid1Yu5MJ7mcxMuesn",
  "key34": "ixgMan6ji4Emoubwxy4x665b5mC522y97xnSz3saMdXkfNgGq6KeXfgg9atgWa8HRmvf6hEJ5AHWW9C5z8PFHcr",
  "key35": "3AqcqesUycRkjiw6b35GUdxbak3vFkNUFZ1BDqu9JLtvMx6f3tLRYSWknFBcqY1fUTKPptsDdoSgfJBjw6w3skhD",
  "key36": "pNRm8oG58H2QFzqMK2y4jiAsf1QvA3Ee2fgEQE4BHMmVSwqTB88myUmitgatHP8zrTKD6ekb5KMVbGbNhk43mC3",
  "key37": "5TKHBL1oSq3dyuEbEPjwdJ58udXKFkwE41C5Aj8FqdVEthCeDfcCFgniMv6dMhLTSddJpKhGSwZFX8aDAgSZ4hmX",
  "key38": "5xNzSQQBCMBqsAVcVBQx1UBjJdnYeif43PTi6w8AU4Uzq3Q7UhXEsKgXhh5FyHaPbBLRYX8SS3LW1EtkX9QwuK4m",
  "key39": "2VEDDcKTkDZWX3E5v2WJYjPdhT3GpePtJ3mcz748uoeFojNqV63vTJw8SvdkBJGXgwRCDqGb3mjE94zgYo82zKgJ",
  "key40": "3EYUcmQMt4jcdwRjYV6X1vSUWVc7bkb8D96HpJKQ3igd2j2d62W4Yq9bVK47ewWrDdBC1aSz8iUv2yg17ghvS98w",
  "key41": "oDrG5DR94U83Cku8NnjpvPFJCPozR929Xisb2AKV7wFdVXkNMogVUz9iytuT4zd2sJjVXVBmCKNSTudvYYMhycC",
  "key42": "G7L2eUajMvJjUNZ7mrS1LxyRKVjpb6Lqte1sN99SEsr6L66v8GmcZBo6ySTkBBFTKMqCkbpsmVNrkcLjVs5km7E",
  "key43": "5J5R1r398LdoSrPdFFDTdDT4BMs1EFnSheNZwNXTs4Q6cz8AV4cgJyoAUdn92i6hNPMg28vsn6YWp6nf1qc1LNd",
  "key44": "3SHJd2jLeHc33t4Z3PnZkKyC1LDHiK3Kb4yeqyJoiqTpvusrt2WcukcziJacp3pNqxxhv7c4FEopuoHLyvyVzC38",
  "key45": "LErGTnGstiYLydo85V8asPRADWNw2kq5G4bUSTxByY9HKhpsk273ZgGV2Kpox4iRsWw9DQ7p4wVjWuxUGY4R2S8",
  "key46": "2XgKgQTsWFF1o8ZBD6L6GQykMnDBPuRVjvtwtGHKsqH57tekeFXte9Jzv9jmg8ArKN1VGFzqraRmWEHD8gGpb2kZ",
  "key47": "63rTPeHepeLKUBJsWG6R6HRyzyimAmiXwHHzSW2AH1EC3N3174tmG9FsVAVeD9SsQ8JPhWRDNNABiZW1PhSfcgSa",
  "key48": "4kZEDDmV4zPjzGgvyK5X2jRafMfvE3z4B2A6rpcnyx7s8TzH81mg8Cq4Yoaq32BkHP6yy98n5qkXUQcRxcvM1yQA",
  "key49": "25dimpvYkS5d2mtkz4rNbnuo1Zabt9wX9ZA4B4c2iznVXKZHj6yZDsaxipdjT87GccfDWSuhgBRQyyf33HT55BJ2"
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
