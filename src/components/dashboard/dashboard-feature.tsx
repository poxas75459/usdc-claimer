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
    "3T6qrGJ9fthNpL1ytyuUnXdjGF9HGDBvXVNwAY8HUJiGt9pmtgWndiaU4ddnHu5Y1JjE8U8fb5NQu1jV9utx7K1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61FB3b9xzDVM5B2P4i26zGjbT94x3jZ4CwGu9a3gKoCGajnTNr1dDMCLM9kL6c9ixtg4PAKeuFr2M4fLw6deJHE6",
  "key1": "3sTbxgRGPmdKgN3Az9UqzBmbdBJoYxP8dgCiebkDj5YCzSi5ezbZp2bcwHCrjTC4eWLgiP4QP5XNXiHZRf7zZDAi",
  "key2": "54KctNrr8iH4Sr9Fgk5pop5SiKoDFBZLtbT45ENiyMuwB6mid5Coeyen8VpWRU3S3buYVSweLZgwvLyZwXQR4Sn9",
  "key3": "2YdmmaPPoG7H1XkfvpaNav7WGcsS3HMPgvP73S88AETQJuGBvgzbRV5GiVx2bMTTkGd13VCLeYvAy8yCyQBnsbx1",
  "key4": "bDTx3iD7AAaHBD2bJT3dVs2eUdojRVL7dhfjPJmUK4nx3jUaiGgFHGWmmWWs9KC7M6dTcncQjePFtSdv7ii4xsc",
  "key5": "2XxpCFwJLgq6iujZWxhTDeKywJTC5TxPjTea3k3K4nZmYKBu3nmESVc5P4vpPzeiNvReS2LeVcFa5k58gYh4tio1",
  "key6": "cmLQ3FLj6tm6PtDG2KNQp4tJrsXurrS2YHu13hpxHdd9optAEeHAUfpm4jTZJNzYYAGomFm5pHVMypHz5Cr63RN",
  "key7": "2MR7vRj6gfjKD12kNLAN2iXAoSFnrUSGJACLyw2dDa3SFJH9tv8nFrSVQqHxMeKDqkRziXLBx7gDygDi2mDRTUMn",
  "key8": "4koRDVoXYZS2dKBAffMZUYgDhfgbS9ojyM8se5Mw75JLQLTjMu5FQP57TR3GHbGiJwEqTCAESqvCotnNH5FVTU53",
  "key9": "2oiW2PARsqoBFTL8DV28n4n2ai3zY6S41hS2qRUxGdCXnXA6x95F6JMy8DjZZvhqo4cwchcohdL7r8R3eu12UQpm",
  "key10": "3p87JtF7NGufnaFUX2NdL6itxii1sL4YnkDZ2ijXj3KVKq2ha6GQr4JZmXyvXUWdo3fYzAe4ZfYvDVqgEbd9gKNd",
  "key11": "qKFVrdiiKpkhMTGGxNvcqyF22NtNCdS4YhJmfkzzkvVgkakor5ZnQsndvkTa9ZUbzjo6sgNfrBMbHAd4zwTbrPu",
  "key12": "2V1eD8FcHhnBYTYTUvKaxA65dsGDjP7HvJ2bGHmDctpcxDaBjDF3xULPaEYPVv2szcTbwwcNQ6UtzmdVqdXMxRv2",
  "key13": "JnnUWjRRctYqZ1vMX5vRszboFrEkA2o9MoWEqff5FFj16wSf1Ygjq5Rw8PxtYH3YLH7mAAej7nYkSD8uz7KA86a",
  "key14": "5XWy4KmYrbKmBNn6Y2qrEQiDGjy74htRdUxMZSegozuLtiZ5PphkUTxbFwtTmpERbvcvQeLtmdpWdKmfhkkTESBC",
  "key15": "3kQvmdRimi97oYULZoTYFaC1Ab1CYqdJzPmsjgo3xZD4shx9LYN1BKbu35ygpWHPpirbJS1fPAaY4n7anWz927H3",
  "key16": "28QdC6qyTym3BfYxGhGNEMCxrGXXXrtsUwDGxwtvFpweMPSij6MQjcgrACSMVJNpExRHzzU1dnFu3M8ghvdWaj1L",
  "key17": "4rNTk26HtRXY6W1roxq82hnDYjSacQmhx35z6NhdFqp4E9CXJ8JSBr6n35Ge2PaJvSisQGjiWmQrdV27sQsMeiPG",
  "key18": "4WkhEvE7YHwARS8s7riLU5zDnrTDCUtT1pkndNpcfcGqq3vFXhhHN5ft1N2B8ABnA5hTEDex4GnssDefgdn1PVqo",
  "key19": "5vVrZPPPuGtjdFZqCDsXyCWJMWpCxGUrubCY7wLgsp4AsWeLeZtQ8TrnZtoXGeAawKXa72Y9cCzd7PpnNFS38Mw",
  "key20": "4q8S7zuNpN9vzw2SC2XVP1rYCNVDp1YiqQf9XnfihrFoMFMFsTSLG1byAbqjFwouMjD1rRGJbThyctkwVFceNM4h",
  "key21": "4hc7W9q3GH921tjtxNnBKRbaeGh47XUjagd6oqmf1TWydE9BCvAKKuWFiSGU74MsKSm4xHZwT6WpnUKCKY4yZHih",
  "key22": "MubmrmaSPfohmtQj1g75WHSmoWN6KkYGrCdokBVeEr6ZhSr7pLf7rZa1Q7YsWMPinbJcjzzR4QEdqFyapHiSTVk",
  "key23": "MyUwo2L9o8rvNHgwkAGvtBQfU7UxTTXaYmYi9Xop8WNni5YxoD5zgRmRjQoE7KHbFrKuYhBLHRypPmuiFXgpYTr",
  "key24": "4i2VxYU7z72v9unDyGRbFZxV2cL7L275dahJR8SwdWXTYEq8pnvaH1nn3qbV7auf4MDktpZ6bXeALFKWvWR651X8",
  "key25": "3UKzdgGnCVDBnygkgRuUaqfiehsbBouCEo852CtEyXpS5F8qi5dLTmbq7QY4bZpBkaQsskEYbYVwTDfsduBYocQ5",
  "key26": "4ZfzJ1Anc6v3xioeDjzL85UJmkQirA8qwngvzX9RQMZLHYFruTSLkse6mEQZUxvQDRtiyDzaBDh6Eb7xJCh4X37m",
  "key27": "43SobYnjbe2T2qNED9AhtAhp8TnBzNUeVWs6PCU7ucq1MbpNMsbSPov2oaqdagfLDRWq4GZGccouz3CzZvT3Um2L",
  "key28": "3uQuMfXooeBc3MknGFcsg1YADXQ8ujij7HPpRVwV2YtF8ytinNHpFymkhenMZ5JDFHdZnZzpzBbzTNdLkk5ZC31U",
  "key29": "62VZfSvZUKb5L6At5U5otZuR7isqu3abBy5TwPzu4wGTk2XTLfbimZAQ8fcvYxFvVMFqVPsFqkCK8CaPvXKNbQgm",
  "key30": "5jL5fsCySA9VWYamtSRGETbBftw5EZWtK5ZyWY53KsDPoWL66PvGNRC7mgA3BNkfMySLAmak9oho4TR5keA5aLJc",
  "key31": "2C753ztf4jLNYko6PEX87sMGxyXo8mfjTezKB2T4tk3XrEinfg1Zk5FC5BQxE3C2Ab9z2tA6HdXdBybat1HJptqP",
  "key32": "5GRChhMx7VDGpR3YHaAAvE16YAASXiqZWXRNyxsybnqDFREPAXVFEj7rtePVst3fBfmErsxwsw3emMUrNYC6BqAn",
  "key33": "4snEpKvK8aQQYQxnDKkA5eMacXkokrYiQqajAf8LHKdi4SXH8xXBDu4aDwMB7U5gq69u8VwoU5HPxetz44uhgFdz",
  "key34": "5QacAaPFgQ49NStBBjcuPD9b6p8UAmYRdT9QVcQQMujXk3P3GDiRBurJ9F4iJhQBy7np7mT3avCvJ7AWTZeoGBrp",
  "key35": "5LNLz19uw4a6KJ7PuTGoty9RCUJ76NTVDFgnGiVKZYdcJ16ovwYdM8Ga4JeekMgffMDz58g1vXfboruY8775PJxC",
  "key36": "28YiY17pc4FWpmZePt223sV9PvyCDre8cJZfUtYHxaui2pBUvGBPzfvawXrTBAQK4nJVL7Er3EQbumYczUgYtqRT",
  "key37": "8JST8GJGdARX6pXs34RnwqHnLGDRjZof59ND9bUyrN4EVaTV1fxAhQ3yKpYd3nLLg7LR7KWwAkxKDpNbvhjDSEy",
  "key38": "5Ct7DEbS3zQgd2eqEHoSbYWRHFUZrwT8ie7GJ666srmtTzwaBXsNvgXiE7GifmTkGJ6eT3Auw38qedEavaYzi2Vq",
  "key39": "29VUwfadZPmJfqDpSWjp7vCkRqMDXVQg1XHp1UPDfTjeBfmwcHSbMi2ki3V3ujsaNAhegBdSx2Ph6p6sYNiHS3Kn",
  "key40": "4WWn9pPY2RTKaFXHTGHWuvzVWN6YbgxNVRtdpv3CsZLeKqWWEHe19D4WeajqB4gADG76bD3Swcv6JSxarHu2NSwv",
  "key41": "4rcWNb4RWJRgCuv2tLXpTqiyUpgQJ6v3AhHSKqFwaGh9f65SH2SawGPf1TYAs6a8wSWpp5WPEMCPuUW5JY2jvXok",
  "key42": "2vXj9ooBbR6nUZ8Zcm6hCBkw1PVATZX9cJxkeHvES81FBaschQKHb7nYBZm3LdKwvD76zKGLdJgrXs6Pg19Z8jG2",
  "key43": "3tutWioHS5RDXoCVhqV6MFsd2tbLcN1JX7Cy1wdKmBERXvw7L3PmM9DwTe89G2CupzYoYtDSDZuYjcf8XAuZGFrd",
  "key44": "2HP9ymL9nwnoN17LD2msEGVJ84TqGfXuRpdrH5q29ocJKV7Y1wCs7p8zTjVihFLA4jUuxd1iXd9645vXxy1papMV",
  "key45": "r8VBiKoDpL74xy3JxsD5soFLfqYYcT7cCxbf9d8rFpMygrT9oskNV9x8YYCP4C3ZyZpUKVqqrUefxZqX2XQ4B4G",
  "key46": "kV297EjQPnH3ka3PraeWmgrQ5WgS7kzyvbYovsFrXSQbrv3nWJYei9Tud3AmPS6V9TCHbfdemgqyWy5ShBHNnCg",
  "key47": "4Htd6Hh1sfoBCVKLS67pMHp9Kc1phs3RBcPNiVv34mvX63bPDpVfubMkxiHvnYkT8hKZUgGXcwfyrKDR57c4JaCj",
  "key48": "3UA4SBQ4dP65v1ccrQDfuo8oLYyiAED1sq8XjvUkeZ8vYAhQ9TmciiNrPbRRGmLiyJfJWVpNghbeocc66enhXc32"
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
