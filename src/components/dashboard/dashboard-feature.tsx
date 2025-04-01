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
    "UX4eHCZLCHqkkUg96ASy1rmXSjPS9d39Fm5SK1tJcJGQhXoTUnKRG6cUB5Q2Lsd11NB17x2gK8sVXSReQn5zppg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iM1ZDTE2kmwFUQcBeNYr2diFiLHH6dDC3MsFKTanpoowYPzwm2nvw3pyJuRevcUhX1NpxReufDB2eGH5E6FMmbL",
  "key1": "4uhheycG8CydBD5CsPqezS56MVF76YgUTEGTabw4BYFQEj6fQkKLKkDgCFw88Bb34RLiWh5qomaLXH1hTPKTfrFx",
  "key2": "TjGHHV2ESBaxu1evGKpqsikCVy1nvW49G4GZMcU9JFXDs96icBwNc5vsBZ8o26EMwA9zDevKodLCzEF3MzEYCvj",
  "key3": "5MaaA6MJX8iVEiWWHjLfEKd2eJxdagv1cPb95wkh8KHyvF9Frg4xpLzxi1F1EDwoGyBksuieX33svwJdm3Ja5TaL",
  "key4": "3BLeBCr54fSCid7rkzC9sAZg1KhPLsPhoxnMcpXYHMWUhXGeCDxZedRSTKNBqcZv4ZonrZ7gTTAy5wdQjyiFYLu6",
  "key5": "rjvPdBfd3t6cRLwc5KfEbRk7DBsWBaV4jCXCpqdGUhpnj5ymMWouJbfZbeyWk4cwt4Jg1jYmVKd3sQ9PBs14VK3",
  "key6": "5JhAUe6iEnsumbtVdAiKQQ42Pm7FUfmvJQi2MtetQwskP3XppGTCXN2HDqwQxkWZNeBjMH83upz9wZeyAENvkfd9",
  "key7": "2M3qhARahQgqkNTnHRWgEK9Bbat4imfoiHqdCPQA7t4WLSsVZp9uYrcmuR6DDqUdvNY7LQo4gUMFSeA5zgLx3S6Z",
  "key8": "4Qgbu6td9QnrsJ7S5VB6ZtCkYfVrCKJVUdT2A5pzcyxpWRpiif7SAa1zahRdBNNJFheTEEqUZFc5mzFdj5mHKcjH",
  "key9": "E88hNHjtQakSBwo3AhyqFbyCV1qZVcJPcPSXa72AuSTyFgLuyb9Fc4TL4BeiD8j768XQNaeoqaYVZMBixAV5xFV",
  "key10": "fi1izAcuqQEPF6VmXkUmm1ADDFUNkoWcfRVEDt2gV1emrJhurFxqepaWnAg5qsZnZo8Xnj7dHM9VbHb4b2xSHMN",
  "key11": "5eageAjW1F4xyVgUn2Qo8uWzgJsKLeECUKiffsysAm3GvPMMYsG44BEtQPaFKnkak9FowV773t1nYMTeHvAxc9Vz",
  "key12": "VKqcxcVcNRPA6PUvGpN3TrP3S48EwDwWB5vANk43cd9uHym4K2keYjakWTSCt5aEkn2cZ6MMHX1UehsJdV7KpCJ",
  "key13": "2LdVVtp3M6G3LGisd4duxRsmPDPK2ADfQPaXmTYRE6RST8FJhbjUWb1dGdzAU119jDCXFoG1pgQh7wr51DhmBpPR",
  "key14": "5uPxx3VMeJZFenkTz4xmXrFbD1nKpLwcjWg2yDqCnixuzWEkWY1ywbqE5iXhqH5sbxGRHvN5djH5NjHAg6etTLVV",
  "key15": "3vuqcYm25KfmEGxV47Nz8XsXZ7FLAdD6ujMbPbMYVadxRYgvEiWT4NVdTXgtdEEWXtC6S1eco5ZnJzM6PyyBb8RY",
  "key16": "3Bc8VpeD7fGzDFMzz1NLQx3cu4uYDGq3KXRytRjqbXCf4XWQ13gNGF4MB3LcXheWaLqpytdnqsGvEQkUjQvgEEje",
  "key17": "66rUFXj4gGSpKTZFZU2JdM88aCS1psuMZZNAhNiJEFRfB4vDkqEepdhxMhFA8KdQRYuXLqEQgqRD6CVvbeiLv7JA",
  "key18": "3KSJWbMExZawGPJzXa43VBKFyEMSrnXPPMoL6mMnnrfXkdQ7onLoxi2xWzuNW6fTQDjdpRXHCsS1LLfqp9Zwufgz",
  "key19": "4e1ceNZsdsj4bCax1d4iRRAXanmAuvYpk1JEpWiqnVZSb17bqZiVxsiK6indbAHMJDG31eLBCZt1m6dsgV9qgQfw",
  "key20": "37DsVgKhGwaMQQ3F4v9tuQ9Dq7MqTtAgkk7dLb1DHvkK3PsdULK6yyQMpp4Y4yf1qPdyhuHbArEU2QhHePMZWQSu",
  "key21": "B3uYDMhUvtTAjanLNsBq1ETvHJCmLDDpsT99jeuGruSuSa4USGBYhGram9aPXfoTeyqMtHneZ9NFPWv1MMLpCoe",
  "key22": "3WU5KVYYwsJZMZqb5JUv7tjWuQ6bRMEoYpkBgk6uk1inZRGtEdZ9jCUMXngkd6covBW99ZbUSi2geE11ZMqcryib",
  "key23": "e8XhZpgXix1w7MjxwDm1SghgvkWDEXkEz9Am5W3Xe7F6xNE94XNKfBhNPBBGnFVJY13owFcExCWvp6oPZnPKD78",
  "key24": "51kiw5fiLU9daDJyWq1Wz4nxZeRpGNpxpKCSMQmwVgsqcMbuLQHiqsP6XMNEo7C2ysQD3k7m1DnEDm7FSNRR9Rqm",
  "key25": "519weEzhdrdAFTbJd68wk2buwqDJrf1QTtMZeRD5xsRrpEXTV74khDQK3enSfMFcW64saEjyJAEtfzXjrJfABw2x",
  "key26": "3tgaUzTkmfGFY8ZsEn8F2d4dxKJSky6tbrJNG2eLALZLwTVs6PqmD1WCxFKofDGxyDp2xZKmtD7Hx39E9VuKbLwY",
  "key27": "2ZMijaB6xJiRR1iQb1Ju4zkCTsy44SHSyabaBwfLpGFAH9LnJcDrzyyG1uZeK9uERqfPb8J8bMkFVCBV3CW7BKxP",
  "key28": "2gVn1JeGbAdk7RUgbQiMdJhkZSRPjhHWp8ktoffBT5ER4vfuhHujkqjrjVH4vfcWKwzmr9isys6dExdbCUpcCmdi",
  "key29": "4JhYYMVd3R5ZozJyJLQDbFmndXGvsGtARbEUgnZeHZLJCL5Whx85Y5VgbLJAQtBhFQFzzqEyyu2QssD8DtkVVhF",
  "key30": "4892iCCQrbKceeAGKjXKPScWwQRNvPgL1yBMdxTypVfwYoCQG2yQKP6xpHrf9sn469AhfwY6VuQKVwCvS7MPjd1B",
  "key31": "5wgBqGi192fpCQqrtiAA4VS4cJuf5uCEZhaGHTeMJeJExrdGB1K31fVSmhdmyV4Z8Mb4RX6cSpo9gd3KYvs2rdDx",
  "key32": "3h1zvMhyTDDZ2ghiw1j7Z8X2obX6wNRuH5kk1ShXVXWKqQen4VqTok3WyvjPWGQiMoyT4KsscrnHwiD7QLPUfUhE",
  "key33": "NVzAwkubzXbTZ4fkrsg42QN1T23371UyBsbJiguu3d9Fd8ndzmtxhqx4ZAUcC2skrNFjNit3WHpGkMQ4FGuX6J8",
  "key34": "2pF4Hyj1mKhyhM67n7AKAsQwh4GegShPr8AXqhpHHSdmZhxY9zyhdd6dKTZSYtz7qCAvs9YjBdofDNnXHQAUvwyw",
  "key35": "3ECTtwJCzVgeRqYMu9tVqR4BQQ5PA4wCbU1JPLQsGu1vDJspUK967jkhdV253eL1bgnkteHx9HbMN1j6dMjQHQMs",
  "key36": "48eQ4xjLCPfknpUpQ2FBBkKf2XmyNKGooecfZgMKgAn1bVvSUamdGrU1vanpEh5K2HruTyzbathbAfdLdceH1PKV",
  "key37": "zJTCRMNP9BGYfHqRY7qX1ijwWvpNzhcaxPj7jJbB8WS89YS11PsTurLoPZtPK4rWiqyQN22QB6XS23pKsvKg9wp",
  "key38": "2vJpvyNyvA71xf6TNnYxBP8Rtoh4NUPdufbfbpeGou49k1N2XdpLvKEGfa9Xkou6Vh3TwmPqncjaeoFEq9tUHw1f",
  "key39": "3NmPgt8JAkVdVH9n7LKuMeHka7LgBQ8A9YTgEsp4b3Gkzx5AswBRibTBHzdAm4XCU1No9okADrQPBUnSgv553m3g",
  "key40": "MxhPy5NBNkR3QARUnaQ3v17yJw4wcrkvpWbhabGc5kMokkxMxYv2AU3UQVp9ZUwoYr1omvAbkzkuiKhEJKjeVfA",
  "key41": "s5suosdQ76kfEz2BRYYsfyV1J76HnTntXuufCSbpenpqhhrjBp8xJ1zG16wf42k8GPnjdhy9ZNiRMvVnKiLAAGr",
  "key42": "5swjc6DJuHa6hNvQRtwkTgTqacXyDGDAfmfEiUVqGj8LA5rzwrzEqik6jW31RmGzfcPWRLcTFhqGiN2WiKGZjNoo",
  "key43": "4Br3SsHfLUWh1y4DmyH7ByP7fC2Ngt1Un3fuodU3J4i4mejNrXp6XRqDazq63vMtLLaBKn3tkTkkih8PAcSr4fft",
  "key44": "4VR2YbNoGzm82cP9pWmfXRpKHChW3exychdeDQvY9MyHMQSex1QKDaCEsXtqc41hjYrKyPmrVFNdQAuNz9sUaBNP",
  "key45": "5yHCEfv9RTFsevEPaHRBAAm2yw5SrBaMpVmKfHSWjihGpWw31TymvfAHx3YX4PGiLQeaHtsa9v9brreRqAhKyqNu",
  "key46": "3AmkNJH3X2EWFkKdBASYGvq3dJHa2wXrMydLeqzLZvram6pGzXCrkpcBsw1YmLQ9KcLkChVJjaBFjHspLQ96pXfk",
  "key47": "5RX6NvNzbgtiACzt1KyzbnCARS1R9jJe14E8VNv26bPUEGndKNavigZgHCV9yVmJuRJk9Hnsri6MjFkBBt8EaZTT"
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
