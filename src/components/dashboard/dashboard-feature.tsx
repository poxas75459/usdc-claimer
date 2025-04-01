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
    "3hnkMJkcBStv4rNTaawvV3Z5V6DkKey7nYVhugRr6YT1bjS3XSqVzuKuZE4dsZzTXbbt82yV7HU2w12LtfsGpgK1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FkKmJw3aSzvKEJ7qEUJRRdbjaWPx2MFPowRaP1a1hnGtunv9CajVDHGT92sTcvq6Jvi689teQg4HUZqcjDVeskF",
  "key1": "2spqwqccHHbDbHbZ6LJFKew549s8tNWJP6L4yzKtwzmaUktmPYwP57atPfzCpAQPESJbmyW7NYJghyo6d47pPeJf",
  "key2": "3PbWfkTKmhK5NTnm1QvC3UTpPaZrttdZyb6W7bKE6tZk8eFb3i9jw6aHFMCtScmffoErYUoMpS3XfHKhqbBHrSAh",
  "key3": "2CSY8SqqJWKPUDGTvR6TKGe2uDv6FbbFGBnsbfeWKoFJDf96rsBHvwHmuiTnJ9RZuhjAUVMWGaZ8KSJXSjMsiiXa",
  "key4": "5q3bz5JtZu2f6m3WcJ7jzu4djmHPfCwKqLy1N9k92tuuyPuXAVRppi4RF68Qp2E5EMBc54Y7NLprviuAG89SQofP",
  "key5": "43odsnmCAuSXHRuKHgNTnwrTtHVimV7bwfNY3vTSsXxi8tnxULyGwhA73Q2jnTJ8dRxiBdvcA586WeTqKGiA71gF",
  "key6": "3nLn9sWKuqx57jZpq6MnDiZEf4LNCTHyN4WhLKxprfKApxokeitTqwtR5KQMncUKxsU5fLFx4y1kGYFn1KwXxFZL",
  "key7": "5voGghVrHvjB3WF8gpEfjWCegC2cqAsDKHfNiwEA41KhbeEkF6f5YS5LukFAZ81cHcBhVJv5U4q6s4zJJZxLKGyV",
  "key8": "2LGqG5meGU71CotUqztSkSFrqPbMCStWkzQthXN8j7yQDu3Tgfyytt2aHKC1mi8FdgSw5dD5Zadp4vfoaC57mZUK",
  "key9": "2BB5SHYDP4qersD9NTGt3A4GfQDUv9rohpHMYhSq4kp5H6BjtXbJ1VcJCYMaYZHKSqXGJxqB1MwpgcKTyo3AGAPP",
  "key10": "RAZCLvGsNbh6eZfxwppvUcZYngjcJ5y6xd9jZBqsqPyQxm2R98VTr6BydfiVK8NRMr1uGeoHhUzPrKqirqMSsLN",
  "key11": "3QLGzMz19MSAo7vBde5KQSRQ7vtjtmfi2jWRtpGmnaTkzfRFhCMfZJNwLaAoruHKfWiQXBwxCeNmKeXvnirPRqgc",
  "key12": "5PQpDRLHAu7qXFqY5yeNGq7Ts7S3Mmtg4dDaNgfAnummFoNiH46PveaJ6ycum55FAJEDGr4Eou4so2vY1htXiAam",
  "key13": "2JWRms2HnkANH3ZAuAbr6dDtgZkvJqabyxeUEVmp7hnffbJpPcJvyzEf5biKkP2NttuMvYJ2nDfWcCmmGx9jMZL9",
  "key14": "31B9fJkM5NUhgLH1CD2qWDSjXvkVaURvuZ7AAQFTtyt15TZbiPUDqM1TQGNVih3aS7jNiekVvbahMpn3EAnjAzeZ",
  "key15": "5mXfx8PERpQXnB9Jz6JGeHB8uvzWQ4Hzd8qGcg5pHgr2B5DJkLgszCvH3VJchUDrHcBWMyFJtuk31AxvpYhbuT1w",
  "key16": "14adDzUzb513fRNW7Y67WgH1ewdhsD8SuL6gh1rVb6dZy3LvyjE2gae1vBdsijuWgveRUsRHLLhQENWmzYS6Sz7",
  "key17": "5eVpNLSTETDhEAqJFVo9YsiohqwBySSiN2ipHNnTNRVvUZN4kriJt1mRuL1APPBzYwkJ2McRXRReCfoiFke3HiKX",
  "key18": "5N73ZET5BHji8qcQprSMzWHNkj6pZUMdspJqZP5nmDq5XuuTvgyYqbD1MeR8qEaoLNW12pfzTMnSF3Zr3P2W74fq",
  "key19": "XxBbcPJoRB6ej7cKautWutfFGxGXtjtQBVGjVaf2AkbpEyUbmPJGwAKsAPpdhAQKTgKsk3tW4cHcBUR9tCExfeV",
  "key20": "YegB1ewSof4EQPpREiGQze2G45AKGMSQYfwoaZ8P2Vrg8HeeTAQm8J629rjSA9eU2FAM5Bv1qhkcCrS4kenmCmM",
  "key21": "5ms91M51njWNbYKynViKS6q7viDWWzFG6GQavY9xknBxzNg8KxXzqPUVG9q7HWQm1SQmsvswFV6pwt6cGUPfJo2D",
  "key22": "4p5sNzeQnRMHEJ1nftjFN1QAnSEEmdWoRwm3WWBjQgWe2yohEwbj7rMZmxcmELU8RUUnci12RLMh41zKipWa6T2D",
  "key23": "2HDYrMRTMmgebW1VHqex4bhaS4Zg1hziuhmFsz1j2ZCkpA8XBZZGBXFVokntwLbUiR5vHazVsaFTXokdZ6cXd6t8",
  "key24": "38kLEqGi2VT9CFPhV9qiYW2aoAhEYmmpfwoU99FkHBtLvRnSZDQhBnhexaCXLmufXvC9mop8maDbKvLLKs4uH4ab",
  "key25": "3F7Azk4Fnuj9WTb5e4anLXSY2LDXwWmtmNxAw3HWjS5RigwqNDvqBsiM8xCWDnk7YT7Sav7iEfhHg8MFUhxP4hZn",
  "key26": "3Z7Zgp9QbU8kz7bJGBjp59gCavczgEQ4PrPQQuTUDNGE39CKkkszismT791tqqjirLvvEUsDi7HZchKjZ6EYkowU",
  "key27": "wfgSnjTFVwfbPTMqZb2arp8yVEwvjyfx3oFT88YySoG5ZEKFSGBKn2d7AZtWQ5J4zptBZ4AeF1pdTQEXAvWjjcR",
  "key28": "3n67PGf5FfDeFHPbdrSRMfXJ7faDQkTtykRhdWBbTN3A3n6u3qDYEEmPLGH295uabUKq9sY9wkD8fVTCmuXMBVEB",
  "key29": "a2vRqyPV4Sd41SHQ6f9CVEU2vZdoc6KvYCuQPP6DkDtehXmxiortpanD6g63RW6cXkRPJ2gnJwavUgvQ8UM5LUt",
  "key30": "27gtKNMKj7SgFQ3iPaKHd8NKut6pCNBhVczZEaudSNQ7Fcwx7aEbXWknZQAAF8DNiQ14YbnHgX8PY2svRdWuykSq",
  "key31": "5Ch11gbFvsqLEoCxJLjyAaBDsMJtkqeRTvjb1NAJok9b7yyjvMCAZeK2A5VmLP8aLhWxnK2sMX75wbABFaxxG2M4",
  "key32": "5CihmxRxTJGrBH1kxBw6VAkqQQqt2nxSZP6Kz7q8mScDosEvQbdTCfrCCxEWBuD8smgXX3G4UrBp3GXYisUw9K69",
  "key33": "4sFdJXsuGPEQ2ZcWE7626dyoM2jFPAnhH4Dxphq9uEWJnU8fdxTqLreTT6CP36eBweU9CPwKLxFJdxBg93yoqKGH",
  "key34": "RYoRNdf7aGFhkfThr1o3yJtKwaN5xbECFPDneWmNRhu4tgDqfUrFVowdKRMyaKaHrAka3EK1LeiHmp5WHrXAetK",
  "key35": "5QryNfE8WVwTjy9CLxBmjmPd6fd818LG53pXMyrS2bzq6Aa15BFW6R8WK8UKuiwyN1fgGsVj7bVB4h6p2mmdYAbD",
  "key36": "5CyrhzWLpYtUuDaLYDbKrdSNsRbRKsu8kVMKvR7WotiCN8xAV4JkvrFPoPehg3LcME2w45Ky7gfHWC91EXVNN4YN",
  "key37": "h3GGHP3U8MZJ4UapJoQictoxEwYeR5FcWXc5o82qJRRh51uLeDZJS9jE6iQQ2CsfZsRDXiCUDxmKvrG4AWScc4G",
  "key38": "2DM9dGAcYgpyJwvnT5V4bRFD9fLLN7jfF1utQrsNyJXCdewoGDaEbgMftQDasoh29CbTjEmi1xMP6Eby94LJ8zSW",
  "key39": "H3KxG3kpDm4uVZuWq3iuXKp6jcHn7y7LvDCkLmy5P7beSrZbwJhnAKadHC1diKf9Q8o5tXPMoYBqXRTrmqkwin8",
  "key40": "2n2s6xCgwxX6twhtjyACUU4SprLn3dWDyCVEbdWXeCxwAKvW7xy2nBvZMJsgBHXqr6oKFKotqVatCSkDXbLDs6rh",
  "key41": "zbAiqkrTKvE7E2LpfPmeEB3W3e1NXqZ2HzRdm9PudKSiJKEfVFTM3K4FhFpGn7ckXvBgnkwQEAW9Ey7MarFUmPP",
  "key42": "wVH3JmJd75NNLszsRtziZb7fgbay6fyfwGVuBfiqrDaSKe5ga4KCVyYQQ9vfVZBv69BnqCVgGaRbJDKR39kpb8S",
  "key43": "5X8eeMJ9Ds2zMz2tUQnev3tDKssx8MAYWZJast739B2Ka4wm8bndmLNTjF3JhhUTNHYaubueGf8oPqw5DyKB7umW",
  "key44": "oFULsP1RAjkjFwu9SK8JcAhrcGrQYwPwPJts8hu3tdPvFsoZPtqzJtMEkorzm6ZgizHBbVyhUBxgsfSMUjYscRV",
  "key45": "5UXEnMq2L6hYCBxL5UK5sAovHXfSmf3FKLYtXCMnvyeB9EAi6xZUD93F3cU4tCFkiMi5P9TUPGerCtZFrnaYRHfL",
  "key46": "5AkHFiGufxU2oBVid1BGprMNcUiVsmGV7S4ejRoEunA22SJ3UZJmXZNYiVF4hj7hUgxUUtNkm1NGzChuUEPbSSKd"
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
