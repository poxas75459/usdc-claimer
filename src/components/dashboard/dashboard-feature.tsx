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
    "48Zezo9PFHN4YkoPPYbvCAxj94DKYg4wtcMuvBYDUqcf1oSHrHcALuoUkoSfaP7e8UzfEZCDLGohB2JX1W9fB6Vn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "korVo2hVBbUCNyL8JZG1aeWkQ7B8N2WNYWfZ9XiCzkdWKgSkcqTM3ZjTiMV492PDdvBHjKrDLtDm6JYBNih3Q4M",
  "key1": "3rVsVvBypi9YD6Tg9NfBVC2aFb42DHuYJWEodCqPjjPtxaKT3aVoKVGyxRicvdn29sSMhfcCEg22UBojZ1gWsqFh",
  "key2": "bCyG9XRqiFWgLHf93mGzhtfm3nXv2jpwXzJX8uqGTQPQnvBq9bJYcU7SW7EKEph5jQoxLCNa5jWAcws8tNeZXbX",
  "key3": "2U25ZxMGuw5HSjXhDiepszgDmw2R6mpkvtYyDkYBB1yeZd5DWKZDMQy7AtZsZp6weuYSFqEQgQTjwcRCZnsVs6C3",
  "key4": "4q3EUkU7v3eTBN9rroP3NUCs6QN4XoHPWTEGTWFFexJBCf2Uy6J2i4KDvEyNS6EZBcjvYFBkmABfEcKQThJM4pbb",
  "key5": "2ZuyACvV2Udt5C9ezmfPPokbY79bJnLgGi4k8s9mCe1n7cRfc3TPY7vCmVJBp9Rh2juhnWmz2Wh2xwDnzXfwKMHP",
  "key6": "5ydC7uKzqBYEX5qnHPtzojYPxQv2yjRGx2Z3KkeoqkiyyCHRSkNFx6nx15t4KMXUkVR4BypaZtNB9PRpkkunUf8u",
  "key7": "KHMNhe9VzyheXXf8zqET34B6TZDm64RmrNcg6o2i9WuhCJbUbKuxb9SfUKQrVFRa3s6DDb7w8aD4SU5y1rCh93R",
  "key8": "2Yhgp4nkQ4isSyQSxDtQqA4daLncexsH8CGoW9pF27buXT66hD9RzkhiDkNRhPctztJJbkZHWCd3Jn3GSasrY7QH",
  "key9": "5kE9yjRe442sFBarvy4AwQE6rbpaCsRN3F4JHVvJmCPdJ8Rqzf2FEXFoQsdgNYQkFFXFoyaVRKksbdB9hNHWLRvp",
  "key10": "2JaVcAFHHMwY9CkhNzYnfSS18JVgovUcrSxJ5YsXkPu1HBxe4tLNx9yjuk6c1pvDG54CspXazLrjin3gha9xQQfJ",
  "key11": "36AESQUQjAj47AxMYBeJG8HHsEAN21qLM3C2VejN9jGwQZadxtSEi87zyXdrabk886f3wRZYvZHF1LyezcpwWZqL",
  "key12": "5vmYEimTvN5472UoAtjr1UAHd9qPHLtBY1NJajciPoWsFesBRytVR8jvFSu4ga4fFsqGSEV2kqt33XMTfBZxiaFX",
  "key13": "35DeGRtVK2nYAnc6EEtobymLgNw9MvrMhUPjKwhFWDTEhpfD2P3K3UnnFgvLR6tVDNacffoiKVPNTmpzTUk2dQ2g",
  "key14": "wKAFUxGpRuCeQ5FDfYDrx9EV68TX4q79WGg9Xxu39qs9zt6ZWz2tqU8gwq558mgcgM3qXZUQ2TL9JizjwKpHBhT",
  "key15": "2au9qy92APPF6yPG7bgctGYoVKKLxt6N3QhNPWpDdnhDHYS2X6Bxw8b6TrBK5irxhxDtArb4SYU3Xumkpp9zvR7o",
  "key16": "2AUdtADymHXkMjuxVJonF6R2yBiJrKMKtFLUu3NAoFTKspCnRZniEoc1MCvTxEfppcv6gjuCNSj5EJNRQGmYU8gV",
  "key17": "4XVXmF6WmMVEc4VAn4zJFxKNT9yGFZABSWpGErKYruGFaiRayw9xtzQWB9WXCEqPPKM4uNWc7fKEmcUYkfD96ZvZ",
  "key18": "55q8AQh4uZSQ16gZXSPpeqpycLnK288EMcARXMe3TXa7AUkJELHJfUahG2ZgoMSQEPqZFeMTNVXgfU4StCSYpXcx",
  "key19": "3dv1EUq9PvmCGMAkNJFdHXxyTsuNc5YA4YEnk5gfzcH9Rd3xTKzza9pd1CDN6kSsU9faixeZG7Fhug4iBxED3CyU",
  "key20": "557od6sMdqUvtRHSpEPH5G8EdRwE5nJ2wD81vD45chRPEFsXSCumZNJpySzPmQ7t5vpJcGJRdkCJ5cxNxwRZo7Zc",
  "key21": "2kmKUPoiQbr6bGCWiecCSGB3wthnfVaRdoyc9eBJy1aqATpx9tdmYCZB2Di6pLvNDtxdQpjuhhGrjT2KefnPup9",
  "key22": "9bekL9iSWQvMgo18tb3n3qvdWKErTCWhDAxecJFezC8sioTjY9oRggisDKeqwyBVXRCYUEEpmZuySDfMEFZmcgB",
  "key23": "5Dfgpp1RQsoGXQHECyHwpSVb6dTsnHX6DAS4A1trBcYoQNGuLNpQoptaorVqpf629HhZF14CBZ9L8GMGZARt1knS",
  "key24": "N5DHS9B3UqdJWAT69kEhCLBkpxiNMy4hx4ba54KUUdsWR58wjbDwurgxBCwGWg5wYVFsSVcoAEaTGq1XPyaTnwZ",
  "key25": "2YWa9Ce2SwUKXKMsUG16Uk3gy39YokMLp3QPm2rugmdLY2tPC1LECz2zvT1Egy2RWk2A6juBTZEiP6jPP6DgfrVp",
  "key26": "CvJ2fStHoMbTBoKgxX4MNHdjVExNkLFtBLWyjDcZFrRk1D9EPv7LNPHWVW4WCX2tiJt8Eoy2B6gEmewJC2HGAkK",
  "key27": "J8ubNPNiF85KAnQPu4T6dP2TYgnfMMoQSX5viPMY9nDFRpZxfJ9YKMPccZ92L8mLANW2ETd7RpWX5g7sXzLCVL9",
  "key28": "2AynuLDuAtkPi331K8DjdwSeHxnAoxAwysHpfDWTTXEX9wrF4U4pYYYKpcVBJULK9xmAdxDFa3C6fZYmfDnRoAff",
  "key29": "596o2gGGdQFQGYn6rMooq3yKCFgbW5NZFXog8rYhMtsUneJWNX95ykDpbLefk7bbEi5h6GxDgids3MyZTnHZPzRS",
  "key30": "ZFSubMFepFHQAmQKxCPAnQ3o4wDitxBNg6xetkNGnUdcHRyDh8Kgm2MFydJ9UCbpVXgejEm2MfnwuhkThruztJP",
  "key31": "4HWAAMRnG4xe3i33Sd8PpXTaYgMfWwfC4jpr4B81kqD8emPSPBLcrMq418kPLCKYrKFmewpK7UtsgKRtdpG6dy96",
  "key32": "5FUEhh2ruX9QQLksqHodkEivuUw7zkpmqHMXzEMj1gDMKSDocPeRbejobWPetcA8wst4e4FJCzEwc33QcSaL1u4X",
  "key33": "67C5isRsPPhNBx54AU7U812RSw8DZMo2hdXKNsnQufL57TUiiS1Lfn8zt2JyZF9LLsTvkX7Djze6hmZ95fRpjGHC",
  "key34": "2ggTjks2w4YQVwVjEbxmq7NdakxzLcuQ4hSifpedpkwBvT81ai6AcPLutjdDkNugKHhtv1BuESRWyA8piFGkDsuP",
  "key35": "3Q8W6JiDCp2npxZQvUHDRjJvhiW6xYtTzifMKyb2NPBAyTQVsE3u4dkwsPUqmSDhUeU7j5yS4A9ncHgi1qo9mSSs",
  "key36": "2hV1TkXjR9cSG1UUNjmZY5vf5ysJNCmM7pVtnBjsYHup15PzxPyP9fonkRivSqFi99v5JwyuJTP3buDuoidai1hT",
  "key37": "5tq3N15UTmRD1GnXVdq9A7q1f4KBqyZa5Frjnxxn4EMjip4cbBrU4Qj8TCCXtZkXmEUGi58JWPio6qYxNUJ38Xfk",
  "key38": "3Zwzh9CVXrd4YUAVZZRuZJeVqjwA2vSDcZQjSMcrgSVbKPmLgtkbRrX6XYm7UQnNbMLBw5ZiYtFk9oARWwNUG5Xb",
  "key39": "3sm6X5o2WyiEadH9xS4rhuQSWxuzteYw2YLLFnd8bjm6axtDFhWVno3EmDAmFRv5LdoocAgoukYwcukgEtk5Fpvy",
  "key40": "BhjpPkkCPa8CsHCLM2cWSsh6xh16N2drn2u33C5Pm52PfUUtrT3viznUqkG1ezCb7by7yfMVUaoKftZd9BHZFzP",
  "key41": "5CGeJQQwo3LzoAU6TWUcQF3y5jgeTfJXWBDJM6BSmYChYqkVJvcWVTUGBhDPBLDQYQuWe9uwULkrJR5DKRXgAffG",
  "key42": "ydZZJcAiEtaatmNhnqHMTf4z7ABSE2hUFD9P64DXGjdmRLgjHfM5jDMR2tNGHgeYKuxHYp4en7wr5GbrUSvASKf",
  "key43": "MkiAbPEN1GvTGnJZDCSGf1sEx2UGq72zJrj44wBRuYknfvhbqELV2AiLg2riqVvqnYKkNLfEy3318XzzbgY8icy",
  "key44": "2p5oMLnaZ5fRHTqnQ5A7Abb1XTwUkCD2cKn5aPUwZ88gmdhghjgUq2BkxsRidJQSJp33inCjYCMC7CW6cXwekyND",
  "key45": "3J4nFsPrPLKJvhkwot3BhP1EFj3txrjLRJkXurHwftyeUdcw6eYtdQPL4RENrGKDEt6fJ9CdfqpeFyfm3p5pK9xj",
  "key46": "ydDj7WKMTyLzBi85oc6PTpqDoYsJvovTTg3bwfeTYbrNQx2pBmCkiQDGh5pcuvN26xL1hz9PBzn6c1Eabc3h9vp"
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
