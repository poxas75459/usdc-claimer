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
    "4BD5M2BimLTPYoHgDGpFiDhn5tcdbFUmDnZXroM8NgLqtPb3vHrxsRMZfRjymZJste98No5mpgoyskg98CMJFnJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mmaFLRHMReExRLK4j83VREajjEDzyi1JumkXrvoBAQqcHFuu9AQ9US5E1yzbwKy3FWiGRY5uQXZ8y1DmMeAAQ7V",
  "key1": "otQBt7hqbAFXyxppoU2giJQgYam1kwm11Ze1snLzYyYKKcVfpF4YUSjG9wvwuqN7LfuRx4tJBjMD4WqpJ3r5tCn",
  "key2": "2Sc452wpuD9BbLYfsb4LF1wpbBBLGBRXfQU2xpED1m1qvwL97747rRbpaZFBnQQEKBwre9bpYcCeYUzeUtoN44nf",
  "key3": "YpSgF41Lt2ZDPa1QsixtgnumpEzQeY4HT6hnve1PtVtBmYKJFYUrfTXR3q7cmNpR5TSY3ddDiumWF4vNm8fz6eW",
  "key4": "P7zuDL39WKGYsk4mKVvz9sJ8NyjL2xgQs2MVJDFw618XAB5KwyqeS9wfUQ6hRY9mcSSTa3Q1pQyuUXyiyhxfZzW",
  "key5": "5xDDNXocyx662enNJfFADw2pqNRjvJExguqytjBnW6AUrgddEPCCCaettvPTPoMvYDgGYikoNDBuEU1rbirjJqHQ",
  "key6": "5iEzoFQCAahHopZvAJoa5q4CfqN9KNkeR1SQttf2YzfojFhAC2gLEypDcxMXbf3vmNUN8KyoW4cq6zHSzjC6R9YB",
  "key7": "4BjVtR29hkSbZ14xHcaNKaifuNW47S2rDVqofRSdYbEHpPNSfsvQCGraYVU4Q7sPWsF2ZhZv4Yi2Cf3Mu8xF8rwZ",
  "key8": "3x5pYn6XMqLdg4Bws8PViBGyGS7cSHBYgJnxtRNSz9PoAgMzuWgeTgsGnpm8JMjsZ5FfJGyydiccJoEw9nGoeUH",
  "key9": "5oBrHz3bLaCFHRyQUHmyQqrUbPDg6VGsx1QMLtzpchFzhXJTmqyWLQkSQJ9CG3XDwvGeRU2WNkFuLVg4EJqt6Bc",
  "key10": "5P53CR9TmcyEefRnvLiknRLL4p7gxWU7Ew7D7uZwoMXxiaGCSRAxBigveLCmvrwaJYNBi5YR5Z8wz7J5xKz1BmLS",
  "key11": "3JCyV6Y8C8aoy16FM3teFygg5sBH26dEgdxBqbJHazzgCqCGcpqs73soAmcNpVNWpG4xzNxbmdQ3Dv9fEbwvKzNi",
  "key12": "4HA7ZhDtNP7VLEtjsnfka29XvhzQo8ZBsNyaAkumXihXpKKFQTQUyrF6crLfpJEX3CoPBKFindwKocWt9X5ngv5c",
  "key13": "4PwDrMn5pZ4s7CnHFdCAao4wd5wD7Lqr1GBy8xDJ6971zMBsWzxQKAc9SXcQyLQVwgTpkAUMaCnc68ayyn3EEdfX",
  "key14": "37xAGpCUeyiyW6pgRCoAjEGr8MdsZhBg2jeMADxmE3JY3gPuz6R8ZLjvKDCrAsheTBpwxd5VvDTGUk1syiKJiuKj",
  "key15": "2hFvZpmPZpmzFHq5QzwRHbSQWBCwbRNk2MbeUfVsY8UEK8gwRgSkEM52eux39Ays9aqBznivv3weo8TkvPsVeZbV",
  "key16": "uqFNrCEbkg64UzxKASP1kwboBfeEVDxNNBZ5bX5mBegRJLpTKPznXasMDYj2rm4QYZ9C2XmEADefgYvzTDFN6VA",
  "key17": "Y2D2JehpG6nu2dSUsL7G1WQ2Hok2u2C3tvHub3exkzYLc9DkAcLWJWrwfU6vcPQNUzAci7DhWmALFJ9Qga9sA2F",
  "key18": "3GZtgitQG4GvT1AGiUASi5f8Hd7Mb5LmF5Y4uJkHSCWaj4koG6PnpUgasbRqFxbRMcTbc69311VGt9BcVywS7K1g",
  "key19": "3BDnvpFyfkjzfXPkinjW7xiZ5UHb5VfXup63WJTRTARt5cCyVwDFTBNDidRWYLKZuMR8JMWaynPK19iRw25xRb2V",
  "key20": "9rta8moBEQt7Mybi8kaRnnnyB1BqdyEKenQVXNZbxjRmyTRJzefDB3CbZB6CY64pD8Fe7QbSLS76EVBynU1om39",
  "key21": "2SW2SU52qz8sRgb6Ws4fZDYF2TVDwft8cpi4rhThjtJWFKwigx5HNSx1AMhS8YjLW1H7dgHrgsuLNnnLWvPhFEMo",
  "key22": "2PWropLaYSGPzYWCsdzr9ASRcDhdnp3Ybus5XboyRiFgy8StZBwASieZZ9iqqsfR6WQrH5Fa58askP6bAajy7xTA",
  "key23": "37P8aXabn4gCYftTKzb7i6DaUc9P1cKVBxX6yi4vBSHmuQhGeG5XsE2U7BvqVtcMjYeGAfMNtME5iaksH38uMpEx",
  "key24": "3mMbZcx1RUEkFL868qFwELokA1qkYp6YTRe4h4iESiGnocjm1bPF4m5zGEFM5LpyrrJU4BTpL9rDs8r2xP1cpaFr",
  "key25": "7pufR4BVdjZBMCyxymkDyRomz2WZeVqYiJJbshL8uaadPFbVMZ1HbPw1CC57ktqMafYqoSGaud5KNcmKeguEfah",
  "key26": "QCzqmGfMVZLjn87sdhDrQtMBoJ4G5urm2UUxQUptteHnCF5UX8rntkctQfWJo79rpDcJDbz1hKN1TRJGUfcfPaY",
  "key27": "5bg6RRTND1BSxWC34Xw2HBfgnqJ25rnzSLYRFgSUvBMZZPw2WgAAMKj7xcjLtRd6FGAooWuykqGasqR1V3A5Yo7r",
  "key28": "4goZNj1DHTjGLFk632Yz6STz2awXbxBJp22hxypgcmg8Ga88gpoFgRamD53xY8JuA4qzmG1DXeAJbC899VSKMnqU",
  "key29": "52MCd9QE2gB1izYSnTTKoNEpJjeAjTiRznUFMVAr9EdJbiVkpGtVeF88iu69k2EKo4SooxJotRnvANCQL4iNV9Ze",
  "key30": "3Ex73ZHmPBX2WofuHFAGqEZGbPkY1CAcjnntgCYFTDmYwvnB3sefEX9X4veynjAKFFy5QWmiTCNBFvD2GzXoi7cc",
  "key31": "5yQmqVeobJfia4FG9QzwE6uTALPgp1pHgyypnUPnfWGnWVTfRuUSBQEyX34b4FBmrAisnta142pLFG3xHPnbiA6g",
  "key32": "2LczPAwUxKwLv2aZWwVkDL4wGsPNBcTygWt8KWrGERp9eR4GodyrkUWiBc7k73XQFUCVAtmU3jsbFy2VDeRCZZ9i",
  "key33": "59ux86QoWbnLGBRdsR8vCmjHPF9JgZXRw6H38hVpS1qCPZf7YyCa59RGczK7QGhVnqAezREt12ueszL8ikNSHzPj",
  "key34": "4B9UjYcDhZMyFWAeuYhYTZLDCfyiXWchAx8gnvSVT3crf63W21ULsXgDWggeZCaKgttDs6ux9HBAEHg7Vj69c9rU",
  "key35": "2WeXAp95AUUwitzGxz7mbkrTzCKMiXEC9dmSkuX8r8M5wcfAsxVSmztWXox8tTmg512HCK2VH5t2S8SHrSNSJQMX",
  "key36": "62NNhhGZC8NXtmeQd9TGaYfLuEbMooQMaLv9Y66g4D8fzbeFwhWuyR5yUM7LXTUqxHoidGu1WkJMM35j9WLQJ7bG",
  "key37": "LfnnSexRL4qR6o2XbVqCQVHSgNKCTJ2h6qqRRXJq1fzwAf5ZTscu7vKskY9dVHUPZFPk89YziNj5vtjA6TwFs9p"
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
