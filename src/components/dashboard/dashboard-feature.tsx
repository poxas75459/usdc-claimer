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
    "4GppTAvTPQmPoLgBCMAnCVzPSBAqeu3P4CgJGhqKoQj2ook2xzvtwTcS9eTVuTzR5irUnEk56SAWak1QYYU3Ho2M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uKNzgaeCHLjC7yWPY5c5cTkt2GLwqsitEC7rh9f1SaDxo3orEtbhE1TeFqH8CdzL6GQzPwn3etnoRxSEo1aS4rz",
  "key1": "5XKeC6UHsvw1gWq5viKKYBpd2UGL67SmuZ6Bn3DUno2vR3XY29vT8bJTK5CERAsEV14Q81KyCPuCjY2jFatFxQDo",
  "key2": "2JxKRU5jEfa1QccfUqfonXzhzL34oMDfreNsiNSYvqHFdYjpLGeg7ZsLMV8aivTdWPsu9wGtzWZbrXSTRxFnfQAM",
  "key3": "42SKLpNxs3pDoCbrZ78w3zzcjGWqrT6YQ45TWhASMnazEVeXenZLJCqKRjCVtwn16ARTDTEQ75HCWGq8FkR8PWen",
  "key4": "dK2WXtzQXhf236SG9QmSzxFZth7Y4iM2oPhs5MCWmTdPVTM7NBPnUw5qUxDmi1ggGbjEJxJ9zPMt5Yb5LFydxBB",
  "key5": "4BNenMqCt2fEfA2Vg787LHbmqUTzqwqVdCG2ZXEuKzspjG39TrKgNNGXrdcxMFKqPitJbWDVhudjMnrCXQbZCKR4",
  "key6": "2Ar6Um5qLcEHGrpHPMY5nEWL4aqtwaYBn4nquB2T4iJ7LwQAarAs8yG9u6jEkuvqM4ukgd2rXD6s2z9kAPyXQ1Lo",
  "key7": "3Xg8cvdNafs2b1nUeJiUuq4FZXFVXU5quHjQJfeY5PWxr684nDHCMJfGtTRK5wmG4m2RTwVYbcwkv6QpEV3XAoFg",
  "key8": "yQEvUjb2PremyJj9TRzAFgjMNtaeg7kM4y1vPzdUQ6dS76EGAtiAS1ZPhKBpsaDGhiAuVk5SwnV8Qzxz4VaQwty",
  "key9": "5FKt2EEYYDrsti7F2jZr2mA4knL4PfsS6xUGYYmnU6u43QoBkaDeon2gGcDEiJe2psVScQoLSY2bhGt5Wd6AgsTZ",
  "key10": "5b2FEVMmtnG1Gh6B5PAFAa7k6FpYhAbxBiJgb4tqHCNQYBthrSSzXBc82ybgEVjFzN4roVBmFqx4kttzJiQxzL5o",
  "key11": "3xCGFGgct6YR7KRyK416rCwcTD8kYdT811vUwZdmRhVrLRzUF3RvgPMpw1vA5kcKHcdYF9sTgSjtmgMhDH3VXPG2",
  "key12": "3ZrpQFddVyN7dyBNjdrLMG4g2zJKqNcRVzc8EajZdrvzAbFz7vnHYqwWik8umDFet3gS96o617iiwrUzsQv54kTq",
  "key13": "2NzKdDX5iEr5DySqEHKuW29Lg9Bzgs2PFa7ZcjCS3HfvEKZ7Prd5JWEQq7hLNBnzr3bCjHCw8W2VpgSDYHpWreMq",
  "key14": "39J1eFEfkPxg1XtUGd62HPTX7P9fS4vKdKPH914VGK5oDGiXbFXhDPXPRr4wUzb7q3x4EWmr4hGwU7gCVHnxcoKV",
  "key15": "3LvbM4grTUmmouDQFJC1jucbhteXgaTzfB15BRmLtPgLKkFtiCY8rkotnCC8CcDpynmPocMKMk9yT6XwMYgoQmE8",
  "key16": "2xsoCTjjWckfUvZYuhusms46iY6JjN3yjcKF3wzkRnGBWvxHCXnZqti7ZrWN4GsGV9d9SktuYkWxTMPtLzts9Utw",
  "key17": "3nQeviF8SuFk3r55vekcGUAopy6E9x3vDvPJAP62zH5PUu4z3BeHjPCi1ZZ64q3X5WKUC1iEEPcVMzBcZA63WA7U",
  "key18": "3N8msYjPQAhEAbV2ScDinttrZPuotbJFbbLZJMGhV5kJQmEnpk6AqeYtwKNgMiUA1NYN2FmY4jwzhLY6Ko5TJqqd",
  "key19": "2UPFgSinfrJ4DkJrGTgG77YRJ4bGygQQQM6pLpPpkixB1ZjVKSGx2W6LhjzkQZLRCrdemGNxWfUpqERTxyJ9dEf3",
  "key20": "5T5932JAYgyF4CfPDdRnMyd7FKbZWRbG3nUmRmgtSXEx56d2KXHNmsyeJkM2sQoNYgEQbbm9nrpBnnD1FykKY1Gg",
  "key21": "4jxpBrh8CCV2e4EWqhmAuNLnSUH1xtDWkN6mM1khzp3YT8w2a2VvPHxa6Nu9G8LiHh9NFUmJTAMVn96F4vj6j5u6",
  "key22": "2D3EqpH9xZNfWVNQGpSqnkYpxefBjJ5iwSFMDBEMXckfiz2zDjGbLeYndPDmU7cqFZcoiJKfF8aZFWJGsZ2tnHSr",
  "key23": "5wRa4dddnunvKmYqY3SWsDffnxzbJaqf7JjTVNQX3oMm4UAVXaY45HLgW3XmFZqc3NK1pF8Hq8FpYG3yjJymoKYr",
  "key24": "2jk4dML1pDCKMz2TbUktQ4B3opP1gKCDE319APnCiupP8zJgyLPckit6GZiCvY6cHdp2QycsgeNeQS3wK2rMaLiF",
  "key25": "2d3bRywwDbSeG3hFxrXLrCnLDsxXYWjzPjdCDhaQDmVdA4juHWtTJt9JmGPQqWBeEP7mj9zNvEsQZKyABzKAVU9W",
  "key26": "3itugWSymxwh1s7drSE5DJ4RnFt462dRbzZNxbefJ7EaTjaVRa6NQA5SdRUy7u2zWRD7UauZEzyR2DoesLyt9pv2",
  "key27": "3JQKrgdmgHHTbMNvEN9FPsbwCLavkQhjscwL5VE2GD8XpE4hnvJiPKBj5aRHwhVNjbN72Yy5WRwADrXtfUavM59a",
  "key28": "AKKcA8KbyPwQVri6NWvsz8Rt5pELqYY3zPz94EfmgGYjSiR76uLXiMe41gNQtMWEmwjyixUQZ2Pd3VgeKQLbWCj",
  "key29": "2Fi8mPvxkxhAkGVJNFXcTWhHstVcGdweKYs8u7d1n9X73PMA3ao4kS8j9HY4QcaGtVcvSHzhHU7zP5Avh5viAybB",
  "key30": "W5SiRuDovCUTLHmSyd7DY2v9A2LV4KF2ygHo34Wd3Tv5dQsRPTaMYW6PYnobxLTSuAcCsGu9KzJuHpfZrnNcmHK",
  "key31": "4FoeB45LFQ6zhudwWP35Uy8Bod3QLDtqVpyAw6rz5W5he6fqi3TsCsXUT2o89twgBjuvVz3F3H5i1Tp3ofyuXS2",
  "key32": "35567t6iXSBhexd8Vf9dwGEs1Cfn2LGspCVrbWK3Y3Hv3zFAz9HqFpYZzvAjzCsMVXczGyJAx9jqW9iu2fLuejYS",
  "key33": "2gxd7uCdFDZShS2sfzM6Xe1ZkYWCF1hm1grNHb7dB8bB96Q9iUDpddUN8qdxSHdABHdTC54KR7zfXisFL3FvPWpQ",
  "key34": "22tPVzHPpfAQMqcQpeC3yqRDUDASCQoheLrHjM9oZmnqpnkV2LaBBNeftZR3j89p8hnvSzf4eXFMXLDeu95Gh1VE",
  "key35": "4Mto4jaLNQon6csscryd1aSCckuFRaJKv4s379c3LnRjyJWJBE9EkUEr37n1R6ySV7mSbTcWTdk5hH71dyk6kbhq",
  "key36": "5PxQb6oCeceDWUfEfuNDdXeZaVTwk5ouMgg5UepdymajcH6nHTpgAnChMLPrGpfJTPGyrP3M8PLcN2PzEzKdeTBs",
  "key37": "VkZwV7mvwf1YrzAMW2erTbs5eGxNVKvugBAdaFE678z2SZK3MDSVnf6DmAJqzemifsGmqxywFhDkmZiPJdNSs8U",
  "key38": "w7UnBFgci5vanWrNiZAYjigyh9qv82GGSaGqxiP6c9FQsiADVSdttfUwbpY6v6x9aw5sYADoS8DQ7o3V8fFsmFj",
  "key39": "61vrv3Lmt9EQd763PWPs869mf4QyRZC7aQ5ByVS1ReAjyRKCyVEx1n1afmm7nuknxVwoND2PZLgvtTCYnp67Jakq",
  "key40": "4SbWZ9WNWamdYGpY6GxZi5QJSWDDxKrS7gPZGvTdiqnFa296xLP5de5Z7CcxCfqkXa6MnqbaAFBq6aD7or35kKB8"
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
