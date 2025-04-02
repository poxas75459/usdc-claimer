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
    "2eYV8nmFb3axtDtim3HeboSKWMV96A5cAUSuRTYGc3VjXCa7fi4pSWUFXNGU5J9rcgpHaKvmPjgfxWo98WvoxCMo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y5sB8hjeFTYYfDBdFDxNpsiJvob8ZZ9DE4DoDXWecDuF4XgosWizTWJHmxTeo4Xz6bxBbFpBjJmmpBiLAzbZ45x",
  "key1": "5GoVQmFXmUo6zZbVUA9bysTtiZthNcBs7nQbgKc5sKzmvme1v7fygXMSXBqcgaXaBxuGDFDnwvqqeH43TV4Ak7un",
  "key2": "39ZL7azyTkmF79oYEJPw1xQZMv1amSzXntVUDJTzCTcayw7P68CppGWWJEMa9iENZ9mNpujJWF2bD6pGE71CyjmZ",
  "key3": "3gzGXBGfZcvXekGuDc8h1RgDqzsRLmLm6G3gXWrAPbqi9vvxoWhdK96g3nbNMQ4k6XJobqbSboVbFYFyADdNcBsF",
  "key4": "5m469RAwWxmMzT6fvnPxjFsjLoRAcAxs2AhbayvFqqS1RFovqZnTLFFwR4hQAimhCKd6vcc9qUiyBraSXJ92Aga2",
  "key5": "5ZPjp59QC9Tc114iKiECV7AK15ETQSXve9ziGo8gmf2hC8fUwv8zCNkVPHBscGyyBsGvyK5YBCV2HhB5Lpwya9Na",
  "key6": "2pAQLrxiBF12fH4bqA4rf1yvnooz1Lzzq44EEDa8pg885Dmj6MTRkwQ4zR2p6ayHmzcAHRuL2mDo4hFdQVRpQFKn",
  "key7": "3ZsWiqJpKQNeaTsiL2s82nRuxkDduoj345HVHiivm41fbMjL5nkwph8UrWZU2AGTf2NrLpVLZYgL7A1PEf5JDLH",
  "key8": "ScvoHko4yah2CpZ6kSFbuo2QmJhNAF5TFdcgvPT5tF6d4FcfVkSrgGXQZRu9xbsBPK5wW1yjbLC99JnrfrwkoZr",
  "key9": "2fhYnreP4bJRpybz6gi31iFXdTWmN9buz2vsw26n2iSz7miaERUDynowHk5p5c9Gu4AwgJSyyqfRbiFRKkC734sF",
  "key10": "42xtx71ScKEhTU4HE3dGMW4oLu6Y7V2t1PRFSr8n8XmthSJG8A87uMM4Jm9rth3bqyzGm4y6n9FShCBoVgwfQSsX",
  "key11": "5RxSvnmBa9uUMaxhNoqYWWuK9kdKJobZ2M6z5r8kds9CuULiYMKqVDSbvWMc3ZXvjUoemjGairxmQrFkd9YzqQ6c",
  "key12": "2s5nFLTG4qCCRY6CMaZftBJHsttouCrezm8f35VEAzptdJ6NcHL81NDRbz5SBjU83suoSGLLqzhcEcngwBNAcaQq",
  "key13": "RMe7zi8AAg7eQ8YfZvCcvL2LGrfVYRndvSS4n1KcNNCLM3xNUwXArYSLVX8U8vDcii5Vf3XdmczAd1mks7wCxWF",
  "key14": "4EcRaijoppbZqitPnU3PmgXf3Zao2LAxqZyX6AcFwe9LRCsZTzGmvza7mzPbGNJLUTcWxDKC2KBdaPxTQ945n7FJ",
  "key15": "5tvbHZzMpd18gVqLqgwD9NF5oYs2Wm32LFyAxKaEcttBdh3X3Zo4CbRpk2ErSBZsiV2GaQu7Pfd6yrwxRP8Qkkyf",
  "key16": "57HCJhqo2Tn2zycum3j2pkhVHMmUd57XiZoF89LMgPongTLk5vFiqLDtoLCg4oW793NKoNBJbCMreD2wsdQgvfi6",
  "key17": "2Y1AVRKdfZYLuHgsYXaSib92imYhwU3WYU1gGmLiuzVwX1r9ceMKaMkjVCHY9b1GRwfjG8TXNjhc1CHkce4G7Dyg",
  "key18": "3jpiCrGswB8E2NBpZxoM7SDXBGZgHxsTyDSZ57LxjeXzk83VhwjgC2LchUAWtLtAa3XqjPgH9oYGXwDK7BUMHe3R",
  "key19": "5XbSVUJ8XM6vuEiUuAuKNDjTkdnGyQvHSyRnSZihkmTCeNSHtJYDSM23avbzvYxnXx69aUxMhXGhzefNnFyhMvkD",
  "key20": "22xj6f1dH2UbXhFkrFU5s8SAbMpxmW3hGH5nZM2pvPoG4mt8iccuvQ3TNq7Uoo1cnKHYGEbbcmzft7Rr5sE6hd8g",
  "key21": "MjJFZAqco33NWefqyap96hfGfRXdr2Zvj3EoDp7z3E6NPKx3wS9tqwn6Rw6Dvffj5mUtzsUcJ6xHfi7sj7h35dW",
  "key22": "5qzPsYrHXqwSAdSbM7noYi9TKqFZe9N6Bkg6RyJzVudSKzR8i6zbrc6Qi7brXdmFRUsrhdEb6L8hcdGFc5kM7LA3",
  "key23": "43caLVVNvhPSyx5vif5WqcDHFD3aHtL74Wxi412DfFavVY2NYTovdK3K6QDaj6zkcBZvHNqCBvQ4htcQyeQMdu7z",
  "key24": "4NdGszBS45d3PefiEy2hEAFcLszXJRZrK8KGnJM2UZ2j4ThkARtEFqWNyQyV5b7NUn2PetZDGa1E5ypygtjPuzev",
  "key25": "4bY9oNe9E1V5Z4Fw82epuBhne53BwgQvRGnRMVXMbkpTEUuifxxtWkFBUdoC38vLVxbXdFFTxirB34xz1PXRU21C",
  "key26": "3hgaMJuJDx2Jw4s2XBoGMihUDuiMVp3FiaHTKNsbAnzaAcTYuuXvehmUbpwP5RLcgGAz3ea5Y7dfWsarw5HnzUQS",
  "key27": "3fcXjFeyWuYVF6hUHrHtzU5edhM72iDTKgmkk8Rdb3udqWV52U7TmzsfatEhF5Rg6apZi3qMigjMvyVKHxM3G7P",
  "key28": "3LR6WeCFtGHVCdByZ8zhYS9TMNB3kuuRw5JeXukFedFqZzFh1oyMtL1UoMjkmZA7GwkE3VXQcPHsJ7h34gZBu4uM",
  "key29": "czCV1uUqBwbbs1EWn7Ys4T8FSk3gsQevBsofgi7ddGiRxW5FYHzquAXM6ukyzbR8EPvtJr11McFwUmdZj2hoh5z",
  "key30": "RnF8wotWRnzGd2iMHtuGbexhZYe9BjcAEbC6XBLrGPG4bYDDHAWEvP3WWPe84jpxzbBUZCRLSaq8VrFM4zXYNgV",
  "key31": "2PRKMUhPaqK2WBczhHhFAVwtTwyVyjBdppDZNus8jLyPsyU3sgD26m2MFUQyPx4jeuRae67VfN6gYbAQwaJBW2eH",
  "key32": "r4kZ7B7SNTCVvsuWuUZ26BKbktqcYgtZrB2hAj1qH8i46aNhFf2cbfXxSq75oaEcYEppBx5SSyxspnDmDShmASC",
  "key33": "5ndiVdpHYLRUHPcgLkBnj2WnaTwrgwBCZhbRVtPY8crktNeHygEdQ1Ti9jwdocygMpjuErPMf3J48zXD8WHC5rCW",
  "key34": "s7xfSg9ZrF72Q9iJ3MqDj8Mc6qs3VhCM5yjV9NnmvFmxk8JiyFqBSNd8TVTinEGfEf4WAgTawcQxsfXENNC4Pgh",
  "key35": "D63wES7xkbNwem3ogvkuRVvxbm2Wu2EPoisozRWcrHFuvUE2to8pYfWA3mFaHcb1rirrPscgdfEhTiBjk4uFjHs",
  "key36": "3uzJeQZ4QG2gGqmFmMWtBdUk5c1Gq2KAHxrVWLLTPGUpDLoXrbpS6hhCdyX7K2vLm75G4q1au7tUaWipJyqDobRp",
  "key37": "3aKEyubwzC9PqjrYcdeg2BMznC8v3993ZMgXv69aaHLa4bX9VDE8CXVGtctzGhKiPKWRiAweWNfCa8hu3romJtGm",
  "key38": "54dn9G1wvsRaK1GTxx5TuWEdRQYh7XBeoZmnBSNhCsMMyLHeXjsqGzCco4FFJGFpheFNz692mtbP7HiX2jbnNhKn",
  "key39": "24s6Tt8j9gzMiYEogqaCJdX9myPvBJ6wySAPoPqy5XEFt5vhrdTsu9qbaxSNyhFuXVyFYJvWCtDMEK4iMvFbE76x",
  "key40": "4ciZ4XYfPTtgxDCTZGUViSKZemM5en7UVvqUrJxBTsPNH6pPCEhcGk75xJ3XQhuhKXErhyBihWB4gBLA1qynvhFp",
  "key41": "2zMaAWw2sMQzcTUva5g2v3JD1ETe7R7ArGC7iKajHMZ6324twcjvQEDnyNYQQT4PqUW2dC1vpF1CTzsUqBGGdsGM",
  "key42": "3VzhFSyhnQD1MQe5DS7Y6eWbEkMnGKkx3TBsGA7LjcmY69pVTGyWvo1mJgVyikbXbcnGj45yTpCmJcWiwWabzPjy",
  "key43": "5X3NZQWCFFupP5dmTwX5R6cPpR4TzHXVpZDetzGAhytgXWoV7sAZArVR46dFEk41NtxfoDzNMFqphiNpNXCiu62F",
  "key44": "2GG3LCzJEyfE1Hr5bsabm45yiVyrGbwvntm54r5zKVEhmFBx31cGFwSDBoJgFSQyAVcisbj9h7JRmZxXxZujrSTL",
  "key45": "5hX4fUwa5dMmjLSky2wmBnEmNoqWoPZkdf2X4RNQeEnGSDrsUdkNNsgP48RgtpbMnNKzzjyq78wAYXWtRu9c9y9Q",
  "key46": "1LVmUsYwkbGf1N9AKhmwxbRivcxCyyf5hRMRpmTK2joQvrnrtkKPWd3G8Fo9xB8dcwjtHnxF8fpporm4hTErJ98"
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
